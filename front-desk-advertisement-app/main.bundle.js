webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/general-tv-advs/general-tv-advs.module": [
		"./src/app/general-tv-advs/general-tv-advs.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n\n<html lang=\"en\">\n\n<head>\n  <base href=\"/\">\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n  <title>Blue Cross Blue Shield MA</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n  <base href=\"http://localhost:4201/\">\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n\n  <link href=\"/assets/fonts/lib/googleFonts/icon.css\" rel=\"stylesheet\">\n  <!-- <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"> -->\n\n  <link href='/assets/fonts/lib/googleFonts/css.css' rel='stylesheet' type='text/css'>\n  <!-- <link href='https://fonts.googleapis.com/css?family=Roboto&subset=latin,greek,greek-ext,latin-ext,cyrillic' rel='stylesheet'\n    type='text/css'> -->\n\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.13/css/all.css\" integrity=\"sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp\"\n    crossorigin=\"anonymous\">\n  <script defer type=\"text/javascript\" src=\"/assets/fonts/lib/fontawesome/all.js\"></script>\n\n  <!-- cdnjs -->\n  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/video.js/6.7.3/video-js.css\" rel=\"stylesheet\">\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/video.js/6.7.3/video.js\"></script>\n</head>\n\n<body style=\"overflow: hidden;\">\n  <div style=\"width: 100%;overflow: hidden;\">\n\n    <!-- Welcome to my hive - app component Level 1 component -->\n\n    <router-outlet>\n    </router-outlet>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  overflow: hidden !important; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_router__ = __webpack_require__("./src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_tv_advs_general_tv_advs_module__ = __webpack_require__("./src/app/general-tv-advs/general-tv-advs.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_app_error_handler_service__ = __webpack_require__("./src/app/shared/services/app-error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_app_http_service__ = __webpack_require__("./src/app/shared/services/app-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__general_tv_advs_general_tv_advs_module__["GeneralTvAdvsModule"],
                __WEBPACK_IMPORTED_MODULE_3__app_router__["a" /* appRouter */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__shared_services_app_error_handler_service__["a" /* AppErrorHandlerService */],
                __WEBPACK_IMPORTED_MODULE_6__shared_services_app_http_service__["a" /* AppHttpService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");

var router = [
    {
        path: '',
        redirectTo: '/front-desk-advs',
        pathMatch: 'full'
    },
    {
        path: 'front-desk-advs',
        // canActivate: [AuthGuard, ScopeGuard],
        loadChildren: 'app/general-tv-advs/general-tv-advs.module#GeneralTvAdvsModule'
    }
];
var appRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(router);


/***/ }),

/***/ "./src/app/general-tv-advs/constants/general-tv-advs.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralTVAdvsConstant; });
var GeneralTVAdvsConstant = Object.freeze({
    modules: {
        generalTvAdvsModule: 'generalTvAdvsModule'
    },
    components: {
        videoAdvHorzMarqueeComponent: 'VideoAdvHorzMarqueeComponent'
    },
    services: {
        videoAdvHorzMarqueeService: 'VideoAdvHorzMarqueeService'
    },
    methods: {
        getSearchFilters: 'getSearchFilters',
        ngOnInit: 'ngOnInit'
    }
});


/***/ }),

/***/ "./src/app/general-tv-advs/general-tv-advs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralTvAdvsModule", function() { return GeneralTvAdvsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_adv_horz_marquee_video_adv_horz_marquee_component__ = __webpack_require__("./src/app/general-tv-advs/video-adv-horz-marquee/video-adv-horz-marquee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_tv_advs_router__ = __webpack_require__("./src/app/general-tv-advs/general-tv-advs.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__video_adv_horz_marquee_video_adv_horz_marquee_service__ = __webpack_require__("./src/app/general-tv-advs/video-adv-horz-marquee/video-adv-horz-marquee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_app_error_handler_service__ = __webpack_require__("./src/app/shared/services/app-error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_app_http_service__ = __webpack_require__("./src/app/shared/services/app-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var GeneralTvAdvsModule = /** @class */ (function () {
    function GeneralTvAdvsModule() {
    }
    GeneralTvAdvsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__general_tv_advs_router__["a" /* GeneralTvAdvsModuleRouter */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__video_adv_horz_marquee_video_adv_horz_marquee_component__["a" /* VideoAdvHorzMarqueeComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__shared_services_app_error_handler_service__["a" /* AppErrorHandlerService */],
                __WEBPACK_IMPORTED_MODULE_6__shared_services_app_http_service__["a" /* AppHttpService */],
                __WEBPACK_IMPORTED_MODULE_4__video_adv_horz_marquee_video_adv_horz_marquee_service__["a" /* VideoAdvHorzMarqueeService */]
            ]
        })
    ], GeneralTvAdvsModule);
    return GeneralTvAdvsModule;
}());



