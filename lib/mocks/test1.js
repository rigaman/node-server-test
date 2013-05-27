function getJson(callback){
	callback([{id: 1, name: 'record # ' + 1}]);
}
module.exports = {
	getJson: getJson
};