var events = require('events'),
	eventEmitter = new events.EventEmitter();

function emit (eventName, eventData) {
    eventEmitter.emit(eventName, eventData);
};

function on (eventName, callback) {
    eventEmitter.on(eventName, callback);
};
module.exports = {
	on: on,
	emit: emit
};
