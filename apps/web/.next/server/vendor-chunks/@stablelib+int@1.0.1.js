"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@stablelib+int@1.0.1";
exports.ids = ["vendor-chunks/@stablelib+int@1.0.1"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@stablelib+int@1.0.1/node_modules/@stablelib/int/lib/int.js":
/*!********************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@stablelib+int@1.0.1/node_modules/@stablelib/int/lib/int.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n// Copyright (C) 2016 Dmitry Chestnykh\n// MIT License. See LICENSE file for details.\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/**\n * Package int provides helper functions for integerss.\n */\n// Shim using 16-bit pieces.\nfunction imulShim(a, b) {\n    var ah = (a >>> 16) & 0xffff, al = a & 0xffff;\n    var bh = (b >>> 16) & 0xffff, bl = b & 0xffff;\n    return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);\n}\n/** 32-bit integer multiplication.  */\n// Use system Math.imul if available, otherwise use our shim.\nexports.mul = Math.imul || imulShim;\n/** 32-bit integer addition.  */\nfunction add(a, b) {\n    return (a + b) | 0;\n}\nexports.add = add;\n/**  32-bit integer subtraction.  */\nfunction sub(a, b) {\n    return (a - b) | 0;\n}\nexports.sub = sub;\n/** 32-bit integer left rotation */\nfunction rotl(x, n) {\n    return x << n | x >>> (32 - n);\n}\nexports.rotl = rotl;\n/** 32-bit integer left rotation */\nfunction rotr(x, n) {\n    return x << (32 - n) | x >>> n;\n}\nexports.rotr = rotr;\nfunction isIntegerShim(n) {\n    return typeof n === \"number\" && isFinite(n) && Math.floor(n) === n;\n}\n/**\n * Returns true if the argument is an integer number.\n *\n * In ES2015, Number.isInteger.\n */\nexports.isInteger = Number.isInteger || isIntegerShim;\n/**\n *  Math.pow(2, 53) - 1\n *\n *  In ES2015 Number.MAX_SAFE_INTEGER.\n */\nexports.MAX_SAFE_INTEGER = 9007199254740991;\n/**\n * Returns true if the argument is a safe integer number\n * (-MIN_SAFE_INTEGER < number <= MAX_SAFE_INTEGER)\n *\n * In ES2015, Number.isSafeInteger.\n */\nexports.isSafeInteger = function (n) {\n    return exports.isInteger(n) && (n >= -exports.MAX_SAFE_INTEGER && n <= exports.MAX_SAFE_INTEGER);\n};\n//# sourceMappingURL=int.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdGFibGVsaWIraW50QDEuMC4xL25vZGVfbW9kdWxlcy9Ac3RhYmxlbGliL2ludC9saWIvaW50LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRva2Vuc3RyZWFtL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHN0YWJsZWxpYitpbnRAMS4wLjEvbm9kZV9tb2R1bGVzL0BzdGFibGVsaWIvaW50L2xpYi9pbnQuanM/YjUzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAoQykgMjAxNiBEbWl0cnkgQ2hlc3RueWtoXG4vLyBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBmb3IgZGV0YWlscy5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogUGFja2FnZSBpbnQgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyBmb3IgaW50ZWdlcnNzLlxuICovXG4vLyBTaGltIHVzaW5nIDE2LWJpdCBwaWVjZXMuXG5mdW5jdGlvbiBpbXVsU2hpbShhLCBiKSB7XG4gICAgdmFyIGFoID0gKGEgPj4+IDE2KSAmIDB4ZmZmZiwgYWwgPSBhICYgMHhmZmZmO1xuICAgIHZhciBiaCA9IChiID4+PiAxNikgJiAweGZmZmYsIGJsID0gYiAmIDB4ZmZmZjtcbiAgICByZXR1cm4gKChhbCAqIGJsKSArICgoKGFoICogYmwgKyBhbCAqIGJoKSA8PCAxNikgPj4+IDApIHwgMCk7XG59XG4vKiogMzItYml0IGludGVnZXIgbXVsdGlwbGljYXRpb24uICAqL1xuLy8gVXNlIHN5c3RlbSBNYXRoLmltdWwgaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgdXNlIG91ciBzaGltLlxuZXhwb3J0cy5tdWwgPSBNYXRoLmltdWwgfHwgaW11bFNoaW07XG4vKiogMzItYml0IGludGVnZXIgYWRkaXRpb24uICAqL1xuZnVuY3Rpb24gYWRkKGEsIGIpIHtcbiAgICByZXR1cm4gKGEgKyBiKSB8IDA7XG59XG5leHBvcnRzLmFkZCA9IGFkZDtcbi8qKiAgMzItYml0IGludGVnZXIgc3VidHJhY3Rpb24uICAqL1xuZnVuY3Rpb24gc3ViKGEsIGIpIHtcbiAgICByZXR1cm4gKGEgLSBiKSB8IDA7XG59XG5leHBvcnRzLnN1YiA9IHN1Yjtcbi8qKiAzMi1iaXQgaW50ZWdlciBsZWZ0IHJvdGF0aW9uICovXG5mdW5jdGlvbiByb3RsKHgsIG4pIHtcbiAgICByZXR1cm4geCA8PCBuIHwgeCA+Pj4gKDMyIC0gbik7XG59XG5leHBvcnRzLnJvdGwgPSByb3RsO1xuLyoqIDMyLWJpdCBpbnRlZ2VyIGxlZnQgcm90YXRpb24gKi9cbmZ1bmN0aW9uIHJvdHIoeCwgbikge1xuICAgIHJldHVybiB4IDw8ICgzMiAtIG4pIHwgeCA+Pj4gbjtcbn1cbmV4cG9ydHMucm90ciA9IHJvdHI7XG5mdW5jdGlvbiBpc0ludGVnZXJTaGltKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT09IFwibnVtYmVyXCIgJiYgaXNGaW5pdGUobikgJiYgTWF0aC5mbG9vcihuKSA9PT0gbjtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnRlZ2VyIG51bWJlci5cbiAqXG4gKiBJbiBFUzIwMTUsIE51bWJlci5pc0ludGVnZXIuXG4gKi9cbmV4cG9ydHMuaXNJbnRlZ2VyID0gTnVtYmVyLmlzSW50ZWdlciB8fCBpc0ludGVnZXJTaGltO1xuLyoqXG4gKiAgTWF0aC5wb3coMiwgNTMpIC0gMVxuICpcbiAqICBJbiBFUzIwMTUgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIuXG4gKi9cbmV4cG9ydHMuTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYXJndW1lbnQgaXMgYSBzYWZlIGludGVnZXIgbnVtYmVyXG4gKiAoLU1JTl9TQUZFX0lOVEVHRVIgPCBudW1iZXIgPD0gTUFYX1NBRkVfSU5URUdFUilcbiAqXG4gKiBJbiBFUzIwMTUsIE51bWJlci5pc1NhZmVJbnRlZ2VyLlxuICovXG5leHBvcnRzLmlzU2FmZUludGVnZXIgPSBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBleHBvcnRzLmlzSW50ZWdlcihuKSAmJiAobiA+PSAtZXhwb3J0cy5NQVhfU0FGRV9JTlRFR0VSICYmIG4gPD0gZXhwb3J0cy5NQVhfU0FGRV9JTlRFR0VSKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnQuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@stablelib+int@1.0.1/node_modules/@stablelib/int/lib/int.js\n");

/***/ }),

