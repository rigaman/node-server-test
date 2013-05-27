var requestCount = 0;

function getJson(params, callback){

	requestCount += 1;
	console.log('Processing request# ' + (requestCount));
	callback(null, {
			testId: params.testId,
			count: requestCount,
			clientId: params.clientId
		});
}
module.exports = {
	getJson: getJson
};