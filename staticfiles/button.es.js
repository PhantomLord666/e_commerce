import sr from "react";
function $r(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var De = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Dr() {
  if (He)
    return me;
  He = 1;
  var u = sr, D = Symbol.for("react.element"), k = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, w = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(d, b, S) {
    var f, E = {}, I = null, F = null;
    S !== void 0 && (I = "" + S), b.key !== void 0 && (I = "" + b.key), b.ref !== void 0 && (F = b.ref);
    for (f in b)
      c.call(b, f) && !l.hasOwnProperty(f) && (E[f] = b[f]);
    if (d && d.defaultProps)
      for (f in b = d.defaultProps, b)
        E[f] === void 0 && (E[f] = b[f]);
    return { $$typeof: D, type: d, key: I, ref: F, props: E, _owner: w.current };
  }
  return me.Fragment = k, me.jsx = C, me.jsxs = C, me;
}
var Ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Mr() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    var u = sr, D = Symbol.for("react.element"), k = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), d = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), N = Symbol.iterator, M = "@@iterator";
    function z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = N && e[N] || e[M];
      return typeof r == "function" ? r : null;
    }
    var U = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          a[s - 1] = arguments[s];
        V("error", e, a);
      }
    }
    function V(e, r, a) {
      {
        var s = U.ReactDebugCurrentFrame, x = s.getStackAddendum();
        x !== "" && (r += "%s", a = a.concat([x]));
        var $ = a.map(function(O) {
          return String(O);
        });
        $.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, $);
      }
    }
    var q = !1, o = !1, re = !1, ve = !1, pe = !1, ie;
    ie = Symbol.for("react.module.reference");
    function ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === l || pe || e === w || e === S || e === f || ve || e === F || q || o || re || typeof e == "object" && e !== null && (e.$$typeof === I || e.$$typeof === E || e.$$typeof === C || e.$$typeof === d || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function ue(e, r, a) {
      var s = e.displayName;
      if (s)
        return s;
      var x = r.displayName || r.name || "";
      return x !== "" ? a + "(" + x + ")" : a;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function K(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case k:
          return "Portal";
        case l:
          return "Profiler";
        case w:
          return "StrictMode";
        case S:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return se(r) + ".Consumer";
          case C:
            var a = e;
            return se(a._context) + ".Provider";
          case b:
            return ue(e, e.render, "ForwardRef");
          case E:
            var s = e.displayName || null;
            return s !== null ? s : K(e.type) || "Memo";
          case I: {
            var x = e, $ = x._payload, O = x._init;
            try {
              return K(O($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, te = 0, H, ee, ne, fe, t, i, m;
    function h() {
    }
    h.__reactDisabledLog = !0;
    function v() {
      {
        if (te === 0) {
          H = console.log, ee = console.info, ne = console.warn, fe = console.error, t = console.group, i = console.groupCollapsed, m = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: h,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        te++;
      }
    }
    function R() {
      {
        if (te--, te === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, e, {
              value: H
            }),
            info: G({}, e, {
              value: ee
            }),
            warn: G({}, e, {
              value: ne
            }),
            error: G({}, e, {
              value: fe
            }),
            group: G({}, e, {
              value: t
            }),
            groupCollapsed: G({}, e, {
              value: i
            }),
            groupEnd: G({}, e, {
              value: m
            })
          });
        }
        te < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var p = U.ReactCurrentDispatcher, y;
    function g(e, r, a) {
      {
        if (y === void 0)
          try {
            throw Error();
          } catch (x) {
            var s = x.stack.trim().match(/\n( *(at )?)/);
            y = s && s[1] || "";
          }
        return `
` + y + e;
      }
    }
    var P = !1, T;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      T = new B();
    }
    function n(e, r) {
      if (!e || P)
        return "";
      {
        var a = T.get(e);
        if (a !== void 0)
          return a;
      }
      var s;
      P = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = p.current, p.current = null, v();
      try {
        if (r) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (X) {
              s = X;
            }
            Reflect.construct(e, [], O);
          } else {
            try {
              O.call();
            } catch (X) {
              s = X;
            }
            e.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            s = X;
          }
          e();
        }
      } catch (X) {
        if (X && s && typeof X.stack == "string") {
          for (var _ = X.stack.split(`
`), J = s.stack.split(`
`), W = _.length - 1, L = J.length - 1; W >= 1 && L >= 0 && _[W] !== J[L]; )
            L--;
          for (; W >= 1 && L >= 0; W--, L--)
            if (_[W] !== J[L]) {
              if (W !== 1 || L !== 1)
                do
                  if (W--, L--, L < 0 || _[W] !== J[L]) {
                    var Q = `
` + _[W].replace(" at new ", " at ");
                    return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), typeof e == "function" && T.set(e, Q), Q;
                  }
                while (W >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        P = !1, p.current = $, R(), Error.prepareStackTrace = x;
      }
      var de = e ? e.displayName || e.name : "", oe = de ? g(de) : "";
      return typeof e == "function" && T.set(e, oe), oe;
    }
    function Z(e, r, a) {
      return n(e, !1);
    }
    function ce(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ae(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return n(e, ce(e));
      if (typeof e == "string")
        return g(e);
      switch (e) {
        case S:
          return g("Suspense");
        case f:
          return g("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Z(e.render);
          case E:
            return ae(e.type, r, a);
          case I: {
            var s = e, x = s._payload, $ = s._init;
            try {
              return ae($(x), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, Ye = {}, We = U.ReactDebugCurrentFrame;
    function ge(e) {
      if (e) {
        var r = e._owner, a = ae(e.type, e._source, r ? r.type : null);
        We.setExtraStackFrame(a);
      } else
        We.setExtraStackFrame(null);
    }
    function dr(e, r, a, s, x) {
      {
        var $ = Function.call.bind(be);
        for (var O in e)
          if ($(e, O)) {
            var _ = void 0;
            try {
              if (typeof e[O] != "function") {
                var J = Error((s || "React class") + ": " + a + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              _ = e[O](r, O, s, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              _ = W;
            }
            _ && !(_ instanceof Error) && (ge(x), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", a, O, typeof _), ge(null)), _ instanceof Error && !(_.message in Ye) && (Ye[_.message] = !0, ge(x), Y("Failed %s type: %s", a, _.message), ge(null));
          }
      }
    }
    var vr = Array.isArray;
    function Re(e) {
      return vr(e);
    }
    function pr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function yr(e) {
      try {
        return qe(e), !1;
      } catch {
        return !0;
      }
    }
    function qe(e) {
      return "" + e;
    }
    function Le(e) {
      if (yr(e))
        return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pr(e)), qe(e);
    }
    var he = U.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ue, Ve, Oe;
    Oe = {};
    function hr(e) {
      if (be.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function mr(e) {
      if (be.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Er(e, r) {
      if (typeof e.ref == "string" && he.current && r && he.current.stateNode !== r) {
        var a = K(he.current.type);
        Oe[a] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(he.current.type), e.ref), Oe[a] = !0);
      }
    }
    function gr(e, r) {
      {
        var a = function() {
          Ue || (Ue = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function Tr(e, r) {
      {
        var a = function() {
          Ve || (Ve = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var _r = function(e, r, a, s, x, $, O) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: O,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function Rr(e, r, a, s, x) {
      {
        var $, O = {}, _ = null, J = null;
        a !== void 0 && (Le(a), _ = "" + a), mr(r) && (Le(r.key), _ = "" + r.key), hr(r) && (J = r.ref, Er(r, x));
        for ($ in r)
          be.call(r, $) && !br.hasOwnProperty($) && (O[$] = r[$]);
        if (e && e.defaultProps) {
          var W = e.defaultProps;
          for ($ in W)
            O[$] === void 0 && (O[$] = W[$]);
        }
        if (_ || J) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          _ && gr(O, L), J && Tr(O, L);
        }
        return _r(e, _, J, x, s, he.current, O);
      }
    }
    var Se = U.ReactCurrentOwner, ze = U.ReactDebugCurrentFrame;
    function le(e) {
      if (e) {
        var r = e._owner, a = ae(e.type, e._source, r ? r.type : null);
        ze.setExtraStackFrame(a);
      } else
        ze.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function Ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === D;
    }
    function Ne() {
      {
        if (Se.current) {
          var e = K(Se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Or(e) {
      return "";
    }
    var Be = {};
    function Sr(e) {
      {
        var r = Ne();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function Je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = Sr(r);
        if (Be[a])
          return;
        Be[a] = !0;
        var s = "";
        e && e._owner && e._owner !== Se.current && (s = " It was passed a child from " + K(e._owner.type) + "."), le(e), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, s), le(null);
      }
    }
    function Ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Re(e))
          for (var a = 0; a < e.length; a++) {
            var s = e[a];
            Ce(s) && Je(s, r);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = z(e);
          if (typeof x == "function" && x !== e.entries)
            for (var $ = x.call(e), O; !(O = $.next()).done; )
              Ce(O.value) && Je(O.value, r);
        }
      }
    }
    function Pr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          a = r.propTypes;
        else
          return;
        if (a) {
          var s = K(r);
          dr(a, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var x = K(r);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Cr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var s = r[a];
          if (s !== "children" && s !== "key") {
            le(e), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), le(null);
            break;
          }
        }
        e.ref !== null && (le(e), Y("Invalid attribute `ref` supplied to `React.Fragment`."), le(null));
      }
    }
    var Ge = {};
    function Xe(e, r, a, s, x, $) {
      {
        var O = ye(e);
        if (!O) {
          var _ = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Or();
          J ? _ += J : _ += Ne();
          var W;
          e === null ? W = "null" : Re(e) ? W = "array" : e !== void 0 && e.$$typeof === D ? (W = "<" + (K(e.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : W = typeof e, Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, _);
        }
        var L = Rr(e, r, a, x, $);
        if (L == null)
          return L;
        if (O) {
          var Q = r.children;
          if (Q !== void 0)
            if (s)
              if (Re(Q)) {
                for (var de = 0; de < Q.length; de++)
                  Ke(Q[de], e);
                Object.freeze && Object.freeze(Q);
              } else
                Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ke(Q, e);
        }
        if (be.call(r, "key")) {
          var oe = K(e), X = Object.keys(r).filter(function(Ir) {
            return Ir !== "key";
          }), we = X.length > 0 ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ge[oe + we]) {
            var kr = X.length > 0 ? "{" + X.join(": ..., ") + ": ...}" : "{}";
            Y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, we, oe, kr, oe), Ge[oe + we] = !0;
          }
        }
        return e === c ? Cr(L) : Pr(L), L;
      }
    }
    function wr(e, r, a) {
      return Xe(e, r, a, !0);
    }
    function xr(e, r, a) {
      return Xe(e, r, a, !1);
    }
    var jr = xr, Ar = wr;
    Ee.Fragment = c, Ee.jsx = jr, Ee.jsxs = Ar;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? De.exports = Dr() : De.exports = Mr();
var Fr = De.exports, Me = { exports: {} }, Te = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function Yr() {
  if (Qe)
    return j;
  Qe = 1;
  var u = typeof Symbol == "function" && Symbol.for, D = u ? Symbol.for("react.element") : 60103, k = u ? Symbol.for("react.portal") : 60106, c = u ? Symbol.for("react.fragment") : 60107, w = u ? Symbol.for("react.strict_mode") : 60108, l = u ? Symbol.for("react.profiler") : 60114, C = u ? Symbol.for("react.provider") : 60109, d = u ? Symbol.for("react.context") : 60110, b = u ? Symbol.for("react.async_mode") : 60111, S = u ? Symbol.for("react.concurrent_mode") : 60111, f = u ? Symbol.for("react.forward_ref") : 60112, E = u ? Symbol.for("react.suspense") : 60113, I = u ? Symbol.for("react.suspense_list") : 60120, F = u ? Symbol.for("react.memo") : 60115, N = u ? Symbol.for("react.lazy") : 60116, M = u ? Symbol.for("react.block") : 60121, z = u ? Symbol.for("react.fundamental") : 60117, U = u ? Symbol.for("react.responder") : 60118, Y = u ? Symbol.for("react.scope") : 60119;
  function V(o) {
    if (typeof o == "object" && o !== null) {
      var re = o.$$typeof;
      switch (re) {
        case D:
          switch (o = o.type, o) {
            case b:
            case S:
            case c:
            case l:
            case w:
            case E:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case d:
                case f:
                case N:
                case F:
                case C:
                  return o;
                default:
                  return re;
              }
          }
        case k:
          return re;
      }
    }
  }
  function q(o) {
    return V(o) === S;
  }
  return j.AsyncMode = b, j.ConcurrentMode = S, j.ContextConsumer = d, j.ContextProvider = C, j.Element = D, j.ForwardRef = f, j.Fragment = c, j.Lazy = N, j.Memo = F, j.Portal = k, j.Profiler = l, j.StrictMode = w, j.Suspense = E, j.isAsyncMode = function(o) {
    return q(o) || V(o) === b;
  }, j.isConcurrentMode = q, j.isContextConsumer = function(o) {
    return V(o) === d;
  }, j.isContextProvider = function(o) {
    return V(o) === C;
  }, j.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === D;
  }, j.isForwardRef = function(o) {
    return V(o) === f;
  }, j.isFragment = function(o) {
    return V(o) === c;
  }, j.isLazy = function(o) {
    return V(o) === N;
  }, j.isMemo = function(o) {
    return V(o) === F;
  }, j.isPortal = function(o) {
    return V(o) === k;
  }, j.isProfiler = function(o) {
    return V(o) === l;
  }, j.isStrictMode = function(o) {
    return V(o) === w;
  }, j.isSuspense = function(o) {
    return V(o) === E;
  }, j.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === c || o === S || o === l || o === w || o === E || o === I || typeof o == "object" && o !== null && (o.$$typeof === N || o.$$typeof === F || o.$$typeof === C || o.$$typeof === d || o.$$typeof === f || o.$$typeof === z || o.$$typeof === U || o.$$typeof === Y || o.$$typeof === M);
  }, j.typeOf = V, j;
}
var A = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function Wr() {
  return er || (er = 1, process.env.NODE_ENV !== "production" && function() {
    var u = typeof Symbol == "function" && Symbol.for, D = u ? Symbol.for("react.element") : 60103, k = u ? Symbol.for("react.portal") : 60106, c = u ? Symbol.for("react.fragment") : 60107, w = u ? Symbol.for("react.strict_mode") : 60108, l = u ? Symbol.for("react.profiler") : 60114, C = u ? Symbol.for("react.provider") : 60109, d = u ? Symbol.for("react.context") : 60110, b = u ? Symbol.for("react.async_mode") : 60111, S = u ? Symbol.for("react.concurrent_mode") : 60111, f = u ? Symbol.for("react.forward_ref") : 60112, E = u ? Symbol.for("react.suspense") : 60113, I = u ? Symbol.for("react.suspense_list") : 60120, F = u ? Symbol.for("react.memo") : 60115, N = u ? Symbol.for("react.lazy") : 60116, M = u ? Symbol.for("react.block") : 60121, z = u ? Symbol.for("react.fundamental") : 60117, U = u ? Symbol.for("react.responder") : 60118, Y = u ? Symbol.for("react.scope") : 60119;
    function V(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === c || n === S || n === l || n === w || n === E || n === I || typeof n == "object" && n !== null && (n.$$typeof === N || n.$$typeof === F || n.$$typeof === C || n.$$typeof === d || n.$$typeof === f || n.$$typeof === z || n.$$typeof === U || n.$$typeof === Y || n.$$typeof === M);
    }
    function q(n) {
      if (typeof n == "object" && n !== null) {
        var Z = n.$$typeof;
        switch (Z) {
          case D:
            var ce = n.type;
            switch (ce) {
              case b:
              case S:
              case c:
              case l:
              case w:
              case E:
                return ce;
              default:
                var ae = ce && ce.$$typeof;
                switch (ae) {
                  case d:
                  case f:
                  case N:
                  case F:
                  case C:
                    return ae;
                  default:
                    return Z;
                }
            }
          case k:
            return Z;
        }
      }
    }
    var o = b, re = S, ve = d, pe = C, ie = D, ye = f, ue = c, se = N, K = F, G = k, te = l, H = w, ee = E, ne = !1;
    function fe(n) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(n) || q(n) === b;
    }
    function t(n) {
      return q(n) === S;
    }
    function i(n) {
      return q(n) === d;
    }
    function m(n) {
      return q(n) === C;
    }
    function h(n) {
      return typeof n == "object" && n !== null && n.$$typeof === D;
    }
    function v(n) {
      return q(n) === f;
    }
    function R(n) {
      return q(n) === c;
    }
    function p(n) {
      return q(n) === N;
    }
    function y(n) {
      return q(n) === F;
    }
    function g(n) {
      return q(n) === k;
    }
    function P(n) {
      return q(n) === l;
    }
    function T(n) {
      return q(n) === w;
    }
    function B(n) {
      return q(n) === E;
    }
    A.AsyncMode = o, A.ConcurrentMode = re, A.ContextConsumer = ve, A.ContextProvider = pe, A.Element = ie, A.ForwardRef = ye, A.Fragment = ue, A.Lazy = se, A.Memo = K, A.Portal = G, A.Profiler = te, A.StrictMode = H, A.Suspense = ee, A.isAsyncMode = fe, A.isConcurrentMode = t, A.isContextConsumer = i, A.isContextProvider = m, A.isElement = h, A.isForwardRef = v, A.isFragment = R, A.isLazy = p, A.isMemo = y, A.isPortal = g, A.isProfiler = P, A.isStrictMode = T, A.isSuspense = B, A.isValidElementType = V, A.typeOf = q;
  }()), A;
}
var rr;
function fr() {
  return rr || (rr = 1, process.env.NODE_ENV === "production" ? Te.exports = Yr() : Te.exports = Wr()), Te.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xe, tr;
function qr() {
  if (tr)
    return xe;
  tr = 1;
  var u = Object.getOwnPropertySymbols, D = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
  function c(l) {
    if (l == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(l);
  }
  function w() {
    try {
      if (!Object.assign)
        return !1;
      var l = new String("abc");
      if (l[5] = "de", Object.getOwnPropertyNames(l)[0] === "5")
        return !1;
      for (var C = {}, d = 0; d < 10; d++)
        C["_" + String.fromCharCode(d)] = d;
      var b = Object.getOwnPropertyNames(C).map(function(f) {
        return C[f];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var S = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        S[f] = f;
      }), Object.keys(Object.assign({}, S)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xe = w() ? Object.assign : function(l, C) {
    for (var d, b = c(l), S, f = 1; f < arguments.length; f++) {
      d = Object(arguments[f]);
      for (var E in d)
        D.call(d, E) && (b[E] = d[E]);
      if (u) {
        S = u(d);
        for (var I = 0; I < S.length; I++)
          k.call(d, S[I]) && (b[S[I]] = d[S[I]]);
      }
    }
    return b;
  }, xe;
}
var je, nr;
function Fe() {
  if (nr)
    return je;
  nr = 1;
  var u = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return je = u, je;
}
var Ae, ar;
function cr() {
  return ar || (ar = 1, Ae = Function.call.bind(Object.prototype.hasOwnProperty)), Ae;
}
var ke, or;
function Lr() {
  if (or)
    return ke;
  or = 1;
  var u = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var D = Fe(), k = {}, c = cr();
    u = function(l) {
      var C = "Warning: " + l;
      typeof console < "u" && console.error(C);
      try {
        throw new Error(C);
      } catch {
      }
    };
  }
  function w(l, C, d, b, S) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in l)
        if (c(l, f)) {
          var E;
          try {
            if (typeof l[f] != "function") {
              var I = Error(
                (b || "React class") + ": " + d + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw I.name = "Invariant Violation", I;
            }
            E = l[f](C, f, b, d, null, D);
          } catch (N) {
            E = N;
          }
          if (E && !(E instanceof Error) && u(
            (b || "React class") + ": type specification of " + d + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof E + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), E instanceof Error && !(E.message in k)) {
            k[E.message] = !0;
            var F = S ? S() : "";
            u(
              "Failed " + d + " type: " + E.message + (F ?? "")
            );
          }
        }
    }
  }
  return w.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (k = {});
  }, ke = w, ke;
}
var Ie, ir;
function Ur() {
  if (ir)
    return Ie;
  ir = 1;
  var u = fr(), D = qr(), k = Fe(), c = cr(), w = Lr(), l = function() {
  };
  process.env.NODE_ENV !== "production" && (l = function(d) {
    var b = "Warning: " + d;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function C() {
    return null;
  }
  return Ie = function(d, b) {
    var S = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function E(t) {
      var i = t && (S && t[S] || t[f]);
      if (typeof i == "function")
        return i;
    }
    var I = "<<anonymous>>", F = {
      array: U("array"),
      bigint: U("bigint"),
      bool: U("boolean"),
      func: U("function"),
      number: U("number"),
      object: U("object"),
      string: U("string"),
      symbol: U("symbol"),
      any: Y(),
      arrayOf: V,
      element: q(),
      elementType: o(),
      instanceOf: re,
      node: ye(),
      objectOf: pe,
      oneOf: ve,
      oneOfType: ie,
      shape: se,
      exact: K
    };
    function N(t, i) {
      return t === i ? t !== 0 || 1 / t === 1 / i : t !== t && i !== i;
    }
    function M(t, i) {
      this.message = t, this.data = i && typeof i == "object" ? i : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function z(t) {
      if (process.env.NODE_ENV !== "production")
        var i = {}, m = 0;
      function h(R, p, y, g, P, T, B) {
        if (g = g || I, T = T || y, B !== k) {
          if (b) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Z = g + ":" + y;
            !i[Z] && // Avoid spamming the console because they are often not actionable except for lib authors
            m < 3 && (l(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + g + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), i[Z] = !0, m++);
          }
        }
        return p[y] == null ? R ? p[y] === null ? new M("The " + P + " `" + T + "` is marked as required " + ("in `" + g + "`, but its value is `null`.")) : new M("The " + P + " `" + T + "` is marked as required in " + ("`" + g + "`, but its value is `undefined`.")) : null : t(p, y, g, P, T);
      }
      var v = h.bind(null, !1);
      return v.isRequired = h.bind(null, !0), v;
    }
    function U(t) {
      function i(m, h, v, R, p, y) {
        var g = m[h], P = H(g);
        if (P !== t) {
          var T = ee(g);
          return new M(
            "Invalid " + R + " `" + p + "` of type " + ("`" + T + "` supplied to `" + v + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return z(i);
    }
    function Y() {
      return z(C);
    }
    function V(t) {
      function i(m, h, v, R, p) {
        if (typeof t != "function")
          return new M("Property `" + p + "` of component `" + v + "` has invalid PropType notation inside arrayOf.");
        var y = m[h];
        if (!Array.isArray(y)) {
          var g = H(y);
          return new M("Invalid " + R + " `" + p + "` of type " + ("`" + g + "` supplied to `" + v + "`, expected an array."));
        }
        for (var P = 0; P < y.length; P++) {
          var T = t(y, P, v, R, p + "[" + P + "]", k);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return z(i);
    }
    function q() {
      function t(i, m, h, v, R) {
        var p = i[m];
        if (!d(p)) {
          var y = H(p);
          return new M("Invalid " + v + " `" + R + "` of type " + ("`" + y + "` supplied to `" + h + "`, expected a single ReactElement."));
        }
        return null;
      }
      return z(t);
    }
    function o() {
      function t(i, m, h, v, R) {
        var p = i[m];
        if (!u.isValidElementType(p)) {
          var y = H(p);
          return new M("Invalid " + v + " `" + R + "` of type " + ("`" + y + "` supplied to `" + h + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return z(t);
    }
    function re(t) {
      function i(m, h, v, R, p) {
        if (!(m[h] instanceof t)) {
          var y = t.name || I, g = fe(m[h]);
          return new M("Invalid " + R + " `" + p + "` of type " + ("`" + g + "` supplied to `" + v + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return z(i);
    }
    function ve(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? l(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : l("Invalid argument supplied to oneOf, expected an array.")), C;
      function i(m, h, v, R, p) {
        for (var y = m[h], g = 0; g < t.length; g++)
          if (N(y, t[g]))
            return null;
        var P = JSON.stringify(t, function(B, n) {
          var Z = ee(n);
          return Z === "symbol" ? String(n) : n;
        });
        return new M("Invalid " + R + " `" + p + "` of value `" + String(y) + "` " + ("supplied to `" + v + "`, expected one of " + P + "."));
      }
      return z(i);
    }
    function pe(t) {
      function i(m, h, v, R, p) {
        if (typeof t != "function")
          return new M("Property `" + p + "` of component `" + v + "` has invalid PropType notation inside objectOf.");
        var y = m[h], g = H(y);
        if (g !== "object")
          return new M("Invalid " + R + " `" + p + "` of type " + ("`" + g + "` supplied to `" + v + "`, expected an object."));
        for (var P in y)
          if (c(y, P)) {
            var T = t(y, P, v, R, p + "." + P, k);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return z(i);
    }
    function ie(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && l("Invalid argument supplied to oneOfType, expected an instance of array."), C;
      for (var i = 0; i < t.length; i++) {
        var m = t[i];
        if (typeof m != "function")
          return l(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(m) + " at index " + i + "."
          ), C;
      }
      function h(v, R, p, y, g) {
        for (var P = [], T = 0; T < t.length; T++) {
          var B = t[T], n = B(v, R, p, y, g, k);
          if (n == null)
            return null;
          n.data && c(n.data, "expectedType") && P.push(n.data.expectedType);
        }
        var Z = P.length > 0 ? ", expected one of type [" + P.join(", ") + "]" : "";
        return new M("Invalid " + y + " `" + g + "` supplied to " + ("`" + p + "`" + Z + "."));
      }
      return z(h);
    }
    function ye() {
      function t(i, m, h, v, R) {
        return G(i[m]) ? null : new M("Invalid " + v + " `" + R + "` supplied to " + ("`" + h + "`, expected a ReactNode."));
      }
      return z(t);
    }
    function ue(t, i, m, h, v) {
      return new M(
        (t || "React class") + ": " + i + " type `" + m + "." + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + v + "`."
      );
    }
    function se(t) {
      function i(m, h, v, R, p) {
        var y = m[h], g = H(y);
        if (g !== "object")
          return new M("Invalid " + R + " `" + p + "` of type `" + g + "` " + ("supplied to `" + v + "`, expected `object`."));
        for (var P in t) {
          var T = t[P];
          if (typeof T != "function")
            return ue(v, R, p, P, ee(T));
          var B = T(y, P, v, R, p + "." + P, k);
          if (B)
            return B;
        }
        return null;
      }
      return z(i);
    }
    function K(t) {
      function i(m, h, v, R, p) {
        var y = m[h], g = H(y);
        if (g !== "object")
          return new M("Invalid " + R + " `" + p + "` of type `" + g + "` " + ("supplied to `" + v + "`, expected `object`."));
        var P = D({}, m[h], t);
        for (var T in P) {
          var B = t[T];
          if (c(t, T) && typeof B != "function")
            return ue(v, R, p, T, ee(B));
          if (!B)
            return new M(
              "Invalid " + R + " `" + p + "` key `" + T + "` supplied to `" + v + "`.\nBad object: " + JSON.stringify(m[h], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var n = B(y, T, v, R, p + "." + T, k);
          if (n)
            return n;
        }
        return null;
      }
      return z(i);
    }
    function G(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(G);
          if (t === null || d(t))
            return !0;
          var i = E(t);
          if (i) {
            var m = i.call(t), h;
            if (i !== t.entries) {
              for (; !(h = m.next()).done; )
                if (!G(h.value))
                  return !1;
            } else
              for (; !(h = m.next()).done; ) {
                var v = h.value;
                if (v && !G(v[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(t, i) {
      return t === "symbol" ? !0 : i ? i["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && i instanceof Symbol : !1;
    }
    function H(t) {
      var i = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : te(i, t) ? "symbol" : i;
    }
    function ee(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var i = H(t);
      if (i === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return i;
    }
    function ne(t) {
      var i = ee(t);
      switch (i) {
        case "array":
        case "object":
          return "an " + i;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + i;
        default:
          return i;
      }
    }
    function fe(t) {
      return !t.constructor || !t.constructor.name ? I : t.constructor.name;
    }
    return F.checkPropTypes = w, F.resetWarningCache = w.resetWarningCache, F.PropTypes = F, F;
  }, Ie;
}
var $e, ur;
function Vr() {
  if (ur)
    return $e;
  ur = 1;
  var u = Fe();
  function D() {
  }
  function k() {
  }
  return k.resetWarningCache = D, $e = function() {
    function c(C, d, b, S, f, E) {
      if (E !== u) {
        var I = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw I.name = "Invariant Violation", I;
      }
    }
    c.isRequired = c;
    function w() {
      return c;
    }
    var l = {
      array: c,
      bigint: c,
      bool: c,
      func: c,
      number: c,
      object: c,
      string: c,
      symbol: c,
      any: c,
      arrayOf: w,
      element: c,
      elementType: c,
      instanceOf: w,
      node: c,
      objectOf: w,
      oneOf: w,
      oneOfType: w,
      shape: w,
      exact: w,
      checkPropTypes: k,
      resetWarningCache: D
    };
    return l.PropTypes = l, l;
  }, $e;
}
if (process.env.NODE_ENV !== "production") {
  var zr = fr(), Nr = !0;
  Me.exports = Ur()(zr.isElement, Nr);
} else
  Me.exports = Vr()();
var Br = Me.exports;
const _e = /* @__PURE__ */ $r(Br), lr = ({ label: u, onClick: D, variant: k, size: c }) => /* @__PURE__ */ Fr.jsx("button", { className: `button ${k} ${c}`, onClick: D, children: u });
lr.propTypes = {
  label: _e.string.isRequired,
  onClick: _e.func,
  variant: _e.oneOf(["primary", "secondary", "danger"]),
  size: _e.oneOf(["small", "medium", "large"])
};
lr.defaultProps = {
  onClick: void 0,
  variant: "primary",
  size: "medium"
};
export {
  lr as default
};
