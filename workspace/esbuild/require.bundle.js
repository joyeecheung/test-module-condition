var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/import-module-require/module.js
var module_exports = {};
__export(module_exports, {
  resolved: () => resolved
});
var resolved;
var init_module = __esm({
  "node_modules/import-module-require/module.js"() {
    resolved = "module";
  }
});

// node_modules/module-and-import/module.js
var module_exports2 = {};
__export(module_exports2, {
  resolved: () => resolved2
});
var resolved2;
var init_module2 = __esm({
  "node_modules/module-and-import/module.js"() {
    resolved2 = "module";
  }
});

// node_modules/module-and-require/module.js
var module_exports3 = {};
__export(module_exports3, {
  resolved: () => resolved3
});
var resolved3;
var init_module3 = __esm({
  "node_modules/module-and-require/module.js"() {
    resolved3 = "module";
  }
});

// node_modules/module-import-require/module.js
var module_exports4 = {};
__export(module_exports4, {
  resolved: () => resolved4
});
var resolved4;
var init_module4 = __esm({
  "node_modules/module-import-require/module.js"() {
    resolved4 = "module";
  }
});

// node_modules/module-only/module.js
var module_exports5 = {};
__export(module_exports5, {
  resolved: () => resolved5
});
var resolved5;
var init_module5 = __esm({
  "node_modules/module-only/module.js"() {
    resolved5 = "module";
  }
});

// node_modules/module-require-import/module.js
var module_exports6 = {};
__export(module_exports6, {
  resolved: () => resolved6
});
var resolved6;
var init_module6 = __esm({
  "node_modules/module-require-import/module.js"() {
    resolved6 = "module";
  }
});

// node_modules/require-module-import/require.cjs
var require_require = __commonJS({
  "node_modules/require-module-import/require.cjs"(exports2) {
    exports2.resolved = "require";
  }
});

// src/require.cjs
console.log("import-module-require", (init_module(), __toCommonJS(module_exports)).resolved);
console.log("module-and-import", (init_module2(), __toCommonJS(module_exports2)).resolved);
console.log("module-and-require", (init_module3(), __toCommonJS(module_exports3)).resolved);
console.log("module-import-require", (init_module4(), __toCommonJS(module_exports4)).resolved);
console.log("module-only", (init_module5(), __toCommonJS(module_exports5)).resolved);
console.log("module-require-import", (init_module6(), __toCommonJS(module_exports6)).resolved);
console.log("require-module-import", require_require().resolved);
