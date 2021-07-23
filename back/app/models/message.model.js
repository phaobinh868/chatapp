var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    },
    content: {
        type: String
    }
},
{
    timestamps: true
});

module.exports = mongoose => {
  const Message = mongoose.model(
    "Message",
    schema
  );

  return Message;
};