"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/siwe/nonce/route";
exports.ids = ["app/api/siwe/nonce/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/../../node_modules/.pnpm/next@14.0.1_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsiwe%2Fnonce%2Froute&page=%2Fapi%2Fsiwe%2Fnonce%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsiwe%2Fnonce%2Froute.ts&appDir=C%3A%5CUsers%5Cshand%5COneDrive%5CDocuments%5Crepos%5Cgemhunter%5Capps%5Cweb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshand%5COneDrive%5CDocuments%5Crepos%5Cgemhunter%5Capps%5Cweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/next@14.0.1_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsiwe%2Fnonce%2Froute&page=%2Fapi%2Fsiwe%2Fnonce%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsiwe%2Fnonce%2Froute.ts&appDir=C%3A%5CUsers%5Cshand%5COneDrive%5CDocuments%5Crepos%5Cgemhunter%5Capps%5Cweb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshand%5COneDrive%5CDocuments%5Crepos%5Cgemhunter%5Capps%5Cweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../../node_modules/.pnpm/next@14.0.1_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../../node_modules/.pnpm/next@14.0.1_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_shand_OneDrive_Documents_repos_gemhunter_apps_web_src_app_api_siwe_nonce_route_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/api/siwe/nonce/route.ts */ \"(rsc)/./src/app/api/siwe/nonce/route.ts\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/siwe/nonce/route\",\n        pathname: \"/api/siwe/nonce\",\n        filename: \"route\",\n        bundlePath: \"app/api/siwe/nonce/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\shand\\\\OneDrive\\\\Documents\\\\repos\\\\gemhunter\\\\apps\\\\web\\\\src\\\\app\\\\api\\\\siwe\\\\nonce\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_shand_OneDrive_Documents_repos_gemhunter_apps_web_src_app_api_siwe_nonce_route_ts__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/siwe/nonce/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25leHRAMTQuMC4xX0BiYWJlbCtjb3JlQDcuMjMuOV9yZWFjdC1kb21AMTguMi4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzaXdlJTJGbm9uY2UlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNpd2UlMkZub25jZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNpd2UlMkZub25jZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzaGFuZCU1Q09uZURyaXZlJTVDRG9jdW1lbnRzJTVDcmVwb3MlNUNnZW1odW50ZXIlNUNhcHBzJTVDd2ViJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNzaGFuZCU1Q09uZURyaXZlJTVDRG9jdW1lbnRzJTVDcmVwb3MlNUNnZW1odW50ZXIlNUNhcHBzJTVDd2ViJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNzRTtBQUNySTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdG9rZW5zdHJlYW0vd2ViLz8zMGIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHNoYW5kXFxcXE9uZURyaXZlXFxcXERvY3VtZW50c1xcXFxyZXBvc1xcXFxnZW1odW50ZXJcXFxcYXBwc1xcXFx3ZWJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcc2l3ZVxcXFxub25jZVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2l3ZS9ub25jZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Npd2Uvbm9uY2VcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Npd2Uvbm9uY2Uvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxzaGFuZFxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxccmVwb3NcXFxcZ2VtaHVudGVyXFxcXGFwcHNcXFxcd2ViXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHNpd2VcXFxcbm9uY2VcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc2l3ZS9ub25jZS9yb3V0ZVwiO1xuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/next@14.0.1_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsiwe%2Fnonce%2Froute&page=%2Fapi%2Fsiwe%2Fnonce%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsiwe%2Fnonce%2Froute.ts&appDir=C%3A%5CUsers%5Cshand%5COneDrive%5CDocuments%5Crepos%5Cgemhunter%5Capps%5Cweb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshand%5COneDrive%5CDocuments%5Crepos%5Cgemhunter%5Capps%5Cweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/siwe/nonce/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/siwe/nonce/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var siwe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! siwe */ \"(rsc)/../../node_modules/.pnpm/siwe@2.1.4_ethers@5.7.0/node_modules/siwe/dist/siwe.js\");\n/* harmony import */ var siwe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(siwe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET = async ()=>{\n    return new Response((0,siwe__WEBPACK_IMPORTED_MODULE_0__.generateNonce)());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zaXdlL25vbmNlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztBQUU5QixNQUFNQyxNQUFNO0lBQ2pCLE9BQU8sSUFBSUMsU0FBU0YsbURBQWFBO0FBQ25DLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdG9rZW5zdHJlYW0vd2ViLy4vc3JjL2FwcC9hcGkvc2l3ZS9ub25jZS9yb3V0ZS50cz81M2ZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdlbmVyYXRlTm9uY2UgfSBmcm9tIFwic2l3ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVCA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gbmV3IFJlc3BvbnNlKGdlbmVyYXRlTm9uY2UoKSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJnZW5lcmF0ZU5vbmNlIiwiR0VUIiwiUmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/siwe/nonce/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.0.1_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0","vendor-chunks/@swc+helpers@0.5.2","vendor-chunks/@noble+hashes@1.3.2","vendor-chunks/apg-js@4.2.1","vendor-chunks/@ethersproject+providers@5.7.0_bufferutil@4.0.7","vendor-chunks/bn.js@5.2.1","vendor-chunks/@ethersproject+abi@5.7.0","vendor-chunks/aes-js@3.0.0","vendor-chunks/@ethersproject+wordlists@5.7.0","vendor-chunks/@ethersproject+hash@5.7.0","vendor-chunks/@ethersproject+contracts@5.7.0","vendor-chunks/@ethersproject+signing-key@5.7.0","vendor-chunks/hash.js@1.1.7","vendor-chunks/@ethersproject+bignumber@5.7.0","vendor-chunks/siwe@2.1.4_ethers@5.7.0","vendor-chunks/@ethersproject+web@5.7.0","vendor-chunks/@ethersproject+strings@5.7.0","vendor-chunks/@ethersproject+json-wallets@5.7.0","vendor-chunks/js-sha3@0.8.0","vendor-chunks/scrypt-js@3.0.1","vendor-chunks/@ethersproject+abstract-signer@5.7.0","vendor-chunks/@ethersproject+transactions@5.7.0","vendor-chunks/@stablelib+binary@1.0.1","vendor-chunks/ethers@5.7.0_bufferutil@4.0.7","vendor-chunks/@ethersproject+hdnode@5.7.0","vendor-chunks/@ethersproject+logger@5.7.0","vendor-chunks/@ethersproject+bytes@5.7.0","vendor-chunks/@spruceid+siwe-parser@2.0.2","vendor-chunks/@ethersproject+wallet@5.7.0","vendor-chunks/@ethersproject+networks@5.7.0","vendor-chunks/@stablelib+random@1.0.2","vendor-chunks/@ethersproject+abstract-provider@5.7.0","vendor-chunks/@ethersproject+properties@5.7.0","vendor-chunks/@ethersproject+address@5.7.0","vendor-chunks/@ethersproject+rlp@5.7.0","vendor-chunks/@ethersproject+basex@5.7.0","vendor-chunks/bech32@1.1.4","vendor-chunks/valid-url@1.0.9","vendor-chunks/@ethersproject+solidity@5.7.0","vendor-chunks/@ethersproject+units@5.7.0","vendor-chunks/@ethersproject+constants@5.7.0","vendor-chunks/@ethersproject+sha2@5.7.0","vendor-chunks/@stablelib+int@1.0.1","vendor-chunks/@ethersproject+random@5.7.0","vendor-chunks/@ethersproject+pbkdf2@5.7.0","vendor-chunks/@stablelib+wipe@1.0.1","vendor-chunks/inherits@2.0.4","vendor-chunks/@ethersproject+base64@5.7.0","vendor-chunks/@ethersproject+keccak256@5.7.0","vendor-chunks/minimalistic-assert@1.0.1"], () => (__webpack_exec__("(rsc)/../../node_modules/.pnpm/next@14.0.1_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsiwe%2Fnonce%2Froute&page=%2Fapi%2Fsiwe%2Fnonce%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsiwe%2Fnonce%2Froute.ts&appDir=C%3A%5CUsers%5Cshand%5COneDrive%5CDocuments%5Crepos%5Cgemhunter%5Capps%5Cweb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshand%5COneDrive%5CDocuments%5Crepos%5Cgemhunter%5Capps%5Cweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();