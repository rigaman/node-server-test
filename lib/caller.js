
var request = require("request"),
 	util = require("util");


function get (clientId, testId, callback) {
	var url = ["http://localhost:3000/svc/service1/getJson?clientId=", clientId, '&testId=', testId].join('');
	request(url, function (err, res, body) {
		callback(err, JSON.parse(body));
  	});
}
function getService2 (clientId, testId, callback) {
	var url = ["http://localhost:3000/svc/service2/getJson?clientId=", clientId, '&testId=', testId].join('');
	request(url, function (err, res, body) {
		callback(err, JSON.parse(body));
  	});
}
module.exports = {
	get: get,
	getService2: getService2
};