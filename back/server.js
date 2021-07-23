const express = require("express");
const appConfig = require('./app/configs/app.config.js');
var mongoose = require('mongoose');
const database = require('./app/models/index');
var router = require('./app/routers');
var fs = require('fs');

database.mongoose.connect(database.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Database connected");
})
.catch(err => {
    console.log("Database error", err);
    process.exit();
});
const User = mongoose.model("User");
const sockets = require('./app/sockets/index');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(function (req, res, next) {
  req.user = null;
  if (req.headers && req.headers["Authorization"]) {
    User.find({ token: req.headers["Authorization"] }, function (err, user) {
      if (user) {
          req.user = user;
          next();
      } else {
          next();
      }
    })
  } else {
    next();
  }
})

app.use('/api', router());

app.get('*', (req, res) => {
    if (fs.existsSync(__dirname + '/app/public' + req.url)) {
        console.log(req.url);
        return res.sendFile(__dirname + '/app/public' + req.url);
    }
    return res.sendFile(__dirname + '/app/public/index.html');
});

const PORT = appConfig.port;
let server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
sockets.initial(server);