/***/ "(rsc)/../../node_modules/.pnpm/@stablelib+int@1.0.1/node_modules/@stablelib/int/lib/int.js":
/*!********************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@stablelib+int@1.0.1/node_modules/@stablelib/int/lib/int.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n// Copyright (C) 2016 Dmitry Chestnykh\n// MIT License. See LICENSE file for details.\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n/**\n * Package int provides helper functions for integerss.\n */ // Shim using 16-bit pieces.\nfunction imulShim(a, b) {\n    var ah = a >>> 16 & 0xffff, al = a & 0xffff;\n    var bh = b >>> 16 & 0xffff, bl = b & 0xffff;\n    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;\n}\n/** 32-bit integer multiplication.  */ // Use system Math.imul if available, otherwise use our shim.\nexports.mul = Math.imul || imulShim;\n/** 32-bit integer addition.  */ function add(a, b) {\n    return a + b | 0;\n}\nexports.add = add;\n/**  32-bit integer subtraction.  */ function sub(a, b) {\n    return a - b | 0;\n}\nexports.sub = sub;\n/** 32-bit integer left rotation */ function rotl(x, n) {\n    return x << n | x >>> 32 - n;\n}\nexports.rotl = rotl;\n/** 32-bit integer left rotation */ function rotr(x, n) {\n    return x << 32 - n | x >>> n;\n}\nexports.rotr = rotr;\nfunction isIntegerShim(n) {\n    return typeof n === \"number\" && isFinite(n) && Math.floor(n) === n;\n}\n/**\n * Returns true if the argument is an integer number.\n *\n * In ES2015, Number.isInteger.\n */ exports.isInteger = Number.isInteger || isIntegerShim;\n/**\n *  Math.pow(2, 53) - 1\n *\n *  In ES2015 Number.MAX_SAFE_INTEGER.\n */ exports.MAX_SAFE_INTEGER = 9007199254740991;\n/**\n * Returns true if the argument is a safe integer number\n * (-MIN_SAFE_INTEGER < number <= MAX_SAFE_INTEGER)\n *\n * In ES2015, Number.isSafeInteger.\n */ exports.isSafeInteger = function(n) {\n    return exports.isInteger(n) && n >= -exports.MAX_SAFE_INTEGER && n <= exports.MAX_SAFE_INTEGER;\n}; //# sourceMappingURL=int.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdGFibGVsaWIraW50QDEuMC4xL25vZGVfbW9kdWxlcy9Ac3RhYmxlbGliL2ludC9saWIvaW50LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2Isc0NBQXNDO0FBQ3RDLDZDQUE2QztBQUM3Q0EsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFDN0Q7O0NBRUMsR0FDRCw0QkFBNEI7QUFDNUIsU0FBU0MsU0FBU0MsQ0FBQyxFQUFFQyxDQUFDO0lBQ2xCLElBQUlDLEtBQUssTUFBTyxLQUFNLFFBQVFDLEtBQUtILElBQUk7SUFDdkMsSUFBSUksS0FBSyxNQUFPLEtBQU0sUUFBUUMsS0FBS0osSUFBSTtJQUN2QyxPQUFRLEtBQU1JLEtBQU8sTUFBT0EsS0FBS0YsS0FBS0MsTUFBTyxPQUFRLEtBQUs7QUFDOUQ7QUFDQSxvQ0FBb0MsR0FDcEMsNkRBQTZEO0FBQzdEUCxXQUFXLEdBQUdVLEtBQUtDLElBQUksSUFBSVQ7QUFDM0IsOEJBQThCLEdBQzlCLFNBQVNVLElBQUlULENBQUMsRUFBRUMsQ0FBQztJQUNiLE9BQU8sSUFBS0EsSUFBSztBQUNyQjtBQUNBSixXQUFXLEdBQUdZO0FBQ2Qsa0NBQWtDLEdBQ2xDLFNBQVNDLElBQUlWLENBQUMsRUFBRUMsQ0FBQztJQUNiLE9BQU8sSUFBS0EsSUFBSztBQUNyQjtBQUNBSixXQUFXLEdBQUdhO0FBQ2QsaUNBQWlDLEdBQ2pDLFNBQVNDLEtBQUtDLENBQUMsRUFBRUMsQ0FBQztJQUNkLE9BQU9ELEtBQUtDLElBQUlELE1BQU8sS0FBS0M7QUFDaEM7QUFDQWhCLFlBQVksR0FBR2M7QUFDZixpQ0FBaUMsR0FDakMsU0FBU0csS0FBS0YsQ0FBQyxFQUFFQyxDQUFDO0lBQ2QsT0FBT0QsS0FBTSxLQUFLQyxJQUFLRCxNQUFNQztBQUNqQztBQUNBaEIsWUFBWSxHQUFHaUI7QUFDZixTQUFTQyxjQUFjRixDQUFDO0lBQ3BCLE9BQU8sT0FBT0EsTUFBTSxZQUFZRyxTQUFTSCxNQUFNTixLQUFLVSxLQUFLLENBQUNKLE9BQU9BO0FBQ3JFO0FBQ0E7Ozs7Q0FJQyxHQUNEaEIsaUJBQWlCLEdBQUdzQixPQUFPRCxTQUFTLElBQUlIO0FBQ3hDOzs7O0NBSUMsR0FDRGxCLHdCQUF3QixHQUFHO0FBQzNCOzs7OztDQUtDLEdBQ0RBLHFCQUFxQixHQUFHLFNBQVVnQixDQUFDO0lBQy9CLE9BQU9oQixRQUFRcUIsU0FBUyxDQUFDTCxNQUFPQSxLQUFLLENBQUNoQixRQUFRdUIsZ0JBQWdCLElBQUlQLEtBQUtoQixRQUFRdUIsZ0JBQWdCO0FBQ25HLEdBQ0EsK0JBQStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRva2Vuc3RyZWFtL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHN0YWJsZWxpYitpbnRAMS4wLjEvbm9kZV9tb2R1bGVzL0BzdGFibGVsaWIvaW50L2xpYi9pbnQuanM/YWM0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAoQykgMjAxNiBEbWl0cnkgQ2hlc3RueWtoXG4vLyBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBmb3IgZGV0YWlscy5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogUGFja2FnZSBpbnQgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyBmb3IgaW50ZWdlcnNzLlxuICovXG4vLyBTaGltIHVzaW5nIDE2LWJpdCBwaWVjZXMuXG5mdW5jdGlvbiBpbXVsU2hpbShhLCBiKSB7XG4gICAgdmFyIGFoID0gKGEgPj4+IDE2KSAmIDB4ZmZmZiwgYWwgPSBhICYgMHhmZmZmO1xuICAgIHZhciBiaCA9IChiID4+PiAxNikgJiAweGZmZmYsIGJsID0gYiAmIDB4ZmZmZjtcbiAgICByZXR1cm4gKChhbCAqIGJsKSArICgoKGFoICogYmwgKyBhbCAqIGJoKSA8PCAxNikgPj4+IDApIHwgMCk7XG59XG4vKiogMzItYml0IGludGVnZXIgbXVsdGlwbGljYXRpb24uICAqL1xuLy8gVXNlIHN5c3RlbSBNYXRoLmltdWwgaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgdXNlIG91ciBzaGltLlxuZXhwb3J0cy5tdWwgPSBNYXRoLmltdWwgfHwgaW11bFNoaW07XG4vKiogMzItYml0IGludGVnZXIgYWRkaXRpb24uICAqL1xuZnVuY3Rpb24gYWRkKGEsIGIpIHtcbiAgICByZXR1cm4gKGEgKyBiKSB8IDA7XG59XG5leHBvcnRzLmFkZCA9IGFkZDtcbi8qKiAgMzItYml0IGludGVnZXIgc3VidHJhY3Rpb24uICAqL1xuZnVuY3Rpb24gc3ViKGEsIGIpIHtcbiAgICByZXR1cm4gKGEgLSBiKSB8IDA7XG59XG5leHBvcnRzLnN1YiA9IHN1Yjtcbi8qKiAzMi1iaXQgaW50ZWdlciBsZWZ0IHJvdGF0aW9uICovXG5mdW5jdGlvbiByb3RsKHgsIG4pIHtcbiAgICByZXR1cm4geCA8PCBuIHwgeCA+Pj4gKDMyIC0gbik7XG59XG5leHBvcnRzLnJvdGwgPSByb3RsO1xuLyoqIDMyLWJpdCBpbnRlZ2VyIGxlZnQgcm90YXRpb24gKi9cbmZ1bmN0aW9uIHJvdHIoeCwgbikge1xuICAgIHJldHVybiB4IDw8ICgzMiAtIG4pIHwgeCA+Pj4gbjtcbn1cbmV4cG9ydHMucm90ciA9IHJvdHI7XG5mdW5jdGlvbiBpc0ludGVnZXJTaGltKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT09IFwibnVtYmVyXCIgJiYgaXNGaW5pdGUobikgJiYgTWF0aC5mbG9vcihuKSA9PT0gbjtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnRlZ2VyIG51bWJlci5cbiAqXG4gKiBJbiBFUzIwMTUsIE51bWJlci5pc0ludGVnZXIuXG4gKi9cbmV4cG9ydHMuaXNJbnRlZ2VyID0gTnVtYmVyLmlzSW50ZWdlciB8fCBpc0ludGVnZXJTaGltO1xuLyoqXG4gKiAgTWF0aC5wb3coMiwgNTMpIC0gMVxuICpcbiAqICBJbiBFUzIwMTUgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIuXG4gKi9cbmV4cG9ydHMuTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYXJndW1lbnQgaXMgYSBzYWZlIGludGVnZXIgbnVtYmVyXG4gKiAoLU1JTl9TQUZFX0lOVEVHRVIgPCBudW1iZXIgPD0gTUFYX1NBRkVfSU5URUdFUilcbiAqXG4gKiBJbiBFUzIwMTUsIE51bWJlci5pc1NhZmVJbnRlZ2VyLlxuICovXG5leHBvcnRzLmlzU2FmZUludGVnZXIgPSBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBleHBvcnRzLmlzSW50ZWdlcihuKSAmJiAobiA+PSAtZXhwb3J0cy5NQVhfU0FGRV9JTlRFR0VSICYmIG4gPD0gZXhwb3J0cy5NQVhfU0FGRV9JTlRFR0VSKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnQuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiaW11bFNoaW0iLCJhIiwiYiIsImFoIiwiYWwiLCJiaCIsImJsIiwibXVsIiwiTWF0aCIsImltdWwiLCJhZGQiLCJzdWIiLCJyb3RsIiwieCIsIm4iLCJyb3RyIiwiaXNJbnRlZ2VyU2hpbSIsImlzRmluaXRlIiwiZmxvb3IiLCJpc0ludGVnZXIiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwiaXNTYWZlSW50ZWdlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@stablelib+int@1.0.1/node_modules/@stablelib/int/lib/int.js\n");

/***/ })

};
;