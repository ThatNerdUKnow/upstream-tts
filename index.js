// automatically pick platform
const say = require("say");
const axios = require("axios");
const express = require("express");
var app = express();
app.listen(3001);

app.get("/", function (req, res) {
  axios
    .get("https://mighty-coast-41688.herokuapp.com/api/message")
    .then((response) => {
      message = response.data;
      say.speak(message);
      res.send(message);
    });
});
