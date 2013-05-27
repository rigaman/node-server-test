var caller = require('../../lib/caller.js');
describe("Server spec 3", function(){

    beforeEach(function(){
    });

	it("Test 1 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){
		var ret;
		runs(function() {
			caller.get(3, 1, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.testId).toBe('1');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 2 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 2, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('2');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 3 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 3, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('3');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 4 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 4, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('4');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 5 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 5, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('5');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 6 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 6, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('6');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 7 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 7, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('7');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 8 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 8, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('8');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 9 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 9, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('9');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 10 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 10, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('10');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 11 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 11, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('11');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 12 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 12, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('12');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 13 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 13, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('13');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 14 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 14, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('14');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 15 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 15, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('15');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 16 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 16, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('16');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 17 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 17, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('17');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 18 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 18, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);
		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('18');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 19 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){
		var ret;
		runs(function() {
			caller.get(3, 19, function(err, respose){
				ret = respose;
			});
        });

        waitsFor(function() {
            return ret;
        },  7000);
		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('19');
             expect(ret.records.length).toBe(100000);
        });
	});
	it("Test 20 Expect response to return array of 100,000 records, test id to match response testId and client id to match response clientId ", function(){

		var ret;
		runs(function() {
			caller.get(3, 20, function(err, respose){
				ret = respose;
			});
        });
        waitsFor(function() {
            return ret;
        },  7000);

		runs(function(){
             expect(ret.clientId).toBe('3');
             console.log('test id: ' + ret.testId);
             expect(ret.count).not.toEqual(1);
             expect(ret.testId).toBe('20');
             expect(ret.records.length).toBe(100000);
        });
	});

});