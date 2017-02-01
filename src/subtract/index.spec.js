const assert = require('assert');
const subtract = require('./index.js');

describe('subtract', function () {

	it('will return the the difference of all the input arguments', function () {

		assert.equal(2, subtract(3,1));

		assert.equal(3, subtract(5,2));

		assert.equal(20, subtract(30,10));

		assert.equal(20, subtract(40,20));

		assert.equal(10, subtract(12,2));

		assert.equal(1, subtract((2+1), 2));

    assert.equal(-5, subtract(5, 10));

	});
});
