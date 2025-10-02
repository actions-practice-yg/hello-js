/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 746:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 928:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const core = __nccwpck_require__(746);
const fs = __nccwpck_require__(896);
const path = __nccwpck_require__(928);

try {
  // Get inputs
  const whoToGreet = core.getInput('who-to-greet');
  const logFile = core.getInput('log-file');

  // Generate greeting
  const greeting = `Hello ${whoToGreet}!`;
  const time = new Date().toISOString();

  // Log to console
  core.info(greeting);
  core.info(`Greeting time: ${time}`);

  // Write to file
  const logPath = path.join(process.env.GITHUB_WORKSPACE, logFile);
  fs.appendFileSync(logPath, `${greeting} at ${time}\n`);

  // Set output
  core.setOutput('greeting-time', time);

  // Set a notice annotation
  core.notice(`Greeting logged to ${logFile}`);

} catch (error) {
  core.setFailed(error.message);
}
module.exports = __webpack_exports__;
/******/ })()
;