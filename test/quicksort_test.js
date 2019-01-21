const assert = require('chai').assert;
const quicksort = require('../lib/quicksort');

describe("quicksort", function() {
  it("returns the empty array if given an empty array", function() {
    array = [];
    assert.deepEqual(quicksort(array), array);
  });

  it("returns the input array if it has only 1 entry", function() {
    array = [ 1 ];
    assert.deepEqual(quicksort(array), array);
  });

  it("returns a sorted pair if it has only 2 entries", function() {
    array  = [ 2, 1 ];
    sorted = [ 1, 2 ];
    assert.deepEqual(quicksort(array), sorted);
  });

  it("returns a sorted trio for 3 entries", function() {
    array  = [ 3, 1, 2 ];
    sorted = [ 1, 2, 3 ];
    assert.deepEqual(quicksort(array), sorted);
  });

  it("returns a sorted array when there are duplicate entries", function() {
    array  = [ 3, 1, 2, 1, 4, 3 ];
    sorted = [ 1, 1, 2, 3, 3, 4 ];
    assert.deepEqual(quicksort(array), sorted);
  });

  it("returns a sorted array given many entries", function() {
    array  = [ 3, 1, 2, 7, 9, 1, 4, 2, 5, 7, 9, 1, 14, 1090, -12, 5 ];
    sorted = [ -12, 1, 1, 1, 2, 2, 3, 4, 5, 5, 7, 7, 9, 9, 14, 1090 ];
    assert.deepEqual(quicksort(array), sorted);
  });
});
