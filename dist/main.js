(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-position-absolute slideshow-arrow-caption\">\n    <div class=\"slide-arrows\">\n        <a class=\"border-circle uk-margin-right\" uk-icon=\"icon: triangle-left;ratio: 1.7\" [ngClass]=\"{'disabled':index == 0}\" (click)=\"slideshow.onSlide(-1)\"></a>\n        <a class=\"border-circle\" uk-icon=\"icon: triangle-right;ratio: 1.7\" [ngClass]=\"{'disabled':index == imageUrlArray.length-1}\" (click)=\"slideshow.onSlide(1)\"></a>\n    </div>\n    <div class=\"slideshow-caption\">\n        <label class=\"caption-title uk-display-block\">{{imageUrlArray[index].title}}</label>\n        <label class=\"caption-sub-title uk-display-block\">{{imageUrlArray[index].subTitle}}</label>\n    </div>\n    <button class=\"uk-text-uppercase button-flat-primary\"><a class=\"uk-link-reset\" href=\"{{imageUrlArray[index].linkUrl}}\" target=\"_blank\">Learn More</a></button>\n</div>\n<slideshow #slideshow [imageUrls]=\"imageUrlArray\" [height]=\"'750px'\" [showArrows]=\"false\" [autoPlayInterval]=\"5000\"\n    [captionColor]=\"'#000'\" [captionBackground]=\"'transparent'\" [backgroundPosition]=\"'top left'\" (onSlideLeft)=\"onSlide($event)\" (onSlideRight)=\"onSlide($event)\"></slideshow>\n<div class=\"latest-news-container uk-margin-large-top\">\n    <app-latest-news></app-latest-news>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".latest-news-container {\n  padding: 0 100px 150px 100px; }\n\n.slideshow-arrow-caption {\n  margin-top: 330px;\n  margin-left: 100px;\n  z-index: 100;\n  width: 560px; }\n\n.slideshow-arrow-caption .slide-arrows .border-circle {\n    border-radius: 50%;\n    border: 1px solid #00bff3;\n    color: #00bff3; }\n\n.slideshow-arrow-caption .slide-arrows .border-circle.disabled {\n      color: #dedede;\n      border-color: #dedede;\n      pointer-events: none; }\n\n.slideshow-arrow-caption .button-flat-primary {\n    color: white;\n    background: #00bff3;\n    border-radius: 30px;\n    padding: 20px 40px;\n    font-size: 16px;\n    margin-top: 35px; }\n\n.slideshow-caption .caption-title {\n  font-size: 55px;\n  font-weight: bold;\n  color: #000000; }\n\n.slideshow-caption .caption-sub-title {\n  font-size: 25px;\n  color: #686868; }\n\n@media (min-width: 1500px) {\n  :host ::ng-deep .slideshow-container {\n    -webkit-clip-path: polygon(0% 0, 100% 0, 100% 100%, 30% 85%);\n    clip-path: polygon(0% 0, 100% 0, 100% 100%, 25% 85%); } }\n\n@media (min-width: 1340px) {\n  :host ::ng-deep .slideshow-container {\n    -webkit-clip-path: polygon(0% 0, 100% 0, 100% 100%, 30% 85%);\n    clip-path: polygon(0% 0, 100% 0, 100% 100%, 40% 90%); } }\n\n@media (min-width: 1024px) {\n  :host ::ng-deep .slideshow-container {\n    -webkit-clip-path: polygon(0% 0, 100% 0, 100% 100%, 30% 85%);\n    clip-path: polygon(0% 0, 100% 0, 100% 100%, 50% 90%); } }\n\n@media (max-width: 1024px) {\n  :host ::ng-deep .slideshow-container {\n    -webkit-clip-path: polygon(0% 0, 100% 0, 100% 100%, 30% 85%);\n    clip-path: polygon(0% 0, 100% 0, 100% 100%, 60% 93%); } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.index = 0;
        //array of slider elements
        this.imageUrlArray = [{ url: '/assets/images/img1.jpg', title: "Welcome to a more connected world", subTitle: "Travel soothes the soul and our collection royalty", linkUrl: "#" },
            { url: '/assets/images/img2.jpg', title: "From the earth to the sky", subTitle: "Aspiration and achievement", linkUrl: "#" },
            { url: '/assets/images/img3.jpg', title: "Welcome to a more connected world", subTitle: "Travel soothes the soul and our collection royalty", linkUrl: "#" }];
        //event to set the index variable with the slider index when the slider swipe
        this.onSlide = function (i) {
            this.index = i;
        };
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slideshow'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "slideshow", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/latest-news/latest-news.component */ "./src/app/components/latest-news/latest-news.component.ts");
/* harmony import */ var _pipes_day_suffix_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/day-suffix.pipe */ "./src/app/pipes/day-suffix.pipe.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_3__["LatestNewsComponent"],
                _pipes_day_suffix_pipe__WEBPACK_IMPORTED_MODULE_4__["DaySuffixPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__["SlideshowModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarouselModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/latest-news/latest-news.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/latest-news/latest-news.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-clearfix news-header\">\n  <h2 class=\"uk-align-left uk-margin-remove\">Latest News</h2>\n  <form class=\"uk-search uk-search-default uk-align-right uk-margin-remove\">\n      <span uk-search-icon></span>\n      <input class=\"uk-search-input article-search-input\" ng-model=\"srch\" (keyup)=\"search_articles($event,data_source)\" type=\"search\" placeholder=\"Search News\">\n  </form>\n</div>\n<div class=\" newsContainer uk-child-width-expand@s\" uk-grid>\n  <div class=\"uk-width-1-3 article-container\" *ngFor=\"let article of data_filter| slice:0:3\">\n    <div class=\"uk-card uk-card-default\">\n      <div class=\"uk-card-media-top\">\n        <img src=\"{{article.urlToImage}}\" alt=\"\">\n      </div>\n      <div class=\"uk-card-body\">\n    <span>{{(article.publishedAt | date:\"d MMMM y\" )| daySuffix}}</span>\n    <h4 class=\"uk-card-title uk-text-bold\" style=\"    -webkit-box-orient: vertical;\">{{article.title}}</h4>\n        <a href=\"{{article.url}}\" class=\"uk-text-muted\" target=\"_blank\">Read More</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/latest-news/latest-news.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/latest-news/latest-news.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-header {\n  margin-bottom: 100px; }\n  .news-header .article-search-input {\n    border-width: 0 0 2px 0px;\n    background: transparent; }\n  .article-container:not(.uk-first-column) {\n  padding-left: 20px; }\n  .article-container .uk-card {\n  box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2); }\n  .article-container .uk-card img {\n    height: 260px;\n    width: 100%; }\n  .article-container .uk-card .uk-card-body {\n    padding: 30px; }\n  .article-container .uk-card .uk-card-body .uk-card-title {\n      margin-top: 15px;\n      line-height: 24px;\n      height: 50px;\n      overflow: hidden;\n      display: -webkit-box;\n      box-orient: vertical;\n      -webkit-line-clamp: 2;\n      line-clamp: 2; }\n"

/***/ }),

/***/ "./src/app/components/latest-news/latest-news.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/latest-news/latest-news.component.ts ***!
  \*****************************************************************/
/*! exports provided: LatestNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestNewsComponent", function() { return LatestNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsAPI = __webpack_require__(/*! newsapi */ "./node_modules/newsapi/index.js");
var newsapi = new NewsAPI('a7f4e498f76349efa3504c9a5899671d');
var LatestNewsComponent = /** @class */ (function () {
    function LatestNewsComponent() {
        this.data_source = [];
        this.data_filter = [];
    }
    LatestNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // To query /v2/top-headlines from newsapi.org
        newsapi.v2.topHeadlines({
            language: 'en'
        }).then(function (response) {
            _this.data_filter = _this.data_source = response.articles;
        }).catch(function (err) {
            console.log(err);
        });
    };
    LatestNewsComponent.prototype.search_articles = function (e, data) {
        var val = e.target.value;
        var minChar = 2;
        this.data_filter = val.length < minChar ? this.data_source : data.filter(function (article) { return article.title.toLowerCase().includes(val.toLowerCase()); });
        return true;
    };
    LatestNewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-latest-news',
            template: __webpack_require__(/*! ./latest-news.component.html */ "./src/app/components/latest-news/latest-news.component.html"),
            styles: [__webpack_require__(/*! ./latest-news.component.scss */ "./src/app/components/latest-news/latest-news.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LatestNewsComponent);
    return LatestNewsComponent;
}());



/***/ }),

/***/ "./src/app/pipes/day-suffix.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/day-suffix.pipe.ts ***!
  \******************************************/
/*! exports provided: DaySuffixPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaySuffixPipe", function() { return DaySuffixPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DaySuffixPipe = /** @class */ (function () {
    function DaySuffixPipe() {
    }
    DaySuffixPipe.prototype.transform = function (value, args) {
        var suufix;
        var date = new Date(value);
        var day = date.getDate();
        if (day >= 11 && day <= 13) {
            suufix = "th";
        }
        switch (day % 10) {
            case 1: suufix = "st";
            case 2: suufix = "nd";
            case 3: suufix = "rd";
            default: suufix = "th";
        }
        return day + suufix + " " + date.toLocaleString("en-us", { month: "long" }) + " " + date.getFullYear();
    };
    DaySuffixPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'daySuffix'
        })
    ], DaySuffixPipe);
    return DaySuffixPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\alaa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map