/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ethereum-blockies-base64@1.0.2";
exports.ids = ["vendor-chunks/ethereum-blockies-base64@1.0.2"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/ethereum-blockies-base64@1.0.2/node_modules/ethereum-blockies-base64/dist/main.js":
/*!******************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/ethereum-blockies-base64@1.0.2/node_modules/ethereum-blockies-base64/dist/main.js ***!
  \******************************************************************************************************************/
/***/ (function(module) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})(this, function() {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n\n/******/ \t// The require function\n/******/ \tfunction __nested_webpack_require_563__(moduleId) {\n\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId])\n/******/ \t\t\treturn installedModules[moduleId].exports;\n\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\texports: {},\n/******/ \t\t\tid: moduleId,\n/******/ \t\t\tloaded: false\n/******/ \t\t};\n\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_563__);\n\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.loaded = true;\n\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n\n\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__nested_webpack_require_563__.m = modules;\n\n/******/ \t// expose the module cache\n/******/ \t__nested_webpack_require_563__.c = installedModules;\n\n/******/ \t// __webpack_public_path__\n/******/ \t__nested_webpack_require_563__.p = \"\";\n\n/******/ \t// Load entry module and return exports\n/******/ \treturn __nested_webpack_require_563__(0);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ function(module, exports, __nested_webpack_require_1763__) {\n\n\tconst pnglib = __nested_webpack_require_1763__(1);\n\tconst hsl2rgb = __nested_webpack_require_1763__(2);\n\n\t// The random number is a js implementation of the Xorshift PRNG\n\tconst randseed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values\n\n\tfunction seedrand(seed) {\n\t  for (let i = 0; i < randseed.length; i++) {\n\t    randseed[i] = 0;\n\t  }\n\t  for (let i = 0; i < seed.length; i++) {\n\t    randseed[i % 4] = (randseed[i % 4] << 5) - randseed[i % 4] + seed.charCodeAt(i);\n\t  }\n\t}\n\n\tfunction rand() {\n\t  // based on Java's String.hashCode(), expanded to 4 32bit values\n\t  const t = randseed[0] ^ (randseed[0] << 11);\n\n\t  randseed[0] = randseed[1];\n\t  randseed[1] = randseed[2];\n\t  randseed[2] = randseed[3];\n\t  randseed[3] = randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8);\n\n\t  return (randseed[3] >>> 0) / (1 << 31 >>> 0);\n\t}\n\n\tfunction createColor() {\n\t  //saturation is the whole color spectrum\n\t  const h = Math.floor(rand() * 360);\n\t  //saturation goes from 40 to 100, it avoids greyish colors\n\t  const s = rand() * 60 + 40;\n\t  //lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%\n\t  const l = (rand() + rand() + rand() + rand()) * 25 ;\n\n\t  return [h / 360, s / 100, l / 100];\n\t}\n\n\tfunction createImageData(size) {\n\t  const width = size; // Only support square icons for now\n\t  const height = size;\n\n\t  const dataWidth = Math.ceil(width / 2);\n\t  const mirrorWidth = width - dataWidth;\n\n\t  const data = [];\n\t  for (let y = 0; y < height; y++) {\n\t    let row = [];\n\t    for (let x = 0; x < dataWidth; x++) {\n\t      // this makes foreground and background color to have a 43% (1/2.3) probability\n\t      // spot color has 13% chance\n\t      row[x] = Math.floor(rand() * 2.3);\n\t    }\n\t    const r = row.slice(0, mirrorWidth).reverse();\n\t    row = row.concat(r);\n\n\t    for (let i = 0; i < row.length; i++) {\n\t      data.push(row[i]);\n\t    }\n\t  }\n\n\t  return data;\n\t}\n\n\t// Modifies the passed PNG to fill in a specified rectangle\n\tfunction fillRect(png, x, y, w, h, color) {\n\t  for(let i = 0; i < w; i++) {\n\t    for (let j = 0; j < h; j++) {\n\t      png.buffer[png.index(x + i, y + j)] = color;\n\t    }\n\t  }\n\t}\n\n\tfunction buildOpts(opts) {\n\t  if (!opts.seed) {\n\t    throw new Error('No seed provided');\n\t  }\n\n\t  seedrand(opts.seed);\n\n\t  return Object.assign({\n\t    size: 8,\n\t    scale: 16,\n\t    color: createColor(),\n\t    bgcolor: createColor(),\n\t    spotcolor: createColor(),\n\t  }, opts)\n\t}\n\n\tfunction makeBlockie(address) {\n\t  const opts = buildOpts({ seed: address.toLowerCase() });\n\n\t  const imageData = createImageData(opts.size);\n\t  const width = Math.sqrt(imageData.length);\n\n\t  const p = new pnglib(opts.size * opts.scale, opts.size * opts.scale, 3);\n\t  const bgcolor = p.color(...hsl2rgb(...opts.bgcolor));\n\t  const color = p.color(...hsl2rgb(...opts.color));\n\t  const spotcolor = p.color(...hsl2rgb(...opts.spotcolor));\n\n\t  for (let i = 0; i < imageData.length; i++) {\n\t    const row = Math.floor(i / width);\n\t    const col = i % width;\n\t    // if data is 0, leave the background\n\t    if (imageData[i]) {\n\t      // if data is 2, choose spot color, if 1 choose foreground\n\t      const pngColor = imageData[i] == 1 ? color : spotcolor;\n\t      fillRect(p, col * opts.scale, row * opts.scale, opts.scale, opts.scale, pngColor);\n\t    }\n\t  }\n\t  return `data:image/png;base64,${p.getBase64()}`;\n\t}\n\n\tmodule.exports = makeBlockie;\n\n\n/***/ },\n/* 1 */\n/***/ function(module, exports) {\n\n\t/**\n\t * A handy class to calculate color values.\n\t *\n\t * @version 1.0\n\t * @author Robert Eisele <robert@xarg.org>\n\t * @copyright Copyright (c) 2010, Robert Eisele\n\t * @link http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/\n\t * @license http://www.opensource.org/licenses/bsd-license.php BSD License\n\t *\n\t */\n\n\t// Modified by George Chan <gchan@21cn.com>\n\n\t// Further modified by Will O'B <@wbobeirne> to make it\n\t// UglifyJS and \"use strict\"; friendly\n\n\tmodule.exports = function(width,height,depth) {\n\n\n\t    // helper functions for that ctx\n\t    function write(buffer, offs) {\n\t        for (var i = 2; i < arguments.length; i++) {\n\t            for (var j = 0; j < arguments[i].length; j++) {\n\t                buffer[offs++] = arguments[i].charAt(j);\n\t            }\n\t        }\n\t    }\n\n\t    function byte2(w) {\n\t        return String.fromCharCode((w >> 8) & 255, w & 255);\n\t    }\n\n\t    function byte4(w) {\n\t        return String.fromCharCode((w >> 24) & 255, (w >> 16) & 255, (w >> 8) & 255, w & 255);\n\t    }\n\n\t    function byte2lsb(w) {\n\t        return String.fromCharCode(w & 255, (w >> 8) & 255);\n\t    }\n\n\t    this.width   = width;\n\t    this.height  = height;\n\t    this.depth   = depth;\n\n\t    // pixel data and row filter identifier size\n\t    this.pix_size = height * (width + 1);\n\n\t    // deflate header, pix_size, block headers, adler32 checksum\n\t    this.data_size = 2 + this.pix_size + 5 * Math.floor((0xfffe + this.pix_size) / 0xffff) + 4;\n\n\t    // offsets and sizes of Png chunks\n\t    this.ihdr_offs = 0; // IHDR offset and size\n\t    this.ihdr_size = 4 + 4 + 13 + 4;\n\t    this.plte_offs = this.ihdr_offs + this.ihdr_size; // PLTE offset and size\n\t    this.plte_size = 4 + 4 + 3 * depth + 4;\n\t    this.trns_offs = this.plte_offs + this.plte_size; // tRNS offset and size\n\t    this.trns_size = 4 + 4 + depth + 4;\n\t    this.idat_offs = this.trns_offs + this.trns_size; // IDAT offset and size\n\t    this.idat_size = 4 + 4 + this.data_size + 4;\n\t    this.iend_offs = this.idat_offs + this.idat_size; // IEND offset and size\n\t    this.iend_size = 4 + 4 + 4;\n\t    this.buffer_size  = this.iend_offs + this.iend_size; // total PNG size\n\n\t    this.buffer  = new Array();\n\t    this.palette = new Object();\n\t    this.pindex  = 0;\n\n\t    var _crc32 = new Array();\n\n\t    // initialize buffer with zero bytes\n\t    for (var i = 0; i < this.buffer_size; i++) {\n\t        this.buffer[i] = \"\\x00\";\n\t    }\n\n\t    // initialize non-zero elements\n\t    write(this.buffer, this.ihdr_offs, byte4(this.ihdr_size - 12), 'IHDR', byte4(width), byte4(height), \"\\x08\\x03\");\n\t    write(this.buffer, this.plte_offs, byte4(this.plte_size - 12), 'PLTE');\n\t    write(this.buffer, this.trns_offs, byte4(this.trns_size - 12), 'tRNS');\n\t    write(this.buffer, this.idat_offs, byte4(this.idat_size - 12), 'IDAT');\n\t    write(this.buffer, this.iend_offs, byte4(this.iend_size - 12), 'IEND');\n\n\t    // initialize deflate header\n\t    var header = ((8 + (7 << 4)) << 8) | (3 << 6);\n\t    header+= 31 - (header % 31);\n\n\t    write(this.buffer, this.idat_offs + 8, byte2(header));\n\n\t    // initialize deflate block headers\n\t    for (var i = 0; (i << 16) - 1 < this.pix_size; i++) {\n\t        var size, bits;\n\t        if (i + 0xffff < this.pix_size) {\n\t            size = 0xffff;\n\t            bits = \"\\x00\";\n\t        } else {\n\t            size = this.pix_size - (i << 16) - i;\n\t            bits = \"\\x01\";\n\t        }\n\t        write(this.buffer, this.idat_offs + 8 + 2 + (i << 16) + (i << 2), bits, byte2lsb(size), byte2lsb(~size));\n\t    }\n\n\t    /* Create crc32 lookup table */\n\t    for (var i = 0; i < 256; i++) {\n\t        var c = i;\n\t        for (var j = 0; j < 8; j++) {\n\t            if (c & 1) {\n\t                c = -306674912 ^ ((c >> 1) & 0x7fffffff);\n\t            } else {\n\t                c = (c >> 1) & 0x7fffffff;\n\t            }\n\t        }\n\t        _crc32[i] = c;\n\t    }\n\n\t    // compute the index into a png for a given pixel\n\t    this.index = function(x,y) {\n\t        var i = y * (this.width + 1) + x + 1;\n\t        var j = this.idat_offs + 8 + 2 + 5 * Math.floor((i / 0xffff) + 1) + i;\n\t        return j;\n\t    }\n\n\t    // convert a color and build up the palette\n\t    this.color = function(red, green, blue, alpha) {\n\n\t        alpha = alpha >= 0 ? alpha : 255;\n\t        var color = (((((alpha << 8) | red) << 8) | green) << 8) | blue;\n\n\t        if (typeof this.palette[color] == \"undefined\") {\n\t            if (this.pindex == this.depth) return \"\\x00\";\n\n\t            var ndx = this.plte_offs + 8 + 3 * this.pindex;\n\n\t            this.buffer[ndx + 0] = String.fromCharCode(red);\n\t            this.buffer[ndx + 1] = String.fromCharCode(green);\n\t            this.buffer[ndx + 2] = String.fromCharCode(blue);\n\t            this.buffer[this.trns_offs+8+this.pindex] = String.fromCharCode(alpha);\n\n\t            this.palette[color] = String.fromCharCode(this.pindex++);\n\t        }\n\t        return this.palette[color];\n\t    }\n\n\t    // output a PNG string, Base64 encoded\n\t    this.getBase64 = function() {\n\n\t        var s = this.getDump();\n\n\t        var ch = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\";\n\t        var c1, c2, c3, e1, e2, e3, e4;\n\t        var l = s.length;\n\t        var i = 0;\n\t        var r = \"\";\n\n\t        do {\n\t            c1 = s.charCodeAt(i);\n\t            e1 = c1 >> 2;\n\t            c2 = s.charCodeAt(i+1);\n\t            e2 = ((c1 & 3) << 4) | (c2 >> 4);\n\t            c3 = s.charCodeAt(i+2);\n\t            if (l < i+2) { e3 = 64; } else { e3 = ((c2 & 0xf) << 2) | (c3 >> 6); }\n\t            if (l < i+3) { e4 = 64; } else { e4 = c3 & 0x3f; }\n\t            r+= ch.charAt(e1) + ch.charAt(e2) + ch.charAt(e3) + ch.charAt(e4);\n\t        } while ((i+= 3) < l);\n\t        return r;\n\t    }\n\n\t    // output a PNG string\n\t    this.getDump = function() {\n\t        // compute adler32 of output pixels + row filter bytes\n\t        var BASE = 65521; /* largest prime smaller than 65536 */\n\t        var NMAX = 5552; /* NMAX is the largest n such that 255n(n+1)/2 + (n+1)(BASE-1) <= 2^32-1 */\n\t        var s1 = 1;\n\t        var s2 = 0;\n\t        var n = NMAX;\n\n\t        for (var y = 0; y < this.height; y++) {\n\t            for (var x = -1; x < this.width; x++) {\n\t                s1+= this.buffer[this.index(x, y)].charCodeAt(0);\n\t                s2+= s1;\n\t                if ((n-= 1) == 0) {\n\t                    s1%= BASE;\n\t                    s2%= BASE;\n\t                    n = NMAX;\n\t                }\n\t            }\n\t        }\n\t        s1%= BASE;\n\t        s2%= BASE;\n\t        write(this.buffer, this.idat_offs + this.idat_size - 8, byte4((s2 << 16) | s1));\n\n\t        // compute crc32 of the PNG chunks\n\t        function crc32(png, offs, size) {\n\t            var crc = -1;\n\t            for (var i = 4; i < size-4; i += 1) {\n\t                crc = _crc32[(crc ^ png[offs+i].charCodeAt(0)) & 0xff] ^ ((crc >> 8) & 0x00ffffff);\n\t            }\n\t            write(png, offs+size-4, byte4(crc ^ -1));\n\t        }\n\n\t        crc32(this.buffer, this.ihdr_offs, this.ihdr_size);\n\t        crc32(this.buffer, this.plte_offs, this.plte_size);\n\t        crc32(this.buffer, this.trns_offs, this.trns_size);\n\t        crc32(this.buffer, this.idat_offs, this.idat_size);\n\t        crc32(this.buffer, this.iend_offs, this.iend_size);\n\n\t        // convert PNG to string\n\t        return \"\\x89PNG\\r\\n\\x1a\\n\" + this.buffer.join('');\n\t    }\n\t};\n\n\n/***/ },\n/* 2 */\n/***/ function(module, exports) {\n\n\t// https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion\n\t/**\n\t * Converts an HSL color value to RGB. Conversion formula\n\t * adapted from http://en.wikipedia.org/wiki/HSL_color_space.\n\t * Assumes h, s, and l are contained in the set [0, 1] and\n\t * returns r, g, and b in the set [0, 255].\n\t *\n\t * @param   {number}  h       The hue\n\t * @param   {number}  s       The saturation\n\t * @param   {number}  l       The lightness\n\t * @return  {Array}           The RGB representation\n\t */\n\n\t function hue2rgb(p, q, t) {\n\t   if(t < 0) t += 1;\n\t   if(t > 1) t -= 1;\n\t   if(t < 1/6) return p + (q - p) * 6 * t;\n\t   if(t < 1/2) return q;\n\t   if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;\n\t   return p;\n\t }\n\n\tfunction hsl2rgb(h, s, l){\n\t  let r, g, b;\n\n\t  if (s == 0) {\n\t    r = g = b = l; // achromatic\n\t  } else {\n\t    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;\n\t    const p = 2 * l - q;\n\t    r = hue2rgb(p, q, h + 1/3);\n\t    g = hue2rgb(p, q, h);\n\t    b = hue2rgb(p, q, h - 1/3);\n\t  }\n\n\t  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), 255];\n\t}\n\n\tmodule.exports = hsl2rgb;\n\n\n/***/ }\n/******/ ])\n});\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V0aGVyZXVtLWJsb2NraWVzLWJhc2U2NEAxLjAuMi9ub2RlX21vZHVsZXMvZXRoZXJldW0tYmxvY2tpZXMtYmFzZTY0L2Rpc3QvbWFpbi5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksSUFBeUQ7QUFDN0Q7QUFDQSxNQUFNLEVBS3lDO0FBQy9DLENBQUM7QUFDRCxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiw4QkFBbUI7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBFQUEwRSw4QkFBbUI7O0FBRTdGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFVBQVUsOEJBQW1COztBQUU3QjtBQUNBLFVBQVUsOEJBQW1COztBQUU3QjtBQUNBLFVBQVUsOEJBQW1COztBQUU3QjtBQUNBLGlCQUFpQiw4QkFBbUI7QUFDcEMsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywrQkFBbUI7O0FBRW5ELGdCQUFnQiwrQkFBbUI7QUFDbkMsaUJBQWlCLCtCQUFtQjs7QUFFcEM7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0EsNEJBQTRCLDZCQUE2Qjs7QUFFekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixTQUFTLGNBQWM7QUFDakQ7O0FBRUE7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsK0JBQStCOztBQUUvQjs7O0FBR0E7QUFDQTtBQUNBLHlCQUF5QixzQkFBc0I7QUFDL0MsNkJBQTZCLHlCQUF5QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0EsMERBQTBEOztBQUUxRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQiwrQkFBK0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0EseUJBQXlCLE9BQU87QUFDaEM7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFdBQVcsT0FBTztBQUM5Qyw0QkFBNEIsV0FBVyxPQUFPO0FBQzlDO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLGlCQUFpQjtBQUMxQyw4QkFBOEIsZ0JBQWdCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsWUFBWTtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixjQUFjLFNBQVM7QUFDdkIsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMsaUJBQWlCO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdG9rZW5zdHJlYW0vd2ViLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9ldGhlcmV1bS1ibG9ja2llcy1iYXNlNjRAMS4wLjIvbm9kZV9tb2R1bGVzL2V0aGVyZXVtLWJsb2NraWVzLWJhc2U2NC9kaXN0L21haW4uanM/ZjFlMiJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJldGhlcmV1bS1ibG9ja2llcy1iYXNlNjRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZXRoZXJldW0tYmxvY2tpZXMtYmFzZTY0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdGNvbnN0IHBuZ2xpYiA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdGNvbnN0IGhzbDJyZ2IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5cdC8vIFRoZSByYW5kb20gbnVtYmVyIGlzIGEganMgaW1wbGVtZW50YXRpb24gb2YgdGhlIFhvcnNoaWZ0IFBSTkdcblx0Y29uc3QgcmFuZHNlZWQgPSBuZXcgQXJyYXkoNCk7IC8vIFhvcnNoaWZ0OiBbeCwgeSwgeiwgd10gMzIgYml0IHZhbHVlc1xuXG5cdGZ1bmN0aW9uIHNlZWRyYW5kKHNlZWQpIHtcblx0ICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRzZWVkLmxlbmd0aDsgaSsrKSB7XG5cdCAgICByYW5kc2VlZFtpXSA9IDA7XG5cdCAgfVxuXHQgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VlZC5sZW5ndGg7IGkrKykge1xuXHQgICAgcmFuZHNlZWRbaSAlIDRdID0gKHJhbmRzZWVkW2kgJSA0XSA8PCA1KSAtIHJhbmRzZWVkW2kgJSA0XSArIHNlZWQuY2hhckNvZGVBdChpKTtcblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiByYW5kKCkge1xuXHQgIC8vIGJhc2VkIG9uIEphdmEncyBTdHJpbmcuaGFzaENvZGUoKSwgZXhwYW5kZWQgdG8gNCAzMmJpdCB2YWx1ZXNcblx0ICBjb25zdCB0ID0gcmFuZHNlZWRbMF0gXiAocmFuZHNlZWRbMF0gPDwgMTEpO1xuXG5cdCAgcmFuZHNlZWRbMF0gPSByYW5kc2VlZFsxXTtcblx0ICByYW5kc2VlZFsxXSA9IHJhbmRzZWVkWzJdO1xuXHQgIHJhbmRzZWVkWzJdID0gcmFuZHNlZWRbM107XG5cdCAgcmFuZHNlZWRbM10gPSByYW5kc2VlZFszXSBeIChyYW5kc2VlZFszXSA+PiAxOSkgXiB0IF4gKHQgPj4gOCk7XG5cblx0ICByZXR1cm4gKHJhbmRzZWVkWzNdID4+PiAwKSAvICgxIDw8IDMxID4+PiAwKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbG9yKCkge1xuXHQgIC8vc2F0dXJhdGlvbiBpcyB0aGUgd2hvbGUgY29sb3Igc3BlY3RydW1cblx0ICBjb25zdCBoID0gTWF0aC5mbG9vcihyYW5kKCkgKiAzNjApO1xuXHQgIC8vc2F0dXJhdGlvbiBnb2VzIGZyb20gNDAgdG8gMTAwLCBpdCBhdm9pZHMgZ3JleWlzaCBjb2xvcnNcblx0ICBjb25zdCBzID0gcmFuZCgpICogNjAgKyA0MDtcblx0ICAvL2xpZ2h0bmVzcyBjYW4gYmUgYW55dGhpbmcgZnJvbSAwIHRvIDEwMCwgYnV0IHByb2JhYmlsaXRpZXMgYXJlIGEgYmVsbCBjdXJ2ZSBhcm91bmQgNTAlXG5cdCAgY29uc3QgbCA9IChyYW5kKCkgKyByYW5kKCkgKyByYW5kKCkgKyByYW5kKCkpICogMjUgO1xuXG5cdCAgcmV0dXJuIFtoIC8gMzYwLCBzIC8gMTAwLCBsIC8gMTAwXTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUltYWdlRGF0YShzaXplKSB7XG5cdCAgY29uc3Qgd2lkdGggPSBzaXplOyAvLyBPbmx5IHN1cHBvcnQgc3F1YXJlIGljb25zIGZvciBub3dcblx0ICBjb25zdCBoZWlnaHQgPSBzaXplO1xuXG5cdCAgY29uc3QgZGF0YVdpZHRoID0gTWF0aC5jZWlsKHdpZHRoIC8gMik7XG5cdCAgY29uc3QgbWlycm9yV2lkdGggPSB3aWR0aCAtIGRhdGFXaWR0aDtcblxuXHQgIGNvbnN0IGRhdGEgPSBbXTtcblx0ICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG5cdCAgICBsZXQgcm93ID0gW107XG5cdCAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGRhdGFXaWR0aDsgeCsrKSB7XG5cdCAgICAgIC8vIHRoaXMgbWFrZXMgZm9yZWdyb3VuZCBhbmQgYmFja2dyb3VuZCBjb2xvciB0byBoYXZlIGEgNDMlICgxLzIuMykgcHJvYmFiaWxpdHlcblx0ICAgICAgLy8gc3BvdCBjb2xvciBoYXMgMTMlIGNoYW5jZVxuXHQgICAgICByb3dbeF0gPSBNYXRoLmZsb29yKHJhbmQoKSAqIDIuMyk7XG5cdCAgICB9XG5cdCAgICBjb25zdCByID0gcm93LnNsaWNlKDAsIG1pcnJvcldpZHRoKS5yZXZlcnNlKCk7XG5cdCAgICByb3cgPSByb3cuY29uY2F0KHIpO1xuXG5cdCAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xuXHQgICAgICBkYXRhLnB1c2gocm93W2ldKTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4gZGF0YTtcblx0fVxuXG5cdC8vIE1vZGlmaWVzIHRoZSBwYXNzZWQgUE5HIHRvIGZpbGwgaW4gYSBzcGVjaWZpZWQgcmVjdGFuZ2xlXG5cdGZ1bmN0aW9uIGZpbGxSZWN0KHBuZywgeCwgeSwgdywgaCwgY29sb3IpIHtcblx0ICBmb3IobGV0IGkgPSAwOyBpIDwgdzsgaSsrKSB7XG5cdCAgICBmb3IgKGxldCBqID0gMDsgaiA8IGg7IGorKykge1xuXHQgICAgICBwbmcuYnVmZmVyW3BuZy5pbmRleCh4ICsgaSwgeSArIGopXSA9IGNvbG9yO1xuXHQgICAgfVxuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIGJ1aWxkT3B0cyhvcHRzKSB7XG5cdCAgaWYgKCFvcHRzLnNlZWQpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcignTm8gc2VlZCBwcm92aWRlZCcpO1xuXHQgIH1cblxuXHQgIHNlZWRyYW5kKG9wdHMuc2VlZCk7XG5cblx0ICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG5cdCAgICBzaXplOiA4LFxuXHQgICAgc2NhbGU6IDE2LFxuXHQgICAgY29sb3I6IGNyZWF0ZUNvbG9yKCksXG5cdCAgICBiZ2NvbG9yOiBjcmVhdGVDb2xvcigpLFxuXHQgICAgc3BvdGNvbG9yOiBjcmVhdGVDb2xvcigpLFxuXHQgIH0sIG9wdHMpXG5cdH1cblxuXHRmdW5jdGlvbiBtYWtlQmxvY2tpZShhZGRyZXNzKSB7XG5cdCAgY29uc3Qgb3B0cyA9IGJ1aWxkT3B0cyh7IHNlZWQ6IGFkZHJlc3MudG9Mb3dlckNhc2UoKSB9KTtcblxuXHQgIGNvbnN0IGltYWdlRGF0YSA9IGNyZWF0ZUltYWdlRGF0YShvcHRzLnNpemUpO1xuXHQgIGNvbnN0IHdpZHRoID0gTWF0aC5zcXJ0KGltYWdlRGF0YS5sZW5ndGgpO1xuXG5cdCAgY29uc3QgcCA9IG5ldyBwbmdsaWIob3B0cy5zaXplICogb3B0cy5zY2FsZSwgb3B0cy5zaXplICogb3B0cy5zY2FsZSwgMyk7XG5cdCAgY29uc3QgYmdjb2xvciA9IHAuY29sb3IoLi4uaHNsMnJnYiguLi5vcHRzLmJnY29sb3IpKTtcblx0ICBjb25zdCBjb2xvciA9IHAuY29sb3IoLi4uaHNsMnJnYiguLi5vcHRzLmNvbG9yKSk7XG5cdCAgY29uc3Qgc3BvdGNvbG9yID0gcC5jb2xvciguLi5oc2wycmdiKC4uLm9wdHMuc3BvdGNvbG9yKSk7XG5cblx0ICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlRGF0YS5sZW5ndGg7IGkrKykge1xuXHQgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpIC8gd2lkdGgpO1xuXHQgICAgY29uc3QgY29sID0gaSAlIHdpZHRoO1xuXHQgICAgLy8gaWYgZGF0YSBpcyAwLCBsZWF2ZSB0aGUgYmFja2dyb3VuZFxuXHQgICAgaWYgKGltYWdlRGF0YVtpXSkge1xuXHQgICAgICAvLyBpZiBkYXRhIGlzIDIsIGNob29zZSBzcG90IGNvbG9yLCBpZiAxIGNob29zZSBmb3JlZ3JvdW5kXG5cdCAgICAgIGNvbnN0IHBuZ0NvbG9yID0gaW1hZ2VEYXRhW2ldID09IDEgPyBjb2xvciA6IHNwb3Rjb2xvcjtcblx0ICAgICAgZmlsbFJlY3QocCwgY29sICogb3B0cy5zY2FsZSwgcm93ICogb3B0cy5zY2FsZSwgb3B0cy5zY2FsZSwgb3B0cy5zY2FsZSwgcG5nQ29sb3IpO1xuXHQgICAgfVxuXHQgIH1cblx0ICByZXR1cm4gYGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwke3AuZ2V0QmFzZTY0KCl9YDtcblx0fVxuXG5cdG1vZHVsZS5leHBvcnRzID0gbWFrZUJsb2NraWU7XG5cblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBBIGhhbmR5IGNsYXNzIHRvIGNhbGN1bGF0ZSBjb2xvciB2YWx1ZXMuXG5cdCAqXG5cdCAqIEB2ZXJzaW9uIDEuMFxuXHQgKiBAYXV0aG9yIFJvYmVydCBFaXNlbGUgPHJvYmVydEB4YXJnLm9yZz5cblx0ICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTAsIFJvYmVydCBFaXNlbGVcblx0ICogQGxpbmsgaHR0cDovL3d3dy54YXJnLm9yZy8yMDEwLzAzL2dlbmVyYXRlLWNsaWVudC1zaWRlLXBuZy1maWxlcy11c2luZy1qYXZhc2NyaXB0L1xuXHQgKiBAbGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL2JzZC1saWNlbnNlLnBocCBCU0QgTGljZW5zZVxuXHQgKlxuXHQgKi9cblxuXHQvLyBNb2RpZmllZCBieSBHZW9yZ2UgQ2hhbiA8Z2NoYW5AMjFjbi5jb20+XG5cblx0Ly8gRnVydGhlciBtb2RpZmllZCBieSBXaWxsIE8nQiA8QHdib2JlaXJuZT4gdG8gbWFrZSBpdFxuXHQvLyBVZ2xpZnlKUyBhbmQgXCJ1c2Ugc3RyaWN0XCI7IGZyaWVuZGx5XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih3aWR0aCxoZWlnaHQsZGVwdGgpIHtcblxuXG5cdCAgICAvLyBoZWxwZXIgZnVuY3Rpb25zIGZvciB0aGF0IGN0eFxuXHQgICAgZnVuY3Rpb24gd3JpdGUoYnVmZmVyLCBvZmZzKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhcmd1bWVudHNbaV0ubGVuZ3RoOyBqKyspIHtcblx0ICAgICAgICAgICAgICAgIGJ1ZmZlcltvZmZzKytdID0gYXJndW1lbnRzW2ldLmNoYXJBdChqKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gYnl0ZTIodykge1xuXHQgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKCh3ID4+IDgpICYgMjU1LCB3ICYgMjU1KTtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gYnl0ZTQodykge1xuXHQgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKCh3ID4+IDI0KSAmIDI1NSwgKHcgPj4gMTYpICYgMjU1LCAodyA+PiA4KSAmIDI1NSwgdyAmIDI1NSk7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGJ5dGUybHNiKHcpIHtcblx0ICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSh3ICYgMjU1LCAodyA+PiA4KSAmIDI1NSk7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMud2lkdGggICA9IHdpZHRoO1xuXHQgICAgdGhpcy5oZWlnaHQgID0gaGVpZ2h0O1xuXHQgICAgdGhpcy5kZXB0aCAgID0gZGVwdGg7XG5cblx0ICAgIC8vIHBpeGVsIGRhdGEgYW5kIHJvdyBmaWx0ZXIgaWRlbnRpZmllciBzaXplXG5cdCAgICB0aGlzLnBpeF9zaXplID0gaGVpZ2h0ICogKHdpZHRoICsgMSk7XG5cblx0ICAgIC8vIGRlZmxhdGUgaGVhZGVyLCBwaXhfc2l6ZSwgYmxvY2sgaGVhZGVycywgYWRsZXIzMiBjaGVja3N1bVxuXHQgICAgdGhpcy5kYXRhX3NpemUgPSAyICsgdGhpcy5waXhfc2l6ZSArIDUgKiBNYXRoLmZsb29yKCgweGZmZmUgKyB0aGlzLnBpeF9zaXplKSAvIDB4ZmZmZikgKyA0O1xuXG5cdCAgICAvLyBvZmZzZXRzIGFuZCBzaXplcyBvZiBQbmcgY2h1bmtzXG5cdCAgICB0aGlzLmloZHJfb2ZmcyA9IDA7IC8vIElIRFIgb2Zmc2V0IGFuZCBzaXplXG5cdCAgICB0aGlzLmloZHJfc2l6ZSA9IDQgKyA0ICsgMTMgKyA0O1xuXHQgICAgdGhpcy5wbHRlX29mZnMgPSB0aGlzLmloZHJfb2ZmcyArIHRoaXMuaWhkcl9zaXplOyAvLyBQTFRFIG9mZnNldCBhbmQgc2l6ZVxuXHQgICAgdGhpcy5wbHRlX3NpemUgPSA0ICsgNCArIDMgKiBkZXB0aCArIDQ7XG5cdCAgICB0aGlzLnRybnNfb2ZmcyA9IHRoaXMucGx0ZV9vZmZzICsgdGhpcy5wbHRlX3NpemU7IC8vIHRSTlMgb2Zmc2V0IGFuZCBzaXplXG5cdCAgICB0aGlzLnRybnNfc2l6ZSA9IDQgKyA0ICsgZGVwdGggKyA0O1xuXHQgICAgdGhpcy5pZGF0X29mZnMgPSB0aGlzLnRybnNfb2ZmcyArIHRoaXMudHJuc19zaXplOyAvLyBJREFUIG9mZnNldCBhbmQgc2l6ZVxuXHQgICAgdGhpcy5pZGF0X3NpemUgPSA0ICsgNCArIHRoaXMuZGF0YV9zaXplICsgNDtcblx0ICAgIHRoaXMuaWVuZF9vZmZzID0gdGhpcy5pZGF0X29mZnMgKyB0aGlzLmlkYXRfc2l6ZTsgLy8gSUVORCBvZmZzZXQgYW5kIHNpemVcblx0ICAgIHRoaXMuaWVuZF9zaXplID0gNCArIDQgKyA0O1xuXHQgICAgdGhpcy5idWZmZXJfc2l6ZSAgPSB0aGlzLmllbmRfb2ZmcyArIHRoaXMuaWVuZF9zaXplOyAvLyB0b3RhbCBQTkcgc2l6ZVxuXG5cdCAgICB0aGlzLmJ1ZmZlciAgPSBuZXcgQXJyYXkoKTtcblx0ICAgIHRoaXMucGFsZXR0ZSA9IG5ldyBPYmplY3QoKTtcblx0ICAgIHRoaXMucGluZGV4ICA9IDA7XG5cblx0ICAgIHZhciBfY3JjMzIgPSBuZXcgQXJyYXkoKTtcblxuXHQgICAgLy8gaW5pdGlhbGl6ZSBidWZmZXIgd2l0aCB6ZXJvIGJ5dGVzXG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYnVmZmVyX3NpemU7IGkrKykge1xuXHQgICAgICAgIHRoaXMuYnVmZmVyW2ldID0gXCJcXHgwMFwiO1xuXHQgICAgfVxuXG5cdCAgICAvLyBpbml0aWFsaXplIG5vbi16ZXJvIGVsZW1lbnRzXG5cdCAgICB3cml0ZSh0aGlzLmJ1ZmZlciwgdGhpcy5paGRyX29mZnMsIGJ5dGU0KHRoaXMuaWhkcl9zaXplIC0gMTIpLCAnSUhEUicsIGJ5dGU0KHdpZHRoKSwgYnl0ZTQoaGVpZ2h0KSwgXCJcXHgwOFxceDAzXCIpO1xuXHQgICAgd3JpdGUodGhpcy5idWZmZXIsIHRoaXMucGx0ZV9vZmZzLCBieXRlNCh0aGlzLnBsdGVfc2l6ZSAtIDEyKSwgJ1BMVEUnKTtcblx0ICAgIHdyaXRlKHRoaXMuYnVmZmVyLCB0aGlzLnRybnNfb2ZmcywgYnl0ZTQodGhpcy50cm5zX3NpemUgLSAxMiksICd0Uk5TJyk7XG5cdCAgICB3cml0ZSh0aGlzLmJ1ZmZlciwgdGhpcy5pZGF0X29mZnMsIGJ5dGU0KHRoaXMuaWRhdF9zaXplIC0gMTIpLCAnSURBVCcpO1xuXHQgICAgd3JpdGUodGhpcy5idWZmZXIsIHRoaXMuaWVuZF9vZmZzLCBieXRlNCh0aGlzLmllbmRfc2l6ZSAtIDEyKSwgJ0lFTkQnKTtcblxuXHQgICAgLy8gaW5pdGlhbGl6ZSBkZWZsYXRlIGhlYWRlclxuXHQgICAgdmFyIGhlYWRlciA9ICgoOCArICg3IDw8IDQpKSA8PCA4KSB8ICgzIDw8IDYpO1xuXHQgICAgaGVhZGVyKz0gMzEgLSAoaGVhZGVyICUgMzEpO1xuXG5cdCAgICB3cml0ZSh0aGlzLmJ1ZmZlciwgdGhpcy5pZGF0X29mZnMgKyA4LCBieXRlMihoZWFkZXIpKTtcblxuXHQgICAgLy8gaW5pdGlhbGl6ZSBkZWZsYXRlIGJsb2NrIGhlYWRlcnNcblx0ICAgIGZvciAodmFyIGkgPSAwOyAoaSA8PCAxNikgLSAxIDwgdGhpcy5waXhfc2l6ZTsgaSsrKSB7XG5cdCAgICAgICAgdmFyIHNpemUsIGJpdHM7XG5cdCAgICAgICAgaWYgKGkgKyAweGZmZmYgPCB0aGlzLnBpeF9zaXplKSB7XG5cdCAgICAgICAgICAgIHNpemUgPSAweGZmZmY7XG5cdCAgICAgICAgICAgIGJpdHMgPSBcIlxceDAwXCI7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgc2l6ZSA9IHRoaXMucGl4X3NpemUgLSAoaSA8PCAxNikgLSBpO1xuXHQgICAgICAgICAgICBiaXRzID0gXCJcXHgwMVwiO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3cml0ZSh0aGlzLmJ1ZmZlciwgdGhpcy5pZGF0X29mZnMgKyA4ICsgMiArIChpIDw8IDE2KSArIChpIDw8IDIpLCBiaXRzLCBieXRlMmxzYihzaXplKSwgYnl0ZTJsc2IofnNpemUpKTtcblx0ICAgIH1cblxuXHQgICAgLyogQ3JlYXRlIGNyYzMyIGxvb2t1cCB0YWJsZSAqL1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuXHQgICAgICAgIHZhciBjID0gaTtcblx0ICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDg7IGorKykge1xuXHQgICAgICAgICAgICBpZiAoYyAmIDEpIHtcblx0ICAgICAgICAgICAgICAgIGMgPSAtMzA2Njc0OTEyIF4gKChjID4+IDEpICYgMHg3ZmZmZmZmZik7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBjID0gKGMgPj4gMSkgJiAweDdmZmZmZmZmO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIF9jcmMzMltpXSA9IGM7XG5cdCAgICB9XG5cblx0ICAgIC8vIGNvbXB1dGUgdGhlIGluZGV4IGludG8gYSBwbmcgZm9yIGEgZ2l2ZW4gcGl4ZWxcblx0ICAgIHRoaXMuaW5kZXggPSBmdW5jdGlvbih4LHkpIHtcblx0ICAgICAgICB2YXIgaSA9IHkgKiAodGhpcy53aWR0aCArIDEpICsgeCArIDE7XG5cdCAgICAgICAgdmFyIGogPSB0aGlzLmlkYXRfb2ZmcyArIDggKyAyICsgNSAqIE1hdGguZmxvb3IoKGkgLyAweGZmZmYpICsgMSkgKyBpO1xuXHQgICAgICAgIHJldHVybiBqO1xuXHQgICAgfVxuXG5cdCAgICAvLyBjb252ZXJ0IGEgY29sb3IgYW5kIGJ1aWxkIHVwIHRoZSBwYWxldHRlXG5cdCAgICB0aGlzLmNvbG9yID0gZnVuY3Rpb24ocmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEpIHtcblxuXHQgICAgICAgIGFscGhhID0gYWxwaGEgPj0gMCA/IGFscGhhIDogMjU1O1xuXHQgICAgICAgIHZhciBjb2xvciA9ICgoKCgoYWxwaGEgPDwgOCkgfCByZWQpIDw8IDgpIHwgZ3JlZW4pIDw8IDgpIHwgYmx1ZTtcblxuXHQgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wYWxldHRlW2NvbG9yXSA9PSBcInVuZGVmaW5lZFwiKSB7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLnBpbmRleCA9PSB0aGlzLmRlcHRoKSByZXR1cm4gXCJcXHgwMFwiO1xuXG5cdCAgICAgICAgICAgIHZhciBuZHggPSB0aGlzLnBsdGVfb2ZmcyArIDggKyAzICogdGhpcy5waW5kZXg7XG5cblx0ICAgICAgICAgICAgdGhpcy5idWZmZXJbbmR4ICsgMF0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJlZCk7XG5cdCAgICAgICAgICAgIHRoaXMuYnVmZmVyW25keCArIDFdID0gU3RyaW5nLmZyb21DaGFyQ29kZShncmVlbik7XG5cdCAgICAgICAgICAgIHRoaXMuYnVmZmVyW25keCArIDJdID0gU3RyaW5nLmZyb21DaGFyQ29kZShibHVlKTtcblx0ICAgICAgICAgICAgdGhpcy5idWZmZXJbdGhpcy50cm5zX29mZnMrOCt0aGlzLnBpbmRleF0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFscGhhKTtcblxuXHQgICAgICAgICAgICB0aGlzLnBhbGV0dGVbY29sb3JdID0gU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLnBpbmRleCsrKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHRoaXMucGFsZXR0ZVtjb2xvcl07XG5cdCAgICB9XG5cblx0ICAgIC8vIG91dHB1dCBhIFBORyBzdHJpbmcsIEJhc2U2NCBlbmNvZGVkXG5cdCAgICB0aGlzLmdldEJhc2U2NCA9IGZ1bmN0aW9uKCkge1xuXG5cdCAgICAgICAgdmFyIHMgPSB0aGlzLmdldER1bXAoKTtcblxuXHQgICAgICAgIHZhciBjaCA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtcblx0ICAgICAgICB2YXIgYzEsIGMyLCBjMywgZTEsIGUyLCBlMywgZTQ7XG5cdCAgICAgICAgdmFyIGwgPSBzLmxlbmd0aDtcblx0ICAgICAgICB2YXIgaSA9IDA7XG5cdCAgICAgICAgdmFyIHIgPSBcIlwiO1xuXG5cdCAgICAgICAgZG8ge1xuXHQgICAgICAgICAgICBjMSA9IHMuY2hhckNvZGVBdChpKTtcblx0ICAgICAgICAgICAgZTEgPSBjMSA+PiAyO1xuXHQgICAgICAgICAgICBjMiA9IHMuY2hhckNvZGVBdChpKzEpO1xuXHQgICAgICAgICAgICBlMiA9ICgoYzEgJiAzKSA8PCA0KSB8IChjMiA+PiA0KTtcblx0ICAgICAgICAgICAgYzMgPSBzLmNoYXJDb2RlQXQoaSsyKTtcblx0ICAgICAgICAgICAgaWYgKGwgPCBpKzIpIHsgZTMgPSA2NDsgfSBlbHNlIHsgZTMgPSAoKGMyICYgMHhmKSA8PCAyKSB8IChjMyA+PiA2KTsgfVxuXHQgICAgICAgICAgICBpZiAobCA8IGkrMykgeyBlNCA9IDY0OyB9IGVsc2UgeyBlNCA9IGMzICYgMHgzZjsgfVxuXHQgICAgICAgICAgICByKz0gY2guY2hhckF0KGUxKSArIGNoLmNoYXJBdChlMikgKyBjaC5jaGFyQXQoZTMpICsgY2guY2hhckF0KGU0KTtcblx0ICAgICAgICB9IHdoaWxlICgoaSs9IDMpIDwgbCk7XG5cdCAgICAgICAgcmV0dXJuIHI7XG5cdCAgICB9XG5cblx0ICAgIC8vIG91dHB1dCBhIFBORyBzdHJpbmdcblx0ICAgIHRoaXMuZ2V0RHVtcCA9IGZ1bmN0aW9uKCkge1xuXHQgICAgICAgIC8vIGNvbXB1dGUgYWRsZXIzMiBvZiBvdXRwdXQgcGl4ZWxzICsgcm93IGZpbHRlciBieXRlc1xuXHQgICAgICAgIHZhciBCQVNFID0gNjU1MjE7IC8qIGxhcmdlc3QgcHJpbWUgc21hbGxlciB0aGFuIDY1NTM2ICovXG5cdCAgICAgICAgdmFyIE5NQVggPSA1NTUyOyAvKiBOTUFYIGlzIHRoZSBsYXJnZXN0IG4gc3VjaCB0aGF0IDI1NW4obisxKS8yICsgKG4rMSkoQkFTRS0xKSA8PSAyXjMyLTEgKi9cblx0ICAgICAgICB2YXIgczEgPSAxO1xuXHQgICAgICAgIHZhciBzMiA9IDA7XG5cdCAgICAgICAgdmFyIG4gPSBOTUFYO1xuXG5cdCAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XG5cdCAgICAgICAgICAgIGZvciAodmFyIHggPSAtMTsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xuXHQgICAgICAgICAgICAgICAgczErPSB0aGlzLmJ1ZmZlclt0aGlzLmluZGV4KHgsIHkpXS5jaGFyQ29kZUF0KDApO1xuXHQgICAgICAgICAgICAgICAgczIrPSBzMTtcblx0ICAgICAgICAgICAgICAgIGlmICgobi09IDEpID09IDApIHtcblx0ICAgICAgICAgICAgICAgICAgICBzMSU9IEJBU0U7XG5cdCAgICAgICAgICAgICAgICAgICAgczIlPSBCQVNFO1xuXHQgICAgICAgICAgICAgICAgICAgIG4gPSBOTUFYO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHMxJT0gQkFTRTtcblx0ICAgICAgICBzMiU9IEJBU0U7XG5cdCAgICAgICAgd3JpdGUodGhpcy5idWZmZXIsIHRoaXMuaWRhdF9vZmZzICsgdGhpcy5pZGF0X3NpemUgLSA4LCBieXRlNCgoczIgPDwgMTYpIHwgczEpKTtcblxuXHQgICAgICAgIC8vIGNvbXB1dGUgY3JjMzIgb2YgdGhlIFBORyBjaHVua3Ncblx0ICAgICAgICBmdW5jdGlvbiBjcmMzMihwbmcsIG9mZnMsIHNpemUpIHtcblx0ICAgICAgICAgICAgdmFyIGNyYyA9IC0xO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gNDsgaSA8IHNpemUtNDsgaSArPSAxKSB7XG5cdCAgICAgICAgICAgICAgICBjcmMgPSBfY3JjMzJbKGNyYyBeIHBuZ1tvZmZzK2ldLmNoYXJDb2RlQXQoMCkpICYgMHhmZl0gXiAoKGNyYyA+PiA4KSAmIDB4MDBmZmZmZmYpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHdyaXRlKHBuZywgb2ZmcytzaXplLTQsIGJ5dGU0KGNyYyBeIC0xKSk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgY3JjMzIodGhpcy5idWZmZXIsIHRoaXMuaWhkcl9vZmZzLCB0aGlzLmloZHJfc2l6ZSk7XG5cdCAgICAgICAgY3JjMzIodGhpcy5idWZmZXIsIHRoaXMucGx0ZV9vZmZzLCB0aGlzLnBsdGVfc2l6ZSk7XG5cdCAgICAgICAgY3JjMzIodGhpcy5idWZmZXIsIHRoaXMudHJuc19vZmZzLCB0aGlzLnRybnNfc2l6ZSk7XG5cdCAgICAgICAgY3JjMzIodGhpcy5idWZmZXIsIHRoaXMuaWRhdF9vZmZzLCB0aGlzLmlkYXRfc2l6ZSk7XG5cdCAgICAgICAgY3JjMzIodGhpcy5idWZmZXIsIHRoaXMuaWVuZF9vZmZzLCB0aGlzLmllbmRfc2l6ZSk7XG5cblx0ICAgICAgICAvLyBjb252ZXJ0IFBORyB0byBzdHJpbmdcblx0ICAgICAgICByZXR1cm4gXCJcXHg4OVBOR1xcclxcblxceDFhXFxuXCIgKyB0aGlzLmJ1ZmZlci5qb2luKCcnKTtcblx0ICAgIH1cblx0fTtcblxuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjM1MzIxMS9oc2wtdG8tcmdiLWNvbG9yLWNvbnZlcnNpb25cblx0LyoqXG5cdCAqIENvbnZlcnRzIGFuIEhTTCBjb2xvciB2YWx1ZSB0byBSR0IuIENvbnZlcnNpb24gZm9ybXVsYVxuXHQgKiBhZGFwdGVkIGZyb20gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IU0xfY29sb3Jfc3BhY2UuXG5cdCAqIEFzc3VtZXMgaCwgcywgYW5kIGwgYXJlIGNvbnRhaW5lZCBpbiB0aGUgc2V0IFswLCAxXSBhbmRcblx0ICogcmV0dXJucyByLCBnLCBhbmQgYiBpbiB0aGUgc2V0IFswLCAyNTVdLlxuXHQgKlxuXHQgKiBAcGFyYW0gICB7bnVtYmVyfSAgaCAgICAgICBUaGUgaHVlXG5cdCAqIEBwYXJhbSAgIHtudW1iZXJ9ICBzICAgICAgIFRoZSBzYXR1cmF0aW9uXG5cdCAqIEBwYXJhbSAgIHtudW1iZXJ9ICBsICAgICAgIFRoZSBsaWdodG5lc3Ncblx0ICogQHJldHVybiAge0FycmF5fSAgICAgICAgICAgVGhlIFJHQiByZXByZXNlbnRhdGlvblxuXHQgKi9cblxuXHQgZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XG5cdCAgIGlmKHQgPCAwKSB0ICs9IDE7XG5cdCAgIGlmKHQgPiAxKSB0IC09IDE7XG5cdCAgIGlmKHQgPCAxLzYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xuXHQgICBpZih0IDwgMS8yKSByZXR1cm4gcTtcblx0ICAgaWYodCA8IDIvMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIvMyAtIHQpICogNjtcblx0ICAgcmV0dXJuIHA7XG5cdCB9XG5cblx0ZnVuY3Rpb24gaHNsMnJnYihoLCBzLCBsKXtcblx0ICBsZXQgciwgZywgYjtcblxuXHQgIGlmIChzID09IDApIHtcblx0ICAgIHIgPSBnID0gYiA9IGw7IC8vIGFjaHJvbWF0aWNcblx0ICB9IGVsc2Uge1xuXHQgICAgY29uc3QgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG5cdCAgICBjb25zdCBwID0gMiAqIGwgLSBxO1xuXHQgICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEvMyk7XG5cdCAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcblx0ICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxLzMpO1xuXHQgIH1cblxuXHQgIHJldHVybiBbTWF0aC5yb3VuZChyICogMjU1KSwgTWF0aC5yb3VuZChnICogMjU1KSwgTWF0aC5yb3VuZChiICogMjU1KSwgMjU1XTtcblx0fVxuXG5cdG1vZHVsZS5leHBvcnRzID0gaHNsMnJnYjtcblxuXG4vKioqLyB9XG4vKioqKioqLyBdKVxufSk7XG47Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/ethereum-blockies-base64@1.0.2/node_modules/ethereum-blockies-base64/dist/main.js\n");

/***/ })

};
;