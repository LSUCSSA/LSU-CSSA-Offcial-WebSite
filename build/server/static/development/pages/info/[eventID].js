module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/info/[eventID].js":
/*!*********************************!*\
  !*** ./pages/info/[eventID].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/jun/WebstormProjects/LSU-CSSA-Offcial-WebSite/pages/info/[eventID].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst {\n  Title,\n  Text\n} = antd__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"];\n\nconst EventDetail = ({\n  news\n}) => {\n  var _news$content;\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(); // console.log(news.content);\n\n  const {\n    pid\n  } = router.query;\n  return __jsx(\"div\", {\n    style: {\n      paddingTop: \"20px\",\n      maxWidth: \"677px\",\n      marginLeft: \"auto\",\n      marginRight: \"auto\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(Title, {\n    level: 2,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, news.title), __jsx(Text, {\n    type: \"secondary\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, news.author, \"  \", new Date(news.update_time).toLocaleDateString()), __jsx(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: (_news$content = news.content) === null || _news$content === void 0 ? void 0 : _news$content.replace(/data-src/g, 'src').replace(/src=\"/g, 'src=http://img01.store.sogou.com/net/a/04/link?appid=100520029&url=')\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  })) // <Iframe\n  //     url=\"https://mp.weixin.qq.com/s?src=11&timestamp=1581048912&ver=2143&signature=zSjL*nUNjAGSYKVh*fhvhDxm7vxwpO383GhT3SoIRB3U6VAY5Nub3mXJYoSdBomuXVxsy56U0mxKjb4xDyQJncBlcdk*v0yzvh7zw6DG4ETIOkh3DrOLsyf-bz-BjPCw&new=1\"\n  //   width=\"100%\"\n  //   height=\"100%\"\n  // />\n  ;\n};\n\nEventDetail.getInitialProps = async ctx => {\n  // const token = await fetch(`${API}/wechat/accessToken`);\n  const res = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(`${\"http://localhost:1337\"}/articles/${ctx.query.eventID}`);\n  const json = await res.json();\n  return {\n    news: json\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmZvL1tldmVudElEXS5qcz9mOWE1Il0sIm5hbWVzIjpbIlRpdGxlIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJFdmVudERldGFpbCIsIm5ld3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwaWQiLCJxdWVyeSIsInBhZGRpbmdUb3AiLCJtYXhXaWR0aCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInRpdGxlIiwiYXV0aG9yIiwiRGF0ZSIsInVwZGF0ZV90aW1lIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiX19odG1sIiwiY29udGVudCIsInJlcGxhY2UiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJldmVudElEIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFDQSxPQUFEO0FBQVFDO0FBQVIsSUFBZ0JDLCtDQUF0Qjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBWTtBQUFBOztBQUM1QixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRDRCLENBRTVCOztBQUVBLFFBQU07QUFBQ0M7QUFBRCxNQUFRRixNQUFNLENBQUNHLEtBQXJCO0FBRUEsU0FDSTtBQUFLLFNBQUssRUFBRTtBQUFDQyxnQkFBVSxFQUFFLE1BQWI7QUFBcUJDLGNBQVEsRUFBRSxPQUEvQjtBQUF3Q0MsZ0JBQVUsRUFBRSxNQUFwRDtBQUE0REMsaUJBQVcsRUFBRTtBQUF6RSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLEtBQUQ7QUFBTyxTQUFLLEVBQUUsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtCUixJQUFJLENBQUNTLEtBQXZCLENBREosRUFFSSxNQUFDLElBQUQ7QUFBTyxRQUFJLEVBQUMsV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlCVCxJQUFJLENBQUNVLE1BQTlCLFFBQXdDLElBQUlDLElBQUosQ0FBU1gsSUFBSSxDQUFDWSxXQUFkLEVBQTJCQyxrQkFBM0IsRUFBeEMsQ0FGSixFQUdJO0FBQ0ksMkJBQXVCLEVBQUU7QUFBQ0MsWUFBTSxtQkFBRWQsSUFBSSxDQUFDZSxPQUFQLGtEQUFFLGNBQWNDLE9BQWQsQ0FBc0IsV0FBdEIsRUFBbUMsS0FBbkMsRUFBMENBLE9BQTFDLENBQWtELFFBQWxELEVBQTRELHFFQUE1RDtBQUFULEtBRDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKLENBT0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhKO0FBYUgsQ0FuQkQ7O0FBb0JBakIsV0FBVyxDQUFDa0IsZUFBWixHQUE4QixNQUFNQyxHQUFOLElBQWE7QUFDdkM7QUFDQSxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsdURBQUssQ0FBRSxHQUFFQyx1QkFBNEIsYUFBWUgsR0FBRyxDQUFDZCxLQUFKLENBQVVrQixPQUFRLEVBQTlELENBQXZCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1KLEdBQUcsQ0FBQ0ksSUFBSixFQUFuQjtBQUNBLFNBQU87QUFBQ3ZCLFFBQUksRUFBRXVCO0FBQVAsR0FBUDtBQUNILENBTEQ7O0FBTWV4QiwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZm8vW2V2ZW50SURdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQge1R5cG9ncmFwaHl9IGZyb20gXCJhbnRkXCI7XG5cbmNvbnN0IHtUaXRsZSwgVGV4dH0gPSBUeXBvZ3JhcGh5O1xuXG5jb25zdCBFdmVudERldGFpbCA9ICh7bmV3c30pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdzLmNvbnRlbnQpO1xuXG4gICAgY29uc3Qge3BpZH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIyMHB4XCIsIG1heFdpZHRoOiBcIjY3N3B4XCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCBtYXJnaW5SaWdodDogXCJhdXRvXCJ9fT5cbiAgICAgICAgICAgIDxUaXRsZSBsZXZlbD17Mn0+e25ld3MudGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICAgIDxUZXh0ICB0eXBlPVwic2Vjb25kYXJ5XCI+e25ld3MuYXV0aG9yfSAge25ldyBEYXRlKG5ld3MudXBkYXRlX3RpbWUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvVGV4dD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogbmV3cy5jb250ZW50Py5yZXBsYWNlKC9kYXRhLXNyYy9nLCAnc3JjJykucmVwbGFjZSgvc3JjPVwiL2csICdzcmM9aHR0cDovL2ltZzAxLnN0b3JlLnNvZ291LmNvbS9uZXQvYS8wNC9saW5rP2FwcGlkPTEwMDUyMDAyOSZ1cmw9Jyl9fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAvLyA8SWZyYW1lXG4gICAgICAgIC8vICAgICB1cmw9XCJodHRwczovL21wLndlaXhpbi5xcS5jb20vcz9zcmM9MTEmdGltZXN0YW1wPTE1ODEwNDg5MTImdmVyPTIxNDMmc2lnbmF0dXJlPXpTakwqblVOakFHU1lLVmgqZmh2aER4bTd2eHdwTzM4M0doVDNTb0lSQjNVNlZBWTVOdWIzbVhKWW9TZEJvbXVYVnhzeTU2VTBteEtqYjR4RHlRSm5jQmxjZGsqdjB5enZoN3p3NkRHNEVUSU9raDNEck9Mc3lmLWJ6LUJqUEN3Jm5ldz0xXCJcbiAgICAgICAgLy8gICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAvLyAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAvLyAvPlxuICAgICk7XG59O1xuRXZlbnREZXRhaWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgICAvLyBjb25zdCB0b2tlbiA9IGF3YWl0IGZldGNoKGAke0FQSX0vd2VjaGF0L2FjY2Vzc1Rva2VuYCk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJfS9hcnRpY2xlcy8ke2N0eC5xdWVyeS5ldmVudElEfWApO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiB7bmV3czoganNvbn07XG59O1xuZXhwb3J0IGRlZmF1bHQgRXZlbnREZXRhaWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/info/[eventID].js\n");

/***/ }),

/***/ 4:
/*!***************************************!*\
  !*** multi ./pages/info/[eventID].js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jun/WebstormProjects/LSU-CSSA-Offcial-WebSite/pages/info/[eventID].js */"./pages/info/[eventID].js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCI/NzNhOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJpc29tb3JwaGljLWZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-fetch\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });