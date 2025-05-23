!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  function s(a) {
    var b = a.length,
      c = n.type(a);
    return (
      "function" !== c &&
      !n.isWindow(a) &&
      (!(1 !== a.nodeType || !b) ||
        "array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a))
    );
  }
  function x(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (w.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c;
    });
  }
  function D(a, b) {
    for (; (a = a[b]) && 1 !== a.nodeType; );
    return a;
  }
  function G(a) {
    var b = (F[a] = {});
    return (
      n.each(a.match(E) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  function I() {
    l.removeEventListener("DOMContentLoaded", I, !1),
      a.removeEventListener("load", I, !1),
      n.ready();
  }
  function K() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = n.expando + Math.random());
  }
  function P(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(O, "-$1").toLowerCase()),
        "string" == typeof (c = a.getAttribute(d)))
      ) {
        try {
          c =
            "true" === c ||
            ("false" !== c &&
              ("null" === c
                ? null
                : +c + "" === c
                  ? +c
                  : N.test(c)
                    ? n.parseJSON(c)
                    : c));
        } catch (e) {}
        M.set(a, b, c);
      } else c = void 0;
    return c;
  }
  function Z() {
    return !0;
  }
  function $() {
    return !1;
  }
  function _() {
    try {
      return l.activeElement;
    } catch (a) {}
  }
  function jb(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function kb(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function lb(a) {
    var b = gb.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function mb(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
  }
  function nb(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        L.hasData(a) &&
        ((f = L.access(a)), (g = L.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }
      M.hasData(a) && ((h = M.access(a)), (i = n.extend({}, h)), M.set(b, i));
    }
  }
  function ob(a, b) {
    var c = a.getElementsByTagName
      ? a.getElementsByTagName(b || "*")
      : a.querySelectorAll
        ? a.querySelectorAll(b || "*")
        : [];
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
  }
  function pb(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && T.test(a.type)
      ? (b.checked = a.checked)
      : ("input" === c || "textarea" === c) &&
        (b.defaultValue = a.defaultValue);
  }
  function sb(b, c) {
    var d,
      e = n(c.createElement(b)).appendTo(c.body),
      f =
        a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
          ? d.display
          : n.css(e[0], "display");
    return e.detach(), f;
  }
  function tb(a) {
    var b = l,
      c = rb[a];
    return (
      c ||
        ((c = sb(a, b)),
        ("none" !== c && c) ||
          ((qb = (
            qb || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = qb[0].contentDocument),
          b.write(),
          b.close(),
          (c = sb(a, b)),
          qb.detach()),
        (rb[a] = c)),
      c
    );
  }
  function xb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || wb(a)),
      c && (g = c.getPropertyValue(b) || c[b]),
      c &&
        ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        vb.test(g) &&
          ub.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function yb(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  function Fb(a, b) {
    if (b in a) return b;
    for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length; e--; )
      if ((b = Eb[e] + c) in a) return b;
    return d;
  }
  function Gb(a, b, c) {
    var d = Ab.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function Hb(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + R[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + R[f], !0, e)),
            "padding" !== c &&
              (g += n.css(a, "border" + R[f] + "Width", !0, e)));
    return g;
  }
  function Ib(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = wb(a),
      g = "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = xb(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        vb.test(e))
      )
        return e;
      (d = g && (k.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  function Jb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = L.get(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                S(d) &&
                (f[g] = L.access(d, "olddisplay", tb(d.nodeName))))
            : ((e = S(d)),
              ("none" === c && e) ||
                L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  function Kb(a, b, c, d, e) {
    return new Kb.prototype.init(a, b, c, d, e);
  }
  function Sb() {
    return (
      setTimeout(function () {
        Lb = void 0;
      }),
      (Lb = n.now())
    );
  }
  function Tb(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)
      (c = R[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function Ub(a, b, c) {
    for (
      var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function Vb(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      l = this,
      m = {},
      o = a.style,
      p = a.nodeType && S(a),
      q = L.get(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      l.always(function () {
        l.always(function () {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = n.css(a, "display")),
        "inline" ===
          ("none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j) &&
          "none" === n.css(a, "float") &&
          (o.display = "inline-block")),
      c.overflow &&
        ((o.overflow = "hidden"),
        l.always(function () {
          (o.overflow = c.overflow[0]),
            (o.overflowX = c.overflow[1]),
            (o.overflowY = c.overflow[2]);
        }));
    for (d in b)
      if (((e = b[d]), Nb.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        m[d] = (q && q[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(m))
      "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j);
    else {
      q ? "hidden" in q && (p = q.hidden) : (q = L.access(a, "fxshow", {})),
        f && (q.hidden = !p),
        p
          ? n(a).show()
          : l.done(function () {
              n(a).hide();
            }),
        l.done(function () {
          var b;
          L.remove(a, "fxshow");
          for (b in m) n.style(a, b, m[b]);
        });
      for (d in m)
        (g = Ub(p ? q[d] : 0, d, l)),
          d in q ||
            ((q[d] = g.start),
            p &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function Wb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]) && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function Xb(a, b, c) {
    var d,
      e,
      f = 0,
      g = Qb.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = Lb || Sb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Lb || Sb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing,
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    for (Wb(k, j.opts.specialEasing); g > f; f++)
      if ((d = Qb[f].call(j, a, k, j.opts))) return d;
    return (
      n.map(k, Ub, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  function rc(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c))
        for (; (d = f[e++]); )
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function sc(a, b, c, d) {
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    var e = {},
      f = a === oc;
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function tc(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a;
  }
  function uc(a, b, c) {
    for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function vc(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    for (f = k.shift(); f; )
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (!(g = j[i + " " + f] || j["* " + f]))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                !0 === g
                  ? (g = j[e])
                  : !0 !== j[e] && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (!0 !== g)
            if (g && a.throws) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  function Bc(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || xc.test(a)
          ? d(a, e)
          : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) Bc(a + "[" + e + "]", b[e], c, d);
  }
  function Kc(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = {},
    l = a.document,
    m = "2.1.1",
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype =
    {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function () {
        return d.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : d.call(this);
      },
      pushStack: function (a) {
        var b = n.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a, b) {
        return n.each(this, a, b);
      },
      map: function (a) {
        return this.pushStack(
          n.map(this, function (b, c) {
            return a.call(b, c, b);
          }),
        );
      },
      slice: function () {
        return this.pushStack(d.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: f,
      sort: c.sort,
      splice: c.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || n.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && n.isArray(c) ? c : []))
                        : (f = c && n.isPlainObject(c) ? c : {}),
                      (g[b] = n.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === n.type(a);
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        return !n.isArray(a) && a - parseFloat(a) >= 0;
      },
      isPlainObject: function (a) {
        return (
          "object" === n.type(a) &&
          !a.nodeType &&
          !n.isWindow(a) &&
          !(a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf"))
        );
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
            ? h[i.call(a)] || "object"
            : typeof a;
      },
      globalEval: function (a) {
        var b,
          c = eval;
        (a = n.trim(a)) &&
          (1 === a.indexOf("use strict")
            ? ((b = l.createElement("script")),
              (b.text = a),
              l.head.appendChild(b).parentNode.removeChild(b))
            : c(a));
      },
      camelCase: function (a) {
        return a.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b, c) {
        var e = 0,
          f = a.length,
          g = s(a);
        if (c) {
          if (g) for (; f > e && !1 !== b.apply(a[e], c); e++);
          else for (e in a) if (!1 === b.apply(a[e], c)) break;
        } else if (g) for (; f > e && !1 !== b.call(a[e], e, a[e]); e++);
        else for (e in a) if (!1 === b.call(a[e], e, a[e])) break;
        return a;
      },
      trim: function (a) {
        return null == a
          ? ""
          : (a + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, "string" == typeof a ? [a] : a)
              : f.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : g.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var e = [], f = 0, g = a.length, h = !c; g > f; f++)
          !b(a[f], f) !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          f = 0,
          g = a.length,
          h = s(a),
          i = [];
        if (h) for (; g > f; f++) null != (d = b(a[f], f, c)) && i.push(d);
        else for (f in a) null != (d = b(a[f], f, c)) && i.push(d);
        return e.apply([], i);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, e, f;
        return (
          "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          n.isFunction(a)
            ? ((e = d.call(arguments, 2)),
              (f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || n.guid++),
              f)
            : void 0
        );
      },
      now: Date.now,
      support: k,
    }),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " ",
      ),
      function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
      },
    );
  var t = (function (a) {
    function fb(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if (
        ((b ? b.ownerDocument || b : v) !== n && m(b),
        (b = b || n),
        (d = d || []),
        !a || "string" != typeof a)
      )
        return d;
      if (1 !== (k = b.nodeType) && 9 !== k) return [];
      if (p && !e) {
        if ((f = _.exec(a)))
          if ((j = f[1])) {
            if (9 === k) {
              if (!(h = b.getElementById(j)) || !h.parentNode) return d;
              if (h.id === j) return d.push(h), d;
            } else if (
              b.ownerDocument &&
              (h = b.ownerDocument.getElementById(j)) &&
              t(b, h) &&
              h.id === j
            )
              return d.push(h), d;
          } else {
            if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
            if (
              (j = f[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return I.apply(d, b.getElementsByClassName(j)), d;
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (
            ((s = r = u),
            (w = b),
            (x = 9 === k && a),
            1 === k && "object" !== b.nodeName.toLowerCase())
          ) {
            for (
              o = g(a),
                (r = b.getAttribute("id"))
                  ? (s = r.replace(bb, "\\$&"))
                  : b.setAttribute("id", s),
                s = "[id='" + s + "'] ",
                l = o.length;
              l--;

            )
              o[l] = s + qb(o[l]);
            (w = (ab.test(a) && ob(b.parentNode)) || b), (x = o.join(","));
          }
          if (x)
            try {
              return I.apply(d, w.querySelectorAll(x)), d;
            } catch (y) {
            } finally {
              r || b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(R, "$1"), b, d, e);
    }
    function gb() {
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      var a = [];
      return b;
    }
    function hb(a) {
      return (a[u] = !0), a;
    }
    function ib(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function jb(a, b) {
      for (var c = a.split("|"), e = a.length; e--; ) d.attrHandle[c[e]] = b;
    }
    function kb(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || D) - (~a.sourceIndex || D);
      if (d) return d;
      if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function nb(a) {
      return hb(function (b) {
        return (
          (b = +b),
          hb(function (c, d) {
            for (var e, f = a([], c.length, b), g = f.length; g--; )
              c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function ob(a) {
      return a && typeof a.getElementsByTagName !== C && a;
    }
    function pb() {}
    function qb(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function rb(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            for (; (b = b[d]); ) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j = [w, f];
            if (g) {
              for (; (b = b[d]); )
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              for (; (b = b[d]); )
                if (1 === b.nodeType || e) {
                  if (
                    ((i = b[u] || (b[u] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (j[2] = h[2]);
                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function sb(a) {
      return a.length > 1
        ? function (b, c, d) {
            for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function tb(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
      return c;
    }
    function ub(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function vb(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = vb(d)),
        e && !e[u] && (e = vb(e, f)),
        hb(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || tb(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : ub(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d))
            for (j = ub(r, n), d(j, [], h, i), k = j.length; k--; )
              (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          if (f) {
            if (e || a) {
              if (e) {
                for (j = [], k = r.length; k--; )
                  (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              for (k = r.length; k--; )
                (l = r[k]) &&
                  (j = e ? K.call(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else
            (r = ub(r === g ? r.splice(o, r.length) : r)),
              e ? e(null, g, r, i) : I.apply(g, r);
        })
      );
    }
    function wb(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = rb(
            function (a) {
              return a === b;
            },
            h,
            !0,
          ),
          l = rb(
            function (a) {
              return K.call(b, a) > -1;
            },
            h,
            !0,
          ),
          m = [
            function (a, c, d) {
              return (
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
              );
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [rb(sb(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e && !d.relative[a[e].type]; e++);
            return vb(
              i > 1 && sb(m),
              i > 1 &&
                qb(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" }),
                ).replace(R, "$1"),
              c,
              e > i && wb(a.slice(i, e)),
              f > e && wb((a = a.slice(e))),
              f > e && qb(a),
            );
          }
          m.push(c);
        }
      return sb(m);
    }
    function xb(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            m,
            o,
            p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = j,
            u = f || (e && d.find.TAG("*", k)),
            v = (w += null == t ? 1 : Math.random() || 0.1),
            x = u.length;
          for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
            if (e && l) {
              for (m = 0; (o = a[m++]); )
                if (o(l, g, h)) {
                  i.push(l);
                  break;
                }
              k && (w = v);
            }
            c && ((l = !o && l) && p--, f && r.push(l));
          }
          if (((p += q), c && q !== p)) {
            for (m = 0; (o = b[m++]); ) o(r, s, g, h);
            if (f) {
              if (p > 0) for (; q--; ) r[q] || s[q] || (s[q] = G.call(i));
              s = ub(s);
            }
            I.apply(i, s),
              k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i);
          }
          return k && ((w = v), (j = t)), r;
        };
      return c ? hb(f) : f;
    }
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + -new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = gb(),
      z = gb(),
      A = gb(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = "undefined",
      D = 1 << 31,
      E = {}.hasOwnProperty,
      F = [],
      G = F.pop,
      H = F.push,
      I = F.push,
      J = F.slice,
      K =
        F.indexOf ||
        function (a) {
          for (var b = 0, c = this.length; c > b; b++)
            if (this[b] === a) return b;
          return -1;
        },
      L =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      O = N.replace("w", "w#"),
      P =
        "\\[" +
        M +
        "*(" +
        N +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        O +
        "))|)" +
        M +
        "*\\]",
      Q =
        ":(" +
        N +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        P +
        ")*)|.*)\\)|)",
      R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      S = new RegExp("^" + M + "*," + M + "*"),
      T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
      V = new RegExp(Q),
      W = new RegExp("^" + O + "$"),
      X = {
        ID: new RegExp("^#(" + N + ")"),
        CLASS: new RegExp("^\\.(" + N + ")"),
        TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + P),
        PSEUDO: new RegExp("^" + Q),
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
        bool: new RegExp("^(?:" + L + ")$", "i"),
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
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      $ = /^[^{]+\{\s*\[native \w/,
      _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ab = /[+~]/,
      bb = /'|\\/g,
      cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      db = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
            ? String.fromCharCode(d + 65536)
            : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      };
    try {
      I.apply((F = J.call(v.childNodes)), v.childNodes),
        F[v.childNodes.length].nodeType;
    } catch (eb) {
      I = {
        apply: F.length
          ? function (a, b) {
              H.apply(a, J.call(b));
            }
          : function (a, b) {
              for (var c = a.length, d = 0; (a[c++] = b[d++]); );
              a.length = c - 1;
            },
      };
    }
    (c = fb.support = {}),
      (f = fb.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return !!b && "HTML" !== b.nodeName;
        }),
      (m = fb.setDocument =
        function (a) {
          var b,
            e = a ? a.ownerDocument || a : v,
            g = e.defaultView;
          return e !== n && 9 === e.nodeType && e.documentElement
            ? ((n = e),
              (o = e.documentElement),
              (p = !f(e)),
              g &&
                g !== g.top &&
                (g.addEventListener
                  ? g.addEventListener(
                      "unload",
                      function () {
                        m();
                      },
                      !1,
                    )
                  : g.attachEvent &&
                    g.attachEvent("onunload", function () {
                      m();
                    })),
              (c.attributes = ib(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ib(function (a) {
                return (
                  a.appendChild(e.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName =
                $.test(e.getElementsByClassName) &&
                ib(function (a) {
                  return (
                    (a.innerHTML =
                      "<div class='a'></div><div class='a i'></div>"),
                    (a.firstChild.className = "i"),
                    2 === a.getElementsByClassName("i").length
                  );
                })),
              (c.getById = ib(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !e.getElementsByName || !e.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if (typeof b.getElementById !== C && p) {
                      var c = b.getElementById(a);
                      return c && c.parentNode ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(cb, db);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(cb, db);
                    return function (a) {
                      var c =
                        typeof a.getAttributeNode !== C &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return typeof b.getElementsByTagName !== C
                      ? b.getElementsByTagName(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return typeof b.getElementsByClassName !== C && p
                    ? b.getElementsByClassName(a)
                    : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = $.test(e.querySelectorAll)) &&
                (ib(function (a) {
                  (a.innerHTML =
                    "<select msallowclip=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowclip^='']").length &&
                      q.push("[*^$]=" + M + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + M + "*(?:value|" + L + ")"),
                    a.querySelectorAll(":checked").length || q.push(":checked");
                }),
                ib(function (a) {
                  var b = e.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + M + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = $.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector),
              )) &&
                ib(function (a) {
                  (c.disconnectedMatch = s.call(a, "div")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", Q);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = $.test(o.compareDocumentPosition)),
              (t =
                b || $.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b)
                        for (; (b = b.parentNode); ) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return (
                      d ||
                      ((d =
                        (a.ownerDocument || a) === (b.ownerDocument || b)
                          ? a.compareDocumentPosition(b)
                          : 1),
                      1 & d ||
                      (!c.sortDetached && b.compareDocumentPosition(a) === d)
                        ? a === e || (a.ownerDocument === v && t(v, a))
                          ? -1
                          : b === e || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                              ? K.call(k, a) - K.call(k, b)
                              : 0
                        : 4 & d
                          ? -1
                          : 1)
                    );
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      f = a.parentNode,
                      g = b.parentNode,
                      h = [a],
                      i = [b];
                    if (!f || !g)
                      return a === e
                        ? -1
                        : b === e
                          ? 1
                          : f
                            ? -1
                            : g
                              ? 1
                              : k
                                ? K.call(k, a) - K.call(k, b)
                                : 0;
                    if (f === g) return kb(a, b);
                    for (c = a; (c = c.parentNode); ) h.unshift(c);
                    for (c = b; (c = c.parentNode); ) i.unshift(c);
                    for (; h[d] === i[d]; ) d++;
                    return d
                      ? kb(h[d], i[d])
                      : h[d] === v
                        ? -1
                        : i[d] === v
                          ? 1
                          : 0;
                  }),
              e)
            : n;
        }),
      (fb.matches = function (a, b) {
        return fb(a, null, null, b);
      }),
      (fb.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(U, "='$1']")),
          !(!c.matchesSelector || !p || (r && r.test(b)) || (q && q.test(b))))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return fb(b, n, null, [a]).length > 0;
      }),
      (fb.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (fb.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
            ? a.getAttribute(b)
            : (f = a.getAttributeNode(b)) && f.specified
              ? f.value
              : null;
      }),
      (fb.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (fb.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          for (; (b = a[f++]); ) b === a[f] && (e = d.push(f));
          for (; e--; ) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = fb.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else for (; (b = a[d++]); ) c += e(b);
          return c;
        }),
      (d = fb.selectors =
        {
          cacheLength: 50,
          createPseudo: hb,
          match: X,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(cb, db)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || fb.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && fb.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return X.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      V.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(cb, db).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        (typeof a.getAttribute !== C &&
                          a.getAttribute("class")) ||
                        "",
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = fb.attr(d, a);
                return null == e
                  ? "!=" === b
                  : !b ||
                      ((e += ""),
                      "=" === b
                        ? e === c
                        : "!=" === b
                          ? e !== c
                          : "^=" === b
                            ? c && 0 === e.indexOf(c)
                            : "*=" === b
                              ? c && e.indexOf(c) > -1
                              : "$=" === b
                                ? c && e.slice(-c.length) === c
                                : "~=" === b
                                  ? (" " + e + " ").indexOf(c) > -1
                                  : "|=" === b &&
                                    (e === c ||
                                      e.slice(0, c.length + 1) === c + "-"));
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h;
                    if (q) {
                      if (f) {
                        for (; p; ) {
                          for (l = b; (l = l[p]); )
                            if (
                              h
                                ? l.nodeName.toLowerCase() === r
                                : 1 === l.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        for (
                          k = q[u] || (q[u] = {}),
                            j = k[a] || [],
                            n = j[0] === w && j[1],
                            m = j[0] === w && j[2],
                            l = n && q.childNodes[n];
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop());

                        )
                          if (1 === l.nodeType && ++m && l === b) {
                            k[a] = [w, n, m];
                            break;
                          }
                      } else if (
                        s &&
                        (j = (b[u] || (b[u] = {}))[a]) &&
                        j[0] === w
                      )
                        m = j[1];
                      else
                        for (
                          ;
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop()) &&
                          ((h
                            ? l.nodeName.toLowerCase() !== r
                            : 1 !== l.nodeType) ||
                            !++m ||
                            (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                            l !== b));

                        );
                      return (m -= e) === d || (m % d == 0 && m / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  fb.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                  ? ((c = [a, a, "", b]),
                    d.setFilters.hasOwnProperty(a.toLowerCase())
                      ? hb(function (a, c) {
                          for (var d, f = e(a, b), g = f.length; g--; )
                            (d = K.call(a, f[g])), (a[d] = !(c[d] = f[g]));
                        })
                      : function (a) {
                          return e(a, 0, c);
                        })
                  : e;
            },
          },
          pseudos: {
            not: hb(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(R, "$1"));
              return d[u]
                ? hb(function (a, b, c, e) {
                    for (var f, g = d(a, null, e, []), h = a.length; h--; )
                      (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (b[0] = a), d(b, null, f, c), !c.pop();
                  };
            }),
            has: hb(function (a) {
              return function (b) {
                return fb(a, b).length > 0;
              };
            }),
            contains: hb(function (a) {
              return function (b) {
                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
              };
            }),
            lang: hb(function (a) {
              return (
                W.test(a || "") || fb.error("unsupported lang: " + a),
                (a = a.replace(cb, db).toLowerCase()),
                function (b) {
                  var c;
                  do {
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                      );
                  } while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return !1 === a.disabled;
            },
            disabled: function (a) {
              return !0 === a.disabled;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Z.test(a.nodeName);
            },
            input: function (a) {
              return Y.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: nb(function () {
              return [0];
            }),
            last: nb(function (a, b) {
              return [b - 1];
            }),
            eq: nb(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: nb(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: nb(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: nb(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: nb(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = (function (a) {
        return function (b) {
          return "input" === b.nodeName.toLowerCase() && b.type === a;
        };
      })(b);
    for (b in { submit: !0, reset: !0 })
      d.pseudos[b] = (function (a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a;
        };
      })(b);
    return (
      (pb.prototype = d.filters = d.pseudos),
      (d.setFilters = new pb()),
      (g = fb.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          for (h = a, i = [], j = d.preFilter; h; ) {
            (!c || (e = S.exec(h))) &&
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = T.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(R, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = X[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? fb.error(a) : z(a, i).slice(0);
        }),
      (h = fb.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            for (b || (b = g(a)), c = b.length; c--; )
              (f = wb(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, xb(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = fb.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (!(b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0]))
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            for (
              i = X.needsContext.test(a) ? 0 : j.length;
              i-- && ((k = j[i]), !d.relative[(l = k.type)]);

            )
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(cb, db),
                  (ab.test(j[0].type) && ob(b.parentNode)) || b,
                ))
              ) {
                if ((j.splice(i, 1), !(a = f.length && qb(j))))
                  return I.apply(e, f), e;
                break;
              }
          }
          return (
            (n || h(a, o))(f, b, !p, e, (ab.test(a) && ob(b.parentNode)) || b),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ib(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ib(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        jb("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ib(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        jb("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ib(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        jb(L, function (a, b, c) {
          var d;
          return c
            ? void 0
            : !0 === a[b]
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
                ? d.value
                : null;
        }),
      fb
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = n.expr.match.needsContext,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            }),
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = this.length,
          d = [],
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            }),
          );
        for (b = 0; c > b; b++) n.find(a, e[b], d);
        return (
          (d = this.pushStack(c > 1 ? n.unique(d) : d)),
          (d.selector = this.selector ? this.selector + " " + a : a),
          d
        );
      },
      filter: function (a) {
        return this.pushStack(x(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(x(this, a || [], !0));
      },
      is: function (a) {
        return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1)
          .length;
      },
    });
  var y,
    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((n.fn.init = function (a, b) {
    var c, d;
    if (!a) return this;
    if ("string" == typeof a) {
      if (
        !(c =
          "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
            ? [null, a, null]
            : z.exec(a)) ||
        (!c[1] && b)
      )
        return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
      if (c[1]) {
        if (
          ((b = b instanceof n ? b[0] : b),
          n.merge(
            this,
            n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0),
          ),
          v.test(c[1]) && n.isPlainObject(b))
        )
          for (c in b)
            n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        return this;
      }
      return (
        (d = l.getElementById(c[2])),
        d && d.parentNode && ((this.length = 1), (this[0] = d)),
        (this.context = l),
        (this.selector = a),
        this
      );
    }
    return a.nodeType
      ? ((this.context = this[0] = a), (this.length = 1), this)
      : n.isFunction(a)
        ? void 0 !== y.ready
          ? y.ready(a)
          : a(n)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          n.makeArray(a, this));
  }).prototype = n.fn),
    (y = n(l));
  var B = /^(?:parents|prev(?:Until|All))/,
    C = { children: !0, contents: !0, next: !0, prev: !0 };
  n.extend({
    dir: function (a, b, c) {
      for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
  }),
    n.fn.extend({
      has: function (a) {
        var b = n(a, this),
          c = b.length;
        return this.filter(function () {
          for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && n.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? n.unique(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? g.call(n(a), this[0])
            : g.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
      },
      add: function (a, b) {
        return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a),
        );
      },
    }),
    n.each(
      {
        parent: function (a) {
          var b = a.parentNode;
          return b && 11 !== b.nodeType ? b : null;
        },
        parents: function (a) {
          return n.dir(a, "parentNode");
        },
        parentsUntil: function (a, b, c) {
          return n.dir(a, "parentNode", c);
        },
        next: function (a) {
          return D(a, "nextSibling");
        },
        prev: function (a) {
          return D(a, "previousSibling");
        },
        nextAll: function (a) {
          return n.dir(a, "nextSibling");
        },
        prevAll: function (a) {
          return n.dir(a, "previousSibling");
        },
        nextUntil: function (a, b, c) {
          return n.dir(a, "nextSibling", c);
        },
        prevUntil: function (a, b, c) {
          return n.dir(a, "previousSibling", c);
        },
        siblings: function (a) {
          return n.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return n.sibling(a.firstChild);
        },
        contents: function (a) {
          return a.contentDocument || n.merge([], a.childNodes);
        },
      },
      function (a, b) {
        n.fn[a] = function (c, d) {
          var e = n.map(this, b, c);
          return (
            "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = n.filter(d, e)),
            this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()),
            this.pushStack(e)
          );
        };
      },
    );
  var E = /\S+/g,
    F = {};
  (n.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f,
      g,
      h = [],
      i = !a.once && [],
      j = function (l) {
        for (
          b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0;
          h && f > g;
          g++
        )
          if (!1 === h[g].apply(l[0], l[1]) && a.stopOnFalse) {
            b = !1;
            break;
          }
        (d = !1),
          h && (i ? i.length && j(i.shift()) : b ? (h = []) : k.disable());
      },
      k = {
        add: function () {
          if (h) {
            var c = h.length;
            !(function g(b) {
              n.each(b, function (b, c) {
                var d = n.type(c);
                "function" === d
                  ? (a.unique && k.has(c)) || h.push(c)
                  : c && c.length && "string" !== d && g(c);
              });
            })(arguments),
              d ? (f = h.length) : b && ((e = c), j(b));
          }
          return this;
        },
        remove: function () {
          return (
            h &&
              n.each(arguments, function (a, b) {
                for (var c; (c = n.inArray(b, h, c)) > -1; )
                  h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
              }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
        },
        empty: function () {
          return (h = []), (f = 0), this;
        },
        disable: function () {
          return (h = i = b = void 0), this;
        },
        disabled: function () {
          return !h;
        },
        lock: function () {
          return (i = void 0), b || k.disable(), this;
        },
        locked: function () {
          return !i;
        },
        fireWith: function (a, b) {
          return (
            !h ||
              (c && !i) ||
              ((b = b || []),
              (b = [a, b.slice ? b.slice() : b]),
              d ? i.push(b) : j(b)),
            this
          );
        },
        fire: function () {
          return k.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!c;
        },
      };
    return k;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .done(c.resolve)
                            .fail(c.reject)
                            .progress(c.notify)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments,
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock,
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var i,
          j,
          k,
          b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || (a && n.isFunction(a.promise)) ? e : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (e) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? d.call(arguments) : e),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          };
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(h(b, k, c))
                  .fail(g.reject)
                  .progress(h(b, j, i))
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var H;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (!0 === a ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (!0 !== a && --n.readyWait > 0) ||
            (H.resolveWith(l, [n]),
            n.fn.triggerHandler &&
              (n(l).triggerHandler("ready"), n(l).off("ready"))));
      },
    }),
    (n.ready.promise = function (b) {
      return (
        H ||
          ((H = n.Deferred()),
          "complete" === l.readyState
            ? setTimeout(n.ready)
            : (l.addEventListener("DOMContentLoaded", I, !1),
              a.addEventListener("load", I, !1))),
        H.promise(b)
      );
    }),
    n.ready.promise();
  var J = (n.access = function (a, b, c, d, e, f, g) {
    var h = 0,
      i = a.length,
      j = null == c;
    if ("object" === n.type(c)) {
      e = !0;
      for (h in c) n.access(a, b, h, c[h], !0, f, g);
    } else if (
      void 0 !== d &&
      ((e = !0),
      n.isFunction(d) || (g = !0),
      j &&
        (g
          ? (b.call(a, d), (b = null))
          : ((j = b),
            (b = function (a, b, c) {
              return j.call(n(a), c);
            }))),
      b)
    )
      for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  });
  (n.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  }),
    (K.uid = 1),
    (K.accepts = n.acceptData),
    (K.prototype = {
      key: function (a) {
        if (!K.accepts(a)) return 0;
        var b = {},
          c = a[this.expando];
        if (!c) {
          c = K.uid++;
          try {
            (b[this.expando] = { value: c }), Object.defineProperties(a, b);
          } catch (d) {
            (b[this.expando] = c), n.extend(a, b);
          }
        }
        return this.cache[c] || (this.cache[c] = {}), c;
      },
      set: function (a, b, c) {
        var d,
          e = this.key(a),
          f = this.cache[e];
        if ("string" == typeof b) f[b] = c;
        else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
        else for (d in b) f[d] = b[d];
        return f;
      },
      get: function (a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b];
      },
      access: function (a, b, c) {
        var d;
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? ((d = this.get(a, b)),
            void 0 !== d ? d : this.get(a, n.camelCase(b)))
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d,
          e,
          f = this.key(a),
          g = this.cache[f];
        if (void 0 === b) this.cache[f] = {};
        else {
          n.isArray(b)
            ? (d = b.concat(b.map(n.camelCase)))
            : ((e = n.camelCase(b)),
              b in g
                ? (d = [b, e])
                : ((d = e), (d = d in g ? [d] : d.match(E) || []))),
            (c = d.length);
          for (; c--; ) delete g[d[c]];
        }
      },
      hasData: function (a) {
        return !n.isEmptyObject(this.cache[a[this.expando]] || {});
      },
      discard: function (a) {
        a[this.expando] && delete this.cache[a[this.expando]];
      },
    });
  var L = new K(),
    M = new K(),
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  n.extend({
    hasData: function (a) {
      return M.hasData(a) || L.hasData(a);
    },
    data: function (a, b, c) {
      return M.access(a, b, c);
    },
    removeData: function (a, b) {
      M.remove(a, b);
    },
    _data: function (a, b, c) {
      return L.access(a, b, c);
    },
    _removeData: function (a, b) {
      L.remove(a, b);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = M.get(f)), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))
          ) {
            for (c = g.length; c--; )
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
            L.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              M.set(this, a);
            })
          : J(
              this,
              function (b) {
                var c,
                  d = n.camelCase(a);
                if (f && void 0 === b) {
                  if (void 0 !== (c = M.get(f, a))) return c;
                  if (void 0 !== (c = M.get(f, d))) return c;
                  if (void 0 !== (c = P(f, d, void 0))) return c;
                } else
                  this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b),
                      -1 !== a.indexOf("-") &&
                        void 0 !== c &&
                        M.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0,
            );
      },
      removeData: function (a) {
        return this.each(function () {
          M.remove(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = L.get(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = L.access(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          L.get(a, c) ||
          L.access(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              L.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
              ? this
              : this.each(function () {
                  var c = n.queue(this, a, b);
                  n._queueHooks(this, a),
                    "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
                })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        for (
          "string" != typeof a && ((b = a), (a = void 0)), a = a || "fx";
          g--;

        )
          (c = L.get(f[g], a + "queueHooks")) &&
            c.empty &&
            (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    R = ["Top", "Right", "Bottom", "Left"],
    S = function (a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    },
    T = /^(?:checkbox|radio)$/i;
  !(function () {
    var a = l.createDocumentFragment(),
      b = a.appendChild(l.createElement("div")),
      c = l.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var U = "undefined";
  k.focusinBubbles = "onfocusin" in a;
  var V = /^key/,
    W = /^(?:mouse|pointer|contextmenu)|click/,
    X = /^(?:focusinfocus|focusoutblur)$/,
    Y = /^([^.]*)(?:\.(.+)|)$/;
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = L.get(a);
      if (r)
        for (
          c.handler && ((f = c), (c = f.handler), (e = f.selector)),
            c.guid || (c.guid = n.guid++),
            (i = r.events) || (i = r.events = {}),
            (g = r.handle) ||
              (g = r.handle =
                function (b) {
                  return typeof n !== U && n.event.triggered !== b.type
                    ? n.event.dispatch.apply(a, arguments)
                    : void 0;
                }),
            b = (b || "").match(E) || [""],
            j = b.length;
          j--;

        )
          (h = Y.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o &&
              ((l = n.event.special[o] || {}),
              (o = (e ? l.delegateType : l.bindType) || o),
              (l = n.event.special[o] || {}),
              (k = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                f,
              )),
              (m = i[o]) ||
                ((m = i[o] = []),
                (m.delegateCount = 0),
                (l.setup && !1 !== l.setup.call(a, d, p, g)) ||
                  (a.addEventListener && a.addEventListener(o, g, !1))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (n.event.global[o] = !0));
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = L.hasData(a) && L.get(a);
      if (r && (i = r.events)) {
        for (b = (b || "").match(E) || [""], j = b.length; j--; )
          if (
            ((h = Y.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            for (
              l = n.event.special[o] || {},
                o = (d ? l.delegateType : l.bindType) || o,
                m = i[o] || [],
                h =
                  h[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                g = f = m.length;
              f--;

            )
              (k = m[f]),
                (!e && q !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && !1 !== l.teardown.call(a, p, r.handle)) ||
                n.removeEvent(a, o, r.handle),
              delete i[o]);
          } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
      }
    },
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        k,
        m,
        o,
        p = [d || l],
        q = j.call(b, "type") ? b.type : b,
        r = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((g = h = d = d || l),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !X.test(q + n.event.triggered) &&
          (q.indexOf(".") >= 0 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
          (k = q.indexOf(":") < 0 && "on" + q),
          (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = r.join(".")),
          (b.namespace_re = b.namespace
            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (o = n.event.special[q] || {}),
          e || !o.trigger || !1 !== o.trigger.apply(d, c)))
      ) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (
            i = o.delegateType || q, X.test(i + q) || (g = g.parentNode);
            g;
            g = g.parentNode
          )
            p.push(g), (h = g);
          h === (d.ownerDocument || l) &&
            p.push(h.defaultView || h.parentWindow || a);
        }
        for (f = 0; (g = p[f++]) && !b.isPropagationStopped(); )
          (b.type = f > 1 ? i : o.bindType || q),
            (m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle")),
            m && m.apply(g, c),
            (m = k && g[k]) &&
              m.apply &&
              n.acceptData(g) &&
              ((b.result = m.apply(g, c)),
              !1 === b.result && b.preventDefault());
        return (
          (b.type = q),
          e ||
            b.isDefaultPrevented() ||
            (o._default && !1 !== o._default.apply(p.pop(), c)) ||
            !n.acceptData(d) ||
            (k &&
              n.isFunction(d[q]) &&
              !n.isWindow(d) &&
              ((h = d[k]),
              h && (d[k] = null),
              (n.event.triggered = q),
              d[q](),
              (n.event.triggered = void 0),
              h && (d[k] = h))),
          b.result
        );
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        e,
        f,
        g,
        h = [],
        i = d.call(arguments),
        j = (L.get(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || !1 !== k.preDispatch.call(this, a))
      ) {
        for (
          h = n.event.handlers.call(this, a, j), b = 0;
          (f = h[b++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = f.elem, c = 0;
            (g = f.handlers[c++]) && !a.isImmediatePropagationStopped();

          )
            (!a.namespace_re || a.namespace_re.test(g.namespace)) &&
              ((a.handleObj = g),
              (a.data = g.data),
              void 0 !==
                (e = (
                  (n.event.special[g.origType] || {}).handle || g.handler
                ).apply(f.elem, i)) &&
                !1 === (a.result = e) &&
                (a.preventDefault(), a.stopPropagation()));
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i !== this; i = i.parentNode || this)
          if (!0 !== i.disabled || "click" !== a.type) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) >= 0
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " ",
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " ",
        ),
      filter: function (a, b) {
        var c,
          d,
          e,
          f = b.button;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((c = a.target.ownerDocument || l),
            (d = c.documentElement),
            (e = c.body),
            (a.pageX =
              b.clientX +
              ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
              ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
              ((d && d.clientTop) || (e && e.clientTop) || 0))),
          a.which ||
            void 0 === f ||
            (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        d,
        e = a.type,
        f = a,
        g = this.fixHooks[e];
      for (
        g ||
          (this.fixHooks[e] = g =
            W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}),
          d = g.props ? this.props.concat(g.props) : this.props,
          a = new n.Event(f),
          b = d.length;
        b--;

      )
        (c = d[b]), (a[c] = f[c]);
      return (
        a.target || (a.target = l),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        g.filter ? g.filter(a, f) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            n.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (n.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && !1 === a.returnValue)
                  ? Z
                  : $))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      isDefaultPrevented: $,
      isPropagationStopped: $,
      isImmediatePropagationStopped: $,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = Z),
          a && a.preventDefault && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = Z),
          a && a.stopPropagation && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = Z),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (!e || (e !== d && !n.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      },
    ),
    k.focusinBubbles ||
      n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = L.access(d, b);
            e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = L.access(d, b) - 1;
            e
              ? L.access(d, b, e)
              : (d.removeEventListener(a, c, !0), L.remove(d, b));
          },
        };
      }),
    n.fn.extend({
      on: function (a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && ((c = c || b), (b = void 0));
          for (g in a) this.on(g, b, c, a[g], e);
          return this;
        }
        if (
          (null == c && null == d
            ? ((d = b), (c = b = void 0))
            : null == d &&
              ("string" == typeof b
                ? ((d = c), (c = void 0))
                : ((d = c), (c = b), (b = void 0))),
          !1 === d)
        )
          d = $;
        else if (!d) return this;
        return (
          1 === e &&
            ((f = d),
            (d = function (a) {
              return n().off(a), f.apply(this, arguments);
            }),
            (d.guid = f.guid || (f.guid = n.guid++))),
          this.each(function () {
            n.event.add(this, a, d, c, b);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler,
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (!1 === b || "function" == typeof b) && ((c = b), (b = void 0)),
          !1 === c && (c = $),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    });
  var ab =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    bb = /<([\w:]+)/,
    cb = /<|&#?\w+;/,
    db = /<(?:script|style|link)/i,
    eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
    fb = /^$|\/(?:java|ecma)script/i,
    gb = /^true\/(.*)/,
    ib = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ib.optgroup = ib.option),
    (ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead),
    (ib.th = ib.td),
    n.extend({
      clone: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);
        if (
          !(
            k.noCloneChecked ||
            (1 !== a.nodeType && 11 !== a.nodeType) ||
            n.isXMLDoc(a)
          )
        )
          for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)
            pb(f[d], g[d]);
        if (b)
          if (c)
            for (
              f = f || ob(a), g = g || ob(h), d = 0, e = f.length;
              e > d;
              d++
            )
              nb(f[d], g[d]);
          else nb(a, h);
        return (
          (g = ob(h, "script")), g.length > 0 && mb(g, !i && ob(a, "script")), h
        );
      },
      buildFragment: function (a, b, c, d) {
        for (
          var e,
            f,
            g,
            h,
            i,
            j,
            k = b.createDocumentFragment(),
            l = [],
            m = 0,
            o = a.length;
          o > m;
          m++
        )
          if ((e = a[m]) || 0 === e)
            if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
            else if (cb.test(e)) {
              for (
                f = f || k.appendChild(b.createElement("div")),
                  g = (bb.exec(e) || ["", ""])[1].toLowerCase(),
                  h = ib[g] || ib._default,
                  f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2],
                  j = h[0];
                j--;

              )
                f = f.lastChild;
              n.merge(l, f.childNodes),
                (f = k.firstChild),
                (f.textContent = "");
            } else l.push(b.createTextNode(e));
        for (k.textContent = "", m = 0; (e = l[m++]); )
          if (
            (!d || -1 === n.inArray(e, d)) &&
            ((i = n.contains(e.ownerDocument, e)),
            (f = ob(k.appendChild(e), "script")),
            i && mb(f),
            c)
          )
            for (j = 0; (e = f[j++]); ) fb.test(e.type || "") && c.push(e);
        return k;
      },
      cleanData: function (a) {
        for (
          var b, c, d, e, f = n.event.special, g = 0;
          void 0 !== (c = a[g]);
          g++
        ) {
          if (n.acceptData(c) && (e = c[L.expando]) && (b = L.cache[e])) {
            if (b.events)
              for (d in b.events)
                f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            L.cache[e] && delete L.cache[e];
          }
          delete M.cache[c[M.expando]];
        }
      },
    }),
    n.fn.extend({
      text: function (a) {
        return J(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length,
        );
      },
      append: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            jb(this, a).appendChild(a);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = jb(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function (a, b) {
        for (
          var c, d = a ? n.filter(a, this) : this, e = 0;
          null != (c = d[e]);
          e++
        )
          b || 1 !== c.nodeType || n.cleanData(ob(c)),
            c.parentNode &&
              (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")),
              c.parentNode.removeChild(c));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (n.cleanData(ob(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null != a && a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return J(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !db.test(a) &&
              !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = a.replace(ab, "<$1></$2>");
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(ob(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length,
        );
      },
      replaceWith: function () {
        var a = arguments[0];
        return (
          this.domManip(arguments, function (b) {
            (a = this.parentNode),
              n.cleanData(ob(this)),
              a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, b) {
        a = e.apply([], a);
        var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          m = this,
          o = l - 1,
          p = a[0],
          q = n.isFunction(p);
        if (q || (l > 1 && "string" == typeof p && !k.checkClone && eb.test(p)))
          return this.each(function (c) {
            var d = m.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
          });
        if (
          l &&
          ((c = n.buildFragment(a, this[0].ownerDocument, !1, this)),
          (d = c.firstChild),
          1 === c.childNodes.length && (c = d),
          d)
        ) {
          for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++)
            (h = c),
              j !== o &&
                ((h = n.clone(h, !0, !0)), g && n.merge(f, ob(h, "script"))),
              b.call(this[j], h, j);
          if (g)
            for (
              i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0;
              g > j;
              j++
            )
              (h = f[j]),
                fb.test(h.type || "") &&
                  !L.access(h, "globalEval") &&
                  n.contains(i, h) &&
                  (h.src
                    ? n._evalUrl && n._evalUrl(h.src)
                    : n.globalEval(
                        h.textContent.replace(
                          /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                          "",
                        ),
                      ));
        }
        return this;
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
            (c = h === g ? this : this.clone(!0)),
              n(e[h])[b](c),
              f.apply(d, c.get());
          return this.pushStack(d);
        };
      },
    );
  var qb,
    rb = {},
    ub = /^margin/,
    vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
    wb = function (a) {
      return a.ownerDocument.defaultView.getComputedStyle(a, null);
    };
  !(function () {
    function g() {
      (f.style.cssText =
        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
        (f.innerHTML = ""),
        d.appendChild(e);
      var g = a.getComputedStyle(f, null);
      (b = "1%" !== g.top), (c = "4px" === g.width), d.removeChild(e);
    }
    var b,
      c,
      d = l.documentElement,
      e = l.createElement("div"),
      f = l.createElement("div");
    f.style &&
      ((f.style.backgroundClip = "content-box"),
      (f.cloneNode(!0).style.backgroundClip = ""),
      (k.clearCloneStyle = "content-box" === f.style.backgroundClip),
      (e.style.cssText =
        "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
      e.appendChild(f),
      a.getComputedStyle &&
        n.extend(k, {
          pixelPosition: function () {
            return g(), b;
          },
          boxSizingReliable: function () {
            return null == c && g(), c;
          },
          reliableMarginRight: function () {
            var b,
              c = f.appendChild(l.createElement("div"));
            return (
              (c.style.cssText = f.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (c.style.marginRight = c.style.width = "0"),
              (f.style.width = "1px"),
              d.appendChild(e),
              (b = !parseFloat(a.getComputedStyle(c, null).marginRight)),
              d.removeChild(e),
              b
            );
          },
        }));
  })(),
    (n.swap = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    });
  var zb = /^(none|table(?!-c[ea]).+)/,
    Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
    Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
    Cb = { position: "absolute", visibility: "hidden", display: "block" },
    Db = { letterSpacing: "0", fontWeight: "400" },
    Eb = ["Webkit", "O", "Moz", "ms"];
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = xb(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        return (
          (b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h))),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              "string" === f &&
                (e = Bb.exec(c)) &&
                ((c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b))),
                (f = "number")),
              void (
                null != c &&
                c === c &&
                ("number" !== f || n.cssNumber[h] || (c += "px"),
                k.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (i[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i[b] = c))
              ))
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h))),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = xb(a, b, d)),
        "normal" === e && b in Db && (e = Db[b]),
        "" === c || c
          ? ((f = parseFloat(e)), !0 === c || n.isNumeric(f) ? f || 0 : e)
          : e
      );
    },
  }),
    n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth
              ? n.swap(a, Cb, function () {
                  return Ib(a, b, d);
                })
              : Ib(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && wb(a);
          return Gb(
            a,
            c,
            d
              ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e)
              : 0,
          );
        },
      };
    }),
    (n.cssHooks.marginRight = yb(k.reliableMarginRight, function (a, b) {
      return b
        ? n.swap(a, { display: "inline-block" }, xb, [a, "marginRight"])
        : void 0;
    })),
    n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (n.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        ub.test(a) || (n.cssHooks[a + b].set = Gb);
    }),
    n.fn.extend({
      css: function (a, b) {
        return J(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = wb(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1,
        );
      },
      show: function () {
        return Jb(this, !0);
      },
      hide: function () {
        return Jb(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              S(this) ? n(this).show() : n(this).hide();
            });
      },
    }),
    (n.Tween = Kb),
    (Kb.prototype = {
      constructor: Kb,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = Kb.propHooks[this.prop];
        return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = Kb.propHooks[this.prop];
        return (
          (this.pos = b =
            this.options.duration
              ? n.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration,
                )
              : a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Kb.propHooks._default.set(this),
          this
        );
      },
    }),
    (Kb.prototype.init.prototype = Kb.prototype),
    (Kb.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] ||
            (a.elem.style && null != a.elem.style[a.prop])
            ? ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
            : a.elem[a.prop];
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : a.elem.style &&
                (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop])
              ? n.style(a.elem, a.prop, a.now + a.unit)
              : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (n.fx = Kb.prototype.init),
    (n.fx.step = {});
  var Lb,
    Mb,
    Nb = /^(?:toggle|show|hide)$/,
    Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
    Pb = /queueHooks$/,
    Qb = [Vb],
    Rb = {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = Ob.exec(b),
            f = (e && e[3]) || (n.cssNumber[a] ? "" : "px"),
            g =
              (n.cssNumber[a] || ("px" !== f && +d)) &&
              Ob.exec(n.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            (f = f || g[3]), (e = e || []), (g = +d || 1);
            do {
              (h = h || ".5"), (g /= h), n.style(c.elem, a, g + f);
            } while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return (
            e &&
              ((g = c.start = +g || +d || 0),
              (c.unit = f),
              (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
            c
          );
        },
      ],
    };
  (n.Animation = n.extend(Xb, {
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]), (Rb[c] = Rb[c] || []), Rb[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? Qb.unshift(a) : Qb.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
            ? d.duration
            : d.duration in n.fx.speeds
              ? n.fx.speeds[d.duration]
              : n.fx.speeds._default),
        (null == d.queue || !0 === d.queue) && (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(S)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = Xb(this, n.extend({}, a), f);
            (e || L.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && !1 !== a && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = L.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var b,
              c = L.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(Tb(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      },
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = 0,
        c = n.timers;
      for (Lb = n.now(); b < c.length; b++)
        (a = c[b])() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), (Lb = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      Mb || (Mb = setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      clearInterval(Mb), (Mb = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (a, b) {
      return (
        (a = n.fx ? n.fx.speeds[a] || a : a),
        (b = b || "fx"),
        this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        })
      );
    }),
    (function () {
      var a = l.createElement("input"),
        b = l.createElement("select"),
        c = b.appendChild(l.createElement("option"));
      (a.type = "checkbox"),
        (k.checkOn = "" !== a.value),
        (k.optSelected = c.selected),
        (b.disabled = !0),
        (k.optDisabled = !c.disabled),
        (a = l.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (k.radioValue = "t" === a.value);
    })();
  var Zb,
    $b = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return J(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === U
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (d =
                  n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : void 0))),
              void 0 === c
                ? d && "get" in d && null !== (e = d.get(a, b))
                  ? e
                  : ((e = n.find.attr(a, b)), null == e ? void 0 : e)
                : null !== c
                  ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                    ? e
                    : (a.setAttribute(b, c + ""), c)
                  : void n.removeAttr(a, b));
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(E);
        if (f && 1 === a.nodeType)
          for (; (c = f[e++]); )
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c) && (a[d] = !1),
              a.removeAttribute(c);
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
    }),
    (Zb = {
      set: function (a, b, c) {
        return !1 === b ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = $b[b] || n.find.attr;
      $b[b] = function (a, b, d) {
        var e, f;
        return (
          d ||
            ((f = $b[b]),
            ($b[b] = e),
            (e = null != c(a, b, d) ? b.toLowerCase() : null),
            ($b[b] = f)),
          e
        );
      };
    });
  var _b = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return J(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    },
  }),
    n.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (a, b, c) {
        var d,
          e,
          f,
          g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return (
            (f = 1 !== g || !n.isXMLDoc(a)),
            f && ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href
              ? a.tabIndex
              : -1;
          },
        },
      },
    }),
    k.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
      }),
    n.each(
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
        n.propFix[this.toLowerCase()] = this;
      },
    );
  var ac = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = "string" == typeof a && a,
        i = 0,
        j = this.length;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")))
          ) {
            for (f = 0; (e = b[f++]); )
              d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            (g = n.trim(d)), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0 === arguments.length || ("string" == typeof a && a),
        i = 0,
        j = this.length;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ac, " ") : "")))
          ) {
            for (f = 0; (e = b[f++]); )
              for (; d.indexOf(" " + e + " ") >= 0; )
                d = d.replace(" " + e + " ", " ");
            (g = a ? n.trim(d) : ""), c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : this.each(
            n.isFunction(a)
              ? function (c) {
                  n(this).toggleClass(a.call(this, c, this.className, b), b);
                }
              : function () {
                  if ("string" === c)
                    for (
                      var b, d = 0, e = n(this), f = a.match(E) || [];
                      (b = f[d++]);

                    )
                      e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                  else
                    (c === U || "boolean" === c) &&
                      (this.className &&
                        L.set(this, "__className__", this.className),
                      (this.className =
                        this.className || !1 === a
                          ? ""
                          : L.get(this, "__className__") || ""));
                },
          );
    },
    hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (
          1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
  });
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      return arguments.length
        ? ((d = n.isFunction(a)),
          this.each(function (c) {
            var e;
            1 === this.nodeType &&
              ((e = d ? a.call(this, c, n(this).val()) : a),
              null == e
                ? (e = "")
                : "number" == typeof e
                  ? (e += "")
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
              ((b =
                n.valHooks[this.type] ||
                n.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in b &&
                void 0 !== b.set(this, e, "value")) ||
                (this.value = e));
          }))
        : e
          ? ((b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c
                  ? c.replace(/\r/g, "")
                  : null == c
                    ? ""
                    : c))
          : void 0;
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a));
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                !(
                  (!c.selected && i !== e) ||
                  (k.optDisabled
                    ? c.disabled
                    : null !== c.getAttribute("disabled")) ||
                  (c.parentNode.disabled &&
                    n.nodeName(c.parentNode, "optgroup"))
                ))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            for (
              var c, d, e = a.options, f = n.makeArray(b), g = e.length;
              g--;

            )
              (d = e[g]), (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) >= 0)
            : void 0;
        },
      }),
        k.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " ",
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      },
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    });
  var cc = n.now(),
    dc = /\?/;
  (n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }),
    (n.parseXML = function (a) {
      var b, c;
      if (!a || "string" != typeof a) return null;
      try {
        (c = new DOMParser()), (b = c.parseFromString(a, "text/xml"));
      } catch (d) {
        b = void 0;
      }
      return (
        (!b || b.getElementsByTagName("parsererror").length) &&
          n.error("Invalid XML: " + a),
        b
      );
    });
  var ec,
    fc,
    hc = /([?&])_=[^&]*/,
    ic = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    kc = /^(?:GET|HEAD)$/,
    mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    nc = {},
    oc = {},
    pc = "*/".concat("*");
  try {
    fc = location.href;
  } catch (qc) {
    (fc = l.createElement("a")), (fc.href = ""), (fc = fc.href);
  }
  (ec = mc.exec(fc.toLowerCase()) || []),
    n.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: fc,
        type: "GET",
        isLocal: jc.test(ec[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": pc,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": n.parseJSON,
          "text xml": n.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (a, b) {
        return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a);
      },
      ajaxPrefilter: rc(nc),
      ajaxTransport: rc(oc),
      ajax: function (a, b) {
        function x(a, b, f, h) {
          var j,
            r,
            s,
            u,
            w,
            x = b;
          2 !== t &&
            ((t = 2),
            g && clearTimeout(g),
            (c = void 0),
            (e = h || ""),
            (v.readyState = a > 0 ? 4 : 0),
            (j = (a >= 200 && 300 > a) || 304 === a),
            f && (u = uc(k, v, f)),
            (u = vc(k, u, v, j)),
            j
              ? (k.ifModified &&
                  ((w = v.getResponseHeader("Last-Modified")),
                  w && (n.lastModified[d] = w),
                  (w = v.getResponseHeader("etag")) && (n.etag[d] = w)),
                204 === a || "HEAD" === k.type
                  ? (x = "nocontent")
                  : 304 === a
                    ? (x = "notmodified")
                    : ((x = u.loadingState),
                      (r = u.data),
                      (s = u.error),
                      (j = !s)))
              : ((s = x), (a || !x) && ((x = "error"), 0 > a && (a = 0))),
            (v.status = a),
            (v.statusText = (b || x) + ""),
            j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
            v.statusCode(q),
            (q = void 0),
            i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
            p.fireWith(l, [v, x]),
            i &&
              (m.trigger("ajaxComplete", [v, k]),
              --n.active || n.event.trigger("ajaxStop")));
        }
        "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
        var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.ajaxSetup({}, b),
          l = k.context || k,
          m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
          o = n.Deferred(),
          p = n.Callbacks("once memory"),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = {
            readyState: 0,
            getResponseHeader: function (a) {
              var b;
              if (2 === t) {
                if (!f)
                  for (f = {}; (b = ic.exec(e)); ) f[b[1].toLowerCase()] = b[2];
                b = f[a.toLowerCase()];
              }
              return null == b ? null : b;
            },
            getAllResponseHeaders: function () {
              return 2 === t ? e : null;
            },
            setRequestHeader: function (a, b) {
              var c = a.toLowerCase();
              return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
            },
            overrideMimeType: function (a) {
              return t || (k.mimeType = a), this;
            },
            statusCode: function (a) {
              var b;
              if (a)
                if (2 > t) for (b in a) q[b] = [q[b], a[b]];
                else v.always(a[v.status]);
              return this;
            },
            abort: function (a) {
              var b = a || u;
              return c && c.abort(b), x(0, b), this;
            },
          };
        if (
          ((o.promise(v).complete = p.add),
          (v.success = v.done),
          (v.error = v.fail),
          (k.url = ((a || k.url || fc) + "")
            .replace(/#.*$/, "")
            .replace(/^\/\//, ec[1] + "//")),
          (k.type = b.method || b.type || k.method || k.type),
          (k.dataTypes = n
            .trim(k.dataType || "*")
            .toLowerCase()
            .match(E) || [""]),
          null == k.crossDomain &&
            ((h = mc.exec(k.url.toLowerCase())),
            (k.crossDomain = !(
              !h ||
              (h[1] === ec[1] &&
                h[2] === ec[2] &&
                (h[3] || ("http:" === h[1] ? "80" : "443")) ===
                  (ec[3] || ("http:" === ec[1] ? "80" : "443")))
            ))),
          k.data &&
            k.processData &&
            "string" != typeof k.data &&
            (k.data = n.param(k.data, k.traditional)),
          sc(nc, k, b, v),
          2 === t)
        )
          return v;
        (i = k.global),
          i && 0 == n.active++ && n.event.trigger("ajaxStart"),
          (k.type = k.type.toUpperCase()),
          (k.hasContent = !kc.test(k.type)),
          (d = k.url),
          k.hasContent ||
            (k.data &&
              ((d = k.url += (dc.test(d) ? "&" : "?") + k.data), delete k.data),
            !1 === k.cache &&
              (k.url = hc.test(d)
                ? d.replace(hc, "$1_=" + cc++)
                : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)),
          k.ifModified &&
            (n.lastModified[d] &&
              v.setRequestHeader("If-Modified-Since", n.lastModified[d]),
            n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])),
          ((k.data && k.hasContent && !1 !== k.contentType) || b.contentType) &&
            v.setRequestHeader("Content-Type", k.contentType),
          v.setRequestHeader(
            "Accept",
            k.dataTypes[0] && k.accepts[k.dataTypes[0]]
              ? k.accepts[k.dataTypes[0]] +
                  ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "")
              : k.accepts["*"],
          );
        for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
        if (k.beforeSend && (!1 === k.beforeSend.call(l, v, k) || 2 === t))
          return v.abort();
        u = "abort";
        for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);
        if ((c = sc(oc, k, b, v))) {
          (v.readyState = 1),
            i && m.trigger("ajaxSend", [v, k]),
            k.async &&
              k.timeout > 0 &&
              (g = setTimeout(function () {
                v.abort("timeout");
              }, k.timeout));
          try {
            (t = 1), c.send(r, x);
          } catch (w) {
            if (!(2 > t)) throw w;
            x(-1, w);
          }
        } else x(-1, "No Transport");
        return v;
      },
      getJSON: function (a, b, c) {
        return n.get(a, b, c, "json");
      },
      getScript: function (a, b) {
        return n.get(a, void 0, b, "script");
      },
    }),
    n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax({ url: a, type: b, dataType: e, data: c, success: d })
        );
      };
    }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      },
    ),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        var b;
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapAll(a.call(this, b));
            })
          : (this[0] &&
              ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this);
      },
      wrapInner: function (a) {
        return this.each(
          n.isFunction(a)
            ? function (b) {
                n(this).wrapInner(a.call(this, b));
              }
            : function () {
                var b = n(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              },
        );
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (n.expr.filters.hidden = function (a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }),
    (n.expr.filters.visible = function (a) {
      return !n.expr.filters.hidden(a);
    });
  var xc = /\[\]$/,
    zc = /^(?:submit|button|image|reset|file)$/i,
    Ac = /^(?:input|select|textarea|keygen)/i;
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Bc(c, a[c], b, e);
    return d.join("&").replace(/%20/g, "+");
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              Ac.test(this.nodeName) &&
              !zc.test(a) &&
              (this.checked || !T.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
                ? n.map(c, function (a) {
                    return { name: b.name, value: a.replace(/\r?\n/g, "\r\n") };
                  })
                : { name: b.name, value: c.replace(/\r?\n/g, "\r\n") };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (a) {}
    });
  var Cc = 0,
    Dc = {},
    Ec = { 0: 200, 1223: 204 },
    Fc = n.ajaxSettings.xhr();
  a.ActiveXObject &&
    n(a).on("unload", function () {
      for (var a in Dc) Dc[a]();
    }),
    (k.cors = !!Fc && "withCredentials" in Fc),
    (k.ajax = Fc = !!Fc),
    n.ajaxTransport(function (a) {
      var b;
      return k.cors || (Fc && !a.crossDomain)
        ? {
            send: function (c, d) {
              var e,
                f = a.xhr(),
                g = ++Cc;
              if (
                (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (e in a.xhrFields) f[e] = a.xhrFields[e];
              a.mimeType &&
                f.overrideMimeType &&
                f.overrideMimeType(a.mimeType),
                a.crossDomain ||
                  c["X-Requested-With"] ||
                  (c["X-Requested-With"] = "XMLHttpRequest");
              for (e in c) f.setRequestHeader(e, c[e]);
              (b = function (a) {
                return function () {
                  b &&
                    (delete Dc[g],
                    (b = f.onload = f.onerror = null),
                    "abort" === a
                      ? f.abort()
                      : "error" === a
                        ? d(f.status, f.statusText)
                        : d(
                            Ec[f.status] || f.status,
                            f.statusText,
                            "string" == typeof f.responseText
                              ? { text: f.responseText }
                              : void 0,
                            f.getAllResponseHeaders(),
                          ));
                };
              }),
                (f.onload = b()),
                (f.onerror = b("error")),
                (b = Dc[g] = b("abort"));
              try {
                f.send((a.hasContent && a.data) || null);
              } catch (h) {
                if (b) throw h;
              }
            },
            abort: function () {
              b && b();
            },
          }
        : void 0;
    }),
    n.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (a) {
          return n.globalEval(a), a;
        },
      },
    }),
    n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (d, e) {
            (b = n("<script>")
              .prop({ async: !0, charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && e("error" === a.type ? 404 : 200, a.type);
                }),
              )),
              l.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Gc = [],
    Hc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Gc.pop() || n.expando + "_" + cc++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          !1 !== b.jsonp &&
          (Hc.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              !(b.contentType || "").indexOf(
                "application/x-www-form-urlencoded",
              ) &&
              Hc.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            n.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Hc, "$1" + e))
            : !1 !== b.jsonp &&
              (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Gc.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || l);
      var d = v.exec(a),
        e = !c && [];
      return d
        ? [b.createElement(d[1])]
        : ((d = n.buildFragment([a], b, e)),
          e && e.length && n(e).remove(),
          n.merge([], d.childNodes));
    });
  var Ic = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Ic) return Ic.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h >= 0 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e, dataType: "html", data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
          })
          .complete(
            c &&
              function (a, b) {
                g.each(c, f || [a.responseText, b, a]);
              },
          ),
      this
    );
  }),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  var Jc = a.document.documentElement;
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, h)),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;
        return f
          ? ((b = f.documentElement),
            n.contains(b, d)
              ? (typeof d.getBoundingClientRect !== U &&
                  (e = d.getBoundingClientRect()),
                (c = Kc(f)),
                {
                  top: e.top + c.pageYOffset - b.clientTop,
                  left: e.left + c.pageXOffset - b.clientLeft,
                })
              : e)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === n.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (d = a.offset()),
                (d.top += n.css(a[0], "borderTopWidth", !0)),
                (d.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - d.top - n.css(c, "marginTop", !0),
              left: b.left - d.left - n.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var a = this.offsetParent || Jc;
            a && !n.nodeName(a, "html") && "static" === n.css(a, "position");

          )
            a = a.offsetParent;
          return a || Jc;
        });
      },
    }),
    n.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
          return J(
            this,
            function (b, e, f) {
              var g = Kc(b);
              return void 0 === f
                ? g
                  ? g[c]
                  : b[e]
                : void (g
                    ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset)
                    : (b[e] = f));
            },
            b,
            e,
            arguments.length,
            null,
          );
        };
      },
    ),
    n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = yb(k.pixelPosition, function (a, c) {
        return c
          ? ((c = xb(a, b)), vb.test(c) ? n(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function (a, b) {
      n.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          n.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (!0 === d || !0 === e ? "margin" : "border");
            return J(
              this,
              function (b, c, d) {
                var e;
                return n.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                    ? ((e = b.documentElement),
                      Math.max(
                        b.body["scroll" + a],
                        e["scroll" + a],
                        b.body["offset" + a],
                        e["offset" + a],
                        e["client" + a],
                      ))
                    : void 0 === d
                      ? n.css(b, c, g)
                      : n.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null,
            );
          };
        },
      );
    }),
    (n.fn.size = function () {
      return this.length;
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return n;
      });
  var Lc = a.jQuery,
    Mc = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n;
    }),
    typeof b === U && (a.jQuery = a.$ = n),
    n
  );
}),
  function () {
    var n = this,
      t = n._,
      r = {},
      e = Array.prototype,
      u = Object.prototype,
      i = Function.prototype,
      a = e.push,
      o = e.slice,
      c = e.concat,
      l = u.toString,
      f = u.hasOwnProperty,
      s = e.forEach,
      p = e.map,
      h = e.reduce,
      v = e.reduceRight,
      g = e.filter,
      d = e.every,
      m = e.some,
      y = e.indexOf,
      b = e.lastIndexOf,
      x = Array.isArray,
      w = Object.keys,
      _ = i.bind,
      j = function (n) {
        return n instanceof j
          ? n
          : this instanceof j
            ? void (this._wrapped = n)
            : new j(n);
      };
    "undefined" != typeof exports
      ? ("undefined" != typeof module &&
          module.exports &&
          (exports = module.exports = j),
        (exports._ = j))
      : (n._ = j),
      (j.VERSION = "1.6.0");
    var A =
      (j.each =
      j.forEach =
        function (n, t, e) {
          if (null == n) return n;
          if (s && n.forEach === s) n.forEach(t, e);
          else if (n.length === +n.length) {
            for (var u = 0, i = n.length; i > u; u++)
              if (t.call(e, n[u], u, n) === r) return;
          } else
            for (var a = j.keys(n), u = 0, i = a.length; i > u; u++)
              if (t.call(e, n[a[u]], a[u], n) === r) return;
          return n;
        });
    j.map = j.collect = function (n, t, r) {
      var e = [];
      return null == n
        ? e
        : p && n.map === p
          ? n.map(t, r)
          : (A(n, function (n, u, i) {
              e.push(t.call(r, n, u, i));
            }),
            e);
    };
    var O = "Reduce of empty array with no initial value";
    (j.reduce =
      j.foldl =
      j.inject =
        function (n, t, r, e) {
          var u = arguments.length > 2;
          if ((null == n && (n = []), h && n.reduce === h))
            return e && (t = j.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
          if (
            (A(n, function (n, i, a) {
              u ? (r = t.call(e, r, n, i, a)) : ((r = n), (u = !0));
            }),
            !u)
          )
            throw new TypeError(O);
          return r;
        }),
      (j.reduceRight = j.foldr =
        function (n, t, r, e) {
          var u = arguments.length > 2;
          if ((null == n && (n = []), v && n.reduceRight === v))
            return (
              e && (t = j.bind(t, e)),
              u ? n.reduceRight(t, r) : n.reduceRight(t)
            );
          var i = n.length;
          if (i !== +i) {
            var a = j.keys(n);
            i = a.length;
          }
          if (
            (A(n, function (o, c, l) {
              (c = a ? a[--i] : --i),
                u ? (r = t.call(e, r, n[c], c, l)) : ((r = n[c]), (u = !0));
            }),
            !u)
          )
            throw new TypeError(O);
          return r;
        }),
      (j.find = j.detect =
        function (n, t, r) {
          var e;
          return (
            k(n, function (n, u, i) {
              return t.call(r, n, u, i) ? ((e = n), !0) : void 0;
            }),
            e
          );
        }),
      (j.filter = j.select =
        function (n, t, r) {
          var e = [];
          return null == n
            ? e
            : g && n.filter === g
              ? n.filter(t, r)
              : (A(n, function (n, u, i) {
                  t.call(r, n, u, i) && e.push(n);
                }),
                e);
        }),
      (j.reject = function (n, t, r) {
        return j.filter(
          n,
          function (n, e, u) {
            return !t.call(r, n, e, u);
          },
          r,
        );
      }),
      (j.every = j.all =
        function (n, t, e) {
          t || (t = j.identity);
          var u = !0;
          return null == n
            ? u
            : d && n.every === d
              ? n.every(t, e)
              : (A(n, function (n, i, a) {
                  return (u = u && t.call(e, n, i, a)) ? void 0 : r;
                }),
                !!u);
        });
    var k =
      (j.some =
      j.any =
        function (n, t, e) {
          t || (t = j.identity);
          var u = !1;
          return null == n
            ? u
            : m && n.some === m
              ? n.some(t, e)
              : (A(n, function (n, i, a) {
                  return u || (u = t.call(e, n, i, a)) ? r : void 0;
                }),
                !!u);
        });
    (j.contains = j.include =
      function (n, t) {
        return (
          null != n &&
          (y && n.indexOf === y
            ? -1 != n.indexOf(t)
            : k(n, function (n) {
                return n === t;
              }))
        );
      }),
      (j.invoke = function (n, t) {
        var r = o.call(arguments, 2),
          e = j.isFunction(t);
        return j.map(n, function (n) {
          return (e ? t : n[t]).apply(n, r);
        });
      }),
      (j.pluck = function (n, t) {
        return j.map(n, j.property(t));
      }),
      (j.where = function (n, t) {
        return j.filter(n, j.matches(t));
      }),
      (j.findWhere = function (n, t) {
        return j.find(n, j.matches(t));
      }),
      (j.max = function (n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535)
          return Math.max.apply(Math, n);
        var e = -1 / 0,
          u = -1 / 0;
        return (
          A(n, function (n, i, a) {
            var o = t ? t.call(r, n, i, a) : n;
            o > u && ((e = n), (u = o));
          }),
          e
        );
      }),
      (j.min = function (n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535)
          return Math.min.apply(Math, n);
        var e = 1 / 0,
          u = 1 / 0;
        return (
          A(n, function (n, i, a) {
            var o = t ? t.call(r, n, i, a) : n;
            u > o && ((e = n), (u = o));
          }),
          e
        );
      }),
      (j.shuffle = function (n) {
        var t,
          r = 0,
          e = [];
        return (
          A(n, function (n) {
            (t = j.random(r++)), (e[r - 1] = e[t]), (e[t] = n);
          }),
          e
        );
      }),
      (j.sample = function (n, t, r) {
        return null == t || r
          ? (n.length !== +n.length && (n = j.values(n)),
            n[j.random(n.length - 1)])
          : j.shuffle(n).slice(0, Math.max(0, t));
      });
    var E = function (n) {
      return null == n ? j.identity : j.isFunction(n) ? n : j.property(n);
    };
    j.sortBy = function (n, t, r) {
      return (
        (t = E(t)),
        j.pluck(
          j
            .map(n, function (n, e, u) {
              return { value: n, index: e, criteria: t.call(r, n, e, u) };
            })
            .sort(function (n, t) {
              var r = n.criteria,
                e = t.criteria;
              if (r !== e) {
                if (r > e || void 0 === r) return 1;
                if (e > r || void 0 === e) return -1;
              }
              return n.index - t.index;
            }),
          "value",
        )
      );
    };
    var F = function (n) {
      return function (t, r, e) {
        var u = {};
        return (
          (r = E(r)),
          A(t, function (i, a) {
            var o = r.call(e, i, a, t);
            n(u, o, i);
          }),
          u
        );
      };
    };
    (j.groupBy = F(function (n, t, r) {
      j.has(n, t) ? n[t].push(r) : (n[t] = [r]);
    })),
      (j.indexBy = F(function (n, t, r) {
        n[t] = r;
      })),
      (j.countBy = F(function (n, t) {
        j.has(n, t) ? n[t]++ : (n[t] = 1);
      })),
      (j.sortedIndex = function (n, t, r, e) {
        r = E(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i; ) {
          var o = (i + a) >>> 1;
          r.call(e, n[o]) < u ? (i = o + 1) : (a = o);
        }
        return i;
      }),
      (j.toArray = function (n) {
        return n
          ? j.isArray(n)
            ? o.call(n)
            : n.length === +n.length
              ? j.map(n, j.identity)
              : j.values(n)
          : [];
      }),
      (j.size = function (n) {
        return null == n
          ? 0
          : n.length === +n.length
            ? n.length
            : j.keys(n).length;
      }),
      (j.first =
        j.head =
        j.take =
          function (n, t, r) {
            return null == n
              ? void 0
              : null == t || r
                ? n[0]
                : 0 > t
                  ? []
                  : o.call(n, 0, t);
          }),
      (j.initial = function (n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t));
      }),
      (j.last = function (n, t, r) {
        return null == n
          ? void 0
          : null == t || r
            ? n[n.length - 1]
            : o.call(n, Math.max(n.length - t, 0));
      }),
      (j.rest =
        j.tail =
        j.drop =
          function (n, t, r) {
            return o.call(n, null == t || r ? 1 : t);
          }),
      (j.compact = function (n) {
        return j.filter(n, j.identity);
      });
    var M = function (n, t, r) {
      return t && j.every(n, j.isArray)
        ? c.apply(r, n)
        : (A(n, function (n) {
            j.isArray(n) || j.isArguments(n)
              ? t
                ? a.apply(r, n)
                : M(n, t, r)
              : r.push(n);
          }),
          r);
    };
    (j.flatten = function (n, t) {
      return M(n, t, []);
    }),
      (j.without = function (n) {
        return j.difference(n, o.call(arguments, 1));
      }),
      (j.partition = function (n, t) {
        var r = [],
          e = [];
        return (
          A(n, function (n) {
            (t(n) ? r : e).push(n);
          }),
          [r, e]
        );
      }),
      (j.uniq = j.unique =
        function (n, t, r, e) {
          j.isFunction(t) && ((e = r), (r = t), (t = !1));
          var u = r ? j.map(n, r, e) : n,
            i = [],
            a = [];
          return (
            A(u, function (r, e) {
              (t ? e && a[a.length - 1] === r : j.contains(a, r)) ||
                (a.push(r), i.push(n[e]));
            }),
            i
          );
        }),
      (j.union = function () {
        return j.uniq(j.flatten(arguments, !0));
      }),
      (j.intersection = function (n) {
        var t = o.call(arguments, 1);
        return j.filter(j.uniq(n), function (n) {
          return j.every(t, function (t) {
            return j.contains(t, n);
          });
        });
      }),
      (j.difference = function (n) {
        var t = c.apply(e, o.call(arguments, 1));
        return j.filter(n, function (n) {
          return !j.contains(t, n);
        });
      }),
      (j.zip = function () {
        for (
          var n = j.max(j.pluck(arguments, "length").concat(0)),
            t = new Array(n),
            r = 0;
          n > r;
          r++
        )
          t[r] = j.pluck(arguments, "" + r);
        return t;
      }),
      (j.object = function (n, t) {
        if (null == n) return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++)
          t ? (r[n[e]] = t[e]) : (r[n[e][0]] = n[e][1]);
        return r;
      }),
      (j.indexOf = function (n, t, r) {
        if (null == n) return -1;
        var e = 0,
          u = n.length;
        if (r) {
          if ("number" != typeof r)
            return (e = j.sortedIndex(n, t)), n[e] === t ? e : -1;
          e = 0 > r ? Math.max(0, u + r) : r;
        }
        if (y && n.indexOf === y) return n.indexOf(t, r);
        for (; u > e; e++) if (n[e] === t) return e;
        return -1;
      }),
      (j.lastIndexOf = function (n, t, r) {
        if (null == n) return -1;
        var e = null != r;
        if (b && n.lastIndexOf === b)
          return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--; ) if (n[u] === t) return u;
        return -1;
      }),
      (j.range = function (n, t, r) {
        arguments.length <= 1 && ((t = n || 0), (n = 0)),
          (r = arguments[2] || 1);
        for (
          var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e);
          e > u;

        )
          (i[u++] = n), (n += r);
        return i;
      });
    var R = function () {};
    (j.bind = function (n, t) {
      var r, e;
      if (_ && n.bind === _) return _.apply(n, o.call(arguments, 1));
      if (!j.isFunction(n)) throw new TypeError();
      return (
        (r = o.call(arguments, 2)),
        (e = function () {
          if (!(this instanceof e))
            return n.apply(t, r.concat(o.call(arguments)));
          R.prototype = n.prototype;
          var u = new R();
          R.prototype = null;
          var i = n.apply(u, r.concat(o.call(arguments)));
          return Object(i) === i ? i : u;
        })
      );
    }),
      (j.partial = function (n) {
        var t = o.call(arguments, 1);
        return function () {
          for (var r = 0, e = t.slice(), u = 0, i = e.length; i > u; u++)
            e[u] === j && (e[u] = arguments[r++]);
          for (; r < arguments.length; ) e.push(arguments[r++]);
          return n.apply(this, e);
        };
      }),
      (j.bindAll = function (n) {
        var t = o.call(arguments, 1);
        if (0 === t.length)
          throw new Error("bindAll must be passed function names");
        return (
          A(t, function (t) {
            n[t] = j.bind(n[t], n);
          }),
          n
        );
      }),
      (j.memoize = function (n, t) {
        var r = {};
        return (
          t || (t = j.identity),
          function () {
            var e = t.apply(this, arguments);
            return j.has(r, e) ? r[e] : (r[e] = n.apply(this, arguments));
          }
        );
      }),
      (j.delay = function (n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function () {
          return n.apply(null, r);
        }, t);
      }),
      (j.defer = function (n) {
        return j.delay.apply(j, [n, 1].concat(o.call(arguments, 1)));
      }),
      (j.throttle = function (n, t, r) {
        var e,
          u,
          i,
          a = null,
          o = 0;
        r || (r = {});
        var c = function () {
          (o = !1 === r.leading ? 0 : j.now()),
            (a = null),
            (i = n.apply(e, u)),
            (e = u = null);
        };
        return function () {
          var l = j.now();
          o || !1 !== r.leading || (o = l);
          var f = t - (l - o);
          return (
            (e = this),
            (u = arguments),
            0 >= f
              ? (clearTimeout(a),
                (a = null),
                (o = l),
                (i = n.apply(e, u)),
                (e = u = null))
              : a || !1 === r.trailing || (a = setTimeout(c, f)),
            i
          );
        };
      }),
      (j.debounce = function (n, t, r) {
        var e,
          u,
          i,
          a,
          o,
          c = function () {
            var l = j.now() - a;
            t > l
              ? (e = setTimeout(c, t - l))
              : ((e = null), r || ((o = n.apply(i, u)), (i = u = null)));
          };
        return function () {
          (i = this), (u = arguments), (a = j.now());
          var l = r && !e;
          return (
            e || (e = setTimeout(c, t)),
            l && ((o = n.apply(i, u)), (i = u = null)),
            o
          );
        };
      }),
      (j.once = function (n) {
        var t,
          r = !1;
        return function () {
          return r
            ? t
            : ((r = !0), (t = n.apply(this, arguments)), (n = null), t);
        };
      }),
      (j.wrap = function (n, t) {
        return j.partial(t, n);
      }),
      (j.compose = function () {
        var n = arguments;
        return function () {
          for (var t = arguments, r = n.length - 1; r >= 0; r--)
            t = [n[r].apply(this, t)];
          return t[0];
        };
      }),
      (j.after = function (n, t) {
        return function () {
          return --n < 1 ? t.apply(this, arguments) : void 0;
        };
      }),
      (j.keys = function (n) {
        if (!j.isObject(n)) return [];
        if (w) return w(n);
        var t = [];
        for (var r in n) j.has(n, r) && t.push(r);
        return t;
      }),
      (j.values = function (n) {
        for (
          var t = j.keys(n), r = t.length, e = new Array(r), u = 0;
          r > u;
          u++
        )
          e[u] = n[t[u]];
        return e;
      }),
      (j.pairs = function (n) {
        for (
          var t = j.keys(n), r = t.length, e = new Array(r), u = 0;
          r > u;
          u++
        )
          e[u] = [t[u], n[t[u]]];
        return e;
      }),
      (j.invert = function (n) {
        for (var t = {}, r = j.keys(n), e = 0, u = r.length; u > e; e++)
          t[n[r[e]]] = r[e];
        return t;
      }),
      (j.functions = j.methods =
        function (n) {
          var t = [];
          for (var r in n) j.isFunction(n[r]) && t.push(r);
          return t.sort();
        }),
      (j.extend = function (n) {
        return (
          A(o.call(arguments, 1), function (t) {
            if (t) for (var r in t) n[r] = t[r];
          }),
          n
        );
      }),
      (j.pick = function (n) {
        var t = {},
          r = c.apply(e, o.call(arguments, 1));
        return (
          A(r, function (r) {
            r in n && (t[r] = n[r]);
          }),
          t
        );
      }),
      (j.omit = function (n) {
        var t = {},
          r = c.apply(e, o.call(arguments, 1));
        for (var u in n) j.contains(r, u) || (t[u] = n[u]);
        return t;
      }),
      (j.defaults = function (n) {
        return (
          A(o.call(arguments, 1), function (t) {
            if (t) for (var r in t) void 0 === n[r] && (n[r] = t[r]);
          }),
          n
        );
      }),
      (j.clone = function (n) {
        return j.isObject(n) ? (j.isArray(n) ? n.slice() : j.extend({}, n)) : n;
      }),
      (j.tap = function (n, t) {
        return t(n), n;
      });
    var S = function (n, t, r, e) {
      if (n === t) return 0 !== n || 1 / n == 1 / t;
      if (null == n || null == t) return n === t;
      n instanceof j && (n = n._wrapped), t instanceof j && (t = t._wrapped);
      var u = l.call(n);
      if (u != l.call(t)) return !1;
      switch (u) {
        case "[object String]":
          return n == String(t);
        case "[object Number]":
          return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
        case "[object Date]":
        case "[object Boolean]":
          return +n == +t;
        case "[object RegExp]":
          return (
            n.source == t.source &&
            n.global == t.global &&
            n.multiline == t.multiline &&
            n.ignoreCase == t.ignoreCase
          );
      }
      if ("object" != typeof n || "object" != typeof t) return !1;
      for (var i = r.length; i--; ) if (r[i] == n) return e[i] == t;
      var a = n.constructor,
        o = t.constructor;
      if (
        a !== o &&
        !(
          j.isFunction(a) &&
          a instanceof a &&
          j.isFunction(o) &&
          o instanceof o
        ) &&
        "constructor" in n &&
        "constructor" in t
      )
        return !1;
      r.push(n), e.push(t);
      var c = 0,
        f = !0;
      if ("[object Array]" == u) {
        if (((c = n.length), (f = c == t.length)))
          for (; c-- && (f = S(n[c], t[c], r, e)); );
      } else {
        for (var s in n)
          if (j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e))))
            break;
        if (f) {
          for (s in t) if (j.has(t, s) && !c--) break;
          f = !c;
        }
      }
      return r.pop(), e.pop(), f;
    };
    (j.isEqual = function (n, t) {
      return S(n, t, [], []);
    }),
      (j.isEmpty = function (n) {
        if (null == n) return !0;
        if (j.isArray(n) || j.isString(n)) return 0 === n.length;
        for (var t in n) if (j.has(n, t)) return !1;
        return !0;
      }),
      (j.isElement = function (n) {
        return !(!n || 1 !== n.nodeType);
      }),
      (j.isArray =
        x ||
        function (n) {
          return "[object Array]" == l.call(n);
        }),
      (j.isObject = function (n) {
        return n === Object(n);
      }),
      A(
        ["Arguments", "Function", "String", "Number", "Date", "RegExp"],
        function (n) {
          j["is" + n] = function (t) {
            return l.call(t) == "[object " + n + "]";
          };
        },
      ),
      j.isArguments(arguments) ||
        (j.isArguments = function (n) {
          return !(!n || !j.has(n, "callee"));
        }),
      "function" != typeof /./ &&
        (j.isFunction = function (n) {
          return "function" == typeof n;
        }),
      (j.isFinite = function (n) {
        return isFinite(n) && !isNaN(parseFloat(n));
      }),
      (j.isNaN = function (n) {
        return j.isNumber(n) && n != +n;
      }),
      (j.isBoolean = function (n) {
        return !0 === n || !1 === n || "[object Boolean]" == l.call(n);
      }),
      (j.isNull = function (n) {
        return null === n;
      }),
      (j.isUndefined = function (n) {
        return void 0 === n;
      }),
      (j.has = function (n, t) {
        return f.call(n, t);
      }),
      (j.noConflict = function () {
        return (n._ = t), this;
      }),
      (j.identity = function (n) {
        return n;
      }),
      (j.constant = function (n) {
        return function () {
          return n;
        };
      }),
      (j.property = function (n) {
        return function (t) {
          return t[n];
        };
      }),
      (j.matches = function (n) {
        return function (t) {
          if (t === n) return !0;
          for (var r in n) if (n[r] !== t[r]) return !1;
          return !0;
        };
      }),
      (j.times = function (n, t, r) {
        for (var e = Array(Math.max(0, n)), u = 0; n > u; u++)
          e[u] = t.call(r, u);
        return e;
      }),
      (j.random = function (n, t) {
        return (
          null == t && ((t = n), (n = 0)),
          n + Math.floor(Math.random() * (t - n + 1))
        );
      }),
      (j.now =
        Date.now ||
        function () {
          return new Date().getTime();
        });
    var T = {
      escape: {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
      },
    };
    T.unescape = j.invert(T.escape);
    var I = {
      escape: new RegExp("[" + j.keys(T.escape).join("") + "]", "g"),
      unescape: new RegExp("(" + j.keys(T.unescape).join("|") + ")", "g"),
    };
    j.each(["escape", "unescape"], function (n) {
      j[n] = function (t) {
        return null == t
          ? ""
          : ("" + t).replace(I[n], function (t) {
              return T[n][t];
            });
      };
    }),
      (j.result = function (n, t) {
        if (null != n) {
          var r = n[t];
          return j.isFunction(r) ? r.call(n) : r;
        }
      }),
      (j.mixin = function (n) {
        A(j.functions(n), function (t) {
          var r = (j[t] = n[t]);
          j.prototype[t] = function () {
            var n = [this._wrapped];
            return a.apply(n, arguments), z.call(this, r.apply(j, n));
          };
        });
      });
    var N = 0;
    (j.uniqueId = function (n) {
      var t = ++N + "";
      return n ? n + t : t;
    }),
      (j.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g,
      });
    var q = /(.)^/,
      B = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\t": "t",
        "\u2028": "u2028",
        "\u2029": "u2029",
      };
    (j.template = function (n, t, r) {
      var e;
      r = j.defaults({}, r, j.templateSettings);
      var u = new RegExp(
          [
            (r.escape || q).source,
            (r.interpolate || q).source,
            (r.evaluate || q).source,
          ].join("|") + "|$",
          "g",
        ),
        i = 0,
        a = "__p+='";
      n.replace(u, function (t, r, e, u, o) {
        return (
          (a += n
            .slice(i, o)
            .replace(/\\|'|\r|\n|\t|\u2028|\u2029/g, function (n) {
              return "\\" + B[n];
            })),
          r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"),
          e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"),
          u && (a += "';\n" + u + "\n__p+='"),
          (i = o + t.length),
          t
        );
      }),
        (a += "';\n"),
        r.variable || (a = "with(obj||{}){\n" + a + "}\n"),
        (a =
          "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
          a +
          "return __p;\n");
      try {
        e = new Function(r.variable || "obj", "_", a);
      } catch (o) {
        throw ((o.source = a), o);
      }
      if (t) return e(t, j);
      var c = function (n) {
        return e.call(this, n, j);
      };
      return (
        (c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}"), c
      );
    }),
      (j.chain = function (n) {
        return j(n).chain();
      });
    var z = function (n) {
      return this._chain ? j(n).chain() : n;
    };
    j.mixin(j),
      A(
        ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
        function (n) {
          var t = e[n];
          j.prototype[n] = function () {
            var r = this._wrapped;
            return (
              t.apply(r, arguments),
              ("shift" != n && "splice" != n) || 0 !== r.length || delete r[0],
              z.call(this, r)
            );
          };
        },
      ),
      A(["concat", "join", "slice"], function (n) {
        var t = e[n];
        j.prototype[n] = function () {
          return z.call(this, t.apply(this._wrapped, arguments));
        };
      }),
      j.extend(j.prototype, {
        chain: function () {
          return (this._chain = !0), this;
        },
        value: function () {
          return this._wrapped;
        },
      }),
      "function" == typeof define &&
        define.amd &&
        define("underscore", [], function () {
          return j;
        });
  }.call(this),
  (function (t, e) {
    if ("function" == typeof define && define.amd)
      define(["underscore", "jquery", "exports"], function (i, r, s) {
        t.Backbone = e(t, s, i, r);
      });
    else if ("undefined" != typeof exports) {
      var i = require("underscore");
      e(t, exports, i);
    } else t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$);
  })(this, function (t, e, i, r) {
    var s = t.Backbone,
      n = [],
      o = n.slice;
    (e.VERSION = "1.1.2"),
      (e.$ = r),
      (e.noConflict = function () {
        return (t.Backbone = s), this;
      }),
      (e.emulateHTTP = !1),
      (e.emulateJSON = !1);
    var u = (e.Events = {
        on: function (t, e, i) {
          return c(this, "on", t, [e, i]) && e
            ? (this._events || (this._events = {}),
              (this._events[t] || (this._events[t] = [])).push({
                callback: e,
                context: i,
                ctx: i || this,
              }),
              this)
            : this;
        },
        once: function (t, e, r) {
          if (!c(this, "once", t, [e, r]) || !e) return this;
          var s = this,
            n = i.once(function () {
              s.off(t, n), e.apply(this, arguments);
            });
          return (n._callback = e), this.on(t, n, r);
        },
        off: function (t, e, r) {
          var s, n, a, o, h, u, l, f;
          if (!this._events || !c(this, "off", t, [e, r])) return this;
          if (!t && !e && !r) return (this._events = void 0), this;
          for (
            o = t ? [t] : i.keys(this._events), h = 0, u = o.length;
            h < u;
            h++
          )
            if (((t = o[h]), (a = this._events[t]))) {
              if (((this._events[t] = s = []), e || r))
                for (l = 0, f = a.length; l < f; l++)
                  (n = a[l]),
                    ((e && e !== n.callback && e !== n.callback._callback) ||
                      (r && r !== n.context)) &&
                      s.push(n);
              s.length || delete this._events[t];
            }
          return this;
        },
        trigger: function (t) {
          if (!this._events) return this;
          var e = o.call(arguments, 1);
          if (!c(this, "trigger", t, e)) return this;
          var i = this._events[t],
            r = this._events.all;
          return i && f(i, e), r && f(r, arguments), this;
        },
        stopListening: function (t, e, r) {
          var s = this._listeningTo;
          if (!s) return this;
          var n = !e && !r;
          r || "object" != typeof e || (r = this),
            t && ((s = {})[t._listenId] = t);
          for (var a in s)
            (t = s[a]),
              t.off(e, r, this),
              (n || i.isEmpty(t._events)) && delete this._listeningTo[a];
          return this;
        },
      }),
      l = /\s+/,
      c = function (t, e, i, r) {
        if (!i) return !0;
        if ("object" == typeof i) {
          for (var s in i) t[e].apply(t, [s, i[s]].concat(r));
          return !1;
        }
        if (l.test(i)) {
          for (var n = i.split(l), a = 0, o = n.length; a < o; a++)
            t[e].apply(t, [n[a]].concat(r));
          return !1;
        }
        return !0;
      },
      f = function (t, e) {
        var i,
          r = -1,
          s = t.length,
          n = e[0],
          a = e[1],
          o = e[2];
        switch (e.length) {
          case 0:
            for (; ++r < s; ) (i = t[r]).callback.call(i.ctx);
            return;
          case 1:
            for (; ++r < s; ) (i = t[r]).callback.call(i.ctx, n);
            return;
          case 2:
            for (; ++r < s; ) (i = t[r]).callback.call(i.ctx, n, a);
            return;
          case 3:
            for (; ++r < s; ) (i = t[r]).callback.call(i.ctx, n, a, o);
            return;
          default:
            for (; ++r < s; ) (i = t[r]).callback.apply(i.ctx, e);
            return;
        }
      },
      d = { listenTo: "on", listenToOnce: "once" };
    i.each(d, function (t, e) {
      u[e] = function (e, r, s) {
        return (
          ((this._listeningTo || (this._listeningTo = {}))[
            e._listenId || (e._listenId = i.uniqueId("l"))
          ] = e),
          s || "object" != typeof r || (s = this),
          e[t](r, s, this),
          this
        );
      };
    }),
      (u.bind = u.on),
      (u.unbind = u.off),
      i.extend(e, u);
    var p = (e.Model = function (t, e) {
      var r = t || {};
      e || (e = {}),
        (this.cid = i.uniqueId("c")),
        (this.attributes = {}),
        e.collection && (this.collection = e.collection),
        e.parse && (r = this.parse(r, e) || {}),
        (r = i.defaults({}, r, i.result(this, "defaults"))),
        this.set(r, e),
        (this.changed = {}),
        this.initialize.apply(this, arguments);
    });
    i.extend(p.prototype, u, {
      changed: null,
      validationError: null,
      idAttribute: "id",
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
      set: function (t, e, r) {
        var s, n, a, o, h, u, l, c;
        if (null == t) return this;
        if (
          ("object" == typeof t ? ((n = t), (r = e)) : ((n = {})[t] = e),
          r || (r = {}),
          !this._validate(n, r))
        )
          return !1;
        (a = r.unset),
          (h = r.silent),
          (o = []),
          (u = this._changing),
          (this._changing = !0),
          u ||
            ((this._previousAttributes = i.clone(this.attributes)),
            (this.changed = {})),
          (c = this.attributes),
          (l = this._previousAttributes),
          this.idAttribute in n && (this.id = n[this.idAttribute]);
        for (s in n)
          (e = n[s]),
            i.isEqual(c[s], e) || o.push(s),
            i.isEqual(l[s], e) ? delete this.changed[s] : (this.changed[s] = e),
            a ? delete c[s] : (c[s] = e);
        if (!h) {
          o.length && (this._pending = r);
          for (var f = 0, d = o.length; f < d; f++)
            this.trigger("change:" + o[f], this, c[o[f]], r);
        }
        if (u) return this;
        if (!h)
          for (; this._pending; )
            (r = this._pending),
              (this._pending = !1),
              this.trigger("change", this, r);
        return (this._pending = !1), (this._changing = !1), this;
      },
      unset: function (t, e) {
        return this.set(t, void 0, i.extend({}, e, { unset: !0 }));
      },
      clear: function (t) {
        var e = {};
        for (var r in this.attributes) e[r] = void 0;
        return this.set(e, i.extend({}, t, { unset: !0 }));
      },
      hasChanged: function (t) {
        return null == t ? !i.isEmpty(this.changed) : i.has(this.changed, t);
      },
      changedAttributes: function (t) {
        if (!t) return !!this.hasChanged() && i.clone(this.changed);
        var e,
          r = !1,
          s = this._changing ? this._previousAttributes : this.attributes;
        for (var n in t)
          i.isEqual(s[n], (e = t[n])) || ((r || (r = {}))[n] = e);
        return r;
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
        (t = t ? i.clone(t) : {}), void 0 === t.parse && (t.parse = !0);
        var e = this,
          r = t.success;
        return (
          (t.success = function (i) {
            if (!e.set(e.parse(i, t), t)) return !1;
            r && r(e, i, t), e.trigger("sync", e, i, t);
          }),
          q(this, t),
          this.sync("read", this, t)
        );
      },
      save: function (t, e, r) {
        var s,
          n,
          a,
          o = this.attributes;
        if (
          (null == t || "object" == typeof t
            ? ((s = t), (r = e))
            : ((s = {})[t] = e),
          (r = i.extend({ validate: !0 }, r)),
          s && !r.wait)
        ) {
          if (!this.set(s, r)) return !1;
        } else if (!this._validate(s, r)) return !1;
        s && r.wait && (this.attributes = i.extend({}, o, s)),
          void 0 === r.parse && (r.parse = !0);
        var h = this,
          u = r.success;
        return (
          (r.success = function (t) {
            h.attributes = o;
            var e = h.parse(t, r);
            if (
              (r.wait && (e = i.extend(s || {}, e)),
              i.isObject(e) && !h.set(e, r))
            )
              return !1;
            u && u(h, t, r), h.trigger("sync", h, t, r);
          }),
          q(this, r),
          (n = this.isNew() ? "create" : r.patch ? "patch" : "update"),
          "patch" === n && (r.attrs = s),
          (a = this.sync(n, this, r)),
          s && r.wait && (this.attributes = o),
          a
        );
      },
      destroy: function (t) {
        t = t ? i.clone(t) : {};
        var e = this,
          r = t.success,
          s = function () {
            e.trigger("destroy", e, e.collection, t);
          };
        if (
          ((t.success = function (i) {
            (t.wait || e.isNew()) && s(),
              r && r(e, i, t),
              e.isNew() || e.trigger("sync", e, i, t);
          }),
          this.isNew())
        )
          return t.success(), !1;
        q(this, t);
        var n = this.sync("delete", this, t);
        return t.wait || s(), n;
      },
      url: function () {
        var t =
          i.result(this, "urlRoot") || i.result(this.collection, "url") || M();
        return this.isNew()
          ? t
          : t.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id);
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
        return this._validate({}, i.extend(t || {}, { validate: !0 }));
      },
      _validate: function (t, e) {
        if (!e.validate || !this.validate) return !0;
        t = i.extend({}, this.attributes, t);
        var r = (this.validationError = this.validate(t, e) || null);
        return (
          !r ||
          (this.trigger(
            "invalid",
            this,
            r,
            i.extend(e, { validationError: r }),
          ),
          !1)
        );
      },
    });
    var v = ["keys", "values", "pairs", "invert", "pick", "omit"];
    i.each(v, function (t) {
      p.prototype[t] = function () {
        var e = o.call(arguments);
        return e.unshift(this.attributes), i[t].apply(i, e);
      };
    });
    var g = (e.Collection = function (t, e) {
        e || (e = {}),
          e.model && (this.model = e.model),
          void 0 !== e.comparator && (this.comparator = e.comparator),
          this._reset(),
          this.initialize.apply(this, arguments),
          t && this.reset(t, i.extend({ silent: !0 }, e));
      }),
      m = { add: !0, remove: !0, merge: !0 },
      y = { add: !0, remove: !1 };
    i.extend(g.prototype, u, {
      model: p,
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
        return this.set(t, i.extend({ merge: !1 }, e, y));
      },
      remove: function (t, e) {
        var r = !i.isArray(t);
        (t = r ? [t] : i.clone(t)), e || (e = {});
        var s, n, a, o;
        for (s = 0, n = t.length; s < n; s++)
          (o = t[s] = this.get(t[s])) &&
            (delete this._byId[o.id],
            delete this._byId[o.cid],
            (a = this.indexOf(o)),
            this.models.splice(a, 1),
            this.length--,
            e.silent || ((e.index = a), o.trigger("remove", o, this, e)),
            this._removeReference(o, e));
        return r ? t[0] : t;
      },
      set: function (t, e) {
        (e = i.defaults({}, e, m)), e.parse && (t = this.parse(t, e));
        var r = !i.isArray(t);
        t = r ? (t ? [t] : []) : i.clone(t);
        var s,
          n,
          a,
          o,
          h,
          u,
          l,
          c = e.at,
          f = this.model,
          d = this.comparator && null == c && !1 !== e.sort,
          v = i.isString(this.comparator) ? this.comparator : null,
          g = [],
          y = [],
          _ = {},
          b = e.add,
          w = e.merge,
          x = e.remove,
          E = !(d || !b || !x) && [];
        for (s = 0, n = t.length; s < n; s++) {
          if (
            ((h = t[s] || {}),
            (a = h instanceof p ? (o = h) : h[f.prototype.idAttribute || "id"]),
            (u = this.get(a)))
          )
            x && (_[u.cid] = !0),
              w &&
                ((h = h === o ? o.attributes : h),
                e.parse && (h = u.parse(h, e)),
                u.set(h, e),
                d && !l && u.hasChanged(v) && (l = !0)),
              (t[s] = u);
          else if (b) {
            if (!(o = t[s] = this._prepareModel(h, e))) continue;
            g.push(o), this._addReference(o, e);
          }
          (o = u || o),
            !E || (!o.isNew() && _[o.id]) || E.push(o),
            (_[o.id] = !0);
        }
        if (x) {
          for (s = 0, n = this.length; s < n; ++s)
            _[(o = this.models[s]).cid] || y.push(o);
          y.length && this.remove(y, e);
        }
        if (g.length || (E && E.length))
          if ((d && (l = !0), (this.length += g.length), null != c))
            for (s = 0, n = g.length; s < n; s++)
              this.models.splice(c + s, 0, g[s]);
          else {
            E && (this.models.length = 0);
            var k = E || g;
            for (s = 0, n = k.length; s < n; s++) this.models.push(k[s]);
          }
        if ((l && this.sort({ silent: !0 }), !e.silent)) {
          for (s = 0, n = g.length; s < n; s++)
            (o = g[s]).trigger("add", o, this, e);
          (l || (E && E.length)) && this.trigger("sort", this, e);
        }
        return r ? t[0] : t;
      },
      reset: function (t, e) {
        e || (e = {});
        for (var r = 0, s = this.models.length; r < s; r++)
          this._removeReference(this.models[r], e);
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
        return this.remove(e, t), e;
      },
      unshift: function (t, e) {
        return this.add(t, i.extend({ at: 0 }, e));
      },
      shift: function (t) {
        var e = this.at(0);
        return this.remove(e, t), e;
      },
      slice: function () {
        return o.apply(this.models, arguments);
      },
      get: function (t) {
        if (null != t)
          return this._byId[t] || this._byId[t.id] || this._byId[t.cid];
      },
      at: function (t) {
        return this.models[t];
      },
      where: function (t, e) {
        return i.isEmpty(t)
          ? e
            ? void 0
            : []
          : this[e ? "find" : "filter"](function (e) {
              for (var i in t) if (t[i] !== e.get(i)) return !1;
              return !0;
            });
      },
      findWhere: function (t) {
        return this.where(t, !0);
      },
      sort: function (t) {
        if (!this.comparator)
          throw new Error("Cannot sort a set without a comparator");
        return (
          t || (t = {}),
          i.isString(this.comparator) || 1 === this.comparator.length
            ? (this.models = this.sortBy(this.comparator, this))
            : this.models.sort(i.bind(this.comparator, this)),
          t.silent || this.trigger("sort", this, t),
          this
        );
      },
      pluck: function (t) {
        return i.invoke(this.models, "get", t);
      },
      fetch: function (t) {
        (t = t ? i.clone(t) : {}), void 0 === t.parse && (t.parse = !0);
        var e = t.success,
          r = this;
        return (
          (t.success = function (i) {
            var s = t.reset ? "reset" : "set";
            r[s](i, t), e && e(r, i, t), r.trigger("sync", r, i, t);
          }),
          q(this, t),
          this.sync("read", this, t)
        );
      },
      create: function (t, e) {
        if (((e = e ? i.clone(e) : {}), !(t = this._prepareModel(t, e))))
          return !1;
        e.wait || this.add(t, e);
        var r = this,
          s = e.success;
        return (
          (e.success = function (t, i) {
            e.wait && r.add(t, e), s && s(t, i, e);
          }),
          t.save(null, e),
          t
        );
      },
      parse: function (t, e) {
        return t;
      },
      clone: function () {
        return new this.constructor(this.models);
      },
      _reset: function () {
        (this.length = 0), (this.models = []), (this._byId = {});
      },
      _prepareModel: function (t, e) {
        if (t instanceof p) return t;
        (e = e ? i.clone(e) : {}), (e.collection = this);
        var r = new this.model(t, e);
        return r.validationError
          ? (this.trigger("invalid", this, r.validationError, e), !1)
          : r;
      },
      _addReference: function (t, e) {
        (this._byId[t.cid] = t),
          null != t.id && (this._byId[t.id] = t),
          t.collection || (t.collection = this),
          t.on("all", this._onModelEvent, this);
      },
      _removeReference: function (t, e) {
        this === t.collection && delete t.collection,
          t.off("all", this._onModelEvent, this);
      },
      _onModelEvent: function (t, e, i, r) {
        (("add" !== t && "remove" !== t) || i === this) &&
          ("destroy" === t && this.remove(e, r),
          e &&
            t === "change:" + e.idAttribute &&
            (delete this._byId[e.previous(e.idAttribute)],
            null != e.id && (this._byId[e.id] = e)),
          this.trigger.apply(this, arguments));
      },
    });
    var _ = [
      "forEach",
      "each",
      "map",
      "collect",
      "reduce",
      "foldl",
      "inject",
      "reduceRight",
      "foldr",
      "find",
      "detect",
      "filter",
      "select",
      "reject",
      "every",
      "all",
      "some",
      "any",
      "include",
      "contains",
      "invoke",
      "max",
      "min",
      "toArray",
      "size",
      "first",
      "head",
      "take",
      "initial",
      "rest",
      "tail",
      "drop",
      "last",
      "without",
      "difference",
      "indexOf",
      "shuffle",
      "lastIndexOf",
      "isEmpty",
      "chain",
      "sample",
    ];
    i.each(_, function (t) {
      g.prototype[t] = function () {
        var e = o.call(arguments);
        return e.unshift(this.models), i[t].apply(i, e);
      };
    });
    var b = ["groupBy", "countBy", "sortBy", "indexBy"];
    i.each(b, function (t) {
      g.prototype[t] = function (e, r) {
        var s = i.isFunction(e)
          ? e
          : function (t) {
              return t.get(e);
            };
        return i[t](this.models, s, r);
      };
    });
    var w = (e.View = function (t) {
        (this.cid = i.uniqueId("view")),
          t || (t = {}),
          i.extend(this, i.pick(t, E)),
          this._ensureElement(),
          this.initialize.apply(this, arguments),
          this.delegateEvents();
      }),
      E = [
        "model",
        "collection",
        "el",
        "id",
        "attributes",
        "className",
        "tagName",
        "events",
      ];
    i.extend(w.prototype, u, {
      tagName: "div",
      $: function (t) {
        return this.$el.find(t);
      },
      initialize: function () {},
      render: function () {
        return this;
      },
      remove: function () {
        return this.$el.remove(), this.stopListening(), this;
      },
      setElement: function (t, i) {
        return (
          this.$el && this.undelegateEvents(),
          (this.$el = t instanceof e.$ ? t : e.$(t)),
          (this.el = this.$el[0]),
          !1 !== i && this.delegateEvents(),
          this
        );
      },
      delegateEvents: function (t) {
        if (!t && !(t = i.result(this, "events"))) return this;
        this.undelegateEvents();
        for (var e in t) {
          var r = t[e];
          if ((i.isFunction(r) || (r = this[t[e]]), r)) {
            var s = e.match(/^(\S+)\s*(.*)$/),
              n = s[1],
              a = s[2];
            (r = i.bind(r, this)),
              (n += ".delegateEvents" + this.cid),
              "" === a ? this.$el.on(n, r) : this.$el.on(n, a, r);
          }
        }
        return this;
      },
      undelegateEvents: function () {
        return this.$el.off(".delegateEvents" + this.cid), this;
      },
      _ensureElement: function () {
        if (this.el) this.setElement(i.result(this, "el"), !1);
        else {
          var t = i.extend({}, i.result(this, "attributes"));
          this.id && (t.id = i.result(this, "id")),
            this.className && (t.class = i.result(this, "className"));
          var r = e.$("<" + i.result(this, "tagName") + ">").attr(t);
          this.setElement(r, !1);
        }
      },
    }),
      (e.sync = function (t, r, s) {
        var n = T[t];
        i.defaults(s || (s = {}), {
          emulateHTTP: e.emulateHTTP,
          emulateJSON: e.emulateJSON,
        });
        var a = { type: n, dataType: "json" };
        if (
          (s.url || (a.url = i.result(r, "url") || M()),
          null != s.data ||
            !r ||
            ("create" !== t && "update" !== t && "patch" !== t) ||
            ((a.contentType = "application/json"),
            (a.data = JSON.stringify(s.attrs || r.toJSON(s)))),
          s.emulateJSON &&
            ((a.contentType = "application/x-www-form-urlencoded"),
            (a.data = a.data ? { model: a.data } : {})),
          s.emulateHTTP && ("PUT" === n || "DELETE" === n || "PATCH" === n))
        ) {
          (a.type = "POST"), s.emulateJSON && (a.data._method = n);
          var o = s.beforeSend;
          s.beforeSend = function (t) {
            if ((t.setRequestHeader("X-HTTP-Method-Override", n), o))
              return o.apply(this, arguments);
          };
        }
        "GET" === a.type || s.emulateJSON || (a.processData = !1),
          "PATCH" === a.type &&
            k &&
            (a.xhr = function () {
              return new ActiveXObject("Microsoft.XMLHTTP");
            });
        var h = (s.xhr = e.ajax(i.extend(a, s)));
        return r.trigger("request", r, h, s), h;
      });
    var k = !(
        "undefined" == typeof window ||
        !window.ActiveXObject ||
        (window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent)
      ),
      T = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        delete: "DELETE",
        read: "GET",
      };
    e.ajax = function () {
      return e.$.ajax.apply(e.$, arguments);
    };
    var $ = (e.Router = function (t) {
      t || (t = {}),
        t.routes && (this.routes = t.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments);
    });
    i.extend($.prototype, u, {
      initialize: function () {},
      route: function (t, r, s) {
        i.isRegExp(t) || (t = this._routeToRegExp(t)),
          i.isFunction(r) && ((s = r), (r = "")),
          s || (s = this[r]);
        var n = this;
        return (
          e.history.route(t, function (i) {
            var a = n._extractParameters(t, i);
            n.execute(s, a),
              n.trigger.apply(n, ["route:" + r].concat(a)),
              n.trigger("route", r, a),
              e.history.trigger("route", n, r, a);
          }),
          this
        );
      },
      execute: function (t, e) {
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
            .replace(/[\-{}\[\]+?.,\\\^$|#\s]/g, "\\$&")
            .replace(/\((.*?)\)/g, "(?:$1)?")
            .replace(/(\(\?)?:\w+/g, function (t, e) {
              return e ? t : "([^/?]+)";
            })
            .replace(/\*\w+/g, "([^?]*?)")),
          new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
        );
      },
      _extractParameters: function (t, e) {
        var r = t.exec(e).slice(1);
        return i.map(r, function (t, e) {
          return e === r.length - 1
            ? t || null
            : t
              ? decodeURIComponent(t)
              : null;
        });
      },
    });
    var N = (e.History = function () {
        (this.handlers = []),
          i.bindAll(this, "checkUrl"),
          "undefined" != typeof window &&
            ((this.location = window.location),
            (this.history = window.history));
      }),
      R = /^[#\/]|\s+$/g,
      P = /msie [\w.]+/;
    (N.started = !1),
      i.extend(N.prototype, u, {
        interval: 50,
        atRoot: function () {
          return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root;
        },
        getHash: function (t) {
          var e = (t || this).location.href.match(/#(.*)$/);
          return e ? e[1] : "";
        },
        getFragment: function (t, e) {
          if (null == t)
            if (this._hasPushState || !this._wantsHashChange || e) {
              t = decodeURI(this.location.pathname + this.location.search);
              var i = this.root.replace(/\/$/, "");
              t.indexOf(i) || (t = t.slice(i.length));
            } else t = this.getHash();
          return t.replace(R, "");
        },
        start: function (t) {
          if (N.started)
            throw new Error("Backbone.history has already been started");
          (N.started = !0),
            (this.options = i.extend({ root: "/" }, this.options, t)),
            (this.root = this.options.root),
            (this._wantsHashChange = !1 !== this.options.hashChange),
            (this._wantsPushState = !!this.options.pushState),
            (this._hasPushState = !!(
              this.options.pushState &&
              this.history &&
              this.history.pushState
            ));
          var r = this.getFragment(),
            s = document.documentMode,
            n = P.exec(navigator.userAgent.toLowerCase()) && (!s || s <= 7);
          if (
            ((this.root = ("/" + this.root + "/").replace(/^\/+|\/+$/g, "/")),
            n && this._wantsHashChange)
          ) {
            var a = e.$('<iframe src="javascript:0" tabindex="-1">');
            (this.iframe = a.hide().appendTo("body")[0].contentWindow),
              this.navigate(r);
          }
          this._hasPushState
            ? e.$(window).on("popstate", this.checkUrl)
            : this._wantsHashChange && "onhashchange" in window && !n
              ? e.$(window).on("hashchange", this.checkUrl)
              : this._wantsHashChange &&
                (this._checkUrlInterval = setInterval(
                  this.checkUrl,
                  this.interval,
                )),
            (this.fragment = r);
          var o = this.location;
          if (this._wantsHashChange && this._wantsPushState) {
            if (!this._hasPushState && !this.atRoot())
              return (
                (this.fragment = this.getFragment(null, !0)),
                this.location.replace(this.root + "#" + this.fragment),
                !0
              );
            this._hasPushState &&
              this.atRoot() &&
              o.hash &&
              ((this.fragment = this.getHash().replace(R, "")),
              this.history.replaceState(
                {},
                document.title,
                this.root + this.fragment,
              ));
          }
          if (!this.options.silent) return this.loadUrl();
        },
        stop: function () {
          e
            .$(window)
            .off("popstate", this.checkUrl)
            .off("hashchange", this.checkUrl),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            (N.started = !1);
        },
        route: function (t, e) {
          this.handlers.unshift({ route: t, callback: e });
        },
        checkUrl: function (t) {
          var e = this.getFragment();
          if (
            (e === this.fragment &&
              this.iframe &&
              (e = this.getFragment(this.getHash(this.iframe))),
            e === this.fragment)
          )
            return !1;
          this.iframe && this.navigate(e), this.loadUrl();
        },
        loadUrl: function (t) {
          return (
            (t = this.fragment = this.getFragment(t)),
            i.any(this.handlers, function (e) {
              if (e.route.test(t)) return e.callback(t), !0;
            })
          );
        },
        navigate: function (t, e) {
          if (!N.started) return !1;
          (e && !0 !== e) || (e = { trigger: !!e });
          var i = this.root + (t = this.getFragment(t || ""));
          if (((t = t.replace(/#.*$/, "")), this.fragment !== t)) {
            if (
              ((this.fragment = t),
              "" === t && "/" !== i && (i = i.slice(0, -1)),
              this._hasPushState)
            )
              this.history[e.replace ? "replaceState" : "pushState"](
                {},
                document.title,
                i,
              );
            else {
              if (!this._wantsHashChange) return this.location.assign(i);
              this._updateHash(this.location, t, e.replace),
                this.iframe &&
                  t !== this.getFragment(this.getHash(this.iframe)) &&
                  (e.replace || this.iframe.document.open().close(),
                  this._updateHash(this.iframe.location, t, e.replace));
            }
            return e.trigger ? this.loadUrl(t) : void 0;
          }
        },
        _updateHash: function (t, e, i) {
          if (i) {
            var r = t.href.replace(/(javascript:|#).*$/, "");
            t.replace(r + "#" + e);
          } else t.hash = "#" + e;
        },
      }),
      (e.history = new N());
    var U = function (t, e) {
      var s,
        r = this;
      (s =
        t && i.has(t, "constructor")
          ? t.constructor
          : function () {
              return r.apply(this, arguments);
            }),
        i.extend(s, r, e);
      var n = function () {
        this.constructor = s;
      };
      return (
        (n.prototype = r.prototype),
        (s.prototype = new n()),
        t && i.extend(s.prototype, t),
        (s.__super__ = r.prototype),
        s
      );
    };
    p.extend = g.extend = $.extend = w.extend = N.extend = U;
    var M = function () {
        throw new Error('A "url" property or function must be specified');
      },
      q = function (t, e) {
        var i = e.error;
        e.error = function (r) {
          i && i(t, r, e), t.trigger("error", t, r, e);
        };
      };
    return e;
  }),
  (function () {
    var t = function (e) {
      var n = new t.Index();
      return (
        n.pipeline.add(t.trimmer, t.stopWordFilter, t.stemmer),
        e && e.call(n, n),
        n
      );
    };
    (t.version = "0.5.3"),
      (t.utils = {}),
      (t.utils.warn = (function (t) {
        return function (e) {
          t.console && console.warn && console.warn(e);
        };
      })(this)),
      (t.EventEmitter = function () {
        this.events = {};
      }),
      (t.EventEmitter.prototype.addListener = function () {
        var t = Array.prototype.slice.call(arguments),
          e = t.pop(),
          n = t;
        if ("function" != typeof e)
          throw new TypeError("last argument must be a function");
        n.forEach(function (t) {
          this.hasHandler(t) || (this.events[t] = []), this.events[t].push(e);
        }, this);
      }),
      (t.EventEmitter.prototype.removeListener = function (t, e) {
        if (this.hasHandler(t)) {
          var n = this.events[t].indexOf(e);
          this.events[t].splice(n, 1),
            this.events[t].length || delete this.events[t];
        }
      }),
      (t.EventEmitter.prototype.emit = function (t) {
        if (this.hasHandler(t)) {
          var e = Array.prototype.slice.call(arguments, 1);
          this.events[t].forEach(function (t) {
            t.apply(void 0, e);
          });
        }
      }),
      (t.EventEmitter.prototype.hasHandler = function (t) {
        return t in this.events;
      }),
      (t.tokenizer = function (t) {
        if (!arguments.length || null == t || void 0 == t) return [];
        if (Array.isArray(t))
          return t.map(function (t) {
            return t.toLowerCase();
          });
        for (
          var e = t.toString().replace(/^\s+/, ""), n = e.length - 1;
          n >= 0;
          n--
        )
          if (/\S/.test(e.charAt(n))) {
            e = e.substring(0, n + 1);
            break;
          }
        return e.split(/\s+/).map(function (t) {
          return t.toLowerCase();
        });
      }),
      (t.Pipeline = function () {
        this._stack = [];
      }),
      (t.Pipeline.registeredFunctions = {}),
      (t.Pipeline.registerFunction = function (e, n) {
        n in this.registeredFunctions &&
          t.utils.warn("Overwriting existing registered function: " + n),
          (e.label = n),
          (t.Pipeline.registeredFunctions[e.label] = e);
      }),
      (t.Pipeline.warnIfFunctionNotRegistered = function (e) {
        (e.label && e.label in this.registeredFunctions) ||
          t.utils.warn(
            "Function is not registered with pipeline. This may cause problems when serialising the index.\n",
            e,
          );
      }),
      (t.Pipeline.load = function (e) {
        var n = new t.Pipeline();
        return (
          e.forEach(function (e) {
            var i = t.Pipeline.registeredFunctions[e];
            if (!i) throw new Error("Cannot load un-registered function: " + e);
            n.add(i);
          }),
          n
        );
      }),
      (t.Pipeline.prototype.add = function () {
        Array.prototype.slice.call(arguments).forEach(function (e) {
          t.Pipeline.warnIfFunctionNotRegistered(e), this._stack.push(e);
        }, this);
      }),
      (t.Pipeline.prototype.after = function (e, n) {
        t.Pipeline.warnIfFunctionNotRegistered(n);
        var i = this._stack.indexOf(e) + 1;
        this._stack.splice(i, 0, n);
      }),
      (t.Pipeline.prototype.before = function (e, n) {
        t.Pipeline.warnIfFunctionNotRegistered(n);
        var i = this._stack.indexOf(e);
        this._stack.splice(i, 0, n);
      }),
      (t.Pipeline.prototype.remove = function (t) {
        var e = this._stack.indexOf(t);
        this._stack.splice(e, 1);
      }),
      (t.Pipeline.prototype.run = function (t) {
        for (
          var e = [], n = t.length, i = this._stack.length, o = 0;
          n > o;
          o++
        ) {
          for (
            var r = t[o], s = 0;
            i > s && void 0 !== (r = this._stack[s](r, o, t));
            s++
          );
          void 0 !== r && e.push(r);
        }
        return e;
      }),
      (t.Pipeline.prototype.reset = function () {
        this._stack = [];
      }),
      (t.Pipeline.prototype.toJSON = function () {
        return this._stack.map(function (e) {
          return t.Pipeline.warnIfFunctionNotRegistered(e), e.label;
        });
      }),
      (t.Vector = function () {
        (this._magnitude = null), (this.list = void 0), (this.length = 0);
      }),
      (t.Vector.Node = function (t, e, n) {
        (this.idx = t), (this.val = e), (this.next = n);
      }),
      (t.Vector.prototype.insert = function (e, n) {
        var i = this.list;
        if (!i) return (this.list = new t.Vector.Node(e, n, i)), this.length++;
        for (var o = i, r = i.next; void 0 != r; ) {
          if (e < r.idx)
            return (o.next = new t.Vector.Node(e, n, r)), this.length++;
          (o = r), (r = r.next);
        }
        return (o.next = new t.Vector.Node(e, n, r)), this.length++;
      }),
      (t.Vector.prototype.magnitude = function () {
        if (this._magniture) return this._magnitude;
        for (var t, e = this.list, n = 0; e; )
          (t = e.val), (n += t * t), (e = e.next);
        return (this._magnitude = Math.sqrt(n));
      }),
      (t.Vector.prototype.dot = function (t) {
        for (var e = this.list, n = t.list, i = 0; e && n; )
          e.idx < n.idx
            ? (e = e.next)
            : e.idx > n.idx
              ? (n = n.next)
              : ((i += e.val * n.val), (e = e.next), (n = n.next));
        return i;
      }),
      (t.Vector.prototype.similarity = function (t) {
        return this.dot(t) / (this.magnitude() * t.magnitude());
      }),
      (t.SortedSet = function () {
        (this.length = 0), (this.elements = []);
      }),
      (t.SortedSet.load = function (t) {
        var e = new this();
        return (e.elements = t), (e.length = t.length), e;
      }),
      (t.SortedSet.prototype.add = function () {
        Array.prototype.slice.call(arguments).forEach(function (t) {
          ~this.indexOf(t) || this.elements.splice(this.locationFor(t), 0, t);
        }, this),
          (this.length = this.elements.length);
      }),
      (t.SortedSet.prototype.toArray = function () {
        return this.elements.slice();
      }),
      (t.SortedSet.prototype.map = function (t, e) {
        return this.elements.map(t, e);
      }),
      (t.SortedSet.prototype.forEach = function (t, e) {
        return this.elements.forEach(t, e);
      }),
      (t.SortedSet.prototype.indexOf = function (t, e, n) {
        var e = e || 0,
          n = n || this.elements.length,
          i = n - e,
          o = e + Math.floor(i / 2),
          r = this.elements[o];
        return 1 >= i
          ? r === t
            ? o
            : -1
          : t > r
            ? this.indexOf(t, o, n)
            : r > t
              ? this.indexOf(t, e, o)
              : r === t
                ? o
                : void 0;
      }),
      (t.SortedSet.prototype.locationFor = function (t, e, n) {
        var e = e || 0,
          n = n || this.elements.length,
          i = n - e,
          o = e + Math.floor(i / 2),
          r = this.elements[o];
        if (1 >= i) {
          if (r > t) return o;
          if (t > r) return o + 1;
        }
        return t > r
          ? this.locationFor(t, o, n)
          : r > t
            ? this.locationFor(t, e, o)
            : void 0;
      }),
      (t.SortedSet.prototype.intersect = function (e) {
        for (
          var n = new t.SortedSet(),
            i = 0,
            o = 0,
            r = this.length,
            s = e.length,
            a = this.elements,
            h = e.elements;
          !(i > r - 1 || o > s - 1);

        )
          a[i] !== h[o]
            ? a[i] < h[o]
              ? i++
              : a[i] > h[o] && o++
            : (n.add(a[i]), i++, o++);
        return n;
      }),
      (t.SortedSet.prototype.clone = function () {
        var e = new t.SortedSet();
        return (e.elements = this.toArray()), (e.length = e.elements.length), e;
      }),
      (t.SortedSet.prototype.union = function (t) {
        var e, n, i;
        return (
          this.length >= t.length
            ? ((e = this), (n = t))
            : ((e = t), (n = this)),
          (i = e.clone()),
          i.add.apply(i, n.toArray()),
          i
        );
      }),
      (t.SortedSet.prototype.toJSON = function () {
        return this.toArray();
      }),
      (t.Index = function () {
        (this._fields = []),
          (this._ref = "id"),
          (this.pipeline = new t.Pipeline()),
          (this.documentStore = new t.Store()),
          (this.tokenStore = new t.TokenStore()),
          (this.corpusTokens = new t.SortedSet()),
          (this.eventEmitter = new t.EventEmitter()),
          (this._idfCache = {}),
          this.on(
            "add",
            "remove",
            "update",
            function () {
              this._idfCache = {};
            }.bind(this),
          );
      }),
      (t.Index.prototype.on = function () {
        var t = Array.prototype.slice.call(arguments);
        return this.eventEmitter.addListener.apply(this.eventEmitter, t);
      }),
      (t.Index.prototype.off = function (t, e) {
        return this.eventEmitter.removeListener(t, e);
      }),
      (t.Index.load = function (e) {
        e.version !== t.version &&
          t.utils.warn(
            "version mismatch: current " +
              t.version +
              " importing " +
              e.version,
          );
        var n = new this();
        return (
          (n._fields = e.fields),
          (n._ref = e.ref),
          (n.documentStore = t.Store.load(e.documentStore)),
          (n.tokenStore = t.TokenStore.load(e.tokenStore)),
          (n.corpusTokens = t.SortedSet.load(e.corpusTokens)),
          (n.pipeline = t.Pipeline.load(e.pipeline)),
          n
        );
      }),
      (t.Index.prototype.field = function (t, e) {
        var e = e || {},
          n = { name: t, boost: e.boost || 1 };
        return this._fields.push(n), this;
      }),
      (t.Index.prototype.ref = function (t) {
        return (this._ref = t), this;
      }),
      (t.Index.prototype.add = function (e, n) {
        var i = {},
          o = new t.SortedSet(),
          r = e[this._ref],
          n = void 0 === n || n;
        this._fields.forEach(function (n) {
          var r = this.pipeline.run(t.tokenizer(e[n.name]));
          (i[n.name] = r), t.SortedSet.prototype.add.apply(o, r);
        }, this),
          this.documentStore.set(r, o),
          t.SortedSet.prototype.add.apply(this.corpusTokens, o.toArray());
        for (var s = 0; s < o.length; s++) {
          var a = o.elements[s],
            h = this._fields.reduce(function (t, e) {
              var n = i[e.name].length;
              return n
                ? t +
                    (i[e.name].filter(function (t) {
                      return t === a;
                    }).length /
                      n) *
                      e.boost
                : t;
            }, 0);
          this.tokenStore.add(a, { ref: r, tf: h });
        }
        n && this.eventEmitter.emit("add", e, this);
      }),
      (t.Index.prototype.remove = function (t, e) {
        var n = t[this._ref],
          e = void 0 === e || e;
        if (this.documentStore.has(n)) {
          var i = this.documentStore.get(n);
          this.documentStore.remove(n),
            i.forEach(function (t) {
              this.tokenStore.remove(t, n);
            }, this),
            e && this.eventEmitter.emit("remove", t, this);
        }
      }),
      (t.Index.prototype.update = function (t, e) {
        var e = void 0 === e || e;
        this.remove(t, !1),
          this.add(t, !1),
          e && this.eventEmitter.emit("update", t, this);
      }),
      (t.Index.prototype.idf = function (t) {
        var e = "@" + t;
        if (Object.prototype.hasOwnProperty.call(this._idfCache, e))
          return this._idfCache[e];
        var n = this.tokenStore.count(t),
          i = 1;
        return (
          n > 0 && (i = 1 + Math.log(this.tokenStore.length / n)),
          (this._idfCache[e] = i)
        );
      }),
      (t.Index.prototype.search = function (e) {
        var n = this.pipeline.run(t.tokenizer(e)),
          i = new t.Vector(),
          o = [],
          r = this._fields.reduce(function (t, e) {
            return t + e.boost;
          }, 0);
        return n.some(function (t) {
          return this.tokenStore.has(t);
        }, this)
          ? (n.forEach(function (e, n, s) {
              var a = (1 / s.length) * this._fields.length * r,
                h = this,
                l = this.tokenStore.expand(e).reduce(function (n, o) {
                  var r = h.corpusTokens.indexOf(o),
                    s = h.idf(o),
                    l = 1,
                    u = new t.SortedSet();
                  if (o !== e) {
                    var c = Math.max(3, o.length - e.length);
                    l = 1 / Math.log(c);
                  }
                  return (
                    r > -1 && i.insert(r, a * s * l),
                    Object.keys(h.tokenStore.get(o)).forEach(function (t) {
                      u.add(t);
                    }),
                    n.union(u)
                  );
                }, new t.SortedSet());
              o.push(l);
            }, this),
            o
              .reduce(function (t, e) {
                return t.intersect(e);
              })
              .map(function (t) {
                return { ref: t, score: i.similarity(this.documentVector(t)) };
              }, this)
              .sort(function (t, e) {
                return e.score - t.score;
              }))
          : [];
      }),
      (t.Index.prototype.documentVector = function (e) {
        for (
          var n = this.documentStore.get(e),
            i = n.length,
            o = new t.Vector(),
            r = 0;
          i > r;
          r++
        ) {
          var s = n.elements[r],
            a = this.tokenStore.get(s)[e].tf,
            h = this.idf(s);
          o.insert(this.corpusTokens.indexOf(s), a * h);
        }
        return o;
      }),
      (t.Index.prototype.toJSON = function () {
        return {
          version: t.version,
          fields: this._fields,
          ref: this._ref,
          documentStore: this.documentStore.toJSON(),
          tokenStore: this.tokenStore.toJSON(),
          corpusTokens: this.corpusTokens.toJSON(),
          pipeline: this.pipeline.toJSON(),
        };
      }),
      (t.Index.prototype.use = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        e.unshift(this), t.apply(this, e);
      }),
      (t.Store = function () {
        (this.store = {}), (this.length = 0);
      }),
      (t.Store.load = function (e) {
        var n = new this();
        return (
          (n.length = e.length),
          (n.store = Object.keys(e.store).reduce(function (n, i) {
            return (n[i] = t.SortedSet.load(e.store[i])), n;
          }, {})),
          n
        );
      }),
      (t.Store.prototype.set = function (t, e) {
        (this.store[t] = e), (this.length = Object.keys(this.store).length);
      }),
      (t.Store.prototype.get = function (t) {
        return this.store[t];
      }),
      (t.Store.prototype.has = function (t) {
        return t in this.store;
      }),
      (t.Store.prototype.remove = function (t) {
        this.has(t) && (delete this.store[t], this.length--);
      }),
      (t.Store.prototype.toJSON = function () {
        return { store: this.store, length: this.length };
      }),
      (t.stemmer = (function () {
        var t = {
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
          e = {
            icate: "ic",
            ative: "",
            alize: "al",
            iciti: "ic",
            ical: "ic",
            ful: "",
            ness: "",
          },
          i = "[aeiouy]",
          o = "[^aeiou][^aeiouy]*",
          r = i + "[aeiou]*",
          s = "^(" + o + ")?" + r + o,
          h = "^(" + o + ")?" + r + o + r + o;
        return function (n) {
          var r, u, c, p, f, d, v;
          if (n.length < 3) return n;
          if (
            ((c = n.substr(0, 1)),
            "y" == c && (n = c.toUpperCase() + n.substr(1)),
            (p = /^(.+?)(ss|i)es$/),
            (f = /^(.+?)([^s])s$/),
            p.test(n)
              ? (n = n.replace(p, "$1$2"))
              : f.test(n) && (n = n.replace(f, "$1$2")),
            (p = /^(.+?)eed$/),
            (f = /^(.+?)(ed|ing)$/),
            p.test(n))
          ) {
            var m = p.exec(n);
            (p = new RegExp(s)),
              p.test(m[1]) && ((p = /.$/), (n = n.replace(p, "")));
          } else if (f.test(n)) {
            var m = f.exec(n);
            (r = m[1]),
              (f = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]")),
              f.test(r) &&
                ((n = r),
                (f = /(at|bl|iz)$/),
                (d = new RegExp("([^aeiouylsz])\\1$")),
                (v = new RegExp("^" + o + i + "[^aeiouwxy]$")),
                f.test(n)
                  ? (n += "e")
                  : d.test(n)
                    ? ((p = /.$/), (n = n.replace(p, "")))
                    : v.test(n) && (n += "e"));
          }
          if (((p = /^(.+?[^aeiou])y$/), p.test(n))) {
            var m = p.exec(n);
            (r = m[1]), (n = r + "i");
          }
          if (
            ((p =
              /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/),
            p.test(n))
          ) {
            var m = p.exec(n);
            (r = m[1]),
              (u = m[2]),
              (p = new RegExp(s)),
              p.test(r) && (n = r + t[u]);
          }
          if (
            ((p = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/), p.test(n))
          ) {
            var m = p.exec(n);
            (r = m[1]),
              (u = m[2]),
              (p = new RegExp(s)),
              p.test(r) && (n = r + e[u]);
          }
          if (
            ((p =
              /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/),
            (f = /^(.+?)(s|t)(ion)$/),
            p.test(n))
          ) {
            var m = p.exec(n);
            (r = m[1]), (p = new RegExp(h)), p.test(r) && (n = r);
          } else if (f.test(n)) {
            var m = f.exec(n);
            (r = m[1] + m[2]), (f = new RegExp(h)), f.test(r) && (n = r);
          }
          if (((p = /^(.+?)e$/), p.test(n))) {
            var m = p.exec(n);
            (r = m[1]),
              (p = new RegExp(h)),
              (f = new RegExp(
                "^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$",
              )),
              (d = new RegExp("^" + o + i + "[^aeiouwxy]$")),
              (p.test(r) || (f.test(r) && !d.test(r))) && (n = r);
          }
          return (
            (p = /ll$/),
            (f = new RegExp(h)),
            p.test(n) && f.test(n) && ((p = /.$/), (n = n.replace(p, ""))),
            "y" == c && (n = c.toLowerCase() + n.substr(1)),
            n
          );
        };
      })()),
      t.Pipeline.registerFunction(t.stemmer, "stemmer"),
      (t.stopWordFilter = function (e) {
        return -1 === t.stopWordFilter.stopWords.indexOf(e) ? e : void 0;
      }),
      (t.stopWordFilter.stopWords = new t.SortedSet()),
      (t.stopWordFilter.stopWords.length = 119),
      (t.stopWordFilter.stopWords.elements = [
        "",
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
      ]),
      t.Pipeline.registerFunction(t.stopWordFilter, "stopWordFilter"),
      (t.trimmer = function (t) {
        return t.replace(/^\W+/, "").replace(/\W+$/, "");
      }),
      t.Pipeline.registerFunction(t.trimmer, "trimmer"),
      (t.TokenStore = function () {
        (this.root = { docs: {} }), (this.length = 0);
      }),
      (t.TokenStore.load = function (t) {
        var e = new this();
        return (e.root = t.root), (e.length = t.length), e;
      }),
      (t.TokenStore.prototype.add = function (t, e, n) {
        var n = n || this.root,
          i = t[0],
          o = t.slice(1);
        return (
          i in n || (n[i] = { docs: {} }),
          0 === o.length
            ? ((n[i].docs[e.ref] = e), void (this.length += 1))
            : this.add(o, e, n[i])
        );
      }),
      (t.TokenStore.prototype.has = function (t) {
        if (!t) return !1;
        for (var e = this.root, n = 0; n < t.length; n++) {
          if (!e[t[n]]) return !1;
          e = e[t[n]];
        }
        return !0;
      }),
      (t.TokenStore.prototype.getNode = function (t) {
        if (!t) return {};
        for (var e = this.root, n = 0; n < t.length; n++) {
          if (!e[t[n]]) return {};
          e = e[t[n]];
        }
        return e;
      }),
      (t.TokenStore.prototype.get = function (t, e) {
        return this.getNode(t, e).docs || {};
      }),
      (t.TokenStore.prototype.count = function (t, e) {
        return Object.keys(this.get(t, e)).length;
      }),
      (t.TokenStore.prototype.remove = function (t, e) {
        if (t) {
          for (var n = this.root, i = 0; i < t.length; i++) {
            if (!(t[i] in n)) return;
            n = n[t[i]];
          }
          delete n.docs[e];
        }
      }),
      (t.TokenStore.prototype.expand = function (t, e) {
        var n = this.getNode(t),
          i = n.docs || {},
          e = e || [];
        return (
          Object.keys(i).length && e.push(t),
          Object.keys(n).forEach(function (n) {
            "docs" !== n && e.concat(this.expand(t + n, e));
          }, this),
          e
        );
      }),
      (t.TokenStore.prototype.toJSON = function () {
        return { root: this.root, length: this.length };
      }),
      (function (t, e) {
        "function" == typeof define && define.amd
          ? define(e)
          : "object" == typeof exports
            ? (module.exports = e())
            : (t.lunr = e());
      })(this, function () {
        return t;
      });
  })();
var __extends =
    (this && this.__extends) ||
    (function () {
      var extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
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
  typedoc;
!(function (typedoc) {
  function registerService(constructor, name, priority) {
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
  }
  function registerComponent(constructor, selector, priority, namespace) {
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
  }
  typedoc.$html = $("html");
  var services = [],
    components = [];
  (typedoc.$document = $(document)),
    (typedoc.$window = $(window)),
    (typedoc.$body = $("body")),
    (typedoc.registerService = registerService),
    (typedoc.registerComponent = registerComponent),
    "undefined" != typeof Backbone &&
      (typedoc.Events = (function () {
        var res = function () {};
        return _.extend(res.prototype, Backbone.Events), res;
      })());
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
})(typedoc || (typedoc = {}));
var typedoc;
!(function (typedoc) {
  var FilterItem = (function () {
      function FilterItem(key, value) {
        (this.key = key),
          (this.value = value),
          (this.defaultValue = value),
          this.initialize(),
          window.localStorage[this.key] &&
            this.setValue(this.fromLocalStorage(window.localStorage[this.key]));
      }
      return (
        (FilterItem.prototype.initialize = function () {}),
        (FilterItem.prototype.handleValueChange = function (
          oldValue,
          newValue,
        ) {}),
        (FilterItem.prototype.fromLocalStorage = function (value) {
          return value;
        }),
        (FilterItem.prototype.toLocalStorage = function (value) {
          return value;
        }),
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
                  _this.setValue($(e.target).attr("data-value"));
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
})(typedoc || (typedoc = {}));
var typedoc;
!(function (typedoc) {
  var MenuHighlight = (function (_super) {
    function MenuHighlight(options) {
      var _this = _super.call(this, options) || this;
      return (
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
          this.$el.find("a").each(function (index, el) {
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
          (anchor = this.anchors[index]),
            (anchor.position = anchor.$anchor.offset().top);
        this.anchors.sort(function (a, b) {
          return a.position - b.position;
        }),
          this.onScroll(typedoc.viewport.scrollTop);
      }),
      (MenuHighlight.prototype.onScroll = function (scrollTop) {
        var anchors = this.anchors,
          index = this.index,
          count = anchors.length - 1;
        for (scrollTop += 5; index > 0 && anchors[index].position > scrollTop; )
          index -= 1;
        for (; index < count && anchors[index + 1].position < scrollTop; )
          index += 1;
        this.index != index &&
          (this.index > 0 &&
            this.anchors[this.index].$link.removeClass("focus"),
          (this.index = index),
          this.index > 0 && this.anchors[this.index].$link.addClass("focus"));
      }),
      MenuHighlight
    );
  })(Backbone.View);
  (typedoc.MenuHighlight = MenuHighlight),
    typedoc.registerComponent(MenuHighlight, ".menu-highlight");
})(typedoc || (typedoc = {}));
var typedoc;
!(function (typedoc) {
  var StickyMode,
    hasPositionSticky = typedoc.$html.hasClass("csspositionsticky");
  !(function (StickyMode) {
    (StickyMode[(StickyMode.None = 0)] = "None"),
      (StickyMode[(StickyMode.Secondary = 1)] = "Secondary"),
      (StickyMode[(StickyMode.Current = 2)] = "Current");
  })(StickyMode || (StickyMode = {}));
  var MenuSticky = (function (_super) {
    function MenuSticky(options) {
      var _this = _super.call(this, options) || this;
      return (
        (_this.state = ""),
        (_this.stickyMode = StickyMode.None),
        (_this.$current = _this.$el.find("> ul.current")),
        (_this.$navigation = _this.$el.parents(".menu-sticky-wrap")),
        (_this.$container = _this.$el.parents(".row")),
        _this.listenTo(typedoc.viewport, "resize", _this.onResize),
        hasPositionSticky ||
          _this.listenTo(typedoc.viewport, "scroll", _this.onScroll),
        _this.onResize(typedoc.viewport.width, typedoc.viewport.height),
        _this
      );
    }
    return (
      __extends(MenuSticky, _super),
      (MenuSticky.prototype.setState = function (state) {
        this.state != state &&
          ("" != this.state && this.$navigation.removeClass(this.state),
          (this.state = state),
          "" != this.state && this.$navigation.addClass(this.state));
      }),
      (MenuSticky.prototype.onResize = function (width, height) {
        (this.stickyMode = StickyMode.None), this.setState("");
        var containerTop = this.$container.offset().top,
          containerHeight = this.$container.height(),
          bottom = containerTop + containerHeight;
        if (this.$navigation.height() < containerHeight) {
          var elHeight = this.$el.height(),
            elTop = this.$el.offset().top;
          if (this.$current.length) {
            var currentHeight = this.$current.height(),
              currentTop = this.$current.offset().top;
            this.$navigation.css("top", containerTop - currentTop + 20),
              currentHeight < height &&
                ((this.stickyMode = StickyMode.Current),
                (this.stickyTop = currentTop),
                (this.stickyBottom =
                  bottom - elHeight + (currentTop - elTop) - 20));
          }
          elHeight < height &&
            (this.$navigation.css("top", containerTop - elTop + 20),
            (this.stickyMode = StickyMode.Secondary),
            (this.stickyTop = elTop),
            (this.stickyBottom = bottom - elHeight - 20));
        }
        hasPositionSticky
          ? this.stickyMode == StickyMode.Current
            ? this.setState("sticky-current")
            : this.stickyMode == StickyMode.Secondary
              ? this.setState("sticky")
              : this.setState("")
          : (this.$navigation.css("left", this.$navigation.offset().left),
            this.onScroll(typedoc.viewport.scrollTop));
      }),
      (MenuSticky.prototype.onScroll = function (scrollTop) {
        this.stickyMode == StickyMode.Current
          ? scrollTop > this.stickyBottom
            ? this.setState("sticky-bottom")
            : this.setState(
                scrollTop + 20 > this.stickyTop ? "sticky-current" : "",
              )
          : this.stickyMode == StickyMode.Secondary &&
            (scrollTop > this.stickyBottom
              ? this.setState("sticky-bottom")
              : this.setState(scrollTop + 20 > this.stickyTop ? "sticky" : ""));
      }),
      MenuSticky
    );
  })(Backbone.View);
  (typedoc.MenuSticky = MenuSticky),
    typedoc.registerComponent(MenuSticky, ".menu-sticky");
})(typedoc || (typedoc = {}));
var typedoc;
!(function (typedoc) {
  var search;
  !(function (search) {
    function createIndex() {
      function batch() {
        for (var cycles = 0; cycles++ < 100; )
          if ((index.add(rows[pos]), ++pos == length))
            return setLoadingState(SearchLoadingState.Ready);
        setTimeout(batch, 10);
      }
      (index = new lunr.Index()),
        index.pipeline.add(lunr.trimmer),
        index.field("name", { boost: 10 }),
        index.field("parent"),
        index.ref("id");
      var rows = search.data.rows,
        pos = 0,
        length = rows.length;
      batch();
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
      if (loadingState == SearchLoadingState.Ready) {
        $results.empty();
        for (
          var res = index.search(query), i = 0, c = Math.min(10, res.length);
          i < c;
          i++
        ) {
          var row = search.data.rows[res[i].ref],
            name = row.name;
          row.parent &&
            (name = '<span class="parent">' + row.parent + ".</span>" + name),
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
        $rel.length > 0 &&
          ($current.removeClass("current"), $rel.addClass("current"));
      }
    }
    function gotoCurrentResult() {
      var $current = $results.find(".current");
      0 == $current.length && ($current = $results.find("li:first-child")),
        $current.length > 0 &&
          ((window.location.href = $current.find("a").prop("href")),
          $field.blur());
    }
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
      index;
    $field
      .on("focusin", function () {
        setHasFocus(!0), loadIndex();
      })
      .on("focusout", function () {
        setTimeout(function () {
          return setHasFocus(!1);
        }, 100);
      })
      .on("input", function () {
        setQuery($.trim($field.val()));
      })
      .on("keydown", function (e) {
        13 == e.keyCode || 27 == e.keyCode || 38 == e.keyCode || 40 == e.keyCode
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
          (!hasFocus && e.keyCode > 47 && e.keyCode < 112 && $field.focus());
      });
  })((search = typedoc.search || (typedoc.search = {})));
})(typedoc || (typedoc = {}));
var typedoc;
!(function (typedoc) {
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
          (_this.index = -1),
          _this.createGroups(),
          _this.groups &&
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
            index > this.groups.length - 1 && (index = this.groups.length - 1),
            this.index != index)
          ) {
            var to = this.groups[index];
            if (this.index > -1) {
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
          e.preventDefault(),
            _(this.groups).forEach(function (group, index) {
              group.$signature.is(e.currentTarget) && _this.setIndex(index);
            });
        }),
        Signature
      );
    })(Backbone.View);
  typedoc.registerComponent(Signature, ".tsd-signatures");
})(typedoc || (typedoc = {}));
var typedoc;
!(function (typedoc) {
  var Toggle = (function (_super) {
    function Toggle(options) {
      var _this = _super.call(this, options) || this;
      return (
        (_this.className = _this.$el.attr("data-toggle")),
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
        typedoc.hasPointerMoved || (this.setActive(!0), event.preventDefault());
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
})(typedoc || (typedoc = {}));
var typedoc;
!(function (typedoc) {
  var Viewport = (function (_super) {
    function Viewport() {
      var _this = _super.call(this) || this;
      return (
        (_this.scrollTop = 0),
        (_this.width = 0),
        (_this.height = 0),
        typedoc.$window.on(
          "scroll",
          _(function () {
            return _this.onScroll();
          }).throttle(10),
        ),
        typedoc.$window.on(
          "resize",
          _(function () {
            return _this.onResize();
          }).throttle(10),
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
        (this.width = typedoc.$window.width()),
          (this.height = typedoc.$window.height()),
          this.trigger("resize", this.width, this.height);
      }),
      (Viewport.prototype.onScroll = function () {
        (this.scrollTop = typedoc.$window.scrollTop()),
          this.trigger("scroll", this.scrollTop);
      }),
      Viewport
    );
  })(typedoc.Events);
  (typedoc.Viewport = Viewport), typedoc.registerService(Viewport, "viewport");
})(typedoc || (typedoc = {}));
var typedoc;
!(function (typedoc) {
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
        (typedoc.pointerDownPosition.x = t.pageX),
          (typedoc.pointerDownPosition.y = t.pageY);
      })
      .on(typedoc.pointerMove, function (e) {
        if (typedoc.isPointerDown && !typedoc.hasPointerMoved) {
          var t =
              "touchstart" == typedoc.pointerDown
                ? e.originalEvent.targetTouches[0]
                : e,
            x = typedoc.pointerDownPosition.x - t.pageX,
            y = typedoc.pointerDownPosition.y - t.pageY;
          typedoc.hasPointerMoved = Math.sqrt(x * x + y * y) > 10;
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
})(typedoc || (typedoc = {}));
var typedoc;
!(function (typedoc) {
  function noTransition($el, callback) {
    $el.addClass("no-transition"),
      callback(),
      $el.offset(),
      $el.removeClass("no-transition");
  }
  function animateHeight($el, callback, success) {
    var to,
      from = $el.height();
    noTransition($el, function () {
      callback(),
        $el.css("height", ""),
        (to = $el.height()),
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
    (typedoc.animateHeight = animateHeight);
})(typedoc || (typedoc = {}));
var typedoc;
!(function (typedoc) {
  typedoc.app = new typedoc.Application();
})(typedoc || (typedoc = {}));
