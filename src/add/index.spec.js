const assert = require('assert');
const add = require('./index.js');

describe('add', function () {

	it('will return the the sum of all the input arguments', function () {

		assert.equal(2, add(1,1));

		assert.equal(3, add(1,2));

		assert.equal(20, add(10,10));

		assert.equal(20, add(2,18));

		assert.equal(10, add(2,8));

		assert.equal(2, add(1, (2-1)));

	});

});
