(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"start":"this.playAudioList([this.audio_AC0234F7_BF46_C50C_41DC_6788F801107E], true); this.init()","minWidth":20,"gap":10,"definitions": [{"loop":false,"audio":{"class":"AudioResource","oggUrl":"media/audio_AC0234F7_BF46_C50C_41DC_6788F801107E.ogg","mp3Url":"media/audio_AC0234F7_BF46_C50C_41DC_6788F801107E.mp3"},"class":"MediaAudio","data":{"label":"y2meta.com - Jingle Bell Rock (Instrumental) (128 kbps)"},"autoplay":true,"id":"audio_AC0234F7_BF46_C50C_41DC_6788F801107E"},{"automaticZoomSpeed":10,"initialPosition":{"yaw":-57.21,"class":"PanoramaCameraPosition","hfov":115,"pitch":-2.06},"initialSequence":"this.sequence_B526845B_BF3A_4504_41C5_A52589B79309","hoverFactor":0,"class":"PanoramaCamera","id":"panorama_B53B7C4F_BF3B_C51C_41D3_4CA465F13965_camera"},{"partial":false,"hfov":360,"adjacentPanoramas":[{"panorama":"this.panorama_B5340F18_BF3B_C304_41D7_43337B6A8457","yaw":89.61,"select":"this.overlay_B2BA9407_BF3E_450C_41E5_4C7CD7510935.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_B2BA9407_BF3E_450C_41E5_4C7CD7510935"},"backwardYaw":87.36,"distance":12.39,"class":"AdjacentPanorama"}],"thumbnailUrl":"media/panorama_B44572C0_BF3B_DD05_41E1_29AB6AB2E6C6_t.jpg","hfovMin":"120%","overlays":["this.overlay_B2BA9407_BF3E_450C_41E5_4C7CD7510935"],"pitch":0,"id":"panorama_B44572C0_BF3B_DD05_41E1_29AB6AB2E6C6","frames":[{"cube":{"levels":[{"tags":"ondemand","width":15360,"rowCount":5,"url":"media/panorama_B44572C0_BF3B_DD05_41E1_29AB6AB2E6C6_0/{face}/0/{row}_{column}.jpg","colCount":30,"height":2560,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":9216,"rowCount":3,"url":"media/panorama_B44572C0_BF3B_DD05_41E1_29AB6AB2E6C6_0/{face}/1/{row}_{column}.jpg","colCount":18,"height":1536,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":6144,"rowCount":2,"url":"media/panorama_B44572C0_BF3B_DD05_41E1_29AB6AB2E6C6_0/{face}/2/{row}_{column}.jpg","colCount":12,"height":1024,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"width":3072,"rowCount":1,"url":"media/panorama_B44572C0_BF3B_DD05_41E1_29AB6AB2E6C6_0/{face}/3/{row}_{column}.jpg","colCount":6,"height":512,"class":"TiledImageResourceLevel"},{"tags":"mobilevr","width":9216,"rowCount":1,"url":"media/panorama_B44572C0_BF3B_DD05_41E1_29AB6AB2E6C6_0/{face}/vr/0.jpg","colCount":6,"height":1536,"class":"TiledImageResourceLevel"},{"tags":"mobilevr2gen","width":12288,"rowCount":1,"url":"media/panorama_B44572C0_BF3B_DD05_41E1_29AB6AB2E6C6_0/{face}/vr2gen/0.jpg","colCount":6,"height":2048,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B44572C0_BF3B_DD05_41E1_29AB6AB2E6C6_t.jpg"}],"label":trans('panorama_B44572C0_BF3B_DD05_41E1_29AB6AB2E6C6.label'),"class":"Panorama","data":{"label":"Fachada 1"},"hfovMax":130,"vfov":180},{"firstTransitionDuration":0,"progressBackgroundOpacity":1,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBackgroundColor":["#111111","#666666"],"vrPointerSelectionColor":"#FF6600","playbackBarOpacity":1,"translationTransitionDuration":1000,"progressBorderRadius":0,"subtitlesFontWeight":"normal","playbackBarHeadShadowHorizontalLength":0,"toolTipPaddingLeft":6,"width":"100%","playbackBarBottom":5,"toolTipPaddingRight":6,"toolTipFontFamily":"Arial","id":"MainViewer","subtitlesBottom":50,"progressLeft":0,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesPaddingLeft":5,"paddingLeft":0,"progressBarOpacity":1,"toolTipPaddingBottom":4,"paddingRight":0,"toolTipShadowSpread":0,"progressBackgroundColor":["#FFFFFF"],"playbackBarBackgroundColor":["#FFFFFF"],"toolTipOpacity":1,"vrPointerSelectionTime":2000,"subtitlesPaddingRight":5,"toolTipShadowVerticalLength":0,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeight":10,"playbackBarProgressBorderSize":0,"subtitlesTop":0,"playbackBarHeadShadowVerticalLength":0,"playbackBarHeadWidth":6,"vrPointerColor":"#FFFFFF","height":"100%","playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","toolTipBorderRadius":3,"toolTipShadowOpacity":1,"progressBackgroundColorRatios":[0],"borderRadius":0,"progressRight":0,"toolTipTextShadowOpacity":0,"toolTipFontStyle":"normal","subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","toolTipHorizontalAlign":"center","class":"ViewerArea","playbackBarProgressBorderRadius":0,"subtitlesPaddingBottom":5,"progressBottom":0,"progressOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBackgroundOpacity":0.2,"propagateClick":false,"progressBarBackgroundColorDirection":"vertical","toolTipBorderSize":1,"minWidth":100,"playbackBarHeadShadowOpacity":0.7,"borderSize":0,"progressBarBackgroundColorRatios":[0],"toolTipFontWeight":"normal","progressBarBorderColor":"#000000","progressHeight":10,"surfaceReticleColor":"#FFFFFF","minHeight":50,"subtitlesTextDecoration":"none","surfaceReticleOpacity":0.6,"toolTipDisplayTime":600,"progressBorderSize":0,"progressBackgroundColorDirection":"vertical","subtitlesBorderColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"subtitlesTextShadowBlurRadius":0,"subtitlesFontFamily":"Arial","subtitlesTextShadowHorizontalLength":1,"paddingTop":0,"subtitlesTextShadowVerticalLength":1,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"paddingBottom":0,"toolTipPaddingTop":4,"subtitlesPaddingTop":5,"surfaceReticleSelectionColor":"#FFFFFF","transitionDuration":500,"playbackBarLeft":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBorderColor":"#000000","playbackBarHeadHeight":15,"progressBorderColor":"#000000","subtitlesOpacity":1,"toolTipTextShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","toolTipBorderColor":"#767676","subtitlesGap":0,"toolTipFontColor":"#606060","subtitlesHorizontalAlign":"center","surfaceReticleSelectionOpacity":1,"playbackBarHeadBorderRadius":0,"subtitlesVerticalAlign":"bottom","playbackBarBorderRadius":0,"progressBarBorderRadius":0,"playbackBarProgressOpacity":1,"playbackBarHeadShadowColor":"#000000","subtitlesShadow":false,"toolTipTextShadowColor":"#000000","doubleClickAction":"toggle_fullscreen","playbackBarHeadBorderColor":"#000000","transitionMode":"blending","toolTipShadowBlurRadius":3,"playbackBarHeadBorderSize":0,"subtitlesTextShadowOpacity":1,"playbackBarHeadShadow":true,"progressBarBorderSize":0,"subtitlesBorderSize":0,"displayTooltipInTouchScreens":true,"playbackBarHeadOpacity":1,"playbackBarBorderSize":0,"toolTipShadowColor":"#333333","subtitlesEnabled":true,"playbackBarBackgroundOpacity":1,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontColor":"#FFFFFF","displayTooltipInSurfaceSelection":true,"toolTipShadowHorizontalLength":0,"data":{"name":"Main Viewer"},"toolTipFontSize":"1.11vmin","shadow":false},{"automaticZoomSpeed":10,"initialPosition":{"yaw":88.69,"class":"PanoramaCameraPosition","hfov":120,"pitch":-1.41},"initialSequence":"this.sequence_B522F45A_BF3A_4504_41E3_65F3D1F96B04","displayMovements":[{"duration":1000,"easing":"linear","class":"TargetRotationalCameraDisplayMovement"},{"targetPitch":-1.41,"class":"TargetRotationalCameraDisplayMovement","targetHfov":120,"targetStereographicFactor":0,"duration":3000,"easing":"cubic_in_out"}],"class":"PanoramaCamera","displayOriginPosition":{"stereographicFactor":1,"yaw":88.69,"class":"RotationalCameraDisplayPosition","hfov":165,"pitch":-90},"hoverFactor":0,"id":"panorama_B44572C0_BF3B_DD05_41E1_29AB6AB2E6C6_camera"},{"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","zoomEnabled":true,"aaEnabled":true,"surfaceSelectionEnabled":false,"id":"MainViewerPanoramaPlayer"},{"partial":false,"hfov":360,"adjacentPanoramas":[{"panorama":"this.panorama_B44572C0_BF3B_DD05_41E1_29AB6AB2E6C6","yaw":87.36,"select":"this.overlay_B1AE0EAA_BF3E_C504_41A3_556FD53F8374.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_B1AE0EAA_BF3E_C504_41A3_556FD53F8374"},"backwardYaw":89.61,"distance":100,"class":"AdjacentPanorama"},{"panorama":"this.panorama_B53B7C4F_BF3B_C51C_41D3_4CA465F13965","yaw":-93.86,"select":"this.overlay_B1F3FD62_BF3E_4704_41C7_A94D2C74CAAD.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_B1F3FD62_BF3E_4704_41C7_A94D2C74CAAD"},"backwardYaw":117.78,"distance":11.13,"class":"AdjacentPanorama"}],"thumbnailUrl":"media/panorama_B5340F18_BF3B_C304_41D7_43337B6A8457_t.jpg","hfovMin":"120%","overlays":["this.overlay_B1AE0EAA_BF3E_C504_41A3_556FD53F8374","this.overlay_B1F3FD62_BF3E_4704_41C7_A94D2C74CAAD"],"pitch":0,"id":"panorama_B5340F18_BF3B_C304_41D7_43337B6A8457","frames":[{"cube":{"levels":[{"tags":"ondemand","width":15360,"rowCount":5,"url":"media/panorama_B5340F18_BF3B_C304_41D7_43337B6A8457_0/{face}/0/{row}_{column}.jpg","colCount":30,"height":2560,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":9216,"rowCount":3,"url":"media/panorama_B5340F18_BF3B_C304_41D7_43337B6A8457_0/{face}/1/{row}_{column}.jpg","colCount":18,"height":1536,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":6144,"rowCount":2,"url":"media/panorama_B5340F18_BF3B_C304_41D7_43337B6A8457_0/{face}/2/{row}_{column}.jpg","colCount":12,"height":1024,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"width":3072,"rowCount":1,"url":"media/panorama_B5340F18_BF3B_C304_41D7_43337B6A8457_0/{face}/3/{row}_{column}.jpg","colCount":6,"height":512,"class":"TiledImageResourceLevel"},{"tags":"mobilevr","width":9216,"rowCount":1,"url":"media/panorama_B5340F18_BF3B_C304_41D7_43337B6A8457_0/{face}/vr/0.jpg","colCount":6,"height":1536,"class":"TiledImageResourceLevel"},{"tags":"mobilevr2gen","width":12288,"rowCount":1,"url":"media/panorama_B5340F18_BF3B_C304_41D7_43337B6A8457_0/{face}/vr2gen/0.jpg","colCount":6,"height":2048,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B5340F18_BF3B_C304_41D7_43337B6A8457_t.jpg"}],"label":trans('panorama_B5340F18_BF3B_C304_41D7_43337B6A8457.label'),"class":"Panorama","data":{"label":"Fachada 2"},"hfovMax":130,"vfov":180},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_B44572C0_BF3B_DD05_41E1_29AB6AB2E6C6_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_B44572C0_BF3B_DD05_41E1_29AB6AB2E6C6"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_B5340F18_BF3B_C304_41D7_43337B6A8457_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","media":"this.panorama_B5340F18_BF3B_C304_41D7_43337B6A8457"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_B53B7C4F_BF3B_C51C_41D3_4CA465F13965_camera","media":"this.panorama_B53B7C4F_BF3B_C51C_41D3_4CA465F13965","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"automaticZoomSpeed":10,"initialPosition":{"yaw":-96.09,"class":"PanoramaCameraPosition","hfov":115,"pitch":-8.64},"initialSequence":"this.sequence_B526545B_BF3A_4504_41DB_79E526806F0C","hoverFactor":0,"class":"PanoramaCamera","id":"panorama_B5340F18_BF3B_C304_41D7_43337B6A8457_camera"},{"partial":false,"hfov":360,"adjacentPanoramas":[{"panorama":"this.panorama_B5340F18_BF3B_C304_41D7_43337B6A8457","yaw":117.78,"select":"this.overlay_B037E021_BF3A_7D04_41AC_1442F9DDF97F.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_B037E021_BF3A_7D04_41AC_1442F9DDF97F"},"backwardYaw":-93.86,"distance":100,"class":"AdjacentPanorama"}],"thumbnailUrl":"media/panorama_B53B7C4F_BF3B_C51C_41D3_4CA465F13965_t.jpg","hfovMin":"120%","overlays":["this.overlay_B037E021_BF3A_7D04_41AC_1442F9DDF97F"],"pitch":0,"id":"panorama_B53B7C4F_BF3B_C51C_41D3_4CA465F13965","frames":[{"cube":{"levels":[{"tags":"ondemand","width":15360,"rowCount":5,"url":"media/panorama_B53B7C4F_BF3B_C51C_41D3_4CA465F13965_0/{face}/0/{row}_{column}.jpg","colCount":30,"height":2560,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":9216,"rowCount":3,"url":"media/panorama_B53B7C4F_BF3B_C51C_41D3_4CA465F13965_0/{face}/1/{row}_{column}.jpg","colCount":18,"height":1536,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":6144,"rowCount":2,"url":"media/panorama_B53B7C4F_BF3B_C51C_41D3_4CA465F13965_0/{face}/2/{row}_{column}.jpg","colCount":12,"height":1024,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"width":3072,"rowCount":1,"url":"media/panorama_B53B7C4F_BF3B_C51C_41D3_4CA465F13965_0/{face}/3/{row}_{column}.jpg","colCount":6,"height":512,"class":"TiledImageResourceLevel"},{"tags":"mobilevr","width":9216,"rowCount":1,"url":"media/panorama_B53B7C4F_BF3B_C51C_41D3_4CA465F13965_0/{face}/vr/0.jpg","colCount":6,"height":1536,"class":"TiledImageResourceLevel"},{"tags":"mobilevr2gen","width":12288,"rowCount":1,"url":"media/panorama_B53B7C4F_BF3B_C51C_41D3_4CA465F13965_0/{face}/vr2gen/0.jpg","colCount":6,"height":2048,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B53B7C4F_BF3B_C51C_41D3_4CA465F13965_t.jpg"}],"label":trans('panorama_B53B7C4F_BF3B_C51C_41D3_4CA465F13965.label'),"class":"Panorama","data":{"label":"Fachada 3"},"hfovMax":130,"vfov":180},{"class":"PlayerMenuItem","label":"@meunegocioweb360","id":"TDVAuthor"},{"movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_B526845B_BF3A_4504_41C5_A52589B79309"},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Circle Arrow 01"},"areas":["this.HotspotPanoramaOverlayArea_B13544B1_BF3E_4504_41C8_B2BDFE5CE5EE"],"maps":[],"items":[{"image":"this.AnimatedImageResource_AED8FD12_BF5E_C704_41B4_E840A9A53127","distance":100,"yaw":89.61,"horizontalAlign":"center","hfov":18.2,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Arrow 01"},"verticalAlign":"middle","pitch":-7.8,"vfov":18.02,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_B2BA9407_BF3E_450C_41E5_4C7CD7510935"},{"movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_B522F45A_BF3A_4504_41E3_65F3D1F96B04"},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","data":{"label":"Circle Arrow 01"},"areas":["this.HotspotPanoramaOverlayArea_B1A97EAC_BF3E_C51C_41E4_F7A0DC3D3D4E"],"maps":[],"items":[{"image":"this.AnimatedImageResource_AED88D12_BF5E_C704_41E6_8A5DDCCD1C48","distance":100,"yaw":87.36,"horizontalAlign":"center","hfov":18.2,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Arrow 01"},"verticalAlign":"middle","pitch":7.42,"vfov":18.02,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_B1AE0EAA_BF3E_C504_41A3_556FD53F8374"},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Circle Arrow 01"},"areas":["this.HotspotPanoramaOverlayArea_B1F33D62_BF3E_4704_41D8_7F8CA97D7AF4"],"maps":[],"items":[{"image":"this.AnimatedImageResource_AED8AD12_BF5E_C704_41AE_44CE485E2079","distance":100,"yaw":-93.86,"horizontalAlign":"center","hfov":18.2,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Arrow 01"},"verticalAlign":"middle","pitch":-8.67,"vfov":18.02,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_B1F3FD62_BF3E_4704_41C7_A94D2C74CAAD"},{"movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_B526545B_BF3A_4504_41DB_79E526806F0C"},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","data":{"label":"Circle Arrow 01"},"areas":["this.HotspotPanoramaOverlayArea_B037D021_BF3A_7D04_41D7_284882B88429"],"maps":[],"items":[{"image":"this.AnimatedImageResource_AEDB7D12_BF5E_C704_41D2_B8D9753F1C3A","distance":100,"yaw":117.78,"horizontalAlign":"center","hfov":18.2,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Arrow 01"},"verticalAlign":"middle","pitch":19.08,"vfov":18.02,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_B037E021_BF3A_7D04_41AC_1442F9DDF97F"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_B13544B1_BF3E_4504_41C8_B2BDFE5CE5EE"},{"frameDuration":41,"rowCount":6,"frameCount":24,"levels":[{"height":1200,"width":800,"class":"ImageResourceLevel","url":"media/res_AD6D6C9E_BF4E_453C_41C1_9FC621ED81CB_0.png"}],"class":"AnimatedImageResource","colCount":4,"id":"AnimatedImageResource_AED8FD12_BF5E_C704_41B4_E840A9A53127"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_B1A97EAC_BF3E_C51C_41E4_F7A0DC3D3D4E"},{"frameDuration":41,"rowCount":6,"frameCount":24,"levels":[{"height":1200,"width":800,"class":"ImageResourceLevel","url":"media/res_AD6D6C9E_BF4E_453C_41C1_9FC621ED81CB_0.png"}],"class":"AnimatedImageResource","colCount":4,"id":"AnimatedImageResource_AED88D12_BF5E_C704_41E6_8A5DDCCD1C48"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_B1F33D62_BF3E_4704_41D8_7F8CA97D7AF4"},{"frameDuration":41,"rowCount":6,"frameCount":24,"levels":[{"height":1200,"width":800,"class":"ImageResourceLevel","url":"media/res_AD6D6C9E_BF4E_453C_41C1_9FC621ED81CB_0.png"}],"class":"AnimatedImageResource","colCount":4,"id":"AnimatedImageResource_AED8AD12_BF5E_C704_41AE_44CE485E2079"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_B037D021_BF3A_7D04_41D7_284882B88429"},{"frameDuration":41,"rowCount":6,"frameCount":24,"levels":[{"height":1200,"width":800,"class":"ImageResourceLevel","url":"media/res_AD6D6C9E_BF4E_453C_41C1_9FC621ED81CB_0.png"}],"class":"AnimatedImageResource","colCount":4,"id":"AnimatedImageResource_AEDB7D12_BF5E_C704_41D2_B8D9753F1C3A"}],"width":"100%","scrollBarColor":"#000000","paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"horizontalAlign":"left","paddingBottom":0,"paddingLeft":0,"contentOpaque":false,"paddingRight":0,"backgroundColorDirection":"vertical","vrPolyfillScale":0.75,"scrollBarOpacity":0.5,"scrollBarWidth":10,"backgroundPreloadEnabled":true,"scrollBarMargin":2,"backgroundOpacity":1,"children":["this.MainViewer"],"mobileMipmappingEnabled":false,"height":"100%","scrollBarVisible":"rollOver","backgroundColor":["#FFFFFF"],"downloadEnabled":false,"desktopMipmappingEnabled":false,"verticalAlign":"top","backgroundColorRatios":[0],"borderRadius":0,"overflow":"hidden","scripts":{"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"shareSocial":TDV.Tour.Script.shareSocial,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getKey":TDV.Tour.Script.getKey,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getOverlays":TDV.Tour.Script.getOverlays,"playAudioList":TDV.Tour.Script.playAudioList,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"clone":TDV.Tour.Script.clone,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"openLink":TDV.Tour.Script.openLink,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"init":TDV.Tour.Script.init,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getComponentByName":TDV.Tour.Script.getComponentByName,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"mixObject":TDV.Tour.Script.mixObject,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMediaByName":TDV.Tour.Script.getMediaByName,"existsKey":TDV.Tour.Script.existsKey,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"registerKey":TDV.Tour.Script.registerKey,"setMapLocation":TDV.Tour.Script.setMapLocation,"unregisterKey":TDV.Tour.Script.unregisterKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isPanorama":TDV.Tour.Script.isPanorama,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"initQuiz":TDV.Tour.Script.initQuiz,"quizShowScore":TDV.Tour.Script.quizShowScore,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"textToSpeech":TDV.Tour.Script.textToSpeech,"downloadFile":TDV.Tour.Script.downloadFile,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setValue":TDV.Tour.Script.setValue,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setLocale":TDV.Tour.Script.setLocale,"cloneCamera":TDV.Tour.Script.cloneCamera,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPixels":TDV.Tour.Script.getPixels,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizStart":TDV.Tour.Script.quizStart,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizFinish":TDV.Tour.Script.quizFinish,"showPopupImage":TDV.Tour.Script.showPopupImage,"translate":TDV.Tour.Script.translate,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem},"layout":"absolute","mediaActivationMode":"window","toolTipHorizontalAlign":"center","class":"Player","defaultVRPointer":"laser","menu":["this.TDVAuthor"],"propagateClick":false,"borderSize":0,"data":{"defaultLocale":"pt","textToSpeechConfig":{"speechOnTooltip":false,"volume":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"pitch":1,"rate":1},"name":"Player576","locales":{"pt":"locale/pt.txt"}},"shadow":false,"minHeight":20};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.16.js.map
//Generated with v2021.2.16, Wed Dec 15 2021