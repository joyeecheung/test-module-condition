'use strict';

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var require$1 = {};

const resolved$6 = 'module';

var module$7 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	resolved: resolved$6
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(module$7);

const resolved$5 = 'module';

var module$6 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	resolved: resolved$5
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(module$6);

const resolved$4 = 'module';

var module$5 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	resolved: resolved$4
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(module$5);

const resolved$3 = 'module';

var module$4 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	resolved: resolved$3
});

var require$$3 = /*@__PURE__*/getAugmentedNamespace(module$4);

const resolved$2 = 'module';

var module$3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	resolved: resolved$2
});

var require$$4 = /*@__PURE__*/getAugmentedNamespace(module$3);

const resolved$1 = 'module';

var module$2 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	resolved: resolved$1
});

var require$$5 = /*@__PURE__*/getAugmentedNamespace(module$2);

const resolved = 'module';

var module$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	resolved: resolved
});

var require$$6 = /*@__PURE__*/getAugmentedNamespace(module$1);

console.log('import-module-require', require$$0.resolved);
console.log('module-and-import', require$$1.resolved);
console.log('module-and-require', require$$2.resolved);
console.log('module-import-require', require$$3.resolved);
console.log('module-only', require$$4.resolved);
console.log('module-require-import', require$$5.resolved);
console.log('require-module-import', require$$6.resolved);

module.exports = require$1;
