require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-app",
            template: "<page-router-outlet></page-router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"black"},{"type":"declaration","property":"color","value":"white"}]},{"type":"font-face","declarations":[{"type":"declaration","property":"font-family","value":"'FontAwesome'"},{"type":"declaration","property":"src","value":"url('./fonts/fontawesome-webfont.eot?v=4.7.0')"},{"type":"declaration","property":"src","value":"url('./fonts/fontawesome-webfont.eot?#iefix&v=4.7.0')\n            format('embedded-opentype'),\n        url('./fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'),\n        url('./fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'),\n        url('./fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'),\n        url('./fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular')\n            format('svg')"},{"type":"declaration","property":"font-weight","value":"normal"},{"type":"declaration","property":"font-style","value":"normal"}]},{"type":"rule","selectors":[".fa"],"declarations":[{"type":"declaration","property":"font-family","value":"'FontAwesome'"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/http-client/index.js");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app.routing.ts");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_7__);








// Fontawesome.init();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_3__["NativeScriptModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NativeScriptFormsModule"],
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_2__["NativeScriptHttpClientModule"],
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["NativeScriptRouterModule"],
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["NativeScriptRouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["routes"]),
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_7__["NativeScriptUIListViewModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]].concat(_app_routing__WEBPACK_IMPORTED_MODULE_6__["navigatableComponents"]),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigatableComponents", function() { return navigatableComponents; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./login/login.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./list/list.component.ts");


var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"] }
];
var navigatableComponents = [_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]];


/***/ }),

/***/ "./list/list.component.css":
/***/ (function(module, exports) {

module.exports = ".add-bar {\r\n    background-color: #cb1d00;\r\n    padding: 5;\r\n}\r\n\r\n.add-bar image {\r\n    height: 25;\r\n    vertical-align: center;\r\n    margin-left: 10;\r\n    margin-right: 10;\r\n}\r\n\r\n.add-bar TextField {\r\n    padding: 10;\r\n}\r\n\r\nlabel {\r\n    background-color: white;\r\n    border-bottom-width: 1;\r\n    border-bottom-color: gray;\r\n}\r\n\r\n.delete-view {\r\n    background-color: #cb1d00;\r\n    padding: 20;\r\n}\r\n.delete-view image {\r\n    color: white;\r\n}\r\n\r\nListView {\r\n    opacity: 0;\r\n}\r\n.visible {\r\n    animation-name: show;\r\n    animation-duration: 1s;\r\n    animation-fill-mode: forwards;\r\n}\r\n@keyframes show {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Groceries\"></ActionBar>\r\n\r\n<GridLayout rows=\"auto, *\">\r\n    <GridLayout row=\"0\" columns=\"*, auto\" class=\"add-bar\">\r\n        <TextField\r\n            #groceryTextField\r\n            [(ngModel)]=\"grocery\"\r\n            hint=\"Enter a grocery item\"\r\n            col=\"0\"\r\n        ></TextField>\r\n        <Image src=\"~/images/add.png\" (tap)=\"add()\" col=\"1\"></Image>\r\n    </GridLayout>\r\n\r\n    <RadListView\r\n        row=\"1\"\r\n        [items]=\"groceryList\"\r\n        [class.visible]=\"listLoaded\"\r\n        swipeActions=\"true\"\r\n        (itemSwipeProgressStarted)=\"onSwipeCellStarted($event)\"\r\n    >\r\n        <ng-template let-item=\"item\">\r\n            <Label [text]=\"item.name\" class=\"p-15\"></Label>\r\n        </ng-template>\r\n\r\n        <GridLayout *tkListItemSwipeTemplate columns=\"*, auto\">\r\n            <StackLayout\r\n                id=\"delete-view\"\r\n                col=\"1\"\r\n                (tap)=\"delete($event)\"\r\n                class=\"delete-view\"\r\n            >\r\n                <Image src=\"~/images/delete.png\"></Image>\r\n            </StackLayout>\r\n        </GridLayout>\r\n    </RadListView>\r\n\r\n    <ActivityIndicator\r\n        [busy]=\"isLoading\"\r\n        [visibility]=\"isLoading ? 'visible' : 'collapse'\"\r\n        row=\"1\"\r\n        horizontalAlignment=\"center\"\r\n        verticalAlignment=\"center\"\r\n    ></ActivityIndicator>\r\n</GridLayout>\r\n"

/***/ }),