/***/ }),

/***/ "./src/app/general-tv-advs/general-tv-advs.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralTvAdvsModuleRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_adv_horz_marquee_video_adv_horz_marquee_component__ = __webpack_require__("./src/app/general-tv-advs/video-adv-horz-marquee/video-adv-horz-marquee.component.ts");


var GeneralTvAdvsRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__video_adv_horz_marquee_video_adv_horz_marquee_component__["a" /* VideoAdvHorzMarqueeComponent */]
    }
];
var GeneralTvAdvsModuleRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(GeneralTvAdvsRoutes);


/***/ }),

/***/ "./src/app/general-tv-advs/video-adv-horz-marquee/video-adv-horz-marquee.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"video-adv-horz-marquee\" *ngIf=\"videoHorzMarqueePageData?.videoFilesToPlay?.length>0\">\n  <div class=\"videoSection\">\n\n    <video id=\"my_video_1\" class=\"video-js\" controls preload=\"auto\" width=\"640\" height=\"268\">\n      <source src=\"http://vjs.zencdn.net/v/oceans.mp4\" type='video/mp4'>\n      <source src=\"http://vjs.zencdn.net/v/oceans.webm\" type='video/webm'>\n    </video>\n\n    <video id=\"video-adv-horz-marquee-player\" class=\"video-js  vjs-default-skin\" controls preload=\"auto\" data-setup='{ \"playbackRates\": [0.5, 1, 1.5, 2],\"loopbutton\": true  }'\n      loop #bannerVideo [poster]=\"videoHorzMarqueePageData?.videoFilesToPlay[0].poster\">\n      <source [src]=\"videoHorzMarqueePageData?.videoFilesToPlay[0].name\" type=\"video/mp4\">\n      <source [src]=\"videoHorzMarqueePageData?.videoFilesToPlay[0].name\" type='video/webm'>\n      <p class=\"vjs-no-js\">\n        To view this video please enable JavaScript, and consider upgrading to a web browser that\n        <a href=\"http://videojs.com/html5-video-support/\" target=\"_blank\">\n          supports HTML5 video\n        </a>\n      </p>\n    </video>\n  </div>\n  <div class=\"banner level-2-banner\" *ngIf=\"videoHorzMarqueePageData?.advsToDisplay?.level2Advs?.display\">\n    <p>\n      <b *ngFor=\"let advItem of videoHorzMarqueePageData?.advsToDisplay?.level2Advs?.contents\">\n        {{advItem.advTitle}}: {{advItem.advText}}</b>\n    </p>\n  </div>\n  <div class=\"banner level-1-banner\" *ngIf=\"videoHorzMarqueePageData?.advsToDisplay?.level1Advs?.display\">\n    <p>\n      <b *ngFor=\"let advItem of videoHorzMarqueePageData?.advsToDisplay?.level1Advs?.contents\">\n        {{advItem.advTitle}}: {{advItem.advText}}</b>\n    </p>\n  </div>\n  <div class=\"banner\" *ngIf=\"videoHorzMarqueePageData?.advsToDisplay?.normalAdvs?.display\">\n    <p>\n      <b *ngFor=\"let advItem of videoHorzMarqueePageData?.advsToDisplay?.normalAdvs?.contents\">\n        <i class=\"fa fa-american-sign-language-interpreting\"> </i>\n        &nbsp;&nbsp;{{advItem.advTitle}}: {{advItem.advText}}&nbsp;&nbsp;\n      </b>\n    </p>\n  </div>\n\n  <script type=\"text/javascript\">\n    videojs('video-adv-horz-marquee-player', {\n      plugins: {\n        loopbutton: true\n      }\n    }, function () {\n      // Player (this) is initialized and ready.\n    });\n  </script>\n</section>"

