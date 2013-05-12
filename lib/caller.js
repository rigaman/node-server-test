
var request = require("request"),
 	util = require("util");


function get (clientId, testId, callback) {
	var url = ["http://localhost:3000/?clientId=",clientId, '&testId=', testId].join('');
	request(url, function (err, res, body) {
		callback(err, JSON.parse(body));
  	});
}
module.exports = {get: get};