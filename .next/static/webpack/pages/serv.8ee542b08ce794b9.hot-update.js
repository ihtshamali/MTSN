"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/serv",{

/***/ "./pages/serv.js":
/*!***********************!*\
  !*** ./pages/serv.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _json_record_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json/record.json */ \"./json/record.json\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Serv() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: _json_record_json__WEBPACK_IMPORTED_MODULE_2__ && _json_record_json__WEBPACK_IMPORTED_MODULE_2__.map((record)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: record.ServiceName\n                        }, void 0, false, {\n                            fileName: \"D:\\\\MTSN\\\\Multi Tech Solutions\\\\my-app-mtsn\\\\pages\\\\serv.js\",\n                            lineNumber: 13,\n                            columnNumber: 29\n                        }, this),\n                        record.Description,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: record.ServiceImage\n                        }, void 0, false, {\n                            fileName: \"D:\\\\MTSN\\\\Multi Tech Solutions\\\\my-app-mtsn\\\\pages\\\\serv.js\",\n                            lineNumber: 15,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, record.id, true, {\n                    fileName: \"D:\\\\MTSN\\\\Multi Tech Solutions\\\\my-app-mtsn\\\\pages\\\\serv.js\",\n                    lineNumber: 12,\n                    columnNumber: 25\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\MTSN\\\\Multi Tech Solutions\\\\my-app-mtsn\\\\pages\\\\serv.js\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = Serv;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Serv);\nvar _c;\n$RefreshReg$(_c, \"Serv\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXJ2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDZTtBQUNWO0FBRTlCLFNBQVNHLE9BQU87SUFDWixxQkFDSTtrQkFDQSw0RUFBQ0M7c0JBRU9ILDhDQUFNQSxJQUFJQSxrREFBVSxDQUFDSyxDQUFBQSxTQUFVO2dCQUMzQixxQkFDSSw4REFBQ0Y7b0JBQUlHLFdBQVU7O3NDQUNYLDhEQUFDQztzQ0FBUUYsT0FBT0csV0FBVzs7Ozs7O3dCQUMxQkgsT0FBT0ksV0FBVztzQ0FDbkIsOERBQUNSLG1EQUFLQTs0QkFBQ1MsS0FBS0wsT0FBT00sWUFBWTs7Ozs7OzttQkFIVE4sT0FBT08sRUFBRTs7Ozs7WUFNM0M7Ozs7Ozs7QUFLaEI7S0FsQlNWO0FBb0JULCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlcnYuanM/NzY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWNvcmQgZnJvbSBcIi4uL2pzb24vcmVjb3JkLmpzb25cIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmZ1bmN0aW9uIFNlcnYoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUmVjb3JkICYmIFJlY29yZC5tYXAocmVjb3JkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gnIGtleT17cmVjb3JkLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3JlY29yZC5TZXJ2aWNlTmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmQuRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtyZWNvcmQuU2VydmljZUltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVjb3JkIiwiSW1hZ2UiLCJTZXJ2IiwiZGl2IiwibWFwIiwicmVjb3JkIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwiU2VydmljZU5hbWUiLCJEZXNjcmlwdGlvbiIsInNyYyIsIlNlcnZpY2VJbWFnZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/serv.js\n"));

/***/ })

});