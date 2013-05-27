var injector = require('../injector.js'),
	service1 = injector('./lib/services/testService1.js', {
	'../business/test1.js': './lib/business/test1.js',
   	'../repo/test1.js' : './lib/mocks/test1.js',
});
describe("Service mock injection test", function(){
	it("Expect records length to be 1 instead of 1000000", function(){
		service1.getJson({clientId: 1, testId: 1}, function(data){
			expect(data.clientId).toBe(1);
			expect(data.testId).toBe(1);
			expect(data.records.length).toBe(1);
		});
	});
});