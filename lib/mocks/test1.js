function getJson(callback){
	callback(null, [{id: 1, name: 'record # ' + 1}]);
}
module.exports = {
	getJson: getJson
};