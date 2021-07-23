var express = require('express');
var apis = require("../configs/apis.config");
var MiddleWare = require('./middleware');
var ChatController = require('../controllers/ChatController');

module.exports = function () {
    var api = express.Router();
    api.post('/' + apis.joinRoom, MiddleWare.unAuth, ChatController.joinRoom);
    api.post('/' + apis.logout, MiddleWare.auth, ChatController.logout);
    return api;
};