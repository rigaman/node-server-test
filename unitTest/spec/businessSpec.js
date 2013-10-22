var business = require('../../lib/business/test1.js'),
	businessTest = require('../../lib/business/test2.js'),
	events = require('events'),
	eventEmitter = new events.EventEmitter();

describe("Business unit tests", function(){
	it("Expect business module to retrun proper json", function(){
		business.getJson({clientId: 1, testId: 1}, function(err, data){
			expect(data.clientId).toBe(1);
			expect(data.testId).toBe(1);
			expect(data.count).toBe(1);
		});
	});
	it("Expect business module to retrun proper json", function(){
		var business = new businessTest();
		business.on('getJsonComplete', function(data){
			expect(data.clientId).toBe(1);
			expect(data.testId).toBe(1);
			expect(data.count).toBe(1);
		});
		business.getJson({clientId: 1, testId: 1});
	});
});
