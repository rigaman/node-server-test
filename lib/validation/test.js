function validate(params, callback) {
	var err = null;
	if (!params) {
		return callback("params required");
	}
	if (!params.testId) {
		return callback("test id required");
	}
	if (!params.clientId) {
		return callback("client id required");
	}
	callback(err);
}
module.exports = {
	validate: validate
};
