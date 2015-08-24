var same = require('array-same');

module.exports = function (source) {
	var rest = [].slice.call(arguments, 1);
	var a = toArray(source);
	return rest.every(function (b) {
		b = toArray(b);
		return same(a, b);
	});
};

function toArray(source) {
	var res = [];
	source.forEach(function (value, key) {
		res.push(value);
	});
	return res;
}