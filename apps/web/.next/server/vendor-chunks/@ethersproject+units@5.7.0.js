"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@ethersproject+units@5.7.0";
exports.ids = ["vendor-chunks/@ethersproject+units@5.7.0"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@ethersproject+units@5.7.0/node_modules/@ethersproject/units/lib/_version.js":
/*!*************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@ethersproject+units@5.7.0/node_modules/@ethersproject/units/lib/_version.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.version = void 0;\nexports.version = \"units/5.7.0\";\n//# sourceMappingURL=_version.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BldGhlcnNwcm9qZWN0K3VuaXRzQDUuNy4wL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC91bml0cy9saWIvX3ZlcnNpb24uanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZUFBZTtBQUNmLGVBQWU7QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2tlbnN0cmVhbS93ZWIvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BldGhlcnNwcm9qZWN0K3VuaXRzQDUuNy4wL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC91bml0cy9saWIvX3ZlcnNpb24uanM/ZmVmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudmVyc2lvbiA9IHZvaWQgMDtcbmV4cG9ydHMudmVyc2lvbiA9IFwidW5pdHMvNS43LjBcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV92ZXJzaW9uLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@ethersproject+units@5.7.0/node_modules/@ethersproject/units/lib/_version.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/.pnpm/@ethersproject+units@5.7.0/node_modules/@ethersproject/units/lib/index.js":
/*!**********************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@ethersproject+units@5.7.0/node_modules/@ethersproject/units/lib/index.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.parseEther = exports.formatEther = exports.parseUnits = exports.formatUnits = exports.commify = void 0;\nvar bignumber_1 = __webpack_require__(/*! @ethersproject/bignumber */ \"(ssr)/../../node_modules/.pnpm/@ethersproject+bignumber@5.7.0/node_modules/@ethersproject/bignumber/lib/index.js\");\nvar logger_1 = __webpack_require__(/*! @ethersproject/logger */ \"(ssr)/../../node_modules/.pnpm/@ethersproject+logger@5.7.0/node_modules/@ethersproject/logger/lib/index.js\");\nvar _version_1 = __webpack_require__(/*! ./_version */ \"(ssr)/../../node_modules/.pnpm/@ethersproject+units@5.7.0/node_modules/@ethersproject/units/lib/_version.js\");\nvar logger = new logger_1.Logger(_version_1.version);\nvar names = [\n    \"wei\",\n    \"kwei\",\n    \"mwei\",\n    \"gwei\",\n    \"szabo\",\n    \"finney\",\n    \"ether\",\n];\n// Some environments have issues with RegEx that contain back-tracking, so we cannot\n// use them.\nfunction commify(value) {\n    var comps = String(value).split(\".\");\n    if (comps.length > 2 || !comps[0].match(/^-?[0-9]*$/) || (comps[1] && !comps[1].match(/^[0-9]*$/)) || value === \".\" || value === \"-.\") {\n        logger.throwArgumentError(\"invalid value\", \"value\", value);\n    }\n    // Make sure we have at least one whole digit (0 if none)\n    var whole = comps[0];\n    var negative = \"\";\n    if (whole.substring(0, 1) === \"-\") {\n        negative = \"-\";\n        whole = whole.substring(1);\n    }\n    // Make sure we have at least 1 whole digit with no leading zeros\n    while (whole.substring(0, 1) === \"0\") {\n        whole = whole.substring(1);\n    }\n    if (whole === \"\") {\n        whole = \"0\";\n    }\n    var suffix = \"\";\n    if (comps.length === 2) {\n        suffix = \".\" + (comps[1] || \"0\");\n    }\n    while (suffix.length > 2 && suffix[suffix.length - 1] === \"0\") {\n        suffix = suffix.substring(0, suffix.length - 1);\n    }\n    var formatted = [];\n    while (whole.length) {\n        if (whole.length <= 3) {\n            formatted.unshift(whole);\n            break;\n        }\n        else {\n            var index = whole.length - 3;\n            formatted.unshift(whole.substring(index));\n            whole = whole.substring(0, index);\n        }\n    }\n    return negative + formatted.join(\",\") + suffix;\n}\nexports.commify = commify;\nfunction formatUnits(value, unitName) {\n    if (typeof (unitName) === \"string\") {\n        var index = names.indexOf(unitName);\n        if (index !== -1) {\n            unitName = 3 * index;\n        }\n    }\n    return (0, bignumber_1.formatFixed)(value, (unitName != null) ? unitName : 18);\n}\nexports.formatUnits = formatUnits;\nfunction parseUnits(value, unitName) {\n    if (typeof (value) !== \"string\") {\n        logger.throwArgumentError(\"value must be a string\", \"value\", value);\n    }\n    if (typeof (unitName) === \"string\") {\n        var index = names.indexOf(unitName);\n        if (index !== -1) {\n            unitName = 3 * index;\n        }\n    }\n    return (0, bignumber_1.parseFixed)(value, (unitName != null) ? unitName : 18);\n}\nexports.parseUnits = parseUnits;\nfunction formatEther(wei) {\n    return formatUnits(wei, 18);\n}\nexports.formatEther = formatEther;\nfunction parseEther(ether) {\n    return parseUnits(ether, 18);\n}\nexports.parseEther = parseEther;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BldGhlcnNwcm9qZWN0K3VuaXRzQDUuNy4wL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC91bml0cy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0JBQWtCLEdBQUcsbUJBQW1CLEdBQUcsa0JBQWtCLEdBQUcsbUJBQW1CLEdBQUcsZUFBZTtBQUNyRyxrQkFBa0IsbUJBQU8sQ0FBQyxrSkFBMEI7QUFDcEQsZUFBZSxtQkFBTyxDQUFDLHlJQUF1QjtBQUM5QyxpQkFBaUIsbUJBQU8sQ0FBQywrSEFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdG9rZW5zdHJlYW0vd2ViLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AZXRoZXJzcHJvamVjdCt1bml0c0A1LjcuMC9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3QvdW5pdHMvbGliL2luZGV4LmpzPzU5OGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlRXRoZXIgPSBleHBvcnRzLmZvcm1hdEV0aGVyID0gZXhwb3J0cy5wYXJzZVVuaXRzID0gZXhwb3J0cy5mb3JtYXRVbml0cyA9IGV4cG9ydHMuY29tbWlmeSA9IHZvaWQgMDtcbnZhciBiaWdudW1iZXJfMSA9IHJlcXVpcmUoXCJAZXRoZXJzcHJvamVjdC9iaWdudW1iZXJcIik7XG52YXIgbG9nZ2VyXzEgPSByZXF1aXJlKFwiQGV0aGVyc3Byb2plY3QvbG9nZ2VyXCIpO1xudmFyIF92ZXJzaW9uXzEgPSByZXF1aXJlKFwiLi9fdmVyc2lvblwiKTtcbnZhciBsb2dnZXIgPSBuZXcgbG9nZ2VyXzEuTG9nZ2VyKF92ZXJzaW9uXzEudmVyc2lvbik7XG52YXIgbmFtZXMgPSBbXG4gICAgXCJ3ZWlcIixcbiAgICBcImt3ZWlcIixcbiAgICBcIm13ZWlcIixcbiAgICBcImd3ZWlcIixcbiAgICBcInN6YWJvXCIsXG4gICAgXCJmaW5uZXlcIixcbiAgICBcImV0aGVyXCIsXG5dO1xuLy8gU29tZSBlbnZpcm9ubWVudHMgaGF2ZSBpc3N1ZXMgd2l0aCBSZWdFeCB0aGF0IGNvbnRhaW4gYmFjay10cmFja2luZywgc28gd2UgY2Fubm90XG4vLyB1c2UgdGhlbS5cbmZ1bmN0aW9uIGNvbW1pZnkodmFsdWUpIHtcbiAgICB2YXIgY29tcHMgPSBTdHJpbmcodmFsdWUpLnNwbGl0KFwiLlwiKTtcbiAgICBpZiAoY29tcHMubGVuZ3RoID4gMiB8fCAhY29tcHNbMF0ubWF0Y2goL14tP1swLTldKiQvKSB8fCAoY29tcHNbMV0gJiYgIWNvbXBzWzFdLm1hdGNoKC9eWzAtOV0qJC8pKSB8fCB2YWx1ZSA9PT0gXCIuXCIgfHwgdmFsdWUgPT09IFwiLS5cIikge1xuICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCB2YWx1ZVwiLCBcInZhbHVlXCIsIHZhbHVlKTtcbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYXQgbGVhc3Qgb25lIHdob2xlIGRpZ2l0ICgwIGlmIG5vbmUpXG4gICAgdmFyIHdob2xlID0gY29tcHNbMF07XG4gICAgdmFyIG5lZ2F0aXZlID0gXCJcIjtcbiAgICBpZiAod2hvbGUuc3Vic3RyaW5nKDAsIDEpID09PSBcIi1cIikge1xuICAgICAgICBuZWdhdGl2ZSA9IFwiLVwiO1xuICAgICAgICB3aG9sZSA9IHdob2xlLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYXQgbGVhc3QgMSB3aG9sZSBkaWdpdCB3aXRoIG5vIGxlYWRpbmcgemVyb3NcbiAgICB3aGlsZSAod2hvbGUuc3Vic3RyaW5nKDAsIDEpID09PSBcIjBcIikge1xuICAgICAgICB3aG9sZSA9IHdob2xlLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgaWYgKHdob2xlID09PSBcIlwiKSB7XG4gICAgICAgIHdob2xlID0gXCIwXCI7XG4gICAgfVxuICAgIHZhciBzdWZmaXggPSBcIlwiO1xuICAgIGlmIChjb21wcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgc3VmZml4ID0gXCIuXCIgKyAoY29tcHNbMV0gfHwgXCIwXCIpO1xuICAgIH1cbiAgICB3aGlsZSAoc3VmZml4Lmxlbmd0aCA+IDIgJiYgc3VmZml4W3N1ZmZpeC5sZW5ndGggLSAxXSA9PT0gXCIwXCIpIHtcbiAgICAgICAgc3VmZml4ID0gc3VmZml4LnN1YnN0cmluZygwLCBzdWZmaXgubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZWQgPSBbXTtcbiAgICB3aGlsZSAod2hvbGUubGVuZ3RoKSB7XG4gICAgICAgIGlmICh3aG9sZS5sZW5ndGggPD0gMykge1xuICAgICAgICAgICAgZm9ybWF0dGVkLnVuc2hpZnQod2hvbGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB3aG9sZS5sZW5ndGggLSAzO1xuICAgICAgICAgICAgZm9ybWF0dGVkLnVuc2hpZnQod2hvbGUuc3Vic3RyaW5nKGluZGV4KSk7XG4gICAgICAgICAgICB3aG9sZSA9IHdob2xlLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5lZ2F0aXZlICsgZm9ybWF0dGVkLmpvaW4oXCIsXCIpICsgc3VmZml4O1xufVxuZXhwb3J0cy5jb21taWZ5ID0gY29tbWlmeTtcbmZ1bmN0aW9uIGZvcm1hdFVuaXRzKHZhbHVlLCB1bml0TmFtZSkge1xuICAgIGlmICh0eXBlb2YgKHVuaXROYW1lKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgaW5kZXggPSBuYW1lcy5pbmRleE9mKHVuaXROYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdW5pdE5hbWUgPSAzICogaW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgwLCBiaWdudW1iZXJfMS5mb3JtYXRGaXhlZCkodmFsdWUsICh1bml0TmFtZSAhPSBudWxsKSA/IHVuaXROYW1lIDogMTgpO1xufVxuZXhwb3J0cy5mb3JtYXRVbml0cyA9IGZvcm1hdFVuaXRzO1xuZnVuY3Rpb24gcGFyc2VVbml0cyh2YWx1ZSwgdW5pdE5hbWUpIHtcbiAgICBpZiAodHlwZW9mICh2YWx1ZSkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcInZhbHVlIG11c3QgYmUgYSBzdHJpbmdcIiwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgKHVuaXROYW1lKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgaW5kZXggPSBuYW1lcy5pbmRleE9mKHVuaXROYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdW5pdE5hbWUgPSAzICogaW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgwLCBiaWdudW1iZXJfMS5wYXJzZUZpeGVkKSh2YWx1ZSwgKHVuaXROYW1lICE9IG51bGwpID8gdW5pdE5hbWUgOiAxOCk7XG59XG5leHBvcnRzLnBhcnNlVW5pdHMgPSBwYXJzZVVuaXRzO1xuZnVuY3Rpb24gZm9ybWF0RXRoZXIod2VpKSB7XG4gICAgcmV0dXJuIGZvcm1hdFVuaXRzKHdlaSwgMTgpO1xufVxuZXhwb3J0cy5mb3JtYXRFdGhlciA9IGZvcm1hdEV0aGVyO1xuZnVuY3Rpb24gcGFyc2VFdGhlcihldGhlcikge1xuICAgIHJldHVybiBwYXJzZVVuaXRzKGV0aGVyLCAxOCk7XG59XG5leHBvcnRzLnBhcnNlRXRoZXIgPSBwYXJzZUV0aGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@ethersproject+units@5.7.0/node_modules/@ethersproject/units/lib/index.js\n");

