var injector = require('../injector.js'),
	service1 = injector('./lib/services/testService1.js', {
		'../business/test1.js': './lib/business/test1.js',
	   	'../repo/test1.js' : './lib/mocks/test1.js',
	   	'../validation/test.js': './lib/validation/test.js'
	}),
	service2 = injector('./lib/services/testService2.js', {
		'../validation/validationSpec.js': './lib/validation/validationSpec.js',
		'../business/test2.js': './lib/business/test2.js',
	   	'../repo/test2.js' : './lib/mocks/test2.js'
	});
describe("Service mock injection test", function(){
	it("Expect records length to be 1 instead of 1000000", function(){
		service1.getJson({clientId: 1, testId: 1}, function(err, data){
			expect(data.clientId).toBe(1);
			expect(data.testId).toBe(1);
			expect(data.records.length).toBe(1);
		});
	});
	it("Expect records length to be 1 instead of 1000000", function(){
		service2.getJson({clientId: 1, testId: 1}, function(err, data){
			expect(data.clientId).toBe(1);
			expect(data.testId).toBe(1);
			expect(data.records.length).toBe(1);
		});
	});
});