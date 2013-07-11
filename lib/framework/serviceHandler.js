/*jslint node:true es5:true*/
'use strict';
var services = {};
    services.service1 = require('../services/testService1.js');
    services.service2 = require('../services/testService2.js');

exports.ProcessRequest = function (req, res) {
    var serviceName = req.params.ServiceName,
        methodName = req.params.MethodName;

    var params = req.query || req.body;

    services[serviceName][methodName](params, function(err, data) {
    	if (err) {
    		res.send(err, {'Content-Type': 'text/plain'}, 503);
    	} else {
    		res.send(JSON.stringify(data), {'Content-Type': 'text/plain'}, 200);
    	}
    });
};
