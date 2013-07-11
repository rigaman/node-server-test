var EventEmitter = require('events').EventEmitter;

function RepoTest() {
    EventEmitter.call(this);
    return (this);
}

RepoTest.prototype = Object.create(EventEmitter.prototype);

RepoTest.prototype.getJson = function () {
	var self = this,
		records = [],
		i, 
		len = 100000;

	for (i = 0; i < len; i += 1) {
		records.push({id: i, name: 'record # ' + i});
	}
	if (i === len) {

		self.emit('getJsonDataComplete', records);
	}

}

module.exports = RepoTest;