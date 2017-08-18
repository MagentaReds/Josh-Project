var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var methodOverride = require("method-override");
var db = require("./models");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE also PUT
app.use(methodOverride("_method"));



db.sequelize.sync({force:true}).then(function(){
  app.listen(PORT, function(){
    console.log("Server listening on PORT: "+ PORT);
  });
  // var dummyEvents = require("./config/dummySeeds.js");
  // dummyEvents();
});
