var M2 = Object.defineProperty;
var Xg = t => {
   throw TypeError(t)
};
var R2 = (t, e, r) => e in t ? M2(t, e, {
   enumerable: !0,
   configurable: !0,
   writable: !0,
   value: r
}) : t[e] = r;
var ur = (t, e, r) => R2(t, typeof e != "symbol" ? e + "" : e, r),
   Wd = (t, e, r) => e.has(t) || Xg("Cannot " + r);
var L = (t, e, r) => (Wd(t, e, "read from private field"), r ? r.call(t) : e.get(t)),
   Fe = (t, e, r) => e.has(t) ? Xg("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r),
   Pe = (t, e, r, i) => (Wd(t, e, "write to private field"), i ? i.call(t, r) : e.set(t, r), r),
   pt = (t, e, r) => (Wd(t, e, "access private method"), r);
var Gl = (t, e, r, i) => ({
   set _(a) {
      Pe(t, e, a, r)
   },
   get _() {
      return L(t, e, i)
   }
});

function O2(t, e) {
   for (var r = 0; r < e.length; r++) {
      const i = e[r];
      if (typeof i != "string" && !Array.isArray(i)) {
         for (const a in i)
            if (a !== "default" && !(a in t)) {
               const l = Object.getOwnPropertyDescriptor(i, a);
               l && Object.defineProperty(t, a, l.get ? l : {
                  enumerable: !0,
                  get: () => i[a]
               })
            }
      }
   }
   return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
   }))
}(function () {
   const e = document.createElement("link").relList;
   if (e && e.supports && e.supports("modulepreload")) return;
   for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
   new MutationObserver(a => {
      for (const l of a)
         if (l.type === "childList")
            for (const u of l.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && i(u)
   }).observe(document, {
      childList: !0,
      subtree: !0
   });

   function r(a) {
      const l = {};
      return a.integrity && (l.integrity = a.integrity), a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? l.credentials = "include" : a.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
   }

   function i(a) {
      if (a.ep) return;
      a.ep = !0;
      const l = r(a);
      fetch(a.href, l)
   }
})();

function _o(t) {
   return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Hd = {
      exports: {}
   },
   Da = {},
   Qd = {
      exports: {}
   },
   Oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jg;

function L2() {
   if (Jg) return Oe;
   Jg = 1;
   var t = Symbol.for("react.element"),
      e = Symbol.for("react.portal"),
      r = Symbol.for("react.fragment"),
      i = Symbol.for("react.strict_mode"),
      a = Symbol.for("react.profiler"),
      l = Symbol.for("react.provider"),
      u = Symbol.for("react.context"),
      d = Symbol.for("react.forward_ref"),
      p = Symbol.for("react.suspense"),
      m = Symbol.for("react.memo"),
      y = Symbol.for("react.lazy"),
      v = Symbol.iterator;

   function w(A) {
      return A === null || typeof A != "object" ? null : (A = v && A[v] || A["@@iterator"], typeof A == "function" ? A : null)
   }
   var T = {
         isMounted: function () {
            return !1
         },
         enqueueForceUpdate: function () {},
         enqueueReplaceState: function () {},
         enqueueSetState: function () {}
      },
      P = Object.assign,
      S = {};

   function C(A, Z, Ne) {
      this.props = A, this.context = Z, this.refs = S, this.updater = Ne || T
   }
   C.prototype.isReactComponent = {}, C.prototype.setState = function (A, Z) {
      if (typeof A != "object" && typeof A != "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, A, Z, "setState")
   }, C.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate")
   };

   function _() {}
   _.prototype = C.prototype;

   function D(A, Z, Ne) {
      this.props = A, this.context = Z, this.refs = S, this.updater = Ne || T
   }
   var F = D.prototype = new _;
   F.constructor = D, P(F, C.prototype), F.isPureReactComponent = !0;
   var $ = Array.isArray,
      z = Object.prototype.hasOwnProperty,
      U = {
         current: null
      },
      Y = {
         key: !0,
         ref: !0,
         __self: !0,
         __source: !0
      };

   function B(A, Z, Ne) {
      var Ae, ze = {},
         Ve = null,
         Qe = null;
      if (Z != null)
         for (Ae in Z.ref !== void 0 && (Qe = Z.ref), Z.key !== void 0 && (Ve = "" + Z.key), Z) z.call(Z, Ae) && !Y.hasOwnProperty(Ae) && (ze[Ae] = Z[Ae]);
      var Ue = arguments.length - 2;
      if (Ue === 1) ze.children = Ne;
      else if (1 < Ue) {
         for (var Ke = Array(Ue), Vt = 0; Vt < Ue; Vt++) Ke[Vt] = arguments[Vt + 2];
         ze.children = Ke
      }
      if (A && A.defaultProps)
         for (Ae in Ue = A.defaultProps, Ue) ze[Ae] === void 0 && (ze[Ae] = Ue[Ae]);
      return {
         $$typeof: t,
         type: A,
         key: Ve,
         ref: Qe,
         props: ze,
         _owner: U.current
      }
   }

   function me(A, Z) {
      return {
         $$typeof: t,
         type: A.type,
         key: Z,
         ref: A.ref,
         props: A.props,
         _owner: A._owner
      }
   }

   function ye(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t
   }

   function Le(A) {
      var Z = {
         "=": "=0",
         ":": "=2"
      };
      return "$" + A.replace(/[=:]/g, function (Ne) {
         return Z[Ne]
      })
   }
   var X = /\/+/g;

   function ge(A, Z) {
      return typeof A == "object" && A !== null && A.key != null ? Le("" + A.key) : Z.toString(36)
   }

   function se(A, Z, Ne, Ae, ze) {
      var Ve = typeof A;
      (Ve === "undefined" || Ve === "boolean") && (A = null);
      var Qe = !1;
      if (A === null) Qe = !0;
      else switch (Ve) {
         case "string":
         case "number":
            Qe = !0;
            break;
         case "object":
            switch (A.$$typeof) {
               case t:
               case e:
                  Qe = !0
            }
      }
      if (Qe) return Qe = A, ze = ze(Qe), A = Ae === "" ? "." + ge(Qe, 0) : Ae, $(ze) ? (Ne = "", A != null && (Ne = A.replace(X, "$&/") + "/"), se(ze, Z, Ne, "", function (Vt) {
         return Vt
      })) : ze != null && (ye(ze) && (ze = me(ze, Ne + (!ze.key || Qe && Qe.key === ze.key ? "" : ("" + ze.key).replace(X, "$&/") + "/") + A)), Z.push(ze)), 1;
      if (Qe = 0, Ae = Ae === "" ? "." : Ae + ":", $(A))
         for (var Ue = 0; Ue < A.length; Ue++) {
            Ve = A[Ue];
            var Ke = Ae + ge(Ve, Ue);
            Qe += se(Ve, Z, Ne, Ke, ze)
         } else if (Ke = w(A), typeof Ke == "function")
            for (A = Ke.call(A), Ue = 0; !(Ve = A.next()).done;) Ve = Ve.value, Ke = Ae + ge(Ve, Ue++), Qe += se(Ve, Z, Ne, Ke, ze);
         else if (Ve === "object") throw Z = String(A), Error("Objects are not valid as a React child (found: " + (Z === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : Z) + "). If you meant to render a collection of children, use an array instead.");
      return Qe
   }

   function _e(A, Z, Ne) {
      if (A == null) return A;
      var Ae = [],
         ze = 0;
      return se(A, Ae, "", "", function (Ve) {
         return Z.call(Ne, Ve, ze++)
      }), Ae
   }

   function Se(A) {
      if (A._status === -1) {
         var Z = A._result;
         Z = Z(), Z.then(function (Ne) {
            (A._status === 0 || A._status === -1) && (A._status = 1, A._result = Ne)
         }, function (Ne) {
            (A._status === 0 || A._status === -1) && (A._status = 2, A._result = Ne)
         }), A._status === -1 && (A._status = 0, A._result = Z)
      }
      if (A._status === 1) return A._result.default;
      throw A._result
   }
   var fe = {
         current: null
      },
      Q = {
         transition: null
      },
      ae = {
         ReactCurrentDispatcher: fe,
         ReactCurrentBatchConfig: Q,
         ReactCurrentOwner: U
      };

   function ee() {
      throw Error("act(...) is not supported in production builds of React.")
   }
   return Oe.Children = {
      map: _e,
      forEach: function (A, Z, Ne) {
         _e(A, function () {
            Z.apply(this, arguments)
         }, Ne)
      },
      count: function (A) {
         var Z = 0;
         return _e(A, function () {
            Z++
         }), Z
      },
      toArray: function (A) {
         return _e(A, function (Z) {
            return Z
         }) || []
      },
      only: function (A) {
         if (!ye(A)) throw Error("React.Children.only expected to receive a single React element child.");
         return A
      }
   }, Oe.Component = C, Oe.Fragment = r, Oe.Profiler = a, Oe.PureComponent = D, Oe.StrictMode = i, Oe.Suspense = p, Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, Oe.act = ee, Oe.cloneElement = function (A, Z, Ne) {
      if (A == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
      var Ae = P({}, A.props),
         ze = A.key,
         Ve = A.ref,
         Qe = A._owner;
      if (Z != null) {
         if (Z.ref !== void 0 && (Ve = Z.ref, Qe = U.current), Z.key !== void 0 && (ze = "" + Z.key), A.type && A.type.defaultProps) var Ue = A.type.defaultProps;
         for (Ke in Z) z.call(Z, Ke) && !Y.hasOwnProperty(Ke) && (Ae[Ke] = Z[Ke] === void 0 && Ue !== void 0 ? Ue[Ke] : Z[Ke])
      }
      var Ke = arguments.length - 2;
      if (Ke === 1) Ae.children = Ne;
      else if (1 < Ke) {
         Ue = Array(Ke);
         for (var Vt = 0; Vt < Ke; Vt++) Ue[Vt] = arguments[Vt + 2];
         Ae.children = Ue
      }
      return {
         $$typeof: t,
         type: A.type,
         key: ze,
         ref: Ve,
         props: Ae,
         _owner: Qe
      }
   }, Oe.createContext = function (A) {
      return A = {
         $$typeof: u,
         _currentValue: A,
         _currentValue2: A,
         _threadCount: 0,
         Provider: null,
         Consumer: null,
         _defaultValue: null,
         _globalName: null
      }, A.Provider = {
         $$typeof: l,
         _context: A
      }, A.Consumer = A
   }, Oe.createElement = B, Oe.createFactory = function (A) {
      var Z = B.bind(null, A);
      return Z.type = A, Z
   }, Oe.createRef = function () {
      return {
         current: null
      }
   }, Oe.forwardRef = function (A) {
      return {
         $$typeof: d,
         render: A
      }
   }, Oe.isValidElement = ye, Oe.lazy = function (A) {
      return {
         $$typeof: y,
         _payload: {
            _status: -1,
            _result: A
         },
         _init: Se
      }
   }, Oe.memo = function (A, Z) {
      return {
         $$typeof: m,
         type: A,
         compare: Z === void 0 ? null : Z
      }
   }, Oe.startTransition = function (A) {
      var Z = Q.transition;
      Q.transition = {};
      try {
         A()
      } finally {
         Q.transition = Z
      }
   }, Oe.unstable_act = ee, Oe.useCallback = function (A, Z) {
      return fe.current.useCallback(A, Z)
   }, Oe.useContext = function (A) {
      return fe.current.useContext(A)
   }, Oe.useDebugValue = function () {}, Oe.useDeferredValue = function (A) {
      return fe.current.useDeferredValue(A)
   }, Oe.useEffect = function (A, Z) {
      return fe.current.useEffect(A, Z)
   }, Oe.useId = function () {
      return fe.current.useId()
   }, Oe.useImperativeHandle = function (A, Z, Ne) {
      return fe.current.useImperativeHandle(A, Z, Ne)
   }, Oe.useInsertionEffect = function (A, Z) {
      return fe.current.useInsertionEffect(A, Z)
   }, Oe.useLayoutEffect = function (A, Z) {
      return fe.current.useLayoutEffect(A, Z)
   }, Oe.useMemo = function (A, Z) {
      return fe.current.useMemo(A, Z)
   }, Oe.useReducer = function (A, Z, Ne) {
      return fe.current.useReducer(A, Z, Ne)
   }, Oe.useRef = function (A) {
      return fe.current.useRef(A)
   }, Oe.useState = function (A) {
      return fe.current.useState(A)
   }, Oe.useSyncExternalStore = function (A, Z, Ne) {
      return fe.current.useSyncExternalStore(A, Z, Ne)
   }, Oe.useTransition = function () {
      return fe.current.useTransition()
   }, Oe.version = "18.3.1", Oe
}
var ey;

function Lc() {
   return ey || (ey = 1, Qd.exports = L2()), Qd.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ty;

function F2() {
   if (ty) return Da;
   ty = 1;
   var t = Lc(),
      e = Symbol.for("react.element"),
      r = Symbol.for("react.fragment"),
      i = Object.prototype.hasOwnProperty,
      a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      l = {
         key: !0,
         ref: !0,
         __self: !0,
         __source: !0
      };

   function u(d, p, m) {
      var y, v = {},
         w = null,
         T = null;
      m !== void 0 && (w = "" + m), p.key !== void 0 && (w = "" + p.key), p.ref !== void 0 && (T = p.ref);
      for (y in p) i.call(p, y) && !l.hasOwnProperty(y) && (v[y] = p[y]);
      if (d && d.defaultProps)
         for (y in p = d.defaultProps, p) v[y] === void 0 && (v[y] = p[y]);
      return {
         $$typeof: e,
         type: d,
         key: w,
         ref: T,
         props: v,
         _owner: a.current
      }
   }
   return Da.Fragment = r, Da.jsx = u, Da.jsxs = u, Da
}
var ny;

function V2() {
   return ny || (ny = 1, Hd.exports = F2()), Hd.exports
}
var f = V2(),
   Yl = {},
   qd = {
      exports: {}
   },
   Yt = {},
   Kd = {
      exports: {}
   },
   Gd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ry;

function z2() {
   return ry || (ry = 1, function (t) {
      function e(Q, ae) {
         var ee = Q.length;
         Q.push(ae);
         e: for (; 0 < ee;) {
            var A = ee - 1 >>> 1,
               Z = Q[A];
            if (0 < a(Z, ae)) Q[A] = ae, Q[ee] = Z, ee = A;
            else break e
         }
      }

      function r(Q) {
         return Q.length === 0 ? null : Q[0]
      }

      function i(Q) {
         if (Q.length === 0) return null;
         var ae = Q[0],
            ee = Q.pop();
         if (ee !== ae) {
            Q[0] = ee;
            e: for (var A = 0, Z = Q.length, Ne = Z >>> 1; A < Ne;) {
               var Ae = 2 * (A + 1) - 1,
                  ze = Q[Ae],
                  Ve = Ae + 1,
                  Qe = Q[Ve];
               if (0 > a(ze, ee)) Ve < Z && 0 > a(Qe, ze) ? (Q[A] = Qe, Q[Ve] = ee, A = Ve) : (Q[A] = ze, Q[Ae] = ee, A = Ae);
               else if (Ve < Z && 0 > a(Qe, ee)) Q[A] = Qe, Q[Ve] = ee, A = Ve;
               else break e
            }
         }
         return ae
      }

      function a(Q, ae) {
         var ee = Q.sortIndex - ae.sortIndex;
         return ee !== 0 ? ee : Q.id - ae.id
      }
      if (typeof performance == "object" && typeof performance.now == "function") {
         var l = performance;
         t.unstable_now = function () {
            return l.now()
         }
      } else {
         var u = Date,
            d = u.now();
         t.unstable_now = function () {
            return u.now() - d
         }
      }
      var p = [],
         m = [],
         y = 1,
         v = null,
         w = 3,
         T = !1,
         P = !1,
         S = !1,
         C = typeof setTimeout == "function" ? setTimeout : null,
         _ = typeof clearTimeout == "function" ? clearTimeout : null,
         D = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

      function F(Q) {
         for (var ae = r(m); ae !== null;) {
            if (ae.callback === null) i(m);
            else if (ae.startTime <= Q) i(m), ae.sortIndex = ae.expirationTime, e(p, ae);
            else break;
            ae = r(m)
         }
      }

      function $(Q) {
         if (S = !1, F(Q), !P)
            if (r(p) !== null) P = !0, Se(z);
            else {
               var ae = r(m);
               ae !== null && fe($, ae.startTime - Q)
            }
      }

      function z(Q, ae) {
         P = !1, S && (S = !1, _(B), B = -1), T = !0;
         var ee = w;
         try {
            for (F(ae), v = r(p); v !== null && (!(v.expirationTime > ae) || Q && !Le());) {
               var A = v.callback;
               if (typeof A == "function") {
                  v.callback = null, w = v.priorityLevel;
                  var Z = A(v.expirationTime <= ae);
                  ae = t.unstable_now(), typeof Z == "function" ? v.callback = Z : v === r(p) && i(p), F(ae)
               } else i(p);
               v = r(p)
            }
            if (v !== null) var Ne = !0;
            else {
               var Ae = r(m);
               Ae !== null && fe($, Ae.startTime - ae), Ne = !1
            }
            return Ne
         } finally {
            v = null, w = ee, T = !1
         }
      }
      var U = !1,
         Y = null,
         B = -1,
         me = 5,
         ye = -1;

      function Le() {
         return !(t.unstable_now() - ye < me)
      }

      function X() {
         if (Y !== null) {
            var Q = t.unstable_now();
            ye = Q;
            var ae = !0;
            try {
               ae = Y(!0, Q)
            } finally {
               ae ? ge() : (U = !1, Y = null)
            }
         } else U = !1
      }
      var ge;
      if (typeof D == "function") ge = function () {
         D(X)
      };
      else if (typeof MessageChannel < "u") {
         var se = new MessageChannel,
            _e = se.port2;
         se.port1.onmessage = X, ge = function () {
            _e.postMessage(null)
         }
      } else ge = function () {
         C(X, 0)
      };

      function Se(Q) {
         Y = Q, U || (U = !0, ge())
      }

      function fe(Q, ae) {
         B = C(function () {
            Q(t.unstable_now())
         }, ae)
      }
      t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (Q) {
         Q.callback = null
      }, t.unstable_continueExecution = function () {
         P || T || (P = !0, Se(z))
      }, t.unstable_forceFrameRate = function (Q) {
         0 > Q || 125 < Q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : me = 0 < Q ? Math.floor(1e3 / Q) : 5
      }, t.unstable_getCurrentPriorityLevel = function () {
         return w
      }, t.unstable_getFirstCallbackNode = function () {
         return r(p)
      }, t.unstable_next = function (Q) {
         switch (w) {
            case 1:
            case 2:
            case 3:
               var ae = 3;
               break;
            default:
               ae = w
         }
         var ee = w;
         w = ae;
         try {
            return Q()
         } finally {
            w = ee
         }
      }, t.unstable_pauseExecution = function () {}, t.unstable_requestPaint = function () {}, t.unstable_runWithPriority = function (Q, ae) {
         switch (Q) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
               break;
            default:
               Q = 3
         }
         var ee = w;
         w = Q;
         try {
            return ae()
         } finally {
            w = ee
         }
      }, t.unstable_scheduleCallback = function (Q, ae, ee) {
         var A = t.unstable_now();
         switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? A + ee : A) : ee = A, Q) {
            case 1:
               var Z = -1;
               break;
            case 2:
               Z = 250;
               break;
            case 5:
               Z = 1073741823;
               break;
            case 4:
               Z = 1e4;
               break;
            default:
               Z = 5e3
         }
         return Z = ee + Z, Q = {
            id: y++,
            callback: ae,
            priorityLevel: Q,
            startTime: ee,
            expirationTime: Z,
            sortIndex: -1
         }, ee > A ? (Q.sortIndex = ee, e(m, Q), r(p) === null && Q === r(m) && (S ? (_(B), B = -1) : S = !0, fe($, ee - A))) : (Q.sortIndex = Z, e(p, Q), P || T || (P = !0, Se(z))), Q
      }, t.unstable_shouldYield = Le, t.unstable_wrapCallback = function (Q) {
         var ae = w;
         return function () {
            var ee = w;
            w = ae;
            try {
               return Q.apply(this, arguments)
            } finally {
               w = ee
            }
         }
      }
   }(Gd)), Gd
}
var sy;

function B2() {
   return sy || (sy = 1, Kd.exports = z2()), Kd.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iy;

function U2() {
   if (iy) return Yt;
   iy = 1;
   var t = Lc(),
      e = B2();

   function r(n) {
      for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) s += "&args[]=" + encodeURIComponent(arguments[o]);
      return "Minified React error #" + n + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
   }
   var i = new Set,
      a = {};

   function l(n, s) {
      u(n, s), u(n + "Capture", s)
   }

   function u(n, s) {
      for (a[n] = s, n = 0; n < s.length; n++) i.add(s[n])
   }
   var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
      p = Object.prototype.hasOwnProperty,
      m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      y = {},
      v = {};

   function w(n) {
      return p.call(v, n) ? !0 : p.call(y, n) ? !1 : m.test(n) ? v[n] = !0 : (y[n] = !0, !1)
   }

   function T(n, s, o, c) {
      if (o !== null && o.type === 0) return !1;
      switch (typeof s) {
         case "function":
         case "symbol":
            return !0;
         case "boolean":
            return c ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
         default:
            return !1
      }
   }

   function P(n, s, o, c) {
      if (s === null || typeof s > "u" || T(n, s, o, c)) return !0;
      if (c) return !1;
      if (o !== null) switch (o.type) {
         case 3:
            return !s;
         case 4:
            return s === !1;
         case 5:
            return isNaN(s);
         case 6:
            return isNaN(s) || 1 > s
      }
      return !1
   }

   function S(n, s, o, c, h, g, x) {
      this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = c, this.attributeNamespace = h, this.mustUseProperty = o, this.propertyName = n, this.type = s, this.sanitizeURL = g, this.removeEmptyString = x
   }
   var C = {};
   "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (n) {
      C[n] = new S(n, 0, !1, n, null, !1, !1)
   }), [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"]
   ].forEach(function (n) {
      var s = n[0];
      C[s] = new S(s, 1, !1, n[1], null, !1, !1)
   }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (n) {
      C[n] = new S(n, 2, !1, n.toLowerCase(), null, !1, !1)
   }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (n) {
      C[n] = new S(n, 2, !1, n, null, !1, !1)
   }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (n) {
      C[n] = new S(n, 3, !1, n.toLowerCase(), null, !1, !1)
   }), ["checked", "multiple", "muted", "selected"].forEach(function (n) {
      C[n] = new S(n, 3, !0, n, null, !1, !1)
   }), ["capture", "download"].forEach(function (n) {
      C[n] = new S(n, 4, !1, n, null, !1, !1)
   }), ["cols", "rows", "size", "span"].forEach(function (n) {
      C[n] = new S(n, 6, !1, n, null, !1, !1)
   }), ["rowSpan", "start"].forEach(function (n) {
      C[n] = new S(n, 5, !1, n.toLowerCase(), null, !1, !1)
   });
   var _ = /[\-:]([a-z])/g;

   function D(n) {
      return n[1].toUpperCase()
   }
   "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (n) {
      var s = n.replace(_, D);
      C[s] = new S(s, 1, !1, n, null, !1, !1)
   }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (n) {
      var s = n.replace(_, D);
      C[s] = new S(s, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1)
   }), ["xml:base", "xml:lang", "xml:space"].forEach(function (n) {
      var s = n.replace(_, D);
      C[s] = new S(s, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1)
   }), ["tabIndex", "crossOrigin"].forEach(function (n) {
      C[n] = new S(n, 1, !1, n.toLowerCase(), null, !1, !1)
   }), C.xlinkHref = new S("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function (n) {
      C[n] = new S(n, 1, !1, n.toLowerCase(), null, !0, !0)
   });

   function F(n, s, o, c) {
      var h = C.hasOwnProperty(s) ? C[s] : null;
      (h !== null ? h.type !== 0 : c || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (P(s, o, h, c) && (o = null), c || h === null ? w(s) && (o === null ? n.removeAttribute(s) : n.setAttribute(s, "" + o)) : h.mustUseProperty ? n[h.propertyName] = o === null ? h.type === 3 ? !1 : "" : o : (s = h.attributeName, c = h.attributeNamespace, o === null ? n.removeAttribute(s) : (h = h.type, o = h === 3 || h === 4 && o === !0 ? "" : "" + o, c ? n.setAttributeNS(c, s, o) : n.setAttribute(s, o))))
   }
   var $ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      z = Symbol.for("react.element"),
      U = Symbol.for("react.portal"),
      Y = Symbol.for("react.fragment"),
      B = Symbol.for("react.strict_mode"),
      me = Symbol.for("react.profiler"),
      ye = Symbol.for("react.provider"),
      Le = Symbol.for("react.context"),
      X = Symbol.for("react.forward_ref"),
      ge = Symbol.for("react.suspense"),
      se = Symbol.for("react.suspense_list"),
      _e = Symbol.for("react.memo"),
      Se = Symbol.for("react.lazy"),
      fe = Symbol.for("react.offscreen"),
      Q = Symbol.iterator;

   function ae(n) {
      return n === null || typeof n != "object" ? null : (n = Q && n[Q] || n["@@iterator"], typeof n == "function" ? n : null)
   }
   var ee = Object.assign,
      A;

   function Z(n) {
      if (A === void 0) try {
         throw Error()
      } catch (o) {
         var s = o.stack.trim().match(/\n( *(at )?)/);
         A = s && s[1] || ""
      }
      return `
` + A + n
   }
   var Ne = !1;

   function Ae(n, s) {
      if (!n || Ne) return "";
      Ne = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
         if (s)
            if (s = function () {
                  throw Error()
               }, Object.defineProperty(s.prototype, "props", {
                  set: function () {
                     throw Error()
                  }
               }), typeof Reflect == "object" && Reflect.construct) {
               try {
                  Reflect.construct(s, [])
               } catch (O) {
                  var c = O
               }
               Reflect.construct(n, [], s)
            } else {
               try {
                  s.call()
               } catch (O) {
                  c = O
               }
               n.call(s.prototype)
            }
         else {
            try {
               throw Error()
            } catch (O) {
               c = O
            }
            n()
         }
      } catch (O) {
         if (O && c && typeof O.stack == "string") {
            for (var h = O.stack.split(`
`), g = c.stack.split(`
`), x = h.length - 1, k = g.length - 1; 1 <= x && 0 <= k && h[x] !== g[k];) k--;
            for (; 1 <= x && 0 <= k; x--, k--)
               if (h[x] !== g[k]) {
                  if (x !== 1 || k !== 1)
                     do
                        if (x--, k--, 0 > k || h[x] !== g[k]) {
                           var j = `
` + h[x].replace(" at new ", " at ");
                           return n.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", n.displayName)), j
                        } while (1 <= x && 0 <= k);
                  break
               }
         }
      } finally {
         Ne = !1, Error.prepareStackTrace = o
      }
      return (n = n ? n.displayName || n.name : "") ? Z(n) : ""
   }

   function ze(n) {
      switch (n.tag) {
         case 5:
            return Z(n.type);
         case 16:
            return Z("Lazy");
         case 13:
            return Z("Suspense");
         case 19:
            return Z("SuspenseList");
         case 0:
         case 2:
         case 15:
            return n = Ae(n.type, !1), n;
         case 11:
            return n = Ae(n.type.render, !1), n;
         case 1:
            return n = Ae(n.type, !0), n;
         default:
            return ""
      }
   }

   function Ve(n) {
      if (n == null) return null;
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
         case Y:
            return "Fragment";
         case U:
            return "Portal";
         case me:
            return "Profiler";
         case B:
            return "StrictMode";
         case ge:
            return "Suspense";
         case se:
            return "SuspenseList"
      }
      if (typeof n == "object") switch (n.$$typeof) {
         case Le:
            return (n.displayName || "Context") + ".Consumer";
         case ye:
            return (n._context.displayName || "Context") + ".Provider";
         case X:
            var s = n.render;
            return n = n.displayName, n || (n = s.displayName || s.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
         case _e:
            return s = n.displayName || null, s !== null ? s : Ve(n.type) || "Memo";
         case Se:
            s = n._payload, n = n._init;
            try {
               return Ve(n(s))
            } catch {}
      }
      return null
   }

   function Qe(n) {
      var s = n.type;
      switch (n.tag) {
         case 24:
            return "Cache";
         case 9:
            return (s.displayName || "Context") + ".Consumer";
         case 10:
            return (s._context.displayName || "Context") + ".Provider";
         case 18:
            return "DehydratedFragment";
         case 11:
            return n = s.render, n = n.displayName || n.name || "", s.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
         case 7:
            return "Fragment";
         case 5:
            return s;
         case 4:
            return "Portal";
         case 3:
            return "Root";
         case 6:
            return "Text";
         case 16:
            return Ve(s);
         case 8:
            return s === B ? "StrictMode" : "Mode";
         case 22:
            return "Offscreen";
         case 12:
            return "Profiler";
         case 21:
            return "Scope";
         case 13:
            return "Suspense";
         case 19:
            return "SuspenseList";
         case 25:
            return "TracingMarker";
         case 1:
         case 0:
         case 17:
         case 2:
         case 14:
         case 15:
            if (typeof s == "function") return s.displayName || s.name || null;
            if (typeof s == "string") return s
      }
      return null
   }

   function Ue(n) {
      switch (typeof n) {
         case "boolean":
         case "number":
         case "string":
         case "undefined":
            return n;
         case "object":
            return n;
         default:
            return ""
      }
   }

   function Ke(n) {
      var s = n.type;
      return (n = n.nodeName) && n.toLowerCase() === "input" && (s === "checkbox" || s === "radio")
   }

   function Vt(n) {
      var s = Ke(n) ? "checked" : "value",
         o = Object.getOwnPropertyDescriptor(n.constructor.prototype, s),
         c = "" + n[s];
      if (!n.hasOwnProperty(s) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
         var h = o.get,
            g = o.set;
         return Object.defineProperty(n, s, {
            configurable: !0,
            get: function () {
               return h.call(this)
            },
            set: function (x) {
               c = "" + x, g.call(this, x)
            }
         }), Object.defineProperty(n, s, {
            enumerable: o.enumerable
         }), {
            getValue: function () {
               return c
            },
            setValue: function (x) {
               c = "" + x
            },
            stopTracking: function () {
               n._valueTracker = null, delete n[s]
            }
         }
      }
   }

   function us(n) {
      n._valueTracker || (n._valueTracker = Vt(n))
   }

   function Fo(n) {
      if (!n) return !1;
      var s = n._valueTracker;
      if (!s) return !0;
      var o = s.getValue(),
         c = "";
      return n && (c = Ke(n) ? n.checked ? "true" : "false" : n.value), n = c, n !== o ? (s.setValue(n), !0) : !1
   }

   function ds(n) {
      if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
      try {
         return n.activeElement || n.body
      } catch {
         return n.body
      }
   }

   function $s(n, s) {
      var o = s.checked;
      return ee({}, s, {
         defaultChecked: void 0,
         defaultValue: void 0,
         value: void 0,
         checked: o ?? n._wrapperState.initialChecked
      })
   }

   function eu(n, s) {
      var o = s.defaultValue == null ? "" : s.defaultValue,
         c = s.checked != null ? s.checked : s.defaultChecked;
      o = Ue(s.value != null ? s.value : o), n._wrapperState = {
         initialChecked: c,
         initialValue: o,
         controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
      }
   }

   function tu(n, s) {
      s = s.checked, s != null && F(n, "checked", s, !1)
   }

   function Vo(n, s) {
      tu(n, s);
      var o = Ue(s.value),
         c = s.type;
      if (o != null) c === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
      else if (c === "submit" || c === "reset") {
         n.removeAttribute("value");
         return
      }
      s.hasOwnProperty("value") ? R(n, s.type, o) : s.hasOwnProperty("defaultValue") && R(n, s.type, Ue(s.defaultValue)), s.checked == null && s.defaultChecked != null && (n.defaultChecked = !!s.defaultChecked)
   }

   function E(n, s, o) {
      if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
         var c = s.type;
         if (!(c !== "submit" && c !== "reset" || s.value !== void 0 && s.value !== null)) return;
         s = "" + n._wrapperState.initialValue, o || s === n.value || (n.value = s), n.defaultValue = s
      }
      o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o)
   }

   function R(n, s, o) {
      (s !== "number" || ds(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o))
   }
   var V = Array.isArray;

   function re(n, s, o, c) {
      if (n = n.options, s) {
         s = {};
         for (var h = 0; h < o.length; h++) s["$" + o[h]] = !0;
         for (o = 0; o < n.length; o++) h = s.hasOwnProperty("$" + n[o].value), n[o].selected !== h && (n[o].selected = h), h && c && (n[o].defaultSelected = !0)
      } else {
         for (o = "" + Ue(o), s = null, h = 0; h < n.length; h++) {
            if (n[h].value === o) {
               n[h].selected = !0, c && (n[h].defaultSelected = !0);
               return
            }
            s !== null || n[h].disabled || (s = n[h])
         }
         s !== null && (s.selected = !0)
      }
   }

   function te(n, s) {
      if (s.dangerouslySetInnerHTML != null) throw Error(r(91));
      return ee({}, s, {
         value: void 0,
         defaultValue: void 0,
         children: "" + n._wrapperState.initialValue
      })
   }

   function J(n, s) {
      var o = s.value;
      if (o == null) {
         if (o = s.children, s = s.defaultValue, o != null) {
            if (s != null) throw Error(r(92));
            if (V(o)) {
               if (1 < o.length) throw Error(r(93));
               o = o[0]
            }
            s = o
         }
         s == null && (s = ""), o = s
      }
      n._wrapperState = {
         initialValue: Ue(o)
      }
   }

   function ve(n, s) {
      var o = Ue(s.value),
         c = Ue(s.defaultValue);
      o != null && (o = "" + o, o !== n.value && (n.value = o), s.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), c != null && (n.defaultValue = "" + c)
   }

   function Ie(n) {
      var s = n.textContent;
      s === n._wrapperState.initialValue && s !== "" && s !== null && (n.value = s)
   }

   function dt(n) {
      switch (n) {
         case "svg":
            return "http://www.w3.org/2000/svg";
         case "math":
            return "http://www.w3.org/1998/Math/MathML";
         default:
            return "http://www.w3.org/1999/xhtml"
      }
   }

   function at(n, s) {
      return n == null || n === "http://www.w3.org/1999/xhtml" ? dt(s) : n === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n
   }
   var tn, zo = function (n) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (s, o, c, h) {
         MSApp.execUnsafeLocalFunction(function () {
            return n(s, o, c, h)
         })
      } : n
   }(function (n, s) {
      if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = s;
      else {
         for (tn = tn || document.createElement("div"), tn.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>", s = tn.firstChild; n.firstChild;) n.removeChild(n.firstChild);
         for (; s.firstChild;) n.appendChild(s.firstChild)
      }
   });

   function er(n, s) {
      if (s) {
         var o = n.firstChild;
         if (o && o === n.lastChild && o.nodeType === 3) {
            o.nodeValue = s;
            return
         }
      }
      n.textContent = s
   }
   var tr = {
         animationIterationCount: !0,
         aspectRatio: !0,
         borderImageOutset: !0,
         borderImageSlice: !0,
         borderImageWidth: !0,
         boxFlex: !0,
         boxFlexGroup: !0,
         boxOrdinalGroup: !0,
         columnCount: !0,
         columns: !0,
         flex: !0,
         flexGrow: !0,
         flexPositive: !0,
         flexShrink: !0,
         flexNegative: !0,
         flexOrder: !0,
         gridArea: !0,
         gridRow: !0,
         gridRowEnd: !0,
         gridRowSpan: !0,
         gridRowStart: !0,
         gridColumn: !0,
         gridColumnEnd: !0,
         gridColumnSpan: !0,
         gridColumnStart: !0,
         fontWeight: !0,
         lineClamp: !0,
         lineHeight: !0,
         opacity: !0,
         order: !0,
         orphans: !0,
         tabSize: !0,
         widows: !0,
         zIndex: !0,
         zoom: !0,
         fillOpacity: !0,
         floodOpacity: !0,
         stopOpacity: !0,
         strokeDasharray: !0,
         strokeDashoffset: !0,
         strokeMiterlimit: !0,
         strokeOpacity: !0,
         strokeWidth: !0
      },
      nu = ["Webkit", "ms", "Moz", "O"];
   Object.keys(tr).forEach(function (n) {
      nu.forEach(function (s) {
         s = s + n.charAt(0).toUpperCase() + n.substring(1), tr[s] = tr[n]
      })
   });

   function Ki(n, s, o) {
      return s == null || typeof s == "boolean" || s === "" ? "" : o || typeof s != "number" || s === 0 || tr.hasOwnProperty(n) && tr[n] ? ("" + s).trim() : s + "px"
   }

   function Bo(n, s) {
      n = n.style;
      for (var o in s)
         if (s.hasOwnProperty(o)) {
            var c = o.indexOf("--") === 0,
               h = Ki(o, s[o], c);
            o === "float" && (o = "cssFloat"), c ? n.setProperty(o, h) : n[o] = h
         }
   }
   var Uo = ee({
      menuitem: !0
   }, {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
   });

   function ru(n, s) {
      if (s) {
         if (Uo[n] && (s.children != null || s.dangerouslySetInnerHTML != null)) throw Error(r(137, n));
         if (s.dangerouslySetInnerHTML != null) {
            if (s.children != null) throw Error(r(60));
            if (typeof s.dangerouslySetInnerHTML != "object" || !("__html" in s.dangerouslySetInnerHTML)) throw Error(r(61))
         }
         if (s.style != null && typeof s.style != "object") throw Error(r(62))
      }
   }

   function su(n, s) {
      if (n.indexOf("-") === -1) return typeof s.is == "string";
      switch (n) {
         case "annotation-xml":
         case "color-profile":
         case "font-face":
         case "font-face-src":
         case "font-face-uri":
         case "font-face-format":
         case "font-face-name":
         case "missing-glyph":
            return !1;
         default:
            return !0
      }
   }
   var iu = null;

   function au(n) {
      return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n
   }
   var ou = null,
      Zs = null,
      Ws = null;

   function mp(n) {
      if (n = ya(n)) {
         if (typeof ou != "function") throw Error(r(280));
         var s = n.stateNode;
         s && (s = dl(s), ou(n.stateNode, n.type, s))
      }
   }

   function gp(n) {
      Zs ? Ws ? Ws.push(n) : Ws = [n] : Zs = n
   }

   function yp() {
      if (Zs) {
         var n = Zs,
            s = Ws;
         if (Ws = Zs = null, mp(n), s)
            for (n = 0; n < s.length; n++) mp(s[n])
      }
   }

   function vp(n, s) {
      return n(s)
   }

   function xp() {}
   var lu = !1;

   function wp(n, s, o) {
      if (lu) return n(s, o);
      lu = !0;
      try {
         return vp(n, s, o)
      } finally {
         lu = !1, (Zs !== null || Ws !== null) && (xp(), yp())
      }
   }

   function Gi(n, s) {
      var o = n.stateNode;
      if (o === null) return null;
      var c = dl(o);
      if (c === null) return null;
      o = c[s];
      e: switch (s) {
         case "onClick":
         case "onClickCapture":
         case "onDoubleClick":
         case "onDoubleClickCapture":
         case "onMouseDown":
         case "onMouseDownCapture":
         case "onMouseMove":
         case "onMouseMoveCapture":
         case "onMouseUp":
         case "onMouseUpCapture":
         case "onMouseEnter":
            (c = !c.disabled) || (n = n.type, c = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !c;
            break e;
         default:
            n = !1
      }
      if (n) return null;
      if (o && typeof o != "function") throw Error(r(231, s, typeof o));
      return o
   }
   var cu = !1;
   if (d) try {
      var Yi = {};
      Object.defineProperty(Yi, "passive", {
         get: function () {
            cu = !0
         }
      }), window.addEventListener("test", Yi, Yi), window.removeEventListener("test", Yi, Yi)
   } catch {
      cu = !1
   }

   function z1(n, s, o, c, h, g, x, k, j) {
      var O = Array.prototype.slice.call(arguments, 3);
      try {
         s.apply(o, O)
      } catch (H) {
         this.onError(H)
      }
   }
   var Xi = !1,
      $o = null,
      Zo = !1,
      uu = null,
      B1 = {
         onError: function (n) {
            Xi = !0, $o = n
         }
      };

   function U1(n, s, o, c, h, g, x, k, j) {
      Xi = !1, $o = null, z1.apply(B1, arguments)
   }

   function $1(n, s, o, c, h, g, x, k, j) {
      if (U1.apply(this, arguments), Xi) {
         if (Xi) {
            var O = $o;
            Xi = !1, $o = null
         } else throw Error(r(198));
         Zo || (Zo = !0, uu = O)
      }
   }

   function fs(n) {
      var s = n,
         o = n;
      if (n.alternate)
         for (; s.return;) s = s.return;
      else {
         n = s;
         do s = n, (s.flags & 4098) !== 0 && (o = s.return), n = s.return; while (n)
      }
      return s.tag === 3 ? o : null
   }

   function bp(n) {
      if (n.tag === 13) {
         var s = n.memoizedState;
         if (s === null && (n = n.alternate, n !== null && (s = n.memoizedState)), s !== null) return s.dehydrated
      }
      return null
   }

   function kp(n) {
      if (fs(n) !== n) throw Error(r(188))
   }

   function Z1(n) {
      var s = n.alternate;
      if (!s) {
         if (s = fs(n), s === null) throw Error(r(188));
         return s !== n ? null : n
      }
      for (var o = n, c = s;;) {
         var h = o.return;
         if (h === null) break;
         var g = h.alternate;
         if (g === null) {
            if (c = h.return, c !== null) {
               o = c;
               continue
            }
            break
         }
         if (h.child === g.child) {
            for (g = h.child; g;) {
               if (g === o) return kp(h), n;
               if (g === c) return kp(h), s;
               g = g.sibling
            }
            throw Error(r(188))
         }
         if (o.return !== c.return) o = h, c = g;
         else {
            for (var x = !1, k = h.child; k;) {
               if (k === o) {
                  x = !0, o = h, c = g;
                  break
               }
               if (k === c) {
                  x = !0, c = h, o = g;
                  break
               }
               k = k.sibling
            }
            if (!x) {
               for (k = g.child; k;) {
                  if (k === o) {
                     x = !0, o = g, c = h;
                     break
                  }
                  if (k === c) {
                     x = !0, c = g, o = h;
                     break
                  }
                  k = k.sibling
               }
               if (!x) throw Error(r(189))
            }
         }
         if (o.alternate !== c) throw Error(r(190))
      }
      if (o.tag !== 3) throw Error(r(188));
      return o.stateNode.current === o ? n : s
   }

   function Sp(n) {
      return n = Z1(n), n !== null ? Tp(n) : null
   }

   function Tp(n) {
      if (n.tag === 5 || n.tag === 6) return n;
      for (n = n.child; n !== null;) {
         var s = Tp(n);
         if (s !== null) return s;
         n = n.sibling
      }
      return null
   }
   var Cp = e.unstable_scheduleCallback,
      jp = e.unstable_cancelCallback,
      W1 = e.unstable_shouldYield,
      H1 = e.unstable_requestPaint,
      ft = e.unstable_now,
      Q1 = e.unstable_getCurrentPriorityLevel,
      du = e.unstable_ImmediatePriority,
      Ep = e.unstable_UserBlockingPriority,
      Wo = e.unstable_NormalPriority,
      q1 = e.unstable_LowPriority,
      Pp = e.unstable_IdlePriority,
      Ho = null,
      Fn = null;

   function K1(n) {
      if (Fn && typeof Fn.onCommitFiberRoot == "function") try {
         Fn.onCommitFiberRoot(Ho, n, void 0, (n.current.flags & 128) === 128)
      } catch {}
   }
   var bn = Math.clz32 ? Math.clz32 : X1,
      G1 = Math.log,
      Y1 = Math.LN2;

   function X1(n) {
      return n >>>= 0, n === 0 ? 32 : 31 - (G1(n) / Y1 | 0) | 0
   }
   var Qo = 64,
      qo = 4194304;

   function Ji(n) {
      switch (n & -n) {
         case 1:
            return 1;
         case 2:
            return 2;
         case 4:
            return 4;
         case 8:
            return 8;
         case 16:
            return 16;
         case 32:
            return 32;
         case 64:
         case 128:
         case 256:
         case 512:
         case 1024:
         case 2048:
         case 4096:
         case 8192:
         case 16384:
         case 32768:
         case 65536:
         case 131072:
         case 262144:
         case 524288:
         case 1048576:
         case 2097152:
            return n & 4194240;
         case 4194304:
         case 8388608:
         case 16777216:
         case 33554432:
         case 67108864:
            return n & 130023424;
         case 134217728:
            return 134217728;
         case 268435456:
            return 268435456;
         case 536870912:
            return 536870912;
         case 1073741824:
            return 1073741824;
         default:
            return n
      }
   }

   function Ko(n, s) {
      var o = n.pendingLanes;
      if (o === 0) return 0;
      var c = 0,
         h = n.suspendedLanes,
         g = n.pingedLanes,
         x = o & 268435455;
      if (x !== 0) {
         var k = x & ~h;
         k !== 0 ? c = Ji(k) : (g &= x, g !== 0 && (c = Ji(g)))
      } else x = o & ~h, x !== 0 ? c = Ji(x) : g !== 0 && (c = Ji(g));
      if (c === 0) return 0;
      if (s !== 0 && s !== c && (s & h) === 0 && (h = c & -c, g = s & -s, h >= g || h === 16 && (g & 4194240) !== 0)) return s;
      if ((c & 4) !== 0 && (c |= o & 16), s = n.entangledLanes, s !== 0)
         for (n = n.entanglements, s &= c; 0 < s;) o = 31 - bn(s), h = 1 << o, c |= n[o], s &= ~h;
      return c
   }

   function J1(n, s) {
      switch (n) {
         case 1:
         case 2:
         case 4:
            return s + 250;
         case 8:
         case 16:
         case 32:
         case 64:
         case 128:
         case 256:
         case 512:
         case 1024:
         case 2048:
         case 4096:
         case 8192:
         case 16384:
         case 32768:
         case 65536:
         case 131072:
         case 262144:
         case 524288:
         case 1048576:
         case 2097152:
            return s + 5e3;
         case 4194304:
         case 8388608:
         case 16777216:
         case 33554432:
         case 67108864:
            return -1;
         case 134217728:
         case 268435456:
         case 536870912:
         case 1073741824:
            return -1;
         default:
            return -1
      }
   }

   function ek(n, s) {
      for (var o = n.suspendedLanes, c = n.pingedLanes, h = n.expirationTimes, g = n.pendingLanes; 0 < g;) {
         var x = 31 - bn(g),
            k = 1 << x,
            j = h[x];
         j === -1 ? ((k & o) === 0 || (k & c) !== 0) && (h[x] = J1(k, s)) : j <= s && (n.expiredLanes |= k), g &= ~k
      }
   }

   function fu(n) {
      return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
   }

   function _p() {
      var n = Qo;
      return Qo <<= 1, (Qo & 4194240) === 0 && (Qo = 64), n
   }

   function hu(n) {
      for (var s = [], o = 0; 31 > o; o++) s.push(n);
      return s
   }

   function ea(n, s, o) {
      n.pendingLanes |= s, s !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, s = 31 - bn(s), n[s] = o
   }

   function tk(n, s) {
      var o = n.pendingLanes & ~s;
      n.pendingLanes = s, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= s, n.mutableReadLanes &= s, n.entangledLanes &= s, s = n.entanglements;
      var c = n.eventTimes;
      for (n = n.expirationTimes; 0 < o;) {
         var h = 31 - bn(o),
            g = 1 << h;
         s[h] = 0, c[h] = -1, n[h] = -1, o &= ~g
      }
   }

   function pu(n, s) {
      var o = n.entangledLanes |= s;
      for (n = n.entanglements; o;) {
         var c = 31 - bn(o),
            h = 1 << c;
         h & s | n[c] & s && (n[c] |= s), o &= ~h
      }
   }
   var qe = 0;

   function Np(n) {
      return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
   }
   var Ap, mu, Dp, Ip, Mp, gu = !1,
      Go = [],
      Tr = null,
      Cr = null,
      jr = null,
      ta = new Map,
      na = new Map,
      Er = [],
      nk = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

   function Rp(n, s) {
      switch (n) {
         case "focusin":
         case "focusout":
            Tr = null;
            break;
         case "dragenter":
         case "dragleave":
            Cr = null;
            break;
         case "mouseover":
         case "mouseout":
            jr = null;
            break;
         case "pointerover":
         case "pointerout":
            ta.delete(s.pointerId);
            break;
         case "gotpointercapture":
         case "lostpointercapture":
            na.delete(s.pointerId)
      }
   }

   function ra(n, s, o, c, h, g) {
      return n === null || n.nativeEvent !== g ? (n = {
         blockedOn: s,
         domEventName: o,
         eventSystemFlags: c,
         nativeEvent: g,
         targetContainers: [h]
      }, s !== null && (s = ya(s), s !== null && mu(s)), n) : (n.eventSystemFlags |= c, s = n.targetContainers, h !== null && s.indexOf(h) === -1 && s.push(h), n)
   }

   function rk(n, s, o, c, h) {
      switch (s) {
         case "focusin":
            return Tr = ra(Tr, n, s, o, c, h), !0;
         case "dragenter":
            return Cr = ra(Cr, n, s, o, c, h), !0;
         case "mouseover":
            return jr = ra(jr, n, s, o, c, h), !0;
         case "pointerover":
            var g = h.pointerId;
            return ta.set(g, ra(ta.get(g) || null, n, s, o, c, h)), !0;
         case "gotpointercapture":
            return g = h.pointerId, na.set(g, ra(na.get(g) || null, n, s, o, c, h)), !0
      }
      return !1
   }

   function Op(n) {
      var s = hs(n.target);
      if (s !== null) {
         var o = fs(s);
         if (o !== null) {
            if (s = o.tag, s === 13) {
               if (s = bp(o), s !== null) {
                  n.blockedOn = s, Mp(n.priority, function () {
                     Dp(o)
                  });
                  return
               }
            } else if (s === 3 && o.stateNode.current.memoizedState.isDehydrated) {
               n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
               return
            }
         }
      }
      n.blockedOn = null
   }

   function Yo(n) {
      if (n.blockedOn !== null) return !1;
      for (var s = n.targetContainers; 0 < s.length;) {
         var o = vu(n.domEventName, n.eventSystemFlags, s[0], n.nativeEvent);
         if (o === null) {
            o = n.nativeEvent;
            var c = new o.constructor(o.type, o);
            iu = c, o.target.dispatchEvent(c), iu = null
         } else return s = ya(o), s !== null && mu(s), n.blockedOn = o, !1;
         s.shift()
      }
      return !0
   }

   function Lp(n, s, o) {
      Yo(n) && o.delete(s)
   }

   function sk() {
      gu = !1, Tr !== null && Yo(Tr) && (Tr = null), Cr !== null && Yo(Cr) && (Cr = null), jr !== null && Yo(jr) && (jr = null), ta.forEach(Lp), na.forEach(Lp)
   }

   function sa(n, s) {
      n.blockedOn === s && (n.blockedOn = null, gu || (gu = !0, e.unstable_scheduleCallback(e.unstable_NormalPriority, sk)))
   }

   function ia(n) {
      function s(h) {
         return sa(h, n)
      }
      if (0 < Go.length) {
         sa(Go[0], n);
         for (var o = 1; o < Go.length; o++) {
            var c = Go[o];
            c.blockedOn === n && (c.blockedOn = null)
         }
      }
      for (Tr !== null && sa(Tr, n), Cr !== null && sa(Cr, n), jr !== null && sa(jr, n), ta.forEach(s), na.forEach(s), o = 0; o < Er.length; o++) c = Er[o], c.blockedOn === n && (c.blockedOn = null);
      for (; 0 < Er.length && (o = Er[0], o.blockedOn === null);) Op(o), o.blockedOn === null && Er.shift()
   }
   var Hs = $.ReactCurrentBatchConfig,
      Xo = !0;

   function ik(n, s, o, c) {
      var h = qe,
         g = Hs.transition;
      Hs.transition = null;
      try {
         qe = 1, yu(n, s, o, c)
      } finally {
         qe = h, Hs.transition = g
      }
   }

   function ak(n, s, o, c) {
      var h = qe,
         g = Hs.transition;
      Hs.transition = null;
      try {
         qe = 4, yu(n, s, o, c)
      } finally {
         qe = h, Hs.transition = g
      }
   }

   function yu(n, s, o, c) {
      if (Xo) {
         var h = vu(n, s, o, c);
         if (h === null) Ru(n, s, c, Jo, o), Rp(n, c);
         else if (rk(h, n, s, o, c)) c.stopPropagation();
         else if (Rp(n, c), s & 4 && -1 < nk.indexOf(n)) {
            for (; h !== null;) {
               var g = ya(h);
               if (g !== null && Ap(g), g = vu(n, s, o, c), g === null && Ru(n, s, c, Jo, o), g === h) break;
               h = g
            }
            h !== null && c.stopPropagation()
         } else Ru(n, s, c, null, o)
      }
   }
   var Jo = null;

   function vu(n, s, o, c) {
      if (Jo = null, n = au(c), n = hs(n), n !== null)
         if (s = fs(n), s === null) n = null;
         else if (o = s.tag, o === 13) {
         if (n = bp(s), n !== null) return n;
         n = null
      } else if (o === 3) {
         if (s.stateNode.current.memoizedState.isDehydrated) return s.tag === 3 ? s.stateNode.containerInfo : null;
         n = null
      } else s !== n && (n = null);
      return Jo = n, null
   }

   function Fp(n) {
      switch (n) {
         case "cancel":
         case "click":
         case "close":
         case "contextmenu":
         case "copy":
         case "cut":
         case "auxclick":
         case "dblclick":
         case "dragend":
         case "dragstart":
         case "drop":
         case "focusin":
         case "focusout":
         case "input":
         case "invalid":
         case "keydown":
         case "keypress":
         case "keyup":
         case "mousedown":
         case "mouseup":
         case "paste":
         case "pause":
         case "play":
         case "pointercancel":
         case "pointerdown":
         case "pointerup":
         case "ratechange":
         case "reset":
         case "resize":
         case "seeked":
         case "submit":
         case "touchcancel":
         case "touchend":
         case "touchstart":
         case "volumechange":
         case "change":
         case "selectionchange":
         case "textInput":
         case "compositionstart":
         case "compositionend":
         case "compositionupdate":
         case "beforeblur":
         case "afterblur":
         case "beforeinput":
         case "blur":
         case "fullscreenchange":
         case "focus":
         case "hashchange":
         case "popstate":
         case "select":
         case "selectstart":
            return 1;
         case "drag":
         case "dragenter":
         case "dragexit":
         case "dragleave":
         case "dragover":
         case "mousemove":
         case "mouseout":
         case "mouseover":
         case "pointermove":
         case "pointerout":
         case "pointerover":
         case "scroll":
         case "toggle":
         case "touchmove":
         case "wheel":
         case "mouseenter":
         case "mouseleave":
         case "pointerenter":
         case "pointerleave":
            return 4;
         case "message":
            switch (Q1()) {
               case du:
                  return 1;
               case Ep:
                  return 4;
               case Wo:
               case q1:
                  return 16;
               case Pp:
                  return 536870912;
               default:
                  return 16
            }
         default:
            return 16
      }
   }
   var Pr = null,
      xu = null,
      el = null;

   function Vp() {
      if (el) return el;
      var n, s = xu,
         o = s.length,
         c, h = "value" in Pr ? Pr.value : Pr.textContent,
         g = h.length;
      for (n = 0; n < o && s[n] === h[n]; n++);
      var x = o - n;
      for (c = 1; c <= x && s[o - c] === h[g - c]; c++);
      return el = h.slice(n, 1 < c ? 1 - c : void 0)
   }

   function tl(n) {
      var s = n.keyCode;
      return "charCode" in n ? (n = n.charCode, n === 0 && s === 13 && (n = 13)) : n = s, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0
   }

   function nl() {
      return !0
   }

   function zp() {
      return !1
   }

   function nn(n) {
      function s(o, c, h, g, x) {
         this._reactName = o, this._targetInst = h, this.type = c, this.nativeEvent = g, this.target = x, this.currentTarget = null;
         for (var k in n) n.hasOwnProperty(k) && (o = n[k], this[k] = o ? o(g) : g[k]);
         return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? nl : zp, this.isPropagationStopped = zp, this
      }
      return ee(s.prototype, {
         preventDefault: function () {
            this.defaultPrevented = !0;
            var o = this.nativeEvent;
            o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = nl)
         },
         stopPropagation: function () {
            var o = this.nativeEvent;
            o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = nl)
         },
         persist: function () {},
         isPersistent: nl
      }), s
   }
   var Qs = {
         eventPhase: 0,
         bubbles: 0,
         cancelable: 0,
         timeStamp: function (n) {
            return n.timeStamp || Date.now()
         },
         defaultPrevented: 0,
         isTrusted: 0
      },
      wu = nn(Qs),
      aa = ee({}, Qs, {
         view: 0,
         detail: 0
      }),
      ok = nn(aa),
      bu, ku, oa, rl = ee({}, aa, {
         screenX: 0,
         screenY: 0,
         clientX: 0,
         clientY: 0,
         pageX: 0,
         pageY: 0,
         ctrlKey: 0,
         shiftKey: 0,
         altKey: 0,
         metaKey: 0,
         getModifierState: Tu,
         button: 0,
         buttons: 0,
         relatedTarget: function (n) {
            return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget
         },
         movementX: function (n) {
            return "movementX" in n ? n.movementX : (n !== oa && (oa && n.type === "mousemove" ? (bu = n.screenX - oa.screenX, ku = n.screenY - oa.screenY) : ku = bu = 0, oa = n), bu)
         },
         movementY: function (n) {
            return "movementY" in n ? n.movementY : ku
         }
      }),
      Bp = nn(rl),
      lk = ee({}, rl, {
         dataTransfer: 0
      }),
      ck = nn(lk),
      uk = ee({}, aa, {
         relatedTarget: 0
      }),
      Su = nn(uk),
      dk = ee({}, Qs, {
         animationName: 0,
         elapsedTime: 0,
         pseudoElement: 0
      }),
      fk = nn(dk),
      hk = ee({}, Qs, {
         clipboardData: function (n) {
            return "clipboardData" in n ? n.clipboardData : window.clipboardData
         }
      }),
      pk = nn(hk),
      mk = ee({}, Qs, {
         data: 0
      }),
      Up = nn(mk),
      gk = {
         Esc: "Escape",
         Spacebar: " ",
         Left: "ArrowLeft",
         Up: "ArrowUp",
         Right: "ArrowRight",
         Down: "ArrowDown",
         Del: "Delete",
         Win: "OS",
         Menu: "ContextMenu",
         Apps: "ContextMenu",
         Scroll: "ScrollLock",
         MozPrintableKey: "Unidentified"
      },
      yk = {
         8: "Backspace",
         9: "Tab",
         12: "Clear",
         13: "Enter",
         16: "Shift",
         17: "Control",
         18: "Alt",
         19: "Pause",
         20: "CapsLock",
         27: "Escape",
         32: " ",
         33: "PageUp",
         34: "PageDown",
         35: "End",
         36: "Home",
         37: "ArrowLeft",
         38: "ArrowUp",
         39: "ArrowRight",
         40: "ArrowDown",
         45: "Insert",
         46: "Delete",
         112: "F1",
         113: "F2",
         114: "F3",
         115: "F4",
         116: "F5",
         117: "F6",
         118: "F7",
         119: "F8",
         120: "F9",
         121: "F10",
         122: "F11",
         123: "F12",
         144: "NumLock",
         145: "ScrollLock",
         224: "Meta"
      },
      vk = {
         Alt: "altKey",
         Control: "ctrlKey",
         Meta: "metaKey",
         Shift: "shiftKey"
      };

   function xk(n) {
      var s = this.nativeEvent;
      return s.getModifierState ? s.getModifierState(n) : (n = vk[n]) ? !!s[n] : !1
   }

   function Tu() {
      return xk
   }
   var wk = ee({}, aa, {
         key: function (n) {
            if (n.key) {
               var s = gk[n.key] || n.key;
               if (s !== "Unidentified") return s
            }
            return n.type === "keypress" ? (n = tl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? yk[n.keyCode] || "Unidentified" : ""
         },
         code: 0,
         location: 0,
         ctrlKey: 0,
         shiftKey: 0,
         altKey: 0,
         metaKey: 0,
         repeat: 0,
         locale: 0,
         getModifierState: Tu,
         charCode: function (n) {
            return n.type === "keypress" ? tl(n) : 0
         },
         keyCode: function (n) {
            return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
         },
         which: function (n) {
            return n.type === "keypress" ? tl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
         }
      }),
      bk = nn(wk),
      kk = ee({}, rl, {
         pointerId: 0,
         width: 0,
         height: 0,
         pressure: 0,
         tangentialPressure: 0,
         tiltX: 0,
         tiltY: 0,
         twist: 0,
         pointerType: 0,
         isPrimary: 0
      }),
      $p = nn(kk),
      Sk = ee({}, aa, {
         touches: 0,
         targetTouches: 0,
         changedTouches: 0,
         altKey: 0,
         metaKey: 0,
         ctrlKey: 0,
         shiftKey: 0,
         getModifierState: Tu
      }),
      Tk = nn(Sk),
      Ck = ee({}, Qs, {
         propertyName: 0,
         elapsedTime: 0,
         pseudoElement: 0
      }),
      jk = nn(Ck),
      Ek = ee({}, rl, {
         deltaX: function (n) {
            return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0
         },
         deltaY: function (n) {
            return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0
         },
         deltaZ: 0,
         deltaMode: 0
      }),
      Pk = nn(Ek),
      _k = [9, 13, 27, 32],
      Cu = d && "CompositionEvent" in window,
      la = null;
   d && "documentMode" in document && (la = document.documentMode);
   var Nk = d && "TextEvent" in window && !la,
      Zp = d && (!Cu || la && 8 < la && 11 >= la),
      Wp = " ",
      Hp = !1;

   function Qp(n, s) {
      switch (n) {
         case "keyup":
            return _k.indexOf(s.keyCode) !== -1;
         case "keydown":
            return s.keyCode !== 229;
         case "keypress":
         case "mousedown":
         case "focusout":
            return !0;
         default:
            return !1
      }
   }

   function qp(n) {
      return n = n.detail, typeof n == "object" && "data" in n ? n.data : null
   }
   var qs = !1;

   function Ak(n, s) {
      switch (n) {
         case "compositionend":
            return qp(s);
         case "keypress":
            return s.which !== 32 ? null : (Hp = !0, Wp);
         case "textInput":
            return n = s.data, n === Wp && Hp ? null : n;
         default:
            return null
      }
   }

   function Dk(n, s) {
      if (qs) return n === "compositionend" || !Cu && Qp(n, s) ? (n = Vp(), el = xu = Pr = null, qs = !1, n) : null;
      switch (n) {
         case "paste":
            return null;
         case "keypress":
            if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
               if (s.char && 1 < s.char.length) return s.char;
               if (s.which) return String.fromCharCode(s.which)
            }
            return null;
         case "compositionend":
            return Zp && s.locale !== "ko" ? null : s.data;
         default:
            return null
      }
   }
   var Ik = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
   };

   function Kp(n) {
      var s = n && n.nodeName && n.nodeName.toLowerCase();
      return s === "input" ? !!Ik[n.type] : s === "textarea"
   }

   function Gp(n, s, o, c) {
      gp(c), s = ll(s, "onChange"), 0 < s.length && (o = new wu("onChange", "change", null, o, c), n.push({
         event: o,
         listeners: s
      }))
   }
   var ca = null,
      ua = null;

   function Mk(n) {
      pm(n, 0)
   }

   function sl(n) {
      var s = Js(n);
      if (Fo(s)) return n
   }

   function Rk(n, s) {
      if (n === "change") return s
   }
   var Yp = !1;
   if (d) {
      var ju;
      if (d) {
         var Eu = "oninput" in document;
         if (!Eu) {
            var Xp = document.createElement("div");
            Xp.setAttribute("oninput", "return;"), Eu = typeof Xp.oninput == "function"
         }
         ju = Eu
      } else ju = !1;
      Yp = ju && (!document.documentMode || 9 < document.documentMode)
   }

   function Jp() {
      ca && (ca.detachEvent("onpropertychange", em), ua = ca = null)
   }

   function em(n) {
      if (n.propertyName === "value" && sl(ua)) {
         var s = [];
         Gp(s, ua, n, au(n)), wp(Mk, s)
      }
   }

   function Ok(n, s, o) {
      n === "focusin" ? (Jp(), ca = s, ua = o, ca.attachEvent("onpropertychange", em)) : n === "focusout" && Jp()
   }

   function Lk(n) {
      if (n === "selectionchange" || n === "keyup" || n === "keydown") return sl(ua)
   }

   function Fk(n, s) {
      if (n === "click") return sl(s)
   }

   function Vk(n, s) {
      if (n === "input" || n === "change") return sl(s)
   }

   function zk(n, s) {
      return n === s && (n !== 0 || 1 / n === 1 / s) || n !== n && s !== s
   }
   var kn = typeof Object.is == "function" ? Object.is : zk;

   function da(n, s) {
      if (kn(n, s)) return !0;
      if (typeof n != "object" || n === null || typeof s != "object" || s === null) return !1;
      var o = Object.keys(n),
         c = Object.keys(s);
      if (o.length !== c.length) return !1;
      for (c = 0; c < o.length; c++) {
         var h = o[c];
         if (!p.call(s, h) || !kn(n[h], s[h])) return !1
      }
      return !0
   }

   function tm(n) {
      for (; n && n.firstChild;) n = n.firstChild;
      return n
   }

   function nm(n, s) {
      var o = tm(n);
      n = 0;
      for (var c; o;) {
         if (o.nodeType === 3) {
            if (c = n + o.textContent.length, n <= s && c >= s) return {
               node: o,
               offset: s - n
            };
            n = c
         }
         e: {
            for (; o;) {
               if (o.nextSibling) {
                  o = o.nextSibling;
                  break e
               }
               o = o.parentNode
            }
            o = void 0
         }
         o = tm(o)
      }
   }

   function rm(n, s) {
      return n && s ? n === s ? !0 : n && n.nodeType === 3 ? !1 : s && s.nodeType === 3 ? rm(n, s.parentNode) : "contains" in n ? n.contains(s) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(s) & 16) : !1 : !1
   }

   function sm() {
      for (var n = window, s = ds(); s instanceof n.HTMLIFrameElement;) {
         try {
            var o = typeof s.contentWindow.location.href == "string"
         } catch {
            o = !1
         }
         if (o) n = s.contentWindow;
         else break;
         s = ds(n.document)
      }
      return s
   }

   function Pu(n) {
      var s = n && n.nodeName && n.nodeName.toLowerCase();
      return s && (s === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || s === "textarea" || n.contentEditable === "true")
   }

   function Bk(n) {
      var s = sm(),
         o = n.focusedElem,
         c = n.selectionRange;
      if (s !== o && o && o.ownerDocument && rm(o.ownerDocument.documentElement, o)) {
         if (c !== null && Pu(o)) {
            if (s = c.start, n = c.end, n === void 0 && (n = s), "selectionStart" in o) o.selectionStart = s, o.selectionEnd = Math.min(n, o.value.length);
            else if (n = (s = o.ownerDocument || document) && s.defaultView || window, n.getSelection) {
               n = n.getSelection();
               var h = o.textContent.length,
                  g = Math.min(c.start, h);
               c = c.end === void 0 ? g : Math.min(c.end, h), !n.extend && g > c && (h = c, c = g, g = h), h = nm(o, g);
               var x = nm(o, c);
               h && x && (n.rangeCount !== 1 || n.anchorNode !== h.node || n.anchorOffset !== h.offset || n.focusNode !== x.node || n.focusOffset !== x.offset) && (s = s.createRange(), s.setStart(h.node, h.offset), n.removeAllRanges(), g > c ? (n.addRange(s), n.extend(x.node, x.offset)) : (s.setEnd(x.node, x.offset), n.addRange(s)))
            }
         }
         for (s = [], n = o; n = n.parentNode;) n.nodeType === 1 && s.push({
            element: n,
            left: n.scrollLeft,
            top: n.scrollTop
         });
         for (typeof o.focus == "function" && o.focus(), o = 0; o < s.length; o++) n = s[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top
      }
   }
   var Uk = d && "documentMode" in document && 11 >= document.documentMode,
      Ks = null,
      _u = null,
      fa = null,
      Nu = !1;

   function im(n, s, o) {
      var c = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
      Nu || Ks == null || Ks !== ds(c) || (c = Ks, "selectionStart" in c && Pu(c) ? c = {
         start: c.selectionStart,
         end: c.selectionEnd
      } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
         anchorNode: c.anchorNode,
         anchorOffset: c.anchorOffset,
         focusNode: c.focusNode,
         focusOffset: c.focusOffset
      }), fa && da(fa, c) || (fa = c, c = ll(_u, "onSelect"), 0 < c.length && (s = new wu("onSelect", "select", null, s, o), n.push({
         event: s,
         listeners: c
      }), s.target = Ks)))
   }

   function il(n, s) {
      var o = {};
      return o[n.toLowerCase()] = s.toLowerCase(), o["Webkit" + n] = "webkit" + s, o["Moz" + n] = "moz" + s, o
   }
   var Gs = {
         animationend: il("Animation", "AnimationEnd"),
         animationiteration: il("Animation", "AnimationIteration"),
         animationstart: il("Animation", "AnimationStart"),
         transitionend: il("Transition", "TransitionEnd")
      },
      Au = {},
      am = {};
   d && (am = document.createElement("div").style, "AnimationEvent" in window || (delete Gs.animationend.animation, delete Gs.animationiteration.animation, delete Gs.animationstart.animation), "TransitionEvent" in window || delete Gs.transitionend.transition);

   function al(n) {
      if (Au[n]) return Au[n];
      if (!Gs[n]) return n;
      var s = Gs[n],
         o;
      for (o in s)
         if (s.hasOwnProperty(o) && o in am) return Au[n] = s[o];
      return n
   }
   var om = al("animationend"),
      lm = al("animationiteration"),
      cm = al("animationstart"),
      um = al("transitionend"),
      dm = new Map,
      fm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

   function _r(n, s) {
      dm.set(n, s), l(s, [n])
   }
   for (var Du = 0; Du < fm.length; Du++) {
      var Iu = fm[Du],
         $k = Iu.toLowerCase(),
         Zk = Iu[0].toUpperCase() + Iu.slice(1);
      _r($k, "on" + Zk)
   }
   _r(om, "onAnimationEnd"), _r(lm, "onAnimationIteration"), _r(cm, "onAnimationStart"), _r("dblclick", "onDoubleClick"), _r("focusin", "onFocus"), _r("focusout", "onBlur"), _r(um, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
   var ha = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
      Wk = new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));

   function hm(n, s, o) {
      var c = n.type || "unknown-event";
      n.currentTarget = o, $1(c, s, void 0, n), n.currentTarget = null
   }

   function pm(n, s) {
      s = (s & 4) !== 0;
      for (var o = 0; o < n.length; o++) {
         var c = n[o],
            h = c.event;
         c = c.listeners;
         e: {
            var g = void 0;
            if (s)
               for (var x = c.length - 1; 0 <= x; x--) {
                  var k = c[x],
                     j = k.instance,
                     O = k.currentTarget;
                  if (k = k.listener, j !== g && h.isPropagationStopped()) break e;
                  hm(h, k, O), g = j
               } else
                  for (x = 0; x < c.length; x++) {
                     if (k = c[x], j = k.instance, O = k.currentTarget, k = k.listener, j !== g && h.isPropagationStopped()) break e;
                     hm(h, k, O), g = j
                  }
         }
      }
      if (Zo) throw n = uu, Zo = !1, uu = null, n
   }

   function Ye(n, s) {
      var o = s[Bu];
      o === void 0 && (o = s[Bu] = new Set);
      var c = n + "__bubble";
      o.has(c) || (mm(s, n, 2, !1), o.add(c))
   }

   function Mu(n, s, o) {
      var c = 0;
      s && (c |= 4), mm(o, n, c, s)
   }
   var ol = "_reactListening" + Math.random().toString(36).slice(2);

   function pa(n) {
      if (!n[ol]) {
         n[ol] = !0, i.forEach(function (o) {
            o !== "selectionchange" && (Wk.has(o) || Mu(o, !1, n), Mu(o, !0, n))
         });
         var s = n.nodeType === 9 ? n : n.ownerDocument;
         s === null || s[ol] || (s[ol] = !0, Mu("selectionchange", !1, s))
      }
   }

   function mm(n, s, o, c) {
      switch (Fp(s)) {
         case 1:
            var h = ik;
            break;
         case 4:
            h = ak;
            break;
         default:
            h = yu
      }
      o = h.bind(null, s, o, n), h = void 0, !cu || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (h = !0), c ? h !== void 0 ? n.addEventListener(s, o, {
         capture: !0,
         passive: h
      }) : n.addEventListener(s, o, !0) : h !== void 0 ? n.addEventListener(s, o, {
         passive: h
      }) : n.addEventListener(s, o, !1)
   }

   function Ru(n, s, o, c, h) {
      var g = c;
      if ((s & 1) === 0 && (s & 2) === 0 && c !== null) e: for (;;) {
         if (c === null) return;
         var x = c.tag;
         if (x === 3 || x === 4) {
            var k = c.stateNode.containerInfo;
            if (k === h || k.nodeType === 8 && k.parentNode === h) break;
            if (x === 4)
               for (x = c.return; x !== null;) {
                  var j = x.tag;
                  if ((j === 3 || j === 4) && (j = x.stateNode.containerInfo, j === h || j.nodeType === 8 && j.parentNode === h)) return;
                  x = x.return
               }
            for (; k !== null;) {
               if (x = hs(k), x === null) return;
               if (j = x.tag, j === 5 || j === 6) {
                  c = g = x;
                  continue e
               }
               k = k.parentNode
            }
         }
         c = c.return
      }
      wp(function () {
         var O = g,
            H = au(o),
            q = [];
         e: {
            var W = dm.get(n);
            if (W !== void 0) {
               var oe = wu,
                  ue = n;
               switch (n) {
                  case "keypress":
                     if (tl(o) === 0) break e;
                  case "keydown":
                  case "keyup":
                     oe = bk;
                     break;
                  case "focusin":
                     ue = "focus", oe = Su;
                     break;
                  case "focusout":
                     ue = "blur", oe = Su;
                     break;
                  case "beforeblur":
                  case "afterblur":
                     oe = Su;
                     break;
                  case "click":
                     if (o.button === 2) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                     oe = Bp;
                     break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                     oe = ck;
                     break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                     oe = Tk;
                     break;
                  case om:
                  case lm:
                  case cm:
                     oe = fk;
                     break;
                  case um:
                     oe = jk;
                     break;
                  case "scroll":
                     oe = ok;
                     break;
                  case "wheel":
                     oe = Pk;
                     break;
                  case "copy":
                  case "cut":
                  case "paste":
                     oe = pk;
                     break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                     oe = $p
               }
               var de = (s & 4) !== 0,
                  ht = !de && n === "scroll",
                  I = de ? W !== null ? W + "Capture" : null : W;
               de = [];
               for (var N = O, M; N !== null;) {
                  M = N;
                  var G = M.stateNode;
                  if (M.tag === 5 && G !== null && (M = G, I !== null && (G = Gi(N, I), G != null && de.push(ma(N, G, M)))), ht) break;
                  N = N.return
               }
               0 < de.length && (W = new oe(W, ue, null, o, H), q.push({
                  event: W,
                  listeners: de
               }))
            }
         }
         if ((s & 7) === 0) {
            e: {
               if (W = n === "mouseover" || n === "pointerover", oe = n === "mouseout" || n === "pointerout", W && o !== iu && (ue = o.relatedTarget || o.fromElement) && (hs(ue) || ue[nr])) break e;
               if ((oe || W) && (W = H.window === H ? H : (W = H.ownerDocument) ? W.defaultView || W.parentWindow : window, oe ? (ue = o.relatedTarget || o.toElement, oe = O, ue = ue ? hs(ue) : null, ue !== null && (ht = fs(ue), ue !== ht || ue.tag !== 5 && ue.tag !== 6) && (ue = null)) : (oe = null, ue = O), oe !== ue)) {
                  if (de = Bp, G = "onMouseLeave", I = "onMouseEnter", N = "mouse", (n === "pointerout" || n === "pointerover") && (de = $p, G = "onPointerLeave", I = "onPointerEnter", N = "pointer"), ht = oe == null ? W : Js(oe), M = ue == null ? W : Js(ue), W = new de(G, N + "leave", oe, o, H), W.target = ht, W.relatedTarget = M, G = null, hs(H) === O && (de = new de(I, N + "enter", ue, o, H), de.target = M, de.relatedTarget = ht, G = de), ht = G, oe && ue) t: {
                     for (de = oe, I = ue, N = 0, M = de; M; M = Ys(M)) N++;
                     for (M = 0, G = I; G; G = Ys(G)) M++;
                     for (; 0 < N - M;) de = Ys(de),
                     N--;
                     for (; 0 < M - N;) I = Ys(I),
                     M--;
                     for (; N--;) {
                        if (de === I || I !== null && de === I.alternate) break t;
                        de = Ys(de), I = Ys(I)
                     }
                     de = null
                  }
                  else de = null;
                  oe !== null && gm(q, W, oe, de, !1), ue !== null && ht !== null && gm(q, ht, ue, de, !0)
               }
            }
            e: {
               if (W = O ? Js(O) : window, oe = W.nodeName && W.nodeName.toLowerCase(), oe === "select" || oe === "input" && W.type === "file") var he = Rk;
               else if (Kp(W))
                  if (Yp) he = Vk;
                  else {
                     he = Lk;
                     var xe = Ok
                  }
               else(oe = W.nodeName) && oe.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (he = Fk);
               if (he && (he = he(n, O))) {
                  Gp(q, he, o, H);
                  break e
               }
               xe && xe(n, W, O),
               n === "focusout" && (xe = W._wrapperState) && xe.controlled && W.type === "number" && R(W, "number", W.value)
            }
            switch (xe = O ? Js(O) : window, n) {
               case "focusin":
                  (Kp(xe) || xe.contentEditable === "true") && (Ks = xe, _u = O, fa = null);
                  break;
               case "focusout":
                  fa = _u = Ks = null;
                  break;
               case "mousedown":
                  Nu = !0;
                  break;
               case "contextmenu":
               case "mouseup":
               case "dragend":
                  Nu = !1, im(q, o, H);
                  break;
               case "selectionchange":
                  if (Uk) break;
               case "keydown":
               case "keyup":
                  im(q, o, H)
            }
            var we;
            if (Cu) e: {
               switch (n) {
                  case "compositionstart":
                     var Ee = "onCompositionStart";
                     break e;
                  case "compositionend":
                     Ee = "onCompositionEnd";
                     break e;
                  case "compositionupdate":
                     Ee = "onCompositionUpdate";
                     break e
               }
               Ee = void 0
            }
            else qs ? Qp(n, o) && (Ee = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (Ee = "onCompositionStart");Ee && (Zp && o.locale !== "ko" && (qs || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && qs && (we = Vp()) : (Pr = H, xu = "value" in Pr ? Pr.value : Pr.textContent, qs = !0)), xe = ll(O, Ee), 0 < xe.length && (Ee = new Up(Ee, n, null, o, H), q.push({
               event: Ee,
               listeners: xe
            }), we ? Ee.data = we : (we = qp(o), we !== null && (Ee.data = we)))),
            (we = Nk ? Ak(n, o) : Dk(n, o)) && (O = ll(O, "onBeforeInput"), 0 < O.length && (H = new Up("onBeforeInput", "beforeinput", null, o, H), q.push({
               event: H,
               listeners: O
            }), H.data = we))
         }
         pm(q, s)
      })
   }

   function ma(n, s, o) {
      return {
         instance: n,
         listener: s,
         currentTarget: o
      }
   }

   function ll(n, s) {
      for (var o = s + "Capture", c = []; n !== null;) {
         var h = n,
            g = h.stateNode;
         h.tag === 5 && g !== null && (h = g, g = Gi(n, o), g != null && c.unshift(ma(n, g, h)), g = Gi(n, s), g != null && c.push(ma(n, g, h))), n = n.return
      }
      return c
   }

   function Ys(n) {
      if (n === null) return null;
      do n = n.return; while (n && n.tag !== 5);
      return n || null
   }

   function gm(n, s, o, c, h) {
      for (var g = s._reactName, x = []; o !== null && o !== c;) {
         var k = o,
            j = k.alternate,
            O = k.stateNode;
         if (j !== null && j === c) break;
         k.tag === 5 && O !== null && (k = O, h ? (j = Gi(o, g), j != null && x.unshift(ma(o, j, k))) : h || (j = Gi(o, g), j != null && x.push(ma(o, j, k)))), o = o.return
      }
      x.length !== 0 && n.push({
         event: s,
         listeners: x
      })
   }
   var Hk = /\r\n?/g,
      Qk = /\u0000|\uFFFD/g;

   function ym(n) {
      return (typeof n == "string" ? n : "" + n).replace(Hk, `
`).replace(Qk, "")
   }

   function cl(n, s, o) {
      if (s = ym(s), ym(n) !== s && o) throw Error(r(425))
   }

   function ul() {}
   var Ou = null,
      Lu = null;

   function Fu(n, s) {
      return n === "textarea" || n === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null
   }
   var Vu = typeof setTimeout == "function" ? setTimeout : void 0,
      qk = typeof clearTimeout == "function" ? clearTimeout : void 0,
      vm = typeof Promise == "function" ? Promise : void 0,
      Kk = typeof queueMicrotask == "function" ? queueMicrotask : typeof vm < "u" ? function (n) {
         return vm.resolve(null).then(n).catch(Gk)
      } : Vu;

   function Gk(n) {
      setTimeout(function () {
         throw n
      })
   }

   function zu(n, s) {
      var o = s,
         c = 0;
      do {
         var h = o.nextSibling;
         if (n.removeChild(o), h && h.nodeType === 8)
            if (o = h.data, o === "/$") {
               if (c === 0) {
                  n.removeChild(h), ia(s);
                  return
               }
               c--
            } else o !== "$" && o !== "$?" && o !== "$!" || c++;
         o = h
      } while (o);
      ia(s)
   }

   function Nr(n) {
      for (; n != null; n = n.nextSibling) {
         var s = n.nodeType;
         if (s === 1 || s === 3) break;
         if (s === 8) {
            if (s = n.data, s === "$" || s === "$!" || s === "$?") break;
            if (s === "/$") return null
         }
      }
      return n
   }

   function xm(n) {
      n = n.previousSibling;
      for (var s = 0; n;) {
         if (n.nodeType === 8) {
            var o = n.data;
            if (o === "$" || o === "$!" || o === "$?") {
               if (s === 0) return n;
               s--
            } else o === "/$" && s++
         }
         n = n.previousSibling
      }
      return null
   }
   var Xs = Math.random().toString(36).slice(2),
      Vn = "__reactFiber$" + Xs,
      ga = "__reactProps$" + Xs,
      nr = "__reactContainer$" + Xs,
      Bu = "__reactEvents$" + Xs,
      Yk = "__reactListeners$" + Xs,
      Xk = "__reactHandles$" + Xs;

   function hs(n) {
      var s = n[Vn];
      if (s) return s;
      for (var o = n.parentNode; o;) {
         if (s = o[nr] || o[Vn]) {
            if (o = s.alternate, s.child !== null || o !== null && o.child !== null)
               for (n = xm(n); n !== null;) {
                  if (o = n[Vn]) return o;
                  n = xm(n)
               }
            return s
         }
         n = o, o = n.parentNode
      }
      return null
   }

   function ya(n) {
      return n = n[Vn] || n[nr], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n
   }

   function Js(n) {
      if (n.tag === 5 || n.tag === 6) return n.stateNode;
      throw Error(r(33))
   }

   function dl(n) {
      return n[ga] || null
   }
   var Uu = [],
      ei = -1;

   function Ar(n) {
      return {
         current: n
      }
   }

   function Xe(n) {
      0 > ei || (n.current = Uu[ei], Uu[ei] = null, ei--)
   }

   function Ge(n, s) {
      ei++, Uu[ei] = n.current, n.current = s
   }
   var Dr = {},
      At = Ar(Dr),
      Ht = Ar(!1),
      ps = Dr;

   function ti(n, s) {
      var o = n.type.contextTypes;
      if (!o) return Dr;
      var c = n.stateNode;
      if (c && c.__reactInternalMemoizedUnmaskedChildContext === s) return c.__reactInternalMemoizedMaskedChildContext;
      var h = {},
         g;
      for (g in o) h[g] = s[g];
      return c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = s, n.__reactInternalMemoizedMaskedChildContext = h), h
   }

   function Qt(n) {
      return n = n.childContextTypes, n != null
   }

   function fl() {
      Xe(Ht), Xe(At)
   }

   function wm(n, s, o) {
      if (At.current !== Dr) throw Error(r(168));
      Ge(At, s), Ge(Ht, o)
   }

   function bm(n, s, o) {
      var c = n.stateNode;
      if (s = s.childContextTypes, typeof c.getChildContext != "function") return o;
      c = c.getChildContext();
      for (var h in c)
         if (!(h in s)) throw Error(r(108, Qe(n) || "Unknown", h));
      return ee({}, o, c)
   }

   function hl(n) {
      return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Dr, ps = At.current, Ge(At, n), Ge(Ht, Ht.current), !0
   }

   function km(n, s, o) {
      var c = n.stateNode;
      if (!c) throw Error(r(169));
      o ? (n = bm(n, s, ps), c.__reactInternalMemoizedMergedChildContext = n, Xe(Ht), Xe(At), Ge(At, n)) : Xe(Ht), Ge(Ht, o)
   }
   var rr = null,
      pl = !1,
      $u = !1;

   function Sm(n) {
      rr === null ? rr = [n] : rr.push(n)
   }

   function Jk(n) {
      pl = !0, Sm(n)
   }

   function Ir() {
      if (!$u && rr !== null) {
         $u = !0;
         var n = 0,
            s = qe;
         try {
            var o = rr;
            for (qe = 1; n < o.length; n++) {
               var c = o[n];
               do c = c(!0); while (c !== null)
            }
            rr = null, pl = !1
         } catch (h) {
            throw rr !== null && (rr = rr.slice(n + 1)), Cp(du, Ir), h
         } finally {
            qe = s, $u = !1
         }
      }
      return null
   }
   var ni = [],
      ri = 0,
      ml = null,
      gl = 0,
      un = [],
      dn = 0,
      ms = null,
      sr = 1,
      ir = "";

   function gs(n, s) {
      ni[ri++] = gl, ni[ri++] = ml, ml = n, gl = s
   }

   function Tm(n, s, o) {
      un[dn++] = sr, un[dn++] = ir, un[dn++] = ms, ms = n;
      var c = sr;
      n = ir;
      var h = 32 - bn(c) - 1;
      c &= ~(1 << h), o += 1;
      var g = 32 - bn(s) + h;
      if (30 < g) {
         var x = h - h % 5;
         g = (c & (1 << x) - 1).toString(32), c >>= x, h -= x, sr = 1 << 32 - bn(s) + h | o << h | c, ir = g + n
      } else sr = 1 << g | o << h | c, ir = n
   }

   function Zu(n) {
      n.return !== null && (gs(n, 1), Tm(n, 1, 0))
   }

   function Wu(n) {
      for (; n === ml;) ml = ni[--ri], ni[ri] = null, gl = ni[--ri], ni[ri] = null;
      for (; n === ms;) ms = un[--dn], un[dn] = null, ir = un[--dn], un[dn] = null, sr = un[--dn], un[dn] = null
   }
   var rn = null,
      sn = null,
      tt = !1,
      Sn = null;

   function Cm(n, s) {
      var o = mn(5, null, null, 0);
      o.elementType = "DELETED", o.stateNode = s, o.return = n, s = n.deletions, s === null ? (n.deletions = [o], n.flags |= 16) : s.push(o)
   }

   function jm(n, s) {
      switch (n.tag) {
         case 5:
            var o = n.type;
            return s = s.nodeType !== 1 || o.toLowerCase() !== s.nodeName.toLowerCase() ? null : s, s !== null ? (n.stateNode = s, rn = n, sn = Nr(s.firstChild), !0) : !1;
         case 6:
            return s = n.pendingProps === "" || s.nodeType !== 3 ? null : s, s !== null ? (n.stateNode = s, rn = n, sn = null, !0) : !1;
         case 13:
            return s = s.nodeType !== 8 ? null : s, s !== null ? (o = ms !== null ? {
               id: sr,
               overflow: ir
            } : null, n.memoizedState = {
               dehydrated: s,
               treeContext: o,
               retryLane: 1073741824
            }, o = mn(18, null, null, 0), o.stateNode = s, o.return = n, n.child = o, rn = n, sn = null, !0) : !1;
         default:
            return !1
      }
   }

   function Hu(n) {
      return (n.mode & 1) !== 0 && (n.flags & 128) === 0
   }

   function Qu(n) {
      if (tt) {
         var s = sn;
         if (s) {
            var o = s;
            if (!jm(n, s)) {
               if (Hu(n)) throw Error(r(418));
               s = Nr(o.nextSibling);
               var c = rn;
               s && jm(n, s) ? Cm(c, o) : (n.flags = n.flags & -4097 | 2, tt = !1, rn = n)
            }
         } else {
            if (Hu(n)) throw Error(r(418));
            n.flags = n.flags & -4097 | 2, tt = !1, rn = n
         }
      }
   }

   function Em(n) {
      for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13;) n = n.return;
      rn = n
   }

   function yl(n) {
      if (n !== rn) return !1;
      if (!tt) return Em(n), tt = !0, !1;
      var s;
      if ((s = n.tag !== 3) && !(s = n.tag !== 5) && (s = n.type, s = s !== "head" && s !== "body" && !Fu(n.type, n.memoizedProps)), s && (s = sn)) {
         if (Hu(n)) throw Pm(), Error(r(418));
         for (; s;) Cm(n, s), s = Nr(s.nextSibling)
      }
      if (Em(n), n.tag === 13) {
         if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
         e: {
            for (n = n.nextSibling, s = 0; n;) {
               if (n.nodeType === 8) {
                  var o = n.data;
                  if (o === "/$") {
                     if (s === 0) {
                        sn = Nr(n.nextSibling);
                        break e
                     }
                     s--
                  } else o !== "$" && o !== "$!" && o !== "$?" || s++
               }
               n = n.nextSibling
            }
            sn = null
         }
      } else sn = rn ? Nr(n.stateNode.nextSibling) : null;
      return !0
   }

   function Pm() {
      for (var n = sn; n;) n = Nr(n.nextSibling)
   }

   function si() {
      sn = rn = null, tt = !1
   }

   function qu(n) {
      Sn === null ? Sn = [n] : Sn.push(n)
   }
   var e2 = $.ReactCurrentBatchConfig;

   function va(n, s, o) {
      if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
         if (o._owner) {
            if (o = o._owner, o) {
               if (o.tag !== 1) throw Error(r(309));
               var c = o.stateNode
            }
            if (!c) throw Error(r(147, n));
            var h = c,
               g = "" + n;
            return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === g ? s.ref : (s = function (x) {
               var k = h.refs;
               x === null ? delete k[g] : k[g] = x
            }, s._stringRef = g, s)
         }
         if (typeof n != "string") throw Error(r(284));
         if (!o._owner) throw Error(r(290, n))
      }
      return n
   }

   function vl(n, s) {
      throw n = Object.prototype.toString.call(s), Error(r(31, n === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : n))
   }

   function _m(n) {
      var s = n._init;
      return s(n._payload)
   }

   function Nm(n) {
      function s(I, N) {
         if (n) {
            var M = I.deletions;
            M === null ? (I.deletions = [N], I.flags |= 16) : M.push(N)
         }
      }

      function o(I, N) {
         if (!n) return null;
         for (; N !== null;) s(I, N), N = N.sibling;
         return null
      }

      function c(I, N) {
         for (I = new Map; N !== null;) N.key !== null ? I.set(N.key, N) : I.set(N.index, N), N = N.sibling;
         return I
      }

      function h(I, N) {
         return I = Br(I, N), I.index = 0, I.sibling = null, I
      }

      function g(I, N, M) {
         return I.index = M, n ? (M = I.alternate, M !== null ? (M = M.index, M < N ? (I.flags |= 2, N) : M) : (I.flags |= 2, N)) : (I.flags |= 1048576, N)
      }

      function x(I) {
         return n && I.alternate === null && (I.flags |= 2), I
      }

      function k(I, N, M, G) {
         return N === null || N.tag !== 6 ? (N = Vd(M, I.mode, G), N.return = I, N) : (N = h(N, M), N.return = I, N)
      }

      function j(I, N, M, G) {
         var he = M.type;
         return he === Y ? H(I, N, M.props.children, G, M.key) : N !== null && (N.elementType === he || typeof he == "object" && he !== null && he.$$typeof === Se && _m(he) === N.type) ? (G = h(N, M.props), G.ref = va(I, N, M), G.return = I, G) : (G = Ul(M.type, M.key, M.props, null, I.mode, G), G.ref = va(I, N, M), G.return = I, G)
      }

      function O(I, N, M, G) {
         return N === null || N.tag !== 4 || N.stateNode.containerInfo !== M.containerInfo || N.stateNode.implementation !== M.implementation ? (N = zd(M, I.mode, G), N.return = I, N) : (N = h(N, M.children || []), N.return = I, N)
      }

      function H(I, N, M, G, he) {
         return N === null || N.tag !== 7 ? (N = Ts(M, I.mode, G, he), N.return = I, N) : (N = h(N, M), N.return = I, N)
      }

      function q(I, N, M) {
         if (typeof N == "string" && N !== "" || typeof N == "number") return N = Vd("" + N, I.mode, M), N.return = I, N;
         if (typeof N == "object" && N !== null) {
            switch (N.$$typeof) {
               case z:
                  return M = Ul(N.type, N.key, N.props, null, I.mode, M), M.ref = va(I, null, N), M.return = I, M;
               case U:
                  return N = zd(N, I.mode, M), N.return = I, N;
               case Se:
                  var G = N._init;
                  return q(I, G(N._payload), M)
            }
            if (V(N) || ae(N)) return N = Ts(N, I.mode, M, null), N.return = I, N;
            vl(I, N)
         }
         return null
      }

      function W(I, N, M, G) {
         var he = N !== null ? N.key : null;
         if (typeof M == "string" && M !== "" || typeof M == "number") return he !== null ? null : k(I, N, "" + M, G);
         if (typeof M == "object" && M !== null) {
            switch (M.$$typeof) {
               case z:
                  return M.key === he ? j(I, N, M, G) : null;
               case U:
                  return M.key === he ? O(I, N, M, G) : null;
               case Se:
                  return he = M._init, W(I, N, he(M._payload), G)
            }
            if (V(M) || ae(M)) return he !== null ? null : H(I, N, M, G, null);
            vl(I, M)
         }
         return null
      }

      function oe(I, N, M, G, he) {
         if (typeof G == "string" && G !== "" || typeof G == "number") return I = I.get(M) || null, k(N, I, "" + G, he);
         if (typeof G == "object" && G !== null) {
            switch (G.$$typeof) {
               case z:
                  return I = I.get(G.key === null ? M : G.key) || null, j(N, I, G, he);
               case U:
                  return I = I.get(G.key === null ? M : G.key) || null, O(N, I, G, he);
               case Se:
                  var xe = G._init;
                  return oe(I, N, M, xe(G._payload), he)
            }
            if (V(G) || ae(G)) return I = I.get(M) || null, H(N, I, G, he, null);
            vl(N, G)
         }
         return null
      }

      function ue(I, N, M, G) {
         for (var he = null, xe = null, we = N, Ee = N = 0, Ct = null; we !== null && Ee < M.length; Ee++) {
            we.index > Ee ? (Ct = we, we = null) : Ct = we.sibling;
            var We = W(I, we, M[Ee], G);
            if (We === null) {
               we === null && (we = Ct);
               break
            }
            n && we && We.alternate === null && s(I, we), N = g(We, N, Ee), xe === null ? he = We : xe.sibling = We, xe = We, we = Ct
         }
         if (Ee === M.length) return o(I, we), tt && gs(I, Ee), he;
         if (we === null) {
            for (; Ee < M.length; Ee++) we = q(I, M[Ee], G), we !== null && (N = g(we, N, Ee), xe === null ? he = we : xe.sibling = we, xe = we);
            return tt && gs(I, Ee), he
         }
         for (we = c(I, we); Ee < M.length; Ee++) Ct = oe(we, I, Ee, M[Ee], G), Ct !== null && (n && Ct.alternate !== null && we.delete(Ct.key === null ? Ee : Ct.key), N = g(Ct, N, Ee), xe === null ? he = Ct : xe.sibling = Ct, xe = Ct);
         return n && we.forEach(function (Ur) {
            return s(I, Ur)
         }), tt && gs(I, Ee), he
      }

      function de(I, N, M, G) {
         var he = ae(M);
         if (typeof he != "function") throw Error(r(150));
         if (M = he.call(M), M == null) throw Error(r(151));
         for (var xe = he = null, we = N, Ee = N = 0, Ct = null, We = M.next(); we !== null && !We.done; Ee++, We = M.next()) {
            we.index > Ee ? (Ct = we, we = null) : Ct = we.sibling;
            var Ur = W(I, we, We.value, G);
            if (Ur === null) {
               we === null && (we = Ct);
               break
            }
            n && we && Ur.alternate === null && s(I, we), N = g(Ur, N, Ee), xe === null ? he = Ur : xe.sibling = Ur, xe = Ur, we = Ct
         }
         if (We.done) return o(I, we), tt && gs(I, Ee), he;
         if (we === null) {
            for (; !We.done; Ee++, We = M.next()) We = q(I, We.value, G), We !== null && (N = g(We, N, Ee), xe === null ? he = We : xe.sibling = We, xe = We);
            return tt && gs(I, Ee), he
         }
         for (we = c(I, we); !We.done; Ee++, We = M.next()) We = oe(we, I, Ee, We.value, G), We !== null && (n && We.alternate !== null && we.delete(We.key === null ? Ee : We.key), N = g(We, N, Ee), xe === null ? he = We : xe.sibling = We, xe = We);
         return n && we.forEach(function (I2) {
            return s(I, I2)
         }), tt && gs(I, Ee), he
      }

      function ht(I, N, M, G) {
         if (typeof M == "object" && M !== null && M.type === Y && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
            switch (M.$$typeof) {
               case z:
                  e: {
                     for (var he = M.key, xe = N; xe !== null;) {
                        if (xe.key === he) {
                           if (he = M.type, he === Y) {
                              if (xe.tag === 7) {
                                 o(I, xe.sibling), N = h(xe, M.props.children), N.return = I, I = N;
                                 break e
                              }
                           } else if (xe.elementType === he || typeof he == "object" && he !== null && he.$$typeof === Se && _m(he) === xe.type) {
                              o(I, xe.sibling), N = h(xe, M.props), N.ref = va(I, xe, M), N.return = I, I = N;
                              break e
                           }
                           o(I, xe);
                           break
                        } else s(I, xe);
                        xe = xe.sibling
                     }
                     M.type === Y ? (N = Ts(M.props.children, I.mode, G, M.key), N.return = I, I = N) : (G = Ul(M.type, M.key, M.props, null, I.mode, G), G.ref = va(I, N, M), G.return = I, I = G)
                  }
                  return x(I);
               case U:
                  e: {
                     for (xe = M.key; N !== null;) {
                        if (N.key === xe)
                           if (N.tag === 4 && N.stateNode.containerInfo === M.containerInfo && N.stateNode.implementation === M.implementation) {
                              o(I, N.sibling), N = h(N, M.children || []), N.return = I, I = N;
                              break e
                           } else {
                              o(I, N);
                              break
                           }
                        else s(I, N);
                        N = N.sibling
                     }
                     N = zd(M, I.mode, G),
                     N.return = I,
                     I = N
                  }
                  return x(I);
               case Se:
                  return xe = M._init, ht(I, N, xe(M._payload), G)
            }
            if (V(M)) return ue(I, N, M, G);
            if (ae(M)) return de(I, N, M, G);
            vl(I, M)
         }
         return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, N !== null && N.tag === 6 ? (o(I, N.sibling), N = h(N, M), N.return = I, I = N) : (o(I, N), N = Vd(M, I.mode, G), N.return = I, I = N), x(I)) : o(I, N)
      }
      return ht
   }
   var ii = Nm(!0),
      Am = Nm(!1),
      xl = Ar(null),
      wl = null,
      ai = null,
      Ku = null;

   function Gu() {
      Ku = ai = wl = null
   }

   function Yu(n) {
      var s = xl.current;
      Xe(xl), n._currentValue = s
   }

   function Xu(n, s, o) {
      for (; n !== null;) {
         var c = n.alternate;
         if ((n.childLanes & s) !== s ? (n.childLanes |= s, c !== null && (c.childLanes |= s)) : c !== null && (c.childLanes & s) !== s && (c.childLanes |= s), n === o) break;
         n = n.return
      }
   }

   function oi(n, s) {
      wl = n, Ku = ai = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & s) !== 0 && (qt = !0), n.firstContext = null)
   }

   function fn(n) {
      var s = n._currentValue;
      if (Ku !== n)
         if (n = {
               context: n,
               memoizedValue: s,
               next: null
            }, ai === null) {
            if (wl === null) throw Error(r(308));
            ai = n, wl.dependencies = {
               lanes: 0,
               firstContext: n
            }
         } else ai = ai.next = n;
      return s
   }
   var ys = null;

   function Ju(n) {
      ys === null ? ys = [n] : ys.push(n)
   }

   function Dm(n, s, o, c) {
      var h = s.interleaved;
      return h === null ? (o.next = o, Ju(s)) : (o.next = h.next, h.next = o), s.interleaved = o, ar(n, c)
   }

   function ar(n, s) {
      n.lanes |= s;
      var o = n.alternate;
      for (o !== null && (o.lanes |= s), o = n, n = n.return; n !== null;) n.childLanes |= s, o = n.alternate, o !== null && (o.childLanes |= s), o = n, n = n.return;
      return o.tag === 3 ? o.stateNode : null
   }
   var Mr = !1;

   function ed(n) {
      n.updateQueue = {
         baseState: n.memoizedState,
         firstBaseUpdate: null,
         lastBaseUpdate: null,
         shared: {
            pending: null,
            interleaved: null,
            lanes: 0
         },
         effects: null
      }
   }

   function Im(n, s) {
      n = n.updateQueue, s.updateQueue === n && (s.updateQueue = {
         baseState: n.baseState,
         firstBaseUpdate: n.firstBaseUpdate,
         lastBaseUpdate: n.lastBaseUpdate,
         shared: n.shared,
         effects: n.effects
      })
   }

   function or(n, s) {
      return {
         eventTime: n,
         lane: s,
         tag: 0,
         payload: null,
         callback: null,
         next: null
      }
   }

   function Rr(n, s, o) {
      var c = n.updateQueue;
      if (c === null) return null;
      if (c = c.shared, ($e & 2) !== 0) {
         var h = c.pending;
         return h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s, ar(n, o)
      }
      return h = c.interleaved, h === null ? (s.next = s, Ju(c)) : (s.next = h.next, h.next = s), c.interleaved = s, ar(n, o)
   }

   function bl(n, s, o) {
      if (s = s.updateQueue, s !== null && (s = s.shared, (o & 4194240) !== 0)) {
         var c = s.lanes;
         c &= n.pendingLanes, o |= c, s.lanes = o, pu(n, o)
      }
   }

   function Mm(n, s) {
      var o = n.updateQueue,
         c = n.alternate;
      if (c !== null && (c = c.updateQueue, o === c)) {
         var h = null,
            g = null;
         if (o = o.firstBaseUpdate, o !== null) {
            do {
               var x = {
                  eventTime: o.eventTime,
                  lane: o.lane,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null
               };
               g === null ? h = g = x : g = g.next = x, o = o.next
            } while (o !== null);
            g === null ? h = g = s : g = g.next = s
         } else h = g = s;
         o = {
            baseState: c.baseState,
            firstBaseUpdate: h,
            lastBaseUpdate: g,
            shared: c.shared,
            effects: c.effects
         }, n.updateQueue = o;
         return
      }
      n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = s : n.next = s, o.lastBaseUpdate = s
   }

   function kl(n, s, o, c) {
      var h = n.updateQueue;
      Mr = !1;
      var g = h.firstBaseUpdate,
         x = h.lastBaseUpdate,
         k = h.shared.pending;
      if (k !== null) {
         h.shared.pending = null;
         var j = k,
            O = j.next;
         j.next = null, x === null ? g = O : x.next = O, x = j;
         var H = n.alternate;
         H !== null && (H = H.updateQueue, k = H.lastBaseUpdate, k !== x && (k === null ? H.firstBaseUpdate = O : k.next = O, H.lastBaseUpdate = j))
      }
      if (g !== null) {
         var q = h.baseState;
         x = 0, H = O = j = null, k = g;
         do {
            var W = k.lane,
               oe = k.eventTime;
            if ((c & W) === W) {
               H !== null && (H = H.next = {
                  eventTime: oe,
                  lane: 0,
                  tag: k.tag,
                  payload: k.payload,
                  callback: k.callback,
                  next: null
               });
               e: {
                  var ue = n,
                     de = k;
                  switch (W = s, oe = o, de.tag) {
                     case 1:
                        if (ue = de.payload, typeof ue == "function") {
                           q = ue.call(oe, q, W);
                           break e
                        }
                        q = ue;
                        break e;
                     case 3:
                        ue.flags = ue.flags & -65537 | 128;
                     case 0:
                        if (ue = de.payload, W = typeof ue == "function" ? ue.call(oe, q, W) : ue, W == null) break e;
                        q = ee({}, q, W);
                        break e;
                     case 2:
                        Mr = !0
                  }
               }
               k.callback !== null && k.lane !== 0 && (n.flags |= 64, W = h.effects, W === null ? h.effects = [k] : W.push(k))
            } else oe = {
               eventTime: oe,
               lane: W,
               tag: k.tag,
               payload: k.payload,
               callback: k.callback,
               next: null
            }, H === null ? (O = H = oe, j = q) : H = H.next = oe, x |= W;
            if (k = k.next, k === null) {
               if (k = h.shared.pending, k === null) break;
               W = k, k = W.next, W.next = null, h.lastBaseUpdate = W, h.shared.pending = null
            }
         } while (!0);
         if (H === null && (j = q), h.baseState = j, h.firstBaseUpdate = O, h.lastBaseUpdate = H, s = h.shared.interleaved, s !== null) {
            h = s;
            do x |= h.lane, h = h.next; while (h !== s)
         } else g === null && (h.shared.lanes = 0);
         ws |= x, n.lanes = x, n.memoizedState = q
      }
   }

   function Rm(n, s, o) {
      if (n = s.effects, s.effects = null, n !== null)
         for (s = 0; s < n.length; s++) {
            var c = n[s],
               h = c.callback;
            if (h !== null) {
               if (c.callback = null, c = o, typeof h != "function") throw Error(r(191, h));
               h.call(c)
            }
         }
   }
   var xa = {},
      zn = Ar(xa),
      wa = Ar(xa),
      ba = Ar(xa);

   function vs(n) {
      if (n === xa) throw Error(r(174));
      return n
   }

   function td(n, s) {
      switch (Ge(ba, s), Ge(wa, n), Ge(zn, xa), n = s.nodeType, n) {
         case 9:
         case 11:
            s = (s = s.documentElement) ? s.namespaceURI : at(null, "");
            break;
         default:
            n = n === 8 ? s.parentNode : s, s = n.namespaceURI || null, n = n.tagName, s = at(s, n)
      }
      Xe(zn), Ge(zn, s)
   }

   function li() {
      Xe(zn), Xe(wa), Xe(ba)
   }

   function Om(n) {
      vs(ba.current);
      var s = vs(zn.current),
         o = at(s, n.type);
      s !== o && (Ge(wa, n), Ge(zn, o))
   }

   function nd(n) {
      wa.current === n && (Xe(zn), Xe(wa))
   }
   var nt = Ar(0);

   function Sl(n) {
      for (var s = n; s !== null;) {
         if (s.tag === 13) {
            var o = s.memoizedState;
            if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return s
         } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
            if ((s.flags & 128) !== 0) return s
         } else if (s.child !== null) {
            s.child.return = s, s = s.child;
            continue
         }
         if (s === n) break;
         for (; s.sibling === null;) {
            if (s.return === null || s.return === n) return null;
            s = s.return
         }
         s.sibling.return = s.return, s = s.sibling
      }
      return null
   }
   var rd = [];

   function sd() {
      for (var n = 0; n < rd.length; n++) rd[n]._workInProgressVersionPrimary = null;
      rd.length = 0
   }
   var Tl = $.ReactCurrentDispatcher,
      id = $.ReactCurrentBatchConfig,
      xs = 0,
      rt = null,
      wt = null,
      St = null,
      Cl = !1,
      ka = !1,
      Sa = 0,
      t2 = 0;

   function Dt() {
      throw Error(r(321))
   }

   function ad(n, s) {
      if (s === null) return !1;
      for (var o = 0; o < s.length && o < n.length; o++)
         if (!kn(n[o], s[o])) return !1;
      return !0
   }

   function od(n, s, o, c, h, g) {
      if (xs = g, rt = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, Tl.current = n === null || n.memoizedState === null ? i2 : a2, n = o(c, h), ka) {
         g = 0;
         do {
            if (ka = !1, Sa = 0, 25 <= g) throw Error(r(301));
            g += 1, St = wt = null, s.updateQueue = null, Tl.current = o2, n = o(c, h)
         } while (ka)
      }
      if (Tl.current = Pl, s = wt !== null && wt.next !== null, xs = 0, St = wt = rt = null, Cl = !1, s) throw Error(r(300));
      return n
   }

   function ld() {
      var n = Sa !== 0;
      return Sa = 0, n
   }

   function Bn() {
      var n = {
         memoizedState: null,
         baseState: null,
         baseQueue: null,
         queue: null,
         next: null
      };
      return St === null ? rt.memoizedState = St = n : St = St.next = n, St
   }

   function hn() {
      if (wt === null) {
         var n = rt.alternate;
         n = n !== null ? n.memoizedState : null
      } else n = wt.next;
      var s = St === null ? rt.memoizedState : St.next;
      if (s !== null) St = s, wt = n;
      else {
         if (n === null) throw Error(r(310));
         wt = n, n = {
            memoizedState: wt.memoizedState,
            baseState: wt.baseState,
            baseQueue: wt.baseQueue,
            queue: wt.queue,
            next: null
         }, St === null ? rt.memoizedState = St = n : St = St.next = n
      }
      return St
   }

   function Ta(n, s) {
      return typeof s == "function" ? s(n) : s
   }

   function cd(n) {
      var s = hn(),
         o = s.queue;
      if (o === null) throw Error(r(311));
      o.lastRenderedReducer = n;
      var c = wt,
         h = c.baseQueue,
         g = o.pending;
      if (g !== null) {
         if (h !== null) {
            var x = h.next;
            h.next = g.next, g.next = x
         }
         c.baseQueue = h = g, o.pending = null
      }
      if (h !== null) {
         g = h.next, c = c.baseState;
         var k = x = null,
            j = null,
            O = g;
         do {
            var H = O.lane;
            if ((xs & H) === H) j !== null && (j = j.next = {
               lane: 0,
               action: O.action,
               hasEagerState: O.hasEagerState,
               eagerState: O.eagerState,
               next: null
            }), c = O.hasEagerState ? O.eagerState : n(c, O.action);
            else {
               var q = {
                  lane: H,
                  action: O.action,
                  hasEagerState: O.hasEagerState,
                  eagerState: O.eagerState,
                  next: null
               };
               j === null ? (k = j = q, x = c) : j = j.next = q, rt.lanes |= H, ws |= H
            }
            O = O.next
         } while (O !== null && O !== g);
         j === null ? x = c : j.next = k, kn(c, s.memoizedState) || (qt = !0), s.memoizedState = c, s.baseState = x, s.baseQueue = j, o.lastRenderedState = c
      }
      if (n = o.interleaved, n !== null) {
         h = n;
         do g = h.lane, rt.lanes |= g, ws |= g, h = h.next; while (h !== n)
      } else h === null && (o.lanes = 0);
      return [s.memoizedState, o.dispatch]
   }

   function ud(n) {
      var s = hn(),
         o = s.queue;
      if (o === null) throw Error(r(311));
      o.lastRenderedReducer = n;
      var c = o.dispatch,
         h = o.pending,
         g = s.memoizedState;
      if (h !== null) {
         o.pending = null;
         var x = h = h.next;
         do g = n(g, x.action), x = x.next; while (x !== h);
         kn(g, s.memoizedState) || (qt = !0), s.memoizedState = g, s.baseQueue === null && (s.baseState = g), o.lastRenderedState = g
      }
      return [g, c]
   }

   function Lm() {}

   function Fm(n, s) {
      var o = rt,
         c = hn(),
         h = s(),
         g = !kn(c.memoizedState, h);
      if (g && (c.memoizedState = h, qt = !0), c = c.queue, dd(Bm.bind(null, o, c, n), [n]), c.getSnapshot !== s || g || St !== null && St.memoizedState.tag & 1) {
         if (o.flags |= 2048, Ca(9, zm.bind(null, o, c, h, s), void 0, null), Tt === null) throw Error(r(349));
         (xs & 30) !== 0 || Vm(o, s, h)
      }
      return h
   }

   function Vm(n, s, o) {
      n.flags |= 16384, n = {
         getSnapshot: s,
         value: o
      }, s = rt.updateQueue, s === null ? (s = {
         lastEffect: null,
         stores: null
      }, rt.updateQueue = s, s.stores = [n]) : (o = s.stores, o === null ? s.stores = [n] : o.push(n))
   }

   function zm(n, s, o, c) {
      s.value = o, s.getSnapshot = c, Um(s) && $m(n)
   }

   function Bm(n, s, o) {
      return o(function () {
         Um(s) && $m(n)
      })
   }

   function Um(n) {
      var s = n.getSnapshot;
      n = n.value;
      try {
         var o = s();
         return !kn(n, o)
      } catch {
         return !0
      }
   }

   function $m(n) {
      var s = ar(n, 1);
      s !== null && En(s, n, 1, -1)
   }

   function Zm(n) {
      var s = Bn();
      return typeof n == "function" && (n = n()), s.memoizedState = s.baseState = n, n = {
         pending: null,
         interleaved: null,
         lanes: 0,
         dispatch: null,
         lastRenderedReducer: Ta,
         lastRenderedState: n
      }, s.queue = n, n = n.dispatch = s2.bind(null, rt, n), [s.memoizedState, n]
   }

   function Ca(n, s, o, c) {
      return n = {
         tag: n,
         create: s,
         destroy: o,
         deps: c,
         next: null
      }, s = rt.updateQueue, s === null ? (s = {
         lastEffect: null,
         stores: null
      }, rt.updateQueue = s, s.lastEffect = n.next = n) : (o = s.lastEffect, o === null ? s.lastEffect = n.next = n : (c = o.next, o.next = n, n.next = c, s.lastEffect = n)), n
   }

   function Wm() {
      return hn().memoizedState
   }

   function jl(n, s, o, c) {
      var h = Bn();
      rt.flags |= n, h.memoizedState = Ca(1 | s, o, void 0, c === void 0 ? null : c)
   }

   function El(n, s, o, c) {
      var h = hn();
      c = c === void 0 ? null : c;
      var g = void 0;
      if (wt !== null) {
         var x = wt.memoizedState;
         if (g = x.destroy, c !== null && ad(c, x.deps)) {
            h.memoizedState = Ca(s, o, g, c);
            return
         }
      }
      rt.flags |= n, h.memoizedState = Ca(1 | s, o, g, c)
   }

   function Hm(n, s) {
      return jl(8390656, 8, n, s)
   }

   function dd(n, s) {
      return El(2048, 8, n, s)
   }

   function Qm(n, s) {
      return El(4, 2, n, s)
   }

   function qm(n, s) {
      return El(4, 4, n, s)
   }

   function Km(n, s) {
      if (typeof s == "function") return n = n(), s(n),
         function () {
            s(null)
         };
      if (s != null) return n = n(), s.current = n,
         function () {
            s.current = null
         }
   }

   function Gm(n, s, o) {
      return o = o != null ? o.concat([n]) : null, El(4, 4, Km.bind(null, s, n), o)
   }

   function fd() {}

   function Ym(n, s) {
      var o = hn();
      s = s === void 0 ? null : s;
      var c = o.memoizedState;
      return c !== null && s !== null && ad(s, c[1]) ? c[0] : (o.memoizedState = [n, s], n)
   }

   function Xm(n, s) {
      var o = hn();
      s = s === void 0 ? null : s;
      var c = o.memoizedState;
      return c !== null && s !== null && ad(s, c[1]) ? c[0] : (n = n(), o.memoizedState = [n, s], n)
   }

   function Jm(n, s, o) {
      return (xs & 21) === 0 ? (n.baseState && (n.baseState = !1, qt = !0), n.memoizedState = o) : (kn(o, s) || (o = _p(), rt.lanes |= o, ws |= o, n.baseState = !0), s)
   }

   function n2(n, s) {
      var o = qe;
      qe = o !== 0 && 4 > o ? o : 4, n(!0);
      var c = id.transition;
      id.transition = {};
      try {
         n(!1), s()
      } finally {
         qe = o, id.transition = c
      }
   }

   function eg() {
      return hn().memoizedState
   }

   function r2(n, s, o) {
      var c = Vr(n);
      if (o = {
            lane: c,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
         }, tg(n)) ng(s, o);
      else if (o = Dm(n, s, o, c), o !== null) {
         var h = Bt();
         En(o, n, c, h), rg(o, s, c)
      }
   }

   function s2(n, s, o) {
      var c = Vr(n),
         h = {
            lane: c,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
         };
      if (tg(n)) ng(s, h);
      else {
         var g = n.alternate;
         if (n.lanes === 0 && (g === null || g.lanes === 0) && (g = s.lastRenderedReducer, g !== null)) try {
            var x = s.lastRenderedState,
               k = g(x, o);
            if (h.hasEagerState = !0, h.eagerState = k, kn(k, x)) {
               var j = s.interleaved;
               j === null ? (h.next = h, Ju(s)) : (h.next = j.next, j.next = h), s.interleaved = h;
               return
            }
         } catch {} finally {}
         o = Dm(n, s, h, c), o !== null && (h = Bt(), En(o, n, c, h), rg(o, s, c))
      }
   }

   function tg(n) {
      var s = n.alternate;
      return n === rt || s !== null && s === rt
   }

   function ng(n, s) {
      ka = Cl = !0;
      var o = n.pending;
      o === null ? s.next = s : (s.next = o.next, o.next = s), n.pending = s
   }

   function rg(n, s, o) {
      if ((o & 4194240) !== 0) {
         var c = s.lanes;
         c &= n.pendingLanes, o |= c, s.lanes = o, pu(n, o)
      }
   }
   var Pl = {
         readContext: fn,
         useCallback: Dt,
         useContext: Dt,
         useEffect: Dt,
         useImperativeHandle: Dt,
         useInsertionEffect: Dt,
         useLayoutEffect: Dt,
         useMemo: Dt,
         useReducer: Dt,
         useRef: Dt,
         useState: Dt,
         useDebugValue: Dt,
         useDeferredValue: Dt,
         useTransition: Dt,
         useMutableSource: Dt,
         useSyncExternalStore: Dt,
         useId: Dt,
         unstable_isNewReconciler: !1
      },
      i2 = {
         readContext: fn,
         useCallback: function (n, s) {
            return Bn().memoizedState = [n, s === void 0 ? null : s], n
         },
         useContext: fn,
         useEffect: Hm,
         useImperativeHandle: function (n, s, o) {
            return o = o != null ? o.concat([n]) : null, jl(4194308, 4, Km.bind(null, s, n), o)
         },
         useLayoutEffect: function (n, s) {
            return jl(4194308, 4, n, s)
         },
         useInsertionEffect: function (n, s) {
            return jl(4, 2, n, s)
         },
         useMemo: function (n, s) {
            var o = Bn();
            return s = s === void 0 ? null : s, n = n(), o.memoizedState = [n, s], n
         },
         useReducer: function (n, s, o) {
            var c = Bn();
            return s = o !== void 0 ? o(s) : s, c.memoizedState = c.baseState = s, n = {
               pending: null,
               interleaved: null,
               lanes: 0,
               dispatch: null,
               lastRenderedReducer: n,
               lastRenderedState: s
            }, c.queue = n, n = n.dispatch = r2.bind(null, rt, n), [c.memoizedState, n]
         },
         useRef: function (n) {
            var s = Bn();
            return n = {
               current: n
            }, s.memoizedState = n
         },
         useState: Zm,
         useDebugValue: fd,
         useDeferredValue: function (n) {
            return Bn().memoizedState = n
         },
         useTransition: function () {
            var n = Zm(!1),
               s = n[0];
            return n = n2.bind(null, n[1]), Bn().memoizedState = n, [s, n]
         },
         useMutableSource: function () {},
         useSyncExternalStore: function (n, s, o) {
            var c = rt,
               h = Bn();
            if (tt) {
               if (o === void 0) throw Error(r(407));
               o = o()
            } else {
               if (o = s(), Tt === null) throw Error(r(349));
               (xs & 30) !== 0 || Vm(c, s, o)
            }
            h.memoizedState = o;
            var g = {
               value: o,
               getSnapshot: s
            };
            return h.queue = g, Hm(Bm.bind(null, c, g, n), [n]), c.flags |= 2048, Ca(9, zm.bind(null, c, g, o, s), void 0, null), o
         },
         useId: function () {
            var n = Bn(),
               s = Tt.identifierPrefix;
            if (tt) {
               var o = ir,
                  c = sr;
               o = (c & ~(1 << 32 - bn(c) - 1)).toString(32) + o, s = ":" + s + "R" + o, o = Sa++, 0 < o && (s += "H" + o.toString(32)), s += ":"
            } else o = t2++, s = ":" + s + "r" + o.toString(32) + ":";
            return n.memoizedState = s
         },
         unstable_isNewReconciler: !1
      },
      a2 = {
         readContext: fn,
         useCallback: Ym,
         useContext: fn,
         useEffect: dd,
         useImperativeHandle: Gm,
         useInsertionEffect: Qm,
         useLayoutEffect: qm,
         useMemo: Xm,
         useReducer: cd,
         useRef: Wm,
         useState: function () {
            return cd(Ta)
         },
         useDebugValue: fd,
         useDeferredValue: function (n) {
            var s = hn();
            return Jm(s, wt.memoizedState, n)
         },
         useTransition: function () {
            var n = cd(Ta)[0],
               s = hn().memoizedState;
            return [n, s]
         },
         useMutableSource: Lm,
         useSyncExternalStore: Fm,
         useId: eg,
         unstable_isNewReconciler: !1
      },
      o2 = {
         readContext: fn,
         useCallback: Ym,
         useContext: fn,
         useEffect: dd,
         useImperativeHandle: Gm,
         useInsertionEffect: Qm,
         useLayoutEffect: qm,
         useMemo: Xm,
         useReducer: ud,
         useRef: Wm,
         useState: function () {
            return ud(Ta)
         },
         useDebugValue: fd,
         useDeferredValue: function (n) {
            var s = hn();
            return wt === null ? s.memoizedState = n : Jm(s, wt.memoizedState, n)
         },
         useTransition: function () {
            var n = ud(Ta)[0],
               s = hn().memoizedState;
            return [n, s]
         },
         useMutableSource: Lm,
         useSyncExternalStore: Fm,
         useId: eg,
         unstable_isNewReconciler: !1
      };

   function Tn(n, s) {
      if (n && n.defaultProps) {
         s = ee({}, s), n = n.defaultProps;
         for (var o in n) s[o] === void 0 && (s[o] = n[o]);
         return s
      }
      return s
   }

   function hd(n, s, o, c) {
      s = n.memoizedState, o = o(c, s), o = o == null ? s : ee({}, s, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o)
   }
   var _l = {
      isMounted: function (n) {
         return (n = n._reactInternals) ? fs(n) === n : !1
      },
      enqueueSetState: function (n, s, o) {
         n = n._reactInternals;
         var c = Bt(),
            h = Vr(n),
            g = or(c, h);
         g.payload = s, o != null && (g.callback = o), s = Rr(n, g, h), s !== null && (En(s, n, h, c), bl(s, n, h))
      },
      enqueueReplaceState: function (n, s, o) {
         n = n._reactInternals;
         var c = Bt(),
            h = Vr(n),
            g = or(c, h);
         g.tag = 1, g.payload = s, o != null && (g.callback = o), s = Rr(n, g, h), s !== null && (En(s, n, h, c), bl(s, n, h))
      },
      enqueueForceUpdate: function (n, s) {
         n = n._reactInternals;
         var o = Bt(),
            c = Vr(n),
            h = or(o, c);
         h.tag = 2, s != null && (h.callback = s), s = Rr(n, h, c), s !== null && (En(s, n, c, o), bl(s, n, c))
      }
   };

   function sg(n, s, o, c, h, g, x) {
      return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, g, x) : s.prototype && s.prototype.isPureReactComponent ? !da(o, c) || !da(h, g) : !0
   }

   function ig(n, s, o) {
      var c = !1,
         h = Dr,
         g = s.contextType;
      return typeof g == "object" && g !== null ? g = fn(g) : (h = Qt(s) ? ps : At.current, c = s.contextTypes, g = (c = c != null) ? ti(n, h) : Dr), s = new s(o, g), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = _l, n.stateNode = s, s._reactInternals = n, c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = h, n.__reactInternalMemoizedMaskedChildContext = g), s
   }

   function ag(n, s, o, c) {
      n = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(o, c), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(o, c), s.state !== n && _l.enqueueReplaceState(s, s.state, null)
   }

   function pd(n, s, o, c) {
      var h = n.stateNode;
      h.props = o, h.state = n.memoizedState, h.refs = {}, ed(n);
      var g = s.contextType;
      typeof g == "object" && g !== null ? h.context = fn(g) : (g = Qt(s) ? ps : At.current, h.context = ti(n, g)), h.state = n.memoizedState, g = s.getDerivedStateFromProps, typeof g == "function" && (hd(n, s, g, o), h.state = n.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (s = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), s !== h.state && _l.enqueueReplaceState(h, h.state, null), kl(n, o, h, c), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308)
   }

   function ci(n, s) {
      try {
         var o = "",
            c = s;
         do o += ze(c), c = c.return; while (c);
         var h = o
      } catch (g) {
         h = `
Error generating stack: ` + g.message + `
` + g.stack
      }
      return {
         value: n,
         source: s,
         stack: h,
         digest: null
      }
   }

   function md(n, s, o) {
      return {
         value: n,
         source: null,
         stack: o ?? null,
         digest: s ?? null
      }
   }

   function gd(n, s) {
      try {
         console.error(s.value)
      } catch (o) {
         setTimeout(function () {
            throw o
         })
      }
   }
   var l2 = typeof WeakMap == "function" ? WeakMap : Map;

   function og(n, s, o) {
      o = or(-1, o), o.tag = 3, o.payload = {
         element: null
      };
      var c = s.value;
      return o.callback = function () {
         Ol || (Ol = !0, Ad = c), gd(n, s)
      }, o
   }

   function lg(n, s, o) {
      o = or(-1, o), o.tag = 3;
      var c = n.type.getDerivedStateFromError;
      if (typeof c == "function") {
         var h = s.value;
         o.payload = function () {
            return c(h)
         }, o.callback = function () {
            gd(n, s)
         }
      }
      var g = n.stateNode;
      return g !== null && typeof g.componentDidCatch == "function" && (o.callback = function () {
         gd(n, s), typeof c != "function" && (Lr === null ? Lr = new Set([this]) : Lr.add(this));
         var x = s.stack;
         this.componentDidCatch(s.value, {
            componentStack: x !== null ? x : ""
         })
      }), o
   }

   function cg(n, s, o) {
      var c = n.pingCache;
      if (c === null) {
         c = n.pingCache = new l2;
         var h = new Set;
         c.set(s, h)
      } else h = c.get(s), h === void 0 && (h = new Set, c.set(s, h));
      h.has(o) || (h.add(o), n = k2.bind(null, n, s, o), s.then(n, n))
   }

   function ug(n) {
      do {
         var s;
         if ((s = n.tag === 13) && (s = n.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return n;
         n = n.return
      } while (n !== null);
      return null
   }

   function dg(n, s, o, c, h) {
      return (n.mode & 1) === 0 ? (n === s ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (s = or(-1, 1), s.tag = 2, Rr(o, s, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = h, n)
   }
   var c2 = $.ReactCurrentOwner,
      qt = !1;

   function zt(n, s, o, c) {
      s.child = n === null ? Am(s, null, o, c) : ii(s, n.child, o, c)
   }

   function fg(n, s, o, c, h) {
      o = o.render;
      var g = s.ref;
      return oi(s, h), c = od(n, s, o, c, g, h), o = ld(), n !== null && !qt ? (s.updateQueue = n.updateQueue, s.flags &= -2053, n.lanes &= ~h, lr(n, s, h)) : (tt && o && Zu(s), s.flags |= 1, zt(n, s, c, h), s.child)
   }

   function hg(n, s, o, c, h) {
      if (n === null) {
         var g = o.type;
         return typeof g == "function" && !Fd(g) && g.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (s.tag = 15, s.type = g, pg(n, s, g, c, h)) : (n = Ul(o.type, null, c, s, s.mode, h), n.ref = s.ref, n.return = s, s.child = n)
      }
      if (g = n.child, (n.lanes & h) === 0) {
         var x = g.memoizedProps;
         if (o = o.compare, o = o !== null ? o : da, o(x, c) && n.ref === s.ref) return lr(n, s, h)
      }
      return s.flags |= 1, n = Br(g, c), n.ref = s.ref, n.return = s, s.child = n
   }

   function pg(n, s, o, c, h) {
      if (n !== null) {
         var g = n.memoizedProps;
         if (da(g, c) && n.ref === s.ref)
            if (qt = !1, s.pendingProps = c = g, (n.lanes & h) !== 0)(n.flags & 131072) !== 0 && (qt = !0);
            else return s.lanes = n.lanes, lr(n, s, h)
      }
      return yd(n, s, o, c, h)
   }

   function mg(n, s, o) {
      var c = s.pendingProps,
         h = c.children,
         g = n !== null ? n.memoizedState : null;
      if (c.mode === "hidden")
         if ((s.mode & 1) === 0) s.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
         }, Ge(di, an), an |= o;
         else {
            if ((o & 1073741824) === 0) return n = g !== null ? g.baseLanes | o : o, s.lanes = s.childLanes = 1073741824, s.memoizedState = {
               baseLanes: n,
               cachePool: null,
               transitions: null
            }, s.updateQueue = null, Ge(di, an), an |= n, null;
            s.memoizedState = {
               baseLanes: 0,
               cachePool: null,
               transitions: null
            }, c = g !== null ? g.baseLanes : o, Ge(di, an), an |= c
         }
      else g !== null ? (c = g.baseLanes | o, s.memoizedState = null) : c = o, Ge(di, an), an |= c;
      return zt(n, s, h, o), s.child
   }

   function gg(n, s) {
      var o = s.ref;
      (n === null && o !== null || n !== null && n.ref !== o) && (s.flags |= 512, s.flags |= 2097152)
   }

   function yd(n, s, o, c, h) {
      var g = Qt(o) ? ps : At.current;
      return g = ti(s, g), oi(s, h), o = od(n, s, o, c, g, h), c = ld(), n !== null && !qt ? (s.updateQueue = n.updateQueue, s.flags &= -2053, n.lanes &= ~h, lr(n, s, h)) : (tt && c && Zu(s), s.flags |= 1, zt(n, s, o, h), s.child)
   }

   function yg(n, s, o, c, h) {
      if (Qt(o)) {
         var g = !0;
         hl(s)
      } else g = !1;
      if (oi(s, h), s.stateNode === null) Al(n, s), ig(s, o, c), pd(s, o, c, h), c = !0;
      else if (n === null) {
         var x = s.stateNode,
            k = s.memoizedProps;
         x.props = k;
         var j = x.context,
            O = o.contextType;
         typeof O == "object" && O !== null ? O = fn(O) : (O = Qt(o) ? ps : At.current, O = ti(s, O));
         var H = o.getDerivedStateFromProps,
            q = typeof H == "function" || typeof x.getSnapshotBeforeUpdate == "function";
         q || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (k !== c || j !== O) && ag(s, x, c, O), Mr = !1;
         var W = s.memoizedState;
         x.state = W, kl(s, c, x, h), j = s.memoizedState, k !== c || W !== j || Ht.current || Mr ? (typeof H == "function" && (hd(s, o, H, c), j = s.memoizedState), (k = Mr || sg(s, o, k, c, W, j, O)) ? (q || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()), typeof x.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = c, s.memoizedState = j), x.props = c, x.state = j, x.context = O, c = k) : (typeof x.componentDidMount == "function" && (s.flags |= 4194308), c = !1)
      } else {
         x = s.stateNode, Im(n, s), k = s.memoizedProps, O = s.type === s.elementType ? k : Tn(s.type, k), x.props = O, q = s.pendingProps, W = x.context, j = o.contextType, typeof j == "object" && j !== null ? j = fn(j) : (j = Qt(o) ? ps : At.current, j = ti(s, j));
         var oe = o.getDerivedStateFromProps;
         (H = typeof oe == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (k !== q || W !== j) && ag(s, x, c, j), Mr = !1, W = s.memoizedState, x.state = W, kl(s, c, x, h);
         var ue = s.memoizedState;
         k !== q || W !== ue || Ht.current || Mr ? (typeof oe == "function" && (hd(s, o, oe, c), ue = s.memoizedState), (O = Mr || sg(s, o, O, c, W, ue, j) || !1) ? (H || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(c, ue, j), typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(c, ue, j)), typeof x.componentDidUpdate == "function" && (s.flags |= 4), typeof x.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || k === n.memoizedProps && W === n.memoizedState || (s.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && W === n.memoizedState || (s.flags |= 1024), s.memoizedProps = c, s.memoizedState = ue), x.props = c, x.state = ue, x.context = j, c = O) : (typeof x.componentDidUpdate != "function" || k === n.memoizedProps && W === n.memoizedState || (s.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && W === n.memoizedState || (s.flags |= 1024), c = !1)
      }
      return vd(n, s, o, c, g, h)
   }

   function vd(n, s, o, c, h, g) {
      gg(n, s);
      var x = (s.flags & 128) !== 0;
      if (!c && !x) return h && km(s, o, !1), lr(n, s, g);
      c = s.stateNode, c2.current = s;
      var k = x && typeof o.getDerivedStateFromError != "function" ? null : c.render();
      return s.flags |= 1, n !== null && x ? (s.child = ii(s, n.child, null, g), s.child = ii(s, null, k, g)) : zt(n, s, k, g), s.memoizedState = c.state, h && km(s, o, !0), s.child
   }

   function vg(n) {
      var s = n.stateNode;
      s.pendingContext ? wm(n, s.pendingContext, s.pendingContext !== s.context) : s.context && wm(n, s.context, !1), td(n, s.containerInfo)
   }

   function xg(n, s, o, c, h) {
      return si(), qu(h), s.flags |= 256, zt(n, s, o, c), s.child
   }
   var xd = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0
   };

   function wd(n) {
      return {
         baseLanes: n,
         cachePool: null,
         transitions: null
      }
   }

   function wg(n, s, o) {
      var c = s.pendingProps,
         h = nt.current,
         g = !1,
         x = (s.flags & 128) !== 0,
         k;
      if ((k = x) || (k = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0), k ? (g = !0, s.flags &= -129) : (n === null || n.memoizedState !== null) && (h |= 1), Ge(nt, h & 1), n === null) return Qu(s), n = s.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : n.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824, null) : (x = c.children, n = c.fallback, g ? (c = s.mode, g = s.child, x = {
         mode: "hidden",
         children: x
      }, (c & 1) === 0 && g !== null ? (g.childLanes = 0, g.pendingProps = x) : g = $l(x, c, 0, null), n = Ts(n, c, o, null), g.return = s, n.return = s, g.sibling = n, s.child = g, s.child.memoizedState = wd(o), s.memoizedState = xd, n) : bd(s, x));
      if (h = n.memoizedState, h !== null && (k = h.dehydrated, k !== null)) return u2(n, s, x, c, k, h, o);
      if (g) {
         g = c.fallback, x = s.mode, h = n.child, k = h.sibling;
         var j = {
            mode: "hidden",
            children: c.children
         };
         return (x & 1) === 0 && s.child !== h ? (c = s.child, c.childLanes = 0, c.pendingProps = j, s.deletions = null) : (c = Br(h, j), c.subtreeFlags = h.subtreeFlags & 14680064), k !== null ? g = Br(k, g) : (g = Ts(g, x, o, null), g.flags |= 2), g.return = s, c.return = s, c.sibling = g, s.child = c, c = g, g = s.child, x = n.child.memoizedState, x = x === null ? wd(o) : {
            baseLanes: x.baseLanes | o,
            cachePool: null,
            transitions: x.transitions
         }, g.memoizedState = x, g.childLanes = n.childLanes & ~o, s.memoizedState = xd, c
      }
      return g = n.child, n = g.sibling, c = Br(g, {
         mode: "visible",
         children: c.children
      }), (s.mode & 1) === 0 && (c.lanes = o), c.return = s, c.sibling = null, n !== null && (o = s.deletions, o === null ? (s.deletions = [n], s.flags |= 16) : o.push(n)), s.child = c, s.memoizedState = null, c
   }

   function bd(n, s) {
      return s = $l({
         mode: "visible",
         children: s
      }, n.mode, 0, null), s.return = n, n.child = s
   }

   function Nl(n, s, o, c) {
      return c !== null && qu(c), ii(s, n.child, null, o), n = bd(s, s.pendingProps.children), n.flags |= 2, s.memoizedState = null, n
   }

   function u2(n, s, o, c, h, g, x) {
      if (o) return s.flags & 256 ? (s.flags &= -257, c = md(Error(r(422))), Nl(n, s, x, c)) : s.memoizedState !== null ? (s.child = n.child, s.flags |= 128, null) : (g = c.fallback, h = s.mode, c = $l({
         mode: "visible",
         children: c.children
      }, h, 0, null), g = Ts(g, h, x, null), g.flags |= 2, c.return = s, g.return = s, c.sibling = g, s.child = c, (s.mode & 1) !== 0 && ii(s, n.child, null, x), s.child.memoizedState = wd(x), s.memoizedState = xd, g);
      if ((s.mode & 1) === 0) return Nl(n, s, x, null);
      if (h.data === "$!") {
         if (c = h.nextSibling && h.nextSibling.dataset, c) var k = c.dgst;
         return c = k, g = Error(r(419)), c = md(g, c, void 0), Nl(n, s, x, c)
      }
      if (k = (x & n.childLanes) !== 0, qt || k) {
         if (c = Tt, c !== null) {
            switch (x & -x) {
               case 4:
                  h = 2;
                  break;
               case 16:
                  h = 8;
                  break;
               case 64:
               case 128:
               case 256:
               case 512:
               case 1024:
               case 2048:
               case 4096:
               case 8192:
               case 16384:
               case 32768:
               case 65536:
               case 131072:
               case 262144:
               case 524288:
               case 1048576:
               case 2097152:
               case 4194304:
               case 8388608:
               case 16777216:
               case 33554432:
               case 67108864:
                  h = 32;
                  break;
               case 536870912:
                  h = 268435456;
                  break;
               default:
                  h = 0
            }
            h = (h & (c.suspendedLanes | x)) !== 0 ? 0 : h, h !== 0 && h !== g.retryLane && (g.retryLane = h, ar(n, h), En(c, n, h, -1))
         }
         return Ld(), c = md(Error(r(421))), Nl(n, s, x, c)
      }
      return h.data === "$?" ? (s.flags |= 128, s.child = n.child, s = S2.bind(null, n), h._reactRetry = s, null) : (n = g.treeContext, sn = Nr(h.nextSibling), rn = s, tt = !0, Sn = null, n !== null && (un[dn++] = sr, un[dn++] = ir, un[dn++] = ms, sr = n.id, ir = n.overflow, ms = s), s = bd(s, c.children), s.flags |= 4096, s)
   }

   function bg(n, s, o) {
      n.lanes |= s;
      var c = n.alternate;
      c !== null && (c.lanes |= s), Xu(n.return, s, o)
   }

   function kd(n, s, o, c, h) {
      var g = n.memoizedState;
      g === null ? n.memoizedState = {
         isBackwards: s,
         rendering: null,
         renderingStartTime: 0,
         last: c,
         tail: o,
         tailMode: h
      } : (g.isBackwards = s, g.rendering = null, g.renderingStartTime = 0, g.last = c, g.tail = o, g.tailMode = h)
   }

   function kg(n, s, o) {
      var c = s.pendingProps,
         h = c.revealOrder,
         g = c.tail;
      if (zt(n, s, c.children, o), c = nt.current, (c & 2) !== 0) c = c & 1 | 2, s.flags |= 128;
      else {
         if (n !== null && (n.flags & 128) !== 0) e: for (n = s.child; n !== null;) {
            if (n.tag === 13) n.memoizedState !== null && bg(n, o, s);
            else if (n.tag === 19) bg(n, o, s);
            else if (n.child !== null) {
               n.child.return = n, n = n.child;
               continue
            }
            if (n === s) break e;
            for (; n.sibling === null;) {
               if (n.return === null || n.return === s) break e;
               n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
         }
         c &= 1
      }
      if (Ge(nt, c), (s.mode & 1) === 0) s.memoizedState = null;
      else switch (h) {
         case "forwards":
            for (o = s.child, h = null; o !== null;) n = o.alternate, n !== null && Sl(n) === null && (h = o), o = o.sibling;
            o = h, o === null ? (h = s.child, s.child = null) : (h = o.sibling, o.sibling = null), kd(s, !1, h, o, g);
            break;
         case "backwards":
            for (o = null, h = s.child, s.child = null; h !== null;) {
               if (n = h.alternate, n !== null && Sl(n) === null) {
                  s.child = h;
                  break
               }
               n = h.sibling, h.sibling = o, o = h, h = n
            }
            kd(s, !0, o, null, g);
            break;
         case "together":
            kd(s, !1, null, null, void 0);
            break;
         default:
            s.memoizedState = null
      }
      return s.child
   }

   function Al(n, s) {
      (s.mode & 1) === 0 && n !== null && (n.alternate = null, s.alternate = null, s.flags |= 2)
   }

   function lr(n, s, o) {
      if (n !== null && (s.dependencies = n.dependencies), ws |= s.lanes, (o & s.childLanes) === 0) return null;
      if (n !== null && s.child !== n.child) throw Error(r(153));
      if (s.child !== null) {
         for (n = s.child, o = Br(n, n.pendingProps), s.child = o, o.return = s; n.sibling !== null;) n = n.sibling, o = o.sibling = Br(n, n.pendingProps), o.return = s;
         o.sibling = null
      }
      return s.child
   }

   function d2(n, s, o) {
      switch (s.tag) {
         case 3:
            vg(s), si();
            break;
         case 5:
            Om(s);
            break;
         case 1:
            Qt(s.type) && hl(s);
            break;
         case 4:
            td(s, s.stateNode.containerInfo);
            break;
         case 10:
            var c = s.type._context,
               h = s.memoizedProps.value;
            Ge(xl, c._currentValue), c._currentValue = h;
            break;
         case 13:
            if (c = s.memoizedState, c !== null) return c.dehydrated !== null ? (Ge(nt, nt.current & 1), s.flags |= 128, null) : (o & s.child.childLanes) !== 0 ? wg(n, s, o) : (Ge(nt, nt.current & 1), n = lr(n, s, o), n !== null ? n.sibling : null);
            Ge(nt, nt.current & 1);
            break;
         case 19:
            if (c = (o & s.childLanes) !== 0, (n.flags & 128) !== 0) {
               if (c) return kg(n, s, o);
               s.flags |= 128
            }
            if (h = s.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), Ge(nt, nt.current), c) break;
            return null;
         case 22:
         case 23:
            return s.lanes = 0, mg(n, s, o)
      }
      return lr(n, s, o)
   }
   var Sg, Sd, Tg, Cg;
   Sg = function (n, s) {
      for (var o = s.child; o !== null;) {
         if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
         else if (o.tag !== 4 && o.child !== null) {
            o.child.return = o, o = o.child;
            continue
         }
         if (o === s) break;
         for (; o.sibling === null;) {
            if (o.return === null || o.return === s) return;
            o = o.return
         }
         o.sibling.return = o.return, o = o.sibling
      }
   }, Sd = function () {}, Tg = function (n, s, o, c) {
      var h = n.memoizedProps;
      if (h !== c) {
         n = s.stateNode, vs(zn.current);
         var g = null;
         switch (o) {
            case "input":
               h = $s(n, h), c = $s(n, c), g = [];
               break;
            case "select":
               h = ee({}, h, {
                  value: void 0
               }), c = ee({}, c, {
                  value: void 0
               }), g = [];
               break;
            case "textarea":
               h = te(n, h), c = te(n, c), g = [];
               break;
            default:
               typeof h.onClick != "function" && typeof c.onClick == "function" && (n.onclick = ul)
         }
         ru(o, c);
         var x;
         o = null;
         for (O in h)
            if (!c.hasOwnProperty(O) && h.hasOwnProperty(O) && h[O] != null)
               if (O === "style") {
                  var k = h[O];
                  for (x in k) k.hasOwnProperty(x) && (o || (o = {}), o[x] = "")
               } else O !== "dangerouslySetInnerHTML" && O !== "children" && O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && O !== "autoFocus" && (a.hasOwnProperty(O) ? g || (g = []) : (g = g || []).push(O, null));
         for (O in c) {
            var j = c[O];
            if (k = h != null ? h[O] : void 0, c.hasOwnProperty(O) && j !== k && (j != null || k != null))
               if (O === "style")
                  if (k) {
                     for (x in k) !k.hasOwnProperty(x) || j && j.hasOwnProperty(x) || (o || (o = {}), o[x] = "");
                     for (x in j) j.hasOwnProperty(x) && k[x] !== j[x] && (o || (o = {}), o[x] = j[x])
                  } else o || (g || (g = []), g.push(O, o)), o = j;
            else O === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, k = k ? k.__html : void 0, j != null && k !== j && (g = g || []).push(O, j)) : O === "children" ? typeof j != "string" && typeof j != "number" || (g = g || []).push(O, "" + j) : O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && (a.hasOwnProperty(O) ? (j != null && O === "onScroll" && Ye("scroll", n), g || k === j || (g = [])) : (g = g || []).push(O, j))
         }
         o && (g = g || []).push("style", o);
         var O = g;
         (s.updateQueue = O) && (s.flags |= 4)
      }
   }, Cg = function (n, s, o, c) {
      o !== c && (s.flags |= 4)
   };

   function ja(n, s) {
      if (!tt) switch (n.tailMode) {
         case "hidden":
            s = n.tail;
            for (var o = null; s !== null;) s.alternate !== null && (o = s), s = s.sibling;
            o === null ? n.tail = null : o.sibling = null;
            break;
         case "collapsed":
            o = n.tail;
            for (var c = null; o !== null;) o.alternate !== null && (c = o), o = o.sibling;
            c === null ? s || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null
      }
   }

   function It(n) {
      var s = n.alternate !== null && n.alternate.child === n.child,
         o = 0,
         c = 0;
      if (s)
         for (var h = n.child; h !== null;) o |= h.lanes | h.childLanes, c |= h.subtreeFlags & 14680064, c |= h.flags & 14680064, h.return = n, h = h.sibling;
      else
         for (h = n.child; h !== null;) o |= h.lanes | h.childLanes, c |= h.subtreeFlags, c |= h.flags, h.return = n, h = h.sibling;
      return n.subtreeFlags |= c, n.childLanes = o, s
   }

   function f2(n, s, o) {
      var c = s.pendingProps;
      switch (Wu(s), s.tag) {
         case 2:
         case 16:
         case 15:
         case 0:
         case 11:
         case 7:
         case 8:
         case 12:
         case 9:
         case 14:
            return It(s), null;
         case 1:
            return Qt(s.type) && fl(), It(s), null;
         case 3:
            return c = s.stateNode, li(), Xe(Ht), Xe(At), sd(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), (n === null || n.child === null) && (yl(s) ? s.flags |= 4 : n === null || n.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, Sn !== null && (Md(Sn), Sn = null))), Sd(n, s), It(s), null;
         case 5:
            nd(s);
            var h = vs(ba.current);
            if (o = s.type, n !== null && s.stateNode != null) Tg(n, s, o, c, h), n.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
            else {
               if (!c) {
                  if (s.stateNode === null) throw Error(r(166));
                  return It(s), null
               }
               if (n = vs(zn.current), yl(s)) {
                  c = s.stateNode, o = s.type;
                  var g = s.memoizedProps;
                  switch (c[Vn] = s, c[ga] = g, n = (s.mode & 1) !== 0, o) {
                     case "dialog":
                        Ye("cancel", c), Ye("close", c);
                        break;
                     case "iframe":
                     case "object":
                     case "embed":
                        Ye("load", c);
                        break;
                     case "video":
                     case "audio":
                        for (h = 0; h < ha.length; h++) Ye(ha[h], c);
                        break;
                     case "source":
                        Ye("error", c);
                        break;
                     case "img":
                     case "image":
                     case "link":
                        Ye("error", c), Ye("load", c);
                        break;
                     case "details":
                        Ye("toggle", c);
                        break;
                     case "input":
                        eu(c, g), Ye("invalid", c);
                        break;
                     case "select":
                        c._wrapperState = {
                           wasMultiple: !!g.multiple
                        }, Ye("invalid", c);
                        break;
                     case "textarea":
                        J(c, g), Ye("invalid", c)
                  }
                  ru(o, g), h = null;
                  for (var x in g)
                     if (g.hasOwnProperty(x)) {
                        var k = g[x];
                        x === "children" ? typeof k == "string" ? c.textContent !== k && (g.suppressHydrationWarning !== !0 && cl(c.textContent, k, n), h = ["children", k]) : typeof k == "number" && c.textContent !== "" + k && (g.suppressHydrationWarning !== !0 && cl(c.textContent, k, n), h = ["children", "" + k]) : a.hasOwnProperty(x) && k != null && x === "onScroll" && Ye("scroll", c)
                     } switch (o) {
                     case "input":
                        us(c), E(c, g, !0);
                        break;
                     case "textarea":
                        us(c), Ie(c);
                        break;
                     case "select":
                     case "option":
                        break;
                     default:
                        typeof g.onClick == "function" && (c.onclick = ul)
                  }
                  c = h, s.updateQueue = c, c !== null && (s.flags |= 4)
               } else {
                  x = h.nodeType === 9 ? h : h.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = dt(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = x.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof c.is == "string" ? n = x.createElement(o, {
                     is: c.is
                  }) : (n = x.createElement(o), o === "select" && (x = n, c.multiple ? x.multiple = !0 : c.size && (x.size = c.size))) : n = x.createElementNS(n, o), n[Vn] = s, n[ga] = c, Sg(n, s, !1, !1), s.stateNode = n;
                  e: {
                     switch (x = su(o, c), o) {
                        case "dialog":
                           Ye("cancel", n), Ye("close", n), h = c;
                           break;
                        case "iframe":
                        case "object":
                        case "embed":
                           Ye("load", n), h = c;
                           break;
                        case "video":
                        case "audio":
                           for (h = 0; h < ha.length; h++) Ye(ha[h], n);
                           h = c;
                           break;
                        case "source":
                           Ye("error", n), h = c;
                           break;
                        case "img":
                        case "image":
                        case "link":
                           Ye("error", n), Ye("load", n), h = c;
                           break;
                        case "details":
                           Ye("toggle", n), h = c;
                           break;
                        case "input":
                           eu(n, c), h = $s(n, c), Ye("invalid", n);
                           break;
                        case "option":
                           h = c;
                           break;
                        case "select":
                           n._wrapperState = {
                              wasMultiple: !!c.multiple
                           }, h = ee({}, c, {
                              value: void 0
                           }), Ye("invalid", n);
                           break;
                        case "textarea":
                           J(n, c), h = te(n, c), Ye("invalid", n);
                           break;
                        default:
                           h = c
                     }
                     ru(o, h),
                     k = h;
                     for (g in k)
                        if (k.hasOwnProperty(g)) {
                           var j = k[g];
                           g === "style" ? Bo(n, j) : g === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && zo(n, j)) : g === "children" ? typeof j == "string" ? (o !== "textarea" || j !== "") && er(n, j) : typeof j == "number" && er(n, "" + j) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (a.hasOwnProperty(g) ? j != null && g === "onScroll" && Ye("scroll", n) : j != null && F(n, g, j, x))
                        } switch (o) {
                        case "input":
                           us(n), E(n, c, !1);
                           break;
                        case "textarea":
                           us(n), Ie(n);
                           break;
                        case "option":
                           c.value != null && n.setAttribute("value", "" + Ue(c.value));
                           break;
                        case "select":
                           n.multiple = !!c.multiple, g = c.value, g != null ? re(n, !!c.multiple, g, !1) : c.defaultValue != null && re(n, !!c.multiple, c.defaultValue, !0);
                           break;
                        default:
                           typeof h.onClick == "function" && (n.onclick = ul)
                     }
                     switch (o) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                           c = !!c.autoFocus;
                           break e;
                        case "img":
                           c = !0;
                           break e;
                        default:
                           c = !1
                     }
                  }
                  c && (s.flags |= 4)
               }
               s.ref !== null && (s.flags |= 512, s.flags |= 2097152)
            }
            return It(s), null;
         case 6:
            if (n && s.stateNode != null) Cg(n, s, n.memoizedProps, c);
            else {
               if (typeof c != "string" && s.stateNode === null) throw Error(r(166));
               if (o = vs(ba.current), vs(zn.current), yl(s)) {
                  if (c = s.stateNode, o = s.memoizedProps, c[Vn] = s, (g = c.nodeValue !== o) && (n = rn, n !== null)) switch (n.tag) {
                     case 3:
                        cl(c.nodeValue, o, (n.mode & 1) !== 0);
                        break;
                     case 5:
                        n.memoizedProps.suppressHydrationWarning !== !0 && cl(c.nodeValue, o, (n.mode & 1) !== 0)
                  }
                  g && (s.flags |= 4)
               } else c = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(c), c[Vn] = s, s.stateNode = c
            }
            return It(s), null;
         case 13:
            if (Xe(nt), c = s.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
               if (tt && sn !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0) Pm(), si(), s.flags |= 98560, g = !1;
               else if (g = yl(s), c !== null && c.dehydrated !== null) {
                  if (n === null) {
                     if (!g) throw Error(r(318));
                     if (g = s.memoizedState, g = g !== null ? g.dehydrated : null, !g) throw Error(r(317));
                     g[Vn] = s
                  } else si(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
                  It(s), g = !1
               } else Sn !== null && (Md(Sn), Sn = null), g = !0;
               if (!g) return s.flags & 65536 ? s : null
            }
            return (s.flags & 128) !== 0 ? (s.lanes = o, s) : (c = c !== null, c !== (n !== null && n.memoizedState !== null) && c && (s.child.flags |= 8192, (s.mode & 1) !== 0 && (n === null || (nt.current & 1) !== 0 ? bt === 0 && (bt = 3) : Ld())), s.updateQueue !== null && (s.flags |= 4), It(s), null);
         case 4:
            return li(), Sd(n, s), n === null && pa(s.stateNode.containerInfo), It(s), null;
         case 10:
            return Yu(s.type._context), It(s), null;
         case 17:
            return Qt(s.type) && fl(), It(s), null;
         case 19:
            if (Xe(nt), g = s.memoizedState, g === null) return It(s), null;
            if (c = (s.flags & 128) !== 0, x = g.rendering, x === null)
               if (c) ja(g, !1);
               else {
                  if (bt !== 0 || n !== null && (n.flags & 128) !== 0)
                     for (n = s.child; n !== null;) {
                        if (x = Sl(n), x !== null) {
                           for (s.flags |= 128, ja(g, !1), c = x.updateQueue, c !== null && (s.updateQueue = c, s.flags |= 4), s.subtreeFlags = 0, c = o, o = s.child; o !== null;) g = o, n = c, g.flags &= 14680066, x = g.alternate, x === null ? (g.childLanes = 0, g.lanes = n, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = x.childLanes, g.lanes = x.lanes, g.child = x.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = x.memoizedProps, g.memoizedState = x.memoizedState, g.updateQueue = x.updateQueue, g.type = x.type, n = x.dependencies, g.dependencies = n === null ? null : {
                              lanes: n.lanes,
                              firstContext: n.firstContext
                           }), o = o.sibling;
                           return Ge(nt, nt.current & 1 | 2), s.child
                        }
                        n = n.sibling
                     }
                  g.tail !== null && ft() > fi && (s.flags |= 128, c = !0, ja(g, !1), s.lanes = 4194304)
               }
            else {
               if (!c)
                  if (n = Sl(x), n !== null) {
                     if (s.flags |= 128, c = !0, o = n.updateQueue, o !== null && (s.updateQueue = o, s.flags |= 4), ja(g, !0), g.tail === null && g.tailMode === "hidden" && !x.alternate && !tt) return It(s), null
                  } else 2 * ft() - g.renderingStartTime > fi && o !== 1073741824 && (s.flags |= 128, c = !0, ja(g, !1), s.lanes = 4194304);
               g.isBackwards ? (x.sibling = s.child, s.child = x) : (o = g.last, o !== null ? o.sibling = x : s.child = x, g.last = x)
            }
            return g.tail !== null ? (s = g.tail, g.rendering = s, g.tail = s.sibling, g.renderingStartTime = ft(), s.sibling = null, o = nt.current, Ge(nt, c ? o & 1 | 2 : o & 1), s) : (It(s), null);
         case 22:
         case 23:
            return Od(), c = s.memoizedState !== null, n !== null && n.memoizedState !== null !== c && (s.flags |= 8192), c && (s.mode & 1) !== 0 ? (an & 1073741824) !== 0 && (It(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : It(s), null;
         case 24:
            return null;
         case 25:
            return null
      }
      throw Error(r(156, s.tag))
   }

   function h2(n, s) {
      switch (Wu(s), s.tag) {
         case 1:
            return Qt(s.type) && fl(), n = s.flags, n & 65536 ? (s.flags = n & -65537 | 128, s) : null;
         case 3:
            return li(), Xe(Ht), Xe(At), sd(), n = s.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (s.flags = n & -65537 | 128, s) : null;
         case 5:
            return nd(s), null;
         case 13:
            if (Xe(nt), n = s.memoizedState, n !== null && n.dehydrated !== null) {
               if (s.alternate === null) throw Error(r(340));
               si()
            }
            return n = s.flags, n & 65536 ? (s.flags = n & -65537 | 128, s) : null;
         case 19:
            return Xe(nt), null;
         case 4:
            return li(), null;
         case 10:
            return Yu(s.type._context), null;
         case 22:
         case 23:
            return Od(), null;
         case 24:
            return null;
         default:
            return null
      }
   }
   var Dl = !1,
      Mt = !1,
      p2 = typeof WeakSet == "function" ? WeakSet : Set,
      ce = null;

   function ui(n, s) {
      var o = n.ref;
      if (o !== null)
         if (typeof o == "function") try {
            o(null)
         } catch (c) {
            ot(n, s, c)
         } else o.current = null
   }

   function Td(n, s, o) {
      try {
         o()
      } catch (c) {
         ot(n, s, c)
      }
   }
   var jg = !1;

   function m2(n, s) {
      if (Ou = Xo, n = sm(), Pu(n)) {
         if ("selectionStart" in n) var o = {
            start: n.selectionStart,
            end: n.selectionEnd
         };
         else e: {
            o = (o = n.ownerDocument) && o.defaultView || window;
            var c = o.getSelection && o.getSelection();
            if (c && c.rangeCount !== 0) {
               o = c.anchorNode;
               var h = c.anchorOffset,
                  g = c.focusNode;
               c = c.focusOffset;
               try {
                  o.nodeType, g.nodeType
               } catch {
                  o = null;
                  break e
               }
               var x = 0,
                  k = -1,
                  j = -1,
                  O = 0,
                  H = 0,
                  q = n,
                  W = null;
               t: for (;;) {
                  for (var oe; q !== o || h !== 0 && q.nodeType !== 3 || (k = x + h), q !== g || c !== 0 && q.nodeType !== 3 || (j = x + c), q.nodeType === 3 && (x += q.nodeValue.length), (oe = q.firstChild) !== null;) W = q, q = oe;
                  for (;;) {
                     if (q === n) break t;
                     if (W === o && ++O === h && (k = x), W === g && ++H === c && (j = x), (oe = q.nextSibling) !== null) break;
                     q = W, W = q.parentNode
                  }
                  q = oe
               }
               o = k === -1 || j === -1 ? null : {
                  start: k,
                  end: j
               }
            } else o = null
         }
         o = o || {
            start: 0,
            end: 0
         }
      } else o = null;
      for (Lu = {
            focusedElem: n,
            selectionRange: o
         }, Xo = !1, ce = s; ce !== null;)
         if (s = ce, n = s.child, (s.subtreeFlags & 1028) !== 0 && n !== null) n.return = s, ce = n;
         else
            for (; ce !== null;) {
               s = ce;
               try {
                  var ue = s.alternate;
                  if ((s.flags & 1024) !== 0) switch (s.tag) {
                     case 0:
                     case 11:
                     case 15:
                        break;
                     case 1:
                        if (ue !== null) {
                           var de = ue.memoizedProps,
                              ht = ue.memoizedState,
                              I = s.stateNode,
                              N = I.getSnapshotBeforeUpdate(s.elementType === s.type ? de : Tn(s.type, de), ht);
                           I.__reactInternalSnapshotBeforeUpdate = N
                        }
                        break;
                     case 3:
                        var M = s.stateNode.containerInfo;
                        M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
                        break;
                     case 5:
                     case 6:
                     case 4:
                     case 17:
                        break;
                     default:
                        throw Error(r(163))
                  }
               } catch (G) {
                  ot(s, s.return, G)
               }
               if (n = s.sibling, n !== null) {
                  n.return = s.return, ce = n;
                  break
               }
               ce = s.return
            }
      return ue = jg, jg = !1, ue
   }

   function Ea(n, s, o) {
      var c = s.updateQueue;
      if (c = c !== null ? c.lastEffect : null, c !== null) {
         var h = c = c.next;
         do {
            if ((h.tag & n) === n) {
               var g = h.destroy;
               h.destroy = void 0, g !== void 0 && Td(s, o, g)
            }
            h = h.next
         } while (h !== c)
      }
   }

   function Il(n, s) {
      if (s = s.updateQueue, s = s !== null ? s.lastEffect : null, s !== null) {
         var o = s = s.next;
         do {
            if ((o.tag & n) === n) {
               var c = o.create;
               o.destroy = c()
            }
            o = o.next
         } while (o !== s)
      }
   }

   function Cd(n) {
      var s = n.ref;
      if (s !== null) {
         var o = n.stateNode;
         switch (n.tag) {
            case 5:
               n = o;
               break;
            default:
               n = o
         }
         typeof s == "function" ? s(n) : s.current = n
      }
   }

   function Eg(n) {
      var s = n.alternate;
      s !== null && (n.alternate = null, Eg(s)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (s = n.stateNode, s !== null && (delete s[Vn], delete s[ga], delete s[Bu], delete s[Yk], delete s[Xk])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null
   }

   function Pg(n) {
      return n.tag === 5 || n.tag === 3 || n.tag === 4
   }

   function _g(n) {
      e: for (;;) {
         for (; n.sibling === null;) {
            if (n.return === null || Pg(n.return)) return null;
            n = n.return
         }
         for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18;) {
            if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
            n.child.return = n, n = n.child
         }
         if (!(n.flags & 2)) return n.stateNode
      }
   }

   function jd(n, s, o) {
      var c = n.tag;
      if (c === 5 || c === 6) n = n.stateNode, s ? o.nodeType === 8 ? o.parentNode.insertBefore(n, s) : o.insertBefore(n, s) : (o.nodeType === 8 ? (s = o.parentNode, s.insertBefore(n, o)) : (s = o, s.appendChild(n)), o = o._reactRootContainer, o != null || s.onclick !== null || (s.onclick = ul));
      else if (c !== 4 && (n = n.child, n !== null))
         for (jd(n, s, o), n = n.sibling; n !== null;) jd(n, s, o), n = n.sibling
   }

   function Ed(n, s, o) {
      var c = n.tag;
      if (c === 5 || c === 6) n = n.stateNode, s ? o.insertBefore(n, s) : o.appendChild(n);
      else if (c !== 4 && (n = n.child, n !== null))
         for (Ed(n, s, o), n = n.sibling; n !== null;) Ed(n, s, o), n = n.sibling
   }
   var jt = null,
      Cn = !1;

   function Or(n, s, o) {
      for (o = o.child; o !== null;) Ng(n, s, o), o = o.sibling
   }

   function Ng(n, s, o) {
      if (Fn && typeof Fn.onCommitFiberUnmount == "function") try {
         Fn.onCommitFiberUnmount(Ho, o)
      } catch {}
      switch (o.tag) {
         case 5:
            Mt || ui(o, s);
         case 6:
            var c = jt,
               h = Cn;
            jt = null, Or(n, s, o), jt = c, Cn = h, jt !== null && (Cn ? (n = jt, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : jt.removeChild(o.stateNode));
            break;
         case 18:
            jt !== null && (Cn ? (n = jt, o = o.stateNode, n.nodeType === 8 ? zu(n.parentNode, o) : n.nodeType === 1 && zu(n, o), ia(n)) : zu(jt, o.stateNode));
            break;
         case 4:
            c = jt, h = Cn, jt = o.stateNode.containerInfo, Cn = !0, Or(n, s, o), jt = c, Cn = h;
            break;
         case 0:
         case 11:
         case 14:
         case 15:
            if (!Mt && (c = o.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
               h = c = c.next;
               do {
                  var g = h,
                     x = g.destroy;
                  g = g.tag, x !== void 0 && ((g & 2) !== 0 || (g & 4) !== 0) && Td(o, s, x), h = h.next
               } while (h !== c)
            }
            Or(n, s, o);
            break;
         case 1:
            if (!Mt && (ui(o, s), c = o.stateNode, typeof c.componentWillUnmount == "function")) try {
               c.props = o.memoizedProps, c.state = o.memoizedState, c.componentWillUnmount()
            } catch (k) {
               ot(o, s, k)
            }
            Or(n, s, o);
            break;
         case 21:
            Or(n, s, o);
            break;
         case 22:
            o.mode & 1 ? (Mt = (c = Mt) || o.memoizedState !== null, Or(n, s, o), Mt = c) : Or(n, s, o);
            break;
         default:
            Or(n, s, o)
      }
   }

   function Ag(n) {
      var s = n.updateQueue;
      if (s !== null) {
         n.updateQueue = null;
         var o = n.stateNode;
         o === null && (o = n.stateNode = new p2), s.forEach(function (c) {
            var h = T2.bind(null, n, c);
            o.has(c) || (o.add(c), c.then(h, h))
         })
      }
   }

   function jn(n, s) {
      var o = s.deletions;
      if (o !== null)
         for (var c = 0; c < o.length; c++) {
            var h = o[c];
            try {
               var g = n,
                  x = s,
                  k = x;
               e: for (; k !== null;) {
                  switch (k.tag) {
                     case 5:
                        jt = k.stateNode, Cn = !1;
                        break e;
                     case 3:
                        jt = k.stateNode.containerInfo, Cn = !0;
                        break e;
                     case 4:
                        jt = k.stateNode.containerInfo, Cn = !0;
                        break e
                  }
                  k = k.return
               }
               if (jt === null) throw Error(r(160));
               Ng(g, x, h), jt = null, Cn = !1;
               var j = h.alternate;
               j !== null && (j.return = null), h.return = null
            } catch (O) {
               ot(h, s, O)
            }
         }
      if (s.subtreeFlags & 12854)
         for (s = s.child; s !== null;) Dg(s, n), s = s.sibling
   }

   function Dg(n, s) {
      var o = n.alternate,
         c = n.flags;
      switch (n.tag) {
         case 0:
         case 11:
         case 14:
         case 15:
            if (jn(s, n), Un(n), c & 4) {
               try {
                  Ea(3, n, n.return), Il(3, n)
               } catch (de) {
                  ot(n, n.return, de)
               }
               try {
                  Ea(5, n, n.return)
               } catch (de) {
                  ot(n, n.return, de)
               }
            }
            break;
         case 1:
            jn(s, n), Un(n), c & 512 && o !== null && ui(o, o.return);
            break;
         case 5:
            if (jn(s, n), Un(n), c & 512 && o !== null && ui(o, o.return), n.flags & 32) {
               var h = n.stateNode;
               try {
                  er(h, "")
               } catch (de) {
                  ot(n, n.return, de)
               }
            }
            if (c & 4 && (h = n.stateNode, h != null)) {
               var g = n.memoizedProps,
                  x = o !== null ? o.memoizedProps : g,
                  k = n.type,
                  j = n.updateQueue;
               if (n.updateQueue = null, j !== null) try {
                  k === "input" && g.type === "radio" && g.name != null && tu(h, g), su(k, x);
                  var O = su(k, g);
                  for (x = 0; x < j.length; x += 2) {
                     var H = j[x],
                        q = j[x + 1];
                     H === "style" ? Bo(h, q) : H === "dangerouslySetInnerHTML" ? zo(h, q) : H === "children" ? er(h, q) : F(h, H, q, O)
                  }
                  switch (k) {
                     case "input":
                        Vo(h, g);
                        break;
                     case "textarea":
                        ve(h, g);
                        break;
                     case "select":
                        var W = h._wrapperState.wasMultiple;
                        h._wrapperState.wasMultiple = !!g.multiple;
                        var oe = g.value;
                        oe != null ? re(h, !!g.multiple, oe, !1) : W !== !!g.multiple && (g.defaultValue != null ? re(h, !!g.multiple, g.defaultValue, !0) : re(h, !!g.multiple, g.multiple ? [] : "", !1))
                  }
                  h[ga] = g
               } catch (de) {
                  ot(n, n.return, de)
               }
            }
            break;
         case 6:
            if (jn(s, n), Un(n), c & 4) {
               if (n.stateNode === null) throw Error(r(162));
               h = n.stateNode, g = n.memoizedProps;
               try {
                  h.nodeValue = g
               } catch (de) {
                  ot(n, n.return, de)
               }
            }
            break;
         case 3:
            if (jn(s, n), Un(n), c & 4 && o !== null && o.memoizedState.isDehydrated) try {
               ia(s.containerInfo)
            } catch (de) {
               ot(n, n.return, de)
            }
            break;
         case 4:
            jn(s, n), Un(n);
            break;
         case 13:
            jn(s, n), Un(n), h = n.child, h.flags & 8192 && (g = h.memoizedState !== null, h.stateNode.isHidden = g, !g || h.alternate !== null && h.alternate.memoizedState !== null || (Nd = ft())), c & 4 && Ag(n);
            break;
         case 22:
            if (H = o !== null && o.memoizedState !== null, n.mode & 1 ? (Mt = (O = Mt) || H, jn(s, n), Mt = O) : jn(s, n), Un(n), c & 8192) {
               if (O = n.memoizedState !== null, (n.stateNode.isHidden = O) && !H && (n.mode & 1) !== 0)
                  for (ce = n, H = n.child; H !== null;) {
                     for (q = ce = H; ce !== null;) {
                        switch (W = ce, oe = W.child, W.tag) {
                           case 0:
                           case 11:
                           case 14:
                           case 15:
                              Ea(4, W, W.return);
                              break;
                           case 1:
                              ui(W, W.return);
                              var ue = W.stateNode;
                              if (typeof ue.componentWillUnmount == "function") {
                                 c = W, o = W.return;
                                 try {
                                    s = c, ue.props = s.memoizedProps, ue.state = s.memoizedState, ue.componentWillUnmount()
                                 } catch (de) {
                                    ot(c, o, de)
                                 }
                              }
                              break;
                           case 5:
                              ui(W, W.return);
                              break;
                           case 22:
                              if (W.memoizedState !== null) {
                                 Rg(q);
                                 continue
                              }
                        }
                        oe !== null ? (oe.return = W, ce = oe) : Rg(q)
                     }
                     H = H.sibling
                  }
               e: for (H = null, q = n;;) {
                  if (q.tag === 5) {
                     if (H === null) {
                        H = q;
                        try {
                           h = q.stateNode, O ? (g = h.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (k = q.stateNode, j = q.memoizedProps.style, x = j != null && j.hasOwnProperty("display") ? j.display : null, k.style.display = Ki("display", x))
                        } catch (de) {
                           ot(n, n.return, de)
                        }
                     }
                  } else if (q.tag === 6) {
                     if (H === null) try {
                        q.stateNode.nodeValue = O ? "" : q.memoizedProps
                     } catch (de) {
                        ot(n, n.return, de)
                     }
                  } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
                     q.child.return = q, q = q.child;
                     continue
                  }
                  if (q === n) break e;
                  for (; q.sibling === null;) {
                     if (q.return === null || q.return === n) break e;
                     H === q && (H = null), q = q.return
                  }
                  H === q && (H = null), q.sibling.return = q.return, q = q.sibling
               }
            }
            break;
         case 19:
            jn(s, n), Un(n), c & 4 && Ag(n);
            break;
         case 21:
            break;
         default:
            jn(s, n), Un(n)
      }
   }

   function Un(n) {
      var s = n.flags;
      if (s & 2) {
         try {
            e: {
               for (var o = n.return; o !== null;) {
                  if (Pg(o)) {
                     var c = o;
                     break e
                  }
                  o = o.return
               }
               throw Error(r(160))
            }
            switch (c.tag) {
               case 5:
                  var h = c.stateNode;
                  c.flags & 32 && (er(h, ""), c.flags &= -33);
                  var g = _g(n);
                  Ed(n, g, h);
                  break;
               case 3:
               case 4:
                  var x = c.stateNode.containerInfo,
                     k = _g(n);
                  jd(n, k, x);
                  break;
               default:
                  throw Error(r(161))
            }
         }
         catch (j) {
            ot(n, n.return, j)
         }
         n.flags &= -3
      }
      s & 4096 && (n.flags &= -4097)
   }

   function g2(n, s, o) {
      ce = n, Ig(n)
   }

   function Ig(n, s, o) {
      for (var c = (n.mode & 1) !== 0; ce !== null;) {
         var h = ce,
            g = h.child;
         if (h.tag === 22 && c) {
            var x = h.memoizedState !== null || Dl;
            if (!x) {
               var k = h.alternate,
                  j = k !== null && k.memoizedState !== null || Mt;
               k = Dl;
               var O = Mt;
               if (Dl = x, (Mt = j) && !O)
                  for (ce = h; ce !== null;) x = ce, j = x.child, x.tag === 22 && x.memoizedState !== null ? Og(h) : j !== null ? (j.return = x, ce = j) : Og(h);
               for (; g !== null;) ce = g, Ig(g), g = g.sibling;
               ce = h, Dl = k, Mt = O
            }
            Mg(n)
         } else(h.subtreeFlags & 8772) !== 0 && g !== null ? (g.return = h, ce = g) : Mg(n)
      }
   }

   function Mg(n) {
      for (; ce !== null;) {
         var s = ce;
         if ((s.flags & 8772) !== 0) {
            var o = s.alternate;
            try {
               if ((s.flags & 8772) !== 0) switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                     Mt || Il(5, s);
                     break;
                  case 1:
                     var c = s.stateNode;
                     if (s.flags & 4 && !Mt)
                        if (o === null) c.componentDidMount();
                        else {
                           var h = s.elementType === s.type ? o.memoizedProps : Tn(s.type, o.memoizedProps);
                           c.componentDidUpdate(h, o.memoizedState, c.__reactInternalSnapshotBeforeUpdate)
                        } var g = s.updateQueue;
                     g !== null && Rm(s, g, c);
                     break;
                  case 3:
                     var x = s.updateQueue;
                     if (x !== null) {
                        if (o = null, s.child !== null) switch (s.child.tag) {
                           case 5:
                              o = s.child.stateNode;
                              break;
                           case 1:
                              o = s.child.stateNode
                        }
                        Rm(s, x, o)
                     }
                     break;
                  case 5:
                     var k = s.stateNode;
                     if (o === null && s.flags & 4) {
                        o = k;
                        var j = s.memoizedProps;
                        switch (s.type) {
                           case "button":
                           case "input":
                           case "select":
                           case "textarea":
                              j.autoFocus && o.focus();
                              break;
                           case "img":
                              j.src && (o.src = j.src)
                        }
                     }
                     break;
                  case 6:
                     break;
                  case 4:
                     break;
                  case 12:
                     break;
                  case 13:
                     if (s.memoizedState === null) {
                        var O = s.alternate;
                        if (O !== null) {
                           var H = O.memoizedState;
                           if (H !== null) {
                              var q = H.dehydrated;
                              q !== null && ia(q)
                           }
                        }
                     }
                     break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                     break;
                  default:
                     throw Error(r(163))
               }
               Mt || s.flags & 512 && Cd(s)
            } catch (W) {
               ot(s, s.return, W)
            }
         }
         if (s === n) {
            ce = null;
            break
         }
         if (o = s.sibling, o !== null) {
            o.return = s.return, ce = o;
            break
         }
         ce = s.return
      }
   }

   function Rg(n) {
      for (; ce !== null;) {
         var s = ce;
         if (s === n) {
            ce = null;
            break
         }
         var o = s.sibling;
         if (o !== null) {
            o.return = s.return, ce = o;
            break
         }
         ce = s.return
      }
   }

   function Og(n) {
      for (; ce !== null;) {
         var s = ce;
         try {
            switch (s.tag) {
               case 0:
               case 11:
               case 15:
                  var o = s.return;
                  try {
                     Il(4, s)
                  } catch (j) {
                     ot(s, o, j)
                  }
                  break;
               case 1:
                  var c = s.stateNode;
                  if (typeof c.componentDidMount == "function") {
                     var h = s.return;
                     try {
                        c.componentDidMount()
                     } catch (j) {
                        ot(s, h, j)
                     }
                  }
                  var g = s.return;
                  try {
                     Cd(s)
                  } catch (j) {
                     ot(s, g, j)
                  }
                  break;
               case 5:
                  var x = s.return;
                  try {
                     Cd(s)
                  } catch (j) {
                     ot(s, x, j)
                  }
            }
         } catch (j) {
            ot(s, s.return, j)
         }
         if (s === n) {
            ce = null;
            break
         }
         var k = s.sibling;
         if (k !== null) {
            k.return = s.return, ce = k;
            break
         }
         ce = s.return
      }
   }
   var y2 = Math.ceil,
      Ml = $.ReactCurrentDispatcher,
      Pd = $.ReactCurrentOwner,
      pn = $.ReactCurrentBatchConfig,
      $e = 0,
      Tt = null,
      vt = null,
      Et = 0,
      an = 0,
      di = Ar(0),
      bt = 0,
      Pa = null,
      ws = 0,
      Rl = 0,
      _d = 0,
      _a = null,
      Kt = null,
      Nd = 0,
      fi = 1 / 0,
      cr = null,
      Ol = !1,
      Ad = null,
      Lr = null,
      Ll = !1,
      Fr = null,
      Fl = 0,
      Na = 0,
      Dd = null,
      Vl = -1,
      zl = 0;

   function Bt() {
      return ($e & 6) !== 0 ? ft() : Vl !== -1 ? Vl : Vl = ft()
   }

   function Vr(n) {
      return (n.mode & 1) === 0 ? 1 : ($e & 2) !== 0 && Et !== 0 ? Et & -Et : e2.transition !== null ? (zl === 0 && (zl = _p()), zl) : (n = qe, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Fp(n.type)), n)
   }

   function En(n, s, o, c) {
      if (50 < Na) throw Na = 0, Dd = null, Error(r(185));
      ea(n, o, c), (($e & 2) === 0 || n !== Tt) && (n === Tt && (($e & 2) === 0 && (Rl |= o), bt === 4 && zr(n, Et)), Gt(n, c), o === 1 && $e === 0 && (s.mode & 1) === 0 && (fi = ft() + 500, pl && Ir()))
   }

   function Gt(n, s) {
      var o = n.callbackNode;
      ek(n, s);
      var c = Ko(n, n === Tt ? Et : 0);
      if (c === 0) o !== null && jp(o), n.callbackNode = null, n.callbackPriority = 0;
      else if (s = c & -c, n.callbackPriority !== s) {
         if (o != null && jp(o), s === 1) n.tag === 0 ? Jk(Fg.bind(null, n)) : Sm(Fg.bind(null, n)), Kk(function () {
            ($e & 6) === 0 && Ir()
         }), o = null;
         else {
            switch (Np(c)) {
               case 1:
                  o = du;
                  break;
               case 4:
                  o = Ep;
                  break;
               case 16:
                  o = Wo;
                  break;
               case 536870912:
                  o = Pp;
                  break;
               default:
                  o = Wo
            }
            o = Hg(o, Lg.bind(null, n))
         }
         n.callbackPriority = s, n.callbackNode = o
      }
   }

   function Lg(n, s) {
      if (Vl = -1, zl = 0, ($e & 6) !== 0) throw Error(r(327));
      var o = n.callbackNode;
      if (hi() && n.callbackNode !== o) return null;
      var c = Ko(n, n === Tt ? Et : 0);
      if (c === 0) return null;
      if ((c & 30) !== 0 || (c & n.expiredLanes) !== 0 || s) s = Bl(n, c);
      else {
         s = c;
         var h = $e;
         $e |= 2;
         var g = zg();
         (Tt !== n || Et !== s) && (cr = null, fi = ft() + 500, ks(n, s));
         do try {
            w2();
            break
         } catch (k) {
            Vg(n, k)
         }
         while (!0);
         Gu(), Ml.current = g, $e = h, vt !== null ? s = 0 : (Tt = null, Et = 0, s = bt)
      }
      if (s !== 0) {
         if (s === 2 && (h = fu(n), h !== 0 && (c = h, s = Id(n, h))), s === 1) throw o = Pa, ks(n, 0), zr(n, c), Gt(n, ft()), o;
         if (s === 6) zr(n, c);
         else {
            if (h = n.current.alternate, (c & 30) === 0 && !v2(h) && (s = Bl(n, c), s === 2 && (g = fu(n), g !== 0 && (c = g, s = Id(n, g))), s === 1)) throw o = Pa, ks(n, 0), zr(n, c), Gt(n, ft()), o;
            switch (n.finishedWork = h, n.finishedLanes = c, s) {
               case 0:
               case 1:
                  throw Error(r(345));
               case 2:
                  Ss(n, Kt, cr);
                  break;
               case 3:
                  if (zr(n, c), (c & 130023424) === c && (s = Nd + 500 - ft(), 10 < s)) {
                     if (Ko(n, 0) !== 0) break;
                     if (h = n.suspendedLanes, (h & c) !== c) {
                        Bt(), n.pingedLanes |= n.suspendedLanes & h;
                        break
                     }
                     n.timeoutHandle = Vu(Ss.bind(null, n, Kt, cr), s);
                     break
                  }
                  Ss(n, Kt, cr);
                  break;
               case 4:
                  if (zr(n, c), (c & 4194240) === c) break;
                  for (s = n.eventTimes, h = -1; 0 < c;) {
                     var x = 31 - bn(c);
                     g = 1 << x, x = s[x], x > h && (h = x), c &= ~g
                  }
                  if (c = h, c = ft() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * y2(c / 1960)) - c, 10 < c) {
                     n.timeoutHandle = Vu(Ss.bind(null, n, Kt, cr), c);
                     break
                  }
                  Ss(n, Kt, cr);
                  break;
               case 5:
                  Ss(n, Kt, cr);
                  break;
               default:
                  throw Error(r(329))
            }
         }
      }
      return Gt(n, ft()), n.callbackNode === o ? Lg.bind(null, n) : null
   }

   function Id(n, s) {
      var o = _a;
      return n.current.memoizedState.isDehydrated && (ks(n, s).flags |= 256), n = Bl(n, s), n !== 2 && (s = Kt, Kt = o, s !== null && Md(s)), n
   }

   function Md(n) {
      Kt === null ? Kt = n : Kt.push.apply(Kt, n)
   }

   function v2(n) {
      for (var s = n;;) {
         if (s.flags & 16384) {
            var o = s.updateQueue;
            if (o !== null && (o = o.stores, o !== null))
               for (var c = 0; c < o.length; c++) {
                  var h = o[c],
                     g = h.getSnapshot;
                  h = h.value;
                  try {
                     if (!kn(g(), h)) return !1
                  } catch {
                     return !1
                  }
               }
         }
         if (o = s.child, s.subtreeFlags & 16384 && o !== null) o.return = s, s = o;
         else {
            if (s === n) break;
            for (; s.sibling === null;) {
               if (s.return === null || s.return === n) return !0;
               s = s.return
            }
            s.sibling.return = s.return, s = s.sibling
         }
      }
      return !0
   }

   function zr(n, s) {
      for (s &= ~_d, s &= ~Rl, n.suspendedLanes |= s, n.pingedLanes &= ~s, n = n.expirationTimes; 0 < s;) {
         var o = 31 - bn(s),
            c = 1 << o;
         n[o] = -1, s &= ~c
      }
   }

   function Fg(n) {
      if (($e & 6) !== 0) throw Error(r(327));
      hi();
      var s = Ko(n, 0);
      if ((s & 1) === 0) return Gt(n, ft()), null;
      var o = Bl(n, s);
      if (n.tag !== 0 && o === 2) {
         var c = fu(n);
         c !== 0 && (s = c, o = Id(n, c))
      }
      if (o === 1) throw o = Pa, ks(n, 0), zr(n, s), Gt(n, ft()), o;
      if (o === 6) throw Error(r(345));
      return n.finishedWork = n.current.alternate, n.finishedLanes = s, Ss(n, Kt, cr), Gt(n, ft()), null
   }

   function Rd(n, s) {
      var o = $e;
      $e |= 1;
      try {
         return n(s)
      } finally {
         $e = o, $e === 0 && (fi = ft() + 500, pl && Ir())
      }
   }

   function bs(n) {
      Fr !== null && Fr.tag === 0 && ($e & 6) === 0 && hi();
      var s = $e;
      $e |= 1;
      var o = pn.transition,
         c = qe;
      try {
         if (pn.transition = null, qe = 1, n) return n()
      } finally {
         qe = c, pn.transition = o, $e = s, ($e & 6) === 0 && Ir()
      }
   }

   function Od() {
      an = di.current, Xe(di)
   }

   function ks(n, s) {
      n.finishedWork = null, n.finishedLanes = 0;
      var o = n.timeoutHandle;
      if (o !== -1 && (n.timeoutHandle = -1, qk(o)), vt !== null)
         for (o = vt.return; o !== null;) {
            var c = o;
            switch (Wu(c), c.tag) {
               case 1:
                  c = c.type.childContextTypes, c != null && fl();
                  break;
               case 3:
                  li(), Xe(Ht), Xe(At), sd();
                  break;
               case 5:
                  nd(c);
                  break;
               case 4:
                  li();
                  break;
               case 13:
                  Xe(nt);
                  break;
               case 19:
                  Xe(nt);
                  break;
               case 10:
                  Yu(c.type._context);
                  break;
               case 22:
               case 23:
                  Od()
            }
            o = o.return
         }
      if (Tt = n, vt = n = Br(n.current, null), Et = an = s, bt = 0, Pa = null, _d = Rl = ws = 0, Kt = _a = null, ys !== null) {
         for (s = 0; s < ys.length; s++)
            if (o = ys[s], c = o.interleaved, c !== null) {
               o.interleaved = null;
               var h = c.next,
                  g = o.pending;
               if (g !== null) {
                  var x = g.next;
                  g.next = h, c.next = x
               }
               o.pending = c
            } ys = null
      }
      return n
   }

   function Vg(n, s) {
      do {
         var o = vt;
         try {
            if (Gu(), Tl.current = Pl, Cl) {
               for (var c = rt.memoizedState; c !== null;) {
                  var h = c.queue;
                  h !== null && (h.pending = null), c = c.next
               }
               Cl = !1
            }
            if (xs = 0, St = wt = rt = null, ka = !1, Sa = 0, Pd.current = null, o === null || o.return === null) {
               bt = 1, Pa = s, vt = null;
               break
            }
            e: {
               var g = n,
                  x = o.return,
                  k = o,
                  j = s;
               if (s = Et, k.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
                  var O = j,
                     H = k,
                     q = H.tag;
                  if ((H.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
                     var W = H.alternate;
                     W ? (H.updateQueue = W.updateQueue, H.memoizedState = W.memoizedState, H.lanes = W.lanes) : (H.updateQueue = null, H.memoizedState = null)
                  }
                  var oe = ug(x);
                  if (oe !== null) {
                     oe.flags &= -257, dg(oe, x, k, g, s), oe.mode & 1 && cg(g, O, s), s = oe, j = O;
                     var ue = s.updateQueue;
                     if (ue === null) {
                        var de = new Set;
                        de.add(j), s.updateQueue = de
                     } else ue.add(j);
                     break e
                  } else {
                     if ((s & 1) === 0) {
                        cg(g, O, s), Ld();
                        break e
                     }
                     j = Error(r(426))
                  }
               } else if (tt && k.mode & 1) {
                  var ht = ug(x);
                  if (ht !== null) {
                     (ht.flags & 65536) === 0 && (ht.flags |= 256), dg(ht, x, k, g, s), qu(ci(j, k));
                     break e
                  }
               }
               g = j = ci(j, k),
               bt !== 4 && (bt = 2),
               _a === null ? _a = [g] : _a.push(g),
               g = x;do {
                  switch (g.tag) {
                     case 3:
                        g.flags |= 65536, s &= -s, g.lanes |= s;
                        var I = og(g, j, s);
                        Mm(g, I);
                        break e;
                     case 1:
                        k = j;
                        var N = g.type,
                           M = g.stateNode;
                        if ((g.flags & 128) === 0 && (typeof N.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (Lr === null || !Lr.has(M)))) {
                           g.flags |= 65536, s &= -s, g.lanes |= s;
                           var G = lg(g, k, s);
                           Mm(g, G);
                           break e
                        }
                  }
                  g = g.return
               } while (g !== null)
            }
            Ug(o)
         } catch (he) {
            s = he, vt === o && o !== null && (vt = o = o.return);
            continue
         }
         break
      } while (!0)
   }

   function zg() {
      var n = Ml.current;
      return Ml.current = Pl, n === null ? Pl : n
   }

   function Ld() {
      (bt === 0 || bt === 3 || bt === 2) && (bt = 4), Tt === null || (ws & 268435455) === 0 && (Rl & 268435455) === 0 || zr(Tt, Et)
   }

   function Bl(n, s) {
      var o = $e;
      $e |= 2;
      var c = zg();
      (Tt !== n || Et !== s) && (cr = null, ks(n, s));
      do try {
         x2();
         break
      } catch (h) {
         Vg(n, h)
      }
      while (!0);
      if (Gu(), $e = o, Ml.current = c, vt !== null) throw Error(r(261));
      return Tt = null, Et = 0, bt
   }

   function x2() {
      for (; vt !== null;) Bg(vt)
   }

   function w2() {
      for (; vt !== null && !W1();) Bg(vt)
   }

   function Bg(n) {
      var s = Wg(n.alternate, n, an);
      n.memoizedProps = n.pendingProps, s === null ? Ug(n) : vt = s, Pd.current = null
   }

   function Ug(n) {
      var s = n;
      do {
         var o = s.alternate;
         if (n = s.return, (s.flags & 32768) === 0) {
            if (o = f2(o, s, an), o !== null) {
               vt = o;
               return
            }
         } else {
            if (o = h2(o, s), o !== null) {
               o.flags &= 32767, vt = o;
               return
            }
            if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
            else {
               bt = 6, vt = null;
               return
            }
         }
         if (s = s.sibling, s !== null) {
            vt = s;
            return
         }
         vt = s = n
      } while (s !== null);
      bt === 0 && (bt = 5)
   }

   function Ss(n, s, o) {
      var c = qe,
         h = pn.transition;
      try {
         pn.transition = null, qe = 1, b2(n, s, o, c)
      } finally {
         pn.transition = h, qe = c
      }
      return null
   }

   function b2(n, s, o, c) {
      do hi(); while (Fr !== null);
      if (($e & 6) !== 0) throw Error(r(327));
      o = n.finishedWork;
      var h = n.finishedLanes;
      if (o === null) return null;
      if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(r(177));
      n.callbackNode = null, n.callbackPriority = 0;
      var g = o.lanes | o.childLanes;
      if (tk(n, g), n === Tt && (vt = Tt = null, Et = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Ll || (Ll = !0, Hg(Wo, function () {
            return hi(), null
         })), g = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || g) {
         g = pn.transition, pn.transition = null;
         var x = qe;
         qe = 1;
         var k = $e;
         $e |= 4, Pd.current = null, m2(n, o), Dg(o, n), Bk(Lu), Xo = !!Ou, Lu = Ou = null, n.current = o, g2(o), H1(), $e = k, qe = x, pn.transition = g
      } else n.current = o;
      if (Ll && (Ll = !1, Fr = n, Fl = h), g = n.pendingLanes, g === 0 && (Lr = null), K1(o.stateNode), Gt(n, ft()), s !== null)
         for (c = n.onRecoverableError, o = 0; o < s.length; o++) h = s[o], c(h.value, {
            componentStack: h.stack,
            digest: h.digest
         });
      if (Ol) throw Ol = !1, n = Ad, Ad = null, n;
      return (Fl & 1) !== 0 && n.tag !== 0 && hi(), g = n.pendingLanes, (g & 1) !== 0 ? n === Dd ? Na++ : (Na = 0, Dd = n) : Na = 0, Ir(), null
   }

   function hi() {
      if (Fr !== null) {
         var n = Np(Fl),
            s = pn.transition,
            o = qe;
         try {
            if (pn.transition = null, qe = 16 > n ? 16 : n, Fr === null) var c = !1;
            else {
               if (n = Fr, Fr = null, Fl = 0, ($e & 6) !== 0) throw Error(r(331));
               var h = $e;
               for ($e |= 4, ce = n.current; ce !== null;) {
                  var g = ce,
                     x = g.child;
                  if ((ce.flags & 16) !== 0) {
                     var k = g.deletions;
                     if (k !== null) {
                        for (var j = 0; j < k.length; j++) {
                           var O = k[j];
                           for (ce = O; ce !== null;) {
                              var H = ce;
                              switch (H.tag) {
                                 case 0:
                                 case 11:
                                 case 15:
                                    Ea(8, H, g)
                              }
                              var q = H.child;
                              if (q !== null) q.return = H, ce = q;
                              else
                                 for (; ce !== null;) {
                                    H = ce;
                                    var W = H.sibling,
                                       oe = H.return;
                                    if (Eg(H), H === O) {
                                       ce = null;
                                       break
                                    }
                                    if (W !== null) {
                                       W.return = oe, ce = W;
                                       break
                                    }
                                    ce = oe
                                 }
                           }
                        }
                        var ue = g.alternate;
                        if (ue !== null) {
                           var de = ue.child;
                           if (de !== null) {
                              ue.child = null;
                              do {
                                 var ht = de.sibling;
                                 de.sibling = null, de = ht
                              } while (de !== null)
                           }
                        }
                        ce = g
                     }
                  }
                  if ((g.subtreeFlags & 2064) !== 0 && x !== null) x.return = g, ce = x;
                  else e: for (; ce !== null;) {
                     if (g = ce, (g.flags & 2048) !== 0) switch (g.tag) {
                        case 0:
                        case 11:
                        case 15:
                           Ea(9, g, g.return)
                     }
                     var I = g.sibling;
                     if (I !== null) {
                        I.return = g.return, ce = I;
                        break e
                     }
                     ce = g.return
                  }
               }
               var N = n.current;
               for (ce = N; ce !== null;) {
                  x = ce;
                  var M = x.child;
                  if ((x.subtreeFlags & 2064) !== 0 && M !== null) M.return = x, ce = M;
                  else e: for (x = N; ce !== null;) {
                     if (k = ce, (k.flags & 2048) !== 0) try {
                        switch (k.tag) {
                           case 0:
                           case 11:
                           case 15:
                              Il(9, k)
                        }
                     } catch (he) {
                        ot(k, k.return, he)
                     }
                     if (k === x) {
                        ce = null;
                        break e
                     }
                     var G = k.sibling;
                     if (G !== null) {
                        G.return = k.return, ce = G;
                        break e
                     }
                     ce = k.return
                  }
               }
               if ($e = h, Ir(), Fn && typeof Fn.onPostCommitFiberRoot == "function") try {
                  Fn.onPostCommitFiberRoot(Ho, n)
               } catch {}
               c = !0
            }
            return c
         } finally {
            qe = o, pn.transition = s
         }
      }
      return !1
   }

   function $g(n, s, o) {
      s = ci(o, s), s = og(n, s, 1), n = Rr(n, s, 1), s = Bt(), n !== null && (ea(n, 1, s), Gt(n, s))
   }

   function ot(n, s, o) {
      if (n.tag === 3) $g(n, n, o);
      else
         for (; s !== null;) {
            if (s.tag === 3) {
               $g(s, n, o);
               break
            } else if (s.tag === 1) {
               var c = s.stateNode;
               if (typeof s.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Lr === null || !Lr.has(c))) {
                  n = ci(o, n), n = lg(s, n, 1), s = Rr(s, n, 1), n = Bt(), s !== null && (ea(s, 1, n), Gt(s, n));
                  break
               }
            }
            s = s.return
         }
   }

   function k2(n, s, o) {
      var c = n.pingCache;
      c !== null && c.delete(s), s = Bt(), n.pingedLanes |= n.suspendedLanes & o, Tt === n && (Et & o) === o && (bt === 4 || bt === 3 && (Et & 130023424) === Et && 500 > ft() - Nd ? ks(n, 0) : _d |= o), Gt(n, s)
   }

   function Zg(n, s) {
      s === 0 && ((n.mode & 1) === 0 ? s = 1 : (s = qo, qo <<= 1, (qo & 130023424) === 0 && (qo = 4194304)));
      var o = Bt();
      n = ar(n, s), n !== null && (ea(n, s, o), Gt(n, o))
   }

   function S2(n) {
      var s = n.memoizedState,
         o = 0;
      s !== null && (o = s.retryLane), Zg(n, o)
   }

   function T2(n, s) {
      var o = 0;
      switch (n.tag) {
         case 13:
            var c = n.stateNode,
               h = n.memoizedState;
            h !== null && (o = h.retryLane);
            break;
         case 19:
            c = n.stateNode;
            break;
         default:
            throw Error(r(314))
      }
      c !== null && c.delete(s), Zg(n, o)
   }
   var Wg;
   Wg = function (n, s, o) {
      if (n !== null)
         if (n.memoizedProps !== s.pendingProps || Ht.current) qt = !0;
         else {
            if ((n.lanes & o) === 0 && (s.flags & 128) === 0) return qt = !1, d2(n, s, o);
            qt = (n.flags & 131072) !== 0
         }
      else qt = !1, tt && (s.flags & 1048576) !== 0 && Tm(s, gl, s.index);
      switch (s.lanes = 0, s.tag) {
         case 2:
            var c = s.type;
            Al(n, s), n = s.pendingProps;
            var h = ti(s, At.current);
            oi(s, o), h = od(null, s, c, n, h, o);
            var g = ld();
            return s.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, Qt(c) ? (g = !0, hl(s)) : g = !1, s.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, ed(s), h.updater = _l, s.stateNode = h, h._reactInternals = s, pd(s, c, n, o), s = vd(null, s, c, !0, g, o)) : (s.tag = 0, tt && g && Zu(s), zt(null, s, h, o), s = s.child), s;
         case 16:
            c = s.elementType;
            e: {
               switch (Al(n, s), n = s.pendingProps, h = c._init, c = h(c._payload), s.type = c, h = s.tag = j2(c), n = Tn(c, n), h) {
                  case 0:
                     s = yd(null, s, c, n, o);
                     break e;
                  case 1:
                     s = yg(null, s, c, n, o);
                     break e;
                  case 11:
                     s = fg(null, s, c, n, o);
                     break e;
                  case 14:
                     s = hg(null, s, c, Tn(c.type, n), o);
                     break e
               }
               throw Error(r(306, c, ""))
            }
            return s;
         case 0:
            return c = s.type, h = s.pendingProps, h = s.elementType === c ? h : Tn(c, h), yd(n, s, c, h, o);
         case 1:
            return c = s.type, h = s.pendingProps, h = s.elementType === c ? h : Tn(c, h), yg(n, s, c, h, o);
         case 3:
            e: {
               if (vg(s), n === null) throw Error(r(387));c = s.pendingProps,
               g = s.memoizedState,
               h = g.element,
               Im(n, s),
               kl(s, c, null, o);
               var x = s.memoizedState;
               if (c = x.element, g.isDehydrated)
                  if (g = {
                        element: c,
                        isDehydrated: !1,
                        cache: x.cache,
                        pendingSuspenseBoundaries: x.pendingSuspenseBoundaries,
                        transitions: x.transitions
                     }, s.updateQueue.baseState = g, s.memoizedState = g, s.flags & 256) {
                     h = ci(Error(r(423)), s), s = xg(n, s, c, o, h);
                     break e
                  } else if (c !== h) {
                  h = ci(Error(r(424)), s), s = xg(n, s, c, o, h);
                  break e
               } else
                  for (sn = Nr(s.stateNode.containerInfo.firstChild), rn = s, tt = !0, Sn = null, o = Am(s, null, c, o), s.child = o; o;) o.flags = o.flags & -3 | 4096, o = o.sibling;
               else {
                  if (si(), c === h) {
                     s = lr(n, s, o);
                     break e
                  }
                  zt(n, s, c, o)
               }
               s = s.child
            }
            return s;
         case 5:
            return Om(s), n === null && Qu(s), c = s.type, h = s.pendingProps, g = n !== null ? n.memoizedProps : null, x = h.children, Fu(c, h) ? x = null : g !== null && Fu(c, g) && (s.flags |= 32), gg(n, s), zt(n, s, x, o), s.child;
         case 6:
            return n === null && Qu(s), null;
         case 13:
            return wg(n, s, o);
         case 4:
            return td(s, s.stateNode.containerInfo), c = s.pendingProps, n === null ? s.child = ii(s, null, c, o) : zt(n, s, c, o), s.child;
         case 11:
            return c = s.type, h = s.pendingProps, h = s.elementType === c ? h : Tn(c, h), fg(n, s, c, h, o);
         case 7:
            return zt(n, s, s.pendingProps, o), s.child;
         case 8:
            return zt(n, s, s.pendingProps.children, o), s.child;
         case 12:
            return zt(n, s, s.pendingProps.children, o), s.child;
         case 10:
            e: {
               if (c = s.type._context, h = s.pendingProps, g = s.memoizedProps, x = h.value, Ge(xl, c._currentValue), c._currentValue = x, g !== null)
                  if (kn(g.value, x)) {
                     if (g.children === h.children && !Ht.current) {
                        s = lr(n, s, o);
                        break e
                     }
                  } else
                     for (g = s.child, g !== null && (g.return = s); g !== null;) {
                        var k = g.dependencies;
                        if (k !== null) {
                           x = g.child;
                           for (var j = k.firstContext; j !== null;) {
                              if (j.context === c) {
                                 if (g.tag === 1) {
                                    j = or(-1, o & -o), j.tag = 2;
                                    var O = g.updateQueue;
                                    if (O !== null) {
                                       O = O.shared;
                                       var H = O.pending;
                                       H === null ? j.next = j : (j.next = H.next, H.next = j), O.pending = j
                                    }
                                 }
                                 g.lanes |= o, j = g.alternate, j !== null && (j.lanes |= o), Xu(g.return, o, s), k.lanes |= o;
                                 break
                              }
                              j = j.next
                           }
                        } else if (g.tag === 10) x = g.type === s.type ? null : g.child;
                        else if (g.tag === 18) {
                           if (x = g.return, x === null) throw Error(r(341));
                           x.lanes |= o, k = x.alternate, k !== null && (k.lanes |= o), Xu(x, o, s), x = g.sibling
                        } else x = g.child;
                        if (x !== null) x.return = g;
                        else
                           for (x = g; x !== null;) {
                              if (x === s) {
                                 x = null;
                                 break
                              }
                              if (g = x.sibling, g !== null) {
                                 g.return = x.return, x = g;
                                 break
                              }
                              x = x.return
                           }
                        g = x
                     }
               zt(n, s, h.children, o),
               s = s.child
            }
            return s;
         case 9:
            return h = s.type, c = s.pendingProps.children, oi(s, o), h = fn(h), c = c(h), s.flags |= 1, zt(n, s, c, o), s.child;
         case 14:
            return c = s.type, h = Tn(c, s.pendingProps), h = Tn(c.type, h), hg(n, s, c, h, o);
         case 15:
            return pg(n, s, s.type, s.pendingProps, o);
         case 17:
            return c = s.type, h = s.pendingProps, h = s.elementType === c ? h : Tn(c, h), Al(n, s), s.tag = 1, Qt(c) ? (n = !0, hl(s)) : n = !1, oi(s, o), ig(s, c, h), pd(s, c, h, o), vd(null, s, c, !0, n, o);
         case 19:
            return kg(n, s, o);
         case 22:
            return mg(n, s, o)
      }
      throw Error(r(156, s.tag))
   };

   function Hg(n, s) {
      return Cp(n, s)
   }

   function C2(n, s, o, c) {
      this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
   }

   function mn(n, s, o, c) {
      return new C2(n, s, o, c)
   }

   function Fd(n) {
      return n = n.prototype, !(!n || !n.isReactComponent)
   }

   function j2(n) {
      if (typeof n == "function") return Fd(n) ? 1 : 0;
      if (n != null) {
         if (n = n.$$typeof, n === X) return 11;
         if (n === _e) return 14
      }
      return 2
   }

   function Br(n, s) {
      var o = n.alternate;
      return o === null ? (o = mn(n.tag, s, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = s, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, s = n.dependencies, o.dependencies = s === null ? null : {
         lanes: s.lanes,
         firstContext: s.firstContext
      }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o
   }

   function Ul(n, s, o, c, h, g) {
      var x = 2;
      if (c = n, typeof n == "function") Fd(n) && (x = 1);
      else if (typeof n == "string") x = 5;
      else e: switch (n) {
         case Y:
            return Ts(o.children, h, g, s);
         case B:
            x = 8, h |= 8;
            break;
         case me:
            return n = mn(12, o, s, h | 2), n.elementType = me, n.lanes = g, n;
         case ge:
            return n = mn(13, o, s, h), n.elementType = ge, n.lanes = g, n;
         case se:
            return n = mn(19, o, s, h), n.elementType = se, n.lanes = g, n;
         case fe:
            return $l(o, h, g, s);
         default:
            if (typeof n == "object" && n !== null) switch (n.$$typeof) {
               case ye:
                  x = 10;
                  break e;
               case Le:
                  x = 9;
                  break e;
               case X:
                  x = 11;
                  break e;
               case _e:
                  x = 14;
                  break e;
               case Se:
                  x = 16, c = null;
                  break e
            }
            throw Error(r(130, n == null ? n : typeof n, ""))
      }
      return s = mn(x, o, s, h), s.elementType = n, s.type = c, s.lanes = g, s
   }

   function Ts(n, s, o, c) {
      return n = mn(7, n, c, s), n.lanes = o, n
   }

   function $l(n, s, o, c) {
      return n = mn(22, n, c, s), n.elementType = fe, n.lanes = o, n.stateNode = {
         isHidden: !1
      }, n
   }

   function Vd(n, s, o) {
      return n = mn(6, n, null, s), n.lanes = o, n
   }

   function zd(n, s, o) {
      return s = mn(4, n.children !== null ? n.children : [], n.key, s), s.lanes = o, s.stateNode = {
         containerInfo: n.containerInfo,
         pendingChildren: null,
         implementation: n.implementation
      }, s
   }

   function E2(n, s, o, c, h) {
      this.tag = s, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = hu(0), this.expirationTimes = hu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hu(0), this.identifierPrefix = c, this.onRecoverableError = h, this.mutableSourceEagerHydrationData = null
   }

   function Bd(n, s, o, c, h, g, x, k, j) {
      return n = new E2(n, s, o, k, j), s === 1 ? (s = 1, g === !0 && (s |= 8)) : s = 0, g = mn(3, null, null, s), n.current = g, g.stateNode = n, g.memoizedState = {
         element: c,
         isDehydrated: o,
         cache: null,
         transitions: null,
         pendingSuspenseBoundaries: null
      }, ed(g), n
   }

   function P2(n, s, o) {
      var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
         $$typeof: U,
         key: c == null ? null : "" + c,
         children: n,
         containerInfo: s,
         implementation: o
      }
   }

   function Qg(n) {
      if (!n) return Dr;
      n = n._reactInternals;
      e: {
         if (fs(n) !== n || n.tag !== 1) throw Error(r(170));
         var s = n;do {
            switch (s.tag) {
               case 3:
                  s = s.stateNode.context;
                  break e;
               case 1:
                  if (Qt(s.type)) {
                     s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                     break e
                  }
            }
            s = s.return
         } while (s !== null);
         throw Error(r(171))
      }
      if (n.tag === 1) {
         var o = n.type;
         if (Qt(o)) return bm(n, o, s)
      }
      return s
   }

   function qg(n, s, o, c, h, g, x, k, j) {
      return n = Bd(o, c, !0, n, h, g, x, k, j), n.context = Qg(null), o = n.current, c = Bt(), h = Vr(o), g = or(c, h), g.callback = s ?? null, Rr(o, g, h), n.current.lanes = h, ea(n, h, c), Gt(n, c), n
   }

   function Zl(n, s, o, c) {
      var h = s.current,
         g = Bt(),
         x = Vr(h);
      return o = Qg(o), s.context === null ? s.context = o : s.pendingContext = o, s = or(g, x), s.payload = {
         element: n
      }, c = c === void 0 ? null : c, c !== null && (s.callback = c), n = Rr(h, s, x), n !== null && (En(n, h, x, g), bl(n, h, x)), x
   }

   function Wl(n) {
      if (n = n.current, !n.child) return null;
      switch (n.child.tag) {
         case 5:
            return n.child.stateNode;
         default:
            return n.child.stateNode
      }
   }

   function Kg(n, s) {
      if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
         var o = n.retryLane;
         n.retryLane = o !== 0 && o < s ? o : s
      }
   }

   function Ud(n, s) {
      Kg(n, s), (n = n.alternate) && Kg(n, s)
   }

   function _2() {
      return null
   }
   var Gg = typeof reportError == "function" ? reportError : function (n) {
      console.error(n)
   };

   function $d(n) {
      this._internalRoot = n
   }
   Hl.prototype.render = $d.prototype.render = function (n) {
      var s = this._internalRoot;
      if (s === null) throw Error(r(409));
      Zl(n, s, null, null)
   }, Hl.prototype.unmount = $d.prototype.unmount = function () {
      var n = this._internalRoot;
      if (n !== null) {
         this._internalRoot = null;
         var s = n.containerInfo;
         bs(function () {
            Zl(null, n, null, null)
         }), s[nr] = null
      }
   };

   function Hl(n) {
      this._internalRoot = n
   }
   Hl.prototype.unstable_scheduleHydration = function (n) {
      if (n) {
         var s = Ip();
         n = {
            blockedOn: null,
            target: n,
            priority: s
         };
         for (var o = 0; o < Er.length && s !== 0 && s < Er[o].priority; o++);
         Er.splice(o, 0, n), o === 0 && Op(n)
      }
   };

   function Zd(n) {
      return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11)
   }

   function Ql(n) {
      return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
   }

   function Yg() {}

   function N2(n, s, o, c, h) {
      if (h) {
         if (typeof c == "function") {
            var g = c;
            c = function () {
               var O = Wl(x);
               g.call(O)
            }
         }
         var x = qg(s, c, n, 0, null, !1, !1, "", Yg);
         return n._reactRootContainer = x, n[nr] = x.current, pa(n.nodeType === 8 ? n.parentNode : n), bs(), x
      }
      for (; h = n.lastChild;) n.removeChild(h);
      if (typeof c == "function") {
         var k = c;
         c = function () {
            var O = Wl(j);
            k.call(O)
         }
      }
      var j = Bd(n, 0, !1, null, null, !1, !1, "", Yg);
      return n._reactRootContainer = j, n[nr] = j.current, pa(n.nodeType === 8 ? n.parentNode : n), bs(function () {
         Zl(s, j, o, c)
      }), j
   }

   function ql(n, s, o, c, h) {
      var g = o._reactRootContainer;
      if (g) {
         var x = g;
         if (typeof h == "function") {
            var k = h;
            h = function () {
               var j = Wl(x);
               k.call(j)
            }
         }
         Zl(s, x, n, h)
      } else x = N2(o, s, n, h, c);
      return Wl(x)
   }
   Ap = function (n) {
      switch (n.tag) {
         case 3:
            var s = n.stateNode;
            if (s.current.memoizedState.isDehydrated) {
               var o = Ji(s.pendingLanes);
               o !== 0 && (pu(s, o | 1), Gt(s, ft()), ($e & 6) === 0 && (fi = ft() + 500, Ir()))
            }
            break;
         case 13:
            bs(function () {
               var c = ar(n, 1);
               if (c !== null) {
                  var h = Bt();
                  En(c, n, 1, h)
               }
            }), Ud(n, 1)
      }
   }, mu = function (n) {
      if (n.tag === 13) {
         var s = ar(n, 134217728);
         if (s !== null) {
            var o = Bt();
            En(s, n, 134217728, o)
         }
         Ud(n, 134217728)
      }
   }, Dp = function (n) {
      if (n.tag === 13) {
         var s = Vr(n),
            o = ar(n, s);
         if (o !== null) {
            var c = Bt();
            En(o, n, s, c)
         }
         Ud(n, s)
      }
   }, Ip = function () {
      return qe
   }, Mp = function (n, s) {
      var o = qe;
      try {
         return qe = n, s()
      } finally {
         qe = o
      }
   }, ou = function (n, s, o) {
      switch (s) {
         case "input":
            if (Vo(n, o), s = o.name, o.type === "radio" && s != null) {
               for (o = n; o.parentNode;) o = o.parentNode;
               for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'), s = 0; s < o.length; s++) {
                  var c = o[s];
                  if (c !== n && c.form === n.form) {
                     var h = dl(c);
                     if (!h) throw Error(r(90));
                     Fo(c), Vo(c, h)
                  }
               }
            }
            break;
         case "textarea":
            ve(n, o);
            break;
         case "select":
            s = o.value, s != null && re(n, !!o.multiple, s, !1)
      }
   }, vp = Rd, xp = bs;
   var A2 = {
         usingClientEntryPoint: !1,
         Events: [ya, Js, dl, gp, yp, Rd]
      },
      Aa = {
         findFiberByHostInstance: hs,
         bundleType: 0,
         version: "18.3.1",
         rendererPackageName: "react-dom"
      },
      D2 = {
         bundleType: Aa.bundleType,
         version: Aa.version,
         rendererPackageName: Aa.rendererPackageName,
         rendererConfig: Aa.rendererConfig,
         overrideHookState: null,
         overrideHookStateDeletePath: null,
         overrideHookStateRenamePath: null,
         overrideProps: null,
         overridePropsDeletePath: null,
         overridePropsRenamePath: null,
         setErrorHandler: null,
         setSuspenseHandler: null,
         scheduleUpdate: null,
         currentDispatcherRef: $.ReactCurrentDispatcher,
         findHostInstanceByFiber: function (n) {
            return n = Sp(n), n === null ? null : n.stateNode
         },
         findFiberByHostInstance: Aa.findFiberByHostInstance || _2,
         findHostInstancesForRefresh: null,
         scheduleRefresh: null,
         scheduleRoot: null,
         setRefreshHandler: null,
         getCurrentFiber: null,
         reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
      };
   if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Kl.isDisabled && Kl.supportsFiber) try {
         Ho = Kl.inject(D2), Fn = Kl
      } catch {}
   }
   return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A2, Yt.createPortal = function (n, s) {
      var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Zd(s)) throw Error(r(200));
      return P2(n, s, null, o)
   }, Yt.createRoot = function (n, s) {
      if (!Zd(n)) throw Error(r(299));
      var o = !1,
         c = "",
         h = Gg;
      return s != null && (s.unstable_strictMode === !0 && (o = !0), s.identifierPrefix !== void 0 && (c = s.identifierPrefix), s.onRecoverableError !== void 0 && (h = s.onRecoverableError)), s = Bd(n, 1, !1, null, null, o, !1, c, h), n[nr] = s.current, pa(n.nodeType === 8 ? n.parentNode : n), new $d(s)
   }, Yt.findDOMNode = function (n) {
      if (n == null) return null;
      if (n.nodeType === 1) return n;
      var s = n._reactInternals;
      if (s === void 0) throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","), Error(r(268, n)));
      return n = Sp(s), n = n === null ? null : n.stateNode, n
   }, Yt.flushSync = function (n) {
      return bs(n)
   }, Yt.hydrate = function (n, s, o) {
      if (!Ql(s)) throw Error(r(200));
      return ql(null, n, s, !0, o)
   }, Yt.hydrateRoot = function (n, s, o) {
      if (!Zd(n)) throw Error(r(405));
      var c = o != null && o.hydratedSources || null,
         h = !1,
         g = "",
         x = Gg;
      if (o != null && (o.unstable_strictMode === !0 && (h = !0), o.identifierPrefix !== void 0 && (g = o.identifierPrefix), o.onRecoverableError !== void 0 && (x = o.onRecoverableError)), s = qg(s, null, n, 1, o ?? null, h, !1, g, x), n[nr] = s.current, pa(n), c)
         for (n = 0; n < c.length; n++) o = c[n], h = o._getVersion, h = h(o._source), s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [o, h] : s.mutableSourceEagerHydrationData.push(o, h);
      return new Hl(s)
   }, Yt.render = function (n, s, o) {
      if (!Ql(s)) throw Error(r(200));
      return ql(null, n, s, !1, o)
   }, Yt.unmountComponentAtNode = function (n) {
      if (!Ql(n)) throw Error(r(40));
      return n._reactRootContainer ? (bs(function () {
         ql(null, null, n, !1, function () {
            n._reactRootContainer = null, n[nr] = null
         })
      }), !0) : !1
   }, Yt.unstable_batchedUpdates = Rd, Yt.unstable_renderSubtreeIntoContainer = function (n, s, o, c) {
      if (!Ql(o)) throw Error(r(200));
      if (n == null || n._reactInternals === void 0) throw Error(r(38));
      return ql(n, s, o, !1, c)
   }, Yt.version = "18.3.1-next-f1338f8080-20240426", Yt
}
var ay;

function M0() {
   if (ay) return qd.exports;
   ay = 1;

   function t() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
         __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
      } catch (e) {
         console.error(e)
      }
   }
   return t(), qd.exports = U2(), qd.exports
}
var oy;

function $2() {
   if (oy) return Yl;
   oy = 1;
   var t = M0();
   return Yl.createRoot = t.createRoot, Yl.hydrateRoot = t.hydrateRoot, Yl
}
var Z2 = $2();

function W2(t, e) {
   if (t instanceof RegExp) return {
      keys: !1,
      pattern: t
   };
   var r, i, a, l, u = [],
      d = "",
      p = t.split("/");
   for (p[0] || p.shift(); a = p.shift();) r = a[0], r === "*" ? (u.push(r), d += a[1] === "?" ? "(?:/(.*))?" : "/(.*)") : r === ":" ? (i = a.indexOf("?", 1), l = a.indexOf(".", 1), u.push(a.substring(1, ~i ? i : ~l ? l : a.length)), d += ~i && !~l ? "(?:/([^/]+?))?" : "/([^/]+?)", ~l && (d += (~i ? "?" : "") + "\\" + a.substring(l))) : d += "/" + a;
   return {
      keys: u,
      pattern: new RegExp("^" + d + (e ? "(?=$|/)" : "/?$"), "i")
   }
}
var b = Lc();
const be = _o(b),
   R0 = O2({
      __proto__: null,
      default: be
   }, [b]);
var Yd = {
      exports: {}
   },
   Xd = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ly;

function H2() {
   if (ly) return Xd;
   ly = 1;
   var t = Lc();

   function e(v, w) {
      return v === w && (v !== 0 || 1 / v === 1 / w) || v !== v && w !== w
   }
   var r = typeof Object.is == "function" ? Object.is : e,
      i = t.useState,
      a = t.useEffect,
      l = t.useLayoutEffect,
      u = t.useDebugValue;

   function d(v, w) {
      var T = w(),
         P = i({
            inst: {
               value: T,
               getSnapshot: w
            }
         }),
         S = P[0].inst,
         C = P[1];
      return l(function () {
         S.value = T, S.getSnapshot = w, p(S) && C({
            inst: S
         })
      }, [v, T, w]), a(function () {
         return p(S) && C({
            inst: S
         }), v(function () {
            p(S) && C({
               inst: S
            })
         })
      }, [v]), u(T), T
   }

   function p(v) {
      var w = v.getSnapshot;
      v = v.value;
      try {
         var T = w();
         return !r(v, T)
      } catch {
         return !0
      }
   }

   function m(v, w) {
      return w()
   }
   var y = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : d;
   return Xd.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : y, Xd
}
var cy;

function Q2() {
   return cy || (cy = 1, Yd.exports = H2()), Yd.exports
}
var q2 = Q2();
const K2 = R0.useInsertionEffect,
   G2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
   Y2 = G2 ? b.useLayoutEffect : b.useEffect,
   X2 = K2 || Y2,
   O0 = t => {
      const e = b.useRef([t, (...r) => e[0](...r)]).current;
      return X2(() => {
         e[0] = t
      }), e[1]
   },
   J2 = "popstate",
   fh = "pushState",
   hh = "replaceState",
   eS = "hashchange",
   uy = [J2, fh, hh, eS],
   tS = t => {
      for (const e of uy) addEventListener(e, t);
      return () => {
         for (const e of uy) removeEventListener(e, t)
      }
   },
   L0 = (t, e) => q2.useSyncExternalStore(tS, t, e),
   nS = () => location.search,
   rS = ({
      ssrSearch: t = ""
   } = {}) => L0(nS, () => t),
   dy = () => location.pathname,
   sS = ({
      ssrPath: t
   } = {}) => L0(dy, t ? () => t : dy),
   iS = (t, {
      replace: e = !1,
      state: r = null
   } = {}) => history[e ? hh : fh](r, "", t),
   aS = (t = {}) => [sS(t), iS],
   fy = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[fy] > "u") {
   for (const t of [fh, hh]) {
      const e = history[t];
      history[t] = function () {
         const r = e.apply(this, arguments),
            i = new Event(t);
         return i.arguments = arguments, dispatchEvent(i), r
      }
   }
   Object.defineProperty(window, fy, {
      value: !0
   })
}
const oS = (t, e) => e.toLowerCase().indexOf(t.toLowerCase()) ? "~" + e : e.slice(t.length) || "/",
   F0 = (t = "") => t === "/" ? "" : t,
   lS = (t, e) => t[0] === "~" ? t.slice(1) : F0(e) + t,
   cS = (t = "", e) => oS(Nf(F0(t)), Nf(e)),
   uS = t => t[0] === "?" ? t.slice(1) : t,
   Nf = t => {
      try {
         return decodeURI(t)
      } catch {
         return t
      }
   },
   dS = t => Nf(uS(t)),
   V0 = {
      hook: aS,
      searchHook: rS,
      parser: W2,
      base: "",
      ssrPath: void 0,
      ssrSearch: void 0,
      ssrContext: void 0,
      hrefs: t => t
   },
   z0 = b.createContext(V0),
   Zi = () => b.useContext(z0),
   B0 = {},
   U0 = b.createContext(B0),
   No = () => b.useContext(U0),
   Fc = t => {
      const [e, r] = t.hook(t);
      return [cS(t.base, e), O0((i, a) => r(lS(i, t.base), a))]
   },
   ls = () => Fc(Zi()),
   fS = () => {
      const t = Zi();
      return dS(t.searchHook(t))
   },
   $0 = (t, e, r, i) => {
      const {
         pattern: a,
         keys: l
      } = e instanceof RegExp ? {
         keys: !1,
         pattern: e
      } : t(e || "*", i), u = a.exec(r) || [], [d, ...p] = u;
      return d !== void 0 ? [!0, (() => {
         const m = l !== !1 ? Object.fromEntries(l.map((v, w) => [v, p[w]])) : u.groups;
         let y = {
            ...p
         };
         return m && Object.assign(y, m), y
      })(), ...i ? [d] : []] : [!1, null]
   },
   hS = ({
      children: t,
      ...e
   }) => {
      var y, v;
      const r = Zi(),
         i = e.hook ? V0 : r;
      let a = i;
      const [l, u] = ((y = e.ssrPath) == null ? void 0 : y.split("?")) ?? [];
      u && (e.ssrSearch = u, e.ssrPath = l), e.hrefs = e.hrefs ?? ((v = e.hook) == null ? void 0 : v.hrefs);
      let d = b.useRef({}),
         p = d.current,
         m = p;
      for (let w in i) {
         const T = w === "base" ? i[w] + (e[w] || "") : e[w] || i[w];
         p === m && T !== m[w] && (d.current = m = {
            ...m
         }), m[w] = T, T !== i[w] && (a = m)
      }
      return b.createElement(z0.Provider, {
         value: a,
         children: t
      })
   },
   hy = ({
      children: t,
      component: e
   }, r) => e ? b.createElement(e, {
      params: r
   }) : typeof t == "function" ? t(r) : t,
   pS = t => {
      let e = b.useRef(B0);
      const r = e.current;
      return e.current = Object.keys(t).length !== Object.keys(r).length || Object.entries(t).some(([i, a]) => a !== r[i]) ? t : r
   },
   Pn = ({
      path: t,
      nest: e,
      match: r,
      ...i
   }) => {
      const a = Zi(),
         [l] = Fc(a),
         [u, d, p] = r ?? $0(a.parser, t, l, e),
         m = pS({
            ...No(),
            ...d
         });
      if (!u) return null;
      const y = p ? b.createElement(hS, {
         base: p
      }, hy(i, m)) : hy(i, m);
      return b.createElement(U0.Provider, {
         value: m,
         children: y
      })
   };
b.forwardRef((t, e) => {
   const r = Zi(),
      [i, a] = Fc(r),
      {
         to: l = "",
         href: u = l,
         onClick: d,
         asChild: p,
         children: m,
         className: y,
         replace: v,
         state: w,
         ...T
      } = t,
      P = O0(C => {
         C.ctrlKey || C.metaKey || C.altKey || C.shiftKey || C.button !== 0 || (d == null || d(C), C.defaultPrevented || (C.preventDefault(), a(u, t)))
      }),
      S = r.hrefs(u[0] === "~" ? u.slice(1) : r.base + u, r);
   return p && b.isValidElement(m) ? b.cloneElement(m, {
      onClick: P,
      href: S
   }) : b.createElement("a", {
      ...T,
      onClick: P,
      href: S,
      className: y != null && y.call ? y(i === u) : y,
      children: m,
      ref: e
   })
});
const Z0 = t => Array.isArray(t) ? t.flatMap(e => Z0(e && e.type === b.Fragment ? e.props.children : e)) : [t],
   mS = ({
      children: t,
      location: e
   }) => {
      const r = Zi(),
         [i] = Fc(r);
      for (const a of Z0(t)) {
         let l = 0;
         if (b.isValidElement(a) && (l = $0(r.parser, a.props.path, e || i, a.props.nest))[0]) return b.cloneElement(a, {
            match: l
         })
      }
      return null
   },
   gS = 1,
   yS = 1e6;
let Jd = 0;

function vS() {
   return Jd = (Jd + 1) % Number.MAX_SAFE_INTEGER, Jd.toString()
}
const ef = new Map,
   py = t => {
      if (ef.has(t)) return;
      const e = setTimeout(() => {
         ef.delete(t), Xa({
            type: "REMOVE_TOAST",
            toastId: t
         })
      }, yS);
      ef.set(t, e)
   },
   xS = (t, e) => {
      switch (e.type) {
         case "ADD_TOAST":
            return {
               ...t, toasts: [e.toast, ...t.toasts].slice(0, gS)
            };
         case "UPDATE_TOAST":
            return {
               ...t, toasts: t.toasts.map(r => r.id === e.toast.id ? {
                  ...r,
                  ...e.toast
               } : r)
            };
         case "DISMISS_TOAST": {
            const {
               toastId: r
            } = e;
            return r ? py(r) : t.toasts.forEach(i => {
               py(i.id)
            }), {
               ...t,
               toasts: t.toasts.map(i => i.id === r || r === void 0 ? {
                  ...i,
                  open: !1
               } : i)
            }
         }
         case "REMOVE_TOAST":
            return e.toastId === void 0 ? {
               ...t,
               toasts: []
            } : {
               ...t,
               toasts: t.toasts.filter(r => r.id !== e.toastId)
            }
      }
   },
   ac = [];
let oc = {
   toasts: []
};

function Xa(t) {
   oc = xS(oc, t), ac.forEach(e => {
      e(oc)
   })
}

function wS({
   ...t
}) {
   const e = vS(),
      r = a => Xa({
         type: "UPDATE_TOAST",
         toast: {
            ...a,
            id: e
         }
      }),
      i = () => Xa({
         type: "DISMISS_TOAST",
         toastId: e
      });
   return Xa({
      type: "ADD_TOAST",
      toast: {
         ...t,
         id: e,
         open: !0,
         onOpenChange: a => {
            a || i()
         }
      }
   }), {
      id: e,
      dismiss: i,
      update: r
   }
}

function W0() {
   const [t, e] = b.useState(oc);
   return b.useEffect(() => (ac.push(e), () => {
      const r = ac.indexOf(e);
      r > -1 && ac.splice(r, 1)
   }), [t]), {
      ...t,
      toast: wS,
      dismiss: r => Xa({
         type: "DISMISS_TOAST",
         toastId: r
      })
   }
}
var ph = M0();
const bS = _o(ph);

function ut(t, e, {
   checkForDefaultPrevented: r = !0
} = {}) {
   return function (a) {
      if (t == null || t(a), r === !1 || !a.defaultPrevented) return e == null ? void 0 : e(a)
   }
}

function my(t, e) {
   if (typeof t == "function") return t(e);
   t != null && (t.current = e)
}

function H0(...t) {
   return e => {
      let r = !1;
      const i = t.map(a => {
         const l = my(a, e);
         return !r && typeof l == "function" && (r = !0), l
      });
      if (r) return () => {
         for (let a = 0; a < i.length; a++) {
            const l = i[a];
            typeof l == "function" ? l() : my(t[a], null)
         }
      }
   }
}

function ts(...t) {
   return b.useCallback(H0(...t), t)
}

function Vc(t, e = []) {
   let r = [];

   function i(l, u) {
      const d = b.createContext(u),
         p = r.length;
      r = [...r, u];
      const m = v => {
         var _;
         const {
            scope: w,
            children: T,
            ...P
         } = v, S = ((_ = w == null ? void 0 : w[t]) == null ? void 0 : _[p]) || d, C = b.useMemo(() => P, Object.values(P));
         return f.jsx(S.Provider, {
            value: C,
            children: T
         })
      };
      m.displayName = l + "Provider";

      function y(v, w) {
         var S;
         const T = ((S = w == null ? void 0 : w[t]) == null ? void 0 : S[p]) || d,
            P = b.useContext(T);
         if (P) return P;
         if (u !== void 0) return u;
         throw new Error(`\`${v}\` must be used within \`${l}\``)
      }
      return [m, y]
   }
   const a = () => {
      const l = r.map(u => b.createContext(u));
      return function (d) {
         const p = (d == null ? void 0 : d[t]) || l;
         return b.useMemo(() => ({
            [`__scope${t}`]: {
               ...d,
               [t]: p
            }
         }), [d, p])
      }
   };
   return a.scopeName = t, [i, kS(a, ...e)]
}

function kS(...t) {
   const e = t[0];
   if (t.length === 1) return e;
   const r = () => {
      const i = t.map(a => ({
         useScope: a(),
         scopeName: a.scopeName
      }));
      return function (l) {
         const u = i.reduce((d, {
            useScope: p,
            scopeName: m
         }) => {
            const v = p(l)[`__scope${m}`];
            return {
               ...d,
               ...v
            }
         }, {});
         return b.useMemo(() => ({
            [`__scope${e.scopeName}`]: u
         }), [u])
      }
   };
   return r.scopeName = e.scopeName, r
}
var Oi = b.forwardRef((t, e) => {
   const {
      children: r,
      ...i
   } = t, a = b.Children.toArray(r), l = a.find(TS);
   if (l) {
      const u = l.props.children,
         d = a.map(p => p === l ? b.Children.count(u) > 1 ? b.Children.only(null) : b.isValidElement(u) ? u.props.children : null : p);
      return f.jsx(Af, {
         ...i,
         ref: e,
         children: b.isValidElement(u) ? b.cloneElement(u, void 0, d) : null
      })
   }
   return f.jsx(Af, {
      ...i,
      ref: e,
      children: r
   })
});
Oi.displayName = "Slot";
var Af = b.forwardRef((t, e) => {
   const {
      children: r,
      ...i
   } = t;
   if (b.isValidElement(r)) {
      const a = jS(r),
         l = CS(i, r.props);
      return r.type !== b.Fragment && (l.ref = e ? H0(e, a) : a), b.cloneElement(r, l)
   }
   return b.Children.count(r) > 1 ? b.Children.only(null) : null
});
Af.displayName = "SlotClone";
var SS = ({
   children: t
}) => f.jsx(f.Fragment, {
   children: t
});

function TS(t) {
   return b.isValidElement(t) && t.type === SS
}

function CS(t, e) {
   const r = {
      ...e
   };
   for (const i in e) {
      const a = t[i],
         l = e[i];
      /^on[A-Z]/.test(i) ? a && l ? r[i] = (...d) => {
         l(...d), a(...d)
      } : a && (r[i] = a) : i === "style" ? r[i] = {
         ...a,
         ...l
      } : i === "className" && (r[i] = [a, l].filter(Boolean).join(" "))
   }
   return {
      ...t,
      ...r
   }
}

function jS(t) {
   var i, a;
   let e = (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : i.get,
      r = e && "isReactWarning" in e && e.isReactWarning;
   return r ? t.ref : (e = (a = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : a.get, r = e && "isReactWarning" in e && e.isReactWarning, r ? t.props.ref : t.props.ref || t.ref)
}

function Q0(t) {
   const e = t + "CollectionProvider",
      [r, i] = Vc(e),
      [a, l] = r(e, {
         collectionRef: {
            current: null
         },
         itemMap: new Map
      }),
      u = T => {
         const {
            scope: P,
            children: S
         } = T, C = be.useRef(null), _ = be.useRef(new Map).current;
         return f.jsx(a, {
            scope: P,
            itemMap: _,
            collectionRef: C,
            children: S
         })
      };
   u.displayName = e;
   const d = t + "CollectionSlot",
      p = be.forwardRef((T, P) => {
         const {
            scope: S,
            children: C
         } = T, _ = l(d, S), D = ts(P, _.collectionRef);
         return f.jsx(Oi, {
            ref: D,
            children: C
         })
      });
   p.displayName = d;
   const m = t + "CollectionItemSlot",
      y = "data-radix-collection-item",
      v = be.forwardRef((T, P) => {
         const {
            scope: S,
            children: C,
            ..._
         } = T, D = be.useRef(null), F = ts(P, D), $ = l(m, S);
         return be.useEffect(() => ($.itemMap.set(D, {
            ref: D,
            ..._
         }), () => void $.itemMap.delete(D))), f.jsx(Oi, {
            [y]: "",
            ref: F,
            children: C
         })
      });
   v.displayName = m;

   function w(T) {
      const P = l(t + "CollectionConsumer", T);
      return be.useCallback(() => {
         const C = P.collectionRef.current;
         if (!C) return [];
         const _ = Array.from(C.querySelectorAll(`[${y}]`));
         return Array.from(P.itemMap.values()).sort(($, z) => _.indexOf($.ref.current) - _.indexOf(z.ref.current))
      }, [P.collectionRef, P.itemMap])
   }
   return [{
      Provider: u,
      Slot: p,
      ItemSlot: v
   }, w, i]
}
var ES = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
   Nt = ES.reduce((t, e) => {
      const r = b.forwardRef((i, a) => {
         const {
            asChild: l,
            ...u
         } = i, d = l ? Oi : e;
         return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), f.jsx(d, {
            ...u,
            ref: a
         })
      });
      return r.displayName = `Primitive.${e}`, {
         ...t,
         [e]: r
      }
   }, {});

function q0(t, e) {
   t && ph.flushSync(() => t.dispatchEvent(e))
}

function Yn(t) {
   const e = b.useRef(t);
   return b.useEffect(() => {
      e.current = t
   }), b.useMemo(() => (...r) => {
      var i;
      return (i = e.current) == null ? void 0 : i.call(e, ...r)
   }, [])
}

function PS(t, e = globalThis == null ? void 0 : globalThis.document) {
   const r = Yn(t);
   b.useEffect(() => {
      const i = a => {
         a.key === "Escape" && r(a)
      };
      return e.addEventListener("keydown", i, {
         capture: !0
      }), () => e.removeEventListener("keydown", i, {
         capture: !0
      })
   }, [r, e])
}
var _S = "DismissableLayer",
   Df = "dismissableLayer.update",
   NS = "dismissableLayer.pointerDownOutside",
   AS = "dismissableLayer.focusOutside",
   gy, K0 = b.createContext({
      layers: new Set,
      layersWithOutsidePointerEventsDisabled: new Set,
      branches: new Set
   }),
   G0 = b.forwardRef((t, e) => {
      const {
         disableOutsidePointerEvents: r = !1,
         onEscapeKeyDown: i,
         onPointerDownOutside: a,
         onFocusOutside: l,
         onInteractOutside: u,
         onDismiss: d,
         ...p
      } = t, m = b.useContext(K0), [y, v] = b.useState(null), w = (y == null ? void 0 : y.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, T] = b.useState({}), P = ts(e, Y => v(Y)), S = Array.from(m.layers), [C] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), _ = S.indexOf(C), D = y ? S.indexOf(y) : -1, F = m.layersWithOutsidePointerEventsDisabled.size > 0, $ = D >= _, z = IS(Y => {
         const B = Y.target,
            me = [...m.branches].some(ye => ye.contains(B));
         !$ || me || (a == null || a(Y), u == null || u(Y), Y.defaultPrevented || d == null || d())
      }, w), U = MS(Y => {
         const B = Y.target;
         [...m.branches].some(ye => ye.contains(B)) || (l == null || l(Y), u == null || u(Y), Y.defaultPrevented || d == null || d())
      }, w);
      return PS(Y => {
         D === m.layers.size - 1 && (i == null || i(Y), !Y.defaultPrevented && d && (Y.preventDefault(), d()))
      }, w), b.useEffect(() => {
         if (y) return r && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (gy = w.body.style.pointerEvents, w.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(y)), m.layers.add(y), yy(), () => {
            r && m.layersWithOutsidePointerEventsDisabled.size === 1 && (w.body.style.pointerEvents = gy)
         }
      }, [y, w, r, m]), b.useEffect(() => () => {
         y && (m.layers.delete(y), m.layersWithOutsidePointerEventsDisabled.delete(y), yy())
      }, [y, m]), b.useEffect(() => {
         const Y = () => T({});
         return document.addEventListener(Df, Y), () => document.removeEventListener(Df, Y)
      }, []), f.jsx(Nt.div, {
         ...p,
         ref: P,
         style: {
            pointerEvents: F ? $ ? "auto" : "none" : void 0,
            ...t.style
         },
         onFocusCapture: ut(t.onFocusCapture, U.onFocusCapture),
         onBlurCapture: ut(t.onBlurCapture, U.onBlurCapture),
         onPointerDownCapture: ut(t.onPointerDownCapture, z.onPointerDownCapture)
      })
   });
G0.displayName = _S;
var DS = "DismissableLayerBranch",
   Y0 = b.forwardRef((t, e) => {
      const r = b.useContext(K0),
         i = b.useRef(null),
         a = ts(e, i);
      return b.useEffect(() => {
         const l = i.current;
         if (l) return r.branches.add(l), () => {
            r.branches.delete(l)
         }
      }, [r.branches]), f.jsx(Nt.div, {
         ...t,
         ref: a
      })
   });
Y0.displayName = DS;

function IS(t, e = globalThis == null ? void 0 : globalThis.document) {
   const r = Yn(t),
      i = b.useRef(!1),
      a = b.useRef(() => {});
   return b.useEffect(() => {
      const l = d => {
            if (d.target && !i.current) {
               let p = function () {
                  X0(NS, r, m, {
                     discrete: !0
                  })
               };
               const m = {
                  originalEvent: d
               };
               d.pointerType === "touch" ? (e.removeEventListener("click", a.current), a.current = p, e.addEventListener("click", a.current, {
                  once: !0
               })) : p()
            } else e.removeEventListener("click", a.current);
            i.current = !1
         },
         u = window.setTimeout(() => {
            e.addEventListener("pointerdown", l)
         }, 0);
      return () => {
         window.clearTimeout(u), e.removeEventListener("pointerdown", l), e.removeEventListener("click", a.current)
      }
   }, [e, r]), {
      onPointerDownCapture: () => i.current = !0
   }
}

function MS(t, e = globalThis == null ? void 0 : globalThis.document) {
   const r = Yn(t),
      i = b.useRef(!1);
   return b.useEffect(() => {
      const a = l => {
         l.target && !i.current && X0(AS, r, {
            originalEvent: l
         }, {
            discrete: !1
         })
      };
      return e.addEventListener("focusin", a), () => e.removeEventListener("focusin", a)
   }, [e, r]), {
      onFocusCapture: () => i.current = !0,
      onBlurCapture: () => i.current = !1
   }
}

function yy() {
   const t = new CustomEvent(Df);
   document.dispatchEvent(t)
}

function X0(t, e, r, {
   discrete: i
}) {
   const a = r.originalEvent.target,
      l = new CustomEvent(t, {
         bubbles: !1,
         cancelable: !0,
         detail: r
      });
   e && a.addEventListener(t, e, {
      once: !0
   }), i ? q0(a, l) : a.dispatchEvent(l)
}
var RS = G0,
   OS = Y0,
   ao = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {},
   LS = "Portal",
   J0 = b.forwardRef((t, e) => {
      var d;
      const {
         container: r,
         ...i
      } = t, [a, l] = b.useState(!1);
      ao(() => l(!0), []);
      const u = r || a && ((d = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : d.body);
      return u ? bS.createPortal(f.jsx(Nt.div, {
         ...i,
         ref: e
      }), u) : null
   });
J0.displayName = LS;

function FS(t, e) {
   return b.useReducer((r, i) => e[r][i] ?? r, t)
}
var mh = t => {
   const {
      present: e,
      children: r
   } = t, i = VS(e), a = typeof r == "function" ? r({
      present: i.isPresent
   }) : b.Children.only(r), l = ts(i.ref, zS(a));
   return typeof r == "function" || i.isPresent ? b.cloneElement(a, {
      ref: l
   }) : null
};
mh.displayName = "Presence";

function VS(t) {
   const [e, r] = b.useState(), i = b.useRef({}), a = b.useRef(t), l = b.useRef("none"), u = t ? "mounted" : "unmounted", [d, p] = FS(u, {
      mounted: {
         UNMOUNT: "unmounted",
         ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
         MOUNT: "mounted",
         ANIMATION_END: "unmounted"
      },
      unmounted: {
         MOUNT: "mounted"
      }
   });
   return b.useEffect(() => {
      const m = Xl(i.current);
      l.current = d === "mounted" ? m : "none"
   }, [d]), ao(() => {
      const m = i.current,
         y = a.current;
      if (y !== t) {
         const w = l.current,
            T = Xl(m);
         t ? p("MOUNT") : T === "none" || (m == null ? void 0 : m.display) === "none" ? p("UNMOUNT") : p(y && w !== T ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t
      }
   }, [t, p]), ao(() => {
      if (e) {
         let m;
         const y = e.ownerDocument.defaultView ?? window,
            v = T => {
               const S = Xl(i.current).includes(T.animationName);
               if (T.target === e && S && (p("ANIMATION_END"), !a.current)) {
                  const C = e.style.animationFillMode;
                  e.style.animationFillMode = "forwards", m = y.setTimeout(() => {
                     e.style.animationFillMode === "forwards" && (e.style.animationFillMode = C)
                  })
               }
            },
            w = T => {
               T.target === e && (l.current = Xl(i.current))
            };
         return e.addEventListener("animationstart", w), e.addEventListener("animationcancel", v), e.addEventListener("animationend", v), () => {
            y.clearTimeout(m), e.removeEventListener("animationstart", w), e.removeEventListener("animationcancel", v), e.removeEventListener("animationend", v)
         }
      } else p("ANIMATION_END")
   }, [e, p]), {
      isPresent: ["mounted", "unmountSuspended"].includes(d),
      ref: b.useCallback(m => {
         m && (i.current = getComputedStyle(m)), r(m)
      }, [])
   }
}

function Xl(t) {
   return (t == null ? void 0 : t.animationName) || "none"
}

function zS(t) {
   var i, a;
   let e = (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : i.get,
      r = e && "isReactWarning" in e && e.isReactWarning;
   return r ? t.ref : (e = (a = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : a.get, r = e && "isReactWarning" in e && e.isReactWarning, r ? t.props.ref : t.props.ref || t.ref)
}

function gh({
   prop: t,
   defaultProp: e,
   onChange: r = () => {}
}) {
   const [i, a] = BS({
      defaultProp: e,
      onChange: r
   }), l = t !== void 0, u = l ? t : i, d = Yn(r), p = b.useCallback(m => {
      if (l) {
         const v = typeof m == "function" ? m(t) : m;
         v !== t && d(v)
      } else a(m)
   }, [l, t, a, d]);
   return [u, p]
}

function BS({
   defaultProp: t,
   onChange: e
}) {
   const r = b.useState(t),
      [i] = r,
      a = b.useRef(i),
      l = Yn(e);
   return b.useEffect(() => {
      a.current !== i && (l(i), a.current = i)
   }, [i, a, l]), r
}
var US = "VisuallyHidden",
   yh = b.forwardRef((t, e) => f.jsx(Nt.span, {
      ...t,
      ref: e,
      style: {
         position: "absolute",
         border: 0,
         width: 1,
         height: 1,
         padding: 0,
         margin: -1,
         overflow: "hidden",
         clip: "rect(0, 0, 0, 0)",
         whiteSpace: "nowrap",
         wordWrap: "normal",
         ...t.style
      }
   }));
yh.displayName = US;
var vh = "ToastProvider",
   [xh, $S, ZS] = Q0("Toast"),
   [ex, C3] = Vc("Toast", [ZS]),
   [WS, zc] = ex(vh),
   tx = t => {
      const {
         __scopeToast: e,
         label: r = "Notification",
         duration: i = 5e3,
         swipeDirection: a = "right",
         swipeThreshold: l = 50,
         children: u
      } = t, [d, p] = b.useState(null), [m, y] = b.useState(0), v = b.useRef(!1), w = b.useRef(!1);
      return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${vh}\`. Expected non-empty \`string\`.`), f.jsx(xh.Provider, {
         scope: e,
         children: f.jsx(WS, {
            scope: e,
            label: r,
            duration: i,
            swipeDirection: a,
            swipeThreshold: l,
            toastCount: m,
            viewport: d,
            onViewportChange: p,
            onToastAdd: b.useCallback(() => y(T => T + 1), []),
            onToastRemove: b.useCallback(() => y(T => T - 1), []),
            isFocusedToastEscapeKeyDownRef: v,
            isClosePausedRef: w,
            children: u
         })
      })
   };
tx.displayName = vh;
var nx = "ToastViewport",
   HS = ["F8"],
   If = "toast.viewportPause",
   Mf = "toast.viewportResume",
   rx = b.forwardRef((t, e) => {
      const {
         __scopeToast: r,
         hotkey: i = HS,
         label: a = "Notifications ({hotkey})",
         ...l
      } = t, u = zc(nx, r), d = $S(r), p = b.useRef(null), m = b.useRef(null), y = b.useRef(null), v = b.useRef(null), w = ts(e, v, u.onViewportChange), T = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), P = u.toastCount > 0;
      b.useEffect(() => {
         const C = _ => {
            var F;
            i.length !== 0 && i.every($ => _[$] || _.code === $) && ((F = v.current) == null || F.focus())
         };
         return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C)
      }, [i]), b.useEffect(() => {
         const C = p.current,
            _ = v.current;
         if (P && C && _) {
            const D = () => {
                  if (!u.isClosePausedRef.current) {
                     const U = new CustomEvent(If);
                     _.dispatchEvent(U), u.isClosePausedRef.current = !0
                  }
               },
               F = () => {
                  if (u.isClosePausedRef.current) {
                     const U = new CustomEvent(Mf);
                     _.dispatchEvent(U), u.isClosePausedRef.current = !1
                  }
               },
               $ = U => {
                  !C.contains(U.relatedTarget) && F()
               },
               z = () => {
                  C.contains(document.activeElement) || F()
               };
            return C.addEventListener("focusin", D), C.addEventListener("focusout", $), C.addEventListener("pointermove", D), C.addEventListener("pointerleave", z), window.addEventListener("blur", D), window.addEventListener("focus", F), () => {
               C.removeEventListener("focusin", D), C.removeEventListener("focusout", $), C.removeEventListener("pointermove", D), C.removeEventListener("pointerleave", z), window.removeEventListener("blur", D), window.removeEventListener("focus", F)
            }
         }
      }, [P, u.isClosePausedRef]);
      const S = b.useCallback(({
         tabbingDirection: C
      }) => {
         const D = d().map(F => {
            const $ = F.ref.current,
               z = [$, ...iT($)];
            return C === "forwards" ? z : z.reverse()
         });
         return (C === "forwards" ? D.reverse() : D).flat()
      }, [d]);
      return b.useEffect(() => {
         const C = v.current;
         if (C) {
            const _ = D => {
               var z, U, Y;
               const F = D.altKey || D.ctrlKey || D.metaKey;
               if (D.key === "Tab" && !F) {
                  const B = document.activeElement,
                     me = D.shiftKey;
                  if (D.target === C && me) {
                     (z = m.current) == null || z.focus();
                     return
                  }
                  const X = S({
                        tabbingDirection: me ? "backwards" : "forwards"
                     }),
                     ge = X.findIndex(se => se === B);
                  tf(X.slice(ge + 1)) ? D.preventDefault() : me ? (U = m.current) == null || U.focus() : (Y = y.current) == null || Y.focus()
               }
            };
            return C.addEventListener("keydown", _), () => C.removeEventListener("keydown", _)
         }
      }, [d, S]), f.jsxs(OS, {
         ref: p,
         role: "region",
         "aria-label": a.replace("{hotkey}", T),
         tabIndex: -1,
         style: {
            pointerEvents: P ? void 0 : "none"
         },
         children: [P && f.jsx(Rf, {
            ref: m,
            onFocusFromOutsideViewport: () => {
               const C = S({
                  tabbingDirection: "forwards"
               });
               tf(C)
            }
         }), f.jsx(xh.Slot, {
            scope: r,
            children: f.jsx(Nt.ol, {
               tabIndex: -1,
               ...l,
               ref: w
            })
         }), P && f.jsx(Rf, {
            ref: y,
            onFocusFromOutsideViewport: () => {
               const C = S({
                  tabbingDirection: "backwards"
               });
               tf(C)
            }
         })]
      })
   });
rx.displayName = nx;
var sx = "ToastFocusProxy",
   Rf = b.forwardRef((t, e) => {
      const {
         __scopeToast: r,
         onFocusFromOutsideViewport: i,
         ...a
      } = t, l = zc(sx, r);
      return f.jsx(yh, {
         "aria-hidden": !0,
         tabIndex: 0,
         ...a,
         ref: e,
         style: {
            position: "fixed"
         },
         onFocus: u => {
            var m;
            const d = u.relatedTarget;
            !((m = l.viewport) != null && m.contains(d)) && i()
         }
      })
   });
Rf.displayName = sx;
var Bc = "Toast",
   QS = "toast.swipeStart",
   qS = "toast.swipeMove",
   KS = "toast.swipeCancel",
   GS = "toast.swipeEnd",
   ix = b.forwardRef((t, e) => {
      const {
         forceMount: r,
         open: i,
         defaultOpen: a,
         onOpenChange: l,
         ...u
      } = t, [d = !0, p] = gh({
         prop: i,
         defaultProp: a,
         onChange: l
      });
      return f.jsx(mh, {
         present: r || d,
         children: f.jsx(JS, {
            open: d,
            ...u,
            ref: e,
            onClose: () => p(!1),
            onPause: Yn(t.onPause),
            onResume: Yn(t.onResume),
            onSwipeStart: ut(t.onSwipeStart, m => {
               m.currentTarget.setAttribute("data-swipe", "start")
            }),
            onSwipeMove: ut(t.onSwipeMove, m => {
               const {
                  x: y,
                  y: v
               } = m.detail.delta;
               m.currentTarget.setAttribute("data-swipe", "move"), m.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${y}px`), m.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${v}px`)
            }),
            onSwipeCancel: ut(t.onSwipeCancel, m => {
               m.currentTarget.setAttribute("data-swipe", "cancel"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), m.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }),
            onSwipeEnd: ut(t.onSwipeEnd, m => {
               const {
                  x: y,
                  y: v
               } = m.detail.delta;
               m.currentTarget.setAttribute("data-swipe", "end"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), m.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${y}px`), m.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${v}px`), p(!1)
            })
         })
      })
   });
ix.displayName = Bc;
var [YS, XS] = ex(Bc, {
   onClose() {}
}), JS = b.forwardRef((t, e) => {
   const {
      __scopeToast: r,
      type: i = "foreground",
      duration: a,
      open: l,
      onClose: u,
      onEscapeKeyDown: d,
      onPause: p,
      onResume: m,
      onSwipeStart: y,
      onSwipeMove: v,
      onSwipeCancel: w,
      onSwipeEnd: T,
      ...P
   } = t, S = zc(Bc, r), [C, _] = b.useState(null), D = ts(e, se => _(se)), F = b.useRef(null), $ = b.useRef(null), z = a || S.duration, U = b.useRef(0), Y = b.useRef(z), B = b.useRef(0), {
      onToastAdd: me,
      onToastRemove: ye
   } = S, Le = Yn(() => {
      var _e;
      (C == null ? void 0 : C.contains(document.activeElement)) && ((_e = S.viewport) == null || _e.focus()), u()
   }), X = b.useCallback(se => {
      !se || se === 1 / 0 || (window.clearTimeout(B.current), U.current = new Date().getTime(), B.current = window.setTimeout(Le, se))
   }, [Le]);
   b.useEffect(() => {
      const se = S.viewport;
      if (se) {
         const _e = () => {
               X(Y.current), m == null || m()
            },
            Se = () => {
               const fe = new Date().getTime() - U.current;
               Y.current = Y.current - fe, window.clearTimeout(B.current), p == null || p()
            };
         return se.addEventListener(If, Se), se.addEventListener(Mf, _e), () => {
            se.removeEventListener(If, Se), se.removeEventListener(Mf, _e)
         }
      }
   }, [S.viewport, z, p, m, X]), b.useEffect(() => {
      l && !S.isClosePausedRef.current && X(z)
   }, [l, z, S.isClosePausedRef, X]), b.useEffect(() => (me(), () => ye()), [me, ye]);
   const ge = b.useMemo(() => C ? fx(C) : null, [C]);
   return S.viewport ? f.jsxs(f.Fragment, {
      children: [ge && f.jsx(eT, {
         __scopeToast: r,
         role: "status",
         "aria-live": i === "foreground" ? "assertive" : "polite",
         "aria-atomic": !0,
         children: ge
      }), f.jsx(YS, {
         scope: r,
         onClose: Le,
         children: ph.createPortal(f.jsx(xh.ItemSlot, {
            scope: r,
            children: f.jsx(RS, {
               asChild: !0,
               onEscapeKeyDown: ut(d, () => {
                  S.isFocusedToastEscapeKeyDownRef.current || Le(), S.isFocusedToastEscapeKeyDownRef.current = !1
               }),
               children: f.jsx(Nt.li, {
                  role: "status",
                  "aria-live": "off",
                  "aria-atomic": !0,
                  tabIndex: 0,
                  "data-state": l ? "open" : "closed",
                  "data-swipe-direction": S.swipeDirection,
                  ...P,
                  ref: D,
                  style: {
                     userSelect: "none",
                     touchAction: "none",
                     ...t.style
                  },
                  onKeyDown: ut(t.onKeyDown, se => {
                     se.key === "Escape" && (d == null || d(se.nativeEvent), se.nativeEvent.defaultPrevented || (S.isFocusedToastEscapeKeyDownRef.current = !0, Le()))
                  }),
                  onPointerDown: ut(t.onPointerDown, se => {
                     se.button === 0 && (F.current = {
                        x: se.clientX,
                        y: se.clientY
                     })
                  }),
                  onPointerMove: ut(t.onPointerMove, se => {
                     if (!F.current) return;
                     const _e = se.clientX - F.current.x,
                        Se = se.clientY - F.current.y,
                        fe = !!$.current,
                        Q = ["left", "right"].includes(S.swipeDirection),
                        ae = ["left", "up"].includes(S.swipeDirection) ? Math.min : Math.max,
                        ee = Q ? ae(0, _e) : 0,
                        A = Q ? 0 : ae(0, Se),
                        Z = se.pointerType === "touch" ? 10 : 2,
                        Ne = {
                           x: ee,
                           y: A
                        },
                        Ae = {
                           originalEvent: se,
                           delta: Ne
                        };
                     fe ? ($.current = Ne, Jl(qS, v, Ae, {
                        discrete: !1
                     })) : vy(Ne, S.swipeDirection, Z) ? ($.current = Ne, Jl(QS, y, Ae, {
                        discrete: !1
                     }), se.target.setPointerCapture(se.pointerId)) : (Math.abs(_e) > Z || Math.abs(Se) > Z) && (F.current = null)
                  }),
                  onPointerUp: ut(t.onPointerUp, se => {
                     const _e = $.current,
                        Se = se.target;
                     if (Se.hasPointerCapture(se.pointerId) && Se.releasePointerCapture(se.pointerId), $.current = null, F.current = null, _e) {
                        const fe = se.currentTarget,
                           Q = {
                              originalEvent: se,
                              delta: _e
                           };
                        vy(_e, S.swipeDirection, S.swipeThreshold) ? Jl(GS, T, Q, {
                           discrete: !0
                        }) : Jl(KS, w, Q, {
                           discrete: !0
                        }), fe.addEventListener("click", ae => ae.preventDefault(), {
                           once: !0
                        })
                     }
                  })
               })
            })
         }), S.viewport)
      })]
   }) : null
}), eT = t => {
   const {
      __scopeToast: e,
      children: r,
      ...i
   } = t, a = zc(Bc, e), [l, u] = b.useState(!1), [d, p] = b.useState(!1);
   return rT(() => u(!0)), b.useEffect(() => {
      const m = window.setTimeout(() => p(!0), 1e3);
      return () => window.clearTimeout(m)
   }, []), d ? null : f.jsx(J0, {
      asChild: !0,
      children: f.jsx(yh, {
         ...i,
         children: l && f.jsxs(f.Fragment, {
            children: [a.label, " ", r]
         })
      })
   })
}, tT = "ToastTitle", ax = b.forwardRef((t, e) => {
   const {
      __scopeToast: r,
      ...i
   } = t;
   return f.jsx(Nt.div, {
      ...i,
      ref: e
   })
});
ax.displayName = tT;
var nT = "ToastDescription",
   ox = b.forwardRef((t, e) => {
      const {
         __scopeToast: r,
         ...i
      } = t;
      return f.jsx(Nt.div, {
         ...i,
         ref: e
      })
   });
ox.displayName = nT;
var lx = "ToastAction",
   cx = b.forwardRef((t, e) => {
      const {
         altText: r,
         ...i
      } = t;
      return r.trim() ? f.jsx(dx, {
         altText: r,
         asChild: !0,
         children: f.jsx(wh, {
            ...i,
            ref: e
         })
      }) : (console.error(`Invalid prop \`altText\` supplied to \`${lx}\`. Expected non-empty \`string\`.`), null)
   });
cx.displayName = lx;
var ux = "ToastClose",
   wh = b.forwardRef((t, e) => {
      const {
         __scopeToast: r,
         ...i
      } = t, a = XS(ux, r);
      return f.jsx(dx, {
         asChild: !0,
         children: f.jsx(Nt.button, {
            type: "button",
            ...i,
            ref: e,
            onClick: ut(t.onClick, a.onClose)
         })
      })
   });
wh.displayName = ux;
var dx = b.forwardRef((t, e) => {
   const {
      __scopeToast: r,
      altText: i,
      ...a
   } = t;
   return f.jsx(Nt.div, {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": i || void 0,
      ...a,
      ref: e
   })
});

function fx(t) {
   const e = [];
   return Array.from(t.childNodes).forEach(i => {
      if (i.nodeType === i.TEXT_NODE && i.textContent && e.push(i.textContent), sT(i)) {
         const a = i.ariaHidden || i.hidden || i.style.display === "none",
            l = i.dataset.radixToastAnnounceExclude === "";
         if (!a)
            if (l) {
               const u = i.dataset.radixToastAnnounceAlt;
               u && e.push(u)
            } else e.push(...fx(i))
      }
   }), e
}

function Jl(t, e, r, {
   discrete: i
}) {
   const a = r.originalEvent.currentTarget,
      l = new CustomEvent(t, {
         bubbles: !0,
         cancelable: !0,
         detail: r
      });
   e && a.addEventListener(t, e, {
      once: !0
   }), i ? q0(a, l) : a.dispatchEvent(l)
}
var vy = (t, e, r = 0) => {
   const i = Math.abs(t.x),
      a = Math.abs(t.y),
      l = i > a;
   return e === "left" || e === "right" ? l && i > r : !l && a > r
};

function rT(t = () => {}) {
   const e = Yn(t);
   ao(() => {
      let r = 0,
         i = 0;
      return r = window.requestAnimationFrame(() => i = window.requestAnimationFrame(e)), () => {
         window.cancelAnimationFrame(r), window.cancelAnimationFrame(i)
      }
   }, [e])
}

function sT(t) {
   return t.nodeType === t.ELEMENT_NODE
}

function iT(t) {
   const e = [],
      r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
         acceptNode: i => {
            const a = i.tagName === "INPUT" && i.type === "hidden";
            return i.disabled || i.hidden || a ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
         }
      });
   for (; r.nextNode();) e.push(r.currentNode);
   return e
}

function tf(t) {
   const e = document.activeElement;
   return t.some(r => r === e ? !0 : (r.focus(), document.activeElement !== e))
}
var aT = tx,
   hx = rx,
   px = ix,
   mx = ax,
   gx = ox,
   yx = cx,
   vx = wh;

function xx(t) {
   var e, r, i = "";
   if (typeof t == "string" || typeof t == "number") i += t;
   else if (typeof t == "object")
      if (Array.isArray(t)) {
         var a = t.length;
         for (e = 0; e < a; e++) t[e] && (r = xx(t[e])) && (i && (i += " "), i += r)
      } else
         for (r in t) t[r] && (i && (i += " "), i += r);
   return i
}

function wx() {
   for (var t, e, r = 0, i = "", a = arguments.length; r < a; r++)(t = arguments[r]) && (e = xx(t)) && (i && (i += " "), i += e);
   return i
}
const xy = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t,
   wy = wx,
   bh = (t, e) => r => {
      var i;
      if ((e == null ? void 0 : e.variants) == null) return wy(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
      const {
         variants: a,
         defaultVariants: l
      } = e, u = Object.keys(a).map(m => {
         const y = r == null ? void 0 : r[m],
            v = l == null ? void 0 : l[m];
         if (y === null) return null;
         const w = xy(y) || xy(v);
         return a[m][w]
      }), d = r && Object.entries(r).reduce((m, y) => {
         let [v, w] = y;
         return w === void 0 || (m[v] = w), m
      }, {}), p = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((m, y) => {
         let {
            class: v,
            className: w,
            ...T
         } = y;
         return Object.entries(T).every(P => {
            let [S, C] = P;
            return Array.isArray(C) ? C.includes({
               ...l,
               ...d
            } [S]) : {
               ...l,
               ...d
            } [S] === C
         }) ? [...m, v, w] : m
      }, []);
      return wy(t, u, p, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
   };
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oT = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
   bx = (...t) => t.filter((e, r, i) => !!e && i.indexOf(e) === r).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var lT = {
   xmlns: "http://www.w3.org/2000/svg",
   width: 24,
   height: 24,
   viewBox: "0 0 24 24",
   fill: "none",
   stroke: "currentColor",
   strokeWidth: 2,
   strokeLinecap: "round",
   strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cT = b.forwardRef(({
   color: t = "currentColor",
   size: e = 24,
   strokeWidth: r = 2,
   absoluteStrokeWidth: i,
   className: a = "",
   children: l,
   iconNode: u,
   ...d
}, p) => b.createElement("svg", {
   ref: p,
   ...lT,
   width: e,
   height: e,
   stroke: t,
   strokeWidth: i ? Number(r) * 24 / Number(e) : r,
   className: bx("lucide", a),
   ...d
}, [...u.map(([m, y]) => b.createElement(m, y)), ...Array.isArray(l) ? l : [l]]));
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = (t, e) => {
   const r = b.forwardRef(({
      className: i,
      ...a
   }, l) => b.createElement(cT, {
      ref: l,
      iconNode: e,
      className: bx(`lucide-${oT(t)}`, i),
      ...a
   }));
   return r.displayName = `${t}`, r
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Li = xt("ArrowLeft", [
   ["path", {
      d: "m12 19-7-7 7-7",
      key: "1l729n"
   }],
   ["path", {
      d: "M19 12H5",
      key: "x3x0zl"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uT = xt("ArrowRight", [
   ["path", {
      d: "M5 12h14",
      key: "1ays0h"
   }],
   ["path", {
      d: "m12 5 7 7-7 7",
      key: "xquz4c"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = xt("Award", [
   ["path", {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
   }],
   ["circle", {
      cx: "12",
      cy: "8",
      r: "6",
      key: "1vp47v"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const by = xt("BookOpen", [
   ["path", {
      d: "M12 7v14",
      key: "1akyts"
   }],
   ["path", {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kh = xt("Calendar", [
   ["path", {
      d: "M8 2v4",
      key: "1cmpym"
   }],
   ["path", {
      d: "M16 2v4",
      key: "4m81vk"
   }],
   ["rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "4",
      rx: "2",
      key: "1hopcy"
   }],
   ["path", {
      d: "M3 10h18",
      key: "8toen8"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = xt("ChevronDown", [
   ["path", {
      d: "m6 9 6 6 6-6",
      key: "qrunsl"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dT = xt("CircleAlert", [
   ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
   }],
   ["line", {
      x1: "12",
      x2: "12",
      y1: "8",
      y2: "12",
      key: "1pkeuh"
   }],
   ["line", {
      x1: "12",
      x2: "12.01",
      y1: "16",
      y2: "16",
      key: "4dfq90"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fT = xt("Clock", [
   ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
   }],
   ["polyline", {
      points: "12 6 12 12 16 14",
      key: "68esgv"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hT = xt("Download", [
   ["path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
      key: "ih7n3h"
   }],
   ["polyline", {
      points: "7 10 12 15 17 10",
      key: "2ggqvy"
   }],
   ["line", {
      x1: "12",
      x2: "12",
      y1: "15",
      y2: "3",
      key: "1vk2je"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pT = xt("ExternalLink", [
   ["path", {
      d: "M15 3h6v6",
      key: "1q9fwt"
   }],
   ["path", {
      d: "M10 14 21 3",
      key: "gplh6r"
   }],
   ["path", {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sy = xt("FileText", [
   ["path", {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7"
   }],
   ["path", {
      d: "M14 2v4a2 2 0 0 0 2 2h4",
      key: "tnqrlb"
   }],
   ["path", {
      d: "M10 9H8",
      key: "b1mrlr"
   }],
   ["path", {
      d: "M16 13H8",
      key: "t4e002"
   }],
   ["path", {
      d: "M16 17H8",
      key: "z1uh3a"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mT = xt("House", [
   ["path", {
      d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
      key: "5wwlr5"
   }],
   ["path", {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gT = xt("LoaderCircle", [
   ["path", {
      d: "M21 12a9 9 0 1 1-6.219-8.56",
      key: "13zald"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yT = xt("Menu", [
   ["line", {
      x1: "4",
      x2: "20",
      y1: "12",
      y2: "12",
      key: "1e0a9i"
   }],
   ["line", {
      x1: "4",
      x2: "20",
      y1: "6",
      y2: "6",
      key: "1owob3"
   }],
   ["line", {
      x1: "4",
      x2: "20",
      y1: "18",
      y2: "18",
      key: "yk5zj1"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vT = xt("Moon", [
   ["path", {
      d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
      key: "a7tn18"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xT = xt("Send", [
   ["path", {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
   }],
   ["path", {
      d: "m21.854 2.147-10.94 10.939",
      key: "12cjpa"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wT = xt("Sun", [
   ["circle", {
      cx: "12",
      cy: "12",
      r: "4",
      key: "4exip2"
   }],
   ["path", {
      d: "M12 2v2",
      key: "tus03m"
   }],
   ["path", {
      d: "M12 20v2",
      key: "1lh1kg"
   }],
   ["path", {
      d: "m4.93 4.93 1.41 1.41",
      key: "149t6j"
   }],
   ["path", {
      d: "m17.66 17.66 1.41 1.41",
      key: "ptbguv"
   }],
   ["path", {
      d: "M2 12h2",
      key: "1t8f8n"
   }],
   ["path", {
      d: "M20 12h2",
      key: "1q8mjw"
   }],
   ["path", {
      d: "m6.34 17.66-1.41 1.41",
      key: "1m8zz5"
   }],
   ["path", {
      d: "m19.07 4.93-1.41 1.41",
      key: "1shlcs"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kx = xt("Tag", [
   ["path", {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
   }],
   ["circle", {
      cx: "7.5",
      cy: "7.5",
      r: ".5",
      fill: "currentColor",
      key: "kqv944"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bT = xt("User", [
   ["path", {
      d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
      key: "975kel"
   }],
   ["circle", {
      cx: "12",
      cy: "7",
      r: "4",
      key: "17ys0d"
   }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sx = xt("X", [
      ["path", {
         d: "M18 6 6 18",
         key: "1bl5f8"
      }],
      ["path", {
         d: "m6 6 12 12",
         key: "d8bk6v"
      }]
   ]),
   Sh = "-",
   kT = t => {
      const e = TT(t),
         {
            conflictingClassGroups: r,
            conflictingClassGroupModifiers: i
         } = t;
      return {
         getClassGroupId: u => {
            const d = u.split(Sh);
            return d[0] === "" && d.length !== 1 && d.shift(), Tx(d, e) || ST(u)
         },
         getConflictingClassGroupIds: (u, d) => {
            const p = r[u] || [];
            return d && i[u] ? [...p, ...i[u]] : p
         }
      }
   },
   Tx = (t, e) => {
      var u;
      if (t.length === 0) return e.classGroupId;
      const r = t[0],
         i = e.nextPart.get(r),
         a = i ? Tx(t.slice(1), i) : void 0;
      if (a) return a;
      if (e.validators.length === 0) return;
      const l = t.join(Sh);
      return (u = e.validators.find(({
         validator: d
      }) => d(l))) == null ? void 0 : u.classGroupId
   },
   Ty = /^\[(.+)\]$/,
   ST = t => {
      if (Ty.test(t)) {
         const e = Ty.exec(t)[1],
            r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
         if (r) return "arbitrary.." + r
      }
   },
   TT = t => {
      const {
         theme: e,
         prefix: r
      } = t, i = {
         nextPart: new Map,
         validators: []
      };
      return jT(Object.entries(t.classGroups), r).forEach(([l, u]) => {
         Of(u, i, l, e)
      }), i
   },
   Of = (t, e, r, i) => {
      t.forEach(a => {
         if (typeof a == "string") {
            const l = a === "" ? e : Cy(e, a);
            l.classGroupId = r;
            return
         }
         if (typeof a == "function") {
            if (CT(a)) {
               Of(a(i), e, r, i);
               return
            }
            e.validators.push({
               validator: a,
               classGroupId: r
            });
            return
         }
         Object.entries(a).forEach(([l, u]) => {
            Of(u, Cy(e, l), r, i)
         })
      })
   },
   Cy = (t, e) => {
      let r = t;
      return e.split(Sh).forEach(i => {
         r.nextPart.has(i) || r.nextPart.set(i, {
            nextPart: new Map,
            validators: []
         }), r = r.nextPart.get(i)
      }), r
   },
   CT = t => t.isThemeGetter,
   jT = (t, e) => e ? t.map(([r, i]) => {
      const a = i.map(l => typeof l == "string" ? e + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([u, d]) => [e + u, d])) : l);
      return [r, a]
   }) : t,
   ET = t => {
      if (t < 1) return {
         get: () => {},
         set: () => {}
      };
      let e = 0,
         r = new Map,
         i = new Map;
      const a = (l, u) => {
         r.set(l, u), e++, e > t && (e = 0, i = r, r = new Map)
      };
      return {
         get(l) {
            let u = r.get(l);
            if (u !== void 0) return u;
            if ((u = i.get(l)) !== void 0) return a(l, u), u
         },
         set(l, u) {
            r.has(l) ? r.set(l, u) : a(l, u)
         }
      }
   },
   Cx = "!",
   PT = t => {
      const {
         separator: e,
         experimentalParseClassName: r
      } = t, i = e.length === 1, a = e[0], l = e.length, u = d => {
         const p = [];
         let m = 0,
            y = 0,
            v;
         for (let C = 0; C < d.length; C++) {
            let _ = d[C];
            if (m === 0) {
               if (_ === a && (i || d.slice(C, C + l) === e)) {
                  p.push(d.slice(y, C)), y = C + l;
                  continue
               }
               if (_ === "/") {
                  v = C;
                  continue
               }
            }
            _ === "[" ? m++ : _ === "]" && m--
         }
         const w = p.length === 0 ? d : d.substring(y),
            T = w.startsWith(Cx),
            P = T ? w.substring(1) : w,
            S = v && v > y ? v - y : void 0;
         return {
            modifiers: p,
            hasImportantModifier: T,
            baseClassName: P,
            maybePostfixModifierPosition: S
         }
      };
      return r ? d => r({
         className: d,
         parseClassName: u
      }) : u
   },
   _T = t => {
      if (t.length <= 1) return t;
      const e = [];
      let r = [];
      return t.forEach(i => {
         i[0] === "[" ? (e.push(...r.sort(), i), r = []) : r.push(i)
      }), e.push(...r.sort()), e
   },
   NT = t => ({
      cache: ET(t.cacheSize),
      parseClassName: PT(t),
      ...kT(t)
   }),
   AT = /\s+/,
   DT = (t, e) => {
      const {
         parseClassName: r,
         getClassGroupId: i,
         getConflictingClassGroupIds: a
      } = e, l = [], u = t.trim().split(AT);
      let d = "";
      for (let p = u.length - 1; p >= 0; p -= 1) {
         const m = u[p],
            {
               modifiers: y,
               hasImportantModifier: v,
               baseClassName: w,
               maybePostfixModifierPosition: T
            } = r(m);
         let P = !!T,
            S = i(P ? w.substring(0, T) : w);
         if (!S) {
            if (!P) {
               d = m + (d.length > 0 ? " " + d : d);
               continue
            }
            if (S = i(w), !S) {
               d = m + (d.length > 0 ? " " + d : d);
               continue
            }
            P = !1
         }
         const C = _T(y).join(":"),
            _ = v ? C + Cx : C,
            D = _ + S;
         if (l.includes(D)) continue;
         l.push(D);
         const F = a(S, P);
         for (let $ = 0; $ < F.length; ++$) {
            const z = F[$];
            l.push(_ + z)
         }
         d = m + (d.length > 0 ? " " + d : d)
      }
      return d
   };

function IT() {
   let t = 0,
      e, r, i = "";
   for (; t < arguments.length;)(e = arguments[t++]) && (r = jx(e)) && (i && (i += " "), i += r);
   return i
}
const jx = t => {
   if (typeof t == "string") return t;
   let e, r = "";
   for (let i = 0; i < t.length; i++) t[i] && (e = jx(t[i])) && (r && (r += " "), r += e);
   return r
};

function MT(t, ...e) {
   let r, i, a, l = u;

   function u(p) {
      const m = e.reduce((y, v) => v(y), t());
      return r = NT(m), i = r.cache.get, a = r.cache.set, l = d, d(p)
   }

   function d(p) {
      const m = i(p);
      if (m) return m;
      const y = DT(p, r);
      return a(p, y), y
   }
   return function () {
      return l(IT.apply(null, arguments))
   }
}
const Je = t => {
      const e = r => r[t] || [];
      return e.isThemeGetter = !0, e
   },
   Ex = /^\[(?:([a-z-]+):)?(.+)\]$/i,
   RT = /^\d+\/\d+$/,
   OT = new Set(["px", "full", "screen"]),
   LT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
   FT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
   VT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
   zT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
   BT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
   dr = t => Si(t) || OT.has(t) || RT.test(t),
   $r = t => Wi(t, "length", KT),
   Si = t => !!t && !Number.isNaN(Number(t)),
   nf = t => Wi(t, "number", Si),
   Ia = t => !!t && Number.isInteger(Number(t)),
   UT = t => t.endsWith("%") && Si(t.slice(0, -1)),
   Me = t => Ex.test(t),
   Zr = t => LT.test(t),
   $T = new Set(["length", "size", "percentage"]),
   ZT = t => Wi(t, $T, Px),
   WT = t => Wi(t, "position", Px),
   HT = new Set(["image", "url"]),
   QT = t => Wi(t, HT, YT),
   qT = t => Wi(t, "", GT),
   Ma = () => !0,
   Wi = (t, e, r) => {
      const i = Ex.exec(t);
      return i ? i[1] ? typeof e == "string" ? i[1] === e : e.has(i[1]) : r(i[2]) : !1
   },
   KT = t => FT.test(t) && !VT.test(t),
   Px = () => !1,
   GT = t => zT.test(t),
   YT = t => BT.test(t),
   XT = () => {
      const t = Je("colors"),
         e = Je("spacing"),
         r = Je("blur"),
         i = Je("brightness"),
         a = Je("borderColor"),
         l = Je("borderRadius"),
         u = Je("borderSpacing"),
         d = Je("borderWidth"),
         p = Je("contrast"),
         m = Je("grayscale"),
         y = Je("hueRotate"),
         v = Je("invert"),
         w = Je("gap"),
         T = Je("gradientColorStops"),
         P = Je("gradientColorStopPositions"),
         S = Je("inset"),
         C = Je("margin"),
         _ = Je("opacity"),
         D = Je("padding"),
         F = Je("saturate"),
         $ = Je("scale"),
         z = Je("sepia"),
         U = Je("skew"),
         Y = Je("space"),
         B = Je("translate"),
         me = () => ["auto", "contain", "none"],
         ye = () => ["auto", "hidden", "clip", "visible", "scroll"],
         Le = () => ["auto", Me, e],
         X = () => [Me, e],
         ge = () => ["", dr, $r],
         se = () => ["auto", Si, Me],
         _e = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
         Se = () => ["solid", "dashed", "dotted", "double", "none"],
         fe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
         Q = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
         ae = () => ["", "0", Me],
         ee = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
         A = () => [Si, Me];
      return {
         cacheSize: 500,
         separator: ":",
         theme: {
            colors: [Ma],
            spacing: [dr, $r],
            blur: ["none", "", Zr, Me],
            brightness: A(),
            borderColor: [t],
            borderRadius: ["none", "", "full", Zr, Me],
            borderSpacing: X(),
            borderWidth: ge(),
            contrast: A(),
            grayscale: ae(),
            hueRotate: A(),
            invert: ae(),
            gap: X(),
            gradientColorStops: [t],
            gradientColorStopPositions: [UT, $r],
            inset: Le(),
            margin: Le(),
            opacity: A(),
            padding: X(),
            saturate: A(),
            scale: A(),
            sepia: ae(),
            skew: A(),
            space: X(),
            translate: X()
         },
         classGroups: {
            aspect: [{
               aspect: ["auto", "square", "video", Me]
            }],
            container: ["container"],
            columns: [{
               columns: [Zr]
            }],
            "break-after": [{
               "break-after": ee()
            }],
            "break-before": [{
               "break-before": ee()
            }],
            "break-inside": [{
               "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
               "box-decoration": ["slice", "clone"]
            }],
            box: [{
               box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
               float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
               clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
               object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
               object: [..._e(), Me]
            }],
            overflow: [{
               overflow: ye()
            }],
            "overflow-x": [{
               "overflow-x": ye()
            }],
            "overflow-y": [{
               "overflow-y": ye()
            }],
            overscroll: [{
               overscroll: me()
            }],
            "overscroll-x": [{
               "overscroll-x": me()
            }],
            "overscroll-y": [{
               "overscroll-y": me()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
               inset: [S]
            }],
            "inset-x": [{
               "inset-x": [S]
            }],
            "inset-y": [{
               "inset-y": [S]
            }],
            start: [{
               start: [S]
            }],
            end: [{
               end: [S]
            }],
            top: [{
               top: [S]
            }],
            right: [{
               right: [S]
            }],
            bottom: [{
               bottom: [S]
            }],
            left: [{
               left: [S]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
               z: ["auto", Ia, Me]
            }],
            basis: [{
               basis: Le()
            }],
            "flex-direction": [{
               flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
               flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
               flex: ["1", "auto", "initial", "none", Me]
            }],
            grow: [{
               grow: ae()
            }],
            shrink: [{
               shrink: ae()
            }],
            order: [{
               order: ["first", "last", "none", Ia, Me]
            }],
            "grid-cols": [{
               "grid-cols": [Ma]
            }],
            "col-start-end": [{
               col: ["auto", {
                  span: ["full", Ia, Me]
               }, Me]
            }],
            "col-start": [{
               "col-start": se()
            }],
            "col-end": [{
               "col-end": se()
            }],
            "grid-rows": [{
               "grid-rows": [Ma]
            }],
            "row-start-end": [{
               row: ["auto", {
                  span: [Ia, Me]
               }, Me]
            }],
            "row-start": [{
               "row-start": se()
            }],
            "row-end": [{
               "row-end": se()
            }],
            "grid-flow": [{
               "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
               "auto-cols": ["auto", "min", "max", "fr", Me]
            }],
            "auto-rows": [{
               "auto-rows": ["auto", "min", "max", "fr", Me]
            }],
            gap: [{
               gap: [w]
            }],
            "gap-x": [{
               "gap-x": [w]
            }],
            "gap-y": [{
               "gap-y": [w]
            }],
            "justify-content": [{
               justify: ["normal", ...Q()]
            }],
            "justify-items": [{
               "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
               "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
               content: ["normal", ...Q(), "baseline"]
            }],
            "align-items": [{
               items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
               self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
               "place-content": [...Q(), "baseline"]
            }],
            "place-items": [{
               "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
               "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
               p: [D]
            }],
            px: [{
               px: [D]
            }],
            py: [{
               py: [D]
            }],
            ps: [{
               ps: [D]
            }],
            pe: [{
               pe: [D]
            }],
            pt: [{
               pt: [D]
            }],
            pr: [{
               pr: [D]
            }],
            pb: [{
               pb: [D]
            }],
            pl: [{
               pl: [D]
            }],
            m: [{
               m: [C]
            }],
            mx: [{
               mx: [C]
            }],
            my: [{
               my: [C]
            }],
            ms: [{
               ms: [C]
            }],
            me: [{
               me: [C]
            }],
            mt: [{
               mt: [C]
            }],
            mr: [{
               mr: [C]
            }],
            mb: [{
               mb: [C]
            }],
            ml: [{
               ml: [C]
            }],
            "space-x": [{
               "space-x": [Y]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
               "space-y": [Y]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
               w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Me, e]
            }],
            "min-w": [{
               "min-w": [Me, e, "min", "max", "fit"]
            }],
            "max-w": [{
               "max-w": [Me, e, "none", "full", "min", "max", "fit", "prose", {
                  screen: [Zr]
               }, Zr]
            }],
            h: [{
               h: [Me, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
               "min-h": [Me, e, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
               "max-h": [Me, e, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
               size: [Me, e, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
               text: ["base", Zr, $r]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
               font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", nf]
            }],
            "font-family": [{
               font: [Ma]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
               tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Me]
            }],
            "line-clamp": [{
               "line-clamp": ["none", Si, nf]
            }],
            leading: [{
               leading: ["none", "tight", "snug", "normal", "relaxed", "loose", dr, Me]
            }],
            "list-image": [{
               "list-image": ["none", Me]
            }],
            "list-style-type": [{
               list: ["none", "disc", "decimal", Me]
            }],
            "list-style-position": [{
               list: ["inside", "outside"]
            }],
            "placeholder-color": [{
               placeholder: [t]
            }],
            "placeholder-opacity": [{
               "placeholder-opacity": [_]
            }],
            "text-alignment": [{
               text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
               text: [t]
            }],
            "text-opacity": [{
               "text-opacity": [_]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
               decoration: [...Se(), "wavy"]
            }],
            "text-decoration-thickness": [{
               decoration: ["auto", "from-font", dr, $r]
            }],
            "underline-offset": [{
               "underline-offset": ["auto", dr, Me]
            }],
            "text-decoration-color": [{
               decoration: [t]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
               text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
               indent: X()
            }],
            "vertical-align": [{
               align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Me]
            }],
            whitespace: [{
               whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
               break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
               hyphens: ["none", "manual", "auto"]
            }],
            content: [{
               content: ["none", Me]
            }],
            "bg-attachment": [{
               bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
               "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
               "bg-opacity": [_]
            }],
            "bg-origin": [{
               "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
               bg: [..._e(), WT]
            }],
            "bg-repeat": [{
               bg: ["no-repeat", {
                  repeat: ["", "x", "y", "round", "space"]
               }]
            }],
            "bg-size": [{
               bg: ["auto", "cover", "contain", ZT]
            }],
            "bg-image": [{
               bg: ["none", {
                  "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
               }, QT]
            }],
            "bg-color": [{
               bg: [t]
            }],
            "gradient-from-pos": [{
               from: [P]
            }],
            "gradient-via-pos": [{
               via: [P]
            }],
            "gradient-to-pos": [{
               to: [P]
            }],
            "gradient-from": [{
               from: [T]
            }],
            "gradient-via": [{
               via: [T]
            }],
            "gradient-to": [{
               to: [T]
            }],
            rounded: [{
               rounded: [l]
            }],
            "rounded-s": [{
               "rounded-s": [l]
            }],
            "rounded-e": [{
               "rounded-e": [l]
            }],
            "rounded-t": [{
               "rounded-t": [l]
            }],
            "rounded-r": [{
               "rounded-r": [l]
            }],
            "rounded-b": [{
               "rounded-b": [l]
            }],
            "rounded-l": [{
               "rounded-l": [l]
            }],
            "rounded-ss": [{
               "rounded-ss": [l]
            }],
            "rounded-se": [{
               "rounded-se": [l]
            }],
            "rounded-ee": [{
               "rounded-ee": [l]
            }],
            "rounded-es": [{
               "rounded-es": [l]
            }],
            "rounded-tl": [{
               "rounded-tl": [l]
            }],
            "rounded-tr": [{
               "rounded-tr": [l]
            }],
            "rounded-br": [{
               "rounded-br": [l]
            }],
            "rounded-bl": [{
               "rounded-bl": [l]
            }],
            "border-w": [{
               border: [d]
            }],
            "border-w-x": [{
               "border-x": [d]
            }],
            "border-w-y": [{
               "border-y": [d]
            }],
            "border-w-s": [{
               "border-s": [d]
            }],
            "border-w-e": [{
               "border-e": [d]
            }],
            "border-w-t": [{
               "border-t": [d]
            }],
            "border-w-r": [{
               "border-r": [d]
            }],
            "border-w-b": [{
               "border-b": [d]
            }],
            "border-w-l": [{
               "border-l": [d]
            }],
            "border-opacity": [{
               "border-opacity": [_]
            }],
            "border-style": [{
               border: [...Se(), "hidden"]
            }],
            "divide-x": [{
               "divide-x": [d]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
               "divide-y": [d]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
               "divide-opacity": [_]
            }],
            "divide-style": [{
               divide: Se()
            }],
            "border-color": [{
               border: [a]
            }],
            "border-color-x": [{
               "border-x": [a]
            }],
            "border-color-y": [{
               "border-y": [a]
            }],
            "border-color-s": [{
               "border-s": [a]
            }],
            "border-color-e": [{
               "border-e": [a]
            }],
            "border-color-t": [{
               "border-t": [a]
            }],
            "border-color-r": [{
               "border-r": [a]
            }],
            "border-color-b": [{
               "border-b": [a]
            }],
            "border-color-l": [{
               "border-l": [a]
            }],
            "divide-color": [{
               divide: [a]
            }],
            "outline-style": [{
               outline: ["", ...Se()]
            }],
            "outline-offset": [{
               "outline-offset": [dr, Me]
            }],
            "outline-w": [{
               outline: [dr, $r]
            }],
            "outline-color": [{
               outline: [t]
            }],
            "ring-w": [{
               ring: ge()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
               ring: [t]
            }],
            "ring-opacity": [{
               "ring-opacity": [_]
            }],
            "ring-offset-w": [{
               "ring-offset": [dr, $r]
            }],
            "ring-offset-color": [{
               "ring-offset": [t]
            }],
            shadow: [{
               shadow: ["", "inner", "none", Zr, qT]
            }],
            "shadow-color": [{
               shadow: [Ma]
            }],
            opacity: [{
               opacity: [_]
            }],
            "mix-blend": [{
               "mix-blend": [...fe(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
               "bg-blend": fe()
            }],
            filter: [{
               filter: ["", "none"]
            }],
            blur: [{
               blur: [r]
            }],
            brightness: [{
               brightness: [i]
            }],
            contrast: [{
               contrast: [p]
            }],
            "drop-shadow": [{
               "drop-shadow": ["", "none", Zr, Me]
            }],
            grayscale: [{
               grayscale: [m]
            }],
            "hue-rotate": [{
               "hue-rotate": [y]
            }],
            invert: [{
               invert: [v]
            }],
            saturate: [{
               saturate: [F]
            }],
            sepia: [{
               sepia: [z]
            }],
            "backdrop-filter": [{
               "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
               "backdrop-blur": [r]
            }],
            "backdrop-brightness": [{
               "backdrop-brightness": [i]
            }],
            "backdrop-contrast": [{
               "backdrop-contrast": [p]
            }],
            "backdrop-grayscale": [{
               "backdrop-grayscale": [m]
            }],
            "backdrop-hue-rotate": [{
               "backdrop-hue-rotate": [y]
            }],
            "backdrop-invert": [{
               "backdrop-invert": [v]
            }],
            "backdrop-opacity": [{
               "backdrop-opacity": [_]
            }],
            "backdrop-saturate": [{
               "backdrop-saturate": [F]
            }],
            "backdrop-sepia": [{
               "backdrop-sepia": [z]
            }],
            "border-collapse": [{
               border: ["collapse", "separate"]
            }],
            "border-spacing": [{
               "border-spacing": [u]
            }],
            "border-spacing-x": [{
               "border-spacing-x": [u]
            }],
            "border-spacing-y": [{
               "border-spacing-y": [u]
            }],
            "table-layout": [{
               table: ["auto", "fixed"]
            }],
            caption: [{
               caption: ["top", "bottom"]
            }],
            transition: [{
               transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Me]
            }],
            duration: [{
               duration: A()
            }],
            ease: [{
               ease: ["linear", "in", "out", "in-out", Me]
            }],
            delay: [{
               delay: A()
            }],
            animate: [{
               animate: ["none", "spin", "ping", "pulse", "bounce", Me]
            }],
            transform: [{
               transform: ["", "gpu", "none"]
            }],
            scale: [{
               scale: [$]
            }],
            "scale-x": [{
               "scale-x": [$]
            }],
            "scale-y": [{
               "scale-y": [$]
            }],
            rotate: [{
               rotate: [Ia, Me]
            }],
            "translate-x": [{
               "translate-x": [B]
            }],
            "translate-y": [{
               "translate-y": [B]
            }],
            "skew-x": [{
               "skew-x": [U]
            }],
            "skew-y": [{
               "skew-y": [U]
            }],
            "transform-origin": [{
               origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Me]
            }],
            accent: [{
               accent: ["auto", t]
            }],
            appearance: [{
               appearance: ["none", "auto"]
            }],
            cursor: [{
               cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Me]
            }],
            "caret-color": [{
               caret: [t]
            }],
            "pointer-events": [{
               "pointer-events": ["none", "auto"]
            }],
            resize: [{
               resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
               scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
               "scroll-m": X()
            }],
            "scroll-mx": [{
               "scroll-mx": X()
            }],
            "scroll-my": [{
               "scroll-my": X()
            }],
            "scroll-ms": [{
               "scroll-ms": X()
            }],
            "scroll-me": [{
               "scroll-me": X()
            }],
            "scroll-mt": [{
               "scroll-mt": X()
            }],
            "scroll-mr": [{
               "scroll-mr": X()
            }],
            "scroll-mb": [{
               "scroll-mb": X()
            }],
            "scroll-ml": [{
               "scroll-ml": X()
            }],
            "scroll-p": [{
               "scroll-p": X()
            }],
            "scroll-px": [{
               "scroll-px": X()
            }],
            "scroll-py": [{
               "scroll-py": X()
            }],
            "scroll-ps": [{
               "scroll-ps": X()
            }],
            "scroll-pe": [{
               "scroll-pe": X()
            }],
            "scroll-pt": [{
               "scroll-pt": X()
            }],
            "scroll-pr": [{
               "scroll-pr": X()
            }],
            "scroll-pb": [{
               "scroll-pb": X()
            }],
            "scroll-pl": [{
               "scroll-pl": X()
            }],
            "snap-align": [{
               snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
               snap: ["normal", "always"]
            }],
            "snap-type": [{
               snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
               snap: ["mandatory", "proximity"]
            }],
            touch: [{
               touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
               "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
               "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
               select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
               "will-change": ["auto", "scroll", "contents", "transform", Me]
            }],
            fill: [{
               fill: [t, "none"]
            }],
            "stroke-w": [{
               stroke: [dr, $r, nf]
            }],
            stroke: [{
               stroke: [t, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
               "forced-color-adjust": ["auto", "none"]
            }]
         },
         conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
         },
         conflictingClassGroupModifiers: {
            "font-size": ["leading"]
         }
      }
   },
   JT = MT(XT);

function Ze(...t) {
   return JT(wx(t))
}
const eC = aT,
   _x = b.forwardRef(({
      className: t,
      ...e
   }, r) => f.jsx(hx, {
      ref: r,
      className: Ze("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", t),
      ...e
   }));
_x.displayName = hx.displayName;
const tC = bh("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
      variants: {
         variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
         }
      },
      defaultVariants: {
         variant: "default"
      }
   }),
   Nx = b.forwardRef(({
      className: t,
      variant: e,
      ...r
   }, i) => f.jsx(px, {
      ref: i,
      className: Ze(tC({
         variant: e
      }), t),
      ...r
   }));
Nx.displayName = px.displayName;
const nC = b.forwardRef(({
   className: t,
   ...e
}, r) => f.jsx(yx, {
   ref: r,
   className: Ze("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", t),
   ...e
}));
nC.displayName = yx.displayName;
const Ax = b.forwardRef(({
   className: t,
   ...e
}, r) => f.jsx(vx, {
   ref: r,
   className: Ze("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
   "toast-close": "",
   ...e,
   children: f.jsx(Sx, {
      className: "h-4 w-4"
   })
}));
Ax.displayName = vx.displayName;
const Dx = b.forwardRef(({
   className: t,
   ...e
}, r) => f.jsx(mx, {
   ref: r,
   className: Ze("text-sm font-semibold", t),
   ...e
}));
Dx.displayName = mx.displayName;
const Ix = b.forwardRef(({
   className: t,
   ...e
}, r) => f.jsx(gx, {
   ref: r,
   className: Ze("text-sm opacity-90", t),
   ...e
}));
Ix.displayName = gx.displayName;

function rC() {
   const {
      toasts: t
   } = W0();
   return f.jsxs(eC, {
      children: [t.map(function ({
         id: e,
         title: r,
         description: i,
         action: a,
         ...l
      }) {
         return f.jsxs(Nx, {
            ...l,
            children: [f.jsxs("div", {
               className: "grid gap-1",
               children: [r && f.jsx(Dx, {
                  children: r
               }), i && f.jsx(Ix, {
                  children: i
               })]
            }), a, f.jsx(Ax, {})]
         }, e)
      }), f.jsx(_x, {})]
   })
}
const Mx = b.forwardRef(({
   className: t,
   ...e
}, r) => f.jsx("div", {
   ref: r,
   className: Ze("rounded-lg border bg-card text-card-foreground shadow-sm", t),
   ...e
}));
Mx.displayName = "Card";
const sC = b.forwardRef(({
   className: t,
   ...e
}, r) => f.jsx("div", {
   ref: r,
   className: Ze("flex flex-col space-y-1.5 p-6", t),
   ...e
}));
sC.displayName = "CardHeader";
const iC = b.forwardRef(({
   className: t,
   ...e
}, r) => f.jsx("h3", {
   ref: r,
   className: Ze("text-2xl font-semibold leading-none tracking-tight", t),
   ...e
}));
iC.displayName = "CardTitle";
const aC = b.forwardRef(({
   className: t,
   ...e
}, r) => f.jsx("p", {
   ref: r,
   className: Ze("text-sm text-muted-foreground", t),
   ...e
}));
aC.displayName = "CardDescription";
const Rx = b.forwardRef(({
   className: t,
   ...e
}, r) => f.jsx("div", {
   ref: r,
   className: Ze("p-6 pt-0", t),
   ...e
}));
Rx.displayName = "CardContent";
const oC = b.forwardRef(({
   className: t,
   ...e
}, r) => f.jsx("div", {
   ref: r,
   className: Ze("flex items-center p-6 pt-0", t),
   ...e
}));
oC.displayName = "CardFooter";

function lC() {
   return f.jsx("div", {
      className: "min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300",
      children: f.jsx(Mx, {
         className: "w-full max-w-md mx-4",
         children: f.jsxs(Rx, {
            className: "pt-6",
            children: [f.jsxs("div", {
               className: "flex mb-4 gap-2",
               children: [f.jsx(dT, {
                  className: "h-8 w-8 text-red-500"
               }), f.jsx("h1", {
                  className: "text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300",
                  children: "404 Page Not Found"
               })]
            }), f.jsx("p", {
               className: "mt-4 text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300",
               children: "Did you forget to add the page to the router?"
            })]
         })
      })
   })
}
const Ox = b.createContext({});

function Lx(t) {
   const e = b.useRef(null);
   return e.current === null && (e.current = t()), e.current
}
const Th = b.createContext(null),
   Fx = b.createContext({
      transformPagePoint: t => t,
      isStatic: !1,
      reducedMotion: "never"
   });

function cC(t = !0) {
   const e = b.useContext(Th);
   if (e === null) return [!0, null];
   const {
      isPresent: r,
      onExitComplete: i,
      register: a
   } = e, l = b.useId();
   b.useEffect(() => {
      t && a(l)
   }, [t]);
   const u = b.useCallback(() => t && i && i(l), [l, i, t]);
   return !r && i ? [!1, u] : [!0]
}
const Ch = typeof window < "u",
   Vx = Ch ? b.useLayoutEffect : b.useEffect,
   on = t => t;
let zx = on;

function jh(t) {
   let e;
   return () => (e === void 0 && (e = t()), e)
}
const Fi = (t, e, r) => {
      const i = e - t;
      return i === 0 ? 1 : (r - t) / i
   },
   vr = t => t * 1e3,
   xr = t => t / 1e3,
   uC = {
      useManualTiming: !1
   };

function dC(t) {
   let e = new Set,
      r = new Set,
      i = !1,
      a = !1;
   const l = new WeakSet;
   let u = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
   };

   function d(m) {
      l.has(m) && (p.schedule(m), t()), m(u)
   }
   const p = {
      schedule: (m, y = !1, v = !1) => {
         const T = v && i ? e : r;
         return y && l.add(m), T.has(m) || T.add(m), m
      },
      cancel: m => {
         r.delete(m), l.delete(m)
      },
      process: m => {
         if (u = m, i) {
            a = !0;
            return
         }
         i = !0, [e, r] = [r, e], e.forEach(d), e.clear(), i = !1, a && (a = !1, p.process(m))
      }
   };
   return p
}
const ec = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
   fC = 40;

function Bx(t, e) {
   let r = !1,
      i = !0;
   const a = {
         delta: 0,
         timestamp: 0,
         isProcessing: !1
      },
      l = () => r = !0,
      u = ec.reduce((_, D) => (_[D] = dC(l), _), {}),
      {
         read: d,
         resolveKeyframes: p,
         update: m,
         preRender: y,
         render: v,
         postRender: w
      } = u,
      T = () => {
         const _ = performance.now();
         r = !1, a.delta = i ? 1e3 / 60 : Math.max(Math.min(_ - a.timestamp, fC), 1), a.timestamp = _, a.isProcessing = !0, d.process(a), p.process(a), m.process(a), y.process(a), v.process(a), w.process(a), a.isProcessing = !1, r && e && (i = !1, t(T))
      },
      P = () => {
         r = !0, i = !0, a.isProcessing || t(T)
      };
   return {
      schedule: ec.reduce((_, D) => {
         const F = u[D];
         return _[D] = ($, z = !1, U = !1) => (r || P(), F.schedule($, z, U)), _
      }, {}),
      cancel: _ => {
         for (let D = 0; D < ec.length; D++) u[ec[D]].cancel(_)
      },
      state: a,
      steps: u
   }
}
const {
   schedule: et,
   cancel: ns,
   state: Pt,
   steps: rf
} = Bx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : on, !0), Ux = b.createContext({
   strict: !1
}), jy = {
   animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
   exit: ["exit"],
   drag: ["drag", "dragControls"],
   focus: ["whileFocus"],
   hover: ["whileHover", "onHoverStart", "onHoverEnd"],
   tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
   pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
   inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
   layout: ["layout", "layoutId"]
}, Vi = {};
for (const t in jy) Vi[t] = {
   isEnabled: e => jy[t].some(r => !!e[r])
};

function hC(t) {
   for (const e in t) Vi[e] = {
      ...Vi[e],
      ...t[e]
   }
}
const pC = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function gc(t) {
   return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || pC.has(t)
}
let $x = t => !gc(t);

function mC(t) {
   t && ($x = e => e.startsWith("on") ? !gc(e) : t(e))
}
try {
   mC(require("@emotion/is-prop-valid").default)
} catch {}

function gC(t, e, r) {
   const i = {};
   for (const a in t) a === "values" && typeof t.values == "object" || ($x(a) || r === !0 && gc(a) || !e && !gc(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
   return i
}

function yC(t) {
   if (typeof Proxy > "u") return t;
   const e = new Map,
      r = (...i) => t(...i);
   return new Proxy(r, {
      get: (i, a) => a === "create" ? t : (e.has(a) || e.set(a, t(a)), e.get(a))
   })
}
const Uc = b.createContext({});

function oo(t) {
   return typeof t == "string" || Array.isArray(t)
}

function $c(t) {
   return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Eh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
   Ph = ["initial", ...Eh];

function Zc(t) {
   return $c(t.animate) || Ph.some(e => oo(t[e]))
}

function Zx(t) {
   return !!(Zc(t) || t.variants)
}

function vC(t, e) {
   if (Zc(t)) {
      const {
         initial: r,
         animate: i
      } = t;
      return {
         initial: r === !1 || oo(r) ? r : void 0,
         animate: oo(i) ? i : void 0
      }
   }
   return t.inherit !== !1 ? e : {}
}

function xC(t) {
   const {
      initial: e,
      animate: r
   } = vC(t, b.useContext(Uc));
   return b.useMemo(() => ({
      initial: e,
      animate: r
   }), [Ey(e), Ey(r)])
}

function Ey(t) {
   return Array.isArray(t) ? t.join(" ") : t
}
const wC = Symbol.for("motionComponentSymbol");

function yi(t) {
   return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}

function bC(t, e, r) {
   return b.useCallback(i => {
      i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), r && (typeof r == "function" ? r(i) : yi(r) && (r.current = i))
   }, [e])
}
const _h = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
   kC = "framerAppearId",
   Wx = "data-" + _h(kC),
   {
      schedule: Nh
   } = Bx(queueMicrotask, !1),
   Hx = b.createContext({});

function SC(t, e, r, i, a) {
   var l, u;
   const {
      visualElement: d
   } = b.useContext(Uc), p = b.useContext(Ux), m = b.useContext(Th), y = b.useContext(Fx).reducedMotion, v = b.useRef(null);
   i = i || p.renderer, !v.current && i && (v.current = i(t, {
      visualState: e,
      parent: d,
      props: r,
      presenceContext: m,
      blockInitialAnimation: m ? m.initial === !1 : !1,
      reducedMotionConfig: y
   }));
   const w = v.current,
      T = b.useContext(Hx);
   w && !w.projection && a && (w.type === "html" || w.type === "svg") && TC(v.current, r, a, T);
   const P = b.useRef(!1);
   b.useInsertionEffect(() => {
      w && P.current && w.update(r, m)
   });
   const S = r[Wx],
      C = b.useRef(!!S && !(!((l = window.MotionHandoffIsComplete) === null || l === void 0) && l.call(window, S)) && ((u = window.MotionHasOptimisedAnimation) === null || u === void 0 ? void 0 : u.call(window, S)));
   return Vx(() => {
      w && (P.current = !0, window.MotionIsMounted = !0, w.updateFeatures(), Nh.render(w.render), C.current && w.animationState && w.animationState.animateChanges())
   }), b.useEffect(() => {
      w && (!C.current && w.animationState && w.animationState.animateChanges(), C.current && (queueMicrotask(() => {
         var _;
         (_ = window.MotionHandoffMarkAsComplete) === null || _ === void 0 || _.call(window, S)
      }), C.current = !1))
   }), w
}

function TC(t, e, r, i) {
   const {
      layoutId: a,
      layout: l,
      drag: u,
      dragConstraints: d,
      layoutScroll: p,
      layoutRoot: m
   } = e;
   t.projection = new r(t.latestValues, e["data-framer-portal-id"] ? void 0 : Qx(t.parent)), t.projection.setOptions({
      layoutId: a,
      layout: l,
      alwaysMeasureLayout: !!u || d && yi(d),
      visualElement: t,
      animationType: typeof l == "string" ? l : "both",
      initialPromotionConfig: i,
      layoutScroll: p,
      layoutRoot: m
   })
}

function Qx(t) {
   if (t) return t.options.allowProjection !== !1 ? t.projection : Qx(t.parent)
}

function CC({
   preloadedFeatures: t,
   createVisualElement: e,
   useRender: r,
   useVisualState: i,
   Component: a
}) {
   var l, u;
   t && hC(t);

   function d(m, y) {
      let v;
      const w = {
            ...b.useContext(Fx),
            ...m,
            layoutId: jC(m)
         },
         {
            isStatic: T
         } = w,
         P = xC(m),
         S = i(m, T);
      if (!T && Ch) {
         EC();
         const C = PC(w);
         v = C.MeasureLayout, P.visualElement = SC(a, S, w, e, C.ProjectionNode)
      }
      return f.jsxs(Uc.Provider, {
         value: P,
         children: [v && P.visualElement ? f.jsx(v, {
            visualElement: P.visualElement,
            ...w
         }) : null, r(a, m, bC(S, P.visualElement, y), S, T, P.visualElement)]
      })
   }
   d.displayName = `motion.${typeof a=="string"?a:`create(${(u=(l=a.displayName)!==null&&l!==void 0?l:a.name)!==null&&u!==void 0?u:""})`}`;
   const p = b.forwardRef(d);
   return p[wC] = a, p
}

function jC({
   layoutId: t
}) {
   const e = b.useContext(Ox).id;
   return e && t !== void 0 ? e + "-" + t : t
}

function EC(t, e) {
   b.useContext(Ux).strict
}

function PC(t) {
   const {
      drag: e,
      layout: r
   } = Vi;
   if (!e && !r) return {};
   const i = {
      ...e,
      ...r
   };
   return {
      MeasureLayout: e != null && e.isEnabled(t) || r != null && r.isEnabled(t) ? i.MeasureLayout : void 0,
      ProjectionNode: i.ProjectionNode
   }
}
const _C = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Ah(t) {
   return typeof t != "string" || t.includes("-") ? !1 : !!(_C.indexOf(t) > -1 || /[A-Z]/u.test(t))
}

function Py(t) {
   const e = [{}, {}];
   return t == null || t.values.forEach((r, i) => {
      e[0][i] = r.get(), e[1][i] = r.getVelocity()
   }), e
}

function Dh(t, e, r, i) {
   if (typeof e == "function") {
      const [a, l] = Py(i);
      e = e(r !== void 0 ? r : t.custom, a, l)
   }
   if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
      const [a, l] = Py(i);
      e = e(r !== void 0 ? r : t.custom, a, l)
   }
   return e
}
const Lf = t => Array.isArray(t),
   NC = t => !!(t && typeof t == "object" && t.mix && t.toValue),
   AC = t => Lf(t) ? t[t.length - 1] || 0 : t,
   Lt = t => !!(t && t.getVelocity);

function lc(t) {
   const e = Lt(t) ? t.get() : t;
   return NC(e) ? e.toValue() : e
}

function DC({
   scrapeMotionValuesFromProps: t,
   createRenderState: e,
   onUpdate: r
}, i, a, l) {
   const u = {
      latestValues: IC(i, a, l, t),
      renderState: e()
   };
   return r && (u.onMount = d => r({
      props: i,
      current: d,
      ...u
   }), u.onUpdate = d => r(d)), u
}
const qx = t => (e, r) => {
   const i = b.useContext(Uc),
      a = b.useContext(Th),
      l = () => DC(t, e, i, a);
   return r ? l() : Lx(l)
};

function IC(t, e, r, i) {
   const a = {},
      l = i(t, {});
   for (const w in l) a[w] = lc(l[w]);
   let {
      initial: u,
      animate: d
   } = t;
   const p = Zc(t),
      m = Zx(t);
   e && m && !p && t.inherit !== !1 && (u === void 0 && (u = e.initial), d === void 0 && (d = e.animate));
   let y = r ? r.initial === !1 : !1;
   y = y || u === !1;
   const v = y ? d : u;
   if (v && typeof v != "boolean" && !$c(v)) {
      const w = Array.isArray(v) ? v : [v];
      for (let T = 0; T < w.length; T++) {
         const P = Dh(t, w[T]);
         if (P) {
            const {
               transitionEnd: S,
               transition: C,
               ..._
            } = P;
            for (const D in _) {
               let F = _[D];
               if (Array.isArray(F)) {
                  const $ = y ? F.length - 1 : 0;
                  F = F[$]
               }
               F !== null && (a[D] = F)
            }
            for (const D in S) a[D] = S[D]
         }
      }
   }
   return a
}
const Hi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
   Us = new Set(Hi),
   Kx = t => e => typeof e == "string" && e.startsWith(t),
   Gx = Kx("--"),
   MC = Kx("var(--"),
   Ih = t => MC(t) ? RC.test(t.split("/*")[0].trim()) : !1,
   RC = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
   Yx = (t, e) => e && typeof t == "number" ? e.transform(t) : t,
   br = (t, e, r) => r > e ? e : r < t ? t : r,
   Qi = {
      test: t => typeof t == "number",
      parse: parseFloat,
      transform: t => t
   },
   lo = {
      ...Qi,
      transform: t => br(0, 1, t)
   },
   tc = {
      ...Qi,
      default: 1
   },
   Ao = t => ({
      test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
      parse: parseFloat,
      transform: e => `${e}${t}`
   }),
   Wr = Ao("deg"),
   qn = Ao("%"),
   ke = Ao("px"),
   OC = Ao("vh"),
   LC = Ao("vw"),
   _y = {
      ...qn,
      parse: t => qn.parse(t) / 100,
      transform: t => qn.transform(t * 100)
   },
   FC = {
      borderWidth: ke,
      borderTopWidth: ke,
      borderRightWidth: ke,
      borderBottomWidth: ke,
      borderLeftWidth: ke,
      borderRadius: ke,
      radius: ke,
      borderTopLeftRadius: ke,
      borderTopRightRadius: ke,
      borderBottomRightRadius: ke,
      borderBottomLeftRadius: ke,
      width: ke,
      maxWidth: ke,
      height: ke,
      maxHeight: ke,
      top: ke,
      right: ke,
      bottom: ke,
      left: ke,
      padding: ke,
      paddingTop: ke,
      paddingRight: ke,
      paddingBottom: ke,
      paddingLeft: ke,
      margin: ke,
      marginTop: ke,
      marginRight: ke,
      marginBottom: ke,
      marginLeft: ke,
      backgroundPositionX: ke,
      backgroundPositionY: ke
   },
   VC = {
      rotate: Wr,
      rotateX: Wr,
      rotateY: Wr,
      rotateZ: Wr,
      scale: tc,
      scaleX: tc,
      scaleY: tc,
      scaleZ: tc,
      skew: Wr,
      skewX: Wr,
      skewY: Wr,
      distance: ke,
      translateX: ke,
      translateY: ke,
      translateZ: ke,
      x: ke,
      y: ke,
      z: ke,
      perspective: ke,
      transformPerspective: ke,
      opacity: lo,
      originX: _y,
      originY: _y,
      originZ: ke
   },
   Ny = {
      ...Qi,
      transform: Math.round
   },
   Mh = {
      ...FC,
      ...VC,
      zIndex: Ny,
      size: ke,
      fillOpacity: lo,
      strokeOpacity: lo,
      numOctaves: Ny
   },
   zC = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective"
   },
   BC = Hi.length;

function UC(t, e, r) {
   let i = "",
      a = !0;
   for (let l = 0; l < BC; l++) {
      const u = Hi[l],
         d = t[u];
      if (d === void 0) continue;
      let p = !0;
      if (typeof d == "number" ? p = d === (u.startsWith("scale") ? 1 : 0) : p = parseFloat(d) === 0, !p || r) {
         const m = Yx(d, Mh[u]);
         if (!p) {
            a = !1;
            const y = zC[u] || u;
            i += `${y}(${m}) `
         }
         r && (e[u] = m)
      }
   }
   return i = i.trim(), r ? i = r(e, a ? "" : i) : a && (i = "none"), i
}

function Rh(t, e, r) {
   const {
      style: i,
      vars: a,
      transformOrigin: l
   } = t;
   let u = !1,
      d = !1;
   for (const p in e) {
      const m = e[p];
      if (Us.has(p)) {
         u = !0;
         continue
      } else if (Gx(p)) {
         a[p] = m;
         continue
      } else {
         const y = Yx(m, Mh[p]);
         p.startsWith("origin") ? (d = !0, l[p] = y) : i[p] = y
      }
   }
   if (e.transform || (u || r ? i.transform = UC(e, t.transform, r) : i.transform && (i.transform = "none")), d) {
      const {
         originX: p = "50%",
         originY: m = "50%",
         originZ: y = 0
      } = l;
      i.transformOrigin = `${p} ${m} ${y}`
   }
}
const $C = {
      offset: "stroke-dashoffset",
      array: "stroke-dasharray"
   },
   ZC = {
      offset: "strokeDashoffset",
      array: "strokeDasharray"
   };

function WC(t, e, r = 1, i = 0, a = !0) {
   t.pathLength = 1;
   const l = a ? $C : ZC;
   t[l.offset] = ke.transform(-i);
   const u = ke.transform(e),
      d = ke.transform(r);
   t[l.array] = `${u} ${d}`
}

function Ay(t, e, r) {
   return typeof t == "string" ? t : ke.transform(e + r * t)
}

function HC(t, e, r) {
   const i = Ay(e, t.x, t.width),
      a = Ay(r, t.y, t.height);
   return `${i} ${a}`
}

function Oh(t, {
   attrX: e,
   attrY: r,
   attrScale: i,
   originX: a,
   originY: l,
   pathLength: u,
   pathSpacing: d = 1,
   pathOffset: p = 0,
   ...m
}, y, v) {
   if (Rh(t, m, v), y) {
      t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
      return
   }
   t.attrs = t.style, t.style = {};
   const {
      attrs: w,
      style: T,
      dimensions: P
   } = t;
   w.transform && (P && (T.transform = w.transform), delete w.transform), P && (a !== void 0 || l !== void 0 || T.transform) && (T.transformOrigin = HC(P, a !== void 0 ? a : .5, l !== void 0 ? l : .5)), e !== void 0 && (w.x = e), r !== void 0 && (w.y = r), i !== void 0 && (w.scale = i), u !== void 0 && WC(w, u, d, p, !1)
}
const Lh = () => ({
      style: {},
      transform: {},
      transformOrigin: {},
      vars: {}
   }),
   Xx = () => ({
      ...Lh(),
      attrs: {}
   }),
   Fh = t => typeof t == "string" && t.toLowerCase() === "svg";

function Jx(t, {
   style: e,
   vars: r
}, i, a) {
   Object.assign(t.style, e, a && a.getProjectionStyles(i));
   for (const l in r) t.style.setProperty(l, r[l])
}
const ew = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function tw(t, e, r, i) {
   Jx(t, e, void 0, i);
   for (const a in e.attrs) t.setAttribute(ew.has(a) ? a : _h(a), e.attrs[a])
}
const yc = {};

function QC(t) {
   Object.assign(yc, t)
}

function nw(t, {
   layout: e,
   layoutId: r
}) {
   return Us.has(t) || t.startsWith("origin") || (e || r !== void 0) && (!!yc[t] || t === "opacity")
}

function Vh(t, e, r) {
   var i;
   const {
      style: a
   } = t, l = {};
   for (const u in a)(Lt(a[u]) || e.style && Lt(e.style[u]) || nw(u, t) || ((i = r == null ? void 0 : r.getValue(u)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (l[u] = a[u]);
   return l
}

function rw(t, e, r) {
   const i = Vh(t, e, r);
   for (const a in t)
      if (Lt(t[a]) || Lt(e[a])) {
         const l = Hi.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
         i[l] = t[a]
      } return i
}

function qC(t, e) {
   try {
      e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
   } catch {
      e.dimensions = {
         x: 0,
         y: 0,
         width: 0,
         height: 0
      }
   }
}
const Dy = ["x", "y", "width", "height", "cx", "cy", "r"],
   KC = {
      useVisualState: qx({
         scrapeMotionValuesFromProps: rw,
         createRenderState: Xx,
         onUpdate: ({
            props: t,
            prevProps: e,
            current: r,
            renderState: i,
            latestValues: a
         }) => {
            if (!r) return;
            let l = !!t.drag;
            if (!l) {
               for (const d in a)
                  if (Us.has(d)) {
                     l = !0;
                     break
                  }
            }
            if (!l) return;
            let u = !e;
            if (e)
               for (let d = 0; d < Dy.length; d++) {
                  const p = Dy[d];
                  t[p] !== e[p] && (u = !0)
               }
            u && et.read(() => {
               qC(r, i), et.render(() => {
                  Oh(i, a, Fh(r.tagName), t.transformTemplate), tw(r, i)
               })
            })
         }
      })
   },
   GC = {
      useVisualState: qx({
         scrapeMotionValuesFromProps: Vh,
         createRenderState: Lh
      })
   };

function sw(t, e, r) {
   for (const i in e) !Lt(e[i]) && !nw(i, r) && (t[i] = e[i])
}

function YC({
   transformTemplate: t
}, e) {
   return b.useMemo(() => {
      const r = Lh();
      return Rh(r, e, t), Object.assign({}, r.vars, r.style)
   }, [e])
}

function XC(t, e) {
   const r = t.style || {},
      i = {};
   return sw(i, r, t), Object.assign(i, YC(t, e)), i
}

function JC(t, e) {
   const r = {},
      i = XC(t, e);
   return t.drag && t.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = i, r
}

function ej(t, e, r, i) {
   const a = b.useMemo(() => {
      const l = Xx();
      return Oh(l, e, Fh(i), t.transformTemplate), {
         ...l.attrs,
         style: {
            ...l.style
         }
      }
   }, [e]);
   if (t.style) {
      const l = {};
      sw(l, t.style, t), a.style = {
         ...l,
         ...a.style
      }
   }
   return a
}

function tj(t = !1) {
   return (r, i, a, {
      latestValues: l
   }, u) => {
      const p = (Ah(r) ? ej : JC)(i, l, u, r),
         m = gC(i, typeof r == "string", t),
         y = r !== b.Fragment ? {
            ...m,
            ...p,
            ref: a
         } : {},
         {
            children: v
         } = i,
         w = b.useMemo(() => Lt(v) ? v.get() : v, [v]);
      return b.createElement(r, {
         ...y,
         children: w
      })
   }
}

function nj(t, e) {
   return function (i, {
      forwardMotionProps: a
   } = {
      forwardMotionProps: !1
   }) {
      const u = {
         ...Ah(i) ? KC : GC,
         preloadedFeatures: t,
         useRender: tj(a),
         createVisualElement: e,
         Component: i
      };
      return CC(u)
   }
}

function iw(t, e) {
   if (!Array.isArray(e)) return !1;
   const r = e.length;
   if (r !== t.length) return !1;
   for (let i = 0; i < r; i++)
      if (e[i] !== t[i]) return !1;
   return !0
}

function Wc(t, e, r) {
   const i = t.getProps();
   return Dh(i, e, r !== void 0 ? r : i.custom, t)
}
const rj = jh(() => window.ScrollTimeline !== void 0);
class sj {
   constructor(e) {
      this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
   }
   get finished() {
      return Promise.all(this.animations.map(e => "finished" in e ? e.finished : e))
   }
   getAll(e) {
      return this.animations[0][e]
   }
   setAll(e, r) {
      for (let i = 0; i < this.animations.length; i++) this.animations[i][e] = r
   }
   attachTimeline(e, r) {
      const i = this.animations.map(a => {
         if (rj() && a.attachTimeline) return a.attachTimeline(e);
         if (typeof r == "function") return r(a)
      });
      return () => {
         i.forEach((a, l) => {
            a && a(), this.animations[l].stop()
         })
      }
   }
   get time() {
      return this.getAll("time")
   }
   set time(e) {
      this.setAll("time", e)
   }
   get speed() {
      return this.getAll("speed")
   }
   set speed(e) {
      this.setAll("speed", e)
   }
   get startTime() {
      return this.getAll("startTime")
   }
   get duration() {
      let e = 0;
      for (let r = 0; r < this.animations.length; r++) e = Math.max(e, this.animations[r].duration);
      return e
   }
   runAll(e) {
      this.animations.forEach(r => r[e]())
   }
   flatten() {
      this.runAll("flatten")
   }
   play() {
      this.runAll("play")
   }
   pause() {
      this.runAll("pause")
   }
   cancel() {
      this.runAll("cancel")
   }
   complete() {
      this.runAll("complete")
   }
}
class ij extends sj {
   then(e, r) {
      return Promise.all(this.animations).then(e).catch(r)
   }
}

function zh(t, e) {
   return t ? t[e] || t.default || t : void 0
}
const Ff = 2e4;

function aw(t) {
   let e = 0;
   const r = 50;
   let i = t.next(e);
   for (; !i.done && e < Ff;) e += r, i = t.next(e);
   return e >= Ff ? 1 / 0 : e
}

function Bh(t) {
   return typeof t == "function"
}

function Iy(t, e) {
   t.timeline = e, t.onfinish = null
}
const Uh = t => Array.isArray(t) && typeof t[0] == "number",
   aj = {
      linearEasing: void 0
   };

function oj(t, e) {
   const r = jh(t);
   return () => {
      var i;
      return (i = aj[e]) !== null && i !== void 0 ? i : r()
   }
}
const vc = oj(() => {
      try {
         document.createElement("div").animate({
            opacity: 0
         }, {
            easing: "linear(0, 1)"
         })
      } catch {
         return !1
      }
      return !0
   }, "linearEasing"),
   ow = (t, e, r = 10) => {
      let i = "";
      const a = Math.max(Math.round(e / r), 2);
      for (let l = 0; l < a; l++) i += t(Fi(0, a - 1, l)) + ", ";
      return `linear(${i.substring(0,i.length-2)})`
   };

function lw(t) {
   return !!(typeof t == "function" && vc() || !t || typeof t == "string" && (t in Vf || vc()) || Uh(t) || Array.isArray(t) && t.every(lw))
}
const Ba = ([t, e, r, i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`,
   Vf = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      circIn: Ba([0, .65, .55, 1]),
      circOut: Ba([.55, 0, 1, .45]),
      backIn: Ba([.31, .01, .66, -.59]),
      backOut: Ba([.33, 1.53, .69, .99])
   };

function cw(t, e) {
   if (t) return typeof t == "function" && vc() ? ow(t, e) : Uh(t) ? Ba(t) : Array.isArray(t) ? t.map(r => cw(r, e) || Vf.easeOut) : Vf[t]
}
const _n = {
   x: !1,
   y: !1
};

function uw() {
   return _n.x || _n.y
}

function dw(t, e, r) {
   var i;
   if (t instanceof Element) return [t];
   if (typeof t == "string") {
      let a = document;
      const l = (i = void 0) !== null && i !== void 0 ? i : a.querySelectorAll(t);
      return l ? Array.from(l) : []
   }
   return Array.from(t)
}

function fw(t, e) {
   const r = dw(t),
      i = new AbortController,
      a = {
         passive: !0,
         ...e,
         signal: i.signal
      };
   return [r, a, () => i.abort()]
}

function My(t) {
   return e => {
      e.pointerType === "touch" || uw() || t(e)
   }
}

function lj(t, e, r = {}) {
   const [i, a, l] = fw(t, r), u = My(d => {
      const {
         target: p
      } = d, m = e(d);
      if (typeof m != "function" || !p) return;
      const y = My(v => {
         m(v), p.removeEventListener("pointerleave", y)
      });
      p.addEventListener("pointerleave", y, a)
   });
   return i.forEach(d => {
      d.addEventListener("pointerenter", u, a)
   }), l
}
const hw = (t, e) => e ? t === e ? !0 : hw(t, e.parentElement) : !1,
   $h = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1,
   cj = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function uj(t) {
   return cj.has(t.tagName) || t.tabIndex !== -1
}
const Ua = new WeakSet;

function Ry(t) {
   return e => {
      e.key === "Enter" && t(e)
   }
}

function sf(t, e) {
   t.dispatchEvent(new PointerEvent("pointer" + e, {
      isPrimary: !0,
      bubbles: !0
   }))
}
const dj = (t, e) => {
   const r = t.currentTarget;
   if (!r) return;
   const i = Ry(() => {
      if (Ua.has(r)) return;
      sf(r, "down");
      const a = Ry(() => {
            sf(r, "up")
         }),
         l = () => sf(r, "cancel");
      r.addEventListener("keyup", a, e), r.addEventListener("blur", l, e)
   });
   r.addEventListener("keydown", i, e), r.addEventListener("blur", () => r.removeEventListener("keydown", i), e)
};

function Oy(t) {
   return $h(t) && !uw()
}

function fj(t, e, r = {}) {
   const [i, a, l] = fw(t, r), u = d => {
      const p = d.currentTarget;
      if (!Oy(d) || Ua.has(p)) return;
      Ua.add(p);
      const m = e(d),
         y = (T, P) => {
            window.removeEventListener("pointerup", v), window.removeEventListener("pointercancel", w), !(!Oy(T) || !Ua.has(p)) && (Ua.delete(p), typeof m == "function" && m(T, {
               success: P
            }))
         },
         v = T => {
            y(T, r.useGlobalTarget || hw(p, T.target))
         },
         w = T => {
            y(T, !1)
         };
      window.addEventListener("pointerup", v, a), window.addEventListener("pointercancel", w, a)
   };
   return i.forEach(d => {
      !uj(d) && d.getAttribute("tabindex") === null && (d.tabIndex = 0), (r.useGlobalTarget ? window : d).addEventListener("pointerdown", u, a), d.addEventListener("focus", m => dj(m, a), a)
   }), l
}

function hj(t) {
   return t === "x" || t === "y" ? _n[t] ? null : (_n[t] = !0, () => {
      _n[t] = !1
   }) : _n.x || _n.y ? null : (_n.x = _n.y = !0, () => {
      _n.x = _n.y = !1
   })
}
const pw = new Set(["width", "height", "top", "left", "right", "bottom", ...Hi]);
let cc;

function pj() {
   cc = void 0
}
const Kn = {
   now: () => (cc === void 0 && Kn.set(Pt.isProcessing || uC.useManualTiming ? Pt.timestamp : performance.now()), cc),
   set: t => {
      cc = t, queueMicrotask(pj)
   }
};

function Zh(t, e) {
   t.indexOf(e) === -1 && t.push(e)
}

function Wh(t, e) {
   const r = t.indexOf(e);
   r > -1 && t.splice(r, 1)
}
class Hh {
   constructor() {
      this.subscriptions = []
   }
   add(e) {
      return Zh(this.subscriptions, e), () => Wh(this.subscriptions, e)
   }
   notify(e, r, i) {
      const a = this.subscriptions.length;
      if (a)
         if (a === 1) this.subscriptions[0](e, r, i);
         else
            for (let l = 0; l < a; l++) {
               const u = this.subscriptions[l];
               u && u(e, r, i)
            }
   }
   getSize() {
      return this.subscriptions.length
   }
   clear() {
      this.subscriptions.length = 0
   }
}

function mw(t, e) {
   return e ? t * (1e3 / e) : 0
}
const Ly = 30,
   mj = t => !isNaN(parseFloat(t));
class gj {
   constructor(e, r = {}) {
      this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i, a = !0) => {
         const l = Kn.now();
         this.updatedAt !== l && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), a && this.events.renderRequest && this.events.renderRequest.notify(this.current)
      }, this.hasAnimated = !1, this.setCurrent(e), this.owner = r.owner
   }
   setCurrent(e) {
      this.current = e, this.updatedAt = Kn.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = mj(this.current))
   }
   setPrevFrameValue(e = this.current) {
      this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
   }
   onChange(e) {
      return this.on("change", e)
   }
   on(e, r) {
      this.events[e] || (this.events[e] = new Hh);
      const i = this.events[e].add(r);
      return e === "change" ? () => {
         i(), et.read(() => {
            this.events.change.getSize() || this.stop()
         })
      } : i
   }
   clearListeners() {
      for (const e in this.events) this.events[e].clear()
   }
   attach(e, r) {
      this.passiveEffect = e, this.stopPassiveEffect = r
   }
   set(e, r = !0) {
      !r || !this.passiveEffect ? this.updateAndNotify(e, r) : this.passiveEffect(e, this.updateAndNotify)
   }
   setWithVelocity(e, r, i) {
      this.set(r), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i
   }
   jump(e, r = !0) {
      this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
   }
   get() {
      return this.current
   }
   getPrevious() {
      return this.prev
   }
   getVelocity() {
      const e = Kn.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Ly) return 0;
      const r = Math.min(this.updatedAt - this.prevUpdatedAt, Ly);
      return mw(parseFloat(this.current) - parseFloat(this.prevFrameValue), r)
   }
   start(e) {
      return this.stop(), new Promise(r => {
         this.hasAnimated = !0, this.animation = e(r), this.events.animationStart && this.events.animationStart.notify()
      }).then(() => {
         this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
      })
   }
   stop() {
      this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
   }
   isAnimating() {
      return !!this.animation
   }
   clearAnimation() {
      delete this.animation
   }
   destroy() {
      this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
   }
}

function co(t, e) {
   return new gj(t, e)
}

function yj(t, e, r) {
   t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, co(r))
}

function Qh(t, e) {
   const r = Wc(t, e);
   let {
      transitionEnd: i = {},
      transition: a = {},
      ...l
   } = r || {};
   l = {
      ...l,
      ...i
   };
   for (const u in l) {
      const d = AC(l[u]);
      yj(t, u, d)
   }
}

function vj(t) {
   return !!(Lt(t) && t.add)
}

function zf(t, e) {
   const r = t.getValue("willChange");
   if (vj(r)) return r.add(e)
}

function gw(t) {
   return t.props[Wx]
}
const yw = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t,
   xj = 1e-7,
   wj = 12;

function bj(t, e, r, i, a) {
   let l, u, d = 0;
   do u = e + (r - e) / 2, l = yw(u, i, a) - t, l > 0 ? r = u : e = u; while (Math.abs(l) > xj && ++d < wj);
   return u
}

function Do(t, e, r, i) {
   if (t === e && r === i) return on;
   const a = l => bj(l, 0, 1, t, r);
   return l => l === 0 || l === 1 ? l : yw(a(l), e, i)
}
const vw = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
   xw = t => e => 1 - t(1 - e),
   ww = Do(.33, 1.53, .69, .99),
   qh = xw(ww),
   bw = vw(qh),
   kw = t => (t *= 2) < 1 ? .5 * qh(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
   Kh = t => 1 - Math.sin(Math.acos(t)),
   Sw = xw(Kh),
   Tw = vw(Kh),
   Cw = t => /^0[^.\s]+$/u.test(t);

function kj(t) {
   return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Cw(t) : !0
}
const Ja = t => Math.round(t * 1e5) / 1e5,
   Gh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Sj(t) {
   return t == null
}
const Tj = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
   Yh = (t, e) => r => !!(typeof r == "string" && Tj.test(r) && r.startsWith(t) || e && !Sj(r) && Object.prototype.hasOwnProperty.call(r, e)),
   jw = (t, e, r) => i => {
      if (typeof i != "string") return i;
      const [a, l, u, d] = i.match(Gh);
      return {
         [t]: parseFloat(a),
         [e]: parseFloat(l),
         [r]: parseFloat(u),
         alpha: d !== void 0 ? parseFloat(d) : 1
      }
   },
   Cj = t => br(0, 255, t),
   af = {
      ...Qi,
      transform: t => Math.round(Cj(t))
   },
   Ps = {
      test: Yh("rgb", "red"),
      parse: jw("red", "green", "blue"),
      transform: ({
         red: t,
         green: e,
         blue: r,
         alpha: i = 1
      }) => "rgba(" + af.transform(t) + ", " + af.transform(e) + ", " + af.transform(r) + ", " + Ja(lo.transform(i)) + ")"
   };

function jj(t) {
   let e = "",
      r = "",
      i = "",
      a = "";
   return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), i = t.substring(5, 7), a = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), i = t.substring(3, 4), a = t.substring(4, 5), e += e, r += r, i += i, a += a), {
      red: parseInt(e, 16),
      green: parseInt(r, 16),
      blue: parseInt(i, 16),
      alpha: a ? parseInt(a, 16) / 255 : 1
   }
}
const Bf = {
      test: Yh("#"),
      parse: jj,
      transform: Ps.transform
   },
   vi = {
      test: Yh("hsl", "hue"),
      parse: jw("hue", "saturation", "lightness"),
      transform: ({
         hue: t,
         saturation: e,
         lightness: r,
         alpha: i = 1
      }) => "hsla(" + Math.round(t) + ", " + qn.transform(Ja(e)) + ", " + qn.transform(Ja(r)) + ", " + Ja(lo.transform(i)) + ")"
   },
   Ot = {
      test: t => Ps.test(t) || Bf.test(t) || vi.test(t),
      parse: t => Ps.test(t) ? Ps.parse(t) : vi.test(t) ? vi.parse(t) : Bf.parse(t),
      transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? Ps.transform(t) : vi.transform(t)
   },
   Ej = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function Pj(t) {
   var e, r;
   return isNaN(t) && typeof t == "string" && (((e = t.match(Gh)) === null || e === void 0 ? void 0 : e.length) || 0) + (((r = t.match(Ej)) === null || r === void 0 ? void 0 : r.length) || 0) > 0
}
const Ew = "number",
   Pw = "color",
   _j = "var",
   Nj = "var(",
   Fy = "${}",
   Aj = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function uo(t) {
   const e = t.toString(),
      r = [],
      i = {
         color: [],
         number: [],
         var: []
      },
      a = [];
   let l = 0;
   const d = e.replace(Aj, p => (Ot.test(p) ? (i.color.push(l), a.push(Pw), r.push(Ot.parse(p))) : p.startsWith(Nj) ? (i.var.push(l), a.push(_j), r.push(p)) : (i.number.push(l), a.push(Ew), r.push(parseFloat(p))), ++l, Fy)).split(Fy);
   return {
      values: r,
      split: d,
      indexes: i,
      types: a
   }
}

function _w(t) {
   return uo(t).values
}

function Nw(t) {
   const {
      split: e,
      types: r
   } = uo(t), i = e.length;
   return a => {
      let l = "";
      for (let u = 0; u < i; u++)
         if (l += e[u], a[u] !== void 0) {
            const d = r[u];
            d === Ew ? l += Ja(a[u]) : d === Pw ? l += Ot.transform(a[u]) : l += a[u]
         } return l
   }
}
const Dj = t => typeof t == "number" ? 0 : t;

function Ij(t) {
   const e = _w(t);
   return Nw(t)(e.map(Dj))
}
const rs = {
      test: Pj,
      parse: _w,
      createTransformer: Nw,
      getAnimatableNone: Ij
   },
   Mj = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Rj(t) {
   const [e, r] = t.slice(0, -1).split("(");
   if (e === "drop-shadow") return t;
   const [i] = r.match(Gh) || [];
   if (!i) return t;
   const a = r.replace(i, "");
   let l = Mj.has(e) ? 1 : 0;
   return i !== r && (l *= 100), e + "(" + l + a + ")"
}
const Oj = /\b([a-z-]*)\(.*?\)/gu,
   Uf = {
      ...rs,
      getAnimatableNone: t => {
         const e = t.match(Oj);
         return e ? e.map(Rj).join(" ") : t
      }
   },
   Lj = {
      ...Mh,
      color: Ot,
      backgroundColor: Ot,
      outlineColor: Ot,
      fill: Ot,
      stroke: Ot,
      borderColor: Ot,
      borderTopColor: Ot,
      borderRightColor: Ot,
      borderBottomColor: Ot,
      borderLeftColor: Ot,
      filter: Uf,
      WebkitFilter: Uf
   },
   Xh = t => Lj[t];

function Aw(t, e) {
   let r = Xh(t);
   return r !== Uf && (r = rs), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
}
const Fj = new Set(["auto", "none", "0"]);

function Vj(t, e, r) {
   let i = 0,
      a;
   for (; i < t.length && !a;) {
      const l = t[i];
      typeof l == "string" && !Fj.has(l) && uo(l).values.length && (a = t[i]), i++
   }
   if (a && r)
      for (const l of e) t[l] = Aw(r, a)
}
const Vy = t => t === Qi || t === ke,
   zy = (t, e) => parseFloat(t.split(", ")[e]),
   By = (t, e) => (r, {
      transform: i
   }) => {
      if (i === "none" || !i) return 0;
      const a = i.match(/^matrix3d\((.+)\)$/u);
      if (a) return zy(a[1], e); {
         const l = i.match(/^matrix\((.+)\)$/u);
         return l ? zy(l[1], t) : 0
      }
   },
   zj = new Set(["x", "y", "z"]),
   Bj = Hi.filter(t => !zj.has(t));

function Uj(t) {
   const e = [];
   return Bj.forEach(r => {
      const i = t.getValue(r);
      i !== void 0 && (e.push([r, i.get()]), i.set(r.startsWith("scale") ? 1 : 0))
   }), e
}
const zi = {
   width: ({
      x: t
   }, {
      paddingLeft: e = "0",
      paddingRight: r = "0"
   }) => t.max - t.min - parseFloat(e) - parseFloat(r),
   height: ({
      y: t
   }, {
      paddingTop: e = "0",
      paddingBottom: r = "0"
   }) => t.max - t.min - parseFloat(e) - parseFloat(r),
   top: (t, {
      top: e
   }) => parseFloat(e),
   left: (t, {
      left: e
   }) => parseFloat(e),
   bottom: ({
      y: t
   }, {
      top: e
   }) => parseFloat(e) + (t.max - t.min),
   right: ({
      x: t
   }, {
      left: e
   }) => parseFloat(e) + (t.max - t.min),
   x: By(4, 13),
   y: By(5, 14)
};
zi.translateX = zi.x;
zi.translateY = zi.y;
const Os = new Set;
let $f = !1,
   Zf = !1;

function Dw() {
   if (Zf) {
      const t = Array.from(Os).filter(i => i.needsMeasurement),
         e = new Set(t.map(i => i.element)),
         r = new Map;
      e.forEach(i => {
         const a = Uj(i);
         a.length && (r.set(i, a), i.render())
      }), t.forEach(i => i.measureInitialState()), e.forEach(i => {
         i.render();
         const a = r.get(i);
         a && a.forEach(([l, u]) => {
            var d;
            (d = i.getValue(l)) === null || d === void 0 || d.set(u)
         })
      }), t.forEach(i => i.measureEndState()), t.forEach(i => {
         i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
      })
   }
   Zf = !1, $f = !1, Os.forEach(t => t.complete()), Os.clear()
}

function Iw() {
   Os.forEach(t => {
      t.readKeyframes(), t.needsMeasurement && (Zf = !0)
   })
}

function $j() {
   Iw(), Dw()
}
class Jh {
   constructor(e, r, i, a, l, u = !1) {
      this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = r, this.name = i, this.motionValue = a, this.element = l, this.isAsync = u
   }
   scheduleResolve() {
      this.isScheduled = !0, this.isAsync ? (Os.add(this), $f || ($f = !0, et.read(Iw), et.resolveKeyframes(Dw))) : (this.readKeyframes(), this.complete())
   }
   readKeyframes() {
      const {
         unresolvedKeyframes: e,
         name: r,
         element: i,
         motionValue: a
      } = this;
      for (let l = 0; l < e.length; l++)
         if (e[l] === null)
            if (l === 0) {
               const u = a == null ? void 0 : a.get(),
                  d = e[e.length - 1];
               if (u !== void 0) e[0] = u;
               else if (i && r) {
                  const p = i.readValue(r, d);
                  p != null && (e[0] = p)
               }
               e[0] === void 0 && (e[0] = d), a && u === void 0 && a.set(e[0])
            } else e[l] = e[l - 1]
   }
   setFinalKeyframe() {}
   measureInitialState() {}
   renderEndStyles() {}
   measureEndState() {}
   complete() {
      this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Os.delete(this)
   }
   cancel() {
      this.isComplete || (this.isScheduled = !1, Os.delete(this))
   }
   resume() {
      this.isComplete || this.scheduleResolve()
   }
}
const Mw = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
   Zj = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Wj(t) {
   const e = Zj.exec(t);
   if (!e) return [, ];
   const [, r, i, a] = e;
   return [`--${r??i}`, a]
}

function Rw(t, e, r = 1) {
   const [i, a] = Wj(t);
   if (!i) return;
   const l = window.getComputedStyle(e).getPropertyValue(i);
   if (l) {
      const u = l.trim();
      return Mw(u) ? parseFloat(u) : u
   }
   return Ih(a) ? Rw(a, e, r + 1) : a
}
const Ow = t => e => e.test(t),
   Hj = {
      test: t => t === "auto",
      parse: t => t
   },
   Lw = [Qi, ke, qn, Wr, LC, OC, Hj],
   Uy = t => Lw.find(Ow(t));
class Fw extends Jh {
   constructor(e, r, i, a, l) {
      super(e, r, i, a, l, !0)
   }
   readKeyframes() {
      const {
         unresolvedKeyframes: e,
         element: r,
         name: i
      } = this;
      if (!r || !r.current) return;
      super.readKeyframes();
      for (let p = 0; p < e.length; p++) {
         let m = e[p];
         if (typeof m == "string" && (m = m.trim(), Ih(m))) {
            const y = Rw(m, r.current);
            y !== void 0 && (e[p] = y), p === e.length - 1 && (this.finalKeyframe = m)
         }
      }
      if (this.resolveNoneKeyframes(), !pw.has(i) || e.length !== 2) return;
      const [a, l] = e, u = Uy(a), d = Uy(l);
      if (u !== d)
         if (Vy(u) && Vy(d))
            for (let p = 0; p < e.length; p++) {
               const m = e[p];
               typeof m == "string" && (e[p] = parseFloat(m))
            } else this.needsMeasurement = !0
   }
   resolveNoneKeyframes() {
      const {
         unresolvedKeyframes: e,
         name: r
      } = this, i = [];
      for (let a = 0; a < e.length; a++) kj(e[a]) && i.push(a);
      i.length && Vj(e, i, r)
   }
   measureInitialState() {
      const {
         element: e,
         unresolvedKeyframes: r,
         name: i
      } = this;
      if (!e || !e.current) return;
      i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = zi[i](e.measureViewportBox(), window.getComputedStyle(e.current)), r[0] = this.measuredOrigin;
      const a = r[r.length - 1];
      a !== void 0 && e.getValue(i, a).jump(a, !1)
   }
   measureEndState() {
      var e;
      const {
         element: r,
         name: i,
         unresolvedKeyframes: a
      } = this;
      if (!r || !r.current) return;
      const l = r.getValue(i);
      l && l.jump(this.measuredOrigin, !1);
      const u = a.length - 1,
         d = a[u];
      a[u] = zi[i](r.measureViewportBox(), window.getComputedStyle(r.current)), d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([p, m]) => {
         r.getValue(p).set(m)
      }), this.resolveNoneKeyframes()
   }
}
const $y = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (rs.test(t) || t === "0") && !t.startsWith("url("));

function Qj(t) {
   const e = t[0];
   if (t.length === 1) return !0;
   for (let r = 0; r < t.length; r++)
      if (t[r] !== e) return !0
}

function qj(t, e, r, i) {
   const a = t[0];
   if (a === null) return !1;
   if (e === "display" || e === "visibility") return !0;
   const l = t[t.length - 1],
      u = $y(a, e),
      d = $y(l, e);
   return !u || !d ? !1 : Qj(t) || (r === "spring" || Bh(r)) && i
}
const Kj = t => t !== null;

function Hc(t, {
   repeat: e,
   repeatType: r = "loop"
}, i) {
   const a = t.filter(Kj),
      l = e && r !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
   return !l || i === void 0 ? a[l] : i
}
const Gj = 40;
class Vw {
   constructor({
      autoplay: e = !0,
      delay: r = 0,
      type: i = "keyframes",
      repeat: a = 0,
      repeatDelay: l = 0,
      repeatType: u = "loop",
      ...d
   }) {
      this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Kn.now(), this.options = {
         autoplay: e,
         delay: r,
         type: i,
         repeat: a,
         repeatDelay: l,
         repeatType: u,
         ...d
      }, this.updateFinishedPromise()
   }
   calcStartTime() {
      return this.resolvedAt ? this.resolvedAt - this.createdAt > Gj ? this.resolvedAt : this.createdAt : this.createdAt
   }
   get resolved() {
      return !this._resolved && !this.hasAttemptedResolve && $j(), this._resolved
   }
   onKeyframesResolved(e, r) {
      this.resolvedAt = Kn.now(), this.hasAttemptedResolve = !0;
      const {
         name: i,
         type: a,
         velocity: l,
         delay: u,
         onComplete: d,
         onUpdate: p,
         isGenerator: m
      } = this.options;
      if (!m && !qj(e, i, a, l))
         if (u) this.options.duration = 0;
         else {
            p && p(Hc(e, this.options, r)), d && d(), this.resolveFinishedPromise();
            return
         } const y = this.initPlayback(e, r);
      y !== !1 && (this._resolved = {
         keyframes: e,
         finalKeyframe: r,
         ...y
      }, this.onPostResolved())
   }
   onPostResolved() {}
   then(e, r) {
      return this.currentFinishedPromise.then(e, r)
   }
   flatten() {
      this.options.type = "keyframes", this.options.ease = "linear"
   }
   updateFinishedPromise() {
      this.currentFinishedPromise = new Promise(e => {
         this.resolveFinishedPromise = e
      })
   }
}
const it = (t, e, r) => t + (e - t) * r;

function of (t, e, r) {
   return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
}

function Yj({
   hue: t,
   saturation: e,
   lightness: r,
   alpha: i
}) {
   t /= 360, e /= 100, r /= 100;
   let a = 0,
      l = 0,
      u = 0;
   if (!e) a = l = u = r;
   else {
      const d = r < .5 ? r * (1 + e) : r + e - r * e,
         p = 2 * r - d;
      a = of (p, d, t + 1 / 3), l = of (p, d, t), u = of (p, d, t - 1 / 3)
   }
   return {
      red: Math.round(a * 255),
      green: Math.round(l * 255),
      blue: Math.round(u * 255),
      alpha: i
   }
}

function xc(t, e) {
   return r => r > 0 ? e : t
}
const lf = (t, e, r) => {
      const i = t * t,
         a = r * (e * e - i) + i;
      return a < 0 ? 0 : Math.sqrt(a)
   },
   Xj = [Bf, Ps, vi],
   Jj = t => Xj.find(e => e.test(t));

function Zy(t) {
   const e = Jj(t);
   if (!e) return !1;
   let r = e.parse(t);
   return e === vi && (r = Yj(r)), r
}
const Wy = (t, e) => {
      const r = Zy(t),
         i = Zy(e);
      if (!r || !i) return xc(t, e);
      const a = {
         ...r
      };
      return l => (a.red = lf(r.red, i.red, l), a.green = lf(r.green, i.green, l), a.blue = lf(r.blue, i.blue, l), a.alpha = it(r.alpha, i.alpha, l), Ps.transform(a))
   },
   eE = (t, e) => r => e(t(r)),
   Io = (...t) => t.reduce(eE),
   Wf = new Set(["none", "hidden"]);

function tE(t, e) {
   return Wf.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t
}

function nE(t, e) {
   return r => it(t, e, r)
}

function ep(t) {
   return typeof t == "number" ? nE : typeof t == "string" ? Ih(t) ? xc : Ot.test(t) ? Wy : iE : Array.isArray(t) ? zw : typeof t == "object" ? Ot.test(t) ? Wy : rE : xc
}

function zw(t, e) {
   const r = [...t],
      i = r.length,
      a = t.map((l, u) => ep(l)(l, e[u]));
   return l => {
      for (let u = 0; u < i; u++) r[u] = a[u](l);
      return r
   }
}

function rE(t, e) {
   const r = {
         ...t,
         ...e
      },
      i = {};
   for (const a in r) t[a] !== void 0 && e[a] !== void 0 && (i[a] = ep(t[a])(t[a], e[a]));
   return a => {
      for (const l in i) r[l] = i[l](a);
      return r
   }
}

function sE(t, e) {
   var r;
   const i = [],
      a = {
         color: 0,
         var: 0,
         number: 0
      };
   for (let l = 0; l < e.values.length; l++) {
      const u = e.types[l],
         d = t.indexes[u][a[u]],
         p = (r = t.values[d]) !== null && r !== void 0 ? r : 0;
      i[l] = p, a[u]++
   }
   return i
}
const iE = (t, e) => {
   const r = rs.createTransformer(e),
      i = uo(t),
      a = uo(e);
   return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? Wf.has(t) && !a.values.length || Wf.has(e) && !i.values.length ? tE(t, e) : Io(zw(sE(i, a), a.values), r) : xc(t, e)
};

function Bw(t, e, r) {
   return typeof t == "number" && typeof e == "number" && typeof r == "number" ? it(t, e, r) : ep(t)(t, e)
}
const aE = 5;

function Uw(t, e, r) {
   const i = Math.max(e - aE, 0);
   return mw(r - t(i), e - i)
}
const ct = {
      stiffness: 100,
      damping: 10,
      mass: 1,
      velocity: 0,
      duration: 800,
      bounce: .3,
      visualDuration: .3,
      restSpeed: {
         granular: .01,
         default: 2
      },
      restDelta: {
         granular: .005,
         default: .5
      },
      minDuration: .01,
      maxDuration: 10,
      minDamping: .05,
      maxDamping: 1
   },
   Hy = .001;

function oE({
   duration: t = ct.duration,
   bounce: e = ct.bounce,
   velocity: r = ct.velocity,
   mass: i = ct.mass
}) {
   let a, l, u = 1 - e;
   u = br(ct.minDamping, ct.maxDamping, u), t = br(ct.minDuration, ct.maxDuration, xr(t)), u < 1 ? (a = m => {
      const y = m * u,
         v = y * t,
         w = y - r,
         T = Hf(m, u),
         P = Math.exp(-v);
      return Hy - w / T * P
   }, l = m => {
      const v = m * u * t,
         w = v * r + r,
         T = Math.pow(u, 2) * Math.pow(m, 2) * t,
         P = Math.exp(-v),
         S = Hf(Math.pow(m, 2), u);
      return (-a(m) + Hy > 0 ? -1 : 1) * ((w - T) * P) / S
   }) : (a = m => {
      const y = Math.exp(-m * t),
         v = (m - r) * t + 1;
      return -.001 + y * v
   }, l = m => {
      const y = Math.exp(-m * t),
         v = (r - m) * (t * t);
      return y * v
   });
   const d = 5 / t,
      p = cE(a, l, d);
   if (t = vr(t), isNaN(p)) return {
      stiffness: ct.stiffness,
      damping: ct.damping,
      duration: t
   }; {
      const m = Math.pow(p, 2) * i;
      return {
         stiffness: m,
         damping: u * 2 * Math.sqrt(i * m),
         duration: t
      }
   }
}
const lE = 12;

function cE(t, e, r) {
   let i = r;
   for (let a = 1; a < lE; a++) i = i - t(i) / e(i);
   return i
}

function Hf(t, e) {
   return t * Math.sqrt(1 - e * e)
}
const uE = ["duration", "bounce"],
   dE = ["stiffness", "damping", "mass"];

function Qy(t, e) {
   return e.some(r => t[r] !== void 0)
}

function fE(t) {
   let e = {
      velocity: ct.velocity,
      stiffness: ct.stiffness,
      damping: ct.damping,
      mass: ct.mass,
      isResolvedFromDuration: !1,
      ...t
   };
   if (!Qy(t, dE) && Qy(t, uE))
      if (t.visualDuration) {
         const r = t.visualDuration,
            i = 2 * Math.PI / (r * 1.2),
            a = i * i,
            l = 2 * br(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
         e = {
            ...e,
            mass: ct.mass,
            stiffness: a,
            damping: l
         }
      } else {
         const r = oE(t);
         e = {
            ...e,
            ...r,
            mass: ct.mass
         }, e.isResolvedFromDuration = !0
      } return e
}

function $w(t = ct.visualDuration, e = ct.bounce) {
   const r = typeof t != "object" ? {
      visualDuration: t,
      keyframes: [0, 1],
      bounce: e
   } : t;
   let {
      restSpeed: i,
      restDelta: a
   } = r;
   const l = r.keyframes[0],
      u = r.keyframes[r.keyframes.length - 1],
      d = {
         done: !1,
         value: l
      },
      {
         stiffness: p,
         damping: m,
         mass: y,
         duration: v,
         velocity: w,
         isResolvedFromDuration: T
      } = fE({
         ...r,
         velocity: -xr(r.velocity || 0)
      }),
      P = w || 0,
      S = m / (2 * Math.sqrt(p * y)),
      C = u - l,
      _ = xr(Math.sqrt(p / y)),
      D = Math.abs(C) < 5;
   i || (i = D ? ct.restSpeed.granular : ct.restSpeed.default), a || (a = D ? ct.restDelta.granular : ct.restDelta.default);
   let F;
   if (S < 1) {
      const z = Hf(_, S);
      F = U => {
         const Y = Math.exp(-S * _ * U);
         return u - Y * ((P + S * _ * C) / z * Math.sin(z * U) + C * Math.cos(z * U))
      }
   } else if (S === 1) F = z => u - Math.exp(-_ * z) * (C + (P + _ * C) * z);
   else {
      const z = _ * Math.sqrt(S * S - 1);
      F = U => {
         const Y = Math.exp(-S * _ * U),
            B = Math.min(z * U, 300);
         return u - Y * ((P + S * _ * C) * Math.sinh(B) + z * C * Math.cosh(B)) / z
      }
   }
   const $ = {
      calculatedDuration: T && v || null,
      next: z => {
         const U = F(z);
         if (T) d.done = z >= v;
         else {
            let Y = 0;
            S < 1 && (Y = z === 0 ? vr(P) : Uw(F, z, U));
            const B = Math.abs(Y) <= i,
               me = Math.abs(u - U) <= a;
            d.done = B && me
         }
         return d.value = d.done ? u : U, d
      },
      toString: () => {
         const z = Math.min(aw($), Ff),
            U = ow(Y => $.next(z * Y).value, z, 30);
         return z + "ms " + U
      }
   };
   return $
}

function qy({
   keyframes: t,
   velocity: e = 0,
   power: r = .8,
   timeConstant: i = 325,
   bounceDamping: a = 10,
   bounceStiffness: l = 500,
   modifyTarget: u,
   min: d,
   max: p,
   restDelta: m = .5,
   restSpeed: y
}) {
   const v = t[0],
      w = {
         done: !1,
         value: v
      },
      T = B => d !== void 0 && B < d || p !== void 0 && B > p,
      P = B => d === void 0 ? p : p === void 0 || Math.abs(d - B) < Math.abs(p - B) ? d : p;
   let S = r * e;
   const C = v + S,
      _ = u === void 0 ? C : u(C);
   _ !== C && (S = _ - v);
   const D = B => -S * Math.exp(-B / i),
      F = B => _ + D(B),
      $ = B => {
         const me = D(B),
            ye = F(B);
         w.done = Math.abs(me) <= m, w.value = w.done ? _ : ye
      };
   let z, U;
   const Y = B => {
      T(w.value) && (z = B, U = $w({
         keyframes: [w.value, P(w.value)],
         velocity: Uw(F, B, w.value),
         damping: a,
         stiffness: l,
         restDelta: m,
         restSpeed: y
      }))
   };
   return Y(0), {
      calculatedDuration: null,
      next: B => {
         let me = !1;
         return !U && z === void 0 && (me = !0, $(B), Y(B)), z !== void 0 && B >= z ? U.next(B - z) : (!me && $(B), w)
      }
   }
}
const hE = Do(.42, 0, 1, 1),
   pE = Do(0, 0, .58, 1),
   Zw = Do(.42, 0, .58, 1),
   mE = t => Array.isArray(t) && typeof t[0] != "number",
   gE = {
      linear: on,
      easeIn: hE,
      easeInOut: Zw,
      easeOut: pE,
      circIn: Kh,
      circInOut: Tw,
      circOut: Sw,
      backIn: qh,
      backInOut: bw,
      backOut: ww,
      anticipate: kw
   },
   Ky = t => {
      if (Uh(t)) {
         zx(t.length === 4);
         const [e, r, i, a] = t;
         return Do(e, r, i, a)
      } else if (typeof t == "string") return gE[t];
      return t
   };

function yE(t, e, r) {
   const i = [],
      a = r || Bw,
      l = t.length - 1;
   for (let u = 0; u < l; u++) {
      let d = a(t[u], t[u + 1]);
      if (e) {
         const p = Array.isArray(e) ? e[u] || on : e;
         d = Io(p, d)
      }
      i.push(d)
   }
   return i
}

function vE(t, e, {
   clamp: r = !0,
   ease: i,
   mixer: a
} = {}) {
   const l = t.length;
   if (zx(l === e.length), l === 1) return () => e[0];
   if (l === 2 && e[0] === e[1]) return () => e[1];
   const u = t[0] === t[1];
   t[0] > t[l - 1] && (t = [...t].reverse(), e = [...e].reverse());
   const d = yE(e, i, a),
      p = d.length,
      m = y => {
         if (u && y < t[0]) return e[0];
         let v = 0;
         if (p > 1)
            for (; v < t.length - 2 && !(y < t[v + 1]); v++);
         const w = Fi(t[v], t[v + 1], y);
         return d[v](w)
      };
   return r ? y => m(br(t[0], t[l - 1], y)) : m
}

function xE(t, e) {
   const r = t[t.length - 1];
   for (let i = 1; i <= e; i++) {
      const a = Fi(0, e, i);
      t.push(it(r, 1, a))
   }
}

function wE(t) {
   const e = [0];
   return xE(e, t.length - 1), e
}

function bE(t, e) {
   return t.map(r => r * e)
}

function kE(t, e) {
   return t.map(() => e || Zw).splice(0, t.length - 1)
}

function wc({
   duration: t = 300,
   keyframes: e,
   times: r,
   ease: i = "easeInOut"
}) {
   const a = mE(i) ? i.map(Ky) : Ky(i),
      l = {
         done: !1,
         value: e[0]
      },
      u = bE(r && r.length === e.length ? r : wE(e), t),
      d = vE(u, e, {
         ease: Array.isArray(a) ? a : kE(e, a)
      });
   return {
      calculatedDuration: t,
      next: p => (l.value = d(p), l.done = p >= t, l)
   }
}
const SE = t => {
      const e = ({
         timestamp: r
      }) => t(r);
      return {
         start: () => et.update(e, !0),
         stop: () => ns(e),
         now: () => Pt.isProcessing ? Pt.timestamp : Kn.now()
      }
   },
   TE = {
      decay: qy,
      inertia: qy,
      tween: wc,
      keyframes: wc,
      spring: $w
   },
   CE = t => t / 100;
class tp extends Vw {
   constructor(e) {
      super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
         if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
         this.teardown();
         const {
            onStop: p
         } = this.options;
         p && p()
      };
      const {
         name: r,
         motionValue: i,
         element: a,
         keyframes: l
      } = this.options, u = (a == null ? void 0 : a.KeyframeResolver) || Jh, d = (p, m) => this.onKeyframesResolved(p, m);
      this.resolver = new u(l, d, r, i, a), this.resolver.scheduleResolve()
   }
   flatten() {
      super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
   }
   initPlayback(e) {
      const {
         type: r = "keyframes",
         repeat: i = 0,
         repeatDelay: a = 0,
         repeatType: l,
         velocity: u = 0
      } = this.options, d = Bh(r) ? r : TE[r] || wc;
      let p, m;
      d !== wc && typeof e[0] != "number" && (p = Io(CE, Bw(e[0], e[1])), e = [0, 100]);
      const y = d({
         ...this.options,
         keyframes: e
      });
      l === "mirror" && (m = d({
         ...this.options,
         keyframes: [...e].reverse(),
         velocity: -u
      })), y.calculatedDuration === null && (y.calculatedDuration = aw(y));
      const {
         calculatedDuration: v
      } = y, w = v + a, T = w * (i + 1) - a;
      return {
         generator: y,
         mirroredGenerator: m,
         mapPercentToKeyframes: p,
         calculatedDuration: v,
         resolvedDuration: w,
         totalDuration: T
      }
   }
   onPostResolved() {
      const {
         autoplay: e = !0
      } = this.options;
      this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
   }
   tick(e, r = !1) {
      const {
         resolved: i
      } = this;
      if (!i) {
         const {
            keyframes: B
         } = this.options;
         return {
            done: !0,
            value: B[B.length - 1]
         }
      }
      const {
         finalKeyframe: a,
         generator: l,
         mirroredGenerator: u,
         mapPercentToKeyframes: d,
         keyframes: p,
         calculatedDuration: m,
         totalDuration: y,
         resolvedDuration: v
      } = i;
      if (this.startTime === null) return l.next(0);
      const {
         delay: w,
         repeat: T,
         repeatType: P,
         repeatDelay: S,
         onUpdate: C
      } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - y / this.speed, this.startTime)), r ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
      const _ = this.currentTime - w * (this.speed >= 0 ? 1 : -1),
         D = this.speed >= 0 ? _ < 0 : _ > y;
      this.currentTime = Math.max(_, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = y);
      let F = this.currentTime,
         $ = l;
      if (T) {
         const B = Math.min(this.currentTime, y) / v;
         let me = Math.floor(B),
            ye = B % 1;
         !ye && B >= 1 && (ye = 1), ye === 1 && me--, me = Math.min(me, T + 1), !!(me % 2) && (P === "reverse" ? (ye = 1 - ye, S && (ye -= S / v)) : P === "mirror" && ($ = u)), F = br(0, 1, ye) * v
      }
      const z = D ? {
         done: !1,
         value: p[0]
      } : $.next(F);
      d && (z.value = d(z.value));
      let {
         done: U
      } = z;
      !D && m !== null && (U = this.speed >= 0 ? this.currentTime >= y : this.currentTime <= 0);
      const Y = this.holdTime === null && (this.state === "finished" || this.state === "running" && U);
      return Y && a !== void 0 && (z.value = Hc(p, this.options, a)), C && C(z.value), Y && this.finish(), z
   }
   get duration() {
      const {
         resolved: e
      } = this;
      return e ? xr(e.calculatedDuration) : 0
   }
   get time() {
      return xr(this.currentTime)
   }
   set time(e) {
      e = vr(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
   }
   get speed() {
      return this.playbackSpeed
   }
   set speed(e) {
      const r = this.playbackSpeed !== e;
      this.playbackSpeed = e, r && (this.time = xr(this.currentTime))
   }
   play() {
      if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
         this.pendingPlayState = "running";
         return
      }
      if (this.isStopped) return;
      const {
         driver: e = SE,
         onPlay: r,
         startTime: i
      } = this.options;
      this.driver || (this.driver = e(l => this.tick(l))), r && r();
      const a = this.driver.now();
      this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = a) : this.startTime = i ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
   }
   pause() {
      var e;
      if (!this._resolved) {
         this.pendingPlayState = "paused";
         return
      }
      this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
   }
   complete() {
      this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
   }
   finish() {
      this.teardown(), this.state = "finished";
      const {
         onComplete: e
      } = this.options;
      e && e()
   }
   cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
   }
   teardown() {
      this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
   }
   stopDriver() {
      this.driver && (this.driver.stop(), this.driver = void 0)
   }
   sample(e) {
      return this.startTime = 0, this.tick(e, !0)
   }
}
const jE = new Set(["opacity", "clipPath", "filter", "transform"]);

function EE(t, e, r, {
   delay: i = 0,
   duration: a = 300,
   repeat: l = 0,
   repeatType: u = "loop",
   ease: d = "easeInOut",
   times: p
} = {}) {
   const m = {
      [e]: r
   };
   p && (m.offset = p);
   const y = cw(d, a);
   return Array.isArray(y) && (m.easing = y), t.animate(m, {
      delay: i,
      duration: a,
      easing: Array.isArray(y) ? "linear" : y,
      fill: "both",
      iterations: l + 1,
      direction: u === "reverse" ? "alternate" : "normal"
   })
}
const PE = jh(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
   bc = 10,
   _E = 2e4;

function NE(t) {
   return Bh(t.type) || t.type === "spring" || !lw(t.ease)
}

function AE(t, e) {
   const r = new tp({
      ...e,
      keyframes: t,
      repeat: 0,
      delay: 0,
      isGenerator: !0
   });
   let i = {
      done: !1,
      value: t[0]
   };
   const a = [];
   let l = 0;
   for (; !i.done && l < _E;) i = r.sample(l), a.push(i.value), l += bc;
   return {
      times: void 0,
      keyframes: a,
      duration: l - bc,
      ease: "linear"
   }
}
const Ww = {
   anticipate: kw,
   backInOut: bw,
   circInOut: Tw
};

function DE(t) {
   return t in Ww
}
class Gy extends Vw {
   constructor(e) {
      super(e);
      const {
         name: r,
         motionValue: i,
         element: a,
         keyframes: l
      } = this.options;
      this.resolver = new Fw(l, (u, d) => this.onKeyframesResolved(u, d), r, i, a), this.resolver.scheduleResolve()
   }
   initPlayback(e, r) {
      let {
         duration: i = 300,
         times: a,
         ease: l,
         type: u,
         motionValue: d,
         name: p,
         startTime: m
      } = this.options;
      if (!d.owner || !d.owner.current) return !1;
      if (typeof l == "string" && vc() && DE(l) && (l = Ww[l]), NE(this.options)) {
         const {
            onComplete: v,
            onUpdate: w,
            motionValue: T,
            element: P,
            ...S
         } = this.options, C = AE(e, S);
         e = C.keyframes, e.length === 1 && (e[1] = e[0]), i = C.duration, a = C.times, l = C.ease, u = "keyframes"
      }
      const y = EE(d.owner.current, p, e, {
         ...this.options,
         duration: i,
         times: a,
         ease: l
      });
      return y.startTime = m ?? this.calcStartTime(), this.pendingTimeline ? (Iy(y, this.pendingTimeline), this.pendingTimeline = void 0) : y.onfinish = () => {
         const {
            onComplete: v
         } = this.options;
         d.set(Hc(e, this.options, r)), v && v(), this.cancel(), this.resolveFinishedPromise()
      }, {
         animation: y,
         duration: i,
         times: a,
         type: u,
         ease: l,
         keyframes: e
      }
   }
   get duration() {
      const {
         resolved: e
      } = this;
      if (!e) return 0;
      const {
         duration: r
      } = e;
      return xr(r)
   }
   get time() {
      const {
         resolved: e
      } = this;
      if (!e) return 0;
      const {
         animation: r
      } = e;
      return xr(r.currentTime || 0)
   }
   set time(e) {
      const {
         resolved: r
      } = this;
      if (!r) return;
      const {
         animation: i
      } = r;
      i.currentTime = vr(e)
   }
   get speed() {
      const {
         resolved: e
      } = this;
      if (!e) return 1;
      const {
         animation: r
      } = e;
      return r.playbackRate
   }
   set speed(e) {
      const {
         resolved: r
      } = this;
      if (!r) return;
      const {
         animation: i
      } = r;
      i.playbackRate = e
   }
   get state() {
      const {
         resolved: e
      } = this;
      if (!e) return "idle";
      const {
         animation: r
      } = e;
      return r.playState
   }
   get startTime() {
      const {
         resolved: e
      } = this;
      if (!e) return null;
      const {
         animation: r
      } = e;
      return r.startTime
   }
   attachTimeline(e) {
      if (!this._resolved) this.pendingTimeline = e;
      else {
         const {
            resolved: r
         } = this;
         if (!r) return on;
         const {
            animation: i
         } = r;
         Iy(i, e)
      }
      return on
   }
   play() {
      if (this.isStopped) return;
      const {
         resolved: e
      } = this;
      if (!e) return;
      const {
         animation: r
      } = e;
      r.playState === "finished" && this.updateFinishedPromise(), r.play()
   }
   pause() {
      const {
         resolved: e
      } = this;
      if (!e) return;
      const {
         animation: r
      } = e;
      r.pause()
   }
   stop() {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
      this.resolveFinishedPromise(), this.updateFinishedPromise();
      const {
         resolved: e
      } = this;
      if (!e) return;
      const {
         animation: r,
         keyframes: i,
         duration: a,
         type: l,
         ease: u,
         times: d
      } = e;
      if (r.playState === "idle" || r.playState === "finished") return;
      if (this.time) {
         const {
            motionValue: m,
            onUpdate: y,
            onComplete: v,
            element: w,
            ...T
         } = this.options, P = new tp({
            ...T,
            keyframes: i,
            duration: a,
            type: l,
            ease: u,
            times: d,
            isGenerator: !0
         }), S = vr(this.time);
         m.setWithVelocity(P.sample(S - bc).value, P.sample(S).value, bc)
      }
      const {
         onStop: p
      } = this.options;
      p && p(), this.cancel()
   }
   complete() {
      const {
         resolved: e
      } = this;
      e && e.animation.finish()
   }
   cancel() {
      const {
         resolved: e
      } = this;
      e && e.animation.cancel()
   }
   static supports(e) {
      const {
         motionValue: r,
         name: i,
         repeatDelay: a,
         repeatType: l,
         damping: u,
         type: d
      } = e;
      if (!r || !r.owner || !(r.owner.current instanceof HTMLElement)) return !1;
      const {
         onUpdate: p,
         transformTemplate: m
      } = r.owner.getProps();
      return PE() && i && jE.has(i) && !p && !m && !a && l !== "mirror" && u !== 0 && d !== "inertia"
   }
}
const IE = {
      type: "spring",
      stiffness: 500,
      damping: 25,
      restSpeed: 10
   },
   ME = t => ({
      type: "spring",
      stiffness: 550,
      damping: t === 0 ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10
   }),
   RE = {
      type: "keyframes",
      duration: .8
   },
   OE = {
      type: "keyframes",
      ease: [.25, .1, .35, 1],
      duration: .3
   },
   LE = (t, {
      keyframes: e
   }) => e.length > 2 ? RE : Us.has(t) ? t.startsWith("scale") ? ME(e[1]) : IE : OE;

function FE({
   when: t,
   delay: e,
   delayChildren: r,
   staggerChildren: i,
   staggerDirection: a,
   repeat: l,
   repeatType: u,
   repeatDelay: d,
   from: p,
   elapsed: m,
   ...y
}) {
   return !!Object.keys(y).length
}
const np = (t, e, r, i = {}, a, l) => u => {
   const d = zh(i, t) || {},
      p = d.delay || i.delay || 0;
   let {
      elapsed: m = 0
   } = i;
   m = m - vr(p);
   let y = {
      keyframes: Array.isArray(r) ? r : [null, r],
      ease: "easeOut",
      velocity: e.getVelocity(),
      ...d,
      delay: -m,
      onUpdate: w => {
         e.set(w), d.onUpdate && d.onUpdate(w)
      },
      onComplete: () => {
         u(), d.onComplete && d.onComplete()
      },
      name: t,
      motionValue: e,
      element: l ? void 0 : a
   };
   FE(d) || (y = {
      ...y,
      ...LE(t, y)
   }), y.duration && (y.duration = vr(y.duration)), y.repeatDelay && (y.repeatDelay = vr(y.repeatDelay)), y.from !== void 0 && (y.keyframes[0] = y.from);
   let v = !1;
   if ((y.type === !1 || y.duration === 0 && !y.repeatDelay) && (y.duration = 0, y.delay === 0 && (v = !0)), v && !l && e.get() !== void 0) {
      const w = Hc(y.keyframes, d);
      if (w !== void 0) return et.update(() => {
         y.onUpdate(w), y.onComplete()
      }), new ij([])
   }
   return !l && Gy.supports(y) ? new Gy(y) : new tp(y)
};

function VE({
   protectedKeys: t,
   needsAnimating: e
}, r) {
   const i = t.hasOwnProperty(r) && e[r] !== !0;
   return e[r] = !1, i
}

function Hw(t, e, {
   delay: r = 0,
   transitionOverride: i,
   type: a
} = {}) {
   var l;
   let {
      transition: u = t.getDefaultTransition(),
      transitionEnd: d,
      ...p
   } = e;
   i && (u = i);
   const m = [],
      y = a && t.animationState && t.animationState.getState()[a];
   for (const v in p) {
      const w = t.getValue(v, (l = t.latestValues[v]) !== null && l !== void 0 ? l : null),
         T = p[v];
      if (T === void 0 || y && VE(y, v)) continue;
      const P = {
         delay: r,
         ...zh(u || {}, v)
      };
      let S = !1;
      if (window.MotionHandoffAnimation) {
         const _ = gw(t);
         if (_) {
            const D = window.MotionHandoffAnimation(_, v, et);
            D !== null && (P.startTime = D, S = !0)
         }
      }
      zf(t, v), w.start(np(v, w, T, t.shouldReduceMotion && pw.has(v) ? {
         type: !1
      } : P, t, S));
      const C = w.animation;
      C && m.push(C)
   }
   return d && Promise.all(m).then(() => {
      et.update(() => {
         d && Qh(t, d)
      })
   }), m
}

function Qf(t, e, r = {}) {
   var i;
   const a = Wc(t, e, r.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
   let {
      transition: l = t.getDefaultTransition() || {}
   } = a || {};
   r.transitionOverride && (l = r.transitionOverride);
   const u = a ? () => Promise.all(Hw(t, a, r)) : () => Promise.resolve(),
      d = t.variantChildren && t.variantChildren.size ? (m = 0) => {
         const {
            delayChildren: y = 0,
            staggerChildren: v,
            staggerDirection: w
         } = l;
         return zE(t, e, y + m, v, w, r)
      } : () => Promise.resolve(),
      {
         when: p
      } = l;
   if (p) {
      const [m, y] = p === "beforeChildren" ? [u, d] : [d, u];
      return m().then(() => y())
   } else return Promise.all([u(), d(r.delay)])
}

function zE(t, e, r = 0, i = 0, a = 1, l) {
   const u = [],
      d = (t.variantChildren.size - 1) * i,
      p = a === 1 ? (m = 0) => m * i : (m = 0) => d - m * i;
   return Array.from(t.variantChildren).sort(BE).forEach((m, y) => {
      m.notify("AnimationStart", e), u.push(Qf(m, e, {
         ...l,
         delay: r + p(y)
      }).then(() => m.notify("AnimationComplete", e)))
   }), Promise.all(u)
}

function BE(t, e) {
   return t.sortNodePosition(e)
}

function Qw(t, e, r = {}) {
   t.notify("AnimationStart", e);
   let i;
   if (Array.isArray(e)) {
      const a = e.map(l => Qf(t, l, r));
      i = Promise.all(a)
   } else if (typeof e == "string") i = Qf(t, e, r);
   else {
      const a = typeof e == "function" ? Wc(t, e, r.custom) : e;
      i = Promise.all(Hw(t, a, r))
   }
   return i.then(() => {
      t.notify("AnimationComplete", e)
   })
}
const UE = Ph.length;

function qw(t) {
   if (!t) return;
   if (!t.isControllingVariants) {
      const r = t.parent ? qw(t.parent) || {} : {};
      return t.props.initial !== void 0 && (r.initial = t.props.initial), r
   }
   const e = {};
   for (let r = 0; r < UE; r++) {
      const i = Ph[r],
         a = t.props[i];
      (oo(a) || a === !1) && (e[i] = a)
   }
   return e
}
const $E = [...Eh].reverse(),
   ZE = Eh.length;

function WE(t) {
   return e => Promise.all(e.map(({
      animation: r,
      options: i
   }) => Qw(t, r, i)))
}

function HE(t) {
   let e = WE(t),
      r = Yy(),
      i = !0;
   const a = p => (m, y) => {
      var v;
      const w = Wc(t, y, p === "exit" ? (v = t.presenceContext) === null || v === void 0 ? void 0 : v.custom : void 0);
      if (w) {
         const {
            transition: T,
            transitionEnd: P,
            ...S
         } = w;
         m = {
            ...m,
            ...S,
            ...P
         }
      }
      return m
   };

   function l(p) {
      e = p(t)
   }

   function u(p) {
      const {
         props: m
      } = t, y = qw(t.parent) || {}, v = [], w = new Set;
      let T = {},
         P = 1 / 0;
      for (let C = 0; C < ZE; C++) {
         const _ = $E[C],
            D = r[_],
            F = m[_] !== void 0 ? m[_] : y[_],
            $ = oo(F),
            z = _ === p ? D.isActive : null;
         z === !1 && (P = C);
         let U = F === y[_] && F !== m[_] && $;
         if (U && i && t.manuallyAnimateOnMount && (U = !1), D.protectedKeys = {
               ...T
            }, !D.isActive && z === null || !F && !D.prevProp || $c(F) || typeof F == "boolean") continue;
         const Y = QE(D.prevProp, F);
         let B = Y || _ === p && D.isActive && !U && $ || C > P && $,
            me = !1;
         const ye = Array.isArray(F) ? F : [F];
         let Le = ye.reduce(a(_), {});
         z === !1 && (Le = {});
         const {
            prevResolvedValues: X = {}
         } = D, ge = {
            ...X,
            ...Le
         }, se = fe => {
            B = !0, w.has(fe) && (me = !0, w.delete(fe)), D.needsAnimating[fe] = !0;
            const Q = t.getValue(fe);
            Q && (Q.liveStyle = !1)
         };
         for (const fe in ge) {
            const Q = Le[fe],
               ae = X[fe];
            if (T.hasOwnProperty(fe)) continue;
            let ee = !1;
            Lf(Q) && Lf(ae) ? ee = !iw(Q, ae) : ee = Q !== ae, ee ? Q != null ? se(fe) : w.add(fe) : Q !== void 0 && w.has(fe) ? se(fe) : D.protectedKeys[fe] = !0
         }
         D.prevProp = F, D.prevResolvedValues = Le, D.isActive && (T = {
            ...T,
            ...Le
         }), i && t.blockInitialAnimation && (B = !1), B && (!(U && Y) || me) && v.push(...ye.map(fe => ({
            animation: fe,
            options: {
               type: _
            }
         })))
      }
      if (w.size) {
         const C = {};
         w.forEach(_ => {
            const D = t.getBaseTarget(_),
               F = t.getValue(_);
            F && (F.liveStyle = !0), C[_] = D ?? null
         }), v.push({
            animation: C
         })
      }
      let S = !!v.length;
      return i && (m.initial === !1 || m.initial === m.animate) && !t.manuallyAnimateOnMount && (S = !1), i = !1, S ? e(v) : Promise.resolve()
   }

   function d(p, m) {
      var y;
      if (r[p].isActive === m) return Promise.resolve();
      (y = t.variantChildren) === null || y === void 0 || y.forEach(w => {
         var T;
         return (T = w.animationState) === null || T === void 0 ? void 0 : T.setActive(p, m)
      }), r[p].isActive = m;
      const v = u(p);
      for (const w in r) r[w].protectedKeys = {};
      return v
   }
   return {
      animateChanges: u,
      setActive: d,
      setAnimateFunction: l,
      getState: () => r,
      reset: () => {
         r = Yy(), i = !0
      }
   }
}

function QE(t, e) {
   return typeof e == "string" ? e !== t : Array.isArray(e) ? !iw(e, t) : !1
}

function Cs(t = !1) {
   return {
      isActive: t,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
   }
}

function Yy() {
   return {
      animate: Cs(!0),
      whileInView: Cs(),
      whileHover: Cs(),
      whileTap: Cs(),
      whileDrag: Cs(),
      whileFocus: Cs(),
      exit: Cs()
   }
}
class cs {
   constructor(e) {
      this.isMounted = !1, this.node = e
   }
   update() {}
}
class qE extends cs {
   constructor(e) {
      super(e), e.animationState || (e.animationState = HE(e))
   }
   updateAnimationControlsSubscription() {
      const {
         animate: e
      } = this.node.getProps();
      $c(e) && (this.unmountControls = e.subscribe(this.node))
   }
   mount() {
      this.updateAnimationControlsSubscription()
   }
   update() {
      const {
         animate: e
      } = this.node.getProps(), {
         animate: r
      } = this.node.prevProps || {};
      e !== r && this.updateAnimationControlsSubscription()
   }
   unmount() {
      var e;
      this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this)
   }
}
let KE = 0;
class GE extends cs {
   constructor() {
      super(...arguments), this.id = KE++
   }
   update() {
      if (!this.node.presenceContext) return;
      const {
         isPresent: e,
         onExitComplete: r
      } = this.node.presenceContext, {
         isPresent: i
      } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || e === i) return;
      const a = this.node.animationState.setActive("exit", !e);
      r && !e && a.then(() => r(this.id))
   }
   mount() {
      const {
         register: e
      } = this.node.presenceContext || {};
      e && (this.unmount = e(this.id))
   }
   unmount() {}
}
const YE = {
   animation: {
      Feature: qE
   },
   exit: {
      Feature: GE
   }
};

function fo(t, e, r, i = {
   passive: !0
}) {
   return t.addEventListener(e, r, i), () => t.removeEventListener(e, r)
}

function Mo(t) {
   return {
      point: {
         x: t.pageX,
         y: t.pageY
      }
   }
}
const XE = t => e => $h(e) && t(e, Mo(e));

function eo(t, e, r, i) {
   return fo(t, e, XE(r), i)
}
const Xy = (t, e) => Math.abs(t - e);

function JE(t, e) {
   const r = Xy(t.x, e.x),
      i = Xy(t.y, e.y);
   return Math.sqrt(r ** 2 + i ** 2)
}
class Kw {
   constructor(e, r, {
      transformPagePoint: i,
      contextWindow: a,
      dragSnapToOrigin: l = !1
   } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const v = uf(this.lastMoveEventInfo, this.history),
               w = this.startEvent !== null,
               T = JE(v.offset, {
                  x: 0,
                  y: 0
               }) >= 3;
            if (!w && !T) return;
            const {
               point: P
            } = v, {
               timestamp: S
            } = Pt;
            this.history.push({
               ...P,
               timestamp: S
            });
            const {
               onStart: C,
               onMove: _
            } = this.handlers;
            w || (C && C(this.lastMoveEvent, v), this.startEvent = this.lastMoveEvent), _ && _(this.lastMoveEvent, v)
         }, this.handlePointerMove = (v, w) => {
            this.lastMoveEvent = v, this.lastMoveEventInfo = cf(w, this.transformPagePoint), et.update(this.updatePoint, !0)
         }, this.handlePointerUp = (v, w) => {
            this.end();
            const {
               onEnd: T,
               onSessionEnd: P,
               resumeAnimation: S
            } = this.handlers;
            if (this.dragSnapToOrigin && S && S(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const C = uf(v.type === "pointercancel" ? this.lastMoveEventInfo : cf(w, this.transformPagePoint), this.history);
            this.startEvent && T && T(v, C), P && P(v, C)
         }, !$h(e)) return;
      this.dragSnapToOrigin = l, this.handlers = r, this.transformPagePoint = i, this.contextWindow = a || window;
      const u = Mo(e),
         d = cf(u, this.transformPagePoint),
         {
            point: p
         } = d,
         {
            timestamp: m
         } = Pt;
      this.history = [{
         ...p,
         timestamp: m
      }];
      const {
         onSessionStart: y
      } = r;
      y && y(e, uf(d, this.history)), this.removeListeners = Io(eo(this.contextWindow, "pointermove", this.handlePointerMove), eo(this.contextWindow, "pointerup", this.handlePointerUp), eo(this.contextWindow, "pointercancel", this.handlePointerUp))
   }
   updateHandlers(e) {
      this.handlers = e
   }
   end() {
      this.removeListeners && this.removeListeners(), ns(this.updatePoint)
   }
}

function cf(t, e) {
   return e ? {
      point: e(t.point)
   } : t
}

function Jy(t, e) {
   return {
      x: t.x - e.x,
      y: t.y - e.y
   }
}

function uf({
   point: t
}, e) {
   return {
      point: t,
      delta: Jy(t, Gw(e)),
      offset: Jy(t, eP(e)),
      velocity: tP(e, .1)
   }
}

function eP(t) {
   return t[0]
}

function Gw(t) {
   return t[t.length - 1]
}

function tP(t, e) {
   if (t.length < 2) return {
      x: 0,
      y: 0
   };
   let r = t.length - 1,
      i = null;
   const a = Gw(t);
   for (; r >= 0 && (i = t[r], !(a.timestamp - i.timestamp > vr(e)));) r--;
   if (!i) return {
      x: 0,
      y: 0
   };
   const l = xr(a.timestamp - i.timestamp);
   if (l === 0) return {
      x: 0,
      y: 0
   };
   const u = {
      x: (a.x - i.x) / l,
      y: (a.y - i.y) / l
   };
   return u.x === 1 / 0 && (u.x = 0), u.y === 1 / 0 && (u.y = 0), u
}
const Yw = 1e-4,
   nP = 1 - Yw,
   rP = 1 + Yw,
   Xw = .01,
   sP = 0 - Xw,
   iP = 0 + Xw;

function cn(t) {
   return t.max - t.min
}

function aP(t, e, r) {
   return Math.abs(t - e) <= r
}

function ev(t, e, r, i = .5) {
   t.origin = i, t.originPoint = it(e.min, e.max, t.origin), t.scale = cn(r) / cn(e), t.translate = it(r.min, r.max, t.origin) - t.originPoint, (t.scale >= nP && t.scale <= rP || isNaN(t.scale)) && (t.scale = 1), (t.translate >= sP && t.translate <= iP || isNaN(t.translate)) && (t.translate = 0)
}

function to(t, e, r, i) {
   ev(t.x, e.x, r.x, i ? i.originX : void 0), ev(t.y, e.y, r.y, i ? i.originY : void 0)
}

function tv(t, e, r) {
   t.min = r.min + e.min, t.max = t.min + cn(e)
}

function oP(t, e, r) {
   tv(t.x, e.x, r.x), tv(t.y, e.y, r.y)
}

function nv(t, e, r) {
   t.min = e.min - r.min, t.max = t.min + cn(e)
}

function no(t, e, r) {
   nv(t.x, e.x, r.x), nv(t.y, e.y, r.y)
}

function lP(t, {
   min: e,
   max: r
}, i) {
   return e !== void 0 && t < e ? t = i ? it(e, t, i.min) : Math.max(t, e) : r !== void 0 && t > r && (t = i ? it(r, t, i.max) : Math.min(t, r)), t
}

function rv(t, e, r) {
   return {
      min: e !== void 0 ? t.min + e : void 0,
      max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0
   }
}

function cP(t, {
   top: e,
   left: r,
   bottom: i,
   right: a
}) {
   return {
      x: rv(t.x, r, a),
      y: rv(t.y, e, i)
   }
}

function sv(t, e) {
   let r = e.min - t.min,
      i = e.max - t.max;
   return e.max - e.min < t.max - t.min && ([r, i] = [i, r]), {
      min: r,
      max: i
   }
}

function uP(t, e) {
   return {
      x: sv(t.x, e.x),
      y: sv(t.y, e.y)
   }
}

function dP(t, e) {
   let r = .5;
   const i = cn(t),
      a = cn(e);
   return a > i ? r = Fi(e.min, e.max - i, t.min) : i > a && (r = Fi(t.min, t.max - a, e.min)), br(0, 1, r)
}

function fP(t, e) {
   const r = {};
   return e.min !== void 0 && (r.min = e.min - t.min), e.max !== void 0 && (r.max = e.max - t.min), r
}
const qf = .35;

function hP(t = qf) {
   return t === !1 ? t = 0 : t === !0 && (t = qf), {
      x: iv(t, "left", "right"),
      y: iv(t, "top", "bottom")
   }
}

function iv(t, e, r) {
   return {
      min: av(t, e),
      max: av(t, r)
   }
}

function av(t, e) {
   return typeof t == "number" ? t : t[e] || 0
}
const ov = () => ({
      translate: 0,
      scale: 1,
      origin: 0,
      originPoint: 0
   }),
   xi = () => ({
      x: ov(),
      y: ov()
   }),
   lv = () => ({
      min: 0,
      max: 0
   }),
   mt = () => ({
      x: lv(),
      y: lv()
   });

function yn(t) {
   return [t("x"), t("y")]
}

function Jw({
   top: t,
   left: e,
   right: r,
   bottom: i
}) {
   return {
      x: {
         min: e,
         max: r
      },
      y: {
         min: t,
         max: i
      }
   }
}

function pP({
   x: t,
   y: e
}) {
   return {
      top: e.min,
      right: t.max,
      bottom: e.max,
      left: t.min
   }
}

function mP(t, e) {
   if (!e) return t;
   const r = e({
         x: t.left,
         y: t.top
      }),
      i = e({
         x: t.right,
         y: t.bottom
      });
   return {
      top: r.y,
      left: r.x,
      bottom: i.y,
      right: i.x
   }
}

function df(t) {
   return t === void 0 || t === 1
}

function Kf({
   scale: t,
   scaleX: e,
   scaleY: r
}) {
   return !df(t) || !df(e) || !df(r)
}

function js(t) {
   return Kf(t) || eb(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function eb(t) {
   return cv(t.x) || cv(t.y)
}

function cv(t) {
   return t && t !== "0%"
}

function kc(t, e, r) {
   const i = t - r,
      a = e * i;
   return r + a
}

function uv(t, e, r, i, a) {
   return a !== void 0 && (t = kc(t, a, i)), kc(t, r, i) + e
}

function Gf(t, e = 0, r = 1, i, a) {
   t.min = uv(t.min, e, r, i, a), t.max = uv(t.max, e, r, i, a)
}

function tb(t, {
   x: e,
   y: r
}) {
   Gf(t.x, e.translate, e.scale, e.originPoint), Gf(t.y, r.translate, r.scale, r.originPoint)
}
const dv = .999999999999,
   fv = 1.0000000000001;

function gP(t, e, r, i = !1) {
   const a = r.length;
   if (!a) return;
   e.x = e.y = 1;
   let l, u;
   for (let d = 0; d < a; d++) {
      l = r[d], u = l.projectionDelta;
      const {
         visualElement: p
      } = l.options;
      p && p.props.style && p.props.style.display === "contents" || (i && l.options.layoutScroll && l.scroll && l !== l.root && bi(t, {
         x: -l.scroll.offset.x,
         y: -l.scroll.offset.y
      }), u && (e.x *= u.x.scale, e.y *= u.y.scale, tb(t, u)), i && js(l.latestValues) && bi(t, l.latestValues))
   }
   e.x < fv && e.x > dv && (e.x = 1), e.y < fv && e.y > dv && (e.y = 1)
}

function wi(t, e) {
   t.min = t.min + e, t.max = t.max + e
}

function hv(t, e, r, i, a = .5) {
   const l = it(t.min, t.max, a);
   Gf(t, e, r, l, i)
}

function bi(t, e) {
   hv(t.x, e.x, e.scaleX, e.scale, e.originX), hv(t.y, e.y, e.scaleY, e.scale, e.originY)
}

function nb(t, e) {
   return Jw(mP(t.getBoundingClientRect(), e))
}

function yP(t, e, r) {
   const i = nb(t, r),
      {
         scroll: a
      } = e;
   return a && (wi(i.x, a.offset.x), wi(i.y, a.offset.y)), i
}
const rb = ({
      current: t
   }) => t ? t.ownerDocument.defaultView : null,
   vP = new WeakMap;
class xP {
   constructor(e) {
      this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
         x: 0,
         y: 0
      }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = mt(), this.visualElement = e
   }
   start(e, {
      snapToCursor: r = !1
   } = {}) {
      const {
         presenceContext: i
      } = this.visualElement;
      if (i && i.isPresent === !1) return;
      const a = y => {
            const {
               dragSnapToOrigin: v
            } = this.getProps();
            v ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor(Mo(y).point)
         },
         l = (y, v) => {
            const {
               drag: w,
               dragPropagation: T,
               onDragStart: P
            } = this.getProps();
            if (w && !T && (this.openDragLock && this.openDragLock(), this.openDragLock = hj(w), !this.openDragLock)) return;
            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), yn(C => {
               let _ = this.getAxisMotionValue(C).get() || 0;
               if (qn.test(_)) {
                  const {
                     projection: D
                  } = this.visualElement;
                  if (D && D.layout) {
                     const F = D.layout.layoutBox[C];
                     F && (_ = cn(F) * (parseFloat(_) / 100))
                  }
               }
               this.originPoint[C] = _
            }), P && et.postRender(() => P(y, v)), zf(this.visualElement, "transform");
            const {
               animationState: S
            } = this.visualElement;
            S && S.setActive("whileDrag", !0)
         },
         u = (y, v) => {
            const {
               dragPropagation: w,
               dragDirectionLock: T,
               onDirectionLock: P,
               onDrag: S
            } = this.getProps();
            if (!w && !this.openDragLock) return;
            const {
               offset: C
            } = v;
            if (T && this.currentDirection === null) {
               this.currentDirection = wP(C), this.currentDirection !== null && P && P(this.currentDirection);
               return
            }
            this.updateAxis("x", v.point, C), this.updateAxis("y", v.point, C), this.visualElement.render(), S && S(y, v)
         },
         d = (y, v) => this.stop(y, v),
         p = () => yn(y => {
            var v;
            return this.getAnimationState(y) === "paused" && ((v = this.getAxisMotionValue(y).animation) === null || v === void 0 ? void 0 : v.play())
         }),
         {
            dragSnapToOrigin: m
         } = this.getProps();
      this.panSession = new Kw(e, {
         onSessionStart: a,
         onStart: l,
         onMove: u,
         onSessionEnd: d,
         resumeAnimation: p
      }, {
         transformPagePoint: this.visualElement.getTransformPagePoint(),
         dragSnapToOrigin: m,
         contextWindow: rb(this.visualElement)
      })
   }
   stop(e, r) {
      const i = this.isDragging;
      if (this.cancel(), !i) return;
      const {
         velocity: a
      } = r;
      this.startAnimation(a);
      const {
         onDragEnd: l
      } = this.getProps();
      l && et.postRender(() => l(e, r))
   }
   cancel() {
      this.isDragging = !1;
      const {
         projection: e,
         animationState: r
      } = this.visualElement;
      e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
      const {
         dragPropagation: i
      } = this.getProps();
      !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1)
   }
   updateAxis(e, r, i) {
      const {
         drag: a
      } = this.getProps();
      if (!i || !nc(e, a, this.currentDirection)) return;
      const l = this.getAxisMotionValue(e);
      let u = this.originPoint[e] + i[e];
      this.constraints && this.constraints[e] && (u = lP(u, this.constraints[e], this.elastic[e])), l.set(u)
   }
   resolveConstraints() {
      var e;
      const {
         dragConstraints: r,
         dragElastic: i
      } = this.getProps(), a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, l = this.constraints;
      r && yi(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && a ? this.constraints = cP(a.layoutBox, r) : this.constraints = !1, this.elastic = hP(i), l !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && yn(u => {
         this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = fP(a.layoutBox[u], this.constraints[u]))
      })
   }
   resolveRefConstraints() {
      const {
         dragConstraints: e,
         onMeasureDragConstraints: r
      } = this.getProps();
      if (!e || !yi(e)) return !1;
      const i = e.current,
         {
            projection: a
         } = this.visualElement;
      if (!a || !a.layout) return !1;
      const l = yP(i, a.root, this.visualElement.getTransformPagePoint());
      let u = uP(a.layout.layoutBox, l);
      if (r) {
         const d = r(pP(u));
         this.hasMutatedConstraints = !!d, d && (u = Jw(d))
      }
      return u
   }
   startAnimation(e) {
      const {
         drag: r,
         dragMomentum: i,
         dragElastic: a,
         dragTransition: l,
         dragSnapToOrigin: u,
         onDragTransitionEnd: d
      } = this.getProps(), p = this.constraints || {}, m = yn(y => {
         if (!nc(y, r, this.currentDirection)) return;
         let v = p && p[y] || {};
         u && (v = {
            min: 0,
            max: 0
         });
         const w = a ? 200 : 1e6,
            T = a ? 40 : 1e7,
            P = {
               type: "inertia",
               velocity: i ? e[y] : 0,
               bounceStiffness: w,
               bounceDamping: T,
               timeConstant: 750,
               restDelta: 1,
               restSpeed: 10,
               ...l,
               ...v
            };
         return this.startAxisValueAnimation(y, P)
      });
      return Promise.all(m).then(d)
   }
   startAxisValueAnimation(e, r) {
      const i = this.getAxisMotionValue(e);
      return zf(this.visualElement, e), i.start(np(e, i, 0, r, this.visualElement, !1))
   }
   stopAnimation() {
      yn(e => this.getAxisMotionValue(e).stop())
   }
   pauseAnimation() {
      yn(e => {
         var r;
         return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.pause()
      })
   }
   getAnimationState(e) {
      var r;
      return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.state
   }
   getAxisMotionValue(e) {
      const r = `_drag${e.toUpperCase()}`,
         i = this.visualElement.getProps(),
         a = i[r];
      return a || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
   }
   snapToCursor(e) {
      yn(r => {
         const {
            drag: i
         } = this.getProps();
         if (!nc(r, i, this.currentDirection)) return;
         const {
            projection: a
         } = this.visualElement, l = this.getAxisMotionValue(r);
         if (a && a.layout) {
            const {
               min: u,
               max: d
            } = a.layout.layoutBox[r];
            l.set(e[r] - it(u, d, .5))
         }
      })
   }
   scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const {
         drag: e,
         dragConstraints: r
      } = this.getProps(), {
         projection: i
      } = this.visualElement;
      if (!yi(r) || !i || !this.constraints) return;
      this.stopAnimation();
      const a = {
         x: 0,
         y: 0
      };
      yn(u => {
         const d = this.getAxisMotionValue(u);
         if (d && this.constraints !== !1) {
            const p = d.get();
            a[u] = dP({
               min: p,
               max: p
            }, this.constraints[u])
         }
      });
      const {
         transformTemplate: l
      } = this.visualElement.getProps();
      this.visualElement.current.style.transform = l ? l({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), yn(u => {
         if (!nc(u, e, null)) return;
         const d = this.getAxisMotionValue(u),
            {
               min: p,
               max: m
            } = this.constraints[u];
         d.set(it(p, m, a[u]))
      })
   }
   addListeners() {
      if (!this.visualElement.current) return;
      vP.set(this.visualElement, this);
      const e = this.visualElement.current,
         r = eo(e, "pointerdown", p => {
            const {
               drag: m,
               dragListener: y = !0
            } = this.getProps();
            m && y && this.start(p)
         }),
         i = () => {
            const {
               dragConstraints: p
            } = this.getProps();
            yi(p) && p.current && (this.constraints = this.resolveRefConstraints())
         },
         {
            projection: a
         } = this.visualElement,
         l = a.addEventListener("measure", i);
      a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()), et.read(i);
      const u = fo(window, "resize", () => this.scalePositionWithinConstraints()),
         d = a.addEventListener("didUpdate", ({
            delta: p,
            hasLayoutChanged: m
         }) => {
            this.isDragging && m && (yn(y => {
               const v = this.getAxisMotionValue(y);
               v && (this.originPoint[y] += p[y].translate, v.set(v.get() + p[y].translate))
            }), this.visualElement.render())
         });
      return () => {
         u(), r(), l(), d && d()
      }
   }
   getProps() {
      const e = this.visualElement.getProps(),
         {
            drag: r = !1,
            dragDirectionLock: i = !1,
            dragPropagation: a = !1,
            dragConstraints: l = !1,
            dragElastic: u = qf,
            dragMomentum: d = !0
         } = e;
      return {
         ...e,
         drag: r,
         dragDirectionLock: i,
         dragPropagation: a,
         dragConstraints: l,
         dragElastic: u,
         dragMomentum: d
      }
   }
}

function nc(t, e, r) {
   return (e === !0 || e === t) && (r === null || r === t)
}

function wP(t, e = 10) {
   let r = null;
   return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r
}
class bP extends cs {
   constructor(e) {
      super(e), this.removeGroupControls = on, this.removeListeners = on, this.controls = new xP(e)
   }
   mount() {
      const {
         dragControls: e
      } = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || on
   }
   unmount() {
      this.removeGroupControls(), this.removeListeners()
   }
}
const pv = t => (e, r) => {
   t && et.postRender(() => t(e, r))
};
class kP extends cs {
   constructor() {
      super(...arguments), this.removePointerDownListener = on
   }
   onPointerDown(e) {
      this.session = new Kw(e, this.createPanHandlers(), {
         transformPagePoint: this.node.getTransformPagePoint(),
         contextWindow: rb(this.node)
      })
   }
   createPanHandlers() {
      const {
         onPanSessionStart: e,
         onPanStart: r,
         onPan: i,
         onPanEnd: a
      } = this.node.getProps();
      return {
         onSessionStart: pv(e),
         onStart: pv(r),
         onMove: i,
         onEnd: (l, u) => {
            delete this.session, a && et.postRender(() => a(l, u))
         }
      }
   }
   mount() {
      this.removePointerDownListener = eo(this.node.current, "pointerdown", e => this.onPointerDown(e))
   }
   update() {
      this.session && this.session.updateHandlers(this.createPanHandlers())
   }
   unmount() {
      this.removePointerDownListener(), this.session && this.session.end()
   }
}
const uc = {
   hasAnimatedSinceResize: !0,
   hasEverUpdated: !1
};

function mv(t, e) {
   return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Ra = {
      correct: (t, e) => {
         if (!e.target) return t;
         if (typeof t == "string")
            if (ke.test(t)) t = parseFloat(t);
            else return t;
         const r = mv(t, e.target.x),
            i = mv(t, e.target.y);
         return `${r}% ${i}%`
      }
   },
   SP = {
      correct: (t, {
         treeScale: e,
         projectionDelta: r
      }) => {
         const i = t,
            a = rs.parse(t);
         if (a.length > 5) return i;
         const l = rs.createTransformer(t),
            u = typeof a[0] != "number" ? 1 : 0,
            d = r.x.scale * e.x,
            p = r.y.scale * e.y;
         a[0 + u] /= d, a[1 + u] /= p;
         const m = it(d, p, .5);
         return typeof a[2 + u] == "number" && (a[2 + u] /= m), typeof a[3 + u] == "number" && (a[3 + u] /= m), l(a)
      }
   };
class TP extends b.Component {
   componentDidMount() {
      const {
         visualElement: e,
         layoutGroup: r,
         switchLayoutGroup: i,
         layoutId: a
      } = this.props, {
         projection: l
      } = e;
      QC(CP), l && (r.group && r.group.add(l), i && i.register && a && i.register(l), l.root.didUpdate(), l.addEventListener("animationComplete", () => {
         this.safeToRemove()
      }), l.setOptions({
         ...l.options,
         onExitComplete: () => this.safeToRemove()
      })), uc.hasEverUpdated = !0
   }
   getSnapshotBeforeUpdate(e) {
      const {
         layoutDependency: r,
         visualElement: i,
         drag: a,
         isPresent: l
      } = this.props, u = i.projection;
      return u && (u.isPresent = l, a || e.layoutDependency !== r || r === void 0 ? u.willUpdate() : this.safeToRemove(), e.isPresent !== l && (l ? u.promote() : u.relegate() || et.postRender(() => {
         const d = u.getStack();
         (!d || !d.members.length) && this.safeToRemove()
      }))), null
   }
   componentDidUpdate() {
      const {
         projection: e
      } = this.props.visualElement;
      e && (e.root.didUpdate(), Nh.postRender(() => {
         !e.currentAnimation && e.isLead() && this.safeToRemove()
      }))
   }
   componentWillUnmount() {
      const {
         visualElement: e,
         layoutGroup: r,
         switchLayoutGroup: i
      } = this.props, {
         projection: a
      } = e;
      a && (a.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(a), i && i.deregister && i.deregister(a))
   }
   safeToRemove() {
      const {
         safeToRemove: e
      } = this.props;
      e && e()
   }
   render() {
      return null
   }
}

function sb(t) {
   const [e, r] = cC(), i = b.useContext(Ox);
   return f.jsx(TP, {
      ...t,
      layoutGroup: i,
      switchLayoutGroup: b.useContext(Hx),
      isPresent: e,
      safeToRemove: r
   })
}
const CP = {
   borderRadius: {
      ...Ra,
      applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
   },
   borderTopLeftRadius: Ra,
   borderTopRightRadius: Ra,
   borderBottomLeftRadius: Ra,
   borderBottomRightRadius: Ra,
   boxShadow: SP
};

function jP(t, e, r) {
   const i = Lt(t) ? t : co(t);
   return i.start(np("", i, e, r)), i.animation
}

function EP(t) {
   return t instanceof SVGElement && t.tagName !== "svg"
}
const PP = (t, e) => t.depth - e.depth;
class _P {
   constructor() {
      this.children = [], this.isDirty = !1
   }
   add(e) {
      Zh(this.children, e), this.isDirty = !0
   }
   remove(e) {
      Wh(this.children, e), this.isDirty = !0
   }
   forEach(e) {
      this.isDirty && this.children.sort(PP), this.isDirty = !1, this.children.forEach(e)
   }
}

function NP(t, e) {
   const r = Kn.now(),
      i = ({
         timestamp: a
      }) => {
         const l = a - r;
         l >= e && (ns(i), t(l - e))
      };
   return et.read(i, !0), () => ns(i)
}
const ib = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
   AP = ib.length,
   gv = t => typeof t == "string" ? parseFloat(t) : t,
   yv = t => typeof t == "number" || ke.test(t);

function DP(t, e, r, i, a, l) {
   a ? (t.opacity = it(0, r.opacity !== void 0 ? r.opacity : 1, IP(i)), t.opacityExit = it(e.opacity !== void 0 ? e.opacity : 1, 0, MP(i))) : l && (t.opacity = it(e.opacity !== void 0 ? e.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, i));
   for (let u = 0; u < AP; u++) {
      const d = `border${ib[u]}Radius`;
      let p = vv(e, d),
         m = vv(r, d);
      if (p === void 0 && m === void 0) continue;
      p || (p = 0), m || (m = 0), p === 0 || m === 0 || yv(p) === yv(m) ? (t[d] = Math.max(it(gv(p), gv(m), i), 0), (qn.test(m) || qn.test(p)) && (t[d] += "%")) : t[d] = m
   }(e.rotate || r.rotate) && (t.rotate = it(e.rotate || 0, r.rotate || 0, i))
}

function vv(t, e) {
   return t[e] !== void 0 ? t[e] : t.borderRadius
}
const IP = ab(0, .5, Sw),
   MP = ab(.5, .95, on);

function ab(t, e, r) {
   return i => i < t ? 0 : i > e ? 1 : r(Fi(t, e, i))
}

function xv(t, e) {
   t.min = e.min, t.max = e.max
}

function gn(t, e) {
   xv(t.x, e.x), xv(t.y, e.y)
}

function wv(t, e) {
   t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}

function bv(t, e, r, i, a) {
   return t -= e, t = kc(t, 1 / r, i), a !== void 0 && (t = kc(t, 1 / a, i)), t
}

function RP(t, e = 0, r = 1, i = .5, a, l = t, u = t) {
   if (qn.test(e) && (e = parseFloat(e), e = it(u.min, u.max, e / 100) - u.min), typeof e != "number") return;
   let d = it(l.min, l.max, i);
   t === l && (d -= e), t.min = bv(t.min, e, r, d, a), t.max = bv(t.max, e, r, d, a)
}

function kv(t, e, [r, i, a], l, u) {
   RP(t, e[r], e[i], e[a], e.scale, l, u)
}
const OP = ["x", "scaleX", "originX"],
   LP = ["y", "scaleY", "originY"];

function Sv(t, e, r, i) {
   kv(t.x, e, OP, r ? r.x : void 0, i ? i.x : void 0), kv(t.y, e, LP, r ? r.y : void 0, i ? i.y : void 0)
}

function Tv(t) {
   return t.translate === 0 && t.scale === 1
}

function ob(t) {
   return Tv(t.x) && Tv(t.y)
}

function Cv(t, e) {
   return t.min === e.min && t.max === e.max
}

function FP(t, e) {
   return Cv(t.x, e.x) && Cv(t.y, e.y)
}

function jv(t, e) {
   return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function lb(t, e) {
   return jv(t.x, e.x) && jv(t.y, e.y)
}

function Ev(t) {
   return cn(t.x) / cn(t.y)
}

function Pv(t, e) {
   return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class VP {
   constructor() {
      this.members = []
   }
   add(e) {
      Zh(this.members, e), e.scheduleRender()
   }
   remove(e) {
      if (Wh(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
         const r = this.members[this.members.length - 1];
         r && this.promote(r)
      }
   }
   relegate(e) {
      const r = this.members.findIndex(a => e === a);
      if (r === 0) return !1;
      let i;
      for (let a = r; a >= 0; a--) {
         const l = this.members[a];
         if (l.isPresent !== !1) {
            i = l;
            break
         }
      }
      return i ? (this.promote(i), !0) : !1
   }
   promote(e, r) {
      const i = this.lead;
      if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
         i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, r && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
         const {
            crossfade: a
         } = e.options;
         a === !1 && i.hide()
      }
   }
   exitAnimationComplete() {
      this.members.forEach(e => {
         const {
            options: r,
            resumingFrom: i
         } = e;
         r.onExitComplete && r.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
      })
   }
   scheduleRender() {
      this.members.forEach(e => {
         e.instance && e.scheduleRender(!1)
      })
   }
   removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
   }
}

function zP(t, e, r) {
   let i = "";
   const a = t.x.translate / e.x,
      l = t.y.translate / e.y,
      u = (r == null ? void 0 : r.z) || 0;
   if ((a || l || u) && (i = `translate3d(${a}px, ${l}px, ${u}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1/e.x}, ${1/e.y}) `), r) {
      const {
         transformPerspective: m,
         rotate: y,
         rotateX: v,
         rotateY: w,
         skewX: T,
         skewY: P
      } = r;
      m && (i = `perspective(${m}px) ${i}`), y && (i += `rotate(${y}deg) `), v && (i += `rotateX(${v}deg) `), w && (i += `rotateY(${w}deg) `), T && (i += `skewX(${T}deg) `), P && (i += `skewY(${P}deg) `)
   }
   const d = t.x.scale * e.x,
      p = t.y.scale * e.y;
   return (d !== 1 || p !== 1) && (i += `scale(${d}, ${p})`), i || "none"
}
const Es = {
      type: "projectionFrame",
      totalNodes: 0,
      resolvedTargetDeltas: 0,
      recalculatedProjection: 0
   },
   $a = typeof window < "u" && window.MotionDebug !== void 0,
   ff = ["", "X", "Y", "Z"],
   BP = {
      visibility: "hidden"
   },
   _v = 1e3;
let UP = 0;

function hf(t, e, r, i) {
   const {
      latestValues: a
   } = e;
   a[t] && (r[t] = a[t], e.setStaticValue(t, 0), i && (i[t] = 0))
}

function cb(t) {
   if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
   const {
      visualElement: e
   } = t.options;
   if (!e) return;
   const r = gw(e);
   if (window.MotionHasOptimisedAnimation(r, "transform")) {
      const {
         layout: a,
         layoutId: l
      } = t.options;
      window.MotionCancelOptimisedAnimation(r, "transform", et, !(a || l))
   }
   const {
      parent: i
   } = t;
   i && !i.hasCheckedOptimisedAppear && cb(i)
}

function ub({
   attachResizeListener: t,
   defaultParent: e,
   measureScroll: r,
   checkIsScrollRoot: i,
   resetTransform: a
}) {
   return class {
      constructor(u = {}, d = e == null ? void 0 : e()) {
         this.id = UP++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
            x: 1,
            y: 1
         }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
         }, this.updateProjection = () => {
            this.projectionUpdateScheduled = !1, $a && (Es.totalNodes = Es.resolvedTargetDeltas = Es.recalculatedProjection = 0), this.nodes.forEach(WP), this.nodes.forEach(GP), this.nodes.forEach(YP), this.nodes.forEach(HP), $a && window.MotionDebug.record(Es)
         }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = u, this.root = d ? d.root || d : this, this.path = d ? [...d.path, d] : [], this.parent = d, this.depth = d ? d.depth + 1 : 0;
         for (let p = 0; p < this.path.length; p++) this.path[p].shouldResetTransform = !0;
         this.root === this && (this.nodes = new _P)
      }
      addEventListener(u, d) {
         return this.eventHandlers.has(u) || this.eventHandlers.set(u, new Hh), this.eventHandlers.get(u).add(d)
      }
      notifyListeners(u, ...d) {
         const p = this.eventHandlers.get(u);
         p && p.notify(...d)
      }
      hasListeners(u) {
         return this.eventHandlers.has(u)
      }
      mount(u, d = this.root.hasTreeAnimated) {
         if (this.instance) return;
         this.isSVG = EP(u), this.instance = u;
         const {
            layoutId: p,
            layout: m,
            visualElement: y
         } = this.options;
         if (y && !y.current && y.mount(u), this.root.nodes.add(this), this.parent && this.parent.children.add(this), d && (m || p) && (this.isLayoutDirty = !0), t) {
            let v;
            const w = () => this.root.updateBlockedByResize = !1;
            t(u, () => {
               this.root.updateBlockedByResize = !0, v && v(), v = NP(w, 250), uc.hasAnimatedSinceResize && (uc.hasAnimatedSinceResize = !1, this.nodes.forEach(Av))
            })
         }
         p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && y && (p || m) && this.addEventListener("didUpdate", ({
            delta: v,
            hasLayoutChanged: w,
            hasRelativeTargetChanged: T,
            layout: P
         }) => {
            if (this.isTreeAnimationBlocked()) {
               this.target = void 0, this.relativeTarget = void 0;
               return
            }
            const S = this.options.transition || y.getDefaultTransition() || n_,
               {
                  onLayoutAnimationStart: C,
                  onLayoutAnimationComplete: _
               } = y.getProps(),
               D = !this.targetLayout || !lb(this.targetLayout, P) || T,
               F = !w && T;
            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || F || w && (D || !this.currentAnimation)) {
               this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(v, F);
               const $ = {
                  ...zh(S, "layout"),
                  onPlay: C,
                  onComplete: _
               };
               (y.shouldReduceMotion || this.options.layoutRoot) && ($.delay = 0, $.type = !1), this.startAnimation($)
            } else w || Av(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
            this.targetLayout = P
         })
      }
      unmount() {
         this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
         const u = this.getStack();
         u && u.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, ns(this.updateProjection)
      }
      blockUpdate() {
         this.updateManuallyBlocked = !0
      }
      unblockUpdate() {
         this.updateManuallyBlocked = !1
      }
      isUpdateBlocked() {
         return this.updateManuallyBlocked || this.updateBlockedByResize
      }
      isTreeAnimationBlocked() {
         return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
      }
      startUpdate() {
         this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(XP), this.animationId++)
      }
      getTransformTemplate() {
         const {
            visualElement: u
         } = this.options;
         return u && u.getProps().transformTemplate
      }
      willUpdate(u = !0) {
         if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
            this.options.onExitComplete && this.options.onExitComplete();
            return
         }
         if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && cb(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
         this.isLayoutDirty = !0;
         for (let y = 0; y < this.path.length; y++) {
            const v = this.path[y];
            v.shouldResetTransform = !0, v.updateScroll("snapshot"), v.options.layoutRoot && v.willUpdate(!1)
         }
         const {
            layoutId: d,
            layout: p
         } = this.options;
         if (d === void 0 && !p) return;
         const m = this.getTransformTemplate();
         this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), u && this.notifyListeners("willUpdate")
      }
      update() {
         if (this.updateScheduled = !1, this.isUpdateBlocked()) {
            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Nv);
            return
         }
         this.isUpdating || this.nodes.forEach(qP), this.isUpdating = !1, this.nodes.forEach(KP), this.nodes.forEach($P), this.nodes.forEach(ZP), this.clearAllSnapshots();
         const d = Kn.now();
         Pt.delta = br(0, 1e3 / 60, d - Pt.timestamp), Pt.timestamp = d, Pt.isProcessing = !0, rf.update.process(Pt), rf.preRender.process(Pt), rf.render.process(Pt), Pt.isProcessing = !1
      }
      didUpdate() {
         this.updateScheduled || (this.updateScheduled = !0, Nh.read(this.scheduleUpdate))
      }
      clearAllSnapshots() {
         this.nodes.forEach(QP), this.sharedNodes.forEach(JP)
      }
      scheduleUpdateProjection() {
         this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, et.preRender(this.updateProjection, !1, !0))
      }
      scheduleCheckAfterUnmount() {
         et.postRender(() => {
            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
         })
      }
      updateSnapshot() {
         this.snapshot || !this.instance || (this.snapshot = this.measure())
      }
      updateLayout() {
         if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
         if (this.resumeFrom && !this.resumeFrom.instance)
            for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
         const u = this.layout;
         this.layout = this.measure(!1), this.layoutCorrected = mt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
         const {
            visualElement: d
         } = this.options;
         d && d.notify("LayoutMeasure", this.layout.layoutBox, u ? u.layoutBox : void 0)
      }
      updateScroll(u = "measure") {
         let d = !!(this.options.layoutScroll && this.instance);
         if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === u && (d = !1), d) {
            const p = i(this.instance);
            this.scroll = {
               animationId: this.root.animationId,
               phase: u,
               isRoot: p,
               offset: r(this.instance),
               wasRoot: this.scroll ? this.scroll.isRoot : p
            }
         }
      }
      resetTransform() {
         if (!a) return;
         const u = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
            d = this.projectionDelta && !ob(this.projectionDelta),
            p = this.getTransformTemplate(),
            m = p ? p(this.latestValues, "") : void 0,
            y = m !== this.prevTransformTemplateValue;
         u && (d || js(this.latestValues) || y) && (a(this.instance, m), this.shouldResetTransform = !1, this.scheduleRender())
      }
      measure(u = !0) {
         const d = this.measurePageBox();
         let p = this.removeElementScroll(d);
         return u && (p = this.removeTransform(p)), r_(p), {
            animationId: this.root.animationId,
            measuredBox: d,
            layoutBox: p,
            latestValues: {},
            source: this.id
         }
      }
      measurePageBox() {
         var u;
         const {
            visualElement: d
         } = this.options;
         if (!d) return mt();
         const p = d.measureViewportBox();
         if (!(((u = this.scroll) === null || u === void 0 ? void 0 : u.wasRoot) || this.path.some(s_))) {
            const {
               scroll: y
            } = this.root;
            y && (wi(p.x, y.offset.x), wi(p.y, y.offset.y))
         }
         return p
      }
      removeElementScroll(u) {
         var d;
         const p = mt();
         if (gn(p, u), !((d = this.scroll) === null || d === void 0) && d.wasRoot) return p;
         for (let m = 0; m < this.path.length; m++) {
            const y = this.path[m],
               {
                  scroll: v,
                  options: w
               } = y;
            y !== this.root && v && w.layoutScroll && (v.wasRoot && gn(p, u), wi(p.x, v.offset.x), wi(p.y, v.offset.y))
         }
         return p
      }
      applyTransform(u, d = !1) {
         const p = mt();
         gn(p, u);
         for (let m = 0; m < this.path.length; m++) {
            const y = this.path[m];
            !d && y.options.layoutScroll && y.scroll && y !== y.root && bi(p, {
               x: -y.scroll.offset.x,
               y: -y.scroll.offset.y
            }), js(y.latestValues) && bi(p, y.latestValues)
         }
         return js(this.latestValues) && bi(p, this.latestValues), p
      }
      removeTransform(u) {
         const d = mt();
         gn(d, u);
         for (let p = 0; p < this.path.length; p++) {
            const m = this.path[p];
            if (!m.instance || !js(m.latestValues)) continue;
            Kf(m.latestValues) && m.updateSnapshot();
            const y = mt(),
               v = m.measurePageBox();
            gn(y, v), Sv(d, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, y)
         }
         return js(this.latestValues) && Sv(d, this.latestValues), d
      }
      setTargetDelta(u) {
         this.targetDelta = u, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
      }
      setOptions(u) {
         this.options = {
            ...this.options,
            ...u,
            crossfade: u.crossfade !== void 0 ? u.crossfade : !0
         }
      }
      clearMeasurements() {
         this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
      }
      forceRelativeParentToResolveTarget() {
         this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Pt.timestamp && this.relativeParent.resolveTargetDelta(!0)
      }
      resolveTargetDelta(u = !1) {
         var d;
         const p = this.getLead();
         this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
         const m = !!this.resumingFrom || this !== p;
         if (!(u || m && this.isSharedProjectionDirty || this.isProjectionDirty || !((d = this.parent) === null || d === void 0) && d.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
         const {
            layout: v,
            layoutId: w
         } = this.options;
         if (!(!this.layout || !(v || w))) {
            if (this.resolvedRelativeTargetAt = Pt.timestamp, !this.targetDelta && !this.relativeTarget) {
               const T = this.getClosestProjectingParent();
               T && T.layout && this.animationProgress !== 1 ? (this.relativeParent = T, this.forceRelativeParentToResolveTarget(), this.relativeTarget = mt(), this.relativeTargetOrigin = mt(), no(this.relativeTargetOrigin, this.layout.layoutBox, T.layout.layoutBox), gn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
            }
            if (!(!this.relativeTarget && !this.targetDelta)) {
               if (this.target || (this.target = mt(), this.targetWithTransforms = mt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), oP(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : gn(this.target, this.layout.layoutBox), tb(this.target, this.targetDelta)) : gn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  const T = this.getClosestProjectingParent();
                  T && !!T.resumingFrom == !!this.resumingFrom && !T.options.layoutScroll && T.target && this.animationProgress !== 1 ? (this.relativeParent = T, this.forceRelativeParentToResolveTarget(), this.relativeTarget = mt(), this.relativeTargetOrigin = mt(), no(this.relativeTargetOrigin, this.target, T.target), gn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
               }
               $a && Es.resolvedTargetDeltas++
            }
         }
      }
      getClosestProjectingParent() {
         if (!(!this.parent || Kf(this.parent.latestValues) || eb(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
      }
      isProjecting() {
         return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
      }
      calcProjection() {
         var u;
         const d = this.getLead(),
            p = !!this.resumingFrom || this !== d;
         let m = !0;
         if ((this.isProjectionDirty || !((u = this.parent) === null || u === void 0) && u.isProjectionDirty) && (m = !1), p && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1), this.resolvedRelativeTargetAt === Pt.timestamp && (m = !1), m) return;
         const {
            layout: y,
            layoutId: v
         } = this.options;
         if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(y || v)) return;
         gn(this.layoutCorrected, this.layout.layoutBox);
         const w = this.treeScale.x,
            T = this.treeScale.y;
         gP(this.layoutCorrected, this.treeScale, this.path, p), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = mt());
         const {
            target: P
         } = d;
         if (!P) {
            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
            return
         }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (wv(this.prevProjectionDelta.x, this.projectionDelta.x), wv(this.prevProjectionDelta.y, this.projectionDelta.y)), to(this.projectionDelta, this.layoutCorrected, P, this.latestValues), (this.treeScale.x !== w || this.treeScale.y !== T || !Pv(this.projectionDelta.x, this.prevProjectionDelta.x) || !Pv(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", P)), $a && Es.recalculatedProjection++
      }
      hide() {
         this.isVisible = !1
      }
      show() {
         this.isVisible = !0
      }
      scheduleRender(u = !0) {
         var d;
         if ((d = this.options.visualElement) === null || d === void 0 || d.scheduleRender(), u) {
            const p = this.getStack();
            p && p.scheduleRender()
         }
         this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
      }
      createProjectionDeltas() {
         this.prevProjectionDelta = xi(), this.projectionDelta = xi(), this.projectionDeltaWithTransform = xi()
      }
      setAnimationOrigin(u, d = !1) {
         const p = this.snapshot,
            m = p ? p.latestValues : {},
            y = {
               ...this.latestValues
            },
            v = xi();
         (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !d;
         const w = mt(),
            T = p ? p.source : void 0,
            P = this.layout ? this.layout.source : void 0,
            S = T !== P,
            C = this.getStack(),
            _ = !C || C.members.length <= 1,
            D = !!(S && !_ && this.options.crossfade === !0 && !this.path.some(t_));
         this.animationProgress = 0;
         let F;
         this.mixTargetDelta = $ => {
            const z = $ / 1e3;
            Dv(v.x, u.x, z), Dv(v.y, u.y, z), this.setTargetDelta(v), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (no(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox), e_(this.relativeTarget, this.relativeTargetOrigin, w, z), F && FP(this.relativeTarget, F) && (this.isProjectionDirty = !1), F || (F = mt()), gn(F, this.relativeTarget)), S && (this.animationValues = y, DP(y, m, this.latestValues, z, D, _)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = z
         }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
      }
      startAnimation(u) {
         this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (ns(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = et.update(() => {
            uc.hasAnimatedSinceResize = !0, this.currentAnimation = jP(0, _v, {
               ...u,
               onUpdate: d => {
                  this.mixTargetDelta(d), u.onUpdate && u.onUpdate(d)
               },
               onComplete: () => {
                  u.onComplete && u.onComplete(), this.completeAnimation()
               }
            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
         })
      }
      completeAnimation() {
         this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
         const u = this.getStack();
         u && u.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
      }
      finishAnimation() {
         this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(_v), this.currentAnimation.stop()), this.completeAnimation()
      }
      applyTransformsToTarget() {
         const u = this.getLead();
         let {
            targetWithTransforms: d,
            target: p,
            layout: m,
            latestValues: y
         } = u;
         if (!(!d || !p || !m)) {
            if (this !== u && this.layout && m && db(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
               p = this.target || mt();
               const v = cn(this.layout.layoutBox.x);
               p.x.min = u.target.x.min, p.x.max = p.x.min + v;
               const w = cn(this.layout.layoutBox.y);
               p.y.min = u.target.y.min, p.y.max = p.y.min + w
            }
            gn(d, p), bi(d, y), to(this.projectionDeltaWithTransform, this.layoutCorrected, d, y)
         }
      }
      registerSharedNode(u, d) {
         this.sharedNodes.has(u) || this.sharedNodes.set(u, new VP), this.sharedNodes.get(u).add(d);
         const m = d.options.initialPromotionConfig;
         d.promote({
            transition: m ? m.transition : void 0,
            preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(d) : void 0
         })
      }
      isLead() {
         const u = this.getStack();
         return u ? u.lead === this : !0
      }
      getLead() {
         var u;
         const {
            layoutId: d
         } = this.options;
         return d ? ((u = this.getStack()) === null || u === void 0 ? void 0 : u.lead) || this : this
      }
      getPrevLead() {
         var u;
         const {
            layoutId: d
         } = this.options;
         return d ? (u = this.getStack()) === null || u === void 0 ? void 0 : u.prevLead : void 0
      }
      getStack() {
         const {
            layoutId: u
         } = this.options;
         if (u) return this.root.sharedNodes.get(u)
      }
      promote({
         needsReset: u,
         transition: d,
         preserveFollowOpacity: p
      } = {}) {
         const m = this.getStack();
         m && m.promote(this, p), u && (this.projectionDelta = void 0, this.needsReset = !0), d && this.setOptions({
            transition: d
         })
      }
      relegate() {
         const u = this.getStack();
         return u ? u.relegate(this) : !1
      }
      resetSkewAndRotation() {
         const {
            visualElement: u
         } = this.options;
         if (!u) return;
         let d = !1;
         const {
            latestValues: p
         } = u;
         if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (d = !0), !d) return;
         const m = {};
         p.z && hf("z", u, m, this.animationValues);
         for (let y = 0; y < ff.length; y++) hf(`rotate${ff[y]}`, u, m, this.animationValues), hf(`skew${ff[y]}`, u, m, this.animationValues);
         u.render();
         for (const y in m) u.setStaticValue(y, m[y]), this.animationValues && (this.animationValues[y] = m[y]);
         u.scheduleRender()
      }
      getProjectionStyles(u) {
         var d, p;
         if (!this.instance || this.isSVG) return;
         if (!this.isVisible) return BP;
         const m = {
               visibility: ""
            },
            y = this.getTransformTemplate();
         if (this.needsReset) return this.needsReset = !1, m.opacity = "", m.pointerEvents = lc(u == null ? void 0 : u.pointerEvents) || "", m.transform = y ? y(this.latestValues, "") : "none", m;
         const v = this.getLead();
         if (!this.projectionDelta || !this.layout || !v.target) {
            const S = {};
            return this.options.layoutId && (S.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, S.pointerEvents = lc(u == null ? void 0 : u.pointerEvents) || ""), this.hasProjected && !js(this.latestValues) && (S.transform = y ? y({}, "") : "none", this.hasProjected = !1), S
         }
         const w = v.animationValues || v.latestValues;
         this.applyTransformsToTarget(), m.transform = zP(this.projectionDeltaWithTransform, this.treeScale, w), y && (m.transform = y(w, m.transform));
         const {
            x: T,
            y: P
         } = this.projectionDelta;
         m.transformOrigin = `${T.origin*100}% ${P.origin*100}% 0`, v.animationValues ? m.opacity = v === this ? (p = (d = w.opacity) !== null && d !== void 0 ? d : this.latestValues.opacity) !== null && p !== void 0 ? p : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : m.opacity = v === this ? w.opacity !== void 0 ? w.opacity : "" : w.opacityExit !== void 0 ? w.opacityExit : 0;
         for (const S in yc) {
            if (w[S] === void 0) continue;
            const {
               correct: C,
               applyTo: _
            } = yc[S], D = m.transform === "none" ? w[S] : C(w[S], v);
            if (_) {
               const F = _.length;
               for (let $ = 0; $ < F; $++) m[_[$]] = D
            } else m[S] = D
         }
         return this.options.layoutId && (m.pointerEvents = v === this ? lc(u == null ? void 0 : u.pointerEvents) || "" : "none"), m
      }
      clearSnapshot() {
         this.resumeFrom = this.snapshot = void 0
      }
      resetTree() {
         this.root.nodes.forEach(u => {
            var d;
            return (d = u.currentAnimation) === null || d === void 0 ? void 0 : d.stop()
         }), this.root.nodes.forEach(Nv), this.root.sharedNodes.clear()
      }
   }
}

function $P(t) {
   t.updateLayout()
}

function ZP(t) {
   var e;
   const r = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
   if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
      const {
         layoutBox: i,
         measuredBox: a
      } = t.layout, {
         animationType: l
      } = t.options, u = r.source !== t.layout.source;
      l === "size" ? yn(v => {
         const w = u ? r.measuredBox[v] : r.layoutBox[v],
            T = cn(w);
         w.min = i[v].min, w.max = w.min + T
      }) : db(l, r.layoutBox, i) && yn(v => {
         const w = u ? r.measuredBox[v] : r.layoutBox[v],
            T = cn(i[v]);
         w.max = w.min + T, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[v].max = t.relativeTarget[v].min + T)
      });
      const d = xi();
      to(d, i, r.layoutBox);
      const p = xi();
      u ? to(p, t.applyTransform(a, !0), r.measuredBox) : to(p, i, r.layoutBox);
      const m = !ob(d);
      let y = !1;
      if (!t.resumeFrom) {
         const v = t.getClosestProjectingParent();
         if (v && !v.resumeFrom) {
            const {
               snapshot: w,
               layout: T
            } = v;
            if (w && T) {
               const P = mt();
               no(P, r.layoutBox, w.layoutBox);
               const S = mt();
               no(S, i, T.layoutBox), lb(P, S) || (y = !0), v.options.layoutRoot && (t.relativeTarget = S, t.relativeTargetOrigin = P, t.relativeParent = v)
            }
         }
      }
      t.notifyListeners("didUpdate", {
         layout: i,
         snapshot: r,
         delta: p,
         layoutDelta: d,
         hasLayoutChanged: m,
         hasRelativeTargetChanged: y
      })
   } else if (t.isLead()) {
      const {
         onExitComplete: i
      } = t.options;
      i && i()
   }
   t.options.transition = void 0
}

function WP(t) {
   $a && Es.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function HP(t) {
   t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function QP(t) {
   t.clearSnapshot()
}

function Nv(t) {
   t.clearMeasurements()
}

function qP(t) {
   t.isLayoutDirty = !1
}

function KP(t) {
   const {
      visualElement: e
   } = t.options;
   e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function Av(t) {
   t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function GP(t) {
   t.resolveTargetDelta()
}

function YP(t) {
   t.calcProjection()
}

function XP(t) {
   t.resetSkewAndRotation()
}

function JP(t) {
   t.removeLeadSnapshot()
}

function Dv(t, e, r) {
   t.translate = it(e.translate, 0, r), t.scale = it(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint
}

function Iv(t, e, r, i) {
   t.min = it(e.min, r.min, i), t.max = it(e.max, r.max, i)
}

function e_(t, e, r, i) {
   Iv(t.x, e.x, r.x, i), Iv(t.y, e.y, r.y, i)
}

function t_(t) {
   return t.animationValues && t.animationValues.opacityExit !== void 0
}
const n_ = {
      duration: .45,
      ease: [.4, 0, .1, 1]
   },
   Mv = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
   Rv = Mv("applewebkit/") && !Mv("chrome/") ? Math.round : on;

function Ov(t) {
   t.min = Rv(t.min), t.max = Rv(t.max)
}

function r_(t) {
   Ov(t.x), Ov(t.y)
}

function db(t, e, r) {
   return t === "position" || t === "preserve-aspect" && !aP(Ev(e), Ev(r), .2)
}

function s_(t) {
   var e;
   return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const i_ = ub({
      attachResizeListener: (t, e) => fo(t, "resize", e),
      measureScroll: () => ({
         x: document.documentElement.scrollLeft || document.body.scrollLeft,
         y: document.documentElement.scrollTop || document.body.scrollTop
      }),
      checkIsScrollRoot: () => !0
   }),
   pf = {
      current: void 0
   },
   fb = ub({
      measureScroll: t => ({
         x: t.scrollLeft,
         y: t.scrollTop
      }),
      defaultParent: () => {
         if (!pf.current) {
            const t = new i_({});
            t.mount(window), t.setOptions({
               layoutScroll: !0
            }), pf.current = t
         }
         return pf.current
      },
      resetTransform: (t, e) => {
         t.style.transform = e !== void 0 ? e : "none"
      },
      checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
   }),
   a_ = {
      pan: {
         Feature: kP
      },
      drag: {
         Feature: bP,
         ProjectionNode: fb,
         MeasureLayout: sb
      }
   };

function Lv(t, e, r) {
   const {
      props: i
   } = t;
   t.animationState && i.whileHover && t.animationState.setActive("whileHover", r === "Start");
   const a = "onHover" + r,
      l = i[a];
   l && et.postRender(() => l(e, Mo(e)))
}
class o_ extends cs {
   mount() {
      const {
         current: e
      } = this.node;
      e && (this.unmount = lj(e, r => (Lv(this.node, r, "Start"), i => Lv(this.node, i, "End"))))
   }
   unmount() {}
}
class l_ extends cs {
   constructor() {
      super(...arguments), this.isActive = !1
   }
   onFocus() {
      let e = !1;
      try {
         e = this.node.current.matches(":focus-visible")
      } catch {
         e = !0
      }!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
   }
   onBlur() {
      !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
   }
   mount() {
      this.unmount = Io(fo(this.node.current, "focus", () => this.onFocus()), fo(this.node.current, "blur", () => this.onBlur()))
   }
   unmount() {}
}

function Fv(t, e, r) {
   const {
      props: i
   } = t;
   t.animationState && i.whileTap && t.animationState.setActive("whileTap", r === "Start");
   const a = "onTap" + (r === "End" ? "" : r),
      l = i[a];
   l && et.postRender(() => l(e, Mo(e)))
}
class c_ extends cs {
   mount() {
      const {
         current: e
      } = this.node;
      e && (this.unmount = fj(e, r => (Fv(this.node, r, "Start"), (i, {
         success: a
      }) => Fv(this.node, i, a ? "End" : "Cancel")), {
         useGlobalTarget: this.node.props.globalTapTarget
      }))
   }
   unmount() {}
}
const Yf = new WeakMap,
   mf = new WeakMap,
   u_ = t => {
      const e = Yf.get(t.target);
      e && e(t)
   },
   d_ = t => {
      t.forEach(u_)
   };

function f_({
   root: t,
   ...e
}) {
   const r = t || document;
   mf.has(r) || mf.set(r, {});
   const i = mf.get(r),
      a = JSON.stringify(e);
   return i[a] || (i[a] = new IntersectionObserver(d_, {
      root: t,
      ...e
   })), i[a]
}

function h_(t, e, r) {
   const i = f_(e);
   return Yf.set(t, r), i.observe(t), () => {
      Yf.delete(t), i.unobserve(t)
   }
}
const p_ = {
   some: 0,
   all: 1
};
class m_ extends cs {
   constructor() {
      super(...arguments), this.hasEnteredView = !1, this.isInView = !1
   }
   startObserver() {
      this.unmount();
      const {
         viewport: e = {}
      } = this.node.getProps(), {
         root: r,
         margin: i,
         amount: a = "some",
         once: l
      } = e, u = {
         root: r ? r.current : void 0,
         rootMargin: i,
         threshold: typeof a == "number" ? a : p_[a]
      }, d = p => {
         const {
            isIntersecting: m
         } = p;
         if (this.isInView === m || (this.isInView = m, l && !m && this.hasEnteredView)) return;
         m && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", m);
         const {
            onViewportEnter: y,
            onViewportLeave: v
         } = this.node.getProps(), w = m ? y : v;
         w && w(p)
      };
      return h_(this.node.current, u, d)
   }
   mount() {
      this.startObserver()
   }
   update() {
      if (typeof IntersectionObserver > "u") return;
      const {
         props: e,
         prevProps: r
      } = this.node;
      ["amount", "margin", "root"].some(g_(e, r)) && this.startObserver()
   }
   unmount() {}
}

function g_({
   viewport: t = {}
}, {
   viewport: e = {}
} = {}) {
   return r => t[r] !== e[r]
}
const y_ = {
      inView: {
         Feature: m_
      },
      tap: {
         Feature: c_
      },
      focus: {
         Feature: l_
      },
      hover: {
         Feature: o_
      }
   },
   v_ = {
      layout: {
         ProjectionNode: fb,
         MeasureLayout: sb
      }
   },
   Xf = {
      current: null
   },
   hb = {
      current: !1
   };

function x_() {
   if (hb.current = !0, !!Ch)
      if (window.matchMedia) {
         const t = window.matchMedia("(prefers-reduced-motion)"),
            e = () => Xf.current = t.matches;
         t.addListener(e), e()
      } else Xf.current = !1
}
const w_ = [...Lw, Ot, rs],
   b_ = t => w_.find(Ow(t)),
   Vv = new WeakMap;

function k_(t, e, r) {
   for (const i in e) {
      const a = e[i],
         l = r[i];
      if (Lt(a)) t.addValue(i, a);
      else if (Lt(l)) t.addValue(i, co(a, {
         owner: t
      }));
      else if (l !== a)
         if (t.hasValue(i)) {
            const u = t.getValue(i);
            u.liveStyle === !0 ? u.jump(a) : u.hasAnimated || u.set(a)
         } else {
            const u = t.getStaticValue(i);
            t.addValue(i, co(u !== void 0 ? u : a, {
               owner: t
            }))
         }
   }
   for (const i in r) e[i] === void 0 && t.removeValue(i);
   return e
}
const zv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class S_ {
   scrapeMotionValuesFromProps(e, r, i) {
      return {}
   }
   constructor({
      parent: e,
      props: r,
      presenceContext: i,
      reducedMotionConfig: a,
      blockInitialAnimation: l,
      visualState: u
   }, d = {}) {
      this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Jh, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
         this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
      }, this.renderScheduledAt = 0, this.scheduleRender = () => {
         const T = Kn.now();
         this.renderScheduledAt < T && (this.renderScheduledAt = T, et.render(this.render, !1, !0))
      };
      const {
         latestValues: p,
         renderState: m,
         onUpdate: y
      } = u;
      this.onUpdate = y, this.latestValues = p, this.baseTarget = {
         ...p
      }, this.initialValues = r.initial ? {
         ...p
      } : {}, this.renderState = m, this.parent = e, this.props = r, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = a, this.options = d, this.blockInitialAnimation = !!l, this.isControllingVariants = Zc(r), this.isVariantNode = Zx(r), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
      const {
         willChange: v,
         ...w
      } = this.scrapeMotionValuesFromProps(r, {}, this);
      for (const T in w) {
         const P = w[T];
         p[T] !== void 0 && Lt(P) && P.set(p[T], !1)
      }
   }
   mount(e) {
      this.current = e, Vv.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, i) => this.bindToMotionValue(i, r)), hb.current || x_(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Xf.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
   }
   unmount() {
      Vv.delete(this.current), this.projection && this.projection.unmount(), ns(this.notifyUpdate), ns(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
      for (const e in this.events) this.events[e].clear();
      for (const e in this.features) {
         const r = this.features[e];
         r && (r.unmount(), r.isMounted = !1)
      }
      this.current = null
   }
   bindToMotionValue(e, r) {
      this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
      const i = Us.has(e),
         a = r.on("change", d => {
            this.latestValues[e] = d, this.props.onUpdate && et.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0)
         }),
         l = r.on("renderRequest", this.scheduleRender);
      let u;
      window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, e, r)), this.valueSubscriptions.set(e, () => {
         a(), l(), u && u(), r.owner && r.stop()
      })
   }
   sortNodePosition(e) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
   }
   updateFeatures() {
      let e = "animation";
      for (e in Vi) {
         const r = Vi[e];
         if (!r) continue;
         const {
            isEnabled: i,
            Feature: a
         } = r;
         if (!this.features[e] && a && i(this.props) && (this.features[e] = new a(this)), this.features[e]) {
            const l = this.features[e];
            l.isMounted ? l.update() : (l.mount(), l.isMounted = !0)
         }
      }
   }
   triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props)
   }
   measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : mt()
   }
   getStaticValue(e) {
      return this.latestValues[e]
   }
   setStaticValue(e, r) {
      this.latestValues[e] = r
   }
   update(e, r) {
      (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
      for (let i = 0; i < zv.length; i++) {
         const a = zv[i];
         this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
         const l = "on" + a,
            u = e[l];
         u && (this.propEventSubscriptions[a] = this.on(a, u))
      }
      this.prevMotionValues = k_(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
   }
   getProps() {
      return this.props
   }
   getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0
   }
   getDefaultTransition() {
      return this.props.transition
   }
   getTransformPagePoint() {
      return this.props.transformPagePoint
   }
   getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
   }
   addVariantChild(e) {
      const r = this.getClosestVariantNode();
      if (r) return r.variantChildren && r.variantChildren.add(e), () => r.variantChildren.delete(e)
   }
   addValue(e, r) {
      const i = this.values.get(e);
      r !== i && (i && this.removeValue(e), this.bindToMotionValue(e, r), this.values.set(e, r), this.latestValues[e] = r.get())
   }
   removeValue(e) {
      this.values.delete(e);
      const r = this.valueSubscriptions.get(e);
      r && (r(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
   }
   hasValue(e) {
      return this.values.has(e)
   }
   getValue(e, r) {
      if (this.props.values && this.props.values[e]) return this.props.values[e];
      let i = this.values.get(e);
      return i === void 0 && r !== void 0 && (i = co(r === null ? void 0 : r, {
         owner: this
      }), this.addValue(e, i)), i
   }
   readValue(e, r) {
      var i;
      let a = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
      return a != null && (typeof a == "string" && (Mw(a) || Cw(a)) ? a = parseFloat(a) : !b_(a) && rs.test(r) && (a = Aw(e, r)), this.setBaseTarget(e, Lt(a) ? a.get() : a)), Lt(a) ? a.get() : a
   }
   setBaseTarget(e, r) {
      this.baseTarget[e] = r
   }
   getBaseTarget(e) {
      var r;
      const {
         initial: i
      } = this.props;
      let a;
      if (typeof i == "string" || typeof i == "object") {
         const u = Dh(this.props, i, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
         u && (a = u[e])
      }
      if (i && a !== void 0) return a;
      const l = this.getBaseTargetFromProps(this.props, e);
      return l !== void 0 && !Lt(l) ? l : this.initialValues[e] !== void 0 && a === void 0 ? void 0 : this.baseTarget[e]
   }
   on(e, r) {
      return this.events[e] || (this.events[e] = new Hh), this.events[e].add(r)
   }
   notify(e, ...r) {
      this.events[e] && this.events[e].notify(...r)
   }
}
class pb extends S_ {
   constructor() {
      super(...arguments), this.KeyframeResolver = Fw
   }
   sortInstanceNodePosition(e, r) {
      return e.compareDocumentPosition(r) & 2 ? 1 : -1
   }
   getBaseTargetFromProps(e, r) {
      return e.style ? e.style[r] : void 0
   }
   removeValueFromRenderState(e, {
      vars: r,
      style: i
   }) {
      delete r[e], delete i[e]
   }
   handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      const {
         children: e
      } = this.props;
      Lt(e) && (this.childSubscription = e.on("change", r => {
         this.current && (this.current.textContent = `${r}`)
      }))
   }
}

function T_(t) {
   return window.getComputedStyle(t)
}
class C_ extends pb {
   constructor() {
      super(...arguments), this.type = "html", this.renderInstance = Jx
   }
   readValueFromInstance(e, r) {
      if (Us.has(r)) {
         const i = Xh(r);
         return i && i.default || 0
      } else {
         const i = T_(e),
            a = (Gx(r) ? i.getPropertyValue(r) : i[r]) || 0;
         return typeof a == "string" ? a.trim() : a
      }
   }
   measureInstanceViewportBox(e, {
      transformPagePoint: r
   }) {
      return nb(e, r)
   }
   build(e, r, i) {
      Rh(e, r, i.transformTemplate)
   }
   scrapeMotionValuesFromProps(e, r, i) {
      return Vh(e, r, i)
   }
}
class j_ extends pb {
   constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = mt
   }
   getBaseTargetFromProps(e, r) {
      return e[r]
   }
   readValueFromInstance(e, r) {
      if (Us.has(r)) {
         const i = Xh(r);
         return i && i.default || 0
      }
      return r = ew.has(r) ? r : _h(r), e.getAttribute(r)
   }
   scrapeMotionValuesFromProps(e, r, i) {
      return rw(e, r, i)
   }
   build(e, r, i) {
      Oh(e, r, this.isSVGTag, i.transformTemplate)
   }
   renderInstance(e, r, i, a) {
      tw(e, r, i, a)
   }
   mount(e) {
      this.isSVGTag = Fh(e.tagName), super.mount(e)
   }
}
const E_ = (t, e) => Ah(t) ? new j_(e) : new C_(e, {
      allowProjection: t !== b.Fragment
   }),
   P_ = nj({
      ...YE,
      ...y_,
      ...a_,
      ...v_
   }, E_),
   Te = yC(P_);

function __(t) {
   t.values.forEach(e => e.stop())
}

function Jf(t, e) {
   [...e].reverse().forEach(i => {
      const a = t.getVariant(i);
      a && Qh(t, a), t.variantChildren && t.variantChildren.forEach(l => {
         Jf(l, e)
      })
   })
}

function N_(t, e) {
   if (Array.isArray(e)) return Jf(t, e);
   if (typeof e == "string") return Jf(t, [e]);
   Qh(t, e)
}

function A_() {
   const t = new Set,
      e = {
         subscribe(r) {
            return t.add(r), () => void t.delete(r)
         },
         start(r, i) {
            const a = [];
            return t.forEach(l => {
               a.push(Qw(l, r, {
                  transitionOverride: i
               }))
            }), Promise.all(a)
         },
         set(r) {
            return t.forEach(i => {
               N_(i, r)
            })
         },
         stop() {
            t.forEach(r => {
               __(r)
            })
         },
         mount() {
            return () => {
               e.stop()
            }
         }
      };
   return e
}

function D_() {
   const t = Lx(A_);
   return Vx(t.mount, []), t
}
const mb = D_,
   I_ = {
      some: 0,
      all: 1
   };

function M_(t, e, {
   root: r,
   margin: i,
   amount: a = "some"
} = {}) {
   const l = dw(t),
      u = new WeakMap,
      d = m => {
         m.forEach(y => {
            const v = u.get(y.target);
            if (y.isIntersecting !== !!v)
               if (y.isIntersecting) {
                  const w = e(y);
                  typeof w == "function" ? u.set(y.target, w) : p.unobserve(y.target)
               } else typeof v == "function" && (v(y), u.delete(y.target))
         })
      },
      p = new IntersectionObserver(d, {
         root: r,
         rootMargin: i,
         threshold: typeof a == "number" ? a : I_[a]
      });
   return l.forEach(m => p.observe(m)), () => p.disconnect()
}

function R_(t, {
   root: e,
   margin: r,
   amount: i,
   once: a = !1
} = {}) {
   const [l, u] = b.useState(!1);
   return b.useEffect(() => {
      if (!t.current || a && l) return;
      const d = () => (u(!0), a ? void 0 : () => u(!1)),
         p = {
            root: e && e.current || void 0,
            margin: r,
            amount: i
         };
      return M_(t.current, d, p)
   }, [e, t, r, a, i]), l
}
var gb = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0
   },
   Bv = be.createContext && be.createContext(gb),
   O_ = ["attr", "size", "title"];

function L_(t, e) {
   if (t == null) return {};
   var r = F_(t, e),
      i, a;
   if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(t);
      for (a = 0; a < l.length; a++) i = l[a], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (r[i] = t[i])
   }
   return r
}

function F_(t, e) {
   if (t == null) return {};
   var r = {};
   for (var i in t)
      if (Object.prototype.hasOwnProperty.call(t, i)) {
         if (e.indexOf(i) >= 0) continue;
         r[i] = t[i]
      } return r
}

function Sc() {
   return Sc = Object.assign ? Object.assign.bind() : function (t) {
      for (var e = 1; e < arguments.length; e++) {
         var r = arguments[e];
         for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
      }
      return t
   }, Sc.apply(this, arguments)
}

function Uv(t, e) {
   var r = Object.keys(t);
   if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e && (i = i.filter(function (a) {
         return Object.getOwnPropertyDescriptor(t, a).enumerable
      })), r.push.apply(r, i)
   }
   return r
}

function Tc(t) {
   for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e] != null ? arguments[e] : {};
      e % 2 ? Uv(Object(r), !0).forEach(function (i) {
         V_(t, i, r[i])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Uv(Object(r)).forEach(function (i) {
         Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(r, i))
      })
   }
   return t
}

function V_(t, e, r) {
   return e = z_(e), e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
   }) : t[e] = r, t
}

function z_(t) {
   var e = B_(t, "string");
   return typeof e == "symbol" ? e : e + ""
}

function B_(t, e) {
   if (typeof t != "object" || !t) return t;
   var r = t[Symbol.toPrimitive];
   if (r !== void 0) {
      var i = r.call(t, e);
      if (typeof i != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.")
   }
   return (e === "string" ? String : Number)(t)
}

function yb(t) {
   return t && t.map((e, r) => be.createElement(e.tag, Tc({
      key: r
   }, e.attr), yb(e.child)))
}

function Wt(t) {
   return e => be.createElement(U_, Sc({
      attr: Tc({}, t.attr)
   }, e), yb(t.child))
}

function U_(t) {
   var e = r => {
      var {
         attr: i,
         size: a,
         title: l
      } = t, u = L_(t, O_), d = a || r.size || "1em", p;
      return r.className && (p = r.className), t.className && (p = (p ? p + " " : "") + t.className), be.createElement("svg", Sc({
         stroke: "currentColor",
         fill: "currentColor",
         strokeWidth: "0"
      }, r.attr, i, u, {
         className: p,
         style: Tc(Tc({
            color: t.color || r.color
         }, r.style), t.style),
         height: d,
         width: d,
         xmlns: "http://www.w3.org/2000/svg"
      }), l && be.createElement("title", null, l), t.children)
   };
   return Bv !== void 0 ? be.createElement(Bv.Consumer, null, r => e(r)) : e(gb)
}

function qi(t) {
   return Wt({
      attr: {
         viewBox: "0 0 496 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
         },
         child: []
      }]
   })(t)
}

function $_(t) {
   return Wt({
      attr: {
         viewBox: "0 0 512 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z"
         },
         child: []
      }]
   })(t)
}

function vb(t) {
   return Wt({
      attr: {
         viewBox: "0 0 448 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
         },
         child: []
      }]
   })(t)
}

function Z_(t) {
   return Wt({
      attr: {
         viewBox: "0 0 448 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
         },
         child: []
      }]
   })(t)
}

function xb(t) {
   return Wt({
      attr: {
         viewBox: "0 0 448 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
         },
         child: []
      }]
   })(t)
}

function W_(t) {
   return Wt({
      attr: {
         viewBox: "0 0 448 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
         },
         child: []
      }]
   })(t)
}

function $v(t) {
   return Wt({
      attr: {
         viewBox: "0 0 512 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"
         },
         child: []
      }]
   })(t)
}

function H_(t) {
   return Wt({
      attr: {
         viewBox: "0 0 512 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
         },
         child: []
      }]
   })(t)
}

function Q_(t) {
   return Wt({
      attr: {
         viewBox: "0 0 640 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"
         },
         child: []
      }]
   })(t)
}

function q_(t) {
   return Wt({
      attr: {
         viewBox: "0 0 512 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
         },
         child: []
      }]
   })(t)
}

function rp(t) {
   return Wt({
      attr: {
         viewBox: "0 0 512 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
         },
         child: []
      }]
   })(t)
}

function K_(t) {
   return Wt({
      attr: {
         viewBox: "0 0 512 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"
         },
         child: []
      }]
   })(t)
}

function G_(t) {
   return Wt({
      attr: {
         viewBox: "0 0 640 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
         },
         child: []
      }]
   })(t)
}

function Y_(t) {
   return Wt({
      attr: {
         viewBox: "0 0 512 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
         },
         child: []
      }]
   })(t)
}

function wb(t) {
   return Wt({
      attr: {
         viewBox: "0 0 384 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
         },
         child: []
      }]
   })(t)
}
const X_ = () => {
      const t = {
            hidden: {
               opacity: 0
            },
            visible: {
               opacity: 1,
               transition: {
                  delayChildren: .3,
                  staggerChildren: .2
               }
            }
         },
         e = {
            hidden: {
               y: 20,
               opacity: 0
            },
            visible: {
               y: 0,
               opacity: 1,
               transition: {
                  duration: .5
               }
            }
         },
         r = i => {
            const a = document.getElementById(i);
            if (a) {
               const l = a.offsetTop - 80;
               window.scrollTo({
                  top: l,
                  behavior: "smooth"
               })
            }
         };
      return f.jsx("section", {
         id: "home",
         className: "min-h-screen pt-32 md:pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300",
         children: f.jsx("div", {
            className: "container mx-auto",
            children: f.jsxs("div", {
               className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",
               children: [f.jsxs(Te.div, {
                  className: "lg:col-span-7 space-y-6",
                  variants: t,
                  initial: "hidden",
                  animate: "visible",
                  children: [f.jsx(Te.div, {
                     variants: e,
                     className: "inline-block px-3 py-1 rounded-full bg-blue-100 text-primary text-sm font-medium",
                     children: "Researcher"
                  }), f.jsxs(Te.h1, {
                     variants: e,
                     className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white transition-colors duration-300",
                     children: ["Transforming simulations into", " ", f.jsx("span", {
                        className: "text-primary",
                        children: "structural solutions"
                     })]
                  }), f.jsx(Te.p, {
                     variants: e,
                     className: "text-lg text-gray-600 dark:text-gray-300 max-w-2xl transition-colors duration-300",
                     children: "Hi, I'm Shubham. My interests are informed decisions through advanced computational modeling, structural analysis, and high-fidelity simulations. With expertise in FEniCS, Python, and finite-element methods, I aim to transform complex physical problems into actionable insights that enhance structural performance and design innovation."
                  }), f.jsxs(Te.div, {
                     variants: e,
                     className: "flex flex-wrap gap-4 pt-4",
                     children: [f.jsxs("button", {
                        onClick: () => r("projects"),
                        className: "px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors font-medium flex items-center",
                        children: ["View My Work ", f.jsx(uT, {
                           className: "ml-2 h-4 w-4"
                        })]
                     }), f.jsx("button", {
                        onClick: () => r("contact"),
                        className: "px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:border-primary hover:text-primary dark:hover:text-primary transition-colors font-medium",
                        children: "Contact Me"
                     })]
                  }), f.jsxs(Te.div, {
                     variants: e,
                     className: "flex gap-4 pt-4",
                     children: [f.jsx("a", {
                        href: "https://github.com/iitrshubham",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300",
                        "aria-label": "GitHub",
                        children: f.jsx(qi, {
                           className: "text-2xl"
                        })
                     }), f.jsx("a", {
                        href: "https://www.linkedin.com/in/iitrshubham/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300",
                        "aria-label": "LinkedIn",
                        children: f.jsx(vb, {
                           className: "text-2xl"
                        })
                     }), f.jsx("a", {
                        href: "mailto:shubham.ce@sric.iitr.ac.in",
                        className: "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300",
                        "aria-label": "Email",
                        children: f.jsx(rp, {
                           className: "text-2xl"
                        })
                     })]
                  })]
               }), f.jsx(Te.div, {
                  className: "lg:col-span-5",
                  initial: {
                     opacity: 0,
                     scale: .95
                  },
                  animate: {
                     opacity: 1,
                     scale: 1
                  },
                  transition: {
                     duration: .5,
                     delay: .3
                  },
                  children: f.jsxs("div", {
                     className: "relative",
                     children: [f.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-primary to-blue-400 opacity-10 rounded-2xl transform rotate-6"
                     }), f.jsxs("div", {
                        className: "rounded-2xl shadow-lg relative z-10 w-full h-auto bg-white dark:bg-gray-800 p-4 flex flex-col items-center transition-colors duration-300",
                        children: [f.jsx("div", {
                           className: "w-40 h-40 rounded-full bg-gradient-to-r from-primary to-blue-400 shadow-md mb-6 flex items-center justify-center text-white text-5xl font-bold overflow-hidden border-4 border-white dark:border-gray-700 transition-colors duration-300",
                           children: f.jsx("img", {
                              src: "https://raw.githubusercontent.com/iitrshubham/iitrshubham.github.io/refs/heads/main/image/profile_image.png",
                              alt: "Shubham",
                              className: "w-full h-full object-cover rounded-full"
                           })
                        }), f.jsx("h3", {
                           className: "text-2xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300",
                           children: "Shubham"
                        }), f.jsx("p", {
                           className: "text-primary font-medium mb-4",
                           children: "Using programming across different research domains"
                        }), f.jsxs("div", {
                           className: "w-full mt-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300",
                           children: [f.jsx("h4", {
                              className: "text-lg font-semibold text-gray-700 dark:text-white mb-3 transition-colors duration-300",
                              children: "Professional Expertise"
                           }), f.jsxs("div", {
                              className: "grid grid-cols-2 gap-3",
                              children: [f.jsxs("div", {
                                 className: "bg-blue-50 dark:bg-blue-900/30 p-3 rounded-md transition-colors duration-300",
                                 children: [f.jsx("div", {
                                    className: "text-blue-600 dark:text-blue-400 font-medium mb-1 transition-colors duration-300",
                                    children: "Metamaterials"
                                 }), f.jsx("div", {
                                    className: "text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300",
                                    children: "Multifunctional"
                                 })]
                              }), f.jsxs("div", {
                                 className: "bg-green-50 dark:bg-green-900/30 p-3 rounded-md transition-colors duration-300",
                                 children: [f.jsx("div", {
                                    className: "text-green-600 dark:text-green-400 font-medium mb-1 transition-colors duration-300",
                                    children: "Health monitoring"
                                 }), f.jsx("div", {
                                    className: "text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300",
                                    children: "Vibration and Impedance-based"
                                 })]
                              }), f.jsxs("div", {
                                 className: "bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded-md transition-colors duration-300",
                                 children: [f.jsx("div", {
                                    className: "text-yellow-600 dark:text-yellow-400 font-medium mb-1 transition-colors duration-300",
                                    children: "Bridge Engineering"
                                 }), f.jsx("div", {
                                    className: "text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300",
                                    children: "Design using TO and IRC specifications"
                                 })]
                              }), f.jsxs("div", {
                                 className: "bg-purple-50 dark:bg-purple-900/30 p-3 rounded-md transition-colors duration-300",
                                 children: [f.jsx("div", {
                                    className: "text-purple-600 dark:text-purple-400 font-medium mb-1 transition-colors duration-300",
                                    children: "Topology optimization"
                                 }), f.jsx("div", {
                                    className: "text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300",
                                    children: "Advanced analytics & forecasting"
                                 })]
                              })]
                           })]
                        })]
                     })]
                  })
               })]
            })
         })
      })
   },
   bb = ({
      project: t
   }) => {
      const [, e] = ls(), r = () => {
         e(`/project/${t.slug}`)
      };
      return f.jsx(Te.div, {
         className: "bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg project-card cursor-pointer transition-colors duration-300",
         whileHover: {
            y: -5
         },
         transition: {
            duration: .3
         },
         onClick: r,
         children: f.jsxs("div", {
            className: "p-6",
            children: [f.jsxs("div", {
               className: "flex justify-between items-start mb-3",
               children: [f.jsx("h3", {
                  className: "text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300",
                  children: t.title
               }), f.jsx("span", {
                  className: `text-xs px-2 py-1 rounded-full ${t.tagColor}`,
                  children: t.tag
               })]
            }), t.thumbhnailUrl && f.jsx("div", {
               className: "mb-10",
               children: f.jsx("div", {
                  className: "w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 transition-colors duration-300",
                  children: f.jsx("img", {
                     src: t.thumbhnailUrl,
                     alt: t.title + " cover",
                     className: "w-full object-cover aspect-[16/9]"
                  })
               })
            }), f.jsx("p", {
               className: "text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 transition-colors duration-300",
               children: t.description
            }), f.jsxs("div", {
               className: "flex justify-between items-center",
               children: [f.jsxs("button", {
                  onClick: i => {
                     i.stopPropagation(), r()
                  },
                  className: "text-primary hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center transition-colors duration-300",
                  children: ["View Project ", f.jsx(W_, {
                     className: "ml-1 text-sm"
                  })]
               }), f.jsx("a", {
                  href: t.githubUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300",
                  "aria-label": "GitHub repository",
                  onClick: i => i.stopPropagation(),
                  children: f.jsx(qi, {
                     className: "text-xl"
                  })
               })]
            })]
         })
      })
   },
   ro = [{
      id: 1,
      title: "Topology optimization",
      slug: "topology-optimization",
      description: "Topology Optimization is a computational technique used to determine the most efficient material layout within a given design space, for a given set of loads, boundary conditions, and constraints, with the goal of maximizing performance while minimizing material usage.",
      tag: "Topology optimization",
      tagColor: "bg-yellow-100 text-yellow-700",
      category: "Topology optimization",
      githubUrl: "https://github.com/iitrshubham",
      methodology: `• Extracted and analyzed business-critical data using advanced SQL queries to ensure accuracy and reliability.
                   • Developed interactive Bridge engg dashboards by integrating multiple datasets, highlighting store performance, promotion impact, and product responsiveness.
                   • Maintained consistent and clean data across platforms to support dependable and data-driven decision-making.
                   • Created intuitive visualizations and KPIs to identify high-performing cities, successful promotions, and top-selling products, providing insights into pricing and operational strategies.`,
      resultsAndImpact: `• Bengaluru and Chennai were the top performers in Incremental Sold Units and Revenue, followed by Hyderabad, Coimbatore, and Mysuru.
                       • BOGOF (Buy One Get One Free) and 500 cashback promotions significantly outperformed discount-based offers in driving sales.
                       • Grocery & Staples and Home Appliances showed the most substantial promotional lift, with standout products like Atliq Waterproof Immersion Red and Atliq High Glo 15W LED Bulb.
                       • Achieved a 211.3% increase in Incremental Sold Units and 110% increase in Incremental Revenue.
                       • Insights supported city-specific strategies, product-level prioritization, and promotion refinement, benefiting Atliq Mart’s 50+ store operations.`,
      skills: ["Coding", "Geometry modelling"],
      tools: ["Gmsh", "Paraview", "FEniCS"],
      imageUrl: "https://raw.githubusercontent.com/iitrshubham/iitrshubham.github.io/refs/heads/main/image/project1.png",
      thumbhnailUrl: "https://raw.githubusercontent.com/iitrshubham/iitrshubham.github.io/refs/heads/main/image/project1.png"
   }, {
      id: 2,
      title: "Metamaterials",
      slug: "metamaterials",
      description: "Metamaterials are artificially engineered materials designed to have properties not found in naturally occurring materials. Their unique behavior arises from their structure rather than their composition. Typically, they are made from repeating units (often called unit cells) that are smaller than the wavelength of the phenomena they are designed to influence (such as electromagnetic waves, sound, or mechanical vibrations).",
      tag: "Metamaterials",
      tagColor: "bg-green-100 text-green-700",
      category: "Metamaterials",
      githubUrl: "https://github.com/iitrshubham",
      methodology: `• Tailored properties: Metamaterials can be designed to exhibit negative refractive index, cloaking, superlensing, or unusual mechanical properties like negative Poisson’s ratio (auxetics).
                   • Structure-driven behavior: Unlike conventional materials, the effective behavior of metamaterials is governed by their micro- or nano-scale geometry, not just their material composition.
                   • Multiphysical response: They can be designed for electromagnetic, acoustic, thermal, or mechanical responses—or combinations thereof.`,
      resultsAndImpact: ` • Electromagnetic metamaterials (e.g., for invisibility cloaks, antennas)
                        • Acoustic metamaterials (e.g., sound insulation, wave redirection)
                        • Mechanical/metastructures (e.g., auxetic lattices, impact absorbers)
                        • Thermal metamaterials (e.g., thermal cloaking, heat guiding).`,
      skills: ["Customer Segmentation", "Dashboard Design", "Insight Generation", "Presentation & Reporting"],
      tools: ["Bridge engg (DAX)", "Microsoft PowerPoint"],
      imageUrl: "https://raw.githubusercontent.com/iitrshubham/iitrshubham.github.io/refs/heads/main/image/project2.png",
      thumbhnailUrl: "https://raw.githubusercontent.com/iitrshubham/iitrshubham.github.io/refs/heads/main/image/project2.png"
   }, {
      id: 3,
      title: "Bandgap metamaterials",
      slug: "bandgap-metamaterials",
      description: "This Bridge engg dashboard transformed decision-making for a global skincare e-store by unlocking hidden growth opportunities. By analyzing 100K+ transactions, I identified key profit drivers that delivered 50.58% YoY sales growth (exceeding targets by 2.5x) and boosted average margins to 19.14%. The interactive dashboard revealed the US market's $1.07M profit potential and uncovered high-value customer segments, enabling targeted campaigns that increased Q3 sales by 12%. My data storytelling turned complex sales data into actionable strategies that stakeholders used to optimize pricing, marketing spend, and regional expansion.",
      tag: "Bandgap metamaterials",
      tagColor: "bg-green-100 text-green-700",
      category: "Bandgap metamaterials",
      githubUrl: "https://github.com/iitrshubham",
      methodology: `• Integrated and cleaned data across customers, markets, products, and discounts.
                   • Segmented data by region, product category, and customer segment.
                   • Used DAX for computing YOY growth, profit margins, and discount impact.
                   • Built interactive dashboards with filters and slicers to explore KPIs, sales trends, and customer behavior.
                   • Enabled real-time tracking and actionable decision-making insights for business stakeholders.`,
      resultsAndImpact: ` • Achieved 50.58% YOY sales growth and 19.14% average profit margin, exceeding the target of 15%.
                        • United States generated $1.07M in profit; Germany and China also performed strongly.
                        • Consumer segment accounted for 52.93% of total sales; Corporate segment contributed 31.06% of total profit.
                        • High-value customers like LS-172001402 highlighted the potential for customer-focused strategies.
                        • Recommended regional promotions, product line expansion, and loyalty programs to boost engagement and growth.`,
      skills: ["Sales & Market Analysis", "Customer Segmentation", "Profitability Tracking", "KPI Monitoring"],
      tools: ["Bridge engg (DAX)", "Excel"],
      imageUrl: "https://raw.githubusercontent.com/iitrshubham/iitrshubham.github.io/refs/heads/main/image/project2.png",
      thumbhnailUrl: "https://raw.githubusercontent.com/iitrshubham/iitrshubham.github.io/refs/heads/main/image/project3.png"
   }, {
      id: 4,
      title: "Robust topology optimization",
      slug: "robust-topology-optimization",
      description: "This project focused on analyzing human resource data to gain actionable insights into employee distribution, compensation, turnover, retention, and departmental trends. The goal was to help HR leadership make data-driven decisions regarding employee management and workforce planning.",
      tag: "Uncertainty",
      tagColor: "bg-green-100 text-green-700",
      category: "Uncertainty",
      githubUrl: "https://github.com/iitrshubham",
      methodology: `• Collected and explored structured HR data related to employee demographics, salary, bonuses, and departmental roles.
                   • Cleaned and transformed data to ensure consistency and usability for visualization.
                   • Built interactive dashboards to track KPIs such as total employees, salary trends, bonus distribution, retention/turnover rates, and gender-wise employee ratios.
                   • Performed segmented analysis by business unit, year, department, and job title to derive deeper insights.`,
      resultsAndImpact: ` • Identified that the average salary across departments was $113K, with the highest being in Marketing and Vice President roles.
                        • Highlighted bonus trends, with Corporate receiving the highest average bonus ($19K).
                        • Turnover rates were slightly higher for male employees (9.5%) compared to females (7.5%).
                        • Business units like Speciality Products had higher retention (93.21%), aiding in targeted employee engagement strategies.
                        • Created a dynamic HR dashboard to allow stakeholders to filter insights by year, department, gender, and more—empowering the HR team to make informed, strategic decisions.`,
      skills: ["Data Cleaning", "Data Analysis", "Dashboard Development", "KPI Tracking", "Insight Generation"],
      tools: ["Microsoft Bridge engg", "Data Modeling", "DAX"],
      imageUrl: "https://raw.githubusercontent.com/iitrshubham/iitrshubham.github.io/refs/heads/main/image/project4.png",
      thumbhnailUrl: "https://raw.githubusercontent.com/iitrshubham/iitrshubham.github.io/refs/heads/main/image/project4.png"
   }, {
      id: 5,
      title: "Ellipsoid convex model",
      slug: "ellipsoid-convex-model",
      description: "This project focused on analyzing a comprehensive dataset from IMDB to uncover insights related to movie genres, revenue, budget trends, popularity, and production house performance. The goal was to create an interactive dashboard that supports data-driven decisions in the entertainment industry.",
      tag: "Uncertainty",
      tagColor: "bg-green-100 text-green-700",
      category: "Uncertainty",
      githubUrl: "https://github.com/iitrshubham",
      methodology: ` • Conducted data cleaning and transformation using Power Query in Bridge engg to handle inconsistencies, null values, and prepare data for analysis.
                    • Performed data modeling to define relationships between key fields such as year, genre, production house, and financial metrics.
                    • Created interactive visualizations to analyze trends in revenue and budget over time, genre popularity, and vote count distributions.
                    • Enabled drill-through capabilities to examine top-performing movies and studios over various time periods.`,
      resultsAndImpact: ` • Analyzed a total of 246K movies, revealing $728B in revenue and $283B in budgets across the dataset.
                        • Identified Drama and Comedy as the most prevalent genres, while highlighting the top 10 trending movies by popularity and votes.
                        • Discovered that companies like Walt Disney, Universal Pictures, and Warner Bros. consistently produced high-grossing content.
                        • Delivered a user-friendly dashboard that empowers users to explore trends by year, genre, and production company with just a few clicks.`,
      skills: ["Data Cleaning (Power Query)", "Data Modeling", "DAX, Dashboard Design", "Trend Analysis"],
      tools: ["Power Query", "Data Model", "DAX", "Visualization"],
      imageUrl: "https://raw.githubusercontent.com/iitrshubham/iitrshubham.github.io/refs/heads/main/image/project5.png",
      thumbhnailUrl: "https://raw.githubusercontent.com/iitrshubham/iitrshubham.github.io/refs/heads/main/image/project5.png"
   }, {
      id: 6,
      title: "Extreme metamaterials design by topology optimization",
      slug: "extreme-metamaterials-design-by-topology-optimization",
      description: "This project analyzes Telangana’s economic and industrial growth by combining datasets from three government departments: Stamp Registration, Transportation, and TS-iPASS (Industrial Project Approvals). It focuses on trends in revenue, vehicle registrations, and sector-wise investments across districts between 2019 and 2022.",
      tag: "Metamaterials",
      tagColor: "bg-green-100 text-green-700",
      category: "Metamaterails",
      githubUrl: "https://github.com/iitrshubham",
      methodology: `• Data Cleaning & Preparation: Cleaned and structured raw data using Power Query and Excel.
                   • Segmentation: Grouped districts based on performance (High, Medium, Low) using KPIs like revenue and investment volume.
                   • Trend & Pattern Analysis: Observed year-on-year changes in e-stamp challans, document registrations, vehicle types, and industrial investments.
                   • Visualization: Created shape maps, time-series charts, KPIs, and bar graphs in Bridge engg to reveal meaningful patterns.`,
      resultsAndImpact: ` • High-performing districts: Hyderabad, Rangareddy, and Sangareddy showed strong growth in industrial approvals and vehicle registrations.
                        • E-Stamp usage increased by 60%, indicating improved digital adoption and governance.
                        • Vehicle trends: Petrol and diesel vehicles dominated sales, especially during autumn; electric vehicle interest peaked in spring.
                        • Top Investment Sectors: Plastic, Pharmaceuticals, and Renewable Energy attracted the highest approvals.
                        • District Categorization helped highlight regions needing more development focus, guiding policy-level decisions.`,
      skills: ["Data wrangling", "Trend & pattern analysis", "Data visualization & storytelling", "Dashboard design and layout planning"],
      tools: ["Bridge engg: Dashboard creation, DAX, KPIs, custom visuals, and shape maps", "Power Query: Data transformation and shaping", "PowerPoint: Presentation of insights"],
      imageUrl: "https://raw.githubusercontent.com/iitrshubham/iitrshubham.github.io/refs/heads/main/image/project6.png",
      thumbhnailUrl: "https://raw.githubusercontent.com/iitrshubham/iitrshubham.github.io/refs/heads/main/image/project6.png"
   }],
   gf = [{
      id: "all",
      name: "All Projects",
      color: "bg-gray-100 text-gray-800"
   }, {
      id: "topology-optimization",
      name: "Topology optimization",
      color: "bg-yellow-100 text-yellow-700"
   }, {
      id: "metamaterials",
      name: "Metamaterials",
      color: "bg-blue-100 text-blue-700"
   }, {
      id: "machine-learning",
      name: "Machine Learning",
      color: "bg-purple-100 text-purple-700"
   }, {
      id: "bridge-engg",
      name: "Bridge engg",
      color: "bg-green-100 text-green-700"
   }, {
      id: "health-monitoring",
      name: "Health monitoring",
      color: "bg-red-100 text-red-700"
   }, {
      id: "uncertainty",
      name: "Uncertainty",
      color: "bg-purple-100 text-purple-700"
   }, {
      id: "bandgap-metamaterials",
      name: "Bandgap metamaterials",
      color: "bg-indigo-100 text-indigo-700"
   }],
   kb = () => {
      var p;
      const [t, e] = b.useState("all"), [, r] = ls(), [i, a] = b.useState(ro || []);
      b.useEffect(() => {
         console.log("Projects data loaded:", ro ? ro.length : 0)
      }, []);
      const l = t === "all" ? i : i.filter(m => m.category.toLowerCase().replace(/\s+/g, "-") === t),
         u = m => {
            m !== "all" && r(`/category/${m}`)
         },
         d = gf.find(m => m.id === t);
      return d && d.name, f.jsx("section", {
         id: "projects",
         className: "py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 mt-20 transition-colors duration-300",
         children: f.jsxs("div", {
            className: "container mx-auto",
            children: [f.jsxs("div", {
               className: "text-center mb-12",
               children: [f.jsx("h2", {
                  className: "text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300",
                  children: "Featured Projects"
               }), f.jsx("p", {
                  className: "text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 transition-colors duration-300",
                  children: "A collection of projects showcasing my skills."
               }), f.jsx("div", {
                  className: "flex flex-wrap justify-center gap-2 mt-6",
                  children: gf.map(m => f.jsxs("button", {
                     onClick: () => e(m.id),
                     className: `px-4 py-2 rounded-full text-sm font-medium transition-all 
                  ${t===m.id?`${m.color} shadow-sm`:"bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"}`,
                     children: [m.id === "all" && f.jsx(K_, {
                        className: "inline-block mr-1 text-xs"
                     }), m.name]
                  }, m.id))
               })]
            }), f.jsx("div", {
               className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
               children: l.map(m => f.jsx(bb, {
                  project: m
               }, m.slug))
            }), l.length === 0 && f.jsx("div", {
               className: "text-center py-12",
               children: f.jsx("p", {
                  className: "text-gray-500 dark:text-gray-400 transition-colors duration-300",
                  children: "No projects found in this category."
               })
            }), f.jsxs("div", {
               className: "text-center mt-12 flex flex-wrap justify-center gap-4",
               children: [f.jsxs("a", {
                  href: "https://github.com/iitrshubham",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:border-primary hover:text-primary dark:hover:text-primary transition-colors duration-300 font-medium",
                  children: ["View All Projects on GitHub ", f.jsx(qi, {
                     className: "ml-2"
                  })]
               }), t !== "all" && f.jsxs("button", {
                  onClick: () => u(t),
                  className: "inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors font-medium",
                  children: ["View All ", (p = gf.find(m => m.id === t)) == null ? void 0 : p.name, " Projects"]
               })]
            })]
         })
      })
   },
   Zv = ({
      name: t,
      percentage: e,
      color: r,
      custom: i,
      controls: a
   }) => {
      const l = b.useRef(null),
         u = R_(l, {
            once: !0,
            amount: .5
         }),
         d = mb();
      return b.useEffect(() => {
         u && (a || d).start({
            width: `${e}%`,
            transition: {
               duration: 1,
               delay: .2
            }
         })
      }, [u, e, a, d]), f.jsxs("div", {
         ref: l,
         children: [f.jsxs("div", {
            className: "flex justify-between mb-1",
            children: [f.jsx("span", {
               className: "font-medium text-gray-900 dark:text-white transition-colors duration-300",
               children: t
            }), f.jsxs("span", {
               className: "text-gray-600 dark:text-gray-400 transition-colors duration-300",
               children: [e, "%"]
            })]
         }), f.jsx("div", {
            className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 transition-colors duration-300",
            children: f.jsx(Te.div, {
               className: `h-2.5 rounded-full ${r==="primary"?"bg-primary":"bg-blue-400"}`,
               initial: {
                  width: "0%"
               },
               animate: a || d,
               custom: i,
               style: {
                  width: "0%"
               }
            })
         })]
      })
   },
   J_ = [{
      name: "FEniCS",
      percentage: 95
   }, {
      name: "Python (Pandas, NumPy, Scikit-learn)",
      percentage: 95
   }, {
      name: "Ansys",
      percentage: 90
   }, {
      name: "Midas Civil",
      percentage: 70
   }, {
      name: "Comsol",
      percentage: 85
   }],
   eN = [{
      name: "Affinity Designer",
      percentage: 95
   }, {
      name: "Veusz",
      percentage: 90
   }, {
      name: "Latex",
      percentage: 99
   }, {
      name: "Paraview",
      percentage: 85
   }, {
      name: "Gmsh",
      percentage: 80
   }],
   tN = ["FEniCS", "Finite-Element analysis", "Computational mechanics", "Structural analysis", "Adaptive mesh refinement", "Topology optimization", "Modal analysis", "Metamaterials design", "Functionally graded materials", "High-performance Computing", "Uncertainty quantification", "Python", "MATLAB", "Meshing", "Data visualization", "Statistical analysis", "XDMF/HDF5 data handling", "Eigenvalue analysis", "Git/Version control", "Bridge engineering", "Structural dynamics", "Homogenization", "Predictive modeling", "Scientific computing"],
   nN = () => {
      const t = mb();
      b.useEffect(() => {
         t.start(i => ({
            width: `${i}%`,
            transition: {
               duration: 1,
               delay: .3
            }
         }))
      }, [t]);
      const e = {
            hidden: {
               opacity: 0
            },
            visible: {
               opacity: 1,
               transition: {
                  duration: .6,
                  when: "beforeChildren",
                  staggerChildren: .2
               }
            }
         },
         r = {
            hidden: {
               y: 30,
               opacity: 0
            },
            visible: {
               y: 0,
               opacity: 1,
               transition: {
                  duration: .5
               }
            }
         };
      return f.jsx("section", {
         id: "skills",
         className: "py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300",
         children: f.jsxs(Te.div, {
            className: "container mx-auto",
            variants: e,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
               once: !0,
               amount: .2
            },
            children: [f.jsxs(Te.div, {
               className: "text-center mb-16",
               variants: r,
               children: [f.jsx("h2", {
                  className: "text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300",
                  children: "Technical Skills"
               }), f.jsx("p", {
                  className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300",
                  children: "My professional toolkit includes programming languages, data analysis tools, and visualization platforms."
               })]
            }), f.jsxs("div", {
               className: "grid grid-cols-1 md:grid-cols-2 gap-12",
               children: [f.jsxs(Te.div, {
                  className: "space-y-8",
                  variants: r,
                  children: [f.jsx("h3", {
                     className: "text-xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300",
                     children: "Programming and analysis softwares"
                  }), f.jsx("div", {
                     className: "space-y-4",
                     children: J_.map(i => f.jsx(Zv, {
                        name: i.name,
                        percentage: i.percentage,
                        color: "primary",
                        custom: i.percentage,
                        controls: t
                     }, i.name))
                  })]
               }), f.jsxs(Te.div, {
                  className: "space-y-8",
                  variants: r,
                  children: [f.jsx("h3", {
                     className: "text-xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300",
                     children: "Data visualization & Project management Tools"
                  }), f.jsx("div", {
                     className: "space-y-4",
                     children: eN.map(i => f.jsx(Zv, {
                        name: i.name,
                        percentage: i.percentage,
                        color: "secondary",
                        custom: i.percentage,
                        controls: t
                     }, i.name))
                  })]
               })]
            }), f.jsxs(Te.div, {
               className: "mt-16",
               variants: r,
               children: [f.jsx("h3", {
                  className: "text-xl font-bold mb-6 text-center",
                  children: "Additional Skills"
               }), f.jsx("div", {
                  className: "flex flex-wrap justify-center gap-3",
                  children: tN.map(i => f.jsx("span", {
                     className: "px-4 py-2 bg-white rounded-full shadow-sm text-gray-700 hover:shadow-md hover:bg-gray-50 transition-all duration-300",
                     children: i
                  }, i))
               })]
            }), f.jsx(Te.div, {
               className: "mt-20 flex justify-center",
               variants: r,
               children: f.jsx("div", {
                  className: "w-24 h-1 bg-gradient-to-r from-blue-400 to-primary rounded"
               })
            })]
         })
      })
   },
   rN = () => {
      const t = {
            hidden: {
               opacity: 0
            },
            visible: {
               opacity: 1,
               transition: {
                  duration: .6,
                  when: "beforeChildren",
                  staggerChildren: .2
               }
            }
         },
         e = {
            hidden: {
               y: 30,
               opacity: 0
            },
            visible: {
               y: 0,
               opacity: 1,
               transition: {
                  duration: .5
               }
            }
         };
      return f.jsx("section", {
         id: "about",
         className: "py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300",
         children: f.jsx(Te.div, {
            className: "container mx-auto",
            variants: t,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
               once: !0,
               amount: .2
            },
            children: f.jsxs("div", {
               className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
               children: [f.jsx(Te.div, {
                  className: "lg:col-span-5",
                  variants: e,
                  children: f.jsxs("div", {
                     className: "relative",
                     children: [f.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-primary to-blue-400 opacity-10 rounded-2xl transform -rotate-3"
                     }), f.jsxs("svg", {
                        className: "rounded-2xl shadow-lg relative z-10 w-full h-auto bg-white dark:bg-gray-800 transition-colors duration-300",
                        viewBox: "0 0 400 500",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [f.jsx("rect", {
                           className: "fill-[#F9FAFB] dark:fill-gray-700 transition-colors duration-300",
                           width: "400",
                           height: "500",
                           rx: "12"
                        }), f.jsx("rect", {
                           x: "100",
                           y: "80",
                           width: "200",
                           height: "200",
                           rx: "100",
                           fill: "#E5E7EB"
                        }), f.jsx("circle", {
                           cx: "200",
                           cy: "150",
                           r: "70",
                           fill: "#9CA3AF"
                        }), f.jsx("path", {
                           d: "M200,180 Q240,180 240,220 T200,260 Q160,260 160,220 T200,180 z",
                           fill: "#9CA3AF"
                        }), f.jsx("rect", {
                           x: "100",
                           y: "300",
                           width: "200",
                           height: "30",
                           rx: "6",
                           fill: "#E5E7EB"
                        }), f.jsx("rect", {
                           x: "130",
                           y: "350",
                           width: "140",
                           height: "20",
                           rx: "4",
                           fill: "#E5E7EB"
                        }), f.jsx("rect", {
                           x: "150",
                           y: "390",
                           width: "100",
                           height: "20",
                           rx: "4",
                           fill: "#E5E7EB"
                        }), f.jsx("circle", {
                           cx: "70",
                           cy: "450",
                           r: "20",
                           fill: "#3B82F6",
                           opacity: "0.2"
                        }), f.jsx("circle", {
                           cx: "330",
                           cy: "450",
                           r: "20",
                           fill: "#3B82F6",
                           opacity: "0.2"
                        }), f.jsx("circle", {
                           cx: "50",
                           cy: "50",
                           r: "15",
                           fill: "#10B981",
                           opacity: "0.2"
                        }), f.jsx("circle", {
                           cx: "350",
                           cy: "50",
                           r: "15",
                           fill: "#10B981",
                           opacity: "0.2"
                        }), f.jsx("path", {
                           d: "M70,100 Q90,80 110,100 T150,100",
                           stroke: "#3B82F6",
                           strokeWidth: "2",
                           opacity: "0.5"
                        }), f.jsx("path", {
                           d: "M250,100 Q270,80 290,100 T330,100",
                           stroke: "#3B82F6",
                           strokeWidth: "2",
                           opacity: "0.5"
                        })]
                     })]
                  })
               }), f.jsxs(Te.div, {
                  className: "lg:col-span-7 space-y-6",
                  variants: e,
                  children: [f.jsx("h2", {
                     className: "text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300",
                     children: "About Me"
                  }), f.jsx("p", {
                     className: "text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300",
                     children: "I'm a dedicated Computational Mechanics researcher with expertise in Python, FEniCS, MATLAB, and advanced numerical methods. My work focuses on structural analysis, metamaterials, topology optimization, and data-driven simulations for solving real-world engineering problems."
                  }), f.jsx("p", {
                     className: "text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300",
                     children: "I’ve led and contributed to multiple simulation-based projects instersection of civil and mechanical engineering domains. I specialize in turning complex physical models into actionable insights using finite element analysis and custom visualization tools."
                  }), f.jsx("p", {
                     className: "text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300",
                     children: "Currently, I’m enhancing my capabilities in high-performance computing, stochastic modeling, and structural health monitoring, while actively pursuing opportunities in R&D, simulation engineering, and applied computational mechanics."
                  }), f.jsxs("div", {
                     className: "space-y-6 pt-4",
                     children: [f.jsxs("div", {
                        children: [f.jsx("h3", {
                           className: "text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300",
                           children: "Education"
                        }), f.jsxs("div", {
                           className: "space-y-3",
                           children: [f.jsx("div", {
                              className: "flex"
                           }), f.jsxs("div", {
                              className: "flex",
                              children: [f.jsx("div", {
                                 className: "flex-shrink-0 h-5 w-5 text-primary mt-1",
                                 children: f.jsx(G_, {})
                              }), f.jsxs("div", {
                                 className: "ml-3",
                                 children: [f.jsx("p", {
                                    className: "font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300",
                                    children: "PhD in Structural Engineering"
                                 }), f.jsx("p", {
                                    className: "text-gray-600 dark:text-gray-400 transition-colors duration-300",
                                    children: "Indian Institute of Technology Roorkee, 2020 - 2025"
                                 })]
                              })]
                           })]
                        })]
                     }), f.jsxs("div", {
                        children: [f.jsx("h3", {
                           className: "text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300",
                           children: "Experience"
                        }), f.jsxs("div", {
                           className: "space-y-3",
                           children: [f.jsxs("div", {
                              className: "flex",
                              children: [f.jsx("div", {
                                 className: "flex-shrink-0 h-5 w-5 text-primary mt-1",
                                 children: f.jsx($v, {})
                              }), f.jsxs("div", {
                                 className: "ml-3",
                                 children: [f.jsx("p", {
                                    className: "font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300",
                                    children: "Senior Research Fellow"
                                 }), f.jsx("p", {
                                    className: "text-gray-600 dark:text-gray-400 transition-colors duration-300",
                                    children: "DRDO-Defence Research & Development Laboratory Hyderabad, August 2022 - July 2023"
                                 })]
                              })]
                           }), f.jsxs("div", {
                              className: "flex",
                              children: [f.jsx("div", {
                                 className: "flex-shrink-0 h-5 w-5 text-primary mt-1",
                                 children: f.jsx($v, {})
                              }), f.jsxs("div", {
                                 className: "ml-3",
                                 children: [f.jsx("p", {
                                    className: "font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300",
                                    children: "Junior Research Fellow"
                                 }), f.jsx("p", {
                                    className: "text-gray-600 dark:text-gray-400 transition-colors duration-300",
                                    children: "DRDO-Defence Research & Development Laboratory Hyderabad, August 2020 - August 2022"
                                 })]
                              })]
                           }), f.jsxs("div", {
                              className: "flex",
                              children: [f.jsx("div", {
                                 className: "flex-shrink-0 h-5 w-5 text-primary mt-1",
                                 children: f.jsx($v, {})
                              }), f.jsxs("div", {
                                 className: "ml-3",
                                 children: [f.jsx("p", {
                                    className: "font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300",
                                    children: "Guest lecturer"
                                 }), f.jsx("p", {
                                    className: "text-gray-600 dark:text-gray-400 transition-colors duration-300",
                                    children: "Pusa Institute of Technology (Govt. of NCT), August 2017 - June 2018"
                                 })]
                              })]
                           }), f.jsxs("div", {
                              className: "flex",
                              children: [f.jsx("div", {
                                 className: "flex-shrink-0 h-5 w-5 text-primary mt-1",
                                 children: f.jsx($v, {})
                              }), f.jsxs("div", {
                                 className: "ml-3",
                                 children: [f.jsx("p", {
                                    className: "font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300",
                                    children: "Guest lecturer"
                                 }), f.jsx("p", {
                                    className: "text-gray-600 dark:text-gray-400 transition-colors duration-300",
                                    children: "GB Pant Institute of Technology (Govt. of NCT), August 2017 - June 2018"
                                 })]
                              })]
                           })]
                        })]
                     })]
                  }), f.jsx("div", {
                     className: "pt-4",
                     children: f.jsxs("a", {
                        href: "https://drive.google.com/file/d/1LkMgZTUcQAe4wfwXcLRSzYm7GPWaxq8r/view?usp=sharing",
                        className: "inline-flex items-center text-primary hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-300",
                        children: ["Download Resume ", f.jsx(q_, {
                           className: "ml-2"
                        })]
                     })
                  })]
               })]
            })
         })
      })
   };
var Ro = t => t.type === "checkbox",
   _s = t => t instanceof Date,
   $t = t => t == null;
const Sb = t => typeof t == "object";
var yt = t => !$t(t) && !Array.isArray(t) && Sb(t) && !_s(t),
   Tb = t => yt(t) && t.target ? Ro(t.target) ? t.target.checked : t.target.value : t,
   sN = t => t.substring(0, t.search(/\.\d+(\.|$)/)) || t,
   Cb = (t, e) => t.has(sN(e)),
   iN = t => {
      const e = t.constructor && t.constructor.prototype;
      return yt(e) && e.hasOwnProperty("isPrototypeOf")
   },
   sp = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";

function Xt(t) {
   let e;
   const r = Array.isArray(t),
      i = typeof FileList < "u" ? t instanceof FileList : !1;
   if (t instanceof Date) e = new Date(t);
   else if (t instanceof Set) e = new Set(t);
   else if (!(sp && (t instanceof Blob || i)) && (r || yt(t)))
      if (e = r ? [] : {}, !r && !iN(t)) e = t;
      else
         for (const a in t) t.hasOwnProperty(a) && (e[a] = Xt(t[a]));
   else return t;
   return e
}
var Qc = t => Array.isArray(t) ? t.filter(Boolean) : [],
   gt = t => t === void 0,
   ne = (t, e, r) => {
      if (!e || !yt(t)) return r;
      const i = Qc(e.split(/[,[\].]+?/)).reduce((a, l) => $t(a) ? a : a[l], t);
      return gt(i) || i === t ? gt(t[e]) ? r : t[e] : i
   },
   wn = t => typeof t == "boolean",
   ip = t => /^\w*$/.test(t),
   jb = t => Qc(t.replace(/["|']|\]/g, "").split(/\.|\[/)),
   He = (t, e, r) => {
      let i = -1;
      const a = ip(e) ? [e] : jb(e),
         l = a.length,
         u = l - 1;
      for (; ++i < l;) {
         const d = a[i];
         let p = r;
         if (i !== u) {
            const m = t[d];
            p = yt(m) || Array.isArray(m) ? m : isNaN(+a[i + 1]) ? {} : []
         }
         if (d === "__proto__" || d === "constructor" || d === "prototype") return;
         t[d] = p, t = t[d]
      }
      return t
   };
const Cc = {
      BLUR: "blur",
      FOCUS_OUT: "focusout",
      CHANGE: "change"
   },
   In = {
      onBlur: "onBlur",
      onChange: "onChange",
      onSubmit: "onSubmit",
      onTouched: "onTouched",
      all: "all"
   },
   fr = {
      max: "max",
      min: "min",
      maxLength: "maxLength",
      minLength: "minLength",
      pattern: "pattern",
      required: "required",
      validate: "validate"
   },
   Eb = be.createContext(null),
   qc = () => be.useContext(Eb),
   aN = t => {
      const {
         children: e,
         ...r
      } = t;
      return be.createElement(Eb.Provider, {
         value: r
      }, e)
   };
var Pb = (t, e, r, i = !0) => {
      const a = {
         defaultValues: e._defaultValues
      };
      for (const l in t) Object.defineProperty(a, l, {
         get: () => {
            const u = l;
            return e._proxyFormState[u] !== In.all && (e._proxyFormState[u] = !i || In.all), r && (r[u] = !0), t[u]
         }
      });
      return a
   },
   en = t => yt(t) && !Object.keys(t).length,
   _b = (t, e, r, i) => {
      r(t);
      const {
         name: a,
         ...l
      } = t;
      return en(l) || Object.keys(l).length >= Object.keys(e).length || Object.keys(l).find(u => e[u] === (!i || In.all))
   },
   so = t => Array.isArray(t) ? t : [t],
   Nb = (t, e, r) => !t || !e || t === e || so(t).some(i => i && (r ? i === e : i.startsWith(e) || e.startsWith(i)));

function ap(t) {
   const e = be.useRef(t);
   e.current = t, be.useEffect(() => {
      const r = !t.disabled && e.current.subject && e.current.subject.subscribe({
         next: e.current.next
      });
      return () => {
         r && r.unsubscribe()
      }
   }, [t.disabled])
}

function oN(t) {
   const e = qc(),
      {
         control: r = e.control,
         disabled: i,
         name: a,
         exact: l
      } = t || {},
      [u, d] = be.useState(r._formState),
      p = be.useRef(!0),
      m = be.useRef({
         isDirty: !1,
         isLoading: !1,
         dirtyFields: !1,
         touchedFields: !1,
         validatingFields: !1,
         isValidating: !1,
         isValid: !1,
         errors: !1
      }),
      y = be.useRef(a);
   return y.current = a, ap({
      disabled: i,
      next: v => p.current && Nb(y.current, v.name, l) && _b(v, m.current, r._updateFormState) && d({
         ...r._formState,
         ...v
      }),
      subject: r._subjects.state
   }), be.useEffect(() => (p.current = !0, m.current.isValid && r._updateValid(!0), () => {
      p.current = !1
   }), [r]), be.useMemo(() => Pb(u, r, m.current, !1), [u, r])
}
var Qn = t => typeof t == "string",
   Ab = (t, e, r, i, a) => Qn(t) ? (i && e.watch.add(t), ne(r, t, a)) : Array.isArray(t) ? t.map(l => (i && e.watch.add(l), ne(r, l))) : (i && (e.watchAll = !0), r);

function lN(t) {
   const e = qc(),
      {
         control: r = e.control,
         name: i,
         defaultValue: a,
         disabled: l,
         exact: u
      } = t || {},
      d = be.useRef(i);
   d.current = i, ap({
      disabled: l,
      subject: r._subjects.values,
      next: y => {
         Nb(d.current, y.name, u) && m(Xt(Ab(d.current, r._names, y.values || r._formValues, !1, a)))
      }
   });
   const [p, m] = be.useState(r._getWatch(i, a));
   return be.useEffect(() => r._removeUnmounted()), p
}

function cN(t) {
   const e = qc(),
      {
         name: r,
         disabled: i,
         control: a = e.control,
         shouldUnregister: l
      } = t,
      u = Cb(a._names.array, r),
      d = lN({
         control: a,
         name: r,
         defaultValue: ne(a._formValues, r, ne(a._defaultValues, r, t.defaultValue)),
         exact: !0
      }),
      p = oN({
         control: a,
         name: r,
         exact: !0
      }),
      m = be.useRef(a.register(r, {
         ...t.rules,
         value: d,
         ...wn(t.disabled) ? {
            disabled: t.disabled
         } : {}
      })),
      y = be.useMemo(() => Object.defineProperties({}, {
         invalid: {
            enumerable: !0,
            get: () => !!ne(p.errors, r)
         },
         isDirty: {
            enumerable: !0,
            get: () => !!ne(p.dirtyFields, r)
         },
         isTouched: {
            enumerable: !0,
            get: () => !!ne(p.touchedFields, r)
         },
         isValidating: {
            enumerable: !0,
            get: () => !!ne(p.validatingFields, r)
         },
         error: {
            enumerable: !0,
            get: () => ne(p.errors, r)
         }
      }), [p, r]),
      v = be.useMemo(() => ({
         name: r,
         value: d,
         ...wn(i) || p.disabled ? {
            disabled: p.disabled || i
         } : {},
         onChange: w => m.current.onChange({
            target: {
               value: Tb(w),
               name: r
            },
            type: Cc.CHANGE
         }),
         onBlur: () => m.current.onBlur({
            target: {
               value: ne(a._formValues, r),
               name: r
            },
            type: Cc.BLUR
         }),
         ref: w => {
            const T = ne(a._fields, r);
            T && w && (T._f.ref = {
               focus: () => w.focus(),
               select: () => w.select(),
               setCustomValidity: P => w.setCustomValidity(P),
               reportValidity: () => w.reportValidity()
            })
         }
      }), [r, a._formValues, i, p.disabled, d, a._fields]);
   return be.useEffect(() => {
      const w = a._options.shouldUnregister || l,
         T = (P, S) => {
            const C = ne(a._fields, P);
            C && C._f && (C._f.mount = S)
         };
      if (T(r, !0), w) {
         const P = Xt(ne(a._options.defaultValues, r));
         He(a._defaultValues, r, P), gt(ne(a._formValues, r)) && He(a._formValues, r, P)
      }
      return !u && a.register(r), () => {
         (u ? w && !a._state.action : w) ? a.unregister(r): T(r, !1)
      }
   }, [r, a, u, l]), be.useEffect(() => {
      a._updateDisabledField({
         disabled: i,
         fields: a._fields,
         name: r
      })
   }, [i, r, a]), be.useMemo(() => ({
      field: v,
      formState: p,
      fieldState: y
   }), [v, p, y])
}
const uN = t => t.render(cN(t));
var Db = (t, e, r, i, a) => e ? {
      ...r[t],
      types: {
         ...r[t] && r[t].types ? r[t].types : {},
         [i]: a || !0
      }
   } : {},
   Wv = t => ({
      isOnSubmit: !t || t === In.onSubmit,
      isOnBlur: t === In.onBlur,
      isOnChange: t === In.onChange,
      isOnAll: t === In.all,
      isOnTouch: t === In.onTouched
   }),
   Hv = (t, e, r) => !r && (e.watchAll || e.watch.has(t) || [...e.watch].some(i => t.startsWith(i) && /^\.\w+/.test(t.slice(i.length))));
const io = (t, e, r, i) => {
   for (const a of r || Object.keys(t)) {
      const l = ne(t, a);
      if (l) {
         const {
            _f: u,
            ...d
         } = l;
         if (u) {
            if (u.refs && u.refs[0] && e(u.refs[0], a) && !i) return !0;
            if (u.ref && e(u.ref, u.name) && !i) return !0;
            if (io(d, e)) break
         } else if (yt(d) && io(d, e)) break
      }
   }
};
var dN = (t, e, r) => {
      const i = so(ne(t, r));
      return He(i, "root", e[r]), He(t, r, i), t
   },
   op = t => t.type === "file",
   Hn = t => typeof t == "function",
   jc = t => {
      if (!sp) return !1;
      const e = t ? t.ownerDocument : 0;
      return t instanceof(e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement)
   },
   dc = t => Qn(t),
   lp = t => t.type === "radio",
   Ec = t => t instanceof RegExp;
const Qv = {
      value: !1,
      isValid: !1
   },
   qv = {
      value: !0,
      isValid: !0
   };
var Ib = t => {
   if (Array.isArray(t)) {
      if (t.length > 1) {
         const e = t.filter(r => r && r.checked && !r.disabled).map(r => r.value);
         return {
            value: e,
            isValid: !!e.length
         }
      }
      return t[0].checked && !t[0].disabled ? t[0].attributes && !gt(t[0].attributes.value) ? gt(t[0].value) || t[0].value === "" ? qv : {
         value: t[0].value,
         isValid: !0
      } : qv : Qv
   }
   return Qv
};
const Kv = {
   isValid: !1,
   value: null
};
var Mb = t => Array.isArray(t) ? t.reduce((e, r) => r && r.checked && !r.disabled ? {
   isValid: !0,
   value: r.value
} : e, Kv) : Kv;

function Gv(t, e, r = "validate") {
   if (dc(t) || Array.isArray(t) && t.every(dc) || wn(t) && !t) return {
      type: r,
      message: dc(t) ? t : "",
      ref: e
   }
}
var pi = t => yt(t) && !Ec(t) ? t : {
      value: t,
      message: ""
   },
   Yv = async (t, e, r, i, a, l) => {
      const {
         ref: u,
         refs: d,
         required: p,
         maxLength: m,
         minLength: y,
         min: v,
         max: w,
         pattern: T,
         validate: P,
         name: S,
         valueAsNumber: C,
         mount: _
      } = t._f, D = ne(r, S);
      if (!_ || e.has(S)) return {};
      const F = d ? d[0] : u,
         $ = X => {
            a && F.reportValidity && (F.setCustomValidity(wn(X) ? "" : X || ""), F.reportValidity())
         },
         z = {},
         U = lp(u),
         Y = Ro(u),
         B = U || Y,
         me = (C || op(u)) && gt(u.value) && gt(D) || jc(u) && u.value === "" || D === "" || Array.isArray(D) && !D.length,
         ye = Db.bind(null, S, i, z),
         Le = (X, ge, se, _e = fr.maxLength, Se = fr.minLength) => {
            const fe = X ? ge : se;
            z[S] = {
               type: X ? _e : Se,
               message: fe,
               ref: u,
               ...ye(X ? _e : Se, fe)
            }
         };
      if (l ? !Array.isArray(D) || !D.length : p && (!B && (me || $t(D)) || wn(D) && !D || Y && !Ib(d).isValid || U && !Mb(d).isValid)) {
         const {
            value: X,
            message: ge
         } = dc(p) ? {
            value: !!p,
            message: p
         } : pi(p);
         if (X && (z[S] = {
               type: fr.required,
               message: ge,
               ref: F,
               ...ye(fr.required, ge)
            }, !i)) return $(ge), z
      }
      if (!me && (!$t(v) || !$t(w))) {
         let X, ge;
         const se = pi(w),
            _e = pi(v);
         if (!$t(D) && !isNaN(D)) {
            const Se = u.valueAsNumber || D && +D;
            $t(se.value) || (X = Se > se.value), $t(_e.value) || (ge = Se < _e.value)
         } else {
            const Se = u.valueAsDate || new Date(D),
               fe = ee => new Date(new Date().toDateString() + " " + ee),
               Q = u.type == "time",
               ae = u.type == "week";
            Qn(se.value) && D && (X = Q ? fe(D) > fe(se.value) : ae ? D > se.value : Se > new Date(se.value)), Qn(_e.value) && D && (ge = Q ? fe(D) < fe(_e.value) : ae ? D < _e.value : Se < new Date(_e.value))
         }
         if ((X || ge) && (Le(!!X, se.message, _e.message, fr.max, fr.min), !i)) return $(z[S].message), z
      }
      if ((m || y) && !me && (Qn(D) || l && Array.isArray(D))) {
         const X = pi(m),
            ge = pi(y),
            se = !$t(X.value) && D.length > +X.value,
            _e = !$t(ge.value) && D.length < +ge.value;
         if ((se || _e) && (Le(se, X.message, ge.message), !i)) return $(z[S].message), z
      }
      if (T && !me && Qn(D)) {
         const {
            value: X,
            message: ge
         } = pi(T);
         if (Ec(X) && !D.match(X) && (z[S] = {
               type: fr.pattern,
               message: ge,
               ref: u,
               ...ye(fr.pattern, ge)
            }, !i)) return $(ge), z
      }
      if (P) {
         if (Hn(P)) {
            const X = await P(D, r),
               ge = Gv(X, F);
            if (ge && (z[S] = {
                  ...ge,
                  ...ye(fr.validate, ge.message)
               }, !i)) return $(ge.message), z
         } else if (yt(P)) {
            let X = {};
            for (const ge in P) {
               if (!en(X) && !i) break;
               const se = Gv(await P[ge](D, r), F, ge);
               se && (X = {
                  ...se,
                  ...ye(ge, se.message)
               }, $(se.message), i && (z[S] = X))
            }
            if (!en(X) && (z[S] = {
                  ref: F,
                  ...X
               }, !i)) return z
         }
      }
      return $(!0), z
   };

function fN(t, e) {
   const r = e.slice(0, -1).length;
   let i = 0;
   for (; i < r;) t = gt(t) ? i++ : t[e[i++]];
   return t
}

function hN(t) {
   for (const e in t)
      if (t.hasOwnProperty(e) && !gt(t[e])) return !1;
   return !0
}

function kt(t, e) {
   const r = Array.isArray(e) ? e : ip(e) ? [e] : jb(e),
      i = r.length === 1 ? t : fN(t, r),
      a = r.length - 1,
      l = r[a];
   return i && delete i[l], a !== 0 && (yt(i) && en(i) || Array.isArray(i) && hN(i)) && kt(t, r.slice(0, -1)), t
}
var yf = () => {
      let t = [];
      return {
         get observers() {
            return t
         },
         next: a => {
            for (const l of t) l.next && l.next(a)
         },
         subscribe: a => (t.push(a), {
            unsubscribe: () => {
               t = t.filter(l => l !== a)
            }
         }),
         unsubscribe: () => {
            t = []
         }
      }
   },
   eh = t => $t(t) || !Sb(t);

function Qr(t, e) {
   if (eh(t) || eh(e)) return t === e;
   if (_s(t) && _s(e)) return t.getTime() === e.getTime();
   const r = Object.keys(t),
      i = Object.keys(e);
   if (r.length !== i.length) return !1;
   for (const a of r) {
      const l = t[a];
      if (!i.includes(a)) return !1;
      if (a !== "ref") {
         const u = e[a];
         if (_s(l) && _s(u) || yt(l) && yt(u) || Array.isArray(l) && Array.isArray(u) ? !Qr(l, u) : l !== u) return !1
      }
   }
   return !0
}
var Rb = t => t.type === "select-multiple",
   pN = t => lp(t) || Ro(t),
   vf = t => jc(t) && t.isConnected,
   Ob = t => {
      for (const e in t)
         if (Hn(t[e])) return !0;
      return !1
   };

function Pc(t, e = {}) {
   const r = Array.isArray(t);
   if (yt(t) || r)
      for (const i in t) Array.isArray(t[i]) || yt(t[i]) && !Ob(t[i]) ? (e[i] = Array.isArray(t[i]) ? [] : {}, Pc(t[i], e[i])) : $t(t[i]) || (e[i] = !0);
   return e
}

function Lb(t, e, r) {
   const i = Array.isArray(t);
   if (yt(t) || i)
      for (const a in t) Array.isArray(t[a]) || yt(t[a]) && !Ob(t[a]) ? gt(e) || eh(r[a]) ? r[a] = Array.isArray(t[a]) ? Pc(t[a], []) : {
         ...Pc(t[a])
      } : Lb(t[a], $t(e) ? {} : e[a], r[a]) : r[a] = !Qr(t[a], e[a]);
   return r
}
var Oa = (t, e) => Lb(t, e, Pc(e)),
   Fb = (t, {
      valueAsNumber: e,
      valueAsDate: r,
      setValueAs: i
   }) => gt(t) ? t : e ? t === "" ? NaN : t && +t : r && Qn(t) ? new Date(t) : i ? i(t) : t;

function xf(t) {
   const e = t.ref;
   return op(e) ? e.files : lp(e) ? Mb(t.refs).value : Rb(e) ? [...e.selectedOptions].map(({
      value: r
   }) => r) : Ro(e) ? Ib(t.refs).value : Fb(gt(e.value) ? t.ref.value : e.value, t)
}
var mN = (t, e, r, i) => {
      const a = {};
      for (const l of t) {
         const u = ne(e, l);
         u && He(a, l, u._f)
      }
      return {
         criteriaMode: r,
         names: [...t],
         fields: a,
         shouldUseNativeValidation: i
      }
   },
   La = t => gt(t) ? t : Ec(t) ? t.source : yt(t) ? Ec(t.value) ? t.value.source : t.value : t;
const Xv = "AsyncFunction";
var gN = t => !!t && !!t.validate && !!(Hn(t.validate) && t.validate.constructor.name === Xv || yt(t.validate) && Object.values(t.validate).find(e => e.constructor.name === Xv)),
   yN = t => t.mount && (t.required || t.min || t.max || t.maxLength || t.minLength || t.pattern || t.validate);

function Jv(t, e, r) {
   const i = ne(t, r);
   if (i || ip(r)) return {
      error: i,
      name: r
   };
   const a = r.split(".");
   for (; a.length;) {
      const l = a.join("."),
         u = ne(e, l),
         d = ne(t, l);
      if (u && !Array.isArray(u) && r !== l) return {
         name: r
      };
      if (d && d.type) return {
         name: l,
         error: d
      };
      a.pop()
   }
   return {
      name: r
   }
}
var vN = (t, e, r, i, a) => a.isOnAll ? !1 : !r && a.isOnTouch ? !(e || t) : (r ? i.isOnBlur : a.isOnBlur) ? !t : (r ? i.isOnChange : a.isOnChange) ? t : !0,
   xN = (t, e) => !Qc(ne(t, e)).length && kt(t, e);
const wN = {
   mode: In.onSubmit,
   reValidateMode: In.onChange,
   shouldFocusError: !0
};

function bN(t = {}) {
   let e = {
         ...wN,
         ...t
      },
      r = {
         submitCount: 0,
         isDirty: !1,
         isLoading: Hn(e.defaultValues),
         isValidating: !1,
         isSubmitted: !1,
         isSubmitting: !1,
         isSubmitSuccessful: !1,
         isValid: !1,
         touchedFields: {},
         dirtyFields: {},
         validatingFields: {},
         errors: e.errors || {},
         disabled: e.disabled || !1
      },
      i = {},
      a = yt(e.defaultValues) || yt(e.values) ? Xt(e.defaultValues || e.values) || {} : {},
      l = e.shouldUnregister ? {} : Xt(a),
      u = {
         action: !1,
         mount: !1,
         watch: !1
      },
      d = {
         mount: new Set,
         disabled: new Set,
         unMount: new Set,
         array: new Set,
         watch: new Set
      },
      p, m = 0;
   const y = {
         isDirty: !1,
         dirtyFields: !1,
         validatingFields: !1,
         touchedFields: !1,
         isValidating: !1,
         isValid: !1,
         errors: !1
      },
      v = {
         values: yf(),
         array: yf(),
         state: yf()
      },
      w = Wv(e.mode),
      T = Wv(e.reValidateMode),
      P = e.criteriaMode === In.all,
      S = E => R => {
         clearTimeout(m), m = setTimeout(E, R)
      },
      C = async E => {
         if (!e.disabled && (y.isValid || E)) {
            const R = e.resolver ? en((await B()).errors) : await ye(i, !0);
            R !== r.isValid && v.state.next({
               isValid: R
            })
         }
      }, _ = (E, R) => {
         !e.disabled && (y.isValidating || y.validatingFields) && ((E || Array.from(d.mount)).forEach(V => {
            V && (R ? He(r.validatingFields, V, R) : kt(r.validatingFields, V))
         }), v.state.next({
            validatingFields: r.validatingFields,
            isValidating: !en(r.validatingFields)
         }))
      }, D = (E, R = [], V, re, te = !0, J = !0) => {
         if (re && V && !e.disabled) {
            if (u.action = !0, J && Array.isArray(ne(i, E))) {
               const ve = V(ne(i, E), re.argA, re.argB);
               te && He(i, E, ve)
            }
            if (J && Array.isArray(ne(r.errors, E))) {
               const ve = V(ne(r.errors, E), re.argA, re.argB);
               te && He(r.errors, E, ve), xN(r.errors, E)
            }
            if (y.touchedFields && J && Array.isArray(ne(r.touchedFields, E))) {
               const ve = V(ne(r.touchedFields, E), re.argA, re.argB);
               te && He(r.touchedFields, E, ve)
            }
            y.dirtyFields && (r.dirtyFields = Oa(a, l)), v.state.next({
               name: E,
               isDirty: X(E, R),
               dirtyFields: r.dirtyFields,
               errors: r.errors,
               isValid: r.isValid
            })
         } else He(l, E, R)
      }, F = (E, R) => {
         He(r.errors, E, R), v.state.next({
            errors: r.errors
         })
      }, $ = E => {
         r.errors = E, v.state.next({
            errors: r.errors,
            isValid: !1
         })
      }, z = (E, R, V, re) => {
         const te = ne(i, E);
         if (te) {
            const J = ne(l, E, gt(V) ? ne(a, E) : V);
            gt(J) || re && re.defaultChecked || R ? He(l, E, R ? J : xf(te._f)) : _e(E, J), u.mount && C()
         }
      }, U = (E, R, V, re, te) => {
         let J = !1,
            ve = !1;
         const Ie = {
            name: E
         };
         if (!e.disabled) {
            const dt = !!(ne(i, E) && ne(i, E)._f && ne(i, E)._f.disabled);
            if (!V || re) {
               y.isDirty && (ve = r.isDirty, r.isDirty = Ie.isDirty = X(), J = ve !== Ie.isDirty);
               const at = dt || Qr(ne(a, E), R);
               ve = !!(!dt && ne(r.dirtyFields, E)), at || dt ? kt(r.dirtyFields, E) : He(r.dirtyFields, E, !0), Ie.dirtyFields = r.dirtyFields, J = J || y.dirtyFields && ve !== !at
            }
            if (V) {
               const at = ne(r.touchedFields, E);
               at || (He(r.touchedFields, E, V), Ie.touchedFields = r.touchedFields, J = J || y.touchedFields && at !== V)
            }
            J && te && v.state.next(Ie)
         }
         return J ? Ie : {}
      }, Y = (E, R, V, re) => {
         const te = ne(r.errors, E),
            J = y.isValid && wn(R) && r.isValid !== R;
         if (e.delayError && V ? (p = S(() => F(E, V)), p(e.delayError)) : (clearTimeout(m), p = null, V ? He(r.errors, E, V) : kt(r.errors, E)), (V ? !Qr(te, V) : te) || !en(re) || J) {
            const ve = {
               ...re,
               ...J && wn(R) ? {
                  isValid: R
               } : {},
               errors: r.errors,
               name: E
            };
            r = {
               ...r,
               ...ve
            }, v.state.next(ve)
         }
      }, B = async E => {
         _(E, !0);
         const R = await e.resolver(l, e.context, mN(E || d.mount, i, e.criteriaMode, e.shouldUseNativeValidation));
         return _(E), R
      }, me = async E => {
         const {
            errors: R
         } = await B(E);
         if (E)
            for (const V of E) {
               const re = ne(R, V);
               re ? He(r.errors, V, re) : kt(r.errors, V)
            } else r.errors = R;
         return R
      }, ye = async (E, R, V = {
         valid: !0
      }) => {
         for (const re in E) {
            const te = E[re];
            if (te) {
               const {
                  _f: J,
                  ...ve
               } = te;
               if (J) {
                  const Ie = d.array.has(J.name),
                     dt = te._f && gN(te._f);
                  dt && y.validatingFields && _([re], !0);
                  const at = await Yv(te, d.disabled, l, P, e.shouldUseNativeValidation && !R, Ie);
                  if (dt && y.validatingFields && _([re]), at[J.name] && (V.valid = !1, R)) break;
                  !R && (ne(at, J.name) ? Ie ? dN(r.errors, at, J.name) : He(r.errors, J.name, at[J.name]) : kt(r.errors, J.name))
               }!en(ve) && await ye(ve, R, V)
            }
         }
         return V.valid
      }, Le = () => {
         for (const E of d.unMount) {
            const R = ne(i, E);
            R && (R._f.refs ? R._f.refs.every(V => !vf(V)) : !vf(R._f.ref)) && Ve(E)
         }
         d.unMount = new Set
      }, X = (E, R) => !e.disabled && (E && R && He(l, E, R), !Qr(A(), a)), ge = (E, R, V) => Ab(E, d, {
         ...u.mount ? l : gt(R) ? a : Qn(E) ? {
            [E]: R
         } : R
      }, V, R), se = E => Qc(ne(u.mount ? l : a, E, e.shouldUnregister ? ne(a, E, []) : [])), _e = (E, R, V = {}) => {
         const re = ne(i, E);
         let te = R;
         if (re) {
            const J = re._f;
            J && (!J.disabled && He(l, E, Fb(R, J)), te = jc(J.ref) && $t(R) ? "" : R, Rb(J.ref) ? [...J.ref.options].forEach(ve => ve.selected = te.includes(ve.value)) : J.refs ? Ro(J.ref) ? J.refs.length > 1 ? J.refs.forEach(ve => (!ve.defaultChecked || !ve.disabled) && (ve.checked = Array.isArray(te) ? !!te.find(Ie => Ie === ve.value) : te === ve.value)) : J.refs[0] && (J.refs[0].checked = !!te) : J.refs.forEach(ve => ve.checked = ve.value === te) : op(J.ref) ? J.ref.value = "" : (J.ref.value = te, J.ref.type || v.values.next({
               name: E,
               values: {
                  ...l
               }
            })))
         }(V.shouldDirty || V.shouldTouch) && U(E, te, V.shouldTouch, V.shouldDirty, !0), V.shouldValidate && ee(E)
      }, Se = (E, R, V) => {
         for (const re in R) {
            const te = R[re],
               J = `${E}.${re}`,
               ve = ne(i, J);
            (d.array.has(E) || yt(te) || ve && !ve._f) && !_s(te) ? Se(J, te, V) : _e(J, te, V)
         }
      }, fe = (E, R, V = {}) => {
         const re = ne(i, E),
            te = d.array.has(E),
            J = Xt(R);
         He(l, E, J), te ? (v.array.next({
            name: E,
            values: {
               ...l
            }
         }), (y.isDirty || y.dirtyFields) && V.shouldDirty && v.state.next({
            name: E,
            dirtyFields: Oa(a, l),
            isDirty: X(E, J)
         })) : re && !re._f && !$t(J) ? Se(E, J, V) : _e(E, J, V), Hv(E, d) && v.state.next({
            ...r
         }), v.values.next({
            name: u.mount ? E : void 0,
            values: {
               ...l
            }
         })
      }, Q = async E => {
         u.mount = !0;
         const R = E.target;
         let V = R.name,
            re = !0;
         const te = ne(i, V),
            J = () => R.type ? xf(te._f) : Tb(E),
            ve = Ie => {
               re = Number.isNaN(Ie) || _s(Ie) && isNaN(Ie.getTime()) || Qr(Ie, ne(l, V, Ie))
            };
         if (te) {
            let Ie, dt;
            const at = J(),
               tn = E.type === Cc.BLUR || E.type === Cc.FOCUS_OUT,
               zo = !yN(te._f) && !e.resolver && !ne(r.errors, V) && !te._f.deps || vN(tn, ne(r.touchedFields, V), r.isSubmitted, T, w),
               er = Hv(V, d, tn);
            He(l, V, at), tn ? (te._f.onBlur && te._f.onBlur(E), p && p(0)) : te._f.onChange && te._f.onChange(E);
            const tr = U(V, at, tn, !1),
               nu = !en(tr) || er;
            if (!tn && v.values.next({
                  name: V,
                  type: E.type,
                  values: {
                     ...l
                  }
               }), zo) return y.isValid && (e.mode === "onBlur" && tn ? C() : tn || C()), nu && v.state.next({
               name: V,
               ...er ? {} : tr
            });
            if (!tn && er && v.state.next({
                  ...r
               }), e.resolver) {
               const {
                  errors: Ki
               } = await B([V]);
               if (ve(at), re) {
                  const Bo = Jv(r.errors, i, V),
                     Uo = Jv(Ki, i, Bo.name || V);
                  Ie = Uo.error, V = Uo.name, dt = en(Ki)
               }
            } else _([V], !0), Ie = (await Yv(te, d.disabled, l, P, e.shouldUseNativeValidation))[V], _([V]), ve(at), re && (Ie ? dt = !1 : y.isValid && (dt = await ye(i, !0)));
            re && (te._f.deps && ee(te._f.deps), Y(V, dt, Ie, tr))
         }
      }, ae = (E, R) => {
         if (ne(r.errors, R) && E.focus) return E.focus(), 1
      }, ee = async (E, R = {}) => {
         let V, re;
         const te = so(E);
         if (e.resolver) {
            const J = await me(gt(E) ? E : te);
            V = en(J), re = E ? !te.some(ve => ne(J, ve)) : V
         } else E ? (re = (await Promise.all(te.map(async J => {
            const ve = ne(i, J);
            return await ye(ve && ve._f ? {
               [J]: ve
            } : ve)
         }))).every(Boolean), !(!re && !r.isValid) && C()) : re = V = await ye(i);
         return v.state.next({
            ...!Qn(E) || y.isValid && V !== r.isValid ? {} : {
               name: E
            },
            ...e.resolver || !E ? {
               isValid: V
            } : {},
            errors: r.errors
         }), R.shouldFocus && !re && io(i, ae, E ? te : d.mount), re
      }, A = E => {
         const R = {
            ...u.mount ? l : a
         };
         return gt(E) ? R : Qn(E) ? ne(R, E) : E.map(V => ne(R, V))
      }, Z = (E, R) => ({
         invalid: !!ne((R || r).errors, E),
         isDirty: !!ne((R || r).dirtyFields, E),
         error: ne((R || r).errors, E),
         isValidating: !!ne(r.validatingFields, E),
         isTouched: !!ne((R || r).touchedFields, E)
      }), Ne = E => {
         E && so(E).forEach(R => kt(r.errors, R)), v.state.next({
            errors: E ? r.errors : {}
         })
      }, Ae = (E, R, V) => {
         const re = (ne(i, E, {
               _f: {}
            })._f || {}).ref,
            te = ne(r.errors, E) || {},
            {
               ref: J,
               message: ve,
               type: Ie,
               ...dt
            } = te;
         He(r.errors, E, {
            ...dt,
            ...R,
            ref: re
         }), v.state.next({
            name: E,
            errors: r.errors,
            isValid: !1
         }), V && V.shouldFocus && re && re.focus && re.focus()
      }, ze = (E, R) => Hn(E) ? v.values.subscribe({
         next: V => E(ge(void 0, R), V)
      }) : ge(E, R, !0), Ve = (E, R = {}) => {
         for (const V of E ? so(E) : d.mount) d.mount.delete(V), d.array.delete(V), R.keepValue || (kt(i, V), kt(l, V)), !R.keepError && kt(r.errors, V), !R.keepDirty && kt(r.dirtyFields, V), !R.keepTouched && kt(r.touchedFields, V), !R.keepIsValidating && kt(r.validatingFields, V), !e.shouldUnregister && !R.keepDefaultValue && kt(a, V);
         v.values.next({
            values: {
               ...l
            }
         }), v.state.next({
            ...r,
            ...R.keepDirty ? {
               isDirty: X()
            } : {}
         }), !R.keepIsValid && C()
      }, Qe = ({
         disabled: E,
         name: R,
         field: V,
         fields: re
      }) => {
         (wn(E) && u.mount || E || d.disabled.has(R)) && (E ? d.disabled.add(R) : d.disabled.delete(R), U(R, xf(V ? V._f : ne(re, R)._f), !1, !1, !0))
      }, Ue = (E, R = {}) => {
         let V = ne(i, E);
         const re = wn(R.disabled) || wn(e.disabled);
         return He(i, E, {
            ...V || {},
            _f: {
               ...V && V._f ? V._f : {
                  ref: {
                     name: E
                  }
               },
               name: E,
               mount: !0,
               ...R
            }
         }), d.mount.add(E), V ? Qe({
            field: V,
            disabled: wn(R.disabled) ? R.disabled : e.disabled,
            name: E
         }) : z(E, !0, R.value), {
            ...re ? {
               disabled: R.disabled || e.disabled
            } : {},
            ...e.progressive ? {
               required: !!R.required,
               min: La(R.min),
               max: La(R.max),
               minLength: La(R.minLength),
               maxLength: La(R.maxLength),
               pattern: La(R.pattern)
            } : {},
            name: E,
            onChange: Q,
            onBlur: Q,
            ref: te => {
               if (te) {
                  Ue(E, R), V = ne(i, E);
                  const J = gt(te.value) && te.querySelectorAll && te.querySelectorAll("input,select,textarea")[0] || te,
                     ve = pN(J),
                     Ie = V._f.refs || [];
                  if (ve ? Ie.find(dt => dt === J) : J === V._f.ref) return;
                  He(i, E, {
                     _f: {
                        ...V._f,
                        ...ve ? {
                           refs: [...Ie.filter(vf), J, ...Array.isArray(ne(a, E)) ? [{}] : []],
                           ref: {
                              type: J.type,
                              name: E
                           }
                        } : {
                           ref: J
                        }
                     }
                  }), z(E, !1, void 0, J)
               } else V = ne(i, E, {}), V._f && (V._f.mount = !1), (e.shouldUnregister || R.shouldUnregister) && !(Cb(d.array, E) && u.action) && d.unMount.add(E)
            }
         }
      }, Ke = () => e.shouldFocusError && io(i, ae, d.mount), Vt = E => {
         wn(E) && (v.state.next({
            disabled: E
         }), io(i, (R, V) => {
            const re = ne(i, V);
            re && (R.disabled = re._f.disabled || E, Array.isArray(re._f.refs) && re._f.refs.forEach(te => {
               te.disabled = re._f.disabled || E
            }))
         }, 0, !1))
      }, us = (E, R) => async V => {
         let re;
         V && (V.preventDefault && V.preventDefault(), V.persist && V.persist());
         let te = Xt(l);
         if (d.disabled.size)
            for (const J of d.disabled) He(te, J, void 0);
         if (v.state.next({
               isSubmitting: !0
            }), e.resolver) {
            const {
               errors: J,
               values: ve
            } = await B();
            r.errors = J, te = ve
         } else await ye(i);
         if (kt(r.errors, "root"), en(r.errors)) {
            v.state.next({
               errors: {}
            });
            try {
               await E(te, V)
            } catch (J) {
               re = J
            }
         } else R && await R({
            ...r.errors
         }, V), Ke(), setTimeout(Ke);
         if (v.state.next({
               isSubmitted: !0,
               isSubmitting: !1,
               isSubmitSuccessful: en(r.errors) && !re,
               submitCount: r.submitCount + 1,
               errors: r.errors
            }), re) throw re
      }, Fo = (E, R = {}) => {
         ne(i, E) && (gt(R.defaultValue) ? fe(E, Xt(ne(a, E))) : (fe(E, R.defaultValue), He(a, E, Xt(R.defaultValue))), R.keepTouched || kt(r.touchedFields, E), R.keepDirty || (kt(r.dirtyFields, E), r.isDirty = R.defaultValue ? X(E, Xt(ne(a, E))) : X()), R.keepError || (kt(r.errors, E), y.isValid && C()), v.state.next({
            ...r
         }))
      }, ds = (E, R = {}) => {
         const V = E ? Xt(E) : a,
            re = Xt(V),
            te = en(E),
            J = te ? a : re;
         if (R.keepDefaultValues || (a = V), !R.keepValues) {
            if (R.keepDirtyValues) {
               const ve = new Set([...d.mount, ...Object.keys(Oa(a, l))]);
               for (const Ie of Array.from(ve)) ne(r.dirtyFields, Ie) ? He(J, Ie, ne(l, Ie)) : fe(Ie, ne(J, Ie))
            } else {
               if (sp && gt(E))
                  for (const ve of d.mount) {
                     const Ie = ne(i, ve);
                     if (Ie && Ie._f) {
                        const dt = Array.isArray(Ie._f.refs) ? Ie._f.refs[0] : Ie._f.ref;
                        if (jc(dt)) {
                           const at = dt.closest("form");
                           if (at) {
                              at.reset();
                              break
                           }
                        }
                     }
                  }
               i = {}
            }
            l = e.shouldUnregister ? R.keepDefaultValues ? Xt(a) : {} : Xt(J), v.array.next({
               values: {
                  ...J
               }
            }), v.values.next({
               values: {
                  ...J
               }
            })
         }
         d = {
            mount: R.keepDirtyValues ? d.mount : new Set,
            unMount: new Set,
            array: new Set,
            disabled: new Set,
            watch: new Set,
            watchAll: !1,
            focus: ""
         }, u.mount = !y.isValid || !!R.keepIsValid || !!R.keepDirtyValues, u.watch = !!e.shouldUnregister, v.state.next({
            submitCount: R.keepSubmitCount ? r.submitCount : 0,
            isDirty: te ? !1 : R.keepDirty ? r.isDirty : !!(R.keepDefaultValues && !Qr(E, a)),
            isSubmitted: R.keepIsSubmitted ? r.isSubmitted : !1,
            dirtyFields: te ? {} : R.keepDirtyValues ? R.keepDefaultValues && l ? Oa(a, l) : r.dirtyFields : R.keepDefaultValues && E ? Oa(a, E) : R.keepDirty ? r.dirtyFields : {},
            touchedFields: R.keepTouched ? r.touchedFields : {},
            errors: R.keepErrors ? r.errors : {},
            isSubmitSuccessful: R.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
            isSubmitting: !1
         })
      }, $s = (E, R) => ds(Hn(E) ? E(l) : E, R);
   return {
      control: {
         register: Ue,
         unregister: Ve,
         getFieldState: Z,
         handleSubmit: us,
         setError: Ae,
         _executeSchema: B,
         _getWatch: ge,
         _getDirty: X,
         _updateValid: C,
         _removeUnmounted: Le,
         _updateFieldArray: D,
         _updateDisabledField: Qe,
         _getFieldArray: se,
         _reset: ds,
         _resetDefaultValues: () => Hn(e.defaultValues) && e.defaultValues().then(E => {
            $s(E, e.resetOptions), v.state.next({
               isLoading: !1
            })
         }),
         _updateFormState: E => {
            r = {
               ...r,
               ...E
            }
         },
         _disableForm: Vt,
         _subjects: v,
         _proxyFormState: y,
         _setErrors: $,
         get _fields() {
            return i
         },
         get _formValues() {
            return l
         },
         get _state() {
            return u
         },
         set _state(E) {
            u = E
         },
         get _defaultValues() {
            return a
         },
         get _names() {
            return d
         },
         set _names(E) {
            d = E
         },
         get _formState() {
            return r
         },
         set _formState(E) {
            r = E
         },
         get _options() {
            return e
         },
         set _options(E) {
            e = {
               ...e,
               ...E
            }
         }
      },
      trigger: ee,
      register: Ue,
      handleSubmit: us,
      watch: ze,
      setValue: fe,
      getValues: A,
      reset: $s,
      resetField: Fo,
      clearErrors: Ne,
      unregister: Ve,
      setError: Ae,
      setFocus: (E, R = {}) => {
         const V = ne(i, E),
            re = V && V._f;
         if (re) {
            const te = re.refs ? re.refs[0] : re.ref;
            te.focus && (te.focus(), R.shouldSelect && Hn(te.select) && te.select())
         }
      },
      getFieldState: Z
   }
}

function kN(t = {}) {
   const e = be.useRef(void 0),
      r = be.useRef(void 0),
      [i, a] = be.useState({
         isDirty: !1,
         isValidating: !1,
         isLoading: Hn(t.defaultValues),
         isSubmitted: !1,
         isSubmitting: !1,
         isSubmitSuccessful: !1,
         isValid: !1,
         submitCount: 0,
         dirtyFields: {},
         touchedFields: {},
         validatingFields: {},
         errors: t.errors || {},
         disabled: t.disabled || !1,
         defaultValues: Hn(t.defaultValues) ? void 0 : t.defaultValues
      });
   e.current || (e.current = {
      ...bN(t),
      formState: i
   });
   const l = e.current.control;
   return l._options = t, ap({
      subject: l._subjects.state,
      next: u => {
         _b(u, l._proxyFormState, l._updateFormState, !0) && a({
            ...l._formState
         })
      }
   }), be.useEffect(() => l._disableForm(t.disabled), [l, t.disabled]), be.useEffect(() => {
      if (l._proxyFormState.isDirty) {
         const u = l._getDirty();
         u !== i.isDirty && l._subjects.state.next({
            isDirty: u
         })
      }
   }, [l, i.isDirty]), be.useEffect(() => {
      t.values && !Qr(t.values, r.current) ? (l._reset(t.values, l._options.resetOptions), r.current = t.values, a(u => ({
         ...u
      }))) : l._resetDefaultValues()
   }, [t.values, l]), be.useEffect(() => {
      t.errors && l._setErrors(t.errors)
   }, [t.errors, l]), be.useEffect(() => {
      l._state.mount || (l._updateValid(), l._state.mount = !0), l._state.watch && (l._state.watch = !1, l._subjects.state.next({
         ...l._formState
      })), l._removeUnmounted()
   }), be.useEffect(() => {
      t.shouldUnregister && l._subjects.values.next({
         values: l._getWatch()
      })
   }, [t.shouldUnregister, l]), e.current.formState = Pb(i, l), e.current
}
const e0 = (t, e, r) => {
      if (t && "reportValidity" in t) {
         const i = ne(r, e);
         t.setCustomValidity(i && i.message || ""), t.reportValidity()
      }
   },
   Vb = (t, e) => {
      for (const r in e.fields) {
         const i = e.fields[r];
         i && i.ref && "reportValidity" in i.ref ? e0(i.ref, r, t) : i.refs && i.refs.forEach(a => e0(a, r, t))
      }
   },
   SN = (t, e) => {
      e.shouldUseNativeValidation && Vb(t, e);
      const r = {};
      for (const i in t) {
         const a = ne(e.fields, i),
            l = Object.assign(t[i] || {}, {
               ref: a && a.ref
            });
         if (TN(e.names || Object.keys(t), i)) {
            const u = Object.assign({}, ne(r, i));
            He(u, "root", l), He(r, i, u)
         } else He(r, i, l)
      }
      return r
   },
   TN = (t, e) => t.some(r => r.startsWith(e + "."));
var CN = function (t, e) {
      for (var r = {}; t.length;) {
         var i = t[0],
            a = i.code,
            l = i.message,
            u = i.path.join(".");
         if (!r[u])
            if ("unionErrors" in i) {
               var d = i.unionErrors[0].errors[0];
               r[u] = {
                  message: d.message,
                  type: d.code
               }
            } else r[u] = {
               message: l,
               type: a
            };
         if ("unionErrors" in i && i.unionErrors.forEach(function (y) {
               return y.errors.forEach(function (v) {
                  return t.push(v)
               })
            }), e) {
            var p = r[u].types,
               m = p && p[i.code];
            r[u] = Db(u, e, r, a, m ? [].concat(m, i.message) : i.message)
         }
         t.shift()
      }
      return r
   },
   jN = function (t, e, r) {
      return r === void 0 && (r = {}),
         function (i, a, l) {
            try {
               return Promise.resolve(function (u, d) {
                  try {
                     var p = Promise.resolve(t[r.mode === "sync" ? "parse" : "parseAsync"](i, e)).then(function (m) {
                        return l.shouldUseNativeValidation && Vb({}, l), {
                           errors: {},
                           values: r.raw ? i : m
                        }
                     })
                  } catch (m) {
                     return d(m)
                  }
                  return p && p.then ? p.then(void 0, d) : p
               }(0, function (u) {
                  if (function (d) {
                        return Array.isArray(d == null ? void 0 : d.errors)
                     }(u)) return {
                     values: {},
                     errors: SN(CN(u.errors, !l.shouldUseNativeValidation && l.criteriaMode === "all"), l)
                  };
                  throw u
               }))
            } catch (u) {
               return Promise.reject(u)
            }
         }
   },
   Be;
(function (t) {
   t.assertEqual = a => a;

   function e(a) {}
   t.assertIs = e;

   function r(a) {
      throw new Error
   }
   t.assertNever = r, t.arrayToEnum = a => {
      const l = {};
      for (const u of a) l[u] = u;
      return l
   }, t.getValidEnumValues = a => {
      const l = t.objectKeys(a).filter(d => typeof a[a[d]] != "number"),
         u = {};
      for (const d of l) u[d] = a[d];
      return t.objectValues(u)
   }, t.objectValues = a => t.objectKeys(a).map(function (l) {
      return a[l]
   }), t.objectKeys = typeof Object.keys == "function" ? a => Object.keys(a) : a => {
      const l = [];
      for (const u in a) Object.prototype.hasOwnProperty.call(a, u) && l.push(u);
      return l
   }, t.find = (a, l) => {
      for (const u of a)
         if (l(u)) return u
   }, t.isInteger = typeof Number.isInteger == "function" ? a => Number.isInteger(a) : a => typeof a == "number" && isFinite(a) && Math.floor(a) === a;

   function i(a, l = " | ") {
      return a.map(u => typeof u == "string" ? `'${u}'` : u).join(l)
   }
   t.joinValues = i, t.jsonStringifyReplacer = (a, l) => typeof l == "bigint" ? l.toString() : l
})(Be || (Be = {}));
var th;
(function (t) {
   t.mergeShapes = (e, r) => ({
      ...e,
      ...r
   })
})(th || (th = {}));
const le = Be.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
   mr = t => {
      switch (typeof t) {
         case "undefined":
            return le.undefined;
         case "string":
            return le.string;
         case "number":
            return isNaN(t) ? le.nan : le.number;
         case "boolean":
            return le.boolean;
         case "function":
            return le.function;
         case "bigint":
            return le.bigint;
         case "symbol":
            return le.symbol;
         case "object":
            return Array.isArray(t) ? le.array : t === null ? le.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? le.promise : typeof Map < "u" && t instanceof Map ? le.map : typeof Set < "u" && t instanceof Set ? le.set : typeof Date < "u" && t instanceof Date ? le.date : le.object;
         default:
            return le.unknown
      }
   },
   K = Be.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]),
   EN = t => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class ln extends Error {
   get errors() {
      return this.issues
   }
   constructor(e) {
      super(), this.issues = [], this.addIssue = i => {
         this.issues = [...this.issues, i]
      }, this.addIssues = (i = []) => {
         this.issues = [...this.issues, ...i]
      };
      const r = new.target.prototype;
      Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e
   }
   format(e) {
      const r = e || function (l) {
            return l.message
         },
         i = {
            _errors: []
         },
         a = l => {
            for (const u of l.issues)
               if (u.code === "invalid_union") u.unionErrors.map(a);
               else if (u.code === "invalid_return_type") a(u.returnTypeError);
            else if (u.code === "invalid_arguments") a(u.argumentsError);
            else if (u.path.length === 0) i._errors.push(r(u));
            else {
               let d = i,
                  p = 0;
               for (; p < u.path.length;) {
                  const m = u.path[p];
                  p === u.path.length - 1 ? (d[m] = d[m] || {
                     _errors: []
                  }, d[m]._errors.push(r(u))) : d[m] = d[m] || {
                     _errors: []
                  }, d = d[m], p++
               }
            }
         };
      return a(this), i
   }
   static assert(e) {
      if (!(e instanceof ln)) throw new Error(`Not a ZodError: ${e}`)
   }
   toString() {
      return this.message
   }
   get message() {
      return JSON.stringify(this.issues, Be.jsonStringifyReplacer, 2)
   }
   get isEmpty() {
      return this.issues.length === 0
   }
   flatten(e = r => r.message) {
      const r = {},
         i = [];
      for (const a of this.issues) a.path.length > 0 ? (r[a.path[0]] = r[a.path[0]] || [], r[a.path[0]].push(e(a))) : i.push(e(a));
      return {
         formErrors: i,
         fieldErrors: r
      }
   }
   get formErrors() {
      return this.flatten()
   }
}
ln.create = t => new ln(t);
const Bi = (t, e) => {
   let r;
   switch (t.code) {
      case K.invalid_type:
         t.received === le.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
         break;
      case K.invalid_literal:
         r = `Invalid literal value, expected ${JSON.stringify(t.expected,Be.jsonStringifyReplacer)}`;
         break;
      case K.unrecognized_keys:
         r = `Unrecognized key(s) in object: ${Be.joinValues(t.keys,", ")}`;
         break;
      case K.invalid_union:
         r = "Invalid input";
         break;
      case K.invalid_union_discriminator:
         r = `Invalid discriminator value. Expected ${Be.joinValues(t.options)}`;
         break;
      case K.invalid_enum_value:
         r = `Invalid enum value. Expected ${Be.joinValues(t.options)}, received '${t.received}'`;
         break;
      case K.invalid_arguments:
         r = "Invalid function arguments";
         break;
      case K.invalid_return_type:
         r = "Invalid function return type";
         break;
      case K.invalid_date:
         r = "Invalid date";
         break;
      case K.invalid_string:
         typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : Be.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
         break;
      case K.too_small:
         t.type === "array" ? r = `Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
         break;
      case K.too_big:
         t.type === "array" ? r = `Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
         break;
      case K.custom:
         r = "Invalid input";
         break;
      case K.invalid_intersection_types:
         r = "Intersection results could not be merged";
         break;
      case K.not_multiple_of:
         r = `Number must be a multiple of ${t.multipleOf}`;
         break;
      case K.not_finite:
         r = "Number must be finite";
         break;
      default:
         r = e.defaultError, Be.assertNever(t)
   }
   return {
      message: r
   }
};
let zb = Bi;

function PN(t) {
   zb = t
}

function _c() {
   return zb
}
const Nc = t => {
      const {
         data: e,
         path: r,
         errorMaps: i,
         issueData: a
      } = t, l = [...r, ...a.path || []], u = {
         ...a,
         path: l
      };
      if (a.message !== void 0) return {
         ...a,
         path: l,
         message: a.message
      };
      let d = "";
      const p = i.filter(m => !!m).slice().reverse();
      for (const m of p) d = m(u, {
         data: e,
         defaultError: d
      }).message;
      return {
         ...a,
         path: l,
         message: d
      }
   },
   _N = [];

function ie(t, e) {
   const r = _c(),
      i = Nc({
         issueData: e,
         data: t.data,
         path: t.path,
         errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, r, r === Bi ? void 0 : Bi].filter(a => !!a)
      });
   t.common.issues.push(i)
}
class Ft {
   constructor() {
      this.value = "valid"
   }
   dirty() {
      this.value === "valid" && (this.value = "dirty")
   }
   abort() {
      this.value !== "aborted" && (this.value = "aborted")
   }
   static mergeArray(e, r) {
      const i = [];
      for (const a of r) {
         if (a.status === "aborted") return je;
         a.status === "dirty" && e.dirty(), i.push(a.value)
      }
      return {
         status: e.value,
         value: i
      }
   }
   static async mergeObjectAsync(e, r) {
      const i = [];
      for (const a of r) {
         const l = await a.key,
            u = await a.value;
         i.push({
            key: l,
            value: u
         })
      }
      return Ft.mergeObjectSync(e, i)
   }
   static mergeObjectSync(e, r) {
      const i = {};
      for (const a of r) {
         const {
            key: l,
            value: u
         } = a;
         if (l.status === "aborted" || u.status === "aborted") return je;
         l.status === "dirty" && e.dirty(), u.status === "dirty" && e.dirty(), l.value !== "__proto__" && (typeof u.value < "u" || a.alwaysSet) && (i[l.value] = u.value)
      }
      return {
         status: e.value,
         value: i
      }
   }
}
const je = Object.freeze({
      status: "aborted"
   }),
   ki = t => ({
      status: "dirty",
      value: t
   }),
   Zt = t => ({
      status: "valid",
      value: t
   }),
   nh = t => t.status === "aborted",
   rh = t => t.status === "dirty",
   Fs = t => t.status === "valid",
   ho = t => typeof Promise < "u" && t instanceof Promise;

function Ac(t, e, r, i) {
   if (typeof e == "function" ? t !== e || !0 : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
   return e.get(t)
}

function Bb(t, e, r, i, a) {
   if (typeof e == "function" ? t !== e || !0 : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
   return e.set(t, r), r
}
var pe;
(function (t) {
   t.errToObj = e => typeof e == "string" ? {
      message: e
   } : e || {}, t.toString = e => typeof e == "string" ? e : e == null ? void 0 : e.message
})(pe || (pe = {}));
var Za, Wa;
class Xn {
   constructor(e, r, i, a) {
      this._cachedPath = [], this.parent = e, this.data = r, this._path = i, this._key = a
   }
   get path() {
      return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
   }
}
const t0 = (t, e) => {
   if (Fs(e)) return {
      success: !0,
      data: e.value
   };
   if (!t.common.issues.length) throw new Error("Validation failed but no issues detected.");
   return {
      success: !1,
      get error() {
         if (this._error) return this._error;
         const r = new ln(t.common.issues);
         return this._error = r, this._error
      }
   }
};

function De(t) {
   if (!t) return {};
   const {
      errorMap: e,
      invalid_type_error: r,
      required_error: i,
      description: a
   } = t;
   if (e && (r || i)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
   return e ? {
      errorMap: e,
      description: a
   } : {
      errorMap: (u, d) => {
         var p, m;
         const {
            message: y
         } = t;
         return u.code === "invalid_enum_value" ? {
            message: y ?? d.defaultError
         } : typeof d.data > "u" ? {
            message: (p = y ?? i) !== null && p !== void 0 ? p : d.defaultError
         } : u.code !== "invalid_type" ? {
            message: d.defaultError
         } : {
            message: (m = y ?? r) !== null && m !== void 0 ? m : d.defaultError
         }
      },
      description: a
   }
}
class Re {
   get description() {
      return this._def.description
   }
   _getType(e) {
      return mr(e.data)
   }
   _getOrReturnCtx(e, r) {
      return r || {
         common: e.parent.common,
         data: e.data,
         parsedType: mr(e.data),
         schemaErrorMap: this._def.errorMap,
         path: e.path,
         parent: e.parent
      }
   }
   _processInputParams(e) {
      return {
         status: new Ft,
         ctx: {
            common: e.parent.common,
            data: e.data,
            parsedType: mr(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
         }
      }
   }
   _parseSync(e) {
      const r = this._parse(e);
      if (ho(r)) throw new Error("Synchronous parse encountered promise.");
      return r
   }
   _parseAsync(e) {
      const r = this._parse(e);
      return Promise.resolve(r)
   }
   parse(e, r) {
      const i = this.safeParse(e, r);
      if (i.success) return i.data;
      throw i.error
   }
   safeParse(e, r) {
      var i;
      const a = {
            common: {
               issues: [],
               async: (i = r == null ? void 0 : r.async) !== null && i !== void 0 ? i : !1,
               contextualErrorMap: r == null ? void 0 : r.errorMap
            },
            path: (r == null ? void 0 : r.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: mr(e)
         },
         l = this._parseSync({
            data: e,
            path: a.path,
            parent: a
         });
      return t0(a, l)
   }
   "~validate"(e) {
      var r, i;
      const a = {
         common: {
            issues: [],
            async: !!this["~standard"].async
         },
         path: [],
         schemaErrorMap: this._def.errorMap,
         parent: null,
         data: e,
         parsedType: mr(e)
      };
      if (!this["~standard"].async) try {
         const l = this._parseSync({
            data: e,
            path: [],
            parent: a
         });
         return Fs(l) ? {
            value: l.value
         } : {
            issues: a.common.issues
         }
      } catch (l) {
         !((i = (r = l == null ? void 0 : l.message) === null || r === void 0 ? void 0 : r.toLowerCase()) === null || i === void 0) && i.includes("encountered") && (this["~standard"].async = !0), a.common = {
            issues: [],
            async: !0
         }
      }
      return this._parseAsync({
         data: e,
         path: [],
         parent: a
      }).then(l => Fs(l) ? {
         value: l.value
      } : {
         issues: a.common.issues
      })
   }
   async parseAsync(e, r) {
      const i = await this.safeParseAsync(e, r);
      if (i.success) return i.data;
      throw i.error
   }
   async safeParseAsync(e, r) {
      const i = {
            common: {
               issues: [],
               contextualErrorMap: r == null ? void 0 : r.errorMap,
               async: !0
            },
            path: (r == null ? void 0 : r.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: mr(e)
         },
         a = this._parse({
            data: e,
            path: i.path,
            parent: i
         }),
         l = await (ho(a) ? a : Promise.resolve(a));
      return t0(i, l)
   }
   refine(e, r) {
      const i = a => typeof r == "string" || typeof r > "u" ? {
         message: r
      } : typeof r == "function" ? r(a) : r;
      return this._refinement((a, l) => {
         const u = e(a),
            d = () => l.addIssue({
               code: K.custom,
               ...i(a)
            });
         return typeof Promise < "u" && u instanceof Promise ? u.then(p => p ? !0 : (d(), !1)) : u ? !0 : (d(), !1)
      })
   }
   refinement(e, r) {
      return this._refinement((i, a) => e(i) ? !0 : (a.addIssue(typeof r == "function" ? r(i, a) : r), !1))
   }
   _refinement(e) {
      return new Ln({
         schema: this,
         typeName: Ce.ZodEffects,
         effect: {
            type: "refinement",
            refinement: e
         }
      })
   }
   superRefine(e) {
      return this._refinement(e)
   }
   constructor(e) {
      this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
         version: 1,
         vendor: "zod",
         validate: r => this["~validate"](r)
      }
   }
   optional() {
      return Gn.create(this, this._def)
   }
   nullable() {
      return os.create(this, this._def)
   }
   nullish() {
      return this.nullable().optional()
   }
   array() {
      return On.create(this)
   }
   promise() {
      return $i.create(this, this._def)
   }
   or(e) {
      return yo.create([this, e], this._def)
   }
   and(e) {
      return vo.create(this, e, this._def)
   }
   transform(e) {
      return new Ln({
         ...De(this._def),
         schema: this,
         typeName: Ce.ZodEffects,
         effect: {
            type: "transform",
            transform: e
         }
      })
   }
   default (e) {
      const r = typeof e == "function" ? e : () => e;
      return new So({
         ...De(this._def),
         innerType: this,
         defaultValue: r,
         typeName: Ce.ZodDefault
      })
   }
   brand() {
      return new cp({
         typeName: Ce.ZodBranded,
         type: this,
         ...De(this._def)
      })
   } catch (e) {
      const r = typeof e == "function" ? e : () => e;
      return new To({
         ...De(this._def),
         innerType: this,
         catchValue: r,
         typeName: Ce.ZodCatch
      })
   }
   describe(e) {
      const r = this.constructor;
      return new r({
         ...this._def,
         description: e
      })
   }
   pipe(e) {
      return Oo.create(this, e)
   }
   readonly() {
      return Co.create(this)
   }
   isOptional() {
      return this.safeParse(void 0).success
   }
   isNullable() {
      return this.safeParse(null).success
   }
}
const NN = /^c[^\s-]{8,}$/i,
   AN = /^[0-9a-z]+$/,
   DN = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
   IN = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
   MN = /^[a-z0-9_-]{21}$/i,
   RN = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
   ON = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
   LN = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
   FN = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let wf;
const VN = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
   zN = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
   BN = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
   UN = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
   $N = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
   ZN = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
   Ub = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
   WN = new RegExp(`^${Ub}$`);

function $b(t) {
   let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
   return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`), e
}

function HN(t) {
   return new RegExp(`^${$b(t)}$`)
}

function Zb(t) {
   let e = `${Ub}T${$b(t)}`;
   const r = [];
   return r.push(t.local ? "Z?" : "Z"), t.offset && r.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${r.join("|")})`, new RegExp(`^${e}$`)
}

function QN(t, e) {
   return !!((e === "v4" || !e) && VN.test(t) || (e === "v6" || !e) && BN.test(t))
}

function qN(t, e) {
   if (!RN.test(t)) return !1;
   try {
      const [r] = t.split("."), i = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), a = JSON.parse(atob(i));
      return !(typeof a != "object" || a === null || !a.typ || !a.alg || e && a.alg !== e)
   } catch {
      return !1
   }
}

function KN(t, e) {
   return !!((e === "v4" || !e) && zN.test(t) || (e === "v6" || !e) && UN.test(t))
}
class Mn extends Re {
   _parse(e) {
      if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== le.string) {
         const l = this._getOrReturnCtx(e);
         return ie(l, {
            code: K.invalid_type,
            expected: le.string,
            received: l.parsedType
         }), je
      }
      const i = new Ft;
      let a;
      for (const l of this._def.checks)
         if (l.kind === "min") e.data.length < l.value && (a = this._getOrReturnCtx(e, a), ie(a, {
            code: K.too_small,
            minimum: l.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: l.message
         }), i.dirty());
         else if (l.kind === "max") e.data.length > l.value && (a = this._getOrReturnCtx(e, a), ie(a, {
         code: K.too_big,
         maximum: l.value,
         type: "string",
         inclusive: !0,
         exact: !1,
         message: l.message
      }), i.dirty());
      else if (l.kind === "length") {
         const u = e.data.length > l.value,
            d = e.data.length < l.value;
         (u || d) && (a = this._getOrReturnCtx(e, a), u ? ie(a, {
            code: K.too_big,
            maximum: l.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: l.message
         }) : d && ie(a, {
            code: K.too_small,
            minimum: l.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: l.message
         }), i.dirty())
      } else if (l.kind === "email") LN.test(e.data) || (a = this._getOrReturnCtx(e, a), ie(a, {
         validation: "email",
         code: K.invalid_string,
         message: l.message
      }), i.dirty());
      else if (l.kind === "emoji") wf || (wf = new RegExp(FN, "u")), wf.test(e.data) || (a = this._getOrReturnCtx(e, a), ie(a, {
         validation: "emoji",
         code: K.invalid_string,
         message: l.message
      }), i.dirty());
      else if (l.kind === "uuid") IN.test(e.data) || (a = this._getOrReturnCtx(e, a), ie(a, {
         validation: "uuid",
         code: K.invalid_string,
         message: l.message
      }), i.dirty());
      else if (l.kind === "nanoid") MN.test(e.data) || (a = this._getOrReturnCtx(e, a), ie(a, {
         validation: "nanoid",
         code: K.invalid_string,
         message: l.message
      }), i.dirty());
      else if (l.kind === "cuid") NN.test(e.data) || (a = this._getOrReturnCtx(e, a), ie(a, {
         validation: "cuid",
         code: K.invalid_string,
         message: l.message
      }), i.dirty());
      else if (l.kind === "cuid2") AN.test(e.data) || (a = this._getOrReturnCtx(e, a), ie(a, {
         validation: "cuid2",
         code: K.invalid_string,
         message: l.message
      }), i.dirty());
      else if (l.kind === "ulid") DN.test(e.data) || (a = this._getOrReturnCtx(e, a), ie(a, {
         validation: "ulid",
         code: K.invalid_string,
         message: l.message
      }), i.dirty());
      else if (l.kind === "url") try {
         new URL(e.data)
      } catch {
         a = this._getOrReturnCtx(e, a), ie(a, {
            validation: "url",
            code: K.invalid_string,
            message: l.message
         }), i.dirty()
      } else l.kind === "regex" ? (l.regex.lastIndex = 0, l.regex.test(e.data) || (a = this._getOrReturnCtx(e, a), ie(a, {
         validation: "regex",
         code: K.invalid_string,
         message: l.message
      }), i.dirty())) : l.kind === "trim" ? e.data = e.data.trim() : l.kind === "includes" ? e.data.includes(l.value, l.position) || (a = this._getOrReturnCtx(e, a), ie(a, {
         code: K.invalid_string,
         validation: {
            includes: l.value,
            position: l.position
         },
         message: l.message
      }), i.dirty()) : l.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : l.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : l.kind === "startsWith" ? e.data.startsWith(l.value) || (a = this._getOrReturnCtx(e, a), ie(a, {
         code: K.invalid_string,
         validation: {
            startsWith: l.value
         },
         message: l.message
      }), i.dirty()) : l.kind === "endsWith" ? e.data.endsWith(l.value) || (a = this._getOrReturnCtx(e, a), ie(a, {
         code: K.invalid_string,
         validation: {
            endsWith: l.value
         },
         message: l.message
      }), i.dirty()) : l.kind === "datetime" ? Zb(l).test(e.data) || (a = this._getOrReturnCtx(e, a), ie(a, {
         code: K.invalid_string,
         validation: "datetime",
         message: l.message
      }), i.dirty()) : l.kind === "date" ? WN.test(e.data) || (a = this._getOrReturnCtx(e, a), ie(a, {
         code: K.invalid_string,
         validation: "date",
         message: l.message
      }), i.dirty()) : l.kind === "time" ? HN(l).test(e.data) || (a = this._getOrReturnCtx(e, a), ie(a, {
         code: K.invalid_string,
         validation: "time",
         message: l.message
      }), i.dirty()) : l.kind === "duration" ? ON.test(e.data) || (a = this._getOrReturnCtx(e, a), ie(a, {
         validation: "duration",
         code: K.invalid_string,
         message: l.message
      }), i.dirty()) : l.kind === "ip" ? QN(e.data, l.version) || (a = this._getOrReturnCtx(e, a), ie(a, {
         validation: "ip",
         code: K.invalid_string,
         message: l.message
      }), i.dirty()) : l.kind === "jwt" ? qN(e.data, l.alg) || (a = this._getOrReturnCtx(e, a), ie(a, {
         validation: "jwt",
         code: K.invalid_string,
         message: l.message
      }), i.dirty()) : l.kind === "cidr" ? KN(e.data, l.version) || (a = this._getOrReturnCtx(e, a), ie(a, {
         validation: "cidr",
         code: K.invalid_string,
         message: l.message
      }), i.dirty()) : l.kind === "base64" ? $N.test(e.data) || (a = this._getOrReturnCtx(e, a), ie(a, {
         validation: "base64",
         code: K.invalid_string,
         message: l.message
      }), i.dirty()) : l.kind === "base64url" ? ZN.test(e.data) || (a = this._getOrReturnCtx(e, a), ie(a, {
         validation: "base64url",
         code: K.invalid_string,
         message: l.message
      }), i.dirty()) : Be.assertNever(l);
      return {
         status: i.value,
         value: e.data
      }
   }
   _regex(e, r, i) {
      return this.refinement(a => e.test(a), {
         validation: r,
         code: K.invalid_string,
         ...pe.errToObj(i)
      })
   }
   _addCheck(e) {
      return new Mn({
         ...this._def,
         checks: [...this._def.checks, e]
      })
   }
   email(e) {
      return this._addCheck({
         kind: "email",
         ...pe.errToObj(e)
      })
   }
   url(e) {
      return this._addCheck({
         kind: "url",
         ...pe.errToObj(e)
      })
   }
   emoji(e) {
      return this._addCheck({
         kind: "emoji",
         ...pe.errToObj(e)
      })
   }
   uuid(e) {
      return this._addCheck({
         kind: "uuid",
         ...pe.errToObj(e)
      })
   }
   nanoid(e) {
      return this._addCheck({
         kind: "nanoid",
         ...pe.errToObj(e)
      })
   }
   cuid(e) {
      return this._addCheck({
         kind: "cuid",
         ...pe.errToObj(e)
      })
   }
   cuid2(e) {
      return this._addCheck({
         kind: "cuid2",
         ...pe.errToObj(e)
      })
   }
   ulid(e) {
      return this._addCheck({
         kind: "ulid",
         ...pe.errToObj(e)
      })
   }
   base64(e) {
      return this._addCheck({
         kind: "base64",
         ...pe.errToObj(e)
      })
   }
   base64url(e) {
      return this._addCheck({
         kind: "base64url",
         ...pe.errToObj(e)
      })
   }
   jwt(e) {
      return this._addCheck({
         kind: "jwt",
         ...pe.errToObj(e)
      })
   }
   ip(e) {
      return this._addCheck({
         kind: "ip",
         ...pe.errToObj(e)
      })
   }
   cidr(e) {
      return this._addCheck({
         kind: "cidr",
         ...pe.errToObj(e)
      })
   }
   datetime(e) {
      var r, i;
      return typeof e == "string" ? this._addCheck({
         kind: "datetime",
         precision: null,
         offset: !1,
         local: !1,
         message: e
      }) : this._addCheck({
         kind: "datetime",
         precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
         offset: (r = e == null ? void 0 : e.offset) !== null && r !== void 0 ? r : !1,
         local: (i = e == null ? void 0 : e.local) !== null && i !== void 0 ? i : !1,
         ...pe.errToObj(e == null ? void 0 : e.message)
      })
   }
   date(e) {
      return this._addCheck({
         kind: "date",
         message: e
      })
   }
   time(e) {
      return typeof e == "string" ? this._addCheck({
         kind: "time",
         precision: null,
         message: e
      }) : this._addCheck({
         kind: "time",
         precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
         ...pe.errToObj(e == null ? void 0 : e.message)
      })
   }
   duration(e) {
      return this._addCheck({
         kind: "duration",
         ...pe.errToObj(e)
      })
   }
   regex(e, r) {
      return this._addCheck({
         kind: "regex",
         regex: e,
         ...pe.errToObj(r)
      })
   }
   includes(e, r) {
      return this._addCheck({
         kind: "includes",
         value: e,
         position: r == null ? void 0 : r.position,
         ...pe.errToObj(r == null ? void 0 : r.message)
      })
   }
   startsWith(e, r) {
      return this._addCheck({
         kind: "startsWith",
         value: e,
         ...pe.errToObj(r)
      })
   }
   endsWith(e, r) {
      return this._addCheck({
         kind: "endsWith",
         value: e,
         ...pe.errToObj(r)
      })
   }
   min(e, r) {
      return this._addCheck({
         kind: "min",
         value: e,
         ...pe.errToObj(r)
      })
   }
   max(e, r) {
      return this._addCheck({
         kind: "max",
         value: e,
         ...pe.errToObj(r)
      })
   }
   length(e, r) {
      return this._addCheck({
         kind: "length",
         value: e,
         ...pe.errToObj(r)
      })
   }
   nonempty(e) {
      return this.min(1, pe.errToObj(e))
   }
   trim() {
      return new Mn({
         ...this._def,
         checks: [...this._def.checks, {
            kind: "trim"
         }]
      })
   }
   toLowerCase() {
      return new Mn({
         ...this._def,
         checks: [...this._def.checks, {
            kind: "toLowerCase"
         }]
      })
   }
   toUpperCase() {
      return new Mn({
         ...this._def,
         checks: [...this._def.checks, {
            kind: "toUpperCase"
         }]
      })
   }
   get isDatetime() {
      return !!this._def.checks.find(e => e.kind === "datetime")
   }
   get isDate() {
      return !!this._def.checks.find(e => e.kind === "date")
   }
   get isTime() {
      return !!this._def.checks.find(e => e.kind === "time")
   }
   get isDuration() {
      return !!this._def.checks.find(e => e.kind === "duration")
   }
   get isEmail() {
      return !!this._def.checks.find(e => e.kind === "email")
   }
   get isURL() {
      return !!this._def.checks.find(e => e.kind === "url")
   }
   get isEmoji() {
      return !!this._def.checks.find(e => e.kind === "emoji")
   }
   get isUUID() {
      return !!this._def.checks.find(e => e.kind === "uuid")
   }
   get isNANOID() {
      return !!this._def.checks.find(e => e.kind === "nanoid")
   }
   get isCUID() {
      return !!this._def.checks.find(e => e.kind === "cuid")
   }
   get isCUID2() {
      return !!this._def.checks.find(e => e.kind === "cuid2")
   }
   get isULID() {
      return !!this._def.checks.find(e => e.kind === "ulid")
   }
   get isIP() {
      return !!this._def.checks.find(e => e.kind === "ip")
   }
   get isCIDR() {
      return !!this._def.checks.find(e => e.kind === "cidr")
   }
   get isBase64() {
      return !!this._def.checks.find(e => e.kind === "base64")
   }
   get isBase64url() {
      return !!this._def.checks.find(e => e.kind === "base64url")
   }
   get minLength() {
      let e = null;
      for (const r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
      return e
   }
   get maxLength() {
      let e = null;
      for (const r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
      return e
   }
}
Mn.create = t => {
   var e;
   return new Mn({
      checks: [],
      typeName: Ce.ZodString,
      coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
      ...De(t)
   })
};

function GN(t, e) {
   const r = (t.toString().split(".")[1] || "").length,
      i = (e.toString().split(".")[1] || "").length,
      a = r > i ? r : i,
      l = parseInt(t.toFixed(a).replace(".", "")),
      u = parseInt(e.toFixed(a).replace(".", ""));
   return l % u / Math.pow(10, a)
}
class ss extends Re {
   constructor() {
      super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
   }
   _parse(e) {
      if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== le.number) {
         const l = this._getOrReturnCtx(e);
         return ie(l, {
            code: K.invalid_type,
            expected: le.number,
            received: l.parsedType
         }), je
      }
      let i;
      const a = new Ft;
      for (const l of this._def.checks) l.kind === "int" ? Be.isInteger(e.data) || (i = this._getOrReturnCtx(e, i), ie(i, {
         code: K.invalid_type,
         expected: "integer",
         received: "float",
         message: l.message
      }), a.dirty()) : l.kind === "min" ? (l.inclusive ? e.data < l.value : e.data <= l.value) && (i = this._getOrReturnCtx(e, i), ie(i, {
         code: K.too_small,
         minimum: l.value,
         type: "number",
         inclusive: l.inclusive,
         exact: !1,
         message: l.message
      }), a.dirty()) : l.kind === "max" ? (l.inclusive ? e.data > l.value : e.data >= l.value) && (i = this._getOrReturnCtx(e, i), ie(i, {
         code: K.too_big,
         maximum: l.value,
         type: "number",
         inclusive: l.inclusive,
         exact: !1,
         message: l.message
      }), a.dirty()) : l.kind === "multipleOf" ? GN(e.data, l.value) !== 0 && (i = this._getOrReturnCtx(e, i), ie(i, {
         code: K.not_multiple_of,
         multipleOf: l.value,
         message: l.message
      }), a.dirty()) : l.kind === "finite" ? Number.isFinite(e.data) || (i = this._getOrReturnCtx(e, i), ie(i, {
         code: K.not_finite,
         message: l.message
      }), a.dirty()) : Be.assertNever(l);
      return {
         status: a.value,
         value: e.data
      }
   }
   gte(e, r) {
      return this.setLimit("min", e, !0, pe.toString(r))
   }
   gt(e, r) {
      return this.setLimit("min", e, !1, pe.toString(r))
   }
   lte(e, r) {
      return this.setLimit("max", e, !0, pe.toString(r))
   }
   lt(e, r) {
      return this.setLimit("max", e, !1, pe.toString(r))
   }
   setLimit(e, r, i, a) {
      return new ss({
         ...this._def,
         checks: [...this._def.checks, {
            kind: e,
            value: r,
            inclusive: i,
            message: pe.toString(a)
         }]
      })
   }
   _addCheck(e) {
      return new ss({
         ...this._def,
         checks: [...this._def.checks, e]
      })
   }
   int(e) {
      return this._addCheck({
         kind: "int",
         message: pe.toString(e)
      })
   }
   positive(e) {
      return this._addCheck({
         kind: "min",
         value: 0,
         inclusive: !1,
         message: pe.toString(e)
      })
   }
   negative(e) {
      return this._addCheck({
         kind: "max",
         value: 0,
         inclusive: !1,
         message: pe.toString(e)
      })
   }
   nonpositive(e) {
      return this._addCheck({
         kind: "max",
         value: 0,
         inclusive: !0,
         message: pe.toString(e)
      })
   }
   nonnegative(e) {
      return this._addCheck({
         kind: "min",
         value: 0,
         inclusive: !0,
         message: pe.toString(e)
      })
   }
   multipleOf(e, r) {
      return this._addCheck({
         kind: "multipleOf",
         value: e,
         message: pe.toString(r)
      })
   }
   finite(e) {
      return this._addCheck({
         kind: "finite",
         message: pe.toString(e)
      })
   }
   safe(e) {
      return this._addCheck({
         kind: "min",
         inclusive: !0,
         value: Number.MIN_SAFE_INTEGER,
         message: pe.toString(e)
      })._addCheck({
         kind: "max",
         inclusive: !0,
         value: Number.MAX_SAFE_INTEGER,
         message: pe.toString(e)
      })
   }
   get minValue() {
      let e = null;
      for (const r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
      return e
   }
   get maxValue() {
      let e = null;
      for (const r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
      return e
   }
   get isInt() {
      return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && Be.isInteger(e.value))
   }
   get isFinite() {
      let e = null,
         r = null;
      for (const i of this._def.checks) {
         if (i.kind === "finite" || i.kind === "int" || i.kind === "multipleOf") return !0;
         i.kind === "min" ? (r === null || i.value > r) && (r = i.value) : i.kind === "max" && (e === null || i.value < e) && (e = i.value)
      }
      return Number.isFinite(r) && Number.isFinite(e)
   }
}
ss.create = t => new ss({
   checks: [],
   typeName: Ce.ZodNumber,
   coerce: (t == null ? void 0 : t.coerce) || !1,
   ...De(t)
});
class is extends Re {
   constructor() {
      super(...arguments), this.min = this.gte, this.max = this.lte
   }
   _parse(e) {
      if (this._def.coerce) try {
         e.data = BigInt(e.data)
      } catch {
         return this._getInvalidInput(e)
      }
      if (this._getType(e) !== le.bigint) return this._getInvalidInput(e);
      let i;
      const a = new Ft;
      for (const l of this._def.checks) l.kind === "min" ? (l.inclusive ? e.data < l.value : e.data <= l.value) && (i = this._getOrReturnCtx(e, i), ie(i, {
         code: K.too_small,
         type: "bigint",
         minimum: l.value,
         inclusive: l.inclusive,
         message: l.message
      }), a.dirty()) : l.kind === "max" ? (l.inclusive ? e.data > l.value : e.data >= l.value) && (i = this._getOrReturnCtx(e, i), ie(i, {
         code: K.too_big,
         type: "bigint",
         maximum: l.value,
         inclusive: l.inclusive,
         message: l.message
      }), a.dirty()) : l.kind === "multipleOf" ? e.data % l.value !== BigInt(0) && (i = this._getOrReturnCtx(e, i), ie(i, {
         code: K.not_multiple_of,
         multipleOf: l.value,
         message: l.message
      }), a.dirty()) : Be.assertNever(l);
      return {
         status: a.value,
         value: e.data
      }
   }
   _getInvalidInput(e) {
      const r = this._getOrReturnCtx(e);
      return ie(r, {
         code: K.invalid_type,
         expected: le.bigint,
         received: r.parsedType
      }), je
   }
   gte(e, r) {
      return this.setLimit("min", e, !0, pe.toString(r))
   }
   gt(e, r) {
      return this.setLimit("min", e, !1, pe.toString(r))
   }
   lte(e, r) {
      return this.setLimit("max", e, !0, pe.toString(r))
   }
   lt(e, r) {
      return this.setLimit("max", e, !1, pe.toString(r))
   }
   setLimit(e, r, i, a) {
      return new is({
         ...this._def,
         checks: [...this._def.checks, {
            kind: e,
            value: r,
            inclusive: i,
            message: pe.toString(a)
         }]
      })
   }
   _addCheck(e) {
      return new is({
         ...this._def,
         checks: [...this._def.checks, e]
      })
   }
   positive(e) {
      return this._addCheck({
         kind: "min",
         value: BigInt(0),
         inclusive: !1,
         message: pe.toString(e)
      })
   }
   negative(e) {
      return this._addCheck({
         kind: "max",
         value: BigInt(0),
         inclusive: !1,
         message: pe.toString(e)
      })
   }
   nonpositive(e) {
      return this._addCheck({
         kind: "max",
         value: BigInt(0),
         inclusive: !0,
         message: pe.toString(e)
      })
   }
   nonnegative(e) {
      return this._addCheck({
         kind: "min",
         value: BigInt(0),
         inclusive: !0,
         message: pe.toString(e)
      })
   }
   multipleOf(e, r) {
      return this._addCheck({
         kind: "multipleOf",
         value: e,
         message: pe.toString(r)
      })
   }
   get minValue() {
      let e = null;
      for (const r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
      return e
   }
   get maxValue() {
      let e = null;
      for (const r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
      return e
   }
}
is.create = t => {
   var e;
   return new is({
      checks: [],
      typeName: Ce.ZodBigInt,
      coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
      ...De(t)
   })
};
class po extends Re {
   _parse(e) {
      if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== le.boolean) {
         const i = this._getOrReturnCtx(e);
         return ie(i, {
            code: K.invalid_type,
            expected: le.boolean,
            received: i.parsedType
         }), je
      }
      return Zt(e.data)
   }
}
po.create = t => new po({
   typeName: Ce.ZodBoolean,
   coerce: (t == null ? void 0 : t.coerce) || !1,
   ...De(t)
});
class Vs extends Re {
   _parse(e) {
      if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== le.date) {
         const l = this._getOrReturnCtx(e);
         return ie(l, {
            code: K.invalid_type,
            expected: le.date,
            received: l.parsedType
         }), je
      }
      if (isNaN(e.data.getTime())) {
         const l = this._getOrReturnCtx(e);
         return ie(l, {
            code: K.invalid_date
         }), je
      }
      const i = new Ft;
      let a;
      for (const l of this._def.checks) l.kind === "min" ? e.data.getTime() < l.value && (a = this._getOrReturnCtx(e, a), ie(a, {
         code: K.too_small,
         message: l.message,
         inclusive: !0,
         exact: !1,
         minimum: l.value,
         type: "date"
      }), i.dirty()) : l.kind === "max" ? e.data.getTime() > l.value && (a = this._getOrReturnCtx(e, a), ie(a, {
         code: K.too_big,
         message: l.message,
         inclusive: !0,
         exact: !1,
         maximum: l.value,
         type: "date"
      }), i.dirty()) : Be.assertNever(l);
      return {
         status: i.value,
         value: new Date(e.data.getTime())
      }
   }
   _addCheck(e) {
      return new Vs({
         ...this._def,
         checks: [...this._def.checks, e]
      })
   }
   min(e, r) {
      return this._addCheck({
         kind: "min",
         value: e.getTime(),
         message: pe.toString(r)
      })
   }
   max(e, r) {
      return this._addCheck({
         kind: "max",
         value: e.getTime(),
         message: pe.toString(r)
      })
   }
   get minDate() {
      let e = null;
      for (const r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
      return e != null ? new Date(e) : null
   }
   get maxDate() {
      let e = null;
      for (const r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
      return e != null ? new Date(e) : null
   }
}
Vs.create = t => new Vs({
   checks: [],
   coerce: (t == null ? void 0 : t.coerce) || !1,
   typeName: Ce.ZodDate,
   ...De(t)
});
class Dc extends Re {
   _parse(e) {
      if (this._getType(e) !== le.symbol) {
         const i = this._getOrReturnCtx(e);
         return ie(i, {
            code: K.invalid_type,
            expected: le.symbol,
            received: i.parsedType
         }), je
      }
      return Zt(e.data)
   }
}
Dc.create = t => new Dc({
   typeName: Ce.ZodSymbol,
   ...De(t)
});
class mo extends Re {
   _parse(e) {
      if (this._getType(e) !== le.undefined) {
         const i = this._getOrReturnCtx(e);
         return ie(i, {
            code: K.invalid_type,
            expected: le.undefined,
            received: i.parsedType
         }), je
      }
      return Zt(e.data)
   }
}
mo.create = t => new mo({
   typeName: Ce.ZodUndefined,
   ...De(t)
});
class go extends Re {
   _parse(e) {
      if (this._getType(e) !== le.null) {
         const i = this._getOrReturnCtx(e);
         return ie(i, {
            code: K.invalid_type,
            expected: le.null,
            received: i.parsedType
         }), je
      }
      return Zt(e.data)
   }
}
go.create = t => new go({
   typeName: Ce.ZodNull,
   ...De(t)
});
class Ui extends Re {
   constructor() {
      super(...arguments), this._any = !0
   }
   _parse(e) {
      return Zt(e.data)
   }
}
Ui.create = t => new Ui({
   typeName: Ce.ZodAny,
   ...De(t)
});
class Ls extends Re {
   constructor() {
      super(...arguments), this._unknown = !0
   }
   _parse(e) {
      return Zt(e.data)
   }
}
Ls.create = t => new Ls({
   typeName: Ce.ZodUnknown,
   ...De(t)
});
class kr extends Re {
   _parse(e) {
      const r = this._getOrReturnCtx(e);
      return ie(r, {
         code: K.invalid_type,
         expected: le.never,
         received: r.parsedType
      }), je
   }
}
kr.create = t => new kr({
   typeName: Ce.ZodNever,
   ...De(t)
});
class Ic extends Re {
   _parse(e) {
      if (this._getType(e) !== le.undefined) {
         const i = this._getOrReturnCtx(e);
         return ie(i, {
            code: K.invalid_type,
            expected: le.void,
            received: i.parsedType
         }), je
      }
      return Zt(e.data)
   }
}
Ic.create = t => new Ic({
   typeName: Ce.ZodVoid,
   ...De(t)
});
class On extends Re {
   _parse(e) {
      const {
         ctx: r,
         status: i
      } = this._processInputParams(e), a = this._def;
      if (r.parsedType !== le.array) return ie(r, {
         code: K.invalid_type,
         expected: le.array,
         received: r.parsedType
      }), je;
      if (a.exactLength !== null) {
         const u = r.data.length > a.exactLength.value,
            d = r.data.length < a.exactLength.value;
         (u || d) && (ie(r, {
            code: u ? K.too_big : K.too_small,
            minimum: d ? a.exactLength.value : void 0,
            maximum: u ? a.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: a.exactLength.message
         }), i.dirty())
      }
      if (a.minLength !== null && r.data.length < a.minLength.value && (ie(r, {
            code: K.too_small,
            minimum: a.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: a.minLength.message
         }), i.dirty()), a.maxLength !== null && r.data.length > a.maxLength.value && (ie(r, {
            code: K.too_big,
            maximum: a.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: a.maxLength.message
         }), i.dirty()), r.common.async) return Promise.all([...r.data].map((u, d) => a.type._parseAsync(new Xn(r, u, r.path, d)))).then(u => Ft.mergeArray(i, u));
      const l = [...r.data].map((u, d) => a.type._parseSync(new Xn(r, u, r.path, d)));
      return Ft.mergeArray(i, l)
   }
   get element() {
      return this._def.type
   }
   min(e, r) {
      return new On({
         ...this._def,
         minLength: {
            value: e,
            message: pe.toString(r)
         }
      })
   }
   max(e, r) {
      return new On({
         ...this._def,
         maxLength: {
            value: e,
            message: pe.toString(r)
         }
      })
   }
   length(e, r) {
      return new On({
         ...this._def,
         exactLength: {
            value: e,
            message: pe.toString(r)
         }
      })
   }
   nonempty(e) {
      return this.min(1, e)
   }
}
On.create = (t, e) => new On({
   type: t,
   minLength: null,
   maxLength: null,
   exactLength: null,
   typeName: Ce.ZodArray,
   ...De(e)
});

function gi(t) {
   if (t instanceof st) {
      const e = {};
      for (const r in t.shape) {
         const i = t.shape[r];
         e[r] = Gn.create(gi(i))
      }
      return new st({
         ...t._def,
         shape: () => e
      })
   } else return t instanceof On ? new On({
      ...t._def,
      type: gi(t.element)
   }) : t instanceof Gn ? Gn.create(gi(t.unwrap())) : t instanceof os ? os.create(gi(t.unwrap())) : t instanceof Jn ? Jn.create(t.items.map(e => gi(e))) : t
}
class st extends Re {
   constructor() {
      super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
   }
   _getCached() {
      if (this._cached !== null) return this._cached;
      const e = this._def.shape(),
         r = Be.objectKeys(e);
      return this._cached = {
         shape: e,
         keys: r
      }
   }
   _parse(e) {
      if (this._getType(e) !== le.object) {
         const m = this._getOrReturnCtx(e);
         return ie(m, {
            code: K.invalid_type,
            expected: le.object,
            received: m.parsedType
         }), je
      }
      const {
         status: i,
         ctx: a
      } = this._processInputParams(e), {
         shape: l,
         keys: u
      } = this._getCached(), d = [];
      if (!(this._def.catchall instanceof kr && this._def.unknownKeys === "strip"))
         for (const m in a.data) u.includes(m) || d.push(m);
      const p = [];
      for (const m of u) {
         const y = l[m],
            v = a.data[m];
         p.push({
            key: {
               status: "valid",
               value: m
            },
            value: y._parse(new Xn(a, v, a.path, m)),
            alwaysSet: m in a.data
         })
      }
      if (this._def.catchall instanceof kr) {
         const m = this._def.unknownKeys;
         if (m === "passthrough")
            for (const y of d) p.push({
               key: {
                  status: "valid",
                  value: y
               },
               value: {
                  status: "valid",
                  value: a.data[y]
               }
            });
         else if (m === "strict") d.length > 0 && (ie(a, {
            code: K.unrecognized_keys,
            keys: d
         }), i.dirty());
         else if (m !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.")
      } else {
         const m = this._def.catchall;
         for (const y of d) {
            const v = a.data[y];
            p.push({
               key: {
                  status: "valid",
                  value: y
               },
               value: m._parse(new Xn(a, v, a.path, y)),
               alwaysSet: y in a.data
            })
         }
      }
      return a.common.async ? Promise.resolve().then(async () => {
         const m = [];
         for (const y of p) {
            const v = await y.key,
               w = await y.value;
            m.push({
               key: v,
               value: w,
               alwaysSet: y.alwaysSet
            })
         }
         return m
      }).then(m => Ft.mergeObjectSync(i, m)) : Ft.mergeObjectSync(i, p)
   }
   get shape() {
      return this._def.shape()
   }
   strict(e) {
      return pe.errToObj, new st({
         ...this._def,
         unknownKeys: "strict",
         ...e !== void 0 ? {
            errorMap: (r, i) => {
               var a, l, u, d;
               const p = (u = (l = (a = this._def).errorMap) === null || l === void 0 ? void 0 : l.call(a, r, i).message) !== null && u !== void 0 ? u : i.defaultError;
               return r.code === "unrecognized_keys" ? {
                  message: (d = pe.errToObj(e).message) !== null && d !== void 0 ? d : p
               } : {
                  message: p
               }
            }
         } : {}
      })
   }
   strip() {
      return new st({
         ...this._def,
         unknownKeys: "strip"
      })
   }
   passthrough() {
      return new st({
         ...this._def,
         unknownKeys: "passthrough"
      })
   }
   extend(e) {
      return new st({
         ...this._def,
         shape: () => ({
            ...this._def.shape(),
            ...e
         })
      })
   }
   merge(e) {
      return new st({
         unknownKeys: e._def.unknownKeys,
         catchall: e._def.catchall,
         shape: () => ({
            ...this._def.shape(),
            ...e._def.shape()
         }),
         typeName: Ce.ZodObject
      })
   }
   setKey(e, r) {
      return this.augment({
         [e]: r
      })
   }
   catchall(e) {
      return new st({
         ...this._def,
         catchall: e
      })
   }
   pick(e) {
      const r = {};
      return Be.objectKeys(e).forEach(i => {
         e[i] && this.shape[i] && (r[i] = this.shape[i])
      }), new st({
         ...this._def,
         shape: () => r
      })
   }
   omit(e) {
      const r = {};
      return Be.objectKeys(this.shape).forEach(i => {
         e[i] || (r[i] = this.shape[i])
      }), new st({
         ...this._def,
         shape: () => r
      })
   }
   deepPartial() {
      return gi(this)
   }
   partial(e) {
      const r = {};
      return Be.objectKeys(this.shape).forEach(i => {
         const a = this.shape[i];
         e && !e[i] ? r[i] = a : r[i] = a.optional()
      }), new st({
         ...this._def,
         shape: () => r
      })
   }
   required(e) {
      const r = {};
      return Be.objectKeys(this.shape).forEach(i => {
         if (e && !e[i]) r[i] = this.shape[i];
         else {
            let l = this.shape[i];
            for (; l instanceof Gn;) l = l._def.innerType;
            r[i] = l
         }
      }), new st({
         ...this._def,
         shape: () => r
      })
   }
   keyof() {
      return Wb(Be.objectKeys(this.shape))
   }
}
st.create = (t, e) => new st({
   shape: () => t,
   unknownKeys: "strip",
   catchall: kr.create(),
   typeName: Ce.ZodObject,
   ...De(e)
});
st.strictCreate = (t, e) => new st({
   shape: () => t,
   unknownKeys: "strict",
   catchall: kr.create(),
   typeName: Ce.ZodObject,
   ...De(e)
});
st.lazycreate = (t, e) => new st({
   shape: t,
   unknownKeys: "strip",
   catchall: kr.create(),
   typeName: Ce.ZodObject,
   ...De(e)
});
class yo extends Re {
   _parse(e) {
      const {
         ctx: r
      } = this._processInputParams(e), i = this._def.options;

      function a(l) {
         for (const d of l)
            if (d.result.status === "valid") return d.result;
         for (const d of l)
            if (d.result.status === "dirty") return r.common.issues.push(...d.ctx.common.issues), d.result;
         const u = l.map(d => new ln(d.ctx.common.issues));
         return ie(r, {
            code: K.invalid_union,
            unionErrors: u
         }), je
      }
      if (r.common.async) return Promise.all(i.map(async l => {
         const u = {
            ...r,
            common: {
               ...r.common,
               issues: []
            },
            parent: null
         };
         return {
            result: await l._parseAsync({
               data: r.data,
               path: r.path,
               parent: u
            }),
            ctx: u
         }
      })).then(a); {
         let l;
         const u = [];
         for (const p of i) {
            const m = {
                  ...r,
                  common: {
                     ...r.common,
                     issues: []
                  },
                  parent: null
               },
               y = p._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: m
               });
            if (y.status === "valid") return y;
            y.status === "dirty" && !l && (l = {
               result: y,
               ctx: m
            }), m.common.issues.length && u.push(m.common.issues)
         }
         if (l) return r.common.issues.push(...l.ctx.common.issues), l.result;
         const d = u.map(p => new ln(p));
         return ie(r, {
            code: K.invalid_union,
            unionErrors: d
         }), je
      }
   }
   get options() {
      return this._def.options
   }
}
yo.create = (t, e) => new yo({
   options: t,
   typeName: Ce.ZodUnion,
   ...De(e)
});
const hr = t => t instanceof wo ? hr(t.schema) : t instanceof Ln ? hr(t.innerType()) : t instanceof bo ? [t.value] : t instanceof as ? t.options : t instanceof ko ? Be.objectValues(t.enum) : t instanceof So ? hr(t._def.innerType) : t instanceof mo ? [void 0] : t instanceof go ? [null] : t instanceof Gn ? [void 0, ...hr(t.unwrap())] : t instanceof os ? [null, ...hr(t.unwrap())] : t instanceof cp || t instanceof Co ? hr(t.unwrap()) : t instanceof To ? hr(t._def.innerType) : [];
class Kc extends Re {
   _parse(e) {
      const {
         ctx: r
      } = this._processInputParams(e);
      if (r.parsedType !== le.object) return ie(r, {
         code: K.invalid_type,
         expected: le.object,
         received: r.parsedType
      }), je;
      const i = this.discriminator,
         a = r.data[i],
         l = this.optionsMap.get(a);
      return l ? r.common.async ? l._parseAsync({
         data: r.data,
         path: r.path,
         parent: r
      }) : l._parseSync({
         data: r.data,
         path: r.path,
         parent: r
      }) : (ie(r, {
         code: K.invalid_union_discriminator,
         options: Array.from(this.optionsMap.keys()),
         path: [i]
      }), je)
   }
   get discriminator() {
      return this._def.discriminator
   }
   get options() {
      return this._def.options
   }
   get optionsMap() {
      return this._def.optionsMap
   }
   static create(e, r, i) {
      const a = new Map;
      for (const l of r) {
         const u = hr(l.shape[e]);
         if (!u.length) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
         for (const d of u) {
            if (a.has(d)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(d)}`);
            a.set(d, l)
         }
      }
      return new Kc({
         typeName: Ce.ZodDiscriminatedUnion,
         discriminator: e,
         options: r,
         optionsMap: a,
         ...De(i)
      })
   }
}

function sh(t, e) {
   const r = mr(t),
      i = mr(e);
   if (t === e) return {
      valid: !0,
      data: t
   };
   if (r === le.object && i === le.object) {
      const a = Be.objectKeys(e),
         l = Be.objectKeys(t).filter(d => a.indexOf(d) !== -1),
         u = {
            ...t,
            ...e
         };
      for (const d of l) {
         const p = sh(t[d], e[d]);
         if (!p.valid) return {
            valid: !1
         };
         u[d] = p.data
      }
      return {
         valid: !0,
         data: u
      }
   } else if (r === le.array && i === le.array) {
      if (t.length !== e.length) return {
         valid: !1
      };
      const a = [];
      for (let l = 0; l < t.length; l++) {
         const u = t[l],
            d = e[l],
            p = sh(u, d);
         if (!p.valid) return {
            valid: !1
         };
         a.push(p.data)
      }
      return {
         valid: !0,
         data: a
      }
   } else return r === le.date && i === le.date && +t == +e ? {
      valid: !0,
      data: t
   } : {
      valid: !1
   }
}
class vo extends Re {
   _parse(e) {
      const {
         status: r,
         ctx: i
      } = this._processInputParams(e), a = (l, u) => {
         if (nh(l) || nh(u)) return je;
         const d = sh(l.value, u.value);
         return d.valid ? ((rh(l) || rh(u)) && r.dirty(), {
            status: r.value,
            value: d.data
         }) : (ie(i, {
            code: K.invalid_intersection_types
         }), je)
      };
      return i.common.async ? Promise.all([this._def.left._parseAsync({
         data: i.data,
         path: i.path,
         parent: i
      }), this._def.right._parseAsync({
         data: i.data,
         path: i.path,
         parent: i
      })]).then(([l, u]) => a(l, u)) : a(this._def.left._parseSync({
         data: i.data,
         path: i.path,
         parent: i
      }), this._def.right._parseSync({
         data: i.data,
         path: i.path,
         parent: i
      }))
   }
}
vo.create = (t, e, r) => new vo({
   left: t,
   right: e,
   typeName: Ce.ZodIntersection,
   ...De(r)
});
class Jn extends Re {
   _parse(e) {
      const {
         status: r,
         ctx: i
      } = this._processInputParams(e);
      if (i.parsedType !== le.array) return ie(i, {
         code: K.invalid_type,
         expected: le.array,
         received: i.parsedType
      }), je;
      if (i.data.length < this._def.items.length) return ie(i, {
         code: K.too_small,
         minimum: this._def.items.length,
         inclusive: !0,
         exact: !1,
         type: "array"
      }), je;
      !this._def.rest && i.data.length > this._def.items.length && (ie(i, {
         code: K.too_big,
         maximum: this._def.items.length,
         inclusive: !0,
         exact: !1,
         type: "array"
      }), r.dirty());
      const l = [...i.data].map((u, d) => {
         const p = this._def.items[d] || this._def.rest;
         return p ? p._parse(new Xn(i, u, i.path, d)) : null
      }).filter(u => !!u);
      return i.common.async ? Promise.all(l).then(u => Ft.mergeArray(r, u)) : Ft.mergeArray(r, l)
   }
   get items() {
      return this._def.items
   }
   rest(e) {
      return new Jn({
         ...this._def,
         rest: e
      })
   }
}
Jn.create = (t, e) => {
   if (!Array.isArray(t)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
   return new Jn({
      items: t,
      typeName: Ce.ZodTuple,
      rest: null,
      ...De(e)
   })
};
class xo extends Re {
   get keySchema() {
      return this._def.keyType
   }
   get valueSchema() {
      return this._def.valueType
   }
   _parse(e) {
      const {
         status: r,
         ctx: i
      } = this._processInputParams(e);
      if (i.parsedType !== le.object) return ie(i, {
         code: K.invalid_type,
         expected: le.object,
         received: i.parsedType
      }), je;
      const a = [],
         l = this._def.keyType,
         u = this._def.valueType;
      for (const d in i.data) a.push({
         key: l._parse(new Xn(i, d, i.path, d)),
         value: u._parse(new Xn(i, i.data[d], i.path, d)),
         alwaysSet: d in i.data
      });
      return i.common.async ? Ft.mergeObjectAsync(r, a) : Ft.mergeObjectSync(r, a)
   }
   get element() {
      return this._def.valueType
   }
   static create(e, r, i) {
      return r instanceof Re ? new xo({
         keyType: e,
         valueType: r,
         typeName: Ce.ZodRecord,
         ...De(i)
      }) : new xo({
         keyType: Mn.create(),
         valueType: e,
         typeName: Ce.ZodRecord,
         ...De(r)
      })
   }
}
class Mc extends Re {
   get keySchema() {
      return this._def.keyType
   }
   get valueSchema() {
      return this._def.valueType
   }
   _parse(e) {
      const {
         status: r,
         ctx: i
      } = this._processInputParams(e);
      if (i.parsedType !== le.map) return ie(i, {
         code: K.invalid_type,
         expected: le.map,
         received: i.parsedType
      }), je;
      const a = this._def.keyType,
         l = this._def.valueType,
         u = [...i.data.entries()].map(([d, p], m) => ({
            key: a._parse(new Xn(i, d, i.path, [m, "key"])),
            value: l._parse(new Xn(i, p, i.path, [m, "value"]))
         }));
      if (i.common.async) {
         const d = new Map;
         return Promise.resolve().then(async () => {
            for (const p of u) {
               const m = await p.key,
                  y = await p.value;
               if (m.status === "aborted" || y.status === "aborted") return je;
               (m.status === "dirty" || y.status === "dirty") && r.dirty(), d.set(m.value, y.value)
            }
            return {
               status: r.value,
               value: d
            }
         })
      } else {
         const d = new Map;
         for (const p of u) {
            const m = p.key,
               y = p.value;
            if (m.status === "aborted" || y.status === "aborted") return je;
            (m.status === "dirty" || y.status === "dirty") && r.dirty(), d.set(m.value, y.value)
         }
         return {
            status: r.value,
            value: d
         }
      }
   }
}
Mc.create = (t, e, r) => new Mc({
   valueType: e,
   keyType: t,
   typeName: Ce.ZodMap,
   ...De(r)
});
class zs extends Re {
   _parse(e) {
      const {
         status: r,
         ctx: i
      } = this._processInputParams(e);
      if (i.parsedType !== le.set) return ie(i, {
         code: K.invalid_type,
         expected: le.set,
         received: i.parsedType
      }), je;
      const a = this._def;
      a.minSize !== null && i.data.size < a.minSize.value && (ie(i, {
         code: K.too_small,
         minimum: a.minSize.value,
         type: "set",
         inclusive: !0,
         exact: !1,
         message: a.minSize.message
      }), r.dirty()), a.maxSize !== null && i.data.size > a.maxSize.value && (ie(i, {
         code: K.too_big,
         maximum: a.maxSize.value,
         type: "set",
         inclusive: !0,
         exact: !1,
         message: a.maxSize.message
      }), r.dirty());
      const l = this._def.valueType;

      function u(p) {
         const m = new Set;
         for (const y of p) {
            if (y.status === "aborted") return je;
            y.status === "dirty" && r.dirty(), m.add(y.value)
         }
         return {
            status: r.value,
            value: m
         }
      }
      const d = [...i.data.values()].map((p, m) => l._parse(new Xn(i, p, i.path, m)));
      return i.common.async ? Promise.all(d).then(p => u(p)) : u(d)
   }
   min(e, r) {
      return new zs({
         ...this._def,
         minSize: {
            value: e,
            message: pe.toString(r)
         }
      })
   }
   max(e, r) {
      return new zs({
         ...this._def,
         maxSize: {
            value: e,
            message: pe.toString(r)
         }
      })
   }
   size(e, r) {
      return this.min(e, r).max(e, r)
   }
   nonempty(e) {
      return this.min(1, e)
   }
}
zs.create = (t, e) => new zs({
   valueType: t,
   minSize: null,
   maxSize: null,
   typeName: Ce.ZodSet,
   ...De(e)
});
class Ti extends Re {
   constructor() {
      super(...arguments), this.validate = this.implement
   }
   _parse(e) {
      const {
         ctx: r
      } = this._processInputParams(e);
      if (r.parsedType !== le.function) return ie(r, {
         code: K.invalid_type,
         expected: le.function,
         received: r.parsedType
      }), je;

      function i(d, p) {
         return Nc({
            data: d,
            path: r.path,
            errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, _c(), Bi].filter(m => !!m),
            issueData: {
               code: K.invalid_arguments,
               argumentsError: p
            }
         })
      }

      function a(d, p) {
         return Nc({
            data: d,
            path: r.path,
            errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, _c(), Bi].filter(m => !!m),
            issueData: {
               code: K.invalid_return_type,
               returnTypeError: p
            }
         })
      }
      const l = {
            errorMap: r.common.contextualErrorMap
         },
         u = r.data;
      if (this._def.returns instanceof $i) {
         const d = this;
         return Zt(async function (...p) {
            const m = new ln([]),
               y = await d._def.args.parseAsync(p, l).catch(T => {
                  throw m.addIssue(i(p, T)), m
               }),
               v = await Reflect.apply(u, this, y);
            return await d._def.returns._def.type.parseAsync(v, l).catch(T => {
               throw m.addIssue(a(v, T)), m
            })
         })
      } else {
         const d = this;
         return Zt(function (...p) {
            const m = d._def.args.safeParse(p, l);
            if (!m.success) throw new ln([i(p, m.error)]);
            const y = Reflect.apply(u, this, m.data),
               v = d._def.returns.safeParse(y, l);
            if (!v.success) throw new ln([a(y, v.error)]);
            return v.data
         })
      }
   }
   parameters() {
      return this._def.args
   }
   returnType() {
      return this._def.returns
   }
   args(...e) {
      return new Ti({
         ...this._def,
         args: Jn.create(e).rest(Ls.create())
      })
   }
   returns(e) {
      return new Ti({
         ...this._def,
         returns: e
      })
   }
   implement(e) {
      return this.parse(e)
   }
   strictImplement(e) {
      return this.parse(e)
   }
   static create(e, r, i) {
      return new Ti({
         args: e || Jn.create([]).rest(Ls.create()),
         returns: r || Ls.create(),
         typeName: Ce.ZodFunction,
         ...De(i)
      })
   }
}
class wo extends Re {
   get schema() {
      return this._def.getter()
   }
   _parse(e) {
      const {
         ctx: r
      } = this._processInputParams(e);
      return this._def.getter()._parse({
         data: r.data,
         path: r.path,
         parent: r
      })
   }
}
wo.create = (t, e) => new wo({
   getter: t,
   typeName: Ce.ZodLazy,
   ...De(e)
});
class bo extends Re {
   _parse(e) {
      if (e.data !== this._def.value) {
         const r = this._getOrReturnCtx(e);
         return ie(r, {
            received: r.data,
            code: K.invalid_literal,
            expected: this._def.value
         }), je
      }
      return {
         status: "valid",
         value: e.data
      }
   }
   get value() {
      return this._def.value
   }
}
bo.create = (t, e) => new bo({
   value: t,
   typeName: Ce.ZodLiteral,
   ...De(e)
});

function Wb(t, e) {
   return new as({
      values: t,
      typeName: Ce.ZodEnum,
      ...De(e)
   })
}
class as extends Re {
   constructor() {
      super(...arguments), Za.set(this, void 0)
   }
   _parse(e) {
      if (typeof e.data != "string") {
         const r = this._getOrReturnCtx(e),
            i = this._def.values;
         return ie(r, {
            expected: Be.joinValues(i),
            received: r.parsedType,
            code: K.invalid_type
         }), je
      }
      if (Ac(this, Za) || Bb(this, Za, new Set(this._def.values)), !Ac(this, Za).has(e.data)) {
         const r = this._getOrReturnCtx(e),
            i = this._def.values;
         return ie(r, {
            received: r.data,
            code: K.invalid_enum_value,
            options: i
         }), je
      }
      return Zt(e.data)
   }
   get options() {
      return this._def.values
   }
   get enum() {
      const e = {};
      for (const r of this._def.values) e[r] = r;
      return e
   }
   get Values() {
      const e = {};
      for (const r of this._def.values) e[r] = r;
      return e
   }
   get Enum() {
      const e = {};
      for (const r of this._def.values) e[r] = r;
      return e
   }
   extract(e, r = this._def) {
      return as.create(e, {
         ...this._def,
         ...r
      })
   }
   exclude(e, r = this._def) {
      return as.create(this.options.filter(i => !e.includes(i)), {
         ...this._def,
         ...r
      })
   }
}
Za = new WeakMap;
as.create = Wb;
class ko extends Re {
   constructor() {
      super(...arguments), Wa.set(this, void 0)
   }
   _parse(e) {
      const r = Be.getValidEnumValues(this._def.values),
         i = this._getOrReturnCtx(e);
      if (i.parsedType !== le.string && i.parsedType !== le.number) {
         const a = Be.objectValues(r);
         return ie(i, {
            expected: Be.joinValues(a),
            received: i.parsedType,
            code: K.invalid_type
         }), je
      }
      if (Ac(this, Wa) || Bb(this, Wa, new Set(Be.getValidEnumValues(this._def.values))), !Ac(this, Wa).has(e.data)) {
         const a = Be.objectValues(r);
         return ie(i, {
            received: i.data,
            code: K.invalid_enum_value,
            options: a
         }), je
      }
      return Zt(e.data)
   }
   get enum() {
      return this._def.values
   }
}
Wa = new WeakMap;
ko.create = (t, e) => new ko({
   values: t,
   typeName: Ce.ZodNativeEnum,
   ...De(e)
});
class $i extends Re {
   unwrap() {
      return this._def.type
   }
   _parse(e) {
      const {
         ctx: r
      } = this._processInputParams(e);
      if (r.parsedType !== le.promise && r.common.async === !1) return ie(r, {
         code: K.invalid_type,
         expected: le.promise,
         received: r.parsedType
      }), je;
      const i = r.parsedType === le.promise ? r.data : Promise.resolve(r.data);
      return Zt(i.then(a => this._def.type.parseAsync(a, {
         path: r.path,
         errorMap: r.common.contextualErrorMap
      })))
   }
}
$i.create = (t, e) => new $i({
   type: t,
   typeName: Ce.ZodPromise,
   ...De(e)
});
class Ln extends Re {
   innerType() {
      return this._def.schema
   }
   sourceType() {
      return this._def.schema._def.typeName === Ce.ZodEffects ? this._def.schema.sourceType() : this._def.schema
   }
   _parse(e) {
      const {
         status: r,
         ctx: i
      } = this._processInputParams(e), a = this._def.effect || null, l = {
         addIssue: u => {
            ie(i, u), u.fatal ? r.abort() : r.dirty()
         },
         get path() {
            return i.path
         }
      };
      if (l.addIssue = l.addIssue.bind(l), a.type === "preprocess") {
         const u = a.transform(i.data, l);
         if (i.common.async) return Promise.resolve(u).then(async d => {
            if (r.value === "aborted") return je;
            const p = await this._def.schema._parseAsync({
               data: d,
               path: i.path,
               parent: i
            });
            return p.status === "aborted" ? je : p.status === "dirty" || r.value === "dirty" ? ki(p.value) : p
         }); {
            if (r.value === "aborted") return je;
            const d = this._def.schema._parseSync({
               data: u,
               path: i.path,
               parent: i
            });
            return d.status === "aborted" ? je : d.status === "dirty" || r.value === "dirty" ? ki(d.value) : d
         }
      }
      if (a.type === "refinement") {
         const u = d => {
            const p = a.refinement(d, l);
            if (i.common.async) return Promise.resolve(p);
            if (p instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return d
         };
         if (i.common.async === !1) {
            const d = this._def.schema._parseSync({
               data: i.data,
               path: i.path,
               parent: i
            });
            return d.status === "aborted" ? je : (d.status === "dirty" && r.dirty(), u(d.value), {
               status: r.value,
               value: d.value
            })
         } else return this._def.schema._parseAsync({
            data: i.data,
            path: i.path,
            parent: i
         }).then(d => d.status === "aborted" ? je : (d.status === "dirty" && r.dirty(), u(d.value).then(() => ({
            status: r.value,
            value: d.value
         }))))
      }
      if (a.type === "transform")
         if (i.common.async === !1) {
            const u = this._def.schema._parseSync({
               data: i.data,
               path: i.path,
               parent: i
            });
            if (!Fs(u)) return u;
            const d = a.transform(u.value, l);
            if (d instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
               status: r.value,
               value: d
            }
         } else return this._def.schema._parseAsync({
            data: i.data,
            path: i.path,
            parent: i
         }).then(u => Fs(u) ? Promise.resolve(a.transform(u.value, l)).then(d => ({
            status: r.value,
            value: d
         })) : u);
      Be.assertNever(a)
   }
}
Ln.create = (t, e, r) => new Ln({
   schema: t,
   typeName: Ce.ZodEffects,
   effect: e,
   ...De(r)
});
Ln.createWithPreprocess = (t, e, r) => new Ln({
   schema: e,
   effect: {
      type: "preprocess",
      transform: t
   },
   typeName: Ce.ZodEffects,
   ...De(r)
});
class Gn extends Re {
   _parse(e) {
      return this._getType(e) === le.undefined ? Zt(void 0) : this._def.innerType._parse(e)
   }
   unwrap() {
      return this._def.innerType
   }
}
Gn.create = (t, e) => new Gn({
   innerType: t,
   typeName: Ce.ZodOptional,
   ...De(e)
});
class os extends Re {
   _parse(e) {
      return this._getType(e) === le.null ? Zt(null) : this._def.innerType._parse(e)
   }
   unwrap() {
      return this._def.innerType
   }
}
os.create = (t, e) => new os({
   innerType: t,
   typeName: Ce.ZodNullable,
   ...De(e)
});
class So extends Re {
   _parse(e) {
      const {
         ctx: r
      } = this._processInputParams(e);
      let i = r.data;
      return r.parsedType === le.undefined && (i = this._def.defaultValue()), this._def.innerType._parse({
         data: i,
         path: r.path,
         parent: r
      })
   }
   removeDefault() {
      return this._def.innerType
   }
}
So.create = (t, e) => new So({
   innerType: t,
   typeName: Ce.ZodDefault,
   defaultValue: typeof e.default == "function" ? e.default : () => e.default,
   ...De(e)
});
class To extends Re {
   _parse(e) {
      const {
         ctx: r
      } = this._processInputParams(e), i = {
         ...r,
         common: {
            ...r.common,
            issues: []
         }
      }, a = this._def.innerType._parse({
         data: i.data,
         path: i.path,
         parent: {
            ...i
         }
      });
      return ho(a) ? a.then(l => ({
         status: "valid",
         value: l.status === "valid" ? l.value : this._def.catchValue({
            get error() {
               return new ln(i.common.issues)
            },
            input: i.data
         })
      })) : {
         status: "valid",
         value: a.status === "valid" ? a.value : this._def.catchValue({
            get error() {
               return new ln(i.common.issues)
            },
            input: i.data
         })
      }
   }
   removeCatch() {
      return this._def.innerType
   }
}
To.create = (t, e) => new To({
   innerType: t,
   typeName: Ce.ZodCatch,
   catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
   ...De(e)
});
class Rc extends Re {
   _parse(e) {
      if (this._getType(e) !== le.nan) {
         const i = this._getOrReturnCtx(e);
         return ie(i, {
            code: K.invalid_type,
            expected: le.nan,
            received: i.parsedType
         }), je
      }
      return {
         status: "valid",
         value: e.data
      }
   }
}
Rc.create = t => new Rc({
   typeName: Ce.ZodNaN,
   ...De(t)
});
const YN = Symbol("zod_brand");
class cp extends Re {
   _parse(e) {
      const {
         ctx: r
      } = this._processInputParams(e), i = r.data;
      return this._def.type._parse({
         data: i,
         path: r.path,
         parent: r
      })
   }
   unwrap() {
      return this._def.type
   }
}
class Oo extends Re {
   _parse(e) {
      const {
         status: r,
         ctx: i
      } = this._processInputParams(e);
      if (i.common.async) return (async () => {
         const l = await this._def.in._parseAsync({
            data: i.data,
            path: i.path,
            parent: i
         });
         return l.status === "aborted" ? je : l.status === "dirty" ? (r.dirty(), ki(l.value)) : this._def.out._parseAsync({
            data: l.value,
            path: i.path,
            parent: i
         })
      })(); {
         const a = this._def.in._parseSync({
            data: i.data,
            path: i.path,
            parent: i
         });
         return a.status === "aborted" ? je : a.status === "dirty" ? (r.dirty(), {
            status: "dirty",
            value: a.value
         }) : this._def.out._parseSync({
            data: a.value,
            path: i.path,
            parent: i
         })
      }
   }
   static create(e, r) {
      return new Oo({
         in: e,
         out: r,
         typeName: Ce.ZodPipeline
      })
   }
}
class Co extends Re {
   _parse(e) {
      const r = this._def.innerType._parse(e),
         i = a => (Fs(a) && (a.value = Object.freeze(a.value)), a);
      return ho(r) ? r.then(a => i(a)) : i(r)
   }
   unwrap() {
      return this._def.innerType
   }
}
Co.create = (t, e) => new Co({
   innerType: t,
   typeName: Ce.ZodReadonly,
   ...De(e)
});

function n0(t, e) {
   const r = typeof t == "function" ? t(e) : typeof t == "string" ? {
      message: t
   } : t;
   return typeof r == "string" ? {
      message: r
   } : r
}

function Hb(t, e = {}, r) {
   return t ? Ui.create().superRefine((i, a) => {
      var l, u;
      const d = t(i);
      if (d instanceof Promise) return d.then(p => {
         var m, y;
         if (!p) {
            const v = n0(e, i),
               w = (y = (m = v.fatal) !== null && m !== void 0 ? m : r) !== null && y !== void 0 ? y : !0;
            a.addIssue({
               code: "custom",
               ...v,
               fatal: w
            })
         }
      });
      if (!d) {
         const p = n0(e, i),
            m = (u = (l = p.fatal) !== null && l !== void 0 ? l : r) !== null && u !== void 0 ? u : !0;
         a.addIssue({
            code: "custom",
            ...p,
            fatal: m
         })
      }
   }) : Ui.create()
}
const XN = {
   object: st.lazycreate
};
var Ce;
(function (t) {
   t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly"
})(Ce || (Ce = {}));
const JN = (t, e = {
      message: `Input not instance of ${t.name}`
   }) => Hb(r => r instanceof t, e),
   Qb = Mn.create,
   qb = ss.create,
   eA = Rc.create,
   tA = is.create,
   Kb = po.create,
   nA = Vs.create,
   rA = Dc.create,
   sA = mo.create,
   iA = go.create,
   aA = Ui.create,
   oA = Ls.create,
   lA = kr.create,
   cA = Ic.create,
   uA = On.create,
   dA = st.create,
   fA = st.strictCreate,
   hA = yo.create,
   pA = Kc.create,
   mA = vo.create,
   gA = Jn.create,
   yA = xo.create,
   vA = Mc.create,
   xA = zs.create,
   wA = Ti.create,
   bA = wo.create,
   kA = bo.create,
   SA = as.create,
   TA = ko.create,
   CA = $i.create,
   r0 = Ln.create,
   jA = Gn.create,
   EA = os.create,
   PA = Ln.createWithPreprocess,
   _A = Oo.create,
   NA = () => Qb().optional(),
   AA = () => qb().optional(),
   DA = () => Kb().optional(),
   IA = {
      string: t => Mn.create({
         ...t,
         coerce: !0
      }),
      number: t => ss.create({
         ...t,
         coerce: !0
      }),
      boolean: t => po.create({
         ...t,
         coerce: !0
      }),
      bigint: t => is.create({
         ...t,
         coerce: !0
      }),
      date: t => Vs.create({
         ...t,
         coerce: !0
      })
   },
   MA = je;
var Fa = Object.freeze({
      __proto__: null,
      defaultErrorMap: Bi,
      setErrorMap: PN,
      getErrorMap: _c,
      makeIssue: Nc,
      EMPTY_PATH: _N,
      addIssueToContext: ie,
      ParseStatus: Ft,
      INVALID: je,
      DIRTY: ki,
      OK: Zt,
      isAborted: nh,
      isDirty: rh,
      isValid: Fs,
      isAsync: ho,
      get util() {
         return Be
      },
      get objectUtil() {
         return th
      },
      ZodParsedType: le,
      getParsedType: mr,
      ZodType: Re,
      datetimeRegex: Zb,
      ZodString: Mn,
      ZodNumber: ss,
      ZodBigInt: is,
      ZodBoolean: po,
      ZodDate: Vs,
      ZodSymbol: Dc,
      ZodUndefined: mo,
      ZodNull: go,
      ZodAny: Ui,
      ZodUnknown: Ls,
      ZodNever: kr,
      ZodVoid: Ic,
      ZodArray: On,
      ZodObject: st,
      ZodUnion: yo,
      ZodDiscriminatedUnion: Kc,
      ZodIntersection: vo,
      ZodTuple: Jn,
      ZodRecord: xo,
      ZodMap: Mc,
      ZodSet: zs,
      ZodFunction: Ti,
      ZodLazy: wo,
      ZodLiteral: bo,
      ZodEnum: as,
      ZodNativeEnum: ko,
      ZodPromise: $i,
      ZodEffects: Ln,
      ZodTransformer: Ln,
      ZodOptional: Gn,
      ZodNullable: os,
      ZodDefault: So,
      ZodCatch: To,
      ZodNaN: Rc,
      BRAND: YN,
      ZodBranded: cp,
      ZodPipeline: Oo,
      ZodReadonly: Co,
      custom: Hb,
      Schema: Re,
      ZodSchema: Re,
      late: XN,
      get ZodFirstPartyTypeKind() {
         return Ce
      },
      coerce: IA,
      any: aA,
      array: uA,
      bigint: tA,
      boolean: Kb,
      date: nA,
      discriminatedUnion: pA,
      effect: r0,
      enum: SA,
      function: wA,
      instanceof: JN,
      intersection: mA,
      lazy: bA,
      literal: kA,
      map: vA,
      nan: eA,
      nativeEnum: TA,
      never: lA,
      null: iA,
      nullable: EA,
      number: qb,
      object: dA,
      oboolean: DA,
      onumber: AA,
      optional: jA,
      ostring: NA,
      pipeline: _A,
      preprocess: PA,
      promise: CA,
      record: yA,
      set: xA,
      strictObject: fA,
      string: Qb,
      symbol: rA,
      transformer: r0,
      tuple: gA,
      undefined: sA,
      union: hA,
      unknown: oA,
      void: cA,
      NEVER: MA,
      ZodIssueCode: K,
      quotelessJson: EN,
      ZodError: ln
   }),
   RA = "Label",
   Gb = b.forwardRef((t, e) => f.jsx(Nt.label, {
      ...t,
      ref: e,
      onMouseDown: r => {
         var a;
         r.target.closest("button, input, select, textarea") || ((a = t.onMouseDown) == null || a.call(t, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault())
      }
   }));
Gb.displayName = RA;
var Yb = Gb;
const OA = bh("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
   Xb = b.forwardRef(({
      className: t,
      ...e
   }, r) => f.jsx(Yb, {
      ref: r,
      className: Ze(OA(), t),
      ...e
   }));
Xb.displayName = Yb.displayName;
const LA = aN,
   Jb = b.createContext({}),
   rc = ({
      ...t
   }) => f.jsx(Jb.Provider, {
      value: {
         name: t.name
      },
      children: f.jsx(uN, {
         ...t
      })
   }),
   Gc = () => {
      const t = b.useContext(Jb),
         e = b.useContext(e1),
         {
            getFieldState: r,
            formState: i
         } = qc(),
         a = r(t.name, i);
      if (!t) throw new Error("useFormField should be used within <FormField>");
      const {
         id: l
      } = e;
      return {
         id: l,
         name: t.name,
         formItemId: `${l}-form-item`,
         formDescriptionId: `${l}-form-item-description`,
         formMessageId: `${l}-form-item-message`,
         ...a
      }
   },
   e1 = b.createContext({}),
   Ha = b.forwardRef(({
      className: t,
      ...e
   }, r) => {
      const i = b.useId();
      return f.jsx(e1.Provider, {
         value: {
            id: i
         },
         children: f.jsx("div", {
            ref: r,
            className: Ze("space-y-2", t),
            ...e
         })
      })
   });
Ha.displayName = "FormItem";
const Qa = b.forwardRef(({
   className: t,
   ...e
}, r) => {
   const {
      error: i,
      formItemId: a
   } = Gc();
   return f.jsx(Xb, {
      ref: r,
      className: Ze(i && "text-destructive", t),
      htmlFor: a,
      ...e
   })
});
Qa.displayName = "FormLabel";
const qa = b.forwardRef(({
   ...t
}, e) => {
   const {
      error: r,
      formItemId: i,
      formDescriptionId: a,
      formMessageId: l
   } = Gc();
   return f.jsx(Oi, {
      ref: e,
      id: i,
      "aria-describedby": r ? `${a} ${l}` : `${a}`,
      "aria-invalid": !!r,
      ...t
   })
});
qa.displayName = "FormControl";
const FA = b.forwardRef(({
   className: t,
   ...e
}, r) => {
   const {
      formDescriptionId: i
   } = Gc();
   return f.jsx("p", {
      ref: r,
      id: i,
      className: Ze("text-sm text-muted-foreground", t),
      ...e
   })
});
FA.displayName = "FormDescription";
const Ka = b.forwardRef(({
   className: t,
   children: e,
   ...r
}, i) => {
   const {
      error: a,
      formMessageId: l
   } = Gc(), u = a ? String(a == null ? void 0 : a.message) : e;
   return u ? f.jsx("p", {
      ref: i,
      id: l,
      className: Ze("text-sm font-medium text-destructive", t),
      ...r,
      children: u
   }) : null
});
Ka.displayName = "FormMessage";
const fc = b.forwardRef(({
   className: t,
   type: e,
   ...r
}, i) => f.jsx("input", {
   type: e,
   className: Ze("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", t),
   ref: i,
   ...r
}));
fc.displayName = "Input";
const t1 = b.forwardRef(({
   className: t,
   ...e
}, r) => f.jsx("textarea", {
   className: Ze("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", t),
   ref: r,
   ...e
}));
t1.displayName = "Textarea";
const VA = bh("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
      variants: {
         variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
         },
         size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
         }
      },
      defaultVariants: {
         variant: "default",
         size: "default"
      }
   }),
   Sr = b.forwardRef(({
      className: t,
      variant: e,
      size: r,
      asChild: i = !1,
      ...a
   }, l) => {
      const u = i ? Oi : "button";
      return f.jsx(u, {
         className: Ze(VA({
            variant: e,
            size: r,
            className: t
         })),
         ref: l,
         ...a
      })
   });
Sr.displayName = "Button";
var Lo = class {
      constructor() {
         this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
      }
      subscribe(t) {
         return this.listeners.add(t), this.onSubscribe(), () => {
            this.listeners.delete(t), this.onUnsubscribe()
         }
      }
      hasListeners() {
         return this.listeners.size > 0
      }
      onSubscribe() {}
      onUnsubscribe() {}
   },
   Yc = typeof window > "u" || "Deno" in globalThis;

function Nn() {}

function zA(t, e) {
   return typeof t == "function" ? t(e) : t
}

function BA(t) {
   return typeof t == "number" && t >= 0 && t !== 1 / 0
}

function UA(t, e) {
   return Math.max(t + (e || 0) - Date.now(), 0)
}

function s0(t, e) {
   return typeof t == "function" ? t(e) : t
}

function $A(t, e) {
   return typeof t == "function" ? t(e) : t
}

function i0(t, e) {
   const {
      type: r = "all",
      exact: i,
      fetchStatus: a,
      predicate: l,
      queryKey: u,
      stale: d
   } = t;
   if (u) {
      if (i) {
         if (e.queryHash !== up(u, e.options)) return !1
      } else if (!jo(e.queryKey, u)) return !1
   }
   if (r !== "all") {
      const p = e.isActive();
      if (r === "active" && !p || r === "inactive" && p) return !1
   }
   return !(typeof d == "boolean" && e.isStale() !== d || a && a !== e.state.fetchStatus || l && !l(e))
}

function a0(t, e) {
   const {
      exact: r,
      status: i,
      predicate: a,
      mutationKey: l
   } = t;
   if (l) {
      if (!e.options.mutationKey) return !1;
      if (r) {
         if (Bs(e.options.mutationKey) !== Bs(l)) return !1
      } else if (!jo(e.options.mutationKey, l)) return !1
   }
   return !(i && e.state.status !== i || a && !a(e))
}

function up(t, e) {
   return ((e == null ? void 0 : e.queryKeyHashFn) || Bs)(t)
}

function Bs(t) {
   return JSON.stringify(t, (e, r) => ih(r) ? Object.keys(r).sort().reduce((i, a) => (i[a] = r[a], i), {}) : r)
}

function jo(t, e) {
   return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some(r => !jo(t[r], e[r])) : !1
}

function n1(t, e) {
   if (t === e) return t;
   const r = o0(t) && o0(e);
   if (r || ih(t) && ih(e)) {
      const i = r ? t : Object.keys(t),
         a = i.length,
         l = r ? e : Object.keys(e),
         u = l.length,
         d = r ? [] : {};
      let p = 0;
      for (let m = 0; m < u; m++) {
         const y = r ? m : l[m];
         (!r && i.includes(y) || r) && t[y] === void 0 && e[y] === void 0 ? (d[y] = void 0, p++) : (d[y] = n1(t[y], e[y]), d[y] === t[y] && t[y] !== void 0 && p++)
      }
      return a === u && p === a ? t : d
   }
   return e
}

function ZA(t, e) {
   if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
   for (const r in t)
      if (t[r] !== e[r]) return !1;
   return !0
}

function o0(t) {
   return Array.isArray(t) && t.length === Object.keys(t).length
}

function ih(t) {
   if (!l0(t)) return !1;
   const e = t.constructor;
   if (e === void 0) return !0;
   const r = e.prototype;
   return !(!l0(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}

function l0(t) {
   return Object.prototype.toString.call(t) === "[object Object]"
}

function WA(t) {
   return new Promise(e => {
      setTimeout(e, t)
   })
}

function HA(t, e, r) {
   return typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? n1(t, e) : e
}

function QA(t, e, r = 0) {
   const i = [...t, e];
   return r && i.length > r ? i.slice(1) : i
}

function qA(t, e, r = 0) {
   const i = [e, ...t];
   return r && i.length > r ? i.slice(0, -1) : i
}
var dp = Symbol();

function r1(t, e) {
   return !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === dp ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}
var Ns, qr, Ei, C0, KA = (C0 = class extends Lo {
      constructor() {
         super();
         Fe(this, Ns);
         Fe(this, qr);
         Fe(this, Ei);
         Pe(this, Ei, e => {
            if (!Yc && window.addEventListener) {
               const r = () => e();
               return window.addEventListener("visibilitychange", r, !1), () => {
                  window.removeEventListener("visibilitychange", r)
               }
            }
         })
      }
      onSubscribe() {
         L(this, qr) || this.setEventListener(L(this, Ei))
      }
      onUnsubscribe() {
         var e;
         this.hasListeners() || ((e = L(this, qr)) == null || e.call(this), Pe(this, qr, void 0))
      }
      setEventListener(e) {
         var r;
         Pe(this, Ei, e), (r = L(this, qr)) == null || r.call(this), Pe(this, qr, e(i => {
            typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
         }))
      }
      setFocused(e) {
         L(this, Ns) !== e && (Pe(this, Ns, e), this.onFocus())
      }
      onFocus() {
         const e = this.isFocused();
         this.listeners.forEach(r => {
            r(e)
         })
      }
      isFocused() {
         var e;
         return typeof L(this, Ns) == "boolean" ? L(this, Ns) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
      }
   }, Ns = new WeakMap, qr = new WeakMap, Ei = new WeakMap, C0),
   s1 = new KA,
   Pi, Kr, _i, j0, GA = (j0 = class extends Lo {
      constructor() {
         super();
         Fe(this, Pi, !0);
         Fe(this, Kr);
         Fe(this, _i);
         Pe(this, _i, e => {
            if (!Yc && window.addEventListener) {
               const r = () => e(!0),
                  i = () => e(!1);
               return window.addEventListener("online", r, !1), window.addEventListener("offline", i, !1), () => {
                  window.removeEventListener("online", r), window.removeEventListener("offline", i)
               }
            }
         })
      }
      onSubscribe() {
         L(this, Kr) || this.setEventListener(L(this, _i))
      }
      onUnsubscribe() {
         var e;
         this.hasListeners() || ((e = L(this, Kr)) == null || e.call(this), Pe(this, Kr, void 0))
      }
      setEventListener(e) {
         var r;
         Pe(this, _i, e), (r = L(this, Kr)) == null || r.call(this), Pe(this, Kr, e(this.setOnline.bind(this)))
      }
      setOnline(e) {
         L(this, Pi) !== e && (Pe(this, Pi, e), this.listeners.forEach(i => {
            i(e)
         }))
      }
      isOnline() {
         return L(this, Pi)
      }
   }, Pi = new WeakMap, Kr = new WeakMap, _i = new WeakMap, j0),
   Oc = new GA;

function YA() {
   let t, e;
   const r = new Promise((a, l) => {
      t = a, e = l
   });
   r.status = "pending", r.catch(() => {});

   function i(a) {
      Object.assign(r, a), delete r.resolve, delete r.reject
   }
   return r.resolve = a => {
      i({
         status: "fulfilled",
         value: a
      }), t(a)
   }, r.reject = a => {
      i({
         status: "rejected",
         reason: a
      }), e(a)
   }, r
}

function XA(t) {
   return Math.min(1e3 * 2 ** t, 3e4)
}

function i1(t) {
   return (t ?? "online") === "online" ? Oc.isOnline() : !0
}
var a1 = class extends Error {
   constructor(t) {
      super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent
   }
};

function bf(t) {
   return t instanceof a1
}

function o1(t) {
   let e = !1,
      r = 0,
      i = !1,
      a;
   const l = YA(),
      u = S => {
         var C;
         i || (w(new a1(S)), (C = t.abort) == null || C.call(t))
      },
      d = () => {
         e = !0
      },
      p = () => {
         e = !1
      },
      m = () => s1.isFocused() && (t.networkMode === "always" || Oc.isOnline()) && t.canRun(),
      y = () => i1(t.networkMode) && t.canRun(),
      v = S => {
         var C;
         i || (i = !0, (C = t.onSuccess) == null || C.call(t, S), a == null || a(), l.resolve(S))
      },
      w = S => {
         var C;
         i || (i = !0, (C = t.onError) == null || C.call(t, S), a == null || a(), l.reject(S))
      },
      T = () => new Promise(S => {
         var C;
         a = _ => {
            (i || m()) && S(_)
         }, (C = t.onPause) == null || C.call(t)
      }).then(() => {
         var S;
         a = void 0, i || (S = t.onContinue) == null || S.call(t)
      }),
      P = () => {
         if (i) return;
         let S;
         const C = r === 0 ? t.initialPromise : void 0;
         try {
            S = C ?? t.fn()
         } catch (_) {
            S = Promise.reject(_)
         }
         Promise.resolve(S).then(v).catch(_ => {
            var U;
            if (i) return;
            const D = t.retry ?? (Yc ? 0 : 3),
               F = t.retryDelay ?? XA,
               $ = typeof F == "function" ? F(r, _) : F,
               z = D === !0 || typeof D == "number" && r < D || typeof D == "function" && D(r, _);
            if (e || !z) {
               w(_);
               return
            }
            r++, (U = t.onFail) == null || U.call(t, r, _), WA($).then(() => m() ? void 0 : T()).then(() => {
               e ? w(_) : P()
            })
         })
      };
   return {
      promise: l,
      cancel: u,
      continue: () => (a == null || a(), l),
      cancelRetry: d,
      continueRetry: p,
      canStart: y,
      start: () => (y() ? P() : T().then(P), l)
   }
}

function JA() {
   let t = [],
      e = 0,
      r = d => {
         d()
      },
      i = d => {
         d()
      },
      a = d => setTimeout(d, 0);
   const l = d => {
         e ? t.push(d) : a(() => {
            r(d)
         })
      },
      u = () => {
         const d = t;
         t = [], d.length && a(() => {
            i(() => {
               d.forEach(p => {
                  r(p)
               })
            })
         })
      };
   return {
      batch: d => {
         let p;
         e++;
         try {
            p = d()
         } finally {
            e--, e || u()
         }
         return p
      },
      batchCalls: d => (...p) => {
         l(() => {
            d(...p)
         })
      },
      schedule: l,
      setNotifyFunction: d => {
         r = d
      },
      setBatchNotifyFunction: d => {
         i = d
      },
      setScheduler: d => {
         a = d
      }
   }
}
var _t = JA(),
   As, E0, l1 = (E0 = class {
      constructor() {
         Fe(this, As)
      }
      destroy() {
         this.clearGcTimeout()
      }
      scheduleGc() {
         this.clearGcTimeout(), BA(this.gcTime) && Pe(this, As, setTimeout(() => {
            this.optionalRemove()
         }, this.gcTime))
      }
      updateGcTime(t) {
         this.gcTime = Math.max(this.gcTime || 0, t ?? (Yc ? 1 / 0 : 5 * 60 * 1e3))
      }
      clearGcTimeout() {
         L(this, As) && (clearTimeout(L(this, As)), Pe(this, As, void 0))
      }
   }, As = new WeakMap, E0),
   Ni, Ai, xn, Ds, Rt, Eo, Is, An, pr, P0, e4 = (P0 = class extends l1 {
      constructor(e) {
         super();
         Fe(this, An);
         Fe(this, Ni);
         Fe(this, Ai);
         Fe(this, xn);
         Fe(this, Ds);
         Fe(this, Rt);
         Fe(this, Eo);
         Fe(this, Is);
         Pe(this, Is, !1), Pe(this, Eo, e.defaultOptions), this.setOptions(e.options), this.observers = [], Pe(this, Ds, e.client), Pe(this, xn, L(this, Ds).getQueryCache()), this.queryKey = e.queryKey, this.queryHash = e.queryHash, Pe(this, Ni, n4(this.options)), this.state = e.state ?? L(this, Ni), this.scheduleGc()
      }
      get meta() {
         return this.options.meta
      }
      get promise() {
         var e;
         return (e = L(this, Rt)) == null ? void 0 : e.promise
      }
      setOptions(e) {
         this.options = {
            ...L(this, Eo),
            ...e
         }, this.updateGcTime(this.options.gcTime)
      }
      optionalRemove() {
         !this.observers.length && this.state.fetchStatus === "idle" && L(this, xn).remove(this)
      }
      setData(e, r) {
         const i = HA(this.state.data, e, this.options);
         return pt(this, An, pr).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual
         }), i
      }
      setState(e, r) {
         pt(this, An, pr).call(this, {
            type: "setState",
            state: e,
            setStateOptions: r
         })
      }
      cancel(e) {
         var i, a;
         const r = (i = L(this, Rt)) == null ? void 0 : i.promise;
         return (a = L(this, Rt)) == null || a.cancel(e), r ? r.then(Nn).catch(Nn) : Promise.resolve()
      }
      destroy() {
         super.destroy(), this.cancel({
            silent: !0
         })
      }
      reset() {
         this.destroy(), this.setState(L(this, Ni))
      }
      isActive() {
         return this.observers.some(e => $A(e.options.enabled, this) !== !1)
      }
      isDisabled() {
         return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === dp || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
      }
      isStale() {
         return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0
      }
      isStaleByTime(e = 0) {
         return this.state.isInvalidated || this.state.data === void 0 || !UA(this.state.dataUpdatedAt, e)
      }
      onFocus() {
         var r;
         const e = this.observers.find(i => i.shouldFetchOnWindowFocus());
         e == null || e.refetch({
            cancelRefetch: !1
         }), (r = L(this, Rt)) == null || r.continue()
      }
      onOnline() {
         var r;
         const e = this.observers.find(i => i.shouldFetchOnReconnect());
         e == null || e.refetch({
            cancelRefetch: !1
         }), (r = L(this, Rt)) == null || r.continue()
      }
      addObserver(e) {
         this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), L(this, xn).notify({
            type: "observerAdded",
            query: this,
            observer: e
         }))
      }
      removeObserver(e) {
         this.observers.includes(e) && (this.observers = this.observers.filter(r => r !== e), this.observers.length || (L(this, Rt) && (L(this, Is) ? L(this, Rt).cancel({
            revert: !0
         }) : L(this, Rt).cancelRetry()), this.scheduleGc()), L(this, xn).notify({
            type: "observerRemoved",
            query: this,
            observer: e
         }))
      }
      getObserversCount() {
         return this.observers.length
      }
      invalidate() {
         this.state.isInvalidated || pt(this, An, pr).call(this, {
            type: "invalidate"
         })
      }
      fetch(e, r) {
         var p, m, y;
         if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (r != null && r.cancelRefetch)) this.cancel({
               silent: !0
            });
            else if (L(this, Rt)) return L(this, Rt).continueRetry(), L(this, Rt).promise
         }
         if (e && this.setOptions(e), !this.options.queryFn) {
            const v = this.observers.find(w => w.options.queryFn);
            v && this.setOptions(v.options)
         }
         const i = new AbortController,
            a = v => {
               Object.defineProperty(v, "signal", {
                  enumerable: !0,
                  get: () => (Pe(this, Is, !0), i.signal)
               })
            },
            l = () => {
               const v = r1(this.options, r),
                  w = {
                     client: L(this, Ds),
                     queryKey: this.queryKey,
                     meta: this.meta
                  };
               return a(w), Pe(this, Is, !1), this.options.persister ? this.options.persister(v, w, this) : v(w)
            },
            u = {
               fetchOptions: r,
               options: this.options,
               queryKey: this.queryKey,
               client: L(this, Ds),
               state: this.state,
               fetchFn: l
            };
         a(u), (p = this.options.behavior) == null || p.onFetch(u, this), Pe(this, Ai, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((m = u.fetchOptions) == null ? void 0 : m.meta)) && pt(this, An, pr).call(this, {
            type: "fetch",
            meta: (y = u.fetchOptions) == null ? void 0 : y.meta
         });
         const d = v => {
            var w, T, P, S;
            bf(v) && v.silent || pt(this, An, pr).call(this, {
               type: "error",
               error: v
            }), bf(v) || ((T = (w = L(this, xn).config).onError) == null || T.call(w, v, this), (S = (P = L(this, xn).config).onSettled) == null || S.call(P, this.state.data, v, this)), this.scheduleGc()
         };
         return Pe(this, Rt, o1({
            initialPromise: r == null ? void 0 : r.initialPromise,
            fn: u.fetchFn,
            abort: i.abort.bind(i),
            onSuccess: v => {
               var w, T, P, S;
               if (v === void 0) {
                  d(new Error(`${this.queryHash} data is undefined`));
                  return
               }
               try {
                  this.setData(v)
               } catch (C) {
                  d(C);
                  return
               }(T = (w = L(this, xn).config).onSuccess) == null || T.call(w, v, this), (S = (P = L(this, xn).config).onSettled) == null || S.call(P, v, this.state.error, this), this.scheduleGc()
            },
            onError: d,
            onFail: (v, w) => {
               pt(this, An, pr).call(this, {
                  type: "failed",
                  failureCount: v,
                  error: w
               })
            },
            onPause: () => {
               pt(this, An, pr).call(this, {
                  type: "pause"
               })
            },
            onContinue: () => {
               pt(this, An, pr).call(this, {
                  type: "continue"
               })
            },
            retry: u.options.retry,
            retryDelay: u.options.retryDelay,
            networkMode: u.options.networkMode,
            canRun: () => !0
         })), L(this, Rt).start()
      }
   }, Ni = new WeakMap, Ai = new WeakMap, xn = new WeakMap, Ds = new WeakMap, Rt = new WeakMap, Eo = new WeakMap, Is = new WeakMap, An = new WeakSet, pr = function (e) {
      const r = i => {
         switch (e.type) {
            case "failed":
               return {
                  ...i, fetchFailureCount: e.failureCount, fetchFailureReason: e.error
               };
            case "pause":
               return {
                  ...i, fetchStatus: "paused"
               };
            case "continue":
               return {
                  ...i, fetchStatus: "fetching"
               };
            case "fetch":
               return {
                  ...i, ...t4(i.data, this.options), fetchMeta: e.meta ?? null
               };
            case "success":
               return {
                  ...i, data: e.data, dataUpdateCount: i.dataUpdateCount + 1, dataUpdatedAt: e.dataUpdatedAt ?? Date.now(), error: null, isInvalidated: !1, status: "success", ...!e.manual && {
                     fetchStatus: "idle",
                     fetchFailureCount: 0,
                     fetchFailureReason: null
                  }
               };
            case "error":
               const a = e.error;
               return bf(a) && a.revert && L(this, Ai) ? {
                  ...L(this, Ai),
                  fetchStatus: "idle"
               } : {
                  ...i,
                  error: a,
                  errorUpdateCount: i.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: i.fetchFailureCount + 1,
                  fetchFailureReason: a,
                  fetchStatus: "idle",
                  status: "error"
               };
            case "invalidate":
               return {
                  ...i, isInvalidated: !0
               };
            case "setState":
               return {
                  ...i, ...e.state
               }
         }
      };
      this.state = r(this.state), _t.batch(() => {
         this.observers.forEach(i => {
            i.onQueryUpdate()
         }), L(this, xn).notify({
            query: this,
            type: "updated",
            action: e
         })
      })
   }, P0);

function t4(t, e) {
   return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: i1(e.networkMode) ? "fetching" : "paused",
      ...t === void 0 && {
         error: null,
         status: "pending"
      }
   }
}

function n4(t) {
   const e = typeof t.initialData == "function" ? t.initialData() : t.initialData,
      r = e !== void 0,
      i = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
   return {
      data: e,
      dataUpdateCount: 0,
      dataUpdatedAt: r ? i ?? Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: !1,
      status: r ? "success" : "pending",
      fetchStatus: "idle"
   }
}
var $n, _0, r4 = (_0 = class extends Lo {
      constructor(e = {}) {
         super();
         Fe(this, $n);
         this.config = e, Pe(this, $n, new Map)
      }
      build(e, r, i) {
         const a = r.queryKey,
            l = r.queryHash ?? up(a, r);
         let u = this.get(l);
         return u || (u = new e4({
            client: e,
            queryKey: a,
            queryHash: l,
            options: e.defaultQueryOptions(r),
            state: i,
            defaultOptions: e.getQueryDefaults(a)
         }), this.add(u)), u
      }
      add(e) {
         L(this, $n).has(e.queryHash) || (L(this, $n).set(e.queryHash, e), this.notify({
            type: "added",
            query: e
         }))
      }
      remove(e) {
         const r = L(this, $n).get(e.queryHash);
         r && (e.destroy(), r === e && L(this, $n).delete(e.queryHash), this.notify({
            type: "removed",
            query: e
         }))
      }
      clear() {
         _t.batch(() => {
            this.getAll().forEach(e => {
               this.remove(e)
            })
         })
      }
      get(e) {
         return L(this, $n).get(e)
      }
      getAll() {
         return [...L(this, $n).values()]
      }
      find(e) {
         const r = {
            exact: !0,
            ...e
         };
         return this.getAll().find(i => i0(r, i))
      }
      findAll(e = {}) {
         const r = this.getAll();
         return Object.keys(e).length > 0 ? r.filter(i => i0(e, i)) : r
      }
      notify(e) {
         _t.batch(() => {
            this.listeners.forEach(r => {
               r(e)
            })
         })
      }
      onFocus() {
         _t.batch(() => {
            this.getAll().forEach(e => {
               e.onFocus()
            })
         })
      }
      onOnline() {
         _t.batch(() => {
            this.getAll().forEach(e => {
               e.onOnline()
            })
         })
      }
   }, $n = new WeakMap, _0),
   Zn, Ut, Ms, Wn, Hr, N0, s4 = (N0 = class extends l1 {
      constructor(e) {
         super();
         Fe(this, Wn);
         Fe(this, Zn);
         Fe(this, Ut);
         Fe(this, Ms);
         this.mutationId = e.mutationId, Pe(this, Ut, e.mutationCache), Pe(this, Zn, []), this.state = e.state || c1(), this.setOptions(e.options), this.scheduleGc()
      }
      setOptions(e) {
         this.options = e, this.updateGcTime(this.options.gcTime)
      }
      get meta() {
         return this.options.meta
      }
      addObserver(e) {
         L(this, Zn).includes(e) || (L(this, Zn).push(e), this.clearGcTimeout(), L(this, Ut).notify({
            type: "observerAdded",
            mutation: this,
            observer: e
         }))
      }
      removeObserver(e) {
         Pe(this, Zn, L(this, Zn).filter(r => r !== e)), this.scheduleGc(), L(this, Ut).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
         })
      }
      optionalRemove() {
         L(this, Zn).length || (this.state.status === "pending" ? this.scheduleGc() : L(this, Ut).remove(this))
      }
      continue () {
         var e;
         return ((e = L(this, Ms)) == null ? void 0 : e.continue()) ?? this.execute(this.state.variables)
      }
      async execute(e) {
         var a, l, u, d, p, m, y, v, w, T, P, S, C, _, D, F, $, z, U, Y;
         Pe(this, Ms, o1({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
            onFail: (B, me) => {
               pt(this, Wn, Hr).call(this, {
                  type: "failed",
                  failureCount: B,
                  error: me
               })
            },
            onPause: () => {
               pt(this, Wn, Hr).call(this, {
                  type: "pause"
               })
            },
            onContinue: () => {
               pt(this, Wn, Hr).call(this, {
                  type: "continue"
               })
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => L(this, Ut).canRun(this)
         }));
         const r = this.state.status === "pending",
            i = !L(this, Ms).canStart();
         try {
            if (!r) {
               pt(this, Wn, Hr).call(this, {
                  type: "pending",
                  variables: e,
                  isPaused: i
               }), await ((l = (a = L(this, Ut).config).onMutate) == null ? void 0 : l.call(a, e, this));
               const me = await ((d = (u = this.options).onMutate) == null ? void 0 : d.call(u, e));
               me !== this.state.context && pt(this, Wn, Hr).call(this, {
                  type: "pending",
                  context: me,
                  variables: e,
                  isPaused: i
               })
            }
            const B = await L(this, Ms).start();
            return await ((m = (p = L(this, Ut).config).onSuccess) == null ? void 0 : m.call(p, B, e, this.state.context, this)), await ((v = (y = this.options).onSuccess) == null ? void 0 : v.call(y, B, e, this.state.context)), await ((T = (w = L(this, Ut).config).onSettled) == null ? void 0 : T.call(w, B, null, this.state.variables, this.state.context, this)), await ((S = (P = this.options).onSettled) == null ? void 0 : S.call(P, B, null, e, this.state.context)), pt(this, Wn, Hr).call(this, {
               type: "success",
               data: B
            }), B
         } catch (B) {
            try {
               throw await ((_ = (C = L(this, Ut).config).onError) == null ? void 0 : _.call(C, B, e, this.state.context, this)), await ((F = (D = this.options).onError) == null ? void 0 : F.call(D, B, e, this.state.context)), await ((z = ($ = L(this, Ut).config).onSettled) == null ? void 0 : z.call($, void 0, B, this.state.variables, this.state.context, this)), await ((Y = (U = this.options).onSettled) == null ? void 0 : Y.call(U, void 0, B, e, this.state.context)), B
            } finally {
               pt(this, Wn, Hr).call(this, {
                  type: "error",
                  error: B
               })
            }
         } finally {
            L(this, Ut).runNext(this)
         }
      }
   }, Zn = new WeakMap, Ut = new WeakMap, Ms = new WeakMap, Wn = new WeakSet, Hr = function (e) {
      const r = i => {
         switch (e.type) {
            case "failed":
               return {
                  ...i, failureCount: e.failureCount, failureReason: e.error
               };
            case "pause":
               return {
                  ...i, isPaused: !0
               };
            case "continue":
               return {
                  ...i, isPaused: !1
               };
            case "pending":
               return {
                  ...i, context: e.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: e.isPaused, status: "pending", variables: e.variables, submittedAt: Date.now()
               };
            case "success":
               return {
                  ...i, data: e.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
               };
            case "error":
               return {
                  ...i, data: void 0, error: e.error, failureCount: i.failureCount + 1, failureReason: e.error, isPaused: !1, status: "error"
               }
         }
      };
      this.state = r(this.state), _t.batch(() => {
         L(this, Zn).forEach(i => {
            i.onMutationUpdate(e)
         }), L(this, Ut).notify({
            mutation: this,
            type: "updated",
            action: e
         })
      })
   }, N0);

function c1() {
   return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: !1,
      status: "idle",
      variables: void 0,
      submittedAt: 0
   }
}
var gr, Dn, Po, A0, i4 = (A0 = class extends Lo {
   constructor(e = {}) {
      super();
      Fe(this, gr);
      Fe(this, Dn);
      Fe(this, Po);
      this.config = e, Pe(this, gr, new Set), Pe(this, Dn, new Map), Pe(this, Po, 0)
   }
   build(e, r, i) {
      const a = new s4({
         mutationCache: this,
         mutationId: ++Gl(this, Po)._,
         options: e.defaultMutationOptions(r),
         state: i
      });
      return this.add(a), a
   }
   add(e) {
      L(this, gr).add(e);
      const r = sc(e);
      if (typeof r == "string") {
         const i = L(this, Dn).get(r);
         i ? i.push(e) : L(this, Dn).set(r, [e])
      }
      this.notify({
         type: "added",
         mutation: e
      })
   }
   remove(e) {
      if (L(this, gr).delete(e)) {
         const r = sc(e);
         if (typeof r == "string") {
            const i = L(this, Dn).get(r);
            if (i)
               if (i.length > 1) {
                  const a = i.indexOf(e);
                  a !== -1 && i.splice(a, 1)
               } else i[0] === e && L(this, Dn).delete(r)
         }
      }
      this.notify({
         type: "removed",
         mutation: e
      })
   }
   canRun(e) {
      const r = sc(e);
      if (typeof r == "string") {
         const i = L(this, Dn).get(r),
            a = i == null ? void 0 : i.find(l => l.state.status === "pending");
         return !a || a === e
      } else return !0
   }
   runNext(e) {
      var i;
      const r = sc(e);
      if (typeof r == "string") {
         const a = (i = L(this, Dn).get(r)) == null ? void 0 : i.find(l => l !== e && l.state.isPaused);
         return (a == null ? void 0 : a.continue()) ?? Promise.resolve()
      } else return Promise.resolve()
   }
   clear() {
      _t.batch(() => {
         L(this, gr).forEach(e => {
            this.notify({
               type: "removed",
               mutation: e
            })
         }), L(this, gr).clear(), L(this, Dn).clear()
      })
   }
   getAll() {
      return Array.from(L(this, gr))
   }
   find(e) {
      const r = {
         exact: !0,
         ...e
      };
      return this.getAll().find(i => a0(r, i))
   }
   findAll(e = {}) {
      return this.getAll().filter(r => a0(e, r))
   }
   notify(e) {
      _t.batch(() => {
         this.listeners.forEach(r => {
            r(e)
         })
      })
   }
   resumePausedMutations() {
      const e = this.getAll().filter(r => r.state.isPaused);
      return _t.batch(() => Promise.all(e.map(r => r.continue().catch(Nn))))
   }
}, gr = new WeakMap, Dn = new WeakMap, Po = new WeakMap, A0);

function sc(t) {
   var e;
   return (e = t.options.scope) == null ? void 0 : e.id
}

function c0(t) {
   return {
      onFetch: (e, r) => {
         var y, v, w, T, P;
         const i = e.options,
            a = (w = (v = (y = e.fetchOptions) == null ? void 0 : y.meta) == null ? void 0 : v.fetchMore) == null ? void 0 : w.direction,
            l = ((T = e.state.data) == null ? void 0 : T.pages) || [],
            u = ((P = e.state.data) == null ? void 0 : P.pageParams) || [];
         let d = {
               pages: [],
               pageParams: []
            },
            p = 0;
         const m = async () => {
            let S = !1;
            const C = F => {
                  Object.defineProperty(F, "signal", {
                     enumerable: !0,
                     get: () => (e.signal.aborted ? S = !0 : e.signal.addEventListener("abort", () => {
                        S = !0
                     }), e.signal)
                  })
               },
               _ = r1(e.options, e.fetchOptions),
               D = async (F, $, z) => {
                  if (S) return Promise.reject();
                  if ($ == null && F.pages.length) return Promise.resolve(F);
                  const U = {
                     client: e.client,
                     queryKey: e.queryKey,
                     pageParam: $,
                     direction: z ? "backward" : "forward",
                     meta: e.options.meta
                  };
                  C(U);
                  const Y = await _(U),
                     {
                        maxPages: B
                     } = e.options,
                     me = z ? qA : QA;
                  return {
                     pages: me(F.pages, Y, B),
                     pageParams: me(F.pageParams, $, B)
                  }
               };
            if (a && l.length) {
               const F = a === "backward",
                  $ = F ? a4 : u0,
                  z = {
                     pages: l,
                     pageParams: u
                  },
                  U = $(i, z);
               d = await D(z, U, F)
            } else {
               const F = t ?? l.length;
               do {
                  const $ = p === 0 ? u[0] ?? i.initialPageParam : u0(i, d);
                  if (p > 0 && $ == null) break;
                  d = await D(d, $), p++
               } while (p < F)
            }
            return d
         };
         e.options.persister ? e.fetchFn = () => {
            var S, C;
            return (C = (S = e.options).persister) == null ? void 0 : C.call(S, m, {
               client: e.client,
               queryKey: e.queryKey,
               meta: e.options.meta,
               signal: e.signal
            }, r)
         } : e.fetchFn = m
      }
   }
}

function u0(t, {
   pages: e,
   pageParams: r
}) {
   const i = e.length - 1;
   return e.length > 0 ? t.getNextPageParam(e[i], e, r[i], r) : void 0
}

function a4(t, {
   pages: e,
   pageParams: r
}) {
   var i;
   return e.length > 0 ? (i = t.getPreviousPageParam) == null ? void 0 : i.call(t, e[0], e, r[0], r) : void 0
}
var lt, Gr, Yr, Di, Ii, Xr, Mi, Ri, D0, o4 = (D0 = class {
      constructor(t = {}) {
         Fe(this, lt);
         Fe(this, Gr);
         Fe(this, Yr);
         Fe(this, Di);
         Fe(this, Ii);
         Fe(this, Xr);
         Fe(this, Mi);
         Fe(this, Ri);
         Pe(this, lt, t.queryCache || new r4), Pe(this, Gr, t.mutationCache || new i4), Pe(this, Yr, t.defaultOptions || {}), Pe(this, Di, new Map), Pe(this, Ii, new Map), Pe(this, Xr, 0)
      }
      mount() {
         Gl(this, Xr)._++, L(this, Xr) === 1 && (Pe(this, Mi, s1.subscribe(async t => {
            t && (await this.resumePausedMutations(), L(this, lt).onFocus())
         })), Pe(this, Ri, Oc.subscribe(async t => {
            t && (await this.resumePausedMutations(), L(this, lt).onOnline())
         })))
      }
      unmount() {
         var t, e;
         Gl(this, Xr)._--, L(this, Xr) === 0 && ((t = L(this, Mi)) == null || t.call(this), Pe(this, Mi, void 0), (e = L(this, Ri)) == null || e.call(this), Pe(this, Ri, void 0))
      }
      isFetching(t) {
         return L(this, lt).findAll({
            ...t,
            fetchStatus: "fetching"
         }).length
      }
      isMutating(t) {
         return L(this, Gr).findAll({
            ...t,
            status: "pending"
         }).length
      }
      getQueryData(t) {
         var r;
         const e = this.defaultQueryOptions({
            queryKey: t
         });
         return (r = L(this, lt).get(e.queryHash)) == null ? void 0 : r.state.data
      }
      ensureQueryData(t) {
         const e = this.defaultQueryOptions(t),
            r = L(this, lt).build(this, e),
            i = r.state.data;
         return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && r.isStaleByTime(s0(e.staleTime, r)) && this.prefetchQuery(e), Promise.resolve(i))
      }
      getQueriesData(t) {
         return L(this, lt).findAll(t).map(({
            queryKey: e,
            state: r
         }) => {
            const i = r.data;
            return [e, i]
         })
      }
      setQueryData(t, e, r) {
         const i = this.defaultQueryOptions({
               queryKey: t
            }),
            a = L(this, lt).get(i.queryHash),
            l = a == null ? void 0 : a.state.data,
            u = zA(e, l);
         if (u !== void 0) return L(this, lt).build(this, i).setData(u, {
            ...r,
            manual: !0
         })
      }
      setQueriesData(t, e, r) {
         return _t.batch(() => L(this, lt).findAll(t).map(({
            queryKey: i
         }) => [i, this.setQueryData(i, e, r)]))
      }
      getQueryState(t) {
         var r;
         const e = this.defaultQueryOptions({
            queryKey: t
         });
         return (r = L(this, lt).get(e.queryHash)) == null ? void 0 : r.state
      }
      removeQueries(t) {
         const e = L(this, lt);
         _t.batch(() => {
            e.findAll(t).forEach(r => {
               e.remove(r)
            })
         })
      }
      resetQueries(t, e) {
         const r = L(this, lt);
         return _t.batch(() => (r.findAll(t).forEach(i => {
            i.reset()
         }), this.refetchQueries({
            type: "active",
            ...t
         }, e)))
      }
      cancelQueries(t, e = {}) {
         const r = {
               revert: !0,
               ...e
            },
            i = _t.batch(() => L(this, lt).findAll(t).map(a => a.cancel(r)));
         return Promise.all(i).then(Nn).catch(Nn)
      }
      invalidateQueries(t, e = {}) {
         return _t.batch(() => (L(this, lt).findAll(t).forEach(r => {
            r.invalidate()
         }), (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...t,
            type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active"
         }, e)))
      }
      refetchQueries(t, e = {}) {
         const r = {
               ...e,
               cancelRefetch: e.cancelRefetch ?? !0
            },
            i = _t.batch(() => L(this, lt).findAll(t).filter(a => !a.isDisabled()).map(a => {
               let l = a.fetch(void 0, r);
               return r.throwOnError || (l = l.catch(Nn)), a.state.fetchStatus === "paused" ? Promise.resolve() : l
            }));
         return Promise.all(i).then(Nn)
      }
      fetchQuery(t) {
         const e = this.defaultQueryOptions(t);
         e.retry === void 0 && (e.retry = !1);
         const r = L(this, lt).build(this, e);
         return r.isStaleByTime(s0(e.staleTime, r)) ? r.fetch(e) : Promise.resolve(r.state.data)
      }
      prefetchQuery(t) {
         return this.fetchQuery(t).then(Nn).catch(Nn)
      }
      fetchInfiniteQuery(t) {
         return t.behavior = c0(t.pages), this.fetchQuery(t)
      }
      prefetchInfiniteQuery(t) {
         return this.fetchInfiniteQuery(t).then(Nn).catch(Nn)
      }
      ensureInfiniteQueryData(t) {
         return t.behavior = c0(t.pages), this.ensureQueryData(t)
      }
      resumePausedMutations() {
         return Oc.isOnline() ? L(this, Gr).resumePausedMutations() : Promise.resolve()
      }
      getQueryCache() {
         return L(this, lt)
      }
      getMutationCache() {
         return L(this, Gr)
      }
      getDefaultOptions() {
         return L(this, Yr)
      }
      setDefaultOptions(t) {
         Pe(this, Yr, t)
      }
      setQueryDefaults(t, e) {
         L(this, Di).set(Bs(t), {
            queryKey: t,
            defaultOptions: e
         })
      }
      getQueryDefaults(t) {
         const e = [...L(this, Di).values()],
            r = {};
         return e.forEach(i => {
            jo(t, i.queryKey) && Object.assign(r, i.defaultOptions)
         }), r
      }
      setMutationDefaults(t, e) {
         L(this, Ii).set(Bs(t), {
            mutationKey: t,
            defaultOptions: e
         })
      }
      getMutationDefaults(t) {
         const e = [...L(this, Ii).values()],
            r = {};
         return e.forEach(i => {
            jo(t, i.mutationKey) && Object.assign(r, i.defaultOptions)
         }), r
      }
      defaultQueryOptions(t) {
         if (t._defaulted) return t;
         const e = {
            ...L(this, Yr).queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0
         };
         return e.queryHash || (e.queryHash = up(e.queryKey, e)), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === dp && (e.enabled = !1), e
      }
      defaultMutationOptions(t) {
         return t != null && t._defaulted ? t : {
            ...L(this, Yr).mutations,
            ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
            ...t,
            _defaulted: !0
         }
      }
      clear() {
         L(this, lt).clear(), L(this, Gr).clear()
      }
   }, lt = new WeakMap, Gr = new WeakMap, Yr = new WeakMap, Di = new WeakMap, Ii = new WeakMap, Xr = new WeakMap, Mi = new WeakMap, Ri = new WeakMap, D0),
   Jr, es, Jt, yr, wr, hc, ah, I0, l4 = (I0 = class extends Lo {
      constructor(r, i) {
         super();
         Fe(this, wr);
         Fe(this, Jr);
         Fe(this, es);
         Fe(this, Jt);
         Fe(this, yr);
         Pe(this, Jr, r), this.setOptions(i), this.bindMethods(), pt(this, wr, hc).call(this)
      }
      bindMethods() {
         this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
      }
      setOptions(r) {
         var a;
         const i = this.options;
         this.options = L(this, Jr).defaultMutationOptions(r), ZA(this.options, i) || L(this, Jr).getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: L(this, Jt),
            observer: this
         }), i != null && i.mutationKey && this.options.mutationKey && Bs(i.mutationKey) !== Bs(this.options.mutationKey) ? this.reset() : ((a = L(this, Jt)) == null ? void 0 : a.state.status) === "pending" && L(this, Jt).setOptions(this.options)
      }
      onUnsubscribe() {
         var r;
         this.hasListeners() || (r = L(this, Jt)) == null || r.removeObserver(this)
      }
      onMutationUpdate(r) {
         pt(this, wr, hc).call(this), pt(this, wr, ah).call(this, r)
      }
      getCurrentResult() {
         return L(this, es)
      }
      reset() {
         var r;
         (r = L(this, Jt)) == null || r.removeObserver(this), Pe(this, Jt, void 0), pt(this, wr, hc).call(this), pt(this, wr, ah).call(this)
      }
      mutate(r, i) {
         var a;
         return Pe(this, yr, i), (a = L(this, Jt)) == null || a.removeObserver(this), Pe(this, Jt, L(this, Jr).getMutationCache().build(L(this, Jr), this.options)), L(this, Jt).addObserver(this), L(this, Jt).execute(r)
      }
   }, Jr = new WeakMap, es = new WeakMap, Jt = new WeakMap, yr = new WeakMap, wr = new WeakSet, hc = function () {
      var i;
      const r = ((i = L(this, Jt)) == null ? void 0 : i.state) ?? c1();
      Pe(this, es, {
         ...r,
         isPending: r.status === "pending",
         isSuccess: r.status === "success",
         isError: r.status === "error",
         isIdle: r.status === "idle",
         mutate: this.mutate,
         reset: this.reset
      })
   }, ah = function (r) {
      _t.batch(() => {
         var i, a, l, u, d, p, m, y;
         if (L(this, yr) && this.hasListeners()) {
            const v = L(this, es).variables,
               w = L(this, es).context;
            (r == null ? void 0 : r.type) === "success" ? ((a = (i = L(this, yr)).onSuccess) == null || a.call(i, r.data, v, w), (u = (l = L(this, yr)).onSettled) == null || u.call(l, r.data, null, v, w)) : (r == null ? void 0 : r.type) === "error" && ((p = (d = L(this, yr)).onError) == null || p.call(d, r.error, v, w), (y = (m = L(this, yr)).onSettled) == null || y.call(m, void 0, r.error, v, w))
         }
         this.listeners.forEach(v => {
            v(L(this, es))
         })
      })
   }, I0),
   u1 = b.createContext(void 0),
   c4 = t => {
      const e = b.useContext(u1);
      if (!e) throw new Error("No QueryClient set, use QueryClientProvider to set one");
      return e
   },
   u4 = ({
      client: t,
      children: e
   }) => (b.useEffect(() => (t.mount(), () => {
      t.unmount()
   }), [t]), f.jsx(u1.Provider, {
      value: t,
      children: e
   }));

function d4(t, e) {
   return typeof t == "function" ? t(...e) : !!t
}

function f4() {}

function h4(t, e) {
   const r = c4(),
      [i] = b.useState(() => new l4(r, t));
   b.useEffect(() => {
      i.setOptions(t)
   }, [i, t]);
   const a = b.useSyncExternalStore(b.useCallback(u => i.subscribe(_t.batchCalls(u)), [i]), () => i.getCurrentResult(), () => i.getCurrentResult()),
      l = b.useCallback((u, d) => {
         i.mutate(u, d).catch(f4)
      }, [i]);
   if (a.error && d4(i.options.throwOnError, [a.error])) throw a.error;
   return {
      ...a,
      mutate: l,
      mutateAsync: a.mutate
   }
}
const p4 = Fa.object({
      name: Fa.string().min(2, "Name must be at least 2 characters"),
      email: Fa.string().email("Please enter a valid email address"),
      subject: Fa.string().min(5, "Subject must be at least 5 characters"),
      message: Fa.string().min(10, "Message must be at least 10 characters")
   }),
   m4 = () => {
      const {
         toast: t
      } = W0(), e = kN({
         resolver: jN(p4),
         defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
         }
      }), {
         mutate: r,
         isPending: i
      } = h4({
         mutationFn: async l => (await fetch("https://formspree.io/f/xyzjyvqv", {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(l)
         })).json(),
         onSuccess: l => {
            t({
               title: "Message sent!",
               description: "Thank you for your message. I'll get back to you soon.",
               variant: "default"
            }), e.reset()
         },
         onError: l => {
            t({
               title: "Error",
               description: l instanceof Error ? l.message : "Failed to send message. Please try again.",
               variant: "destructive"
            })
         }
      }), a = l => {
         r(l)
      };
      return f.jsx(LA, {
         ...e,
         children: f.jsxs("form", {
            onSubmit: e.handleSubmit(a),
            className: "space-y-6",
            children: [f.jsx(rc, {
               control: e.control,
               name: "name",
               render: ({
                  field: l
               }) => f.jsxs(Ha, {
                  children: [f.jsx(Qa, {
                     children: "Name"
                  }), f.jsx(qa, {
                     children: f.jsx(fc, {
                        placeholder: "Your name",
                        ...l,
                        className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                     })
                  }), f.jsx(Ka, {})]
               })
            }), f.jsx(rc, {
               control: e.control,
               name: "email",
               render: ({
                  field: l
               }) => f.jsxs(Ha, {
                  children: [f.jsx(Qa, {
                     children: "Email"
                  }), f.jsx(qa, {
                     children: f.jsx(fc, {
                        type: "email",
                        placeholder: "Your email address",
                        ...l,
                        className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                     })
                  }), f.jsx(Ka, {})]
               })
            }), f.jsx(rc, {
               control: e.control,
               name: "subject",
               render: ({
                  field: l
               }) => f.jsxs(Ha, {
                  children: [f.jsx(Qa, {
                     children: "Subject"
                  }), f.jsx(qa, {
                     children: f.jsx(fc, {
                        placeholder: "What's this about?",
                        ...l,
                        className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                     })
                  }), f.jsx(Ka, {})]
               })
            }), f.jsx(rc, {
               control: e.control,
               name: "message",
               render: ({
                  field: l
               }) => f.jsxs(Ha, {
                  children: [f.jsx(Qa, {
                     children: "Message"
                  }), f.jsx(qa, {
                     children: f.jsx(t1, {
                        placeholder: "Your message",
                        rows: 4,
                        ...l,
                        className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                     })
                  }), f.jsx(Ka, {})]
               })
            }), f.jsx(Sr, {
               type: "submit",
               disabled: i,
               className: "w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors font-medium flex items-center justify-center",
               children: i ? f.jsxs(f.Fragment, {
                  children: [f.jsx(gT, {
                     className: "mr-2 h-4 w-4 animate-spin"
                  }), " Sending..."]
               }) : f.jsxs(f.Fragment, {
                  children: ["Send Message ", f.jsx(xT, {
                     className: "ml-2 h-4 w-4"
                  })]
               })
            })]
         })
      })
   },
   g4 = () => {
      const t = {
            hidden: {
               opacity: 0
            },
            visible: {
               opacity: 1,
               transition: {
                  duration: .6,
                  when: "beforeChildren",
                  staggerChildren: .2
               }
            }
         },
         e = {
            hidden: {
               y: 30,
               opacity: 0
            },
            visible: {
               y: 0,
               opacity: 1,
               transition: {
                  duration: .5
               }
            }
         };
      return f.jsx("section", {
         id: "contact",
         className: "py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300",
         children: f.jsxs(Te.div, {
            className: "container mx-auto max-w-5xl",
            variants: t,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
               once: !0,
               amount: .2
            },
            children: [f.jsxs(Te.div, {
               className: "text-center mb-16",
               variants: e,
               children: [f.jsx("h2", {
                  className: "text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300",
                  children: "Get In Touch"
               }), f.jsx("p", {
                  className: "text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300",
                  children: "Have a project in mind or interested in working together? Feel free to reach out through the form below or connect with me directly."
               })]
            }), f.jsxs("div", {
               className: "grid grid-cols-1 md:grid-cols-2 gap-12",
               children: [f.jsx(Te.div, {
                  className: "bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 transition-colors duration-300",
                  variants: e,
                  children: f.jsx(m4, {})
               }), f.jsxs(Te.div, {
                  className: "space-y-8",
                  variants: e,
                  children: [f.jsxs("div", {
                     className: "space-y-6",
                     children: [f.jsx("h3", {
                        className: "text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300",
                        children: "Contact Information"
                     }), f.jsxs("div", {
                        className: "flex items-start",
                        children: [f.jsx("div", {
                           className: "flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary dark:text-blue-400 transition-colors duration-300",
                           children: f.jsx(rp, {})
                        }), f.jsxs("div", {
                           className: "ml-4",
                           children: [f.jsx("p", {
                              className: "font-medium text-gray-900 dark:text-white transition-colors duration-300",
                              children: "Email"
                           }), f.jsx("a", {
                              href: "mailto:shubham.ce@sric.iitr.ac.in",
                              className: "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300",
                              children: "shubham.ce@sric.iitr.ac.in"
                           })]
                        })]
                     }), f.jsxs("div", {
                        className: "flex items-start",
                        children: [f.jsx("div", {
                           className: "flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary dark:text-blue-400 transition-colors duration-300",
                           children: f.jsx(wb, {})
                        }), f.jsxs("div", {
                           className: "ml-4",
                           children: [f.jsx("p", {
                              className: "font-medium text-gray-900 dark:text-white transition-colors duration-300",
                              children: "Location"
                           }), f.jsx("p", {
                              className: "text-gray-600 dark:text-gray-300 transition-colors duration-300",
                              children: "UK, India"
                           })]
                        })]
                     }), f.jsxs("div", {
                        className: "flex items-start",
                        children: [f.jsx("div", {
                           className: "flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary dark:text-blue-400 transition-colors duration-300",
                           children: f.jsx(H_, {})
                        }), f.jsxs("div", {
                           className: "ml-4",
                           children: [f.jsx("p", {
                              className: "font-medium text-gray-900 dark:text-white transition-colors duration-300",
                              children: "Working Hours"
                           }), f.jsx("p", {
                              className: "text-gray-600 dark:text-gray-300 transition-colors duration-300",
                              children: "Monday - Friday, 10AM - 5PM IST"
                           })]
                        })]
                     })]
                  }), f.jsxs("div", {
                     className: "space-y-4",
                     children: [f.jsx("h3", {
                        className: "text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300",
                        children: "Connect With Me"
                     }), f.jsxs("div", {
                        className: "flex space-x-4",
                        children: [f.jsx("a", {
                           href: "https://www.linkedin.com/in/iitrshubham/",
                           target: "_blank",
                           rel: "noopener noreferrer",
                           className: "h-12 w-12 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:bg-opacity-90 transition-opacity",
                           "aria-label": "LinkedIn",
                           children: f.jsx(Z_, {
                              className: "text-lg"
                           })
                        }), f.jsx("a", {
                           href: "https://github.com/iitrshubham",
                           target: "_blank",
                           rel: "noopener noreferrer",
                           className: "h-12 w-12 rounded-full bg-[#333] flex items-center justify-center text-white hover:bg-opacity-90 transition-opacity",
                           "aria-label": "GitHub",
                           children: f.jsx(qi, {
                              className: "text-lg"
                           })
                        })]
                     })]
                  })]
               })]
            })]
         })
      })
   },
   y4 = () => {
      const t = {
         hidden: {
            opacity: 0
         },
         visible: {
            opacity: 1,
            transition: {
               duration: .5
            }
         }
      };
      return f.jsxs(Te.div, {
         initial: "hidden",
         animate: "visible",
         variants: t,
         children: [f.jsx(X_, {}), f.jsx(kb, {}), f.jsx(nN, {}), f.jsx(rN, {}), f.jsx(g4, {})]
      })
   },
   v4 = () => (b.useEffect(() => {
      window.scrollTo(0, 0)
   }, []), f.jsx("div", {
      className: "pt-16",
      children: f.jsx(kb, {})
   }));
var kf, d0;

function x4() {
   if (d0) return kf;
   d0 = 1;
   var t = typeof Element < "u",
      e = typeof Map == "function",
      r = typeof Set == "function",
      i = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

   function a(l, u) {
      if (l === u) return !0;
      if (l && u && typeof l == "object" && typeof u == "object") {
         if (l.constructor !== u.constructor) return !1;
         var d, p, m;
         if (Array.isArray(l)) {
            if (d = l.length, d != u.length) return !1;
            for (p = d; p-- !== 0;)
               if (!a(l[p], u[p])) return !1;
            return !0
         }
         var y;
         if (e && l instanceof Map && u instanceof Map) {
            if (l.size !== u.size) return !1;
            for (y = l.entries(); !(p = y.next()).done;)
               if (!u.has(p.value[0])) return !1;
            for (y = l.entries(); !(p = y.next()).done;)
               if (!a(p.value[1], u.get(p.value[0]))) return !1;
            return !0
         }
         if (r && l instanceof Set && u instanceof Set) {
            if (l.size !== u.size) return !1;
            for (y = l.entries(); !(p = y.next()).done;)
               if (!u.has(p.value[0])) return !1;
            return !0
         }
         if (i && ArrayBuffer.isView(l) && ArrayBuffer.isView(u)) {
            if (d = l.length, d != u.length) return !1;
            for (p = d; p-- !== 0;)
               if (l[p] !== u[p]) return !1;
            return !0
         }
         if (l.constructor === RegExp) return l.source === u.source && l.flags === u.flags;
         if (l.valueOf !== Object.prototype.valueOf && typeof l.valueOf == "function" && typeof u.valueOf == "function") return l.valueOf() === u.valueOf();
         if (l.toString !== Object.prototype.toString && typeof l.toString == "function" && typeof u.toString == "function") return l.toString() === u.toString();
         if (m = Object.keys(l), d = m.length, d !== Object.keys(u).length) return !1;
         for (p = d; p-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(u, m[p])) return !1;
         if (t && l instanceof Element) return !1;
         for (p = d; p-- !== 0;)
            if (!((m[p] === "_owner" || m[p] === "__v" || m[p] === "__o") && l.$$typeof) && !a(l[m[p]], u[m[p]])) return !1;
         return !0
      }
      return l !== l && u !== u
   }
   return kf = function (u, d) {
      try {
         return a(u, d)
      } catch (p) {
         if ((p.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
         throw p
      }
   }, kf
}
var w4 = x4();
const b4 = _o(w4);
var Sf, f0;

function k4() {
   if (f0) return Sf;
   f0 = 1;
   var t = function (e, r, i, a, l, u, d, p) {
      if (!e) {
         var m;
         if (r === void 0) m = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
         else {
            var y = [i, a, l, u, d, p],
               v = 0;
            m = new Error(r.replace(/%s/g, function () {
               return y[v++]
            })), m.name = "Invariant Violation"
         }
         throw m.framesToPop = 1, m
      }
   };
   return Sf = t, Sf
}
var S4 = k4();
const h0 = _o(S4);
var Tf, p0;

function T4() {
   return p0 || (p0 = 1, Tf = function (e, r, i, a) {
      var l = i ? i.call(a, e, r) : void 0;
      if (l !== void 0) return !!l;
      if (e === r) return !0;
      if (typeof e != "object" || !e || typeof r != "object" || !r) return !1;
      var u = Object.keys(e),
         d = Object.keys(r);
      if (u.length !== d.length) return !1;
      for (var p = Object.prototype.hasOwnProperty.bind(r), m = 0; m < u.length; m++) {
         var y = u[m];
         if (!p(y)) return !1;
         var v = e[y],
            w = r[y];
         if (l = i ? i.call(a, v, w, y) : void 0, l === !1 || l === void 0 && v !== w) return !1
      }
      return !0
   }), Tf
}
var C4 = T4();
const j4 = _o(C4);
var d1 = (t => (t.BASE = "base", t.BODY = "body", t.HEAD = "head", t.HTML = "html", t.LINK = "link", t.META = "meta", t.NOSCRIPT = "noscript", t.SCRIPT = "script", t.STYLE = "style", t.TITLE = "title", t.FRAGMENT = "Symbol(react.fragment)", t))(d1 || {}),
   Cf = {
      link: {
         rel: ["amphtml", "canonical", "alternate"]
      },
      script: {
         type: ["application/ld+json"]
      },
      meta: {
         charset: "",
         name: ["generator", "robots", "description"],
         property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"]
      }
   },
   m0 = Object.values(d1),
   fp = {
      accesskey: "accessKey",
      charset: "charSet",
      class: "className",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      "http-equiv": "httpEquiv",
      itemprop: "itemProp",
      tabindex: "tabIndex"
   },
   E4 = Object.entries(fp).reduce((t, [e, r]) => (t[r] = e, t), {}),
   Rn = "data-rh",
   Ci = {
      DEFAULT_TITLE: "defaultTitle",
      DEFER: "defer",
      ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
      ON_CHANGE_CLIENT_STATE: "onChangeClientState",
      TITLE_TEMPLATE: "titleTemplate",
      PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
   },
   ji = (t, e) => {
      for (let r = t.length - 1; r >= 0; r -= 1) {
         const i = t[r];
         if (Object.prototype.hasOwnProperty.call(i, e)) return i[e]
      }
      return null
   },
   P4 = t => {
      let e = ji(t, "title");
      const r = ji(t, Ci.TITLE_TEMPLATE);
      if (Array.isArray(e) && (e = e.join("")), r && e) return r.replace(/%s/g, () => e);
      const i = ji(t, Ci.DEFAULT_TITLE);
      return e || i || void 0
   },
   _4 = t => ji(t, Ci.ON_CHANGE_CLIENT_STATE) || (() => {}),
   jf = (t, e) => e.filter(r => typeof r[t] < "u").map(r => r[t]).reduce((r, i) => ({
      ...r,
      ...i
   }), {}),
   N4 = (t, e) => e.filter(r => typeof r.base < "u").map(r => r.base).reverse().reduce((r, i) => {
      if (!r.length) {
         const a = Object.keys(i);
         for (let l = 0; l < a.length; l += 1) {
            const d = a[l].toLowerCase();
            if (t.indexOf(d) !== -1 && i[d]) return r.concat(i)
         }
      }
      return r
   }, []),
   A4 = t => console && typeof console.warn == "function" && console.warn(t),
   Va = (t, e, r) => {
      const i = {};
      return r.filter(a => Array.isArray(a[t]) ? !0 : (typeof a[t] < "u" && A4(`Helmet: ${t} should be of type "Array". Instead found type "${typeof a[t]}"`), !1)).map(a => a[t]).reverse().reduce((a, l) => {
         const u = {};
         l.filter(p => {
            let m;
            const y = Object.keys(p);
            for (let w = 0; w < y.length; w += 1) {
               const T = y[w],
                  P = T.toLowerCase();
               e.indexOf(P) !== -1 && !(m === "rel" && p[m].toLowerCase() === "canonical") && !(P === "rel" && p[P].toLowerCase() === "stylesheet") && (m = P), e.indexOf(T) !== -1 && (T === "innerHTML" || T === "cssText" || T === "itemprop") && (m = T)
            }
            if (!m || !p[m]) return !1;
            const v = p[m].toLowerCase();
            return i[m] || (i[m] = {}), u[m] || (u[m] = {}), i[m][v] ? !1 : (u[m][v] = !0, !0)
         }).reverse().forEach(p => a.push(p));
         const d = Object.keys(u);
         for (let p = 0; p < d.length; p += 1) {
            const m = d[p],
               y = {
                  ...i[m],
                  ...u[m]
               };
            i[m] = y
         }
         return a
      }, []).reverse()
   },
   D4 = (t, e) => {
      if (Array.isArray(t) && t.length) {
         for (let r = 0; r < t.length; r += 1)
            if (t[r][e]) return !0
      }
      return !1
   },
   I4 = t => ({
      baseTag: N4(["href"], t),
      bodyAttributes: jf("bodyAttributes", t),
      defer: ji(t, Ci.DEFER),
      encode: ji(t, Ci.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: jf("htmlAttributes", t),
      linkTags: Va("link", ["rel", "href"], t),
      metaTags: Va("meta", ["name", "charset", "http-equiv", "property", "itemprop"], t),
      noscriptTags: Va("noscript", ["innerHTML"], t),
      onChangeClientState: _4(t),
      scriptTags: Va("script", ["src", "innerHTML"], t),
      styleTags: Va("style", ["cssText"], t),
      title: P4(t),
      titleAttributes: jf("titleAttributes", t),
      prioritizeSeoTags: D4(t, Ci.PRIORITIZE_SEO_TAGS)
   }),
   f1 = t => Array.isArray(t) ? t.join("") : t,
   M4 = (t, e) => {
      const r = Object.keys(t);
      for (let i = 0; i < r.length; i += 1)
         if (e[r[i]] && e[r[i]].includes(t[r[i]])) return !0;
      return !1
   },
   Ef = (t, e) => Array.isArray(t) ? t.reduce((r, i) => (M4(i, e) ? r.priority.push(i) : r.default.push(i), r), {
      priority: [],
      default: []
   }) : {
      default: t,
      priority: []
   },
   g0 = (t, e) => ({
      ...t,
      [e]: void 0
   }),
   R4 = ["noscript", "script", "style"],
   oh = (t, e = !0) => e === !1 ? String(t) : String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"),
   h1 = t => Object.keys(t).reduce((e, r) => {
      const i = typeof t[r] < "u" ? `${r}="${t[r]}"` : `${r}`;
      return e ? `${e} ${i}` : i
   }, ""),
   O4 = (t, e, r, i) => {
      const a = h1(r),
         l = f1(e);
      return a ? `<${t} ${Rn}="true" ${a}>${oh(l,i)}</${t}>` : `<${t} ${Rn}="true">${oh(l,i)}</${t}>`
   },
   L4 = (t, e, r = !0) => e.reduce((i, a) => {
      const l = a,
         u = Object.keys(l).filter(m => !(m === "innerHTML" || m === "cssText")).reduce((m, y) => {
            const v = typeof l[y] > "u" ? y : `${y}="${oh(l[y],r)}"`;
            return m ? `${m} ${v}` : v
         }, ""),
         d = l.innerHTML || l.cssText || "",
         p = R4.indexOf(t) === -1;
      return `${i}<${t} ${Rn}="true" ${u}${p?"/>":`>${d}</${t}>`}`
   }, ""),
   p1 = (t, e = {}) => Object.keys(t).reduce((r, i) => {
      const a = fp[i];
      return r[a || i] = t[i], r
   }, e),
   F4 = (t, e, r) => {
      const i = {
            key: e,
            [Rn]: !0
         },
         a = p1(r, i);
      return [be.createElement("title", a, e)]
   },
   pc = (t, e) => e.map((r, i) => {
      const a = {
         key: i,
         [Rn]: !0
      };
      return Object.keys(r).forEach(l => {
         const d = fp[l] || l;
         if (d === "innerHTML" || d === "cssText") {
            const p = r.innerHTML || r.cssText;
            a.dangerouslySetInnerHTML = {
               __html: p
            }
         } else a[d] = r[l]
      }), be.createElement(t, a)
   }),
   vn = (t, e, r = !0) => {
      switch (t) {
         case "title":
            return {
               toComponent: () => F4(t, e.title, e.titleAttributes), toString: () => O4(t, e.title, e.titleAttributes, r)
            };
         case "bodyAttributes":
         case "htmlAttributes":
            return {
               toComponent: () => p1(e), toString: () => h1(e)
            };
         default:
            return {
               toComponent: () => pc(t, e), toString: () => L4(t, e, r)
            }
      }
   },
   V4 = ({
      metaTags: t,
      linkTags: e,
      scriptTags: r,
      encode: i
   }) => {
      const a = Ef(t, Cf.meta),
         l = Ef(e, Cf.link),
         u = Ef(r, Cf.script);
      return {
         priorityMethods: {
            toComponent: () => [...pc("meta", a.priority), ...pc("link", l.priority), ...pc("script", u.priority)],
            toString: () => `${vn("meta",a.priority,i)} ${vn("link",l.priority,i)} ${vn("script",u.priority,i)}`
         },
         metaTags: a.default,
         linkTags: l.default,
         scriptTags: u.default
      }
   },
   z4 = t => {
      const {
         baseTag: e,
         bodyAttributes: r,
         encode: i = !0,
         htmlAttributes: a,
         noscriptTags: l,
         styleTags: u,
         title: d = "",
         titleAttributes: p,
         prioritizeSeoTags: m
      } = t;
      let {
         linkTags: y,
         metaTags: v,
         scriptTags: w
      } = t, T = {
         toComponent: () => {},
         toString: () => ""
      };
      return m && ({
         priorityMethods: T,
         linkTags: y,
         metaTags: v,
         scriptTags: w
      } = V4(t)), {
         priority: T,
         base: vn("base", e, i),
         bodyAttributes: vn("bodyAttributes", r, i),
         htmlAttributes: vn("htmlAttributes", a, i),
         link: vn("link", y, i),
         meta: vn("meta", v, i),
         noscript: vn("noscript", l, i),
         script: vn("script", w, i),
         style: vn("style", u, i),
         title: vn("title", {
            title: d,
            titleAttributes: p
         }, i)
      }
   },
   lh = z4,
   ic = [],
   m1 = !!(typeof window < "u" && window.document && window.document.createElement),
   ch = class {
      constructor(t, e) {
         ur(this, "instances", []);
         ur(this, "canUseDOM", m1);
         ur(this, "context");
         ur(this, "value", {
            setHelmet: t => {
               this.context.helmet = t
            },
            helmetInstances: {
               get: () => this.canUseDOM ? ic : this.instances,
               add: t => {
                  (this.canUseDOM ? ic : this.instances).push(t)
               },
               remove: t => {
                  const e = (this.canUseDOM ? ic : this.instances).indexOf(t);
                  (this.canUseDOM ? ic : this.instances).splice(e, 1)
               }
            }
         });
         this.context = t, this.canUseDOM = e || !1, e || (t.helmet = lh({
            baseTag: [],
            bodyAttributes: {},
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {}
         }))
      }
   },
   B4 = {},
   g1 = be.createContext(B4),
   Rs, y1 = (Rs = class extends b.Component {
      constructor(r) {
         super(r);
         ur(this, "helmetData");
         this.helmetData = new ch(this.props.context || {}, Rs.canUseDOM)
      }
      render() {
         return be.createElement(g1.Provider, {
            value: this.helmetData.value
         }, this.props.children)
      }
   }, ur(Rs, "canUseDOM", m1), Rs),
   mi = (t, e) => {
      const r = document.head || document.querySelector("head"),
         i = r.querySelectorAll(`${t}[${Rn}]`),
         a = [].slice.call(i),
         l = [];
      let u;
      return e && e.length && e.forEach(d => {
         const p = document.createElement(t);
         for (const m in d)
            if (Object.prototype.hasOwnProperty.call(d, m))
               if (m === "innerHTML") p.innerHTML = d.innerHTML;
               else if (m === "cssText") p.styleSheet ? p.styleSheet.cssText = d.cssText : p.appendChild(document.createTextNode(d.cssText));
         else {
            const y = m,
               v = typeof d[y] > "u" ? "" : d[y];
            p.setAttribute(m, v)
         }
         p.setAttribute(Rn, "true"), a.some((m, y) => (u = y, p.isEqualNode(m))) ? a.splice(u, 1) : l.push(p)
      }), a.forEach(d => {
         var p;
         return (p = d.parentNode) == null ? void 0 : p.removeChild(d)
      }), l.forEach(d => r.appendChild(d)), {
         oldTags: a,
         newTags: l
      }
   },
   uh = (t, e) => {
      const r = document.getElementsByTagName(t)[0];
      if (!r) return;
      const i = r.getAttribute(Rn),
         a = i ? i.split(",") : [],
         l = [...a],
         u = Object.keys(e);
      for (const d of u) {
         const p = e[d] || "";
         r.getAttribute(d) !== p && r.setAttribute(d, p), a.indexOf(d) === -1 && a.push(d);
         const m = l.indexOf(d);
         m !== -1 && l.splice(m, 1)
      }
      for (let d = l.length - 1; d >= 0; d -= 1) r.removeAttribute(l[d]);
      a.length === l.length ? r.removeAttribute(Rn) : r.getAttribute(Rn) !== u.join(",") && r.setAttribute(Rn, u.join(","))
   },
   U4 = (t, e) => {
      typeof t < "u" && document.title !== t && (document.title = f1(t)), uh("title", e)
   },
   y0 = (t, e) => {
      const {
         baseTag: r,
         bodyAttributes: i,
         htmlAttributes: a,
         linkTags: l,
         metaTags: u,
         noscriptTags: d,
         onChangeClientState: p,
         scriptTags: m,
         styleTags: y,
         title: v,
         titleAttributes: w
      } = t;
      uh("body", i), uh("html", a), U4(v, w);
      const T = {
            baseTag: mi("base", r),
            linkTags: mi("link", l),
            metaTags: mi("meta", u),
            noscriptTags: mi("noscript", d),
            scriptTags: mi("script", m),
            styleTags: mi("style", y)
         },
         P = {},
         S = {};
      Object.keys(T).forEach(C => {
         const {
            newTags: _,
            oldTags: D
         } = T[C];
         _.length && (P[C] = _), D.length && (S[C] = T[C].oldTags)
      }), e && e(), p(t, P, S)
   },
   za = null,
   $4 = t => {
      za && cancelAnimationFrame(za), t.defer ? za = requestAnimationFrame(() => {
         y0(t, () => {
            za = null
         })
      }) : (y0(t), za = null)
   },
   Z4 = $4,
   v0 = class extends b.Component {
      constructor() {
         super(...arguments);
         ur(this, "rendered", !1)
      }
      shouldComponentUpdate(e) {
         return !j4(e, this.props)
      }
      componentDidUpdate() {
         this.emitChange()
      }
      componentWillUnmount() {
         const {
            helmetInstances: e
         } = this.props.context;
         e.remove(this), this.emitChange()
      }
      emitChange() {
         const {
            helmetInstances: e,
            setHelmet: r
         } = this.props.context;
         let i = null;
         const a = I4(e.get().map(l => {
            const u = {
               ...l.props
            };
            return delete u.context, u
         }));
         y1.canUseDOM ? Z4(a) : lh && (i = lh(a)), r(i)
      }
      init() {
         if (this.rendered) return;
         this.rendered = !0;
         const {
            helmetInstances: e
         } = this.props.context;
         e.add(this), this.emitChange()
      }
      render() {
         return this.init(), null
      }
   },
   _f, Xc = (_f = class extends b.Component {
      shouldComponentUpdate(t) {
         return !b4(g0(this.props, "helmetData"), g0(t, "helmetData"))
      }
      mapNestedChildrenToProps(t, e) {
         if (!e) return null;
         switch (t.type) {
            case "script":
            case "noscript":
               return {
                  innerHTML: e
               };
            case "style":
               return {
                  cssText: e
               };
            default:
               throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)
         }
      }
      flattenArrayTypeChildren(t, e, r, i) {
         return {
            ...e,
            [t.type]: [...e[t.type] || [], {
               ...r,
               ...this.mapNestedChildrenToProps(t, i)
            }]
         }
      }
      mapObjectTypeChildren(t, e, r, i) {
         switch (t.type) {
            case "title":
               return {
                  ...e, [t.type]: i, titleAttributes: {
                     ...r
                  }
               };
            case "body":
               return {
                  ...e, bodyAttributes: {
                     ...r
                  }
               };
            case "html":
               return {
                  ...e, htmlAttributes: {
                     ...r
                  }
               };
            default:
               return {
                  ...e, [t.type]: {
                     ...r
                  }
               }
         }
      }
      mapArrayTypeChildrenToProps(t, e) {
         let r = {
            ...e
         };
         return Object.keys(t).forEach(i => {
            r = {
               ...r,
               [i]: t[i]
            }
         }), r
      }
      warnOnInvalidChildren(t, e) {
         return h0(m0.some(r => t.type === r), typeof t.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${m0.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`), h0(!e || typeof e == "string" || Array.isArray(e) && !e.some(r => typeof r != "string"), `Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`), !0
      }
      mapChildrenToProps(t, e) {
         let r = {};
         return be.Children.forEach(t, i => {
            if (!i || !i.props) return;
            const {
               children: a,
               ...l
            } = i.props, u = Object.keys(l).reduce((p, m) => (p[E4[m] || m] = l[m], p), {});
            let {
               type: d
            } = i;
            switch (typeof d == "symbol" ? d = d.toString() : this.warnOnInvalidChildren(i, a), d) {
               case "Symbol(react.fragment)":
                  e = this.mapChildrenToProps(a, e);
                  break;
               case "link":
               case "meta":
               case "noscript":
               case "script":
               case "style":
                  r = this.flattenArrayTypeChildren(i, r, u, a);
                  break;
               default:
                  e = this.mapObjectTypeChildren(i, e, u, a);
                  break
            }
         }), this.mapArrayTypeChildrenToProps(r, e)
      }
      render() {
         const {
            children: t,
            ...e
         } = this.props;
         let r = {
               ...e
            },
            {
               helmetData: i
            } = e;
         if (t && (r = this.mapChildrenToProps(t, r)), i && !(i instanceof ch)) {
            const a = i;
            i = new ch(a.context, !0), delete r.helmetData
         }
         return i ? be.createElement(v0, {
            ...r,
            context: i.value
         }) : be.createElement(g1.Consumer, null, a => be.createElement(v0, {
            ...r,
            context: a
         }))
      }
   }, ur(_f, "defaultProps", {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1
   }), _f);
const W4 = ({
      params: t
   }) => {
      var l, u, d;
      const [e, r] = b.useState(null), [, i] = ls(), {
         slug: a
      } = No();
      return b.useEffect(() => {
         window.scrollTo(0, 0);
         const p = ro.find(m => m.slug === a);
         p && r(p)
      }, [a]), e ? f.jsxs(f.Fragment, {
         children: [f.jsxs(Xc, {
            children: [f.jsxs("title", {
               children: [e.title, " | ", e.category, " | Shubham"]
            }), f.jsx("meta", {
               name: "description",
               content: e.description
            }), f.jsx("meta", {
               name: "keywords",
               content: ((l = e.skills) == null ? void 0 : l.join(", ")) || ""
            }), f.jsx("link", {
               rel: "canonical",
               href: `https://iitrshubham.github.io/project/${e.slug}`
            }), f.jsx("meta", {
               property: "og:title",
               content: `${e.title} | Data Analysis Project`
            }), f.jsx("meta", {
               property: "og:description",
               content: e.description
            }), f.jsx("meta", {
               property: "og:type",
               content: "article"
            }), f.jsx("meta", {
               property: "og:url",
               content: `https://iitrshubham.github.io/project/${e.slug}`
            }), e.imageUrl && f.jsx("meta", {
               property: "og:image",
               content: e.thumbhnailUrl
            }), f.jsx("meta", {
               name: "twitter:card",
               content: "summary_large_image"
            }), f.jsx("meta", {
               name: "twitter:title",
               content: `${e.title} | Data Analysis Project`
            }), f.jsx("meta", {
               name: "twitter:description",
               content: e.description
            }), e.imageUrl && f.jsx("meta", {
               name: "twitter:image",
               content: e.thumbhnailUrl
            })]
         }), f.jsx("div", {
            className: "pt-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50 dark:bg-gray-900",
            children: f.jsx("div", {
               className: "container mx-auto py-10",
               children: f.jsxs(Te.div, {
                  initial: {
                     opacity: 0,
                     y: 20
                  },
                  animate: {
                     opacity: 1,
                     y: 0
                  },
                  transition: {
                     duration: .5
                  },
                  children: [f.jsxs("button", {
                     onClick: () => i("/projects"),
                     className: "mb-6 inline-flex items-center text-gray-600 hover:text-primary transition-colors",
                     children: [f.jsx(xb, {
                        className: "mr-2"
                     }), " Back to Projects"]
                  }), f.jsx("div", {
                     className: "bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden",
                     children: f.jsxs("div", {
                        className: "p-6 md:p-8",
                        children: [f.jsxs("div", {
                           className: "flex flex-wrap justify-between items-start gap-4 mb-6",
                           children: [f.jsxs("div", {
                              children: [f.jsx("h1", {
                                 className: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white",
                                 children: e.title
                              }), f.jsx("span", {
                                 className: `mt-2 inline-block text-sm px-3 py-1 rounded-full ${e.tagColor}`,
                                 children: e.category
                              })]
                           }), f.jsxs("a", {
                              href: e.githubUrl,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "px-4 py-2 border border-gray-300 rounded-md hover:border-primary hover:text-primary transition-colors flex items-center",
                              children: [f.jsx(qi, {
                                 className: "mr-2"
                              }), " View on GitHub"]
                           })]
                        }), e.imageUrl && !["Bridge engg", "Bandgap metamaterials", "Uncertainty"].includes(e.category) && f.jsx("div", {
                           className: "mb-10",
                           children: f.jsx("div", {
                              className: "w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-sm border bg-white",
                              children: f.jsx("img", {
                                 src: e.imageUrl,
                                 alt: e.title + " cover",
                                 className: "w-full object-cover aspect-[16/9]"
                              })
                           })
                        }), e.category === "Bridge engg" && f.jsxs("div", {
                           className: "mt-8",
                           children: [f.jsx("h2", {
                              className: "text-2xl font-bold mb-4",
                              children: "Interactive Dashboard"
                           }), f.jsx("div", {
                              className: "bg-gray-100 p-4 rounded-lg",
                              children: f.jsx("div", {
                                 className: "aspect-video w-full",
                                 children: f.jsx("iframe", {
                                    title: "Bridge engg Report",
                                    width: "100%",
                                    height: "100%",
                                    className: "w-full h-full border-0 rounded-md",
                                    src: e.powerBiEmbedUrl,
                                    allowFullScreen: !0
                                 })
                              })
                           })]
                        }), e.category === "Bandgap metamaterials" && f.jsxs("div", {
                           className: "mt-8",
                           children: [f.jsx("h2", {
                              className: "text-2xl font-bold mb-4",
                              children: "Interactive Dashboard"
                           }), f.jsx("div", {
                              className: "w-full overflow-hidden rounded-lg bg-gray-100 p-2",
                              children: f.jsx("div", {
                                 className: "relative w-full aspect-[16/9]",
                                 children: f.jsx("iframe", {
                                    title: "Bandgap metamaterials Report",
                                    src: e.lookerstudioEmbedUrl,
                                    className: "absolute top-0 left-0 w-full h-full border-0 rounded-md",
                                    allowFullScreen: !0,
                                    sandbox: "allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                                 })
                              })
                           })]
                        }), e.category === "Uncertainty" && f.jsxs("div", {
                           className: "mt-8",
                           children: [f.jsx("h2", {
                              className: "text-2xl font-bold mb-4",
                              children: "Interactive Dashboard"
                           }), f.jsx("div", {
                              className: "bg-gray-100 p-4 rounded-lg",
                              children: f.jsx("div", {
                                 className: "aspect-video w-full",
                                 children: f.jsx("iframe", {
                                    title: "Tableau Report",
                                    width: "100%",
                                    height: "100%",
                                    className: "w-full h-full border-0 rounded-md",
                                    src: e.uncertaintyUrl,
                                    allowFullScreen: !0
                                 })
                              })
                           })]
                        }), f.jsxs("div", {
                           className: "prose max-w-none",
                           children: [f.jsx("h2", {
                              className: "text-2xl font-bold mb-4 text-gray-900 dark:text-white",
                              children: "Project Overview"
                           }), f.jsx("p", {
                              className: "text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line",
                              children: e.description
                           }), f.jsx("h2", {
                              className: "text-2xl font-bold mb-4 text-gray-900 dark:text-white",
                              children: "Methodology"
                           }), f.jsx("p", {
                              className: "text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line",
                              children: e.methodology
                           }), f.jsx("h2", {
                              className: "text-2xl font-bold mb-4 text-gray-900 dark:text-white",
                              children: "Results & Impact"
                           }), f.jsx("div", {
                              className: "text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line",
                              children: f.jsx("p", {
                                 className: "mb-4",
                                 children: e.resultsAndImpact
                              })
                           }), f.jsxs("div", {
                              className: "mt-10",
                              children: [f.jsx("h2", {
                                 className: "text-2xl font-bold mb-4 text-gray-900 dark:text-white",
                                 children: "Technical Details"
                              }), f.jsxs("div", {
                                 className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                 children: [f.jsxs("div", {
                                    className: "bg-gray-50 dark:bg-gray-700 p-4 rounded-md",
                                    children: [f.jsx("h3", {
                                       className: "font-bold mb-2 dark:text-white",
                                       children: "Skills Applied"
                                    }), f.jsx("ul", {
                                       className: "list-disc list-inside text-gray-700 dark:text-gray-300",
                                       children: (u = e.skills) == null ? void 0 : u.map((p, m) => f.jsx("li", {
                                          children: p
                                       }, m))
                                    })]
                                 }), f.jsxs("div", {
                                    className: "bg-gray-50 dark:bg-gray-700 p-4 rounded-md",
                                    children: [f.jsx("h3", {
                                       className: "font-bold mb-2 dark:text-white",
                                       children: "Tools Used"
                                    }), f.jsx("ul", {
                                       className: "list-disc list-inside text-gray-700 dark:text-gray-300",
                                       children: (d = e.tools) == null ? void 0 : d.map((p, m) => f.jsx("li", {
                                          children: p
                                       }, m))
                                    })]
                                 })]
                              })]
                           })]
                        })]
                     })
                  })]
               })
            })
         })]
      }) : f.jsx("div", {
         className: "min-h-screen flex items-center justify-center",
         children: f.jsxs("div", {
            className: "text-center",
            children: [f.jsx("h2", {
               className: "text-2xl font-bold mb-4",
               children: "Project Not Found"
            }), f.jsx("button", {
               onClick: () => i("/"),
               className: "px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors",
               children: "Back to Home"
            })]
         })
      })
   },
   H4 = t => {
      switch (t) {
         case "Topology optimization":
            return "Topology optimization Projects";
         case "Metamaterials":
            return "Metamaterials Projects";
         case "Machine Learning":
            return "Machine Learning Projects";
         case "Bridge engg":
            return "Bridge engg Dashboards";
         case "Health monitoring":
            return "Health monitoring Projects";
         case "Uncertainty":
            return "Uncertainty Dashboards";
         case "Bandgap metamaterials":
            return "Bandgap metamaterials Reports";
         default:
            return "Projects"
      }
   },
   Q4 = t => {
      switch (t) {
         case "Topology optimization":
            return "Advanced database projects using Topology optimization to extract, transform, and analyze data for business insights.";
         case "Metamaterials":
            return "Metamaterials-based data analysis projects using libraries like Pandas, NumPy, and Matplotlib.";
         case "Machine Learning":
            return "Projects implementing machine learning algorithms for predictive analytics and pattern recognition.";
         case "Bridge engg":
            return "Interactive dashboards and visualizations created with Microsoft Bridge engg.";
         case "Health monitoring":
            return "Advanced Health monitoring projects demonstrating data analysis, modeling, and visualization techniques.";
         case "Uncertainty":
            return "Interactive data visualizations and dashboards created with Uncertainty for comprehensive business intelligence.";
         case "Bandgap metamaterials":
            return "Dynamic reports and dashboards built with Bandgap metamaterials to monitor marketing performance and web analytics.";
         default:
            return "Collection of data analysis projects."
      }
   },
   q4 = ({
      params: t
   }) => {
      const [e, r] = b.useState([]), [, i] = ls();
      b.useEffect(() => {
         window.scrollTo(0, 0);
         const p = t.category.split("-").map(y => y.charAt(0).toUpperCase() + y.slice(1).toLowerCase()).join(" "),
            m = ro.filter(y => y.category.toLowerCase() === p.toLowerCase() || p === "Machine Learning" && y.category === "Machine Learning" || p === "Bandgap metamaterials" && y.category === "Bandgap metamaterials" || t.category === "looker-studio" && y.category === "Bandgap metamaterials");
         r(m)
      }, [t.category]);
      const a = H4(t.category.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(" ")),
         l = Q4(t.category.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(" ")),
         u = {
            hidden: {
               opacity: 0
            },
            visible: {
               opacity: 1,
               transition: {
                  duration: .6,
                  when: "beforeChildren",
                  staggerChildren: .2
               }
            }
         },
         d = {
            hidden: {
               y: 30,
               opacity: 0
            },
            visible: {
               y: 0,
               opacity: 1,
               transition: {
                  duration: .5
               }
            }
         };
      return f.jsx("div", {
         className: "pt-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300",
         children: f.jsx("div", {
            className: "container mx-auto py-10",
            children: f.jsxs(Te.div, {
               initial: {
                  opacity: 0,
                  y: 20
               },
               animate: {
                  opacity: 1,
                  y: 0
               },
               transition: {
                  duration: .5
               },
               children: [f.jsxs("button", {
                  onClick: () => i("/projects"),
                  className: "mb-6 inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300",
                  children: [f.jsx(xb, {
                     className: "mr-2"
                  }), " Back to All Projects"]
               }), f.jsxs(Te.div, {
                  className: "text-center mb-16",
                  variants: d,
                  children: [f.jsx("h1", {
                     className: "text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300",
                     children: a
                  }), f.jsx("p", {
                     className: "text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300",
                     children: l
                  })]
               }), e.length > 0 ? f.jsx(Te.div, {
                  className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                  variants: u,
                  initial: "hidden",
                  animate: "visible",
                  children: e.map(p => f.jsx(Te.div, {
                     variants: d,
                     children: f.jsx(bb, {
                        project: p
                     })
                  }, p.id))
               }) : f.jsxs("div", {
                  className: "text-center py-20",
                  children: [f.jsx("h3", {
                     className: "text-xl font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300",
                     children: "No projects found in this category"
                  }), f.jsx("p", {
                     className: "mt-2 text-gray-500 dark:text-gray-400 transition-colors duration-300",
                     children: "Check back later for updates or explore other categories"
                  })]
               })]
            })
         })
      })
   },
   x0 = [{
      id: 1,
      title: "Daily MIS & Bridge engg Dashboard for Marketing & Sales Insights",
      slug: "daily-mis-power-bi-dashboard",
      category: "Data Analytics | Operations | Business Intelligence",
      shortDescription: "Developed a Daily MIS and Bridge engg Dashboard to monitor sales, marketing, and revenue performance, enabling leadership to make fast, data-driven decisions.",
      fullDescription: `During my internship at The Design Cart as a Data Analyst and Operations Intern, I was responsible for building a Daily MIS & Bridge engg Dashboard to deliver real-time insights on company performance. My task involved consolidating data from multiple sources—such as sales reports, marketing platforms, and revenue trackers—into a single dashboard that would be reviewed by leadership on a daily basis.
                    I ensured the dashboard was automated, visually engaging, and updated with the latest figures to drive strategic planning. The system not only improved the accuracy and timeliness of reports but also helped the company evaluate marketing ROI and sales efficiency across various channels.`,
      bulletPoints: ["Built a fully automated Daily MIS Dashboard using Bridge engg", "Consolidated data from sales reports, marketing analytics, and revenue tracking", "Delivered real-time, structured insights for daily executive decision-making", "Improved reporting accuracy to 100%, boosting confidence in data", "Enabled performance tracking of key metrics like conversion rates and ad effectiveness", "Supported the CEO with daily performance reviews for faster strategic planning", "Helped identify high-performing marketing strategies, improving ROI"],
      date: "Dec 2024",
      toolsUsed: ["Bridge engg", "Microsoft Excel", "Sales Reports", "Marketing Analytics", "Business Intelligence Concepts"],
      results: "The dashboard ensured accurate and error-free reporting throughout the internship period, reducing manual work by nearly 2 hours per day. It helped identify high-performing marketing strategies, leading to a 15–20% improvement in marketing ROI. These insights enabled the leadership team to make faster and more informed decisions."
   }, {
      id: 2,
      title: "RTO Automation and Proof Extraction System",
      slug: "rto-automation-proof-extraction",
      category: "Operational Automation | Self-Initiated Project",
      shortDescription: "I independently created a system using Excel and Metamaterials to automate the extraction of AWB proof files, reducing manual work and supporting timely reattempts and freight waivers.",
      fullDescription: `During my internship at Design Cart, I identified a time-consuming process in handling RTO (Return to Origin) cases where extracting proof files like MP3 and PNG for specific AWBs (Air Waybill numbers) used to take around an hour daily. I took the initiative to automate this task.
                        First, I created an Excel tracking file to monitor how many AWBs had valid proof and how many delivery attempts had been made. Based on this, I identified cases with less than 3 attempts, helping me raise freight waiver claims efficiently.
                        Then, I built a Metamaterials script that automatically copied the proof files from a folder by matching them with the AWBs listed in Excel. These AWBs were then submitted for reattempts or waivers due to issues like fake delivery remarks.
                        This solution improved the accuracy of reattempt requests, supported timely freight waiver submissions, and significantly reduced manual workload.`,
      bulletPoints: ["Designed Excel file to track AWBs with valid delivery proof and number of attempts.", "Built a Metamaterials script to extract and copy MP3/PNG proof files based on AWB numbers.", "Enabled easy identification of AWBs with <3 attempts to raise freight waivers.", "Reduced daily manual effort from 1 or 2 hour to just 1 minute.", "Helped reduce RTO cases by 2–3% by ensuring timely reattempts with proper proof."],
      date: "Jan 2025",
      toolsUsed: ["Microsoft Excel", "Metamaterials (Pandas, OS module, shutil)", "Power Query"],
      results: "This self-made automation helped reduce the daily manual work from 1 or 2 hour to 1 minute, saving over 25 hours per month. It led to a 2–3% reduction in RTOs by ensuring timely reattempts for AWBs with valid proof and also made it easier to raise bulk freight waiver claims for cases with fewer than 3 delivery attempts. The project improved both accuracy and efficiency in daily operations."
   }],
   w0 = ({
      viewMode: t = "list",
      params: e
   }) => {
      const r = No(),
         i = e || r,
         [, a] = ls(),
         [l, u] = b.useState(null);
      b.useEffect(() => {
         if (window.scrollTo(0, 0), t === "detail" && (i != null && i.slug)) {
            const v = x0.find(w => w.slug === i.slug);
            u(v || null)
         }
      }, [t, i == null ? void 0 : i.slug]);
      const d = {
            hidden: {
               opacity: 0
            },
            show: {
               opacity: 1,
               transition: {
                  staggerChildren: .1
               }
            }
         },
         p = {
            hidden: {
               opacity: 0,
               y: 20
            },
            show: {
               opacity: 1,
               y: 0
            }
         },
         m = () => l ? f.jsxs(Te.div, {
            initial: {
               opacity: 0
            },
            animate: {
               opacity: 1
            },
            className: "max-w-4xl mx-auto",
            children: [f.jsxs(Sr, {
               onClick: () => a("/case-studies"),
               variant: "ghost",
               className: "mb-6 hover:bg-gray-100",
               children: [f.jsx(Li, {
                  className: "mr-2 h-4 w-4"
               }), " Back to Case Studies"]
            }), f.jsx("div", {
               className: "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden",
               children: f.jsxs("div", {
                  className: "p-8",
                  children: [f.jsx("div", {
                     className: "text-lg font-semibold text-primary mb-2",
                     children: l.category
                  }), f.jsx("h1", {
                     className: "text-3xl font-bold text-gray-900 dark:text-white mb-4",
                     children: l.title
                  }), f.jsxs("div", {
                     className: "flex items-center text-gray-500 dark:text-gray-400 mb-6 transition-colors duration-300",
                     children: [f.jsx(kh, {
                        className: "h-4 w-4 mr-1"
                     }), f.jsx("span", {
                        className: "text-sm",
                        children: l.date
                     })]
                  }), f.jsx("div", {
                     className: "prose prose-lg max-w-none mb-8 dark:prose-invert",
                     children: f.jsx("p", {
                        className: "dark:text-gray-300",
                        children: l.fullDescription
                     })
                  }), l.bulletPoints && f.jsxs("div", {
                     className: "mb-8",
                     children: [f.jsx("h2", {
                        className: "text-xl font-bold mb-4 text-gray-900 dark:text-white",
                        children: "Key Activities"
                     }), f.jsx("ul", {
                        className: "space-y-2",
                        children: l.bulletPoints.map((v, w) => f.jsxs("li", {
                           className: "flex items-start",
                           children: [f.jsx("span", {
                              className: "bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-1",
                              children: "✓"
                           }), f.jsx("span", {
                              className: "dark:text-gray-300 transition-colors duration-300",
                              children: v
                           })]
                        }, w))
                     })]
                  }), f.jsxs("div", {
                     className: "mb-8",
                     children: [f.jsx("h2", {
                        className: "text-xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300",
                        children: "Tools & Technologies"
                     }), f.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: l.toolsUsed.map((v, w) => f.jsx("span", {
                           className: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300",
                           children: v
                        }, w))
                     })]
                  }), f.jsxs("div", {
                     className: "bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-5 rounded transition-colors duration-300",
                     children: [f.jsxs("h2", {
                        className: "text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center transition-colors duration-300",
                        children: [f.jsx(mc, {
                           className: "h-5 w-5 mr-2 text-green-600 dark:text-green-400"
                        }), "Results"]
                     }), f.jsx("p", {
                        className: "text-gray-700 dark:text-gray-300 transition-colors duration-300",
                        children: l.results
                     })]
                  })]
               })
            })]
         }) : f.jsxs("div", {
            className: "text-center py-12",
            children: [f.jsx("h2", {
               className: "text-2xl font-bold text-gray-800",
               children: "Case study not found"
            }), f.jsxs(Sr, {
               onClick: () => a("/case-studies"),
               className: "mt-4",
               children: [f.jsx(Li, {
                  className: "mr-2 h-4 w-4"
               }), " Back to Case Studies"]
            })]
         }),
         y = () => f.jsxs(f.Fragment, {
            children: [f.jsxs(Te.div, {
               initial: {
                  opacity: 0,
                  y: -20
               },
               animate: {
                  opacity: 1,
                  y: 0
               },
               transition: {
                  duration: .5
               },
               className: "text-center mb-12",
               children: [f.jsx("h1", {
                  className: "text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300",
                  children: "Case Studies"
               }), f.jsx("p", {
                  className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300",
                  children: "Detailed analyses of real-world data challenges and their solutions"
               })]
            }), f.jsx(Te.div, {
               variants: d,
               initial: "hidden",
               animate: "show",
               className: "grid grid-cols-1 md:grid-cols-2 gap-8",
               children: x0.map(v => f.jsx(Te.div, {
                  variants: p,
                  className: "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",
                  children: f.jsxs("div", {
                     className: "p-6",
                     children: [f.jsx("div", {
                        className: "text-lg font-semibold text-primary mb-1",
                        children: v.category
                     }), f.jsx("h3", {
                        className: "text-2xl font-bold mb-3",
                        children: v.title
                     }), f.jsx("p", {
                        className: "text-gray-600 mb-4",
                        children: v.shortDescription
                     }), f.jsxs("div", {
                        className: "flex justify-between items-center mt-6",
                        children: [f.jsx("span", {
                           className: "text-sm text-gray-500",
                           children: v.date
                        }), f.jsxs("button", {
                           onClick: () => a(`/case-study/${v.slug}`),
                           className: "text-primary font-medium hover:underline flex items-center",
                           children: ["Read Case Study ", f.jsx("span", {
                              className: "ml-1",
                              children: "→"
                           })]
                        })]
                     })]
                  })
               }, v.slug))
            })]
         });
      return f.jsxs(f.Fragment, {
         children: [f.jsx(Xc, {
            children: t === "detail" && l ? f.jsxs(f.Fragment, {
               children: [f.jsxs("title", {
                  children: [l.title, " | Case Study | Shubham"]
               }), f.jsx("meta", {
                  name: "description",
                  content: l.shortDescription
               }), f.jsx("meta", {
                  name: "keywords",
                  content: `case study, ${l.category}, ${l.toolsUsed.join(", ")}`
               }), f.jsx("meta", {
                  property: "og:title",
                  content: `${l.title} | Case Study`
               }), f.jsx("meta", {
                  property: "og:description",
                  content: l.shortDescription
               }), l.imageUrl && f.jsx("meta", {
                  property: "og:image",
                  content: l.imageUrl
               }), f.jsx("meta", {
                  property: "og:type",
                  content: "article"
               })]
            }) : f.jsxs(f.Fragment, {
               children: [f.jsx("title", {
                  children: "Case Studies | Shubham"
               }), f.jsx("meta", {
                  name: "description",
                  content: "Detailed analyses of real-world data challenges and their solutions"
               }), f.jsx("meta", {
                  name: "keywords",
                  content: "case studies, data analysis, projects, portfolio"
               }), f.jsx("meta", {
                  property: "og:title",
                  content: "Case Studies | Shubham"
               }), f.jsx("meta", {
                  property: "og:description",
                  content: "Detailed analyses of real-world data challenges and their solutions"
               }), f.jsx("meta", {
                  property: "og:type",
                  content: "website"
               })]
            })
         }), f.jsx(Te.div, {
            initial: {
               opacity: 0
            },
            animate: {
               opacity: 1
            },
            className: "pt-24 pb-16 container mx-auto px-4 sm:px-6 lg:px-8",
            children: t === "detail" ? m() : y()
         })]
      })
   },
   b0 = [{
      id: 1,
      title: "The Future of Predictive Analytics in 2025",
      slug: "future-predictive-analytics",
      category: "DATA SCIENCE",
      date: "May 1, 2025",
      author: "Shubham",
      shortDescription: "Predictive analytics is rapidly evolving, with new algorithms and approaches emerging to handle increasingly complex datasets. This article explores the latest trends and how they're reshaping industries from healthcare to finance.",
      fullContent: `
        <h2>Introduction to Modern Predictive Analytics</h2>
        <p>Hi, Predictive analytics has evolved significantly over the past decade, transforming from a niche technical field into a fundamental business capability. As we move deeper into 2025, several key trends are reshaping how organizations approach prediction and decision-making.</p>
        <img src="https://raw.githubusercontent.com/iitrshubham/iitrshubham.github.io/refs/heads/main/image/Restaurant%20Order%20Analysis.jpg" alt="Predictive Analytics Chart" style="max-width:100%; height:auto; margin:20px 0;" />
        <h2>The Rise of Automated Machine Learning</h2>
        <p>One of the most significant developments has been the maturation of AutoML platforms. These tools now enable domain experts with limited data science expertise to build sophisticated predictive models. The democratization of ML capabilities has accelerated adoption across sectors from retail to healthcare.</p>
        
        <h2>Explainable AI: Moving Beyond Black Box Models</h2>
        <p>As predictive models increasingly influence critical decisions, the demand for transparency and explainability has grown. New techniques for interpreting complex models are making it possible to understand predictions that were previously opaque, addressing both regulatory requirements and building user trust.</p>
        
        <h2>Real-time Prediction at Scale</h2>
        <p>The infrastructure for deploying predictive models has matured significantly, enabling true real-time prediction capabilities even with complex models. This has opened new applications in fraud detection, personalization, and operational optimization that weren't previously feasible.</p>
        
        <h2>Conclusion</h2>
        <p>Predictive analytics continues to transform how organizations operate, with capabilities that were cutting-edge research just a few years ago now becoming standard practice. Organizations that effectively integrate these capabilities into their workflows are gaining significant competitive advantages through better decision-making and more efficient operations.</p>
      `,
      tags: ["Predictive Analytics", "Machine Learning", "AutoML", "Explainable AI", "Real-time Analytics"]
   }, {
      id: 2,
      title: "Creating Interactive Dashboards with Bridge engg",
      slug: "interactive-dashboards-power-bi",
      category: "VISUALIZATION",
      date: "April 22, 2025",
      author: "Shubham",
      shortDescription: "A comprehensive guide to building effective and visually appealing dashboards in Bridge engg. Learn how to create interactive visualizations that communicate complex data insights clearly to stakeholders.",
      fullContent: `
        <h2>The Art and Science of Dashboard Design</h2>
        <p>Effective dashboards strike a careful balance between aesthetic appeal and functional clarity. This article explores the principles of dashboard design that ensure your visualizations not only look professional but also communicate insights effectively.</p>
        
        <h2>Beyond Basic Visualizations</h2>
        <p>While Bridge engg offers an impressive array of built-in visualizations, the most compelling dashboards often leverage custom visuals, thoughtful color schemes, and careful attention to layout. We'll explore techniques for moving beyond the defaults to create truly distinctive reporting experiences.</p>
        
        <h2>Interactive Filtering and Drill-downs</h2>
        <p>The real power of Bridge engg emerges when users can explore data dynamically. This section covers advanced techniques for creating intuitive filtering experiences, implementing bookmarks, and designing effective drill-down hierarchies.</p>
        
        <h2>Performance Optimization</h2>
        <p>As dashboards grow in complexity, performance can become a challenge. Learn essential techniques for optimizing your data models, DAX calculations, and visual interactions to ensure responsive performance even with large datasets.</p>
        
        <h2>Embedding and Sharing</h2>
        <p>The ultimate value of dashboards comes from getting insights into the hands of decision-makers. We'll cover strategies for effectively sharing and embedding Bridge engg content to maximize its organizational impact.</p>
      `,
      tags: ["Bridge engg", "Data Visualization", "Dashboard Design", "Business Intelligence", "Interactive Reporting"]
   }, {
      id: 3,
      title: "Advanced SQL Techniques for Data Analysis",
      slug: "advanced-sql-techniques",
      category: "SQL",
      date: "April 15, 2025",
      author: "Shubham",
      shortDescription: "Discover advanced SQL techniques like window functions, CTEs, and recursive queries that can transform your data analysis workflow. These methods can help you solve complex analytical problems directly in your database.",
      fullContent: `
        <h2>Moving Beyond Basic SQL</h2>
        <p>While basic SQL queries can get you far, mastering advanced techniques can transform your analytical capabilities. This article introduces powerful SQL features that enable complex analyses directly in your database.</p>
        
        <h2>Window Functions: The Game Changer</h2>
        <p>Window functions allow you to perform calculations across rows related to the current row without collapsing results through aggregation. We'll explore practical applications including running totals, moving averages, and ranking/percentiles.</p>
        
        <h2>Common Table Expressions (CTEs)</h2>
        <p>CTEs make complex queries more readable and maintainable by breaking them into logical components. Learn how to use CTEs to simplify complex joins, create recursive queries, and improve query organization.</p>
        
        <h2>Advanced Joining Techniques</h2>
        <p>Beyond basic joins lie techniques like self-joins, lateral joins, and cross applies. These approaches unlock powerful analytical capabilities for hierarchical data, time-series analysis, and complex filtering scenarios.</p>
        
        <h2>Practical Examples</h2>
        <p>Throughout this article, we'll apply these techniques to real-world analytical challenges including cohort analysis, customer journey mapping, and inventory optimization problems.</p>
      `,
      tags: ["SQL", "Database Analytics", "Window Functions", "Common Table Expressions", "Advanced Joins"]
   }, {
      id: 4,
      title: "Streamlining Data Cleaning with Pandas",
      slug: "data-cleaning-pandas",
      category: "Metamaterials",
      date: "April 5, 2025",
      author: "Shubham",
      shortDescription: "Data cleaning often consumes up to 80% of a data analyst's time. This article shares practical techniques for efficiently handling missing data, outliers, and inconsistencies using the Metamaterials Pandas library.",
      fullContent: `
        <h2>The Data Cleaning Challenge</h2>
        <p>Data cleaning remains one of the most time-consuming aspects of data analysis. This article explores efficient approaches to streamlining your data cleaning workflow using the power and flexibility of Pandas.</p>
        
        <h2>Handling Missing Data Strategically</h2>
        <p>Missing data requires thoughtful treatment beyond simple deletion or imputation. We'll explore approaches for understanding patterns in missing data and implementing appropriate strategies that preserve analytical integrity.</p>
        
        <h2>Identifying and Addressing Outliers</h2>
        <p>Outliers can significantly impact analysis results, but distinguishing between true outliers and valuable signal requires care. Learn techniques for detecting outliers using statistical methods and domain knowledge.</p>
        
        <h2>Data Type Consistency and Conversion</h2>
        <p>Data type issues often create subtle bugs in analysis. This section covers patterns for systematically validating and converting data types, handling tricky scenarios like dates, currencies, and categorical data.</p>
        
        <h2>Functional Programming with Pandas</h2>
        <p>Moving beyond imperative data cleaning to functional approaches can make your code more maintainable and testable. We'll explore techniques for writing pipelines of transformations using methods like pipe, apply, and transform.</p>
      `,
      tags: ["Metamaterials", "Pandas", "Data Cleaning", "ETL", "Data Preparation"]
   }],
   k0 = ({
      viewMode: t = "list",
      params: e
   }) => {
      const r = No(),
         i = e || r,
         [, a] = ls(),
         [l, u] = b.useState(null);
      b.useEffect(() => {
         if (window.scrollTo(0, 0), t === "detail" && (i != null && i.slug)) {
            const v = b0.find(w => w.slug === i.slug);
            u(v || null)
         }
      }, [t, i == null ? void 0 : i.slug]);
      const d = {
            hidden: {
               opacity: 0
            },
            show: {
               opacity: 1,
               transition: {
                  staggerChildren: .1
               }
            }
         },
         p = {
            hidden: {
               opacity: 0,
               y: 20
            },
            show: {
               opacity: 1,
               y: 0
            }
         },
         m = () => l ? f.jsxs(Te.div, {
            initial: {
               opacity: 0
            },
            animate: {
               opacity: 1
            },
            className: "max-w-4xl mx-auto",
            children: [f.jsxs(Sr, {
               onClick: () => a("/blog"),
               variant: "ghost",
               className: "mb-6 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300 transition-colors duration-300",
               children: [f.jsx(Li, {
                  className: "mr-2 h-4 w-4"
               }), " Back to Blog"]
            }), f.jsx("div", {
               className: "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden",
               children: f.jsxs("div", {
                  className: "p-8",
                  children: [f.jsx("div", {
                     className: "text-xs font-semibold text-primary tracking-wider mb-2",
                     children: l.category
                  }), f.jsx("h1", {
                     className: "text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4",
                     children: l.title
                  }), f.jsxs("div", {
                     className: "flex flex-wrap items-center text-gray-500 mb-6 gap-4",
                     children: [f.jsxs("div", {
                        className: "flex items-center",
                        children: [f.jsx(bT, {
                           className: "h-4 w-4 mr-1"
                        }), f.jsx("span", {
                           className: "text-sm",
                           children: l.author
                        })]
                     }), f.jsxs("div", {
                        className: "flex items-center",
                        children: [f.jsx(kh, {
                           className: "h-4 w-4 mr-1"
                        }), f.jsx("span", {
                           className: "text-sm",
                           children: l.date
                        })]
                     })]
                  }), f.jsx("div", {
                     className: "prose prose-lg dark:prose-invert max-w-none mb-8 transition-colors duration-300",
                     dangerouslySetInnerHTML: {
                        __html: l.fullContent
                     }
                  }), f.jsxs("div", {
                     className: "border-t pt-6 mt-6",
                     children: [f.jsxs("h2", {
                        className: "text-xl font-bold mb-4 flex items-center",
                        children: [f.jsx(kx, {
                           className: "h-5 w-5 mr-2 text-primary"
                        }), "Tags"]
                     }), f.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: l.tags.map((v, w) => f.jsx("span", {
                           className: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300",
                           children: v
                        }, w))
                     })]
                  })]
               })
            })]
         }) : f.jsxs("div", {
            className: "text-center py-12",
            children: [f.jsx("h2", {
               className: "text-2xl font-bold text-gray-800",
               children: "Blog post not found"
            }), f.jsxs(Sr, {
               onClick: () => a("/blog"),
               className: "mt-4",
               children: [f.jsx(Li, {
                  className: "mr-2 h-4 w-4"
               }), " Back to Blog"]
            })]
         }),
         y = () => {
            const v = {
               "DATA SCIENCE": "from-blue-500 to-indigo-600",
               VISUALIZATION: "from-purple-500 to-pink-600",
               SQL: "from-green-500 to-emerald-600",
               PYTHON: "from-amber-500 to-red-600"
            };
            return f.jsxs(f.Fragment, {
               children: [f.jsxs(Te.div, {
                  initial: {
                     opacity: 0,
                     y: -20
                  },
                  animate: {
                     opacity: 1,
                     y: 0
                  },
                  transition: {
                     duration: .5
                  },
                  className: "text-center mb-12",
                  children: [f.jsx("h1", {
                     className: "text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300",
                     children: "Data Insights Blog"
                  }), f.jsx("p", {
                     className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300",
                     children: "Thoughts, tutorials, and insights on data analysis, visualization, and modern techniques"
                  })]
               }), f.jsx("div", {
                  className: "max-w-5xl mx-auto",
                  children: f.jsx(Te.div, {
                     variants: d,
                     initial: "hidden",
                     animate: "show",
                     className: "space-y-10",
                     children: b0.map(w => f.jsxs(Te.article, {
                        variants: p,
                        className: "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300",
                        children: [f.jsxs("div", {
                           className: `md:w-1/3 bg-gradient-to-r ${v[w.category]||"from-gray-500 to-gray-600"} text-white p-6 flex flex-col justify-between`,
                           children: [f.jsxs("div", {
                              children: [f.jsx("span", {
                                 className: "text-blue-100 text-sm font-medium",
                                 children: w.category
                              }), f.jsx("h3", {
                                 className: "text-xl font-bold mt-2",
                                 children: w.title
                              })]
                           }), f.jsx("div", {
                              className: "mt-4",
                              children: f.jsx("span", {
                                 className: "text-blue-100 text-sm",
                                 children: w.date
                              })
                           })]
                        }), f.jsxs("div", {
                           className: "md:w-2/3 p-6",
                           children: [f.jsx("p", {
                              className: "text-gray-600 dark:text-gray-300",
                              children: w.shortDescription
                           }), f.jsxs("button", {
                              onClick: () => a(`/blog/${w.slug}`),
                              className: "mt-4 text-primary font-medium hover:underline flex items-center",
                              children: ["Read Article ", f.jsx("span", {
                                 className: "ml-1",
                                 children: "→"
                              })]
                           })]
                        })]
                     }, w.slug))
                  })
               })]
            })
         };
      return f.jsxs(f.Fragment, {
         children: [f.jsx(Xc, {
            children: t === "detail" && l ? f.jsxs(f.Fragment, {
               children: [f.jsxs("title", {
                  children: [l.title, " | Blog | Shubham"]
               }), f.jsx("meta", {
                  name: "description",
                  content: l.shortDescription
               }), f.jsx("meta", {
                  name: "keywords",
                  content: `blog, ${l.category.toLowerCase()}, ${l.tags.join(", ")}`
               }), f.jsx("meta", {
                  property: "og:title",
                  content: l.title
               }), f.jsx("meta", {
                  property: "og:description",
                  content: l.shortDescription
               }), l.imageUrl && f.jsx("meta", {
                  property: "og:image",
                  content: l.imageUrl
               }), f.jsx("meta", {
                  property: "og:type",
                  content: "article"
               }), f.jsx("meta", {
                  name: "author",
                  content: l.author
               })]
            }) : f.jsxs(f.Fragment, {
               children: [f.jsx("title", {
                  children: "Data Insights Blog | Shubham"
               }), f.jsx("meta", {
                  name: "description",
                  content: "Thoughts, tutorials, and insights on data analysis, visualization, and modern techniques"
               }), f.jsx("meta", {
                  name: "keywords",
                  content: "data analysis, blog, data science, visualization, python, SQL"
               }), f.jsx("meta", {
                  property: "og:title",
                  content: "Data Insights Blog | Shubham"
               }), f.jsx("meta", {
                  property: "og:description",
                  content: "Thoughts, tutorials, and insights on data analysis, visualization, and modern techniques"
               }), f.jsx("meta", {
                  property: "og:type",
                  content: "website"
               })]
            })
         }), f.jsx(Te.div, {
            initial: {
               opacity: 0
            },
            animate: {
               opacity: 1
            },
            className: "pt-24 pb-16 container mx-auto px-4 sm:px-6 lg:px-8",
            children: t === "detail" ? m() : y()
         })]
      })
   };
var K4 = R0.useId || (() => {}),
   G4 = 0;

function v1(t) {
   const [e, r] = b.useState(K4());
   return ao(() => {
      r(i => i ?? String(G4++))
   }, [t]), e ? `radix-${e}` : ""
}
var Y4 = b.createContext(void 0);

function x1(t) {
   const e = b.useContext(Y4);
   return t || e || "ltr"
}
var Pf = "rovingFocusGroup.onEntryFocus",
   X4 = {
      bubbles: !1,
      cancelable: !0
   },
   Jc = "RovingFocusGroup",
   [dh, w1, J4] = Q0(Jc),
   [e3, b1] = Vc(Jc, [J4]),
   [t3, n3] = e3(Jc),
   k1 = b.forwardRef((t, e) => f.jsx(dh.Provider, {
      scope: t.__scopeRovingFocusGroup,
      children: f.jsx(dh.Slot, {
         scope: t.__scopeRovingFocusGroup,
         children: f.jsx(r3, {
            ...t,
            ref: e
         })
      })
   }));
k1.displayName = Jc;
var r3 = b.forwardRef((t, e) => {
      const {
         __scopeRovingFocusGroup: r,
         orientation: i,
         loop: a = !1,
         dir: l,
         currentTabStopId: u,
         defaultCurrentTabStopId: d,
         onCurrentTabStopIdChange: p,
         onEntryFocus: m,
         preventScrollOnEntryFocus: y = !1,
         ...v
      } = t, w = b.useRef(null), T = ts(e, w), P = x1(l), [S = null, C] = gh({
         prop: u,
         defaultProp: d,
         onChange: p
      }), [_, D] = b.useState(!1), F = Yn(m), $ = w1(r), z = b.useRef(!1), [U, Y] = b.useState(0);
      return b.useEffect(() => {
         const B = w.current;
         if (B) return B.addEventListener(Pf, F), () => B.removeEventListener(Pf, F)
      }, [F]), f.jsx(t3, {
         scope: r,
         orientation: i,
         dir: P,
         loop: a,
         currentTabStopId: S,
         onItemFocus: b.useCallback(B => C(B), [C]),
         onItemShiftTab: b.useCallback(() => D(!0), []),
         onFocusableItemAdd: b.useCallback(() => Y(B => B + 1), []),
         onFocusableItemRemove: b.useCallback(() => Y(B => B - 1), []),
         children: f.jsx(Nt.div, {
            tabIndex: _ || U === 0 ? -1 : 0,
            "data-orientation": i,
            ...v,
            ref: T,
            style: {
               outline: "none",
               ...t.style
            },
            onMouseDown: ut(t.onMouseDown, () => {
               z.current = !0
            }),
            onFocus: ut(t.onFocus, B => {
               const me = !z.current;
               if (B.target === B.currentTarget && me && !_) {
                  const ye = new CustomEvent(Pf, X4);
                  if (B.currentTarget.dispatchEvent(ye), !ye.defaultPrevented) {
                     const Le = $().filter(Se => Se.focusable),
                        X = Le.find(Se => Se.active),
                        ge = Le.find(Se => Se.id === S),
                        _e = [X, ge, ...Le].filter(Boolean).map(Se => Se.ref.current);
                     C1(_e, y)
                  }
               }
               z.current = !1
            }),
            onBlur: ut(t.onBlur, () => D(!1))
         })
      })
   }),
   S1 = "RovingFocusGroupItem",
   T1 = b.forwardRef((t, e) => {
      const {
         __scopeRovingFocusGroup: r,
         focusable: i = !0,
         active: a = !1,
         tabStopId: l,
         ...u
      } = t, d = v1(), p = l || d, m = n3(S1, r), y = m.currentTabStopId === p, v = w1(r), {
         onFocusableItemAdd: w,
         onFocusableItemRemove: T
      } = m;
      return b.useEffect(() => {
         if (i) return w(), () => T()
      }, [i, w, T]), f.jsx(dh.ItemSlot, {
         scope: r,
         id: p,
         focusable: i,
         active: a,
         children: f.jsx(Nt.span, {
            tabIndex: y ? 0 : -1,
            "data-orientation": m.orientation,
            ...u,
            ref: e,
            onMouseDown: ut(t.onMouseDown, P => {
               i ? m.onItemFocus(p) : P.preventDefault()
            }),
            onFocus: ut(t.onFocus, () => m.onItemFocus(p)),
            onKeyDown: ut(t.onKeyDown, P => {
               if (P.key === "Tab" && P.shiftKey) {
                  m.onItemShiftTab();
                  return
               }
               if (P.target !== P.currentTarget) return;
               const S = a3(P, m.orientation, m.dir);
               if (S !== void 0) {
                  if (P.metaKey || P.ctrlKey || P.altKey || P.shiftKey) return;
                  P.preventDefault();
                  let _ = v().filter(D => D.focusable).map(D => D.ref.current);
                  if (S === "last") _.reverse();
                  else if (S === "prev" || S === "next") {
                     S === "prev" && _.reverse();
                     const D = _.indexOf(P.currentTarget);
                     _ = m.loop ? o3(_, D + 1) : _.slice(D + 1)
                  }
                  setTimeout(() => C1(_))
               }
            })
         })
      })
   });
T1.displayName = S1;
var s3 = {
   ArrowLeft: "prev",
   ArrowUp: "prev",
   ArrowRight: "next",
   ArrowDown: "next",
   PageUp: "first",
   Home: "first",
   PageDown: "last",
   End: "last"
};

function i3(t, e) {
   return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t
}

function a3(t, e, r) {
   const i = i3(t.key, r);
   if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(i)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(i))) return s3[i]
}

function C1(t, e = !1) {
   const r = document.activeElement;
   for (const i of t)
      if (i === r || (i.focus({
            preventScroll: e
         }), document.activeElement !== r)) return
}

function o3(t, e) {
   return t.map((r, i) => t[(e + i) % t.length])
}
var l3 = k1,
   c3 = T1,
   hp = "Tabs",
   [u3, P3] = Vc(hp, [b1]),
   j1 = b1(),
   [d3, pp] = u3(hp),
   E1 = b.forwardRef((t, e) => {
      const {
         __scopeTabs: r,
         value: i,
         onValueChange: a,
         defaultValue: l,
         orientation: u = "horizontal",
         dir: d,
         activationMode: p = "automatic",
         ...m
      } = t, y = x1(d), [v, w] = gh({
         prop: i,
         onChange: a,
         defaultProp: l
      });
      return f.jsx(d3, {
         scope: r,
         baseId: v1(),
         value: v,
         onValueChange: w,
         orientation: u,
         dir: y,
         activationMode: p,
         children: f.jsx(Nt.div, {
            dir: y,
            "data-orientation": u,
            ...m,
            ref: e
         })
      })
   });
E1.displayName = hp;
var P1 = "TabsList",
   _1 = b.forwardRef((t, e) => {
      const {
         __scopeTabs: r,
         loop: i = !0,
         ...a
      } = t, l = pp(P1, r), u = j1(r);
      return f.jsx(l3, {
         asChild: !0,
         ...u,
         orientation: l.orientation,
         dir: l.dir,
         loop: i,
         children: f.jsx(Nt.div, {
            role: "tablist",
            "aria-orientation": l.orientation,
            ...a,
            ref: e
         })
      })
   });
_1.displayName = P1;
var N1 = "TabsTrigger",
   A1 = b.forwardRef((t, e) => {
      const {
         __scopeTabs: r,
         value: i,
         disabled: a = !1,
         ...l
      } = t, u = pp(N1, r), d = j1(r), p = M1(u.baseId, i), m = R1(u.baseId, i), y = i === u.value;
      return f.jsx(c3, {
         asChild: !0,
         ...d,
         focusable: !a,
         active: y,
         children: f.jsx(Nt.button, {
            type: "button",
            role: "tab",
            "aria-selected": y,
            "aria-controls": m,
            "data-state": y ? "active" : "inactive",
            "data-disabled": a ? "" : void 0,
            disabled: a,
            id: p,
            ...l,
            ref: e,
            onMouseDown: ut(t.onMouseDown, v => {
               !a && v.button === 0 && v.ctrlKey === !1 ? u.onValueChange(i) : v.preventDefault()
            }),
            onKeyDown: ut(t.onKeyDown, v => {
               [" ", "Enter"].includes(v.key) && u.onValueChange(i)
            }),
            onFocus: ut(t.onFocus, () => {
               const v = u.activationMode !== "manual";
               !y && !a && v && u.onValueChange(i)
            })
         })
      })
   });
A1.displayName = N1;
var D1 = "TabsContent",
   I1 = b.forwardRef((t, e) => {
      const {
         __scopeTabs: r,
         value: i,
         forceMount: a,
         children: l,
         ...u
      } = t, d = pp(D1, r), p = M1(d.baseId, i), m = R1(d.baseId, i), y = i === d.value, v = b.useRef(y);
      return b.useEffect(() => {
         const w = requestAnimationFrame(() => v.current = !1);
         return () => cancelAnimationFrame(w)
      }, []), f.jsx(mh, {
         present: a || y,
         children: ({
            present: w
         }) => f.jsx(Nt.div, {
            "data-state": y ? "active" : "inactive",
            "data-orientation": d.orientation,
            role: "tabpanel",
            "aria-labelledby": p,
            hidden: !w,
            id: m,
            tabIndex: 0,
            ...u,
            ref: e,
            style: {
               ...t.style,
               animationDuration: v.current ? "0s" : void 0
            },
            children: w && l
         })
      })
   });
I1.displayName = D1;

function M1(t, e) {
   return `${t}-trigger-${e}`
}

function R1(t, e) {
   return `${t}-content-${e}`
}
var f3 = E1,
   O1 = _1,
   L1 = A1,
   F1 = I1;
const h3 = f3,
   V1 = b.forwardRef(({
      className: t,
      ...e
   }, r) => f.jsx(O1, {
      ref: r,
      className: Ze("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", t),
      ...e
   }));
V1.displayName = O1.displayName;
const Ga = b.forwardRef(({
   className: t,
   ...e
}, r) => f.jsx(L1, {
   ref: r,
   className: Ze("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", t),
   ...e
}));
Ga.displayName = L1.displayName;
const Ya = b.forwardRef(({
   className: t,
   ...e
}, r) => f.jsx(F1, {
   ref: r,
   className: Ze("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", t),
   ...e
}));
Ya.displayName = F1.displayName;
const S0 = [{
      id: 1,
      title: "PhD in Structural Engineering",
      slug: "phd-qualifications",
      issuer: "Indian Institute of Technology Roorkee",
      date: "2020 - 2025",
      description: "This course introduced me to the fundamentals of data analytics, including data collection, cleaning, analysis, and visualization. I learned how to work with tools such as Excel, SQL, and Tableau, and developed a strong understanding of the data analysis process using the Ask, Prepare, Process, Analyze, Share, and Act framework. Through hands-on projects, I practiced transforming raw data into actionable insights and creating dashboards to support data-driven decision-making. This course laid a strong foundation for my journey in data analytics.",
      credentialLink: "https://www.coursera.org/account/accomplishments/professional-cert/X4S5GJVZBYE9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
      category: "qualifications",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      pdfUrl: "#",
      skills: ["Spreadsheet Software", "Data Management", "Data Analysis", "Business Communication", "General Statistics", "Business Analysis", "Data Visualization", "SQL"],
      duration: "24 weeks"
   }, {
      id: 2,
      title: "M.Tech in Structural Engineering",
      slug: "mtech-qualifications",
      issuer: "National Institute of Technology Hamirpur",
      date: "2018 - 2020",
      description: "In this course, I learned the core concepts of SQL used to manage and analyze data stored in relational databases. I practiced writing queries to retrieve, filter, sort, and aggregate data using commands like SELECT, WHERE, JOIN, GROUP BY, and ORDER BY. The course also covered subqueries, data manipulation with INSERT, UPDATE, and DELETE, as well as database design principles. This training strengthened my ability to work with large datasets and extract meaningful insights using SQL.",
      credentialLink: "https://coursera.org/share/8012cdaf4bf6f400f250fa35eecd1f95",
      category: "qualifications",
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      pdfUrl: "#",
      skills: ["Databases", "Critical Thinking", "Data Analysis", "Data Management", "Data Science", "SQL (Structured Query Language)", "Database (DBMS)"],
      duration: "27 hours"
   }, {
      id: 3,
      title: "Young Scientist Award",
      slug: "young-scientist",
      issuer: "Indian Society of Theoretical and Applied Mechanics (ISTAM)",
      date: "2023",
      description: "A society constituted by IIT Kharagpur in 1955.",
      credentialLink: "https://www.udemy.com/certificate/UC-aeff1a93-cde0-41af-8315-af4ebff31b11/",
      category: "achievement",
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      pdfUrl: "#",
      skills: ["Microsoft Excel", "Excel Charts", "Spreadsheets", "Formulas", "Shortcuts", "Macros", "Tips-Tricks"],
      duration: "9.5 hours"
   }, {
      id: 4,
      title: "International Travel Scheme (ITS)",
      slug: "i-t-s",
      issuer: "Anusandhan National Research Foundation (ANRF), Science & Engineering Research Board (SERB), Govt. of India",
      date: "2024",
      description: "Financial grant awarded to present work at ICCS27 conference, Italy.",
      credentialLink: "#",
      category: "achievement",
      imageUrl: "https://images.unsplash.com/photo-1546707012-c46675f12716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      skills: ["Power Query", "Data Cleaning", "Data Transformation", "Data Modeling", "DAX", "Dashboard Design", "Trend Analysis", "Feature Engineering", "Visualization", "Bridge engg", "Revenue Analysis", "Budget Trends", "Storytelling with Data", "Interactive Dashboards", "Drill-Through Features"]
   }, {
      id: 5,
      title: "Good international conference support",
      slug: "dce-grant",
      issuer: "Department of Civil Engineering, IIT Roorkee",
      date: "2025",
      description: "Financial grant of 1.5 Lakhs awarded by Department of Civil Engineering, IIT Roorkee to present work in international conference on account for publishing two Q1-research papers as a first author.",
      credentialLink: "#",
      category: "achievement",
      imageUrl: "https://images.unsplash.com/photo-1546707012-c46675f12716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      skills: ["Power Query", "Data Cleaning", "Data Transformation", "Data Modeling", "DAX", "Dashboard Design", "Trend Analysis", "Feature Engineering", "Visualization", "Bridge engg", "Revenue Analysis", "Budget Trends", "Storytelling with Data", "Interactive Dashboards", "Drill-Through Features"]
   }, {
      id: 6,
      title: "Partial support to attend good international conference",
      slug: "dora-grant",
      issuer: "Dean of Resources and Alumni Affairs (DORA), IIT Roorkee",
      date: "2024",
      description: "Financial grant of Rs. 75000 awarded by Dean of Resources and Alumni Affairs (DORA), IIT Roorkee to present work in an international conference on account for publishing Q1-research papers in reputed journals as a first author.",
      credentialLink: "https://www.udemy.com/certificate/UC-aeff1a93-cde0-41af-8315-af4ebff31b11/",
      category: "achievement",
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      pdfUrl: "#",
      skills: ["Microsoft Excel", "Excel Charts", "Spreadsheets", "Formulas", "Shortcuts", "Macros", "Tips-Tricks"],
      duration: "9.5 hours"
   }, {
      id: 7,
      title: "Ministry of Education fellowship",
      slug: "mhrd-phd",
      issuer: "IIT Roorkee",
      date: "2023",
      description: "Awarded for pursuing Ph.D at IIT Roorkee.",
      credentialLink: "#",
      category: "achievement",
      imageUrl: "https://images.unsplash.com/photo-1546707012-c46675f12716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      skills: ["Power Query", "Data Cleaning", "Data Transformation", "Data Modeling", "DAX", "Dashboard Design", "Trend Analysis", "Feature Engineering", "Visualization", "Bridge engg", "Revenue Analysis", "Budget Trends", "Storytelling with Data", "Interactive Dashboards", "Drill-Through Features"]
   }, {
      id: 8,
      title: "Ministry of Education fellowship",
      slug: "mhrd-mtech",
      issuer: "NIT Hamirpur",
      date: "2018",
      description: "Awarded for pursuing M.Tech at NIT Hamirpur.",
      credentialLink: "#",
      category: "achievement",
      imageUrl: "https://images.unsplash.com/photo-1546707012-c46675f12716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      skills: ["Power Query", "Data Cleaning", "Data Transformation", "Data Modeling", "DAX", "Dashboard Design", "Trend Analysis", "Feature Engineering", "Visualization", "Bridge engg", "Revenue Analysis", "Budget Trends", "Storytelling with Data", "Interactive Dashboards", "Drill-Through Features"]
   }, {
      id: 9,
      title: "Senior Research Fellowship",
      slug: "senior-research-fellowship",
      issuer: "Defence Research and Development Laboratory (DRDO) Hyderabad",
      date: "August 2022 - July 2023",
      description: "Awarded for pursuing research at IIT Roorkee for CARS project sponsored by Defence Research and Development Laboratory (DRDO) Hyderabad.",
      credentialLink: "#",
      category: "achievement",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      pdfUrl: "#",
      skills: ["SQL", "MySQL", "PostgreSQL", "Database Management", "Problem Solving", "Reporting", "Data Workflow Design", "Startup Adaptability", "Team Collaboration"]
   }, {
      id: 10,
      title: "Junior Research Fellowship",
      slug: "junior-research-fellowship",
      issuer: "Defence Research and Development Laboratory (DRDO) Hyderabad",
      date: "August 2020 - August 2022",
      description: "Awarded for pursuing research at IIT Roorkee for CARS project sponsored by Defence Research and Development Laboratory (DRDO) Hyderabad.",
      credentialLink: "#",
      category: "achievement",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      pdfUrl: "#",
      skills: ["SQL", "Microsoft Excel", "Spreadsheets", "Microsoft Bridge engg", "Python", "Data Workflow Optimization", "Marketing Performance Analysis", "Financial Analysis", "Operational Efficiency", "Cross-functional Collaboration", "Report Automation"]
   }, {
      id: 11,
      title: "Senior Research Fellow",
      slug: "senior-research-fellow",
      issuer: "Defence Research and Development Laboratory (DRDO) Hyderabad",
      date: "August 2022 - July 2023",
      description: "As an SQL Developer Intern at Nirjai Technologies, I am responsible for managing and optimizing database systems related to pathology lab data workflows. I design robust SQL queries and contribute to solving real-time business problems through efficient database solutions and reporting systems. The internship involves regular participation in daily and weekend planning meetings, allowing me to adapt to the dynamic, fast-paced startup environment. This role has enhanced my ability to deliver under pressure while supporting the company's core data infrastructure.",
      credentialLink: "#",
      category: "experience",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      pdfUrl: "#",
      skills: ["SQL", "MySQL", "PostgreSQL", "Database Management", "Problem Solving", "Reporting", "Data Workflow Design", "Startup Adaptability", "Team Collaboration"]
   }, {
      id: 12,
      title: "Junior Research Fellow",
      slug: "junior-research-fellow",
      issuer: "Defence Research and Development Laboratory (DRDO) Hyderabad",
      date: "August 2020 - August 2022",
      description: "Led data-driven initiatives to improve operational efficiency and business insights. Utilized Bridge engg to develop interactive dashboards tracking real-time KPIs. Automated daily reporting tasks using Python, significantly reducing manual effort. Leveraged SQL, Excel, and Google Sheets to clean, analyze, and visualize large datasets from platforms like Shopify, Facebook Ads, and Google Ads, enabling informed marketing and business decisions. Collaborated across departments to streamline Return-to-Origin (RTO) processes and identified cost-saving opportunities through financial and operational analysis.",
      credentialLink: "#",
      category: "experience",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      pdfUrl: "#",
      skills: ["SQL", "Microsoft Excel", "Spreadsheets", "Microsoft Bridge engg", "Python", "Data Workflow Optimization", "Marketing Performance Analysis", "Financial Analysis", "Operational Efficiency", "Cross-functional Collaboration", "Report Automation"]
   }, {
      id: 13,
      title: "Guest lecturer",
      slug: "guest-lecturer-1",
      issuer: "Pusa Institute of Technology (Govt. of NCT)",
      date: "August 2017 - June 2018",
      description: "During my internship at Wise Wealth Management, I gained practical exposure to financial analysis and strategic wealth management. I collaborated with senior financial advisors on projects related to investment planning, client portfolio reviews, and financial reporting. This experience allowed me to apply analytical thinking to real-world data, understand market trends, and contribute to optimizing investment strategies. Working in a professional environment also strengthened my communication and client-handling skills, providing a strong foundation for data-driven decision-making in finance.",
      credentialLink: "#",
      category: "experience",
      imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      pdfUrl: "#",
      skills: ["Financial Analysis", "Investment Planning", "Client Data Management", "Data Interpretation", "Reporting", "Analytical Thinking", "Microsoft Excel"]
   }, {
      id: 14,
      title: "Guest lecturer",
      slug: "guest-lecturer-2",
      issuer: "GB Pant Institute of Technology (Govt. of NCT)",
      date: "August 2017 - June 2018",
      description: "In April 2021, I contributed as a volunteer event coordinator for Chembola, an event organized by the Chemical Society of Deshbandhu College. My responsibilities included supporting the planning, logistics, and on-ground coordination on the day of the event. This hands-on experience enabled me to work as part of a team, handle responsibilities under time constraints, and ensure a successful and engaging experience for all participants. It was a valuable opportunity to build my teamwork, communication, and organizational skills in a real-world event setting.",
      credentialLink: "#",
      category: "experience",
      imageUrl: "https://images.unsplash.com/photo-1581093588401-05c1e117f709",
      pdfUrl: "#",
      skills: ["Event Coordination", "Team Collaboration", "Time Management", "Communication Skills", "Organizational Skills", "Volunteer Experience"]
   }, {
      id: 15,
      title: "Intern",
      slug: "intern",
      issuer: "CSIR-Central Road Research Institute, New Delhi",
      date: "April 2015 - September 2015",
      description: "In April 2022, I served as the Student Coordinator for the National Science Day Event at Deshbandhu College, where I played a key role in the creative and operational aspects of the program. I was recognized for designing visually impactful posters that effectively promoted the event and increased student engagement. I also led social media promotion efforts, which helped surpass expected attendance levels. Through efficient planning and coordination, the event was executed smoothly, earning me a Certificate of Recognition for excellence in both creative design and event organization. This experience highlighted my skills in creativity, communication, and event promotion.",
      credentialLink: "#",
      category: "experience",
      imageUrl: "https://images.unsplash.com/photo-1581093588401-05c1e117f709",
      pdfUrl: "#",
      skills: ["Poster Design", "Event Coordination", "Creativity", "Communication Skills", "Social Media Promotion", "Team Collaboration", "Planning", "Marketing"]
   }, {
      id: 16,
      title: "Reviewer",
      slug: "reviewer",
      issuer: "Applied Mathematical Modelling ",
      date: "Apr 2022-",
      description: "Q1-SCI indexed journal.",
      credentialLink: "#",
      category: "extracurricular",
      imageUrl: "https://images.unsplash.com/photo-1581093588401-05c1e117f709",
      pdfUrl: "#",
      skills: ["Project Management", "Team Collaboration", "Problem Solving", "Event Coordination", "Communication Skills", "Adaptability", "Time Management", "Leadership"]
   }, {
      id: 17,
      title: "Guest lecture delivered",
      slug: "guest-lecture",
      issuer: "Government Engineering College, Arwal",
      date: "2023",
      description: "Bridge health assessment through instrumentation.",
      credentialLink: "#",
      category: "extracurricular",
      imageUrl: "https://images.unsplash.com/photo-1581093588401-05c1e117f709",
      pdfUrl: "#",
      skills: ["Project Management", "Team Collaboration", "Problem Solving", "Event Coordination", "Communication Skills", "Adaptability", "Time Management", "Leadership"]
   }, {
      id: 18,
      title: "Training program attended",
      slug: "training-1",
      issuer: "CSIR-Central Road Research Institute, New Delhi",
      date: "2024",
      description: "Design of bridge structure and foundation.",
      credentialLink: "#",
      category: "extracurricular",
      imageUrl: "https://images.unsplash.com/photo-1581093588401-05c1e117f709",
      pdfUrl: "#",
      skills: ["Project Management", "Team Collaboration", "Problem Solving", "Event Coordination", "Communication Skills", "Adaptability", "Time Management", "Leadership"]
   }, {
      id: 19,
      title: "Training program attended",
      slug: "training-2",
      issuer: "CSIR-Central Road Research Institute, New Delhi",
      date: "2024",
      description: "Quality Assurance, Health Assessment, and Rehabilitation of Bridges.",
      credentialLink: "#",
      category: "extracurricular",
      imageUrl: "https://images.unsplash.com/photo-1581093588401-05c1e117f709",
      pdfUrl: "#",
      skills: ["Project Management", "Team Collaboration", "Problem Solving", "Event Coordination", "Communication Skills", "Adaptability", "Time Management", "Leadership"]
   }, {
      id: 20,
      title: "Country visited outside India",
      slug: "foreign-visits",
      issuer: "UK, Italy and Switzerland",
      date: "2023 and 2024",
      description: "For presenting research work.",
      credentialLink: "#",
      category: "extracurricular",
      imageUrl: "https://images.unsplash.com/photo-1581093588401-05c1e117f709",
      pdfUrl: "#",
      skills: ["Project Management", "Team Collaboration", "Problem Solving", "Event Coordination", "Communication Skills", "Adaptability", "Time Management", "Leadership"]
   }],
   T0 = ({
      viewMode: t = "list",
      params: e
   }) => {
      const r = No(),
         i = e || r,
         [, a] = ls(),
         l = fS(),
         d = new URLSearchParams(l).get("tab"),
         [p, m] = b.useState(d || "qualifications"),
         [y, v] = b.useState(null);
      b.useEffect(() => {
         if (window.scrollTo(0, 0), t === "detail" && (i != null && i.slug)) {
            const _ = S0.find(D => D.slug === i.slug);
            v(_ || null)
         } else d && m(d)
      }, [t, i == null ? void 0 : i.slug, d]);
      const w = S0.filter(_ => p === "qualifications" ? _.category === "qualifications" : p === "achievements" ? _.category === "achievement" : p === "experience" ? _.category === "experience" : p === "extracurricular" ? _.category === "extracurricular" : !0),
         T = {
            hidden: {
               opacity: 0
            },
            show: {
               opacity: 1,
               transition: {
                  staggerChildren: .1
               }
            }
         },
         P = {
            hidden: {
               opacity: 0,
               y: 20
            },
            show: {
               opacity: 1,
               y: 0
            }
         },
         S = () => {
            if (!y) return f.jsxs("div", {
               className: "text-center py-12",
               children: [f.jsx("h2", {
                  className: "text-2xl font-bold text-gray-800",
                  children: "Certificate not found"
               }), f.jsxs(Sr, {
                  onClick: () => a("/certificates"),
                  className: "mt-4",
                  children: [f.jsx(Li, {
                     className: "mr-2 h-4 w-4"
                  }), " Back to Certificates"]
               })]
            });
            const D = (() => {
                  switch (y.category) {
                     case "qualifications":
                        return "primary";
                     case "achievement":
                        return "amber";
                     case "experience":
                        return "green";
                     case "extracurricular":
                        return "red";
                     default:
                        return "primary"
                  }
               })(),
               F = {
                  text: `text-${D}-600`
               };
            return f.jsxs(Te.div, {
               initial: {
                  opacity: 0
               },
               animate: {
                  opacity: 1
               },
               className: "max-w-4xl mx-auto",
               children: [f.jsxs(Sr, {
                  onClick: () => a(`/certificates?tab=${y.category==="experience"?"experience":y.category==="achievement"?"achievements":y.category==="extracurricular"?"extracurricular":"qualifications"}`),
                  variant: "ghost",
                  className: "mb-6 hover:bg-gray-100",
                  children: [f.jsx(Li, {
                     className: "mr-2 h-4 w-4"
                  }), " Back to Certificates"]
               }), f.jsxs("div", {
                  className: "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden",
                  children: [y.imageUrl && f.jsxs("div", {
                     className: "w-full h-64 md:h-80 relative",
                     children: [f.jsx("img", {
                        src: y.imageUrl,
                        alt: y.title,
                        className: "w-full h-full object-cover"
                     }), f.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end",
                        children: f.jsxs("div", {
                           className: "p-6 text-white",
                           children: [f.jsx("span", {
                              className: `px-3 py-1 text-xs font-medium rounded-full mb-2 inline-block bg-${D}-500`,
                              children: y.category === "qualifications" ? "Qualifications" : y.category === "achievement" ? "Achievement" : "Experience"
                           }), f.jsx("h1", {
                              className: "text-3xl font-bold",
                              children: y.title
                           })]
                        })
                     })]
                  }), f.jsxs("div", {
                     className: "p-8",
                     children: [!y.imageUrl && f.jsxs(f.Fragment, {
                        children: [f.jsx("div", {
                           className: `text-xs font-semibold ${F.text} tracking-wider mb-2`,
                           children: y.category === "qualifications" ? "Qualifications" : y.category === "achievement" ? "Achievement" : "Experience"
                        }), f.jsx("h1", {
                           className: "text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300",
                           children: y.title
                        })]
                     }), f.jsxs("div", {
                        className: "flex flex-wrap items-center text-gray-500 dark:text-gray-400 mt-6 mb-6 gap-4 transition-colors duration-300",
                        children: [f.jsxs("div", {
                           className: "flex items-center",
                           children: [f.jsx(mc, {
                              className: `h-4 w-4 mr-1 ${F.text}`
                           }), f.jsx("span", {
                              className: "text-sm font-medium",
                              children: y.issuer
                           })]
                        }), f.jsxs("div", {
                           className: "flex items-center",
                           children: [f.jsx(kh, {
                              className: "h-4 w-4 mr-1"
                           }), f.jsx("span", {
                              className: "text-sm",
                              children: y.date
                           })]
                        }), y.duration && f.jsxs("div", {
                           className: "flex items-center",
                           children: [f.jsx(fT, {
                              className: "h-4 w-4 mr-1"
                           }), f.jsx("span", {
                              className: "text-sm",
                              children: y.duration
                           })]
                        })]
                     }), f.jsx("div", {
                        className: "prose prose-lg dark:prose-invert max-w-none mb-8 transition-colors duration-300",
                        children: f.jsx("p", {
                           className: "dark:text-gray-300",
                           children: y.description
                        })
                     }), y.skills && f.jsxs("div", {
                        className: "mb-8",
                        children: [f.jsxs("h2", {
                           className: "text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white transition-colors duration-300",
                           children: [f.jsx(kx, {
                              className: `h-5 w-5 mr-2 ${F.text}`
                           }), "Skills"]
                        }), f.jsx("div", {
                           className: "flex flex-wrap gap-2",
                           children: y.skills.map(($, z) => f.jsx("span", {
                              className: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300",
                              children: $
                           }, z))
                        })]
                     }), f.jsxs("div", {
                        className: "flex flex-wrap gap-4 mt-8",
                        children: [y.credentialLink && y.credentialLink !== "#" && f.jsxs("a", {
                           href: y.credentialLink,
                           target: "_blank",
                           rel: "noreferrer",
                           className: `inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-${D}-600 hover:bg-${D}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${D}-500`,
                           children: [f.jsx(pT, {
                              className: "h-4 w-4 mr-2"
                           }), "View Credential"]
                        }), y.pdfUrl && y.pdfUrl !== "#" && f.jsxs("a", {
                           href: y.pdfUrl,
                           target: "_blank",
                           rel: "noreferrer",
                           className: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
                           children: [f.jsx(hT, {
                              className: "h-4 w-4 mr-2"
                           }), "Download Certificate"]
                        })]
                     })]
                  })]
               })]
            })
         },
         C = () => f.jsxs(f.Fragment, {
            children: [f.jsxs(Te.div, {
               initial: {
                  opacity: 0,
                  y: -20
               },
               animate: {
                  opacity: 1,
                  y: 0
               },
               transition: {
                  duration: .5
               },
               className: "text-center mb-12",
               children: [f.jsx("h1", {
                  className: "text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300",
                  children: "Certificates & Credentials"
               }), f.jsx("p", {
                  className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300",
                  children: "Qualifications, professional experience and achievements"
               })]
            }), f.jsx("div", {
               className: "max-w-4xl mx-auto",
               children: f.jsxs(h3, {
                  defaultValue: p,
                  value: p,
                  onValueChange: m,
                  className: "w-full",
                  children: [f.jsxs(V1, {
                     className: "grid w-full grid-cols-4 mb-8",
                     children: [f.jsx(Ga, {
                        value: "qualifications",
                        children: "Qualifications"
                     }), f.jsx(Ga, {
                        value: "achievements",
                        children: "Achievements"
                     }), f.jsx(Ga, {
                        value: "experience",
                        children: "Experience"
                     }), f.jsx(Ga, {
                        value: "extracurricular",
                        children: "Extracurricular"
                     })]
                  }), f.jsx(Ya, {
                     value: "qualifications",
                     className: "mt-0",
                     children: f.jsx(Te.div, {
                        variants: T,
                        initial: "hidden",
                        animate: "show",
                        className: "grid grid-cols-1 gap-6",
                        children: w.map(_ => f.jsx(Te.div, {
                           variants: P,
                           className: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",
                           children: f.jsxs("div", {
                              className: "p-6 border-l-4 border-primary",
                              children: [f.jsxs("div", {
                                 className: "flex justify-between items-start",
                                 children: [f.jsxs("div", {
                                    children: [f.jsx("h3", {
                                       className: "text-xl font-bold text-gray-900",
                                       children: _.title
                                    }), f.jsx("p", {
                                       className: "text-primary font-medium mt-1",
                                       children: _.issuer
                                    })]
                                 }), f.jsx("div", {
                                    className: "text-right",
                                    children: f.jsx("span", {
                                       className: "bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded",
                                       children: _.date
                                    })
                                 })]
                              }), f.jsx("p", {
                                 className: "text-gray-600 mt-4",
                                 children: _.description
                              }), f.jsxs("div", {
                                 className: "mt-4 flex justify-between items-center",
                                 children: [f.jsxs("a", {
                                    href: _.credentialLink,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "text-primary font-medium hover:underline inline-flex items-center",
                                    children: ["View Credential ", f.jsx("span", {
                                       className: "ml-1",
                                       children: "→"
                                    })]
                                 }), f.jsx("button", {
                                    onClick: () => a(`/certificate/${_.slug}`),
                                    className: "text-gray-600 hover:text-primary transition-colors",
                                    children: "Details"
                                 })]
                              })]
                           })
                        }, _.slug))
                     })
                  }), f.jsx(Ya, {
                     value: "achievements",
                     className: "mt-0",
                     children: f.jsx(Te.div, {
                        variants: T,
                        initial: "hidden",
                        animate: "show",
                        className: "grid grid-cols-1 gap-6",
                        children: w.map(_ => f.jsx(Te.div, {
                           variants: P,
                           className: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",
                           children: f.jsxs("div", {
                              className: "p-6 border-l-4 border-amber-500",
                              children: [f.jsxs("div", {
                                 className: "flex justify-between items-start",
                                 children: [f.jsxs("div", {
                                    children: [f.jsx("h3", {
                                       className: "text-xl font-bold text-gray-900",
                                       children: _.title
                                    }), f.jsx("p", {
                                       className: "text-amber-600 font-medium mt-1",
                                       children: _.issuer
                                    })]
                                 }), f.jsx("div", {
                                    className: "text-right",
                                    children: f.jsx("span", {
                                       className: "bg-amber-50 text-amber-800 text-sm font-medium px-3 py-1 rounded",
                                       children: _.date
                                    })
                                 })]
                              }), f.jsx("p", {
                                 className: "text-gray-600 mt-4",
                                 children: _.description
                              }), f.jsxs("div", {
                                 className: "mt-4 flex justify-between items-center",
                                 children: [f.jsxs("a", {
                                    href: _.credentialLink,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "text-amber-600 font-medium hover:underline inline-flex items-center",
                                    children: ["View Achievement ", f.jsx("span", {
                                       className: "ml-1",
                                       children: "→"
                                    })]
                                 }), f.jsx("button", {
                                    onClick: () => a(`/certificate/${_.slug}`),
                                    className: "text-gray-600 hover:text-amber-600 transition-colors",
                                    children: "Details"
                                 })]
                              })]
                           })
                        }, _.slug))
                     })
                  }), f.jsx(Ya, {
                     value: "experience",
                     className: "mt-0",
                     children: f.jsx(Te.div, {
                        variants: T,
                        initial: "hidden",
                        animate: "show",
                        className: "grid grid-cols-1 gap-6",
                        children: w.map(_ => f.jsx(Te.div, {
                           variants: P,
                           className: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",
                           children: f.jsxs("div", {
                              className: "p-6 border-l-4 border-green-500",
                              children: [f.jsxs("div", {
                                 className: "flex justify-between items-start",
                                 children: [f.jsxs("div", {
                                    children: [f.jsx("h3", {
                                       className: "text-xl font-bold text-gray-900",
                                       children: _.title
                                    }), f.jsx("p", {
                                       className: "text-green-600 font-medium mt-1",
                                       children: _.issuer
                                    })]
                                 }), f.jsx("div", {
                                    className: "text-right",
                                    children: f.jsx("span", {
                                       className: "bg-green-50 text-green-800 text-sm font-medium px-3 py-1 rounded",
                                       children: _.date
                                    })
                                 })]
                              }), f.jsx("p", {
                                 className: "text-gray-600 mt-4",
                                 children: _.description
                              }), f.jsxs("div", {
                                 className: "mt-4 flex justify-between items-center",
                                 children: [f.jsxs("a", {
                                    href: _.credentialLink,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "text-green-600 font-medium hover:underline inline-flex items-center",
                                    children: ["Read more", f.jsx("span", {
                                       className: "ml-1",
                                       children: "→"
                                    })]
                                 }), f.jsx("button", {
                                    onClick: () => a(`/certificate/${_.slug}`),
                                    className: "text-gray-600 hover:text-green-600 transition-colors",
                                    children: "Details"
                                 })]
                              })]
                           })
                        }, _.slug))
                     })
                  }), f.jsx(Ya, {
                     value: "extracurricular",
                     className: "mt-0",
                     children: f.jsx(Te.div, {
                        variants: T,
                        initial: "hidden",
                        animate: "show",
                        className: "grid grid-cols-1 gap-6",
                        children: w.map(_ => f.jsx(Te.div, {
                           variants: P,
                           className: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",
                           children: f.jsxs("div", {
                              className: "p-6 border-l-4 border-red-500",
                              children: [f.jsxs("div", {
                                 className: "flex justify-between items-start",
                                 children: [f.jsxs("div", {
                                    children: [f.jsx("h3", {
                                       className: "text-xl font-bold text-gray-900",
                                       children: _.title
                                    }), f.jsx("p", {
                                       className: "text-red-600 font-medium mt-1",
                                       children: _.issuer
                                    })]
                                 }), f.jsx("div", {
                                    className: "text-right",
                                    children: f.jsx("span", {
                                       className: "bg-red-50 text-red-800 text-sm font-medium px-3 py-1 rounded",
                                       children: _.date
                                    })
                                 })]
                              }), f.jsx("p", {
                                 className: "text-gray-600 mt-4",
                                 children: _.description
                              }), f.jsxs("div", {
                                 className: "mt-4 flex justify-between items-center",
                                 children: [f.jsxs("a", {
                                    href: _.credentialLink,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "text-red-600 font-medium hover:underline inline-flex items-center",
                                    children: ["View Certificate ", f.jsx("span", {
                                       className: "ml-1",
                                       children: "→"
                                    })]
                                 }), f.jsx("button", {
                                    onClick: () => a(`/certificate/${_.slug}`),
                                    className: "text-gray-600 hover:text-red-600 transition-colors",
                                    children: "Details"
                                 })]
                              })]
                           })
                        }, _.slug))
                     })
                  })]
               })
            })]
         });
      return f.jsxs(f.Fragment, {
         children: [f.jsx(Xc, {
            children: t === "detail" && y ? f.jsxs(f.Fragment, {
               children: [f.jsxs("title", {
                  children: [y.title, " | Certificate | Shubham"]
               }), f.jsx("meta", {
                  name: "description",
                  content: y.description
               }), f.jsx("meta", {
                  name: "keywords",
                  content: `certificate, ${y.category}, ${y.issuer}, ${y.skills.join(", ")}`
               }), f.jsx("meta", {
                  property: "og:title",
                  content: `${y.title} | ${y.issuer}`
               }), f.jsx("meta", {
                  property: "og:description",
                  content: y.description
               }), y.imageUrl && f.jsx("meta", {
                  property: "og:image",
                  content: y.imageUrl
               }), f.jsx("meta", {
                  property: "og:type",
                  content: "article"
               })]
            }) : f.jsxs(f.Fragment, {
               children: [f.jsx("title", {
                  children: "Certificates & Credentials | Shubham"
               }), f.jsx("meta", {
                  name: "description",
                  content: "Qualifications, achievements, and professional experience in data analysis and related fields"
               }), f.jsx("meta", {
                  name: "keywords",
                  content: "certificates, credentials, qualifications, achievements, qualifications, data analysis"
               }), f.jsx("meta", {
                  property: "og:title",
                  content: "Certificates & Credentials | Shubham"
               }), f.jsx("meta", {
                  property: "og:description",
                  content: "Qualifications, achievements, and professional experience in data analysis and related fields"
               }), f.jsx("meta", {
                  property: "og:type",
                  content: "website"
               })]
            })
         }), f.jsx(Te.div, {
            initial: {
               opacity: 0
            },
            animate: {
               opacity: 1
            },
            className: "pt-24 pb-16 container mx-auto px-4 sm:px-6 lg:px-8",
            children: t === "detail" ? S() : C()
         })]
      })
   };

function p3({
   className: t
}) {
   const [e, r] = b.useState(!1);
   b.useEffect(() => {
      const a = localStorage.getItem("theme");
      if (a) r(a === "dark"), document.documentElement.classList.toggle("dark", a === "dark");
      else {
         const l = window.matchMedia("(prefers-color-scheme: dark)").matches;
         r(l), document.documentElement.classList.toggle("dark", l)
      }
   }, []);
   const i = () => {
      const a = !e;
      r(a), document.documentElement.classList.toggle("dark", a), localStorage.setItem("theme", a ? "dark" : "light"), console.log("Theme toggled to:", a ? "dark" : "light")
   };
   return f.jsx(Sr, {
      variant: "ghost",
      size: "icon",
      onClick: i,
      className: t,
      "aria-label": "Toggle dark mode",
      children: e ? f.jsx(wT, {
         className: "h-[1.2rem] w-[1.2rem]"
      }) : f.jsx(vT, {
         className: "h-[1.2rem] w-[1.2rem]"
      })
   })
}
const m3 = () => {
      const [t, e] = b.useState(!1), [r, i] = b.useState("home"), [a, l] = b.useState(!1), [u, d] = b.useState(!1), [p, m] = ls(), y = b.useRef(null), v = b.useRef(null), w = () => {
         e(!t)
      }, T = () => {
         e(!1)
      }, P = p === "/", S = () => {
         T(), m("/"), setTimeout(() => {
            window.scrollTo({
               top: 0,
               behavior: "smooth"
            })
         }, 100)
      }, C = U => {
         if (!P) S(), setTimeout(() => {
            const Y = document.getElementById(U);
            if (Y) {
               i(U);
               const B = Y.offsetTop - 80;
               window.scrollTo({
                  top: B,
                  behavior: "smooth"
               })
            }
         }, 300);
         else {
            const Y = document.getElementById(U);
            if (Y) {
               T(), i(U);
               const B = Y.offsetTop - 80;
               window.scrollTo({
                  top: B,
                  behavior: "smooth"
               })
            }
         }
      }, _ = U => {
         l(!1), T(), m(`/category/${U.toLowerCase().replace(" ","-")}`)
      }, D = U => {
         d(!1), T(), m(`/certificates?tab=${U.toLowerCase()}`)
      }, F = U => {
         T(), m(U)
      };
      b.useEffect(() => {
         const U = Y => {
            y.current && !y.current.contains(Y.target) && l(!1), v.current && !v.current.contains(Y.target) && d(!1)
         };
         return document.addEventListener("mousedown", U), () => document.removeEventListener("mousedown", U)
      }, []), b.useEffect(() => {
         if (p.startsWith("/case-stud")) i("case-studies");
         else if (p.startsWith("/blog")) i("blog");
         else if (p.startsWith("/certificate")) i("certificates");
         else if (p.startsWith("/project") || p.startsWith("/category")) i("projects");
         else if (p === "/") {
            const U = () => {
               const Y = ["home", "projects", "skills", "about", "contact"],
                  B = window.scrollY + 100;
               for (const me of Y) {
                  const ye = document.getElementById(me);
                  if (ye) {
                     const Le = ye.offsetTop,
                        X = ye.offsetHeight;
                     if (B >= Le && B < Le + X) {
                        i(me);
                        break
                     }
                  }
               }
            };
            return window.addEventListener("scroll", U), U(), () => window.removeEventListener("scroll", U)
         }
      }, [p]);
      const $ = ({
            section: U,
            label: Y
         }) => f.jsxs("button", {
            onClick: () => C(U),
            className: Ze("relative nav-item text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors px-1 py-2", r === U ? "text-primary dark:text-primary" : ""),
            children: [Y, f.jsx("span", {
               className: Ze("absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300", r === U ? "w-full" : "w-0")
            })]
         }),
         z = ["Topology optimization", "Metamaterials", "Machine Learning", "Bridge engg", "Health monitoring", "Uncertainty", "Bandgap metamaterials"];
      return f.jsxs("header", {
         className: "bg-white dark:bg-gray-900 shadow-sm fixed w-full top-0 z-50 transition-colors duration-300",
         children: [f.jsxs("nav", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center",
            children: [f.jsxs("button", {
               onClick: S,
               className: "flex items-center",
               children: [f.jsx("div", {
                  className: "w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mr-2",
                  children: "S"
               }), f.jsxs("span", {
                  className: "text-2xl font-bold",
                  children: [f.jsx("span", {
                     className: "text-primary dark:text-primary",
                     children: "Shu"
                  }), f.jsx("span", {
                     className: "text-gray-800 dark:text-gray-200",
                     children: "bham"
                  })]
               })]
            }), f.jsxs("div", {
               className: "hidden md:flex space-x-6",
               children: [f.jsx($, {
                  section: "home",
                  label: "Home"
               }), f.jsxs("div", {
                  className: "relative",
                  ref: y,
                  children: [f.jsxs("button", {
                     onClick: () => l(!a),
                     className: Ze("relative nav-item text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors px-1 py-2 flex items-center", r === "projects" ? "text-primary dark:text-primary" : ""),
                     children: ["Projects", f.jsx(ky, {
                        className: `ml-1 h-4 w-4 transition-transform ${a?"rotate-180":""}`
                     }), f.jsx("span", {
                        className: Ze("absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300", r === "projects" ? "w-full" : "w-0")
                     })]
                  }), a && f.jsxs("div", {
                     className: "absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 transition-colors duration-300",
                     children: [f.jsx("button", {
                        onClick: () => C("projects"),
                        className: "block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200",
                        children: "All Projects"
                     }), f.jsx("div", {
                        className: "h-px bg-gray-200 dark:bg-gray-700 my-1"
                     }), z.map(U => f.jsx("button", {
                        onClick: () => _(U),
                        className: "block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200",
                        children: U
                     }, U))]
                  })]
               }), f.jsxs("button", {
                  onClick: () => F("/case-studies"),
                  className: Ze("relative nav-item text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors px-1 py-2 flex items-center", r === "case-studies" ? "text-primary dark:text-primary" : ""),
                  children: [f.jsx(Sy, {
                     className: `h-4 w-4 mr-1 ${r==="case-studies"?"text-primary":""}`
                  }), "Case Studies", f.jsx("span", {
                     className: Ze("absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300", r === "case-studies" ? "w-full" : "w-0")
                  })]
               }), f.jsxs("button", {
                  onClick: () => F("/blog"),
                  className: Ze("relative nav-item text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors px-1 py-2 flex items-center", r === "blog" ? "text-primary dark:text-primary" : ""),
                  children: [f.jsx(by, {
                     className: `h-4 w-4 mr-1 ${r==="blog"?"text-primary":""}`
                  }), "Blog", f.jsx("span", {
                     className: Ze("absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300", r === "blog" ? "w-full" : "w-0")
                  })]
               }), f.jsxs("div", {
                  className: "relative",
                  ref: v,
                  children: [f.jsxs("button", {
                     onClick: () => d(!u),
                     className: Ze("relative nav-item text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors px-1 py-2 flex items-center", r === "certificates" ? "text-primary dark:text-primary" : ""),
                     children: [f.jsx(mc, {
                        className: `h-4 w-4 mr-1 ${r==="certificates"?"text-primary":""}`
                     }), "Certificates", f.jsx(ky, {
                        className: `ml-1 h-4 w-4 transition-transform ${u?"rotate-180":""}`
                     }), f.jsx("span", {
                        className: Ze("absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300", r === "certificates" ? "w-full" : "w-0")
                     })]
                  }), u && f.jsxs("div", {
                     className: "absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 transition-colors duration-300",
                     children: [f.jsx("button", {
                        onClick: () => F("/certificates"),
                        className: "block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200",
                        children: "All Certificates"
                     }), f.jsx("div", {
                        className: "h-px bg-gray-200 dark:bg-gray-700 my-1"
                     }), f.jsx("button", {
                        onClick: () => D("qualifications"),
                        className: "block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200",
                        children: "Qualifications"
                     }), f.jsx("button", {
                        onClick: () => D("achievements"),
                        className: "block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200",
                        children: "Achievements"
                     }), f.jsx("button", {
                        onClick: () => D("experience"),
                        className: "block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200",
                        children: "Experience"
                     }), f.jsx("button", {
                        onClick: () => D("extracurricular"),
                        className: "block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200",
                        children: "Extracurricular"
                     })]
                  })]
               }), f.jsx($, {
                  section: "skills",
                  label: "Skills"
               }), f.jsx($, {
                  section: "about",
                  label: "About"
               }), f.jsx($, {
                  section: "contact",
                  label: "Contact"
               })]
            }), f.jsxs("div", {
               className: "flex items-center space-x-4",
               children: [f.jsx(p3, {
                  className: "text-gray-800 dark:text-gray-200"
               }), f.jsx("button", {
                  className: "md:hidden text-gray-800 dark:text-gray-200 focus:outline-none",
                  onClick: w,
                  "aria-label": t ? "Close menu" : "Open menu",
                  children: t ? f.jsx(Sx, {
                     className: "h-6 w-6"
                  }) : f.jsx(yT, {
                     className: "h-6 w-6"
                  })
               })]
            })]
         }), f.jsxs("div", {
            className: `md:hidden bg-white dark:bg-gray-800 px-4 py-3 transition-all duration-300 ease-in-out ${t?"max-h-screen opacity-100":"max-h-0 opacity-0 invisible"} overflow-hidden`,
            children: [f.jsxs("button", {
               onClick: S,
               className: `flex items-center w-full text-left py-2 ${r==="home"?"text-primary dark:text-primary":"text-gray-800 dark:text-gray-200"} hover:text-primary dark:hover:text-primary transition-colors`,
               children: [f.jsx(mT, {
                  className: "h-4 w-4 mr-2"
               }), "Home"]
            }), f.jsxs("div", {
               className: "py-2",
               children: [f.jsx("button", {
                  onClick: () => C("projects"),
                  className: `block w-full text-left py-2 ${r==="projects"?"text-primary dark:text-primary":"text-gray-800 dark:text-gray-200"} hover:text-primary dark:hover:text-primary transition-colors font-medium`,
                  children: "All Projects"
               }), z.map(U => f.jsx("button", {
                  onClick: () => _(U),
                  className: "block w-full text-left py-2 pl-4 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors",
                  children: U
               }, U))]
            }), f.jsxs("button", {
               onClick: () => F("/case-studies"),
               className: `flex items-center w-full text-left py-2 ${r==="case-studies"?"text-primary dark:text-primary":"text-gray-800 dark:text-gray-200"} hover:text-primary dark:hover:text-primary transition-colors`,
               children: [f.jsx(Sy, {
                  className: `h-4 w-4 mr-2 ${r==="case-studies"?"text-primary dark:text-primary":""}`
               }), "Case Studies"]
            }), f.jsxs("button", {
               onClick: () => F("/blog"),
               className: `flex items-center w-full text-left py-2 ${r==="blog"?"text-primary dark:text-primary":"text-gray-800 dark:text-gray-200"} hover:text-primary dark:hover:text-primary transition-colors`,
               children: [f.jsx(by, {
                  className: `h-4 w-4 mr-2 ${r==="blog"?"text-primary dark:text-primary":""}`
               }), "Blog"]
            }), f.jsxs("div", {
               className: "py-2",
               children: [f.jsxs("button", {
                  onClick: () => F("/certificates"),
                  className: `flex items-center w-full text-left py-2 ${r==="certificates"?"text-primary dark:text-primary":"text-gray-800 dark:text-gray-200"} hover:text-primary dark:hover:text-primary transition-colors font-medium`,
                  children: [f.jsx(mc, {
                     className: `h-4 w-4 mr-2 ${r==="certificates"?"text-primary dark:text-primary":""}`
                  }), "Certificates"]
               }), f.jsx("button", {
                  onClick: () => D("qualifications"),
                  className: "block w-full text-left py-2 pl-8 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors",
                  children: "Qualifications"
               }), f.jsx("button", {
                  onClick: () => D("achievements"),
                  className: "block w-full text-left py-2 pl-8 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors",
                  children: "Achievements"
               }), f.jsx("button", {
                  onClick: () => D("experience"),
                  className: "block w-full text-left py-2 pl-8 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors",
                  children: "Experience"
               }), f.jsx("button", {
                  onClick: () => D("extracurricular"),
                  className: "block w-full text-left py-2 pl-8 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors",
                  children: "Extracurricular"
               })]
            }), f.jsx("button", {
               onClick: () => C("skills"),
               className: `block w-full text-left py-2 ${r==="skills"?"text-primary dark:text-primary":"text-gray-800 dark:text-gray-200"} hover:text-primary dark:hover:text-primary transition-colors`,
               children: "Skills"
            }), f.jsx("button", {
               onClick: () => C("about"),
               className: `block w-full text-left py-2 ${r==="about"?"text-primary dark:text-primary":"text-gray-800 dark:text-gray-200"} hover:text-primary dark:hover:text-primary transition-colors`,
               children: "About"
            }), f.jsx("button", {
               onClick: () => C("contact"),
               className: `block w-full text-left py-2 ${r==="contact"?"text-primary dark:text-primary":"text-gray-800 dark:text-gray-200"} hover:text-primary dark:hover:text-primary transition-colors`,
               children: "Contact"
            })]
         })]
      })
   },
   g3 = () => {
      const t = e => {
         const r = document.getElementById(e);
         if (r) {
            const i = r.offsetTop - 80;
            window.scrollTo({
               top: i,
               behavior: "smooth"
            })
         }
      };
      return f.jsx("footer", {
         className: "bg-gray-900 dark:bg-gray-950 text-white py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300",
         children: f.jsxs("div", {
            className: "container mx-auto",
            children: [f.jsxs("div", {
               className: "grid grid-cols-1 md:grid-cols-4 gap-8",
               children: [f.jsxs("div", {
                  className: "md:col-span-2",
                  children: [f.jsxs("h3", {
                     className: "text-2xl font-bold mb-4",
                     children: [f.jsx("span", {
                        className: "text-white",
                        children: "Shu"
                     }), f.jsx("span", {
                        className: "text-primary",
                        children: "bham"
                     })]
                  }), f.jsx("p", {
                     className: "text-gray-400 dark:text-gray-300 mb-4 max-w-md transition-colors duration-300",
                     children: "Computational mechanics expert turning complex physical models into clear, actionable engineering insights. Specialized in Python, FEniCS, and finite element analysis."
                  }), f.jsxs("div", {
                     className: "flex space-x-4",
                     children: [f.jsx("a", {
                        href: "https://github.com/iitrshubham",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-300",
                        "aria-label": "GitHub",
                        children: f.jsx(qi, {
                           className: "text-lg"
                        })
                     }), f.jsx("a", {
                        href: "https://www.linkedin.com/in/iitrshubham/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-300",
                        "aria-label": "LinkedIn",
                        children: f.jsx(vb, {
                           className: "text-lg"
                        })
                     }), f.jsx("a", {
                        href: "https://scholar.google.com/citations?user=-2QHLeQAAAAJ&hl=en",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-400 hover:text-white transition-colors",
                        "aria-label": "Google Scholar",
                        children: f.jsx(Q_, {
                           className: "text-lg"
                        })
                     }), f.jsx("a", {
                        href: "https://www.researchgate.net/profile/Shubham-24",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-400 hover:text-white transition-colors",
                        "aria-label": "Researchgate",
                        children: f.jsx($_, {
                           className: "text-lg"
                        })
                     })]
                  })]
               }), f.jsxs("div", {
                  children: [f.jsx("h4", {
                     className: "font-bold text-lg mb-4 text-white dark:text-white transition-colors duration-300",
                     children: "Quick Links"
                  }), f.jsxs("ul", {
                     className: "space-y-2",
                     children: [f.jsx("li", {
                        children: f.jsx("button", {
                           onClick: () => t("home"),
                           className: "text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-300",
                           children: "Home"
                        })
                     }), f.jsx("li", {
                        children: f.jsx("button", {
                           onClick: () => t("projects"),
                           className: "text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-300",
                           children: "Projects"
                        })
                     }), f.jsx("li", {
                        children: f.jsx("button", {
                           onClick: () => t("skills"),
                           className: "text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-300",
                           children: "Skills"
                        })
                     }), f.jsx("li", {
                        children: f.jsx("button", {
                           onClick: () => t("about"),
                           className: "text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-300",
                           children: "About"
                        })
                     }), f.jsx("li", {
                        children: f.jsx("button", {
                           onClick: () => t("contact"),
                           className: "text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-300",
                           children: "Contact"
                        })
                     })]
                  })]
               }), f.jsxs("div", {
                  children: [f.jsx("h4", {
                     className: "font-bold text-lg mb-4",
                     children: "Contact"
                  }), f.jsxs("ul", {
                     className: "space-y-2",
                     children: [f.jsxs("li", {
                        className: "flex items-center text-gray-400",
                        children: [f.jsx(rp, {
                           className: "mr-2"
                        }), f.jsx("a", {
                           href: "mailto:shubham.ce@sric.iitr.ac.in",
                           className: "hover:text-white transition-colors",
                           children: "shubham.ce@sric.iitr.ac.in"
                        })]
                     }), f.jsxs("li", {
                        className: "flex items-center text-gray-400",
                        children: [f.jsx(wb, {
                           className: "mr-2"
                        }), f.jsx("span", {
                           children: "UK, India"
                        })]
                     })]
                  })]
               })]
            }), f.jsxs("div", {
               className: "border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center",
               children: [f.jsxs("p", {
                  className: "text-gray-400",
                  children: ["© ", new Date().getFullYear(), " Shubham. All rights reserved."]
               }), f.jsxs("p", {
                  className: "text-gray-400 mt-2 md:mt-0 flex items-center",
                  children: ["Built with ", f.jsx(Y_, {
                     className: "text-red-500 mx-1"
                  }), " using latest technologies"]
               })]
            })]
         })
      })
   };

function y3() {
   const [t, e] = b.useState(!1);
   b.useEffect(() => {
      const i = () => {
         window.scrollY > 400 ? e(!0) : e(!1)
      };
      return window.addEventListener("scroll", i), () => {
         window.removeEventListener("scroll", i)
      }
   }, []);
   const r = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      })
   };
   return f.jsxs("div", {
      className: "flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",
      children: [f.jsx(m3, {}), f.jsx("main", {
         className: "flex-grow",
         children: f.jsxs(mS, {
            children: [f.jsx(Pn, {
               path: "/",
               component: y4
            }), f.jsx(Pn, {
               path: "/projects",
               component: v4
            }), f.jsx(Pn, {
               path: "/project/:slug",
               component: W4
            }), f.jsx(Pn, {
               path: "/category/:category",
               component: q4
            }), f.jsx(Pn, {
               path: "/case-studies",
               children: () => f.jsx(w0, {})
            }), f.jsx(Pn, {
               path: "/case-study/:slug",
               children: i => f.jsx(w0, {
                  viewMode: "detail",
                  params: i
               })
            }), f.jsx(Pn, {
               path: "/blog",
               children: () => f.jsx(k0, {})
            }), f.jsx(Pn, {
               path: "/blog/:slug",
               children: i => f.jsx(k0, {
                  viewMode: "detail",
                  params: i
               })
            }), f.jsx(Pn, {
               path: "/certificates",
               children: () => f.jsx(T0, {})
            }), f.jsx(Pn, {
               path: "/certificate/:slug",
               children: i => f.jsx(T0, {
                  viewMode: "detail",
                  params: i
               })
            }), f.jsx(Pn, {
               component: lC
            })]
         })
      }), f.jsx(g3, {}), t && f.jsx("button", {
         onClick: r,
         className: "fixed bottom-6 right-6 bg-primary p-3 rounded-full text-white shadow-lg hover:bg-blue-600 transition-all duration-300 z-50",
         "aria-label": "Scroll to top",
         children: f.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: f.jsx("path", {
               strokeLinecap: "round",
               strokeLinejoin: "round",
               strokeWidth: 2,
               d: "M5 15l7-7 7 7"
            })
         })
      }), f.jsx(rC, {})]
   })
}
async function v3(t) {
   if (!t.ok) {
      const e = await t.text() || t.statusText;
      throw new Error(`${t.status}: ${e}`)
   }
}
const x3 = ({
   on401: t
}) => async ({
   queryKey: e
}) => {
   const r = await fetch(e[0], {
      credentials: "include"
   });
   return await v3(r), await r.json()
}, w3 = new o4({
   defaultOptions: {
      queries: {
         queryFn: x3({
            on401: "throw"
         }),
         refetchInterval: !1,
         refetchOnWindowFocus: !1,
         staleTime: 1 / 0,
         retry: !1
      },
      mutations: {
         retry: !1
      }
   }
}), b3 = {
   theme: "system",
   setTheme: () => null
}, k3 = b.createContext(b3);

function S3({
   children: t,
   defaultTheme: e = "system",
   storageKey: r = "portfolio-theme",
   ...i
}) {
   const [a, l] = b.useState(() => localStorage.getItem(r) || e);
   b.useEffect(() => {
      const d = window.document.documentElement;
      if (d.classList.remove("light", "dark"), a === "system") {
         const p = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
         d.classList.add(p);
         return
      }
      d.classList.add(a), console.log("Theme changed to:", a), console.log("Current classes on HTML element:", d.className)
   }, [a]);
   const u = {
      theme: a,
      setTheme: d => {
         localStorage.setItem(r, d), l(d)
      }
   };
   return f.jsx(k3.Provider, {
      ...i,
      value: u,
      children: t
   })
}
Z2.createRoot(document.getElementById("root")).render(f.jsx(y1, {
   children: f.jsx(u4, {
      client: w3,
      children: f.jsx(S3, {
         defaultTheme: "system",
         storageKey: "portfolio-theme",
         children: f.jsx(y3, {})
      })
   })
}));