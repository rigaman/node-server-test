
 var validationTest = require('../validation/testValidation2.js'),
 	businessTest = require('../business/test2.js'),
	repoTest =  require('../repo/test2.js');

function getJson (params, callback) {
	var json = {},
		validation = new validationTest(),
		business = new businessTest(),
		repo = new repoTest();

	validation.on('validationComplete', function(){
		business.on('getJsonComplete', function(data){
			json = data;
			repo.on('getJsonDataComplete', function(records){
				json.records = records;
				callback(null, json);
			});
			repo.getJson();
		});
		business.getJson(params);
	});
	validation.on('error', function(error){
		callback(error);
	});
	validation.Validate(params);

}
module.exports = {
	getJson: getJson
}