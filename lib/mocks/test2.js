var util = require('util'),
    EventEmitter = require('events').EventEmitter;

function RepoTest() {
    if(false === (this instanceof RepoTest)) {
        return new RepoTest();
    }
    EventEmitter.call(this);
}

RepoTest.prototype.getJson = function (params) {
	var self = this;
	self.emit('getJsonDataComplete', {null, [{id: 1, name: 'record # ' + 1}]});
};

util.inherits(RepoTest, EventEmitter);

module.exports = {
	RepoTest: RepoTest
};