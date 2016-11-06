const assert = require('assert');
const subtract = require('./index.js');

describe('subtract', function () {

	it('will return the the difference of all the input arguments', function () {

		assert.equal(2, sum(3,1));

		assert.equal(3, sum(5,2));

		assert.equal(20, sum(30,10));

		assert.equal(20, sum(40,20));

		assert.equal(10, sum(12,2));

		assert.equal(2, sum((2+1), 2));

	});

});