/***/ "./list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/grocery/grocery.service.ts");


var ListComponent = /** @class */ (function () {
    function ListComponent(groceryService) {
        this.groceryService = groceryService;
        this.grocery = '';
        this.groceryList = [];
        this.isLoading = false;
        this.listLoaded = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.groceryService.load().subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === '') {
            alert('Enter a grocery item');
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryService.add(this.grocery).subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = '';
        }, function () {
            alert({
                message: 'An error occurred while adding an item to your list.',
                okButtonText: 'OK'
            });
            _this.grocery = '';
        });
    };
    ListComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args.object;
        var rightItem = swipeView.getViewById('delete-view');
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.left = 0;
        swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    };
    ListComponent.prototype.delete = function (args) {
        var _this = this;
        var grocery = args.object.bindingContext;
        this.groceryService.delete(grocery.id).subscribe(function () {
            var index = _this.groceryList.indexOf(grocery);
            _this.groceryList.splice(index, 1);
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: _shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('groceryTextField', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListComponent.prototype, "groceryTextField", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gr-list',
            template: __importDefault(__webpack_require__("./list/list.component.html")).default,
            providers: [_shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"]],
            styles: [__importDefault(__webpack_require__("./list/list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".banner {\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n}\r\n\r\n.login-page {\r\n    padding: 30 20;\r\n    max-width: 400;\r\n    margin: 0 auto;\r\n}\r\n\r\n.login-inside {\r\n}\r\n\r\n.login-input {\r\n    background: #393939;\r\n    font-size: 16;\r\n    font-weight: 500;\r\n    border-radius: 1000px;\r\n    padding: 15 25;\r\n    placeholder-color: rgba(255, 255, 255, 0.2);\r\n}\r\n.login-input + .login-input {\r\n    margin-top: 20;\r\n}\r\n.checkbox {\r\n    flex-direction: row;\r\n    align-items: center;\r\n    align-content: center;\r\n    padding: 0 25;\r\n    margin-top: 15;\r\n    margin-bottom: 20;\r\n}\r\n.checkbox-square {\r\n    width: 14;\r\n    height: 14;\r\n    border-width: 1;\r\n    border-style: solid;\r\n    border-color: #fff;\r\n    border-radius: 2;\r\n    margin-right: 10;\r\n    opacity: 0.8;\r\n}\r\n.checkbox label {\r\n    color: #fff;\r\n    opacity: 0.3;\r\n}\r\n\r\n.btn-primary {\r\n    color: #fff;\r\n    background-color: #2f0f65;\r\n    font-size: 16;\r\n    font-weight: 500;\r\n    padding: 15 25;\r\n    border-radius: 1000px;\r\n}\r\n\r\n.social-link {\r\n    width: 40;\r\n    height: 40;\r\n    font-size: 28;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    border-radius: 1000;\r\n}\r\n\r\n.fa {\r\n    color: #fff;\r\n}\r\n\r\n.btn-language{\r\n    font-size: 14;\r\n    color: #fff;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    border-radius: 1000;\r\n    padding: 2 15;\r\n    font-weight: 600;\r\n}"

/***/ }),

/***/ "./login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Snapbots\"></ActionBar>\r\n\r\n<FlexboxLayout\r\n    flexDirection=\"column\"\r\n    justifyContent=\"flex-start\"\r\n    backgroundColor=\"#fff\"\r\n>\r\n    <StackLayout\r\n        class=\"banner\"\r\n        backgroundImage=\"~/images/banner.png\"\r\n        height=\"250\"\r\n    >\r\n    </StackLayout>\r\n\r\n    <ScrollView flexGrow=\"1\" orientation=\"vertical\">\r\n        <FlexboxLayout\r\n            class=\"login-page\"\r\n            backgroundColor=\"#242424\"\r\n            flexDirection=\"column\"\r\n            justifyContent=\"flex-start\"\r\n        >\r\n            <StackLayout class=\"login-inside\">\r\n                <TextField\r\n                    hint=\"USERNAME\"\r\n                    text=\"\"\r\n                    class=\"login-input\"\r\n                ></TextField>\r\n                <TextField\r\n                    hint=\"PASSWORD\"\r\n                    text=\"\"\r\n                    class=\"login-input\"\r\n                ></TextField>\r\n                <FlexboxLayout class=\"checkbox\">\r\n                    <Button class=\"checkbox-square\"></Button>\r\n                    <Label text=\"Remember me\" textWrap=\"true\"></Label>\r\n                </FlexboxLayout>\r\n                <Button class=\"btn-primary\" [text]=\"'Sign in'\"></Button>\r\n                <Label\r\n                    text=\"Forgot password?\"\r\n                    textWrap=\"true\"\r\n                    textAlignment=\"center\"\r\n                    color=\"#fff\"\r\n                    marginTop=\"15\"\r\n                    marginBottom=\"15\"\r\n                ></Label>\r\n            </StackLayout>\r\n\r\n            <FlexboxLayout\r\n                flexDirection=\"row\"\r\n                alignItems=\"center\"\r\n                justifyContent=\"center\"\r\n                flexWrap=\"wrap\"\r\n            >\r\n                <Label\r\n                    text=\"Don't have an account?\"\r\n                    textWrap=\"true\"\r\n                    color=\"#aaa\"\r\n                ></Label>\r\n                <Label\r\n                    text=\"Create account\"\r\n                    textWrap=\"true\"\r\n                    fontWeight=\"600\"\r\n                    color=\"#fff\"\r\n                    marginLeft=\"10\"\r\n                ></Label>\r\n                <Label\r\n                    text=\"or login with\"\r\n                    textWrap=\"true\"\r\n                    color=\"#aaa\"\r\n                    width=\"100%\"\r\n                    textAlignment=\"center\"\r\n                ></Label>\r\n                <FlexboxLayout\r\n                    alignItems=\"center\"\r\n                    justifyContent=\"center\"\r\n                    marginTop=\"15\"\r\n                    marginBottom=\"15\"\r\n                >\r\n                    <FlexboxLayout\r\n                        class=\"social-link\"\r\n                        alignItems=\"center\"\r\n                        justifyContent=\"center\"\r\n                    >\r\n                        <Label class=\"fa\" text=\"&#xf1a0;\"></Label>\r\n                    </FlexboxLayout>\r\n                    <FlexboxLayout\r\n                        class=\"social-link\"\r\n                        alignItems=\"center\"\r\n                        justifyContent=\"center\"\r\n                        marginLeft=\"10\"\r\n                    >\r\n                        <Label class=\"fa\" text=\"&#xf09a;\"></Label>\r\n                    </FlexboxLayout>\r\n                </FlexboxLayout>\r\n            </FlexboxLayout>\r\n\r\n            <FlexboxLayout justifyContent=\"center\">\r\n                <Label class=\"btn-language\" text=\"Change Language\" marginBottom=\"20\"></Label>\r\n            </FlexboxLayout>\r\n        </FlexboxLayout>\r\n    </ScrollView>\r\n</FlexboxLayout>\r\n"

/***/ }),

/***/ "./login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/user/user.model.ts");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./shared/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new _shared_user_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.user.email = 'my.test.account@nativescript.org';
        this.user.password = 'mypassword';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user).subscribe(function () { return _this.router.navigate(['/list']); }, function (exception) {
            if (exception.error && exception.error.description) {
                alert(exception.error.description);
            }
            else {
                alert(exception);
            }
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user).subscribe(function () {
            alert('Your account was successfully created.');
            _this.toggleDisplay();
        }, function (exception) {
            if (exception.error && exception.error.description) {
                alert(exception.error.description);
            }
            else {
                alert(exception);
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__["Page"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gr-login',
            providers: [_shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            template: __importDefault(__webpack_require__("./login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__("./login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__["Page"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        


var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true,"markingMode":"none"},"name":"nativescript-template-ng-groceries","version":"3.0.0","main":"main.js"};

/***/ }),

/***/ "./shared/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.apiUrl = "https://baas.kinvey.com/";
    Config.appKey = "kid_HyHoT_REf";
    Config.authHeader = "Basic a2lkX0h5SG9UX1JFZjo1MTkxMDJlZWFhMzQ0MzMyODFjN2MyODM3MGQ5OTIzMQ";
    Config.token = "";
    return Config;
}());



/***/ }),

/***/ "./shared/grocery/grocery.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grocery", function() { return Grocery; });
var Grocery = /** @class */ (function () {
    function Grocery(id, name) {
        this.id = id;
        this.name = name;
    }
    return Grocery;
}());



/***/ }),

/***/ "./shared/grocery/grocery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryService", function() { return GroceryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/config.ts");
/* harmony import */ var _grocery_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./shared/grocery/grocery.model.ts");






var GroceryService = /** @class */ (function () {
    function GroceryService(http) {
        this.http = http;
        this.baseUrl = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + 'appdata/' + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].appKey + '/Groceries';
    }
    GroceryService.prototype.load = function () {
        // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
        var params = {
            sort: '{"_kmd.lmt": 1}'
        };
        return this.http
            .get(this.baseUrl, {
            headers: this.getCommonHeaders(),
            params: params
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var groceryList = [];
            data.forEach(function (grocery) {
                groceryList.push(new _grocery_model__WEBPACK_IMPORTED_MODULE_5__["Grocery"](grocery._id, grocery.Name));
            });
            return groceryList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    GroceryService.prototype.getCommonHeaders = function () {
        return {
            'Content-Type': 'application/json',
            Authorization: 'Kinvey ' + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].token
        };
    };
    GroceryService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    GroceryService.prototype.add = function (name) {
        return this.http
            .post(this.baseUrl, JSON.stringify({ Name: name }), {
            headers: this.getCommonHeaders()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return new _grocery_model__WEBPACK_IMPORTED_MODULE_5__["Grocery"](data._id, name);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    GroceryService.prototype.delete = function (id) {
        return this.http
            .delete(this.baseUrl + '/' + id, {
            headers: this.getCommonHeaders()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    GroceryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    GroceryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GroceryService);
    return GroceryService;
}());



/***/ }),

/***/ "./shared/user/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./shared/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/config.ts");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        if (!user.email || !user.password) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Please provide both an email address and password.');
        }
        return this.http
            .post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + 'user/' + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].appKey, JSON.stringify({
            username: user.email,
            email: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    UserService.prototype.getCommonHeaders = function () {
        return {
            'Content-Type': 'application/json',
            Authorization: _config__WEBPACK_IMPORTED_MODULE_4__["Config"].authHeader
        };
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    UserService.prototype.login = function (user) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + "user/" + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].appKey + "/login", JSON.stringify({
            username: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _config__WEBPACK_IMPORTED_MODULE_4__["Config"].token = data._kmd.authtoken;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3VzZXIvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQTBDO0FBTTFDO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFlBQVk7UUFKeEIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFB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QiwrREFBVTs7SUFEM0IsV0FBVztRQUR2QixnRUFBVSxFQUFFO3lDQUVpQiwrREFBVTtPQUQzQixXQUFXLENBbUR2QjtJQUFELGtCQUFDO0NBQUE7QUFuRHVCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJnci1hcHBcIixcbiAgdGVtcGxhdGU6IFwiPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge30iLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3MnXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJmb250LWZhY2VcIixcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiJ0ZvbnRBd2Vzb21lJ1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInNyY1wiLFwidmFsdWVcIjpcInVybCgnLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LmVvdD92PTQuNy4wJylcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJzcmNcIixcInZhbHVlXCI6XCJ1cmwoJy4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5lb3Q/I2llZml4JnY9NC43LjAnKVxcbiAgICAgICAgICAgIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmYyP3Y9NC43LjAnKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJy4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmP3Y9NC43LjAnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LnR0Zj92PTQuNy4wJykgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAgICAgdXJsKCcuL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuc3ZnP3Y9NC43LjAjZm9udGF3ZXNvbWVyZWd1bGFyJylcXG4gICAgICAgICAgICBmb3JtYXQoJ3N2ZycpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJub3JtYWxcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXN0eWxlXCIsXCJ2YWx1ZVwiOlwibm9ybWFsXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCInRm9udEF3ZXNvbWUnXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudCc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyJztcbi8vIEZvbnRhd2Vzb21lLmluaXQoKTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LCAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGlzdC9saXN0LmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnbGlzdCcsIGNvbXBvbmVudDogTGlzdENvbXBvbmVudCB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID0gW0xvZ2luQ29tcG9uZW50LCBMaXN0Q29tcG9uZW50XTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5hZGQtYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiMWQwMDtcXHJcXG4gICAgcGFkZGluZzogNTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1iYXIgaW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDI1O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYmFyIFRleHRGaWVsZCB7XFxyXFxuICAgIHBhZGRpbmc6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxO1xcclxcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXZpZXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2IxZDAwO1xcclxcbiAgICBwYWRkaW5nOiAyMDtcXHJcXG59XFxyXFxuLmRlbGV0ZS12aWV3IGltYWdlIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5MaXN0VmlldyB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcbi52aXNpYmxlIHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNob3c7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNob3cge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJHcm9jZXJpZXNcXFwiPjwvQWN0aW9uQmFyPlxcclxcblxcclxcbjxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sICpcXFwiPlxcclxcbiAgICA8R3JpZExheW91dCByb3c9XFxcIjBcXFwiIGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIGNsYXNzPVxcXCJhZGQtYmFyXFxcIj5cXHJcXG4gICAgICAgIDxUZXh0RmllbGRcXHJcXG4gICAgICAgICAgICAjZ3JvY2VyeVRleHRGaWVsZFxcclxcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJncm9jZXJ5XFxcIlxcclxcbiAgICAgICAgICAgIGhpbnQ9XFxcIkVudGVyIGEgZ3JvY2VyeSBpdGVtXFxcIlxcclxcbiAgICAgICAgICAgIGNvbD1cXFwiMFxcXCJcXHJcXG4gICAgICAgID48L1RleHRGaWVsZD5cXHJcXG4gICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2FkZC5wbmdcXFwiICh0YXApPVxcXCJhZGQoKVxcXCIgY29sPVxcXCIxXFxcIj48L0ltYWdlPlxcclxcbiAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuICAgIDxSYWRMaXN0Vmlld1xcclxcbiAgICAgICAgcm93PVxcXCIxXFxcIlxcclxcbiAgICAgICAgW2l0ZW1zXT1cXFwiZ3JvY2VyeUxpc3RcXFwiXFxyXFxuICAgICAgICBbY2xhc3MudmlzaWJsZV09XFxcImxpc3RMb2FkZWRcXFwiXFxyXFxuICAgICAgICBzd2lwZUFjdGlvbnM9XFxcInRydWVcXFwiXFxyXFxuICAgICAgICAoaXRlbVN3aXBlUHJvZ3Jlc3NTdGFydGVkKT1cXFwib25Td2lwZUNlbGxTdGFydGVkKCRldmVudClcXFwiXFxyXFxuICAgID5cXHJcXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwicC0xNVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuXFxyXFxuICAgICAgICA8R3JpZExheW91dCAqdGtMaXN0SXRlbVN3aXBlVGVtcGxhdGUgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCI+XFxyXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0XFxyXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJkZWxldGUtdmlld1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgY29sPVxcXCIxXFxcIlxcclxcbiAgICAgICAgICAgICAgICAodGFwKT1cXFwiZGVsZXRlKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJkZWxldGUtdmlld1xcXCJcXHJcXG4gICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2RlbGV0ZS5wbmdcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgPC9SYWRMaXN0Vmlldz5cXHJcXG5cXHJcXG4gICAgPEFjdGl2aXR5SW5kaWNhdG9yXFxyXFxuICAgICAgICBbYnVzeV09XFxcImlzTG9hZGluZ1xcXCJcXHJcXG4gICAgICAgIFt2aXNpYmlsaXR5XT1cXFwiaXNMb2FkaW5nID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1xcXCJcXHJcXG4gICAgICAgIHJvdz1cXFwiMVxcXCJcXHJcXG4gICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXHJcXG4gICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxyXFxuICAgID48L0FjdGl2aXR5SW5kaWNhdG9yPlxcclxcbjwvR3JpZExheW91dD5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tICcuLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5Lm1vZGVsJztcclxuaW1wb3J0IHsgR3JvY2VyeVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkJztcclxuXHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldyc7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3ItbGlzdCcsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbGlzdC5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBwcm92aWRlcnM6IFtHcm9jZXJ5U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQFZpZXdDaGlsZCgnZ3JvY2VyeVRleHRGaWVsZCcsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gICAgZ3JvY2VyeVRleHRGaWVsZDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBncm9jZXJ5ID0gJyc7XHJcbiAgICBncm9jZXJ5TGlzdDogQXJyYXk8R3JvY2VyeT4gPSBbXTtcclxuXHJcbiAgICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIGxpc3RMb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyb2NlcnlTZXJ2aWNlOiBHcm9jZXJ5U2VydmljZSkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ncm9jZXJ5U2VydmljZS5sb2FkKCkuc3Vic2NyaWJlKChsb2FkZWRHcm9jZXJpZXM6IFtdKSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRlZEdyb2Nlcmllcy5mb3JFYWNoKGdyb2NlcnlPYmplY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JvY2VyeS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdFbnRlciBhIGdyb2NlcnkgaXRlbScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXNtaXNzIHRoZSBrZXlib2FyZFxyXG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuZ3JvY2VyeVRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JvY2VyeVNlcnZpY2UuYWRkKHRoaXMuZ3JvY2VyeSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoZ3JvY2VyeU9iamVjdDogR3JvY2VyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5ID0gJyc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0LicsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnT0snXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvY2VyeSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XHJcbiAgICAgICAgdmFyIHN3aXBlVmlldyA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHZhciByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2RlbGV0ZS12aWV3Jyk7XHJcbiAgICAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xyXG4gICAgICAgIHN3aXBlTGltaXRzLmxlZnQgPSAwO1xyXG4gICAgICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZShhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG4gICAgICAgIGxldCBncm9jZXJ5ID0gPEdyb2Nlcnk+YXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5ncm9jZXJ5U2VydmljZS5kZWxldGUoZ3JvY2VyeS5pZCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5ncm9jZXJ5TGlzdC5pbmRleE9mKGdyb2NlcnkpO1xyXG4gICAgICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5iYW5uZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tcGFnZSB7XFxyXFxuICAgIHBhZGRpbmc6IDMwIDIwO1xcclxcbiAgICBtYXgtd2lkdGg6IDQwMDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1pbnNpZGUge1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4taW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcclxcbiAgICBmb250LXNpemU6IDE2O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1IDI1O1xcclxcbiAgICBwbGFjZWhvbGRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcclxcbn1cXHJcXG4ubG9naW4taW5wdXQgKyAubG9naW4taW5wdXQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMDtcXHJcXG59XFxyXFxuLmNoZWNrYm94IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDI1O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjA7XFxyXFxufVxcclxcbi5jaGVja2JveC1zcXVhcmUge1xcclxcbiAgICB3aWR0aDogMTQ7XFxyXFxuICAgIGhlaWdodDogMTQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcbi5jaGVja2JveCBsYWJlbCB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBvcGFjaXR5OiAwLjM7XFxyXFxufVxcclxcblxcclxcbi5idG4tcHJpbWFyeSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYwZjY1O1xcclxcbiAgICBmb250LXNpemU6IDE2O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBwYWRkaW5nOiAxNSAyNTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWxpbmsge1xcclxcbiAgICB3aWR0aDogNDA7XFxyXFxuICAgIGhlaWdodDogNDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5idG4tbGFuZ3VhZ2V7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDA7XFxyXFxuICAgIHBhZGRpbmc6IDIgMTU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIlNuYXBib3RzXFxcIj48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48RmxleGJveExheW91dFxcclxcbiAgICBmbGV4RGlyZWN0aW9uPVxcXCJjb2x1bW5cXFwiXFxyXFxuICAgIGp1c3RpZnlDb250ZW50PVxcXCJmbGV4LXN0YXJ0XFxcIlxcclxcbiAgICBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNmZmZcXFwiXFxyXFxuPlxcclxcbiAgICA8U3RhY2tMYXlvdXRcXHJcXG4gICAgICAgIGNsYXNzPVxcXCJiYW5uZXJcXFwiXFxyXFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9XFxcIn4vaW1hZ2VzL2Jhbm5lci5wbmdcXFwiXFxyXFxuICAgICAgICBoZWlnaHQ9XFxcIjI1MFxcXCJcXHJcXG4gICAgPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbiAgICA8U2Nyb2xsVmlldyBmbGV4R3Jvdz1cXFwiMVxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXHJcXG4gICAgICAgIDxGbGV4Ym94TGF5b3V0XFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImxvZ2luLXBhZ2VcXFwiXFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVxcXCIjMjQyNDI0XFxcIlxcclxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XFxcImNvbHVtblxcXCJcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cXFwiZmxleC1zdGFydFxcXCJcXHJcXG4gICAgICAgID5cXHJcXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxvZ2luLWluc2lkZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhpbnQ9XFxcIlVTRVJOQU1FXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImxvZ2luLWlucHV0XFxcIlxcclxcbiAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XFxyXFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhpbnQ9XFxcIlBBU1NXT1JEXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImxvZ2luLWlucHV0XFxcIlxcclxcbiAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XFxyXFxuICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJjaGVja2JveC1zcXVhcmVcXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlJlbWVtYmVyIG1lXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4tcHJpbWFyeVxcXCIgW3RleHRdPVxcXCInU2lnbiBpbidcXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcIkZvcmdvdCBwYXNzd29yZD9cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCIjZmZmXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPVxcXCIxNVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT1cXFwiMTVcXFwiXFxyXFxuICAgICAgICAgICAgICAgID48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXRcXHJcXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cXFwicm93XFxcIlxcclxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVxcXCJjZW50ZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGZsZXhXcmFwPVxcXCJ3cmFwXFxcIlxcclxcbiAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsXFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCJEb24ndCBoYXZlIGFuIGFjY291bnQ/XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwiI2FhYVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbFxcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwiQ3JlYXRlIGFjY291bnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XFxcIjYwMFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCIjZmZmXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdD1cXFwiMTBcXFwiXFxyXFxuICAgICAgICAgICAgICAgID48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcIm9yIGxvZ2luIHdpdGhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCIjYWFhXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XFxcIjEwMCVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgID48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8RmxleGJveExheW91dFxcclxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XFxcImNlbnRlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cXFwiMTVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209XFxcIjE1XFxcIlxcclxcbiAgICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8RmxleGJveExheW91dFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzb2NpYWwtbGlua1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XFxcImNlbnRlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImZhXFxcIiB0ZXh0PVxcXCImI3hmMWEwO1xcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInNvY2lhbC1saW5rXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cXFwiY2VudGVyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9XFxcIjEwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZmFcXFwiIHRleHQ9XFxcIiYjeGYwOWE7XFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcclxcblxcclxcbiAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGp1c3RpZnlDb250ZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImJ0bi1sYW5ndWFnZVxcXCIgdGV4dD1cXFwiQ2hhbmdlIExhbmd1YWdlXFxcIiBtYXJnaW5Cb3R0b209XFxcIjIwXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXHJcXG4gICAgICAgIDwvRmxleGJveExheW91dD5cXHJcXG4gICAgPC9TY3JvbGxWaWV3PlxcclxcbjwvRmxleGJveExheW91dD5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9zaGFyZWQvdXNlci91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdnci1sb2dpbicsXHJcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2xvZ2luLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnbG9naW4uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9ICdteS50ZXN0LmFjY291bnRAbmF0aXZlc2NyaXB0Lm9yZyc7XHJcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gJ215cGFzc3dvcmQnO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZURpc3BsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaWduVXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbGlzdCddKSxcclxuICAgICAgICAgICAgZXhjZXB0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChleGNlcHRpb24uZXJyb3IgJiYgZXhjZXB0aW9uLmVycm9yLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXhjZXB0aW9uLmVycm9yLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXhjZXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnblVwKCkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhjZXB0aW9uLmVycm9yICYmIGV4Y2VwdGlvbi5lcnJvci5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGV4Y2VwdGlvbi5lcnJvci5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGV4Y2VwdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiIsImV4cG9ydCBjbGFzcyBDb25maWcge1xuICBzdGF0aWMgYXBpVXJsID0gXCJodHRwczovL2JhYXMua2ludmV5LmNvbS9cIjtcbiAgc3RhdGljIGFwcEtleSA9IFwia2lkX0h5SG9UX1JFZlwiO1xuICBzdGF0aWMgYXV0aEhlYWRlciA9IFwiQmFzaWMgYTJsa1gwaDVTRzlVWDFKRlpqbzFNVGt4TURKbFpXRmhNelEwTXpNeU9ERmpOMk15T0RNM01HUTVPVEl6TVFcIjtcbiAgc3RhdGljIHRva2VuID0gXCJcIjtcbn0iLCJleHBvcnQgY2xhc3MgR3JvY2VyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IHN0cmluZywgcHVibGljIG5hbWU6IHN0cmluZykge31cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBHcm9jZXJ5IH0gZnJvbSAnLi9ncm9jZXJ5Lm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdyb2NlcnlTZXJ2aWNlIHtcclxuICAgIGJhc2VVcmwgPSBDb25maWcuYXBpVXJsICsgJ2FwcGRhdGEvJyArIENvbmZpZy5hcHBLZXkgKyAnL0dyb2Nlcmllcyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICAgIGxvYWQoKSB7XHJcbiAgICAgICAgLy8gS2ludmV5LXNwZWNpZmljIHN5bnRheCB0byBzb3J0IHRoZSBncm9jZXJpZXMgYnkgbGFzdCBtb2RpZmllZCB0aW1lLiBEb27igJl0IHdvcnJ5IGFib3V0IHRoZSBkZXRhaWxzIGhlcmUuXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgc29ydDogJ3tcIl9rbWQubG10XCI6IDF9J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldCh0aGlzLmJhc2VVcmwsIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoKGRhdGE6IFtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdyb2NlcnlMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKGdyb2NlcnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncm9jZXJ5TGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEdyb2NlcnkoKDxhbnk+Z3JvY2VyeSkuX2lkLCAoPGFueT5ncm9jZXJ5KS5OYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBncm9jZXJ5TGlzdDtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21tb25IZWFkZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICdLaW52ZXkgJyArIENvbmZpZy50b2tlblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0KHRoaXMuYmFzZVVybCwgSlNPTi5zdHJpbmdpZnkoeyBOYW1lOiBuYW1lIH0pLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdyb2NlcnkoKDxhbnk+ZGF0YSkuX2lkLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmRlbGV0ZSh0aGlzLmJhc2VVcmwgKyAnLycgKyBpZCwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycykpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICAgIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcclxuICAgICAgICBpZiAoIXVzZXIuZW1haWwgfHwgIXVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoXHJcbiAgICAgICAgICAgICAgICAnUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC4nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0KFxyXG4gICAgICAgICAgICAgICAgQ29uZmlnLmFwaVVybCArICd1c2VyLycgKyBDb25maWcuYXBwS2V5LFxyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21tb25IZWFkZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IENvbmZpZy5hdXRoSGVhZGVyXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4odXNlcjogVXNlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICAgICAgICAgQ29uZmlnLmFwaVVybCArIFwidXNlci9cIiArIENvbmZpZy5hcHBLZXkgKyBcIi9sb2dpblwiLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cclxuICAgICAgICApLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiByZXNwb25zZSksXHJcbiAgICAgICAgICAgIHRhcChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIENvbmZpZy50b2tlbiA9ICg8YW55PmRhdGEpLl9rbWQuYXV0aHRva2VuXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==