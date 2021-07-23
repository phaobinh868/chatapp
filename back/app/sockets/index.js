const ChatController = require('../controllers/ChatController');
const appConfig = require('../configs/app.config.js');
const databaseConfig = require('../configs/database.config.js');
var redisAdapter = require('socket.io-redis');
var io;

exports.initial = function (server) {
  io = require('socket.io')(server, {
    cors: {
      origin: appConfig.appDomain
    }
  });
  io.adapter(redisAdapter(databaseConfig.redisConnectObj));
  io.on('connection', (socket) => {
    console.log('connection');
    socket.on('joinRoom', async (data) => {
      console.log('joinRoom ' + data.roomId);
      socket.join(data.roomId);
      var messages = await ChatController.getRoomMessages(data.roomId);
      socket.emit('messages', messages);
    });
    socket.on('createMessage', async (data) => {
      var messages = await ChatController.createMessage(data.roomId, data.userId, data.content);
      io.in(data.roomId).emit('messages', messages);
    });
    socket.on('loadMoreMessage', async (data) => {
      var messages = await ChatController.loadMoreMessage(data.roomId, data.lastCreatedAt);
      socket.emit('moreMessages', messages);
    });
    socket.on('leaveRoom', (data) => {
      console.log('leaveRoom ' + data.roomId);
      socket.leave(data.roomId);
      socket.disconnect();
    });
    socket.on('disconnect', () => {
      console.log(socket.id + " disconnect"); 
    });
  });
}