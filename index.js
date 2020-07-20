// importing express framework
const express = require("express");

const app = express();

// Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
 return res.send("Hello World!");
});

app.get("/version", function (req, res) {
	require('child_process').exec('git rev-parse HEAD', function(err, stdout) {
		require('child_process').exec('git tag', function(err, v) {
    	return res.send({"version": v, "lastcommitsha": stdout, 
    		"description" : "test2 outcome"});
    });
	});
});


// listen to port 7000 by default
app.listen(process.env.PORT || 7000, () => {
  console.log("Server is running");
});

module.exports = app;