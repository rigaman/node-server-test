var requestCount = 0;

function processRequest (clientId, testId) {
	var retVal = {},
		records = [],
		i, 
		len = 100000;

	console.log('Processing request# ' + (requestCount + 1));
	for (i = 0; i < len; i += 1) {
		records.push({id: i, name: 'record # ' + i});
	}
	requestCount += 1;
	
	return {
		testId: testId,
		count: requestCount,
		clientId: clientId,
		records : records		
	};
}
module.exports = {
	processRequest: processRequest
}
