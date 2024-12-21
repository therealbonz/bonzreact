"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["hello-world-bundle"],{

/***/ "./app/javascript/bundles/HelloWorld/components/HelloWorld.jsx":
/*!*********************************************************************!*\
  !*** ./app/javascript/bundles/HelloWorld/components/HelloWorld.jsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HelloWorld; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class HelloWorld extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  static propTypes = (() => ({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired // this is passed from the Rails view
  }))();

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = {
      name: this.props.name
    };
  }
  updateName = name => {
    this.setState({
      name
    });
  };
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Hello, ", this.state.name, "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      htmlFor: "name"
    }, "Say hello to:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      id: "name",
      type: "text",
      value: this.state.name,
      onChange: e => this.updateName(e.target.value)
    })));
  }
}

/***/ }),

/***/ "./app/javascript/packs/hello-world-bundle.js":
/*!****************************************************!*\
  !*** ./app/javascript/packs/hello-world-bundle.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_on_rails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-on-rails */ "./node_modules/react-on-rails/node_package/lib/ReactOnRails.js");
/* harmony import */ var react_on_rails__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_on_rails__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bundles_HelloWorld_components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bundles/HelloWorld/components/HelloWorld */ "./app/javascript/bundles/HelloWorld/components/HelloWorld.jsx");



// This is how react_on_rails can see the HelloWorld in the browser.
react_on_rails__WEBPACK_IMPORTED_MODULE_0___default().register({
  HelloWorld: _bundles_HelloWorld_components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-dom_index_js","vendors-node_modules_prop-types_index_js","vendors-node_modules_react-on-rails_node_package_lib_ReactOnRails_js"], function() { return __webpack_exec__("./app/javascript/packs/hello-world-bundle.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=hello-world-bundle.js.map