"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@motionone+types@10.16.3";
exports.ids = ["vendor-chunks/@motionone+types@10.16.3"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@motionone+types@10.16.3/node_modules/@motionone/types/dist/MotionValue.cjs.js":
/*!***************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@motionone+types@10.16.3/node_modules/@motionone/types/dist/MotionValue.cjs.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\n/**\n * The MotionValue tracks the state of a single animatable\n * value. Currently, updatedAt and current are unused. The\n * long term idea is to use this to minimise the number\n * of DOM reads, and to abstract the DOM interactions here.\n */\nclass MotionValue {\n    setAnimation(animation) {\n        this.animation = animation;\n        animation === null || animation === void 0 ? void 0 : animation.finished.then(() => this.clearAnimation()).catch(() => { });\n    }\n    clearAnimation() {\n        this.animation = this.generator = undefined;\n    }\n}\n\nexports.MotionValue = MotionValue;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb3Rpb25vbmUrdHlwZXNAMTAuMTYuMy9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS90eXBlcy9kaXN0L01vdGlvblZhbHVlLmNqcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtJQUFrSTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2tlbnN0cmVhbS93ZWIvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb3Rpb25vbmUrdHlwZXNAMTAuMTYuMy9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS90eXBlcy9kaXN0L01vdGlvblZhbHVlLmNqcy5qcz9hMmM4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuLyoqXG4gKiBUaGUgTW90aW9uVmFsdWUgdHJhY2tzIHRoZSBzdGF0ZSBvZiBhIHNpbmdsZSBhbmltYXRhYmxlXG4gKiB2YWx1ZS4gQ3VycmVudGx5LCB1cGRhdGVkQXQgYW5kIGN1cnJlbnQgYXJlIHVudXNlZC4gVGhlXG4gKiBsb25nIHRlcm0gaWRlYSBpcyB0byB1c2UgdGhpcyB0byBtaW5pbWlzZSB0aGUgbnVtYmVyXG4gKiBvZiBET00gcmVhZHMsIGFuZCB0byBhYnN0cmFjdCB0aGUgRE9NIGludGVyYWN0aW9ucyBoZXJlLlxuICovXG5jbGFzcyBNb3Rpb25WYWx1ZSB7XG4gICAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcbiAgICAgICAgYW5pbWF0aW9uID09PSBudWxsIHx8IGFuaW1hdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYW5pbWF0aW9uLmZpbmlzaGVkLnRoZW4oKCkgPT4gdGhpcy5jbGVhckFuaW1hdGlvbigpKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIH1cbiAgICBjbGVhckFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmdlbmVyYXRvciA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG5cbmV4cG9ydHMuTW90aW9uVmFsdWUgPSBNb3Rpb25WYWx1ZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@motionone+types@10.16.3/node_modules/@motionone/types/dist/MotionValue.cjs.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/.pnpm/@motionone+types@10.16.3/node_modules/@motionone/types/dist/index.cjs.js":
/*!*********************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@motionone+types@10.16.3/node_modules/@motionone/types/dist/index.cjs.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar MotionValue = __webpack_require__(/*! ./MotionValue.cjs.js */ \"(ssr)/../../node_modules/.pnpm/@motionone+types@10.16.3/node_modules/@motionone/types/dist/MotionValue.cjs.js\");\n\n\n\nexports.MotionValue = MotionValue.MotionValue;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb3Rpb25vbmUrdHlwZXNAMTAuMTYuMy9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS90eXBlcy9kaXN0L2luZGV4LmNqcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELGtCQUFrQixtQkFBTyxDQUFDLDJJQUFzQjs7OztBQUloRCxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdG9rZW5zdHJlYW0vd2ViLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW90aW9ub25lK3R5cGVzQDEwLjE2LjMvbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvdHlwZXMvZGlzdC9pbmRleC5janMuanM/MzU2NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBNb3Rpb25WYWx1ZSA9IHJlcXVpcmUoJy4vTW90aW9uVmFsdWUuY2pzLmpzJyk7XG5cblxuXG5leHBvcnRzLk1vdGlvblZhbHVlID0gTW90aW9uVmFsdWUuTW90aW9uVmFsdWU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@motionone+types@10.16.3/node_modules/@motionone/types/dist/index.cjs.js\n");

/***/ })

};
;