if (function (t, e) {
  "use strict";

  "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
    if (!t.document) throw new Error("jQuery requires a window with a document");
    return e(t);
  } : e(t);
}("undefined" != typeof window ? window : this, function (t, e) {
  "use strict";

  var n = [],
      i = t.document,
      o = Object.getPrototypeOf,
      r = n.slice,
      a = n.concat,
      s = n.push,
      l = n.indexOf,
      c = {},
      u = c.toString,
      f = c.hasOwnProperty,
      d = f.toString,
      p = d.call(Object),
      h = {};

  function g(t, e) {
    var n = (e = e || i).createElement("script");
    n.text = t, e.head.appendChild(n).parentNode.removeChild(n);
  }

  var v = function v(t, e) {
    return new v.fn.init(t, e);
  },
      m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      y = /^-ms-/,
      b = /-([a-z])/g,
      w = function w(t, e) {
    return e.toUpperCase();
  };

  function x(t) {
    var e = !!t && "length" in t && t.length,
        n = v.type(t);
    return "function" !== n && !v.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
  }

  v.fn = v.prototype = {
    jquery: "3.2.1",
    constructor: v,
    length: 0,
    toArray: function toArray() {
      return r.call(this);
    },
    get: function get(t) {
      return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t];
    },
    pushStack: function pushStack(t) {
      var e = v.merge(this.constructor(), t);
      return e.prevObject = this, e;
    },
    each: function each(t) {
      return v.each(this, t);
    },
    map: function map(t) {
      return this.pushStack(v.map(this, function (e, n) {
        return t.call(e, n, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(r.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(t) {
      var e = this.length,
          n = +t + (t < 0 ? e : 0);
      return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice
  }, v.extend = v.fn.extend = function () {
    var t,
        e,
        n,
        i,
        o,
        r,
        a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        c = !1;

    for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || v.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++) {
      if (null != (t = arguments[s])) for (e in t) {
        n = a[e], a !== (i = t[e]) && (c && i && (v.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && v.isPlainObject(n) ? n : {}, a[e] = v.extend(c, r, i)) : void 0 !== i && (a[e] = i));
      }
    }

    return a;
  }, v.extend({
    expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(t) {
      throw new Error(t);
    },
    noop: function noop() {},
    isFunction: function isFunction(t) {
      return "function" === v.type(t);
    },
    isWindow: function isWindow(t) {
      return null != t && t === t.window;
    },
    isNumeric: function isNumeric(t) {
      var e = v.type(t);
      return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
    },
    isPlainObject: function isPlainObject(t) {
      var e, n;
      return !(!t || "[object Object]" !== u.call(t) || (e = o(t)) && ("function" != typeof (n = f.call(e, "constructor") && e.constructor) || d.call(n) !== p));
    },
    isEmptyObject: function isEmptyObject(t) {
      var e;

      for (e in t) {
        return !1;
      }

      return !0;
    },
    type: function type(t) {
      return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[u.call(t)] || "object" : typeof t;
    },
    globalEval: function globalEval(t) {
      g(t);
    },
    camelCase: function camelCase(t) {
      return t.replace(y, "ms-").replace(b, w);
    },
    each: function each(t, e) {
      var n,
          i = 0;
      if (x(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++) {
        ;
      } else for (i in t) {
        if (!1 === e.call(t[i], i, t[i])) break;
      }
      return t;
    },
    trim: function trim(t) {
      return null == t ? "" : (t + "").replace(m, "");
    },
    makeArray: function makeArray(t, e) {
      var n = e || [];
      return null != t && (x(Object(t)) ? v.merge(n, "string" == typeof t ? [t] : t) : s.call(n, t)), n;
    },
    inArray: function inArray(t, e, n) {
      return null == e ? -1 : l.call(e, t, n);
    },
    merge: function merge(t, e) {
      for (var n = +e.length, i = 0, o = t.length; i < n; i++) {
        t[o++] = e[i];
      }

      return t.length = o, t;
    },
    grep: function grep(t, e, n) {
      for (var i = [], o = 0, r = t.length, a = !n; o < r; o++) {
        !e(t[o], o) !== a && i.push(t[o]);
      }

      return i;
    },
    map: function map(t, e, n) {
      var i,
          o,
          r = 0,
          s = [];
      if (x(t)) for (i = t.length; r < i; r++) {
        null != (o = e(t[r], r, n)) && s.push(o);
      } else for (r in t) {
        null != (o = e(t[r], r, n)) && s.push(o);
      }
      return a.apply([], s);
    },
    guid: 1,
    proxy: function proxy(t, e) {
      var n, i, o;
      if ("string" == typeof e && (n = t[e], e = t, t = n), v.isFunction(t)) return i = r.call(arguments, 2), (o = function o() {
        return t.apply(e || this, i.concat(r.call(arguments)));
      }).guid = t.guid = t.guid || v.guid++, o;
    },
    now: Date.now,
    support: h
  }), "function" == typeof Symbol && (v.fn[Symbol.iterator] = n[Symbol.iterator]), v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
    c["[object " + e + "]"] = e.toLowerCase();
  });

  var C = function (t) {
    var e,
        n,
        i,
        o,
        r,
        a,
        s,
        l,
        c,
        u,
        f,
        d,
        p,
        h,
        g,
        v,
        m,
        y,
        b,
        w = "sizzle" + 1 * new Date(),
        x = t.document,
        C = 0,
        T = 0,
        D = at(),
        k = at(),
        S = at(),
        E = function E(t, e) {
      return t === e && (f = !0), 0;
    },
        $ = {}.hasOwnProperty,
        A = [],
        N = A.pop,
        L = A.push,
        j = A.push,
        I = A.slice,
        P = function P(t, e) {
      for (var n = 0, i = t.length; n < i; n++) {
        if (t[n] === e) return n;
      }

      return -1;
    },
        O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        R = "[\\x20\\t\\r\\n\\f]",
        H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        F = "\\[" + R + "*(" + H + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + R + "*\\]",
        q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
        B = new RegExp(R + "+", "g"),
        M = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
        _ = new RegExp("^" + R + "*," + R + "*"),
        U = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
        W = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
        z = new RegExp(q),
        G = new RegExp("^" + H + "$"),
        V = {
      ID: new RegExp("^#(" + H + ")"),
      CLASS: new RegExp("^\\.(" + H + ")"),
      TAG: new RegExp("^(" + H + "|[*])"),
      ATTR: new RegExp("^" + F),
      PSEUDO: new RegExp("^" + q),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + O + ")$", "i"),
      needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
    },
        Q = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
        tt = function tt(t, e, n) {
      var i = "0x" + e - 65536;
      return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        nt = function nt(t, e) {
      return e ? "\0" === t ? "\uFFFD" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
    },
        it = function it() {
      d();
    },
        ot = yt(function (t) {
      return !0 === t.disabled && ("form" in t || "label" in t);
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      j.apply(A = I.call(x.childNodes), x.childNodes);
    } catch (Tt) {
      j = {
        apply: A.length ? function (t, e) {
          L.apply(t, I.call(e));
        } : function (t, e) {
          for (var n = t.length, i = 0; t[n++] = e[i++];) {
            ;
          }

          t.length = n - 1;
        }
      };
    }

    function rt(t, e, i, o) {
      var r,
          s,
          c,
          u,
          f,
          h,
          m,
          y = e && e.ownerDocument,
          C = e ? e.nodeType : 9;
      if (i = i || [], "string" != typeof t || !t || 1 !== C && 9 !== C && 11 !== C) return i;

      if (!o && ((e ? e.ownerDocument || e : x) !== p && d(e), e = e || p, g)) {
        if (11 !== C && (f = J.exec(t))) if (r = f[1]) {
          if (9 === C) {
            if (!(c = e.getElementById(r))) return i;
            if (c.id === r) return i.push(c), i;
          } else if (y && (c = y.getElementById(r)) && b(e, c) && c.id === r) return i.push(c), i;
        } else {
          if (f[2]) return j.apply(i, e.getElementsByTagName(t)), i;
          if ((r = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return j.apply(i, e.getElementsByClassName(r)), i;
        }

        if (n.qsa && !S[t + " "] && (!v || !v.test(t))) {
          if (1 !== C) y = e, m = t;else if ("object" !== e.nodeName.toLowerCase()) {
            for ((u = e.getAttribute("id")) ? u = u.replace(et, nt) : e.setAttribute("id", u = w), s = (h = a(t)).length; s--;) {
              h[s] = "#" + u + " " + mt(h[s]);
            }

            m = h.join(","), y = K.test(t) && gt(e.parentNode) || e;
          }
          if (m) try {
            return j.apply(i, y.querySelectorAll(m)), i;
          } catch (T) {} finally {
            u === w && e.removeAttribute("id");
          }
        }
      }

      return l(t.replace(M, "$1"), e, i, o);
    }

    function at() {
      var t = [];
      return function e(n, o) {
        return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o;
      };
    }

    function st(t) {
      return t[w] = !0, t;
    }

    function lt(t) {
      var e = p.createElement("fieldset");

      try {
        return !!t(e);
      } catch (Tt) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), e = null;
      }
    }

    function ct(t, e) {
      for (var n = t.split("|"), o = n.length; o--;) {
        i.attrHandle[n[o]] = e;
      }
    }

    function ut(t, e) {
      var n = e && t,
          i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
      if (i) return i;
      if (n) for (; n = n.nextSibling;) {
        if (n === e) return -1;
      }
      return t ? 1 : -1;
    }

    function ft(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function dt(t) {
      return function (e) {
        var n = e.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && e.type === t;
      };
    }

    function pt(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ht(t) {
      return st(function (e) {
        return e = +e, st(function (n, i) {
          for (var o, r = t([], n.length, e), a = r.length; a--;) {
            n[o = r[a]] && (n[o] = !(i[o] = n[o]));
          }
        });
      });
    }

    function gt(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }

    for (e in n = rt.support = {}, r = rt.isXML = function (t) {
      var e = t && (t.ownerDocument || t).documentElement;
      return !!e && "HTML" !== e.nodeName;
    }, d = rt.setDocument = function (t) {
      var e,
          o,
          a = t ? t.ownerDocument || t : x;
      return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, g = !r(p), x !== p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", it, !1) : o.attachEvent && o.attachEvent("onunload", it)), n.attributes = lt(function (t) {
        return t.className = "i", !t.getAttribute("className");
      }), n.getElementsByTagName = lt(function (t) {
        return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Y.test(p.getElementsByClassName), n.getById = lt(function (t) {
        return h.appendChild(t).id = w, !p.getElementsByName || !p.getElementsByName(w).length;
      }), n.getById ? (i.filter.ID = function (t) {
        var e = t.replace(Z, tt);
        return function (t) {
          return t.getAttribute("id") === e;
        };
      }, i.find.ID = function (t, e) {
        if (void 0 !== e.getElementById && g) {
          var n = e.getElementById(t);
          return n ? [n] : [];
        }
      }) : (i.filter.ID = function (t) {
        var e = t.replace(Z, tt);
        return function (t) {
          var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
          return n && n.value === e;
        };
      }, i.find.ID = function (t, e) {
        if (void 0 !== e.getElementById && g) {
          var n,
              i,
              o,
              r = e.getElementById(t);

          if (r) {
            if ((n = r.getAttributeNode("id")) && n.value === t) return [r];

            for (o = e.getElementsByName(t), i = 0; r = o[i++];) {
              if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
            }
          }

          return [];
        }
      }), i.find.TAG = n.getElementsByTagName ? function (t, e) {
        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0;
      } : function (t, e) {
        var n,
            i = [],
            o = 0,
            r = e.getElementsByTagName(t);

        if ("*" === t) {
          for (; n = r[o++];) {
            1 === n.nodeType && i.push(n);
          }

          return i;
        }

        return r;
      }, i.find.CLASS = n.getElementsByClassName && function (t, e) {
        if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t);
      }, m = [], v = [], (n.qsa = Y.test(p.querySelectorAll)) && (lt(function (t) {
        h.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + O + ")"), t.querySelectorAll("[id~=" + w + "-]").length || v.push("~="), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]");
      }), lt(function (t) {
        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var e = p.createElement("input");
        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:");
      })), (n.matchesSelector = Y.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && lt(function (t) {
        n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), m.push("!=", q);
      }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), e = Y.test(h.compareDocumentPosition), b = e || Y.test(h.contains) ? function (t, e) {
        var n = 9 === t.nodeType ? t.documentElement : t,
            i = e && e.parentNode;
        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
      } : function (t, e) {
        if (e) for (; e = e.parentNode;) {
          if (e === t) return !0;
        }
        return !1;
      }, E = e ? function (t, e) {
        if (t === e) return f = !0, 0;
        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
        return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === p || t.ownerDocument === x && b(x, t) ? -1 : e === p || e.ownerDocument === x && b(x, e) ? 1 : u ? P(u, t) - P(u, e) : 0 : 4 & i ? -1 : 1);
      } : function (t, e) {
        if (t === e) return f = !0, 0;
        var n,
            i = 0,
            o = t.parentNode,
            r = e.parentNode,
            a = [t],
            s = [e];
        if (!o || !r) return t === p ? -1 : e === p ? 1 : o ? -1 : r ? 1 : u ? P(u, t) - P(u, e) : 0;
        if (o === r) return ut(t, e);

        for (n = t; n = n.parentNode;) {
          a.unshift(n);
        }

        for (n = e; n = n.parentNode;) {
          s.unshift(n);
        }

        for (; a[i] === s[i];) {
          i++;
        }

        return i ? ut(a[i], s[i]) : a[i] === x ? -1 : s[i] === x ? 1 : 0;
      }, p) : p;
    }, rt.matches = function (t, e) {
      return rt(t, null, null, e);
    }, rt.matchesSelector = function (t, e) {
      if ((t.ownerDocument || t) !== p && d(t), e = e.replace(W, "='$1']"), n.matchesSelector && g && !S[e + " "] && (!m || !m.test(e)) && (!v || !v.test(e))) try {
        var i = y.call(t, e);
        if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i;
      } catch (Tt) {}
      return rt(e, p, null, [t]).length > 0;
    }, rt.contains = function (t, e) {
      return (t.ownerDocument || t) !== p && d(t), b(t, e);
    }, rt.attr = function (t, e) {
      (t.ownerDocument || t) !== p && d(t);
      var o = i.attrHandle[e.toLowerCase()],
          r = o && $.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
      return void 0 !== r ? r : n.attributes || !g ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null;
    }, rt.escape = function (t) {
      return (t + "").replace(et, nt);
    }, rt.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }, rt.uniqueSort = function (t) {
      var e,
          i = [],
          o = 0,
          r = 0;

      if (f = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(E), f) {
        for (; e = t[r++];) {
          e === t[r] && (o = i.push(r));
        }

        for (; o--;) {
          t.splice(i[o], 1);
        }
      }

      return u = null, t;
    }, o = rt.getText = function (t) {
      var e,
          n = "",
          i = 0,
          r = t.nodeType;

      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof t.textContent) return t.textContent;

          for (t = t.firstChild; t; t = t.nextSibling) {
            n += o(t);
          }
        } else if (3 === r || 4 === r) return t.nodeValue;
      } else for (; e = t[i++];) {
        n += o(e);
      }

      return n;
    }, (i = rt.selectors = {
      cacheLength: 50,
      createPseudo: st,
      match: V,
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
        ATTR: function ATTR(t) {
          return t[1] = t[1].replace(Z, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(Z, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
        },
        CHILD: function CHILD(t) {
          return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t;
        },
        PSEUDO: function PSEUDO(t) {
          var e,
              n = !t[6] && t[2];
          return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && z.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(t) {
          var e = t.replace(Z, tt).toLowerCase();
          return "*" === t ? function () {
            return !0;
          } : function (t) {
            return t.nodeName && t.nodeName.toLowerCase() === e;
          };
        },
        CLASS: function CLASS(t) {
          var e = D[t + " "];
          return e || (e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) && D(t, function (t) {
            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(t, e, n) {
          return function (i) {
            var o = rt.attr(i, t);
            return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function CHILD(t, e, n, i, o) {
          var r = "nth" !== t.slice(0, 3),
              a = "last" !== t.slice(-4),
              s = "of-type" === e;
          return 1 === i && 0 === o ? function (t) {
            return !!t.parentNode;
          } : function (e, n, l) {
            var c,
                u,
                f,
                d,
                p,
                h,
                g = r !== a ? "nextSibling" : "previousSibling",
                v = e.parentNode,
                m = s && e.nodeName.toLowerCase(),
                y = !l && !s,
                b = !1;

            if (v) {
              if (r) {
                for (; g;) {
                  for (d = e; d = d[g];) {
                    if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                  }

                  h = g = "only" === t && !h && "nextSibling";
                }

                return !0;
              }

              if (h = [a ? v.firstChild : v.lastChild], a && y) {
                for (b = (p = (c = (u = (f = (d = v)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === C && c[1]) && c[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();) {
                  if (1 === d.nodeType && ++b && d === e) {
                    u[t] = [C, p, b];
                    break;
                  }
                }
              } else if (y && (b = p = (c = (u = (f = (d = e)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === C && c[1]), !1 === b) for (; (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++b || (y && ((u = (f = d[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] = [C, b]), d !== e));) {
                ;
              }

              return (b -= o) === i || b % i == 0 && b / i >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(t, e) {
          var n,
              o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
          return o[w] ? o(e) : o.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function (t, n) {
            for (var i, r = o(t, e), a = r.length; a--;) {
              t[i = P(t, r[a])] = !(n[i] = r[a]);
            }
          }) : function (t) {
            return o(t, 0, n);
          }) : o;
        }
      },
      pseudos: {
        not: st(function (t) {
          var e = [],
              n = [],
              i = s(t.replace(M, "$1"));
          return i[w] ? st(function (t, e, n, o) {
            for (var r, a = i(t, null, o, []), s = t.length; s--;) {
              (r = a[s]) && (t[s] = !(e[s] = r));
            }
          }) : function (t, o, r) {
            return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop();
          };
        }),
        has: st(function (t) {
          return function (e) {
            return rt(t, e).length > 0;
          };
        }),
        contains: st(function (t) {
          return t = t.replace(Z, tt), function (e) {
            return (e.textContent || e.innerText || o(e)).indexOf(t) > -1;
          };
        }),
        lang: st(function (t) {
          return G.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(Z, tt).toLowerCase(), function (e) {
            var n;

            do {
              if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var n = t.location && t.location.hash;
          return n && n.slice(1) === e.id;
        },
        root: function root(t) {
          return t === h;
        },
        focus: function focus(t) {
          return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
        },
        enabled: pt(!1),
        disabled: pt(!0),
        checked: function checked(t) {
          var e = t.nodeName.toLowerCase();
          return "input" === e && !!t.checked || "option" === e && !!t.selected;
        },
        selected: function selected(t) {
          return !0 === t.selected;
        },
        empty: function empty(t) {
          for (t = t.firstChild; t; t = t.nextSibling) {
            if (t.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(t) {
          return !i.pseudos.empty(t);
        },
        header: function header(t) {
          return X.test(t.nodeName);
        },
        input: function input(t) {
          return Q.test(t.nodeName);
        },
        button: function button(t) {
          var e = t.nodeName.toLowerCase();
          return "input" === e && "button" === t.type || "button" === e;
        },
        text: function text(t) {
          var e;
          return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
        },
        first: ht(function () {
          return [0];
        }),
        last: ht(function (t, e) {
          return [e - 1];
        }),
        eq: ht(function (t, e, n) {
          return [n < 0 ? n + e : n];
        }),
        even: ht(function (t, e) {
          for (var n = 0; n < e; n += 2) {
            t.push(n);
          }

          return t;
        }),
        odd: ht(function (t, e) {
          for (var n = 1; n < e; n += 2) {
            t.push(n);
          }

          return t;
        }),
        lt: ht(function (t, e, n) {
          for (var i = n < 0 ? n + e : n; --i >= 0;) {
            t.push(i);
          }

          return t;
        }),
        gt: ht(function (t, e, n) {
          for (var i = n < 0 ? n + e : n; ++i < e;) {
            t.push(i);
          }

          return t;
        })
      }
    }).pseudos.nth = i.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      i.pseudos[e] = ft(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      i.pseudos[e] = dt(e);
    }

    function vt() {}

    function mt(t) {
      for (var e = 0, n = t.length, i = ""; e < n; e++) {
        i += t[e].value;
      }

      return i;
    }

    function yt(t, e, n) {
      var i = e.dir,
          o = e.next,
          r = o || i,
          a = n && "parentNode" === r,
          s = T++;
      return e.first ? function (e, n, o) {
        for (; e = e[i];) {
          if (1 === e.nodeType || a) return t(e, n, o);
        }

        return !1;
      } : function (e, n, l) {
        var c,
            u,
            f,
            d = [C, s];

        if (l) {
          for (; e = e[i];) {
            if ((1 === e.nodeType || a) && t(e, n, l)) return !0;
          }
        } else for (; e = e[i];) {
          if (1 === e.nodeType || a) if (u = (f = e[w] || (e[w] = {}))[e.uniqueID] || (f[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;else {
            if ((c = u[r]) && c[0] === C && c[1] === s) return d[2] = c[2];
            if (u[r] = d, d[2] = t(e, n, l)) return !0;
          }
        }

        return !1;
      };
    }

    function bt(t) {
      return t.length > 1 ? function (e, n, i) {
        for (var o = t.length; o--;) {
          if (!t[o](e, n, i)) return !1;
        }

        return !0;
      } : t[0];
    }

    function wt(t, e, n, i, o) {
      for (var r, a = [], s = 0, l = t.length, c = null != e; s < l; s++) {
        (r = t[s]) && (n && !n(r, i, o) || (a.push(r), c && e.push(s)));
      }

      return a;
    }

    function xt(t, e, n, i, o, r) {
      return i && !i[w] && (i = xt(i)), o && !o[w] && (o = xt(o, r)), st(function (r, a, s, l) {
        var c,
            u,
            f,
            d = [],
            p = [],
            h = a.length,
            g = r || function (t, e, n) {
          for (var i = 0, o = e.length; i < o; i++) {
            rt(t, e[i], n);
          }

          return n;
        }(e || "*", s.nodeType ? [s] : s, []),
            v = !t || !r && e ? g : wt(g, d, t, s, l),
            m = n ? o || (r ? t : h || i) ? [] : a : v;

        if (n && n(v, m, s, l), i) for (c = wt(m, p), i(c, [], s, l), u = c.length; u--;) {
          (f = c[u]) && (m[p[u]] = !(v[p[u]] = f));
        }

        if (r) {
          if (o || t) {
            if (o) {
              for (c = [], u = m.length; u--;) {
                (f = m[u]) && c.push(v[u] = f);
              }

              o(null, m = [], c, l);
            }

            for (u = m.length; u--;) {
              (f = m[u]) && (c = o ? P(r, f) : d[u]) > -1 && (r[c] = !(a[c] = f));
            }
          }
        } else m = wt(m === a ? m.splice(h, m.length) : m), o ? o(null, a, m, l) : j.apply(a, m);
      });
    }

    function Ct(t) {
      for (var e, n, o, r = t.length, a = i.relative[t[0].type], s = a || i.relative[" "], l = a ? 1 : 0, u = yt(function (t) {
        return t === e;
      }, s, !0), f = yt(function (t) {
        return P(e, t) > -1;
      }, s, !0), d = [function (t, n, i) {
        var o = !a && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : f(t, n, i));
        return e = null, o;
      }]; l < r; l++) {
        if (n = i.relative[t[l].type]) d = [yt(bt(d), n)];else {
          if ((n = i.filter[t[l].type].apply(null, t[l].matches))[w]) {
            for (o = ++l; o < r && !i.relative[t[o].type]; o++) {
              ;
            }

            return xt(l > 1 && bt(d), l > 1 && mt(t.slice(0, l - 1).concat({
              value: " " === t[l - 2].type ? "*" : ""
            })).replace(M, "$1"), n, l < o && Ct(t.slice(l, o)), o < r && Ct(t = t.slice(o)), o < r && mt(t));
          }

          d.push(n);
        }
      }

      return bt(d);
    }

    return vt.prototype = i.filters = i.pseudos, i.setFilters = new vt(), a = rt.tokenize = function (t, e) {
      var n,
          o,
          r,
          a,
          s,
          l,
          c,
          u = k[t + " "];
      if (u) return e ? 0 : u.slice(0);

      for (s = t, l = [], c = i.preFilter; s;) {
        for (a in n && !(o = _.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), n = !1, (o = U.exec(s)) && (n = o.shift(), r.push({
          value: n,
          type: o[0].replace(M, " ")
        }), s = s.slice(n.length)), i.filter) {
          !(o = V[a].exec(s)) || c[a] && !(o = c[a](o)) || (n = o.shift(), r.push({
            value: n,
            type: a,
            matches: o
          }), s = s.slice(n.length));
        }

        if (!n) break;
      }

      return e ? s.length : s ? rt.error(t) : k(t, l).slice(0);
    }, s = rt.compile = function (t, e) {
      var n,
          o = [],
          r = [],
          s = S[t + " "];

      if (!s) {
        for (e || (e = a(t)), n = e.length; n--;) {
          (s = Ct(e[n]))[w] ? o.push(s) : r.push(s);
        }

        (s = S(t, function (t, e) {
          var n = e.length > 0,
              o = t.length > 0,
              r = function r(_r, a, s, l, u) {
            var f,
                h,
                v,
                m = 0,
                y = "0",
                b = _r && [],
                w = [],
                x = c,
                T = _r || o && i.find.TAG("*", u),
                D = C += null == x ? 1 : Math.random() || .1,
                k = T.length;

            for (u && (c = a === p || a || u); y !== k && null != (f = T[y]); y++) {
              if (o && f) {
                for (h = 0, a || f.ownerDocument === p || (d(f), s = !g); v = t[h++];) {
                  if (v(f, a || p, s)) {
                    l.push(f);
                    break;
                  }
                }

                u && (C = D);
              }

              n && ((f = !v && f) && m--, _r && b.push(f));
            }

            if (m += y, n && y !== m) {
              for (h = 0; v = e[h++];) {
                v(b, w, a, s);
              }

              if (_r) {
                if (m > 0) for (; y--;) {
                  b[y] || w[y] || (w[y] = N.call(l));
                }
                w = wt(w);
              }

              j.apply(l, w), u && !_r && w.length > 0 && m + e.length > 1 && rt.uniqueSort(l);
            }

            return u && (C = D, c = x), b;
          };

          return n ? st(r) : r;
        }(r, o))).selector = t;
      }

      return s;
    }, l = rt.select = function (t, e, n, o) {
      var r,
          l,
          c,
          u,
          f,
          d = "function" == typeof t && t,
          p = !o && a(t = d.selector || t);

      if (n = n || [], 1 === p.length) {
        if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
          if (!(e = (i.find.ID(c.matches[0].replace(Z, tt), e) || [])[0])) return n;
          d && (e = e.parentNode), t = t.slice(l.shift().value.length);
        }

        for (r = V.needsContext.test(t) ? 0 : l.length; r-- && !i.relative[u = (c = l[r]).type];) {
          if ((f = i.find[u]) && (o = f(c.matches[0].replace(Z, tt), K.test(l[0].type) && gt(e.parentNode) || e))) {
            if (l.splice(r, 1), !(t = o.length && mt(l))) return j.apply(n, o), n;
            break;
          }
        }
      }

      return (d || s(t, p))(o, e, !g, n, !e || K.test(t) && gt(e.parentNode) || e), n;
    }, n.sortStable = w.split("").sort(E).join("") === w, n.detectDuplicates = !!f, d(), n.sortDetached = lt(function (t) {
      return 1 & t.compareDocumentPosition(p.createElement("fieldset"));
    }), lt(function (t) {
      return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
    }) || ct("type|href|height|width", function (t, e, n) {
      if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
    }), n.attributes && lt(function (t) {
      return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
    }) || ct("value", function (t, e, n) {
      if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
    }), lt(function (t) {
      return null == t.getAttribute("disabled");
    }) || ct(O, function (t, e, n) {
      var i;
      if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
    }), rt;
  }(t);

  v.find = C, v.expr = C.selectors, v.expr[":"] = v.expr.pseudos, v.uniqueSort = v.unique = C.uniqueSort, v.text = C.getText, v.isXMLDoc = C.isXML, v.contains = C.contains, v.escapeSelector = C.escape;

  var T = function T(t, e, n) {
    for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) {
      if (1 === t.nodeType) {
        if (o && v(t).is(n)) break;
        i.push(t);
      }
    }

    return i;
  },
      D = function D(t, e) {
    for (var n = []; t; t = t.nextSibling) {
      1 === t.nodeType && t !== e && n.push(t);
    }

    return n;
  },
      k = v.expr.match.needsContext;

  function S(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  }

  var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      $ = /^.[^:#\[\.,]*$/;

  function A(t, e, n) {
    return v.isFunction(e) ? v.grep(t, function (t, i) {
      return !!e.call(t, i, t) !== n;
    }) : e.nodeType ? v.grep(t, function (t) {
      return t === e !== n;
    }) : "string" != typeof e ? v.grep(t, function (t) {
      return l.call(e, t) > -1 !== n;
    }) : $.test(e) ? v.filter(e, t, n) : (e = v.filter(e, t), v.grep(t, function (t) {
      return l.call(e, t) > -1 !== n && 1 === t.nodeType;
    }));
  }

  v.filter = function (t, e, n) {
    var i = e[0];
    return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? v.find.matchesSelector(i, t) ? [i] : [] : v.find.matches(t, v.grep(e, function (t) {
      return 1 === t.nodeType;
    }));
  }, v.fn.extend({
    find: function find(t) {
      var e,
          n,
          i = this.length,
          o = this;
      if ("string" != typeof t) return this.pushStack(v(t).filter(function () {
        for (e = 0; e < i; e++) {
          if (v.contains(o[e], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), e = 0; e < i; e++) {
        v.find(t, o[e], n);
      }

      return i > 1 ? v.uniqueSort(n) : n;
    },
    filter: function filter(t) {
      return this.pushStack(A(this, t || [], !1));
    },
    not: function not(t) {
      return this.pushStack(A(this, t || [], !0));
    },
    is: function is(t) {
      return !!A(this, "string" == typeof t && k.test(t) ? v(t) : t || [], !1).length;
    }
  });
  var N,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (v.fn.init = function (t, e, n) {
    var o, r;
    if (!t) return this;

    if (n = n || N, "string" == typeof t) {
      if (!(o = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : L.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);

      if (o[1]) {
        if (v.merge(this, v.parseHTML(o[1], (e = e instanceof v ? e[0] : e) && e.nodeType ? e.ownerDocument || e : i, !0)), E.test(o[1]) && v.isPlainObject(e)) for (o in e) {
          v.isFunction(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
        }
        return this;
      }

      return (r = i.getElementById(o[2])) && (this[0] = r, this.length = 1), this;
    }

    return t.nodeType ? (this[0] = t, this.length = 1, this) : v.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(v) : v.makeArray(t, this);
  }).prototype = v.fn, N = v(i);
  var j = /^(?:parents|prev(?:Until|All))/,
      I = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function P(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType;) {
      ;
    }

    return t;
  }

  v.fn.extend({
    has: function has(t) {
      var e = v(t, this),
          n = e.length;
      return this.filter(function () {
        for (var t = 0; t < n; t++) {
          if (v.contains(this, e[t])) return !0;
        }
      });
    },
    closest: function closest(t, e) {
      var n,
          i = 0,
          o = this.length,
          r = [],
          a = "string" != typeof t && v(t);
      if (!k.test(t)) for (; i < o; i++) {
        for (n = this[i]; n && n !== e; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && v.find.matchesSelector(n, t))) {
            r.push(n);
            break;
          }
        }
      }
      return this.pushStack(r.length > 1 ? v.uniqueSort(r) : r);
    },
    index: function index(t) {
      return t ? "string" == typeof t ? l.call(v(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(t, e) {
      return this.pushStack(v.uniqueSort(v.merge(this.get(), v(t, e))));
    },
    addBack: function addBack(t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }
  }), v.each({
    parent: function parent(t) {
      var e = t.parentNode;
      return e && 11 !== e.nodeType ? e : null;
    },
    parents: function parents(t) {
      return T(t, "parentNode");
    },
    parentsUntil: function parentsUntil(t, e, n) {
      return T(t, "parentNode", n);
    },
    next: function next(t) {
      return P(t, "nextSibling");
    },
    prev: function prev(t) {
      return P(t, "previousSibling");
    },
    nextAll: function nextAll(t) {
      return T(t, "nextSibling");
    },
    prevAll: function prevAll(t) {
      return T(t, "previousSibling");
    },
    nextUntil: function nextUntil(t, e, n) {
      return T(t, "nextSibling", n);
    },
    prevUntil: function prevUntil(t, e, n) {
      return T(t, "previousSibling", n);
    },
    siblings: function siblings(t) {
      return D((t.parentNode || {}).firstChild, t);
    },
    children: function children(t) {
      return D(t.firstChild);
    },
    contents: function contents(t) {
      return S(t, "iframe") ? t.contentDocument : (S(t, "template") && (t = t.content || t), v.merge([], t.childNodes));
    }
  }, function (t, e) {
    v.fn[t] = function (n, i) {
      var o = v.map(this, e, n);
      return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = v.filter(i, o)), this.length > 1 && (I[t] || v.uniqueSort(o), j.test(t) && o.reverse()), this.pushStack(o);
    };
  });
  var O = /[^\x20\t\r\n\f]+/g;

  function R(t) {
    return t;
  }

  function H(t) {
    throw t;
  }

  function F(t, e, n, i) {
    var o;

    try {
      t && v.isFunction(o = t.promise) ? o.call(t).done(e).fail(n) : t && v.isFunction(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i));
    } catch (t) {
      n.apply(void 0, [t]);
    }
  }

  v.Callbacks = function (t) {
    t = "string" == typeof t ? function (t) {
      var e = {};
      return v.each(t.match(O) || [], function (t, n) {
        e[n] = !0;
      }), e;
    }(t) : v.extend({}, t);

    var e,
        n,
        i,
        o,
        r = [],
        a = [],
        s = -1,
        l = function l() {
      for (o = o || t.once, i = e = !0; a.length; s = -1) {
        for (n = a.shift(); ++s < r.length;) {
          !1 === r[s].apply(n[0], n[1]) && t.stopOnFalse && (s = r.length, n = !1);
        }
      }

      t.memory || (n = !1), e = !1, o && (r = n ? [] : "");
    },
        c = {
      add: function add() {
        return r && (n && !e && (s = r.length - 1, a.push(n)), function e(n) {
          v.each(n, function (n, i) {
            v.isFunction(i) ? t.unique && c.has(i) || r.push(i) : i && i.length && "string" !== v.type(i) && e(i);
          });
        }(arguments), n && !e && l()), this;
      },
      remove: function remove() {
        return v.each(arguments, function (t, e) {
          for (var n; (n = v.inArray(e, r, n)) > -1;) {
            r.splice(n, 1), n <= s && s--;
          }
        }), this;
      },
      has: function has(t) {
        return t ? v.inArray(t, r) > -1 : r.length > 0;
      },
      empty: function empty() {
        return r && (r = []), this;
      },
      disable: function disable() {
        return o = a = [], r = n = "", this;
      },
      disabled: function disabled() {
        return !r;
      },
      lock: function lock() {
        return o = a = [], n || e || (r = n = ""), this;
      },
      locked: function locked() {
        return !!o;
      },
      fireWith: function fireWith(t, n) {
        return o || (n = [t, (n = n || []).slice ? n.slice() : n], a.push(n), e || l()), this;
      },
      fire: function fire() {
        return c.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!i;
      }
    };

    return c;
  }, v.extend({
    Deferred: function Deferred(e) {
      var n = [["notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2], ["resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          o = {
        state: function state() {
          return i;
        },
        always: function always() {
          return r.done(arguments).fail(arguments), this;
        },
        catch: function _catch(t) {
          return o.then(null, t);
        },
        pipe: function pipe() {
          var t = arguments;
          return v.Deferred(function (e) {
            v.each(n, function (n, i) {
              var o = v.isFunction(t[i[4]]) && t[i[4]];
              r[i[1]](function () {
                var t = o && o.apply(this, arguments);
                t && v.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments);
              });
            }), t = null;
          }).promise();
        },
        then: function then(e, i, o) {
          var r = 0;

          function a(e, n, i, o) {
            return function () {
              var s = this,
                  l = arguments,
                  c = function c() {
                var t, c;

                if (!(e < r)) {
                  if ((t = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                  v.isFunction(c = t && ("object" == typeof t || "function" == typeof t) && t.then) ? o ? c.call(t, a(r, n, R, o), a(r, n, H, o)) : c.call(t, a(++r, n, R, o), a(r, n, H, o), a(r, n, R, n.notifyWith)) : (i !== R && (s = void 0, l = [t]), (o || n.resolveWith)(s, l));
                }
              },
                  u = o ? c : function () {
                try {
                  c();
                } catch (t) {
                  v.Deferred.exceptionHook && v.Deferred.exceptionHook(t, u.stackTrace), e + 1 >= r && (i !== H && (s = void 0, l = [t]), n.rejectWith(s, l));
                }
              };

              e ? u() : (v.Deferred.getStackHook && (u.stackTrace = v.Deferred.getStackHook()), t.setTimeout(u));
            };
          }

          return v.Deferred(function (t) {
            n[0][3].add(a(0, t, v.isFunction(o) ? o : R, t.notifyWith)), n[1][3].add(a(0, t, v.isFunction(e) ? e : R)), n[2][3].add(a(0, t, v.isFunction(i) ? i : H));
          }).promise();
        },
        promise: function promise(t) {
          return null != t ? v.extend(t, o) : o;
        }
      },
          r = {};
      return v.each(n, function (t, e) {
        var a = e[2],
            s = e[5];
        o[e[1]] = a.add, s && a.add(function () {
          i = s;
        }, n[3 - t][2].disable, n[0][2].lock), a.add(e[3].fire), r[e[0]] = function () {
          return r[e[0] + "With"](this === r ? void 0 : this, arguments), this;
        }, r[e[0] + "With"] = a.fireWith;
      }), o.promise(r), e && e.call(r, r), r;
    },
    when: function when(t) {
      var e = arguments.length,
          n = e,
          i = Array(n),
          o = r.call(arguments),
          a = v.Deferred(),
          s = function s(t) {
        return function (n) {
          i[t] = this, o[t] = arguments.length > 1 ? r.call(arguments) : n, --e || a.resolveWith(i, o);
        };
      };

      if (e <= 1 && (F(t, a.done(s(n)).resolve, a.reject, !e), "pending" === a.state() || v.isFunction(o[n] && o[n].then))) return a.then();

      for (; n--;) {
        F(o[n], s(n), a.reject);
      }

      return a.promise();
    }
  });
  var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  v.Deferred.exceptionHook = function (e, n) {
    t.console && t.console.warn && e && q.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
  }, v.readyException = function (e) {
    t.setTimeout(function () {
      throw e;
    });
  };
  var B = v.Deferred();

  function M() {
    i.removeEventListener("DOMContentLoaded", M), t.removeEventListener("load", M), v.ready();
  }

  v.fn.ready = function (t) {
    return B.then(t).catch(function (t) {
      v.readyException(t);
    }), this;
  }, v.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(t) {
      (!0 === t ? --v.readyWait : v.isReady) || (v.isReady = !0, !0 !== t && --v.readyWait > 0 || B.resolveWith(i, [v]));
    }
  }), v.ready.then = B.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(v.ready) : (i.addEventListener("DOMContentLoaded", M), t.addEventListener("load", M));

  var _ = function _(t, e, n, i, o, r, a) {
    var s = 0,
        l = t.length,
        c = null == n;
    if ("object" === v.type(n)) for (s in o = !0, n) {
      _(t, e, s, n[s], !0, r, a);
    } else if (void 0 !== i && (o = !0, v.isFunction(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function e(t, _e, n) {
      return c.call(v(t), n);
    })), e)) for (; s < l; s++) {
      e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
    }
    return o ? t : c ? e.call(t) : l ? e(t[0], n) : r;
  },
      U = function U(t) {
    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
  };

  function W() {
    this.expando = v.expando + W.uid++;
  }

  W.uid = 1, W.prototype = {
    cache: function cache(t) {
      var e = t[this.expando];
      return e || (e = {}, U(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
        value: e,
        configurable: !0
      }))), e;
    },
    set: function set(t, e, n) {
      var i,
          o = this.cache(t);
      if ("string" == typeof e) o[v.camelCase(e)] = n;else for (i in e) {
        o[v.camelCase(i)] = e[i];
      }
      return o;
    },
    get: function get(t, e) {
      return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][v.camelCase(e)];
    },
    access: function access(t, e, n) {
      return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
    },
    remove: function remove(t, e) {
      var n,
          i = t[this.expando];

      if (void 0 !== i) {
        if (void 0 !== e) {
          n = (e = Array.isArray(e) ? e.map(v.camelCase) : (e = v.camelCase(e)) in i ? [e] : e.match(O) || []).length;

          for (; n--;) {
            delete i[e[n]];
          }
        }

        (void 0 === e || v.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
      }
    },
    hasData: function hasData(t) {
      var e = t[this.expando];
      return void 0 !== e && !v.isEmptyObject(e);
    }
  };
  var z = new W(),
      G = new W(),
      V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Q = /[A-Z]/g;

  function X(t, e, n) {
    var i;
    if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(Q, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
      try {
        n = function (t) {
          return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : V.test(t) ? JSON.parse(t) : t);
        }(n);
      } catch (o) {}

      G.set(t, e, n);
    } else n = void 0;
    return n;
  }

  v.extend({
    hasData: function hasData(t) {
      return G.hasData(t) || z.hasData(t);
    },
    data: function data(t, e, n) {
      return G.access(t, e, n);
    },
    removeData: function removeData(t, e) {
      G.remove(t, e);
    },
    _data: function _data(t, e, n) {
      return z.access(t, e, n);
    },
    _removeData: function _removeData(t, e) {
      z.remove(t, e);
    }
  }), v.fn.extend({
    data: function data(t, e) {
      var n,
          i,
          o,
          r = this[0],
          a = r && r.attributes;

      if (void 0 === t) {
        if (this.length && (o = G.get(r), 1 === r.nodeType && !z.get(r, "hasDataAttrs"))) {
          for (n = a.length; n--;) {
            a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = v.camelCase(i.slice(5)), X(r, i, o[i]));
          }

          z.set(r, "hasDataAttrs", !0);
        }

        return o;
      }

      return "object" == typeof t ? this.each(function () {
        G.set(this, t);
      }) : _(this, function (e) {
        var n;
        if (r && void 0 === e) return void 0 !== (n = G.get(r, t)) ? n : void 0 !== (n = X(r, t)) ? n : void 0;
        this.each(function () {
          G.set(this, t, e);
        });
      }, null, e, arguments.length > 1, null, !0);
    },
    removeData: function removeData(t) {
      return this.each(function () {
        G.remove(this, t);
      });
    }
  }), v.extend({
    queue: function queue(t, e, n) {
      var i;
      if (t) return i = z.get(t, e = (e || "fx") + "queue"), n && (!i || Array.isArray(n) ? i = z.access(t, e, v.makeArray(n)) : i.push(n)), i || [];
    },
    dequeue: function dequeue(t, e) {
      var n = v.queue(t, e = e || "fx"),
          i = n.length,
          o = n.shift(),
          r = v._queueHooks(t, e);

      "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function () {
        v.dequeue(t, e);
      }, r)), !i && r && r.empty.fire();
    },
    _queueHooks: function _queueHooks(t, e) {
      var n = e + "queueHooks";
      return z.get(t, n) || z.access(t, n, {
        empty: v.Callbacks("once memory").add(function () {
          z.remove(t, [e + "queue", n]);
        })
      });
    }
  }), v.fn.extend({
    queue: function queue(t, e) {
      var n = 2;
      return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? v.queue(this[0], t) : void 0 === e ? this : this.each(function () {
        var n = v.queue(this, t, e);
        v._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && v.dequeue(this, t);
      });
    },
    dequeue: function dequeue(t) {
      return this.each(function () {
        v.dequeue(this, t);
      });
    },
    clearQueue: function clearQueue(t) {
      return this.queue(t || "fx", []);
    },
    promise: function promise(t, e) {
      var n,
          i = 1,
          o = v.Deferred(),
          r = this,
          a = this.length,
          s = function s() {
        --i || o.resolveWith(r, [r]);
      };

      for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) {
        (n = z.get(r[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
      }

      return s(), o.promise(e);
    }
  });

  var Y = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      J = new RegExp("^(?:([+-])=|)(" + Y + ")([a-z%]*)$", "i"),
      K = ["Top", "Right", "Bottom", "Left"],
      Z = function Z(t, e) {
    return "none" === (t = e || t).style.display || "" === t.style.display && v.contains(t.ownerDocument, t) && "none" === v.css(t, "display");
  },
      tt = function tt(t, e, n, i) {
    var o,
        r,
        a = {};

    for (r in e) {
      a[r] = t.style[r], t.style[r] = e[r];
    }

    for (r in o = n.apply(t, i || []), e) {
      t.style[r] = a[r];
    }

    return o;
  };

  function et(t, e, n, i) {
    var o,
        r = 1,
        a = 20,
        s = i ? function () {
      return i.cur();
    } : function () {
      return v.css(t, e, "");
    },
        l = s(),
        c = n && n[3] || (v.cssNumber[e] ? "" : "px"),
        u = (v.cssNumber[e] || "px" !== c && +l) && J.exec(v.css(t, e));

    if (u && u[3] !== c) {
      c = c || u[3], n = n || [], u = +l || 1;

      do {
        v.style(t, e, (u /= r = r || ".5") + c);
      } while (r !== (r = s() / l) && 1 !== r && --a);
    }

    return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o;
  }

  var nt = {};

  function it(t) {
    var e,
        n = t.ownerDocument,
        i = t.nodeName,
        o = nt[i];
    return o || (e = n.body.appendChild(n.createElement(i)), o = v.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), nt[i] = o, o);
  }

  function ot(t, e) {
    for (var n, i, o = [], r = 0, a = t.length; r < a; r++) {
      (i = t[r]).style && (n = i.style.display, e ? ("none" === n && (o[r] = z.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Z(i) && (o[r] = it(i))) : "none" !== n && (o[r] = "none", z.set(i, "display", n)));
    }

    for (r = 0; r < a; r++) {
      null != o[r] && (t[r].style.display = o[r]);
    }

    return t;
  }

  v.fn.extend({
    show: function show() {
      return ot(this, !0);
    },
    hide: function hide() {
      return ot(this);
    },
    toggle: function toggle(t) {
      return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
        Z(this) ? v(this).show() : v(this).hide();
      });
    }
  });
  var rt = /^(?:checkbox|radio)$/i,
      at = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      st = /^$|\/(?:java|ecma)script/i,
      lt = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ct(t, e) {
    var n;
    return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && S(t, e) ? v.merge([t], n) : n;
  }

  function ut(t, e) {
    for (var n = 0, i = t.length; n < i; n++) {
      z.set(t[n], "globalEval", !e || z.get(e[n], "globalEval"));
    }
  }

  lt.optgroup = lt.option, lt.tbody = lt.tfoot = lt.colgroup = lt.caption = lt.thead, lt.th = lt.td;
  var ft,
      dt,
      pt = /<|&#?\w+;/;

  function ht(t, e, n, i, o) {
    for (var r, a, s, l, c, u, f = e.createDocumentFragment(), d = [], p = 0, h = t.length; p < h; p++) {
      if ((r = t[p]) || 0 === r) if ("object" === v.type(r)) v.merge(d, r.nodeType ? [r] : r);else if (pt.test(r)) {
        for (a = a || f.appendChild(e.createElement("div")), s = (at.exec(r) || ["", ""])[1].toLowerCase(), a.innerHTML = (l = lt[s] || lt._default)[1] + v.htmlPrefilter(r) + l[2], u = l[0]; u--;) {
          a = a.lastChild;
        }

        v.merge(d, a.childNodes), (a = f.firstChild).textContent = "";
      } else d.push(e.createTextNode(r));
    }

    for (f.textContent = "", p = 0; r = d[p++];) {
      if (i && v.inArray(r, i) > -1) o && o.push(r);else if (c = v.contains(r.ownerDocument, r), a = ct(f.appendChild(r), "script"), c && ut(a), n) for (u = 0; r = a[u++];) {
        st.test(r.type || "") && n.push(r);
      }
    }

    return f;
  }

  ft = i.createDocumentFragment().appendChild(i.createElement("div")), (dt = i.createElement("input")).setAttribute("type", "radio"), dt.setAttribute("checked", "checked"), dt.setAttribute("name", "t"), ft.appendChild(dt), h.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked, ft.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!ft.cloneNode(!0).lastChild.defaultValue;
  var gt = i.documentElement,
      vt = /^key/,
      mt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      yt = /^([^.]*)(?:\.(.+)|)/;

  function bt() {
    return !0;
  }

  function wt() {
    return !1;
  }

  function xt() {
    try {
      return i.activeElement;
    } catch (t) {}
  }

  function Ct(t, e, n, i, o, r) {
    var a, s;

    if ("object" == typeof e) {
      for (s in "string" != typeof n && (i = i || n, n = void 0), e) {
        Ct(t, s, n, i, e[s], r);
      }

      return t;
    }

    if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = wt;else if (!o) return t;
    return 1 === r && (a = o, (o = function o(t) {
      return v().off(t), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = v.guid++)), t.each(function () {
      v.event.add(this, e, o, i, n);
    });
  }

  v.event = {
    global: {},
    add: function add(t, e, n, i, o) {
      var r,
          a,
          s,
          l,
          c,
          u,
          f,
          d,
          p,
          h,
          g,
          m = z.get(t);
      if (m) for (n.handler && (n = (r = n).handler, o = r.selector), o && v.find.matchesSelector(gt, o), n.guid || (n.guid = v.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (e) {
        return void 0 !== v && v.event.triggered !== e.type ? v.event.dispatch.apply(t, arguments) : void 0;
      }), c = (e = (e || "").match(O) || [""]).length; c--;) {
        p = g = (s = yt.exec(e[c]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = v.event.special[p] || {}, f = v.event.special[p = (o ? f.delegateType : f.bindType) || p] || {}, u = v.extend({
          type: p,
          origType: g,
          data: i,
          handler: n,
          guid: n.guid,
          selector: o,
          needsContext: o && v.expr.match.needsContext.test(o),
          namespace: h.join(".")
        }, r), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, h, a) || t.addEventListener && t.addEventListener(p, a)), f.add && (f.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), v.event.global[p] = !0);
      }
    },
    remove: function remove(t, e, n, i, o) {
      var r,
          a,
          s,
          l,
          c,
          u,
          f,
          d,
          p,
          h,
          g,
          m = z.hasData(t) && z.get(t);

      if (m && (l = m.events)) {
        for (c = (e = (e || "").match(O) || [""]).length; c--;) {
          if (p = g = (s = yt.exec(e[c]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
            for (f = v.event.special[p] || {}, d = l[p = (i ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = d.length; r--;) {
              u = d[r], !o && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(r, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(t, u));
            }

            a && !d.length && (f.teardown && !1 !== f.teardown.call(t, h, m.handle) || v.removeEvent(t, p, m.handle), delete l[p]);
          } else for (p in l) {
            v.event.remove(t, p + e[c], n, i, !0);
          }
        }

        v.isEmptyObject(l) && z.remove(t, "handle events");
      }
    },
    dispatch: function dispatch(t) {
      var e,
          n,
          i,
          o,
          r,
          a,
          s = v.event.fix(t),
          l = new Array(arguments.length),
          c = (z.get(this, "events") || {})[s.type] || [],
          u = v.event.special[s.type] || {};

      for (l[0] = s, e = 1; e < arguments.length; e++) {
        l[e] = arguments[e];
      }

      if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
        for (a = v.event.handlers.call(this, s, c), e = 0; (o = a[e++]) && !s.isPropagationStopped();) {
          for (s.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) {
            s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((v.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
          }
        }

        return u.postDispatch && u.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function handlers(t, e) {
      var n,
          i,
          o,
          r,
          a,
          s = [],
          l = e.delegateCount,
          c = t.target;
      if (l && c.nodeType && !("click" === t.type && t.button >= 1)) for (; c !== this; c = c.parentNode || this) {
        if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
          for (r = [], a = {}, n = 0; n < l; n++) {
            void 0 === a[o = (i = e[n]).selector + " "] && (a[o] = i.needsContext ? v(o, this).index(c) > -1 : v.find(o, this, null, [c]).length), a[o] && r.push(i);
          }

          r.length && s.push({
            elem: c,
            handlers: r
          });
        }
      }
      return c = this, l < e.length && s.push({
        elem: c,
        handlers: e.slice(l)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(v.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v.isFunction(e) ? function () {
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
    fix: function fix(t) {
      return t[v.expando] ? t : new v.Event(t);
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== xt() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === xt() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1;
        },
        _default: function _default(t) {
          return S(t.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(t) {
          void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
        }
      }
    }
  }, v.removeEvent = function (t, e, n) {
    t.removeEventListener && t.removeEventListener(e, n);
  }, v.Event = function (t, e) {
    if (!(this instanceof v.Event)) return new v.Event(t, e);
    t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? bt : wt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && v.extend(this, e), this.timeStamp = t && t.timeStamp || v.now(), this[v.expando] = !0;
  }, v.Event.prototype = {
    constructor: v.Event,
    isDefaultPrevented: wt,
    isPropagationStopped: wt,
    isImmediatePropagationStopped: wt,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var t = this.originalEvent;
      this.isDefaultPrevented = bt, t && !this.isSimulated && t.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var t = this.originalEvent;
      this.isPropagationStopped = bt, t && !this.isSimulated && t.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var t = this.originalEvent;
      this.isImmediatePropagationStopped = bt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
    }
  }, v.each({
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
    which: function which(t) {
      var e = t.button;
      return null == t.which && vt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && mt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
    }
  }, v.event.addProp), v.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (t, e) {
    v.event.special[t] = {
      delegateType: e,
      bindType: e,
      handle: function handle(t) {
        var n,
            i = t.relatedTarget,
            o = t.handleObj;
        return i && (i === this || v.contains(this, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n;
      }
    };
  }), v.fn.extend({
    on: function on(t, e, n, i) {
      return Ct(this, t, e, n, i);
    },
    one: function one(t, e, n, i) {
      return Ct(this, t, e, n, i, 1);
    },
    off: function off(t, e, n) {
      var i, o;
      if (t && t.preventDefault && t.handleObj) return i = t.handleObj, v(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;

      if ("object" == typeof t) {
        for (o in t) {
          this.off(o, e, t[o]);
        }

        return this;
      }

      return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = wt), this.each(function () {
        v.event.remove(this, t, n, e);
      });
    }
  });
  var Tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Dt = /<script|<style|<link/i,
      kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      St = /^true\/(.*)/,
      Et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function $t(t, e) {
    return S(t, "table") && S(11 !== e.nodeType ? e : e.firstChild, "tr") && v(">tbody", t)[0] || t;
  }

  function At(t) {
    return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
  }

  function Nt(t) {
    var e = St.exec(t.type);
    return e ? t.type = e[1] : t.removeAttribute("type"), t;
  }

  function Lt(t, e) {
    var n, i, o, r, a, s, l, c;

    if (1 === e.nodeType) {
      if (z.hasData(t) && (r = z.access(t), a = z.set(e, r), c = r.events)) for (o in delete a.handle, a.events = {}, c) {
        for (n = 0, i = c[o].length; n < i; n++) {
          v.event.add(e, o, c[o][n]);
        }
      }
      G.hasData(t) && (s = G.access(t), l = v.extend({}, s), G.set(e, l));
    }
  }

  function jt(t, e, n, i) {
    e = a.apply([], e);
    var o,
        r,
        s,
        l,
        c,
        u,
        f = 0,
        d = t.length,
        p = d - 1,
        m = e[0],
        y = v.isFunction(m);
    if (y || d > 1 && "string" == typeof m && !h.checkClone && kt.test(m)) return t.each(function (o) {
      var r = t.eq(o);
      y && (e[0] = m.call(this, o, r.html())), jt(r, e, n, i);
    });

    if (d && (r = (o = ht(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
      for (l = (s = v.map(ct(o, "script"), At)).length; f < d; f++) {
        c = o, f !== p && (c = v.clone(c, !0, !0), l && v.merge(s, ct(c, "script"))), n.call(t[f], c, f);
      }

      if (l) for (u = s[s.length - 1].ownerDocument, v.map(s, Nt), f = 0; f < l; f++) {
        st.test((c = s[f]).type || "") && !z.access(c, "globalEval") && v.contains(u, c) && (c.src ? v._evalUrl && v._evalUrl(c.src) : g(c.textContent.replace(Et, ""), u));
      }
    }

    return t;
  }

  function It(t, e, n) {
    for (var i, o = e ? v.filter(e, t) : t, r = 0; null != (i = o[r]); r++) {
      n || 1 !== i.nodeType || v.cleanData(ct(i)), i.parentNode && (n && v.contains(i.ownerDocument, i) && ut(ct(i, "script")), i.parentNode.removeChild(i));
    }

    return t;
  }

  v.extend({
    htmlPrefilter: function htmlPrefilter(t) {
      return t.replace(Tt, "<$1></$2>");
    },
    clone: function clone(t, e, n) {
      var i,
          o,
          r,
          a,
          s,
          l,
          c,
          u = t.cloneNode(!0),
          f = v.contains(t.ownerDocument, t);
      if (!(h.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || v.isXMLDoc(t))) for (a = ct(u), i = 0, o = (r = ct(t)).length; i < o; i++) {
        s = r[i], "input" === (c = (l = a[i]).nodeName.toLowerCase()) && rt.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
      }
      if (e) if (n) for (r = r || ct(t), a = a || ct(u), i = 0, o = r.length; i < o; i++) {
        Lt(r[i], a[i]);
      } else Lt(t, u);
      return (a = ct(u, "script")).length > 0 && ut(a, !f && ct(t, "script")), u;
    },
    cleanData: function cleanData(t) {
      for (var e, n, i, o = v.event.special, r = 0; void 0 !== (n = t[r]); r++) {
        if (U(n)) {
          if (e = n[z.expando]) {
            if (e.events) for (i in e.events) {
              o[i] ? v.event.remove(n, i) : v.removeEvent(n, i, e.handle);
            }
            n[z.expando] = void 0;
          }

          n[G.expando] && (n[G.expando] = void 0);
        }
      }
    }
  }), v.fn.extend({
    detach: function detach(t) {
      return It(this, t, !0);
    },
    remove: function remove(t) {
      return It(this, t);
    },
    text: function text(t) {
      return _(this, function (t) {
        return void 0 === t ? v.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
        });
      }, null, t, arguments.length);
    },
    append: function append() {
      return jt(this, arguments, function (t) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $t(this, t).appendChild(t);
      });
    },
    prepend: function prepend() {
      return jt(this, arguments, function (t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = $t(this, t);
          e.insertBefore(t, e.firstChild);
        }
      });
    },
    before: function before() {
      return jt(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this);
      });
    },
    after: function after() {
      return jt(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var t, e = 0; null != (t = this[e]); e++) {
        1 === t.nodeType && (v.cleanData(ct(t, !1)), t.textContent = "");
      }

      return this;
    },
    clone: function clone(t, e) {
      return t = null != t && t, e = null == e ? t : e, this.map(function () {
        return v.clone(this, t, e);
      });
    },
    html: function html(t) {
      return _(this, function (t) {
        var e = this[0] || {},
            n = 0,
            i = this.length;
        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;

        if ("string" == typeof t && !Dt.test(t) && !lt[(at.exec(t) || ["", ""])[1].toLowerCase()]) {
          t = v.htmlPrefilter(t);

          try {
            for (; n < i; n++) {
              1 === (e = this[n] || {}).nodeType && (v.cleanData(ct(e, !1)), e.innerHTML = t);
            }

            e = 0;
          } catch (o) {}
        }

        e && this.empty().append(t);
      }, null, t, arguments.length);
    },
    replaceWith: function replaceWith() {
      var t = [];
      return jt(this, arguments, function (e) {
        var n = this.parentNode;
        v.inArray(this, t) < 0 && (v.cleanData(ct(this)), n && n.replaceChild(e, this));
      }, t);
    }
  }), v.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (t, e) {
    v.fn[t] = function (t) {
      for (var n, i = [], o = v(t), r = o.length - 1, a = 0; a <= r; a++) {
        n = a === r ? this : this.clone(!0), v(o[a])[e](n), s.apply(i, n.get());
      }

      return this.pushStack(i);
    };
  });

  var Pt = /^margin/,
      Ot = new RegExp("^(" + Y + ")(?!px)[a-z%]+$", "i"),
      Rt = function Rt(e) {
    var n = e.ownerDocument.defaultView;
    return n && n.opener || (n = t), n.getComputedStyle(e);
  };

  function Ht(t, e, n) {
    var i,
        o,
        r,
        a,
        s = t.style;
    return (n = n || Rt(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || v.contains(t.ownerDocument, t) || (a = v.style(t, e)), !h.pixelMarginRight() && Ot.test(a) && Pt.test(e) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a;
  }

  function Ft(t, e) {
    return {
      get: function get() {
        if (!t()) return (this.get = e).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", gt.appendChild(s);
        var e = t.getComputedStyle(l);
        n = "1%" !== e.top, a = "2px" === e.marginLeft, o = "4px" === e.width, l.style.marginRight = "50%", r = "4px" === e.marginRight, gt.removeChild(s), l = null;
      }
    }

    var n,
        o,
        r,
        a,
        s = i.createElement("div"),
        l = i.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === l.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(l), v.extend(h, {
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      boxSizingReliable: function boxSizingReliable() {
        return e(), o;
      },
      pixelMarginRight: function pixelMarginRight() {
        return e(), r;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), a;
      }
    }));
  }();
  var qt = /^(none|table(?!-c[ea]).+)/,
      Bt = /^--/,
      Mt = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      _t = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Ut = ["Webkit", "Moz", "ms"],
      Wt = i.createElement("div").style;

  function zt(t) {
    var e = v.cssProps[t];
    return e || (e = v.cssProps[t] = function (t) {
      if (t in Wt) return t;

      for (var e = t[0].toUpperCase() + t.slice(1), n = Ut.length; n--;) {
        if ((t = Ut[n] + e) in Wt) return t;
      }
    }(t) || t), e;
  }

  function Gt(t, e, n) {
    var i = J.exec(e);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
  }

  function Vt(t, e, n, i, o) {
    var r,
        a = 0;

    for (r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0; r < 4; r += 2) {
      "margin" === n && (a += v.css(t, n + K[r], !0, o)), i ? ("content" === n && (a -= v.css(t, "padding" + K[r], !0, o)), "margin" !== n && (a -= v.css(t, "border" + K[r] + "Width", !0, o))) : (a += v.css(t, "padding" + K[r], !0, o), "padding" !== n && (a += v.css(t, "border" + K[r] + "Width", !0, o)));
    }

    return a;
  }

  function Qt(t, e, n) {
    var i,
        o = Rt(t),
        r = Ht(t, e, o),
        a = "border-box" === v.css(t, "boxSizing", !1, o);
    return Ot.test(r) ? r : (i = a && (h.boxSizingReliable() || r === t.style[e]), "auto" === r && (r = t["offset" + e[0].toUpperCase() + e.slice(1)]), (r = parseFloat(r) || 0) + Vt(t, e, n || (a ? "border" : "content"), i, o) + "px");
  }

  function Xt(t, e, n, i, o) {
    return new Xt.prototype.init(t, e, n, i, o);
  }

  v.extend({
    cssHooks: {
      opacity: {
        get: function get(t, e) {
          if (e) {
            var n = Ht(t, "opacity");
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
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      float: "cssFloat"
    },
    style: function style(t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var o,
            r,
            a,
            s = v.camelCase(e),
            l = Bt.test(e),
            c = t.style;
        if (l || (e = zt(s)), a = v.cssHooks[e] || v.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(t, !1, i)) ? o : c[e];
        "string" == (r = typeof n) && (o = J.exec(n)) && o[1] && (n = et(t, e, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (v.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n));
      }
    },
    css: function css(t, e, n, i) {
      var o,
          r,
          a,
          s = v.camelCase(e);
      return Bt.test(e) || (e = zt(s)), (a = v.cssHooks[e] || v.cssHooks[s]) && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = Ht(t, e, i)), "normal" === o && e in _t && (o = _t[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
    }
  }), v.each(["height", "width"], function (t, e) {
    v.cssHooks[e] = {
      get: function get(t, n, i) {
        if (n) return !qt.test(v.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Qt(t, e, i) : tt(t, Mt, function () {
          return Qt(t, e, i);
        });
      },
      set: function set(t, n, i) {
        var o,
            r = i && Rt(t),
            a = i && Vt(t, e, i, "border-box" === v.css(t, "boxSizing", !1, r), r);
        return a && (o = J.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = v.css(t, e)), Gt(0, n, a);
      }
    };
  }), v.cssHooks.marginLeft = Ft(h.reliableMarginLeft, function (t, e) {
    if (e) return (parseFloat(Ht(t, "marginLeft")) || t.getBoundingClientRect().left - tt(t, {
      marginLeft: 0
    }, function () {
      return t.getBoundingClientRect().left;
    })) + "px";
  }), v.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (t, e) {
    v.cssHooks[t + e] = {
      expand: function expand(n) {
        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
          o[t + K[i] + e] = r[i] || r[i - 2] || r[0];
        }

        return o;
      }
    }, Pt.test(t) || (v.cssHooks[t + e].set = Gt);
  }), v.fn.extend({
    css: function css(t, e) {
      return _(this, function (t, e, n) {
        var i,
            o,
            r = {},
            a = 0;

        if (Array.isArray(e)) {
          for (i = Rt(t), o = e.length; a < o; a++) {
            r[e[a]] = v.css(t, e[a], !1, i);
          }

          return r;
        }

        return void 0 !== n ? v.style(t, e, n) : v.css(t, e);
      }, t, e, arguments.length > 1);
    }
  }), v.Tween = Xt, (Xt.prototype = {
    constructor: Xt,
    init: function init(t, e, n, i, o, r) {
      this.elem = t, this.prop = n, this.easing = o || v.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (v.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var t = Xt.propHooks[this.prop];
      return t && t.get ? t.get(this) : Xt.propHooks._default.get(this);
    },
    run: function run(t) {
      var e,
          n = Xt.propHooks[this.prop];
      return this.pos = e = this.options.duration ? v.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Xt.propHooks._default.set(this), this;
    }
  }).init.prototype = Xt.prototype, (Xt.propHooks = {
    _default: {
      get: function get(t) {
        var e;
        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = v.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
      },
      set: function set(t) {
        v.fx.step[t.prop] ? v.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[v.cssProps[t.prop]] && !v.cssHooks[t.prop] ? t.elem[t.prop] = t.now : v.style(t.elem, t.prop, t.now + t.unit);
      }
    }
  }).scrollTop = Xt.propHooks.scrollLeft = {
    set: function set(t) {
      t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
    }
  }, v.easing = {
    linear: function linear(t) {
      return t;
    },
    swing: function swing(t) {
      return .5 - Math.cos(t * Math.PI) / 2;
    },
    _default: "swing"
  }, v.fx = Xt.prototype.init, v.fx.step = {};
  var Yt,
      Jt,
      Kt = /^(?:toggle|show|hide)$/,
      Zt = /queueHooks$/;

  function te() {
    Jt && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(te) : t.setTimeout(te, v.fx.interval), v.fx.tick());
  }

  function ee() {
    return t.setTimeout(function () {
      Yt = void 0;
    }), Yt = v.now();
  }

  function ne(t, e) {
    var n,
        i = 0,
        o = {
      height: t
    };

    for (e = e ? 1 : 0; i < 4; i += 2 - e) {
      o["margin" + (n = K[i])] = o["padding" + n] = t;
    }

    return e && (o.opacity = o.width = t), o;
  }

  function ie(t, e, n) {
    for (var i, o = (oe.tweeners[e] || []).concat(oe.tweeners["*"]), r = 0, a = o.length; r < a; r++) {
      if (i = o[r].call(n, e, t)) return i;
    }
  }

  function oe(t, e, n) {
    var i,
        o,
        r = 0,
        a = oe.prefilters.length,
        s = v.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (o) return !1;

      for (var e = Yt || ee(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, a = c.tweens.length; r < a; r++) {
        c.tweens[r].run(i);
      }

      return s.notifyWith(t, [c, i, n]), i < 1 && a ? n : (a || s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c]), !1);
    },
        c = s.promise({
      elem: t,
      props: v.extend({}, e),
      opts: v.extend(!0, {
        specialEasing: {},
        easing: v.easing._default
      }, n),
      originalProperties: e,
      originalOptions: n,
      startTime: Yt || ee(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(e, n) {
        var i = v.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
        return c.tweens.push(i), i;
      },
      stop: function stop(e) {
        var n = 0,
            i = e ? c.tweens.length : 0;
        if (o) return this;

        for (o = !0; n < i; n++) {
          c.tweens[n].run(1);
        }

        return e ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e])) : s.rejectWith(t, [c, e]), this;
      }
    }),
        u = c.props;

    for (function (t, e) {
      var n, i, o, r, a;

      for (n in t) {
        if (o = e[i = v.camelCase(n)], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (a = v.cssHooks[i]) && ("expand" in a)) for (n in r = a.expand(r), delete t[i], r) {
          (n in t) || (t[n] = r[n], e[n] = o);
        } else e[i] = o;
      }
    }(u, c.opts.specialEasing); r < a; r++) {
      if (i = oe.prefilters[r].call(c, t, u, c.opts)) return v.isFunction(i.stop) && (v._queueHooks(c.elem, c.opts.queue).stop = v.proxy(i.stop, i)), i;
    }

    return v.map(u, ie, c), v.isFunction(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), v.fx.timer(v.extend(l, {
      elem: t,
      anim: c,
      queue: c.opts.queue
    })), c;
  }

  v.Animation = v.extend(oe, {
    tweeners: {
      "*": [function (t, e) {
        var n = this.createTween(t, e);
        return et(n.elem, t, J.exec(e), n), n;
      }]
    },
    tweener: function tweener(t, e) {
      v.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(O);

      for (var n, i = 0, o = t.length; i < o; i++) {
        (oe.tweeners[n = t[i]] = oe.tweeners[n] || []).unshift(e);
      }
    },
    prefilters: [function (t, e, n) {
      var i,
          o,
          r,
          a,
          s,
          l,
          c,
          u,
          f = "width" in e || "height" in e,
          d = this,
          p = {},
          h = t.style,
          g = t.nodeType && Z(t),
          m = z.get(t, "fxshow");

      for (i in n.queue || (null == (a = v._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, d.always(function () {
        d.always(function () {
          a.unqueued--, v.queue(t, "fx").length || a.empty.fire();
        });
      })), e) {
        if (Kt.test(o = e[i])) {
          if (delete e[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
            if ("show" !== o || !m || void 0 === m[i]) continue;
            g = !0;
          }

          p[i] = m && m[i] || v.style(t, i);
        }
      }

      if ((l = !v.isEmptyObject(e)) || !v.isEmptyObject(p)) for (i in f && 1 === t.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = z.get(t, "display")), "none" === (u = v.css(t, "display")) && (c ? u = c : (ot([t], !0), c = t.style.display || c, u = v.css(t, "display"), ot([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === v.css(t, "float") && (l || (d.done(function () {
        h.display = c;
      }), null == c && (c = "none" === (u = h.display) ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), l = !1, p) {
        l || (m ? "hidden" in m && (g = m.hidden) : m = z.access(t, "fxshow", {
          display: c
        }), r && (m.hidden = !g), g && ot([t], !0), d.done(function () {
          for (i in g || ot([t]), z.remove(t, "fxshow"), p) {
            v.style(t, i, p[i]);
          }
        })), l = ie(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0));
      }
    }],
    prefilter: function prefilter(t, e) {
      e ? oe.prefilters.unshift(t) : oe.prefilters.push(t);
    }
  }), v.speed = function (t, e, n) {
    var i = t && "object" == typeof t ? v.extend({}, t) : {
      complete: n || !n && e || v.isFunction(t) && t,
      duration: t,
      easing: n && e || e && !v.isFunction(e) && e
    };
    return v.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration = i.duration in v.fx.speeds ? v.fx.speeds[i.duration] : v.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      v.isFunction(i.old) && i.old.call(this), i.queue && v.dequeue(this, i.queue);
    }, i;
  }, v.fn.extend({
    fadeTo: function fadeTo(t, e, n, i) {
      return this.filter(Z).css("opacity", 0).show().end().animate({
        opacity: e
      }, t, n, i);
    },
    animate: function animate(t, e, n, i) {
      var o = v.isEmptyObject(t),
          r = v.speed(e, n, i),
          a = function a() {
        var e = oe(this, v.extend({}, t), r);
        (o || z.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a);
    },
    stop: function stop(t, e, n) {
      var i = function i(t) {
        var e = t.stop;
        delete t.stop, e(n);
      };

      return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
        var e = !0,
            o = null != t && t + "queueHooks",
            r = v.timers,
            a = z.get(this);
        if (o) a[o] && a[o].stop && i(a[o]);else for (o in a) {
          a[o] && a[o].stop && Zt.test(o) && i(a[o]);
        }

        for (o = r.length; o--;) {
          r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
        }

        !e && n || v.dequeue(this, t);
      });
    },
    finish: function finish(t) {
      return !1 !== t && (t = t || "fx"), this.each(function () {
        var e,
            n = z.get(this),
            i = n[t + "queue"],
            o = n[t + "queueHooks"],
            r = v.timers,
            a = i ? i.length : 0;

        for (n.finish = !0, v.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) {
          r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
        }

        for (e = 0; e < a; e++) {
          i[e] && i[e].finish && i[e].finish.call(this);
        }

        delete n.finish;
      });
    }
  }), v.each(["toggle", "show", "hide"], function (t, e) {
    var n = v.fn[e];

    v.fn[e] = function (t, i, o) {
      return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ne(e, !0), t, i, o);
    };
  }), v.each({
    slideDown: ne("show"),
    slideUp: ne("hide"),
    slideToggle: ne("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (t, e) {
    v.fn[t] = function (t, n, i) {
      return this.animate(e, t, n, i);
    };
  }), v.timers = [], v.fx.tick = function () {
    var t,
        e = 0,
        n = v.timers;

    for (Yt = v.now(); e < n.length; e++) {
      (t = n[e])() || n[e] !== t || n.splice(e--, 1);
    }

    n.length || v.fx.stop(), Yt = void 0;
  }, v.fx.timer = function (t) {
    v.timers.push(t), v.fx.start();
  }, v.fx.interval = 13, v.fx.start = function () {
    Jt || (Jt = !0, te());
  }, v.fx.stop = function () {
    Jt = null;
  }, v.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, v.fn.delay = function (e, n) {
    return e = v.fx && v.fx.speeds[e] || e, this.queue(n = n || "fx", function (n, i) {
      var o = t.setTimeout(n, e);

      i.stop = function () {
        t.clearTimeout(o);
      };
    });
  }, function () {
    var t = i.createElement("input"),
        e = i.createElement("select").appendChild(i.createElement("option"));
    t.type = "checkbox", h.checkOn = "" !== t.value, h.optSelected = e.selected, (t = i.createElement("input")).value = "t", t.type = "radio", h.radioValue = "t" === t.value;
  }();
  var re,
      ae = v.expr.attrHandle;
  v.fn.extend({
    attr: function attr(t, e) {
      return _(this, v.attr, t, e, arguments.length > 1);
    },
    removeAttr: function removeAttr(t) {
      return this.each(function () {
        v.removeAttr(this, t);
      });
    }
  }), v.extend({
    attr: function attr(t, e, n) {
      var i,
          o,
          r = t.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? v.prop(t, e, n) : (1 === r && v.isXMLDoc(t) || (o = v.attrHooks[e.toLowerCase()] || (v.expr.match.bool.test(e) ? re : void 0)), void 0 !== n ? null === n ? void v.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = v.find.attr(t, e)) ? void 0 : i);
    },
    attrHooks: {
      type: {
        set: function set(t, e) {
          if (!h.radioValue && "radio" === e && S(t, "input")) {
            var n = t.value;
            return t.setAttribute("type", e), n && (t.value = n), e;
          }
        }
      }
    },
    removeAttr: function removeAttr(t, e) {
      var n,
          i = 0,
          o = e && e.match(O);
      if (o && 1 === t.nodeType) for (; n = o[i++];) {
        t.removeAttribute(n);
      }
    }
  }), re = {
    set: function set(t, e, n) {
      return !1 === e ? v.removeAttr(t, n) : t.setAttribute(n, n), n;
    }
  }, v.each(v.expr.match.bool.source.match(/\w+/g), function (t, e) {
    var n = ae[e] || v.find.attr;

    ae[e] = function (t, e, i) {
      var o,
          r,
          a = e.toLowerCase();
      return i || (r = ae[a], ae[a] = o, o = null != n(t, e, i) ? a : null, ae[a] = r), o;
    };
  });
  var se = /^(?:input|select|textarea|button)$/i,
      le = /^(?:a|area)$/i;

  function ce(t) {
    return (t.match(O) || []).join(" ");
  }

  function ue(t) {
    return t.getAttribute && t.getAttribute("class") || "";
  }

  v.fn.extend({
    prop: function prop(t, e) {
      return _(this, v.prop, t, e, arguments.length > 1);
    },
    removeProp: function removeProp(t) {
      return this.each(function () {
        delete this[v.propFix[t] || t];
      });
    }
  }), v.extend({
    prop: function prop(t, e, n) {
      var i,
          o,
          r = t.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return 1 === r && v.isXMLDoc(t) || (o = v.propHooks[e = v.propFix[e] || e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e];
    },
    propHooks: {
      tabIndex: {
        get: function get(t) {
          var e = v.find.attr(t, "tabindex");
          return e ? parseInt(e, 10) : se.test(t.nodeName) || le.test(t.nodeName) && t.href ? 0 : -1;
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), h.optSelected || (v.propHooks.selected = {
    get: function get(t) {
      return null;
    },
    set: function set(t) {}
  }), v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    v.propFix[this.toLowerCase()] = this;
  }), v.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          i,
          o,
          r,
          a,
          s,
          l = 0;
      if (v.isFunction(t)) return this.each(function (e) {
        v(this).addClass(t.call(this, e, ue(this)));
      });
      if ("string" == typeof t && t) for (e = t.match(O) || []; n = this[l++];) {
        if (o = ue(n), i = 1 === n.nodeType && " " + ce(o) + " ") {
          for (a = 0; r = e[a++];) {
            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
          }

          o !== (s = ce(i)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          i,
          o,
          r,
          a,
          s,
          l = 0;
      if (v.isFunction(t)) return this.each(function (e) {
        v(this).removeClass(t.call(this, e, ue(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof t && t) for (e = t.match(O) || []; n = this[l++];) {
        if (o = ue(n), i = 1 === n.nodeType && " " + ce(o) + " ") {
          for (a = 0; r = e[a++];) {
            for (; i.indexOf(" " + r + " ") > -1;) {
              i = i.replace(" " + r + " ", " ");
            }
          }

          o !== (s = ce(i)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(t, e) {
      var n = typeof t;
      return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : v.isFunction(t) ? this.each(function (n) {
        v(this).toggleClass(t.call(this, n, ue(this), e), e);
      }) : this.each(function () {
        var e, i, o, r;
        if ("string" === n) for (i = 0, o = v(this), r = t.match(O) || []; e = r[i++];) {
          o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
        } else void 0 !== t && "boolean" !== n || ((e = ue(this)) && z.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : z.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(t) {
      var e,
          n,
          i = 0;

      for (e = " " + t + " "; n = this[i++];) {
        if (1 === n.nodeType && (" " + ce(ue(n)) + " ").indexOf(e) > -1) return !0;
      }

      return !1;
    }
  });
  var fe = /\r/g;
  v.fn.extend({
    val: function val(t) {
      var e,
          n,
          i,
          o = this[0];
      return arguments.length ? (i = v.isFunction(t), this.each(function (n) {
        var o;
        1 === this.nodeType && (null == (o = i ? t.call(this, n, v(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = v.map(o, function (t) {
          return null == t ? "" : t + "";
        })), (e = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o));
      })) : o ? (e = v.valHooks[o.type] || v.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(fe, "") : null == n ? "" : n : void 0;
    }
  }), v.extend({
    valHooks: {
      option: {
        get: function get(t) {
          var e = v.find.attr(t, "value");
          return null != e ? e : ce(v.text(t));
        }
      },
      select: {
        get: function get(t) {
          var e,
              n,
              i,
              o = t.options,
              r = t.selectedIndex,
              a = "select-one" === t.type,
              s = a ? null : [],
              l = a ? r + 1 : o.length;

          for (i = r < 0 ? l : a ? r : 0; i < l; i++) {
            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
              if (e = v(n).val(), a) return e;
              s.push(e);
            }
          }

          return s;
        },
        set: function set(t, e) {
          for (var n, i, o = t.options, r = v.makeArray(e), a = o.length; a--;) {
            ((i = o[a]).selected = v.inArray(v.valHooks.option.get(i), r) > -1) && (n = !0);
          }

          return n || (t.selectedIndex = -1), r;
        }
      }
    }
  }), v.each(["radio", "checkbox"], function () {
    v.valHooks[this] = {
      set: function set(t, e) {
        if (Array.isArray(e)) return t.checked = v.inArray(v(t).val(), e) > -1;
      }
    }, h.checkOn || (v.valHooks[this].get = function (t) {
      return null === t.getAttribute("value") ? "on" : t.value;
    });
  });
  var de = /^(?:focusinfocus|focusoutblur)$/;
  v.extend(v.event, {
    trigger: function trigger(e, n, o, r) {
      var a,
          s,
          l,
          c,
          u,
          d,
          p,
          h = [o || i],
          g = f.call(e, "type") ? e.type : e,
          m = f.call(e, "namespace") ? e.namespace.split(".") : [];

      if (s = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !de.test(g + v.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), u = g.indexOf(":") < 0 && "on" + g, (e = e[v.expando] ? e : new v.Event(g, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), n = null == n ? [e] : v.makeArray(n, [e]), p = v.event.special[g] || {}, r || !p.trigger || !1 !== p.trigger.apply(o, n))) {
        if (!r && !p.noBubble && !v.isWindow(o)) {
          for (de.test((c = p.delegateType || g) + g) || (s = s.parentNode); s; s = s.parentNode) {
            h.push(s), l = s;
          }

          l === (o.ownerDocument || i) && h.push(l.defaultView || l.parentWindow || t);
        }

        for (a = 0; (s = h[a++]) && !e.isPropagationStopped();) {
          e.type = a > 1 ? c : p.bindType || g, (d = (z.get(s, "events") || {})[e.type] && z.get(s, "handle")) && d.apply(s, n), (d = u && s[u]) && d.apply && U(s) && (e.result = d.apply(s, n), !1 === e.result && e.preventDefault());
        }

        return e.type = g, r || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), n) || !U(o) || u && v.isFunction(o[g]) && !v.isWindow(o) && ((l = o[u]) && (o[u] = null), v.event.triggered = g, o[g](), v.event.triggered = void 0, l && (o[u] = l)), e.result;
      }
    },
    simulate: function simulate(t, e, n) {
      var i = v.extend(new v.Event(), n, {
        type: t,
        isSimulated: !0
      });
      v.event.trigger(i, null, e);
    }
  }), v.fn.extend({
    trigger: function trigger(t, e) {
      return this.each(function () {
        v.event.trigger(t, e, this);
      });
    },
    triggerHandler: function triggerHandler(t, e) {
      var n = this[0];
      if (n) return v.event.trigger(t, e, n, !0);
    }
  }), v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
    v.fn[e] = function (t, n) {
      return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
    };
  }), v.fn.extend({
    hover: function hover(t, e) {
      return this.mouseenter(t).mouseleave(e || t);
    }
  }), h.focusin = "onfocusin" in t, h.focusin || v.each({
    focus: "focusin",
    blur: "focusout"
  }, function (t, e) {
    var n = function n(t) {
      v.event.simulate(e, t.target, v.event.fix(t));
    };

    v.event.special[e] = {
      setup: function setup() {
        var i = this.ownerDocument || this,
            o = z.access(i, e);
        o || i.addEventListener(t, n, !0), z.access(i, e, (o || 0) + 1);
      },
      teardown: function teardown() {
        var i = this.ownerDocument || this,
            o = z.access(i, e) - 1;
        o ? z.access(i, e, o) : (i.removeEventListener(t, n, !0), z.remove(i, e));
      }
    };
  });
  var pe = t.location,
      he = v.now(),
      ge = /\?/;

  v.parseXML = function (e) {
    var n;
    if (!e || "string" != typeof e) return null;

    try {
      n = new t.DOMParser().parseFromString(e, "text/xml");
    } catch (i) {
      n = void 0;
    }

    return n && !n.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + e), n;
  };

  var ve = /\[\]$/,
      me = /\r?\n/g,
      ye = /^(?:submit|button|image|reset|file)$/i,
      be = /^(?:input|select|textarea|keygen)/i;

  function we(t, e, n, i) {
    var o;
    if (Array.isArray(e)) v.each(e, function (e, o) {
      n || ve.test(t) ? i(t, o) : we(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i);
    });else if (n || "object" !== v.type(e)) i(t, e);else for (o in e) {
      we(t + "[" + o + "]", e[o], n, i);
    }
  }

  v.param = function (t, e) {
    var n,
        i = [],
        o = function o(t, e) {
      var n = v.isFunction(e) ? e() : e;
      i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (Array.isArray(t) || t.jquery && !v.isPlainObject(t)) v.each(t, function () {
      o(this.name, this.value);
    });else for (n in t) {
      we(n, t[n], e, o);
    }
    return i.join("&");
  }, v.fn.extend({
    serialize: function serialize() {
      return v.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var t = v.prop(this, "elements");
        return t ? v.makeArray(t) : this;
      }).filter(function () {
        var t = this.type;
        return this.name && !v(this).is(":disabled") && be.test(this.nodeName) && !ye.test(t) && (this.checked || !rt.test(t));
      }).map(function (t, e) {
        var n = v(this).val();
        return null == n ? null : Array.isArray(n) ? v.map(n, function (t) {
          return {
            name: e.name,
            value: t.replace(me, "\r\n")
          };
        }) : {
          name: e.name,
          value: n.replace(me, "\r\n")
        };
      }).get();
    }
  });
  var xe = /%20/g,
      Ce = /#.*$/,
      Te = /([?&])_=[^&]*/,
      De = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ke = /^(?:GET|HEAD)$/,
      Se = /^\/\//,
      Ee = {},
      $e = {},
      Ae = "*/".concat("*"),
      Ne = i.createElement("a");

  function Le(t) {
    return function (e, n) {
      "string" != typeof e && (n = e, e = "*");
      var i,
          o = 0,
          r = e.toLowerCase().match(O) || [];
      if (v.isFunction(n)) for (; i = r[o++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
      }
    };
  }

  function je(t, e, n, i) {
    var o = {},
        r = t === $e;

    function a(s) {
      var l;
      return o[s] = !0, v.each(t[s] || [], function (t, s) {
        var c = s(e, n, i);
        return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), a(c), !1);
      }), l;
    }

    return a(e.dataTypes[0]) || !o["*"] && a("*");
  }

  function Ie(t, e) {
    var n,
        i,
        o = v.ajaxSettings.flatOptions || {};

    for (n in e) {
      void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
    }

    return i && v.extend(!0, t, i), t;
  }

  Ne.href = pe.href, v.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: pe.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pe.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Ae,
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
        "text xml": v.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(t, e) {
      return e ? Ie(Ie(t, v.ajaxSettings), e) : Ie(v.ajaxSettings, t);
    },
    ajaxPrefilter: Le(Ee),
    ajaxTransport: Le($e),
    ajax: function ajax(e, n) {
      "object" == typeof e && (n = e, e = void 0);
      var o,
          r,
          a,
          s,
          l,
          c,
          u,
          f,
          d,
          p,
          h = v.ajaxSetup({}, n = n || {}),
          g = h.context || h,
          m = h.context && (g.nodeType || g.jquery) ? v(g) : v.event,
          y = v.Deferred(),
          b = v.Callbacks("once memory"),
          w = h.statusCode || {},
          x = {},
          C = {},
          T = "canceled",
          D = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(t) {
          var e;

          if (u) {
            if (!s) for (s = {}; e = De.exec(a);) {
              s[e[1].toLowerCase()] = e[2];
            }
            e = s[t.toLowerCase()];
          }

          return null == e ? null : e;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return u ? a : null;
        },
        setRequestHeader: function setRequestHeader(t, e) {
          return null == u && (t = C[t.toLowerCase()] = C[t.toLowerCase()] || t, x[t] = e), this;
        },
        overrideMimeType: function overrideMimeType(t) {
          return null == u && (h.mimeType = t), this;
        },
        statusCode: function statusCode(t) {
          var e;
          if (t) if (u) D.always(t[D.status]);else for (e in t) {
            w[e] = [w[e], t[e]];
          }
          return this;
        },
        abort: function abort(t) {
          var e = t || T;
          return o && o.abort(e), k(0, e), this;
        }
      };

      if (y.promise(D), h.url = ((e || h.url || pe.href) + "").replace(Se, pe.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(O) || [""], null == h.crossDomain) {
        c = i.createElement("a");

        try {
          c.href = h.url, c.href = c.href, h.crossDomain = Ne.protocol + "//" + Ne.host != c.protocol + "//" + c.host;
        } catch (S) {
          h.crossDomain = !0;
        }
      }

      if (h.data && h.processData && "string" != typeof h.data && (h.data = v.param(h.data, h.traditional)), je(Ee, h, n, D), u) return D;

      for (d in (f = v.event && h.global) && 0 == v.active++ && v.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !ke.test(h.type), r = h.url.replace(Ce, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(xe, "+")) : (p = h.url.slice(r.length), h.data && (r += (ge.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(Te, "$1"), p = (ge.test(r) ? "&" : "?") + "_=" + he++ + p), h.url = r + p), h.ifModified && (v.lastModified[r] && D.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && D.setRequestHeader("If-None-Match", v.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && D.setRequestHeader("Content-Type", h.contentType), D.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ae + "; q=0.01" : "") : h.accepts["*"]), h.headers) {
        D.setRequestHeader(d, h.headers[d]);
      }

      if (h.beforeSend && (!1 === h.beforeSend.call(g, D, h) || u)) return D.abort();

      if (T = "abort", b.add(h.complete), D.done(h.success), D.fail(h.error), o = je($e, h, n, D)) {
        if (D.readyState = 1, f && m.trigger("ajaxSend", [D, h]), u) return D;
        h.async && h.timeout > 0 && (l = t.setTimeout(function () {
          D.abort("timeout");
        }, h.timeout));

        try {
          u = !1, o.send(x, k);
        } catch (S) {
          if (u) throw S;
          k(-1, S);
        }
      } else k(-1, "No Transport");

      function k(e, n, i, s) {
        var c,
            d,
            p,
            x,
            C,
            T = n;
        u || (u = !0, l && t.clearTimeout(l), o = void 0, a = s || "", D.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (x = function (t, e, n) {
          for (var i, o, r, a, s = t.contents, l = t.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
          }

          if (i) for (o in s) {
            if (s[o] && s[o].test(i)) {
              l.unshift(o);
              break;
            }
          }
          if (l[0] in n) r = l[0];else {
            for (o in n) {
              if (!l[0] || t.converters[o + " " + l[0]]) {
                r = o;
                break;
              }

              a || (a = o);
            }

            r = r || a;
          }
          if (r) return r !== l[0] && l.unshift(r), n[r];
        }(h, D, i)), x = function (t, e, n, i) {
          var o,
              r,
              a,
              s,
              l,
              c = {},
              u = t.dataTypes.slice();
          if (u[1]) for (a in t.converters) {
            c[a.toLowerCase()] = t.converters[a];
          }

          for (r = u.shift(); r;) {
            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift()) if ("*" === r) r = l;else if ("*" !== l && l !== r) {
              if (!(a = c[l + " " + r] || c["* " + r])) for (o in c) {
                if ((s = o.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                  !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], u.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && t.throws) e = a(e);else try {
                e = a(e);
              } catch (S) {
                return {
                  state: "parsererror",
                  error: a ? S : "No conversion from " + l + " to " + r
                };
              }
            }
          }

          return {
            state: "success",
            data: e
          };
        }(h, x, D, c), c ? (h.ifModified && ((C = D.getResponseHeader("Last-Modified")) && (v.lastModified[r] = C), (C = D.getResponseHeader("etag")) && (v.etag[r] = C)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, d = x.data, c = !(p = x.error))) : (p = T, !e && T || (T = "error", e < 0 && (e = 0))), D.status = e, D.statusText = (n || T) + "", c ? y.resolveWith(g, [d, T, D]) : y.rejectWith(g, [D, T, p]), D.statusCode(w), w = void 0, f && m.trigger(c ? "ajaxSuccess" : "ajaxError", [D, h, c ? d : p]), b.fireWith(g, [D, T]), f && (m.trigger("ajaxComplete", [D, h]), --v.active || v.event.trigger("ajaxStop")));
      }

      return D;
    },
    getJSON: function getJSON(t, e, n) {
      return v.get(t, e, n, "json");
    },
    getScript: function getScript(t, e) {
      return v.get(t, void 0, e, "script");
    }
  }), v.each(["get", "post"], function (t, e) {
    v[e] = function (t, n, i, o) {
      return v.isFunction(n) && (o = o || i, i = n, n = void 0), v.ajax(v.extend({
        url: t,
        type: e,
        dataType: o,
        data: n,
        success: i
      }, v.isPlainObject(t) && t));
    };
  }), v._evalUrl = function (t) {
    return v.ajax({
      url: t,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      throws: !0
    });
  }, v.fn.extend({
    wrapAll: function wrapAll(t) {
      var e;
      return this[0] && (v.isFunction(t) && (t = t.call(this[0])), e = v(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
        for (var t = this; t.firstElementChild;) {
          t = t.firstElementChild;
        }

        return t;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(t) {
      return v.isFunction(t) ? this.each(function (e) {
        v(this).wrapInner(t.call(this, e));
      }) : this.each(function () {
        var e = v(this),
            n = e.contents();
        n.length ? n.wrapAll(t) : e.append(t);
      });
    },
    wrap: function wrap(t) {
      var e = v.isFunction(t);
      return this.each(function (n) {
        v(this).wrapAll(e ? t.call(this, n) : t);
      });
    },
    unwrap: function unwrap(t) {
      return this.parent(t).not("body").each(function () {
        v(this).replaceWith(this.childNodes);
      }), this;
    }
  }), v.expr.pseudos.hidden = function (t) {
    return !v.expr.pseudos.visible(t);
  }, v.expr.pseudos.visible = function (t) {
    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
  }, v.ajaxSettings.xhr = function () {
    try {
      return new t.XMLHttpRequest();
    } catch (e) {}
  };
  var Pe = {
    0: 200,
    1223: 204
  },
      Oe = v.ajaxSettings.xhr();
  h.cors = !!Oe && "withCredentials" in Oe, h.ajax = Oe = !!Oe, v.ajaxTransport(function (e) {
    var _n, i;

    if (h.cors || Oe && !e.crossDomain) return {
      send: function send(o, r) {
        var a,
            s = e.xhr();
        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) {
          s[a] = e.xhrFields[a];
        }

        for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) {
          s.setRequestHeader(a, o[a]);
        }

        _n = function n(t) {
          return function () {
            _n && (_n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Pe[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: s.response
            } : {
              text: s.responseText
            }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n(), i = s.onerror = _n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
          4 === s.readyState && t.setTimeout(function () {
            _n && i();
          });
        }, _n = _n("abort");

        try {
          s.send(e.hasContent && e.data || null);
        } catch (l) {
          if (_n) throw l;
        }
      },
      abort: function abort() {
        _n && _n();
      }
    };
  }), v.ajaxPrefilter(function (t) {
    t.crossDomain && (t.contents.script = !1);
  }), v.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(t) {
        return v.globalEval(t), t;
      }
    }
  }), v.ajaxPrefilter("script", function (t) {
    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
  }), v.ajaxTransport("script", function (t) {
    var e, _n2;

    if (t.crossDomain) return {
      send: function send(o, r) {
        e = v("<script>").prop({
          charset: t.scriptCharset,
          src: t.url
        }).on("load error", _n2 = function n(t) {
          e.remove(), _n2 = null, t && r("error" === t.type ? 404 : 200, t.type);
        }), i.head.appendChild(e[0]);
      },
      abort: function abort() {
        _n2 && _n2();
      }
    };
  });
  var Re,
      He = [],
      Fe = /(=)\?(?=&|$)|\?\?/;
  v.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var t = He.pop() || v.expando + "_" + he++;
      return this[t] = !0, t;
    }
  }), v.ajaxPrefilter("json jsonp", function (e, n, i) {
    var o,
        r,
        a,
        s = !1 !== e.jsonp && (Fe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Fe.test(e.data) && "data");
    if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = v.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Fe, "$1" + o) : !1 !== e.jsonp && (e.url += (ge.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
      return a || v.error(o + " was not called"), a[0];
    }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
      a = arguments;
    }, i.always(function () {
      void 0 === r ? v(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, He.push(o)), a && v.isFunction(r) && r(a[0]), a = r = void 0;
    }), "script";
  }), h.createHTMLDocument = ((Re = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Re.childNodes.length), v.parseHTML = function (t, e, n) {
    return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (h.createHTMLDocument ? ((o = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, e.head.appendChild(o)) : e = i), a = !n && [], (r = E.exec(t)) ? [e.createElement(r[1])] : (r = ht([t], e, a), a && a.length && v(a).remove(), v.merge([], r.childNodes)));
    var o, r, a;
  }, v.fn.load = function (t, e, n) {
    var i,
        o,
        r,
        a = this,
        s = t.indexOf(" ");
    return s > -1 && (i = ce(t.slice(s)), t = t.slice(0, s)), v.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && v.ajax({
      url: t,
      type: o || "GET",
      dataType: "html",
      data: e
    }).done(function (t) {
      r = arguments, a.html(i ? v("<div>").append(v.parseHTML(t)).find(i) : t);
    }).always(n && function (t, e) {
      a.each(function () {
        n.apply(this, r || [t.responseText, e, t]);
      });
    }), this;
  }, v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
    v.fn[e] = function (t) {
      return this.on(e, t);
    };
  }), v.expr.pseudos.animated = function (t) {
    return v.grep(v.timers, function (e) {
      return t === e.elem;
    }).length;
  }, v.offset = {
    setOffset: function setOffset(t, e, n) {
      var i,
          o,
          r,
          a,
          s,
          l,
          c = v.css(t, "position"),
          u = v(t),
          f = {};
      "static" === c && (t.style.position = "relative"), s = u.offset(), r = v.css(t, "top"), l = v.css(t, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (a = (i = u.position()).top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), v.isFunction(e) && (e = e.call(t, n, v.extend({}, s))), null != e.top && (f.top = e.top - s.top + a), null != e.left && (f.left = e.left - s.left + o), "using" in e ? e.using.call(t, f) : u.css(f);
    }
  }, v.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        v.offset.setOffset(this, t, e);
      });
      var e,
          n,
          i,
          o,
          r = this[0];
      return r ? r.getClientRects().length ? {
        top: (i = r.getBoundingClientRect()).top + (o = (e = r.ownerDocument).defaultView).pageYOffset - (n = e.documentElement).clientTop,
        left: i.left + o.pageXOffset - n.clientLeft
      } : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var t,
            e,
            n = this[0],
            i = {
          top: 0,
          left: 0
        };
        return "fixed" === v.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), S(t[0], "html") || (i = t.offset()), i = {
          top: i.top + v.css(t[0], "borderTopWidth", !0),
          left: i.left + v.css(t[0], "borderLeftWidth", !0)
        }), {
          top: e.top - i.top - v.css(n, "marginTop", !0),
          left: e.left - i.left - v.css(n, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        for (var t = this.offsetParent; t && "static" === v.css(t, "position");) {
          t = t.offsetParent;
        }

        return t || gt;
      });
    }
  }), v.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, e) {
    var n = "pageYOffset" === e;

    v.fn[t] = function (i) {
      return _(this, function (t, i, o) {
        var r;
        if (v.isWindow(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o) return r ? r[e] : t[i];
        r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o;
      }, t, i, arguments.length);
    };
  }), v.each(["top", "left"], function (t, e) {
    v.cssHooks[e] = Ft(h.pixelPosition, function (t, n) {
      if (n) return n = Ht(t, e), Ot.test(n) ? v(t).position()[e] + "px" : n;
    });
  }), v.each({
    Height: "height",
    Width: "width"
  }, function (t, e) {
    v.each({
      padding: "inner" + t,
      content: e,
      "": "outer" + t
    }, function (n, i) {
      v.fn[i] = function (o, r) {
        var a = arguments.length && (n || "boolean" != typeof o),
            s = n || (!0 === o || !0 === r ? "margin" : "border");
        return _(this, function (e, n, o) {
          var r;
          return v.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? v.css(e, n, s) : v.style(e, n, o, s);
        }, e, a ? o : void 0, a);
      };
    });
  }), v.fn.extend({
    bind: function bind(t, e, n) {
      return this.on(t, null, e, n);
    },
    unbind: function unbind(t, e) {
      return this.off(t, null, e);
    },
    delegate: function delegate(t, e, n, i) {
      return this.on(e, t, n, i);
    },
    undelegate: function undelegate(t, e, n) {
      return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
    }
  }), v.holdReady = function (t) {
    t ? v.readyWait++ : v.ready(!0);
  }, v.isArray = Array.isArray, v.parseJSON = JSON.parse, v.nodeName = S, "function" == typeof define && define.amd && define("jquery", [], function () {
    return v;
  });
  var qe = t.jQuery,
      Be = t.$;
  return v.noConflict = function (e) {
    return t.$ === v && (t.$ = Be), e && t.jQuery === v && (t.jQuery = qe), v;
  }, e || (t.jQuery = t.$ = v), v;
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
!function (t) {
  "use strict";

  var e = jQuery.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(), function (t) {
  "use strict";

  t.fn.emulateTransitionEnd = function (e) {
    var n = !1,
        i = this;
    return t(this).one("bsTransitionEnd", function () {
      n = !0;
    }), setTimeout(function () {
      n || t(i).trigger(t.support.transition.end);
    }, e), this;
  }, t(function () {
    t.support.transition = function () {
      var t = document.createElement("bootstrap"),
          e = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };

      for (var n in e) {
        if (void 0 !== t.style[n]) return {
          end: e[n]
        };
      }

      return !1;
    }(), t.support.transition && (t.event.special.bsTransitionEnd = {
      bindType: t.support.transition.end,
      delegateType: t.support.transition.end,
      handle: function handle(e) {
        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    });
  });
}(jQuery), function (t) {
  "use strict";

  var e = '[data-dismiss="alert"]',
      n = function n(_n3) {
    t(_n3).on("click", e, this.close);
  };

  n.VERSION = "3.4.1", n.TRANSITION_DURATION = 150, n.prototype.close = function (e) {
    var i = t(this),
        o = i.attr("data-target");
    o || (o = (o = i.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")), o = "#" === o ? [] : o;
    var r = t(document).find(o);

    function a() {
      r.detach().trigger("closed.bs.alert").remove();
    }

    e && e.preventDefault(), r.length || (r = i.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a());
  };
  var i = t.fn.alert;
  t.fn.alert = function (e) {
    return this.each(function () {
      var i = t(this),
          o = i.data("bs.alert");
      o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i);
    });
  }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
    return t.fn.alert = i, this;
  }, t(document).on("click.bs.alert.data-api", e, n.prototype.close);
}(jQuery), function (t) {
  "use strict";

  var e = function e(n, i) {
    this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.isLoading = !1;
  };

  function n(n) {
    return this.each(function () {
      var i = t(this),
          o = i.data("bs.button");
      o || i.data("bs.button", o = new e(this, "object" == typeof n && n)), "toggle" == n ? o.toggle() : n && o.setState(n);
    });
  }

  e.VERSION = "3.4.1", e.DEFAULTS = {
    loadingText: "loading..."
  }, e.prototype.setState = function (e) {
    var n = "disabled",
        i = this.$element,
        o = i.is("input") ? "val" : "html",
        r = i.data();
    e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function () {
      i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1));
    }, this), 0);
  }, e.prototype.toggle = function () {
    var t = !0,
        e = this.$element.closest('[data-toggle="buttons"]');

    if (e.length) {
      var n = this.$element.find("input");
      "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };
  var i = t.fn.button;
  t.fn.button = n, t.fn.button.Constructor = e, t.fn.button.noConflict = function () {
    return t.fn.button = i, this;
  }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (e) {
    var i = t(e.target).closest(".btn");
    n.call(i, "toggle"), t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"));
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
  });
}(jQuery), function (t) {
  "use strict";

  var e = function e(_e2, n) {
    this.$element = t(_e2), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
  };

  function n(n) {
    return this.each(function () {
      var i = t(this),
          o = i.data("bs.carousel"),
          r = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n),
          a = "string" == typeof n ? n : r.slide;
      o || i.data("bs.carousel", o = new e(this, r)), "number" == typeof n ? o.to(n) : a ? o[a]() : r.interval && o.pause().cycle();
    });
  }

  e.VERSION = "3.4.1", e.TRANSITION_DURATION = 600, e.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, e.prototype.keydown = function (t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
      switch (t.which) {
        case 37:
          this.prev();
          break;

        case 39:
          this.next();
          break;

        default:
          return;
      }

      t.preventDefault();
    }
  }, e.prototype.cycle = function (e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this;
  }, e.prototype.getItemIndex = function (t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active);
  }, e.prototype.getItemForDirection = function (t, e) {
    var n = this.getItemIndex(e);
    return ("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap ? e : this.$items.eq((n + ("prev" == t ? -1 : 1)) % this.$items.length);
  }, e.prototype.to = function (t) {
    var e = this,
        n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
      e.to(t);
    }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t));
  }, e.prototype.pause = function (e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, e.prototype.next = function () {
    if (!this.sliding) return this.slide("next");
  }, e.prototype.prev = function () {
    if (!this.sliding) return this.slide("prev");
  }, e.prototype.slide = function (n, i) {
    var o = this.$element.find(".item.active"),
        r = i || this.getItemForDirection(n, o),
        a = this.interval,
        s = "next" == n ? "left" : "right",
        l = this;
    if (r.hasClass("active")) return this.sliding = !1;
    var c = r[0],
        u = t.Event("slide.bs.carousel", {
      relatedTarget: c,
      direction: s
    });

    if (this.$element.trigger(u), !u.isDefaultPrevented()) {
      if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var f = t(this.$indicators.children()[this.getItemIndex(r)]);
        f && f.addClass("active");
      }

      var d = t.Event("slid.bs.carousel", {
        relatedTarget: c,
        direction: s
      });
      return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(n), o.addClass(s), r.addClass(s), o.one("bsTransitionEnd", function () {
        r.removeClass([n, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function () {
          l.$element.trigger(d);
        }, 0);
      }).emulateTransitionEnd(e.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(d)), a && this.cycle(), this;
    }
  };
  var i = t.fn.carousel;
  t.fn.carousel = n, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function () {
    return t.fn.carousel = i, this;
  };

  var o = function o(e) {
    var i = t(this),
        o = i.attr("href");
    o && (o = o.replace(/.*(?=#[^\s]+$)/, ""));
    var r = i.attr("data-target") || o,
        a = t(document).find(r);

    if (a.hasClass("carousel")) {
      var s = t.extend({}, a.data(), i.data()),
          l = i.attr("data-slide-to");
      l && (s.interval = !1), n.call(a, s), l && a.data("bs.carousel").to(l), e.preventDefault();
    }
  };

  t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function () {
    t('[data-ride="carousel"]').each(function () {
      var e = t(this);
      n.call(e, e.data());
    });
  });
}(jQuery), function (t) {
  "use strict";

  var e = function e(n, i) {
    this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };

  function n(e) {
    var n,
        i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
    return t(document).find(i);
  }

  function i(n) {
    return this.each(function () {
      var i = t(this),
          o = i.data("bs.collapse"),
          r = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
      !o && r.toggle && /show|hide/.test(n) && (r.toggle = !1), o || i.data("bs.collapse", o = new e(this, r)), "string" == typeof n && o[n]();
    });
  }

  e.VERSION = "3.4.1", e.TRANSITION_DURATION = 350, e.DEFAULTS = {
    toggle: !0
  }, e.prototype.dimension = function () {
    return this.$element.hasClass("width") ? "width" : "height";
  }, e.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var n,
          o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");

      if (!(o && o.length && (n = o.data("bs.collapse")) && n.transitioning)) {
        var r = t.Event("show.bs.collapse");

        if (this.$element.trigger(r), !r.isDefaultPrevented()) {
          o && o.length && (i.call(o, "hide"), n || o.data("bs.collapse", null));
          var a = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;

          var s = function s() {
            this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };

          if (!t.support.transition) return s.call(this);
          var l = t.camelCase(["scroll", a].join("-"));
          this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[a](this.$element[0][l]);
        }
      }
    }
  }, e.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var n = t.Event("hide.bs.collapse");

      if (this.$element.trigger(n), !n.isDefaultPrevented()) {
        var i = this.dimension();
        this.$element[i](this.$element[i]()), this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;

        var o = function o() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };

        if (!t.support.transition) return o.call(this);
        this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(e.TRANSITION_DURATION);
      }
    }
  }, e.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, e.prototype.getParent = function () {
    return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (e, i) {
      var o = t(i);
      this.addAriaAndCollapsedClass(n(o), o);
    }, this)).end();
  }, e.prototype.addAriaAndCollapsedClass = function (t, e) {
    var n = t.hasClass("in");
    t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n);
  };
  var o = t.fn.collapse;
  t.fn.collapse = i, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function () {
    return t.fn.collapse = o, this;
  }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (e) {
    var o = t(this);
    o.attr("data-target") || e.preventDefault();
    var r = n(o),
        a = r.data("bs.collapse") ? "toggle" : o.data();
    i.call(r, a);
  });
}(jQuery), function (t) {
  "use strict";

  var e = ".dropdown-backdrop",
      n = '[data-toggle="dropdown"]',
      i = function i(e) {
    t(e).on("click.bs.dropdown", this.toggle);
  };

  function o(e) {
    var n = e.attr("data-target");
    n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
    var i = "#" !== n ? t(document).find(n) : null;
    return i && i.length ? i : e.parent();
  }

  function r(i) {
    i && 3 === i.which || (t(e).remove(), t(n).each(function () {
      var e = t(this),
          n = o(e),
          r = {
        relatedTarget: this
      };
      n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", r)), i.isDefaultPrevented() || (e.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))));
    }));
  }

  i.VERSION = "3.4.1", i.prototype.toggle = function (e) {
    var n = t(this);

    if (!n.is(".disabled, :disabled")) {
      var i = o(n),
          a = i.hasClass("open");

      if (r(), !a) {
        "ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", r);
        var s = {
          relatedTarget: this
        };
        if (i.trigger(e = t.Event("show.bs.dropdown", s)), e.isDefaultPrevented()) return;
        n.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s));
      }

      return !1;
    }
  }, i.prototype.keydown = function (e) {
    if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
      var i = t(this);

      if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
        var r = o(i),
            a = r.hasClass("open");
        if (!a && 27 != e.which || a && 27 == e.which) return 27 == e.which && r.find(n).trigger("focus"), i.trigger("click");
        var s = r.find(".dropdown-menu li:not(.disabled):visible a");

        if (s.length) {
          var l = s.index(e.target);
          38 == e.which && l > 0 && l--, 40 == e.which && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).trigger("focus");
        }
      }
    }
  };
  var a = t.fn.dropdown;
  t.fn.dropdown = function (e) {
    return this.each(function () {
      var n = t(this),
          o = n.data("bs.dropdown");
      o || n.data("bs.dropdown", o = new i(this)), "string" == typeof e && o[e].call(n);
    });
  }, t.fn.dropdown.Constructor = i, t.fn.dropdown.noConflict = function () {
    return t.fn.dropdown = a, this;
  }, t(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
    t.stopPropagation();
  }).on("click.bs.dropdown.data-api", n, i.prototype.toggle).on("keydown.bs.dropdown.data-api", n, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown);
}(jQuery), function (t) {
  "use strict";

  var e = function e(_e3, n) {
    this.options = n, this.$body = t(document.body), this.$element = t(_e3), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };

  function n(n, i) {
    return this.each(function () {
      var o = t(this),
          r = o.data("bs.modal"),
          a = t.extend({}, e.DEFAULTS, o.data(), "object" == typeof n && n);
      r || o.data("bs.modal", r = new e(this, a)), "string" == typeof n ? r[n](i) : a.show && r.show(i);
    });
  }

  e.VERSION = "3.4.1", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, e.prototype.toggle = function (t) {
    return this.isShown ? this.hide() : this.show(t);
  }, e.prototype.show = function (n) {
    var i = this,
        o = t.Event("show.bs.modal", {
      relatedTarget: n
    });
    this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      i.$element.one("mouseup.dismiss.bs.modal", function (e) {
        t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0);
      });
    }), this.backdrop(function () {
      var o = t.support.transition && i.$element.hasClass("fade");
      i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), i.$element.addClass("in"), i.enforceFocus();
      var r = t.Event("shown.bs.modal", {
        relatedTarget: n
      });
      o ? i.$dialog.one("bsTransitionEnd", function () {
        i.$element.trigger("focus").trigger(r);
      }).emulateTransitionEnd(e.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r);
    }));
  }, e.prototype.hide = function (n) {
    n && n.preventDefault(), n = t.Event("hide.bs.modal"), this.$element.trigger(n), this.isShown && !n.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal());
  }, e.prototype.enforceFocus = function () {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
      document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
    }, this));
  }, e.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
      27 == t.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, e.prototype.resize = function () {
    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal");
  }, e.prototype.hideModal = function () {
    var t = this;
    this.$element.hide(), this.backdrop(function () {
      t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal");
    });
  }, e.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, e.prototype.backdrop = function (n) {
    var i = this,
        o = this.$element.hasClass("fade") ? "fade" : "";

    if (this.isShown && this.options.backdrop) {
      var r = t.support.transition && o;
      if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
        this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide());
      }, this)), this.$backdrop.addClass("in"), !n) return;
      r ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : n();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");

      var a = function a() {
        i.removeBackdrop(), n && n();
      };

      t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : a();
    } else n && n();
  }, e.prototype.handleUpdate = function () {
    this.adjustDialog();
  }, e.prototype.adjustDialog = function () {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    });
  }, e.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    });
  }, e.prototype.checkScrollbar = function () {
    var t = window.innerWidth;

    if (!t) {
      var e = document.documentElement.getBoundingClientRect();
      t = e.right - Math.abs(e.left);
    }

    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar();
  }, e.prototype.setScrollbar = function () {
    var e = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "";
    var n = this.scrollbarWidth;
    this.bodyIsOverflowing && (this.$body.css("padding-right", e + n), t(this.fixedContent).each(function (e, i) {
      var o = i.style.paddingRight,
          r = t(i).css("padding-right");
      t(i).data("padding-right", o).css("padding-right", parseFloat(r) + n + "px");
    }));
  }, e.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad), t(this.fixedContent).each(function (e, n) {
      var i = t(n).data("padding-right");
      t(n).removeData("padding-right"), n.style.paddingRight = i || "";
    });
  }, e.prototype.measureScrollbar = function () {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e;
  };
  var i = t.fn.modal;
  t.fn.modal = n, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function () {
    return t.fn.modal = i, this;
  }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
    var i = t(this),
        o = i.attr("href"),
        r = i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, ""),
        a = t(document).find(r),
        s = a.data("bs.modal") ? "toggle" : t.extend({
      remote: !/#/.test(o) && o
    }, a.data(), i.data());
    i.is("a") && e.preventDefault(), a.one("show.bs.modal", function (t) {
      t.isDefaultPrevented() || a.one("hidden.bs.modal", function () {
        i.is(":visible") && i.trigger("focus");
      });
    }), n.call(a, s, this);
  });
}(jQuery), function (t) {
  "use strict";

  var e = ["sanitize", "whiteList", "sanitizeFn"],
      n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      i = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
      o = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

  function r(e, r) {
    var a = e.nodeName.toLowerCase();
    if (-1 !== t.inArray(a, r)) return -1 === t.inArray(a, n) || Boolean(e.nodeValue.match(i) || e.nodeValue.match(o));

    for (var s = t(r).filter(function (t, e) {
      return e instanceof RegExp;
    }), l = 0, c = s.length; l < c; l++) {
      if (a.match(s[l])) return !0;
    }

    return !1;
  }

  function a(e, n, i) {
    if (0 === e.length) return e;
    if (i && "function" == typeof i) return i(e);
    if (!document.implementation || !document.implementation.createHTMLDocument) return e;
    var o = document.implementation.createHTMLDocument("sanitization");
    o.body.innerHTML = e;

    for (var a = t.map(n, function (t, e) {
      return e;
    }), s = t(o.body).find("*"), l = 0, c = s.length; l < c; l++) {
      var u = s[l],
          f = u.nodeName.toLowerCase();
      if (-1 !== t.inArray(f, a)) for (var d = t.map(u.attributes, function (t) {
        return t;
      }), p = [].concat(n["*"] || [], n[f] || []), h = 0, g = d.length; h < g; h++) {
        r(d[h], p) || u.removeAttribute(d[h].nodeName);
      } else u.parentNode.removeChild(u);
    }

    return o.body.innerHTML;
  }

  var s = function s(t, e) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e);
  };

  s.VERSION = "3.4.1", s.TRANSITION_DURATION = 150, s.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    },
    sanitize: !0,
    sanitizeFn: null,
    whiteList: {
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
      img: ["src", "alt", "title", "width", "height"],
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
    }
  }, s.prototype.init = function (e, n, i) {
    if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
      click: !1,
      hover: !1,
      focus: !1
    }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");

    for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
      var a = o[r];
      if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));else if ("manual" != a) {
        var s = "hover" == a ? "mouseleave" : "focusout";
        this.$element.on(("hover" == a ? "mouseenter" : "focusin") + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.leave, this));
      }
    }

    this.options.selector ? this._options = t.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle();
  }, s.prototype.getDefaults = function () {
    return s.DEFAULTS;
  }, s.prototype.getOptions = function (n) {
    var i = this.$element.data();

    for (var o in i) {
      i.hasOwnProperty(o) && -1 !== t.inArray(o, e) && delete i[o];
    }

    return (n = t.extend({}, this.getDefaults(), i, n)).delay && "number" == typeof n.delay && (n.delay = {
      show: n.delay,
      hide: n.delay
    }), n.sanitize && (n.template = a(n.template, n.whiteList, n.sanitizeFn)), n;
  }, s.prototype.getDelegateOptions = function () {
    var e = {},
        n = this.getDefaults();
    return this._options && t.each(this._options, function (t, i) {
      n[t] != i && (e[t] = i);
    }), e;
  }, s.prototype.enter = function (e) {
    var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in";else {
      if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
      n.timeout = setTimeout(function () {
        "in" == n.hoverState && n.show();
      }, n.options.delay.show);
    }
  }, s.prototype.isInStateTrue = function () {
    for (var t in this.inState) {
      if (this.inState[t]) return !0;
    }

    return !1;
  }, s.prototype.leave = function (e) {
    var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);

    if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
      if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
      n.timeout = setTimeout(function () {
        "out" == n.hoverState && n.hide();
      }, n.options.delay.hide);
    }
  }, s.prototype.show = function () {
    var e = t.Event("show.bs." + this.type);

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);
      var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (e.isDefaultPrevented() || !n) return;
      var i = this,
          o = this.tip(),
          r = this.getUID(this.type);
      this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
      var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
          l = /\s?auto?\s?/i,
          c = l.test(a);
      c && (a = a.replace(l, "") || "top"), o.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(t(document).find(this.options.container)) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var u = this.getPosition(),
          f = o[0].offsetWidth,
          d = o[0].offsetHeight;

      if (c) {
        var p = a,
            h = this.getPosition(this.$viewport);
        a = "bottom" == a && u.bottom + d > h.bottom ? "top" : "top" == a && u.top - d < h.top ? "bottom" : "right" == a && u.right + f > h.width ? "left" : "left" == a && u.left - f < h.left ? "right" : a, o.removeClass(p).addClass(a);
      }

      var g = this.getCalculatedOffset(a, u, f, d);
      this.applyPlacement(g, a);

      var v = function v() {
        var t = i.hoverState;
        i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i);
      };

      t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", v).emulateTransitionEnd(s.TRANSITION_DURATION) : v();
    }
  }, s.prototype.applyPlacement = function (e, n) {
    var i = this.tip(),
        o = i[0].offsetWidth,
        r = i[0].offsetHeight,
        a = parseInt(i.css("margin-top"), 10),
        s = parseInt(i.css("margin-left"), 10);
    isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top += a, e.left += s, t.offset.setOffset(i[0], t.extend({
      using: function using(t) {
        i.css({
          top: Math.round(t.top),
          left: Math.round(t.left)
        });
      }
    }, e), 0), i.addClass("in");
    var l = i[0].offsetWidth,
        c = i[0].offsetHeight;
    "top" == n && c != r && (e.top = e.top + r - c);
    var u = this.getViewportAdjustedDelta(n, e, l, c);
    u.left ? e.left += u.left : e.top += u.top;
    var f = /top|bottom/.test(n),
        d = f ? 2 * u.left - o + l : 2 * u.top - r + c,
        p = f ? "offsetWidth" : "offsetHeight";
    i.offset(e), this.replaceArrow(d, i[0][p], f);
  }, s.prototype.replaceArrow = function (t, e, n) {
    this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "");
  }, s.prototype.setContent = function () {
    var t = this.tip(),
        e = this.getTitle();
    this.options.html ? (this.options.sanitize && (e = a(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right");
  }, s.prototype.hide = function (e) {
    var n = this,
        i = t(this.$tip),
        o = t.Event("hide.bs." + this.type);

    function r() {
      "in" != n.hoverState && i.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e();
    }

    if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), t.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", r).emulateTransitionEnd(s.TRANSITION_DURATION) : r(), this.hoverState = null, this;
  }, s.prototype.fixTitle = function () {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
  }, s.prototype.hasContent = function () {
    return this.getTitle();
  }, s.prototype.getPosition = function (e) {
    var n = (e = e || this.$element)[0],
        i = "BODY" == n.tagName,
        o = n.getBoundingClientRect();
    null == o.width && (o = t.extend({}, o, {
      width: o.right - o.left,
      height: o.bottom - o.top
    }));
    var r = window.SVGElement && n instanceof window.SVGElement,
        a = i ? {
      top: 0,
      left: 0
    } : r ? null : e.offset(),
        s = {
      scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
    },
        l = i ? {
      width: t(window).width(),
      height: t(window).height()
    } : null;
    return t.extend({}, o, s, l, a);
  }, s.prototype.getCalculatedOffset = function (t, e, n, i) {
    return "bottom" == t ? {
      top: e.top + e.height,
      left: e.left + e.width / 2 - n / 2
    } : "top" == t ? {
      top: e.top - i,
      left: e.left + e.width / 2 - n / 2
    } : "left" == t ? {
      top: e.top + e.height / 2 - i / 2,
      left: e.left - n
    } : {
      top: e.top + e.height / 2 - i / 2,
      left: e.left + e.width
    };
  }, s.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
    var o = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return o;
    var r = this.options.viewport && this.options.viewport.padding || 0,
        a = this.getPosition(this.$viewport);

    if (/right|left/.test(t)) {
      var s = e.top - r - a.scroll,
          l = e.top + r - a.scroll + i;
      s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l);
    } else {
      var c = e.left - r,
          u = e.left + r + n;
      c < a.left ? o.left = a.left - c : u > a.right && (o.left = a.left + a.width - u);
    }

    return o;
  }, s.prototype.getTitle = function () {
    var t = this.$element,
        e = this.options;
    return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title);
  }, s.prototype.getUID = function (t) {
    do {
      t += ~~(1e6 * Math.random());
    } while (document.getElementById(t));

    return t;
  }, s.prototype.tip = function () {
    if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip;
  }, s.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, s.prototype.enable = function () {
    this.enabled = !0;
  }, s.prototype.disable = function () {
    this.enabled = !1;
  }, s.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, s.prototype.toggle = function (e) {
    var n = this;
    e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n);
  }, s.prototype.destroy = function () {
    var t = this;
    clearTimeout(this.timeout), this.hide(function () {
      t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null;
    });
  }, s.prototype.sanitizeHtml = function (t) {
    return a(t, this.options.whiteList, this.options.sanitizeFn);
  };
  var l = t.fn.tooltip;
  t.fn.tooltip = function (e) {
    return this.each(function () {
      var n = t(this),
          i = n.data("bs.tooltip"),
          o = "object" == typeof e && e;
      !i && /destroy|hide/.test(e) || (i || n.data("bs.tooltip", i = new s(this, o)), "string" == typeof e && i[e]());
    });
  }, t.fn.tooltip.Constructor = s, t.fn.tooltip.noConflict = function () {
    return t.fn.tooltip = l, this;
  };
}(jQuery), function (t) {
  "use strict";

  var e = function e(t, _e4) {
    this.init("popover", t, _e4);
  };

  if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
  e.VERSION = "3.4.1", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), (e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e, e.prototype.getDefaults = function () {
    return e.DEFAULTS;
  }, e.prototype.setContent = function () {
    var t = this.tip(),
        e = this.getTitle(),
        n = this.getContent();

    if (this.options.html) {
      var i = typeof n;
      this.options.sanitize && (e = this.sanitizeHtml(e), "string" === i && (n = this.sanitizeHtml(n))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === i ? "html" : "append"](n);
    } else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(n);

    t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide();
  }, e.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, e.prototype.getContent = function () {
    var t = this.$element,
        e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
  }, e.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };
  var n = t.fn.popover;
  t.fn.popover = function (n) {
    return this.each(function () {
      var i = t(this),
          o = i.data("bs.popover"),
          r = "object" == typeof n && n;
      !o && /destroy|hide/.test(n) || (o || i.data("bs.popover", o = new e(this, r)), "string" == typeof n && o[n]());
    });
  }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
    return t.fn.popover = n, this;
  };
}(jQuery), function (t) {
  "use strict";

  function e(n, i) {
    this.$body = t(document.body), this.$scrollElement = t(n).is(document.body) ? t(window) : t(n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process();
  }

  function n(n) {
    return this.each(function () {
      var i = t(this),
          o = i.data("bs.scrollspy");
      o || i.data("bs.scrollspy", o = new e(this, "object" == typeof n && n)), "string" == typeof n && o[n]();
    });
  }

  e.VERSION = "3.4.1", e.DEFAULTS = {
    offset: 10
  }, e.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, e.prototype.refresh = function () {
    var e = this,
        n = "offset",
        i = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var e = t(this),
          o = e.data("target") || e.attr("href"),
          r = /^#./.test(o) && t(o);
      return r && r.length && r.is(":visible") && [[r[n]().top + i, o]] || null;
    }).sort(function (t, e) {
      return t[0] - e[0];
    }).each(function () {
      e.offsets.push(this[0]), e.targets.push(this[1]);
    });
  }, e.prototype.process = function () {
    var t,
        e = this.$scrollElement.scrollTop() + this.options.offset,
        n = this.getScrollHeight(),
        i = this.options.offset + n - this.$scrollElement.height(),
        o = this.offsets,
        r = this.targets,
        a = this.activeTarget;
    if (this.scrollHeight != n && this.refresh(), e >= i) return a != (t = r[r.length - 1]) && this.activate(t);
    if (a && e < o[0]) return this.activeTarget = null, this.clear();

    for (t = o.length; t--;) {
      a != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t]);
    }
  }, e.prototype.activate = function (e) {
    this.activeTarget = e, this.clear();
    var n = t(this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]').parents("li").addClass("active");
    n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy");
  }, e.prototype.clear = function () {
    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };
  var i = t.fn.scrollspy;
  t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
    return t.fn.scrollspy = i, this;
  }, t(window).on("load.bs.scrollspy.data-api", function () {
    t('[data-spy="scroll"]').each(function () {
      var e = t(this);
      n.call(e, e.data());
    });
  });
}(jQuery), function (t) {
  "use strict";

  var e = function e(_e5) {
    this.element = t(_e5);
  };

  function n(n) {
    return this.each(function () {
      var i = t(this),
          o = i.data("bs.tab");
      o || i.data("bs.tab", o = new e(this)), "string" == typeof n && o[n]();
    });
  }

  e.VERSION = "3.4.1", e.TRANSITION_DURATION = 150, e.prototype.show = function () {
    var e = this.element,
        n = e.closest("ul:not(.dropdown-menu)"),
        i = e.data("target");

    if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
      var o = n.find(".active:last a"),
          r = t.Event("hide.bs.tab", {
        relatedTarget: e[0]
      }),
          a = t.Event("show.bs.tab", {
        relatedTarget: o[0]
      });

      if (o.trigger(r), e.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
        var s = t(document).find(i);
        this.activate(e.closest("li"), n), this.activate(s, s.parent(), function () {
          o.trigger({
            type: "hidden.bs.tab",
            relatedTarget: e[0]
          }), e.trigger({
            type: "shown.bs.tab",
            relatedTarget: o[0]
          });
        });
      }
    }
  }, e.prototype.activate = function (n, i, o) {
    var r = i.find("> .active"),
        a = o && t.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);

    function s() {
      r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? n.addClass("in") : n.removeClass("fade"), n.parent(".dropdown-menu").length && n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o();
    }

    r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(e.TRANSITION_DURATION) : s(), r.removeClass("in");
  };
  var i = t.fn.tab;
  t.fn.tab = n, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
    return t.fn.tab = i, this;
  };

  var o = function o(e) {
    e.preventDefault(), n.call(t(this), "show");
  };

  t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o);
}(jQuery), function (t) {
  "use strict";

  var e = function e(n, i) {
    this.options = t.extend({}, e.DEFAULTS, i);
    var o = this.options.target === e.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
    this.$target = o.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(n), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
  };

  function n(n) {
    return this.each(function () {
      var i = t(this),
          o = i.data("bs.affix");
      o || i.data("bs.affix", o = new e(this, "object" == typeof n && n)), "string" == typeof n && o[n]();
    });
  }

  e.VERSION = "3.4.1", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
    offset: 0,
    target: window
  }, e.prototype.getState = function (t, e, n, i) {
    var o = this.$target.scrollTop(),
        r = this.$element.offset(),
        a = this.$target.height();
    if (null != n && "top" == this.affixed) return o < n && "top";
    if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + a <= t - i) && "bottom";
    var s = null == this.affixed;
    return null != n && o <= n ? "top" : null != i && (s ? o : r.top) + (s ? a : e) >= t - i && "bottom";
  }, e.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(e.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
        n = this.$element.offset();
    return this.pinnedOffset = n.top - t;
  }, e.prototype.checkPositionWithEventLoop = function () {
    setTimeout(t.proxy(this.checkPosition, this), 1);
  }, e.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var n = this.$element.height(),
          i = this.options.offset,
          o = i.top,
          r = i.bottom,
          a = Math.max(t(document).height(), t(document.body).height());
      "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
      var s = this.getState(a, n, o, r);

      if (this.affixed != s) {
        null != this.unpin && this.$element.css("top", "");
        var l = "affix" + (s ? "-" + s : ""),
            c = t.Event(l + ".bs.affix");
        if (this.$element.trigger(c), c.isDefaultPrevented()) return;
        this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix");
      }

      "bottom" == s && this.$element.offset({
        top: a - n - r
      });
    }
  };
  var i = t.fn.affix;
  t.fn.affix = n, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function () {
    return t.fn.affix = i, this;
  }, t(window).on("load", function () {
    t('[data-spy="affix"]').each(function () {
      var e = t(this),
          i = e.data();
      i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), n.call(e, i);
    });
  });
}(jQuery), function (t) {
  "use strict";

  t.patternfly = {
    version: "3.59.0",
    pfBreakpoints: {
      tablet: 768,
      desktop: 1200
    }
  };
}("undefined" != typeof window ? window : global), function (t) {
  "use strict";

  t.patternfly.pfPaletteColors = {
    black: "#030303",
    black100: "#fafafa",
    black200: "#ededed",
    black300: "#d1d1d1",
    black400: "#bbbbbb",
    black500: "#8b8d8f",
    black600: "#72767b",
    black700: "#4d5258",
    black800: "#393f44",
    black900: "#292e34",
    blue: "#0088ce",
    blue100: "#bee1f4",
    blue200: "#7dc3e8",
    blue300: "#39a5dc",
    blue400: "#0088ce",
    blue500: "#00659c",
    blue600: "#004368",
    blue700: "#002235",
    gold: "#f0ab00",
    gold100: "#fbeabc",
    gold200: "#f9d67a",
    gold300: "#f5c12e",
    gold400: "#f0ab00",
    gold500: "#b58100",
    gold600: "#795600",
    gold700: "#3d2c00",
    orange: "#ec7a08",
    orange100: "#fbdebf",
    orange200: "#f7bd7f",
    orange300: "#f39d3c",
    orange400: "#ec7a08",
    orange500: "#b35c00",
    orange600: "#773d00",
    orange700: "#3b1f00",
    lightBlue: "#00b9e4",
    lightBlue100: "#beedf9",
    lightBlue200: "#7cdbf3",
    lightBlue300: "#35caed",
    lightBlue400: "#00b9e4",
    lightBlue500: "#008bad",
    lightBlue600: "#005c73",
    lightBlue700: "#002d39",
    green: "#3f9c35",
    green100: "#cfe7cd",
    green200: "#9ecf99",
    green300: "#6ec664",
    green400: "#3f9c35",
    green500: "#2d7623",
    green600: "#1e4f18",
    green700: "#0f280d",
    lightGreen: "#92d400",
    lightGreen100: "#e4f5bc",
    lightGreen200: "#c8eb79",
    lightGreen300: "#ace12e",
    lightGreen400: "#92d400",
    lightGreen500: "#6ca100",
    lightGreen600: "#486b00",
    lightGreen700: "#253600",
    cyan: "#007a87",
    cyan100: "#bedee1",
    cyan200: "#7dbdc3",
    cyan300: "#3a9ca6",
    cyan400: "#007a87",
    cyan500: "#005c66",
    cyan600: "#003d44",
    cyan700: "#001f22",
    purple: "#703fec",
    purple100: "#c7bfff",
    purple200: "#a18fff",
    purple300: "#8461f7",
    purple400: "#703fec",
    purple500: "#582fc0",
    purple600: "#40199a",
    purple700: "#1f0066",
    red: "#cc0000",
    red100: "#cc0000",
    red200: "#a30000",
    red300: "#8b0000",
    red400: "#470000",
    red500: "#2c0000"
  };
}("undefined" != typeof window ? window : global), function (t) {
  "use strict";

  var e = t.patternfly;
  e.pfSetDonutChartTitle = function (e, n, i) {
    var o = t.d3.select(e).select("text.c3-chart-arcs-title");
    o.text(""), o.insert("tspan").text(n).classed("donut-title-big-pf", !0).attr("dy", 0).attr("x", 0), o.insert("tspan").text(i).classed("donut-title-small-pf", !0).attr("dy", 20).attr("x", 0);
  }, e.pfDonutTooltipContents = function (t, e, n, i) {
    return '<table class="c3-tooltip">  <tr>    <td><span style="background-color:' + i(t[0].id) + '"></span><strong>' + t[0].value + "</strong> " + t[0].name + "</td>    <td>" + Math.round(1e3 * t[0].ratio) / 10 + "%</td>  </tr></table>";
  }, e.pfGetUtilizationDonutTooltipContentsFn = function (t) {
    return function (e) {
      return '<span class="donut-tooltip-pf" style="white-space: nowrap;">' + Math.round(1e3 * e[0].ratio) / 10 + "% " + t + " " + e[0].name + "</span>";
    };
  }, e.pfGetBarChartTooltipContentsFn = function (t) {
    return function (e) {
      return '<table class="c3-tooltip">  <tr>    <td><strong>' + (t ? t[e[0].index] : e[0].index) + ":</td>    <td>" + e[0].value + "</td>  </tr></table>";
    };
  }, e.pfSingleLineChartTooltipContentsFn = function (t) {
    return function (e) {
      return '<table class="c3-tooltip">  <tr>    <td><strong>' + (t ? t[e[0].index] : e[0].index) + ":</td>    <td>" + e[0].value + "</td>  </tr></table>";
    };
  }, e.pfPieTooltipContents = function (t, n, i, o) {
    return e.pfDonutTooltipContents(t, n, i, o);
  }, e.c3ChartDefaults = function () {
    var t = function t() {
      return {
        pattern: [e.pfPaletteColors.blue, e.pfPaletteColors.blue300, e.pfPaletteColors.green, e.pfPaletteColors.orange, e.pfPaletteColors.red]
      };
    },
        n = function n() {
      return {
        contents: e.pfGetBarChartTooltipContentsFn()
      };
    },
        i = function i() {
      return {
        contents: e.pfGetBarChartTooltipContentsFn()
      };
    };

    return {
      getDefaultColors: t,
      getDefaultBarGrid: function getDefaultBarGrid() {
        return {
          y: {
            show: !0
          }
        };
      },
      getDefaultBarTooltip: function getDefaultBarTooltip(t) {
        return {
          contents: e.pfGetBarChartTooltipContentsFn(t)
        };
      },
      getDefaultBarLegend: function getDefaultBarLegend() {
        return {
          show: !1
        };
      },
      getDefaultBarConfig: function getDefaultBarConfig(t) {
        return {
          color: this.getDefaultColors(),
          grid: this.getDefaultBarGrid(),
          tooltip: this.getDefaultBarTooltip(t),
          legend: this.getDefaultBarLegend()
        };
      },
      getDefaultGroupedBarGrid: function getDefaultGroupedBarGrid() {
        return {
          y: {
            show: !0
          }
        };
      },
      getDefaultGroupedBarLegend: function getDefaultGroupedBarLegend() {
        return {
          show: !0,
          position: "bottom"
        };
      },
      getDefaultGroupedBarConfig: function getDefaultGroupedBarConfig() {
        return {
          color: this.getDefaultColors(),
          grid: this.getDefaultGroupedBarGrid(),
          legend: this.getDefaultGroupedBarLegend()
        };
      },
      getDefaultStackedBarGrid: function getDefaultStackedBarGrid() {
        return {
          y: {
            show: !0
          }
        };
      },
      getDefaultStackedBarLegend: function getDefaultStackedBarLegend() {
        return {
          show: !0,
          position: "bottom"
        };
      },
      getDefaultStackedBarConfig: function getDefaultStackedBarConfig() {
        return {
          color: this.getDefaultColors(),
          grid: this.getDefaultStackedBarGrid(),
          legend: this.getDefaultStackedBarLegend()
        };
      },
      getDefaultDonut: function getDefaultDonut(t) {
        return {
          title: t,
          label: {
            show: !1
          },
          width: 11
        };
      },
      getDefaultDonutSize: function getDefaultDonutSize() {
        return {
          height: 171
        };
      },
      getDefaultDonutColors: function getDefaultDonutColors() {
        return {
          pattern: [e.pfPaletteColors.blue, e.pfPaletteColors.black300]
        };
      },
      getDefaultDonutTooltip: function getDefaultDonutTooltip() {
        return {
          show: !1
        };
      },
      getDefaultDonutLegend: function getDefaultDonutLegend() {
        return {
          show: !1
        };
      },
      getDefaultDonutConfig: function getDefaultDonutConfig(t) {
        return {
          donut: this.getDefaultDonut(t),
          size: this.getDefaultDonutSize(),
          legend: this.getDefaultDonutLegend(),
          color: this.getDefaultDonutColors(),
          tooltip: this.getDefaultDonutTooltip()
        };
      },
      getDefaultRelationshipDonutConfig: function getDefaultRelationshipDonutConfig(t) {
        return {
          donut: this.getDefaultDonut(t),
          size: this.getDefaultDonutSize(),
          legend: this.getDefaultDonutLegend(),
          color: this.getDefaultRelationshipDonutColors(),
          tooltip: this.getDefaultDonutTooltip()
        };
      },
      getDefaultPie: function getDefaultPie() {
        return {
          expand: !0,
          label: {
            show: !1
          }
        };
      },
      getDefaultPieSize: function getDefaultPieSize() {
        return {
          height: 171
        };
      },
      getDefaultPieColors: function getDefaultPieColors() {
        return {
          pattern: [e.pfPaletteColors.blue, e.pfPaletteColors.black300]
        };
      },
      getDefaultRelationshipDonutColors: function getDefaultRelationshipDonutColors() {
        return {
          pattern: [e.pfPaletteColors.blue, e.pfPaletteColors.red100, e.pfPaletteColors.orange400, e.pfPaletteColors.green400, e.pfPaletteColors.cyan500, e.pfPaletteColors.gold200]
        };
      },
      getDefaultPieTooltip: function getDefaultPieTooltip() {
        return {
          contents: e.pfPieTooltipContents
        };
      },
      getDefaultPieLegend: function getDefaultPieLegend() {
        return {
          show: !1
        };
      },
      getDefaultPieConfig: function getDefaultPieConfig() {
        return {
          pie: this.getDefaultPie(),
          size: this.getDefaultPieSize(),
          legend: this.getDefaultPieLegend(),
          color: this.getDefaultPieColors(),
          tooltip: this.getDefaultPieTooltip()
        };
      },
      getDefaultSparklineArea: function getDefaultSparklineArea() {
        return {
          zerobased: !0
        };
      },
      getDefaultSparklineSize: function getDefaultSparklineSize() {
        return {
          height: 60
        };
      },
      getDefaultSparklineAxis: function getDefaultSparklineAxis() {
        return {
          x: {
            show: !1
          },
          y: {
            show: !1
          }
        };
      },
      getDefaultSparklineLegend: function getDefaultSparklineLegend() {
        return {
          show: !1
        };
      },
      getDefaultSparklinePoint: function getDefaultSparklinePoint() {
        return {
          r: 1,
          focus: {
            expand: {
              r: 4
            }
          }
        };
      },
      getDefaultSparklineTooltip: function getDefaultSparklineTooltip() {
        return {
          contents: function contents(t) {
            return '<span class="c3-tooltip-sparkline">' + t[0].value + " " + t[0].name + "</span>";
          }
        };
      },
      getDefaultSparklineConfig: function getDefaultSparklineConfig() {
        return {
          area: {
            zerobased: !0
          },
          size: {
            height: 60
          },
          axis: {
            x: {
              show: !1
            },
            y: {
              show: !1
            }
          },
          color: t(),
          legend: {
            show: !1
          },
          point: {
            r: 1,
            focus: {
              expand: {
                r: 4
              }
            }
          },
          tooltip: {
            contents: function contents(t) {
              return '<span class="c3-tooltip-sparkline">' + t[0].value + " " + t[0].name + "</span>";
            }
          }
        };
      },
      getDefaultLineAxis: function getDefaultLineAxis() {
        return {
          x: {
            show: !0
          },
          y: {
            show: !0
          }
        };
      },
      getDefaultLineGrid: function getDefaultLineGrid() {
        return {
          x: {
            show: !1
          },
          y: {
            show: !0
          }
        };
      },
      getDefaultLineLegend: function getDefaultLineLegend() {
        return {
          show: !0
        };
      },
      getDefaultLinePoint: function getDefaultLinePoint() {
        return {
          r: 3,
          focus: {
            expand: {
              r: 5
            }
          }
        };
      },
      getDefaultLineConfig: function getDefaultLineConfig() {
        return {
          axis: {
            x: {
              show: !0
            },
            y: {
              show: !0
            }
          },
          grid: {
            x: {
              show: !1
            },
            y: {
              show: !0
            }
          },
          color: t(),
          legend: {
            show: !0
          },
          point: {
            r: 3,
            focus: {
              expand: {
                r: 5
              }
            }
          }
        };
      },
      getDefaultSingleLineTooltip: n,
      getDefaultSingleLineConfig: function getDefaultSingleLineConfig() {
        return {
          axis: {
            x: {
              show: !0
            },
            y: {
              show: !0
            }
          },
          grid: {
            x: {
              show: !1
            },
            y: {
              show: !0
            }
          },
          color: t(),
          legend: {
            show: !1
          },
          point: {
            r: 3,
            focus: {
              expand: {
                r: 5
              }
            }
          },
          tooltip: n()
        };
      },
      getDefaultAreaAxis: function getDefaultAreaAxis() {
        return {
          x: {
            show: !0
          },
          y: {
            show: !0
          }
        };
      },
      getDefaultAreaGrid: function getDefaultAreaGrid() {
        return {
          x: {
            show: !1
          },
          y: {
            show: !0
          }
        };
      },
      getDefaultAreaLegend: function getDefaultAreaLegend() {
        return {
          show: !0
        };
      },
      getDefaultAreaPoint: function getDefaultAreaPoint() {
        return {
          r: 3,
          focus: {
            expand: {
              r: 5
            }
          }
        };
      },
      getDefaultAreaConfig: function getDefaultAreaConfig() {
        return {
          axis: {
            x: {
              show: !0
            },
            y: {
              show: !0
            }
          },
          grid: {
            x: {
              show: !1
            },
            y: {
              show: !0
            }
          },
          color: t(),
          legend: {
            show: !0
          },
          point: {
            r: 3,
            focus: {
              expand: {
                r: 5
              }
            }
          }
        };
      },
      getDefaultSingleAreaTooltip: i,
      getDefaultSingleAreaConfig: function getDefaultSingleAreaConfig() {
        return {
          axis: {
            x: {
              show: !0
            },
            y: {
              show: !0
            }
          },
          grid: {
            x: {
              show: !1
            },
            y: {
              show: !0
            }
          },
          color: t(),
          legend: {
            show: !1
          },
          point: {
            r: 3,
            focus: {
              expand: {
                r: 5
              }
            }
          },
          tooltip: i()
        };
      }
    };
  };
}("undefined" != typeof window ? window : global), function (t) {
  "use strict";

  void 0 !== patternfly && (t.pfBreakpoints = patternfly.pfBreakpoints);
}(jQuery), function (t) {
  "use strict";

  t.fn.pfList = function () {
    function e(e) {
      var o, r, a, s;
      (r = (o = t(e)).parentsUntil(".list-pf", "[data-list=expansion]").first()).length || (r = o.closest(".list-pf-item, .list-pf-expansion")), (a = r.find(".collapse").first()).toggleClass("in"), i(r, a.hasClass("in")), n(s = r.closest(".list-pf-item"), s.find(".collapse").first().hasClass("in"));
    }

    function n(t, e) {
      e ? t.addClass("active") : t.removeClass("active");
    }

    function i(t, e) {
      var n = t.find(".list-pf-chevron .fa").first();
      e ? (n.removeClass("fa-angle-right"), n.addClass("fa-angle-down")) : (n.addClass("fa-angle-right"), n.removeClass("fa-angle-down"));
    }

    var o;
    return (o = this).find("[data-list=expansion], .list-pf-item, .list-pf-expansion").each(function (e, o) {
      var r = t(o),
          a = r.find(".collapse").first().hasClass("in");
      i(r, a), r.hasClass("list-pf-item") && n(r, a);
    }), o.find(".list-pf-container").each(function (n, i) {
      var o = t(i),
          r = o.find("[data-list=toggle]");
      r.length || (r = o), r.on("keydown", function (t) {
        13 !== t.keyCode && 32 !== t.keyCode || (e(this), t.stopPropagation(), t.preventDefault());
      }), r.on("click", function (t) {
        e(this), t.stopPropagation(), t.preventDefault();
      });
    }), this;
  };
}(jQuery), function (t) {
  "use strict";

  t.fn.sidebar = function () {
    var e = 0;
    t(".navbar-pf .navbar-toggle").is(":hidden") && (e = t(document).height() - t(".navbar-pf").outerHeight()), t(".sidebar-pf").parent(".row").children('[class*="col-"]').css({
      "min-height": e
    });
  }, t(document).ready(function () {
    t(".sidebar-pf").length > 0 && 0 === t(".datatable").length && t.fn.sidebar();
  }), t(window).on("resize", function () {
    t(".sidebar-pf").length > 0 && t.fn.sidebar();
  });
}(jQuery), function (t) {
  "use strict";

  t.fn.popovers = function () {
    return this.popover(), this.filter("[data-close=true]").each(function (e, n) {
      var i = t(n),
          o = i.attr("data-original-title") + '<button type="button" class="close" aria-hidden="true"><span class="pficon pficon-close"></span></button>';
      i.attr("data-original-title", o);
    }), this.on("click", function (e) {
      var n = t(this),
          i = n.next(".popover").find(".popover-title");
      i.find(".close").parent(".popover-title").addClass("closable"), i.find(".close").on("click", function () {
        n.popover("hide");
      }), e.preventDefault();
    }), this;
  };
}(jQuery), function (t) {
  "use strict";

  t.fn.dataTableExt && (t.extend(!0, t.fn.dataTable.defaults, {
    bDestroy: !0,
    bAutoWidth: !1,
    iDisplayLength: 20,
    sDom: "<'dataTables_header' f i r ><'table-responsive'  t ><'dataTables_footer' p >",
    oLanguage: {
      sInfo: "Showing <b>_START_</b> to <b>_END_</b> of <b>_TOTAL_</b> Items",
      sInfoFiltered: "(of <b>_MAX_</b>)",
      sInfoEmpty: "Showing <b>0</b> Results",
      sZeroRecords: "<p>Suggestions</p><ul><li>Check the javascript regular expression syntax of the search term.</li><li>Check that the correct menu option is chosen (token ID vs. user ID).</li><li>Use wildcards (* to match 0 or more characters, + to match 1 or more characters, ? to match 0 or 1 character).</li><li>Clear the search field, then click Search to return to the 20 most recent records.</li></ul>",
      sSearch: ""
    },
    sPaginationType: "bootstrap_input",
    oSearch: {
      sSearch: "",
      bRegex: !0,
      bSmart: !1
    }
  }), t.extend(t.fn.dataTableExt.oStdClasses, {
    sWrapper: "dataTables_wrapper"
  }), t.fn.dataTableExt.oApi.fnPagingInfo = function (t) {
    return {
      iStart: t._iDisplayStart,
      iEnd: t.fnDisplayEnd(),
      iLength: t._iDisplayLength,
      iTotal: t.fnRecordsTotal(),
      iFilteredTotal: t.fnRecordsDisplay(),
      iPage: -1 === t._iDisplayLength ? 0 : Math.ceil(t._iDisplayStart / t._iDisplayLength),
      iTotalPages: -1 === t._iDisplayLength ? 0 : Math.ceil(t.fnRecordsDisplay() / t._iDisplayLength)
    };
  }, t.extend(t.fn.dataTableExt.oPagination, {
    bootstrap_input: {
      fnInit: function fnInit(e, n, i) {
        var o,
            r,
            a = function a(t) {
          t.preventDefault(), e.oApi._fnPageChange(e, t.data.action) && i(e);
        };

        t(n).append('<ul class="pagination">  <li class="first disabled"><span class="i fa fa-angle-double-left"></span></li>  <li class="prev disabled"><span class="i fa fa-angle-left"></span></li></ul><div class="pagination-input">  <input type="text" class="paginate_input">  <span class="paginate_of">of <b>3</b></span></div><ul class="pagination">  <li class="next disabled"><span class="i fa fa-angle-right"></span></li>  <li class="last disabled"><span class="i fa fa-angle-double-right"></span></li></ul>'), o = t("li", n), t(o[0]).bind("click.DT", {
          action: "first"
        }, a), t(o[1]).bind("click.DT", {
          action: "previous"
        }, a), t(o[2]).bind("click.DT", {
          action: "next"
        }, a), t(o[3]).bind("click.DT", {
          action: "last"
        }, a), r = t("input", n), t(r).keyup(function (t) {
          var n;

          if (38 === t.which || 39 === t.which ? this.value += 1 : (37 === t.which || 40 === t.which) && this.value > 1 && (this.value -= 1), "" !== this.value && this.value.match(/[0-9]/)) {
            if ((n = e._iDisplayLength * (this.value - 1)) >= e.fnRecordsDisplay()) return e._iDisplayStart = (Math.ceil((e.fnRecordsDisplay() - 1) / e._iDisplayLength) - 1) * e._iDisplayLength, void i(e);
            e._iDisplayStart = n, i(e);
          }
        });
      },
      fnUpdate: function fnUpdate(e, n) {
        var i,
            o = e.oInstance.fnPagingInfo(),
            r = e.aanFeatures.p,
            a = r.length,
            s = Math.ceil(e.fnRecordsDisplay() / e._iDisplayLength),
            l = Math.ceil(e._iDisplayStart / e._iDisplayLength) + 1;

        for (i = 0; i < a; i += 1) {
          t(".paginate_input", r[i]).val(l).siblings(".paginate_of").find("b").html(s), 0 === o.iPage ? (t("li.first", r[i]).addClass("disabled"), t("li.prev", r[i]).addClass("disabled")) : (t("li.first", r[i]).removeClass("disabled"), t("li.prev", r[i]).removeClass("disabled")), o.iPage === o.iTotalPages - 1 || 0 === o.iTotalPages ? (t("li.next", r[i]).addClass("disabled"), t("li.last", r[i]).addClass("disabled")) : (t("li.next", r[i]).removeClass("disabled"), t("li.last", r[i]).removeClass("disabled"));
        }
      }
    }
  }));
}(jQuery), function (t) {
  "use strict";

  t.fn.navigation = function () {
    var e = t(".layout-pf-alt-fixed .nav-pf-vertical-alt"),
        n = t(".container-pf-alt-nav-pf-vertical-alt"),
        i = t(".navbar-toggle"),
        o = !1,
        r = function r() {
      var i = t(window).width();
      e.removeClass("hidden show-mobile-nav collapsed"), n.removeClass("collapsed-nav hidden-nav"), (i < t.pfBreakpoints.desktop || o) && (e.addClass("collapsed"), n.addClass("collapsed-nav")), i < t.pfBreakpoints.tablet && (e.addClass("hidden"), e.removeClass("collapsed"), n.removeClass("collapsed-nav"), n.addClass("hidden-nav"));
    },
        a = function a() {
      t("html").addClass("transitions");
    };

    t(window).on("resize", function () {
      r(), a();
    }), r(), i.on("click", function (t) {
      var i = n.hasClass("hidden-nav");
      a(), i && e.hasClass("show-mobile-nav") ? e.removeClass("show-mobile-nav") : i ? e.addClass("show-mobile-nav") : e.hasClass("collapsed") ? (e.removeClass("collapsed"), n.removeClass("collapsed-nav"), o = !1) : (e.addClass("collapsed"), n.addClass("collapsed-nav"), o = !0);
    }), t('.nav-pf-vertical-alt [data-toggle="tooltip"]').tooltip({
      container: "body",
      delay: {
        show: "500",
        hide: "200"
      }
    }), t(".nav-pf-vertical-alt").on("show.bs.tooltip", function (e) {
      return t(this).hasClass("collapsed");
    });
  }, t(document).ready(function () {
    t(".nav-pf-vertical-alt").length > 0 && t.fn.navigation();
  });
}(jQuery), function (t) {
  "use strict";

  t.fn.countRemainingChars = function (e) {
    var n = t.extend({
      charsMaxLimit: 100,
      charsWarnRemaining: 5,
      blockInputAtMaxLimit: !1
    }, e),
        i = this,
        o = t("#" + n.countFld).text(n.charsMaxLimit),
        r = function r(t) {
      var e = n.charsMaxLimit - t;
      o.text(e), o.toggleClass("chars-warn-remaining-pf", e <= n.charsWarnRemaining), i.trigger(e < 0 ? "overCharsMaxLimitEvent" : "underCharsMaxLimitEvent", i.attr("id"));
    };

    return this.on("paste", function (t) {
      setTimeout(function () {
        var t,
            e = i.val().length;
        n.blockInputAtMaxLimit && e > n.charsMaxLimit && (t = (t = i.val()).substring(0, n.charsMaxLimit), i.val(t), e = i.val().length), r(e);
      }, 100);
    }), this.keyup(function (t) {
      r(i.val().length);
    }), this.keydown(function (t) {
      var e = i.val().length;
      n.blockInputAtMaxLimit && e >= n.charsMaxLimit && 8 !== t.keyCode && t.preventDefault();
    }), this;
  };
}(jQuery), function (t) {
  "use strict";

  void 0 !== patternfly && (t.pfPaletteColors = patternfly.pfPaletteColors);
}(jQuery), function (t) {
  "use strict";

  void 0 !== patternfly && (t.fn.pfSetDonutChartTitle = patternfly.pfSetDonutChartTitle, t.fn.pfDonutTooltipContents = patternfly.pfDonutTooltipContents, t.fn.pfGetUtilizationDonutTooltipContentsFn = patternfly.pfGetUtilizationDonutTooltipContentsFn, t.fn.pfGetBarChartTooltipContentsFn = patternfly.pfGetBarChartTooltipContentsFn, t.fn.pfSingleLineChartTooltipContentsFn = patternfly.pfSingleLineChartTooltipContentsFn, t.fn.pfPieTooltipContents = patternfly.pfPieTooltipContents, t.fn.c3ChartDefaults = patternfly.c3ChartDefaults);
}(jQuery), function (t) {
  "use strict";

  t.fn.initCollapseHeights = function (e) {
    var n,
        i = this,
        o = e;
    (n = function n() {
      var e,
          n,
          r,
          a,
          s = "hidden";
      e = i.height(), (n = i.find(".collapse.in")) && n.length > 0 && n.removeClass("in"), r = 0, i.children().each(t.proxy(function (e, n) {
        var i = t(n);
        r += i.outerHeight(!0);
      }, i)).end(), (a = e - r) < 25 && (a = 25, s = "auto"), n && n.length > 0 && n.addClass("in"), setTimeout(function () {
        i.find('[data-toggle="collapse"]').each(t.proxy(function (e, n) {
          var i,
              r,
              s,
              l,
              c = 0;
          (r = (i = t(n)).attr("data-target")) || (r = i.attr("href")), s = t(r), l = s, o && (1 === (l = s.find(o)).length ? (c = 0, s.children().each(t.proxy(function (e, n) {
            var i = t(n);
            n !== l[0] && (c += i.outerHeight(!0));
          }, s)).end(), a -= c) : l = s), l.css({
            "max-height": a - c + "px",
            "overflow-y": "auto"
          });
        }, i)).end(), i.css({
          "overflow-y": s
        });
      }, 100);
    })(), t(window).on("resize", n);
  }, t.fn.initFixedAccordion = function () {
    var e;
    this.on("show.bs.collapse", ".collapse", function (e) {
      t(e.target.parentNode).addClass("panel-open");
    }), this.on("hide.bs.collapse", ".collapse", function (e) {
      t(e.target.parentNode).removeClass("panel-open");
    }), this.find(".panel").each(function (e, n) {
      t(n).removeClass("panel-open");
    }), (e = t(this.find(".collapse.in"))[0]) && t(e.parentNode).addClass("panel-open");
  };
}(jQuery), function (t) {
  "use strict";

  function e(e, n) {
    var i = n.attr("data-parent");
    if ("string" == typeof i) return isNaN(i) ? (i = t(i)).length > 1 && (i = e.closest(i)) : i = t(e[parseInt(i, 10)]), i;
  }

  function n(t, e) {
    e && (e.find(".treegrid-node > span.expand-icon").toggleClass("fa-angle-right", e.hasClass("collapsed")).toggleClass("fa-angle-down", !e.hasClass("collapsed")), t.toggleClass("hidden", e.hasClass("collapsed")), e.hasClass("collapsed") && t.addClass("collapsed"));
  }

  function i(t) {
    t.find("tbody > tr").removeClass("odd"), t.find("tbody > tr:not(.hidden):odd").addClass("odd");
  }

  t.fn.treegrid = function (o) {
    var r, a, s;
    a = this.find("tbody > tr"), s = this, t.each(a, function () {
      var l, c;

      if (l = t(this), c = e(a, l), l.children(".treegrid-node").prepend('<span class="icon expand-icon fa"/>'), l.children(".treegrid-node").on("click", function (r) {
        var c = l.find("span.expand-icon");
        o && "function" == typeof o.callback && o.callback(r), c.hasClass("fa-angle-right") && l.removeClass("collapsed"), c.hasClass("fa-angle-down") && l.addClass("collapsed"), t.each(a.slice(a.index(l) + 1), function () {
          n(t(this), e(a, t(this)));
        }), i(s);
      }), c) {
        for (r = c.find(".treegrid-node > span.indent").length + 1; r > 0; r -= 1) {
          l.children(".treegrid-node").prepend('<span class="indent"/>');
        }

        n(l, c);
      }
    }), i(s);
  };
}(jQuery), function (t) {
  "use strict";

  t.fn.setupVerticalNavigation = function (e, n, i) {
    var o = t.extend({
      hoverDelay: 500,
      hideDelay: 700,
      rememberOpenState: !0,
      storage: "localStorage"
    }, i || {}),
        r = t(".nav-pf-vertical"),
        a = t(".container-pf-nav-pf-vertical"),
        s = t(".navbar-toggle"),
        l = !0,
        c = !1,
        u = !1,
        f = "sessionStorage" === o.storage ? "sessionStorage" : "localStorage",
        d = function d() {
      return a.hasClass("hidden-nav");
    },
        p = function p(e) {
      setTimeout(function () {
        t(window).trigger("resize");
      }, e);
    },
        h = function h() {
      !d() && u || (r.addClass("secondary-visible-pf"), a.addClass("secondary-visible-pf")), u || p(100);
    },
        g = function g() {
      r.removeClass("secondary-visible-pf"), a.removeClass("secondary-visible-pf"), r.find(".secondary-nav-item-pf.is-hover").length <= 1 && r.removeClass("hover-secondary-nav-pf"), r.find(".mobile-nav-item-pf").each(function (e, n) {
        t(n).removeClass("mobile-nav-item-pf");
      }), r.find(".is-hover").each(function (e, n) {
        t(n).removeClass("is-hover");
      });
    },
        v = function v(e) {
      t(".nav-pf-vertical .list-group-item.active").removeClass("active"), e.addClass("active").parents(".list-group-item").addClass("active");
    },
        m = function m() {
      d() ? (r.removeClass("show-mobile-nav"), g(), r.find(".mobile-nav-item-pf").each(function (e, n) {
        t(n).removeClass("mobile-nav-item-pf");
      })) : h();
    },
        y = function y(e, n) {
      e ? (n.addClass("collapsed"), r.addClass("collapsed-secondary-nav-pf"), a.addClass("collapsed-secondary-nav-pf")) : (n ? n.removeClass("collapsed") : r.find('[data-toggle="collapse-secondary-nav"]').each(function (e, n) {
        t(n).removeClass("collapsed");
      }), r.removeClass("collapsed-secondary-nav-pf"), a.removeClass("collapsed-secondary-nav-pf"));
    },
        b = function b(e, n) {
      e ? (n.addClass("collapsed"), r.addClass("collapsed-tertiary-nav-pf"), a.addClass("collapsed-tertiary-nav-pf"), y(!1)) : (n ? n.removeClass("collapsed") : r.find('[data-toggle="collapse-tertiary-nav"]').each(function (e, n) {
        t(n).removeClass("collapsed");
      }), r.removeClass("collapsed-tertiary-nav-pf"), a.removeClass("collapsed-tertiary-nav-pf"));
    },
        w = function w(e, n) {
      t(document).find(".list-group-item.mobile-nav-item-pf").each(function (e, n) {
        t(n).removeClass("mobile-nav-item-pf");
      }), t(document).find(".list-group-item.mobile-secondary-item-pf").each(function (e, n) {
        t(n).removeClass("mobile-secondary-item-pf");
      }), e ? (e.addClass("mobile-nav-item-pf"), n ? (n.addClass("mobile-secondary-item-pf"), r.removeClass("show-mobile-secondary"), r.addClass("show-mobile-tertiary")) : (r.addClass("show-mobile-secondary"), r.removeClass("show-mobile-tertiary"))) : (r.removeClass("show-mobile-secondary"), r.removeClass("show-mobile-tertiary"));
    },
        x = function x() {
      r.hasClass("hidden") || (r.addClass("hidden"), r.removeClass("collapsed"), a.removeClass("collapsed-nav"), a.addClass("hidden-nav"), y(!1), b(!1), c = !1);
    },
        C = function C() {
      r.removeClass("hidden show-mobile-nav"), a.removeClass("hidden-nav");
    },
        T = function T() {
      var e,
          n = t(window).width();
      l && (n < t.pfBreakpoints.tablet && !c ? x() : r.hasClass("hidden") && C(), n < t.pfBreakpoints.desktop ? (u || (r.addClass("collapsed"), a.addClass("collapsed-nav")), n >= t.pfBreakpoints.tablet && g(), u = !0) : (e = u && r.find(".secondary-nav-item-pf.active").length > 0, u = !1, e && h()), c ? (r.addClass("collapsed"), a.addClass("collapsed-nav")) : (r.removeClass("collapsed"), a.removeClass("collapsed-nav")));
    },
        D = function D() {
      r.addClass("collapsed"), a.addClass("collapsed-nav"), u && g(), c = !0;
    },
        k = function k() {
      t("html").addClass("transitions");
    },
        S = function S() {
      r.addClass("force-hide-secondary-nav-pf"), setTimeout(function () {
        r.removeClass("force-hide-secondary-nav-pf");
      }, 500);
    };

    return t.fn.setupVerticalNavigation.self || (t.fn.setupVerticalNavigation.self = {
      hideMenu: function hideMenu() {
        l = !1, x();
      },
      showMenu: function showMenu() {
        l = !0, C();
      },
      isVisible: function isVisible() {
        return l;
      }
    }, t(window).on("resize", function () {
      T(), k();
    }), function (e) {
      var i;
      r.addClass("hide-nav-pf"), a.addClass("hide-nav-pf"), T(), s.on("click", function (e) {
        var i;
        k(), d() ? r.hasClass("show-mobile-nav") ? r.removeClass("show-mobile-nav") : (w(), r.addClass("show-mobile-nav"), n || (i = t(".drawer-pf")).length && (t(".drawer-pf-trigger").removeClass("open"), i.addClass("hide"))) : r.hasClass("collapsed") ? (o.rememberOpenState && window[f].setItem("patternfly-navigation-primary", "expanded"), r.removeClass("collapsed"), a.removeClass("collapsed-nav"), c = !1, u || p(100)) : (o.rememberOpenState && window[f].setItem("patternfly-navigation-primary", "collapsed"), D());
      }), i = e, t(document).find(".nav-pf-vertical .list-group-item").each(function (e, n) {
        var o,
            s = t(n),
            l = s.closest('[class*="nav-pf-"]');
        l.hasClass("nav-pf-vertical") ? o = function o(e) {
          var n,
              o,
              a = t(this);
          a.hasClass("secondary-nav-item-pf") ? d() ? w(a) : i && (o = n = s.find(".nav-pf-secondary-nav > .list-group > .list-group-item").eq(0), n.hasClass("tertiary-nav-item-pf") && (o = n.find(".nav-pf-tertiary-nav > .list-group > .list-group-item").eq(0)), v(o), e.stopImmediatePropagation()) : (g(), d() && (w(), r.removeClass("show-mobile-nav")), i && (v(a), e.stopImmediatePropagation()));
        } : l.hasClass("nav-pf-secondary-nav") ? o = function o(e) {
          var n,
              o,
              a = t(this);
          a.hasClass("tertiary-nav-item-pf") ? d() ? (o = s.parents(".list-group-item"), w(a, o), e.stopImmediatePropagation()) : i && (n = s.find(".nav-pf-tertiary-nav > .list-group > .list-group-item").eq(0), v(n), e.stopImmediatePropagation()) : (d() && (w(), r.removeClass("show-mobile-nav")), m(), i && (v(s), g(), e.stopImmediatePropagation()));
        } : l.hasClass("nav-pf-tertiary-nav") && (o = function o(e) {
          d() && (w(), r.removeClass("show-mobile-nav")), m(), i && (v(s), r.removeClass("tertiary-visible-pf"), a.removeClass("tertiary-visible-pf"), r.find(".tertiary-nav-item-pf.is-hover").length <= 1 && r.removeClass("hover-tertiary-nav-pf"), r.find(".mobile-nav-item-pf").each(function (e, n) {
            t(n).removeClass("mobile-nav-item-pf");
          }), r.find(".is-hover").each(function (e, n) {
            t(n).removeClass("is-hover");
          }), g(), e.stopImmediatePropagation());
        }), s.on("click.pf.secondarynav.data-api", o);
      }), t(document).find(".secondary-nav-item-pf").each(function (e, n) {
        var a = t(n);
        a.on("click.pf.secondarynav.data-api", '[data-toggle="collapse-secondary-nav"]', function (e) {
          var n = t(this);
          d() ? (w(), e.stopImmediatePropagation()) : n.hasClass("collapsed") ? (o.rememberOpenState && (window[f].setItem("patternfly-navigation-secondary", "expanded"), window[f].setItem("patternfly-navigation-tertiary", "expanded")), y(!1, n), S()) : (o.rememberOpenState && window[f].setItem("patternfly-navigation-secondary", "collapsed"), y(!0, n)), r.removeClass("hover-secondary-nav-pf"), i && e.stopImmediatePropagation();
        }), a.find(".tertiary-nav-item-pf").each(function (e, n) {
          t(n).on("click.pf.tertiarynav.data-api", '[data-toggle="collapse-tertiary-nav"]', function (e) {
            var n = t(this);
            d() ? (w(a), e.stopImmediatePropagation()) : n.hasClass("collapsed") ? (o.rememberOpenState && (window[f].setItem("patternfly-navigation-secondary", "expanded"), window[f].setItem("patternfly-navigation-tertiary", "expanded")), b(!1, n), S()) : (o.rememberOpenState && window[f].setItem("patternfly-navigation-tertiary", "collapsed"), b(!0, n)), r.removeClass("hover-secondary-nav-pf"), r.removeClass("hover-tertiary-nav-pf"), i && e.stopImmediatePropagation();
          });
        });
      }), t(document).on("mouseenter.pf.tertiarynav.data-api", ".secondary-nav-item-pf", function (e) {
        var n = t(this);
        d() || (void 0 !== n[0].navUnHoverTimeout ? (clearTimeout(n[0].navUnHoverTimeout), n[0].navUnHoverTimeout = void 0) : void 0 === n[0].navHoverTimeout && (n[0].navHoverTimeout = setTimeout(function () {
          r.addClass("hover-secondary-nav-pf"), n.addClass("is-hover"), n[0].navHoverTimeout = void 0;
        }, o.hoverDelay)));
      }), t(document).on("mouseleave.pf.tertiarynav.data-api", ".secondary-nav-item-pf", function (e) {
        var n = t(this);
        void 0 !== n[0].navHoverTimeout ? (clearTimeout(n[0].navHoverTimeout), n[0].navHoverTimeout = void 0) : void 0 === n[0].navUnHoverTimeout && r.find(".secondary-nav-item-pf.is-hover").length > 0 && (n[0].navUnHoverTimeout = setTimeout(function () {
          r.find(".secondary-nav-item-pf.is-hover").length <= 1 && r.removeClass("hover-secondary-nav-pf"), n.removeClass("is-hover"), n[0].navUnHoverTimeout = void 0;
        }, o.hideDelay));
      }), t(document).on("mouseover.pf.tertiarynav.data-api", ".tertiary-nav-item-pf", function (e) {
        var n = t(this);
        d() || (void 0 !== n[0].navUnHoverTimeout ? (clearTimeout(n[0].navUnHoverTimeout), n[0].navUnHoverTimeout = void 0) : void 0 === n[0].navHoverTimeout && (n[0].navHoverTimeout = setTimeout(function () {
          r.addClass("hover-tertiary-nav-pf"), n.addClass("is-hover"), n[0].navHoverTimeout = void 0;
        }, o.hoverDelay)));
      }), t(document).on("mouseout.pf.tertiarynav.data-api", ".tertiary-nav-item-pf", function (e) {
        var n = t(this);
        void 0 !== n[0].navHoverTimeout ? (clearTimeout(n[0].navHoverTimeout), n[0].navHoverTimeout = void 0) : void 0 === n[0].navUnHoverTimeout && (n[0].navUnHoverTimeout = setTimeout(function () {
          r.find(".tertiary-nav-item-pf.is-hover").length <= 1 && r.removeClass("hover-tertiary-nav-pf"), n.removeClass("is-hover"), n[0].navUnHoverTimeout = void 0;
        }, o.hideDelay));
      }), t('.nav-pf-vertical [data-toggle="tooltip"]').tooltip({
        container: "body",
        placement: "bottom",
        delay: {
          show: "500",
          hide: "200"
        },
        template: '<div class="nav-pf-vertical-tooltip tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
      }), t(".nav-pf-vertical").on("show.bs.tooltip", function (e) {
        return t(this).hasClass("collapsed");
      }), o.rememberOpenState && (d() || ("collapsed" === window[f].getItem("patternfly-navigation-primary") && D(), t(".nav-pf-vertical.nav-pf-vertical-collapsible-menus").length > 0 && ("collapsed" === window[f].getItem("patternfly-navigation-secondary") && y(!0, t(".secondary-nav-item-pf.active [data-toggle=collapse-secondary-nav]")), "collapsed" === window[f].getItem("patternfly-navigation-tertiary") && b(!0, t(".tertiary-nav-item-pf.active [data-toggle=collapse-tertiary-nav]"))))), r.removeClass("hide-nav-pf"), a.removeClass("hide-nav-pf"), p(250);
    }(e)), t.fn.setupVerticalNavigation.self;
  };
}(jQuery);