var EventEmitter = require('events').EventEmitter;


function TestValidation() {
	EventEmitter.call(this);
    return (this);
}
TestValidation.prototype = Object.create(EventEmitter.prototype);

TestValidation.prototype.Validate = function (params) {
	var self = this;

	if (!params) {
		self.emit('error', 'params required');
	}
	if (!params.testId) {
		self.emit('error', 'test id required');
	}
	if (!params.clientId) {
		self.emit('error', 'client id required');
	}
	self.emit('validationComplete');
};


module.exports = TestValidation;
