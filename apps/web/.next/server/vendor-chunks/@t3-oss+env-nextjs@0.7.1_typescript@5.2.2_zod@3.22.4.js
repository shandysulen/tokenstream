"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@t3-oss+env-nextjs@0.7.1_typescript@5.2.2_zod@3.22.4";
exports.ids = ["vendor-chunks/@t3-oss+env-nextjs@0.7.1_typescript@5.2.2_zod@3.22.4"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@t3-oss+env-nextjs@0.7.1_typescript@5.2.2_zod@3.22.4/node_modules/@t3-oss/env-nextjs/dist/index.mjs":
/*!************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@t3-oss+env-nextjs@0.7.1_typescript@5.2.2_zod@3.22.4/node_modules/@t3-oss/env-nextjs/dist/index.mjs ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEnv: () => (/* binding */ P)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(ssr)/../../node_modules/.pnpm/zod@3.22.4/node_modules/zod/lib/index.mjs\");\nfunction f(e){let r=e.runtimeEnvStrict??e.runtimeEnv??process.env;if(e.emptyStringAsUndefined??!1)for(let[t,n]of Object.entries(r))n===\"\"&&delete r[t];if(e.skipValidation)return r;let i=typeof e.client==\"object\"?e.client:{},o=typeof e.server==\"object\"?e.server:{},s=typeof e.shared==\"object\"?e.shared:{},d=zod__WEBPACK_IMPORTED_MODULE_0__.z.object(i),T=zod__WEBPACK_IMPORTED_MODULE_0__.z.object(o),l=zod__WEBPACK_IMPORTED_MODULE_0__.z.object(s),v=e.isServer??typeof window>\"u\",p=d.merge(l),y=T.merge(l).merge(d),c=v?y.safeParse(r):p.safeParse(r),m=e.onValidationError??(t=>{throw console.error(\"\\u274C Invalid environment variables:\",t.flatten().fieldErrors),new Error(\"Invalid environment variables\")}),u=e.onInvalidAccess??(t=>{throw new Error(\"\\u274C Attempted to access a server-side environment variable on the client\")});return c.success===!1?m(c.error):new Proxy(c.data,{get(t,n){if(!(typeof n!=\"string\"||n===\"__esModule\"||n===\"$$typeof\"))return!v&&e.clientPrefix&&!n.startsWith(e.clientPrefix)&&l.shape[n]===void 0?u(n):t[n]}})}var x=\"NEXT_PUBLIC_\";function P(e){let r=typeof e.client==\"object\"?e.client:{},i=typeof e.server==\"object\"?e.server:{},o=e.shared,s=e.runtimeEnv?e.runtimeEnv:{...process.env,...e.experimental__runtimeEnv};return f({...e,shared:o,client:r,server:i,clientPrefix:x,runtimeEnv:s})}\n//# sourceMappingURL=index.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B0My1vc3MrZW52LW5leHRqc0AwLjcuMV90eXBlc2NyaXB0QDUuMi4yX3pvZEAzLjIyLjQvbm9kZV9tb2R1bGVzL0B0My1vc3MvZW52LW5leHRqcy9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QixjQUFjLG9EQUFvRCxxRkFBcUYsNkJBQTZCLDJDQUEyQyx3Q0FBd0Msd0NBQXdDLEdBQUcsa0NBQUMsYUFBYSxrQ0FBQyxhQUFhLGtDQUFDLDRJQUE0SSxnSUFBZ0ksNEJBQTRCLCtGQUErRixFQUFFLG1EQUFtRCxTQUFTLG1KQUFtSixFQUFFLHFCQUFxQixjQUFjLDJDQUEyQyx3Q0FBd0MseUNBQXlDLDhDQUE4QyxVQUFVLDREQUE0RCxFQUF5QjtBQUM3dUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdG9rZW5zdHJlYW0vd2ViLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AdDMtb3NzK2Vudi1uZXh0anNAMC43LjFfdHlwZXNjcmlwdEA1LjIuMl96b2RAMy4yMi40L25vZGVfbW9kdWxlcy9AdDMtb3NzL2Vudi1uZXh0anMvZGlzdC9pbmRleC5tanM/NTJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7eiBhcyBhfWZyb21cInpvZFwiO2Z1bmN0aW9uIGYoZSl7bGV0IHI9ZS5ydW50aW1lRW52U3RyaWN0Pz9lLnJ1bnRpbWVFbnY/P3Byb2Nlc3MuZW52O2lmKGUuZW1wdHlTdHJpbmdBc1VuZGVmaW5lZD8/ITEpZm9yKGxldFt0LG5db2YgT2JqZWN0LmVudHJpZXMocikpbj09PVwiXCImJmRlbGV0ZSByW3RdO2lmKGUuc2tpcFZhbGlkYXRpb24pcmV0dXJuIHI7bGV0IGk9dHlwZW9mIGUuY2xpZW50PT1cIm9iamVjdFwiP2UuY2xpZW50Ont9LG89dHlwZW9mIGUuc2VydmVyPT1cIm9iamVjdFwiP2Uuc2VydmVyOnt9LHM9dHlwZW9mIGUuc2hhcmVkPT1cIm9iamVjdFwiP2Uuc2hhcmVkOnt9LGQ9YS5vYmplY3QoaSksVD1hLm9iamVjdChvKSxsPWEub2JqZWN0KHMpLHY9ZS5pc1NlcnZlcj8/dHlwZW9mIHdpbmRvdz5cInVcIixwPWQubWVyZ2UobCkseT1ULm1lcmdlKGwpLm1lcmdlKGQpLGM9dj95LnNhZmVQYXJzZShyKTpwLnNhZmVQYXJzZShyKSxtPWUub25WYWxpZGF0aW9uRXJyb3I/Pyh0PT57dGhyb3cgY29uc29sZS5lcnJvcihcIlxcdTI3NEMgSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZXM6XCIsdC5mbGF0dGVuKCkuZmllbGRFcnJvcnMpLG5ldyBFcnJvcihcIkludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGVzXCIpfSksdT1lLm9uSW52YWxpZEFjY2Vzcz8/KHQ9Pnt0aHJvdyBuZXcgRXJyb3IoXCJcXHUyNzRDIEF0dGVtcHRlZCB0byBhY2Nlc3MgYSBzZXJ2ZXItc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBvbiB0aGUgY2xpZW50XCIpfSk7cmV0dXJuIGMuc3VjY2Vzcz09PSExP20oYy5lcnJvcik6bmV3IFByb3h5KGMuZGF0YSx7Z2V0KHQsbil7aWYoISh0eXBlb2YgbiE9XCJzdHJpbmdcInx8bj09PVwiX19lc01vZHVsZVwifHxuPT09XCIkJHR5cGVvZlwiKSlyZXR1cm4hdiYmZS5jbGllbnRQcmVmaXgmJiFuLnN0YXJ0c1dpdGgoZS5jbGllbnRQcmVmaXgpJiZsLnNoYXBlW25dPT09dm9pZCAwP3Uobik6dFtuXX19KX12YXIgeD1cIk5FWFRfUFVCTElDX1wiO2Z1bmN0aW9uIFAoZSl7bGV0IHI9dHlwZW9mIGUuY2xpZW50PT1cIm9iamVjdFwiP2UuY2xpZW50Ont9LGk9dHlwZW9mIGUuc2VydmVyPT1cIm9iamVjdFwiP2Uuc2VydmVyOnt9LG89ZS5zaGFyZWQscz1lLnJ1bnRpbWVFbnY/ZS5ydW50aW1lRW52OnsuLi5wcm9jZXNzLmVudiwuLi5lLmV4cGVyaW1lbnRhbF9fcnVudGltZUVudn07cmV0dXJuIGYoey4uLmUsc2hhcmVkOm8sY2xpZW50OnIsc2VydmVyOmksY2xpZW50UHJlZml4OngscnVudGltZUVudjpzfSl9ZXhwb3J0e1AgYXMgY3JlYXRlRW52fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@t3-oss+env-nextjs@0.7.1_typescript@5.2.2_zod@3.22.4/node_modules/@t3-oss/env-nextjs/dist/index.mjs\n");

/***/ })

};
;