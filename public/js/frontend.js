function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e101) { throw _e101; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e102) { didErr = true; err = _e102; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.6.0",
      S = function S(e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return S.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(S.grep(this, function (e, t) {
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
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
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

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        j = function j(e, t) {
      return e === t && (l = !0), 0;
    },
        D = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function ne(e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
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

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) {
              l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            }

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, j = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
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
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [k, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        }

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r2, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r2.push(o);

                  break;
                }
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r2));
              }
              f = Te(f);
            }

            H.apply(_r2, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r2);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function h(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && S(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      T = function T(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (S.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        S.find(e, i[t], n);
      }

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var D,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || D, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, D = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  S.fn.extend({
    has: function has(e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (S.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return O(e, "nextSibling");
    },
    prev: function prev(e) {
      return O(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return T(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

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

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
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
  }, S.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
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
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
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
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
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
          i = s.call(arguments),
          o = S.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        I(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function $(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      $(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) {
        i[X(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      Q.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          }

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function ie(e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function ie(e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  S.fn.extend({
    show: function show() {
      return le(this, !0);
    },
    hide: function hide() {
      return le(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  var be = /^([^.]*)(?:\.(.+)|)/;

  function we() {
    return !0;
  }

  function Te() {
    return !1;
  }

  function Ce(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function Ee(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Ee(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Se(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }

  S.event = {
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
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) {
          d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && S.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
        }
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
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) {
          if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            S.event.remove(e, d + t[l], n, r, !0);
          }
        }

        S.isEmptyObject(u) && Y.remove(e, "handle events");
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
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) {
        s[t] = arguments[t];
      }

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) {
            u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
          }
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
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
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
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Te,
    isPropagationStopped: Te,
    isImmediatePropagationStopped: Te,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
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
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function setup() {
        return Se(this, e, Ce), !1;
      },
      trigger: function trigger() {
        return Se(this, e), !0;
      },
      _default: function _default() {
        return !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function on(e, t, n, r) {
      return Ee(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ee(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var ke = /<script|<style|<link/i,
      Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function je(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function De(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function qe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Le(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) {
        for (n = 0, r = s[i].length; n < r; n++) {
          S.event.add(t, i, s[i][n]);
        }
      }
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function He(n, r, i, o) {
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
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) {
        u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(Ne, ""), u, l));
      }
    }

    return n;
  }

  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  S.extend({
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
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Le(o[r], a[r]);
      } else Le(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            }
            n[Y.expando] = void 0;
          }

          n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    }
  }), S.fn.extend({
    detach: function detach(e) {
      return Oe(this, e, !0);
    },
    remove: function remove(e) {
      return Oe(this, e);
    },
    text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return He(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return He(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = je(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return He(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Re = function Re(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      Me = function Me(e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) {
      o[i] = e.style[i], e.style[i] = t[i];
    }

    for (i in r = n.call(e), t) {
      e.style[i] = o[i];
    }

    return r;
  },
      Ie = new RegExp(ne.join("|"), "i");

  function We(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function Fe(e, t) {
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
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
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
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
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
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a;
      }
    }));
  }();
  var Be = ["Webkit", "Moz", "ms"],
      $e = E.createElement("div").style,
      _e = {};

  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return t || (e in $e ? e : _e[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = Be.length;

      while (n--) {
        if ((e = Be[n] + t) in $e) return e;
      }
    }(e) || e);
  }

  var Ue = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ve = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ge = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Je(e, t, n) {
    var r = Re(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = We(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
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
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Xe.test(t),
            l = e.style;
        if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () {
          return Je(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Re(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Ye);
  }), S.fn.extend({
    css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Re(e), i = t.length; a < i; a++) {
            o[t[a]] = S.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = Ke).prototype = {
    constructor: Ke,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = Ke.propHooks[this.prop];
      return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = Ke.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this;
    }
  }).init.prototype = Ke.prototype, (Ke.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = Ke.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = Ke.prototype.init, S.fx.step = {};
  var Ze,
      et,
      tt,
      nt,
      rt = /^(?:toggle|show|hide)$/,
      it = /queueHooks$/;

  function ot() {
    et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick());
  }

  function at() {
    return C.setTimeout(function () {
      Ze = void 0;
    }), Ze = Date.now();
  }

  function st(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function ut(e, t, n) {
    for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function lt(o, e, t) {
    var n,
        a,
        r = 0,
        i = lt.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: Ze || at(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(lt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t);
      }
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
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], rt.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || S.style(e, r);
        }
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) {
            S.style(e, r, d[r]);
          }
        })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function a() {
        var e = lt(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
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
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && it.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: st("show"),
    slideUp: st("hide"),
    slideToggle: st("toggle"),
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
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (Ze = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || S.fx.stop(), Ze = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    et || (et = !0, ot());
  }, S.fx.stop = function () {
    et = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
  var ct,
      ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function attr(e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), ct = {
    set: function set(e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = ft[t] || S.find.attr;

    ft[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r;
    };
  });
  var pt = /^(?:input|select|textarea|button)$/i,
      dt = /^(?:a|area)$/i;

  function ht(e) {
    return (e.match(P) || []).join(" ");
  }

  function gt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function vt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function prop(e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, gt(this)));
      });
      if ((e = vt(t)).length) while (n = this[u++]) {
        if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = ht(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, gt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = vt(t)).length) while (n = this[u++]) {
        if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = ht(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, gt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = vt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var yt = /\r/g;
  S.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : ht(S.text(e));
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

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var mt = /^(?:focusinfocus|focusoutblur)$/,
      xt = function xt(e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var bt = C.location,
      wt = {
    guid: Date.now()
  },
      Tt = /\?/;

  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}

    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };

  var Ct = /\[\]$/,
      Et = /\r?\n/g,
      St = /^(?:submit|button|image|reset|file)$/i,
      kt = /^(?:input|select|textarea|keygen)/i;

  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      At(n + "[" + t + "]", e[t], r, i);
    }
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      At(n, e[n], t, i);
    }
    return r.join("&");
  }, S.fn.extend({
    serialize: function serialize() {
      return S.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Et, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Et, "\r\n")
        };
      }).get();
    }
  });
  var Nt = /%20/g,
      jt = /#.*$/,
      Dt = /([?&])_=[^&]*/,
      qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Lt = /^(?:GET|HEAD)$/,
      Ht = /^\/\//,
      Ot = {},
      Pt = {},
      Rt = "*/".concat("*"),
      Mt = E.createElement("a");

  function It(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function Wt(t, i, o, a) {
    var s = {},
        u = t === Pt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function Ft(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && S.extend(!0, e, r), e;
  }

  Mt.href = bt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: bt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Rt,
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
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
    },
    ajaxPrefilter: It(Ot),
    ajaxTransport: It(Pt),
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
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
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

              while (t = qt.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
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
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
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
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
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
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
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
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) {
      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
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
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Bt = {
    0: 200,
    1223: 204
  },
      $t = S.ajaxSettings.xhr();
  y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || $t && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
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
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });

  var _t,
      zt = [],
      Ut = /(=)\?(?=&|$)|\?\?/;

  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, S.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
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
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
      if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
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
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Xt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S;
  });
  var Vt = C.jQuery,
      Gt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});
/*!
  * Bootstrap v5.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
}(this, function () {
  "use strict";

  var t = function t(_t3) {
    var e = _t3.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i2 = _t3.getAttribute("href");

      if (!_i2 || !_i2.includes("#") && !_i2.startsWith(".")) return null;
      _i2.includes("#") && !_i2.startsWith("#") && (_i2 = "#" + _i2.split("#")[1]), e = _i2 && "#" !== _i2 ? _i2.trim() : null;
    }

    return e;
  },
      e = function e(_e2) {
    var i = t(_e2);
    return i && document.querySelector(i) ? i : null;
  },
      i = function i(e) {
    var i = t(e);
    return i ? document.querySelector(i) : null;
  },
      n = function n(t) {
    t.dispatchEvent(new Event("transitionend"));
  },
      s = function s(t) {
    return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      o = function o(t) {
    return s(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null;
  },
      r = function r(t, e, i) {
    Object.keys(i).forEach(function (n) {
      var o = i[n],
          r = e[n],
          a = r && s(r) ? "element" : null == (l = r) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
      var l;
      if (!new RegExp(o).test(a)) throw new TypeError("".concat(t.toUpperCase(), ": Option \"").concat(n, "\" provided type \"").concat(a, "\" but expected type \"").concat(o, "\"."));
    });
  },
      a = function a(t) {
    return !(!s(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility");
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
    var _window = window,
        t = _window.jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
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
      f.forEach(function (t) {
        return t();
      });
    }), f.push(e)) : e();
  },
      g = function g(t) {
    "function" == typeof t && t();
  },
      _ = function _(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    if (!i) return void g(t);

    var s = function (t) {
      if (!t) return 0;

      var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          i = _window$getComputedSt.transitionDelay;

      var n = Number.parseFloat(e),
          s = Number.parseFloat(i);
      return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
    }(e) + 5;

    var o = !1;

    var r = function r(_ref) {
      var i = _ref.target;
      i === e && (o = !0, e.removeEventListener("transitionend", r), g(t));
    };

    e.addEventListener("transitionend", r), setTimeout(function () {
      o || n(e);
    }, s);
  },
      b = function b(t, e, i, n) {
    var s = t.indexOf(e);
    if (-1 === s) return t[!i && n ? t.length - 1 : 0];
    var o = t.length;
    return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))];
  },
      v = /[^.]*(?=\..*)\.|.*/,
      y = /\..*/,
      w = /::\d+$/,
      E = {};

  var A = 1;
  var T = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      O = /^(mouseenter|mouseleave)/i,
      C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function k(t, e) {
    return e && "".concat(e, "::").concat(A++) || t.uidEvent || A++;
  }

  function L(t) {
    var e = k(t);
    return t.uidEvent = e, E[e] = E[e] || {}, E[e];
  }

  function x(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var n = Object.keys(t);

    for (var _s = 0, _o2 = n.length; _s < _o2; _s++) {
      var _o3 = t[n[_s]];
      if (_o3.originalHandler === e && _o3.delegationSelector === i) return _o3;
    }

    return null;
  }

  function D(t, e, i) {
    var n = "string" == typeof e,
        s = n ? i : e;
    var o = I(t);
    return C.has(o) || (o = t), [n, s, o];
  }

  function S(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;

    if (i || (i = n, n = null), O.test(e)) {
      var _t4 = function _t4(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      n ? n = _t4(n) : i = _t4(i);
    }

    var _D = D(e, i, n),
        _D2 = _slicedToArray(_D, 3),
        o = _D2[0],
        r = _D2[1],
        a = _D2[2],
        l = L(t),
        c = l[a] || (l[a] = {}),
        h = x(c, r, o ? i : null);

    if (h) return void (h.oneOff = h.oneOff && s);
    var d = k(r, e.replace(v, "")),
        u = o ? function (t, e, i) {
      return function n(s) {
        var o = t.querySelectorAll(e);

        for (var _r3 = s.target; _r3 && _r3 !== this; _r3 = _r3.parentNode) {
          for (var _a = o.length; _a--;) {
            if (o[_a] === _r3) return s.delegateTarget = _r3, n.oneOff && P.off(t, s.type, e, i), i.apply(_r3, [s]);
          }
        }

        return null;
      };
    }(t, i, n) : function (t, e) {
      return function i(n) {
        return n.delegateTarget = t, i.oneOff && P.off(t, n.type, e), e.apply(t, [n]);
      };
    }(t, i);
    u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function N(t, e, i, n, s) {
    var o = x(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }

  function I(t) {
    return t = t.replace(y, ""), T[t] || t;
  }

  var P = {
    on: function on(t, e, i, n) {
      S(t, e, i, n, !1);
    },
    one: function one(t, e, i, n) {
      S(t, e, i, n, !0);
    },
    off: function off(t, e, i, n) {
      if ("string" != typeof e || !t) return;

      var _D3 = D(e, i, n),
          _D4 = _slicedToArray(_D3, 3),
          s = _D4[0],
          o = _D4[1],
          r = _D4[2],
          a = r !== e,
          l = L(t),
          c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void N(t, l, r, o, s ? i : null);
      }

      c && Object.keys(l).forEach(function (i) {
        !function (t, e, i, n) {
          var s = e[i] || {};
          Object.keys(s).forEach(function (o) {
            if (o.includes(n)) {
              var _n3 = s[o];
              N(t, e, i, _n3.originalHandler, _n3.delegationSelector);
            }
          });
        }(t, l, i, e.slice(1));
      });
      var h = l[r] || {};
      Object.keys(h).forEach(function (i) {
        var n = i.replace(w, "");

        if (!a || e.includes(n)) {
          var _e4 = h[i];
          N(t, l, r, _e4.originalHandler, _e4.delegationSelector);
        }
      });
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var n = u(),
          s = I(e),
          o = e !== s,
          r = C.has(s);
      var a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
      return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== i && Object.keys(i).forEach(function (t) {
        Object.defineProperty(d, t, {
          get: function get() {
            return i[t];
          }
        });
      }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
    }
  },
      j = new Map();
  var M = {
    set: function set(t, e, i) {
      j.has(t) || j.set(t, new Map());
      var n = j.get(t);
      n.has(e) || 0 === n.size ? n.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(n.keys())[0], "."));
    },
    get: function get(t, e) {
      return j.has(t) && j.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!j.has(t)) return;
      var i = j.get(t);
      i["delete"](e), 0 === i.size && j["delete"](t);
    }
  };

  var H = /*#__PURE__*/function () {
    function H(t) {
      _classCallCheck(this, H);

      (t = o(t)) && (this._element = t, M.set(this._element, this.constructor.DATA_KEY, this));
    }

    _createClass(H, [{
      key: "dispose",
      value: function dispose() {
        var _this = this;

        M.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function (t) {
          _this[t] = null;
        });
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;

        _(t, e, i);
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return M.get(o(t), this.DATA_KEY);
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
        return "5.1.1";
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs." + this.NAME;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return "." + this.DATA_KEY;
      }
    }]);

    return H;
  }();

  var B = function B(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
    var n = "click.dismiss" + t.EVENT_KEY,
        s = t.NAME;
    P.on(document, n, "[data-bs-dismiss=\"".concat(s, "\"]"), function (n) {
      if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), l(this)) return;
      var o = i(this) || this.closest("." + s);
      t.getOrCreateInstance(o)[e]();
    });
  };

  var R = /*#__PURE__*/function (_H) {
    _inherits(R, _H);

    var _super = _createSuper(R);

    function R() {
      _classCallCheck(this, R);

      return _super.apply(this, arguments);
    }

    _createClass(R, [{
      key: "close",
      value: function close() {
        var _this2 = this;

        if (P.trigger(this._element, "close.bs.alert").defaultPrevented) return;

        this._element.classList.remove("show");

        var t = this._element.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, t);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove(), P.trigger(this._element, "closed.bs.alert"), this.dispose();
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
          var e = R.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return R;
  }(H);

  B(R, "close"), m(R);

  var W = /*#__PURE__*/function (_H2) {
    _inherits(W, _H2);

    var _super2 = _createSuper(W);

    function W() {
      _classCallCheck(this, W);

      return _super2.apply(this, arguments);
    }

    _createClass(W, [{
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
          var e = W.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }]);

    return W;
  }(H);

  function z(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function q(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  P.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', function (t) {
    t.preventDefault();
    var e = t.target.closest('[data-bs-toggle="button"]');
    W.getOrCreateInstance(e).toggle();
  }), m(W);
  var F = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-" + q(e), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + q(e));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {};
      return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (i) {
        var n = i.replace(/^bs/, "");
        n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = z(t.dataset[i]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return z(t.getAttribute("data-bs-" + q(e)));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + window.pageYOffset,
        left: e.left + window.pageXOffset
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
    }
  },
      U = {
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
      var n = t.parentNode;

      for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) {
        n.matches(e) && i.push(n), n = n.parentNode;
      }

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
        return t + ':not([tabindex^="-"])';
      }).join(", ");
      return this.find(e, t).filter(function (t) {
        return !l(t) && a(t);
      });
    }
  },
      $ = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      V = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      K = "next",
      X = "prev",
      Y = "left",
      Q = "right",
      G = {
    ArrowLeft: Q,
    ArrowRight: Y
  };

  var Z = /*#__PURE__*/function (_H3) {
    _inherits(Z, _H3);

    var _super3 = _createSuper(Z);

    function Z(t, e) {
      var _this3;

      _classCallCheck(this, Z);

      _this3 = _super3.call(this, t), _this3._items = null, _this3._interval = null, _this3._activeElement = null, _this3._isPaused = !1, _this3._isSliding = !1, _this3.touchTimeout = null, _this3.touchStartX = 0, _this3.touchDeltaX = 0, _this3._config = _this3._getConfig(e), _this3._indicatorsElement = U.findOne(".carousel-indicators", _this3._element), _this3._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this3._pointerEvent = Boolean(window.PointerEvent), _this3._addEventListeners();
      return _this3;
    }

    _createClass(Z, [{
      key: "next",
      value: function next() {
        this._slide(K);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && a(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(X);
      }
    }, {
      key: "pause",
      value: function pause(t) {
        t || (this._isPaused = !0), U.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (n(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this4 = this;

        this._activeElement = U.findOne(".active.carousel-item", this._element);

        var e = this._getItemIndex(this._activeElement);

        if (t > this._items.length - 1 || t < 0) return;
        if (this._isSliding) return void P.one(this._element, "slid.bs.carousel", function () {
          return _this4.to(t);
        });
        if (e === t) return this.pause(), void this.cycle();
        var i = t > e ? K : X;

        this._slide(i, this._items[t]);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, $), F.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), r("carousel", t, V), t;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e && this._slide(e > 0 ? Q : Y);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;

        this._config.keyboard && P.on(this._element, "keydown.bs.carousel", function (t) {
          return _this5._keydown(t);
        }), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", function (t) {
          return _this5.pause(t);
        }), P.on(this._element, "mouseleave.bs.carousel", function (t) {
          return _this5.cycle(t);
        })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this6 = this;

        var t = function t(_t5) {
          return _this6._pointerEvent && ("pen" === _t5.pointerType || "touch" === _t5.pointerType);
        },
            e = function e(_e5) {
          t(_e5) ? _this6.touchStartX = _e5.clientX : _this6._pointerEvent || (_this6.touchStartX = _e5.touches[0].clientX);
        },
            i = function i(t) {
          _this6.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this6.touchStartX;
        },
            n = function n(e) {
          t(e) && (_this6.touchDeltaX = e.clientX - _this6.touchStartX), _this6._handleSwipe(), "hover" === _this6._config.pause && (_this6.pause(), _this6.touchTimeout && clearTimeout(_this6.touchTimeout), _this6.touchTimeout = setTimeout(function (t) {
            return _this6.cycle(t);
          }, 500 + _this6._config.interval));
        };

        U.find(".carousel-item img", this._element).forEach(function (t) {
          P.on(t, "dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          });
        }), this._pointerEvent ? (P.on(this._element, "pointerdown.bs.carousel", function (t) {
          return e(t);
        }), P.on(this._element, "pointerup.bs.carousel", function (t) {
          return n(t);
        }), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.carousel", function (t) {
          return e(t);
        }), P.on(this._element, "touchmove.bs.carousel", function (t) {
          return i(t);
        }), P.on(this._element, "touchend.bs.carousel", function (t) {
          return n(t);
        }));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = G[t.key];
        e && (t.preventDefault(), this._slide(e));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._items = t && t.parentNode ? U.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(t, e) {
        var i = t === K;
        return b(this._items, e, i, this._config.wrap);
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(t, e) {
        var i = this._getItemIndex(t),
            n = this._getItemIndex(U.findOne(".active.carousel-item", this._element));

        return P.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: t,
          direction: e,
          from: n,
          to: i
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (this._indicatorsElement) {
          var _e6 = U.findOne(".active", this._indicatorsElement);

          _e6.classList.remove("active"), _e6.removeAttribute("aria-current");

          var _i4 = U.find("[data-bs-target]", this._indicatorsElement);

          for (var _e7 = 0; _e7 < _i4.length; _e7++) {
            if (Number.parseInt(_i4[_e7].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
              _i4[_e7].classList.add("active"), _i4[_e7].setAttribute("aria-current", "true");
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || U.findOne(".active.carousel-item", this._element);
        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, {
      key: "_slide",
      value: function _slide(t, e) {
        var _this7 = this;

        var i = this._directionToOrder(t),
            n = U.findOne(".active.carousel-item", this._element),
            s = this._getItemIndex(n),
            o = e || this._getItemByOrder(i, n),
            r = this._getItemIndex(o),
            a = Boolean(this._interval),
            l = i === K,
            c = l ? "carousel-item-start" : "carousel-item-end",
            h = l ? "carousel-item-next" : "carousel-item-prev",
            u = this._orderToDirection(i);

        if (o && o.classList.contains("active")) return void (this._isSliding = !1);
        if (this._isSliding) return;
        if (this._triggerSlideEvent(o, u).defaultPrevented) return;
        if (!n || !o) return;
        this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;

        var f = function f() {
          P.trigger(_this7._element, "slid.bs.carousel", {
            relatedTarget: o,
            direction: u,
            from: s,
            to: r
          });
        };

        if (this._element.classList.contains("slide")) {
          o.classList.add(h), d(o), n.classList.add(c), o.classList.add(c);

          var _t6 = function _t6() {
            o.classList.remove(c, h), o.classList.add("active"), n.classList.remove("active", h, c), _this7._isSliding = !1, setTimeout(f, 0);
          };

          this._queueCallback(_t6, n, !0);
        } else n.classList.remove("active"), o.classList.add("active"), this._isSliding = !1, f();

        a && this.cycle();
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return [Q, Y].includes(t) ? p() ? t === Y ? X : K : t === Y ? K : X : t;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return [K, X].includes(t) ? p() ? t === X ? Y : Q : t === X ? Q : Y : t;
      }
    }], [{
      key: "Default",
      get: function get() {
        return $;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }, {
      key: "carouselInterface",
      value: function carouselInterface(t, e) {
        var i = Z.getOrCreateInstance(t, e);
        var n = i._config;
        "object" == _typeof(e) && (n = _objectSpread(_objectSpread({}, n), e));
        var s = "string" == typeof e ? e : n.slide;
        if ("number" == typeof e) i.to(e);else if ("string" == typeof s) {
          if (void 0 === i[s]) throw new TypeError("No method named \"".concat(s, "\""));
          i[s]();
        } else n.interval && n.ride && (i.pause(), i.cycle());
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          Z.carouselInterface(this, t);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(t) {
        var e = i(this);
        if (!e || !e.classList.contains("carousel")) return;

        var n = _objectSpread(_objectSpread({}, F.getDataAttributes(e)), F.getDataAttributes(this)),
            s = this.getAttribute("data-bs-slide-to");

        s && (n.interval = !1), Z.carouselInterface(e, n), s && Z.getInstance(e).to(s), t.preventDefault();
      }
    }]);

    return Z;
  }(H);

  P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler), P.on(window, "load.bs.carousel.data-api", function () {
    var t = U.find('[data-bs-ride="carousel"]');

    for (var _e8 = 0, _i5 = t.length; _e8 < _i5; _e8++) {
      Z.carouselInterface(t[_e8], Z.getInstance(t[_e8]));
    }
  }), m(Z);
  var J = {
    toggle: !0,
    parent: null
  },
      tt = {
    toggle: "boolean",
    parent: "(null|element)"
  };

  var et = /*#__PURE__*/function (_H4) {
    _inherits(et, _H4);

    var _super4 = _createSuper(et);

    function et(t, i) {
      var _this8;

      _classCallCheck(this, et);

      _this8 = _super4.call(this, t), _this8._isTransitioning = !1, _this8._config = _this8._getConfig(i), _this8._triggerArray = [];
      var n = U.find('[data-bs-toggle="collapse"]');

      for (var _t7 = 0, _i6 = n.length; _t7 < _i6; _t7++) {
        var _i7 = n[_t7],
            _s2 = e(_i7),
            _o4 = U.find(_s2).filter(function (t) {
          return t === _this8._element;
        });

        null !== _s2 && _o4.length && (_this8._selector = _s2, _this8._triggerArray.push(_i7));
      }

      _this8._initializeChildren(), _this8._config.parent || _this8._addAriaAndCollapsedClass(_this8._triggerArray, _this8._isShown()), _this8._config.toggle && _this8.toggle();
      return _this8;
    }

    _createClass(et, [{
      key: "toggle",
      value: function toggle() {
        this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this9 = this;

        if (this._isTransitioning || this._isShown()) return;
        var t,
            e = [];

        if (this._config.parent) {
          var _t8 = U.find(".collapse .collapse", this._config.parent);

          e = U.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(function (e) {
            return !_t8.includes(e);
          });
        }

        var i = U.findOne(this._selector);

        if (e.length) {
          var _n4 = e.find(function (t) {
            return i !== t;
          });

          if (t = _n4 ? et.getInstance(_n4) : null, t && t._isTransitioning) return;
        }

        if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        e.forEach(function (e) {
          i !== e && et.getOrCreateInstance(e, {
            toggle: !1
          }).hide(), t || M.set(e, "bs.collapse", null);
        });

        var n = this._getDimension();

        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        var s = "scroll" + (n[0].toUpperCase() + n.slice(1));
        this._queueCallback(function () {
          _this9._isTransitioning = !1, _this9._element.classList.remove("collapsing"), _this9._element.classList.add("collapse", "show"), _this9._element.style[n] = "", P.trigger(_this9._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[n] = this._element[s] + "px";
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this10 = this;

        if (this._isTransitioning || !this._isShown()) return;
        if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", d(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
        var e = this._triggerArray.length;

        for (var _t9 = 0; _t9 < e; _t9++) {
          var _e9 = this._triggerArray[_t9],
              _n5 = i(_e9);

          _n5 && !this._isShown(_n5) && this._addAriaAndCollapsedClass([_e9], !1);
        }

        this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function () {
          _this10._isTransitioning = !1, _this10._element.classList.remove("collapsing"), _this10._element.classList.add("collapse"), P.trigger(_this10._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains("show");
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread(_objectSpread({}, J), F.getDataAttributes(this._element)), t)).toggle = Boolean(t.toggle), t.parent = o(t.parent), r("collapse", t, tt), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        var _this11 = this;

        if (!this._config.parent) return;
        var t = U.find(".collapse .collapse", this._config.parent);
        U.find('[data-bs-toggle="collapse"]', this._config.parent).filter(function (e) {
          return !t.includes(e);
        }).forEach(function (t) {
          var e = i(t);
          e && _this11._addAriaAndCollapsedClass([t], _this11._isShown(e));
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        t.length && t.forEach(function (t) {
          e ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", e);
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return J;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = {};
          "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
          var i = et.getOrCreateInstance(this, e);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t]();
          }
        });
      }
    }]);

    return et;
  }(H);

  P.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var i = e(this);
    U.find(i).forEach(function (t) {
      et.getOrCreateInstance(t, {
        toggle: !1
      }).toggle();
    });
  }), m(et);
  var it = "top",
      nt = "bottom",
      st = "right",
      ot = "left",
      rt = [it, nt, st, ot],
      at = "end",
      lt = rt.reduce(function (t, e) {
    return t.concat([e + "-start", e + "-" + at]);
  }, []),
      ct = [].concat(rt, ["auto"]).reduce(function (t, e) {
    return t.concat([e, e + "-start", e + "-" + at]);
  }, []),
      ht = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

  function dt(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }

  function ut(t) {
    if (null == t) return window;

    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }

    return t;
  }

  function ft(t) {
    return t instanceof ut(t).Element || t instanceof Element;
  }

  function pt(t) {
    return t instanceof ut(t).HTMLElement || t instanceof HTMLElement;
  }

  function mt(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof ut(t).ShadowRoot || t instanceof ShadowRoot);
  }

  var gt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
            n = e.attributes[t] || {},
            s = e.elements[t];
        pt(s) && dt(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
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
          pt(n) && dt(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
            n.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };

  function _t(t) {
    return t.split("-")[0];
  }

  var bt = Math.round;

  function vt(t, e) {
    void 0 === e && (e = !1);
    var i = t.getBoundingClientRect(),
        n = 1,
        s = 1;

    if (pt(t) && e) {
      var o = t.offsetHeight,
          r = t.offsetWidth;
      r > 0 && (n = i.width / r || 1), o > 0 && (s = i.height / o || 1);
    }

    return {
      width: bt(i.width / n),
      height: bt(i.height / s),
      top: bt(i.top / s),
      right: bt(i.right / n),
      bottom: bt(i.bottom / s),
      left: bt(i.left / n),
      x: bt(i.left / n),
      y: bt(i.top / s)
    };
  }

  function yt(t) {
    var e = vt(t),
        i = t.offsetWidth,
        n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    };
  }

  function wt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;

    if (i && mt(i)) {
      var n = e;

      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }

    return !1;
  }

  function Et(t) {
    return ut(t).getComputedStyle(t);
  }

  function At(t) {
    return ["table", "td", "th"].indexOf(dt(t)) >= 0;
  }

  function Tt(t) {
    return ((ft(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }

  function Ot(t) {
    return "html" === dt(t) ? t : t.assignedSlot || t.parentNode || (mt(t) ? t.host : null) || Tt(t);
  }

  function Ct(t) {
    return pt(t) && "fixed" !== Et(t).position ? t.offsetParent : null;
  }

  function kt(t) {
    for (var e = ut(t), i = Ct(t); i && At(i) && "static" === Et(i).position;) {
      i = Ct(i);
    }

    return i && ("html" === dt(i) || "body" === dt(i) && "static" === Et(i).position) ? e : i || function (t) {
      var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 !== navigator.userAgent.indexOf("Trident") && pt(t) && "fixed" === Et(t).position) return null;

      for (var i = Ot(t); pt(i) && ["html", "body"].indexOf(dt(i)) < 0;) {
        var n = Et(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }

      return null;
    }(t) || e;
  }

  function Lt(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }

  var xt = Math.max,
      Dt = Math.min,
      St = Math.round;

  function Nt(t, e, i) {
    return xt(t, Dt(e, i));
  }

  function It(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }

  function Pt(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }

  var jt = {
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
          a = _t(i.placement),
          l = Lt(a),
          c = [ot, st].indexOf(a) >= 0 ? "height" : "width";

      if (o && r) {
        var h = function (t, e) {
          return It("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
          })) : t) ? t : Pt(t, rt));
        }(s.padding, i),
            d = yt(o),
            u = "y" === l ? it : ot,
            f = "y" === l ? nt : st,
            p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
            m = r[l] - i.rects.reference[l],
            g = kt(o),
            _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
            b = p / 2 - m / 2,
            v = h[u],
            y = _ - d[c] - h[f],
            w = _ / 2 - d[c] / 2 + b,
            E = Nt(v, w, y),
            A = l;

        i.modifiersData[n] = ((e = {})[A] = E, e.centerOffset = E - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
          i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && wt(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  function Mt(t) {
    return t.split("-")[1];
  }

  var Ht = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function Bt(t) {
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
        d = !0 === h ? function (t) {
      var e = t.x,
          i = t.y,
          n = window.devicePixelRatio || 1;
      return {
        x: St(St(e * n) / n) || 0,
        y: St(St(i * n) / n) || 0
      };
    }(r) : "function" == typeof h ? h(r) : r,
        u = d.x,
        f = void 0 === u ? 0 : u,
        p = d.y,
        m = void 0 === p ? 0 : p,
        g = r.hasOwnProperty("x"),
        _ = r.hasOwnProperty("y"),
        b = ot,
        v = it,
        y = window;

    if (c) {
      var w = kt(i),
          E = "clientHeight",
          A = "clientWidth";
      w === ut(i) && "static" !== Et(w = Tt(i)).position && "absolute" === a && (E = "scrollHeight", A = "scrollWidth"), w = w, s !== it && (s !== ot && s !== st || o !== at) || (v = nt, m -= w[E] - n.height, m *= l ? 1 : -1), s !== ot && (s !== it && s !== nt || o !== at) || (b = st, f -= w[A] - n.width, f *= l ? 1 : -1);
    }

    var T,
        O = Object.assign({
      position: a
    }, c && Ht);
    return l ? Object.assign({}, O, ((T = {})[v] = _ ? "0" : "", T[b] = g ? "0" : "", T.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", T)) : Object.assign({}, O, ((e = {})[v] = _ ? m + "px" : "", e[b] = g ? f + "px" : "", e.transform = "", e));
  }

  var Rt = {
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
        placement: _t(e.placement),
        variation: Mt(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: s
      };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Bt(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Bt(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
      });
    },
    data: {}
  },
      Wt = {
    passive: !0
  },
      zt = {
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
          l = ut(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, Wt);
      }), a && l.addEventListener("resize", i.update, Wt), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, Wt);
        }), a && l.removeEventListener("resize", i.update, Wt);
      };
    },
    data: {}
  },
      qt = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function Ft(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return qt[t];
    });
  }

  var Ut = {
    start: "end",
    end: "start"
  };

  function $t(t) {
    return t.replace(/start|end/g, function (t) {
      return Ut[t];
    });
  }

  function Vt(t) {
    var e = ut(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function Kt(t) {
    return vt(Tt(t)).left + Vt(t).scrollLeft;
  }

  function Xt(t) {
    var e = Et(t),
        i = e.overflow,
        n = e.overflowX,
        s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }

  function Yt(t, e) {
    var i;
    void 0 === e && (e = []);

    var n = function t(e) {
      return ["html", "body", "#document"].indexOf(dt(e)) >= 0 ? e.ownerDocument.body : pt(e) && Xt(e) ? e : t(Ot(e));
    }(t),
        s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = ut(n),
        r = s ? [o].concat(o.visualViewport || [], Xt(n) ? n : []) : n,
        a = e.concat(r);

    return s ? a : a.concat(Yt(Ot(r)));
  }

  function Qt(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }

  function Gt(t, e) {
    return "viewport" === e ? Qt(function (t) {
      var e = ut(t),
          i = Tt(t),
          n = e.visualViewport,
          s = i.clientWidth,
          o = i.clientHeight,
          r = 0,
          a = 0;
      return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
        width: s,
        height: o,
        x: r + Kt(t),
        y: a
      };
    }(t)) : pt(e) ? function (t) {
      var e = vt(t);
      return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
    }(e) : Qt(function (t) {
      var e,
          i = Tt(t),
          n = Vt(t),
          s = null == (e = t.ownerDocument) ? void 0 : e.body,
          o = xt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
          r = xt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
          a = -n.scrollLeft + Kt(t),
          l = -n.scrollTop;
      return "rtl" === Et(s || i).direction && (a += xt(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(Tt(t)));
  }

  function Zt(t) {
    var e,
        i = t.reference,
        n = t.element,
        s = t.placement,
        o = s ? _t(s) : null,
        r = s ? Mt(s) : null,
        a = i.x + i.width / 2 - n.width / 2,
        l = i.y + i.height / 2 - n.height / 2;

    switch (o) {
      case it:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;

      case nt:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;

      case st:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;

      case ot:
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

    var c = o ? Lt(o) : null;

    if (null != c) {
      var h = "y" === c ? "height" : "width";

      switch (r) {
        case "start":
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;

        case at:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }

    return e;
  }

  function Jt(t, e) {
    void 0 === e && (e = {});

    var i = e,
        n = i.placement,
        s = void 0 === n ? t.placement : n,
        o = i.boundary,
        r = void 0 === o ? "clippingParents" : o,
        a = i.rootBoundary,
        l = void 0 === a ? "viewport" : a,
        c = i.elementContext,
        h = void 0 === c ? "popper" : c,
        d = i.altBoundary,
        u = void 0 !== d && d,
        f = i.padding,
        p = void 0 === f ? 0 : f,
        m = It("number" != typeof p ? p : Pt(p, rt)),
        g = "popper" === h ? "reference" : "popper",
        _ = t.rects.popper,
        b = t.elements[u ? g : h],
        v = function (t, e, i) {
      var n = "clippingParents" === e ? function (t) {
        var e = Yt(Ot(t)),
            i = ["absolute", "fixed"].indexOf(Et(t).position) >= 0 && pt(t) ? kt(t) : t;
        return ft(i) ? e.filter(function (t) {
          return ft(t) && wt(t, i) && "body" !== dt(t);
        }) : [];
      }(t) : [].concat(e),
          s = [].concat(n, [i]),
          o = s[0],
          r = s.reduce(function (e, i) {
        var n = Gt(t, i);
        return e.top = xt(n.top, e.top), e.right = Dt(n.right, e.right), e.bottom = Dt(n.bottom, e.bottom), e.left = xt(n.left, e.left), e;
      }, Gt(t, o));
      return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
    }(ft(b) ? b : b.contextElement || Tt(t.elements.popper), r, l),
        y = vt(t.elements.reference),
        w = Zt({
      reference: y,
      element: _,
      strategy: "absolute",
      placement: s
    }),
        E = Qt(Object.assign({}, _, w)),
        A = "popper" === h ? E : y,
        T = {
      top: v.top - A.top + m.top,
      bottom: A.bottom - v.bottom + m.bottom,
      left: v.left - A.left + m.left,
      right: A.right - v.right + m.right
    },
        O = t.modifiersData.offset;

    if ("popper" === h && O) {
      var C = O[s];
      Object.keys(T).forEach(function (t) {
        var e = [st, nt].indexOf(t) >= 0 ? 1 : -1,
            i = [it, nt].indexOf(t) >= 0 ? "y" : "x";
        T[t] += C[i] * e;
      });
    }

    return T;
  }

  function te(t, e) {
    void 0 === e && (e = {});
    var i = e,
        n = i.placement,
        s = i.boundary,
        o = i.rootBoundary,
        r = i.padding,
        a = i.flipVariations,
        l = i.allowedAutoPlacements,
        c = void 0 === l ? ct : l,
        h = Mt(n),
        d = h ? a ? lt : lt.filter(function (t) {
      return Mt(t) === h;
    }) : rt,
        u = d.filter(function (t) {
      return c.indexOf(t) >= 0;
    });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return e[i] = Jt(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[_t(i)], e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }

  var ee = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name;

      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = _t(g), b = l || (_ !== g && p ? function (t) {
          if ("auto" === _t(t)) return [];
          var e = Ft(t);
          return [$t(t), e, $t(e)];
        }(g) : [Ft(g)]), v = [g].concat(b).reduce(function (t, i) {
          return t.concat("auto" === _t(i) ? te(e, {
            placement: i,
            boundary: h,
            rootBoundary: d,
            padding: c,
            flipVariations: p,
            allowedAutoPlacements: m
          }) : i);
        }, []), y = e.rects.reference, w = e.rects.popper, E = new Map(), A = !0, T = v[0], O = 0; O < v.length; O++) {
          var C = v[O],
              k = _t(C),
              L = "start" === Mt(C),
              x = [it, nt].indexOf(k) >= 0,
              D = x ? "width" : "height",
              S = Jt(e, {
            placement: C,
            boundary: h,
            rootBoundary: d,
            altBoundary: u,
            padding: c
          }),
              N = x ? L ? st : ot : L ? nt : it;

          y[D] > w[D] && (N = Ft(N));
          var I = Ft(N),
              P = [];

          if (o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[I] <= 0), P.every(function (t) {
            return t;
          })) {
            T = C, A = !1;
            break;
          }

          E.set(C, P);
        }

        if (A) for (var j = function j(t) {
          var e = v.find(function (e) {
            var i = E.get(e);
            if (i) return i.slice(0, t).every(function (t) {
              return t;
            });
          });
          if (e) return T = e, "break";
        }, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--) {
          ;
        }
        e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function ie(t, e, i) {
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

  function ne(t) {
    return [it, st, nt, ot].some(function (e) {
      return t[e] >= 0;
    });
  }

  var se = {
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
          r = Jt(e, {
        elementContext: "reference"
      }),
          a = Jt(e, {
        altBoundary: !0
      }),
          l = ie(r, n),
          c = ie(a, s, o),
          h = ne(l),
          d = ne(c);
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
      oe = {
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
          r = ct.reduce(function (t, i) {
        return t[i] = function (t, e, i) {
          var n = _t(t),
              s = [ot, it].indexOf(n) >= 0 ? -1 : 1,
              o = "function" == typeof i ? i(Object.assign({}, e, {
            placement: t
          })) : i,
              r = o[0],
              a = o[1];

          return r = r || 0, a = (a || 0) * s, [ot, st].indexOf(n) >= 0 ? {
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
      re = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(t) {
      var e = t.state,
          i = t.name;
      e.modifiersData[i] = Zt({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
      });
    },
    data: {}
  },
      ae = {
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
          g = Jt(e, {
        boundary: l,
        rootBoundary: c,
        padding: d,
        altBoundary: h
      }),
          _ = _t(e.placement),
          b = Mt(e.placement),
          v = !b,
          y = Lt(_),
          w = "x" === y ? "y" : "x",
          E = e.modifiersData.popperOffsets,
          A = e.rects.reference,
          T = e.rects.popper,
          O = "function" == typeof m ? m(Object.assign({}, e.rects, {
        placement: e.placement
      })) : m,
          C = {
        x: 0,
        y: 0
      };

      if (E) {
        if (o || a) {
          var k = "y" === y ? it : ot,
              L = "y" === y ? nt : st,
              x = "y" === y ? "height" : "width",
              D = E[y],
              S = E[y] + g[k],
              N = E[y] - g[L],
              I = f ? -T[x] / 2 : 0,
              P = "start" === b ? A[x] : T[x],
              j = "start" === b ? -T[x] : -A[x],
              M = e.elements.arrow,
              H = f && M ? yt(M) : {
            width: 0,
            height: 0
          },
              B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
              R = B[k],
              W = B[L],
              z = Nt(0, A[x], H[x]),
              q = v ? A[x] / 2 - I - z - R - O : P - z - R - O,
              F = v ? -A[x] / 2 + I + z + W + O : j + z + W + O,
              U = e.elements.arrow && kt(e.elements.arrow),
              $ = U ? "y" === y ? U.clientTop || 0 : U.clientLeft || 0 : 0,
              V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
              K = E[y] + q - V - $,
              X = E[y] + F - V;

          if (o) {
            var Y = Nt(f ? Dt(S, K) : S, D, f ? xt(N, X) : N);
            E[y] = Y, C[y] = Y - D;
          }

          if (a) {
            var Q = "x" === y ? it : ot,
                G = "x" === y ? nt : st,
                Z = E[w],
                J = Z + g[Q],
                tt = Z - g[G],
                et = Nt(f ? Dt(J, K) : J, Z, f ? xt(tt, X) : tt);
            E[w] = et, C[w] = et - Z;
          }
        }

        e.modifiersData[n] = C;
      }
    },
    requiresIfExists: ["offset"]
  };

  function le(t, e, i) {
    void 0 === i && (i = !1);

    var n,
        s,
        o = pt(e),
        r = pt(e) && function (t) {
      var e = t.getBoundingClientRect(),
          i = e.width / t.offsetWidth || 1,
          n = e.height / t.offsetHeight || 1;
      return 1 !== i || 1 !== n;
    }(e),
        a = Tt(e),
        l = vt(t, r),
        c = {
      scrollLeft: 0,
      scrollTop: 0
    },
        h = {
      x: 0,
      y: 0
    };

    return (o || !o && !i) && (("body" !== dt(e) || Xt(a)) && (c = (n = e) !== ut(n) && pt(n) ? {
      scrollLeft: (s = n).scrollLeft,
      scrollTop: s.scrollTop
    } : Vt(n)), pt(e) ? ((h = vt(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Kt(a))), {
      x: l.left + c.scrollLeft - h.x,
      y: l.top + c.scrollTop - h.y,
      width: l.width,
      height: l.height
    };
  }

  var ce = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function he() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }

  function de(t) {
    void 0 === t && (t = {});
    var e = t,
        i = e.defaultModifiers,
        n = void 0 === i ? [] : i,
        s = e.defaultOptions,
        o = void 0 === s ? ce : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
          r,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ce, o),
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
            reference: ft(t) ? Yt(t) : t.contextElement ? Yt(t.contextElement) : [],
            popper: Yt(e)
          };

          var r,
              c,
              u = function (t) {
            var e = function (t) {
              var e = new Map(),
                  i = new Set(),
                  n = [];
              return t.forEach(function (t) {
                e.set(t.name, t);
              }), t.forEach(function (t) {
                i.has(t.name) || function t(s) {
                  i.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach(function (n) {
                    if (!i.has(n)) {
                      var s = e.get(n);
                      s && t(s);
                    }
                  }), n.push(s);
                }(t);
              }), n;
            }(t);

            return ht.reduce(function (t, i) {
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

            if (he(e, i)) {
              a.rects = {
                reference: le(e, kt(i), "fixed" === a.options.strategy),
                popper: yt(i)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data);
              });

              for (var n = 0; n < a.orderedModifiers.length; n++) {
                if (!0 !== a.reset) {
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
      if (!he(t, e)) return h;

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

  var ue = de(),
      fe = de({
    defaultModifiers: [zt, re, Rt, gt]
  }),
      pe = de({
    defaultModifiers: [zt, re, Rt, gt, oe, ee, ae, jt, se]
  }),
      me = Object.freeze({
    __proto__: null,
    popperGenerator: de,
    detectOverflow: Jt,
    createPopperBase: ue,
    createPopper: pe,
    createPopperLite: fe,
    top: it,
    bottom: nt,
    right: st,
    left: ot,
    auto: "auto",
    basePlacements: rt,
    start: "start",
    end: at,
    clippingParents: "clippingParents",
    viewport: "viewport",
    popper: "popper",
    reference: "reference",
    variationPlacements: lt,
    placements: ct,
    beforeRead: "beforeRead",
    read: "read",
    afterRead: "afterRead",
    beforeMain: "beforeMain",
    main: "main",
    afterMain: "afterMain",
    beforeWrite: "beforeWrite",
    write: "write",
    afterWrite: "afterWrite",
    modifierPhases: ht,
    applyStyles: gt,
    arrow: jt,
    computeStyles: Rt,
    eventListeners: zt,
    flip: ee,
    hide: se,
    offset: oe,
    popperOffsets: re,
    preventOverflow: ae
  });

  var ge = new RegExp("ArrowUp|ArrowDown|Escape"),
      _e = p() ? "top-end" : "top-start",
      be = p() ? "top-start" : "top-end",
      ve = p() ? "bottom-end" : "bottom-start",
      ye = p() ? "bottom-start" : "bottom-end",
      we = p() ? "left-start" : "right-start",
      Ee = p() ? "right-start" : "left-start",
      Ae = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: !0
  },
      Te = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)"
  };

  var Oe = /*#__PURE__*/function (_H5) {
    _inherits(Oe, _H5);

    var _super5 = _createSuper(Oe);

    function Oe(t, e) {
      var _this12;

      _classCallCheck(this, Oe);

      _this12 = _super5.call(this, t), _this12._popper = null, _this12._config = _this12._getConfig(e), _this12._menu = _this12._getMenuElement(), _this12._inNavbar = _this12._detectNavbar();
      return _this12;
    }

    _createClass(Oe, [{
      key: "toggle",
      value: function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _ref4;

        if (l(this._element) || this._isShown(this._menu)) return;
        var t = {
          relatedTarget: this._element
        };
        if (P.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return;
        var e = Oe.getParentFromElement(this._element);
        this._inNavbar ? F.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (t) {
          return P.on(t, "mouseover", h);
        }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add("show"), this._element.classList.add("show"), P.trigger(this._element, "shown.bs.dropdown", t);
      }
    }, {
      key: "hide",
      value: function hide() {
        if (l(this._element) || !this._isShown(this._menu)) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(Oe.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        var _ref5;

        P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children)).forEach(function (t) {
          return P.off(t, "mouseover", h);
        }), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), F.getDataAttributes(this._element)), t), r("dropdown", t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !s(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
        return t;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(t) {
        if (void 0 === me) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        var e = this._element;
        "parent" === this._config.reference ? e = t : s(this._config.reference) ? e = o(this._config.reference) : "object" == _typeof(this._config.reference) && (e = this._config.reference);

        var i = this._getPopperConfig(),
            n = i.modifiers.find(function (t) {
          return "applyStyles" === t.name && !1 === t.enabled;
        });

        this._popper = pe(e, this._menu, i), n && F.setDataAttribute(this._menu, "popper", "static");
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains("show");
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return U.next(this._element, ".dropdown-menu")[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return we;
        if (t.classList.contains("dropstart")) return Ee;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? be : _e : e ? ye : ve;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this13 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this13._element);
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
        return "static" === this._config.display && (t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, t), "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var t = _ref6.key,
            e = _ref6.target;
        var i = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(a);
        i.length && b(i, e, "ArrowDown" === t, !i.includes(e)).focus();
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ae;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Te;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "dropdown";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Oe.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
        var e = U.find('[data-bs-toggle="dropdown"]');

        for (var _i8 = 0, _n6 = e.length; _i8 < _n6; _i8++) {
          var _n7 = Oe.getInstance(e[_i8]);

          if (!_n7 || !1 === _n7._config.autoClose) continue;
          if (!_n7._isShown()) continue;
          var _s3 = {
            relatedTarget: _n7._element
          };

          if (t) {
            var _e10 = t.composedPath(),
                _i9 = _e10.includes(_n7._menu);

            if (_e10.includes(_n7._element) || "inside" === _n7._config.autoClose && !_i9 || "outside" === _n7._config.autoClose && _i9) continue;
            if (_n7._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            "click" === t.type && (_s3.clickEvent = t);
          }

          _n7._completeHide(_s3);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(t) {
        return i(t) || t.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !ge.test(t.key)) return;
        var e = this.classList.contains("show");
        if (!e && "Escape" === t.key) return;
        if (t.preventDefault(), t.stopPropagation(), l(this)) return;
        var i = this.matches('[data-bs-toggle="dropdown"]') ? this : U.prev(this, '[data-bs-toggle="dropdown"]')[0],
            n = Oe.getOrCreateInstance(i);
        if ("Escape" !== t.key) return "ArrowUp" === t.key || "ArrowDown" === t.key ? (e || n.show(), void n._selectMenuItem(t)) : void (e && "Space" !== t.key || Oe.clearMenus());
        n.hide();
      }
    }]);

    return Oe;
  }(H);

  P.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Oe.dataApiKeydownHandler), P.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Oe.dataApiKeydownHandler), P.on(document, "click.bs.dropdown.data-api", Oe.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", Oe.clearMenus), P.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    t.preventDefault(), Oe.getOrCreateInstance(this).toggle();
  }), m(Oe);

  var Ce = /*#__PURE__*/function () {
    function Ce() {
      _classCallCheck(this, Ce);

      this._element = document.body;
    }

    _createClass(Ce, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", function (e) {
          return e + t;
        }), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", function (e) {
          return e + t;
        }), this._setElementAttributes(".sticky-top", "marginRight", function (e) {
          return e - t;
        });
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, i) {
        var _this14 = this;

        var n = this.getWidth();

        this._applyManipulationCallback(t, function (t) {
          if (t !== _this14._element && window.innerWidth > t.clientWidth + n) return;

          _this14._saveInitialAttribute(t, e);

          var s = window.getComputedStyle(t)[e];
          t.style[e] = i(Number.parseFloat(s)) + "px";
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight");
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var i = t.style[e];
        i && F.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = F.getDataAttribute(t, e);
          void 0 === i ? t.style.removeProperty(e) : (F.removeDataAttribute(t, e), t.style[e] = i);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(t, e) {
        s(t) ? e(t) : U.find(t, this._element).forEach(e);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }]);

    return Ce;
  }();

  var ke = {
    className: "modal-backdrop",
    isVisible: !0,
    isAnimated: !1,
    rootElement: "body",
    clickCallback: null
  },
      Le = {
    className: "string",
    isVisible: "boolean",
    isAnimated: "boolean",
    rootElement: "(element|string)",
    clickCallback: "(function|null)"
  };

  var xe = /*#__PURE__*/function () {
    function xe(t) {
      _classCallCheck(this, xe);

      this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
    }

    _createClass(xe, [{
      key: "show",
      value: function show(t) {
        this._config.isVisible ? (this._append(), this._config.isAnimated && d(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(function () {
          g(t);
        })) : g(t);
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this15 = this;

        this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(function () {
          _this15.dispose(), g(t);
        })) : g(t);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t10 = document.createElement("div");

          _t10.className = this._config.className, this._config.isAnimated && _t10.classList.add("fade"), this._element = _t10;
        }

        return this._element;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread({}, ke), "object" == _typeof(t) ? t : {})).rootElement = o(t.rootElement), r("backdrop", t, Le), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this16 = this;

        this._isAppended || (this._config.rootElement.append(this._getElement()), P.on(this._getElement(), "mousedown.bs.backdrop", function () {
          g(_this16._config.clickCallback);
        }), this._isAppended = !0);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (P.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = !1);
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        _(t, this._getElement(), this._config.isAnimated);
      }
    }]);

    return xe;
  }();

  var De = {
    trapElement: null,
    autofocus: !0
  },
      Se = {
    trapElement: "element",
    autofocus: "boolean"
  };

  var Ne = /*#__PURE__*/function () {
    function Ne(t) {
      _classCallCheck(this, Ne);

      this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
    }

    _createClass(Ne, [{
      key: "activate",
      value: function activate() {
        var _this17 = this;

        var _this$_config = this._config,
            t = _this$_config.trapElement,
            e = _this$_config.autofocus;
        this._isActive || (e && t.focus(), P.off(document, ".bs.focustrap"), P.on(document, "focusin.bs.focustrap", function (t) {
          return _this17._handleFocusin(t);
        }), P.on(document, "keydown.tab.bs.focustrap", function (t) {
          return _this17._handleKeydown(t);
        }), this._isActive = !0);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._isActive && (this._isActive = !1, P.off(document, ".bs.focustrap"));
      }
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(t) {
        var e = t.target,
            i = this._config.trapElement;
        if (e === document || e === i || i.contains(e)) return;
        var n = U.focusableChildren(i);
        0 === n.length ? i.focus() : "backward" === this._lastTabNavDirection ? n[n.length - 1].focus() : n[0].focus();
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(t) {
        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? "backward" : "forward");
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread({}, De), "object" == _typeof(t) ? t : {}), r("focustrap", t, Se), t;
      }
    }]);

    return Ne;
  }();

  var Ie = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      Pe = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  };

  var je = /*#__PURE__*/function (_H6) {
    _inherits(je, _H6);

    var _super6 = _createSuper(je);

    function je(t, e) {
      var _this18;

      _classCallCheck(this, je);

      _this18 = _super6.call(this, t), _this18._config = _this18._getConfig(e), _this18._dialog = U.findOne(".modal-dialog", _this18._element), _this18._backdrop = _this18._initializeBackDrop(), _this18._focustrap = _this18._initializeFocusTrap(), _this18._isShown = !1, _this18._ignoreBackdropClick = !1, _this18._isTransitioning = !1, _this18._scrollBar = new Ce();
      return _this18;
    }

    _createClass(je, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this19 = this;

        this._isShown || this._isTransitioning || P.trigger(this._element, "show.bs.modal", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), P.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
          P.one(_this19._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === _this19._element && (_this19._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return _this19._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this20 = this;

        if (!this._isShown || this._isTransitioning) return;
        if (P.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;

        var t = this._isAnimated();

        t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), P.off(this._element, "click.dismiss.bs.modal"), P.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(function () {
          return _this20._hideModal();
        }, this._element, t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._dialog].forEach(function (t) {
          return P.off(t, ".bs.modal");
        }), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(je.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new xe({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Ne({
          trapElement: this._element
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Ie), F.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), r("modal", t, Pe), t;
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this21 = this;

        var e = this._isAnimated(),
            i = U.findOne(".modal-body", this._dialog);

        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && d(this._element), this._element.classList.add("show"), this._queueCallback(function () {
          _this21._config.focus && _this21._focustrap.activate(), _this21._isTransitioning = !1, P.trigger(_this21._element, "shown.bs.modal", {
            relatedTarget: t
          });
        }, this._dialog, e);
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this22 = this;

        this._isShown ? P.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          _this22._config.keyboard && "Escape" === t.key ? (t.preventDefault(), _this22.hide()) : _this22._config.keyboard || "Escape" !== t.key || _this22._triggerBackdropTransition();
        }) : P.off(this._element, "keydown.dismiss.bs.modal");
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this23 = this;

        this._isShown ? P.on(window, "resize.bs.modal", function () {
          return _this23._adjustDialog();
        }) : P.off(window, "resize.bs.modal");
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this24 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove("modal-open"), _this24._resetAdjustments(), _this24._scrollBar.reset(), P.trigger(_this24._element, "hidden.bs.modal");
        });
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(t) {
        var _this25 = this;

        P.on(this._element, "click.dismiss.bs.modal", function (t) {
          _this25._ignoreBackdropClick ? _this25._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === _this25._config.backdrop ? _this25.hide() : "static" === _this25._config.backdrop && _this25._triggerBackdropTransition());
        }), this._backdrop.show(t);
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this26 = this;

        if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var _this$_element = this._element,
            t = _this$_element.classList,
            e = _this$_element.scrollHeight,
            i = _this$_element.style,
            n = e > document.documentElement.clientHeight;
        !n && "hidden" === i.overflowY || t.contains("modal-static") || (n || (i.overflowY = "hidden"), t.add("modal-static"), this._queueCallback(function () {
          t.remove("modal-static"), n || _this26._queueCallback(function () {
            i.overflowY = "";
          }, _this26._dialog);
        }, this._dialog), this._element.focus());
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            i = e > 0;

        (!i && t && !p() || i && !t && p()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !p() || !i && t && p()) && (this._element.style.paddingRight = e + "px");
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ie;
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
          var i = je.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }]);

    return je;
  }(H);

  P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this27 = this;

    var e = i(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), P.one(e, "show.bs.modal", function (t) {
      t.defaultPrevented || P.one(e, "hidden.bs.modal", function () {
        a(_this27) && _this27.focus();
      });
    });
    var n = U.findOne(".modal.show");
    n && je.getInstance(n).hide(), je.getOrCreateInstance(e).toggle(this);
  }), B(je), m(je);
  var Me = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      He = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var Be = /*#__PURE__*/function (_H7) {
    _inherits(Be, _H7);

    var _super7 = _createSuper(Be);

    function Be(t, e) {
      var _this28;

      _classCallCheck(this, Be);

      _this28 = _super7.call(this, t), _this28._config = _this28._getConfig(e), _this28._isShown = !1, _this28._backdrop = _this28._initializeBackDrop(), _this28._focustrap = _this28._initializeFocusTrap(), _this28._addEventListeners();
      return _this28;
    }

    _createClass(Be, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this29 = this;

        this._isShown || P.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new Ce().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(function () {
          _this29._config.scroll || _this29._focustrap.activate(), P.trigger(_this29._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this30 = this;

        this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(function () {
          _this30._element.setAttribute("aria-hidden", !0), _this30._element.removeAttribute("aria-modal"), _this30._element.removeAttribute("role"), _this30._element.style.visibility = "hidden", _this30._config.scroll || new Ce().reset(), P.trigger(_this30._element, "hidden.bs.offcanvas");
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Be.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Me), F.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), r("offcanvas", t, He), t;
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this31 = this;

        return new xe({
          className: "offcanvas-backdrop",
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: function clickCallback() {
            return _this31.hide();
          }
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Ne({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this32 = this;

        P.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          _this32._config.keyboard && "Escape" === t.key && _this32.hide();
        });
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }, {
      key: "Default",
      get: function get() {
        return Me;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Be.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return Be;
  }(H);

  P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this33 = this;

    var e = i(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
    P.one(e, "hidden.bs.offcanvas", function () {
      a(_this33) && _this33.focus();
    });
    var n = U.findOne(".offcanvas.show");
    n && n !== e && Be.getInstance(n).hide(), Be.getOrCreateInstance(e).toggle(this);
  }), P.on(window, "load.bs.offcanvas.data-api", function () {
    return U.find(".offcanvas.show").forEach(function (t) {
      return Be.getOrCreateInstance(t).show();
    });
  }), B(Be), m(Be);

  var Re = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      We = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      ze = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      qe = function qe(t, e) {
    var i = t.nodeName.toLowerCase();
    if (e.includes(i)) return !Re.has(i) || Boolean(We.test(t.nodeValue) || ze.test(t.nodeValue));
    var n = e.filter(function (t) {
      return t instanceof RegExp;
    });

    for (var _t11 = 0, _e11 = n.length; _t11 < _e11; _t11++) {
      if (n[_t11].test(i)) return !0;
    }

    return !1;
  };

  function Fe(t, e, i) {
    var _ref7;

    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);

    var n = new window.DOMParser().parseFromString(t, "text/html"),
        s = Object.keys(e),
        o = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(n.body.querySelectorAll("*")));

    var _loop = function _loop(_t12, _i10) {
      var _ref8;

      var i = o[_t12],
          n = i.nodeName.toLowerCase();

      if (!s.includes(n)) {
        i.remove();
        return "continue";
      }

      var r = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(i.attributes)),
          a = [].concat(e["*"] || [], e[n] || []);

      r.forEach(function (t) {
        qe(t, a) || i.removeAttribute(t.nodeName);
      });
    };

    for (var _t12 = 0, _i10 = o.length; _t12 < _i10; _t12++) {
      var _ret = _loop(_t12, _i10);

      if (_ret === "continue") continue;
    }

    return n.body.innerHTML;
  }

  var Ue = new Set(["sanitize", "allowList", "sanitizeFn"]),
      $e = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)"
  },
      Ve = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: p() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: p() ? "right" : "left"
  },
      Ke = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: !0,
    sanitizeFn: null,
    allowList: {
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
    popperConfig: null
  },
      Xe = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  };

  var Ye = /*#__PURE__*/function (_H8) {
    _inherits(Ye, _H8);

    var _super8 = _createSuper(Ye);

    function Ye(t, e) {
      var _this34;

      _classCallCheck(this, Ye);

      if (void 0 === me) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this34 = _super8.call(this, t), _this34._isEnabled = !0, _this34._timeout = 0, _this34._hoverState = "", _this34._activeTrigger = {}, _this34._popper = null, _this34._config = _this34._getConfig(e), _this34.tip = null, _this34._setListeners();
      return _this34;
    }

    _createClass(Ye, [{
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
      value: function toggle(t) {
        if (this._isEnabled) if (t) {
          var _e12 = this._initializeOnDelegatedTarget(t);

          _e12._activeTrigger.click = !_e12._activeTrigger.click, _e12._isWithActiveTrigger() ? _e12._enter(null, _e12) : _e12._leave(null, _e12);
        } else {
          if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), P.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), _get(_getPrototypeOf(Ye.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _n$classList,
            _ref9,
            _this35 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        var t = P.trigger(this._element, this.constructor.Event.SHOW),
            e = c(this._element),
            i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
        if (t.defaultPrevented || !i) return;
        "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(".tooltip-inner").innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);

        var n = this.getTipElement(),
            s = function (t) {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));

          return t;
        }(this.constructor.NAME);

        n.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && n.classList.add("fade");

        var o = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement,
            r = this._getAttachment(o);

        this._addAttachmentClass(r);

        var a = this._config.container;
        M.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(n), P.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = pe(this._element, n, this._getPopperConfig(r)), n.classList.add("show");

        var l = this._resolvePossibleFunction(this._config.customClass);

        l && (_n$classList = n.classList).add.apply(_n$classList, _toConsumableArray(l.split(" "))), "ontouchstart" in document.documentElement && (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children)).forEach(function (t) {
          P.on(t, "mouseover", h);
        });
        var d = this.tip.classList.contains("fade");

        this._queueCallback(function () {
          var t = _this35._hoverState;
          _this35._hoverState = null, P.trigger(_this35._element, _this35.constructor.Event.SHOWN), "out" === t && _this35._leave(null, _this35);
        }, this.tip, d);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _ref10,
            _this36 = this;

        if (!this._popper) return;
        var t = this.getTipElement();
        if (P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
        t.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children)).forEach(function (t) {
          return P.off(t, "mouseover", h);
        }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
        var e = this.tip.classList.contains("fade");
        this._queueCallback(function () {
          _this36._isWithActiveTrigger() || ("show" !== _this36._hoverState && t.remove(), _this36._cleanTipClass(), _this36._element.removeAttribute("aria-describedby"), P.trigger(_this36._element, _this36.constructor.Event.HIDDEN), _this36._disposePopper());
        }, this.tip, e), this._hoverState = "";
      }
    }, {
      key: "update",
      value: function update() {
        null !== this._popper && this._popper.update();
      }
    }, {
      key: "isWithContent",
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        if (this.tip) return this.tip;
        var t = document.createElement("div");
        t.innerHTML = this._config.template;
        var e = t.children[0];
        return this.setContent(e), e.classList.remove("fade", "show"), this.tip = e, this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._sanitizeAndSetContent(t, this.getTitle(), ".tooltip-inner");
      }
    }, {
      key: "_sanitizeAndSetContent",
      value: function _sanitizeAndSetContent(t, e, i) {
        var n = U.findOne(i, t);
        e || !n ? this.setElementContent(n, e) : n.remove();
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(t, e) {
        if (null !== t) return s(e) ? (e = o(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = Fe(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var t = this._element.getAttribute("data-bs-original-title") || this._config.title;

        return this._resolvePossibleFunction(t);
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t, e) {
        return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this37 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this37._element);
        } : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return "function" == typeof t ? t.call(this._element) : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this38 = this;

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
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: function fn(t) {
              return _this38._handlePopperPlacementChange(t);
            }
          }],
          onFirstUpdate: function onFirstUpdate(t) {
            t.options.placement !== t.placement && _this38._handlePopperPlacementChange(t);
          }
        };
        return _objectSpread(_objectSpread({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(t)));
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(t) {
        return Ve[t.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this39 = this;

        this._config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) P.on(_this39._element, _this39.constructor.Event.CLICK, _this39._config.selector, function (t) {
            return _this39.toggle(t);
          });else if ("manual" !== t) {
            var _e13 = "hover" === t ? _this39.constructor.Event.MOUSEENTER : _this39.constructor.Event.FOCUSIN,
                _i11 = "hover" === t ? _this39.constructor.Event.MOUSELEAVE : _this39.constructor.Event.FOCUSOUT;

            P.on(_this39._element, _e13, _this39._config.selector, function (t) {
              return _this39._enter(t);
            }), P.on(_this39._element, _i11, _this39._config.selector, function (t) {
              return _this39._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          _this39._element && _this39.hide();
        }, P.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = _objectSpread(_objectSpread({}, this._config), {}, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title"),
            e = _typeof(this._element.getAttribute("data-bs-original-title"));

        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
      }
    }, {
      key: "_enter",
      value: function _enter(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(function () {
          "show" === e._hoverState && e.show();
        }, e._config.delay.show) : e.show());
      }
    }, {
      key: "_leave",
      value: function _leave(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(function () {
          "out" === e._hoverState && e.hide();
        }, e._config.delay.hide) : e.hide());
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var _t13 in this._activeTrigger) {
          if (this._activeTrigger[_t13]) return !0;
        }

        return !1;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = F.getDataAttributes(this._element);
        return Object.keys(e).forEach(function (t) {
          Ue.has(t) && delete e[t];
        }), (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), e), "object" == _typeof(t) && t ? t : {})).container = !1 === t.container ? document.body : o(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), r("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = Fe(t.template, t.allowList, t.sanitizeFn)), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};

        for (var _e14 in this._config) {
          this.constructor.Default[_e14] !== this._config[_e14] && (t[_e14] = this._config[_e14]);
        }

        return t;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), "g"),
            i = t.getAttribute("class").match(e);
        null !== i && i.length > 0 && i.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }, {
      key: "_getBasicClassPrefix",
      value: function _getBasicClassPrefix() {
        return "bs-tooltip";
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null);
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ke;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "Event",
      get: function get() {
        return Xe;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return $e;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Ye.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Ye;
  }(H);

  m(Ye);

  var Qe = _objectSpread(_objectSpread({}, Ye.Default), {}, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Ge = _objectSpread(_objectSpread({}, Ye.DefaultType), {}, {
    content: "(string|element|function)"
  }),
      Ze = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  };

  var Je = /*#__PURE__*/function (_Ye) {
    _inherits(Je, _Ye);

    var _super9 = _createSuper(Je);

    function Je() {
      _classCallCheck(this, Je);

      return _super9.apply(this, arguments);
    }

    _createClass(Je, [{
      key: "isWithContent",
      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }, {
      key: "_getBasicClassPrefix",
      value: function _getBasicClassPrefix() {
        return "bs-popover";
      }
    }], [{
      key: "Default",
      get: function get() {
        return Qe;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return Ze;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ge;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Je.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Je;
  }(Ye);

  m(Je);
  var ti = {
    offset: 10,
    method: "auto",
    target: ""
  },
      ei = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      ii = ".nav-link, .list-group-item, .dropdown-item";

  var ni = /*#__PURE__*/function (_H9) {
    _inherits(ni, _H9);

    var _super10 = _createSuper(ni);

    function ni(t, e) {
      var _this40;

      _classCallCheck(this, ni);

      _this40 = _super10.call(this, t), _this40._scrollElement = "BODY" === _this40._element.tagName ? window : _this40._element, _this40._config = _this40._getConfig(e), _this40._offsets = [], _this40._targets = [], _this40._activeTarget = null, _this40._scrollHeight = 0, P.on(_this40._scrollElement, "scroll.bs.scrollspy", function () {
        return _this40._process();
      }), _this40.refresh(), _this40._process();
      return _this40;
    }

    _createClass(ni, [{
      key: "refresh",
      value: function refresh() {
        var _this41 = this;

        var t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            i = "auto" === this._config.method ? t : this._config.method,
            n = "position" === i ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), U.find(ii, this._config.target).map(function (t) {
          var s = e(t),
              o = s ? U.findOne(s) : null;

          if (o) {
            var _t14 = o.getBoundingClientRect();

            if (_t14.width || _t14.height) return [F[i](o).top + n, s];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          _this41._offsets.push(t[0]), _this41._targets.push(t[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        P.off(this._scrollElement, ".bs.scrollspy"), _get(_getPrototypeOf(ni.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread(_objectSpread({}, ti), F.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {})).target = o(t.target) || document.documentElement, r("scrollspy", t, ei), t;
      }
    }, {
      key: "_getScrollTop",
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }
    }, {
      key: "_getScrollHeight",
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: "_getOffsetHeight",
      value: function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }
    }, {
      key: "_process",
      value: function _process() {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            i = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= i) {
          var _t15 = this._targets[this._targets.length - 1];
          this._activeTarget !== _t15 && this._activate(_t15);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var _e15 = this._offsets.length; _e15--;) {
            this._activeTarget !== this._targets[_e15] && t >= this._offsets[_e15] && (void 0 === this._offsets[_e15 + 1] || t < this._offsets[_e15 + 1]) && this._activate(this._targets[_e15]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(t) {
        this._activeTarget = t, this._clear();
        var e = ii.split(",").map(function (e) {
          return "".concat(e, "[data-bs-target=\"").concat(t, "\"],").concat(e, "[href=\"").concat(t, "\"]");
        }),
            i = U.findOne(e.join(","), this._config.target);
        i.classList.add("active"), i.classList.contains("dropdown-item") ? U.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active") : U.parents(i, ".nav, .list-group").forEach(function (t) {
          U.prev(t, ".nav-link, .list-group-item").forEach(function (t) {
            return t.classList.add("active");
          }), U.prev(t, ".nav-item").forEach(function (t) {
            U.children(t, ".nav-link").forEach(function (t) {
              return t.classList.add("active");
            });
          });
        }), P.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        U.find(ii, this._config.target).filter(function (t) {
          return t.classList.contains("active");
        }).forEach(function (t) {
          return t.classList.remove("active");
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return ti;
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
          var e = ni.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return ni;
  }(H);

  P.on(window, "load.bs.scrollspy.data-api", function () {
    U.find('[data-bs-spy="scroll"]').forEach(function (t) {
      return new ni(t);
    });
  }), m(ni);

  var si = /*#__PURE__*/function (_H10) {
    _inherits(si, _H10);

    var _super11 = _createSuper(si);

    function si() {
      _classCallCheck(this, si);

      return _super11.apply(this, arguments);
    }

    _createClass(si, [{
      key: "show",
      value: function show() {
        var _this42 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
        var t;

        var e = i(this._element),
            n = this._element.closest(".nav, .list-group");

        if (n) {
          var _e16 = "UL" === n.nodeName || "OL" === n.nodeName ? ":scope > li > .active" : ".active";

          t = U.find(_e16, n), t = t[t.length - 1];
        }

        var s = t ? P.trigger(t, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if (P.trigger(this._element, "show.bs.tab", {
          relatedTarget: t
        }).defaultPrevented || null !== s && s.defaultPrevented) return;

        this._activate(this._element, n);

        var o = function o() {
          P.trigger(t, "hidden.bs.tab", {
            relatedTarget: _this42._element
          }), P.trigger(_this42._element, "shown.bs.tab", {
            relatedTarget: t
          });
        };

        e ? this._activate(e, e.parentNode, o) : o();
      }
    }, {
      key: "_activate",
      value: function _activate(t, e, i) {
        var _this43 = this;

        var n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? U.children(e, ".active") : U.find(":scope > li > .active", e))[0],
            s = i && n && n.classList.contains("fade"),
            o = function o() {
          return _this43._transitionComplete(t, n, i);
        };

        n && s ? (n.classList.remove("show"), this._queueCallback(o, t, !0)) : o();
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(t, e, i) {
        if (e) {
          e.classList.remove("active");

          var _t16 = U.findOne(":scope > .dropdown-menu .active", e.parentNode);

          _t16 && _t16.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
        }

        t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), d(t), t.classList.contains("fade") && t.classList.add("show");
        var n = t.parentNode;

        if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
          var _e17 = t.closest(".dropdown");

          _e17 && U.find(".dropdown-toggle", _e17).forEach(function (t) {
            return t.classList.add("active");
          }), t.setAttribute("aria-expanded", !0);
        }

        i && i();
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
          var e = si.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return si;
  }(H);

  P.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || si.getOrCreateInstance(this).show();
  }), m(si);
  var oi = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      ri = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var ai = /*#__PURE__*/function (_H11) {
    _inherits(ai, _H11);

    var _super12 = _createSuper(ai);

    function ai(t, e) {
      var _this44;

      _classCallCheck(this, ai);

      _this44 = _super12.call(this, t), _this44._config = _this44._getConfig(e), _this44._timeout = null, _this44._hasMouseInteraction = !1, _this44._hasKeyboardInteraction = !1, _this44._setListeners();
      return _this44;
    }

    _createClass(ai, [{
      key: "show",
      value: function show() {
        var _this45 = this;

        P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), d(this._element), this._element.classList.add("show"), this._element.classList.add("showing"), this._queueCallback(function () {
          _this45._element.classList.remove("showing"), P.trigger(_this45._element, "shown.bs.toast"), _this45._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this46 = this;

        this._element.classList.contains("show") && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add("showing"), this._queueCallback(function () {
          _this46._element.classList.add("hide"), _this46._element.classList.remove("showing"), _this46._element.classList.remove("show"), P.trigger(_this46._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), _get(_getPrototypeOf(ai.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, ri), F.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {}), r("toast", t, this.constructor.DefaultType), t;
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this47 = this;

        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this47.hide();
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
        var _this48 = this;

        P.on(this._element, "mouseover.bs.toast", function (t) {
          return _this48._onInteraction(t, !0);
        }), P.on(this._element, "mouseout.bs.toast", function (t) {
          return _this48._onInteraction(t, !1);
        }), P.on(this._element, "focusin.bs.toast", function (t) {
          return _this48._onInteraction(t, !0);
        }), P.on(this._element, "focusout.bs.toast", function (t) {
          return _this48._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "DefaultType",
      get: function get() {
        return oi;
      }
    }, {
      key: "Default",
      get: function get() {
        return ri;
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
          var e = ai.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return ai;
  }(H);

  return B(ai), m(ai), {
    Alert: R,
    Button: W,
    Carousel: Z,
    Collapse: et,
    Dropdown: Oe,
    Modal: je,
    Offcanvas: Be,
    Popover: Je,
    ScrollSpy: ni,
    Tab: si,
    Toast: ai,
    Tooltip: Ye
  };
});
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).IMask = {});
}(this, function (t) {
  "use strict";

  var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = function n(t) {
    return t && t.Math == Math && t;
  },
      r = n("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) || n("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) || n("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) || n("object" == _typeof(e) && e) || function () {
    return this;
  }() || Function("return this")(),
      u = {},
      i = function i(t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  },
      a = !i(function () {
    return 7 != Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1];
  }),
      s = {},
      o = {}.propertyIsEnumerable,
      l = Object.getOwnPropertyDescriptor,
      h = l && !o.call({
    1: 2
  }, 1);

  s.f = h ? function (t) {
    var e = l(this, t);
    return !!e && e.enumerable;
  } : o;

  var c,
      f,
      p = function p(t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    };
  },
      d = {}.toString,
      v = function v(t) {
    return d.call(t).slice(8, -1);
  },
      g = "".split,
      k = i(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (t) {
    return "String" == v(t) ? g.call(t, "") : Object(t);
  } : Object,
      y = function y(t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t;
  },
      m = k,
      _ = y,
      b = function b(t) {
    return m(_(t));
  },
      A = function A(t) {
    return "object" == _typeof(t) ? null !== t : "function" == typeof t;
  },
      C = r,
      E = function E(t) {
    return "function" == typeof t ? t : void 0;
  },
      F = function F(t, e) {
    return arguments.length < 2 ? E(C[t]) : C[t] && C[t][e];
  },
      S = F("navigator", "userAgent") || "",
      D = r,
      w = S,
      B = D.process,
      M = D.Deno,
      x = B && B.versions || M && M.version,
      P = x && x.v8;

  P ? f = (c = P.split("."))[0] < 4 ? 1 : c[0] + c[1] : w && (!(c = w.match(/Edge\/(\d+)/)) || c[1] >= 74) && (c = w.match(/Chrome\/(\d+)/)) && (f = c[1]);

  var O = f && +f,
      T = i,
      I = !!Object.getOwnPropertySymbols && !T(function () {
    var t = Symbol();
    return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && O && O < 41;
  }),
      j = I && !Symbol.sham && "symbol" == _typeof(Symbol.iterator),
      V = F,
      R = j ? function (t) {
    return "symbol" == _typeof(t);
  } : function (t) {
    var e = V("Symbol");
    return "function" == typeof e && Object(t) instanceof e;
  },
      L = A,
      N = {
    exports: {}
  },
      U = r,
      z = function z(t, e) {
    try {
      Object.defineProperty(U, t, {
        value: e,
        configurable: !0,
        writable: !0
      });
    } catch (n) {
      U[t] = e;
    }

    return e;
  },
      H = z,
      Y = "__core-js_shared__",
      Z = r[Y] || H(Y, {}),
      K = Z;

  (N.exports = function (t, e) {
    return K[t] || (K[t] = void 0 !== e ? e : {});
  })("versions", []).push({
    version: "3.16.0",
    mode: "global",
    copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
  });

  var G = y,
      W = function W(t) {
    return Object(G(t));
  },
      $ = W,
      q = {}.hasOwnProperty,
      X = Object.hasOwn || function (t, e) {
    return q.call($(t), e);
  },
      J = 0,
      Q = Math.random(),
      tt = function tt(t) {
    return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++J + Q).toString(36);
  },
      et = r,
      nt = N.exports,
      rt = X,
      ut = tt,
      it = I,
      at = j,
      st = nt("wks"),
      ot = et.Symbol,
      lt = at ? ot : ot && ot.withoutSetter || ut,
      ht = A,
      ct = R,
      ft = function ft(t, e) {
    var n, r;
    if ("string" === e && "function" == typeof (n = t.toString) && !L(r = n.call(t))) return r;
    if ("function" == typeof (n = t.valueOf) && !L(r = n.call(t))) return r;
    if ("string" !== e && "function" == typeof (n = t.toString) && !L(r = n.call(t))) return r;
    throw TypeError("Can't convert object to primitive value");
  },
      pt = function (t) {
    return rt(st, t) && (it || "string" == typeof st[t]) || (it && rt(ot, t) ? st[t] = ot[t] : st[t] = lt("Symbol." + t)), st[t];
  }("toPrimitive"),
      dt = function dt(t, e) {
    if (!ht(t) || ct(t)) return t;
    var n,
        r = t[pt];

    if (void 0 !== r) {
      if (void 0 === e && (e = "default"), n = r.call(t, e), !ht(n) || ct(n)) return n;
      throw TypeError("Can't convert object to primitive value");
    }

    return void 0 === e && (e = "number"), ft(t, e);
  },
      vt = R,
      gt = function gt(t) {
    var e = dt(t, "string");
    return vt(e) ? e : String(e);
  },
      kt = A,
      yt = r.document,
      mt = kt(yt) && kt(yt.createElement),
      _t = function _t(t) {
    return mt ? yt.createElement(t) : {};
  },
      bt = !a && !i(function () {
    return 7 != Object.defineProperty(_t("div"), "a", {
      get: function get() {
        return 7;
      }
    }).a;
  }),
      At = a,
      Ct = s,
      Et = p,
      Ft = b,
      St = gt,
      Dt = X,
      wt = bt,
      Bt = Object.getOwnPropertyDescriptor;

  u.f = At ? Bt : function (t, e) {
    if (t = Ft(t), e = St(e), wt) try {
      return Bt(t, e);
    } catch (t) {}
    if (Dt(t, e)) return Et(!Ct.f.call(t, e), t[e]);
  };

  var Mt = {},
      xt = A,
      Pt = function Pt(t) {
    if (!xt(t)) throw TypeError(String(t) + " is not an object");
    return t;
  },
      Ot = a,
      Tt = bt,
      It = Pt,
      jt = gt,
      Vt = Object.defineProperty;

  Mt.f = Ot ? Vt : function (t, e, n) {
    if (It(t), e = jt(e), It(n), Tt) try {
      return Vt(t, e, n);
    } catch (t) {}
    if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
    return "value" in n && (t[e] = n.value), t;
  };
  var Rt = Mt,
      Lt = p,
      Nt = a ? function (t, e, n) {
    return Rt.f(t, e, Lt(1, n));
  } : function (t, e, n) {
    return t[e] = n, t;
  },
      Ut = {
    exports: {}
  },
      zt = Z,
      Ht = Function.toString;
  "function" != typeof zt.inspectSource && (zt.inspectSource = function (t) {
    return Ht.call(t);
  });

  var Yt,
      Zt,
      Kt,
      Gt = zt.inspectSource,
      Wt = Gt,
      $t = r.WeakMap,
      qt = "function" == typeof $t && /native code/.test(Wt($t)),
      Xt = N.exports,
      Jt = tt,
      Qt = Xt("keys"),
      te = {},
      ee = qt,
      ne = A,
      re = Nt,
      ue = X,
      ie = Z,
      ae = function ae(t) {
    return Qt[t] || (Qt[t] = Jt(t));
  },
      se = te,
      oe = "Object already initialized",
      le = r.WeakMap;

  if (ee || ie.state) {
    var he = ie.state || (ie.state = new le()),
        ce = he.get,
        fe = he.has,
        pe = he.set;
    Yt = function Yt(t, e) {
      if (fe.call(he, t)) throw new TypeError(oe);
      return e.facade = t, pe.call(he, t, e), e;
    }, Zt = function Zt(t) {
      return ce.call(he, t) || {};
    }, Kt = function Kt(t) {
      return fe.call(he, t);
    };
  } else {
    var de = ae("state");
    se[de] = !0, Yt = function Yt(t, e) {
      if (ue(t, de)) throw new TypeError(oe);
      return e.facade = t, re(t, de, e), e;
    }, Zt = function Zt(t) {
      return ue(t, de) ? t[de] : {};
    }, Kt = function Kt(t) {
      return ue(t, de);
    };
  }

  var ve = {
    set: Yt,
    get: Zt,
    has: Kt,
    enforce: function enforce(t) {
      return Kt(t) ? Zt(t) : Yt(t, {});
    },
    getterFor: function getterFor(t) {
      return function (e) {
        var n;
        if (!ne(e) || (n = Zt(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
        return n;
      };
    }
  },
      ge = r,
      ke = Nt,
      ye = X,
      me = z,
      _e = Gt,
      be = ve.get,
      Ae = ve.enforce,
      Ce = String(String).split("String");
  (Ut.exports = function (t, e, n, r) {
    var u,
        i = !!r && !!r.unsafe,
        a = !!r && !!r.enumerable,
        s = !!r && !!r.noTargetGet;
    "function" == typeof n && ("string" != typeof e || ye(n, "name") || ke(n, "name", e), (u = Ae(n)).source || (u.source = Ce.join("string" == typeof e ? e : ""))), t !== ge ? (i ? !s && t[e] && (a = !0) : delete t[e], a ? t[e] = n : ke(t, e, n)) : a ? t[e] = n : me(e, n);
  })(Function.prototype, "toString", function () {
    return "function" == typeof this && be(this).source || _e(this);
  });

  var Ee = {},
      Fe = Math.ceil,
      Se = Math.floor,
      De = function De(t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? Se : Fe)(t);
  },
      we = De,
      Be = Math.min,
      Me = function Me(t) {
    return t > 0 ? Be(we(t), 9007199254740991) : 0;
  },
      xe = De,
      Pe = Math.max,
      Oe = Math.min,
      Te = b,
      Ie = Me,
      je = function je(t, e) {
    var n = xe(t);
    return n < 0 ? Pe(n + e, 0) : Oe(n, e);
  },
      Ve = function Ve(t) {
    return function (e, n, r) {
      var u,
          i = Te(e),
          a = Ie(i.length),
          s = je(r, a);

      if (t && n != n) {
        for (; a > s;) {
          if ((u = i[s++]) != u) return !0;
        }
      } else for (; a > s; s++) {
        if ((t || s in i) && i[s] === n) return t || s || 0;
      }

      return !t && -1;
    };
  },
      Re = {
    includes: Ve(!0),
    indexOf: Ve(!1)
  },
      Le = X,
      Ne = b,
      Ue = Re.indexOf,
      ze = te,
      He = function He(t, e) {
    var n,
        r = Ne(t),
        u = 0,
        i = [];

    for (n in r) {
      !Le(ze, n) && Le(r, n) && i.push(n);
    }

    for (; e.length > u;) {
      Le(r, n = e[u++]) && (~Ue(i, n) || i.push(n));
    }

    return i;
  },
      Ye = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
      Ze = He,
      Ke = Ye.concat("length", "prototype");

  Ee.f = Object.getOwnPropertyNames || function (t) {
    return Ze(t, Ke);
  };

  var Ge = {};
  Ge.f = Object.getOwnPropertySymbols;

  var We = Ee,
      $e = Ge,
      qe = Pt,
      Xe = F("Reflect", "ownKeys") || function (t) {
    var e = We.f(qe(t)),
        n = $e.f;
    return n ? e.concat(n(t)) : e;
  },
      Je = X,
      Qe = Xe,
      tn = u,
      en = Mt,
      nn = i,
      rn = /#|\.prototype\./,
      un = function un(t, e) {
    var n = sn[an(t)];
    return n == ln || n != on && ("function" == typeof e ? nn(e) : !!e);
  },
      an = un.normalize = function (t) {
    return String(t).replace(rn, ".").toLowerCase();
  },
      sn = un.data = {},
      on = un.NATIVE = "N",
      ln = un.POLYFILL = "P",
      hn = un,
      cn = r,
      fn = u.f,
      pn = Nt,
      dn = Ut.exports,
      vn = z,
      gn = function gn(t, e) {
    for (var n = Qe(e), r = en.f, u = tn.f, i = 0; i < n.length; i++) {
      var a = n[i];
      Je(t, a) || r(t, a, u(e, a));
    }
  },
      kn = hn,
      yn = function yn(t, e) {
    var n,
        r,
        u,
        i,
        a,
        s = t.target,
        o = t.global,
        l = t.stat;
    if (n = o ? cn : l ? cn[s] || vn(s, {}) : (cn[s] || {}).prototype) for (r in e) {
      if (i = e[r], u = t.noTargetGet ? (a = fn(n, r)) && a.value : n[r], !kn(o ? r : s + (l ? "." : "#") + r, t.forced) && void 0 !== u) {
        if (_typeof(i) == _typeof(u)) continue;
        gn(i, u);
      }

      (t.sham || u && u.sham) && pn(i, "sham", !0), dn(n, r, i, t);
    }
  },
      mn = He,
      _n = Ye,
      bn = Object.keys || function (t) {
    return mn(t, _n);
  },
      An = a,
      Cn = i,
      En = bn,
      Fn = Ge,
      Sn = s,
      Dn = W,
      wn = k,
      Bn = Object.assign,
      Mn = Object.defineProperty,
      xn = !Bn || Cn(function () {
    if (An && 1 !== Bn({
      b: 1
    }, Bn(Mn({}, "a", {
      enumerable: !0,
      get: function get() {
        Mn(this, "b", {
          value: 3,
          enumerable: !1
        });
      }
    }), {
      b: 2
    })).b) return !0;
    var t = {},
        e = {},
        n = Symbol(),
        r = "abcdefghijklmnopqrst";
    return t[n] = 7, r.split("").forEach(function (t) {
      e[t] = t;
    }), 7 != Bn({}, t)[n] || En(Bn({}, e)).join("") != r;
  }) ? function (t, e) {
    for (var n = Dn(t), r = arguments.length, u = 1, i = Fn.f, a = Sn.f; r > u;) {
      for (var s, o = wn(arguments[u++]), l = i ? En(o).concat(i(o)) : En(o), h = l.length, c = 0; h > c;) {
        s = l[c++], An && !a.call(o, s) || (n[s] = o[s]);
      }
    }

    return n;
  } : Bn;

  yn({
    target: "Object",
    stat: !0,
    forced: Object.assign !== xn
  }, {
    assign: xn
  });

  var Pn = R,
      On = function On(t) {
    if (Pn(t)) throw TypeError("Cannot convert a Symbol value to a string");
    return String(t);
  },
      Tn = De,
      In = On,
      jn = y,
      Vn = function Vn(t) {
    var e = In(jn(this)),
        n = "",
        r = Tn(t);
    if (r < 0 || r == 1 / 0) throw RangeError("Wrong number of repetitions");

    for (; r > 0; (r >>>= 1) && (e += e)) {
      1 & r && (n += e);
    }

    return n;
  };

  yn({
    target: "String",
    proto: !0
  }, {
    repeat: Vn
  });

  var Rn = Me,
      Ln = On,
      Nn = Vn,
      Un = y,
      zn = Math.ceil,
      Hn = function Hn(t) {
    return function (e, n, r) {
      var u,
          i,
          a = Ln(Un(e)),
          s = a.length,
          o = void 0 === r ? " " : Ln(r),
          l = Rn(n);
      return l <= s || "" == o ? a : (u = l - s, (i = Nn.call(o, zn(u / o.length))).length > u && (i = i.slice(0, u)), t ? a + i : i + a);
    };
  },
      Yn = {
    start: Hn(!1),
    end: Hn(!0)
  },
      Zn = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(S),
      Kn = Yn.start;

  yn({
    target: "String",
    proto: !0,
    forced: Zn
  }, {
    padStart: function padStart(t) {
      return Kn(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var Gn = Yn.end;

  function Wn(t) {
    return (Wn = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function $n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function qn(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function Xn(t, e, n) {
    return e && qn(t.prototype, e), n && qn(t, n), t;
  }

  function Jn(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && tr(t, e);
  }

  function Qn(t) {
    return (Qn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  function tr(t, e) {
    return (tr = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function er(t, e) {
    if (null == t) return {};

    var n,
        r,
        u = function (t, e) {
      if (null == t) return {};
      var n,
          r,
          u = {},
          i = Object.keys(t);

      for (r = 0; r < i.length; r++) {
        n = i[r], e.indexOf(n) >= 0 || (u[n] = t[n]);
      }

      return u;
    }(t, e);

    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);

      for (r = 0; r < i.length; r++) {
        n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (u[n] = t[n]);
      }
    }

    return u;
  }

  function nr(t, e) {
    return !e || "object" != _typeof(e) && "function" != typeof e ? function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(t) : e;
  }

  function rr(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = Qn(t);

      if (e) {
        var u = Qn(this).constructor;
        n = Reflect.construct(r, arguments, u);
      } else n = r.apply(this, arguments);

      return nr(this, n);
    };
  }

  function ur(t, e) {
    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Qn(t));) {
      ;
    }

    return t;
  }

  function ir(t, e, n) {
    return (ir = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
      var r = ur(t, e);

      if (r) {
        var u = Object.getOwnPropertyDescriptor(r, e);
        return u.get ? u.get.call(n) : u.value;
      }
    })(t, e, n || t);
  }

  function ar(t, e, n, r) {
    return (ar = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (t, e, n, r) {
      var u,
          i = ur(t, e);

      if (i) {
        if ((u = Object.getOwnPropertyDescriptor(i, e)).set) return u.set.call(r, n), !0;
        if (!u.writable) return !1;
      }

      if (u = Object.getOwnPropertyDescriptor(r, e)) {
        if (!u.writable) return !1;
        u.value = n, Object.defineProperty(r, e, u);
      } else !function (t, e, n) {
        e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n;
      }(r, e, n);

      return !0;
    })(t, e, n, r);
  }

  function sr(t, e, n, r, u) {
    if (!ar(t, e, n, r || t) && u) throw new Error("failed to set property");
    return n;
  }

  function or(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (null == n) return;
      var r,
          u,
          i = [],
          a = !0,
          s = !1;

      try {
        for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0) {
          ;
        }
      } catch (t) {
        s = !0, u = t;
      } finally {
        try {
          a || null == n["return"] || n["return"]();
        } finally {
          if (s) throw u;
        }
      }

      return i;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return lr(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lr(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function lr(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) {
      r[n] = t[n];
    }

    return r;
  }

  function hr(t) {
    return "string" == typeof t || t instanceof String;
  }

  yn({
    target: "String",
    proto: !0,
    forced: Zn
  }, {
    padEnd: function padEnd(t) {
      return Gn(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), yn({
    global: !0
  }, {
    globalThis: r
  });
  var cr = "NONE",
      fr = "LEFT",
      pr = "FORCE_LEFT",
      dr = "RIGHT",
      vr = "FORCE_RIGHT";

  function gr(t) {
    switch (t) {
      case fr:
        return pr;

      case dr:
        return vr;

      default:
        return t;
    }
  }

  function kr(t) {
    return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
  }

  function yr(t, e) {
    if (e === t) return !0;
    var n,
        r = Array.isArray(e),
        u = Array.isArray(t);

    if (r && u) {
      if (e.length != t.length) return !1;

      for (n = 0; n < e.length; n++) {
        if (!yr(e[n], t[n])) return !1;
      }

      return !0;
    }

    if (r != u) return !1;

    if (e && t && "object" === Wn(e) && "object" === Wn(t)) {
      var i = e instanceof Date,
          a = t instanceof Date;
      if (i && a) return e.getTime() == t.getTime();
      if (i != a) return !1;
      var s = e instanceof RegExp,
          o = t instanceof RegExp;
      if (s && o) return e.toString() == t.toString();
      if (s != o) return !1;
      var l = Object.keys(e);

      for (n = 0; n < l.length; n++) {
        if (!Object.prototype.hasOwnProperty.call(t, l[n])) return !1;
      }

      for (n = 0; n < l.length; n++) {
        if (!yr(t[l[n]], e[l[n]])) return !1;
      }

      return !0;
    }

    return !(!e || !t || "function" != typeof e || "function" != typeof t) && e.toString() === t.toString();
  }

  var mr = function () {
    function t(e, n, r, u) {
      for ($n(this, t), this.value = e, this.cursorPos = n, this.oldValue = r, this.oldSelection = u; this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) {
        --this.oldSelection.start;
      }
    }

    return Xn(t, [{
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
        return !this.removedCount || this.insertedCount ? cr : this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? dr : fr;
      }
    }]), t;
  }(),
      _r = function () {
    function t(e) {
      $n(this, t), Object.assign(this, {
        inserted: "",
        rawInserted: "",
        skip: !1,
        tailShift: 0
      }, e);
    }

    return Xn(t, [{
      key: "aggregate",
      value: function value(t) {
        return this.rawInserted += t.rawInserted, this.skip = this.skip || t.skip, this.inserted += t.inserted, this.tailShift += t.tailShift, this;
      }
    }, {
      key: "offset",
      get: function get() {
        return this.tailShift + this.inserted.length;
      }
    }]), t;
  }(),
      br = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = arguments.length > 2 ? arguments[2] : void 0;
      $n(this, t), this.value = e, this.from = n, this.stop = r;
    }

    return Xn(t, [{
      key: "toString",
      value: function value() {
        return this.value;
      }
    }, {
      key: "extend",
      value: function value(t) {
        this.value += String(t);
      }
    }, {
      key: "appendTo",
      value: function value(t) {
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
      key: "shiftBefore",
      value: function value(t) {
        if (this.from >= t || !this.value.length) return "";
        var e = this.value[0];
        return this.value = this.value.slice(1), e;
      }
    }]), t;
  }();

  function Ar(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return new Ar.InputMask(t, e);
  }

  var Cr = function () {
    function t(e) {
      $n(this, t), this._value = "", this._update(Object.assign({}, t.DEFAULTS, e)), this.isInitialized = !0;
    }

    return Xn(t, [{
      key: "updateOptions",
      value: function value(t) {
        Object.keys(t).length && this.withValueRefresh(this._update.bind(this, t));
      }
    }, {
      key: "_update",
      value: function value(t) {
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
      value: function value() {
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
      value: function value(t) {
        return this.reset(), this.append(t, {
          input: !0
        }, ""), this.doCommit(), this.value;
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
      key: "isComplete",
      get: function get() {
        return !0;
      }
    }, {
      key: "nearestInputPos",
      value: function value(t, e) {
        return t;
      }
    }, {
      key: "extractInput",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return this.value.slice(t, e);
      }
    }, {
      key: "extractTail",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return new br(this.extractInput(t, e), t);
      }
    }, {
      key: "appendTail",
      value: function value(t) {
        return hr(t) && (t = new br(String(t))), t.appendTo(this);
      }
    }, {
      key: "_appendCharRaw",
      value: function value(t) {
        return t ? (this._value += t, new _r({
          inserted: t,
          rawInserted: t
        })) : new _r();
      }
    }, {
      key: "_appendChar",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = this.state,
            u = this._appendCharRaw(this.doPrepare(t, e), e);

        if (u.inserted) {
          var i,
              a = !1 !== this.doValidate(e);

          if (a && null != n) {
            var s = this.state;
            this.overwrite && (i = n.state, n.shiftBefore(this.value.length));
            var o = this.appendTail(n);
            (a = o.rawInserted === n.toString()) && o.inserted && (this.state = s);
          }

          a || (u = new _r(), this.state = r, n && i && (n.state = i));
        }

        return u;
      }
    }, {
      key: "_appendPlaceholder",
      value: function value() {
        return new _r();
      }
    }, {
      key: "append",
      value: function value(t, e, n) {
        if (!hr(t)) throw new Error("value should be string");
        var r = new _r(),
            u = hr(n) ? new br(String(n)) : n;
        e && e.tail && (e._beforeTailState = this.state);

        for (var i = 0; i < t.length; ++i) {
          r.aggregate(this._appendChar(t[i], e, u));
        }

        return null != u && (r.tailShift += this.appendTail(u).tailShift), r;
      }
    }, {
      key: "remove",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return this._value = this.value.slice(0, t) + this.value.slice(e), new _r();
      }
    }, {
      key: "withValueRefresh",
      value: function value(t) {
        if (this._refreshing || !this.isInitialized) return t();
        this._refreshing = !0;
        var e = this.rawInputValue,
            n = this.value,
            r = t();
        return this.rawInputValue = e, this.value && this.value !== n && 0 === n.indexOf(this.value) && this.append(n.slice(this.value.length), {}, ""), delete this._refreshing, r;
      }
    }, {
      key: "runIsolated",
      value: function value(t) {
        if (this._isolated || !this.isInitialized) return t(this);
        this._isolated = !0;
        var e = this.state,
            n = t(this);
        return this.state = e, delete this._isolated, n;
      }
    }, {
      key: "doPrepare",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.prepare ? this.prepare(t, this, e) : t;
      }
    }, {
      key: "doValidate",
      value: function value(t) {
        return (!this.validate || this.validate(this.value, this, t)) && (!this.parent || this.parent.doValidate(t));
      }
    }, {
      key: "doCommit",
      value: function value() {
        this.commit && this.commit(this.value, this);
      }
    }, {
      key: "doFormat",
      value: function value(t) {
        return this.format ? this.format(t, this) : t;
      }
    }, {
      key: "doParse",
      value: function value(t) {
        return this.parse ? this.parse(t, this) : t;
      }
    }, {
      key: "splice",
      value: function value(t, e, n, r) {
        var u = t + e,
            i = this.extractTail(u),
            a = this.nearestInputPos(t, r);
        return new _r({
          tailShift: a - t
        }).aggregate(this.remove(a)).aggregate(this.append(n, {
          input: !0
        }, i));
      }
    }]), t;
  }();

  function Er(t) {
    if (null == t) throw new Error("mask property should be defined");
    return t instanceof RegExp ? Ar.MaskedRegExp : hr(t) ? Ar.MaskedPattern : t instanceof Date || t === Date ? Ar.MaskedDate : t instanceof Number || "number" == typeof t || t === Number ? Ar.MaskedNumber : Array.isArray(t) || t === Array ? Ar.MaskedDynamic : Ar.Masked && t.prototype instanceof Ar.Masked ? t : t instanceof Function ? Ar.MaskedFunction : t instanceof Ar.Masked ? t.constructor : (console.warn("Mask not found for mask", t), Ar.Masked);
  }

  function Fr(t) {
    if (Ar.Masked && t instanceof Ar.Masked) return t;
    var e = (t = Object.assign({}, t)).mask;
    if (Ar.Masked && e instanceof Ar.Masked) return e;
    var n = Er(e);
    if (!n) throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
    return new n(t);
  }

  Cr.DEFAULTS = {
    format: function format(t) {
      return t;
    },
    parse: function parse(t) {
      return t;
    }
  }, Ar.Masked = Cr, Ar.createMask = Fr;

  var Sr = ["mask"],
      Dr = {
    0: /\d/,
    a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    "*": /./
  },
      wr = function () {
    function t(e) {
      $n(this, t);
      var n = e.mask,
          r = er(e, Sr);
      this.masked = Fr({
        mask: n
      }), Object.assign(this, r);
    }

    return Xn(t, [{
      key: "reset",
      value: function value() {
        this._isFilled = !1, this.masked.reset();
      }
    }, {
      key: "remove",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return 0 === t && e >= 1 ? (this._isFilled = !1, this.masked.remove(t, e)) : new _r();
      }
    }, {
      key: "value",
      get: function get() {
        return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : "");
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.masked.unmaskedValue;
      }
    }, {
      key: "isComplete",
      get: function get() {
        return Boolean(this.masked.value) || this.isOptional;
      }
    }, {
      key: "_appendChar",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (this._isFilled) return new _r();

        var n = this.masked.state,
            r = this.masked._appendChar(t, e);

        return r.inserted && !1 === this.doValidate(e) && (r.inserted = r.rawInserted = "", this.masked.state = n), r.inserted || this.isOptional || this.lazy || e.input || (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this._isFilled = Boolean(r.inserted), r;
      }
    }, {
      key: "append",
      value: function value() {
        var t;
        return (t = this.masked).append.apply(t, arguments);
      }
    }, {
      key: "_appendPlaceholder",
      value: function value() {
        var t = new _r();
        return this._isFilled || this.isOptional || (this._isFilled = !0, t.inserted = this.placeholderChar), t;
      }
    }, {
      key: "extractTail",
      value: function value() {
        var t;
        return (t = this.masked).extractTail.apply(t, arguments);
      }
    }, {
      key: "appendTail",
      value: function value() {
        var t;
        return (t = this.masked).appendTail.apply(t, arguments);
      }
    }, {
      key: "extractInput",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
            n = arguments.length > 2 ? arguments[2] : void 0;
        return this.masked.extractInput(t, e, n);
      }
    }, {
      key: "nearestInputPos",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cr,
            n = 0,
            r = this.value.length,
            u = Math.min(Math.max(t, n), r);

        switch (e) {
          case fr:
          case pr:
            return this.isComplete ? u : n;

          case dr:
          case vr:
            return this.isComplete ? u : r;

          case cr:
          default:
            return u;
        }
      }
    }, {
      key: "doValidate",
      value: function value() {
        var t, e;
        return (t = this.masked).doValidate.apply(t, arguments) && (!this.parent || (e = this.parent).doValidate.apply(e, arguments));
      }
    }, {
      key: "doCommit",
      value: function value() {
        this.masked.doCommit();
      }
    }, {
      key: "state",
      get: function get() {
        return {
          masked: this.masked.state,
          _isFilled: this._isFilled
        };
      },
      set: function set(t) {
        this.masked.state = t.masked, this._isFilled = t._isFilled;
      }
    }]), t;
  }(),
      Br = function () {
    function t(e) {
      $n(this, t), Object.assign(this, e), this._value = "";
    }

    return Xn(t, [{
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
      key: "reset",
      value: function value() {
        this._isRawInput = !1, this._value = "";
      }
    }, {
      key: "remove",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
        return this._value = this._value.slice(0, t) + this._value.slice(e), this._value || (this._isRawInput = !1), new _r();
      }
    }, {
      key: "nearestInputPos",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cr,
            n = 0,
            r = this._value.length;

        switch (e) {
          case fr:
          case pr:
            return n;

          case cr:
          case dr:
          case vr:
          default:
            return r;
        }
      }
    }, {
      key: "extractInput",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return n.raw && this._isRawInput && this._value.slice(t, e) || "";
      }
    }, {
      key: "isComplete",
      get: function get() {
        return !0;
      }
    }, {
      key: "_appendChar",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = new _r();
        if (this._value) return n;
        var r = this["char"] === t[0],
            u = r && (this.isUnmasking || e.input || e.raw) && !e.tail;
        return u && (n.rawInserted = this["char"]), this._value = n.inserted = this["char"], this._isRawInput = u && (e.raw || e.input), n;
      }
    }, {
      key: "_appendPlaceholder",
      value: function value() {
        var t = new _r();
        return this._value || (this._value = t.inserted = this["char"]), t;
      }
    }, {
      key: "extractTail",
      value: function value() {
        return arguments.length > 1 && void 0 !== arguments[1] || this.value.length, new br("");
      }
    }, {
      key: "appendTail",
      value: function value(t) {
        return hr(t) && (t = new br(String(t))), t.appendTo(this);
      }
    }, {
      key: "append",
      value: function value(t, e, n) {
        var r = this._appendChar(t, e);

        return null != n && (r.tailShift += this.appendTail(n).tailShift), r;
      }
    }, {
      key: "doCommit",
      value: function value() {}
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
    }]), t;
  }(),
      Mr = ["chunks"],
      xr = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      $n(this, t), this.chunks = e, this.from = n;
    }

    return Xn(t, [{
      key: "toString",
      value: function value() {
        return this.chunks.map(String).join("");
      }
    }, {
      key: "extend",
      value: function value(e) {
        if (String(e)) {
          hr(e) && (e = new br(String(e)));
          var n = this.chunks[this.chunks.length - 1],
              r = n && (n.stop === e.stop || null == e.stop) && e.from === n.from + n.toString().length;
          if (e instanceof br) r ? n.extend(e.toString()) : this.chunks.push(e);else if (e instanceof t) {
            if (null == e.stop) for (var u; e.chunks.length && null == e.chunks[0].stop;) {
              (u = e.chunks.shift()).from += e.from, this.extend(u);
            }
            e.toString() && (e.stop = e.blockIndex, this.chunks.push(e));
          }
        }
      }
    }, {
      key: "appendTo",
      value: function value(e) {
        if (!(e instanceof Ar.MaskedPattern)) return new br(this.toString()).appendTo(e);

        for (var n = new _r(), r = 0; r < this.chunks.length && !n.skip; ++r) {
          var u = this.chunks[r],
              i = e._mapPosToBlock(e.value.length),
              a = u.stop,
              s = void 0;

          if (null != a && (!i || i.index <= a) && ((u instanceof t || e._stops.indexOf(a) >= 0) && n.aggregate(e._appendPlaceholder(a)), s = u instanceof t && e._blocks[a]), s) {
            var o = s.appendTail(u);
            o.skip = !1, n.aggregate(o), e._value += o.inserted;
            var l = u.toString().slice(o.rawInserted.length);
            l && n.aggregate(e.append(l, {
              tail: !0
            }));
          } else n.aggregate(e.append(u.toString(), {
            tail: !0
          }));
        }

        return n;
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
      set: function set(e) {
        var n = e.chunks,
            r = er(e, Mr);
        Object.assign(this, r), this.chunks = n.map(function (e) {
          var n = "chunks" in e ? new t() : new br();
          return n.state = e, n;
        });
      }
    }, {
      key: "shiftBefore",
      value: function value(t) {
        if (this.from >= t || !this.chunks.length) return "";

        for (var e = t - this.from, n = 0; n < this.chunks.length;) {
          var r = this.chunks[n],
              u = r.shiftBefore(e);

          if (r.toString()) {
            if (!u) break;
            ++n;
          } else this.chunks.splice(n, 1);

          if (u) return u;
        }

        return "";
      }
    }]), t;
  }(),
      Pr = function (t) {
    Jn(n, t);
    var e = rr(n);

    function n() {
      return $n(this, n), e.apply(this, arguments);
    }

    return Xn(n, [{
      key: "_update",
      value: function value(t) {
        t.mask && (t.validate = function (e) {
          return e.search(t.mask) >= 0;
        }), ir(Qn(n.prototype), "_update", this).call(this, t);
      }
    }]), n;
  }(Cr);

  Ar.MaskedRegExp = Pr;

  var Or = ["_blocks"],
      Tr = function (t) {
    Jn(n, t);
    var e = rr(n);

    function n() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return $n(this, n), t.definitions = Object.assign({}, Dr, t.definitions), e.call(this, Object.assign({}, n.DEFAULTS, t));
    }

    return Xn(n, [{
      key: "_update",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t.definitions = Object.assign({}, this.definitions, t.definitions), ir(Qn(n.prototype), "_update", this).call(this, t), this._rebuildMask();
      }
    }, {
      key: "_rebuildMask",
      value: function value() {
        var t = this,
            e = this.definitions;
        this._blocks = [], this._stops = [], this._maskedBlocks = {};
        var r = this.mask;
        if (r && e) for (var u = !1, i = !1, a = 0; a < r.length; ++a) {
          if (this.blocks) if ("continue" === function () {
            var e = r.slice(a),
                n = Object.keys(t.blocks).filter(function (t) {
              return 0 === e.indexOf(t);
            });
            n.sort(function (t, e) {
              return e.length - t.length;
            });
            var u = n[0];

            if (u) {
              var i = Fr(Object.assign({
                parent: t,
                lazy: t.lazy,
                placeholderChar: t.placeholderChar,
                overwrite: t.overwrite
              }, t.blocks[u]));
              return i && (t._blocks.push(i), t._maskedBlocks[u] || (t._maskedBlocks[u] = []), t._maskedBlocks[u].push(t._blocks.length - 1)), a += u.length - 1, "continue";
            }
          }()) continue;
          var s = r[a],
              o = (s in e);
          if (s !== n.STOP_CHAR) {
            if ("{" !== s && "}" !== s) {
              if ("[" !== s && "]" !== s) {
                if (s === n.ESCAPE_CHAR) {
                  if (++a, !(s = r[a])) break;
                  o = !1;
                }

                var l = o ? new wr({
                  parent: this,
                  lazy: this.lazy,
                  placeholderChar: this.placeholderChar,
                  mask: e[s],
                  isOptional: i
                }) : new Br({
                  "char": s,
                  isUnmasking: u
                });

                this._blocks.push(l);
              } else i = !i;
            } else u = !u;
          } else this._stops.push(this._blocks.length);
        }
      }
    }, {
      key: "state",
      get: function get() {
        return Object.assign({}, ir(Qn(n.prototype), "state", this), {
          _blocks: this._blocks.map(function (t) {
            return t.state;
          })
        });
      },
      set: function set(t) {
        var e = t._blocks,
            r = er(t, Or);
        this._blocks.forEach(function (t, n) {
          return t.state = e[n];
        }), sr(Qn(n.prototype), "state", r, this, !0);
      }
    }, {
      key: "reset",
      value: function value() {
        ir(Qn(n.prototype), "reset", this).call(this), this._blocks.forEach(function (t) {
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
      key: "doCommit",
      value: function value() {
        this._blocks.forEach(function (t) {
          return t.doCommit();
        }), ir(Qn(n.prototype), "doCommit", this).call(this);
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._blocks.reduce(function (t, e) {
          return t + e.unmaskedValue;
        }, "");
      },
      set: function set(t) {
        sr(Qn(n.prototype), "unmaskedValue", t, this, !0);
      }
    }, {
      key: "value",
      get: function get() {
        return this._blocks.reduce(function (t, e) {
          return t + e.value;
        }, "");
      },
      set: function set(t) {
        sr(Qn(n.prototype), "value", t, this, !0);
      }
    }, {
      key: "appendTail",
      value: function value(t) {
        return ir(Qn(n.prototype), "appendTail", this).call(this, t).aggregate(this._appendPlaceholder());
      }
    }, {
      key: "_appendCharRaw",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = this._mapPosToBlock(this.value.length),
            r = new _r();

        if (!n) return r;

        for (var u = n.index;; ++u) {
          var i = this._blocks[u];
          if (!i) break;

          var a = i._appendChar(t, e),
              s = a.skip;

          if (r.aggregate(a), s || a.rawInserted) break;
        }

        return r;
      }
    }, {
      key: "extractTail",
      value: function value() {
        var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
            r = new xr();
        return e === n || this._forEachBlocksInRange(e, n, function (e, n, u, i) {
          var a = e.extractTail(u, i);
          a.stop = t._findStopBefore(n), a.from = t._blockStartPos(n), a instanceof xr && (a.blockIndex = n), r.extend(a);
        }), r;
      }
    }, {
      key: "extractInput",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (t === e) return "";
        var r = "";
        return this._forEachBlocksInRange(t, e, function (t, e, u, i) {
          r += t.extractInput(u, i, n);
        }), r;
      }
    }, {
      key: "_findStopBefore",
      value: function value(t) {
        for (var e, n = 0; n < this._stops.length; ++n) {
          var r = this._stops[n];
          if (!(r <= t)) break;
          e = r;
        }

        return e;
      }
    }, {
      key: "_appendPlaceholder",
      value: function value(t) {
        var e = this,
            n = new _r();
        if (this.lazy && null == t) return n;

        var r = this._mapPosToBlock(this.value.length);

        if (!r) return n;
        var u = r.index,
            i = null != t ? t : this._blocks.length;
        return this._blocks.slice(u, i).forEach(function (r) {
          if (!r.lazy || null != t) {
            var u = null != r._blocks ? [r._blocks.length] : [],
                i = r._appendPlaceholder.apply(r, u);

            e._value += i.inserted, n.aggregate(i);
          }
        }), n;
      }
    }, {
      key: "_mapPosToBlock",
      value: function value(t) {
        for (var e = "", n = 0; n < this._blocks.length; ++n) {
          var r = this._blocks[n],
              u = e.length;
          if (t <= (e += r.value).length) return {
            index: n,
            offset: t - u
          };
        }
      }
    }, {
      key: "_blockStartPos",
      value: function value(t) {
        return this._blocks.slice(0, t).reduce(function (t, e) {
          return t + e.value.length;
        }, 0);
      }
    }, {
      key: "_forEachBlocksInRange",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = this._mapPosToBlock(t);

        if (r) {
          var u = this._mapPosToBlock(e),
              i = u && r.index === u.index,
              a = r.offset,
              s = u && i ? u.offset : this._blocks[r.index].value.length;

          if (n(this._blocks[r.index], r.index, a, s), u && !i) {
            for (var o = r.index + 1; o < u.index; ++o) {
              n(this._blocks[o], o, 0, this._blocks[o].value.length);
            }

            n(this._blocks[u.index], u.index, 0, u.offset);
          }
        }
      }
    }, {
      key: "remove",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
            r = ir(Qn(n.prototype), "remove", this).call(this, t, e);
        return this._forEachBlocksInRange(t, e, function (t, e, n, u) {
          r.aggregate(t.remove(n, u));
        }), r;
      }
    }, {
      key: "nearestInputPos",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cr,
            n = this._mapPosToBlock(t) || {
          index: 0,
          offset: 0
        },
            r = n.offset,
            u = n.index,
            i = this._blocks[u];
        if (!i) return t;
        var a = r;
        0 !== a && a < i.value.length && (a = i.nearestInputPos(r, gr(e)));
        var s = a === i.value.length,
            o = 0 === a;
        if (!o && !s) return this._blockStartPos(u) + a;
        var l = s ? u + 1 : u;

        if (e === cr) {
          if (l > 0) {
            var h = l - 1,
                c = this._blocks[h],
                f = c.nearestInputPos(0, cr);
            if (!c.value.length || f !== c.value.length) return this._blockStartPos(l);
          }

          for (var p = l, d = p; d < this._blocks.length; ++d) {
            var v = this._blocks[d],
                g = v.nearestInputPos(0, cr);
            if (!v.value.length || g !== v.value.length) return this._blockStartPos(d) + g;
          }

          for (var k = l - 1; k >= 0; --k) {
            var y = this._blocks[k],
                m = y.nearestInputPos(0, cr);
            if (!y.value.length || m !== y.value.length) return this._blockStartPos(k) + y.value.length;
          }

          return t;
        }

        if (e === fr || e === pr) {
          for (var _, b = l; b < this._blocks.length; ++b) {
            if (this._blocks[b].value) {
              _ = b;
              break;
            }
          }

          if (null != _) {
            var A = this._blocks[_],
                C = A.nearestInputPos(0, dr);
            if (0 === C && A.unmaskedValue.length) return this._blockStartPos(_) + C;
          }

          for (var E, F = -1, S = l - 1; S >= 0; --S) {
            var D = this._blocks[S],
                w = D.nearestInputPos(D.value.length, pr);

            if (D.value && 0 === w || (E = S), 0 !== w) {
              if (w !== D.value.length) return this._blockStartPos(S) + w;
              F = S;
              break;
            }
          }

          if (e === fr) for (var B = F + 1; B <= Math.min(l, this._blocks.length - 1); ++B) {
            var M = this._blocks[B],
                x = M.nearestInputPos(0, cr),
                P = this._blockStartPos(B) + x;
            if (P > t) break;
            if (x !== M.value.length) return P;
          }
          if (F >= 0) return this._blockStartPos(F) + this._blocks[F].value.length;
          if (e === pr || this.lazy && !this.extractInput() && !Ir(this._blocks[l])) return 0;
          if (null != E) return this._blockStartPos(E);

          for (var O = l; O < this._blocks.length; ++O) {
            var T = this._blocks[O],
                I = T.nearestInputPos(0, cr);
            if (!T.value.length || I !== T.value.length) return this._blockStartPos(O) + I;
          }

          return 0;
        }

        if (e === dr || e === vr) {
          for (var j, V, R = l; R < this._blocks.length; ++R) {
            var L = this._blocks[R],
                N = L.nearestInputPos(0, cr);

            if (N !== L.value.length) {
              V = this._blockStartPos(R) + N, j = R;
              break;
            }
          }

          if (null != j && null != V) {
            for (var U = j; U < this._blocks.length; ++U) {
              var z = this._blocks[U],
                  H = z.nearestInputPos(0, vr);
              if (H !== z.value.length) return this._blockStartPos(U) + H;
            }

            return e === vr ? this.value.length : V;
          }

          for (var Y = Math.min(l, this._blocks.length - 1); Y >= 0; --Y) {
            var Z = this._blocks[Y],
                K = Z.nearestInputPos(Z.value.length, fr);

            if (0 !== K) {
              var G = this._blockStartPos(Y) + K;
              if (G >= t) return G;
              break;
            }
          }
        }

        return t;
      }
    }, {
      key: "maskedBlock",
      value: function value(t) {
        return this.maskedBlocks(t)[0];
      }
    }, {
      key: "maskedBlocks",
      value: function value(t) {
        var e = this,
            n = this._maskedBlocks[t];
        return n ? n.map(function (t) {
          return e._blocks[t];
        }) : [];
      }
    }]), n;
  }(Cr);

  function Ir(t) {
    if (!t) return !1;
    var e = t.value;
    return !e || t.nearestInputPos(0, cr) !== e.length;
  }

  Tr.DEFAULTS = {
    lazy: !0,
    placeholderChar: "_"
  }, Tr.STOP_CHAR = "`", Tr.ESCAPE_CHAR = "\\", Tr.InputDefinition = wr, Tr.FixedDefinition = Br, Ar.MaskedPattern = Tr;

  var jr = function (t) {
    Jn(n, t);
    var e = rr(n);

    function n() {
      return $n(this, n), e.apply(this, arguments);
    }

    return Xn(n, [{
      key: "_matchFrom",
      get: function get() {
        return this.maxLength - String(this.from).length;
      }
    }, {
      key: "_update",
      value: function value(t) {
        t = Object.assign({
          to: this.to || 0,
          from: this.from || 0
        }, t);
        var e = String(t.to).length;
        null != t.maxLength && (e = Math.max(e, t.maxLength)), t.maxLength = e;

        for (var r = String(t.from).padStart(e, "0"), u = String(t.to).padStart(e, "0"), i = 0; i < u.length && u[i] === r[i];) {
          ++i;
        }

        t.mask = u.slice(0, i).replace(/0/g, "\\0") + "0".repeat(e - i), ir(Qn(n.prototype), "_update", this).call(this, t);
      }
    }, {
      key: "isComplete",
      get: function get() {
        return ir(Qn(n.prototype), "isComplete", this) && Boolean(this.value);
      }
    }, {
      key: "boundaries",
      value: function value(t) {
        var e = "",
            n = "",
            r = or(t.match(/^(\D*)(\d*)(\D*)/) || [], 3),
            u = r[1],
            i = r[2];
        return i && (e = "0".repeat(u.length) + i, n = "9".repeat(u.length) + i), [e = e.padEnd(this.maxLength, "0"), n = n.padEnd(this.maxLength, "9")];
      }
    }, {
      key: "doPrepare",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (t = ir(Qn(n.prototype), "doPrepare", this).call(this, t, e).replace(/\D/g, ""), !this.autofix) return t;

        for (var r = String(this.from).padStart(this.maxLength, "0"), u = String(this.to).padStart(this.maxLength, "0"), i = this.value, a = "", s = 0; s < t.length; ++s) {
          var o = i + a + t[s],
              l = this.boundaries(o),
              h = or(l, 2),
              c = h[0],
              f = h[1];
          Number(f) < this.from ? a += r[o.length - 1] : Number(c) > this.to ? a += u[o.length - 1] : a += t[s];
        }

        return a;
      }
    }, {
      key: "doValidate",
      value: function value() {
        var t,
            e = this.value,
            r = e.search(/[^0]/);
        if (-1 === r && e.length <= this._matchFrom) return !0;

        for (var u = this.boundaries(e), i = or(u, 2), a = i[0], s = i[1], o = arguments.length, l = new Array(o), h = 0; h < o; h++) {
          l[h] = arguments[h];
        }

        return this.from <= Number(s) && Number(a) <= this.to && (t = ir(Qn(n.prototype), "doValidate", this)).call.apply(t, [this].concat(l));
      }
    }]), n;
  }(Tr);

  Ar.MaskedRange = jr;

  var Vr = function (t) {
    Jn(n, t);
    var e = rr(n);

    function n(t) {
      return $n(this, n), e.call(this, Object.assign({}, n.DEFAULTS, t));
    }

    return Xn(n, [{
      key: "_update",
      value: function value(t) {
        t.mask === Date && delete t.mask, t.pattern && (t.mask = t.pattern);
        var e = t.blocks;
        t.blocks = Object.assign({}, n.GET_DEFAULT_BLOCKS()), t.min && (t.blocks.Y.from = t.min.getFullYear()), t.max && (t.blocks.Y.to = t.max.getFullYear()), t.min && t.max && t.blocks.Y.from === t.blocks.Y.to && (t.blocks.m.from = t.min.getMonth() + 1, t.blocks.m.to = t.max.getMonth() + 1, t.blocks.m.from === t.blocks.m.to && (t.blocks.d.from = t.min.getDate(), t.blocks.d.to = t.max.getDate())), Object.assign(t.blocks, e), Object.keys(t.blocks).forEach(function (e) {
          var n = t.blocks[e];
          "autofix" in n || (n.autofix = t.autofix);
        }), ir(Qn(n.prototype), "_update", this).call(this, t);
      }
    }, {
      key: "doValidate",
      value: function value() {
        for (var t, e = this.date, r = arguments.length, u = new Array(r), i = 0; i < r; i++) {
          u[i] = arguments[i];
        }

        return (t = ir(Qn(n.prototype), "doValidate", this)).call.apply(t, [this].concat(u)) && (!this.isComplete || this.isDateExist(this.value) && null != e && (null == this.min || this.min <= e) && (null == this.max || e <= this.max));
      }
    }, {
      key: "isDateExist",
      value: function value(t) {
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
        return this.isComplete ? ir(Qn(n.prototype), "typedValue", this) : null;
      },
      set: function set(t) {
        sr(Qn(n.prototype), "typedValue", t, this, !0);
      }
    }]), n;
  }(Tr);

  Vr.DEFAULTS = {
    pattern: "d{.}`m{.}`Y",
    format: function format(t) {
      return [String(t.getDate()).padStart(2, "0"), String(t.getMonth() + 1).padStart(2, "0"), t.getFullYear()].join(".");
    },
    parse: function parse(t) {
      var e = or(t.split("."), 3),
          n = e[0],
          r = e[1],
          u = e[2];
      return new Date(u, r - 1, n);
    }
  }, Vr.GET_DEFAULT_BLOCKS = function () {
    return {
      d: {
        mask: jr,
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: jr,
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: jr,
        from: 1900,
        to: 9999
      }
    };
  }, Ar.MaskedDate = Vr;

  var Rr = function () {
    function t() {
      $n(this, t);
    }

    return Xn(t, [{
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
      value: function value(t, e) {
        if (null != t && null != e && (t !== this.selectionStart || e !== this.selectionEnd)) try {
          this._unsafeSelect(t, e);
        } catch (t) {}
      }
    }, {
      key: "_unsafeSelect",
      value: function value(t, e) {}
    }, {
      key: "isActive",
      get: function get() {
        return !1;
      }
    }, {
      key: "bindEvents",
      value: function value(t) {}
    }, {
      key: "unbindEvents",
      value: function value() {}
    }]), t;
  }();

  Ar.MaskElement = Rr;

  var Lr = function (t) {
    Jn(n, t);
    var e = rr(n);

    function n(t) {
      var r;
      return $n(this, n), (r = e.call(this)).input = t, r._handlers = {}, r;
    }

    return Xn(n, [{
      key: "rootElement",
      get: function get() {
        return this.input.getRootNode ? this.input.getRootNode() : document;
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
      value: function value(t, e) {
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
      value: function value(t) {
        var e = this;
        Object.keys(t).forEach(function (r) {
          return e._toggleEventHandler(n.EVENTS_MAP[r], t[r]);
        });
      }
    }, {
      key: "unbindEvents",
      value: function value() {
        var t = this;
        Object.keys(this._handlers).forEach(function (e) {
          return t._toggleEventHandler(e);
        });
      }
    }, {
      key: "_toggleEventHandler",
      value: function value(t, e) {
        this._handlers[t] && (this.input.removeEventListener(t, this._handlers[t]), delete this._handlers[t]), e && (this.input.addEventListener(t, e), this._handlers[t] = e);
      }
    }]), n;
  }(Rr);

  Lr.EVENTS_MAP = {
    selectionChange: "keydown",
    input: "input",
    drop: "drop",
    click: "click",
    focus: "focus",
    commit: "blur"
  }, Ar.HTMLMaskElement = Lr;

  var Nr = function (t) {
    Jn(n, t);
    var e = rr(n);

    function n() {
      return $n(this, n), e.apply(this, arguments);
    }

    return Xn(n, [{
      key: "_unsafeSelectionStart",
      get: function get() {
        var t = this.rootElement,
            e = t.getSelection && t.getSelection();
        return e && e.anchorOffset;
      }
    }, {
      key: "_unsafeSelectionEnd",
      get: function get() {
        var t = this.rootElement,
            e = t.getSelection && t.getSelection();
        return e && this._unsafeSelectionStart + String(e).length;
      }
    }, {
      key: "_unsafeSelect",
      value: function value(t, e) {
        if (this.rootElement.createRange) {
          var n = this.rootElement.createRange();
          n.setStart(this.input.firstChild || this.input, t), n.setEnd(this.input.lastChild || this.input, e);
          var r = this.rootElement,
              u = r.getSelection && r.getSelection();
          u && (u.removeAllRanges(), u.addRange(n));
        }
      }
    }, {
      key: "value",
      get: function get() {
        return this.input.textContent;
      },
      set: function set(t) {
        this.input.textContent = t;
      }
    }]), n;
  }(Lr);

  Ar.HTMLContenteditableMaskElement = Nr;

  var Ur = ["mask"],
      zr = function () {
    function t(e, n) {
      $n(this, t), this.el = e instanceof Rr ? e : e.isContentEditable && "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName ? new Nr(e) : new Lr(e), this.masked = Fr(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
    }

    return Xn(t, [{
      key: "mask",
      get: function get() {
        return this.masked.mask;
      },
      set: function set(t) {
        if (!this.maskEquals(t)) if (t instanceof Ar.Masked || this.masked.constructor !== Er(t)) {
          var e = Fr({
            mask: t
          });
          e.unmaskedValue = this.masked.unmaskedValue, this.masked = e;
        } else this.masked.updateOptions({
          mask: t
        });
      }
    }, {
      key: "maskEquals",
      value: function value(t) {
        return null == t || t === this.masked.mask || t === Date && this.masked instanceof Vr;
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(t) {
        this.masked.value = t, this.updateControl(), this.alignCursor();
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._unmaskedValue;
      },
      set: function set(t) {
        this.masked.unmaskedValue = t, this.updateControl(), this.alignCursor();
      }
    }, {
      key: "typedValue",
      get: function get() {
        return this.masked.typedValue;
      },
      set: function set(t) {
        this.masked.typedValue = t, this.updateControl(), this.alignCursor();
      }
    }, {
      key: "_bindEvents",
      value: function value() {
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
      value: function value() {
        this.el && this.el.unbindEvents();
      }
    }, {
      key: "_fireEvent",
      value: function value(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) {
          n[r - 1] = arguments[r];
        }

        var u = this._listeners[t];
        u && u.forEach(function (t) {
          return t.apply(void 0, n);
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
      value: function value() {
        this.value !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
          start: this.selectionStart,
          end: this.cursorPos
        };
      }
    }, {
      key: "updateValue",
      value: function value() {
        this.masked.value = this.el.value, this._value = this.masked.value;
      }
    }, {
      key: "updateControl",
      value: function value() {
        var t = this.masked.unmaskedValue,
            e = this.masked.value,
            n = this.unmaskedValue !== t || this.value !== e;
        this._unmaskedValue = t, this._value = e, this.el.value !== e && (this.el.value = e), n && this._fireChangeEvents();
      }
    }, {
      key: "updateOptions",
      value: function value(t) {
        var e = t.mask,
            n = er(t, Ur),
            r = !this.maskEquals(e),
            u = !yr(this.masked, n);
        r && (this.mask = e), u && this.masked.updateOptions(n), (r || u) && this.updateControl();
      }
    }, {
      key: "updateCursor",
      value: function value(t) {
        null != t && (this.cursorPos = t, this._delayUpdateCursor(t));
      }
    }, {
      key: "_delayUpdateCursor",
      value: function value(t) {
        var e = this;
        this._abortUpdateCursor(), this._changingCursorPos = t, this._cursorChanging = setTimeout(function () {
          e.el && (e.cursorPos = e._changingCursorPos, e._abortUpdateCursor());
        }, 10);
      }
    }, {
      key: "_fireChangeEvents",
      value: function value() {
        this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent);
      }
    }, {
      key: "_abortUpdateCursor",
      value: function value() {
        this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging);
      }
    }, {
      key: "alignCursor",
      value: function value() {
        this.cursorPos = this.masked.nearestInputPos(this.cursorPos, fr);
      }
    }, {
      key: "alignCursorFriendly",
      value: function value() {
        this.selectionStart === this.cursorPos && this.alignCursor();
      }
    }, {
      key: "on",
      value: function value(t, e) {
        return this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e), this;
      }
    }, {
      key: "off",
      value: function value(t, e) {
        if (!this._listeners[t]) return this;
        if (!e) return delete this._listeners[t], this;

        var n = this._listeners[t].indexOf(e);

        return n >= 0 && this._listeners[t].splice(n, 1), this;
      }
    }, {
      key: "_onInput",
      value: function value(t) {
        if (this._inputEvent = t, this._abortUpdateCursor(), !this._selection) return this.updateValue();
        var e = new mr(this.el.value, this.cursorPos, this.value, this._selection),
            n = this.masked.rawInputValue,
            r = this.masked.splice(e.startChangePos, e.removed.length, e.inserted, e.removeDirection).offset,
            u = n === this.masked.rawInputValue ? e.removeDirection : cr,
            i = this.masked.nearestInputPos(e.startChangePos + r, u);
        this.updateControl(), this.updateCursor(i), delete this._inputEvent;
      }
    }, {
      key: "_onChange",
      value: function value() {
        this.value !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection();
      }
    }, {
      key: "_onDrop",
      value: function value(t) {
        t.preventDefault(), t.stopPropagation();
      }
    }, {
      key: "_onFocus",
      value: function value(t) {
        this.alignCursorFriendly();
      }
    }, {
      key: "_onClick",
      value: function value(t) {
        this.alignCursorFriendly();
      }
    }, {
      key: "destroy",
      value: function value() {
        this._unbindEvents(), this._listeners.length = 0, delete this.el;
      }
    }]), t;
  }();

  Ar.InputMask = zr;

  var Hr = function (t) {
    Jn(n, t);
    var e = rr(n);

    function n() {
      return $n(this, n), e.apply(this, arguments);
    }

    return Xn(n, [{
      key: "_update",
      value: function value(t) {
        t["enum"] && (t.mask = "*".repeat(t["enum"][0].length)), ir(Qn(n.prototype), "_update", this).call(this, t);
      }
    }, {
      key: "doValidate",
      value: function value() {
        for (var t, e = this, r = arguments.length, u = new Array(r), i = 0; i < r; i++) {
          u[i] = arguments[i];
        }

        return this["enum"].some(function (t) {
          return t.indexOf(e.unmaskedValue) >= 0;
        }) && (t = ir(Qn(n.prototype), "doValidate", this)).call.apply(t, [this].concat(u));
      }
    }]), n;
  }(Tr);

  Ar.MaskedEnum = Hr;

  var Yr = function (t) {
    Jn(n, t);
    var e = rr(n);

    function n(t) {
      return $n(this, n), e.call(this, Object.assign({}, n.DEFAULTS, t));
    }

    return Xn(n, [{
      key: "_update",
      value: function value(t) {
        ir(Qn(n.prototype), "_update", this).call(this, t), this._updateRegExps();
      }
    }, {
      key: "_updateRegExps",
      value: function value() {
        var t = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
            e = (this.scale ? "(" + kr(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
        this._numberRegExpInput = new RegExp(t + "(0|([1-9]+\\d*))?" + e), this._numberRegExp = new RegExp(t + "\\d*" + e), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(kr).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(kr(this.thousandsSeparator), "g");
      }
    }, {
      key: "_removeThousandsSeparators",
      value: function value(t) {
        return t.replace(this._thousandsSeparatorRegExp, "");
      }
    }, {
      key: "_insertThousandsSeparators",
      value: function value(t) {
        var e = t.split(this.radix);
        return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), e.join(this.radix);
      }
    }, {
      key: "doPrepare",
      value: function value(t) {
        for (var e, r = arguments.length, u = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) {
          u[i - 1] = arguments[i];
        }

        return (e = ir(Qn(n.prototype), "doPrepare", this)).call.apply(e, [this, this._removeThousandsSeparators(t.replace(this._mapToRadixRegExp, this.radix))].concat(u));
      }
    }, {
      key: "_separatorsCount",
      value: function value(t) {
        for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, r = 0; r < t; ++r) {
          this._value.indexOf(this.thousandsSeparator, r) === r && (++n, e && (t += this.thousandsSeparator.length));
        }

        return n;
      }
    }, {
      key: "_separatorsCountFromSlice",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._value;
        return this._separatorsCount(this._removeThousandsSeparators(t).length, !0);
      }
    }, {
      key: "extractInput",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
            r = arguments.length > 2 ? arguments[2] : void 0,
            u = this._adjustRangeWithSeparators(t, e),
            i = or(u, 2);

        return t = i[0], e = i[1], this._removeThousandsSeparators(ir(Qn(n.prototype), "extractInput", this).call(this, t, e, r));
      }
    }, {
      key: "_appendCharRaw",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!this.thousandsSeparator) return ir(Qn(n.prototype), "_appendCharRaw", this).call(this, t, e);

        var r = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
            u = this._separatorsCountFromSlice(r);

        this._value = this._removeThousandsSeparators(this.value);
        var i = ir(Qn(n.prototype), "_appendCharRaw", this).call(this, t, e);
        this._value = this._insertThousandsSeparators(this._value);

        var a = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
            s = this._separatorsCountFromSlice(a);

        return i.tailShift += (s - u) * this.thousandsSeparator.length, i.skip = !i.rawInserted && t === this.thousandsSeparator, i;
      }
    }, {
      key: "_findSeparatorAround",
      value: function value(t) {
        if (this.thousandsSeparator) {
          var e = t - this.thousandsSeparator.length + 1,
              n = this.value.indexOf(this.thousandsSeparator, e);
          if (n <= t) return n;
        }

        return -1;
      }
    }, {
      key: "_adjustRangeWithSeparators",
      value: function value(t, e) {
        var n = this._findSeparatorAround(t);

        n >= 0 && (t = n);

        var r = this._findSeparatorAround(e);

        return r >= 0 && (e = r + this.thousandsSeparator.length), [t, e];
      }
    }, {
      key: "remove",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
            n = this._adjustRangeWithSeparators(t, e),
            r = or(n, 2);

        t = r[0], e = r[1];

        var u = this.value.slice(0, t),
            i = this.value.slice(e),
            a = this._separatorsCount(u.length);

        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(u + i));

        var s = this._separatorsCountFromSlice(u);

        return new _r({
          tailShift: (s - a) * this.thousandsSeparator.length
        });
      }
    }, {
      key: "nearestInputPos",
      value: function value(t, e) {
        if (!this.thousandsSeparator) return t;

        switch (e) {
          case cr:
          case fr:
          case pr:
            var n = this._findSeparatorAround(t - 1);

            if (n >= 0) {
              var r = n + this.thousandsSeparator.length;
              if (t < r || this.value.length <= r || e === pr) return n;
            }

            break;

          case dr:
          case vr:
            var u = this._findSeparatorAround(t);

            if (u >= 0) return u + this.thousandsSeparator.length;
        }

        return t;
      }
    }, {
      key: "doValidate",
      value: function value(t) {
        var e = (t.input ? this._numberRegExpInput : this._numberRegExp).test(this._removeThousandsSeparators(this.value));

        if (e) {
          var r = this.number;
          e = e && !isNaN(r) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max);
        }

        return e && ir(Qn(n.prototype), "doValidate", this).call(this, t);
      }
    }, {
      key: "doCommit",
      value: function value() {
        if (this.value) {
          var t = this.number,
              e = t;
          null != this.min && (e = Math.max(e, this.min)), null != this.max && (e = Math.min(e, this.max)), e !== t && (this.unmaskedValue = String(e));
          var r = this.value;
          this.normalizeZeros && (r = this._normalizeZeros(r)), this.padFractionalZeros && (r = this._padFractionalZeros(r)), this._value = r;
        }

        ir(Qn(n.prototype), "doCommit", this).call(this);
      }
    }, {
      key: "_normalizeZeros",
      value: function value(t) {
        var e = this._removeThousandsSeparators(t).split(this.radix);

        return e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, function (t, e, n, r) {
          return e + r;
        }), t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + "0"), e.length > 1 && (e[1] = e[1].replace(/0*$/, ""), e[1].length || (e.length = 1)), this._insertThousandsSeparators(e.join(this.radix));
      }
    }, {
      key: "_padFractionalZeros",
      value: function value(t) {
        if (!t) return t;
        var e = t.split(this.radix);
        return e.length < 2 && e.push(""), e[1] = e[1].padEnd(this.scale, "0"), e.join(this.radix);
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".");
      },
      set: function set(t) {
        sr(Qn(n.prototype), "unmaskedValue", t.replace(".", this.radix), this, !0);
      }
    }, {
      key: "typedValue",
      get: function get() {
        return Number(this.unmaskedValue);
      },
      set: function set(t) {
        sr(Qn(n.prototype), "unmaskedValue", String(t), this, !0);
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
    }]), n;
  }(Cr);

  Yr.DEFAULTS = {
    radix: ",",
    thousandsSeparator: "",
    mapToRadix: ["."],
    scale: 2,
    signed: !1,
    normalizeZeros: !0,
    padFractionalZeros: !1
  }, Ar.MaskedNumber = Yr;

  var Zr = function (t) {
    Jn(n, t);
    var e = rr(n);

    function n() {
      return $n(this, n), e.apply(this, arguments);
    }

    return Xn(n, [{
      key: "_update",
      value: function value(t) {
        t.mask && (t.validate = t.mask), ir(Qn(n.prototype), "_update", this).call(this, t);
      }
    }]), n;
  }(Cr);

  Ar.MaskedFunction = Zr;

  var Kr = ["compiledMasks", "currentMaskRef", "currentMask"],
      Gr = function (t) {
    Jn(n, t);
    var e = rr(n);

    function n(t) {
      var r;
      return $n(this, n), (r = e.call(this, Object.assign({}, n.DEFAULTS, t))).currentMask = null, r;
    }

    return Xn(n, [{
      key: "_update",
      value: function value(t) {
        ir(Qn(n.prototype), "_update", this).call(this, t), "mask" in t && (this.compiledMasks = Array.isArray(t.mask) ? t.mask.map(function (t) {
          return Fr(t);
        }) : []);
      }
    }, {
      key: "_appendCharRaw",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = this._applyDispatch(t, e);

        return this.currentMask && n.aggregate(this.currentMask._appendChar(t, e)), n;
      }
    }, {
      key: "_applyDispatch",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = e.tail && null != e._beforeTailState ? e._beforeTailState._value : this.value,
            r = this.rawInputValue,
            u = e.tail && null != e._beforeTailState ? e._beforeTailState._rawInputValue : r,
            i = r.slice(u.length),
            a = this.currentMask,
            s = new _r(),
            o = a && a.state;
        if (this.currentMask = this.doDispatch(t, Object.assign({}, e)), this.currentMask) if (this.currentMask !== a) {
          if (this.currentMask.reset(), u) {
            var l = this.currentMask.append(u, {
              raw: !0
            });
            s.tailShift = l.inserted.length - n.length;
          }

          i && (s.tailShift += this.currentMask.append(i, {
            raw: !0,
            tail: !0
          }).tailShift);
        } else this.currentMask.state = o;
        return s;
      }
    }, {
      key: "_appendPlaceholder",
      value: function value() {
        var t = this._applyDispatch.apply(this, arguments);

        return this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()), t;
      }
    }, {
      key: "doDispatch",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.dispatch(t, this, e);
      }
    }, {
      key: "doValidate",
      value: function value() {
        for (var t, e, r = arguments.length, u = new Array(r), i = 0; i < r; i++) {
          u[i] = arguments[i];
        }

        return (t = ir(Qn(n.prototype), "doValidate", this)).call.apply(t, [this].concat(u)) && (!this.currentMask || (e = this.currentMask).doValidate.apply(e, u));
      }
    }, {
      key: "reset",
      value: function value() {
        this.currentMask && this.currentMask.reset(), this.compiledMasks.forEach(function (t) {
          return t.reset();
        });
      }
    }, {
      key: "value",
      get: function get() {
        return this.currentMask ? this.currentMask.value : "";
      },
      set: function set(t) {
        sr(Qn(n.prototype), "value", t, this, !0);
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.unmaskedValue : "";
      },
      set: function set(t) {
        sr(Qn(n.prototype), "unmaskedValue", t, this, !0);
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
      key: "isComplete",
      get: function get() {
        return !!this.currentMask && this.currentMask.isComplete;
      }
    }, {
      key: "remove",
      value: function value() {
        var t,
            e = new _r();
        this.currentMask && e.aggregate((t = this.currentMask).remove.apply(t, arguments)).aggregate(this._applyDispatch());
        return e;
      }
    }, {
      key: "state",
      get: function get() {
        return Object.assign({}, ir(Qn(n.prototype), "state", this), {
          _rawInputValue: this.rawInputValue,
          compiledMasks: this.compiledMasks.map(function (t) {
            return t.state;
          }),
          currentMaskRef: this.currentMask,
          currentMask: this.currentMask && this.currentMask.state
        });
      },
      set: function set(t) {
        var e = t.compiledMasks,
            r = t.currentMaskRef,
            u = t.currentMask,
            i = er(t, Kr);
        this.compiledMasks.forEach(function (t, n) {
          return t.state = e[n];
        }), null != r && (this.currentMask = r, this.currentMask.state = u), sr(Qn(n.prototype), "state", i, this, !0);
      }
    }, {
      key: "extractInput",
      value: function value() {
        var t;
        return this.currentMask ? (t = this.currentMask).extractInput.apply(t, arguments) : "";
      }
    }, {
      key: "extractTail",
      value: function value() {
        for (var t, e, r = arguments.length, u = new Array(r), i = 0; i < r; i++) {
          u[i] = arguments[i];
        }

        return this.currentMask ? (t = this.currentMask).extractTail.apply(t, u) : (e = ir(Qn(n.prototype), "extractTail", this)).call.apply(e, [this].concat(u));
      }
    }, {
      key: "doCommit",
      value: function value() {
        this.currentMask && this.currentMask.doCommit(), ir(Qn(n.prototype), "doCommit", this).call(this);
      }
    }, {
      key: "nearestInputPos",
      value: function value() {
        for (var t, e, r = arguments.length, u = new Array(r), i = 0; i < r; i++) {
          u[i] = arguments[i];
        }

        return this.currentMask ? (t = this.currentMask).nearestInputPos.apply(t, u) : (e = ir(Qn(n.prototype), "nearestInputPos", this)).call.apply(e, [this].concat(u));
      }
    }, {
      key: "overwrite",
      get: function get() {
        return this.currentMask ? this.currentMask.overwrite : ir(Qn(n.prototype), "overwrite", this);
      },
      set: function set(t) {
        console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
      }
    }]), n;
  }(Cr);

  Gr.DEFAULTS = {
    dispatch: function dispatch(t, e, n) {
      if (e.compiledMasks.length) {
        var r = e.rawInputValue,
            u = e.compiledMasks.map(function (e, u) {
          return e.reset(), e.append(r, {
            raw: !0
          }), e.append(t, n), {
            weight: e.rawInputValue.length,
            index: u
          };
        });
        return u.sort(function (t, e) {
          return e.weight - t.weight;
        }), e.compiledMasks[u[0].index];
      }
    }
  }, Ar.MaskedDynamic = Gr;
  var Wr = {
    MASKED: "value",
    UNMASKED: "unmaskedValue",
    TYPED: "typedValue"
  };

  function $r(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wr.MASKED,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wr.MASKED,
        r = Fr(t);
    return function (t) {
      return r.runIsolated(function (r) {
        return r[e] = t, r[n];
      });
    };
  }

  function qr(t) {
    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) {
      n[r - 1] = arguments[r];
    }

    return $r.apply(void 0, n)(t);
  }

  Ar.PIPE_TYPE = Wr, Ar.createPipe = $r, Ar.pipe = qr;

  try {
    globalThis.IMask = Ar;
  } catch (t) {}

  t.HTMLContenteditableMaskElement = Nr, t.HTMLMaskElement = Lr, t.InputMask = zr, t.MaskElement = Rr, t.Masked = Cr, t.MaskedDate = Vr, t.MaskedDynamic = Gr, t.MaskedEnum = Hr, t.MaskedFunction = Zr, t.MaskedNumber = Yr, t.MaskedPattern = Tr, t.MaskedRange = jr, t.MaskedRegExp = Pr, t.PIPE_TYPE = Wr, t.createMask = Fr, t.createPipe = $r, t["default"] = Ar, t.pipe = qr, Object.defineProperty(t, "__esModule", {
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

        for (var o in n) {
          Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
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
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t));) {
          ;
        }

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

    for (var n in t) {
      e[t[n]] = "swal2-" + t[n];
    }

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

  function j() {
    return e(Y.footer);
  }

  function q() {
    return e(Y["timer-progress-bar"]);
  }

  function I() {
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
      for (var e = [], n = 0; n < t.length; n++) {
        -1 === e.indexOf(t[n]) && e.push(t[n]);
      }

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
      for (var n = e.split(/\s+/), o = 0; o < n.length; o++) {
        if (!t.classList.contains(n[o])) return;
      }

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
        o = q();
    vt(o) && (n && (o.style.transition = "none", o.style.width = "100%"), setTimeout(function () {
      o.style.transition = "width ".concat(t / 1e3, "s linear"), o.style.width = "0%";
    }, 10));
  }

  function ut() {
    return "undefined" == typeof window || "undefined" == typeof document;
  }

  function lt(t) {
    sn.isVisible() && ft !== t.target.value && sn.resetValidationMessage(), ft = t.target.value;
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
    for (var n = 0; n < t.childNodes.length; n++) {
      if (D(t.childNodes[n], e)) return t.childNodes[n];
    }
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
    if (t.textContent = "", 0 in e) for (var n = 0; (n in e); n++) {
      t.appendChild(e[n].cloneNode(!0));
    } else t.appendChild(e.cloneNode(!0));
  },
      kt = function () {
    if (ut()) return !1;
    var t = document.createElement("div"),
        e = {
      WebkitAnimation: "webkitAnimationEnd",
      OAnimation: "oAnimationEnd oanimationend",
      animation: "animationend"
    };

    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && void 0 !== t.style[n]) return e[n];
    }

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
    if (!jt[t.input]) return F('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
    var e = Lt(t.input),
        n = jt[t.input](e, t);
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
    }(n), e) {
      "range" === t && "placeholder" === o || n.setAttribute(o, e[o]);
    }
  },
      Tt = function Tt(t) {
    var e = Lt(t.input);
    t.customClass && mt(e, t.customClass.input);
  },
      Lt = function Lt(t) {
    var e = Y[t] ? Y[t] : Y.input;
    return gt(P(), e);
  },
      jt = {};

  jt.text = jt.email = jt.password = jt.number = jt.tel = jt.url = function (t, e) {
    return "string" == typeof e.inputValue || "number" == typeof e.inputValue ? t.value = e.inputValue : y(e.inputValue) || _('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue), '"')), At(t, e), t.type = e.input, t;
  }, jt.file = function (t, e) {
    return At(t, e), t;
  }, jt.range = function (t, e) {
    var n = t.querySelector("input"),
        o = t.querySelector("output");
    return n.value = e.inputValue, n.type = e.input, o.value = e.inputValue, t;
  }, jt.select = function (t, e) {
    var n;
    return t.textContent = "", e.inputPlaceholder && (n = document.createElement("option"), H(n, e.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, t.appendChild(n)), t;
  }, jt.radio = function (t) {
    return t.textContent = "", t;
  }, jt.checkbox = function (t, e) {
    var n = G(P(), "checkbox");
    n.value = 1, n.id = Y.checkbox, n.checked = Boolean(e.inputValue);
    var o = t.querySelector("span");
    return H(o, e.inputPlaceholder), t;
  }, jt.textarea = function (e, t) {
    var n, o;
    return e.value = t.inputValue, At(e, t), "MutationObserver" in window && (n = parseInt(window.getComputedStyle($()).width), o = parseInt(window.getComputedStyle($()).paddingLeft) + parseInt(window.getComputedStyle($()).paddingRight), new MutationObserver(function () {
      var t = e.offsetWidth + o;
      $().style.width = n < t ? "".concat(t, "px") : null;
    }).observe(e, {
      attributes: !0,
      attributeFilter: ["style"]
    })), e;
  };

  function qt(t, e) {
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

  function It() {
    return Q() && Q().getAttribute("data-queue-step");
  }

  function Vt(t, s) {
    var u = B();
    if (!s.progressSteps || 0 === s.progressSteps.length) return it(u), 0;
    ot(u), u.textContent = "";
    var l = parseInt(void 0 === s.currentProgressStep ? It() : s.currentProgressStep);
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
    }(e), a = e, c = x(), rt(c, a.title || a.titleText), a.title && dt(a.title, c), a.titleText && (c.innerText = a.titleText), N(c, a, "title"), s = e, u = I(), H(u, s.closeButtonHtml), N(u, s, "closeButton"), rt(u, s.showCloseButton), u.setAttribute("aria-label", s.closeButtonAriaLabel);
  }

  function Rt(t, e) {
    var n, o, i, r;
    n = e, o = $(), nt(o, "width", n.width), nt(o, "padding", n.padding), n.background && (o.style.background = n.background), zt(o, n), Pt(0, e), Mt(t, e), qt(t, e), pt(0, e), i = e, r = j(), rt(r, i.footer), i.footer && dt(i.footer, r), N(r, i, "footer"), "function" == typeof e.onRender && e.onRender($());
  }

  function Ht() {
    return E() && E().click();
  }

  var Dt = function Dt() {
    for (var t = n(), e = 0; e < t.length; e++) {
      it(t[e]);
    }
  },
      Nt = function Nt() {
    for (var t = $(), e = window.getComputedStyle(t).getPropertyValue("background-color"), n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < n.length; o++) {
      n[o].style.backgroundColor = e;
    }
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
    t || sn.fire(), t = $();
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
      var t = q(),
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
    for (var e in t) {
      Qt(i = e) || _('Unknown parameter "'.concat(i, '"')), t.toast && (o = e, -1 !== ne.indexOf(o) && _('The parameter "'.concat(o, '" is incompatible with toasts'))), $t(n = e) && g(n, $t(n));
    }

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
    getCloseButton: I,
    getActions: T,
    getConfirmButton: E,
    getCancelButton: O,
    getHeader: L,
    getFooter: j,
    getTimerProgressBar: q,
    getFocusableElements: V,
    getValidationMessage: S,
    isLoading: R,
    fire: function fire() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }

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
    getQueueStep: It,
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
    if ("radio" === t.type) for (var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < n.length; o++) {
      n[o].disabled = e;
    } else t.disabled = e;
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
    je(e, n, t), Te(e, n), M() && (Le(e, t.scrollbarPadding, o), h(document.body.children).forEach(function (t) {
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
      je = function je(t, e, n) {
    mt(t, n.showClass.backdrop), ot(e), mt(e, n.showClass.popup), mt([document.documentElement, document.body], Y.shown), n.heightAuto && n.backdrop && !n.toast && mt([document.documentElement, document.body], Y["height-auto"]);
  },
      qe = function qe(t) {
    return t.checked ? 1 : 0;
  },
      Ie = function Ie(t) {
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
          return qe(n);

        case "radio":
          return Ie(n);

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
    for (var e = t.target, n = V(), o = -1, i = 0; i < n.length; i++) {
      if (e === n[i]) {
        o = i;
        break;
      }
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
    var o = q();
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
      rn = function rn(t) {
    for (var e in t) {
      t[e] = new WeakMap();
    }
  },
      an = Object.freeze({
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
          closeButton: I(),
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
        sn.isUpdatableParameter(t) ? o[t] = e[t] : _('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'));
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
      e && (t.popup && Xt.swalCloseEventFinishedCallback && (Xt.swalCloseEventFinishedCallback(), delete Xt.swalCloseEventFinishedCallback), Xt.deferDisposalTimer && (clearTimeout(Xt.deferDisposalTimer), delete Xt.deferDisposalTimer), "function" == typeof e.onDestroy && e.onDestroy(), delete this.params, delete Xt.keydownHandler, delete Xt.keydownTarget, rn(Bt), rn(de));
    }
  }),
      cn = function () {
    function r() {
      if (a(this, r), "undefined" != typeof window) {
        "undefined" == typeof Promise && F("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), on = this;

        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
          e[n] = arguments[n];
        }

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

  s(cn.prototype, an), s(cn, oe), Object.keys(an).forEach(function (t) {
    cn[t] = function () {
      if (on) return on[t].apply(on, arguments);
    };
  }), cn.DismissReason = K, cn.version = "9.17.2";
  var sn = cn;
  return sn["default"] = sn;
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

    var _iterator = _createForOfIteratorHelper(i),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var o = _step.value;
        n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
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
      for (; t.parentNode && t != document.body;) {
        if ((t = t.parentNode).matches(e)) return t;
      }
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
        var _t17;

        if (!i) return t.push(e), t;
        e.matches(i) && t.push(e);
        var n = e.querySelectorAll(i);
        return t = (_t17 = t).concat.apply(_t17, _toConsumableArray(n));
      }, []);
    },
    debounceMethod: function debounceMethod(t, e, i) {
      i = i || 100;
      var n = t.prototype[e],
          o = e + "Timeout";

      t.prototype[e] = function () {
        var _this49 = this;

        clearTimeout(this[o]);
        var t = arguments;
        this[o] = setTimeout(function () {
          n.apply(_this49, t), delete _this49[o];
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
        var _i12 = o[t.infiniteScrollGUID];
        return _i12.option(e), _i12;
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

      for (var _t18 in s.create) {
        s.create[_t18].call(this);
      }
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
      var _i13 = n.Event(e);

      _i13.type = t, s = _i13;
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
    var _this50 = this;

    this.getPath = function () {
      var e = _this50.pageIndex + 1;
      return t.replace("{{#}}", e);
    };

    var e = t.replace(/(\\\?|\?)/, "\\?").replace("{{#}}", "(\\d\\d?\\d?)"),
        i = new RegExp(e),
        n = location.href.match(i);
    n && (this.pageIndex = parseInt(n[1], 10), this.log("pageIndex", [this.pageIndex, "template string"]));
  };

  var a = [/^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/, /^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/, /(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/],
      c = s.getPathParts = function (t) {
    if (t) {
      var _iterator2 = _createForOfIteratorHelper(a),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _e18 = _step2.value;

          var _i14 = t.match(_e18);

          if (_i14) {
            var _i15 = _slicedToArray(_i14, 4),
                _t19 = _i15[1],
                _e19 = _i15[2],
                _n8 = _i15[3];

            return {
              begin: _t19,
              index: _e19,
              end: _n8
            };
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  };

  r.updateGetPathSelector = function (t) {
    var _this51 = this;

    var e = document.querySelector(t);
    if (!e) return void console.error("Bad InfiniteScroll path option. Next link not found: ".concat(t));
    var i = e.getAttribute("href"),
        n = c(i);
    if (!n) return void console.error("InfiniteScroll unable to parse next link href: ".concat(i));
    var o = n.begin,
        s = n.index,
        r = n.end;
    this.isPathSelector = !0, this.getPath = function () {
      return o + (_this51.pageIndex + 1) + r;
    }, this.pageIndex = parseInt(s, 10) - 1, this.log("pageIndex", [this.pageIndex, "next link"]);
  }, r.updateGetAbsolutePath = function () {
    var _this52 = this;

    var t = this.getPath();
    if (t.match(/^http/) || t.match(/^\//)) return void (this.getAbsolutePath = this.getPath);
    var _location = location,
        e = _location.pathname,
        i = t.match(/^\?/),
        n = e.substring(0, e.lastIndexOf("/")),
        o = i ? e : n + "/";

    this.getAbsolutePath = function () {
      return o + _this52.getPath();
    };
  }, s.create.hideNav = function () {
    var t = i.getQueryElement(this.options.hideNav);
    t && (t.style.display = "none", this.nav = t);
  }, s.destroy.hideNav = function () {
    this.nav && (this.nav.style.display = "");
  }, r.destroy = function () {
    this.allOff();

    for (var _t20 in s.destroy) {
      s.destroy[_t20].call(this);
    }

    delete this.element.infiniteScrollGUID, delete o[this.guid], n && this.$element && n.removeData(this.element, "infiniteScroll");
  }, s.throttle = function (t, e) {
    var i, n;
    return e = e || 200, function () {
      var _this53 = this;

      var o = +new Date(),
          s = arguments,
          r = function r() {
        i = o, t.apply(_this53, s);
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
    var _this54 = this;

    if (this.isLoading || !this.canLoad) return;
    var _this$options = this.options,
        t = _this$options.responseBody,
        e = _this$options.domParseResponse,
        i = _this$options.fetchOptions,
        o = this.getAbsolutePath();
    this.isLoading = !0, "function" == typeof i && (i = i());
    var s = fetch(o, i).then(function (i) {
      if (!i.ok) {
        var _t21 = new Error(i.statusText);

        return _this54.onPageError(_t21, o, i), {
          response: i
        };
      }

      return i[t]().then(function (s) {
        return "text" == t && e && (s = n.parseFromString(s, "text/html")), 204 == i.status ? (_this54.lastPageReached(s, o), {
          body: s,
          response: i
        }) : _this54.onPageLoad(s, o, i);
      });
    })["catch"](function (t) {
      _this54.onPageError(t, o);
    });
    return this.dispatchEvent("request", null, [o, s]), s;
  }, i.onPageLoad = function (t, e, i) {
    return this.options.append || (this.isLoading = !1), this.pageIndex++, this.loadCount++, this.dispatchEvent("load", null, [t, e, i]), this.appendNextPage(t, e, i);
  }, i.appendNextPage = function (t, e, i) {
    var _this55 = this;

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
      return _this55.appendItems(l, a), _this55.isLoading = !1, _this55.dispatchEvent("append", null, [t, e, l, i]), h;
    };

    return this.options.outlayer ? this.appendOutlayerItems(a, c) : c();
  }, i.appendItems = function (t, e) {
    t && t.length && (function (t) {
      var e = t.querySelectorAll("script");

      var _iterator3 = _createForOfIteratorHelper(e),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _t22 = _step3.value;

          var _e20 = document.createElement("script"),
              _i16 = _t22.attributes;

          var _iterator4 = _createForOfIteratorHelper(_i16),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _t23 = _step4.value;

              _e20.setAttribute(_t23.name, _t23.value);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          _e20.innerHTML = _t22.innerHTML, _t22.parentNode.replaceChild(_e20, _t22);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
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

    var _iterator5 = _createForOfIteratorHelper(this.scrollPages),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _t24 = _step5.value;
        if (_t24.top >= e) break;
        i = _t24;
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
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
    for (var _t25 in this.statusEventElements) {
      o(this.statusEventElements[_t25]);
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
    for (var i in e) {
      t[i] = e[i];
    }

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
!function (e) {
  var n = {};

  function t(o) {
    if (n[o]) return n[o].exports;
    var a = n[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(a.exports, a, a.exports, t), a.l = !0, a.exports;
  }

  t.m = e, t.c = n, t.d = function (e, n, o) {
    t.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: o
    });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, t.t = function (e, n) {
    if (1 & n && (e = t(e)), 8 & n) return e;
    if (4 & n && "object" == _typeof(e) && e && e.__esModule) return e;
    var o = Object.create(null);
    if (t.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var a in e) {
      t.d(o, a, function (n) {
        return e[n];
      }.bind(null, a));
    }
    return o;
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return t.d(n, "a", n), n;
  }, t.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, t.p = "", t(t.s = 0);
}([function (e, n) {
  function t(e, n) {
    var t = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      n && (o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })), t.push.apply(t, o);
    }

    return t;
  }

  function o(e) {
    for (var n = 1; n < arguments.length; n++) {
      var o = null != arguments[n] ? arguments[n] : {};
      n % 2 ? t(Object(o), !0).forEach(function (n) {
        a(e, n, o[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(o, n));
      });
    }

    return e;
  }

  function a(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[n] = t, e;
  }

  navigator.share = navigator.share || function () {
    var e = {
      "default": {
        sms: "SMS",
        messenger: "Messenger",
        whatsapp: "WhatsApp",
        twitter: "Twitter",
        linkedin: "Linkedin",
        telegram: "Telegram",
        facebook: "Facebook",
        skype: "Skype",
        pinterest: "Pinterest"
      },
      cs: {
        shareTitle: "Sdílet",
        cancel: "Zrušit",
        copy: "Kopírovat",
        print: "Tisk",
        email: "E-mail",
        selectSms: "Vyberte kontakt"
      },
      sk: {
        shareTitle: "Zdieľať",
        cancel: "Zrušiť",
        copy: "Kopírovat",
        print: "Tlač",
        email: "E-mail",
        selectSms: "Vyberte kontakt"
      },
      ja: {
        shareTitle: "共有する",
        cancel: "キャンセル",
        copy: "コピーする",
        print: "印刷する",
        email: "E-mail",
        selectSms: "連絡先を選択してください"
      },
      zh: {
        shareTitle: "分享",
        cancel: "取消",
        copy: "複製連結",
        print: "列印",
        email: "E-mail",
        selectSms: "選擇聯絡人"
      },
      pt: {
        shareTitle: "Compartilhar",
        cancel: "Cancelar",
        copy: "Copiar",
        print: "Imprimir",
        email: "E-mail",
        selectSms: "Selecione um contato"
      },
      en: {
        shareTitle: "Share",
        cancel: "Cancel",
        copy: "Copy",
        print: "Print",
        email: "E-mail",
        selectSms: "Pick a contact"
      },
      es: {
        shareTitle: "Compartir",
        cancel: "Cancelar",
        copy: "Copiar",
        print: "Imprimir",
        email: "Correo",
        selectSms: "Seleccionar un contacto"
      },
      fr: {
        shareTitle: "Partager",
        cancel: "Annuler",
        copy: "Copier",
        print: "Imprimer",
        email: "E-mail",
        selectSms: "Veuillez choisir un contact"
      },
      de: {
        shareTitle: "Teilen",
        cancel: "Abbrechen",
        copy: "Kopieren",
        print: "Drucken",
        email: "E-mail",
        selectSms: "Wählen Sie einen Kontakt aus"
      },
      nl: {
        shareTitle: "Delen",
        cancel: "Annuleren",
        copy: "Kopiëren",
        print: "Printen",
        email: "E-mail",
        selectSms: "Selecteer een contact"
      },
      sv: {
        shareTitle: "Dela",
        cancel: "Avbryt",
        copy: "Kopiera",
        print: "Skriv ut",
        email: "E-mail",
        selectSms: "Välj en kontakt"
      },
      da: {
        shareTitle: "Del",
        cancel: "Luk",
        copy: "Kopiér",
        print: "Udskriv",
        email: "E-mail",
        selectSms: "Vælg en kontaktperson"
      },
      dk: {
        shareTitle: "Del",
        cancel: "Luk",
        copy: "Kopiér",
        print: "Udskriv",
        email: "E-mail",
        selectSms: "Vælg en kontaktperson"
      },
      ru: {
        shareTitle: "Поделиться",
        cancel: "Отмена",
        copy: "Скопировать",
        print: "Печать",
        email: "Э-майл",
        selectSms: "Выбери контакт"
      },
      tr: {
        shareTitle: "Paylaş",
        cancel: "Vazgeç",
        copy: "Kopyala",
        print: "Yazdır",
        email: "E-posta",
        selectSms: "Bir kişi seç"
      },
      ko: {
        shareTitle: "공유",
        cancel: "취소",
        copy: "링크 복사",
        print: "인쇄",
        email: "E-mail",
        selectSms: "연락처를 선택하세요"
      },
      ta: {
        shareTitle: "பகிர்",
        cancel: "இரத்து",
        copy: "நகலெடு",
        print: "அச்சிடு",
        email: "மின்னஞ்சல்",
        selectSms: "ஒரு தொடர்பைத் தேர்வுசெய்க"
      },
      pl: {
        shareTitle: "Dzielić",
        cancel: "Anuluj",
        copy: "Kopiuj",
        print: "Wydrukować",
        email: "E-mail",
        selectSms: "Wybierz kontakt"
      },
      is: {
        shareTitle: "Deila",
        cancel: "Hætta við",
        copy: "Afrita",
        print: "Prenta",
        email: "Póstur",
        selectSms: "Veldu tengilið"
      }
    },
        n = navigator.userAgent.match(/Android/i),
        t = navigator.userAgent.match(/iPhone|iPad|iPod/i),
        a = navigator.userAgent.match(/iPhone|iPad|iPod|Macintosh/i),
        i = !(t || n),
        c = {
      share: a ? '<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><g><path fill="#424242" d="M381.9,181l95.8-95.8v525.9c0,13.4,8.9,22.3,22.3,22.3c13.4,0,22.3-8.9,22.3-22.3V85.2l95.8,95.8c4.5,4.5,8.9,6.7,15.6,6.7c6.7,0,11.1-2.2,15.6-6.7c8.9-8.9,8.9-22.3,0-31.2L515.6,16.1c-2.2-2.2-4.5-4.5-6.7-4.5c-4.5-2.2-11.1-2.2-17.8,0c-2.2,2.2-4.5,2.2-6.7,4.5L350.7,149.8c-8.9,8.9-8.9,22.3,0,31.2C359.6,190,373,190,381.9,181z M812,276.9H633.7v44.6H812v624H188v-624h178.3v-44.6H188c-24.5,0-44.6,20.1-44.6,44.6v624c0,24.5,20.1,44.6,44.6,44.6h624c24.5,0,44.6-20.1,44.6-44.6v-624C856.6,296.9,836.5,276.9,812,276.9z"/></g></svg>' : '<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#424242" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>',
      email: '<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="#424242" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>',
      copy: '<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#424242" d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>',
      print: '<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#424242" d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
      sms: '<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#424242" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
      messenger: '<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0084ff" d="M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"></path></svg>',
      facebook: '<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#3b5998" d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"></path></svg>',
      whatsapp: '<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#075e54" d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"></path></svg>',
      twitter: '<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#1da1f2" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>',
      linkedin: '<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0077b5" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>',
      telegram: '<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="#0088cc" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path></svg>',
      skype: '<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#00aff0" d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"></path></svg>',
      pinterest: '<svg class="the-icon" width="256px" height="256px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><path d="M0,128.002 C0,180.416 31.518,225.444 76.619,245.241 C76.259,236.303 76.555,225.573 78.847,215.848 C81.308,205.457 95.317,146.1 95.317,146.1 C95.317,146.1 91.228,137.927 91.228,125.848 C91.228,106.879 102.222,92.712 115.914,92.712 C127.557,92.712 133.182,101.457 133.182,111.929 C133.182,123.633 125.717,141.14 121.878,157.355 C118.671,170.933 128.686,182.008 142.081,182.008 C166.333,182.008 182.667,150.859 182.667,113.953 C182.667,85.899 163.772,64.901 129.405,64.901 C90.577,64.901 66.388,93.857 66.388,126.201 C66.388,137.353 69.676,145.217 74.826,151.307 C77.194,154.104 77.523,155.229 76.666,158.441 C76.052,160.796 74.642,166.466 74.058,168.713 C73.206,171.955 70.579,173.114 67.649,171.917 C49.765,164.616 41.436,145.031 41.436,123.015 C41.436,86.654 72.102,43.054 132.918,43.054 C181.788,43.054 213.953,78.418 213.953,116.379 C213.953,166.592 186.037,204.105 144.887,204.105 C131.068,204.105 118.069,196.635 113.616,188.15 C113.616,188.15 106.185,217.642 104.611,223.337 C101.897,233.206 96.585,243.07 91.728,250.758 C103.24,254.156 115.401,256.007 128.005,256.007 C198.689,256.007 256.001,198.698 256.001,128.002 C256.001,57.309 198.689,0 128.005,0 C57.314,0 0,57.309 0,128.002 Z" fill="#CB1F27"></path></svg>'
    };

    function l(e) {
      var n = e,
          t = document.head || document.getElementsByTagName("head")[0],
          o = document.createElement("style");
      o.type = "text/css", o.appendChild(document.createTextNode(n)), o.id = "shareAPIPolyfill-style", t.appendChild(o);
    }

    return function () {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return new Promise(function (s, r) {
        n.title && "string" == typeof n.title && n.text && "string" == typeof n.text || r("Invalid Params");
        var p = n.title,
            d = n.url,
            h = n.fbId,
            m = n.hashtags,
            u = o(o({}, {
          copy: !0,
          print: !0,
          email: !0,
          sms: !0,
          messenger: !0,
          facebook: !0,
          whatsapp: !0,
          twitter: !0,
          linkedin: !0,
          telegram: !0,
          skype: !0,
          pinterest: !0,
          language: "en"
        }), t),
            v = o(o({}, e["default"]), e[u.language] ? e[u.language] : e[navigator.language] || e[navigator.language.substr(0, 2).toLowerCase()] || e.en),
            g = n.text || p,
            f = encodeURIComponent(n.image);

        function y() {
          k.classList.remove("visible"), x.classList.remove("visible"), k.addEventListener("transitionend", function e() {
            k.removeEventListener("transitionend", e), document.body.removeChild(k);
          }), x.addEventListener("transitionend", function e() {
            x.removeEventListener("transitionend", e), document.body.removeChild(x), document.head.removeChild(document.querySelector("#shareAPIPolyfill-style")), document.removeEventListener("keyup", C);
          });
        }

        l('\n#shareAPIPolyfill-backdrop,\n#shareAPIPolyfill-container {\n  opacity: 0;\n  pointer-events: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  will-change: opacity;\n  z-index: 99999999;\n}\n#shareAPIPolyfill-backdrop {\n  transition: opacity linear 250ms;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n#shareAPIPolyfill-container {\n  background-color: #f9f9f9;\n  top: auto;\n  max-width: 400px;\n  height: auto;\n  transition-property: transform,opacity;\n  transition-timing-function: linear;\n  transition-duration: 250ms;\n  transition-delay: 150ms;\n  transform: translateY(100%);\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", arial, sans-serif, "Microsoft JhengHei";\n}\n#shareAPIPolyfill-backdrop.visible,\n#shareAPIPolyfill-container.visible {\n  opacity: 1;\n  pointer-events: all;\n}\n#shareAPIPolyfill-container.visible {\n  transform: translateY(0);\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-header {\n  background: #EEE;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-header .shareAPIPolyfill-icons-container {\n  display: flex;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-header-title {\n  background-color: #E0E0E0;\n  padding: 10px 18px;\n  color: #424242;\n  font-weight: 600;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-body {\n  border-top: solid 1px #EEE;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-footer {\n width: 100%;\n display: block;\n border: none;\n transition: opacity ease-in 250ms;\n border-top: solid 1px #EEE;\n background-color: #EEE;\n text-align: center;\n padding: 10px;\n font-size:13px;\n cursor: pointer;\n opacity: .5;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-footer:hover {\n  opacity: 1;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-icons-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n#shareAPIPolyfill-container .tool-icon {\n border: none;\n display: inline-block;\n width: 25%;\n box-sizing: border-box;\n font-weight: 400;\n font-size: 12px;\n -webkit-font-smoothing: antialiased;\n -moz-osx-font-smoothing: grayscale;\n text-align: center;\n cursor: pointer;\n background-color: transparent;\n padding: 20px 0;\n}\n#shareAPIPolyfill-container .tool-icon:hover {\n  box-shadow: inset 0 0 20px rgba(0,0,0, .125);\n}\n#shareAPIPolyfill-container .the-icon-title {\n padding-top: 10px;\n display: block;\n}\n.shareAPIPolyfill-header-title .the-icon {\n\tdisplay: inline-block;\n\theight: 20px;\n\twidth: 20px;\n\tpadding-right: 5px;\n\tvertical-align:'.concat(a ? "-2px" : "-4px", ";\n}\n.shareAPIPolyfill-icons-container.title .tool-icon .the-icon,\n.shareAPIPolyfill-icons-container.body .tool-icon .the-icon {\n  display: block;\n  margin: auto;\n  width: 42px;\n  height: 36px;\n}\n.shareAPIPolyfill-icons-container.title .tool-icon .the-icon {\n  height: 24px;\n}\n.shareAPIPolyfill-icons-container .hidden {\n  display: none !important;\n}\n"));
        var w,
            b,
            P,
            k = document.createElement("div"),
            x = document.createElement("div");

        function C(e) {
          27 === e.keyCode && y();
        }

        k.id = "shareAPIPolyfill-backdrop", x.id = "shareAPIPolyfill-container", x.setAttribute("tabindex", "0"), x.innerHTML = '\n<div class="shareAPIPolyfill-header">\n <div class="shareAPIPolyfill-header-title" tabindex="0">'.concat(c.share, " ").concat(v.shareTitle, '</div>\n <div class="shareAPIPolyfill-icons-container title">\n  <button class="').concat(u.copy ? "" : "hidden", ' tool-icon copy" data-tool="copy">\n   ').concat(c.copy, '\n   <span class="the-icon-title">').concat(v.copy, '</span>\n  </button>\n  <button class="').concat(u.print ? "" : "hidden", ' tool-icon print" data-tool="print">\n   ').concat(c.print, '\n   <span class="the-icon-title">').concat(v.print, '</span>\n  </button>\n  <button class="').concat(u.email ? "" : "hidden", ' tool-icon email" data-tool="email">\n   ').concat(c.email, '\n   <span class="the-icon-title">').concat(v.email, '</span>\n  </button>\n  <button class="').concat(u.sms ? "" : "hidden", ' tool-icon sms" data-tool="sms">\n   ').concat(c.sms, '\n   <span class="the-icon-title">').concat(v.sms, '</span>\n  </button>\n </div>\n</div>\n<div class="shareAPIPolyfill-body">\n <div class="shareAPIPolyfill-icons-container body">\n  ').concat(h ? '\n   <button class="tool-icon messenger '.concat(u.messenger ? "" : "hidden", '" data-tool="messenger">\n    ').concat(c.messenger, '\n    <span class="the-icon-title">').concat(v.messenger, "</span>\n   </button>\n  ") : "", '\n  <button class="').concat(u.facebook ? "" : "hidden", ' tool-icon facebook" data-tool="facebook">\n   ').concat(c.facebook, '\n   <span class="the-icon-title">').concat(v.facebook, '</span>\n  </button>\n  <button class="').concat(u.whatsapp ? "" : "hidden", ' tool-icon whatsapp" data-tool="whatsapp">\n   ').concat(c.whatsapp, '\n   <span class="the-icon-title">').concat(v.whatsapp, '</span>\n  </button>\n  <button class="').concat(u.twitter ? "" : "hidden", ' tool-icon twitter" data-tool="twitter">\n   ').concat(c.twitter, '\n   <span class="the-icon-title">').concat(v.twitter, '</span>\n  </button>\n  <button class="').concat(u.linkedin ? "" : "hidden", ' tool-icon linkedin" data-tool="linkedin">\n   ').concat(c.linkedin, '\n   <span class="the-icon-title">').concat(v.linkedin, '</span>\n  </button>\n  <button class="').concat(u.telegram ? "" : "hidden", ' tool-icon telegram" data-tool="telegram">\n   ').concat(c.telegram, '\n   <span class="the-icon-title">').concat(v.telegram, '</span>\n  </button>\n  <button class="').concat(u.skype ? "" : "hidden", ' tool-icon skype skype-share" data-tool="skype" data-href="').concat(d, '" data-text="').concat(p + ": " + d, '">\n   ').concat(c.skype, '\n   <span class="the-icon-title">').concat(v.skype, '</span>\n  </button>\n  <button class="').concat(u.pinterest ? "" : "hidden", ' tool-icon pinterest" data-tool="pinterest">\n   ').concat(c.pinterest, '\n   <span class="the-icon-title">').concat(v.pinterest, '</span>\n  </button>\n </div>\n <button class="shareAPIPolyfill-footer">\n  ').concat(v.cancel, "\n </button>\n</div>\n"), k.addEventListener("click", function () {
          y();
        }), !1 !== u.skype && (w = window, b = document, P = "script", w.loadSkypeWebSdkAsync = w.loadSkypeWebSdkAsync || function (e) {
          var n,
              t = b.getElementsByTagName(P)[0];
          b.getElementById(e.id) || ((n = b.createElement(P)).id = e.id, n.src = e.scriptToLoad, n.onload = e.callback, t.parentNode.insertBefore(n, t));
        }, w.loadSkypeWebSdkAsync({
          scriptToLoad: "https://swx.cdn.skype.com/shared/v/latest/skypewebsdk.js",
          id: "skype_web_sdk"
        })), requestAnimationFrame(function (e) {
          document.body.appendChild(k), document.body.appendChild(x), document.addEventListener("keyup", C), Array.from(x.querySelectorAll(".tool-icon")).forEach(function (e) {
            e.addEventListener("click", function (n) {
              var t = g + ": " + d;

              switch (e.dataset.tool) {
                case "copy":
                  navigator.clipboard.writeText(d);
                  break;

                case "print":
                  setTimeout(function (e) {
                    self.print();
                  }, 500);
                  break;

                case "email":
                  window.open("mailto:?subject=" + p + "&body=" + d);
                  break;

                case "sms":
                  location.href = "sms:".concat(v.selectSms, "?&body=").concat(p, ": ").concat(d);
                  break;

                case "messenger":
                  window.open("http://www.facebook.com/dialog/send?app_id=" + h + "&display=popup&href=" + encodeURIComponent(d) + "&link=" + encodeURIComponent(d) + "&redirect_uri=" + encodeURIComponent(d) + "&quote=" + encodeURIComponent(g));
                  break;

                case "facebook":
                  window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(d) + "&quote=" + encodeURIComponent(g));
                  break;

                case "whatsapp":
                  window.open((i ? "https://api.whatsapp.com/send?text=" : "whatsapp://send?text=") + encodeURIComponent(g + "\n" + d));
                  break;

                case "twitter":
                  window.open("https://twitter.com/intent/tweet?text=".concat(g, "&url=").concat(d, "&hashtags=").concat(m || ""));
                  break;

                case "linkedin":
                  window.open("https://www.linkedin.com/shareArticle?mini=true&url=".concat(d, "&title=").concat(p, "&summary=").concat(g, "&source=LinkedIn"));
                  break;

                case "telegram":
                  window.open(i ? "https://telegram.me/share/msg?url=" + d + "&text=" + g : "tg://msg?text=" + t);
                  break;

                case "pinterest":
                  window.open("https://pinterest.com/pin/create/button/?url=" + d + "&description=" + g + "&media=" + f);
              }

              s(), y();
            });
          }), x.querySelector(".shareAPIPolyfill-footer").addEventListener("click", y), requestAnimationFrame(function () {
            k.classList.add("visible"), x.classList.add("visible");
          }), document.getElementById("shareAPIPolyfill-container").focus();
        });
      });
    };
  }();
}]);
/**
 * Swiper 7.0.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 9, 2021
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

    var _super13 = _createSuper(n);

    function n(e) {
      var _this56;

      _classCallCheck(this, n);

      _this56 = _super13.call.apply(_super13, [this].concat(_toConsumableArray(e || []))), function (e) {
        var t = e.__proto__;
        Object.defineProperty(e, "__proto__", {
          get: function get() {
            return t;
          },
          set: function set(e) {
            t.__proto__ = e;
          }
        });
      }(_assertThisInitialized(_this56));
      return _this56;
    }

    return n;
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
      var _s4 = e.trim();

      if (_s4.indexOf("<") >= 0 && _s4.indexOf(">") >= 0) {
        var _e21 = "div";
        0 === _s4.indexOf("<li") && (_e21 = "ul"), 0 === _s4.indexOf("<tr") && (_e21 = "tbody"), 0 !== _s4.indexOf("<td") && 0 !== _s4.indexOf("<th") || (_e21 = "tr"), 0 === _s4.indexOf("<tbody") && (_e21 = "table"), 0 === _s4.indexOf("<option") && (_e21 = "select");

        var _t26 = i.createElement(_e21);

        _t26.innerHTML = _s4;

        for (var _e22 = 0; _e22 < _t26.childNodes.length; _e22 += 1) {
          l.push(_t26.childNodes[_e22]);
        }
      } else l = function (e, t) {
        if ("string" != typeof e) return [e];
        var s = [],
            a = t.querySelectorAll(e);

        for (var _e23 = 0; _e23 < a.length; _e23 += 1) {
          s.push(a[_e23]);
        }

        return s;
      }(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) l.push(e);else if (Array.isArray(e)) {
      if (e instanceof n) return e;
      l = e;
    }

    return new n(function (e) {
      var t = [];

      for (var _s5 = 0; _s5 < e.length; _s5 += 1) {
        -1 === t.indexOf(e[_s5]) && t.push(e[_s5]);
      }

      return t;
    }(l));
  }

  d.fn = n.prototype;
  var c = {
    addClass: function addClass() {
      for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        e[_key2] = arguments[_key2];
      }

      var t = l(e.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var _e$classList;

        (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(t));
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
        var _e$classList2;

        (_e$classList2 = e.classList).remove.apply(_e$classList2, _toConsumableArray(t));
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

      for (var _s6 = 0; _s6 < this.length; _s6 += 1) {
        if (2 === arguments.length) this[_s6].setAttribute(e, t);else for (var _t27 in e) {
          this[_s6][_t27] = e[_t27], this[_s6].setAttribute(_t27, e[_t27]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var _t28 = 0; _t28 < this.length; _t28 += 1) {
        this[_t28].removeAttribute(e);
      }

      return this;
    },
    transform: function transform(e) {
      for (var _t29 = 0; _t29 < this.length; _t29 += 1) {
        this[_t29].style.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      for (var _t30 = 0; _t30 < this.length; _t30 += 1) {
        this[_t30].style.transitionDuration = "string" != typeof e ? "".concat(e, "ms") : e;
      }

      return this;
    },
    on: function on() {
      var _e25, _e26;

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
          var _e24 = d(t).parents();

          for (var _t31 = 0; _t31 < _e24.length; _t31 += 1) {
            d(_e24[_t31]).is(s) && a.apply(_e24[_t31], i);
          }
        }
      }

      function n(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t);
      }

      "function" == typeof e[1] && ((_e25 = e, _e26 = _slicedToArray(_e25, 3), t = _e26[0], a = _e26[1], i = _e26[2], _e25), s = void 0), i || (i = !1);
      var l = t.split(" ");
      var o;

      for (var _e27 = 0; _e27 < this.length; _e27 += 1) {
        var _t32 = this[_e27];
        if (s) for (o = 0; o < l.length; o += 1) {
          var _e28 = l[o];
          _t32.dom7LiveListeners || (_t32.dom7LiveListeners = {}), _t32.dom7LiveListeners[_e28] || (_t32.dom7LiveListeners[_e28] = []), _t32.dom7LiveListeners[_e28].push({
            listener: a,
            proxyListener: r
          }), _t32.addEventListener(_e28, r, i);
        } else for (o = 0; o < l.length; o += 1) {
          var _e29 = l[o];
          _t32.dom7Listeners || (_t32.dom7Listeners = {}), _t32.dom7Listeners[_e29] || (_t32.dom7Listeners[_e29] = []), _t32.dom7Listeners[_e29].push({
            listener: a,
            proxyListener: n
          }), _t32.addEventListener(_e29, n, i);
        }
      }

      return this;
    },
    off: function off() {
      var _e30, _e31;

      for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        e[_key7] = arguments[_key7];
      }

      var t = e[0],
          s = e[1],
          a = e[2],
          i = e[3];
      "function" == typeof e[1] && ((_e30 = e, _e31 = _slicedToArray(_e30, 3), t = _e31[0], a = _e31[1], i = _e31[2], _e30), s = void 0), i || (i = !1);
      var r = t.split(" ");

      for (var _e32 = 0; _e32 < r.length; _e32 += 1) {
        var _t33 = r[_e32];

        for (var _e33 = 0; _e33 < this.length; _e33 += 1) {
          var _r4 = this[_e33];

          var _n9 = void 0;

          if (!s && _r4.dom7Listeners ? _n9 = _r4.dom7Listeners[_t33] : s && _r4.dom7LiveListeners && (_n9 = _r4.dom7LiveListeners[_t33]), _n9 && _n9.length) for (var _e34 = _n9.length - 1; _e34 >= 0; _e34 -= 1) {
            var _s7 = _n9[_e34];
            a && _s7.listener === a || a && _s7.listener && _s7.listener.dom7proxy && _s7.listener.dom7proxy === a ? (_r4.removeEventListener(_t33, _s7.proxyListener, i), _n9.splice(_e34, 1)) : a || (_r4.removeEventListener(_t33, _s7.proxyListener, i), _n9.splice(_e34, 1));
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

      for (var _i17 = 0; _i17 < s.length; _i17 += 1) {
        var _r5 = s[_i17];

        for (var _s8 = 0; _s8 < this.length; _s8 += 1) {
          var _i18 = this[_s8];

          if (t.CustomEvent) {
            var _s9 = new t.CustomEvent(_r5, {
              detail: a,
              bubbles: !0,
              cancelable: !0
            });

            _i18.dom7EventData = e.filter(function (e, t) {
              return t > 0;
            }), _i18.dispatchEvent(_s9), _i18.dom7EventData = [], delete _i18.dom7EventData;
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
          var _e35 = this.styles();

          return this[0].offsetWidth + parseFloat(_e35.getPropertyValue("margin-right")) + parseFloat(_e35.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var _e36 = this.styles();

          return this[0].offsetHeight + parseFloat(_e36.getPropertyValue("margin-top")) + parseFloat(_e36.getPropertyValue("margin-bottom"));
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
        var _e37 = r(),
            _t34 = a(),
            _s10 = this[0],
            _i19 = _s10.getBoundingClientRect(),
            _n10 = _t34.body,
            _l = _s10.clientTop || _n10.clientTop || 0,
            _o5 = _s10.clientLeft || _n10.clientLeft || 0,
            _d2 = _s10 === _e37 ? _e37.scrollY : _s10.scrollTop,
            _c = _s10 === _e37 ? _e37.scrollX : _s10.scrollLeft;

        return {
          top: _i19.top + _d2 - _l,
          left: _i19.left + _c - _o5
        };
      }

      return null;
    },
    css: function css(e, t) {
      var s = r();
      var a;

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1) {
            for (var _t35 in e) {
              this[a].style[_t35] = e[_t35];
            }
          }

          return this;
        }

        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) {
          this[a].style[e] = t;
        }

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

      for (var _t36 = 0; _t36 < this.length; _t36 += 1) {
        this[_t36].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var _t37 = 0; _t37 < this.length; _t37 += 1) {
        this[_t37].textContent = e;
      }

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

        for (l = d(e), o = 0; o < l.length; o += 1) {
          if (l[o] === i) return !0;
        }

        return !1;
      }

      if (e === s) return i === s;
      if (e === t) return i === t;

      if (e.nodeType || e instanceof n) {
        for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1) {
          if (l[o] === i) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (e > t - 1) return d([]);

      if (e < 0) {
        var _s11 = t + e;

        return d(_s11 < 0 ? [] : [this[_s11]]);
      }

      return d([this[e]]);
    },
    append: function append() {
      var t;
      var s = a();

      for (var _a2 = 0; _a2 < arguments.length; _a2 += 1) {
        t = _a2 < 0 || arguments.length <= _a2 ? undefined : arguments[_a2];

        for (var _e38 = 0; _e38 < this.length; _e38 += 1) {
          if ("string" == typeof t) {
            var _a3 = s.createElement("div");

            for (_a3.innerHTML = t; _a3.firstChild;) {
              this[_e38].appendChild(_a3.firstChild);
            }
          } else if (t instanceof n) for (var _s12 = 0; _s12 < t.length; _s12 += 1) {
            this[_e38].appendChild(t[_s12]);
          } else this[_e38].appendChild(t);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t = a();
      var s, i;

      for (s = 0; s < this.length; s += 1) {
        if ("string" == typeof e) {
          var _a4 = t.createElement("div");

          for (_a4.innerHTML = e, i = _a4.childNodes.length - 1; i >= 0; i -= 1) {
            this[s].insertBefore(_a4.childNodes[i], this[s].childNodes[0]);
          }
        } else if (e instanceof n) for (i = 0; i < e.length; i += 1) {
          this[s].insertBefore(e[i], this[s].childNodes[0]);
        } else this[s].insertBefore(e, this[s].childNodes[0]);
      }

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
        var _a5 = s.nextElementSibling;
        e ? d(_a5).is(e) && t.push(_a5) : t.push(_a5), s = _a5;
      }

      return d(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var _t38 = this[0];
        return e ? _t38.previousElementSibling && d(_t38.previousElementSibling).is(e) ? d([_t38.previousElementSibling]) : d([]) : _t38.previousElementSibling ? d([_t38.previousElementSibling]) : d([]);
      }

      return d([]);
    },
    prevAll: function prevAll(e) {
      var t = [];
      var s = this[0];
      if (!s) return d([]);

      for (; s.previousElementSibling;) {
        var _a6 = s.previousElementSibling;
        e ? d(_a6).is(e) && t.push(_a6) : t.push(_a6), s = _a6;
      }

      return d(t);
    },
    parent: function parent(e) {
      var t = [];

      for (var _s13 = 0; _s13 < this.length; _s13 += 1) {
        null !== this[_s13].parentNode && (e ? d(this[_s13].parentNode).is(e) && t.push(this[_s13].parentNode) : t.push(this[_s13].parentNode));
      }

      return d(t);
    },
    parents: function parents(e) {
      var t = [];

      for (var _s14 = 0; _s14 < this.length; _s14 += 1) {
        var _a7 = this[_s14].parentNode;

        for (; _a7;) {
          e ? d(_a7).is(e) && t.push(_a7) : t.push(_a7), _a7 = _a7.parentNode;
        }
      }

      return d(t);
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      var t = [];

      for (var _s15 = 0; _s15 < this.length; _s15 += 1) {
        var _a8 = this[_s15].querySelectorAll(e);

        for (var _e39 = 0; _e39 < _a8.length; _e39 += 1) {
          t.push(_a8[_e39]);
        }
      }

      return d(t);
    },
    children: function children(e) {
      var t = [];

      for (var _s16 = 0; _s16 < this.length; _s16 += 1) {
        var _a9 = this[_s16].children;

        for (var _s17 = 0; _s17 < _a9.length; _s17 += 1) {
          e && !d(_a9[_s17]).is(e) || t.push(_a9[_s17]);
        }
      }

      return d(t);
    },
    filter: function filter(e) {
      return d(o(this, e));
    },
    remove: function remove() {
      for (var _e40 = 0; _e40 < this.length; _e40 += 1) {
        this[_e40].parentNode && this[_e40].parentNode.removeChild(this[_e40]);
      }

      return this;
    }
  };

  function p(e) {
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

    for (var _i20 = 1; _i20 < arguments.length; _i20 += 1) {
      var _r6 = _i20 < 0 || arguments.length <= _i20 ? undefined : arguments[_i20];

      if (null != _r6 && (a = _r6, !("undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)))) {
        var _e41 = Object.keys(Object(_r6)).filter(function (e) {
          return s.indexOf(e) < 0;
        });

        for (var _s18 = 0, _a10 = _e41.length; _s18 < _a10; _s18 += 1) {
          var _a11 = _e41[_s18],
              _i21 = Object.getOwnPropertyDescriptor(_r6, _a11);

          void 0 !== _i21 && _i21.enumerable && (m(t[_a11]) && m(_r6[_a11]) ? _r6[_a11].__swiper__ ? t[_a11] = _r6[_a11] : f(t[_a11], _r6[_a11]) : !m(t[_a11]) && m(_r6[_a11]) ? (t[_a11] = {}, _r6[_a11].__swiper__ ? t[_a11] = _r6[_a11] : f(t[_a11], _r6[_a11])) : t[_a11] = _r6[_a11]);
        }
      }
    }

    var a;
    return t;
  }

  function g(e, t, s) {
    e.style.setProperty(t, s);
  }

  function v(_ref11) {
    var e = _ref11.swiper,
        t = _ref11.targetPosition,
        s = _ref11.side;
    var a = r(),
        i = -e.translate;
    var n,
        l = null;
    var o = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(e.cssModeFrameID);

    var d = t > i ? "next" : "prev",
        c = function c(e, t) {
      return "next" === d && e >= t || "prev" === d && e <= t;
    },
        p = function p() {
      n = new Date().getTime(), null === l && (l = n);
      var r = Math.max(Math.min((n - l) / o, 1), 0),
          d = .5 - Math.cos(r * Math.PI) / 2;
      var u = i + d * (t - i);
      if (c(u, t) && (u = t), e.wrapperEl.scrollTo(_defineProperty({}, s, u)), c(u, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(function () {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo(_defineProperty({}, s, u));
      }), void a.cancelAnimationFrame(e.cssModeFrameID);
      e.cssModeFrameID = a.requestAnimationFrame(p);
    };

    p();
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
            var _s19 = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });

            e.addEventListener("testPassiveListener", null, _s19);
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
      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          e = _ref12.userAgent;

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
      var c = i.match(/(iPad).*OS\s([\d_]+)/);
      var p = i.match(/(iPod)(.*OS\s([\d_]+))?/),
          u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          h = "Win32" === a;
      var m = "MacIntel" === a;
      return !c && m && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(l, "x").concat(o)) >= 0 && (c = i.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), m = !1), d && !h && (n.os = "android", n.android = !0), (c || u || p) && (n.os = "ios", n.ios = !0), n;
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

  Object.keys(c).forEach(function (e) {
    Object.defineProperty(d.fn, e, {
      value: c[e],
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

  function $(_ref13) {
    var e = _ref13.swiper,
        t = _ref13.runCallbacks,
        s = _ref13.direction,
        a = _ref13.step;
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
        c = t.enabled;
    if (!c) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    var p = e;
    p.originalEvent && (p = p.originalEvent);
    var h = d(p.target);
    if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
    if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
    if (!n.isTouchEvent && "button" in p && p.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
    var m = l.noSwipingSelector ? l.noSwipingSelector : ".".concat(l.noSwipingClass),
        f = !(!p.target || !p.target.shadowRoot);
    if (l.noSwiping && (f ? function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      return function t(s) {
        return s && s !== a() && s !== r() ? (s.assignedSlot && (s = s.assignedSlot), s.closest(e) || t(s.getRootNode().host)) : null;
      }(t);
    }(m, p.target) : h.closest(m)[0])) return void (t.allowClick = !0);
    if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
    o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
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
    }), o.startX = g, o.startY = v, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
      var _e42 = !0;

      h.is(n.focusableElements) && (_e42 = !1), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();

      var _a12 = _e42 && t.allowTouchMove && l.touchStartPreventDefault;

      !l.touchStartForcePreventDefault && !_a12 || h[0].isContentEditable || p.preventDefault();
    }

    t.emit("touchStart", p);
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
    var c = e;
    if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
    if (i.isTouchEvent && "touchmove" !== c.type) return;
    var p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
        h = "touchmove" === c.type ? p.pageX : c.pageX,
        m = "touchmove" === c.type ? p.pageY : c.pageY;
    if (c.preventedByNestedSwiper) return n.startX = h, void (n.startY = m);
    if (!s.allowTouchMove) return s.allowClick = !1, void (i.isTouched && (Object.assign(n, {
      startX: h,
      startY: m,
      currentX: h,
      currentY: m
    }), i.touchStartTime = u()));
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
      if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
    } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
    if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
    if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
    n.currentX = h, n.currentY = m;
    var f = n.currentX - n.startX,
        g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)) < s.params.threshold) return;

    if (void 0 === i.isScrolling) {
      var _e43;

      s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (_e43 = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? _e43 > r.touchAngle : 90 - _e43 > r.touchAngle);
    }

    if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
    if (!i.startMoving) return;
    s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
    var v = s.isHorizontal() ? f : g;
    n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
    var w = !0,
        b = r.resistanceRatio;

    if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + i.startTranslate + v, b))) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - i.startTranslate - v, b))), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
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
        c = d - s.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(o), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)), s.lastClickTime = u(), p(function () {
      t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    var h;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
    if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
      currentPos: h
    });
    var m = 0,
        f = t.slidesSizesGrid[0];

    for (var _e44 = 0; _e44 < n.length; _e44 += _e44 < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
      var _t39 = _e44 < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

      void 0 !== n[_e44 + _t39] ? h >= n[_e44] && h < n[_e44 + _t39] && (m = _e44, f = n[_e44 + _t39] - n[_e44]) : h >= n[_e44] && (m = _e44, f = n[n.length - 1] - n[n.length - 2]);
    }

    var g = (h - n[m]) / f,
        v = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

    if (c > a.longSwipesMs) {
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
        c = !!i.nested,
        p = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;

    if (d.touch) {
      var _t40 = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
        passive: !0,
        capture: !1
      };

      n[p](r.start, e.onTouchStart, _t40), n[p](r.move, e.onTouchMove, d.passiveListener ? {
        passive: !1,
        capture: c
      } : c), n[p](r.end, e.onTouchEnd, _t40), r.cancel && n[p](r.cancel, e.onTouchEnd, _t40);
    } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);

    (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k, !0) : e[u]("observerUpdate", k, !0);
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
            c = i.children(".".concat(e.params.slideClass)),
            p = o ? e.virtual.slides.length : c.length;
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
        "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({
          marginLeft: "",
          marginBottom: "",
          marginTop: ""
        }) : c.css({
          marginRight: "",
          marginBottom: "",
          marginTop: ""
        }), a.centeredSlides && a.cssMode && (g(e.wrapperEl, "--swiper-centered-offset-before", ""), g(e.wrapperEl, "--swiper-centered-offset-after", ""));
        var C = a.grid && a.grid.rows > 1 && e.grid;
        var $;
        C && e.grid.initSlides(p);
        var S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter(function (e) {
          return void 0 !== a.breakpoints[e].slidesPerView;
        }).length > 0;

        for (var _i22 = 0; _i22 < p; _i22 += 1) {
          $ = 0;

          var _n11 = c.eq(_i22);

          if (C && e.grid.updateSlide(_i22, _n11, p, t), "none" !== _n11.css("display")) {
            if ("auto" === a.slidesPerView) {
              S && (c[_i22].style[t("width")] = "");

              var _r7 = getComputedStyle(_n11[0]),
                  _l2 = _n11[0].style.transform,
                  _o6 = _n11[0].style.webkitTransform;

              if (_l2 && (_n11[0].style.transform = "none"), _o6 && (_n11[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? _n11.outerWidth(!0) : _n11.outerHeight(!0);else {
                var _e45 = s(_r7, "width"),
                    _t41 = s(_r7, "padding-left"),
                    _a13 = s(_r7, "padding-right"),
                    _i23 = s(_r7, "margin-left"),
                    _l3 = s(_r7, "margin-right"),
                    _o7 = _r7.getPropertyValue("box-sizing");

                if (_o7 && "border-box" === _o7) $ = _e45 + _i23 + _l3;else {
                  var _n11$ = _n11[0],
                      _s20 = _n11$.clientWidth,
                      _r8 = _n11$.offsetWidth;
                  $ = _e45 + _t41 + _a13 + _i23 + _l3 + (_r8 - _s20);
                }
              }
              _l2 && (_n11[0].style.transform = _l2), _o6 && (_n11[0].style.webkitTransform = _o6), a.roundLengths && ($ = Math.floor($));
            } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[_i22] && (c[_i22].style[t("width")] = "".concat($, "px"));

            c[_i22] && (c[_i22].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== _i22 && (y = y - r / 2 - x), 0 === _i22 && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), T % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, T += 1;
          }
        }

        if (e.virtualSize = Math.max(e.virtualSize, r) + v, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
          width: "".concat(e.virtualSize + a.spaceBetween, "px")
        }), a.setWrapperSize && i.css(_defineProperty({}, t("width"), "".concat(e.virtualSize + a.spaceBetween, "px"))), C && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
          var _t42 = [];

          for (var _s21 = 0; _s21 < u.length; _s21 += 1) {
            var _i24 = u[_s21];
            a.roundLengths && (_i24 = Math.floor(_i24)), u[_s21] <= e.virtualSize - r && _t42.push(_i24);
          }

          u = _t42, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
        }

        if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
          var _s22 = e.isHorizontal() && n ? "marginLeft" : t("marginRight");

          c.filter(function (e, t) {
            return !a.cssMode || t !== c.length - 1;
          }).css(_defineProperty({}, _s22, "".concat(x, "px")));
        }

        if (a.centeredSlides && a.centeredSlidesBounds) {
          var _e46 = 0;
          m.forEach(function (t) {
            _e46 += t + (a.spaceBetween ? a.spaceBetween : 0);
          }), _e46 -= a.spaceBetween;

          var _t43 = _e46 - r;

          u = u.map(function (e) {
            return e < 0 ? -f : e > _t43 ? _t43 + v : e;
          });
        }

        if (a.centerInsufficientSlides) {
          var _e47 = 0;

          if (m.forEach(function (t) {
            _e47 += t + (a.spaceBetween ? a.spaceBetween : 0);
          }), _e47 -= a.spaceBetween, _e47 < r) {
            var _t44 = (r - _e47) / 2;

            u.forEach(function (e, s) {
              u[s] = e - _t44;
            }), h.forEach(function (e, s) {
              h[s] = e + _t44;
            });
          }
        }

        if (Object.assign(e, {
          slides: c,
          snapGrid: u,
          slidesGrid: h,
          slidesSizesGrid: m
        }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
          g(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), g(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");

          var _t45 = -e.snapGrid[0],
              _s23 = -e.slidesGrid[0];

          e.snapGrid = e.snapGrid.map(function (e) {
            return e + _t45;
          }), e.slidesGrid = e.slidesGrid.map(function (e) {
            return e + _s23;
          });
        }

        p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset();
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
            var _e48 = t.activeIndex + i;

            if (_e48 > t.slides.length && !a) break;
            s.push(n(_e48));
          }
        } else s.push(n(t.activeIndex));

        for (i = 0; i < s.length; i += 1) {
          if (void 0 !== s[i]) {
            var _e49 = s[i].offsetHeight;
            r = _e49 > r ? _e49 : r;
          }
        }

        r && t.$wrapperEl.css("height", "".concat(r, "px"));
      },
      updateSlidesOffset: function updateSlidesOffset() {
        var e = this,
            t = e.slides;

        for (var _s24 = 0; _s24 < t.length; _s24 += 1) {
          t[_s24].swiperSlideOffset = e.isHorizontal() ? t[_s24].offsetLeft : t[_s24].offsetTop;
        }
      },
      updateSlidesProgress: function updateSlidesProgress() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
        var t = this,
            s = t.params,
            a = t.slides,
            i = t.rtlTranslate;
        if (0 === a.length) return;
        void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
        var r = -e;
        i && (r = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

        for (var _e50 = 0; _e50 < a.length; _e50 += 1) {
          var _n12 = a[_e50];
          var _l4 = _n12.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (_l4 -= a[0].swiperSlideOffset);

          var _o8 = (r + (s.centeredSlides ? t.minTranslate() : 0) - _l4) / (_n12.swiperSlideSize + s.spaceBetween),
              _d3 = -(r - _l4),
              _c2 = _d3 + t.slidesSizesGrid[_e50];

          (_d3 >= 0 && _d3 < t.size - 1 || _c2 > 1 && _c2 <= t.size || _d3 <= 0 && _c2 >= t.size) && (t.visibleSlides.push(_n12), t.visibleSlidesIndexes.push(_e50), a.eq(_e50).addClass(s.slideVisibleClass)), _n12.progress = i ? -_o8 : _o8;
        }

        t.visibleSlides = d(t.visibleSlides);
      },
      updateProgress: function updateProgress(e) {
        var t = this;

        if (void 0 === e) {
          var _s25 = t.rtlTranslate ? -1 : 1;

          e = t && t.translate && t.translate * _s25 || 0;
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
            c = e;

        if (void 0 === c) {
          for (var _e51 = 0; _e51 < a.length; _e51 += 1) {
            void 0 !== a[_e51 + 1] ? s >= a[_e51] && s < a[_e51 + 1] - (a[_e51 + 1] - a[_e51]) / 2 ? c = _e51 : s >= a[_e51] && s < a[_e51 + 1] && (c = _e51 + 1) : s >= a[_e51] && (c = _e51);
          }

          r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
        }

        if (i.indexOf(s) >= 0) d = i.indexOf(s);else {
          var _e52 = Math.min(r.slidesPerGroupSkip, c);

          d = _e52 + Math.floor((c - _e52) / r.slidesPerGroup);
        }
        if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
        var p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
        Object.assign(t, {
          snapIndex: d,
          realIndex: p,
          previousIndex: n,
          activeIndex: c
        }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
      },
      updateClickedSlide: function updateClickedSlide(e) {
        var t = this,
            s = t.params,
            a = d(e.target).closest(".".concat(s.slideClass))[0];
        var i,
            r = !1;
        if (a) for (var _e53 = 0; _e53 < t.slides.length; _e53 += 1) {
          if (t.slides[_e53] === a) {
            r = !0, i = _e53;
            break;
          }
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
            c = 0;
        s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform("translate3d(".concat(d, "px, ").concat(c, "px, 0px)")), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
        var p = s.maxTranslate() - s.minTranslate();
        o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
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
        var c;

        if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
          var _e54 = r.isHorizontal();

          if (0 === t) l[_e54 ? "scrollLeft" : "scrollTop"] = -c;else {
            var _l$scrollTo;

            if (!r.support.smoothScroll) return v({
              swiper: r,
              targetPosition: -c,
              side: _e54 ? "left" : "top"
            }), !0;
            l.scrollTo((_l$scrollTo = {}, _defineProperty(_l$scrollTo, _e54 ? "left" : "top", -c), _defineProperty(_l$scrollTo, "behavior", "smooth"), _l$scrollTo));
          }
          return !0;
        }

        return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
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
          var _t46 = parseInt(e, 10);

          if (!isFinite(_t46)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
          e = _t46;
        }

        var r = this;
        var n = e;
        n < 0 && (n = 0);
        var l = r.params,
            o = r.snapGrid,
            d = r.slidesGrid,
            c = r.previousIndex,
            p = r.activeIndex,
            u = r.rtlTranslate,
            h = r.wrapperEl,
            m = r.enabled;
        if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
        var f = Math.min(r.params.slidesPerGroupSkip, n);
        var g = f + Math.floor((n - f) / r.params.slidesPerGroup);
        g >= o.length && (g = o.length - 1), (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
        var w = -o[g];
        if (r.updateProgress(w), l.normalizeSlideIndex) for (var _e55 = 0; _e55 < d.length; _e55 += 1) {
          var _t47 = -Math.floor(100 * w),
              _s26 = Math.floor(100 * d[_e55]),
              _a14 = Math.floor(100 * d[_e55 + 1]);

          void 0 !== d[_e55 + 1] ? _t47 >= _s26 && _t47 < _a14 - (_a14 - _s26) / 2 ? n = _e55 : _t47 >= _s26 && _t47 < _a14 && (n = _e55 + 1) : _t47 >= _s26 && (n = _e55);
        }

        if (r.initialized && n !== p) {
          if (!r.allowSlideNext && w < r.translate && w < r.minTranslate()) return !1;
          if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1;
        }

        var b;
        if (b = n > p ? "next" : n < p ? "prev" : "reset", u && -w === r.translate || !u && w === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;

        if (l.cssMode) {
          var _e56 = r.isHorizontal(),
              _s27 = u ? w : -w;

          if (0 === t) {
            var _t48 = r.virtual && r.params.virtual.enabled;

            _t48 && (r.wrapperEl.style.scrollSnapType = "none"), h[_e56 ? "scrollLeft" : "scrollTop"] = _s27, _t48 && requestAnimationFrame(function () {
              r.wrapperEl.style.scrollSnapType = "";
            });
          } else {
            var _h$scrollTo;

            if (!r.support.smoothScroll) return v({
              swiper: r,
              targetPosition: _s27,
              side: _e56 ? "left" : "top"
            }), !0;
            h.scrollTo((_h$scrollTo = {}, _defineProperty(_h$scrollTo, _e56 ? "left" : "top", _s27), _defineProperty(_h$scrollTo, "behavior", "smooth"), _h$scrollTo));
          }

          return !0;
        }

        return 0 === t ? (r.setTransition(0), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), r.transitionEnd(s, b)) : (r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0;
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

        return a.slideTo(a.activeIndex + o, e, t, s);
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

        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }

        var p = c(o ? a.translate : -a.translate),
            u = n.map(function (e) {
          return c(e);
        });
        var h = n[u.indexOf(p) - 1];

        if (void 0 === h && i.cssMode) {
          var _e57;

          n.forEach(function (t, s) {
            p >= t && (_e57 = s);
          }), void 0 !== _e57 && (h = n[_e57 > 0 ? _e57 - 1 : _e57]);
        }

        var m = 0;
        return void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), a.slideTo(m, e, t, s);
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
          var _e58 = i.snapGrid[l];
          o - _e58 > (i.snapGrid[l + 1] - _e58) * a && (r += i.params.slidesPerGroup);
        } else {
          var _e59 = i.snapGrid[l - 1];
          o - _e59 <= (i.snapGrid[l] - _e59) * a && (r -= i.params.slidesPerGroup);
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
          i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), p(function () {
            e.slideTo(r);
          })) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), p(function () {
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
            i = e.$wrapperEl;
        i.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass)).remove();
        var r = i.children(".".concat(s.slideClass));

        if (s.loopFillGroupWithBlank) {
          var _e60 = s.slidesPerGroup - r.length % s.slidesPerGroup;

          if (_e60 !== s.slidesPerGroup) {
            for (var _a15 = 0; _a15 < _e60; _a15 += 1) {
              var _e61 = d(t.createElement("div")).addClass("".concat(s.slideClass, " ").concat(s.slideBlankClass));

              i.append(_e61);
            }

            r = i.children(".".concat(s.slideClass));
          }
        }

        "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
        var n = [],
            l = [];
        r.each(function (t, s) {
          var a = d(t);
          s < e.loopedSlides && l.push(t), s < r.length && s >= r.length - e.loopedSlides && n.push(t), a.attr("data-swiper-slide-index", s);
        });

        for (var _e62 = 0; _e62 < l.length; _e62 += 1) {
          i.append(d(l[_e62].cloneNode(!0)).addClass(s.slideDuplicateClass));
        }

        for (var _e63 = n.length - 1; _e63 >= 0; _e63 -= 1) {
          i.prepend(d(n[_e63].cloneNode(!0)).addClass(s.slideDuplicateClass));
        }
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
            c = D(e, o),
            p = i.enabled;
        d && !c ? (r.removeClass("".concat(i.containerModifierClass, "grid ").concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !d && c && (r.addClass("".concat(i.containerModifierClass, "grid")), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass("".concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses());
        var u = o.direction && o.direction !== i.direction,
            h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
        u && s && e.changeDirection(), f(e.params, o);
        var m = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev
        }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o);
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
            var _t49 = parseFloat(e.substr(1));

            return {
              value: n * _t49,
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

        for (var _e64 = 0; _e64 < l.length; _e64 += 1) {
          var _l$_e = l[_e64],
              _r9 = _l$_e.point,
              _n13 = _l$_e.value;
          "window" === t ? i.matchMedia("(min-width: ".concat(_n13, "px)")).matches && (a = _r9) : _n13 <= s.clientWidth && (a = _r9);
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
          var _t50 = e.slides.length - 1,
              _s28 = e.slidesGrid[_t50] + e.slidesSizesGrid[_t50] + 2 * a;

          e.isLocked = e.size > _s28;
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

        function c() {
          n && n();
        }

        d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image(), o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var _s29 = 0; _s29 < e.imagesToLoad.length; _s29 += 1) {
          var _a16 = e.imagesToLoad[_s29];
          e.loadImage(_a16, _a16.currentSrc || _a16.getAttribute("src"), _a16.srcset || _a16.getAttribute("srcset"), _a16.sizes || _a16.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      X = {};

  var H = /*#__PURE__*/function () {
    function H() {
      var _e65, _e66, _a$modules;

      _classCallCheck(this, H);

      var t, s;

      for (var _len11 = arguments.length, e = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        e[_key11] = arguments[_key11];
      }

      if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : (_e65 = e, _e66 = _slicedToArray(_e65, 2), t = _e66[0], s = _e66[1], _e65), s || (s = {}), s = f({}, s), t && !s.el && (s.el = t), s.el && d(s.el).length > 1) {
        var _e67 = [];
        return d(s.el).each(function (t) {
          var a = f({}, s, {
            el: t
          });

          _e67.push(new H(a));
        }), _e67;
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
          var _e68,
              _t51 = a[l].swiperSlideSize;

          for (var _s30 = l + 1; _s30 < a.length; _s30 += 1) {
            a[_s30] && !_e68 && (_t51 += a[_s30].swiperSlideSize, o += 1, _t51 > n && (_e68 = !0));
          }

          for (var _s31 = l - 1; _s31 >= 0; _s31 -= 1) {
            a[_s31] && !_e68 && (_t51 += a[_s31].swiperSlideSize, o += 1, _t51 > n && (_e68 = !0));
          }
        } else if ("current" === e) for (var _e69 = l + 1; _e69 < a.length; _e69 += 1) {
          (t ? i[_e69] + r[_e69] - i[l] < n : i[_e69] - i[l] < n) && (o += 1);
        } else for (var _e70 = l - 1; _e70 >= 0; _e70 -= 1) {
          i[l] - i[_e70] < n && (o += 1);
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
            var _t52 = d(e.shadowRoot.querySelector(i()));

            return _t52.children = function (e) {
              return s.children(e);
            }, _t52;
          }

          return s.children(i());
        }();

        if (0 === r.length && t.params.createElements) {
          var _e71 = a().createElement("div");

          r = d(_e71), _e71.className = t.params.wrapperClass, s.append(_e71), s.children(".".concat(t.params.slideClass)).each(function (e) {
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
        var _n14 = e.$el.children(".".concat(i[a]))[0];
        _n14 || (_n14 = r.createElement("div"), _n14.className = i[a], e.$el.append(_n14)), s[a] = _n14, t[a] = _n14;
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
    if (a.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var _t53 = 0; _t53 < e.length; _t53 += 1) {
      e[_t53] && s.append(e[_t53]);
    } else s.append(e);
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
      for (var _t54 = 0; _t54 < e.length; _t54 += 1) {
        e[_t54] && a.prepend(e[_t54]);
      }

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

    for (var _t55 = l - 1; _t55 >= e; _t55 -= 1) {
      var _e72 = s.slides.eq(_t55);

      _e72.remove(), d.unshift(_e72);
    }

    if ("object" == _typeof(t) && "length" in t) {
      for (var _e73 = 0; _e73 < t.length; _e73 += 1) {
        t[_e73] && a.append(t[_e73]);
      }

      o = n > e ? n + t.length : n;
    } else a.append(t);

    for (var _e74 = 0; _e74 < d.length; _e74 += 1) {
      a.append(d[_e74]);
    }

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
      for (var _s32 = 0; _s32 < e.length; _s32 += 1) {
        n = e[_s32], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
      }

      l = Math.max(l, 0);
    } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);

    s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }

  function q() {
    var e = this,
        t = [];

    for (var _s33 = 0; _s33 < e.slides.length; _s33 += 1) {
      t.push(_s33);
    }

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

  function K(_ref14) {
    var e = _ref14.swiper,
        t = _ref14.duration,
        s = _ref14.transformEl,
        a = _ref14.allSlides;
    var i = e.slides,
        r = e.activeIndex,
        n = e.$wrapperEl;

    if (e.params.virtualTranslate && 0 !== t) {
      var _t56,
          _l5 = !1;

      _t56 = a ? s ? i.find(s) : i : s ? i.eq(r).find(s) : i.eq(r), _t56.transitionEnd(function () {
        if (_l5) return;
        if (!e || e.destroyed) return;
        _l5 = !0, e.animating = !1;
        var t = ["webkitTransitionEnd", "transitionend"];

        for (var _e75 = 0; _e75 < t.length; _e75 += 1) {
          n.trigger(t[_e75]);
        }
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
  }), H.use([function (_ref15) {
    var e = _ref15.swiper,
        t = _ref15.on,
        s = _ref15.emit;
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
        t.forEach(function (_ref16) {
          var t = _ref16.contentBoxSize,
              s = _ref16.contentRect,
              a = _ref16.target;
          a && a !== e.el || (i = s ? s.width : (t[0] || t).inlineSize, r = s ? s.height : (t[0] || t).blockSize);
        }), i === s && r === a || n();
      }), i.observe(e.el)) : (a.addEventListener("resize", n), a.addEventListener("orientationchange", l));
    }), t("destroy", function () {
      i && i.unobserve && e.el && (i.unobserve(e.el), i = null), a.removeEventListener("resize", n), a.removeEventListener("orientationchange", l);
    });
  }, function (_ref17) {
    var e = _ref17.swiper,
        t = _ref17.extendParams,
        s = _ref17.on,
        a = _ref17.emit;

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
          var _t57 = e.$el.parents();

          for (var _e76 = 0; _e76 < _t57.length; _e76 += 1) {
            l(_t57[_e76]);
          }
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
  var J = [function (_ref18) {
    var e = _ref18.swiper,
        t = _ref18.extendParams,
        s = _ref18.on;

    function a(t, s) {
      var a = e.params.virtual;
      if (a.cache && e.virtual.cache[s]) return e.virtual.cache[s];
      var i = a.renderSlide ? d(a.renderSlide.call(e, t, s)) : d("<div class=\"".concat(e.params.slideClass, "\" data-swiper-slide-index=\"").concat(s, "\">").concat(t, "</div>"));
      return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", s), a.cache && (e.virtual.cache[s] = i), i;
    }

    function i(t) {
      var _e$params = e.params,
          s = _e$params.slidesPerView,
          i = _e$params.slidesPerGroup,
          r = _e$params.centeredSlides,
          _e$params$virtual = e.params.virtual,
          n = _e$params$virtual.addSlidesBefore,
          l = _e$params$virtual.addSlidesAfter,
          _e$virtual = e.virtual,
          o = _e$virtual.from,
          d = _e$virtual.to,
          c = _e$virtual.slides,
          p = _e$virtual.slidesGrid,
          u = _e$virtual.offset;
      e.updateActiveIndex();
      var h = e.activeIndex || 0;
      var m, f, g;
      m = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + i + l, g = Math.floor(s / 2) + i + n) : (f = s + (i - 1) + l, g = i + n);
      var v = Math.max((h || 0) - g, 0),
          w = Math.min((h || 0) + f, c.length - 1),
          b = (e.slidesGrid[v] || 0) - (e.slidesGrid[0] || 0);

      function x() {
        e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load();
      }

      if (Object.assign(e.virtual, {
        from: v,
        to: w,
        offset: b,
        slidesGrid: e.slidesGrid
      }), o === v && d === w && !t) return e.slidesGrid !== p && b !== u && e.slides.css(m, "".concat(b, "px")), void e.updateProgress();
      if (e.params.virtual.renderExternal) return e.params.virtual.renderExternal.call(e, {
        offset: b,
        from: v,
        to: w,
        slides: function () {
          var e = [];

          for (var _t58 = v; _t58 <= w; _t58 += 1) {
            e.push(c[_t58]);
          }

          return e;
        }()
      }), void (e.params.virtual.renderExternalUpdate && x());
      var y = [],
          E = [];
      if (t) e.$wrapperEl.find(".".concat(e.params.slideClass)).remove();else for (var _t59 = o; _t59 <= d; _t59 += 1) {
        (_t59 < v || _t59 > w) && e.$wrapperEl.find(".".concat(e.params.slideClass, "[data-swiper-slide-index=\"").concat(_t59, "\"]")).remove();
      }

      for (var _e77 = 0; _e77 < c.length; _e77 += 1) {
        _e77 >= v && _e77 <= w && (void 0 === d || t ? E.push(_e77) : (_e77 > d && E.push(_e77), _e77 < o && y.push(_e77)));
      }

      E.forEach(function (t) {
        e.$wrapperEl.append(a(c[t], t));
      }), y.sort(function (e, t) {
        return t - e;
      }).forEach(function (t) {
        e.$wrapperEl.prepend(a(c[t], t));
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
      e.params.virtual.enabled && (e.virtual.slides = e.params.virtual.slides, e.classNames.push("".concat(e.params.containerModifierClass, "virtual")), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, e.params.initialSlide || i());
    }), s("setTranslate", function () {
      e.params.virtual.enabled && i();
    }), s("init update resize", function () {
      e.params.virtual.enabled && e.params.cssMode && g(e.wrapperEl, "--swiper-virtual-size", "".concat(e.virtualSize, "px"));
    }), Object.assign(e.virtual, {
      appendSlide: function appendSlide(t) {
        if ("object" == _typeof(t) && "length" in t) for (var _s34 = 0; _s34 < t.length; _s34 += 1) {
          t[_s34] && e.virtual.slides.push(t[_s34]);
        } else e.virtual.slides.push(t);
        i(!0);
      },
      prependSlide: function prependSlide(t) {
        var s = e.activeIndex;
        var a = s + 1,
            r = 1;

        if (Array.isArray(t)) {
          for (var _s35 = 0; _s35 < t.length; _s35 += 1) {
            t[_s35] && e.virtual.slides.unshift(t[_s35]);
          }

          a = s + t.length, r = t.length;
        } else e.virtual.slides.unshift(t);

        if (e.params.virtual.cache) {
          var _t60 = e.virtual.cache,
              _s36 = {};
          Object.keys(_t60).forEach(function (e) {
            var a = _t60[e],
                i = a.attr("data-swiper-slide-index");
            i && a.attr("data-swiper-slide-index", parseInt(i, 10) + 1), _s36[parseInt(e, 10) + r] = a;
          }), e.virtual.cache = _s36;
        }

        i(!0), e.slideTo(a, 0);
      },
      removeSlide: function removeSlide(t) {
        if (null == t) return;
        var s = e.activeIndex;
        if (Array.isArray(t)) for (var _a17 = t.length - 1; _a17 >= 0; _a17 -= 1) {
          e.virtual.slides.splice(t[_a17], 1), e.params.virtual.cache && delete e.virtual.cache[t[_a17]], t[_a17] < s && (s -= 1), s = Math.max(s, 0);
        } else e.virtual.slides.splice(t, 1), e.params.virtual.cache && delete e.virtual.cache[t], t < s && (s -= 1), s = Math.max(s, 0);
        i(!0), e.slideTo(s, 0);
      },
      removeAllSlides: function removeAllSlides() {
        e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), i(!0), e.slideTo(0, 0);
      },
      update: i
    });
  }, function (_ref19) {
    var e = _ref19.swiper,
        t = _ref19.extendParams,
        s = _ref19.on,
        i = _ref19.emit;
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
          c = o && 34 === r,
          p = 37 === r,
          u = 39 === r,
          h = 38 === r,
          m = 40 === r;
      if (!e.allowSlideNext && (e.isHorizontal() && u || e.isVertical() && m || c)) return !1;
      if (!e.allowSlidePrev && (e.isHorizontal() && p || e.isVertical() && h || d)) return !1;

      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || n.activeElement && n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase()))) {
        if (e.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
          var _t61 = !1;

          if (e.$el.parents(".".concat(e.params.slideClass)).length > 0 && 0 === e.$el.parents(".".concat(e.params.slideActiveClass)).length) return;

          var _a18 = e.$el,
              _i25 = _a18[0].clientWidth,
              _r10 = _a18[0].clientHeight,
              _n15 = l.innerWidth,
              _o9 = l.innerHeight,
              _d4 = e.$el.offset();

          s && (_d4.left -= e.$el[0].scrollLeft);
          var _c3 = [[_d4.left, _d4.top], [_d4.left + _i25, _d4.top], [_d4.left, _d4.top + _r10], [_d4.left + _i25, _d4.top + _r10]];

          for (var _e78 = 0; _e78 < _c3.length; _e78 += 1) {
            var _s37 = _c3[_e78];

            if (_s37[0] >= 0 && _s37[0] <= _n15 && _s37[1] >= 0 && _s37[1] <= _o9) {
              if (0 === _s37[0] && 0 === _s37[1]) continue;
              _t61 = !0;
            }
          }

          if (!_t61) return;
        }

        e.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && e.slideNext(), ((d || p) && !s || (c || u) && s) && e.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && e.slideNext(), (d || h) && e.slidePrev()), i("keyPress", r);
      }
    }

    function c() {
      e.keyboard.enabled || (d(n).on("keydown", o), e.keyboard.enabled = !0);
    }

    function p() {
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
      e.params.keyboard.enabled && c();
    }), s("destroy", function () {
      e.keyboard.enabled && p();
    }), Object.assign(e.keyboard, {
      enable: c,
      disable: p
    });
  }, function (_ref20) {
    var e = _ref20.swiper,
        t = _ref20.extendParams,
        s = _ref20.on,
        a = _ref20.emit;
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
    var c = [];

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
        var _t62 = {
          time: u(),
          delta: Math.abs(h),
          direction: Math.sign(h)
        },
            _i26 = l && _t62.time < l.time + 500 && _t62.delta <= l.delta && _t62.direction === l.direction;

        if (!_i26) {
          l = void 0, e.params.loop && e.loopFix();

          var _o10 = e.getTranslate() + h * r.sensitivity;

          var _d5 = e.isBeginning,
              _u = e.isEnd;

          if (_o10 >= e.minTranslate() && (_o10 = e.minTranslate()), _o10 <= e.maxTranslate() && (_o10 = e.maxTranslate()), e.setTransition(0), e.setTranslate(_o10), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!_d5 && e.isBeginning || !_u && e.isEnd) && e.updateSlidesClasses(), e.params.freeMode.sticky) {
            clearTimeout(n), n = void 0, c.length >= 15 && c.shift();

            var _s38 = c.length ? c[c.length - 1] : void 0,
                _a19 = c[0];

            if (c.push(_t62), _s38 && (_t62.delta > _s38.delta || _t62.direction !== _s38.direction)) c.splice(0);else if (c.length >= 15 && _t62.time - _a19.time < 500 && _a19.delta - _t62.delta >= 1 && _t62.delta <= 6) {
              var _s39 = h > 0 ? .8 : .2;

              l = _t62, c.splice(0), n = p(function () {
                e.slideToClosest(e.params.speed, !0, void 0, _s39);
              }, 0);
            }
            n || (n = p(function () {
              l = _t62, c.splice(0), e.slideToClosest(e.params.speed, !0, void 0, .5);
            }, 500));
          }

          if (_i26 || a("scroll", s), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), _o10 === e.minTranslate() || _o10 === e.maxTranslate()) return !0;
        }
      } else {
        var _s40 = {
          time: u(),
          delta: Math.abs(h),
          direction: Math.sign(h),
          raw: t
        };
        c.length >= 2 && c.shift();

        var _a20 = c.length ? c[c.length - 1] : void 0;

        if (c.push(_s40), _a20 ? (_s40.direction !== _a20.direction || _s40.delta > _a20.delta || _s40.time > _a20.time + 150) && f(_s40) : f(_s40), function (t) {
          var s = e.params.mousewheel;

          if (t.direction < 0) {
            if (e.isEnd && !e.params.loop && s.releaseOnEdges) return !0;
          } else if (e.isBeginning && !e.params.loop && s.releaseOnEdges) return !0;

          return !1;
        }(_s40)) return !0;
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
  }, function (_ref21) {
    var e = _ref21.swiper,
        t = _ref21.extendParams,
        s = _ref21.on,
        a = _ref21.emit;

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
      r(s, e.isBeginning), r(t, e.isEnd);
    }

    function l(t) {
      t.preventDefault(), e.isBeginning && !e.params.loop || e.slidePrev();
    }

    function o(t) {
      t.preventDefault(), e.isEnd && !e.params.loop || e.slideNext();
    }

    function c() {
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

    function p() {
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
      c(), n();
    }), s("toEdge fromEdge lock unlock", function () {
      n();
    }), s("destroy", function () {
      p();
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

        var _t63;

        i ? _t63 = i.hasClass(e.params.navigation.hiddenClass) : r && (_t63 = r.hasClass(e.params.navigation.hiddenClass)), a(!0 === _t63 ? "navigationShow" : "navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass);
      }
    }), Object.assign(e.navigation, {
      update: n,
      init: c,
      destroy: p
    });
  }, function (_ref22) {
    var e = _ref22.swiper,
        t = _ref22.extendParams,
        s = _ref22.on,
        a = _ref22.emit;
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

    function c() {
      var t = e.rtl,
          s = e.params.pagination;
      if (l()) return;
      var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          c = e.pagination.$el;
      var p;
      var u = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

      if (e.params.loop ? (p = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), p > i - 1 - 2 * e.loopedSlides && (p -= i - 2 * e.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== e.params.paginationType && (p = u + p)) : p = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
        var _a21 = e.pagination.bullets;

        var _i27, _l6, _u2;

        if (s.dynamicBullets && (r = _a21.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), c.css(e.isHorizontal() ? "width" : "height", r * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (n += p - e.previousIndex, n > s.dynamicMainBullets - 1 ? n = s.dynamicMainBullets - 1 : n < 0 && (n = 0)), _i27 = p - n, _l6 = _i27 + (Math.min(_a21.length, s.dynamicMainBullets) - 1), _u2 = (_l6 + _i27) / 2), _a21.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(function (e) {
          return "".concat(s.bulletActiveClass).concat(e);
        }).join(" ")), c.length > 1) _a21.each(function (e) {
          var t = d(e),
              a = t.index();
          a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= _i27 && a <= _l6 && t.addClass("".concat(s.bulletActiveClass, "-main")), a === _i27 && o(t, "prev"), a === _l6 && o(t, "next"));
        });else {
          var _t64 = _a21.eq(p),
              _r11 = _t64.index();

          if (_t64.addClass(s.bulletActiveClass), s.dynamicBullets) {
            var _t65 = _a21.eq(_i27),
                _n16 = _a21.eq(_l6);

            for (var _e79 = _i27; _e79 <= _l6; _e79 += 1) {
              _a21.eq(_e79).addClass("".concat(s.bulletActiveClass, "-main"));
            }

            if (e.params.loop) {
              if (_r11 >= _a21.length - s.dynamicMainBullets) {
                for (var _e80 = s.dynamicMainBullets; _e80 >= 0; _e80 -= 1) {
                  _a21.eq(_a21.length - _e80).addClass("".concat(s.bulletActiveClass, "-main"));
                }

                _a21.eq(_a21.length - s.dynamicMainBullets - 1).addClass("".concat(s.bulletActiveClass, "-prev"));
              } else o(_t65, "prev"), o(_n16, "next");
            } else o(_t65, "prev"), o(_n16, "next");
          }
        }

        if (s.dynamicBullets) {
          var _i28 = Math.min(_a21.length, s.dynamicMainBullets + 4),
              _n17 = (r * _i28 - r) / 2 - _u2 * r,
              _l7 = t ? "right" : "left";

          _a21.css(e.isHorizontal() ? _l7 : "top", "".concat(_n17, "px"));
        }
      }

      if ("fraction" === s.type && (c.find(W(s.currentClass)).text(s.formatFractionCurrent(p + 1)), c.find(W(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
        var _t66;

        _t66 = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";

        var _a22 = (p + 1) / u;

        var _i29 = 1,
            _r12 = 1;
        "horizontal" === _t66 ? _i29 = _a22 : _r12 = _a22, c.find(W(s.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(_i29, ") scaleY(").concat(_r12, ")")).transition(e.params.speed);
      }

      "custom" === s.type && s.renderCustom ? (c.html(s.renderCustom(e, p + 1, u)), a("paginationRender", c[0])) : a("paginationUpdate", c[0]), e.params.watchOverflow && e.enabled && c[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
    }

    function p() {
      var t = e.params.pagination;
      if (l()) return;
      var s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          i = e.pagination.$el;
      var r = "";

      if ("bullets" === t.type) {
        var _a23 = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

        e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && _a23 > s && (_a23 = s);

        for (var _s41 = 0; _s41 < _a23; _s41 += 1) {
          t.renderBullet ? r += t.renderBullet.call(e, _s41, t.bulletClass) : r += "<".concat(t.bulletElement, " class=\"").concat(t.bulletClass, "\"></").concat(t.bulletElement, ">");
        }

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
      u(), p(), c();
    }), s("activeIndexChange", function () {
      (e.params.loop || void 0 === e.snapIndex) && c();
    }), s("snapIndexChange", function () {
      e.params.loop || c();
    }), s("slidesLengthChange", function () {
      e.params.loop && (p(), c());
    }), s("snapGridLengthChange", function () {
      e.params.loop || (p(), c());
    }), s("destroy", function () {
      h();
    }), s("enable disable", function () {
      var t = e.pagination.$el;
      t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass);
    }), s("lock unlock", function () {
      c();
    }), s("click", function (t, s) {
      var i = s.target,
          r = e.pagination.$el;

      if (e.params.pagination.el && e.params.pagination.hideOnClick && r.length > 0 && !d(i).hasClass(e.params.pagination.bulletClass)) {
        if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl)) return;

        var _t67 = r.hasClass(e.params.pagination.hiddenClass);

        a(!0 === _t67 ? "paginationShow" : "paginationHide"), r.toggleClass(e.params.pagination.hiddenClass);
      }
    }), Object.assign(e.pagination, {
      render: p,
      update: c,
      init: u,
      destroy: h
    });
  }, function (_ref23) {
    var e = _ref23.swiper,
        t = _ref23.extendParams,
        s = _ref23.on,
        i = _ref23.emit;
    var r = a();
    var n,
        l,
        o,
        c,
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
          c = (o - l) * a;
      s ? (c = -c, c > 0 ? (d = l - c, c = 0) : -c + l > o && (d = o + c)) : c < 0 ? (d = l + c, c = 0) : c + l > o && (d = o - c), e.isHorizontal() ? (i.transform("translate3d(".concat(c, "px, 0, 0)")), i[0].style.width = "".concat(d, "px")) : (i.transform("translate3d(0px, ".concat(c, "px, 0)")), i[0].style.height = "".concat(d, "px")), n.hide && (clearTimeout(h), r[0].style.opacity = 1, h = setTimeout(function () {
        r[0].style.opacity = 0, r.transition(400);
      }, 1e3));
    }

    function g() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      var t = e.scrollbar,
          s = t.$dragEl,
          a = t.$el;
      s[0].style.width = "", s[0].style.height = "", o = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, c = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), l = "auto" === e.params.scrollbar.dragSize ? o * c : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? s[0].style.width = "".concat(l, "px") : s[0].style.height = "".concat(l, "px"), a[0].style.display = c >= 1 ? "none" : "", e.params.scrollbar.hide && (a[0].style.opacity = 0), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
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
      u && (u = !1, e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""), r.transition("")), s.hide && (clearTimeout(m), m = p(function () {
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
          c = !(!l.passiveListener || !n.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      if (!o) return;
      var p = "on" === t ? "addEventListener" : "removeEventListener";
      l.touch ? (o[p](a.start, b, d), o[p](a.move, x, d), o[p](a.end, y, c)) : (o[p](i.start, b, d), r[p](i.move, x, d), r[p](i.end, y, c));
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
  }, function (_ref24) {
    var e = _ref24.swiper,
        t = _ref24.extendParams,
        s = _ref24.on;
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
      var c = i.attr("data-swiper-parallax-scale"),
          p = i.attr("data-swiper-parallax-opacity");

      if (l || o ? (l = l || "0", o = o || "0") : e.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
        var _e81 = p - (p - 1) * (1 - Math.abs(s));

        i[0].style.opacity = _e81;
      }

      if (null == c) i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px)"));else {
        var _e82 = c - (c - 1) * (1 - Math.abs(s));

        i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px) scale(").concat(_e82, ")"));
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
  }, function (_ref25) {
    var e = _ref25.swiper,
        t = _ref25.extendParams,
        s = _ref25.on,
        a = _ref25.emit;
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
        c = 1,
        p = !1;
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

      u.$slideEl && u.$slideEl.length || (u.$slideEl = d(t.target).closest(".".concat(e.params.slideClass)), 0 === u.$slideEl.length && (u.$slideEl = e.slides.eq(e.activeIndex)), u.$imageEl = u.$slideEl.find(".".concat(a.containerClass)).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), u.$imageWrapEl = u.$imageEl.parent(".".concat(a.containerClass)), u.maxRatio = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== u.$imageWrapEl.length) ? (u.$imageEl && u.$imageEl.transition(0), p = !0) : u.$imageEl = void 0;
    }

    function b(t) {
      var s = e.support,
          a = e.params.zoom,
          i = e.zoom;

      if (!s.gestures) {
        if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
        o = !0, u.scaleMove = v(t);
      }

      u.$imageEl && 0 !== u.$imageEl.length ? (s.gestures ? i.scale = t.scale * c : i.scale = u.scaleMove / u.scaleStart * c, i.scale > u.maxRatio && (i.scale = u.maxRatio - 1 + Math.pow(i.scale - u.maxRatio + 1, .5)), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)), u.$imageEl.transform("translate3d(0,0,0) scale(".concat(i.scale, ")"))) : "gesturechange" === t.type && w(t);
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

      u.$imageEl && 0 !== u.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, u.maxRatio), i.minRatio), u.$imageEl.transition(e.params.speed).transform("translate3d(0,0,0) scale(".concat(r.scale, ")")), c = r.scale, p = !1, 1 === r.scale && (u.$slideEl = void 0));
    }

    function y(t) {
      var s = e.zoom;
      if (!u.$imageEl || 0 === u.$imageEl.length) return;
      if (e.allowClick = !1, !m.isTouched || !u.$slideEl) return;
      m.isMoved || (m.width = u.$imageEl[0].offsetWidth, m.height = u.$imageEl[0].offsetHeight, m.startX = h(u.$imageWrapEl[0], "x") || 0, m.startY = h(u.$imageWrapEl[0], "y") || 0, u.slideWidth = u.$slideEl[0].offsetWidth, u.slideHeight = u.$slideEl[0].offsetHeight, u.$imageWrapEl.transition(0));
      var a = m.width * s.scale,
          i = m.height * s.scale;

      if (!(a < u.slideWidth && i < u.slideHeight)) {
        if (m.minX = Math.min(u.slideWidth / 2 - a / 2, 0), m.maxX = -m.minX, m.minY = Math.min(u.slideHeight / 2 - i / 2, 0), m.maxY = -m.minY, m.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !m.isMoved && !p) {
          if (e.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x)) return void (m.isTouched = !1);
          if (!e.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y)) return void (m.isTouched = !1);
        }

        t.cancelable && t.preventDefault(), t.stopPropagation(), m.isMoved = !0, m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX, m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY, m.currentX < m.minX && (m.currentX = m.minX + 1 - Math.pow(m.minX - m.currentX + 1, .8)), m.currentX > m.maxX && (m.currentX = m.maxX - 1 + Math.pow(m.currentX - m.maxX + 1, .8)), m.currentY < m.minY && (m.currentY = m.minY + 1 - Math.pow(m.minY - m.currentY + 1, .8)), m.currentY > m.maxY && (m.currentY = m.maxY - 1 + Math.pow(m.currentY - m.maxY + 1, .8)), f.prevPositionX || (f.prevPositionX = m.touchesCurrent.x), f.prevPositionY || (f.prevPositionY = m.touchesCurrent.y), f.prevTime || (f.prevTime = Date.now()), f.x = (m.touchesCurrent.x - f.prevPositionX) / (Date.now() - f.prevTime) / 2, f.y = (m.touchesCurrent.y - f.prevPositionY) / (Date.now() - f.prevTime) / 2, Math.abs(m.touchesCurrent.x - f.prevPositionX) < 2 && (f.x = 0), Math.abs(m.touchesCurrent.y - f.prevPositionY) < 2 && (f.y = 0), f.prevPositionX = m.touchesCurrent.x, f.prevPositionY = m.touchesCurrent.y, f.prevTime = Date.now(), u.$imageWrapEl.transform("translate3d(".concat(m.currentX, "px, ").concat(m.currentY, "px,0)"));
      }
    }

    function E() {
      var t = e.zoom;
      u.$slideEl && e.previousIndex !== e.activeIndex && (u.$imageEl && u.$imageEl.transform("translate3d(0,0,0) scale(1)"), u.$imageWrapEl && u.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, c = 1, u.$slideEl = void 0, u.$imageEl = void 0, u.$imageWrapEl = void 0);
    }

    function T(t) {
      var s = e.zoom,
          a = e.params.zoom;
      if (u.$slideEl || (t && t.target && (u.$slideEl = d(t.target).closest(".".concat(e.params.slideClass))), u.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.$slideEl = e.$wrapperEl.children(".".concat(e.params.slideActiveClass)) : u.$slideEl = e.slides.eq(e.activeIndex)), u.$imageEl = u.$slideEl.find(".".concat(a.containerClass)).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), u.$imageWrapEl = u.$imageEl.parent(".".concat(a.containerClass))), !u.$imageEl || 0 === u.$imageEl.length || !u.$imageWrapEl || 0 === u.$imageWrapEl.length) return;
      var r, n, l, o, p, h, f, g, v, w, b, x, y, E, T, C, $, S;
      e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), u.$slideEl.addClass("".concat(a.zoomedSlideClass)), void 0 === m.touchesStart.x && t ? (r = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, n = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (r = m.touchesStart.x, n = m.touchesStart.y), s.scale = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, c = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, t ? ($ = u.$slideEl[0].offsetWidth, S = u.$slideEl[0].offsetHeight, l = u.$slideEl.offset().left + i.scrollX, o = u.$slideEl.offset().top + i.scrollY, p = l + $ / 2 - r, h = o + S / 2 - n, v = u.$imageEl[0].offsetWidth, w = u.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), T = -y, C = -E, f = p * s.scale, g = h * s.scale, f < y && (f = y), f > T && (f = T), g < E && (g = E), g > C && (g = C)) : (f = 0, g = 0), u.$imageWrapEl.transition(300).transform("translate3d(".concat(f, "px, ").concat(g, "px,0)")), u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(s.scale, ")"));
    }

    function C() {
      var t = e.zoom,
          s = e.params.zoom;
      u.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.$slideEl = e.$wrapperEl.children(".".concat(e.params.slideActiveClass)) : u.$slideEl = e.slides.eq(e.activeIndex), u.$imageEl = u.$slideEl.find(".".concat(s.containerClass)).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), u.$imageWrapEl = u.$imageEl.parent(".".concat(s.containerClass))), u.$imageEl && 0 !== u.$imageEl.length && u.$imageWrapEl && 0 !== u.$imageWrapEl.length && (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), t.scale = 1, c = 1, u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), u.$slideEl.removeClass("".concat(s.zoomedSlideClass)), u.$slideEl = void 0);
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
          var _t68 = u.$imageEl ? u.$imageEl[0] : void 0,
              _s42 = u.$slideEl ? u.$slideEl[0] : void 0;

          a("zoomChange", e, _t68, _s42);
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
            c = m.height * t.scale;
        m.minX = Math.min(u.slideWidth / 2 - d / 2, 0), m.maxX = -m.minX, m.minY = Math.min(u.slideHeight / 2 - c / 2, 0), m.maxY = -m.minY, m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX), m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY), u.$imageWrapEl.transition(o).transform("translate3d(".concat(m.currentX, "px, ").concat(m.currentY, "px,0)"));
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
  }, function (_ref26) {
    var e = _ref26.swiper,
        t = _ref26.extendParams,
        s = _ref26.on,
        a = _ref26.emit;
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
            c = n.attr("data-src"),
            p = n.attr("data-srcset"),
            u = n.attr("data-sizes"),
            h = n.parent("picture");
        e.loadImage(n[0], c || o, p, u, !1, function () {
          if (null != e && e && (!e || e.params) && !e.destroyed) {
            if (o ? (n.css("background-image", "url(\"".concat(o, "\")")), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each(function (e) {
              var t = d(e);
              t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
            }), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(i.loadedClass).removeClass(i.loadingClass), r.find(".".concat(i.preloaderClass)).remove(), e.params.loop && s) {
              var _t69 = r.attr("data-swiper-slide-index");

              if (r.hasClass(e.params.slideDuplicateClass)) {
                l(e.$wrapperEl.children("[data-swiper-slide-index=\"".concat(_t69, "\"]:not(.").concat(e.params.slideDuplicateClass, ")")).index(), !1);
              } else {
                l(e.$wrapperEl.children(".".concat(e.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(_t69, "\"]")).index(), !1);
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
      var c = s.slidesPerView;

      function p(e) {
        if (r) {
          if (t.children(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")).length) return !0;
        } else if (a[e]) return !0;

        return !1;
      }

      function u(e) {
        return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
      }

      if ("auto" === c && (c = 0), n || (n = !0), e.params.watchSlidesProgress) t.children(".".concat(s.slideVisibleClass)).each(function (e) {
        l(r ? d(e).attr("data-swiper-slide-index") : d(e).index());
      });else if (c > 1) for (var _e83 = i; _e83 < i + c; _e83 += 1) {
        p(_e83) && l(_e83);
      } else l(i);
      if (o.loadPrevNext) if (c > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
        var _e84 = o.loadPrevNextAmount,
            _t70 = c,
            _s43 = Math.min(i + _t70 + Math.max(_e84, _t70), a.length),
            _r13 = Math.max(i - Math.max(_t70, _e84), 0);

        for (var _e85 = i + c; _e85 < _s43; _e85 += 1) {
          p(_e85) && l(_e85);
        }

        for (var _e86 = _r13; _e86 < i; _e86 += 1) {
          p(_e86) && l(_e86);
        }
      } else {
        var _e87 = t.children(".".concat(s.slideNextClass));

        _e87.length > 0 && l(u(_e87));

        var _a24 = t.children(".".concat(s.slidePrevClass));

        _a24.length > 0 && l(u(_a24));
      }
    }

    function c() {
      var t = r();
      if (!e || e.destroyed) return;
      var s = e.params.lazy.scrollingElement ? d(e.params.lazy.scrollingElement) : d(t),
          a = s[0] === t,
          n = a ? t.innerWidth : s[0].offsetWidth,
          l = a ? t.innerHeight : s[0].offsetHeight,
          p = e.$el.offset(),
          u = e.rtlTranslate;
      var h = !1;
      u && (p.left -= e.$el[0].scrollLeft);
      var m = [[p.left, p.top], [p.left + e.width, p.top], [p.left, p.top + e.height], [p.left + e.width, p.top + e.height]];

      for (var _e88 = 0; _e88 < m.length; _e88 += 1) {
        var _t71 = m[_e88];

        if (_t71[0] >= 0 && _t71[0] <= n && _t71[1] >= 0 && _t71[1] <= l) {
          if (0 === _t71[0] && 0 === _t71[1]) continue;
          h = !0;
        }
      }

      var f = !("touchstart" !== e.touchEvents.start || !e.support.passiveListener || !e.params.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      h ? (o(), s.off("scroll", c, f)) : i || (i = !0, s.on("scroll", c, f));
    }

    s("beforeInit", function () {
      e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
    }), s("init", function () {
      e.params.lazy.enabled && (e.params.lazy.checkInView ? c() : o());
    }), s("scroll", function () {
      e.params.freeMode && e.params.freeMode.enabled && !e.params.freeMode.sticky && o();
    }), s("scrollbarDragMove resize _freeModeNoMomentumRelease", function () {
      e.params.lazy.enabled && (e.params.lazy.checkInView ? c() : o());
    }), s("transitionStart", function () {
      e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !n) && (e.params.lazy.checkInView ? c() : o());
    }), s("transitionEnd", function () {
      e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && (e.params.lazy.checkInView ? c() : o());
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
  }, function (_ref27) {
    var e = _ref27.swiper,
        t = _ref27.extendParams,
        s = _ref27.on;

    function a(e, t) {
      var s = function () {
        var e, t, s;
        return function (a, i) {
          for (t = -1, e = a.length; e - t > 1;) {
            s = e + t >> 1, a[s] <= i ? t = s : e = s;
          }

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

        if (Array.isArray(i)) for (var _e89 = 0; _e89 < i.length; _e89 += 1) {
          i[_e89] !== s && i[_e89] instanceof l && o(i[_e89]);
        } else i instanceof l && s !== i && o(i);
      },
      setTransition: function setTransition(t, s) {
        var a = e.constructor,
            i = e.controller.control;
        var r;

        function n(s) {
          s.setTransition(t, e), 0 !== t && (s.transitionStart(), s.params.autoHeight && p(function () {
            s.updateAutoHeight();
          }), s.$wrapperEl.transitionEnd(function () {
            i && (s.params.loop && "slide" === e.params.controller.by && s.loopFix(), s.transitionEnd());
          }));
        }

        if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) {
          i[r] !== s && i[r] instanceof a && n(i[r]);
        } else i instanceof a && s !== i && n(i);
      }
    });
  }, function (_ref28) {
    var e = _ref28.swiper,
        t = _ref28.extendParams,
        s = _ref28.on;
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

    function c(e, t) {
      e.attr("aria-label", t);
    }

    function p(e) {
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
      if (e.params.loop || !e.navigation) return;
      var _e$navigation5 = e.navigation,
          t = _e$navigation5.$nextEl,
          s = _e$navigation5.$prevEl;
      s && s.length > 0 && (e.isBeginning ? (p(s), n(s)) : (u(s), r(s))), t && t.length > 0 && (e.isEnd ? (p(t), n(t)) : (u(t), r(t)));
    }

    function f() {
      return e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length;
    }

    var g = function g(e, t, s) {
      r(e), "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", h)), c(e, s), function (e, t) {
        e.attr("aria-controls", t);
      }(e, t);
    };

    function v() {
      var t = e.params.a11y;
      e.$el.append(a);
      var s = e.$el;
      t.containerRoleDescriptionMessage && o(s, t.containerRoleDescriptionMessage), t.containerMessage && c(s, t.containerMessage);
      var i = e.$wrapperEl,
          r = i.attr("id") || "swiper-wrapper-".concat(function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
        return "x".repeat(e).replace(/x/g, function () {
          return Math.round(16 * Math.random()).toString(16);
        });
      }(16)),
          n = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
      var p;
      p = r, i.attr("id", p), function (e, t) {
        e.attr("aria-live", t);
      }(i, n), t.itemRoleDescriptionMessage && o(d(e.slides), t.itemRoleDescriptionMessage), l(d(e.slides), t.slideRole);
      var u = e.params.loop ? e.slides.filter(function (t) {
        return !t.classList.contains(e.params.slideDuplicateClass);
      }).length : e.slides.length;
      var m, v;
      e.slides.each(function (s, a) {
        var i = d(s),
            r = e.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : a;
        c(i, t.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, u));
      }), e.navigation && e.navigation.$nextEl && (m = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (v = e.navigation.$prevEl), m && m.length && g(m, r, t.nextSlideMessage), v && v.length && g(v, r, t.prevSlideMessage), f() && e.pagination.$el.on("keydown", W(e.params.pagination.bulletClass), h);
    }

    s("beforeInit", function () {
      a = d("<span class=\"".concat(e.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"));
    }), s("afterInit", function () {
      e.params.a11y.enabled && (v(), m());
    }), s("toEdge", function () {
      e.params.a11y.enabled && m();
    }), s("fromEdge", function () {
      e.params.a11y.enabled && m();
    }), s("paginationUpdate", function () {
      e.params.a11y.enabled && function () {
        var t = e.params.a11y;
        f() && e.pagination.bullets.each(function (s) {
          var a = d(s);
          r(a), e.params.pagination.renderBullet || (l(a, "button"), c(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)));
        });
      }();
    }), s("destroy", function () {
      e.params.a11y.enabled && function () {
        var t, s;
        a && a.length > 0 && a.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl), t && t.off("keydown", h), s && s.off("keydown", h), f() && e.pagination.$el.off("keydown", W(e.params.pagination.bulletClass), h);
      }();
    });
  }, function (_ref29) {
    var e = _ref29.swiper,
        t = _ref29.extendParams,
        s = _ref29.on;
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
        var _s44 = e.params.history.root;
        "/" === _s44[_s44.length - 1] && (_s44 = _s44.slice(0, _s44.length - 1)), d = "".concat(_s44, "/").concat(t, "/").concat(d);
      } else l.pathname.includes(t) || (d = "".concat(t, "/").concat(d));

      var c = i.history.state;
      c && c.value === d || (e.params.history.replaceState ? i.history.replaceState({
        value: d
      }, null, d) : i.history.pushState({
        value: d
      }, null, d));
    },
        d = function d(t, s, a) {
      if (s) for (var _i30 = 0, _r14 = e.slides.length; _i30 < _r14; _i30 += 1) {
        var _r15 = e.slides.eq(_i30);

        if (n(_r15.attr("data-history")) === s && !_r15.hasClass(e.params.slideDuplicateClass)) {
          var _s45 = _r15.index();

          e.slideTo(_s45, t, a);
        }
      } else e.slideTo(0, t, a);
    },
        c = function c() {
      i = l(e.params.url), d(e.params.speed, e.paths.value, !1);
    };

    s("init", function () {
      e.params.history.enabled && function () {
        var t = r();

        if (e.params.history) {
          if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
          a = !0, i = l(e.params.url), (i.key || i.value) && (d(0, i.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", c));
        }
      }();
    }), s("destroy", function () {
      e.params.history.enabled && function () {
        var t = r();
        e.params.history.replaceState || t.removeEventListener("popstate", c);
      }();
    }), s("transitionEnd _freeModeNoMomentumRelease", function () {
      a && o(e.params.history.key, e.activeIndex);
    }), s("slideChange", function () {
      a && e.params.cssMode && o(e.params.history.key, e.activeIndex);
    });
  }, function (_ref30) {
    var e = _ref30.swiper,
        t = _ref30.extendParams,
        s = _ref30.emit,
        i = _ref30.on;
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

    var c = function c() {
      s("hashChange");
      var t = l.location.hash.replace("#", "");

      if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
        var _s46 = e.$wrapperEl.children(".".concat(e.params.slideClass, "[data-hash=\"").concat(t, "\"]")).index();

        if (void 0 === _s46) return;
        e.slideTo(_s46);
      }
    },
        p = function p() {
      if (n && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && o.history && o.history.replaceState) o.history.replaceState(null, null, "#".concat(e.slides.eq(e.activeIndex).attr("data-hash")) || ""), s("hashSet");else {
        var _t72 = e.slides.eq(e.activeIndex),
            _a25 = _t72.attr("data-hash") || _t72.attr("data-history");

        l.location.hash = _a25 || "", s("hashSet");
      }
    };

    i("init", function () {
      e.params.hashNavigation.enabled && function () {
        if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
        n = !0;
        var t = l.location.hash.replace("#", "");

        if (t) {
          var _s47 = 0;

          for (var _a26 = 0, _i31 = e.slides.length; _a26 < _i31; _a26 += 1) {
            var _i32 = e.slides.eq(_a26);

            if ((_i32.attr("data-hash") || _i32.attr("data-history")) === t && !_i32.hasClass(e.params.slideDuplicateClass)) {
              var _t73 = _i32.index();

              e.slideTo(_t73, _s47, e.params.runCallbacksOnInit, !0);
            }
          }
        }

        e.params.hashNavigation.watchState && d(o).on("hashchange", c);
      }();
    }), i("destroy", function () {
      e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && d(o).off("hashchange", c);
    }), i("transitionEnd _freeModeNoMomentumRelease", function () {
      n && p();
    }), i("slideChange", function () {
      n && e.params.cssMode && p();
    });
  }, function (_ref31) {
    var e = _ref31.swiper,
        t = _ref31.extendParams,
        s = _ref31.on,
        i = _ref31.emit;
    var r;

    function n() {
      var t = e.slides.eq(e.activeIndex);
      var s = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(r), r = p(function () {
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

    function c() {
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
        a().addEventListener("visibilitychange", c), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", h), e.$el.on("mouseleave", m));
      }
    }), s("beforeTransitionStart", function (t, s, a) {
      e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(s) : o());
    }), s("sliderFirstMove", function () {
      e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : d());
    }), s("touchEnd", function () {
      e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && n();
    }), s("destroy", function () {
      e.$el.off("mouseenter", h), e.$el.off("mouseleave", m), e.autoplay.running && o();
      a().removeEventListener("visibilitychange", c);
    }), Object.assign(e.autoplay, {
      pause: d,
      run: n,
      start: l,
      stop: o
    });
  }, function (_ref32) {
    var e = _ref32.swiper,
        t = _ref32.extendParams,
        s = _ref32.on;
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
        var _t74 = e.activeIndex;
        e.slides.eq(_t74).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, _t74 = e.activeIndex);

        var _s48 = e.slides.eq(_t74).prevAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index(),
            _a27 = e.slides.eq(_t74).nextAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index();

        i = void 0 === _s48 ? _a27 : void 0 === _a27 ? _s48 : _a27 - _t74 < _t74 - _s48 ? _a27 : _s48;
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
        var _a28 = Object.assign({}, t.swiper);

        Object.assign(_a28, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), e.thumbs.swiper = new s(_a28), i = !0;
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
        var _n18,
            _l8,
            _o11 = s.activeIndex;

        if (s.params.loop) {
          s.slides.eq(_o11).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, _o11 = s.activeIndex);

          var _t75 = s.slides.eq(_o11).prevAll("[data-swiper-slide-index=\"".concat(e.realIndex, "\"]")).eq(0).index(),
              _a29 = s.slides.eq(_o11).nextAll("[data-swiper-slide-index=\"".concat(e.realIndex, "\"]")).eq(0).index();

          _n18 = void 0 === _t75 ? _a29 : void 0 === _a29 ? _t75 : _a29 - _o11 == _o11 - _t75 ? s.params.slidesPerGroup > 1 ? _a29 : _o11 : _a29 - _o11 < _o11 - _t75 ? _a29 : _t75, _l8 = e.activeIndex > e.previousIndex ? "next" : "prev";
        } else _n18 = e.realIndex, _l8 = _n18 > e.previousIndex ? "next" : "prev";

        r && (_n18 += "next" === _l8 ? i : -1 * i), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(_n18) < 0 && (s.params.centeredSlides ? _n18 = _n18 > _o11 ? _n18 - Math.floor(a / 2) + 1 : _n18 + Math.floor(a / 2) - 1 : _n18 > _o11 && s.params.slidesPerGroup, s.slideTo(_n18, t ? 0 : void 0));
      }

      var n = 1;
      var l = e.params.thumbs.slideThumbActiveClass;
      if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (n = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), s.slides.removeClass(l), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (var _t76 = 0; _t76 < n; _t76 += 1) {
        s.$wrapperEl.children("[data-swiper-slide-index=\"".concat(e.realIndex + _t76, "\"]")).addClass(l);
      } else for (var _t77 = 0; _t77 < n; _t77 += 1) {
        s.slides.eq(e.realIndex + _t77).addClass(l);
      }
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
  }, function (_ref33) {
    var e = _ref33.swiper,
        t = _ref33.extendParams,
        s = _ref33.emit,
        a = _ref33.once;
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
        onTouchEnd: function onTouchEnd(_ref34) {
          var t = _ref34.currentPos;
          var i = e.params,
              r = e.$wrapperEl,
              n = e.rtlTranslate,
              l = e.snapGrid,
              o = e.touchEventsData,
              d = u() - o.touchStartTime;
          if (t < -e.minTranslate()) e.slideTo(e.activeIndex);else if (t > -e.maxTranslate()) e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1);else {
            if (i.freeMode.momentum) {
              if (o.velocities.length > 1) {
                var _t79 = o.velocities.pop(),
                    _s49 = o.velocities.pop(),
                    _a30 = _t79.position - _s49.position,
                    _r16 = _t79.time - _s49.time;

                e.velocity = _a30 / _r16, e.velocity /= 2, Math.abs(e.velocity) < i.freeMode.minimumVelocity && (e.velocity = 0), (_r16 > 150 || u() - _t79.time > 300) && (e.velocity = 0);
              } else e.velocity = 0;

              e.velocity *= i.freeMode.momentumVelocityRatio, o.velocities.length = 0;

              var _t78 = 1e3 * i.freeMode.momentumRatio;

              var _d6 = e.velocity * _t78;

              var _c4 = e.translate + _d6;

              n && (_c4 = -_c4);

              var _p,
                  _h = !1;

              var _m = 20 * Math.abs(e.velocity) * i.freeMode.momentumBounceRatio;

              var _f;

              if (_c4 < e.maxTranslate()) i.freeMode.momentumBounce ? (_c4 + e.maxTranslate() < -_m && (_c4 = e.maxTranslate() - _m), _p = e.maxTranslate(), _h = !0, o.allowMomentumBounce = !0) : _c4 = e.maxTranslate(), i.loop && i.centeredSlides && (_f = !0);else if (_c4 > e.minTranslate()) i.freeMode.momentumBounce ? (_c4 - e.minTranslate() > _m && (_c4 = e.minTranslate() + _m), _p = e.minTranslate(), _h = !0, o.allowMomentumBounce = !0) : _c4 = e.minTranslate(), i.loop && i.centeredSlides && (_f = !0);else if (i.freeMode.sticky) {
                var _t80;

                for (var _e90 = 0; _e90 < l.length; _e90 += 1) {
                  if (l[_e90] > -_c4) {
                    _t80 = _e90;
                    break;
                  }
                }

                _c4 = Math.abs(l[_t80] - _c4) < Math.abs(l[_t80 - 1] - _c4) || "next" === e.swipeDirection ? l[_t80] : l[_t80 - 1], _c4 = -_c4;
              }

              if (_f && a("transitionEnd", function () {
                e.loopFix();
              }), 0 !== e.velocity) {
                if (_t78 = n ? Math.abs((-_c4 - e.translate) / e.velocity) : Math.abs((_c4 - e.translate) / e.velocity), i.freeMode.sticky) {
                  var _s50 = Math.abs((n ? -_c4 : _c4) - e.translate),
                      _a31 = e.slidesSizesGrid[e.activeIndex];

                  _t78 = _s50 < _a31 ? i.speed : _s50 < 2 * _a31 ? 1.5 * i.speed : 2.5 * i.speed;
                }
              } else if (i.freeMode.sticky) return void e.slideToClosest();

              i.freeMode.momentumBounce && _h ? (e.updateProgress(_p), e.setTransition(_t78), e.setTranslate(_c4), e.transitionStart(!0, e.swipeDirection), e.animating = !0, r.transitionEnd(function () {
                e && !e.destroyed && o.allowMomentumBounce && (s("momentumBounce"), e.setTransition(i.speed), setTimeout(function () {
                  e.setTranslate(_p), r.transitionEnd(function () {
                    e && !e.destroyed && e.transitionEnd();
                  });
                }, 0));
              })) : e.velocity ? (s("_freeModeNoMomentumRelease"), e.updateProgress(_c4), e.setTransition(_t78), e.setTranslate(_c4), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, r.transitionEnd(function () {
                e && !e.destroyed && e.transitionEnd();
              }))) : e.updateProgress(_c4), e.updateActiveIndex(), e.updateSlidesClasses();
            } else {
              if (i.freeMode.sticky) return void e.slideToClosest();
              i.freeMode && s("_freeModeNoMomentumRelease");
            }

            (!i.freeMode.momentum || d >= i.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
          }
        }
      }
    });
  }, function (_ref35) {
    var e = _ref35.swiper,
        t = _ref35.extendParams;
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
            c = _e$params$grid2.rows,
            p = _e$params$grid2.fill;
        var u, h, m;

        if ("row" === p && o > 1) {
          var _e91 = Math.floor(t / (o * c)),
              _a32 = t - c * o * _e91,
              _i33 = 0 === _e91 ? o : Math.min(Math.ceil((n - _e91 * c * o) / c), o);

          m = Math.floor(_a32 / _i33), h = _a32 - m * _i33 + _e91 * o, u = h + m * s / c, r.css({
            "-webkit-order": u,
            order: u
          });
        } else "column" === p ? (h = Math.floor(t / c), m = t - h * c, (h > i || h === i && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(t / a), h = t - m * a);

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
          var _t81 = [];

          for (var _s51 = 0; _s51 < a.length; _s51 += 1) {
            var _i34 = a[_s51];
            l && (_i34 = Math.floor(_i34)), a[_s51] < e.virtualSize + a[0] && _t81.push(_i34);
          }

          a.push.apply(a, _t81);
        }
      }
    };
  }, function (_ref36) {
    var e = _ref36.swiper;
    Object.assign(e, {
      appendSlide: R.bind(e),
      prependSlide: j.bind(e),
      addSlide: _.bind(e),
      removeSlide: V.bind(e),
      removeAllSlides: q.bind(e)
    });
  }, function (_ref37) {
    var e = _ref37.swiper,
        t = _ref37.extendParams,
        s = _ref37.on;
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

        for (var _a33 = 0; _a33 < t.length; _a33 += 1) {
          var _t82 = e.slides.eq(_a33);

          var _i35 = -_t82[0].swiperSlideOffset;

          e.params.virtualTranslate || (_i35 -= e.translate);
          var _r17 = 0;
          e.isHorizontal() || (_r17 = _i35, _i35 = 0);

          var _n19 = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(_t82[0].progress), 0) : 1 + Math.min(Math.max(_t82[0].progress, -1), 0);

          U(s, _t82).css({
            opacity: _n19
          }).transform("translate3d(".concat(_i35, "px, ").concat(_r17, "px, 0px)"));
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
  }, function (_ref38) {
    var e = _ref38.swiper,
        t = _ref38.extendParams,
        s = _ref38.on;
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
            c = e.params.cubeEffect,
            p = e.isHorizontal(),
            u = e.virtual && e.params.virtual.enabled;
        var h,
            m = 0;
        c.shadow && (p ? (h = s.find(".swiper-cube-shadow"), 0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'), s.append(h)), h.css({
          height: "".concat(i, "px")
        })) : (h = t.find(".swiper-cube-shadow"), 0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'), t.append(h))));

        for (var _e92 = 0; _e92 < a.length; _e92 += 1) {
          var _t83 = a.eq(_e92);

          var _s52 = _e92;
          u && (_s52 = parseInt(_t83.attr("data-swiper-slide-index"), 10));

          var _i36 = 90 * _s52,
              _r18 = Math.floor(_i36 / 360);

          n && (_i36 = -_i36, _r18 = Math.floor(-_i36 / 360));

          var _o12 = Math.max(Math.min(_t83[0].progress, 1), -1);

          var _h2 = 0,
              _f2 = 0,
              _g = 0;
          _s52 % 4 == 0 ? (_h2 = 4 * -_r18 * l, _g = 0) : (_s52 - 1) % 4 == 0 ? (_h2 = 0, _g = 4 * -_r18 * l) : (_s52 - 2) % 4 == 0 ? (_h2 = l + 4 * _r18 * l, _g = l) : (_s52 - 3) % 4 == 0 && (_h2 = -l, _g = 3 * l + 4 * l * _r18), n && (_h2 = -_h2), p || (_f2 = _h2, _h2 = 0);

          var _v = "rotateX(".concat(p ? 0 : -_i36, "deg) rotateY(").concat(p ? _i36 : 0, "deg) translate3d(").concat(_h2, "px, ").concat(_f2, "px, ").concat(_g, "px)");

          if (_o12 <= 1 && _o12 > -1 && (m = 90 * _s52 + 90 * _o12, n && (m = 90 * -_s52 - 90 * _o12)), _t83.transform(_v), c.slideShadows) {
            var _e93 = p ? _t83.find(".swiper-slide-shadow-left") : _t83.find(".swiper-slide-shadow-top"),
                _s53 = p ? _t83.find(".swiper-slide-shadow-right") : _t83.find(".swiper-slide-shadow-bottom");

            0 === _e93.length && (_e93 = d("<div class=\"swiper-slide-shadow-".concat(p ? "left" : "top", "\"></div>")), _t83.append(_e93)), 0 === _s53.length && (_s53 = d("<div class=\"swiper-slide-shadow-".concat(p ? "right" : "bottom", "\"></div>")), _t83.append(_s53)), _e93.length && (_e93[0].style.opacity = Math.max(-_o12, 0)), _s53.length && (_s53[0].style.opacity = Math.max(_o12, 0));
          }
        }

        if (s.css({
          "-webkit-transform-origin": "50% 50% -".concat(l / 2, "px"),
          "transform-origin": "50% 50% -".concat(l / 2, "px")
        }), c.shadow) if (p) h.transform("translate3d(0px, ".concat(i / 2 + c.shadowOffset, "px, ").concat(-i / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(c.shadowScale, ")"));else {
          var _e94 = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
              _t84 = 1.5 - (Math.sin(2 * _e94 * Math.PI / 360) / 2 + Math.cos(2 * _e94 * Math.PI / 360) / 2),
              _s54 = c.shadowScale,
              _a34 = c.shadowScale / _t84,
              _i37 = c.shadowOffset;

          h.transform("scale3d(".concat(_s54, ", 1, ").concat(_a34, ") translate3d(0px, ").concat(r / 2 + _i37, "px, ").concat(-r / 2 / _a34, "px) rotateX(-90deg)"));
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
  }, function (_ref39) {
    var e = _ref39.swiper,
        t = _ref39.extendParams,
        s = _ref39.on;
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

        for (var _i38 = 0; _i38 < t.length; _i38 += 1) {
          var _r19 = t.eq(_i38);

          var _n20 = _r19[0].progress;
          e.params.flipEffect.limitRotation && (_n20 = Math.max(Math.min(_r19[0].progress, 1), -1));
          var _l9 = _r19[0].swiperSlideOffset;

          var _o13 = -180 * _n20,
              _d7 = 0,
              _c5 = e.params.cssMode ? -_l9 - e.translate : -_l9,
              _p2 = 0;

          if (e.isHorizontal() ? s && (_o13 = -_o13) : (_p2 = _c5, _c5 = 0, _d7 = -_o13, _o13 = 0), _r19[0].style.zIndex = -Math.abs(Math.round(_n20)) + t.length, a.slideShadows) {
            var _t85 = e.isHorizontal() ? _r19.find(".swiper-slide-shadow-left") : _r19.find(".swiper-slide-shadow-top"),
                _s55 = e.isHorizontal() ? _r19.find(".swiper-slide-shadow-right") : _r19.find(".swiper-slide-shadow-bottom");

            0 === _t85.length && (_t85 = Z(a, _r19, e.isHorizontal() ? "left" : "top")), 0 === _s55.length && (_s55 = Z(a, _r19, e.isHorizontal() ? "right" : "bottom")), _t85.length && (_t85[0].style.opacity = Math.max(-_n20, 0)), _s55.length && (_s55[0].style.opacity = Math.max(_n20, 0));
          }

          var _u3 = "translate3d(".concat(_c5, "px, ").concat(_p2, "px, 0px) rotateX(").concat(_d7, "deg) rotateY(").concat(_o13, "deg)");

          U(a, _r19).transform(_u3);
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
  }, function (_ref40) {
    var e = _ref40.swiper,
        t = _ref40.extendParams,
        s = _ref40.on;
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
            c = r.depth;

        for (var _e95 = 0, _t86 = a.length; _e95 < _t86; _e95 += 1) {
          var _t87 = a.eq(_e95),
              _s56 = i[_e95],
              _l10 = (o - _t87[0].swiperSlideOffset - _s56 / 2) / _s56 * r.modifier;

          var _p3 = n ? d * _l10 : 0,
              _u4 = n ? 0 : d * _l10,
              _h3 = -c * Math.abs(_l10),
              _m2 = r.stretch;

          "string" == typeof _m2 && -1 !== _m2.indexOf("%") && (_m2 = parseFloat(r.stretch) / 100 * _s56);

          var _f3 = n ? 0 : _m2 * _l10,
              _g2 = n ? _m2 * _l10 : 0,
              _v2 = 1 - (1 - r.scale) * Math.abs(_l10);

          Math.abs(_g2) < .001 && (_g2 = 0), Math.abs(_f3) < .001 && (_f3 = 0), Math.abs(_h3) < .001 && (_h3 = 0), Math.abs(_p3) < .001 && (_p3 = 0), Math.abs(_u4) < .001 && (_u4 = 0), Math.abs(_v2) < .001 && (_v2 = 0);

          var _w = "translate3d(".concat(_g2, "px,").concat(_f3, "px,").concat(_h3, "px)  rotateX(").concat(_u4, "deg) rotateY(").concat(_p3, "deg) scale(").concat(_v2, ")");

          if (U(r, _t87).transform(_w), _t87[0].style.zIndex = 1 - Math.abs(Math.round(_l10)), r.slideShadows) {
            var _e96 = n ? _t87.find(".swiper-slide-shadow-left") : _t87.find(".swiper-slide-shadow-top"),
                _s57 = n ? _t87.find(".swiper-slide-shadow-right") : _t87.find(".swiper-slide-shadow-bottom");

            0 === _e96.length && (_e96 = Z(r, _t87, n ? "left" : "top")), 0 === _s57.length && (_s57 = Z(r, _t87, n ? "right" : "bottom")), _e96.length && (_e96[0].style.opacity = _l10 > 0 ? _l10 : 0), _s57.length && (_s57[0].style.opacity = -_l10 > 0 ? -_l10 : 0);
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
  }, function (_ref41) {
    var e = _ref41.swiper,
        t = _ref41.extendParams,
        s = _ref41.on;
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
            s = e.params.creativeEffect,
            i = s.progressMultiplier;

        var _loop2 = function _loop2(_r20) {
          var n = t.eq(_r20),
              l = n[0].progress,
              o = Math.min(Math.max(n[0].progress, -s.limitProgress), s.limitProgress),
              d = n[0].swiperSlideOffset,
              c = [e.params.cssMode ? -d - e.translate : -d, 0, 0],
              p = [0, 0, 0];
          var u = !1;
          e.isHorizontal() || (c[1] = c[0], c[0] = 0);
          var h = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };
          o < 0 ? (h = s.next, u = !0) : o > 0 && (h = s.prev, u = !0), c.forEach(function (e, t) {
            c[t] = "calc(".concat(e, "px + (").concat(a(h.translate[t]), " * ").concat(Math.abs(o * i), "))");
          }), p.forEach(function (e, t) {
            p[t] = h.rotate[t] * Math.abs(o * i);
          }), n[0].style.zIndex = -Math.abs(Math.round(l)) + t.length;
          var m = c.join(", "),
              f = "rotateX(".concat(p[0], "deg) rotateY(").concat(p[1], "deg) rotateZ(").concat(p[2], "deg)"),
              g = o < 0 ? "scale(".concat(1 + (1 - h.scale) * o * i, ")") : "scale(".concat(1 - (1 - h.scale) * o * i, ")"),
              v = o < 0 ? 1 + (1 - h.opacity) * o * i : 1 - (1 - h.opacity) * o * i,
              w = "translate3d(".concat(m, ") ").concat(f, " ").concat(g);

          if (u && h.shadow || !u) {
            var _e97 = n.children(".swiper-slide-shadow");

            if (0 === _e97.length && h.shadow && (_e97 = Z(s, n)), _e97.length) {
              var _t88 = s.shadowPerProgress ? o * (1 / s.limitProgress) : o;

              _e97[0].style.opacity = Math.min(Math.max(Math.abs(_t88), 0), 1);
            }
          }

          var b = U(s, n);
          b.transform(w).css({
            opacity: v
          }), h.origin && b.css("transform-origin", h.origin);
        };

        for (var _r20 = 0; _r20 < t.length; _r20 += 1) {
          _loop2(_r20);
        }
      },
      setTransition: function setTransition(t) {
        var s = e.params.creativeEffect.transformEl;
        (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), K({
          swiper: e,
          duration: t,
          transformEl: s
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
  }, function (_ref42) {
    var e = _ref42.swiper,
        t = _ref42.extendParams,
        s = _ref42.on;
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
              _d8 = _o14[0].progress,
              _c6 = Math.min(Math.max(_d8, -4), 4);

          var _p4 = _o14[0].swiperSlideOffset;
          e.params.centeredSlides && !e.params.cssMode && e.$wrapperEl.transform("translateX(".concat(e.minTranslate(), "px)")), e.params.centeredSlides && e.params.cssMode && (_p4 -= t[0].swiperSlideOffset);

          var _u5 = e.params.cssMode ? -_p4 - e.translate : -_p4,
              _h4 = 0;

          var _m3 = -100 * Math.abs(_c6);

          var _f4 = 1,
              _g3 = -2 * _c6,
              _v3 = 8 - .75 * Math.abs(_c6);

          var _w2 = (_l11 === s || _l11 === s - 1) && _c6 > 0 && _c6 < 1 && (r || e.params.cssMode) && n < i,
              _b = (_l11 === s || _l11 === s + 1) && _c6 < 0 && _c6 > -1 && (r || e.params.cssMode) && n > i;

          if (_w2 || _b) {
            var _e98 = Math.pow(1 - Math.abs((Math.abs(_c6) - .5) / .5), .5);

            _g3 += -28 * _c6 * _e98, _f4 += -.5 * _e98, _v3 += 96 * _e98, _h4 = -25 * _e98 * Math.abs(_c6) + "%";
          }

          if (_u5 = _c6 < 0 ? "calc(".concat(_u5, "px + (").concat(_v3 * Math.abs(_c6), "%))") : _c6 > 0 ? "calc(".concat(_u5, "px + (-").concat(_v3 * Math.abs(_c6), "%))") : "".concat(_u5, "px"), !e.isHorizontal()) {
            var _e99 = _h4;
            _h4 = _u5, _u5 = _e99;
          }

          var _x = "\n        translate3d(".concat(_u5, ", ").concat(_h4, ", ").concat(_m3, "px)\n        rotateZ(").concat(_g3, "deg)\n        scale(").concat(_c6 < 0 ? "" + (1 + (1 - _f4) * _c6) : "" + (1 - (1 - _f4) * _c6), ")\n      ");

          if (a.slideShadows) {
            var _e100 = _o14.find(".swiper-slide-shadow");

            0 === _e100.length && (_e100 = Z(a, _o14)), _e100.length && (_e100[0].style.opacity = Math.min(Math.max((Math.abs(_c6) - .5) / .5, 0), 1));
          }

          _o14[0].style.zIndex = -Math.abs(Math.round(_d8)) + t.length;
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

  function setCookie(_ref43) {
    var name = _ref43.name,
        value = _ref43.value,
        expirationInDays = _ref43.expirationInDays;

    if (!expirationInDays) {
      // Default cookie expiration
      expirationInDays = 30;
    }

    var date = new Date();
    date.setTime(date.getTime() + expirationInDays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }

  function getCookieByName(cookieName) {
    // Got from StackOverflow - https://stackoverflow.com/a/15724300/5542331
    var value = "; ".concat(document.cookie);
    var parts = value.split("; ".concat(cookieName, "="));

    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }

  function manageUtmHelpers() {
    function setCookieFromUrl(cookieName) {
      if (!hasUtmParameter(cookieName)) {
        return;
      }

      setCookie({
        name: cookieName,
        value: getUtmValueFromUrl(cookieName)
      });
    }

    function setupUtmSource() {
      setCookie({
        name: 'utm_today',
        value: 1
      });
      var hasUtmSourceInUrl = !!getUtmValueFromUrl('utm_source');
      var hasUtmTodayInStorage = !!getCookieByName('utm_today');
      var hasReferrer = !!document.referrer;
      var hasComeFromGoogleSearch = document.referrer.search('google') > 0;

      if (!hasUtmSourceInUrl && !hasUtmTodayInStorage && hasReferrer && hasComeFromGoogleSearch) {
        setCookie({
          name: 'utm_source',
          value: 'google'
        });
        setCookie({
          name: 'utm_medium',
          value: 'organic'
        });
        return;
      }

      if (!hasUtmSourceInUrl && !hasUtmTodayInStorage && hasReferrer) {
        setCookie({
          name: 'utm_source',
          value: 'referral'
        });
        setCookie({
          name: 'utm_medium',
          value: document.referrer
        });
        return;
      }

      setCookieFromUrl('utm_source');
    } // This is specific because it has additional logic


    setupUtmSource();
    setCookieFromUrl('utm_medium');
    setCookieFromUrl('utm_campaign');
    setCookieFromUrl('utm_term');
    setCookieFromUrl('utm_content');
    setCookieFromUrl('gclid');
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
    }); // Bootstrap styles required

    this.addClass('d-none');
  };

  $.fn.enableFormFields = function () {
    this.find('select').each(function () {
      $(this).attr('disabled', false);
    });
    this.find('input').each(function () {
      $(this).attr('disabled', false);
    }); // Bootstrap styles required

    this.removeClass('d-none');
  };
}

function getFieldValue(_ref44) {
  var name = _ref44.name,
      type = _ref44.type;

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

function setInvalidInput(_ref45) {
  var input = _ref45.input,
      message = _ref45.message;
  input.setCustomValidity(message || 'invalid');
  input.classList.add('is-invalid');
}

function setValidInput(_ref46) {
  var input = _ref46.input;
  input.setCustomValidity('');
  input.classList.remove('is-invalid');
}

function guideUserToTheFirstError() {
  var currentScrollPosition = $(window).scrollTop();
  var invalidInputsSelectors = ['.form-control:invalid', '.form-select:invalid', '.form-check-input:invalid', '.form-range:invalid', '.form-control.is-invalid', '.form-select.is-invalid', '.form-check-input.is-invalid', '.form-range.is-invalid'];
  var $invalidInputs = $(invalidInputsSelectors.join(', ')); // Selects the parent to get input label

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

  function _scrollToError(_ref47) {
    var container = _ref47.container;
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

function validateFullName(_ref48) {
  var fullNameElement = _ref48.fullNameElement,
      invalidMessage = _ref48.invalidMessage;
  var fullName = fullNameElement.value; // Only for themed form by Bootstrap

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

  function fullNameValidateHandler(_ref49) {
    var fullNameElement = _ref49.fullNameElement;

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
    var sanitizedPhone = phoneValue.value.replace(/\D/g, ''); // Check if has phone number and it has 11 characters

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
    var sanitizedPhone = phoneValue.value.replace(/\D/g, ''); // Check if has phone number and it has 11 characters

    return sanitizedPhone.length && sanitizedPhone.length === 10;
  }
}

function initializeFormHelpers() {
  // Form usability
  setCustomFileLabel();
  setupCustomFormFieldsVisibility(); // Validators

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

      for (var _i39 = sizes.prefix; _i39 >= 1; _i39--) {
        sum += cnpj.number.full.charAt(sizes.prefix - _i39) * positionIndex--;

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

      for (var _i40 = 0; _i40 < 9; _i40++) {
        d1 += cpf.prefix.charAt(_i40) * (11 - _i40);
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
}(); // Hide Header on scroll down


function setupFmdHeader() {
  // Return element's offset top
  function getOffsetTop(selector) {
    return document.getElementsByClassName(selector)[0].getBoundingClientRect().top + window.pageYOffset;
  } // Return if selector was found


  function isElementSet(selector) {
    return !!document.getElementsByClassName(selector).length;
  }

  function showHeader() {
    header.classList.remove(hideClass); // header.style.transform = 'none';
  }

  function hideHeader() {
    header.classList.add(hideClass); // header.style.transform = 'translateY(-100%)';
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
  } // Initialize variables


  var didScroll;
  var lastScrollTop = 0;
  var fixedTimer;
  var delta = 5; // Minimum scroll value
  // Set classes

  var headerClass = 'fmd-header';
  var startTargetClass = 'fmd-header-start-target';
  var endTargetClass = 'fmd-header-end-target';
  var hideClass = 'fmd-header-is-hidden';
  var fixedClass = 'fmd-header-is-fixed'; // If fixed header class wasn't found

  if (!isElementSet(headerClass)) {
    console.error("Use a classe \"".concat(headerClass, "\" no <header> para ativar o fixed header"));
    return;
  } // Select fixed header


  var header = document.getElementsByClassName(headerClass)[0];
  var headerTransition = Number(getComputedStyle(header)['transition-duration'].replace('s', '')) * 1000; // Start target where header will be fixed | Default: Window Height (100vh)

  var startTarget = isElementSet(startTargetClass) ? getOffsetTop(startTargetClass) : window.outerHeight; // End target where header will be shown | Default: The page bottom

  var endTarget = isElementSet(endTargetClass) ? getOffsetTop(endTargetClass) : document.body.scrollHeight; // Set variable that is used to apply padding-top to the body

  header.style.position = 'absolute';
  setTimeout(function () {
    document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
  }, headerTransition); // Scroll event listener

  window.addEventListener('scroll', function () {
    didScroll = true;
  }); // Watcher that calls function if the window was scrolled

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, headerTransition); // When window gets scrolled

  function hasScrolled() {
    var st = window.pageYOffset; // Update last scroll top

    function updateLastScroll() {
      lastScrollTop = st;
    } // Make sure they scroll more than delta


    if (Math.abs(lastScrollTop - st) <= delta) {
      return;
    }

    setHeaderTransition(headerTransition); // If the window bottom reaches end target

    if (st + window.outerHeight >= endTarget) {
      showHeader();
      updateLastScroll();
      return;
    } // If scroll down and passes start target


    if (st > lastScrollTop && st > startTarget) {
      window.clearTimeout(fixedTimer);
      fixedTimer = window.setTimeout(function () {
        setStickyHeader();
      }, headerTransition);
    } // If scroll down and passes header height


    if (st > lastScrollTop && st > header.offsetHeight) {
      hideHeader();
      updateLastScroll();
      return;
    } // If scroll up


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


function getThemeVariables() {
  var root = getComputedStyle(document.documentElement); // Read 'from --bs-breakpoint-??' (min-width)

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

function setupServiceWorker() {
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
  } // Register the ServiceWorker


  navigator.serviceWorker.register('/sw.js').then(function (reg) {
    console.log('Service worker has been registered for scope: ' + reg.scope);
  })["catch"](function (err) {
    console.log('ServiceWorker registration failed: ', err);
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
        return;
      } // Execute the function only when form was submitted and is valid


      disableButtonOnSubmit(form);
    }, false);
  });
  $('.is-invalid').each(function () {
    $(this)[0].setCustomValidity('needs validate');
  }).on('focusout', function () {
    $(this).removeClass('is-invalid');
    $(this)[0].setCustomValidity('');
  });
}

function disableButtonOnSubmit(form) {
  var coupledFormBbuttons = form.querySelectorAll('button');
  var uncoupledFormButtons = document.querySelectorAll("button[form=".concat(form.id, "]"));
  var foundFormButtons = [].concat(_toConsumableArray(coupledFormBbuttons), _toConsumableArray(uncoupledFormButtons));
  foundFormButtons.forEach(function (button) {
    button.setAttribute('disabled', 'disabled');
    var buttonText = button.innerText;
    button.innerHTML = "<span class=\"spinner-container\">\n                            <span class=\"spinner-border spinner-border-sm text-light\"\n                                  role=\"status\"></span>\n                            ".concat(buttonText, "\n                        </span>");
    var spinner = button.querySelector('.spinner-container');
    spinner.classList.add('d-inline-block');
  });
}

function setupSmoothScroll() {
  // Smooth page scroll
  var elementsScrollTo = document.querySelectorAll('a.js-scroll-top');
  Array.prototype.forEach.call(elementsScrollTo, function (el, i) {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      var additionalOffset = Number(this.getAttribute('data-scroll-offset')) || 0;
      doScrollAnimate(this.hash, additionalOffset);
    });
  });

  function doScrollAnimate(targetSelector, additionOffset) {
    var target = document.querySelector(targetSelector);

    if (!target) {
      console.error("Alvo n\xE3o encontrado, verifique se existe um elemento na p\xE1gina com o id ".concat(targetSelector, "."));
      return;
    }

    var scrollTop = target.getBoundingClientRect().top + document.body.scrollTop + additionOffset;
    window.scrollBy({
      top: scrollTop,
      behavior: 'smooth'
    });
  }
}

function verifyUserAgent() {
  var OSNome = '';

  if (window.navigator.userAgent.indexOf('Windows NT 10.0') !== -1) {
    OSNome = 'Windows 10';
  }

  if (window.navigator.userAgent.indexOf('Windows NT 6.2') !== -1) {
    OSNome = 'Windows 8';
  }

  if (window.navigator.userAgent.indexOf('Windows NT 6.1') !== -1) {
    OSNome = 'Windows 7';
  }

  if (window.navigator.userAgent.indexOf('Windows NT 6.0') !== -1) {
    OSNome = 'Windows Vista';
  }

  if (window.navigator.userAgent.indexOf('Windows NT 5.1') !== -1) {
    OSNome = 'Windows XP';
  }

  if (window.navigator.userAgent.indexOf('Windows NT 5.0') !== -1) {
    OSNome = 'Windows 2000';
  }

  if (window.navigator.userAgent.indexOf('Mac') !== -1) {
    OSNome = 'Mac/iOS';
  }

  if (window.navigator.userAgent.indexOf('X11') !== -1) {
    OSNome = 'UNIX';
  }

  if (window.navigator.userAgent.indexOf('Linux') !== -1) {
    OSNome = 'Linux';
  }

  if (OSNome !== 'Mac/iOS') {
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
  //   <option class="" value="/html/faq">FAQ</option>
  //</select>
  $('.js-onchange').change(function () {
    window.location = $(this).val();
  });
}

function setupSelect2() {
  $('select.js-select2').select2({
    theme: 'bootstrap',
    language: 'pt-BR'
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
    blocks: {
      d: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: IMask.MaskedRange,
        from: 1900,
        to: 2999
      }
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
  $('a[href="#"]').click(function (e) {
    e.preventDefault();
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

function setupShareWindow() {
  $('.js-btn-share').click(function (e) {
    e.preventDefault();
    window.open($(this).attr('href'), 'shareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    return false;
  });
}

function setupSideDrawer() {
  var $body = $('body');
  var $mainContent = $('.js-main-content');
  var $navbar = $('.navbar');
  var $navbarCollapse = $('.navbar-collapse');
  var $navbarToggler = $('.navbar-toggler');
  var headerHeight = $navbar.innerHeight();
  resetSideDrawerConfig();

  if (window.innerWidth > getThemeVariables().breakpoints.md) {
    return;
  }

  $navbarCollapse.css('margin-top', "".concat(headerHeight, "px"));

  function resetSideDrawerConfig() {
    $navbarCollapse.css('margin-top', '');
    $navbarCollapse.removeClass('show');
    $mainContent.removeClass('show-backdrop');
    $body.removeClass('overflow-hidden');
  }

  function navbarToggleHandler() {
    $navbarCollapse.toggleClass('show');
    $mainContent.toggleClass('show-backdrop');
    $body.toggleClass('overflow-hidden');
  }

  $navbarToggler.click(navbarToggleHandler);
}

function insertCopyrightYear() {
  var copyrightContainerSelector = '.js-copyright-container';
  var hasCopyrightSelector = $('footer').find(copyrightContainerSelector).length;

  if (!hasCopyrightSelector) {
    console.error("".concat(copyrightContainerSelector, " class is required to insert copyright text"));
    return;
  }

  var $yearContainer = $(copyrightContainerSelector);
  $yearContainer.text("Todos os direitos reservados \xA9 ".concat(new Date().getFullYear()));
}

function setupLivewire() {
  document.addEventListener('livewire:load', function (event) {// window.livewire.hook('afterDomUpdate', (component) => {
    //   setupInputMasks();
    //
    //   document.querySelectorAll('[data-upload]').forEach((item) => {
    //     item.addEventListener('change', (event) => {
    //       let target = event.target;
    //       let inputName = target.getAttribute('data-upload');
    //       let file = target.files[0];
    //       let reader = new FileReader();
    //       reader.readAsDataURL(file);
    //       reader.onload = () => {
    //         livewire.emit('upload', inputName, reader.result);
    //         /* console.log(reader.result); */
    //       };
    //       reader.onerror = (error) => {
    //         livewire.emit('upload', inputName, '');
    //         /* console.log('Error: ', error); */
    //       };
    //     });
    //   });
    // });
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

$(function () {
  setupServiceWorker();
  preventInvalidFormSubmit();
  verifyUserAgent();
  setupSmoothScroll(); // setupSideDrawer();
  // setupCepSearch();
  // setupStateCityOptions();
  // onChangeSelectLink();
  // setupSelect2();

  setupInputMasks(); // setupPopover();
  // setupTooltip();
  // setupAnchorReloadPrevention();
  // setupShareWindow();
  // insertCopyrightYear();

  initializeFormHelpers(); // setupDefaultSlider();
  // setupClipboardJS();

  setupShareAPI(); // setupDataLayerEventClickButton();

  setupUtmHelpers();
});
window.addEventListener('load', function () {
  /**
   * Usually the header triggers after the first section which has the
   * height defined as 100vh. We need the starting function here because
   * vh/vw are calculated after all resources loaded*/
  setupFmdHeader();

  if (window.innerWidth > getThemeVariables().breakpoints.md) {// setupLax();
  }

  setupInfiniteScroll();
});
setupLivewire();
