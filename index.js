// automatically pick platform
const say = require("say");
const axios = require("axios");
const express = require("express");
var app = express();
app.listen(3001);

console.log("listening on port 3001")
var listen = true;

app.get("/", function (req, res) {
    if(listen){
  axios
    .get("https://mighty-coast-41688.herokuapp.com/api/message")
    .then((response) => {
      message = response.data;
      console.log(message);
      say.speak(message);
      res.send(message);
    });}else
    {
        res.status(503);
        res.send("Brandon has turned off messages at the moment")
    }
});

app.get('/stop',function(req,res){
    console.log("Stopped Listening")
    listen = false;
    res.send("stoped");
})

app.get('/start',function(req,res){
    console.log("Started Listening")
    listen = true;
    res.send("started");
})