var express = require("express");
var app = (module.exports = express());

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./build/index.html"));
  });

  app.listen(port, function() {
    console.log("App is up and running");
  });