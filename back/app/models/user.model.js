var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var schema = new Schema({
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    },
    name: {
        type: String
    },
    token: {
        type: String
    }
},
{
    timestamps: true
});
schema.pre('save', function (next) {
    var user = this;

    if (user.token == "0") return next();
    console.log(user.token);
    if(!user.token) crypto.randomBytes(48, function(err, buffer) {
        user.token = buffer.toString('hex');
        next();
    });
});
module.exports = mongoose => {
  const User = mongoose.model(
    "User",
    schema
  );

  return User;
};