var businessTest = require('../business/test1.js'),
	repoTest =  require('../repo/test1.js'),
	validation = require('../validation/test.js');

function getJson (params, callback) {
	var json;
	validation.validate(params, function(err){
		if (err) {
			return callback(err);
		}
		businessTest.getJson(params, function(err, data){
			if (err) {
				return callback(err);
			}
			json = data;
			repoTest.getJson(function(err, data){
				if (err) {
					return callback(err);
				}
				json.records = data;
				return callback(null, json);
			});
		});
	});

}

module.exports = {
	getJson: getJson
}
