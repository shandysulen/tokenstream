"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@walletconnect+jsonrpc-ws-connection@1.0.14_bufferutil@4.0.7";
exports.ids = ["vendor-chunks/@walletconnect+jsonrpc-ws-connection@1.0.14_bufferutil@4.0.7"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@walletconnect+jsonrpc-ws-connection@1.0.14_bufferutil@4.0.7/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.cjs.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@walletconnect+jsonrpc-ws-connection@1.0.14_bufferutil@4.0.7/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.cjs.js ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("Object.defineProperty(exports, \"__esModule\", ({value:!0}));var p=__webpack_require__(/*! events */ \"events\"),d=__webpack_require__(/*! @walletconnect/safe-json */ \"(ssr)/../../node_modules/.pnpm/@walletconnect+safe-json@1.0.2/node_modules/@walletconnect/safe-json/dist/cjs/index.js\"),o=__webpack_require__(/*! @walletconnect/jsonrpc-utils */ \"(ssr)/../../node_modules/.pnpm/@walletconnect+jsonrpc-utils@1.0.8/node_modules/@walletconnect/jsonrpc-utils/dist/cjs/index.js\");const g=()=>typeof WebSocket<\"u\"?WebSocket:typeof global<\"u\"&&typeof global.WebSocket<\"u\"?global.WebSocket:typeof window<\"u\"&&typeof window.WebSocket<\"u\"?window.WebSocket:typeof self<\"u\"&&typeof self.WebSocket<\"u\"?self.WebSocket:__webpack_require__(/*! ws */ \"(ssr)/../../node_modules/.pnpm/ws@7.5.9_bufferutil@4.0.7/node_modules/ws/index.js\"),v=()=>typeof WebSocket<\"u\"||typeof global<\"u\"&&typeof global.WebSocket<\"u\"||typeof window<\"u\"&&typeof window.WebSocket<\"u\"||typeof self<\"u\"&&typeof self.WebSocket<\"u\",h=a=>a.split(\"?\")[0],f=10,y=g();class l{constructor(e){if(this.url=e,this.events=new p.EventEmitter,this.registering=!1,!o.isWsUrl(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);this.url=e}get connected(){return typeof this.socket<\"u\"}get connecting(){return this.registering}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async open(e=this.url){await this.register(e)}async close(){return new Promise((e,t)=>{if(typeof this.socket>\"u\"){t(new Error(\"Connection already closed\"));return}this.socket.onclose=s=>{this.onClose(s),e()},this.socket.close()})}async send(e){typeof this.socket>\"u\"&&(this.socket=await this.register());try{this.socket.send(d.safeJsonStringify(e))}catch(t){this.onError(e.id,t)}}register(e=this.url){if(!o.isWsUrl(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);if(this.registering){const t=this.events.getMaxListeners();return(this.events.listenerCount(\"register_error\")>=t||this.events.listenerCount(\"open\")>=t)&&this.events.setMaxListeners(t+1),new Promise((s,n)=>{this.events.once(\"register_error\",r=>{this.resetMaxListeners(),n(r)}),this.events.once(\"open\",()=>{if(this.resetMaxListeners(),typeof this.socket>\"u\")return n(new Error(\"WebSocket connection is missing or invalid\"));s(this.socket)})})}return this.url=e,this.registering=!0,new Promise((t,s)=>{const n=new URLSearchParams(e).get(\"origin\"),r=o.isReactNative()?{headers:{origin:n}}:{rejectUnauthorized:!o.isLocalhostUrl(e)},i=new y(e,[],r);v()?i.onerror=c=>{const u=c;s(this.emitError(u.error))}:i.on(\"error\",c=>{s(this.emitError(c))}),i.onopen=()=>{this.onOpen(i),t(i)}})}onOpen(e){e.onmessage=t=>this.onPayload(t),e.onclose=t=>this.onClose(t),this.socket=e,this.registering=!1,this.events.emit(\"open\")}onClose(e){this.socket=void 0,this.registering=!1,this.events.emit(\"close\",e)}onPayload(e){if(typeof e.data>\"u\")return;const t=typeof e.data==\"string\"?d.safeJsonParse(e.data):e.data;this.events.emit(\"payload\",t)}onError(e,t){const s=this.parseError(t),n=s.message||s.toString(),r=o.formatJsonRpcError(e,n);this.events.emit(\"payload\",r)}parseError(e,t=this.url){return o.parseConnectionError(e,h(t),\"WS\")}resetMaxListeners(){this.events.getMaxListeners()>f&&this.events.setMaxListeners(f)}emitError(e){const t=this.parseError(new Error(e?.message||`WebSocket connection failed for host: ${h(this.url)}`));return this.events.emit(\"register_error\",t),t}}exports.WsConnection=l,exports[\"default\"]=l;\n//# sourceMappingURL=index.cjs.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B3YWxsZXRjb25uZWN0K2pzb25ycGMtd3MtY29ubmVjdGlvbkAxLjAuMTRfYnVmZmVydXRpbEA0LjAuNy9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvanNvbnJwYy13cy1jb25uZWN0aW9uL2Rpc3QvaW5kZXguY2pzLmpzIiwibWFwcGluZ3MiOiJBQUFhLDhDQUEyQyxDQUFDLFNBQVMsRUFBQyxDQUFDLE1BQU0sbUJBQU8sQ0FBQyxzQkFBUSxJQUFJLG1CQUFPLENBQUMsdUpBQTBCLElBQUksbUJBQU8sQ0FBQyxtS0FBOEIsRUFBRSxxT0FBcU8sbUJBQU8sQ0FBQyw2RkFBSSx5TUFBeU0sUUFBUSxlQUFlLDRKQUE0SixFQUFFLEdBQUcsV0FBVyxnQkFBZ0IsOEJBQThCLGlCQUFpQix3QkFBd0IsUUFBUSxvQkFBb0IsVUFBVSxzQkFBc0IsU0FBUyxxQkFBcUIsb0JBQW9CLGdDQUFnQyx1QkFBdUIsdUJBQXVCLGNBQWMsMkJBQTJCLDJCQUEyQiwwQ0FBMEMsT0FBTyx3QkFBd0Isb0JBQW9CLHFCQUFxQixFQUFFLGNBQWMsNERBQTRELElBQUkseUNBQXlDLFNBQVMsc0JBQXNCLHFCQUFxQiw4RkFBOEYsRUFBRSxHQUFHLHFCQUFxQixzQ0FBc0MsbUpBQW1KLHNDQUFzQyw4QkFBOEIsK0JBQStCLHFIQUFxSCxlQUFlLEVBQUUsRUFBRSwwREFBMEQsa0VBQWtFLFNBQVMsVUFBVSxFQUFFLHdDQUF3QyxpQkFBaUIsa0JBQWtCLFVBQVUsMkJBQTJCLGtCQUFrQixxQkFBcUIsZ0JBQWdCLHFCQUFxQixFQUFFLFVBQVUseUhBQXlILFdBQVcsbUVBQW1FLGFBQWEsNEJBQTRCLCtEQUErRCw4QkFBOEIsYUFBYSxpRkFBaUYsOEJBQThCLHlCQUF5QiwyQ0FBMkMsb0JBQW9CLGdFQUFnRSxhQUFhLHVGQUF1RixZQUFZLElBQUksK0NBQStDLG9CQUFvQixHQUFHLGtCQUFlO0FBQzlqRyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2tlbnN0cmVhbS93ZWIvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B3YWxsZXRjb25uZWN0K2pzb25ycGMtd3MtY29ubmVjdGlvbkAxLjAuMTRfYnVmZmVydXRpbEA0LjAuNy9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvanNvbnJwYy13cy1jb25uZWN0aW9uL2Rpc3QvaW5kZXguY2pzLmpzP2Y2ODAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHA9cmVxdWlyZShcImV2ZW50c1wiKSxkPXJlcXVpcmUoXCJAd2FsbGV0Y29ubmVjdC9zYWZlLWpzb25cIiksbz1yZXF1aXJlKFwiQHdhbGxldGNvbm5lY3QvanNvbnJwYy11dGlsc1wiKTtjb25zdCBnPSgpPT50eXBlb2YgV2ViU29ja2V0PFwidVwiP1dlYlNvY2tldDp0eXBlb2YgZ2xvYmFsPFwidVwiJiZ0eXBlb2YgZ2xvYmFsLldlYlNvY2tldDxcInVcIj9nbG9iYWwuV2ViU29ja2V0OnR5cGVvZiB3aW5kb3c8XCJ1XCImJnR5cGVvZiB3aW5kb3cuV2ViU29ja2V0PFwidVwiP3dpbmRvdy5XZWJTb2NrZXQ6dHlwZW9mIHNlbGY8XCJ1XCImJnR5cGVvZiBzZWxmLldlYlNvY2tldDxcInVcIj9zZWxmLldlYlNvY2tldDpyZXF1aXJlKFwid3NcIiksdj0oKT0+dHlwZW9mIFdlYlNvY2tldDxcInVcInx8dHlwZW9mIGdsb2JhbDxcInVcIiYmdHlwZW9mIGdsb2JhbC5XZWJTb2NrZXQ8XCJ1XCJ8fHR5cGVvZiB3aW5kb3c8XCJ1XCImJnR5cGVvZiB3aW5kb3cuV2ViU29ja2V0PFwidVwifHx0eXBlb2Ygc2VsZjxcInVcIiYmdHlwZW9mIHNlbGYuV2ViU29ja2V0PFwidVwiLGg9YT0+YS5zcGxpdChcIj9cIilbMF0sZj0xMCx5PWcoKTtjbGFzcyBse2NvbnN0cnVjdG9yKGUpe2lmKHRoaXMudXJsPWUsdGhpcy5ldmVudHM9bmV3IHAuRXZlbnRFbWl0dGVyLHRoaXMucmVnaXN0ZXJpbmc9ITEsIW8uaXNXc1VybChlKSl0aHJvdyBuZXcgRXJyb3IoYFByb3ZpZGVkIFVSTCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIFdlYlNvY2tldCBjb25uZWN0aW9uOiAke2V9YCk7dGhpcy51cmw9ZX1nZXQgY29ubmVjdGVkKCl7cmV0dXJuIHR5cGVvZiB0aGlzLnNvY2tldDxcInVcIn1nZXQgY29ubmVjdGluZygpe3JldHVybiB0aGlzLnJlZ2lzdGVyaW5nfW9uKGUsdCl7dGhpcy5ldmVudHMub24oZSx0KX1vbmNlKGUsdCl7dGhpcy5ldmVudHMub25jZShlLHQpfW9mZihlLHQpe3RoaXMuZXZlbnRzLm9mZihlLHQpfXJlbW92ZUxpc3RlbmVyKGUsdCl7dGhpcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoZSx0KX1hc3luYyBvcGVuKGU9dGhpcy51cmwpe2F3YWl0IHRoaXMucmVnaXN0ZXIoZSl9YXN5bmMgY2xvc2UoKXtyZXR1cm4gbmV3IFByb21pc2UoKGUsdCk9PntpZih0eXBlb2YgdGhpcy5zb2NrZXQ+XCJ1XCIpe3QobmV3IEVycm9yKFwiQ29ubmVjdGlvbiBhbHJlYWR5IGNsb3NlZFwiKSk7cmV0dXJufXRoaXMuc29ja2V0Lm9uY2xvc2U9cz0+e3RoaXMub25DbG9zZShzKSxlKCl9LHRoaXMuc29ja2V0LmNsb3NlKCl9KX1hc3luYyBzZW5kKGUpe3R5cGVvZiB0aGlzLnNvY2tldD5cInVcIiYmKHRoaXMuc29ja2V0PWF3YWl0IHRoaXMucmVnaXN0ZXIoKSk7dHJ5e3RoaXMuc29ja2V0LnNlbmQoZC5zYWZlSnNvblN0cmluZ2lmeShlKSl9Y2F0Y2godCl7dGhpcy5vbkVycm9yKGUuaWQsdCl9fXJlZ2lzdGVyKGU9dGhpcy51cmwpe2lmKCFvLmlzV3NVcmwoZSkpdGhyb3cgbmV3IEVycm9yKGBQcm92aWRlZCBVUkwgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBXZWJTb2NrZXQgY29ubmVjdGlvbjogJHtlfWApO2lmKHRoaXMucmVnaXN0ZXJpbmcpe2NvbnN0IHQ9dGhpcy5ldmVudHMuZ2V0TWF4TGlzdGVuZXJzKCk7cmV0dXJuKHRoaXMuZXZlbnRzLmxpc3RlbmVyQ291bnQoXCJyZWdpc3Rlcl9lcnJvclwiKT49dHx8dGhpcy5ldmVudHMubGlzdGVuZXJDb3VudChcIm9wZW5cIik+PXQpJiZ0aGlzLmV2ZW50cy5zZXRNYXhMaXN0ZW5lcnModCsxKSxuZXcgUHJvbWlzZSgocyxuKT0+e3RoaXMuZXZlbnRzLm9uY2UoXCJyZWdpc3Rlcl9lcnJvclwiLHI9Pnt0aGlzLnJlc2V0TWF4TGlzdGVuZXJzKCksbihyKX0pLHRoaXMuZXZlbnRzLm9uY2UoXCJvcGVuXCIsKCk9PntpZih0aGlzLnJlc2V0TWF4TGlzdGVuZXJzKCksdHlwZW9mIHRoaXMuc29ja2V0PlwidVwiKXJldHVybiBuKG5ldyBFcnJvcihcIldlYlNvY2tldCBjb25uZWN0aW9uIGlzIG1pc3Npbmcgb3IgaW52YWxpZFwiKSk7cyh0aGlzLnNvY2tldCl9KX0pfXJldHVybiB0aGlzLnVybD1lLHRoaXMucmVnaXN0ZXJpbmc9ITAsbmV3IFByb21pc2UoKHQscyk9Pntjb25zdCBuPW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkuZ2V0KFwib3JpZ2luXCIpLHI9by5pc1JlYWN0TmF0aXZlKCk/e2hlYWRlcnM6e29yaWdpbjpufX06e3JlamVjdFVuYXV0aG9yaXplZDohby5pc0xvY2FsaG9zdFVybChlKX0saT1uZXcgeShlLFtdLHIpO3YoKT9pLm9uZXJyb3I9Yz0+e2NvbnN0IHU9YztzKHRoaXMuZW1pdEVycm9yKHUuZXJyb3IpKX06aS5vbihcImVycm9yXCIsYz0+e3ModGhpcy5lbWl0RXJyb3IoYykpfSksaS5vbm9wZW49KCk9Pnt0aGlzLm9uT3BlbihpKSx0KGkpfX0pfW9uT3BlbihlKXtlLm9ubWVzc2FnZT10PT50aGlzLm9uUGF5bG9hZCh0KSxlLm9uY2xvc2U9dD0+dGhpcy5vbkNsb3NlKHQpLHRoaXMuc29ja2V0PWUsdGhpcy5yZWdpc3RlcmluZz0hMSx0aGlzLmV2ZW50cy5lbWl0KFwib3BlblwiKX1vbkNsb3NlKGUpe3RoaXMuc29ja2V0PXZvaWQgMCx0aGlzLnJlZ2lzdGVyaW5nPSExLHRoaXMuZXZlbnRzLmVtaXQoXCJjbG9zZVwiLGUpfW9uUGF5bG9hZChlKXtpZih0eXBlb2YgZS5kYXRhPlwidVwiKXJldHVybjtjb25zdCB0PXR5cGVvZiBlLmRhdGE9PVwic3RyaW5nXCI/ZC5zYWZlSnNvblBhcnNlKGUuZGF0YSk6ZS5kYXRhO3RoaXMuZXZlbnRzLmVtaXQoXCJwYXlsb2FkXCIsdCl9b25FcnJvcihlLHQpe2NvbnN0IHM9dGhpcy5wYXJzZUVycm9yKHQpLG49cy5tZXNzYWdlfHxzLnRvU3RyaW5nKCkscj1vLmZvcm1hdEpzb25ScGNFcnJvcihlLG4pO3RoaXMuZXZlbnRzLmVtaXQoXCJwYXlsb2FkXCIscil9cGFyc2VFcnJvcihlLHQ9dGhpcy51cmwpe3JldHVybiBvLnBhcnNlQ29ubmVjdGlvbkVycm9yKGUsaCh0KSxcIldTXCIpfXJlc2V0TWF4TGlzdGVuZXJzKCl7dGhpcy5ldmVudHMuZ2V0TWF4TGlzdGVuZXJzKCk+ZiYmdGhpcy5ldmVudHMuc2V0TWF4TGlzdGVuZXJzKGYpfWVtaXRFcnJvcihlKXtjb25zdCB0PXRoaXMucGFyc2VFcnJvcihuZXcgRXJyb3IoZT8ubWVzc2FnZXx8YFdlYlNvY2tldCBjb25uZWN0aW9uIGZhaWxlZCBmb3IgaG9zdDogJHtoKHRoaXMudXJsKX1gKSk7cmV0dXJuIHRoaXMuZXZlbnRzLmVtaXQoXCJyZWdpc3Rlcl9lcnJvclwiLHQpLHR9fWV4cG9ydHMuV3NDb25uZWN0aW9uPWwsZXhwb3J0cy5kZWZhdWx0PWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5janMuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@walletconnect+jsonrpc-ws-connection@1.0.14_bufferutil@4.0.7/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.cjs.js\n");

/***/ })

};
;