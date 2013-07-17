var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var fs = require('fs');
	try {
		buf = fs.readFileSync("index.html");
		if (buf != null) {
			response.send(buf.toString());
		} 
	}
	catch (e) 	{
		if (e instanceof Error) {
			if (e.code === 'ENOENT') {
				response.send('Error reading file (not found?): index.html');
			} else {
				throw e;
			}
		}
	}
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});