/***/ }),

/***/ "./src/app/general-tv-advs/video-adv-horz-marquee/video-adv-horz-marquee.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  overflow: hidden !important; }\n\n.video-adv-horz-marquee {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  background-color: #000000;\n  height: 98vh;\n  width: 100vw; }\n\n.video-adv-horz-marquee ::ng-deep button.vjs-big-play-button {\n    position: absolute !important;\n    top: 0px !important;\n    left: 0px !important;\n    right: 0px !important;\n    bottom: 0px !important;\n    margin: auto !important; }\n\n.video-adv-horz-marquee .videoSection {\n    -webkit-box-flex: 10;\n        -ms-flex: 10;\n            flex: 10;\n    width: 100vw;\n    position: relative;\n    text-align: center;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n\n.video-adv-horz-marquee .videoSection .video-js {\n      width: 100vw;\n      position: absolute;\n      text-align: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      margin: auto;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0; }\n\n.video-adv-horz-marquee .videoSection .video-js video {\n        height: 100%;\n        -o-object-fit: fill;\n           object-fit: fill; }\n\n.video-adv-horz-marquee .banner {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    background-color: #32527B;\n    color: white;\n    width: 100%;\n    line-height: 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n.video-adv-horz-marquee .banner.level-1-banner {\n      background-color: #8A0707; }\n\n.video-adv-horz-marquee .banner p {\n      display: inline-block;\n      padding-left: 100%;\n      -webkit-animation: banner 190s linear infinite;\n              animation: banner 190s linear infinite;\n      -webkit-animation-delay: 2s;\n              animation-delay: 2s;\n      text-rendering: optimizeLegibility;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      /*&:hover {\r\n                -webkit-animation-play-state: paused;\r\n                -moz-animation-play-state: paused; \r\n                -o-animation-play-state: paused;\r\n                animation-play-state: paused;\r\n            }*/ }\n\n.video-adv-horz-marquee .banner p i {\n        color: gold;\n        font-size: 22px; }\n\n@-webkit-keyframes banner {\n  0% {\n    -webkit-transform: translate(100, 0);\n            transform: translate(100, 0); }\n  100% {\n    -webkit-transform: translate(-100%, 0);\n            transform: translate(-100%, 0); } }\n\n@keyframes banner {\n  0% {\n    -webkit-transform: translate(100, 0);\n            transform: translate(100, 0); }\n  100% {\n    -webkit-transform: translate(-100%, 0);\n            transform: translate(-100%, 0); } }\n"

/***/ }),

