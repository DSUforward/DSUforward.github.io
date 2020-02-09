function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-boot-navbar></app-boot-navbar>\r\n<div class=\"top\"></div>\r\n<router-outlet></router-outlet>\r\n<app-boot-footer></app-boot-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/boot-cards/boot-cards.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/boot-cards/boot-cards.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBootCardsBootCardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container boot-cards\">\r\n\r\n  <!-- Marketing Icons Section -->\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-lg-4 mb-4\" *ngFor=\"let card of posts\">\r\n      <div class=\"card h-100\">\r\n        <h4 class=\"card-header\">{{card.name}}</h4>\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text\">{{card.description}}</p>\r\n          <p class='tags'>{{card.tags}}</p>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a href=\"#\" class=\"btn btn-primary\">Learn More</a>\r\n          <i class='icon' [ngClass]=card.iconClass></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/boot-carousel/boot-carousel.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/boot-carousel/boot-carousel.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBootCarouselBootCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\r\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n      <!-- Slide One - Set the background image for this slide in the line below -->\r\n      <div class=\"carousel-item active\" style=\"background-image: url(/assets/FBHeaderEng.png)\">\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n        </div>\r\n      </div>\r\n      <!-- Slide Two - Set the background image for this slide in the line below -->\r\n      <div class=\"carousel-item\" style=\"background-image: url('https://scontent-arn2-1.xx.fbcdn.net/v/t31.0-8/10382132_10152257707773507_4385132564945583927_o.jpg?_nc_cat=110&_nc_ohc=SDv6RmtaYu4AQkNHJe2FOt5BO-ptzqOc20S09EOy7219SG3oE7SZXRLAQ&_nc_ht=scontent-arn2-1.xx&oh=47aa7d8491df957842290feda90e24df&oe=5E697882')\">\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n          <h3>The Team</h3>\r\n          <p>Located in Skövde, Sweden</p>\r\n        </div>\r\n      </div>\r\n      <!-- Slide Three - Set the background image for this slide in the line below -->\r\n      <div class=\"carousel-item\" style=\"background-image: url('')\">\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n          <h3>Share your knowledge</h3>\r\n          <p>Feature your projects</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n</header>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/boot-footer/boot-footer.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/boot-footer/boot-footer.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBootFooterBootFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"py-4 bg-dark\">\r\n  <!-- /.container -->\r\n  <div class=\"container\">\r\n    <div class=\"icons h-100 text-center text-lg-center my-auto\">\r\n      <ul class=\"list-inline mb-0\">\r\n        <li class=\"list-inline-item mr-3\">\r\n          <a href=\"https://www.instagram.com/dsu_forward/\" target=\"_blank\">\r\n            <i class=\"fab fa-instagram fa-2x fa-fw\"></i>\r\n          </a>\r\n        </li>\r\n        <li class=\"list-inline-item\">\r\n          <a href=\"https://www.facebook.com/DSUforwardSkovde\" target=\"_blank\">\r\n            <i class=\"fab fa-facebook fa-2x fa-fw\"></i>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <p class=\"text-muted small mb-4 mb-lg-0\">Copyright &copy; Carl-Olof Söderström 2019</p>\r\n  </div>\r\n</footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/boot-navbar/boot-navbar.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/boot-navbar/boot-navbar.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBootNavbarBootNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"index.html\">DSU-Forward</a>\r\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\r\n       aria-expanded=\"false\" aria-label=\"Toggle navigation\"\r\n       (click)=\"toggleCollapsed()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\" [ngClass]=\"{'collapse' : collapsed, 'navbar-collapse' : true}\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"postArchive\" routerLinkActive=\"active\">Post Archive</a>\r\n          </li>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownBlog\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              Media\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownBlog\">\r\n              <a class=\"dropdown-item\" href=\"https://www.facebook.com/DSUforwardSkovde\" target=\"_blank\">Facebook</a>\r\n              <a class=\"dropdown-item\" href=\"https://www.instagram.com/dsu_forward/\" target=\"_blank\">Instagram</a>\r\n            </div>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"questions\" routerLinkActive=\"active\">Questions</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"about.html\">Goals</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"contact.html\">Contact</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/boot-posts/boot-posts.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/boot-posts/boot-posts.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBootPostsBootPostsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <h2></h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4 col-sm-6 portfolio-item\">\r\n      <div class=\"card h-100\">\r\n        <a href=\"#\"><img class=\"card-img-top\"\r\n            src=\"https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/75244418_981544275565186_512949193302888471_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=dBFSMamAZgUAX_RInIx&oh=90ff184452bbac2ebd414519e202fea3&oe=5EAF53D9\"\r\n            alt=\"\"></a>\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">\r\n            <a href=\"#\">Unity-Asset</a>\r\n          </h4>\r\n          <p class=\"card-text\">\r\n            <p>\r\n              🌟 We start early with a recommendation for Unity Synty Studios Mega Bundle! Get 6 large asset-packs and\r\n              another 13 packs for about 700 SEK (VAT included) 🤯\r\n            </p>\r\n            <p>\r\n              I have personally bought and used Synty Studio assets before. Can confirm that they are decently good\r\n              quality and you get what you pay for. No AAA quality and not quite perfect. But works really well for\r\n              creating game prototypes, game concepts and for starting to create games with already completed assets in\r\n              the same theme! With 90% off there is clearly great value to be had👍\r\n            </p>\r\n            <p>\r\n              Take a look and see if it might be something for you! ✨\r\n            </p>\r\n            <p>\r\n              <a href=\"https://assetstore.unity.com/mega-bundles/synty-studios\" target=\"_blank\">Link to Asset Store</a>\r\n            </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-sm-6 portfolio-item\">\r\n      <div class=\"card h-100\">\r\n        <a href=\"#\"><img class=\"card-img-top\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">\r\n            <a href=\"#\">Gameproject 1</a>\r\n          </h4>\r\n          <p class=\"card-text\">\r\n            Början på ett nytt år och det är endast 3 veckor kvar tills Spelprojekt 1 drar igång!\r\n          </p>\r\n          <p>\r\n            En av de viktigaste sakerna under spelprojektet är att ha ett bra scope och inte försöka göra allt på endast 10 veckor.\r\n          </p>\r\n          <p>\r\n            Innan vi blickar framåt kan vi ta en tillbakablick på de spelprojekt som gjordes 2019 och 2018.\r\n            Här finns en spellista med alla trailers som finns upplagda:\r\n          </p>\r\n          <p>\r\n            Försök få en känsla för hur mycket man kan hinna med och bli inspirerad av några av de fantastiska spelen som gjorts!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4 col-sm-6 portfolio-item\">\r\n      <div class=\"card h-100\">\r\n        <a href=\"#\"><img class=\"card-img-top\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">\r\n            <a href=\"#\">Gameproject 1</a>\r\n          </h4>\r\n          <p class=\"card-text\">\r\n            It is the begining of a new year and in bearly 3 weeks the gamedevelopment students at the University of Skövde will embark on a 10 week project;\r\n            where they will create brand new games in teams of 10-15 people.\r\n          </p>\r\n          <p>\r\n            One of the most important things ahead of a project with that short time limit is defining the scope of the game.\r\n          </p>\r\n          <p>\r\n            On our new webb-page you can find a link to a playlist with all public game trailers from the 2019 and 2018 year projects!\r\n            (Link in bio)\r\n          </p>\r\n          <p>\r\n            Try get a feeling of how much is possible and get inspired by some of the amazing creations from past years!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderFolderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-folder container col-md-10 col-md-offset-1\">\r\n<div class=\"page\">\r\n  <p>Här är sidans inehåll: Lorensim ipsum delor asd cxccvk fvdfvxcvxcvxcv\r\n    xcvxcvxcv\r\n    xcvcxvxcv\r\n  </p>\r\n</div>\r\n<div class=\"page\">\r\n  <p>Här är sidans inehåll: Lorensim ipsum delor asd cxccvk fvdfvxcvxcvxcv\r\n    xcvxcvxcv\r\n    xcvcxvxcv\r\n  </p>\r\n</div>\r\n\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/goals/goals.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/goals/goals.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGoalsGoalsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <!-- Features Section -->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <h2>Our goals</h2>\r\n      <ul>\r\n        <li>jQuery</li>\r\n        <li>Font Awesome</li>\r\n        <li>Working contact form with validation</li>\r\n        <li>Unstyled page elements for easy customization</li>\r\n      </ul>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <img class=\"img-fluid rounded\" src=\"http://placehold.it/700x450\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <!-- /.row -->\r\n\r\n  <hr>\r\n\r\n  <!-- Call to Action Section -->\r\n  <div class=\"row mb-4\">\r\n    <div class=\"col-md-8\">\r\n      <p>Intrested in shareing your knowledge and be a part of the team?</p>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <a style=\"background-color: crimson; border-color: black; \" class=\"btn btn-md btn-secondary btn-block\" href=\"#\">Send us a message!</a>\r\n    </div>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-boot-carousel></app-boot-carousel>\r\n<div class=\"container\">\r\n<app-boot-posts></app-boot-posts>\r\n<app-goals></app-goals>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar\">\r\n  <div class=\"container col-md-12\">\r\n    <div class=\"internal-Links\">\r\n      <h2>SouthStream-Network</h2>\r\n      <ul>\r\n        <li><a>Posts</a></li>\r\n        <li><a>Subjects</a></li>\r\n        <li><a>Media</a></li>\r\n        <li><a>Kontakt</a></li>\r\n      </ul>\r\n    </div>\r\n    <div>\r\n      <ul class=\"external-navUL\">\r\n        <li class=\"dsu-li\"><a>DSU-Forward</a></li>\r\n        <li class=\"bannerFox-a\"><a>BannerFox</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostsPostsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container col-md-6 col-md-offset-3\">\r\n  <div class=\"post\" *ngFor=\"let post of posts\">\r\n    <h3>{{post.name}}</h3>\r\n    <p>{{post.description}}</p>\r\n    <p class=\"tags\">{{post.tags}}</p>\r\n    <p class=\"tags\">{{post.date | date: 'yyyy-MM-dd'}}</p>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top {\r\n  padding-top: 56px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Age1xyXG4gIHBhZGRpbmctdG9wOiA1NnB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'my-app';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./posts/posts.component */
    "./src/app/posts/posts.component.ts");
    /* harmony import */


    var _boot_cards_boot_cards_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./boot-cards/boot-cards.component */
    "./src/app/boot-cards/boot-cards.component.ts");
    /* harmony import */


    var _folder_folder_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./folder/folder.component */
    "./src/app/folder/folder.component.ts");
    /* harmony import */


    var _boot_navbar_boot_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./boot-navbar/boot-navbar.component */
    "./src/app/boot-navbar/boot-navbar.component.ts");
    /* harmony import */


    var _boot_carousel_boot_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./boot-carousel/boot-carousel.component */
    "./src/app/boot-carousel/boot-carousel.component.ts");
    /* harmony import */


    var _boot_posts_boot_posts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./boot-posts/boot-posts.component */
    "./src/app/boot-posts/boot-posts.component.ts");
    /* harmony import */


    var _boot_footer_boot_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./boot-footer/boot-footer.component */
    "./src/app/boot-footer/boot-footer.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _goals_goals_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./goals/goals.component */
    "./src/app/goals/goals.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var appRoutes = [{
      path: 'questions',
      component: _boot_cards_boot_cards_component__WEBPACK_IMPORTED_MODULE_8__["BootCardsComponent"]
    }, {
      path: 'post/:id',
      component: _boot_cards_boot_cards_component__WEBPACK_IMPORTED_MODULE_8__["BootCardsComponent"]
    }, {
      path: 'postArchive',
      component: _boot_posts_boot_posts_component__WEBPACK_IMPORTED_MODULE_12__["BootPostsComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/home'
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"], _boot_cards_boot_cards_component__WEBPACK_IMPORTED_MODULE_8__["BootCardsComponent"], _folder_folder_component__WEBPACK_IMPORTED_MODULE_9__["FolderComponent"], _boot_navbar_boot_navbar_component__WEBPACK_IMPORTED_MODULE_10__["BootNavbarComponent"], _boot_carousel_boot_carousel_component__WEBPACK_IMPORTED_MODULE_11__["BootCarouselComponent"], _boot_posts_boot_posts_component__WEBPACK_IMPORTED_MODULE_12__["BootPostsComponent"], _boot_footer_boot_footer_component__WEBPACK_IMPORTED_MODULE_13__["BootFooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _goals_goals_component__WEBPACK_IMPORTED_MODULE_15__["GoalsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, {
        enableTracing: true
      })],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_16__["APP_BASE_HREF"],
        useValue: '/'
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_16__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_16__["HashLocationStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/boot-cards/boot-cards.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/boot-cards/boot-cards.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBootCardsBootCardsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tags {\r\n  opacity: 0.6;\r\n  font-size: 12px;\r\n  position: absolute;\r\n  bottom: 5px;\r\n  margin-bottom: 0;\r\n }\r\n.card-body {\r\n  position: relative;\r\n}\r\n.icon {\r\n  font-size: 24px;\r\n  margin: 5px;\r\n  display: inline-block;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  margin-left: 0.5em;\r\n}\r\n.boot-cards {\r\n  margin-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vdC1jYXJkcy9ib290LWNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ib290LWNhcmRzL2Jvb3QtY2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWdzIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gfVxyXG4uY2FyZC1ib2R5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW46IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG59XHJcbi5ib290LWNhcmRzIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/boot-cards/boot-cards.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/boot-cards/boot-cards.component.ts ***!
    \****************************************************/

  /*! exports provided: BootCardsComponent */

  /***/
  function srcAppBootCardsBootCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BootCardsComponent", function () {
      return BootCardsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BootCardsComponent = function BootCardsComponent() {
      _classCallCheck(this, BootCardsComponent);

      this.posts = [{
        name: 'Lärdomar från verket',
        date: new Date('2019-12-25'),
        tags: [' Agile', ' SCRUM', ' Teamwork'],
        description: 'Under min tid på Jordbruksverket har jag lärt mig mycket om team arbete. Följ mig när jag sammanfattar allt.'
      }, {
        name: 'SouthStream Games',
        date: new Date('2019-12-25'),
        tags: [' Unity', ' Game Desgin', ' Game programming'],
        description: 'See all about game-development here!',
        iconClass: 'fas fa-gamepad'
      }, {
        name: 'SouthStream Create',
        date: new Date('2019-12-25'),
        tags: [' Youtube', ' Create', ' Webbpage'],
        description: 'Wondering about starting a YouTube channel? Creating a webb page? Watch the journey here!'
      }, {
        name: 'Sociology',
        date: new Date('2019-12-25'),
        tags: [' Politics', ' Society', ' Pshycology'],
        description: 'Watch talks describing the world the wrongs and the rights.',
        iconClass: 'fas fa-brain'
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('icon', {
      static: false
    })], BootCardsComponent.prototype, "element", void 0);
    BootCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-boot-cards',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./boot-cards.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/boot-cards/boot-cards.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./boot-cards.component.css */
      "./src/app/boot-cards/boot-cards.component.css")).default]
    })], BootCardsComponent);
    /***/
  },

  /***/
  "./src/app/boot-carousel/boot-carousel.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/boot-carousel/boot-carousel.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBootCarouselBootCarouselComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".carousel-item {\r\n  height: 65vh;\r\n  min-height: 300px;\r\n  background: no-repeat center center scroll;\r\n  background-size: cover;\r\n}\r\n.carousel-control-next,\r\n.carousel-control-prev {\r\n    -webkit-filter: invert(100%);\r\n            filter: invert(100%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vdC1jYXJvdXNlbC9ib290LWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDBDQUEwQztFQUkxQyxzQkFBc0I7QUFDeEI7QUFDQTs7SUFFSSw0QkFBb0I7WUFBcEIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYm9vdC1jYXJvdXNlbC9ib290LWNhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgaGVpZ2h0OiA2NXZoO1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIHNjcm9sbDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LFxyXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/boot-carousel/boot-carousel.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/boot-carousel/boot-carousel.component.ts ***!
    \**********************************************************/

  /*! exports provided: BootCarouselComponent */

  /***/
  function srcAppBootCarouselBootCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BootCarouselComponent", function () {
      return BootCarouselComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BootCarouselComponent =
    /*#__PURE__*/
    function () {
      function BootCarouselComponent() {
        _classCallCheck(this, BootCarouselComponent);
      }

      _createClass(BootCarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BootCarouselComponent;
    }();

    BootCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-boot-carousel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./boot-carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/boot-carousel/boot-carousel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./boot-carousel.component.css */
      "./src/app/boot-carousel/boot-carousel.component.css")).default]
    })], BootCarouselComponent);
    /***/
  },

  /***/
  "./src/app/boot-footer/boot-footer.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/boot-footer/boot-footer.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBootFooterBootFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fab {\r\n  color: white;\r\n}\r\n.icons {\r\n  padding-bottom: 6px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vdC1mb290ZXIvYm9vdC1mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jvb3QtZm9vdGVyL2Jvb3QtZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFiIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmljb25zIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNnB4XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/boot-footer/boot-footer.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/boot-footer/boot-footer.component.ts ***!
    \******************************************************/

  /*! exports provided: BootFooterComponent */

  /***/
  function srcAppBootFooterBootFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BootFooterComponent", function () {
      return BootFooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BootFooterComponent =
    /*#__PURE__*/
    function () {
      function BootFooterComponent() {
        _classCallCheck(this, BootFooterComponent);
      }

      _createClass(BootFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BootFooterComponent;
    }();

    BootFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-boot-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./boot-footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/boot-footer/boot-footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./boot-footer.component.css */
      "./src/app/boot-footer/boot-footer.component.css")).default]
    })], BootFooterComponent);
    /***/
  },

  /***/
  "./src/app/boot-navbar/boot-navbar.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/boot-navbar/boot-navbar.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBootNavbarBootNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb3QtbmF2YmFyL2Jvb3QtbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/boot-navbar/boot-navbar.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/boot-navbar/boot-navbar.component.ts ***!
    \******************************************************/

  /*! exports provided: BootNavbarComponent */

  /***/
  function srcAppBootNavbarBootNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BootNavbarComponent", function () {
      return BootNavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BootNavbarComponent =
    /*#__PURE__*/
    function () {
      function BootNavbarComponent() {
        _classCallCheck(this, BootNavbarComponent);

        this.collapsed = true;
      }

      _createClass(BootNavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleCollapsed",
        value: function toggleCollapsed() {
          this.collapsed = !this.collapsed; // [ngClass]="{'collapse' : collapsed, 'navbar-collapse' : true}"
        }
      }]);

      return BootNavbarComponent;
    }();

    BootNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-boot-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./boot-navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/boot-navbar/boot-navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./boot-navbar.component.css */
      "./src/app/boot-navbar/boot-navbar.component.css")).default]
    })], BootNavbarComponent);
    /***/
  },

  /***/
  "./src/app/boot-posts/boot-posts.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/boot-posts/boot-posts.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBootPostsBootPostsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".portfolio-item {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vdC1wb3N0cy9ib290LXBvc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9ib290LXBvc3RzL2Jvb3QtcG9zdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3J0Zm9saW8taXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/boot-posts/boot-posts.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/boot-posts/boot-posts.component.ts ***!
    \****************************************************/

  /*! exports provided: BootPostsComponent */

  /***/
  function srcAppBootPostsBootPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BootPostsComponent", function () {
      return BootPostsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BootPostsComponent =
    /*#__PURE__*/
    function () {
      function BootPostsComponent() {
        _classCallCheck(this, BootPostsComponent);
      }

      _createClass(BootPostsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BootPostsComponent;
    }();

    BootPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-boot-posts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./boot-posts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/boot-posts/boot-posts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./boot-posts.component.css */
      "./src/app/boot-posts/boot-posts.component.css")).default]
    })], BootPostsComponent);
    /***/
  },

  /***/
  "./src/app/folder/folder.component.css":
  /*!*********************************************!*\
    !*** ./src/app/folder/folder.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderFolderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page {\r\n  display: inline-block;\r\n  width: 46%;\r\n  height: 400px;\r\n  background-color: wheat;\r\n  margin: 10px;\r\n  margin-left: 15px;\r\n  padding: 10px;\r\n}\r\n.main-folder {\r\n  background-color: yellowgreen;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2ZvbGRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvZm9sZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA0NiU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ubWFpbi1mb2xkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/folder/folder.component.ts":
  /*!********************************************!*\
    !*** ./src/app/folder/folder.component.ts ***!
    \********************************************/

  /*! exports provided: FolderComponent */

  /***/
  function srcAppFolderFolderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderComponent", function () {
      return FolderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FolderComponent =
    /*#__PURE__*/
    function () {
      function FolderComponent() {
        _classCallCheck(this, FolderComponent);
      }

      _createClass(FolderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FolderComponent;
    }();

    FolderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-folder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./folder.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./folder.component.css */
      "./src/app/folder/folder.component.css")).default]
    })], FolderComponent);
    /***/
  },

  /***/
  "./src/app/goals/goals.component.css":
  /*!*******************************************!*\
    !*** ./src/app/goals/goals.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppGoalsGoalsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvYWxzL2dvYWxzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/goals/goals.component.ts":
  /*!******************************************!*\
    !*** ./src/app/goals/goals.component.ts ***!
    \******************************************/

  /*! exports provided: GoalsComponent */

  /***/
  function srcAppGoalsGoalsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoalsComponent", function () {
      return GoalsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GoalsComponent =
    /*#__PURE__*/
    function () {
      function GoalsComponent() {
        _classCallCheck(this, GoalsComponent);
      }

      _createClass(GoalsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GoalsComponent;
    }();

    GoalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-goals',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./goals.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/goals/goals.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./goals.component.css */
      "./src/app/goals/goals.component.css")).default]
    })], GoalsComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/navbar/navbar.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar {\n  background-color: black;\n  color: white;\n  margin-bottom: 20px;\n}\n\n.container {\n  padding-top: 0.5em;\n  padding-left: 1em;\n}\n\nh2 {\n  margin: 0;\n  float: left;\n  display: inline-block;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  float: right;\n}\n\nul li {\n  display: inline-block;\n  padding-left: 10px;\n}\n\nul li a {\n  cursor: pointer;\n  font-weight: 500;\n  padding: 7px;\n}\n\n.internal-Links ul {\n  float: left;\n  padding-left: 0;\n  padding-top: 0.7em;\n}\n\n.dsu-li :hover {\n  background-color: white;\n  color: red;\n  border-radius: 3px;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n}\n\n.bannerFox-a :hover {\n  background-color: green;\n  color: orange;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcT2xhdnZ2XFxEb2N1bWVudHNcXEdpdEh1YlxcTmV3IGZvbGRlclxcRFNVZm9yd2FyZC5naXRodWIuaW8vc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNHRjs7QUREQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0lGOztBREhFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREpJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ01OOztBRERFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0lKOztBRENFO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwrRUFDQztBQ0NMOztBRE1FO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbn1cclxuaDIge1xyXG4gIG1hcmdpbjogMDtcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxudWwge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBhIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5pbnRlcm5hbC1MaW5rcyB7XHJcbiAgdWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMC43ZW07XHJcbiAgfVxyXG59XHJcblxyXG4uZHN1LWxpIHtcclxuICA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgdGV4dC1zaGFkb3c6XHJcbiAgICAgLTFweCAtMXB4IDAgIzAwMCxcclxuICAgICAxcHggLTFweCAwICMwMDAsXHJcbiAgICAgLTFweCAxcHggMCAjMDAwLFxyXG4gICAgIDFweCAxcHggMCAjMDAwO1xyXG4gIH1cclxufVxyXG4uYmFubmVyRm94LWEge1xyXG4gIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cblxuaDIge1xuICBtYXJnaW46IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbnVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmbG9hdDogcmlnaHQ7XG59XG51bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxudWwgbGkgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogN3B4O1xufVxuXG4uaW50ZXJuYWwtTGlua3MgdWwge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXRvcDogMC43ZW07XG59XG5cbi5kc3UtbGkgOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICMwMDAsIDFweCAtMXB4IDAgIzAwMCwgLTFweCAxcHggMCAjMDAwLCAxcHggMXB4IDAgIzAwMDtcbn1cblxuLmJhbm5lckZveC1hIDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogb3JhbmdlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/navbar/navbar.component.scss")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/posts/posts.component.scss":
  /*!********************************************!*\
    !*** ./src/app/posts/posts.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostsPostsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".post-container {\n  padding: 2em;\n  padding-top: 1px;\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  border-top: 0px;\n}\n\n.post {\n  margin-top: 2em;\n  background-color: rgba(245, 222, 178, 0.2);\n  border-style: solid;\n  border-color: black;\n  border-width: 2px;\n  padding: 10px;\n}\n\n.post p {\n  margin-top: 10px;\n  margin-bottom: 0;\n}\n\n.tags {\n  opacity: 0.6;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvQzpcXFVzZXJzXFxPbGF2dnZcXERvY3VtZW50c1xcR2l0SHViXFxOZXcgZm9sZGVyXFxEU1Vmb3J3YXJkLmdpdGh1Yi5pby9zcmNcXGFwcFxccG9zdHNcXHBvc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNFRjs7QURERTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURBQTtFQUNDLFlBQUE7RUFDQSxlQUFBO0FDR0QiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci10b3A6IDBweDtcclxufVxyXG4ucG9zdCB7XHJcbiAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgzOSwgNzclLCA4MyUsIDIwJSk7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuLnRhZ3Mge1xyXG4gb3BhY2l0eTogMC42O1xyXG4gZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiIsIi5wb3N0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJlbTtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci10b3A6IDBweDtcbn1cblxuLnBvc3Qge1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyMjIsIDE3OCwgMC4yKTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucG9zdCBwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRhZ3Mge1xuICBvcGFjaXR5OiAwLjY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/posts/posts.component.ts":
  /*!******************************************!*\
    !*** ./src/app/posts/posts.component.ts ***!
    \******************************************/

  /*! exports provided: PostsComponent */

  /***/
  function srcAppPostsPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsComponent", function () {
      return PostsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PostsComponent = function PostsComponent() {
      _classCallCheck(this, PostsComponent);

      this.posts = [{
        name: 'Lärdomar från verket',
        date: new Date('2019-12-25'),
        tags: [' Agile', ' SCRUM', ' Teamwork'],
        description: 'Under min tid på Jordbruksverket har jag lärt mig mycket om team arbete. Följ mig när jag sammanfattar allt.'
      }, {
        name: 'SouthStream Games',
        date: new Date('2019-12-25'),
        tags: [' Unity', ' Game Desgin', ' Game programming'],
        description: 'See all about game-development here!'
      }, {
        name: 'SouthStream Create',
        date: new Date('2019-12-25'),
        tags: [' Youtube', ' Create', ' Webbpage'],
        description: 'Wondering about starting a YouTube channel? Creating a webb page? Watch the journey here!'
      }, {
        name: 'Sociology',
        date: new Date('2019-12-25'),
        tags: [' Politics', ' Society', ' Pshycology'],
        description: 'Watch talks describing the world the wrongs and the rights.'
      }];
    };

    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-posts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./posts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./posts.component.scss */
      "./src/app/posts/posts.component.scss")).default]
    })], PostsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Olavvv\Documents\GitHub\New folder\DSUforward.github.io\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map