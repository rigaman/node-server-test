var caller = require('../../lib/caller.js');
describe("Asynchronous Methods'", function(){
	var Caller;
    beforeEach(function(){
       //Caller = new caller;
    });

	it("Test 1 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){
		var ret;
		runs(function() {
			caller.get(1, 1, function(err, respose){

				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);
		runs(function(){
             expect(ret.clientId).toBe('1');
             expect(ret.testId).toBe('1');
             console.log('request id: ' + ret.count);
        });
	});
	it("Test 2 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){
		var ret;
		runs(function() {
			caller.get(1, 2, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('2');
        });
	});
	it("Test 3 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 3, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('3');
        });
	});
	it("Test 4 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 4, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('4');
        });
	});
	it("Test 5 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 5, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('5');
        });
	});
	it("Test 6 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 6, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('6');
        });
	});
	it("Test 7 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 7, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('7');
        });
	});
	it("Test 8 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 8, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('8');
        });
	});
	it("Test 9 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 9, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('9');
        });
	});
	it("Test 10 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 10, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('10');
        });
	});
	it("Test 11 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 11, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('11');
        });
	});
	it("Test 12 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 12, function(err,respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('12');
        });
	});
	it("Test 13 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 13, function(err,respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('13');
        });
	});
	it("Test 14 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 14, function(err,respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('14');
        });
	});
	it("Test 15 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 15, function(err,respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('15');
        });
	});
	it("Test 16 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 16, function(err,respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('16');
        });
	});
	it("Test 17 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 17, function(err,respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('17');
        });
	});
	it("Test 18 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 18, function(err,respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('18');
        });
	});
	it("Test 19 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 19, function(err,respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('19');
        });
	});
	it("Test 20 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(1, 20, function(err,respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  1700);

		runs(function(){
             expect(ret.clientId).toBe('1');
             console.log('request id: ' + ret.count);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('20');
        });
	});

});