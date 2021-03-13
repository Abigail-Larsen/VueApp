var express = require("express");
bodyParser = require("body-parser");
app = express();
massive = require("massive");
config = require('config');
port = config.port;
cors = require("cors");
session = require("express-session");

var app = (module.exports = express());
app.use(express.static(__dirname + "/build"));
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: config.server.secret,
    resave: false,
    saveUninitialized: false
  })
);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.listen(port, function() {
//   console.log(`Started server on port ${port}`);
});