var same = require('./');
var assert = require('assert');

assert(same([1,2], [2,1]));
assert(same([1,2,2], [2,1,2]));
assert(!same([1,2], [2,1,2]));
assert(!same([1,2,1], [2,1,2]));
assert(!same([1,2,3], [2,1]));
assert(same([1,2,3], [2,1,3], [3,2,1]));
assert(!same([1,2,3], [2,1,3], [3,4,1]));

assert(same(new Set([1,2]) , new Set([2,1]) ));
assert(same(new Set([1,2,2]) , new Set([2,1,2]) ));
assert(!same(new Set([1,2,3]) , new Set([2,1]) ));
assert(same(new Set([1,2,3]) , new Set([2,1,3]) , new Set([3,2,1]) ));
assert(!same(new Set([1,2,3]) , new Set([2,1,3]) , new Set([3,4,1]) ));

var o = {};
assert(same(new Map([[1, o]]) , new Map([[1, o]]) ));
assert(same(new Set([o]) , new Map([[1, o]]) ));

assert(same(new Set([1,2,3]), [1,2,3]));