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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accountRouter: () => (/* binding */ accountRouter)\n/* harmony export */ });\n/* harmony import */ var _tokenstream_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tokenstream/db */ \"(rsc)/../../packages/db/src/index.ts\");\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! drizzle-orm */ \"(rsc)/../../node_modules/.pnpm/drizzle-orm@0.27.2_@libsql+client@0.3.4/node_modules/drizzle-orm/alias-3e926a50.mjs\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zod */ \"(rsc)/../../node_modules/.pnpm/zod@3.22.4/node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trpc */ \"(rsc)/./src/server/trpc.ts\");\n\n\n\n\nconst accountRouter = (0,_trpc__WEBPACK_IMPORTED_MODULE_1__.router)({\n    addDeletedToken: _trpc__WEBPACK_IMPORTED_MODULE_1__.protectedProcedure.input(zod__WEBPACK_IMPORTED_MODULE_2__.z.string()).mutation(async ({ input: contract, ctx: { db, session } })=>{\n        // const deletedTokens = await db\n        //   .select({ deletedTokens: accounts.deletedTokens })\n        //   .from(accounts)\n        //   .where(eq(accounts.address, session.address))\n        //   .get();\n        // const parsedDeletedTokens = JSON.parse(\n        //   deletedTokens.deletedTokens!,\n        // ) as string[];\n        // if (parsedDeletedTokens.includes(input)) {\n        //   return;\n        // }\n        // parsedDeletedTokens.push(input);\n        // await db\n        //   .update(accounts)\n        //   .set({ deletedTokens: JSON.stringify(parsedDeletedTokens) })\n        //   .where(eq(accounts.address, session.address))\n        //   .run();\n        await db.update(_tokenstream_db__WEBPACK_IMPORTED_MODULE_0__.accounts).set({\n            deletedTokens: contract\n        }).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_3__.H)(_tokenstream_db__WEBPACK_IMPORTED_MODULE_0__.accounts.address, session.address)).run();\n    }),\n    deletedTokens: _trpc__WEBPACK_IMPORTED_MODULE_1__.protectedProcedure.query(async ({ ctx: { db, session } })=>{\n        const result = await db.select({\n            deletedTokens: _tokenstream_db__WEBPACK_IMPORTED_MODULE_0__.accounts.deletedTokens\n        }).from(_tokenstream_db__WEBPACK_IMPORTED_MODULE_0__.accounts).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_3__.H)(_tokenstream_db__WEBPACK_IMPORTED_MODULE_0__.accounts.address, session.address)).get();\n        console.log(\"result\", result);\n        const deletedTokens = JSON.parse(result.deletedTokens);\n        console.log(\"deletedTokens\", deletedTokens);\n        return deletedTokens;\n    })\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2VydmVyL3JvdXRlcnMvYWNjb3VudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNWO0FBQ1Q7QUFDNkI7QUFFOUMsTUFBTUssZ0JBQWdCRCw2Q0FBTUEsQ0FBQztJQUNsQ0UsaUJBQWlCSCxxREFBa0JBLENBQ2hDSSxLQUFLLENBQUNMLGtDQUFDQSxDQUFDTSxNQUFNLElBQ2RDLFFBQVEsQ0FBQyxPQUFPLEVBQUVGLE9BQU9HLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxFQUFFLEVBQUVDLE9BQU8sRUFBRSxFQUFFO1FBQ3hELGlDQUFpQztRQUNqQyx1REFBdUQ7UUFDdkQsb0JBQW9CO1FBQ3BCLGtEQUFrRDtRQUNsRCxZQUFZO1FBRVosMENBQTBDO1FBQzFDLGtDQUFrQztRQUNsQyxpQkFBaUI7UUFFakIsNkNBQTZDO1FBQzdDLFlBQVk7UUFDWixJQUFJO1FBRUosbUNBQW1DO1FBRW5DLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsaUVBQWlFO1FBQ2pFLGtEQUFrRDtRQUNsRCxZQUFZO1FBQ1osTUFBTUQsR0FDSEUsTUFBTSxDQUFDZCxxREFBUUEsRUFDZmUsR0FBRyxDQUFDO1lBQUVDLGVBQWVOO1FBQVMsR0FDOUJPLEtBQUssQ0FBQ2hCLDhDQUFFQSxDQUFDRCxxREFBUUEsQ0FBQ2tCLE9BQU8sRUFBRUwsUUFBUUssT0FBTyxHQUMxQ0MsR0FBRztJQUNSO0lBQ0ZILGVBQWViLHFEQUFrQkEsQ0FBQ2lCLEtBQUssQ0FBQyxPQUFPLEVBQUVULEtBQUssRUFBRUMsRUFBRSxFQUFFQyxPQUFPLEVBQUUsRUFBRTtRQUNyRSxNQUFNUSxTQUFTLE1BQU1ULEdBQ2xCVSxNQUFNLENBQUM7WUFBRU4sZUFBZWhCLHFEQUFRQSxDQUFDZ0IsYUFBYTtRQUFDLEdBQy9DTyxJQUFJLENBQUN2QixxREFBUUEsRUFDYmlCLEtBQUssQ0FBQ2hCLDhDQUFFQSxDQUFDRCxxREFBUUEsQ0FBQ2tCLE9BQU8sRUFBRUwsUUFBUUssT0FBTyxHQUMxQ00sR0FBRztRQUVOQyxRQUFRQyxHQUFHLENBQUMsVUFBVUw7UUFFdEIsTUFBTUwsZ0JBQWdCVyxLQUFLQyxLQUFLLENBQUNQLE9BQU9MLGFBQWE7UUFFckRTLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJWO1FBRTdCLE9BQU9BO0lBQ1Q7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2ZXIvcm91dGVycy9hY2NvdW50LnRzP2U1ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWNjb3VudHMgfSBmcm9tIFwiQHRva2Vuc3RyZWFtL2RiXCI7XHJcbmltcG9ydCB7IGVxIH0gZnJvbSBcImRyaXp6bGUtb3JtXCI7XHJcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XHJcbmltcG9ydCB7IHByb3RlY3RlZFByb2NlZHVyZSwgcm91dGVyIH0gZnJvbSBcIi4uL3RycGNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY2NvdW50Um91dGVyID0gcm91dGVyKHtcclxuICBhZGREZWxldGVkVG9rZW46IHByb3RlY3RlZFByb2NlZHVyZVxyXG4gICAgLmlucHV0KHouc3RyaW5nKCkpXHJcbiAgICAubXV0YXRpb24oYXN5bmMgKHsgaW5wdXQ6IGNvbnRyYWN0LCBjdHg6IHsgZGIsIHNlc3Npb24gfSB9KSA9PiB7XHJcbiAgICAgIC8vIGNvbnN0IGRlbGV0ZWRUb2tlbnMgPSBhd2FpdCBkYlxyXG4gICAgICAvLyAgIC5zZWxlY3QoeyBkZWxldGVkVG9rZW5zOiBhY2NvdW50cy5kZWxldGVkVG9rZW5zIH0pXHJcbiAgICAgIC8vICAgLmZyb20oYWNjb3VudHMpXHJcbiAgICAgIC8vICAgLndoZXJlKGVxKGFjY291bnRzLmFkZHJlc3MsIHNlc3Npb24uYWRkcmVzcykpXHJcbiAgICAgIC8vICAgLmdldCgpO1xyXG5cclxuICAgICAgLy8gY29uc3QgcGFyc2VkRGVsZXRlZFRva2VucyA9IEpTT04ucGFyc2UoXHJcbiAgICAgIC8vICAgZGVsZXRlZFRva2Vucy5kZWxldGVkVG9rZW5zISxcclxuICAgICAgLy8gKSBhcyBzdHJpbmdbXTtcclxuXHJcbiAgICAgIC8vIGlmIChwYXJzZWREZWxldGVkVG9rZW5zLmluY2x1ZGVzKGlucHV0KSkge1xyXG4gICAgICAvLyAgIHJldHVybjtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgLy8gcGFyc2VkRGVsZXRlZFRva2Vucy5wdXNoKGlucHV0KTtcclxuXHJcbiAgICAgIC8vIGF3YWl0IGRiXHJcbiAgICAgIC8vICAgLnVwZGF0ZShhY2NvdW50cylcclxuICAgICAgLy8gICAuc2V0KHsgZGVsZXRlZFRva2VuczogSlNPTi5zdHJpbmdpZnkocGFyc2VkRGVsZXRlZFRva2VucykgfSlcclxuICAgICAgLy8gICAud2hlcmUoZXEoYWNjb3VudHMuYWRkcmVzcywgc2Vzc2lvbi5hZGRyZXNzKSlcclxuICAgICAgLy8gICAucnVuKCk7XHJcbiAgICAgIGF3YWl0IGRiXHJcbiAgICAgICAgLnVwZGF0ZShhY2NvdW50cylcclxuICAgICAgICAuc2V0KHsgZGVsZXRlZFRva2VuczogY29udHJhY3QgfSlcclxuICAgICAgICAud2hlcmUoZXEoYWNjb3VudHMuYWRkcmVzcywgc2Vzc2lvbi5hZGRyZXNzKSlcclxuICAgICAgICAucnVuKCk7XHJcbiAgICB9KSxcclxuICBkZWxldGVkVG9rZW5zOiBwcm90ZWN0ZWRQcm9jZWR1cmUucXVlcnkoYXN5bmMgKHsgY3R4OiB7IGRiLCBzZXNzaW9uIH0gfSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGJcclxuICAgICAgLnNlbGVjdCh7IGRlbGV0ZWRUb2tlbnM6IGFjY291bnRzLmRlbGV0ZWRUb2tlbnMgfSlcclxuICAgICAgLmZyb20oYWNjb3VudHMpXHJcbiAgICAgIC53aGVyZShlcShhY2NvdW50cy5hZGRyZXNzLCBzZXNzaW9uLmFkZHJlc3MpKVxyXG4gICAgICAuZ2V0KCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVkVG9rZW5zID0gSlNPTi5wYXJzZShyZXN1bHQuZGVsZXRlZFRva2VucyEpIGFzIHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlZFRva2Vuc1wiLCBkZWxldGVkVG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gZGVsZXRlZFRva2VucztcclxuICB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgdHlwZSBBY2NvdW50Um91dGVyID0gdHlwZW9mIGFjY291bnRSb3V0ZXI7XHJcbiJdLCJuYW1lcyI6WyJhY2NvdW50cyIsImVxIiwieiIsInByb3RlY3RlZFByb2NlZHVyZSIsInJvdXRlciIsImFjY291bnRSb3V0ZXIiLCJhZGREZWxldGVkVG9rZW4iLCJpbnB1dCIsInN0cmluZyIsIm11dGF0aW9uIiwiY29udHJhY3QiLCJjdHgiLCJkYiIsInNlc3Npb24iLCJ1cGRhdGUiLCJzZXQiLCJkZWxldGVkVG9rZW5zIiwid2hlcmUiLCJhZGRyZXNzIiwicnVuIiwicXVlcnkiLCJyZXN1bHQiLCJzZWxlY3QiLCJmcm9tIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/server/routers/account.ts\n");

/***/ })

});