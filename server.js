var express = require("express");
var app = express();

// anything beginning with "/api" will go into this
app.use('/api', require('./routers/api'));

// app.get("/", function(req, res) {
//     res.send({ message: "Hello, World!" });
// });

// app.get("/insert", function(req, res) {
    
// });



module.exports = app;

