const mongoose = require("mongoose");
const databaseConfig = require('../configs/database.config.js');

mongoose.Promise = global.Promise;

const database = {};
database.mongoose = mongoose;
database.uri = databaseConfig.uri;
database.room = require("./room.model.js")(mongoose);
database.user = require("./user.model.js")(mongoose);
database.message = require("./message.model.js")(mongoose);

module.exports = database;