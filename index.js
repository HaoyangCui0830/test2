// importing express framework
const express = require("express");

const app = express();

// Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
 return res.send("Hello World!");
});

app.get("/version", function (req, res) {
 return res.send({"version": "1.0", "lastcommitsha": "abc57858585", "description" : "pre-interview technical test"});
});

// listen to port 7000 by default
app.listen(process.env.PORT || 7000, () => {
  console.log("Server is running");
});

module.exports = app;