function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e17) { throw _e17; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e18) { didErr = true; err = _e18; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
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
                  _r.push(o);

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
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
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
  * Bootstrap v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
}(this, function () {
  "use strict";

  var t = {
    find: function find(t) {
      var _ref;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref = []).concat.apply(_ref, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref2;

      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(t.children)).filter(function (t) {
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
    }
  },
      e = function e(t) {
    do {
      t += Math.floor(1e6 * Math.random());
    } while (document.getElementById(t));

    return t;
  },
      i = function i(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i2 = t.getAttribute("href");

      if (!_i2 || !_i2.includes("#") && !_i2.startsWith(".")) return null;
      _i2.includes("#") && !_i2.startsWith("#") && (_i2 = "#" + _i2.split("#")[1]), e = _i2 && "#" !== _i2 ? _i2.trim() : null;
    }

    return e;
  },
      n = function n(t) {
    var e = i(t);
    return e && document.querySelector(e) ? e : null;
  },
      s = function s(t) {
    var e = i(t);
    return e ? document.querySelector(e) : null;
  },
      o = function o(t) {
    if (!t) return 0;

    var _window$getComputedSt = window.getComputedStyle(t),
        e = _window$getComputedSt.transitionDuration,
        i = _window$getComputedSt.transitionDelay;

    var n = Number.parseFloat(e),
        s = Number.parseFloat(i);
    return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
  },
      r = function r(t) {
    t.dispatchEvent(new Event("transitionend"));
  },
      a = function a(t) {
    return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      l = function l(e) {
    return a(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? t.findOne(e) : null;
  },
      c = function c(t, e) {
    var i = !1;
    var n = e + 5;
    t.addEventListener("transitionend", function e() {
      i = !0, t.removeEventListener("transitionend", e);
    }), setTimeout(function () {
      i || r(t);
    }, n);
  },
      d = function d(t, e, i) {
    Object.keys(i).forEach(function (n) {
      var s = i[n],
          o = e[n],
          r = o && a(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
      var l;
      if (!new RegExp(s).test(r)) throw new TypeError("".concat(t.toUpperCase(), ": Option \"").concat(n, "\" provided type \"").concat(r, "\" but expected type \"").concat(s, "\"."));
    });
  },
      h = function h(t) {
    if (!t) return !1;

    if (t.style && t.parentNode && t.parentNode.style) {
      var _e2 = getComputedStyle(t),
          _i3 = getComputedStyle(t.parentNode);

      return "none" !== _e2.display && "none" !== _i3.display && "hidden" !== _e2.visibility;
    }

    return !1;
  },
      u = function u(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      f = function f(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e3 = t.getRootNode();

      return _e3 instanceof ShadowRoot ? _e3 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? f(t.parentNode) : null;
  },
      p = function p() {},
      m = function m(t) {
    return t.offsetHeight;
  },
      g = function g() {
    var _window = window,
        t = _window.jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
      _ = function _() {
    return "rtl" === document.documentElement.dir;
  },
      b = function b(t) {
    var e;
    e = function e() {
      var e = g();

      if (e) {
        var _i4 = t.NAME,
            _n = e.fn[_i4];
        e.fn[_i4] = t.jQueryInterface, e.fn[_i4].Constructor = t, e.fn[_i4].noConflict = function () {
          return e.fn[_i4] = _n, t.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e();
  },
      v = function v(t) {
    "function" == typeof t && t();
  },
      y = new Map();

  var w = {
    set: function set(t, e, i) {
      y.has(t) || y.set(t, new Map());
      var n = y.get(t);
      n.has(e) || 0 === n.size ? n.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(n.keys())[0], "."));
    },
    get: function get(t, e) {
      return y.has(t) && y.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!y.has(t)) return;
      var i = y.get(t);
      i["delete"](e), 0 === i.size && y["delete"](t);
    }
  };
  var E = /[^.]*(?=\..*)\.|.*/,
      T = /\..*/,
      A = /::\d+$/,
      L = {};
  var O = 1;
  var k = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      C = /^(mouseenter|mouseleave)/i,
      x = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function D(t, e) {
    return e && "".concat(e, "::").concat(O++) || t.uidEvent || O++;
  }

  function N(t) {
    var e = D(t);
    return t.uidEvent = e, L[e] = L[e] || {}, L[e];
  }

  function S(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var n = Object.keys(t);

    for (var _s = 0, _o2 = n.length; _s < _o2; _s++) {
      var _o3 = t[n[_s]];
      if (_o3.originalHandler === e && _o3.delegationSelector === i) return _o3;
    }

    return null;
  }

  function I(t, e, i) {
    var n = "string" == typeof e,
        s = n ? i : e;
    var o = M(t);
    return x.has(o) || (o = t), [n, s, o];
  }

  function j(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;

    if (i || (i = n, n = null), C.test(e)) {
      var _t3 = function _t3(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      n ? n = _t3(n) : i = _t3(i);
    }

    var _I = I(e, i, n),
        _I2 = _slicedToArray(_I, 3),
        o = _I2[0],
        r = _I2[1],
        a = _I2[2],
        l = N(t),
        c = l[a] || (l[a] = {}),
        d = S(c, r, o ? i : null);

    if (d) return void (d.oneOff = d.oneOff && s);
    var h = D(r, e.replace(E, "")),
        u = o ? function (t, e, i) {
      return function n(s) {
        var o = t.querySelectorAll(e);

        for (var _r2 = s.target; _r2 && _r2 !== this; _r2 = _r2.parentNode) {
          for (var _a = o.length; _a--;) {
            if (o[_a] === _r2) return s.delegateTarget = _r2, n.oneOff && H.off(t, s.type, e, i), i.apply(_r2, [s]);
          }
        }

        return null;
      };
    }(t, i, n) : function (t, e) {
      return function i(n) {
        return n.delegateTarget = t, i.oneOff && H.off(t, n.type, e), e.apply(t, [n]);
      };
    }(t, i);
    u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = h, c[h] = u, t.addEventListener(a, u, o);
  }

  function P(t, e, i, n, s) {
    var o = S(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }

  function M(t) {
    return t = t.replace(T, ""), k[t] || t;
  }

  var H = {
    on: function on(t, e, i, n) {
      j(t, e, i, n, !1);
    },
    one: function one(t, e, i, n) {
      j(t, e, i, n, !0);
    },
    off: function off(t, e, i, n) {
      if ("string" != typeof e || !t) return;

      var _I3 = I(e, i, n),
          _I4 = _slicedToArray(_I3, 3),
          s = _I4[0],
          o = _I4[1],
          r = _I4[2],
          a = r !== e,
          l = N(t),
          c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void P(t, l, r, o, s ? i : null);
      }

      c && Object.keys(l).forEach(function (i) {
        !function (t, e, i, n) {
          var s = e[i] || {};
          Object.keys(s).forEach(function (o) {
            if (o.includes(n)) {
              var _n2 = s[o];
              P(t, e, i, _n2.originalHandler, _n2.delegationSelector);
            }
          });
        }(t, l, i, e.slice(1));
      });
      var d = l[r] || {};
      Object.keys(d).forEach(function (i) {
        var n = i.replace(A, "");

        if (!a || e.includes(n)) {
          var _e4 = d[i];
          P(t, l, r, _e4.originalHandler, _e4.delegationSelector);
        }
      });
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var n = g(),
          s = M(e),
          o = e !== s,
          r = x.has(s);
      var a,
          l = !0,
          c = !0,
          d = !1,
          h = null;
      return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), d = a.isDefaultPrevented()), r ? (h = document.createEvent("HTMLEvents"), h.initEvent(s, l, !0)) : h = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== i && Object.keys(i).forEach(function (t) {
        Object.defineProperty(h, t, {
          get: function get() {
            return i[t];
          }
        });
      }), d && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h;
    }
  };

  var R = /*#__PURE__*/function () {
    function R(t) {
      _classCallCheck(this, R);

      (t = l(t)) && (this._element = t, w.set(this._element, this.constructor.DATA_KEY, this));
    }

    _createClass(R, [{
      key: "dispose",
      value: function dispose() {
        var _this = this;

        w.remove(this._element, this.constructor.DATA_KEY), H.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function (t) {
          _this[t] = null;
        });
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        if (!i) return void v(t);
        var n = o(e);
        H.one(e, "transitionend", function () {
          return v(t);
        }), c(e, n);
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return w.get(t, this.DATA_KEY);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.0.1";
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

    return R;
  }();

  var B = /*#__PURE__*/function (_R) {
    _inherits(B, _R);

    var _super = _createSuper(B);

    function B() {
      _classCallCheck(this, B);

      return _super.apply(this, arguments);
    }

    _createClass(B, [{
      key: "close",
      value: function close(t) {
        var e = t ? this._getRootElement(t) : this._element,
            i = this._triggerCloseEvent(e);

        null === i || i.defaultPrevented || this._removeElement(e);
      }
    }, {
      key: "_getRootElement",
      value: function _getRootElement(t) {
        return s(t) || t.closest(".alert");
      }
    }, {
      key: "_triggerCloseEvent",
      value: function _triggerCloseEvent(t) {
        return H.trigger(t, "close.bs.alert");
      }
    }, {
      key: "_removeElement",
      value: function _removeElement(t) {
        var _this2 = this;

        t.classList.remove("show");
        var e = t.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement(t);
        }, t, e);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement(t) {
        t.parentNode && t.parentNode.removeChild(t), H.trigger(t, "closed.bs.alert");
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.alert");
          e || (e = new B(this)), "close" === t && e[t](this);
        });
      }
    }, {
      key: "handleDismiss",
      value: function handleDismiss(t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }
    }, {
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }]);

    return B;
  }(R);

  H.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', B.handleDismiss(new B())), b(B);

  var W = /*#__PURE__*/function (_R2) {
    _inherits(W, _R2);

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
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.button");
          e || (e = new W(this)), "toggle" === t && e[t]();
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "button";
      }
    }]);

    return W;
  }(R);

  function q(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function z(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  H.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', function (t) {
    t.preventDefault();
    var e = t.target.closest('[data-bs-toggle="button"]');
    var i = w.get(e, "bs.button");
    i || (i = new W(e)), i.toggle();
  }), b(W);
  var U = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-" + z(e), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + z(e));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {};
      return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (i) {
        var n = i.replace(/^bs/, "");
        n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = q(t.dataset[i]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return q(t.getAttribute("data-bs-" + z(e)));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + document.body.scrollTop,
        left: e.left + document.body.scrollLeft
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
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
      F = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      V = "next",
      K = "prev",
      X = "left",
      Y = "right";

  var Q = /*#__PURE__*/function (_R3) {
    _inherits(Q, _R3);

    var _super3 = _createSuper(Q);

    function Q(e, i) {
      var _this3;

      _classCallCheck(this, Q);

      _this3 = _super3.call(this, e), _this3._items = null, _this3._interval = null, _this3._activeElement = null, _this3._isPaused = !1, _this3._isSliding = !1, _this3.touchTimeout = null, _this3.touchStartX = 0, _this3.touchDeltaX = 0, _this3._config = _this3._getConfig(i), _this3._indicatorsElement = t.findOne(".carousel-indicators", _this3._element), _this3._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this3._pointerEvent = Boolean(window.PointerEvent), _this3._addEventListeners();
      return _this3;
    }

    _createClass(Q, [{
      key: "next",
      value: function next() {
        this._isSliding || this._slide(V);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && h(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._isSliding || this._slide(K);
      }
    }, {
      key: "pause",
      value: function pause(e) {
        e || (this._isPaused = !0), t.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (r(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }
    }, {
      key: "to",
      value: function to(e) {
        var _this4 = this;

        this._activeElement = t.findOne(".active.carousel-item", this._element);

        var i = this._getItemIndex(this._activeElement);

        if (e > this._items.length - 1 || e < 0) return;
        if (this._isSliding) return void H.one(this._element, "slid.bs.carousel", function () {
          return _this4.to(e);
        });
        if (i === e) return this.pause(), void this.cycle();
        var n = e > i ? V : K;

        this._slide(n, this._items[e]);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread({}, $), t), d("carousel", t, F), t;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e && this._slide(e > 0 ? Y : X);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;

        this._config.keyboard && H.on(this._element, "keydown.bs.carousel", function (t) {
          return _this5._keydown(t);
        }), "hover" === this._config.pause && (H.on(this._element, "mouseenter.bs.carousel", function (t) {
          return _this5.pause(t);
        }), H.on(this._element, "mouseleave.bs.carousel", function (t) {
          return _this5.cycle(t);
        })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this6 = this;

        var e = function e(t) {
          !_this6._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? _this6._pointerEvent || (_this6.touchStartX = t.touches[0].clientX) : _this6.touchStartX = t.clientX;
        },
            i = function i(t) {
          _this6.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this6.touchStartX;
        },
            n = function n(t) {
          !_this6._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (_this6.touchDeltaX = t.clientX - _this6.touchStartX), _this6._handleSwipe(), "hover" === _this6._config.pause && (_this6.pause(), _this6.touchTimeout && clearTimeout(_this6.touchTimeout), _this6.touchTimeout = setTimeout(function (t) {
            return _this6.cycle(t);
          }, 500 + _this6._config.interval));
        };

        t.find(".carousel-item img", this._element).forEach(function (t) {
          H.on(t, "dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          });
        }), this._pointerEvent ? (H.on(this._element, "pointerdown.bs.carousel", function (t) {
          return e(t);
        }), H.on(this._element, "pointerup.bs.carousel", function (t) {
          return n(t);
        }), this._element.classList.add("pointer-event")) : (H.on(this._element, "touchstart.bs.carousel", function (t) {
          return e(t);
        }), H.on(this._element, "touchmove.bs.carousel", function (t) {
          return i(t);
        }), H.on(this._element, "touchend.bs.carousel", function (t) {
          return n(t);
        }));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), this._slide(Y)) : "ArrowRight" === t.key && (t.preventDefault(), this._slide(X)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(e) {
        return this._items = e && e.parentNode ? t.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(t, e) {
        var i = t === V,
            n = t === K,
            s = this._getItemIndex(e),
            o = this._items.length - 1;

        if ((n && 0 === s || i && s === o) && !this._config.wrap) return e;
        var r = (s + (n ? -1 : 1)) % this._items.length;
        return -1 === r ? this._items[this._items.length - 1] : this._items[r];
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(e, i) {
        var n = this._getItemIndex(e),
            s = this._getItemIndex(t.findOne(".active.carousel-item", this._element));

        return H.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: e,
          direction: i,
          from: s,
          to: n
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(e) {
        if (this._indicatorsElement) {
          var _i5 = t.findOne(".active", this._indicatorsElement);

          _i5.classList.remove("active"), _i5.removeAttribute("aria-current");

          var _n3 = t.find("[data-bs-target]", this._indicatorsElement);

          for (var _t4 = 0; _t4 < _n3.length; _t4++) {
            if (Number.parseInt(_n3[_t4].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
              _n3[_t4].classList.add("active"), _n3[_t4].setAttribute("aria-current", "true");
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var e = this._activeElement || t.findOne(".active.carousel-item", this._element);
        if (!e) return;
        var i = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
        i ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = i) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, {
      key: "_slide",
      value: function _slide(e, i) {
        var _this7 = this;

        var n = this._directionToOrder(e),
            s = t.findOne(".active.carousel-item", this._element),
            o = this._getItemIndex(s),
            r = i || this._getItemByOrder(n, s),
            a = this._getItemIndex(r),
            l = Boolean(this._interval),
            c = n === V,
            d = c ? "carousel-item-start" : "carousel-item-end",
            h = c ? "carousel-item-next" : "carousel-item-prev",
            u = this._orderToDirection(n);

        if (r && r.classList.contains("active")) return void (this._isSliding = !1);
        if (this._triggerSlideEvent(r, u).defaultPrevented) return;
        if (!s || !r) return;
        this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;

        var f = function f() {
          H.trigger(_this7._element, "slid.bs.carousel", {
            relatedTarget: r,
            direction: u,
            from: o,
            to: a
          });
        };

        if (this._element.classList.contains("slide")) {
          r.classList.add(h), m(r), s.classList.add(d), r.classList.add(d);

          var _t5 = function _t5() {
            r.classList.remove(d, h), r.classList.add("active"), s.classList.remove("active", h, d), _this7._isSliding = !1, setTimeout(f, 0);
          };

          this._queueCallback(_t5, s, !0);
        } else s.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, f();

        l && this.cycle();
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return [Y, X].includes(t) ? _() ? t === X ? K : V : t === X ? V : K : t;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return [V, K].includes(t) ? _() ? t === K ? X : Y : t === K ? Y : X : t;
      }
    }], [{
      key: "carouselInterface",
      value: function carouselInterface(t, e) {
        var i = w.get(t, "bs.carousel"),
            n = _objectSpread(_objectSpread({}, $), U.getDataAttributes(t));

        "object" == _typeof(e) && (n = _objectSpread(_objectSpread({}, n), e));
        var s = "string" == typeof e ? e : n.slide;
        if (i || (i = new Q(t, n)), "number" == typeof e) i.to(e);else if ("string" == typeof s) {
          if (void 0 === i[s]) throw new TypeError("No method named \"".concat(s, "\""));
          i[s]();
        } else n.interval && n.ride && (i.pause(), i.cycle());
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          Q.carouselInterface(this, t);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(t) {
        var e = s(this);
        if (!e || !e.classList.contains("carousel")) return;

        var i = _objectSpread(_objectSpread({}, U.getDataAttributes(e)), U.getDataAttributes(this)),
            n = this.getAttribute("data-bs-slide-to");

        n && (i.interval = !1), Q.carouselInterface(e, i), n && w.get(e, "bs.carousel").to(n), t.preventDefault();
      }
    }, {
      key: "Default",
      get: function get() {
        return $;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }]);

    return Q;
  }(R);

  H.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Q.dataApiClickHandler), H.on(window, "load.bs.carousel.data-api", function () {
    var e = t.find('[data-bs-ride="carousel"]');

    for (var _t6 = 0, _i6 = e.length; _t6 < _i6; _t6++) {
      Q.carouselInterface(e[_t6], w.get(e[_t6], "bs.carousel"));
    }
  }), b(Q);
  var G = {
    toggle: !0,
    parent: ""
  },
      Z = {
    toggle: "boolean",
    parent: "(string|element)"
  };

  var J = /*#__PURE__*/function (_R4) {
    _inherits(J, _R4);

    var _super4 = _createSuper(J);

    function J(e, i) {
      var _this8;

      _classCallCheck(this, J);

      _this8 = _super4.call(this, e), _this8._isTransitioning = !1, _this8._config = _this8._getConfig(i), _this8._triggerArray = t.find("[data-bs-toggle=\"collapse\"][href=\"#".concat(_this8._element.id, "\"],[data-bs-toggle=\"collapse\"][data-bs-target=\"#").concat(_this8._element.id, "\"]"));
      var s = t.find('[data-bs-toggle="collapse"]');

      for (var _e5 = 0, _i7 = s.length; _e5 < _i7; _e5++) {
        var _i8 = s[_e5],
            _o4 = n(_i8),
            _r3 = t.find(_o4).filter(function (t) {
          return t === _this8._element;
        });

        null !== _o4 && _r3.length && (_this8._selector = _o4, _this8._triggerArray.push(_i8));
      }

      _this8._parent = _this8._config.parent ? _this8._getParent() : null, _this8._config.parent || _this8._addAriaAndCollapsedClass(_this8._element, _this8._triggerArray), _this8._config.toggle && _this8.toggle();
      return _this8;
    }

    _createClass(J, [{
      key: "toggle",
      value: function toggle() {
        this._element.classList.contains("show") ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this9 = this;

        if (this._isTransitioning || this._element.classList.contains("show")) return;
        var e, i;
        this._parent && (e = t.find(".show, .collapsing", this._parent).filter(function (t) {
          return "string" == typeof _this9._config.parent ? t.getAttribute("data-bs-parent") === _this9._config.parent : t.classList.contains("collapse");
        }), 0 === e.length && (e = null));
        var n = t.findOne(this._selector);

        if (e) {
          var _t7 = e.find(function (t) {
            return n !== t;
          });

          if (i = _t7 ? w.get(_t7, "bs.collapse") : null, i && i._isTransitioning) return;
        }

        if (H.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        e && e.forEach(function (t) {
          n !== t && J.collapseInterface(t, "hide"), i || w.set(t, "bs.collapse", null);
        });

        var s = this._getDimension();

        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach(function (t) {
          t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0);
        }), this.setTransitioning(!0);
        var o = "scroll" + (s[0].toUpperCase() + s.slice(1));
        this._queueCallback(function () {
          _this9._element.classList.remove("collapsing"), _this9._element.classList.add("collapse", "show"), _this9._element.style[s] = "", _this9.setTransitioning(!1), H.trigger(_this9._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[s] = this._element[o] + "px";
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this10 = this;

        if (this._isTransitioning || !this._element.classList.contains("show")) return;
        if (H.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", m(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
        var e = this._triggerArray.length;
        if (e > 0) for (var _t8 = 0; _t8 < e; _t8++) {
          var _e6 = this._triggerArray[_t8],
              _i9 = s(_e6);

          _i9 && !_i9.classList.contains("show") && (_e6.classList.add("collapsed"), _e6.setAttribute("aria-expanded", !1));
        }
        this.setTransitioning(!0), this._element.style[t] = "", this._queueCallback(function () {
          _this10.setTransitioning(!1), _this10._element.classList.remove("collapsing"), _this10._element.classList.add("collapse"), H.trigger(_this10._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "setTransitioning",
      value: function setTransitioning(t) {
        this._isTransitioning = t;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread({}, G), t)).toggle = Boolean(t.toggle), d("collapse", t, Z), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("width") ? "width" : "height";
      }
    }, {
      key: "_getParent",
      value: function _getParent() {
        var _this11 = this;

        var e = this._config.parent;
        e = l(e);
        var i = "[data-bs-toggle=\"collapse\"][data-bs-parent=\"".concat(e, "\"]");
        return t.find(i, e).forEach(function (t) {
          var e = s(t);

          _this11._addAriaAndCollapsedClass(e, [t]);
        }), e;
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (!t || !e.length) return;
        var i = t.classList.contains("show");
        e.forEach(function (t) {
          i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i);
        });
      }
    }], [{
      key: "collapseInterface",
      value: function collapseInterface(t, e) {
        var i = w.get(t, "bs.collapse");

        var n = _objectSpread(_objectSpread(_objectSpread({}, G), U.getDataAttributes(t)), "object" == _typeof(e) && e ? e : {});

        if (!i && n.toggle && "string" == typeof e && /show|hide/.test(e) && (n.toggle = !1), i || (i = new J(t, n)), "string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError("No method named \"".concat(e, "\""));
          i[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          J.collapseInterface(this, t);
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return G;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }]);

    return J;
  }(R);

  H.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (e) {
    ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
    var i = U.getDataAttributes(this),
        s = n(this);
    t.find(s).forEach(function (t) {
      var e = w.get(t, "bs.collapse");
      var n;
      e ? (null === e._parent && "string" == typeof i.parent && (e._config.parent = i.parent, e._parent = e._getParent()), n = "toggle") : n = i, J.collapseInterface(t, n);
    });
  }), b(J);
  var tt = "top",
      et = "bottom",
      it = "right",
      nt = "left",
      st = [tt, et, it, nt],
      ot = st.reduce(function (t, e) {
    return t.concat([e + "-start", e + "-end"]);
  }, []),
      rt = [].concat(st, ["auto"]).reduce(function (t, e) {
    return t.concat([e, e + "-start", e + "-end"]);
  }, []),
      at = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

  function lt(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }

  function ct(t) {
    if (null == t) return window;

    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }

    return t;
  }

  function dt(t) {
    return t instanceof ct(t).Element || t instanceof Element;
  }

  function ht(t) {
    return t instanceof ct(t).HTMLElement || t instanceof HTMLElement;
  }

  function ut(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof ct(t).ShadowRoot || t instanceof ShadowRoot);
  }

  var ft = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
            n = e.attributes[t] || {},
            s = e.elements[t];
        ht(s) && lt(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
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
          ht(n) && lt(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
            n.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };

  function pt(t) {
    return t.split("-")[0];
  }

  function mt(t) {
    var e = t.getBoundingClientRect();
    return {
      width: e.width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top
    };
  }

  function gt(t) {
    var e = mt(t),
        i = t.offsetWidth,
        n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    };
  }

  function _t(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;

    if (i && ut(i)) {
      var n = e;

      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }

    return !1;
  }

  function bt(t) {
    return ct(t).getComputedStyle(t);
  }

  function vt(t) {
    return ["table", "td", "th"].indexOf(lt(t)) >= 0;
  }

  function yt(t) {
    return ((dt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }

  function wt(t) {
    return "html" === lt(t) ? t : t.assignedSlot || t.parentNode || (ut(t) ? t.host : null) || yt(t);
  }

  function Et(t) {
    return ht(t) && "fixed" !== bt(t).position ? t.offsetParent : null;
  }

  function Tt(t) {
    for (var e = ct(t), i = Et(t); i && vt(i) && "static" === bt(i).position;) {
      i = Et(i);
    }

    return i && ("html" === lt(i) || "body" === lt(i) && "static" === bt(i).position) ? e : i || function (t) {
      var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 !== navigator.userAgent.indexOf("Trident") && ht(t) && "fixed" === bt(t).position) return null;

      for (var i = wt(t); ht(i) && ["html", "body"].indexOf(lt(i)) < 0;) {
        var n = bt(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }

      return null;
    }(t) || e;
  }

  function At(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }

  var Lt = Math.max,
      Ot = Math.min,
      kt = Math.round;

  function Ct(t, e, i) {
    return Lt(t, Ot(e, i));
  }

  function xt(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }

  function Dt(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }

  var Nt = {
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
          a = pt(i.placement),
          l = At(a),
          c = [nt, it].indexOf(a) >= 0 ? "height" : "width";

      if (o && r) {
        var d = function (t, e) {
          return xt("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
          })) : t) ? t : Dt(t, st));
        }(s.padding, i),
            h = gt(o),
            u = "y" === l ? tt : nt,
            f = "y" === l ? et : it,
            p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
            m = r[l] - i.rects.reference[l],
            g = Tt(o),
            _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
            b = p / 2 - m / 2,
            v = d[u],
            y = _ - h[c] - d[f],
            w = _ / 2 - h[c] / 2 + b,
            E = Ct(v, w, y),
            T = l;

        i.modifiersData[n] = ((e = {})[T] = E, e.centerOffset = E - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
          i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && _t(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  },
      St = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function It(t) {
    var e,
        i = t.popper,
        n = t.popperRect,
        s = t.placement,
        o = t.offsets,
        r = t.position,
        a = t.gpuAcceleration,
        l = t.adaptive,
        c = t.roundOffsets,
        d = !0 === c ? function (t) {
      var e = t.x,
          i = t.y,
          n = window.devicePixelRatio || 1;
      return {
        x: kt(kt(e * n) / n) || 0,
        y: kt(kt(i * n) / n) || 0
      };
    }(o) : "function" == typeof c ? c(o) : o,
        h = d.x,
        u = void 0 === h ? 0 : h,
        f = d.y,
        p = void 0 === f ? 0 : f,
        m = o.hasOwnProperty("x"),
        g = o.hasOwnProperty("y"),
        _ = nt,
        b = tt,
        v = window;

    if (l) {
      var y = Tt(i),
          w = "clientHeight",
          E = "clientWidth";
      y === ct(i) && "static" !== bt(y = yt(i)).position && (w = "scrollHeight", E = "scrollWidth"), y = y, s === tt && (b = et, p -= y[w] - n.height, p *= a ? 1 : -1), s === nt && (_ = it, u -= y[E] - n.width, u *= a ? 1 : -1);
    }

    var T,
        A = Object.assign({
      position: r
    }, l && St);
    return a ? Object.assign({}, A, ((T = {})[b] = g ? "0" : "", T[_] = m ? "0" : "", T.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + p + "px)" : "translate3d(" + u + "px, " + p + "px, 0)", T)) : Object.assign({}, A, ((e = {})[b] = g ? p + "px" : "", e[_] = m ? u + "px" : "", e.transform = "", e));
  }

  var jt = {
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
        placement: pt(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: s
      };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, It(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, It(Object.assign({}, c, {
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
      Pt = {
    passive: !0
  },
      Mt = {
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
          l = ct(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, Pt);
      }), a && l.addEventListener("resize", i.update, Pt), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, Pt);
        }), a && l.removeEventListener("resize", i.update, Pt);
      };
    },
    data: {}
  },
      Ht = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function Rt(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return Ht[t];
    });
  }

  var Bt = {
    start: "end",
    end: "start"
  };

  function Wt(t) {
    return t.replace(/start|end/g, function (t) {
      return Bt[t];
    });
  }

  function qt(t) {
    var e = ct(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function zt(t) {
    return mt(yt(t)).left + qt(t).scrollLeft;
  }

  function Ut(t) {
    var e = bt(t),
        i = e.overflow,
        n = e.overflowX,
        s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }

  function $t(t, e) {
    var i;
    void 0 === e && (e = []);

    var n = function t(e) {
      return ["html", "body", "#document"].indexOf(lt(e)) >= 0 ? e.ownerDocument.body : ht(e) && Ut(e) ? e : t(wt(e));
    }(t),
        s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = ct(n),
        r = s ? [o].concat(o.visualViewport || [], Ut(n) ? n : []) : n,
        a = e.concat(r);

    return s ? a : a.concat($t(wt(r)));
  }

  function Ft(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }

  function Vt(t, e) {
    return "viewport" === e ? Ft(function (t) {
      var e = ct(t),
          i = yt(t),
          n = e.visualViewport,
          s = i.clientWidth,
          o = i.clientHeight,
          r = 0,
          a = 0;
      return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
        width: s,
        height: o,
        x: r + zt(t),
        y: a
      };
    }(t)) : ht(e) ? function (t) {
      var e = mt(t);
      return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
    }(e) : Ft(function (t) {
      var e,
          i = yt(t),
          n = qt(t),
          s = null == (e = t.ownerDocument) ? void 0 : e.body,
          o = Lt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
          r = Lt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
          a = -n.scrollLeft + zt(t),
          l = -n.scrollTop;
      return "rtl" === bt(s || i).direction && (a += Lt(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(yt(t)));
  }

  function Kt(t) {
    return t.split("-")[1];
  }

  function Xt(t) {
    var e,
        i = t.reference,
        n = t.element,
        s = t.placement,
        o = s ? pt(s) : null,
        r = s ? Kt(s) : null,
        a = i.x + i.width / 2 - n.width / 2,
        l = i.y + i.height / 2 - n.height / 2;

    switch (o) {
      case tt:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;

      case et:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;

      case it:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;

      case nt:
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

    var c = o ? At(o) : null;

    if (null != c) {
      var d = "y" === c ? "height" : "width";

      switch (r) {
        case "start":
          e[c] = e[c] - (i[d] / 2 - n[d] / 2);
          break;

        case "end":
          e[c] = e[c] + (i[d] / 2 - n[d] / 2);
      }
    }

    return e;
  }

  function Yt(t, e) {
    void 0 === e && (e = {});

    var i = e,
        n = i.placement,
        s = void 0 === n ? t.placement : n,
        o = i.boundary,
        r = void 0 === o ? "clippingParents" : o,
        a = i.rootBoundary,
        l = void 0 === a ? "viewport" : a,
        c = i.elementContext,
        d = void 0 === c ? "popper" : c,
        h = i.altBoundary,
        u = void 0 !== h && h,
        f = i.padding,
        p = void 0 === f ? 0 : f,
        m = xt("number" != typeof p ? p : Dt(p, st)),
        g = "popper" === d ? "reference" : "popper",
        _ = t.elements.reference,
        b = t.rects.popper,
        v = t.elements[u ? g : d],
        y = function (t, e, i) {
      var n = "clippingParents" === e ? function (t) {
        var e = $t(wt(t)),
            i = ["absolute", "fixed"].indexOf(bt(t).position) >= 0 && ht(t) ? Tt(t) : t;
        return dt(i) ? e.filter(function (t) {
          return dt(t) && _t(t, i) && "body" !== lt(t);
        }) : [];
      }(t) : [].concat(e),
          s = [].concat(n, [i]),
          o = s[0],
          r = s.reduce(function (e, i) {
        var n = Vt(t, i);
        return e.top = Lt(n.top, e.top), e.right = Ot(n.right, e.right), e.bottom = Ot(n.bottom, e.bottom), e.left = Lt(n.left, e.left), e;
      }, Vt(t, o));
      return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
    }(dt(v) ? v : v.contextElement || yt(t.elements.popper), r, l),
        w = mt(_),
        E = Xt({
      reference: w,
      element: b,
      strategy: "absolute",
      placement: s
    }),
        T = Ft(Object.assign({}, b, E)),
        A = "popper" === d ? T : w,
        L = {
      top: y.top - A.top + m.top,
      bottom: A.bottom - y.bottom + m.bottom,
      left: y.left - A.left + m.left,
      right: A.right - y.right + m.right
    },
        O = t.modifiersData.offset;

    if ("popper" === d && O) {
      var k = O[s];
      Object.keys(L).forEach(function (t) {
        var e = [it, et].indexOf(t) >= 0 ? 1 : -1,
            i = [tt, et].indexOf(t) >= 0 ? "y" : "x";
        L[t] += k[i] * e;
      });
    }

    return L;
  }

  function Qt(t, e) {
    void 0 === e && (e = {});
    var i = e,
        n = i.placement,
        s = i.boundary,
        o = i.rootBoundary,
        r = i.padding,
        a = i.flipVariations,
        l = i.allowedAutoPlacements,
        c = void 0 === l ? rt : l,
        d = Kt(n),
        h = d ? a ? ot : ot.filter(function (t) {
      return Kt(t) === d;
    }) : st,
        u = h.filter(function (t) {
      return c.indexOf(t) >= 0;
    });
    0 === u.length && (u = h);
    var f = u.reduce(function (e, i) {
      return e[i] = Yt(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[pt(i)], e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }

  var Gt = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name;

      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, d = i.boundary, h = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = pt(g), b = l || (_ !== g && p ? function (t) {
          if ("auto" === pt(t)) return [];
          var e = Rt(t);
          return [Wt(t), e, Wt(e)];
        }(g) : [Rt(g)]), v = [g].concat(b).reduce(function (t, i) {
          return t.concat("auto" === pt(i) ? Qt(e, {
            placement: i,
            boundary: d,
            rootBoundary: h,
            padding: c,
            flipVariations: p,
            allowedAutoPlacements: m
          }) : i);
        }, []), y = e.rects.reference, w = e.rects.popper, E = new Map(), T = !0, A = v[0], L = 0; L < v.length; L++) {
          var O = v[L],
              k = pt(O),
              C = "start" === Kt(O),
              x = [tt, et].indexOf(k) >= 0,
              D = x ? "width" : "height",
              N = Yt(e, {
            placement: O,
            boundary: d,
            rootBoundary: h,
            altBoundary: u,
            padding: c
          }),
              S = x ? C ? it : nt : C ? et : tt;
          y[D] > w[D] && (S = Rt(S));
          var I = Rt(S),
              j = [];

          if (o && j.push(N[k] <= 0), a && j.push(N[S] <= 0, N[I] <= 0), j.every(function (t) {
            return t;
          })) {
            A = O, T = !1;
            break;
          }

          E.set(O, j);
        }

        if (T) for (var P = function P(t) {
          var e = v.find(function (e) {
            var i = E.get(e);
            if (i) return i.slice(0, t).every(function (t) {
              return t;
            });
          });
          if (e) return A = e, "break";
        }, M = p ? 3 : 1; M > 0 && "break" !== P(M); M--) {
          ;
        }
        e.placement !== A && (e.modifiersData[n]._skip = !0, e.placement = A, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function Zt(t, e, i) {
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

  function Jt(t) {
    return [tt, it, et, nt].some(function (e) {
      return t[e] >= 0;
    });
  }

  var te = {
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
          r = Yt(e, {
        elementContext: "reference"
      }),
          a = Yt(e, {
        altBoundary: !0
      }),
          l = Zt(r, n),
          c = Zt(a, s, o),
          d = Jt(l),
          h = Jt(c);
      e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: d,
        hasPopperEscaped: h
      }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": d,
        "data-popper-escaped": h
      });
    }
  },
      ee = {
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
          r = rt.reduce(function (t, i) {
        return t[i] = function (t, e, i) {
          var n = pt(t),
              s = [nt, tt].indexOf(n) >= 0 ? -1 : 1,
              o = "function" == typeof i ? i(Object.assign({}, e, {
            placement: t
          })) : i,
              r = o[0],
              a = o[1];
          return r = r || 0, a = (a || 0) * s, [nt, it].indexOf(n) >= 0 ? {
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
      ie = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(t) {
      var e = t.state,
          i = t.name;
      e.modifiersData[i] = Xt({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
      });
    },
    data: {}
  },
      ne = {
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
          d = i.altBoundary,
          h = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = Yt(e, {
        boundary: l,
        rootBoundary: c,
        padding: h,
        altBoundary: d
      }),
          _ = pt(e.placement),
          b = Kt(e.placement),
          v = !b,
          y = At(_),
          w = "x" === y ? "y" : "x",
          E = e.modifiersData.popperOffsets,
          T = e.rects.reference,
          A = e.rects.popper,
          L = "function" == typeof m ? m(Object.assign({}, e.rects, {
        placement: e.placement
      })) : m,
          O = {
        x: 0,
        y: 0
      };

      if (E) {
        if (o || a) {
          var k = "y" === y ? tt : nt,
              C = "y" === y ? et : it,
              x = "y" === y ? "height" : "width",
              D = E[y],
              N = E[y] + g[k],
              S = E[y] - g[C],
              I = f ? -A[x] / 2 : 0,
              j = "start" === b ? T[x] : A[x],
              P = "start" === b ? -A[x] : -T[x],
              M = e.elements.arrow,
              H = f && M ? gt(M) : {
            width: 0,
            height: 0
          },
              R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
              B = R[k],
              W = R[C],
              q = Ct(0, T[x], H[x]),
              z = v ? T[x] / 2 - I - q - B - L : j - q - B - L,
              U = v ? -T[x] / 2 + I + q + W + L : P + q + W + L,
              $ = e.elements.arrow && Tt(e.elements.arrow),
              F = $ ? "y" === y ? $.clientTop || 0 : $.clientLeft || 0 : 0,
              V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
              K = E[y] + z - V - F,
              X = E[y] + U - V;

          if (o) {
            var Y = Ct(f ? Ot(N, K) : N, D, f ? Lt(S, X) : S);
            E[y] = Y, O[y] = Y - D;
          }

          if (a) {
            var Q = "x" === y ? tt : nt,
                G = "x" === y ? et : it,
                Z = E[w],
                J = Z + g[Q],
                st = Z - g[G],
                ot = Ct(f ? Ot(J, K) : J, Z, f ? Lt(st, X) : st);
            E[w] = ot, O[w] = ot - Z;
          }
        }

        e.modifiersData[n] = O;
      }
    },
    requiresIfExists: ["offset"]
  };

  function se(t, e, i) {
    void 0 === i && (i = !1);
    var n,
        s,
        o = yt(e),
        r = mt(t),
        a = ht(e),
        l = {
      scrollLeft: 0,
      scrollTop: 0
    },
        c = {
      x: 0,
      y: 0
    };
    return (a || !a && !i) && (("body" !== lt(e) || Ut(o)) && (l = (n = e) !== ct(n) && ht(n) ? {
      scrollLeft: (s = n).scrollLeft,
      scrollTop: s.scrollTop
    } : qt(n)), ht(e) ? ((c = mt(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = zt(o))), {
      x: r.left + l.scrollLeft - c.x,
      y: r.top + l.scrollTop - c.y,
      width: r.width,
      height: r.height
    };
  }

  var oe = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function re() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }

  function ae(t) {
    void 0 === t && (t = {});
    var e = t,
        i = e.defaultModifiers,
        n = void 0 === i ? [] : i,
        s = e.defaultOptions,
        o = void 0 === s ? oe : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
          r,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, oe, o),
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
          d = {
        state: a,
        setOptions: function setOptions(i) {
          h(), a.options = Object.assign({}, o, a.options, i), a.scrollParents = {
            reference: dt(t) ? $t(t) : t.contextElement ? $t(t.contextElement) : [],
            popper: $t(e)
          };

          var s,
              r,
              c = function (t) {
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

            return at.reduce(function (t, i) {
              return t.concat(e.filter(function (t) {
                return t.phase === i;
              }));
            }, []);
          }((s = [].concat(n, a.options.modifiers), r = s.reduce(function (t, e) {
            var i = t[e.name];
            return t[e.name] = i ? Object.assign({}, i, e, {
              options: Object.assign({}, i.options, e.options),
              data: Object.assign({}, i.data, e.data)
            }) : e, t;
          }, {}), Object.keys(r).map(function (t) {
            return r[t];
          })));

          return a.orderedModifiers = c.filter(function (t) {
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
                instance: d,
                options: n
              });
              l.push(o || function () {});
            }
          }), d.update();
        },
        forceUpdate: function forceUpdate() {
          if (!c) {
            var t = a.elements,
                e = t.reference,
                i = t.popper;

            if (re(e, i)) {
              a.rects = {
                reference: se(e, Tt(i), "fixed" === a.options.strategy),
                popper: gt(i)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data);
              });

              for (var n = 0; n < a.orderedModifiers.length; n++) {
                if (!0 !== a.reset) {
                  var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      h = s.name;
                  "function" == typeof o && (a = o({
                    state: a,
                    options: l,
                    name: h,
                    instance: d
                  }) || a);
                } else a.reset = !1, n = -1;
              }
            }
          }
        },
        update: (s = function s() {
          return new Promise(function (t) {
            d.forceUpdate(), t(a);
          });
        }, function () {
          return r || (r = new Promise(function (t) {
            Promise.resolve().then(function () {
              r = void 0, t(s());
            });
          })), r;
        }),
        destroy: function destroy() {
          h(), c = !0;
        }
      };
      if (!re(t, e)) return d;

      function h() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }

      return d.setOptions(i).then(function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t);
      }), d;
    };
  }

  var le = ae(),
      ce = ae({
    defaultModifiers: [Mt, ie, jt, ft]
  }),
      de = ae({
    defaultModifiers: [Mt, ie, jt, ft, ee, Gt, ne, Nt, te]
  }),
      he = Object.freeze({
    __proto__: null,
    popperGenerator: ae,
    detectOverflow: Yt,
    createPopperBase: le,
    createPopper: de,
    createPopperLite: ce,
    top: tt,
    bottom: et,
    right: it,
    left: nt,
    auto: "auto",
    basePlacements: st,
    start: "start",
    end: "end",
    clippingParents: "clippingParents",
    viewport: "viewport",
    popper: "popper",
    reference: "reference",
    variationPlacements: ot,
    placements: rt,
    beforeRead: "beforeRead",
    read: "read",
    afterRead: "afterRead",
    beforeMain: "beforeMain",
    main: "main",
    afterMain: "afterMain",
    beforeWrite: "beforeWrite",
    write: "write",
    afterWrite: "afterWrite",
    modifierPhases: at,
    applyStyles: ft,
    arrow: Nt,
    computeStyles: jt,
    eventListeners: Mt,
    flip: Gt,
    hide: te,
    offset: ee,
    popperOffsets: ie,
    preventOverflow: ne
  });

  var ue = new RegExp("ArrowUp|ArrowDown|Escape"),
      fe = _() ? "top-end" : "top-start",
      pe = _() ? "top-start" : "top-end",
      me = _() ? "bottom-end" : "bottom-start",
      ge = _() ? "bottom-start" : "bottom-end",
      _e = _() ? "left-start" : "right-start",
      be = _() ? "right-start" : "left-start",
      ve = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: !0
  },
      ye = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)"
  };

  var we = /*#__PURE__*/function (_R5) {
    _inherits(we, _R5);

    var _super5 = _createSuper(we);

    function we(t, e) {
      var _this12;

      _classCallCheck(this, we);

      _this12 = _super5.call(this, t), _this12._popper = null, _this12._config = _this12._getConfig(e), _this12._menu = _this12._getMenuElement(), _this12._inNavbar = _this12._detectNavbar(), _this12._addEventListeners();
      return _this12;
    }

    _createClass(we, [{
      key: "toggle",
      value: function toggle() {
        u(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show());
      }
    }, {
      key: "show",
      value: function show() {
        if (u(this._element) || this._menu.classList.contains("show")) return;
        var t = we.getParentFromElement(this._element),
            e = {
          relatedTarget: this._element
        };

        if (!H.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
          var _ref3;

          if (this._inNavbar) U.setDataAttribute(this._menu, "popper", "none");else {
            if (void 0 === he) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            var _e7 = this._element;
            "parent" === this._config.reference ? _e7 = t : a(this._config.reference) ? _e7 = l(this._config.reference) : "object" == _typeof(this._config.reference) && (_e7 = this._config.reference);

            var _i10 = this._getPopperConfig(),
                _n4 = _i10.modifiers.find(function (t) {
              return "applyStyles" === t.name && !1 === t.enabled;
            });

            this._popper = de(_e7, this._menu, _i10), _n4 && U.setDataAttribute(this._menu, "popper", "static");
          }
          "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (_ref3 = []).concat.apply(_ref3, _toConsumableArray(document.body.children)).forEach(function (t) {
            return H.on(t, "mouseover", p);
          }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), H.trigger(this._element, "shown.bs.dropdown", e);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (u(this._element) || !this._menu.classList.contains("show")) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(we.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this13 = this;

        H.on(this._element, "click.bs.dropdown", function (t) {
          t.preventDefault(), _this13.toggle();
        });
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        var _ref4;

        H.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (t) {
          return H.off(t, "mouseover", p);
        }), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), H.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), U.getDataAttributes(this._element)), t), d("dropdown", t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !a(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
        return t;
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return t.next(this._element, ".dropdown-menu")[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return _e;
        if (t.classList.contains("dropstart")) return be;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? pe : fe : e ? ge : me;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this14 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this14._element);
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
      value: function _selectMenuItem(e) {
        var i = t.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(h);
        if (!i.length) return;
        var n = i.indexOf(e.target);
        "ArrowUp" === e.key && n > 0 && n--, "ArrowDown" === e.key && n < i.length - 1 && n++, n = -1 === n ? 0 : n, i[n].focus();
      }
    }], [{
      key: "dropdownInterface",
      value: function dropdownInterface(t, e) {
        var i = w.get(t, "bs.dropdown");

        if (i || (i = new we(t, "object" == _typeof(e) ? e : null)), "string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError("No method named \"".concat(e, "\""));
          i[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          we.dropdownInterface(this, t);
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(e) {
        if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
        var i = t.find('[data-bs-toggle="dropdown"]');

        for (var _t9 = 0, _n5 = i.length; _t9 < _n5; _t9++) {
          var _n6 = w.get(i[_t9], "bs.dropdown");

          if (!_n6 || !1 === _n6._config.autoClose) continue;
          if (!_n6._element.classList.contains("show")) continue;
          var _s2 = {
            relatedTarget: _n6._element
          };

          if (e) {
            var _t10 = e.composedPath(),
                _i11 = _t10.includes(_n6._menu);

            if (_t10.includes(_n6._element) || "inside" === _n6._config.autoClose && !_i11 || "outside" === _n6._config.autoClose && _i11) continue;
            if (_n6._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
            "click" === e.type && (_s2.clickEvent = e);
          }

          _n6._completeHide(_s2);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(t) {
        return s(t) || t.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(e) {
        var _this15 = this;

        if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(".dropdown-menu")) : !ue.test(e.key)) return;
        var i = this.classList.contains("show");
        if (!i && "Escape" === e.key) return;
        if (e.preventDefault(), e.stopPropagation(), u(this)) return;

        var n = function n() {
          return _this15.matches('[data-bs-toggle="dropdown"]') ? _this15 : t.prev(_this15, '[data-bs-toggle="dropdown"]')[0];
        };

        if ("Escape" === e.key) return n().focus(), void we.clearMenus();
        i || "ArrowUp" !== e.key && "ArrowDown" !== e.key ? i && "Space" !== e.key ? we.getInstance(n())._selectMenuItem(e) : we.clearMenus() : n().click();
      }
    }, {
      key: "Default",
      get: function get() {
        return ve;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ye;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "dropdown";
      }
    }]);

    return we;
  }(R);

  H.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', we.dataApiKeydownHandler), H.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", we.dataApiKeydownHandler), H.on(document, "click.bs.dropdown.data-api", we.clearMenus), H.on(document, "keyup.bs.dropdown.data-api", we.clearMenus), H.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    t.preventDefault(), we.dropdownInterface(this);
  }), b(we);

  var Ee = function Ee() {
    var t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  },
      Te = function Te() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Ee();
    Ae(), Le("body", "paddingRight", function (e) {
      return e + t;
    }), Le(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", function (e) {
      return e + t;
    }), Le(".sticky-top", "marginRight", function (e) {
      return e - t;
    });
  },
      Ae = function Ae() {
    var t = document.body.style.overflow;
    t && U.setDataAttribute(document.body, "overflow", t), document.body.style.overflow = "hidden";
  },
      Le = function Le(e, i, n) {
    var s = Ee();
    t.find(e).forEach(function (t) {
      if (t !== document.body && window.innerWidth > t.clientWidth + s) return;
      var e = t.style[i],
          o = window.getComputedStyle(t)[i];
      U.setDataAttribute(t, i, e), t.style[i] = n(Number.parseFloat(o)) + "px";
    });
  },
      Oe = function Oe() {
    ke("body", "overflow"), ke("body", "paddingRight"), ke(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), ke(".sticky-top", "marginRight");
  },
      ke = function ke(e, i) {
    t.find(e).forEach(function (t) {
      var e = U.getDataAttribute(t, i);
      void 0 === e ? t.style.removeProperty(i) : (U.removeDataAttribute(t, i), t.style[i] = e);
    });
  },
      Ce = {
    isVisible: !0,
    isAnimated: !1,
    rootElement: document.body,
    clickCallback: null
  },
      xe = {
    isVisible: "boolean",
    isAnimated: "boolean",
    rootElement: "element",
    clickCallback: "(function|null)"
  };

  var De = /*#__PURE__*/function () {
    function De(t) {
      _classCallCheck(this, De);

      this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
    }

    _createClass(De, [{
      key: "show",
      value: function show(t) {
        this._config.isVisible ? (this._append(), this._config.isAnimated && m(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(function () {
          v(t);
        })) : v(t);
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this16 = this;

        this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(function () {
          _this16.dispose(), v(t);
        })) : v(t);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t11 = document.createElement("div");

          _t11.className = "modal-backdrop", this._config.isAnimated && _t11.classList.add("fade"), this._element = _t11;
        }

        return this._element;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread({}, Ce), "object" == _typeof(t) ? t : {})).rootElement = t.rootElement || document.body, d("backdrop", t, xe), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this17 = this;

        this._isAppended || (this._config.rootElement.appendChild(this._getElement()), H.on(this._getElement(), "mousedown.bs.backdrop", function () {
          v(_this17._config.clickCallback);
        }), this._isAppended = !0);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (H.off(this._element, "mousedown.bs.backdrop"), this._getElement().parentNode.removeChild(this._element), this._isAppended = !1);
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        if (!this._config.isAnimated) return void v(t);
        var e = o(this._getElement());
        H.one(this._getElement(), "transitionend", function () {
          return v(t);
        }), c(this._getElement(), e);
      }
    }]);

    return De;
  }();

  var Ne = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      Se = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  };

  var Ie = /*#__PURE__*/function (_R6) {
    _inherits(Ie, _R6);

    var _super6 = _createSuper(Ie);

    function Ie(e, i) {
      var _this18;

      _classCallCheck(this, Ie);

      _this18 = _super6.call(this, e), _this18._config = _this18._getConfig(i), _this18._dialog = t.findOne(".modal-dialog", _this18._element), _this18._backdrop = _this18._initializeBackDrop(), _this18._isShown = !1, _this18._ignoreBackdropClick = !1, _this18._isTransitioning = !1;
      return _this18;
    }

    _createClass(Ie, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this19 = this;

        if (this._isShown || this._isTransitioning) return;
        this._isAnimated() && (this._isTransitioning = !0);
        var e = H.trigger(this._element, "show.bs.modal", {
          relatedTarget: t
        });
        this._isShown || e.defaultPrevented || (this._isShown = !0, Te(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), H.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', function (t) {
          return _this19.hide(t);
        }), H.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
          H.one(_this19._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === _this19._element && (_this19._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return _this19._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this20 = this;

        if (t && t.preventDefault(), !this._isShown || this._isTransitioning) return;
        if (H.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;

        var e = this._isAnimated();

        e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), H.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), H.off(this._element, "click.dismiss.bs.modal"), H.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(function () {
          return _this20._hideModal();
        }, this._element, e);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._dialog].forEach(function (t) {
          return H.off(t, ".bs.modal");
        }), this._backdrop.dispose(), _get(_getPrototypeOf(Ie.prototype), "dispose", this).call(this), H.off(document, "focusin.bs.modal");
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new De({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Ne), U.getDataAttributes(this._element)), t), d("modal", t, Se), t;
      }
    }, {
      key: "_showElement",
      value: function _showElement(e) {
        var _this21 = this;

        var i = this._isAnimated(),
            n = t.findOne(".modal-body", this._dialog);

        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), i && m(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(function () {
          _this21._config.focus && _this21._element.focus(), _this21._isTransitioning = !1, H.trigger(_this21._element, "shown.bs.modal", {
            relatedTarget: e
          });
        }, this._dialog, i);
      }
    }, {
      key: "_enforceFocus",
      value: function _enforceFocus() {
        var _this22 = this;

        H.off(document, "focusin.bs.modal"), H.on(document, "focusin.bs.modal", function (t) {
          document === t.target || _this22._element === t.target || _this22._element.contains(t.target) || _this22._element.focus();
        });
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this23 = this;

        this._isShown ? H.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          _this23._config.keyboard && "Escape" === t.key ? (t.preventDefault(), _this23.hide()) : _this23._config.keyboard || "Escape" !== t.key || _this23._triggerBackdropTransition();
        }) : H.off(this._element, "keydown.dismiss.bs.modal");
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this24 = this;

        this._isShown ? H.on(window, "resize.bs.modal", function () {
          return _this24._adjustDialog();
        }) : H.off(window, "resize.bs.modal");
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this25 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove("modal-open"), _this25._resetAdjustments(), Oe(), H.trigger(_this25._element, "hidden.bs.modal");
        });
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(t) {
        var _this26 = this;

        H.on(this._element, "click.dismiss.bs.modal", function (t) {
          _this26._ignoreBackdropClick ? _this26._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === _this26._config.backdrop ? _this26.hide() : "static" === _this26._config.backdrop && _this26._triggerBackdropTransition());
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
        var _this27 = this;

        if (H.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
        var e = o(this._dialog);
        H.off(this._element, "transitionend"), H.one(this._element, "transitionend", function () {
          _this27._element.classList.remove("modal-static"), t || (H.one(_this27._element, "transitionend", function () {
            _this27._element.style.overflowY = "";
          }), c(_this27._element, e));
        }), c(this._element, e), this._element.focus();
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = Ee(),
            i = e > 0;
        (!i && t && !_() || i && !t && _()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !_() || !i && t && _()) && (this._element.style.paddingRight = e + "px");
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = Ie.getInstance(this) || new Ie(this, "object" == _typeof(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ne;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }]);

    return Ie;
  }(R);

  H.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this28 = this;

    var e = s(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), H.one(e, "show.bs.modal", function (t) {
      t.defaultPrevented || H.one(e, "hidden.bs.modal", function () {
        h(_this28) && _this28.focus();
      });
    }), (Ie.getInstance(e) || new Ie(e)).toggle(this);
  }), b(Ie);
  var je = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      Pe = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var Me = /*#__PURE__*/function (_R7) {
    _inherits(Me, _R7);

    var _super7 = _createSuper(Me);

    function Me(t, e) {
      var _this29;

      _classCallCheck(this, Me);

      _this29 = _super7.call(this, t), _this29._config = _this29._getConfig(e), _this29._isShown = !1, _this29._backdrop = _this29._initializeBackDrop(), _this29._addEventListeners();
      return _this29;
    }

    _createClass(Me, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this30 = this;

        this._isShown || H.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (Te(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(function () {
          H.trigger(_this30._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this31 = this;

        this._isShown && (H.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (H.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(function () {
          _this31._element.setAttribute("aria-hidden", !0), _this31._element.removeAttribute("aria-modal"), _this31._element.removeAttribute("role"), _this31._element.style.visibility = "hidden", _this31._config.scroll || Oe(), H.trigger(_this31._element, "hidden.bs.offcanvas");
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), _get(_getPrototypeOf(Me.prototype), "dispose", this).call(this), H.off(document, "focusin.bs.offcanvas");
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, je), U.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), d("offcanvas", t, Pe), t;
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this32 = this;

        return new De({
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: function clickCallback() {
            return _this32.hide();
          }
        });
      }
    }, {
      key: "_enforceFocusOnElement",
      value: function _enforceFocusOnElement(t) {
        H.off(document, "focusin.bs.offcanvas"), H.on(document, "focusin.bs.offcanvas", function (e) {
          document === e.target || t === e.target || t.contains(e.target) || t.focus();
        }), t.focus();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this33 = this;

        H.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', function () {
          return _this33.hide();
        }), H.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          _this33._config.keyboard && "Escape" === t.key && _this33.hide();
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.offcanvas") || new Me(this, "object" == _typeof(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }, {
      key: "Default",
      get: function get() {
        return je;
      }
    }]);

    return Me;
  }(R);

  H.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (e) {
    var _this34 = this;

    var i = s(this);
    if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this)) return;
    H.one(i, "hidden.bs.offcanvas", function () {
      h(_this34) && _this34.focus();
    });
    var n = t.findOne(".offcanvas.show");
    n && n !== i && Me.getInstance(n).hide(), (w.get(i, "bs.offcanvas") || new Me(i)).toggle(this);
  }), H.on(window, "load.bs.offcanvas.data-api", function () {
    t.find(".offcanvas.show").forEach(function (t) {
      return (w.get(t, "bs.offcanvas") || new Me(t)).show();
    });
  }), b(Me);

  var He = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      Re = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      Be = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      We = function We(t, e) {
    var i = t.nodeName.toLowerCase();
    if (e.includes(i)) return !He.has(i) || Boolean(Re.test(t.nodeValue) || Be.test(t.nodeValue));
    var n = e.filter(function (t) {
      return t instanceof RegExp;
    });

    for (var _t12 = 0, _e8 = n.length; _t12 < _e8; _t12++) {
      if (n[_t12].test(i)) return !0;
    }

    return !1;
  };

  function qe(t, e, i) {
    var _ref5;

    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);

    var n = new window.DOMParser().parseFromString(t, "text/html"),
        s = Object.keys(e),
        o = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(n.body.querySelectorAll("*")));

    var _loop = function _loop(_t13, _i12) {
      var _ref6;

      var i = o[_t13],
          n = i.nodeName.toLowerCase();

      if (!s.includes(n)) {
        i.parentNode.removeChild(i);
        return "continue";
      }

      var r = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(i.attributes)),
          a = [].concat(e["*"] || [], e[n] || []);

      r.forEach(function (t) {
        We(t, a) || i.removeAttribute(t.nodeName);
      });
    };

    for (var _t13 = 0, _i12 = o.length; _t13 < _i12; _t13++) {
      var _ret = _loop(_t13, _i12);

      if (_ret === "continue") continue;
    }

    return n.body.innerHTML;
  }

  var ze = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Ue = new Set(["sanitize", "allowList", "sanitizeFn"]),
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
      Fe = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: _() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: _() ? "right" : "left"
  },
      Ve = {
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
      Ke = {
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

  var Xe = /*#__PURE__*/function (_R8) {
    _inherits(Xe, _R8);

    var _super8 = _createSuper(Xe);

    function Xe(t, e) {
      var _this35;

      _classCallCheck(this, Xe);

      if (void 0 === he) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this35 = _super8.call(this, t), _this35._isEnabled = !0, _this35._timeout = 0, _this35._hoverState = "", _this35._activeTrigger = {}, _this35._popper = null, _this35._config = _this35._getConfig(e), _this35.tip = null, _this35._setListeners();
      return _this35;
    }

    _createClass(Xe, [{
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
          var _e9 = this._initializeOnDelegatedTarget(t);

          _e9._activeTrigger.click = !_e9._activeTrigger.click, _e9._isWithActiveTrigger() ? _e9._enter(null, _e9) : _e9._leave(null, _e9);
        } else {
          if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), H.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._popper && this._popper.destroy(), _get(_getPrototypeOf(Xe.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _s$classList,
            _ref7,
            _this36 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        var t = H.trigger(this._element, this.constructor.Event.SHOW),
            i = f(this._element),
            n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
        if (t.defaultPrevented || !n) return;
        var s = this.getTipElement(),
            o = e(this.constructor.NAME);
        s.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this.setContent(), this._config.animation && s.classList.add("fade");

        var r = "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement,
            a = this._getAttachment(r);

        this._addAttachmentClass(a);

        var l = this._config.container;
        w.set(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.appendChild(s), H.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = de(this._element, s, this._getPopperConfig(a)), s.classList.add("show");
        var c = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
        c && (_s$classList = s.classList).add.apply(_s$classList, _toConsumableArray(c.split(" "))), "ontouchstart" in document.documentElement && (_ref7 = []).concat.apply(_ref7, _toConsumableArray(document.body.children)).forEach(function (t) {
          H.on(t, "mouseover", p);
        });
        var d = this.tip.classList.contains("fade");

        this._queueCallback(function () {
          var t = _this36._hoverState;
          _this36._hoverState = null, H.trigger(_this36._element, _this36.constructor.Event.SHOWN), "out" === t && _this36._leave(null, _this36);
        }, this.tip, d);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _ref8,
            _this37 = this;

        if (!this._popper) return;
        var t = this.getTipElement();
        if (H.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
        t.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref8 = []).concat.apply(_ref8, _toConsumableArray(document.body.children)).forEach(function (t) {
          return H.off(t, "mouseover", p);
        }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
        var e = this.tip.classList.contains("fade");
        this._queueCallback(function () {
          _this37._isWithActiveTrigger() || ("show" !== _this37._hoverState && t.parentNode && t.parentNode.removeChild(t), _this37._cleanTipClass(), _this37._element.removeAttribute("aria-describedby"), H.trigger(_this37._element, _this37.constructor.Event.HIDDEN), _this37._popper && (_this37._popper.destroy(), _this37._popper = null));
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
        return t.innerHTML = this._config.template, this.tip = t.children[0], this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var e = this.getTipElement();
        this.setElementContent(t.findOne(".tooltip-inner", e), this.getTitle()), e.classList.remove("fade", "show");
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(t, e) {
        if (null !== t) return a(e) ? (e = l(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = qe(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var t = this._element.getAttribute("data-bs-original-title");

        return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t;
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t, e) {
        var i = this.constructor.DATA_KEY;
        return (e = e || w.get(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), w.set(t.delegateTarget, i, e)), e;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this38 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this38._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this39 = this;

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
              return _this39._handlePopperPlacementChange(t);
            }
          }],
          onFirstUpdate: function onFirstUpdate(t) {
            t.options.placement !== t.placement && _this39._handlePopperPlacementChange(t);
          }
        };
        return _objectSpread(_objectSpread({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t));
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(t) {
        return Fe[t.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this40 = this;

        this._config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) H.on(_this40._element, _this40.constructor.Event.CLICK, _this40._config.selector, function (t) {
            return _this40.toggle(t);
          });else if ("manual" !== t) {
            var _e10 = "hover" === t ? _this40.constructor.Event.MOUSEENTER : _this40.constructor.Event.FOCUSIN,
                _i13 = "hover" === t ? _this40.constructor.Event.MOUSELEAVE : _this40.constructor.Event.FOCUSOUT;

            H.on(_this40._element, _e10, _this40._config.selector, function (t) {
              return _this40._enter(t);
            }), H.on(_this40._element, _i13, _this40._config.selector, function (t) {
              return _this40._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          _this40._element && _this40.hide();
        }, H.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = _objectSpread(_objectSpread({}, this._config), {}, {
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
        for (var _t14 in this._activeTrigger) {
          if (this._activeTrigger[_t14]) return !0;
        }

        return !1;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = U.getDataAttributes(this._element);
        return Object.keys(e).forEach(function (t) {
          Ue.has(t) && delete e[t];
        }), (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), e), "object" == _typeof(t) && t ? t : {})).container = !1 === t.container ? document.body : l(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), d("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = qe(t.template, t.allowList, t.sanitizeFn)), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};
        if (this._config) for (var _e11 in this._config) {
          this.constructor.Default[_e11] !== this._config[_e11] && (t[_e11] = this._config[_e11]);
        }
        return t;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(ze);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.tooltip");
          var i = "object" == _typeof(t) && t;

          if ((e || !/dispose|hide/.test(t)) && (e || (e = new Xe(this, i)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ve;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "Event",
      get: function get() {
        return Ke;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return $e;
      }
    }]);

    return Xe;
  }(R);

  b(Xe);

  var Ye = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Qe = _objectSpread(_objectSpread({}, Xe.Default), {}, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Ge = _objectSpread(_objectSpread({}, Xe.DefaultType), {}, {
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

  var Je = /*#__PURE__*/function (_Xe) {
    _inherits(Je, _Xe);

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
      value: function setContent() {
        var e = this.getTipElement();
        this.setElementContent(t.findOne(".popover-header", e), this.getTitle());

        var i = this._getContent();

        "function" == typeof i && (i = i.call(this._element)), this.setElementContent(t.findOne(".popover-body", e), i), e.classList.remove("fade", "show");
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t));
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._element.getAttribute("data-bs-content") || this._config.content;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(Ye);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.popover");
          var i = "object" == _typeof(t) ? t : null;

          if ((e || !/dispose|hide/.test(t)) && (e || (e = new Je(this, i), w.set(this, "bs.popover", e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
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
    }]);

    return Je;
  }(Xe);

  b(Je);
  var ti = {
    offset: 10,
    method: "auto",
    target: ""
  },
      ei = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  };

  var ii = /*#__PURE__*/function (_R9) {
    _inherits(ii, _R9);

    var _super10 = _createSuper(ii);

    function ii(t, e) {
      var _this41;

      _classCallCheck(this, ii);

      _this41 = _super10.call(this, t), _this41._scrollElement = "BODY" === _this41._element.tagName ? window : _this41._element, _this41._config = _this41._getConfig(e), _this41._selector = "".concat(_this41._config.target, " .nav-link, ").concat(_this41._config.target, " .list-group-item, ").concat(_this41._config.target, " .dropdown-item"), _this41._offsets = [], _this41._targets = [], _this41._activeTarget = null, _this41._scrollHeight = 0, H.on(_this41._scrollElement, "scroll.bs.scrollspy", function () {
        return _this41._process();
      }), _this41.refresh(), _this41._process();
      return _this41;
    }

    _createClass(ii, [{
      key: "refresh",
      value: function refresh() {
        var _this42 = this;

        var e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            i = "auto" === this._config.method ? e : this._config.method,
            s = "position" === i ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.find(this._selector).map(function (e) {
          var o = n(e),
              r = o ? t.findOne(o) : null;

          if (r) {
            var _t15 = r.getBoundingClientRect();

            if (_t15.width || _t15.height) return [U[i](r).top + s, o];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          _this42._offsets.push(t[0]), _this42._targets.push(t[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        H.off(this._scrollElement, ".bs.scrollspy"), _get(_getPrototypeOf(ii.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("string" != typeof (t = _objectSpread(_objectSpread(_objectSpread({}, ti), U.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {})).target && a(t.target)) {
          var _i14 = t.target.id;
          _i14 || (_i14 = e("scrollspy"), t.target.id = _i14), t.target = "#" + _i14;
        }

        return d("scrollspy", t, ei), t;
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
          var _t16 = this._targets[this._targets.length - 1];
          this._activeTarget !== _t16 && this._activate(_t16);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var _e12 = this._offsets.length; _e12--;) {
            this._activeTarget !== this._targets[_e12] && t >= this._offsets[_e12] && (void 0 === this._offsets[_e12 + 1] || t < this._offsets[_e12 + 1]) && this._activate(this._targets[_e12]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(e) {
        this._activeTarget = e, this._clear();

        var i = this._selector.split(",").map(function (t) {
          return "".concat(t, "[data-bs-target=\"").concat(e, "\"],").concat(t, "[href=\"").concat(e, "\"]");
        }),
            n = t.findOne(i.join(","));

        n.classList.contains("dropdown-item") ? (t.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), t.parents(n, ".nav, .list-group").forEach(function (e) {
          t.prev(e, ".nav-link, .list-group-item").forEach(function (t) {
            return t.classList.add("active");
          }), t.prev(e, ".nav-item").forEach(function (e) {
            t.children(e, ".nav-link").forEach(function (t) {
              return t.classList.add("active");
            });
          });
        })), H.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: e
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        t.find(this._selector).filter(function (t) {
          return t.classList.contains("active");
        }).forEach(function (t) {
          return t.classList.remove("active");
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ii.getInstance(this) || new ii(this, "object" == _typeof(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return ti;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }]);

    return ii;
  }(R);

  H.on(window, "load.bs.scrollspy.data-api", function () {
    t.find('[data-bs-spy="scroll"]').forEach(function (t) {
      return new ii(t);
    });
  }), b(ii);

  var ni = /*#__PURE__*/function (_R10) {
    _inherits(ni, _R10);

    var _super11 = _createSuper(ni);

    function ni() {
      _classCallCheck(this, ni);

      return _super11.apply(this, arguments);
    }

    _createClass(ni, [{
      key: "show",
      value: function show() {
        var _this43 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
        var e;

        var i = s(this._element),
            n = this._element.closest(".nav, .list-group");

        if (n) {
          var _i15 = "UL" === n.nodeName || "OL" === n.nodeName ? ":scope > li > .active" : ".active";

          e = t.find(_i15, n), e = e[e.length - 1];
        }

        var o = e ? H.trigger(e, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if (H.trigger(this._element, "show.bs.tab", {
          relatedTarget: e
        }).defaultPrevented || null !== o && o.defaultPrevented) return;

        this._activate(this._element, n);

        var r = function r() {
          H.trigger(e, "hidden.bs.tab", {
            relatedTarget: _this43._element
          }), H.trigger(_this43._element, "shown.bs.tab", {
            relatedTarget: e
          });
        };

        i ? this._activate(i, i.parentNode, r) : r();
      }
    }, {
      key: "_activate",
      value: function _activate(e, i, n) {
        var _this44 = this;

        var s = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? t.children(i, ".active") : t.find(":scope > li > .active", i))[0],
            o = n && s && s.classList.contains("fade"),
            r = function r() {
          return _this44._transitionComplete(e, s, n);
        };

        s && o ? (s.classList.remove("show"), this._queueCallback(r, e, !0)) : r();
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(e, i, n) {
        if (i) {
          i.classList.remove("active");

          var _e13 = t.findOne(":scope > .dropdown-menu .active", i.parentNode);

          _e13 && _e13.classList.remove("active"), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1);
        }

        e.classList.add("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), m(e), e.classList.contains("fade") && e.classList.add("show");
        var s = e.parentNode;

        if (s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu")) {
          var _i16 = e.closest(".dropdown");

          _i16 && t.find(".dropdown-toggle", _i16).forEach(function (t) {
            return t.classList.add("active");
          }), e.setAttribute("aria-expanded", !0);
        }

        n && n();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.tab") || new ni(this);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }]);

    return ni;
  }(R);

  H.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), u(this) || (w.get(this, "bs.tab") || new ni(this)).show();
  }), b(ni);
  var si = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      oi = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var ri = /*#__PURE__*/function (_R11) {
    _inherits(ri, _R11);

    var _super12 = _createSuper(ri);

    function ri(t, e) {
      var _this45;

      _classCallCheck(this, ri);

      _this45 = _super12.call(this, t), _this45._config = _this45._getConfig(e), _this45._timeout = null, _this45._hasMouseInteraction = !1, _this45._hasKeyboardInteraction = !1, _this45._setListeners();
      return _this45;
    }

    _createClass(ri, [{
      key: "show",
      value: function show() {
        var _this46 = this;

        H.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), m(this._element), this._element.classList.add("showing"), this._queueCallback(function () {
          _this46._element.classList.remove("showing"), _this46._element.classList.add("show"), H.trigger(_this46._element, "shown.bs.toast"), _this46._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this47 = this;

        this._element.classList.contains("show") && (H.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(function () {
          _this47._element.classList.add("hide"), H.trigger(_this47._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), _get(_getPrototypeOf(ri.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, oi), U.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {}), d("toast", t, this.constructor.DefaultType), t;
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this48 = this;

        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this48.hide();
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
        var _this49 = this;

        H.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', function () {
          return _this49.hide();
        }), H.on(this._element, "mouseover.bs.toast", function (t) {
          return _this49._onInteraction(t, !0);
        }), H.on(this._element, "mouseout.bs.toast", function (t) {
          return _this49._onInteraction(t, !1);
        }), H.on(this._element, "focusin.bs.toast", function (t) {
          return _this49._onInteraction(t, !0);
        }), H.on(this._element, "focusout.bs.toast", function (t) {
          return _this49._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.toast");

          if (e || (e = new ri(this, "object" == _typeof(t) && t)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return si;
      }
    }, {
      key: "Default",
      get: function get() {
        return oi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }]);

    return ri;
  }(R);

  return b(ri), {
    Alert: B,
    Button: W,
    Carousel: Q,
    Collapse: J,
    Dropdown: we,
    Modal: Ie,
    Offcanvas: Me,
    Popover: Je,
    ScrollSpy: ii,
    Tab: ni,
    Toast: ri,
    Tooltip: Xe
  };
});
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).IMask = {});
}(this, function (t) {
  "use strict";

  var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function n(t) {
    var e = {
      exports: {}
    };
    return t(e, e.exports), e.exports;
  }

  var u = function u(t) {
    return t && t.Math == Math && t;
  },
      r = u("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) || u("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) || u("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) || u("object" == _typeof(e) && e) || function () {
    return this;
  }() || Function("return this")(),
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
      s = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      l = {
    f: o && !s.call({
      1: 2
    }, 1) ? function (t) {
      var e = o(this, t);
      return !!e && e.enumerable;
    } : s
  },
      h = function h(t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    };
  },
      c = {}.toString,
      f = "".split,
      p = i(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (t) {
    return "String" == function (t) {
      return c.call(t).slice(8, -1);
    }(t) ? f.call(t, "") : Object(t);
  } : Object,
      d = function d(t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t;
  },
      v = function v(t) {
    return p(d(t));
  },
      k = function k(t) {
    return "object" == _typeof(t) ? null !== t : "function" == typeof t;
  },
      g = function g(t, e) {
    if (!k(t)) return t;
    var n, u;
    if (e && "function" == typeof (n = t.toString) && !k(u = n.call(t))) return u;
    if ("function" == typeof (n = t.valueOf) && !k(u = n.call(t))) return u;
    if (!e && "function" == typeof (n = t.toString) && !k(u = n.call(t))) return u;
    throw TypeError("Can't convert object to primitive value");
  },
      y = {}.hasOwnProperty,
      m = function m(t, e) {
    return y.call(t, e);
  },
      _ = r.document,
      A = k(_) && k(_.createElement),
      b = !a && !i(function () {
    return 7 != Object.defineProperty((t = "div", A ? _.createElement(t) : {}), "a", {
      get: function get() {
        return 7;
      }
    }).a;
    var t;
  }),
      C = Object.getOwnPropertyDescriptor,
      E = {
    f: a ? C : function (t, e) {
      if (t = v(t), e = g(e, !0), b) try {
        return C(t, e);
      } catch (t) {}
      if (m(t, e)) return h(!l.f.call(t, e), t[e]);
    }
  },
      F = function F(t) {
    if (!k(t)) throw TypeError(String(t) + " is not an object");
    return t;
  },
      S = Object.defineProperty,
      D = {
    f: a ? S : function (t, e, n) {
      if (F(t), e = g(e, !0), F(n), b) try {
        return S(t, e, n);
      } catch (t) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
      return "value" in n && (t[e] = n.value), t;
    }
  },
      B = a ? function (t, e, n) {
    return D.f(t, e, h(1, n));
  } : function (t, e, n) {
    return t[e] = n, t;
  },
      w = function w(t, e) {
    try {
      B(r, t, e);
    } catch (n) {
      r[t] = e;
    }

    return e;
  },
      M = "__core-js_shared__",
      x = r[M] || w(M, {}),
      P = Function.toString;

  "function" != typeof x.inspectSource && (x.inspectSource = function (t) {
    return P.call(t);
  });
  var O,
      T,
      I,
      j,
      V = x.inspectSource,
      R = r.WeakMap,
      L = "function" == typeof R && /native code/.test(V(R)),
      N = n(function (t) {
    (t.exports = function (t, e) {
      return x[t] || (x[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.8.3",
      mode: "global",
      copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    });
  }),
      U = 0,
      z = Math.random(),
      H = N("keys"),
      Y = {},
      Z = r.WeakMap;

  if (L) {
    var K = x.state || (x.state = new Z()),
        G = K.get,
        W = K.has,
        $ = K.set;
    O = function O(t, e) {
      return e.facade = t, $.call(K, t, e), e;
    }, T = function T(t) {
      return G.call(K, t) || {};
    }, I = function I(t) {
      return W.call(K, t);
    };
  } else {
    var q = H[j = "state"] || (H[j] = function (t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++U + z).toString(36);
    }(j));

    Y[q] = !0, O = function O(t, e) {
      return e.facade = t, B(t, q, e), e;
    }, T = function T(t) {
      return m(t, q) ? t[q] : {};
    }, I = function I(t) {
      return m(t, q);
    };
  }

  var X = {
    set: O,
    get: T,
    has: I,
    enforce: function enforce(t) {
      return I(t) ? T(t) : O(t, {});
    },
    getterFor: function getterFor(t) {
      return function (e) {
        var n;
        if (!k(e) || (n = T(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
        return n;
      };
    }
  },
      J = n(function (t) {
    var e = X.get,
        n = X.enforce,
        u = String(String).split("String");
    (t.exports = function (t, e, i, a) {
      var s,
          o = !!a && !!a.unsafe,
          l = !!a && !!a.enumerable,
          h = !!a && !!a.noTargetGet;
      "function" == typeof i && ("string" != typeof e || m(i, "name") || B(i, "name", e), (s = n(i)).source || (s.source = u.join("string" == typeof e ? e : ""))), t !== r ? (o ? !h && t[e] && (l = !0) : delete t[e], l ? t[e] = i : B(t, e, i)) : l ? t[e] = i : w(e, i);
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && e(this).source || V(this);
    });
  }),
      Q = r,
      tt = function tt(t) {
    return "function" == typeof t ? t : void 0;
  },
      et = function et(t, e) {
    return arguments.length < 2 ? tt(Q[t]) || tt(r[t]) : Q[t] && Q[t][e] || r[t] && r[t][e];
  },
      nt = Math.ceil,
      ut = Math.floor,
      rt = function rt(t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? ut : nt)(t);
  },
      it = Math.min,
      at = function at(t) {
    return t > 0 ? it(rt(t), 9007199254740991) : 0;
  },
      st = Math.max,
      ot = Math.min,
      lt = function lt(t) {
    return function (e, n, u) {
      var r,
          i = v(e),
          a = at(i.length),
          s = function (t, e) {
        var n = rt(t);
        return n < 0 ? st(n + e, 0) : ot(n, e);
      }(u, a);

      if (t && n != n) {
        for (; a > s;) {
          if ((r = i[s++]) != r) return !0;
        }
      } else for (; a > s; s++) {
        if ((t || s in i) && i[s] === n) return t || s || 0;
      }

      return !t && -1;
    };
  },
      ht = {
    includes: lt(!0),
    indexOf: lt(!1)
  }.indexOf,
      ct = function ct(t, e) {
    var n,
        u = v(t),
        r = 0,
        i = [];

    for (n in u) {
      !m(Y, n) && m(u, n) && i.push(n);
    }

    for (; e.length > r;) {
      m(u, n = e[r++]) && (~ht(i, n) || i.push(n));
    }

    return i;
  },
      ft = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
      pt = ft.concat("length", "prototype"),
      dt = {
    f: Object.getOwnPropertyNames || function (t) {
      return ct(t, pt);
    }
  },
      vt = {
    f: Object.getOwnPropertySymbols
  },
      kt = et("Reflect", "ownKeys") || function (t) {
    var e = dt.f(F(t)),
        n = vt.f;
    return n ? e.concat(n(t)) : e;
  },
      gt = function gt(t, e) {
    for (var n = kt(e), u = D.f, r = E.f, i = 0; i < n.length; i++) {
      var a = n[i];
      m(t, a) || u(t, a, r(e, a));
    }
  },
      yt = /#|\.prototype\./,
      mt = function mt(t, e) {
    var n = At[_t(t)];

    return n == Ct || n != bt && ("function" == typeof e ? i(e) : !!e);
  },
      _t = mt.normalize = function (t) {
    return String(t).replace(yt, ".").toLowerCase();
  },
      At = mt.data = {},
      bt = mt.NATIVE = "N",
      Ct = mt.POLYFILL = "P",
      Et = mt,
      Ft = E.f,
      St = function St(t, e) {
    var n,
        u,
        i,
        a,
        s,
        o = t.target,
        l = t.global,
        h = t.stat;
    if (n = l ? r : h ? r[o] || w(o, {}) : (r[o] || {}).prototype) for (u in e) {
      if (a = e[u], i = t.noTargetGet ? (s = Ft(n, u)) && s.value : n[u], !Et(l ? u : o + (h ? "." : "#") + u, t.forced) && void 0 !== i) {
        if (_typeof(a) == _typeof(i)) continue;
        gt(a, i);
      }

      (t.sham || i && i.sham) && B(a, "sham", !0), J(n, u, a, t);
    }
  },
      Dt = Object.keys || function (t) {
    return ct(t, ft);
  },
      Bt = function Bt(t) {
    return Object(d(t));
  },
      wt = Object.assign,
      Mt = Object.defineProperty,
      xt = !wt || i(function () {
    if (a && 1 !== wt({
      b: 1
    }, wt(Mt({}, "a", {
      enumerable: !0,
      get: function get() {
        Mt(this, "b", {
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
        u = "abcdefghijklmnopqrst";
    return t[n] = 7, u.split("").forEach(function (t) {
      e[t] = t;
    }), 7 != wt({}, t)[n] || Dt(wt({}, e)).join("") != u;
  }) ? function (t, e) {
    for (var n = Bt(t), u = arguments.length, r = 1, i = vt.f, s = l.f; u > r;) {
      for (var o, h = p(arguments[r++]), c = i ? Dt(h).concat(i(h)) : Dt(h), f = c.length, d = 0; f > d;) {
        o = c[d++], a && !s.call(h, o) || (n[o] = h[o]);
      }
    }

    return n;
  } : wt;

  St({
    target: "Object",
    stat: !0,
    forced: Object.assign !== xt
  }, {
    assign: xt
  });

  var Pt = "".repeat || function (t) {
    var e = String(d(this)),
        n = "",
        u = rt(t);
    if (u < 0 || u == 1 / 0) throw RangeError("Wrong number of repetitions");

    for (; u > 0; (u >>>= 1) && (e += e)) {
      1 & u && (n += e);
    }

    return n;
  },
      Ot = Math.ceil,
      Tt = function Tt(t) {
    return function (e, n, u) {
      var r,
          i,
          a = String(d(e)),
          s = a.length,
          o = void 0 === u ? " " : String(u),
          l = at(n);
      return l <= s || "" == o ? a : (r = l - s, (i = Pt.call(o, Ot(r / o.length))).length > r && (i = i.slice(0, r)), t ? a + i : i + a);
    };
  },
      It = {
    start: Tt(!1),
    end: Tt(!0)
  },
      jt = et("navigator", "userAgent") || "",
      Vt = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(jt),
      Rt = It.end;

  St({
    target: "String",
    proto: !0,
    forced: Vt
  }, {
    padEnd: function padEnd(t) {
      return Rt(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var Lt = It.start;

  function Nt(t) {
    return (Nt = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function Ut(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function zt(t, e) {
    for (var n = 0; n < e.length; n++) {
      var u = e[n];
      u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(t, u.key, u);
    }
  }

  function Ht(t, e, n) {
    return e && zt(t.prototype, e), n && zt(t, n), t;
  }

  function Yt(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && Kt(t, e);
  }

  function Zt(t) {
    return (Zt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  function Kt(t, e) {
    return (Kt = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function Gt(t, e) {
    if (null == t) return {};

    var n,
        u,
        r = function (t, e) {
      if (null == t) return {};
      var n,
          u,
          r = {},
          i = Object.keys(t);

      for (u = 0; u < i.length; u++) {
        n = i[u], e.indexOf(n) >= 0 || (r[n] = t[n]);
      }

      return r;
    }(t, e);

    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);

      for (u = 0; u < i.length; u++) {
        n = i[u], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
      }
    }

    return r;
  }

  function Wt(t, e) {
    return !e || "object" != _typeof(e) && "function" != typeof e ? function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(t) : e;
  }

  function $t(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          u = Zt(t);

      if (e) {
        var r = Zt(this).constructor;
        n = Reflect.construct(u, arguments, r);
      } else n = u.apply(this, arguments);

      return Wt(this, n);
    };
  }

  function qt(t, e) {
    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Zt(t));) {
      ;
    }

    return t;
  }

  function Xt(t, e, n) {
    return (Xt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
      var u = qt(t, e);

      if (u) {
        var r = Object.getOwnPropertyDescriptor(u, e);
        return r.get ? r.get.call(n) : r.value;
      }
    })(t, e, n || t);
  }

  function Jt(t, e, n, u) {
    return (Jt = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (t, e, n, u) {
      var r,
          i = qt(t, e);

      if (i) {
        if ((r = Object.getOwnPropertyDescriptor(i, e)).set) return r.set.call(u, n), !0;
        if (!r.writable) return !1;
      }

      if (r = Object.getOwnPropertyDescriptor(u, e)) {
        if (!r.writable) return !1;
        r.value = n, Object.defineProperty(u, e, r);
      } else !function (t, e, n) {
        e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n;
      }(u, e, n);

      return !0;
    })(t, e, n, u);
  }

  function Qt(t, e, n, u, r) {
    if (!Jt(t, e, n, u || t) && r) throw new Error("failed to set property");
    return n;
  }

  function te(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          u = !0,
          r = !1,
          i = void 0;

      try {
        for (var a, s = t[Symbol.iterator](); !(u = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); u = !0) {
          ;
        }
      } catch (t) {
        r = !0, i = t;
      } finally {
        try {
          u || null == s["return"] || s["return"]();
        } finally {
          if (r) throw i;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return ee(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ee(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function ee(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, u = new Array(e); n < e; n++) {
      u[n] = t[n];
    }

    return u;
  }

  function ne(t) {
    return "string" == typeof t || t instanceof String;
  }

  St({
    target: "String",
    proto: !0,
    forced: Vt
  }, {
    padStart: function padStart(t) {
      return Lt(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), St({
    target: "String",
    proto: !0
  }, {
    repeat: Pt
  }), St({
    global: !0
  }, {
    globalThis: r
  });
  var ue = "NONE",
      re = "LEFT",
      ie = "FORCE_LEFT",
      ae = "RIGHT",
      se = "FORCE_RIGHT";

  function oe(t) {
    switch (t) {
      case re:
        return ie;

      case ae:
        return se;

      default:
        return t;
    }
  }

  function le(t) {
    return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
  }

  function he(t, e) {
    if (e === t) return !0;
    var n,
        u = Array.isArray(e),
        r = Array.isArray(t);

    if (u && r) {
      if (e.length != t.length) return !1;

      for (n = 0; n < e.length; n++) {
        if (!he(e[n], t[n])) return !1;
      }

      return !0;
    }

    if (u != r) return !1;

    if (e && t && "object" === Nt(e) && "object" === Nt(t)) {
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
        if (!he(t[l[n]], e[l[n]])) return !1;
      }

      return !0;
    }

    return !(!e || !t || "function" != typeof e || "function" != typeof t) && e.toString() === t.toString();
  }

  var ce = function () {
    function t(e, n, u, r) {
      for (Ut(this, t), this.value = e, this.cursorPos = n, this.oldValue = u, this.oldSelection = r; this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) {
        --this.oldSelection.start;
      }
    }

    return Ht(t, [{
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
        return !this.removedCount || this.insertedCount ? ue : this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? ae : re;
      }
    }]), t;
  }(),
      fe = function () {
    function t(e) {
      Ut(this, t), Object.assign(this, {
        inserted: "",
        rawInserted: "",
        skip: !1,
        tailShift: 0
      }, e);
    }

    return Ht(t, [{
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
      pe = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          u = arguments.length > 2 ? arguments[2] : void 0;
      Ut(this, t), this.value = e, this.from = n, this.stop = u;
    }

    return Ht(t, [{
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

  function de(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return new de.InputMask(t, e);
  }

  var ve = function () {
    function t(e) {
      Ut(this, t), this._value = "", this._update(Object.assign({}, t.DEFAULTS, e)), this.isInitialized = !0;
    }

    return Ht(t, [{
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
        return new pe(this.extractInput(t, e), t);
      }
    }, {
      key: "appendTail",
      value: function value(t) {
        return ne(t) && (t = new pe(String(t))), t.appendTo(this);
      }
    }, {
      key: "_appendCharRaw",
      value: function value(t) {
        return t ? (this._value += t, new fe({
          inserted: t,
          rawInserted: t
        })) : new fe();
      }
    }, {
      key: "_appendChar",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            u = this.state,
            r = this._appendCharRaw(this.doPrepare(t, e), e);

        if (r.inserted) {
          var i,
              a = !1 !== this.doValidate(e);

          if (a && null != n) {
            var s = this.state;
            this.overwrite && (i = n.state, n.shiftBefore(this.value.length));
            var o = this.appendTail(n);
            (a = o.rawInserted === n.toString()) && o.inserted && (this.state = s);
          }

          a || (r = new fe(), this.state = u, n && i && (n.state = i));
        }

        return r;
      }
    }, {
      key: "_appendPlaceholder",
      value: function value() {
        return new fe();
      }
    }, {
      key: "append",
      value: function value(t, e, n) {
        if (!ne(t)) throw new Error("value should be string");
        var u = new fe(),
            r = ne(n) ? new pe(String(n)) : n;
        e && e.tail && (e._beforeTailState = this.state);

        for (var i = 0; i < t.length; ++i) {
          u.aggregate(this._appendChar(t[i], e, r));
        }

        return null != r && (u.tailShift += this.appendTail(r).tailShift), u;
      }
    }, {
      key: "remove",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return this._value = this.value.slice(0, t) + this.value.slice(e), new fe();
      }
    }, {
      key: "withValueRefresh",
      value: function value(t) {
        if (this._refreshing || !this.isInitialized) return t();
        this._refreshing = !0;
        var e = this.rawInputValue,
            n = this.value,
            u = t();
        return this.rawInputValue = e, this.value && this.value !== n && 0 === n.indexOf(this.value) && this.append(n.slice(this.value.length), {}, ""), delete this._refreshing, u;
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
      value: function value(t, e, n, u) {
        var r = t + e,
            i = this.extractTail(r),
            a = this.nearestInputPos(t, u);
        return new fe({
          tailShift: a - t
        }).aggregate(this.remove(a)).aggregate(this.append(n, {
          input: !0
        }, i));
      }
    }]), t;
  }();

  function ke(t) {
    if (null == t) throw new Error("mask property should be defined");
    return t instanceof RegExp ? de.MaskedRegExp : ne(t) ? de.MaskedPattern : t instanceof Date || t === Date ? de.MaskedDate : t instanceof Number || "number" == typeof t || t === Number ? de.MaskedNumber : Array.isArray(t) || t === Array ? de.MaskedDynamic : de.Masked && t.prototype instanceof de.Masked ? t : t instanceof Function ? de.MaskedFunction : t instanceof de.Masked ? t.constructor : (console.warn("Mask not found for mask", t), de.Masked);
  }

  function ge(t) {
    if (de.Masked && t instanceof de.Masked) return t;
    var e = (t = Object.assign({}, t)).mask;
    if (de.Masked && e instanceof de.Masked) return e;
    var n = ke(e);
    if (!n) throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
    return new n(t);
  }

  ve.DEFAULTS = {
    format: function format(t) {
      return t;
    },
    parse: function parse(t) {
      return t;
    }
  }, de.Masked = ve, de.createMask = ge;

  var ye = {
    0: /\d/,
    a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    "*": /./
  },
      me = function () {
    function t(e) {
      Ut(this, t);
      var n = e.mask,
          u = Gt(e, ["mask"]);
      this.masked = ge({
        mask: n
      }), Object.assign(this, u);
    }

    return Ht(t, [{
      key: "reset",
      value: function value() {
        this._isFilled = !1, this.masked.reset();
      }
    }, {
      key: "remove",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return 0 === t && e >= 1 ? (this._isFilled = !1, this.masked.remove(t, e)) : new fe();
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
        if (this._isFilled) return new fe();

        var n = this.masked.state,
            u = this.masked._appendChar(t, e);

        return u.inserted && !1 === this.doValidate(e) && (u.inserted = u.rawInserted = "", this.masked.state = n), u.inserted || this.isOptional || this.lazy || e.input || (u.inserted = this.placeholderChar), u.skip = !u.inserted && !this.isOptional, this._isFilled = Boolean(u.inserted), u;
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
        var t = new fe();
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
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ue,
            n = 0,
            u = this.value.length,
            r = Math.min(Math.max(t, n), u);

        switch (e) {
          case re:
          case ie:
            return this.isComplete ? r : n;

          case ae:
          case se:
            return this.isComplete ? r : u;

          case ue:
          default:
            return r;
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
      _e = function () {
    function t(e) {
      Ut(this, t), Object.assign(this, e), this._value = "";
    }

    return Ht(t, [{
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
        return this._value = this._value.slice(0, t) + this._value.slice(e), this._value || (this._isRawInput = !1), new fe();
      }
    }, {
      key: "nearestInputPos",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ue,
            n = 0,
            u = this._value.length;

        switch (e) {
          case re:
          case ie:
            return n;

          case ue:
          case ae:
          case se:
          default:
            return u;
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
            n = new fe();
        if (this._value) return n;
        var u = this["char"] === t[0],
            r = u && (this.isUnmasking || e.input || e.raw) && !e.tail;
        return r && (n.rawInserted = this["char"]), this._value = n.inserted = this["char"], this._isRawInput = r && (e.raw || e.input), n;
      }
    }, {
      key: "_appendPlaceholder",
      value: function value() {
        var t = new fe();
        return this._value || (this._value = t.inserted = this["char"]), t;
      }
    }, {
      key: "extractTail",
      value: function value() {
        return arguments.length > 1 && void 0 !== arguments[1] || this.value.length, new pe("");
      }
    }, {
      key: "appendTail",
      value: function value(t) {
        return ne(t) && (t = new pe(String(t))), t.appendTo(this);
      }
    }, {
      key: "append",
      value: function value(t, e, n) {
        var u = this._appendChar(t, e);

        return null != n && (u.tailShift += this.appendTail(n).tailShift), u;
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
      Ae = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      Ut(this, t), this.chunks = e, this.from = n;
    }

    return Ht(t, [{
      key: "toString",
      value: function value() {
        return this.chunks.map(String).join("");
      }
    }, {
      key: "extend",
      value: function value(e) {
        if (String(e)) {
          ne(e) && (e = new pe(String(e)));
          var n = this.chunks[this.chunks.length - 1],
              u = n && (n.stop === e.stop || null == e.stop) && e.from === n.from + n.toString().length;
          if (e instanceof pe) u ? n.extend(e.toString()) : this.chunks.push(e);else if (e instanceof t) {
            if (null == e.stop) for (var r; e.chunks.length && null == e.chunks[0].stop;) {
              (r = e.chunks.shift()).from += e.from, this.extend(r);
            }
            e.toString() && (e.stop = e.blockIndex, this.chunks.push(e));
          }
        }
      }
    }, {
      key: "appendTo",
      value: function value(e) {
        if (!(e instanceof de.MaskedPattern)) return new pe(this.toString()).appendTo(e);

        for (var n = new fe(), u = 0; u < this.chunks.length && !n.skip; ++u) {
          var r = this.chunks[u],
              i = e._mapPosToBlock(e.value.length),
              a = r.stop,
              s = void 0;

          if (null != a && (!i || i.index <= a) && ((r instanceof t || e._stops.indexOf(a) >= 0) && n.aggregate(e._appendPlaceholder(a)), s = r instanceof t && e._blocks[a]), s) {
            var o = s.appendTail(r);
            o.skip = !1, n.aggregate(o), e._value += o.inserted;
            var l = r.toString().slice(o.rawInserted.length);
            l && n.aggregate(e.append(l, {
              tail: !0
            }));
          } else n.aggregate(e.append(r.toString(), {
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
            u = Gt(e, ["chunks"]);
        Object.assign(this, u), this.chunks = n.map(function (e) {
          var n = "chunks" in e ? new t() : new pe();
          return n.state = e, n;
        });
      }
    }, {
      key: "shiftBefore",
      value: function value(t) {
        if (this.from >= t || !this.chunks.length) return "";

        for (var e = t - this.from, n = 0; n < this.chunks.length;) {
          var u = this.chunks[n],
              r = u.shiftBefore(e);

          if (u.toString()) {
            if (!r) break;
            ++n;
          } else this.chunks.splice(n, 1);

          if (r) return r;
        }

        return "";
      }
    }]), t;
  }(),
      be = function (t) {
    Yt(n, t);
    var e = $t(n);

    function n() {
      return Ut(this, n), e.apply(this, arguments);
    }

    return Ht(n, [{
      key: "_update",
      value: function value(t) {
        t.mask && (t.validate = function (e) {
          return e.search(t.mask) >= 0;
        }), Xt(Zt(n.prototype), "_update", this).call(this, t);
      }
    }]), n;
  }(ve);

  de.MaskedRegExp = be;

  var Ce = function (t) {
    Yt(n, t);
    var e = $t(n);

    function n() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Ut(this, n), t.definitions = Object.assign({}, ye, t.definitions), e.call(this, Object.assign({}, n.DEFAULTS, t));
    }

    return Ht(n, [{
      key: "_update",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t.definitions = Object.assign({}, this.definitions, t.definitions), Xt(Zt(n.prototype), "_update", this).call(this, t), this._rebuildMask();
      }
    }, {
      key: "_rebuildMask",
      value: function value() {
        var t = this,
            e = this.definitions;
        this._blocks = [], this._stops = [], this._maskedBlocks = {};
        var u = this.mask;
        if (u && e) for (var r = !1, i = !1, a = 0; a < u.length; ++a) {
          if (this.blocks) if ("continue" === function () {
            var e = u.slice(a),
                n = Object.keys(t.blocks).filter(function (t) {
              return 0 === e.indexOf(t);
            });
            n.sort(function (t, e) {
              return e.length - t.length;
            });
            var r = n[0];

            if (r) {
              var i = ge(Object.assign({
                parent: t,
                lazy: t.lazy,
                placeholderChar: t.placeholderChar,
                overwrite: t.overwrite
              }, t.blocks[r]));
              return i && (t._blocks.push(i), t._maskedBlocks[r] || (t._maskedBlocks[r] = []), t._maskedBlocks[r].push(t._blocks.length - 1)), a += r.length - 1, "continue";
            }
          }()) continue;
          var s = u[a],
              o = (s in e);
          if (s !== n.STOP_CHAR) {
            if ("{" !== s && "}" !== s) {
              if ("[" !== s && "]" !== s) {
                if (s === n.ESCAPE_CHAR) {
                  if (++a, !(s = u[a])) break;
                  o = !1;
                }

                var l = o ? new me({
                  parent: this,
                  lazy: this.lazy,
                  placeholderChar: this.placeholderChar,
                  mask: e[s],
                  isOptional: i
                }) : new _e({
                  "char": s,
                  isUnmasking: r
                });

                this._blocks.push(l);
              } else i = !i;
            } else r = !r;
          } else this._stops.push(this._blocks.length);
        }
      }
    }, {
      key: "state",
      get: function get() {
        return Object.assign({}, Xt(Zt(n.prototype), "state", this), {
          _blocks: this._blocks.map(function (t) {
            return t.state;
          })
        });
      },
      set: function set(t) {
        var e = t._blocks,
            u = Gt(t, ["_blocks"]);
        this._blocks.forEach(function (t, n) {
          return t.state = e[n];
        }), Qt(Zt(n.prototype), "state", u, this, !0);
      }
    }, {
      key: "reset",
      value: function value() {
        Xt(Zt(n.prototype), "reset", this).call(this), this._blocks.forEach(function (t) {
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
        }), Xt(Zt(n.prototype), "doCommit", this).call(this);
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._blocks.reduce(function (t, e) {
          return t + e.unmaskedValue;
        }, "");
      },
      set: function set(t) {
        Qt(Zt(n.prototype), "unmaskedValue", t, this, !0);
      }
    }, {
      key: "value",
      get: function get() {
        return this._blocks.reduce(function (t, e) {
          return t + e.value;
        }, "");
      },
      set: function set(t) {
        Qt(Zt(n.prototype), "value", t, this, !0);
      }
    }, {
      key: "appendTail",
      value: function value(t) {
        return Xt(Zt(n.prototype), "appendTail", this).call(this, t).aggregate(this._appendPlaceholder());
      }
    }, {
      key: "_appendCharRaw",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = this._mapPosToBlock(this.value.length),
            u = new fe();

        if (!n) return u;

        for (var r = n.index;; ++r) {
          var i = this._blocks[r];
          if (!i) break;

          var a = i._appendChar(t, e),
              s = a.skip;

          if (u.aggregate(a), s || a.rawInserted) break;
        }

        return u;
      }
    }, {
      key: "extractTail",
      value: function value() {
        var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
            u = new Ae();
        return e === n || this._forEachBlocksInRange(e, n, function (e, n, r, i) {
          var a = e.extractTail(r, i);
          a.stop = t._findStopBefore(n), a.from = t._blockStartPos(n), a instanceof Ae && (a.blockIndex = n), u.extend(a);
        }), u;
      }
    }, {
      key: "extractInput",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (t === e) return "";
        var u = "";
        return this._forEachBlocksInRange(t, e, function (t, e, r, i) {
          u += t.extractInput(r, i, n);
        }), u;
      }
    }, {
      key: "_findStopBefore",
      value: function value(t) {
        for (var e, n = 0; n < this._stops.length; ++n) {
          var u = this._stops[n];
          if (!(u <= t)) break;
          e = u;
        }

        return e;
      }
    }, {
      key: "_appendPlaceholder",
      value: function value(t) {
        var e = this,
            n = new fe();
        if (this.lazy && null == t) return n;

        var u = this._mapPosToBlock(this.value.length);

        if (!u) return n;
        var r = u.index,
            i = null != t ? t : this._blocks.length;
        return this._blocks.slice(r, i).forEach(function (u) {
          if (!u.lazy || null != t) {
            var r = null != u._blocks ? [u._blocks.length] : [],
                i = u._appendPlaceholder.apply(u, r);

            e._value += i.inserted, n.aggregate(i);
          }
        }), n;
      }
    }, {
      key: "_mapPosToBlock",
      value: function value(t) {
        for (var e = "", n = 0; n < this._blocks.length; ++n) {
          var u = this._blocks[n],
              r = e.length;
          if (t <= (e += u.value).length) return {
            index: n,
            offset: t - r
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
            u = this._mapPosToBlock(t);

        if (u) {
          var r = this._mapPosToBlock(e),
              i = r && u.index === r.index,
              a = u.offset,
              s = r && i ? r.offset : this._blocks[u.index].value.length;

          if (n(this._blocks[u.index], u.index, a, s), r && !i) {
            for (var o = u.index + 1; o < r.index; ++o) {
              n(this._blocks[o], o, 0, this._blocks[o].value.length);
            }

            n(this._blocks[r.index], r.index, 0, r.offset);
          }
        }
      }
    }, {
      key: "remove",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
            u = Xt(Zt(n.prototype), "remove", this).call(this, t, e);
        return this._forEachBlocksInRange(t, e, function (t, e, n, r) {
          u.aggregate(t.remove(n, r));
        }), u;
      }
    }, {
      key: "nearestInputPos",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ue,
            n = this._mapPosToBlock(t) || {
          index: 0,
          offset: 0
        },
            u = n.offset,
            r = n.index,
            i = this._blocks[r];
        if (!i) return t;
        var a = u;
        0 !== a && a < i.value.length && (a = i.nearestInputPos(u, oe(e)));
        var s = a === i.value.length,
            o = 0 === a;
        if (!o && !s) return this._blockStartPos(r) + a;
        var l = s ? r + 1 : r;

        if (e === ue) {
          if (l > 0) {
            var h = l - 1,
                c = this._blocks[h],
                f = c.nearestInputPos(0, ue);
            if (!c.value.length || f !== c.value.length) return this._blockStartPos(l);
          }

          for (var p = l, d = p; d < this._blocks.length; ++d) {
            var v = this._blocks[d],
                k = v.nearestInputPos(0, ue);
            if (!v.value.length || k !== v.value.length) return this._blockStartPos(d) + k;
          }

          for (var g = l - 1; g >= 0; --g) {
            var y = this._blocks[g],
                m = y.nearestInputPos(0, ue);
            if (!y.value.length || m !== y.value.length) return this._blockStartPos(g) + y.value.length;
          }

          return t;
        }

        if (e === re || e === ie) {
          for (var _, A = l; A < this._blocks.length; ++A) {
            if (this._blocks[A].value) {
              _ = A;
              break;
            }
          }

          if (null != _) {
            var b = this._blocks[_],
                C = b.nearestInputPos(0, ae);
            if (0 === C && b.unmaskedValue.length) return this._blockStartPos(_) + C;
          }

          for (var E, F = -1, S = l - 1; S >= 0; --S) {
            var D = this._blocks[S],
                B = D.nearestInputPos(D.value.length, ie);

            if (D.value && 0 === B || (E = S), 0 !== B) {
              if (B !== D.value.length) return this._blockStartPos(S) + B;
              F = S;
              break;
            }
          }

          if (e === re) for (var w = F + 1; w <= Math.min(l, this._blocks.length - 1); ++w) {
            var M = this._blocks[w],
                x = M.nearestInputPos(0, ue),
                P = this._blockStartPos(w) + x;
            if (P > t) break;
            if (x !== M.value.length) return P;
          }
          if (F >= 0) return this._blockStartPos(F) + this._blocks[F].value.length;
          if (e === ie || this.lazy && !this.extractInput() && !Ee(this._blocks[l])) return 0;
          if (null != E) return this._blockStartPos(E);

          for (var O = l; O < this._blocks.length; ++O) {
            var T = this._blocks[O],
                I = T.nearestInputPos(0, ue);
            if (!T.value.length || I !== T.value.length) return this._blockStartPos(O) + I;
          }

          return 0;
        }

        if (e === ae || e === se) {
          for (var j, V, R = l; R < this._blocks.length; ++R) {
            var L = this._blocks[R],
                N = L.nearestInputPos(0, ue);

            if (N !== L.value.length) {
              V = this._blockStartPos(R) + N, j = R;
              break;
            }
          }

          if (null != j && null != V) {
            for (var U = j; U < this._blocks.length; ++U) {
              var z = this._blocks[U],
                  H = z.nearestInputPos(0, se);
              if (H !== z.value.length) return this._blockStartPos(U) + H;
            }

            return e === se ? this.value.length : V;
          }

          for (var Y = Math.min(l, this._blocks.length - 1); Y >= 0; --Y) {
            var Z = this._blocks[Y],
                K = Z.nearestInputPos(Z.value.length, re);

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
  }(ve);

  function Ee(t) {
    if (!t) return !1;
    var e = t.value;
    return !e || t.nearestInputPos(0, ue) !== e.length;
  }

  Ce.DEFAULTS = {
    lazy: !0,
    placeholderChar: "_"
  }, Ce.STOP_CHAR = "`", Ce.ESCAPE_CHAR = "\\", Ce.InputDefinition = me, Ce.FixedDefinition = _e, de.MaskedPattern = Ce;

  var Fe = function (t) {
    Yt(n, t);
    var e = $t(n);

    function n() {
      return Ut(this, n), e.apply(this, arguments);
    }

    return Ht(n, [{
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

        for (var u = String(t.from).padStart(e, "0"), r = String(t.to).padStart(e, "0"), i = 0; i < r.length && r[i] === u[i];) {
          ++i;
        }

        t.mask = r.slice(0, i).replace(/0/g, "\\0") + "0".repeat(e - i), Xt(Zt(n.prototype), "_update", this).call(this, t);
      }
    }, {
      key: "isComplete",
      get: function get() {
        return Xt(Zt(n.prototype), "isComplete", this) && Boolean(this.value);
      }
    }, {
      key: "boundaries",
      value: function value(t) {
        var e = "",
            n = "",
            u = te(t.match(/^(\D*)(\d*)(\D*)/) || [], 3),
            r = u[1],
            i = u[2];
        return i && (e = "0".repeat(r.length) + i, n = "9".repeat(r.length) + i), [e = e.padEnd(this.maxLength, "0"), n = n.padEnd(this.maxLength, "9")];
      }
    }, {
      key: "doPrepare",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (t = Xt(Zt(n.prototype), "doPrepare", this).call(this, t, e).replace(/\D/g, ""), !this.autofix) return t;

        for (var u = String(this.from).padStart(this.maxLength, "0"), r = String(this.to).padStart(this.maxLength, "0"), i = this.value, a = "", s = 0; s < t.length; ++s) {
          var o = i + a + t[s],
              l = this.boundaries(o),
              h = te(l, 2),
              c = h[0],
              f = h[1];
          Number(f) < this.from ? a += u[o.length - 1] : Number(c) > this.to ? a += r[o.length - 1] : a += t[s];
        }

        return a;
      }
    }, {
      key: "doValidate",
      value: function value() {
        var t,
            e = this.value,
            u = e.search(/[^0]/);
        if (-1 === u && e.length <= this._matchFrom) return !0;

        for (var r = this.boundaries(e), i = te(r, 2), a = i[0], s = i[1], o = arguments.length, l = new Array(o), h = 0; h < o; h++) {
          l[h] = arguments[h];
        }

        return this.from <= Number(s) && Number(a) <= this.to && (t = Xt(Zt(n.prototype), "doValidate", this)).call.apply(t, [this].concat(l));
      }
    }]), n;
  }(Ce);

  de.MaskedRange = Fe;

  var Se = function (t) {
    Yt(n, t);
    var e = $t(n);

    function n(t) {
      return Ut(this, n), e.call(this, Object.assign({}, n.DEFAULTS, t));
    }

    return Ht(n, [{
      key: "_update",
      value: function value(t) {
        t.mask === Date && delete t.mask, t.pattern && (t.mask = t.pattern);
        var e = t.blocks;
        t.blocks = Object.assign({}, n.GET_DEFAULT_BLOCKS()), t.min && (t.blocks.Y.from = t.min.getFullYear()), t.max && (t.blocks.Y.to = t.max.getFullYear()), t.min && t.max && t.blocks.Y.from === t.blocks.Y.to && (t.blocks.m.from = t.min.getMonth() + 1, t.blocks.m.to = t.max.getMonth() + 1, t.blocks.m.from === t.blocks.m.to && (t.blocks.d.from = t.min.getDate(), t.blocks.d.to = t.max.getDate())), Object.assign(t.blocks, e), Object.keys(t.blocks).forEach(function (e) {
          var n = t.blocks[e];
          "autofix" in n || (n.autofix = t.autofix);
        }), Xt(Zt(n.prototype), "_update", this).call(this, t);
      }
    }, {
      key: "doValidate",
      value: function value() {
        for (var t, e = this.date, u = arguments.length, r = new Array(u), i = 0; i < u; i++) {
          r[i] = arguments[i];
        }

        return (t = Xt(Zt(n.prototype), "doValidate", this)).call.apply(t, [this].concat(r)) && (!this.isComplete || this.isDateExist(this.value) && null != e && (null == this.min || this.min <= e) && (null == this.max || e <= this.max));
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
        return this.isComplete ? Xt(Zt(n.prototype), "typedValue", this) : null;
      },
      set: function set(t) {
        Qt(Zt(n.prototype), "typedValue", t, this, !0);
      }
    }]), n;
  }(Ce);

  Se.DEFAULTS = {
    pattern: "d{.}`m{.}`Y",
    format: function format(t) {
      return [String(t.getDate()).padStart(2, "0"), String(t.getMonth() + 1).padStart(2, "0"), t.getFullYear()].join(".");
    },
    parse: function parse(t) {
      var e = te(t.split("."), 3),
          n = e[0],
          u = e[1],
          r = e[2];
      return new Date(r, u - 1, n);
    }
  }, Se.GET_DEFAULT_BLOCKS = function () {
    return {
      d: {
        mask: Fe,
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: Fe,
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: Fe,
        from: 1900,
        to: 9999
      }
    };
  }, de.MaskedDate = Se;

  var De = function () {
    function t() {
      Ut(this, t);
    }

    return Ht(t, [{
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

  de.MaskElement = De;

  var Be = function (t) {
    Yt(n, t);
    var e = $t(n);

    function n(t) {
      var u;
      return Ut(this, n), (u = e.call(this)).input = t, u._handlers = {}, u;
    }

    return Ht(n, [{
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
        Object.keys(t).forEach(function (u) {
          return e._toggleEventHandler(n.EVENTS_MAP[u], t[u]);
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
  }(De);

  Be.EVENTS_MAP = {
    selectionChange: "keydown",
    input: "input",
    drop: "drop",
    click: "click",
    focus: "focus",
    commit: "blur"
  }, de.HTMLMaskElement = Be;

  var we = function (t) {
    Yt(n, t);
    var e = $t(n);

    function n() {
      return Ut(this, n), e.apply(this, arguments);
    }

    return Ht(n, [{
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
          var u = this.rootElement,
              r = u.getSelection && u.getSelection();
          r && (r.removeAllRanges(), r.addRange(n));
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
  }(Be);

  de.HTMLContenteditableMaskElement = we;

  var Me = function () {
    function t(e, n) {
      Ut(this, t), this.el = e instanceof De ? e : e.isContentEditable && "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName ? new we(e) : new Be(e), this.masked = ge(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
    }

    return Ht(t, [{
      key: "mask",
      get: function get() {
        return this.masked.mask;
      },
      set: function set(t) {
        if (!this.maskEquals(t)) if (t instanceof de.Masked || this.masked.constructor !== ke(t)) {
          var e = ge({
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
        return null == t || t === this.masked.mask || t === Date && this.masked instanceof Se;
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
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), u = 1; u < e; u++) {
          n[u - 1] = arguments[u];
        }

        var r = this._listeners[t];
        r && r.forEach(function (t) {
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
            n = Gt(t, ["mask"]),
            u = !this.maskEquals(e),
            r = !he(this.masked, n);
        u && (this.mask = e), r && this.masked.updateOptions(n), (u || r) && this.updateControl();
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
        this.cursorPos = this.masked.nearestInputPos(this.cursorPos, re);
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
        var e = new ce(this.el.value, this.cursorPos, this.value, this._selection),
            n = this.masked.rawInputValue,
            u = this.masked.splice(e.startChangePos, e.removed.length, e.inserted, e.removeDirection).offset,
            r = n === this.masked.rawInputValue ? e.removeDirection : ue,
            i = this.masked.nearestInputPos(e.startChangePos + u, r);
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

  de.InputMask = Me;

  var xe = function (t) {
    Yt(n, t);
    var e = $t(n);

    function n() {
      return Ut(this, n), e.apply(this, arguments);
    }

    return Ht(n, [{
      key: "_update",
      value: function value(t) {
        t["enum"] && (t.mask = "*".repeat(t["enum"][0].length)), Xt(Zt(n.prototype), "_update", this).call(this, t);
      }
    }, {
      key: "doValidate",
      value: function value() {
        for (var t, e = this, u = arguments.length, r = new Array(u), i = 0; i < u; i++) {
          r[i] = arguments[i];
        }

        return this["enum"].some(function (t) {
          return t.indexOf(e.unmaskedValue) >= 0;
        }) && (t = Xt(Zt(n.prototype), "doValidate", this)).call.apply(t, [this].concat(r));
      }
    }]), n;
  }(Ce);

  de.MaskedEnum = xe;

  var Pe = function (t) {
    Yt(n, t);
    var e = $t(n);

    function n(t) {
      return Ut(this, n), e.call(this, Object.assign({}, n.DEFAULTS, t));
    }

    return Ht(n, [{
      key: "_update",
      value: function value(t) {
        Xt(Zt(n.prototype), "_update", this).call(this, t), this._updateRegExps();
      }
    }, {
      key: "_updateRegExps",
      value: function value() {
        var t = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
            e = (this.scale ? "(" + le(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
        this._numberRegExpInput = new RegExp(t + "(0|([1-9]+\\d*))?" + e), this._numberRegExp = new RegExp(t + "\\d*" + e), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(le).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(le(this.thousandsSeparator), "g");
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
        for (var e, u = arguments.length, r = new Array(u > 1 ? u - 1 : 0), i = 1; i < u; i++) {
          r[i - 1] = arguments[i];
        }

        return (e = Xt(Zt(n.prototype), "doPrepare", this)).call.apply(e, [this, this._removeThousandsSeparators(t.replace(this._mapToRadixRegExp, this.radix))].concat(r));
      }
    }, {
      key: "_separatorsCount",
      value: function value(t) {
        for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, u = 0; u < t; ++u) {
          this._value.indexOf(this.thousandsSeparator, u) === u && (++n, e && (t += this.thousandsSeparator.length));
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
            u = arguments.length > 2 ? arguments[2] : void 0,
            r = this._adjustRangeWithSeparators(t, e),
            i = te(r, 2);

        return t = i[0], e = i[1], this._removeThousandsSeparators(Xt(Zt(n.prototype), "extractInput", this).call(this, t, e, u));
      }
    }, {
      key: "_appendCharRaw",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!this.thousandsSeparator) return Xt(Zt(n.prototype), "_appendCharRaw", this).call(this, t, e);

        var u = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
            r = this._separatorsCountFromSlice(u);

        this._value = this._removeThousandsSeparators(this.value);
        var i = Xt(Zt(n.prototype), "_appendCharRaw", this).call(this, t, e);
        this._value = this._insertThousandsSeparators(this._value);

        var a = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
            s = this._separatorsCountFromSlice(a);

        return i.tailShift += (s - r) * this.thousandsSeparator.length, i.skip = !i.rawInserted && t === this.thousandsSeparator, i;
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

        var u = this._findSeparatorAround(e);

        return u >= 0 && (e = u + this.thousandsSeparator.length), [t, e];
      }
    }, {
      key: "remove",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
            n = this._adjustRangeWithSeparators(t, e),
            u = te(n, 2);

        t = u[0], e = u[1];

        var r = this.value.slice(0, t),
            i = this.value.slice(e),
            a = this._separatorsCount(r.length);

        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(r + i));

        var s = this._separatorsCountFromSlice(r);

        return new fe({
          tailShift: (s - a) * this.thousandsSeparator.length
        });
      }
    }, {
      key: "nearestInputPos",
      value: function value(t, e) {
        if (!this.thousandsSeparator) return t;

        switch (e) {
          case ue:
          case re:
          case ie:
            var n = this._findSeparatorAround(t - 1);

            if (n >= 0) {
              var u = n + this.thousandsSeparator.length;
              if (t < u || this.value.length <= u || e === ie) return n;
            }

            break;

          case ae:
          case se:
            var r = this._findSeparatorAround(t);

            if (r >= 0) return r + this.thousandsSeparator.length;
        }

        return t;
      }
    }, {
      key: "doValidate",
      value: function value(t) {
        var e = (t.input ? this._numberRegExpInput : this._numberRegExp).test(this._removeThousandsSeparators(this.value));

        if (e) {
          var u = this.number;
          e = e && !isNaN(u) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max);
        }

        return e && Xt(Zt(n.prototype), "doValidate", this).call(this, t);
      }
    }, {
      key: "doCommit",
      value: function value() {
        if (this.value) {
          var t = this.number,
              e = t;
          null != this.min && (e = Math.max(e, this.min)), null != this.max && (e = Math.min(e, this.max)), e !== t && (this.unmaskedValue = String(e));
          var u = this.value;
          this.normalizeZeros && (u = this._normalizeZeros(u)), this.padFractionalZeros && (u = this._padFractionalZeros(u)), this._value = u;
        }

        Xt(Zt(n.prototype), "doCommit", this).call(this);
      }
    }, {
      key: "_normalizeZeros",
      value: function value(t) {
        var e = this._removeThousandsSeparators(t).split(this.radix);

        return e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, function (t, e, n, u) {
          return e + u;
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
        Qt(Zt(n.prototype), "unmaskedValue", t.replace(".", this.radix), this, !0);
      }
    }, {
      key: "typedValue",
      get: function get() {
        return Number(this.unmaskedValue);
      },
      set: function set(t) {
        Qt(Zt(n.prototype), "unmaskedValue", String(t), this, !0);
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
  }(ve);

  Pe.DEFAULTS = {
    radix: ",",
    thousandsSeparator: "",
    mapToRadix: ["."],
    scale: 2,
    signed: !1,
    normalizeZeros: !0,
    padFractionalZeros: !1
  }, de.MaskedNumber = Pe;

  var Oe = function (t) {
    Yt(n, t);
    var e = $t(n);

    function n() {
      return Ut(this, n), e.apply(this, arguments);
    }

    return Ht(n, [{
      key: "_update",
      value: function value(t) {
        t.mask && (t.validate = t.mask), Xt(Zt(n.prototype), "_update", this).call(this, t);
      }
    }]), n;
  }(ve);

  de.MaskedFunction = Oe;

  var Te = function (t) {
    Yt(n, t);
    var e = $t(n);

    function n(t) {
      var u;
      return Ut(this, n), (u = e.call(this, Object.assign({}, n.DEFAULTS, t))).currentMask = null, u;
    }

    return Ht(n, [{
      key: "_update",
      value: function value(t) {
        Xt(Zt(n.prototype), "_update", this).call(this, t), "mask" in t && (this.compiledMasks = Array.isArray(t.mask) ? t.mask.map(function (t) {
          return ge(t);
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
            u = this.rawInputValue,
            r = e.tail && null != e._beforeTailState ? e._beforeTailState._rawInputValue : u,
            i = u.slice(r.length),
            a = this.currentMask,
            s = new fe(),
            o = a && a.state;
        if (this.currentMask = this.doDispatch(t, Object.assign({}, e)), this.currentMask) if (this.currentMask !== a) {
          if (this.currentMask.reset(), r) {
            var l = this.currentMask.append(r, {
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
        for (var t, e, u = arguments.length, r = new Array(u), i = 0; i < u; i++) {
          r[i] = arguments[i];
        }

        return (t = Xt(Zt(n.prototype), "doValidate", this)).call.apply(t, [this].concat(r)) && (!this.currentMask || (e = this.currentMask).doValidate.apply(e, r));
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
        Qt(Zt(n.prototype), "value", t, this, !0);
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.unmaskedValue : "";
      },
      set: function set(t) {
        Qt(Zt(n.prototype), "unmaskedValue", t, this, !0);
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
            e = new fe();
        this.currentMask && e.aggregate((t = this.currentMask).remove.apply(t, arguments)).aggregate(this._applyDispatch());
        return e;
      }
    }, {
      key: "state",
      get: function get() {
        return Object.assign({}, Xt(Zt(n.prototype), "state", this), {
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
            u = t.currentMaskRef,
            r = t.currentMask,
            i = Gt(t, ["compiledMasks", "currentMaskRef", "currentMask"]);
        this.compiledMasks.forEach(function (t, n) {
          return t.state = e[n];
        }), null != u && (this.currentMask = u, this.currentMask.state = r), Qt(Zt(n.prototype), "state", i, this, !0);
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
        for (var t, e, u = arguments.length, r = new Array(u), i = 0; i < u; i++) {
          r[i] = arguments[i];
        }

        return this.currentMask ? (t = this.currentMask).extractTail.apply(t, r) : (e = Xt(Zt(n.prototype), "extractTail", this)).call.apply(e, [this].concat(r));
      }
    }, {
      key: "doCommit",
      value: function value() {
        this.currentMask && this.currentMask.doCommit(), Xt(Zt(n.prototype), "doCommit", this).call(this);
      }
    }, {
      key: "nearestInputPos",
      value: function value() {
        for (var t, e, u = arguments.length, r = new Array(u), i = 0; i < u; i++) {
          r[i] = arguments[i];
        }

        return this.currentMask ? (t = this.currentMask).nearestInputPos.apply(t, r) : (e = Xt(Zt(n.prototype), "nearestInputPos", this)).call.apply(e, [this].concat(r));
      }
    }, {
      key: "overwrite",
      get: function get() {
        return this.currentMask ? this.currentMask.overwrite : Xt(Zt(n.prototype), "overwrite", this);
      },
      set: function set(t) {
        console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
      }
    }]), n;
  }(ve);

  Te.DEFAULTS = {
    dispatch: function dispatch(t, e, n) {
      if (e.compiledMasks.length) {
        var u = e.rawInputValue,
            r = e.compiledMasks.map(function (e, r) {
          return e.reset(), e.append(u, {
            raw: !0
          }), e.append(t, n), {
            weight: e.rawInputValue.length,
            index: r
          };
        });
        return r.sort(function (t, e) {
          return e.weight - t.weight;
        }), e.compiledMasks[r[0].index];
      }
    }
  }, de.MaskedDynamic = Te;
  var Ie = {
    MASKED: "value",
    UNMASKED: "unmaskedValue",
    TYPED: "typedValue"
  };

  function je(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ie.MASKED,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ie.MASKED,
        u = ge(t);
    return function (t) {
      return u.runIsolated(function (u) {
        return u[e] = t, u[n];
      });
    };
  }

  function Ve(t) {
    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), u = 1; u < e; u++) {
      n[u - 1] = arguments[u];
    }

    return je.apply(void 0, n)(t);
  }

  de.PIPE_TYPE = Ie, de.createPipe = je, de.pipe = Ve;

  try {
    globalThis.IMask = de;
  } catch (t) {}

  t.HTMLContenteditableMaskElement = we, t.HTMLMaskElement = Be, t.InputMask = Me, t.MaskElement = De, t.Masked = ve, t.MaskedDate = Se, t.MaskedDynamic = Te, t.MaskedEnum = xe, t.MaskedFunction = Oe, t.MaskedNumber = Pe, t.MaskedPattern = Ce, t.MaskedRange = Fe, t.MaskedRegExp = be, t.PIPE_TYPE = Ie, t.createMask = ge, t.createPipe = je, t["default"] = de, t.pipe = Ve, Object.defineProperty(t, "__esModule", {
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
        var _this50 = this;

        clearTimeout(this[o]);
        var t = arguments;
        this[o] = setTimeout(function () {
          n.apply(_this50, t), delete _this50[o];
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
        var _i17 = o[t.infiniteScrollGUID];
        return _i17.option(e), _i17;
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
      var _i18 = n.Event(e);

      _i18.type = t, s = _i18;
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
    var _this51 = this;

    this.getPath = function () {
      var e = _this51.pageIndex + 1;
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
          var _e14 = _step2.value;

          var _i19 = t.match(_e14);

          if (_i19) {
            var _i20 = _slicedToArray(_i19, 4),
                _t19 = _i20[1],
                _e15 = _i20[2],
                _n7 = _i20[3];

            return {
              begin: _t19,
              index: _e15,
              end: _n7
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
    var _this52 = this;

    var e = document.querySelector(t);
    if (!e) return void console.error("Bad InfiniteScroll path option. Next link not found: ".concat(t));
    var i = e.getAttribute("href"),
        n = c(i);
    if (!n) return void console.error("InfiniteScroll unable to parse next link href: ".concat(i));
    var o = n.begin,
        s = n.index,
        r = n.end;
    this.isPathSelector = !0, this.getPath = function () {
      return o + (_this52.pageIndex + 1) + r;
    }, this.pageIndex = parseInt(s, 10) - 1, this.log("pageIndex", [this.pageIndex, "next link"]);
  }, r.updateGetAbsolutePath = function () {
    var _this53 = this;

    var t = this.getPath();
    if (t.match(/^http/) || t.match(/^\//)) return void (this.getAbsolutePath = this.getPath);
    var _location = location,
        e = _location.pathname,
        i = t.match(/^\?/),
        n = e.substring(0, e.lastIndexOf("/")),
        o = i ? e : n + "/";

    this.getAbsolutePath = function () {
      return o + _this53.getPath();
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
      var _this54 = this;

      var o = +new Date(),
          s = arguments,
          r = function r() {
        i = o, t.apply(_this54, s);
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
    var _this55 = this;

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

        return _this55.onPageError(_t21, o, i), {
          response: i
        };
      }

      return i[t]().then(function (s) {
        return "text" == t && e && (s = n.parseFromString(s, "text/html")), 204 == i.status ? (_this55.lastPageReached(s, o), {
          body: s,
          response: i
        }) : _this55.onPageLoad(s, o, i);
      });
    })["catch"](function (t) {
      _this55.onPageError(t, o);
    });
    return this.dispatchEvent("request", null, [o, s]), s;
  }, i.onPageLoad = function (t, e, i) {
    return this.options.append || (this.isLoading = !1), this.pageIndex++, this.loadCount++, this.dispatchEvent("load", null, [t, e, i]), this.appendNextPage(t, e, i);
  }, i.appendNextPage = function (t, e, i) {
    var _this56 = this;

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
      return _this56.appendItems(l, a), _this56.isLoading = !1, _this56.dispatchEvent("append", null, [t, e, l, i]), h;
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

          var _e16 = document.createElement("script"),
              _i21 = _t22.attributes;

          var _iterator4 = _createForOfIteratorHelper(_i21),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _t23 = _step4.value;

              _e16.setAttribute(_t23.name, _t23.value);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          _e16.innerHTML = _t22.innerHTML, _t22.parentNode.replaceChild(_e16, _t22);
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
/*
* helper para setarmos os parametros do utm a partir da query string
* */

function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1));
  var sURLVariables = sPageURL.split('&');
  var sParameterName;
  var i = 0;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === '' ? true : sParameterName[1];
    }
  }
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

if (getUrlParameter("utm_source")) {
  setCookie("utm_source", getUrlParameter("utm_source"), 30);
  setCookie("utm_today", 1, 30);
} else if (!getUrlParameter("utm_source") && !getCookie("utm_today") && document.referrer !== "" && document.referrer.search("google") > 0) {
  setCookie("utm_source", "google", 30);
  setCookie("utm_medium", "organic", 30);
  setCookie("utm_today", 1, 30);
} else if (!getUrlParameter("utm_source") && !getCookie("utm_today") && document.referrer !== "") {
  setCookie("utm_source", "referral", 30);
  setCookie("utm_medium", document.referrer, 30);
  setCookie("utm_today", 1, 30);
}

if (getUrlParameter("utm_medium")) {
  setCookie("utm_medium", getUrlParameter("utm_medium"), 30);
}

if (getUrlParameter("utm_campaign") && getUrlParameter("utm_campaign") !== "") {
  setCookie("utm_campaign", getUrlParameter("utm_campaign"), 30);
}

if (getUrlParameter("utm_term") && getUrlParameter("utm_term") !== "") {
  setCookie("utm_term", getUrlParameter("utm_term"), 30);
}

if (getUrlParameter("utm_content") && getUrlParameter("utm_content") !== "") {
  setCookie("utm_content", getUrlParameter("utm_content"), 30);
}

if (getUrlParameter("gclid") && getUrlParameter("gclid") !== "") {
  setCookie("gclid", getUrlParameter("gclid"), 30);
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

function getFieldValue(_ref9) {
  var name = _ref9.name,
      type = _ref9.type;

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

function setInvalidInput(_ref10) {
  var input = _ref10.input,
      message = _ref10.message;
  input.setCustomValidity(message || 'invalid');
  input.classList.add('is-invalid');
}

function setValidInput(_ref11) {
  var input = _ref11.input;
  input.setCustomValidity('');
  input.classList.remove('is-invalid');
}

function guideUserToTheFirstError() {
  var currentScrollPosition = $(window).scrollTop();
  var invalidInputsSelectors = ['.form-control:invalid', '.custom-control-input:invalid', '.form-control.is-invalid', '.custom-control-input.is-invalid'];
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

  function _scrollToError(_ref12) {
    var container = _ref12.container;
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

function validateFullName(_ref13) {
  var fullNameElement = _ref13.fullNameElement,
      invalidMessage = _ref13.invalidMessage;
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

  function fullNameValidateHandler(_ref14) {
    var fullNameElement = _ref14.fullNameElement;

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

      for (var _i22 = sizes.prefix; _i22 >= 1; _i22--) {
        sum += cnpj.number.full.charAt(sizes.prefix - _i22) * positionIndex--;

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

      for (var _i23 = 0; _i23 < 9; _i23++) {
        d1 += cpf.prefix.charAt(_i23) * (11 - _i23);
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
    return document.getElementsByClassName(selector)[0].getBoundingClientRect().top + document.body.scrollTop;
  } // Return if selector was found


  function isElementSet(selector) {
    return !!document.getElementsByClassName(selector).length;
  }

  function showHeader() {
    header.classList.remove(hideClass);
    header.style.transform = 'none';
  }

  function hideHeader() {
    header.classList.add(hideClass);
    header.style.transform = 'translateY(-100%)';
  }

  function setStickyHeader() {
    header.classList.add(fixedClass);
    header.style.position = 'fixed';
  }

  function unsetStickyHeader() {
    header.classList.remove(fixedClass);
    header.style.position = headerInitialPosition;
  }

  function setParentPaddingTop() {
    var newPaddingTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : parentPaddingTop;

    if (isHeaderRelative) {
      header.parentNode.style.paddingTop = newPaddingTop;
    }
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
  var headerInitialPosition = getComputedStyle(header)['position'];
  var headerTransition = Number(getComputedStyle(header)['transition-duration'].replace('s', '')) * 1000; // If header is relative, set it's parent padding-top with header height

  var isHeaderRelative = ['relative', 'sticky', 'initial'].includes(headerInitialPosition);
  var parentPaddingTop = isHeaderRelative ? header.offsetHeight : '0'; // Start target where header will be fixed | Default: Window Height (100vh)

  var startTarget = isElementSet(startTargetClass) ? getOffsetTop(startTargetClass) : window.outerHeight; // End target where header will be shown | Default: The page bottom

  var endTarget = isElementSet(endTargetClass) ? getOffsetTop(endTargetClass) : document.body.scrollHeight; // Scroll event listener

  $(window).scroll(function (event) {
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
        setParentPaddingTop();
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
      setParentPaddingTop(0);
    }

    updateLastScroll();
  }
}

function getThemeVariables() {
  return {
    breakpoints: {
      xs: 0,
      sm: 425,
      // Read 'from 425px' (min-width)
      md: 1024,
      // Read 'from 1024px' (min-width)
      lg: 1366,
      // Read 'from 1366px' (min-width)
      xl: 1680 // Read 'from 1680px' (min-width)

    },
    collapseTransitionTime: 350,
    // In milliseconds
    colors: {
      primary: '#',
      secondary: '#',
      success: '#',
      info: '#',
      warning: '#',
      danger: '#',
      light: '#',
      dark: '#'
    }
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
  var buttons = form.querySelectorAll('button');
  buttons.forEach(function (button) {
    button.setAttribute('disabled', 'disabled');
    var buttonText = button.innerText;
    button.innerHTML = "<span class=\"spinner-container\">\n                            <span class=\"spinner-border spinner-border-sm text-light\"\n                                  role=\"status\"></span>\n                            ".concat(buttonText, "\n                        </span>");
    var spinner = button.querySelector('.spinner-container');
    spinner.classList.add('d-inline-block');
  });
}

function setupSmoothScroll() {
  // Smooth page scroll
  var elementsScrollTo = document.querySelectorAll('a.js-scroll-to');
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

function setupInputMasks() {
  function setMaskToAllElements(elements, maskOptions) {
    Array.prototype.forEach.call(elements, function (element) {
      var mask = IMask(element, maskOptions);
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
  $('[data-toggle="popover"]').popover();
}

function setupTooltip() {
  $('[data-toggle="tooltip"]').tooltip();
}

function setupAnchorReloadPrevention() {
  $('a[href="#"]').click(function (e) {
    e.preventDefault();
  });
}

function setupInfiniteScroll() {
  new InfiniteScroll('.infinite-scroll', {
    path: 'a[rel~="next"]',
    append: '.infinite-scroll-content',
    scrollThreshold: 100,
    status: '.page-load-status',
    history: false
  });
}

function setupShareWindow() {
  $('.share').click(function (e) {
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

function setupDataLayerEventClickButton() {
  var buttons = document.querySelectorAll('.js-btn-data-layer');

  if (!buttons.length) {
    return;
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function (clickEvent) {
      var nameDataLayerAction = 'data-fmd-datalayer-action';
      var linkDataLayerAction = clickEvent.currentTarget.getAttribute(nameDataLayerAction);

      if (!linkDataLayerAction) {
        throw new Error("Adicione atributo ".concat(nameDataLayerAction, " com seu valor"));
      }

      var dataLayerOptions = getDataLayerOptions({
        action: linkDataLayerAction
      });
      window.dataLayer.push(dataLayerOptions);
    });
  });
}

function getDataLayerOptions(options) {
  window.dataLayer = window.dataLayer || [];
  return _objectSpread(_objectSpread({}, options), {}, {
    event: options.event || 'gaEvent',
    category: options.category || 'clique',
    action: options.action || '',
    label: options.label || 'enviado'
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
  // setupDataLayerEventClickButton();
});
window.addEventListener('load', function () {
  /**
   * Usually the header triggers after the first section which has the
   * height defined as 100vh. We need the starting function here because
   * vh/vw are calculated after all resources loaded*/
  setupFmdHeader();

  if (window.innerWidth > getThemeVariables().breakpoints.md) {// setupLax();
  } // setupInfiniteScroll();

});
setupLivewire();
