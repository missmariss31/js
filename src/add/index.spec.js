const assert = require('assert');
const sum = require('./index.js');

describe('add', function () {

	it('will return the the sum of all the input arguments.', function () {

		assert.equal(2, sum(1,1));

		assert.equal(3, sum(1,2));

		assert.equal(20, sum(10,10));

		assert.equal(20, sum(2,18));

		assert.equal(10, sum(2,8));

		assert.equal(2, sum(1, (2-1)));

	});

});