/***/ "./src/app/general-tv-advs/video-adv-horz-marquee/video-adv-horz-marquee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoAdvHorzMarqueeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_adv_horz_marquee_service__ = __webpack_require__("./src/app/general-tv-advs/video-adv-horz-marquee/video-adv-horz-marquee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_general_tv_advs_constants__ = __webpack_require__("./src/app/general-tv-advs/constants/general-tv-advs.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_app_error_handler_service__ = __webpack_require__("./src/app/shared/services/app-error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_video_js__ = __webpack_require__("./node_modules/video.js/dist/video.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_video_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_video_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideoAdvHorzMarqueeComponent = /** @class */ (function () {
    function VideoAdvHorzMarqueeComponent(videoAdvHorzMarqueeService, appErrorHandlerService) {
        this.videoAdvHorzMarqueeService = videoAdvHorzMarqueeService;
        this.appErrorHandlerService = appErrorHandlerService;
    }
    VideoAdvHorzMarqueeComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.videoAdvHorzMarqueeService.getSearchFilters().subscribe(function (data) {
                _this.videoHorzMarqueePageData = data;
                setTimeout(function () {
                    try {
                        var options = {};
                        _this.videoPlayer = __WEBPACK_IMPORTED_MODULE_4_video_js__('video-adv-horz-marquee-player', {}, _this.onPlayerReady);
                    }
                    catch (videoPlayExp) {
                        throw videoPlayExp;
                    }
                    // const videoTag: HTMLVideoElement = this.bannerVideo.nativeElement;
                    // const autoPlayPromise = videoTag.play();
                    // if (autoPlayPromise !== undefined) {
                    //   autoPlayPromise.then(_ => {
                    //     // Autoplay started!
                    //   }).catch(error => {
                    //     // Autoplay was prevented.
                    //     // Show a "Play" button so that user can start playback.
                    //     videoTag.controls = true;
                    //   });
                    // }
                }, 300);
            }, function (error) {
                _this.appErrorHandlerService.handleHttpError(error, __WEBPACK_IMPORTED_MODULE_2__constants_general_tv_advs_constants__["a" /* GeneralTVAdvsConstant */].modules.generalTvAdvsModule, __WEBPACK_IMPORTED_MODULE_2__constants_general_tv_advs_constants__["a" /* GeneralTVAdvsConstant */].services.videoAdvHorzMarqueeService, __WEBPACK_IMPORTED_MODULE_2__constants_general_tv_advs_constants__["a" /* GeneralTVAdvsConstant */].methods.getSearchFilters);
            });
        }
        catch (exception) {
            this.appErrorHandlerService.logError(exception, __WEBPACK_IMPORTED_MODULE_2__constants_general_tv_advs_constants__["a" /* GeneralTVAdvsConstant */].modules.generalTvAdvsModule, __WEBPACK_IMPORTED_MODULE_2__constants_general_tv_advs_constants__["a" /* GeneralTVAdvsConstant */].components.videoAdvHorzMarqueeComponent, __WEBPACK_IMPORTED_MODULE_2__constants_general_tv_advs_constants__["a" /* GeneralTVAdvsConstant */].methods.ngOnInit);
        }
    };
    VideoAdvHorzMarqueeComponent.prototype.onPlayerReady = function () {
        __WEBPACK_IMPORTED_MODULE_4_video_js__["log"]('Your player is ready!');
        // In this context, `this` is the player that was created by Video.js.
        this.videoPlayer = this.videoPlayer || this;
        var targetVideoElement = this.videoPlayer.el_.querySelector('#video-adv-horz-marquee-player_html5_api');
        // if (targetVideoElement) {
        //   console.log('video element exists');
        // }
        targetVideoElement.play().then(function (_) {
            //  console.log('targetVideoElement played');
            // Autoplay started!
        }).catch(function (error) {
            // Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
            // console.log('targetVideoElement autoplay errored out');
            targetVideoElement.controls = true;
        });
        // How about an event listener?
        this.videoPlayer.on('ended', function () {
            // videojs.log('Awww...over so soon?!');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('bannerVideo'),
        __metadata("design:type", Object)
    ], VideoAdvHorzMarqueeComponent.prototype, "bannerVideo", void 0);
    VideoAdvHorzMarqueeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-video-adv-horz-marquee',
            template: __webpack_require__("./src/app/general-tv-advs/video-adv-horz-marquee/video-adv-horz-marquee.component.html"),
            styles: [__webpack_require__("./src/app/general-tv-advs/video-adv-horz-marquee/video-adv-horz-marquee.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__video_adv_horz_marquee_service__["a" /* VideoAdvHorzMarqueeService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_app_error_handler_service__["a" /* AppErrorHandlerService */]])
    ], VideoAdvHorzMarqueeComponent);
    return VideoAdvHorzMarqueeComponent;
}());



/***/ }),

/***/ "./src/app/general-tv-advs/video-adv-horz-marquee/video-adv-horz-marquee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoAdvHorzMarqueeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_app_http_service__ = __webpack_require__("./src/app/shared/services/app-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoAdvHorzMarqueeService = /** @class */ (function () {
    function VideoAdvHorzMarqueeService(appHttpService) {
        this.appHttpService = appHttpService;
    }
    VideoAdvHorzMarqueeService.prototype.getSearchFilters = function () {
        var DASHBOARD_SOURCE_URL = '/assets/data/dashboardSource.json';
        return this.appHttpService.get(DASHBOARD_SOURCE_URL);
    };
    VideoAdvHorzMarqueeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_app_http_service__["a" /* AppHttpService */]])
    ], VideoAdvHorzMarqueeService);
    return VideoAdvHorzMarqueeService;
}());