/***/ }),

/***/ "(rsc)/../../node_modules/.pnpm/@ethersproject+units@5.7.0/node_modules/@ethersproject/units/lib.esm/_version.js":
/*!*****************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@ethersproject+units@5.7.0/node_modules/@ethersproject/units/lib.esm/_version.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   version: () => (/* binding */ version)\n/* harmony export */ });\nconst version = \"units/5.7.0\"; //# sourceMappingURL=_version.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BldGhlcnNwcm9qZWN0K3VuaXRzQDUuNy4wL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC91bml0cy9saWIuZXNtL192ZXJzaW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxVQUFVLGNBQWMsQ0FDckMsb0NBQW9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRva2Vuc3RyZWFtL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGV0aGVyc3Byb2plY3QrdW5pdHNANS43LjAvbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L3VuaXRzL2xpYi5lc20vX3ZlcnNpb24uanM/MDVjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdmVyc2lvbiA9IFwidW5pdHMvNS43LjBcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV92ZXJzaW9uLmpzLm1hcCJdLCJuYW1lcyI6WyJ2ZXJzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@ethersproject+units@5.7.0/node_modules/@ethersproject/units/lib.esm/_version.js\n");

/***/ }),

/***/ "(rsc)/../../node_modules/.pnpm/@ethersproject+units@5.7.0/node_modules/@ethersproject/units/lib.esm/index.js":
/*!**************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@ethersproject+units@5.7.0/node_modules/@ethersproject/units/lib.esm/index.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commify: () => (/* binding */ commify),\n/* harmony export */   formatEther: () => (/* binding */ formatEther),\n/* harmony export */   formatUnits: () => (/* binding */ formatUnits),\n/* harmony export */   parseEther: () => (/* binding */ parseEther),\n/* harmony export */   parseUnits: () => (/* binding */ parseUnits)\n/* harmony export */ });\n/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/bignumber */ \"(rsc)/../../node_modules/.pnpm/@ethersproject+bignumber@5.7.0/node_modules/@ethersproject/bignumber/lib.esm/fixednumber.js\");\n/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ \"(rsc)/../../node_modules/.pnpm/@ethersproject+logger@5.7.0/node_modules/@ethersproject/logger/lib.esm/index.js\");\n/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ \"(rsc)/../../node_modules/.pnpm/@ethersproject+units@5.7.0/node_modules/@ethersproject/units/lib.esm/_version.js\");\n\n\n\n\nconst logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);\nconst names = [\n    \"wei\",\n    \"kwei\",\n    \"mwei\",\n    \"gwei\",\n    \"szabo\",\n    \"finney\",\n    \"ether\"\n];\n// Some environments have issues with RegEx that contain back-tracking, so we cannot\n// use them.\nfunction commify(value) {\n    const comps = String(value).split(\".\");\n    if (comps.length > 2 || !comps[0].match(/^-?[0-9]*$/) || comps[1] && !comps[1].match(/^[0-9]*$/) || value === \".\" || value === \"-.\") {\n        logger.throwArgumentError(\"invalid value\", \"value\", value);\n    }\n    // Make sure we have at least one whole digit (0 if none)\n    let whole = comps[0];\n    let negative = \"\";\n    if (whole.substring(0, 1) === \"-\") {\n        negative = \"-\";\n        whole = whole.substring(1);\n    }\n    // Make sure we have at least 1 whole digit with no leading zeros\n    while(whole.substring(0, 1) === \"0\"){\n        whole = whole.substring(1);\n    }\n    if (whole === \"\") {\n        whole = \"0\";\n    }\n    let suffix = \"\";\n    if (comps.length === 2) {\n        suffix = \".\" + (comps[1] || \"0\");\n    }\n    while(suffix.length > 2 && suffix[suffix.length - 1] === \"0\"){\n        suffix = suffix.substring(0, suffix.length - 1);\n    }\n    const formatted = [];\n    while(whole.length){\n        if (whole.length <= 3) {\n            formatted.unshift(whole);\n            break;\n        } else {\n            const index = whole.length - 3;\n            formatted.unshift(whole.substring(index));\n            whole = whole.substring(0, index);\n        }\n    }\n    return negative + formatted.join(\",\") + suffix;\n}\nfunction formatUnits(value, unitName) {\n    if (typeof unitName === \"string\") {\n        const index = names.indexOf(unitName);\n        if (index !== -1) {\n            unitName = 3 * index;\n        }\n    }\n    return (0,_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__.formatFixed)(value, unitName != null ? unitName : 18);\n}\nfunction parseUnits(value, unitName) {\n    if (typeof value !== \"string\") {\n        logger.throwArgumentError(\"value must be a string\", \"value\", value);\n    }\n    if (typeof unitName === \"string\") {\n        const index = names.indexOf(unitName);\n        if (index !== -1) {\n            unitName = 3 * index;\n        }\n    }\n    return (0,_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__.parseFixed)(value, unitName != null ? unitName : 18);\n}\nfunction formatEther(wei) {\n    return formatUnits(wei, 18);\n}\nfunction parseEther(ether) {\n    return parseUnits(ether, 18);\n} //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BldGhlcnNwcm9qZWN0K3VuaXRzQDUuNy4wL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC91bml0cy9saWIuZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDc0Q7QUFDcEI7QUFDVjtBQUNyQyxNQUFNSSxTQUFTLElBQUlGLHlEQUFNQSxDQUFDQyw2Q0FBT0E7QUFDakMsTUFBTUUsUUFBUTtJQUNWO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0g7QUFDRCxvRkFBb0Y7QUFDcEYsWUFBWTtBQUNMLFNBQVNDLFFBQVFDLEtBQUs7SUFDekIsTUFBTUMsUUFBUUMsT0FBT0YsT0FBT0csS0FBSyxDQUFDO0lBQ2xDLElBQUlGLE1BQU1HLE1BQU0sR0FBRyxLQUFLLENBQUNILEtBQUssQ0FBQyxFQUFFLENBQUNJLEtBQUssQ0FBQyxpQkFBa0JKLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQ0EsS0FBSyxDQUFDLEVBQUUsQ0FBQ0ksS0FBSyxDQUFDLGVBQWdCTCxVQUFVLE9BQU9BLFVBQVUsTUFBTTtRQUNuSUgsT0FBT1Msa0JBQWtCLENBQUMsaUJBQWlCLFNBQVNOO0lBQ3hEO0lBQ0EseURBQXlEO0lBQ3pELElBQUlPLFFBQVFOLEtBQUssQ0FBQyxFQUFFO0lBQ3BCLElBQUlPLFdBQVc7SUFDZixJQUFJRCxNQUFNRSxTQUFTLENBQUMsR0FBRyxPQUFPLEtBQUs7UUFDL0JELFdBQVc7UUFDWEQsUUFBUUEsTUFBTUUsU0FBUyxDQUFDO0lBQzVCO0lBQ0EsaUVBQWlFO0lBQ2pFLE1BQU9GLE1BQU1FLFNBQVMsQ0FBQyxHQUFHLE9BQU8sSUFBSztRQUNsQ0YsUUFBUUEsTUFBTUUsU0FBUyxDQUFDO0lBQzVCO0lBQ0EsSUFBSUYsVUFBVSxJQUFJO1FBQ2RBLFFBQVE7SUFDWjtJQUNBLElBQUlHLFNBQVM7SUFDYixJQUFJVCxNQUFNRyxNQUFNLEtBQUssR0FBRztRQUNwQk0sU0FBUyxNQUFPVCxDQUFBQSxLQUFLLENBQUMsRUFBRSxJQUFJLEdBQUU7SUFDbEM7SUFDQSxNQUFPUyxPQUFPTixNQUFNLEdBQUcsS0FBS00sTUFBTSxDQUFDQSxPQUFPTixNQUFNLEdBQUcsRUFBRSxLQUFLLElBQUs7UUFDM0RNLFNBQVNBLE9BQU9ELFNBQVMsQ0FBQyxHQUFHQyxPQUFPTixNQUFNLEdBQUc7SUFDakQ7SUFDQSxNQUFNTyxZQUFZLEVBQUU7SUFDcEIsTUFBT0osTUFBTUgsTUFBTSxDQUFFO1FBQ2pCLElBQUlHLE1BQU1ILE1BQU0sSUFBSSxHQUFHO1lBQ25CTyxVQUFVQyxPQUFPLENBQUNMO1lBQ2xCO1FBQ0osT0FDSztZQUNELE1BQU1NLFFBQVFOLE1BQU1ILE1BQU0sR0FBRztZQUM3Qk8sVUFBVUMsT0FBTyxDQUFDTCxNQUFNRSxTQUFTLENBQUNJO1lBQ2xDTixRQUFRQSxNQUFNRSxTQUFTLENBQUMsR0FBR0k7UUFDL0I7SUFDSjtJQUNBLE9BQU9MLFdBQVdHLFVBQVVHLElBQUksQ0FBQyxPQUFPSjtBQUM1QztBQUNPLFNBQVNLLFlBQVlmLEtBQUssRUFBRWdCLFFBQVE7SUFDdkMsSUFBSSxPQUFRQSxhQUFjLFVBQVU7UUFDaEMsTUFBTUgsUUFBUWYsTUFBTW1CLE9BQU8sQ0FBQ0Q7UUFDNUIsSUFBSUgsVUFBVSxDQUFDLEdBQUc7WUFDZEcsV0FBVyxJQUFJSDtRQUNuQjtJQUNKO0lBQ0EsT0FBT3BCLHFFQUFXQSxDQUFDTyxPQUFPLFlBQWEsT0FBUWdCLFdBQVc7QUFDOUQ7QUFDTyxTQUFTRSxXQUFXbEIsS0FBSyxFQUFFZ0IsUUFBUTtJQUN0QyxJQUFJLE9BQVFoQixVQUFXLFVBQVU7UUFDN0JILE9BQU9TLGtCQUFrQixDQUFDLDBCQUEwQixTQUFTTjtJQUNqRTtJQUNBLElBQUksT0FBUWdCLGFBQWMsVUFBVTtRQUNoQyxNQUFNSCxRQUFRZixNQUFNbUIsT0FBTyxDQUFDRDtRQUM1QixJQUFJSCxVQUFVLENBQUMsR0FBRztZQUNkRyxXQUFXLElBQUlIO1FBQ25CO0lBQ0o7SUFDQSxPQUFPbkIsb0VBQVVBLENBQUNNLE9BQU8sWUFBYSxPQUFRZ0IsV0FBVztBQUM3RDtBQUNPLFNBQVNHLFlBQVlDLEdBQUc7SUFDM0IsT0FBT0wsWUFBWUssS0FBSztBQUM1QjtBQUNPLFNBQVNDLFdBQVdDLEtBQUs7SUFDNUIsT0FBT0osV0FBV0ksT0FBTztBQUM3QixFQUNBLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2tlbnN0cmVhbS93ZWIvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BldGhlcnNwcm9qZWN0K3VuaXRzQDUuNy4wL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC91bml0cy9saWIuZXNtL2luZGV4LmpzP2Q0MjkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgeyBmb3JtYXRGaXhlZCwgcGFyc2VGaXhlZCB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9iaWdudW1iZXJcIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9sb2dnZXJcIjtcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tIFwiLi9fdmVyc2lvblwiO1xuY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcih2ZXJzaW9uKTtcbmNvbnN0IG5hbWVzID0gW1xuICAgIFwid2VpXCIsXG4gICAgXCJrd2VpXCIsXG4gICAgXCJtd2VpXCIsXG4gICAgXCJnd2VpXCIsXG4gICAgXCJzemFib1wiLFxuICAgIFwiZmlubmV5XCIsXG4gICAgXCJldGhlclwiLFxuXTtcbi8vIFNvbWUgZW52aXJvbm1lbnRzIGhhdmUgaXNzdWVzIHdpdGggUmVnRXggdGhhdCBjb250YWluIGJhY2stdHJhY2tpbmcsIHNvIHdlIGNhbm5vdFxuLy8gdXNlIHRoZW0uXG5leHBvcnQgZnVuY3Rpb24gY29tbWlmeSh2YWx1ZSkge1xuICAgIGNvbnN0IGNvbXBzID0gU3RyaW5nKHZhbHVlKS5zcGxpdChcIi5cIik7XG4gICAgaWYgKGNvbXBzLmxlbmd0aCA+IDIgfHwgIWNvbXBzWzBdLm1hdGNoKC9eLT9bMC05XSokLykgfHwgKGNvbXBzWzFdICYmICFjb21wc1sxXS5tYXRjaCgvXlswLTldKiQvKSkgfHwgdmFsdWUgPT09IFwiLlwiIHx8IHZhbHVlID09PSBcIi0uXCIpIHtcbiAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImludmFsaWQgdmFsdWVcIiwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgfVxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGF0IGxlYXN0IG9uZSB3aG9sZSBkaWdpdCAoMCBpZiBub25lKVxuICAgIGxldCB3aG9sZSA9IGNvbXBzWzBdO1xuICAgIGxldCBuZWdhdGl2ZSA9IFwiXCI7XG4gICAgaWYgKHdob2xlLnN1YnN0cmluZygwLCAxKSA9PT0gXCItXCIpIHtcbiAgICAgICAgbmVnYXRpdmUgPSBcIi1cIjtcbiAgICAgICAgd2hvbGUgPSB3aG9sZS5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGF0IGxlYXN0IDEgd2hvbGUgZGlnaXQgd2l0aCBubyBsZWFkaW5nIHplcm9zXG4gICAgd2hpbGUgKHdob2xlLnN1YnN0cmluZygwLCAxKSA9PT0gXCIwXCIpIHtcbiAgICAgICAgd2hvbGUgPSB3aG9sZS5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIGlmICh3aG9sZSA9PT0gXCJcIikge1xuICAgICAgICB3aG9sZSA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgc3VmZml4ID0gXCJcIjtcbiAgICBpZiAoY29tcHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHN1ZmZpeCA9IFwiLlwiICsgKGNvbXBzWzFdIHx8IFwiMFwiKTtcbiAgICB9XG4gICAgd2hpbGUgKHN1ZmZpeC5sZW5ndGggPiAyICYmIHN1ZmZpeFtzdWZmaXgubGVuZ3RoIC0gMV0gPT09IFwiMFwiKSB7XG4gICAgICAgIHN1ZmZpeCA9IHN1ZmZpeC5zdWJzdHJpbmcoMCwgc3VmZml4Lmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICBjb25zdCBmb3JtYXR0ZWQgPSBbXTtcbiAgICB3aGlsZSAod2hvbGUubGVuZ3RoKSB7XG4gICAgICAgIGlmICh3aG9sZS5sZW5ndGggPD0gMykge1xuICAgICAgICAgICAgZm9ybWF0dGVkLnVuc2hpZnQod2hvbGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHdob2xlLmxlbmd0aCAtIDM7XG4gICAgICAgICAgICBmb3JtYXR0ZWQudW5zaGlmdCh3aG9sZS5zdWJzdHJpbmcoaW5kZXgpKTtcbiAgICAgICAgICAgIHdob2xlID0gd2hvbGUuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmVnYXRpdmUgKyBmb3JtYXR0ZWQuam9pbihcIixcIikgKyBzdWZmaXg7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VW5pdHModmFsdWUsIHVuaXROYW1lKSB7XG4gICAgaWYgKHR5cGVvZiAodW5pdE5hbWUpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmFtZXMuaW5kZXhPZih1bml0TmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHVuaXROYW1lID0gMyAqIGluZGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXRGaXhlZCh2YWx1ZSwgKHVuaXROYW1lICE9IG51bGwpID8gdW5pdE5hbWUgOiAxOCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVbml0cyh2YWx1ZSwgdW5pdE5hbWUpIHtcbiAgICBpZiAodHlwZW9mICh2YWx1ZSkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcInZhbHVlIG11c3QgYmUgYSBzdHJpbmdcIiwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgKHVuaXROYW1lKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBpbmRleCA9IG5hbWVzLmluZGV4T2YodW5pdE5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB1bml0TmFtZSA9IDMgKiBpbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGaXhlZCh2YWx1ZSwgKHVuaXROYW1lICE9IG51bGwpID8gdW5pdE5hbWUgOiAxOCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RXRoZXIod2VpKSB7XG4gICAgcmV0dXJuIGZvcm1hdFVuaXRzKHdlaSwgMTgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRXRoZXIoZXRoZXIpIHtcbiAgICByZXR1cm4gcGFyc2VVbml0cyhldGhlciwgMTgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbImZvcm1hdEZpeGVkIiwicGFyc2VGaXhlZCIsIkxvZ2dlciIsInZlcnNpb24iLCJsb2dnZXIiLCJuYW1lcyIsImNvbW1pZnkiLCJ2YWx1ZSIsImNvbXBzIiwiU3RyaW5nIiwic3BsaXQiLCJsZW5ndGgiLCJtYXRjaCIsInRocm93QXJndW1lbnRFcnJvciIsIndob2xlIiwibmVnYXRpdmUiLCJzdWJzdHJpbmciLCJzdWZmaXgiLCJmb3JtYXR0ZWQiLCJ1bnNoaWZ0IiwiaW5kZXgiLCJqb2luIiwiZm9ybWF0VW5pdHMiLCJ1bml0TmFtZSIsImluZGV4T2YiLCJwYXJzZVVuaXRzIiwiZm9ybWF0RXRoZXIiLCJ3ZWkiLCJwYXJzZUV0aGVyIiwiZXRoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@ethersproject+units@5.7.0/node_modules/@ethersproject/units/lib.esm/index.js\n");

/***/ })

};
;