const mongoose = require('mongoose');
const Room = mongoose.model("Room");
const User = mongoose.model("User");
const Message = mongoose.model("Message");

module.exports = {
    joinRoom: async (req, res) => {
        var room = await Room.findOne({ id: req.body.roomId });
        var user = null;
        if (!room) {
            user = await new User({
                name: req.body.name
            }).save();
            room = await new Room({
                id: req.body.roomId,
                user: user._id,
            }).save();
            user.room = room._id;
            user.save();
            res.send({
                user: user,
                room: room
            }).end();
        } else {
            user = await User.findOne({ name: req.body.name, room: room._id });
            if (user) {
                if (user.token != req.body.token || user.token == "0") {
                    res.send({
                        msg: "Username has taken! please choose another"
                    }).end();
                } else {
                    res.send({
                        user: user,
                        room: room
                    }).end();
                }
            } else {
                user = await new User({
                    name: req.body.name,
                    room: room._id,
                }).save();
                res.send({
                    user: user,
                    room: room
                }).end();
            }
        }
    },
    createMessage: async (roomId, userId, content) => {
        var room = await Room.findOne({ _id: roomId });
        var user = await User.findOne({ _id: userId });
        if (room && user) {
            var message = await new Message({
                content: content,
                room: room._id,
                user: user._id,
            }).save();
            message = await Message.populate(message, {
                path: 'user',
            });
            return [message];
        }
    },
    getRoomMessages: async (roomId) => {
        var room = await Room.findOne({ _id: roomId });
        if (room) {
            var messages = await Message.find({ room: roomId }).sort({ createdAt: -1 }).populate('user').limit(10);
            return messages;
        }
    },
    loadMoreMessage: async (roomId, lastCreatedAt) => {
        var room = await Room.findOne({ _id: roomId });
        if (room) {
            var messages = await Message.find({
                room: roomId, createdAt: {
                $lt: new Date(lastCreatedAt)
            }}).sort({ createdAt: -1 }).populate('user').limit(10);
            return messages;
        }
    },
    logout: async (req, res) => {
        req.user.token = "0";
        req.user.save();
    }
};
