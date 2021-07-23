var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    timestamps: true
});

module.exports = mongoose => {
  const Room = mongoose.model(
    "Room",
    schema
  );

  return Room;
};