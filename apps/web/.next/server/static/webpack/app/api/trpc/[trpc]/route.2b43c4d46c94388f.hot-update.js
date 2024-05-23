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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accountRouter: () => (/* binding */ accountRouter)\n/* harmony export */ });\n/* harmony import */ var _tokenstream_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tokenstream/db */ \"(rsc)/../../packages/db/src/index.ts\");\n/* harmony import */ var _trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trpc */ \"(rsc)/./src/server/trpc.ts\");\n\n\nconst accountRouter = (0,_trpc__WEBPACK_IMPORTED_MODULE_1__.router)({\n    deletedTokens: _trpc__WEBPACK_IMPORTED_MODULE_1__.publicProcedure.query(async ({ ctx: { db, session } })=>{\n        try {\n            const result = await db.select({\n                deletedTokens: _tokenstream_db__WEBPACK_IMPORTED_MODULE_0__.accounts.deletedTokens\n            }).from(_tokenstream_db__WEBPACK_IMPORTED_MODULE_0__.accounts)// .where(eq(accounts.address, address))\n            .get();\n            const deletedTokens = JSON.parse(result.deletedTokens);\n            return deletedTokens;\n        } catch (error) {}\n    })\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2VydmVyL3JvdXRlcnMvYWNjb3VudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFHTztBQUUzQyxNQUFNRyxnQkFBZ0JELDZDQUFNQSxDQUFDO0lBQ2xDRSxlQUFlSCxrREFBZUEsQ0FBQ0ksS0FBSyxDQUFDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxFQUFFLEVBQUVDLE9BQU8sRUFBRSxFQUFFO1FBQ2xFLElBQUk7WUFDRixNQUFNQyxTQUFTLE1BQU1GLEdBQ2xCRyxNQUFNLENBQUM7Z0JBQUVOLGVBQWVKLHFEQUFRQSxDQUFDSSxhQUFhO1lBQUMsR0FDL0NPLElBQUksQ0FBQ1gscURBQVFBLENBQ2Qsd0NBQXdDO2FBQ3ZDWSxHQUFHO1lBRU4sTUFBTVIsZ0JBQWdCUyxLQUFLQyxLQUFLLENBQUNMLE9BQU9MLGFBQWE7WUFFckQsT0FBT0E7UUFDVCxFQUFFLE9BQU9XLE9BQU8sQ0FBQztJQUNuQjtBQUNGLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZlci9yb3V0ZXJzL2FjY291bnQudHM/ZTU4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhY2NvdW50cyB9IGZyb20gXCJAdG9rZW5zdHJlYW0vZGJcIjtcclxuaW1wb3J0IHsgZXEgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcclxuaW1wb3J0IHogZnJvbSBcInpvZFwiO1xyXG5pbXBvcnQgeyBwdWJsaWNQcm9jZWR1cmUsIHJvdXRlciB9IGZyb20gXCIuLi90cnBjXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWNjb3VudFJvdXRlciA9IHJvdXRlcih7XHJcbiAgZGVsZXRlZFRva2VuczogcHVibGljUHJvY2VkdXJlLnF1ZXJ5KGFzeW5jICh7IGN0eDogeyBkYiwgc2Vzc2lvbiB9IH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiXHJcbiAgICAgICAgLnNlbGVjdCh7IGRlbGV0ZWRUb2tlbnM6IGFjY291bnRzLmRlbGV0ZWRUb2tlbnMgfSlcclxuICAgICAgICAuZnJvbShhY2NvdW50cylcclxuICAgICAgICAvLyAud2hlcmUoZXEoYWNjb3VudHMuYWRkcmVzcywgYWRkcmVzcykpXHJcbiAgICAgICAgLmdldCgpO1xyXG5cclxuICAgICAgY29uc3QgZGVsZXRlZFRva2VucyA9IEpTT04ucGFyc2UocmVzdWx0LmRlbGV0ZWRUb2tlbnMhKTtcclxuXHJcbiAgICAgIHJldHVybiBkZWxldGVkVG9rZW5zO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgQWNjb3VudFJvdXRlciA9IHR5cGVvZiBhY2NvdW50Um91dGVyO1xyXG4iXSwibmFtZXMiOlsiYWNjb3VudHMiLCJwdWJsaWNQcm9jZWR1cmUiLCJyb3V0ZXIiLCJhY2NvdW50Um91dGVyIiwiZGVsZXRlZFRva2VucyIsInF1ZXJ5IiwiY3R4IiwiZGIiLCJzZXNzaW9uIiwicmVzdWx0Iiwic2VsZWN0IiwiZnJvbSIsImdldCIsIkpTT04iLCJwYXJzZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/server/routers/account.ts\n");

/***/ })

});