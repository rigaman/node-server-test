var EventEmitter = require('events').EventEmitter;

function RepoTest() {
    EventEmitter.call(this);
    return this;
}

RepoTest.prototype = Object.create(EventEmitter.prototype);

RepoTest.prototype.getJson = function (params) {
	var self = this;
	self.emit('getJsonDataComplete', [{id: 1, name: 'record # ' + 1}]);
};


module.exports = RepoTest;