/***/ }),

/***/ "./src/app/shared/services/app-error-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppErrorHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppErrorHandlerService = /** @class */ (function () {
    function AppErrorHandlerService() {
        this.prodMode = false;
    }
    /**
     *
     * @param prodMode
     */
    AppErrorHandlerService.prototype.setProdMode = function (prodMode) {
        this.prodMode = prodMode;
    };
    /**
     *
     * @param exception  - the exception or error that needs to be handled
     * @param moduleName - module in which the error occured
     * @param componentName - component in which the error occured
     * @param methodName - method in which the error occured
     */
    AppErrorHandlerService.prototype.logError = function (exception, moduleName, componentName, methodName) {
        var detailedAppError = '';
        detailedAppError = "Error :: \"" + exception.message + "\" has occured in module >> \"" + moduleName + "\"\n    - component >> \"" + componentName + "\" - method >> \"" + methodName + "\"";
        if (this.prodMode) {
            // code implementation to log or mail errors in production should go here
        }
        if (console && console.error) {
            console.error(detailedAppError);
        }
        this.handleError(exception);
    };
    /**
     *
     * @param error  - the exception or error that needs to be handled
     * @param moduleName - module in which the error occured
     * @param serviceName - service in which the error occured
     * @param methodName  - method in which the error occured
     */
    AppErrorHandlerService.prototype.handleHttpError = function (error, moduleName, serviceName, methodName) {
        var detailedHttpError = '';
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            detailedHttpError = "Backend Error :: \"" + error.error.message + "\" has occured in module >> \"" + moduleName + "\"\n       - Service >> \"" + serviceName + "\" - method >> \"" + methodName + "\"";
            console.error('A backend error occurred: ', detailedHttpError);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            detailedHttpError = "Backend Error ::  returned code " + error.status + ", " +
                ("body was: " + error.error + " has occured in module >> \"" + moduleName + "\" - Service >> \"" + serviceName + "\"\n         - method >> \"" + methodName + "\"");
            console.error('A backend error occurred: ', detailedHttpError);
        }
        this.handleError(error);
    };
    /**
     * @description: DO NOT CALL THIS METHOD DIRECTLY. Helps log error messages
     * @param exception - the exception or error that needs to be handled
     */
    AppErrorHandlerService.prototype.handleError = function (exception) {
        throw new Error(exception);
    };
    AppErrorHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppErrorHandlerService);
    return AppErrorHandlerService;
}());



/***/ }),

/***/ "./src/app/shared/services/app-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_error_handler_service__ = __webpack_require__("./src/app/shared/services/app-error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppHttpService = /** @class */ (function () {
    function AppHttpService(http, appErrorHandler) {
        this.http = http;
        this.appErrorHandler = appErrorHandler;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
    }
    /**
     * @description: helps facilitate basic http get request calls
     * @param url
     */
    AppHttpService.prototype.get = function (targetUrl, httpOptions) {
        if (!httpOptions) {
            httpOptions = this.httpOptions;
        }
        return this.http.get(targetUrl, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* retry */])(3), // retry a failed request up to 3 times
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.appErrorHandler.handleError) // then handle the error
        );
    };
    /**
     *
     * @param targetUrl
     * @param requestData
     * @param httpOptions
     */
    AppHttpService.prototype.post = function (targetUrl, requestData, httpOptions) {
        if (!httpOptions) {
            httpOptions = this.httpOptions;
        }
        return this.http.post(targetUrl, requestData, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* retry */])(3), // retry a failed request up to 3 times
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.appErrorHandler.handleError) // then handle the error
        );
    };
    /**
     *
     * @param targetUrl
     * @param id
     * @param httpOptions
     */
    AppHttpService.prototype.delete = function (targetUrl, id, httpOptions) {
        if (!httpOptions) {
            httpOptions = this.httpOptions;
        }
        var url = targetUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.appErrorHandler.handleError));
    };
    AppHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__app_error_handler_service__["a" /* AppErrorHandlerService */]])
    ], AppHttpService);
    return AppHttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map