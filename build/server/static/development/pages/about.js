module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API\", function() { return API; });\nconst API = \"https://lsucssa.org/api\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcuanM/YTFiYyJdLCJuYW1lcyI6WyJBUEkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNQSxHQUFHLEdBQUcseUJBQVoiLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJID0gXCJodHRwczovL2xzdWNzc2Eub3JnL2FwaVwiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\nvar _jsxFileName = \"/Users/junlin/Desktop/LSU-CSSA-Offcial-WebSite/pages/about.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst {\n  Title\n} = antd__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"];\nconst {\n  Meta\n} = antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"];\n\nconst About = ({\n  about\n}) => {\n  const presidents = about.filter(p => p.position === \"president\");\n  return __jsx(\"div\", {\n    style: {\n      textAlign: \"center\",\n      margin: \"5%\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(Title, {\n    level: 1,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \"\\u4E3B\\u5E2D\\u56E2\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    type: \"flex\",\n    align: \"middle\",\n    justify: \"center\",\n    gutter: [32, 8],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, presidents.length !== 0 ? presidents.map(p => {\n    __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      xs: 24,\n      md: Math.floor(24 / presidents.length),\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      hoverable: true,\n      style: {\n        width: 240\n      },\n      cover: __jsx(\"img\", {\n        alt: \"example\",\n        src: p.photo,\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 24\n        }\n      }),\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 15\n      }\n    }, __jsx(Title, {\n      level: 2,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }\n    }, p.name), __jsx(Meta, {\n      title: p.title,\n      description: p.description,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }\n    })));\n  }) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Skeleton\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  })), __jsx(Title, {\n    level: 1,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, \"\\u90E8\\u95E8\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    type: \"flex\",\n    align: \"top\",\n    justify: \"center\",\n    gutter: [32, 8],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    xs: 24,\n    md: 12,\n    style: {\n      minHeight: 300\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    bordered: false,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n    type: \"calendar\",\n    style: {\n      fontSize: 64,\n      padding: 32\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }), __jsx(Meta, {\n    title: __jsx(Title, {\n      level: 3,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 22\n      }\n    }, \"\\u6D3B\\u52A8\\u7B56\\u5212\\u90E8\"),\n    description: \"主要负责策划校内外多姿多彩的活动，丰富大家课余生活,并且促进校内学生组织的联谊和发展长远合作关系。整合学联会资源，集所有CSSA成员之力筹办各类大型晚会，以及组织留学生喜闻乐见的文娱体育和志愿者活动。\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    xs: 24,\n    md: 12,\n    style: {\n      minHeight: 300\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    bordered: false,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n    type: \"camera\",\n    style: {\n      fontSize: 64,\n      padding: 32\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }), __jsx(Meta, {\n    title: __jsx(Title, {\n      level: 3,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 22\n      }\n    }, \"\\u65B0\\u95FB\\u5A92\\u4F53\\u90E8\"),\n    description: \"宣传部为学联和各活动制作形式新颖的宣传资料和影像记录，对外扩大学联影响力。宣传我联的所有活动和节目。\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    xs: 24,\n    md: 12,\n    style: {\n      minHeight: 300\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    bordered: false,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n    type: \"code\",\n    style: {\n      fontSize: 64,\n      padding: 32\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }), __jsx(Meta, {\n    title: __jsx(Title, {\n      level: 3,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 22\n      }\n    }, \"\\u7F51\\u7EDC\\u6280\\u672F\\u90E8\"),\n    description: \"负责官网和App的开发及更新，网站后台及其maillist的维护管理，并且为学生会各类活动提供技术与人力支持。\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    xs: 24,\n    md: 12,\n    style: {\n      minHeight: 300\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    bordered: false,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n    type: \"team\",\n    style: {\n      fontSize: 64,\n      padding: 32\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }), __jsx(Meta, {\n    title: __jsx(Title, {\n      level: 3,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 22\n      }\n    }, \"\\u5916\\u8054\\u516C\\u5173\\u90E8\"),\n    description: \"主要负责与校内外社团院校建立良好关系,保持及时交流与沟通。为学生会日常开销, 大型活动筹集经费以保证各项活动顺利进行。代表学生会,作为学生会与各大商家,媒体,华人组织交流的窗口,为广大中国学生的衣食住行各方面谋福利。负责大型活动的对外联系,包括联系嘉宾,制作发送邀请函,安排礼仪接待等工作。\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  })))), __jsx(Title, {\n    level: 1,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }, \"\\u8D5E\\u52A9\\u5546\\u9884\\u7559\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Empty\"], {\n    style: {\n      height: 300\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }));\n};\n\nAbout.getInitialProps = async () => {\n  const res = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(`${_config__WEBPACK_IMPORTED_MODULE_3__[\"API\"]}/users`);\n  const json = await res.json();\n  console.log(json);\n  return {\n    about: json\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIlRpdGxlIiwiVHlwb2dyYXBoeSIsIk1ldGEiLCJDYXJkIiwiQWJvdXQiLCJhYm91dCIsInByZXNpZGVudHMiLCJmaWx0ZXIiLCJwIiwicG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJsZW5ndGgiLCJtYXAiLCJNYXRoIiwiZmxvb3IiLCJ3aWR0aCIsInBob3RvIiwibmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtaW5IZWlnaHQiLCJmb250U2l6ZSIsInBhZGRpbmciLCJoZWlnaHQiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJmZXRjaCIsIkFQSSIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBVUE7QUFDQTtBQUNBLE1BQU07QUFBRUE7QUFBRixJQUFZQywrQ0FBbEI7QUFDQSxNQUFNO0FBQUVDO0FBQUYsSUFBV0MseUNBQWpCOztBQUVBLE1BQU1DLEtBQUssR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBQzNCLFFBQU1DLFVBQVUsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxRQUFGLEtBQWUsV0FBakMsQ0FBbkI7QUFDQSxTQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRSxRQUFiO0FBQXVCQyxZQUFNLEVBQUU7QUFBL0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQU8sU0FBSyxFQUFFLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixFQUVFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBQyxNQUFWO0FBQWlCLFNBQUssRUFBQyxRQUF2QjtBQUFnQyxXQUFPLEVBQUMsUUFBeEM7QUFBaUQsVUFBTSxFQUFFLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxVQUFVLENBQUNNLE1BQVgsS0FBc0IsQ0FBdEIsR0FDQ04sVUFBVSxDQUFDTyxHQUFYLENBQWVMLENBQUMsSUFBSTtBQUNsQixVQUFDLHdDQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBYSxRQUFFLEVBQUVNLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtULFVBQVUsQ0FBQ00sTUFBM0IsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMseUNBQUQ7QUFDRSxlQUFTLE1BRFg7QUFFRSxXQUFLLEVBQUU7QUFBRUksYUFBSyxFQUFFO0FBQVQsT0FGVDtBQUdFLFdBQUssRUFBRTtBQUFLLFdBQUcsRUFBQyxTQUFUO0FBQW1CLFdBQUcsRUFBRVIsQ0FBQyxDQUFDUyxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtFLE1BQUMsS0FBRDtBQUFPLFdBQUssRUFBRSxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBa0JULENBQUMsQ0FBQ1UsSUFBcEIsQ0FMRixFQU1FLE1BQUMsSUFBRDtBQUFNLFdBQUssRUFBRVYsQ0FBQyxDQUFDVyxLQUFmO0FBQXNCLGlCQUFXLEVBQUVYLENBQUMsQ0FBQ1ksV0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5GLENBREY7QUFVRCxHQVhELENBREQsR0FjQyxNQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmSixDQUhGLEVBcUJFLE1BQUMsS0FBRDtBQUFPLFNBQUssRUFBRSxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBckJGLEVBc0JFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixFQXVCRSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFDLE1BQVY7QUFBaUIsU0FBSyxFQUFDLEtBQXZCO0FBQTZCLFdBQU8sRUFBQyxRQUFyQztBQUE4QyxVQUFNLEVBQUUsQ0FBQyxFQUFELEVBQUssQ0FBTCxDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRDtBQUFNLFlBQVEsRUFBRSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRDtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsRUFBWjtBQUFnQkMsYUFBTyxFQUFFO0FBQXpCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsSUFBRDtBQUNFLFNBQUssRUFBRSxNQUFDLEtBQUQ7QUFBTyxXQUFLLEVBQUUsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQURUO0FBRUUsZUFBVyxFQUNULHNHQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBREYsRUFZRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBcUIsU0FBSyxFQUFFO0FBQUVGLGVBQVMsRUFBRTtBQUFiLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlDQUFEO0FBQU0sWUFBUSxFQUFFLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlDQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBb0IsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxFQUFaO0FBQWdCQyxhQUFPLEVBQUU7QUFBekIsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxJQUFEO0FBQ0UsU0FBSyxFQUFFLE1BQUMsS0FBRDtBQUFPLFdBQUssRUFBRSxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBRFQ7QUFFRSxlQUFXLEVBQ1Qsb0RBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FaRixFQXVCRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBcUIsU0FBSyxFQUFFO0FBQUVGLGVBQVMsRUFBRTtBQUFiLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlDQUFEO0FBQU0sWUFBUSxFQUFFLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlDQUFEO0FBQU0sUUFBSSxFQUFDLE1BQVg7QUFBa0IsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxFQUFaO0FBQWdCQyxhQUFPLEVBQUU7QUFBekIsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxJQUFEO0FBQ0UsU0FBSyxFQUFFLE1BQUMsS0FBRDtBQUFPLFdBQUssRUFBRSxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBRFQ7QUFFRSxlQUFXLEVBQ1QseURBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0F2QkYsRUFrQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLFNBQUssRUFBRTtBQUFFRixlQUFTLEVBQUU7QUFBYixLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRDtBQUFNLFlBQVEsRUFBRSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRDtBQUFNLFFBQUksRUFBQyxNQUFYO0FBQWtCLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsRUFBWjtBQUFnQkMsYUFBTyxFQUFFO0FBQXpCLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsSUFBRDtBQUNFLFNBQUssRUFBRSxNQUFDLEtBQUQ7QUFBTyxXQUFLLEVBQUUsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQURUO0FBRUUsZUFBVyxFQUNULG1KQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBbENGLENBdkJGLEVBcUVFLE1BQUMsS0FBRDtBQUFPLFNBQUssRUFBRSxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBckVGLEVBc0VFLE1BQUMsMENBQUQ7QUFBTyxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEVGLENBREY7QUEwRUQsQ0E1RUQ7O0FBNkVBcEIsS0FBSyxDQUFDcUIsZUFBTixHQUF3QixZQUFZO0FBQ2xDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLFFBQVIsQ0FBdkI7QUFDQSxRQUFNQyxJQUFJLEdBQUcsTUFBTUgsR0FBRyxDQUFDRyxJQUFKLEVBQW5CO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsU0FBTztBQUFFeEIsU0FBSyxFQUFFd0I7QUFBVCxHQUFQO0FBQ0QsQ0FMRDs7QUFNZXpCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBSb3csXG4gIENvbCxcbiAgVHlwb2dyYXBoeSxcbiAgQ2FyZCxcbiAgU2tlbGV0b24sXG4gIEljb24sXG4gIERpdmlkZXIsXG4gIEVtcHR5XG59IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9jb25maWdcIjtcbmNvbnN0IHsgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XG5cbmNvbnN0IEFib3V0ID0gKHsgYWJvdXQgfSkgPT4ge1xuICBjb25zdCBwcmVzaWRlbnRzID0gYWJvdXQuZmlsdGVyKHAgPT4gcC5wb3NpdGlvbiA9PT0gXCJwcmVzaWRlbnRcIik7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbjogXCI1JVwiIH19PlxuICAgICAgPFRpdGxlIGxldmVsPXsxfT7kuLvluK3lm6I8L1RpdGxlPlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBhbGlnbj1cIm1pZGRsZVwiIGp1c3RpZnk9XCJjZW50ZXJcIiBndXR0ZXI9e1szMiwgOF19PlxuICAgICAgICB7cHJlc2lkZW50cy5sZW5ndGggIT09IDAgPyAoXG4gICAgICAgICAgcHJlc2lkZW50cy5tYXAocCA9PiB7XG4gICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9e01hdGguZmxvb3IoMjQgLyBwcmVzaWRlbnRzLmxlbmd0aCl9PlxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNDAgfX1cbiAgICAgICAgICAgICAgICBjb3Zlcj17PGltZyBhbHQ9XCJleGFtcGxlXCIgc3JjPXtwLnBob3RvfSAvPn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUaXRsZSBsZXZlbD17Mn0+e3AubmFtZX08L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxNZXRhIHRpdGxlPXtwLnRpdGxlfSBkZXNjcmlwdGlvbj17cC5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9Db2w+O1xuICAgICAgICAgIH0pXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFNrZWxldG9uIC8+XG4gICAgICAgICl9XG4gICAgICA8L1Jvdz5cbiAgICAgIDxUaXRsZSBsZXZlbD17MX0+6YOo6ZeoPC9UaXRsZT5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8Um93IHR5cGU9XCJmbGV4XCIgYWxpZ249XCJ0b3BcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXtbMzIsIDhdfT5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0gc3R5bGU9e3sgbWluSGVpZ2h0OiAzMDAgfX0+XG4gICAgICAgICAgPENhcmQgYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxJY29uIHR5cGU9XCJjYWxlbmRhclwiIHN0eWxlPXt7IGZvbnRTaXplOiA2NCwgcGFkZGluZzogMzIgfX0gLz5cbiAgICAgICAgICAgIDxNZXRhXG4gICAgICAgICAgICAgIHRpdGxlPXs8VGl0bGUgbGV2ZWw9ezN9Pua0u+WKqOetluWIkumDqDwvVGl0bGU+fVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgICAgICAgXCLkuLvopoHotJ/otKPnrZbliJLmoKHlhoXlpJblpJrlp7/lpJrlvannmoTmtLvliqjvvIzkuLDlr4zlpKflrrbor77kvZnnlJ/mtLss5bm25LiU5L+D6L+b5qCh5YaF5a2m55Sf57uE57uH55qE6IGU6LCK5ZKM5Y+R5bGV6ZW/6L+c5ZCI5L2c5YWz57O744CC5pW05ZCI5a2m6IGU5Lya6LWE5rqQ77yM6ZuG5omA5pyJQ1NTQeaIkOWRmOS5i+WKm+etueWKnuWQhOexu+Wkp+Wei+aZmuS8mu+8jOS7peWPiue7hOe7h+eVmeWtpueUn+WWnOmXu+S5kOingeeahOaWh+WoseS9k+iCsuWSjOW/l+aEv+iAhea0u+WKqOOAglwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0gc3R5bGU9e3sgbWluSGVpZ2h0OiAzMDAgfX0+XG4gICAgICAgICAgPENhcmQgYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxJY29uIHR5cGU9XCJjYW1lcmFcIiBzdHlsZT17eyBmb250U2l6ZTogNjQsIHBhZGRpbmc6IDMyIH19IC8+XG4gICAgICAgICAgICA8TWV0YVxuICAgICAgICAgICAgICB0aXRsZT17PFRpdGxlIGxldmVsPXszfT7mlrDpl7vlqpLkvZPpg6g8L1RpdGxlPn1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgICAgICAgIFwi5a6j5Lyg6YOo5Li65a2m6IGU5ZKM5ZCE5rS75Yqo5Yi25L2c5b2i5byP5paw6aKW55qE5a6j5Lyg6LWE5paZ5ZKM5b2x5YOP6K6w5b2V77yM5a+55aSW5omp5aSn5a2m6IGU5b2x5ZON5Yqb44CC5a6j5Lyg5oiR6IGU55qE5omA5pyJ5rS75Yqo5ZKM6IqC55uu44CCXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfSBzdHlsZT17eyBtaW5IZWlnaHQ6IDMwMCB9fT5cbiAgICAgICAgICA8Q2FyZCBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgPEljb24gdHlwZT1cImNvZGVcIiBzdHlsZT17eyBmb250U2l6ZTogNjQsIHBhZGRpbmc6IDMyIH19IC8+XG4gICAgICAgICAgICA8TWV0YVxuICAgICAgICAgICAgICB0aXRsZT17PFRpdGxlIGxldmVsPXszfT7nvZHnu5zmioDmnK/pg6g8L1RpdGxlPn1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgICAgICAgIFwi6LSf6LSj5a6Y572R5ZKMQXBw55qE5byA5Y+R5Y+K5pu05paw77yM572R56uZ5ZCO5Y+w5Y+K5YW2bWFpbGxpc3TnmoTnu7TmiqTnrqHnkIbvvIzlubbkuJTkuLrlrabnlJ/kvJrlkITnsbvmtLvliqjmj5DkvpvmioDmnK/kuI7kurrlipvmlK/mjIHjgIJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTJ9IHN0eWxlPXt7IG1pbkhlaWdodDogMzAwIH19PlxuICAgICAgICAgIDxDYXJkIGJvcmRlcmVkPXtmYWxzZX0+XG4gICAgICAgICAgICA8SWNvbiB0eXBlPVwidGVhbVwiIHN0eWxlPXt7IGZvbnRTaXplOiA2NCwgcGFkZGluZzogMzIgfX0gLz5cbiAgICAgICAgICAgIDxNZXRhXG4gICAgICAgICAgICAgIHRpdGxlPXs8VGl0bGUgbGV2ZWw9ezN9PuWkluiBlOWFrOWFs+mDqDwvVGl0bGU+fVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgICAgICAgXCLkuLvopoHotJ/otKPkuI7moKHlhoXlpJbnpL7lm6LpmaLmoKHlu7rnq4voia/lpb3lhbPns7ss5L+d5oyB5Y+K5pe25Lqk5rWB5LiO5rKf6YCa44CC5Li65a2m55Sf5Lya5pel5bi45byA6ZSALCDlpKflnovmtLvliqjnrbnpm4bnu4/otLnku6Xkv53or4HlkITpobnmtLvliqjpobrliKnov5vooYzjgILku6PooajlrabnlJ/kvJos5L2c5Li65a2m55Sf5Lya5LiO5ZCE5aSn5ZWG5a62LOWqkuS9kyzljY7kurrnu4Tnu4fkuqTmtYHnmoTnqpflj6Ms5Li65bm/5aSn5Lit5Zu95a2m55Sf55qE6KGj6aOf5L2P6KGM5ZCE5pa56Z2i6LCL56aP5Yip44CC6LSf6LSj5aSn5Z6L5rS75Yqo55qE5a+55aSW6IGU57O7LOWMheaLrOiBlOezu+WYieWuvizliLbkvZzlj5HpgIHpgoDor7flh70s5a6J5o6S56S85Luq5o6l5b6F562J5bel5L2c44CCXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8VGl0bGUgbGV2ZWw9ezF9Pui1nuWKqeWVhumihOeVmTwvVGl0bGU+XG4gICAgICA8RW1wdHkgc3R5bGU9e3sgaGVpZ2h0OiAzMDAgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5BYm91dC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSX0vdXNlcnNgKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnNvbGUubG9nKGpzb24pXG4gIHJldHVybiB7IGFib3V0OiBqc29uIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/junlin/Desktop/LSU-CSSA-Offcial-WebSite/pages/about.js */"./pages/about.js");


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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });