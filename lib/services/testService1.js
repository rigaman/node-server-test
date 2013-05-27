var businessTest = require('../business/test1.js'),
	repoTest =  require('../repo/test1.js');

function getJson (params, callback) {
	var json;
	businessTest.getJson(params, function(data){
		json = data;
		repoTest.getJson(function(data){
			json.records = data;
			callback(json);
		});
	});
}

module.exports = {
	getJson: getJson
}
