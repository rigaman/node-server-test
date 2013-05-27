var express = require('express'),
	app = express(),
	service = require('./lib/framework/serviceHandler.js');


app.configure(function () {
    app.use(express.bodyParser());
});
app.post('/svc/:ServiceName/:MethodName', service.ProcessRequest);    // Post to a service method
app.get('/svc/:ServiceName/:MethodName', service.ProcessRequest);     // Get to a service method
app.get('/svc/:ServiceName/:MethodName/:Id', service.ProcessRequest); // Get to a service method with a an id for shortcut
    

app.listen(3000);