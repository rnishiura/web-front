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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const [todos, setTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getAPIData = async ()=>{\n        let instance;\n        instance = axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n            baseURL: \"http://localhost:8080\"\n        });\n        try {\n            const response = await instance.get(\"/api/\");\n            console.log(response?.data);\n            const tododata = response?.data;\n            setTodo(tododata);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"hello world\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getAPIData,\n                children: \"click\"\n            }, void 0, false, {\n                fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            todos.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: item.body\n                        }, void 0, false, {\n                            fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, item.id, true, {\n                    fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/app/frontend/src/pages/index.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQXVEO0FBQ1Y7QUFRN0MsaUVBQWdCLElBQU07SUFDcEIsTUFBTSxDQUFDRyxPQUFPQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFTLEVBQUU7SUFFNUMsTUFBTUksYUFBYSxVQUFZO1FBQzdCLElBQUlDO1FBRUpBLFdBQVdKLG9EQUFZLENBQUM7WUFDdEJNLFNBQVM7UUFDWDtRQUVBLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1ILFNBQVNJLEdBQUcsQ0FBQztZQUNwQ0MsUUFBUUMsR0FBRyxDQUFDSCxVQUFVSTtZQUN0QixNQUFNQyxXQUFXTCxVQUFVSTtZQUMzQlQsUUFBUVU7UUFDVixFQUFFLE9BQU9DLE9BQU87WUFDZEosUUFBUUMsR0FBRyxDQUFDRztRQUNkO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0M7O1lBQUk7MEJBRUgsOERBQUNDO2dCQUFPQyxTQUFTYjswQkFBWTs7Ozs7O1lBQzVCRixNQUFNZ0IsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDSjs7c0NBQ0MsOERBQUNLO3NDQUFJRCxLQUFLRSxLQUFLOzs7Ozs7c0NBQ2YsOERBQUNDO3NDQUFHSCxLQUFLSSxJQUFJOzs7Ozs7O21CQUZMSixLQUFLSyxFQUFFOzs7Ozs7Ozs7OztBQU96QixHQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gXCJheGlvc1wiO1xuXG50eXBlIFRvZG8gPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBTdHJpbmc7XG4gIGJvZHk6IFN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb10gPSB1c2VTdGF0ZTxUb2RvW10+KFtdKTtcblxuICBjb25zdCBnZXRBUElEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBpbnN0YW5jZTogQXhpb3NJbnN0YW5jZTtcblxuICAgIGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICAgIGJhc2VVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCIsXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBpbnN0YW5jZS5nZXQoXCIvYXBpL1wiKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlPy5kYXRhKTtcbiAgICAgIGNvbnN0IHRvZG9kYXRhID0gcmVzcG9uc2U/LmRhdGEgYXMgVG9kb1tdO1xuICAgICAgc2V0VG9kbyh0b2RvZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIGhlbGxvIHdvcmxkXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldEFQSURhdGF9PmNsaWNrPC9idXR0b24+XG4gICAgICB7dG9kb3MubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICA8aDE+e2l0ZW0udGl0bGV9PC9oMT5cbiAgICAgICAgICA8cD57aXRlbS5ib2R5fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0pIGFzIEZDO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInRvZG9zIiwic2V0VG9kbyIsImdldEFQSURhdGEiLCJpbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJyZXNwb25zZSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidG9kb2RhdGEiLCJlcnJvciIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJpdGVtIiwiaDEiLCJ0aXRsZSIsInAiLCJib2R5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();