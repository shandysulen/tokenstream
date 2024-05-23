"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@motionone+generators@10.16.4";
exports.ids = ["vendor-chunks/@motionone+generators@10.16.4"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/glide/index.cjs.js":
/*!*************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/glide/index.cjs.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar utils = __webpack_require__(/*! @motionone/utils */ \"(ssr)/../../node_modules/.pnpm/@motionone+utils@10.16.3/node_modules/@motionone/utils/dist/index.cjs.js\");\nvar velocity = __webpack_require__(/*! ../utils/velocity.cjs.js */ \"(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/utils/velocity.cjs.js\");\nvar index = __webpack_require__(/*! ../spring/index.cjs.js */ \"(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/spring/index.cjs.js\");\n\nconst glide = ({ from = 0, velocity: velocity$1 = 0.0, power = 0.8, decay = 0.325, bounceDamping, bounceStiffness, changeTarget, min, max, restDistance = 0.5, restSpeed, }) => {\n    decay = utils.time.ms(decay);\n    const state = {\n        hasReachedTarget: false,\n        done: false,\n        current: from,\n        target: from,\n    };\n    const isOutOfBounds = (v) => (min !== undefined && v < min) || (max !== undefined && v > max);\n    const nearestBoundary = (v) => {\n        if (min === undefined)\n            return max;\n        if (max === undefined)\n            return min;\n        return Math.abs(min - v) < Math.abs(max - v) ? min : max;\n    };\n    let amplitude = power * velocity$1;\n    const ideal = from + amplitude;\n    const target = changeTarget === undefined ? ideal : changeTarget(ideal);\n    state.target = target;\n    /**\n     * If the target has changed we need to re-calculate the amplitude, otherwise\n     * the animation will start from the wrong position.\n     */\n    if (target !== ideal)\n        amplitude = target - from;\n    const calcDelta = (t) => -amplitude * Math.exp(-t / decay);\n    const calcLatest = (t) => target + calcDelta(t);\n    const applyFriction = (t) => {\n        const delta = calcDelta(t);\n        const latest = calcLatest(t);\n        state.done = Math.abs(delta) <= restDistance;\n        state.current = state.done ? target : latest;\n    };\n    /**\n     * Ideally this would resolve for t in a stateless way, we could\n     * do that by always precalculating the animation but as we know\n     * this will be done anyway we can assume that spring will\n     * be discovered during that.\n     */\n    let timeReachedBoundary;\n    let spring;\n    const checkCatchBoundary = (t) => {\n        if (!isOutOfBounds(state.current))\n            return;\n        timeReachedBoundary = t;\n        spring = index.spring({\n            from: state.current,\n            to: nearestBoundary(state.current),\n            velocity: velocity.calcGeneratorVelocity(calcLatest, t, state.current),\n            damping: bounceDamping,\n            stiffness: bounceStiffness,\n            restDistance,\n            restSpeed,\n        });\n    };\n    checkCatchBoundary(0);\n    return (t) => {\n        /**\n         * We need to resolve the friction to figure out if we need a\n         * spring but we don't want to do this twice per frame. So here\n         * we flag if we updated for this frame and later if we did\n         * we can skip doing it again.\n         */\n        let hasUpdatedFrame = false;\n        if (!spring && timeReachedBoundary === undefined) {\n            hasUpdatedFrame = true;\n            applyFriction(t);\n            checkCatchBoundary(t);\n        }\n        /**\n         * If we have a spring and the provided t is beyond the moment the friction\n         * animation crossed the min/max boundary, use the spring.\n         */\n        if (timeReachedBoundary !== undefined && t > timeReachedBoundary) {\n            state.hasReachedTarget = true;\n            return spring(t - timeReachedBoundary);\n        }\n        else {\n            state.hasReachedTarget = false;\n            !hasUpdatedFrame && applyFriction(t);\n            return state;\n        }\n    };\n};\n\nexports.glide = glide;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb3Rpb25vbmUrZ2VuZXJhdG9yc0AxMC4xNi40L25vZGVfbW9kdWxlcy9AbW90aW9ub25lL2dlbmVyYXRvcnMvZGlzdC9nbGlkZS9pbmRleC5janMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxZQUFZLG1CQUFPLENBQUMsaUlBQWtCO0FBQ3RDLGVBQWUsbUJBQU8sQ0FBQyw0SkFBMEI7QUFDakQsWUFBWSxtQkFBTyxDQUFDLHdKQUF3Qjs7QUFFNUMsaUJBQWlCLDBKQUEwSjtBQUMzSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRva2Vuc3RyZWFtL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG1vdGlvbm9uZStnZW5lcmF0b3JzQDEwLjE2LjQvbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvZ2VuZXJhdG9ycy9kaXN0L2dsaWRlL2luZGV4LmNqcy5qcz83YWIwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnQG1vdGlvbm9uZS91dGlscycpO1xudmFyIHZlbG9jaXR5ID0gcmVxdWlyZSgnLi4vdXRpbHMvdmVsb2NpdHkuY2pzLmpzJyk7XG52YXIgaW5kZXggPSByZXF1aXJlKCcuLi9zcHJpbmcvaW5kZXguY2pzLmpzJyk7XG5cbmNvbnN0IGdsaWRlID0gKHsgZnJvbSA9IDAsIHZlbG9jaXR5OiB2ZWxvY2l0eSQxID0gMC4wLCBwb3dlciA9IDAuOCwgZGVjYXkgPSAwLjMyNSwgYm91bmNlRGFtcGluZywgYm91bmNlU3RpZmZuZXNzLCBjaGFuZ2VUYXJnZXQsIG1pbiwgbWF4LCByZXN0RGlzdGFuY2UgPSAwLjUsIHJlc3RTcGVlZCwgfSkgPT4ge1xuICAgIGRlY2F5ID0gdXRpbHMudGltZS5tcyhkZWNheSk7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIGhhc1JlYWNoZWRUYXJnZXQ6IGZhbHNlLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgY3VycmVudDogZnJvbSxcbiAgICAgICAgdGFyZ2V0OiBmcm9tLFxuICAgIH07XG4gICAgY29uc3QgaXNPdXRPZkJvdW5kcyA9ICh2KSA9PiAobWluICE9PSB1bmRlZmluZWQgJiYgdiA8IG1pbikgfHwgKG1heCAhPT0gdW5kZWZpbmVkICYmIHYgPiBtYXgpO1xuICAgIGNvbnN0IG5lYXJlc3RCb3VuZGFyeSA9ICh2KSA9PiB7XG4gICAgICAgIGlmIChtaW4gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiBtYXg7XG4gICAgICAgIGlmIChtYXggPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiBtaW47XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhtaW4gLSB2KSA8IE1hdGguYWJzKG1heCAtIHYpID8gbWluIDogbWF4O1xuICAgIH07XG4gICAgbGV0IGFtcGxpdHVkZSA9IHBvd2VyICogdmVsb2NpdHkkMTtcbiAgICBjb25zdCBpZGVhbCA9IGZyb20gKyBhbXBsaXR1ZGU7XG4gICAgY29uc3QgdGFyZ2V0ID0gY2hhbmdlVGFyZ2V0ID09PSB1bmRlZmluZWQgPyBpZGVhbCA6IGNoYW5nZVRhcmdldChpZGVhbCk7XG4gICAgc3RhdGUudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIC8qKlxuICAgICAqIElmIHRoZSB0YXJnZXQgaGFzIGNoYW5nZWQgd2UgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlIGFtcGxpdHVkZSwgb3RoZXJ3aXNlXG4gICAgICogdGhlIGFuaW1hdGlvbiB3aWxsIHN0YXJ0IGZyb20gdGhlIHdyb25nIHBvc2l0aW9uLlxuICAgICAqL1xuICAgIGlmICh0YXJnZXQgIT09IGlkZWFsKVxuICAgICAgICBhbXBsaXR1ZGUgPSB0YXJnZXQgLSBmcm9tO1xuICAgIGNvbnN0IGNhbGNEZWx0YSA9ICh0KSA9PiAtYW1wbGl0dWRlICogTWF0aC5leHAoLXQgLyBkZWNheSk7XG4gICAgY29uc3QgY2FsY0xhdGVzdCA9ICh0KSA9PiB0YXJnZXQgKyBjYWxjRGVsdGEodCk7XG4gICAgY29uc3QgYXBwbHlGcmljdGlvbiA9ICh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gY2FsY0RlbHRhKHQpO1xuICAgICAgICBjb25zdCBsYXRlc3QgPSBjYWxjTGF0ZXN0KHQpO1xuICAgICAgICBzdGF0ZS5kb25lID0gTWF0aC5hYnMoZGVsdGEpIDw9IHJlc3REaXN0YW5jZTtcbiAgICAgICAgc3RhdGUuY3VycmVudCA9IHN0YXRlLmRvbmUgPyB0YXJnZXQgOiBsYXRlc3Q7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJZGVhbGx5IHRoaXMgd291bGQgcmVzb2x2ZSBmb3IgdCBpbiBhIHN0YXRlbGVzcyB3YXksIHdlIGNvdWxkXG4gICAgICogZG8gdGhhdCBieSBhbHdheXMgcHJlY2FsY3VsYXRpbmcgdGhlIGFuaW1hdGlvbiBidXQgYXMgd2Uga25vd1xuICAgICAqIHRoaXMgd2lsbCBiZSBkb25lIGFueXdheSB3ZSBjYW4gYXNzdW1lIHRoYXQgc3ByaW5nIHdpbGxcbiAgICAgKiBiZSBkaXNjb3ZlcmVkIGR1cmluZyB0aGF0LlxuICAgICAqL1xuICAgIGxldCB0aW1lUmVhY2hlZEJvdW5kYXJ5O1xuICAgIGxldCBzcHJpbmc7XG4gICAgY29uc3QgY2hlY2tDYXRjaEJvdW5kYXJ5ID0gKHQpID0+IHtcbiAgICAgICAgaWYgKCFpc091dE9mQm91bmRzKHN0YXRlLmN1cnJlbnQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aW1lUmVhY2hlZEJvdW5kYXJ5ID0gdDtcbiAgICAgICAgc3ByaW5nID0gaW5kZXguc3ByaW5nKHtcbiAgICAgICAgICAgIGZyb206IHN0YXRlLmN1cnJlbnQsXG4gICAgICAgICAgICB0bzogbmVhcmVzdEJvdW5kYXJ5KHN0YXRlLmN1cnJlbnQpLFxuICAgICAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5LmNhbGNHZW5lcmF0b3JWZWxvY2l0eShjYWxjTGF0ZXN0LCB0LCBzdGF0ZS5jdXJyZW50KSxcbiAgICAgICAgICAgIGRhbXBpbmc6IGJvdW5jZURhbXBpbmcsXG4gICAgICAgICAgICBzdGlmZm5lc3M6IGJvdW5jZVN0aWZmbmVzcyxcbiAgICAgICAgICAgIHJlc3REaXN0YW5jZSxcbiAgICAgICAgICAgIHJlc3RTcGVlZCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjaGVja0NhdGNoQm91bmRhcnkoMCk7XG4gICAgcmV0dXJuICh0KSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXZSBuZWVkIHRvIHJlc29sdmUgdGhlIGZyaWN0aW9uIHRvIGZpZ3VyZSBvdXQgaWYgd2UgbmVlZCBhXG4gICAgICAgICAqIHNwcmluZyBidXQgd2UgZG9uJ3Qgd2FudCB0byBkbyB0aGlzIHR3aWNlIHBlciBmcmFtZS4gU28gaGVyZVxuICAgICAgICAgKiB3ZSBmbGFnIGlmIHdlIHVwZGF0ZWQgZm9yIHRoaXMgZnJhbWUgYW5kIGxhdGVyIGlmIHdlIGRpZFxuICAgICAgICAgKiB3ZSBjYW4gc2tpcCBkb2luZyBpdCBhZ2Fpbi5cbiAgICAgICAgICovXG4gICAgICAgIGxldCBoYXNVcGRhdGVkRnJhbWUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFzcHJpbmcgJiYgdGltZVJlYWNoZWRCb3VuZGFyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoYXNVcGRhdGVkRnJhbWUgPSB0cnVlO1xuICAgICAgICAgICAgYXBwbHlGcmljdGlvbih0KTtcbiAgICAgICAgICAgIGNoZWNrQ2F0Y2hCb3VuZGFyeSh0KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgd2UgaGF2ZSBhIHNwcmluZyBhbmQgdGhlIHByb3ZpZGVkIHQgaXMgYmV5b25kIHRoZSBtb21lbnQgdGhlIGZyaWN0aW9uXG4gICAgICAgICAqIGFuaW1hdGlvbiBjcm9zc2VkIHRoZSBtaW4vbWF4IGJvdW5kYXJ5LCB1c2UgdGhlIHNwcmluZy5cbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aW1lUmVhY2hlZEJvdW5kYXJ5ICE9PSB1bmRlZmluZWQgJiYgdCA+IHRpbWVSZWFjaGVkQm91bmRhcnkpIHtcbiAgICAgICAgICAgIHN0YXRlLmhhc1JlYWNoZWRUYXJnZXQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHNwcmluZyh0IC0gdGltZVJlYWNoZWRCb3VuZGFyeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZS5oYXNSZWFjaGVkVGFyZ2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAhaGFzVXBkYXRlZEZyYW1lICYmIGFwcGx5RnJpY3Rpb24odCk7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuZXhwb3J0cy5nbGlkZSA9IGdsaWRlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/glide/index.cjs.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/index.cjs.js":
/*!*******************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/index.cjs.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar index = __webpack_require__(/*! ./glide/index.cjs.js */ \"(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/glide/index.cjs.js\");\nvar index$1 = __webpack_require__(/*! ./spring/index.cjs.js */ \"(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/spring/index.cjs.js\");\nvar pregenerateKeyframes = __webpack_require__(/*! ./utils/pregenerate-keyframes.cjs.js */ \"(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/utils/pregenerate-keyframes.cjs.js\");\nvar velocity = __webpack_require__(/*! ./utils/velocity.cjs.js */ \"(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/utils/velocity.cjs.js\");\n\n\n\nexports.glide = index.glide;\nexports.spring = index$1.spring;\nexports.pregenerateKeyframes = pregenerateKeyframes.pregenerateKeyframes;\nexports.calcGeneratorVelocity = velocity.calcGeneratorVelocity;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb3Rpb25vbmUrZ2VuZXJhdG9yc0AxMC4xNi40L25vZGVfbW9kdWxlcy9AbW90aW9ub25lL2dlbmVyYXRvcnMvZGlzdC9pbmRleC5janMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxZQUFZLG1CQUFPLENBQUMscUpBQXNCO0FBQzFDLGNBQWMsbUJBQU8sQ0FBQyx1SkFBdUI7QUFDN0MsMkJBQTJCLG1CQUFPLENBQUMscUxBQXNDO0FBQ3pFLGVBQWUsbUJBQU8sQ0FBQywySkFBeUI7Ozs7QUFJaEQsYUFBYTtBQUNiLGNBQWM7QUFDZCw0QkFBNEI7QUFDNUIsNkJBQTZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRva2Vuc3RyZWFtL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG1vdGlvbm9uZStnZW5lcmF0b3JzQDEwLjE2LjQvbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvZ2VuZXJhdG9ycy9kaXN0L2luZGV4LmNqcy5qcz9jMDA0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGluZGV4ID0gcmVxdWlyZSgnLi9nbGlkZS9pbmRleC5janMuanMnKTtcbnZhciBpbmRleCQxID0gcmVxdWlyZSgnLi9zcHJpbmcvaW5kZXguY2pzLmpzJyk7XG52YXIgcHJlZ2VuZXJhdGVLZXlmcmFtZXMgPSByZXF1aXJlKCcuL3V0aWxzL3ByZWdlbmVyYXRlLWtleWZyYW1lcy5janMuanMnKTtcbnZhciB2ZWxvY2l0eSA9IHJlcXVpcmUoJy4vdXRpbHMvdmVsb2NpdHkuY2pzLmpzJyk7XG5cblxuXG5leHBvcnRzLmdsaWRlID0gaW5kZXguZ2xpZGU7XG5leHBvcnRzLnNwcmluZyA9IGluZGV4JDEuc3ByaW5nO1xuZXhwb3J0cy5wcmVnZW5lcmF0ZUtleWZyYW1lcyA9IHByZWdlbmVyYXRlS2V5ZnJhbWVzLnByZWdlbmVyYXRlS2V5ZnJhbWVzO1xuZXhwb3J0cy5jYWxjR2VuZXJhdG9yVmVsb2NpdHkgPSB2ZWxvY2l0eS5jYWxjR2VuZXJhdG9yVmVsb2NpdHk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/index.cjs.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/spring/defaults.cjs.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/spring/defaults.cjs.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nconst defaults = {\n    stiffness: 100.0,\n    damping: 10.0,\n    mass: 1.0,\n};\n\nexports.defaults = defaults;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb3Rpb25vbmUrZ2VuZXJhdG9yc0AxMC4xNi40L25vZGVfbW9kdWxlcy9AbW90aW9ub25lL2dlbmVyYXRvcnMvZGlzdC9zcHJpbmcvZGVmYXVsdHMuY2pzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdG9rZW5zdHJlYW0vd2ViLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW90aW9ub25lK2dlbmVyYXRvcnNAMTAuMTYuNC9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS9nZW5lcmF0b3JzL2Rpc3Qvc3ByaW5nL2RlZmF1bHRzLmNqcy5qcz9lYzMyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgc3RpZmZuZXNzOiAxMDAuMCxcbiAgICBkYW1waW5nOiAxMC4wLFxuICAgIG1hc3M6IDEuMCxcbn07XG5cbmV4cG9ydHMuZGVmYXVsdHMgPSBkZWZhdWx0cztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/spring/defaults.cjs.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/spring/index.cjs.js":
/*!**************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/spring/index.cjs.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar utils = __webpack_require__(/*! @motionone/utils */ \"(ssr)/../../node_modules/.pnpm/@motionone+utils@10.16.3/node_modules/@motionone/utils/dist/index.cjs.js\");\nvar defaults = __webpack_require__(/*! ./defaults.cjs.js */ \"(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/spring/defaults.cjs.js\");\nvar utils$1 = __webpack_require__(/*! ./utils.cjs.js */ \"(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/spring/utils.cjs.js\");\nvar hasReachedTarget = __webpack_require__(/*! ../utils/has-reached-target.cjs.js */ \"(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/utils/has-reached-target.cjs.js\");\nvar velocity = __webpack_require__(/*! ../utils/velocity.cjs.js */ \"(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/utils/velocity.cjs.js\");\n\nconst spring = ({ stiffness = defaults.defaults.stiffness, damping = defaults.defaults.damping, mass = defaults.defaults.mass, from = 0, to = 1, velocity: velocity$1 = 0.0, restSpeed, restDistance, } = {}) => {\n    velocity$1 = velocity$1 ? utils.time.s(velocity$1) : 0.0;\n    const state = {\n        done: false,\n        hasReachedTarget: false,\n        current: from,\n        target: to,\n    };\n    const initialDelta = to - from;\n    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;\n    const dampingRatio = utils$1.calcDampingRatio(stiffness, damping, mass);\n    const isGranularScale = Math.abs(initialDelta) < 5;\n    restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);\n    restDistance || (restDistance = isGranularScale ? 0.005 : 0.5);\n    let resolveSpring;\n    if (dampingRatio < 1) {\n        const angularFreq = undampedAngularFreq * Math.sqrt(1 - dampingRatio * dampingRatio);\n        // Underdamped spring (bouncy)\n        resolveSpring = (t) => to -\n            Math.exp(-dampingRatio * undampedAngularFreq * t) *\n                (((-velocity$1 + dampingRatio * undampedAngularFreq * initialDelta) /\n                    angularFreq) *\n                    Math.sin(angularFreq * t) +\n                    initialDelta * Math.cos(angularFreq * t));\n    }\n    else {\n        // Critically damped spring\n        resolveSpring = (t) => {\n            return (to -\n                Math.exp(-undampedAngularFreq * t) *\n                    (initialDelta + (-velocity$1 + undampedAngularFreq * initialDelta) * t));\n        };\n    }\n    return (t) => {\n        state.current = resolveSpring(t);\n        const currentVelocity = t === 0\n            ? velocity$1\n            : velocity.calcGeneratorVelocity(resolveSpring, t, state.current);\n        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;\n        const isBelowDisplacementThreshold = Math.abs(to - state.current) <= restDistance;\n        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;\n        state.hasReachedTarget = hasReachedTarget.hasReachedTarget(from, to, state.current);\n        return state;\n    };\n};\n\nexports.spring = spring;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb3Rpb25vbmUrZ2VuZXJhdG9yc0AxMC4xNi40L25vZGVfbW9kdWxlcy9AbW90aW9ub25lL2dlbmVyYXRvcnMvZGlzdC9zcHJpbmcvaW5kZXguY2pzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7QUFFN0QsWUFBWSxtQkFBTyxDQUFDLGlJQUFrQjtBQUN0QyxlQUFlLG1CQUFPLENBQUMsc0pBQW1CO0FBQzFDLGNBQWMsbUJBQU8sQ0FBQyxnSkFBZ0I7QUFDdEMsdUJBQXVCLG1CQUFPLENBQUMsZ0xBQW9DO0FBQ25FLGVBQWUsbUJBQU8sQ0FBQyw0SkFBMEI7O0FBRWpELGtCQUFrQixzTEFBc0wsSUFBSTtBQUM1TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdG9rZW5zdHJlYW0vd2ViLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW90aW9ub25lK2dlbmVyYXRvcnNAMTAuMTYuNC9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS9nZW5lcmF0b3JzL2Rpc3Qvc3ByaW5nL2luZGV4LmNqcy5qcz9kMDhmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnQG1vdGlvbm9uZS91dGlscycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cy5janMuanMnKTtcbnZhciB1dGlscyQxID0gcmVxdWlyZSgnLi91dGlscy5janMuanMnKTtcbnZhciBoYXNSZWFjaGVkVGFyZ2V0ID0gcmVxdWlyZSgnLi4vdXRpbHMvaGFzLXJlYWNoZWQtdGFyZ2V0LmNqcy5qcycpO1xudmFyIHZlbG9jaXR5ID0gcmVxdWlyZSgnLi4vdXRpbHMvdmVsb2NpdHkuY2pzLmpzJyk7XG5cbmNvbnN0IHNwcmluZyA9ICh7IHN0aWZmbmVzcyA9IGRlZmF1bHRzLmRlZmF1bHRzLnN0aWZmbmVzcywgZGFtcGluZyA9IGRlZmF1bHRzLmRlZmF1bHRzLmRhbXBpbmcsIG1hc3MgPSBkZWZhdWx0cy5kZWZhdWx0cy5tYXNzLCBmcm9tID0gMCwgdG8gPSAxLCB2ZWxvY2l0eTogdmVsb2NpdHkkMSA9IDAuMCwgcmVzdFNwZWVkLCByZXN0RGlzdGFuY2UsIH0gPSB7fSkgPT4ge1xuICAgIHZlbG9jaXR5JDEgPSB2ZWxvY2l0eSQxID8gdXRpbHMudGltZS5zKHZlbG9jaXR5JDEpIDogMC4wO1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgaGFzUmVhY2hlZFRhcmdldDogZmFsc2UsXG4gICAgICAgIGN1cnJlbnQ6IGZyb20sXG4gICAgICAgIHRhcmdldDogdG8sXG4gICAgfTtcbiAgICBjb25zdCBpbml0aWFsRGVsdGEgPSB0byAtIGZyb207XG4gICAgY29uc3QgdW5kYW1wZWRBbmd1bGFyRnJlcSA9IE1hdGguc3FydChzdGlmZm5lc3MgLyBtYXNzKSAvIDEwMDA7XG4gICAgY29uc3QgZGFtcGluZ1JhdGlvID0gdXRpbHMkMS5jYWxjRGFtcGluZ1JhdGlvKHN0aWZmbmVzcywgZGFtcGluZywgbWFzcyk7XG4gICAgY29uc3QgaXNHcmFudWxhclNjYWxlID0gTWF0aC5hYnMoaW5pdGlhbERlbHRhKSA8IDU7XG4gICAgcmVzdFNwZWVkIHx8IChyZXN0U3BlZWQgPSBpc0dyYW51bGFyU2NhbGUgPyAwLjAxIDogMik7XG4gICAgcmVzdERpc3RhbmNlIHx8IChyZXN0RGlzdGFuY2UgPSBpc0dyYW51bGFyU2NhbGUgPyAwLjAwNSA6IDAuNSk7XG4gICAgbGV0IHJlc29sdmVTcHJpbmc7XG4gICAgaWYgKGRhbXBpbmdSYXRpbyA8IDEpIHtcbiAgICAgICAgY29uc3QgYW5ndWxhckZyZXEgPSB1bmRhbXBlZEFuZ3VsYXJGcmVxICogTWF0aC5zcXJ0KDEgLSBkYW1waW5nUmF0aW8gKiBkYW1waW5nUmF0aW8pO1xuICAgICAgICAvLyBVbmRlcmRhbXBlZCBzcHJpbmcgKGJvdW5jeSlcbiAgICAgICAgcmVzb2x2ZVNwcmluZyA9ICh0KSA9PiB0byAtXG4gICAgICAgICAgICBNYXRoLmV4cCgtZGFtcGluZ1JhdGlvICogdW5kYW1wZWRBbmd1bGFyRnJlcSAqIHQpICpcbiAgICAgICAgICAgICAgICAoKCgtdmVsb2NpdHkkMSArIGRhbXBpbmdSYXRpbyAqIHVuZGFtcGVkQW5ndWxhckZyZXEgKiBpbml0aWFsRGVsdGEpIC9cbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhckZyZXEpICpcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5zaW4oYW5ndWxhckZyZXEgKiB0KSArXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxEZWx0YSAqIE1hdGguY29zKGFuZ3VsYXJGcmVxICogdCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gQ3JpdGljYWxseSBkYW1wZWQgc3ByaW5nXG4gICAgICAgIHJlc29sdmVTcHJpbmcgPSAodCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICh0byAtXG4gICAgICAgICAgICAgICAgTWF0aC5leHAoLXVuZGFtcGVkQW5ndWxhckZyZXEgKiB0KSAqXG4gICAgICAgICAgICAgICAgICAgIChpbml0aWFsRGVsdGEgKyAoLXZlbG9jaXR5JDEgKyB1bmRhbXBlZEFuZ3VsYXJGcmVxICogaW5pdGlhbERlbHRhKSAqIHQpKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuICh0KSA9PiB7XG4gICAgICAgIHN0YXRlLmN1cnJlbnQgPSByZXNvbHZlU3ByaW5nKHQpO1xuICAgICAgICBjb25zdCBjdXJyZW50VmVsb2NpdHkgPSB0ID09PSAwXG4gICAgICAgICAgICA/IHZlbG9jaXR5JDFcbiAgICAgICAgICAgIDogdmVsb2NpdHkuY2FsY0dlbmVyYXRvclZlbG9jaXR5KHJlc29sdmVTcHJpbmcsIHQsIHN0YXRlLmN1cnJlbnQpO1xuICAgICAgICBjb25zdCBpc0JlbG93VmVsb2NpdHlUaHJlc2hvbGQgPSBNYXRoLmFicyhjdXJyZW50VmVsb2NpdHkpIDw9IHJlc3RTcGVlZDtcbiAgICAgICAgY29uc3QgaXNCZWxvd0Rpc3BsYWNlbWVudFRocmVzaG9sZCA9IE1hdGguYWJzKHRvIC0gc3RhdGUuY3VycmVudCkgPD0gcmVzdERpc3RhbmNlO1xuICAgICAgICBzdGF0ZS5kb25lID0gaXNCZWxvd1ZlbG9jaXR5VGhyZXNob2xkICYmIGlzQmVsb3dEaXNwbGFjZW1lbnRUaHJlc2hvbGQ7XG4gICAgICAgIHN0YXRlLmhhc1JlYWNoZWRUYXJnZXQgPSBoYXNSZWFjaGVkVGFyZ2V0Lmhhc1JlYWNoZWRUYXJnZXQoZnJvbSwgdG8sIHN0YXRlLmN1cnJlbnQpO1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfTtcbn07XG5cbmV4cG9ydHMuc3ByaW5nID0gc3ByaW5nO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/spring/index.cjs.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/spring/utils.cjs.js":
/*!**************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/spring/utils.cjs.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar defaults = __webpack_require__(/*! ./defaults.cjs.js */ \"(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/spring/defaults.cjs.js\");\n\nconst calcDampingRatio = (stiffness = defaults.defaults.stiffness, damping = defaults.defaults.damping, mass = defaults.defaults.mass) => damping / (2 * Math.sqrt(stiffness * mass));\n\nexports.calcDampingRatio = calcDampingRatio;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb3Rpb25vbmUrZ2VuZXJhdG9yc0AxMC4xNi40L25vZGVfbW9kdWxlcy9AbW90aW9ub25lL2dlbmVyYXRvcnMvZGlzdC9zcHJpbmcvdXRpbHMuY2pzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7QUFFN0QsZUFBZSxtQkFBTyxDQUFDLHNKQUFtQjs7QUFFMUM7O0FBRUEsd0JBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRva2Vuc3RyZWFtL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG1vdGlvbm9uZStnZW5lcmF0b3JzQDEwLjE2LjQvbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvZ2VuZXJhdG9ycy9kaXN0L3NwcmluZy91dGlscy5janMuanM/MmRjYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMuY2pzLmpzJyk7XG5cbmNvbnN0IGNhbGNEYW1waW5nUmF0aW8gPSAoc3RpZmZuZXNzID0gZGVmYXVsdHMuZGVmYXVsdHMuc3RpZmZuZXNzLCBkYW1waW5nID0gZGVmYXVsdHMuZGVmYXVsdHMuZGFtcGluZywgbWFzcyA9IGRlZmF1bHRzLmRlZmF1bHRzLm1hc3MpID0+IGRhbXBpbmcgLyAoMiAqIE1hdGguc3FydChzdGlmZm5lc3MgKiBtYXNzKSk7XG5cbmV4cG9ydHMuY2FsY0RhbXBpbmdSYXRpbyA9IGNhbGNEYW1waW5nUmF0aW87XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/spring/utils.cjs.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/utils/has-reached-target.cjs.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/utils/has-reached-target.cjs.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nfunction hasReachedTarget(origin, target, current) {\n    return ((origin < target && current >= target) ||\n        (origin > target && current <= target));\n}\n\nexports.hasReachedTarget = hasReachedTarget;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb3Rpb25vbmUrZ2VuZXJhdG9yc0AxMC4xNi40L25vZGVfbW9kdWxlcy9AbW90aW9ub25lL2dlbmVyYXRvcnMvZGlzdC91dGlscy9oYXMtcmVhY2hlZC10YXJnZXQuY2pzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRva2Vuc3RyZWFtL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG1vdGlvbm9uZStnZW5lcmF0b3JzQDEwLjE2LjQvbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvZ2VuZXJhdG9ycy9kaXN0L3V0aWxzL2hhcy1yZWFjaGVkLXRhcmdldC5janMuanM/MmFkMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIGhhc1JlYWNoZWRUYXJnZXQob3JpZ2luLCB0YXJnZXQsIGN1cnJlbnQpIHtcbiAgICByZXR1cm4gKChvcmlnaW4gPCB0YXJnZXQgJiYgY3VycmVudCA+PSB0YXJnZXQpIHx8XG4gICAgICAgIChvcmlnaW4gPiB0YXJnZXQgJiYgY3VycmVudCA8PSB0YXJnZXQpKTtcbn1cblxuZXhwb3J0cy5oYXNSZWFjaGVkVGFyZ2V0ID0gaGFzUmVhY2hlZFRhcmdldDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/utils/has-reached-target.cjs.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/utils/pregenerate-keyframes.cjs.js":
/*!*****************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/utils/pregenerate-keyframes.cjs.js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar utils = __webpack_require__(/*! @motionone/utils */ \"(ssr)/../../node_modules/.pnpm/@motionone+utils@10.16.3/node_modules/@motionone/utils/dist/index.cjs.js\");\n\nconst timeStep = 10;\nconst maxDuration = 10000;\nfunction pregenerateKeyframes(generator, toUnit = utils.noopReturn) {\n    let overshootDuration = undefined;\n    let timestamp = timeStep;\n    let state = generator(0);\n    const keyframes = [toUnit(state.current)];\n    while (!state.done && timestamp < maxDuration) {\n        state = generator(timestamp);\n        keyframes.push(toUnit(state.done ? state.target : state.current));\n        if (overshootDuration === undefined && state.hasReachedTarget) {\n            overshootDuration = timestamp;\n        }\n        timestamp += timeStep;\n    }\n    const duration = timestamp - timeStep;\n    /**\n     * If generating an animation that didn't actually move,\n     * generate a second keyframe so we have an origin and target.\n     */\n    if (keyframes.length === 1)\n        keyframes.push(state.current);\n    return {\n        keyframes,\n        duration: duration / 1000,\n        overshootDuration: (overshootDuration !== null && overshootDuration !== void 0 ? overshootDuration : duration) / 1000,\n    };\n}\n\nexports.pregenerateKeyframes = pregenerateKeyframes;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb3Rpb25vbmUrZ2VuZXJhdG9yc0AxMC4xNi40L25vZGVfbW9kdWxlcy9AbW90aW9ub25lL2dlbmVyYXRvcnMvZGlzdC91dGlscy9wcmVnZW5lcmF0ZS1rZXlmcmFtZXMuY2pzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7QUFFN0QsWUFBWSxtQkFBTyxDQUFDLGlJQUFrQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRva2Vuc3RyZWFtL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG1vdGlvbm9uZStnZW5lcmF0b3JzQDEwLjE2LjQvbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvZ2VuZXJhdG9ycy9kaXN0L3V0aWxzL3ByZWdlbmVyYXRlLWtleWZyYW1lcy5janMuanM/MDY2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJ0Btb3Rpb25vbmUvdXRpbHMnKTtcblxuY29uc3QgdGltZVN0ZXAgPSAxMDtcbmNvbnN0IG1heER1cmF0aW9uID0gMTAwMDA7XG5mdW5jdGlvbiBwcmVnZW5lcmF0ZUtleWZyYW1lcyhnZW5lcmF0b3IsIHRvVW5pdCA9IHV0aWxzLm5vb3BSZXR1cm4pIHtcbiAgICBsZXQgb3ZlcnNob290RHVyYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgbGV0IHRpbWVzdGFtcCA9IHRpbWVTdGVwO1xuICAgIGxldCBzdGF0ZSA9IGdlbmVyYXRvcigwKTtcbiAgICBjb25zdCBrZXlmcmFtZXMgPSBbdG9Vbml0KHN0YXRlLmN1cnJlbnQpXTtcbiAgICB3aGlsZSAoIXN0YXRlLmRvbmUgJiYgdGltZXN0YW1wIDwgbWF4RHVyYXRpb24pIHtcbiAgICAgICAgc3RhdGUgPSBnZW5lcmF0b3IodGltZXN0YW1wKTtcbiAgICAgICAga2V5ZnJhbWVzLnB1c2godG9Vbml0KHN0YXRlLmRvbmUgPyBzdGF0ZS50YXJnZXQgOiBzdGF0ZS5jdXJyZW50KSk7XG4gICAgICAgIGlmIChvdmVyc2hvb3REdXJhdGlvbiA9PT0gdW5kZWZpbmVkICYmIHN0YXRlLmhhc1JlYWNoZWRUYXJnZXQpIHtcbiAgICAgICAgICAgIG92ZXJzaG9vdER1cmF0aW9uID0gdGltZXN0YW1wO1xuICAgICAgICB9XG4gICAgICAgIHRpbWVzdGFtcCArPSB0aW1lU3RlcDtcbiAgICB9XG4gICAgY29uc3QgZHVyYXRpb24gPSB0aW1lc3RhbXAgLSB0aW1lU3RlcDtcbiAgICAvKipcbiAgICAgKiBJZiBnZW5lcmF0aW5nIGFuIGFuaW1hdGlvbiB0aGF0IGRpZG4ndCBhY3R1YWxseSBtb3ZlLFxuICAgICAqIGdlbmVyYXRlIGEgc2Vjb25kIGtleWZyYW1lIHNvIHdlIGhhdmUgYW4gb3JpZ2luIGFuZCB0YXJnZXQuXG4gICAgICovXG4gICAgaWYgKGtleWZyYW1lcy5sZW5ndGggPT09IDEpXG4gICAgICAgIGtleWZyYW1lcy5wdXNoKHN0YXRlLmN1cnJlbnQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGtleWZyYW1lcyxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uIC8gMTAwMCxcbiAgICAgICAgb3ZlcnNob290RHVyYXRpb246IChvdmVyc2hvb3REdXJhdGlvbiAhPT0gbnVsbCAmJiBvdmVyc2hvb3REdXJhdGlvbiAhPT0gdm9pZCAwID8gb3ZlcnNob290RHVyYXRpb24gOiBkdXJhdGlvbikgLyAxMDAwLFxuICAgIH07XG59XG5cbmV4cG9ydHMucHJlZ2VuZXJhdGVLZXlmcmFtZXMgPSBwcmVnZW5lcmF0ZUtleWZyYW1lcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/utils/pregenerate-keyframes.cjs.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/utils/velocity.cjs.js":
/*!****************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/utils/velocity.cjs.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar utils = __webpack_require__(/*! @motionone/utils */ \"(ssr)/../../node_modules/.pnpm/@motionone+utils@10.16.3/node_modules/@motionone/utils/dist/index.cjs.js\");\n\nconst sampleT = 5; // ms\nfunction calcGeneratorVelocity(resolveValue, t, current) {\n    const prevT = Math.max(t - sampleT, 0);\n    return utils.velocityPerSecond(current - resolveValue(prevT), t - prevT);\n}\n\nexports.calcGeneratorVelocity = calcGeneratorVelocity;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb3Rpb25vbmUrZ2VuZXJhdG9yc0AxMC4xNi40L25vZGVfbW9kdWxlcy9AbW90aW9ub25lL2dlbmVyYXRvcnMvZGlzdC91dGlscy92ZWxvY2l0eS5janMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxZQUFZLG1CQUFPLENBQUMsaUlBQWtCOztBQUV0QyxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRva2Vuc3RyZWFtL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG1vdGlvbm9uZStnZW5lcmF0b3JzQDEwLjE2LjQvbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvZ2VuZXJhdG9ycy9kaXN0L3V0aWxzL3ZlbG9jaXR5LmNqcy5qcz85NTMxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnQG1vdGlvbm9uZS91dGlscycpO1xuXG5jb25zdCBzYW1wbGVUID0gNTsgLy8gbXNcbmZ1bmN0aW9uIGNhbGNHZW5lcmF0b3JWZWxvY2l0eShyZXNvbHZlVmFsdWUsIHQsIGN1cnJlbnQpIHtcbiAgICBjb25zdCBwcmV2VCA9IE1hdGgubWF4KHQgLSBzYW1wbGVULCAwKTtcbiAgICByZXR1cm4gdXRpbHMudmVsb2NpdHlQZXJTZWNvbmQoY3VycmVudCAtIHJlc29sdmVWYWx1ZShwcmV2VCksIHQgLSBwcmV2VCk7XG59XG5cbmV4cG9ydHMuY2FsY0dlbmVyYXRvclZlbG9jaXR5ID0gY2FsY0dlbmVyYXRvclZlbG9jaXR5O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@motionone+generators@10.16.4/node_modules/@motionone/generators/dist/utils/velocity.cjs.js\n");

/***/ })

};
;