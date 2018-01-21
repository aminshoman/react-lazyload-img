(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["react-lazyload-img"] = factory(require("react"), require("react-dom"));
	else
		root["react-lazyload-img"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lazyloadImg = __webpack_require__(2);

	var _lazyloadImg2 = _interopRequireDefault(_lazyloadImg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _lazyloadImg2["default"];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = splitObject;
	/**
	 * 分离对象
	 * @param obj 需要分享的对象
	 * @param parts 指定的属性
	 * @return 得到一个包含两个对象的数组，第一个是包含指定属性的对象，另一个是包含剩下属性的对象
	 */
	function splitObject(obj, parts) {
	    var left = {};
	    var right = {};
	    Object.keys(obj).forEach(function (k) {
	        if (parts.indexOf(k) !== -1) {
	            left[k] = obj[k];
	        } else {
	            right[k] = obj[k];
	        }
	    });
	    return [left, right];
	}
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _react = __webpack_require__(3);

	var React = _interopRequireWildcard(_react);

	var _reactDom = __webpack_require__(4);

	var ReactDOM = _interopRequireWildcard(_reactDom);

	var _splitObject3 = __webpack_require__(1);

	var _splitObject4 = _interopRequireDefault(_splitObject3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var LazyLoadImg = function (_React$Component) {
	    _inherits(LazyLoadImg, _React$Component);

	    function LazyLoadImg() {
	        _classCallCheck(this, LazyLoadImg);

	        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

	        _this.state = {
	            visible: false,
	            viewport: {
	                top: window.pageYOffset,
	                height: window.innerHeight
	            }
	        };
	        _this.handleScroll = _this.handleScroll.bind(_this);
	        return _this;
	    }

	    LazyLoadImg.prototype.componentDidMount = function componentDidMount() {
	        document.addEventListener('scroll', this.handleScroll, false);
	        document.addEventListener('resize', this.handleScroll, false);
	        this.checkVisible();
	    };

	    LazyLoadImg.prototype.componentWillUnmount = function componentWillUnmount() {
	        document.removeEventListener('scroll', this.handleScroll);
	        document.removeEventListener('resize', this.handleScroll);
	    };

	    LazyLoadImg.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
	        if (!this.state.visible && prevState.viewport) {
	            this.checkVisible();
	        }
	    };

	    LazyLoadImg.prototype.checkVisible = function checkVisible() {
	        var ele = ReactDOM.findDOMNode(this.refs['img']);
	        var top = ele['y'];
	        var height = ele.offsetHeight;
	        var min = this.state.viewport.top;
	        var max = this.state.viewport.top + this.state.viewport.height;
	        var offset = height * 0.2;
	        if ((min + this.props.offset.min || 0) <= top + height - offset && top <= (max + this.props.offset.max || 0 - offset)) {
	            this.setState({
	                viewport: this.state.viewport,
	                visible: true
	            });
	        }
	    };

	    LazyLoadImg.prototype.handleScroll = function handleScroll(e) {
	        this.setState({
	            visible: this.state.visible,
	            viewport: {
	                top: window.pageYOffset,
	                height: window.innerHeight
	            }
	        });
	    };

	    LazyLoadImg.prototype.render = function render() {
	        if (!this.props.src) {
	            console.error('LazyLoadImg props "src" is required');
	        }
	        if (!this.props.placeholder) {
	            console.error('LazyLoadImg props "placeholder" is required');
	        }
	        var src = this.state.visible ? this.props.src : this.props.placeholder;

	        var _splitObject = (0, _splitObject4["default"])(this.props, ['src', 'placeholder']);

	        var _splitObject2 = _slicedToArray(_splitObject, 2);

	        var rest = _splitObject2[0];
	        var imgProps = _splitObject2[1];

	        return React.createElement('img', _extends({ ref: 'img', src: src }, imgProps));
	    };

	    return LazyLoadImg;
	}(React.Component);

	exports["default"] = LazyLoadImg;

	LazyLoadImg.defaultProps = {
	    placeholder: '',
	    offset: {
	        min: 0,
	        max: 0
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }
/******/ ])
});
;