node-server-test
================

nodejs web server process test 

The purpose of this repository is to test how nodejs server processes multiple requests at the same time.

Setup:  Nodejs web server. Single get method that accepts 2 parameters test id and client id. It returns object with passed client id, passed test id, request id and array of generated 100, 000 objects. 

Jasmine unit tests: 3 spec runners: 

unitTest1/specRunner.js,

unitTest2/specRunner.js,

unitTest3/specRunner.js

3 specs:

unitTest1/spec/serverSpec.js,

unitTest2/spec/serverSpec.js,

unitTest3/spec/serverSpec.js

Each spec has 20 unit test calling caller.js and passes client id and test id.
Each test expects response client Id to match client Id, response test id to match test Id and records array to contain 100, 000 objects.

To run server open terminal window navigate to project root folder.
Use command nodemon server.js

To run 1st spec runner open new terminal window, use command nodemon –delay 10 unitTest1/specRunner.js

To run 2nd spec runner open new terminal window, use command nodemon –delay 10 unitTest2/specRunner.js

To run 3rd spec runner open new terminal window, use command nodemon –delay 10 unitTest3/specRunner.js

Nodemon will watch all js files in the directory and will restart process if any files change.

Each spec will make a call synchronously, but 3 different spec runners running together will make 3 asynchronous calls to the server.  Nodejs server will process 1 request at the time.
