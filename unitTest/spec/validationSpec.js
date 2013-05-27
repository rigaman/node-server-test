var validation = require('../../lib/validation/test.js');
describe("Validation unit tests", function(){
	it("Expect validation fail if there is no client Id", function(){
		validation.validate({testId: 1}, function(err){
			expect(err).toBe('client id required');
		});
	});
	it("Expect validation fail if there is no test id", function(){
		validation.validate({clientId: 1}, function(err){
			expect(err).toBe('test id required');
		});
	});
	it("Expect validation fail if there is no params", function(){
		validation.validate(null, function(err){
			expect(err).toBe('params required');
		});
	});
		it("Expect validation pass ", function(){
		validation.validate({clientId: 1, testId: 1}, function(err){
			expect(err).toBe(null);
		});
	});
});