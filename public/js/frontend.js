function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e101) { throw _e101; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e102) { didErr = true; err = _e102; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    var r, _i2;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i2 = function i(e) {
          r.remove(), _i2 = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i2 && _i2();
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
  * Bootstrap v5.3.0 (https://getbootstrap.com/)
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
      var _iterator = _createForOfIteratorHelper(f),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _t3 = _step.value;

          _t3();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
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
    var o = N(t);
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

        for (var _r3 = s.target; _r3 && _r3 !== this; _r3 = _r3.parentNode) {
          var _iterator2 = _createForOfIteratorHelper(o),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _a = _step2.value;
              if (_a === _r3) return M(s, {
                delegateTarget: _r3
              }), n.oneOff && P.off(t, s.type, e, i), i.apply(_r3, [s]);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      };
    }(t, i, r) : function (t, e) {
      return function i(n) {
        return M(n, {
          delegateTarget: t
        }), i.oneOff && P.off(t, n.type, e), e.apply(t, [n]);
      };
    }(t, r);
    u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function D(t, e, i, n, s) {
    var o = k(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }

  function I(t, e, i, n) {
    var s = e[i] || {};

    for (var _i4 = 0, _Object$entries = Object.entries(s); _i4 < _Object$entries.length; _i4++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i4], 2),
          _o2 = _Object$entries$_i[0],
          _r4 = _Object$entries$_i[1];

      _o2.includes(n) && D(t, e, i, _r4.callable, _r4.delegationSelector);
    }
  }

  function N(t) {
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
        if (h) for (var _i5 = 0, _Object$keys = Object.keys(l); _i5 < _Object$keys.length; _i5++) {
          var _i6 = _Object$keys[_i5];
          I(t, l, _i6, e.slice(1));
        }

        for (var _i7 = 0, _Object$entries2 = Object.entries(c); _i7 < _Object$entries2.length; _i7++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i7], 2),
              _i8 = _Object$entries2$_i[0],
              _n3 = _Object$entries2$_i[1];

          var _s2 = _i8.replace(w, "");

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
      e !== N(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
      var l = M(new Event(e, {
        bubbles: o,
        cancelable: !0
      }), i);
      return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
    }
  };

  function M(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _loop = function _loop() {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i9], 2),
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

    for (var _i9 = 0, _Object$entries3 = Object.entries(e); _i9 < _Object$entries3.length; _i9++) {
      _loop();
    }

    return t;
  }

  function j(t) {
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

  function F(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-".concat(t.toLowerCase());
    });
  }

  var H = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-".concat(F(e)), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-".concat(F(e)));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {},
          i = Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs") && !t.startsWith("bsConfig");
      });

      var _iterator3 = _createForOfIteratorHelper(i),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _n4 = _step3.value;

          var _i10 = _n4.replace(/^bs/, "");

          _i10 = _i10.charAt(0).toLowerCase() + _i10.slice(1, _i10.length), e[_i10] = j(t.dataset[_n4]);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return j(t.getAttribute("data-bs-".concat(F(e))));
    }
  };

  var $ = /*#__PURE__*/function () {
    function $() {
      _classCallCheck(this, $);
    }

    _createClass($, [{
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
        var i = o(e) ? H.getDataAttribute(e, "config") : {};
        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), "object" == _typeof(i) ? i : {}), o(e) ? H.getDataAttributes(e) : {}), "object" == _typeof(t) ? t : {});
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;

        for (var _i11 = 0, _Object$entries4 = Object.entries(e); _i11 < _Object$entries4.length; _i11++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i11], 2),
              _n5 = _Object$entries4$_i[0],
              _s3 = _Object$entries4$_i[1];

          var _e4 = t[_n5],
              _r5 = o(_e4) ? "element" : null == (i = _e4) ? "".concat(i) : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();

          if (!new RegExp(_s3).test(_r5)) throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(_n5, "\" provided type \"").concat(_r5, "\" but expected type \"").concat(_s3, "\"."));
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

    return $;
  }();

  var W = /*#__PURE__*/function (_$) {
    _inherits(W, _$);

    var _super = _createSuper(W);

    function W(t, i) {
      var _this;

      _classCallCheck(this, W);

      _this = _super.call(this), (t = r(t)) && (_this._element = t, _this._config = _this._getConfig(i), e.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this)));
      return _this;
    }

    _createClass(W, [{
      key: "dispose",
      value: function dispose() {
        e.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY);

        var _iterator4 = _createForOfIteratorHelper(Object.getOwnPropertyNames(this)),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _t5 = _step4.value;
            this[_t5] = null;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
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
        return "5.3.0";
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
  }($);

  var B = function B(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i12 = t.getAttribute("href");

      if (!_i12 || !_i12.includes("#") && !_i12.startsWith(".")) return null;
      _i12.includes("#") && !_i12.startsWith("#") && (_i12 = "#".concat(_i12.split("#")[1])), e = _i12 && "#" !== _i12 ? _i12.trim() : null;
    }

    return n(e);
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

      for (; n;) {
        i.push(n), n = n.parentNode.closest(e);
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
    P.on(document, i, "[data-bs-dismiss=\"".concat(n, "\"]"), function (i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
      var s = z.getElementFromSelector(this) || this.closest(".".concat(n));
      t.getOrCreateInstance(s)[e]();
    });
  };

  var q = /*#__PURE__*/function (_W) {
    _inherits(q, _W);

    var _super2 = _createSuper(q);

    function q() {
      _classCallCheck(this, q);

      return _super2.apply(this, arguments);
    }

    _createClass(q, [{
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
          var e = q.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return q;
  }(W);

  R(q, "close"), m(q);
  var V = '[data-bs-toggle="button"]';

  var K = /*#__PURE__*/function (_W2) {
    _inherits(K, _W2);

    var _super3 = _createSuper(K);

    function K() {
      _classCallCheck(this, K);

      return _super3.apply(this, arguments);
    }

    _createClass(K, [{
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
          var e = K.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }]);

    return K;
  }(W);

  P.on(document, "click.bs.button.data-api", V, function (t) {
    t.preventDefault();
    var e = t.target.closest(V);
    K.getOrCreateInstance(e).toggle();
  }), m(K);
  var Q = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  },
      X = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };

  var Y = /*#__PURE__*/function (_$2) {
    _inherits(Y, _$2);

    var _super4 = _createSuper(Y);

    function Y(t, e) {
      var _this3;

      _classCallCheck(this, Y);

      _this3 = _super4.call(this), _this3._element = t, t && Y.isSupported() && (_this3._config = _this3._getConfig(e), _this3._deltaX = 0, _this3._supportPointerEvents = Boolean(window.PointerEvent), _this3._initEvents());
      return _this3;
    }

    _createClass(Y, [{
      key: "dispose",
      value: function dispose() {
        P.off(this._element, ".bs.swipe");
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

        this._supportPointerEvents ? (P.on(this._element, "pointerdown.bs.swipe", function (t) {
          return _this4._start(t);
        }), P.on(this._element, "pointerup.bs.swipe", function (t) {
          return _this4._end(t);
        }), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.swipe", function (t) {
          return _this4._start(t);
        }), P.on(this._element, "touchmove.bs.swipe", function (t) {
          return _this4._move(t);
        }), P.on(this._element, "touchend.bs.swipe", function (t) {
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
        return Q;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return X;
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

    return Y;
  }($);

  var U = "next",
      G = "prev",
      J = "left",
      Z = "right",
      tt = "slid.bs.carousel",
      et = "carousel",
      it = "active",
      nt = {
    ArrowLeft: Z,
    ArrowRight: J
  },
      st = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0
  },
      ot = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };

  var rt = /*#__PURE__*/function (_W3) {
    _inherits(rt, _W3);

    var _super5 = _createSuper(rt);

    function rt(t, e) {
      var _this5;

      _classCallCheck(this, rt);

      _this5 = _super5.call(this, t, e), _this5._interval = null, _this5._activeElement = null, _this5._isSliding = !1, _this5.touchTimeout = null, _this5._swipeHelper = null, _this5._indicatorsElement = z.findOne(".carousel-indicators", _this5._element), _this5._addEventListeners(), _this5._config.ride === et && _this5.cycle();
      return _this5;
    }

    _createClass(rt, [{
      key: "next",
      value: function next() {
        this._slide(U);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && a(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(G);
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

        this._config.ride && (this._isSliding ? P.one(this._element, tt, function () {
          return _this7.cycle();
        }) : this.cycle());
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this8 = this;

        var e = this._getItems();

        if (t > e.length - 1 || t < 0) return;
        if (this._isSliding) return void P.one(this._element, tt, function () {
          return _this8.to(t);
        });

        var i = this._getItemIndex(this._getActive());

        if (i === t) return;
        var n = t > i ? U : G;

        this._slide(n, e[t]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), _get(_getPrototypeOf(rt.prototype), "dispose", this).call(this);
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

        this._config.keyboard && P.on(this._element, "keydown.bs.carousel", function (t) {
          return _this9._keydown(t);
        }), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", function () {
          return _this9.pause();
        }), P.on(this._element, "mouseleave.bs.carousel", function () {
          return _this9._maybeEnableCycle();
        })), this._config.touch && Y.isSupported() && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this10 = this;

        var _iterator5 = _createForOfIteratorHelper(z.find(".carousel-item img", this._element)),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _t6 = _step5.value;
            P.on(_t6, "dragstart.bs.carousel", function (t) {
              return t.preventDefault();
            });
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        var t = {
          leftCallback: function leftCallback() {
            return _this10._slide(_this10._directionToOrder(J));
          },
          rightCallback: function rightCallback() {
            return _this10._slide(_this10._directionToOrder(Z));
          },
          endCallback: function endCallback() {
            "hover" === _this10._config.pause && (_this10.pause(), _this10.touchTimeout && clearTimeout(_this10.touchTimeout), _this10.touchTimeout = setTimeout(function () {
              return _this10._maybeEnableCycle();
            }, 500 + _this10._config.interval));
          }
        };
        this._swipeHelper = new Y(this._element, t);
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = nt[t.key];
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
        var e = z.findOne(".active", this._indicatorsElement);
        e.classList.remove(it), e.removeAttribute("aria-current");
        var i = z.findOne("[data-bs-slide-to=\"".concat(t, "\"]"), this._indicatorsElement);
        i && (i.classList.add(it), i.setAttribute("aria-current", "true"));
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
            n = t === U,
            s = e || b(this._getItems(), i, n, this._config.wrap);

        if (s === i) return;

        var o = this._getItemIndex(s),
            r = function r(e) {
          return P.trigger(_this11._element, e, {
            relatedTarget: s,
            direction: _this11._orderToDirection(t),
            from: _this11._getItemIndex(i),
            to: o
          });
        };

        if (r("slide.bs.carousel").defaultPrevented) return;
        if (!i || !s) return;
        var a = Boolean(this._interval);
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
        var l = n ? "carousel-item-start" : "carousel-item-end",
            c = n ? "carousel-item-next" : "carousel-item-prev";
        s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback(function () {
          s.classList.remove(l, c), s.classList.add(it), i.classList.remove(it, c, l), _this11._isSliding = !1, r(tt);
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
        return z.findOne(".active.carousel-item", this._element);
      }
    }, {
      key: "_getItems",
      value: function _getItems() {
        return z.find(".carousel-item", this._element);
      }
    }, {
      key: "_clearInterval",
      value: function _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return p() ? t === J ? G : U : t === J ? U : G;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return p() ? t === G ? J : Z : t === G ? Z : J;
      }
    }], [{
      key: "Default",
      get: function get() {
        return st;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ot;
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
          var e = rt.getOrCreateInstance(this, t);

          if ("number" != typeof t) {
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
              e[t]();
            }
          } else e.to(t);
        });
      }
    }]);

    return rt;
  }(W);

  P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function (t) {
    var e = z.getElementFromSelector(this);
    if (!e || !e.classList.contains(et)) return;
    t.preventDefault();
    var i = rt.getOrCreateInstance(e),
        n = this.getAttribute("data-bs-slide-to");
    return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === H.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
  }), P.on(window, "load.bs.carousel.data-api", function () {
    var t = z.find('[data-bs-ride="carousel"]');

    var _iterator6 = _createForOfIteratorHelper(t),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _e5 = _step6.value;
        rt.getOrCreateInstance(_e5);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }), m(rt);
  var at = "show",
      lt = "collapse",
      ct = "collapsing",
      ht = '[data-bs-toggle="collapse"]',
      dt = {
    parent: null,
    toggle: !0
  },
      ut = {
    parent: "(null|element)",
    toggle: "boolean"
  };

  var ft = /*#__PURE__*/function (_W4) {
    _inherits(ft, _W4);

    var _super6 = _createSuper(ft);

    function ft(t, e) {
      var _this12;

      _classCallCheck(this, ft);

      _this12 = _super6.call(this, t, e), _this12._isTransitioning = !1, _this12._triggerArray = [];
      var i = z.find(ht);

      var _iterator7 = _createForOfIteratorHelper(i),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _t7 = _step7.value;

          var _e6 = z.getSelectorFromElement(_t7),
              _i13 = z.find(_e6).filter(function (t) {
            return t === _this12._element;
          });

          null !== _e6 && _i13.length && _this12._triggerArray.push(_t7);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      _this12._initializeChildren(), _this12._config.parent || _this12._addAriaAndCollapsedClass(_this12._triggerArray, _this12._isShown()), _this12._config.toggle && _this12.toggle();
      return _this12;
    }

    _createClass(ft, [{
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
          return ft.getOrCreateInstance(t, {
            toggle: !1
          });
        })), t.length && t[0]._isTransitioning) return;
        if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;

        var _iterator8 = _createForOfIteratorHelper(t),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _e7 = _step8.value;

            _e7.hide();
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        var e = this._getDimension();

        this._element.classList.remove(lt), this._element.classList.add(ct), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        var i = "scroll".concat(e[0].toUpperCase() + e.slice(1));
        this._queueCallback(function () {
          _this13._isTransitioning = !1, _this13._element.classList.remove(ct), _this13._element.classList.add(lt, at), _this13._element.style[e] = "", P.trigger(_this13._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[e] = "".concat(this._element[i], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this14 = this;

        if (this._isTransitioning || !this._isShown()) return;
        if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), d(this._element), this._element.classList.add(ct), this._element.classList.remove(lt, at);

        var _iterator9 = _createForOfIteratorHelper(this._triggerArray),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _t8 = _step9.value;

            var _e8 = z.getElementFromSelector(_t8);

            _e8 && !this._isShown(_e8) && this._addAriaAndCollapsedClass([_t8], !1);
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function () {
          _this14._isTransitioning = !1, _this14._element.classList.remove(ct), _this14._element.classList.add(lt), P.trigger(_this14._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains(at);
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

        var t = this._getFirstLevelChildren(ht);

        var _iterator10 = _createForOfIteratorHelper(t),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _e9 = _step10.value;

            var _t9 = z.getElementFromSelector(_e9);

            _t9 && this._addAriaAndCollapsedClass([_e9], this._isShown(_t9));
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
    }, {
      key: "_getFirstLevelChildren",
      value: function _getFirstLevelChildren(t) {
        var e = z.find(":scope .collapse .collapse", this._config.parent);
        return z.find(t, this._config.parent).filter(function (t) {
          return !e.includes(t);
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (t.length) {
          var _iterator11 = _createForOfIteratorHelper(t),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var _i14 = _step11.value;
              _i14.classList.toggle("collapsed", !e), _i14.setAttribute("aria-expanded", e);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return dt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ut;
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
          var i = ft.getOrCreateInstance(this, e);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t]();
          }
        });
      }
    }]);

    return ft;
  }(W);

  P.on(document, "click.bs.collapse.data-api", ht, function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();

    var _iterator12 = _createForOfIteratorHelper(z.getMultipleElementsFromSelector(this)),
        _step12;

    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var _t10 = _step12.value;
        ft.getOrCreateInstance(_t10, {
          toggle: !1
        }).toggle();
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
  }), m(ft);
  var pt = "top",
      mt = "bottom",
      gt = "right",
      _t = "left",
      bt = "auto",
      vt = [pt, mt, gt, _t],
      yt = "start",
      wt = "end",
      At = "clippingParents",
      Et = "viewport",
      Tt = "popper",
      Ct = "reference",
      Ot = vt.reduce(function (t, e) {
    return t.concat([e + "-" + yt, e + "-" + wt]);
  }, []),
      xt = [].concat(vt, [bt]).reduce(function (t, e) {
    return t.concat([e, e + "-" + yt, e + "-" + wt]);
  }, []),
      kt = "beforeRead",
      Lt = "read",
      St = "afterRead",
      Dt = "beforeMain",
      It = "main",
      Nt = "afterMain",
      Pt = "beforeWrite",
      Mt = "write",
      jt = "afterWrite",
      Ft = [kt, Lt, St, Dt, It, Nt, Pt, Mt, jt];

  function Ht(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }

  function $t(t) {
    if (null == t) return window;

    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }

    return t;
  }

  function Wt(t) {
    return t instanceof $t(t).Element || t instanceof Element;
  }

  function Bt(t) {
    return t instanceof $t(t).HTMLElement || t instanceof HTMLElement;
  }

  function zt(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof $t(t).ShadowRoot || t instanceof ShadowRoot);
  }

  var Rt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
            n = e.attributes[t] || {},
            s = e.elements[t];
        Bt(s) && Ht(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
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
          Bt(n) && Ht(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
            n.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };

  function qt(t) {
    return t.split("-")[0];
  }

  var Vt = Math.max,
      Kt = Math.min,
      Qt = Math.round;

  function Xt() {
    var t = navigator.userAgentData;
    return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map(function (t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }

  function Yt() {
    return !/^((?!chrome|android).)*safari/i.test(Xt());
  }

  function Ut(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(),
        s = 1,
        o = 1;
    e && Bt(t) && (s = t.offsetWidth > 0 && Qt(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && Qt(n.height) / t.offsetHeight || 1);
    var r = (Wt(t) ? $t(t) : window).visualViewport,
        a = !Yt() && i,
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

  function Gt(t) {
    var e = Ut(t),
        i = t.offsetWidth,
        n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    };
  }

  function Jt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;

    if (i && zt(i)) {
      var n = e;

      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }

    return !1;
  }

  function Zt(t) {
    return $t(t).getComputedStyle(t);
  }

  function te(t) {
    return ["table", "td", "th"].indexOf(Ht(t)) >= 0;
  }

  function ee(t) {
    return ((Wt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }

  function ie(t) {
    return "html" === Ht(t) ? t : t.assignedSlot || t.parentNode || (zt(t) ? t.host : null) || ee(t);
  }

  function ne(t) {
    return Bt(t) && "fixed" !== Zt(t).position ? t.offsetParent : null;
  }

  function se(t) {
    for (var e = $t(t), i = ne(t); i && te(i) && "static" === Zt(i).position;) {
      i = ne(i);
    }

    return i && ("html" === Ht(i) || "body" === Ht(i) && "static" === Zt(i).position) ? e : i || function (t) {
      var e = /firefox/i.test(Xt());
      if (/Trident/i.test(Xt()) && Bt(t) && "fixed" === Zt(t).position) return null;
      var i = ie(t);

      for (zt(i) && (i = i.host); Bt(i) && ["html", "body"].indexOf(Ht(i)) < 0;) {
        var n = Zt(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }

      return null;
    }(t) || e;
  }

  function oe(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }

  function re(t, e, i) {
    return Vt(t, Kt(e, i));
  }

  function ae(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }

  function le(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }

  var ce = {
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
          a = qt(i.placement),
          l = oe(a),
          c = [_t, gt].indexOf(a) >= 0 ? "height" : "width";

      if (o && r) {
        var h = function (t, e) {
          return ae("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
          })) : t) ? t : le(t, vt));
        }(s.padding, i),
            d = Gt(o),
            u = "y" === l ? pt : _t,
            f = "y" === l ? mt : gt,
            p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
            m = r[l] - i.rects.reference[l],
            g = se(o),
            _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
            b = p / 2 - m / 2,
            v = h[u],
            y = _ - d[c] - h[f],
            w = _ / 2 - d[c] / 2 + b,
            A = re(v, w, y),
            E = l;

        i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
          i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Jt(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  function he(t) {
    return t.split("-")[1];
  }

  var de = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function ue(t) {
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
        v = _t,
        y = pt,
        w = window;

    if (c) {
      var A = se(i),
          E = "clientHeight",
          T = "clientWidth";
      A === $t(i) && "static" !== Zt(A = ee(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === pt || (s === _t || s === gt) && o === wt) && (y = mt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== _t && (s !== pt && s !== mt || o !== wt) || (v = gt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1);
    }

    var C,
        O = Object.assign({
      position: a
    }, c && de),
        x = !0 === h ? function (t, e) {
      var i = t.x,
          n = t.y,
          s = e.devicePixelRatio || 1;
      return {
        x: Qt(i * s) / s || 0,
        y: Qt(n * s) / s || 0
      };
    }({
      x: f,
      y: m
    }, $t(i)) : {
      x: f,
      y: m
    };
    return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e));
  }

  var fe = {
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
        placement: qt(e.placement),
        variation: he(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: s,
        isFixed: "fixed" === e.options.strategy
      };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, ue(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, ue(Object.assign({}, c, {
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
  var pe = {
    passive: !0
  };
  var me = {
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
          l = $t(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, pe);
      }), a && l.addEventListener("resize", i.update, pe), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, pe);
        }), a && l.removeEventListener("resize", i.update, pe);
      };
    },
    data: {}
  };
  var ge = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function _e(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return ge[t];
    });
  }

  var be = {
    start: "end",
    end: "start"
  };

  function ve(t) {
    return t.replace(/start|end/g, function (t) {
      return be[t];
    });
  }

  function ye(t) {
    var e = $t(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function we(t) {
    return Ut(ee(t)).left + ye(t).scrollLeft;
  }

  function Ae(t) {
    var e = Zt(t),
        i = e.overflow,
        n = e.overflowX,
        s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }

  function Ee(t) {
    return ["html", "body", "#document"].indexOf(Ht(t)) >= 0 ? t.ownerDocument.body : Bt(t) && Ae(t) ? t : Ee(ie(t));
  }

  function Te(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Ee(t),
        s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = $t(n),
        r = s ? [o].concat(o.visualViewport || [], Ae(n) ? n : []) : n,
        a = e.concat(r);
    return s ? a : a.concat(Te(ie(r)));
  }

  function Ce(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }

  function Oe(t, e, i) {
    return e === Et ? Ce(function (t, e) {
      var i = $t(t),
          n = ee(t),
          s = i.visualViewport,
          o = n.clientWidth,
          r = n.clientHeight,
          a = 0,
          l = 0;

      if (s) {
        o = s.width, r = s.height;
        var c = Yt();
        (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop);
      }

      return {
        width: o,
        height: r,
        x: a + we(t),
        y: l
      };
    }(t, i)) : Wt(e) ? function (t, e) {
      var i = Ut(t, !1, "fixed" === e);
      return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i;
    }(e, i) : Ce(function (t) {
      var e,
          i = ee(t),
          n = ye(t),
          s = null == (e = t.ownerDocument) ? void 0 : e.body,
          o = Vt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
          r = Vt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
          a = -n.scrollLeft + we(t),
          l = -n.scrollTop;
      return "rtl" === Zt(s || i).direction && (a += Vt(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(ee(t)));
  }

  function xe(t) {
    var e,
        i = t.reference,
        n = t.element,
        s = t.placement,
        o = s ? qt(s) : null,
        r = s ? he(s) : null,
        a = i.x + i.width / 2 - n.width / 2,
        l = i.y + i.height / 2 - n.height / 2;

    switch (o) {
      case pt:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;

      case mt:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;

      case gt:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;

      case _t:
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

    var c = o ? oe(o) : null;

    if (null != c) {
      var h = "y" === c ? "height" : "width";

      switch (r) {
        case yt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;

        case wt:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }

    return e;
  }

  function ke(t, e) {
    void 0 === e && (e = {});

    var i = e,
        n = i.placement,
        s = void 0 === n ? t.placement : n,
        o = i.strategy,
        r = void 0 === o ? t.strategy : o,
        a = i.boundary,
        l = void 0 === a ? At : a,
        c = i.rootBoundary,
        h = void 0 === c ? Et : c,
        d = i.elementContext,
        u = void 0 === d ? Tt : d,
        f = i.altBoundary,
        p = void 0 !== f && f,
        m = i.padding,
        g = void 0 === m ? 0 : m,
        _ = ae("number" != typeof g ? g : le(g, vt)),
        b = u === Tt ? Ct : Tt,
        v = t.rects.popper,
        y = t.elements[p ? b : u],
        w = function (t, e, i, n) {
      var s = "clippingParents" === e ? function (t) {
        var e = Te(ie(t)),
            i = ["absolute", "fixed"].indexOf(Zt(t).position) >= 0 && Bt(t) ? se(t) : t;
        return Wt(i) ? e.filter(function (t) {
          return Wt(t) && Jt(t, i) && "body" !== Ht(t);
        }) : [];
      }(t) : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(function (e, i) {
        var s = Oe(t, i, n);
        return e.top = Vt(s.top, e.top), e.right = Kt(s.right, e.right), e.bottom = Kt(s.bottom, e.bottom), e.left = Vt(s.left, e.left), e;
      }, Oe(t, r, n));
      return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
    }(Wt(y) ? y : y.contextElement || ee(t.elements.popper), l, h, r),
        A = Ut(t.elements.reference),
        E = xe({
      reference: A,
      element: v,
      strategy: "absolute",
      placement: s
    }),
        T = Ce(Object.assign({}, v, E)),
        C = u === Tt ? T : A,
        O = {
      top: w.top - C.top + _.top,
      bottom: C.bottom - w.bottom + _.bottom,
      left: w.left - C.left + _.left,
      right: C.right - w.right + _.right
    },
        x = t.modifiersData.offset;

    if (u === Tt && x) {
      var k = x[s];
      Object.keys(O).forEach(function (t) {
        var e = [gt, mt].indexOf(t) >= 0 ? 1 : -1,
            i = [pt, mt].indexOf(t) >= 0 ? "y" : "x";
        O[t] += k[i] * e;
      });
    }

    return O;
  }

  function Le(t, e) {
    void 0 === e && (e = {});
    var i = e,
        n = i.placement,
        s = i.boundary,
        o = i.rootBoundary,
        r = i.padding,
        a = i.flipVariations,
        l = i.allowedAutoPlacements,
        c = void 0 === l ? xt : l,
        h = he(n),
        d = h ? a ? Ot : Ot.filter(function (t) {
      return he(t) === h;
    }) : vt,
        u = d.filter(function (t) {
      return c.indexOf(t) >= 0;
    });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return e[i] = ke(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[qt(i)], e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }

  var Se = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name;

      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = qt(g), b = l || (_ !== g && p ? function (t) {
          if (qt(t) === bt) return [];

          var e = _e(t);

          return [ve(t), e, ve(e)];
        }(g) : [_e(g)]), v = [g].concat(b).reduce(function (t, i) {
          return t.concat(qt(i) === bt ? Le(e, {
            placement: i,
            boundary: h,
            rootBoundary: d,
            padding: c,
            flipVariations: p,
            allowedAutoPlacements: m
          }) : i);
        }, []), y = e.rects.reference, w = e.rects.popper, A = new Map(), E = !0, T = v[0], C = 0; C < v.length; C++) {
          var O = v[C],
              x = qt(O),
              k = he(O) === yt,
              L = [pt, mt].indexOf(x) >= 0,
              S = L ? "width" : "height",
              D = ke(e, {
            placement: O,
            boundary: h,
            rootBoundary: d,
            altBoundary: u,
            padding: c
          }),
              I = L ? k ? gt : _t : k ? mt : pt;
          y[S] > w[S] && (I = _e(I));

          var N = _e(I),
              P = [];

          if (o && P.push(D[x] <= 0), a && P.push(D[I] <= 0, D[N] <= 0), P.every(function (t) {
            return t;
          })) {
            T = O, E = !1;
            break;
          }

          A.set(O, P);
        }

        if (E) for (var M = function M(t) {
          var e = v.find(function (e) {
            var i = A.get(e);
            if (i) return i.slice(0, t).every(function (t) {
              return t;
            });
          });
          if (e) return T = e, "break";
        }, j = p ? 3 : 1; j > 0 && "break" !== M(j); j--) {
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

  function De(t, e, i) {
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

  function Ie(t) {
    return [pt, gt, mt, _t].some(function (e) {
      return t[e] >= 0;
    });
  }

  var Ne = {
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
          r = ke(e, {
        elementContext: "reference"
      }),
          a = ke(e, {
        altBoundary: !0
      }),
          l = De(r, n),
          c = De(a, s, o),
          h = Ie(l),
          d = Ie(c);
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
      Pe = {
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
          r = xt.reduce(function (t, i) {
        return t[i] = function (t, e, i) {
          var n = qt(t),
              s = [_t, pt].indexOf(n) >= 0 ? -1 : 1,
              o = "function" == typeof i ? i(Object.assign({}, e, {
            placement: t
          })) : i,
              r = o[0],
              a = o[1];
          return r = r || 0, a = (a || 0) * s, [_t, gt].indexOf(n) >= 0 ? {
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
      Me = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(t) {
      var e = t.state,
          i = t.name;
      e.modifiersData[i] = xe({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
      });
    },
    data: {}
  },
      je = {
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
          g = ke(e, {
        boundary: l,
        rootBoundary: c,
        padding: d,
        altBoundary: h
      }),
          _ = qt(e.placement),
          b = he(e.placement),
          v = !b,
          y = oe(_),
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
              S = "y" === y ? pt : _t,
              D = "y" === y ? mt : gt,
              I = "y" === y ? "height" : "width",
              N = A[y],
              P = N + g[S],
              M = N - g[D],
              j = f ? -T[I] / 2 : 0,
              F = b === yt ? E[I] : T[I],
              H = b === yt ? -T[I] : -E[I],
              $ = e.elements.arrow,
              W = f && $ ? Gt($) : {
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
              q = re(0, E[I], W[I]),
              V = v ? E[I] / 2 - j - q - z - O.mainAxis : F - q - z - O.mainAxis,
              K = v ? -E[I] / 2 + j + q + R + O.mainAxis : H + q + R + O.mainAxis,
              Q = e.elements.arrow && se(e.elements.arrow),
              X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
              Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
              U = N + K - Y,
              G = re(f ? Kt(P, N + V - Y - X) : P, N, f ? Vt(M, U) : M);
          A[y] = G, k[y] = G - N;
        }

        if (a) {
          var J,
              Z = "x" === y ? pt : _t,
              tt = "x" === y ? mt : gt,
              et = A[w],
              it = "y" === w ? "height" : "width",
              nt = et + g[Z],
              st = et - g[tt],
              ot = -1 !== [pt, _t].indexOf(_),
              rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
              at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
              lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
              ct = f && ot ? function (t, e, i) {
            var n = re(t, e, i);
            return n > i ? i : n;
          }(at, et, lt) : re(f ? at : nt, et, f ? lt : st);
          A[w] = ct, k[w] = ct - et;
        }

        e.modifiersData[n] = k;
      }
    },
    requiresIfExists: ["offset"]
  };

  function Fe(t, e, i) {
    void 0 === i && (i = !1);

    var n,
        s,
        o = Bt(e),
        r = Bt(e) && function (t) {
      var e = t.getBoundingClientRect(),
          i = Qt(e.width) / t.offsetWidth || 1,
          n = Qt(e.height) / t.offsetHeight || 1;
      return 1 !== i || 1 !== n;
    }(e),
        a = ee(e),
        l = Ut(t, r, i),
        c = {
      scrollLeft: 0,
      scrollTop: 0
    },
        h = {
      x: 0,
      y: 0
    };

    return (o || !o && !i) && (("body" !== Ht(e) || Ae(a)) && (c = (n = e) !== $t(n) && Bt(n) ? {
      scrollLeft: (s = n).scrollLeft,
      scrollTop: s.scrollTop
    } : ye(n)), Bt(e) ? ((h = Ut(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = we(a))), {
      x: l.left + c.scrollLeft - h.x,
      y: l.top + c.scrollTop - h.y,
      width: l.width,
      height: l.height
    };
  }

  function He(t) {
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

  var $e = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function We() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }

  function Be(t) {
    void 0 === t && (t = {});
    var e = t,
        i = e.defaultModifiers,
        n = void 0 === i ? [] : i,
        s = e.defaultOptions,
        o = void 0 === s ? $e : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
          r,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, $e, o),
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
            reference: Wt(t) ? Te(t) : t.contextElement ? Te(t.contextElement) : [],
            popper: Te(e)
          };

          var r,
              c,
              u = function (t) {
            var e = He(t);
            return Ft.reduce(function (t, i) {
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

            if (We(e, i)) {
              a.rects = {
                reference: Fe(e, se(i), "fixed" === a.options.strategy),
                popper: Gt(i)
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
      if (!We(t, e)) return h;

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

  var ze = Be(),
      Re = Be({
    defaultModifiers: [me, Me, fe, Rt]
  }),
      qe = Be({
    defaultModifiers: [me, Me, fe, Rt, Pe, Se, je, ce, Ne]
  });
  var Ve = Object.freeze(Object.defineProperty({
    __proto__: null,
    afterMain: Nt,
    afterRead: St,
    afterWrite: jt,
    applyStyles: Rt,
    arrow: ce,
    auto: bt,
    basePlacements: vt,
    beforeMain: Dt,
    beforeRead: kt,
    beforeWrite: Pt,
    bottom: mt,
    clippingParents: At,
    computeStyles: fe,
    createPopper: qe,
    createPopperBase: ze,
    createPopperLite: Re,
    detectOverflow: ke,
    end: wt,
    eventListeners: me,
    flip: Se,
    hide: Ne,
    left: _t,
    main: It,
    modifierPhases: Ft,
    offset: Pe,
    placements: xt,
    popper: Tt,
    popperGenerator: Be,
    popperOffsets: Me,
    preventOverflow: je,
    read: Lt,
    reference: Ct,
    right: gt,
    start: yt,
    top: pt,
    variationPlacements: Ot,
    viewport: Et,
    write: Mt
  }, Symbol.toStringTag, {
    value: "Module"
  })),
      Ke = "dropdown",
      Qe = "ArrowUp",
      Xe = "ArrowDown",
      Ye = "click.bs.dropdown.data-api",
      Ue = "keydown.bs.dropdown.data-api",
      Ge = "show",
      Je = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      Ze = "".concat(Je, ".show"),
      ti = ".dropdown-menu",
      ei = p() ? "top-end" : "top-start",
      ii = p() ? "top-start" : "top-end",
      ni = p() ? "bottom-end" : "bottom-start",
      si = p() ? "bottom-start" : "bottom-end",
      oi = p() ? "left-start" : "right-start",
      ri = p() ? "right-start" : "left-start",
      ai = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  },
      li = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };

  var ci = /*#__PURE__*/function (_W5) {
    _inherits(ci, _W5);

    var _super7 = _createSuper(ci);

    function ci(t, e) {
      var _this15;

      _classCallCheck(this, ci);

      _this15 = _super7.call(this, t, e), _this15._popper = null, _this15._parent = _this15._element.parentNode, _this15._menu = z.next(_this15._element, ti)[0] || z.prev(_this15._element, ti)[0] || z.findOne(ti, _this15._parent), _this15._inNavbar = _this15._detectNavbar();
      return _this15;
    }

    _createClass(ci, [{
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

        if (!P.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
            var _ref4;

            var _iterator13 = _createForOfIteratorHelper((_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children))),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _t11 = _step13.value;
                P.on(_t11, "mouseover", h);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }

          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Ge), this._element.classList.add(Ge), P.trigger(this._element, "shown.bs.dropdown", t);
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
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(ci.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        if (!P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
          if ("ontouchstart" in document.documentElement) {
            var _ref5;

            var _iterator14 = _createForOfIteratorHelper((_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children))),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var _t12 = _step14.value;
                P.off(_t12, "mouseover", h);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }

          this._popper && this._popper.destroy(), this._menu.classList.remove(Ge), this._element.classList.remove(Ge), this._element.setAttribute("aria-expanded", "false"), H.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t);
        }
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("object" == _typeof((t = _get(_getPrototypeOf(ci.prototype), "_getConfig", this).call(this, t)).reference) && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("".concat(Ke.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        return t;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper() {
        if (void 0 === Ve) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        var t = this._element;
        "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == _typeof(this._config.reference) && (t = this._config.reference);

        var e = this._getPopperConfig();

        this._popper = qe(t, this._menu, e);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this._menu.classList.contains(Ge);
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._parent;
        if (t.classList.contains("dropend")) return oi;
        if (t.classList.contains("dropstart")) return ri;
        if (t.classList.contains("dropup-center")) return "top";
        if (t.classList.contains("dropdown-center")) return "bottom";
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? ii : ei : e ? si : ni;
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
        return (this._inNavbar || "static" === this._config.display) && (H.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
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
        i.length && b(i, e, t === Xe, !i.includes(e)).focus();
      }
    }], [{
      key: "Default",
      get: function get() {
        return ai;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return li;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Ke;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ci.getOrCreateInstance(this, t);

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
        var e = z.find(Ze);

        var _iterator15 = _createForOfIteratorHelper(e),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var _i15 = _step15.value;

            var _e10 = ci.getInstance(_i15);

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
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        var e = /input|textarea/i.test(t.target.tagName),
            i = "Escape" === t.key,
            n = [Qe, Xe].includes(t.key);
        if (!n && !i) return;
        if (e && !i) return;
        t.preventDefault();
        var s = this.matches(Je) ? this : z.prev(this, Je)[0] || z.next(this, Je)[0] || z.findOne(Je, t.delegateTarget.parentNode),
            o = ci.getOrCreateInstance(s);
        if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
        o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
      }
    }]);

    return ci;
  }(W);

  P.on(document, Ue, Je, ci.dataApiKeydownHandler), P.on(document, Ue, ti, ci.dataApiKeydownHandler), P.on(document, Ye, ci.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", ci.clearMenus), P.on(document, Ye, Je, function (t) {
    t.preventDefault(), ci.getOrCreateInstance(this).toggle();
  }), m(ci);
  var hi = "show",
      di = "mousedown.bs.backdrop",
      ui = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body"
  },
      fi = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };

  var pi = /*#__PURE__*/function (_$3) {
    _inherits(pi, _$3);

    var _super8 = _createSuper(pi);

    function pi(t) {
      var _this17;

      _classCallCheck(this, pi);

      _this17 = _super8.call(this), _this17._config = _this17._getConfig(t), _this17._isAppended = !1, _this17._element = null;
      return _this17;
    }

    _createClass(pi, [{
      key: "show",
      value: function show(t) {
        if (!this._config.isVisible) return void g(t);

        this._append();

        var e = this._getElement();

        this._config.isAnimated && d(e), e.classList.add(hi), this._emulateAnimation(function () {
          g(t);
        });
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this18 = this;

        this._config.isVisible ? (this._getElement().classList.remove(hi), this._emulateAnimation(function () {
          _this18.dispose(), g(t);
        })) : g(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (P.off(this._element, di), this._element.remove(), this._isAppended = !1);
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

        this._config.rootElement.append(t), P.on(t, di, function () {
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
        return ui;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return fi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "backdrop";
      }
    }]);

    return pi;
  }($);

  var mi = ".bs.focustrap",
      gi = "backward",
      _i = {
    autofocus: !0,
    trapElement: null
  },
      bi = {
    autofocus: "boolean",
    trapElement: "element"
  };

  var vi = /*#__PURE__*/function (_$4) {
    _inherits(vi, _$4);

    var _super9 = _createSuper(vi);

    function vi(t) {
      var _this20;

      _classCallCheck(this, vi);

      _this20 = _super9.call(this), _this20._config = _this20._getConfig(t), _this20._isActive = !1, _this20._lastTabNavDirection = null;
      return _this20;
    }

    _createClass(vi, [{
      key: "activate",
      value: function activate() {
        var _this21 = this;

        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P.off(document, mi), P.on(document, "focusin.bs.focustrap", function (t) {
          return _this21._handleFocusin(t);
        }), P.on(document, "keydown.tab.bs.focustrap", function (t) {
          return _this21._handleKeydown(t);
        }), this._isActive = !0);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._isActive && (this._isActive = !1, P.off(document, mi));
      }
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(t) {
        var e = this._config.trapElement;
        if (t.target === document || t.target === e || e.contains(t.target)) return;
        var i = z.focusableChildren(e);
        0 === i.length ? e.focus() : this._lastTabNavDirection === gi ? i[i.length - 1].focus() : i[0].focus();
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(t) {
        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? gi : "forward");
      }
    }], [{
      key: "Default",
      get: function get() {
        return _i;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return bi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "focustrap";
      }
    }]);

    return vi;
  }($);

  var yi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      wi = ".sticky-top",
      Ai = "padding-right",
      Ei = "margin-right";

  var Ti = /*#__PURE__*/function () {
    function Ti() {
      _classCallCheck(this, Ti);

      this._element = document.body;
    }

    _createClass(Ti, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, Ai, function (e) {
          return e + t;
        }), this._setElementAttributes(yi, Ai, function (e) {
          return e + t;
        }), this._setElementAttributes(wi, Ei, function (e) {
          return e - t;
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Ai), this._resetElementAttributes(yi, Ai), this._resetElementAttributes(wi, Ei);
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
        i && H.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = H.getDataAttribute(t, e);
          null !== i ? (H.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(t, e) {
        if (o(t)) e(t);else {
          var _iterator16 = _createForOfIteratorHelper(z.find(t, this._element)),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var _i16 = _step16.value;
              e(_i16);
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
        }
      }
    }]);

    return Ti;
  }();

  var Ci = ".bs.modal",
      Oi = "hidden.bs.modal",
      xi = "show.bs.modal",
      ki = "modal-open",
      Li = "show",
      Si = "modal-static",
      Di = {
    backdrop: !0,
    focus: !0,
    keyboard: !0
  },
      Ii = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };

  var Ni = /*#__PURE__*/function (_W6) {
    _inherits(Ni, _W6);

    var _super10 = _createSuper(Ni);

    function Ni(t, e) {
      var _this23;

      _classCallCheck(this, Ni);

      _this23 = _super10.call(this, t, e), _this23._dialog = z.findOne(".modal-dialog", _this23._element), _this23._backdrop = _this23._initializeBackDrop(), _this23._focustrap = _this23._initializeFocusTrap(), _this23._isShown = !1, _this23._isTransitioning = !1, _this23._scrollBar = new Ti(), _this23._addEventListeners();
      return _this23;
    }

    _createClass(Ni, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this24 = this;

        this._isShown || this._isTransitioning || P.trigger(this._element, xi, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(ki), this._adjustDialog(), this._backdrop.show(function () {
          return _this24._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this25 = this;

        this._isShown && !this._isTransitioning && (P.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Li), this._queueCallback(function () {
          return _this25._hideModal();
        }, this._element, this._isAnimated())));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        P.off(window, Ci), P.off(this._dialog, Ci), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Ni.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new pi({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new vi({
          trapElement: this._element
        });
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this26 = this;

        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        var e = z.findOne(".modal-body", this._dialog);
        e && (e.scrollTop = 0), d(this._element), this._element.classList.add(Li), this._queueCallback(function () {
          _this26._config.focus && _this26._focustrap.activate(), _this26._isTransitioning = !1, P.trigger(_this26._element, "shown.bs.modal", {
            relatedTarget: t
          });
        }, this._dialog, this._isAnimated());
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this27 = this;

        P.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          "Escape" === t.key && (_this27._config.keyboard ? _this27.hide() : _this27._triggerBackdropTransition());
        }), P.on(window, "resize.bs.modal", function () {
          _this27._isShown && !_this27._isTransitioning && _this27._adjustDialog();
        }), P.on(this._element, "mousedown.dismiss.bs.modal", function (t) {
          P.one(_this27._element, "click.dismiss.bs.modal", function (e) {
            _this27._element === t.target && _this27._element === e.target && ("static" !== _this27._config.backdrop ? _this27._config.backdrop && _this27.hide() : _this27._triggerBackdropTransition());
          });
        });
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this28 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove(ki), _this28._resetAdjustments(), _this28._scrollBar.reset(), P.trigger(_this28._element, Oi);
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

        if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._element.style.overflowY;
        "hidden" === e || this._element.classList.contains(Si) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(Si), this._queueCallback(function () {
          _this29._element.classList.remove(Si), _this29._queueCallback(function () {
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
        return Di;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ii;
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
          var i = Ni.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }]);

    return Ni;
  }(W);

  P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this30 = this;

    var e = z.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), P.one(e, xi, function (t) {
      t.defaultPrevented || P.one(e, Oi, function () {
        a(_this30) && _this30.focus();
      });
    });
    var i = z.findOne(".modal.show");
    i && Ni.getInstance(i).hide(), Ni.getOrCreateInstance(e).toggle(this);
  }), R(Ni), m(Ni);
  var Pi = "show",
      Mi = "showing",
      ji = "hiding",
      Fi = ".offcanvas.show",
      Hi = "hidePrevented.bs.offcanvas",
      $i = "hidden.bs.offcanvas",
      Wi = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      Bi = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var zi = /*#__PURE__*/function (_W7) {
    _inherits(zi, _W7);

    var _super11 = _createSuper(zi);

    function zi(t, e) {
      var _this31;

      _classCallCheck(this, zi);

      _this31 = _super11.call(this, t, e), _this31._isShown = !1, _this31._backdrop = _this31._initializeBackDrop(), _this31._focustrap = _this31._initializeFocusTrap(), _this31._addEventListeners();
      return _this31;
    }

    _createClass(zi, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this32 = this;

        this._isShown || P.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new Ti().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Mi), this._queueCallback(function () {
          _this32._config.scroll && !_this32._config.backdrop || _this32._focustrap.activate(), _this32._element.classList.add(Pi), _this32._element.classList.remove(Mi), P.trigger(_this32._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this33 = this;

        this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(ji), this._backdrop.hide(), this._queueCallback(function () {
          _this33._element.classList.remove(Pi, ji), _this33._element.removeAttribute("aria-modal"), _this33._element.removeAttribute("role"), _this33._config.scroll || new Ti().reset(), P.trigger(_this33._element, $i);
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(zi.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this34 = this;

        var t = Boolean(this._config.backdrop);
        return new pi({
          className: "offcanvas-backdrop",
          isVisible: t,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: t ? function () {
            "static" !== _this34._config.backdrop ? _this34.hide() : P.trigger(_this34._element, Hi);
          } : null
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new vi({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this35 = this;

        P.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          "Escape" === t.key && (_this35._config.keyboard ? _this35.hide() : P.trigger(_this35._element, Hi));
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return Wi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Bi;
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
          var e = zi.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return zi;
  }(W);

  P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this36 = this;

    var e = z.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
    P.one(e, $i, function () {
      a(_this36) && _this36.focus();
    });
    var i = z.findOne(Fi);
    i && i !== e && zi.getInstance(i).hide(), zi.getOrCreateInstance(e).toggle(this);
  }), P.on(window, "load.bs.offcanvas.data-api", function () {
    var _iterator17 = _createForOfIteratorHelper(z.find(Fi)),
        _step17;

    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var _t16 = _step17.value;
        zi.getOrCreateInstance(_t16).show();
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
  }), P.on(window, "resize.bs.offcanvas", function () {
    var _iterator18 = _createForOfIteratorHelper(z.find("[aria-modal][class*=show][class*=offcanvas-]")),
        _step18;

    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var _t17 = _step18.value;
        "fixed" !== getComputedStyle(_t17).position && zi.getOrCreateInstance(_t17).hide();
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
  }), R(zi), m(zi);

  var Ri = {
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
      qi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      Vi = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
      Ki = function Ki(t, e) {
    var i = t.nodeName.toLowerCase();
    return e.includes(i) ? !qi.has(i) || Boolean(Vi.test(t.nodeValue)) : e.filter(function (t) {
      return t instanceof RegExp;
    }).some(function (t) {
      return t.test(i);
    });
  },
      Qi = {
    allowList: Ri,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>"
  },
      Xi = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  },
      Yi = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };

  var Ui = /*#__PURE__*/function (_$5) {
    _inherits(Ui, _$5);

    var _super12 = _createSuper(Ui);

    function Ui(t) {
      var _this37;

      _classCallCheck(this, Ui);

      _this37 = _super12.call(this), _this37._config = _this37._getConfig(t);
      return _this37;
    }

    _createClass(Ui, [{
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

        for (var _i17 = 0, _Object$entries5 = Object.entries(this._config.content); _i17 < _Object$entries5.length; _i17++) {
          var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i17], 2),
              _e11 = _Object$entries5$_i[0],
              _i18 = _Object$entries5$_i[1];

          this._setContent(t, _i18, _e11);
        }

        var e = t.children[0],
            i = this._resolvePossibleFunction(this._config.extraClass);

        return i && (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(i.split(" "))), e;
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        _get(_getPrototypeOf(Ui.prototype), "_typeCheckConfig", this).call(this, t), this._checkContent(t.content);
      }
    }, {
      key: "_checkContent",
      value: function _checkContent(t) {
        for (var _i19 = 0, _Object$entries6 = Object.entries(t); _i19 < _Object$entries6.length; _i19++) {
          var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i19], 2),
              _e12 = _Object$entries6$_i[0],
              _i20 = _Object$entries6$_i[1];

          _get(_getPrototypeOf(Ui.prototype), "_typeCheckConfig", this).call(this, {
            selector: _e12,
            entry: _i20
          }, Yi);
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
        return this._config.sanitize ? function (t, e, i) {
          var _ref7;

          if (!t.length) return t;
          if (i && "function" == typeof i) return i(t);

          var n = new window.DOMParser().parseFromString(t, "text/html"),
              s = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(n.body.querySelectorAll("*")));

          var _iterator19 = _createForOfIteratorHelper(s),
              _step19;

          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var _ref8;

              var _t18 = _step19.value;

              var _i21 = _t18.nodeName.toLowerCase();

              if (!Object.keys(e).includes(_i21)) {
                _t18.remove();

                continue;
              }

              var _n7 = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(_t18.attributes)),
                  _s5 = [].concat(e["*"] || [], e[_i21] || []);

              var _iterator20 = _createForOfIteratorHelper(_n7),
                  _step20;

              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var _e13 = _step20.value;
                  Ki(_e13, _s5) || _t18.removeAttribute(_e13.nodeName);
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
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
        return Qi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Xi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "TemplateFactory";
      }
    }]);

    return Ui;
  }($);

  var Gi = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Ji = "fade",
      Zi = "show",
      tn = ".modal",
      en = "hide.bs.modal",
      nn = "hover",
      sn = "focus",
      on = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: p() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: p() ? "right" : "left"
  },
      rn = {
    allowList: Ri,
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
      an = {
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

  var ln = /*#__PURE__*/function (_W8) {
    _inherits(ln, _W8);

    var _super13 = _createSuper(ln);

    function ln(t, e) {
      var _this39;

      _classCallCheck(this, ln);

      if (void 0 === Ve) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this39 = _super13.call(this, t, e), _this39._isEnabled = !0, _this39._timeout = 0, _this39._isHovered = null, _this39._activeTrigger = {}, _this39._popper = null, _this39._templateFactory = null, _this39._newContent = null, _this39.tip = null, _this39._setListeners(), _this39._config.selector || _this39._fixTitle();
      return _this39;
    }

    _createClass(ln, [{
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
        clearTimeout(this._timeout), P.off(this._element.closest(tn), en, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), _get(_getPrototypeOf(ln.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this40 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;

        var t = P.trigger(this._element, this.constructor.eventName("show")),
            e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);

        if (t.defaultPrevented || !e) return;

        this._disposePopper();

        var i = this._getTipElement();

        this._element.setAttribute("aria-describedby", i.getAttribute("id"));

        var n = this._config.container;

        if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), P.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(Zi), "ontouchstart" in document.documentElement) {
          var _ref9;

          var _iterator21 = _createForOfIteratorHelper((_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children))),
              _step21;

          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var _t19 = _step21.value;
              P.on(_t19, "mouseover", h);
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }
        }

        this._queueCallback(function () {
          P.trigger(_this40._element, _this40.constructor.eventName("shown")), !1 === _this40._isHovered && _this40._leave(), _this40._isHovered = !1;
        }, this.tip, this._isAnimated());
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this41 = this;

        if (this._isShown() && !P.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
          if (this._getTipElement().classList.remove(Zi), "ontouchstart" in document.documentElement) {
            var _ref10;

            var _iterator22 = _createForOfIteratorHelper((_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children))),
                _step22;

            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var _t20 = _step22.value;
                P.off(_t20, "mouseover", h);
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
          }

          this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = null, this._queueCallback(function () {
            _this41._isWithActiveTrigger() || (_this41._isHovered || _this41._disposePopper(), _this41._element.removeAttribute("aria-describedby"), P.trigger(_this41._element, _this41.constructor.eventName("hidden")));
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
        e.classList.remove(Ji, Zi), e.classList.add("bs-".concat(this.constructor.NAME, "-auto"));

        var i = function (t) {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));

          return t;
        }(this.constructor.NAME).toString();

        return e.setAttribute("id", i), this._isAnimated() && e.classList.add(Ji), e;
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
      }
    }, {
      key: "_getTemplateFactory",
      value: function _getTemplateFactory(t) {
        return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Ui(_objectSpread(_objectSpread({}, this._config), {}, {
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
        return this._config.animation || this.tip && this.tip.classList.contains(Ji);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this.tip && this.tip.classList.contains(Zi);
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(t) {
        var e = g(this._config.placement, [this, t, this._element]),
            i = on[e.toUpperCase()];
        return qe(this._element, t, this._getPopperConfig(i));
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

        var _iterator23 = _createForOfIteratorHelper(t),
            _step23;

        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var _e14 = _step23.value;
            if ("click" === _e14) P.on(this._element, this.constructor.eventName("click"), this._config.selector, function (t) {
              _this44._initializeOnDelegatedTarget(t).toggle();
            });else if ("manual" !== _e14) {
              var _t21 = _e14 === nn ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                  _i22 = _e14 === nn ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");

              P.on(this._element, _t21, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);

                e._activeTrigger["focusin" === t.type ? sn : nn] = !0, e._enter();
              }), P.on(this._element, _i22, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);

                e._activeTrigger["focusout" === t.type ? sn : nn] = e._element.contains(t.relatedTarget), e._leave();
              });
            }
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }

        this._hideModalHandler = function () {
          _this44._element && _this44.hide();
        }, P.on(this._element.closest(tn), en, this._hideModalHandler);
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
        var e = H.getDataAttributes(this._element);

        for (var _i23 = 0, _Object$keys2 = Object.keys(e); _i23 < _Object$keys2.length; _i23++) {
          var _t22 = _Object$keys2[_i23];
          Gi.has(_t22) && delete e[_t22];
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

        for (var _i24 = 0, _Object$entries7 = Object.entries(this._config); _i24 < _Object$entries7.length; _i24++) {
          var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i24], 2),
              _e15 = _Object$entries7$_i[0],
              _i25 = _Object$entries7$_i[1];

          this.constructor.Default[_e15] !== _i25 && (t[_e15] = _i25);
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
        return rn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return an;
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
          var e = ln.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return ln;
  }(W);

  m(ln);

  var cn = _objectSpread(_objectSpread({}, ln.Default), {}, {
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  }),
      hn = _objectSpread(_objectSpread({}, ln.DefaultType), {}, {
    content: "(null|string|element|function)"
  });

  var dn = /*#__PURE__*/function (_ln) {
    _inherits(dn, _ln);

    var _super14 = _createSuper(dn);

    function dn() {
      _classCallCheck(this, dn);

      return _super14.apply(this, arguments);
    }

    _createClass(dn, [{
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
        return cn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return hn;
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
          var e = dn.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return dn;
  }(ln);

  m(dn);
  var un = "click.bs.scrollspy",
      fn = "active",
      pn = "[href]",
      mn = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null,
    threshold: [.1, .5, 1]
  },
      gn = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };

  var _n = /*#__PURE__*/function (_W9) {
    _inherits(_n, _W9);

    var _super15 = _createSuper(_n);

    function _n(t, e) {
      var _this47;

      _classCallCheck(this, _n);

      _this47 = _super15.call(this, t, e), _this47._targetLinks = new Map(), _this47._observableSections = new Map(), _this47._rootElement = "visible" === getComputedStyle(_this47._element).overflowY ? null : _this47._element, _this47._activeTarget = null, _this47._observer = null, _this47._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      }, _this47.refresh();
      return _this47;
    }

    _createClass(_n, [{
      key: "refresh",
      value: function refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();

        var _iterator24 = _createForOfIteratorHelper(this._observableSections.values()),
            _step24;

        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _t23 = _step24.value;

            this._observer.observe(_t23);
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._observer.disconnect(), _get(_getPrototypeOf(_n.prototype), "dispose", this).call(this);
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

        this._config.smoothScroll && (P.off(this._config.target, un), P.on(this._config.target, un, pn, function (t) {
          var e = _this48._observableSections.get(t.target.hash);

          if (e) {
            t.preventDefault();

            var _i26 = _this48._rootElement || window,
                _n8 = e.offsetTop - _this48._element.offsetTop;

            if (_i26.scrollTo) return void _i26.scrollTo({
              top: _n8,
              behavior: "smooth"
            });
            _i26.scrollTop = _n8;
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

        var _iterator25 = _createForOfIteratorHelper(t),
            _step25;

        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var _o4 = _step25.value;

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
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
      }
    }, {
      key: "_initializeTargetsAndObservables",
      value: function _initializeTargetsAndObservables() {
        this._targetLinks = new Map(), this._observableSections = new Map();
        var t = z.find(pn, this._config.target);

        var _iterator26 = _createForOfIteratorHelper(t),
            _step26;

        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var _e16 = _step26.value;
            if (!_e16.hash || l(_e16)) continue;

            var _t25 = z.findOne(decodeURI(_e16.hash), this._element);

            a(_t25) && (this._targetLinks.set(decodeURI(_e16.hash), _e16), this._observableSections.set(_e16.hash, _t25));
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }
      }
    }, {
      key: "_process",
      value: function _process(t) {
        this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(fn), this._activateParents(t), P.trigger(this._element, "activate.bs.scrollspy", {
          relatedTarget: t
        }));
      }
    }, {
      key: "_activateParents",
      value: function _activateParents(t) {
        if (t.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(fn);else {
          var _iterator27 = _createForOfIteratorHelper(z.parents(t, ".nav, .list-group")),
              _step27;

          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var _e17 = _step27.value;

              var _iterator28 = _createForOfIteratorHelper(z.prev(_e17, ".nav-link, .nav-item > .nav-link, .list-group-item")),
                  _step28;

              try {
                for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                  var _t26 = _step28.value;

                  _t26.classList.add(fn);
                }
              } catch (err) {
                _iterator28.e(err);
              } finally {
                _iterator28.f();
              }
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }
        }
      }
    }, {
      key: "_clearActiveClass",
      value: function _clearActiveClass(t) {
        t.classList.remove(fn);
        var e = z.find("[href].active", t);

        var _iterator29 = _createForOfIteratorHelper(e),
            _step29;

        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var _t27 = _step29.value;

            _t27.classList.remove(fn);
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return mn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return gn;
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
          var e = _n.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return _n;
  }(W);

  P.on(window, "load.bs.scrollspy.data-api", function () {
    var _iterator30 = _createForOfIteratorHelper(z.find('[data-bs-spy="scroll"]')),
        _step30;

    try {
      for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
        var _t28 = _step30.value;

        _n.getOrCreateInstance(_t28);
      }
    } catch (err) {
      _iterator30.e(err);
    } finally {
      _iterator30.f();
    }
  }), m(_n);
  var bn = "ArrowLeft",
      vn = "ArrowRight",
      yn = "ArrowUp",
      wn = "ArrowDown",
      An = "active",
      En = "fade",
      Tn = "show",
      Cn = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      On = ".nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role=\"tab\"]:not(.dropdown-toggle), ".concat(Cn);

  var xn = /*#__PURE__*/function (_W10) {
    _inherits(xn, _W10);

    var _super16 = _createSuper(xn);

    function xn(t) {
      var _this51;

      _classCallCheck(this, xn);

      _this51 = _super16.call(this, t), _this51._parent = _this51._element.closest('.list-group, .nav, [role="tablist"]'), _this51._parent && (_this51._setInitialAttributes(_this51._parent, _this51._getChildren()), P.on(_this51._element, "keydown.bs.tab", function (t) {
        return _this51._keydown(t);
      }));
      return _this51;
    }

    _createClass(xn, [{
      key: "show",
      value: function show() {
        var t = this._element;
        if (this._elemIsActive(t)) return;

        var e = this._getActiveElem(),
            i = e ? P.trigger(e, "hide.bs.tab", {
          relatedTarget: t
        }) : null;

        P.trigger(t, "show.bs.tab", {
          relatedTarget: e
        }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
      }
    }, {
      key: "_activate",
      value: function _activate(t, e) {
        var _this52 = this;

        t && (t.classList.add(An), this._activate(z.getElementFromSelector(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), _this52._toggleDropDown(t, !0), P.trigger(t, "shown.bs.tab", {
            relatedTarget: e
          })) : t.classList.add(Tn);
        }, t, t.classList.contains(En)));
      }
    }, {
      key: "_deactivate",
      value: function _deactivate(t, e) {
        var _this53 = this;

        t && (t.classList.remove(An), t.blur(), this._deactivate(z.getElementFromSelector(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), _this53._toggleDropDown(t, !1), P.trigger(t, "hidden.bs.tab", {
            relatedTarget: e
          })) : t.classList.remove(Tn);
        }, t, t.classList.contains(En)));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (![bn, vn, yn, wn].includes(t.key)) return;
        t.stopPropagation(), t.preventDefault();
        var e = [vn, wn].includes(t.key),
            i = b(this._getChildren().filter(function (t) {
          return !l(t);
        }), t.target, e, !0);
        i && (i.focus({
          preventScroll: !0
        }), xn.getOrCreateInstance(i).show());
      }
    }, {
      key: "_getChildren",
      value: function _getChildren() {
        return z.find(On, this._parent);
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

        var _iterator31 = _createForOfIteratorHelper(e),
            _step31;

        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var _t29 = _step31.value;

            this._setInitialAttributesOnChild(_t29);
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
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

        var n = function n(t, _n9) {
          var s = z.findOne(t, i);
          s && s.classList.toggle(_n9, e);
        };

        n(".dropdown-toggle", An), n(".dropdown-menu", Tn), i.setAttribute("aria-expanded", e);
      }
    }, {
      key: "_setAttributeIfNotExists",
      value: function _setAttributeIfNotExists(t, e, i) {
        t.hasAttribute(e) || t.setAttribute(e, i);
      }
    }, {
      key: "_elemIsActive",
      value: function _elemIsActive(t) {
        return t.classList.contains(An);
      }
    }, {
      key: "_getInnerElement",
      value: function _getInnerElement(t) {
        return t.matches(On) ? t : z.findOne(On, t);
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
          var e = xn.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return xn;
  }(W);

  P.on(document, "click.bs.tab", Cn, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || xn.getOrCreateInstance(this).show();
  }), P.on(window, "load.bs.tab", function () {
    var _iterator32 = _createForOfIteratorHelper(z.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')),
        _step32;

    try {
      for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
        var _t30 = _step32.value;
        xn.getOrCreateInstance(_t30);
      }
    } catch (err) {
      _iterator32.e(err);
    } finally {
      _iterator32.f();
    }
  }), m(xn);
  var kn = "hide",
      Ln = "show",
      Sn = "showing",
      Dn = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      In = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var Nn = /*#__PURE__*/function (_W11) {
    _inherits(Nn, _W11);

    var _super17 = _createSuper(Nn);

    function Nn(t, e) {
      var _this55;

      _classCallCheck(this, Nn);

      _this55 = _super17.call(this, t, e), _this55._timeout = null, _this55._hasMouseInteraction = !1, _this55._hasKeyboardInteraction = !1, _this55._setListeners();
      return _this55;
    }

    _createClass(Nn, [{
      key: "show",
      value: function show() {
        var _this56 = this;

        P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(kn), d(this._element), this._element.classList.add(Ln, Sn), this._queueCallback(function () {
          _this56._element.classList.remove(Sn), P.trigger(_this56._element, "shown.bs.toast"), _this56._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this57 = this;

        this.isShown() && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(Sn), this._queueCallback(function () {
          _this57._element.classList.add(kn), _this57._element.classList.remove(Sn, Ln), P.trigger(_this57._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(Ln), _get(_getPrototypeOf(Nn.prototype), "dispose", this).call(this);
      }
    }, {
      key: "isShown",
      value: function isShown() {
        return this._element.classList.contains(Ln);
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

        P.on(this._element, "mouseover.bs.toast", function (t) {
          return _this59._onInteraction(t, !0);
        }), P.on(this._element, "mouseout.bs.toast", function (t) {
          return _this59._onInteraction(t, !1);
        }), P.on(this._element, "focusin.bs.toast", function (t) {
          return _this59._onInteraction(t, !0);
        }), P.on(this._element, "focusout.bs.toast", function (t) {
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
        return In;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Dn;
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
          var e = Nn.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return Nn;
  }(W);

  return R(Nn), m(Nn), {
    Alert: q,
    Button: K,
    Carousel: rt,
    Collapse: ft,
    Dropdown: ci,
    Modal: Ni,
    Offcanvas: zi,
    Popover: dn,
    ScrollSpy: _n,
    Tab: xn,
    Toast: Nn,
    Tooltip: ln
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

    var _iterator33 = _createForOfIteratorHelper(i),
        _step33;

    try {
      for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
        var o = _step33.value;
        n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e);
      }
    } catch (err) {
      _iterator33.e(err);
    } finally {
      _iterator33.f();
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
        var _t31;

        if (!i) return t.push(e), t;
        e.matches(i) && t.push(e);
        var n = e.querySelectorAll(i);
        return t = (_t31 = t).concat.apply(_t31, _toConsumableArray(n));
      }, []);
    },
    debounceMethod: function debounceMethod(t, e, i) {
      i = i || 100;
      var n = t.prototype[e],
          o = e + "Timeout";

      t.prototype[e] = function () {
        var _this60 = this;

        clearTimeout(this[o]);
        var t = arguments;
        this[o] = setTimeout(function () {
          n.apply(_this60, t), delete _this60[o];
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
        var _i27 = o[t.infiniteScrollGUID];
        return _i27.option(e), _i27;
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

      for (var _t32 in s.create) {
        s.create[_t32].call(this);
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
      var _i28 = n.Event(e);

      _i28.type = t, s = _i28;
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
    var _this61 = this;

    this.getPath = function () {
      var e = _this61.pageIndex + 1;
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
      var _iterator34 = _createForOfIteratorHelper(a),
          _step34;

      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          var _e18 = _step34.value;

          var _i29 = t.match(_e18);

          if (_i29) {
            var _i30 = _slicedToArray(_i29, 4),
                _t33 = _i30[1],
                _e19 = _i30[2],
                _n10 = _i30[3];

            return {
              begin: _t33,
              index: _e19,
              end: _n10
            };
          }
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }
    }
  };

  r.updateGetPathSelector = function (t) {
    var _this62 = this;

    var e = document.querySelector(t);
    if (!e) return void console.error("Bad InfiniteScroll path option. Next link not found: ".concat(t));
    var i = e.getAttribute("href"),
        n = c(i);
    if (!n) return void console.error("InfiniteScroll unable to parse next link href: ".concat(i));
    var o = n.begin,
        s = n.index,
        r = n.end;
    this.isPathSelector = !0, this.getPath = function () {
      return o + (_this62.pageIndex + 1) + r;
    }, this.pageIndex = parseInt(s, 10) - 1, this.log("pageIndex", [this.pageIndex, "next link"]);
  }, r.updateGetAbsolutePath = function () {
    var _this63 = this;

    var t = this.getPath();
    if (t.match(/^http/) || t.match(/^\//)) return void (this.getAbsolutePath = this.getPath);
    var _location = location,
        e = _location.pathname,
        i = t.match(/^\?/),
        n = e.substring(0, e.lastIndexOf("/")),
        o = i ? e : n + "/";

    this.getAbsolutePath = function () {
      return o + _this63.getPath();
    };
  }, s.create.hideNav = function () {
    var t = i.getQueryElement(this.options.hideNav);
    t && (t.style.display = "none", this.nav = t);
  }, s.destroy.hideNav = function () {
    this.nav && (this.nav.style.display = "");
  }, r.destroy = function () {
    this.allOff();

    for (var _t34 in s.destroy) {
      s.destroy[_t34].call(this);
    }

    delete this.element.infiniteScrollGUID, delete o[this.guid], n && this.$element && n.removeData(this.element, "infiniteScroll");
  }, s.throttle = function (t, e) {
    var i, n;
    return e = e || 200, function () {
      var _this64 = this;

      var o = +new Date(),
          s = arguments,
          r = function r() {
        i = o, t.apply(_this64, s);
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
    var _this65 = this;

    if (this.isLoading || !this.canLoad) return;
    var _this$options = this.options,
        t = _this$options.responseBody,
        e = _this$options.domParseResponse,
        i = _this$options.fetchOptions,
        o = this.getAbsolutePath();
    this.isLoading = !0, "function" == typeof i && (i = i());
    var s = fetch(o, i).then(function (i) {
      if (!i.ok) {
        var _t35 = new Error(i.statusText);

        return _this65.onPageError(_t35, o, i), {
          response: i
        };
      }

      return i[t]().then(function (s) {
        return "text" == t && e && (s = n.parseFromString(s, "text/html")), 204 == i.status ? (_this65.lastPageReached(s, o), {
          body: s,
          response: i
        }) : _this65.onPageLoad(s, o, i);
      });
    })["catch"](function (t) {
      _this65.onPageError(t, o);
    });
    return this.dispatchEvent("request", null, [o, s]), s;
  }, i.onPageLoad = function (t, e, i) {
    return this.options.append || (this.isLoading = !1), this.pageIndex++, this.loadCount++, this.dispatchEvent("load", null, [t, e, i]), this.appendNextPage(t, e, i);
  }, i.appendNextPage = function (t, e, i) {
    var _this66 = this;

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
      return _this66.appendItems(l, a), _this66.isLoading = !1, _this66.dispatchEvent("append", null, [t, e, l, i]), h;
    };

    return this.options.outlayer ? this.appendOutlayerItems(a, c) : c();
  }, i.appendItems = function (t, e) {
    t && t.length && (function (t) {
      var e = t.querySelectorAll("script");

      var _iterator35 = _createForOfIteratorHelper(e),
          _step35;

      try {
        for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
          var _t36 = _step35.value;

          var _e20 = document.createElement("script"),
              _i31 = _t36.attributes;

          var _iterator36 = _createForOfIteratorHelper(_i31),
              _step36;

          try {
            for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
              var _t37 = _step36.value;

              _e20.setAttribute(_t37.name, _t37.value);
            }
          } catch (err) {
            _iterator36.e(err);
          } finally {
            _iterator36.f();
          }

          _e20.innerHTML = _t36.innerHTML, _t36.parentNode.replaceChild(_e20, _t36);
        }
      } catch (err) {
        _iterator35.e(err);
      } finally {
        _iterator35.f();
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

    var _iterator37 = _createForOfIteratorHelper(this.scrollPages),
        _step37;

    try {
      for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
        var _t38 = _step37.value;
        if (_t38.top >= e) break;
        i = _t38;
      }
    } catch (err) {
      _iterator37.e(err);
    } finally {
      _iterator37.f();
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
    for (var _t39 in this.statusEventElements) {
      o(this.statusEventElements[_t39]);
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

    var _super18 = _createSuper(n);

    function n(e) {
      var _this67;

      _classCallCheck(this, n);

      _this67 = _super18.call.apply(_super18, [this].concat(_toConsumableArray(e || []))), function (e) {
        var t = e.__proto__;
        Object.defineProperty(e, "__proto__", {
          get: function get() {
            return t;
          },
          set: function set(e) {
            t.__proto__ = e;
          }
        });
      }(_assertThisInitialized(_this67));
      return _this67;
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
      var _s6 = e.trim();

      if (_s6.indexOf("<") >= 0 && _s6.indexOf(">") >= 0) {
        var _e21 = "div";
        0 === _s6.indexOf("<li") && (_e21 = "ul"), 0 === _s6.indexOf("<tr") && (_e21 = "tbody"), 0 !== _s6.indexOf("<td") && 0 !== _s6.indexOf("<th") || (_e21 = "tr"), 0 === _s6.indexOf("<tbody") && (_e21 = "table"), 0 === _s6.indexOf("<option") && (_e21 = "select");

        var _t40 = i.createElement(_e21);

        _t40.innerHTML = _s6;

        for (var _e22 = 0; _e22 < _t40.childNodes.length; _e22 += 1) {
          l.push(_t40.childNodes[_e22]);
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

      for (var _s7 = 0; _s7 < e.length; _s7 += 1) {
        -1 === t.indexOf(e[_s7]) && t.push(e[_s7]);
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

      for (var _s8 = 0; _s8 < this.length; _s8 += 1) {
        if (2 === arguments.length) this[_s8].setAttribute(e, t);else for (var _t41 in e) {
          this[_s8][_t41] = e[_t41], this[_s8].setAttribute(_t41, e[_t41]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var _t42 = 0; _t42 < this.length; _t42 += 1) {
        this[_t42].removeAttribute(e);
      }

      return this;
    },
    transform: function transform(e) {
      for (var _t43 = 0; _t43 < this.length; _t43 += 1) {
        this[_t43].style.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      for (var _t44 = 0; _t44 < this.length; _t44 += 1) {
        this[_t44].style.transitionDuration = "string" != typeof e ? "".concat(e, "ms") : e;
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

          for (var _t45 = 0; _t45 < _e24.length; _t45 += 1) {
            d(_e24[_t45]).is(s) && a.apply(_e24[_t45], i);
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
        var _t46 = this[_e27];
        if (s) for (o = 0; o < l.length; o += 1) {
          var _e28 = l[o];
          _t46.dom7LiveListeners || (_t46.dom7LiveListeners = {}), _t46.dom7LiveListeners[_e28] || (_t46.dom7LiveListeners[_e28] = []), _t46.dom7LiveListeners[_e28].push({
            listener: a,
            proxyListener: r
          }), _t46.addEventListener(_e28, r, i);
        } else for (o = 0; o < l.length; o += 1) {
          var _e29 = l[o];
          _t46.dom7Listeners || (_t46.dom7Listeners = {}), _t46.dom7Listeners[_e29] || (_t46.dom7Listeners[_e29] = []), _t46.dom7Listeners[_e29].push({
            listener: a,
            proxyListener: n
          }), _t46.addEventListener(_e29, n, i);
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
        var _t47 = r[_e32];

        for (var _e33 = 0; _e33 < this.length; _e33 += 1) {
          var _r6 = this[_e33];

          var _n11 = void 0;

          if (!s && _r6.dom7Listeners ? _n11 = _r6.dom7Listeners[_t47] : s && _r6.dom7LiveListeners && (_n11 = _r6.dom7LiveListeners[_t47]), _n11 && _n11.length) for (var _e34 = _n11.length - 1; _e34 >= 0; _e34 -= 1) {
            var _s9 = _n11[_e34];
            a && _s9.listener === a || a && _s9.listener && _s9.listener.dom7proxy && _s9.listener.dom7proxy === a ? (_r6.removeEventListener(_t47, _s9.proxyListener, i), _n11.splice(_e34, 1)) : a || (_r6.removeEventListener(_t47, _s9.proxyListener, i), _n11.splice(_e34, 1));
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

      for (var _i32 = 0; _i32 < s.length; _i32 += 1) {
        var _r7 = s[_i32];

        for (var _s10 = 0; _s10 < this.length; _s10 += 1) {
          var _i33 = this[_s10];

          if (t.CustomEvent) {
            var _s11 = new t.CustomEvent(_r7, {
              detail: a,
              bubbles: !0,
              cancelable: !0
            });

            _i33.dom7EventData = e.filter(function (e, t) {
              return t > 0;
            }), _i33.dispatchEvent(_s11), _i33.dom7EventData = [], delete _i33.dom7EventData;
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
            _t48 = a(),
            _s12 = this[0],
            _i34 = _s12.getBoundingClientRect(),
            _n12 = _t48.body,
            _l = _s12.clientTop || _n12.clientTop || 0,
            _o5 = _s12.clientLeft || _n12.clientLeft || 0,
            _d2 = _s12 === _e37 ? _e37.scrollY : _s12.scrollTop,
            _c = _s12 === _e37 ? _e37.scrollX : _s12.scrollLeft;

        return {
          top: _i34.top + _d2 - _l,
          left: _i34.left + _c - _o5
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
            for (var _t49 in e) {
              this[a].style[_t49] = e[_t49];
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

      for (var _t50 = 0; _t50 < this.length; _t50 += 1) {
        this[_t50].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var _t51 = 0; _t51 < this.length; _t51 += 1) {
        this[_t51].textContent = e;
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
        var _s13 = t + e;

        return d(_s13 < 0 ? [] : [this[_s13]]);
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
          } else if (t instanceof n) for (var _s14 = 0; _s14 < t.length; _s14 += 1) {
            this[_e38].appendChild(t[_s14]);
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
        var _t52 = this[0];
        return e ? _t52.previousElementSibling && d(_t52.previousElementSibling).is(e) ? d([_t52.previousElementSibling]) : d([]) : _t52.previousElementSibling ? d([_t52.previousElementSibling]) : d([]);
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

      for (var _s15 = 0; _s15 < this.length; _s15 += 1) {
        null !== this[_s15].parentNode && (e ? d(this[_s15].parentNode).is(e) && t.push(this[_s15].parentNode) : t.push(this[_s15].parentNode));
      }

      return d(t);
    },
    parents: function parents(e) {
      var t = [];

      for (var _s16 = 0; _s16 < this.length; _s16 += 1) {
        var _a7 = this[_s16].parentNode;

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

      for (var _s17 = 0; _s17 < this.length; _s17 += 1) {
        var _a8 = this[_s17].querySelectorAll(e);

        for (var _e39 = 0; _e39 < _a8.length; _e39 += 1) {
          t.push(_a8[_e39]);
        }
      }

      return d(t);
    },
    children: function children(e) {
      var t = [];

      for (var _s18 = 0; _s18 < this.length; _s18 += 1) {
        var _a9 = this[_s18].children;

        for (var _s19 = 0; _s19 < _a9.length; _s19 += 1) {
          e && !d(_a9[_s19]).is(e) || t.push(_a9[_s19]);
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

    for (var _i35 = 1; _i35 < arguments.length; _i35 += 1) {
      var _r8 = _i35 < 0 || arguments.length <= _i35 ? undefined : arguments[_i35];

      if (null != _r8 && (a = _r8, !("undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)))) {
        var _e41 = Object.keys(Object(_r8)).filter(function (e) {
          return s.indexOf(e) < 0;
        });

        for (var _s20 = 0, _a10 = _e41.length; _s20 < _a10; _s20 += 1) {
          var _a11 = _e41[_s20],
              _i36 = Object.getOwnPropertyDescriptor(_r8, _a11);

          void 0 !== _i36 && _i36.enumerable && (m(t[_a11]) && m(_r8[_a11]) ? _r8[_a11].__swiper__ ? t[_a11] = _r8[_a11] : f(t[_a11], _r8[_a11]) : !m(t[_a11]) && m(_r8[_a11]) ? (t[_a11] = {}, _r8[_a11].__swiper__ ? t[_a11] = _r8[_a11] : f(t[_a11], _r8[_a11])) : t[_a11] = _r8[_a11]);
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
            var _s21 = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });

            e.addEventListener("testPassiveListener", null, _s21);
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
      var _t53 = _e44 < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

      void 0 !== n[_e44 + _t53] ? h >= n[_e44] && h < n[_e44 + _t53] && (m = _e44, f = n[_e44 + _t53] - n[_e44]) : h >= n[_e44] && (m = _e44, f = n[n.length - 1] - n[n.length - 2]);
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
      var _t54 = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
        passive: !0,
        capture: !1
      };

      n[p](r.start, e.onTouchStart, _t54), n[p](r.move, e.onTouchMove, d.passiveListener ? {
        passive: !1,
        capture: c
      } : c), n[p](r.end, e.onTouchEnd, _t54), r.cancel && n[p](r.cancel, e.onTouchEnd, _t54);
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

        for (var _i37 = 0; _i37 < p; _i37 += 1) {
          $ = 0;

          var _n13 = c.eq(_i37);

          if (C && e.grid.updateSlide(_i37, _n13, p, t), "none" !== _n13.css("display")) {
            if ("auto" === a.slidesPerView) {
              S && (c[_i37].style[t("width")] = "");

              var _r9 = getComputedStyle(_n13[0]),
                  _l2 = _n13[0].style.transform,
                  _o6 = _n13[0].style.webkitTransform;

              if (_l2 && (_n13[0].style.transform = "none"), _o6 && (_n13[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? _n13.outerWidth(!0) : _n13.outerHeight(!0);else {
                var _e45 = s(_r9, "width"),
                    _t55 = s(_r9, "padding-left"),
                    _a13 = s(_r9, "padding-right"),
                    _i38 = s(_r9, "margin-left"),
                    _l3 = s(_r9, "margin-right"),
                    _o7 = _r9.getPropertyValue("box-sizing");

                if (_o7 && "border-box" === _o7) $ = _e45 + _i38 + _l3;else {
                  var _n13$ = _n13[0],
                      _s22 = _n13$.clientWidth,
                      _r10 = _n13$.offsetWidth;
                  $ = _e45 + _t55 + _a13 + _i38 + _l3 + (_r10 - _s22);
                }
              }
              _l2 && (_n13[0].style.transform = _l2), _o6 && (_n13[0].style.webkitTransform = _o6), a.roundLengths && ($ = Math.floor($));
            } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[_i37] && (c[_i37].style[t("width")] = "".concat($, "px"));

            c[_i37] && (c[_i37].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== _i37 && (y = y - r / 2 - x), 0 === _i37 && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), T % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, T += 1;
          }
        }

        if (e.virtualSize = Math.max(e.virtualSize, r) + v, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
          width: "".concat(e.virtualSize + a.spaceBetween, "px")
        }), a.setWrapperSize && i.css(_defineProperty({}, t("width"), "".concat(e.virtualSize + a.spaceBetween, "px"))), C && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
          var _t56 = [];

          for (var _s23 = 0; _s23 < u.length; _s23 += 1) {
            var _i39 = u[_s23];
            a.roundLengths && (_i39 = Math.floor(_i39)), u[_s23] <= e.virtualSize - r && _t56.push(_i39);
          }

          u = _t56, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
        }

        if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
          var _s24 = e.isHorizontal() && n ? "marginLeft" : t("marginRight");

          c.filter(function (e, t) {
            return !a.cssMode || t !== c.length - 1;
          }).css(_defineProperty({}, _s24, "".concat(x, "px")));
        }

        if (a.centeredSlides && a.centeredSlidesBounds) {
          var _e46 = 0;
          m.forEach(function (t) {
            _e46 += t + (a.spaceBetween ? a.spaceBetween : 0);
          }), _e46 -= a.spaceBetween;

          var _t57 = _e46 - r;

          u = u.map(function (e) {
            return e < 0 ? -f : e > _t57 ? _t57 + v : e;
          });
        }

        if (a.centerInsufficientSlides) {
          var _e47 = 0;

          if (m.forEach(function (t) {
            _e47 += t + (a.spaceBetween ? a.spaceBetween : 0);
          }), _e47 -= a.spaceBetween, _e47 < r) {
            var _t58 = (r - _e47) / 2;

            u.forEach(function (e, s) {
              u[s] = e - _t58;
            }), h.forEach(function (e, s) {
              h[s] = e + _t58;
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

          var _t59 = -e.snapGrid[0],
              _s25 = -e.slidesGrid[0];

          e.snapGrid = e.snapGrid.map(function (e) {
            return e + _t59;
          }), e.slidesGrid = e.slidesGrid.map(function (e) {
            return e + _s25;
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

        for (var _s26 = 0; _s26 < t.length; _s26 += 1) {
          t[_s26].swiperSlideOffset = e.isHorizontal() ? t[_s26].offsetLeft : t[_s26].offsetTop;
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
          var _n14 = a[_e50];
          var _l4 = _n14.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (_l4 -= a[0].swiperSlideOffset);

          var _o8 = (r + (s.centeredSlides ? t.minTranslate() : 0) - _l4) / (_n14.swiperSlideSize + s.spaceBetween),
              _d3 = -(r - _l4),
              _c2 = _d3 + t.slidesSizesGrid[_e50];

          (_d3 >= 0 && _d3 < t.size - 1 || _c2 > 1 && _c2 <= t.size || _d3 <= 0 && _c2 >= t.size) && (t.visibleSlides.push(_n14), t.visibleSlidesIndexes.push(_e50), a.eq(_e50).addClass(s.slideVisibleClass)), _n14.progress = i ? -_o8 : _o8;
        }

        t.visibleSlides = d(t.visibleSlides);
      },
      updateProgress: function updateProgress(e) {
        var t = this;

        if (void 0 === e) {
          var _s27 = t.rtlTranslate ? -1 : 1;

          e = t && t.translate && t.translate * _s27 || 0;
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
          var _t60 = parseInt(e, 10);

          if (!isFinite(_t60)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
          e = _t60;
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
          var _t61 = -Math.floor(100 * w),
              _s28 = Math.floor(100 * d[_e55]),
              _a14 = Math.floor(100 * d[_e55 + 1]);

          void 0 !== d[_e55 + 1] ? _t61 >= _s28 && _t61 < _a14 - (_a14 - _s28) / 2 ? n = _e55 : _t61 >= _s28 && _t61 < _a14 && (n = _e55 + 1) : _t61 >= _s28 && (n = _e55);
        }

        if (r.initialized && n !== p) {
          if (!r.allowSlideNext && w < r.translate && w < r.minTranslate()) return !1;
          if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1;
        }

        var b;
        if (b = n > p ? "next" : n < p ? "prev" : "reset", u && -w === r.translate || !u && w === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;

        if (l.cssMode) {
          var _e56 = r.isHorizontal(),
              _s29 = u ? w : -w;

          if (0 === t) {
            var _t62 = r.virtual && r.params.virtual.enabled;

            _t62 && (r.wrapperEl.style.scrollSnapType = "none"), h[_e56 ? "scrollLeft" : "scrollTop"] = _s29, _t62 && requestAnimationFrame(function () {
              r.wrapperEl.style.scrollSnapType = "";
            });
          } else {
            var _h$scrollTo;

            if (!r.support.smoothScroll) return v({
              swiper: r,
              targetPosition: _s29,
              side: _e56 ? "left" : "top"
            }), !0;
            h.scrollTo((_h$scrollTo = {}, _defineProperty(_h$scrollTo, _e56 ? "left" : "top", _s29), _defineProperty(_h$scrollTo, "behavior", "smooth"), _h$scrollTo));
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
            var _t63 = parseFloat(e.substr(1));

            return {
              value: n * _t63,
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
              _r11 = _l$_e.point,
              _n15 = _l$_e.value;
          "window" === t ? i.matchMedia("(min-width: ".concat(_n15, "px)")).matches && (a = _r11) : _n15 <= s.clientWidth && (a = _r11);
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
          var _t64 = e.slides.length - 1,
              _s30 = e.slidesGrid[_t64] + e.slidesSizesGrid[_t64] + 2 * a;

          e.isLocked = e.size > _s30;
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

        for (var _s31 = 0; _s31 < e.imagesToLoad.length; _s31 += 1) {
          var _a16 = e.imagesToLoad[_s31];
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
              _t65 = a[l].swiperSlideSize;

          for (var _s32 = l + 1; _s32 < a.length; _s32 += 1) {
            a[_s32] && !_e68 && (_t65 += a[_s32].swiperSlideSize, o += 1, _t65 > n && (_e68 = !0));
          }

          for (var _s33 = l - 1; _s33 >= 0; _s33 -= 1) {
            a[_s33] && !_e68 && (_t65 += a[_s33].swiperSlideSize, o += 1, _t65 > n && (_e68 = !0));
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
            var _t66 = d(e.shadowRoot.querySelector(i()));

            return _t66.children = function (e) {
              return s.children(e);
            }, _t66;
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
        var _n16 = e.$el.children(".".concat(i[a]))[0];
        _n16 || (_n16 = r.createElement("div"), _n16.className = i[a], e.$el.append(_n16)), s[a] = _n16, t[a] = _n16;
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
    if (a.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var _t67 = 0; _t67 < e.length; _t67 += 1) {
      e[_t67] && s.append(e[_t67]);
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
      for (var _t68 = 0; _t68 < e.length; _t68 += 1) {
        e[_t68] && a.prepend(e[_t68]);
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

    for (var _t69 = l - 1; _t69 >= e; _t69 -= 1) {
      var _e72 = s.slides.eq(_t69);

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
      for (var _s34 = 0; _s34 < e.length; _s34 += 1) {
        n = e[_s34], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
      }

      l = Math.max(l, 0);
    } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);

    s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }

  function q() {
    var e = this,
        t = [];

    for (var _s35 = 0; _s35 < e.slides.length; _s35 += 1) {
      t.push(_s35);
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
      var _t70,
          _l5 = !1;

      _t70 = a ? s ? i.find(s) : i : s ? i.eq(r).find(s) : i.eq(r), _t70.transitionEnd(function () {
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
          var _t71 = e.$el.parents();

          for (var _e76 = 0; _e76 < _t71.length; _e76 += 1) {
            l(_t71[_e76]);
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

          for (var _t72 = v; _t72 <= w; _t72 += 1) {
            e.push(c[_t72]);
          }

          return e;
        }()
      }), void (e.params.virtual.renderExternalUpdate && x());
      var y = [],
          E = [];
      if (t) e.$wrapperEl.find(".".concat(e.params.slideClass)).remove();else for (var _t73 = o; _t73 <= d; _t73 += 1) {
        (_t73 < v || _t73 > w) && e.$wrapperEl.find(".".concat(e.params.slideClass, "[data-swiper-slide-index=\"").concat(_t73, "\"]")).remove();
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
        if ("object" == _typeof(t) && "length" in t) for (var _s36 = 0; _s36 < t.length; _s36 += 1) {
          t[_s36] && e.virtual.slides.push(t[_s36]);
        } else e.virtual.slides.push(t);
        i(!0);
      },
      prependSlide: function prependSlide(t) {
        var s = e.activeIndex;
        var a = s + 1,
            r = 1;

        if (Array.isArray(t)) {
          for (var _s37 = 0; _s37 < t.length; _s37 += 1) {
            t[_s37] && e.virtual.slides.unshift(t[_s37]);
          }

          a = s + t.length, r = t.length;
        } else e.virtual.slides.unshift(t);

        if (e.params.virtual.cache) {
          var _t74 = e.virtual.cache,
              _s38 = {};
          Object.keys(_t74).forEach(function (e) {
            var a = _t74[e],
                i = a.attr("data-swiper-slide-index");
            i && a.attr("data-swiper-slide-index", parseInt(i, 10) + 1), _s38[parseInt(e, 10) + r] = a;
          }), e.virtual.cache = _s38;
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
          var _t75 = !1;

          if (e.$el.parents(".".concat(e.params.slideClass)).length > 0 && 0 === e.$el.parents(".".concat(e.params.slideActiveClass)).length) return;

          var _a18 = e.$el,
              _i40 = _a18[0].clientWidth,
              _r12 = _a18[0].clientHeight,
              _n17 = l.innerWidth,
              _o9 = l.innerHeight,
              _d4 = e.$el.offset();

          s && (_d4.left -= e.$el[0].scrollLeft);
          var _c3 = [[_d4.left, _d4.top], [_d4.left + _i40, _d4.top], [_d4.left, _d4.top + _r12], [_d4.left + _i40, _d4.top + _r12]];

          for (var _e78 = 0; _e78 < _c3.length; _e78 += 1) {
            var _s39 = _c3[_e78];

            if (_s39[0] >= 0 && _s39[0] <= _n17 && _s39[1] >= 0 && _s39[1] <= _o9) {
              if (0 === _s39[0] && 0 === _s39[1]) continue;
              _t75 = !0;
            }
          }

          if (!_t75) return;
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
        var _t76 = {
          time: u(),
          delta: Math.abs(h),
          direction: Math.sign(h)
        },
            _i41 = l && _t76.time < l.time + 500 && _t76.delta <= l.delta && _t76.direction === l.direction;

        if (!_i41) {
          l = void 0, e.params.loop && e.loopFix();

          var _o10 = e.getTranslate() + h * r.sensitivity;

          var _d5 = e.isBeginning,
              _u = e.isEnd;

          if (_o10 >= e.minTranslate() && (_o10 = e.minTranslate()), _o10 <= e.maxTranslate() && (_o10 = e.maxTranslate()), e.setTransition(0), e.setTranslate(_o10), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!_d5 && e.isBeginning || !_u && e.isEnd) && e.updateSlidesClasses(), e.params.freeMode.sticky) {
            clearTimeout(n), n = void 0, c.length >= 15 && c.shift();

            var _s40 = c.length ? c[c.length - 1] : void 0,
                _a19 = c[0];

            if (c.push(_t76), _s40 && (_t76.delta > _s40.delta || _t76.direction !== _s40.direction)) c.splice(0);else if (c.length >= 15 && _t76.time - _a19.time < 500 && _a19.delta - _t76.delta >= 1 && _t76.delta <= 6) {
              var _s41 = h > 0 ? .8 : .2;

              l = _t76, c.splice(0), n = p(function () {
                e.slideToClosest(e.params.speed, !0, void 0, _s41);
              }, 0);
            }
            n || (n = p(function () {
              l = _t76, c.splice(0), e.slideToClosest(e.params.speed, !0, void 0, .5);
            }, 500));
          }

          if (_i41 || a("scroll", s), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), _o10 === e.minTranslate() || _o10 === e.maxTranslate()) return !0;
        }
      } else {
        var _s42 = {
          time: u(),
          delta: Math.abs(h),
          direction: Math.sign(h),
          raw: t
        };
        c.length >= 2 && c.shift();

        var _a20 = c.length ? c[c.length - 1] : void 0;

        if (c.push(_s42), _a20 ? (_s42.direction !== _a20.direction || _s42.delta > _a20.delta || _s42.time > _a20.time + 150) && f(_s42) : f(_s42), function (t) {
          var s = e.params.mousewheel;

          if (t.direction < 0) {
            if (e.isEnd && !e.params.loop && s.releaseOnEdges) return !0;
          } else if (e.isBeginning && !e.params.loop && s.releaseOnEdges) return !0;

          return !1;
        }(_s42)) return !0;
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

        var _t77;

        i ? _t77 = i.hasClass(e.params.navigation.hiddenClass) : r && (_t77 = r.hasClass(e.params.navigation.hiddenClass)), a(!0 === _t77 ? "navigationShow" : "navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass);
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

        var _i42, _l6, _u2;

        if (s.dynamicBullets && (r = _a21.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), c.css(e.isHorizontal() ? "width" : "height", r * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (n += p - e.previousIndex, n > s.dynamicMainBullets - 1 ? n = s.dynamicMainBullets - 1 : n < 0 && (n = 0)), _i42 = p - n, _l6 = _i42 + (Math.min(_a21.length, s.dynamicMainBullets) - 1), _u2 = (_l6 + _i42) / 2), _a21.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(function (e) {
          return "".concat(s.bulletActiveClass).concat(e);
        }).join(" ")), c.length > 1) _a21.each(function (e) {
          var t = d(e),
              a = t.index();
          a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= _i42 && a <= _l6 && t.addClass("".concat(s.bulletActiveClass, "-main")), a === _i42 && o(t, "prev"), a === _l6 && o(t, "next"));
        });else {
          var _t78 = _a21.eq(p),
              _r13 = _t78.index();

          if (_t78.addClass(s.bulletActiveClass), s.dynamicBullets) {
            var _t79 = _a21.eq(_i42),
                _n18 = _a21.eq(_l6);

            for (var _e79 = _i42; _e79 <= _l6; _e79 += 1) {
              _a21.eq(_e79).addClass("".concat(s.bulletActiveClass, "-main"));
            }

            if (e.params.loop) {
              if (_r13 >= _a21.length - s.dynamicMainBullets) {
                for (var _e80 = s.dynamicMainBullets; _e80 >= 0; _e80 -= 1) {
                  _a21.eq(_a21.length - _e80).addClass("".concat(s.bulletActiveClass, "-main"));
                }

                _a21.eq(_a21.length - s.dynamicMainBullets - 1).addClass("".concat(s.bulletActiveClass, "-prev"));
              } else o(_t79, "prev"), o(_n18, "next");
            } else o(_t79, "prev"), o(_n18, "next");
          }
        }

        if (s.dynamicBullets) {
          var _i43 = Math.min(_a21.length, s.dynamicMainBullets + 4),
              _n19 = (r * _i43 - r) / 2 - _u2 * r,
              _l7 = t ? "right" : "left";

          _a21.css(e.isHorizontal() ? _l7 : "top", "".concat(_n19, "px"));
        }
      }

      if ("fraction" === s.type && (c.find(W(s.currentClass)).text(s.formatFractionCurrent(p + 1)), c.find(W(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
        var _t80;

        _t80 = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";

        var _a22 = (p + 1) / u;

        var _i44 = 1,
            _r14 = 1;
        "horizontal" === _t80 ? _i44 = _a22 : _r14 = _a22, c.find(W(s.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(_i44, ") scaleY(").concat(_r14, ")")).transition(e.params.speed);
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

        for (var _s43 = 0; _s43 < _a23; _s43 += 1) {
          t.renderBullet ? r += t.renderBullet.call(e, _s43, t.bulletClass) : r += "<".concat(t.bulletElement, " class=\"").concat(t.bulletClass, "\"></").concat(t.bulletElement, ">");
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

        var _t81 = r.hasClass(e.params.pagination.hiddenClass);

        a(!0 === _t81 ? "paginationShow" : "paginationHide"), r.toggleClass(e.params.pagination.hiddenClass);
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
          var _t82 = u.$imageEl ? u.$imageEl[0] : void 0,
              _s44 = u.$slideEl ? u.$slideEl[0] : void 0;

          a("zoomChange", e, _t82, _s44);
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
              var _t83 = r.attr("data-swiper-slide-index");

              if (r.hasClass(e.params.slideDuplicateClass)) {
                l(e.$wrapperEl.children("[data-swiper-slide-index=\"".concat(_t83, "\"]:not(.").concat(e.params.slideDuplicateClass, ")")).index(), !1);
              } else {
                l(e.$wrapperEl.children(".".concat(e.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(_t83, "\"]")).index(), !1);
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
            _t84 = c,
            _s45 = Math.min(i + _t84 + Math.max(_e84, _t84), a.length),
            _r15 = Math.max(i - Math.max(_t84, _e84), 0);

        for (var _e85 = i + c; _e85 < _s45; _e85 += 1) {
          p(_e85) && l(_e85);
        }

        for (var _e86 = _r15; _e86 < i; _e86 += 1) {
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
        var _t85 = m[_e88];

        if (_t85[0] >= 0 && _t85[0] <= n && _t85[1] >= 0 && _t85[1] <= l) {
          if (0 === _t85[0] && 0 === _t85[1]) continue;
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
        var _s46 = e.params.history.root;
        "/" === _s46[_s46.length - 1] && (_s46 = _s46.slice(0, _s46.length - 1)), d = "".concat(_s46, "/").concat(t, "/").concat(d);
      } else l.pathname.includes(t) || (d = "".concat(t, "/").concat(d));

      var c = i.history.state;
      c && c.value === d || (e.params.history.replaceState ? i.history.replaceState({
        value: d
      }, null, d) : i.history.pushState({
        value: d
      }, null, d));
    },
        d = function d(t, s, a) {
      if (s) for (var _i45 = 0, _r16 = e.slides.length; _i45 < _r16; _i45 += 1) {
        var _r17 = e.slides.eq(_i45);

        if (n(_r17.attr("data-history")) === s && !_r17.hasClass(e.params.slideDuplicateClass)) {
          var _s47 = _r17.index();

          e.slideTo(_s47, t, a);
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
        var _s48 = e.$wrapperEl.children(".".concat(e.params.slideClass, "[data-hash=\"").concat(t, "\"]")).index();

        if (void 0 === _s48) return;
        e.slideTo(_s48);
      }
    },
        p = function p() {
      if (n && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && o.history && o.history.replaceState) o.history.replaceState(null, null, "#".concat(e.slides.eq(e.activeIndex).attr("data-hash")) || ""), s("hashSet");else {
        var _t86 = e.slides.eq(e.activeIndex),
            _a25 = _t86.attr("data-hash") || _t86.attr("data-history");

        l.location.hash = _a25 || "", s("hashSet");
      }
    };

    i("init", function () {
      e.params.hashNavigation.enabled && function () {
        if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
        n = !0;
        var t = l.location.hash.replace("#", "");

        if (t) {
          var _s49 = 0;

          for (var _a26 = 0, _i46 = e.slides.length; _a26 < _i46; _a26 += 1) {
            var _i47 = e.slides.eq(_a26);

            if ((_i47.attr("data-hash") || _i47.attr("data-history")) === t && !_i47.hasClass(e.params.slideDuplicateClass)) {
              var _t87 = _i47.index();

              e.slideTo(_t87, _s49, e.params.runCallbacksOnInit, !0);
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
        var _t88 = e.activeIndex;
        e.slides.eq(_t88).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, _t88 = e.activeIndex);

        var _s50 = e.slides.eq(_t88).prevAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index(),
            _a27 = e.slides.eq(_t88).nextAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index();

        i = void 0 === _s50 ? _a27 : void 0 === _a27 ? _s50 : _a27 - _t88 < _t88 - _s50 ? _a27 : _s50;
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
        var _n20,
            _l8,
            _o11 = s.activeIndex;

        if (s.params.loop) {
          s.slides.eq(_o11).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, _o11 = s.activeIndex);

          var _t89 = s.slides.eq(_o11).prevAll("[data-swiper-slide-index=\"".concat(e.realIndex, "\"]")).eq(0).index(),
              _a29 = s.slides.eq(_o11).nextAll("[data-swiper-slide-index=\"".concat(e.realIndex, "\"]")).eq(0).index();

          _n20 = void 0 === _t89 ? _a29 : void 0 === _a29 ? _t89 : _a29 - _o11 == _o11 - _t89 ? s.params.slidesPerGroup > 1 ? _a29 : _o11 : _a29 - _o11 < _o11 - _t89 ? _a29 : _t89, _l8 = e.activeIndex > e.previousIndex ? "next" : "prev";
        } else _n20 = e.realIndex, _l8 = _n20 > e.previousIndex ? "next" : "prev";

        r && (_n20 += "next" === _l8 ? i : -1 * i), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(_n20) < 0 && (s.params.centeredSlides ? _n20 = _n20 > _o11 ? _n20 - Math.floor(a / 2) + 1 : _n20 + Math.floor(a / 2) - 1 : _n20 > _o11 && s.params.slidesPerGroup, s.slideTo(_n20, t ? 0 : void 0));
      }

      var n = 1;
      var l = e.params.thumbs.slideThumbActiveClass;
      if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (n = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), s.slides.removeClass(l), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (var _t90 = 0; _t90 < n; _t90 += 1) {
        s.$wrapperEl.children("[data-swiper-slide-index=\"".concat(e.realIndex + _t90, "\"]")).addClass(l);
      } else for (var _t91 = 0; _t91 < n; _t91 += 1) {
        s.slides.eq(e.realIndex + _t91).addClass(l);
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
                var _t93 = o.velocities.pop(),
                    _s51 = o.velocities.pop(),
                    _a30 = _t93.position - _s51.position,
                    _r18 = _t93.time - _s51.time;

                e.velocity = _a30 / _r18, e.velocity /= 2, Math.abs(e.velocity) < i.freeMode.minimumVelocity && (e.velocity = 0), (_r18 > 150 || u() - _t93.time > 300) && (e.velocity = 0);
              } else e.velocity = 0;

              e.velocity *= i.freeMode.momentumVelocityRatio, o.velocities.length = 0;

              var _t92 = 1e3 * i.freeMode.momentumRatio;

              var _d6 = e.velocity * _t92;

              var _c4 = e.translate + _d6;

              n && (_c4 = -_c4);

              var _p,
                  _h = !1;

              var _m = 20 * Math.abs(e.velocity) * i.freeMode.momentumBounceRatio;

              var _f;

              if (_c4 < e.maxTranslate()) i.freeMode.momentumBounce ? (_c4 + e.maxTranslate() < -_m && (_c4 = e.maxTranslate() - _m), _p = e.maxTranslate(), _h = !0, o.allowMomentumBounce = !0) : _c4 = e.maxTranslate(), i.loop && i.centeredSlides && (_f = !0);else if (_c4 > e.minTranslate()) i.freeMode.momentumBounce ? (_c4 - e.minTranslate() > _m && (_c4 = e.minTranslate() + _m), _p = e.minTranslate(), _h = !0, o.allowMomentumBounce = !0) : _c4 = e.minTranslate(), i.loop && i.centeredSlides && (_f = !0);else if (i.freeMode.sticky) {
                var _t94;

                for (var _e90 = 0; _e90 < l.length; _e90 += 1) {
                  if (l[_e90] > -_c4) {
                    _t94 = _e90;
                    break;
                  }
                }

                _c4 = Math.abs(l[_t94] - _c4) < Math.abs(l[_t94 - 1] - _c4) || "next" === e.swipeDirection ? l[_t94] : l[_t94 - 1], _c4 = -_c4;
              }

              if (_f && a("transitionEnd", function () {
                e.loopFix();
              }), 0 !== e.velocity) {
                if (_t92 = n ? Math.abs((-_c4 - e.translate) / e.velocity) : Math.abs((_c4 - e.translate) / e.velocity), i.freeMode.sticky) {
                  var _s52 = Math.abs((n ? -_c4 : _c4) - e.translate),
                      _a31 = e.slidesSizesGrid[e.activeIndex];

                  _t92 = _s52 < _a31 ? i.speed : _s52 < 2 * _a31 ? 1.5 * i.speed : 2.5 * i.speed;
                }
              } else if (i.freeMode.sticky) return void e.slideToClosest();

              i.freeMode.momentumBounce && _h ? (e.updateProgress(_p), e.setTransition(_t92), e.setTranslate(_c4), e.transitionStart(!0, e.swipeDirection), e.animating = !0, r.transitionEnd(function () {
                e && !e.destroyed && o.allowMomentumBounce && (s("momentumBounce"), e.setTransition(i.speed), setTimeout(function () {
                  e.setTranslate(_p), r.transitionEnd(function () {
                    e && !e.destroyed && e.transitionEnd();
                  });
                }, 0));
              })) : e.velocity ? (s("_freeModeNoMomentumRelease"), e.updateProgress(_c4), e.setTransition(_t92), e.setTranslate(_c4), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, r.transitionEnd(function () {
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
              _i48 = 0 === _e91 ? o : Math.min(Math.ceil((n - _e91 * c * o) / c), o);

          m = Math.floor(_a32 / _i48), h = _a32 - m * _i48 + _e91 * o, u = h + m * s / c, r.css({
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
          var _t95 = [];

          for (var _s53 = 0; _s53 < a.length; _s53 += 1) {
            var _i49 = a[_s53];
            l && (_i49 = Math.floor(_i49)), a[_s53] < e.virtualSize + a[0] && _t95.push(_i49);
          }

          a.push.apply(a, _t95);
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
          var _t96 = e.slides.eq(_a33);

          var _i50 = -_t96[0].swiperSlideOffset;

          e.params.virtualTranslate || (_i50 -= e.translate);
          var _r19 = 0;
          e.isHorizontal() || (_r19 = _i50, _i50 = 0);

          var _n21 = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(_t96[0].progress), 0) : 1 + Math.min(Math.max(_t96[0].progress, -1), 0);

          U(s, _t96).css({
            opacity: _n21
          }).transform("translate3d(".concat(_i50, "px, ").concat(_r19, "px, 0px)"));
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
          var _t97 = a.eq(_e92);

          var _s54 = _e92;
          u && (_s54 = parseInt(_t97.attr("data-swiper-slide-index"), 10));

          var _i51 = 90 * _s54,
              _r20 = Math.floor(_i51 / 360);

          n && (_i51 = -_i51, _r20 = Math.floor(-_i51 / 360));

          var _o12 = Math.max(Math.min(_t97[0].progress, 1), -1);

          var _h2 = 0,
              _f2 = 0,
              _g = 0;
          _s54 % 4 == 0 ? (_h2 = 4 * -_r20 * l, _g = 0) : (_s54 - 1) % 4 == 0 ? (_h2 = 0, _g = 4 * -_r20 * l) : (_s54 - 2) % 4 == 0 ? (_h2 = l + 4 * _r20 * l, _g = l) : (_s54 - 3) % 4 == 0 && (_h2 = -l, _g = 3 * l + 4 * l * _r20), n && (_h2 = -_h2), p || (_f2 = _h2, _h2 = 0);

          var _v = "rotateX(".concat(p ? 0 : -_i51, "deg) rotateY(").concat(p ? _i51 : 0, "deg) translate3d(").concat(_h2, "px, ").concat(_f2, "px, ").concat(_g, "px)");

          if (_o12 <= 1 && _o12 > -1 && (m = 90 * _s54 + 90 * _o12, n && (m = 90 * -_s54 - 90 * _o12)), _t97.transform(_v), c.slideShadows) {
            var _e93 = p ? _t97.find(".swiper-slide-shadow-left") : _t97.find(".swiper-slide-shadow-top"),
                _s55 = p ? _t97.find(".swiper-slide-shadow-right") : _t97.find(".swiper-slide-shadow-bottom");

            0 === _e93.length && (_e93 = d("<div class=\"swiper-slide-shadow-".concat(p ? "left" : "top", "\"></div>")), _t97.append(_e93)), 0 === _s55.length && (_s55 = d("<div class=\"swiper-slide-shadow-".concat(p ? "right" : "bottom", "\"></div>")), _t97.append(_s55)), _e93.length && (_e93[0].style.opacity = Math.max(-_o12, 0)), _s55.length && (_s55[0].style.opacity = Math.max(_o12, 0));
          }
        }

        if (s.css({
          "-webkit-transform-origin": "50% 50% -".concat(l / 2, "px"),
          "transform-origin": "50% 50% -".concat(l / 2, "px")
        }), c.shadow) if (p) h.transform("translate3d(0px, ".concat(i / 2 + c.shadowOffset, "px, ").concat(-i / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(c.shadowScale, ")"));else {
          var _e94 = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
              _t98 = 1.5 - (Math.sin(2 * _e94 * Math.PI / 360) / 2 + Math.cos(2 * _e94 * Math.PI / 360) / 2),
              _s56 = c.shadowScale,
              _a34 = c.shadowScale / _t98,
              _i52 = c.shadowOffset;

          h.transform("scale3d(".concat(_s56, ", 1, ").concat(_a34, ") translate3d(0px, ").concat(r / 2 + _i52, "px, ").concat(-r / 2 / _a34, "px) rotateX(-90deg)"));
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

        for (var _i53 = 0; _i53 < t.length; _i53 += 1) {
          var _r21 = t.eq(_i53);

          var _n22 = _r21[0].progress;
          e.params.flipEffect.limitRotation && (_n22 = Math.max(Math.min(_r21[0].progress, 1), -1));
          var _l9 = _r21[0].swiperSlideOffset;

          var _o13 = -180 * _n22,
              _d7 = 0,
              _c5 = e.params.cssMode ? -_l9 - e.translate : -_l9,
              _p2 = 0;

          if (e.isHorizontal() ? s && (_o13 = -_o13) : (_p2 = _c5, _c5 = 0, _d7 = -_o13, _o13 = 0), _r21[0].style.zIndex = -Math.abs(Math.round(_n22)) + t.length, a.slideShadows) {
            var _t99 = e.isHorizontal() ? _r21.find(".swiper-slide-shadow-left") : _r21.find(".swiper-slide-shadow-top"),
                _s57 = e.isHorizontal() ? _r21.find(".swiper-slide-shadow-right") : _r21.find(".swiper-slide-shadow-bottom");

            0 === _t99.length && (_t99 = Z(a, _r21, e.isHorizontal() ? "left" : "top")), 0 === _s57.length && (_s57 = Z(a, _r21, e.isHorizontal() ? "right" : "bottom")), _t99.length && (_t99[0].style.opacity = Math.max(-_n22, 0)), _s57.length && (_s57[0].style.opacity = Math.max(_n22, 0));
          }

          var _u3 = "translate3d(".concat(_c5, "px, ").concat(_p2, "px, 0px) rotateX(").concat(_d7, "deg) rotateY(").concat(_o13, "deg)");

          U(a, _r21).transform(_u3);
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

        for (var _e95 = 0, _t100 = a.length; _e95 < _t100; _e95 += 1) {
          var _t101 = a.eq(_e95),
              _s58 = i[_e95],
              _l10 = (o - _t101[0].swiperSlideOffset - _s58 / 2) / _s58 * r.modifier;

          var _p3 = n ? d * _l10 : 0,
              _u4 = n ? 0 : d * _l10,
              _h3 = -c * Math.abs(_l10),
              _m2 = r.stretch;

          "string" == typeof _m2 && -1 !== _m2.indexOf("%") && (_m2 = parseFloat(r.stretch) / 100 * _s58);

          var _f3 = n ? 0 : _m2 * _l10,
              _g2 = n ? _m2 * _l10 : 0,
              _v2 = 1 - (1 - r.scale) * Math.abs(_l10);

          Math.abs(_g2) < .001 && (_g2 = 0), Math.abs(_f3) < .001 && (_f3 = 0), Math.abs(_h3) < .001 && (_h3 = 0), Math.abs(_p3) < .001 && (_p3 = 0), Math.abs(_u4) < .001 && (_u4 = 0), Math.abs(_v2) < .001 && (_v2 = 0);

          var _w = "translate3d(".concat(_g2, "px,").concat(_f3, "px,").concat(_h3, "px)  rotateX(").concat(_u4, "deg) rotateY(").concat(_p3, "deg) scale(").concat(_v2, ")");

          if (U(r, _t101).transform(_w), _t101[0].style.zIndex = 1 - Math.abs(Math.round(_l10)), r.slideShadows) {
            var _e96 = n ? _t101.find(".swiper-slide-shadow-left") : _t101.find(".swiper-slide-shadow-top"),
                _s59 = n ? _t101.find(".swiper-slide-shadow-right") : _t101.find(".swiper-slide-shadow-bottom");

            0 === _e96.length && (_e96 = Z(r, _t101, n ? "left" : "top")), 0 === _s59.length && (_s59 = Z(r, _t101, n ? "right" : "bottom")), _e96.length && (_e96[0].style.opacity = _l10 > 0 ? _l10 : 0), _s59.length && (_s59[0].style.opacity = -_l10 > 0 ? -_l10 : 0);
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

        var _loop2 = function _loop2(_r22) {
          var n = t.eq(_r22),
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
              var _t102 = s.shadowPerProgress ? o * (1 / s.limitProgress) : o;

              _e97[0].style.opacity = Math.min(Math.max(Math.abs(_t102), 0), 1);
            }
          }

          var b = U(s, n);
          b.transform(w).css({
            opacity: v
          }), h.origin && b.css("transform-origin", h.origin);
        };

        for (var _r22 = 0; _r22 < t.length; _r22 += 1) {
          _loop2(_r22);
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

  function setInputValue(_ref43) {
    var name = _ref43.name,
        value = _ref43.value;
    var inputs = document.getElementsByName(name);

    _toConsumableArray(inputs).map(function (input) {
      input.value = value;
    });
  }

  function setCookie(_ref44) {
    var name = _ref44.name,
        value = _ref44.value,
        expirationInDays = _ref44.expirationInDays;

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
    function setUtm(_ref45) {
      var name = _ref45.name,
          value = _ref45.value;
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
    } // This is specific because it has additional logic


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

function getFieldValue(_ref46) {
  var name = _ref46.name,
      type = _ref46.type;

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

function setInvalidInput(_ref47) {
  var input = _ref47.input,
      message = _ref47.message;
  input.setCustomValidity(message || 'invalid');
  input.classList.add('is-invalid');
}

function setValidInput(_ref48) {
  var input = _ref48.input;
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

  function _scrollToError(_ref49) {
    var container = _ref49.container;
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

function validateFullName(_ref50) {
  var fullNameElement = _ref50.fullNameElement,
      invalidMessage = _ref50.invalidMessage;
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

  function fullNameValidateHandler(_ref51) {
    var fullNameElement = _ref51.fullNameElement;

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

      for (var _i54 = sizes.prefix; _i54 >= 1; _i54--) {
        sum += cnpj.number.full.charAt(sizes.prefix - _i54) * positionIndex--;

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

      for (var _i55 = 0; _i55 < 9; _i55++) {
        d1 += cpf.prefix.charAt(_i55) * (11 - _i55);
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
  } // Register the ServiceWorker


  navigator.serviceWorker.register('/service-worker.js').then(function (reg) {
    console.log('Service worker has been registered for scope: ' + reg.scope);
  })["catch"](function (err) {
    console.log('ServiceWorker registration failed: ', err);
  });
} // Hide Header on scroll down


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
      var hasHeaderFixed = header.classList.contains(fixedClass); // check the width and height of the screen to prevent when the browser
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


  var header = document.querySelector(".".concat(headerClass));
  var headerTransition = Number(getComputedStyle(header)['transition-duration'].replace('s', '')) * 1000; // Start target where header will be fixed | Default: Window Height (100vh)

  var startTarget = isElementSet(startTargetClass) ? getOffsetTop(startTargetClass) : window.outerHeight; // End target where header will be shown | Default: The page bottom

  var endTarget = isElementSet(endTargetClass) ? getOffsetTop(endTargetClass) : document.body.scrollHeight; // Set variable that is used to apply padding-top to the body

  header.style.position = 'absolute';
  setHeaderHeight(header.offsetHeight);
  setupResizeScreenHeader(); // Scroll event listener

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
  } // Gets the theme value saved in localStorage


  var getPreferenceTheme = function getPreferenceTheme() {
    return localStorage.getItem('theme');
  }; // Defines a new theme item by storing the theme type in localStorage


  var setPreferenceTheme = function setPreferenceTheme(theme) {
    return localStorage.setItem('theme', theme);
  }; // Enables the customer's preferred theme type


  function activatePreferenceTheme(theme) {
    setPreferenceTheme(theme);
    setDataBSThemeAttributeInDocument(theme);
  } // Set data-bs-theme=theme in Document


  function setDataBSThemeAttributeInDocument(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
  } // Check if the theme is dark to set the toggle as active or not


  function updateToggleThemeStatus() {
    getPreferenceTheme() === 'dark' ? preferenceThemeElement.checked = true : preferenceThemeElement.checked = false;
  }

  preferenceThemeElement.addEventListener('change', function (event) {
    event.target.checked ? activatePreferenceTheme('dark') : activatePreferenceTheme('light');
  });
  window.addEventListener('load', function () {
    updateToggleThemeStatus(); // Activate the preferred theme already on load

    activatePreferenceTheme(getPreferenceTheme());
  });
}

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
      var year = yearMonthDay[2]; // console.log(new Date(year, month, day))

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
  setupSmoothScrollInOffcanvas(); // setupCepSearch();
  // setupStateCityOptions();
  // onChangeSelectLink();

  setupInputMasks(); // setupPopover();
  // setupTooltip();
  // setupAnchorReloadPrevention();

  initializeFormHelpers(); // setupDefaultSlider();
  // setupClipboardJS();
  // setupShareAPI();
  // setupDataLayerEventClickButton();

  setupUtmHelpers(); // setupWOWJS();

  setupModalConfig();
  setupLightDarkModeController();
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
