!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  function x(e) {
    return null != e && e === e.window;
  }
  var t = [],
    E = C.document,
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.concat,
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
        ? n[o.call(e)] || "object"
        : typeof e;
  }
  var f = "3.4.1",
    k = function (e, t) {
      return new k.fn.init(e, t);
    },
    p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function d(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (k.fn = k.prototype =
    {
      jquery: f,
      constructor: k,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
            ? this[e + this.length]
            : this[e];
      },
      pushStack: function (e) {
        var t = k.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return k.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          k.map(this, function (e, t) {
            return n.call(e, t, e);
          }),
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (k.extend = k.fn.extend =
      function () {
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
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (k.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || k.isPlainObject(n)
                            ? n
                            : {}),
                      (i = !1),
                      (a[t] = k.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    k.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== o.call(e) ||
          ((t = r(e)) &&
            ("function" !=
              typeof (n = v.call(t, "constructor") && t.constructor) ||
              a.call(n) !== l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t) {
        b(e, { nonce: t && t.nonce });
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (d(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(p, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (d(Object(e))
              ? k.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) != a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (d(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g.apply([], a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
    k.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " ",
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      },
    );
  var h = (function (n) {
    function ne(e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n
        ? t
        : r < 0
          ? String.fromCharCode(65536 + r)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
    }
    function oe() {
      T();
    }
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
      k = "sizzle" + 1 * new Date(),
      m = n.document,
      S = 0,
      r = 0,
      p = ue(),
      x = ue(),
      N = ue(),
      A = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      $ =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      F = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp($),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + $),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i",
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i",
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" },
      );
    try {
      H.apply((t = O.call(m.childNodes)), m.childNodes),
        t[m.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
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
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (
        !r &&
        ((e ? e.ownerDocument || e : m) !== C && T(e), (e = e || C), E)
      ) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !A[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && U.test(t))) {
            for (
              (s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = k)),
                o = (l = h(t)).length;
              o--;

            )
              l[o] = "#" + s + " " + xe(l[o]);
            (c = l.join(",")), (f = (ee.test(t) && ye(e.parentNode)) || e);
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace(B, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[k] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
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
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            for (var n, r = a([], e.length, o), i = r.length; i--; )
              e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : m;
        return (
          r !== C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            m !== C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = k),
                !C.getElementsByName || !C.getElementsByName(k).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" !== e) return o;
                  for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                  return r;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  k +
                  "'></a><select id='" +
                  k +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + k + "+*").length ||
                    v.push(".#.+[+~]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector),
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", $);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === C || (e.ownerDocument === m && y(m, e))
                        ? -1
                        : t === C || (t.ownerDocument === m && y(m, t))
                          ? 1
                          : u
                            ? P(u, e) - P(u, t)
                            : 0
                      : 4 & n
                        ? -1
                        : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e === C
                      ? -1
                      : t === C
                        ? 1
                        : i
                          ? -1
                          : o
                            ? 1
                            : u
                              ? P(u, e) - P(u, t)
                              : 0;
                  if (i === o) return pe(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (; a[r] === s[r]; ) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] === m
                      ? -1
                      : s[r] === m
                        ? 1
                        : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== C && T(e),
        d.matchesSelector &&
          E &&
          !A[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          A(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
        for (; r--; ) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = p[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                p(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      "",
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                        ? t !== i
                        : "^=" === r
                          ? i && 0 === t.indexOf(i)
                          : "*=" === r
                            ? i && -1 < t.indexOf(i)
                            : "$=" === r
                              ? i && t.slice(-i.length) === i
                              : "~=" === r
                                ? -1 <
                                  (" " + t.replace(F, " ") + " ").indexOf(i)
                                : "|=" === r &&
                                  (t === i ||
                                    t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y != m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      for (; l; ) {
                        for (a = e; (a = a[l]); )
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      for (
                        d =
                          (s =
                            (r =
                              (i =
                                (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] || [])[0] === S &&
                            r[1]) && r[2],
                          a = s && c.childNodes[s];
                        (a = (++s && a && a[l]) || (d = s = 0) || u.pop());

                      )
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [S, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                      !1 === d)
                    )
                      for (
                        ;
                        (a = (++s && a && a[l]) || (d = s = 0) || u.pop()) &&
                        ((x
                          ? a.nodeName.toLowerCase() !== f
                          : 1 !== a.nodeType) ||
                          !++d ||
                          (p &&
                            ((i =
                              (o = a[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [S, d]),
                          a !== e));

                      );
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[k]
              ? a(o)
              : 1 < a.length
                ? ((t = [e, e, "", o]),
                  b.setFilters.hasOwnProperty(e.toLowerCase())
                    ? le(function (e, t) {
                        for (var n, r = a(e, o), i = r.length; i--; )
                          e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                      })
                    : function (e) {
                        return a(e, 0, t);
                      })
                : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
            return s[k]
              ? le(function (e, t, n, r) {
                  for (var i, o = s(e, null, r, []), a = e.length; a--; )
                    (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
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
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            for (; (e = e[u]); ) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [S, p];
            if (n) {
              for (; (e = e[u]); )
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              for (; (e = e[u]); )
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[k] || (e[k] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === S && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[k] && (v = Ce(v)),
        y && !y[k] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v))
            for (i = Te(p, u), v(i, [], n, r), o = i.length; o--; )
              (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          if (e) {
            if (y || d) {
              if (y) {
                for (i = [], o = p.length; o--; )
                  (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              for (o = p.length; o--; )
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else
            (p = Te(p === t ? p.splice(l, p.length) : p)),
              y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0,
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0,
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r && !b.relative[e[n].type]; n++);
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" }),
                ).replace(B, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e),
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          for (a = e, s = [], u = b.preFilter; a; ) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(B, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = N[e + " "];
          if (!a) {
            for (t || (t = h(e)), n = t.length; n--; )
              (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
            (a = N(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (S += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t === C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    for (
                      a = 0, t || o.ownerDocument === C || (T(o), (n = !E));
                      (s = v[a++]);

                    )
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (S = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  for (a = 0; (s = y[a++]); ) s(c, f, t, n);
                  if (e) {
                    if (0 < u) for (; l--; ) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((S = h), (w = p)), c;
              }),
              m ? le(r) : r),
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              i = G.needsContext.test(e) ? 0 : o.length;
              i-- && ((a = o[i]), !b.relative[(s = a.type)]);

            )
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t,
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t,
            ),
            n
          );
        }),
      (d.sortStable = k.split("").sort(D).join("") === k),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
        }),
      se
    );
  })(C);
  (k.find = h),
    (k.expr = h.selectors),
    (k.expr[":"] = k.expr.pseudos),
    (k.uniqueSort = k.unique = h.uniqueSort),
    (k.text = h.getText),
    (k.isXMLDoc = h.isXML),
    (k.contains = h.contains),
    (k.escapeSelector = h.escape);
  function T(e, t, n) {
    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
      if (1 === e.nodeType) {
        if (i && k(e).is(n)) break;
        r.push(e);
      }
    return r;
  }
  function S(e, t) {
    for (var n = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  var N = k.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? k.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
        ? k.grep(e, function (e) {
            return (e === n) !== r;
          })
        : "string" != typeof n
          ? k.grep(e, function (e) {
              return -1 < i.call(n, e) !== r;
            })
          : k.filter(n, e, r);
  }
  (k.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? k.find.matchesSelector(r, e)
          ? [r]
          : []
        : k.find.matches(
            e,
            k.grep(t, function (e) {
              return 1 === e.nodeType;
            }),
          )
    );
  }),
    k.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            k(e).filter(function () {
              for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
            }),
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
        return 1 < r ? k.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1)
          .length;
      },
    });
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || q), "string" != typeof e))
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : m(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(k)
          : k.makeArray(e, this);
    if (
      !(r =
        "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
          ? [null, e, null]
          : L.exec(e)) ||
      (!r[1] && t)
    )
      return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
    if (r[1]) {
      if (
        ((t = t instanceof k ? t[0] : t),
        k.merge(
          this,
          k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0),
        ),
        D.test(r[1]) && k.isPlainObject(t))
      )
        for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
      return this;
    }
    return (
      (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
    );
  }).prototype = k.fn),
    (q = k(E));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function P(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  k.fn.extend({
    has: function (e) {
      var t = k(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && k(e);
      if (!N.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && k.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(k(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    k.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return T(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return T(e, "parentNode", n);
        },
        next: function (e) {
          return P(e, "nextSibling");
        },
        prev: function (e) {
          return P(e, "previousSibling");
        },
        nextAll: function (e) {
          return T(e, "nextSibling");
        },
        prevAll: function (e) {
          return T(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return T(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return T(e, "previousSibling", n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return void 0 !== e.contentDocument
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              k.merge([], e.childNodes));
        },
      },
      function (r, i) {
        k.fn[r] = function (e, t) {
          var n = k.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = k.filter(t, n)),
            1 < this.length &&
              (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      },
    );
  var R = /[^\x20\t\r\n\f]+/g;
  function M(e) {
    return e;
  }
  function I(e) {
    throw e;
  }
  function W(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
          ? i.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (k.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          k.each(e.match(R) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : k.extend({}, r);
    function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1)
        for (t = u.shift(); ++l < s.length; )
          !1 === s[l].apply(t[0], t[1]) &&
            r.stopOnFalse &&
            ((l = s.length), (t = !1));
      r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
    }
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                k.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            k.each(arguments, function (e, t) {
              for (var n; -1 < (n = k.inArray(t, s, n)); )
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < k.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    k.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              k.Callbacks("memory"),
              k.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return k
                .Deferred(function (r) {
                  k.each(o, function (e, t) {
                    var n = m(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && m(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, M, s), l(u, o, I, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, M, s),
                                  l(u, o, I, s),
                                  l(u, o, M, o.notifyWith),
                                ))
                            : (a !== M && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            k.Deferred.exceptionHook &&
                              k.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== I && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (k.Deferred.getStackHook &&
                        (t.stackTrace = k.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return k
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
                    o[1][3].add(l(0, e, m(t) ? t : M)),
                    o[2][3].add(l(0, e, m(n) ? n : I));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? k.extend(e, a) : a;
            },
          },
          s = {};
        return (
          k.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock,
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        function a(t) {
          return function (e) {
            (r[t] = this),
              (i[t] = 1 < arguments.length ? s.call(arguments) : e),
              --n || o.resolveWith(r, i);
          };
        }
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = k.Deferred();
        if (
          n <= 1 &&
          (W(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        for (; t--; ) W(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (k.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      $.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (k.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = k.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      k.ready();
  }
  (k.fn.ready = function (e) {
    return (
      F.then(e).catch(function (e) {
        k.readyException(e);
      }),
      this
    );
  }),
    k.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --k.readyWait : k.isReady) ||
          ((k.isReady = !0) !== e && 0 < --k.readyWait) ||
          F.resolveWith(E, [k]);
      },
    }),
    (k.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(k.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var _ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) _(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (t = a
            ? (t.call(e, r), null)
            : ((l = t),
              function (e, t, n) {
                return l.call(k(e), n);
              })),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    z = /^-ms-/,
    U = /-([a-z])/g;
  function X(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }
  function G(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  function Y() {
    this.expando = k.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            G(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;
        else for (r in t) i[V(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(V)
              : (t = V(t)) in r
                ? [t]
                : t.match(R) || []).length;
            for (; n--; ) delete r[t[n]];
          }
          (void 0 !== t && !k.isEmptyObject(r)) ||
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !k.isEmptyObject(t);
      },
    });
  var Q = new Y(),
    J = new Y(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(Z, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                  ? +i
                  : K.test(i)
                    ? JSON.parse(i)
                    : i));
        } catch (e) {}
        J.set(e, t, n);
      } else n = void 0;
    return n;
  }
  k.extend({
    hasData: function (e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function (e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function (e, t) {
      J.remove(e, t);
    },
    _data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function (e, t) {
      Q.remove(e, t);
    },
  }),
    k.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 !== n)
          return "object" == typeof n
            ? this.each(function () {
                J.set(this, n);
              })
            : _(
                this,
                function (e) {
                  var t;
                  if (o && void 0 === e)
                    return void 0 !== (t = J.get(o, n))
                      ? t
                      : void 0 !== (t = ee(o, n))
                        ? t
                        : void 0;
                  this.each(function () {
                    J.set(this, n, e);
                  });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0,
              );
        if (
          this.length &&
          ((i = J.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
        ) {
          for (t = a.length; t--; )
            a[t] &&
              0 === (r = a[t].name).indexOf("data-") &&
              ((r = V(r.slice(5))), ee(o, r, i[r]));
          Q.set(o, "hasDataAttrs", !0);
        }
        return i;
      },
      removeData: function (e) {
        return this.each(function () {
          J.remove(this, e);
        });
      },
    }),
    k.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Q.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Q.access(e, t, k.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                k.dequeue(e, t);
              },
              o,
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Q.get(e, n) ||
          Q.access(e, n, {
            empty: k.Callbacks("once memory").add(function () {
              Q.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    k.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? k.queue(this[0], t)
            : void 0 === n
              ? this
              : this.each(function () {
                  var e = k.queue(this, t, n);
                  k._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
                })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          k.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        function s() {
          --r || i.resolveWith(o, [o]);
        }
        var n,
          r = 1,
          i = k.Deferred(),
          o = this,
          a = this.length;
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (n = Q.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    re = ["Top", "Right", "Bottom", "Left"],
    ie = E.documentElement,
    oe = function (e) {
      return k.contains(e.ownerDocument, e);
    },
    ae = { composed: !0 };
  ie.getRootNode &&
    (oe = function (e) {
      return (
        k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
      );
    });
  function se(e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && oe(e) && "none" === k.css(e, "display"))
    );
  }
  function ue(e, t, n, r) {
    var i,
      o,
      a = {};
    for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
    for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
    return i;
  }
  function le(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return k.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (k.cssNumber[t] || ("px" !== l && +u)) &&
        ne.exec(k.css(e, t));
    if (c && c[3] !== l) {
      for (u /= 2, l = l || c[3], c = +u || 1; a--; )
        k.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), k.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ce = {};
  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Q.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              se(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ce[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = k.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ce[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Q.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  k.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            se(this) ? k(this).show() : k(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function ve(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
      void 0 === t || (t && A(e, t)) ? k.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
  }
  (ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td);
  var me,
    xe,
    be = /<|&#?\w+;/;
  function we(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
        else if (be.test(o)) {
          for (
            a = a || f.appendChild(t.createElement("div")),
              s = (de.exec(o) || ["", ""])[1].toLowerCase(),
              u = ge[s] || ge._default,
              a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2],
              c = u[0];
            c--;

          )
            a = a.lastChild;
          k.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    for (f.textContent = "", d = 0; (o = p[d++]); )
      if (r && -1 < k.inArray(o, r)) i && i.push(o);
      else if (
        ((l = oe(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      )
        for (c = 0; (o = a[c++]); ) he.test(o.type || "") && n.push(o);
    return f;
  }
  (me = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (xe = E.createElement("input")).setAttribute("type", "radio"),
    xe.setAttribute("checked", "checked"),
    xe.setAttribute("name", "t"),
    me.appendChild(xe),
    (y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (me.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue);
  var Te = /^key/,
    Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ee = /^([^.]*)(?:\.(.+)|)/;
  function ke() {
    return !0;
  }
  function Se() {
    return !1;
  }
  function Ne(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ae(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ae(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Se;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return k().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = k.guid++))),
      e.each(function () {
        k.event.add(this, t, i, r, n);
      })
    );
  }
  function De(e, i, o) {
    o
      ? (Q.set(e, i, !1),
        k.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Q.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (k.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Q.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Q.set(this, i, {
                  value: k.event.trigger(
                    k.extend(r[0], k.Event.prototype),
                    r.slice(1),
                    this,
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }
  (k.event = {
    global: {},
    add: function (t, e, n, r, i) {
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
        v = Q.get(t);
      if (v)
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && k.find.matchesSelector(ie, i),
            n.guid || (n.guid = k.guid++),
            (u = v.events) || (u = v.events = {}),
            (a = v.handle) ||
              (a = v.handle =
                function (e) {
                  return void 0 !== k && k.event.triggered !== e.type
                    ? k.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            l = (e = (e || "").match(R) || [""]).length;
          l--;

        )
          (d = g = (s = Ee.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = k.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = k.event.special[d] || {}),
              (c = k.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && k.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o,
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (k.event.global[d] = !0));
    },
    remove: function (e, t, n, r, i) {
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
        v = Q.hasData(e) && Q.get(e);
      if (v && (u = v.events)) {
        for (l = (t = (t || "").match(R) || [""]).length; l--; )
          if (
            ((d = g = (s = Ee.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = k.event.special[d] || {},
                p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                k.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = k.event.fix(e),
        u = new Array(arguments.length),
        l = (Q.get(this, "events") || {})[s.type] || [],
        c = k.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, s))
      ) {
        for (
          a = k.event.handlers.call(this, s, l), t = 0;
          (i = a[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace &&
              !1 !== o.namespace &&
              !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !==
                (r = (
                  (k.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, u)) &&
                !1 === (s.result = r) &&
                (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < k(i, this).index(l)
                  : k.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Q.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (k.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (k.Event = function (e, t) {
      if (!(this instanceof k.Event)) return new k.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? ke
              : Se),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && k.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[k.expando] = !0);
    }),
    (k.Event.prototype = {
      constructor: k.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = ke),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = ke),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = ke),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    k.each(
      {
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
        char: !0,
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
        which: function (e) {
          var t = e.button;
          return null == e.which && Te.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Ce.test(e.type)
              ? 1 & t
                ? 1
                : 2 & t
                  ? 3
                  : 4 & t
                    ? 2
                    : 0
              : e.which;
        },
      },
      k.event.addProp,
    ),
    k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      k.event.special[e] = {
        setup: function () {
          return De(this, e, Ne), !1;
        },
        trigger: function () {
          return De(this, e), !0;
        },
        delegateType: t,
      };
    }),
    k.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        k.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || k.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      },
    ),
    k.fn.extend({
      on: function (e, t, n, r) {
        return Ae(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ae(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            k(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler,
            ),
            this
          );
        if ("object" != typeof e)
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = Se),
            this.each(function () {
              k.event.remove(this, e, n, t);
            })
          );
        for (i in e) this.off(i, t, e[i]);
        return this;
      },
    });
  var je =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    qe = /<script|<style|<link/i,
    Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
    He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Oe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        k(e).children("tbody")[0]) ||
      e
    );
  }
  function Pe(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Re(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Me(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        Q.hasData(e) &&
        ((o = Q.access(e)), (a = Q.set(t, o)), (l = o.events))
      )
        for (i in (delete a.handle, (a.events = {}), l))
          for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
      J.hasData(e) && ((s = J.access(e)), (u = k.extend({}, s)), J.set(t, u));
    }
  }
  function Ie(n, r, i, o) {
    r = g.apply([], r);
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
    if (h || (1 < f && "string" == typeof d && !y.checkClone && Le.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = k.clone(u, !0, !0)), s && k.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Q.access(u, "globalEval") &&
              k.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? k._evalUrl &&
                  !u.noModule &&
                  k._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce"),
                  })
                : b(u.textContent.replace(He, ""), u, l));
    }
    return n;
  }
  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || k.cleanData(ve(r)),
        r.parentNode &&
          (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  k.extend({
    htmlPrefilter: function (e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = oe(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          k.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            "input" === (l = (u = a[r]).nodeName.toLowerCase()) &&
            pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Me(o[r], a[r]);
        else Me(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (G(n)) {
          if ((t = n[Q.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            n[Q.expando] = void 0;
          }
          n[J.expando] && (n[J.expando] = void 0);
        }
    },
  }),
    k.fn.extend({
      detach: function (e) {
        return We(this, e, !0);
      },
      remove: function (e) {
        return We(this, e);
      },
      text: function (e) {
        return _(
          this,
          function (e) {
            return void 0 === e
              ? k.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length,
        );
      },
      append: function () {
        return Ie(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Oe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Ie(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Oe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (k.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return k.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return _(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !qe.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = k.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (k.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length,
        );
      },
      replaceWith: function () {
        var n = [];
        return Ie(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            k.inArray(this, n) < 0 &&
              (k.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n,
        );
      },
    }),
    k.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        k.fn[e] = function (e) {
          for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              k(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      },
    );
  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
    Fe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Be = new RegExp(re.join("|"), "i");
  function _e(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Fe(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          oe(e) ||
          (a = k.style(e, t)),
        !y.pixelBoxStyles() &&
          $e.test(a) &&
          Be.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function ze(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (u) {
        (s.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        (n = "1%" !== e.top),
          (a = 12 === t(e.marginLeft)),
          (u.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (u.style.position = "absolute"),
          (i = 12 === t(u.offsetWidth / 3)),
          ie.removeChild(s),
          (u = null);
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
      s = E.createElement("div"),
      u = E.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === u.style.backgroundClip),
      k.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), a;
        },
        scrollboxSize: function () {
          return e(), i;
        },
      }));
  })();
  var Ue = ["Webkit", "Moz", "ms"],
    Xe = E.createElement("div").style,
    Ve = {};
  function Ge(e) {
    return (
      k.cssProps[e] ||
      Ve[e] ||
      (e in Xe
        ? e
        : (Ve[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = Ue.length;
                n--;

              )
                if ((e = Ue[n] + t) in Xe) return e;
            })(e) || e))
    );
  }
  var Ye = /^(none|table(?!-c[ea]).+)/,
    Qe = /^--/,
    Je = { position: "absolute", visibility: "hidden", display: "block" },
    Ke = { letterSpacing: "0", fontWeight: "400" };
  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += k.css(e, n + re[a], !0, i)),
        r
          ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
            "margin" !== n &&
              (u -= k.css(e, "border" + re[a] + "Width", !0, i)))
          : ((u += k.css(e, "padding" + re[a], !0, i)),
            "padding" !== n
              ? (u += k.css(e, "border" + re[a] + "Width", !0, i))
              : (s += k.css(e, "border" + re[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5,
            ),
          ) || 0),
      u
    );
  }
  function tt(e, t, n) {
    var r = Fe(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === k.css(e, "boxSizing", !1, r),
      o = i,
      a = _e(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === k.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === k.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        et(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }
  k.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = _e(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
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
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = V(t),
          u = Qe.test(t),
          l = e.style;
        if (
          (u || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = typeof n) &&
          (i = ne.exec(n)) &&
          i[1] &&
          ((n = le(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (k.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = V(t);
      return (
        Qe.test(t) || (t = Ge(s)),
        (a = k.cssHooks[t] || k.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = _e(e, t, r)),
        "normal" === i && t in Ke && (i = Ke[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    k.each(["height", "width"], function (e, u) {
      k.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ye.test(k.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? tt(e, u, n)
              : ue(e, Je, function () {
                  return tt(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Fe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
            s = n ? et(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  et(e, u, "border", !1, i) -
                  0.5,
              )),
            s &&
              (r = ne.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = k.css(e, u))),
            Ze(0, t, s)
          );
        },
      };
    }),
    (k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(_e(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ue(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    k.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (k.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (k.cssHooks[i + o].set = Ze);
    }),
    k.fn.extend({
      css: function (e, t) {
        return _(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Fe(e), i = t.length; a < i; a++)
                o[t[a]] = k.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
          },
          e,
          t,
          1 < arguments.length,
        );
      },
    }),
    (((k.Tween = nt).prototype = {
      constructor: nt,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || k.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (k.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = nt.propHooks[this.prop];
        return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = nt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                k.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration,
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : nt.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = nt.prototype),
    ((nt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
        },
        set: function (e) {
          k.fx.step[e.prop]
            ? k.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
                (!k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : k.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = nt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (k.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (k.fx = nt.prototype.init),
    (k.fx.step = {});
  var rt,
    it,
    ot,
    at,
    st = /^(?:toggle|show|hide)$/,
    ut = /queueHooks$/;
  function lt() {
    it &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(lt)
        : C.setTimeout(lt, k.fx.interval),
      k.fx.tick());
  }
  function ct() {
    return (
      C.setTimeout(function () {
        rt = void 0;
      }),
      (rt = Date.now())
    );
  }
  function ft(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function pt(e, t, n) {
    for (
      var r,
        i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function dt(o, e, t) {
    var n,
      a,
      r = 0,
      i = dt.prefilters.length,
      s = k.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = rt || ct(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: k.extend({}, e),
        opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: rt || ct(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = k.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing,
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      (function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = V(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = k.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = dt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      k.map(c, pt, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (k.Animation = k.extend(dt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return le(n.elem, e, ne.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      for (
        var n, r = 0, i = (e = m(e) ? ((t = e), ["*"]) : e.match(R)).length;
        r < i;
        r++
      )
        (n = e[r]),
          (dt.tweeners[n] = dt.tweeners[n] || []),
          dt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
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
          g = e.nodeType && se(e),
          v = Q.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = k._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), st.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || k.style(e, r);
          }
        if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Q.get(e, "display")),
            "none" === (c = k.css(e, "display")) &&
              (l
                ? (c = l)
                : (fe([e], !0),
                  (l = e.style.display || l),
                  (c = k.css(e, "display")),
                  fe([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === k.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Q.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && fe([e], !0),
              p.done(function () {
                for (r in (g || fe([e]), Q.remove(e, "fxshow"), d))
                  k.style(e, r, d[r]);
              })),
              (u = pt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    },
  })),
    (k.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? k.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        k.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in k.fx.speeds
              ? (r.duration = k.fx.speeds[r.duration])
              : (r.duration = k.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
        }),
        r
      );
    }),
    k.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(se)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        function a() {
          var e = dt(this, k.extend({}, t), o);
          (i || Q.get(this, "finish")) && e.stop(!0);
        }
        var i = k.isEmptyObject(t),
          o = k.speed(e, n, r);
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        function a(e) {
          var t = e.stop;
          delete e.stop, t(o);
        }
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && !1 !== i && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = k.timers,
              r = Q.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || k.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Q.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = k.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                k.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    k.each(["toggle", "show", "hide"], function (e, r) {
      var i = k.fn[r];
      k.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(ft(r, !0), e, t, n);
      };
    }),
    k.each(
      {
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        k.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      },
    ),
    (k.timers = []),
    (k.fx.tick = function () {
      var e,
        t = 0,
        n = k.timers;
      for (rt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || k.fx.stop(), (rt = void 0);
    }),
    (k.fx.timer = function (e) {
      k.timers.push(e), k.fx.start();
    }),
    (k.fx.interval = 13),
    (k.fx.start = function () {
      it || ((it = !0), lt());
    }),
    (k.fx.stop = function () {
      it = null;
    }),
    (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (k.fn.delay = function (r, e) {
      return (
        (r = (k.fx && k.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (ot = E.createElement("input")),
    (at = E.createElement("select").appendChild(E.createElement("option"))),
    (ot.type = "checkbox"),
    (y.checkOn = "" !== ot.value),
    (y.optSelected = at.selected),
    ((ot = E.createElement("input")).value = "t"),
    (ot.type = "radio"),
    (y.radioValue = "t" === ot.value);
  var ht,
    gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function (e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    },
  }),
    k.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? k.prop(e, t, n)
            : ((1 === o && k.isXMLDoc(e)) ||
                (i =
                  k.attrHooks[t.toLowerCase()] ||
                  (k.expr.match.bool.test(t) ? ht : void 0)),
              void 0 !== n
                ? null === n
                  ? void k.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : null == (r = k.find.attr(e, t))
                    ? void 0
                    : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(R);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (ht = {
      set: function (e, t, n) {
        return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = gt[t] || k.find.attr;
      gt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = gt[o]),
            (gt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (gt[o] = i)),
          r
        );
      };
    });
  var vt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  function mt(e) {
    return (e.match(R) || []).join(" ");
  }
  function xt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function bt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(R)) || [];
  }
  k.fn.extend({
    prop: function (e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    },
  }),
    k.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && k.isXMLDoc(e)) ||
              ((t = k.propFix[t] || t), (i = k.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = k.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : vt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (k.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    k.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        k.propFix[this.toLowerCase()] = this;
      },
    ),
    k.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            k(this).addClass(t.call(this, e, xt(this)));
          });
        if ((e = bt(t)).length)
          for (; (n = this[u++]); )
            if (((i = xt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
              for (a = 0; (o = e[a++]); )
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = mt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            k(this).removeClass(t.call(this, e, xt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = bt(t)).length)
          for (; (n = this[u++]); )
            if (((i = xt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
              for (a = 0; (o = e[a++]); )
                for (; -1 < r.indexOf(" " + o + " "); )
                  r = r.replace(" " + o + " ", " ");
              i !== (s = mt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" == o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
            ? this.each(function (e) {
                k(this).toggleClass(i.call(this, e, xt(this), t), t);
              })
            : this.each(function () {
                var e, t, n, r;
                if (a)
                  for (t = 0, n = k(this), r = bt(i); (e = r[t++]); )
                    n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                  (void 0 !== i && "boolean" != o) ||
                    ((e = xt(this)) && Q.set(this, "__className__", e),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        e || !1 === i ? "" : Q.get(this, "__className__") || "",
                      ));
              });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        for (t = " " + e + " "; (n = this[r++]); )
          if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var wt = /\r/g;
  k.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, k(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                  ? (t += "")
                  : Array.isArray(t) &&
                    (t = k.map(t, function (e) {
                      return null == e ? "" : e + "";
                    })),
              ((r =
                k.valHooks[this.type] ||
                k.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
          ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) &&
            "get" in r &&
            void 0 !== (e = r.get(t, "value"))
            ? e
            : "string" == typeof (e = t.value)
              ? e.replace(wt, "")
              : null == e
                ? ""
                : e
          : void 0;
    },
  }),
    k.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = k.find.attr(e, "value");
            return null != t ? t : mt(k.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = k(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = k.makeArray(t), a = i.length;
              a--;

            )
              ((r = i[a]).selected =
                -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    k.each(["radio", "checkbox"], function () {
      (k.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < k.inArray(k(e).val(), t));
        },
      }),
        y.checkOn ||
          (k.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  function Ct(e) {
    e.stopPropagation();
  }
  var Tt = /^(?:focusinfocus|focusoutblur)$/;
  k.extend(k.event, {
    trigger: function (e, t, n, r) {
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
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Tt.test(d + k.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[k.expando]
            ? e
            : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : k.makeArray(t, [e])),
          (c = k.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        for (i = 0; (o = p[i++]) && !e.isPropagationStopped(); )
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) &&
              l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              G(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !G(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (k.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Ct),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Ct),
              (k.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
      k.event.trigger(r, null, t);
    },
  }),
    k.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          k.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return k.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      k.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        function i(e) {
          k.event.simulate(r, e.target, k.event.fix(e));
        }
        k.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = Q.access(e, r);
            t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = Q.access(e, r) - 1;
            t
              ? Q.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Q.remove(e, r));
          },
        };
      });
  var Et = C.location,
    kt = Date.now(),
    St = /\?/;
  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        k.error("Invalid XML: " + e),
      t
    );
  };
  var Nt = /\[\]$/,
    At = /\r?\n/g,
    Dt = /^(?:submit|button|image|reset|file)$/i,
    jt = /^(?:input|select|textarea|keygen)/i;
  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      k.each(e, function (e, t) {
        r || Nt.test(n)
          ? i(n, t)
          : qt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i,
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) qt(n + "[" + t + "]", e[t], r, i);
  }
  (k.param = function (e, t) {
    function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] =
        encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    }
    var n,
      r = [];
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
      k.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) qt(n, e[n], t, i);
    return r.join("&");
  }),
    k.fn.extend({
      serialize: function () {
        return k.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = k.prop(this, "elements");
          return e ? k.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !k(this).is(":disabled") &&
              jt.test(this.nodeName) &&
              !Dt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = k(this).val();
            return null == n
              ? null
              : Array.isArray(n)
                ? k.map(n, function (e) {
                    return { name: t.name, value: e.replace(At, "\r\n") };
                  })
                : { name: t.name, value: n.replace(At, "\r\n") };
          })
          .get();
      },
    });
  var Lt = /%20/g,
    Ht = /#.*$/,
    Ot = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Rt = /^(?:GET|HEAD)$/,
    Mt = /^\/\//,
    It = {},
    Wt = {},
    $t = "*/".concat("*"),
    Ft = E.createElement("a");
  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(R) || [];
      if (m(t))
        for (; (n = i[r++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function _t(t, i, o, a) {
    var s = {},
      u = t === Wt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        k.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function zt(e, t) {
    var n,
      r,
      i = k.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && k.extend(!0, e, r), e;
  }
  (Ft.href = Et.href),
    k.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol,
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": $t,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": k.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
      },
      ajaxPrefilter: Bt(It),
      ajaxTransport: Bt(Wt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
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
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n)
                  for (n = {}; (t = Pt.exec(p)); )
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + "").replace(
            Mt,
            Et.protocol + "//",
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = k.param(v.data, v.traditional)),
          _t(It, v, t, T),
          h)
        )
          return T;
        for (i in ((g = k.event && v.global) &&
          0 == k.active++ &&
          k.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Rt.test(v.type)),
        (f = v.url.replace(Ht, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded",
              ) &&
            (v.data = v.data.replace(Lt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (St.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Ot, "$1")),
              (o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (k.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
          k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
            : v.accepts["*"],
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = _t(Wt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
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
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                for (
                  var r, i, o, a, s = e.contents, u = e.dataTypes;
                  "*" === u[0];

                )
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
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
              })(v, T, n)),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (k.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                    ? (l = "notmodified")
                    : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --k.active || k.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return k.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return k.get(e, void 0, t, "script");
      },
    }),
    k.each(["get", "post"], function (e, i) {
      k[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          k.ajax(
            k.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              k.isPlainObject(e) && e,
            ),
          )
        );
      };
    }),
    (k._evalUrl = function (e, t) {
      return k.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          k.globalEval(e, t);
        },
      });
    }),
    k.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              k(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = k(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          k(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              k(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (k.expr.pseudos.hidden = function (e) {
      return !k.expr.pseudos.visible(e);
    }),
    (k.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (k.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Ut = { 0: 200, 1223: 204 },
    Xt = k.ajaxSettings.xhr();
  (y.cors = !!Xt && "withCredentials" in Xt),
    (y.ajax = Xt = !!Xt),
    k.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (Xt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                      ? "number" != typeof r.status
                        ? t(0, "error")
                        : t(r.status, r.statusText)
                      : t(
                          Ut[r.status] || r.status,
                          r.statusText,
                          "text" !== (r.responseType || "text") ||
                            "string" != typeof r.responseText
                            ? { binary: r.response }
                            : { text: r.responseText },
                          r.getAllResponseHeaders(),
                        ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    k.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    k.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return k.globalEval(e), e;
        },
      },
    }),
    k.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    k.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = k("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                }),
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Vt,
    Gt = [],
    Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return (this[e] = !0), e;
    },
  }),
    k.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Yt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded",
                ) &&
              Yt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Yt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || k.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? k(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Vt = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Vt.childNodes.length)),
    (k.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base",
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = D.exec(e))
            ? [t.createElement(i[1])]
            : ((i = we([e], t, o)),
              o && o.length && k(o).remove(),
              k.merge([], i.childNodes)));
      var r, i, o;
    }),
    (k.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          k
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                },
            ),
        this
      );
    }),
    k.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        k.fn[t] = function (e) {
          return this.on(t, e);
        };
      },
    ),
    (k.expr.pseudos.animated = function (t) {
      return k.grep(k.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (k.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = k.css(e, "top")),
          (u = k.css(e, "left")),
          (i =
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
              ? ((a = (r = c.position()).top), r.left)
              : ((a = parseFloat(o) || 0), parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, k.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    k.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                k.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = r.ownerDocument,
                e = r.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === k.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0)),
              (i.left += k.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - k.css(r, "marginTop", !0),
            left: t.left - i.left - k.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === k.css(e, "position");

          )
            e = e.offsetParent;
          return e || ie;
        });
      },
    }),
    k.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function (e) {
          return _(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length,
          );
        };
      },
    ),
    k.each(["top", "left"], function (e, n) {
      k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
        if (t)
          return (t = _e(e, n)), $e.test(t) ? k(e).position()[n] + "px" : t;
      });
    }),
    k.each({ Height: "height", Width: "width" }, function (a, s) {
      k.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          k.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return _(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                    ? ((r = e.documentElement),
                      Math.max(
                        e.body["scroll" + a],
                        r["scroll" + a],
                        e.body["offset" + a],
                        r["offset" + a],
                        r["client" + a],
                      ))
                    : void 0 === n
                      ? k.css(e, t, i)
                      : k.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n,
            );
          };
        },
      );
    }),
    k.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " ",
      ),
      function (e, n) {
        k.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      },
    ),
    k.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    k.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (k.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
        return (
          (r = s.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)));
          }).guid = e.guid =
            e.guid || k.guid++),
          i
        );
    }),
    (k.holdReady = function (e) {
      e ? k.readyWait++ : k.ready(!0);
    }),
    (k.isArray = Array.isArray),
    (k.parseJSON = JSON.parse),
    (k.nodeName = A),
    (k.isFunction = m),
    (k.isWindow = x),
    (k.camelCase = V),
    (k.type = w),
    (k.now = Date.now),
    (k.isNumeric = function (e) {
      var t = k.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return k;
      });
  var Qt = C.jQuery,
    Jt = C.$;
  return (
    (k.noConflict = function (e) {
      return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
    }),
    e || (C.jQuery = C.$ = k),
    k
  );
}),
  (function () {
    function f() {}
    var n =
        ("object" == typeof self && self.self === self && self) ||
        ("object" == typeof global && global.global === global && global) ||
        this ||
        {},
      r = n._,
      e = Array.prototype,
      o = Object.prototype,
      s = "undefined" != typeof Symbol ? Symbol.prototype : null,
      u = e.push,
      c = e.slice,
      p = o.toString,
      i = o.hasOwnProperty,
      t = Array.isArray,
      a = Object.keys,
      l = Object.create,
      h = function (n) {
        return n instanceof h
          ? n
          : this instanceof h
            ? void (this._wrapped = n)
            : new h(n);
      };
    "undefined" == typeof exports || exports.nodeType
      ? (n._ = h)
      : ("undefined" != typeof module &&
          !module.nodeType &&
          module.exports &&
          (exports = module.exports = h),
        (exports._ = h)),
      (h.VERSION = "1.9.1");
    function y(u, i, n) {
      if (void 0 === i) return u;
      switch (null == n ? 3 : n) {
        case 1:
          return function (n) {
            return u.call(i, n);
          };
        case 3:
          return function (n, r, t) {
            return u.call(i, n, r, t);
          };
        case 4:
          return function (n, r, t, e) {
            return u.call(i, n, r, t, e);
          };
      }
      return function () {
        return u.apply(i, arguments);
      };
    }
    function d(n, r, t) {
      return h.iteratee !== v
        ? h.iteratee(n, r)
        : null == n
          ? h.identity
          : h.isFunction(n)
            ? y(n, r, t)
            : h.isObject(n) && !h.isArray(n)
              ? h.matcher(n)
              : h.property(n);
    }
    var v;
    h.iteratee = v = function (n, r) {
      return d(n, r, 1 / 0);
    };
    function g(u, i) {
      return (
        (i = null == i ? u.length - 1 : +i),
        function () {
          for (
            var n = Math.max(arguments.length - i, 0), r = Array(n), t = 0;
            t < n;
            t++
          )
            r[t] = arguments[t + i];
          switch (i) {
            case 0:
              return u.call(this, r);
            case 1:
              return u.call(this, arguments[0], r);
            case 2:
              return u.call(this, arguments[0], arguments[1], r);
          }
          var e = Array(i + 1);
          for (t = 0; t < i; t++) e[t] = arguments[t];
          return (e[i] = r), u.apply(this, e);
        }
      );
    }
    function m(n) {
      if (!h.isObject(n)) return {};
      if (l) return l(n);
      f.prototype = n;
      var r = new f();
      return (f.prototype = null), r;
    }
    function b(r) {
      return function (n) {
        return null == n ? void 0 : n[r];
      };
    }
    function j(n, r) {
      return null != n && i.call(n, r);
    }
    function x(n, r) {
      for (var t = r.length, e = 0; e < t; e++) {
        if (null == n) return;
        n = n[r[e]];
      }
      return t ? n : void 0;
    }
    function w(n) {
      var r = A(n);
      return "number" == typeof r && 0 <= r && r <= _;
    }
    var _ = Math.pow(2, 53) - 1,
      A = b("length");
    (h.each = h.forEach =
      function (n, r, t) {
        var e, u;
        if (((r = y(r, t)), w(n)))
          for (e = 0, u = n.length; e < u; e++) r(n[e], e, n);
        else {
          var i = h.keys(n);
          for (e = 0, u = i.length; e < u; e++) r(n[i[e]], i[e], n);
        }
        return n;
      }),
      (h.map = h.collect =
        function (n, r, t) {
          r = d(r, t);
          for (
            var e = !w(n) && h.keys(n),
              u = (e || n).length,
              i = Array(u),
              o = 0;
            o < u;
            o++
          ) {
            var a = e ? e[o] : o;
            i[o] = r(n[a], a, n);
          }
          return i;
        });
    function O(c) {
      return function (n, r, t, e) {
        var u = 3 <= arguments.length;
        return (function (n, r, t, e) {
          var u = !w(n) && h.keys(n),
            i = (u || n).length,
            o = 0 < c ? 0 : i - 1;
          for (
            e || ((t = n[u ? u[o] : o]), (o += c));
            0 <= o && o < i;
            o += c
          ) {
            var a = u ? u[o] : o;
            t = r(t, n[a], a, n);
          }
          return t;
        })(n, y(r, e, 4), t, u);
      };
    }
    (h.reduce = h.foldl = h.inject = O(1)),
      (h.reduceRight = h.foldr = O(-1)),
      (h.find = h.detect =
        function (n, r, t) {
          var e = (w(n) ? h.findIndex : h.findKey)(n, r, t);
          if (void 0 !== e && -1 !== e) return n[e];
        }),
      (h.filter = h.select =
        function (n, e, r) {
          var u = [];
          return (
            (e = d(e, r)),
            h.each(n, function (n, r, t) {
              e(n, r, t) && u.push(n);
            }),
            u
          );
        }),
      (h.reject = function (n, r, t) {
        return h.filter(n, h.negate(d(r)), t);
      }),
      (h.every = h.all =
        function (n, r, t) {
          r = d(r, t);
          for (
            var e = !w(n) && h.keys(n), u = (e || n).length, i = 0;
            i < u;
            i++
          ) {
            var o = e ? e[i] : i;
            if (!r(n[o], o, n)) return !1;
          }
          return !0;
        }),
      (h.some = h.any =
        function (n, r, t) {
          r = d(r, t);
          for (
            var e = !w(n) && h.keys(n), u = (e || n).length, i = 0;
            i < u;
            i++
          ) {
            var o = e ? e[i] : i;
            if (r(n[o], o, n)) return !0;
          }
          return !1;
        }),
      (h.contains =
        h.includes =
        h.include =
          function (n, r, t, e) {
            return (
              w(n) || (n = h.values(n)),
              ("number" == typeof t && !e) || (t = 0),
              0 <= h.indexOf(n, r, t)
            );
          }),
      (h.invoke = g(function (n, t, e) {
        var u, i;
        return (
          h.isFunction(t)
            ? (i = t)
            : h.isArray(t) && ((u = t.slice(0, -1)), (t = t[t.length - 1])),
          h.map(n, function (n) {
            var r = i;
            if (!r) {
              if ((u && u.length && (n = x(n, u)), null == n)) return;
              r = n[t];
            }
            return null == r ? r : r.apply(n, e);
          })
        );
      })),
      (h.pluck = function (n, r) {
        return h.map(n, h.property(r));
      }),
      (h.where = function (n, r) {
        return h.filter(n, h.matcher(r));
      }),
      (h.findWhere = function (n, r) {
        return h.find(n, h.matcher(r));
      }),
      (h.max = function (n, e, r) {
        var t,
          u,
          i = -1 / 0,
          o = -1 / 0;
        if (
          null == e ||
          ("number" == typeof e && "object" != typeof n[0] && null != n)
        )
          for (var a = 0, c = (n = w(n) ? n : h.values(n)).length; a < c; a++)
            null != (t = n[a]) && i < t && (i = t);
        else
          (e = d(e, r)),
            h.each(n, function (n, r, t) {
              (u = e(n, r, t)),
                (o < u || (u === -1 / 0 && i === -1 / 0)) && ((i = n), (o = u));
            });
        return i;
      }),
      (h.min = function (n, e, r) {
        var t,
          u,
          i = 1 / 0,
          o = 1 / 0;
        if (
          null == e ||
          ("number" == typeof e && "object" != typeof n[0] && null != n)
        )
          for (var a = 0, c = (n = w(n) ? n : h.values(n)).length; a < c; a++)
            null != (t = n[a]) && t < i && (i = t);
        else
          (e = d(e, r)),
            h.each(n, function (n, r, t) {
              ((u = e(n, r, t)) < o || (u === 1 / 0 && i === 1 / 0)) &&
                ((i = n), (o = u));
            });
        return i;
      }),
      (h.shuffle = function (n) {
        return h.sample(n, 1 / 0);
      }),
      (h.sample = function (n, r, t) {
        if (null == r || t)
          return w(n) || (n = h.values(n)), n[h.random(n.length - 1)];
        var e = w(n) ? h.clone(n) : h.values(n),
          u = A(e);
        r = Math.max(Math.min(r, u), 0);
        for (var i = u - 1, o = 0; o < r; o++) {
          var a = h.random(o, i),
            c = e[o];
          (e[o] = e[a]), (e[a] = c);
        }
        return e.slice(0, r);
      }),
      (h.sortBy = function (n, e, r) {
        var u = 0;
        return (
          (e = d(e, r)),
          h.pluck(
            h
              .map(n, function (n, r, t) {
                return { value: n, index: u++, criteria: e(n, r, t) };
              })
              .sort(function (n, r) {
                var t = n.criteria,
                  e = r.criteria;
                if (t !== e) {
                  if (e < t || void 0 === t) return 1;
                  if (t < e || void 0 === e) return -1;
                }
                return n.index - r.index;
              }),
            "value",
          )
        );
      });
    function k(o, r) {
      return function (e, u, n) {
        var i = r ? [[], []] : {};
        return (
          (u = d(u, n)),
          h.each(e, function (n, r) {
            var t = u(n, r, e);
            o(i, n, t);
          }),
          i
        );
      };
    }
    (h.groupBy = k(function (n, r, t) {
      j(n, t) ? n[t].push(r) : (n[t] = [r]);
    })),
      (h.indexBy = k(function (n, r, t) {
        n[t] = r;
      })),
      (h.countBy = k(function (n, r, t) {
        j(n, t) ? n[t]++ : (n[t] = 1);
      }));
    var S = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
    (h.toArray = function (n) {
      return n
        ? h.isArray(n)
          ? c.call(n)
          : h.isString(n)
            ? n.match(S)
            : w(n)
              ? h.map(n, h.identity)
              : h.values(n)
        : [];
    }),
      (h.size = function (n) {
        return null == n ? 0 : w(n) ? n.length : h.keys(n).length;
      }),
      (h.partition = k(function (n, r, t) {
        n[t ? 0 : 1].push(r);
      }, !0)),
      (h.first =
        h.head =
        h.take =
          function (n, r, t) {
            return null == n || n.length < 1
              ? null == r
                ? void 0
                : []
              : null == r || t
                ? n[0]
                : h.initial(n, n.length - r);
          }),
      (h.initial = function (n, r, t) {
        return c.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r)));
      }),
      (h.last = function (n, r, t) {
        return null == n || n.length < 1
          ? null == r
            ? void 0
            : []
          : null == r || t
            ? n[n.length - 1]
            : h.rest(n, Math.max(0, n.length - r));
      }),
      (h.rest =
        h.tail =
        h.drop =
          function (n, r, t) {
            return c.call(n, null == r || t ? 1 : r);
          }),
      (h.compact = function (n) {
        return h.filter(n, Boolean);
      });
    var M = function (n, r, t, e) {
      for (var u = (e = e || []).length, i = 0, o = A(n); i < o; i++) {
        var a = n[i];
        if (w(a) && (h.isArray(a) || h.isArguments(a)))
          if (r) for (var c = 0, l = a.length; c < l; ) e[u++] = a[c++];
          else M(a, r, t, e), (u = e.length);
        else t || (e[u++] = a);
      }
      return e;
    };
    (h.flatten = function (n, r) {
      return M(n, r, !1);
    }),
      (h.without = g(function (n, r) {
        return h.difference(n, r);
      })),
      (h.uniq = h.unique =
        function (n, r, t, e) {
          h.isBoolean(r) || ((e = t), (t = r), (r = !1)),
            null != t && (t = d(t, e));
          for (var u = [], i = [], o = 0, a = A(n); o < a; o++) {
            var c = n[o],
              l = t ? t(c, o, n) : c;
            r && !t
              ? ((o && i === l) || u.push(c), (i = l))
              : t
                ? h.contains(i, l) || (i.push(l), u.push(c))
                : h.contains(u, c) || u.push(c);
          }
          return u;
        }),
      (h.union = g(function (n) {
        return h.uniq(M(n, !0, !0));
      })),
      (h.intersection = function (n) {
        for (var r = [], t = arguments.length, e = 0, u = A(n); e < u; e++) {
          var i = n[e];
          if (!h.contains(r, i)) {
            var o;
            for (o = 1; o < t && h.contains(arguments[o], i); o++);
            o === t && r.push(i);
          }
        }
        return r;
      }),
      (h.difference = g(function (n, r) {
        return (
          (r = M(r, !0, !0)),
          h.filter(n, function (n) {
            return !h.contains(r, n);
          })
        );
      })),
      (h.unzip = function (n) {
        for (
          var r = (n && h.max(n, A).length) || 0, t = Array(r), e = 0;
          e < r;
          e++
        )
          t[e] = h.pluck(n, e);
        return t;
      }),
      (h.zip = g(h.unzip)),
      (h.object = function (n, r) {
        for (var t = {}, e = 0, u = A(n); e < u; e++)
          r ? (t[n[e]] = r[e]) : (t[n[e][0]] = n[e][1]);
        return t;
      });
    function F(i) {
      return function (n, r, t) {
        r = d(r, t);
        for (var e = A(n), u = 0 < i ? 0 : e - 1; 0 <= u && u < e; u += i)
          if (r(n[u], u, n)) return u;
        return -1;
      };
    }
    (h.findIndex = F(1)),
      (h.findLastIndex = F(-1)),
      (h.sortedIndex = function (n, r, t, e) {
        for (var u = (t = d(t, e, 1))(r), i = 0, o = A(n); i < o; ) {
          var a = Math.floor((i + o) / 2);
          t(n[a]) < u ? (i = a + 1) : (o = a);
        }
        return i;
      });
    function E(i, o, a) {
      return function (n, r, t) {
        var e = 0,
          u = A(n);
        if ("number" == typeof t)
          0 < i
            ? (e = 0 <= t ? t : Math.max(t + u, e))
            : (u = 0 <= t ? Math.min(t + 1, u) : t + u + 1);
        else if (a && t && u) return n[(t = a(n, r))] === r ? t : -1;
        if (r != r) return 0 <= (t = o(c.call(n, e, u), h.isNaN)) ? t + e : -1;
        for (t = 0 < i ? e : u - 1; 0 <= t && t < u; t += i)
          if (n[t] === r) return t;
        return -1;
      };
    }
    (h.indexOf = E(1, h.findIndex, h.sortedIndex)),
      (h.lastIndexOf = E(-1, h.findLastIndex)),
      (h.range = function (n, r, t) {
        null == r && ((r = n || 0), (n = 0)), t || (t = r < n ? -1 : 1);
        for (
          var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), i = 0;
          i < e;
          i++, n += t
        )
          u[i] = n;
        return u;
      }),
      (h.chunk = function (n, r) {
        if (null == r || r < 1) return [];
        for (var t = [], e = 0, u = n.length; e < u; )
          t.push(c.call(n, e, (e += r)));
        return t;
      });
    function N(n, r, t, e, u) {
      if (!(e instanceof r)) return n.apply(t, u);
      var i = m(n.prototype),
        o = n.apply(i, u);
      return h.isObject(o) ? o : i;
    }
    (h.bind = g(function (r, t, e) {
      if (!h.isFunction(r))
        throw new TypeError("Bind must be called on a function");
      var u = g(function (n) {
        return N(r, u, t, this, e.concat(n));
      });
      return u;
    })),
      (h.partial = g(function (u, i) {
        var o = h.partial.placeholder,
          a = function () {
            for (var n = 0, r = i.length, t = Array(r), e = 0; e < r; e++)
              t[e] = i[e] === o ? arguments[n++] : i[e];
            for (; n < arguments.length; ) t.push(arguments[n++]);
            return N(u, a, this, this, t);
          };
        return a;
      })),
      ((h.partial.placeholder = h).bindAll = g(function (n, r) {
        var t = (r = M(r, !1, !1)).length;
        if (t < 1) throw new Error("bindAll must be passed function names");
        for (; t--; ) {
          var e = r[t];
          n[e] = h.bind(n[e], n);
        }
      })),
      (h.memoize = function (e, u) {
        var i = function (n) {
          var r = i.cache,
            t = "" + (u ? u.apply(this, arguments) : n);
          return j(r, t) || (r[t] = e.apply(this, arguments)), r[t];
        };
        return (i.cache = {}), i;
      }),
      (h.delay = g(function (n, r, t) {
        return setTimeout(function () {
          return n.apply(null, t);
        }, r);
      })),
      (h.defer = h.partial(h.delay, h, 1)),
      (h.throttle = function (t, e, u) {
        var i,
          o,
          a,
          c,
          l = 0;
        u || (u = {});
        function f() {
          (l = !1 === u.leading ? 0 : h.now()),
            (i = null),
            (c = t.apply(o, a)),
            i || (o = a = null);
        }
        var n = function () {
          var n = h.now();
          l || !1 !== u.leading || (l = n);
          var r = e - (n - l);
          return (
            (o = this),
            (a = arguments),
            r <= 0 || e < r
              ? (i && (clearTimeout(i), (i = null)),
                (l = n),
                (c = t.apply(o, a)),
                i || (o = a = null))
              : i || !1 === u.trailing || (i = setTimeout(f, r)),
            c
          );
        };
        return (
          (n.cancel = function () {
            clearTimeout(i), (l = 0), (i = o = a = null);
          }),
          n
        );
      }),
      (h.debounce = function (t, e, u) {
        function a(n, r) {
          (i = null), r && (o = t.apply(n, r));
        }
        var i,
          o,
          n = g(function (n) {
            if ((i && clearTimeout(i), u)) {
              var r = !i;
              (i = setTimeout(a, e)), r && (o = t.apply(this, n));
            } else i = h.delay(a, e, this, n);
            return o;
          });
        return (
          (n.cancel = function () {
            clearTimeout(i), (i = null);
          }),
          n
        );
      }),
      (h.wrap = function (n, r) {
        return h.partial(r, n);
      }),
      (h.negate = function (n) {
        return function () {
          return !n.apply(this, arguments);
        };
      }),
      (h.compose = function () {
        var t = arguments,
          e = t.length - 1;
        return function () {
          for (var n = e, r = t[e].apply(this, arguments); n--; )
            r = t[n].call(this, r);
          return r;
        };
      }),
      (h.after = function (n, r) {
        return function () {
          if (--n < 1) return r.apply(this, arguments);
        };
      }),
      (h.before = function (n, r) {
        var t;
        return function () {
          return (
            0 < --n && (t = r.apply(this, arguments)), n <= 1 && (r = null), t
          );
        };
      }),
      (h.once = h.partial(h.before, 2)),
      (h.restArguments = g);
    function B(n, r) {
      var t = T.length,
        e = n.constructor,
        u = (h.isFunction(e) && e.prototype) || o,
        i = "constructor";
      for (j(n, i) && !h.contains(r, i) && r.push(i); t--; )
        (i = T[t]) in n && n[i] !== u[i] && !h.contains(r, i) && r.push(i);
    }
    var I = !{ toString: null }.propertyIsEnumerable("toString"),
      T = [
        "valueOf",
        "isPrototypeOf",
        "toString",
        "propertyIsEnumerable",
        "hasOwnProperty",
        "toLocaleString",
      ];
    (h.keys = function (n) {
      if (!h.isObject(n)) return [];
      if (a) return a(n);
      var r = [];
      for (var t in n) j(n, t) && r.push(t);
      return I && B(n, r), r;
    }),
      (h.allKeys = function (n) {
        if (!h.isObject(n)) return [];
        var r = [];
        for (var t in n) r.push(t);
        return I && B(n, r), r;
      }),
      (h.values = function (n) {
        for (var r = h.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++)
          e[u] = n[r[u]];
        return e;
      }),
      (h.mapObject = function (n, r, t) {
        r = d(r, t);
        for (var e = h.keys(n), u = e.length, i = {}, o = 0; o < u; o++) {
          var a = e[o];
          i[a] = r(n[a], a, n);
        }
        return i;
      }),
      (h.pairs = function (n) {
        for (var r = h.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++)
          e[u] = [r[u], n[r[u]]];
        return e;
      }),
      (h.invert = function (n) {
        for (var r = {}, t = h.keys(n), e = 0, u = t.length; e < u; e++)
          r[n[t[e]]] = t[e];
        return r;
      }),
      (h.functions = h.methods =
        function (n) {
          var r = [];
          for (var t in n) h.isFunction(n[t]) && r.push(t);
          return r.sort();
        });
    function R(c, l) {
      return function (n) {
        var r = arguments.length;
        if ((l && (n = Object(n)), r < 2 || null == n)) return n;
        for (var t = 1; t < r; t++)
          for (
            var e = arguments[t], u = c(e), i = u.length, o = 0;
            o < i;
            o++
          ) {
            var a = u[o];
            (l && void 0 !== n[a]) || (n[a] = e[a]);
          }
        return n;
      };
    }
    (h.extend = R(h.allKeys)),
      (h.extendOwn = h.assign = R(h.keys)),
      (h.findKey = function (n, r, t) {
        r = d(r, t);
        for (var e, u = h.keys(n), i = 0, o = u.length; i < o; i++)
          if (r(n[(e = u[i])], e, n)) return e;
      });
    function z(n, r, t) {
      return r in t;
    }
    var q, K;
    (h.pick = g(function (n, r) {
      var t = {},
        e = r[0];
      if (null == n) return t;
      h.isFunction(e)
        ? (1 < r.length && (e = y(e, r[1])), (r = h.allKeys(n)))
        : ((e = z), (r = M(r, !1, !1)), (n = Object(n)));
      for (var u = 0, i = r.length; u < i; u++) {
        var o = r[u],
          a = n[o];
        e(a, o, n) && (t[o] = a);
      }
      return t;
    })),
      (h.omit = g(function (n, t) {
        var r,
          e = t[0];
        return (
          h.isFunction(e)
            ? ((e = h.negate(e)), 1 < t.length && (r = t[1]))
            : ((t = h.map(M(t, !1, !1), String)),
              (e = function (n, r) {
                return !h.contains(t, r);
              })),
          h.pick(n, e, r)
        );
      })),
      (h.defaults = R(h.allKeys, !0)),
      (h.create = function (n, r) {
        var t = m(n);
        return r && h.extendOwn(t, r), t;
      }),
      (h.clone = function (n) {
        return h.isObject(n) ? (h.isArray(n) ? n.slice() : h.extend({}, n)) : n;
      }),
      (h.tap = function (n, r) {
        return r(n), n;
      }),
      (h.isMatch = function (n, r) {
        var t = h.keys(r),
          e = t.length;
        if (null == n) return !e;
        for (var u = Object(n), i = 0; i < e; i++) {
          var o = t[i];
          if (r[o] !== u[o] || !(o in u)) return !1;
        }
        return !0;
      }),
      (q = function (n, r, t, e) {
        if (n === r) return 0 !== n || 1 / n == 1 / r;
        if (null == n || null == r) return !1;
        if (n != n) return r != r;
        var u = typeof n;
        return (
          ("function" == u || "object" == u || "object" == typeof r) &&
          K(n, r, t, e)
        );
      }),
      (K = function (n, r, t, e) {
        n instanceof h && (n = n._wrapped), r instanceof h && (r = r._wrapped);
        var u = p.call(n);
        if (u !== p.call(r)) return !1;
        switch (u) {
          case "[object RegExp]":
          case "[object String]":
            return "" + n == "" + r;
          case "[object Number]":
            return +n != +n ? +r != +r : 0 == +n ? 1 / +n == 1 / r : +n == +r;
          case "[object Date]":
          case "[object Boolean]":
            return +n == +r;
          case "[object Symbol]":
            return s.valueOf.call(n) === s.valueOf.call(r);
        }
        var i = "[object Array]" === u;
        if (!i) {
          if ("object" != typeof n || "object" != typeof r) return !1;
          var o = n.constructor,
            a = r.constructor;
          if (
            o !== a &&
            !(
              h.isFunction(o) &&
              o instanceof o &&
              h.isFunction(a) &&
              a instanceof a
            ) &&
            "constructor" in n &&
            "constructor" in r
          )
            return !1;
        }
        e = e || [];
        for (var c = (t = t || []).length; c--; )
          if (t[c] === n) return e[c] === r;
        if ((t.push(n), e.push(r), i)) {
          if ((c = n.length) !== r.length) return !1;
          for (; c--; ) if (!q(n[c], r[c], t, e)) return !1;
        } else {
          var l,
            f = h.keys(n);
          if (((c = f.length), h.keys(r).length !== c)) return !1;
          for (; c--; )
            if (((l = f[c]), !j(r, l) || !q(n[l], r[l], t, e))) return !1;
        }
        return t.pop(), e.pop(), !0;
      }),
      (h.isEqual = function (n, r) {
        return q(n, r);
      }),
      (h.isEmpty = function (n) {
        return (
          null == n ||
          (w(n) && (h.isArray(n) || h.isString(n) || h.isArguments(n))
            ? 0 === n.length
            : 0 === h.keys(n).length)
        );
      }),
      (h.isElement = function (n) {
        return !(!n || 1 !== n.nodeType);
      }),
      (h.isArray =
        t ||
        function (n) {
          return "[object Array]" === p.call(n);
        }),
      (h.isObject = function (n) {
        var r = typeof n;
        return "function" == r || ("object" == r && !!n);
      }),
      h.each(
        [
          "Arguments",
          "Function",
          "String",
          "Number",
          "Date",
          "RegExp",
          "Error",
          "Symbol",
          "Map",
          "WeakMap",
          "Set",
          "WeakSet",
        ],
        function (r) {
          h["is" + r] = function (n) {
            return p.call(n) === "[object " + r + "]";
          };
        },
      ),
      h.isArguments(arguments) ||
        (h.isArguments = function (n) {
          return j(n, "callee");
        });
    var D = n.document && n.document.childNodes;
    "function" != typeof /./ &&
      "object" != typeof Int8Array &&
      "function" != typeof D &&
      (h.isFunction = function (n) {
        return "function" == typeof n || !1;
      }),
      (h.isFinite = function (n) {
        return !h.isSymbol(n) && isFinite(n) && !isNaN(parseFloat(n));
      }),
      (h.isNaN = function (n) {
        return h.isNumber(n) && isNaN(n);
      }),
      (h.isBoolean = function (n) {
        return !0 === n || !1 === n || "[object Boolean]" === p.call(n);
      }),
      (h.isNull = function (n) {
        return null === n;
      }),
      (h.isUndefined = function (n) {
        return void 0 === n;
      }),
      (h.has = function (n, r) {
        if (!h.isArray(r)) return j(n, r);
        for (var t = r.length, e = 0; e < t; e++) {
          var u = r[e];
          if (null == n || !i.call(n, u)) return !1;
          n = n[u];
        }
        return !!t;
      }),
      (h.noConflict = function () {
        return (n._ = r), this;
      }),
      (h.identity = function (n) {
        return n;
      }),
      (h.constant = function (n) {
        return function () {
          return n;
        };
      }),
      (h.noop = function () {}),
      (h.property = function (r) {
        return h.isArray(r)
          ? function (n) {
              return x(n, r);
            }
          : b(r);
      }),
      (h.propertyOf = function (r) {
        return null == r
          ? function () {}
          : function (n) {
              return h.isArray(n) ? x(r, n) : r[n];
            };
      }),
      (h.matcher = h.matches =
        function (r) {
          return (
            (r = h.extendOwn({}, r)),
            function (n) {
              return h.isMatch(n, r);
            }
          );
        }),
      (h.times = function (n, r, t) {
        var e = Array(Math.max(0, n));
        r = y(r, t, 1);
        for (var u = 0; u < n; u++) e[u] = r(u);
        return e;
      }),
      (h.random = function (n, r) {
        return (
          null == r && ((r = n), (n = 0)),
          n + Math.floor(Math.random() * (r - n + 1))
        );
      }),
      (h.now =
        Date.now ||
        function () {
          return new Date().getTime();
        });
    function W(r) {
      function t(n) {
        return r[n];
      }
      var n = "(?:" + h.keys(r).join("|") + ")",
        e = RegExp(n),
        u = RegExp(n, "g");
      return function (n) {
        return (n = null == n ? "" : "" + n), e.test(n) ? n.replace(u, t) : n;
      };
    }
    var L = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
      },
      P = h.invert(L);
    (h.escape = W(L)),
      (h.unescape = W(P)),
      (h.result = function (n, r, t) {
        h.isArray(r) || (r = [r]);
        var e = r.length;
        if (!e) return h.isFunction(t) ? t.call(n) : t;
        for (var u = 0; u < e; u++) {
          var i = null == n ? void 0 : n[r[u]];
          void 0 === i && ((i = t), (u = e)),
            (n = h.isFunction(i) ? i.call(n) : i);
        }
        return n;
      });
    var C = 0;
    (h.uniqueId = function (n) {
      var r = ++C + "";
      return n ? n + r : r;
    }),
      (h.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g,
      });
    function $(n) {
      return "\\" + U[n];
    }
    var J = /(.)^/,
      U = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      V = /\\|'|\r|\n|\u2028|\u2029/g;
    (h.template = function (i, n, r) {
      !n && r && (n = r), (n = h.defaults({}, n, h.templateSettings));
      var t,
        e = RegExp(
          [
            (n.escape || J).source,
            (n.interpolate || J).source,
            (n.evaluate || J).source,
          ].join("|") + "|$",
          "g",
        ),
        o = 0,
        a = "__p+='";
      i.replace(e, function (n, r, t, e, u) {
        return (
          (a += i.slice(o, u).replace(V, $)),
          (o = u + n.length),
          r
            ? (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'")
            : t
              ? (a += "'+\n((__t=(" + t + "))==null?'':__t)+\n'")
              : e && (a += "';\n" + e + "\n__p+='"),
          n
        );
      }),
        (a += "';\n"),
        n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
        (a =
          "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
          a +
          "return __p;\n");
      try {
        t = new Function(n.variable || "obj", "_", a);
      } catch (n) {
        throw ((n.source = a), n);
      }
      function u(n) {
        return t.call(this, n, h);
      }
      var c = n.variable || "obj";
      return (u.source = "function(" + c + "){\n" + a + "}"), u;
    }),
      (h.chain = function (n) {
        var r = h(n);
        return (r._chain = !0), r;
      });
    function G(n, r) {
      return n._chain ? h(r).chain() : r;
    }
    (h.mixin = function (t) {
      return (
        h.each(h.functions(t), function (n) {
          var r = (h[n] = t[n]);
          h.prototype[n] = function () {
            var n = [this._wrapped];
            return u.apply(n, arguments), G(this, r.apply(h, n));
          };
        }),
        h
      );
    }),
      h.mixin(h),
      h.each(
        ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
        function (r) {
          var t = e[r];
          h.prototype[r] = function () {
            var n = this._wrapped;
            return (
              t.apply(n, arguments),
              ("shift" !== r && "splice" !== r) ||
                0 !== n.length ||
                delete n[0],
              G(this, n)
            );
          };
        },
      ),
      h.each(["concat", "join", "slice"], function (n) {
        var r = e[n];
        h.prototype[n] = function () {
          return G(this, r.apply(this._wrapped, arguments));
        };
      }),
      (h.prototype.value = function () {
        return this._wrapped;
      }),
      (h.prototype.valueOf = h.prototype.toJSON = h.prototype.value),
      (h.prototype.toString = function () {
        return String(this._wrapped);
      }),
      "function" == typeof define &&
        define.amd &&
        define("underscore", [], function () {
          return h;
        });
  })(),
  (function (t) {
    var e =
      ("object" == typeof self && self.self === self && self) ||
      ("object" == typeof global && global.global === global && global);
    if ("function" == typeof define && define.amd)
      define(["underscore", "jquery", "exports"], function (i, n, r) {
        e.Backbone = t(e, r, i, n);
      });
    else if ("undefined" != typeof exports) {
      var n,
        i = require("underscore");
      try {
        n = require("jquery");
      } catch (r) {}
      t(e, exports, i, n);
    } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$);
  })(function (t, e, i, n) {
    var r = t.Backbone,
      s = Array.prototype.slice;
    (e.VERSION = "1.4.0"),
      (e.$ = n),
      (e.noConflict = function () {
        return (t.Backbone = r), this;
      }),
      (e.emulateHTTP = !1),
      (e.emulateJSON = !1);
    var h,
      a = (e.Events = {}),
      o = /\s+/,
      u = function (t, e, n, r, s) {
        var h,
          a = 0;
        if (n && "object" == typeof n) {
          void 0 !== r &&
            "context" in s &&
            void 0 === s.context &&
            (s.context = r);
          for (h = i.keys(n); a < h.length; a++) e = u(t, e, h[a], n[h[a]], s);
        } else if (n && o.test(n))
          for (h = n.split(o); a < h.length; a++) e = t(e, h[a], r, s);
        else e = t(e, n, r, s);
        return e;
      };
    (a.on = function (t, e, i) {
      (this._events = u(l, this._events || {}, t, e, {
        context: i,
        ctx: this,
        listening: h,
      })),
        h &&
          (((this._listeners || (this._listeners = {}))[h.id] = h).interop =
            !1);
      return this;
    }),
      (a.listenTo = function (t, e, n) {
        if (!t) return this;
        var r = t._listenId || (t._listenId = i.uniqueId("l")),
          s = this._listeningTo || (this._listeningTo = {}),
          a = (h = s[r]);
        a ||
          (this._listenId || (this._listenId = i.uniqueId("l")),
          (a = h = s[r] = new g(this, t)));
        var o = c(t, e, n, this);
        if (((h = void 0), o)) throw o;
        return a.interop && a.on(e, n), this;
      });
    var l = function (t, e, i, n) {
        if (i) {
          var r = t[e] || (t[e] = []),
            s = n.context,
            a = n.ctx,
            o = n.listening;
          o && o.count++,
            r.push({ callback: i, context: s, ctx: s || a, listening: o });
        }
        return t;
      },
      c = function (t, e, i, n) {
        try {
          t.on(e, i, n);
        } catch (r) {
          return r;
        }
      };
    (a.off = function (t, e, i) {
      return (
        this._events &&
          (this._events = u(f, this._events, t, e, {
            context: i,
            listeners: this._listeners,
          })),
        this
      );
    }),
      (a.stopListening = function (t, e, n) {
        var r = this._listeningTo;
        if (!r) return this;
        for (var s = t ? [t._listenId] : i.keys(r), a = 0; a < s.length; a++) {
          var o = r[s[a]];
          if (!o) break;
          o.obj.off(e, n, this), o.interop && o.off(e, n);
        }
        return i.isEmpty(r) && (this._listeningTo = void 0), this;
      });
    var f = function (t, e, n, r) {
      if (t) {
        var h,
          s = r.context,
          a = r.listeners,
          o = 0;
        if (e || s || n) {
          for (h = e ? [e] : i.keys(t); o < h.length; o++) {
            var u = t[(e = h[o])];
            if (!u) break;
            for (var l = [], c = 0; c < u.length; c++) {
              var f = u[c];
              if (
                (n && n !== f.callback && n !== f.callback._callback) ||
                (s && s !== f.context)
              )
                l.push(f);
              else {
                var d = f.listening;
                d && d.off(e, n);
              }
            }
            l.length ? (t[e] = l) : delete t[e];
          }
          return t;
        }
        for (h = i.keys(a); o < h.length; o++) a[h[o]].cleanup();
      }
    };
    (a.once = function (t, e, i) {
      var n = u(d, {}, t, e, this.off.bind(this));
      return (
        "string" == typeof t && null == i && (e = void 0), this.on(n, e, i)
      );
    }),
      (a.listenToOnce = function (t, e, i) {
        var n = u(d, {}, e, i, this.stopListening.bind(this, t));
        return this.listenTo(t, n);
      });
    var d = function (t, e, n, r) {
      if (n) {
        var s = (t[e] = i.once(function () {
          r(e, s), n.apply(this, arguments);
        }));
        s._callback = n;
      }
      return t;
    };
    a.trigger = function (t) {
      if (!this._events) return this;
      for (
        var e = Math.max(0, arguments.length - 1), i = Array(e), n = 0;
        n < e;
        n++
      )
        i[n] = arguments[n + 1];
      return u(v, this._events, t, void 0, i), this;
    };
    var v = function (t, e, i, n) {
        if (t) {
          var r = t[e],
            s = t.all;
          r && s && (s = s.slice()), r && p(r, n), s && p(s, [e].concat(n));
        }
        return t;
      },
      p = function (t, e) {
        var i,
          n = -1,
          r = t.length,
          s = e[0],
          a = e[1],
          o = e[2];
        switch (e.length) {
          case 0:
            for (; ++n < r; ) (i = t[n]).callback.call(i.ctx);
            return;
          case 1:
            for (; ++n < r; ) (i = t[n]).callback.call(i.ctx, s);
            return;
          case 2:
            for (; ++n < r; ) (i = t[n]).callback.call(i.ctx, s, a);
            return;
          case 3:
            for (; ++n < r; ) (i = t[n]).callback.call(i.ctx, s, a, o);
            return;
          default:
            for (; ++n < r; ) (i = t[n]).callback.apply(i.ctx, e);
            return;
        }
      },
      g = function (t, e) {
        (this.id = t._listenId),
          (this.listener = t),
          (this.obj = e),
          (this.interop = !0),
          (this.count = 0),
          (this._events = void 0);
      };
    (g.prototype.on = a.on),
      (g.prototype.off = function (t, e) {
        (this.interop
          ? ((this._events = u(f, this._events, t, e, {
              context: void 0,
              listeners: void 0,
            })),
            this._events)
          : (this.count--, 0 !== this.count)) || this.cleanup();
      }),
      (g.prototype.cleanup = function () {
        delete this.listener._listeningTo[this.obj._listenId],
          this.interop || delete this.obj._listeners[this.id];
      }),
      (a.bind = a.on),
      (a.unbind = a.off),
      i.extend(e, a);
    var m = (e.Model = function (t, e) {
      var n = t || {};
      e || (e = {}),
        this.preinitialize.apply(this, arguments),
        (this.cid = i.uniqueId(this.cidPrefix)),
        (this.attributes = {}),
        e.collection && (this.collection = e.collection),
        e.parse && (n = this.parse(n, e) || {});
      var r = i.result(this, "defaults");
      (n = i.defaults(i.extend({}, r, n), r)),
        this.set(n, e),
        (this.changed = {}),
        this.initialize.apply(this, arguments);
    });
    i.extend(m.prototype, a, {
      changed: null,
      validationError: null,
      idAttribute: "id",
      cidPrefix: "c",
      preinitialize: function () {},
      initialize: function () {},
      toJSON: function (t) {
        return i.clone(this.attributes);
      },
      sync: function () {
        return e.sync.apply(this, arguments);
      },
      get: function (t) {
        return this.attributes[t];
      },
      escape: function (t) {
        return i.escape(this.get(t));
      },
      has: function (t) {
        return null != this.get(t);
      },
      matches: function (t) {
        return !!i.iteratee(t, this)(this.attributes);
      },
      set: function (t, e, n) {
        if (null == t) return this;
        var r;
        if (
          ("object" == typeof t ? ((r = t), (n = e)) : ((r = {})[t] = e),
          n || (n = {}),
          !this._validate(r, n))
        )
          return !1;
        var s = n.unset,
          a = n.silent,
          o = [],
          h = this._changing;
        (this._changing = !0),
          h ||
            ((this._previousAttributes = i.clone(this.attributes)),
            (this.changed = {}));
        var u = this.attributes,
          l = this.changed,
          c = this._previousAttributes;
        for (var f in r)
          (e = r[f]),
            i.isEqual(u[f], e) || o.push(f),
            i.isEqual(c[f], e) ? delete l[f] : (l[f] = e),
            s ? delete u[f] : (u[f] = e);
        if (
          (this.idAttribute in r && (this.id = this.get(this.idAttribute)), !a)
        ) {
          o.length && (this._pending = n);
          for (var d = 0; d < o.length; d++)
            this.trigger("change:" + o[d], this, u[o[d]], n);
        }
        if (h) return this;
        if (!a)
          for (; this._pending; )
            (n = this._pending),
              (this._pending = !1),
              this.trigger("change", this, n);
        return (this._pending = !1), (this._changing = !1), this;
      },
      unset: function (t, e) {
        return this.set(t, void 0, i.extend({}, e, { unset: !0 }));
      },
      clear: function (t) {
        var e = {};
        for (var n in this.attributes) e[n] = void 0;
        return this.set(e, i.extend({}, t, { unset: !0 }));
      },
      hasChanged: function (t) {
        return null == t ? !i.isEmpty(this.changed) : i.has(this.changed, t);
      },
      changedAttributes: function (t) {
        if (!t) return !!this.hasChanged() && i.clone(this.changed);
        var r,
          e = this._changing ? this._previousAttributes : this.attributes,
          n = {};
        for (var s in t) {
          var a = t[s];
          i.isEqual(e[s], a) || ((n[s] = a), (r = !0));
        }
        return !!r && n;
      },
      previous: function (t) {
        return null != t && this._previousAttributes
          ? this._previousAttributes[t]
          : null;
      },
      previousAttributes: function () {
        return i.clone(this._previousAttributes);
      },
      fetch: function (t) {
        t = i.extend({ parse: !0 }, t);
        var e = this,
          n = t.success;
        return (
          (t.success = function (i) {
            var r = t.parse ? e.parse(i, t) : i;
            if (!e.set(r, t)) return !1;
            n && n.call(t.context, e, i, t), e.trigger("sync", e, i, t);
          }),
          G(this, t),
          this.sync("read", this, t)
        );
      },
      save: function (t, e, n) {
        var r;
        null == t || "object" == typeof t
          ? ((r = t), (n = e))
          : ((r = {})[t] = e);
        var s = (n = i.extend({ validate: !0, parse: !0 }, n)).wait;
        if (r && !s) {
          if (!this.set(r, n)) return !1;
        } else if (!this._validate(r, n)) return !1;
        var a = this,
          o = n.success,
          h = this.attributes;
        (n.success = function (t) {
          a.attributes = h;
          var e = n.parse ? a.parse(t, n) : t;
          if ((s && (e = i.extend({}, r, e)), e && !a.set(e, n))) return !1;
          o && o.call(n.context, a, t, n), a.trigger("sync", a, t, n);
        }),
          G(this, n),
          r && s && (this.attributes = i.extend({}, h, r));
        var u = this.isNew() ? "create" : n.patch ? "patch" : "update";
        "patch" != u || n.attrs || (n.attrs = r);
        var l = this.sync(u, this, n);
        return (this.attributes = h), l;
      },
      destroy: function (t) {
        t = t ? i.clone(t) : {};
        function s() {
          e.stopListening(), e.trigger("destroy", e, e.collection, t);
        }
        var e = this,
          n = t.success,
          r = t.wait,
          a = !(t.success = function (i) {
            r && s(),
              n && n.call(t.context, e, i, t),
              e.isNew() || e.trigger("sync", e, i, t);
          });
        return (
          this.isNew()
            ? i.defer(t.success)
            : (G(this, t), (a = this.sync("delete", this, t))),
          r || s(),
          a
        );
      },
      url: function () {
        var t =
          i.result(this, "urlRoot") || i.result(this.collection, "url") || V();
        if (this.isNew()) return t;
        var e = this.get(this.idAttribute);
        return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e);
      },
      parse: function (t, e) {
        return t;
      },
      clone: function () {
        return new this.constructor(this.attributes);
      },
      isNew: function () {
        return !this.has(this.idAttribute);
      },
      isValid: function (t) {
        return this._validate({}, i.extend({}, t, { validate: !0 }));
      },
      _validate: function (t, e) {
        if (!e.validate || !this.validate) return !0;
        t = i.extend({}, this.attributes, t);
        var n = (this.validationError = this.validate(t, e) || null);
        return (
          !n ||
          (this.trigger(
            "invalid",
            this,
            n,
            i.extend(e, { validationError: n }),
          ),
          !1)
        );
      },
    });
    function x(t, e, i) {
      i = Math.min(Math.max(i, 0), t.length);
      var s,
        n = Array(t.length - i),
        r = e.length;
      for (s = 0; s < n.length; s++) n[s] = t[s + i];
      for (s = 0; s < r; s++) t[s + i] = e[s];
      for (s = 0; s < n.length; s++) t[s + r + i] = n[s];
    }
    var _ = (e.Collection = function (t, e) {
        e || (e = {}),
          this.preinitialize.apply(this, arguments),
          e.model && (this.model = e.model),
          void 0 !== e.comparator && (this.comparator = e.comparator),
          this._reset(),
          this.initialize.apply(this, arguments),
          t && this.reset(t, i.extend({ silent: !0 }, e));
      }),
      y = { add: !0, remove: !0, merge: !0 },
      b = { add: !0, remove: !1 };
    i.extend(_.prototype, a, {
      model: m,
      preinitialize: function () {},
      initialize: function () {},
      toJSON: function (t) {
        return this.map(function (e) {
          return e.toJSON(t);
        });
      },
      sync: function () {
        return e.sync.apply(this, arguments);
      },
      add: function (t, e) {
        return this.set(t, i.extend({ merge: !1 }, e, b));
      },
      remove: function (t, e) {
        e = i.extend({}, e);
        var n = !i.isArray(t);
        t = n ? [t] : t.slice();
        var r = this._removeModels(t, e);
        return (
          !e.silent &&
            r.length &&
            ((e.changes = { added: [], merged: [], removed: r }),
            this.trigger("update", this, e)),
          n ? r[0] : r
        );
      },
      set: function (t, e) {
        if (null != t) {
          (e = i.extend({}, y, e)).parse &&
            !this._isModel(t) &&
            (t = this.parse(t, e) || []);
          var n = !i.isArray(t);
          t = n ? [t] : t.slice();
          var r = e.at;
          null != r && (r = +r),
            r > this.length && (r = this.length),
            r < 0 && (r += this.length + 1);
          var g,
            m,
            s = [],
            a = [],
            o = [],
            h = [],
            u = {},
            l = e.add,
            c = e.merge,
            f = e.remove,
            d = !1,
            v = this.comparator && null == r && !1 !== e.sort,
            p = i.isString(this.comparator) ? this.comparator : null;
          for (m = 0; m < t.length; m++) {
            g = t[m];
            var _ = this.get(g);
            if (_) {
              if (c && g !== _) {
                var b = this._isModel(g) ? g.attributes : g;
                e.parse && (b = _.parse(b, e)),
                  _.set(b, e),
                  o.push(_),
                  v && !d && (d = _.hasChanged(p));
              }
              u[_.cid] || ((u[_.cid] = !0), s.push(_)), (t[m] = _);
            } else
              l &&
                (g = t[m] = this._prepareModel(g, e)) &&
                (a.push(g),
                this._addReference(g, e),
                (u[g.cid] = !0),
                s.push(g));
          }
          if (f) {
            for (m = 0; m < this.length; m++)
              u[(g = this.models[m]).cid] || h.push(g);
            h.length && this._removeModels(h, e);
          }
          var w = !1,
            E = !v && l && f;
          if (
            (s.length && E
              ? ((w =
                  this.length !== s.length ||
                  i.some(this.models, function (t, e) {
                    return t !== s[e];
                  })),
                (this.models.length = 0),
                x(this.models, s, 0),
                (this.length = this.models.length))
              : a.length &&
                (v && (d = !0),
                x(this.models, a, null == r ? this.length : r),
                (this.length = this.models.length)),
            d && this.sort({ silent: !0 }),
            !e.silent)
          ) {
            for (m = 0; m < a.length; m++)
              null != r && (e.index = r + m),
                (g = a[m]).trigger("add", g, this, e);
            (d || w) && this.trigger("sort", this, e),
              (a.length || h.length || o.length) &&
                ((e.changes = { added: a, removed: h, merged: o }),
                this.trigger("update", this, e));
          }
          return n ? t[0] : t;
        }
      },
      reset: function (t, e) {
        e = e ? i.clone(e) : {};
        for (var n = 0; n < this.models.length; n++)
          this._removeReference(this.models[n], e);
        return (
          (e.previousModels = this.models),
          this._reset(),
          (t = this.add(t, i.extend({ silent: !0 }, e))),
          e.silent || this.trigger("reset", this, e),
          t
        );
      },
      push: function (t, e) {
        return this.add(t, i.extend({ at: this.length }, e));
      },
      pop: function (t) {
        var e = this.at(this.length - 1);
        return this.remove(e, t);
      },
      unshift: function (t, e) {
        return this.add(t, i.extend({ at: 0 }, e));
      },
      shift: function (t) {
        var e = this.at(0);
        return this.remove(e, t);
      },
      slice: function () {
        return s.apply(this.models, arguments);
      },
      get: function (t) {
        if (null != t)
          return (
            this._byId[t] ||
            this._byId[this.modelId(this._isModel(t) ? t.attributes : t)] ||
            (t.cid && this._byId[t.cid])
          );
      },
      has: function (t) {
        return null != this.get(t);
      },
      at: function (t) {
        return t < 0 && (t += this.length), this.models[t];
      },
      where: function (t, e) {
        return this[e ? "find" : "filter"](t);
      },
      findWhere: function (t) {
        return this.where(t, !0);
      },
      sort: function (t) {
        var e = this.comparator;
        if (!e) throw new Error("Cannot sort a set without a comparator");
        t || (t = {});
        var n = e.length;
        return (
          i.isFunction(e) && (e = e.bind(this)),
          1 === n || i.isString(e)
            ? (this.models = this.sortBy(e))
            : this.models.sort(e),
          t.silent || this.trigger("sort", this, t),
          this
        );
      },
      pluck: function (t) {
        return this.map(t + "");
      },
      fetch: function (t) {
        var e = (t = i.extend({ parse: !0 }, t)).success,
          n = this;
        return (
          (t.success = function (i) {
            var r = t.reset ? "reset" : "set";
            n[r](i, t),
              e && e.call(t.context, n, i, t),
              n.trigger("sync", n, i, t);
          }),
          G(this, t),
          this.sync("read", this, t)
        );
      },
      create: function (t, e) {
        var n = (e = e ? i.clone(e) : {}).wait;
        if (!(t = this._prepareModel(t, e))) return !1;
        n || this.add(t, e);
        var r = this,
          s = e.success;
        return (
          (e.success = function (t, e, i) {
            n && r.add(t, i), s && s.call(i.context, t, e, i);
          }),
          t.save(null, e),
          t
        );
      },
      parse: function (t, e) {
        return t;
      },
      clone: function () {
        return new this.constructor(this.models, {
          model: this.model,
          comparator: this.comparator,
        });
      },
      modelId: function (t) {
        return t[this.model.prototype.idAttribute || "id"];
      },
      values: function () {
        return new E(this, k);
      },
      keys: function () {
        return new E(this, I);
      },
      entries: function () {
        return new E(this, S);
      },
      _reset: function () {
        (this.length = 0), (this.models = []), (this._byId = {});
      },
      _prepareModel: function (t, e) {
        if (this._isModel(t)) return t.collection || (t.collection = this), t;
        var n = new ((e = e ? i.clone(e) : {}).collection = this).model(t, e);
        return n.validationError
          ? (this.trigger("invalid", this, n.validationError, e), !1)
          : n;
      },
      _removeModels: function (t, e) {
        for (var i = [], n = 0; n < t.length; n++) {
          var r = this.get(t[n]);
          if (r) {
            var s = this.indexOf(r);
            this.models.splice(s, 1), this.length--, delete this._byId[r.cid];
            var a = this.modelId(r.attributes);
            null != a && delete this._byId[a],
              e.silent || ((e.index = s), r.trigger("remove", r, this, e)),
              i.push(r),
              this._removeReference(r, e);
          }
        }
        return i;
      },
      _isModel: function (t) {
        return t instanceof m;
      },
      _addReference: function (t, e) {
        this._byId[t.cid] = t;
        var i = this.modelId(t.attributes);
        null != i && (this._byId[i] = t), t.on("all", this._onModelEvent, this);
      },
      _removeReference: function (t, e) {
        delete this._byId[t.cid];
        var i = this.modelId(t.attributes);
        null != i && delete this._byId[i],
          this === t.collection && delete t.collection,
          t.off("all", this._onModelEvent, this);
      },
      _onModelEvent: function (t, e, i, n) {
        if (e) {
          if (("add" === t || "remove" === t) && i !== this) return;
          if (("destroy" === t && this.remove(e, n), "change" === t)) {
            var r = this.modelId(e.previousAttributes()),
              s = this.modelId(e.attributes);
            r !== s &&
              (null != r && delete this._byId[r],
              null != s && (this._byId[s] = e));
          }
        }
        this.trigger.apply(this, arguments);
      },
    });
    var w = "function" == typeof Symbol && Symbol.iterator;
    w && (_.prototype[w] = _.prototype.values);
    var E = function (t, e) {
        (this._collection = t), (this._kind = e), (this._index = 0);
      },
      k = 1,
      I = 2,
      S = 3;
    w &&
      (E.prototype[w] = function () {
        return this;
      }),
      (E.prototype.next = function () {
        if (this._collection) {
          if (this._index < this._collection.length) {
            var e,
              t = this._collection.at(this._index);
            if ((this._index++, this._kind === k)) e = t;
            else {
              var i = this._collection.modelId(t.attributes);
              e = this._kind === I ? i : [i, t];
            }
            return { value: e, done: !1 };
          }
          this._collection = void 0;
        }
        return { value: void 0, done: !0 };
      });
    var T = (e.View = function (t) {
        (this.cid = i.uniqueId("view")),
          this.preinitialize.apply(this, arguments),
          i.extend(this, i.pick(t, H)),
          this._ensureElement(),
          this.initialize.apply(this, arguments);
      }),
      P = /^(\S+)\s*(.*)$/,
      H = [
        "model",
        "collection",
        "el",
        "id",
        "attributes",
        "className",
        "tagName",
        "events",
      ];
    i.extend(T.prototype, a, {
      tagName: "div",
      $: function (t) {
        return this.$el.find(t);
      },
      preinitialize: function () {},
      initialize: function () {},
      render: function () {
        return this;
      },
      remove: function () {
        return this._removeElement(), this.stopListening(), this;
      },
      _removeElement: function () {
        this.$el.remove();
      },
      setElement: function (t) {
        return (
          this.undelegateEvents(),
          this._setElement(t),
          this.delegateEvents(),
          this
        );
      },
      _setElement: function (t) {
        (this.$el = t instanceof e.$ ? t : e.$(t)), (this.el = this.$el[0]);
      },
      delegateEvents: function (t) {
        if ((t || (t = i.result(this, "events")), !t)) return this;
        for (var e in (this.undelegateEvents(), t)) {
          var n = t[e];
          if ((i.isFunction(n) || (n = this[n]), n)) {
            var r = e.match(P);
            this.delegate(r[1], r[2], n.bind(this));
          }
        }
        return this;
      },
      delegate: function (t, e, i) {
        return this.$el.on(t + ".delegateEvents" + this.cid, e, i), this;
      },
      undelegateEvents: function () {
        return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
      },
      undelegate: function (t, e, i) {
        return this.$el.off(t + ".delegateEvents" + this.cid, e, i), this;
      },
      _createElement: function (t) {
        return document.createElement(t);
      },
      _ensureElement: function () {
        if (this.el) this.setElement(i.result(this, "el"));
        else {
          var t = i.extend({}, i.result(this, "attributes"));
          this.id && (t.id = i.result(this, "id")),
            this.className && (t.class = i.result(this, "className")),
            this.setElement(this._createElement(i.result(this, "tagName"))),
            this._setAttributes(t);
        }
      },
      _setAttributes: function (t) {
        this.$el.attr(t);
      },
    });
    function A(t, e, n, r) {
      i.each(n, function (i, n) {
        e[n] &&
          (t.prototype[n] = (function (t, e, i, n) {
            switch (e) {
              case 1:
                return function () {
                  return t[i](this[n]);
                };
              case 2:
                return function (e) {
                  return t[i](this[n], e);
                };
              case 3:
                return function (e, r) {
                  return t[i](this[n], C(e, this), r);
                };
              case 4:
                return function (e, r, s) {
                  return t[i](this[n], C(e, this), r, s);
                };
              default:
                return function () {
                  var e = s.call(arguments);
                  return e.unshift(this[n]), t[i].apply(t, e);
                };
            }
          })(e, i, n, r));
      });
    }
    var C = function (t, e) {
        return i.isFunction(t)
          ? t
          : i.isObject(t) && !e._isModel(t)
            ? R(t)
            : i.isString(t)
              ? function (e) {
                  return e.get(t);
                }
              : t;
      },
      R = function (t) {
        var e = i.matches(t);
        return function (t) {
          return e(t.attributes);
        };
      };
    i.each(
      [
        [
          _,
          {
            forEach: 3,
            each: 3,
            map: 3,
            collect: 3,
            reduce: 0,
            foldl: 0,
            inject: 0,
            reduceRight: 0,
            foldr: 0,
            find: 3,
            detect: 3,
            filter: 3,
            select: 3,
            reject: 3,
            every: 3,
            all: 3,
            some: 3,
            any: 3,
            include: 3,
            includes: 3,
            contains: 3,
            invoke: 0,
            max: 3,
            min: 3,
            toArray: 1,
            size: 1,
            first: 3,
            head: 3,
            take: 3,
            initial: 3,
            rest: 3,
            tail: 3,
            drop: 3,
            last: 3,
            without: 0,
            difference: 0,
            indexOf: 3,
            shuffle: 1,
            lastIndexOf: 3,
            isEmpty: 1,
            chain: 1,
            sample: 3,
            partition: 3,
            groupBy: 3,
            countBy: 3,
            sortBy: 3,
            indexBy: 3,
            findIndex: 3,
            findLastIndex: 3,
          },
          "models",
        ],
        [
          m,
          {
            keys: 1,
            values: 1,
            pairs: 1,
            invert: 1,
            pick: 0,
            omit: 0,
            chain: 1,
            isEmpty: 1,
          },
          "attributes",
        ],
      ],
      function (t) {
        var e = t[0],
          n = t[1],
          r = t[2];
        (e.mixin = function (t) {
          var n = i.reduce(
            i.functions(t),
            function (t, e) {
              return (t[e] = 0), t;
            },
            {},
          );
          A(e, t, n, r);
        }),
          A(e, i, n, r);
      },
    ),
      (e.sync = function (t, n, r) {
        var s = j[t];
        i.defaults(r || (r = {}), {
          emulateHTTP: e.emulateHTTP,
          emulateJSON: e.emulateJSON,
        });
        var a = { type: s, dataType: "json" };
        if (
          (r.url || (a.url = i.result(n, "url") || V()),
          null != r.data ||
            !n ||
            ("create" !== t && "update" !== t && "patch" !== t) ||
            ((a.contentType = "application/json"),
            (a.data = JSON.stringify(r.attrs || n.toJSON(r)))),
          r.emulateJSON &&
            ((a.contentType = "application/x-www-form-urlencoded"),
            (a.data = a.data ? { model: a.data } : {})),
          r.emulateHTTP && ("PUT" === s || "DELETE" === s || "PATCH" === s))
        ) {
          (a.type = "POST"), r.emulateJSON && (a.data._method = s);
          var o = r.beforeSend;
          r.beforeSend = function (t) {
            if ((t.setRequestHeader("X-HTTP-Method-Override", s), o))
              return o.apply(this, arguments);
          };
        }
        "GET" === a.type || r.emulateJSON || (a.processData = !1);
        var h = r.error;
        r.error = function (t, e, i) {
          (r.textStatus = e),
            (r.errorThrown = i),
            h && h.call(r.context, t, e, i);
        };
        var u = (r.xhr = e.ajax(i.extend(a, r)));
        return n.trigger("request", n, u, r), u;
      });
    var j = {
      create: "POST",
      update: "PUT",
      patch: "PATCH",
      delete: "DELETE",
      read: "GET",
    };
    e.ajax = function () {
      return e.$.ajax.apply(e.$, arguments);
    };
    var O = (e.Router = function (t) {
        t || (t = {}),
          this.preinitialize.apply(this, arguments),
          t.routes && (this.routes = t.routes),
          this._bindRoutes(),
          this.initialize.apply(this, arguments);
      }),
      U = /\((.*?)\)/g,
      z = /(\(\?)?:\w+/g,
      q = /\*\w+/g,
      F = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    i.extend(O.prototype, a, {
      preinitialize: function () {},
      initialize: function () {},
      route: function (t, n, r) {
        i.isRegExp(t) || (t = this._routeToRegExp(t)),
          i.isFunction(n) && ((r = n), (n = "")),
          r || (r = this[n]);
        var s = this;
        return (
          e.history.route(t, function (i) {
            var a = s._extractParameters(t, i);
            !1 !== s.execute(r, a, n) &&
              (s.trigger.apply(s, ["route:" + n].concat(a)),
              s.trigger("route", n, a),
              e.history.trigger("route", s, n, a));
          }),
          this
        );
      },
      execute: function (t, e, i) {
        t && t.apply(this, e);
      },
      navigate: function (t, i) {
        return e.history.navigate(t, i), this;
      },
      _bindRoutes: function () {
        if (this.routes) {
          this.routes = i.result(this, "routes");
          for (var t, e = i.keys(this.routes); null != (t = e.pop()); )
            this.route(t, this.routes[t]);
        }
      },
      _routeToRegExp: function (t) {
        return (
          (t = t
            .replace(F, "\\$&")
            .replace(U, "(?:$1)?")
            .replace(z, function (t, e) {
              return e ? t : "([^/?]+)";
            })
            .replace(q, "([^?]*?)")),
          new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
        );
      },
      _extractParameters: function (t, e) {
        var n = t.exec(e).slice(1);
        return i.map(n, function (t, e) {
          return e === n.length - 1
            ? t || null
            : t
              ? decodeURIComponent(t)
              : null;
        });
      },
    });
    var B = (e.History = function () {
        (this.handlers = []),
          (this.checkUrl = this.checkUrl.bind(this)),
          "undefined" != typeof window &&
            ((this.location = window.location),
            (this.history = window.history));
      }),
      J = /^[#\/]|\s+$/g,
      L = /^\/+|\/+$/g,
      W = /#.*$/;
    (B.started = !1),
      i.extend(B.prototype, a, {
        interval: 50,
        atRoot: function () {
          return (
            this.location.pathname.replace(/[^\/]$/, "$&/") === this.root &&
            !this.getSearch()
          );
        },
        matchRoot: function () {
          return (
            this.decodeFragment(this.location.pathname).slice(
              0,
              this.root.length - 1,
            ) +
              "/" ===
            this.root
          );
        },
        decodeFragment: function (t) {
          return decodeURI(t.replace(/%25/g, "%2525"));
        },
        getSearch: function () {
          var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
          return t ? t[0] : "";
        },
        getHash: function (t) {
          var e = (t || this).location.href.match(/#(.*)$/);
          return e ? e[1] : "";
        },
        getPath: function () {
          var t = this.decodeFragment(
            this.location.pathname + this.getSearch(),
          ).slice(this.root.length - 1);
          return "/" === t.charAt(0) ? t.slice(1) : t;
        },
        getFragment: function (t) {
          return (
            null == t &&
              (t =
                this._usePushState || !this._wantsHashChange
                  ? this.getPath()
                  : this.getHash()),
            t.replace(J, "")
          );
        },
        start: function (t) {
          if (B.started)
            throw new Error("Backbone.history has already been started");
          if (
            ((B.started = !0),
            (this.options = i.extend({ root: "/" }, this.options, t)),
            (this.root = this.options.root),
            (this._wantsHashChange = !1 !== this.options.hashChange),
            (this._hasHashChange =
              "onhashchange" in window &&
              (void 0 === document.documentMode || 7 < document.documentMode)),
            (this._useHashChange =
              this._wantsHashChange && this._hasHashChange),
            (this._wantsPushState = !!this.options.pushState),
            (this._hasPushState = !(!this.history || !this.history.pushState)),
            (this._usePushState = this._wantsPushState && this._hasPushState),
            (this.fragment = this.getFragment()),
            (this.root = ("/" + this.root + "/").replace(L, "/")),
            this._wantsHashChange && this._wantsPushState)
          ) {
            if (!this._hasPushState && !this.atRoot()) {
              var e = this.root.slice(0, -1) || "/";
              return this.location.replace(e + "#" + this.getPath()), !0;
            }
            this._hasPushState &&
              this.atRoot() &&
              this.navigate(this.getHash(), { replace: !0 });
          }
          if (
            !this._hasHashChange &&
            this._wantsHashChange &&
            !this._usePushState
          ) {
            (this.iframe = document.createElement("iframe")),
              (this.iframe.src = "javascript:0"),
              (this.iframe.style.display = "none"),
              (this.iframe.tabIndex = -1);
            var n = document.body,
              r = n.insertBefore(this.iframe, n.firstChild).contentWindow;
            r.document.open(),
              r.document.close(),
              (r.location.hash = "#" + this.fragment);
          }
          var s =
            window.addEventListener ||
            function (t, e) {
              return attachEvent("on" + t, e);
            };
          if (
            (this._usePushState
              ? s("popstate", this.checkUrl, !1)
              : this._useHashChange && !this.iframe
                ? s("hashchange", this.checkUrl, !1)
                : this._wantsHashChange &&
                  (this._checkUrlInterval = setInterval(
                    this.checkUrl,
                    this.interval,
                  )),
            !this.options.silent)
          )
            return this.loadUrl();
        },
        stop: function () {
          var t =
            window.removeEventListener ||
            function (t, e) {
              return detachEvent("on" + t, e);
            };
          this._usePushState
            ? t("popstate", this.checkUrl, !1)
            : this._useHashChange &&
              !this.iframe &&
              t("hashchange", this.checkUrl, !1),
            this.iframe &&
              (document.body.removeChild(this.iframe), (this.iframe = null)),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            (B.started = !1);
        },
        route: function (t, e) {
          this.handlers.unshift({ route: t, callback: e });
        },
        checkUrl: function (t) {
          var e = this.getFragment();
          if (
            (e === this.fragment &&
              this.iframe &&
              (e = this.getHash(this.iframe.contentWindow)),
            e === this.fragment)
          )
            return !1;
          this.iframe && this.navigate(e), this.loadUrl();
        },
        loadUrl: function (t) {
          return (
            !!this.matchRoot() &&
            ((t = this.fragment = this.getFragment(t)),
            i.some(this.handlers, function (e) {
              if (e.route.test(t)) return e.callback(t), !0;
            }))
          );
        },
        navigate: function (t, e) {
          if (!B.started) return !1;
          (e && !0 !== e) || (e = { trigger: !!e }),
            (t = this.getFragment(t || ""));
          var i = this.root;
          ("" !== t && "?" !== t.charAt(0)) || (i = i.slice(0, -1) || "/");
          var n = i + t;
          t = t.replace(W, "");
          var r = this.decodeFragment(t);
          if (this.fragment !== r) {
            if (((this.fragment = r), this._usePushState))
              this.history[e.replace ? "replaceState" : "pushState"](
                {},
                document.title,
                n,
              );
            else {
              if (!this._wantsHashChange) return this.location.assign(n);
              if (
                (this._updateHash(this.location, t, e.replace),
                this.iframe && t !== this.getHash(this.iframe.contentWindow))
              ) {
                var s = this.iframe.contentWindow;
                e.replace || (s.document.open(), s.document.close()),
                  this._updateHash(s.location, t, e.replace);
              }
            }
            return e.trigger ? this.loadUrl(t) : void 0;
          }
        },
        _updateHash: function (t, e, i) {
          if (i) {
            var n = t.href.replace(/(javascript:|#).*$/, "");
            t.replace(n + "#" + e);
          } else t.hash = "#" + e;
        },
      }),
      (e.history = new B());
    m.extend =
      _.extend =
      O.extend =
      T.extend =
      B.extend =
        function (t, e) {
          var r,
            n = this;
          return (
            (r =
              t && i.has(t, "constructor")
                ? t.constructor
                : function () {
                    return n.apply(this, arguments);
                  }),
            i.extend(r, n, e),
            (r.prototype = i.create(n.prototype, t)),
            ((r.prototype.constructor = r).__super__ = n.prototype),
            r
          );
        };
    var V = function () {
        throw new Error('A "url" property or function must be specified');
      },
      G = function (t, e) {
        var i = e.error;
        e.error = function (n) {
          i && i.call(e.context, t, n, e), t.trigger("error", t, n, e);
        };
      };
    return e;
  }),
  (function () {
    var e = function (t) {
      var r = new e.Builder();
      return (
        r.pipeline.add(e.trimmer, e.stopWordFilter, e.stemmer),
        r.searchPipeline.add(e.stemmer),
        t.call(r, r),
        r.build()
      );
    };
    (e.version = "2.3.7"),
      (e.utils = {}),
      (e.utils.warn = (function (e) {
        return function (t) {
          e.console && console.warn && console.warn(t);
        };
      })(this)),
      (e.utils.asString = function (e) {
        return null == e ? "" : e.toString();
      }),
      (e.utils.clone = function (e) {
        if (null == e) return e;
        for (
          var t = Object.create(null), r = Object.keys(e), i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            s = e[n];
          if (Array.isArray(s)) t[n] = s.slice();
          else {
            if (
              "string" != typeof s &&
              "number" != typeof s &&
              "boolean" != typeof s
            )
              throw new TypeError(
                "clone is not deep and does not support nested objects",
              );
            t[n] = s;
          }
        }
        return t;
      }),
      (e.FieldRef = function (e, t, r) {
        (this.docRef = e), (this.fieldName = t), (this._stringValue = r);
      }),
      (e.FieldRef.joiner = "/"),
      (e.FieldRef.fromString = function (t) {
        var r = t.indexOf(e.FieldRef.joiner);
        if (-1 === r) throw "malformed field ref string";
        var i = t.slice(0, r),
          n = t.slice(r + 1);
        return new e.FieldRef(n, i, t);
      }),
      (e.FieldRef.prototype.toString = function () {
        return (
          null == this._stringValue &&
            (this._stringValue =
              this.fieldName + e.FieldRef.joiner + this.docRef),
          this._stringValue
        );
      }),
      (e.Set = function (e) {
        if (((this.elements = Object.create(null)), e)) {
          this.length = e.length;
          for (var t = 0; t < this.length; t++) this.elements[e[t]] = !0;
        } else this.length = 0;
      }),
      (e.Set.complete = {
        intersect: function (e) {
          return e;
        },
        union: function (e) {
          return e;
        },
        contains: function () {
          return !0;
        },
      }),
      (e.Set.empty = {
        intersect: function () {
          return this;
        },
        union: function (e) {
          return e;
        },
        contains: function () {
          return !1;
        },
      }),
      (e.Set.prototype.contains = function (e) {
        return !!this.elements[e];
      }),
      (e.Set.prototype.intersect = function (t) {
        var r,
          i,
          n,
          s = [];
        if (t === e.Set.complete) return this;
        if (t === e.Set.empty) return t;
        (i = this.length < t.length ? ((r = this), t) : ((r = t), this)),
          (n = Object.keys(r.elements));
        for (var o = 0; o < n.length; o++) {
          var a = n[o];
          a in i.elements && s.push(a);
        }
        return new e.Set(s);
      }),
      (e.Set.prototype.union = function (t) {
        return t === e.Set.complete
          ? e.Set.complete
          : t === e.Set.empty
            ? this
            : new e.Set(
                Object.keys(this.elements).concat(Object.keys(t.elements)),
              );
      }),
      (e.idf = function (e, t) {
        var r = 0;
        for (var i in e) "_index" != i && (r += Object.keys(e[i]).length);
        var n = (t - r + 0.5) / (r + 0.5);
        return Math.log(1 + Math.abs(n));
      }),
      (e.Token = function (e, t) {
        (this.str = e || ""), (this.metadata = t || {});
      }),
      (e.Token.prototype.toString = function () {
        return this.str;
      }),
      (e.Token.prototype.update = function (e) {
        return (this.str = e(this.str, this.metadata)), this;
      }),
      (e.Token.prototype.clone = function (t) {
        return (
          (t =
            t ||
            function (e) {
              return e;
            }),
          new e.Token(t(this.str, this.metadata), this.metadata)
        );
      }),
      (e.tokenizer = function (t, r) {
        if (null == t || null == t) return [];
        if (Array.isArray(t))
          return t.map(function (t) {
            return new e.Token(
              e.utils.asString(t).toLowerCase(),
              e.utils.clone(r),
            );
          });
        for (
          var i = t.toString().toLowerCase(),
            n = i.length,
            s = [],
            o = 0,
            a = 0;
          o <= n;
          o++
        ) {
          var l = o - a;
          if (i.charAt(o).match(e.tokenizer.separator) || o == n) {
            if (0 < l) {
              var c = e.utils.clone(r) || {};
              (c.position = [a, l]),
                (c.index = s.length),
                s.push(new e.Token(i.slice(a, o), c));
            }
            a = o + 1;
          }
        }
        return s;
      }),
      (e.tokenizer.separator = /[\s\-]+/),
      (e.Pipeline = function () {
        this._stack = [];
      }),
      (e.Pipeline.registeredFunctions = Object.create(null)),
      (e.Pipeline.registerFunction = function (t, r) {
        r in this.registeredFunctions &&
          e.utils.warn("Overwriting existing registered function: " + r),
          (t.label = r),
          (e.Pipeline.registeredFunctions[t.label] = t);
      }),
      (e.Pipeline.warnIfFunctionNotRegistered = function (t) {
        (t.label && t.label in this.registeredFunctions) ||
          e.utils.warn(
            "Function is not registered with pipeline. This may cause problems when serialising the index.\n",
            t,
          );
      }),
      (e.Pipeline.load = function (t) {
        var r = new e.Pipeline();
        return (
          t.forEach(function (t) {
            var i = e.Pipeline.registeredFunctions[t];
            if (!i) throw new Error("Cannot load unregistered function: " + t);
            r.add(i);
          }),
          r
        );
      }),
      (e.Pipeline.prototype.add = function () {
        Array.prototype.slice.call(arguments).forEach(function (t) {
          e.Pipeline.warnIfFunctionNotRegistered(t), this._stack.push(t);
        }, this);
      }),
      (e.Pipeline.prototype.after = function (t, r) {
        e.Pipeline.warnIfFunctionNotRegistered(r);
        var i = this._stack.indexOf(t);
        if (-1 == i) throw new Error("Cannot find existingFn");
        (i += 1), this._stack.splice(i, 0, r);
      }),
      (e.Pipeline.prototype.before = function (t, r) {
        e.Pipeline.warnIfFunctionNotRegistered(r);
        var i = this._stack.indexOf(t);
        if (-1 == i) throw new Error("Cannot find existingFn");
        this._stack.splice(i, 0, r);
      }),
      (e.Pipeline.prototype.remove = function (e) {
        var t = this._stack.indexOf(e);
        -1 != t && this._stack.splice(t, 1);
      }),
      (e.Pipeline.prototype.run = function (e) {
        for (var t = this._stack.length, r = 0; r < t; r++) {
          for (var i = this._stack[r], n = [], s = 0; s < e.length; s++) {
            var o = i(e[s], s, e);
            if (null != o && "" !== o)
              if (Array.isArray(o))
                for (var a = 0; a < o.length; a++) n.push(o[a]);
              else n.push(o);
          }
          e = n;
        }
        return e;
      }),
      (e.Pipeline.prototype.runString = function (t, r) {
        var i = new e.Token(t, r);
        return this.run([i]).map(function (e) {
          return e.toString();
        });
      }),
      (e.Pipeline.prototype.reset = function () {
        this._stack = [];
      }),
      (e.Pipeline.prototype.toJSON = function () {
        return this._stack.map(function (t) {
          return e.Pipeline.warnIfFunctionNotRegistered(t), t.label;
        });
      }),
      (e.Vector = function (e) {
        (this._magnitude = 0), (this.elements = e || []);
      }),
      (e.Vector.prototype.positionForIndex = function (e) {
        if (0 == this.elements.length) return 0;
        for (
          var t = 0,
            r = this.elements.length / 2,
            i = r - t,
            n = Math.floor(i / 2),
            s = this.elements[2 * n];
          1 < i && (s < e && (t = n), e < s && (r = n), s != e);

        )
          (i = r - t), (n = t + Math.floor(i / 2)), (s = this.elements[2 * n]);
        return s == e ? 2 * n : e < s ? 2 * n : s < e ? 2 * (n + 1) : void 0;
      }),
      (e.Vector.prototype.insert = function (e, t) {
        this.upsert(e, t, function () {
          throw "duplicate index";
        });
      }),
      (e.Vector.prototype.upsert = function (e, t, r) {
        this._magnitude = 0;
        var i = this.positionForIndex(e);
        this.elements[i] == e
          ? (this.elements[i + 1] = r(this.elements[i + 1], t))
          : this.elements.splice(i, 0, e, t);
      }),
      (e.Vector.prototype.magnitude = function () {
        if (this._magnitude) return this._magnitude;
        for (var e = 0, t = this.elements.length, r = 1; r < t; r += 2) {
          var i = this.elements[r];
          e += i * i;
        }
        return (this._magnitude = Math.sqrt(e));
      }),
      (e.Vector.prototype.dot = function (e) {
        for (
          var t = 0,
            r = this.elements,
            i = e.elements,
            n = r.length,
            s = i.length,
            o = 0,
            a = 0,
            u = 0,
            l = 0;
          u < n && l < s;

        )
          (o = r[u]) < (a = i[l])
            ? (u += 2)
            : a < o
              ? (l += 2)
              : o == a && ((t += r[u + 1] * i[l + 1]), (u += 2), (l += 2));
        return t;
      }),
      (e.Vector.prototype.similarity = function (e) {
        return this.dot(e) / this.magnitude() || 0;
      }),
      (e.Vector.prototype.toArray = function () {
        for (
          var e = new Array(this.elements.length / 2), t = 1, r = 0;
          t < this.elements.length;
          t += 2, r++
        )
          e[r] = this.elements[t];
        return e;
      }),
      (e.Vector.prototype.toJSON = function () {
        return this.elements;
      }),
      (e.stemmer = (function () {
        var e = {
            ational: "ate",
            tional: "tion",
            enci: "ence",
            anci: "ance",
            izer: "ize",
            bli: "ble",
            alli: "al",
            entli: "ent",
            eli: "e",
            ousli: "ous",
            ization: "ize",
            ation: "ate",
            ator: "ate",
            alism: "al",
            iveness: "ive",
            fulness: "ful",
            ousness: "ous",
            aliti: "al",
            iviti: "ive",
            biliti: "ble",
            logi: "log",
          },
          t = {
            icate: "ic",
            ative: "",
            alize: "al",
            iciti: "ic",
            ical: "ic",
            ful: "",
            ness: "",
          },
          i = "[aeiouy]",
          n = "[^aeiou][^aeiouy]*",
          c = new RegExp(
            "^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*",
          ),
          h = new RegExp(
            "^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*",
          ),
          d = new RegExp(
            "^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$",
          ),
          f = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),
          p = /^(.+?)(ss|i)es$/,
          y = /^(.+?)([^s])s$/,
          m = /^(.+?)eed$/,
          v = /^(.+?)(ed|ing)$/,
          g = /.$/,
          x = /(at|bl|iz)$/,
          w = new RegExp("([^aeiouylsz])\\1$"),
          Q = new RegExp("^" + n + i + "[^aeiouwxy]$"),
          k = /^(.+?[^aeiou])y$/,
          S =
            /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
          E = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
          L =
            /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
          b = /^(.+?)(s|t)(ion)$/,
          P = /^(.+?)e$/,
          T = /ll$/,
          O = new RegExp("^" + n + i + "[^aeiouwxy]$"),
          I = function (r) {
            var i, n, s, o, a, u, l;
            if (r.length < 3) return r;
            if (
              ("y" == (s = r.substr(0, 1)) &&
                (r = s.toUpperCase() + r.substr(1)),
              (a = y),
              (o = p).test(r)
                ? (r = r.replace(o, "$1$2"))
                : a.test(r) && (r = r.replace(a, "$1$2")),
              (a = v),
              (o = m).test(r))
            ) {
              var I = o.exec(r);
              (o = c).test(I[1]) && ((o = g), (r = r.replace(o, "")));
            } else if (a.test(r)) {
              (i = (I = a.exec(r))[1]),
                (a = f).test(i) &&
                  ((u = w),
                  (l = Q),
                  (a = x).test((r = i))
                    ? (r += "e")
                    : u.test(r)
                      ? ((o = g), (r = r.replace(o, "")))
                      : l.test(r) && (r += "e"));
            }
            (o = k).test(r) && (r = (i = (I = o.exec(r))[1]) + "i");
            (o = S).test(r) &&
              ((i = (I = o.exec(r))[1]),
              (n = I[2]),
              (o = c).test(i) && (r = i + e[n]));
            (o = E).test(r) &&
              ((i = (I = o.exec(r))[1]),
              (n = I[2]),
              (o = c).test(i) && (r = i + t[n]));
            if (((a = b), (o = L).test(r)))
              (i = (I = o.exec(r))[1]), (o = h).test(i) && (r = i);
            else if (a.test(r)) {
              (i = (I = a.exec(r))[1] + I[2]), (a = h).test(i) && (r = i);
            }
            (o = P).test(r) &&
              ((i = (I = o.exec(r))[1]),
              (a = d),
              (u = O),
              ((o = h).test(i) || (a.test(i) && !u.test(i))) && (r = i));
            return (
              (a = h),
              (o = T).test(r) && a.test(r) && ((o = g), (r = r.replace(o, ""))),
              "y" == s && (r = s.toLowerCase() + r.substr(1)),
              r
            );
          };
        return function (e) {
          return e.update(I);
        };
      })()),
      e.Pipeline.registerFunction(e.stemmer, "stemmer"),
      (e.generateStopWordFilter = function (e) {
        var t = e.reduce(function (e, t) {
          return (e[t] = t), e;
        }, {});
        return function (e) {
          if (e && t[e.toString()] !== e.toString()) return e;
        };
      }),
      (e.stopWordFilter = e.generateStopWordFilter([
        "a",
        "able",
        "about",
        "across",
        "after",
        "all",
        "almost",
        "also",
        "am",
        "among",
        "an",
        "and",
        "any",
        "are",
        "as",
        "at",
        "be",
        "because",
        "been",
        "but",
        "by",
        "can",
        "cannot",
        "could",
        "dear",
        "did",
        "do",
        "does",
        "either",
        "else",
        "ever",
        "every",
        "for",
        "from",
        "get",
        "got",
        "had",
        "has",
        "have",
        "he",
        "her",
        "hers",
        "him",
        "his",
        "how",
        "however",
        "i",
        "if",
        "in",
        "into",
        "is",
        "it",
        "its",
        "just",
        "least",
        "let",
        "like",
        "likely",
        "may",
        "me",
        "might",
        "most",
        "must",
        "my",
        "neither",
        "no",
        "nor",
        "not",
        "of",
        "off",
        "often",
        "on",
        "only",
        "or",
        "other",
        "our",
        "own",
        "rather",
        "said",
        "say",
        "says",
        "she",
        "should",
        "since",
        "so",
        "some",
        "than",
        "that",
        "the",
        "their",
        "them",
        "then",
        "there",
        "these",
        "they",
        "this",
        "tis",
        "to",
        "too",
        "twas",
        "us",
        "wants",
        "was",
        "we",
        "were",
        "what",
        "when",
        "where",
        "which",
        "while",
        "who",
        "whom",
        "why",
        "will",
        "with",
        "would",
        "yet",
        "you",
        "your",
      ])),
      e.Pipeline.registerFunction(e.stopWordFilter, "stopWordFilter"),
      (e.trimmer = function (e) {
        return e.update(function (e) {
          return e.replace(/^\W+/, "").replace(/\W+$/, "");
        });
      }),
      e.Pipeline.registerFunction(e.trimmer, "trimmer"),
      (e.TokenSet = function () {
        (this.final = !1),
          (this.edges = {}),
          (this.id = e.TokenSet._nextId),
          (e.TokenSet._nextId += 1);
      }),
      (e.TokenSet._nextId = 1),
      (e.TokenSet.fromArray = function (t) {
        for (var r = new e.TokenSet.Builder(), i = 0, n = t.length; i < n; i++)
          r.insert(t[i]);
        return r.finish(), r.root;
      }),
      (e.TokenSet.fromClause = function (t) {
        return "editDistance" in t
          ? e.TokenSet.fromFuzzyString(t.term, t.editDistance)
          : e.TokenSet.fromString(t.term);
      }),
      (e.TokenSet.fromFuzzyString = function (t, r) {
        for (
          var i = new e.TokenSet(),
            n = [{ node: i, editsRemaining: r, str: t }];
          n.length;

        ) {
          var s = n.pop();
          if (0 < s.str.length) {
            var o,
              a = s.str.charAt(0);
            a in s.node.edges
              ? (o = s.node.edges[a])
              : ((o = new e.TokenSet()), (s.node.edges[a] = o)),
              1 == s.str.length && (o.final = !0),
              n.push({
                node: o,
                editsRemaining: s.editsRemaining,
                str: s.str.slice(1),
              });
          }
          if (0 != s.editsRemaining) {
            if ("*" in s.node.edges) var u = s.node.edges["*"];
            else {
              u = new e.TokenSet();
              s.node.edges["*"] = u;
            }
            if (
              (0 == s.str.length && (u.final = !0),
              n.push({
                node: u,
                editsRemaining: s.editsRemaining - 1,
                str: s.str,
              }),
              1 < s.str.length &&
                n.push({
                  node: s.node,
                  editsRemaining: s.editsRemaining - 1,
                  str: s.str.slice(1),
                }),
              1 == s.str.length && (s.node.final = !0),
              1 <= s.str.length)
            ) {
              if ("*" in s.node.edges) var l = s.node.edges["*"];
              else {
                l = new e.TokenSet();
                s.node.edges["*"] = l;
              }
              1 == s.str.length && (l.final = !0),
                n.push({
                  node: l,
                  editsRemaining: s.editsRemaining - 1,
                  str: s.str.slice(1),
                });
            }
            if (1 < s.str.length) {
              var c,
                h = s.str.charAt(0),
                d = s.str.charAt(1);
              d in s.node.edges
                ? (c = s.node.edges[d])
                : ((c = new e.TokenSet()), (s.node.edges[d] = c)),
                1 == s.str.length && (c.final = !0),
                n.push({
                  node: c,
                  editsRemaining: s.editsRemaining - 1,
                  str: h + s.str.slice(2),
                });
            }
          }
        }
        return i;
      }),
      (e.TokenSet.fromString = function (t) {
        for (var r = new e.TokenSet(), i = r, n = 0, s = t.length; n < s; n++) {
          var o = t[n],
            a = n == s - 1;
          if ("*" == o) (r.edges[o] = r).final = a;
          else {
            var u = new e.TokenSet();
            (u.final = a), (r.edges[o] = u), (r = u);
          }
        }
        return i;
      }),
      (e.TokenSet.prototype.toArray = function () {
        for (var e = [], t = [{ prefix: "", node: this }]; t.length; ) {
          var r = t.pop(),
            i = Object.keys(r.node.edges),
            n = i.length;
          r.node.final && (r.prefix.charAt(0), e.push(r.prefix));
          for (var s = 0; s < n; s++) {
            var o = i[s];
            t.push({ prefix: r.prefix.concat(o), node: r.node.edges[o] });
          }
        }
        return e;
      }),
      (e.TokenSet.prototype.toString = function () {
        if (this._str) return this._str;
        for (
          var e = this.final ? "1" : "0",
            t = Object.keys(this.edges).sort(),
            r = t.length,
            i = 0;
          i < r;
          i++
        ) {
          var n = t[i];
          e = e + n + this.edges[n].id;
        }
        return e;
      }),
      (e.TokenSet.prototype.intersect = function (t) {
        for (
          var r = new e.TokenSet(),
            i = void 0,
            n = [{ qNode: t, output: r, node: this }];
          n.length;

        ) {
          i = n.pop();
          for (
            var s = Object.keys(i.qNode.edges),
              o = s.length,
              a = Object.keys(i.node.edges),
              u = a.length,
              l = 0;
            l < o;
            l++
          )
            for (var c = s[l], h = 0; h < u; h++) {
              var d = a[h];
              if (d == c || "*" == c) {
                var f = i.node.edges[d],
                  p = i.qNode.edges[c],
                  y = f.final && p.final,
                  m = void 0;
                d in i.output.edges
                  ? ((m = i.output.edges[d]).final = m.final || y)
                  : (((m = new e.TokenSet()).final = y),
                    (i.output.edges[d] = m)),
                  n.push({ qNode: p, output: m, node: f });
              }
            }
        }
        return r;
      }),
      (e.TokenSet.Builder = function () {
        (this.previousWord = ""),
          (this.root = new e.TokenSet()),
          (this.uncheckedNodes = []),
          (this.minimizedNodes = {});
      }),
      (e.TokenSet.Builder.prototype.insert = function (t) {
        var r,
          i = 0;
        if (t < this.previousWord)
          throw new Error("Out of order word insertion");
        for (
          var n = 0;
          n < t.length &&
          n < this.previousWord.length &&
          t[n] == this.previousWord[n];
          n++
        )
          i++;
        this.minimize(i),
          (r =
            0 == this.uncheckedNodes.length
              ? this.root
              : this.uncheckedNodes[this.uncheckedNodes.length - 1].child);
        for (n = i; n < t.length; n++) {
          var s = new e.TokenSet(),
            o = t[n];
          (r.edges[o] = s),
            this.uncheckedNodes.push({ parent: r, char: o, child: s }),
            (r = s);
        }
        (r.final = !0), (this.previousWord = t);
      }),
      (e.TokenSet.Builder.prototype.finish = function () {
        this.minimize(0);
      }),
      (e.TokenSet.Builder.prototype.minimize = function (e) {
        for (var t = this.uncheckedNodes.length - 1; e <= t; t--) {
          var r = this.uncheckedNodes[t],
            i = r.child.toString();
          i in this.minimizedNodes
            ? (r.parent.edges[r.char] = this.minimizedNodes[i])
            : ((r.child._str = i), (this.minimizedNodes[i] = r.child)),
            this.uncheckedNodes.pop();
        }
      }),
      (e.Index = function (e) {
        (this.invertedIndex = e.invertedIndex),
          (this.fieldVectors = e.fieldVectors),
          (this.tokenSet = e.tokenSet),
          (this.fields = e.fields),
          (this.pipeline = e.pipeline);
      }),
      (e.Index.prototype.search = function (t) {
        return this.query(function (r) {
          new e.QueryParser(t, r).parse();
        });
      }),
      (e.Index.prototype.query = function (t) {
        for (
          var r = new e.Query(this.fields),
            i = Object.create(null),
            n = Object.create(null),
            s = Object.create(null),
            o = Object.create(null),
            a = Object.create(null),
            u = 0;
          u < this.fields.length;
          u++
        )
          n[this.fields[u]] = new e.Vector();
        t.call(r, r);
        for (u = 0; u < r.clauses.length; u++) {
          var c,
            l = r.clauses[u],
            h = e.Set.complete;
          c = l.usePipeline
            ? this.pipeline.runString(l.term, { fields: l.fields })
            : [l.term];
          for (var d = 0; d < c.length; d++) {
            var f = c[d];
            l.term = f;
            var p = e.TokenSet.fromClause(l),
              y = this.tokenSet.intersect(p).toArray();
            if (0 === y.length && l.presence === e.Query.presence.REQUIRED) {
              for (var m = 0; m < l.fields.length; m++) {
                o[(v = l.fields[m])] = e.Set.empty;
              }
              break;
            }
            for (var g = 0; g < y.length; g++) {
              var x = y[g],
                w = this.invertedIndex[x],
                Q = w._index;
              for (m = 0; m < l.fields.length; m++) {
                var k = w[(v = l.fields[m])],
                  S = Object.keys(k),
                  E = x + "/" + v,
                  L = new e.Set(S);
                if (
                  (l.presence == e.Query.presence.REQUIRED &&
                    ((h = h.union(L)),
                    void 0 === o[v] && (o[v] = e.Set.complete)),
                  l.presence != e.Query.presence.PROHIBITED)
                ) {
                  if (
                    (n[v].upsert(Q, l.boost, function (e, t) {
                      return e + t;
                    }),
                    !s[E])
                  ) {
                    for (var b = 0; b < S.length; b++) {
                      var P,
                        T = S[b],
                        O = new e.FieldRef(T, v),
                        I = k[T];
                      void 0 === (P = i[O])
                        ? (i[O] = new e.MatchData(x, v, I))
                        : P.add(x, v, I);
                    }
                    s[E] = !0;
                  }
                } else
                  void 0 === a[v] && (a[v] = e.Set.empty),
                    (a[v] = a[v].union(L));
              }
            }
          }
          if (l.presence === e.Query.presence.REQUIRED)
            for (m = 0; m < l.fields.length; m++) {
              o[(v = l.fields[m])] = o[v].intersect(h);
            }
        }
        var R = e.Set.complete,
          F = e.Set.empty;
        for (u = 0; u < this.fields.length; u++) {
          var v;
          o[(v = this.fields[u])] && (R = R.intersect(o[v])),
            a[v] && (F = F.union(a[v]));
        }
        var C = Object.keys(i),
          N = [],
          _ = Object.create(null);
        if (r.isNegated()) {
          C = Object.keys(this.fieldVectors);
          for (u = 0; u < C.length; u++) {
            O = C[u];
            var j = e.FieldRef.fromString(O);
            i[O] = new e.MatchData();
          }
        }
        for (u = 0; u < C.length; u++) {
          var D = (j = e.FieldRef.fromString(C[u])).docRef;
          if (R.contains(D) && !F.contains(D)) {
            var A,
              B = this.fieldVectors[j],
              V = n[j.fieldName].similarity(B);
            if (void 0 !== (A = _[D]))
              (A.score += V), A.matchData.combine(i[j]);
            else {
              var z = { ref: D, score: V, matchData: i[j] };
              (_[D] = z), N.push(z);
            }
          }
        }
        return N.sort(function (e, t) {
          return t.score - e.score;
        });
      }),
      (e.Index.prototype.toJSON = function () {
        var t = Object.keys(this.invertedIndex)
            .sort()
            .map(function (e) {
              return [e, this.invertedIndex[e]];
            }, this),
          r = Object.keys(this.fieldVectors).map(function (e) {
            return [e, this.fieldVectors[e].toJSON()];
          }, this);
        return {
          version: e.version,
          fields: this.fields,
          fieldVectors: r,
          invertedIndex: t,
          pipeline: this.pipeline.toJSON(),
        };
      }),
      (e.Index.load = function (t) {
        var r = {},
          i = {},
          n = t.fieldVectors,
          s = Object.create(null),
          o = t.invertedIndex,
          a = new e.TokenSet.Builder(),
          u = e.Pipeline.load(t.pipeline);
        t.version != e.version &&
          e.utils.warn(
            "Version mismatch when loading serialised index. Current version of lunr '" +
              e.version +
              "' does not match serialized index '" +
              t.version +
              "'",
          );
        for (var l = 0; l < n.length; l++) {
          var h = (c = n[l])[0],
            d = c[1];
          i[h] = new e.Vector(d);
        }
        for (l = 0; l < o.length; l++) {
          var c,
            f = (c = o[l])[0],
            p = c[1];
          a.insert(f), (s[f] = p);
        }
        return (
          a.finish(),
          (r.fields = t.fields),
          (r.fieldVectors = i),
          (r.invertedIndex = s),
          (r.tokenSet = a.root),
          (r.pipeline = u),
          new e.Index(r)
        );
      }),
      (e.Builder = function () {
        (this._ref = "id"),
          (this._fields = Object.create(null)),
          (this._documents = Object.create(null)),
          (this.invertedIndex = Object.create(null)),
          (this.fieldTermFrequencies = {}),
          (this.fieldLengths = {}),
          (this.tokenizer = e.tokenizer),
          (this.pipeline = new e.Pipeline()),
          (this.searchPipeline = new e.Pipeline()),
          (this.documentCount = 0),
          (this._b = 0.75),
          (this._k1 = 1.2),
          (this.termIndex = 0),
          (this.metadataWhitelist = []);
      }),
      (e.Builder.prototype.ref = function (e) {
        this._ref = e;
      }),
      (e.Builder.prototype.field = function (e, t) {
        if (/\//.test(e))
          throw new RangeError(
            "Field '" + e + "' contains illegal character '/'",
          );
        this._fields[e] = t || {};
      }),
      (e.Builder.prototype.b = function (e) {
        this._b = e < 0 ? 0 : 1 < e ? 1 : e;
      }),
      (e.Builder.prototype.k1 = function (e) {
        this._k1 = e;
      }),
      (e.Builder.prototype.add = function (t, r) {
        var i = t[this._ref],
          n = Object.keys(this._fields);
        (this._documents[i] = r || {}), (this.documentCount += 1);
        for (var s = 0; s < n.length; s++) {
          var o = n[s],
            a = this._fields[o].extractor,
            u = a ? a(t) : t[o],
            l = this.tokenizer(u, { fields: [o] }),
            c = this.pipeline.run(l),
            h = new e.FieldRef(i, o),
            d = Object.create(null);
          (this.fieldTermFrequencies[h] = d),
            (this.fieldLengths[h] = 0),
            (this.fieldLengths[h] += c.length);
          for (var f = 0; f < c.length; f++) {
            var p = c[f];
            if (
              (null == d[p] && (d[p] = 0),
              (d[p] += 1),
              null == this.invertedIndex[p])
            ) {
              var y = Object.create(null);
              (y._index = this.termIndex), (this.termIndex += 1);
              for (var m = 0; m < n.length; m++) y[n[m]] = Object.create(null);
              this.invertedIndex[p] = y;
            }
            null == this.invertedIndex[p][o][i] &&
              (this.invertedIndex[p][o][i] = Object.create(null));
            for (var v = 0; v < this.metadataWhitelist.length; v++) {
              var g = this.metadataWhitelist[v],
                x = p.metadata[g];
              null == this.invertedIndex[p][o][i][g] &&
                (this.invertedIndex[p][o][i][g] = []),
                this.invertedIndex[p][o][i][g].push(x);
            }
          }
        }
      }),
      (e.Builder.prototype.calculateAverageFieldLengths = function () {
        for (
          var t = Object.keys(this.fieldLengths),
            r = t.length,
            i = {},
            n = {},
            s = 0;
          s < r;
          s++
        ) {
          var o = e.FieldRef.fromString(t[s]),
            a = o.fieldName;
          n[a] || (n[a] = 0),
            (n[a] += 1),
            i[a] || (i[a] = 0),
            (i[a] += this.fieldLengths[o]);
        }
        var u = Object.keys(this._fields);
        for (s = 0; s < u.length; s++) {
          var l = u[s];
          i[l] = i[l] / n[l];
        }
        this.averageFieldLength = i;
      }),
      (e.Builder.prototype.createFieldVectors = function () {
        for (
          var t = {},
            r = Object.keys(this.fieldTermFrequencies),
            i = r.length,
            n = Object.create(null),
            s = 0;
          s < i;
          s++
        ) {
          for (
            var o = e.FieldRef.fromString(r[s]),
              a = o.fieldName,
              u = this.fieldLengths[o],
              l = new e.Vector(),
              c = this.fieldTermFrequencies[o],
              h = Object.keys(c),
              d = h.length,
              f = this._fields[a].boost || 1,
              p = this._documents[o.docRef].boost || 1,
              y = 0;
            y < d;
            y++
          ) {
            var m,
              v,
              g,
              x = h[y],
              w = c[x],
              Q = this.invertedIndex[x]._index;
            void 0 === n[x]
              ? ((m = e.idf(this.invertedIndex[x], this.documentCount)),
                (n[x] = m))
              : (m = n[x]),
              (v =
                (m * ((this._k1 + 1) * w)) /
                (this._k1 *
                  (1 - this._b + this._b * (u / this.averageFieldLength[a])) +
                  w)),
              (v *= f),
              (v *= p),
              (g = Math.round(1e3 * v) / 1e3),
              l.insert(Q, g);
          }
          t[o] = l;
        }
        this.fieldVectors = t;
      }),
      (e.Builder.prototype.createTokenSet = function () {
        this.tokenSet = e.TokenSet.fromArray(
          Object.keys(this.invertedIndex).sort(),
        );
      }),
      (e.Builder.prototype.build = function () {
        return (
          this.calculateAverageFieldLengths(),
          this.createFieldVectors(),
          this.createTokenSet(),
          new e.Index({
            invertedIndex: this.invertedIndex,
            fieldVectors: this.fieldVectors,
            tokenSet: this.tokenSet,
            fields: Object.keys(this._fields),
            pipeline: this.searchPipeline,
          })
        );
      }),
      (e.Builder.prototype.use = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        t.unshift(this), e.apply(this, t);
      }),
      (e.MatchData = function (e, t, r) {
        for (
          var i = Object.create(null), n = Object.keys(r || {}), s = 0;
          s < n.length;
          s++
        ) {
          var o = n[s];
          i[o] = r[o].slice();
        }
        (this.metadata = Object.create(null)),
          void 0 !== e &&
            ((this.metadata[e] = Object.create(null)),
            (this.metadata[e][t] = i));
      }),
      (e.MatchData.prototype.combine = function (e) {
        for (var t = Object.keys(e.metadata), r = 0; r < t.length; r++) {
          var i = t[r],
            n = Object.keys(e.metadata[i]);
          null == this.metadata[i] && (this.metadata[i] = Object.create(null));
          for (var s = 0; s < n.length; s++) {
            var o = n[s],
              a = Object.keys(e.metadata[i][o]);
            null == this.metadata[i][o] &&
              (this.metadata[i][o] = Object.create(null));
            for (var u = 0; u < a.length; u++) {
              var l = a[u];
              null == this.metadata[i][o][l]
                ? (this.metadata[i][o][l] = e.metadata[i][o][l])
                : (this.metadata[i][o][l] = this.metadata[i][o][l].concat(
                    e.metadata[i][o][l],
                  ));
            }
          }
        }
      }),
      (e.MatchData.prototype.add = function (e, t, r) {
        if (!(e in this.metadata))
          return (
            (this.metadata[e] = Object.create(null)),
            void (this.metadata[e][t] = r)
          );
        if (t in this.metadata[e])
          for (var i = Object.keys(r), n = 0; n < i.length; n++) {
            var s = i[n];
            s in this.metadata[e][t]
              ? (this.metadata[e][t][s] = this.metadata[e][t][s].concat(r[s]))
              : (this.metadata[e][t][s] = r[s]);
          }
        else this.metadata[e][t] = r;
      }),
      (e.Query = function (e) {
        (this.clauses = []), (this.allFields = e);
      }),
      (e.Query.wildcard = new String("*")),
      (e.Query.wildcard.NONE = 0),
      (e.Query.wildcard.LEADING = 1),
      (e.Query.wildcard.TRAILING = 2),
      (e.Query.presence = { OPTIONAL: 1, REQUIRED: 2, PROHIBITED: 3 }),
      (e.Query.prototype.clause = function (t) {
        return (
          "fields" in t || (t.fields = this.allFields),
          "boost" in t || (t.boost = 1),
          "usePipeline" in t || (t.usePipeline = !0),
          "wildcard" in t || (t.wildcard = e.Query.wildcard.NONE),
          t.wildcard & e.Query.wildcard.LEADING &&
            t.term.charAt(0) != e.Query.wildcard &&
            (t.term = "*" + t.term),
          t.wildcard & e.Query.wildcard.TRAILING &&
            t.term.slice(-1) != e.Query.wildcard &&
            (t.term = t.term + "*"),
          "presence" in t || (t.presence = e.Query.presence.OPTIONAL),
          this.clauses.push(t),
          this
        );
      }),
      (e.Query.prototype.isNegated = function () {
        for (var t = 0; t < this.clauses.length; t++)
          if (this.clauses[t].presence != e.Query.presence.PROHIBITED)
            return !1;
        return !0;
      }),
      (e.Query.prototype.term = function (t, r) {
        if (Array.isArray(t))
          return (
            t.forEach(function (t) {
              this.term(t, e.utils.clone(r));
            }, this),
            this
          );
        var i = r || {};
        return (i.term = t.toString()), this.clause(i), this;
      }),
      (e.QueryParseError = function (e, t, r) {
        (this.name = "QueryParseError"),
          (this.message = e),
          (this.start = t),
          (this.end = r);
      }),
      (e.QueryParseError.prototype = new Error()),
      (e.QueryLexer = function (e) {
        (this.lexemes = []),
          (this.str = e),
          (this.length = e.length),
          (this.pos = 0),
          (this.start = 0),
          (this.escapeCharPositions = []);
      }),
      (e.QueryLexer.prototype.run = function () {
        for (var t = e.QueryLexer.lexText; t; ) t = t(this);
      }),
      (e.QueryLexer.prototype.sliceString = function () {
        for (
          var e = [], t = this.start, r = this.pos, i = 0;
          i < this.escapeCharPositions.length;
          i++
        )
          (r = this.escapeCharPositions[i]),
            e.push(this.str.slice(t, r)),
            (t = r + 1);
        return (
          e.push(this.str.slice(t, this.pos)),
          (this.escapeCharPositions.length = 0),
          e.join("")
        );
      }),
      (e.QueryLexer.prototype.emit = function (e) {
        this.lexemes.push({
          type: e,
          str: this.sliceString(),
          start: this.start,
          end: this.pos,
        }),
          (this.start = this.pos);
      }),
      (e.QueryLexer.prototype.escapeCharacter = function () {
        this.escapeCharPositions.push(this.pos - 1), (this.pos += 1);
      }),
      (e.QueryLexer.prototype.next = function () {
        if (this.pos >= this.length) return e.QueryLexer.EOS;
        var t = this.str.charAt(this.pos);
        return (this.pos += 1), t;
      }),
      (e.QueryLexer.prototype.width = function () {
        return this.pos - this.start;
      }),
      (e.QueryLexer.prototype.ignore = function () {
        this.start == this.pos && (this.pos += 1), (this.start = this.pos);
      }),
      (e.QueryLexer.prototype.backup = function () {
        this.pos -= 1;
      }),
      (e.QueryLexer.prototype.acceptDigitRun = function () {
        for (var t, r; 47 < (r = (t = this.next()).charCodeAt(0)) && r < 58; );
        t != e.QueryLexer.EOS && this.backup();
      }),
      (e.QueryLexer.prototype.more = function () {
        return this.pos < this.length;
      }),
      (e.QueryLexer.EOS = "EOS"),
      (e.QueryLexer.FIELD = "FIELD"),
      (e.QueryLexer.TERM = "TERM"),
      (e.QueryLexer.EDIT_DISTANCE = "EDIT_DISTANCE"),
      (e.QueryLexer.BOOST = "BOOST"),
      (e.QueryLexer.PRESENCE = "PRESENCE"),
      (e.QueryLexer.lexField = function (t) {
        return (
          t.backup(),
          t.emit(e.QueryLexer.FIELD),
          t.ignore(),
          e.QueryLexer.lexText
        );
      }),
      (e.QueryLexer.lexTerm = function (t) {
        if (
          (1 < t.width() && (t.backup(), t.emit(e.QueryLexer.TERM)),
          t.ignore(),
          t.more())
        )
          return e.QueryLexer.lexText;
      }),
      (e.QueryLexer.lexEditDistance = function (t) {
        return (
          t.ignore(),
          t.acceptDigitRun(),
          t.emit(e.QueryLexer.EDIT_DISTANCE),
          e.QueryLexer.lexText
        );
      }),
      (e.QueryLexer.lexBoost = function (t) {
        return (
          t.ignore(),
          t.acceptDigitRun(),
          t.emit(e.QueryLexer.BOOST),
          e.QueryLexer.lexText
        );
      }),
      (e.QueryLexer.lexEOS = function (t) {
        0 < t.width() && t.emit(e.QueryLexer.TERM);
      }),
      (e.QueryLexer.termSeparator = e.tokenizer.separator),
      (e.QueryLexer.lexText = function (t) {
        for (;;) {
          var r = t.next();
          if (r == e.QueryLexer.EOS) return e.QueryLexer.lexEOS;
          if (92 != r.charCodeAt(0)) {
            if (":" == r) return e.QueryLexer.lexField;
            if ("~" == r)
              return (
                t.backup(),
                0 < t.width() && t.emit(e.QueryLexer.TERM),
                e.QueryLexer.lexEditDistance
              );
            if ("^" == r)
              return (
                t.backup(),
                0 < t.width() && t.emit(e.QueryLexer.TERM),
                e.QueryLexer.lexBoost
              );
            if ("+" == r && 1 === t.width())
              return t.emit(e.QueryLexer.PRESENCE), e.QueryLexer.lexText;
            if ("-" == r && 1 === t.width())
              return t.emit(e.QueryLexer.PRESENCE), e.QueryLexer.lexText;
            if (r.match(e.QueryLexer.termSeparator))
              return e.QueryLexer.lexTerm;
          } else t.escapeCharacter();
        }
      }),
      (e.QueryParser = function (t, r) {
        (this.lexer = new e.QueryLexer(t)),
          (this.query = r),
          (this.currentClause = {}),
          (this.lexemeIdx = 0);
      }),
      (e.QueryParser.prototype.parse = function () {
        this.lexer.run(), (this.lexemes = this.lexer.lexemes);
        for (var t = e.QueryParser.parseClause; t; ) t = t(this);
        return this.query;
      }),
      (e.QueryParser.prototype.peekLexeme = function () {
        return this.lexemes[this.lexemeIdx];
      }),
      (e.QueryParser.prototype.consumeLexeme = function () {
        var e = this.peekLexeme();
        return (this.lexemeIdx += 1), e;
      }),
      (e.QueryParser.prototype.nextClause = function () {
        var e = this.currentClause;
        this.query.clause(e), (this.currentClause = {});
      }),
      (e.QueryParser.parseClause = function (t) {
        var r = t.peekLexeme();
        if (null != r)
          switch (r.type) {
            case e.QueryLexer.PRESENCE:
              return e.QueryParser.parsePresence;
            case e.QueryLexer.FIELD:
              return e.QueryParser.parseField;
            case e.QueryLexer.TERM:
              return e.QueryParser.parseTerm;
            default:
              var i = "expected either a field or a term, found " + r.type;
              throw (
                (1 <= r.str.length && (i += " with value '" + r.str + "'"),
                new e.QueryParseError(i, r.start, r.end))
              );
          }
      }),
      (e.QueryParser.parsePresence = function (t) {
        var r = t.consumeLexeme();
        if (null != r) {
          switch (r.str) {
            case "-":
              t.currentClause.presence = e.Query.presence.PROHIBITED;
              break;
            case "+":
              t.currentClause.presence = e.Query.presence.REQUIRED;
              break;
            default:
              var i = "unrecognised presence operator'" + r.str + "'";
              throw new e.QueryParseError(i, r.start, r.end);
          }
          var n = t.peekLexeme();
          if (null == n) {
            i = "expecting term or field, found nothing";
            throw new e.QueryParseError(i, r.start, r.end);
          }
          switch (n.type) {
            case e.QueryLexer.FIELD:
              return e.QueryParser.parseField;
            case e.QueryLexer.TERM:
              return e.QueryParser.parseTerm;
            default:
              i = "expecting term or field, found '" + n.type + "'";
              throw new e.QueryParseError(i, n.start, n.end);
          }
        }
      }),
      (e.QueryParser.parseField = function (t) {
        var r = t.consumeLexeme();
        if (null != r) {
          if (-1 == t.query.allFields.indexOf(r.str)) {
            var i = t.query.allFields
                .map(function (e) {
                  return "'" + e + "'";
                })
                .join(", "),
              n = "unrecognised field '" + r.str + "', possible fields: " + i;
            throw new e.QueryParseError(n, r.start, r.end);
          }
          t.currentClause.fields = [r.str];
          var s = t.peekLexeme();
          if (null == s) {
            n = "expecting term, found nothing";
            throw new e.QueryParseError(n, r.start, r.end);
          }
          switch (s.type) {
            case e.QueryLexer.TERM:
              return e.QueryParser.parseTerm;
            default:
              n = "expecting term, found '" + s.type + "'";
              throw new e.QueryParseError(n, s.start, s.end);
          }
        }
      }),
      (e.QueryParser.parseTerm = function (t) {
        var r = t.consumeLexeme();
        if (null != r) {
          (t.currentClause.term = r.str.toLowerCase()),
            -1 != r.str.indexOf("*") && (t.currentClause.usePipeline = !1);
          var i = t.peekLexeme();
          if (null == i) return void t.nextClause();
          switch (i.type) {
            case e.QueryLexer.TERM:
              return t.nextClause(), e.QueryParser.parseTerm;
            case e.QueryLexer.FIELD:
              return t.nextClause(), e.QueryParser.parseField;
            case e.QueryLexer.EDIT_DISTANCE:
              return e.QueryParser.parseEditDistance;
            case e.QueryLexer.BOOST:
              return e.QueryParser.parseBoost;
            case e.QueryLexer.PRESENCE:
              return t.nextClause(), e.QueryParser.parsePresence;
            default:
              var n = "Unexpected lexeme type '" + i.type + "'";
              throw new e.QueryParseError(n, i.start, i.end);
          }
        }
      }),
      (e.QueryParser.parseEditDistance = function (t) {
        var r = t.consumeLexeme();
        if (null != r) {
          var i = parseInt(r.str, 10);
          if (isNaN(i)) {
            var n = "edit distance must be numeric";
            throw new e.QueryParseError(n, r.start, r.end);
          }
          t.currentClause.editDistance = i;
          var s = t.peekLexeme();
          if (null == s) return void t.nextClause();
          switch (s.type) {
            case e.QueryLexer.TERM:
              return t.nextClause(), e.QueryParser.parseTerm;
            case e.QueryLexer.FIELD:
              return t.nextClause(), e.QueryParser.parseField;
            case e.QueryLexer.EDIT_DISTANCE:
              return e.QueryParser.parseEditDistance;
            case e.QueryLexer.BOOST:
              return e.QueryParser.parseBoost;
            case e.QueryLexer.PRESENCE:
              return t.nextClause(), e.QueryParser.parsePresence;
            default:
              n = "Unexpected lexeme type '" + s.type + "'";
              throw new e.QueryParseError(n, s.start, s.end);
          }
        }
      }),
      (e.QueryParser.parseBoost = function (t) {
        var r = t.consumeLexeme();
        if (null != r) {
          var i = parseInt(r.str, 10);
          if (isNaN(i)) {
            var n = "boost must be numeric";
            throw new e.QueryParseError(n, r.start, r.end);
          }
          t.currentClause.boost = i;
          var s = t.peekLexeme();
          if (null == s) return void t.nextClause();
          switch (s.type) {
            case e.QueryLexer.TERM:
              return t.nextClause(), e.QueryParser.parseTerm;
            case e.QueryLexer.FIELD:
              return t.nextClause(), e.QueryParser.parseField;
            case e.QueryLexer.EDIT_DISTANCE:
              return e.QueryParser.parseEditDistance;
            case e.QueryLexer.BOOST:
              return e.QueryParser.parseBoost;
            case e.QueryLexer.PRESENCE:
              return t.nextClause(), e.QueryParser.parsePresence;
            default:
              n = "Unexpected lexeme type '" + s.type + "'";
              throw new e.QueryParseError(n, s.start, s.end);
          }
        }
      }),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define(t)
          : "object" == typeof exports
            ? (module.exports = t())
            : (e.lunr = t());
      })(this, function () {
        return e;
      });
  })();
var __extends =
    (this && this.__extends) ||
    (function () {
      var extendStatics = function (d, b) {
        return (extendStatics =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (d, b) {
              d.__proto__ = b;
            }) ||
          function (d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
          })(d, b);
      };
      return function (d, b) {
        function __() {
          this.constructor = d;
        }
        extendStatics(d, b),
          (d.prototype =
            null === b
              ? Object.create(b)
              : ((__.prototype = b.prototype), new __()));
      };
    })(),
  typedoc,
  typedoc,
  typedoc,
  typedoc,
  typedoc,
  typedoc,
  typedoc,
  typedoc,
  typedoc,
  typedoc;
!(function (typedoc) {
  typedoc.$html = $("html");
  var services = [],
    components = [];
  (typedoc.$document = $(document)),
    (typedoc.$window = $(window)),
    (typedoc.$body = $("body")),
    (typedoc.registerService = function (constructor, name, priority) {
      void 0 === priority && (priority = 0),
        services.push({
          constructor: constructor,
          name: name,
          priority: priority,
          instance: null,
        }),
        services.sort(function (a, b) {
          return a.priority - b.priority;
        });
    }),
    (typedoc.registerComponent = function (
      constructor,
      selector,
      priority,
      namespace,
    ) {
      void 0 === priority && (priority = 0),
        void 0 === namespace && (namespace = "*"),
        components.push({
          selector: selector,
          constructor: constructor,
          priority: priority,
          namespace: namespace,
        }),
        components.sort(function (a, b) {
          return a.priority - b.priority;
        });
    }),
    "undefined" != typeof Backbone &&
      ((typedoc.Events = function () {}),
      _.extend(typedoc.Events.prototype, Backbone.Events));
  var Application = (function (_super) {
    function Application() {
      var _this = _super.call(this) || this;
      return (
        _this.createServices(), _this.createComponents(typedoc.$body), _this
      );
    }
    return (
      __extends(Application, _super),
      (Application.prototype.createServices = function () {
        _(services).forEach(function (c) {
          (c.instance = new c.constructor()), (typedoc[c.name] = c.instance);
        });
      }),
      (Application.prototype.createComponents = function ($context, namespace) {
        void 0 === namespace && (namespace = "default");
        var result = [];
        return (
          _(components).forEach(function (c) {
            (c.namespace != namespace && "*" != c.namespace) ||
              $context.find(c.selector).each(function (m, el) {
                var instance,
                  $el = $(el);
                (instance = $el.data("component"))
                  ? -1 == _(result).indexOf(instance) && result.push(instance)
                  : ((instance = new c.constructor({ el: el })),
                    $el.data("component", instance),
                    result.push(instance));
              });
          }),
          result
        );
      }),
      Application
    );
  })(typedoc.Events);
  typedoc.Application = Application;
})(typedoc || (typedoc = {})),
  (function (typedoc) {
    var Viewport = (function (_super) {
      function Viewport() {
        var _this = _super.call(this) || this;
        return (
          (_this.scrollTop = 0),
          (_this.lastY = 0),
          (_this.width = 0),
          (_this.height = 0),
          (_this.showToolbar = !0),
          (_this.toolbar = document.querySelector(".tsd-page-toolbar")),
          (_this.secondaryNav = document.querySelector(
            ".tsd-navigation.secondary",
          )),
          typedoc.$window.on(
            "scroll",
            _.throttle(function () {
              return _this.onScroll();
            }, 10),
          ),
          typedoc.$window.on(
            "resize",
            _.throttle(function () {
              return _this.onResize();
            }, 10),
          ),
          _this.onResize(),
          _this.onScroll(),
          _this
        );
      }
      return (
        __extends(Viewport, _super),
        (Viewport.prototype.triggerResize = function () {
          this.trigger("resize", this.width, this.height);
        }),
        (Viewport.prototype.onResize = function () {
          (this.width = typedoc.$window.width() || 0),
            (this.height = typedoc.$window.height() || 0),
            this.trigger("resize", this.width, this.height);
        }),
        (Viewport.prototype.onScroll = function () {
          (this.scrollTop = typedoc.$window.scrollTop() || 0),
            this.trigger("scroll", this.scrollTop),
            this.hideShowToolbar();
        }),
        (Viewport.prototype.hideShowToolbar = function () {
          var isShown = this.showToolbar;
          (this.showToolbar =
            this.lastY >= this.scrollTop || 0 === this.scrollTop),
            isShown !== this.showToolbar &&
              (this.toolbar.classList.toggle("tsd-page-toolbar--hide"),
              this.secondaryNav.classList.toggle(
                "tsd-navigation--toolbar-hide",
              )),
            (this.lastY = this.scrollTop);
        }),
        Viewport
      );
    })(typedoc.Events);
    (typedoc.Viewport = Viewport),
      typedoc.registerService(Viewport, "viewport");
  })(typedoc || (typedoc = {})),
  (function (typedoc) {
    (typedoc.pointerDown = "mousedown"),
      (typedoc.pointerMove = "mousemove"),
      (typedoc.pointerUp = "mouseup"),
      (typedoc.pointerDownPosition = { x: 0, y: 0 }),
      (typedoc.preventNextClick = !1),
      (typedoc.isPointerDown = !1),
      (typedoc.isPointerTouch = !1),
      (typedoc.hasPointerMoved = !1),
      (typedoc.isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        )),
      typedoc.$html.addClass(typedoc.isMobile ? "is-mobile" : "not-mobile"),
      typedoc.isMobile &&
        "ontouchstart" in document.documentElement &&
        ((typedoc.isPointerTouch = !0),
        (typedoc.pointerDown = "touchstart"),
        (typedoc.pointerMove = "touchmove"),
        (typedoc.pointerUp = "touchend")),
      typedoc.$document
        .on(typedoc.pointerDown, function (e) {
          (typedoc.isPointerDown = !0), (typedoc.hasPointerMoved = !1);
          var t =
            "touchstart" == typedoc.pointerDown
              ? e.originalEvent.targetTouches[0]
              : e;
          (typedoc.pointerDownPosition.y = t.pageY || 0),
            (typedoc.pointerDownPosition.x = t.pageX || 0);
        })
        .on(typedoc.pointerMove, function (e) {
          if (typedoc.isPointerDown && !typedoc.hasPointerMoved) {
            var t =
                "touchstart" == typedoc.pointerDown
                  ? e.originalEvent.targetTouches[0]
                  : e,
              x = typedoc.pointerDownPosition.x - (t.pageX || 0),
              y = typedoc.pointerDownPosition.y - (t.pageY || 0);
            typedoc.hasPointerMoved = 10 < Math.sqrt(x * x + y * y);
          }
        })
        .on(typedoc.pointerUp, function (e) {
          typedoc.isPointerDown = !1;
        })
        .on("click", function (e) {
          typedoc.preventNextClick &&
            (e.preventDefault(),
            e.stopImmediatePropagation(),
            (typedoc.preventNextClick = !1));
        });
  })(typedoc || (typedoc = {})),
  (function (typedoc) {
    var FilterItem = (function () {
        function FilterItem(key, value) {
          (this.key = key),
            (this.value = value),
            (this.defaultValue = value),
            this.initialize(),
            window.localStorage[this.key] &&
              this.setValue(
                this.fromLocalStorage(window.localStorage[this.key]),
              );
        }
        return (
          (FilterItem.prototype.initialize = function () {}),
          (FilterItem.prototype.setValue = function (value) {
            if (this.value != value) {
              var oldValue = this.value;
              (this.value = value),
                (window.localStorage[this.key] = this.toLocalStorage(value)),
                this.handleValueChange(oldValue, value);
            }
          }),
          FilterItem
        );
      })(),
      FilterItemCheckbox = (function (_super) {
        function FilterItemCheckbox() {
          return (null !== _super && _super.apply(this, arguments)) || this;
        }
        return (
          __extends(FilterItemCheckbox, _super),
          (FilterItemCheckbox.prototype.initialize = function () {
            var _this = this;
            (this.$checkbox = $("#tsd-filter-" + this.key)),
              this.$checkbox.on("change", function () {
                _this.setValue(_this.$checkbox.prop("checked"));
              });
          }),
          (FilterItemCheckbox.prototype.handleValueChange = function (
            oldValue,
            newValue,
          ) {
            this.$checkbox.prop("checked", this.value),
              typedoc.$html.toggleClass(
                "toggle-" + this.key,
                this.value != this.defaultValue,
              );
          }),
          (FilterItemCheckbox.prototype.fromLocalStorage = function (value) {
            return "true" == value;
          }),
          (FilterItemCheckbox.prototype.toLocalStorage = function (value) {
            return value ? "true" : "false";
          }),
          FilterItemCheckbox
        );
      })(FilterItem),
      FilterItemSelect = (function (_super) {
        function FilterItemSelect() {
          return (null !== _super && _super.apply(this, arguments)) || this;
        }
        return (
          __extends(FilterItemSelect, _super),
          (FilterItemSelect.prototype.initialize = function () {
            var _this = this;
            typedoc.$html.addClass("toggle-" + this.key + this.value),
              (this.$select = $("#tsd-filter-" + this.key)),
              this.$select
                .on(typedoc.pointerDown + " mouseover", function () {
                  _this.$select.addClass("active");
                })
                .on("mouseleave", function () {
                  _this.$select.removeClass("active");
                })
                .on(typedoc.pointerUp, "li", function (e) {
                  _this.$select.removeClass("active"),
                    _this.setValue(
                      ($(e.target).attr("data-value") || "").toString(),
                    );
                }),
              typedoc.$document.on(typedoc.pointerDown, function (e) {
                $(e.target).parents().addBack().is(_this.$select) ||
                  _this.$select.removeClass("active");
              });
          }),
          (FilterItemSelect.prototype.handleValueChange = function (
            oldValue,
            newValue,
          ) {
            this.$select.find("li.selected").removeClass("selected"),
              this.$select.find(".tsd-select-label").text(
                this.$select
                  .find('li[data-value="' + newValue + '"]')
                  .addClass("selected")
                  .text(),
              ),
              typedoc.$html.removeClass("toggle-" + oldValue),
              typedoc.$html.addClass("toggle-" + newValue);
          }),
          (FilterItemSelect.prototype.fromLocalStorage = function (value) {
            return value;
          }),
          (FilterItemSelect.prototype.toLocalStorage = function (value) {
            return value;
          }),
          FilterItemSelect
        );
      })(FilterItem),
      Filter = (function (_super) {
        function Filter(options) {
          var _this = _super.call(this, options) || this;
          return (
            (_this.optionVisibility = new FilterItemSelect(
              "visibility",
              "private",
            )),
            (_this.optionInherited = new FilterItemCheckbox("inherited", !0)),
            (_this.optionExternals = new FilterItemCheckbox("externals", !0)),
            (_this.optionOnlyExported = new FilterItemCheckbox(
              "only-exported",
              !1,
            )),
            _this
          );
        }
        return (
          __extends(Filter, _super),
          (Filter.isSupported = function () {
            try {
              return void 0 !== window.localStorage;
            } catch (e) {
              return !1;
            }
          }),
          Filter
        );
      })(Backbone.View);
    Filter.isSupported()
      ? typedoc.registerComponent(Filter, "#tsd-filter")
      : typedoc.$html.addClass("no-filter");
  })(typedoc || (typedoc = {})),
  (function (typedoc) {
    var MenuHighlight = (function (_super) {
      function MenuHighlight(options) {
        var _this = _super.call(this, options) || this;
        return (
          (_this.anchors = []),
          (_this.index = 0),
          _this.listenTo(typedoc.viewport, "resize", _this.onResize),
          _this.listenTo(typedoc.viewport, "scroll", _this.onScroll),
          _this.createAnchors(),
          _this
        );
      }
      return (
        __extends(MenuHighlight, _super),
        (MenuHighlight.prototype.createAnchors = function () {
          var _this = this;
          (this.index = 0), (this.anchors = [{ position: 0 }]);
          var base = window.location.href;
          -1 != base.indexOf("#") && (base = base.substr(0, base.indexOf("#"))),
            this.$el.find("a").each(function (_index, el) {
              var href = el.href;
              if (
                -1 != href.indexOf("#") &&
                href.substr(0, base.length) == base
              ) {
                var hash = href.substr(href.indexOf("#") + 1),
                  $anchor = $("a.tsd-anchor[name=" + hash + "]");
                0 != $anchor.length &&
                  _this.anchors.push({
                    $link: $(el.parentNode),
                    $anchor: $anchor,
                    position: 0,
                  });
              }
            }),
            this.onResize();
        }),
        (MenuHighlight.prototype.onResize = function () {
          for (
            var anchor, index = 1, count = this.anchors.length;
            index < count;
            index++
          )
            (anchor = this.anchors[index]).position =
              anchor.$anchor.offset().top;
          this.anchors.sort(function (a, b) {
            return a.position - b.position;
          }),
            this.onScroll(typedoc.viewport.scrollTop);
        }),
        (MenuHighlight.prototype.onScroll = function (scrollTop) {
          var anchors = this.anchors,
            index = this.index,
            count = anchors.length - 1;
          for (
            scrollTop += 5;
            0 < index && anchors[index].position > scrollTop;

          )
            index -= 1;
          for (; index < count && anchors[index + 1].position < scrollTop; )
            index += 1;
          this.index != index &&
            (0 < this.index &&
              this.anchors[this.index].$link.removeClass("focus"),
            (this.index = index),
            0 < this.index && this.anchors[this.index].$link.addClass("focus"));
        }),
        MenuHighlight
      );
    })(Backbone.View);
    (typedoc.MenuHighlight = MenuHighlight),
      typedoc.registerComponent(MenuHighlight, ".menu-highlight");
  })(typedoc || (typedoc = {})),
  (function (typedoc) {
    var search;
    !(function (search) {
      var SearchLoadingState;
      !(function (SearchLoadingState) {
        (SearchLoadingState[(SearchLoadingState.Idle = 0)] = "Idle"),
          (SearchLoadingState[(SearchLoadingState.Loading = 1)] = "Loading"),
          (SearchLoadingState[(SearchLoadingState.Ready = 2)] = "Ready"),
          (SearchLoadingState[(SearchLoadingState.Failure = 3)] = "Failure");
      })(SearchLoadingState || (SearchLoadingState = {}));
      var $el = $("#tsd-search"),
        $field = $("#tsd-search-field"),
        $results = $(".results"),
        base = $el.attr("data-base") + "/",
        query = "",
        loadingState = SearchLoadingState.Idle,
        hasFocus = !1,
        preventPress = !1,
        index,
        resultClicked = !1;
      function createIndex() {
        var builder = new lunr.Builder();
        builder.pipeline.add(lunr.trimmer),
          builder.field("name", { boost: 10 }),
          builder.field("parent"),
          builder.ref("id");
        var rows = search.data.rows,
          pos = 0,
          length = rows.length;
        !(function batch() {
          for (var cycles = 0; cycles++ < 100; )
            if ((builder.add(rows[pos]), ++pos == length))
              return (
                (index = builder.build()),
                setLoadingState(SearchLoadingState.Ready)
              );
          setTimeout(batch, 10);
        })();
      }
      function loadIndex() {
        loadingState == SearchLoadingState.Idle &&
          (setTimeout(function () {
            loadingState == SearchLoadingState.Idle &&
              setLoadingState(SearchLoadingState.Loading);
          }, 500),
          void 0 !== search.data
            ? createIndex()
            : $.get($el.attr("data-index"))
                .done(function (source) {
                  eval(source), createIndex();
                })
                .fail(function () {
                  setLoadingState(SearchLoadingState.Failure);
                }));
      }
      function updateResults() {
        if (
          ($results.empty(), loadingState == SearchLoadingState.Ready && query)
        ) {
          var res = index.search("*" + query + "*");
          0 === res.length && (res = index.search("*" + query + "~1*"));
          for (var i = 0, c = Math.min(10, res.length); i < c; i++) {
            var row = search.data.rows[Number(res[i].ref)],
              name = row.name.replace(new RegExp(query, "i"), function (match) {
                return "<b>" + match + "</b>";
              }),
              parent = row.parent || "";
            (parent = parent.replace(new RegExp(query, "i"), function (match) {
              return "<b>" + match + "</b>";
            })) &&
              (name = '<span class="parent">' + parent + ".</span>" + name),
              $results.append(
                '<li class="' +
                  row.classes +
                  '"><a href="' +
                  base +
                  row.url +
                  '" class="tsd-kind-icon">' +
                  name +
                  "</li>",
              );
          }
        }
      }
      function setLoadingState(value) {
        loadingState != value &&
          ($el.removeClass(SearchLoadingState[loadingState].toLowerCase()),
          (loadingState = value),
          $el.addClass(SearchLoadingState[loadingState].toLowerCase()),
          value == SearchLoadingState.Ready && updateResults());
      }
      function setHasFocus(value) {
        hasFocus != value &&
          ((hasFocus = value),
          $el.toggleClass("has-focus"),
          value ? (setQuery(""), $field.val("")) : $field.val(query));
      }
      function setQuery(value) {
        (query = $.trim(value)), updateResults();
      }
      function setCurrentResult(dir) {
        var $current = $results.find(".current");
        if (0 == $current.length)
          $results
            .find(1 == dir ? "li:first-child" : "li:last-child")
            .addClass("current");
        else {
          var $rel = 1 == dir ? $current.next("li") : $current.prev("li");
          0 < $rel.length &&
            ($current.removeClass("current"), $rel.addClass("current"));
        }
      }
      function gotoCurrentResult() {
        var $current = $results.find(".current");
        0 == $current.length && ($current = $results.find("li:first-child")),
          0 < $current.length &&
            ((window.location.href = $current.find("a").prop("href")),
            $field.blur());
      }
      $results
        .on("mousedown", function () {
          resultClicked = !0;
        })
        .on("mouseup", function () {
          setHasFocus((resultClicked = !1));
        }),
        $field
          .on("focusin", function () {
            setHasFocus(!0), loadIndex();
          })
          .on("focusout", function () {
            resultClicked
              ? (resultClicked = !1)
              : setTimeout(function () {
                  return setHasFocus(!1);
                }, 100);
          })
          .on("input", function () {
            setQuery($.trim(($field.val() || "").toString()));
          })
          .on("keydown", function (e) {
            13 == e.keyCode ||
            27 == e.keyCode ||
            38 == e.keyCode ||
            40 == e.keyCode
              ? ((preventPress = !0),
                e.preventDefault(),
                13 == e.keyCode
                  ? gotoCurrentResult()
                  : 27 == e.keyCode
                    ? $field.blur()
                    : 38 == e.keyCode
                      ? setCurrentResult(-1)
                      : 40 == e.keyCode && setCurrentResult(1))
              : (preventPress = !1);
          })
          .on("keypress", function (e) {
            preventPress && e.preventDefault();
          }),
        $("body").on("keydown", function (e) {
          e.altKey ||
            e.ctrlKey ||
            e.metaKey ||
            (!hasFocus && 47 < e.keyCode && e.keyCode < 112 && $field.focus());
        });
    })((search = typedoc.search || (typedoc.search = {})));
  })(typedoc || (typedoc = {})),
  (function (typedoc) {
    function noTransition($el, callback) {
      $el.addClass("no-transition"),
        callback(),
        $el.offset(),
        $el.removeClass("no-transition");
    }
    (typedoc.transition = (function (tuples) {
      for (var name in tuples)
        if (tuples.hasOwnProperty(name) && void 0 !== document.body.style[name])
          return { name: name, endEvent: tuples[name] };
      return null;
    })({
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      msTransition: "msTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd",
    })),
      (typedoc.noTransition = noTransition),
      (typedoc.animateHeight = function ($el, callback, success) {
        var from = $el.height() || 0,
          to = from;
        noTransition($el, function () {
          callback(),
            $el.css("height", ""),
            (to = $el.height() || 0),
            from != to && typedoc.transition && $el.css("height", from);
        }),
          from != to && typedoc.transition
            ? ($el.css("height", to),
              $el.on(typedoc.transition.endEvent, function () {
                noTransition($el, function () {
                  $el.off(typedoc.transition.endEvent).css("height", ""),
                    success && success();
                });
              }))
            : success && success();
      });
  })(typedoc || (typedoc = {})),
  (function (typedoc) {
    var SignatureGroup = (function () {
        function SignatureGroup($signature, $description) {
          (this.$signature = $signature), (this.$description = $description);
        }
        return (
          (SignatureGroup.prototype.addClass = function (className) {
            return (
              this.$signature.addClass(className),
              this.$description.addClass(className),
              this
            );
          }),
          (SignatureGroup.prototype.removeClass = function (className) {
            return (
              this.$signature.removeClass(className),
              this.$description.removeClass(className),
              this
            );
          }),
          SignatureGroup
        );
      })(),
      Signature = (function (_super) {
        function Signature(options) {
          var _this = _super.call(this, options) || this;
          return (
            (_this.groups = []),
            (_this.index = -1),
            _this.createGroups(),
            _this.$container &&
              (_this.$el
                .addClass("active")
                .on("touchstart", ".tsd-signature", function (event) {
                  return _this.onClick(event);
                })
                .on("click", ".tsd-signature", function (event) {
                  return _this.onClick(event);
                }),
              _this.$container.addClass("active"),
              _this.setIndex(0)),
            _this
          );
        }
        return (
          __extends(Signature, _super),
          (Signature.prototype.setIndex = function (index) {
            if (
              (index < 0 && (index = 0),
              index > this.groups.length - 1 &&
                (index = this.groups.length - 1),
              this.index != index)
            ) {
              var to = this.groups[index];
              if (-1 < this.index) {
                var from = this.groups[this.index];
                typedoc.animateHeight(this.$container, function () {
                  from.removeClass("current").addClass("fade-out"),
                    to.addClass("current fade-in"),
                    typedoc.viewport.triggerResize();
                }),
                  setTimeout(function () {
                    from.removeClass("fade-out"), to.removeClass("fade-in");
                  }, 300);
              } else to.addClass("current"), typedoc.viewport.triggerResize();
              this.index = index;
            }
          }),
          (Signature.prototype.createGroups = function () {
            var _this = this,
              $signatures = this.$el.find("> .tsd-signature");
            if (!($signatures.length < 2)) {
              this.$container = this.$el.siblings(".tsd-descriptions");
              var $descriptions = this.$container.find("> .tsd-description");
              (this.groups = []),
                $signatures.each(function (index, el) {
                  _this.groups.push(
                    new SignatureGroup($(el), $descriptions.eq(index)),
                  );
                });
            }
          }),
          (Signature.prototype.onClick = function (e) {
            var _this = this;
            _(this.groups).forEach(function (group, index) {
              group.$signature.is(e.currentTarget) && _this.setIndex(index);
            });
          }),
          Signature
        );
      })(Backbone.View);
    typedoc.registerComponent(Signature, ".tsd-signatures");
  })(typedoc || (typedoc = {})),
  (function (typedoc) {
    var Toggle = (function (_super) {
      function Toggle(options) {
        var _this = _super.call(this, options) || this;
        return (
          (_this.className = _this.$el.attr("data-toggle") || ""),
          _this.$el.on(typedoc.pointerUp, function (e) {
            return _this.onPointerUp(e);
          }),
          _this.$el.on("click", function (e) {
            return e.preventDefault();
          }),
          typedoc.$document.on(typedoc.pointerDown, function (e) {
            return _this.onDocumentPointerDown(e);
          }),
          typedoc.$document.on(typedoc.pointerUp, function (e) {
            return _this.onDocumentPointerUp(e);
          }),
          _this
        );
      }
      return (
        __extends(Toggle, _super),
        (Toggle.prototype.setActive = function (value) {
          if (this.active != value) {
            (this.active = value),
              typedoc.$html.toggleClass("has-" + this.className, value),
              this.$el.toggleClass("active", value);
            var transition =
              (this.active ? "to-has-" : "from-has-") + this.className;
            typedoc.$html.addClass(transition),
              setTimeout(function () {
                return typedoc.$html.removeClass(transition);
              }, 500);
          }
        }),
        (Toggle.prototype.onPointerUp = function (event) {
          typedoc.hasPointerMoved ||
            (this.setActive(!0), event.preventDefault());
        }),
        (Toggle.prototype.onDocumentPointerDown = function (e) {
          if (this.active) {
            var $path = $(e.target).parents().addBack();
            if ($path.hasClass("col-menu")) return;
            if ($path.hasClass("tsd-filter-group")) return;
            this.setActive(!1);
          }
        }),
        (Toggle.prototype.onDocumentPointerUp = function (e) {
          var _this = this;
          if (!typedoc.hasPointerMoved && this.active) {
            var $path = $(e.target).parents().addBack();
            if ($path.hasClass("col-menu")) {
              var $link = $path.filter("a");
              if ($link.length) {
                var href = window.location.href;
                -1 != href.indexOf("#") &&
                  (href = href.substr(0, href.indexOf("#"))),
                  $link.prop("href").substr(0, href.length) == href &&
                    setTimeout(function () {
                      return _this.setActive(!1);
                    }, 250);
              }
            }
          }
        }),
        Toggle
      );
    })(Backbone.View);
    typedoc.registerComponent(Toggle, "a[data-toggle]");
  })(typedoc || (typedoc = {})),
  (function (typedoc) {
    typedoc.app = new typedoc.Application();
  })(typedoc || (typedoc = {}));
