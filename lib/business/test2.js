var requestCount = 0,
    EventEmitter = require('events').EventEmitter;

function BusinessTest() {
    EventEmitter.call(this);
    return (this);
}

BusinessTest.prototype = Object.create(EventEmitter.prototype);

BusinessTest.prototype.getJson = function (params){
	var self = this;
	requestCount += 1;
	console.log('Processing request# ' + (requestCount));
	this.emit('getJsonComplete', {
			testId: params.testId,
			count: requestCount,
			clientId: params.clientId
		});
};


module.exports = BusinessTest;