function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e105) { throw _e105; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e106) { didErr = true; err = _e106; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (ie, e) {
  "use strict";

  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat ? function (e) {
      return oe.flat.call(e);
    } : function (e) {
      return oe.concat.apply([], e);
    },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function v(e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    },
    y = function y(e) {
      return null != e && e === e.window;
    },
    C = ie.document,
    u = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement("script");
    if (o.text = e, t) for (r in u) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[i.call(e)] || "object" : _typeof(e);
  }
  var t = "3.7.1",
    l = /HTML$/i,
    ce = function ce(e, t) {
      return new ce.fn.init(e, t);
    };
  function c(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  ce.fn = ce.prototype = {
    jquery: t,
    constructor: ce,
    length: 0,
    toArray: function toArray() {
      return ae.call(this);
    },
    get: function get(e) {
      return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = ce.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return ce.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(ce.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(ae.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(ce.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(ce.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: oe.sort,
    splice: oe.splice
  }, ce.extend = ce.fn.extend = function () {
    var e,
      t,
      n,
      r,
      i,
      o,
      a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a;
  }, ce.extend({
    expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof (n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      m(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
        r = 0;
      if (c(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e;
    },
    text: function text(e) {
      var t,
        n = "",
        r = 0,
        i = e.nodeType;
      if (!i) while (t = e[r++]) n += ce.text(t);
      return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : se.call(t, e, n);
    },
    isXMLDoc: function isXMLDoc(e) {
      var t = e && e.namespaceURI,
        n = e && (e.ownerDocument || e).documentElement;
      return !l.test(t || n && n.nodeName || "HTML");
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map: function map(e, t, n) {
      var r,
        i,
        o = 0,
        a = [];
      if (c(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a);
    },
    guid: 1,
    support: le
  }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function (e, t) {
    var n = t && t.parentNode;
    return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
  }
  ce.escapeSelector = function (e) {
    return (e + "").replace(f, p);
  };
  var ye = C,
    me = s;
  !function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function l(e, t) {
        return e === t && (a = !0), 0;
      },
      f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
      g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i")
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function P(e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
      },
      M = function M() {
        V();
      },
      R = J(function (e) {
        return !0 === e.disabled && fe(e, "fieldset");
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType;
    } catch (e) {
      k = {
        apply: function apply(e, t) {
          me.apply(e, ae.call(t));
        },
        call: function call(e) {
          me.apply(e, ae.call(arguments, 1));
        }
      };
    }
    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && (V(e), e = e || T, C)) {
        if (11 !== p && (u = L.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return k.call(n, a), n;
          } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n;
        } else {
          if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n;
        }
        if (!(h[t + " "] || d && d.test(t))) {
          if (c = t, f = e, 1 === p && (x.test(t) || m.test(t))) {
            (f = H.test(t) && U(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length;
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
            c = l.join(",");
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            h(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r);
    }
    function W() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }
    function F(e) {
      return e[S] = !0, e;
    }
    function $(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, "input") && e.type === t;
      };
    }
    function _(t) {
      return function (e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t;
      };
    }
    function z(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && R(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }
    function X(a) {
      return F(function (o) {
        return o = +o, F(function (e, t) {
          var n,
            r = a([], e.length, o),
            i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
        });
      });
    }
    function U(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye;
      return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", M), le.getById = $(function (e) {
        return r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length;
      }), le.disconnectedMatch = $(function (e) {
        return i.call(e, "*");
      }), le.scope = $(function () {
        return T.querySelectorAll(":scope");
      }), le.cssHas = $(function () {
        try {
          return T.querySelector(":has(*,:jqfake)"), !1;
        } catch (e) {
          return !0;
        }
      }), le.getById ? (b.filter.ID = function (e) {
        var t = e.replace(O, P);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && C) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(O, P);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && C) {
          var n,
            r,
            i,
            o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;
            while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }
          return [];
        }
      }), b.find.TAG = function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
      }, b.find.CLASS = function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e);
      }, d = [], $(function (e) {
        var t;
        r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")");
      }), le.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), l = function l(e, t) {
        if (e === t) return a = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1);
      }), T;
    }
    for (e in I.matches = function (e, t) {
      return I(e, null, null, t);
    }, I.matchesSelector = function (e, t) {
      if (V(e), C && !h[t + " "] && (!d || !d.test(t))) try {
        var n = i.call(e, t);
        if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        h(t, !0);
      }
      return 0 < I(t, T, null, [e]).length;
    }, I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
    }, I.attr = function (e, t) {
      (e.ownerDocument || e) != T && V(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }, I.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) {
        while (t = e[i++]) t === e[i] && (r = n.push(i));
        while (r--) he.call(e, n[r], 1);
      }
      return o = null, e;
    }, ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }, (b = ce.expr = {
      cacheLength: 50,
      createPseudo: F,
      match: D,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(O, P), e[3] = (e[3] || e[4] || e[5] || "").replace(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
            n = !e[6] && e[2];
          return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(O, P).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return fe(e, t);
          };
        },
        CLASS: function CLASS(e) {
          var t = s[e + " "];
          return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = I.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(d, e, t, h, g) {
          var v = "nth" !== d.slice(0, 3),
            y = "last" !== d.slice(-4),
            m = "of-type" === e;
          return 1 === h && 0 === g ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u = v !== y ? "nextSibling" : "previousSibling",
              l = e.parentNode,
              c = m && e.nodeName.toLowerCase(),
              f = !n && !m,
              p = !1;
            if (l) {
              if (v) {
                while (u) {
                  o = e;
                  while (o = o[u]) if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                  s = u = "only" === d && !s && "nextSibling";
                }
                return !0;
              }
              if (s = [y ? l.firstChild : l.lastChild], y && f) {
                p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a];
                while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if (1 === o.nodeType && ++p && o === e) {
                  i[d] = [E, a, p];
                  break;
                }
              } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p) while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break;
              return (p -= g) === h || p % h == 0 && 0 <= p / h;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
            a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function (e, t) {
            var n,
              r = a(e, o),
              i = r.length;
            while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i]);
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: F(function (e) {
          var r = [],
            i = [],
            s = ne(e.replace(ve, "$1"));
          return s[S] ? F(function (e, t, n, r) {
            var i,
              o = s(e, null, r, []),
              a = e.length;
            while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: F(function (t) {
          return function (e) {
            return 0 < I(t, e).length;
          };
        }),
        contains: F(function (t) {
          return t = t.replace(O, P), function (e) {
            return -1 < (e.textContent || ce.text(e)).indexOf(t);
          };
        }),
        lang: F(function (n) {
          return A.test(n || "") || I.error("unsupported lang: " + n), n = n.replace(O, P).toLowerCase(), function (e) {
            var t;
            do {
              if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1;
          };
        }),
        target: function target(e) {
          var t = ie.location && ie.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === r;
        },
        focus: function focus(e) {
          return e === function () {
            try {
              return T.activeElement;
            } catch (e) {}
          }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: z(!1),
        disabled: z(!0),
        checked: function checked(e) {
          return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return q.test(e.nodeName);
        },
        input: function input(e) {
          return N.test(e.nodeName);
        },
        button: function button(e) {
          return fe(e, "input") && "button" === e.type || fe(e, "button");
        },
        text: function text(e) {
          var t;
          return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: X(function () {
          return [0];
        }),
        last: X(function (e, t) {
          return [t - 1];
        }),
        eq: X(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: X(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: X(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: X(function (e, t, n) {
          var r;
          for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
          return e;
        }),
        gt: X(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) b.pseudos[e] = B(e);
    for (e in {
      submit: !0,
      reset: !0
    }) b.pseudos[e] = _(e);
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(ve, " ")
        }), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break;
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++;
      return e.first ? function (e, t, n) {
        while (e = e[s]) if (1 === e.nodeType || c) return a(e, t, n);
        return !1;
      } : function (e, t, n) {
        var r,
          i,
          o = [E, f];
        if (n) {
          while (e = e[s]) if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
        } else while (e = e[s]) if (1 === e.nodeType || c) if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e;else {
          if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2];
          if ((i[l] = o)[2] = a(e, t, n)) return !0;
        }
        return !1;
      };
    }
    function K(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--) if (!i[r](e, t, n)) return !1;
        return !0;
      } : i[0];
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a;
    }
    function ee(d, h, g, v, y, e) {
      return v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(function (e, t, n, r) {
        var i,
          o,
          a,
          s,
          u = [],
          l = [],
          c = t.length,
          f = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
            return n;
          }(h || "*", n.nodeType ? [n] : n, []),
          p = !d || !e && h ? f : Z(f, u, d, n, r);
        if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) {
          i = Z(s, l), v(i, [], n, r), o = i.length;
          while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = s.length;
              while (o--) (a = s[o]) && i.push(p[o] = a);
              y(null, s = [], i, r);
            }
            o = s.length;
            while (o--) (a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a));
          }
        } else s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s);
      });
    }
    function te(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function (e) {
          return e === i;
        }, a, !0), l = J(function (e) {
          return -1 < se.call(i, e);
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r;
        }]; s < r; s++) if (t = b.relative[e[s].type]) c = [J(K(c), t)];else {
        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
          for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
          return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({
            value: " " === e[s - 2].type ? "*" : ""
          })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e));
        }
        c.push(t);
      }
      return K(c);
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + " "];
      if (!a) {
        t || (t = Y(e)), n = t.length;
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
            a,
            s,
            u = 0,
            l = "0",
            c = e && [],
            f = [],
            p = w,
            d = e || x && b.find.TAG("*", i),
            h = E += null == p ? 1 : Math.random() || .1,
            g = d.length;
          for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == T || (V(o), n = !C);
              while (s = v[a++]) if (s(o, t || T, n)) {
                k.call(_r, o);
                break;
              }
              i && (E = h);
            }
            m && ((o = !s && o) && u--, e && c.push(o));
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) s(c, f, t, n);
            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(_r));
              f = Z(f);
            }
            k.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(_r);
          }
          return i && (E = h, w = p), c;
        }, m ? F(r) : r))).selector = e;
      }
      return a;
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && Y(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && U(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && Q(o))) return k.apply(n, r), n;
            break;
          }
        }
      }
      return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && U(t.parentNode) || t), n;
    }
    G.prototype = b.filters = b.pseudos, b.setFilters = new G(), le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function (e) {
      return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
    }), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.tokenize = Y, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort;
  }();
  var d = function d(e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
        if (i && ce(e).is(n)) break;
        r.push(e);
      }
      return r;
    },
    h = function h(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e, n, r) {
    return v(n) ? ce.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? ce.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? ce.grep(e, function (e) {
      return -1 < se.call(n, e) !== r;
    }) : ce.filter(n, e, r);
  }
  ce.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, ce.fn.extend({
    find: function find(e) {
      var t,
        n,
        r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(ce(e).filter(function () {
        for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
      return 1 < r ? ce.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(T(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(T(this, e || [], !0));
    },
    is: function is(e) {
      return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length;
    }
  });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (ce.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || k, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this);
  }).prototype = ce.fn, k = ce(C);
  var E = /^(?:parents|prev(?:Until|All))/,
    j = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  ce.fn.extend({
    has: function has(e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
      });
    },
    closest: function closest(e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ce(e);
      if (!b.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), ce.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return d(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return d(e, "parentNode", n);
    },
    next: function next(e) {
      return A(e, "nextSibling");
    },
    prev: function prev(e) {
      return A(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return d(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return d(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return d(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return d(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return h((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return h(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes));
    }
  }, function (r, i) {
    ce.fn[r] = function (e, t) {
      var n = ce.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function L(e, t, n, r) {
    var i;
    try {
      e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  ce.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function (e, t) {
      n[t] = !0;
    }), n) : ce.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function c() {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
        r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
      },
      f = {
        add: function add() {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            ce.each(e, function (e, t) {
              v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t);
            });
          }(arguments), t && !i && c()), this;
        },
        remove: function remove() {
          return ce.each(arguments, function (e, t) {
            var n;
            while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
          }), this;
        },
        has: function has(e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length;
        },
        empty: function empty() {
          return s && (s = []), this;
        },
        disable: function disable() {
          return a = u = [], s = t = "", this;
        },
        disabled: function disabled() {
          return !s;
        },
        lock: function lock() {
          return a = u = [], t || i || (s = t = ""), this;
        },
        locked: function locked() {
          return !!a;
        },
        fireWith: function fireWith(e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
        },
        fire: function fire() {
          return f.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!o;
        }
      };
    return f;
  }, ce.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]],
        i = "pending",
        a = {
          state: function state() {
            return i;
          },
          always: function always() {
            return s.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return a.then(null, e);
          },
          pipe: function pipe() {
            var i = arguments;
            return ce.Deferred(function (r) {
              ce.each(o, function (e, t) {
                var n = v(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                });
              }), i = null;
            }).promise();
          },
          then: function then(t, n, r) {
            var u = 0;
            function l(i, o, a, s) {
              return function () {
                var n = this,
                  r = arguments,
                  e = function e() {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                    }
                  },
                  t = s ? e : function () {
                    try {
                      e();
                    } catch (e) {
                      ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r));
                    }
                  };
                i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t));
              };
            }
            return ce.Deferred(function (e) {
              o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? ce.extend(e, a) : a;
          }
        },
        s = {};
      return ce.each(o, function (e, t) {
        var n = t[2],
          r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
        t = n,
        r = Array(t),
        i = ae.call(arguments),
        o = ce.Deferred(),
        a = function a(t) {
          return function (e) {
            r[t] = this, i[t] = 1 < arguments.length ? ae.call(arguments) : e, --n || o.resolveWith(r, i);
          };
        };
      if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
      while (t--) L(i[t], a(t), o.reject);
      return o.promise();
    }
  });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ce.Deferred.exceptionHook = function (e, t) {
    ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, ce.readyException = function (e) {
    ie.setTimeout(function () {
      throw e;
    });
  };
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready();
  }
  ce.fn.ready = function (e) {
    return O.then(e)["catch"](function (e) {
      ce.readyException(e);
    }), this;
  }, ce.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce]);
    }
  }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
  var M = function M(e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n)) for (s in i = !0, n) M(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
        return l.call(ce(e), n);
      })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    R = /^-ms-/,
    I = /-([a-z])/g;
  function W(e, t) {
    return t.toUpperCase();
  }
  function F(e) {
    return e.replace(R, "ms-").replace(I, W);
  }
  var $ = function $(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  B.uid = 1, B.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
        i = this.cache(e);
      if ("string" == typeof t) i[F(t)] = n;else for (r in t) i[F(r)] = t[r];
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
        r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length;
          while (n--) delete r[t[n]];
        }
        (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !ce.isEmptyObject(t);
    }
  };
  var _ = new B(),
    z = new B(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g;
  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i);
      } catch (e) {}
      z.set(e, t, n);
    } else n = void 0;
    return n;
  }
  ce.extend({
    hasData: function hasData(e) {
      return z.hasData(e) || _.hasData(e);
    },
    data: function data(e, t, n) {
      return z.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      z.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return _.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      _.remove(e, t);
    }
  }), ce.fn.extend({
    data: function data(n, e) {
      var t,
        r,
        i,
        o = this[0],
        a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = z.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r]));
          _.set(o, "hasDataAttrs", !0);
        }
        return i;
      }
      return "object" == _typeof(n) ? this.each(function () {
        z.set(this, n);
      }) : M(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
        this.each(function () {
          z.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        z.remove(this, e);
      });
    }
  }), ce.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";
      var n = ce.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = ce._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        ce.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return _.get(e, n) || _.access(e, n, {
        empty: ce.Callbacks("once memory").add(function () {
          _.remove(e, [t + "queue", n]);
        })
      });
    }
  }), ce.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = ce.queue(this, t, n);
        ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        ce.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
        r = 1,
        i = ce.Deferred(),
        o = this,
        a = this.length,
        s = function s() {
          --r || i.resolveWith(o, [o]);
        };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--) (n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t);
    }
  });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function K(e) {
      return ce.contains(e.ownerDocument, e);
    },
    Z = {
      composed: !0
    };
  J.getRootNode && (K = function K(e) {
    return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument;
  });
  var ee = function ee(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display");
  };
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r ? function () {
        return r.cur();
      } : function () {
        return ce.css(e, t, "");
      },
      u = s(),
      l = n && n[3] || (ce.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, ce.style(e, t, c + l), n = n || [];
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = _.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ce.fn.extend({
    show: function show() {
      return re(this, !0);
    },
    hide: function hide() {
      return re(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ee(this) ? ce(this).show() : ce(this).hide();
      });
    }
  });
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  function Se(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n;
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
  }
  ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);else if (je.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      ce.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
    } else p.push(t.createTextNode(o));
    f.textContent = "", d = 0;
    while (o = p[d++]) if (r && -1 < ce.inArray(o, r)) i && i.push(o);else if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) {
      c = 0;
      while (o = a[c++]) Ce.test(o.type || "") && n.push(o);
    }
    return f;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Le(e, t, n, r, i, o) {
    var a, s;
    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return ce().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = ce.guid++)), e.each(function () {
      ce.event.add(this, t, i, r, n);
    });
  }
  function He(e, r, t) {
    t ? (_.set(e, r, !1), ce.event.add(e, r, {
      namespace: !1,
      handler: function handler(e) {
        var t,
          n = _.get(this, r);
        if (1 & e.isTrigger && this[r]) {
          if (n) (ce.event.special[r] || {}).delegateType && e.stopPropagation();else if (n = ae.call(arguments), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t;
        } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne);
      }
    })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
  }
  ce.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.get(t);
      if ($(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(D) || [""]).length;
        while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && ce.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0);
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length;
        while (l--) if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
          f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
          while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d]);
        } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = ce.event.handlers.call(this, u, l), t = 0;
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r);
        o.length && s.push({
          elem: l,
          handlers: o
        });
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[ce.expando] ? e : new ce.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, ce.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, ce.Event = function (e, t) {
    if (!(this instanceof ce.Event)) return new ce.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0;
  }, ce.Event.prototype = {
    constructor: ce.Event,
    isDefaultPrevented: qe,
    isPropagationStopped: qe,
    isImmediatePropagationStopped: qe,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, ce.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, ce.event.addProp), ce.each({
    focus: "focusin",
    blur: "focusout"
  }, function (r, i) {
    function o(e) {
      if (C.documentMode) {
        var t = _.get(this, "handle"),
          n = ce.event.fix(e);
        n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n);
      } else ce.event.simulate(i, e.target, ce.event.fix(e));
    }
    ce.event.special[r] = {
      setup: function setup() {
        var e;
        if (He(this, r, !0), !C.documentMode) return !1;
        (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1);
      },
      trigger: function trigger() {
        return He(this, r), !0;
      },
      teardown: function teardown() {
        var e;
        if (!C.documentMode) return !1;
        (e = _.get(this, i) - 1) ? _.set(this, i, e) : (this.removeEventListener(i, o), _.remove(this, i));
      },
      _default: function _default(e) {
        return _.get(e.target, r);
      },
      delegateType: i
    }, ce.event.special[i] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
          t = C.documentMode ? this : e,
          n = _.get(t, i);
        n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
          t = C.documentMode ? this : e,
          n = _.get(t, i) - 1;
        n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i));
      }
    };
  }), ce.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    ce.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
          n = e.relatedTarget,
          r = e.handleObj;
        return n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), ce.fn.extend({
    on: function on(e, t, n, r) {
      return Le(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Le(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == _typeof(e)) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function () {
        ce.event.remove(this, e, n, t);
      });
    }
  });
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e, t) {
    return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e;
  }
  function Ie(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }
  function We(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }
  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events)) for (i in _.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      z.hasData(e) && (o = z.access(e), a = ce.extend({}, o), z.set(t, a));
    }
  }
  function $e(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d);
    if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
    });
    if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++) u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c);
      if (s) for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++) u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {
        nonce: u.nonce || u.getAttribute("nonce")
      }, l) : m(u.textContent.replace(Me, ""), u, l));
    }
    return n;
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  ce.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e);
      if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e))) for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t) if (n) for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);else Fe(e, c);
      return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++) if ($(n)) {
        if (t = n[_.expando]) {
          if (t.events) for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
          n[_.expando] = void 0;
        }
        n[z.expando] && (n[z.expando] = void 0);
      }
    }
  }), ce.fn.extend({
    detach: function detach(e) {
      return Be(this, e, !0);
    },
    remove: function remove(e) {
      return Be(this, e);
    },
    text: function text(e) {
      return M(this, function (e) {
        return void 0 === e ? ce.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return $e(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return $e(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Re(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return $e(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return $e(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = "");
      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return ce.clone(this, e, t);
      });
    },
    html: function html(e) {
      return M(this, function (e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = ce.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e);
            t = 0;
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return $e(this, arguments, function (e) {
        var t = this.parentNode;
        ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), ce.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    ce.fn[e] = function (e) {
      for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get());
      return this.pushStack(n);
    };
  });
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    ze = /^--/,
    Xe = function Xe(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = ie), t.getComputedStyle(e);
    },
    Ue = function Ue(e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) o[i] = e.style[i], e.style[i] = t[i];
      for (i in r = n.call(e), t) e.style[i] = o[i];
      return r;
    },
    Ve = new RegExp(Q.join("|"), "i");
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = ze.test(t),
      u = e.style;
    return (n = n || Xe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a;
  }
  function Ye(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u).appendChild(l);
        var e = ie.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null;
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement("div"),
      l = C.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a;
      }
    }));
  }();
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {};
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return t || (e in Je ? e : Ke[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
        n = Qe.length;
      while (n--) if ((e = Qe[n] + t) in Je) return e;
    }(e) || e);
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    nt = {
      letterSpacing: "0",
      fontWeight: "400"
    };
  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i), "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l;
  }
  function ot(e, t, n) {
    var r = Xe(e),
      i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r),
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Ge(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = ze.test(t),
          l = e.style;
        if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
        o,
        a,
        s = F(t);
      return ze.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), ce.each(["height", "width"], function (e, u) {
    ce.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : Ue(e, tt, function () {
          return ot(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
          i = Xe(e),
          o = !le.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
          s = n ? it(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s);
      }
    };
  }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), ce.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    ce.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
        return n;
      }
    }, "margin" !== i && (ce.cssHooks[i + o].set = rt);
  }), ce.fn.extend({
    css: function css(e, t) {
      return M(this, function (e, t, n) {
        var r,
          i,
          o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
          return o;
        }
        return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((ce.Tween = at).prototype = {
    constructor: at,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = at.propHooks[this.prop];
      return e && e.get ? e.get(this) : at.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
        n = at.propHooks[this.prop];
      return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this;
    }
  }).init.prototype = at.prototype, (at.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = at.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, ce.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, ce.fx = at.prototype.init, ce.fx.step = {};
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick());
  }
  function ht() {
    return ie.setTimeout(function () {
      st = void 0;
    }), st = Date.now();
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Q[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function vt(e, t, n) {
    for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem;
      }),
      u = function u() {
        if (a) return !1;
        for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(!0, {
          specialEasing: {},
          easing: ce.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function createTween(e, t) {
          var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n;
        },
        stop: function stop(e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
        }
      }),
      c = l.props;
    for (!function (e, t) {
      var n, r, i, o, a;
      for (n in e) if (i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) (n in e) || (e[n] = o[n], t[n] = i);else t[r] = i;
    }(c, l.opts.specialEasing); r < i; r++) if (n = yt.prefilters[r].call(l, o, c, l.opts)) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }
  ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return te(n.elem, e, Y.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      v(e) ? (t = e, e = ["*"]) : e = e.match(D);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t);
    },
    prefilters: [function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ee(e),
        v = _.get(e, "fxshow");
      for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, ce.queue(e, "fx").length || a.empty.fire();
        });
      })), t) if (i = t[r], ft.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0;
        }
        d[r] = v && v[r] || ce.style(e, r);
      }
      if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", {
        display: l
      }), o && (v.hidden = !g), g && re([e], !0), p.done(function () {
        for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r]);
      })), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
    }],
    prefilter: function prefilter(e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    }
  }), ce.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? ce.extend({}, e) : {
      complete: n || !n && t || v(e) && e,
      duration: e,
      easing: n && t || t && !v(t) && t
    };
    return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
    }, r;
  }, ce.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ee).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = ce.isEmptyObject(t),
        o = ce.speed(e, n, r),
        a = function a() {
          var e = yt(this, ce.extend({}, t), o);
          (i || _.get(this, "finish")) && e.stop(!0);
        };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };
      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
          t = null != i && i + "queueHooks",
          n = ce.timers,
          r = _.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || ce.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
          t = _.get(this),
          n = t[a + "queue"],
          r = t[a + "queueHooks"],
          i = ce.timers,
          o = n ? n.length : 0;
        for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish;
      });
    }
  }), ce.each(["toggle", "show", "hide"], function (e, r) {
    var i = ce.fn[r];
    ce.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n);
    };
  }), ce.each({
    slideDown: gt("show"),
    slideUp: gt("hide"),
    slideToggle: gt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    ce.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), ce.timers = [], ce.fx.tick = function () {
    var e,
      t = 0,
      n = ce.timers;
    for (st = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || ce.fx.stop(), st = void 0;
  }, ce.fx.timer = function (e) {
    ce.timers.push(e), ce.fx.start();
  }, ce.fx.interval = 13, ce.fx.start = function () {
    ut || (ut = !0, dt());
  }, ce.fx.stop = function () {
    ut = null;
  }, ce.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, ce.fn.delay = function (r, e) {
    return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = ie.setTimeout(e, r);
      t.stop = function () {
        ie.clearTimeout(n);
      };
    });
  }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
  var mt,
    xt = ce.expr.attrHandle;
  ce.fn.extend({
    attr: function attr(e, t) {
      return M(this, ce.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        ce.removeAttr(this, e);
      });
    }
  }), ce.extend({
    attr: function attr(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!le.radioValue && "radio" === t && fe(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
        r = 0,
        i = t && t.match(D);
      if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
    }
  }), mt = {
    set: function set(e, t, n) {
      return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = xt[t] || ce.find.attr;
    xt[t] = function (e, t, n) {
      var r,
        i,
        o = t.toLowerCase();
      return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r;
    };
  });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(D) || []).join(" ");
  }
  function Ct(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }
  function kt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || [];
  }
  ce.fn.extend({
    prop: function prop(e, t) {
      return M(this, ce.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e];
      });
    }
  }), ce.extend({
    prop: function prop(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, i = ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = ce.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), le.optSelected || (ce.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    ce.propFix[this.toLowerCase()] = this;
  }), ce.fn.extend({
    addClass: function addClass(t) {
      var e, n, r, i, o, a;
      return v(t) ? this.each(function (e) {
        ce(this).addClass(t.call(this, e, Ct(this)));
      }) : (e = kt(t)).length ? this.each(function () {
        if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
          for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
          a = Tt(n), r !== a && this.setAttribute("class", a);
        }
      }) : this;
    },
    removeClass: function removeClass(t) {
      var e, n, r, i, o, a;
      return v(t) ? this.each(function (e) {
        ce(this).removeClass(t.call(this, e, Ct(this)));
      }) : arguments.length ? (e = kt(t)).length ? this.each(function () {
        if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
          for (o = 0; o < e.length; o++) {
            i = e[o];
            while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ");
          }
          a = Tt(n), r !== a && this.setAttribute("class", a);
        }
      }) : this : this.attr("class", "");
    },
    toggleClass: function toggleClass(t, n) {
      var e,
        r,
        i,
        o,
        a = _typeof(t),
        s = "string" === a || Array.isArray(t);
      return v(t) ? this.each(function (e) {
        ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
      }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function () {
        if (s) for (o = ce(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);else void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""));
      }));
    },
    hasClass: function hasClass(e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0;
      return !1;
    }
  });
  var St = /\r/g;
  ce.fn.extend({
    val: function val(n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length ? (i = v(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0;
    }
  }), ce.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = ce.find.attr(e, "value");
          return null != t ? t : Tt(ce.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
            n,
            r,
            i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
            if (t = ce(n).val(), a) return t;
            s.push(t);
          }
          return s;
        },
        set: function set(e, t) {
          var n,
            r,
            i = e.options,
            o = ce.makeArray(t),
            a = i.length;
          while (a--) ((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), ce.each(["radio", "checkbox"], function () {
    ce.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < ce.inArray(ce(e).val(), t);
      }
    }, le.checkOn || (ce.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var Et = ie.location,
    jt = {
      guid: Date.now()
    },
    At = /\?/;
  ce.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new ie.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function Nt(e) {
      e.stopPropagation();
    };
  ce.extend(ce.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !y(n)) {
          for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
          a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = ce.extend(new ce.Event(), n, {
        type: e,
        isSimulated: !0
      });
      ce.event.trigger(r, null, t);
    }
  }), ce.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        ce.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return ce.event.trigger(e, t, n, !0);
    }
  });
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) ce.each(e, function (e, t) {
      r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== x(e)) i(n, e);else for (t in e) Pt(n + "[" + t + "]", e[t], r, i);
  }
  ce.param = function (e, t) {
    var n,
      r = [],
      i = function i(e, t) {
        var n = v(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) Pt(n, e[n], t, i);
    return r.join("&");
  }, ce.fn.extend({
    serialize: function serialize() {
      return ce.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = ce.prop(this, "elements");
        return e ? ce.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e));
      }).map(function (e, t) {
        var n = ce(this).val();
        return null == n ? null : Array.isArray(n) ? ce.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Lt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Lt, "\r\n")
        };
      }).get();
    }
  });
  var Mt = /%20/g,
    Rt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    zt = "*/".concat("*"),
    Xt = C.createElement("a");
  function Ut(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;
    function l(e) {
      var r;
      return s[e] = !0, ce.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }
    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ce.extend(!0, e, r), e;
  }
  Xt.href = Et.href, ce.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": zt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": ce.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
    },
    ajaxPrefilter: Ut(Bt),
    ajaxTransport: Ut(_t),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
        f,
        p,
        n,
        d,
        r,
        h,
        g,
        i,
        o,
        v = ce.ajaxSetup({}, t),
        y = v.context || v,
        m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
        x = ce.Deferred(),
        b = ce.Callbacks("once memory"),
        w = v.statusCode || {},
        a = {},
        s = {},
        u = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;
            if (h) {
              if (!n) {
                n = {};
                while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = n[e.toLowerCase() + " "];
            }
            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return h ? p : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == h && (v.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (h) T.always(e[T.status]);else for (t in e) w[t] = [w[t], e[t]];
            return this;
          },
          abort: function abort(e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this;
          }
        };
      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""], null == v.crossDomain) {
        r = C.createElement("a");
        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }
      if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T;
      for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Rt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = ie.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));
        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");
      function l(e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = t;
        h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }
              a || (a = i);
            }
            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
              !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
              break;
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
              t = a(t);
            } catch (e) {
              return {
                state: "parsererror",
                error: a ? e : "No conversion from " + u + " to " + o
              };
            }
          }
          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop")));
      }
      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return ce.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return ce.get(e, void 0, t, "script");
    }
  }), ce.each(["get", "post"], function (e, i) {
    ce[i] = function (e, t, n, r) {
      return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, ce.isPlainObject(e) && e));
    };
  }), ce.ajaxPrefilter(function (e) {
    var t;
    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
  }), ce._evalUrl = function (e, t, n) {
    return ce.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        ce.globalEval(e, t, n);
      }
    });
  }, ce.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return v(n) ? this.each(function (e) {
        ce(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = ce(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = v(t);
      return this.each(function (e) {
        ce(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        ce(this).replaceWith(this.childNodes);
      }), this;
    }
  }), ce.expr.pseudos.hidden = function (e) {
    return !ce.expr.pseudos.visible(e);
  }, ce.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, ce.ajaxSettings.xhr = function () {
    try {
      return new ie.XMLHttpRequest();
    } catch (e) {}
  };
  var Yt = {
      0: 200,
      1223: 204
    },
    Qt = ce.ajaxSettings.xhr();
  le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function (i) {
    var _o, a;
    if (le.cors || Qt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
          r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && ie.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");
        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), ce.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), ce.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return ce.globalEval(e), e;
      }
    }
  }), ce.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), ce.ajaxTransport("script", function (n) {
    var r, _i2;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = ce("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i2 = function i(e) {
          r.remove(), _i2 = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), C.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i2 && _i2();
      }
    };
  });
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++;
      return this[e] = !0, e;
    }
  }), ce.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
      i,
      o,
      a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || ce.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = ie[r], ie[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
    var r, i, o;
  }, ce.fn.load = function (e, t, n) {
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(" ");
    return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && ce.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, ce.expr.pseudos.animated = function (t) {
    return ce.grep(ce.timers, function (e) {
      return t === e.elem;
    }).length;
  }, ce.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l = ce.css(e, "position"),
        c = ce(e),
        f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = ce.css(e, "top"), u = ce.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, ce.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        ce.offset.setOffset(this, t, e);
      });
      var e,
        n,
        r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
          t,
          n,
          r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - ce.css(r, "marginTop", !0),
          left: t.left - i.left - ce.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
        return e || J;
      });
    }
  }), ce.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;
    ce.fn[t] = function (e) {
      return M(this, function (e, t, n) {
        var r;
        if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), ce.each(["top", "left"], function (e, n) {
    ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
      if (t) return t = Ge(e, n), _e.test(t) ? ce(e).position()[n] + "px" : t;
    });
  }), ce.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    ce.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      ce.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
          i = r || (!0 === e || !0 === t ? "margin" : "border");
        return M(this, function (e, t, n) {
          var r;
          return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    ce.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), ce.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.on("mouseenter", e).on("mouseleave", t || e);
    }
  }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    ce.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  ce.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(ae.call(arguments)));
    }).guid = e.guid = e.guid || ce.guid++, i;
  }, ce.holdReady = function (e) {
    e ? ce.readyWait++ : ce.ready(!0);
  }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function (e) {
    var t = ce.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, ce.trim = function (e) {
    return null == e ? "" : (e + "").replace(en, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ce;
  });
  var tn = ie.jQuery,
    nn = ie.$;
  return ce.noConflict = function (e) {
    return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce;
  }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce;
});

/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
}(this, function () {
  "use strict";

  var t = new Map(),
    e = {
      set: function set(e, i, n) {
        t.has(e) || t.set(e, new Map());
        var s = t.get(e);
        s.has(i) || 0 === s.size ? s.set(i, n) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(s.keys())[0], "."));
      },
      get: function get(e, i) {
        return t.has(e) && t.get(e).get(i) || null;
      },
      remove: function remove(e, i) {
        if (!t.has(e)) return;
        var n = t.get(e);
        n["delete"](i), 0 === n.size && t["delete"](e);
      }
    },
    i = "transitionend",
    n = function n(t) {
      return t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, function (t, e) {
        return "#".concat(CSS.escape(e));
      })), t;
    },
    s = function s(t) {
      t.dispatchEvent(new Event(i));
    },
    o = function o(t) {
      return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
    },
    r = function r(t) {
      return o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null;
    },
    a = function a(t) {
      if (!o(t) || 0 === t.getClientRects().length) return !1;
      var e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
      if (!i) return e;
      if (i !== t) {
        var _e2 = t.closest("summary");
        if (_e2 && _e2.parentNode !== i) return !1;
        if (null === _e2) return !1;
      }
      return e;
    },
    l = function l(t) {
      return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
    },
    c = function c(t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        var _e3 = t.getRootNode();
        return _e3 instanceof ShadowRoot ? _e3 : null;
      }
      return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null;
    },
    h = function h() {},
    d = function d(t) {
      t.offsetHeight;
    },
    u = function u() {
      return window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null;
    },
    f = [],
    p = function p() {
      return "rtl" === document.documentElement.dir;
    },
    m = function m(t) {
      var e;
      e = function e() {
        var e = u();
        if (e) {
          var _i3 = t.NAME,
            _n2 = e.fn[_i3];
          e.fn[_i3] = t.jQueryInterface, e.fn[_i3].Constructor = t, e.fn[_i3].noConflict = function () {
            return e.fn[_i3] = _n2, t.jQueryInterface;
          };
        }
      }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", function () {
        for (var _i4 = 0, _f = f; _i4 < _f.length; _i4++) {
          var _t3 = _f[_i4];
          _t3();
        }
      }), f.push(e)) : e();
    },
    g = function g(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
      return "function" == typeof t ? t.apply(void 0, _toConsumableArray(e)) : i;
    },
    _ = function _(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      if (!n) return void g(t);
      var o = function (t) {
        if (!t) return 0;
        var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          i = _window$getComputedSt.transitionDelay;
        var n = Number.parseFloat(e),
          s = Number.parseFloat(i);
        return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
      }(e) + 5;
      var r = !1;
      var a = function a(_ref) {
        var n = _ref.target;
        n === e && (r = !0, e.removeEventListener(i, a), g(t));
      };
      e.addEventListener(i, a), setTimeout(function () {
        r || s(e);
      }, o);
    },
    b = function b(t, e, i, n) {
      var s = t.length;
      var o = t.indexOf(e);
      return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
    },
    v = /[^.]*(?=\..*)\.|.*/,
    y = /\..*/,
    w = /::\d+$/,
    A = {};
  var E = 1;
  var T = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    },
    C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function O(t, e) {
    return e && "".concat(e, "::").concat(E++) || t.uidEvent || E++;
  }
  function x(t) {
    var e = O(t);
    return t.uidEvent = e, A[e] = A[e] || {}, A[e];
  }
  function k(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return Object.values(t).find(function (t) {
      return t.callable === e && t.delegationSelector === i;
    });
  }
  function L(t, e, i) {
    var n = "string" == typeof e,
      s = n ? i : e || i;
    var o = I(t);
    return C.has(o) || (o = t), [n, s, o];
  }
  function S(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    var _L = L(e, i, n),
      _L2 = _slicedToArray(_L, 3),
      o = _L2[0],
      r = _L2[1],
      a = _L2[2];
    if (e in T) {
      var _t4 = function _t4(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };
      r = _t4(r);
    }
    var l = x(t),
      c = l[a] || (l[a] = {}),
      h = k(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    var d = O(r, e.replace(v, "")),
      u = o ? function (t, e, i) {
        return function n(s) {
          var o = t.querySelectorAll(e);
          for (var _r2 = s.target; _r2 && _r2 !== this; _r2 = _r2.parentNode) {
            var _iterator = _createForOfIteratorHelper(o),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _a = _step.value;
                if (_a === _r2) return P(s, {
                  delegateTarget: _r2
                }), n.oneOff && N.off(t, s.type, e, i), i.apply(_r2, [s]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        };
      }(t, i, r) : function (t, e) {
        return function i(n) {
          return P(n, {
            delegateTarget: t
          }), i.oneOff && N.off(t, n.type, e), e.apply(t, [n]);
        };
      }(t, r);
    u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }
  function D(t, e, i, n, s) {
    var o = k(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function $(t, e, i, n) {
    var s = e[i] || {};
    for (var _i5 = 0, _Object$entries = Object.entries(s); _i5 < _Object$entries.length; _i5++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i5], 2),
        _o2 = _Object$entries$_i[0],
        _r3 = _Object$entries$_i[1];
      _o2.includes(n) && D(t, e, i, _r3.callable, _r3.delegationSelector);
    }
  }
  function I(t) {
    return t = t.replace(y, ""), T[t] || t;
  }
  var N = {
    on: function on(t, e, i, n) {
      S(t, e, i, n, !1);
    },
    one: function one(t, e, i, n) {
      S(t, e, i, n, !0);
    },
    off: function off(t, e, i, n) {
      if ("string" != typeof e || !t) return;
      var _L3 = L(e, i, n),
        _L4 = _slicedToArray(_L3, 3),
        s = _L4[0],
        o = _L4[1],
        r = _L4[2],
        a = r !== e,
        l = x(t),
        c = l[r] || {},
        h = e.startsWith(".");
      if (void 0 === o) {
        if (h) for (var _i6 = 0, _Object$keys = Object.keys(l); _i6 < _Object$keys.length; _i6++) {
          var _i7 = _Object$keys[_i6];
          $(t, l, _i7, e.slice(1));
        }
        for (var _i8 = 0, _Object$entries2 = Object.entries(c); _i8 < _Object$entries2.length; _i8++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i8], 2),
            _i9 = _Object$entries2$_i[0],
            _n3 = _Object$entries2$_i[1];
          var _s2 = _i9.replace(w, "");
          a && !e.includes(_s2) || D(t, l, r, _n3.callable, _n3.delegationSelector);
        }
      } else {
        if (!Object.keys(c).length) return;
        D(t, l, r, o, s ? i : null);
      }
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var n = u();
      var s = null,
        o = !0,
        r = !0,
        a = !1;
      e !== I(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
      var l = P(new Event(e, {
        bubbles: o,
        cancelable: !0
      }), i);
      return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
    }
  };
  function P(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _loop = function _loop() {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i10], 2),
        i = _Object$entries3$_i[0],
        n = _Object$entries3$_i[1];
      try {
        t[i] = n;
      } catch (e) {
        Object.defineProperty(t, i, {
          configurable: !0,
          get: function get() {
            return n;
          }
        });
      }
    };
    for (var _i10 = 0, _Object$entries3 = Object.entries(e); _i10 < _Object$entries3.length; _i10++) {
      _loop();
    }
    return t;
  }
  function M(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }
  function j(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-".concat(t.toLowerCase());
    });
  }
  var F = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-".concat(j(e)), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-".concat(j(e)));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {},
        i = Object.keys(t.dataset).filter(function (t) {
          return t.startsWith("bs") && !t.startsWith("bsConfig");
        });
      var _iterator2 = _createForOfIteratorHelper(i),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _n4 = _step2.value;
          var _i11 = _n4.replace(/^bs/, "");
          _i11 = _i11.charAt(0).toLowerCase() + _i11.slice(1, _i11.length), e[_i11] = M(t.dataset[_n4]);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return M(t.getAttribute("data-bs-".concat(j(e))));
    }
  };
  var H = /*#__PURE__*/function () {
    function H() {
      _classCallCheck(this, H);
    }
    _createClass(H, [{
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t;
      }
    }, {
      key: "_mergeConfigObj",
      value: function _mergeConfigObj(t, e) {
        var i = o(e) ? F.getDataAttribute(e, "config") : {};
        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), "object" == _typeof(i) ? i : {}), o(e) ? F.getDataAttributes(e) : {}), "object" == _typeof(t) ? t : {});
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;
        for (var _i12 = 0, _Object$entries4 = Object.entries(e); _i12 < _Object$entries4.length; _i12++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i12], 2),
            _n5 = _Object$entries4$_i[0],
            _s3 = _Object$entries4$_i[1];
          var _e4 = t[_n5],
            _r4 = o(_e4) ? "element" : null == (i = _e4) ? "".concat(i) : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
          if (!new RegExp(_s3).test(_r4)) throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(_n5, "\" provided type \"").concat(_r4, "\" but expected type \"").concat(_s3, "\"."));
        }
        var i;
      }
    }], [{
      key: "Default",
      get: function get() {
        return {};
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return {};
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }]);
    return H;
  }();
  var W = /*#__PURE__*/function (_H) {
    _inherits(W, _H);
    function W(t, i) {
      var _this;
      _classCallCheck(this, W);
      _this = _callSuper(this, W), (t = r(t)) && (_this._element = t, _this._config = _this._getConfig(i), e.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this)));
      return _this;
    }
    _createClass(W, [{
      key: "dispose",
      value: function dispose() {
        e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
        var _iterator3 = _createForOfIteratorHelper(Object.getOwnPropertyNames(this)),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _t5 = _step3.value;
            this[_t5] = null;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        _(t, e, i);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return e.get(r(t), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(t) || new this(t, "object" == _typeof(e) ? e : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.3.2";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }, {
      key: "eventName",
      value: function eventName(t) {
        return "".concat(t).concat(this.EVENT_KEY);
      }
    }]);
    return W;
  }(H);
  var B = function B(t) {
      var e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        var _i13 = t.getAttribute("href");
        if (!_i13 || !_i13.includes("#") && !_i13.startsWith(".")) return null;
        _i13.includes("#") && !_i13.startsWith("#") && (_i13 = "#".concat(_i13.split("#")[1])), e = _i13 && "#" !== _i13 ? n(_i13.trim()) : null;
      }
      return e;
    },
    z = {
      find: function find(t) {
        var _ref2;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
        return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
      },
      findOne: function findOne(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
        return Element.prototype.querySelector.call(e, t);
      },
      children: function children(t, e) {
        var _ref3;
        return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.children)).filter(function (t) {
          return t.matches(e);
        });
      },
      parents: function parents(t, e) {
        var i = [];
        var n = t.parentNode.closest(e);
        for (; n;) i.push(n), n = n.parentNode.closest(e);
        return i;
      },
      prev: function prev(t, e) {
        var i = t.previousElementSibling;
        for (; i;) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next: function next(t, e) {
        var i = t.nextElementSibling;
        for (; i;) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren: function focusableChildren(t) {
        var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (t) {
          return "".concat(t, ":not([tabindex^=\"-\"])");
        }).join(",");
        return this.find(e, t).filter(function (t) {
          return !l(t) && a(t);
        });
      },
      getSelectorFromElement: function getSelectorFromElement(t) {
        var e = B(t);
        return e && z.findOne(e) ? e : null;
      },
      getElementFromSelector: function getElementFromSelector(t) {
        var e = B(t);
        return e ? z.findOne(e) : null;
      },
      getMultipleElementsFromSelector: function getMultipleElementsFromSelector(t) {
        var e = B(t);
        return e ? z.find(e) : [];
      }
    },
    R = function R(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
      var i = "click.dismiss".concat(t.EVENT_KEY),
        n = t.NAME;
      N.on(document, i, "[data-bs-dismiss=\"".concat(n, "\"]"), function (i) {
        if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
        var s = z.getElementFromSelector(this) || this.closest(".".concat(n));
        t.getOrCreateInstance(s)[e]();
      });
    },
    q = ".bs.alert",
    V = "close".concat(q),
    K = "closed".concat(q);
  var Q = /*#__PURE__*/function (_W) {
    _inherits(Q, _W);
    function Q() {
      _classCallCheck(this, Q);
      return _callSuper(this, Q, arguments);
    }
    _createClass(Q, [{
      key: "close",
      value: function close() {
        var _this2 = this;
        if (N.trigger(this._element, V).defaultPrevented) return;
        this._element.classList.remove("show");
        var t = this._element.classList.contains("fade");
        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, t);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove(), N.trigger(this._element, K), this.dispose();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Q.getOrCreateInstance(this);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);
    return Q;
  }(W);
  R(Q, "close"), m(Q);
  var X = '[data-bs-toggle="button"]';
  var Y = /*#__PURE__*/function (_W2) {
    _inherits(Y, _W2);
    function Y() {
      _classCallCheck(this, Y);
      return _callSuper(this, Y, arguments);
    }
    _createClass(Y, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "button";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Y.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }]);
    return Y;
  }(W);
  N.on(document, "click.bs.button.data-api", X, function (t) {
    t.preventDefault();
    var e = t.target.closest(X);
    Y.getOrCreateInstance(e).toggle();
  }), m(Y);
  var U = ".bs.swipe",
    G = "touchstart".concat(U),
    J = "touchmove".concat(U),
    Z = "touchend".concat(U),
    tt = "pointerdown".concat(U),
    et = "pointerup".concat(U),
    it = {
      endCallback: null,
      leftCallback: null,
      rightCallback: null
    },
    nt = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)"
    };
  var st = /*#__PURE__*/function (_H2) {
    _inherits(st, _H2);
    function st(t, e) {
      var _this3;
      _classCallCheck(this, st);
      _this3 = _callSuper(this, st), _this3._element = t, t && st.isSupported() && (_this3._config = _this3._getConfig(e), _this3._deltaX = 0, _this3._supportPointerEvents = Boolean(window.PointerEvent), _this3._initEvents());
      return _this3;
    }
    _createClass(st, [{
      key: "dispose",
      value: function dispose() {
        N.off(this._element, U);
      }
    }, {
      key: "_start",
      value: function _start(t) {
        this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
      }
    }, {
      key: "_end",
      value: function _end(t) {
        this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback);
      }
    }, {
      key: "_move",
      value: function _move(t) {
        this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this._deltaX);
        if (t <= 40) return;
        var e = t / this._deltaX;
        this._deltaX = 0, e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        var _this4 = this;
        this._supportPointerEvents ? (N.on(this._element, tt, function (t) {
          return _this4._start(t);
        }), N.on(this._element, et, function (t) {
          return _this4._end(t);
        }), this._element.classList.add("pointer-event")) : (N.on(this._element, G, function (t) {
          return _this4._start(t);
        }), N.on(this._element, J, function (t) {
          return _this4._move(t);
        }), N.on(this._element, Z, function (t) {
          return _this4._end(t);
        }));
      }
    }, {
      key: "_eventIsPointerPenTouch",
      value: function _eventIsPointerPenTouch(t) {
        return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
      }
    }], [{
      key: "Default",
      get: function get() {
        return it;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return nt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "swipe";
      }
    }, {
      key: "isSupported",
      value: function isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }]);
    return st;
  }(H);
  var ot = ".bs.carousel",
    rt = ".data-api",
    at = "next",
    lt = "prev",
    ct = "left",
    ht = "right",
    dt = "slide".concat(ot),
    ut = "slid".concat(ot),
    ft = "keydown".concat(ot),
    pt = "mouseenter".concat(ot),
    mt = "mouseleave".concat(ot),
    gt = "dragstart".concat(ot),
    _t = "load".concat(ot).concat(rt),
    bt = "click".concat(ot).concat(rt),
    vt = "carousel",
    yt = "active",
    wt = ".active",
    At = ".carousel-item",
    Et = wt + At,
    Tt = {
      ArrowLeft: ht,
      ArrowRight: ct
    },
    Ct = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0
    },
    Ot = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean"
    };
  var xt = /*#__PURE__*/function (_W3) {
    _inherits(xt, _W3);
    function xt(t, e) {
      var _this5;
      _classCallCheck(this, xt);
      _this5 = _callSuper(this, xt, [t, e]), _this5._interval = null, _this5._activeElement = null, _this5._isSliding = !1, _this5.touchTimeout = null, _this5._swipeHelper = null, _this5._indicatorsElement = z.findOne(".carousel-indicators", _this5._element), _this5._addEventListeners(), _this5._config.ride === vt && _this5.cycle();
      return _this5;
    }
    _createClass(xt, [{
      key: "next",
      value: function next() {
        this._slide(at);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && a(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(lt);
      }
    }, {
      key: "pause",
      value: function pause() {
        this._isSliding && s(this._element), this._clearInterval();
      }
    }, {
      key: "cycle",
      value: function cycle() {
        var _this6 = this;
        this._clearInterval(), this._updateInterval(), this._interval = setInterval(function () {
          return _this6.nextWhenVisible();
        }, this._config.interval);
      }
    }, {
      key: "_maybeEnableCycle",
      value: function _maybeEnableCycle() {
        var _this7 = this;
        this._config.ride && (this._isSliding ? N.one(this._element, ut, function () {
          return _this7.cycle();
        }) : this.cycle());
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this8 = this;
        var e = this._getItems();
        if (t > e.length - 1 || t < 0) return;
        if (this._isSliding) return void N.one(this._element, ut, function () {
          return _this8.to(t);
        });
        var i = this._getItemIndex(this._getActive());
        if (i === t) return;
        var n = t > i ? at : lt;
        this._slide(n, e[t]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), _get(_getPrototypeOf(xt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.defaultInterval = t.interval, t;
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this9 = this;
        this._config.keyboard && N.on(this._element, ft, function (t) {
          return _this9._keydown(t);
        }), "hover" === this._config.pause && (N.on(this._element, pt, function () {
          return _this9.pause();
        }), N.on(this._element, mt, function () {
          return _this9._maybeEnableCycle();
        })), this._config.touch && st.isSupported() && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this10 = this;
        var _iterator4 = _createForOfIteratorHelper(z.find(".carousel-item img", this._element)),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _t6 = _step4.value;
            N.on(_t6, gt, function (t) {
              return t.preventDefault();
            });
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        var t = {
          leftCallback: function leftCallback() {
            return _this10._slide(_this10._directionToOrder(ct));
          },
          rightCallback: function rightCallback() {
            return _this10._slide(_this10._directionToOrder(ht));
          },
          endCallback: function endCallback() {
            "hover" === _this10._config.pause && (_this10.pause(), _this10.touchTimeout && clearTimeout(_this10.touchTimeout), _this10.touchTimeout = setTimeout(function () {
              return _this10._maybeEnableCycle();
            }, 500 + _this10._config.interval));
          }
        };
        this._swipeHelper = new st(this._element, t);
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = Tt[t.key];
        e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._getItems().indexOf(t);
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (!this._indicatorsElement) return;
        var e = z.findOne(wt, this._indicatorsElement);
        e.classList.remove(yt), e.removeAttribute("aria-current");
        var i = z.findOne("[data-bs-slide-to=\"".concat(t, "\"]"), this._indicatorsElement);
        i && (i.classList.add(yt), i.setAttribute("aria-current", "true"));
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || this._getActive();
        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        this._config.interval = e || this._config.defaultInterval;
      }
    }, {
      key: "_slide",
      value: function _slide(t) {
        var _this11 = this;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (this._isSliding) return;
        var i = this._getActive(),
          n = t === at,
          s = e || b(this._getItems(), i, n, this._config.wrap);
        if (s === i) return;
        var o = this._getItemIndex(s),
          r = function r(e) {
            return N.trigger(_this11._element, e, {
              relatedTarget: s,
              direction: _this11._orderToDirection(t),
              from: _this11._getItemIndex(i),
              to: o
            });
          };
        if (r(dt).defaultPrevented) return;
        if (!i || !s) return;
        var a = Boolean(this._interval);
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
        var l = n ? "carousel-item-start" : "carousel-item-end",
          c = n ? "carousel-item-next" : "carousel-item-prev";
        s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback(function () {
          s.classList.remove(l, c), s.classList.add(yt), i.classList.remove(yt, c, l), _this11._isSliding = !1, r(ut);
        }, i, this._isAnimated()), a && this.cycle();
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("slide");
      }
    }, {
      key: "_getActive",
      value: function _getActive() {
        return z.findOne(Et, this._element);
      }
    }, {
      key: "_getItems",
      value: function _getItems() {
        return z.find(At, this._element);
      }
    }, {
      key: "_clearInterval",
      value: function _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return p() ? t === ct ? lt : at : t === ct ? at : lt;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return p() ? t === lt ? ct : ht : t === lt ? ht : ct;
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ct;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ot;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = xt.getOrCreateInstance(this, t);
          if ("number" != typeof t) {
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
              e[t]();
            }
          } else e.to(t);
        });
      }
    }]);
    return xt;
  }(W);
  N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", function (t) {
    var e = z.getElementFromSelector(this);
    if (!e || !e.classList.contains(vt)) return;
    t.preventDefault();
    var i = xt.getOrCreateInstance(e),
      n = this.getAttribute("data-bs-slide-to");
    return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
  }), N.on(window, _t, function () {
    var t = z.find('[data-bs-ride="carousel"]');
    var _iterator5 = _createForOfIteratorHelper(t),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _e5 = _step5.value;
        xt.getOrCreateInstance(_e5);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }), m(xt);
  var kt = ".bs.collapse",
    Lt = "show".concat(kt),
    St = "shown".concat(kt),
    Dt = "hide".concat(kt),
    $t = "hidden".concat(kt),
    It = "click".concat(kt, ".data-api"),
    Nt = "show",
    Pt = "collapse",
    Mt = "collapsing",
    jt = ":scope .".concat(Pt, " .").concat(Pt),
    Ft = '[data-bs-toggle="collapse"]',
    Ht = {
      parent: null,
      toggle: !0
    },
    Wt = {
      parent: "(null|element)",
      toggle: "boolean"
    };
  var Bt = /*#__PURE__*/function (_W4) {
    _inherits(Bt, _W4);
    function Bt(t, e) {
      var _this12;
      _classCallCheck(this, Bt);
      _this12 = _callSuper(this, Bt, [t, e]), _this12._isTransitioning = !1, _this12._triggerArray = [];
      var i = z.find(Ft);
      var _iterator6 = _createForOfIteratorHelper(i),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _t7 = _step6.value;
          var _e6 = z.getSelectorFromElement(_t7),
            _i14 = z.find(_e6).filter(function (t) {
              return t === _this12._element;
            });
          null !== _e6 && _i14.length && _this12._triggerArray.push(_t7);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      _this12._initializeChildren(), _this12._config.parent || _this12._addAriaAndCollapsedClass(_this12._triggerArray, _this12._isShown()), _this12._config.toggle && _this12.toggle();
      return _this12;
    }
    _createClass(Bt, [{
      key: "toggle",
      value: function toggle() {
        this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this13 = this;
        if (this._isTransitioning || this._isShown()) return;
        var t = [];
        if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(function (t) {
          return t !== _this13._element;
        }).map(function (t) {
          return Bt.getOrCreateInstance(t, {
            toggle: !1
          });
        })), t.length && t[0]._isTransitioning) return;
        if (N.trigger(this._element, Lt).defaultPrevented) return;
        var _iterator7 = _createForOfIteratorHelper(t),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _e7 = _step7.value;
            _e7.hide();
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        var e = this._getDimension();
        this._element.classList.remove(Pt), this._element.classList.add(Mt), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        var i = "scroll".concat(e[0].toUpperCase() + e.slice(1));
        this._queueCallback(function () {
          _this13._isTransitioning = !1, _this13._element.classList.remove(Mt), _this13._element.classList.add(Pt, Nt), _this13._element.style[e] = "", N.trigger(_this13._element, St);
        }, this._element, !0), this._element.style[e] = "".concat(this._element[i], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this14 = this;
        if (this._isTransitioning || !this._isShown()) return;
        if (N.trigger(this._element, Dt).defaultPrevented) return;
        var t = this._getDimension();
        this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), d(this._element), this._element.classList.add(Mt), this._element.classList.remove(Pt, Nt);
        var _iterator8 = _createForOfIteratorHelper(this._triggerArray),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _t8 = _step8.value;
            var _e8 = z.getElementFromSelector(_t8);
            _e8 && !this._isShown(_e8) && this._addAriaAndCollapsedClass([_t8], !1);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function () {
          _this14._isTransitioning = !1, _this14._element.classList.remove(Mt), _this14._element.classList.add(Pt), N.trigger(_this14._element, $t);
        }, this._element, !0);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains(Nt);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        if (!this._config.parent) return;
        var t = this._getFirstLevelChildren(Ft);
        var _iterator9 = _createForOfIteratorHelper(t),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _e9 = _step9.value;
            var _t9 = z.getElementFromSelector(_e9);
            _t9 && this._addAriaAndCollapsedClass([_e9], this._isShown(_t9));
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }
    }, {
      key: "_getFirstLevelChildren",
      value: function _getFirstLevelChildren(t) {
        var e = z.find(jt, this._config.parent);
        return z.find(t, this._config.parent).filter(function (t) {
          return !e.includes(t);
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (t.length) {
          var _iterator10 = _createForOfIteratorHelper(t),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var _i15 = _step10.value;
              _i15.classList.toggle("collapsed", !e), _i15.setAttribute("aria-expanded", e);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ht;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Wt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        var e = {};
        return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function () {
          var i = Bt.getOrCreateInstance(this, e);
          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t]();
          }
        });
      }
    }]);
    return Bt;
  }(W);
  N.on(document, It, Ft, function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var _iterator11 = _createForOfIteratorHelper(z.getMultipleElementsFromSelector(this)),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var _t10 = _step11.value;
        Bt.getOrCreateInstance(_t10, {
          toggle: !1
        }).toggle();
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
  }), m(Bt);
  var zt = "top",
    Rt = "bottom",
    qt = "right",
    Vt = "left",
    Kt = "auto",
    Qt = [zt, Rt, qt, Vt],
    Xt = "start",
    Yt = "end",
    Ut = "clippingParents",
    Gt = "viewport",
    Jt = "popper",
    Zt = "reference",
    te = Qt.reduce(function (t, e) {
      return t.concat([e + "-" + Xt, e + "-" + Yt]);
    }, []),
    ee = [].concat(Qt, [Kt]).reduce(function (t, e) {
      return t.concat([e, e + "-" + Xt, e + "-" + Yt]);
    }, []),
    ie = "beforeRead",
    ne = "read",
    se = "afterRead",
    oe = "beforeMain",
    re = "main",
    ae = "afterMain",
    le = "beforeWrite",
    ce = "write",
    he = "afterWrite",
    de = [ie, ne, se, oe, re, ae, le, ce, he];
  function ue(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function fe(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }
    return t;
  }
  function pe(t) {
    return t instanceof fe(t).Element || t instanceof Element;
  }
  function me(t) {
    return t instanceof fe(t).HTMLElement || t instanceof HTMLElement;
  }
  function ge(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof fe(t).ShadowRoot || t instanceof ShadowRoot);
  }
  var _e = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        me(s) && ue(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
          var e = n[t];
          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
        }));
      });
    },
    effect: function effect(t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
      return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
        Object.keys(e.elements).forEach(function (t) {
          var n = e.elements[t],
            s = e.attributes[t] || {},
            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
              return t[e] = "", t;
            }, {});
          me(n) && ue(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
            n.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };
  function be(t) {
    return t.split("-")[0];
  }
  var ve = Math.max,
    ye = Math.min,
    we = Math.round;
  function Ae() {
    var t = navigator.userAgentData;
    return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map(function (t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function Ee() {
    return !/^((?!chrome|android).)*safari/i.test(Ae());
  }
  function Te(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(),
      s = 1,
      o = 1;
    e && me(t) && (s = t.offsetWidth > 0 && we(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && we(n.height) / t.offsetHeight || 1);
    var r = (pe(t) ? fe(t) : window).visualViewport,
      a = !Ee() && i,
      l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
      c = (n.top + (a && r ? r.offsetTop : 0)) / o,
      h = n.width / s,
      d = n.height / o;
    return {
      width: h,
      height: d,
      top: c,
      right: l + h,
      bottom: c + d,
      left: l,
      x: l,
      y: c
    };
  }
  function Ce(t) {
    var e = Te(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    };
  }
  function Oe(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && ge(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function xe(t) {
    return fe(t).getComputedStyle(t);
  }
  function ke(t) {
    return ["table", "td", "th"].indexOf(ue(t)) >= 0;
  }
  function Le(t) {
    return ((pe(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }
  function Se(t) {
    return "html" === ue(t) ? t : t.assignedSlot || t.parentNode || (ge(t) ? t.host : null) || Le(t);
  }
  function De(t) {
    return me(t) && "fixed" !== xe(t).position ? t.offsetParent : null;
  }
  function $e(t) {
    for (var e = fe(t), i = De(t); i && ke(i) && "static" === xe(i).position;) i = De(i);
    return i && ("html" === ue(i) || "body" === ue(i) && "static" === xe(i).position) ? e : i || function (t) {
      var e = /firefox/i.test(Ae());
      if (/Trident/i.test(Ae()) && me(t) && "fixed" === xe(t).position) return null;
      var i = Se(t);
      for (ge(i) && (i = i.host); me(i) && ["html", "body"].indexOf(ue(i)) < 0;) {
        var n = xe(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }
      return null;
    }(t) || e;
  }
  function Ie(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  function Ne(t, e, i) {
    return ve(t, ye(e, i));
  }
  function Pe(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }
  function Me(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }
  var je = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e,
        i = t.state,
        n = t.name,
        s = t.options,
        o = i.elements.arrow,
        r = i.modifiersData.popperOffsets,
        a = be(i.placement),
        l = Ie(a),
        c = [Vt, qt].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var h = function (t, e) {
            return Pe("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
              placement: e.placement
            })) : t) ? t : Me(t, Qt));
          }(s.padding, i),
          d = Ce(o),
          u = "y" === l ? zt : Vt,
          f = "y" === l ? Rt : qt,
          p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
          m = r[l] - i.rects.reference[l],
          g = $e(o),
          _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
          b = p / 2 - m / 2,
          v = h[u],
          y = _ - d[c] - h[f],
          w = _ / 2 - d[c] / 2 + b,
          A = Ne(v, w, y),
          E = l;
        i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Oe(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
  function Fe(t) {
    return t.split("-")[1];
  }
  var He = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function We(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      c = t.adaptive,
      h = t.roundOffsets,
      d = t.isFixed,
      u = r.x,
      f = void 0 === u ? 0 : u,
      p = r.y,
      m = void 0 === p ? 0 : p,
      g = "function" == typeof h ? h({
        x: f,
        y: m
      }) : {
        x: f,
        y: m
      };
    f = g.x, m = g.y;
    var _ = r.hasOwnProperty("x"),
      b = r.hasOwnProperty("y"),
      v = Vt,
      y = zt,
      w = window;
    if (c) {
      var A = $e(i),
        E = "clientHeight",
        T = "clientWidth";
      A === fe(i) && "static" !== xe(A = Le(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === zt || (s === Vt || s === qt) && o === Yt) && (y = Rt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== Vt && (s !== zt && s !== Rt || o !== Yt) || (v = qt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1);
    }
    var C,
      O = Object.assign({
        position: a
      }, c && He),
      x = !0 === h ? function (t, e) {
        var i = t.x,
          n = t.y,
          s = e.devicePixelRatio || 1;
        return {
          x: we(i * s) / s || 0,
          y: we(n * s) / s || 0
        };
      }({
        x: f,
        y: m
      }, fe(i)) : {
        x: f,
        y: m
      };
    return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e));
  }
  var Be = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function fn(t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: be(e.placement),
          variation: Fe(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
          isFixed: "fixed" === e.options.strategy
        };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, We(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, We(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
      });
    },
    data: {}
  };
  var ze = {
    passive: !0
  };
  var Re = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = fe(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, ze);
      }), a && l.addEventListener("resize", i.update, ze), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, ze);
        }), a && l.removeEventListener("resize", i.update, ze);
      };
    },
    data: {}
  };
  var qe = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Ve(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return qe[t];
    });
  }
  var Ke = {
    start: "end",
    end: "start"
  };
  function Qe(t) {
    return t.replace(/start|end/g, function (t) {
      return Ke[t];
    });
  }
  function Xe(t) {
    var e = fe(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }
  function Ye(t) {
    return Te(Le(t)).left + Xe(t).scrollLeft;
  }
  function Ue(t) {
    var e = xe(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function Ge(t) {
    return ["html", "body", "#document"].indexOf(ue(t)) >= 0 ? t.ownerDocument.body : me(t) && Ue(t) ? t : Ge(Se(t));
  }
  function Je(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Ge(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = fe(n),
      r = s ? [o].concat(o.visualViewport || [], Ue(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(Je(Se(r)));
  }
  function Ze(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }
  function ti(t, e, i) {
    return e === Gt ? Ze(function (t, e) {
      var i = fe(t),
        n = Le(t),
        s = i.visualViewport,
        o = n.clientWidth,
        r = n.clientHeight,
        a = 0,
        l = 0;
      if (s) {
        o = s.width, r = s.height;
        var c = Ee();
        (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop);
      }
      return {
        width: o,
        height: r,
        x: a + Ye(t),
        y: l
      };
    }(t, i)) : pe(e) ? function (t, e) {
      var i = Te(t, !1, "fixed" === e);
      return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i;
    }(e, i) : Ze(function (t) {
      var e,
        i = Le(t),
        n = Xe(t),
        s = null == (e = t.ownerDocument) ? void 0 : e.body,
        o = ve(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
        r = ve(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
        a = -n.scrollLeft + Ye(t),
        l = -n.scrollTop;
      return "rtl" === xe(s || i).direction && (a += ve(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(Le(t)));
  }
  function ei(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? be(s) : null,
      r = s ? Fe(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case zt:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;
      case Rt:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;
      case qt:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;
      case Vt:
        e = {
          x: i.x - n.width,
          y: l
        };
        break;
      default:
        e = {
          x: i.x,
          y: i.y
        };
    }
    var c = o ? Ie(o) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (r) {
        case Xt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case Yt:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return e;
  }
  function ii(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.strategy,
      r = void 0 === o ? t.strategy : o,
      a = i.boundary,
      l = void 0 === a ? Ut : a,
      c = i.rootBoundary,
      h = void 0 === c ? Gt : c,
      d = i.elementContext,
      u = void 0 === d ? Jt : d,
      f = i.altBoundary,
      p = void 0 !== f && f,
      m = i.padding,
      g = void 0 === m ? 0 : m,
      _ = Pe("number" != typeof g ? g : Me(g, Qt)),
      b = u === Jt ? Zt : Jt,
      v = t.rects.popper,
      y = t.elements[p ? b : u],
      w = function (t, e, i, n) {
        var s = "clippingParents" === e ? function (t) {
            var e = Je(Se(t)),
              i = ["absolute", "fixed"].indexOf(xe(t).position) >= 0 && me(t) ? $e(t) : t;
            return pe(i) ? e.filter(function (t) {
              return pe(t) && Oe(t, i) && "body" !== ue(t);
            }) : [];
          }(t) : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(function (e, i) {
            var s = ti(t, i, n);
            return e.top = ve(s.top, e.top), e.right = ye(s.right, e.right), e.bottom = ye(s.bottom, e.bottom), e.left = ve(s.left, e.left), e;
          }, ti(t, r, n));
        return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
      }(pe(y) ? y : y.contextElement || Le(t.elements.popper), l, h, r),
      A = Te(t.elements.reference),
      E = ei({
        reference: A,
        element: v,
        strategy: "absolute",
        placement: s
      }),
      T = Ze(Object.assign({}, v, E)),
      C = u === Jt ? T : A,
      O = {
        top: w.top - C.top + _.top,
        bottom: C.bottom - w.bottom + _.bottom,
        left: w.left - C.left + _.left,
        right: C.right - w.right + _.right
      },
      x = t.modifiersData.offset;
    if (u === Jt && x) {
      var k = x[s];
      Object.keys(O).forEach(function (t) {
        var e = [qt, Rt].indexOf(t) >= 0 ? 1 : -1,
          i = [zt, Rt].indexOf(t) >= 0 ? "y" : "x";
        O[t] += k[i] * e;
      });
    }
    return O;
  }
  function ni(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? ee : l,
      h = Fe(n),
      d = h ? a ? te : te.filter(function (t) {
        return Fe(t) === h;
      }) : Qt,
      u = d.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return e[i] = ii(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[be(i)], e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }
  var si = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = be(g), b = l || (_ !== g && p ? function (t) {
            if (be(t) === Kt) return [];
            var e = Ve(t);
            return [Qe(t), e, Qe(e)];
          }(g) : [Ve(g)]), v = [g].concat(b).reduce(function (t, i) {
            return t.concat(be(i) === Kt ? ni(e, {
              placement: i,
              boundary: h,
              rootBoundary: d,
              padding: c,
              flipVariations: p,
              allowedAutoPlacements: m
            }) : i);
          }, []), y = e.rects.reference, w = e.rects.popper, A = new Map(), E = !0, T = v[0], C = 0; C < v.length; C++) {
          var O = v[C],
            x = be(O),
            k = Fe(O) === Xt,
            L = [zt, Rt].indexOf(x) >= 0,
            S = L ? "width" : "height",
            D = ii(e, {
              placement: O,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c
            }),
            $ = L ? k ? qt : Vt : k ? Rt : zt;
          y[S] > w[S] && ($ = Ve($));
          var I = Ve($),
            N = [];
          if (o && N.push(D[x] <= 0), a && N.push(D[$] <= 0, D[I] <= 0), N.every(function (t) {
            return t;
          })) {
            T = O, E = !1;
            break;
          }
          A.set(O, N);
        }
        if (E) for (var P = function P(t) {
            var e = v.find(function (e) {
              var i = A.get(e);
              if (i) return i.slice(0, t).every(function (t) {
                return t;
              });
            });
            if (e) return T = e, "break";
          }, M = p ? 3 : 1; M > 0 && "break" !== P(M); M--);
        e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };
  function oi(t, e, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    };
  }
  function ri(t) {
    return [zt, qt, Rt, Vt].some(function (e) {
      return t[e] >= 0;
    });
  }
  var ai = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function fn(t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = ii(e, {
            elementContext: "reference"
          }),
          a = ii(e, {
            altBoundary: !0
          }),
          l = oi(r, n),
          c = oi(a, s, o),
          h = ri(l),
          d = ri(c);
        e.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: h,
          hasPopperEscaped: d
        }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-reference-hidden": h,
          "data-popper-escaped": d
        });
      }
    },
    li = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function fn(t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = ee.reduce(function (t, i) {
            return t[i] = function (t, e, i) {
              var n = be(t),
                s = [Vt, zt].indexOf(n) >= 0 ? -1 : 1,
                o = "function" == typeof i ? i(Object.assign({}, e, {
                  placement: t
                })) : i,
                r = o[0],
                a = o[1];
              return r = r || 0, a = (a || 0) * s, [Vt, qt].indexOf(n) >= 0 ? {
                x: a,
                y: r
              } : {
                x: r,
                y: a
              };
            }(i, e.rects, o), t;
          }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
      }
    },
    ci = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function fn(t) {
        var e = t.state,
          i = t.name;
        e.modifiersData[i] = ei({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement
        });
      },
      data: {}
    },
    hi = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function fn(t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = ii(e, {
            boundary: l,
            rootBoundary: c,
            padding: d,
            altBoundary: h
          }),
          _ = be(e.placement),
          b = Fe(e.placement),
          v = !b,
          y = Ie(_),
          w = "x" === y ? "y" : "x",
          A = e.modifiersData.popperOffsets,
          E = e.rects.reference,
          T = e.rects.popper,
          C = "function" == typeof m ? m(Object.assign({}, e.rects, {
            placement: e.placement
          })) : m,
          O = "number" == typeof C ? {
            mainAxis: C,
            altAxis: C
          } : Object.assign({
            mainAxis: 0,
            altAxis: 0
          }, C),
          x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
          k = {
            x: 0,
            y: 0
          };
        if (A) {
          if (o) {
            var L,
              S = "y" === y ? zt : Vt,
              D = "y" === y ? Rt : qt,
              $ = "y" === y ? "height" : "width",
              I = A[y],
              N = I + g[S],
              P = I - g[D],
              M = f ? -T[$] / 2 : 0,
              j = b === Xt ? E[$] : T[$],
              F = b === Xt ? -T[$] : -E[$],
              H = e.elements.arrow,
              W = f && H ? Ce(H) : {
                width: 0,
                height: 0
              },
              B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              },
              z = B[S],
              R = B[D],
              q = Ne(0, E[$], W[$]),
              V = v ? E[$] / 2 - M - q - z - O.mainAxis : j - q - z - O.mainAxis,
              K = v ? -E[$] / 2 + M + q + R + O.mainAxis : F + q + R + O.mainAxis,
              Q = e.elements.arrow && $e(e.elements.arrow),
              X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
              Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
              U = I + K - Y,
              G = Ne(f ? ye(N, I + V - Y - X) : N, I, f ? ve(P, U) : P);
            A[y] = G, k[y] = G - I;
          }
          if (a) {
            var J,
              Z = "x" === y ? zt : Vt,
              tt = "x" === y ? Rt : qt,
              et = A[w],
              it = "y" === w ? "height" : "width",
              nt = et + g[Z],
              st = et - g[tt],
              ot = -1 !== [zt, Vt].indexOf(_),
              rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
              at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
              lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
              ct = f && ot ? function (t, e, i) {
                var n = Ne(t, e, i);
                return n > i ? i : n;
              }(at, et, lt) : Ne(f ? at : nt, et, f ? lt : st);
            A[w] = ct, k[w] = ct - et;
          }
          e.modifiersData[n] = k;
        }
      },
      requiresIfExists: ["offset"]
    };
  function di(t, e, i) {
    void 0 === i && (i = !1);
    var n,
      s,
      o = me(e),
      r = me(e) && function (t) {
        var e = t.getBoundingClientRect(),
          i = we(e.width) / t.offsetWidth || 1,
          n = we(e.height) / t.offsetHeight || 1;
        return 1 !== i || 1 !== n;
      }(e),
      a = Le(e),
      l = Te(t, r, i),
      c = {
        scrollLeft: 0,
        scrollTop: 0
      },
      h = {
        x: 0,
        y: 0
      };
    return (o || !o && !i) && (("body" !== ue(e) || Ue(a)) && (c = (n = e) !== fe(n) && me(n) ? {
      scrollLeft: (s = n).scrollLeft,
      scrollTop: s.scrollTop
    } : Xe(n)), me(e) ? ((h = Te(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Ye(a))), {
      x: l.left + c.scrollLeft - h.x,
      y: l.top + c.scrollTop - h.y,
      width: l.width,
      height: l.height
    };
  }
  function ui(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function s(t) {
      i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
        if (!i.has(t)) {
          var n = e.get(t);
          n && s(n);
        }
      }), n.push(t);
    }
    return t.forEach(function (t) {
      e.set(t.name, t);
    }), t.forEach(function (t) {
      i.has(t.name) || s(t);
    }), n;
  }
  var fi = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function pi() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function mi(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? fi : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, fi, o),
          modifiersData: {},
          elements: {
            reference: t,
            popper: e
          },
          attributes: {},
          styles: {}
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function setOptions(i) {
            var s = "function" == typeof i ? i(a.options) : i;
            d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
              reference: pe(t) ? Je(t) : t.contextElement ? Je(t.contextElement) : [],
              popper: Je(e)
            };
            var r,
              c,
              u = function (t) {
                var e = ui(t);
                return de.reduce(function (t, i) {
                  return t.concat(e.filter(function (t) {
                    return t.phase === i;
                  }));
                }, []);
              }((r = [].concat(n, a.options.modifiers), c = r.reduce(function (t, e) {
                var i = t[e.name];
                return t[e.name] = i ? Object.assign({}, i, e, {
                  options: Object.assign({}, i.options, e.options),
                  data: Object.assign({}, i.data, e.data)
                }) : e, t;
              }, {}), Object.keys(c).map(function (t) {
                return c[t];
              })));
            return a.orderedModifiers = u.filter(function (t) {
              return t.enabled;
            }), a.orderedModifiers.forEach(function (t) {
              var e = t.name,
                i = t.options,
                n = void 0 === i ? {} : i,
                s = t.effect;
              if ("function" == typeof s) {
                var o = s({
                  state: a,
                  name: e,
                  instance: h,
                  options: n
                });
                l.push(o || function () {});
              }
            }), h.update();
          },
          forceUpdate: function forceUpdate() {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (pi(e, i)) {
                a.rects = {
                  reference: di(e, $e(i), "fixed" === a.options.strategy),
                  popper: Ce(i)
                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                  return a.modifiersData[t.name] = Object.assign({}, t.data);
                });
                for (var n = 0; n < a.orderedModifiers.length; n++) if (!0 !== a.reset) {
                  var s = a.orderedModifiers[n],
                    o = s.fn,
                    r = s.options,
                    l = void 0 === r ? {} : r,
                    d = s.name;
                  "function" == typeof o && (a = o({
                    state: a,
                    options: l,
                    name: d,
                    instance: h
                  }) || a);
                } else a.reset = !1, n = -1;
              }
            }
          },
          update: (s = function s() {
            return new Promise(function (t) {
              h.forceUpdate(), t(a);
            });
          }, function () {
            return r || (r = new Promise(function (t) {
              Promise.resolve().then(function () {
                r = void 0, t(s());
              });
            })), r;
          }),
          destroy: function destroy() {
            d(), c = !0;
          }
        };
      if (!pi(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }
      return h.setOptions(i).then(function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t);
      }), h;
    };
  }
  var gi = mi(),
    _i = mi({
      defaultModifiers: [Re, ci, Be, _e]
    }),
    bi = mi({
      defaultModifiers: [Re, ci, Be, _e, li, si, hi, je, ai]
    });
  var vi = Object.freeze(Object.defineProperty({
      __proto__: null,
      afterMain: ae,
      afterRead: se,
      afterWrite: he,
      applyStyles: _e,
      arrow: je,
      auto: Kt,
      basePlacements: Qt,
      beforeMain: oe,
      beforeRead: ie,
      beforeWrite: le,
      bottom: Rt,
      clippingParents: Ut,
      computeStyles: Be,
      createPopper: bi,
      createPopperBase: gi,
      createPopperLite: _i,
      detectOverflow: ii,
      end: Yt,
      eventListeners: Re,
      flip: si,
      hide: ai,
      left: Vt,
      main: re,
      modifierPhases: de,
      offset: li,
      placements: ee,
      popper: Jt,
      popperGenerator: mi,
      popperOffsets: ci,
      preventOverflow: hi,
      read: ne,
      reference: Zt,
      right: qt,
      start: Xt,
      top: zt,
      variationPlacements: te,
      viewport: Gt,
      write: ce
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    yi = "dropdown",
    wi = ".bs.dropdown",
    Ai = ".data-api",
    Ei = "ArrowUp",
    Ti = "ArrowDown",
    Ci = "hide".concat(wi),
    Oi = "hidden".concat(wi),
    xi = "show".concat(wi),
    ki = "shown".concat(wi),
    Li = "click".concat(wi).concat(Ai),
    Si = "keydown".concat(wi).concat(Ai),
    Di = "keyup".concat(wi).concat(Ai),
    $i = "show",
    Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    Ni = "".concat(Ii, ".").concat($i),
    Pi = ".dropdown-menu",
    Mi = p() ? "top-end" : "top-start",
    ji = p() ? "top-start" : "top-end",
    Fi = p() ? "bottom-end" : "bottom-start",
    Hi = p() ? "bottom-start" : "bottom-end",
    Wi = p() ? "left-start" : "right-start",
    Bi = p() ? "right-start" : "left-start",
    zi = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle"
    },
    Ri = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)"
    };
  var qi = /*#__PURE__*/function (_W5) {
    _inherits(qi, _W5);
    function qi(t, e) {
      var _this15;
      _classCallCheck(this, qi);
      _this15 = _callSuper(this, qi, [t, e]), _this15._popper = null, _this15._parent = _this15._element.parentNode, _this15._menu = z.next(_this15._element, Pi)[0] || z.prev(_this15._element, Pi)[0] || z.findOne(Pi, _this15._parent), _this15._inNavbar = _this15._detectNavbar();
      return _this15;
    }
    _createClass(qi, [{
      key: "toggle",
      value: function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (l(this._element) || this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };
        if (!N.trigger(this._element, xi, t).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
            var _ref4;
            var _iterator12 = _createForOfIteratorHelper((_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children))),
              _step12;
            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _t11 = _step12.value;
                N.on(_t11, "mouseover", h);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
          }
          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (l(this._element) || !this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };
        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(qi.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        if (!N.trigger(this._element, Ci, t).defaultPrevented) {
          if ("ontouchstart" in document.documentElement) {
            var _ref5;
            var _iterator13 = _createForOfIteratorHelper((_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children))),
              _step13;
            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _t12 = _step13.value;
                N.off(_t12, "mouseover", h);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }
          this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Oi, t);
        }
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("object" == _typeof((t = _get(_getPrototypeOf(qi.prototype), "_getConfig", this).call(this, t)).reference) && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("".concat(yi.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        return t;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper() {
        if (void 0 === vi) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        var t = this._element;
        "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == _typeof(this._config.reference) && (t = this._config.reference);
        var e = this._getPopperConfig();
        this._popper = bi(t, this._menu, e);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this._menu.classList.contains($i);
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._parent;
        if (t.classList.contains("dropend")) return Wi;
        if (t.classList.contains("dropstart")) return Bi;
        if (t.classList.contains("dropup-center")) return "top";
        if (t.classList.contains("dropdown-center")) return "bottom";
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? ji : Mi : e ? Hi : Fi;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this16 = this;
        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this16._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, t), g(this._config.popperConfig, [t]));
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var t = _ref6.key,
          e = _ref6.target;
        var i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(function (t) {
          return a(t);
        });
        i.length && b(i, e, t === Ti, !i.includes(e)).focus();
      }
    }], [{
      key: "Default",
      get: function get() {
        return zi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ri;
      }
    }, {
      key: "NAME",
      get: function get() {
        return yi;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = qi.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
        var e = z.find(Ni);
        var _iterator14 = _createForOfIteratorHelper(e),
          _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _i16 = _step14.value;
            var _e10 = qi.getInstance(_i16);
            if (!_e10 || !1 === _e10._config.autoClose) continue;
            var _n6 = t.composedPath(),
              _s4 = _n6.includes(_e10._menu);
            if (_n6.includes(_e10._element) || "inside" === _e10._config.autoClose && !_s4 || "outside" === _e10._config.autoClose && _s4) continue;
            if (_e10._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            var _o3 = {
              relatedTarget: _e10._element
            };
            "click" === t.type && (_o3.clickEvent = t), _e10._completeHide(_o3);
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        var e = /input|textarea/i.test(t.target.tagName),
          i = "Escape" === t.key,
          n = [Ei, Ti].includes(t.key);
        if (!n && !i) return;
        if (e && !i) return;
        t.preventDefault();
        var s = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t.delegateTarget.parentNode),
          o = qi.getOrCreateInstance(s);
        if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
        o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
      }
    }]);
    return qi;
  }(W);
  N.on(document, Si, Ii, qi.dataApiKeydownHandler), N.on(document, Si, Pi, qi.dataApiKeydownHandler), N.on(document, Li, qi.clearMenus), N.on(document, Di, qi.clearMenus), N.on(document, Li, Ii, function (t) {
    t.preventDefault(), qi.getOrCreateInstance(this).toggle();
  }), m(qi);
  var Vi = "backdrop",
    Ki = "show",
    Qi = "mousedown.bs.".concat(Vi),
    Xi = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body"
    },
    Yi = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)"
    };
  var Ui = /*#__PURE__*/function (_H3) {
    _inherits(Ui, _H3);
    function Ui(t) {
      var _this17;
      _classCallCheck(this, Ui);
      _this17 = _callSuper(this, Ui), _this17._config = _this17._getConfig(t), _this17._isAppended = !1, _this17._element = null;
      return _this17;
    }
    _createClass(Ui, [{
      key: "show",
      value: function show(t) {
        if (!this._config.isVisible) return void g(t);
        this._append();
        var e = this._getElement();
        this._config.isAnimated && d(e), e.classList.add(Ki), this._emulateAnimation(function () {
          g(t);
        });
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this18 = this;
        this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation(function () {
          _this18.dispose(), g(t);
        })) : g(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (N.off(this._element, Qi), this._element.remove(), this._isAppended = !1);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t13 = document.createElement("div");
          _t13.className = this._config.className, this._config.isAnimated && _t13.classList.add("fade"), this._element = _t13;
        }
        return this._element;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.rootElement = r(t.rootElement), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this19 = this;
        if (this._isAppended) return;
        var t = this._getElement();
        this._config.rootElement.append(t), N.on(t, Qi, function () {
          g(_this19._config.clickCallback);
        }), this._isAppended = !0;
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        _(t, this._getElement(), this._config.isAnimated);
      }
    }], [{
      key: "Default",
      get: function get() {
        return Xi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Yi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Vi;
      }
    }]);
    return Ui;
  }(H);
  var Gi = ".bs.focustrap",
    Ji = "focusin".concat(Gi),
    Zi = "keydown.tab".concat(Gi),
    tn = "backward",
    en = {
      autofocus: !0,
      trapElement: null
    },
    nn = {
      autofocus: "boolean",
      trapElement: "element"
    };
  var sn = /*#__PURE__*/function (_H4) {
    _inherits(sn, _H4);
    function sn(t) {
      var _this20;
      _classCallCheck(this, sn);
      _this20 = _callSuper(this, sn), _this20._config = _this20._getConfig(t), _this20._isActive = !1, _this20._lastTabNavDirection = null;
      return _this20;
    }
    _createClass(sn, [{
      key: "activate",
      value: function activate() {
        var _this21 = this;
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, function (t) {
          return _this21._handleFocusin(t);
        }), N.on(document, Zi, function (t) {
          return _this21._handleKeydown(t);
        }), this._isActive = !0);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._isActive && (this._isActive = !1, N.off(document, Gi));
      }
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(t) {
        var e = this._config.trapElement;
        if (t.target === document || t.target === e || e.contains(t.target)) return;
        var i = z.focusableChildren(e);
        0 === i.length ? e.focus() : this._lastTabNavDirection === tn ? i[i.length - 1].focus() : i[0].focus();
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(t) {
        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? tn : "forward");
      }
    }], [{
      key: "Default",
      get: function get() {
        return en;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return nn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "focustrap";
      }
    }]);
    return sn;
  }(H);
  var on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    rn = ".sticky-top",
    an = "padding-right",
    ln = "margin-right";
  var cn = /*#__PURE__*/function () {
    function cn() {
      _classCallCheck(this, cn);
      this._element = document.body;
    }
    _createClass(cn, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, an, function (e) {
          return e + t;
        }), this._setElementAttributes(on, an, function (e) {
          return e + t;
        }), this._setElementAttributes(rn, ln, function (e) {
          return e - t;
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, i) {
        var _this22 = this;
        var n = this.getWidth();
        this._applyManipulationCallback(t, function (t) {
          if (t !== _this22._element && window.innerWidth > t.clientWidth + n) return;
          _this22._saveInitialAttribute(t, e);
          var s = window.getComputedStyle(t).getPropertyValue(e);
          t.style.setProperty(e, "".concat(i(Number.parseFloat(s)), "px"));
        });
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var i = t.style.getPropertyValue(e);
        i && F.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = F.getDataAttribute(t, e);
          null !== i ? (F.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(t, e) {
        if (o(t)) e(t);else {
          var _iterator15 = _createForOfIteratorHelper(z.find(t, this._element)),
            _step15;
          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var _i17 = _step15.value;
              e(_i17);
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
        }
      }
    }]);
    return cn;
  }();
  var hn = ".bs.modal",
    dn = "hide".concat(hn),
    un = "hidePrevented".concat(hn),
    fn = "hidden".concat(hn),
    pn = "show".concat(hn),
    mn = "shown".concat(hn),
    gn = "resize".concat(hn),
    _n = "click.dismiss".concat(hn),
    bn = "mousedown.dismiss".concat(hn),
    vn = "keydown.dismiss".concat(hn),
    yn = "click".concat(hn, ".data-api"),
    wn = "modal-open",
    An = "show",
    En = "modal-static",
    Tn = {
      backdrop: !0,
      focus: !0,
      keyboard: !0
    },
    Cn = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean"
    };
  var On = /*#__PURE__*/function (_W6) {
    _inherits(On, _W6);
    function On(t, e) {
      var _this23;
      _classCallCheck(this, On);
      _this23 = _callSuper(this, On, [t, e]), _this23._dialog = z.findOne(".modal-dialog", _this23._element), _this23._backdrop = _this23._initializeBackDrop(), _this23._focustrap = _this23._initializeFocusTrap(), _this23._isShown = !1, _this23._isTransitioning = !1, _this23._scrollBar = new cn(), _this23._addEventListeners();
      return _this23;
    }
    _createClass(On, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this24 = this;
        this._isShown || this._isTransitioning || N.trigger(this._element, pn, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show(function () {
          return _this24._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this25 = this;
        this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback(function () {
          return _this25._hideModal();
        }, this._element, this._isAnimated())));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(On.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new Ui({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new sn({
          trapElement: this._element
        });
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this26 = this;
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        var e = z.findOne(".modal-body", this._dialog);
        e && (e.scrollTop = 0), d(this._element), this._element.classList.add(An), this._queueCallback(function () {
          _this26._config.focus && _this26._focustrap.activate(), _this26._isTransitioning = !1, N.trigger(_this26._element, mn, {
            relatedTarget: t
          });
        }, this._dialog, this._isAnimated());
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this27 = this;
        N.on(this._element, vn, function (t) {
          "Escape" === t.key && (_this27._config.keyboard ? _this27.hide() : _this27._triggerBackdropTransition());
        }), N.on(window, gn, function () {
          _this27._isShown && !_this27._isTransitioning && _this27._adjustDialog();
        }), N.on(this._element, bn, function (t) {
          N.one(_this27._element, _n, function (e) {
            _this27._element === t.target && _this27._element === e.target && ("static" !== _this27._config.backdrop ? _this27._config.backdrop && _this27.hide() : _this27._triggerBackdropTransition());
          });
        });
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this28 = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove(wn), _this28._resetAdjustments(), _this28._scrollBar.reset(), N.trigger(_this28._element, fn);
        });
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this29 = this;
        if (N.trigger(this._element, un).defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
          e = this._element.style.overflowY;
        "hidden" === e || this._element.classList.contains(En) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback(function () {
          _this29._element.classList.remove(En), _this29._queueCallback(function () {
            _this29._element.style.overflowY = e;
          }, _this29._dialog);
        }, this._dialog), this._element.focus());
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
          e = this._scrollBar.getWidth(),
          i = e > 0;
        if (i && !t) {
          var _t14 = p() ? "paddingLeft" : "paddingRight";
          this._element.style[_t14] = "".concat(e, "px");
        }
        if (!i && t) {
          var _t15 = p() ? "paddingRight" : "paddingLeft";
          this._element.style[_t15] = "".concat(e, "px");
        }
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "Default",
      get: function get() {
        return Tn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Cn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = On.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }]);
    return On;
  }(W);
  N.on(document, yn, '[data-bs-toggle="modal"]', function (t) {
    var _this30 = this;
    var e = z.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), N.one(e, pn, function (t) {
      t.defaultPrevented || N.one(e, fn, function () {
        a(_this30) && _this30.focus();
      });
    });
    var i = z.findOne(".modal.show");
    i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this);
  }), R(On), m(On);
  var xn = ".bs.offcanvas",
    kn = ".data-api",
    Ln = "load".concat(xn).concat(kn),
    Sn = "show",
    Dn = "showing",
    $n = "hiding",
    In = ".offcanvas.show",
    Nn = "show".concat(xn),
    Pn = "shown".concat(xn),
    Mn = "hide".concat(xn),
    jn = "hidePrevented".concat(xn),
    Fn = "hidden".concat(xn),
    Hn = "resize".concat(xn),
    Wn = "click".concat(xn).concat(kn),
    Bn = "keydown.dismiss".concat(xn),
    zn = {
      backdrop: !0,
      keyboard: !0,
      scroll: !1
    },
    Rn = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean"
    };
  var qn = /*#__PURE__*/function (_W7) {
    _inherits(qn, _W7);
    function qn(t, e) {
      var _this31;
      _classCallCheck(this, qn);
      _this31 = _callSuper(this, qn, [t, e]), _this31._isShown = !1, _this31._backdrop = _this31._initializeBackDrop(), _this31._focustrap = _this31._initializeFocusTrap(), _this31._addEventListeners();
      return _this31;
    }
    _createClass(qn, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this32 = this;
        this._isShown || N.trigger(this._element, Nn, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new cn().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback(function () {
          _this32._config.scroll && !_this32._config.backdrop || _this32._focustrap.activate(), _this32._element.classList.add(Sn), _this32._element.classList.remove(Dn), N.trigger(_this32._element, Pn, {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this33 = this;
        this._isShown && (N.trigger(this._element, Mn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback(function () {
          _this33._element.classList.remove(Sn, $n), _this33._element.removeAttribute("aria-modal"), _this33._element.removeAttribute("role"), _this33._config.scroll || new cn().reset(), N.trigger(_this33._element, Fn);
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(qn.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this34 = this;
        var t = Boolean(this._config.backdrop);
        return new Ui({
          className: "offcanvas-backdrop",
          isVisible: t,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: t ? function () {
            "static" !== _this34._config.backdrop ? _this34.hide() : N.trigger(_this34._element, jn);
          } : null
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new sn({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this35 = this;
        N.on(this._element, Bn, function (t) {
          "Escape" === t.key && (_this35._config.keyboard ? _this35.hide() : N.trigger(_this35._element, jn));
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return zn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Rn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = qn.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);
    return qn;
  }(W);
  N.on(document, Wn, '[data-bs-toggle="offcanvas"]', function (t) {
    var _this36 = this;
    var e = z.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
    N.one(e, Fn, function () {
      a(_this36) && _this36.focus();
    });
    var i = z.findOne(In);
    i && i !== e && qn.getInstance(i).hide(), qn.getOrCreateInstance(e).toggle(this);
  }), N.on(window, Ln, function () {
    var _iterator16 = _createForOfIteratorHelper(z.find(In)),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var _t16 = _step16.value;
        qn.getOrCreateInstance(_t16).show();
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
  }), N.on(window, Hn, function () {
    var _iterator17 = _createForOfIteratorHelper(z.find("[aria-modal][class*=show][class*=offcanvas-]")),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var _t17 = _step17.value;
        "fixed" !== getComputedStyle(_t17).position && qn.getOrCreateInstance(_t17).hide();
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
  }), R(qn), m(qn);
  var Vn = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    Kn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
    Xn = function Xn(t, e) {
      var i = t.nodeName.toLowerCase();
      return e.includes(i) ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue)) : e.filter(function (t) {
        return t instanceof RegExp;
      }).some(function (t) {
        return t.test(i);
      });
    },
    Yn = {
      allowList: Vn,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>"
    },
    Un = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string"
    },
    Gn = {
      entry: "(string|element|function|null)",
      selector: "(string|element)"
    };
  var Jn = /*#__PURE__*/function (_H5) {
    _inherits(Jn, _H5);
    function Jn(t) {
      var _this37;
      _classCallCheck(this, Jn);
      _this37 = _callSuper(this, Jn), _this37._config = _this37._getConfig(t);
      return _this37;
    }
    _createClass(Jn, [{
      key: "getContent",
      value: function getContent() {
        var _this38 = this;
        return Object.values(this._config.content).map(function (t) {
          return _this38._resolvePossibleFunction(t);
        }).filter(Boolean);
      }
    }, {
      key: "hasContent",
      value: function hasContent() {
        return this.getContent().length > 0;
      }
    }, {
      key: "changeContent",
      value: function changeContent(t) {
        return this._checkContent(t), this._config.content = _objectSpread(_objectSpread({}, this._config.content), t), this;
      }
    }, {
      key: "toHtml",
      value: function toHtml() {
        var _e$classList;
        var t = document.createElement("div");
        t.innerHTML = this._maybeSanitize(this._config.template);
        for (var _i18 = 0, _Object$entries5 = Object.entries(this._config.content); _i18 < _Object$entries5.length; _i18++) {
          var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i18], 2),
            _e11 = _Object$entries5$_i[0],
            _i19 = _Object$entries5$_i[1];
          this._setContent(t, _i19, _e11);
        }
        var e = t.children[0],
          i = this._resolvePossibleFunction(this._config.extraClass);
        return i && (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(i.split(" "))), e;
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        _get(_getPrototypeOf(Jn.prototype), "_typeCheckConfig", this).call(this, t), this._checkContent(t.content);
      }
    }, {
      key: "_checkContent",
      value: function _checkContent(t) {
        for (var _i20 = 0, _Object$entries6 = Object.entries(t); _i20 < _Object$entries6.length; _i20++) {
          var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i20], 2),
            _e12 = _Object$entries6$_i[0],
            _i21 = _Object$entries6$_i[1];
          _get(_getPrototypeOf(Jn.prototype), "_typeCheckConfig", this).call(this, {
            selector: _e12,
            entry: _i21
          }, Gn);
        }
      }
    }, {
      key: "_setContent",
      value: function _setContent(t, e, i) {
        var n = z.findOne(i, t);
        n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove());
      }
    }, {
      key: "_maybeSanitize",
      value: function _maybeSanitize(t) {
        return this._config.sanitize ? function (t, e, i, _ref7) {
          if (!t.length) return t;
          if (i && "function" == typeof i) return i(t);
          var n = new window.DOMParser().parseFromString(t, "text/html"),
            s = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(n.body.querySelectorAll("*")));
          var _iterator18 = _createForOfIteratorHelper(s),
            _step18;
          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var _ref8;
              var _t18 = _step18.value;
              var _i22 = _t18.nodeName.toLowerCase();
              if (!Object.keys(e).includes(_i22)) {
                _t18.remove();
                continue;
              }
              var _n7 = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(_t18.attributes)),
                _s5 = [].concat(e["*"] || [], e[_i22] || []);
              var _iterator19 = _createForOfIteratorHelper(_n7),
                _step19;
              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var _e13 = _step19.value;
                  Xn(_e13, _s5) || _t18.removeAttribute(_e13.nodeName);
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
          return n.body.innerHTML;
        }(t, this._config.allowList, this._config.sanitizeFn) : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return g(t, [this]);
      }
    }, {
      key: "_putElementInTemplate",
      value: function _putElementInTemplate(t, e) {
        if (this._config.html) return e.innerHTML = "", void e.append(t);
        e.textContent = t.textContent;
      }
    }], [{
      key: "Default",
      get: function get() {
        return Yn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Un;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "TemplateFactory";
      }
    }]);
    return Jn;
  }(H);
  var Zn = new Set(["sanitize", "allowList", "sanitizeFn"]),
    ts = "fade",
    es = "show",
    is = ".modal",
    ns = "hide.bs.modal",
    ss = "hover",
    os = "focus",
    rs = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: p() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: p() ? "right" : "left"
    },
    as = {
      allowList: Vn,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 6],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus"
    },
    ls = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string"
    };
  var cs = /*#__PURE__*/function (_W8) {
    _inherits(cs, _W8);
    function cs(t, e) {
      var _this39;
      _classCallCheck(this, cs);
      if (void 0 === vi) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this39 = _callSuper(this, cs, [t, e]), _this39._isEnabled = !0, _this39._timeout = 0, _this39._isHovered = null, _this39._activeTrigger = {}, _this39._popper = null, _this39._templateFactory = null, _this39._newContent = null, _this39.tip = null, _this39._setListeners(), _this39._config.selector || _this39._fixTitle();
      return _this39;
    }
    _createClass(cs, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), N.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), _get(_getPrototypeOf(cs.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this40 = this;
        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;
        var t = N.trigger(this._element, this.constructor.eventName("show")),
          e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (t.defaultPrevented || !e) return;
        this._disposePopper();
        var i = this._getTipElement();
        this._element.setAttribute("aria-describedby", i.getAttribute("id"));
        var n = this._config.container;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(es), "ontouchstart" in document.documentElement) {
          var _ref9;
          var _iterator20 = _createForOfIteratorHelper((_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children))),
            _step20;
          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var _t19 = _step20.value;
              N.on(_t19, "mouseover", h);
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }
        }
        this._queueCallback(function () {
          N.trigger(_this40._element, _this40.constructor.eventName("shown")), !1 === _this40._isHovered && _this40._leave(), _this40._isHovered = !1;
        }, this.tip, this._isAnimated());
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this41 = this;
        if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
          if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement) {
            var _ref10;
            var _iterator21 = _createForOfIteratorHelper((_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children))),
              _step21;
            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var _t20 = _step21.value;
                N.off(_t20, "mouseover", h);
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
          }
          this._activeTrigger.click = !1, this._activeTrigger[os] = !1, this._activeTrigger[ss] = !1, this._isHovered = null, this._queueCallback(function () {
            _this41._isWithActiveTrigger() || (_this41._isHovered || _this41._disposePopper(), _this41._element.removeAttribute("aria-describedby"), N.trigger(_this41._element, _this41.constructor.eventName("hidden")));
          }, this.tip, this._isAnimated());
        }
      }
    }, {
      key: "update",
      value: function update() {
        this._popper && this._popper.update();
      }
    }, {
      key: "_isWithContent",
      value: function _isWithContent() {
        return Boolean(this._getTitle());
      }
    }, {
      key: "_getTipElement",
      value: function _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
      }
    }, {
      key: "_createTipElement",
      value: function _createTipElement(t) {
        var e = this._getTemplateFactory(t).toHtml();
        if (!e) return null;
        e.classList.remove(ts, es), e.classList.add("bs-".concat(this.constructor.NAME, "-auto"));
        var i = function (t) {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));
          return t;
        }(this.constructor.NAME).toString();
        return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ts), e;
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
      }
    }, {
      key: "_getTemplateFactory",
      value: function _getTemplateFactory(t) {
        return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Jn(_objectSpread(_objectSpread({}, this._config), {}, {
          content: t,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        })), this._templateFactory;
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return {
          ".tooltip-inner": this._getTitle()
        };
      }
    }, {
      key: "_getTitle",
      value: function _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t) {
        return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(ts);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this.tip && this.tip.classList.contains(es);
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(t) {
        var e = g(this._config.placement, [this, t, this._element]),
          i = rs[e.toUpperCase()];
        return bi(this._element, t, this._getPopperConfig(i));
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this42 = this;
        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this42._element);
        } : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return g(t, [this._element]);
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this43 = this;
        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: function fn(t) {
              _this43._getTipElement().setAttribute("data-popper-placement", t.state.placement);
            }
          }]
        };
        return _objectSpread(_objectSpread({}, e), g(this._config.popperConfig, [e]));
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this44 = this;
        var t = this._config.trigger.split(" ");
        var _iterator22 = _createForOfIteratorHelper(t),
          _step22;
        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
            var _e14 = _step22.value;
            if ("click" === _e14) N.on(this._element, this.constructor.eventName("click"), this._config.selector, function (t) {
              _this44._initializeOnDelegatedTarget(t).toggle();
            });else if ("manual" !== _e14) {
              var _t21 = _e14 === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                _i23 = _e14 === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
              N.on(this._element, _t21, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);
                e._activeTrigger["focusin" === t.type ? os : ss] = !0, e._enter();
              }), N.on(this._element, _i23, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);
                e._activeTrigger["focusout" === t.type ? os : ss] = e._element.contains(t.relatedTarget), e._leave();
              });
            }
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
        this._hideModalHandler = function () {
          _this44._element && _this44.hide();
        }, N.on(this._element.closest(is), ns, this._hideModalHandler);
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title");
        t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
      }
    }, {
      key: "_enter",
      value: function _enter() {
        var _this45 = this;
        this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(function () {
          _this45._isHovered && _this45.show();
        }, this._config.delay.show));
      }
    }, {
      key: "_leave",
      value: function _leave() {
        var _this46 = this;
        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(function () {
          _this46._isHovered || _this46.hide();
        }, this._config.delay.hide));
      }
    }, {
      key: "_setTimeout",
      value: function _setTimeout(t, e) {
        clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = F.getDataAttributes(this._element);
        for (var _i24 = 0, _Object$keys2 = Object.keys(e); _i24 < _Object$keys2.length; _i24++) {
          var _t22 = _Object$keys2[_i24];
          Zn.has(_t22) && delete e[_t22];
        }
        return t = _objectSpread(_objectSpread({}, e), "object" == _typeof(t) && t ? t : {}), t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};
        for (var _i25 = 0, _Object$entries7 = Object.entries(this._config); _i25 < _Object$entries7.length; _i25++) {
          var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i25], 2),
            _e15 = _Object$entries7$_i[0],
            _i26 = _Object$entries7$_i[1];
          this.constructor.Default[_e15] !== _i26 && (t[_e15] = _i26);
        }
        return t.selector = !1, t.trigger = "manual", t;
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
    }], [{
      key: "Default",
      get: function get() {
        return as;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ls;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = cs.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return cs;
  }(W);
  m(cs);
  var hs = _objectSpread(_objectSpread({}, cs.Default), {}, {
      content: "",
      offset: [0, 8],
      placement: "right",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click"
    }),
    ds = _objectSpread(_objectSpread({}, cs.DefaultType), {}, {
      content: "(null|string|element|function)"
    });
  var us = /*#__PURE__*/function (_cs) {
    _inherits(us, _cs);
    function us() {
      _classCallCheck(this, us);
      return _callSuper(this, us, arguments);
    }
    _createClass(us, [{
      key: "_isWithContent",
      value: function _isWithContent() {
        return this._getTitle() || this._getContent();
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent()
        };
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }], [{
      key: "Default",
      get: function get() {
        return hs;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ds;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = us.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return us;
  }(cs);
  m(us);
  var fs = ".bs.scrollspy",
    ps = "activate".concat(fs),
    ms = "click".concat(fs),
    gs = "load".concat(fs, ".data-api"),
    _s = "active",
    bs = "[href]",
    vs = ".nav-link",
    ys = "".concat(vs, ", .nav-item > ").concat(vs, ", .list-group-item"),
    ws = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [.1, .5, 1]
    },
    As = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array"
    };
  var Es = /*#__PURE__*/function (_W9) {
    _inherits(Es, _W9);
    function Es(t, e) {
      var _this47;
      _classCallCheck(this, Es);
      _this47 = _callSuper(this, Es, [t, e]), _this47._targetLinks = new Map(), _this47._observableSections = new Map(), _this47._rootElement = "visible" === getComputedStyle(_this47._element).overflowY ? null : _this47._element, _this47._activeTarget = null, _this47._observer = null, _this47._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      }, _this47.refresh();
      return _this47;
    }
    _createClass(Es, [{
      key: "refresh",
      value: function refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        var _iterator23 = _createForOfIteratorHelper(this._observableSections.values()),
          _step23;
        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var _t23 = _step23.value;
            this._observer.observe(_t23);
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._observer.disconnect(), _get(_getPrototypeOf(Es.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? "".concat(t.offset, "px 0px -30%") : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map(function (t) {
          return Number.parseFloat(t);
        })), t;
      }
    }, {
      key: "_maybeEnableSmoothScroll",
      value: function _maybeEnableSmoothScroll() {
        var _this48 = this;
        this._config.smoothScroll && (N.off(this._config.target, ms), N.on(this._config.target, ms, bs, function (t) {
          var e = _this48._observableSections.get(t.target.hash);
          if (e) {
            t.preventDefault();
            var _i27 = _this48._rootElement || window,
              _n8 = e.offsetTop - _this48._element.offsetTop;
            if (_i27.scrollTo) return void _i27.scrollTo({
              top: _n8,
              behavior: "smooth"
            });
            _i27.scrollTop = _n8;
          }
        }));
      }
    }, {
      key: "_getNewObserver",
      value: function _getNewObserver() {
        var _this49 = this;
        var t = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver(function (t) {
          return _this49._observerCallback(t);
        }, t);
      }
    }, {
      key: "_observerCallback",
      value: function _observerCallback(t) {
        var _this50 = this;
        var e = function e(t) {
            return _this50._targetLinks.get("#".concat(t.target.id));
          },
          i = function i(t) {
            _this50._previousScrollData.visibleEntryTop = t.target.offsetTop, _this50._process(e(t));
          },
          n = (this._rootElement || document.documentElement).scrollTop,
          s = n >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = n;
        var _iterator24 = _createForOfIteratorHelper(t),
          _step24;
        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _o4 = _step24.value;
            if (!_o4.isIntersecting) {
              this._activeTarget = null, this._clearActiveClass(e(_o4));
              continue;
            }
            var _t24 = _o4.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (s && _t24) {
              if (i(_o4), !n) return;
            } else s || _t24 || i(_o4);
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      }
    }, {
      key: "_initializeTargetsAndObservables",
      value: function _initializeTargetsAndObservables() {
        this._targetLinks = new Map(), this._observableSections = new Map();
        var t = z.find(bs, this._config.target);
        var _iterator25 = _createForOfIteratorHelper(t),
          _step25;
        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var _e16 = _step25.value;
            if (!_e16.hash || l(_e16)) continue;
            var _t25 = z.findOne(decodeURI(_e16.hash), this._element);
            a(_t25) && (this._targetLinks.set(decodeURI(_e16.hash), _e16), this._observableSections.set(_e16.hash, _t25));
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
      }
    }, {
      key: "_process",
      value: function _process(t) {
        this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(_s), this._activateParents(t), N.trigger(this._element, ps, {
          relatedTarget: t
        }));
      }
    }, {
      key: "_activateParents",
      value: function _activateParents(t) {
        if (t.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(_s);else {
          var _iterator26 = _createForOfIteratorHelper(z.parents(t, ".nav, .list-group")),
            _step26;
          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var _e17 = _step26.value;
              var _iterator27 = _createForOfIteratorHelper(z.prev(_e17, ys)),
                _step27;
              try {
                for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                  var _t26 = _step27.value;
                  _t26.classList.add(_s);
                }
              } catch (err) {
                _iterator27.e(err);
              } finally {
                _iterator27.f();
              }
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }
        }
      }
    }, {
      key: "_clearActiveClass",
      value: function _clearActiveClass(t) {
        t.classList.remove(_s);
        var e = z.find("".concat(bs, ".").concat(_s), t);
        var _iterator28 = _createForOfIteratorHelper(e),
          _step28;
        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var _t27 = _step28.value;
            _t27.classList.remove(_s);
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return ws;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return As;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Es.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return Es;
  }(W);
  N.on(window, gs, function () {
    var _iterator29 = _createForOfIteratorHelper(z.find('[data-bs-spy="scroll"]')),
      _step29;
    try {
      for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
        var _t28 = _step29.value;
        Es.getOrCreateInstance(_t28);
      }
    } catch (err) {
      _iterator29.e(err);
    } finally {
      _iterator29.f();
    }
  }), m(Es);
  var Ts = ".bs.tab",
    Cs = "hide".concat(Ts),
    Os = "hidden".concat(Ts),
    xs = "show".concat(Ts),
    ks = "shown".concat(Ts),
    Ls = "click".concat(Ts),
    Ss = "keydown".concat(Ts),
    Ds = "load".concat(Ts),
    $s = "ArrowLeft",
    Is = "ArrowRight",
    Ns = "ArrowUp",
    Ps = "ArrowDown",
    Ms = "Home",
    js = "End",
    Fs = "active",
    Hs = "fade",
    Ws = "show",
    Bs = ".dropdown-toggle",
    zs = ":not(".concat(Bs, ")"),
    Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    qs = ".nav-link".concat(zs, ", .list-group-item").concat(zs, ", [role=\"tab\"]").concat(zs, ", ").concat(Rs),
    Vs = ".".concat(Fs, "[data-bs-toggle=\"tab\"], .").concat(Fs, "[data-bs-toggle=\"pill\"], .").concat(Fs, "[data-bs-toggle=\"list\"]");
  var Ks = /*#__PURE__*/function (_W10) {
    _inherits(Ks, _W10);
    function Ks(t) {
      var _this51;
      _classCallCheck(this, Ks);
      _this51 = _callSuper(this, Ks, [t]), _this51._parent = _this51._element.closest('.list-group, .nav, [role="tablist"]'), _this51._parent && (_this51._setInitialAttributes(_this51._parent, _this51._getChildren()), N.on(_this51._element, Ss, function (t) {
        return _this51._keydown(t);
      }));
      return _this51;
    }
    _createClass(Ks, [{
      key: "show",
      value: function show() {
        var t = this._element;
        if (this._elemIsActive(t)) return;
        var e = this._getActiveElem(),
          i = e ? N.trigger(e, Cs, {
            relatedTarget: t
          }) : null;
        N.trigger(t, xs, {
          relatedTarget: e
        }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
      }
    }, {
      key: "_activate",
      value: function _activate(t, e) {
        var _this52 = this;
        t && (t.classList.add(Fs), this._activate(z.getElementFromSelector(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), _this52._toggleDropDown(t, !0), N.trigger(t, ks, {
            relatedTarget: e
          })) : t.classList.add(Ws);
        }, t, t.classList.contains(Hs)));
      }
    }, {
      key: "_deactivate",
      value: function _deactivate(t, e) {
        var _this53 = this;
        t && (t.classList.remove(Fs), t.blur(), this._deactivate(z.getElementFromSelector(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), _this53._toggleDropDown(t, !1), N.trigger(t, Os, {
            relatedTarget: e
          })) : t.classList.remove(Ws);
        }, t, t.classList.contains(Hs)));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (![$s, Is, Ns, Ps, Ms, js].includes(t.key)) return;
        t.stopPropagation(), t.preventDefault();
        var e = this._getChildren().filter(function (t) {
          return !l(t);
        });
        var i;
        if ([Ms, js].includes(t.key)) i = e[t.key === Ms ? 0 : e.length - 1];else {
          var _n9 = [Is, Ps].includes(t.key);
          i = b(e, t.target, _n9, !0);
        }
        i && (i.focus({
          preventScroll: !0
        }), Ks.getOrCreateInstance(i).show());
      }
    }, {
      key: "_getChildren",
      value: function _getChildren() {
        return z.find(qs, this._parent);
      }
    }, {
      key: "_getActiveElem",
      value: function _getActiveElem() {
        var _this54 = this;
        return this._getChildren().find(function (t) {
          return _this54._elemIsActive(t);
        }) || null;
      }
    }, {
      key: "_setInitialAttributes",
      value: function _setInitialAttributes(t, e) {
        this._setAttributeIfNotExists(t, "role", "tablist");
        var _iterator30 = _createForOfIteratorHelper(e),
          _step30;
        try {
          for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
            var _t29 = _step30.value;
            this._setInitialAttributesOnChild(_t29);
          }
        } catch (err) {
          _iterator30.e(err);
        } finally {
          _iterator30.f();
        }
      }
    }, {
      key: "_setInitialAttributesOnChild",
      value: function _setInitialAttributesOnChild(t) {
        t = this._getInnerElement(t);
        var e = this._elemIsActive(t),
          i = this._getOuterElement(t);
        t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
      }
    }, {
      key: "_setInitialAttributesOnTargetPanel",
      value: function _setInitialAttributesOnTargetPanel(t) {
        var e = z.getElementFromSelector(t);
        e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", "".concat(t.id)));
      }
    }, {
      key: "_toggleDropDown",
      value: function _toggleDropDown(t, e) {
        var i = this._getOuterElement(t);
        if (!i.classList.contains("dropdown")) return;
        var n = function n(t, _n10) {
          var s = z.findOne(t, i);
          s && s.classList.toggle(_n10, e);
        };
        n(Bs, Fs), n(".dropdown-menu", Ws), i.setAttribute("aria-expanded", e);
      }
    }, {
      key: "_setAttributeIfNotExists",
      value: function _setAttributeIfNotExists(t, e, i) {
        t.hasAttribute(e) || t.setAttribute(e, i);
      }
    }, {
      key: "_elemIsActive",
      value: function _elemIsActive(t) {
        return t.classList.contains(Fs);
      }
    }, {
      key: "_getInnerElement",
      value: function _getInnerElement(t) {
        return t.matches(qs) ? t : z.findOne(qs, t);
      }
    }, {
      key: "_getOuterElement",
      value: function _getOuterElement(t) {
        return t.closest(".nav-item, .list-group-item") || t;
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Ks.getOrCreateInstance(this);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return Ks;
  }(W);
  N.on(document, Ls, Rs, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || Ks.getOrCreateInstance(this).show();
  }), N.on(window, Ds, function () {
    var _iterator31 = _createForOfIteratorHelper(z.find(Vs)),
      _step31;
    try {
      for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
        var _t30 = _step31.value;
        Ks.getOrCreateInstance(_t30);
      }
    } catch (err) {
      _iterator31.e(err);
    } finally {
      _iterator31.f();
    }
  }), m(Ks);
  var Qs = ".bs.toast",
    Xs = "mouseover".concat(Qs),
    Ys = "mouseout".concat(Qs),
    Us = "focusin".concat(Qs),
    Gs = "focusout".concat(Qs),
    Js = "hide".concat(Qs),
    Zs = "hidden".concat(Qs),
    to = "show".concat(Qs),
    eo = "shown".concat(Qs),
    io = "hide",
    no = "show",
    so = "showing",
    oo = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    },
    ro = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    };
  var ao = /*#__PURE__*/function (_W11) {
    _inherits(ao, _W11);
    function ao(t, e) {
      var _this55;
      _classCallCheck(this, ao);
      _this55 = _callSuper(this, ao, [t, e]), _this55._timeout = null, _this55._hasMouseInteraction = !1, _this55._hasKeyboardInteraction = !1, _this55._setListeners();
      return _this55;
    }
    _createClass(ao, [{
      key: "show",
      value: function show() {
        var _this56 = this;
        N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(io), d(this._element), this._element.classList.add(no, so), this._queueCallback(function () {
          _this56._element.classList.remove(so), N.trigger(_this56._element, eo), _this56._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this57 = this;
        this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so), this._queueCallback(function () {
          _this57._element.classList.add(io), _this57._element.classList.remove(so, no), N.trigger(_this57._element, Zs);
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(no), _get(_getPrototypeOf(ao.prototype), "dispose", this).call(this);
      }
    }, {
      key: "isShown",
      value: function isShown() {
        return this._element.classList.contains(no);
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this58 = this;
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this58.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }
        if (e) return void this._clearTimeout();
        var i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this59 = this;
        N.on(this._element, Xs, function (t) {
          return _this59._onInteraction(t, !0);
        }), N.on(this._element, Ys, function (t) {
          return _this59._onInteraction(t, !1);
        }), N.on(this._element, Us, function (t) {
          return _this59._onInteraction(t, !0);
        }), N.on(this._element, Gs, function (t) {
          return _this59._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "Default",
      get: function get() {
        return ro;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return oo;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ao.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);
    return ao;
  }(W);
  return R(ao), m(ao), {
    Alert: Q,
    Button: Y,
    Carousel: xt,
    Collapse: Bt,
    Dropdown: qi,
    Modal: On,
    Offcanvas: qn,
    Popover: us,
    ScrollSpy: Es,
    Tab: Ks,
    Toast: ao,
    Tooltip: cs
  };
});
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).IMask = {});
}(this, function (t) {
  "use strict";

  function e(t, e) {
    if (null == t) return {};
    var s,
      i,
      a = {},
      u = Object.keys(t);
    for (i = 0; i < u.length; i++) s = u[i], e.indexOf(s) >= 0 || (a[s] = t[s]);
    return a;
  }
  function s(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return new s.InputMask(t, e);
  }
  var i = /*#__PURE__*/function () {
    function i(t) {
      _classCallCheck(this, i);
      Object.assign(this, {
        inserted: "",
        rawInserted: "",
        skip: !1,
        tailShift: 0
      }, t);
    }
    _createClass(i, [{
      key: "aggregate",
      value: function aggregate(t) {
        return this.rawInserted += t.rawInserted, this.skip = this.skip || t.skip, this.inserted += t.inserted, this.tailShift += t.tailShift, this;
      }
    }, {
      key: "offset",
      get: function get() {
        return this.tailShift + this.inserted.length;
      }
    }]);
    return i;
  }();
  function a(t) {
    return "string" == typeof t || t instanceof String;
  }
  s.ChangeDetails = i;
  var u = {
    NONE: "NONE",
    LEFT: "LEFT",
    FORCE_LEFT: "FORCE_LEFT",
    RIGHT: "RIGHT",
    FORCE_RIGHT: "FORCE_RIGHT"
  };
  function n(t) {
    return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
  }
  function r(t) {
    return Array.isArray(t) ? t : [t, new i()];
  }
  function h(t, e) {
    if (e === t) return !0;
    var s,
      i = Array.isArray(e),
      a = Array.isArray(t);
    if (i && a) {
      if (e.length != t.length) return !1;
      for (s = 0; s < e.length; s++) if (!h(e[s], t[s])) return !1;
      return !0;
    }
    if (i != a) return !1;
    if (e && t && "object" == _typeof(e) && "object" == _typeof(t)) {
      var u = e instanceof Date,
        n = t instanceof Date;
      if (u && n) return e.getTime() == t.getTime();
      if (u != n) return !1;
      var r = e instanceof RegExp,
        l = t instanceof RegExp;
      if (r && l) return e.toString() == t.toString();
      if (r != l) return !1;
      var o = Object.keys(e);
      for (s = 0; s < o.length; s++) if (!Object.prototype.hasOwnProperty.call(t, o[s])) return !1;
      for (s = 0; s < o.length; s++) if (!h(t[o[s]], e[o[s]])) return !1;
      return !0;
    }
    return !(!e || !t || "function" != typeof e || "function" != typeof t) && e.toString() === t.toString();
  }
  var l = /*#__PURE__*/function () {
    function l(t, e, s, i) {
      _classCallCheck(this, l);
      for (this.value = t, this.cursorPos = e, this.oldValue = s, this.oldSelection = i; this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) --this.oldSelection.start;
    }
    _createClass(l, [{
      key: "startChangePos",
      get: function get() {
        return Math.min(this.cursorPos, this.oldSelection.start);
      }
    }, {
      key: "insertedCount",
      get: function get() {
        return this.cursorPos - this.startChangePos;
      }
    }, {
      key: "inserted",
      get: function get() {
        return this.value.substr(this.startChangePos, this.insertedCount);
      }
    }, {
      key: "removedCount",
      get: function get() {
        return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
      }
    }, {
      key: "removed",
      get: function get() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
      }
    }, {
      key: "head",
      get: function get() {
        return this.value.substring(0, this.startChangePos);
      }
    }, {
      key: "tail",
      get: function get() {
        return this.value.substring(this.startChangePos + this.insertedCount);
      }
    }, {
      key: "removeDirection",
      get: function get() {
        return !this.removedCount || this.insertedCount ? u.NONE : this.oldSelection.end !== this.cursorPos && this.oldSelection.start !== this.cursorPos || this.oldSelection.end !== this.oldSelection.start ? u.LEFT : u.RIGHT;
      }
    }]);
    return l;
  }();
  var o = /*#__PURE__*/function () {
    function o() {
      _classCallCheck(this, o);
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        s = arguments.length > 2 ? arguments[2] : void 0;
      this.value = t, this.from = e, this.stop = s;
    }
    _createClass(o, [{
      key: "toString",
      value: function toString() {
        return this.value;
      }
    }, {
      key: "extend",
      value: function extend(t) {
        this.value += String(t);
      }
    }, {
      key: "appendTo",
      value: function appendTo(t) {
        return t.append(this.toString(), {
          tail: !0
        }).aggregate(t._appendPlaceholder());
      }
    }, {
      key: "state",
      get: function get() {
        return {
          value: this.value,
          from: this.from,
          stop: this.stop
        };
      },
      set: function set(t) {
        Object.assign(this, t);
      }
    }, {
      key: "unshift",
      value: function unshift(t) {
        if (!this.value.length || null != t && this.from >= t) return "";
        var e = this.value[0];
        return this.value = this.value.slice(1), e;
      }
    }, {
      key: "shift",
      value: function shift() {
        if (!this.value.length) return "";
        var t = this.value[this.value.length - 1];
        return this.value = this.value.slice(0, -1), t;
      }
    }]);
    return o;
  }();
  var d = /*#__PURE__*/function () {
    function d(t) {
      _classCallCheck(this, d);
      this._value = "", this._update(Object.assign({}, d.DEFAULTS, t)), this.isInitialized = !0;
    }
    _createClass(d, [{
      key: "updateOptions",
      value: function updateOptions(t) {
        Object.keys(t).length && this.withValueRefresh(this._update.bind(this, t));
      }
    }, {
      key: "_update",
      value: function _update(t) {
        Object.assign(this, t);
      }
    }, {
      key: "state",
      get: function get() {
        return {
          _value: this.value
        };
      },
      set: function set(t) {
        this._value = t._value;
      }
    }, {
      key: "reset",
      value: function reset() {
        this._value = "";
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(t) {
        this.resolve(t);
      }
    }, {
      key: "resolve",
      value: function resolve(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          input: !0
        };
        return this.reset(), this.append(t, e, ""), this.doCommit(), this.value;
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.value;
      },
      set: function set(t) {
        this.reset(), this.append(t, {}, ""), this.doCommit();
      }
    }, {
      key: "typedValue",
      get: function get() {
        return this.doParse(this.value);
      },
      set: function set(t) {
        this.value = this.doFormat(t);
      }
    }, {
      key: "rawInputValue",
      get: function get() {
        return this.extractInput(0, this.value.length, {
          raw: !0
        });
      },
      set: function set(t) {
        this.reset(), this.append(t, {
          raw: !0
        }, ""), this.doCommit();
      }
    }, {
      key: "displayValue",
      get: function get() {
        return this.value;
      }
    }, {
      key: "isComplete",
      get: function get() {
        return !0;
      }
    }, {
      key: "isFilled",
      get: function get() {
        return this.isComplete;
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(t, e) {
        return t;
      }
    }, {
      key: "totalInputPositions",
      value: function totalInputPositions() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return Math.min(this.value.length, e - t);
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return this.value.slice(t, e);
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return new o(this.extractInput(t, e), t);
      }
    }, {
      key: "appendTail",
      value: function appendTail(t) {
        return a(t) && (t = new o(String(t))), t.appendTo(this);
      }
    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(t) {
        return t ? (this._value += t, new i({
          inserted: t,
          rawInserted: t
        })) : new i();
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(t) {
        var _r5, _r6;
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s = arguments.length > 2 ? arguments[2] : void 0;
        var a = this.state;
        var u;
        if ((_r5 = r(this.doPrepare(t, e)), _r6 = _slicedToArray(_r5, 2), t = _r6[0], u = _r6[1]), u = u.aggregate(this._appendCharRaw(t, e)), u.inserted) {
          var _t31,
            _n11 = !1 !== this.doValidate(e);
          if (_n11 && null != s) {
            var _e18 = this.state;
            !0 === this.overwrite && (_t31 = s.state, s.unshift(this.value.length - u.tailShift));
            var _i28 = this.appendTail(s);
            _n11 = _i28.rawInserted === s.toString(), _n11 && _i28.inserted || "shift" !== this.overwrite || (this.state = _e18, _t31 = s.state, s.shift(), _i28 = this.appendTail(s), _n11 = _i28.rawInserted === s.toString()), _n11 && _i28.inserted && (this.state = _e18);
          }
          _n11 || (u = new i(), this.state = a, s && _t31 && (s.state = _t31));
        }
        return u;
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        return new i();
      }
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        return new i();
      }
    }, {
      key: "append",
      value: function append(t, e, s) {
        if (!a(t)) throw new Error("value should be string");
        var u = new i(),
          n = a(s) ? new o(String(s)) : s;
        null != e && e.tail && (e._beforeTailState = this.state);
        for (var _s6 = 0; _s6 < t.length; ++_s6) {
          var _i29 = this._appendChar(t[_s6], e, n);
          if (!_i29.rawInserted && !this.doSkipInvalid(t[_s6], e, n)) break;
          u.aggregate(_i29);
        }
        return (!0 === this.eager || "append" === this.eager) && null != e && e.input && t && u.aggregate(this._appendEager()), null != n && (u.tailShift += this.appendTail(n).tailShift), u;
      }
    }, {
      key: "remove",
      value: function remove() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return this._value = this.value.slice(0, t) + this.value.slice(e), new i();
      }
    }, {
      key: "withValueRefresh",
      value: function withValueRefresh(t) {
        if (this._refreshing || !this.isInitialized) return t();
        this._refreshing = !0;
        var e = this.rawInputValue,
          s = this.value,
          i = t();
        return this.rawInputValue = e, this.value && this.value !== s && 0 === s.indexOf(this.value) && this.append(s.slice(this.value.length), {}, ""), delete this._refreshing, i;
      }
    }, {
      key: "runIsolated",
      value: function runIsolated(t) {
        if (this._isolated || !this.isInitialized) return t(this);
        this._isolated = !0;
        var e = this.state,
          s = t(this);
        return this.state = e, delete this._isolated, s;
      }
    }, {
      key: "doSkipInvalid",
      value: function doSkipInvalid(t) {
        return this.skipInvalid;
      }
    }, {
      key: "doPrepare",
      value: function doPrepare(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.prepare ? this.prepare(t, this, e) : t;
      }
    }, {
      key: "doValidate",
      value: function doValidate(t) {
        return (!this.validate || this.validate(this.value, this, t)) && (!this.parent || this.parent.doValidate(t));
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        this.commit && this.commit(this.value, this);
      }
    }, {
      key: "doFormat",
      value: function doFormat(t) {
        return this.format ? this.format(t, this) : t;
      }
    }, {
      key: "doParse",
      value: function doParse(t) {
        return this.parse ? this.parse(t, this) : t;
      }
    }, {
      key: "splice",
      value: function splice(t, e, s, a) {
        var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
          input: !0
        };
        var r = t + e,
          h = this.extractTail(r),
          l = !0 === this.eager || "remove" === this.eager;
        var o;
        l && (a = function (t) {
          switch (t) {
            case u.LEFT:
              return u.FORCE_LEFT;
            case u.RIGHT:
              return u.FORCE_RIGHT;
            default:
              return t;
          }
        }(a), o = this.extractInput(0, r, {
          raw: !0
        }));
        var _d = t;
        var p = new i();
        if (a !== u.NONE && (_d = this.nearestInputPos(t, e > 1 && 0 !== t && !l ? u.NONE : a), p.tailShift = _d - t), p.aggregate(this.remove(_d)), l && a !== u.NONE && o === this.rawInputValue) if (a === u.FORCE_LEFT) {
          var _t32;
          for (; o === this.rawInputValue && (_t32 = this.value.length);) p.aggregate(new i({
            tailShift: -1
          })).aggregate(this.remove(_t32 - 1));
        } else a === u.FORCE_RIGHT && h.unshift();
        return p.aggregate(this.append(s, n, h));
      }
    }, {
      key: "maskEquals",
      value: function maskEquals(t) {
        return this.mask === t;
      }
    }, {
      key: "typedValueEquals",
      value: function typedValueEquals(t) {
        var e = this.typedValue;
        return t === e || d.EMPTY_VALUES.includes(t) && d.EMPTY_VALUES.includes(e) || this.doFormat(t) === this.doFormat(this.typedValue);
      }
    }]);
    return d;
  }();
  function p(t) {
    if (null == t) throw new Error("mask property should be defined");
    return t instanceof RegExp ? s.MaskedRegExp : a(t) ? s.MaskedPattern : t instanceof Date || t === Date ? s.MaskedDate : t instanceof Number || "number" == typeof t || t === Number ? s.MaskedNumber : Array.isArray(t) || t === Array ? s.MaskedDynamic : s.Masked && t.prototype instanceof s.Masked ? t : t instanceof s.Masked ? t.constructor : t instanceof Function ? s.MaskedFunction : (console.warn("Mask not found for mask", t), s.Masked);
  }
  function c(t) {
    if (s.Masked && t instanceof s.Masked) return t;
    var e = (t = Object.assign({}, t)).mask;
    if (s.Masked && e instanceof s.Masked) return e;
    var i = p(e);
    if (!i) throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
    return new i(t);
  }
  d.DEFAULTS = {
    format: String,
    parse: function parse(t) {
      return t;
    },
    skipInvalid: !0
  }, d.EMPTY_VALUES = [void 0, null, ""], s.Masked = d, s.createMask = c;
  var g = ["parent", "isOptional", "placeholderChar", "displayChar", "lazy", "eager"],
    k = {
      0: /\d/,
      a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      "*": /./
    };
  var f = /*#__PURE__*/function () {
    function f(t) {
      _classCallCheck(this, f);
      var s = t.parent,
        i = t.isOptional,
        a = t.placeholderChar,
        u = t.displayChar,
        n = t.lazy,
        r = t.eager,
        h = e(t, g);
      this.masked = c(h), Object.assign(this, {
        parent: s,
        isOptional: i,
        placeholderChar: a,
        displayChar: u,
        lazy: n,
        eager: r
      });
    }
    _createClass(f, [{
      key: "reset",
      value: function reset() {
        this.isFilled = !1, this.masked.reset();
      }
    }, {
      key: "remove",
      value: function remove() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return 0 === t && e >= 1 ? (this.isFilled = !1, this.masked.remove(t, e)) : new i();
      }
    }, {
      key: "value",
      get: function get() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.masked.unmaskedValue;
      }
    }, {
      key: "displayValue",
      get: function get() {
        return this.masked.value && this.displayChar || this.value;
      }
    }, {
      key: "isComplete",
      get: function get() {
        return Boolean(this.masked.value) || this.isOptional;
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (this.isFilled) return new i();
        var s = this.masked.state,
          a = this.masked._appendChar(t, e);
        return a.inserted && !1 === this.doValidate(e) && (a.inserted = a.rawInserted = "", this.masked.state = s), a.inserted || this.isOptional || this.lazy || e.input || (a.inserted = this.placeholderChar), a.skip = !a.inserted && !this.isOptional, this.isFilled = Boolean(a.inserted), a;
      }
    }, {
      key: "append",
      value: function append() {
        var _this$masked;
        return (_this$masked = this.masked).append.apply(_this$masked, arguments);
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var t = new i();
        return this.isFilled || this.isOptional || (this.isFilled = !0, t.inserted = this.placeholderChar), t;
      }
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        return new i();
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$masked2;
        return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
      }
    }, {
      key: "appendTail",
      value: function appendTail() {
        var _this$masked3;
        return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          s = arguments.length > 2 ? arguments[2] : void 0;
        return this.masked.extractInput(t, e, s);
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.NONE;
        var s = this.value.length,
          i = Math.min(Math.max(t, 0), s);
        switch (e) {
          case u.LEFT:
          case u.FORCE_LEFT:
            return this.isComplete ? i : 0;
          case u.RIGHT:
          case u.FORCE_RIGHT:
            return this.isComplete ? i : s;
          case u.NONE:
          default:
            return i;
        }
      }
    }, {
      key: "totalInputPositions",
      value: function totalInputPositions() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return this.value.slice(t, e).length;
      }
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this$masked4, _this$parent;
        return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        this.masked.doCommit();
      }
    }, {
      key: "state",
      get: function get() {
        return {
          masked: this.masked.state,
          isFilled: this.isFilled
        };
      },
      set: function set(t) {
        this.masked.state = t.masked, this.isFilled = t.isFilled;
      }
    }]);
    return f;
  }();
  var m = /*#__PURE__*/function () {
    function m(t) {
      _classCallCheck(this, m);
      Object.assign(this, t), this._value = "", this.isFixed = !0;
    }
    _createClass(m, [{
      key: "value",
      get: function get() {
        return this._value;
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.isUnmasking ? this.value : "";
      }
    }, {
      key: "displayValue",
      get: function get() {
        return this.value;
      }
    }, {
      key: "reset",
      value: function reset() {
        this._isRawInput = !1, this._value = "";
      }
    }, {
      key: "remove",
      value: function remove() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
        return this._value = this._value.slice(0, t) + this._value.slice(e), this._value || (this._isRawInput = !1), new i();
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.NONE;
        var s = this._value.length;
        switch (e) {
          case u.LEFT:
          case u.FORCE_LEFT:
            return 0;
          case u.NONE:
          case u.RIGHT:
          case u.FORCE_RIGHT:
          default:
            return s;
        }
      }
    }, {
      key: "totalInputPositions",
      value: function totalInputPositions() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
        return this._isRawInput ? e - t : 0;
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
        return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).raw && this._isRawInput && this._value.slice(t, e) || "";
      }
    }, {
      key: "isComplete",
      get: function get() {
        return !0;
      }
    }, {
      key: "isFilled",
      get: function get() {
        return Boolean(this._value);
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var s = new i();
        if (this.isFilled) return s;
        var a = !0 === this.eager || "append" === this.eager,
          u = this["char"] === t && (this.isUnmasking || e.input || e.raw) && (!e.raw || !a) && !e.tail;
        return u && (s.rawInserted = this["char"]), this._value = s.inserted = this["char"], this._isRawInput = u && (e.raw || e.input), s;
      }
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        return this._appendChar(this["char"], {
          tail: !0
        });
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var t = new i();
        return this.isFilled || (this._value = t.inserted = this["char"]), t;
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        return arguments.length > 1 && void 0 !== arguments[1] || this.value.length, new o("");
      }
    }, {
      key: "appendTail",
      value: function appendTail(t) {
        return a(t) && (t = new o(String(t))), t.appendTo(this);
      }
    }, {
      key: "append",
      value: function append(t, e, s) {
        var i = this._appendChar(t[0], e);
        return null != s && (i.tailShift += this.appendTail(s).tailShift), i;
      }
    }, {
      key: "doCommit",
      value: function doCommit() {}
    }, {
      key: "state",
      get: function get() {
        return {
          _value: this._value,
          _isRawInput: this._isRawInput
        };
      },
      set: function set(t) {
        Object.assign(this, t);
      }
    }]);
    return m;
  }();
  var v = ["chunks"];
  var _ = /*#__PURE__*/function () {
    function _() {
      _classCallCheck(this, _);
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      this.chunks = t, this.from = e;
    }
    _createClass(_, [{
      key: "toString",
      value: function toString() {
        return this.chunks.map(String).join("");
      }
    }, {
      key: "extend",
      value: function extend(t) {
        if (!String(t)) return;
        a(t) && (t = new o(String(t)));
        var e = this.chunks[this.chunks.length - 1],
          s = e && (e.stop === t.stop || null == t.stop) && t.from === e.from + e.toString().length;
        if (t instanceof o) s ? e.extend(t.toString()) : this.chunks.push(t);else if (t instanceof _) {
          if (null == t.stop) {
            var _e19;
            for (; t.chunks.length && null == t.chunks[0].stop;) _e19 = t.chunks.shift(), _e19.from += t.from, this.extend(_e19);
          }
          t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
        }
      }
    }, {
      key: "appendTo",
      value: function appendTo(t) {
        if (!(t instanceof s.MaskedPattern)) {
          return new o(this.toString()).appendTo(t);
        }
        var e = new i();
        for (var _s7 = 0; _s7 < this.chunks.length && !e.skip; ++_s7) {
          var _i30 = this.chunks[_s7],
            _a2 = t._mapPosToBlock(t.value.length),
            _u = _i30.stop;
          var _n12 = void 0;
          if (null != _u && (!_a2 || _a2.index <= _u)) {
            if (_i30 instanceof _ || t._stops.indexOf(_u) >= 0) {
              var _s8 = t._appendPlaceholder(_u);
              e.aggregate(_s8);
            }
            _n12 = _i30 instanceof _ && t._blocks[_u];
          }
          if (_n12) {
            var _s9 = _n12.appendTail(_i30);
            _s9.skip = !1, e.aggregate(_s9), t._value += _s9.inserted;
            var _a3 = _i30.toString().slice(_s9.rawInserted.length);
            _a3 && e.aggregate(t.append(_a3, {
              tail: !0
            }));
          } else e.aggregate(t.append(_i30.toString(), {
            tail: !0
          }));
        }
        return e;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          chunks: this.chunks.map(function (t) {
            return t.state;
          }),
          from: this.from,
          stop: this.stop,
          blockIndex: this.blockIndex
        };
      },
      set: function set(t) {
        var s = t.chunks,
          i = e(t, v);
        Object.assign(this, i), this.chunks = s.map(function (t) {
          var e = "chunks" in t ? new _() : new o();
          return e.state = t, e;
        });
      }
    }, {
      key: "unshift",
      value: function unshift(t) {
        if (!this.chunks.length || null != t && this.from >= t) return "";
        var e = null != t ? t - this.from : t;
        var s = 0;
        for (; s < this.chunks.length;) {
          var _t33 = this.chunks[s],
            _i31 = _t33.unshift(e);
          if (_t33.toString()) {
            if (!_i31) break;
            ++s;
          } else this.chunks.splice(s, 1);
          if (_i31) return _i31;
        }
        return "";
      }
    }, {
      key: "shift",
      value: function shift() {
        if (!this.chunks.length) return "";
        var t = this.chunks.length - 1;
        for (; 0 <= t;) {
          var _e20 = this.chunks[t],
            _s10 = _e20.shift();
          if (_e20.toString()) {
            if (!_s10) break;
            --t;
          } else this.chunks.splice(t, 1);
          if (_s10) return _s10;
        }
        return "";
      }
    }]);
    return _;
  }();
  var E = /*#__PURE__*/function () {
    function E(t, e) {
      _classCallCheck(this, E);
      this.masked = t, this._log = [];
      var _ref11 = t._mapPosToBlock(e) || (e < 0 ? {
          index: 0,
          offset: 0
        } : {
          index: this.masked._blocks.length,
          offset: 0
        }),
        s = _ref11.offset,
        i = _ref11.index;
      this.offset = s, this.index = i, this.ok = !1;
    }
    _createClass(E, [{
      key: "block",
      get: function get() {
        return this.masked._blocks[this.index];
      }
    }, {
      key: "pos",
      get: function get() {
        return this.masked._blockStartPos(this.index) + this.offset;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          index: this.index,
          offset: this.offset,
          ok: this.ok
        };
      },
      set: function set(t) {
        Object.assign(this, t);
      }
    }, {
      key: "pushState",
      value: function pushState() {
        this._log.push(this.state);
      }
    }, {
      key: "popState",
      value: function popState() {
        var t = this._log.pop();
        return this.state = t, t;
      }
    }, {
      key: "bindBlock",
      value: function bindBlock() {
        this.block || (this.index < 0 && (this.index = 0, this.offset = 0), this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1, this.offset = this.block.value.length));
      }
    }, {
      key: "_pushLeft",
      value: function _pushLeft(t) {
        for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = (null === (e = this.block) || void 0 === e ? void 0 : e.value.length) || 0) {
          var e;
          if (t()) return this.ok = !0;
        }
        return this.ok = !1;
      }
    }, {
      key: "_pushRight",
      value: function _pushRight(t) {
        for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) if (t()) return this.ok = !0;
        return this.ok = !1;
      }
    }, {
      key: "pushLeftBeforeFilled",
      value: function pushLeftBeforeFilled() {
        var _this60 = this;
        return this._pushLeft(function () {
          if (!_this60.block.isFixed && _this60.block.value) return _this60.offset = _this60.block.nearestInputPos(_this60.offset, u.FORCE_LEFT), 0 !== _this60.offset || void 0;
        });
      }
    }, {
      key: "pushLeftBeforeInput",
      value: function pushLeftBeforeInput() {
        var _this61 = this;
        return this._pushLeft(function () {
          if (!_this61.block.isFixed) return _this61.offset = _this61.block.nearestInputPos(_this61.offset, u.LEFT), !0;
        });
      }
    }, {
      key: "pushLeftBeforeRequired",
      value: function pushLeftBeforeRequired() {
        var _this62 = this;
        return this._pushLeft(function () {
          if (!(_this62.block.isFixed || _this62.block.isOptional && !_this62.block.value)) return _this62.offset = _this62.block.nearestInputPos(_this62.offset, u.LEFT), !0;
        });
      }
    }, {
      key: "pushRightBeforeFilled",
      value: function pushRightBeforeFilled() {
        var _this63 = this;
        return this._pushRight(function () {
          if (!_this63.block.isFixed && _this63.block.value) return _this63.offset = _this63.block.nearestInputPos(_this63.offset, u.FORCE_RIGHT), _this63.offset !== _this63.block.value.length || void 0;
        });
      }
    }, {
      key: "pushRightBeforeInput",
      value: function pushRightBeforeInput() {
        var _this64 = this;
        return this._pushRight(function () {
          if (!_this64.block.isFixed) return _this64.offset = _this64.block.nearestInputPos(_this64.offset, u.NONE), !0;
        });
      }
    }, {
      key: "pushRightBeforeRequired",
      value: function pushRightBeforeRequired() {
        var _this65 = this;
        return this._pushRight(function () {
          if (!(_this65.block.isFixed || _this65.block.isOptional && !_this65.block.value)) return _this65.offset = _this65.block.nearestInputPos(_this65.offset, u.NONE), !0;
        });
      }
    }]);
    return E;
  }();
  var A = /*#__PURE__*/function (_d2) {
    _inherits(A, _d2);
    function A() {
      _classCallCheck(this, A);
      return _callSuper(this, A, arguments);
    }
    _createClass(A, [{
      key: "_update",
      value: function _update(t) {
        t.mask && (t.validate = function (e) {
          return e.search(t.mask) >= 0;
        }), _get(_getPrototypeOf(A.prototype), "_update", this).call(this, t);
      }
    }]);
    return A;
  }(d);
  s.MaskedRegExp = A;
  var F = ["_blocks"];
  var C = /*#__PURE__*/function (_d3) {
    _inherits(C, _d3);
    function C() {
      var _this66;
      _classCallCheck(this, C);
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t.definitions = Object.assign({}, k, t.definitions), _this66 = _callSuper(this, C, [Object.assign({}, C.DEFAULTS, t)]);
      return _this66;
    }
    _createClass(C, [{
      key: "_update",
      value: function _update() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t.definitions = Object.assign({}, this.definitions, t.definitions), _get(_getPrototypeOf(C.prototype), "_update", this).call(this, t), this._rebuildMask();
      }
    }, {
      key: "_rebuildMask",
      value: function _rebuildMask() {
        var _this67 = this;
        var t = this.definitions;
        this._blocks = [], this._stops = [], this._maskedBlocks = {};
        var e = this.mask;
        if (!e || !t) return;
        var i = !1,
          a = !1;
        var _loop2 = function _loop2(_r8) {
            if (_this67.blocks) {
              var _t34 = e.slice(_r8),
                _s11 = Object.keys(_this67.blocks).filter(function (e) {
                  return 0 === _t34.indexOf(e);
                });
              _s11.sort(function (t, e) {
                return e.length - t.length;
              });
              var _i32 = _s11[0];
              if (_i32) {
                var _t35 = c(Object.assign({
                  parent: _this67,
                  lazy: _this67.lazy,
                  eager: _this67.eager,
                  placeholderChar: _this67.placeholderChar,
                  displayChar: _this67.displayChar,
                  overwrite: _this67.overwrite
                }, _this67.blocks[_i32]));
                _t35 && (_this67._blocks.push(_t35), _this67._maskedBlocks[_i32] || (_this67._maskedBlocks[_i32] = []), _this67._maskedBlocks[_i32].push(_this67._blocks.length - 1)), _r8 += _i32.length - 1;
                _r7 = _r8;
                return 0; // continue
              }
            }
            var h = e[_r8],
              l = (h in t);
            if (h === C.STOP_CHAR) {
              _this67._stops.push(_this67._blocks.length);
              _r7 = _r8;
              return 0; // continue
            }
            if ("{" === h || "}" === h) {
              i = !i;
              _r7 = _r8;
              return 0; // continue
            }
            if ("[" === h || "]" === h) {
              a = !a;
              _r7 = _r8;
              return 0; // continue
            }
            if (h === C.ESCAPE_CHAR) {
              if (++_r8, h = e[_r8], !h) {
                _r7 = _r8;
                return 1;
              } // break
              l = !1;
            }
            var o = null === (u = t[h]) || void 0 === u || !u.mask || (null === (n = t[h]) || void 0 === n ? void 0 : n.mask.prototype) instanceof s.Masked ? {
                mask: t[h]
              } : t[h],
              d = l ? new f(Object.assign({
                parent: _this67,
                isOptional: a,
                lazy: _this67.lazy,
                eager: _this67.eager,
                placeholderChar: _this67.placeholderChar,
                displayChar: _this67.displayChar
              }, o)) : new m({
                "char": h,
                eager: _this67.eager,
                isUnmasking: i
              });
            _this67._blocks.push(d);
            _r7 = _r8;
          },
          u,
          n,
          _ret;
        for (var _r7 = 0; _r7 < e.length; ++_r7) {
          _ret = _loop2(_r7);
          if (_ret === 0) continue;
          if (_ret === 1) break;
        }
      }
    }, {
      key: "state",
      get: function get() {
        return Object.assign({}, _get(_getPrototypeOf(C.prototype), "state", this), {
          _blocks: this._blocks.map(function (t) {
            return t.state;
          })
        });
      },
      set: function set(t) {
        var s = t._blocks,
          i = e(t, F);
        this._blocks.forEach(function (t, e) {
          return t.state = s[e];
        }), _set(_getPrototypeOf(C.prototype), "state", i, this, true);
      }
    }, {
      key: "reset",
      value: function reset() {
        _get(_getPrototypeOf(C.prototype), "reset", this).call(this), this._blocks.forEach(function (t) {
          return t.reset();
        });
      }
    }, {
      key: "isComplete",
      get: function get() {
        return this._blocks.every(function (t) {
          return t.isComplete;
        });
      }
    }, {
      key: "isFilled",
      get: function get() {
        return this._blocks.every(function (t) {
          return t.isFilled;
        });
      }
    }, {
      key: "isFixed",
      get: function get() {
        return this._blocks.every(function (t) {
          return t.isFixed;
        });
      }
    }, {
      key: "isOptional",
      get: function get() {
        return this._blocks.every(function (t) {
          return t.isOptional;
        });
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        this._blocks.forEach(function (t) {
          return t.doCommit();
        }), _get(_getPrototypeOf(C.prototype), "doCommit", this).call(this);
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._blocks.reduce(function (t, e) {
          return t + e.unmaskedValue;
        }, "");
      },
      set: function set(t) {
        _set(_getPrototypeOf(C.prototype), "unmaskedValue", t, this, true);
      }
    }, {
      key: "value",
      get: function get() {
        return this._blocks.reduce(function (t, e) {
          return t + e.value;
        }, "");
      },
      set: function set(t) {
        _set(_getPrototypeOf(C.prototype), "value", t, this, true);
      }
    }, {
      key: "displayValue",
      get: function get() {
        return this._blocks.reduce(function (t, e) {
          return t + e.displayValue;
        }, "");
      }
    }, {
      key: "appendTail",
      value: function appendTail(t) {
        return _get(_getPrototypeOf(C.prototype), "appendTail", this).call(this, t).aggregate(this._appendPlaceholder());
      }
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        var t;
        var e = new i();
        var s = null === (t = this._mapPosToBlock(this.value.length)) || void 0 === t ? void 0 : t.index;
        if (null == s) return e;
        this._blocks[s].isFilled && ++s;
        for (var _t36 = s; _t36 < this._blocks.length; ++_t36) {
          var _s12 = this._blocks[_t36]._appendEager();
          if (!_s12.inserted) break;
          e.aggregate(_s12);
        }
        return e;
      }
    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var s = this._mapPosToBlock(this.value.length),
          a = new i();
        if (!s) return a;
        for (var _i33 = s.index;; ++_i33) {
          var u, n;
          var _s13 = this._blocks[_i33];
          if (!_s13) break;
          var _r9 = _s13._appendChar(t, Object.assign({}, e, {
              _beforeTailState: null === (u = e._beforeTailState) || void 0 === u || null === (n = u._blocks) || void 0 === n ? void 0 : n[_i33]
            })),
            _h = _r9.skip;
          if (a.aggregate(_r9), _h || _r9.rawInserted) break;
        }
        return a;
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this68 = this;
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        var s = new _();
        return t === e || this._forEachBlocksInRange(t, e, function (t, e, i, a) {
          var u = t.extractTail(i, a);
          u.stop = _this68._findStopBefore(e), u.from = _this68._blockStartPos(e), u instanceof _ && (u.blockIndex = e), s.extend(u);
        }), s;
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (t === e) return "";
        var i = "";
        return this._forEachBlocksInRange(t, e, function (t, e, a, u) {
          i += t.extractInput(a, u, s);
        }), i;
      }
    }, {
      key: "_findStopBefore",
      value: function _findStopBefore(t) {
        var e;
        for (var _s14 = 0; _s14 < this._stops.length; ++_s14) {
          var _i34 = this._stops[_s14];
          if (!(_i34 <= t)) break;
          e = _i34;
        }
        return e;
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder(t) {
        var _this69 = this;
        var e = new i();
        if (this.lazy && null == t) return e;
        var s = this._mapPosToBlock(this.value.length);
        if (!s) return e;
        var a = s.index,
          u = null != t ? t : this._blocks.length;
        return this._blocks.slice(a, u).forEach(function (s) {
          if (!s.lazy || null != t) {
            var _t37 = null != s._blocks ? [s._blocks.length] : [],
              _i35 = s._appendPlaceholder.apply(s, _t37);
            _this69._value += _i35.inserted, e.aggregate(_i35);
          }
        }), e;
      }
    }, {
      key: "_mapPosToBlock",
      value: function _mapPosToBlock(t) {
        var e = "";
        for (var _s15 = 0; _s15 < this._blocks.length; ++_s15) {
          var _i36 = this._blocks[_s15],
            _a4 = e.length;
          if (e += _i36.value, t <= e.length) return {
            index: _s15,
            offset: t - _a4
          };
        }
      }
    }, {
      key: "_blockStartPos",
      value: function _blockStartPos(t) {
        return this._blocks.slice(0, t).reduce(function (t, e) {
          return t + e.value.length;
        }, 0);
      }
    }, {
      key: "_forEachBlocksInRange",
      value: function _forEachBlocksInRange(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          s = arguments.length > 2 ? arguments[2] : void 0;
        var i = this._mapPosToBlock(t);
        if (i) {
          var _t38 = this._mapPosToBlock(e),
            _a5 = _t38 && i.index === _t38.index,
            _u2 = i.offset,
            _n13 = _t38 && _a5 ? _t38.offset : this._blocks[i.index].value.length;
          if (s(this._blocks[i.index], i.index, _u2, _n13), _t38 && !_a5) {
            for (var _e21 = i.index + 1; _e21 < _t38.index; ++_e21) s(this._blocks[_e21], _e21, 0, this._blocks[_e21].value.length);
            s(this._blocks[_t38.index], _t38.index, 0, _t38.offset);
          }
        }
      }
    }, {
      key: "remove",
      value: function remove() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        var s = _get(_getPrototypeOf(C.prototype), "remove", this).call(this, t, e);
        return this._forEachBlocksInRange(t, e, function (t, e, i, a) {
          s.aggregate(t.remove(i, a));
        }), s;
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.NONE;
        if (!this._blocks.length) return 0;
        var s = new E(this, t);
        if (e === u.NONE) return s.pushRightBeforeInput() ? s.pos : (s.popState(), s.pushLeftBeforeInput() ? s.pos : this.value.length);
        if (e === u.LEFT || e === u.FORCE_LEFT) {
          if (e === u.LEFT) {
            if (s.pushRightBeforeFilled(), s.ok && s.pos === t) return t;
            s.popState();
          }
          if (s.pushLeftBeforeInput(), s.pushLeftBeforeRequired(), s.pushLeftBeforeFilled(), e === u.LEFT) {
            if (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.ok && s.pos <= t) return s.pos;
            if (s.popState(), s.ok && s.pos <= t) return s.pos;
            s.popState();
          }
          return s.ok ? s.pos : e === u.FORCE_LEFT ? 0 : (s.popState(), s.ok ? s.pos : (s.popState(), s.ok ? s.pos : 0));
        }
        return e === u.RIGHT || e === u.FORCE_RIGHT ? (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.pushRightBeforeFilled() ? s.pos : e === u.FORCE_RIGHT ? this.value.length : (s.popState(), s.ok ? s.pos : (s.popState(), s.ok ? s.pos : this.nearestInputPos(t, u.LEFT)))) : t;
      }
    }, {
      key: "totalInputPositions",
      value: function totalInputPositions() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          s = 0;
        return this._forEachBlocksInRange(t, e, function (t, e, i, a) {
          s += t.totalInputPositions(i, a);
        }), s;
      }
    }, {
      key: "maskedBlock",
      value: function maskedBlock(t) {
        return this.maskedBlocks(t)[0];
      }
    }, {
      key: "maskedBlocks",
      value: function maskedBlocks(t) {
        var _this70 = this;
        var e = this._maskedBlocks[t];
        return e ? e.map(function (t) {
          return _this70._blocks[t];
        }) : [];
      }
    }]);
    return C;
  }(d);
  C.DEFAULTS = {
    lazy: !0,
    placeholderChar: "_"
  }, C.STOP_CHAR = "`", C.ESCAPE_CHAR = "\\", C.InputDefinition = f, C.FixedDefinition = m, s.MaskedPattern = C;
  var b = /*#__PURE__*/function (_C) {
    _inherits(b, _C);
    function b() {
      _classCallCheck(this, b);
      return _callSuper(this, b, arguments);
    }
    _createClass(b, [{
      key: "_matchFrom",
      get: function get() {
        return this.maxLength - String(this.from).length;
      }
    }, {
      key: "_update",
      value: function _update(t) {
        t = Object.assign({
          to: this.to || 0,
          from: this.from || 0,
          maxLength: this.maxLength || 0
        }, t);
        var e = String(t.to).length;
        null != t.maxLength && (e = Math.max(e, t.maxLength)), t.maxLength = e;
        var s = String(t.from).padStart(e, "0"),
          i = String(t.to).padStart(e, "0");
        var a = 0;
        for (; a < i.length && i[a] === s[a];) ++a;
        t.mask = i.slice(0, a).replace(/0/g, "\\0") + "0".repeat(e - a), _get(_getPrototypeOf(b.prototype), "_update", this).call(this, t);
      }
    }, {
      key: "isComplete",
      get: function get() {
        return _get(_getPrototypeOf(b.prototype), "isComplete", this) && Boolean(this.value);
      }
    }, {
      key: "boundaries",
      value: function boundaries(t) {
        var e = "",
          s = "";
        var _ref12 = t.match(/^(\D*)(\d*)(\D*)/) || [],
          _ref13 = _slicedToArray(_ref12, 3),
          i = _ref13[1],
          a = _ref13[2];
        return a && (e = "0".repeat(i.length) + a, s = "9".repeat(i.length) + a), e = e.padEnd(this.maxLength, "0"), s = s.padEnd(this.maxLength, "9"), [e, s];
      }
    }, {
      key: "doPrepare",
      value: function doPrepare(t) {
        var _r10, _r11;
        var e,
          s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ((_r10 = r(_get(_getPrototypeOf(b.prototype), "doPrepare", this).call(this, t.replace(/\D/g, ""), s)), _r11 = _slicedToArray(_r10, 2), t = _r11[0], e = _r11[1]), !this.autofix || !t) return t;
        var i = String(this.from).padStart(this.maxLength, "0"),
          a = String(this.to).padStart(this.maxLength, "0");
        var u = this.value + t;
        if (u.length > this.maxLength) return "";
        var _this$boundaries = this.boundaries(u),
          _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
          n = _this$boundaries2[0],
          h = _this$boundaries2[1];
        return Number(h) < this.from ? i[u.length - 1] : Number(n) > this.to ? "pad" === this.autofix && u.length < this.maxLength ? ["", e.aggregate(this.append(i[u.length - 1] + t, s))] : a[u.length - 1] : t;
      }
    }, {
      key: "doValidate",
      value: function doValidate() {
        var t = this.value;
        if (-1 === t.search(/[^0]/) && t.length <= this._matchFrom) return !0;
        var _this$boundaries3 = this.boundaries(t),
          _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
          e = _this$boundaries4[0],
          s = _this$boundaries4[1];
        return this.from <= Number(s) && Number(e) <= this.to && _get(_getPrototypeOf(b.prototype), "doValidate", this).apply(this, arguments);
      }
    }]);
    return b;
  }(C);
  s.MaskedRange = b;
  var S = /*#__PURE__*/function (_C2) {
    _inherits(S, _C2);
    function S(t) {
      _classCallCheck(this, S);
      return _callSuper(this, S, [Object.assign({}, S.DEFAULTS, t)]);
    }
    _createClass(S, [{
      key: "_update",
      value: function _update(t) {
        t.mask === Date && delete t.mask, t.pattern && (t.mask = t.pattern);
        var e = t.blocks;
        t.blocks = Object.assign({}, S.GET_DEFAULT_BLOCKS()), t.min && (t.blocks.Y.from = t.min.getFullYear()), t.max && (t.blocks.Y.to = t.max.getFullYear()), t.min && t.max && t.blocks.Y.from === t.blocks.Y.to && (t.blocks.m.from = t.min.getMonth() + 1, t.blocks.m.to = t.max.getMonth() + 1, t.blocks.m.from === t.blocks.m.to && (t.blocks.d.from = t.min.getDate(), t.blocks.d.to = t.max.getDate())), Object.assign(t.blocks, this.blocks, e), Object.keys(t.blocks).forEach(function (e) {
          var s = t.blocks[e];
          !("autofix" in s) && "autofix" in t && (s.autofix = t.autofix);
        }), _get(_getPrototypeOf(S.prototype), "_update", this).call(this, t);
      }
    }, {
      key: "doValidate",
      value: function doValidate() {
        var t = this.date;
        return _get(_getPrototypeOf(S.prototype), "doValidate", this).apply(this, arguments) && (!this.isComplete || this.isDateExist(this.value) && null != t && (null == this.min || this.min <= t) && (null == this.max || t <= this.max));
      }
    }, {
      key: "isDateExist",
      value: function isDateExist(t) {
        return this.format(this.parse(t, this), this).indexOf(t) >= 0;
      }
    }, {
      key: "date",
      get: function get() {
        return this.typedValue;
      },
      set: function set(t) {
        this.typedValue = t;
      }
    }, {
      key: "typedValue",
      get: function get() {
        return this.isComplete ? _get(_getPrototypeOf(S.prototype), "typedValue", this) : null;
      },
      set: function set(t) {
        _set(_getPrototypeOf(S.prototype), "typedValue", t, this, true);
      }
    }, {
      key: "maskEquals",
      value: function maskEquals(t) {
        return t === Date || _get(_getPrototypeOf(S.prototype), "maskEquals", this).call(this, t);
      }
    }]);
    return S;
  }(C);
  S.DEFAULTS = {
    pattern: "d{.}`m{.}`Y",
    format: function format(t) {
      if (!t) return "";
      return [String(t.getDate()).padStart(2, "0"), String(t.getMonth() + 1).padStart(2, "0"), t.getFullYear()].join(".");
    },
    parse: function parse(t) {
      var _t$split = t.split("."),
        _t$split2 = _slicedToArray(_t$split, 3),
        e = _t$split2[0],
        s = _t$split2[1],
        i = _t$split2[2];
      return new Date(i, s - 1, e);
    }
  }, S.GET_DEFAULT_BLOCKS = function () {
    return {
      d: {
        mask: b,
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: b,
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: b,
        from: 1900,
        to: 9999
      }
    };
  }, s.MaskedDate = S;
  var D = /*#__PURE__*/function () {
    function D() {
      _classCallCheck(this, D);
    }
    _createClass(D, [{
      key: "selectionStart",
      get: function get() {
        var t;
        try {
          t = this._unsafeSelectionStart;
        } catch (t) {}
        return null != t ? t : this.value.length;
      }
    }, {
      key: "selectionEnd",
      get: function get() {
        var t;
        try {
          t = this._unsafeSelectionEnd;
        } catch (t) {}
        return null != t ? t : this.value.length;
      }
    }, {
      key: "select",
      value: function select(t, e) {
        if (null != t && null != e && (t !== this.selectionStart || e !== this.selectionEnd)) try {
          this._unsafeSelect(t, e);
        } catch (t) {}
      }
    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(t, e) {}
    }, {
      key: "isActive",
      get: function get() {
        return !1;
      }
    }, {
      key: "bindEvents",
      value: function bindEvents(t) {}
    }, {
      key: "unbindEvents",
      value: function unbindEvents() {}
    }]);
    return D;
  }();
  s.MaskElement = D;
  var B = /*#__PURE__*/function (_D) {
    _inherits(B, _D);
    function B(t) {
      var _this71;
      _classCallCheck(this, B);
      _this71 = _callSuper(this, B), _this71.input = t, _this71._handlers = {};
      return _this71;
    }
    _createClass(B, [{
      key: "rootElement",
      get: function get() {
        var t, e, s;
        return null !== (t = null === (e = (s = this.input).getRootNode) || void 0 === e ? void 0 : e.call(s)) && void 0 !== t ? t : document;
      }
    }, {
      key: "isActive",
      get: function get() {
        return this.input === this.rootElement.activeElement;
      }
    }, {
      key: "_unsafeSelectionStart",
      get: function get() {
        return this.input.selectionStart;
      }
    }, {
      key: "_unsafeSelectionEnd",
      get: function get() {
        return this.input.selectionEnd;
      }
    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(t, e) {
        this.input.setSelectionRange(t, e);
      }
    }, {
      key: "value",
      get: function get() {
        return this.input.value;
      },
      set: function set(t) {
        this.input.value = t;
      }
    }, {
      key: "bindEvents",
      value: function bindEvents(t) {
        var _this72 = this;
        Object.keys(t).forEach(function (e) {
          return _this72._toggleEventHandler(B.EVENTS_MAP[e], t[e]);
        });
      }
    }, {
      key: "unbindEvents",
      value: function unbindEvents() {
        var _this73 = this;
        Object.keys(this._handlers).forEach(function (t) {
          return _this73._toggleEventHandler(t);
        });
      }
    }, {
      key: "_toggleEventHandler",
      value: function _toggleEventHandler(t, e) {
        this._handlers[t] && (this.input.removeEventListener(t, this._handlers[t]), delete this._handlers[t]), e && (this.input.addEventListener(t, e), this._handlers[t] = e);
      }
    }]);
    return B;
  }(D);
  B.EVENTS_MAP = {
    selectionChange: "keydown",
    input: "input",
    drop: "drop",
    click: "click",
    focus: "focus",
    commit: "blur"
  }, s.HTMLMaskElement = B;
  var x = /*#__PURE__*/function (_B) {
    _inherits(x, _B);
    function x() {
      _classCallCheck(this, x);
      return _callSuper(this, x, arguments);
    }
    _createClass(x, [{
      key: "_unsafeSelectionStart",
      get: function get() {
        var t = this.rootElement,
          e = t.getSelection && t.getSelection(),
          s = e && e.anchorOffset,
          i = e && e.focusOffset;
        return null == i || null == s || s < i ? s : i;
      }
    }, {
      key: "_unsafeSelectionEnd",
      get: function get() {
        var t = this.rootElement,
          e = t.getSelection && t.getSelection(),
          s = e && e.anchorOffset,
          i = e && e.focusOffset;
        return null == i || null == s || s > i ? s : i;
      }
    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(t, e) {
        if (!this.rootElement.createRange) return;
        var s = this.rootElement.createRange();
        s.setStart(this.input.firstChild || this.input, t), s.setEnd(this.input.lastChild || this.input, e);
        var i = this.rootElement,
          a = i.getSelection && i.getSelection();
        a && (a.removeAllRanges(), a.addRange(s));
      }
    }, {
      key: "value",
      get: function get() {
        return this.input.textContent;
      },
      set: function set(t) {
        this.input.textContent = t;
      }
    }]);
    return x;
  }(B);
  s.HTMLContenteditableMaskElement = x;
  var M = ["mask"];
  var T = /*#__PURE__*/function () {
    function T(t, e) {
      _classCallCheck(this, T);
      this.el = t instanceof D ? t : t.isContentEditable && "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName ? new x(t) : new B(t), this.masked = c(e), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
    }
    _createClass(T, [{
      key: "mask",
      get: function get() {
        return this.masked.mask;
      },
      set: function set(t) {
        if (this.maskEquals(t)) return;
        if (!(t instanceof s.Masked) && this.masked.constructor === p(t)) return void this.masked.updateOptions({
          mask: t
        });
        var e = c({
          mask: t
        });
        e.unmaskedValue = this.masked.unmaskedValue, this.masked = e;
      }
    }, {
      key: "maskEquals",
      value: function maskEquals(t) {
        var e;
        return null == t || (null === (e = this.masked) || void 0 === e ? void 0 : e.maskEquals(t));
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(t) {
        this.value !== t && (this.masked.value = t, this.updateControl(), this.alignCursor());
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._unmaskedValue;
      },
      set: function set(t) {
        this.unmaskedValue !== t && (this.masked.unmaskedValue = t, this.updateControl(), this.alignCursor());
      }
    }, {
      key: "typedValue",
      get: function get() {
        return this.masked.typedValue;
      },
      set: function set(t) {
        this.masked.typedValueEquals(t) || (this.masked.typedValue = t, this.updateControl(), this.alignCursor());
      }
    }, {
      key: "displayValue",
      get: function get() {
        return this.masked.displayValue;
      }
    }, {
      key: "_bindEvents",
      value: function _bindEvents() {
        this.el.bindEvents({
          selectionChange: this._saveSelection,
          input: this._onInput,
          drop: this._onDrop,
          click: this._onClick,
          focus: this._onFocus,
          commit: this._onChange
        });
      }
    }, {
      key: "_unbindEvents",
      value: function _unbindEvents() {
        this.el && this.el.unbindEvents();
      }
    }, {
      key: "_fireEvent",
      value: function _fireEvent(t) {
        for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) s[i - 1] = arguments[i];
        var a = this._listeners[t];
        a && a.forEach(function (t) {
          return t.apply(void 0, s);
        });
      }
    }, {
      key: "selectionStart",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
      }
    }, {
      key: "cursorPos",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
      },
      set: function set(t) {
        this.el && this.el.isActive && (this.el.select(t, t), this._saveSelection());
      }
    }, {
      key: "_saveSelection",
      value: function _saveSelection() {
        this.displayValue !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
          start: this.selectionStart,
          end: this.cursorPos
        };
      }
    }, {
      key: "updateValue",
      value: function updateValue() {
        this.masked.value = this.el.value, this._value = this.masked.value;
      }
    }, {
      key: "updateControl",
      value: function updateControl() {
        var t = this.masked.unmaskedValue,
          e = this.masked.value,
          s = this.displayValue,
          i = this.unmaskedValue !== t || this.value !== e;
        this._unmaskedValue = t, this._value = e, this.el.value !== s && (this.el.value = s), i && this._fireChangeEvents();
      }
    }, {
      key: "updateOptions",
      value: function updateOptions(t) {
        var s = t.mask,
          i = e(t, M),
          a = !this.maskEquals(s),
          u = !h(this.masked, i);
        a && (this.mask = s), u && this.masked.updateOptions(i), (a || u) && this.updateControl();
      }
    }, {
      key: "updateCursor",
      value: function updateCursor(t) {
        null != t && (this.cursorPos = t, this._delayUpdateCursor(t));
      }
    }, {
      key: "_delayUpdateCursor",
      value: function _delayUpdateCursor(t) {
        var _this74 = this;
        this._abortUpdateCursor(), this._changingCursorPos = t, this._cursorChanging = setTimeout(function () {
          _this74.el && (_this74.cursorPos = _this74._changingCursorPos, _this74._abortUpdateCursor());
        }, 10);
      }
    }, {
      key: "_fireChangeEvents",
      value: function _fireChangeEvents() {
        this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent);
      }
    }, {
      key: "_abortUpdateCursor",
      value: function _abortUpdateCursor() {
        this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging);
      }
    }, {
      key: "alignCursor",
      value: function alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, u.LEFT));
      }
    }, {
      key: "alignCursorFriendly",
      value: function alignCursorFriendly() {
        this.selectionStart === this.cursorPos && this.alignCursor();
      }
    }, {
      key: "on",
      value: function on(t, e) {
        return this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e), this;
      }
    }, {
      key: "off",
      value: function off(t, e) {
        if (!this._listeners[t]) return this;
        if (!e) return delete this._listeners[t], this;
        var s = this._listeners[t].indexOf(e);
        return s >= 0 && this._listeners[t].splice(s, 1), this;
      }
    }, {
      key: "_onInput",
      value: function _onInput(t) {
        if (this._inputEvent = t, this._abortUpdateCursor(), !this._selection) return this.updateValue();
        var e = new l(this.el.value, this.cursorPos, this.displayValue, this._selection),
          s = this.masked.rawInputValue,
          i = this.masked.splice(e.startChangePos, e.removed.length, e.inserted, e.removeDirection, {
            input: !0,
            raw: !0
          }).offset,
          a = s === this.masked.rawInputValue ? e.removeDirection : u.NONE;
        var n = this.masked.nearestInputPos(e.startChangePos + i, a);
        a !== u.NONE && (n = this.masked.nearestInputPos(n, u.NONE)), this.updateControl(), this.updateCursor(n), delete this._inputEvent;
      }
    }, {
      key: "_onChange",
      value: function _onChange() {
        this.displayValue !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection();
      }
    }, {
      key: "_onDrop",
      value: function _onDrop(t) {
        t.preventDefault(), t.stopPropagation();
      }
    }, {
      key: "_onFocus",
      value: function _onFocus(t) {
        this.alignCursorFriendly();
      }
    }, {
      key: "_onClick",
      value: function _onClick(t) {
        this.alignCursorFriendly();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this._unbindEvents(), this._listeners.length = 0, delete this.el;
      }
    }]);
    return T;
  }();
  s.InputMask = T;
  var I = /*#__PURE__*/function (_C3) {
    _inherits(I, _C3);
    function I() {
      _classCallCheck(this, I);
      return _callSuper(this, I, arguments);
    }
    _createClass(I, [{
      key: "_update",
      value: function _update(t) {
        t["enum"] && (t.mask = "*".repeat(t["enum"][0].length)), _get(_getPrototypeOf(I.prototype), "_update", this).call(this, t);
      }
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this75 = this;
        return this["enum"].some(function (t) {
          return t.indexOf(_this75.unmaskedValue) >= 0;
        }) && _get(_getPrototypeOf(I.prototype), "doValidate", this).apply(this, arguments);
      }
    }]);
    return I;
  }(C);
  s.MaskedEnum = I;
  var w = /*#__PURE__*/function (_d4) {
    _inherits(w, _d4);
    function w(t) {
      _classCallCheck(this, w);
      return _callSuper(this, w, [Object.assign({}, w.DEFAULTS, t)]);
    }
    _createClass(w, [{
      key: "_update",
      value: function _update(t) {
        _get(_getPrototypeOf(w.prototype), "_update", this).call(this, t), this._updateRegExps();
      }
    }, {
      key: "_updateRegExps",
      value: function _updateRegExps() {
        var t = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
          e = (this.scale ? "(".concat(n(this.radix), "\\d{0,").concat(this.scale, "})?") : "") + "$";
        this._numberRegExp = new RegExp(t + "\\d*" + e), this._mapToRadixRegExp = new RegExp("[".concat(this.mapToRadix.map(n).join(""), "]"), "g"), this._thousandsSeparatorRegExp = new RegExp(n(this.thousandsSeparator), "g");
      }
    }, {
      key: "_removeThousandsSeparators",
      value: function _removeThousandsSeparators(t) {
        return t.replace(this._thousandsSeparatorRegExp, "");
      }
    }, {
      key: "_insertThousandsSeparators",
      value: function _insertThousandsSeparators(t) {
        var e = t.split(this.radix);
        return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), e.join(this.radix);
      }
    }, {
      key: "doPrepare",
      value: function doPrepare(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        t = this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (e.input && e.raw || !e.input && !e.raw) ? t.replace(this._mapToRadixRegExp, this.radix) : t);
        var _r12 = r(_get(_getPrototypeOf(w.prototype), "doPrepare", this).call(this, t, e)),
          _r13 = _slicedToArray(_r12, 2),
          s = _r13[0],
          i = _r13[1];
        return t && !s && (i.skip = !0), [s, i];
      }
    }, {
      key: "_separatorsCount",
      value: function _separatorsCount(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          s = 0;
        for (var _i37 = 0; _i37 < t; ++_i37) this._value.indexOf(this.thousandsSeparator, _i37) === _i37 && (++s, e && (t += this.thousandsSeparator.length));
        return s;
      }
    }, {
      key: "_separatorsCountFromSlice",
      value: function _separatorsCountFromSlice() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._value;
        return this._separatorsCount(this._removeThousandsSeparators(t).length, !0);
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var _this$_adjustRangeWit, _this$_adjustRangeWit2;
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          s = arguments.length > 2 ? arguments[2] : void 0;
        return (_this$_adjustRangeWit = this._adjustRangeWithSeparators(t, e), _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2), t = _this$_adjustRangeWit2[0], e = _this$_adjustRangeWit2[1]), this._removeThousandsSeparators(_get(_getPrototypeOf(w.prototype), "extractInput", this).call(this, t, e, s));
      }
    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!this.thousandsSeparator) return _get(_getPrototypeOf(w.prototype), "_appendCharRaw", this).call(this, t, e);
        var s = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
          i = this._separatorsCountFromSlice(s);
        this._value = this._removeThousandsSeparators(this.value);
        var a = _get(_getPrototypeOf(w.prototype), "_appendCharRaw", this).call(this, t, e);
        this._value = this._insertThousandsSeparators(this._value);
        var u = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
          n = this._separatorsCountFromSlice(u);
        return a.tailShift += (n - i) * this.thousandsSeparator.length, a.skip = !a.rawInserted && t === this.thousandsSeparator, a;
      }
    }, {
      key: "_findSeparatorAround",
      value: function _findSeparatorAround(t) {
        if (this.thousandsSeparator) {
          var _e22 = t - this.thousandsSeparator.length + 1,
            _s16 = this.value.indexOf(this.thousandsSeparator, _e22);
          if (_s16 <= t) return _s16;
        }
        return -1;
      }
    }, {
      key: "_adjustRangeWithSeparators",
      value: function _adjustRangeWithSeparators(t, e) {
        var s = this._findSeparatorAround(t);
        s >= 0 && (t = s);
        var i = this._findSeparatorAround(e);
        return i >= 0 && (e = i + this.thousandsSeparator.length), [t, e];
      }
    }, {
      key: "remove",
      value: function remove() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(t, e);
        var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);
        t = _this$_adjustRangeWit4[0];
        e = _this$_adjustRangeWit4[1];
        var s = this.value.slice(0, t),
          a = this.value.slice(e),
          u = this._separatorsCount(s.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(s + a));
        var n = this._separatorsCountFromSlice(s);
        return new i({
          tailShift: (n - u) * this.thousandsSeparator.length
        });
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(t, e) {
        if (!this.thousandsSeparator) return t;
        switch (e) {
          case u.NONE:
          case u.LEFT:
          case u.FORCE_LEFT:
            {
              var _s17 = this._findSeparatorAround(t - 1);
              if (_s17 >= 0) {
                var _i38 = _s17 + this.thousandsSeparator.length;
                if (t < _i38 || this.value.length <= _i38 || e === u.FORCE_LEFT) return _s17;
              }
              break;
            }
          case u.RIGHT:
          case u.FORCE_RIGHT:
            {
              var _e23 = this._findSeparatorAround(t);
              if (_e23 >= 0) return _e23 + this.thousandsSeparator.length;
            }
        }
        return t;
      }
    }, {
      key: "doValidate",
      value: function doValidate(t) {
        var e = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
        if (e) {
          var _t39 = this.number;
          e = e && !isNaN(_t39) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max);
        }
        return e && _get(_getPrototypeOf(w.prototype), "doValidate", this).call(this, t);
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.value) {
          var _t40 = this.number;
          var _e24 = _t40;
          null != this.min && (_e24 = Math.max(_e24, this.min)), null != this.max && (_e24 = Math.min(_e24, this.max)), _e24 !== _t40 && (this.unmaskedValue = this.doFormat(_e24));
          var _s18 = this.value;
          this.normalizeZeros && (_s18 = this._normalizeZeros(_s18)), this.padFractionalZeros && this.scale > 0 && (_s18 = this._padFractionalZeros(_s18)), this._value = _s18;
        }
        _get(_getPrototypeOf(w.prototype), "doCommit", this).call(this);
      }
    }, {
      key: "_normalizeZeros",
      value: function _normalizeZeros(t) {
        var e = this._removeThousandsSeparators(t).split(this.radix);
        return e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, function (t, e, s, i) {
          return e + i;
        }), t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + "0"), e.length > 1 && (e[1] = e[1].replace(/0*$/, ""), e[1].length || (e.length = 1)), this._insertThousandsSeparators(e.join(this.radix));
      }
    }, {
      key: "_padFractionalZeros",
      value: function _padFractionalZeros(t) {
        if (!t) return t;
        var e = t.split(this.radix);
        return e.length < 2 && e.push(""), e[1] = e[1].padEnd(this.scale, "0"), e.join(this.radix);
      }
    }, {
      key: "doSkipInvalid",
      value: function doSkipInvalid(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s = arguments.length > 2 ? arguments[2] : void 0;
        var i = 0 === this.scale && t !== this.thousandsSeparator && (t === this.radix || t === w.UNMASKED_RADIX || this.mapToRadix.includes(t));
        return _get(_getPrototypeOf(w.prototype), "doSkipInvalid", this).call(this, t, e, s) && !i;
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, w.UNMASKED_RADIX);
      },
      set: function set(t) {
        _set(_getPrototypeOf(w.prototype), "unmaskedValue", t, this, true);
      }
    }, {
      key: "typedValue",
      get: function get() {
        return this.doParse(this.unmaskedValue);
      },
      set: function set(t) {
        this.rawInputValue = this.doFormat(t).replace(w.UNMASKED_RADIX, this.radix);
      }
    }, {
      key: "number",
      get: function get() {
        return this.typedValue;
      },
      set: function set(t) {
        this.typedValue = t;
      }
    }, {
      key: "allowNegative",
      get: function get() {
        return this.signed || null != this.min && this.min < 0 || null != this.max && this.max < 0;
      }
    }, {
      key: "typedValueEquals",
      value: function typedValueEquals(t) {
        return (_get(_getPrototypeOf(w.prototype), "typedValueEquals", this).call(this, t) || w.EMPTY_VALUES.includes(t) && w.EMPTY_VALUES.includes(this.typedValue)) && !(0 === t && "" === this.value);
      }
    }]);
    return w;
  }(d);
  w.UNMASKED_RADIX = ".", w.DEFAULTS = {
    radix: ",",
    thousandsSeparator: "",
    mapToRadix: [w.UNMASKED_RADIX],
    scale: 2,
    signed: !1,
    normalizeZeros: !0,
    padFractionalZeros: !1,
    parse: Number,
    format: function format(t) {
      return t.toLocaleString("en-US", {
        useGrouping: !1,
        maximumFractionDigits: 20
      });
    }
  }, w.EMPTY_VALUES = [].concat(_toConsumableArray(d.EMPTY_VALUES), [0]), s.MaskedNumber = w;
  var y = /*#__PURE__*/function (_d5) {
    _inherits(y, _d5);
    function y() {
      _classCallCheck(this, y);
      return _callSuper(this, y, arguments);
    }
    _createClass(y, [{
      key: "_update",
      value: function _update(t) {
        t.mask && (t.validate = t.mask), _get(_getPrototypeOf(y.prototype), "_update", this).call(this, t);
      }
    }]);
    return y;
  }(d);
  s.MaskedFunction = y;
  var V = ["compiledMasks", "currentMaskRef", "currentMask"],
    R = ["mask"];
  var P = /*#__PURE__*/function (_d6) {
    _inherits(P, _d6);
    function P(t) {
      var _this76;
      _classCallCheck(this, P);
      _this76 = _callSuper(this, P, [Object.assign({}, P.DEFAULTS, t)]), _this76.currentMask = null;
      return _this76;
    }
    _createClass(P, [{
      key: "_update",
      value: function _update(t) {
        _get(_getPrototypeOf(P.prototype), "_update", this).call(this, t), "mask" in t && (this.compiledMasks = Array.isArray(t.mask) ? t.mask.map(function (t) {
          return c(t);
        }) : []);
      }
    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var s = this._applyDispatch(t, e);
        return this.currentMask && s.aggregate(this.currentMask._appendChar(t, this.currentMaskFlags(e))), s;
      }
    }, {
      key: "_applyDispatch",
      value: function _applyDispatch() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        var a = e.tail && null != e._beforeTailState ? e._beforeTailState._value : this.value,
          u = this.rawInputValue,
          n = e.tail && null != e._beforeTailState ? e._beforeTailState._rawInputValue : u,
          r = u.slice(n.length),
          h = this.currentMask,
          l = new i(),
          o = null == h ? void 0 : h.state;
        if (this.currentMask = this.doDispatch(t, Object.assign({}, e), s), this.currentMask) if (this.currentMask !== h) {
          if (this.currentMask.reset(), n) {
            var _t41 = this.currentMask.append(n, {
              raw: !0
            });
            l.tailShift = _t41.inserted.length - a.length;
          }
          r && (l.tailShift += this.currentMask.append(r, {
            raw: !0,
            tail: !0
          }).tailShift);
        } else this.currentMask.state = o;
        return l;
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var t = this._applyDispatch.apply(this, arguments);
        return this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()), t;
      }
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        var t = this._applyDispatch.apply(this, arguments);
        return this.currentMask && t.aggregate(this.currentMask._appendEager()), t;
      }
    }, {
      key: "appendTail",
      value: function appendTail(t) {
        var e = new i();
        return t && e.aggregate(this._applyDispatch("", {}, t)), e.aggregate(this.currentMask ? this.currentMask.appendTail(t) : _get(_getPrototypeOf(P.prototype), "appendTail", this).call(this, t));
      }
    }, {
      key: "currentMaskFlags",
      value: function currentMaskFlags(t) {
        var e, s;
        return Object.assign({}, t, {
          _beforeTailState: (null === (e = t._beforeTailState) || void 0 === e ? void 0 : e.currentMaskRef) === this.currentMask && (null === (s = t._beforeTailState) || void 0 === s ? void 0 : s.currentMask) || t._beforeTailState
        });
      }
    }, {
      key: "doDispatch",
      value: function doDispatch(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return this.dispatch(t, this, e, s);
      }
    }, {
      key: "doValidate",
      value: function doValidate(t) {
        return _get(_getPrototypeOf(P.prototype), "doValidate", this).call(this, t) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(t)));
      }
    }, {
      key: "doPrepare",
      value: function doPrepare(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          _r14 = r(_get(_getPrototypeOf(P.prototype), "doPrepare", this).call(this, t, e)),
          _r15 = _slicedToArray(_r14, 2),
          s = _r15[0],
          i = _r15[1];
        if (this.currentMask) {
          var _r16, _r17;
          var _t42;
          (_r16 = r(_get(_getPrototypeOf(P.prototype), "doPrepare", this).call(this, s, this.currentMaskFlags(e))), _r17 = _slicedToArray(_r16, 2), s = _r17[0], _t42 = _r17[1]), i = i.aggregate(_t42);
        }
        return [s, i];
      }
    }, {
      key: "reset",
      value: function reset() {
        var t;
        null === (t = this.currentMask) || void 0 === t || t.reset(), this.compiledMasks.forEach(function (t) {
          return t.reset();
        });
      }
    }, {
      key: "value",
      get: function get() {
        return this.currentMask ? this.currentMask.value : "";
      },
      set: function set(t) {
        _set(_getPrototypeOf(P.prototype), "value", t, this, true);
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.unmaskedValue : "";
      },
      set: function set(t) {
        _set(_getPrototypeOf(P.prototype), "unmaskedValue", t, this, true);
      }
    }, {
      key: "typedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.typedValue : "";
      },
      set: function set(t) {
        var e = String(t);
        this.currentMask && (this.currentMask.typedValue = t, e = this.currentMask.unmaskedValue), this.unmaskedValue = e;
      }
    }, {
      key: "displayValue",
      get: function get() {
        return this.currentMask ? this.currentMask.displayValue : "";
      }
    }, {
      key: "isComplete",
      get: function get() {
        var t;
        return Boolean(null === (t = this.currentMask) || void 0 === t ? void 0 : t.isComplete);
      }
    }, {
      key: "isFilled",
      get: function get() {
        var t;
        return Boolean(null === (t = this.currentMask) || void 0 === t ? void 0 : t.isFilled);
      }
    }, {
      key: "remove",
      value: function remove() {
        var _this$currentMask;
        var t = new i();
        return this.currentMask && t.aggregate((_this$currentMask = this.currentMask).remove.apply(_this$currentMask, arguments)).aggregate(this._applyDispatch()), t;
      }
    }, {
      key: "state",
      get: function get() {
        var t;
        return Object.assign({}, _get(_getPrototypeOf(P.prototype), "state", this), {
          _rawInputValue: this.rawInputValue,
          compiledMasks: this.compiledMasks.map(function (t) {
            return t.state;
          }),
          currentMaskRef: this.currentMask,
          currentMask: null === (t = this.currentMask) || void 0 === t ? void 0 : t.state
        });
      },
      set: function set(t) {
        var s = t.compiledMasks,
          i = t.currentMaskRef,
          a = t.currentMask,
          u = e(t, V);
        this.compiledMasks.forEach(function (t, e) {
          return t.state = s[e];
        }), null != i && (this.currentMask = i, this.currentMask.state = a), _set(_getPrototypeOf(P.prototype), "state", u, this, true);
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var _this$currentMask2;
        return this.currentMask ? (_this$currentMask2 = this.currentMask).extractInput.apply(_this$currentMask2, arguments) : "";
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$currentMask3;
        return this.currentMask ? (_this$currentMask3 = this.currentMask).extractTail.apply(_this$currentMask3, arguments) : _get(_getPrototypeOf(P.prototype), "extractTail", this).apply(this, arguments);
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        this.currentMask && this.currentMask.doCommit(), _get(_getPrototypeOf(P.prototype), "doCommit", this).call(this);
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos() {
        var _this$currentMask4;
        return this.currentMask ? (_this$currentMask4 = this.currentMask).nearestInputPos.apply(_this$currentMask4, arguments) : _get(_getPrototypeOf(P.prototype), "nearestInputPos", this).apply(this, arguments);
      }
    }, {
      key: "overwrite",
      get: function get() {
        return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(P.prototype), "overwrite", this);
      },
      set: function set(t) {
        console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
      }
    }, {
      key: "eager",
      get: function get() {
        return this.currentMask ? this.currentMask.eager : _get(_getPrototypeOf(P.prototype), "eager", this);
      },
      set: function set(t) {
        console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
      }
    }, {
      key: "skipInvalid",
      get: function get() {
        return this.currentMask ? this.currentMask.skipInvalid : _get(_getPrototypeOf(P.prototype), "skipInvalid", this);
      },
      set: function set(t) {
        (this.isInitialized || t !== d.DEFAULTS.skipInvalid) && console.warn('"skipInvalid" option is not available in dynamic mask, use this option in siblings');
      }
    }, {
      key: "maskEquals",
      value: function maskEquals(t) {
        return Array.isArray(t) && this.compiledMasks.every(function (s, i) {
          if (!t[i]) return;
          var a = t[i],
            u = a.mask;
          return h(s, e(a, R)) && s.maskEquals(u);
        });
      }
    }, {
      key: "typedValueEquals",
      value: function typedValueEquals(t) {
        var e;
        return Boolean(null === (e = this.currentMask) || void 0 === e ? void 0 : e.typedValueEquals(t));
      }
    }]);
    return P;
  }(d);
  P.DEFAULTS = {
    dispatch: function dispatch(t, e, s, i) {
      if (!e.compiledMasks.length) return;
      var a = e.rawInputValue,
        n = e.compiledMasks.map(function (n, r) {
          var h = e.currentMask === n,
            l = h ? n.value.length : n.nearestInputPos(n.value.length, u.FORCE_LEFT);
          return n.rawInputValue !== a ? (n.reset(), n.append(a, {
            raw: !0
          })) : h || n.remove(l), n.append(t, e.currentMaskFlags(s)), n.appendTail(i), {
            index: r,
            weight: n.rawInputValue.length,
            totalInputPositions: n.totalInputPositions(0, Math.max(l, n.nearestInputPos(n.value.length, u.FORCE_LEFT)))
          };
        });
      return n.sort(function (t, e) {
        return e.weight - t.weight || e.totalInputPositions - t.totalInputPositions;
      }), e.compiledMasks[n[0].index];
    }
  }, s.MaskedDynamic = P;
  var O = {
    MASKED: "value",
    UNMASKED: "unmaskedValue",
    TYPED: "typedValue"
  };
  function L(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.MASKED,
      s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O.MASKED;
    var i = c(t);
    return function (t) {
      return i.runIsolated(function (i) {
        return i[e] = t, i[s];
      });
    };
  }
  function N(t) {
    for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) s[i - 1] = arguments[i];
    return L.apply(void 0, s)(t);
  }
  s.PIPE_TYPE = O, s.createPipe = L, s.pipe = N;
  try {
    globalThis.IMask = s;
  } catch (t) {}
  t.ChangeDetails = i, t.HTMLContenteditableMaskElement = x, t.HTMLMaskElement = B, t.InputMask = T, t.MaskElement = D, t.Masked = d, t.MaskedDate = S, t.MaskedDynamic = P, t.MaskedEnum = I, t.MaskedFunction = y, t.MaskedNumber = w, t.MaskedPattern = C, t.MaskedRange = b, t.MaskedRegExp = A, t.PIPE_TYPE = O, t.createMask = c, t.createPipe = L, t["default"] = s, t.pipe = N, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Sweetalert2 = e();
}(this, function () {
  "use strict";

  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }
  function a(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }
  function c(t, e, n) {
    return e && o(t.prototype, e), n && o(t, n), t;
  }
  function s() {
    return (s = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
      }
      return t;
    }).apply(this, arguments);
  }
  function u(t) {
    return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }
  function l(t, e) {
    return (l = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }
  function d() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }
  function i(t, e, n) {
    return (i = d() ? Reflect.construct : function (t, e, n) {
      var o = [null];
      o.push.apply(o, e);
      var i = new (Function.bind.apply(t, o))();
      return n && l(i, n.prototype), i;
    }).apply(null, arguments);
  }
  function p(t, e) {
    return !e || "object" != _typeof(e) && "function" != typeof e ? function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(t) : e;
  }
  function f(t, e, n) {
    return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
      var o = function (t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
        return t;
      }(t, e);
      if (o) {
        var i = Object.getOwnPropertyDescriptor(o, e);
        return i.get ? i.get.call(n) : i.value;
      }
    })(t, e, n || t);
  }
  function m(e) {
    return Object.keys(e).map(function (t) {
      return e[t];
    });
  }
  function h(t) {
    return Array.prototype.slice.call(t);
  }
  function g(t, e) {
    var n;
    n = '"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.'), -1 === z.indexOf(n) && (z.push(n), _(n));
  }
  function v(t) {
    return t && "function" == typeof t.toPromise;
  }
  function b(t) {
    return v(t) ? t.toPromise() : Promise.resolve(t);
  }
  function y(t) {
    return t && Promise.resolve(t) === t;
  }
  function w(t) {
    return t instanceof Element || "object" === r(e = t) && e.jquery;
    var e;
  }
  function t(t) {
    var e = {};
    for (var n in t) e[t[n]] = "swal2-" + t[n];
    return e;
  }
  function C(t) {
    var e = Q();
    return e ? e.querySelector(t) : null;
  }
  function e(t) {
    return C(".".concat(t));
  }
  function n() {
    var t = $();
    return h(t.querySelectorAll(".".concat(Y.icon)));
  }
  function k() {
    var t = n().filter(function (t) {
      return vt(t);
    });
    return t.length ? t[0] : null;
  }
  function x() {
    return e(Y.title);
  }
  function P() {
    return e(Y.content);
  }
  function A() {
    return e(Y.image);
  }
  function B() {
    return e(Y["progress-steps"]);
  }
  function S() {
    return e(Y["validation-message"]);
  }
  function E() {
    return C(".".concat(Y.actions, " .").concat(Y.confirm));
  }
  function O() {
    return C(".".concat(Y.actions, " .").concat(Y.cancel));
  }
  function T() {
    return e(Y.actions);
  }
  function L() {
    return e(Y.header);
  }
  function I() {
    return e(Y.footer);
  }
  function j() {
    return e(Y["timer-progress-bar"]);
  }
  function q() {
    return e(Y.close);
  }
  function V() {
    var t = h($().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (t, e) {
        return t = parseInt(t.getAttribute("tabindex")), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0;
      }),
      e = h($().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function (t) {
        return "-1" !== t.getAttribute("tabindex");
      });
    return function (t) {
      for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
      return e;
    }(t.concat(e)).filter(function (t) {
      return vt(t);
    });
  }
  function M() {
    return !J() && !document.body.classList.contains(Y["no-backdrop"]);
  }
  function R() {
    return $().hasAttribute("data-loading");
  }
  function H(e, t) {
    var n;
    e.textContent = "", t && (n = new DOMParser().parseFromString(t, "text/html"), h(n.querySelector("head").childNodes).forEach(function (t) {
      e.appendChild(t);
    }), h(n.querySelector("body").childNodes).forEach(function (t) {
      e.appendChild(t);
    }));
  }
  function D(t, e) {
    if (e) {
      for (var n = e.split(/\s+/), o = 0; o < n.length; o++) if (!t.classList.contains(n[o])) return;
      return 1;
    }
  }
  function N(t, e, n) {
    var o, i;
    if (i = e, h((o = t).classList).forEach(function (t) {
      -1 === m(Y).indexOf(t) && -1 === m(Z).indexOf(t) && -1 === m(i.showClass).indexOf(t) && o.classList.remove(t);
    }), e.customClass && e.customClass[n]) {
      if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach) return _("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(r(e.customClass[n]), '"'));
      mt(t, e.customClass[n]);
    }
  }
  var U = "SweetAlert2:",
    _ = function _(t) {
      console.warn("".concat(U, " ").concat(t));
    },
    F = function F(t) {
      console.error("".concat(U, " ").concat(t));
    },
    z = [],
    W = function W(t) {
      return "function" == typeof t ? t() : t;
    },
    K = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer"
    }),
    Y = t(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "toast-column", "show", "hide", "close", "title", "header", "content", "html-container", "actions", "confirm", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
    Z = t(["success", "warning", "info", "question", "error"]),
    Q = function Q() {
      return document.body.querySelector(".".concat(Y.container));
    },
    $ = function $() {
      return e(Y.popup);
    },
    J = function J() {
      return document.body.classList.contains(Y["toast-shown"]);
    },
    X = {
      previousBodyPadding: null
    };
  function G(t, e) {
    if (!e) return null;
    switch (e) {
      case "select":
      case "textarea":
      case "file":
        return gt(t, Y[e]);
      case "checkbox":
        return t.querySelector(".".concat(Y.checkbox, " input"));
      case "radio":
        return t.querySelector(".".concat(Y.radio, " input:checked")) || t.querySelector(".".concat(Y.radio, " input:first-child"));
      case "range":
        return t.querySelector(".".concat(Y.range, " input"));
      default:
        return gt(t, Y.input);
    }
  }
  function tt(t) {
    var e;
    t.focus(), "file" !== t.type && (e = t.value, t.value = "", t.value = e);
  }
  function et(t, e, n) {
    t && e && ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)), e.forEach(function (e) {
      t.forEach ? t.forEach(function (t) {
        n ? t.classList.add(e) : t.classList.remove(e);
      }) : n ? t.classList.add(e) : t.classList.remove(e);
    }));
  }
  function nt(t, e, n) {
    n || 0 === parseInt(n) ? t.style[e] = "number" == typeof n ? "".concat(n, "px") : n : t.style.removeProperty(e);
  }
  function ot(t, e) {
    var n = 1 < arguments.length && void 0 !== e ? e : "flex";
    t.style.opacity = "", t.style.display = n;
  }
  function it(t) {
    t.style.opacity = "", t.style.display = "none";
  }
  function rt(t, e, n) {
    e ? ot(t, n) : it(t);
  }
  function at(t) {
    return !!(t.scrollHeight > t.clientHeight);
  }
  function ct(t) {
    var e = window.getComputedStyle(t),
      n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
      o = parseFloat(e.getPropertyValue("transition-duration") || "0");
    return 0 < n || 0 < o;
  }
  function st(t, e) {
    var n = 1 < arguments.length && void 0 !== e && e,
      o = j();
    vt(o) && (n && (o.style.transition = "none", o.style.width = "100%"), setTimeout(function () {
      o.style.transition = "width ".concat(t / 1e3, "s linear"), o.style.width = "0%";
    }, 10));
  }
  function ut() {
    return "undefined" == typeof window || "undefined" == typeof document;
  }
  function lt(t) {
    ln.isVisible() && ft !== t.target.value && ln.resetValidationMessage(), ft = t.target.value;
  }
  function dt(t, e) {
    t instanceof HTMLElement ? e.appendChild(t) : "object" === r(t) ? wt(t, e) : t && H(e, t);
  }
  function pt(t, e) {
    var n = T(),
      o = E(),
      i = O();
    e.showConfirmButton || e.showCancelButton || it(n), N(n, e, "actions"), xt(o, "confirm", e), xt(i, "cancel", e), e.buttonsStyling ? function (t, e, n) {
      mt([t, e], Y.styled), n.confirmButtonColor && (t.style.backgroundColor = n.confirmButtonColor);
      n.cancelButtonColor && (e.style.backgroundColor = n.cancelButtonColor);
      {
        var o;
        R() || (o = window.getComputedStyle(t).getPropertyValue("background-color"), t.style.borderLeftColor = o, t.style.borderRightColor = o);
      }
    }(o, i, e) : (ht([o, i], Y.styled), o.style.backgroundColor = o.style.borderLeftColor = o.style.borderRightColor = "", i.style.backgroundColor = i.style.borderLeftColor = i.style.borderRightColor = ""), e.reverseButtons && o.parentNode.insertBefore(i, o);
  }
  var ft,
    mt = function mt(t, e) {
      et(t, e, !0);
    },
    ht = function ht(t, e) {
      et(t, e, !1);
    },
    gt = function gt(t, e) {
      for (var n = 0; n < t.childNodes.length; n++) if (D(t.childNodes[n], e)) return t.childNodes[n];
    },
    vt = function vt(t) {
      return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length));
    },
    bt = '\n <div aria-labelledby="'.concat(Y.title, '" aria-describedby="').concat(Y.content, '" class="').concat(Y.popup, '" tabindex="-1">\n   <div class="').concat(Y.header, '">\n     <ul class="').concat(Y["progress-steps"], '"></ul>\n     <div class="').concat(Y.icon, " ").concat(Z.error, '"></div>\n     <div class="').concat(Y.icon, " ").concat(Z.question, '"></div>\n     <div class="').concat(Y.icon, " ").concat(Z.warning, '"></div>\n     <div class="').concat(Y.icon, " ").concat(Z.info, '"></div>\n     <div class="').concat(Y.icon, " ").concat(Z.success, '"></div>\n     <img class="').concat(Y.image, '" />\n     <h2 class="').concat(Y.title, '" id="').concat(Y.title, '"></h2>\n     <button type="button" class="').concat(Y.close, '"></button>\n   </div>\n   <div class="').concat(Y.content, '">\n     <div id="').concat(Y.content, '" class="').concat(Y["html-container"], '"></div>\n     <input class="').concat(Y.input, '" />\n     <input type="file" class="').concat(Y.file, '" />\n     <div class="').concat(Y.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(Y.select, '"></select>\n     <div class="').concat(Y.radio, '"></div>\n     <label for="').concat(Y.checkbox, '" class="').concat(Y.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(Y.label, '"></span>\n     </label>\n     <textarea class="').concat(Y.textarea, '"></textarea>\n     <div class="').concat(Y["validation-message"], '" id="').concat(Y["validation-message"], '"></div>\n   </div>\n   <div class="').concat(Y.actions, '">\n     <button type="button" class="').concat(Y.confirm, '">OK</button>\n     <button type="button" class="').concat(Y.cancel, '">Cancel</button>\n   </div>\n   <div class="').concat(Y.footer, '"></div>\n   <div class="').concat(Y["timer-progress-bar-container"], '">\n     <div class="').concat(Y["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
    yt = function yt(t) {
      var e,
        n,
        o,
        i,
        r,
        a,
        c,
        s,
        u,
        l,
        d,
        p,
        f,
        m,
        h,
        g = !!(e = Q()) && (e.parentNode.removeChild(e), ht([document.documentElement, document.body], [Y["no-backdrop"], Y["toast-shown"], Y["has-column"]]), !0);
      ut() ? F("SweetAlert2 requires document to initialize") : ((n = document.createElement("div")).className = Y.container, g && mt(n, Y["no-transition"]), H(n, bt), (o = "string" == typeof (i = t.target) ? document.querySelector(i) : i).appendChild(n), r = t, (a = $()).setAttribute("role", r.toast ? "alert" : "dialog"), a.setAttribute("aria-live", r.toast ? "polite" : "assertive"), r.toast || a.setAttribute("aria-modal", "true"), c = o, "rtl" === window.getComputedStyle(c).direction && mt(Q(), Y.rtl), s = P(), u = gt(s, Y.input), l = gt(s, Y.file), d = s.querySelector(".".concat(Y.range, " input")), p = s.querySelector(".".concat(Y.range, " output")), f = gt(s, Y.select), m = s.querySelector(".".concat(Y.checkbox, " input")), h = gt(s, Y.textarea), u.oninput = lt, l.onchange = lt, f.onchange = lt, m.onchange = lt, h.oninput = lt, d.oninput = function (t) {
        lt(t), p.value = d.value;
      }, d.onchange = function (t) {
        lt(t), d.nextSibling.value = d.value;
      });
    },
    wt = function wt(t, e) {
      t.jquery ? Ct(e, t) : H(e, t.toString());
    },
    Ct = function Ct(t, e) {
      if (t.textContent = "", 0 in e) for (var n = 0; (n in e); n++) t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0));
    },
    kt = function () {
      if (ut()) return !1;
      var t = document.createElement("div"),
        e = {
          WebkitAnimation: "webkitAnimationEnd",
          OAnimation: "oAnimationEnd oanimationend",
          animation: "animationend"
        };
      for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n) && void 0 !== t.style[n]) return e[n];
      return !1;
    }();
  function xt(t, e, n) {
    var o;
    rt(t, n["show".concat((o = e).charAt(0).toUpperCase() + o.slice(1), "Button")], "inline-block"), H(t, n["".concat(e, "ButtonText")]), t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]), t.className = Y[e], N(t, n, "".concat(e, "Button")), mt(t, n["".concat(e, "ButtonClass")]);
  }
  function Pt(t, e) {
    var n,
      o,
      i,
      r,
      a,
      c,
      s,
      u,
      l = Q();
    l && (n = l, "string" == typeof (o = e.backdrop) ? n.style.background = o : o || mt([document.documentElement, document.body], Y["no-backdrop"]), !e.backdrop && e.allowOutsideClick && _('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), i = l, (r = e.position) in Y ? mt(i, Y[r]) : (_('The "position" parameter is not valid, defaulting to "center"'), mt(i, Y.center)), a = l, !(c = e.grow) || "string" != typeof c || (s = "grow-".concat(c)) in Y && mt(a, Y[s]), N(l, e, "container"), (u = document.body.getAttribute("data-swal2-queue-step")) && (l.setAttribute("data-queue-step", u), document.body.removeAttribute("data-swal2-queue-step")));
  }
  function At(t, e) {
    t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder);
  }
  var Bt = {
      promise: new WeakMap(),
      innerParams: new WeakMap(),
      domCache: new WeakMap()
    },
    St = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
    Et = function Et(t) {
      if (!It[t.input]) return F('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
      var e = Lt(t.input),
        n = It[t.input](e, t);
      ot(n), setTimeout(function () {
        tt(n);
      });
    },
    Ot = function Ot(t, e) {
      var n = G(P(), t);
      if (n) for (var o in !function (t) {
        for (var e = 0; e < t.attributes.length; e++) {
          var n = t.attributes[e].name;
          -1 === ["type", "value", "style"].indexOf(n) && t.removeAttribute(n);
        }
      }(n), e) "range" === t && "placeholder" === o || n.setAttribute(o, e[o]);
    },
    Tt = function Tt(t) {
      var e = Lt(t.input);
      t.customClass && mt(e, t.customClass.input);
    },
    Lt = function Lt(t) {
      var e = Y[t] ? Y[t] : Y.input;
      return gt(P(), e);
    },
    It = {};
  It.text = It.email = It.password = It.number = It.tel = It.url = function (t, e) {
    return "string" == typeof e.inputValue || "number" == typeof e.inputValue ? t.value = e.inputValue : y(e.inputValue) || _('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue), '"')), At(t, e), t.type = e.input, t;
  }, It.file = function (t, e) {
    return At(t, e), t;
  }, It.range = function (t, e) {
    var n = t.querySelector("input"),
      o = t.querySelector("output");
    return n.value = e.inputValue, n.type = e.input, o.value = e.inputValue, t;
  }, It.select = function (t, e) {
    var n;
    return t.textContent = "", e.inputPlaceholder && (n = document.createElement("option"), H(n, e.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, t.appendChild(n)), t;
  }, It.radio = function (t) {
    return t.textContent = "", t;
  }, It.checkbox = function (t, e) {
    var n = G(P(), "checkbox");
    n.value = 1, n.id = Y.checkbox, n.checked = Boolean(e.inputValue);
    var o = t.querySelector("span");
    return H(o, e.inputPlaceholder), t;
  }, It.textarea = function (e, t) {
    var n, o;
    return e.value = t.inputValue, At(e, t), "MutationObserver" in window && (n = parseInt(window.getComputedStyle($()).width), o = parseInt(window.getComputedStyle($()).paddingLeft) + parseInt(window.getComputedStyle($()).paddingRight), new MutationObserver(function () {
      var t = e.offsetWidth + o;
      $().style.width = n < t ? "".concat(t, "px") : null;
    }).observe(e, {
      attributes: !0,
      attributeFilter: ["style"]
    })), e;
  };
  function jt(t, e) {
    var n,
      o,
      i,
      r,
      a,
      c = P().querySelector("#".concat(Y.content));
    e.html ? (dt(e.html, c), ot(c, "block")) : e.text ? (c.textContent = e.text, ot(c, "block")) : it(c), n = t, o = e, i = P(), r = Bt.innerParams.get(n), a = !r || o.input !== r.input, St.forEach(function (t) {
      var e = Y[t],
        n = gt(i, e);
      Ot(t, o.inputAttributes), n.className = e, a && it(n);
    }), o.input && (a && Et(o), Tt(o)), N(P(), e, "content");
  }
  function qt() {
    return Q() && Q().getAttribute("data-queue-step");
  }
  function Vt(t, s) {
    var u = B();
    if (!s.progressSteps || 0 === s.progressSteps.length) return it(u), 0;
    ot(u), u.textContent = "";
    var l = parseInt(void 0 === s.currentProgressStep ? qt() : s.currentProgressStep);
    l >= s.progressSteps.length && _("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), s.progressSteps.forEach(function (t, e) {
      var n,
        o,
        i,
        r,
        a,
        c = (n = t, o = document.createElement("li"), mt(o, Y["progress-step"]), H(o, n), o);
      u.appendChild(c), e === l && mt(c, Y["active-progress-step"]), e !== s.progressSteps.length - 1 && (r = s, a = document.createElement("li"), mt(a, Y["progress-step-line"]), r.progressStepsDistance && (a.style.width = r.progressStepsDistance), i = a, u.appendChild(i));
    });
  }
  function Mt(t, e) {
    var n,
      o,
      i,
      r,
      a,
      c,
      s,
      u,
      l = L();
    N(l, e, "header"), Vt(0, e), n = t, o = e, (r = Bt.innerParams.get(n)) && o.icon === r.icon && k() ? N(k(), o, "icon") : (Dt(), o.icon && (-1 !== Object.keys(Z).indexOf(o.icon) ? (i = C(".".concat(Y.icon, ".").concat(Z[o.icon])), ot(i), Ut(i, o), Nt(), N(i, o, "icon"), mt(i, o.showClass.icon)) : F('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(o.icon, '"')))), function (t) {
      var e = A();
      if (!t.imageUrl) return it(e);
      ot(e, ""), e.setAttribute("src", t.imageUrl), e.setAttribute("alt", t.imageAlt), nt(e, "width", t.imageWidth), nt(e, "height", t.imageHeight), e.className = Y.image, N(e, t, "image");
    }(e), a = e, c = x(), rt(c, a.title || a.titleText), a.title && dt(a.title, c), a.titleText && (c.innerText = a.titleText), N(c, a, "title"), s = e, u = q(), H(u, s.closeButtonHtml), N(u, s, "closeButton"), rt(u, s.showCloseButton), u.setAttribute("aria-label", s.closeButtonAriaLabel);
  }
  function Rt(t, e) {
    var n, o, i, r;
    n = e, o = $(), nt(o, "width", n.width), nt(o, "padding", n.padding), n.background && (o.style.background = n.background), zt(o, n), Pt(0, e), Mt(t, e), jt(t, e), pt(0, e), i = e, r = I(), rt(r, i.footer), i.footer && dt(i.footer, r), N(r, i, "footer"), "function" == typeof e.onRender && e.onRender($());
  }
  function Ht() {
    return E() && E().click();
  }
  var Dt = function Dt() {
      for (var t = n(), e = 0; e < t.length; e++) it(t[e]);
    },
    Nt = function Nt() {
      for (var t = $(), e = window.getComputedStyle(t).getPropertyValue("background-color"), n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < n.length; o++) n[o].style.backgroundColor = e;
    },
    Ut = function Ut(t, e) {
      t.textContent = "", e.iconHtml ? H(t, _t(e.iconHtml)) : "success" === e.icon ? H(t, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === e.icon ? H(t, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : H(t, _t({
        question: "?",
        warning: "!",
        info: "i"
      }[e.icon]));
    },
    _t = function _t(t) {
      return '<div class="'.concat(Y["icon-content"], '">').concat(t, "</div>");
    },
    Ft = [],
    zt = function zt(t, e) {
      t.className = "".concat(Y.popup, " ").concat(vt(t) ? e.showClass.popup : ""), e.toast ? (mt([document.documentElement, document.body], Y["toast-shown"]), mt(t, Y.toast)) : mt(t, Y.modal), N(t, e, "popup"), "string" == typeof e.customClass && mt(t, e.customClass), e.icon && mt(t, Y["icon-".concat(e.icon)]);
    };
  function Wt() {
    var t = $();
    t || ln.fire(), t = $();
    var e = T(),
      n = E();
    ot(e), ot(n, "inline-block"), mt([t, e], Y.loading), n.disabled = !0, t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus();
  }
  function Kt() {
    return new Promise(function (t) {
      var e = window.scrollX,
        n = window.scrollY;
      Xt.restoreFocusTimeout = setTimeout(function () {
        Xt.previousActiveElement && Xt.previousActiveElement.focus ? (Xt.previousActiveElement.focus(), Xt.previousActiveElement = null) : document.body && document.body.focus(), t();
      }, 100), void 0 !== e && void 0 !== n && window.scrollTo(e, n);
    });
  }
  function Yt() {
    if (Xt.timeout) return function () {
      var t = j(),
        e = parseInt(window.getComputedStyle(t).width);
      t.style.removeProperty("transition"), t.style.width = "100%";
      var n = parseInt(window.getComputedStyle(t).width),
        o = parseInt(e / n * 100);
      t.style.removeProperty("transition"), t.style.width = "".concat(o, "%");
    }(), Xt.timeout.stop();
  }
  function Zt() {
    if (Xt.timeout) {
      var t = Xt.timeout.start();
      return st(t), t;
    }
  }
  function Qt(t) {
    return Object.prototype.hasOwnProperty.call(Gt, t);
  }
  function $t(t) {
    return ee[t];
  }
  function Jt(t) {
    for (var e in t) Qt(i = e) || _('Unknown parameter "'.concat(i, '"')), t.toast && (o = e, -1 !== ne.indexOf(o) && _('The parameter "'.concat(o, '" is incompatible with toasts'))), $t(n = e) && g(n, $t(n));
    var n, o, i;
  }
  var Xt = {},
    Gt = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconHtml: void 0,
      toast: !1,
      animation: !0,
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show"
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide"
      },
      customClass: void 0,
      target: "body",
      backdrop: !0,
      heightAuto: !0,
      allowOutsideClick: !0,
      allowEscapeKey: !0,
      allowEnterKey: !0,
      stopKeydownPropagation: !0,
      keydownListenerCapture: !1,
      showConfirmButton: !0,
      showCancelButton: !1,
      preConfirm: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: !0,
      reverseButtons: !1,
      focusConfirm: !0,
      focusCancel: !1,
      showCloseButton: !1,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      showLoaderOnConfirm: !1,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: !1,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputValue: "",
      inputOptions: {},
      inputAutoTrim: !0,
      inputAttributes: {},
      inputValidator: void 0,
      validationMessage: void 0,
      grow: !1,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      onBeforeOpen: void 0,
      onOpen: void 0,
      onRender: void 0,
      onClose: void 0,
      onAfterClose: void 0,
      onDestroy: void 0,
      scrollbarPadding: !0
    },
    te = ["allowEscapeKey", "allowOutsideClick", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "footer", "hideClass", "html", "icon", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "onAfterClose", "onClose", "onDestroy", "progressSteps", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "text", "title", "titleText"],
    ee = {
      animation: 'showClass" and "hideClass'
    },
    ne = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
    oe = Object.freeze({
      isValidParameter: Qt,
      isUpdatableParameter: function isUpdatableParameter(t) {
        return -1 !== te.indexOf(t);
      },
      isDeprecatedParameter: $t,
      argsToParams: function argsToParams(o) {
        var i = {};
        return "object" !== r(o[0]) || w(o[0]) ? ["title", "html", "icon"].forEach(function (t, e) {
          var n = o[e];
          "string" == typeof n || w(n) ? i[t] = n : void 0 !== n && F("Unexpected type of ".concat(t, '! Expected "string" or "Element", got ').concat(r(n)));
        }) : s(i, o[0]), i;
      },
      isVisible: function isVisible() {
        return vt($());
      },
      clickConfirm: Ht,
      clickCancel: function clickCancel() {
        return O() && O().click();
      },
      getContainer: Q,
      getPopup: $,
      getTitle: x,
      getContent: P,
      getHtmlContainer: function getHtmlContainer() {
        return e(Y["html-container"]);
      },
      getImage: A,
      getIcon: k,
      getIcons: n,
      getCloseButton: q,
      getActions: T,
      getConfirmButton: E,
      getCancelButton: O,
      getHeader: L,
      getFooter: I,
      getTimerProgressBar: j,
      getFocusableElements: V,
      getValidationMessage: S,
      isLoading: R,
      fire: function fire() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return i(this, e);
      },
      mixin: function mixin(r) {
        return function (t) {
          !function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), e && l(t, e);
          }(i, t);
          var n,
            o,
            e = (n = i, o = d(), function () {
              var t,
                e = u(n);
              return p(this, o ? (t = u(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
            });
          function i() {
            return a(this, i), e.apply(this, arguments);
          }
          return c(i, [{
            key: "_main",
            value: function value(t) {
              return f(u(i.prototype), "_main", this).call(this, s({}, r, t));
            }
          }]), i;
        }(this);
      },
      queue: function queue(t) {
        var r = this;
        Ft = t;
        function a(t, e) {
          Ft = [], t(e);
        }
        var c = [];
        return new Promise(function (i) {
          !function e(n, o) {
            n < Ft.length ? (document.body.setAttribute("data-swal2-queue-step", n), r.fire(Ft[n]).then(function (t) {
              void 0 !== t.value ? (c.push(t.value), e(n + 1, o)) : a(i, {
                dismiss: t.dismiss
              });
            })) : a(i, {
              value: c
            });
          }(0);
        });
      },
      getQueueStep: qt,
      insertQueueStep: function insertQueueStep(t, e) {
        return e && e < Ft.length ? Ft.splice(e, 0, t) : Ft.push(t);
      },
      deleteQueueStep: function deleteQueueStep(t) {
        void 0 !== Ft[t] && Ft.splice(t, 1);
      },
      showLoading: Wt,
      enableLoading: Wt,
      getTimerLeft: function getTimerLeft() {
        return Xt.timeout && Xt.timeout.getTimerLeft();
      },
      stopTimer: Yt,
      resumeTimer: Zt,
      toggleTimer: function toggleTimer() {
        var t = Xt.timeout;
        return t && (t.running ? Yt : Zt)();
      },
      increaseTimer: function increaseTimer(t) {
        if (Xt.timeout) {
          var e = Xt.timeout.increase(t);
          return st(e, !0), e;
        }
      },
      isTimerRunning: function isTimerRunning() {
        return Xt.timeout && Xt.timeout.isRunning();
      }
    });
  function ie() {
    var t,
      e = Bt.innerParams.get(this);
    e && (t = Bt.domCache.get(this), e.showConfirmButton || (it(t.confirmButton), e.showCancelButton || it(t.actions)), ht([t.popup, t.actions], Y.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.cancelButton.disabled = !1);
  }
  function re() {
    null === X.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (X.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(X.previousBodyPadding + function () {
      var t = document.createElement("div");
      t.className = Y["scrollbar-measure"], document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }(), "px"));
  }
  function ae() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }
  function ce() {
    var t = Q(),
      e = $();
    t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start");
  }
  var se = function se() {
      navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i) || $().scrollHeight > window.innerHeight - 44 && (Q().style.paddingBottom = "".concat(44, "px"));
    },
    ue = function ue() {
      var e,
        t = Q();
      t.ontouchstart = function (t) {
        e = le(t.target);
      }, t.ontouchmove = function (t) {
        e && (t.preventDefault(), t.stopPropagation());
      };
    },
    le = function le(t) {
      var e = Q();
      return t === e || !(at(e) || "INPUT" === t.tagName || at(P()) && P().contains(t));
    },
    de = {
      swalPromiseResolve: new WeakMap()
    };
  function pe(t, e, n, o) {
    var i;
    n ? he(t, o) : (Kt().then(function () {
      return he(t, o);
    }), Xt.keydownTarget.removeEventListener("keydown", Xt.keydownHandler, {
      capture: Xt.keydownListenerCapture
    }), Xt.keydownHandlerAdded = !1), e.parentNode && !document.body.getAttribute("data-swal2-queue-step") && e.parentNode.removeChild(e), M() && (null !== X.previousBodyPadding && (document.body.style.paddingRight = "".concat(X.previousBodyPadding, "px"), X.previousBodyPadding = null), D(document.body, Y.iosfix) && (i = parseInt(document.body.style.top, 10), ht(document.body, Y.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * i), "undefined" != typeof window && ae() && window.removeEventListener("resize", ce), h(document.body.children).forEach(function (t) {
      t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden");
    })), ht([document.documentElement, document.body], [Y.shown, Y["height-auto"], Y["no-backdrop"], Y["toast-shown"], Y["toast-column"]]);
  }
  function fe(t) {
    var e,
      n,
      o,
      i = $();
    i && (e = Bt.innerParams.get(this)) && !D(i, e.hideClass.popup) && (n = de.swalPromiseResolve.get(this), ht(i, e.showClass.popup), mt(i, e.hideClass.popup), o = Q(), ht(o, e.showClass.backdrop), mt(o, e.hideClass.backdrop), function (t, e, n) {
      var o = Q(),
        i = kt && ct(e),
        r = n.onClose,
        a = n.onAfterClose;
      if (r !== null && typeof r === "function") {
        r(e);
      }
      if (i) {
        me(t, e, o, a);
      } else {
        pe(t, o, J(), a);
      }
    }(this, i, e), void 0 !== t ? (t.isDismissed = void 0 !== t.dismiss, t.isConfirmed = void 0 === t.dismiss) : t = {
      isDismissed: !0,
      isConfirmed: !1
    }, n(t || {}));
  }
  var me = function me(t, e, n, o) {
      Xt.swalCloseEventFinishedCallback = pe.bind(null, t, n, J(), o), e.addEventListener(kt, function (t) {
        t.target === e && (Xt.swalCloseEventFinishedCallback(), delete Xt.swalCloseEventFinishedCallback);
      });
    },
    he = function he(t, e) {
      setTimeout(function () {
        "function" == typeof e && e(), t._destroy();
      });
    };
  function ge(t, e, n) {
    var o = Bt.domCache.get(t);
    e.forEach(function (t) {
      o[t].disabled = n;
    });
  }
  function ve(t, e) {
    if (!t) return !1;
    if ("radio" === t.type) for (var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < n.length; o++) n[o].disabled = e;else t.disabled = e;
  }
  var be = function () {
      function n(t, e) {
        a(this, n), this.callback = t, this.remaining = e, this.running = !1, this.start();
      }
      return c(n, [{
        key: "start",
        value: function value() {
          return this.running || (this.running = !0, this.started = new Date(), this.id = setTimeout(this.callback, this.remaining)), this.remaining;
        }
      }, {
        key: "stop",
        value: function value() {
          return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date() - this.started), this.remaining;
        }
      }, {
        key: "increase",
        value: function value(t) {
          var e = this.running;
          return e && this.stop(), this.remaining += t, e && this.start(), this.remaining;
        }
      }, {
        key: "getTimerLeft",
        value: function value() {
          return this.running && (this.stop(), this.start()), this.remaining;
        }
      }, {
        key: "isRunning",
        value: function value() {
          return this.running;
        }
      }]), n;
    }(),
    ye = {
      email: function email(t, e) {
        return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address");
      },
      url: function url(t, e) {
        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL");
      }
    };
  function we(t) {
    var e, n;
    (e = t).inputValidator || Object.keys(ye).forEach(function (t) {
      e.input === t && (e.inputValidator = ye[t]);
    }), t.showLoaderOnConfirm && !t.preConfirm && _("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), t.animation = W(t.animation), (n = t).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (_('Target parameter is not valid, defaulting to "body"'), n.target = "body"), "string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")), yt(t);
  }
  function Ce(t) {
    var e = Q(),
      n = $();
    "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n);
    var o = window.getComputedStyle(document.body).overflowY;
    Ie(e, n, t), Te(e, n), M() && (Le(e, t.scrollbarPadding, o), h(document.body.children).forEach(function (t) {
      t === Q() || function (t, e) {
        if ("function" == typeof t.contains) return t.contains(e);
      }(t, Q()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"));
    })), J() || Xt.previousActiveElement || (Xt.previousActiveElement = document.activeElement), "function" == typeof t.onOpen && setTimeout(function () {
      return t.onOpen(n);
    }), ht(e, Y["no-transition"]);
  }
  function ke(t) {
    var e,
      n = $();
    t.target === n && (e = Q(), n.removeEventListener(kt, ke), e.style.overflowY = "auto");
  }
  function xe(t, e) {
    "select" === e.input || "radio" === e.input ? Me(t, e) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(e.input) && (v(e.inputValue) || y(e.inputValue)) && Re(t, e);
  }
  function Pe(t, e) {
    t.disableButtons(), e.input ? Ne(t, e) : Ue(t, e, !0);
  }
  function Ae(t, e) {
    t.disableButtons(), e(K.cancel);
  }
  function Be(t, e) {
    t.closePopup({
      value: e
    });
  }
  function Se(e, t, n, o) {
    t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
      capture: t.keydownListenerCapture
    }), t.keydownHandlerAdded = !1), n.toast || (t.keydownHandler = function (t) {
      return ze(e, t, o);
    }, t.keydownTarget = n.keydownListenerCapture ? window : $(), t.keydownListenerCapture = n.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
      capture: t.keydownListenerCapture
    }), t.keydownHandlerAdded = !0);
  }
  function Ee(t, e, n) {
    var o = V(),
      i = 0;
    if (i < o.length) return (e += n) === o.length ? e = 0 : -1 === e && (e = o.length - 1), o[e].focus();
    $().focus();
  }
  function Oe(t, e, n) {
    Bt.innerParams.get(t).toast ? Qe(t, e, n) : (Je(e), Xe(e), Ge(t, e, n));
  }
  var Te = function Te(t, e) {
      kt && ct(e) ? (t.style.overflowY = "hidden", e.addEventListener(kt, ke)) : t.style.overflowY = "auto";
    },
    Le = function Le(t, e, n) {
      var o;
      (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !D(document.body, Y.iosfix) && (o = document.body.scrollTop, document.body.style.top = "".concat(-1 * o, "px"), mt(document.body, Y.iosfix), ue(), se()), "undefined" != typeof window && ae() && (ce(), window.addEventListener("resize", ce)), e && "hidden" !== n && re(), setTimeout(function () {
        t.scrollTop = 0;
      });
    },
    Ie = function Ie(t, e, n) {
      mt(t, n.showClass.backdrop), ot(e), mt(e, n.showClass.popup), mt([document.documentElement, document.body], Y.shown), n.heightAuto && n.backdrop && !n.toast && mt([document.documentElement, document.body], Y["height-auto"]);
    },
    je = function je(t) {
      return t.checked ? 1 : 0;
    },
    qe = function qe(t) {
      return t.checked ? t.value : null;
    },
    Ve = function Ve(t) {
      return t.files.length ? null !== t.getAttribute("multiple") ? t.files : t.files[0] : null;
    },
    Me = function Me(e, n) {
      function o(t) {
        return He[n.input](i, De(t), n);
      }
      var i = P();
      v(n.inputOptions) || y(n.inputOptions) ? (Wt(), b(n.inputOptions).then(function (t) {
        e.hideLoading(), o(t);
      })) : "object" === r(n.inputOptions) ? o(n.inputOptions) : F("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)));
    },
    Re = function Re(e, n) {
      var o = e.getInput();
      it(o), b(n.inputValue).then(function (t) {
        o.value = "number" === n.input ? parseFloat(t) || 0 : "".concat(t), ot(o), o.focus(), e.hideLoading();
      })["catch"](function (t) {
        F("Error in inputValue promise: ".concat(t)), o.value = "", ot(o), o.focus(), e.hideLoading();
      });
    },
    He = {
      select: function select(t, e, i) {
        function r(t, e, n) {
          var o = document.createElement("option");
          o.value = n, H(o, e), i.inputValue.toString() === n.toString() && (o.selected = !0), t.appendChild(o);
        }
        var a = gt(t, Y.select);
        e.forEach(function (t) {
          var e,
            n = t[0],
            o = t[1];
          Array.isArray(o) ? ((e = document.createElement("optgroup")).label = n, e.disabled = !1, a.appendChild(e), o.forEach(function (t) {
            return r(e, t[1], t[0]);
          })) : r(a, o, n);
        }), a.focus();
      },
      radio: function radio(t, e, a) {
        var c = gt(t, Y.radio);
        e.forEach(function (t) {
          var e = t[0],
            n = t[1],
            o = document.createElement("input"),
            i = document.createElement("label");
          o.type = "radio", o.name = Y.radio, o.value = e, a.inputValue.toString() === e.toString() && (o.checked = !0);
          var r = document.createElement("span");
          H(r, n), r.className = Y.label, i.appendChild(o), i.appendChild(r), c.appendChild(i);
        });
        var n = c.querySelectorAll("input");
        n.length && n[0].focus();
      }
    },
    De = function o(n) {
      var i = [];
      return "undefined" != typeof Map && n instanceof Map ? n.forEach(function (t, e) {
        var n = t;
        "object" === r(n) && (n = o(n)), i.push([e, n]);
      }) : Object.keys(n).forEach(function (t) {
        var e = n[t];
        "object" === r(e) && (e = o(e)), i.push([t, e]);
      }), i;
    },
    Ne = function Ne(e, n) {
      var o = function (t, e) {
        var n = t.getInput();
        if (!n) return null;
        switch (e.input) {
          case "checkbox":
            return je(n);
          case "radio":
            return qe(n);
          case "file":
            return Ve(n);
          default:
            return e.inputAutoTrim ? n.value.trim() : n.value;
        }
      }(e, n);
      n.inputValidator ? (e.disableInput(), Promise.resolve().then(function () {
        return b(n.inputValidator(o, n.validationMessage));
      }).then(function (t) {
        e.enableButtons(), e.enableInput(), t ? e.showValidationMessage(t) : Ue(e, n, o);
      })) : e.getInput().checkValidity() ? Ue(e, n, o) : (e.enableButtons(), e.showValidationMessage(n.validationMessage));
    },
    Ue = function Ue(e, t, n) {
      t.showLoaderOnConfirm && Wt(), t.preConfirm ? (e.resetValidationMessage(), Promise.resolve().then(function () {
        return b(t.preConfirm(n, t.validationMessage));
      }).then(function (t) {
        vt(S()) || !1 === t ? e.hideLoading() : Be(e, void 0 === t ? n : t);
      })) : Be(e, n);
    },
    _e = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"],
    Fe = ["Escape", "Esc"],
    ze = function ze(t, e, n) {
      var o = Bt.innerParams.get(t);
      o.stopKeydownPropagation && e.stopPropagation(), "Enter" === e.key ? We(t, e, o) : "Tab" === e.key ? Ke(e, o) : -1 !== _e.indexOf(e.key) ? Ye() : -1 !== Fe.indexOf(e.key) && Ze(e, o, n);
    },
    We = function We(t, e, n) {
      if (!e.isComposing && e.target && t.getInput() && e.target.outerHTML === t.getInput().outerHTML) {
        if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
        Ht(), e.preventDefault();
      }
    },
    Ke = function Ke(t) {
      for (var e = t.target, n = V(), o = -1, i = 0; i < n.length; i++) if (e === n[i]) {
        o = i;
        break;
      }
      t.shiftKey ? Ee(0, o, -1) : Ee(0, o, 1), t.stopPropagation(), t.preventDefault();
    },
    Ye = function Ye() {
      var t = E(),
        e = O();
      document.activeElement === t && vt(e) ? e.focus() : document.activeElement === e && vt(t) && t.focus();
    },
    Ze = function Ze(t, e, n) {
      W(e.allowEscapeKey) && (t.preventDefault(), n(K.esc));
    },
    Qe = function Qe(e, t, n) {
      t.popup.onclick = function () {
        var t = Bt.innerParams.get(e);
        t.showConfirmButton || t.showCancelButton || t.showCloseButton || t.input || n(K.close);
      };
    },
    $e = !1,
    Je = function Je(e) {
      e.popup.onmousedown = function () {
        e.container.onmouseup = function (t) {
          e.container.onmouseup = void 0, t.target === e.container && ($e = !0);
        };
      };
    },
    Xe = function Xe(e) {
      e.container.onmousedown = function () {
        e.popup.onmouseup = function (t) {
          e.popup.onmouseup = void 0, t.target !== e.popup && !e.popup.contains(t.target) || ($e = !0);
        };
      };
    },
    Ge = function Ge(n, o, i) {
      o.container.onclick = function (t) {
        var e = Bt.innerParams.get(n);
        $e ? $e = !1 : t.target === o.container && W(e.allowOutsideClick) && i(K.backdrop);
      };
    };
  var tn = function tn(t, e, n) {
      var o = j();
      it(o), e.timer && (t.timeout = new be(function () {
        n("timer"), delete t.timeout;
      }, e.timer), e.timerProgressBar && (ot(o), setTimeout(function () {
        t.timeout.running && st(e.timer);
      })));
    },
    en = function en(t, e) {
      if (!e.toast) return W(e.allowEnterKey) ? e.focusCancel && vt(t.cancelButton) ? t.cancelButton.focus() : e.focusConfirm && vt(t.confirmButton) ? t.confirmButton.focus() : void Ee(0, -1, 1) : nn();
    },
    nn = function nn() {
      document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur();
    };
  var on,
    rn,
    an,
    cn = function cn(t) {
      for (var e in t) t[e] = new WeakMap();
    },
    sn = Object.freeze({
      hideLoading: ie,
      disableLoading: ie,
      getInput: function getInput(t) {
        var e = Bt.innerParams.get(t || this),
          n = Bt.domCache.get(t || this);
        return n ? G(n.content, e.input) : null;
      },
      close: fe,
      closePopup: fe,
      closeModal: fe,
      closeToast: fe,
      enableButtons: function enableButtons() {
        ge(this, ["confirmButton", "cancelButton"], !1);
      },
      disableButtons: function disableButtons() {
        ge(this, ["confirmButton", "cancelButton"], !0);
      },
      enableInput: function enableInput() {
        return ve(this.getInput(), !1);
      },
      disableInput: function disableInput() {
        return ve(this.getInput(), !0);
      },
      showValidationMessage: function showValidationMessage(t) {
        var e = Bt.domCache.get(this);
        H(e.validationMessage, t);
        var n = window.getComputedStyle(e.popup);
        e.validationMessage.style.marginLeft = "-".concat(n.getPropertyValue("padding-left")), e.validationMessage.style.marginRight = "-".concat(n.getPropertyValue("padding-right")), ot(e.validationMessage);
        var o = this.getInput();
        o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", Y["validation-message"]), tt(o), mt(o, Y.inputerror));
      },
      resetValidationMessage: function resetValidationMessage() {
        var t = Bt.domCache.get(this);
        t.validationMessage && it(t.validationMessage);
        var e = this.getInput();
        e && (e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedBy"), ht(e, Y.inputerror));
      },
      getProgressSteps: function getProgressSteps() {
        return Bt.domCache.get(this).progressSteps;
      },
      _main: function _main(t) {
        Jt(t), Xt.currentInstance && Xt.currentInstance._destroy(), Xt.currentInstance = this;
        var e = function (t) {
          var e = s({}, Gt.showClass, t.showClass),
            n = s({}, Gt.hideClass, t.hideClass),
            o = s({}, Gt, t);
          if (o.showClass = e, o.hideClass = n, t.animation === false) {
            o.showClass = {
              popup: "swal2-noanimation",
              backdrop: "swal2-noanimation"
            };
            o.hideClass = {};
          }
          return o;
        }(t);
        we(e), Object.freeze(e), Xt.timeout && (Xt.timeout.stop(), delete Xt.timeout), clearTimeout(Xt.restoreFocusTimeout);
        var n = function (t) {
          var e = {
            popup: $(),
            container: Q(),
            content: P(),
            actions: T(),
            confirmButton: E(),
            cancelButton: O(),
            closeButton: q(),
            validationMessage: S(),
            progressSteps: B()
          };
          return Bt.domCache.set(t, e), e;
        }(this);
        return Rt(this, e), Bt.innerParams.set(this, e), function (n, o, i) {
          return new Promise(function (t) {
            var e = function t(e) {
              n.closePopup({
                dismiss: e
              });
            };
            de.swalPromiseResolve.set(n, t);
            o.confirmButton.onclick = function () {
              return Pe(n, i);
            };
            o.cancelButton.onclick = function () {
              return Ae(n, e);
            };
            o.closeButton.onclick = function () {
              return e(K.close);
            };
            Oe(n, o, e);
            Se(n, Xt, i, e);
            if (i.toast && (i.input || i.footer || i.showCloseButton)) {
              mt(document.body, Y["toast-column"]);
            } else {
              ht(document.body, Y["toast-column"]);
            }
            xe(n, i);
            Ce(i);
            tn(Xt, i, e);
            en(o, i);
            setTimeout(function () {
              o.container.scrollTop = 0;
            });
          });
        }(this, n, e);
      },
      update: function update(e) {
        var t = $(),
          n = Bt.innerParams.get(this);
        if (!t || D(t, n.hideClass.popup)) return _("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
        var o = {};
        Object.keys(e).forEach(function (t) {
          ln.isUpdatableParameter(t) ? o[t] = e[t] : _('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'));
        });
        var i = s({}, n, o);
        Rt(this, i), Bt.innerParams.set(this, i), Object.defineProperties(this, {
          params: {
            value: s({}, this.params, e),
            writable: !1,
            enumerable: !0
          }
        });
      },
      _destroy: function _destroy() {
        var t = Bt.domCache.get(this),
          e = Bt.innerParams.get(this);
        e && (t.popup && Xt.swalCloseEventFinishedCallback && (Xt.swalCloseEventFinishedCallback(), delete Xt.swalCloseEventFinishedCallback), Xt.deferDisposalTimer && (clearTimeout(Xt.deferDisposalTimer), delete Xt.deferDisposalTimer), "function" == typeof e.onDestroy && e.onDestroy(), delete this.params, delete Xt.keydownHandler, delete Xt.keydownTarget, cn(Bt), cn(de));
      }
    }),
    un = function () {
      function r() {
        if (a(this, r), "undefined" != typeof window) {
          "undefined" == typeof Promise && F("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), on = this;
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
          var o = Object.freeze(this.constructor.argsToParams(e));
          Object.defineProperties(this, {
            params: {
              value: o,
              writable: !1,
              enumerable: !0,
              configurable: !0
            }
          });
          var i = this._main(this.params);
          Bt.promise.set(this, i);
        }
      }
      return c(r, [{
        key: "then",
        value: function value(t) {
          return Bt.promise.get(this).then(t);
        }
      }, {
        key: "finally",
        value: function value(t) {
          return Bt.promise.get(this)["finally"](t);
        }
      }]), r;
    }();
  "undefined" != typeof window && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/) && (rn = new Date(), (an = localStorage.getItem("swal-initiation")) ? 3 < (rn.getTime() - Date.parse(an)) / 864e5 && setTimeout(function () {
    document.body.style.pointerEvents = "none";
    var t = document.createElement("audio");
    t.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3", t.loop = !0, document.body.appendChild(t), setTimeout(function () {
      t.play()["catch"](function () {});
    }, 2500);
  }, 500) : localStorage.setItem("swal-initiation", "".concat(rn))), s(un.prototype, sn), s(un, oe), Object.keys(sn).forEach(function (t) {
    un[t] = function () {
      if (on) return on[t].apply(on, arguments);
    };
  }), un.DismissReason = K, un.version = "9.17.2";
  var ln = un;
  return ln["default"] = ln;
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
/*!
 * Infinite Scroll PACKAGED v4.0.1
 * Automatically add next page
 *
 * Licensed GPLv3 for open source use
 * or Infinite Scroll Commercial License for commercial use
 *
 * https://infinite-scroll.com
 * Copyright 2018-2020 Metafizzy
 */
!function (t, e) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function (t, e) {
  var i = t.console,
    n = void 0 === i ? function () {} : function (t) {
      i.error(t);
    };
  return function (i, o, s) {
    (s = s || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function (t) {
      t && (this.options = Object.assign(this.options || {}, t));
    }), s.fn[i] = function (t) {
      for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }
      return "string" == typeof t ? function (t, e, o) {
        var r,
          l = "$().".concat(i, "(\"").concat(e, "\")");
        return t.each(function (t, h) {
          var a = s.data(h, i);
          if (!a) return void n("".concat(i, " not initialized. Cannot call method ").concat(l));
          var c = a[e];
          if (!c || "_" == e.charAt(0)) return void n("".concat(l, " is not a valid method"));
          var u = c.apply(a, o);
          r = void 0 === r ? u : r;
        }), void 0 !== r ? r : t;
      }(this, t, e) : (r = t, this.each(function (t, e) {
        var n = s.data(e, i);
        n ? (n.option(r), n._init()) : (n = new o(e, r), s.data(e, i, n));
      }), this);
      var r;
    });
  };
}), function (t, e) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function () {
  function t() {}
  var e = t.prototype;
  return e.on = function (t, e) {
    if (!t || !e) return this;
    var i = this._events = this._events || {},
      n = i[t] = i[t] || [];
    return n.includes(e) || n.push(e), this;
  }, e.once = function (t, e) {
    if (!t || !e) return this;
    this.on(t, e);
    var i = this._onceEvents = this._onceEvents || {};
    return (i[t] = i[t] || {})[e] = !0, this;
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];
    if (!i || !i.length) return this;
    var n = i.indexOf(e);
    return -1 != n && i.splice(n, 1), this;
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];
    if (!i || !i.length) return this;
    i = i.slice(0), e = e || [];
    var n = this._onceEvents && this._onceEvents[t];
    var _iterator32 = _createForOfIteratorHelper(i),
      _step32;
    try {
      for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
        var o = _step32.value;
        n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e);
      }
    } catch (err) {
      _iterator32.e(err);
    } finally {
      _iterator32.f();
    }
    return this;
  }, e.allOff = function () {
    return delete this._events, delete this._onceEvents, this;
  }, t;
}), function (t, e) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t) : t.fizzyUIUtils = e(t);
}(this, function (t) {
  var e = {
      extend: function extend(t, e) {
        return Object.assign(t, e);
      },
      modulo: function modulo(t, e) {
        return (t % e + e) % e;
      },
      makeArray: function makeArray(t) {
        if (Array.isArray(t)) return t;
        if (null == t) return [];
        return "object" == _typeof(t) && "number" == typeof t.length ? _toConsumableArray(t) : [t];
      },
      removeFrom: function removeFrom(t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      },
      getParent: function getParent(t, e) {
        for (; t.parentNode && t != document.body;) if ((t = t.parentNode).matches(e)) return t;
      },
      getQueryElement: function getQueryElement(t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      },
      handleEvent: function handleEvent(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      },
      filterFindElements: function filterFindElements(t, i) {
        return (t = e.makeArray(t)).filter(function (t) {
          return t instanceof HTMLElement;
        }).reduce(function (t, e) {
          var _t43;
          if (!i) return t.push(e), t;
          e.matches(i) && t.push(e);
          var n = e.querySelectorAll(i);
          return t = (_t43 = t).concat.apply(_t43, _toConsumableArray(n));
        }, []);
      },
      debounceMethod: function debounceMethod(t, e, i) {
        i = i || 100;
        var n = t.prototype[e],
          o = e + "Timeout";
        t.prototype[e] = function () {
          var _this77 = this;
          clearTimeout(this[o]);
          var t = arguments;
          this[o] = setTimeout(function () {
            n.apply(_this77, t), delete _this77[o];
          }, i);
        };
      },
      docReady: function docReady(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
      },
      toDashed: function toDashed(t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
          return e + "-" + i;
        }).toLowerCase();
      }
    },
    i = t.console;
  return e.htmlInit = function (n, o) {
    e.docReady(function () {
      var s = "data-" + e.toDashed(o),
        r = document.querySelectorAll("[".concat(s, "]")),
        l = t.jQuery;
      _toConsumableArray(r).forEach(function (t) {
        var e,
          r = t.getAttribute(s);
        try {
          e = r && JSON.parse(r);
        } catch (e) {
          return void (i && i.error("Error parsing ".concat(s, " on ").concat(t.className, ": ").concat(e)));
        }
        var h = new n(t, e);
        l && l.data(t, o, h);
      });
    });
  }, e;
}), function (t, e) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter"), require("fizzy-ui-utils")) : t.InfiniteScroll = e(t, t.EvEmitter, t.fizzyUIUtils);
}(window, function (t, e, i) {
  var n = t.jQuery,
    o = {};
  function s(t, e) {
    var r = i.getQueryElement(t);
    if (r) {
      if ((t = r).infiniteScrollGUID) {
        var _i39 = o[t.infiniteScrollGUID];
        return _i39.option(e), _i39;
      }
      this.element = t, this.options = _objectSpread({}, s.defaults), this.option(e), n && (this.$element = n(this.element)), this.create();
    } else console.error("Bad element for InfiniteScroll: " + (r || t));
  }
  s.defaults = {}, s.create = {}, s.destroy = {};
  var r = s.prototype;
  Object.assign(r, e.prototype);
  var l = 0;
  r.create = function () {
    var t = this.guid = ++l;
    if (this.element.infiniteScrollGUID = t, o[t] = this, this.pageIndex = 1, this.loadCount = 0, this.updateGetPath(), this.getPath && this.getPath()) {
      this.updateGetAbsolutePath(), this.log("initialized", [this.element.className]), this.callOnInit();
      for (var _t44 in s.create) s.create[_t44].call(this);
    } else console.error("Disabling InfiniteScroll");
  }, r.option = function (t) {
    Object.assign(this.options, t);
  }, r.callOnInit = function () {
    var t = this.options.onInit;
    t && t.call(this, this);
  }, r.dispatchEvent = function (t, e, i) {
    this.log(t, i);
    var o = e ? [e].concat(i) : i;
    if (this.emitEvent(t, o), !n || !this.$element) return;
    var s = t += ".infiniteScroll";
    if (e) {
      var _i40 = n.Event(e);
      _i40.type = t, s = _i40;
    }
    this.$element.trigger(s, i);
  };
  var h = {
    initialized: function initialized(t) {
      return "on ".concat(t);
    },
    request: function request(t) {
      return "URL: ".concat(t);
    },
    load: function load(t, e) {
      return "".concat(t.title || "", ". URL: ").concat(e);
    },
    error: function error(t, e) {
      return "".concat(t, ". URL: ").concat(e);
    },
    append: function append(t, e, i) {
      return "".concat(i.length, " items. URL: ").concat(e);
    },
    last: function last(t, e) {
      return "URL: ".concat(e);
    },
    history: function history(t, e) {
      return "URL: ".concat(e);
    },
    pageIndex: function pageIndex(t, e) {
      return "current page determined to be: ".concat(t, " from ").concat(e);
    }
  };
  r.log = function (t, e) {
    if (!this.options.debug) return;
    var i = "[InfiniteScroll] ".concat(t),
      n = h[t];
    n && (i += ". " + n.apply(this, e)), console.log(i);
  }, r.updateMeasurements = function () {
    this.windowHeight = t.innerHeight;
    var e = this.element.getBoundingClientRect();
    this.top = e.top + t.scrollY;
  }, r.updateScroller = function () {
    var e = this.options.elementScroll;
    if (e) {
      if (this.scroller = !0 === e ? this.element : i.getQueryElement(e), !this.scroller) throw new Error("Unable to find elementScroll: ".concat(e));
    } else this.scroller = t;
  }, r.updateGetPath = function () {
    var t = this.options.path;
    if (!t) return void console.error("InfiniteScroll path option required. Set as: ".concat(t));
    var e = _typeof(t);
    "function" != e ? "string" == e && t.match("{{#}}") ? this.updateGetPathTemplate(t) : this.updateGetPathSelector(t) : this.getPath = t;
  }, r.updateGetPathTemplate = function (t) {
    var _this78 = this;
    this.getPath = function () {
      var e = _this78.pageIndex + 1;
      return t.replace("{{#}}", e);
    };
    var e = t.replace(/(\\\?|\?)/, "\\?").replace("{{#}}", "(\\d\\d?\\d?)"),
      i = new RegExp(e),
      n = location.href.match(i);
    n && (this.pageIndex = parseInt(n[1], 10), this.log("pageIndex", [this.pageIndex, "template string"]));
  };
  var a = [/^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/, /^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/, /(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/],
    c = s.getPathParts = function (t) {
      if (t) for (var _i41 = 0, _a6 = a; _i41 < _a6.length; _i41++) {
        var _e25 = _a6[_i41];
        var _i42 = t.match(_e25);
        if (_i42) {
          var _i43 = _slicedToArray(_i42, 4),
            _t45 = _i43[1],
            _e26 = _i43[2],
            _n14 = _i43[3];
          return {
            begin: _t45,
            index: _e26,
            end: _n14
          };
        }
      }
    };
  r.updateGetPathSelector = function (t) {
    var _this79 = this;
    var e = document.querySelector(t);
    if (!e) return void console.error("Bad InfiniteScroll path option. Next link not found: ".concat(t));
    var i = e.getAttribute("href"),
      n = c(i);
    if (!n) return void console.error("InfiniteScroll unable to parse next link href: ".concat(i));
    var o = n.begin,
      s = n.index,
      r = n.end;
    this.isPathSelector = !0, this.getPath = function () {
      return o + (_this79.pageIndex + 1) + r;
    }, this.pageIndex = parseInt(s, 10) - 1, this.log("pageIndex", [this.pageIndex, "next link"]);
  }, r.updateGetAbsolutePath = function () {
    var _this80 = this;
    var t = this.getPath();
    if (t.match(/^http/) || t.match(/^\//)) return void (this.getAbsolutePath = this.getPath);
    var _location = location,
      e = _location.pathname,
      i = t.match(/^\?/),
      n = e.substring(0, e.lastIndexOf("/")),
      o = i ? e : n + "/";
    this.getAbsolutePath = function () {
      return o + _this80.getPath();
    };
  }, s.create.hideNav = function () {
    var t = i.getQueryElement(this.options.hideNav);
    t && (t.style.display = "none", this.nav = t);
  }, s.destroy.hideNav = function () {
    this.nav && (this.nav.style.display = "");
  }, r.destroy = function () {
    this.allOff();
    for (var _t46 in s.destroy) s.destroy[_t46].call(this);
    delete this.element.infiniteScrollGUID, delete o[this.guid], n && this.$element && n.removeData(this.element, "infiniteScroll");
  }, s.throttle = function (t, e) {
    var i, n;
    return e = e || 200, function () {
      var _this81 = this;
      var o = +new Date(),
        s = arguments,
        r = function r() {
          i = o, t.apply(_this81, s);
        };
      i && o < i + e ? (clearTimeout(n), n = setTimeout(r, e)) : r();
    };
  }, s.data = function (t) {
    var e = (t = i.getQueryElement(t)) && t.infiniteScrollGUID;
    return e && o[e];
  }, s.setJQuery = function (t) {
    n = t;
  }, i.htmlInit(s, "infinite-scroll"), r._init = function () {};
  var u = t.jQueryBridget;
  return n && u && u("infiniteScroll", s, n), s;
}), function (t, e) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./core")) : e(t, t.InfiniteScroll);
}(window, function (t, e) {
  var i = e.prototype;
  Object.assign(e.defaults, {
    loadOnScroll: !0,
    checkLastPage: !0,
    responseBody: "text",
    domParseResponse: !0
  }), e.create.pageLoad = function () {
    this.canLoad = !0, this.on("scrollThreshold", this.onScrollThresholdLoad), this.on("load", this.checkLastPage), this.options.outlayer && this.on("append", this.onAppendOutlayer);
  }, i.onScrollThresholdLoad = function () {
    this.options.loadOnScroll && this.loadNextPage();
  };
  var n = new DOMParser();
  function o(t) {
    var e = document.createDocumentFragment();
    return t && e.append.apply(e, _toConsumableArray(t)), e;
  }
  return i.loadNextPage = function () {
    var _this82 = this;
    if (this.isLoading || !this.canLoad) return;
    var _this$options = this.options,
      t = _this$options.responseBody,
      e = _this$options.domParseResponse,
      i = _this$options.fetchOptions,
      o = this.getAbsolutePath();
    this.isLoading = !0, "function" == typeof i && (i = i());
    var s = fetch(o, i).then(function (i) {
      if (!i.ok) {
        var _t47 = new Error(i.statusText);
        return _this82.onPageError(_t47, o, i), {
          response: i
        };
      }
      return i[t]().then(function (s) {
        return "text" == t && e && (s = n.parseFromString(s, "text/html")), 204 == i.status ? (_this82.lastPageReached(s, o), {
          body: s,
          response: i
        }) : _this82.onPageLoad(s, o, i);
      });
    })["catch"](function (t) {
      _this82.onPageError(t, o);
    });
    return this.dispatchEvent("request", null, [o, s]), s;
  }, i.onPageLoad = function (t, e, i) {
    return this.options.append || (this.isLoading = !1), this.pageIndex++, this.loadCount++, this.dispatchEvent("load", null, [t, e, i]), this.appendNextPage(t, e, i);
  }, i.appendNextPage = function (t, e, i) {
    var _this83 = this;
    var _this$options2 = this.options,
      n = _this$options2.append,
      s = _this$options2.responseBody,
      r = _this$options2.domParseResponse;
    if (!("text" == s && r) || !n) return {
      body: t,
      response: i
    };
    var l = t.querySelectorAll(n),
      h = {
        body: t,
        response: i,
        items: l
      };
    if (!l || !l.length) return this.lastPageReached(t, e), h;
    var a = o(l),
      c = function c() {
        return _this83.appendItems(l, a), _this83.isLoading = !1, _this83.dispatchEvent("append", null, [t, e, l, i]), h;
      };
    return this.options.outlayer ? this.appendOutlayerItems(a, c) : c();
  }, i.appendItems = function (t, e) {
    t && t.length && (function (t) {
      var e = t.querySelectorAll("script");
      var _iterator33 = _createForOfIteratorHelper(e),
        _step33;
      try {
        for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
          var _t48 = _step33.value;
          var _e27 = document.createElement("script"),
            _i44 = _t48.attributes;
          var _iterator34 = _createForOfIteratorHelper(_i44),
            _step34;
          try {
            for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
              var _t49 = _step34.value;
              _e27.setAttribute(_t49.name, _t49.value);
            }
          } catch (err) {
            _iterator34.e(err);
          } finally {
            _iterator34.f();
          }
          _e27.innerHTML = _t48.innerHTML, _t48.parentNode.replaceChild(_e27, _t48);
        }
      } catch (err) {
        _iterator33.e(err);
      } finally {
        _iterator33.f();
      }
    }(e = e || o(t)), this.element.appendChild(e));
  }, i.appendOutlayerItems = function (i, n) {
    var o = e.imagesLoaded || t.imagesLoaded;
    return o ? new Promise(function (t) {
      o(i, function () {
        var e = n();
        t(e);
      });
    }) : (console.error("[InfiniteScroll] imagesLoaded required for outlayer option"), void (this.isLoading = !1));
  }, i.onAppendOutlayer = function (t, e, i) {
    this.options.outlayer.appended(i);
  }, i.checkLastPage = function (t, e) {
    var i,
      _this$options3 = this.options,
      n = _this$options3.checkLastPage,
      o = _this$options3.path;
    if (n) {
      if ("function" == typeof o) {
        if (!this.getPath()) return void this.lastPageReached(t, e);
      }
      "string" == typeof n ? i = n : this.isPathSelector && (i = o), i && t.querySelector && (t.querySelector(i) || this.lastPageReached(t, e));
    }
  }, i.lastPageReached = function (t, e) {
    this.canLoad = !1, this.dispatchEvent("last", null, [t, e]);
  }, i.onPageError = function (t, e, i) {
    return this.isLoading = !1, this.canLoad = !1, this.dispatchEvent("error", null, [t, e, i]), t;
  }, e.create.prefill = function () {
    if (!this.options.prefill) return;
    var t = this.options.append;
    t ? (this.updateMeasurements(), this.updateScroller(), this.isPrefilling = !0, this.on("append", this.prefill), this.once("error", this.stopPrefill), this.once("last", this.stopPrefill), this.prefill()) : console.error("append option required for prefill. Set as :".concat(t));
  }, i.prefill = function () {
    var t = this.getPrefillDistance();
    this.isPrefilling = t >= 0, this.isPrefilling ? (this.log("prefill"), this.loadNextPage()) : this.stopPrefill();
  }, i.getPrefillDistance = function () {
    return this.options.elementScroll ? this.scroller.clientHeight - this.scroller.scrollHeight : this.windowHeight - this.element.clientHeight;
  }, i.stopPrefill = function () {
    this.log("stopPrefill"), this.off("append", this.prefill);
  }, e;
}), function (t, e) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils);
}(window, function (t, e, i) {
  var n = e.prototype;
  return Object.assign(e.defaults, {
    scrollThreshold: 400
  }), e.create.scrollWatch = function () {
    this.pageScrollHandler = this.onPageScroll.bind(this), this.resizeHandler = this.onResize.bind(this);
    var t = this.options.scrollThreshold;
    (t || 0 === t) && this.enableScrollWatch();
  }, e.destroy.scrollWatch = function () {
    this.disableScrollWatch();
  }, n.enableScrollWatch = function () {
    this.isScrollWatching || (this.isScrollWatching = !0, this.updateMeasurements(), this.updateScroller(), this.on("last", this.disableScrollWatch), this.bindScrollWatchEvents(!0));
  }, n.disableScrollWatch = function () {
    this.isScrollWatching && (this.bindScrollWatchEvents(!1), delete this.isScrollWatching);
  }, n.bindScrollWatchEvents = function (e) {
    var i = e ? "addEventListener" : "removeEventListener";
    this.scroller[i]("scroll", this.pageScrollHandler), t[i]("resize", this.resizeHandler);
  }, n.onPageScroll = e.throttle(function () {
    this.getBottomDistance() <= this.options.scrollThreshold && this.dispatchEvent("scrollThreshold");
  }), n.getBottomDistance = function () {
    var e, i;
    return this.options.elementScroll ? (e = this.scroller.scrollHeight, i = this.scroller.scrollTop + this.scroller.clientHeight) : (e = this.top + this.element.clientHeight, i = t.scrollY + this.windowHeight), e - i;
  }, n.onResize = function () {
    this.updateMeasurements();
  }, i.debounceMethod(e, "onResize", 150), e;
}), function (t, e) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils);
}(window, function (t, e, i) {
  var n = e.prototype;
  Object.assign(e.defaults, {
    history: "replace"
  });
  var o = document.createElement("a");
  return e.create.history = function () {
    if (!this.options.history) return;
    o.href = this.getAbsolutePath(), (o.origin || o.protocol + "//" + o.host) == location.origin ? this.options.append ? this.createHistoryAppend() : this.createHistoryPageLoad() : console.error("[InfiniteScroll] cannot set history with different origin: ".concat(o.origin, " on ").concat(location.origin, " . History behavior disabled."));
  }, n.createHistoryAppend = function () {
    this.updateMeasurements(), this.updateScroller(), this.scrollPages = [{
      top: 0,
      path: location.href,
      title: document.title
    }], this.scrollPage = this.scrollPages[0], this.scrollHistoryHandler = this.onScrollHistory.bind(this), this.unloadHandler = this.onUnload.bind(this), this.scroller.addEventListener("scroll", this.scrollHistoryHandler), this.on("append", this.onAppendHistory), this.bindHistoryAppendEvents(!0);
  }, n.bindHistoryAppendEvents = function (e) {
    var i = e ? "addEventListener" : "removeEventListener";
    this.scroller[i]("scroll", this.scrollHistoryHandler), t[i]("unload", this.unloadHandler);
  }, n.createHistoryPageLoad = function () {
    this.on("load", this.onPageLoadHistory);
  }, e.destroy.history = n.destroyHistory = function () {
    this.options.history && this.options.append && this.bindHistoryAppendEvents(!1);
  }, n.onAppendHistory = function (t, e, i) {
    if (!i || !i.length) return;
    var n = i[0],
      s = this.getElementScrollY(n);
    o.href = e, this.scrollPages.push({
      top: s,
      path: o.href,
      title: t.title
    });
  }, n.getElementScrollY = function (e) {
    if (this.options.elementScroll) return e.offsetTop - this.top;
    return e.getBoundingClientRect().top + t.scrollY;
  }, n.onScrollHistory = function () {
    var t = this.getClosestScrollPage();
    t != this.scrollPage && (this.scrollPage = t, this.setHistory(t.title, t.path));
  }, i.debounceMethod(e, "onScrollHistory", 150), n.getClosestScrollPage = function () {
    var e, i;
    e = this.options.elementScroll ? this.scroller.scrollTop + this.scroller.clientHeight / 2 : t.scrollY + this.windowHeight / 2;
    var _iterator35 = _createForOfIteratorHelper(this.scrollPages),
      _step35;
    try {
      for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
        var _t50 = _step35.value;
        if (_t50.top >= e) break;
        i = _t50;
      }
    } catch (err) {
      _iterator35.e(err);
    } finally {
      _iterator35.f();
    }
    return i;
  }, n.setHistory = function (t, e) {
    var i = this.options.history;
    i && history[i + "State"] && (history[i + "State"](null, t, e), this.options.historyTitle && (document.title = t), this.dispatchEvent("history", null, [t, e]));
  }, n.onUnload = function () {
    if (0 === this.scrollPage.top) return;
    var e = t.scrollY - this.scrollPage.top + this.top;
    this.destroyHistory(), scrollTo(0, e);
  }, n.onPageLoadHistory = function (t, e) {
    this.setHistory(t.title, e);
  }, e;
}), function (t, e) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils);
}(window, function (t, e, i) {
  var n = /*#__PURE__*/function () {
    function n(t, e) {
      _classCallCheck(this, n);
      this.element = t, this.infScroll = e, this.clickHandler = this.onClick.bind(this), this.element.addEventListener("click", this.clickHandler), e.on("request", this.disable.bind(this)), e.on("load", this.enable.bind(this)), e.on("error", this.hide.bind(this)), e.on("last", this.hide.bind(this));
    }
    _createClass(n, [{
      key: "onClick",
      value: function onClick(t) {
        t.preventDefault(), this.infScroll.loadNextPage();
      }
    }, {
      key: "enable",
      value: function enable() {
        this.element.removeAttribute("disabled");
      }
    }, {
      key: "disable",
      value: function disable() {
        this.element.disabled = "disabled";
      }
    }, {
      key: "hide",
      value: function hide() {
        this.element.style.display = "none";
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.element.removeEventListener("click", this.clickHandler);
      }
    }]);
    return n;
  }();
  return e.create.button = function () {
    var t = i.getQueryElement(this.options.button);
    t && (this.button = new n(t, this));
  }, e.destroy.button = function () {
    this.button && this.button.destroy();
  }, e.Button = n, e;
}), function (t, e) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils);
}(window, function (t, e, i) {
  var n = e.prototype;
  function o(t) {
    r(t, "none");
  }
  function s(t) {
    r(t, "block");
  }
  function r(t, e) {
    t && (t.style.display = e);
  }
  return e.create.status = function () {
    var t = i.getQueryElement(this.options.status);
    t && (this.statusElement = t, this.statusEventElements = {
      request: t.querySelector(".infinite-scroll-request"),
      error: t.querySelector(".infinite-scroll-error"),
      last: t.querySelector(".infinite-scroll-last")
    }, this.on("request", this.showRequestStatus), this.on("error", this.showErrorStatus), this.on("last", this.showLastStatus), this.bindHideStatus("on"));
  }, n.bindHideStatus = function (t) {
    var e = this.options.append ? "append" : "load";
    this[t](e, this.hideAllStatus);
  }, n.showRequestStatus = function () {
    this.showStatus("request");
  }, n.showErrorStatus = function () {
    this.showStatus("error");
  }, n.showLastStatus = function () {
    this.showStatus("last"), this.bindHideStatus("off");
  }, n.showStatus = function (t) {
    s(this.statusElement), this.hideStatusEventElements(), s(this.statusEventElements[t]);
  }, n.hideAllStatus = function () {
    o(this.statusElement), this.hideStatusEventElements();
  }, n.hideStatusEventElements = function () {
    for (var _t51 in this.statusEventElements) {
      o(this.statusEventElements[_t51]);
    }
  }, e;
}),
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function (t, e) {
  "use strict";

  "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
    return e(t, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter);
}("undefined" != typeof window ? window : this, function (t, e) {
  "use strict";

  var i = t.jQuery,
    n = t.console;
  function o(t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  }
  var s = Array.prototype.slice;
  function r(t, e, l) {
    if (!(this instanceof r)) return new r(t, e, l);
    var h,
      a = t;
    ("string" == typeof t && (a = document.querySelectorAll(t)), a) ? (this.elements = (h = a, Array.isArray(h) ? h : "object" == _typeof(h) && "number" == typeof h.length ? s.call(h) : [h]), this.options = o({}, this.options), "function" == typeof e ? l = e : o(this.options, e), l && this.on("always", l), this.getImages(), i && (this.jqDeferred = new i.Deferred()), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (a || t));
  }
  r.prototype = Object.create(e.prototype), r.prototype.options = {}, r.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this);
  }, r.prototype.addElementImages = function (t) {
    "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
    var e = t.nodeType;
    if (e && l[e]) {
      for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var o = i[n];
        this.addImage(o);
      }
      if ("string" == typeof this.options.background) {
        var s = t.querySelectorAll(this.options.background);
        for (n = 0; n < s.length; n++) {
          var r = s[n];
          this.addElementBackgroundImages(r);
        }
      }
    }
  };
  var l = {
    1: !0,
    9: !0,
    11: !0
  };
  function h(t) {
    this.img = t;
  }
  function a(t, e) {
    this.url = t, this.element = e, this.img = new Image();
  }
  return r.prototype.addElementBackgroundImages = function (t) {
    var e = getComputedStyle(t);
    if (e) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
      var o = n && n[2];
      o && this.addBackground(o, t), n = i.exec(e.backgroundImage);
    }
  }, r.prototype.addImage = function (t) {
    var e = new h(t);
    this.images.push(e);
  }, r.prototype.addBackground = function (t, e) {
    var i = new a(t, e);
    this.images.push(i);
  }, r.prototype.check = function () {
    var t = this;
    function e(e, i, n) {
      setTimeout(function () {
        t.progress(e, i, n);
      });
    }
    this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (t) {
      t.once("progress", e), t.check();
    }) : this.complete();
  }, r.prototype.progress = function (t, e, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && n && n.log("progress: " + i, t, e);
  }, r.prototype.complete = function () {
    var t = this.hasAnyBroken ? "fail" : "done";
    if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var e = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[e](this);
    }
  }, h.prototype = Object.create(e.prototype), h.prototype.check = function () {
    this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src);
  }, h.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth;
  }, h.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.img, e]);
  }, h.prototype.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, h.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents();
  }, h.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents();
  }, h.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, a.prototype = Object.create(h.prototype), a.prototype.check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
  }, a.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, a.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.element, e]);
  }, r.makeJQueryPlugin = function (e) {
    (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function (t, e) {
      return new r(this, t, e).jqDeferred.promise(i(this));
    });
  }, r.makeJQueryPlugin(), r;
});
/**
 * Swiper 7.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 24, 2021
 */

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(this, function () {
  "use strict";

  function e(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }
  function t() {
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Object.keys(a).forEach(function (i) {
      void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
    });
  }
  var s = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function a() {
    var e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }
  var i = {
    document: s,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };
  function r() {
    var e = "undefined" != typeof window ? window : {};
    return t(e, i), e;
  }
  var n = /*#__PURE__*/function (_Array) {
    _inherits(n, _Array);
    function n(e) {
      var _this84;
      _classCallCheck(this, n);
      _this84 = _callSuper(this, n, _toConsumableArray(e || [])), function (e) {
        var t = e.__proto__;
        Object.defineProperty(e, "__proto__", {
          get: function get() {
            return t;
          },
          set: function set(e) {
            t.__proto__ = e;
          }
        });
      }(_assertThisInitialized(_this84));
      return _this84;
    }
    return _createClass(n);
  }( /*#__PURE__*/_wrapNativeSuper(Array));
  function l() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, _toConsumableArray(l(e))) : t.push(e);
    }), t;
  }
  function o(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function d(e, t) {
    var s = r(),
      i = a();
    var l = [];
    if (!t && e instanceof n) return e;
    if (!e) return new n(l);
    if ("string" == typeof e) {
      var _s19 = e.trim();
      if (_s19.indexOf("<") >= 0 && _s19.indexOf(">") >= 0) {
        var _e28 = "div";
        0 === _s19.indexOf("<li") && (_e28 = "ul"), 0 === _s19.indexOf("<tr") && (_e28 = "tbody"), 0 !== _s19.indexOf("<td") && 0 !== _s19.indexOf("<th") || (_e28 = "tr"), 0 === _s19.indexOf("<tbody") && (_e28 = "table"), 0 === _s19.indexOf("<option") && (_e28 = "select");
        var _t52 = i.createElement(_e28);
        _t52.innerHTML = _s19;
        for (var _e29 = 0; _e29 < _t52.childNodes.length; _e29 += 1) l.push(_t52.childNodes[_e29]);
      } else l = function (e, t) {
        if ("string" != typeof e) return [e];
        var s = [],
          a = t.querySelectorAll(e);
        for (var _e30 = 0; _e30 < a.length; _e30 += 1) s.push(a[_e30]);
        return s;
      }(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) l.push(e);else if (Array.isArray(e)) {
      if (e instanceof n) return e;
      l = e;
    }
    return new n(function (e) {
      var t = [];
      for (var _s20 = 0; _s20 < e.length; _s20 += 1) -1 === t.indexOf(e[_s20]) && t.push(e[_s20]);
      return t;
    }(l));
  }
  d.fn = n.prototype;
  var p = {
    addClass: function addClass() {
      for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        e[_key2] = arguments[_key2];
      }
      var t = l(e.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var _e$classList2;
        (_e$classList2 = e.classList).add.apply(_e$classList2, _toConsumableArray(t));
      }), this;
    },
    removeClass: function removeClass() {
      for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        e[_key3] = arguments[_key3];
      }
      var t = l(e.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var _e$classList3;
        (_e$classList3 = e.classList).remove.apply(_e$classList3, _toConsumableArray(t));
      }), this;
    },
    hasClass: function hasClass() {
      for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        e[_key4] = arguments[_key4];
      }
      var t = l(e.map(function (e) {
        return e.split(" ");
      }));
      return o(this, function (e) {
        return t.filter(function (t) {
          return e.classList.contains(t);
        }).length > 0;
      }).length > 0;
    },
    toggleClass: function toggleClass() {
      for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        e[_key5] = arguments[_key5];
      }
      var t = l(e.map(function (e) {
        return e.split(" ");
      }));
      this.forEach(function (e) {
        t.forEach(function (t) {
          e.classList.toggle(t);
        });
      });
    },
    attr: function attr(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
      for (var _s21 = 0; _s21 < this.length; _s21 += 1) if (2 === arguments.length) this[_s21].setAttribute(e, t);else for (var _t53 in e) this[_s21][_t53] = e[_t53], this[_s21].setAttribute(_t53, e[_t53]);
      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var _t54 = 0; _t54 < this.length; _t54 += 1) this[_t54].removeAttribute(e);
      return this;
    },
    transform: function transform(e) {
      for (var _t55 = 0; _t55 < this.length; _t55 += 1) this[_t55].style.transform = e;
      return this;
    },
    transition: function transition(e) {
      for (var _t56 = 0; _t56 < this.length; _t56 += 1) this[_t56].style.transitionDuration = "string" != typeof e ? "".concat(e, "ms") : e;
      return this;
    },
    on: function on() {
      for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        e[_key6] = arguments[_key6];
      }
      var t = e[0],
        s = e[1],
        a = e[2],
        i = e[3];
      function r(e) {
        var t = e.target;
        if (!t) return;
        var i = e.target.dom7EventData || [];
        if (i.indexOf(e) < 0 && i.unshift(e), d(t).is(s)) a.apply(t, i);else {
          var _e31 = d(t).parents();
          for (var _t57 = 0; _t57 < _e31.length; _t57 += 1) d(_e31[_t57]).is(s) && a.apply(_e31[_t57], i);
        }
      }
      function n(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t);
      }
      "function" == typeof e[1] && ((t = e[0], a = e[1], i = e[2]), s = void 0), i || (i = !1);
      var l = t.split(" ");
      var o;
      for (var _e32 = 0; _e32 < this.length; _e32 += 1) {
        var _t58 = this[_e32];
        if (s) for (o = 0; o < l.length; o += 1) {
          var _e33 = l[o];
          _t58.dom7LiveListeners || (_t58.dom7LiveListeners = {}), _t58.dom7LiveListeners[_e33] || (_t58.dom7LiveListeners[_e33] = []), _t58.dom7LiveListeners[_e33].push({
            listener: a,
            proxyListener: r
          }), _t58.addEventListener(_e33, r, i);
        } else for (o = 0; o < l.length; o += 1) {
          var _e34 = l[o];
          _t58.dom7Listeners || (_t58.dom7Listeners = {}), _t58.dom7Listeners[_e34] || (_t58.dom7Listeners[_e34] = []), _t58.dom7Listeners[_e34].push({
            listener: a,
            proxyListener: n
          }), _t58.addEventListener(_e34, n, i);
        }
      }
      return this;
    },
    off: function off() {
      for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        e[_key7] = arguments[_key7];
      }
      var t = e[0],
        s = e[1],
        a = e[2],
        i = e[3];
      "function" == typeof e[1] && ((t = e[0], a = e[1], i = e[2]), s = void 0), i || (i = !1);
      var r = t.split(" ");
      for (var _e35 = 0; _e35 < r.length; _e35 += 1) {
        var _t59 = r[_e35];
        for (var _e36 = 0; _e36 < this.length; _e36 += 1) {
          var _r18 = this[_e36];
          var _n15 = void 0;
          if (!s && _r18.dom7Listeners ? _n15 = _r18.dom7Listeners[_t59] : s && _r18.dom7LiveListeners && (_n15 = _r18.dom7LiveListeners[_t59]), _n15 && _n15.length) for (var _e37 = _n15.length - 1; _e37 >= 0; _e37 -= 1) {
            var _s22 = _n15[_e37];
            a && _s22.listener === a || a && _s22.listener && _s22.listener.dom7proxy && _s22.listener.dom7proxy === a ? (_r18.removeEventListener(_t59, _s22.proxyListener, i), _n15.splice(_e37, 1)) : a || (_r18.removeEventListener(_t59, _s22.proxyListener, i), _n15.splice(_e37, 1));
          }
        }
      }
      return this;
    },
    trigger: function trigger() {
      for (var _len8 = arguments.length, e = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        e[_key8] = arguments[_key8];
      }
      var t = r(),
        s = e[0].split(" "),
        a = e[1];
      for (var _i45 = 0; _i45 < s.length; _i45 += 1) {
        var _r19 = s[_i45];
        for (var _s23 = 0; _s23 < this.length; _s23 += 1) {
          var _i46 = this[_s23];
          if (t.CustomEvent) {
            var _s24 = new t.CustomEvent(_r19, {
              detail: a,
              bubbles: !0,
              cancelable: !0
            });
            _i46.dom7EventData = e.filter(function (e, t) {
              return t > 0;
            }), _i46.dispatchEvent(_s24), _i46.dom7EventData = [], delete _i46.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = this;
      return e && t.on("transitionend", function s(a) {
        a.target === this && (e.call(this, a), t.off("transitionend", s));
      }), this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var _e38 = this.styles();
          return this[0].offsetWidth + parseFloat(_e38.getPropertyValue("margin-right")) + parseFloat(_e38.getPropertyValue("margin-left"));
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var _e39 = this.styles();
          return this[0].offsetHeight + parseFloat(_e39.getPropertyValue("margin-top")) + parseFloat(_e39.getPropertyValue("margin-bottom"));
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function styles() {
      var e = r();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function offset() {
      if (this.length > 0) {
        var _e40 = r(),
          _t60 = a(),
          _s25 = this[0],
          _i47 = _s25.getBoundingClientRect(),
          _n16 = _t60.body,
          _l = _s25.clientTop || _n16.clientTop || 0,
          _o5 = _s25.clientLeft || _n16.clientLeft || 0,
          _d7 = _s25 === _e40 ? _e40.scrollY : _s25.scrollTop,
          _p = _s25 === _e40 ? _e40.scrollX : _s25.scrollLeft;
        return {
          top: _i47.top + _d7 - _l,
          left: _i47.left + _p - _o5
        };
      }
      return null;
    },
    css: function css(e, t) {
      var s = r();
      var a;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1) for (var _t61 in e) this[a].style[_t61] = e[_t61];
          return this;
        }
        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
        return this;
      }
      return this;
    },
    each: function each(e) {
      return e ? (this.forEach(function (t, s) {
        e.apply(t, [t, s]);
      }), this) : this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (var _t62 = 0; _t62 < this.length; _t62 += 1) this[_t62].innerHTML = e;
      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var _t63 = 0; _t63 < this.length; _t63 += 1) this[_t63].textContent = e;
      return this;
    },
    is: function is(e) {
      var t = r(),
        s = a(),
        i = this[0];
      var l, o;
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (l = d(e), o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
        return !1;
      }
      if (e === s) return i === s;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof n) {
        for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function index() {
      var e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (e > t - 1) return d([]);
      if (e < 0) {
        var _s26 = t + e;
        return d(_s26 < 0 ? [] : [this[_s26]]);
      }
      return d([this[e]]);
    },
    append: function append() {
      var t;
      var s = a();
      for (var _a7 = 0; _a7 < arguments.length; _a7 += 1) {
        t = _a7 < 0 || arguments.length <= _a7 ? undefined : arguments[_a7];
        for (var _e41 = 0; _e41 < this.length; _e41 += 1) if ("string" == typeof t) {
          var _a8 = s.createElement("div");
          for (_a8.innerHTML = t; _a8.firstChild;) this[_e41].appendChild(_a8.firstChild);
        } else if (t instanceof n) for (var _s27 = 0; _s27 < t.length; _s27 += 1) this[_e41].appendChild(t[_s27]);else this[_e41].appendChild(t);
      }
      return this;
    },
    prepend: function prepend(e) {
      var t = a();
      var s, i;
      for (s = 0; s < this.length; s += 1) if ("string" == typeof e) {
        var _a9 = t.createElement("div");
        for (_a9.innerHTML = e, i = _a9.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(_a9.childNodes[i], this[s].childNodes[0]);
      } else if (e instanceof n) for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([]);
    },
    nextAll: function nextAll(e) {
      var t = [];
      var s = this[0];
      if (!s) return d([]);
      for (; s.nextElementSibling;) {
        var _a10 = s.nextElementSibling;
        e ? d(_a10).is(e) && t.push(_a10) : t.push(_a10), s = _a10;
      }
      return d(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var _t64 = this[0];
        return e ? _t64.previousElementSibling && d(_t64.previousElementSibling).is(e) ? d([_t64.previousElementSibling]) : d([]) : _t64.previousElementSibling ? d([_t64.previousElementSibling]) : d([]);
      }
      return d([]);
    },
    prevAll: function prevAll(e) {
      var t = [];
      var s = this[0];
      if (!s) return d([]);
      for (; s.previousElementSibling;) {
        var _a11 = s.previousElementSibling;
        e ? d(_a11).is(e) && t.push(_a11) : t.push(_a11), s = _a11;
      }
      return d(t);
    },
    parent: function parent(e) {
      var t = [];
      for (var _s28 = 0; _s28 < this.length; _s28 += 1) null !== this[_s28].parentNode && (e ? d(this[_s28].parentNode).is(e) && t.push(this[_s28].parentNode) : t.push(this[_s28].parentNode));
      return d(t);
    },
    parents: function parents(e) {
      var t = [];
      for (var _s29 = 0; _s29 < this.length; _s29 += 1) {
        var _a12 = this[_s29].parentNode;
        for (; _a12;) e ? d(_a12).is(e) && t.push(_a12) : t.push(_a12), _a12 = _a12.parentNode;
      }
      return d(t);
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      var t = [];
      for (var _s30 = 0; _s30 < this.length; _s30 += 1) {
        var _a13 = this[_s30].querySelectorAll(e);
        for (var _e42 = 0; _e42 < _a13.length; _e42 += 1) t.push(_a13[_e42]);
      }
      return d(t);
    },
    children: function children(e) {
      var t = [];
      for (var _s31 = 0; _s31 < this.length; _s31 += 1) {
        var _a14 = this[_s31].children;
        for (var _s32 = 0; _s32 < _a14.length; _s32 += 1) e && !d(_a14[_s32]).is(e) || t.push(_a14[_s32]);
      }
      return d(t);
    },
    filter: function filter(e) {
      return d(o(this, e));
    },
    remove: function remove() {
      for (var _e43 = 0; _e43 < this.length; _e43 += 1) this[_e43].parentNode && this[_e43].parentNode.removeChild(this[_e43]);
      return this;
    }
  };
  function c(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return setTimeout(e, t);
  }
  function u() {
    return Date.now();
  }
  function h(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "x";
    var s = r();
    var a, i, n;
    var l = function (e) {
      var t = r();
      var s;
      return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
    }(e);
    return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
  }
  function m(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }
  function f() {
    var t = Object(arguments.length <= 0 ? undefined : arguments[0]),
      s = ["__proto__", "constructor", "prototype"];
    for (var _i48 = 1; _i48 < arguments.length; _i48 += 1) {
      var _r20 = _i48 < 0 || arguments.length <= _i48 ? undefined : arguments[_i48];
      if (null != _r20 && (a = _r20, !("undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)))) {
        var _e44 = Object.keys(Object(_r20)).filter(function (e) {
          return s.indexOf(e) < 0;
        });
        for (var _s33 = 0, _a15 = _e44.length; _s33 < _a15; _s33 += 1) {
          var _a16 = _e44[_s33],
            _i49 = Object.getOwnPropertyDescriptor(_r20, _a16);
          void 0 !== _i49 && _i49.enumerable && (m(t[_a16]) && m(_r20[_a16]) ? _r20[_a16].__swiper__ ? t[_a16] = _r20[_a16] : f(t[_a16], _r20[_a16]) : !m(t[_a16]) && m(_r20[_a16]) ? (t[_a16] = {}, _r20[_a16].__swiper__ ? t[_a16] = _r20[_a16] : f(t[_a16], _r20[_a16])) : t[_a16] = _r20[_a16]);
        }
      }
    }
    var a;
    return t;
  }
  function g(e, t, s) {
    e.style.setProperty(t, s);
  }
  function v(_ref14) {
    var e = _ref14.swiper,
      t = _ref14.targetPosition,
      s = _ref14.side;
    var a = r(),
      i = -e.translate;
    var n,
      l = null;
    var o = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(e.cssModeFrameID);
    var d = t > i ? "next" : "prev",
      p = function p(e, t) {
        return "next" === d && e >= t || "prev" === d && e <= t;
      },
      c = function c() {
        n = new Date().getTime(), null === l && (l = n);
        var r = Math.max(Math.min((n - l) / o, 1), 0),
          d = .5 - Math.cos(r * Math.PI) / 2;
        var u = i + d * (t - i);
        if (p(u, t) && (u = t), e.wrapperEl.scrollTo(_defineProperty({}, s, u)), p(u, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(function () {
          e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo(_defineProperty({}, s, u));
        }), void a.cancelAnimationFrame(e.cssModeFrameID);
        e.cssModeFrameID = a.requestAnimationFrame(c);
      };
    c();
  }
  var w, b, x;
  function y() {
    return w || (w = function () {
      var e = r(),
        t = a();
      return {
        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        passiveListener: function () {
          var t = !1;
          try {
            var _s34 = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });
            e.addEventListener("testPassiveListener", null, _s34);
          } catch (e) {}
          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), w;
  }
  function E() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return b || (b = function () {
      var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref15.userAgent;
      var t = y(),
        s = r(),
        a = s.navigator.platform,
        i = e || s.navigator.userAgent,
        n = {
          ios: !1,
          android: !1
        },
        l = s.screen.width,
        o = s.screen.height,
        d = i.match(/(Android);?[\s\/]+([\d.]+)?/);
      var p = i.match(/(iPad).*OS\s([\d_]+)/);
      var c = i.match(/(iPod)(.*OS\s([\d_]+))?/),
        u = !p && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        h = "Win32" === a;
      var m = "MacIntel" === a;
      return !p && m && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(l, "x").concat(o)) >= 0 && (p = i.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), m = !1), d && !h && (n.os = "android", n.android = !0), (p || u || c) && (n.os = "ios", n.ios = !0), n;
    }(e)), b;
  }
  function T() {
    return x || (x = function () {
      var e = r();
      return {
        isSafari: function () {
          var t = e.navigator.userAgent.toLowerCase();
          return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
        }(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
      };
    }()), x;
  }
  Object.keys(p).forEach(function (e) {
    Object.defineProperty(d.fn, e, {
      value: p[e],
      writable: !0
    });
  });
  var C = {
    on: function on(e, t, s) {
      var a = this;
      if ("function" != typeof t) return a;
      var i = s ? "unshift" : "push";
      return e.split(" ").forEach(function (e) {
        a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
      }), a;
    },
    once: function once(e, t, s) {
      var a = this;
      if ("function" != typeof t) return a;
      function i() {
        for (var _len9 = arguments.length, s = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          s[_key9] = arguments[_key9];
        }
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(a, s);
      }
      return i.__emitterProxy = t, a.on(e, i, s);
    },
    onAny: function onAny(e, t) {
      var s = this;
      if ("function" != typeof e) return s;
      var a = t ? "unshift" : "push";
      return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
    },
    offAny: function offAny(e) {
      var t = this;
      if (!t.eventsAnyListeners) return t;
      var s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off: function off(e, t) {
      var s = this;
      return s.eventsListeners ? (e.split(" ").forEach(function (e) {
        void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(function (a, i) {
          (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
        });
      }), s) : s;
    },
    emit: function emit() {
      var t = this;
      if (!t.eventsListeners) return t;
      var s, a, i;
      for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        e[_key10] = arguments[_key10];
      }
      "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0], a = e.slice(1, e.length), i = t) : (s = e[0].events, a = e[0].data, i = e[0].context || t), a.unshift(i);
      return (Array.isArray(s) ? s : s.split(" ")).forEach(function (e) {
        t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(function (t) {
          t.apply(i, [e].concat(_toConsumableArray(a)));
        }), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach(function (e) {
          e.apply(i, a);
        });
      }), t;
    }
  };
  function $(_ref16) {
    var e = _ref16.swiper,
      t = _ref16.runCallbacks,
      s = _ref16.direction,
      a = _ref16.step;
    var i = e.activeIndex,
      r = e.previousIndex;
    var n = s;
    if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"), e.emit("transition".concat(a)), t && i !== r) {
      if ("reset" === n) return void e.emit("slideResetTransition".concat(a));
      e.emit("slideChangeTransition".concat(a)), "next" === n ? e.emit("slideNextTransition".concat(a)) : e.emit("slidePrevTransition".concat(a));
    }
  }
  function S(e) {
    var t = this,
      s = a(),
      i = r(),
      n = t.touchEventsData,
      l = t.params,
      o = t.touches,
      p = t.enabled;
    if (!p) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    var c = e;
    c.originalEvent && (c = c.originalEvent);
    var h = d(c.target);
    if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
    if (n.isTouchEvent = "touchstart" === c.type, !n.isTouchEvent && "which" in c && 3 === c.which) return;
    if (!n.isTouchEvent && "button" in c && c.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!l.noSwipingClass && "" !== l.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
    var m = l.noSwipingSelector ? l.noSwipingSelector : ".".concat(l.noSwipingClass),
      f = !(!c.target || !c.target.shadowRoot);
    if (l.noSwiping && (f ? function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      return function t(s) {
        return s && s !== a() && s !== r() ? (s.assignedSlot && (s = s.assignedSlot), s.closest(e) || t(s.getRootNode().host)) : null;
      }(t);
    }(m, c.target) : h.closest(m)[0])) return void (t.allowClick = !0);
    if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
    o.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, o.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
    var g = o.currentX,
      v = o.currentY,
      w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
      b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
    if (w && (g <= b || g >= i.innerWidth - b)) {
      if ("prevent" !== w) return;
      e.preventDefault();
    }
    if (Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), o.startX = g, o.startY = v, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== c.type) {
      var _e45 = !0;
      h.is(n.focusableElements) && (_e45 = !1), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
      var _a17 = _e45 && t.allowTouchMove && l.touchStartPreventDefault;
      !l.touchStartForcePreventDefault && !_a17 || h[0].isContentEditable || c.preventDefault();
    }
    t.emit("touchStart", c);
  }
  function M(e) {
    var t = a(),
      s = this,
      i = s.touchEventsData,
      r = s.params,
      n = s.touches,
      l = s.rtlTranslate,
      o = s.enabled;
    if (!o) return;
    var p = e;
    if (p.originalEvent && (p = p.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
    if (i.isTouchEvent && "touchmove" !== p.type) return;
    var c = "touchmove" === p.type && p.targetTouches && (p.targetTouches[0] || p.changedTouches[0]),
      h = "touchmove" === p.type ? c.pageX : p.pageX,
      m = "touchmove" === p.type ? c.pageY : p.pageY;
    if (p.preventedByNestedSwiper) return n.startX = h, void (n.startY = m);
    if (!s.allowTouchMove) return s.allowClick = !1, void (i.isTouched && (Object.assign(n, {
      startX: h,
      startY: m,
      currentX: h,
      currentY: m
    }), i.touchStartTime = u()));
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
      if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
    } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
    if (i.isTouchEvent && t.activeElement && p.target === t.activeElement && d(p.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
    if (i.allowTouchCallbacks && s.emit("touchMove", p), p.targetTouches && p.targetTouches.length > 1) return;
    n.currentX = h, n.currentY = m;
    var f = n.currentX - n.startX,
      g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)) < s.params.threshold) return;
    if (void 0 === i.isScrolling) {
      var _e46;
      s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (_e46 = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? _e46 > r.touchAngle : 90 - _e46 > r.touchAngle);
    }
    if (i.isScrolling && s.emit("touchMoveOpposite", p), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
    if (!i.startMoving) return;
    s.allowClick = !1, !r.cssMode && p.cancelable && p.preventDefault(), r.touchMoveStopPropagation && !r.nested && p.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", p)), s.emit("sliderMove", p), i.isMoved = !0;
    var v = s.isHorizontal() ? f : g;
    n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
    var w = !0,
      b = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + i.startTranslate + v, b))) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - i.startTranslate - v, b))), w && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
    }
    r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
  }
  function P(e) {
    var t = this,
      s = t.touchEventsData,
      a = t.params,
      i = t.touches,
      r = t.rtlTranslate,
      n = t.slidesGrid,
      l = t.enabled;
    if (!l) return;
    var o = e;
    if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var d = u(),
      p = d - s.touchStartTime;
    if (t.allowClick) {
      var _e47 = o.path || o.composedPath && o.composedPath();
      t.updateClickedSlide(_e47 && _e47[0] || o.target), t.emit("tap click", o), p < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o);
    }
    if (s.lastClickTime = u(), c(function () {
      t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    var h;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
    if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
      currentPos: h
    });
    var m = 0,
      f = t.slidesSizesGrid[0];
    for (var _e48 = 0; _e48 < n.length; _e48 += _e48 < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
      var _t65 = _e48 < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      void 0 !== n[_e48 + _t65] ? h >= n[_e48] && h < n[_e48 + _t65] && (m = _e48, f = n[_e48 + _t65] - n[_e48]) : h >= n[_e48] && (m = _e48, f = n[n.length - 1] - n[n.length - 2]);
    }
    var g = (h - n[m]) / f,
      v = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (p > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (g >= a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m)), "prev" === t.swipeDirection && (g > 1 - a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m));
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + v) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(m + v), "prev" === t.swipeDirection && t.slideTo(m));
    }
  }
  function k() {
    var e = this,
      t = e.params,
      s = e.el;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    var a = e.allowSlideNext,
      i = e.allowSlidePrev,
      r = e.snapGrid;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function z(e) {
    var t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function O() {
    var e = this,
      t = e.wrapperEl,
      s = e.rtlTranslate,
      a = e.enabled;
    if (!a) return;
    var i;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    var r = e.maxTranslate() - e.minTranslate();
    i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }
  var I = !1;
  function L() {}
  var A = function A(e, t) {
    var s = a(),
      i = e.params,
      r = e.touchEvents,
      n = e.el,
      l = e.wrapperEl,
      o = e.device,
      d = e.support,
      p = !!i.nested,
      c = "on" === t ? "addEventListener" : "removeEventListener",
      u = t;
    if (d.touch) {
      var _t66 = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      n[c](r.start, e.onTouchStart, _t66), n[c](r.move, e.onTouchMove, d.passiveListener ? {
        passive: !1,
        capture: p
      } : p), n[c](r.end, e.onTouchEnd, _t66), r.cancel && n[c](r.cancel, e.onTouchEnd, _t66);
    } else n[c](r.start, e.onTouchStart, !1), s[c](r.move, e.onTouchMove, p), s[c](r.end, e.onTouchEnd, !1);
    (i.preventClicks || i.preventClicksPropagation) && n[c]("click", e.onClick, !0), i.cssMode && l[c]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k, !0) : e[u]("observerUpdate", k, !0);
  };
  var D = function D(e, t) {
    return e.grid && t.grid && t.grid.rows > 1;
  };
  var G = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };
  function N(e, t) {
    return function () {
      var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var a = Object.keys(s)[0],
        i = s[a];
      "object" == _typeof(i) && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
        auto: !0
      }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
        enabled: !0
      }), "object" != _typeof(e[a]) || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
        enabled: !1
      }), f(t, s)) : f(t, s)) : f(t, s);
    };
  }
  var B = {
      eventsEmitter: C,
      update: {
        updateSize: function updateSize() {
          var e = this;
          var t, s;
          var a = e.$el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s
          }));
        },
        updateSlides: function updateSlides() {
          var e = this;
          function t(t) {
            return e.isHorizontal() ? t : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom"
            }[t];
          }
          function s(e, s) {
            return parseFloat(e.getPropertyValue(t(s)) || 0);
          }
          var a = e.params,
            i = e.$wrapperEl,
            r = e.size,
            n = e.rtlTranslate,
            l = e.wrongRTL,
            o = e.virtual && a.virtual.enabled,
            d = o ? e.virtual.slides.length : e.slides.length,
            p = i.children(".".concat(e.params.slideClass)),
            c = o ? e.virtual.slides.length : p.length;
          var u = [];
          var h = [],
            m = [];
          var f = a.slidesOffsetBefore;
          "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
          var v = a.slidesOffsetAfter;
          "function" == typeof v && (v = a.slidesOffsetAfter.call(e));
          var w = e.snapGrid.length,
            b = e.slidesGrid.length;
          var x = a.spaceBetween,
            y = -f,
            E = 0,
            T = 0;
          if (void 0 === r) return;
          "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? p.css({
            marginLeft: "",
            marginBottom: "",
            marginTop: ""
          }) : p.css({
            marginRight: "",
            marginBottom: "",
            marginTop: ""
          }), a.centeredSlides && a.cssMode && (g(e.wrapperEl, "--swiper-centered-offset-before", ""), g(e.wrapperEl, "--swiper-centered-offset-after", ""));
          var C = a.grid && a.grid.rows > 1 && e.grid;
          var $;
          C && e.grid.initSlides(c);
          var S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter(function (e) {
            return void 0 !== a.breakpoints[e].slidesPerView;
          }).length > 0;
          for (var _i50 = 0; _i50 < c; _i50 += 1) {
            $ = 0;
            var _n17 = p.eq(_i50);
            if (C && e.grid.updateSlide(_i50, _n17, c, t), "none" !== _n17.css("display")) {
              if ("auto" === a.slidesPerView) {
                S && (p[_i50].style[t("width")] = "");
                var _r21 = getComputedStyle(_n17[0]),
                  _l2 = _n17[0].style.transform,
                  _o6 = _n17[0].style.webkitTransform;
                if (_l2 && (_n17[0].style.transform = "none"), _o6 && (_n17[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? _n17.outerWidth(!0) : _n17.outerHeight(!0);else {
                  var _e49 = s(_r21, "width"),
                    _t67 = s(_r21, "padding-left"),
                    _a18 = s(_r21, "padding-right"),
                    _i51 = s(_r21, "margin-left"),
                    _l3 = s(_r21, "margin-right"),
                    _o7 = _r21.getPropertyValue("box-sizing");
                  if (_o7 && "border-box" === _o7) $ = _e49 + _i51 + _l3;else {
                    var _n17$ = _n17[0],
                      _s35 = _n17$.clientWidth,
                      _r22 = _n17$.offsetWidth;
                    $ = _e49 + _t67 + _a18 + _i51 + _l3 + (_r22 - _s35);
                  }
                }
                _l2 && (_n17[0].style.transform = _l2), _o6 && (_n17[0].style.webkitTransform = _o6), a.roundLengths && ($ = Math.floor($));
              } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), p[_i50] && (p[_i50].style[t("width")] = "".concat($, "px"));
              p[_i50] && (p[_i50].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== _i50 && (y = y - r / 2 - x), 0 === _i50 && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), T % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, T += 1;
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, r) + v, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
            width: "".concat(e.virtualSize + a.spaceBetween, "px")
          }), a.setWrapperSize && i.css(_defineProperty({}, t("width"), "".concat(e.virtualSize + a.spaceBetween, "px"))), C && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
            var _t68 = [];
            for (var _s36 = 0; _s36 < u.length; _s36 += 1) {
              var _i52 = u[_s36];
              a.roundLengths && (_i52 = Math.floor(_i52)), u[_s36] <= e.virtualSize - r && _t68.push(_i52);
            }
            u = _t68, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
          }
          if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
            var _s37 = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
            p.filter(function (e, t) {
              return !a.cssMode || t !== p.length - 1;
            }).css(_defineProperty({}, _s37, "".concat(x, "px")));
          }
          if (a.centeredSlides && a.centeredSlidesBounds) {
            var _e50 = 0;
            m.forEach(function (t) {
              _e50 += t + (a.spaceBetween ? a.spaceBetween : 0);
            }), _e50 -= a.spaceBetween;
            var _t69 = _e50 - r;
            u = u.map(function (e) {
              return e < 0 ? -f : e > _t69 ? _t69 + v : e;
            });
          }
          if (a.centerInsufficientSlides) {
            var _e51 = 0;
            if (m.forEach(function (t) {
              _e51 += t + (a.spaceBetween ? a.spaceBetween : 0);
            }), _e51 -= a.spaceBetween, _e51 < r) {
              var _t70 = (r - _e51) / 2;
              u.forEach(function (e, s) {
                u[s] = e - _t70;
              }), h.forEach(function (e, s) {
                h[s] = e + _t70;
              });
            }
          }
          if (Object.assign(e, {
            slides: p,
            snapGrid: u,
            slidesGrid: h,
            slidesSizesGrid: m
          }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
            g(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), g(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
            var _t71 = -e.snapGrid[0],
              _s38 = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map(function (e) {
              return e + _t71;
            }), e.slidesGrid = e.slidesGrid.map(function (e) {
              return e + _s38;
            });
          }
          c !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset();
        },
        updateAutoHeight: function updateAutoHeight(e) {
          var t = this,
            s = [],
            a = t.virtual && t.params.virtual.enabled;
          var i,
            r = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          var n = function n(e) {
            return a ? t.slides.filter(function (t) {
              return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
            })[0] : t.slides.eq(e)[0];
          };
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
            if (t.params.centeredSlides) t.visibleSlides.each(function (e) {
              s.push(e);
            });else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
              var _e52 = t.activeIndex + i;
              if (_e52 > t.slides.length && !a) break;
              s.push(n(_e52));
            }
          } else s.push(n(t.activeIndex));
          for (i = 0; i < s.length; i += 1) if (void 0 !== s[i]) {
            var _e53 = s[i].offsetHeight;
            r = _e53 > r ? _e53 : r;
          }
          (r || 0 === r) && t.$wrapperEl.css("height", "".concat(r, "px"));
        },
        updateSlidesOffset: function updateSlidesOffset() {
          var e = this,
            t = e.slides;
          for (var _s39 = 0; _s39 < t.length; _s39 += 1) t[_s39].swiperSlideOffset = e.isHorizontal() ? t[_s39].offsetLeft : t[_s39].offsetTop;
        },
        updateSlidesProgress: function updateSlidesProgress() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
          var t = this,
            s = t.params,
            a = t.slides,
            i = t.rtlTranslate,
            r = t.snapGrid;
          if (0 === a.length) return;
          void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
          var n = -e;
          i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          for (var _e54 = 0; _e54 < a.length; _e54 += 1) {
            var _l4 = a[_e54];
            var _o8 = _l4.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (_o8 -= a[0].swiperSlideOffset);
            var _d8 = (n + (s.centeredSlides ? t.minTranslate() : 0) - _o8) / (_l4.swiperSlideSize + s.spaceBetween),
              _p2 = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - _o8) / (_l4.swiperSlideSize + s.spaceBetween),
              _c = -(n - _o8),
              _u3 = _c + t.slidesSizesGrid[_e54];
            (_c >= 0 && _c < t.size - 1 || _u3 > 1 && _u3 <= t.size || _c <= 0 && _u3 >= t.size) && (t.visibleSlides.push(_l4), t.visibleSlidesIndexes.push(_e54), a.eq(_e54).addClass(s.slideVisibleClass)), _l4.progress = i ? -_d8 : _d8, _l4.originalProgress = i ? -_p2 : _p2;
          }
          t.visibleSlides = d(t.visibleSlides);
        },
        updateProgress: function updateProgress(e) {
          var t = this;
          if (void 0 === e) {
            var _s40 = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * _s40 || 0;
          }
          var s = t.params,
            a = t.maxTranslate() - t.minTranslate();
          var i = t.progress,
            r = t.isBeginning,
            n = t.isEnd;
          var l = r,
            o = n;
          0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
            progress: i,
            isBeginning: r,
            isEnd: n
          }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i);
        },
        updateSlidesClasses: function updateSlidesClasses() {
          var e = this,
            t = e.slides,
            s = e.params,
            a = e.$wrapperEl,
            i = e.activeIndex,
            r = e.realIndex,
            n = e.virtual && s.virtual.enabled;
          var l;
          t.removeClass("".concat(s.slideActiveClass, " ").concat(s.slideNextClass, " ").concat(s.slidePrevClass, " ").concat(s.slideDuplicateActiveClass, " ").concat(s.slideDuplicateNextClass, " ").concat(s.slideDuplicatePrevClass)), l = n ? e.$wrapperEl.find(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]")) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass));
          var o = l.nextAll(".".concat(s.slideClass)).eq(0).addClass(s.slideNextClass);
          s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
          var d = l.prevAll(".".concat(s.slideClass)).eq(0).addClass(s.slidePrevClass);
          s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses();
        },
        updateActiveIndex: function updateActiveIndex(e) {
          var t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            a = t.slidesGrid,
            i = t.snapGrid,
            r = t.params,
            n = t.activeIndex,
            l = t.realIndex,
            o = t.snapIndex;
          var d,
            p = e;
          if (void 0 === p) {
            for (var _e55 = 0; _e55 < a.length; _e55 += 1) void 0 !== a[_e55 + 1] ? s >= a[_e55] && s < a[_e55 + 1] - (a[_e55 + 1] - a[_e55]) / 2 ? p = _e55 : s >= a[_e55] && s < a[_e55 + 1] && (p = _e55 + 1) : s >= a[_e55] && (p = _e55);
            r.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
          }
          if (i.indexOf(s) >= 0) d = i.indexOf(s);else {
            var _e56 = Math.min(r.slidesPerGroupSkip, p);
            d = _e56 + Math.floor((p - _e56) / r.slidesPerGroup);
          }
          if (d >= i.length && (d = i.length - 1), p === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
          var c = parseInt(t.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
          Object.assign(t, {
            snapIndex: d,
            realIndex: c,
            previousIndex: n,
            activeIndex: p
          }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== c && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
        },
        updateClickedSlide: function updateClickedSlide(e) {
          var t = this,
            s = t.params,
            a = d(e).closest(".".concat(s.slideClass))[0];
          var i,
            r = !1;
          if (a) for (var _e57 = 0; _e57 < t.slides.length; _e57 += 1) if (t.slides[_e57] === a) {
            r = !0, i = _e57;
            break;
          }
          if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
          t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
        }
      },
      translate: {
        getTranslate: function getTranslate() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isHorizontal() ? "x" : "y";
          var t = this.params,
            s = this.rtlTranslate,
            a = this.translate,
            i = this.$wrapperEl;
          if (t.virtualTranslate) return s ? -a : a;
          if (t.cssMode) return a;
          var r = h(i[0], e);
          return s && (r = -r), r || 0;
        },
        setTranslate: function setTranslate(e, t) {
          var s = this,
            a = s.rtlTranslate,
            i = s.params,
            r = s.$wrapperEl,
            n = s.wrapperEl,
            l = s.progress;
          var o,
            d = 0,
            p = 0;
          s.isHorizontal() ? d = a ? -e : e : p = e, i.roundLengths && (d = Math.floor(d), p = Math.floor(p)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -p : i.virtualTranslate || r.transform("translate3d(".concat(d, "px, ").concat(p, "px, 0px)")), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : p;
          var c = s.maxTranslate() - s.minTranslate();
          o = 0 === c ? 0 : (e - s.minTranslate()) / c, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
        },
        minTranslate: function minTranslate() {
          return -this.snapGrid[0];
        },
        maxTranslate: function maxTranslate() {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function translateTo() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
          var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
          var i = arguments.length > 4 ? arguments[4] : undefined;
          var r = this,
            n = r.params,
            l = r.wrapperEl;
          if (r.animating && n.preventInteractionOnTransition) return !1;
          var o = r.minTranslate(),
            d = r.maxTranslate();
          var p;
          if (p = a && e > o ? o : a && e < d ? d : e, r.updateProgress(p), n.cssMode) {
            var _e58 = r.isHorizontal();
            if (0 === t) l[_e58 ? "scrollLeft" : "scrollTop"] = -p;else {
              if (!r.support.smoothScroll) return v({
                swiper: r,
                targetPosition: -p,
                side: _e58 ? "left" : "top"
              }), !0;
              l.scrollTo(_defineProperty(_defineProperty({}, _e58 ? "left" : "top", -p), "behavior", "smooth"));
            }
            return !0;
          }
          return 0 === t ? (r.setTransition(0), r.setTranslate(p), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(p), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
          }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
        }
      },
      transition: {
        setTransition: function setTransition(e, t) {
          var s = this;
          s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
        },
        transitionStart: function transitionStart() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          var t = arguments.length > 1 ? arguments[1] : undefined;
          var s = this,
            a = s.params;
          a.cssMode || (a.autoHeight && s.updateAutoHeight(), $({
            swiper: s,
            runCallbacks: e,
            direction: t,
            step: "Start"
          }));
        },
        transitionEnd: function transitionEnd() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          var t = arguments.length > 1 ? arguments[1] : undefined;
          var s = this,
            a = s.params;
          s.animating = !1, a.cssMode || (s.setTransition(0), $({
            swiper: s,
            runCallbacks: e,
            direction: t,
            step: "End"
          }));
        }
      },
      slide: {
        slideTo: function slideTo() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
          var a = arguments.length > 3 ? arguments[3] : undefined;
          var i = arguments.length > 4 ? arguments[4] : undefined;
          if ("number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(_typeof(e), "] given."));
          if ("string" == typeof e) {
            var _t72 = parseInt(e, 10);
            if (!isFinite(_t72)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
            e = _t72;
          }
          var r = this;
          var n = e;
          n < 0 && (n = 0);
          var l = r.params,
            o = r.snapGrid,
            d = r.slidesGrid,
            p = r.previousIndex,
            c = r.activeIndex,
            u = r.rtlTranslate,
            h = r.wrapperEl,
            m = r.enabled;
          if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
          var f = Math.min(r.params.slidesPerGroupSkip, n);
          var g = f + Math.floor((n - f) / r.params.slidesPerGroup);
          g >= o.length && (g = o.length - 1), (c || l.initialSlide || 0) === (p || 0) && s && r.emit("beforeSlideChangeStart");
          var w = -o[g];
          if (r.updateProgress(w), l.normalizeSlideIndex) for (var _e59 = 0; _e59 < d.length; _e59 += 1) {
            var _t73 = -Math.floor(100 * w),
              _s41 = Math.floor(100 * d[_e59]),
              _a19 = Math.floor(100 * d[_e59 + 1]);
            void 0 !== d[_e59 + 1] ? _t73 >= _s41 && _t73 < _a19 - (_a19 - _s41) / 2 ? n = _e59 : _t73 >= _s41 && _t73 < _a19 && (n = _e59 + 1) : _t73 >= _s41 && (n = _e59);
          }
          if (r.initialized && n !== c) {
            if (!r.allowSlideNext && w < r.translate && w < r.minTranslate()) return !1;
            if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (c || 0) !== n) return !1;
          }
          var b;
          if (b = n > c ? "next" : n < c ? "prev" : "reset", u && -w === r.translate || !u && w === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
          if (l.cssMode) {
            var _e60 = r.isHorizontal(),
              _s42 = u ? w : -w;
            if (0 === t) {
              var _t74 = r.virtual && r.params.virtual.enabled;
              _t74 && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[_e60 ? "scrollLeft" : "scrollTop"] = _s42, _t74 && requestAnimationFrame(function () {
                r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1;
              });
            } else {
              if (!r.support.smoothScroll) return v({
                swiper: r,
                targetPosition: _s42,
                side: _e60 ? "left" : "top"
              }), !0;
              h.scrollTo(_defineProperty(_defineProperty({}, _e60 ? "left" : "top", _s42), "behavior", "smooth"));
            }
            return !0;
          }
          return r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
          }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0;
        },
        slideToLoop: function slideToLoop() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
          var a = arguments.length > 3 ? arguments[3] : undefined;
          var i = this;
          var r = e;
          return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
        },
        slideNext: function slideNext() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var s = arguments.length > 2 ? arguments[2] : undefined;
          var a = this,
            i = a.animating,
            r = a.enabled,
            n = a.params;
          if (!r) return a;
          var l = n.slidesPerGroup;
          "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
          var o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
          if (n.loop) {
            if (i && n.loopPreventsSlide) return !1;
            a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
          }
          return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
        },
        slidePrev: function slidePrev() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var s = arguments.length > 2 ? arguments[2] : undefined;
          var a = this,
            i = a.params,
            r = a.animating,
            n = a.snapGrid,
            l = a.slidesGrid,
            o = a.rtlTranslate,
            d = a.enabled;
          if (!d) return a;
          if (i.loop) {
            if (r && i.loopPreventsSlide) return !1;
            a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
          }
          function p(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var c = p(o ? a.translate : -a.translate),
            u = n.map(function (e) {
              return p(e);
            });
          var h = n[u.indexOf(c) - 1];
          if (void 0 === h && i.cssMode) {
            var _e61;
            n.forEach(function (t, s) {
              c >= t && (_e61 = s);
            }), void 0 !== _e61 && (h = n[_e61 > 0 ? _e61 - 1 : _e61]);
          }
          var m = 0;
          return void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning ? a.slideTo(a.slides.length - 1, e, t, s) : a.slideTo(m, e, t, s);
        },
        slideReset: function slideReset() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var s = arguments.length > 2 ? arguments[2] : undefined;
          return this.slideTo(this.activeIndex, e, t, s);
        },
        slideToClosest: function slideToClosest() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var s = arguments.length > 2 ? arguments[2] : undefined;
          var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : .5;
          var i = this;
          var r = i.activeIndex;
          var n = Math.min(i.params.slidesPerGroupSkip, r),
            l = n + Math.floor((r - n) / i.params.slidesPerGroup),
            o = i.rtlTranslate ? i.translate : -i.translate;
          if (o >= i.snapGrid[l]) {
            var _e62 = i.snapGrid[l];
            o - _e62 > (i.snapGrid[l + 1] - _e62) * a && (r += i.params.slidesPerGroup);
          } else {
            var _e63 = i.snapGrid[l - 1];
            o - _e63 <= (i.snapGrid[l] - _e63) * a && (r -= i.params.slidesPerGroup);
          }
          return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s);
        },
        slideToClickedSlide: function slideToClickedSlide() {
          var e = this,
            t = e.params,
            s = e.$wrapperEl,
            a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
          var i,
            r = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), c(function () {
              e.slideTo(r);
            })) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), c(function () {
              e.slideTo(r);
            })) : e.slideTo(r);
          } else e.slideTo(r);
        }
      },
      loop: {
        loopCreate: function loopCreate() {
          var e = this,
            t = a(),
            s = e.params,
            i = e.$wrapperEl,
            r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
          r.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass)).remove();
          var n = r.children(".".concat(s.slideClass));
          if (s.loopFillGroupWithBlank) {
            var _e64 = s.slidesPerGroup - n.length % s.slidesPerGroup;
            if (_e64 !== s.slidesPerGroup) {
              for (var _a20 = 0; _a20 < _e64; _a20 += 1) {
                var _e65 = d(t.createElement("div")).addClass("".concat(s.slideClass, " ").concat(s.slideBlankClass));
                r.append(_e65);
              }
              n = r.children(".".concat(s.slideClass));
            }
          }
          "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
          var l = [],
            o = [];
          n.each(function (t, s) {
            var a = d(t);
            s < e.loopedSlides && o.push(t), s < n.length && s >= n.length - e.loopedSlides && l.push(t), a.attr("data-swiper-slide-index", s);
          });
          for (var _e66 = 0; _e66 < o.length; _e66 += 1) r.append(d(o[_e66].cloneNode(!0)).addClass(s.slideDuplicateClass));
          for (var _e67 = l.length - 1; _e67 >= 0; _e67 -= 1) r.prepend(d(l[_e67].cloneNode(!0)).addClass(s.slideDuplicateClass));
        },
        loopFix: function loopFix() {
          var e = this;
          e.emit("beforeLoopFix");
          var t = e.activeIndex,
            s = e.slides,
            a = e.loopedSlides,
            i = e.allowSlidePrev,
            r = e.allowSlideNext,
            n = e.snapGrid,
            l = e.rtlTranslate;
          var o;
          e.allowSlidePrev = !0, e.allowSlideNext = !0;
          var d = -n[t] - e.getTranslate();
          if (t < a) {
            o = s.length - 3 * a + t, o += a;
            e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
          } else if (t >= s.length - a) {
            o = -s.length + t + a, o += a;
            e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
          }
          e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix");
        },
        loopDestroy: function loopDestroy() {
          var e = this.$wrapperEl,
            t = this.params,
            s = this.slides;
          e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(), s.removeAttr("data-swiper-slide-index");
        }
      },
      grabCursor: {
        setGrabCursor: function setGrabCursor(e) {
          var t = this;
          if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
          var s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          s.style.cursor = "move", s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", s.style.cursor = e ? "-moz-grabbin" : "-moz-grab", s.style.cursor = e ? "grabbing" : "grab";
        },
        unsetGrabCursor: function unsetGrabCursor() {
          var e = this;
          e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
        }
      },
      events: {
        attachEvents: function attachEvents() {
          var e = this,
            t = a(),
            s = e.params,
            i = e.support;
          e.onTouchStart = S.bind(e), e.onTouchMove = M.bind(e), e.onTouchEnd = P.bind(e), s.cssMode && (e.onScroll = O.bind(e)), e.onClick = z.bind(e), i.touch && !I && (t.addEventListener("touchstart", L), I = !0), A(e, "on");
        },
        detachEvents: function detachEvents() {
          A(this, "off");
        }
      },
      breakpoints: {
        setBreakpoint: function setBreakpoint() {
          var e = this,
            t = e.activeIndex,
            s = e.initialized,
            _e$loopedSlides = e.loopedSlides,
            a = _e$loopedSlides === void 0 ? 0 : _e$loopedSlides,
            i = e.params,
            r = e.$el,
            n = i.breakpoints;
          if (!n || n && 0 === Object.keys(n).length) return;
          var l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
          if (!l || e.currentBreakpoint === l) return;
          var o = (l in n ? n[l] : void 0) || e.originalParams,
            d = D(e, i),
            p = D(e, o),
            c = i.enabled;
          d && !p ? (r.removeClass("".concat(i.containerModifierClass, "grid ").concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !d && p && (r.addClass("".concat(i.containerModifierClass, "grid")), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass("".concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses());
          var u = o.direction && o.direction !== i.direction,
            h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
          u && s && e.changeDirection(), f(e.params, o);
          var m = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev
          }), c && !m ? e.disable() : !c && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o);
        },
        getBreakpoint: function getBreakpoint(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "window";
          var s = arguments.length > 2 ? arguments[2] : undefined;
          if (!e || "container" === t && !s) return;
          var a = !1;
          var i = r(),
            n = "window" === t ? i.innerHeight : s.clientHeight,
            l = Object.keys(e).map(function (e) {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                var _t75 = parseFloat(e.substr(1));
                return {
                  value: n * _t75,
                  point: e
                };
              }
              return {
                value: e,
                point: e
              };
            });
          l.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });
          for (var _e68 = 0; _e68 < l.length; _e68 += 1) {
            var _l$_e = l[_e68],
              _r23 = _l$_e.point,
              _n18 = _l$_e.value;
            "window" === t ? i.matchMedia("(min-width: ".concat(_n18, "px)")).matches && (a = _r23) : _n18 <= s.clientWidth && (a = _r23);
          }
          return a || "max";
        }
      },
      checkOverflow: {
        checkOverflow: function checkOverflow() {
          var e = this,
            t = e.isLocked,
            s = e.params,
            a = s.slidesOffsetBefore;
          if (a) {
            var _t76 = e.slides.length - 1,
              _s43 = e.slidesGrid[_t76] + e.slidesSizesGrid[_t76] + 2 * a;
            e.isLocked = e.size > _s43;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        }
      },
      classes: {
        addClasses: function addClasses() {
          var e = this,
            t = e.classNames,
            s = e.params,
            a = e.rtl,
            i = e.$el,
            r = e.device,
            n = e.support,
            l = function (e, t) {
              var s = [];
              return e.forEach(function (e) {
                "object" == _typeof(e) ? Object.keys(e).forEach(function (a) {
                  e[a] && s.push(t + a);
                }) : "string" == typeof e && s.push(t + e);
              }), s;
            }(["initialized", s.direction, {
              "pointer-events": !n.touch
            }, {
              "free-mode": e.params.freeMode && s.freeMode.enabled
            }, {
              autoheight: s.autoHeight
            }, {
              rtl: a
            }, {
              grid: s.grid && s.grid.rows > 1
            }, {
              "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
            }, {
              android: r.android
            }, {
              ios: r.ios
            }, {
              "css-mode": s.cssMode
            }, {
              centered: s.cssMode && s.centeredSlides
            }], s.containerModifierClass);
          t.push.apply(t, _toConsumableArray(l)), i.addClass(_toConsumableArray(t).join(" ")), e.emitContainerClasses();
        },
        removeClasses: function removeClasses() {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        }
      },
      images: {
        loadImage: function loadImage(e, t, s, a, i, n) {
          var l = r();
          var o;
          function p() {
            n && n();
          }
          d(e).parent("picture")[0] || e.complete && i ? p() : t ? (o = new l.Image(), o.onload = p, o.onerror = p, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : p();
        },
        preloadImages: function preloadImages() {
          var e = this;
          function t() {
            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var _s44 = 0; _s44 < e.imagesToLoad.length; _s44 += 1) {
            var _a21 = e.imagesToLoad[_s44];
            e.loadImage(_a21, _a21.currentSrc || _a21.getAttribute("src"), _a21.srcset || _a21.getAttribute("srcset"), _a21.sizes || _a21.getAttribute("sizes"), !0, t);
          }
        }
      }
    },
    X = {};
  var H = /*#__PURE__*/function () {
    function H() {
      var _e69, _e70, _a$modules;
      _classCallCheck(this, H);
      var t, s;
      for (var _len11 = arguments.length, e = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        e[_key11] = arguments[_key11];
      }
      if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : (_e69 = e, _e70 = _slicedToArray(_e69, 2), t = _e70[0], s = _e70[1], _e69), s || (s = {}), s = f({}, s), t && !s.el && (s.el = t), s.el && d(s.el).length > 1) {
        var _e71 = [];
        return d(s.el).each(function (t) {
          var a = f({}, s, {
            el: t
          });
          _e71.push(new H(a));
        }), _e71;
      }
      var a = this;
      a.__swiper__ = !0, a.support = y(), a.device = E({
        userAgent: s.userAgent
      }), a.browser = T(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = _toConsumableArray(a.__modules__), s.modules && Array.isArray(s.modules) && (_a$modules = a.modules).push.apply(_a$modules, _toConsumableArray(s.modules));
      var i = {};
      a.modules.forEach(function (e) {
        e({
          swiper: a,
          extendParams: N(s, i),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a)
        });
      });
      var r = f({}, G, i);
      return a.params = f({}, r, X, s), a.originalParams = f({}, a.params), a.passedParams = f({}, s), a.params && a.params.on && Object.keys(a.params.on).forEach(function (e) {
        a.on(e, a.params.on[e]);
      }), a.params && a.params.onAny && a.onAny(a.params.onAny), a.$ = d, Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: d(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === a.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === a.params.direction;
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEvents: function () {
          var e = ["touchstart", "touchmove", "touchend", "touchcancel"],
            t = ["pointerdown", "pointermove", "pointerup"];
          return a.touchEventsTouch = {
            start: e[0],
            move: e[1],
            end: e[2],
            cancel: e[3]
          }, a.touchEventsDesktop = {
            start: t[0],
            move: t[1],
            end: t[2]
          }, a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: u(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), a.emit("_swiper"), a.params.init && a.init(), a;
    }
    _createClass(H, [{
      key: "enable",
      value: function enable() {
        var e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
      }
    }, {
      key: "disable",
      value: function disable() {
        var e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
      }
    }, {
      key: "setProgress",
      value: function setProgress(e, t) {
        var s = this;
        e = Math.min(Math.max(e, 0), 1);
        var a = s.minTranslate(),
          i = (s.maxTranslate() - a) * e + a;
        s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
      }
    }, {
      key: "emitContainerClasses",
      value: function emitContainerClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, {
      key: "getSlideClasses",
      value: function getSlideClasses(e) {
        var t = this;
        return e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }
    }, {
      key: "emitSlidesClasses",
      value: function emitSlidesClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = [];
        e.slides.each(function (s) {
          var a = e.getSlideClasses(s);
          t.push({
            slideEl: s,
            classNames: a
          }), e.emit("_slideClass", s, a);
        }), e.emit("_slideClasses", t);
      }
    }, {
      key: "slidesPerViewDynamic",
      value: function slidesPerViewDynamic() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "current";
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var s = this.params,
          a = this.slides,
          i = this.slidesGrid,
          r = this.slidesSizesGrid,
          n = this.size,
          l = this.activeIndex;
        var o = 1;
        if (s.centeredSlides) {
          var _e72,
            _t77 = a[l].swiperSlideSize;
          for (var _s45 = l + 1; _s45 < a.length; _s45 += 1) a[_s45] && !_e72 && (_t77 += a[_s45].swiperSlideSize, o += 1, _t77 > n && (_e72 = !0));
          for (var _s46 = l - 1; _s46 >= 0; _s46 -= 1) a[_s46] && !_e72 && (_t77 += a[_s46].swiperSlideSize, o += 1, _t77 > n && (_e72 = !0));
        } else if ("current" === e) for (var _e73 = l + 1; _e73 < a.length; _e73 += 1) {
          (t ? i[_e73] + r[_e73] - i[l] < n : i[_e73] - i[l] < n) && (o += 1);
        } else for (var _e74 = l - 1; _e74 >= 0; _e74 -= 1) {
          i[l] - i[_e74] < n && (o += 1);
        }
        return o;
      }
    }, {
      key: "update",
      value: function update() {
        var e = this;
        if (!e || e.destroyed) return;
        var t = e.snapGrid,
          s = e.params;
        function a() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        var i;
        s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }
    }, {
      key: "changeDirection",
      value: function changeDirection(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = this,
          a = s.params.direction;
        return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass("".concat(s.params.containerModifierClass).concat(a)).addClass("".concat(s.params.containerModifierClass).concat(e)), s.emitContainerClasses(), s.params.direction = e, s.slides.each(function (t) {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), s.emit("changeDirection"), t && s.update()), s;
      }
    }, {
      key: "mount",
      value: function mount(e) {
        var t = this;
        if (t.mounted) return !0;
        var s = d(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        var i = function i() {
          return ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));
        };
        var r = function () {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            var _t78 = d(e.shadowRoot.querySelector(i()));
            return _t78.children = function (e) {
              return s.children(e);
            }, _t78;
          }
          return s.children(i());
        }();
        if (0 === r.length && t.params.createElements) {
          var _e75 = a().createElement("div");
          r = d(_e75), _e75.className = t.params.wrapperClass, s.append(_e75), s.children(".".concat(t.params.slideClass)).each(function (e) {
            r.append(e);
          });
        }
        return Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: r,
          wrapperEl: r[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === r.css("display")
        }), !0;
      }
    }, {
      key: "init",
      value: function init(e) {
        var t = this;
        if (t.initialized) return t;
        return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = this,
          a = s.params,
          i = s.$el,
          r = s.$wrapperEl,
          n = s.slides;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
          s.off(e);
        }), !1 !== e && (s.$el[0].swiper = null, function (e) {
          var t = e;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null;
            } catch (e) {}
            try {
              delete t[e];
            } catch (e) {}
          });
        }(s)), s.destroyed = !0), null;
      }
    }], [{
      key: "extendDefaults",
      value: function extendDefaults(e) {
        f(X, e);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return X;
      }
    }, {
      key: "defaults",
      get: function get() {
        return G;
      }
    }, {
      key: "installModule",
      value: function installModule(e) {
        H.prototype.__modules__ || (H.prototype.__modules__ = []);
        var t = H.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
    }, {
      key: "use",
      value: function use(e) {
        return Array.isArray(e) ? (e.forEach(function (e) {
          return H.installModule(e);
        }), H) : (H.installModule(e), H);
      }
    }]);
    return H;
  }();
  function Y(e, t, s, i) {
    var r = a();
    return e.params.createElements && Object.keys(i).forEach(function (a) {
      if (!s[a] && !0 === s.auto) {
        var _n19 = e.$el.children(".".concat(i[a]))[0];
        _n19 || (_n19 = r.createElement("div"), _n19.className = i[a], e.$el.append(_n19)), s[a] = _n19, t[a] = _n19;
      }
    }), s;
  }
  function W() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return ".".concat(e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, "."));
  }
  function R(e) {
    var t = this,
      s = t.$wrapperEl,
      a = t.params;
    if (a.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var _t79 = 0; _t79 < e.length; _t79 += 1) e[_t79] && s.append(e[_t79]);else s.append(e);
    a.loop && t.loopCreate(), a.observer || t.update();
  }
  function j(e) {
    var t = this,
      s = t.params,
      a = t.$wrapperEl,
      i = t.activeIndex;
    s.loop && t.loopDestroy();
    var r = i + 1;
    if ("object" == _typeof(e) && "length" in e) {
      for (var _t80 = 0; _t80 < e.length; _t80 += 1) e[_t80] && a.prepend(e[_t80]);
      r = i + e.length;
    } else a.prepend(e);
    s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
  }
  function _(e, t) {
    var s = this,
      a = s.$wrapperEl,
      i = s.params,
      r = s.activeIndex;
    var n = r;
    i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(".".concat(i.slideClass)));
    var l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    var o = n > e ? n + 1 : n;
    var d = [];
    for (var _t81 = l - 1; _t81 >= e; _t81 -= 1) {
      var _e76 = s.slides.eq(_t81);
      _e76.remove(), d.unshift(_e76);
    }
    if ("object" == _typeof(t) && "length" in t) {
      for (var _e77 = 0; _e77 < t.length; _e77 += 1) t[_e77] && a.append(t[_e77]);
      o = n > e ? n + t.length : n;
    } else a.append(t);
    for (var _e78 = 0; _e78 < d.length; _e78 += 1) a.append(d[_e78]);
    i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }
  function V(e) {
    var t = this,
      s = t.params,
      a = t.$wrapperEl,
      i = t.activeIndex;
    var r = i;
    s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(".".concat(s.slideClass)));
    var n,
      l = r;
    if ("object" == _typeof(e) && "length" in e) {
      for (var _s47 = 0; _s47 < e.length; _s47 += 1) n = e[_s47], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
      l = Math.max(l, 0);
    } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);
    s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }
  function q() {
    var e = this,
      t = [];
    for (var _s48 = 0; _s48 < e.slides.length; _s48 += 1) t.push(_s48);
    e.removeSlide(t);
  }
  function F(e) {
    var t = e.effect,
      s = e.swiper,
      a = e.on,
      i = e.setTranslate,
      r = e.setTransition,
      n = e.overwriteParams,
      l = e.perspective;
    a("beforeInit", function () {
      if (s.params.effect !== t) return;
      s.classNames.push("".concat(s.params.containerModifierClass).concat(t)), l && l() && s.classNames.push("".concat(s.params.containerModifierClass, "3d"));
      var e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }), a("setTranslate", function () {
      s.params.effect === t && i();
    }), a("setTransition", function (e, a) {
      s.params.effect === t && r(a);
    });
  }
  function U(e, t) {
    return e.transformEl ? t.find(e.transformEl).css({
      "backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden"
    }) : t;
  }
  function K(_ref17) {
    var e = _ref17.swiper,
      t = _ref17.duration,
      s = _ref17.transformEl,
      a = _ref17.allSlides;
    var i = e.slides,
      r = e.activeIndex,
      n = e.$wrapperEl;
    if (e.params.virtualTranslate && 0 !== t) {
      var _t82,
        _l5 = !1;
      _t82 = a ? s ? i.find(s) : i : s ? i.eq(r).find(s) : i.eq(r), _t82.transitionEnd(function () {
        if (_l5) return;
        if (!e || e.destroyed) return;
        _l5 = !0, e.animating = !1;
        var t = ["webkitTransitionEnd", "transitionend"];
        for (var _e79 = 0; _e79 < t.length; _e79 += 1) n.trigger(t[_e79]);
      });
    }
  }
  function Z(e, t, s) {
    var a = "swiper-slide-shadow" + (s ? "-".concat(s) : ""),
      i = e.transformEl ? t.find(e.transformEl) : t;
    var r = i.children(".".concat(a));
    return r.length || (r = d("<div class=\"swiper-slide-shadow".concat(s ? "-".concat(s) : "", "\"></div>")), i.append(r)), r;
  }
  Object.keys(B).forEach(function (e) {
    Object.keys(B[e]).forEach(function (t) {
      H.prototype[t] = B[e][t];
    });
  }), H.use([function (_ref18) {
    var e = _ref18.swiper,
      t = _ref18.on,
      s = _ref18.emit;
    var a = r();
    var i = null;
    var n = function n() {
        e && !e.destroyed && e.initialized && (s("beforeResize"), s("resize"));
      },
      l = function l() {
        e && !e.destroyed && e.initialized && s("orientationchange");
      };
    t("init", function () {
      e.params.resizeObserver && void 0 !== a.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver(function (t) {
        var s = e.width,
          a = e.height;
        var i = s,
          r = a;
        t.forEach(function (_ref19) {
          var t = _ref19.contentBoxSize,
            s = _ref19.contentRect,
            a = _ref19.target;
          a && a !== e.el || (i = s ? s.width : (t[0] || t).inlineSize, r = s ? s.height : (t[0] || t).blockSize);
        }), i === s && r === a || n();
      }), i.observe(e.el)) : (a.addEventListener("resize", n), a.addEventListener("orientationchange", l));
    }), t("destroy", function () {
      i && i.unobserve && e.el && (i.unobserve(e.el), i = null), a.removeEventListener("resize", n), a.removeEventListener("orientationchange", l);
    });
  }, function (_ref20) {
    var e = _ref20.swiper,
      t = _ref20.extendParams,
      s = _ref20.on,
      a = _ref20.emit;
    var i = [],
      n = r(),
      l = function l(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var s = new (n.MutationObserver || n.WebkitMutationObserver)(function (e) {
          if (1 === e.length) return void a("observerUpdate", e[0]);
          var t = function t() {
            a("observerUpdate", e[0]);
          };
          n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0);
        });
        s.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), i.push(s);
      };
    t({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), s("init", function () {
      if (e.params.observer) {
        if (e.params.observeParents) {
          var _t83 = e.$el.parents();
          for (var _e80 = 0; _e80 < _t83.length; _e80 += 1) l(_t83[_e80]);
        }
        l(e.$el[0], {
          childList: e.params.observeSlideChildren
        }), l(e.$wrapperEl[0], {
          attributes: !1
        });
      }
    }), s("destroy", function () {
      i.forEach(function (e) {
        e.disconnect();
      }), i.splice(0, i.length);
    });
  }]);
  var J = [function (_ref21) {
    var e = _ref21.swiper,
      t = _ref21.extendParams,
      s = _ref21.on;
    var a;
    function i(t, s) {
      var a = e.params.virtual;
      if (a.cache && e.virtual.cache[s]) return e.virtual.cache[s];
      var i = a.renderSlide ? d(a.renderSlide.call(e, t, s)) : d("<div class=\"".concat(e.params.slideClass, "\" data-swiper-slide-index=\"").concat(s, "\">").concat(t, "</div>"));
      return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", s), a.cache && (e.virtual.cache[s] = i), i;
    }
    function r(t) {
      var _e$params = e.params,
        s = _e$params.slidesPerView,
        a = _e$params.slidesPerGroup,
        r = _e$params.centeredSlides,
        _e$params$virtual = e.params.virtual,
        n = _e$params$virtual.addSlidesBefore,
        l = _e$params$virtual.addSlidesAfter,
        _e$virtual = e.virtual,
        o = _e$virtual.from,
        d = _e$virtual.to,
        p = _e$virtual.slides,
        c = _e$virtual.slidesGrid,
        u = _e$virtual.offset;
      e.params.cssMode || e.updateActiveIndex();
      var h = e.activeIndex || 0;
      var m, f, g;
      m = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + a + l, g = Math.floor(s / 2) + a + n) : (f = s + (a - 1) + l, g = a + n);
      var v = Math.max((h || 0) - g, 0),
        w = Math.min((h || 0) + f, p.length - 1),
        b = (e.slidesGrid[v] || 0) - (e.slidesGrid[0] || 0);
      function x() {
        e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load();
      }
      if (Object.assign(e.virtual, {
        from: v,
        to: w,
        offset: b,
        slidesGrid: e.slidesGrid
      }), o === v && d === w && !t) return e.slidesGrid !== c && b !== u && e.slides.css(m, "".concat(b, "px")), void e.updateProgress();
      if (e.params.virtual.renderExternal) return e.params.virtual.renderExternal.call(e, {
        offset: b,
        from: v,
        to: w,
        slides: function () {
          var e = [];
          for (var _t84 = v; _t84 <= w; _t84 += 1) e.push(p[_t84]);
          return e;
        }()
      }), void (e.params.virtual.renderExternalUpdate && x());
      var y = [],
        E = [];
      if (t) e.$wrapperEl.find(".".concat(e.params.slideClass)).remove();else for (var _t85 = o; _t85 <= d; _t85 += 1) (_t85 < v || _t85 > w) && e.$wrapperEl.find(".".concat(e.params.slideClass, "[data-swiper-slide-index=\"").concat(_t85, "\"]")).remove();
      for (var _e81 = 0; _e81 < p.length; _e81 += 1) _e81 >= v && _e81 <= w && (void 0 === d || t ? E.push(_e81) : (_e81 > d && E.push(_e81), _e81 < o && y.push(_e81)));
      E.forEach(function (t) {
        e.$wrapperEl.append(i(p[t], t));
      }), y.sort(function (e, t) {
        return t - e;
      }).forEach(function (t) {
        e.$wrapperEl.prepend(i(p[t], t));
      }), e.$wrapperEl.children(".swiper-slide").css(m, "".concat(b, "px")), x();
    }
    t({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    }), e.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: []
    }, s("beforeInit", function () {
      e.params.virtual.enabled && (e.virtual.slides = e.params.virtual.slides, e.classNames.push("".concat(e.params.containerModifierClass, "virtual")), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, e.params.initialSlide || r());
    }), s("setTranslate", function () {
      e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(a), a = setTimeout(function () {
        r();
      }, 100)) : r());
    }), s("init update resize", function () {
      e.params.virtual.enabled && e.params.cssMode && g(e.wrapperEl, "--swiper-virtual-size", "".concat(e.virtualSize, "px"));
    }), Object.assign(e.virtual, {
      appendSlide: function appendSlide(t) {
        if ("object" == _typeof(t) && "length" in t) for (var _s49 = 0; _s49 < t.length; _s49 += 1) t[_s49] && e.virtual.slides.push(t[_s49]);else e.virtual.slides.push(t);
        r(!0);
      },
      prependSlide: function prependSlide(t) {
        var s = e.activeIndex;
        var a = s + 1,
          i = 1;
        if (Array.isArray(t)) {
          for (var _s50 = 0; _s50 < t.length; _s50 += 1) t[_s50] && e.virtual.slides.unshift(t[_s50]);
          a = s + t.length, i = t.length;
        } else e.virtual.slides.unshift(t);
        if (e.params.virtual.cache) {
          var _t86 = e.virtual.cache,
            _s51 = {};
          Object.keys(_t86).forEach(function (e) {
            var a = _t86[e],
              r = a.attr("data-swiper-slide-index");
            r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), _s51[parseInt(e, 10) + i] = a;
          }), e.virtual.cache = _s51;
        }
        r(!0), e.slideTo(a, 0);
      },
      removeSlide: function removeSlide(t) {
        if (null == t) return;
        var s = e.activeIndex;
        if (Array.isArray(t)) for (var _a22 = t.length - 1; _a22 >= 0; _a22 -= 1) e.virtual.slides.splice(t[_a22], 1), e.params.virtual.cache && delete e.virtual.cache[t[_a22]], t[_a22] < s && (s -= 1), s = Math.max(s, 0);else e.virtual.slides.splice(t, 1), e.params.virtual.cache && delete e.virtual.cache[t], t < s && (s -= 1), s = Math.max(s, 0);
        r(!0), e.slideTo(s, 0);
      },
      removeAllSlides: function removeAllSlides() {
        e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), r(!0), e.slideTo(0, 0);
      },
      update: r
    });
  }, function (_ref22) {
    var e = _ref22.swiper,
      t = _ref22.extendParams,
      s = _ref22.on,
      i = _ref22.emit;
    var n = a(),
      l = r();
    function o(t) {
      if (!e.enabled) return;
      var s = e.rtlTranslate;
      var a = t;
      a.originalEvent && (a = a.originalEvent);
      var r = a.keyCode || a.charCode,
        o = e.params.keyboard.pageUpDown,
        d = o && 33 === r,
        p = o && 34 === r,
        c = 37 === r,
        u = 39 === r,
        h = 38 === r,
        m = 40 === r;
      if (!e.allowSlideNext && (e.isHorizontal() && u || e.isVertical() && m || p)) return !1;
      if (!e.allowSlidePrev && (e.isHorizontal() && c || e.isVertical() && h || d)) return !1;
      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || n.activeElement && n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase()))) {
        if (e.params.keyboard.onlyInViewport && (d || p || c || u || h || m)) {
          var _t87 = !1;
          if (e.$el.parents(".".concat(e.params.slideClass)).length > 0 && 0 === e.$el.parents(".".concat(e.params.slideActiveClass)).length) return;
          var _a23 = e.$el,
            _i53 = _a23[0].clientWidth,
            _r24 = _a23[0].clientHeight,
            _n20 = l.innerWidth,
            _o9 = l.innerHeight,
            _d9 = e.$el.offset();
          s && (_d9.left -= e.$el[0].scrollLeft);
          var _p3 = [[_d9.left, _d9.top], [_d9.left + _i53, _d9.top], [_d9.left, _d9.top + _r24], [_d9.left + _i53, _d9.top + _r24]];
          for (var _e82 = 0; _e82 < _p3.length; _e82 += 1) {
            var _s52 = _p3[_e82];
            if (_s52[0] >= 0 && _s52[0] <= _n20 && _s52[1] >= 0 && _s52[1] <= _o9) {
              if (0 === _s52[0] && 0 === _s52[1]) continue;
              _t87 = !0;
            }
          }
          if (!_t87) return;
        }
        e.isHorizontal() ? ((d || p || c || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((p || u) && !s || (d || c) && s) && e.slideNext(), ((d || c) && !s || (p || u) && s) && e.slidePrev()) : ((d || p || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (p || m) && e.slideNext(), (d || h) && e.slidePrev()), i("keyPress", r);
      }
    }
    function p() {
      e.keyboard.enabled || (d(n).on("keydown", o), e.keyboard.enabled = !0);
    }
    function c() {
      e.keyboard.enabled && (d(n).off("keydown", o), e.keyboard.enabled = !1);
    }
    e.keyboard = {
      enabled: !1
    }, t({
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    }), s("init", function () {
      e.params.keyboard.enabled && p();
    }), s("destroy", function () {
      e.keyboard.enabled && c();
    }), Object.assign(e.keyboard, {
      enable: p,
      disable: c
    });
  }, function (_ref23) {
    var e = _ref23.swiper,
      t = _ref23.extendParams,
      s = _ref23.on,
      a = _ref23.emit;
    var i = r();
    var n;
    t({
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null
      }
    }), e.mousewheel = {
      enabled: !1
    };
    var l,
      o = u();
    var p = [];
    function h() {
      e.enabled && (e.mouseEntered = !0);
    }
    function m() {
      e.enabled && (e.mouseEntered = !1);
    }
    function f(t) {
      return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta) && !(e.params.mousewheel.thresholdTime && u() - o < e.params.mousewheel.thresholdTime) && (t.delta >= 6 && u() - o < 60 || (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(), a("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(), a("scroll", t.raw)), o = new i.Date().getTime(), !1));
    }
    function g(t) {
      var s = t,
        i = !0;
      if (!e.enabled) return;
      var r = e.params.mousewheel;
      e.params.cssMode && s.preventDefault();
      var o = e.$el;
      if ("container" !== e.params.mousewheel.eventsTarget && (o = d(e.params.mousewheel.eventsTarget)), !e.mouseEntered && !o[0].contains(s.target) && !r.releaseOnEdges) return !0;
      s.originalEvent && (s = s.originalEvent);
      var h = 0;
      var m = e.rtlTranslate ? -1 : 1,
        g = function (e) {
          var t = 0,
            s = 0,
            a = 0,
            i = 0;
          return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
            spinX: t,
            spinY: s,
            pixelX: a,
            pixelY: i
          };
        }(s);
      if (r.forceToAxis) {
        if (e.isHorizontal()) {
          if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
          h = -g.pixelX * m;
        } else {
          if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
          h = -g.pixelY;
        }
      } else h = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * m : -g.pixelY;
      if (0 === h) return !0;
      r.invert && (h = -h);
      var v = e.getTranslate() + h * r.sensitivity;
      if (v >= e.minTranslate() && (v = e.minTranslate()), v <= e.maxTranslate() && (v = e.maxTranslate()), i = !!e.params.loop || !(v === e.minTranslate() || v === e.maxTranslate()), i && e.params.nested && s.stopPropagation(), e.params.freeMode && e.params.freeMode.enabled) {
        var _t88 = {
            time: u(),
            delta: Math.abs(h),
            direction: Math.sign(h)
          },
          _i54 = l && _t88.time < l.time + 500 && _t88.delta <= l.delta && _t88.direction === l.direction;
        if (!_i54) {
          l = void 0, e.params.loop && e.loopFix();
          var _o10 = e.getTranslate() + h * r.sensitivity;
          var _d10 = e.isBeginning,
            _u4 = e.isEnd;
          if (_o10 >= e.minTranslate() && (_o10 = e.minTranslate()), _o10 <= e.maxTranslate() && (_o10 = e.maxTranslate()), e.setTransition(0), e.setTranslate(_o10), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!_d10 && e.isBeginning || !_u4 && e.isEnd) && e.updateSlidesClasses(), e.params.freeMode.sticky) {
            clearTimeout(n), n = void 0, p.length >= 15 && p.shift();
            var _s53 = p.length ? p[p.length - 1] : void 0,
              _a24 = p[0];
            if (p.push(_t88), _s53 && (_t88.delta > _s53.delta || _t88.direction !== _s53.direction)) p.splice(0);else if (p.length >= 15 && _t88.time - _a24.time < 500 && _a24.delta - _t88.delta >= 1 && _t88.delta <= 6) {
              var _s54 = h > 0 ? .8 : .2;
              l = _t88, p.splice(0), n = c(function () {
                e.slideToClosest(e.params.speed, !0, void 0, _s54);
              }, 0);
            }
            n || (n = c(function () {
              l = _t88, p.splice(0), e.slideToClosest(e.params.speed, !0, void 0, .5);
            }, 500));
          }
          if (_i54 || a("scroll", s), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), _o10 === e.minTranslate() || _o10 === e.maxTranslate()) return !0;
        }
      } else {
        var _s55 = {
          time: u(),
          delta: Math.abs(h),
          direction: Math.sign(h),
          raw: t
        };
        p.length >= 2 && p.shift();
        var _a25 = p.length ? p[p.length - 1] : void 0;
        if (p.push(_s55), _a25 ? (_s55.direction !== _a25.direction || _s55.delta > _a25.delta || _s55.time > _a25.time + 150) && f(_s55) : f(_s55), function (t) {
          var s = e.params.mousewheel;
          if (t.direction < 0) {
            if (e.isEnd && !e.params.loop && s.releaseOnEdges) return !0;
          } else if (e.isBeginning && !e.params.loop && s.releaseOnEdges) return !0;
          return !1;
        }(_s55)) return !0;
      }
      return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1;
    }
    function v(t) {
      var s = e.$el;
      "container" !== e.params.mousewheel.eventsTarget && (s = d(e.params.mousewheel.eventsTarget)), s[t]("mouseenter", h), s[t]("mouseleave", m), s[t]("wheel", g);
    }
    function w() {
      return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", g), !0) : !e.mousewheel.enabled && (v("on"), e.mousewheel.enabled = !0, !0);
    }
    function b() {
      return e.params.cssMode ? (e.wrapperEl.addEventListener(event, g), !0) : !!e.mousewheel.enabled && (v("off"), e.mousewheel.enabled = !1, !0);
    }
    s("init", function () {
      !e.params.mousewheel.enabled && e.params.cssMode && b(), e.params.mousewheel.enabled && w();
    }), s("destroy", function () {
      e.params.cssMode && w(), e.mousewheel.enabled && b();
    }), Object.assign(e.mousewheel, {
      enable: w,
      disable: b
    });
  }, function (_ref24) {
    var e = _ref24.swiper,
      t = _ref24.extendParams,
      s = _ref24.on,
      a = _ref24.emit;
    function i(t) {
      var s;
      return t && (s = d(t), e.params.uniqueNavElements && "string" == typeof t && s.length > 1 && 1 === e.$el.find(t).length && (s = e.$el.find(t))), s;
    }
    function r(t, s) {
      var a = e.params.navigation;
      t && t.length > 0 && (t[s ? "addClass" : "removeClass"](a.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](a.lockClass));
    }
    function n() {
      if (e.params.loop) return;
      var _e$navigation = e.navigation,
        t = _e$navigation.$nextEl,
        s = _e$navigation.$prevEl;
      r(s, e.isBeginning && !e.params.rewind), r(t, e.isEnd && !e.params.rewind);
    }
    function l(t) {
      t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev();
    }
    function o(t) {
      t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
    }
    function p() {
      var t = e.params.navigation;
      if (e.params.navigation = Y(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !t.nextEl && !t.prevEl) return;
      var s = i(t.nextEl),
        a = i(t.prevEl);
      s && s.length > 0 && s.on("click", o), a && a.length > 0 && a.on("click", l), Object.assign(e.navigation, {
        $nextEl: s,
        nextEl: s && s[0],
        $prevEl: a,
        prevEl: a && a[0]
      }), e.enabled || (s && s.addClass(t.lockClass), a && a.addClass(t.lockClass));
    }
    function c() {
      var _e$navigation2 = e.navigation,
        t = _e$navigation2.$nextEl,
        s = _e$navigation2.$prevEl;
      t && t.length && (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click", l), s.removeClass(e.params.navigation.disabledClass));
    }
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    }), e.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null
    }, s("init", function () {
      p(), n();
    }), s("toEdge fromEdge lock unlock", function () {
      n();
    }), s("destroy", function () {
      c();
    }), s("enable disable", function () {
      var _e$navigation3 = e.navigation,
        t = _e$navigation3.$nextEl,
        s = _e$navigation3.$prevEl;
      t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), s && s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass);
    }), s("click", function (t, s) {
      var _e$navigation4 = e.navigation,
        i = _e$navigation4.$nextEl,
        r = _e$navigation4.$prevEl,
        n = s.target;
      if (e.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(i)) {
        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n))) return;
        var _t89;
        i ? _t89 = i.hasClass(e.params.navigation.hiddenClass) : r && (_t89 = r.hasClass(e.params.navigation.hiddenClass)), a(!0 === _t89 ? "navigationShow" : "navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass);
      }
    }), Object.assign(e.navigation, {
      update: n,
      init: p,
      destroy: c
    });
  }, function (_ref25) {
    var e = _ref25.swiper,
      t = _ref25.extendParams,
      s = _ref25.on,
      a = _ref25.emit;
    var i = "swiper-pagination";
    var r;
    t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: "".concat(i, "-bullet"),
        bulletActiveClass: "".concat(i, "-bullet-active"),
        modifierClass: "".concat(i, "-"),
        currentClass: "".concat(i, "-current"),
        totalClass: "".concat(i, "-total"),
        hiddenClass: "".concat(i, "-hidden"),
        progressbarFillClass: "".concat(i, "-progressbar-fill"),
        progressbarOppositeClass: "".concat(i, "-progressbar-opposite"),
        clickableClass: "".concat(i, "-clickable"),
        lockClass: "".concat(i, "-lock"),
        horizontalClass: "".concat(i, "-horizontal"),
        verticalClass: "".concat(i, "-vertical")
      }
    }), e.pagination = {
      el: null,
      $el: null,
      bullets: []
    };
    var n = 0;
    function l() {
      return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length;
    }
    function o(t, s) {
      var a = e.params.pagination.bulletActiveClass;
      t[s]().addClass("".concat(a, "-").concat(s))[s]().addClass("".concat(a, "-").concat(s, "-").concat(s));
    }
    function p() {
      var t = e.rtl,
        s = e.params.pagination;
      if (l()) return;
      var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
        p = e.pagination.$el;
      var c;
      var u = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
      if (e.params.loop ? (c = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), c > i - 1 - 2 * e.loopedSlides && (c -= i - 2 * e.loopedSlides), c > u - 1 && (c -= u), c < 0 && "bullets" !== e.params.paginationType && (c = u + c)) : c = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
        var _a26 = e.pagination.bullets;
        var _i55, _l6, _u5;
        if (s.dynamicBullets && (r = _a26.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), p.css(e.isHorizontal() ? "width" : "height", r * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (n += c - (e.previousIndex - e.loopedSlides || 0), n > s.dynamicMainBullets - 1 ? n = s.dynamicMainBullets - 1 : n < 0 && (n = 0)), _i55 = Math.max(c - n, 0), _l6 = _i55 + (Math.min(_a26.length, s.dynamicMainBullets) - 1), _u5 = (_l6 + _i55) / 2), _a26.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(function (e) {
          return "".concat(s.bulletActiveClass).concat(e);
        }).join(" ")), p.length > 1) _a26.each(function (e) {
          var t = d(e),
            a = t.index();
          a === c && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= _i55 && a <= _l6 && t.addClass("".concat(s.bulletActiveClass, "-main")), a === _i55 && o(t, "prev"), a === _l6 && o(t, "next"));
        });else {
          var _t90 = _a26.eq(c),
            _r25 = _t90.index();
          if (_t90.addClass(s.bulletActiveClass), s.dynamicBullets) {
            var _t91 = _a26.eq(_i55),
              _n21 = _a26.eq(_l6);
            for (var _e83 = _i55; _e83 <= _l6; _e83 += 1) _a26.eq(_e83).addClass("".concat(s.bulletActiveClass, "-main"));
            if (e.params.loop) {
              if (_r25 >= _a26.length) {
                for (var _e84 = s.dynamicMainBullets; _e84 >= 0; _e84 -= 1) _a26.eq(_a26.length - _e84).addClass("".concat(s.bulletActiveClass, "-main"));
                _a26.eq(_a26.length - s.dynamicMainBullets - 1).addClass("".concat(s.bulletActiveClass, "-prev"));
              } else o(_t91, "prev"), o(_n21, "next");
            } else o(_t91, "prev"), o(_n21, "next");
          }
        }
        if (s.dynamicBullets) {
          var _i56 = Math.min(_a26.length, s.dynamicMainBullets + 4),
            _n22 = (r * _i56 - r) / 2 - _u5 * r,
            _l7 = t ? "right" : "left";
          _a26.css(e.isHorizontal() ? _l7 : "top", "".concat(_n22, "px"));
        }
      }
      if ("fraction" === s.type && (p.find(W(s.currentClass)).text(s.formatFractionCurrent(c + 1)), p.find(W(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
        var _t92;
        _t92 = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
        var _a27 = (c + 1) / u;
        var _i57 = 1,
          _r26 = 1;
        "horizontal" === _t92 ? _i57 = _a27 : _r26 = _a27, p.find(W(s.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(_i57, ") scaleY(").concat(_r26, ")")).transition(e.params.speed);
      }
      "custom" === s.type && s.renderCustom ? (p.html(s.renderCustom(e, c + 1, u)), a("paginationRender", p[0])) : a("paginationUpdate", p[0]), e.params.watchOverflow && e.enabled && p[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
    }
    function c() {
      var t = e.params.pagination;
      if (l()) return;
      var s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
        i = e.pagination.$el;
      var r = "";
      if ("bullets" === t.type) {
        var _a28 = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && _a28 > s && (_a28 = s);
        for (var _s56 = 0; _s56 < _a28; _s56 += 1) t.renderBullet ? r += t.renderBullet.call(e, _s56, t.bulletClass) : r += "<".concat(t.bulletElement, " class=\"").concat(t.bulletClass, "\"></").concat(t.bulletElement, ">");
        i.html(r), e.pagination.bullets = i.find(W(t.bulletClass));
      }
      "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : "<span class=\"".concat(t.currentClass, "\"></span> / <span class=\"").concat(t.totalClass, "\"></span>"), i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : "<span class=\"".concat(t.progressbarFillClass, "\"></span>"), i.html(r)), "custom" !== t.type && a("paginationRender", e.pagination.$el[0]);
    }
    function u() {
      e.params.pagination = Y(e, e.originalParams.pagination, e.params.pagination, {
        el: "swiper-pagination"
      });
      var t = e.params.pagination;
      if (!t.el) return;
      var s = d(t.el);
      0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && (s = e.$el.find(t.el), s.length > 1 && (s = s.filter(function (t) {
        return d(t).parents(".swiper")[0] === e.el;
      }))), "bullets" === t.type && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), s.addClass(t.modifierClass + e.params.direction), "bullets" === t.type && t.dynamicBullets && (s.addClass("".concat(t.modifierClass).concat(t.type, "-dynamic")), n = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), t.clickable && s.on("click", W(t.bulletClass), function (t) {
        t.preventDefault();
        var s = d(this).index() * e.params.slidesPerGroup;
        e.params.loop && (s += e.loopedSlides), e.slideTo(s);
      }), Object.assign(e.pagination, {
        $el: s,
        el: s[0]
      }), e.enabled || s.addClass(t.lockClass));
    }
    function h() {
      var t = e.params.pagination;
      if (l()) return;
      var s = e.pagination.$el;
      s.removeClass(t.hiddenClass), s.removeClass(t.modifierClass + t.type), s.removeClass(t.modifierClass + e.params.direction), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && s.off("click", W(t.bulletClass));
    }
    s("init", function () {
      u(), c(), p();
    }), s("activeIndexChange", function () {
      (e.params.loop || void 0 === e.snapIndex) && p();
    }), s("snapIndexChange", function () {
      e.params.loop || p();
    }), s("slidesLengthChange", function () {
      e.params.loop && (c(), p());
    }), s("snapGridLengthChange", function () {
      e.params.loop || (c(), p());
    }), s("destroy", function () {
      h();
    }), s("enable disable", function () {
      var t = e.pagination.$el;
      t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass);
    }), s("lock unlock", function () {
      p();
    }), s("click", function (t, s) {
      var i = s.target,
        r = e.pagination.$el;
      if (e.params.pagination.el && e.params.pagination.hideOnClick && r.length > 0 && !d(i).hasClass(e.params.pagination.bulletClass)) {
        if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl)) return;
        var _t93 = r.hasClass(e.params.pagination.hiddenClass);
        a(!0 === _t93 ? "paginationShow" : "paginationHide"), r.toggleClass(e.params.pagination.hiddenClass);
      }
    }), Object.assign(e.pagination, {
      render: c,
      update: p,
      init: u,
      destroy: h
    });
  }, function (_ref26) {
    var e = _ref26.swiper,
      t = _ref26.extendParams,
      s = _ref26.on,
      i = _ref26.emit;
    var r = a();
    var n,
      l,
      o,
      p,
      u = !1,
      h = null,
      m = null;
    function f() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      var t = e.scrollbar,
        s = e.rtlTranslate,
        a = e.progress,
        i = t.$dragEl,
        r = t.$el,
        n = e.params.scrollbar;
      var d = l,
        p = (o - l) * a;
      s ? (p = -p, p > 0 ? (d = l - p, p = 0) : -p + l > o && (d = o + p)) : p < 0 ? (d = l + p, p = 0) : p + l > o && (d = o - p), e.isHorizontal() ? (i.transform("translate3d(".concat(p, "px, 0, 0)")), i[0].style.width = "".concat(d, "px")) : (i.transform("translate3d(0px, ".concat(p, "px, 0)")), i[0].style.height = "".concat(d, "px")), n.hide && (clearTimeout(h), r[0].style.opacity = 1, h = setTimeout(function () {
        r[0].style.opacity = 0, r.transition(400);
      }, 1e3));
    }
    function g() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      var t = e.scrollbar,
        s = t.$dragEl,
        a = t.$el;
      s[0].style.width = "", s[0].style.height = "", o = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, p = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), l = "auto" === e.params.scrollbar.dragSize ? o * p : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? s[0].style.width = "".concat(l, "px") : s[0].style.height = "".concat(l, "px"), a[0].style.display = p >= 1 ? "none" : "", e.params.scrollbar.hide && (a[0].style.opacity = 0), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
    }
    function v(t) {
      return e.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY;
    }
    function w(t) {
      var s = e.scrollbar,
        a = e.rtlTranslate,
        i = s.$el;
      var r;
      r = (v(t) - i.offset()[e.isHorizontal() ? "left" : "top"] - (null !== n ? n : l / 2)) / (o - l), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
      var d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
      e.updateProgress(d), e.setTranslate(d), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    function b(t) {
      var s = e.params.scrollbar,
        a = e.scrollbar,
        r = e.$wrapperEl,
        l = a.$el,
        o = a.$dragEl;
      u = !0, n = t.target === o[0] || t.target === o ? v(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), r.transition(100), o.transition(100), w(t), clearTimeout(m), l.transition(0), s.hide && l.css("opacity", 1), e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"), i("scrollbarDragStart", t);
    }
    function x(t) {
      var s = e.scrollbar,
        a = e.$wrapperEl,
        r = s.$el,
        n = s.$dragEl;
      u && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, w(t), a.transition(0), r.transition(0), n.transition(0), i("scrollbarDragMove", t));
    }
    function y(t) {
      var s = e.params.scrollbar,
        a = e.scrollbar,
        r = e.$wrapperEl,
        n = a.$el;
      u && (u = !1, e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""), r.transition("")), s.hide && (clearTimeout(m), m = c(function () {
        n.css("opacity", 0), n.transition(400);
      }, 1e3)), i("scrollbarDragEnd", t), s.snapOnRelease && e.slideToClosest());
    }
    function E(t) {
      var s = e.scrollbar,
        a = e.touchEventsTouch,
        i = e.touchEventsDesktop,
        n = e.params,
        l = e.support,
        o = s.$el[0],
        d = !(!l.passiveListener || !n.passiveListeners) && {
          passive: !1,
          capture: !1
        },
        p = !(!l.passiveListener || !n.passiveListeners) && {
          passive: !0,
          capture: !1
        };
      if (!o) return;
      var c = "on" === t ? "addEventListener" : "removeEventListener";
      l.touch ? (o[c](a.start, b, d), o[c](a.move, x, d), o[c](a.end, y, p)) : (o[c](i.start, b, d), r[c](i.move, x, d), r[c](i.end, y, p));
    }
    function T() {
      var t = e.scrollbar,
        s = e.$el;
      e.params.scrollbar = Y(e, e.originalParams.scrollbar, e.params.scrollbar, {
        el: "swiper-scrollbar"
      });
      var a = e.params.scrollbar;
      if (!a.el) return;
      var i = d(a.el);
      e.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el));
      var r = i.find(".".concat(e.params.scrollbar.dragClass));
      0 === r.length && (r = d("<div class=\"".concat(e.params.scrollbar.dragClass, "\"></div>")), i.append(r)), Object.assign(t, {
        $el: i,
        el: i[0],
        $dragEl: r,
        dragEl: r[0]
      }), a.draggable && e.params.scrollbar.el && E("on"), i && i[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
    }
    function C() {
      e.params.scrollbar.el && E("off");
    }
    t({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag"
      }
    }), e.scrollbar = {
      el: null,
      dragEl: null,
      $el: null,
      $dragEl: null
    }, s("init", function () {
      T(), g(), f();
    }), s("update resize observerUpdate lock unlock", function () {
      g();
    }), s("setTranslate", function () {
      f();
    }), s("setTransition", function (t, s) {
      !function (t) {
        e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t);
      }(s);
    }), s("enable disable", function () {
      var t = e.scrollbar.$el;
      t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
    }), s("destroy", function () {
      C();
    }), Object.assign(e.scrollbar, {
      updateSize: g,
      setTranslate: f,
      init: T,
      destroy: C
    });
  }, function (_ref27) {
    var e = _ref27.swiper,
      t = _ref27.extendParams,
      s = _ref27.on;
    t({
      parallax: {
        enabled: !1
      }
    });
    var a = function a(t, s) {
        var a = e.rtl,
          i = d(t),
          r = a ? -1 : 1,
          n = i.attr("data-swiper-parallax") || "0";
        var l = i.attr("data-swiper-parallax-x"),
          o = i.attr("data-swiper-parallax-y");
        var p = i.attr("data-swiper-parallax-scale"),
          c = i.attr("data-swiper-parallax-opacity");
        if (l || o ? (l = l || "0", o = o || "0") : e.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != c) {
          var _e85 = c - (c - 1) * (1 - Math.abs(s));
          i[0].style.opacity = _e85;
        }
        if (null == p) i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px)"));else {
          var _e86 = p - (p - 1) * (1 - Math.abs(s));
          i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px) scale(").concat(_e86, ")"));
        }
      },
      i = function i() {
        var t = e.$el,
          s = e.slides,
          i = e.progress,
          r = e.snapGrid;
        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
          a(e, i);
        }), s.each(function (t, s) {
          var n = t.progress;
          e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(s / 2) - i * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
            a(e, n);
          });
        });
      };
    s("beforeInit", function () {
      e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
    }), s("init", function () {
      e.params.parallax.enabled && i();
    }), s("setTranslate", function () {
      e.params.parallax.enabled && i();
    }), s("setTransition", function (t, s) {
      e.params.parallax.enabled && function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : e.params.speed;
        var s = e.$el;
        s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
          var s = d(e);
          var a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
          0 === t && (a = 0), s.transition(a);
        });
      }(s);
    });
  }, function (_ref28) {
    var e = _ref28.swiper,
      t = _ref28.extendParams,
      s = _ref28.on,
      a = _ref28.emit;
    var i = r();
    t({
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    }), e.zoom = {
      enabled: !1
    };
    var n,
      l,
      o,
      p = 1,
      c = !1;
    var u = {
        $slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        $imageEl: void 0,
        $imageWrapEl: void 0,
        maxRatio: 3
      },
      m = {
        isTouched: void 0,
        isMoved: void 0,
        currentX: void 0,
        currentY: void 0,
        minX: void 0,
        minY: void 0,
        maxX: void 0,
        maxY: void 0,
        width: void 0,
        height: void 0,
        startX: void 0,
        startY: void 0,
        touchesStart: {},
        touchesCurrent: {}
      },
      f = {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0
      };
    var g = 1;
    function v(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
        s = e.targetTouches[0].pageY,
        a = e.targetTouches[1].pageX,
        i = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(a - t, 2) + Math.pow(i - s, 2));
    }
    function w(t) {
      var s = e.support,
        a = e.params.zoom;
      if (l = !1, o = !1, !s.gestures) {
        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
        l = !0, u.scaleStart = v(t);
      }
      u.$slideEl && u.$slideEl.length || (u.$slideEl = d(t.target).closest(".".concat(e.params.slideClass)), 0 === u.$slideEl.length && (u.$slideEl = e.slides.eq(e.activeIndex)), u.$imageEl = u.$slideEl.find(".".concat(a.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), u.$imageWrapEl = u.$imageEl.parent(".".concat(a.containerClass)), u.maxRatio = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== u.$imageWrapEl.length) ? (u.$imageEl && u.$imageEl.transition(0), c = !0) : u.$imageEl = void 0;
    }
    function b(t) {
      var s = e.support,
        a = e.params.zoom,
        i = e.zoom;
      if (!s.gestures) {
        if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
        o = !0, u.scaleMove = v(t);
      }
      u.$imageEl && 0 !== u.$imageEl.length ? (s.gestures ? i.scale = t.scale * p : i.scale = u.scaleMove / u.scaleStart * p, i.scale > u.maxRatio && (i.scale = u.maxRatio - 1 + Math.pow(i.scale - u.maxRatio + 1, .5)), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)), u.$imageEl.transform("translate3d(0,0,0) scale(".concat(i.scale, ")"))) : "gesturechange" === t.type && w(t);
    }
    function x(t) {
      var s = e.device,
        a = e.support,
        i = e.params.zoom,
        r = e.zoom;
      if (!a.gestures) {
        if (!l || !o) return;
        if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !s.android) return;
        l = !1, o = !1;
      }
      u.$imageEl && 0 !== u.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, u.maxRatio), i.minRatio), u.$imageEl.transition(e.params.speed).transform("translate3d(0,0,0) scale(".concat(r.scale, ")")), p = r.scale, c = !1, 1 === r.scale && (u.$slideEl = void 0));
    }
    function y(t) {
      var s = e.zoom;
      if (!u.$imageEl || 0 === u.$imageEl.length) return;
      if (e.allowClick = !1, !m.isTouched || !u.$slideEl) return;
      m.isMoved || (m.width = u.$imageEl[0].offsetWidth, m.height = u.$imageEl[0].offsetHeight, m.startX = h(u.$imageWrapEl[0], "x") || 0, m.startY = h(u.$imageWrapEl[0], "y") || 0, u.slideWidth = u.$slideEl[0].offsetWidth, u.slideHeight = u.$slideEl[0].offsetHeight, u.$imageWrapEl.transition(0));
      var a = m.width * s.scale,
        i = m.height * s.scale;
      if (!(a < u.slideWidth && i < u.slideHeight)) {
        if (m.minX = Math.min(u.slideWidth / 2 - a / 2, 0), m.maxX = -m.minX, m.minY = Math.min(u.slideHeight / 2 - i / 2, 0), m.maxY = -m.minY, m.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !m.isMoved && !c) {
          if (e.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x)) return void (m.isTouched = !1);
          if (!e.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y)) return void (m.isTouched = !1);
        }
        t.cancelable && t.preventDefault(), t.stopPropagation(), m.isMoved = !0, m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX, m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY, m.currentX < m.minX && (m.currentX = m.minX + 1 - Math.pow(m.minX - m.currentX + 1, .8)), m.currentX > m.maxX && (m.currentX = m.maxX - 1 + Math.pow(m.currentX - m.maxX + 1, .8)), m.currentY < m.minY && (m.currentY = m.minY + 1 - Math.pow(m.minY - m.currentY + 1, .8)), m.currentY > m.maxY && (m.currentY = m.maxY - 1 + Math.pow(m.currentY - m.maxY + 1, .8)), f.prevPositionX || (f.prevPositionX = m.touchesCurrent.x), f.prevPositionY || (f.prevPositionY = m.touchesCurrent.y), f.prevTime || (f.prevTime = Date.now()), f.x = (m.touchesCurrent.x - f.prevPositionX) / (Date.now() - f.prevTime) / 2, f.y = (m.touchesCurrent.y - f.prevPositionY) / (Date.now() - f.prevTime) / 2, Math.abs(m.touchesCurrent.x - f.prevPositionX) < 2 && (f.x = 0), Math.abs(m.touchesCurrent.y - f.prevPositionY) < 2 && (f.y = 0), f.prevPositionX = m.touchesCurrent.x, f.prevPositionY = m.touchesCurrent.y, f.prevTime = Date.now(), u.$imageWrapEl.transform("translate3d(".concat(m.currentX, "px, ").concat(m.currentY, "px,0)"));
      }
    }
    function E() {
      var t = e.zoom;
      u.$slideEl && e.previousIndex !== e.activeIndex && (u.$imageEl && u.$imageEl.transform("translate3d(0,0,0) scale(1)"), u.$imageWrapEl && u.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, p = 1, u.$slideEl = void 0, u.$imageEl = void 0, u.$imageWrapEl = void 0);
    }
    function T(t) {
      var s = e.zoom,
        a = e.params.zoom;
      if (u.$slideEl || (t && t.target && (u.$slideEl = d(t.target).closest(".".concat(e.params.slideClass))), u.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.$slideEl = e.$wrapperEl.children(".".concat(e.params.slideActiveClass)) : u.$slideEl = e.slides.eq(e.activeIndex)), u.$imageEl = u.$slideEl.find(".".concat(a.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), u.$imageWrapEl = u.$imageEl.parent(".".concat(a.containerClass))), !u.$imageEl || 0 === u.$imageEl.length || !u.$imageWrapEl || 0 === u.$imageWrapEl.length) return;
      var r, n, l, o, c, h, f, g, v, w, b, x, y, E, T, C, $, S;
      e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), u.$slideEl.addClass("".concat(a.zoomedSlideClass)), void 0 === m.touchesStart.x && t ? (r = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, n = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (r = m.touchesStart.x, n = m.touchesStart.y), s.scale = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, p = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, t ? ($ = u.$slideEl[0].offsetWidth, S = u.$slideEl[0].offsetHeight, l = u.$slideEl.offset().left + i.scrollX, o = u.$slideEl.offset().top + i.scrollY, c = l + $ / 2 - r, h = o + S / 2 - n, v = u.$imageEl[0].offsetWidth, w = u.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), T = -y, C = -E, f = c * s.scale, g = h * s.scale, f < y && (f = y), f > T && (f = T), g < E && (g = E), g > C && (g = C)) : (f = 0, g = 0), u.$imageWrapEl.transition(300).transform("translate3d(".concat(f, "px, ").concat(g, "px,0)")), u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(s.scale, ")"));
    }
    function C() {
      var t = e.zoom,
        s = e.params.zoom;
      u.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.$slideEl = e.$wrapperEl.children(".".concat(e.params.slideActiveClass)) : u.$slideEl = e.slides.eq(e.activeIndex), u.$imageEl = u.$slideEl.find(".".concat(s.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), u.$imageWrapEl = u.$imageEl.parent(".".concat(s.containerClass))), u.$imageEl && 0 !== u.$imageEl.length && u.$imageWrapEl && 0 !== u.$imageWrapEl.length && (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), t.scale = 1, p = 1, u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), u.$slideEl.removeClass("".concat(s.zoomedSlideClass)), u.$slideEl = void 0);
    }
    function $(t) {
      var s = e.zoom;
      s.scale && 1 !== s.scale ? C() : T(t);
    }
    function S() {
      var t = e.support;
      return {
        passiveListener: !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
        activeListenerWithCapture: !t.passiveListener || {
          passive: !1,
          capture: !0
        }
      };
    }
    function M() {
      return ".".concat(e.params.slideClass);
    }
    function P(t) {
      var _S = S(),
        s = _S.passiveListener,
        a = M();
      e.$wrapperEl[t]("gesturestart", a, w, s), e.$wrapperEl[t]("gesturechange", a, b, s), e.$wrapperEl[t]("gestureend", a, x, s);
    }
    function k() {
      n || (n = !0, P("on"));
    }
    function z() {
      n && (n = !1, P("off"));
    }
    function O() {
      var t = e.zoom;
      if (t.enabled) return;
      t.enabled = !0;
      var s = e.support,
        _S2 = S(),
        a = _S2.passiveListener,
        i = _S2.activeListenerWithCapture,
        r = M();
      s.gestures ? (e.$wrapperEl.on(e.touchEvents.start, k, a), e.$wrapperEl.on(e.touchEvents.end, z, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, w, a), e.$wrapperEl.on(e.touchEvents.move, r, b, i), e.$wrapperEl.on(e.touchEvents.end, r, x, a), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, x, a)), e.$wrapperEl.on(e.touchEvents.move, ".".concat(e.params.zoom.containerClass), y, i);
    }
    function I() {
      var t = e.zoom;
      if (!t.enabled) return;
      var s = e.support;
      t.enabled = !1;
      var _S3 = S(),
        a = _S3.passiveListener,
        i = _S3.activeListenerWithCapture,
        r = M();
      s.gestures ? (e.$wrapperEl.off(e.touchEvents.start, k, a), e.$wrapperEl.off(e.touchEvents.end, z, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, w, a), e.$wrapperEl.off(e.touchEvents.move, r, b, i), e.$wrapperEl.off(e.touchEvents.end, r, x, a), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, x, a)), e.$wrapperEl.off(e.touchEvents.move, ".".concat(e.params.zoom.containerClass), y, i);
    }
    Object.defineProperty(e.zoom, "scale", {
      get: function get() {
        return g;
      },
      set: function set(e) {
        if (g !== e) {
          var _t94 = u.$imageEl ? u.$imageEl[0] : void 0,
            _s57 = u.$slideEl ? u.$slideEl[0] : void 0;
          a("zoomChange", e, _t94, _s57);
        }
        g = e;
      }
    }), s("init", function () {
      e.params.zoom.enabled && O();
    }), s("destroy", function () {
      I();
    }), s("touchStart", function (t, s) {
      e.zoom.enabled && function (t) {
        var s = e.device;
        u.$imageEl && 0 !== u.$imageEl.length && (m.isTouched || (s.android && t.cancelable && t.preventDefault(), m.isTouched = !0, m.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY));
      }(s);
    }), s("touchEnd", function (t, s) {
      e.zoom.enabled && function () {
        var t = e.zoom;
        if (!u.$imageEl || 0 === u.$imageEl.length) return;
        if (!m.isTouched || !m.isMoved) return m.isTouched = !1, void (m.isMoved = !1);
        m.isTouched = !1, m.isMoved = !1;
        var s = 300,
          a = 300;
        var i = f.x * s,
          r = m.currentX + i,
          n = f.y * a,
          l = m.currentY + n;
        0 !== f.x && (s = Math.abs((r - m.currentX) / f.x)), 0 !== f.y && (a = Math.abs((l - m.currentY) / f.y));
        var o = Math.max(s, a);
        m.currentX = r, m.currentY = l;
        var d = m.width * t.scale,
          p = m.height * t.scale;
        m.minX = Math.min(u.slideWidth / 2 - d / 2, 0), m.maxX = -m.minX, m.minY = Math.min(u.slideHeight / 2 - p / 2, 0), m.maxY = -m.minY, m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX), m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY), u.$imageWrapEl.transition(o).transform("translate3d(".concat(m.currentX, "px, ").concat(m.currentY, "px,0)"));
      }();
    }), s("doubleTap", function (t, s) {
      !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && $(s);
    }), s("transitionEnd", function () {
      e.zoom.enabled && e.params.zoom.enabled && E();
    }), s("slideChange", function () {
      e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && E();
    }), Object.assign(e.zoom, {
      enable: O,
      disable: I,
      "in": T,
      out: C,
      toggle: $
    });
  }, function (_ref29) {
    var e = _ref29.swiper,
      t = _ref29.extendParams,
      s = _ref29.on,
      a = _ref29.emit;
    t({
      lazy: {
        checkInView: !1,
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        scrollingElement: "",
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    }), e.lazy = {};
    var i = !1,
      n = !1;
    function l(t) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var i = e.params.lazy;
      if (void 0 === t) return;
      if (0 === e.slides.length) return;
      var r = e.virtual && e.params.virtual.enabled ? e.$wrapperEl.children(".".concat(e.params.slideClass, "[data-swiper-slide-index=\"").concat(t, "\"]")) : e.slides.eq(t),
        n = r.find(".".concat(i.elementClass, ":not(.").concat(i.loadedClass, "):not(.").concat(i.loadingClass, ")"));
      !r.hasClass(i.elementClass) || r.hasClass(i.loadedClass) || r.hasClass(i.loadingClass) || n.push(r[0]), 0 !== n.length && n.each(function (t) {
        var n = d(t);
        n.addClass(i.loadingClass);
        var o = n.attr("data-background"),
          p = n.attr("data-src"),
          c = n.attr("data-srcset"),
          u = n.attr("data-sizes"),
          h = n.parent("picture");
        e.loadImage(n[0], p || o, c, u, !1, function () {
          if (null != e && e && (!e || e.params) && !e.destroyed) {
            if (o ? (n.css("background-image", "url(\"".concat(o, "\")")), n.removeAttr("data-background")) : (c && (n.attr("srcset", c), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each(function (e) {
              var t = d(e);
              t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
            }), p && (n.attr("src", p), n.removeAttr("data-src"))), n.addClass(i.loadedClass).removeClass(i.loadingClass), r.find(".".concat(i.preloaderClass)).remove(), e.params.loop && s) {
              var _t95 = r.attr("data-swiper-slide-index");
              if (r.hasClass(e.params.slideDuplicateClass)) {
                l(e.$wrapperEl.children("[data-swiper-slide-index=\"".concat(_t95, "\"]:not(.").concat(e.params.slideDuplicateClass, ")")).index(), !1);
              } else {
                l(e.$wrapperEl.children(".".concat(e.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(_t95, "\"]")).index(), !1);
              }
            }
            a("lazyImageReady", r[0], n[0]), e.params.autoHeight && e.updateAutoHeight();
          }
        }), a("lazyImageLoad", r[0], n[0]);
      });
    }
    function o() {
      var t = e.$wrapperEl,
        s = e.params,
        a = e.slides,
        i = e.activeIndex,
        r = e.virtual && s.virtual.enabled,
        o = s.lazy;
      var p = s.slidesPerView;
      function c(e) {
        if (r) {
          if (t.children(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")).length) return !0;
        } else if (a[e]) return !0;
        return !1;
      }
      function u(e) {
        return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
      }
      if ("auto" === p && (p = 0), n || (n = !0), e.params.watchSlidesProgress) t.children(".".concat(s.slideVisibleClass)).each(function (e) {
        l(r ? d(e).attr("data-swiper-slide-index") : d(e).index());
      });else if (p > 1) for (var _e87 = i; _e87 < i + p; _e87 += 1) c(_e87) && l(_e87);else l(i);
      if (o.loadPrevNext) if (p > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
        var _e88 = o.loadPrevNextAmount,
          _t96 = p,
          _s58 = Math.min(i + _t96 + Math.max(_e88, _t96), a.length),
          _r27 = Math.max(i - Math.max(_t96, _e88), 0);
        for (var _e89 = i + p; _e89 < _s58; _e89 += 1) c(_e89) && l(_e89);
        for (var _e90 = _r27; _e90 < i; _e90 += 1) c(_e90) && l(_e90);
      } else {
        var _e91 = t.children(".".concat(s.slideNextClass));
        _e91.length > 0 && l(u(_e91));
        var _a29 = t.children(".".concat(s.slidePrevClass));
        _a29.length > 0 && l(u(_a29));
      }
    }
    function p() {
      var t = r();
      if (!e || e.destroyed) return;
      var s = e.params.lazy.scrollingElement ? d(e.params.lazy.scrollingElement) : d(t),
        a = s[0] === t,
        n = a ? t.innerWidth : s[0].offsetWidth,
        l = a ? t.innerHeight : s[0].offsetHeight,
        c = e.$el.offset(),
        u = e.rtlTranslate;
      var h = !1;
      u && (c.left -= e.$el[0].scrollLeft);
      var m = [[c.left, c.top], [c.left + e.width, c.top], [c.left, c.top + e.height], [c.left + e.width, c.top + e.height]];
      for (var _e92 = 0; _e92 < m.length; _e92 += 1) {
        var _t97 = m[_e92];
        if (_t97[0] >= 0 && _t97[0] <= n && _t97[1] >= 0 && _t97[1] <= l) {
          if (0 === _t97[0] && 0 === _t97[1]) continue;
          h = !0;
        }
      }
      var f = !("touchstart" !== e.touchEvents.start || !e.support.passiveListener || !e.params.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      h ? (o(), s.off("scroll", p, f)) : i || (i = !0, s.on("scroll", p, f));
    }
    s("beforeInit", function () {
      e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
    }), s("init", function () {
      e.params.lazy.enabled && (e.params.lazy.checkInView ? p() : o());
    }), s("scroll", function () {
      e.params.freeMode && e.params.freeMode.enabled && !e.params.freeMode.sticky && o();
    }), s("scrollbarDragMove resize _freeModeNoMomentumRelease", function () {
      e.params.lazy.enabled && (e.params.lazy.checkInView ? p() : o());
    }), s("transitionStart", function () {
      e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !n) && (e.params.lazy.checkInView ? p() : o());
    }), s("transitionEnd", function () {
      e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && (e.params.lazy.checkInView ? p() : o());
    }), s("slideChange", function () {
      var _e$params2 = e.params,
        t = _e$params2.lazy,
        s = _e$params2.cssMode,
        a = _e$params2.watchSlidesProgress,
        i = _e$params2.touchReleaseOnEdges,
        r = _e$params2.resistanceRatio;
      t.enabled && (s || a && (i || 0 === r)) && o();
    }), Object.assign(e.lazy, {
      load: o,
      loadInSlide: l
    });
  }, function (_ref30) {
    var e = _ref30.swiper,
      t = _ref30.extendParams,
      s = _ref30.on;
    function a(e, t) {
      var s = function () {
        var e, t, s;
        return function (a, i) {
          for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
          return e;
        };
      }();
      var a, i;
      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0;
      }, this;
    }
    function i() {
      e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
    }
    t({
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    }), e.controller = {
      control: void 0
    }, s("beforeInit", function () {
      e.controller.control = e.params.controller.control;
    }), s("update", function () {
      i();
    }), s("resize", function () {
      i();
    }), s("observerUpdate", function () {
      i();
    }), s("setTranslate", function (t, s, a) {
      e.controller.control && e.controller.setTranslate(s, a);
    }), s("setTransition", function (t, s, a) {
      e.controller.control && e.controller.setTransition(s, a);
    }), Object.assign(e.controller, {
      setTranslate: function setTranslate(t, s) {
        var i = e.controller.control;
        var r, n;
        var l = e.constructor;
        function o(t) {
          var s = e.rtlTranslate ? -e.translate : e.translate;
          "slide" === e.params.controller.by && (!function (t) {
            e.controller.spline || (e.controller.spline = e.params.loop ? new a(e.slidesGrid, t.slidesGrid) : new a(e.snapGrid, t.snapGrid));
          }(t), n = -e.controller.spline.interpolate(-s)), n && "container" !== e.params.controller.by || (r = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()), n = (s - e.minTranslate()) * r + t.minTranslate()), e.params.controller.inverse && (n = t.maxTranslate() - n), t.updateProgress(n), t.setTranslate(n, e), t.updateActiveIndex(), t.updateSlidesClasses();
        }
        if (Array.isArray(i)) for (var _e93 = 0; _e93 < i.length; _e93 += 1) i[_e93] !== s && i[_e93] instanceof l && o(i[_e93]);else i instanceof l && s !== i && o(i);
      },
      setTransition: function setTransition(t, s) {
        var a = e.constructor,
          i = e.controller.control;
        var r;
        function n(s) {
          s.setTransition(t, e), 0 !== t && (s.transitionStart(), s.params.autoHeight && c(function () {
            s.updateAutoHeight();
          }), s.$wrapperEl.transitionEnd(function () {
            i && (s.params.loop && "slide" === e.params.controller.by && s.loopFix(), s.transitionEnd());
          }));
        }
        if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]);else i instanceof a && s !== i && n(i);
      }
    });
  }, function (_ref31) {
    var e = _ref31.swiper,
      t = _ref31.extendParams,
      s = _ref31.on;
    t({
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group"
      }
    });
    var a = null;
    function i(e) {
      var t = a;
      0 !== t.length && (t.html(""), t.html(e));
    }
    function r(e) {
      e.attr("tabIndex", "0");
    }
    function n(e) {
      e.attr("tabIndex", "-1");
    }
    function l(e, t) {
      e.attr("role", t);
    }
    function o(e, t) {
      e.attr("aria-roledescription", t);
    }
    function p(e, t) {
      e.attr("aria-label", t);
    }
    function c(e) {
      e.attr("aria-disabled", !0);
    }
    function u(e) {
      e.attr("aria-disabled", !1);
    }
    function h(t) {
      if (13 !== t.keyCode && 32 !== t.keyCode) return;
      var s = e.params.a11y,
        a = d(t.target);
      e.navigation && e.navigation.$nextEl && a.is(e.navigation.$nextEl) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? i(s.lastSlideMessage) : i(s.nextSlideMessage)), e.navigation && e.navigation.$prevEl && a.is(e.navigation.$prevEl) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? i(s.firstSlideMessage) : i(s.prevSlideMessage)), e.pagination && a.is(W(e.params.pagination.bulletClass)) && a[0].click();
    }
    function m() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      var _e$navigation5 = e.navigation,
        t = _e$navigation5.$nextEl,
        s = _e$navigation5.$prevEl;
      s && s.length > 0 && (e.isBeginning ? (c(s), n(s)) : (u(s), r(s))), t && t.length > 0 && (e.isEnd ? (c(t), n(t)) : (u(t), r(t)));
    }
    function f() {
      return e.pagination && e.pagination.bullets && e.pagination.bullets.length;
    }
    function g() {
      return f() && e.params.pagination.clickable;
    }
    var v = function v(e, t, s) {
      r(e), "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", h)), p(e, s), function (e, t) {
        e.attr("aria-controls", t);
      }(e, t);
    };
    function w() {
      var t = e.params.a11y;
      e.$el.append(a);
      var s = e.$el;
      t.containerRoleDescriptionMessage && o(s, t.containerRoleDescriptionMessage), t.containerMessage && p(s, t.containerMessage);
      var i = e.$wrapperEl,
        r = i.attr("id") || "swiper-wrapper-".concat(function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
          return "x".repeat(e).replace(/x/g, function () {
            return Math.round(16 * Math.random()).toString(16);
          });
        }(16)),
        n = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
      var c;
      c = r, i.attr("id", c), function (e, t) {
        e.attr("aria-live", t);
      }(i, n), t.itemRoleDescriptionMessage && o(d(e.slides), t.itemRoleDescriptionMessage), l(d(e.slides), t.slideRole);
      var u = e.params.loop ? e.slides.filter(function (t) {
        return !t.classList.contains(e.params.slideDuplicateClass);
      }).length : e.slides.length;
      var m, f;
      e.slides.each(function (s, a) {
        var i = d(s),
          r = e.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : a;
        p(i, t.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, u));
      }), e.navigation && e.navigation.$nextEl && (m = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (f = e.navigation.$prevEl), m && m.length && v(m, r, t.nextSlideMessage), f && f.length && v(f, r, t.prevSlideMessage), g() && e.pagination.$el.on("keydown", W(e.params.pagination.bulletClass), h);
    }
    s("beforeInit", function () {
      a = d("<span class=\"".concat(e.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"));
    }), s("afterInit", function () {
      e.params.a11y.enabled && (w(), m());
    }), s("toEdge", function () {
      e.params.a11y.enabled && m();
    }), s("fromEdge", function () {
      e.params.a11y.enabled && m();
    }), s("paginationUpdate", function () {
      e.params.a11y.enabled && function () {
        var t = e.params.a11y;
        f() && e.pagination.bullets.each(function (s) {
          var a = d(s);
          e.params.pagination.clickable && (r(a), e.params.pagination.renderBullet || (l(a, "button"), p(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(".".concat(e.params.pagination.bulletActiveClass)) ? a.attr("aria-current", "true") : a.removeAttr("aria-current");
        });
      }();
    }), s("destroy", function () {
      e.params.a11y.enabled && function () {
        var t, s;
        a && a.length > 0 && a.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl), t && t.off("keydown", h), s && s.off("keydown", h), g() && e.pagination.$el.off("keydown", W(e.params.pagination.bulletClass), h);
      }();
    });
  }, function (_ref32) {
    var e = _ref32.swiper,
      t = _ref32.extendParams,
      s = _ref32.on;
    t({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides"
      }
    });
    var a = !1,
      i = {};
    var n = function n(e) {
        return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
      },
      l = function l(e) {
        var t = r();
        var s;
        s = e ? new URL(e) : t.location;
        var a = s.pathname.slice(1).split("/").filter(function (e) {
            return "" !== e;
          }),
          i = a.length;
        return {
          key: a[i - 2],
          value: a[i - 1]
        };
      },
      o = function o(t, s) {
        var i = r();
        if (!a || !e.params.history.enabled) return;
        var l;
        l = e.params.url ? new URL(e.params.url) : i.location;
        var o = e.slides.eq(s);
        var d = n(o.attr("data-history"));
        if (e.params.history.root.length > 0) {
          var _s59 = e.params.history.root;
          "/" === _s59[_s59.length - 1] && (_s59 = _s59.slice(0, _s59.length - 1)), d = "".concat(_s59, "/").concat(t, "/").concat(d);
        } else l.pathname.includes(t) || (d = "".concat(t, "/").concat(d));
        var p = i.history.state;
        p && p.value === d || (e.params.history.replaceState ? i.history.replaceState({
          value: d
        }, null, d) : i.history.pushState({
          value: d
        }, null, d));
      },
      d = function d(t, s, a) {
        if (s) for (var _i58 = 0, _r28 = e.slides.length; _i58 < _r28; _i58 += 1) {
          var _r29 = e.slides.eq(_i58);
          if (n(_r29.attr("data-history")) === s && !_r29.hasClass(e.params.slideDuplicateClass)) {
            var _s60 = _r29.index();
            e.slideTo(_s60, t, a);
          }
        } else e.slideTo(0, t, a);
      },
      p = function p() {
        i = l(e.params.url), d(e.params.speed, e.paths.value, !1);
      };
    s("init", function () {
      e.params.history.enabled && function () {
        var t = r();
        if (e.params.history) {
          if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
          a = !0, i = l(e.params.url), (i.key || i.value) && (d(0, i.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", p));
        }
      }();
    }), s("destroy", function () {
      e.params.history.enabled && function () {
        var t = r();
        e.params.history.replaceState || t.removeEventListener("popstate", p);
      }();
    }), s("transitionEnd _freeModeNoMomentumRelease", function () {
      a && o(e.params.history.key, e.activeIndex);
    }), s("slideChange", function () {
      a && e.params.cssMode && o(e.params.history.key, e.activeIndex);
    });
  }, function (_ref33) {
    var e = _ref33.swiper,
      t = _ref33.extendParams,
      s = _ref33.emit,
      i = _ref33.on;
    var n = !1;
    var l = a(),
      o = r();
    t({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    });
    var p = function p() {
        s("hashChange");
        var t = l.location.hash.replace("#", "");
        if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          var _s61 = e.$wrapperEl.children(".".concat(e.params.slideClass, "[data-hash=\"").concat(t, "\"]")).index();
          if (void 0 === _s61) return;
          e.slideTo(_s61);
        }
      },
      c = function c() {
        if (n && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && o.history && o.history.replaceState) o.history.replaceState(null, null, "#".concat(e.slides.eq(e.activeIndex).attr("data-hash")) || ""), s("hashSet");else {
          var _t98 = e.slides.eq(e.activeIndex),
            _a30 = _t98.attr("data-hash") || _t98.attr("data-history");
          l.location.hash = _a30 || "", s("hashSet");
        }
      };
    i("init", function () {
      e.params.hashNavigation.enabled && function () {
        if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
        n = !0;
        var t = l.location.hash.replace("#", "");
        if (t) {
          var _s62 = 0;
          for (var _a31 = 0, _i59 = e.slides.length; _a31 < _i59; _a31 += 1) {
            var _i60 = e.slides.eq(_a31);
            if ((_i60.attr("data-hash") || _i60.attr("data-history")) === t && !_i60.hasClass(e.params.slideDuplicateClass)) {
              var _t99 = _i60.index();
              e.slideTo(_t99, _s62, e.params.runCallbacksOnInit, !0);
            }
          }
        }
        e.params.hashNavigation.watchState && d(o).on("hashchange", p);
      }();
    }), i("destroy", function () {
      e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && d(o).off("hashchange", p);
    }), i("transitionEnd _freeModeNoMomentumRelease", function () {
      n && c();
    }), i("slideChange", function () {
      n && e.params.cssMode && c();
    });
  }, function (_ref34) {
    var e = _ref34.swiper,
      t = _ref34.extendParams,
      s = _ref34.on,
      i = _ref34.emit;
    var r;
    function n() {
      var t = e.slides.eq(e.activeIndex);
      var s = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(r), r = c(function () {
        var t;
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), i("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), i("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(0, e.params.speed, !0, !0), i("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), i("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && n();
      }, s);
    }
    function l() {
      return void 0 === r && !e.autoplay.running && (e.autoplay.running = !0, i("autoplayStart"), n(), !0);
    }
    function o() {
      return !!e.autoplay.running && void 0 !== r && (r && (clearTimeout(r), r = void 0), e.autoplay.running = !1, i("autoplayStop"), !0);
    }
    function d(t) {
      e.autoplay.running && (e.autoplay.paused || (r && clearTimeout(r), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
        e.$wrapperEl[0].addEventListener(t, u);
      }) : (e.autoplay.paused = !1, n())));
    }
    function p() {
      var t = a();
      "hidden" === t.visibilityState && e.autoplay.running && d(), "visible" === t.visibilityState && e.autoplay.paused && (n(), e.autoplay.paused = !1);
    }
    function u(t) {
      e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(function (t) {
        e.$wrapperEl[0].removeEventListener(t, u);
      }), e.autoplay.paused = !1, e.autoplay.running ? n() : o());
    }
    function h() {
      e.params.autoplay.disableOnInteraction ? o() : d(), ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
        e.$wrapperEl[0].removeEventListener(t, u);
      });
    }
    function m() {
      e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, n());
    }
    e.autoplay = {
      running: !1,
      paused: !1
    }, t({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    }), s("init", function () {
      if (e.params.autoplay.enabled) {
        l();
        a().addEventListener("visibilitychange", p), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", h), e.$el.on("mouseleave", m));
      }
    }), s("beforeTransitionStart", function (t, s, a) {
      e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(s) : o());
    }), s("sliderFirstMove", function () {
      e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : d());
    }), s("touchEnd", function () {
      e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && n();
    }), s("destroy", function () {
      e.$el.off("mouseenter", h), e.$el.off("mouseleave", m), e.autoplay.running && o();
      a().removeEventListener("visibilitychange", p);
    }), Object.assign(e.autoplay, {
      pause: d,
      run: n,
      start: l,
      stop: o
    });
  }, function (_ref35) {
    var e = _ref35.swiper,
      t = _ref35.extendParams,
      s = _ref35.on;
    t({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs"
      }
    });
    var a = !1,
      i = !1;
    function r() {
      var t = e.thumbs.swiper;
      if (!t) return;
      var s = t.clickedIndex,
        a = t.clickedSlide;
      if (a && d(a).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
      if (null == s) return;
      var i;
      if (i = t.params.loop ? parseInt(d(t.clickedSlide).attr("data-swiper-slide-index"), 10) : s, e.params.loop) {
        var _t100 = e.activeIndex;
        e.slides.eq(_t100).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, _t100 = e.activeIndex);
        var _s63 = e.slides.eq(_t100).prevAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index(),
          _a32 = e.slides.eq(_t100).nextAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index();
        i = void 0 === _s63 ? _a32 : void 0 === _a32 ? _s63 : _a32 - _t100 < _t100 - _s63 ? _a32 : _s63;
      }
      e.slideTo(i);
    }
    function n() {
      var t = e.params.thumbs;
      if (a) return !1;
      a = !0;
      var s = e.constructor;
      if (t.swiper instanceof s) e.thumbs.swiper = t.swiper, Object.assign(e.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(e.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      });else if (m(t.swiper)) {
        var _a33 = Object.assign({}, t.swiper);
        Object.assign(_a33, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), e.thumbs.swiper = new s(_a33), i = !0;
      }
      return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", r), !0;
    }
    function l(t) {
      var s = e.thumbs.swiper;
      if (!s) return;
      var a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView,
        i = e.params.thumbs.autoScrollOffset,
        r = i && !s.params.loop;
      if (e.realIndex !== s.realIndex || r) {
        var _n23,
          _l8,
          _o11 = s.activeIndex;
        if (s.params.loop) {
          s.slides.eq(_o11).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, _o11 = s.activeIndex);
          var _t101 = s.slides.eq(_o11).prevAll("[data-swiper-slide-index=\"".concat(e.realIndex, "\"]")).eq(0).index(),
            _a34 = s.slides.eq(_o11).nextAll("[data-swiper-slide-index=\"".concat(e.realIndex, "\"]")).eq(0).index();
          _n23 = void 0 === _t101 ? _a34 : void 0 === _a34 ? _t101 : _a34 - _o11 == _o11 - _t101 ? s.params.slidesPerGroup > 1 ? _a34 : _o11 : _a34 - _o11 < _o11 - _t101 ? _a34 : _t101, _l8 = e.activeIndex > e.previousIndex ? "next" : "prev";
        } else _n23 = e.realIndex, _l8 = _n23 > e.previousIndex ? "next" : "prev";
        r && (_n23 += "next" === _l8 ? i : -1 * i), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(_n23) < 0 && (s.params.centeredSlides ? _n23 = _n23 > _o11 ? _n23 - Math.floor(a / 2) + 1 : _n23 + Math.floor(a / 2) - 1 : _n23 > _o11 && s.params.slidesPerGroup, s.slideTo(_n23, t ? 0 : void 0));
      }
      var n = 1;
      var l = e.params.thumbs.slideThumbActiveClass;
      if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (n = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), s.slides.removeClass(l), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (var _t102 = 0; _t102 < n; _t102 += 1) s.$wrapperEl.children("[data-swiper-slide-index=\"".concat(e.realIndex + _t102, "\"]")).addClass(l);else for (var _t103 = 0; _t103 < n; _t103 += 1) s.slides.eq(e.realIndex + _t103).addClass(l);
    }
    e.thumbs = {
      swiper: null
    }, s("beforeInit", function () {
      var t = e.params.thumbs;
      t && t.swiper && (n(), l(!0));
    }), s("slideChange update resize observerUpdate", function () {
      e.thumbs.swiper && l();
    }), s("setTransition", function (t, s) {
      var a = e.thumbs.swiper;
      a && a.setTransition(s);
    }), s("beforeDestroy", function () {
      var t = e.thumbs.swiper;
      t && i && t && t.destroy();
    }), Object.assign(e.thumbs, {
      init: n,
      update: l
    });
  }, function (_ref36) {
    var e = _ref36.swiper,
      t = _ref36.extendParams,
      s = _ref36.emit,
      a = _ref36.once;
    t({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: .02
      }
    }), Object.assign(e, {
      freeMode: {
        onTouchMove: function onTouchMove() {
          var t = e.touchEventsData,
            s = e.touches;
          0 === t.velocities.length && t.velocities.push({
            position: s[e.isHorizontal() ? "startX" : "startY"],
            time: t.touchStartTime
          }), t.velocities.push({
            position: s[e.isHorizontal() ? "currentX" : "currentY"],
            time: u()
          });
        },
        onTouchEnd: function onTouchEnd(_ref37) {
          var t = _ref37.currentPos;
          var i = e.params,
            r = e.$wrapperEl,
            n = e.rtlTranslate,
            l = e.snapGrid,
            o = e.touchEventsData,
            d = u() - o.touchStartTime;
          if (t < -e.minTranslate()) e.slideTo(e.activeIndex);else if (t > -e.maxTranslate()) e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1);else {
            if (i.freeMode.momentum) {
              if (o.velocities.length > 1) {
                var _t104 = o.velocities.pop(),
                  _s64 = o.velocities.pop(),
                  _a35 = _t104.position - _s64.position,
                  _r30 = _t104.time - _s64.time;
                e.velocity = _a35 / _r30, e.velocity /= 2, Math.abs(e.velocity) < i.freeMode.minimumVelocity && (e.velocity = 0), (_r30 > 150 || u() - _t104.time > 300) && (e.velocity = 0);
              } else e.velocity = 0;
              e.velocity *= i.freeMode.momentumVelocityRatio, o.velocities.length = 0;
              var _t105 = 1e3 * i.freeMode.momentumRatio;
              var _d11 = e.velocity * _t105;
              var _p4 = e.translate + _d11;
              n && (_p4 = -_p4);
              var _c2,
                _h2 = !1;
              var _m = 20 * Math.abs(e.velocity) * i.freeMode.momentumBounceRatio;
              var _f2;
              if (_p4 < e.maxTranslate()) i.freeMode.momentumBounce ? (_p4 + e.maxTranslate() < -_m && (_p4 = e.maxTranslate() - _m), _c2 = e.maxTranslate(), _h2 = !0, o.allowMomentumBounce = !0) : _p4 = e.maxTranslate(), i.loop && i.centeredSlides && (_f2 = !0);else if (_p4 > e.minTranslate()) i.freeMode.momentumBounce ? (_p4 - e.minTranslate() > _m && (_p4 = e.minTranslate() + _m), _c2 = e.minTranslate(), _h2 = !0, o.allowMomentumBounce = !0) : _p4 = e.minTranslate(), i.loop && i.centeredSlides && (_f2 = !0);else if (i.freeMode.sticky) {
                var _t106;
                for (var _e94 = 0; _e94 < l.length; _e94 += 1) if (l[_e94] > -_p4) {
                  _t106 = _e94;
                  break;
                }
                _p4 = Math.abs(l[_t106] - _p4) < Math.abs(l[_t106 - 1] - _p4) || "next" === e.swipeDirection ? l[_t106] : l[_t106 - 1], _p4 = -_p4;
              }
              if (_f2 && a("transitionEnd", function () {
                e.loopFix();
              }), 0 !== e.velocity) {
                if (_t105 = n ? Math.abs((-_p4 - e.translate) / e.velocity) : Math.abs((_p4 - e.translate) / e.velocity), i.freeMode.sticky) {
                  var _s65 = Math.abs((n ? -_p4 : _p4) - e.translate),
                    _a36 = e.slidesSizesGrid[e.activeIndex];
                  _t105 = _s65 < _a36 ? i.speed : _s65 < 2 * _a36 ? 1.5 * i.speed : 2.5 * i.speed;
                }
              } else if (i.freeMode.sticky) return void e.slideToClosest();
              i.freeMode.momentumBounce && _h2 ? (e.updateProgress(_c2), e.setTransition(_t105), e.setTranslate(_p4), e.transitionStart(!0, e.swipeDirection), e.animating = !0, r.transitionEnd(function () {
                e && !e.destroyed && o.allowMomentumBounce && (s("momentumBounce"), e.setTransition(i.speed), setTimeout(function () {
                  e.setTranslate(_c2), r.transitionEnd(function () {
                    e && !e.destroyed && e.transitionEnd();
                  });
                }, 0));
              })) : e.velocity ? (s("_freeModeNoMomentumRelease"), e.updateProgress(_p4), e.setTransition(_t105), e.setTranslate(_p4), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, r.transitionEnd(function () {
                e && !e.destroyed && e.transitionEnd();
              }))) : e.updateProgress(_p4), e.updateActiveIndex(), e.updateSlidesClasses();
            } else {
              if (i.freeMode.sticky) return void e.slideToClosest();
              i.freeMode && s("_freeModeNoMomentumRelease");
            }
            (!i.freeMode.momentum || d >= i.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
          }
        }
      }
    });
  }, function (_ref38) {
    var e = _ref38.swiper,
      t = _ref38.extendParams;
    var s, a, i;
    t({
      grid: {
        rows: 1,
        fill: "column"
      }
    }), e.grid = {
      initSlides: function initSlides(t) {
        var r = e.params.slidesPerView,
          _e$params$grid = e.params.grid,
          n = _e$params$grid.rows,
          l = _e$params$grid.fill;
        a = s / n, i = Math.floor(t / n), s = Math.floor(t / n) === t / n ? t : Math.ceil(t / n) * n, "auto" !== r && "row" === l && (s = Math.max(s, r * n));
      },
      updateSlide: function updateSlide(t, r, n, l) {
        var _e$params3 = e.params,
          o = _e$params3.slidesPerGroup,
          d = _e$params3.spaceBetween,
          _e$params$grid2 = e.params.grid,
          p = _e$params$grid2.rows,
          c = _e$params$grid2.fill;
        var u, h, m;
        if ("row" === c && o > 1) {
          var _e95 = Math.floor(t / (o * p)),
            _a37 = t - p * o * _e95,
            _i61 = 0 === _e95 ? o : Math.min(Math.ceil((n - _e95 * p * o) / p), o);
          m = Math.floor(_a37 / _i61), h = _a37 - m * _i61 + _e95 * o, u = h + m * s / p, r.css({
            "-webkit-order": u,
            order: u
          });
        } else "column" === c ? (h = Math.floor(t / p), m = t - h * p, (h > i || h === i && m === p - 1) && (m += 1, m >= p && (m = 0, h += 1))) : (m = Math.floor(t / a), h = t - m * a);
        r.css(l("margin-top"), 0 !== m ? d && "".concat(d, "px") : "");
      },
      updateWrapperSize: function updateWrapperSize(t, a, i) {
        var _e$params4 = e.params,
          r = _e$params4.spaceBetween,
          n = _e$params4.centeredSlides,
          l = _e$params4.roundLengths,
          o = e.params.grid.rows;
        if (e.virtualSize = (t + r) * s, e.virtualSize = Math.ceil(e.virtualSize / o) - r, e.$wrapperEl.css(_defineProperty({}, i("width"), "".concat(e.virtualSize + r, "px"))), n) {
          a.splice(0, a.length);
          var _t107 = [];
          for (var _s66 = 0; _s66 < a.length; _s66 += 1) {
            var _i62 = a[_s66];
            l && (_i62 = Math.floor(_i62)), a[_s66] < e.virtualSize + a[0] && _t107.push(_i62);
          }
          a.push.apply(a, _t107);
        }
      }
    };
  }, function (_ref39) {
    var e = _ref39.swiper;
    Object.assign(e, {
      appendSlide: R.bind(e),
      prependSlide: j.bind(e),
      addSlide: _.bind(e),
      removeSlide: V.bind(e),
      removeAllSlides: q.bind(e)
    });
  }, function (_ref40) {
    var e = _ref40.swiper,
      t = _ref40.extendParams,
      s = _ref40.on;
    t({
      fadeEffect: {
        crossFade: !1,
        transformEl: null
      }
    }), F({
      effect: "fade",
      swiper: e,
      on: s,
      setTranslate: function setTranslate() {
        var t = e.slides,
          s = e.params.fadeEffect;
        for (var _a38 = 0; _a38 < t.length; _a38 += 1) {
          var _t108 = e.slides.eq(_a38);
          var _i63 = -_t108[0].swiperSlideOffset;
          e.params.virtualTranslate || (_i63 -= e.translate);
          var _r31 = 0;
          e.isHorizontal() || (_r31 = _i63, _i63 = 0);
          var _n24 = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(_t108[0].progress), 0) : 1 + Math.min(Math.max(_t108[0].progress, -1), 0);
          U(s, _t108).css({
            opacity: _n24
          }).transform("translate3d(".concat(_i63, "px, ").concat(_r31, "px, 0px)"));
        }
      },
      setTransition: function setTransition(t) {
        var s = e.params.fadeEffect.transformEl;
        (s ? e.slides.find(s) : e.slides).transition(t), K({
          swiper: e,
          duration: t,
          transformEl: s,
          allSlides: !0
        });
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode
        };
      }
    });
  }, function (_ref41) {
    var e = _ref41.swiper,
      t = _ref41.extendParams,
      s = _ref41.on;
    t({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    }), F({
      effect: "cube",
      swiper: e,
      on: s,
      setTranslate: function setTranslate() {
        var t = e.$el,
          s = e.$wrapperEl,
          a = e.slides,
          i = e.width,
          r = e.height,
          n = e.rtlTranslate,
          l = e.size,
          o = e.browser,
          p = e.params.cubeEffect,
          c = e.isHorizontal(),
          u = e.virtual && e.params.virtual.enabled;
        var h,
          m = 0;
        p.shadow && (c ? (h = s.find(".swiper-cube-shadow"), 0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'), s.append(h)), h.css({
          height: "".concat(i, "px")
        })) : (h = t.find(".swiper-cube-shadow"), 0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'), t.append(h))));
        for (var _e96 = 0; _e96 < a.length; _e96 += 1) {
          var _t109 = a.eq(_e96);
          var _s67 = _e96;
          u && (_s67 = parseInt(_t109.attr("data-swiper-slide-index"), 10));
          var _i64 = 90 * _s67,
            _r32 = Math.floor(_i64 / 360);
          n && (_i64 = -_i64, _r32 = Math.floor(-_i64 / 360));
          var _o12 = Math.max(Math.min(_t109[0].progress, 1), -1);
          var _h3 = 0,
            _f3 = 0,
            _g = 0;
          _s67 % 4 == 0 ? (_h3 = 4 * -_r32 * l, _g = 0) : (_s67 - 1) % 4 == 0 ? (_h3 = 0, _g = 4 * -_r32 * l) : (_s67 - 2) % 4 == 0 ? (_h3 = l + 4 * _r32 * l, _g = l) : (_s67 - 3) % 4 == 0 && (_h3 = -l, _g = 3 * l + 4 * l * _r32), n && (_h3 = -_h3), c || (_f3 = _h3, _h3 = 0);
          var _v = "rotateX(".concat(c ? 0 : -_i64, "deg) rotateY(").concat(c ? _i64 : 0, "deg) translate3d(").concat(_h3, "px, ").concat(_f3, "px, ").concat(_g, "px)");
          if (_o12 <= 1 && _o12 > -1 && (m = 90 * _s67 + 90 * _o12, n && (m = 90 * -_s67 - 90 * _o12)), _t109.transform(_v), p.slideShadows) {
            var _e97 = c ? _t109.find(".swiper-slide-shadow-left") : _t109.find(".swiper-slide-shadow-top"),
              _s68 = c ? _t109.find(".swiper-slide-shadow-right") : _t109.find(".swiper-slide-shadow-bottom");
            0 === _e97.length && (_e97 = d("<div class=\"swiper-slide-shadow-".concat(c ? "left" : "top", "\"></div>")), _t109.append(_e97)), 0 === _s68.length && (_s68 = d("<div class=\"swiper-slide-shadow-".concat(c ? "right" : "bottom", "\"></div>")), _t109.append(_s68)), _e97.length && (_e97[0].style.opacity = Math.max(-_o12, 0)), _s68.length && (_s68[0].style.opacity = Math.max(_o12, 0));
          }
        }
        if (s.css({
          "-webkit-transform-origin": "50% 50% -".concat(l / 2, "px"),
          "transform-origin": "50% 50% -".concat(l / 2, "px")
        }), p.shadow) if (c) h.transform("translate3d(0px, ".concat(i / 2 + p.shadowOffset, "px, ").concat(-i / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(p.shadowScale, ")"));else {
          var _e98 = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
            _t110 = 1.5 - (Math.sin(2 * _e98 * Math.PI / 360) / 2 + Math.cos(2 * _e98 * Math.PI / 360) / 2),
            _s69 = p.shadowScale,
            _a39 = p.shadowScale / _t110,
            _i65 = p.shadowOffset;
          h.transform("scale3d(".concat(_s69, ", 1, ").concat(_a39, ") translate3d(0px, ").concat(r / 2 + _i65, "px, ").concat(-r / 2 / _a39, "px) rotateX(-90deg)"));
        }
        var f = o.isSafari || o.isWebView ? -l / 2 : 0;
        s.transform("translate3d(0px,0,".concat(f, "px) rotateX(").concat(e.isHorizontal() ? 0 : m, "deg) rotateY(").concat(e.isHorizontal() ? -m : 0, "deg)"));
      },
      setTransition: function setTransition(t) {
        var s = e.$el,
          a = e.slides;
        a.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.cubeEffect.shadow && !e.isHorizontal() && s.find(".swiper-cube-shadow").transition(t);
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0
        };
      }
    });
  }, function (_ref42) {
    var e = _ref42.swiper,
      t = _ref42.extendParams,
      s = _ref42.on;
    t({
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0,
        transformEl: null
      }
    }), F({
      effect: "flip",
      swiper: e,
      on: s,
      setTranslate: function setTranslate() {
        var t = e.slides,
          s = e.rtlTranslate,
          a = e.params.flipEffect;
        for (var _i66 = 0; _i66 < t.length; _i66 += 1) {
          var _r33 = t.eq(_i66);
          var _n25 = _r33[0].progress;
          e.params.flipEffect.limitRotation && (_n25 = Math.max(Math.min(_r33[0].progress, 1), -1));
          var _l9 = _r33[0].swiperSlideOffset;
          var _o13 = -180 * _n25,
            _d12 = 0,
            _p5 = e.params.cssMode ? -_l9 - e.translate : -_l9,
            _c3 = 0;
          if (e.isHorizontal() ? s && (_o13 = -_o13) : (_c3 = _p5, _p5 = 0, _d12 = -_o13, _o13 = 0), _r33[0].style.zIndex = -Math.abs(Math.round(_n25)) + t.length, a.slideShadows) {
            var _t111 = e.isHorizontal() ? _r33.find(".swiper-slide-shadow-left") : _r33.find(".swiper-slide-shadow-top"),
              _s70 = e.isHorizontal() ? _r33.find(".swiper-slide-shadow-right") : _r33.find(".swiper-slide-shadow-bottom");
            0 === _t111.length && (_t111 = Z(a, _r33, e.isHorizontal() ? "left" : "top")), 0 === _s70.length && (_s70 = Z(a, _r33, e.isHorizontal() ? "right" : "bottom")), _t111.length && (_t111[0].style.opacity = Math.max(-_n25, 0)), _s70.length && (_s70[0].style.opacity = Math.max(_n25, 0));
          }
          var _u6 = "translate3d(".concat(_p5, "px, ").concat(_c3, "px, 0px) rotateX(").concat(_d12, "deg) rotateY(").concat(_o13, "deg)");
          U(a, _r33).transform(_u6);
        }
      },
      setTransition: function setTransition(t) {
        var s = e.params.flipEffect.transformEl;
        (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), K({
          swiper: e,
          duration: t,
          transformEl: s
        });
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode
        };
      }
    });
  }, function (_ref43) {
    var e = _ref43.swiper,
      t = _ref43.extendParams,
      s = _ref43.on;
    t({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0,
        transformEl: null
      }
    }), F({
      effect: "coverflow",
      swiper: e,
      on: s,
      setTranslate: function setTranslate() {
        var t = e.width,
          s = e.height,
          a = e.slides,
          i = e.slidesSizesGrid,
          r = e.params.coverflowEffect,
          n = e.isHorizontal(),
          l = e.translate,
          o = n ? t / 2 - l : s / 2 - l,
          d = n ? r.rotate : -r.rotate,
          p = r.depth;
        for (var _e99 = 0, _t112 = a.length; _e99 < _t112; _e99 += 1) {
          var _t113 = a.eq(_e99),
            _s71 = i[_e99],
            _l10 = (o - _t113[0].swiperSlideOffset - _s71 / 2) / _s71 * r.modifier;
          var _c4 = n ? d * _l10 : 0,
            _u7 = n ? 0 : d * _l10,
            _h4 = -p * Math.abs(_l10),
            _m2 = r.stretch;
          "string" == typeof _m2 && -1 !== _m2.indexOf("%") && (_m2 = parseFloat(r.stretch) / 100 * _s71);
          var _f4 = n ? 0 : _m2 * _l10,
            _g2 = n ? _m2 * _l10 : 0,
            _v2 = 1 - (1 - r.scale) * Math.abs(_l10);
          Math.abs(_g2) < .001 && (_g2 = 0), Math.abs(_f4) < .001 && (_f4 = 0), Math.abs(_h4) < .001 && (_h4 = 0), Math.abs(_c4) < .001 && (_c4 = 0), Math.abs(_u7) < .001 && (_u7 = 0), Math.abs(_v2) < .001 && (_v2 = 0);
          var _w = "translate3d(".concat(_g2, "px,").concat(_f4, "px,").concat(_h4, "px)  rotateX(").concat(_u7, "deg) rotateY(").concat(_c4, "deg) scale(").concat(_v2, ")");
          if (U(r, _t113).transform(_w), _t113[0].style.zIndex = 1 - Math.abs(Math.round(_l10)), r.slideShadows) {
            var _e100 = n ? _t113.find(".swiper-slide-shadow-left") : _t113.find(".swiper-slide-shadow-top"),
              _s72 = n ? _t113.find(".swiper-slide-shadow-right") : _t113.find(".swiper-slide-shadow-bottom");
            0 === _e100.length && (_e100 = Z(r, _t113, n ? "left" : "top")), 0 === _s72.length && (_s72 = Z(r, _t113, n ? "right" : "bottom")), _e100.length && (_e100[0].style.opacity = _l10 > 0 ? _l10 : 0), _s72.length && (_s72[0].style.opacity = -_l10 > 0 ? -_l10 : 0);
          }
        }
      },
      setTransition: function setTransition(t) {
        var s = e.params.coverflowEffect.transformEl;
        (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t);
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0
        };
      }
    });
  }, function (_ref44) {
    var e = _ref44.swiper,
      t = _ref44.extendParams,
      s = _ref44.on;
    t({
      creativeEffect: {
        transformEl: null,
        limitProgress: 1,
        shadowPerProgress: !1,
        progressMultiplier: 1,
        perspective: !0,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    });
    var a = function a(e) {
      return "string" == typeof e ? e : "".concat(e, "px");
    };
    F({
      effect: "creative",
      swiper: e,
      on: s,
      setTranslate: function setTranslate() {
        var t = e.slides,
          s = e.$wrapperEl,
          i = e.slidesSizesGrid,
          r = e.params.creativeEffect,
          n = r.progressMultiplier,
          l = e.params.centeredSlides;
        if (l) {
          var _t114 = i[0] / 2 - e.params.slidesOffsetBefore || 0;
          s.transform("translateX(calc(50% - ".concat(_t114, "px))"));
        }
        var _loop3 = function _loop3() {
          var i = t.eq(_s73),
            o = i[0].progress,
            d = Math.min(Math.max(i[0].progress, -r.limitProgress), r.limitProgress);
          var p = d;
          l || (p = Math.min(Math.max(i[0].originalProgress, -r.limitProgress), r.limitProgress));
          var c = i[0].swiperSlideOffset,
            u = [e.params.cssMode ? -c - e.translate : -c, 0, 0],
            h = [0, 0, 0];
          var m = !1;
          e.isHorizontal() || (u[1] = u[0], u[0] = 0);
          var f = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };
          d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach(function (e, t) {
            u[t] = "calc(".concat(e, "px + (").concat(a(f.translate[t]), " * ").concat(Math.abs(d * n), "))");
          }), h.forEach(function (e, t) {
            h[t] = f.rotate[t] * Math.abs(d * n);
          }), i[0].style.zIndex = -Math.abs(Math.round(o)) + t.length;
          var g = u.join(", "),
            v = "rotateX(".concat(h[0], "deg) rotateY(").concat(h[1], "deg) rotateZ(").concat(h[2], "deg)"),
            w = p < 0 ? "scale(".concat(1 + (1 - f.scale) * p * n, ")") : "scale(".concat(1 - (1 - f.scale) * p * n, ")"),
            b = p < 0 ? 1 + (1 - f.opacity) * p * n : 1 - (1 - f.opacity) * p * n,
            x = "translate3d(".concat(g, ") ").concat(v, " ").concat(w);
          if (m && f.shadow || !m) {
            var _e101 = i.children(".swiper-slide-shadow");
            if (0 === _e101.length && f.shadow && (_e101 = Z(r, i)), _e101.length) {
              var _t115 = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
              _e101[0].style.opacity = Math.min(Math.max(Math.abs(_t115), 0), 1);
            }
          }
          var y = U(r, i);
          y.transform(x).css({
            opacity: b
          }), f.origin && y.css("transform-origin", f.origin);
        };
        for (var _s73 = 0; _s73 < t.length; _s73 += 1) {
          _loop3();
        }
      },
      setTransition: function setTransition(t) {
        var s = e.params.creativeEffect.transformEl;
        (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), K({
          swiper: e,
          duration: t,
          transformEl: s,
          allSlides: !0
        });
      },
      perspective: function perspective() {
        return e.params.creativeEffect.perspective;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0,
          virtualTranslate: !e.params.cssMode
        };
      }
    });
  }, function (_ref45) {
    var e = _ref45.swiper,
      t = _ref45.extendParams,
      s = _ref45.on;
    t({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null
      }
    }), F({
      effect: "cards",
      swiper: e,
      on: s,
      setTranslate: function setTranslate() {
        var t = e.slides,
          s = e.activeIndex,
          a = e.params.cardsEffect,
          _e$touchEventsData = e.touchEventsData,
          i = _e$touchEventsData.startTranslate,
          r = _e$touchEventsData.isTouched,
          n = e.translate;
        for (var _l11 = 0; _l11 < t.length; _l11 += 1) {
          var _o14 = t.eq(_l11),
            _d13 = _o14[0].progress,
            _p6 = Math.min(Math.max(_d13, -4), 4);
          var _c5 = _o14[0].swiperSlideOffset;
          e.params.centeredSlides && !e.params.cssMode && e.$wrapperEl.transform("translateX(".concat(e.minTranslate(), "px)")), e.params.centeredSlides && e.params.cssMode && (_c5 -= t[0].swiperSlideOffset);
          var _u8 = e.params.cssMode ? -_c5 - e.translate : -_c5,
            _h5 = 0;
          var _m3 = -100 * Math.abs(_p6);
          var _f5 = 1,
            _g3 = -2 * _p6,
            _v3 = 8 - .75 * Math.abs(_p6);
          var _w2 = (_l11 === s || _l11 === s - 1) && _p6 > 0 && _p6 < 1 && (r || e.params.cssMode) && n < i,
            _b = (_l11 === s || _l11 === s + 1) && _p6 < 0 && _p6 > -1 && (r || e.params.cssMode) && n > i;
          if (_w2 || _b) {
            var _e102 = Math.pow(1 - Math.abs((Math.abs(_p6) - .5) / .5), .5);
            _g3 += -28 * _p6 * _e102, _f5 += -.5 * _e102, _v3 += 96 * _e102, _h5 = -25 * _e102 * Math.abs(_p6) + "%";
          }
          if (_u8 = _p6 < 0 ? "calc(".concat(_u8, "px + (").concat(_v3 * Math.abs(_p6), "%))") : _p6 > 0 ? "calc(".concat(_u8, "px + (-").concat(_v3 * Math.abs(_p6), "%))") : "".concat(_u8, "px"), !e.isHorizontal()) {
            var _e103 = _h5;
            _h5 = _u8, _u8 = _e103;
          }
          var _x = "\n        translate3d(".concat(_u8, ", ").concat(_h5, ", ").concat(_m3, "px)\n        rotateZ(").concat(_g3, "deg)\n        scale(").concat(_p6 < 0 ? "" + (1 + (1 - _f5) * _p6) : "" + (1 - (1 - _f5) * _p6), ")\n      ");
          if (a.slideShadows) {
            var _e104 = _o14.find(".swiper-slide-shadow");
            0 === _e104.length && (_e104 = Z(a, _o14)), _e104.length && (_e104[0].style.opacity = Math.min(Math.max((Math.abs(_p6) - .5) / .5, 0), 1));
          }
          _o14[0].style.zIndex = -Math.abs(Math.round(_d13)) + t.length;
          U(a, _o14).transform(_x);
        }
      },
      setTransition: function setTransition(t) {
        var s = e.params.cardsEffect.transformEl;
        (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), K({
          swiper: e,
          duration: t,
          transformEl: s
        });
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0,
          virtualTranslate: !e.params.cssMode
        };
      }
    });
  }];
  return H.use(J), H;
});
function getCookiesAsObject() {
  return document.cookie.split('; ').reduce(function (prev, next) {
    var splattedCookieString = next.split('=');
    var key = splattedCookieString[0];
    var value = splattedCookieString[1];
    return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, value));
  }, {});
}
function getCookieByName(cookieName) {
  // Got from StackOverflow - https://stackoverflow.com/a/15724300/5542331
  var value = "; ".concat(document.cookie);
  var parts = value.split("; ".concat(cookieName, "="));
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
}
function setupUtmHelpers() {
  var decodedUrlSearchParams = decodeURIComponent(window.location.search.substring(1));
  var urlSearchParamsList = decodedUrlSearchParams.split('&');
  var utmObject = _createUtmObject();
  function _createUtmObject() {
    return urlSearchParamsList.reduce(function (previous, currentParam) {
      var splattedParam = currentParam.split('=');
      var paramKey = splattedParam[0];
      var paramValue = splattedParam[1];
      return _objectSpread(_objectSpread({}, previous), {}, _defineProperty({}, paramKey, paramValue));
    }, {});
  }
  function hasUtmParameter(searchTerm) {
    return !!utmObject[searchTerm];
  }
  function getUtmValueFromUrl(searchTerm) {
    return utmObject[searchTerm];
  }
  function setInputValue(_ref46) {
    var name = _ref46.name,
      value = _ref46.value;
    var inputs = document.getElementsByName(name);
    _toConsumableArray(inputs).map(function (input) {
      input.value = value;
    });
  }
  function setCookie(_ref47) {
    var name = _ref47.name,
      value = _ref47.value,
      expirationInDays = _ref47.expirationInDays;
    if (!expirationInDays) {
      // Default cookie expiration
      expirationInDays = 30;
    }
    var date = new Date();
    date.setTime(date.getTime() + expirationInDays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }
  function manageUtmHelpers() {
    function setUtm(_ref48) {
      var name = _ref48.name,
        value = _ref48.value;
      setCookie({
        name: name,
        value: value
      });
      setInputValue({
        name: name,
        value: value
      });
    }
    function setUtmFromUrl(utmName) {
      if (!hasUtmParameter(utmName)) {
        return;
      }
      setCookie({
        name: utmName,
        value: getUtmValueFromUrl(utmName)
      });
      setInputValue({
        name: utmName,
        value: getUtmValueFromUrl(utmName)
      });
    }
    function setupUtmSource() {
      var hasUtmSourceInUrl = !!getUtmValueFromUrl('utm_source');
      var hasReferrer = !!document.referrer;
      var hasComeFromGoogleSearch = document.referrer.search('google') > 0;
      if (!hasUtmSourceInUrl && !hasReferrer && hasComeFromGoogleSearch) {
        setUtm({
          name: 'utm_source',
          value: 'google'
        });
        setUtm({
          name: 'utm_medium',
          value: 'organic'
        });
        return;
      }
      if (!hasUtmSourceInUrl && hasReferrer) {
        setUtm({
          name: 'utm_source',
          value: 'referral'
        });
        setUtm({
          name: 'utm_medium',
          value: document.referrer
        });
        return;
      }
      setUtmFromUrl('utm_source');
    }

    // This is specific because it has additional logic
    setupUtmSource();
    setUtmFromUrl('utm_medium');
    setUtmFromUrl('utm_campaign');
    setUtmFromUrl('utm_term');
    setUtmFromUrl('utm_content');
    setUtmFromUrl('gclid');
  }
  manageUtmHelpers();
}
function setupCustomFormFieldsVisibility() {
  $.fn.disableFormFields = function () {
    this.find('select').each(function () {
      $(this).attr('disabled', true);
    });
    this.find('input').each(function () {
      $(this).attr('disabled', true);
    });

    // Bootstrap styles required
    this.addClass('d-none');
  };
  $.fn.enableFormFields = function () {
    this.find('select').each(function () {
      $(this).attr('disabled', false);
    });
    this.find('input').each(function () {
      $(this).attr('disabled', false);
    });

    // Bootstrap styles required
    this.removeClass('d-none');
  };
}
function getFieldValue(_ref49) {
  var name = _ref49.name,
    type = _ref49.type;
  if (!type) {
    type = 'input';
  }
  if (type === 'input') {
    return $("".concat(type, "[name=\"").concat(name, "\"]")).val();
  }
  if (type === 'select') {
    return $("".concat(type, "[name=\"").concat(name, "\"]")).children('option:selected').text();
  }
}
function setCustomFileLabel() {
  $('.custom-file-input').change(function () {
    var file = $(this)[0].files[0].name;
    var fileName = $('.custom-file-label');
    fileName.text(file);
  });
}
function setInvalidInput(_ref50) {
  var input = _ref50.input,
    message = _ref50.message;
  input.setCustomValidity(message || 'invalid');
  input.classList.add('is-invalid');
}
function setValidInput(_ref51) {
  var input = _ref51.input;
  input.setCustomValidity('');
  input.classList.remove('is-invalid');
}
function guideUserToTheFirstError() {
  var currentScrollPosition = $(window).scrollTop();
  var invalidInputsSelectors = ['.form-control:invalid', '.form-select:invalid', '.form-check-input:invalid', '.form-range:invalid', '.form-control.is-invalid', '.form-select.is-invalid', '.form-check-input.is-invalid', '.form-range.is-invalid'];
  var $invalidInputs = $(invalidInputsSelectors.join(', '));
  // Selects the parent to get input label
  var $firstInvalidInput = $invalidInputs.first().parent();
  var firstInvalidInputOffsetTop = $firstInvalidInput.offset().top;
  if (currentScrollPosition <= firstInvalidInputOffsetTop) {
    return;
  }
  if (_isFormOnModal()) {
    _scrollToError({
      container: '.modal.show'
    });
    return;
  }
  _scrollToError({
    container: 'html, body'
  });
  function _scrollToError(_ref52) {
    var container = _ref52.container;
    var animateConfig = {
      properties: {
        scrollTop: $firstInvalidInput.offset().top - _getStickyHeaderOffset()
      },
      options: {
        duration: 1000
      }
    };
    $(container).animate(animateConfig.properties, animateConfig.options);
  }
  function _isFormOnModal() {
    return $('body').hasClass('modal-open');
  }
  function _getStickyHeaderOffset() {
    var $stickyHeaderSticky = $('.js-header-sticky');
    if (!$stickyHeaderSticky.length) {
      return 0;
    }
    return $stickyHeaderSticky.innerHeight();
  }
}
function validateFullName(_ref53) {
  var fullNameElement = _ref53.fullNameElement,
    invalidMessage = _ref53.invalidMessage;
  var fullName = fullNameElement.value;
  // Only for themed form by Bootstrap
  var invalidFeedbackElement = fullNameElement.nextElementSibling;
  var defaultInvalidFeedback = invalidFeedbackElement.innerText;
  if (!isValidFullName()) {
    setInvalidInput({
      input: fullNameElement,
      message: invalidMessage
    });
    invalidFeedbackElement.innerText = invalidMessage;
    return;
  }
  setValidInput({
    input: fullNameElement
  });
  invalidFeedbackElement.innerText = defaultInvalidFeedback;
  function isValidFullName() {
    return fullName.trim().split(' ').length >= 2;
  }
}
function setupFullNameValidate() {
  var fullNameElements = document.querySelectorAll('.js-full-name');
  if (!fullNameElements.length) {
    return;
  }
  fullNameElements.forEach(function (fullNameElement) {
    // Execute as soon as it's found
    fullNameValidateHandler({
      fullNameElement: fullNameElement
    });
    fullNameElement.addEventListener('blur', function () {
      // Execute on every blur event propagation
      fullNameValidateHandler({
        fullNameElement: fullNameElement
      });
    });
  });
  function fullNameValidateHandler(_ref54) {
    var fullNameElement = _ref54.fullNameElement;
    if (!fullNameElement.value.length) {
      return;
    }
    var invalidMessage = 'Por favor, insira nome e sobrenome';
    validateFullName({
      fullNameElement: fullNameElement,
      invalidMessage: invalidMessage
    });
  }
}
function setupBrazilianCellphoneValidate() {
  var phoneInputs = document.querySelectorAll('.js-cellphone-validate');
  phoneInputs.forEach(function (phoneInput) {
    phoneInput.addEventListener('blur', function () {
      if (!isValidPhone(phoneInput)) {
        setInvalidInput({
          input: phoneInput,
          message: 'Por favor, insira um número de celular válido'
        });
        return;
      }
      setValidInput({
        input: phoneInput
      });
    });
  });
  function isValidPhone(phoneValue) {
    var sanitizedPhone = phoneValue.value.replace(/\D/g, '');

    // Check if has phone number and it has 11 characters
    return sanitizedPhone.length && sanitizedPhone.length === 11;
  }
}
function setupBrazilianPhoneValidate() {
  var phoneInputs = document.querySelectorAll('.js-phone-validate');
  phoneInputs.forEach(function (phoneInput) {
    phoneInput.addEventListener('blur', function () {
      if (!isValidPhone(phoneInput)) {
        setInvalidInput({
          input: phoneInput,
          message: 'Por favor, insira um número de telefone válido'
        });
        return;
      }
      setValidInput({
        input: phoneInput
      });
    });
  });
  function isValidPhone(phoneValue) {
    var sanitizedPhone = phoneValue.value.replace(/\D/g, '');

    // Check if has phone number and it has 11 characters
    return sanitizedPhone.length && sanitizedPhone.length === 10;
  }
}
function initializeFormHelpers() {
  // Form usability
  setCustomFileLabel();
  setupCustomFormFieldsVisibility();

  // Validators
  setupFullNameValidate();
  setupBrazilianCellphoneValidate();
  setupBrazilianPhoneValidate();
}
var CpfCnpjValidators = /*#__PURE__*/function () {
  function CpfCnpjValidators() {
    _classCallCheck(this, CpfCnpjValidators);
    this.sizes = {
      cpf: 11,
      cnpj: 14
    };
    this.selectors = {
      cpf: '.js-mask-cpf',
      cnpj: '.js-mask-cnpj'
    };
  }
  _createClass(CpfCnpjValidators, [{
    key: "sanitize",
    value: function sanitize(cpfOrCnpj) {
      return cpfOrCnpj.replace(/[^\d]+/g, '');
    }
  }, {
    key: "checkCNPJ",
    value: function checkCNPJ(cnpjInput) {
      var sanitizedCnpj = this.sanitize(cnpjInput.value);
      var sizes = {
        full: sanitizedCnpj.length,
        prefix: sanitizedCnpj.length - 2
      };
      var cnpj = {
        number: {
          full: sanitizedCnpj,
          prefix: sanitizedCnpj.substring(0, sizes.prefix),
          suffix: sanitizedCnpj.substring(sizes.prefix)
        }
      };
      if (!cnpj.number.full || cnpj.number.full.length !== this.sizes.cnpj) {
        setInvalidInput({
          input: cnpjInput
        });
      }
      if (cnpj.number.full === '00000000000000' || cnpj.number.full === '11111111111111' || cnpj.number.full === '22222222222222' || cnpj.number.full === '33333333333333' || cnpj.number.full === '44444444444444' || cnpj.number.full === '55555555555555' || cnpj.number.full === '66666666666666' || cnpj.number.full === '77777777777777' || cnpj.number.full === '88888888888888' || cnpj.number.full === '99999999999999') {
        setInvalidInput({
          input: cnpjInput
        });
        return;
      }
      var sum = 0;
      var positionIndex = sizes.prefix - 7;
      for (var i = sizes.prefix; i >= 1; i--) {
        sum += cnpj.number.full.charAt(sizes.prefix - i) * positionIndex--;
        if (positionIndex < 2) {
          positionIndex = 9;
        }
      }
      var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result !== Number(cnpj.number.suffix.charAt(0))) {
        setInvalidInput({
          input: cnpjInput
        });
        return;
      }
      sizes.prefix = sizes.prefix + 1;
      sum = 0;
      positionIndex = sizes.prefix - 7;
      for (var _i67 = sizes.prefix; _i67 >= 1; _i67--) {
        sum += cnpj.number.full.charAt(sizes.prefix - _i67) * positionIndex--;
        if (positionIndex < 2) {
          positionIndex = 9;
        }
      }
      result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result !== Number(cnpj.number.suffix.charAt(1))) {
        setInvalidInput({
          input: cnpjInput
        });
        return;
      }
      setValidInput({
        input: cnpjInput
      });
      return true;
    }
  }, {
    key: "checkCPF",
    value: function checkCPF(cpfInput) {
      var sanitizedCpf = this.sanitize(cpfInput.value);
      var cpf = {
        fullNumber: sanitizedCpf,
        prefix: sanitizedCpf.substr(0, 9),
        suffix: sanitizedCpf.substr(9, 2)
      };
      if (!cpf.fullNumber || cpf.fullNumber.length !== this.sizes.cpf) {
        setInvalidInput({
          input: cpfInput
        });
        return;
      }
      if (cpf.fullNumber === '00000000000' || cpf.fullNumber === '11111111111' || cpf.fullNumber === '22222222222' || cpf.fullNumber === '33333333333' || cpf.fullNumber === '44444444444' || cpf.fullNumber === '55555555555' || cpf.fullNumber === '66666666666' || cpf.fullNumber === '77777777777' || cpf.fullNumber === '88888888888' || cpf.fullNumber === '99999999999') {
        setInvalidInput({
          input: cpfInput
        });
        return;
      }
      var d1 = 0;
      for (var i = 0; i < 9; i++) {
        d1 += cpf.prefix.charAt(i) * (10 - i);
      }
      if (d1 === 0) {
        setInvalidInput({
          input: cpfInput
        });
        return;
      }
      d1 = 11 - d1 % 11;
      if (d1 > 9) {
        d1 = 0;
      }
      if (Number(cpf.suffix.charAt(0)) !== d1) {
        setInvalidInput({
          input: cpfInput
        });
        return;
      }
      d1 *= 2;
      for (var _i68 = 0; _i68 < 9; _i68++) {
        d1 += cpf.prefix.charAt(_i68) * (11 - _i68);
      }
      d1 = 11 - d1 % 11;
      if (d1 > 9) {
        d1 = 0;
      }
      if (Number(cpf.suffix.charAt(1)) !== d1) {
        setInvalidInput({
          input: cpfInput
        });
        return;
      }
      setValidInput({
        input: cpfInput
      });
      return true;
    }
  }]);
  return CpfCnpjValidators;
}();
function pwaManager() {
  if (!('serviceWorker' in navigator)) {
    return;
  }
  window.addEventListener('load', function () {
    if (navigator.onLine) {
      return;
    }
    $('<style type=\'text/css\'>' + ' .is-online { display: none } ' + ' .is-offline { display: block } ' + '</style>').appendTo('head');
  });
  if (navigator.serviceWorker.controller) {
    console.log('[PWA Builder] active service worker found, no need to register');
    return;
  }

  // Register the ServiceWorker
  navigator.serviceWorker.register('/service-worker.js').then(function (reg) {
    console.log('Service worker has been registered for scope: ' + reg.scope);
  })["catch"](function (err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}

// Hide Header on scroll down
function setupFmdHeader() {
  // Return element's offset top
  function getOffsetTop(selector) {
    return document.getElementsByClassName(selector)[0].getBoundingClientRect().top + window.pageYOffset;
  }

  // Return if selector was found
  function isElementSet(selector) {
    return !!document.getElementsByClassName(selector).length;
  }
  function showHeader() {
    header.classList.remove(hideClass);
    // header.style.transform = 'none';
  }
  function hideHeader() {
    header.classList.add(hideClass);
    // header.style.transform = 'translateY(-100%)';
  }
  function setStickyHeader() {
    header.classList.add(fixedClass);
    header.style.position = 'fixed';
  }
  function unsetStickyHeader() {
    header.classList.remove(fixedClass);
    header.style.position = 'absolute';
  }
  function setHeaderTransition(newTransition) {
    header.style.transitionDuration = "".concat(newTransition, "ms");
  }
  function setHeaderHeight(headerHeight) {
    document.documentElement.style.setProperty('--header-height', headerHeight + 'px');
  }
  function setupResizeScreenHeader() {
    var initialDimensions = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    function handleResize() {
      var currentDimensions = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      var hasHeaderFixed = header.classList.contains(fixedClass);

      // check the width and height of the screen to prevent when the browser
      // bar hides or when rotating the mobile screen in the landscape model
      // to not perform the resize
      if (currentDimensions.width === initialDimensions.width && currentDimensions.height >= initialDimensions.height || hasHeaderFixed) {
        return;
      }
      setTimeout(function () {
        setHeaderHeight(header.offsetHeight);
      }, headerTransition);
    }
    window.addEventListener('resize', handleResize);
  }

  // Initialize variables
  var didScroll;
  var lastScrollTop = 0;
  var fixedTimer;
  var delta = 5; // Minimum scroll value

  // Set classes
  var headerClass = 'fmd-header';
  var startTargetClass = 'fmd-header-start-target';
  var endTargetClass = 'fmd-header-end-target';
  var hideClass = 'fmd-header-is-hidden';
  var fixedClass = 'fmd-header-is-fixed';

  // If fixed header class wasn't found
  if (!isElementSet(headerClass)) {
    console.error("Use a classe \"".concat(headerClass, "\" no <header> para ativar o fixed header"));
    return;
  }

  // Select fixed header
  var header = document.querySelector(".".concat(headerClass));
  var headerTransition = Number(getComputedStyle(header)['transition-duration'].replace('s', '')) * 1000;

  // Start target where header will be fixed | Default: Window Height (100vh)
  var startTarget = isElementSet(startTargetClass) ? getOffsetTop(startTargetClass) : window.outerHeight;

  // End target where header will be shown | Default: The page bottom
  var endTarget = isElementSet(endTargetClass) ? getOffsetTop(endTargetClass) : document.body.scrollHeight;

  // Set variable that is used to apply padding-top to the body
  header.style.position = 'absolute';
  setHeaderHeight(header.offsetHeight);
  setupResizeScreenHeader();

  // Scroll event listener
  window.addEventListener('scroll', function () {
    didScroll = true;
  });

  // Watcher that calls function if the window was scrolled
  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, headerTransition);

  // When window gets scrolled
  function hasScrolled() {
    var st = window.pageYOffset;

    // Update last scroll top
    function updateLastScroll() {
      lastScrollTop = st;
    }

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) {
      return;
    }
    setHeaderTransition(headerTransition);

    // If the window bottom reaches end target
    if (st + window.outerHeight >= endTarget) {
      showHeader();
      updateLastScroll();
      return;
    }

    // If scroll down and passes start target
    if (st > lastScrollTop && st > startTarget) {
      window.clearTimeout(fixedTimer);
      fixedTimer = window.setTimeout(function () {
        setStickyHeader();
      }, headerTransition);
    }

    // If scroll down and passes header height
    if (st > lastScrollTop && st > header.offsetHeight) {
      hideHeader();
      updateLastScroll();
      return;
    }

    // If scroll up
    showHeader();
    if (st < header.offsetHeight) {
      setHeaderTransition(0);
    }
    if (st === 0) {
      unsetStickyHeader();
    }
    updateLastScroll();
  }
}
function createSlider(options) {
  if (!options.container) {
    throw new Error('Sorry, but to create a slider, you need to pass a container element :(');
  }
  var isContainerSelector = typeof options.container === 'string';
  if (isContainerSelector) {
    options.container = document.querySelector(options.container);
  }
  if (!options.container.classList.contains('swiper')) {
    throw new Error("Please set 'swiper' class with your root container element.\n      \r\n For example, <div class=\"swiper your-slider-class\">. \n      \r\n Please see https://swiperjs.com/get-started#add-swiper-html-layout");
  }
  var swiperWrapperElement = options.container.firstElementChild;
  if (!swiperWrapperElement || !swiperWrapperElement.classList.contains('swiper-wrapper')) {
    throw new Error("Please set 'swiper-wrapper' class in the first child element of 'swiper' element.");
  }
  var swiperSlideElement = swiperWrapperElement.firstElementChild;
  if (!swiperSlideElement || !swiperSlideElement.classList.contains('swiper-slide')) {
    throw new Error("Please set 'swiper-slide' class in the first child element of 'swiper-wrapper' element.");
  }
  return new Swiper(options.container, _objectSpread({
    roundLengths: true,
    //prevent blurry texts on usual resolution screens
    mousewheel: {
      forceToAxis: true
    }
  }, options));
}
function setupDefaultSlider() {
  var defaultSliderSelector = '.js-slider';
  if (!document.querySelectorAll(defaultSliderSelector).length) {
    return;
  }
  document.querySelectorAll(defaultSliderSelector).forEach(function createDefaultSlider(defaultSliderContainerElement) {
    createSlider({
      container: defaultSliderContainerElement,
      navigation: {
        prevEl: "".concat(defaultSliderSelector, " .swiper-button-prev"),
        nextEl: "".concat(defaultSliderSelector, " .swiper-button-next")
      }
    });
  });
}

/* Example of a swiper constructor with most common options */

// createSlider({
//   container: '.js-banner-slider',
//   autoHeight: false,
//   direction: 'horizontal',
//   speed: 300,
//   centerInsufficientSlides: false,
//   centeredSlides: false,
//   slidesPerView: 1,
//   spaceBetween: 0,
//   loop: false,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//   },
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     [getThemeVariables().breakpoints.sm]: {
//       slidesPerView: 2,
//       spaceBetween: 16,
//     },
//     [getThemeVariables().breakpoints.md]: {
//       slidesPerView: 3,
//       spaceBetween: 32,
//     },
//     [getThemeVariables().breakpoints.lg]: {
//       slidesPerView: 4,
//       spaceBetween: 32,
//     },
//   },
// });

function doScrollAnimate(targetSelector) {
  var target = document.querySelector(targetSelector);
  if (!target) {
    console.error("Alvo n\xE3o encontrado, verifique se existe um elemento na p\xE1gina com o seletor ".concat(targetSelector, ". D\xEA prefer\xEAncia a um ID, para evitar conflito no scroll."));
    return;
  }
  var additionalOffset = Number(target.getAttribute('data-scroll-offset')) || 0;
  var scrollTop = target.getBoundingClientRect().top + document.body.scrollTop + additionalOffset;
  window.scrollBy({
    top: scrollTop,
    behavior: 'smooth'
  });
}
function setupSmoothScrollInOffcanvas() {
  var offcanvasElements = document.querySelectorAll('.offcanvas');
  offcanvasElements.forEach(function (offcanvas) {
    var offcanvasScrollTriggerElements = offcanvas.querySelectorAll('a.js-scroll-top[data-bs-dismiss="offcanvas"]');
    offcanvasScrollTriggerElements.forEach(function (triggerElement) {
      var hiddenOffcanvasHandler = function hiddenOffcanvasHandler(event) {
        doScrollAnimate(triggerElement.hash);
        offcanvas.removeEventListener('hidden.bs.offcanvas', hiddenOffcanvasHandler);
      };
      triggerElement.addEventListener('click', function (event) {
        event.preventDefault();
        offcanvas.addEventListener('hidden.bs.offcanvas', hiddenOffcanvasHandler);
      });
    });
  });
}
function setupSmoothScroll() {
  // This selector is needed because offcanvas animation blocks page scroll, so
  // we need to handle each scroll separately.
  var scrollTriggerElements = document.querySelectorAll('*:not(.offcanvas) a.js-scroll-top');
  scrollTriggerElements.forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      doScrollAnimate(this.hash);
    });
  });
}
function setupLightDarkModeController() {
  var preferenceThemeElement = document.getElementById('jsSwitchControllerLightDarkTheme');
  if (!preferenceThemeElement) {
    throw new Error('Sorry, we couldn\'t find toggle element for light and dark theme :(');
  }

  // Gets the theme value saved in localStorage
  var getPreferenceTheme = function getPreferenceTheme() {
    return localStorage.getItem('theme');
  };
  // Defines a new theme item by storing the theme type in localStorage
  var setPreferenceTheme = function setPreferenceTheme(theme) {
    return localStorage.setItem('theme', theme);
  };

  // Enables the customer's preferred theme type
  function activatePreferenceTheme(theme) {
    setPreferenceTheme(theme);
    setDataBSThemeAttributeInDocument(theme);
  }

  // Set data-bs-theme=theme in Document
  function setDataBSThemeAttributeInDocument(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }

  // Check if the theme is dark to set the toggle as active or not
  function updateToggleThemeStatus() {
    getPreferenceTheme() === 'dark' ? preferenceThemeElement.checked = true : preferenceThemeElement.checked = false;
  }
  preferenceThemeElement.addEventListener('change', function (event) {
    event.target.checked ? activatePreferenceTheme('dark') : activatePreferenceTheme('light');
  });
  window.addEventListener('load', function () {
    updateToggleThemeStatus();

    // Activate the preferred theme already on load
    activatePreferenceTheme(getPreferenceTheme());
  });
}
function getThemeVariables() {
  var root = getComputedStyle(document.documentElement);

  // Read 'from --bs-breakpoint-??' (min-width)
  var breakpoints = {
    xs: Number(root.getPropertyValue('--bs-breakpoint-xs').replace('px', '')),
    sm: Number(root.getPropertyValue('--bs-breakpoint-sm').replace('px', '')),
    md: Number(root.getPropertyValue('--bs-breakpoint-md').replace('px', '')),
    lg: Number(root.getPropertyValue('--bs-breakpoint-lg').replace('px', '')),
    xl: Number(root.getPropertyValue('--bs-breakpoint-xl').replace('px', '')),
    xxl: Number(root.getPropertyValue('--bs-breakpoint-xxl').replace('px', ''))
  };
  function isWindowWidthUp(breakpoint) {
    return window.innerWidth >= breakpoints[breakpoint];
  }
  function isWindowWidthDown(breakpoint) {
    return window.innerWidth < breakpoints[breakpoint];
  }
  return {
    breakpoints: breakpoints,
    collapseTransitionTime: 350,
    // In milliseconds
    colors: {
      primary: root.getPropertyValue('--bs-primary'),
      secondary: root.getPropertyValue('--bs-secondary'),
      success: root.getPropertyValue('--bs-success'),
      info: root.getPropertyValue('--bs-info'),
      warning: root.getPropertyValue('--bs-warning'),
      danger: root.getPropertyValue('--bs-danger'),
      light: root.getPropertyValue('--bs-light'),
      dark: root.getPropertyValue('--bs-dark')
    },
    isWindowWidthUp: isWindowWidthUp,
    isWindowWidthDown: isWindowWidthDown
  };
}
function setupStateCityOptions() {
  if (!$('.js-state').length) {
    return;
  }
  $.getJSON('/json/estados-cidades.json', function (data) {
    var $state = $('.js-state');
    var $options = '<option value="">-</option>';
    $.each(data, function (key, val) {
      var selected = '';
      if (val.nome === $state.attr('data-selected')) {
        selected = 'selected';
      }
      $options += "<option value=\"".concat(val.nome, "\" ").concat(selected, ">").concat(val.nome, "</option>");
    });
    $state.html($options);
    $state.change(function () {
      var $optionsCity = '<option value="">-</option>';
      var str = '';
      $('.js-state option:selected').each(function () {
        str += $(this).text();
      });
      var city = $('.js-city');
      $.each(data, function (key, val) {
        if (val.nome !== str) {
          return;
        }
        $.each(val.cidades, function (key_city, val_city) {
          var selected = '';
          if (val_city === city.attr('data-selected')) {
            selected = 'selected';
          }
          $optionsCity += "<option value=\"".concat(val_city, "\" ").concat(selected, ">").concat(val_city, "</option>");
        });
      });
      city.html($optionsCity);
    }).change();
  });
}
function preventInvalidFormSubmit() {
  var forms = document.getElementsByClassName('needs-validation');
  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener('submit', function (event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        guideUserToTheFirstError();
        form.classList.add('was-validated');
      }
    }, false);
  });
  $('.is-invalid').each(function () {
    $(this)[0].setCustomValidity('needs validate');
  }).on('focusout', function () {
    $(this).removeClass('is-invalid');
    $(this)[0].setCustomValidity('');
  });
}
function verifyUserAgent() {
  var operationalSystemsData = [{
    osUserAgent: 'Windows NT 10.0',
    osSystemName: 'Windows 10'
  }, {
    osUserAgent: 'Windows NT 6.2',
    osSystemName: 'Windows 8'
  }, {
    osUserAgent: 'Windows NT 6.1',
    osSystemName: 'Windows 7'
  }, {
    osUserAgent: 'Windows NT 6.0',
    osSystemName: 'Windows Vista'
  }, {
    osUserAgent: 'Windows NT 5.1',
    osSystemName: 'Windows XP'
  }, {
    osUserAgent: 'Windows NT 5.0',
    osSystemName: 'Windows 2000'
  }, {
    osUserAgent: 'Mac',
    osSystemName: 'Mac/iOS'
  }, {
    osUserAgent: 'X11',
    osSystemName: 'UNIX'
  }, {
    osUserAgent: 'Linux',
    osSystemName: 'Linux'
  }];
  var operationalSystemName = operationalSystemsData.reduce(function (previousSystemData, currentSystemdata) {
    if (window.navigator.userAgent.indexOf(currentSystemdata.osUserAgent) !== -1) {
      return currentSystemdata.osSystemName;
    }
    return previousSystemData;
  });
  if (operationalSystemName !== 'Mac/iOS') {
    var body = document.querySelector('body');
    body.classList.add('style-scroll');
  }
}
function onChangeSelectLink() {
  // Switch page action when links are in a select
  // e.g. to do in html
  // <select class="form-control js-onchange">
  //   <option value=""
  //     selected>Link
  //   </option>
  //   <option class="" value="/html/index">Home</option>
  //   <option class="" value="/html/tema">FAQ</option>
  //</select>

  var selects = document.querySelectorAll('.js-onchange');
  if (!selects) {
    return;
  }
  selects.forEach(function (select) {
    select.addEventListener('change', function () {
      window.location = select.value;
    });
  });
}
function getBrowser() {
  var userAgent = navigator.userAgent.toLowerCase();
  var hasUserAgentSafariToken = userAgent.indexOf('safari') > -1;
  var hasUserAgentChromeToken = userAgent.indexOf('chrome') > -1;
  if (hasUserAgentSafariToken) {
    if (hasUserAgentChromeToken) {
      return 'chrome';
    }
    return 'safari';
  }
}
function isSafari() {
  return getBrowser() === 'safari';
}
function setupInputMasks() {
  function setMaskToAllElements(elements, maskOptions) {
    elements.forEach(function (element) {
      var mask = IMask(element, maskOptions);
      mask.on('complete', function () {
        // Safari doesn't detect the latest input changes
        if (isSafari()) {
          if ('createEvent' in document) {
            var evt = new Event('change', {
              'bubbles': true,
              'cancelable': false
            });
            element.dispatchEvent(evt);
            return;
          }
          element.dispatchEvent(new InputEvent('change'));
        }
      });
    });
  }
  var phoneMaskOptions = {
    mask: [{
      mask: '(00) 0000-0000'
    }, {
      mask: '(00) 00000-0000'
    }]
  };
  setMaskToAllElements(document.querySelectorAll('.js-mask-phone'), phoneMaskOptions);
  var cpfMaskOptions = {
    mask: '000.000.000-00'
  };
  setMaskToAllElements(document.querySelectorAll('.js-mask-cpf'), cpfMaskOptions);
  var cnpjMaskOptions = {
    mask: '00.000.000/0000-00'
  };
  setMaskToAllElements(document.querySelectorAll('.js-mask-cnpj'), cnpjMaskOptions);
  var cpfcnpjMaskOptions = {
    mask: [cpfMaskOptions, cnpjMaskOptions]
  };
  setMaskToAllElements(document.querySelectorAll('.js-mask-cpfcnpj'), cpfcnpjMaskOptions);
  var rgMaskOptions = {
    mask: '00.000.000-X',
    definitions: {
      'X': /[0-9Xx]/
    }
  };
  setMaskToAllElements(document.querySelectorAll('.js-mask-rg'), rgMaskOptions);
  var cepMaskOptions = {
    mask: '00000-000'
  };
  setMaskToAllElements(document.querySelectorAll('.js-mask-cep'), cepMaskOptions);
  var moneyMaskOptions = {
    mask: 'R$ num',
    blocks: {
      num: {
        mask: Number,
        thousandsSeparator: '.'
      }
    }
  };
  setMaskToAllElements(document.querySelectorAll('.js-mask-money'), moneyMaskOptions);
  var dateMaskOptions = {
    mask: Date,
    autofix: true,
    pattern: 'd{/}`m{/}`Y',
    blocks: {
      Y: {
        mask: IMask.MaskedRange,
        from: 1900,
        to: 2999
      }
    },
    format: function format(date) {
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      if (day < 10) {
        day = '0' + day;
      }
      if (month < 10) {
        month = '0' + month;
      }
      return [day, month, year].join('/');
    },
    parse: function parse(str) {
      var yearMonthDay = str.split('/');
      var day = yearMonthDay[0];
      var month = yearMonthDay[1] - 1;
      var year = yearMonthDay[2];

      // console.log(new Date(year, month, day))
      return new Date(year, month, day);
    }
  };
  setMaskToAllElements(document.querySelectorAll('.js-mask-date'), dateMaskOptions);
  var cpfCnpjValidators = new CpfCnpjValidators();
  var cpfInput = document.querySelector(cpfCnpjValidators.selectors.cpf);
  var cnpjInput = document.querySelector(cpfCnpjValidators.selectors.cnpj);
  if (cpfInput) {
    cpfInput.addEventListener('blur', function (event) {
      cpfCnpjValidators.checkCPF(event.target);
    });
  }
  if (cnpjInput) {
    cnpjInput.addEventListener('blur', function (event) {
      cpfCnpjValidators.checkCNPJ(event.target);
    });
  }
}
function setupCepSearch() {
  $('.js-zipcode').on('blur', function () {
    var $this = $(this);
    var cep = $this.val().replace('-', '');
    if (cep.length === 8) {
      $.getJSON('https://api.mixd.com.br/cep/' + cep, {}, function (result) {
        if (!result) {
          console.log(result.message || 'Houve um erro desconhecido');
          return;
        }
        var stateInput = $('.js-state');
        var cityInput = $('.js-city');
        $('.js-neighborhood').val(result.bairro);
        $('.js-address').val(result.logradouro);
        if (stateInput.is('input')) {
          stateInput.val(result.uf_nome);
        }
        if (cityInput.is('input')) {
          cityInput.val(result.cidade);
        }
        if (stateInput.is('select')) {
          stateInput.val(result.uf_nome);
          stateInput.trigger('change');
          cityInput.val(result.cidade);
        }
      });
    }
  });
}
function setupPopover() {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
}
function setupTooltip() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}
function setupAnchorReloadPrevention() {
  var targetClickLinkElements = document.querySelectorAll('a[href="#"]');
  if (!targetClickLinkElements) {
    return;
  }
  targetClickLinkElements.forEach(function (linkElement) {
    linkElement.addEventListener('click', function (clickEvent) {
      clickEvent.preventDefault();
    });
  });
}
function setupInfiniteScroll() {
  var scrollContainerElement = document.querySelector('.infinite-scroll');
  var nextElementSelector = 'a[rel~="next"]';
  var nextPageElement = document.querySelector(nextElementSelector);
  if (!scrollContainerElement || !nextPageElement) {
    return;
  }
  new InfiniteScroll(scrollContainerElement, {
    path: nextElementSelector,
    append: '.infinite-scroll-content',
    scrollThreshold: 100,
    status: '.page-load-status',
    history: 'push'
  });
}
function setupClipboardJS() {
  // Don't forget to install the package: npm install clipboard --save

  var triggerElement = new ClipboardJS('.js-copy');
  triggerElement.on('success', function (event) {
    showTooltip(event.trigger);
  });
  function showTooltip(targetElement) {
    var successTooltip = $(targetElement).tooltip({
      title: 'Copiado para a área de transferência',
      placement: 'bottom',
      trigger: 'manual'
    });
    successTooltip.tooltip('show');
    setTimeout(function () {
      successTooltip.tooltip('hide');
    }, 2000);
  }
}
function setupShareAPI() {
  var shareButtonElements = document.querySelectorAll('.js-btn-share');
  if (!shareButtonElements.length) {
    return;
  }
  var pageTitle = document.querySelector('title').textContent;
  var pageDescription = document.querySelector('meta[name="description"]').getAttribute('content');
  shareButtonElements.forEach(function (buttonItem) {
    buttonItem.addEventListener('click', function () {
      navigator.share({
        title: pageTitle,
        text: pageDescription,
        url: location.href,
        fbId: buttonItem.getAttribute('data-fmd-share-btn-fbidentification')
      }, {
        // change this configurations to hide specific unnecessary icons
        copy: true,
        email: true,
        print: true,
        sms: true,
        messenger: true,
        facebook: true,
        whatsapp: true,
        twitter: true,
        linkedin: true,
        telegram: true,
        skype: true,
        language: 'pt' // specify the default language
      }).then(function () {
        return console.log('Compartilhado com sucesso!');
      })["catch"](function (error) {
        return console.log('Ops! Algo de errado aconteceu:\'(\n', error);
      });
    });
  });
}
function setupWOWJS() {
  new WOW().init();
}
function setupModalConfig() {
  var modalElements = document.querySelectorAll('.modal');
  modalElements.forEach(function (modalElement) {
    return new bootstrap.Modal(modalElement, {
      focus: false
    });
  });
}
$(function () {
  pwaManager();
  preventInvalidFormSubmit();
  verifyUserAgent();
  setupSmoothScroll();
  setupSmoothScrollInOffcanvas();

  // setupCepSearch();

  // setupStateCityOptions();

  onChangeSelectLink();
  setupInputMasks();

  // setupPopover();

  // setupTooltip();

  // setupAnchorReloadPrevention();

  initializeFormHelpers();

  // setupDefaultSlider();

  // setupClipboardJS();

  // setupShareAPI();

  // setupDataLayerEventClickButton();

  setupUtmHelpers();

  // setupWOWJS();

  setupModalConfig();
  setupLightDarkModeController();
});
window.addEventListener('load', function () {
  /**
   * Usually the header triggers after the first section which has the
   * height defined as 100vh. We need the starting function here because
   * vh/vw are calculated after all resources loaded*/
  setupFmdHeader();
  if (window.innerWidth > getThemeVariables().breakpoints.md) {
    // setupLax();
  }
  setupInfiniteScroll();
});
