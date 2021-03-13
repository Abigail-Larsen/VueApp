var express = require("express");
var app = (module.exports = express());

app.use(express.static(__dirname + "/dist"));

var port = 3000

app.get("*", function(req, res) {
    res.send(path.join(__dirname, "./dist/index.html"));
});

app.listen(port, function() {
    console.log("App is up and running");
});