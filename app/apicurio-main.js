(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
  0: function _(n, t, e) {
    n.exports = e("zUnb");
  },
  crnd: function crnd(n, t) {
    function e(n) {
      return Promise.resolve().then(function () {
        var t = new Error("Cannot find module '" + n + "'");
        throw t.code = "MODULE_NOT_FOUND", t;
      });
    }

    e.keys = function () {
      return [];
    }, e.resolve = e, n.exports = e, e.id = "crnd";
  },
  zUnb: function zUnb(n, t, e) {
    "use strict";

    e.r(t);

    var i = e("CcnG"),
        o = function () {
      return function () {};
    }(),
        s = function () {
      function n(n) {
        this._ngZone = n, this.title = "apicurio", this.loading = !0;
      }

      return n.prototype.ngOnInit = function () {
        this.onMessagePort = this.onMessagePort.bind(this), this.onMessages = this.onMessages.bind(this), this.onUpdateMessage = this.onUpdateMessage.bind(this), window.addEventListener("message", this.onMessagePort);
      }, n.prototype.ngOnDestroy = function () {
        window.removeEventListener("message", this.onMessagePort);
      }, n.prototype.onMessagePort = function (n) {
        this.messagePort = n.ports[0], this.messagePort.onmessage = this.onMessages, this.messagePort.postMessage({
          message: "ready"
        });
      }, n.prototype.onMessages = function (n) {
        var t = this;

        this._ngZone.run(function () {
          switch (n.data.message) {
            case "update":
              t.onUpdateMessage(n.data.payload);
          }
        });
      }, n.prototype.onUpdateMessage = function (n) {
        this.loading = !1, this.specification = n.specification;
      }, n.prototype.onSpecification = function (n) {
        this.messagePort && this.messagePort.postMessage({
          message: "specification",
          payload: {
            specification: n
          }
        });
      }, n;
    }(),
        a = e("z5nN"),
        u = e("iutN"),
        b = e("pMnS"),
        c = e("vM2k"),
        r = e("vKLa"),
        l = e("ZR4k"),
        p = function () {
      function n() {}

      return Object.defineProperty(n.prototype, "nativeWindow", {
        get: function get() {
          return window;
        },
        enumerable: !0,
        configurable: !0
      }), n;
    }(),
        f = function () {
      function n(n) {
        this.winRef = n, this.onSpecification = new i.m(), this.apiDefinition = new r.a(), this.winRef.nativeWindow.dump = l.dump;
      }

      return Object.defineProperty(n.prototype, "specification", {
        set: function set(n) {
          this.apiDefinition.spec = JSON.parse(n);
        },
        enumerable: !0,
        configurable: !0
      }), n.prototype.ngOnInit = function () {
        this.reset();
      }, n.prototype.ngOnChanges = function (n) {
        this.reset();
      }, n.prototype.reset = function () {
        this.apiDefinition.createdBy = "user1", this.apiDefinition.createdOn = new Date(), this.apiDefinition.tags = [], this.apiDefinition.description = "", this.apiDefinition.id = "api-1";
      }, n.prototype.ngOnDestroy = function () {}, n.prototype.onChanges = function () {
        var n = this.apicurioComponent.getValue();
        this.onSpecification.emit(n);
      }, n;
    }(),
        x = i.nb({
      encapsulation: 2,
      styles: [],
      data: {}
    });

    function d(n) {
      return i.Gb(0, [i.Db(402653184, 1, {
        apicurioComponent: 0
      }), (n()(), i.pb(1, 0, null, null, 1, "api-editor", [], null, [[null, "onCommandExecuted"]], function (n, t, e) {
        var i = !0;
        return "onCommandExecuted" === t && (i = !1 !== n.component.onChanges() && i), i;
      }, c.b, c.a)), i.ob(2, 770048, [[1, 4], ["apicurioComponent", 4]], 0, r.b, [r.e, r.Z, r.z, r.Ab, r.Gb, r.Hb], {
        api: [0, "api"],
        embedded: [1, "embedded"]
      }, {
        onCommandExecuted: "onCommandExecuted"
      })], function (n, t) {
        n(t, 2, 0, t.component.apiDefinition, !0);
      }, null);
    }

    var g = e("Ip0R"),
        h = i.nb({
      encapsulation: 2,
      styles: [[""]],
      data: {}
    });

    function m(n) {
      return i.Gb(0, [(n()(), i.pb(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (n()(), i.Fb(1, null, [" loading... ", "\n"]))], null, function (n, t) {
        n(t, 1, 0, t.component.loading);
      });
    }

    function y(n) {
      return i.Gb(0, [(n()(), i.pb(0, 0, null, null, 1, "app-apicurio-host", [], null, [[null, "onSpecification"]], function (n, t, e) {
        var i = !0;
        return "onSpecification" === t && (i = !1 !== n.component.onSpecification(e) && i), i;
      }, d, x)), i.ob(1, 770048, null, 0, f, [p], {
        specification: [0, "specification"]
      }, {
        onSpecification: "onSpecification"
      })], function (n, t) {
        n(t, 1, 0, t.component.specification);
      }, null);
    }

    function w(n) {
      return i.Gb(0, [(n()(), i.gb(16777216, null, null, 1, null, m)), i.ob(1, 16384, null, 0, g.i, [i.O, i.L], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (n()(), i.gb(0, [["apicurioTpl", 2]], null, 0, null, y))], function (n, t) {
        n(t, 1, 0, t.component.loading, i.zb(t, 2));
      }, null);
    }

    function M(n) {
      return i.Gb(0, [(n()(), i.pb(0, 0, null, null, 1, "app-root", [], null, null, null, w, h)), i.ob(1, 245760, null, 0, s, [i.z], null, null)], function (n, t) {
        n(t, 1, 0);
      }, null);
    }

    var v = i.lb("app-root", s, M, {}, {}, []),
        z = e("ZYjt"),
        k = e("gIcY"),
        C = e("NJnL"),
        D = e("lqqz"),
        j = e("DQlY"),
        O = e("xtZt"),
        P = e("ZYCi"),
        E = i.mb(o, [s], function (n) {
      return i.wb([i.xb(512, i.j, i.bb, [[8, [a.a, a.b, u.a, b.a, v]], [3, i.j], i.x]), i.xb(5120, i.u, i.kb, [[3, i.u]]), i.xb(4608, g.k, g.j, [i.u, [2, g.t]]), i.xb(5120, i.c, i.hb, []), i.xb(5120, i.s, i.ib, []), i.xb(5120, i.t, i.jb, []), i.xb(4608, z.b, z.k, [g.c]), i.xb(6144, i.G, null, [z.b]), i.xb(4608, z.e, z.g, []), i.xb(5120, z.c, function (n, t, e, i, o, s, a, u) {
        return [new z.i(n, t, e), new z.n(i), new z.m(o, s, a, u)];
      }, [g.c, i.z, i.B, g.c, g.c, z.e, i.cb, [2, z.f]]), i.xb(4608, z.d, z.d, [z.c, i.z]), i.xb(135680, z.l, z.l, [g.c]), i.xb(4608, z.j, z.j, [z.d, z.l]), i.xb(6144, i.E, null, [z.j]), i.xb(6144, z.o, null, [z.l]), i.xb(4608, i.M, i.M, [i.z]), i.xb(4608, k.q, k.q, []), i.xb(4608, r.V, r.V, []), i.xb(4608, r.z, r.z, []), i.xb(4608, r.e, r.e, [r.z]), i.xb(4608, r.h, r.h, []), i.xb(4608, r.Z, r.Z, []), i.xb(4608, r.Ab, r.Ab, []), i.xb(4608, r.B, r.B, []), i.xb(4608, r.Gb, r.Gb, []), i.xb(4608, r.Hb, r.Hb, []), i.xb(4608, C.a, C.a, []), i.xb(4608, D.a, D.a, [i.j, i.z, i.q, C.a, i.g]), i.xb(4608, j.a, j.a, [i.E, D.a]), i.xb(4608, O.f, O.f, []), i.xb(5120, P.a, P.x, [P.k]), i.xb(4608, P.d, P.d, []), i.xb(6144, P.f, null, [P.d]), i.xb(135680, P.n, P.n, [P.k, i.w, i.i, i.q, P.f]), i.xb(4608, P.e, P.e, []), i.xb(5120, P.B, P.t, [P.k, g.q, P.g]), i.xb(5120, P.h, P.A, [P.y]), i.xb(5120, i.b, function (n) {
        return [n];
      }, [P.h]), i.xb(4608, p, p, []), i.xb(1073742336, g.b, g.b, []), i.xb(1024, i.l, z.p, []), i.xb(1024, i.y, function () {
        return [P.s()];
      }, []), i.xb(512, P.y, P.y, [i.q]), i.xb(1024, i.d, function (n, t) {
        return [z.q(n), P.z(t)];
      }, [[2, i.y], P.y]), i.xb(512, i.e, i.e, [[2, i.d]]), i.xb(131584, i.g, i.g, [i.z, i.cb, i.q, i.l, i.j, i.e]), i.xb(1073742336, i.f, i.f, [i.g]), i.xb(1073742336, z.a, z.a, [[3, z.a]]), i.xb(1073742336, k.o, k.o, []), i.xb(1073742336, k.e, k.e, []), i.xb(1073742336, j.e, j.e, []), i.xb(1073742336, O.e, O.e, []), i.xb(1024, P.r, P.v, [[3, P.k]]), i.xb(512, P.p, P.c, []), i.xb(512, P.b, P.b, []), i.xb(256, P.g, {}, []), i.xb(1024, g.g, P.u, [g.p, [2, g.a], P.g]), i.xb(512, g.f, g.f, [g.g]), i.xb(512, i.i, i.i, []), i.xb(512, i.w, i.J, [i.i, [2, i.K]]), i.xb(1024, P.i, function () {
        return [[]];
      }, []), i.xb(1024, P.k, P.w, [i.g, P.p, P.b, g.f, i.q, i.w, i.i, P.i, P.g, [2, P.o], [2, P.j]]), i.xb(1073742336, P.l, P.l, [[2, P.r], [2, P.k]]), i.xb(1073742336, r.c, r.c, []), i.xb(1073742336, r.d, r.d, []), i.xb(1073742336, o, o, []), i.xb(256, i.ab, !0, []), i.xb(256, O.a, {
        autoClose: !0,
        insideClick: !1
      }, [])]);
    });
    Object(i.T)(), z.h().bootstrapModuleFactory(E).catch(function (n) {
      return console.error(n);
    });
  }
}, [[0, 0, 5]]]);