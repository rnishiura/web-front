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
exports.id = "pages/misc";
exports.ids = ["pages/misc"];
exports.modules = {

/***/ "./src/pages/misc/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/misc/index.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst App = ()=>{\n    // const [file, setFile] = useState<File | null>(null);\n    const [vals, setVals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        body: \"\"\n    });\n    const onChange = (e)=>{\n        setVals({\n            ...vals,\n            [e.target.name]: e.target.value\n        });\n    };\n    const fetchCsrfToken = async ()=>{\n        try {\n            const response = await fetch(`http://localhost:8080/api/csrf/`, {\n                credentials: \"include\"\n            });\n            return response.json();\n        } catch (e) {\n            console.error(e);\n        }\n    };\n    //   fetch(\"http://localhost:8080/api/hoge/todo/\", {\n    //     credentials: \"include\",\n    //     method: \"POST\",\n    //     headers: {\n    //       Accept: \"application/json\",\n    //       \"Content-Type\": \"application/json\",\n    //       \"X-CSRFToken\": csrf,\n    //     },\n    //     body: JSON.stringify({\n    //       title: \"urasima tarou\",\n    //       body: \"ryu-gu no tsukai\",\n    //     }),\n    //   })\n    //     .then((response) => response.text())\n    //     .then((responseJson) => {\n    //       console.log(responseJson);\n    //     });\n    // };\n    const onClickSubmit = async ()=>{\n        await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8080/api/hoge/todo/\", {\n            title: vals.title,\n            body: vals.body\n        }, {\n            headers: {\n                \"X-CSRFToken\": (await fetchCsrfToken()).token,\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            withCredentials: true\n        }).then((response)=>{\n            console.log(\"body:\", response.data);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"App-form\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"title\",\n                    type: \"text\",\n                    onChange: onChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/home/app/frontend/src/pages/misc/index.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"body\",\n                    type: \"text\",\n                    onChange: onChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/home/app/frontend/src/pages/misc/index.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"button\",\n                    // disabled={!file}\n                    value: \"送信\",\n                    onClick: onClickSubmit\n                }, void 0, false, {\n                    fileName: \"/home/app/frontend/src/pages/misc/index.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/app/frontend/src/pages/misc/index.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/app/frontend/src/pages/misc/index.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWlzYy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXVEO0FBQ0U7QUFPbEQsTUFBTUcsTUFBTSxJQUFtQjtJQUNwQyx1REFBdUQ7SUFDdkQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFPO1FBQUVLLE9BQU87UUFBSUMsTUFBTTtJQUFHO0lBRTdELE1BQU1DLFdBQVcsQ0FBQ0MsSUFBMkM7UUFDM0RKLFFBQVE7WUFBRSxHQUFHRCxJQUFJO1lBQUUsQ0FBQ0ssRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUYsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUM7SUFDckQ7SUFFQSxNQUFNQyxpQkFBaUIsVUFBWTtRQUNqQyxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLENBQUMsK0JBQStCLENBQUMsRUFBRTtnQkFDOURDLGFBQWE7WUFDZjtZQUNBLE9BQU9GLFNBQVNHLElBQUk7UUFDdEIsRUFBRSxPQUFPUixHQUFHO1lBQ1ZTLFFBQVFDLEtBQUssQ0FBQ1Y7UUFDaEI7SUFDRjtJQUdBLG9EQUFvRDtJQUNwRCw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsNENBQTRDO0lBQzVDLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLE9BQU87SUFDUCwyQ0FBMkM7SUFDM0MsZ0NBQWdDO0lBQ2hDLG1DQUFtQztJQUNuQyxVQUFVO0lBQ1YsS0FBSztJQUVMLE1BQU1XLGdCQUFnQixVQUFZO1FBQ2hDLE1BQU1sQixrREFDQyxDQUNILHdDQUNBO1lBQ0VJLE9BQU9GLEtBQUtFLEtBQUs7WUFDakJDLE1BQU1ILEtBQUtHLElBQUk7UUFDakIsR0FDQTtZQUNFZSxTQUFTO2dCQUNQLGVBQWUsQ0FBQyxNQUFNVCxnQkFBZSxFQUFHVSxLQUFLO2dCQUM3Q0MsUUFBUTtnQkFDUixnQkFBZ0I7WUFDbEI7WUFDQUMsaUJBQWlCLElBQUk7UUFDdkIsR0FFREMsSUFBSSxDQUFDLENBQUNaLFdBQWE7WUFDbEJJLFFBQVFTLEdBQUcsQ0FBQyxTQUFTYixTQUFTYyxJQUFJO1FBQ3BDO0lBQ0o7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFNcEIsTUFBSztvQkFBUXFCLE1BQUs7b0JBQU94QixVQUFVQTtvQkFBVXlCLFFBQVE7Ozs7Ozs4QkFDNUQsOERBQUNGO29CQUFNcEIsTUFBSztvQkFBT3FCLE1BQUs7b0JBQU94QixVQUFVQTtvQkFBVXlCLFFBQVE7Ozs7Ozs4QkFDM0QsOERBQUNGO29CQUNDQyxNQUFLO29CQUNMLG1CQUFtQjtvQkFDbkJwQixPQUFNO29CQUNOc0IsU0FBU2Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25CLEVBQUU7QUFFRixpRUFBZWpCLEdBQUdBLEVBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9taXNjL2luZGV4LnRzeD8yMGJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UsIEF4aW9zRXJyb3IgfSBmcm9tIFwiYXhpb3NcIjtcblxuaW50ZXJmYWNlIEZvcm0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBcHAgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuICAvLyBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZTxGaWxlIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFt2YWxzLCBzZXRWYWxzXSA9IHVzZVN0YXRlPEZvcm0+KHsgdGl0bGU6IFwiXCIsIGJvZHk6IFwiXCIgfSk7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRWYWxzKHsgLi4udmFscywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBmZXRjaENzcmZUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9jc3JmL2AsIHtcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9O1xuXG4gIFxuICAvLyAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9ob2dlL3RvZG8vXCIsIHtcbiAgLy8gICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgLy8gICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gIC8vICAgICBoZWFkZXJzOiB7XG4gIC8vICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIC8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAvLyAgICAgICBcIlgtQ1NSRlRva2VuXCI6IGNzcmYsXG4gIC8vICAgICB9LFxuICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAvLyAgICAgICB0aXRsZTogXCJ1cmFzaW1hIHRhcm91XCIsXG4gIC8vICAgICAgIGJvZHk6IFwicnl1LWd1IG5vIHRzdWthaVwiLFxuICAvLyAgICAgfSksXG4gIC8vICAgfSlcbiAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlSnNvbikgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpzb24pO1xuICAvLyAgICAgfSk7XG4gIC8vIH07XG5cbiAgY29uc3Qgb25DbGlja1N1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBheGlvc1xuICAgICAgLnBvc3QoXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9ob2dlL3RvZG8vXCIsXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogdmFscy50aXRsZSxcbiAgICAgICAgICBib2R5OiB2YWxzLmJvZHksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIlgtQ1NSRlRva2VuXCI6IChhd2FpdCBmZXRjaENzcmZUb2tlbigpKS50b2tlbixcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYm9keTpcIiwgcmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcC1mb3JtXCI+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgPGlucHV0IG5hbWU9XCJib2R5XCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17b25DaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIC8vIGRpc2FibGVkPXshZmlsZX1cbiAgICAgICAgICB2YWx1ZT1cIumAgeS/oVwiXG4gICAgICAgICAgb25DbGljaz17b25DbGlja1N1Ym1pdH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwIGFzIEZDO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkFwcCIsInZhbHMiLCJzZXRWYWxzIiwidGl0bGUiLCJib2R5Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZmV0Y2hDc3JmVG9rZW4iLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJqc29uIiwiY29uc29sZSIsImVycm9yIiwib25DbGlja1N1Ym1pdCIsInBvc3QiLCJoZWFkZXJzIiwidG9rZW4iLCJBY2NlcHQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwibG9nIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInJlcXVpcmVkIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/misc/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/misc/index.tsx"));
module.exports = __webpack_exports__;

})();