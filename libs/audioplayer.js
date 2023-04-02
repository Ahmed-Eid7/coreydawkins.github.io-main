(() => {
    "use strict";
    var __webpack_modules__ = {
            567: (e, a, t) => {
                t.d(a, {
                    OF: () => i,
                    w0: () => s,
                    Ad: () => n
                });
                const i = {
                        PLAYLIST_TRANSITION_DURATION: 300,
                        DEBUG_STYLE_1: "background-color: #aaa022; color: #222222;",
                        DEBUG_STYLE_2: "background-color: #7c3b8e; color: #ffffff;",
                        DEBUG_STYLE_3: "background-color: #3a696b; color: #eeeeee;",
                        DEBUG_STYLE_ERROR: "background-color: #3a696b; color: #eeeeee;",
                        URL_WAVESURFER_HELPER_BACKUP: "dzsap-wave-generate.js",
                        WAVESURFER_MAX_TIMEOUT: 2e4,
                        URL_JQUERY: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
                        DEBUG_STYLE_PLAY_FUNCTIONS: "background-color: #daffda; color: #222222;",
                        ERRORED_OUT_CLASS: "errored-out",
                        ERRORED_OUT_MAX_ATTEMPTS: 5
                    },
                    s = "#dzsap-keyboard-controls",
                    n = 500
            },
            401: (e, a, t) => {
                t.d(a, {
                    qw: () => i,
                    zO: () => s,
                    dv: () => n,
                    SV: () => o,
                    tK: () => r,
                    SA: () => l,
                    GN: () => d,
                    JY: () => _,
                    c6: () => c
                });
                const i = function(e) {
                    var a = {};
                    if (e) try {
                        a = JSON.parse(e)
                    } catch (e) {
                        return null
                    }
                    return a
                };

                function s(e) {
                    return (e = e.replace("feed-dzsap", "")).replace("feed-dzsap--extra-html", "")
                }
                const n = (e, a) => new Promise(((t, i) => {
                        if (a) t("loadfromvar");
                        else {
                            var s = document.createElement("script");
                            s.onload = function() {
                                t("loadfromload")
                            }, s.onerror = function() {
                                i()
                            }, s.src = e, document.head.appendChild(s)
                        }
                    })),
                    o = (e, a) => {
                        if (window[e]) return window[e];
                        let t = document.getElementsByTagName("script");
                        for (var i in t)
                            if (t[i] && t[i].src && String(t[i].src).indexOf(a) > -1) break;
                        var s = String(t[i].src).split("/");
                        s.splice(-1, 1);
                        const n = ("/" != (o = s.join("/")).substr(-1) && (o += "/"), o);
                        var o;
                        return window[e] = n + "/", n
                    },
                    r = e => String(e).indexOf("%") > -1 || String(e).indexOf("em") > -1 || String(e).indexOf("px") > -1 || String(e).indexOf("auto") > -1 ? e : e + "px",
                    l = e => {
                        var a = Object.assign({
                            tooltipInnerHTML: "",
                            tooltipIndicatorText: "",
                            tooltipConClass: ""
                        }, e);
                        return `<div class="dzstooltip-con ${a.tooltipConClass}"><span class="dzstooltip main-tooltip   talign-end arrow-bottom style-rounded color-dark-light  dims-set transition-slidedown " style="width: 280px;"><span class="dzstooltip--inner">${a.tooltipInnerHTML}</span> </span></span><span class="tooltip-indicator">${a.tooltipIndicatorText}</span></div>`
                    },
                    d = function(e) {
                        return "number" == typeof e && Math.round(e) % 1 == 0
                    },
                    _ = function(e) {
                        return void 0 !== e && "" != e
                    };

                function c(e, a) {
                    if (jQuery) return e - jQuery(a).offset().left
                }
            },
            586: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
                    formatTime: () => formatTime,
                    can_history_api: () => can_history_api,
                    dzs_clean_string: () => dzs_clean_string,
                    get_query_arg: () => get_query_arg,
                    add_query_arg: () => add_query_arg,
                    dzsap_is_mobile: () => dzsap_is_mobile,
                    is_ie: () => is_ie,
                    is_ios: () => is_ios,
                    can_canvas: () => can_canvas,
                    is_safari: () => is_safari,
                    is_android: () => is_android,
                    select_all: () => select_all,
                    is_android_good: () => is_android_good,
                    htmlEncode: () => htmlEncode,
                    dzsap_generate_keyboard_tooltip: () => dzsap_generate_keyboard_tooltip,
                    hexToRgb: () => hexToRgb,
                    assignHelperFunctionsToJquery: () => assignHelperFunctionsToJquery,
                    registerTextWidth: () => registerTextWidth,
                    player_checkIfWeShouldShowAComment: () => player_checkIfWeShouldShowAComment,
                    sanitizeObjectForChangeMediaArgs: () => sanitizeObjectForChangeMediaArgs,
                    utils_sanitizeToColor: () => utils_sanitizeToColor,
                    dzsapInitjQueryRegisters: () => dzsapInitjQueryRegisters,
                    player_radio_isNameUpdatable: () => player_radio_isNameUpdatable,
                    playerRegisterWindowFunctions: () => playerRegisterWindowFunctions,
                    string_jsonConvertToArray: () => string_jsonConvertToArray,
                    dzsap_singleton_ready_calls: () => dzsap_singleton_ready_calls,
                    jQueryAuxBindings: () => jQueryAuxBindings,
                    selectText: () => selectText,
                    view_player_playMiscEffects: () => view_player_playMiscEffects,
                    view_player_globalDetermineSyncPlayersIndex: () => view_player_globalDetermineSyncPlayersIndex,
                    player_view_addMetaLoaded: () => player_view_addMetaLoaded,
                    player_determineActualPlayer: () => player_determineActualPlayer,
                    waitForScriptToBeAvailableThenExecute: () => waitForScriptToBeAvailableThenExecute,
                    configureAudioPlayerOptionsInitial: () => configureAudioPlayerOptionsInitial,
                    player_reinit_findIfPcmNeedsGenerating: () => player_reinit_findIfPcmNeedsGenerating,
                    playerFunctions: () => playerFunctions,
                    player_delete: () => player_delete,
                    player_viewApplySkinWaveModes: () => player_viewApplySkinWaveModes,
                    sanitizeToHexColor: () => sanitizeToHexColor,
                    player_identifySource: () => player_identifySource,
                    player_identifyTypes: () => player_identifyTypes,
                    player_adjustIdentifiers: () => player_adjustIdentifiers,
                    player_getPlayFromTime: () => player_getPlayFromTime,
                    sanitizeToIntFromPointTime: () => sanitizeToIntFromPointTime,
                    player_determineStickToBottomContainer: () => player_determineStickToBottomContainer,
                    player_stickToBottomContainerDetermineClasses: () => player_stickToBottomContainerDetermineClasses,
                    player_service_getSourceProtection: () => player_service_getSourceProtection,
                    player_isGoingToSetupMediaNow: () => player_isGoingToSetupMediaNow,
                    player_determineHtmlAreas: () => player_determineHtmlAreas,
                    player_stopOtherPlayers: () => player_stopOtherPlayers,
                    player_syncPlayers_gotoItem: () => player_syncPlayers_gotoItem,
                    player_syncPlayers_buildList: () => player_syncPlayers_buildList,
                    player_detect_skinwave_mode: () => player_detect_skinwave_mode,
                    convertPluginOptionsToFinalOptions: () => convertPluginOptionsToFinalOptions,
                    generateFakeArrayForPcm: () => generateFakeArrayForPcm,
                    scrubbar_modeWave_clearObsoleteCanvas: () => scrubbar_modeWave_clearObsoleteCanvas,
                    scrubbar_modeWave_setupCanvas_context: () => scrubbar_modeWave_setupCanvas_context,
                    scrubbar_modeWave_setupCanvas: () => scrubbar_modeWave_setupCanvas
                });
                var _js_common_dzs_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401),
                    _dzsap_svgs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(560),
                    _player_player_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(603),
                    _configs_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(567);

                function formatTime(e) {
                    var a = Math.round(e),
                        t = 0,
                        i = 0;
                    if (a > 0) {
                        for (; a > 3599 && a < 3e6 && isFinite(a);) i++, a -= 3600;
                        for (; a > 59 && a < 3e6 && isFinite(a);) t++, a -= 60;
                        return String(i ? (i < 10 ? "0" : "") + i + ":" + String((t < 10 ? "0" : "") + t + ":" + (a < 10 ? "0" : "") + a) : (t < 10 ? "0" : "") + t + ":" + (a < 10 ? "0" : "") + a)
                    }
                    return "00:00"
                }

                function can_history_api() {
                    return !(!window.history || !history.pushState)
                }

                function dzs_clean_string(e) {
                    return e ? e = (e = e.replace(/[^A-Za-z0-9\-]/g, "")).replace(/\./g, "") : ""
                }

                function get_query_arg(e, a) {
                    if (e && String(e).indexOf(a + "=") > -1) {
                        var t = new RegExp("[?&]" + a + "=.+").exec(e);
                        if (null != t) {
                            var i = t[0];
                            if (i.indexOf("&") > -1) {
                                var s = i.split("&");
                                i = s[1]
                            }
                            return i.split("=")[1]
                        }
                    }
                }

                function add_query_arg(e, a, t) {
                    e || (e = "");
                    var i = e,
                        s = (a = encodeURIComponent(a)) + "=" + (t = encodeURIComponent(t)),
                        n = new RegExp("(&|\\?)" + a + "=[^&]*");
                    if ((i = i.replace(n, "$1" + s)).indexOf(a + "=") > -1 || (i.indexOf("?") > -1 ? i += "&" + s : i += "?" + s), "NaN" === t) {
                        var o = new RegExp("[?|&]" + a + "=" + t); - 1 === (i = i.replace(o, "")).indexOf("?") && i.indexOf("&") > -1 && (i = i.replace("&", "?"))
                    }
                    return i
                }

                function dzsap_is_mobile() {
                    return is_ios() || is_android_good()
                }

                function is_ie() {
                    return !!window.MSInputMethodContext && !!document.documentMode
                }

                function is_ios() {
                    return -1 !== navigator.platform.indexOf("iPhone") || -1 !== navigator.platform.indexOf("iPod") || -1 !== navigator.platform.indexOf("iPad")
                }

                function can_canvas() {
                    return !!document.createElement("canvas").getContext("2d")
                }

                function is_safari() {
                    return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0
                }

                function is_android() {
                    return is_android_good()
                }

                function select_all(e) {
                    if (void 0 !== window.getSelection && void 0 !== document.createRange) {
                        var a = document.createRange();
                        a.selectNodeContents(e);
                        var t = window.getSelection();
                        t.removeAllRanges(), t.addRange(a)
                    } else if (void 0 !== document.selection && void 0 !== document.body.createTextRange) {
                        var i = document.body.createTextRange();
                        i.moveToElementText(e), i.select()
                    }
                }

                function is_android_good() {
                    return navigator.userAgent.toLowerCase().indexOf("android") > -1
                }

                function htmlEncode(e) {
                    return jQuery("<div/>").text(e).html()
                }

                function dzsap_generate_keyboard_tooltip(e, a) {
                    var t = '<span class="dzstooltip color-dark-light talign-start transition-slidein arrow-bottom style-default" style="width: auto;  white-space:nowrap;"><span class="dzstooltip--inner">Shortcut: ' + e[a] + "</span></span>";
                    return (t = t.replace("32", "space")).replace("27", "escape")
                }

                function hexToRgb(e, a = null) {
                    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),
                        i = "";
                    if (t) {
                        var s = 1;
                        null !== a && (s = a), i = "rgba(" + (t = {
                            r: parseInt(t[1], 16),
                            g: parseInt(t[2], 16),
                            b: parseInt(t[3], 16)
                        }).r + "," + t.g + "," + t.b + "," + s + ")"
                    }
                    return i
                }

                function assignHelperFunctionsToJquery(e) {
                    Math.easeIn = function(e, a, t, i) {
                        return -t * (e /= i) * (e - 2) + a
                    };
                    const a = (e, a) => {
                        if (!e) {
                            var t = new RegExp('class="(.*?)"').exec(a);
                            t && t[1] && (e = "." + t[1])
                        }
                        return e
                    };
                    e.fn.prependOnce = function(t, i) {
                        var s = e(this);
                        return i = a(i, t), s.children(i).length < 1 && (s.prepend(t), !0)
                    }, e.fn.appendOnce = function(t, i) {
                        var s = e(this);
                        return i = a(i, t), s.children(i).length < 1 && (s.append(t), !0)
                    }
                }

                function registerTextWidth(e) {
                    e.fn.textWidth = function() {
                        var e = jQuery(this),
                            a = e.html();
                        "INPUT" === e[0].nodeName && (a = e.val());
                        var t = '<span class="forcalc">' + a + "</span>";
                        jQuery("body").append(t);
                        var i = jQuery("span.forcalc").last();
                        i.css({
                            "font-size": e.css("font-size"),
                            "font-family": e.css("font-family")
                        });
                        var s = i.width();
                        return i.remove(), s
                    }
                }

                function player_checkIfWeShouldShowAComment(e, a, t) {
                    var i = jQuery,
                        s = Math.round(a / t * 100) / 100;
                    "fake" === e.audioType && (s = Math.round(e.timeCurrent / e.timeTotal * 100) / 100), e._commentsHolder && e._commentsHolder.children().each((function() {
                        var a = i(this);
                        if (a.hasClass("dzstooltip-con")) {
                            var t = a.offset().left - e._commentsHolder.offset().left,
                                n = Math.round(parseFloat(t) / e._commentsHolder.outerWidth() * 100) / 100;
                            n && (Math.abs(n - s) < .02 ? (e._commentsHolder.find(".dzstooltip").removeClass("active"), a.find(".dzstooltip").addClass("active")) : a.find(".dzstooltip").removeClass("active"))
                        }
                    }))
                }

                function sanitizeObjectForChangeMediaArgs(e) {
                    var a = {},
                        t = e,
                        i = "";
                    return e.data("original-settings") ? e.data("original-settings") : (a.source = null, t.attr("data-source") ? a.source = t.attr("data-source") : t.attr("href") && (a.source = t.attr("href")), t.attr("data-pcm") && (a.pcm = t.attr("data-pcm")), i = "thumb", t.attr("data-" + i) && (a[i] = e.attr("data-" + i)), i = "playerid", t.attr("data-" + i) && (a[i] = e.attr("data-" + i)), i = "type", t.attr("data-" + i) && (a[i] = e.attr("data-" + i)), t.attr("data-thumb_link") && (a.thumb_link = e.attr("data-thumb_link")), (e.find(".meta-artist").length > 0 || e.find(".meta-artist-con").length > 0) && (a.artist = e.find(".the-artist").eq(0).html(), a.song_name = e.find(".the-name").eq(0).html()), e.attr("data-thumb_for_parent") && (a.thumb = e.attr("data-thumb_for_parent")), (e.find(".feed-song-name").length > 0 || e.find(".feed-artist-name").length > 0) && (a.artist = e.find(".feed-artist-name").eq(0).html(), a.song_name = e.find(".feed-song-name").eq(0).html()), a)
                }

                function utils_sanitizeToColor(e) {
                    return -1 === e.indexOf("#") && -1 === e.indexOf("rgb") && -1 === e.indexOf("hsl") ? "#" + e : e
                }

                function dzsapInitjQueryRegisters() {}

                function player_radio_isNameUpdatable(e, a, t) {
                    return !!(e._metaArtistCon.find(t).length && e._metaArtistCon.find(t).eq(0).text().length > 0 && e._metaArtistCon.find(t).eq(0).html().indexOf("{{update}}") > -1)
                }

                function playerRegisterWindowFunctions() {
                    window.dzsap_functions = {}, window.dzsap_functions.send_total_time = function(e, a) {
                        if (e && e !== 1 / 0) {
                            const t = {
                                action: "dzsap_send_total_time_for_track",
                                id_track: a.attr("data-playerid"),
                                postdata: Math.ceil(e)
                            };
                            jQuery.post(window.dzsap_ajaxurl, t, (function(e) {}))
                        }
                    }, window.dzs_open_social_link = function(e, a) {
                        var t, i, s = "status=no,height=500,width=500,resizable=yes,left=" + (t = window.screen.width / 2 - 260) + ",top=" + (i = window.screen.height / 2 - 300) + ",screenX=" + t + ",screenY=" + i + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
                        e = e.replace("{{replacewithcurrurl}}", encodeURIComponent(window.location.href)), a && a.attr && (e = e.replace(/{{replacewithdataurl}}/g, a.attr("data-url")));
                        const n = window.location.href.split("?");
                        let o = "",
                            r = "";
                        if (a || window.dzsap_currplayer_from_share && (a = window.dzsap_currplayer_from_share), a) {
                            const e = jQuery;
                            e(a).hasClass("audioplayer") ? (o = e(a).parent().children().index(a), r = e(a).parent().parent().parent().attr("id")) : (jQuery(a).parent().parent().attr("data-menu-index") && (o = jQuery(a).parent().parent().attr("data-menu-index")), jQuery(a).parent().parent().attr("data-gallery-id") && (r = jQuery(a).parent().parent().attr("data-gallery-id")))
                        }
                        var l = encodeURIComponent(n[0] + "?fromsharer=on&audiogallery_startitem_" + r + "=" + o);
                        e = e.replace("{{shareurl}}", l), window.open(e, "sharer", s)
                    }, window.dzsap_wp_send_contor_60_secs = function(e, a) {
                        var t = {
                                video_title: a,
                                video_analytics_id: e.attr("data-playerid"),
                                curr_user: window.dzsap_curr_user
                            },
                            i = "index.php?action=ajax_dzsap_submit_contor_60_secs";
                        window.dzsap_settings.dzsap_site_url && (i = dzsap_settings.dzsap_site_url + i), jQuery.ajax({
                            type: "POST",
                            url: i,
                            data: t,
                            success: function(e) {},
                            error: function(e) {}
                        })
                    }, window.dzsap_init_multisharer = function() {}, window.dzsap_submit_like = function(e, a) {
                        var t = {
                                action: "dzsap_submit_like",
                                playerid: e
                            },
                            i = null;
                        a && (i = jQuery(a.currentTarget)), window.dzsap_settings && window.dzsap_settings.ajax_url && jQuery.ajax({
                            type: "POST",
                            url: window.dzsap_settings.ajax_url,
                            data: t,
                            success: function(e) {
                                if (i) {
                                    var a = i.html();
                                    i.html(a.replace("fa-heart-o", "fa-heart"))
                                }
                            },
                            error: function(e) {}
                        })
                    }, window.dzsap_retract_like = function(e, a) {
                        var t = {
                                action: "dzsap_retract_like",
                                playerid: e
                            },
                            i = null;
                        a && (i = jQuery(a.currentTarget)), window.dzsap_settings && window.dzsap_settings.ajax_url && jQuery.ajax({
                            type: "POST",
                            url: window.dzsap_settings.ajax_url,
                            data: t,
                            success: function(e) {
                                if (i) {
                                    var a = i.html();
                                    i.html(a.replace("fa-heart", "fa-heart-o"))
                                }
                            },
                            error: function(e) {}
                        })
                    }
                }

                function string_jsonConvertToArray(e) {
                    let a = [];
                    if ("object" == typeof e) a = e;
                    else try {
                        a = JSON.parse(e)
                    } catch (e) {}
                    return a
                }

                function dzsap_singleton_ready_calls() {
                    window.dzsap_singleton_ready_calls_is_called = !0;
                    let e = null;
                    const a = document.querySelectorAll(".dzsap-main-settings");
                    a.length && (e = a[a.length - 1]), e && (window.dzsap_settings = JSON.parse(e.innerHTML), window.ajaxurl = window.dzsap_settings.ajax_url, window.dzsap_curr_user = window.dzsap_settings.dzsap_curr_user), jQuery("body").append('<style class="dzsap--style"></style>'), window.dzsap__style = jQuery(".dzsap--style"), jQuery("audio.zoomsounds-from-audio").each((function() {
                        var e = jQuery(this);
                        e.after('<div class="audioplayer-tobe auto-init skin-silver" data-source="' + e.attr("src") + '"></div>'), e.remove()
                    })), jQuery(document).on("focus.dzsap", "input", (function() {
                        window.dzsap_currplayer_focused = null
                    })), registerTextWidth(jQuery), (0, _player_player_keyboard__WEBPACK_IMPORTED_MODULE_0__.z2)()
                }

                function jQueryAuxBindings(e) {
                    e(document).off("click.dzsap_metas"), e(document).on("click.dzsap_metas", ".audioplayer-song-changer, .dzsap-wishlist-but", (function(a) {
                        var t = e(this);
                        if (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), t.hasClass("audioplayer-song-changer")) {
                            var i = e(t.attr("data-fakeplayer")).eq(0);
                            return i && i.get(0) && i.get(0).api_change_media && i.get(0).api_change_media(t, {
                                feeder_type: "button",
                                call_from: "changed audioplayer-song-changer"
                            }), !1
                        }
                        if (t.hasClass("dzsap-wishlist-but")) {
                            var s = {
                                action: "dzsap_add_to_wishlist",
                                playerid: t.attr("data-post_id"),
                                wishlist_action: "add"
                            };
                            return t.find(".svg-icon").hasClass("fa-star") && (s.wishlist_action = "remove"), window.dzsap_lasto.settings_php_handler && e.ajax({
                                type: "POST",
                                url: window.dzsap_lasto.settings_php_handler,
                                data: s,
                                success: function(e) {
                                    t.find(".svg-icon").hasClass("fa-star-o") ? t.find(".svg-icon").eq(0).attr("class", "svg-icon fa fa-star") : t.find(".svg-icon").eq(0).attr("class", "svg-icon fa fa-star-o")
                                },
                                error: function(e) {}
                            }), !1
                        }
                    })), e(document).on("click", ".dzsap-like-but", (function(a) {
                        var t = e(this),
                            i = t.attr("data-post_id");
                        return i && "0" != i || t.parent().parent().parent().parent().parent().hasClass("audioplayer") && (i = t.parent().parent().parent().parent().parent().attr("data-feed-playerid")), window.dzsap_submit_like(i, a), t.removeClass("dzsap-like-but").addClass("dzsap-retract-like-but"), !1
                    })), e(document).on("click", ".dzsap-retract-like-but", (function(a) {
                        var t = e(this),
                            i = t.attr("data-post_id");
                        return i && "0" != i || t.parent().parent().parent().parent().parent().hasClass("audioplayer") && (i = t.parent().parent().parent().parent().parent().attr("data-feed-playerid")), window.dzsap_retract_like(i, a), t.addClass("dzsap-like-but").removeClass("dzsap-retract-like-but"), !1
                    }))
                }

                function selectText(e) {
                    if (document.selection)(a = document.body.createTextRange()).moveToElementText(e), a.select();
                    else if (window.getSelection) {
                        var a;
                        (a = document.createRange()).selectNode(e), window.getSelection().removeAllRanges(), window.getSelection().addRange(a)
                    }
                }

                function view_player_playMiscEffects(e) {
                    e.$conPlayPause.addClass("playing"), e.cthis.parent().hasClass("zoomsounds-wrapper-bg-center") && e.cthis.parent().addClass("is-playing")
                }

                function view_player_globalDetermineSyncPlayersIndex(e) {
                    null === e._sourcePlayer && window.dzsap_syncList_players && window.dzsap_syncList_players.forEach(((a, t) => {
                        e.cthis.attr("data-playerid") == a.attr("data-playerid") && (window.dzsap_syncList_index = t)
                    }))
                }

                function player_view_addMetaLoaded(e) {
                    e.cthis.addClass("meta-loaded"), e.cthis.removeClass("meta-fake"), e._sourcePlayer && (e._sourcePlayer.addClass("meta-loaded"), e._sourcePlayer.removeClass("meta-fake")), e.$totalTime && (e.timeModel.refreshTimes(), e.$totalTime.html(formatTime(e.timeModel.getVisualTotalTime()))), e._sourcePlayer && e._sourcePlayer.addClass("meta-loaded")
                }

                function player_determineActualPlayer(e) {
                    var a = jQuery,
                        t = a(e.cthis.attr("data-fakeplayer"));
                    0 === t.length && (t = a(String(e.cthis.attr("data-fakeplayer")).replace("#", "."))).length && (e._actualPlayer = a(String(e.cthis.attr("data-fakeplayer")).replace("#", ".")), e.cthis.attr("data-fakeplayer", String(e.cthis.attr("data-fakeplayer")).replace("#", "."))), 0 === t.length ? e.cthis.attr("data-fakeplayer", "") : (e.cthis.addClass("player-is-feeding is-source-player-for-actual-player"), e.cthis.attr("data-type") && (e._actualPlayer = a(e.cthis.attr("data-fakeplayer")).eq(0), e._actualPlayer.addClass("player-is-feeded"), e.actualDataTypeOfMedia = e.cthis.attr("data-type"), e.cthis.attr("data-original-type", e.actualDataTypeOfMedia)))
                }

                function htmlEntities(e) {
                    return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }

                function waitForScriptToBeAvailableThenExecute(e, a) {
                    new Promise(((a, t) => {
                        var i = 0;

                        function s() {
                            e && (clearInterval(i), a("var exists"))
                        }
                        s(), i = setInterval(s, 300), setTimeout((() => {
                            t("timeout")
                        }), 5e3)
                    })).then((e => {
                        a(e)
                    })).catch((e => {}))
                }

                function configureAudioPlayerOptionsInitial(e, a, t) {
                    t.cthis.addClass("preload-method-" + a.preload_method), a.wavesurfer_pcm_length = Number(a.wavesurfer_pcm_length), a.settings_trigger_resize = parseInt(a.settings_trigger_resize, 10), !1 === isNaN(parseInt(a.design_thumbh, 10)) && (a.design_thumbh = parseInt(a.design_thumbh, 10)), "on" === a.skinwave_enableSpectrum && (a.skinwave_wave_mode = "canvas"), "" === a.skinwave_wave_mode && (a.skinwave_wave_mode = "canvas"), "" === a.skinwave_wave_mode_canvas_normalize && (a.skinwave_wave_mode_canvas_normalize = "on"), ("" === a.skinwave_wave_mode_canvas_waves_number || isNaN(Number(a.skinwave_wave_mode_canvas_waves_number))) && (a.skinwave_wave_mode_canvas_waves_number = 3), "on" === a.autoplay && "on" === a.cue && (a.preload_method = "auto"), e.addClass(a.extra_classes_player), "" === a.design_skin && (a.design_skin = "skin-default"), t.cthis.find(".feed-dzsap--embed-code").length ? t.feedEmbedCode = t.cthis.find(".feed-dzsap--embed-code").eq(0).html() : "" !== a.embed_code && (t.feedEmbedCode = a.embed_code), is_ios() && "on" === t.initOptions.skinwave_enableSpectrum && (t.initOptions.skinwave_enableSpectrum = "off"), / skin-/g.test(e.attr("class")) || e.addClass(a.design_skin), e.hasClass("skin-default") && (a.design_skin = "skin-default"), e.hasClass("skin-wave") && (a.design_skin = "skin-wave"), e.hasClass("skin-justthumbandbutton") && (a.design_skin = "skin-justthumbandbutton"), e.hasClass("skin-pro") && (a.design_skin = "skin-pro"), e.hasClass("skin-aria") && (a.design_skin = "skin-aria"), e.hasClass("skin-silver") && (a.design_skin = "skin-silver"), e.hasClass("skin-redlights") && (a.design_skin = "skin-redlights"), e.hasClass("skin-steel") && (a.design_skin = "skin-steel"), e.hasClass("skin-customcontrols") && (a.design_skin = "skin-customcontrols"), "skin-wave" === a.design_skin && "auto" === a.scrubbar_type && (a.scrubbar_type = "wave"), "auto" === a.scrubbar_type && (a.scrubbar_type = "bar"), "wpdefault" === a.settings_php_handler && (a.settings_php_handler = window.ajaxurl), "wpdefault" === a.action_received_time_total && (a.action_received_time_total = window.dzsap_send_total_time), "wpdefault" === a.action_video_contor_60secs && (a.action_video_contor_60secs = window.action_video_contor_60secs), (is_ios() || is_android()) && (a.autoplay = "off", a.disable_volume = "on", "off" === a.cueMedia && (a.cueMedia = "on"), a.cueMedia = "on"), "on" === e.attr("data-viewsubmitted") && (t.ajax_view_submitted = "on"), e.attr("data-userstarrating") && (t.starrating_alreadyrated = Number(e.attr("data-userstarrating"))), "on" === e.attr("data-loop") && (t.initOptions.loop = "on"), e.hasClass("skin-minimal") && (a.design_skin = "skin-minimal", "default" === a.disable_volume && (a.disable_volume = "on"), "default" === a.disable_scrub && (a.disable_scrub = "on"), a.disable_timer = "on"), e.hasClass("skin-minion") && (a.design_skin = "skin-minion", "default" === a.disable_volume && (a.disable_volume = "on"), "default" === a.disable_scrub && (a.disable_scrub = "on"), a.disable_timer = "on"), a.design_color_bg && (a.design_wave_color_bg = a.design_color_bg), a.design_color_highlight && (a.design_wave_color_progress = a.design_color_highlight), "skin-justthumbandbutton" === a.design_skin && ("default" === a.design_thumbh && (a.design_thumbh = ""), a.disable_timer = "on", a.disable_volume = "on", "default" === a.design_animateplaypause && (a.design_animateplaypause = "on")), "skin-redlights" === a.design_skin && (a.disable_timer = "on", a.disable_volume = "off", "default" === a.design_animateplaypause && (a.design_animateplaypause = "on")), "skin-steel" === a.design_skin && ("default" === a.disable_timer && (a.disable_timer = "off"), a.disable_volume = "on", "default" === a.design_animateplaypause && (a.design_animateplaypause = "on"), "default" === a.disable_scrub && (a.disable_scrub = "on")), "skin-customcontrols" === a.design_skin && ("default" === a.disable_timer && (a.disable_timer = "on"), a.disable_volume = "on", "default" === a.design_animateplaypause && (a.design_animateplaypause = "on"), "default" === a.disable_scrub && (a.disable_scrub = "on")), "reflecto" === a.skinwave_wave_mode_canvas_mode && (a.skinwave_wave_mode_canvas_reflection_size = .5), "reflecto" === a.skinwave_wave_mode_canvas_mode && (a.skinwave_wave_mode_canvas_reflection_size = .5), "" === a.embed_code && e.find("div.feed-embed-code").length > 0 && (a.embed_code = e.find("div.feed-embed-code").eq(0).html()), "default" === a.design_animateplaypause && (a.design_animateplaypause = "off"), "on" === a.design_animateplaypause && e.addClass("design-animateplaypause"), window.dzsap_settings && window.dzsap_settings.ajax_url && (a.settings_php_handler || (a.settings_php_handler = window.dzsap_settings.ajax_url)), a.settings_php_handler ? t.urlToAjaxHandler = a.settings_php_handler : window.dzsap_settings && window.dzsap_settings.php_handler && (t.urlToAjaxHandler = window.dzsap_settings.php_handler), player_reinit_findIfPcmNeedsGenerating(t)
                }

                function player_reinit_findIfPcmNeedsGenerating(e) {
                    const a = e.initOptions;
                    e.cthis.attr("data-pcm") && (e.hasInitialPcmData = !0), e.hasInitialPcmData || "canvas" !== a.skinwave_wave_mode || "skin-wave" !== a.design_skin && !e.cthis.attr("data-fakeplayer") || (e.isPcmRequiredToGenerate = !0), "wave" === a.scrubbar_type && (a.is_inited_from_playlist && e.cthis.addClass("scrubbar-type-wave--has-reveal-animation"), "on" === a.scrubbar_type_wave__has_reveal_animation && e.cthis.addClass("scrubbar-type-wave--has-reveal-animation"), e.isPcmRequiredToGenerate && e.cthis.addClass("scrubbar-type-wave--has-reveal-animation"))
                }

                function playerFunctions(e, a) {
                    var t = e.initOptions;
                    "detectIds" === a && ("" === t.skinwave_comments_playerid && void 0 !== e.cthis.attr("id") && (e.the_player_id = e.cthis.attr("id")), "" == e.the_player_id && (e.cthis.attr("data-computed-playerid") && (e.the_player_id = e.cthis.attr("data-computed-playerid")), e.cthis.attr("data-real-playerid") && (e.the_player_id = e.cthis.attr("data-real-playerid"))), e.uniqueId = e.the_player_id, "string" == typeof e.uniqueId && (e.uniqueId = e.uniqueId.replace("ap", "")), e.identifier_pcm = e.uniqueId, "" === e.uniqueId && (t.skinwave_comments_enable = "off"))
                }

                function player_delete(e) {
                    var a = null;
                    return e.cthis.parent().parent().hasClass("dzsap-sticktobottom") && (a = e.cthis.parent().parent()), a && (a.prev().hasClass("dzsap-sticktobottom-placeholder") && a.prev().remove(), a.remove()), e.cthis.remove(), !1
                }

                function player_viewApplySkinWaveModes(e) {
                    var a = e.initOptions;
                    e.cthis.removeClass("skin-wave-mode-normal"), "skin-wave" === a.design_skin && (e.cthis.addClass("skin-wave-mode-" + e.skinwave_mode), e.cthis.addClass("skin-wave-wave-mode-" + a.skinwave_wave_mode), "on" === a.skinwave_enableSpectrum && e.cthis.addClass("skin-wave-is-spectrum"), e.cthis.addClass("skin-wave-wave-mode-canvas-mode-" + a.skinwave_wave_mode_canvas_mode))
                }

                function sanitizeToHexColor(e) {
                    return -1 === e.indexOf("#") && (e = "#" + e), e
                }

                function player_identifySource(e) {
                    e.data_source = e.cthis.attr("data-source") || ""
                }

                function player_identifyTypes(e) {
                    var a = e.initOptions;
                    const t = e.cthis;
                    "youtube" === t.attr("data-type") && (a.type = "youtube", e.audioType = "youtube"), "soundcloud" === t.attr("data-type") && (a.type = "soundcloud", e.audioType = "soundcloud", a.skinwave_enableSpectrum = "off", t.removeClass("skin-wave-is-spectrum")), "mediafile" === t.attr("data-type") && (a.type = "audio", e.audioType = "audio"), "shoutcast" === t.attr("data-type") && (a.type = "shoutcast", e.audioType = "audio", a.disable_timer = "on", a.skinwave_enableSpectrum = "off", t.attr("data-streamtype") || (e.audioTypeSelfHosted_streamType = "shoutcast"), "skin-default" === a.design_skin && (a.disable_scrub = "on")), "audio" !== e.audioType && "normal" !== e.audioType && "" !== e.audioType || (e.audioType = "selfHosted"), String(e.data_source).indexOf("https://soundcloud.com/") > -1 && (e.audioType = "soundcloud")
                }

                function player_adjustIdentifiers(e) {
                    e.identifier_pcm = e.the_player_id;
                    var a = null;
                    a = e.$feed_fakeButton ? e.$feed_fakeButton : e._sourcePlayer ? e._sourcePlayer : null, "dzs_footer" === e.identifier_pcm && (e.identifier_pcm = dzs_clean_string(e.cthis.attr("data-source"))), a && (a.attr("data-playerid") ? e.identifier_pcm = a.attr("data-playerid") : a.attr("data-source") && (e.identifier_pcm = a.attr("data-source"))), "string" == typeof e.identifier_pcm && (e.identifier_pcm = e.identifier_pcm.replace("ap", ""))
                }

                function player_getPlayFromTime(e) {
                    e.playFrom = e.initOptions.playfrom, (0, _js_common_dzs_helpers__WEBPACK_IMPORTED_MODULE_2__.JY)(e.cthis.attr("data-playfrom")) && (e.playFrom = e.cthis.attr("data-playfrom")), !1 === isNaN(parseInt(e.playFrom, 10)) && (e.playFrom = parseInt(e.playFrom, 10)), "off" !== e.playFrom && "" !== e.playFrom || get_query_arg(window.location.href, "audio_time") && (e.playFrom = sanitizeToIntFromPointTime(get_query_arg(window.location.href, "audio_time"))), e.timeModel.sampleTimeStart && (e.playFrom < e.timeModel.sampleTimeStart && (e.playFrom = e.timeModel.sampleTimeStart), "string" == typeof e.playFrom && (e.playFrom = e.timeModel.sampleTimeStart))
                }

                function sanitizeToIntFromPointTime(e) {
                    if (e = String(e).replace("%3A", ":"), (e = String(e).replace("#", "")) && String(e).indexOf(":") > -1) {
                        var a = /(\d.*):(\d.*)/g.exec(e);
                        return 60 * parseInt(a[1], 10) + parseInt(a[2], 10)
                    }
                    return Number(e)
                }

                function player_determineStickToBottomContainer(e) {
                    e.cthis.parent().hasClass("dzsap-sticktobottom") && (e.$stickToBottomContainer = e.cthis.parent(), e.isStickyPlayer = !0), e.cthis.parent().parent().hasClass("dzsap-sticktobottom") && (e.$stickToBottomContainer = e.cthis.parent().parent(), e.isStickyPlayer = !0)
                }

                function player_stickToBottomContainerDetermineClasses(e) {
                    e.$stickToBottomContainer && (e.cthis.hasClass("theme-dark") && e.$stickToBottomContainer.addClass("theme-dark"), setTimeout((function() {
                        e.$stickToBottomContainer.addClass("inited")
                    }), 500))
                }

                function player_service_getSourceProtection(e) {
                    return new Promise(((a, t) => {
                        jQuery.ajax({
                            type: "POST",
                            url: e.data_source,
                            data: {},
                            success: function(e) {
                                a(e)
                            },
                            error: function(e) {
                                t(e)
                            }
                        })
                    }))
                }

                function player_isGoingToSetupMediaNow(e) {
                    return "icecast" !== e.audioTypeSelfHosted_streamType && "youtube" !== e.audioType
                }

                function player_determineHtmlAreas(e) {
                    var a = e.initOptions;
                    let t = "",
                        i = "",
                        s = "";
                    for (var n in e.cthis.children(".feed-dzsap--extra-html").length > 0 && "" === a.settings_extrahtml ? (e.cthis.children(".feed-dzsap--extra-html").each((function() {
                            console.log(this);
                            let e = (0, _js_common_dzs_helpers__WEBPACK_IMPORTED_MODULE_2__.zO)(this.className);
                            t += `<section class="dzsap-extra-html--section-bottom ${e}">${this.innerHTML}</section>`
                        })), e.cthis.children(".feed-dzsap--extra-html").remove()) : a.settings_extrahtml && (t = a.settings_extrahtml), e.cthis.children(".feed-dzsap--extra-html-in-controls-left").length > 0 && (i = e.cthis.children(".feed-dzsap--extra-html-in-controls-left").eq(0).html()), e.cthis.children(".feed-dzsap--extra-html-in-controls-right").length > 0 && (s = e.cthis.children(".feed-dzsap--extra-html-in-controls-right").eq(0).html()), e.cthis.children(".feed-dzsap--extra-html-bottom").length > 0 && (t = e.cthis.children(".feed-dzsap--extra-html-bottom").eq(0).html()), e.extraHtmlAreas.controlsLeft = i, e.extraHtmlAreas.controlsRight = s, e.extraHtmlAreas.bottom = t, e.extraHtmlAreas.controlsRight && (e.extraHtmlAreas.controlsRight = String(e.extraHtmlAreas.controlsRight).replace(/{{svg_share_icon}}/g, _dzsap_svgs__WEBPACK_IMPORTED_MODULE_3__.a$)), e.extraHtmlAreas) e.extraHtmlAreas[n] = String(e.extraHtmlAreas[n]).replace("{{heart_svg}}", "\t&hearts;"), e.extraHtmlAreas[n] = String(e.extraHtmlAreas[n]).replace("{{embed_code}}", e.feedEmbedCode)
                }

                function player_stopOtherPlayers(e, a) {
                    let t = 0;
                    for (t = 0; t < e.length; t++) e[t].get(0) && e[t].get(0).api_pause_media && e[t].get(0) != a.cthis.get(0) && (e[t].data("type_audio_stop_buffer_on_unfocus") && "on" === e[t].data("type_audio_stop_buffer_on_unfocus") ? e[t].get(0).api_destroy_for_rebuffer() : e[t].get(0).api_pause_media({
                        audioapi_setlasttime: !1
                    }))
                }

                function player_syncPlayers_gotoItem(e, a) {
                    if (window.dzsap_settings.syncPlayers_autoplayEnabled)
                        for (let t in window.dzsap_syncList_players) {
                            let i = e.cthis;
                            if (e._sourcePlayer && (i = e._sourcePlayer), window.dzsap_syncList_players[t].get(0) === i.get(0)) {
                                t = parseInt(t, 10);
                                let e = window.dzsap_syncList_index + a;
                                if (e >= 0 && e < window.dzsap_syncList_players.length) {
                                    const a = window.dzsap_syncList_players[e].get(0);
                                    a && a.api_play_media && setTimeout((function() {
                                        a.api_play_media({
                                            called_from: "api_sync_players_prev"
                                        })
                                    }), 200)
                                }
                            }
                        }
                }

                function player_syncPlayers_buildList() {
                    window.syncPlayers_isDzsapListBuilt || (window.dzsap_syncList_players = [], window.syncPlayers_isDzsapListBuilt = !0, jQuery(".audioplayer.is-single-player,.audioplayer-tobe.is-single-player").each((function() {
                        var e = jQuery(this);
                        e.hasClass("dzsap_footer") || "on" !== e.attr("data-do-not-include-in-list") && window.dzsap_syncList_players.push(e)
                    })), clearTimeout(window.syncPlayers_buildTimeout), window.syncPlayers_buildTimeout = setTimeout((function() {
                        window.syncPlayers_isDzsapListBuilt = !1
                    }), 500))
                }

                function player_detect_skinwave_mode() {
                    var e = this;
                    e.skinwave_mode = e.initOptions.skinwave_mode, e.cthis.hasClass("skin-wave-mode-small") && (e.skinwave_mode = "small"), e.cthis.hasClass("skin-wave-mode-alternate") && (e.skinwave_mode = "alternate"), e.cthis.hasClass("skin-wave-mode-bigwavo") && (e.skinwave_mode = "bigwavo")
                }

                function convertPluginOptionsToFinalOptions(elThis, defaultOptions, argOptions = null, searchedAttr = "data-options", $es) {
                    var finalOptions = null,
                        tempOptions = {},
                        isSetFromJson = !1;
                    void 0 === $es && ($es = jQuery);
                    var $elThis = $es(elThis);
                    const isArgOptionsDefinedViaJs = Boolean(argOptions && "object" == typeof argOptions && Object.keys(argOptions).length);
                    if (isArgOptionsDefinedViaJs) tempOptions = argOptions;
                    else {
                        if ($elThis.attr(searchedAttr)) try {
                            tempOptions = JSON.parse($elThis.attr(searchedAttr)), isSetFromJson = !0
                        } catch (e) {}
                        if (!isSetFromJson && void 0 !== $elThis.attr(searchedAttr) && "" != $elThis.attr("data-options")) {
                            var aux = $elThis.attr(searchedAttr);
                            aux = "var aux_opts = " + aux, eval(aux), tempOptions = Object.assign({}, argOptions)
                        }
                    }
                    return finalOptions = Object.assign(defaultOptions, tempOptions), finalOptions
                }

                function generateFakeArrayForPcm() {
                    for (var e = [], a = 0; a < 256; a++) e[a] = 100 * Math.random();
                    return e
                }

                function scrubbar_modeWave_clearObsoleteCanvas(e) {
                    e._scrubbar && e._scrubbar.find(".scrubbar-type-wave--canvas.transitioning-out").remove()
                }

                function scrubbar_modeWave_setupCanvas_context(e) {
                    var a = e.get(0).getContext("2d");
                    a.imageSmoothingEnabled = !1, a.imageSmoothing = !1, a.imageSmoothingQuality = "high", a.webkitImageSmoothing = !1
                }

                function scrubbar_modeWave_setupCanvas(e, a) {
                    var t = {
                        prepare_for_transition_in: !1
                    };
                    e && (t = Object.assign(t, e));
                    var i = a.initOptions;
                    a._scrubbar.find(".scrub-bg").eq(0).append('<canvas class="scrubbar-type-wave--canvas scrub-bg-img" ></canvas>'), a._scrubbar.find(".scrub-prog").eq(0).append('<canvas class="scrubbar-type-wave--canvas scrub-prog-img" ></canvas>'), a._scrubbarbg_canvas = a._scrubbar.find(".scrub-bg-img").last(), a._scrubbarprog_canvas = a._scrubbar.find(".scrub-prog-img").last(), "on" === i.skinwave_enableSpectrum && a._scrubbarprog_canvas.hide(), scrubbar_modeWave_setupCanvas_context(a._scrubbarbg_canvas), scrubbar_modeWave_setupCanvas_context(a._scrubbarprog_canvas), t.prepare_for_transition_in && (a._scrubbarbg_canvas.addClass("preparing-transitioning-in"), a._scrubbarprog_canvas.addClass("preparing-transitioning-in"), setTimeout((function() {
                        a._scrubbarbg_canvas.addClass("transitioning-in"), a._scrubbarprog_canvas.addClass("transitioning-in")
                    }), 20))
                }
            },
            560: (e, a, t) => {
                t.d(a, {
                    Z1: () => i,
                    IM: () => s,
                    a$: () => n,
                    mH: () => o,
                    Ap: () => r,
                    _r: () => l,
                    l2: () => d,
                    zq: () => _
                });
                const i = '<svg class="svg-icon" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="30px" viewBox="0 0 25 30" xml:space="preserve"> <path d="M24.156,13.195L2.406,0.25C2.141,0.094,1.867,0,1.555,0C0.703,0,0.008,0.703,0.008,1.562H0v26.875h0.008 C0.008,29.297,0.703,30,1.555,30c0.32,0,0.586-0.109,0.875-0.266l21.727-12.93C24.672,16.375,25,15.727,25,15 S24.672,13.633,24.156,13.195z"/> </svg>',
                    s = '<svg class="svg-icon" version="1.1" id="Layer_3" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="12px" height="13px" viewBox="0 0 13.415 16.333" enable-background="new 0 0 13.415 16.333" xml:space="preserve"> <path fill="#D2D6DB" d="M4.868,14.59c0,0.549-0.591,0.997-1.322,0.997H2.2c-0.731,0-1.322-0.448-1.322-0.997V1.618 c0-0.55,0.592-0.997,1.322-0.997h1.346c0.731,0,1.322,0.447,1.322,0.997V14.59z"/> <path fill="#D2D6DB" d="M12.118,14.59c0,0.549-0.593,0.997-1.324,0.997H9.448c-0.729,0-1.322-0.448-1.322-0.997V1.619 c0-0.55,0.593-0.997,1.322-0.997h1.346c0.731,0,1.324,0.447,1.324,0.997V14.59z"/> </svg>',
                    n = '<svg class="svg-icon" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 511.626 511.627" style="enable-background:new 0 0 511.626 511.627;" xml:space="preserve"> <g> <path d="M506.206,179.012L360.025,32.834c-3.617-3.617-7.898-5.426-12.847-5.426s-9.233,1.809-12.847,5.426 c-3.617,3.619-5.428,7.902-5.428,12.85v73.089h-63.953c-135.716,0-218.984,38.354-249.823,115.06C5.042,259.335,0,291.03,0,328.907 c0,31.594,12.087,74.514,36.259,128.762c0.57,1.335,1.566,3.614,2.996,6.849c1.429,3.233,2.712,6.088,3.854,8.565 c1.146,2.471,2.384,4.565,3.715,6.276c2.282,3.237,4.948,4.859,7.994,4.859c2.855,0,5.092-0.951,6.711-2.854 c1.615-1.902,2.424-4.284,2.424-7.132c0-1.718-0.238-4.236-0.715-7.569c-0.476-3.333-0.715-5.564-0.715-6.708 c-0.953-12.938-1.429-24.653-1.429-35.114c0-19.223,1.668-36.449,4.996-51.675c3.333-15.229,7.948-28.407,13.85-39.543 c5.901-11.14,13.512-20.745,22.841-28.835c9.325-8.09,19.364-14.702,30.118-19.842c10.756-5.141,23.413-9.186,37.974-12.135 c14.56-2.95,29.215-4.997,43.968-6.14s31.455-1.711,50.109-1.711h63.953v73.091c0,4.948,1.807,9.232,5.421,12.847 c3.62,3.613,7.901,5.424,12.847,5.424c4.948,0,9.232-1.811,12.854-5.424l146.178-146.183c3.617-3.617,5.424-7.898,5.424-12.847 C511.626,186.92,509.82,182.636,506.206,179.012z" fill="#696969"/> </g></svg> ',
                    o = '<svg class="svg-icon" version="1.1" id="Layer_2" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 12.5 12.817" enable-background="new 0 0 12.5 12.817" xml:space="preserve"> <g> <g> <g> <path fill="#D2D6DB" d="M2.581,7.375c-0.744-0.462-1.413-0.94-1.486-1.061C1.021,6.194,1.867,5.586,2.632,5.158l2.35-1.313 c0.765-0.427,1.505-0.782,1.646-0.789s0.257,1.03,0.257,1.905V7.87c0,0.876-0.051,1.692-0.112,1.817 C6.711,9.81,5.776,9.361,5.032,8.898L2.581,7.375z"/> </g> </g> </g> <g> <g> <g> <path fill="#D2D6DB" d="M6.307,7.57C5.413,7.014,4.61,6.441,4.521,6.295C4.432,6.15,5.447,5.42,6.366,4.906l2.82-1.577 c0.919-0.513,1.809-0.939,1.979-0.947s0.309,1.236,0.309,2.288v3.493c0,1.053-0.061,2.033-0.135,2.182S10.144,9.955,9.25,9.4 L6.307,7.57z"/> </g> </g> </g> </svg>',
                    r = '<svg class="svg-icon" version="1.1" id="Layer_2" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 12.5 12.817" enable-background="new 0 0 12.5 12.817" xml:space="preserve"> <g> <g> <g> <path fill="#D2D6DB" d="M9.874,5.443c0.744,0.462,1.414,0.939,1.486,1.06c0.074,0.121-0.771,0.729-1.535,1.156L7.482,8.967 C6.719,9.394,5.978,9.75,5.837,9.756C5.696,9.761,5.581,8.726,5.581,7.851V4.952c0-0.875,0.05-1.693,0.112-1.816 c0.062-0.124,0.995,0.326,1.739,0.788L9.874,5.443z"/> </g> </g> </g> <g> <g> <g> <path fill="#D2D6DB" d="M6.155,5.248c0.893,0.556,1.696,1.129,1.786,1.274c0.088,0.145-0.928,0.875-1.847,1.389l-2.811,1.57 c-0.918,0.514-1.808,0.939-1.978,0.947c-0.169,0.008-0.308-1.234-0.308-2.287V4.66c0-1.052,0.061-2.034,0.135-2.182 s1.195,0.391,2.089,0.947L6.155,5.248z"/> </g> </g> </g> </svg>',
                    l = '<svg class="svg-icon" version="1.1" id="Layer_2" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="13.25px" height="13.915px" viewBox="0 0 13.25 13.915" enable-background="new 0 0 13.25 13.915" xml:space="preserve"> <path d="M1.327,4.346c-0.058,0-0.104-0.052-0.104-0.115V2.222c0-0.063,0.046-0.115,0.104-0.115H11.58 c0.059,0,0.105,0.052,0.105,0.115v2.009c0,0.063-0.046,0.115-0.105,0.115H1.327z"/> <path d="M1.351,8.177c-0.058,0-0.104-0.051-0.104-0.115V6.054c0-0.064,0.046-0.115,0.104-0.115h10.252 c0.058,0,0.105,0.051,0.105,0.115v2.009c0,0.063-0.047,0.115-0.105,0.115H1.351z"/> <path d="M1.351,12.182c-0.058,0-0.104-0.05-0.104-0.115v-2.009c0-0.064,0.046-0.115,0.104-0.115h10.252 c0.058,0,0.105,0.051,0.105,0.115v2.009c0,0.064-0.047,0.115-0.105,0.115H1.351z"/> </svg>',
                    d = '<svg class="svg-icon" version="1.2" baseProfile="tiny" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 15 15" xml:space="preserve"> <g id="Layer_1"> <polygon fill="#E6E7E8" points="1.221,7.067 0.494,5.422 4.963,1.12 5.69,2.767 "/> <polygon fill="#E6E7E8" points="0.5,5.358 1.657,4.263 3.944,10.578 2.787,11.676 "/> <polygon fill="#E6E7E8" points="13.588,9.597 14.887,8.34 12.268,2.672 10.969,3.93 "/> <polygon fill="#E6E7E8" points="14.903,8.278 14.22,6.829 9.714,11.837 10.397,13.287 "/> </g> <g id="Layer_2"> <rect x="6.416" y="1.713" transform="matrix(0.9663 0.2575 -0.2575 0.9663 2.1699 -1.6329)" fill="#E6E7E8" width="1.805" height="11.509"/> </g> </svg>',
                    _ = '<svg class="svg-icon" version="1.1" id="Layer_2" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="13.25px" height="13.915px" viewBox="0 0 13.25 13.915" enable-background="new 0 0 13.25 13.915" xml:space="preserve"> <path d="M1.327,4.346c-0.058,0-0.104-0.052-0.104-0.115V2.222c0-0.063,0.046-0.115,0.104-0.115H11.58 c0.059,0,0.105,0.052,0.105,0.115v2.009c0,0.063-0.046,0.115-0.105,0.115H1.327z"/> <path d="M1.351,8.177c-0.058,0-0.104-0.051-0.104-0.115V6.054c0-0.064,0.046-0.115,0.104-0.115h10.252 c0.058,0,0.105,0.051,0.105,0.115v2.009c0,0.063-0.047,0.115-0.105,0.115H1.351z"/> <path d="M1.351,12.182c-0.058,0-0.104-0.05-0.104-0.115v-2.009c0-0.064,0.046-0.115,0.104-0.115h10.252 c0.058,0,0.105,0.051,0.105,0.115v2.009c0,0.064-0.047,0.115-0.105,0.115H1.351z"/> </svg>'
            },
            603: (e, a, t) => {
                t.d(a, {
                    tc: () => s,
                    z2: () => o
                });
                var i = t(567);
                const s = function() {
                    let e = {
                        play_trigger_step_back: "off",
                        step_back_amount: "5",
                        step_back: "37",
                        step_forward: "39",
                        sync_players_goto_next: "",
                        sync_players_goto_prev: "",
                        pause_play: "32",
                        show_tooltips: "off"
                    };
                    const a = jQuery(i.w0);
                    return a.length && (window.dzsap_keyboard_controls = JSON.parse(a.html())), window.dzsap_keyboard_controls && (e = jQuery.extend(e, window.dzsap_keyboard_controls)), e.step_back_amount = Number(e.step_back_amount), e
                };

                function n(e) {
                    if (window.dzsap_isTextFieldFocused) return;

                    function a(a) {
                        let t = !1;
                        return a.indexOf("ctrl+") > -1 ? e.ctrlKey && (a = a.replace("ctrl+", ""), e.keyCode === Number(a) && (t = !0)) : e.keyCode === Number(a) && (t = !0), t
                    }
                    var t = jQuery;
                    const i = t.extend({}, s());
                    if (dzsap_currplayer_focused && dzsap_currplayer_focused.api_pause_media) {
                        if (a(i.pause_play) && !t(dzsap_currplayer_focused).hasClass("comments-writer-active") && (t(dzsap_currplayer_focused).hasClass("is-playing") ? dzsap_currplayer_focused.api_pause_media() : dzsap_currplayer_focused.api_play_media(), window.dzsap_mouseover)) return e.preventDefault(), !1;
                        a(i.step_back) && dzsap_currplayer_focused.api_step_back(i.step_back_amount), a(i.step_forward) && dzsap_currplayer_focused.api_step_forward(i.step_back_amount), a(i.sync_players_goto_next) && dzsap_currplayer_focused.api_sync_players_goto_next(), a(i.sync_players_goto_prev) && dzsap_currplayer_focused.api_sync_players_goto_prev()
                    }
                }
                const o = () => {
                    let e = jQuery;
                    window.dzsap_isTextFieldFocused = !1, e(document).off("keydown.dzsapkeyup"), e(document).on("keydown.dzsapkeyup", n), e(document).on("focus blur", "textarea,input", (function(e) {
                        "focusin" != e.type && "focus" != e.type || (window.dzsap_isTextFieldFocused = !0), "focusout" != e.type && "blur" != e.type || (window.dzsap_isTextFieldFocused = !1)
                    })), e(document).on("keydown blur", ".zoomsounds-search-field", (function(a) {
                        const t = e(a.currentTarget);
                        setTimeout((function() {
                            if (t) {
                                let a = e(".audiogallery").eq(0);
                                t.attr("data-target") && (a = e(t.attr("data-target"))), a.get(0) && a.get(0).api_filter && a.get(0).api_filter("title", t.val())
                            }
                        }), 100)
                    }))
                }
            }
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        var a = __webpack_module_cache__[e];
        if (void 0 !== a) return a.exports;
        var t = __webpack_module_cache__[e] = {
            exports: {}
        };
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports
    }
    __webpack_require__.d = (e, a) => {
        for (var t in a) __webpack_require__.o(a, t) && !__webpack_require__.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
        })
    }, __webpack_require__.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), __webpack_require__.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var __webpack_exports__ = {};
    (() => {
        var e = __webpack_require__(586),
            a = __webpack_require__(401),
            t = __webpack_require__(567);
        const i = (e, a = "", t = "") => {
                if ((e => {
                        e.$theMedia.children().remove(), e.$mediaNode_ = null
                    })(e), t) {
                    if (!e.$mediaNode_) return i(e, a), !1;
                    jQuery(e.$mediaNode_).append(t), e.$mediaNode_.load && e.$mediaNode_.load()
                } else e.$theMedia.append(a);
                e.$mediaNode_ = e.$theMedia.children("audio").get(0)
            },
            s = e => Boolean(e && e !== 1 / 0);

        function n(e, a) {
            var i = e.initOptions;
            "" == i.soundcloud_apikey && alert("soundcloud api key not defined, read docs!");
            var s = "https://api.soundcloud.com/resolve?url=" + e.data_source + "&format=json&consumer_key=" + i.soundcloud_apikey;
            s = encodeURIComponent(s);
            var n = i.php_retriever + "?scurl=" + s;
            jQuery.ajax({
                type: "GET",
                url: n,
                data: {},
                async: !0,
                dataType: "text",
                error: function(e, a, t) {},
                success: function(a) {
                    var s = [];
                    let o = "";
                    try {
                        s = JSON.parse(a), e.audioType = "selfHosted", "" == s && (e.cthis.addClass(t.OF.ERRORED_OUT_CLASS), e.cthis.append('<div class="feedback-text">soundcloud track does not seem to serve via api</div>')), e.original_real_mp3 = e.cthis.attr("data-source"), s.stream_url ? (o = s.stream_url + "?consumer_key=" + i.soundcloud_apikey + "&origin=localhost", e.cthis.attr("data-source", o), e.$feed_fakeButton && e.$feed_fakeButton.attr("data-source", o), e._sourcePlayer && e._sourcePlayer.attr("data-source", o)) : (e.cthis.addClass(t.OF.ERRORED_OUT_CLASS), e.cthis.append('<div class="feedback-text ">this soundcloud track does not allow streaming  </div>')), e.data_source = o, e.cthis.attr("data-pcm") && (e.isAlreadyHasRealPcm = !0), "skin-wave" == i.design_skin && "canvas" == i.skinwave_wave_mode && 0 == e.isAlreadyHasRealPcm && 0 == ("on" == i.pcm_data_try_to_generate && "on" == i.pcm_data_try_to_generate_wait_for_real_pcm) && window.scrubModeWave__initGenerateWaveData(e, {
                            call_from: "soundcloud init(), pcm not real.."
                        }), e.setup_media({
                            called_from: "change_media"
                        }), setTimeout((function() {
                            e.isPlayPromised && (e.play_media({
                                call_from: "change_media"
                            }), e.isPlayPromised = !1)
                        }), 300)
                    } catch (e) {
                        console.log("soduncloud parse error -", a, " - ", n)
                    }
                }
            })
        }

        function o(e, i) {
            var s = {
                call_from: "default",
                call_attempt: 0
            };
            if (i && (s = jQuery.extend(s, i)), window.dzsap_wavesurfer_is_trying_to_generate) return setTimeout((function() {
                s.call_attempt++, s.call_attempt < 10 && o(e, s)
            }), 1e3), !1;
            if (e.isPcmRequiredToGenerate && function(e) {
                    return !e.isAlreadyHasRealPcm && "fake" != e.data_source
                }(e)) {
                window.dzsap_wavesurfer_is_trying_to_generate = e, window.dzsap_get_base_url();
                let i = window.dzsap_base_url ? window.dzsap_base_url + "dzsap-wave-generate.js" : t.OF.URL_WAVESURFER_HELPER_BACKUP;
                window.scrubModeWave__view_transitionIn = l, a.dv(i, window.scrubModeWave__initGenerateWaveData).then((a => {
                    scrubModeWave__initGenerateWaveData(e)
                }))
            }
        }

        function r(e, a, t) {
            var i = e.initOptions;
            c(e._scrubbarbg_canvas.get(0), a, "#" + i.design_wave_color_bg, {
                call_from: t + "_bg",
                selfClass: e,
                skinwave_wave_mode_canvas_waves_number: parseInt(i.skinwave_wave_mode_canvas_waves_number, 10),
                skinwave_wave_mode_canvas_waves_padding: parseInt(i.skinwave_wave_mode_canvas_waves_padding, 10)
            }), c(e._scrubbarprog_canvas.get(0), a, "#" + i.design_wave_color_progress, {
                call_from: t + "_prog",
                selfClass: e,
                skinwave_wave_mode_canvas_waves_number: parseInt(i.skinwave_wave_mode_canvas_waves_number, 10),
                skinwave_wave_mode_canvas_waves_padding: parseInt(i.skinwave_wave_mode_canvas_waves_padding, 10)
            }, !0)
        }

        function l(a, t) {
            a._scrubbar.find(".scrub-bg-img,.scrub-prog-img").removeClass("transitioning-in"), a._scrubbar.find(".scrub-bg-img,.scrub-prog-img").addClass("transitioning-out"), e.scrubbar_modeWave_setupCanvas({
                prepare_for_transition_in: !0
            }, a), r(a, t, "canvas_generate_wave_data_animate_pcm"), setTimeout((() => {
                e.scrubbar_modeWave_clearObsoleteCanvas(a)
            }), 300), a.isAlreadyHasRealPcm = !0, a.scrubbar_reveal()
        }

        function d(a, t, i, s, n, o, r, l, d, c, u, p, m) {
            let h = !1;
            var f = null,
                g = 0,
                y = null,
                v = !1,
                b = s = e.sanitizeToHexColor(s),
                w = [];
            (b = b.replace("#", "")).indexOf(",") > -1 && (w = b.split(",")), 1 == n && (n = r / n), 2 == n && (n = r / 2), 3 == n && (n = r / 3), r / n < 1 && (n = Math.ceil(n / 3));
            var k = Math.ceil(r / n),
                C = 1 - d;
            0 == k && (k = 1, m = 0), 1 == k && (m /= 2);
            var T = "",
                z = "";
            "spectrum" == u.call_from && (z = [], (T = (T = c.design_wave_color_progress).replace("#", "")).indexOf(",") > -1 && (z = T.split(",")));
            for (let r = 0; r < n; r++) {
                h = !1, a.save(), f = Math.ceil(r * (o.length / n)), r < n / 5 && o[f] < .1 && (o[f] = .1), o.length > 2.5 * n && r > 0 && r < o.length - 1 && (o[f] = Math.abs(o[f] + o[f - 1] + o[f + 1]) / 3);
                let b = C;
                t && (b = d);
                let x = Math.abs(o[f] * l * b);
                "on" == c.skinwave_wave_mode_canvas_normalize && (isNaN(g) && (g = 0), x = x / 1.5 + g / 2.5), g = x, a.lineWidth = 0, x = Math.floor(x);
                const P = t ? l * C : Math.ceil(l * b - x);
                if (a.beginPath(), a.rect(r * k, P, k - m, x), "spectrum" == u.call_from && (v = r / n < p.timeCurrent / p.timeTotal), p.isSample && (h = _(r, n, p)), v) {
                    if (t && "reflecto" !== c.skinwave_wave_mode_canvas_mode ? a.fillStyle = e.hexToRgb(T, .25) : a.fillStyle = h ? e.hexToRgb(T, .5) : "#" + T, z.length) {
                        const i = t && "reflecto" !== c.skinwave_wave_mode_canvas_mode ? e.hexToRgb("#" + z[0], .25) : "#" + z[0],
                            s = t && "reflecto" !== c.skinwave_wave_mode_canvas_mode ? e.hexToRgb("#" + z[1], .25) : "#" + z[1];
                        (y = a.createLinearGradient(0, 0, 0, l)).addColorStop(0, i), y.addColorStop(1, s), a.fillStyle = y
                    }
                } else if (t && "reflecto" !== c.skinwave_wave_mode_canvas_mode ? a.fillStyle = e.hexToRgb(s, .25) : a.fillStyle = h ? e.hexToRgb(s, .5) : "" + s, w.length) {
                    const i = t && "reflecto" !== c.skinwave_wave_mode_canvas_mode ? e.hexToRgb(e.utils_sanitizeToColor(w[0]), .25) : "" + e.utils_sanitizeToColor(w[0]),
                        s = t && "reflecto" !== c.skinwave_wave_mode_canvas_mode ? e.hexToRgb(e.utils_sanitizeToColor(w[1]), .25) : "" + e.utils_sanitizeToColor(w[1]);
                    (y = a.createLinearGradient(0, 0, 0, l)).addColorStop(0, i), y.addColorStop(1, s), a.fillStyle = y
                }
                h && i || (a.fill(), a.closePath()), a.restore()
            }
        }

        function _(e, a, t) {
            return e / a < t.timeModel.sampleTimeStart / t.timeModel.sampleTimeTotal || e / a > t.timeModel.sampleTimeEnd / t.timeModel.sampleTimeTotal
        }

        function c(a, t, i, s, n = !1) {
            let o = {
                call_from: "default",
                is_sample: !1,
                selfClass: null,
                sample_time_start: 0,
                sample_time_end: 0,
                sample_time_total: 0,
                skinwave_wave_mode_canvas_waves_number: 2,
                skinwave_wave_mode_canvas_waves_padding: 1
            };
            const r = jQuery;
            s && (o = Object.assign(o, s));
            var l = r(a),
                _ = a,
                {
                    selfClass: c,
                    skinwave_wave_mode_canvas_waves_number: u,
                    skinwave_wave_mode_canvas_waves_padding: p
                } = o;
            let m = {};
            var h, f, g = l.get(0).getContext("2d"),
                y = t;
            let v = [];
            isNaN(Number(u)) && (u = 2), isNaN(Number(p)) && (p = 1 !== u ? 1 : 0), c && (m = c.initOptions);
            let b = u,
                w = p;
            if (!l || !l.get(0)) return !1;
            c && c._scrubbar && c._scrubbarprog_canvas && (c._scrubbarbg_canvas.width(c._scrubbar.width()), c._scrubbarprog_canvas.width(c._scrubbar.width()), a.width = c._scrubbar.width(), a.height = c._scrubbar.height()), v = function(a) {
                let t = 0,
                    i = [],
                    s = 0,
                    n = (0, e.string_jsonConvertToArray)(a);
                for (s = 0; s < n.length; s++) n[s] > t && (t = n[s]);
                for (s = 0; s < n.length; s++) i[s] = parseFloat(Math.abs(n[s]) / Number(t));
                return n = i, n
            }(y), c && (_.width = c._scrubbar.width()), h = _.width, f = _.height;
            const k = parseFloat(m.skinwave_wave_mode_canvas_reflection_size);
            g.clearRect(0, 0, h, f), d(g, !1, n, i, b, v, h, f, k, m, o, c, w), k > 0 && d(g, !0, n, i, b, v, h, f, k, m, o, c, w), setTimeout((function() {
                c.scrubbar_reveal()
            }), 100)
        }

        function u(e) {
            if (console.log("inited spectrum"), console.trace(), null === window.dzsap_audio_ctx ? ("undefined" != typeof AudioContext ? e.spectrum_audioContext = new AudioContext : "undefined" != typeof webkitAudioContext ? e.spectrum_audioContext = new webkitAudioContext : e.spectrum_audioContext = null, window.dzsap_audio_ctx = e.spectrum_audioContext) : e.spectrum_audioContext = window.dzsap_audio_ctx, e.spectrum_audioContext && null === e.spectrum_analyser && (e.spectrum_analyser = e.spectrum_audioContext.createAnalyser(), e.spectrum_analyser.smoothingTimeConstant = .3, e.spectrum_analyser.fftSize = 512, "selfHosted" === e.audioType)) {
                e.$mediaNode_.crossOrigin = "anonymous", console.log("selfClass.$mediaNode_ - ", e.$mediaNode_), e.spectrum_mediaElementSource = e.spectrum_audioContext.createMediaElementSource(e.$mediaNode_), e.spectrum_mediaElementSource.connect(e.spectrum_analyser), e.spectrum_audioContext.createGain && (e.spectrum_gainNode = e.spectrum_audioContext.createGain()), e.spectrum_analyser.connect(e.spectrum_audioContext.destination), e.spectrum_gainNode.gain.value = 1;
                const a = 2 * e.spectrum_audioContext.sampleRate;
                e.spectrum_audioContext_buffer = e.spectrum_audioContext.createBuffer(2, a, e.spectrum_audioContext.sampleRate)
            }
        }
        window.dzsap_wavesurfer_load_attempt = 0, window.dzsap_wavesurfer_is_trying_to_generate = null;
        class p {
            constructor(e) {
                this.timeCurrent = 0, this.timeTotal = 0, this.sampleTimeStart = null, this.sampleTimeEnd = null, this.sampleTimeTotal = null, this.referenceMediaCurrentTime = 0, this.referenceMediaTotalTime = 0, this.visualCurrentTime = null, this.visualTotalTime = null, this.actualTotalTime = null, this.dzsapInstance = e, this.init()
            }
            init() {}
            initObjects() {
                var e = this.dzsapInstance,
                    a = this;
                e.cthis.get(0).api_set_timeVisualCurrent = function(e) {
                    a.visualCurrentTime = e
                }, e.cthis.get(0).api_get_time_total = function() {
                    return a.getVisualTotalTime()
                }, e.cthis.get(0).api_get_time_curr = function() {
                    return a.getVisualCurrentTime()
                }, e.cthis.get(0).api_set_timeVisualTotal = function(e) {
                    a.visualTotalTime = e, a.refreshTimes()
                }
            }
            refreshTimes() {
                var e = this.dzsapInstance;
                ("selfHosted" === e.audioType || "fake" === e.audioType && e._actualPlayer) && "" === e.audioTypeSelfHosted_streamType && (e.$mediaNode_ && s(e.$mediaNode_.duration) && (this.referenceMediaTotalTime = e.$mediaNode_.duration), this.referenceMediaCurrentTime = (() => {
                    if (e.$mediaNode_ && null === e._actualPlayer) return e.$mediaNode_.currentTime
                })(), "last" === e.playFrom && e.playFrom_ready && "undefined" != typeof Storage && (localStorage["dzsap_" + e.the_player_id + "_lastpos"] = e.timeCurrent)), "youtube" === e.audioType && e.$mediaNode_ && e.$mediaNode_.getDuration && (this.referenceMediaCurrentTime = e.$mediaNode_.getCurrentTime(), this.referenceMediaTotalTime = e.$mediaNode_.getDuration()), e._sourcePlayer && e._sourcePlayer.get(0) && e._sourcePlayer.get(0).api_get_time_curr && (isNaN(e._sourcePlayer.get(0).api_get_time_total()) || "" === e._sourcePlayer.get(0).api_get_time_total() || e._sourcePlayer.get(0).api_get_time_total() < 1) && e._sourcePlayer.get(0).api_set_timeVisualTotal(this.getVisualTotalTime()), null === e._actualPlayer && this.referenceMediaCurrentTime > -1 && (e.timeCurrent = this.referenceMediaCurrentTime), null === e._actualPlayer && this.referenceMediaTotalTime > -1 && (e.timeTotal = this.referenceMediaTotalTime), this.sampleTimeStart && this.sampleTimeEnd && e.timeCurrent > this.sampleTimeEnd && (e.handle_end({
                    call_from: "time_curr>sample_time_end"
                }), e.isMediaEnded = !0, clearTimeout(e.inter_isEnded), e.inter_isEnded = setTimeout((function() {
                    e.isMediaEnded = !1
                }), 1e3))
            }
            processCurrentFrame() {
                var e = this.dzsapInstance;
                if (e._sourcePlayer && (e._sourcePlayer.get(0) && e._sourcePlayer.get(0).api_get_time_curr && e._sourcePlayer.get(0).api_set_timeVisualCurrent(e.timeCurrent), e._sourcePlayer.get(0) && e._sourcePlayer.get(0).api_seek_to_visual)) {
                    var a = e.timeCurrent;
                    e._sourcePlayer.get(0).api_seek_to_visual(a / e.timeTotal)
                }
                e.isSafeToChangeTrack && this.timeTotal > 1 && this.timeCurrent >= this.timeTotal - .07 && (e._actualPlayer || (e.handle_end({
                    call_from: "selfClass.timeTotal > 0 && selfClass.timeCurrent >= selfClass.timeTotal - 0.07 ... "
                }), e.isMediaEnded = !0, clearTimeout(e.inter_isEnded), e.inter_isEnded = setTimeout((function() {
                    e.isMediaEnded = !1
                }), 1e3)))
            }
            getVisualCurrentTime() {
                var e = this.dzsapInstance;
                return null === e._actualPlayer && this.referenceMediaCurrentTime > -1 ? this.referenceMediaCurrentTime : this.visualCurrentTime ? this.visualCurrentTime : e.playFrom ? e.playFrom : 0
            }
            getActualTotalTime() {
                return this.actualTotalTime
            }
            getVisualTotalTime() {
                var e = this.dzsapInstance;
                if (this.sampleTimeTotal) return this.sampleTimeTotal;
                if (null === e._actualPlayer) {
                    if (this.referenceMediaTotalTime > -1) return this.referenceMediaTotalTime
                } else {
                    if (this.visualTotalTime) return this.visualTotalTime;
                    if (this.referenceMediaTotalTime > -1) return this.referenceMediaTotalTime
                }
                return 0
            }
            getActualTargetTime(e) {
                return this.sampleTimeStart && (e < this.sampleTimeStart && (e = this.sampleTimeStart), e > this.sampleTimeEnd && (e = this.sampleTimeEnd)), e
            }
            getSampleTimesFromDom(e = null) {
                var a = this.dzsapInstance;
                a.sample_time_start = 0, a.sample_time_total = 0, a.sample_time_start = 0, a.pseudo_sample_time_end = 0, null === e && (e = a.cthis), e.attr("data-sample_time_start") && (this.sampleTimeStart = Number(e.attr("data-sample_time_start"))), e.attr("data-sample_time_end") && (this.sampleTimeEnd = Number(e.attr("data-sample_time_end"))), e.attr("data-sample_time_total") && (this.sampleTimeTotal = Number(e.attr("data-sample_time_total"))), a.sample_perc_start = a.sample_time_start / a.sample_time_total, a.sample_perc_end = a.sample_time_end / a.sample_time_total, a.isSample = !!(this.sampleTimeTotal && this.sampleTimeStart || this.sampleTimeStart && this.sampleTimeEnd)
            }
        }
        const m = function(t) {
                var i = this,
                    s = jQuery,
                    n = {
                        action: "dzsap_submit_views",
                        postdata: 1,
                        playerid: i.the_player_id,
                        currip: i.currIp,
                        playerSource: i.data_source
                    };
                i.cthis.attr("data-playerid-for-views") && (n.playerid = i.cthis.attr("data-playerid-for-views")), "" == n.playerid && (n.playerid = (0, e.dzs_clean_string)(i.data_source)), i.urlToAjaxHandler && (s.ajax({
                    type: "POST",
                    url: i.urlToAjaxHandler,
                    data: n,
                    success: function(e) {
                        let t = i.cthis.find(".counter-hits .the-number").html();
                        t = parseInt(t, 10), 2 != i.increment_views && t++, e && (0, a.qw)(e) && (t = (0, a.qw)(e).number), i.cthis.find(".counter-hits .the-number").html(t), i.ajax_view_submitted = "on"
                    },
                    error: function(e) {
                        var a = i.cthis.find(".counter-hits .the-number").html();
                        a = parseInt(a, 10), a++, i.cthis.find(".counter-hits .the-number").html(a), i.ajax_view_submitted = "on"
                    }
                }), i.ajax_view_submitted = "on")
            },
            h = function(e) {
                var a = this,
                    t = jQuery,
                    i = {
                        action: "dzsap_submit_like",
                        postdata: e,
                        playerid: a.the_player_id,
                        playerSource: a.data_source
                    };
                a.cthis.find(".btn-like").addClass("disabled"), (a.urlToAjaxHandler || a.cthis.hasClass("is-preview")) && t.ajax({
                    type: "POST",
                    url: a.urlToAjaxHandler,
                    data: i,
                    success: function(e) {
                        a.cthis.find(".btn-like").addClass("active"), a.cthis.find(".btn-like").removeClass("disabled");
                        var t = a.cthis.find(".counter-likes .the-number").html();
                        t = parseInt(t, 10), t++, a.cthis.find(".counter-likes .the-number").html(t)
                    },
                    error: function(e) {
                        a.cthis.find(".btn-like").addClass("active"), a.cthis.find(".btn-like").removeClass("disabled");
                        var t = a.cthis.find(".counter-likes .the-number").html();
                        t = parseInt(t, 10), t++, a.cthis.find(".counter-likes .the-number").html(t)
                    }
                })
            },
            f = function(e) {
                var a = this,
                    t = jQuery,
                    i = {
                        action: "dzsap_retract_like",
                        postdata: e,
                        playerid: a.the_player_id
                    };
                a.cthis.find(".btn-like").addClass("disabled"), a.urlToAjaxHandler && t.ajax({
                    type: "POST",
                    url: a.urlToAjaxHandler,
                    data: i,
                    success: function(e) {
                        a.cthis.find(".btn-like").removeClass("active"), a.cthis.find(".btn-like").removeClass("disabled");
                        var t = a.cthis.find(".counter-likes .the-number").html();
                        t = parseInt(t, 10), t--, a.cthis.find(".counter-likes .the-number").html(t)
                    },
                    error: function(e) {
                        a.cthis.find(".btn-like").removeClass("active"), a.cthis.find(".btn-like").removeClass("disabled");
                        var t = a.cthis.find(".counter-likes .the-number").html();
                        t = parseInt(t, 10), t--, a.cthis.find(".counter-likes .the-number").html(t)
                    }
                })
            },
            g = function(a) {
                var t = this,
                    i = jQuery,
                    s = (t.initOptions, {
                        action: "dzsap_front_submitcomment",
                        postdata: a,
                        playerid: t.the_player_id,
                        comm_position: t.commentPositionPerc
                    });
                window.dzsap_settings && (s.skinwave_comments_avatar = window.dzsap_settings.comments_avatar, s.skinwave_comments_account = window.dzsap_settings.comments_username), t.cthis.find("*[name=comment-email]").length > 0 && (s.email = t.cthis.find("*[name=comment-email]").eq(0).val()), t.urlToAjaxHandler && jQuery.ajax({
                    type: "POST",
                    url: t.urlToAjaxHandler,
                    data: s,
                    success: function(a) {
                        "0" == a.charAt(a.length - 1) && (a = a.slice(0, a.length - 1));
                        var n = "";
                        n = "", n += '<span class="dzstooltip-con" style="left:' + t.commentPositionPerc + '"><span class="dzstooltip arrow-from-start transition-slidein arrow-bottom skin-black" style="width: 250px;"><span class="the-comment-author">@' + window.dzsap_settings.comments_username + "</span> says:<br>", n += (0, e.htmlEncode)(s.postdata), n += '</span><div class="the-avatar" style="background-image: url(' + window.dzsap_settings.comments_avatar + ')"></div></span>', t._commentsHolder.children().each((function() {
                            var e = i(this);
                            0 == e.hasClass("dzstooltip-con") && e.addClass("dzstooltip-con")
                        })), t._commentsHolder.append(n), t.action_audio_comment && t.action_audio_comment(t.cthis, n)
                    },
                    error: function(e) {
                        t._commentsHolder.append(s.postdata)
                    }
                })
            },
            y = function(e) {
                var a = this,
                    t = {
                        action: "dzsap_submit_download",
                        postdata: e,
                        playerid: a.the_player_id
                    };
                a.starrating_alreadyrated > -1 || a.urlToAjaxHandler && jQuery.ajax({
                    type: "POST",
                    url: a.urlToAjaxHandler,
                    data: t,
                    success: function(e) {},
                    error: function(e) {}
                })
            };
        class v {
            constructor(e) {
                this.selfClass = e
            }
            set_extraHtmlFloatRight(e) {
                this.selfClass.cthis.find(".extrahtml-in-float-right").eq(0).html(e)
            }
        }
        const b = function(e) {
            var a = jQuery;
            e.cthis.removeClass("comments-writer-active"), e._commentsHolder.find(".dzstooltip-con.placeholder").remove(), e.$commentsWritter.removeClass("active"), e.$commentsWritter.css({
                height: 0
            }), e.initOptions.parentgallery && void 0 !== a(e.initOptions.parentgallery).get(0) && void 0 !== a(e.initOptions.parentgallery).get(0).api_handleResize && a(e.initOptions.parentgallery).get(0).api_handleResize(), setTimeout((function() {
                e.cthis.find(".comments-writter-temp-css,.dzsap-style-comments").remove()
            }), 300)
        };

        function w(a, t) {
            a.timeModel.getVisualTotalTime() ? a.$commentsWritter.find(".dzsap-comments--comment-form-label-time").html(e.formatTime(t * a.timeModel.getVisualTotalTime())) : setTimeout((() => {
                w(a, t)
            }), 100)
        }
        const k = function(e, a, t) {
            var i = jQuery,
                s = e.initOptions,
                n = i(a),
                o = parseInt(t.clientX, 10) - n.offset().left;
            let r = o / n.width();
            if (e.commentPositionPerc = `calc(${100*r}% - 7px)`, w(e, r), !s.skinwave_comments_links_to) {
                if (!("off" !== s.skinwave_comments_allow_post_if_not_logged_in || window.dzsap_settings && window.dzsap_settings.comments_username)) return !1;
                var l = !0;
                if (e._commentsHolder.children().each((function() {
                        var a = i(this);
                        if (!a.hasClass("placeholder") && !a.hasClass("the-bg")) {
                            var t = a.offset().left - n.offset().left;
                            return Math.abs(t - o) < 20 ? (e._commentsHolder.find(".dzstooltip-con.placeholder").remove(), l = !1, !1) : void 0
                        }
                    })), !l) return !1;
                e.$commentsWritter.css({
                    left: `${o}px`
                }), e.$commentsWritter.css("top", parseInt(e._commentsHolder.css("top"), 10) + 20 + "px"), !1 === e.$commentsWritter.hasClass("active") && (e.$commentsWritter.addClass("active"), e.cthis.addClass("comments-writer-active")), window.dzsap_settings && window.dzsap_settings.comments_username ? e.cthis.find("input[name=comment-email]").remove() : e.$commentsWritter.find(".comments-writer--avatar-con").remove(), C(e)
            }
        };

        function C(e) {
            var a = "";
            window.dzsap_settings && window.dzsap_settings.comments_avatar && (a = window.dzsap_settings.comments_avatar), e._commentsHolder.remove(".dzsap-style-comments"), e._commentsHolder.append('<style class="dzsap-style-comments">.dzstooltip-con:not(.placeholder) { opacity: 0.5; }</style>'), e._commentsHolder.find(".dzstooltip-con.placeholder").remove(), e._commentsHolder.append('<span class="dzstooltip-con placeholder" style="left:' + e.commentPositionPerc + ';"><div class="the-avatar" style="background-image: url(' + a + ')"></div></span>')
        }

        function T(e, a, t, i) {
            var s = jQuery,
                n = e.initOptions,
                o = "";
            if (t) {
                if (0 == /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)) return alert("please insert email, your email is just used for gravatar. it will not be sent or stored anywhere"), !1;
                o = String(t).split("@")[0], e.$commentsSelector && e.$commentsSelector.find("*[name=comment_email],*[name=comment_user]").remove(), window.dzsap_settings || (window.dzsap_settings = {}), window.dzsap_settings.comments_username = o, window.dzsap_settings.comments_avatar = "https://secure.gravatar.com/avatar/" + window.MD5(String(e.cthis.find("input[name=comment-email]").eq(0).val()).toLowerCase()) + "?s=20"
            }
            var r = "";
            r += a, e.cthis.find("*[name=comment-text]").eq(0).val(""), e.cthis.find(".comments-writter-temp-css,.dzsap-style-comments").remove(), g.bind(e)(r), b(e), n.parentgallery && null != s(n.parentgallery).get(0) && null != s(n.parentgallery).get(0).api_player_commentSubmitted && s(n.parentgallery).get(0).api_player_commentSubmitted()
        }
        const z = function(e, a) {
            var t = jQuery(this),
                i = null;
            if (t.parent().parent().hasClass("zoomsounds-comment-wrapper") && (i = t.parent().parent()), t.parent().parent().parent().hasClass("zoomsounds-comment-wrapper") && (i = t.parent().parent().parent()), "focusin" == a.type && (e.timeCurrent, e.timeTotal, e._commentsHolder.width(), e.commentPositionPerc = `calc(${e.timeCurrent/e.timeTotal*100}% - 7px)`, i.addClass("active"), C(e)), a.type, "click" == a.type && (t.hasClass("dzstooltip--close") && (i.removeClass("active"), i.find("input").val("")), t.hasClass("comments-btn-submit"))) {
                var s = "";
                return i.find(".comment_email").length && (s = i.find(".comment_email").eq(0).val()), T(e, i.find(".comment_text").eq(0).val(), s), i.removeClass("active"), i.find("input").val(""), !1
            }
        };
        var x = __webpack_require__(560);
        const P = {
                design_skin: "skin-default",
                cueFirstMedia: "on",
                autoplay: "off",
                autoplayNext: "on",
                settings_enable_linking: "off",
                design_menu_position: "bottom",
                navigation_method: "mouseover",
                design_menu_state: "open",
                design_menu_show_player_state_button: "off",
                design_menu_width: "default",
                design_menu_height: "default",
                design_menu_space: "default",
                settings_php_handler: "",
                design_menuitem_width: "default",
                design_menuitem_height: "default",
                design_menuitem_space: "default",
                disable_menu_navigation: "off",
                loop_playlist: "on",
                menu_facebook_share: "auto",
                enable_easing: "off",
                settings_ap: "default",
                playlistTransition: "fade",
                embedded: "off",
                mode_showall_layout: "one-per-row",
                settings_mode: "mode-normal",
                settings_mode_showall_show_number: "on",
                mode_normal_video_mode: "auto"
            },
            S = class {
                constructor(e) {
                    this.parentGallery = e, this.structZoomsoundsNav = "", this._navMain = null, this._navClipper = null, this.cgallery = null, this.size_navMainClipSize = null, this.size_navMainTotalSize = null, this.finish_viy = 0, this.init()
                }
                init() {
                    var e = this.parentGallery;
                    this.structZoomsoundsNav = '<div class="nav-main zoomsounds-nav ' + e.initOptions.design_skin + " navigation-method-" + e.initOptions.navigation_method + '"><div class="nav-clipper"></div></div>', "full" === this.parentGallery.initOptions.navigation_method && (this.parentGallery.initOptions.design_menu_height = "auto")
                }
                init_ready() {
                    var t = this.parentGallery;

                    function i(e) {
                        var a = jQuery(this);
                        if ("click" == e.type) {
                            if (a.hasClass("menu-item")) {
                                var i = a.parent().children().index(a);
                                t.goto_item(i)
                            }
                            if (a.hasClass("menu-btn-like")) return a.parent().parent().attr("data-playerid") && h.bind(t)(1, a.parent().parent().attr("data-playerid"), {
                                refferer: a
                            }), !1;
                            if (a.hasClass("menu-facebook-share")) return a.parent().parent().attr("data-playerid") && h.bind(t)(1, a.parent().parent().attr("data-playerid"), {
                                refferer: a
                            }), !1
                        }
                    }
                    "on" == t.initOptions.disable_menu_navigation && this._navMain.hide(), isNaN(Number(t.initOptions.design_menu_height)) || this._navMain.css({
                        height: (0, a.tK)(t.initOptions.design_menu_height)
                    }), ((0, e.is_ios)() || (0, e.is_android)()) && this._navMain.css({
                        overflow: "auto"
                    }), "closed" == t.initOptions.design_menu_state ? (this._navMain.css({
                        height: 0
                    }), this.cgallery.removeClass("menu-opened"), this.cgallery.addClass("menu-closed")) : (this.cgallery.addClass("menu-opened"), this.cgallery.removeClass("menu-closed")), this._navClipper.on("click", ".menu-btn-like,.menu-facebook-share", i), this._navClipper.on("click", ".menu-item", i)
                }
                get_structZoomsoundsNav() {
                    return this.structZoomsoundsNav
                }
                set_elements(e, a, t) {
                    this._navMain = e, this._navClipper = a, this.cgallery = t
                }
                calculateDims() {
                    this.size_navMainClipSize = this._navMain.height(), this.size_navMainTotalSize = this._navClipper.outerHeight();
                    const a = this;

                    function t(t) {
                        var i = jQuery(this),
                            s = (t.pageX, i.offset().left, t.pageY - i.offset().top);
                        if (!(a.size_navMainTotalSize <= a.size_navMainClipSize)) {
                            a.size_navMainClipSize = a._navMain.outerHeight();
                            var n = 0;
                            (n = s / a.size_navMainClipSize * -(a.size_navMainTotalSize - a.size_navMainClipSize + 10 + 40) + 20) > 0 && (n = 0), n < -(a.size_navMainTotalSize - a.size_navMainClipSize + 10) && (n = -(a.size_navMainTotalSize - a.size_navMainClipSize + 10)), a.finish_viy = n, 0 == (0, e.is_ios)() && 0 == (0, e.is_android)() && "on" != a.parentGallery.initOptions.enable_easing && a._navClipper.css({
                                transform: "translateY(" + a.finish_viy + "px)"
                            })
                        }
                    }
                    "mouseover" === this.parentGallery.initOptions.navigation_method && (this.size_navMainTotalSize > this.size_navMainClipSize && this.size_navMainClipSize > 0 ? (this._navMain.off("mousemove", t), this._navMain.on("mousemove", t)) : this._navMain.off("mousemove", t))
                }
                toggle_menu_state() {
                    const e = this;
                    0 == this._navMain.height() ? (this._navMain.css({
                        height: this.parentGallery.initOptions.design_menu_height
                    }), this.cgallery.removeClass("menu-closed"), this.cgallery.addClass("menu-opened")) : (this._navMain.css({
                        height: 0
                    }), this.cgallery.removeClass("menu-opened"), this.cgallery.addClass("menu-closed")), setTimeout((function() {
                        e.parentGallery.handleResize()
                    }), 400)
                }
                parseTrackData(e) {
                    var a = 0;
                    this._navMain.find(".menu-item-views").each((function() {
                        var t = $(this),
                            i = t.html(),
                            s = /{{views_(.*?)}}/g.exec(i),
                            n = "";
                        if (s && s[1]) {
                            for (var o in n = s[1], e)
                                if (n == e[o].label || n == "ap" + e[o].label) {
                                    i = i.replace(s[0], e[o].views), a++;
                                    break
                                } t.html(i)
                        }
                    })), a < e.length && this._navMain.find(".menu-item-views").each((function() {
                        var e = jQuery(this),
                            a = e.html(),
                            t = /{{views_(.*?)}}/g.exec(a);
                        t && t[0] && (a = a.replace(t[0], 0), e.html(a))
                    }))
                }
            };
        class O {
            constructor(e, a, t) {
                this.argThis = e, this.argOptions = a, this.$ = t, this.navClass = null, this.init()
            }
            init() {
                var a, i, s, n, o = this.$,
                    r = this,
                    l = r.argOptions,
                    d = o(r.argThis),
                    _ = "ag1",
                    c = -1,
                    u = 0,
                    p = 0,
                    m = 0,
                    h = 0,
                    f = !1,
                    g = !0,
                    y = !0,
                    v = !1,
                    b = !1,
                    w = [],
                    k = [],
                    C = "You need to comment or rate before downloading.",
                    T = 0,
                    z = 0,
                    P = 0;

                function $() {
                    if (y) return !1;
                    d.remove(), d = null, y = !0
                }

                function O(e, a) {
                    e || (e = "title"), i.children().each((function() {
                        var t, s, n = (t = o(this), s = "", "title" === e && (s = t.find(".the-name").text()), "" === a || s.toLowerCase().indexOf(a.toLowerCase()) > -1);
                        n ? o(this).addClass("is-according-to-search") : o(this).removeClass("is-according-to-search"), i.hasClass("isotoped") ? i.isotope({
                            filter: ".is-according-to-search"
                        }) : n ? o(this).fadeIn("fast") : o(this).fadeOut("fast")
                    }))
                }

                function M() {
                    window.dzsap_syncList_players = [], i.children(".audioplayer,.audioplayer-tobe").each((function() {
                        var e = o(this);
                        e.addClass("feeded-whole-playlist"), "on" != e.attr("data-do-not-include-in-list") && window.dzsap_syncList_players.push(e)
                    }))
                }

                function I() {
                    if (b) return !1;
                    b = !0, l.settings_php_handler && o.ajax({
                        type: "POST",
                        url: l.settings_php_handler,
                        data: {
                            action: "dzsap_get_views_all",
                            postdata: "1"
                        },
                        success: function(e) {
                            d.attr("data-track-data", e), A()
                        },
                        error: function(e) {}
                    })
                }

                function A() {
                    if (d.attr("data-track-data")) {
                        try {
                            k = JSON.parse(d.attr("data-track-data"))
                        } catch (e) {
                            console.log(e)
                        }
                        k && k.length && r.navClass.parseTrackData(k)
                    }
                }

                function N() {
                    return p
                }

                function q() {
                    const a = d.find(".items").eq(0).children(".audioplayer-tobe");
                    for (w = [], w = function(a) {
                            const t = [];
                            return a.each((function() {
                                var a = o(this);
                                let i = "";
                                a.find(".menu-description").length && a.find(".menu-description").eq(0).html() ? i = a.find(".menu-description").html() : (i = "", (a.find(".feed-artist-name").length || a.find(".feed-song-name").length) && (i = "", a.attr("data-thumb") && (i += `<div class="menu-item-thumb-con"><div class="menu-item-thumb" style="background-image: url(${a.attr("data-thumb")})"></div></div>`), i += `<div class="menu-artist-info"><span class="the-artist">${a.find(".feed-artist-name").html()}</span><span class="the-name">${a.find(".feed-song-name").html()}</span></div>`));
                                var s, n = {
                                    menu_description: i,
                                    player_id: (s = a, s.attr("data-player-id") ? s.attr("data-player-id") : s.attr("id") ? s.attr("id") : s.attr("data-source") ? e.dzs_clean_string(s.attr("data-source")) : void 0)
                                };
                                t.push(n)
                            })), t
                        }(a), i.append(a), h = 0; h < w.length; h++) {
                        var t = "";
                        w[h].menu_description && -1 == w[h].menu_description.indexOf('<div class="menu-item-thumb-con"><div class="menu-item-thumb" style="') && (t += " no-thumb");
                        var s = '<div class="menu-item' + t + '"  data-menu-index="' + h + '" data-gallery-id="' + _ + '" data-playerid="' + w[h].player_id + '">';
                        d.hasClass("skin-aura") && (s += '<div class="menu-item-number">' + ++p + "</div>"), s += w[h].menu_description, d.hasClass("skin-aura") && 1 == String(w[h].menu_description).indexOf("menu-item-views") && (k && k.length > 0 ? s += '<div class="menu-item-views"></div>' : (I(), s += '<div class="menu-item-views">' + x.Z1 + ' <span class="the-count">{{views_' + w[h].player_id + "}}</span></div>")), s += "</div>", n.append(s), d.hasClass("skin-aura") && w[h] && w[h].menu_description && w[h].menu_description.indexOf("float-right") > -1 && n.children().last().addClass("has-extra-info")
                    }
                }

                function j() {
                    d.addClass("dzsag-loaded")
                }

                function R() {
                    if (!o(this).hasClass("active")) return alert(C), !1
                }

                function E() {
                    void 0 !== i.children().eq(c).get(0) && void 0 !== i.children().eq(c).get(0).api_play_media && i.children().eq(c).get(0).api_play_media({
                        call_from: "play_curr_media_gallery"
                    })
                }

                function H(e) {
                    if ("mode-showall" == l.settings_mode) {
                        var a = i.children(".audioplayer,.audioplayer-tobe").index(e);
                        c = a, d.get(0).currNr_2 = a
                    }
                }

                function L() {
                    isNaN(T) && (T = 0), z = T, P = r.navClass.finish_viy - z, T = Number(Math.easeIn(1, z, P, 20).toFixed(4)), 0 == e.is_ios() && 0 == e.is_android() && n.css({
                        transform: "translateY(" + T + "px)"
                    }), requestAnimationFrame(L)
                }

                function F() {
                    r.navClass.toggle_menu_state()
                }

                function D() {
                    console.log("handlePlaylistSongEnd() ", l), "on" == l.autoplayNext && Z()
                }

                function B() {
                    n.children(".menu-item").eq(c).find(".download-after-rate").addClass("active")
                }

                function Q() {
                    n.children(".menu-item").eq(c).find(".download-after-rate").addClass("active")
                }

                function V() {
                    "mode-showall" == l.settings_mode || i.hasClass("isotoped") || "one" == l.mode_normal_video_mode || 0 == i.children().eq(c).hasClass("zoomsounds-wrapper-bg-bellow") && i.css("height", i.children().eq(c).outerHeight()), i.hasClass("isotoped") || setTimeout((function() {
                        i.css("height", "auto")
                    }), t.OF.PLAYLIST_TRANSITION_DURATION), r.navClass.calculateDims(), "on" == l.embedded && window.frameElement && (window.frameElement.height = d.height())
                }

                function W() {
                    r.navClass.calculateDims()
                }

                function U() {
                    "mode-showall" !== l.settings_mode && !1 === i.hasClass("isotoped") && setTimeout((function() {
                        i.css("height", i.children().eq(c).outerHeight())
                    }), 500), V()
                }

                function G(e) {
                    i.children().eq(u).removeClass("transitioning-out"), i.children().eq(e).removeClass("transitioning-in"), u = c, f = !1
                }

                function Y() {
                    d.parent().children(".the-bg").eq(0).remove(), f = !1
                }

                function J() {
                    m = c;
                    var e = !0;
                    --m < 0 && (m = i.children().length - 1, "off" == l.loop_playlist && (e = !1)), e && K(m)
                }

                function Z() {
                    m = c;
                    var e = !0;
                    "mode-showall" == l.settings_mode && (m = d.get(0).currNr_2), ++m >= i.children().length && (m = 0, "off" == l.loop_playlist && (e = !1)), e && K(m)
                }

                function K(a, s) {
                    var r = {
                        ignore_arg_currNr_check: !1,
                        ignore_linking: !1,
                        donotopenlink: "off",
                        called_from: "default"
                    };
                    if (s && (r = o.extend(r, s)), 1 != f)
                        if ("last" == a && (a = i.children().length - 1), Boolean(c == a)) i && i.children().eq(c).get(0) && i.children().eq(c).get(0).api_play_media && i.children().eq(c).get(0).api_play_media({
                            call_from: "gallery"
                        });
                        else {
                            var u = i.children(".audioplayer,.audioplayer-tobe").eq(a),
                                p = "";
                            c > -1 && (void 0 !== i.children().eq(c).get(0) && (void 0 !== i.children().eq(c).get(0).api_pause_media && i.children().eq(c).get(0).api_pause_media(), void 0 !== i.children().eq(c).get(0).api_get_last_vol && (p = i.children().eq(c).get(0).api_get_last_vol())), n.children().removeClass("active active-from-gallery"), "one" == l.mode_normal_video_mode || "mode-showall" != l.settings_mode && (i.children().eq(c).removeClass("active active-from-gallery"), n.children().eq(c).removeClass("active active-from-gallery"))), "sameasgallery" === l.settings_ap.design_skin && (l.settings_ap.design_skin = l.design_skin), -1 == c && "on" == l.autoplay && (l.settings_ap.autoplay = "on"), c > -1 && "on" == l.autoplayNext && (l.settings_ap.autoplay = "on"), l.settings_ap.parentgallery = d, l.settings_ap.design_menu_show_player_state_button = l.design_menu_show_player_state_button, l.settings_ap.cue = "on", 1 == g && ("off" == l.cueFirstMedia && (l.settings_ap.cue = "off"), g = !1);
                            var m = o.extend({}, l.settings_ap);
                            if (m.volume_from_gallery = p, m.call_from = "gotoItem", m.player_navigation = l.player_navigation, "one" == l.mode_normal_video_mode && a > -1 && "init" != r.called_from) {
                                var h = i.children().eq(0).get(0);
                                u = i.children().eq(0), h && h.api_play_media && (h.api_change_media(i.children().eq(a), {
                                    called_from: "goto_item -- mode_normal_video_mode()",
                                    modeOneGalleryIndex: a,
                                    source_player_do_not_update: "on"
                                }), "on" == l.autoplayNext && setTimeout((function() {
                                    h.api_play_media()
                                }), 200))
                            } else X(u, m);
                            "on" === l.autoplayNext && ("mode-showall" === l.settings_mode && (c = d.get(0).currNr_2), c > -1 && u.get(0) && u.get(0).api_play && u.get(0).api_play()), void 0 !== l.settings_ap.playfrom && "0" !== l.settings_ap.playfrom || (u.get(0) && u.get(0).api_seek_to ? u.get(0).api_seek_to(0, {
                                call_from: "playlist_seek_from_0"
                            }) : console.log("_audioplayerToBeActive not found - ", u)), u.get(0), "mode-showall" !== l.settings_mode && (i.children().eq(c).addClass("transitioning-out"), u.removeClass("transitioning-out-complete"), u.addClass("transitioning-in"), setTimeout((e => {
                                e.addClass("transitioning-out-complete")
                            }), t.OF.PLAYLIST_TRANSITION_DURATION, i.children().eq(c)), "link" != u.attr("data-type") && 0 == r.ignore_linking && "on" == l.settings_enable_linking && history.pushState({
                                foo: "bar"
                            }, null, e.add_query_arg(window.location.href, "audiogallery_startitem_" + _, a)), "fade" === l.playlistTransition && (setTimeout(G, t.OF.PLAYLIST_TRANSITION_DURATION, a), f = !0), "direct" === l.playlistTransition && G(a)), u.addClass("active active-from-gallery"), n.children().eq(a).addClass("active active-from-gallery");
                            var y = "";
                            u.attr("data-bgimage") && (y = u.attr("data-bgimage")), u.attr("data-wrapper-image") && (y = u.attr("data-wrapper-image")), y && d.parent().hasClass("ap-wrapper") && d.parent().children(".the-bg").length > 0 && (d.parent().children(".the-bg").eq(0).after('<div class="the-bg" style="background-image: url(' + y + ');"></div>'), d.parent().children(".the-bg").eq(0).css({
                                opacity: 1
                            }), d.parent().children(".the-bg").eq(1).css({
                                opacity: 0
                            }), d.parent().children(".the-bg").eq(1).animate({
                                opacity: 1
                            }, {
                                queue: !1,
                                duration: 1e3,
                                complete: Y,
                                step: function() {
                                    f = !0
                                }
                            }), f = !0), "mode-showall" != l.settings_mode && (c = a, d.data("currNr", c)), i.children().eq(c).get(0) && i.children().eq(c).get(0).api_handleResize && i.children().eq(c).hasClass("media-setuped") && i.children().eq(c).get(0).api_handleResize(), V()
                        }
                }

                function X(e, a) {
                    var t = o.extend({}, l.settings_ap);
                    a && (t = o.extend(t, a)), e.hasClass("audioplayer-tobe") && (l.settings_ap.call_from = "init player from gallery", t.is_inited_from_playlist = !0, e.audioplayer(t))
                }
                r.goto_item = K, r.handleResize = U, r.initOptions = l, window.dzsap_settings && void 0 !== window.dzsap_settings.str_alertBeforeRate && (C = window.dzsap_settings.str_alertBeforeRate), d.get(0).currNr_2 = -1,
                    function() {
                        if ("default" === l.settings_ap)
                            if (d.attr("data-player-options")) l.settings_ap = e.convertPluginOptionsToFinalOptions(d.get(0), {}, null, "data-player-options");
                            else {
                                const a = d.find(".audioplayer, .audioplayer-tobe").eq(0);
                                a && (l.settings_ap = e.convertPluginOptionsToFinalOptions(a.get(0), {}, null))
                            }
                        else "string" == typeof l.settings_ap && window.dzsap_apconfigs && "object" == typeof window.dzsap_apconfigs[l.settings_ap] && (l.settings_ap = {
                            ...window.dzsap_apconfigs[l.settings_ap]
                        });
                        "default" !== l.settings_ap && "string" != typeof l.settings_ap || (l.settings_ap = {}), "default" === l.design_menu_width && (l.design_menu_width = "100%"), "default" === l.design_menu_height && (l.design_menu_height = "200"), d.hasClass("skin-wave") && (l.design_skin = "skin-wave"), d.hasClass("skin-default") && (l.design_skin = "skin-default"), d.hasClass("skin-aura") && (l.design_skin = "skin-aura"), d.addClass(l.settings_mode), d.append('<div class="slider-main"><div class="slider-clipper"></div></div>'), d.addClass("menu-position-" + l.design_menu_position), a = d.find(".slider-main").eq(0);
                        var c = d.find(".items").children(".audioplayer-tobe").length;
                        l.settings_ap.disable_player_navigation = l.disable_player_navigation, (0 === c || 1 === c) && (l.design_menu_position = "none", l.settings_ap.disable_player_navigation = "on"), r.navClass = new S(r), "top" === l.design_menu_position && a.before(r.navClass.get_structZoomsoundsNav()), "bottom" === l.design_menu_position && a.after(r.navClass.get_structZoomsoundsNav()), l.settings_php_handler || l.settings_ap.settings_php_handler && (l.settings_php_handler = l.settings_ap.settings_php_handler), d.attr("id"), _ = d.attr("id"), i = d.find(".slider-clipper").eq(0), s = d.find(".nav-main").eq(0), n = d.find(".nav-clipper").eq(0), d.children(".extra-html").length && d.append(d.children(".extra-html")), "mode-showall" === l.settings_mode && i.addClass("layout-" + l.mode_showall_layout), r.navClass.set_elements(s, n, d), q(), r.navClass.init_ready(), A(), !1 === e.can_history_api() && (l.settings_enable_linking = "off"), o(window).on("resize", U), U(), setTimeout(U, 1e3), d.get(0).api_skin_redlights_give_controls_right_to_all = function() {
                            v = !0
                        }, e.get_query_arg(window.location.href, "audiogallery_startitem_" + _) && (m = Number(e.get_query_arg(window.location.href, "audiogallery_startitem_" + _)), u = m, Number(e.get_query_arg(window.location.href, "audiogallery_startitem_" + _)) && Number(e.get_query_arg(window.location.href, "audiogallery_startitem_" + _)) > 0 && "on" == l.force_autoplay_when_coming_from_share_link && (l.autoplay = "on")), "mode-normal" == l.settings_mode && K(m, {
                            called_from: "init"
                        }), "mode-showall" === l.settings_mode && (i.children().each((function() {
                            const e = o(this);
                            var a = e.parent().children(".audioplayer,.audioplayer-tobe").index(e);
                            if (e.hasClass("audioplayer-tobe")) {
                                var t = Object.assign({}, l.settings_ap);
                                t.parentgallery = d, t.call_from = "mode show-all", t.action_audio_play = H, e.audioplayer(t), (a = String(a + 1)).length < 2 && (a = "0" + a), "one-per-row" === l.mode_showall_layout && "off" !== l.settings_mode_showall_show_number && (e.before('<div class="number-wrapper"><span class="the-number">' + a + "</span></div>"), e.after('<div class="clear for-number-wrapper"></div>'))
                            }
                        })), o.fn.isotope && "one-per-row" !== l.mode_showall_layout && (i.find(".audioplayer,.audioplayer-tobe").addClass("isotope-item"), setTimeout((function() {
                            i.prepend('<div class="grid-sizer"></div>'), i.isotope({
                                itemSelector: ".isotope-item",
                                layoutMode: "fitRows",
                                percentPosition: !0,
                                masonry: {
                                    columnWidth: ".grid-sizer"
                                }
                            }), i.addClass("isotoped"), setTimeout((function() {
                                i.isotope("layout")
                            }), 900)
                        }), t.OF.PLAYLIST_TRANSITION_DURATION), i.append('<div class="clear"></div>')), v && i.children(".audioplayer").each((function() {
                            var e = o(this);
                            !1 === e.find(".ap-controls-right").eq(0).prev().hasClass("controls-right") && e.find(".ap-controls-right").eq(0).before('<div class="controls-right"> </div>')
                        }))), d.find(".download-after-rate").on("click", R), d.get(0).api_regenerate_sync_players_with_this_playlist = M, d.get(0).api_goto_next = Z, d.get(0).api_goto_prev = J, d.get(0).api_goto_item = K, d.get(0).api_gallery_handle_end = D, d.get(0).api_toggle_menu_state = F, d.get(0).api_handleResize = U, d.get(0).api_player_commentSubmitted = B, d.get(0).api_player_rateSubmitted = Q, d.get(0).api_reinit = q, d.get(0).api_play_curr_media = E, d.get(0).api_get_nr_children = N, d.get(0).api_init_player_from_gallery = X, d.get(0).api_filter = O, d.get(0).api_destroy = $, d.get(0).SelfPlaylist = r, setInterval(W, 1e3), setTimeout(j, 700), "on" == l.enable_easing && L(), d.addClass("dzsag-inited"), d.addClass("transition-" + l.playlistTransition), d.addClass("playlist-transition-" + l.playlistTransition)
                    }()
            }
        }
        window.dzsap_init_allGalleries = function(e) {
            const a = document.querySelectorAll(".dzsap-feed--dzsap-configs");
            if (a && a.length) try {
                window.dzsap_apconfigs = JSON.parse(a[a.length - 1].innerHTML)
            } catch (e) {
                console.log(e)
            }
            e(".audiogallery.auto-init").each((function() {
                const a = e(this);
                a.hasClass("dzsag-inited") || window.dzsag_init && dzsag_init(a)
            }))
        }, window.dzsap_moving_playlist_item = !1, window.dzsap_playlist_con = null, window.dzsap_playlist_item_moving = null, window.dzsap_playlist_item_target = null;
        class M {
            constructor(e) {
                this.dzsapClass = e, this.$playlistInner = null
            }
            init() {
                const e = this.dzsapClass,
                    a = this;

                function t(e) {
                    var t = jQuery(this);
                    if ("click" === e.type && t.hasClass("playlist-menu-item")) {
                        var i = t.parent().children().index(t);
                        a.playlistInner_gotoItem(i, {
                            call_from: "handle_mouse"
                        })
                    }
                    if ("mousedown" === e.type) {
                        const e = t.parent();
                        e.parent().append(e.clone().addClass("cloner"));
                        const a = e.parent().children(".cloner").eq(0);
                        dzsap_playlist_con = e.parent(), dzsap_moving_playlist_item = !0, dzsap_playlist_item_target = e, dzsap_playlist_item_moving = a, e.addClass("target-playlist-item")
                    }
                }
                e._apControlsRight.append('<div class="btn-footer-playlist for-hover dzstooltip-con player-but"> <div class="tooltip-indicator tooltip-indicator--btn-footer-playlist"><div class="the-icon-bg"></div> ' + x.zq + '    </div><div class="dzstooltip playlist-tooltip style-default color-light-dark arrow-bottom talign-end transition-scaleup active2"><div class="dzstooltip--inner"> </div></div></div>'), a.$playlistInner = e.cthis.find(".playlist-tooltip"), e.cthis.on("mousedown", ".the-sort-handle", t), e.cthis.on("click", ".playlist-menu-item", t), setTimeout((function() {
                    a.playlistInner_setupStructureInPlayer()
                }), 100)
            }
            playlistInner_setupStructureInPlayer(e) {
                var a = jQuery,
                    t = this,
                    i = (this.dzsapClass, {
                        call_from: "default"
                    });
                if (e && (i = a.extend(i, e)), t.$playlistInner) {
                    window.dzsap_syncList_players.length ? t.$playlistInner.parent().removeClass("is-empty") : t.$playlistInner.parent().addClass("is-empty"), t.$playlistInner.find(".dzstooltip--inner").html("");
                    var s = "";
                    for (var n in window.dzsap_syncList_players) {
                        var o = window.dzsap_syncList_players[n];
                        o.hasClass("number-wrapper") || o.hasClass("for-number-wrapper") || (s += '<div class="playlist-menu-item"', a.each(o.get(0).attributes, (function() {
                            this.specified && this.name && "id" !== this.name && "style" !== this.name && (s += " " + this.name + "='" + this.value + "'")
                        })), s += ">", o.attr("data-thumb") && (s += '<div class="pi-thumb-con">', s += '<div class="pi-thumb divimage" style="background-image: url(' + o.attr("data-thumb") + ')">', s += "</div>", s += "</div>"), s += '<div class="pi-meta-con">', s += '<div class="pi-the-artist">', s += o.find(".the-artist").eq(0).text(), s += "</div>", s += '<div class="pi-the-name">', s += o.find(".the-name").eq(0).text(), s += "</div>", s += "</div>", s += '<div class="the-sort-handle">', s += "&#x2195;", s += "</div>", s += "</div>")
                    }
                    t.$playlistInner.find(".dzstooltip--inner").append(s), a(document).on("mousemove.dzsap_playlist_item", (function(e) {
                        if (window.dzsap_moving_playlist_item) {
                            var t = e.clientY;
                            t -= dzsap_playlist_con.offset().top, dzsap_playlist_item_moving.css("top", t - 20), dzsap_playlist_item_target.parent().children(':not(".target-playlist-item"):not(".cloner")').each((function() {
                                var e = a(this),
                                    i = e.offset().top - dzsap_playlist_con.offset().top;
                                t > i && e.after(dzsap_playlist_item_target)
                            })), t < 50 && dzsap_playlist_item_target.parent().prepend(dzsap_playlist_item_target)
                        }
                    })), a(document).on("mouseup.dzsap_playlist_item", (function(e) {
                        window.dzsap_moving_playlist_item && (window.dzsap_moving_playlist_item = !1, dzsap_playlist_item_moving.parent().children(".cloner").remove(), dzsap_playlist_item_target.removeClass("target-playlist-item"), dzsap_playlist_item_moving.remove(), dzsap_playlist_item_moving = null, dzsap_playlist_item_target = null)
                    }))
                } else console.error("no tooltip .. why, should be here?")
            }
            player_determineSyncPlayersIndex(e, a) {
                if (this.$playlistInner) {
                    const t = this.$playlistInner.children(".dzstooltip--inner").eq(0);
                    t.children().removeClass("current-playlist-item"), t.children().each((function() {
                        var t = jQuery(this);
                        t.attr("data-playerid") === a.attr("data-playerid") && (t.addClass("current-playlist-item"), e.playlist_inner_currNr = t.parent().children().index(t))
                    }))
                }
            }
            playlistInner_gotoItem(e, a) {
                var t = jQuery,
                    i = this.dzsapClass,
                    s = {
                        call_from: "default"
                    };
                if (a && (s = t.extend(s, a)), this.$playlistInner) {
                    const a = this.$playlistInner.find(".dzstooltip--inner").children().eq(e).attr("data-playerid"),
                        s = t('.audioplayer[data-playerid="' + a + '"],.audioplayer-tobe[data-playerid="' + a + '"]');
                    if (a && s.length && s.eq(0).get(0) && s.eq(0).get(0).api_play_media) t('.audioplayer[data-playerid="' + a + '"]').eq(0).get(0).api_play_media({
                        called_from: "api_sync_players_prev"
                    });
                    else if (s.parent().parent().parent().hasClass("audiogallery")) s.parent().parent().parent().get(0).api_goto_item(e);
                    else {
                        const e = t(".dzsap_footer");
                        e.length && e.get(0).api_change_media && e.get(0).api_change_media(s)
                    }
                    i.playlist_inner_currNr = e
                }
            }
        }

        function I(e) {
            var a = this;
            if (0 === a.cthis.find(".meta-artist").length && (a.cthis.find(".feed-artist-name").length || a.cthis.find(".feed-song-name").length)) {
                let e = '<span class="meta-artist player-artistAndSong">';
                a.cthis.find(".feed-artist-name").length && (e += '<span class="the-artist">' + a.cthis.find(".feed-artist-name").eq(0).html() + "</span>"), a.cthis.find(".feed-song-name").length && (e += '<span class="the-name player-meta--songname">' + a.cthis.find(".feed-song-name").eq(0).html() + "</span>"), e += "</span>", a.cthis.append(e)
            }
            if ("fake" === a.cthis.attr("data-type") && 0 === a.cthis.find(".meta-artist").length && a.cthis.append('<span class="meta-artist"><span class="the-artist"></span><span class="the-name"></span></span>'), !a._metaArtistCon || "reconstruct" === e.call_from) {
                a.cthis.children(".meta-artist").length > 0 && (a.cthis.hasClass("skin-wave-mode-alternate") ? (a._conControls.children().last().hasClass("clear") && a._conControls.children().last().remove(), a._conControls.append(a.cthis.children(".meta-artist"))) : a._audioplayerInner && a._audioplayerInner.append(a.cthis.children(".meta-artist"))), a._audioplayerInner.find(".meta-artist").eq(0).wrap('<div class="meta-artist-con"></div>'), a._metaArtistCon = a._audioplayerInner.find(".meta-artist-con").eq(0);
                const e = a.initOptions;
                a._apControls.find(".ap-controls-right").length > 0 && (a._apControlsRight = a.cthis.find(".ap-controls-right").eq(0)), a._apControls.find(".ap-controls-left").length > 0 && (a._apControlsLeft = a._apControls.find(".ap-controls-left").eq(0)), "skin-pro" === e.design_skin && (a._apControlsRight = a.cthis.find(".con-controls--right").eq(0)), "skin-wave" === e.design_skin && (a.cthis.find(".dzsap-repeat-button").length ? a.cthis.find(".dzsap-repeat-button").after(a._metaArtistCon) : a.cthis.find(".dzsap-loop-button").length && !1 === a.cthis.find(".dzsap-loop-button").eq(0).parent().hasClass("feed-dzsap-for-extra-html-right") ? a.cthis.find(".dzsap-loop-button").after(a._metaArtistCon) : a._conPlayPauseCon.after(a._metaArtistCon), "alternate" === a.skinwave_mode && a._apControlsRight.before(a._metaArtistCon)), "skin-aria" === e.design_skin && a._apControlsRight.prepend(a._metaArtistCon), "skin-redlights" !== e.design_skin && "skin-steel" !== e.design_skin || a._apControlsRight.prepend(a._metaArtistCon), "skin-silver" === e.design_skin && a._apControlsRight.append(a._metaArtistCon), "skin-default" === e.design_skin && a._apControlsRight.before(a._metaArtistCon)
            }
        }
        const A = function(a, t) {
            var i = jQuery,
                s = a.initOptions,
                n = {
                    setup_inner_player: !0,
                    setup_media: !0,
                    setup_otherstructure: !0,
                    call_from: "default"
                };
            t && (n = i.extend(n, t)), "reconstruct" === n.call_from && (a._metaArtistCon, a._metaArtistCon = null, a.cthis.hasClass("skin-wave") && (s.design_skin = "skin-wave"), a.cthis.hasClass("skin-silver") && (s.design_skin = "skin-silver"));
            var o = '<div class="ap-controls';
            if ("skin-default" === s.design_skin && (o += " dzsap-color_inverse_ui_fill"), o += '"></div>', n.setup_inner_player && (a.cthis.appendOnce('<div class="audioplayer-inner"></div>'), a._audioplayerInner = a.cthis.children(".audioplayer-inner")), !n.setup_otherstructure) return !1;
            a.cthis.attr("data-wrapper-image") && function(e) {
                var a = new Image;
                !1 === e.cthis.hasClass("zoomsounds-no-wrapper") && (a.onload = function() {
                    e.cthis.css("background-image", "url(" + this.src + ")"), setTimeout((function() {
                        e.cthis.find(".zoomsounds-bg").addClass("loaded"), e.cthis.hasClass("zoomsounds-wrapper-bg-bellow") && e.cthis.css("padding-top", 200)
                    }), 100)
                }, a.src = e.cthis.attr("data-wrapper-image"))
            }(a);
            var r, l = '<div class="scrubbar">',
                d = "";
            l += '<div class="scrub-bg"></div><div class="scrub-buffer"></div>', l += '<div class="scrub-prog', "wave" !== s.scrubbar_type && (l += " dzsap-color_brand_bg"), l += '"></div><div class="scrubBox"></div><div class="scrubBox-prog"></div><div class="scrubBox-hover"></div>', r = '<div class="total-time">00:00</div><div class="curr-time">00:00</div>', a.sample_perc_start && (l += '<div class="sample-block-start" style="width: ' + 100 * a.sample_perc_start + '%"></div>'), a.sample_perc_end && (l += '<div class="sample-block-end" style="left: ' + 100 * a.sample_perc_end + "%; width: " + (100 - 100 * a.sample_perc_end) + '%"></div>'), l += "</div>", s.controls_external_scrubbar && (l = "");
            var _ = "";
            _ += function(a) {
                const t = a.initOptions;
                let i = "";
                return t.settings_extrahtml_before_play_pause && (i += t.settings_extrahtml_before_play_pause), i += '<div class="con-playpause-con">', i = N(a, ".feed-dzsap-before-playpause", "") + i, i += '<div class="con-playpause', "on" === a.keyboard_controls.show_tooltips && (i += " dzstooltip-con"), i += '">', "on" === a.keyboard_controls.show_tooltips && (i += e.dzsap_generate_keyboard_tooltip(a.keyboard_controls, "pause_play")), i += '<div class="playbtn player-but" aria-controls="' + a.uniqueId + '-audio"><div class="the-icon-bg"></div><div class="dzsap-play-icon">', i += x.Z1, i += `</div><div class="media-load--preloader"><img alt="preloader" class="" src="${window.dzsap_base_url}../img/view-preloader.svg"/></div>`, i += "</div>", i += '<div class="pausebtn player-but"', i += '><div class="the-icon-bg"></div><div class="pause-icon">', i += x.IM, i += "</div>", i += "</div>", i += "", i += "</div>", a.cthis.find(".feed-dzsap-after-playpause").length && (i += N(a, ".feed-dzsap-after-playpause", "")), i += "</div>", i
            }(a), d += '<div class="con-controls"><div class="the-bg"></div>' + _, a.extraHtmlAreas.controlsLeft && (d += a.extraHtmlAreas.controlsLeft), "skin-pro" === s.design_skin && (d += '<div class="con-controls--right">', d += "</div>");
            var c = '<div class="controls-volume"><div class="volumeicon"></div><div class="volume_static"></div><div class="volume_active"></div><div class="volume_cut"></div></div>';
            if ("on" === s.disable_volume && (c = ""), "skin-default" !== s.design_skin && "skin-wave" !== s.design_skin || (d += '<div class="ap-controls-right">', "on" !== s.disable_volume && (d += '<div class="controls-volume"><div class="volumeicon"></div><div class="volume_static"></div><div class="volume_active"></div><div class="volume_cut"></div></div>'), d += "</div>"), d += "</div>", "skin-wave" === s.design_skin && "small" === a.skinwave_mode) d = '<div class="the-bg"></div><div class="ap-controls-left">' + _ + "</div>" + l + '<div class="ap-controls-right">' + c + '<div class="extrahtml-in-float-right for-skin-wave-small">' + a.extraHtmlAreas.controlsRight + "</div></div>";
            else if ("skin-aria" === s.design_skin || "skin-silver" === s.design_skin || "skin-redlights" === s.design_skin || "skin-steel" === s.design_skin) {
                let t = x.Z1,
                    i = x.IM;
                "skin-steel" === s.design_skin && (t = "", i = ""), d = '<div class="the-bg"></div><div class="ap-controls-left">', "skin-silver" === s.design_skin ? d += _ : (d += '<div class="con-playpause', "on" === a.keyboard_controls.show_tooltips && (d += " dzstooltip-con"), d += '">', "on" === a.keyboard_controls.show_tooltips && (d += e.dzsap_generate_keyboard_tooltip(a.keyboard_controls, "pause_play")), d += '<div class="playbtn player-but playbtn-not-skin-silver"><div class="dzsap-play-icon">' + t + '</div></div><div class="pausebtn player-but" ', d += '><div class="pause-icon">' + i + "</div></div></div>"), d += "</div>", a.extraHtmlAreas.controlsRight && (d += '<div class="controls-right">' + a.extraHtmlAreas.controlsRight + "</div>", "skin-redlights" === s.design_skin && s.parentgallery && s.parentgallery.get(0).api_skin_redlights_give_controls_right_to_all && s.parentgallery.get(0).api_skin_redlights_give_controls_right_to_all()), d += '<div class="ap-controls-right">', "skin-silver" === s.design_skin ? (d += '<div class="controls-volume controls-volume-vertical"><div class="volumeicon"></div><div class="volume-holder"><div class="volume_static"></div><div class="volume_active"></div><div class="volume_cut"></div></div></div>', d += "</div>" + l) : ("skin-redlights" === s.design_skin && "on" != s.disable_volume && (d += '<div class="controls-volume"><div class="volumeicon"></div><div class="volume_static"></div><div class="volume_active"></div><div class="volume_cut"></div></div>'), d += l, "on" != s.disable_timer && (d += '<div class="total-time">00:00</div>')), "skin-silver" === s.design_skin || (d += "</div>")
            }
            if (n.setup_media && (a._audioplayerInner.append('<div class="the-media"></div>'), a.$theMedia = a._audioplayerInner.children(".the-media").eq(0)), "skin-customcontrols" !== s.design_skin && a._audioplayerInner.append(o), a._apControls = a._audioplayerInner.children(".ap-controls").eq(0), a._apControls.append(d), a.cthis.hasClass("skin-wave-mode-alternate") ? 0 === a.cthis.find(".scrubbar").length && a._apControls.append(l) : 0 === a.cthis.find(".scrubbar").length && a._apControls.prepend(l), a._apControlsRight = null, a._apControls.find(".ap-controls-right").length > 0 && (a._apControlsRight = a.cthis.find(".ap-controls-right")), a._apControls.find(".ap-controls-left").length > 0 && (a._apControlsLeft = a._apControls.find(".ap-controls-left").eq(0)), "skin-pro" === s.design_skin && (a._apControlsRight = a.cthis.find(".con-controls--right").eq(0)), N(a, ".feed-dzsap--custom-controls", null, a._audioplayerInner), N(a, ".feed-dzsap-after-con-controls", null, a._apControls), s.controls_external_scrubbar ? a._scrubbar = i(s.controls_external_scrubbar).children(".scrubbar").eq(0) : a._scrubbar = a._apControls.find(".scrubbar").eq(0), a.$$scrubbProg = a._scrubbar.find(".scrub-prog").get(0), a.$conControls = a._apControls.children(".con-controls"), a.$conPlayPause = a.cthis.find(".con-playpause").eq(0), a._conPlayPauseCon = a.cthis.find(".con-playpause-con").eq(0), a.$controlsVolume = a.cthis.find(".controls-volume").eq(0), I.bind(a)(n), a._scrubbar.addClass("scrubbar-inited"), "wave" === s.scrubbar_type && "on" != s.disable_timer && "" === s.controls_external_scrubbar && a._scrubbar.append(r), "skin-wave" != s.design_skin && "on" != s.disable_timer && a._apControls.append(r), "on" != s.disable_timer && (a.$currTime = a.cthis.find(".curr-time").eq(0), a.$totalTime = a.cthis.find(".total-time").eq(0), "skin-steel" === s.design_skin && 0 === a.$currTime.length && (a.$totalTime.before('<div class="curr-time">00:00</div> <span class="separator-slash">/</span> '), a.$currTime = a.$totalTime.prev().prev())), Number(s.sample_time_total) > 0 && (a.timeTotal = Number(s.sample_time_total), a.$totalTime && a.$totalTime.html(e.formatTime(a.time_total_for_visual))), a.setupStructure_thumbnailCon(), "skin-wave" === s.design_skin && s.parentgallery && void 0 !== s.parentgallery && "on" === s.design_menu_show_player_state_button && ("skin-wave" === s.design_skin ? a._apControlsRight && a._apControlsRight.appendOnce('<div class="btn-menu-state player-but"> <div class="the-icon-bg"></div> ' + x._r + "    </div></div>") : a._audioplayerInner.appendOnce('<div class="btn-menu-state"></div>')), "on" === s.skinwave_place_metaartist_after_volume && a.$controlsVolume.before(a._metaArtistCon), "on" === s.skinwave_place_thumb_after_volume && a.$controlsVolume.before(a.cthis.find(".the-thumb-con")), "skin-wave" === s.design_skin && (a.setup_structure_scrub(), "on" === s.skinwave_timer_static && (a.$currTime && a.$currTime.addClass("static"), a.$totalTime && a.$totalTime.addClass("static")), a._apControls.css({}), "canvas" === s.skinwave_wave_mode && setTimeout((function() {
                    a.cthis.addClass("scrubbar-loaded"), a._scrubbar.parent().addClass("scrubbar-loaded")
                }), 700)), a.check_multisharer(), a.cthis.hasClass("skin-minimal") && (a.cthis.find(".the-bg").before('<div class="skin-minimal-bg skin-minimal--outer-bg"></div><div class="skin-minimal-bg skin-minimal--inner-bg-under dzsap-color_brand_bg"></div><div class="skin-minimal-bg skin-minimal--inner-bg"></div><div class="skin-minimal-bg skin-minimal--inner-inner-bg dzsap-color_brand_bg"></div>'), a.cthis.find(".the-bg").append('<canvas width="100" height="100" class="playbtn-canvas"/>'), a.skin_minimal_canvasplay = a.cthis.find(".playbtn-canvas").eq(0).get(0), a.$conPlayPause && (a.$conPlayPause.children(".playbtn").append(x.Z1), a.$conPlayPause.children(".pausebtn").append(x.IM)), setTimeout((function() {
                    a.isCanvasFirstDrawn = !1
                }), 200)), a.cthis.hasClass("skin-minion") && a.cthis.find(".menu-description").length > 0 && (a.$conPlayPause.addClass("with-tooltip"), a.$conPlayPause.prepend('<span class="dzstooltip" style="left:-7px;">' + a.cthis.find(".menu-description").html() + "</span>"), a.$conPlayPause.children("span").eq(0).css("width", a.$conPlayPause.children("span").eq(0).textWidth() + 10)), "default" === s.player_navigation && (s.parentgallery && (s.player_navigation = "on"), s.parentgallery && s.parentgallery.hasClass("mode-showall") && (s.player_navigation = "off")), "on" === s.disable_player_navigation && (s.player_navigation = "off"), "default" === s.player_navigation && (s.player_navigation = "off"), "on" === s.player_navigation) {
                var u = '<div class="prev-btn player-but"><div class="the-icon-bg"></div>' + x.mH + " </div>",
                    p = '<div class="next-btn player-but"><div class="the-icon-bg"></div>' + x.Ap + "  </div>",
                    h = u + p;
                "skin-wave" === s.design_skin && "small" === a.skinwave_mode || "skin-aria" === s.design_skin ? (a.$conPlayPause.before(u), a.$conPlayPause.after(p)) : "skin-wave" === s.design_skin ? "on" === s.player_navigation && (a._conPlayPauseCon.prependOnce(u, ".prev-btn"), a._conPlayPauseCon.appendOnce(p, ".next-btn")) : "skin-steel" === s.design_skin ? (a._apControlsLeft.prependOnce(u, ".prev-btn"), a._apControlsLeft.children(".the-thumb-con").length > 0 ? a._apControlsLeft.children(".the-thumb-con").eq(0).length > 0 && !1 === a._apControlsLeft.children(".the-thumb-con").eq(0).prev().hasClass("next-btn") && a._apControlsLeft.children(".the-thumb-con").eq(0).before(p) : a._apControlsLeft.appendOnce(p, ".next-btn")) : a._audioplayerInner.appendOnce(h, ".prev-btn")
            }
            a.cthis.hasClass("skinvariation-wave-bigtitles") && a.cthis.find(".controls-volume").length && 0 === a._metaArtistCon.find(".controls-volume").length && (a._metaArtistCon.append("<br>"), a._metaArtistCon.append(a.cthis.find(".controls-volume"))), a.cthis.hasClass("skinvariation-wave-righter") && (a._apControls.appendOnce('<div class="playbuttons-con"></div>'), a.cthis.find(".playbuttons-con").eq(0).append(a.cthis.find(".con-playpause-con"))), "skin-pro" === s.design_skin && (a._apControlsRight.append(a.$currTime), a._apControlsRight.append(a.$totalTime)), "skin-silver" === s.design_skin && (a._scrubbar.after(a._apControlsRight), a._apControlsLeft.prepend(a._metaArtistCon), a._apControlsLeft.append(a.$currTime), a._apControlsRight.append(a.$totalTime)), "skin-redlights" === s.design_skin && (a._apControlsRight.append('<div class="ap-controls-right--top"></div>'), a._apControlsRight.append('<div class="ap-controls-right--bottom"></div>'), a._apControlsRight.find(".ap-controls-right--top").append(a._apControlsRight.find(".meta-artist-con")), a._apControlsRight.find(".ap-controls-right--top").append(a._apControlsRight.find(".controls-volume")), a._apControlsRight.find(".ap-controls-right--bottom").append(a._apControlsRight.find(".scrubbar"))), "reconstruct" === n.call_from && a.cthis.hasClass("skin-silver") && a._apControlsLeft.append(a.cthis.find(".con-playpause")), a.isMultiSharer && a.check_multisharer(), a.setup_structure_sanitizers(),
                function(a, t) {
                    "skin-wave" === t.design_skin && "bigwavo" === a.skinwave_mode && (a._audioplayerInner.after(a._scrubbar), a.cthis.find(".feed-description") && (a.$conControls.after(a.cthis.find(".feed-description").eq(0)), a.$conControls.next().removeClass("feed-description").addClass("song-desc"))), a.radio_isGoingToUpdateSongName = e.player_radio_isNameUpdatable(a, a.radio_isGoingToUpdateSongName, ".the-songname"), a.radio_isGoingToUpdateArtistName = e.player_radio_isNameUpdatable(a, a.radio_isGoingToUpdateArtistName, ".the-artist"), "on" === t.disable_scrub && a.cthis.addClass("disable-scrubbar");
                    const i = `<div class="btn-embed-code-con dzstooltip-con "><div class="btn-embed-code player-but "> <div class="the-icon-bg"></div>${x.l2}</div><span class="dzstooltip   transition-slidein arrow-bottom talign-end style-rounded color-dark-light " style="width: 350px; "><span class="dzstooltip--inner"><span class="embed-code--text"></span></span></span></div>`;
                    "" !== a.feedEmbedCode && function(e, a, t, i) {
                        var s = e.initOptions;
                        "skin-wave" === s.design_skin ? "on" === s.enable_embed_button && e._apControlsRight && (e._apControlsRight.appendOnce(i), e.$embedButton = e._apControlsRight.find(".btn-embed-code-con").eq(0), e.$embedButton.find(".btn-embed-code").addClass("player-but")) : "on" === s.enable_embed_button && (e._audioplayerInner.appendOnce(i), e.$embedButton = e._audioplayerInner.find(".btn-embed-code-con").eq(0)), e.$embedButton && e.$embedButton.find(".embed-code--text").html(e.feedEmbedCode), e.cthis.on("click", ".btn-embed-code-con, .btn-embed", (function() {
                            var e = a(this);
                            t.select_all(e.find(".dzstooltip").get(0)), document.execCommand("copy")
                        })), e.cthis.on("click", ".copy-embed-code-btn", (function() {
                            var e = a(this);
                            t.select_all(e.parent().parent().find(".dzstooltip--inner > span").get(0)), document.execCommand("copy"), setTimeout((function() {
                                t.select_all(e.get(0))
                            }), 100)
                        }))
                    }(a, jQuery, e, i), "on" === t.footer_btn_playlist && 0 === a._apControlsRight.find(".btn-footer-playlist").length && (a.classFunctionalityInnerPlaylist = new M(a), a.classFunctionalityInnerPlaylist.init()), setTimeout((function() {
                        a.cthis.find(".extra-html").length && function(e) {
                            e.initOptions, 1 === e.increment_views && (m.bind(e)(), e.increment_views = 2), 0 === e.index_extrahtml_toloads && e.cthis.find(".extra-html").addClass("active"), setTimeout((function() {
                                e.cthis.find(".extra-html").addClass("active"), 0 === e.cthis.find(".float-left").length ? e.cthis.find(".extra-html").append(e.cthis.find(".extra-html-extra")) : e.cthis.find(".extra-html .float-left").append(e.cthis.find(".extra-html-extra")), e.cthis.find(".extra-html-extra").children().eq(0), e.cthis.find(".extra-html-extra").children().unwrap()
                            }), 2e3)
                        }(a)
                    }), 100), setTimeout((function() {
                        a.cthis.html().indexOf("dzsap-multisharer-but") > -1 && (a.isMultiSharer = !0, a.check_multisharer())
                    }), 1002), a.cthis.find(".afterplayer").length > 0 && a.cthis.append(a.cthis.find(".afterplayer"))
                }(a, s), a.cthis.addClass("structure-setuped"), a.extraHtmlAreas.afterArtist && a._metaArtistCon.find(".the-artist").append(a.extraHtmlAreas.afterArtist), "" !== a.extraHtmlAreas.bottom && a.cthis.append('<div class="extra-html">' + a.extraHtmlAreas.bottom + "</div>");
            var f = "";
            String(a.extraHtmlAreas.controlsRight).indexOf("dzsap-multisharer-but") > -1 && (a.isMultiSharer = !0), "skin-wave" === s.design_skin && "small" === a.skinwave_mode || (f += '<div class="extrahtml-in-float-right from-setup_structure from-js-setup_structure">' + a.extraHtmlAreas.controlsRight + "</div>"), f && ("skin-wave" !== s.design_skin && "skin-default" !== s.design_skin || a.cthis.find(".ap-controls-right").eq(0).append(f), "skin-pro" === s.design_skin && a.cthis.find(".con-controls--right").eq(0).append(f))
        };

        function N(e, a, t = null, i = null) {
            if (e.cthis.find(a).length) {
                if (null !== t && (t += e.cthis.find(a).eq(0).html(), console.log("feedSelector - ", a, e.cthis.find(a).eq(0).html())), null !== i) return i.append(e.cthis.find(a).eq(0).html()), i;
                if (e.cthis.find(a).remove(), null !== t) return t
            }
            return "string" == typeof t ? t : null
        }
        const q = {
                design_skin: "skin-default",
                call_from: "default",
                autoplay_on_scrub_click: "off",
                cueMedia: "on",
                preload_method: "metadata",
                loop: "off",
                pause_method: "pause",
                settings_extrahtml: "",
                settings_extrahtml_before_play_pause: "",
                settings_extrahtml_after_play_pause: "",
                settings_trigger_resize: "0",
                design_thumbh: "default",
                extra_classes_player: "",
                disable_volume: "default",
                disable_scrub: "default",
                disable_timer: "default",
                disable_player_navigation: "off",
                scrub_show_scrub_time: "on",
                player_navigation: "default",
                type: "audio",
                enable_embed_button: "off",
                embed_code: "",
                skinwave_dynamicwaves: "off",
                soundcloud_apikey: "",
                skinwave_enableSpectrum: "off",
                skinwave_place_thumb_after_volume: "off",
                skinwave_place_metaartist_after_volume: "off",
                php_retriever: "soundcloudretriever.php",
                skinwave_mode: "normal",
                skinwave_wave_mode: "canvas",
                skinwave_wave_mode_canvas_mode: "normal",
                skinwave_wave_mode_canvas_normalize: "on",
                skinwave_wave_mode_canvas_waves_number: "3",
                skinwave_wave_mode_canvas_waves_padding: "1",
                skinwave_wave_mode_canvas_reflection_size: "0.25",
                wavesurfer_pcm_length: "200",
                pcm_data_try_to_generate: "on",
                pcm_data_try_to_generate_wait_for_real_pcm: "on",
                pcm_notice: "off",
                notice_no_media: "on",
                sampleTimesMode: "realPrevivew",
                mobile_delete: "off",
                footer_btn_playlist: "off",
                mobile_disable_fakeplayer: "off",
                skinwave_comments_displayontime: "on",
                skinwave_comments_allow_post_if_not_logged_in: "on",
                skinwave_comments_links_to: "",
                skinwave_comments_enable: "off",
                skinwave_comments_mode_outer_selector: "",
                skinwave_comments_playerid: "",
                skinwave_timer_static: "off",
                default_volume: "default",
                volume_from_gallery: "",
                design_menu_show_player_state_button: "off",
                playfrom: "off",
                design_animateplaypause: "default",
                embedded: "off",
                embedded_iframe_id: "",
                google_analytics_send_play_event: "off",
                fakeplayer: null,
                failsafe_repair_media_element: "",
                action_audio_play: null,
                action_audio_play2: null,
                action_audio_pause: null,
                action_audio_end: null,
                action_audio_comment: null,
                action_received_time_total: null,
                action_audio_change_media: null,
                action_audio_loaded_metadata: null,
                action_video_contor_60secs: null,
                type_audio_stop_buffer_on_unfocus: "off",
                settings_exclude_from_list: "off",
                design_wave_color_bg: "ffffff",
                design_wave_color_progress: "f9004d",
                skin_minimal_button_size: "100",
                gallery_gapless_play: "off",
                preview_on_hover: "off",
                controls_external_scrubbar: "",
                parentgallery: null,
                scrubbar_type: "auto",
                scrubbar_type_wave__has_reveal_animation: "off",
                settings_php_handler: ""
            },
            j = () => {
                window.dzsap_generate_list_for_sync_players = function(e) {
                    var a = jQuery,
                        t = {
                            force_regenerate: !1
                        };
                    e && (t = a.extend(t, e)), window.dzsap_syncList_players = [], ("on" === window.dzsap_settings.syncPlayers_buildList || t.force_regenerate) && jQuery(".audioplayer,.audioplayer-tobe").each((function() {
                        var e = jQuery(this);
                        "on" !== e.attr("data-do-not-include-in-list") && ("fake" !== e.attr("data-type") || e.attr("data-fakeplayer")) && window.dzsap_syncList_players.push(e)
                    }))
                }, jQuery(document).off("click.dzsap_global"), jQuery(document).on("click.dzsap_global", ".dzsap-btn-info", (function() {
                    var e = jQuery(this);
                    e.hasClass("dzsap-btn-info") && e.find(".dzstooltip").toggleClass("active")
                })), jQuery(document).on("mouseover.dzsap_global", ".dzsap-btn-info", (function() {
                    var e = jQuery(this);
                    e.hasClass("dzsap-btn-info") && (window.innerWidth < 500 ? e.offset().left < window.innerWidth / 2 && e.find(".dzstooltip").removeClass("talign-end").addClass("talign-start") : e.find(".dzstooltip").addClass("talign-end").removeClass("talign-start"))
                }))
            };
        var R = __webpack_require__(603);

        function E(a) {
            let t = a.cthis.attr("data-source");
            "shoutcast" === a.audioTypeSelfHosted_streamType && (t = (0, e.add_query_arg)(a.urlToAjaxHandler, "action", "dzsap_shoutcast_get_streamtitle"), t = (0, e.add_query_arg)(t, "source", a.data_source)), jQuery.ajax({
                type: "GET",
                url: t,
                crossDomain: !0,
                success: function(e) {
                    e.documentElement && e.documentElement.innerHTML && (e = e.documentElement.innerHTML);
                    let t = "",
                        i = "",
                        s = "",
                        n = "";
                    if ("icecast" === a.audioTypeSelfHosted_streamType) {
                        var o = null;
                        (o = /<location>(.*?)<\/location>/g.exec(e)) && o[1] !== a.data_source && (a.data_source = o[1], a.setup_media({
                            called_from: "icecast setup"
                        }))
                    }
                    a.radio_isGoingToUpdateSongName && ("icecast" === a.audioTypeSelfHosted_streamType && (t = /<title>(.*?)<\/title>/g, (o = t.exec(e)) && (s = o[1])), "shoutcast" === a.audioTypeSelfHosted_streamType && (s = e)), a.radio_isGoingToUpdateArtistName && ("icecast" === a.audioTypeSelfHosted_streamType && (i = /<creator>(.*?)<\/creator>/g, (o = i.exec(e)) && (n = o[1])), a.audioTypeSelfHosted_streamType), a.radio_isGoingToUpdateSongName && a._metaArtistCon.find(".the-name").html(s), a.radio_isGoingToUpdateArtistName && a._metaArtistCon.find(".the-artist").html(n)
                },
                error: function(e) {}
            })
        }
        window.dzsap_list = [];
        var H = 20;
        window.loading_multi_sharer = !1, window.dzsap_player_interrupted_by_dzsap = null, window.dzsap_audio_ctx = null, window.dzsap__style = null, window.dzsap_sticktobottom_con = null, window.dzsap_self_options = {}, window.dzsap_generating_pcm = !1, window.dzsap_box_main_con = null, window.dzsap_lasto = null, window.dzsap_syncList_players = [], window.dzsap_syncList_index = 0, window.dzsap_base_url = "", window.dzsap_player_index = 0, window.dzsap_action_play_listeners || (window.dzsap_action_play_listeners = []);
        class L {
            constructor(e, a, t) {
                this.argThis = e, this.argOptions = Object.assign({}, a), this.$ = t, this.cthis = null, this.ajax_view_submitted = "auto", this.increment_views = 0, this.the_player_id = "", this.currIp = "127.0.0.1", this.index_extrahtml_toloads = 0, this.starrating_alreadyrated = -1, this.data_source = "", this.pcmSource = null, this.urlToAjaxHandler = null, this.playFrom = "", this._actualPlayer = null, this._audioplayerInner = null, this._metaArtistCon = null, this._conControls = null, this._conPlayPauseCon = null, this._apControls = null, this._apControlsLeft = null, this._apControlsRight = null, this._commentsHolder = null, this.$mediaNode_ = null, this._scrubbar = null, this._scrubbarbg_canvas = null, this._scrubBgCanvasCtx = null, this._scrubbarprog_canvas = null, this.$feed_fakeButton = null, this._sourcePlayer = null, this.$realVisualPlayer = null, this.$theMedia = null, this.$conPlayPause = null, this.$conControls = null, this.$$scrubbProg = null, this.$controlsVolume = null, this.$currTime = null, this.$parentPlaylist = null, this.$totalTime = null, this.$commentsWritter = null, this.$commentsChildren = null, this.$commentsSelector = null, this.$embedButton = null, this.$reflectionVisualObject = null, this.audioType = "normal", this.audioTypeSelfHosted_streamType = "", this.skinwave_mode = "normal", this.action_audio_comment = null, this.commentPositionPerc = 0, this.spectrum_audioContext = null, this.spectrum_audioContextBufferSource = null, this.spectrum_audioContext_buffer = null, this.spectrum_mediaElementSource = null, this.spectrum_analyser = null, this.spectrum_gainNode = null, this.isMultiSharer = !1, this.hasInitialPcmData = !1, this.lastArray = null, this.last_lastArray = null, this.isPlayerPlaying = !1, this.isPlayerPlayingEased = !1, this.isPlayerPlayingEasedInterval = null, this.actualDataTypeOfMedia = "audio", this.youtube_retryPlayTimeout = 0, this.lastTimeInSeconds = 0, this.isStickyPlayer = !1, this.$stickToBottomContainer = null, this.uniqueId = "", this.identifier_pcm = "", this.isAlreadyHasRealPcm = !1, this.isPcmTryingToGenerate = !1, this.isPlayPromised = !1, this.isCanvasFirstDrawn = !1, this.isPlayerLoaded = !1, this.original_real_mp3 = "", this.skin_minimal_canvasplay = null, this.classFunctionalityInnerPlaylist = null, this.feedEmbedCode = "", this.youtube_currentId = 0, this.youtube_isInited = !1, this.extraHtmlAreas = {
                    bottom: "",
                    afterArtist: "",
                    controlsLeft: "",
                    controlsRight: ""
                }, this.sample_time_start = 0, this.sample_time_end = 0, this.sample_time_total = 0, this.playlist_inner_currNr = 0, this.timeCurrent = 0, this.timeModel = new p(this), this.isSample = !1, this.isSafeToChangeTrack = !1, this.isMediaEnded = !1, this.isSetupedMedia = !1, this.isSentCacheTotalTime = !1, this.isPcmRequiredToGenerate = !1, this.radio_isGoingToUpdateSongName = !1, this.radio_isGoingToUpdateArtistName = !1, this.mediaProtectionStatus = "unprotected", this.classMetaParts = new v(this), this.inter_isEnded = 0, e.SelfInstance = this, this.classInit()
            }
            set_sourcePlayer(e) {
                e ? e.get(0) != this.cthis.get(0) && (this._sourcePlayer = e) : this._sourcePlayer = e
            }
            reinit_beforeChangeMedia() {
                this.hasInitialPcmData = !1, this.isPcmRequiredToGenerate = !1, this.isAlreadyHasRealPcm = !1, this.cthis.attr("data-pcm", "")
            }
            reinit_resetMetrics() {
                this.isPlayerLoaded = !1
            }
            service_checkIfWeShouldUpdateTotalTime() {
                var e;
                (e = this).isSentCacheTotalTime || ((!e.cthis.attr("data-sample_time_total") || e.cthis.attr("data-sample_time_total") && e.timeModel.getActualTotalTime() && e.timeModel.getActualTotalTime() != e.cthis.attr("data-sample_time_total") && !e.cthis.attr("data-sample_time_end")) && window.dzsap_settings && window.dzsap_settings.action_received_time_total && (e.timeModel.refreshTimes(), window.dzsap_functions[window.dzsap_settings.action_received_time_total](e.timeModel.getActualTotalTime(), e.cthis)), e.isSentCacheTotalTime = !0)
            }
            classInit() {
                var d = this.$,
                    _ = this.argOptions,
                    p = d(this.argThis);
                const g = this;
                g.cthis = p, g.initOptions = _;
                var v, w, C = "ap1",
                    P = 0,
                    S = 0,
                    $ = !1,
                    O = !1,
                    M = !1,
                    I = !1,
                    N = !1,
                    q = !1,
                    j = !1,
                    L = 0,
                    F = -1,
                    D = 1,
                    B = 1,
                    Q = 0,
                    V = !1,
                    W = !1,
                    U = !1,
                    G = !1,
                    Y = 0,
                    J = !1,
                    Z = 0,
                    K = 0,
                    X = 100,
                    ee = 100,
                    ae = "",
                    te = 1,
                    ie = null,
                    se = null,
                    ne = null,
                    oe = null;
                let re = !1,
                    le = null;
                var de = 0;

                function _e() {
                    var e = parseFloat(_.skinwave_wave_mode_canvas_reflection_size);
                    e = 1 - e;
                    var a = g._scrubbar.height();
                    "skin-wave" === _.design_skin && ("small" === g.skinwave_mode && (a = 60), g._commentsHolder && (0 === e ? g._commentsHolder.css("top", g._scrubbar.offset().top - p.offset().top + a * e - g._commentsHolder.height()) : (g._commentsHolder.css("top", g._scrubbar.offset().top - g._scrubbar.parent().offset().top + a * e), g.$commentsWritter.css("top", g._scrubbar.offset().top - g._scrubbar.parent().offset().top + a * e))), g.$currTime && g.$currTime.css("top", a * e - g.$currTime.outerHeight()), g.$totalTime && g.$totalTime.css("top", a * e - g.$totalTime.outerHeight())), p.attr("data-reflection-size", e)
                }

                function ce(e, a) {
                    var t = {};
                    a && (t = d.extend(t, a)), g._sourcePlayer && g._sourcePlayer.get(0) && g._sourcePlayer.get(0).api_pause_media_visual && g._sourcePlayer.get(0).api_pause_media_visual({
                        call_from: "change_visual_target"
                    }), g.set_sourcePlayer(e);
                    var i = g._sourcePlayer.get(0);
                    g.isPlayerPlaying && g._sourcePlayer && i && i.api_play_media_visual && i.api_play_media_visual(), i && i.api_draw_curr_time && (i.api_set_timeVisualCurrent(g.timeCurrent), i.api_get_times({
                        call_from: " change visual target .. in api "
                    }), i.api_check_time({
                        fire_only_once: !0
                    }), i.api_draw_curr_time(), i.api_draw_scrub_prog()), setTimeout((function() {
                        i && i.api_draw_curr_time && (i.api_get_times(), i.api_check_time({
                            fire_only_once: !0
                        }), i.api_draw_curr_time(), i.api_draw_scrub_prog())
                    }), 800)
                }

                function ue(e) {
                    _.design_wave_color_progress = e, "canvas" === _.skinwave_wave_mode && r(g, p.attr("data-pcm"), "canvas_change_pcm")
                }

                function pe() {
                    "normal" !== g.audioType && "detect" !== g.audioType && "audio" !== g.audioType || (g.audioType = "selfHosted")
                }

                function me() {
                    if (O) return !1;
                    re = !1
                }

                function he() {
                    var e = d(this);
                    0 !== p.has(e).length && (e.hasClass("active") ? f.bind(g)() : h.bind(g)())
                }

                function fe() {
                    if (O) return !1;
                    g.isPlayerPlaying && ea(), d(window).off("resize.dzsap"), p.remove(), p = null, O = !0
                }

                function ge(a, t) {
                    var i = {
                        do_not_autoplay: !1
                    };
                    t && (i = d.extend(i, t)), p.find(".playbtn").unbind("click", ge), p.find(".scrubbar").unbind("click", ge), ze(i), ((0, e.is_android)() || (0, e.is_ios)()) && ta({
                        called_from: "click_for_setup_media"
                    })
                }

                function ye(e) {
                    _.parentgallery && void 0 !== _.parentgallery.get(0) && _.parentgallery.get(0).api_toggle_menu_state()
                }

                function ve() {
                    setTimeout((function() {
                        g.cthis.addClass("scrubbar-loaded")
                    }), 1e3)
                }

                function be() {
                    if (p.attr("data-thumb")) {
                        p.addClass("has-thumb");
                        var e = "";
                        p.attr("data-thumb_link") ? e += '<a href="' + p.attr("data-thumb_link") + '"' : e += "<div", e += ' class="the-thumb-con"><div class="the-thumb" style=" background-image:url(' + p.attr("data-thumb") + ')"></div>', p.attr("data-thumb_link") ? e += "</a>" : e += "</div>", p.children(".the-thumb-con").length && (e = p.children(".the-thumb-con").eq(0)), "skin-customcontrols" !== _.design_skin && ("skin-wave" !== _.design_skin || "small" !== g.skinwave_mode && "alternate" !== g.skinwave_mode ? "skin-steel" === _.design_skin ? g._apControlsLeft.prepend(e) : g._audioplayerInner.prepend(e) : "alternate" === g.skinwave_mode ? g._audioplayerInner.prepend(e) : g._apControlsLeft.prepend(e)), g._audioplayerInner.children(".the-thumb-con").eq(0)
                    } else p.removeClass("has-thumb")
                }

                function we() {
                    p.hasClass("zoomsounds-wrapper-bg-bellow") && 0 === p.find(".dzsap-wrapper-buts").length && (p.append('<div class="temp-wrapper"></div>'), p.find(".temp-wrapper").append(g.extraHtmlAreas.controlsRight), p.find(".temp-wrapper").children("*:not(.dzsap-wrapper-but)").remove(), p.find(".temp-wrapper > .dzsap-wrapper-but").unwrap(), p.find(".dzsap-wrapper-but").each((function() {
                        var e = d(this).html();
                        e = (e = e.replace("{{heart_svg}}", "\t&hearts;")).replace("{{svg_share_icon}}", x.a$), d(this).get(0) && d(this).get(0).outerHTML.indexOf("dzsap-multisharer-but") > -1 && (g.isMultiSharer = !0), d(this).html(e)
                    })).wrapAll('<div class="dzsap-wrapper-buts"></div>')), "skin-customcontrols" === _.design_skin && (p.html(String(p.html()).replace("{{svg_play_icon}}", x.Z1)), p.html(String(p.html()).replace("{{svg_pause_icon}}", x.IM)))
                }

                function ke() {
                    g.cthis.find(".dzsap-multisharer-but").data("cthis", p), g.cthis.data("embed_code", g.feedEmbedCode)
                }

                function Ce(a) {
                    var t = {
                        call_from: "default"
                    };
                    a && (t = d.extend(t, a));
                    var i = [];
                    if ("on" !== _.pcm_data_try_to_generate || "on" !== _.pcm_data_try_to_generate_wait_for_real_pcm) {
                        for (var s = 0; s < 200; s++) i[s] = Number(Math.random()).toFixed(2);
                        i = JSON.stringify(i), p.addClass("rnd-pcm-for-now"), p.attr("data-pcm", i)
                    }(0, e.scrubbar_modeWave_setupCanvas)({}, g)
                }

                function Te() {
                    "on" !== _.skinwave_enableSpectrum ? "canvas" === _.skinwave_wave_mode && (p.attr("data-pcm") ? (0, e.scrubbar_modeWave_setupCanvas)({}, g) : Ce()) : ((0, e.scrubbar_modeWave_setupCanvas)({}, g), g._scrubbarbg_canvas = g.cthis.find(".scrub-bg-img").eq(0), g.cthis.hasClass("dzsap_footer") && console.log("_scrubbarbg_canvas - ", g._scrubbarbg_canvas), g._scrubBgCanvasCtx = g._scrubbarbg_canvas.get(0).getContext("2d"))
                }

                function ze(n) {
                    var o = {
                        do_not_autoplay: !1,
                        called_from: "default",
                        newSource: ""
                    };
                    if (n && (o = d.extend(o, n)), "icecast" !== g.audioType && "shoutcast" !== g.audioType || (g.audioType = "selfHosted"), "off" === _.cueMedia && "auto" === g.ajax_view_submitted && (g.increment_views = 1, g.ajax_view_submitted = "off"), g.isPlayerLoaded) return;
                    if ("youtube" === p.attr("data-original-type")) return;
                    "youtube" === g.audioType && dzsap_youtube_setupMedia(g, o), o.newSource && (g.data_source = o.newSource), (0, e.is_ios)() && (_.preload_method = "metadata");
                    const r = function(a, t, i) {
                        var s = "",
                            n = "",
                            o = a.initOptions;
                        return a.data_source && a.data_source.indexOf("get_track_source") > -1 && (o.preload_method = "none"), s += "<audio", s += ' id="' + a.uniqueId + '-audio"', s += ' preload="' + o.preload_method + '"', "on" === o.skinwave_enableSpectrum && (s += ' crossOrigin="anonymous"'), e.is_ios(), s += ">", n = "", a.data_source && (a.data_source || "icecast" === t || (a.data_source = a.cthis.attr("data-source")), "fake" !== a.data_source ? (n += '<source src="' + a.data_source + '" type="audio/mpeg">', void 0 !== a.cthis.attr("data-sourceogg") && (n += '<source src="' + a.cthis.attr("data-sourceogg") + '" type="audio/ogg">')) : a.cthis.addClass("meta-loaded meta-fake")), {
                            stringAudioElementHtml: s + n + "</audio>",
                            stringAudioTagSource: n
                        }
                    }(g, g.audioTypeSelfHosted_streamType);
                    ae = r.stringAudioElementHtml;
                    const l = r.stringAudioTagSource;
                    if ("selfHosted" !== g.audioType && "soundcloud" !== g.audioType || ("change_media" === o.called_from || "nonce generated" === o.called_from ? (0, e.is_ios)() || (0, e.is_android)() ? i(g, ae, l) : "nonce generated" === o.called_from && g._actualPlayer || i(g, ae) : (i(g, ae), ((0, e.is_ios)() || (0, e.is_android)()) && "retrieve_soundcloud_url" === o.called_from && setTimeout((function() {
                            ea()
                        }), 500)), g.$mediaNode_ && g.$mediaNode_.addEventListener && "fake" !== g.cthis.attr("data-source") && function(i, n, o, r, l) {
                            let d = 0;
                            void 0 !== i.$mediaNode_ && i.$mediaNode_ && (i.$mediaNode_.addEventListener("error", (function(s) {
                                if (this.networkState === HTMLMediaElement.NETWORK_NO_SOURCE && !1 === e.dzsap_is_mobile() && !1 === i.cthis.hasClass(t.OF.ERRORED_OUT_CLASS))
                                    if (d < t.OF.ERRORED_OUT_MAX_ATTEMPTS) setTimeout((function(e) {
                                        i.$mediaNode_ && (i.$mediaNode_.src = ""), setTimeout((function() {
                                            i.$mediaNode_ && (i.$mediaNode_.src = i.data_source, i.$mediaNode_.load())
                                        }), 1e3)
                                    }), 1e3, s), d++;
                                    else if ("on" === i.initOptions.notice_no_media) {
                                    i.cthis.addClass(t.OF.ERRORED_OUT_CLASS);
                                    var n = "error - file does not exist...";
                                    s.target.error && (n = s.target.error.message), i.cthis.append(a.SA({
                                        tooltipConClass: " feedback-tooltip-con",
                                        tooltipIndicatorText: '<span class="player-but"><span class="the-icon-bg" style="background-color: #912c2c"></span><span class="svg-icon dzsap-color-ui-inverse" >&#x2139;</span></span>',
                                        tooltipInnerHTML: "cannot load - ( " + i.data_source + " ) - error: " + n
                                    }))
                                }
                            }), !0), i.$mediaNode_.addEventListener("loadedmetadata", (function(a) {
                                e.player_view_addMetaLoaded(i);
                                const t = a.currentTarget;
                                s(t.duration) && (i.timeModel.actualTotalTime = Math.ceil(t.duration)), i.service_checkIfWeShouldUpdateTotalTime(), "change_media" === n.called_from && o({
                                    call_from: "force_reload_change_media"
                                }), ("change_media" === n.called_from || i._sourcePlayer) && r && setTimeout((() => {
                                    l(r, {
                                        call_from: "change_media"
                                    })
                                }), 50), i._sourcePlayer && s(t.duration) && i._sourcePlayer.get(0).api_set_timeVisualTotal(t.duration), i.view_drawCurrentTime()
                            }), !0), "AUDIO" === i.$mediaNode_.nodeName && i.$mediaNode_.addEventListener("ended", (function(e) {
                                i.handle_end(e)
                            })))
                        }(g, o, Oe, D, Je)), g.cthis.addClass("media-setuped"), "change_media" === o.called_from) return !1;
                    "youtube" !== g.audioType && ("fake" === g.cthis.attr("data-source") ? ((0, e.is_ios)() || (0, e.is_android)()) && Oe(o) : (0, e.is_ios)() ? setTimeout((function() {
                        Oe(o)
                    }), 1e3) : w = setInterval((function() {
                        ! function(a) {
                            var t = {
                                do_not_autoplay: !1
                            };
                            if (g._actualPlayer && (0, e.is_ios)()) return !1;
                            a && (t = d.extend(t, a)), "youtube" === g.audioType ? Oe(t) : void 0 !== g.$mediaNode_ && g.$mediaNode_ && ("AUDIO" !== g.$mediaNode_.nodeName || "shoutcast" === _.type ? Oe(t) : (0, e.is_safari)() ? g.$mediaNode_.readyState >= 1 && (g.isPlayerLoaded, Oe(t), clearInterval(w), _.action_audio_loaded_metadata && _.action_audio_loaded_metadata(p)) : g.$mediaNode_.readyState >= 2 && (g.isPlayerLoaded, Oe(t), clearInterval(w), _.action_audio_loaded_metadata && _.action_audio_loaded_metadata(p)))
                        }(o)
                    }), 50), "none" === _.preload_method && function(e, a) {
                        setTimeout((function() {
                            e.$mediaNode_ && jQuery(e.$mediaNode_).attr("preload", "metadata")
                        }), 1e4 * Number(window.dzsap_player_index))
                    }(g), "skin-customcontrols" !== _.design_skin && "skin-customhtml" !== _.design_skin || (p.find(".custom-play-btn,.custom-pause-btn").off("click"), p.find(".custom-play-btn,.custom-pause-btn").on("click", Re)), _.failsafe_repair_media_element && function(e, a) {
                        var t = e.initOptions;
                        setTimeout((function() {
                            if (e.$theMedia.children().eq(0).get(0) && "AUDIO" === e.$theMedia.children().eq(0).get(0).nodeName) return !1;
                            e.$theMedia.html(""), e.$mediaNode_ = null, e.$theMedia.append(a);
                            var t = e.isPlayerPlaying;
                            e.pause_media(), e.$mediaNode_ = e.$theMedia.children("audio").get(0), t && setTimeout((function() {
                                e.play_media({
                                    called_from: "aux_was_playing"
                                })
                            }), 20)
                        }), t.failsafe_repair_media_element), t.failsafe_repair_media_element = ""
                    }(g, ae)), "on" === _.skinwave_enableSpectrum && function(e) {
                        function a(a) {
                            u(e)
                        }
                        e.cthis.get(0).addEventListener("mousedown", a, {
                            once: !0
                        }), e.cthis.get(0).addEventListener("touchdown", a, {
                            once: !0
                        })
                    }(g), g.isSetupedMedia = !0
                }

                function xe() {
                    d(g.$mediaNode_).remove(), g.$mediaNode_ = null, g.isSetupedMedia = !1, g.isPlayerLoaded = !1
                }

                function Pe() {
                    ea(), g.$mediaNode_ && (g.$mediaNode_.children, "audio" === _.type && (g.$mediaNode_.innerHTML = "", g.$mediaNode_.load())), g.$theMedia && (g.$theMedia.children().remove(), g.$mediaNode_ = null, g.isPlayerLoaded = !1), xe()
                }

                function Se() {
                    return j || (j = !0, g._scrubbar.unbind("mousemove"), g._scrubbar.unbind("mouseleave"), g._scrubbar.unbind("click"), g._scrubbar.on("mousemove", Ve), g._scrubbar.on("mouseleave", Ve), g._scrubbar.on("click", Ve), g.$controlsVolume.on("click", ".volumeicon", Ke), g.$controlsVolume.on("mousemove", Qe), g.$controlsVolume.on("mousedown", Qe), d(document).on("mouseup", window, Qe), "skin-silver" === _.design_skin && p.on("click", ".volume-holder", Qe), p.find(".playbtn").unbind("click"), setTimeout(De, 300), setTimeout(De, 2e3), _.settings_trigger_resize > 0 && setInterval(De, _.settings_trigger_resize), p.addClass("listeners-setuped")), !1
                }

                function $e() {
                    return D
                }

                function Oe(t) {
                    if (!p.hasClass("dzsap-loaded")) {
                        var i = {
                            do_not_autoplay: !1,
                            call_from: "init"
                        };
                        t && (i = d.extend(i, t)), setTimeout((function() {
                            g.isSafeToChangeTrack = !0
                        }), 5e3), clearInterval(w), clearTimeout(w), Se(), setTimeout((function() {
                            g.$currTime && g.$currTime.outerWidth() > 0 && (L = g.$currTime.outerWidth())
                        }), 1e3), g.isPcmRequiredToGenerate && o(g, {
                            called_from: "init_loaded()"
                        }), "fake" !== g.audioType && "force_reload_change_media" !== i.call_from && ("on" !== _.settings_exclude_from_list && dzsap_list && -1 === dzsap_list.indexOf(p) && null === g._actualPlayer && dzsap_list.push(p), "on" === _.type_audio_stop_buffer_on_unfocus && (p.data("type_audio_stop_buffer_on_unfocus", "on"), p.get(0).api_destroy_for_rebuffer = function() {
                            "audio" === _.type && (g.playFrom = g.$mediaNode_.currentTime), Pe(), I = !0
                        })), "auto" === g.ajax_view_submitted && setTimeout((function() {
                            "auto" === g.ajax_view_submitted && (g.ajax_view_submitted = "off")
                        }), 1e3), g.isPlayerLoaded = !0, "fake" !== g.data_source && p.addClass("dzsap-loaded"), "default" === _.default_volume && (te = 1), !1 === isNaN(Number(_.default_volume)) ? te = Number(_.default_volume) : "last" === _.default_volume && (te = null !== localStorage && g.the_player_id && localStorage.getItem("dzsap_last_volume_" + g.the_player_id) ? localStorage.getItem("dzsap_last_volume_" + g.the_player_id) : 1), _.volume_from_gallery && (te = _.volume_from_gallery), Je(te, {
                            call_from: "from_init_loaded"
                        }), (0, a.GN)(g.playFrom) && Ue(g.playFrom, {
                            call_from: "from_playfrom"
                        }), "last" === g.playFrom && "undefined" != typeof Storage && (setTimeout((function() {
                            g.playFrom_ready = !0
                        })), void 0 !== localStorage["dzsap_" + g.the_player_id + "_lastpos"] && Ue(localStorage["dzsap_" + g.the_player_id + "_lastpos"], {
                            call_from: "last_pos"
                        })), !0 !== i.do_not_autoplay && "on" === _.autoplay && "on" === _.cueMedia && ta({
                            called_from: "do not autoplay not true ( init_loaded() ) "
                        }), g.$mediaNode_ && g.$mediaNode_.duration && (0, e.player_view_addMetaLoaded)(g), pe(), je({
                            fire_only_once: !1
                        }), "off" === _.autoplay && (re = !1), p.addClass("init-loaded"), setTimeout((function() {
                            g.timeModel.refreshTimes({
                                call_from: "set timeout 500"
                            }), je({
                                fire_only_once: !0
                            }), p.find(".wave-download").on("click", Ae)
                        }), 500), setTimeout((function() {
                            g.timeModel.refreshTimes({
                                call_from: "set timeout 1000"
                            }), je({
                                fire_only_once: !0
                            })
                        }), 1e3), 0 === Q && _.action_video_contor_60secs && (Q = setInterval(Me, 3e4))
                    }
                }

                function Me() {
                    _.action_video_contor_60secs && p.hasClass("is-playing") && _.action_video_contor_60secs(p, "")
                }

                function Ie(e) {
                    N = e
                }

                function Ae(e) {
                    var a = d(this);
                    if ("click" === e.type) {
                        if (a.hasClass("wave-download") && y.bind(g)(), a.hasClass("prev-btn") && (_.parentgallery && _.parentgallery.get(0) ? _.parentgallery.get(0).api_goto_prev() : He()), a.hasClass("next-btn") && (_.parentgallery && _.parentgallery.get(0) ? _.parentgallery.get(0).api_goto_next() : Le()), a.hasClass("tooltip-indicator--btn-footer-playlist") && a.parent().find(".dzstooltip").toggleClass("active"), a.hasClass("zoomsounds-btn-go-beginning")) {
                            var t = p;
                            g._actualPlayer && (t = g._actualPlayer), t.get(0).api_seek_to_0()
                        }
                        a.hasClass("zoomsounds-btn-step-backward") && (t = p, g._actualPlayer && (t = g._actualPlayer), t.get(0).api_step_back()), a.hasClass("zoomsounds-btn-step-forward") && (t = p, g._actualPlayer && (t = g._actualPlayer), t.get(0).api_step_forward()), a.hasClass("zoomsounds-btn-slow-playback") && (t = p, g._actualPlayer && (t = g._actualPlayer), t.get(0).api_playback_slow()), a.hasClass("zoomsounds-btn-reset") && (t = p, g._actualPlayer && (t = g._actualPlayer), t.get(0).api_playback_reset()), a.hasClass("btn-zoomsounds-download") && y.bind(g)(), a.hasClass("dzsap-repeat-button") && (g.isPlayerPlaying, Ue(0, {
                            call_from: "repeat"
                        })), a.hasClass("dzsap-loop-button") && (a.hasClass("active") ? (a.removeClass("active"), N = !1) : (a.addClass("active"), N = !0))
                    }
                    e.type, "mouseenter" === e.type && ("on" === _.preview_on_hover && (We(0), ta({
                        called_from: "preview_on_hover"
                    })), window.dzsap_mouseover = !0), "mouseleave" === e.type && ("on" === _.preview_on_hover && (We(0), ea()), window.dzsap_mouseover = !1)
                }

                function Ne() {
                    let a = g.timeModel.getVisualCurrentTime(),
                        t = g.timeModel.getVisualTotalTime();
                    if ("wave" === g.initOptions.scrubbar_type) {
                        if ("on" === g.initOptions.skinwave_enableSpectrum) {
                            if (!g.isPlayerPlayingEased) return !1;
                            g._scrubbarbg_canvas && (X = g._scrubbarbg_canvas.width(), 0 == (ee = g._scrubbarbg_canvas.height()) && (ee = 100), g._scrubbarbg_canvas.get(0).width = X, g._scrubbarbg_canvas.get(0).height = ee),
                                function(a, t, i, s) {
                                    let n = 20,
                                        o = 0,
                                        r = 0;
                                    if ("soundcloud" === a.initOptions.type) a.lastArray = (0, e.generateFakeArrayForPcm)();
                                    else if (a.spectrum_analyser) {
                                        a.isPlayerPlaying && (a.lastArray = new Uint8Array(a.spectrum_analyser.frequencyBinCount));
                                        for (let e = 0; e < a.lastArray.length; e++) a.lastArray[e] = (a.lastArray[e] + a.pcmSource[e]) / 2;
                                        try {
                                            a.isPlayerPlaying && (a.spectrum_analyser.getByteFrequencyData(a.lastArray), a.cthis.hasClass("dzsap_footer"))
                                        } catch (e) {}
                                    }
                                    if (a.lastArray && a.lastArray.length) {
                                        const e = a.lastArray.length;
                                        for (let t = e - 1; t >= 0; t--) a.lastArray[t] = t < e / 2 ? a.lastArray[t] / 255 * s : a.lastArray[e - t] / 255 * s;
                                        if (a.isPlayerPlaying || (a.lastArray = [...a.pcmSource]), a.isPlayerPlayingEased && a.last_lastarray)
                                            for (let e = 0; e < a.last_lastarray.length; e++) a.last_lastarray[e] > s && (a.last_lastarray[e] = s), o = a.last_lastarray[e], r = a.lastArray[e] - o, n = 6, a.lastArray[e] = Math.easeIn(1, o, r, n);
                                        c(t.get(0), a.lastArray, "" + a.initOptions.design_wave_color_bg, {
                                            call_from: "spectrum",
                                            selfClass: a,
                                            skinwave_wave_mode_canvas_waves_number: parseInt(a.initOptions.skinwave_wave_mode_canvas_waves_number),
                                            skinwave_wave_mode_canvas_waves_padding: parseInt(a.initOptions.skinwave_wave_mode_canvas_waves_padding)
                                        }, !1), a.lastArray && (a.last_lastarray = a.lastArray.slice())
                                    }
                                }(g, g._scrubbarbg_canvas, 0, ee)
                        }
                        if (g.$currTime && g.$currTime.length && "on" !== g.initOptions.skinwave_timer_static) {
                            if (S < 0 && (S = 0), (S = parseInt(S, 10)) < 2 && p.data("promise-to-play-footer-player-from")) return !1;
                            g.$currTime.css({
                                left: S
                            }), S > P - L && g.$currTime.css({
                                left: P - L
                            }), S > P - 30 && P ? g.$totalTime.css({
                                opacity: 1 - (S - (P - 30)) / 30
                            }) : "1" !== g.$totalTime.css("opacity") && g.$totalTime.css({
                                opacity: ""
                            })
                        }
                    }
                    0 !== t && function(a) {
                        g.$totalTime && (g.$totalTime.html((0, e.formatTime)(a)), g.$totalTime.fadeIn("fast"))
                    }(t), g.$currTime && (!1 === q && g.$currTime.html((0, e.formatTime)(a)), g.timeModel.getVisualTotalTime() && g.timeModel.getVisualTotalTime() > -1 && g.cthis.addClass("time-total-visible")), g.spectrum_audioContext && g.$totalTime && g.$totalTime.html((0, e.formatTime)(t))
                }

                function qe() {
                    let e = g.timeModel.getVisualCurrentTime(),
                        a = g.timeModel.getVisualTotalTime();
                    if (S = e / a * P, isNaN(S) && (S = 0), S > P && (S = P), e < 0 && (S = 0), (0 === a || isNaN(a)) && (S = 0), S < 2 && p.data("promise-to-play-footer-player-from")) return !1;
                    null === g.spectrum_audioContext_buffer && g.$$scrubbProg && (g.$$scrubbProg.style.width = parseInt(S, 10) + "px")
                }

                function je(a) {
                    const t = d.extend({
                        fire_only_once: !1
                    }, a || {});
                    if (O) return !1;
                    g.timeModel.refreshTimes({
                        call_from: "checK_time"
                    }), g.audioType, qe(), g.timeModel.processCurrentFrame(), "skin-minimal" === _.design_skin && (0, e.waitForScriptToBeAvailableThenExecute)(window.dzsap_view_player_skinMinimal_drawFrame, (function() {
                        window.dzsap_view_player_skinMinimal_drawFrame(g, S)
                    })), Ne(), !0 !== t.fire_only_once && requestAnimationFrame(je)
                }

                function Re(e) {
                    p.hasClass("prevent-bubble") && e && e.stopPropagation && (e.preventDefault(), e.stopPropagation());
                    var a = d(this),
                        t = !1;
                    if (!p.hasClass("listeners-setuped")) {
                        d(g.$mediaNode_).attr("preload", "auto"), Se(), Oe();
                        var i = setInterval((function() {
                            g.$mediaNode_ && g.$mediaNode_.duration && !1 === isNaN(g.$mediaNode_.duration) && clearInterval(i)
                        }), 1e3)
                    }
                    if ("skin-minimal" === _.design_skin) {
                        var s = a.offset().left + Y / 2,
                            n = a.offset().top + Y / 2,
                            o = e.pageX,
                            r = e.pageY,
                            l = .005 * -(o - s - Y / 2);
                        r < n && (l = .5 - l + .5), (Math.abs(r - n) > 20 || Math.abs(o - s) > 20) && (We(l, {
                            call_from: "skin_minimal_scrub"
                        }), t = !0, je({
                            fire_only_once: !0
                        }))
                    }
                    return t || (g.isPlayerPlaying ? ea() : ta({
                        called_from: "click_playpause"
                    })), !1
                }

                function Ee(a = 0) {
                    var t = 0;
                    g.classFunctionalityInnerPlaylist ? (t = g.playlist_inner_currNr + a) >= 0 && g.classFunctionalityInnerPlaylist.playlistInner_gotoItem(t, {
                        call_from: "api_sync_players_prev"
                    }) : window.dzsap_syncList_players && window.dzsap_syncList_players.length > 0 ? (0, e.player_syncPlayers_gotoItem)(g, a) : console.log("[dzsap] [syncPlayers] no players found"), window.dzsap_syncList_players && window.dzsap_syncList_index >= window.dzsap_syncList_players.length && (window.dzsap_syncList_index = 0)
                }

                function He() {
                    if (g._actualPlayer) return g._actualPlayer.get(0).api_sync_players_goto_prev(), !1;
                    Ee(-1)
                }

                function Le() {
                    if (g._actualPlayer) return g._actualPlayer.get(0).api_sync_players_goto_next(), !1;
                    Ee(1)
                }

                function Fe(e) {
                    var a = {
                        called_from: "default"
                    };
                    if (e && (a = d.extend(a, e)), g.isMediaEnded) return !1;
                    if (g.isMediaEnded = !0, g.inter_isEnded = setTimeout((function() {
                            g.isMediaEnded = !1
                        }), 1e3), g._sourcePlayer && (N = g._sourcePlayer.get(0).api_get_media_isLoopActive()), g._actualPlayer && "fake_player" !== a.call_from) return !1;
                    if (Ue(0, {
                            call_from: "handle_end"
                        }), N) return ta({
                        called_from: "track_end"
                    }), !1;
                    ea(), _.parentgallery && _.parentgallery.get(0).api_gallery_handle_end();
                    let t = "default",
                        i = null;
                    g._sourcePlayer && g._sourcePlayer.get(0) && g._sourcePlayer.get(0).SelfInstance && g._sourcePlayer.get(0).SelfInstance.$parentPlaylist && (i = g._sourcePlayer.get(0).SelfInstance.$parentPlaylist.get(0).SelfPlaylist, i && "on" === i.initOptions.autoplayNext && (t = "nextInSourcePlayist")), "default" === t && window.dzsap_syncList_players && window.dzsap_syncList_players.length > 0 && (g.cthis.hasClass("is-single-player") || g._sourcePlayer && g._sourcePlayer.hasClass("is-single-player")) && (t = "syncPlayerNext"), "default" === t && g._sourcePlayer && (g._sourcePlayer.hasClass("is-single-player") || g._sourcePlayer.hasClass("feeded-whole-playlist")) && (t = "handleEndForSourcePlayer"), "default" === t && (t = "nothingAfter"), "nextInSourcePlayist" === t && i.argThis && i.argThis.api_gallery_handle_end(), "syncPlayerNext" === t && setTimeout((function() {
                        Le()
                    }), 100), "handleEndForSourcePlayer" === t && setTimeout((function() {
                        g._sourcePlayer.get(0).api_handle_end({
                            call_from: "handle_end() fake_player"
                        })
                    }), 200), ie && setTimeout((function() {
                        ie(p, {})
                    }), 200)
                }

                function De(e, a) {
                    if (d(window).width(), v = p.width(), p.height(), g._scrubbarbg_canvas && "function" == typeof g._scrubbarbg_canvas.width && (X = g._scrubbarbg_canvas.width(), ee = g._scrubbarbg_canvas.height()), v <= 720 ? p.addClass("under-720") : p.removeClass("under-720"), v <= 500 ? p.addClass("under-500") : p.removeClass("under-500"), P = v, "skin-default" === _.design_skin && (P = v), "skin-pro" === _.design_skin && (P = v), "skin-silver" !== _.design_skin && "skin-aria" !== _.design_skin || (P = v, P = g._scrubbar.width()), "skin-justthumbandbutton" === _.design_skin && (v = p.children(".audioplayer-inner").outerWidth(), P = v), "skin-redlights" !== _.design_skin && "skin-steel" !== _.design_skin || (P = g._scrubbar.width()), "skin-wave" === _.design_skin && (P = g._scrubbar.outerWidth(!1), g._scrubbar.outerHeight(!1), g._commentsHolder && (g._commentsHolder.css({
                            width: P
                        }), g._commentsHolder.addClass("active"))), !0 === V) {
                        if ("skin-default" === _.design_skin) {
                            p.get(0) && "auto" === p.get(0).style.height && p.height(200);
                            g._audioplayerInner.height();
                            p.attr("data-initheight") ? p.attr("data-initheight", g._audioplayerInner.height()) : Number(p.attr("data-initheight")), _.design_thumbh
                        }
                        g._audioplayerInner.find(".the-thumb").eq(0).css({})
                    }
                    "none" !== p.css("display") && (g._scrubbar.find(".scrub-bg-img").eq(0).css({
                        width: g._scrubbar.children(".scrub-bg").width()
                    }), g._scrubbar.find(".scrub-prog-img").eq(0).css({
                        width: g._scrubbar.children(".scrub-bg").width()
                    })), p.removeClass("under-240 under-400"), v <= 240 && p.addClass("under-240"), v <= 500 ? (p.addClass("under-400"), !1 === G && (G = !0), g.$controlsVolume) : !0 === G && (G = !1);
                    var t = 50;
                    if ("skin-wave" === _.design_skin && (g._scrubbar.eq(0).height(), g.skinwave_mode, "small" === g.skinwave_mode && (P = g._scrubbar.width()), "canvas" === _.skinwave_wave_mode && p.attr("data-pcm") && (100 === g._scrubbarbg_canvas.width() && g._scrubbarbg_canvas.width(g._scrubbar.width()), "fake" !== g.data_source && (de ? (clearTimeout(de), de = setTimeout(Be, 300)) : (Be(), de = 1)))), "skin-minimal" === _.design_skin && (Y = g._apControls.width(), g.skin_minimal_canvasplay && (g.skin_minimal_canvasplay.style.width = Y, g.skin_minimal_canvasplay.width = Y, g.skin_minimal_canvasplay.style.height = Y, g.skin_minimal_canvasplay.height = Y, d(g.skin_minimal_canvasplay).css({
                            width: Y,
                            height: Y
                        }))), "skin-default" === _.design_skin && g.$currTime && (parseInt(g._metaArtistCon.css("left"), 10), g._metaArtistCon.outerWidth(), "none" === g._metaArtistCon.css("display") && (g._metaArtistCon_w = 0), isNaN(g._metaArtistCon_l) && (g._metaArtistCon_l = 20)), "skin-minion" === _.design_skin && (t = parseInt(g.$conControls.find(".con-playpause").eq(0).offset().left, 10) - parseInt(g.$conControls.eq(0).offset().left, 10) - 18, g.$conControls.find(".prev-btn").eq(0).css({
                            top: 0,
                            left: t
                        }), t += 36, g.$conControls.find(".next-btn").eq(0).css({
                            top: 0,
                            left: t
                        })), "on" === _.embedded && window.frameElement) {
                        let e = {
                            height: p.outerHeight()
                        };
                        _.embedded_iframe_id && (e.embedded_iframe_id = _.embedded_iframe_id);
                        var i = {
                            name: "resizeIframe",
                            params: e
                        };
                        window.parent.postMessage(i, "*")
                    }
                    qe(), _.settings_trigger_resize > 0 && _.parentgallery && void 0 !== d(_.parentgallery).get(0) && void 0 !== d(_.parentgallery).get(0).api_handleResize && d(_.parentgallery).get(0).api_handleResize()
                }

                function Be() {
                    r(g, p.attr("data-pcm"), "canvas_normal_pcm"), de = 0
                }

                function Qe(e) {
                    var a = d(this),
                        t = null;
                    if (g.$controlsVolume.find(".volume_static").length && (t = Number((e.pageX - g.$controlsVolume.find(".volume_static").eq(0).offset().left) / g.$controlsVolume.find(".volume_static").eq(0).width())), !t) return !1;
                    "mousemove" === e.type && W && (a.parent().hasClass("volume-holder") || a.hasClass("volume-holder"), "skin-redlights" === _.design_skin && (t *= 10, t = Math.round(t), t /= 10), Je(t, {
                        call_from: "set_by_mousemove"
                    }), $ = !1), e.type, "click" === e.type && (a.parent().hasClass("volume-holder") && (t = 1 - (e.pageY - g.$controlsVolume.find(".volume_static").eq(0).offset().top) / g.$controlsVolume.find(".volume_static").eq(0).height()), a.hasClass("volume-holder") && (t = 1 - (e.pageY - g.$controlsVolume.find(".volume_static").eq(0).offset().top) / g.$controlsVolume.find(".volume_static").eq(0).height()), Je(t, {
                        call_from: "set_by_mouseclick"
                    }), $ = !1), "mousedown" === e.type && (W = !0, p.addClass("volume-dragging"), a.parent().hasClass("volume-holder") && (t = 1 - (e.pageY - g.$controlsVolume.find(".volume_static").eq(0).offset().top) / g.$controlsVolume.find(".volume_static").eq(0).height()), Je(t, {
                        call_from: "set_by_mousedown"
                    }), $ = !1), "mouseup" === e.type && (W = !1, p.removeClass("volume-dragging"))
                }

                function Ve(a) {
                    var t = a.pageX;
                    if (d(a.target).hasClass("sample-block-start") || d(a.target).hasClass("sample-block-end")) return !1;
                    if ("mousemove" === a.type && (g._scrubbar.children(".scrubBox-hover").css({
                            left: t - g._scrubbar.offset().left
                        }), "on" === _.scrub_show_scrub_time && g.timeModel.getVisualTotalTime())) {
                        var i = (t - g._scrubbar.offset().left) / g._scrubbar.outerWidth() * g.timeModel.getVisualTotalTime();
                        g.$currTime && (g.$currTime.html((0, e.formatTime)(i)), g.$currTime.addClass("scrub-time")), q = !0
                    }
                    if ("mouseleave" === a.type && (q = !1, g.$currTime && g.$currTime.removeClass("scrub-time"), Ne()), "click" === a.type) {
                        p.hasClass("prevent-bubble") && a && a.stopPropagation && (a.preventDefault(), a.stopPropagation()), 0 === P && (P = g._scrubbar.width()), 0 === P && (P = 300);
                        var s = (a.pageX - g._scrubbar.offset().left) / P * g.timeModel.getVisualTotalTime();
                        if (g.sample_time_start > 0 && (s -= g.sample_time_start), g._actualPlayer && setTimeout((function() {
                                g._actualPlayer.get(0) && g._actualPlayer.get(0).api_pause_media && g._actualPlayer.get(0).api_seek_to_perc(s / g.timeModel.getVisualTotalTime(), {
                                    call_from: "from_feeder_to_feed"
                                })
                            }), 50), Ue(s, {
                                call_from: "handleMouseOnScrubbar"
                            }), "on" === _.autoplay_on_scrub_click && !1 === g.isPlayerPlaying && ta({
                                called_from: "handleMouseOnScrubbar"
                            }), p.hasClass("from-wc_loop")) return !1
                    }
                }

                function We(e, a) {
                    Ue(e * g.timeModel.getVisualTotalTime(), a)
                }

                function Ue(a, t) {
                    var i = {
                        call_from: "default",
                        deeplinking: "off",
                        call_from_type: "default"
                    };
                    if (t && (i = d.extend(i, t)), i.call_from, "on" === i.deeplinking) {
                        var s = add_query_arg(window.location.href, "audio_time", a);
                        history.pushState({
                            foo: "bar"
                        }, null, s)
                    }
                    if (a = (0, e.sanitizeToIntFromPointTime)(a), a = g.timeModel.getActualTargetTime(a), g._actualPlayer) {
                        let e = {
                            type: g.actualDataTypeOfMedia,
                            fakeplayer_is_feeder: "on"
                        };
                        return g._actualPlayer.length && g._actualPlayer.data("feeding-from") !== p.get(0) && ("handle_end" !== i.call_from && "from_playfrom" !== i.call_from && "last_pos" !== i.call_from && "playlist_seek_from_0" !== i.call_from ? (e.called_from = "seek_to from player source->" + p.attr("data-source") + " < -  old call from - " + i.call_from, g._actualPlayer.get(0).api_change_media ? g._actualPlayer.get(0).api_change_media(p, e) : console.log("not inited ? ", g._actualPlayer)) : p.data("promise-to-play-footer-player-from", a)), setTimeout((function() {
                            g._actualPlayer.get(0) && g._actualPlayer.get(0).api_pause_media && "from_playfrom" !== i.call_from && "last_pos" !== i.call_from && g._actualPlayer.get(0).api_seek_to(a, {
                                call_from: "from_feeder_to_feed"
                            })
                        }), 50), !1
                    }
                    if ("youtube" === g.audioType) try {
                        g.$mediaNode_.seekTo(a)
                    } catch (e) {}
                    if (je({
                            fire_only_once: !0
                        }), setTimeout((function() {
                            je({
                                fire_only_once: !0
                            })
                        }), 20), "selfHosted" === g.audioType) {
                        if (g.$mediaNode_ && void 0 !== g.$mediaNode_.currentTime) try {
                            g.$mediaNode_.currentTime = a
                        } catch (e) {}
                        return !1
                    }
                }

                function Ge(e) {
                    je({
                        fire_only_once: !0
                    }), setTimeout((function() {
                        je({
                            fire_only_once: !0
                        })
                    }), 20)
                }

                function Ye(e) {
                    "youtube" === g.audioType && g.$mediaNode_.setPlaybackRate(e), "selfHosted" === g.audioType && (g.$mediaNode_.playbackRate = e)
                }

                function Je(e, a) {
                    var t = {
                        call_from: "default"
                    };
                    if (a && (t = d.extend(t, a)), e > 1 && (e = 1), e < 0 && (e = 0), "from_fake_player_feeder_from_init_loaded" === t.call_from && g._sourcePlayer) {
                        if ("default" !== _.default_volume && (U = !0), U) return !1;
                        U = !0
                    }
                    "set_by_mouseclick" !== t.call_from && "set_by_mousemove" !== t.call_from || (U = !0), "youtube" === g.audioType && g.$mediaNode_ && g.$mediaNode_.setVolume && g.$mediaNode_.setVolume(100 * e), "selfHosted" === g.audioType && (g.$mediaNode_ ? g.$mediaNode_.volume = e : g.$mediaNode_ && d(g.$mediaNode_).attr("preload", "metadata")), Ze(e), g._sourcePlayer && (t.call_from = "from_fake_player", g._sourcePlayer.get(0) && g._sourcePlayer.get(0).api_visual_set_volume(e, t) && g._sourcePlayer.get(0).api_visual_set_volume(e, t)), g._actualPlayer && "from_fake_player" !== t.call_from && ("from_init_loaded" === t.call_from ? t.call_from = "from_fake_player_feeder_from_init_loaded" : t.call_from = "from_fake_player_feeder", g._actualPlayer && g._actualPlayer.get(0) && g._actualPlayer.get(0).api_set_volume && g._actualPlayer.get(0).api_set_volume(e, t))
                }

                function Ze(e, a) {
                    g.$controlsVolume.hasClass("controls-volume-vertical") ? g.$controlsVolume.find(".volume_active").eq(0).css({
                        height: g.$controlsVolume.find(".volume_static").eq(0).height() * e
                    }) : "skin-redlights" === g.initOptions.design_skin ? g.$controlsVolume.find(".volume_active").eq(0).css({
                        "clip-path": "inset(0% " + 100 * Math.abs(1 - e) + "% 0% 0%)"
                    }) : g.$controlsVolume.find(".volume_active").eq(0).css({
                        width: g.$controlsVolume.find(".volume_static").eq(0).width() * e
                    }), "skin-wave" === _.design_skin && "on" === _.skinwave_dynamicwaves && (g._scrubbar.find(".scrub-bg-img").eq(0).css({
                        transform: "scaleY(" + e + ")"
                    }), g._scrubbar.find(".scrub-prog-img").eq(0).css({
                        transform: "scaleY(" + e + ")"
                    })), null !== localStorage && g.the_player_id && localStorage.setItem("dzsap_last_volume_" + g.the_player_id, e), D = e
                }

                function Ke(e) {
                    !1 === $ ? (B = D, Je(0, {
                        call_from: "from_mute"
                    }), $ = !0) : (Je(B, {
                        call_from: "from_unmute"
                    }), $ = !1)
                }

                function Xe(e) {
                    var a = {
                        call_from: "default"
                    };
                    e && (a = d.extend(a, e)), g.$conPlayPause.removeClass("playing"), p.removeClass("is-playing"), g.isPlayerPlaying = !1, clearTimeout(g.isPlayerPlayingEasedInterval), g.isPlayerPlayingEasedInterval = setTimeout((() => {
                        g.isPlayerPlayingEased = !1
                    }), t.Ad), p.parent().hasClass("zoomsounds-wrapper-bg-center") && p.parent().removeClass("is-playing"), g.$reflectionVisualObject && g.$reflectionVisualObject.removeClass("is-playing"), _.parentgallery && _.parentgallery.removeClass("player-is-playing"), clearTimeout(le), le = setTimeout((() => {
                        re = !1
                    }), t.Ad), oe && oe(p)
                }

                function ea(e) {
                    var a = {
                        audioapi_setlasttime: !0,
                        donot_change_media: !1,
                        call_actual_player: !0
                    };
                    if (O) return !1;
                    if (e && (a = d.extend(a, e)), Xe({
                            call_from: "pause_media"
                        }), a.call_actual_player && !0 !== a.donot_change_media && null !== g._actualPlayer) {
                        let e = {
                            type: g.actualDataTypeOfMedia,
                            fakeplayer_is_feeder: "on"
                        };
                        return g._actualPlayer && g._actualPlayer.length && g._actualPlayer.data("feeding-from") !== p.get(0) && (e.called_from = "pause_media from player " + p.attr("data-source"), g._actualPlayer.get(0).api_change_media(p, e)), void setTimeout((function() {
                            g._actualPlayer.get(0) && g._actualPlayer.get(0).api_pause_media && g._actualPlayer.get(0).api_pause_media()
                        }), 100)
                    }! function(e, a) {
                        var t = jQuery;
                        "youtube" === e.audioType && e.$mediaNode_ && e.$mediaNode_.pauseVideo && e.$mediaNode_.pauseVideo(), "selfHosted" === e.audioType && e.$mediaNode_ && ("stop" == e.initOptions.pause_method ? (e.$mediaNode_.pause(), e.$mediaNode_.src = "", e.destroy_cmedia(), t(e.$mediaNode_).remove(), e.$mediaNode_ = null) : e.$mediaNode_.pause && e.$mediaNode_.pause()), a()
                    }(g, (() => {
                        g._sourcePlayer && g._sourcePlayer.get(0) && g._sourcePlayer.get(0).api_pause_media_visual && g._sourcePlayer.get(0).api_pause_media_visual({
                            call_from: "pause_media in child player"
                        })
                    }))
                }

                function aa(a) {
                    if (g.isPlayerPlaying = !0, clearTimeout(g.isPlayerPlayingEasedInterval), g.isPlayerPlayingEased = !0, clearTimeout(le), re = !0, p.addClass("is-playing"), p.addClass("first-played"), g.$reflectionVisualObject && g.$reflectionVisualObject.addClass("is-playing"), _.parentgallery && _.parentgallery.addClass("player-is-playing"), g.classFunctionalityInnerPlaylist && g.classFunctionalityInnerPlaylist.player_determineSyncPlayersIndex(g, g._sourcePlayer), (0, e.view_player_globalDetermineSyncPlayersIndex)(g), (0, e.view_player_playMiscEffects)(g), g.isStickyPlayer) {
                        g.$stickToBottomContainer.addClass("audioplayer-loaded");
                        const e = d(".dzsap-sticktobottom-placeholder");
                        g.$stickToBottomContainer.addClass("audioplayer-loaded"), e.eq(0).addClass("active"), e.css({
                            height: g.$stickToBottomContainer.outerHeight() + "px"
                        })
                    }
                    se && se(p), ne && ne(p)
                }

                function ta(t) {
                    var i = {
                        api_report_play_media: !0,
                        called_from: "default",
                        retry_call: 0
                    };
                    if (t && (i = d.extend(i, t)), g.isSetupedMedia || ze({
                            called_from: i.called_from + "[play_media .. not setuped]"
                        }), "api_sync_players_prev" === i.called_from && (F = p.parent().children(".audioplayer,.audioplayer-tobe").index(p), _.parentgallery && _.parentgallery.get(0) && _.parentgallery.get(0).api_goto_item && _.parentgallery.get(0).api_goto_item(F)), (0, e.is_ios)() && "waiting" === g.spectrum_audioContext_buffer || "fetchingProtection" === g.mediaProtectionStatus) return setTimeout((function() {
                        t || (t = {}), t.call_from_aux = "waiting audioCtx_buffer or ios", ta(t)
                    }), 500), !1;
                    if (i.called_from, p.hasClass("media-setuped") || null !== g._actualPlayer || console.log("[dzsap][warning] media not setuped, there might be issues", p.attr("id")), i.called_from.indexOf("feed_to_feeder") > -1 && !p.hasClass("dzsap-loaded")) {
                        Oe();
                        let a = 300;
                        if ((0, e.is_android_good)() && (a = 0), "with delay" !== i.call_from_aux) return a ? setTimeout((function() {
                            i.call_from_aux = "with delay", ta(i)
                        }), a) : ta(i), !1
                    }
                    if ((0, e.player_stopOtherPlayers)(dzsap_list, g), I && (ze({
                            called_from: "play_media() .. destroyed for rebuffer"
                        }), (0, a.GN)(g.playFrom) && Ue(g.playFrom, {
                            call_from: "destroyed_for_rebuffer_playfrom"
                        }), I = !1), "on" === _.google_analytics_send_play_event && window._gaq && !1 === M && (window._gaq.push(["_trackEvent", "ZoomSounds Play", "Play", "zoomsounds play - "]), M = !0), window.ga || window.__gaTracker && (window.ga = window.__gaTracker), "on" === _.google_analytics_send_play_event && window.ga && !1 === M && (M = !0, window.ga("send", {
                            hitType: "event",
                            eventCategory: "zoomsounds play - ",
                            eventAction: "play",
                            eventLabel: "zoomsounds play - "
                        })), g._sourcePlayer && g._sourcePlayer.get(0) && g._sourcePlayer.get(0).api_pause_media_visual && g._sourcePlayer.get(0).api_play_media_visual({
                            api_report_play_media: !1
                        }), g._actualPlayer) {
                        let e = {
                            type: g.actualDataTypeOfMedia,
                            fakeplayer_is_feeder: "on",
                            call_from: "play_media_audioplayer"
                        };
                        try {
                            return "click_playpause" === i.called_from && _.parentgallery && (_.parentgallery.get(0).api_regenerate_sync_players_with_this_playlist(), g._actualPlayer.get(0).api_regenerate_playerlist_inner()), g._actualPlayer && g._actualPlayer.length && g._actualPlayer.data("feeding-from") !== p.get(0) && (e.called_from = "play_media from player 22 " + p.attr("data-source") + " < -  old call from - " + i.called_from, g._actualPlayer.get(0).api_change_media && g._actualPlayer.get(0).api_change_media(p, e), p.hasClass("first-played") || p.data("promise-to-play-footer-player-from") && (Ue(p.data("promise-to-play-footer-player-from")), setTimeout((function() {
                                p.data("promise-to-play-footer-player-from", "")
                            }), 1e3))), setTimeout((function() {
                                g._actualPlayer.get(0) && g._actualPlayer.get(0).api_play_media && g._actualPlayer.get(0).api_play_media({
                                    called_from: "[feed_to_feeder]"
                                })
                            }), 100), void("off" === g.ajax_view_submitted && m.bind(g)())
                        } catch (e) {
                            console.log("no fake player..", e)
                        }
                    }
                    "youtube" === g.audioType && dzsap_youtube_playMedia(g, i, g.youtube_currentId), g.audioType, "youtube" === g.audioType && aa(),
                        function(a, t, i) {
                            (async function() {
                                return new Promise(((t, i) => {
                                    ! function(t, i) {
                                        a.cthis.attr("data-original-type") || (a.$mediaNode_ && a.$mediaNode_.play ? e.is_ios() && null !== a.spectrum_audioContext && "object" == typeof a.spectrum_audioContext ? (a.spectrum_audioContextBufferSource = a.spectrum_audioContext.createBufferSource(), a.spectrum_audioContextBufferSource.buffer = a.spectrum_audioContext_buffer, a.spectrum_audioContextBufferSource.connect(a.spectrum_audioContext.destination), a.spectrum_audioContextBufferSource.start(0, a.lastTimeInSeconds), t({
                                            resolve_type: "playing_context"
                                        })) : e.is_ie() ? (a.$mediaNode_.play(), t({
                                            resolve_type: "started_playing"
                                        })) : (a.cthis.addClass("zoomsounds-player--media--is-loading"), a.$mediaNode_.play().then((e => {
                                            t({
                                                resolve_type: "started_playing"
                                            })
                                        })).catch((e => {
                                            i({
                                                error_type: "did not want to play",
                                                error_message: e
                                            })
                                        })).finally((() => {
                                            a.cthis.removeClass("zoomsounds-player--media--is-loading")
                                        }))) : null == a._actualPlayer && (a.isPlayPromised = !0))
                                    }(t, i)
                                }))
                            })().then((e => {
                                t(e)
                            })).catch((e => {
                                i(e)
                            }))
                        }(g, (() => {
                            aa(), "on" === _.skinwave_enableSpectrum && u(g), g._sourcePlayer ? (window.dzsap_currplayer_focused = g._sourcePlayer.get(0), g._sourcePlayer.get(0) && g._sourcePlayer.get(0).api_pause_media_visual && g._sourcePlayer.get(0).api_try_to_submit_view()) : (window.dzsap_currplayer_focused = p.get(0), ia()), "on" === g.keyboard_controls.play_trigger_step_back && dzsap_currplayer_focused && dzsap_currplayer_focused.api_step_back(g.keyboard_controls.step_back_amount)
                        }), (e => {
                            console.log("error autoplay playing -  ", e), setTimeout((() => {
                                ea(), console.log("trying to pause")
                            }), 30)
                        }))
                }

                function ia() {
                    "auto" === g.ajax_view_submitted && (g.ajax_view_submitted = "off"), "off" === g.ajax_view_submitted && m.bind(g)()
                }
                window.dzsap_player_index++, g.timeModel.getSampleTimesFromDom(),
                    function() {
                        if (p.hasClass("dzsap-inited")) return !1;
                        if (g.play_media_visual = aa, g.play_media = ta, g.pause_media = ea, g.pause_media_visual = Xe, g.seek_to = Ue, g.reinit = pe, g.handle_end = Fe, g.init_loaded = Oe, g.scrubbar_reveal = ve, g.calculate_dims_time = _e, g.check_multisharer = ke, g.setup_structure_scrub = Te, g.setup_structure_sanitizers = we, g.destroy_cmedia = xe, g.view_drawCurrentTime = Ne, g.setupStructure_thumbnailCon = be, g.setup_pcm_random_for_now = Ce, g.handleResize = De, g.destroy_media = Pe, p.css({
                                opacity: ""
                            }), p.addClass("dzsap-inited"), window.dzsap_player_index++, _.parentgallery && (g.$parentPlaylist = _.parentgallery), g.keyboard_controls = (0, R.tc)(), (0, e.configureAudioPlayerOptionsInitial)(p, _, g), "on" == _.loop && (N = !0), e.player_detect_skinwave_mode.bind(g)(), "skin-default" === _.design_skin && "default" === _.design_thumbh && (p.height(), V = !0), (0, e.dzsap_is_mobile)() && (d("body").addClass("is-mobile"), "on" === _.mobile_delete && (0, e.player_delete)(g), "on" === _.mobile_disable_fakeplayer && g.cthis.attr("data-fakeplayer", "")), (0, e.player_viewApplySkinWaveModes)(g), _.design_thumbh, (0, e.playerFunctions)(g, "detectIds"), p.attr("data-fakeplayer") && (0, e.player_determineActualPlayer)(g), g.cthis.addClass("scrubbar-type-" + _.scrubbar_type), (0, e.player_determineHtmlAreas)(g), "on" === window.dzsap_settings.syncPlayers_buildList && (0, e.player_syncPlayers_buildList)(), (0, e.player_getPlayFromTime)(g), (0, e.player_adjustIdentifiers)(g), (0, e.player_identifySource)(g), (0, e.player_identifyTypes)(g), "youtube" === g.audioType) {
                            window.dzsap_get_base_url();
                            const e = window.dzsap_base_url ? window.dzsap_base_url + "/parts/youtube/dzsap-youtube-functions.js" : "";
                            (0, a.dv)(e, window.dzsap_youtube_functions_inited).then((e => {
                                window.dzsap_youtube_functions_init(g)
                            }))
                        }
                        if (g.audioTypeSelfHosted_streamType = "", "selfHosted" === g.audioType && (p.attr("data-streamtype") && "off" !== p.attr("data-streamtype") ? (g.audioTypeSelfHosted_streamType = p.attr("data-streamtype"), g.data_source, p.addClass("is-radio-type")) : g.audioTypeSelfHosted_streamType = ""), g.audioTypeSelfHosted_streamType, !p.hasClass("audioplayer")) {
                            if (C = void 0 !== p.attr("id") ? p.attr("id") : "ap" + H++, g.youtube_currentId = "ytplayer_" + C, p.removeClass("audioplayer-tobe"), p.addClass("audioplayer"), qe(), setTimeout((function() {
                                    qe()
                                }), 1e3), "off" === _.cueMedia && (p.addClass("cue-off"), _.autoplay = "on"), "soundcloud" === g.audioType && n(g), A(g), "wave" !== _.scrubbar_type || "selfHosted" !== g.audioType && "soundcloud" !== g.audioType && "fake" !== g.audioType || "on" !== _.skinwave_comments_enable || function(e) {
                                    jQuery;
                                    var t = e.initOptions;
                                    e.cthis.find(".the-comments").length > 0 && e.cthis.find(".the-comments").eq(0).children().length > 0 && (e.$commentsChildren = e.cthis.find(".the-comments").eq(0).children());
                                    var i = '<div class="comments-holder">';
                                    t.skinwave_comments_links_to ? i += '<a href="' + t.skinwave_comments_links_to + '" target="_blank" class="the-bg"></a>' : i += '<div class="the-comments-holder-bg"><div class="the-avatar comments-avatar--placeholder"></div></div>', i += '</div><div class="clear"></div><div class="dzstooltip dzstooltip--comments-writer    talign-center arrow-top style-rounded color-dark-light    dims-set transition-slidedown " style="width: 330px;">  <div class="dzstooltip--inner"><div class="comments-writer"><div class="comments-writer-inner">\n<div class="comments-writer--form">\n\n                <div class="dzsap-comments--section">\n\n                  <textarea name="comment-text" placeholder="Your comment.." type="text" class="comment-input"></textarea>\n\n                </div>\n                <div class="dzsap-comments--section">\n                  <input placeholder="Your email.." name="comment-email" type="text" class="comment-input">\n                </div>\n                <div class="dzsap-comments--section overflow-and-fixed  ">\n\n                  <div class="flex-grow-1   "><span\n                    class="dzsap-comments--comment-form-label">commenting on </span> <span\n                    class="dzsap-comments--comment-form-label-time">1:07</span></div>\n                  <div class="flex-grow-0 margin-left-auto"><button class="submit-ap-comment dzs-button-dzsap float-right">&#10148; Submit</button></div>\n                  <div class="clear"></div>\n\n                </div>\n              </div>\n\n              <div class="comments-writer--avatar-con">\n                <div class="comments-writer--avatar" style=""></div>\n              </div>\n              </div></div><span class="dzstooltip--close"><span\n              class="label--x-button">&#10006;</span></span></div></div>', e._scrubbar.appendOnce(i), e._commentsHolder = e.cthis.find(".comments-holder").eq(0), e.$commentsWritter = e.cthis.find(".dzstooltip--comments-writer").eq(0),
                                        function(e) {
                                            var a = jQuery,
                                                t = e.initOptions;
                                            e._commentsHolder && e.$commentsChildren && e.$commentsChildren.each((function() {
                                                var i = a(this);
                                                "on" === t.skinwave_comments_process_in_php && i && i.hasClass && i.hasClass("dzstooltip-con") && (i.find(".dzstooltip > .dzstooltip--inner").length || (i.find(".dzstooltip").wrapInner('<div class="dzstooltip--inner"></div>'), i.find(".the-avatar").addClass("tooltip-indicator"), i.find(".dzstooltip").before(i.find(".tooltip-indicator")), i.find(".dzstooltip").addClass("talign-start style-rounded color-dark-light"))), e._commentsHolder.append(i)
                                            }))
                                        }(e), e._commentsHolder.on("click", (function(a) {
                                            k(e, this, a)
                                        })), e._commentsHolder.on("mousemove", (function(t) {
                                            e._commentsHolder.find(".comments-avatar--placeholder").css("left", (0, a.c6)(t.pageX, t.currentTarget) - 7 + "px")
                                        })), e.$commentsWritter.find(".dzstooltip--close").on("click", (a => {
                                            ! function(e, a) {
                                                b(e)
                                            }(e)
                                        })), e.$commentsWritter.find(".submit-ap-comment").on("click", (a => {
                                            ! function(e, a) {
                                                var t = "";
                                                e.cthis.find("input[name=comment-email]").length && (t = e.cthis.find("input[name=comment-email]").eq(0).val()), T(e, e.cthis.find("*[name=comment-text]").eq(0).val(), t)
                                            }(e)
                                        }))
                                }(g), "on" === _.autoplay && "on" === _.cueMedia && (g.increment_views = 1), "on" === _.cueMedia && "soundcloud" !== g.audioType)
                                if (((0, e.is_android)() || (0, e.is_ios)()) && p.find(".playbtn").on("click", ta), g.data_source && g.data_source.indexOf("{{generatenonce}}") > -1) g.mediaProtectionStatus = "fetchingProtection", (0, e.player_service_getSourceProtection)(g).then((e => {
                                    e && (p.attr("data-source", e), ze({
                                        called_from: "nonce generated",
                                        newSource: e
                                    }), g.mediaProtectionStatus = "protectedMode")
                                }));
                                else {
                                    const a = (0, e.player_isGoingToSetupMediaNow)(g);
                                    "selfHosted" === g.audioType && function(e) {
                                        "icecast" !== e.audioTypeSelfHosted_streamType && "shoutcast" !== e.audioTypeSelfHosted_streamType || (("icecast" === e.audioTypeSelfHosted_streamType || e.radio_isGoingToUpdateArtistName || e.radio_isGoingToUpdateSongName) && E(e), setInterval((function() {
                                            E(e)
                                        }), 1e4))
                                    }(g), a && ze({
                                        called_from: "normal setup media .. --- icecast must wait"
                                    })
                                }
                            else p.find(".playbtn").on("click", ge), p.find(".scrubbar").on("click", ge), De();
                            (0, e.player_determineStickToBottomContainer)(g), (0, e.player_stickToBottomContainerDetermineClasses)(g), g.timeModel.initObjects(), g.setup_media = ze, p.get(0).classInstance = g, p.get(0).api_init_loaded = Oe, p.get(0).api_destroy = fe, p.get(0).api_play = ta, p.get(0).api_set_volume = Je, p.get(0).api_get_last_vol = $e, p.get(0).api_get_source = () => g.data_source, p.get(0).api_click_for_setup_media = ge, p.get(0).api_handleResize = De, p.get(0).api_set_playback_speed = Ye, p.get(0).api_change_media = function(a, i) {
                                return function(s, r = {}) {
                                    const d = {
                                        type: "",
                                        fakeplayer_is_feeder: "off",
                                        called_from: "default",
                                        source: "default",
                                        pcm: "",
                                        artist: "",
                                        song_name: "",
                                        thumb: "",
                                        thumb_link: "",
                                        autoplay: "on",
                                        cue: "on",
                                        feeder_type: "player",
                                        source_player_do_not_update: "off",
                                        playerid: ""
                                    };
                                    a.ajax_view_submitted = "on";
                                    let _ = {
                                        ...d,
                                        ...r
                                    };
                                    var c = a.initOptions;
                                    const u = s;
                                    var p = !0,
                                        m = !1,
                                        h = !1;
                                    let f = !1,
                                        g = "";
                                    u && u.attr && (f = !0), a.reinit_resetMetrics(), a.reinit_beforeChangeMedia(), "string" == typeof u && (m = !0), m || (s.hasClass("audioplayer") || s.hasClass("audioplayer-tobe")) && (h = !0), i(".current-feeder-for-parent-player").removeClass("current-feeder-for-parent-player"), a.$reflectionVisualObject && a.$reflectionVisualObject.removeClass("is-playing"), m && (g = u), f && (g = u.attr("data-source"), a.$reflectionVisualObject = u, _ = {
                                        ..._,
                                        ...e.sanitizeObjectForChangeMediaArgs(u)
                                    }), _.source && "default" != _.source && (g = _.source), a.data_source === g && (p = !1), p && a._sourcePlayer && (a._sourcePlayer.get(0).api_pause_media_visual({
                                        call_from: "change_media"
                                    }), a._sourcePlayer.get(0).api_set_timeVisualTotal(0)), a.cthis.data("original-settings") || "fake" === a.data_source || a.cthis.data("original-settings", e.sanitizeObjectForChangeMediaArgs(a.cthis));
                                    const y = a.data_source;
                                    if (a.data_source = g, (!(m || !u.hasClass("audioplayer") && !u.hasClass("is-zoomsounds-source-player")) || "on" === _.fakeplayer_is_feeder) && (a.set_sourcePlayer(u), a._sourcePlayer && (a.cthis.data("feeding-from", a._sourcePlayer.get(0)), a._sourcePlayer.addClass("current-feeder-for-parent-player"))), !m && u && (u && u.attr("data-playerid") ? a.cthis.attr("data-feed-playerid", u.attr("data-playerid")) : (a.cthis.attr("data-feed-playerid", ""), _.playerid = "")), y === g) return a.cthis.hasClass("is-playing") ? a.pause_media() : a.play_media(), !1;
                                    "detect" !== _.type && "audio" !== _.type && "normal" !== _.type || (_.type = "selfHosted"), a.cthis.removeClass("meta-loaded"), a.cthis.parent().hasClass("audioplayer-was-loaded") && (a.cthis.parent().addClass("audioplayer-loaded"), i("body").addClass("footer-audioplayer-loaded"), a.cthis.parent().removeClass("audioplayer-was-loaded")), a.$stickToBottomContainer && a.$stickToBottomContainer.addClass("audioplayer-loaded"), a.cthis.removeClass(t.OF.ERRORED_OUT_CLASS), a.destroy_media(), a.cthis.attr("data-source", _.source);
                                    const v = _.type;
                                    if ("mediafile" === _.type && (_.type = "audio"), _.type && ("soundcloud" === _.type && (_.type = "audio"), "album_part" === _.type && (_.type = "audio"), a.cthis.attr("data-type", _.type), a.audioType = _.type, c.type = _.type), "skin-wave" === c.design_skin && ("canvas" === c.skinwave_wave_mode && (a._sourcePlayer ? a.data_source = u.attr("data-source") : "string" == typeof u && (a.data_source = u), u && _.pcm ? (a.cthis.attr("data-pcm", u.attr("data-pcm")), a.pcmSource = (0, e.string_jsonConvertToArray)(u.attr("data-pcm")), l(a, u.attr("data-pcm"))) : (e.player_reinit_findIfPcmNeedsGenerating(a), o(a, {}))), _.thumb && (a.cthis.find(".the-thumb").length ? a.cthis.find(".the-thumb").css("background-image", "url(" + _.thumb + ")") : (a.cthis.attr("data-thumb", _.thumb), a.setupStructure_thumbnailCon()))), _.thumb ? (a.cthis.find(".the-thumb").length ? a.cthis.find(".the-thumb").css("background-image", "url(" + _.thumb + ")") : (a.cthis.attr("data-thumb", _.thumb), a.setupStructure_thumbnailCon()), a.cthis.removeClass("does-not-have-thumb"), a.cthis.addClass("has-thumb")) : (a.cthis.addClass("does-not-have-thumb"), a.cthis.removeClass("has-thumb")), "" === _.pcm && a.setup_pcm_random_for_now(), e.player_adjustIdentifiers(a), !m && u) {
                                        var b = null;
                                        u.find(".feed-dzsap-for-extra-html-right").length ? b = u.find(".feed-dzsap-for-extra-html-right").eq(0) : a._sourcePlayer && a._sourcePlayer.attr("data-playerid") && i(document).find('.feed-dzsap-for-extra-html-right[data-playerid="' + a._sourcePlayer.attr("data-playerid") + '"]').length && (b = i(document).find('.feed-dzsap-for-extra-html-right[data-playerid="' + a._sourcePlayer.attr("data-playerid") + '"]').eq(0)), b && a.classMetaParts.set_extraHtmlFloatRight(b.html())
                                    }
                                    if (_.artist && a.cthis.find(".the-artist").html(_.artist), _.song_name && a.cthis.find(".the-name").html(_.song_name), "on" === d.source_player_do_not_update && a.set_sourcePlayer(null), "soundcloud" === v && -1 === _.source.indexOf("api.soundcloud") ? (a.data_source = _.source, a.isPlayPromised = !0, setTimeout((function() {
                                            a.isPlayPromised = !0
                                        }), 501), n(a)) : a.setup_media({
                                            called_from: "change_media"
                                        }), a.timeModel.getSampleTimesFromDom(a._sourcePlayer), "fake" === a.audioType) return !1;
                                    a.initOptions.action_audio_change_media && a.initOptions.action_audio_change_media(_.source, _), "on" === _.autoplay && (a.play_media_visual(), h || setTimeout((function() {
                                        a.play_media({
                                            called_from: "changeMediaArgs.autoplay"
                                        })
                                    }), 100)), a.reinit(), "on" === c.skinwave_enableSpectrum && (a.spectrum_analyser = null), setTimeout((function() {
                                        a.handleResize(null, {
                                            called_from: "change_media"
                                        })
                                    }), 100)
                                }
                            }(g, d), p.get(0).api_seek_to_perc = We, p.get(0).api_seek_to = Ue, p.get(0).api_seek_to_visual = Ge, p.get(0).api_visual_set_volume = Ze, p.get(0).api_destroy_listeners = me, p.get(0).api_pause_media = ea, p.get(0).api_get_media_isLoopActive = () => N, p.get(0).api_media_toggleLoop = Ie, p.get(0).api_pause_media_visual = Xe, p.get(0).api_play_media = ta, p.get(0).api_play_media_visual = aa, p.get(0).api_handle_end = Fe, p.get(0).api_change_visual_target = ce, p.get(0).api_change_design_color_highlight = ue, p.get(0).api_draw_scrub_prog = qe, p.get(0).api_draw_curr_time = Ne, p.get(0).api_get_times = g.timeModel.refreshTimes, p.get(0).api_check_time = je, p.get(0).api_sync_players_goto_next = Le, p.get(0).api_sync_players_goto_prev = He, p.get(0).api_regenerate_playerlist_inner = function() {
                                g.classFunctionalityInnerPlaylist && g.classFunctionalityInnerPlaylist.playlistInner_setupStructureInPlayer()
                            }, p.get(0).api_step_back = function(e) {
                                e || (e = g.keyboard_controls.step_back_amount), Ue(g.timeCurrent - e)
                            }, p.get(0).api_step_forward = function(e) {
                                e || (e = g.keyboard_controls.step_back_amount), Ue(g.timeCurrent + e)
                            }, p.get(0).api_playback_speed = function(e) {
                                g.$mediaNode_ && g.$mediaNode_.playbackRate && (g.$mediaNode_.playbackRate = e)
                            }, p.get(0).api_set_action_audio_play = function(e) {
                                se = e
                            }, p.get(0).api_set_action_audio_pause = function(e) {
                                oe = e
                            }, p.get(0).api_set_action_audio_end = function(e) {
                                ie = e, p.data("has-action-end", "on")
                            }, p.get(0).api_set_action_audio_comment = function(e) {
                                g.action_audio_comment = e
                            }, p.get(0).api_try_to_submit_view = ia, _.action_audio_play && (se = _.action_audio_play), _.action_audio_pause && (oe = _.action_audio_pause), _.action_audio_play2 && (ne = _.action_audio_play2), _.action_audio_end && (ie = _.action_audio_end, p.data("has-action-end", "on")), je({
                                fire_only_once: !0
                            }), "skin-minimal" === _.design_skin && je({
                                fire_only_once: !0
                            }), p.on("click", ".dzsap-repeat-button,.dzsap-loop-button,.btn-zoomsounds-download,.zoomsounds-btn-step-backward,.zoomsounds-btn-step-forward,.zoomsounds-btn-go-beginning,.zoomsounds-btn-slow-playback,.zoomsounds-btn-reset, .tooltip-indicator--btn-footer-playlist", Ae), p.on("mouseenter", Ae), p.on("mouseleave", Ae), g.$conPlayPause.on("click", Re), p.on("click", ".skip-15-sec", (function() {
                                p.get(0).api_step_forward(15)
                            })), d(window).on("resize.dzsap", De), De(), g._scrubbar && g._scrubbar.get(0) && g._scrubbar.get(0).addEventListener("touchstart", (function(e) {
                                g.isPlayerPlaying && (J = !0)
                            }), {
                                passive: !0
                            }), d(document).on("touchmove", (function(e) {
                                if (J) return Z = e.originalEvent.touches[0].pageX, (K = Z - g._scrubbar.offset().left) < 0 && (K = 0), K > g._scrubbar.width() && (K = g._scrubbar.width()), We(K / g._scrubbar.width(), {
                                    call_from: "touch move"
                                }), !1
                            })), d(document).on("touchend", (function(e) {
                                J = !1
                            })), _.skinwave_comments_mode_outer_selector && (g.$commentsSelector = d(_.skinwave_comments_mode_outer_selector), g.$commentsSelector.data ? (g.$commentsSelector.data("parent", p), window.dzsap_settings.comments_username && g.$commentsSelector.find(".comment_email,*[name=comment_user]").remove(), g.$commentsSelector.on("click", ".dzstooltip--close,.comments-btn-submit", z), g.$commentsSelector.on("focusin", "input", z), g.$commentsSelector.on("focusout", "input", z)) : console.log("%c, data not available .. ", "color: #990000;", d(_.skinwave_comments_mode_outer_selector))), p.off("click", ".btn-like"), p.on("click", ".btn-like", he), (0, e.waitForScriptToBeAvailableThenExecute)(window.dzsap_part_starRatings_loaded, (function() {
                                window.dzsap_init_starRatings_from_dzsap(g)
                            })), setTimeout((function() {
                                De(), "canvas" === _.skinwave_wave_mode && (_e(), setTimeout((function() {
                                    _e()
                                }), 100))
                            }), 100), p.find(".btn-menu-state").eq(0).on("click", ye), p.on("click", ".prev-btn,.next-btn", Ae)
                        }
                    }()
            }
        }
        window.dzsap_singleton_ready_calls_is_called = !1, window.dzsap_get_base_url = function() {
            window.dzsap_base_url = window.dzsap_settings && window.dzsap_settings.pluginurl ? window.dzsap_settings.pluginurl : (0, a.SV)("dzsap_base_url", "audioplayer.js")
        }, window.dzsap_currplayer_focused = null, window.dzsap_currplayer_from_share = null, window.dzsap_mouseover = !1, window.dzsap_init_allPlayers = function(e) {
            const a = e(".dzsap-feed--dzsap-configs");
            a.length && (window.dzsap_apconfigs = JSON.parse(a.last().html())), e(".audioplayer.auto-init,.audioplayer-tobe.auto-init").each((function() {
                const a = e(this);
                a.hasClass("audioplayer-tobe") && window.dzsap_init && dzsap_init(a)
            }))
        }, async function(e, a) {
            return new Promise(((e, a) => {
                if (window.jQuery) e("jQuery loaded");
                else {
                    var i = document.createElement("script");
                    i.onload = function() {
                        window.jQuery ? e("jQuery loaded") : a("error loading")
                    }, i.src = t.OF.URL_JQUERY, document.head.appendChild(i)
                }
                setTimeout((() => {
                    a("error loading")
                }), 15e3)
            }))
        }().then((() => {
            window.dzsap_settings || (window.dzsap_settings = {}),
                function(a) {
                    (0, e.assignHelperFunctionsToJquery)(a), a.fn.audioplayer = function(t) {
                            let i = {};
                            const s = Object.assign({}, q);
                            i = (0, e.convertPluginOptionsToFinalOptions)(this, s, t), this.each((function() {
                                return new L(this, Object.assign({}, i), a)
                            }))
                        },
                        function(a) {
                            a.fn.audiogallery = function(t) {
                                let i = {};
                                const s = {
                                    ...P
                                };
                                i = e.convertPluginOptionsToFinalOptions(this, s, t), this.each((function() {
                                    this.linkedClassInstance = new O(this, i, a)
                                }))
                            }, window.dzsag_init = function(e, t) {
                                a(e).audiogallery(Object.assign({}, t))
                            }
                        }(a)
                }(jQuery), jQuery(document).ready((function(a) {
                    window.dzsap_get_base_url(), window.dzsap_singleton_ready_calls_is_called || (0, e.dzsap_singleton_ready_calls)(), window.dzsap_init_allGalleries(a), (0, e.jQueryAuxBindings)(a), window.dzsap_init_allPlayers(a)
                })), window.dzsap_player_isOneTimeSetuped || (j(), window.dzsap_player_isOneTimeSetuped = !0)
        })).catch((e => {
            console.log(e)
        })), window.dzsap_init = function(e, a) {
            jQuery(e).audioplayer(Object.assign({}, a)), window.dzsap_lasto = a
        }, (0, e.playerRegisterWindowFunctions)()
    })()
})();
//# sourceMappingURL=audioplayer.js.map