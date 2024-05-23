"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/api/trpc/[trpc]/route",{

/***/ "(rsc)/./src/server/routers/account.ts":
/*!***************************************!*\
  !*** ./src/server/routers/account.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accountRouter: () => (/* binding */ accountRouter)\n/* harmony export */ });\n/* harmony import */ var _tokenstream_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tokenstream/db */ \"(rsc)/../../packages/db/src/index.ts\");\n/* harmony import */ var _trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trpc */ \"(rsc)/./src/server/trpc.ts\");\n\n\nconst accountRouter = (0,_trpc__WEBPACK_IMPORTED_MODULE_1__.router)({\n    deletedTokens: _trpc__WEBPACK_IMPORTED_MODULE_1__.publicProcedure.query(async ({ ctx: { db } })=>{\n        try {\n            const result = await db.select({\n                deletedTokens: _tokenstream_db__WEBPACK_IMPORTED_MODULE_0__.accounts.deletedTokens\n            }).from(_tokenstream_db__WEBPACK_IMPORTED_MODULE_0__.accounts)// .where(eq(accounts.address, address))\n            .get();\n            const deletedTokens = JSON.parse(result.deletedTokens);\n            return deletedTokens;\n        } catch (error) {}\n    })\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2VydmVyL3JvdXRlcnMvYWNjb3VudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFHTztBQUUzQyxNQUFNRyxnQkFBZ0JELDZDQUFNQSxDQUFDO0lBQ2xDRSxlQUFlSCxrREFBZUEsQ0FBQ0ksS0FBSyxDQUFDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxFQUFFLEVBQUUsRUFBRTtRQUN6RCxJQUFJO1lBQ0YsTUFBTUMsU0FBUyxNQUFNRCxHQUNsQkUsTUFBTSxDQUFDO2dCQUFFTCxlQUFlSixxREFBUUEsQ0FBQ0ksYUFBYTtZQUFDLEdBQy9DTSxJQUFJLENBQUNWLHFEQUFRQSxDQUNkLHdDQUF3QzthQUN2Q1csR0FBRztZQUVOLE1BQU1QLGdCQUFnQlEsS0FBS0MsS0FBSyxDQUFDTCxPQUFPSixhQUFhO1lBRXJELE9BQU9BO1FBQ1QsRUFBRSxPQUFPVSxPQUFPLENBQUM7SUFDbkI7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2ZXIvcm91dGVycy9hY2NvdW50LnRzP2U1ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWNjb3VudHMgfSBmcm9tIFwiQHRva2Vuc3RyZWFtL2RiXCI7XHJcbmltcG9ydCB7IGVxIH0gZnJvbSBcImRyaXp6bGUtb3JtXCI7XHJcbmltcG9ydCB6IGZyb20gXCJ6b2RcIjtcclxuaW1wb3J0IHsgcHVibGljUHJvY2VkdXJlLCByb3V0ZXIgfSBmcm9tIFwiLi4vdHJwY1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjY291bnRSb3V0ZXIgPSByb3V0ZXIoe1xyXG4gIGRlbGV0ZWRUb2tlbnM6IHB1YmxpY1Byb2NlZHVyZS5xdWVyeShhc3luYyAoeyBjdHg6IHsgZGIgfSB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYlxyXG4gICAgICAgIC5zZWxlY3QoeyBkZWxldGVkVG9rZW5zOiBhY2NvdW50cy5kZWxldGVkVG9rZW5zIH0pXHJcbiAgICAgICAgLmZyb20oYWNjb3VudHMpXHJcbiAgICAgICAgLy8gLndoZXJlKGVxKGFjY291bnRzLmFkZHJlc3MsIGFkZHJlc3MpKVxyXG4gICAgICAgIC5nZXQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGRlbGV0ZWRUb2tlbnMgPSBKU09OLnBhcnNlKHJlc3VsdC5kZWxldGVkVG9rZW5zISk7XHJcblxyXG4gICAgICByZXR1cm4gZGVsZXRlZFRva2VucztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIEFjY291bnRSb3V0ZXIgPSB0eXBlb2YgYWNjb3VudFJvdXRlcjtcclxuIl0sIm5hbWVzIjpbImFjY291bnRzIiwicHVibGljUHJvY2VkdXJlIiwicm91dGVyIiwiYWNjb3VudFJvdXRlciIsImRlbGV0ZWRUb2tlbnMiLCJxdWVyeSIsImN0eCIsImRiIiwicmVzdWx0Iiwic2VsZWN0IiwiZnJvbSIsImdldCIsIkpTT04iLCJwYXJzZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/server/routers/account.ts\n");

/***/ })

});