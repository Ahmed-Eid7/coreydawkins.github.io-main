/*!
 * wavesurfer.js 5.1.0 (2021-06-20)
 * https://wavesurfer-js.org
 * @license BSD-3-Clause
 */
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("WaveSurfer", [], t) : "object" == typeof exports ? exports.WaveSurfer = t() : e.WaveSurfer = t()
}(this, (function() {
    return e = {
            427: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = a(r(138)),
                    i = a(r(56));

                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function s(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                var o = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.wave = null, this.waveCtx = null, this.progress = null, this.progressCtx = null, this.start = 0, this.end = 1, this.id = (0, i.default)(void 0 !== this.constructor.name ? this.constructor.name.toLowerCase() + "_" : "canvasentry_"), this.canvasContextAttributes = {}
                    }
                    var t, r, a;
                    return t = e, (r = [{
                        key: "initWave",
                        value: function(e) {
                            this.wave = e, this.waveCtx = this.wave.getContext("2d", this.canvasContextAttributes)
                        }
                    }, {
                        key: "initProgress",
                        value: function(e) {
                            this.progress = e, this.progressCtx = this.progress.getContext("2d", this.canvasContextAttributes)
                        }
                    }, {
                        key: "updateDimensions",
                        value: function(e, t, r, i) {
                            this.start = this.wave.offsetLeft / t || 0, this.end = this.start + e / t, this.wave.width = r, this.wave.height = i;
                            var a = {
                                width: e + "px"
                            };
                            (0, n.default)(this.wave, a), this.hasProgressCanvas && (this.progress.width = r, this.progress.height = i, (0, n.default)(this.progress, a))
                        }
                    }, {
                        key: "clearWave",
                        value: function() {
                            this.waveCtx.clearRect(0, 0, this.waveCtx.canvas.width, this.waveCtx.canvas.height), this.hasProgressCanvas && this.progressCtx.clearRect(0, 0, this.progressCtx.canvas.width, this.progressCtx.canvas.height)
                        }
                    }, {
                        key: "setFillStyles",
                        value: function(e, t) {
                            this.waveCtx.fillStyle = e, this.hasProgressCanvas && (this.progressCtx.fillStyle = t)
                        }
                    }, {
                        key: "applyCanvasTransforms",
                        value: function(e) {
                            e && (this.waveCtx.setTransform(0, 1, 1, 0, 0, 0), this.hasProgressCanvas && this.progressCtx.setTransform(0, 1, 1, 0, 0, 0))
                        }
                    }, {
                        key: "fillRects",
                        value: function(e, t, r, n, i) {
                            this.fillRectToContext(this.waveCtx, e, t, r, n, i), this.hasProgressCanvas && this.fillRectToContext(this.progressCtx, e, t, r, n, i)
                        }
                    }, {
                        key: "fillRectToContext",
                        value: function(e, t, r, n, i, a) {
                            e && (a ? this.drawRoundedRect(e, t, r, n, i, a) : e.fillRect(t, r, n, i))
                        }
                    }, {
                        key: "drawRoundedRect",
                        value: function(e, t, r, n, i, a) {
                            0 !== i && (i < 0 && (r -= i *= -1), e.beginPath(), e.moveTo(t + a, r), e.lineTo(t + n - a, r), e.quadraticCurveTo(t + n, r, t + n, r + a), e.lineTo(t + n, r + i - a), e.quadraticCurveTo(t + n, r + i, t + n - a, r + i), e.lineTo(t + a, r + i), e.quadraticCurveTo(t, r + i, t, r + i - a), e.lineTo(t, r + a), e.quadraticCurveTo(t, r, t + a, r), e.closePath(), e.fill())
                        }
                    }, {
                        key: "drawLines",
                        value: function(e, t, r, n, i, a) {
                            this.drawLineToContext(this.waveCtx, e, t, r, n, i, a), this.hasProgressCanvas && this.drawLineToContext(this.progressCtx, e, t, r, n, i, a)
                        }
                    }, {
                        key: "drawLineToContext",
                        value: function(e, t, r, n, i, a, s) {
                            if (e) {
                                var o, u, l, c = t.length / 2,
                                    f = Math.round(c * this.start),
                                    h = f,
                                    d = Math.round(c * this.end) + 1,
                                    p = this.wave.width / (d - h - 1),
                                    v = n + i,
                                    y = r / n;
                                for (e.beginPath(), e.moveTo((h - f) * p, v), e.lineTo((h - f) * p, v - Math.round((t[2 * h] || 0) / y)), o = h; o < d; o++) u = t[2 * o] || 0, l = Math.round(u / y), e.lineTo((o - f) * p + this.halfPixel, v - l);
                                for (var m = d - 1; m >= h; m--) u = t[2 * m + 1] || 0, l = Math.round(u / y), e.lineTo((m - f) * p + this.halfPixel, v - l);
                                e.lineTo((h - f) * p, v - Math.round((t[2 * h + 1] || 0) / y)), e.closePath(), e.fill()
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.waveCtx = null, this.wave = null, this.progressCtx = null, this.progress = null
                        }
                    }, {
                        key: "getImage",
                        value: function(e, t, r) {
                            var n = this;
                            return "blob" === r ? new Promise((function(r) {
                                n.wave.toBlob(r, e, t)
                            })) : "dataURL" === r ? this.wave.toDataURL(e, t) : void 0
                        }
                    }]) && s(t.prototype, r), a && s(t, a), e
                }();
                t.default = o, e.exports = t.default
            },
            276: (e, t, r) => {
                "use strict";

                function n(e) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" != typeof e) return {
                        default: e
                    };
                    var r = a(t);
                    if (r && r.has(e)) return r.get(e);
                    var i = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var u = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                            u && (u.get || u.set) ? Object.defineProperty(i, o, u) : i[o] = e[o]
                        } return i.default = e, r && r.set(e, i), i
                }(r(241));

                function a(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t = new WeakMap,
                        r = new WeakMap;
                    return (a = function(e) {
                        return e ? r : t
                    })(e)
                }

                function s(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function o(e, t) {
                    return (o = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function u(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var r, n = c(e);
                        if (t) {
                            var i = c(this).constructor;
                            r = Reflect.construct(n, arguments, i)
                        } else r = n.apply(this, arguments);
                        return l(this, r)
                    }
                }

                function l(e, t) {
                    return !t || "object" !== n(t) && "function" != typeof t ? function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t
                }

                function c(e) {
                    return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }
                var f = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && o(e, t)
                    }(l, e);
                    var t, r, n, a = u(l);

                    function l(e, t) {
                        var r;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (r = a.call(this)).container = i.withOrientation(e, t.vertical), r.params = t, r.width = 0, r.height = t.height * r.params.pixelRatio, r.lastPos = 0, r.wrapper = null, r
                    }
                    return t = l, (r = [{
                        key: "style",
                        value: function(e, t) {
                            return i.style(e, t)
                        }
                    }, {
                        key: "createWrapper",
                        value: function() {
                            this.wrapper = i.withOrientation(this.container.appendChild(document.createElement("wave")), this.params.vertical), this.style(this.wrapper, {
                                display: "block",
                                position: "relative",
                                userSelect: "none",
                                webkitUserSelect: "none",
                                height: this.params.height + "px"
                            }), (this.params.fillParent || this.params.scrollParent) && this.style(this.wrapper, {
                                width: "100%",
                                overflowX: this.params.hideScrollbar ? "hidden" : "auto",
                                overflowY: "hidden"
                            }), this.setupWrapperEvents()
                        }
                    }, {
                        key: "handleEvent",
                        value: function(e, t) {
                            !t && e.preventDefault();
                            var r, n = i.withOrientation(e.targetTouches ? e.targetTouches[0] : e, this.params.vertical).clientX,
                                a = this.wrapper.getBoundingClientRect(),
                                s = this.width,
                                o = this.getWidth(),
                                u = this.getProgressPixels(a, n);
                            return r = !this.params.fillParent && s < o ? u * (this.params.pixelRatio / s) || 0 : (u + this.wrapper.scrollLeft) / this.wrapper.scrollWidth || 0, i.clamp(r, 0, 1)
                        }
                    }, {
                        key: "getProgressPixels",
                        value: function(e, t) {
                            return this.params.rtl ? e.right - t : t - e.left
                        }
                    }, {
                        key: "setupWrapperEvents",
                        value: function() {
                            var e = this;
                            this.wrapper.addEventListener("click", (function(t) {
                                var r = i.withOrientation(t, e.params.vertical),
                                    n = e.wrapper.offsetHeight - e.wrapper.clientHeight;
                                if (0 !== n) {
                                    var a = e.wrapper.getBoundingClientRect();
                                    if (r.clientY >= a.bottom - n) return
                                }
                                e.params.interact && e.fireEvent("click", t, e.handleEvent(t))
                            })), this.wrapper.addEventListener("dblclick", (function(t) {
                                e.params.interact && e.fireEvent("dblclick", t, e.handleEvent(t))
                            })), this.wrapper.addEventListener("scroll", (function(t) {
                                return e.fireEvent("scroll", t)
                            }))
                        }
                    }, {
                        key: "drawPeaks",
                        value: function(e, t, r, n) {
                            this.setWidth(t) || this.clearWave(), this.params.barWidth ? this.drawBars(e, 0, r, n) : this.drawWave(e, 0, r, n)
                        }
                    }, {
                        key: "resetScroll",
                        value: function() {
                            null !== this.wrapper && (this.wrapper.scrollLeft = 0)
                        }
                    }, {
                        key: "recenter",
                        value: function(e) {
                            var t = this.wrapper.scrollWidth * e;
                            this.recenterOnPosition(t, !0)
                        }
                    }, {
                        key: "recenterOnPosition",
                        value: function(e, t) {
                            var r = this.wrapper.scrollLeft,
                                n = ~~(this.wrapper.clientWidth / 2),
                                i = this.wrapper.scrollWidth - this.wrapper.clientWidth,
                                a = e - n,
                                s = a - r;
                            if (0 != i) {
                                if (!t && -n <= s && s < n) {
                                    var o = this.params.autoCenterRate;
                                    o /= n, o *= i, a = r + (s = Math.max(-o, Math.min(o, s)))
                                }(a = Math.max(0, Math.min(i, a))) != r && (this.wrapper.scrollLeft = a)
                            }
                        }
                    }, {
                        key: "getScrollX",
                        value: function() {
                            var e = 0;
                            if (this.wrapper) {
                                var t = this.params.pixelRatio;
                                if (e = Math.round(this.wrapper.scrollLeft * t), this.params.scrollParent) {
                                    var r = ~~(this.wrapper.scrollWidth * t - this.getWidth());
                                    e = Math.min(r, Math.max(0, e))
                                }
                            }
                            return e
                        }
                    }, {
                        key: "getWidth",
                        value: function() {
                            return Math.round(this.container.clientWidth * this.params.pixelRatio)
                        }
                    }, {
                        key: "setWidth",
                        value: function(e) {
                            if (this.width == e) return !1;
                            if (this.width = e, this.params.fillParent || this.params.scrollParent) this.style(this.wrapper, {
                                width: ""
                            });
                            else {
                                var t = ~~(this.width / this.params.pixelRatio) + "px";
                                this.style(this.wrapper, {
                                    width: t
                                })
                            }
                            return this.updateSize(), !0
                        }
                    }, {
                        key: "setHeight",
                        value: function(e) {
                            return e != this.height && (this.height = e, this.style(this.wrapper, {
                                height: ~~(this.height / this.params.pixelRatio) + "px"
                            }), this.updateSize(), !0)
                        }
                    }, {
                        key: "progress",
                        value: function(e) {
                            var t = 1 / this.params.pixelRatio,
                                r = Math.round(e * this.width) * t;
                            if (r < this.lastPos || r - this.lastPos >= t) {
                                if (this.lastPos = r, this.params.scrollParent && this.params.autoCenter) {
                                    var n = ~~(this.wrapper.scrollWidth * e);
                                    this.recenterOnPosition(n, this.params.autoCenterImmediately)
                                }
                                this.updateProgress(r)
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.unAll(), this.wrapper && (this.wrapper.parentNode == this.container.domElement && this.container.removeChild(this.wrapper.domElement), this.wrapper = null)
                        }
                    }, {
                        key: "updateCursor",
                        value: function() {}
                    }, {
                        key: "updateSize",
                        value: function() {}
                    }, {
                        key: "drawBars",
                        value: function(e, t, r, n) {}
                    }, {
                        key: "drawWave",
                        value: function(e, t, r, n) {}
                    }, {
                        key: "clearWave",
                        value: function() {}
                    }, {
                        key: "updateProgress",
                        value: function(e) {}
                    }]) && s(t.prototype, r), n && s(t, n), l
                }(i.Observer);
                t.default = f, e.exports = t.default
            },
            646: (e, t, r) => {
                "use strict";

                function n(e) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = u(r(276)),
                    a = function(e, t) {
                        if (!t && e && e.__esModule) return e;
                        if (null === e || "object" !== n(e) && "function" != typeof e) return {
                            default: e
                        };
                        var r = o(t);
                        if (r && r.has(e)) return r.get(e);
                        var i = {},
                            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var s in e)
                            if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                                var u = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                                u && (u.get || u.set) ? Object.defineProperty(i, s, u) : i[s] = e[s]
                            } return i.default = e, r && r.set(e, i), i
                    }(r(241)),
                    s = u(r(427));

                function o(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t = new WeakMap,
                        r = new WeakMap;
                    return (o = function(e) {
                        return e ? r : t
                    })(e)
                }

                function u(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function l(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function c(e, t) {
                    return (c = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function f(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var r, n = d(e);
                        if (t) {
                            var i = d(this).constructor;
                            r = Reflect.construct(n, arguments, i)
                        } else r = n.apply(this, arguments);
                        return h(this, r)
                    }
                }

                function h(e, t) {
                    return !t || "object" !== n(t) && "function" != typeof t ? function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t
                }

                function d(e) {
                    return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }
                var p = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && c(e, t)
                    }(o, e);
                    var t, r, n, i = f(o);

                    function o(e, t) {
                        var r;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), (r = i.call(this, e, t)).maxCanvasWidth = t.maxCanvasWidth, r.maxCanvasElementWidth = Math.round(t.maxCanvasWidth / t.pixelRatio), r.hasProgressCanvas = t.waveColor != t.progressColor, r.halfPixel = .5 / t.pixelRatio, r.canvases = [], r.progressWave = null, r.EntryClass = s.default, r.canvasContextAttributes = t.drawingContextAttributes, r.overlap = 2 * Math.ceil(t.pixelRatio / 2), r.barRadius = t.barRadius || 0, r.vertical = t.vertical, r
                    }
                    return t = o, (r = [{
                        key: "init",
                        value: function() {
                            this.createWrapper(), this.createElements()
                        }
                    }, {
                        key: "createElements",
                        value: function() {
                            this.progressWave = a.withOrientation(this.wrapper.appendChild(document.createElement("wave")), this.params.vertical), this.style(this.progressWave, {
                                position: "absolute",
                                zIndex: 3,
                                left: 0,
                                top: 0,
                                bottom: 0,
                                overflow: "hidden",
                                width: "0",
                                display: "none",
                                boxSizing: "border-box",
                                borderRightStyle: "solid",
                                pointerEvents: "none"
                            }), this.addCanvas(), this.updateCursor()
                        }
                    }, {
                        key: "updateCursor",
                        value: function() {
                            this.style(this.progressWave, {
                                borderRightWidth: this.params.cursorWidth + "px",
                                borderRightColor: this.params.cursorColor
                            })
                        }
                    }, {
                        key: "updateSize",
                        value: function() {
                            for (var e = this, t = Math.round(this.width / this.params.pixelRatio), r = Math.ceil(t / (this.maxCanvasElementWidth + this.overlap)); this.canvases.length < r;) this.addCanvas();
                            for (; this.canvases.length > r;) this.removeCanvas();
                            var n = this.maxCanvasWidth + this.overlap,
                                i = this.canvases.length - 1;
                            this.canvases.forEach((function(t, r) {
                                r == i && (n = e.width - e.maxCanvasWidth * i), e.updateDimensions(t, n, e.height), t.clearWave()
                            }))
                        }
                    }, {
                        key: "addCanvas",
                        value: function() {
                            var e = new this.EntryClass;
                            e.canvasContextAttributes = this.canvasContextAttributes, e.hasProgressCanvas = this.hasProgressCanvas, e.halfPixel = this.halfPixel;
                            var t = this.maxCanvasElementWidth * this.canvases.length,
                                r = a.withOrientation(this.wrapper.appendChild(document.createElement("canvas")), this.params.vertical);
                            if (this.style(r, {
                                    position: "absolute",
                                    zIndex: 2,
                                    left: t + "px",
                                    top: 0,
                                    bottom: 0,
                                    height: "100%",
                                    pointerEvents: "none"
                                }), e.initWave(r), this.hasProgressCanvas) {
                                var n = a.withOrientation(this.progressWave.appendChild(document.createElement("canvas")), this.params.vertical);
                                this.style(n, {
                                    position: "absolute",
                                    left: t + "px",
                                    top: 0,
                                    bottom: 0,
                                    height: "100%"
                                }), e.initProgress(n)
                            }
                            this.canvases.push(e)
                        }
                    }, {
                        key: "removeCanvas",
                        value: function() {
                            var e = this.canvases[this.canvases.length - 1];
                            e.wave.parentElement.removeChild(e.wave.domElement), this.hasProgressCanvas && e.progress.parentElement.removeChild(e.progress.domElement), e && (e.destroy(), e = null), this.canvases.pop()
                        }
                    }, {
                        key: "updateDimensions",
                        value: function(e, t, r) {
                            var n = Math.round(t / this.params.pixelRatio),
                                i = Math.round(this.width / this.params.pixelRatio);
                            e.updateDimensions(n, i, t, r), this.style(this.progressWave, {
                                display: "block"
                            })
                        }
                    }, {
                        key: "clearWave",
                        value: function() {
                            var e = this;
                            a.frame((function() {
                                e.canvases.forEach((function(e) {
                                    return e.clearWave()
                                }))
                            }))()
                        }
                    }, {
                        key: "drawBars",
                        value: function(e, t, r, n) {
                            var i = this;
                            return this.prepareDraw(e, t, r, n, (function(e) {
                                var t = e.absmax,
                                    a = e.hasMinVals,
                                    s = (e.height, e.offsetY),
                                    o = e.halfH,
                                    u = e.peaks,
                                    l = e.channelIndex;
                                if (void 0 !== r)
                                    for (var c = a ? 2 : 1, f = u.length / c, h = i.params.barWidth * i.params.pixelRatio, d = h + (null === i.params.barGap ? Math.max(i.params.pixelRatio, ~~(h / 2)) : Math.max(i.params.pixelRatio, i.params.barGap * i.params.pixelRatio)), p = f / i.width, v = n, y = r; y < v; y += d) {
                                        var m = u[Math.floor(y * p * c)] || 0,
                                            b = Math.round(m / t * o);
                                        0 == b && i.params.barMinHeight && (b = i.params.barMinHeight), i.fillRect(y + i.halfPixel, o - b + s, h + i.halfPixel, 2 * b, i.barRadius, l)
                                    }
                            }))
                        }
                    }, {
                        key: "drawWave",
                        value: function(e, t, r, n) {
                            var i = this;
                            return this.prepareDraw(e, t, r, n, (function(e) {
                                var t = e.absmax,
                                    a = e.hasMinVals,
                                    s = (e.height, e.offsetY),
                                    o = e.halfH,
                                    u = e.peaks,
                                    l = e.channelIndex;
                                if (!a) {
                                    for (var c = [], f = u.length, h = 0; h < f; h++) c[2 * h] = u[h], c[2 * h + 1] = -u[h];
                                    u = c
                                }
                                void 0 !== r && i.drawLine(u, t, o, s, r, n, l), i.fillRect(0, o + s - i.halfPixel, i.width, i.halfPixel, i.barRadius, l)
                            }))
                        }
                    }, {
                        key: "drawLine",
                        value: function(e, t, r, n, i, a, s) {
                            var o = this,
                                u = this.params.splitChannelsOptions.channelColors[s] || {},
                                l = u.waveColor,
                                c = u.progressColor;
                            this.canvases.forEach((function(s, u) {
                                o.setFillStyles(s, l, c), o.applyCanvasTransforms(s, o.params.vertical), s.drawLines(e, t, r, n, i, a)
                            }))
                        }
                    }, {
                        key: "fillRect",
                        value: function(e, t, r, n, i, a) {
                            for (var s = Math.floor(e / this.maxCanvasWidth), o = Math.min(Math.ceil((e + r) / this.maxCanvasWidth) + 1, this.canvases.length), u = s; u < o; u++) {
                                var l = this.canvases[u],
                                    c = u * this.maxCanvasWidth,
                                    f = {
                                        x1: Math.max(e, u * this.maxCanvasWidth),
                                        y1: t,
                                        x2: Math.min(e + r, u * this.maxCanvasWidth + l.wave.width),
                                        y2: t + n
                                    };
                                if (f.x1 < f.x2) {
                                    var h = this.params.splitChannelsOptions.channelColors[a] || {},
                                        d = h.waveColor,
                                        p = h.progressColor;
                                    this.setFillStyles(l, d, p), this.applyCanvasTransforms(l, this.params.vertical), l.fillRects(f.x1 - c, f.y1, f.x2 - f.x1, f.y2 - f.y1, i)
                                }
                            }
                        }
                    }, {
                        key: "hideChannel",
                        value: function(e) {
                            return this.params.splitChannels && this.params.splitChannelsOptions.filterChannels.includes(e)
                        }
                    }, {
                        key: "prepareDraw",
                        value: function(e, t, r, n, i, s, o) {
                            var u = this;
                            return a.frame((function() {
                                if (e[0] instanceof Array) {
                                    var l = e;
                                    if (u.params.splitChannels) {
                                        var c, f = l.filter((function(e, t) {
                                            return !u.hideChannel(t)
                                        }));
                                        return u.params.splitChannelsOptions.overlay || u.setHeight(Math.max(f.length, 1) * u.params.height * u.params.pixelRatio), u.params.splitChannelsOptions && u.params.splitChannelsOptions.relativeNormalization && (c = a.max(l.map((function(e) {
                                            return a.absMax(e)
                                        })))), l.forEach((function(e, t) {
                                            return u.prepareDraw(e, t, r, n, i, f.indexOf(e), c)
                                        }))
                                    }
                                    e = l[0]
                                }
                                if (!u.hideChannel(t)) {
                                    var h = 1 / u.params.barHeight;
                                    u.params.normalize && (h = void 0 === o ? a.absMax(e) : o);
                                    var d = [].some.call(e, (function(e) {
                                            return e < 0
                                        })),
                                        p = u.params.height * u.params.pixelRatio,
                                        v = p / 2,
                                        y = p * s || 0;
                                    return u.params.splitChannelsOptions && u.params.splitChannelsOptions.overlay && (y = 0), i({
                                        absmax: h,
                                        hasMinVals: d,
                                        height: p,
                                        offsetY: y,
                                        halfH: v,
                                        peaks: e,
                                        channelIndex: t
                                    })
                                }
                            }))()
                        }
                    }, {
                        key: "setFillStyles",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.waveColor,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.params.progressColor;
                            e.setFillStyles(t, r)
                        }
                    }, {
                        key: "applyCanvasTransforms",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            e.applyCanvasTransforms(t)
                        }
                    }, {
                        key: "getImage",
                        value: function(e, t, r) {
                            if ("blob" === r) return Promise.all(this.canvases.map((function(n) {
                                return n.getImage(e, t, r)
                            })));
                            if ("dataURL" === r) {
                                var n = this.canvases.map((function(n) {
                                    return n.getImage(e, t, r)
                                }));
                                return n.length > 1 ? n : n[0]
                            }
                        }
                    }, {
                        key: "updateProgress",
                        value: function(e) {
                            this.style(this.progressWave, {
                                width: e + "px"
                            })
                        }
                    }]) && l(t.prototype, r), n && l(t, n), o
                }(i.default);
                t.default = p, e.exports = t.default
            },
            328: (e, t, r) => {
                "use strict";

                function n(e) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                var i;

                function a(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function s(e, t, r) {
                    return (s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                        var n = function(e, t) {
                            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)););
                            return e
                        }(e, t);
                        if (n) {
                            var i = Object.getOwnPropertyDescriptor(n, t);
                            return i.get ? i.get.call(r) : i.value
                        }
                    })(e, t, r || e)
                }

                function o(e, t) {
                    return (o = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function u(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var r, n = c(e);
                        if (t) {
                            var i = c(this).constructor;
                            r = Reflect.construct(n, arguments, i)
                        } else r = n.apply(this, arguments);
                        return l(this, r)
                    }
                }

                function l(e, t) {
                    return !t || "object" !== n(t) && "function" != typeof t ? function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t
                }

                function c(e) {
                    return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var f = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && o(e, t)
                    }(l, e);
                    var t, r, n, i = u(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = i.call(this, e)).params = e, t.sourceMediaElement = null, t
                    }
                    return t = l, (r = [{
                        key: "init",
                        value: function() {
                            this.setPlaybackRate(this.params.audioRate), this.createTimer(), this.createVolumeNode(), this.createScriptNode(), this.createAnalyserNode()
                        }
                    }, {
                        key: "_load",
                        value: function(e, t, r) {
                            s(c(l.prototype), "_load", this).call(this, e, t, r), this.createMediaElementSource(e)
                        }
                    }, {
                        key: "createMediaElementSource",
                        value: function(e) {
                            this.sourceMediaElement = this.ac.createMediaElementSource(e), this.sourceMediaElement.connect(this.analyser)
                        }
                    }, {
                        key: "play",
                        value: function(e, t) {
                            return this.resumeAudioContext(), s(c(l.prototype), "play", this).call(this, e, t)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            s(c(l.prototype), "destroy", this).call(this), this.destroyWebAudio()
                        }
                    }]) && a(t.prototype, r), n && a(t, n), l
                }(((i = r(743)) && i.__esModule ? i : {
                    default: i
                }).default);
                t.default = f, e.exports = t.default
            },
            743: (e, t, r) => {
                "use strict";

                function n(e) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i, a = (i = r(379)) && i.__esModule ? i : {
                        default: i
                    },
                    s = function(e, t) {
                        if (!t && e && e.__esModule) return e;
                        if (null === e || "object" !== n(e) && "function" != typeof e) return {
                            default: e
                        };
                        var r = o(t);
                        if (r && r.has(e)) return r.get(e);
                        var i = {},
                            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var s in e)
                            if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                                var u = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                                u && (u.get || u.set) ? Object.defineProperty(i, s, u) : i[s] = e[s]
                            } return i.default = e, r && r.set(e, i), i
                    }(r(241));

                function o(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t = new WeakMap,
                        r = new WeakMap;
                    return (o = function(e) {
                        return e ? r : t
                    })(e)
                }

                function u(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function l(e, t, r) {
                    return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                        var n = function(e, t) {
                            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)););
                            return e
                        }(e, t);
                        if (n) {
                            var i = Object.getOwnPropertyDescriptor(n, t);
                            return i.get ? i.get.call(r) : i.value
                        }
                    })(e, t, r || e)
                }

                function c(e, t) {
                    return (c = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function f(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var r, n = d(e);
                        if (t) {
                            var i = d(this).constructor;
                            r = Reflect.construct(n, arguments, i)
                        } else r = n.apply(this, arguments);
                        return h(this, r)
                    }
                }

                function h(e, t) {
                    return !t || "object" !== n(t) && "function" != typeof t ? function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t
                }

                function d(e) {
                    return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }
                var p = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && c(e, t)
                    }(a, e);
                    var t, r, n, i = f(a);

                    function a(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), (t = i.call(this, e)).params = e, t.media = {
                            currentTime: 0,
                            duration: 0,
                            paused: !0,
                            playbackRate: 1,
                            play: function() {},
                            pause: function() {},
                            volume: 0
                        }, t.mediaType = e.mediaType.toLowerCase(), t.elementPosition = e.elementPosition, t.peaks = null, t.playbackRate = 1, t.volume = 1, t.isMuted = !1, t.buffer = null, t.onPlayEnd = null, t.mediaListeners = {}, t
                    }
                    return t = a, (r = [{
                        key: "init",
                        value: function() {
                            this.setPlaybackRate(this.params.audioRate), this.createTimer()
                        }
                    }, {
                        key: "_setupMediaListeners",
                        value: function() {
                            var e = this;
                            this.mediaListeners.error = function() {
                                e.fireEvent("error", "Error loading media element")
                            }, this.mediaListeners.canplay = function() {
                                e.fireEvent("canplay")
                            }, this.mediaListeners.ended = function() {
                                e.fireEvent("finish")
                            }, this.mediaListeners.play = function() {
                                e.fireEvent("play")
                            }, this.mediaListeners.pause = function() {
                                e.fireEvent("pause")
                            }, this.mediaListeners.seeked = function(t) {
                                e.fireEvent("seek")
                            }, this.mediaListeners.volumechange = function(t) {
                                e.isMuted = e.media.muted, e.isMuted ? e.volume = 0 : e.volume = e.media.volume, e.fireEvent("volume")
                            }, Object.keys(this.mediaListeners).forEach((function(t) {
                                e.media.removeEventListener(t, e.mediaListeners[t]), e.media.addEventListener(t, e.mediaListeners[t])
                            }))
                        }
                    }, {
                        key: "createTimer",
                        value: function() {
                            var e = this;
                            this.on("play", (function t() {
                                e.isPaused() || (e.fireEvent("audioprocess", e.getCurrentTime()), s.frame(t)())
                            })), this.on("pause", (function() {
                                e.fireEvent("audioprocess", e.getCurrentTime())
                            }))
                        }
                    }, {
                        key: "load",
                        value: function(e, t, r, n) {
                            var i = document.createElement(this.mediaType);
                            i.controls = this.params.mediaControls, i.autoplay = this.params.autoplay || !1, i.preload = null == n ? "auto" : n, i.src = e, i.style.width = "100%";
                            var a = t.querySelector(this.mediaType);
                            a && t.removeChild(a), t.appendChild(i), this._load(i, r, n)
                        }
                    }, {
                        key: "loadElt",
                        value: function(e, t) {
                            e.controls = this.params.mediaControls, e.autoplay = this.params.autoplay || !1, this._load(e, t, e.preload)
                        }
                    }, {
                        key: "_load",
                        value: function(e, t, r) {
                            if (!(e instanceof HTMLMediaElement) || void 0 === e.addEventListener) throw new Error("media parameter is not a valid media element");
                            "function" != typeof e.load || t && "none" == r || e.load(), this.media = e, this._setupMediaListeners(), this.peaks = t, this.onPlayEnd = null, this.buffer = null, this.isMuted = e.muted, this.setPlaybackRate(this.playbackRate), this.setVolume(this.volume)
                        }
                    }, {
                        key: "isPaused",
                        value: function() {
                            return !this.media || this.media.paused
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            if (this.explicitDuration) return this.explicitDuration;
                            var e = (this.buffer || this.media).duration;
                            return e >= 1 / 0 && (e = this.media.seekable.end(0)), e
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.media && this.media.currentTime
                        }
                    }, {
                        key: "getPlayedPercents",
                        value: function() {
                            return this.getCurrentTime() / this.getDuration() || 0
                        }
                    }, {
                        key: "getPlaybackRate",
                        value: function() {
                            return this.playbackRate || this.media.playbackRate
                        }
                    }, {
                        key: "setPlaybackRate",
                        value: function(e) {
                            this.playbackRate = e || 1, this.media.playbackRate = this.playbackRate
                        }
                    }, {
                        key: "seekTo",
                        value: function(e) {
                            null != e && (this.media.currentTime = e), this.clearPlayEnd()
                        }
                    }, {
                        key: "play",
                        value: function(e, t) {
                            this.seekTo(e);
                            var r = this.media.play();
                            return t && this.setPlayEnd(t), r
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            var e;
                            return this.media && (e = this.media.pause()), this.clearPlayEnd(), e
                        }
                    }, {
                        key: "setPlayEnd",
                        value: function(e) {
                            var t = this;
                            this.clearPlayEnd(), this._onPlayEnd = function(r) {
                                r >= e && (t.pause(), t.seekTo(e))
                            }, this.on("audioprocess", this._onPlayEnd)
                        }
                    }, {
                        key: "clearPlayEnd",
                        value: function() {
                            this._onPlayEnd && (this.un("audioprocess", this._onPlayEnd), this._onPlayEnd = null)
                        }
                    }, {
                        key: "getPeaks",
                        value: function(e, t, r) {
                            return this.buffer ? l(d(a.prototype), "getPeaks", this).call(this, e, t, r) : this.peaks || []
                        }
                    }, {
                        key: "setSinkId",
                        value: function(e) {
                            return e ? this.media.setSinkId ? this.media.setSinkId(e) : Promise.reject(new Error("setSinkId is not supported in your browser")) : Promise.reject(new Error("Invalid deviceId: " + e))
                        }
                    }, {
                        key: "getVolume",
                        value: function() {
                            return this.volume
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.volume = e, this.media.volume !== this.volume && (this.media.volume = this.volume)
                        }
                    }, {
                        key: "setMute",
                        value: function(e) {
                            this.isMuted = this.media.muted = e
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var e = this;
                            this.pause(), this.unAll(), this.destroyed = !0, Object.keys(this.mediaListeners).forEach((function(t) {
                                e.media && e.media.removeEventListener(t, e.mediaListeners[t])
                            })), this.params.removeMediaElementOnDestroy && this.media && this.media.parentNode && this.media.parentNode.removeChild(this.media), this.media = null
                        }
                    }]) && u(t.prototype, r), n && u(t, n), a
                }(a.default);
                t.default = p, e.exports = t.default
            },
            227: (e, t) => {
                "use strict";

                function r(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.clearPeakCache()
                    }
                    var t, n, i;
                    return t = e, (n = [{
                        key: "clearPeakCache",
                        value: function() {
                            this.peakCacheRanges = [], this.peakCacheLength = -1
                        }
                    }, {
                        key: "addRangeToPeakCache",
                        value: function(e, t, r) {
                            e != this.peakCacheLength && (this.clearPeakCache(), this.peakCacheLength = e);
                            for (var n = [], i = 0; i < this.peakCacheRanges.length && this.peakCacheRanges[i] < t;) i++;
                            for (i % 2 == 0 && n.push(t); i < this.peakCacheRanges.length && this.peakCacheRanges[i] <= r;) n.push(this.peakCacheRanges[i]), i++;
                            i % 2 == 0 && n.push(r), n = n.filter((function(e, t, r) {
                                return 0 == t ? e != r[t + 1] : t == r.length - 1 ? e != r[t - 1] : e != r[t - 1] && e != r[t + 1]
                            })), this.peakCacheRanges = this.peakCacheRanges.concat(n), this.peakCacheRanges = this.peakCacheRanges.sort((function(e, t) {
                                return e - t
                            })).filter((function(e, t, r) {
                                return 0 == t ? e != r[t + 1] : t == r.length - 1 ? e != r[t - 1] : e != r[t - 1] && e != r[t + 1]
                            }));
                            var a = [];
                            for (i = 0; i < n.length; i += 2) a.push([n[i], n[i + 1]]);
                            return a
                        }
                    }, {
                        key: "getCacheRanges",
                        value: function() {
                            var e, t = [];
                            for (e = 0; e < this.peakCacheRanges.length; e += 2) t.push([this.peakCacheRanges[e], this.peakCacheRanges[e + 1]]);
                            return t
                        }
                    }]) && r(t.prototype, n), i && r(t, i), e
                }();
                t.default = n, e.exports = t.default
            },
            765: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    var t = (0, n.default)(e),
                        r = (0, i.default)(e);
                    return -r > t ? -r : t
                };
                var n = a(r(178)),
                    i = a(r(706));

                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                e.exports = t.default
            },
            694: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, r) {
                    return Math.min(Math.max(t, e), r)
                }, e.exports = t.default
            },
            342: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    if (!e) throw new Error("fetch options missing");
                    if (!e.url) throw new Error("fetch url missing");
                    var t = new i.default,
                        r = new Headers,
                        n = new Request(e.url);
                    t.controller = new AbortController, e && e.requestHeaders && e.requestHeaders.forEach((function(e) {
                        r.append(e.key, e.value)
                    }));
                    var a = e.responseType || "json",
                        o = {
                            method: e.method || "GET",
                            headers: r,
                            mode: e.mode || "cors",
                            credentials: e.credentials || "same-origin",
                            cache: e.cache || "default",
                            redirect: e.redirect || "follow",
                            referrer: e.referrer || "client",
                            signal: t.controller.signal
                        };
                    return fetch(n, o).then((function(e) {
                        t.response = e;
                        var r = !0;
                        e.body || (r = !1);
                        var n = e.headers.get("content-length");
                        return null === n && (r = !1), r ? (t.onProgress = function(e) {
                            t.fireEvent("progress", e)
                        }, new Response(new ReadableStream(new s(t, n, e)), o)) : e
                    })).then((function(e) {
                        var t;
                        if (e.ok) switch (a) {
                            case "arraybuffer":
                                return e.arrayBuffer();
                            case "json":
                                return e.json();
                            case "blob":
                                return e.blob();
                            case "text":
                                return e.text();
                            default:
                                t = "Unknown responseType: " + a
                        }
                        throw t || (t = "HTTP error status: " + e.status), new Error(t)
                    })).then((function(e) {
                        t.fireEvent("success", e)
                    })).catch((function(e) {
                        t.fireEvent("error", e)
                    })), t.fetchRequest = n, t
                };
                var n, i = (n = r(399)) && n.__esModule ? n : {
                    default: n
                };

                function a(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                var s = function() {
                    function e(t, r, n) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.instance = t, this.instance._reader = n.body.getReader(), this.total = parseInt(r, 10), this.loaded = 0
                    }
                    var t, r, n;
                    return t = e, (r = [{
                        key: "start",
                        value: function(e) {
                            var t = this;
                            ! function r() {
                                t.instance._reader.read().then((function(n) {
                                    var i = n.done,
                                        a = n.value;
                                    if (i) return 0 === t.total && t.instance.onProgress.call(t.instance, {
                                        loaded: t.loaded,
                                        total: t.total,
                                        lengthComputable: !1
                                    }), void e.close();
                                    t.loaded += a.byteLength, t.instance.onProgress.call(t.instance, {
                                        loaded: t.loaded,
                                        total: t.total,
                                        lengthComputable: !(0 === t.total)
                                    }), e.enqueue(a), r()
                                })).catch((function(t) {
                                    e.error(t)
                                }))
                            }()
                        }
                    }]) && a(t.prototype, r), n && a(t, n), e
                }();
                e.exports = t.default
            },
            412: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return function() {
                        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return (0, i.default)((function() {
                            return e.apply(void 0, r)
                        }))
                    }
                };
                var n, i = (n = r(779)) && n.__esModule ? n : {
                    default: n
                };
                e.exports = t.default
            },
            56: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return void 0 === e && (e = "wavesurfer_"), e + Math.random().toString(32).substring(2)
                }, e.exports = t.default
            },
            241: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "getId", {
                    enumerable: !0,
                    get: function() {
                        return n.default
                    }
                }), Object.defineProperty(t, "max", {
                    enumerable: !0,
                    get: function() {
                        return i.default
                    }
                }), Object.defineProperty(t, "min", {
                    enumerable: !0,
                    get: function() {
                        return a.default
                    }
                }), Object.defineProperty(t, "absMax", {
                    enumerable: !0,
                    get: function() {
                        return s.default
                    }
                }), Object.defineProperty(t, "Observer", {
                    enumerable: !0,
                    get: function() {
                        return o.default
                    }
                }), Object.defineProperty(t, "style", {
                    enumerable: !0,
                    get: function() {
                        return u.default
                    }
                }), Object.defineProperty(t, "requestAnimationFrame", {
                    enumerable: !0,
                    get: function() {
                        return l.default
                    }
                }), Object.defineProperty(t, "frame", {
                    enumerable: !0,
                    get: function() {
                        return c.default
                    }
                }), Object.defineProperty(t, "debounce", {
                    enumerable: !0,
                    get: function() {
                        return f.default
                    }
                }), Object.defineProperty(t, "preventClick", {
                    enumerable: !0,
                    get: function() {
                        return h.default
                    }
                }), Object.defineProperty(t, "fetchFile", {
                    enumerable: !0,
                    get: function() {
                        return d.default
                    }
                }), Object.defineProperty(t, "clamp", {
                    enumerable: !0,
                    get: function() {
                        return p.default
                    }
                }), Object.defineProperty(t, "withOrientation", {
                    enumerable: !0,
                    get: function() {
                        return v.default
                    }
                });
                var n = y(r(56)),
                    i = y(r(178)),
                    a = y(r(706)),
                    s = y(r(765)),
                    o = y(r(399)),
                    u = y(r(138)),
                    l = y(r(779)),
                    c = y(r(412)),
                    f = y(r(296)),
                    h = y(r(529)),
                    d = y(r(342)),
                    p = y(r(694)),
                    v = y(r(713));

                function y(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
            },
            178: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    var t = -1 / 0;
                    return Object.keys(e).forEach((function(r) {
                        e[r] > t && (t = e[r])
                    })), t
                }, e.exports = t.default
            },
            706: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    var t = Number(1 / 0);
                    return Object.keys(e).forEach((function(r) {
                        e[r] < t && (t = e[r])
                    })), t
                }, e.exports = t.default
            },
            399: (e, t) => {
                "use strict";

                function r(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this._disabledEventEmissions = [], this.handlers = null
                    }
                    var t, n, i;
                    return t = e, (n = [{
                        key: "on",
                        value: function(e, t) {
                            var r = this;
                            this.handlers || (this.handlers = {});
                            var n = this.handlers[e];
                            return n || (n = this.handlers[e] = []), n.push(t), {
                                name: e,
                                callback: t,
                                un: function(e, t) {
                                    return r.un(e, t)
                                }
                            }
                        }
                    }, {
                        key: "un",
                        value: function(e, t) {
                            if (this.handlers) {
                                var r, n = this.handlers[e];
                                if (n)
                                    if (t)
                                        for (r = n.length - 1; r >= 0; r--) n[r] == t && n.splice(r, 1);
                                    else n.length = 0
                            }
                        }
                    }, {
                        key: "unAll",
                        value: function() {
                            this.handlers = null
                        }
                    }, {
                        key: "once",
                        value: function(e, t) {
                            var r = this;
                            return this.on(e, (function n() {
                                for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                                t.apply(r, a), setTimeout((function() {
                                    r.un(e, n)
                                }), 0)
                            }))
                        }
                    }, {
                        key: "setDisabledEventEmissions",
                        value: function(e) {
                            this._disabledEventEmissions = e
                        }
                    }, {
                        key: "_isDisabledEventEmission",
                        value: function(e) {
                            return this._disabledEventEmissions && this._disabledEventEmissions.includes(e)
                        }
                    }, {
                        key: "fireEvent",
                        value: function(e) {
                            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                            if (this.handlers && !this._isDisabledEventEmission(e)) {
                                var i = this.handlers[e];
                                i && i.forEach((function(e) {
                                    e.apply(void 0, r)
                                }))
                            }
                        }
                    }]) && r(t.prototype, n), i && r(t, i), e
                }();
                t.default = n, e.exports = t.default
            },
            713: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function e(t, r) {
                    return t[i] ? t : new Proxy(t, {
                        get: function(t, a, s) {
                            if (a === i) return !0;
                            if ("domElement" === a) return t;
                            if ("style" === a) return e(t.style, r);
                            if ("canvas" === a) return e(t.canvas, r);
                            if ("getBoundingClientRect" === a) return function() {
                                return e(t.getBoundingClientRect.apply(t, arguments), r)
                            };
                            if ("getContext" === a) return function() {
                                return e(t.getContext.apply(t, arguments), r)
                            };
                            var o = t[n(a, r)];
                            return "function" == typeof o ? o.bind(t) : o
                        },
                        set: function(e, t, i) {
                            return e[n(t, r)] = i, !0
                        }
                    })
                };
                var r = {
                    width: "height",
                    height: "width",
                    overflowX: "overflowY",
                    overflowY: "overflowX",
                    clientWidth: "clientHeight",
                    clientHeight: "clientWidth",
                    clientX: "clientY",
                    clientY: "clientX",
                    scrollWidth: "scrollHeight",
                    scrollLeft: "scrollTop",
                    offsetLeft: "offsetTop",
                    offsetTop: "offsetLeft",
                    offsetHeight: "offsetWidth",
                    offsetWidth: "offsetHeight",
                    left: "top",
                    right: "bottom",
                    top: "left",
                    bottom: "right",
                    borderRightStyle: "borderBottomStyle",
                    borderRightWidth: "borderBottomWidth",
                    borderRightColor: "borderBottomColor"
                };

                function n(e, t) {
                    return Object.prototype.hasOwnProperty.call(r, e) && t ? r[e] : e
                }
                var i = Symbol("isProxy");
                e.exports = t.default
            },
            529: (e, t) => {
                "use strict";

                function r(e) {
                    e.stopPropagation(), document.body.removeEventListener("click", r, !0)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    document.body.addEventListener("click", r, !0)
                }, e.exports = t.default
            },
            779: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var r = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
                    return setTimeout(e, 1e3 / 60)
                }).bind(window);
                t.default = r, e.exports = t.default
            },
            138: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t) {
                    return Object.keys(t).forEach((function(r) {
                        e.style[r] !== t[r] && (e.style[r] = t[r])
                    })), e
                }, e.exports = t.default
            },
            631: (e, t, r) => {
                "use strict";

                function n(e) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = function(e, t) {
                        if (!t && e && e.__esModule) return e;
                        if (null === e || "object" !== n(e) && "function" != typeof e) return {
                            default: e
                        };
                        var r = f(t);
                        if (r && r.has(e)) return r.get(e);
                        var i = {},
                            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var s in e)
                            if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                                var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                                o && (o.get || o.set) ? Object.defineProperty(i, s, o) : i[s] = e[s]
                            } return i.default = e, r && r.set(e, i), i
                    }(r(241)),
                    a = c(r(646)),
                    s = c(r(379)),
                    o = c(r(743)),
                    u = c(r(227)),
                    l = c(r(328));

                function c(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function f(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t = new WeakMap,
                        r = new WeakMap;
                    return (f = function(e) {
                        return e ? r : t
                    })(e)
                }

                function h(e, t) {
                    return (h = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function d(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var r, n = y(e);
                        if (t) {
                            var i = y(this).constructor;
                            r = Reflect.construct(n, arguments, i)
                        } else r = n.apply(this, arguments);
                        return p(this, r)
                    }
                }

                function p(e, t) {
                    return !t || "object" !== n(t) && "function" != typeof t ? v(e) : t
                }

                function v(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function y(e) {
                    return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function m(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function b(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function g(e, t, r) {
                    return t && b(e.prototype, t), r && b(e, r), e
                }
                var k = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && h(e, t)
                    }(r, e);
                    var t = d(r);

                    function r(e) {
                        var n;
                        if (m(this, r), (n = t.call(this)).defaultParams = {
                                audioContext: null,
                                audioScriptProcessor: null,
                                audioRate: 1,
                                autoCenter: !0,
                                autoCenterRate: 5,
                                autoCenterImmediately: !1,
                                backend: "WebAudio",
                                backgroundColor: null,
                                barHeight: 1,
                                barRadius: 0,
                                barGap: null,
                                barMinHeight: null,
                                container: null,
                                cursorColor: "#333",
                                cursorWidth: 1,
                                dragSelection: !0,
                                drawingContextAttributes: {
                                    desynchronized: !1
                                },
                                duration: null,
                                fillParent: !0,
                                forceDecode: !1,
                                height: 128,
                                hideScrollbar: !1,
                                interact: !0,
                                loopSelection: !0,
                                maxCanvasWidth: 4e3,
                                mediaContainer: null,
                                mediaControls: !1,
                                mediaType: "audio",
                                minPxPerSec: 20,
                                normalize: !1,
                                partialRender: !1,
                                pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI,
                                plugins: [],
                                progressColor: "#000",
                                removeMediaElementOnDestroy: !0,
                                renderer: a.default,
                                responsive: !1,
                                rtl: !1,
                                scrollParent: !1,
                                skipLength: 2,
                                splitChannels: !1,
                                splitChannelsOptions: {
                                    overlay: !1,
                                    channelColors: {},
                                    filterChannels: [],
                                    relativeNormalization: !1
                                },
                                vertical: !1,
                                waveColor: "#000",
                                xhr: {}
                            }, n.backends = {
                                MediaElement: o.default,
                                WebAudio: s.default,
                                MediaElementWebAudio: l.default
                            }, n.util = i, n.params = Object.assign({}, n.defaultParams, e), n.params.splitChannelsOptions = Object.assign({}, n.defaultParams.splitChannelsOptions, e.splitChannelsOptions), n.container = "string" == typeof e.container ? document.querySelector(n.params.container) : n.params.container, !n.container) throw new Error("Container element not found");
                        if (null == n.params.mediaContainer ? n.mediaContainer = n.container : "string" == typeof n.params.mediaContainer ? n.mediaContainer = document.querySelector(n.params.mediaContainer) : n.mediaContainer = n.params.mediaContainer, !n.mediaContainer) throw new Error("Media Container element not found");
                        if (n.params.maxCanvasWidth <= 1) throw new Error("maxCanvasWidth must be greater than 1");
                        if (n.params.maxCanvasWidth % 2 == 1) throw new Error("maxCanvasWidth must be an even number");
                        if (!0 === n.params.rtl && (!0 === n.params.vertical ? i.style(n.container, {
                                transform: "rotateX(180deg)"
                            }) : i.style(n.container, {
                                transform: "rotateY(180deg)"
                            })), n.params.backgroundColor && n.setBackgroundColor(n.params.backgroundColor), n.savedVolume = 0, n.isMuted = !1, n.tmpEvents = [], n.currentRequest = null, n.arraybuffer = null, n.drawer = null, n.backend = null, n.peakCache = null, "function" != typeof n.params.renderer) throw new Error("Renderer parameter is invalid");
                        n.Drawer = n.params.renderer, "AudioElement" == n.params.backend && (n.params.backend = "MediaElement"), "WebAudio" != n.params.backend && "MediaElementWebAudio" !== n.params.backend || s.default.prototype.supportsWebAudio.call(null) || (n.params.backend = "MediaElement"), n.Backend = n.backends[n.params.backend], n.initialisedPluginList = {}, n.isDestroyed = !1, n.isReady = !1;
                        var u = 0;
                        return n._onResize = i.debounce((function() {
                            u == n.drawer.wrapper.clientWidth || n.params.scrollParent || (u = n.drawer.wrapper.clientWidth, n.drawer.fireEvent("redraw"))
                        }), "number" == typeof n.params.responsive ? n.params.responsive : 100), p(n, v(n))
                    }
                    return g(r, [{
                        key: "init",
                        value: function() {
                            return this.registerPlugins(this.params.plugins), this.createDrawer(), this.createBackend(), this.createPeakCache(), this
                        }
                    }, {
                        key: "registerPlugins",
                        value: function(e) {
                            var t = this;
                            return e.forEach((function(e) {
                                return t.addPlugin(e)
                            })), e.forEach((function(e) {
                                e.deferInit || t.initPlugin(e.name)
                            })), this.fireEvent("plugins-registered", e), this
                        }
                    }, {
                        key: "getActivePlugins",
                        value: function() {
                            return this.initialisedPluginList
                        }
                    }, {
                        key: "addPlugin",
                        value: function(e) {
                            var t = this;
                            if (!e.name) throw new Error("Plugin does not have a name!");
                            if (!e.instance) throw new Error("Plugin ".concat(e.name, " does not have an instance property!"));
                            e.staticProps && Object.keys(e.staticProps).forEach((function(r) {
                                t[r] = e.staticProps[r]
                            }));
                            var r = e.instance;
                            return Object.getOwnPropertyNames(i.Observer.prototype).forEach((function(e) {
                                r.prototype[e] = i.Observer.prototype[e]
                            })), this[e.name] = new r(e.params || {}, this), this.fireEvent("plugin-added", e.name), this
                        }
                    }, {
                        key: "initPlugin",
                        value: function(e) {
                            if (!this[e]) throw new Error("Plugin ".concat(e, " has not been added yet!"));
                            return this.initialisedPluginList[e] && this.destroyPlugin(e), this[e].init(), this.initialisedPluginList[e] = !0, this.fireEvent("plugin-initialised", e), this
                        }
                    }, {
                        key: "destroyPlugin",
                        value: function(e) {
                            if (!this[e]) throw new Error("Plugin ".concat(e, " has not been added yet and cannot be destroyed!"));
                            if (!this.initialisedPluginList[e]) throw new Error("Plugin ".concat(e, " is not active and cannot be destroyed!"));
                            if ("function" != typeof this[e].destroy) throw new Error("Plugin ".concat(e, " does not have a destroy function!"));
                            return this[e].destroy(), delete this.initialisedPluginList[e], this.fireEvent("plugin-destroyed", e), this
                        }
                    }, {
                        key: "destroyAllPlugins",
                        value: function() {
                            var e = this;
                            Object.keys(this.initialisedPluginList).forEach((function(t) {
                                return e.destroyPlugin(t)
                            }))
                        }
                    }, {
                        key: "createDrawer",
                        value: function() {
                            var e = this;
                            this.drawer = new this.Drawer(this.container, this.params), this.drawer.init(), this.fireEvent("drawer-created", this.drawer), !1 !== this.params.responsive && (window.addEventListener("resize", this._onResize, !0), window.addEventListener("orientationchange", this._onResize, !0)), this.drawer.on("redraw", (function() {
                                e.drawBuffer(), e.drawer.progress(e.backend.getPlayedPercents())
                            })), this.drawer.on("click", (function(t, r) {
                                setTimeout((function() {
                                    return e.seekTo(r)
                                }), 0)
                            })), this.drawer.on("scroll", (function(t) {
                                e.params.partialRender && e.drawBuffer(), e.fireEvent("scroll", t)
                            }))
                        }
                    }, {
                        key: "createBackend",
                        value: function() {
                            var e = this;
                            this.backend && this.backend.destroy(), this.backend = new this.Backend(this.params), this.backend.init(), this.fireEvent("backend-created", this.backend), this.backend.on("finish", (function() {
                                e.drawer.progress(e.backend.getPlayedPercents()), e.fireEvent("finish")
                            })), this.backend.on("play", (function() {
                                return e.fireEvent("play")
                            })), this.backend.on("pause", (function() {
                                return e.fireEvent("pause")
                            })), this.backend.on("audioprocess", (function(t) {
                                e.drawer.progress(e.backend.getPlayedPercents()), e.fireEvent("audioprocess", t)
                            })), "MediaElement" !== this.params.backend && "MediaElementWebAudio" !== this.params.backend || (this.backend.on("seek", (function() {
                                e.drawer.progress(e.backend.getPlayedPercents())
                            })), this.backend.on("volume", (function() {
                                var t = e.getVolume();
                                e.fireEvent("volume", t), e.backend.isMuted !== e.isMuted && (e.isMuted = e.backend.isMuted, e.fireEvent("mute", e.isMuted))
                            })))
                        }
                    }, {
                        key: "createPeakCache",
                        value: function() {
                            this.params.partialRender && (this.peakCache = new u.default)
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            return this.backend.getDuration()
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.backend.getCurrentTime()
                        }
                    }, {
                        key: "setCurrentTime",
                        value: function(e) {
                            e >= this.getDuration() ? this.seekTo(1) : this.seekTo(e / this.getDuration())
                        }
                    }, {
                        key: "play",
                        value: function(e, t) {
                            var r = this;
                            return this.fireEvent("interaction", (function() {
                                return r.play(e, t)
                            })), this.backend.play(e, t)
                        }
                    }, {
                        key: "setPlayEnd",
                        value: function(e) {
                            this.backend.setPlayEnd(e)
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            if (!this.backend.isPaused()) return this.backend.pause()
                        }
                    }, {
                        key: "playPause",
                        value: function() {
                            return this.backend.isPaused() ? this.play() : this.pause()
                        }
                    }, {
                        key: "isPlaying",
                        value: function() {
                            return !this.backend.isPaused()
                        }
                    }, {
                        key: "skipBackward",
                        value: function(e) {
                            this.skip(-e || -this.params.skipLength)
                        }
                    }, {
                        key: "skipForward",
                        value: function(e) {
                            this.skip(e || this.params.skipLength)
                        }
                    }, {
                        key: "skip",
                        value: function(e) {
                            var t = this.getDuration() || 1,
                                r = this.getCurrentTime() || 0;
                            r = Math.max(0, Math.min(t, r + (e || 0))), this.seekAndCenter(r / t)
                        }
                    }, {
                        key: "seekAndCenter",
                        value: function(e) {
                            this.seekTo(e), this.drawer.recenter(e)
                        }
                    }, {
                        key: "seekTo",
                        value: function(e) {
                            var t = this;
                            if ("number" != typeof e || !isFinite(e) || e < 0 || e > 1) throw new Error("Error calling wavesurfer.seekTo, parameter must be a number between 0 and 1!");
                            this.fireEvent("interaction", (function() {
                                return t.seekTo(e)
                            }));
                            var r = "WebAudio" === this.params.backend,
                                n = this.backend.isPaused();
                            r && !n && this.backend.pause();
                            var i = this.params.scrollParent;
                            this.params.scrollParent = !1, this.backend.seekTo(e * this.getDuration()), this.drawer.progress(e), r && !n && this.backend.play(), this.params.scrollParent = i, this.fireEvent("seek", e)
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.pause(), this.seekTo(0), this.drawer.progress(0)
                        }
                    }, {
                        key: "setSinkId",
                        value: function(e) {
                            return this.backend.setSinkId(e)
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.backend.setVolume(e), this.fireEvent("volume", e)
                        }
                    }, {
                        key: "getVolume",
                        value: function() {
                            return this.backend.getVolume()
                        }
                    }, {
                        key: "setPlaybackRate",
                        value: function(e) {
                            this.backend.setPlaybackRate(e)
                        }
                    }, {
                        key: "getPlaybackRate",
                        value: function() {
                            return this.backend.getPlaybackRate()
                        }
                    }, {
                        key: "toggleMute",
                        value: function() {
                            this.setMute(!this.isMuted)
                        }
                    }, {
                        key: "setMute",
                        value: function(e) {
                            e !== this.isMuted ? (this.backend.setMute ? (this.backend.setMute(e), this.isMuted = e) : e ? (this.savedVolume = this.backend.getVolume(), this.backend.setVolume(0), this.isMuted = !0, this.fireEvent("volume", 0)) : (this.backend.setVolume(this.savedVolume), this.isMuted = !1, this.fireEvent("volume", this.savedVolume)), this.fireEvent("mute", this.isMuted)) : this.fireEvent("mute", this.isMuted)
                        }
                    }, {
                        key: "getMute",
                        value: function() {
                            return this.isMuted
                        }
                    }, {
                        key: "getFilters",
                        value: function() {
                            return this.backend.filters || []
                        }
                    }, {
                        key: "toggleScroll",
                        value: function() {
                            this.params.scrollParent = !this.params.scrollParent, this.drawBuffer()
                        }
                    }, {
                        key: "toggleInteraction",
                        value: function() {
                            this.params.interact = !this.params.interact
                        }
                    }, {
                        key: "getWaveColor",
                        value: function() {
                            return this.params.waveColor
                        }
                    }, {
                        key: "setWaveColor",
                        value: function(e) {
                            this.params.waveColor = e, this.drawBuffer()
                        }
                    }, {
                        key: "getProgressColor",
                        value: function() {
                            return this.params.progressColor
                        }
                    }, {
                        key: "setProgressColor",
                        value: function(e) {
                            this.params.progressColor = e, this.drawBuffer()
                        }
                    }, {
                        key: "getBackgroundColor",
                        value: function() {
                            return this.params.backgroundColor
                        }
                    }, {
                        key: "setBackgroundColor",
                        value: function(e) {
                            this.params.backgroundColor = e, i.style(this.container, {
                                background: this.params.backgroundColor
                            })
                        }
                    }, {
                        key: "getCursorColor",
                        value: function() {
                            return this.params.cursorColor
                        }
                    }, {
                        key: "setCursorColor",
                        value: function(e) {
                            this.params.cursorColor = e, this.drawer.updateCursor()
                        }
                    }, {
                        key: "getHeight",
                        value: function() {
                            return this.params.height
                        }
                    }, {
                        key: "setHeight",
                        value: function(e) {
                            this.params.height = e, this.drawer.setHeight(e * this.params.pixelRatio), this.drawBuffer()
                        }
                    }, {
                        key: "setFilteredChannels",
                        value: function(e) {
                            this.params.splitChannelsOptions.filterChannels = e, this.drawBuffer()
                        }
                    }, {
                        key: "drawBuffer",
                        value: function() {
                            var e, t = Math.round(this.getDuration() * this.params.minPxPerSec * this.params.pixelRatio),
                                r = this.drawer.getWidth(),
                                n = t,
                                i = 0,
                                a = Math.max(i + r, n);
                            if (this.params.fillParent && (!this.params.scrollParent || t < r) && (i = 0, a = n = r), this.params.partialRender) {
                                var s, o = this.peakCache.addRangeToPeakCache(n, i, a);
                                for (s = 0; s < o.length; s++) e = this.backend.getPeaks(n, o[s][0], o[s][1]), this.drawer.drawPeaks(e, n, o[s][0], o[s][1])
                            } else e = this.backend.getPeaks(n, i, a), this.drawer.drawPeaks(e, n, i, a);
                            this.fireEvent("redraw", e, n)
                        }
                    }, {
                        key: "zoom",
                        value: function(e) {
                            e ? (this.params.minPxPerSec = e, this.params.scrollParent = !0) : (this.params.minPxPerSec = this.defaultParams.minPxPerSec, this.params.scrollParent = !1), this.drawBuffer(), this.drawer.progress(this.backend.getPlayedPercents()), this.drawer.recenter(this.getCurrentTime() / this.getDuration()), this.fireEvent("zoom", e)
                        }
                    }, {
                        key: "loadArrayBuffer",
                        value: function(e) {
                            var t = this;
                            this.decodeArrayBuffer(e, (function(e) {
                                t.isDestroyed || t.loadDecodedBuffer(e)
                            }))
                        }
                    }, {
                        key: "loadDecodedBuffer",
                        value: function(e) {
                            this.backend.load(e), this.drawBuffer(), this.isReady = !0, this.fireEvent("ready")
                        }
                    }, {
                        key: "loadBlob",
                        value: function(e) {
                            var t = this,
                                r = new FileReader;
                            r.addEventListener("progress", (function(e) {
                                return t.onProgress(e)
                            })), r.addEventListener("load", (function(e) {
                                return t.loadArrayBuffer(e.target.result)
                            })), r.addEventListener("error", (function() {
                                return t.fireEvent("error", "Error reading file")
                            })), r.readAsArrayBuffer(e), this.empty()
                        }
                    }, {
                        key: "load",
                        value: function(e, t, r, n) {
                            if (!e) throw new Error("url parameter cannot be empty");
                            if (this.empty(), r) {
                                var i = {
                                        "Preload is not 'auto', 'none' or 'metadata'": -1 === ["auto", "metadata", "none"].indexOf(r),
                                        "Peaks are not provided": !t,
                                        "Backend is not of type 'MediaElement' or 'MediaElementWebAudio'": -1 === ["MediaElement", "MediaElementWebAudio"].indexOf(this.params.backend),
                                        "Url is not of type string": "string" != typeof e
                                    },
                                    a = Object.keys(i).filter((function(e) {
                                        return i[e]
                                    }));
                                a.length && (console.warn("Preload parameter of wavesurfer.load will be ignored because:\n\t- " + a.join("\n\t- ")), r = null)
                            }
                            switch ("WebAudio" === this.params.backend && e instanceof HTMLMediaElement && (e = e.src), this.params.backend) {
                                case "WebAudio":
                                    return this.loadBuffer(e, t, n);
                                case "MediaElement":
                                case "MediaElementWebAudio":
                                    return this.loadMediaElement(e, t, r, n)
                            }
                        }
                    }, {
                        key: "loadBuffer",
                        value: function(e, t, r) {
                            var n = this,
                                i = function(t) {
                                    return t && n.tmpEvents.push(n.once("ready", t)), n.getArrayBuffer(e, (function(e) {
                                        return n.loadArrayBuffer(e)
                                    }))
                                };
                            if (!t) return i();
                            this.backend.setPeaks(t, r), this.drawBuffer(), this.fireEvent("waveform-ready"), this.tmpEvents.push(this.once("interaction", i))
                        }
                    }, {
                        key: "loadMediaElement",
                        value: function(e, t, r, n) {
                            var i = this,
                                a = e;
                            if ("string" == typeof e) this.backend.load(a, this.mediaContainer, t, r);
                            else {
                                var s = e;
                                this.backend.loadElt(s, t), a = s.src
                            }
                            this.tmpEvents.push(this.backend.once("canplay", (function() {
                                i.backend.destroyed || (i.drawBuffer(), i.isReady = !0, i.fireEvent("ready"))
                            })), this.backend.once("error", (function(e) {
                                return i.fireEvent("error", e)
                            }))), t && (this.backend.setPeaks(t, n), this.drawBuffer(), this.fireEvent("waveform-ready")), t && !this.params.forceDecode || !this.backend.supportsWebAudio() || this.getArrayBuffer(a, (function(e) {
                                i.decodeArrayBuffer(e, (function(e) {
                                    i.backend.buffer = e, i.backend.setPeaks(null), i.drawBuffer(), i.fireEvent("waveform-ready")
                                }))
                            }))
                        }
                    }, {
                        key: "decodeArrayBuffer",
                        value: function(e, t) {
                            var r = this;
                            this.arraybuffer = e, this.backend.decodeArrayBuffer(e, (function(n) {
                                r.isDestroyed || r.arraybuffer != e || (t(n), r.arraybuffer = null)
                            }), (function() {
                                return r.fireEvent("error", "Error decoding audiobuffer")
                            }))
                        }
                    }, {
                        key: "getArrayBuffer",
                        value: function(e, t) {
                            var r = this,
                                n = Object.assign({
                                    url: e,
                                    responseType: "arraybuffer"
                                }, this.params.xhr),
                                a = i.fetchFile(n);
                            return this.currentRequest = a, this.tmpEvents.push(a.on("progress", (function(e) {
                                r.onProgress(e)
                            })), a.on("success", (function(e) {
                                t(e), r.currentRequest = null
                            })), a.on("error", (function(e) {
                                r.fireEvent("error", e), r.currentRequest = null
                            }))), a
                        }
                    }, {
                        key: "onProgress",
                        value: function(e) {
                            var t;
                            t = e.lengthComputable ? e.loaded / e.total : e.loaded / (e.loaded + 1e6), this.fireEvent("loading", Math.round(100 * t), e.target)
                        }
                    }, {
                        key: "exportPCM",
                        value: function(e, t, r, n, i) {
                            e = e || 1024, n = n || 0, t = t || 1e4, r = r || !1;
                            var a = this.backend.getPeaks(e, n, i),
                                s = [].map.call(a, (function(e) {
                                    return Math.round(e * t) / t
                                }));
                            return new Promise((function(e, t) {
                                if (!r) {
                                    var n = new Blob([JSON.stringify(s)], {
                                            type: "application/json;charset=utf-8"
                                        }),
                                        i = URL.createObjectURL(n);
                                    window.open(i), URL.revokeObjectURL(i)
                                }
                                e(s)
                            }))
                        }
                    }, {
                        key: "exportImage",
                        value: function(e, t, r) {
                            return e || (e = "image/png"), t || (t = 1), r || (r = "dataURL"), this.drawer.getImage(e, t, r)
                        }
                    }, {
                        key: "cancelAjax",
                        value: function() {
                            this.currentRequest && this.currentRequest.controller && (this.currentRequest._reader && this.currentRequest._reader.cancel().catch((function(e) {})), this.currentRequest.controller.abort(), this.currentRequest = null)
                        }
                    }, {
                        key: "clearTmpEvents",
                        value: function() {
                            this.tmpEvents.forEach((function(e) {
                                return e.un()
                            }))
                        }
                    }, {
                        key: "empty",
                        value: function() {
                            this.backend.isPaused() || (this.stop(), this.backend.disconnectSource()), this.isReady = !1, this.cancelAjax(), this.clearTmpEvents(), this.drawer.progress(0), this.drawer.setWidth(0), this.drawer.drawPeaks({
                                length: this.drawer.getWidth()
                            }, 0)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.destroyAllPlugins(), this.fireEvent("destroy"), this.cancelAjax(), this.clearTmpEvents(), this.unAll(), !1 !== this.params.responsive && (window.removeEventListener("resize", this._onResize, !0), window.removeEventListener("orientationchange", this._onResize, !0)), this.backend && (this.backend.destroy(), this.backend = null), this.drawer && this.drawer.destroy(), this.isDestroyed = !0, this.isReady = !1, this.arraybuffer = null
                        }
                    }], [{
                        key: "create",
                        value: function(e) {
                            return new r(e).init()
                        }
                    }]), r
                }(i.Observer);
                t.default = k, k.VERSION = "5.1.0", k.util = i, e.exports = t.default
            },
            379: (e, t, r) => {
                "use strict";

                function n(e) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" != typeof e) return {
                        default: e
                    };
                    var r = a(t);
                    if (r && r.has(e)) return r.get(e);
                    var i = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var u = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                            u && (u.get || u.set) ? Object.defineProperty(i, o, u) : i[o] = e[o]
                        } return i.default = e, r && r.set(e, i), i
                }(r(241));

                function a(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t = new WeakMap,
                        r = new WeakMap;
                    return (a = function(e) {
                        return e ? r : t
                    })(e)
                }

                function s(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function o(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function u(e, t) {
                    return (u = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function l(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var r, n = f(e);
                        if (t) {
                            var i = f(this).constructor;
                            r = Reflect.construct(n, arguments, i)
                        } else r = n.apply(this, arguments);
                        return c(this, r)
                    }
                }

                function c(e, t) {
                    return !t || "object" !== n(t) && "function" != typeof t ? function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t
                }

                function f(e) {
                    return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }
                var h = "playing",
                    d = "paused",
                    p = "finished",
                    v = function(e) {
                        ! function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && u(e, t)
                        }(a, e);
                        var t, r, n, i = l(a);

                        function a(e) {
                            var t, r, n;
                            return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, a), (n = i.call(this)).audioContext = null, n.offlineAudioContext = null, n.stateBehaviors = (s(t = {}, h, {
                                init: function() {
                                    this.addOnAudioProcess()
                                },
                                getPlayedPercents: function() {
                                    var e = this.getDuration();
                                    return this.getCurrentTime() / e || 0
                                },
                                getCurrentTime: function() {
                                    return this.startPosition + this.getPlayedTime()
                                }
                            }), s(t, d, {
                                init: function() {
                                    this.removeOnAudioProcess()
                                },
                                getPlayedPercents: function() {
                                    var e = this.getDuration();
                                    return this.getCurrentTime() / e || 0
                                },
                                getCurrentTime: function() {
                                    return this.startPosition
                                }
                            }), s(t, p, {
                                init: function() {
                                    this.removeOnAudioProcess(), this.fireEvent("finish")
                                },
                                getPlayedPercents: function() {
                                    return 1
                                },
                                getCurrentTime: function() {
                                    return this.getDuration()
                                }
                            }), t), n.params = e, n.ac = e.audioContext || (n.supportsWebAudio() ? n.getAudioContext() : {}), n.lastPlay = n.ac.currentTime, n.startPosition = 0, n.scheduledPause = null, n.states = (s(r = {}, h, Object.create(n.stateBehaviors.playing)), s(r, d, Object.create(n.stateBehaviors.paused)), s(r, p, Object.create(n.stateBehaviors.finished)), r), n.buffer = null, n.filters = [], n.gainNode = null, n.mergedPeaks = null, n.offlineAc = null, n.peaks = null, n.playbackRate = 1, n.analyser = null, n.scriptNode = null, n.source = null, n.splitPeaks = [], n.state = null, n.explicitDuration = e.duration, n.destroyed = !1, n
                        }
                        return t = a, (r = [{
                            key: "supportsWebAudio",
                            value: function() {
                                return !(!window.AudioContext && !window.webkitAudioContext)
                            }
                        }, {
                            key: "getAudioContext",
                            value: function() {
                                return window.WaveSurferAudioContext || (window.WaveSurferAudioContext = new(window.AudioContext || window.webkitAudioContext)), window.WaveSurferAudioContext
                            }
                        }, {
                            key: "getOfflineAudioContext",
                            value: function(e) {
                                return window.WaveSurferOfflineAudioContext || (window.WaveSurferOfflineAudioContext = new(window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 2, e)), window.WaveSurferOfflineAudioContext
                            }
                        }, {
                            key: "init",
                            value: function() {
                                this.createVolumeNode(), this.createScriptNode(), this.createAnalyserNode(), this.setState(d), this.setPlaybackRate(this.params.audioRate), this.setLength(0)
                            }
                        }, {
                            key: "disconnectFilters",
                            value: function() {
                                this.filters && (this.filters.forEach((function(e) {
                                    e && e.disconnect()
                                })), this.filters = null, this.analyser.connect(this.gainNode))
                            }
                        }, {
                            key: "setState",
                            value: function(e) {
                                this.state !== this.states[e] && (this.state = this.states[e], this.state.init.call(this))
                            }
                        }, {
                            key: "setFilter",
                            value: function() {
                                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                this.setFilters(t)
                            }
                        }, {
                            key: "setFilters",
                            value: function(e) {
                                this.disconnectFilters(), e && e.length && (this.filters = e, this.analyser.disconnect(), e.reduce((function(e, t) {
                                    return e.connect(t), t
                                }), this.analyser).connect(this.gainNode))
                            }
                        }, {
                            key: "createScriptNode",
                            value: function() {
                                this.params.audioScriptProcessor ? this.scriptNode = this.params.audioScriptProcessor : this.ac.createScriptProcessor ? this.scriptNode = this.ac.createScriptProcessor(a.scriptBufferSize) : this.scriptNode = this.ac.createJavaScriptNode(a.scriptBufferSize), this.scriptNode.connect(this.ac.destination)
                            }
                        }, {
                            key: "addOnAudioProcess",
                            value: function() {
                                var e = this;
                                this.scriptNode.onaudioprocess = function() {
                                    var t = e.getCurrentTime();
                                    t >= e.getDuration() ? (e.setState(p), e.fireEvent("pause")) : t >= e.scheduledPause ? e.pause() : e.state === e.states.playing && e.fireEvent("audioprocess", t)
                                }
                            }
                        }, {
                            key: "removeOnAudioProcess",
                            value: function() {
                                this.scriptNode.onaudioprocess = null
                            }
                        }, {
                            key: "createAnalyserNode",
                            value: function() {
                                this.analyser = this.ac.createAnalyser(), this.analyser.connect(this.gainNode)
                            }
                        }, {
                            key: "createVolumeNode",
                            value: function() {
                                this.ac.createGain ? this.gainNode = this.ac.createGain() : this.gainNode = this.ac.createGainNode(), this.gainNode.connect(this.ac.destination)
                            }
                        }, {
                            key: "setSinkId",
                            value: function(e) {
                                if (e) {
                                    var t = new window.Audio;
                                    if (!t.setSinkId) return Promise.reject(new Error("setSinkId is not supported in your browser"));
                                    t.autoplay = !0;
                                    var r = this.ac.createMediaStreamDestination();
                                    return this.gainNode.disconnect(), this.gainNode.connect(r), t.srcObject = r.stream, t.setSinkId(e)
                                }
                                return Promise.reject(new Error("Invalid deviceId: " + e))
                            }
                        }, {
                            key: "setVolume",
                            value: function(e) {
                                this.gainNode.gain.setValueAtTime(e, this.ac.currentTime)
                            }
                        }, {
                            key: "getVolume",
                            value: function() {
                                return this.gainNode.gain.value
                            }
                        }, {
                            key: "decodeArrayBuffer",
                            value: function(e, t, r) {
                                this.offlineAc || (this.offlineAc = this.getOfflineAudioContext(this.ac && this.ac.sampleRate ? this.ac.sampleRate : 44100)), "webkitAudioContext" in window ? this.offlineAc.decodeAudioData(e, (function(e) {
                                    return t(e)
                                }), r) : this.offlineAc.decodeAudioData(e).then((function(e) {
                                    return t(e)
                                })).catch((function(e) {
                                    return r(e)
                                }))
                            }
                        }, {
                            key: "setPeaks",
                            value: function(e, t) {
                                null != t && (this.explicitDuration = t), this.peaks = e
                            }
                        }, {
                            key: "setLength",
                            value: function(e) {
                                if (!this.mergedPeaks || e != 2 * this.mergedPeaks.length - 1 + 2) {
                                    this.splitPeaks = [], this.mergedPeaks = [];
                                    var t, r = this.buffer ? this.buffer.numberOfChannels : 1;
                                    for (t = 0; t < r; t++) this.splitPeaks[t] = [], this.splitPeaks[t][2 * (e - 1)] = 0, this.splitPeaks[t][2 * (e - 1) + 1] = 0;
                                    this.mergedPeaks[2 * (e - 1)] = 0, this.mergedPeaks[2 * (e - 1) + 1] = 0
                                }
                            }
                        }, {
                            key: "getPeaks",
                            value: function(e, t, r) {
                                if (this.peaks) return this.peaks;
                                if (!this.buffer) return [];
                                if (t = t || 0, r = r || e - 1, this.setLength(e), !this.buffer) return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks;
                                if (!this.buffer.length) {
                                    var n = this.createBuffer(1, 4096, this.sampleRate);
                                    this.buffer = n.buffer
                                }
                                var i, a = this.buffer.length / e,
                                    s = ~~(a / 10) || 1,
                                    o = this.buffer.numberOfChannels;
                                for (i = 0; i < o; i++) {
                                    var u = this.splitPeaks[i],
                                        l = this.buffer.getChannelData(i),
                                        c = void 0;
                                    for (c = t; c <= r; c++) {
                                        var f = ~~(c * a),
                                            h = ~~(f + a),
                                            d = l[f],
                                            p = d,
                                            v = void 0;
                                        for (v = f; v < h; v += s) {
                                            var y = l[v];
                                            y > p && (p = y), y < d && (d = y)
                                        }
                                        u[2 * c] = p, u[2 * c + 1] = d, (0 == i || p > this.mergedPeaks[2 * c]) && (this.mergedPeaks[2 * c] = p), (0 == i || d < this.mergedPeaks[2 * c + 1]) && (this.mergedPeaks[2 * c + 1] = d)
                                    }
                                }
                                return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks
                            }
                        }, {
                            key: "getPlayedPercents",
                            value: function() {
                                return this.state.getPlayedPercents.call(this)
                            }
                        }, {
                            key: "disconnectSource",
                            value: function() {
                                this.source && this.source.disconnect()
                            }
                        }, {
                            key: "destroyWebAudio",
                            value: function() {
                                this.disconnectFilters(), this.disconnectSource(), this.gainNode.disconnect(), this.scriptNode.disconnect(), this.analyser.disconnect(), this.params.closeAudioContext && ("function" == typeof this.ac.close && "closed" != this.ac.state && this.ac.close(), this.ac = null, this.params.audioContext ? this.params.audioContext = null : window.WaveSurferAudioContext = null, window.WaveSurferOfflineAudioContext = null)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.isPaused() || this.pause(), this.unAll(), this.buffer = null, this.destroyed = !0, this.destroyWebAudio()
                            }
                        }, {
                            key: "load",
                            value: function(e) {
                                this.startPosition = 0, this.lastPlay = this.ac.currentTime, this.buffer = e, this.createSource()
                            }
                        }, {
                            key: "createSource",
                            value: function() {
                                this.disconnectSource(), this.source = this.ac.createBufferSource(), this.source.start = this.source.start || this.source.noteGrainOn, this.source.stop = this.source.stop || this.source.noteOff, this.setPlaybackRate(this.playbackRate), this.source.buffer = this.buffer, this.source.connect(this.analyser)
                            }
                        }, {
                            key: "resumeAudioContext",
                            value: function() {
                                "suspended" == this.ac.state && this.ac.resume && this.ac.resume()
                            }
                        }, {
                            key: "isPaused",
                            value: function() {
                                return this.state !== this.states.playing
                            }
                        }, {
                            key: "getDuration",
                            value: function() {
                                return this.explicitDuration ? this.explicitDuration : this.buffer ? this.buffer.duration : 0
                            }
                        }, {
                            key: "seekTo",
                            value: function(e, t) {
                                if (this.buffer) return this.scheduledPause = null, null == e && (e = this.getCurrentTime()) >= this.getDuration() && (e = 0), null == t && (t = this.getDuration()), this.startPosition = e, this.lastPlay = this.ac.currentTime, this.state === this.states.finished && this.setState(d), {
                                    start: e,
                                    end: t
                                }
                            }
                        }, {
                            key: "getPlayedTime",
                            value: function() {
                                return (this.ac.currentTime - this.lastPlay) * this.playbackRate
                            }
                        }, {
                            key: "play",
                            value: function(e, t) {
                                if (this.buffer) {
                                    this.createSource();
                                    var r = this.seekTo(e, t);
                                    e = r.start, t = r.end, this.scheduledPause = t, this.source.start(0, e), this.resumeAudioContext(), this.setState(h), this.fireEvent("play")
                                }
                            }
                        }, {
                            key: "pause",
                            value: function() {
                                this.scheduledPause = null, this.startPosition += this.getPlayedTime(), this.source && this.source.stop(0), this.setState(d), this.fireEvent("pause")
                            }
                        }, {
                            key: "getCurrentTime",
                            value: function() {
                                return this.state.getCurrentTime.call(this)
                            }
                        }, {
                            key: "getPlaybackRate",
                            value: function() {
                                return this.playbackRate
                            }
                        }, {
                            key: "setPlaybackRate",
                            value: function(e) {
                                this.playbackRate = e || 1, this.source && this.source.playbackRate.setValueAtTime(this.playbackRate, this.ac.currentTime)
                            }
                        }, {
                            key: "setPlayEnd",
                            value: function(e) {
                                this.scheduledPause = e
                            }
                        }]) && o(t.prototype, r), n && o(t, n), a
                    }(i.Observer);
                t.default = v, v.scriptBufferSize = 256, e.exports = t.default
            },
            296: e => {
                function t(e, t, r) {
                    var n, i, a, s, o;

                    function u() {
                        var l = Date.now() - s;
                        l < t && l >= 0 ? n = setTimeout(u, t - l) : (n = null, r || (o = e.apply(a, i), a = i = null))
                    }
                    null == t && (t = 100);
                    var l = function() {
                        a = this, i = arguments, s = Date.now();
                        var l = r && !n;
                        return n || (n = setTimeout(u, t)), l && (o = e.apply(a, i), a = i = null), o
                    };
                    return l.clear = function() {
                        n && (clearTimeout(n), n = null)
                    }, l.flush = function() {
                        n && (o = e.apply(a, i), a = i = null, clearTimeout(n), n = null)
                    }, l
                }
                t.debounce = t, e.exports = t
            }
        }, t = {},
        function r(n) {
            var i = t[n];
            if (void 0 !== i) return i.exports;
            var a = t[n] = {
                exports: {}
            };
            return e[n](a, a.exports, r), a.exports
        }(631);
    var e, t
}));
//# sourceMappingURL=wavesurfer.min.js.map