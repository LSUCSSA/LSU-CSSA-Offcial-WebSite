module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("he+7");


/***/ }),

/***/ "9/dJ":
/***/ (function(module, exports) {

module.exports = require("@phuocng/react-pdf-viewer");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "he+7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _phuocng_react_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9/dJ");
/* harmony import */ var _phuocng_react_pdf_viewer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_phuocng_react_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  Title
} = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"];

const NewComer = ({
  url
}) => {
  const {
    0: match,
    1: setMatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const mobile = window.matchMedia("(max-width: 600px)");

    const checkWidth = media => {
      if (media.matches) {
        setMatch(media.matches);
      } else {
        setMatch(false);
      }
    };

    checkWidth(mobile);
    mobile.addListener(checkWidth);
  });

  const renderToolbar = toolbarSlot => {
    return __jsx("div", {
      style: {
        alignItems: 'center',
        display: 'flex',
        width: '100%'
      }
    }, __jsx("div", {
      style: {
        padding: '0 2px'
      }
    }, toolbarSlot.toggleSidebarButton), __jsx("div", {
      style: {
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        justifyContent: 'center'
      }
    }, match ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      style: {
        padding: '0 2px'
      }
    }, toolbarSlot.previousPageButton), __jsx("div", {
      style: {
        padding: '0 2px'
      }
    }, toolbarSlot.currentPage + 1, " / ", toolbarSlot.numPages), __jsx("div", {
      style: {
        padding: '0 2px'
      }
    }, toolbarSlot.nextPageButton), __jsx("div", {
      style: {
        padding: '0 2px'
      }
    }, toolbarSlot.zoomOutButton), __jsx("div", {
      style: {
        padding: '0 2px'
      }
    }, toolbarSlot.zoomPopover), __jsx("div", {
      style: {
        padding: '0 2px'
      }
    }, toolbarSlot.zoomInButton)) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      style: {
        padding: '0 2px'
      }
    }, toolbarSlot.previousPageButton), __jsx("div", {
      style: {
        padding: '0 2px'
      }
    }, toolbarSlot.currentPage + 1, " / ", toolbarSlot.numPages), __jsx("div", {
      style: {
        padding: '0 2px'
      }
    }, toolbarSlot.nextPageButton), __jsx("div", {
      style: {
        padding: '0 2px'
      }
    }, toolbarSlot.zoomOutButton), __jsx("div", {
      style: {
        padding: '0 2px'
      }
    }, toolbarSlot.zoomPopover), __jsx("div", {
      style: {
        padding: '0 2px'
      }
    }, toolbarSlot.zoomInButton), __jsx("div", {
      style: {
        padding: '0 2px'
      }
    }, toolbarSlot.printButton), __jsx("div", {
      style: {
        padding: '0 2px'
      }
    }, toolbarSlot.fullScreenButton))));
  };

  const layout = (isSidebarOpened, container, main, toolbar, sidebar) => {
    return Object(_phuocng_react_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__["defaultLayout"])(isSidebarOpened, container, main, toolbar(renderToolbar), sidebar);
  };

  return __jsx("div", {
    style: {
      textAlign: 'center'
    }
  }, __jsx(Title, {
    level: 2
  }, "\u63A5\u673A\u7CFB\u7EDF"), __jsx("a", {
    target: "_blank",
    rel: "noopener noreferrer"
  }), __jsx(Title, {
    level: 2
  }, "\u65B0\u751F\u624B\u518C"), __jsx(_phuocng_react_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__["Worker"], {
    workerUrl: "https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js"
  }, __jsx("div", {
    className: "newcomer"
  }, __jsx(_phuocng_react_pdf_viewer__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fileUrl: `${"http://junlin-wate123.com/api" + url}`,
    defaultScale: _phuocng_react_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__["SpecialZoomLevel"].PageFit,
    layout: layout
  }))));
};

NewComer.getInitialProps = async () => {
  const res = await fetch(`${"http://junlin-wate123.com/api"}/newcomer-guide`);
  const pdfLink = await res.json();
  return {
    url: pdfLink.guideFileUrl
  };
};

/* harmony default export */ __webpack_exports__["default"] = (NewComer);

/***/ })

/******/ });