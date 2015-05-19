/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _src = __webpack_require__(3);
	
	// TODO: move the line to tingle-env
	_react2['default'].initializeTouchEvents(true);
	
	var Demo = (function (_React$Component) {
	    function Demo(props) {
	        _classCallCheck(this, Demo);
	
	        _get(Object.getPrototypeOf(Demo.prototype), 'constructor', this).call(this, props);
	    }
	
	    _inherits(Demo, _React$Component);
	
	    _createClass(Demo, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'showPrivateMask',
	
	        // 以私有方式使用`mask`，要显示声明`Mask Component`,
	        // 参数通过`Component`的`props`实现
	        value: function showPrivateMask() {
	            this.refs.m1.show();
	        }
	    }, {
	        key: 'showGlobalMask',
	
	        // 以全局方式使用`mask`，不需要显示声明`Mask Component`,
	        // 参数通过`Mask.global.show(options)`实现
	        value: function showGlobalMask() {
	            _src.Mask.global.show({
	                opacity: 0.2,
	                onHide: function onHide() {}
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'tP10' },
	                _react2['default'].createElement(
	                    'h3',
	                    { className: 'tF18 tMB6', onClick: this.showPrivateMask.bind(this) },
	                    '点击打开私有mask'
	                ),
	                _react2['default'].createElement(_src.Mask, { ref: 'm1', opacity: 0.5, className: 'm1' }),
	                _react2['default'].createElement(
	                    'p',
	                    { className: 'tMB20 tF6' },
	                    '以私有方式使用`mask`，要显示声明`Mask Component`, 参数通过`Component`的`props`实现'
	                ),
	                _react2['default'].createElement(
	                    'h3',
	                    { className: 'tF18 tMB6', onClick: this.showGlobalMask.bind(this) },
	                    '点击打开全局mask'
	                ),
	                _react2['default'].createElement(
	                    'p',
	                    { className: 'tMB20 tF6' },
	                    '以全局方式使用`mask`，不需要显示声明`Mask Component`, 参数通过`Mask.global.show(options)`实现'
	                )
	            );
	        }
	    }]);
	
	    return Demo;
	})(_react2['default'].Component);
	
	;
	
	_react2['default'].render(_react2['default'].createElement(Demo, null), document.getElementById('TingleDemo'));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Mask = (function (_React$Component) {
	    function Mask(props) {
	        _classCallCheck(this, Mask);
	
	        _get(Object.getPrototypeOf(Mask.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            opacity: props.opacity,
	            zIndex: props.zIndex,
	            onHide: props.onHide
	        };
	    }
	
	    _inherits(Mask, _React$Component);
	
	    _createClass(Mask, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.el = this.refs.el.getDOMNode();
	        }
	    }, {
	        key: 'show',
	
	        /*
	            options.onHide
	            options.onClick
	            options.opacity
	        */
	        value: function show(options) {
	            options = options || {};
	            var t = this;
	            t.el.classList.add('visible');
	            t.el.offsetWidth;
	            t.setState({
	                opacity: options.opacity || t.props.opacity,
	                onClick: options.onClick || t.props.onClick,
	                onHide: options.onHide || t.props.onHide
	            });
	            t.el.style.opacity = 1;
	        }
	    }, {
	        key: 'hide',
	        value: function hide() {
	            var t = this;
	            t.el.style.opacity = 0;
	            setTimeout(function () {
	                t.el.classList.remove('visible');
	                t.state.onHide.call(t);
	            }, 200);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var t = this;
	            var cls = _react2['default'].addons.classSet;
	
	            cls = cls(_defineProperty({
	                tMask: true }, t.props.className, !!t.props.className));
	
	            return _react2['default'].createElement('div', { ref: 'el', className: cls, style: {
	                    backgroundColor: 'rgba(0, 0, 0, ' + t.state.opacity + ')',
	                    zIndex: t.state.zIndex
	                }, onClick: t.hide.bind(this) });
	        }
	    }]);
	
	    return Mask;
	})(_react2['default'].Component);
	
	Mask.defaultProps = {
	    className: '',
	    zIndex: 1000,
	    opacity: 0,
	    visible: false,
	    onClick: function onClick() {},
	    onHide: function onHide() {}
	};
	
	Mask.global = _react2['default'].render(_react2['default'].createElement(Mask, null), document.getElementById('TingleMask'));
	
	exports.Mask = Mask;

/***/ }
/******/ ])
//# sourceMappingURL=demo.js.map