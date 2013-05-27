var business = require('../../lib/business/test1.js');
describe("Business unit tests", function(){
	it("Expect business module to retrun proper json", function(){
		business.getJson({clientId: 1, testId: 1}, function(err, data){
			expect(data.clientId).toBe(1);
			expect(data.testId).toBe(1);
			expect(data.count).toBe(1);
		});
	});
});
