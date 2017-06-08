// save express framework in a var
var express = require('express');
// app will be an express application
var app = express();

// set port
// env stands for environment
// basically let heroku sets the port for us
// but if for some reason it can't set the port we mannually put it at 8080
var port = process.env.PORT || 8080

// allows us to serve static files (images, CSS, etc)
app.use(express.static(__dirname));

// routes

// when the user access the default page of our application this function
// shows him the index page
app.get("/", function(req, res) {
    res.render("index");
})

// server must listen to requests and send a response to each request
app.listen(port, function() {
    console.log("app running");
})
