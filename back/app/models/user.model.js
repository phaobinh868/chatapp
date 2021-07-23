var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;

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
schema.pre('create', function (next) {
    var user = this;

    if (user.isModified('token')) return next();
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