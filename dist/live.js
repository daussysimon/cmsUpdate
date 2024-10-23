(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["StaticCmsCoreLive"] = factory(require("react"));
	else
		root["StaticCmsCoreLive"] = factory(root["react"]);
})(globalThis, (__WEBPACK_EXTERNAL_MODULE__156__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 156:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Data: () => (/* reexport */ live_Data),
  useData: () => (/* reexport */ useData)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(156);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/live/useData.tsx

function useData(value, path, preprocessor) {
  const [data, setData] = (0,external_react_.useState)(value);
  const isCms = (0,external_react_.useMemo)(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('useCmsData') === 'true';
  }, []);
  const onDataChange = (0,external_react_.useCallback)(async event => {
    if (!isCms || !path || event.data.message !== 'data:update') {
      return;
    }
    const {
      fieldPath,
      value
    } = event.data.value;
    if (fieldPath === path) {
      setData(preprocessor ? await preprocessor(value) : value);
    }
  }, [isCms, path, preprocessor]);
  (0,external_react_.useEffect)(() => {
    if (!isCms || typeof window === 'undefined') {
      return;
    }
    window.addEventListener('message', onDataChange);
    return () => {
      window.removeEventListener('message', onDataChange);
    };
  }, [isCms, onDataChange]);
  return data !== null && data !== void 0 ? data : value;
}
;// CONCATENATED MODULE: ./src/live/Data.tsx


const Data = ({
  path,
  value
}) => {
  const data = useData(value, path);
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, data);
};
/* harmony default export */ const live_Data = (Data);
;// CONCATENATED MODULE: ./src/live/index.ts


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=live.js.map