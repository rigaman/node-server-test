function getJson(callback){
	var records = [],
		i, 
		len = 100000;

	for (i = 0; i < len; i += 1) {
		records.push({id: i, name: 'record # ' + i});
	}
	if (i === len) {
		callback(records);
	}
}
module.exports = {
	getJson: getJson
};