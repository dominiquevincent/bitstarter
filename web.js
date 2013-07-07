var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var fs = require('fs');
	try {
		buf = fs.readFileSync("index.htmle");
		if (buf != null) {
			response.send(buf.toString());
		} 
	}
	catch (e) 	{
		if (e instanceof Error) {
			if (e.code === 'ENOENT') {
				response.send('Error reading index.html');
			} else {
				throw e;
			}
		}
	}
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});