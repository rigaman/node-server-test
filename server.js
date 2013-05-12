var express = require('express'),
	app = express(),
	blockingProcess = require('./lib/blockingProcess.js');

app.configure(function () {
    app.use(express.bodyParser());
});

app.get('/', function (req, res) {
	var retval = blockingProcess.processRequest(req.query.clientId, req.query.testId);
	res.send(retval, {'Content-Type': 'text/plain'}, 200);
});

app.listen(3000);