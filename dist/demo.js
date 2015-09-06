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
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Mask = __webpack_require__(2);
	
	var Demo = (function (_React$Component) {
	    _inherits(Demo, _React$Component);
	
	    function Demo(props) {
	        _classCallCheck(this, Demo);
	
	        _get(Object.getPrototypeOf(Demo.prototype), 'constructor', this).call(this, props);
	    }
	
	    _createClass(Demo, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	
	        // 以私有方式使用`mask`，要显示声明`Mask Component`,
	        // 参数通过`Component`的`props`实现
	    }, {
	        key: 'showPrivateMask',
	        value: function showPrivateMask() {
	            this.refs.m1.show();
	        }
	
	        // 以全局方式使用`mask`，不需要显示声明`Mask Component`,
	        // 参数通过`Mask.show(options)`实现
	    }, {
	        key: 'showGlobalMask',
	        value: function showGlobalMask() {
	            Mask.show({
	                opacity: 0.6,
	                // TODO
	                // onClick: () =>{
	                //     console.log('global mask click');
	                // },
	                onHide: function onHide() {
	                    console.log('global mask hide');
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'tP10' },
	                React.createElement(
	                    'h3',
	                    { className: 'tF18 tMB6', onClick: this.showPrivateMask.bind(this) },
	                    '点击打开私有mask'
	                ),
	                React.createElement(Mask, { ref: 'm1', className: 'm1' }),
	                React.createElement(
	                    'p',
	                    { className: 'tMB20 tF6' },
	                    '以私有方式使用`mask`，要显示声明`Mask Component`, 参数通过`Component`的`props`实现'
	                ),
	                React.createElement(
	                    'h3',
	                    { className: 'tF18 tMB6', onClick: this.showGlobalMask.bind(this) },
	                    '点击打开全局mask'
	                ),
	                React.createElement(
	                    'p',
	                    { className: 'tMB20 tF6' },
	                    '以全局方式使用`mask`，不需要显示声明`Mask Component`, 参数通过`Mask.show(options)`实现'
	                )
	            );
	        }
	    }]);
	
	    return Demo;
	})(React.Component);
	
	React.render(React.createElement(Demo, null), document.getElementById('TingleDemo'));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Mask Component for tingle
	 * @author gnosaij
	 *
	 * Copyright 2014-2015, Tingle Team, Alinw.
	 * All rights reserved.
	 */
	'use strict';
	
	module.exports = __webpack_require__(3);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Mask Component for tingle
	 * @author gnosaij
	 *
	 * Copyright 2014-2015, Tingle Team, Alinw.
	 * All rights reserved.
	 */
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Context = __webpack_require__(4);
	var classnames = __webpack_require__(9);
	
	var Mask = (function (_React$Component) {
	    _inherits(Mask, _React$Component);
	
	    function Mask(props) {
	        _classCallCheck(this, Mask);
	
	        _get(Object.getPrototypeOf(Mask.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            opacity: props.opacity,
	            zIndex: props.zIndex,
	            onHide: props.onHide,
	            closeable: props.closeable,
	            visible: props.visible
	        };
	    }
	
	    /*
	     options.onHide
	     options.onClick
	     options.opacity
	     */
	
	    _createClass(Mask, [{
	        key: 'show',
	        value: function show(options) {
	            var t = this;
	
	            options = options || {};
	
	            t.setState({
	                opacity: 'opacity' in options ? options.opacity : t.props.opacity,
	                zIndex: options.zIndex || t.props.zIndex,
	                onHide: options.onHide || t.props.onHide,
	                closeable: 'closeable' in options ? options.closeable : t.props.closeable,
	                visible: true
	            });
	        }
	    }, {
	        key: 'hide',
	        value: function hide(force) {
	            var t = this;
	            if (force || t.state.closeable) {
	                t.state.visible = false;
	                t.setState(t.state);
	                t.state.onHide.call(t);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var t = this;
	            var cls = classnames(_defineProperty({
	                tMask: true,
	                visible: t.state.visible
	            }, t.props.className, !!t.props.className));
	
	            return React.createElement('div', { ref: 'root', className: cls, style: {
	                    backgroundColor: 'rgba(19, 21, 26, ' + t.state.opacity + ')',
	                    opacity: t.state.visible ? 1 : 0,
	                    zIndex: t.state.zIndex
	                }, onClick: t.hide.bind(this, false) });
	        }
	    }]);
	
	    return Mask;
	})(React.Component);
	
	Mask.defaultProps = {
	    className: '',
	    zIndex: 1000,
	    opacity: 0.6,
	    visible: false,
	    onHide: Context.noop,
	    closeable: true
	};
	
	var WRAPPER_ID = '__TingleGlobalMask__';
	var doc = document;
	var wrapper = doc.getElementById(WRAPPER_ID);
	if (!wrapper) {
	    wrapper = doc.createElement('div');
	    wrapper.id = WRAPPER_ID;
	    doc.body.appendChild(wrapper);
	}
	
	Mask.global = null;
	Mask.show = function (options) {
	    // 只有首次全局调用时，才会创建全局实例
	    if (!Mask.global) {
	        var _wrapper = doc.getElementById(WRAPPER_ID);
	        if (!_wrapper) {
	            _wrapper = doc.createElement('div');
	            _wrapper.id = WRAPPER_ID;
	            doc.body.appendChild(_wrapper);
	        }
	        Mask.global = React.render(React.createElement(Mask, { closeable: false }), _wrapper);
	    }
	    Mask.global.show(options);
	};
	
	Mask.hide = function () {
	    Mask.global && Mask.global.hide(true);
	};
	
	Mask.displayName = "mask";
	
	module.exports = Mask;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Tingle Context
	 * The environment for tingle's initialization
	 * @author gnosaij
	 *
	 * Copyright 2014-2015, Tingle Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	module.exports = __webpack_require__(5);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Tingle Context
	 * The environment for tingle's initialization
	 * @author gnosaij
	 *
	 * Copyright 2014-2015, Tingle Team, Alinw.
	 * All rights reserved.
	 */
	'use strict';
	
	var _arguments = arguments;
	var win = window;
	var doc = document;
	// 引入环境检测模块
	var env = __webpack_require__(6);
	var classnames = __webpack_require__(7);
	
	// React的移动端touch事件初始化
	React.initializeTouchEvents(true);
	
	// 全局点击态初始化
	__webpack_require__(8).attach(doc.body);
	
	/**
	 * 对象扩展
	 * @param  {Object} receiver
	 * @param  {Object} supplier
	 * @return {Object} 扩展后的receiver对象
	 */
	var mixin = function mixin(receiver, supplier) {
	    if (Object.keys) {
	        Object.keys(supplier).forEach(function (property) {
	            Object.defineProperty(receiver, property, Object.getOwnPropertyDescriptor(supplier, property));
	        });
	    } else {
	        for (var property in supplier) {
	            if (supplier.hasOwnProperty(property)) {
	                receiver[property] = supplier[property];
	            }
	        }
	    }
	    return receiver;
	};
	
	/**
	 * 变换两个参数的函数到多个参数
	 * @param  {Function} fn 基函数
	 * @return {Function} 变换后的函数
	 * @demo
	 *      let add = (x, y) => { return x+y; }
	 *      add = redo(add);
	 *      add(1,2,3) => 6
	 */
	var redo = function redo(fn) {
	    return function () {
	        var args = _arguments;
	        var ret = fn(args[0], args[1]);
	        for (var i = 2, l = args.length; i < l; i++) {
	            ret = fn(ret, args[i]);
	        }
	        return ret;
	    };
	};
	
	/**
	 * 获取自增长id
	 * @return {Number}
	 */
	var tid = 0;
	var getTID = function getTID() {
	    return tid++;
	};
	
	/**
	 * rem system
	 * @TODO 这个闭包 + rem方法 + makePrivateRem方法的整合
	 */
	(function (docEl, fontEl) {
	    var dpr = win.devicePixelRatio || 1;
	
	    // 类似小米2 webView webkit版本是534及以下，避免闪屏
	    var matches = navigator.userAgent.match(/Android[\S\s]+AppleWebkit\/?(\d{3})/i);
	    if (matches && matches[1] <= 534) {
	        dpr = 1;
	    }
	
	    win.dpr = dpr;
	    docEl.setAttribute('data-dpr', dpr);
	    docEl.firstElementChild.appendChild(fontEl);
	
	    var setRem = function setRem() {
	        var docWidth = docEl.clientWidth;
	        win.rem = docWidth / 10;
	
	        // ZTE 中兴 ZTE U930_TD/1.0 Linux/2.6.39/Android/4.0Release/3.5.2012 Browser/AppleWebkit534.30
	        // 老机器bug rem计算不是标准=html fontsize
	        if (/ZTE U930_TD/.test(navigator.userAgent)) {
	            win.rem = win.rem * 1.13;
	        }
	
	        fontEl.innerHTML = 'html{font-size:' + win.rem + 'px!important}';
	    };
	
	    win.addEventListener('resize', function () {
	        // resize时立刻change,pad上刷屏明显
	        setRem();
	    }, false);
	    win.addEventListener('pageshow', function (e) {
	        if (e.persisted) {
	            setRem();
	        }
	    }, false);
	
	    setRem();
	})(doc.documentElement, doc.createElement('style'));
	
	var defaultArtBoardWidth = 750;
	
	var rem = function rem(px, artBoardWidth) {
	    artBoardWidth = artBoardWidth || defaultArtBoardWidth;
	    return px * 10 / artBoardWidth + 'rem';
	};
	
	var makePrivateRem = function makePrivateRem(artBoardWidth) {
	    return function (px) {
	        return rem(px, artBoardWidth);
	    };
	};
	
	/**
	 * Top namespace
	 */
	var Context = {
	    getTID: getTID,
	    mixin: redo(mixin),
	    noop: function noop(v) {
	        return v;
	    },
	    rem: rem,
	    makePrivateRem: makePrivateRem
	};
	
	Context.mixin(Context, env);
	
	/**
	 * 在body上添加环境检测的标识类className
	 */
	doc.documentElement.className = classnames(doc.documentElement.className.trim(), {
	    pc: env.is.pc,
	    mobile: env.is.mobile,
	    hairline: env.support.hairline
	});
	
	module.exports = Context;
	
	/**
	 * TODO: modernizr env
	 */

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Tingle Context
	 * The environment for tingle's initialization
	 * @author gnosaij
	 *
	 * Copyright 2014-2015, Tingle Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	var win = window;
	var doc = document;
	
	var ua = navigator.userAgent;
	var isMobile = !!ua.match(/mobile/i) || 'orientation' in win;
	var isPC = !isMobile;
	
	var supportTouch = ('ontouchstart' in window);
	var support3D = 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix();
	var supportHairline = (function () {
	    var support = false;
	    if (win.devicePixelRatio && devicePixelRatio >= 2) {
	        var testElem = doc.createElement('div');
	        testElem.style.border = '.5px solid transparent';
	        doc.body.appendChild(testElem);
	        if (testElem.offsetHeight == 1) {
	            // 0.5 + 0.5 = 1
	            support = true;
	        }
	        doc.body.removeChild(testElem);
	    }
	    return support;
	})();
	
	// 常量
	var TOUCH_START = supportTouch ? 'touchstart' : 'mousedown';
	var TOUCH_MOVE = supportTouch ? 'touchmove' : 'mousemove';
	var TOUCH_END = supportTouch ? 'touchend' : 'mouseup';
	var TOUCH_CANCEL = supportTouch ? 'touchcancel' : 'mouseup';
	
	var env = {
	    // 是什么环境
	    isPC: isPC,
	    isMobile: isMobile,
	
	    // 是否支持
	    support3D: support3D,
	    supportHairline: supportHairline,
	    supportTouch: supportTouch,
	
	    // 事件去差异
	    TOUCH_START: TOUCH_START,
	    TOUCH_MOVE: TOUCH_MOVE,
	    TOUCH_END: TOUCH_END,
	    TOUCH_CANCEL: TOUCH_CANCEL,
	    RESIZE: 'resize',
	
	    // 不建议使用
	    is: {
	        pc: isPC,
	        mobile: isMobile
	    },
	    support: {
	        '3d': support3D,
	        hairline: supportHairline,
	        touch: supportTouch
	    },
	    TOUCH: {
	        START: TOUCH_START,
	        MOVE: TOUCH_MOVE,
	        END: TOUCH_END,
	        CANCEL: TOUCH_CANCEL
	    }
	};
	
	module.exports = env;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	'use strict';
	
	(function () {
		'use strict';
	
		function classNames() {
	
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Tingle Context
	 * The environment for tingle's initialization
	 * @author yize
	 *
	 * Copyright 2014-2015, Tingle Team, Alinw.
	 * All rights reserved.
	 */
	
	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var env = __webpack_require__(6);
	var TOUCH_START = env.TOUCH_START;
	var TOUCH_END = env.TOUCH_END;
	var TOUCH_CANCEL = env.TOUCH_CANCEL;
	
	var TouchEffect = (function () {
	    /**
	     *
	     * @param layer
	     * @param options
	     */
	
	    function TouchEffect(layer, options) {
	        _classCallCheck(this, TouchEffect);
	
	        var t = this;
	        t.layer = layer;
	        t.options = options || {
	            selector: "tTE", // abbr. tTouchEffect
	            activeClass: "hover"
	        };
	        t.selector = t.options.selector;
	        t.activeClass = t.options.activeClass;
	        t.initEvent();
	    }
	
	    _createClass(TouchEffect, [{
	        key: "initEvent",
	        value: function initEvent() {
	            var t = this;
	            var layer = t.layer;
	
	            layer.addEventListener(TOUCH_START, t.onTouchStart.bind(t), false);
	            layer.addEventListener(TOUCH_END, t.onTouchEnd.bind(t), false);
	            layer.addEventListener(TOUCH_CANCEL, t.onTouchEnd.bind(t), false);
	        }
	    }, {
	        key: "onTouchStart",
	        value: function onTouchStart(event) {
	
	            var t = this;
	            var target = event.target;
	
	            while (target && target.classList && !target.classList.contains(t.selector)) {
	                target = target.parentNode;
	            }
	
	            if (target && target.classList && target.classList.contains(t.selector)) {
	                target.classList.add(t.activeClass);
	            }
	        }
	    }, {
	        key: "onTouchEnd",
	        value: function onTouchEnd(event) {
	
	            var t = this;
	            var target = event.target;
	
	            while (target && target.classList && !target.classList.contains(t.selector)) {
	                target = target.parentNode;
	            }
	
	            if (target && target.classList && target.classList.contains(t.selector)) {
	                target.classList.remove(t.activeClass);
	            }
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            var t = this;
	            var layer = t.layer;
	            layer.removeEventListener(TOUCH_START, t.onTouchStart.bind(t), false);
	            layer.removeEventListener(TOUCH_END, t.onTouchEnd.bind(t), false);
	            layer.removeEventListener(TOUCH_CANCEL, t.onTouchEnd.bind(t), false);
	        }
	    }]);
	
	    return TouchEffect;
	})();
	
	TouchEffect.attach = function (layer, options) {
	    return new TouchEffect(layer, options);
	};
	
	module.exports = TouchEffect;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	(function () {
		'use strict';
	
		function classNames () {
	
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
	
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
	
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	
	}());


/***/ }
/******/ ]);
//# sourceMappingURL=demo.js.map