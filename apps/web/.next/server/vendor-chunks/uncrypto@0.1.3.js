"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uncrypto@0.1.3";
exports.ids = ["vendor-chunks/uncrypto@0.1.3"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/uncrypto@0.1.3/node_modules/uncrypto/dist/crypto.node.mjs":
/*!******************************************************************************************!*\
  !*** ../../node_modules/.pnpm/uncrypto@0.1.3/node_modules/uncrypto/dist/crypto.node.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _crypto),\n/* harmony export */   getRandomValues: () => (/* binding */ getRandomValues),\n/* harmony export */   randomUUID: () => (/* binding */ randomUUID),\n/* harmony export */   subtle: () => (/* binding */ subtle)\n/* harmony export */ });\n/* harmony import */ var node_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:crypto */ \"node:crypto\");\n\nconst subtle = node_crypto__WEBPACK_IMPORTED_MODULE_0__.webcrypto?.subtle || {};\nconst randomUUID = ()=>{\n    return node_crypto__WEBPACK_IMPORTED_MODULE_0__.randomUUID();\n};\nconst getRandomValues = (array)=>{\n    return node_crypto__WEBPACK_IMPORTED_MODULE_0__.webcrypto.getRandomValues(array);\n};\nconst _crypto = {\n    randomUUID,\n    getRandomValues,\n    subtle\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3VuY3J5cHRvQDAuMS4zL25vZGVfbW9kdWxlcy91bmNyeXB0by9kaXN0L2NyeXB0by5ub2RlLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxQztBQUVyQyxNQUFNQyxTQUFTRCxrREFBb0IsRUFBRUMsVUFBVSxDQUFDO0FBQ2hELE1BQU1FLGFBQWE7SUFDakIsT0FBT0gsbURBQXFCO0FBQzlCO0FBQ0EsTUFBTUksa0JBQWtCLENBQUNDO0lBQ3ZCLE9BQU9MLGtEQUFvQixDQUFDSSxlQUFlLENBQUNDO0FBQzlDO0FBQ0EsTUFBTUMsVUFBVTtJQUNkSDtJQUNBQztJQUNBSDtBQUNGO0FBRW1FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRva2Vuc3RyZWFtL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdW5jcnlwdG9AMC4xLjMvbm9kZV9tb2R1bGVzL3VuY3J5cHRvL2Rpc3QvY3J5cHRvLm5vZGUubWpzPzQwMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVDcnlwdG8gZnJvbSAnbm9kZTpjcnlwdG8nO1xuXG5jb25zdCBzdWJ0bGUgPSBub2RlQ3J5cHRvLndlYmNyeXB0bz8uc3VidGxlIHx8IHt9O1xuY29uc3QgcmFuZG9tVVVJRCA9ICgpID0+IHtcbiAgcmV0dXJuIG5vZGVDcnlwdG8ucmFuZG9tVVVJRCgpO1xufTtcbmNvbnN0IGdldFJhbmRvbVZhbHVlcyA9IChhcnJheSkgPT4ge1xuICByZXR1cm4gbm9kZUNyeXB0by53ZWJjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGFycmF5KTtcbn07XG5jb25zdCBfY3J5cHRvID0ge1xuICByYW5kb21VVUlELFxuICBnZXRSYW5kb21WYWx1ZXMsXG4gIHN1YnRsZVxufTtcblxuZXhwb3J0IHsgX2NyeXB0byBhcyBkZWZhdWx0LCBnZXRSYW5kb21WYWx1ZXMsIHJhbmRvbVVVSUQsIHN1YnRsZSB9O1xuIl0sIm5hbWVzIjpbIm5vZGVDcnlwdG8iLCJzdWJ0bGUiLCJ3ZWJjcnlwdG8iLCJyYW5kb21VVUlEIiwiZ2V0UmFuZG9tVmFsdWVzIiwiYXJyYXkiLCJfY3J5cHRvIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/uncrypto@0.1.3/node_modules/uncrypto/dist/crypto.node.mjs\n");

/***/ })

};
;