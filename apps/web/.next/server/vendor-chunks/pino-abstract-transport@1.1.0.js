"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/pino-abstract-transport@1.1.0";
exports.ids = ["vendor-chunks/pino-abstract-transport@1.1.0"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/pino-abstract-transport@1.1.0/node_modules/pino-abstract-transport/index.js":
/*!************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/pino-abstract-transport@1.1.0/node_modules/pino-abstract-transport/index.js ***!
  \************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst metadata = Symbol.for('pino.metadata')\nconst split = __webpack_require__(/*! split2 */ \"(ssr)/../../node_modules/.pnpm/split2@4.2.0/node_modules/split2/index.js\")\nconst { Duplex } = __webpack_require__(/*! readable-stream */ \"(ssr)/../../node_modules/.pnpm/readable-stream@4.4.2/node_modules/readable-stream/lib/ours/index.js\")\n\nmodule.exports = function build (fn, opts = {}) {\n  const parseLines = opts.parse === 'lines'\n  const parseLine = typeof opts.parseLine === 'function' ? opts.parseLine : JSON.parse\n  const close = opts.close || defaultClose\n  const stream = split(function (line) {\n    let value\n\n    try {\n      value = parseLine(line)\n    } catch (error) {\n      this.emit('unknown', line, error)\n      return\n    }\n\n    if (value === null) {\n      this.emit('unknown', line, 'Null value ignored')\n      return\n    }\n\n    if (typeof value !== 'object') {\n      value = {\n        data: value,\n        time: Date.now()\n      }\n    }\n\n    if (stream[metadata]) {\n      stream.lastTime = value.time\n      stream.lastLevel = value.level\n      stream.lastObj = value\n    }\n\n    if (parseLines) {\n      return line\n    }\n\n    return value\n  }, { autoDestroy: true })\n\n  stream._destroy = function (err, cb) {\n    const promise = close(err, cb)\n    if (promise && typeof promise.then === 'function') {\n      promise.then(cb, cb)\n    }\n  }\n\n  if (opts.metadata !== false) {\n    stream[metadata] = true\n    stream.lastTime = 0\n    stream.lastLevel = 0\n    stream.lastObj = null\n  }\n\n  let res = fn(stream)\n\n  if (res && typeof res.catch === 'function') {\n    res.catch((err) => {\n      stream.destroy(err)\n    })\n\n    // set it to null to not retain a reference to the promise\n    res = null\n  } else if (opts.enablePipelining && res) {\n    return Duplex.from({ writable: stream, readable: res, objectMode: true })\n  }\n\n  return stream\n}\n\nfunction defaultClose (err, cb) {\n  process.nextTick(cb, err)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Bpbm8tYWJzdHJhY3QtdHJhbnNwb3J0QDEuMS4wL25vZGVfbW9kdWxlcy9waW5vLWFic3RyYWN0LXRyYW5zcG9ydC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBLGNBQWMsbUJBQU8sQ0FBQyx3RkFBUTtBQUM5QixRQUFRLFNBQVMsRUFBRSxtQkFBTyxDQUFDLDRIQUFpQjs7QUFFNUMsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxJQUFJLG1CQUFtQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxJQUFJO0FBQ0oseUJBQXlCLG1EQUFtRDtBQUM1RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2tlbnN0cmVhbS93ZWIvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Bpbm8tYWJzdHJhY3QtdHJhbnNwb3J0QDEuMS4wL25vZGVfbW9kdWxlcy9waW5vLWFic3RyYWN0LXRyYW5zcG9ydC9pbmRleC5qcz9lMTExIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBtZXRhZGF0YSA9IFN5bWJvbC5mb3IoJ3Bpbm8ubWV0YWRhdGEnKVxuY29uc3Qgc3BsaXQgPSByZXF1aXJlKCdzcGxpdDInKVxuY29uc3QgeyBEdXBsZXggfSA9IHJlcXVpcmUoJ3JlYWRhYmxlLXN0cmVhbScpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGQgKGZuLCBvcHRzID0ge30pIHtcbiAgY29uc3QgcGFyc2VMaW5lcyA9IG9wdHMucGFyc2UgPT09ICdsaW5lcydcbiAgY29uc3QgcGFyc2VMaW5lID0gdHlwZW9mIG9wdHMucGFyc2VMaW5lID09PSAnZnVuY3Rpb24nID8gb3B0cy5wYXJzZUxpbmUgOiBKU09OLnBhcnNlXG4gIGNvbnN0IGNsb3NlID0gb3B0cy5jbG9zZSB8fCBkZWZhdWx0Q2xvc2VcbiAgY29uc3Qgc3RyZWFtID0gc3BsaXQoZnVuY3Rpb24gKGxpbmUpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9IHBhcnNlTGluZShsaW5lKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVtaXQoJ3Vua25vd24nLCBsaW5lLCBlcnJvcilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5lbWl0KCd1bmtub3duJywgbGluZSwgJ051bGwgdmFsdWUgaWdub3JlZCcpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgdmFsdWUgPSB7XG4gICAgICAgIGRhdGE6IHZhbHVlLFxuICAgICAgICB0aW1lOiBEYXRlLm5vdygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0cmVhbVttZXRhZGF0YV0pIHtcbiAgICAgIHN0cmVhbS5sYXN0VGltZSA9IHZhbHVlLnRpbWVcbiAgICAgIHN0cmVhbS5sYXN0TGV2ZWwgPSB2YWx1ZS5sZXZlbFxuICAgICAgc3RyZWFtLmxhc3RPYmogPSB2YWx1ZVxuICAgIH1cblxuICAgIGlmIChwYXJzZUxpbmVzKSB7XG4gICAgICByZXR1cm4gbGluZVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVxuICB9LCB7IGF1dG9EZXN0cm95OiB0cnVlIH0pXG5cbiAgc3RyZWFtLl9kZXN0cm95ID0gZnVuY3Rpb24gKGVyciwgY2IpIHtcbiAgICBjb25zdCBwcm9taXNlID0gY2xvc2UoZXJyLCBjYilcbiAgICBpZiAocHJvbWlzZSAmJiB0eXBlb2YgcHJvbWlzZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9taXNlLnRoZW4oY2IsIGNiKVxuICAgIH1cbiAgfVxuXG4gIGlmIChvcHRzLm1ldGFkYXRhICE9PSBmYWxzZSkge1xuICAgIHN0cmVhbVttZXRhZGF0YV0gPSB0cnVlXG4gICAgc3RyZWFtLmxhc3RUaW1lID0gMFxuICAgIHN0cmVhbS5sYXN0TGV2ZWwgPSAwXG4gICAgc3RyZWFtLmxhc3RPYmogPSBudWxsXG4gIH1cblxuICBsZXQgcmVzID0gZm4oc3RyZWFtKVxuXG4gIGlmIChyZXMgJiYgdHlwZW9mIHJlcy5jYXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJlcy5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBzdHJlYW0uZGVzdHJveShlcnIpXG4gICAgfSlcblxuICAgIC8vIHNldCBpdCB0byBudWxsIHRvIG5vdCByZXRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIHByb21pc2VcbiAgICByZXMgPSBudWxsXG4gIH0gZWxzZSBpZiAob3B0cy5lbmFibGVQaXBlbGluaW5nICYmIHJlcykge1xuICAgIHJldHVybiBEdXBsZXguZnJvbSh7IHdyaXRhYmxlOiBzdHJlYW0sIHJlYWRhYmxlOiByZXMsIG9iamVjdE1vZGU6IHRydWUgfSlcbiAgfVxuXG4gIHJldHVybiBzdHJlYW1cbn1cblxuZnVuY3Rpb24gZGVmYXVsdENsb3NlIChlcnIsIGNiKSB7XG4gIHByb2Nlc3MubmV4dFRpY2soY2IsIGVycilcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/pino-abstract-transport@1.1.0/node_modules/pino-abstract-transport/index.js\n");

/***/ })

};
;