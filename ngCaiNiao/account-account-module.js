(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/ng-recaptcha/index.js":
/*!********************************************!*\
  !*** ./node_modules/ng-recaptcha/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var recaptcha_component_1 = __webpack_require__(/*! ./recaptcha/recaptcha.component */ "./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js");
exports.RecaptchaComponent = recaptcha_component_1.RecaptchaComponent;
var recaptcha_loader_service_1 = __webpack_require__(/*! ./recaptcha/recaptcha-loader.service */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js");
exports.RecaptchaLoaderService = recaptcha_loader_service_1.RecaptchaLoaderService;
exports.RECAPTCHA_LANGUAGE = recaptcha_loader_service_1.RECAPTCHA_LANGUAGE;
var recaptcha_module_1 = __webpack_require__(/*! ./recaptcha/recaptcha.module */ "./node_modules/ng-recaptcha/recaptcha/recaptcha.module.js");
exports.RecaptchaModule = recaptcha_module_1.RecaptchaModule;
var recaptcha_settings_1 = __webpack_require__(/*! ./recaptcha/recaptcha-settings */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-settings.js");
exports.RECAPTCHA_SETTINGS = recaptcha_settings_1.RECAPTCHA_SETTINGS;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha-common.module.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha-common.module.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var recaptcha_component_1 = __webpack_require__(/*! ./recaptcha.component */ "./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js");
var RecaptchaCommonModule = /** @class */ (function () {
    function RecaptchaCommonModule() {
    }
    RecaptchaCommonModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [recaptcha_component_1.RecaptchaComponent],
                    exports: [recaptcha_component_1.RecaptchaComponent],
                },] },
    ];
    /** @nocollapse */
    RecaptchaCommonModule.ctorParameters = function () { return []; };
    return RecaptchaCommonModule;
}());
exports.RecaptchaCommonModule = RecaptchaCommonModule;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var of_1 = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
exports.RECAPTCHA_LANGUAGE = new core_1.InjectionToken('recaptcha-language');
var RecaptchaLoaderService = /** @class */ (function () {
    function RecaptchaLoaderService(
        // tslint:disable-next-line:no-any
        platformId, language) {
        this.platformId = platformId;
        this.language = language;
        this.init();
        this.ready = common_1.isPlatformBrowser(this.platformId) ? RecaptchaLoaderService.ready.asObservable() : of_1.of();
    }
    /** @internal */
    RecaptchaLoaderService.prototype.init = function () {
        if (RecaptchaLoaderService.ready) {
            return;
        }
        if (common_1.isPlatformBrowser(this.platformId)) {
            window.ng2recaptchaloaded = function () {
                RecaptchaLoaderService.ready.next(grecaptcha);
            };
            RecaptchaLoaderService.ready = new BehaviorSubject_1.BehaviorSubject(null);
            var script = document.createElement('script');
            script.innerHTML = '';
            var langParam = this.language ? '&hl=' + this.language : '';
            script.src = "https://www.google.com/recaptcha/api.js?render=explicit&onload=ng2recaptchaloaded" + langParam;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }
    };
    /**
     * @internal
     * @nocollapse
     */
    RecaptchaLoaderService.ready = null;
    RecaptchaLoaderService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    RecaptchaLoaderService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [exports.RECAPTCHA_LANGUAGE,] },] },
    ]; };
    return RecaptchaLoaderService;
}());
exports.RecaptchaLoaderService = RecaptchaLoaderService;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha-settings.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha-settings.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
exports.RECAPTCHA_SETTINGS = new core_1.InjectionToken('recaptcha-settings');


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var recaptcha_loader_service_1 = __webpack_require__(/*! ./recaptcha-loader.service */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js");
var recaptcha_settings_1 = __webpack_require__(/*! ./recaptcha-settings */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-settings.js");
var nextId = 0;
var RecaptchaComponent = /** @class */ (function () {
    function RecaptchaComponent(elementRef, loader, zone, settings) {
        this.elementRef = elementRef;
        this.loader = loader;
        this.zone = zone;
        this.id = "ngrecaptcha-" + nextId++;
        this.resolved = new core_1.EventEmitter();
        if (settings) {
            this.siteKey = settings.siteKey;
            this.theme = settings.theme;
            this.type = settings.type;
            this.size = settings.size;
            this.badge = settings.badge;
        }
    }
    RecaptchaComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscription = this.loader.ready.subscribe(function (grecaptcha) {
            if (grecaptcha != null) {
                _this.grecaptcha = grecaptcha;
                _this.renderRecaptcha();
            }
        });
    };
    RecaptchaComponent.prototype.ngOnDestroy = function () {
        // reset the captcha to ensure it does not leave anything behind
        // after the component is no longer needed
        this.grecaptchaReset();
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * Executes the invisible recaptcha.
     * Does nothing if component's size is not set to "invisible".
     */
    RecaptchaComponent.prototype.execute = function () {
        if (this.size !== 'invisible') {
            return;
        }
        if (this.widget != null) {
            this.grecaptcha.execute(this.widget);
        }
    };
    RecaptchaComponent.prototype.reset = function () {
        if (this.widget != null) {
            if (this.grecaptcha.getResponse(this.widget)) {
                // Only emit an event in case if something would actually change.
                // That way we do not trigger "touching" of the control if someone does a "reset"
                // on a non-resolved captcha.
                this.resolved.emit(null);
            }
            this.grecaptchaReset();
        }
    };
    /** @internal */
    RecaptchaComponent.prototype.expired = function () {
        this.resolved.emit(null);
    };
    /** @internal */
    RecaptchaComponent.prototype.captchaReponseCallback = function (response) {
        this.resolved.emit(response);
    };
    /** @internal */
    RecaptchaComponent.prototype.grecaptchaReset = function () {
        var _this = this;
        if (this.widget != null) {
            this.zone.runOutsideAngular(function () { return _this.grecaptcha.reset(_this.widget); });
        }
    };
    /** @internal */
    RecaptchaComponent.prototype.renderRecaptcha = function () {
        var _this = this;
        this.widget = this.grecaptcha.render(this.elementRef.nativeElement, {
            badge: this.badge,
            callback: function (response) {
                _this.zone.run(function () { return _this.captchaReponseCallback(response); });
            },
            'expired-callback': function () {
                _this.zone.run(function () { return _this.expired(); });
            },
            sitekey: this.siteKey,
            size: this.size,
            tabindex: this.tabIndex,
            theme: this.theme,
            type: this.type,
        });
    };
    RecaptchaComponent.decorators = [
        { type: core_1.Component, args: [{
                    exportAs: 'reCaptcha',
                    selector: 're-captcha',
                    template: "",
                },] },
    ];
    /** @nocollapse */
    RecaptchaComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: recaptcha_loader_service_1.RecaptchaLoaderService, },
        { type: core_1.NgZone, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [recaptcha_settings_1.RECAPTCHA_SETTINGS,] },] },
    ]; };
    RecaptchaComponent.propDecorators = {
        'id': [{ type: core_1.Input }, { type: core_1.HostBinding, args: ['attr.id',] },],
        'siteKey': [{ type: core_1.Input },],
        'theme': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'badge': [{ type: core_1.Input },],
        'resolved': [{ type: core_1.Output },],
    };
    return RecaptchaComponent;
}());
exports.RecaptchaComponent = RecaptchaComponent;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha.module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha.module.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var recaptcha_common_module_1 = __webpack_require__(/*! ./recaptcha-common.module */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-common.module.js");
var recaptcha_loader_service_1 = __webpack_require__(/*! ./recaptcha-loader.service */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js");
var recaptcha_component_1 = __webpack_require__(/*! ./recaptcha.component */ "./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js");
var RecaptchaModule = /** @class */ (function () {
    function RecaptchaModule() {
    }
    RecaptchaModule.forRoot = function () {
        return {
            ngModule: RecaptchaModule,
            providers: [
                recaptcha_loader_service_1.RecaptchaLoaderService,
            ],
        };
    };
    RecaptchaModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [recaptcha_component_1.RecaptchaComponent],
                    imports: [recaptcha_common_module_1.RecaptchaCommonModule],
                },] },
    ];
    /** @nocollapse */
    RecaptchaModule.ctorParameters = function () { return []; };
    return RecaptchaModule;
}());
exports.RecaptchaModule = RecaptchaModule;


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/observable/of.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/of.js ***!
  \*********************************************************/
/*! exports provided: of */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["of"]; });


//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./src/account/account-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/account/account-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_common_ui_app_ui_customization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/ui/app-ui-customization.service */ "./src/shared/common/ui/app-ui-customization.service.ts");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.component */ "./src/account/account.component.ts");
/* harmony import */ var _auth_account_route_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/account-route-guard */ "./src/account/auth/account-route-guard.ts");
/* harmony import */ var _email_activation_confirm_email_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-activation/confirm-email.component */ "./src/account/email-activation/confirm-email.component.ts");
/* harmony import */ var _email_activation_email_activation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-activation/email-activation.component */ "./src/account/email-activation/email-activation.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/account/login/login.component.ts");
/* harmony import */ var _login_send_two_factor_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/send-two-factor-code.component */ "./src/account/login/send-two-factor-code.component.ts");
/* harmony import */ var _login_validate_two_factor_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/validate-two-factor-code.component */ "./src/account/login/validate-two-factor-code.component.ts");
/* harmony import */ var _password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./password/forgot-password.component */ "./src/account/password/forgot-password.component.ts");
/* harmony import */ var _password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./password/reset-password.component */ "./src/account/password/reset-password.component.ts");
/* harmony import */ var _payment_buy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./payment/buy.component */ "./src/account/payment/buy.component.ts");
/* harmony import */ var _payment_upgrade_or_extend_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payment/upgrade-or-extend.component */ "./src/account/payment/upgrade-or-extend.component.ts");
/* harmony import */ var _register_register_tenant_result_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register-tenant-result.component */ "./src/account/register/register-tenant-result.component.ts");
/* harmony import */ var _register_register_tenant_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register-tenant.component */ "./src/account/register/register-tenant.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/account/register/register.component.ts");
/* harmony import */ var _register_select_edition_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./register/select-edition.component */ "./src/account/register/select-edition.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule(router, _uiCustomizationService) {
        var _this = this;
        this.router = router;
        this._uiCustomizationService = _uiCustomizationService;
        router.events.subscribe(function (event) {
            setTimeout(function () {
                //this will reinitialize metronic App, when navigated to admin module
                mApp.initialized = false;
                _this.toggleBodyCssClass(event.url);
            }, 0);
        });
    }
    AccountRoutingModule.prototype.toggleBodyCssClass = function (url) {
        if (!url) {
            $('body').attr('class', this._uiCustomizationService.getAccountModuleBodyClass());
            return;
        }
        if (url.indexOf('/account/') >= 0) {
            $('body').attr('class', this._uiCustomizationService.getAccountModuleBodyClass());
        }
        else {
            $('body').attr('class', this._uiCustomizationService.getAppModuleBodyClass());
        }
    };
    AccountRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"],
                        children: [
                            { path: '', redirectTo: 'login' },
                            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], canActivate: [_auth_account_route_guard__WEBPACK_IMPORTED_MODULE_4__["AccountRouteGuard"]] },
                            { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"], canActivate: [_auth_account_route_guard__WEBPACK_IMPORTED_MODULE_4__["AccountRouteGuard"]] },
                            { path: 'register-tenant', component: _register_register_tenant_component__WEBPACK_IMPORTED_MODULE_15__["RegisterTenantComponent"], canActivate: [_auth_account_route_guard__WEBPACK_IMPORTED_MODULE_4__["AccountRouteGuard"]] },
                            { path: 'register-tenant-result', component: _register_register_tenant_result_component__WEBPACK_IMPORTED_MODULE_14__["RegisterTenantResultComponent"], canActivate: [_auth_account_route_guard__WEBPACK_IMPORTED_MODULE_4__["AccountRouteGuard"]] },
                            { path: 'forgot-password', component: _password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordComponent"], canActivate: [_auth_account_route_guard__WEBPACK_IMPORTED_MODULE_4__["AccountRouteGuard"]] },
                            { path: 'reset-password', component: _password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"], canActivate: [_auth_account_route_guard__WEBPACK_IMPORTED_MODULE_4__["AccountRouteGuard"]] },
                            { path: 'email-activation', component: _email_activation_email_activation_component__WEBPACK_IMPORTED_MODULE_6__["EmailActivationComponent"], canActivate: [_auth_account_route_guard__WEBPACK_IMPORTED_MODULE_4__["AccountRouteGuard"]] },
                            { path: 'confirm-email', component: _email_activation_confirm_email_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmEmailComponent"], canActivate: [_auth_account_route_guard__WEBPACK_IMPORTED_MODULE_4__["AccountRouteGuard"]] },
                            { path: 'send-code', component: _login_send_two_factor_code_component__WEBPACK_IMPORTED_MODULE_8__["SendTwoFactorCodeComponent"], canActivate: [_auth_account_route_guard__WEBPACK_IMPORTED_MODULE_4__["AccountRouteGuard"]] },
                            { path: 'verify-code', component: _login_validate_two_factor_code_component__WEBPACK_IMPORTED_MODULE_9__["ValidateTwoFactorCodeComponent"], canActivate: [_auth_account_route_guard__WEBPACK_IMPORTED_MODULE_4__["AccountRouteGuard"]] },
                            { path: 'buy', component: _payment_buy_component__WEBPACK_IMPORTED_MODULE_12__["BuyComponent"] },
                            { path: 'extend', component: _payment_upgrade_or_extend_component__WEBPACK_IMPORTED_MODULE_13__["UpgradeOrExtendComponent"] },
                            { path: 'upgrade', component: _payment_upgrade_or_extend_component__WEBPACK_IMPORTED_MODULE_13__["UpgradeOrExtendComponent"] },
                            { path: 'select-edition', component: _register_select_edition_component__WEBPACK_IMPORTED_MODULE_17__["SelectEditionComponent"] }
                        ]
                    }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_common_ui_app_ui_customization_service__WEBPACK_IMPORTED_MODULE_2__["AppUiCustomizationService"]])
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/account/account.component.html":
/*!********************************************!*\
  !*** ./src/account/account.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'m-grid m-grid--hor m-grid--root m-page': !useFullWidthLayout(), 'm-content': useFullWidthLayout() }\" [style.text-align]=\"useFullWidthLayout() ? 'center' : 'left'\">\n    <div [ngClass]=\"{'m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--singin': !useFullWidthLayout(), 'row':useFullWidthLayout()}\" id=\"m_login\">\n        <div [ngClass]=\"{'m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside': !useFullWidthLayout(), 'col-md-12': useFullWidthLayout()}\">\n            <div [ngClass]=\"{'m-stack m-stack--hor m-stack--desktop': !useFullWidthLayout()}\">\n                <div [ngClass]=\"{'m-stack__item m-stack__item--fluid': !useFullWidthLayout()}\">\n                    <div class=\"m-login__wrapper\">\n                        <div class=\"m-login__logo\">\n                            <a (click)=\"goToHome()\">\n                                <img *ngIf=\"!appSession.tenant || !appSession.tenant.logoId\" [src]=\"appRootUrl() + 'assets/common/images/logo.png'\" alt=\"logo\" width=\"139\" height=\"35\" />\n                                <img *ngIf=\"appSession.tenant && appSession.tenant.logoId\" [src]=\"remoteServiceBaseUrl + '/TenantCustomization/GetTenantLogo?skin=light&tenantId=' + appSession.tenant.id + '&id=' + appSession.tenant.logoId\" alt=\"logo\" width=\"168\" height=\"33\" />\n                            </a>\n                        </div>\n                        <div *ngIf=\"showTenantChange()\" class=\"content tenant-change-box\">\n                            <tenant-change></tenant-change>\n                        </div>\n                        <router-outlet></router-outlet>\n                    </div>\n                    <div>\n                        <language-switch></language-switch>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"!useFullWidthLayout()\" class=\"m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1 m-login__content\" [style.background-image]=\"getBgUrl()\">\n            <div class=\"m-grid__item m-grid__item--middle\">\n                <h3 class=\"m-login__welcome\">\n                   AspNet Zero\n                </h3>\n                <p class=\"m-login__msg\">\n                    Base solution for your next web application\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/account/account.component.less":
/*!********************************************!*\
  !*** ./src/account/account.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/***\nLogin page\n***/\n/* bg color */\n.login {\n  background-color: #364150 !important;\n}\n.login .logo {\n  margin: 0 auto;\n  margin-top: 60px;\n  padding: 15px;\n  text-align: center;\n}\n.login .content {\n  background-color: #eceef1;\n  border-radius: 7px;\n  width: 400px;\n  margin: 40px auto 10px auto;\n  padding: 30px;\n  padding-top: 10px;\n  overflow: hidden;\n  position: relative;\n}\n.login .content h3 {\n  color: #4db3a5;\n  text-align: center;\n  font-size: 28px;\n  font-weight: 400 !important;\n}\n.login .content h4 {\n  color: #555;\n}\n.login .content .hint {\n  color: #999;\n  padding: 0;\n  margin: 15px 0 7px 0;\n}\n.login .content .login-form,\n.login .content .forget-form {\n  padding: 0px;\n  margin: 0px;\n}\n.login .content .form-control {\n  border: none;\n  background-color: #dde3ec;\n  height: 43px;\n  color: #8290a3;\n  border: 1px solid #dde3ec;\n}\n.login .content .form-control:focus,\n.login .content .form-control:active {\n  border: 1px solid #c3ccda;\n}\n.login .content .form-control::-moz-placeholder {\n  color: #8290a3;\n  opacity: 1;\n}\n.login .content .form-control:-ms-input-placeholder {\n  color: #8290a3;\n}\n.login .content .form-control::-webkit-input-placeholder {\n  color: #8290a3;\n}\n.login .content select.form-control {\n  padding-left: 9px;\n  padding-right: 9px;\n}\n.login .content .form-title {\n  font-weight: 300;\n  margin-bottom: 25px;\n}\n.login .content .form-actions {\n  clear: both;\n  border: 0px;\n  border-bottom: 1px solid #eee;\n  padding: 0px 30px 25px 30px;\n  margin-left: -30px;\n  margin-right: -30px;\n}\n.login-options {\n  margin-bottom: 30px;\n  overflow: hidden;\n}\n.login-options h4 {\n  float: left;\n  font-weight: 600;\n  font-size: 15px;\n  color: #7d91aa !important;\n}\n.login-options .social-icons {\n  float: right;\n  padding-top: 3px;\n}\n.social-icons {\n  padding: 0;\n  margin: 0;\n}\n.social-icons li {\n  float: left;\n  display: inline;\n  list-style: none;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  text-indent: -9999px;\n}\n.social-icons li > a {\n  border-radius: 2px;\n  width: 28px;\n  height: 28px;\n  display: block;\n  background-position: 0 0;\n  background-repeat: no-repeat;\n  transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n}\n.social-icons li:hover > a {\n  background-position: 0 -38px;\n}\n.social-icons li .twitter {\n  background: url(/assets/common/images/social/twitter.png) no-repeat;\n}\n.social-icons li .facebook {\n  background: url(/assets/common/images/social/facebook.png) no-repeat;\n}\n.social-icons li .googleplus {\n  background: url(/assets/common/images/social/google.png) no-repeat;\n}\n.social-icons li .microsoft {\n  background: url(/assets/common/images/social/microsoft.png) no-repeat;\n}\n.social-icons li .openidconnect {\n  background: url(/assets/common/images/social/open-id-connect.png) no-repeat;\n}\n.login-options .social-icons li a {\n  border-radius: 15px 15px 15px 15px !important;\n  -moz-border-radius: 15px 15px 15px 15px !important;\n  -webkit-border-radius: 15px 15px 15px 15px !important;\n}\n.login .content .form-actions .checkbox {\n  margin-left: 0;\n  padding-left: 0;\n}\n.login .content .forget-form .form-actions {\n  border: 0;\n  margin-bottom: 0;\n  padding-bottom: 20px;\n}\n.login .content .register-form .form-actions {\n  border: 0;\n  margin-bottom: 0;\n  padding-bottom: 0px;\n}\n.login .content .form-actions .btn {\n  margin-top: 1px;\n}\n.login .content .form-actions .btn-success {\n  font-weight: 600;\n  padding: 10px 20px !important;\n}\n.login .content .form-actions .btn-default {\n  font-weight: 600;\n  padding: 10px 25px !important;\n  color: #6c7a8d;\n  background-color: #ffffff;\n  border: none;\n}\n.login .content .form-actions .btn-default:hover {\n  background-color: #fafaff;\n  color: #45b6af;\n}\n.login .content .forget-password {\n  font-size: 14px;\n  float: right;\n  display: inline-block;\n  margin-top: 10px;\n}\n.login .content .check {\n  color: #8290a3;\n}\n.login .content .rememberme {\n  margin-left: 8px;\n  margin-top: 10px;\n}\n.login .content .create-account {\n  margin: 0 -40px -40px -40px;\n  padding: 15px 0 17px 0;\n  text-align: center;\n  background-color: #6c7a8d;\n  border-radius: 0 0 7px 7px;\n}\n.login .content .create-account p a {\n  font-weight: 600;\n  font-size: 14px;\n  color: #c3cedd;\n}\n.login .content .create-account .pipe-divider {\n  color: #c3cedd;\n}\n.login .content .create-account a {\n  display: inline-block;\n  margin-top: 5px;\n}\n.login .content .alert {\n  margin-bottom: 10px;\n}\n.login .content .alert:last-child {\n  margin-bottom: 0;\n}\n/* footer copyright */\n.login .copyright {\n  text-align: center;\n  margin: 0 auto 30px 0;\n  padding: 10px;\n  color: #7a8ca5;\n  font-size: 13px;\n}\n.language-switch-area {\n  text-align: center;\n  padding: 10px;\n}\n.language-switch-area a {\n  cursor: pointer;\n}\n.language-switch-area a span {\n  -ms-opacity: 0.5;\n  opacity: 0.5;\n}\n.language-switch-area a span.language-icon-current {\n  -ms-opacity: 1;\n  opacity: 1;\n}\n@media (max-width: 440px) {\n  /***\n  Login page\n  ***/\n  .login .logo {\n    margin-top: 10px;\n  }\n  .login .content {\n    width: 280px;\n    margin-top: 10px;\n  }\n  .login .content h3 {\n    font-size: 22px;\n  }\n  .forget-password {\n    display: inline-block;\n    margin-top: 20px;\n  }\n  .login-options .social-icons {\n    float: left;\n    padding-top: 3px;\n  }\n  .login .checkbox {\n    font-size: 13px;\n  }\n}\n.content.account-forms {\n  margin-top: 10px;\n}\n.content.tenant-change-box {\n  padding: 16px;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/account/account.component.ts":
/*!******************************************!*\
  !*** ./src/account/account.component.ts ***!
  \******************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_common_ui_app_ui_customization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/common/ui/app-ui-customization.service */ "./src/shared/common/ui/app-ui-customization.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.service */ "./src/account/login/login.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountComponent = /** @class */ (function (_super) {
    __extends(AccountComponent, _super);
    function AccountComponent(injector, _router, _loginService, _uiCustomizationService, viewContainerRef) {
        var _this = _super.call(this, injector) || this;
        _this._router = _router;
        _this._loginService = _loginService;
        _this._uiCustomizationService = _uiCustomizationService;
        _this.currentYear = moment__WEBPACK_IMPORTED_MODULE_6__().year();
        _this.remoteServiceBaseUrl = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__["AppConsts"].remoteServiceBaseUrl;
        _this.tenantChangeDisabledRoutes = ['select-edition', 'buy', 'upgrade', 'extend', 'register-tenant'];
        // We need this small hack in order to catch application root view container ref for modals
        _this.viewContainerRef = viewContainerRef;
        return _this;
    }
    AccountComponent.prototype.showTenantChange = function () {
        var _this = this;
        if (!this._router.url) {
            return false;
        }
        if (lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](this.tenantChangeDisabledRoutes, function (route) { return _this._router.url.indexOf('/account/' + route) >= 0; }).length) {
            return false;
        }
        return abp.multiTenancy.isEnabled && !this.supportsTenancyNameInUrl();
    };
    AccountComponent.prototype.useFullWidthLayout = function () {
        return this._router.url.indexOf('/account/select-edition') >= 0;
    };
    AccountComponent.prototype.ngOnInit = function () {
        this._loginService.init();
        $('body').attr('class', this._uiCustomizationService.getAccountModuleBodyClass());
    };
    AccountComponent.prototype.goToHome = function () {
        window.location.href = '/';
    };
    AccountComponent.prototype.getBgUrl = function () {
        return 'url(./assets/metronic/dist/html/' + this.ui.getTheme() + '/assets/demo/' + this.ui.getTheme() + '/media/img/bg/bg-4.jpg)';
    };
    AccountComponent.prototype.supportsTenancyNameInUrl = function () {
        return (_shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__["AppConsts"].appBaseUrlFormat && _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__["AppConsts"].appBaseUrlFormat.indexOf(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__["AppConsts"].tenancyNamePlaceHolderInUrl) >= 0);
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./account.component.html */ "./src/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.less */ "./src/account/account.component.less")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _shared_common_ui_app_ui_customization_service__WEBPACK_IMPORTED_MODULE_4__["AppUiCustomizationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], AccountComponent);
    return AccountComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/account.module.ts":
/*!***************************************!*\
  !*** ./src/account/account.module.ts ***!
  \***************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _abp_abp_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/abp.module */ "./node_modules/abp-ng2-module/dist/src/abp.module.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _shared_common_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/common/common.module */ "./src/shared/common/common.module.ts");
/* harmony import */ var _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service-proxies/service-proxy.module */ "./src/shared/service-proxies/service-proxy.module.ts");
/* harmony import */ var _shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/utils/utils.module */ "./src/shared/utils/utils.module.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account-routing.module */ "./src/account/account-routing.module.ts");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account.component */ "./src/account/account.component.ts");
/* harmony import */ var _auth_account_route_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/account-route-guard */ "./src/account/auth/account-route-guard.ts");
/* harmony import */ var _email_activation_confirm_email_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./email-activation/confirm-email.component */ "./src/account/email-activation/confirm-email.component.ts");
/* harmony import */ var _email_activation_email_activation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./email-activation/email-activation.component */ "./src/account/email-activation/email-activation.component.ts");
/* harmony import */ var _language_switch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./language-switch.component */ "./src/account/language-switch.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/account/login/login.component.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.service */ "./src/account/login/login.service.ts");
/* harmony import */ var _login_send_two_factor_code_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/send-two-factor-code.component */ "./src/account/login/send-two-factor-code.component.ts");
/* harmony import */ var _login_validate_two_factor_code_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/validate-two-factor-code.component */ "./src/account/login/validate-two-factor-code.component.ts");
/* harmony import */ var _password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./password/forgot-password.component */ "./src/account/password/forgot-password.component.ts");
/* harmony import */ var _password_reset_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./password/reset-password.component */ "./src/account/password/reset-password.component.ts");
/* harmony import */ var _payment_buy_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./payment/buy.component */ "./src/account/payment/buy.component.ts");
/* harmony import */ var _payment_payment_gateways_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./payment/payment-gateways.component */ "./src/account/payment/payment-gateways.component.ts");
/* harmony import */ var _payment_paypal_paypal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./payment/paypal/paypal.component */ "./src/account/payment/paypal/paypal.component.ts");
/* harmony import */ var _payment_upgrade_or_extend_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./payment/upgrade-or-extend.component */ "./src/account/payment/upgrade-or-extend.component.ts");
/* harmony import */ var _register_register_tenant_result_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./register/register-tenant-result.component */ "./src/account/register/register-tenant-result.component.ts");
/* harmony import */ var _register_register_tenant_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./register/register-tenant.component */ "./src/account/register/register-tenant.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./register/register.component */ "./src/account/register/register.component.ts");
/* harmony import */ var _register_select_edition_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./register/select-edition.component */ "./src/account/register/select-edition.component.ts");
/* harmony import */ var _register_tenant_registration_helper_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./register/tenant-registration-helper.service */ "./src/account/register/tenant-registration-helper.service.ts");
/* harmony import */ var _shared_tenant_change_modal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/tenant-change-modal.component */ "./src/account/shared/tenant-change-modal.component.ts");
/* harmony import */ var _shared_tenant_change_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/tenant-change.component */ "./src/account/shared/tenant-change.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["JsonpModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__["RecaptchaModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                _abp_abp_module__WEBPACK_IMPORTED_MODULE_0__["AbpModule"],
                _shared_common_common_module__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_7__["UtilsModule"],
                _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_6__["ServiceProxyModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_10__["AccountRoutingModule"]
            ],
            declarations: [
                _account_component__WEBPACK_IMPORTED_MODULE_11__["AccountComponent"],
                _shared_tenant_change_component__WEBPACK_IMPORTED_MODULE_32__["TenantChangeComponent"],
                _shared_tenant_change_modal_component__WEBPACK_IMPORTED_MODULE_31__["TenantChangeModalComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_28__["RegisterComponent"],
                _register_register_tenant_component__WEBPACK_IMPORTED_MODULE_27__["RegisterTenantComponent"],
                _register_register_tenant_result_component__WEBPACK_IMPORTED_MODULE_26__["RegisterTenantResultComponent"],
                _register_select_edition_component__WEBPACK_IMPORTED_MODULE_29__["SelectEditionComponent"],
                _password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__["ForgotPasswordComponent"],
                _password_reset_password_component__WEBPACK_IMPORTED_MODULE_21__["ResetPasswordComponent"],
                _email_activation_email_activation_component__WEBPACK_IMPORTED_MODULE_14__["EmailActivationComponent"],
                _email_activation_confirm_email_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmEmailComponent"],
                _login_send_two_factor_code_component__WEBPACK_IMPORTED_MODULE_18__["SendTwoFactorCodeComponent"],
                _login_validate_two_factor_code_component__WEBPACK_IMPORTED_MODULE_19__["ValidateTwoFactorCodeComponent"],
                _language_switch_component__WEBPACK_IMPORTED_MODULE_15__["LanguageSwitchComponent"],
                _payment_buy_component__WEBPACK_IMPORTED_MODULE_22__["BuyComponent"],
                _payment_upgrade_or_extend_component__WEBPACK_IMPORTED_MODULE_25__["UpgradeOrExtendComponent"],
                _payment_payment_gateways_component__WEBPACK_IMPORTED_MODULE_23__["PaymentGatewaysComponent"],
                _payment_paypal_paypal_component__WEBPACK_IMPORTED_MODULE_24__["PayPalComponent"]
            ],
            providers: [
                _login_login_service__WEBPACK_IMPORTED_MODULE_17__["LoginService"],
                _register_tenant_registration_helper_service__WEBPACK_IMPORTED_MODULE_30__["TenantRegistrationHelperService"],
                _auth_account_route_guard__WEBPACK_IMPORTED_MODULE_12__["AccountRouteGuard"]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/account/auth/account-route-guard.ts":
/*!*************************************************!*\
  !*** ./src/account/auth/account-route-guard.ts ***!
  \*************************************************/
/*! exports provided: AccountRouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRouteGuard", function() { return AccountRouteGuard; });
/* harmony import */ var _abp_auth_permission_checker_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/auth/permission-checker.service */ "./node_modules/abp-ng2-module/dist/src/auth/permission-checker.service.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/session/app-session.service */ "./src/shared/common/session/app-session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountRouteGuard = /** @class */ (function () {
    function AccountRouteGuard(_permissionChecker, _router, _sessionService) {
        this._permissionChecker = _permissionChecker;
        this._router = _router;
        this._sessionService = _sessionService;
    }
    AccountRouteGuard.prototype.canActivate = function (route, state) {
        if (this._sessionService.user) {
            this._router.navigate([this.selectBestRoute()]);
            return false;
        }
        return true;
    };
    AccountRouteGuard.prototype.selectBestRoute = function () {
        if (this._permissionChecker.isGranted('Pages.Administration.Host.Dashboard')) {
            return '/app/admin/hostDashboard';
        }
        if (this._permissionChecker.isGranted('Pages.Tenant.Dashboard')) {
            return '/app/main/dashboard';
        }
        return '/app/notifications';
    };
    AccountRouteGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_abp_auth_permission_checker_service__WEBPACK_IMPORTED_MODULE_0__["PermissionCheckerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_3__["AppSessionService"]])
    ], AccountRouteGuard);
    return AccountRouteGuard;
}());



/***/ }),

/***/ "./src/account/email-activation/confirm-email.component.ts":
/*!*****************************************************************!*\
  !*** ./src/account/email-activation/confirm-email.component.ts ***!
  \*****************************************************************/
/*! exports provided: ConfirmEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEmailComponent", function() { return ConfirmEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/session/app-session.service */ "./src/shared/common/session/app-session.service.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmEmailComponent = /** @class */ (function (_super) {
    __extends(ConfirmEmailComponent, _super);
    function ConfirmEmailComponent(injector, _accountService, _router, _activatedRoute, _appSessionService) {
        var _this = _super.call(this, injector) || this;
        _this._accountService = _accountService;
        _this._router = _router;
        _this._activatedRoute = _activatedRoute;
        _this._appSessionService = _appSessionService;
        _this.model = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["ActivateEmailInput"]();
        return _this;
    }
    ConfirmEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.waitMessage = this.l('PleaseWaitToConfirmYourEmailMessage');
        this.model.userId = this._activatedRoute.snapshot.queryParams['userId'];
        this.model.confirmationCode = this._activatedRoute.snapshot.queryParams['confirmationCode'];
        if (this._appSessionService.changeTenantIfNeeded(this.parseTenantId(this._activatedRoute.snapshot.queryParams['tenantId']))) {
            return;
        }
        this._accountService.activateEmail(this.model)
            .subscribe(function () {
            _this.notify.success(_this.l('YourEmailIsConfirmedMessage'));
            _this._router.navigate(['account/login']);
        });
    };
    ConfirmEmailComponent.prototype.parseTenantId = function (tenantIdAsStr) {
        var tenantId = !tenantIdAsStr ? undefined : parseInt(tenantIdAsStr, 10);
        if (tenantId === NaN) {
            tenantId = undefined;
        }
        return tenantId;
    };
    ConfirmEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "<p>{{waitMessage}}</p>"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["AccountServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_3__["AppSessionService"]])
    ], ConfirmEmailComponent);
    return ConfirmEmailComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/email-activation/email-activation.component.html":
/*!**********************************************************************!*\
  !*** ./src/account/email-activation/email-activation.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-login__signin\">\n        <div class=\"m-login__head\">\n            <h3 class=\"m-login__title\">\n                {{l(\"EmailActivation\")}}\n            </h3>\n        </div>\n        <form class=\"m-login__form m-form email-activation-form\" #emailActivationForm=\"ngForm\" method=\"post\" novalidate (ngSubmit)=\"save()\">\n            <p>\n                {{l(\"SendEmailActivationLink_Information\")}}\n            </p>\n            <div class=\"form-group m-form__group\">\n                <input #emailAddressInput=\"ngModel\" [(ngModel)]=\"model.emailAddress\" class=\"form-control form-control-solid placeholder-no-fix input-ltr\" type=\"email\" autocomplete=\"off\" placeholder=\"{{l('EmailAddress')}} *\" name=\"emailAddress\" required maxlength=\"256\" email/>\n                <validation-messages [formCtrl]=\"emailAddressInput\" [errorDefs]=\"[{email: l('InvalidEmailAddress')}]\"></validation-messages>\n            </div>\n\n            <div class=\"m-login__form-action\">\n\n                <button [disabled]=\"saving\" routerLink=\"/account/login\" type=\"button\" class=\"btn btn-outline-primary  m-btn m-btn--pill m-btn--custom\"><i class=\"fa fa-arrow-left\"></i> {{l(\"Back\")}}</button>\n                <button type=\"submit\" class=\"btn btn-primary m-btn m-btn--pill m-btn--custom m-btn--air\" [disabled]=\"!emailActivationForm.form.valid\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\"><i class=\"fa fa-check\"></i> {{l(\"Submit\")}}</button>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/account/email-activation/email-activation.component.ts":
/*!********************************************************************!*\
  !*** ./src/account/email-activation/email-activation.component.ts ***!
  \********************************************************************/
/*! exports provided: EmailActivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailActivationComponent", function() { return EmailActivationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmailActivationComponent = /** @class */ (function (_super) {
    __extends(EmailActivationComponent, _super);
    function EmailActivationComponent(injector, _accountService, _router) {
        var _this = _super.call(this, injector) || this;
        _this._accountService = _accountService;
        _this._router = _router;
        _this.model = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["SendEmailActivationLinkInput"]();
        _this.saving = false;
        return _this;
    }
    EmailActivationComponent.prototype.save = function () {
        var _this = this;
        this.saving = true;
        this._accountService.sendEmailActivationLink(this.model)
            .finally(function () { _this.saving = false; })
            .subscribe(function () {
            _this.message.success(_this.l('ActivationMailSentMessage'), _this.l('MailSent')).done(function () {
                _this._router.navigate(['account/login']);
            });
        });
    };
    EmailActivationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./email-activation.component.html */ "./src/account/email-activation/email-activation.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["accountModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["AccountServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EmailActivationComponent);
    return EmailActivationComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/language-switch.component.html":
/*!****************************************************!*\
  !*** ./src/account/language-switch.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"languages.length > 1\" class=\"language-switch-area\">\n    <a *ngFor=\"let language of languages\" (click)=\"changeLanguage(language)\">\n        <span [ngClass]=\"{'language-icon-current': language.name==currentLanguage.name}\" title=\"{{language.displayName}}\"><i class=\"{{language.icon}}\" [attr.aria-label]=\"language.displayName\"></i></span>\n    </a>\n</div>\n"

/***/ }),

/***/ "./src/account/language-switch.component.ts":
/*!**************************************************!*\
  !*** ./src/account/language-switch.component.ts ***!
  \**************************************************/
/*! exports provided: LanguageSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSwitchComponent", function() { return LanguageSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LanguageSwitchComponent = /** @class */ (function (_super) {
    __extends(LanguageSwitchComponent, _super);
    function LanguageSwitchComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.languages = [];
        return _this;
    }
    LanguageSwitchComponent.prototype.ngOnInit = function () {
        this.languages = lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](abp.localization.languages, function (l) { return l.isDisabled === false; });
        this.currentLanguage = abp.localization.currentLanguage;
    };
    LanguageSwitchComponent.prototype.changeLanguage = function (language) {
        abp.utils.setCookieValue('Abp.Localization.CultureName', language.name, new Date(new Date().getTime() + 5 * 365 * 86400000), // 5 year
        abp.appPath);
        location.reload();
    };
    LanguageSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'language-switch',
            template: __webpack_require__(/*! ./language-switch.component.html */ "./src/account/language-switch.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], LanguageSwitchComponent);
    return LanguageSwitchComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/login/login.component.html":
/*!************************************************!*\
  !*** ./src/account/login/login.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-login__signin\" [@routerTransition]>\n    <div class=\"m-login__head\">\n        <h3 class=\"m-login__title\">\n            {{l(\"LogIn\")}}\n        </h3>\n    </div>\n    <form #loginForm=\"ngForm\" class=\"m-login__form m-form login-form\" method=\"post\" novalidate (ngSubmit)=\"login()\">\n\n        <div class=\"form-group m-form__group\">\n            <input #userNameOrEmailAddressInput=\"ngModel\" [(ngModel)]=\"loginService.authenticateModel.userNameOrEmailAddress\" autoFocus class=\"form-control m-input\" type=\"text\" autocomplete=\"off\" placeholder=\"{{l('UserNameOrEmail')}} *\" name=\"userNameOrEmailAddress\" required />\n            <validation-messages [formCtrl]=\"userNameOrEmailAddressInput\"></validation-messages>\n        </div>\n\n        <div class=\"form-group m-form__group\">\n            <input #passwordInput=\"ngModel\" [(ngModel)]=\"loginService.authenticateModel.password\" class=\"form-control m-input\" type=\"password\" autocomplete=\"off\" placeholder=\"{{l('Password')}} *\" name=\"password\" required maxlength=\"32\" />\n            <validation-messages [formCtrl]=\"passwordInput\"></validation-messages>\n        </div>\n\n        <div class=\"row m-login__form-sub\">\n            <div class=\"col m--align-left\">\n                <label class=\"m-checkbox m-checkbox--primary\">\n                    <input class=\"form-control\" [(ngModel)]=\"loginService.rememberMe\" type=\"checkbox\" name=\"rememberMe\" value=\"true\" />{{l(\"RememberMe\")}}\n                    <span></span>\n                </label>\n            </div>\n            <div class=\"col m--align-right\">\n                <a routerLink=\"/account/forgot-password\" id=\"forget-password\" class=\"m-link forget-password\">{{l(\"ForgotPassword\")}}</a>\n            </div>\n        </div>\n\n        <div class=\"m-login__form-action\">\n            <button type=\"submit\" class=\"btn btn-primary m-btn m-btn--pill m-btn--custom m-btn--air\" [disabled]=\"!loginForm.form.valid\">{{l(\"LogIn\")}}</button>\n        </div>\n    </form>\n\n    <div class=\"login-options\" *ngIf=\"(multiTenancySideIsTeanant || !isMultiTenancyEnabled) && loginService.externalLoginProviders.length > 0\">\n        <h4>{{l(\"LoginWith\")}}</h4>\n        <ul class=\"social-icons\">\n            <li *ngFor=\"let provider of loginService.externalLoginProviders\">\n                <a class=\"social-login-icon social-icon-color {{provider.icon}}\"\n                   (click)=\"externalLogin(provider)\"\n                   title=\"{{provider.name}}\"></a>\n            </li>\n        </ul>\n    </div>\n\n    <div class=\"m-stack__item m-stack__item--center\">\n        <div class=\"m-login__account\">\n            <span *ngIf=\"isSelfRegistrationAllowed\">\n                <a routerLink=\"/account/register\" id=\"register-btn\" class=\"m-link m-link--primary m-login__account-link\">{{l(\"CreateAnAccount\")}}</a>\n                <span class=\"pipe-divider\"> | </span>\n            </span>\n            <span *ngIf=\"!multiTenancySideIsTeanant && isTenantSelfRegistrationAllowed\">\n                <a routerLink=\"/account/select-edition\" id=\"register-btn\" class=\"m-link m-link--primary m-login__account-link\">{{l(\"NewTenant\")}}</a>\n                <span class=\"pipe-divider\"> | </span>\n            </span>\n            <a routerLink=\"/account/email-activation\" id=\"email-activation-btn\" class=\"m-link m-link--primary m-login__account-link\">{{l(\"EmailActivation\")}}</a>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/account/login/login.component.ts":
/*!**********************************************!*\
  !*** ./src/account/login/login.component.ts ***!
  \**********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _abp_session_abp_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/session/abp-session.service */ "./node_modules/abp-ng2-module/dist/src/session/abp-session.service.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/helpers/UrlHelper */ "./src/shared/helpers/UrlHelper.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.service */ "./src/account/login/login.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(injector, loginService, _router, _sessionService, _sessionAppService) {
        var _this = _super.call(this, injector) || this;
        _this.loginService = loginService;
        _this._router = _router;
        _this._sessionService = _sessionService;
        _this._sessionAppService = _sessionAppService;
        _this.submitting = false;
        _this.isMultiTenancyEnabled = _this.multiTenancy.isEnabled;
        return _this;
    }
    Object.defineProperty(LoginComponent.prototype, "multiTenancySideIsTeanant", {
        get: function () {
            return this._sessionService.tenantId > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "isTenantSelfRegistrationAllowed", {
        get: function () {
            return this.setting.getBoolean('App.TenantManagement.AllowSelfRegistration');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "isSelfRegistrationAllowed", {
        get: function () {
            if (!this._sessionService.tenantId) {
                return false;
            }
            return this.setting.getBoolean('App.UserManagement.AllowSelfRegistration');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        if (this._sessionService.userId > 0 && shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_6__["UrlHelper"].getReturnUrl() && shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_6__["UrlHelper"].getSingleSignIn()) {
            this._sessionAppService.updateUserSignInToken()
                .subscribe(function (result) {
                var initialReturnUrl = shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_6__["UrlHelper"].getReturnUrl();
                var returnUrl = initialReturnUrl + (initialReturnUrl.indexOf('?') >= 0 ? '&' : '?') +
                    'accessToken=' + result.signInToken +
                    '&userId=' + result.encodedUserId +
                    '&tenantId=' + result.encodedTenantId;
                location.href = returnUrl;
            });
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.submitting = true;
        this.loginService.authenticate(function () { return _this.submitting = false; });
    };
    LoginComponent.prototype.externalLogin = function (provider) {
        this.loginService.externalAuthenticate(provider);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/account/login/login.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__["accountModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _abp_session_abp_session_service__WEBPACK_IMPORTED_MODULE_0__["AbpSessionService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["SessionServiceProxy"]])
    ], LoginComponent);
    return LoginComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/login/login.service.ts":
/*!********************************************!*\
  !*** ./src/account/login/login.service.ts ***!
  \********************************************/
/*! exports provided: ExternalLoginProvider, LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalLoginProvider", function() { return ExternalLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _abp_auth_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/auth/token.service */ "./node_modules/abp-ng2-module/dist/src/auth/token.service.js");
/* harmony import */ var _abp_log_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/log/log.service */ "./node_modules/abp-ng2-module/dist/src/log/log.service.js");
/* harmony import */ var _abp_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/message/message.service */ "./node_modules/abp-ng2-module/dist/src/message/message.service.js");
/* harmony import */ var _abp_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/utils/utils.service */ "./node_modules/abp-ng2-module/dist/src/utils/utils.service.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/helpers/UrlHelper */ "./src/shared/helpers/UrlHelper.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ExternalLoginProvider = /** @class */ (function (_super) {
    __extends(ExternalLoginProvider, _super);
    function ExternalLoginProvider(providerInfo) {
        var _this = _super.call(this) || this;
        _this.initialized = false;
        _this.name = providerInfo.name;
        _this.clientId = providerInfo.clientId;
        _this.icon = ExternalLoginProvider.getSocialIcon(_this.name);
        return _this;
    }
    ExternalLoginProvider.getSocialIcon = function (providerName) {
        providerName = providerName.toLowerCase();
        if (providerName === 'google') {
            providerName = 'googleplus';
        }
        return providerName;
    };
    ExternalLoginProvider.FACEBOOK = 'Facebook';
    ExternalLoginProvider.GOOGLE = 'Google';
    ExternalLoginProvider.MICROSOFT = 'Microsoft';
    return ExternalLoginProvider;
}(_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_8__["ExternalLoginProviderInfoModel"]));

var LoginService = /** @class */ (function () {
    function LoginService(_tokenAuthService, _router, _utilsService, _messageService, _tokenService, _logService) {
        this._tokenAuthService = _tokenAuthService;
        this._router = _router;
        this._utilsService = _utilsService;
        this._messageService = _messageService;
        this._tokenService = _tokenService;
        this._logService = _logService;
        this.externalLoginProviders = [];
        this.clear();
    }
    LoginService_1 = LoginService;
    LoginService.prototype.authenticate = function (finallyCallback, redirectUrl) {
        var _this = this;
        finallyCallback = finallyCallback || (function () { });
        // We may switch to localStorage instead of cookies
        this.authenticateModel.twoFactorRememberClientToken = this._utilsService.getCookieValue(LoginService_1.twoFactorRememberClientTokenName);
        this.authenticateModel.singleSignIn = _shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_7__["UrlHelper"].getSingleSignIn();
        this.authenticateModel.returnUrl = _shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_7__["UrlHelper"].getReturnUrl();
        this._tokenAuthService
            .authenticate(this.authenticateModel)
            .finally(finallyCallback)
            .subscribe(function (result) {
            _this.processAuthenticateResult(result, redirectUrl);
        });
    };
    LoginService.prototype.externalAuthenticate = function (provider) {
        var _this = this;
        this.ensureExternalLoginProviderInitialized(provider, function () {
            if (provider.name === ExternalLoginProvider.FACEBOOK) {
                FB.login(function (response) {
                    _this.facebookLoginStatusChangeCallback(response);
                }, { scope: 'email' });
            }
            else if (provider.name === ExternalLoginProvider.GOOGLE) {
                gapi.auth2.getAuthInstance().signIn().then(function () {
                    _this.googleLoginStatusChangeCallback(gapi.auth2.getAuthInstance().isSignedIn.get());
                });
            }
            else if (provider.name === ExternalLoginProvider.MICROSOFT) {
                WL.login({
                    scope: ['wl.signin', 'wl.basic', 'wl.emails']
                });
            }
        });
    };
    LoginService.prototype.init = function () {
        this.initExternalLoginProviders();
    };
    LoginService.prototype.processAuthenticateResult = function (authenticateResult, redirectUrl) {
        this.authenticateResult = authenticateResult;
        if (authenticateResult.shouldResetPassword) {
            // Password reset
            this._router.navigate(['account/reset-password'], {
                queryParams: {
                    userId: authenticateResult.userId,
                    tenantId: abp.session.tenantId,
                    resetCode: authenticateResult.passwordResetCode
                }
            });
            this.clear();
        }
        else if (authenticateResult.requiresTwoFactorVerification) {
            // Two factor authentication
            this._router.navigate(['account/send-code']);
        }
        else if (authenticateResult.accessToken) {
            // Successfully logged in
            if (authenticateResult.returnUrl && !redirectUrl) {
                redirectUrl = authenticateResult.returnUrl;
            }
            this.login(authenticateResult.accessToken, authenticateResult.encryptedAccessToken, authenticateResult.expireInSeconds, this.rememberMe, authenticateResult.twoFactorRememberClientToken, redirectUrl);
        }
        else {
            // Unexpected result!
            this._logService.warn('Unexpected authenticateResult!');
            this._router.navigate(['account/login']);
        }
    };
    LoginService.prototype.login = function (accessToken, encryptedAccessToken, expireInSeconds, rememberMe, twoFactorRememberClientToken, redirectUrl) {
        var tokenExpireDate = rememberMe ? (new Date(new Date().getTime() + 1000 * expireInSeconds)) : undefined;
        this._tokenService.setToken(accessToken, tokenExpireDate);
        this._utilsService.setCookieValue(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_6__["AppConsts"].authorization.encrptedAuthTokenName, encryptedAccessToken, tokenExpireDate, abp.appPath);
        if (twoFactorRememberClientToken) {
            this._utilsService.setCookieValue(LoginService_1.twoFactorRememberClientTokenName, twoFactorRememberClientToken, new Date(new Date().getTime() + 365 * 86400000), // 1 year
            abp.appPath);
        }
        if (redirectUrl) {
            location.href = redirectUrl;
        }
        else {
            var initialUrl = _shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_7__["UrlHelper"].initialUrl;
            if (initialUrl.indexOf('/account') > 0) {
                initialUrl = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_6__["AppConsts"].appBaseUrl;
            }
            location.href = initialUrl;
        }
    };
    LoginService.prototype.clear = function () {
        this.authenticateModel = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_8__["AuthenticateModel"]();
        this.authenticateModel.rememberClient = false;
        this.authenticateResult = null;
        this.rememberMe = false;
    };
    LoginService.prototype.initExternalLoginProviders = function () {
        var _this = this;
        this._tokenAuthService
            .getExternalAuthenticationProviders()
            .subscribe(function (providers) {
            _this.externalLoginProviders = lodash__WEBPACK_IMPORTED_MODULE_9__["map"](providers, function (p) { return new ExternalLoginProvider(p); });
        });
    };
    LoginService.prototype.ensureExternalLoginProviderInitialized = function (loginProvider, callback) {
        var _this = this;
        if (loginProvider.initialized) {
            callback();
            return;
        }
        if (loginProvider.name === ExternalLoginProvider.FACEBOOK) {
            jQuery.getScript('//connect.facebook.net/en_US/sdk.js', function () {
                FB.init({
                    appId: loginProvider.clientId,
                    cookie: false,
                    xfbml: true,
                    version: 'v2.5'
                });
                FB.getLoginStatus(function (response) {
                    _this.facebookLoginStatusChangeCallback(response);
                    if (response.status !== 'connected') {
                        callback();
                    }
                });
            });
        }
        else if (loginProvider.name === ExternalLoginProvider.GOOGLE) {
            jQuery.getScript('https://apis.google.com/js/api.js', function () {
                gapi.load('client:auth2', function () {
                    gapi.client.init({
                        clientId: loginProvider.clientId,
                        scope: 'openid profile email'
                    }).then(function () {
                        callback();
                    });
                });
            });
        }
        else if (loginProvider.name === ExternalLoginProvider.MICROSOFT) {
            jQuery.getScript('//js.live.net/v5.0/wl.js', function () {
                WL.Event.subscribe('auth.login', _this.microsoftLogin);
                WL.init({
                    client_id: loginProvider.clientId,
                    scope: ['wl.signin', 'wl.basic', 'wl.emails'],
                    redirect_uri: _shared_AppConsts__WEBPACK_IMPORTED_MODULE_6__["AppConsts"].appBaseUrl,
                    response_type: 'token'
                });
            });
        }
    };
    LoginService.prototype.facebookLoginStatusChangeCallback = function (resp) {
        var _this = this;
        if (resp.status === 'connected') {
            var model = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_8__["ExternalAuthenticateModel"]();
            model.authProvider = ExternalLoginProvider.FACEBOOK;
            model.providerAccessCode = resp.authResponse.accessToken;
            model.providerKey = resp.authResponse.userID;
            model.singleSignIn = _shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_7__["UrlHelper"].getSingleSignIn();
            model.returnUrl = _shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_7__["UrlHelper"].getReturnUrl();
            this._tokenAuthService.externalAuthenticate(model)
                .subscribe(function (result) {
                if (result.waitingForActivation) {
                    _this._messageService.info('You have successfully registered. Waiting for activation!');
                    return;
                }
                _this.login(result.accessToken, result.encryptedAccessToken, result.expireInSeconds, false, '', result.returnUrl);
            });
        }
    };
    LoginService.prototype.googleLoginStatusChangeCallback = function (isSignedIn) {
        var _this = this;
        if (isSignedIn) {
            var model = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_8__["ExternalAuthenticateModel"]();
            model.authProvider = ExternalLoginProvider.GOOGLE;
            model.providerAccessCode = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;
            model.providerKey = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getId();
            model.singleSignIn = _shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_7__["UrlHelper"].getSingleSignIn();
            model.returnUrl = _shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_7__["UrlHelper"].getReturnUrl();
            this._tokenAuthService.externalAuthenticate(model)
                .subscribe(function (result) {
                if (result.waitingForActivation) {
                    _this._messageService.info('You have successfully registered. Waiting for activation!');
                    return;
                }
                _this.login(result.accessToken, result.encryptedAccessToken, result.expireInSeconds, false, '', result.returnUrl);
            });
        }
    };
    /**
    * Microsoft login is not completed yet, because of an error thrown by zone.js: https://github.com/angular/zone.js/issues/290
    */
    LoginService.prototype.microsoftLogin = function () {
        var _this = this;
        this._logService.debug(WL.getSession());
        var model = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_8__["ExternalAuthenticateModel"]();
        model.authProvider = ExternalLoginProvider.MICROSOFT;
        model.providerAccessCode = WL.getSession().access_token;
        model.providerKey = WL.getSession().id; // How to get id?
        model.singleSignIn = _shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_7__["UrlHelper"].getSingleSignIn();
        model.returnUrl = _shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_7__["UrlHelper"].getReturnUrl();
        this._tokenAuthService.externalAuthenticate(model)
            .subscribe(function (result) {
            if (result.waitingForActivation) {
                _this._messageService.info('You have successfully registered. Waiting for activation!');
                return;
            }
            _this.login(result.accessToken, result.encryptedAccessToken, result.expireInSeconds, false, '', result.returnUrl);
        });
    };
    LoginService.twoFactorRememberClientTokenName = 'TwoFactorRememberClientToken';
    LoginService = LoginService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_8__["TokenAuthServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _abp_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"],
            _abp_message_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _abp_auth_token_service__WEBPACK_IMPORTED_MODULE_0__["TokenService"],
            _abp_log_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]])
    ], LoginService);
    return LoginService;
    var LoginService_1;
}());



/***/ }),

/***/ "./src/account/login/send-two-factor-code.component.html":
/*!***************************************************************!*\
  !*** ./src/account/login/send-two-factor-code.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-login__signin\">\n        <div class=\"m-login__head\">\n            <h3 class=\"m-login__title\">\n                {{l('SendSecurityCode')}}\n            </h3>\n        </div>\n        <form #twoFactorForm=\"ngForm\" class=\"m-login__form m-form\" method=\"post\" (ngSubmit)=\"submit()\">\n            <p>{{l(\"SendSecurityCode_Information\")}}</p>\n            <div class=\"form-group m-form__group\">\n                <select autoFocus\n                        size=\"1\"\n                        class=\"form-control\"\n                        [(ngModel)]=\"selectedTwoFactorProvider\"\n                        name=\"selectedTwoFactorProvider\">\n                    <option *ngFor=\"let provider of loginService.authenticateResult.twoFactorAuthProviders\" [value]=\"provider\">{{provider}}</option>\n                </select>\n            </div>\n\n            <div class=\"m-login__form-action\">\n                <button type=\"submit\" class=\"btn btn-primary m-btn m-btn--pill m-btn--custom m-btn--air\">{{l(\"Submit\")}}</button>\n            </div>\n        </form>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/account/login/send-two-factor-code.component.ts":
/*!*************************************************************!*\
  !*** ./src/account/login/send-two-factor-code.component.ts ***!
  \*************************************************************/
/*! exports provided: SendTwoFactorCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendTwoFactorCodeComponent", function() { return SendTwoFactorCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.service */ "./src/account/login/login.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SendTwoFactorCodeComponent = /** @class */ (function (_super) {
    __extends(SendTwoFactorCodeComponent, _super);
    function SendTwoFactorCodeComponent(injector, loginService, _tokenAuthService, _router) {
        var _this = _super.call(this, injector) || this;
        _this.loginService = loginService;
        _this._tokenAuthService = _tokenAuthService;
        _this._router = _router;
        _this.submitting = false;
        return _this;
    }
    SendTwoFactorCodeComponent.prototype.canActivate = function () {
        if (this.loginService.authenticateModel &&
            this.loginService.authenticateResult &&
            this.loginService.authenticateResult.twoFactorAuthProviders &&
            this.loginService.authenticateResult.twoFactorAuthProviders.length) {
            return true;
        }
        return false;
    };
    SendTwoFactorCodeComponent.prototype.ngOnInit = function () {
        this.selectedTwoFactorProvider = this.loginService.authenticateResult.twoFactorAuthProviders[0];
    };
    SendTwoFactorCodeComponent.prototype.submit = function () {
        var _this = this;
        var model = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["SendTwoFactorAuthCodeModel"]();
        model.userId = this.loginService.authenticateResult.userId;
        model.provider = this.selectedTwoFactorProvider;
        this.submitting = true;
        this._tokenAuthService
            .sendTwoFactorAuthCode(model)
            .finally(function () { return _this.submitting = false; })
            .subscribe(function () {
            _this._router.navigate(['account/verify-code']);
        });
    };
    SendTwoFactorCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./send-two-factor-code.component.html */ "./src/account/login/send-two-factor-code.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["accountModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["TokenAuthServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SendTwoFactorCodeComponent);
    return SendTwoFactorCodeComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/login/validate-two-factor-code.component.html":
/*!*******************************************************************!*\
  !*** ./src/account/login/validate-two-factor-code.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n\n    <div class=\"m-login__signin\">\n        <div class=\"m-login__head\">\n            <h3 class=\"m-login__title\">\n                {{l('VerifySecurityCode')}}\n            </h3>\n        </div>\n        <form #twoFactorForm=\"ngForm\" class=\"m-login__form m-form verify-security-code-form\" method=\"post\" (ngSubmit)=\"submit()\">\n\n            <div class=\"form-group m-form__group\">\n                <input #passwordInput=\"ngModel\" autoFocus [(ngModel)]=\"code\" class=\"form-control form-control-solid placeholder-no-fix input-ltr\" type=\"password\" autocomplete=\"off\" placeholder=\"{{l('Code')}} *\" name=\"code\" required maxlength=\"16\" />\n                <validation-messages [formCtrl]=\"passwordInput\"></validation-messages>\n            </div>\n\n            <div class=\"form-group margin-top-20\">\n                <label class=\"m-checkbox\">\n                    <input class=\"form-control\" [(ngModel)]=\"loginService.authenticateModel.rememberClient\" type=\"checkbox\" name=\"rememberClient\" value=\"true\" />{{l(\"RememberThisBrowser\")}}\n                    <span></span>\n                </label>\n            </div>\n\n\n            <div class=\"m-login__form-action\">\n                <button type=\"submit\" class=\"btn btn-primary m-btn m-btn--pill m-btn--custom m-btn--air\" [disabled]=\"!twoFactorForm.form.valid\">{{l(\"Submit\")}}</button>\n                <span class=\"remaining-time-counter\">{{l(\"RemainingTime\")}}: {{l(\"SecondShort{0}\", remainingSeconds)}}.</span>\n            </div>\n        </form>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/account/login/validate-two-factor-code.component.less":
/*!*******************************************************************!*\
  !*** ./src/account/login/validate-two-factor-code.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".remaining-time-counter {\n  margin-left: 10px;\n  color: red;\n}\n"

/***/ }),

/***/ "./src/account/login/validate-two-factor-code.component.ts":
/*!*****************************************************************!*\
  !*** ./src/account/login/validate-two-factor-code.component.ts ***!
  \*****************************************************************/
/*! exports provided: ValidateTwoFactorCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateTwoFactorCodeComponent", function() { return ValidateTwoFactorCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/timer */ "./node_modules/rxjs-compat/_esm5/add/observable/timer.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.service */ "./src/account/login/login.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ValidateTwoFactorCodeComponent = /** @class */ (function (_super) {
    __extends(ValidateTwoFactorCodeComponent, _super);
    function ValidateTwoFactorCodeComponent(injector, loginService, _router) {
        var _this = _super.call(this, injector) || this;
        _this.loginService = loginService;
        _this._router = _router;
        _this.submitting = false;
        _this.remainingSeconds = 90;
        return _this;
    }
    ValidateTwoFactorCodeComponent.prototype.canActivate = function () {
        if (this.loginService.authenticateModel &&
            this.loginService.authenticateResult) {
            return true;
        }
        return false;
    };
    ValidateTwoFactorCodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer = rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"].timer(1000, 1000);
        this.timerSubscription = timer.subscribe(function () {
            _this.remainingSeconds = _this.remainingSeconds - 1;
            if (_this.remainingSeconds <= 0) {
                _this.message.warn(_this.l('TimeoutPleaseTryAgain')).done(function () {
                    _this.loginService.authenticateModel.twoFactorVerificationCode = null;
                    _this._router.navigate(['account/login']);
                });
            }
        });
    };
    ValidateTwoFactorCodeComponent.prototype.ngOnDestroy = function () {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
            this.timerSubscription = null;
        }
    };
    ValidateTwoFactorCodeComponent.prototype.submit = function () {
        this.loginService.authenticateModel.twoFactorVerificationCode = this.code;
        this.loginService.authenticate();
    };
    ValidateTwoFactorCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./validate-two-factor-code.component.html */ "./src/account/login/validate-two-factor-code.component.html"),
            styles: [__webpack_require__(/*! ./validate-two-factor-code.component.less */ "./src/account/login/validate-two-factor-code.component.less")],
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["accountModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ValidateTwoFactorCodeComponent);
    return ValidateTwoFactorCodeComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/password/forgot-password.component.html":
/*!*************************************************************!*\
  !*** ./src/account/password/forgot-password.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-login__signin\">\n        <div class=\"m-login__head\">\n            <h3 class=\"m-login__title\">\n                {{l(\"ForgotPassword\")}}\n            </h3>\n        </div>\n        <form class=\"m-login__form m-form forget-form\" #forgotPassForm=\"ngForm\" method=\"post\" novalidate (ngSubmit)=\"save()\">\n            <p>\n                {{l(\"SendPasswordResetLink_Information\")}}\n            </p>\n            <div class=\"form-group m-form__group\">\n                <input #emailAddressInput=\"ngModel\" [(ngModel)]=\"model.emailAddress\" autoFocus class=\"form-control placeholder-no-fix\" type=\"text\" autocomplete=\"off\" placeholder=\"{{l('EmailAddress')}} *\" name=\"emailAddress\" required maxlength=\"256\" email />\n                <validation-messages [formCtrl]=\"emailAddressInput\" [errorDefs]=\"[{email: l('InvalidEmailAddress')}]\"></validation-messages>\n            </div>\n            <div class=\"m-login__form-action\">\n\n                <button [disabled]=\"saving\" routerLink=\"/account/login\" type=\"button\" class=\"btn btn-outline-primary  m-btn m-btn--pill m-btn--custom\"><i class=\"fa fa-arrow-left\"></i> {{l(\"Back\")}}</button>\n                <button type=\"submit\" class=\"btn btn-primary m-btn m-btn--pill m-btn--custom m-btn--air\" [disabled]=\"!forgotPassForm.form.valid\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\"><i class=\"fa fa-check\"></i> {{l(\"Submit\")}}</button>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/account/password/forgot-password.component.ts":
/*!***********************************************************!*\
  !*** ./src/account/password/forgot-password.component.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_common_nav_app_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/common/nav/app-url.service */ "./src/shared/common/nav/app-url.service.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPasswordComponent = /** @class */ (function (_super) {
    __extends(ForgotPasswordComponent, _super);
    function ForgotPasswordComponent(injector, _accountService, _appUrlService, _router) {
        var _this = _super.call(this, injector) || this;
        _this._accountService = _accountService;
        _this._appUrlService = _appUrlService;
        _this._router = _router;
        _this.model = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["SendPasswordResetCodeInput"]();
        _this.saving = false;
        return _this;
    }
    ForgotPasswordComponent.prototype.save = function () {
        var _this = this;
        this.saving = true;
        this._accountService.sendPasswordResetCode(this.model)
            .finally(function () { _this.saving = false; })
            .subscribe(function () {
            _this.message.success(_this.l('PasswordResetMailSentMessage'), _this.l('MailSent')).done(function () {
                _this._router.navigate(['account/login']);
            });
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/account/password/forgot-password.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["accountModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["AccountServiceProxy"],
            _shared_common_nav_app_url_service__WEBPACK_IMPORTED_MODULE_4__["AppUrlService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/password/reset-password.component.html":
/*!************************************************************!*\
  !*** ./src/account/password/reset-password.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-login__signin\">\n        <div class=\"m-login__head\">\n            <h3 class=\"m-login__title\">\n                {{l(\"ChangePassword\")}}\n            </h3>\n        </div>\n        <form #resetPassForm=\"ngForm\" class=\"m-login__form\" method=\"post\" (ngSubmit)=\"save()\">\n            <p>\n                {{l(\"PleaseEnterYourNewPassword\")}}\n            </p>\n\n            <div class=\"form-group m-form__group\">\n                <input type=\"password\" name=\"Password\" class=\"form-control placeholder-no-fix\" [(ngModel)]=\"model.password\" #Password=\"ngModel\" placeholder=\"{{l('Password')}}\" validateEqual=\"PasswordRepeat\"\n                       reverse=\"true\" [requireDigit]=\"passwordComplexitySetting.requireDigit\" [requireLowercase]=\"passwordComplexitySetting.requireLowercase\"\n                       [requireUppercase]=\"passwordComplexitySetting.requireUppercase\" [requireNonAlphanumeric]=\"passwordComplexitySetting.requireNonAlphanumeric\" [requiredLength]=\"passwordComplexitySetting.requiredLength\"\n                       required>\n            </div>\n            <div [hidden]=\"resetPassForm.form.valid || resetPassForm.form.pristine\" class=\"form-group\">\n                <ul class=\"help-block text-danger\" *ngIf=\"Password.errors\">\n                    <li [hidden]=\"!Password.errors.requireDigit\">{{l(\"PasswordComplexity_RequireDigit_Hint\")}}</li>\n                    <li [hidden]=\"!Password.errors.requireLowercase\">{{l(\"PasswordComplexity_RequireLowercase_Hint\")}}</li>\n                    <li [hidden]=\"!Password.errors.requireUppercase\">{{l(\"PasswordComplexity_RequireUppercase_Hint\")}}</li>\n                    <li [hidden]=\"!Password.errors.requireNonAlphanumeric\">{{l(\"PasswordComplexity_RequireNonAlphanumeric_Hint\")}}</li>\n                    <li [hidden]=\"!Password.errors.requiredLength\">{{l(\"PasswordComplexity_RequiredLength_Hint\", passwordComplexitySetting.requiredLength)}}</li>\n                </ul>\n            </div>\n\n            <div class=\"form-group m-form__group\">\n                <input type=\"password\" name=\"PasswordRepeat\" class=\"form-control placeholder-no-fix\" [ngModel]=\"model.passwordRepeat\" #PasswordRepeat=\"ngModel\" placeholder=\"{{l('PasswordRepeat')}}\" validateEqual=\"Password\"\n                       reverse=\"false\" [requireDigit]=\"passwordComplexitySetting.requireDigit\" [requireLowercase]=\"passwordComplexitySetting.requireLowercase\"\n                       [requireUppercase]=\"passwordComplexitySetting.requireUppercase\" [requireNonAlphanumeric]=\"passwordComplexitySetting.requireNonAlphanumeric\" [requiredLength]=\"passwordComplexitySetting.requiredLength\"\n                       required>\n            </div>\n            <div [hidden]=\"resetPassForm.form.valid || resetPassForm.form.pristine\" class=\"form-group\">\n                <ul class=\"help-block text-danger\" *ngIf=\"PasswordRepeat.errors\">\n                    <li [hidden]=\"!PasswordRepeat.errors.requireDigit\">{{l(\"PasswordComplexity_RequireDigit_Hint\")}}</li>\n                    <li [hidden]=\"!PasswordRepeat.errors.requireLowercase\">{{l(\"PasswordComplexity_RequireLowercase_Hint\")}}</li>\n                    <li [hidden]=\"!PasswordRepeat.errors.requireUppercase\">{{l(\"PasswordComplexity_RequireUppercase_Hint\")}}</li>\n                    <li [hidden]=\"!PasswordRepeat.errors.requireNonAlphanumeric\">{{l(\"PasswordComplexity_RequireNonAlphanumeric_Hint\")}}</li>\n                    <li [hidden]=\"!PasswordRepeat.errors.requiredLength\">{{l(\"PasswordComplexity_RequiredLength_Hint\", passwordComplexitySetting.requiredLength)}}</li>\n                    <li [hidden]=\"PasswordRepeat.valid\">{{l(\"PasswordsDontMatch\")}}</li>\n                </ul>\n            </div>\n\n            <div class=\"m-login__form-action\">\n                <button [disabled]=\"saving\" routerLink=\"/account/login\" type=\"button\" class=\"btn btn-outline-primary  m-btn m-btn--pill m-btn--custom\"><i class=\"fa fa-arrow-left\"></i> {{l(\"Back\")}}</button>\n                <button type=\"submit\" class=\"btn btn-primary m-btn m-btn--pill m-btn--custom m-btn--air\" [disabled]=\"!resetPassForm.form.valid\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\"><i class=\"fa fa-check\"></i> {{l(\"Submit\")}}</button>\n            </div>\n\n        </form>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/account/password/reset-password.component.ts":
/*!**********************************************************!*\
  !*** ./src/account/password/reset-password.component.ts ***!
  \**********************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_common_nav_app_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/common/nav/app-url.service */ "./src/shared/common/nav/app-url.service.ts");
/* harmony import */ var _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/common/session/app-session.service */ "./src/shared/common/session/app-session.service.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.service */ "./src/account/login/login.service.ts");
/* harmony import */ var _reset_password_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset-password.model */ "./src/account/password/reset-password.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ResetPasswordComponent = /** @class */ (function (_super) {
    __extends(ResetPasswordComponent, _super);
    function ResetPasswordComponent(injector, _accountService, _router, _activatedRoute, _loginService, _appUrlService, _appSessionService, _profileService) {
        var _this = _super.call(this, injector) || this;
        _this._accountService = _accountService;
        _this._router = _router;
        _this._activatedRoute = _activatedRoute;
        _this._loginService = _loginService;
        _this._appUrlService = _appUrlService;
        _this._appSessionService = _appSessionService;
        _this._profileService = _profileService;
        _this.model = new _reset_password_model__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordModel"]();
        _this.passwordComplexitySetting = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["PasswordComplexitySetting"]();
        _this.saving = false;
        return _this;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.userId = this._activatedRoute.snapshot.queryParams['userId'];
        this.model.resetCode = this._activatedRoute.snapshot.queryParams['resetCode'];
        this._appSessionService.changeTenantIfNeeded(this.parseTenantId(this._activatedRoute.snapshot.queryParams['tenantId']));
        this._profileService.getPasswordComplexitySetting().subscribe(function (result) {
            _this.passwordComplexitySetting = result.setting;
        });
    };
    ResetPasswordComponent.prototype.save = function () {
        var _this = this;
        this.saving = true;
        this._accountService.resetPassword(this.model)
            .finally(function () { _this.saving = false; })
            .subscribe(function (result) {
            if (!result.canLogin) {
                _this._router.navigate(['account/login']);
                return;
            }
            // Autheticate
            _this.saving = true;
            _this._loginService.authenticateModel.userNameOrEmailAddress = result.userName;
            _this._loginService.authenticateModel.password = _this.model.password;
            _this._loginService.authenticate(function () {
                _this.saving = false;
            });
        });
    };
    ResetPasswordComponent.prototype.parseTenantId = function (tenantIdAsStr) {
        var tenantId = !tenantIdAsStr ? undefined : parseInt(tenantIdAsStr);
        if (tenantId === NaN) {
            tenantId = undefined;
        }
        return tenantId;
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/account/password/reset-password.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["accountModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["AccountServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _shared_common_nav_app_url_service__WEBPACK_IMPORTED_MODULE_4__["AppUrlService"],
            _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_5__["AppSessionService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["ProfileServiceProxy"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/password/reset-password.model.ts":
/*!******************************************************!*\
  !*** ./src/account/password/reset-password.model.ts ***!
  \******************************************************/
/*! exports provided: ResetPasswordModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModel", function() { return ResetPasswordModel; });
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ResetPasswordModel = /** @class */ (function (_super) {
    __extends(ResetPasswordModel, _super);
    function ResetPasswordModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ResetPasswordModel;
}(_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__["ResetPasswordInput"]));



/***/ }),

/***/ "./src/account/payment/buy.component.html":
/*!************************************************!*\
  !*** ./src/account/payment/buy.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-login__head\">\n        <h3 class=\"m-login__title\">\n            {{l(\"PaymentInfo\")}}\n        </h3>\n    </div>\n\n    <form class=\"register-form\" method=\"post\" asp-action=\"PaymentResult\" id=\"formPaymentResult\">\n        <input type=\"hidden\" name=\"EditionId\" [(ngModel)]=\"edition.id\"/>\n        <input type=\"hidden\" name=\"Gateway\" [(ngModel)]=\"subscriptionPaymentGateway.Paypal\"/>\n        <input type=\"hidden\" name=\"EditionPaymentType\" [(ngModel)]=\"editionPaymentType\"/>\n\n        <div class=\"text-center m--margin-bottom-20\">({{l(\"Edition\")}}: {{edition.displayName}})</div>\n\n        <div *ngIf=\"edition.monthlyPrice\" class=\"form-group\">\n            <label class=\"m-radio\">\n                <input class=\"form-control\" type=\"radio\" name=\"PaymentPeriodType\"\n                       checked\n                       [value]=\"paymentPeriodType.Monthly\"\n                       (change)=\"onPaymentPeriodChangeChange(paymentPeriodType.Monthly)\"/>{{l(\"MonthlyPrice\")}}: ${{edition.monthlyPrice | number : '1.2-2'}}\n                <span></span>\n            </label>\n        </div>\n\n        <div *ngIf=\"edition.annualPrice\" class=\"form-group\">\n            <label class=\"m-radio\">\n                <input class=\"form-control\" type=\"radio\" name=\"PaymentPeriodType\"\n                       [value]=\"paymentPeriodType.Annual\"\n                       (change)=\"onPaymentPeriodChangeChange(paymentPeriodType.Annual)\"/>{{l(\"AnnualPrice\")}}: ${{edition.annualPrice | number : '1.2-2'}}\n                <span></span>\n            </label>\n        </div>\n\n        <paymentGateways [(edition)]=\"edition\" [(paymentPeriodType)]=\"selectedPaymentPeriodType\" [(editionPaymentType)]=\"editionPaymentType\"></paymentGateways>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/account/payment/buy.component.ts":
/*!**********************************************!*\
  !*** ./src/account/payment/buy.component.ts ***!
  \**********************************************/
/*! exports provided: BuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyComponent", function() { return BuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/AppEnums */ "./src/shared/AppEnums.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BuyComponent = /** @class */ (function (_super) {
    __extends(BuyComponent, _super);
    function BuyComponent(injector, _activatedRoute, _router, _paymentAppService, _tenantRegistrationService, vcRef, _componentFactoryResolver) {
        var _this = _super.call(this, injector) || this;
        _this._activatedRoute = _activatedRoute;
        _this._router = _router;
        _this._paymentAppService = _paymentAppService;
        _this._tenantRegistrationService = _tenantRegistrationService;
        _this.vcRef = vcRef;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this.edition = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["EditionSelectDto"]();
        _this.tenantId = abp.session.tenantId;
        _this.paymentPeriodType = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["PaymentPeriodType"];
        _this.subscriptionPaymentGateway = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["SubscriptionPaymentGatewayType"];
        _this.selectedPaymentPeriodType = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["PaymentPeriodType"].Monthly;
        return _this;
    }
    BuyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editionPaymentType = parseInt(this._activatedRoute.snapshot.queryParams['editionPaymentType']);
        var editionId = this._activatedRoute.snapshot.queryParams['editionId'];
        this._tenantRegistrationService.getEdition(editionId)
            .subscribe(function (result) {
            _this.edition = result;
        });
    };
    BuyComponent.prototype.onPaymentPeriodChangeChange = function (selectedPaymentPeriodType) {
        this.selectedPaymentPeriodType = selectedPaymentPeriodType;
    };
    BuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./buy.component.html */ "./src/account/payment/buy.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__["accountModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["PaymentServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["TenantRegistrationServiceProxy"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], BuyComponent);
    return BuyComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/payment/payment-gateways.component.html":
/*!*************************************************************!*\
  !*** ./src/account/payment/payment-gateways.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<paypal-component [(edition)]='edition' [(selectedPaymentPeriodType)]='paymentPeriodType' [(editionPaymentType)]='editionPaymentType'></paypal-component>\n"

/***/ }),

/***/ "./src/account/payment/payment-gateways.component.ts":
/*!***********************************************************!*\
  !*** ./src/account/payment/payment-gateways.component.ts ***!
  \***********************************************************/
/*! exports provided: PaymentGatewaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentGatewaysComponent", function() { return PaymentGatewaysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/AppEnums */ "./src/shared/AppEnums.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentGatewaysComponent = /** @class */ (function () {
    function PaymentGatewaysComponent() {
        this.edition = null;
        this.paymentPeriodType = null;
        this.editionPaymentType = null;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["EditionSelectDto"])
    ], PaymentGatewaysComponent.prototype, "edition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__["PaymentPeriodType"])
    ], PaymentGatewaysComponent.prototype, "paymentPeriodType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__["EditionPaymentType"])
    ], PaymentGatewaysComponent.prototype, "editionPaymentType", void 0);
    PaymentGatewaysComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'paymentGateways',
            template: __webpack_require__(/*! ./payment-gateways.component.html */ "./src/account/payment/payment-gateways.component.html"),
        })
    ], PaymentGatewaysComponent);
    return PaymentGatewaysComponent;
}());



/***/ }),

/***/ "./src/account/payment/paypal/paypal.component.html":
/*!**********************************************************!*\
  !*** ./src/account/payment/paypal/paypal.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"hidden\" name=\"PaymentId\" value=\"\" />\n<input type=\"hidden\" name=\"PayerId\" value=\"\" />\n\n<div *ngIf=\"demoUsername\" class=\"m-alert m-alert--icon m-alert--icon-solid m-alert--outline alert alert-brand alert-dismissible fade show\" role=\"alert\">\n    <div class=\"m-alert__icon\">\n        <i class=\"flaticon-exclamation\"></i>\n        <span></span>\n    </div>\n    <div class=\"m-alert__text\">\n        <h4>\n            {{l(\"DemoPayPalAccount\")}}\n        </h4>\n        <p>\n            <span>{{l(\"UserName\")}}: <strong>{{demoUsername}}</strong></span><br />\n            <span>{{l(\"Password\")}}: <strong>{{demoPassword}}</strong></span>\n        </p>\n    </div>\n</div>\n\n<div id=\"paypal-button\"></div>\n<div [busyIf]=\"paypalIsLoading\" *ngIf=\"paypalIsLoading\"></div>\n"

/***/ }),

/***/ "./src/account/payment/paypal/paypal.component.ts":
/*!********************************************************!*\
  !*** ./src/account/payment/paypal/paypal.component.ts ***!
  \********************************************************/
/*! exports provided: PayPalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalComponent", function() { return PayPalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/session/app-session.service */ "./src/shared/common/session/app-session.service.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _shared_AppEnums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/AppEnums */ "./src/shared/AppEnums.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PayPalComponent = /** @class */ (function (_super) {
    __extends(PayPalComponent, _super);
    function PayPalComponent(injector, _paymentAppService, _appSessionService, _router) {
        var _this = _super.call(this, injector) || this;
        _this._paymentAppService = _paymentAppService;
        _this._appSessionService = _appSessionService;
        _this._router = _router;
        _this.selectedPaymentPeriodType = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_5__["PaymentPeriodType"].Monthly;
        _this._edition = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["EditionSelectDto"]();
        _this.demoUsername = '';
        _this.demoPassword = '';
        _this.paypalIsLoading = true;
        _this.subscriptionPaymentGateway = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_5__["SubscriptionPaymentGatewayType"];
        _this.subscriptionStartType = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_5__["SubscriptionStartType"];
        return _this;
    }
    Object.defineProperty(PayPalComponent.prototype, "edition", {
        get: function () {
            return this._edition;
        },
        set: function (val) {
            var _this = this;
            this._edition = val;
            if (val && val.id) {
                jQuery.getScript('https://www.paypalobjects.com/api/checkout.js').done(function () {
                    _this.paypalIsLoading = false;
                    _this.preparePaypalButton();
                    _this.demoUsername = _this.getAdditionalData('DemoUsername');
                    _this.demoPassword = _this.getAdditionalData('DemoPassword');
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    PayPalComponent.prototype.getAdditionalData = function (key) {
        return this._edition.additionalData['paypal'][key];
    };
    PayPalComponent.prototype.setAdditionalData = function (key, value) {
        return this._edition.additionalData['paypal'][key] = value;
    };
    PayPalComponent.prototype.preparePaypalButton = function () {
        var self = this;
        window.paypal.Button.render({
            style: { size: 'responsive' },
            env: this.getAdditionalData('Environment'),
            commit: true,
            payment: function () {
                var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["CreatePaymentDto"]();
                input.editionId = self.edition.id;
                input.editionPaymentType = (self.editionPaymentType);
                input.subscriptionPaymentGatewayType = self.subscriptionPaymentGateway.Paypal;
                input.paymentPeriodType = (self.selectedPaymentPeriodType);
                return self._paymentAppService
                    .createPayment(input).toPromise()
                    .then(function (result) {
                    return result.id;
                });
            },
            onAuthorize: function (data) {
                var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["ExecutePaymentDto"]();
                input.gateway = self.subscriptionPaymentGateway.Paypal;
                input.paymentPeriodType = (self.selectedPaymentPeriodType);
                input.editionId = self.edition.id;
                input.editionPaymentType = (self.editionPaymentType);
                self.setAdditionalData('PaymentId', data.paymentID);
                self.setAdditionalData('PayerId', data.payerID);
                input.additionalData = self._edition.additionalData.paypal;
                self._paymentAppService
                    .executePayment(input)
                    .toPromise().then(function (result) {
                    if (self._appSessionService.userId) {
                        self._router.navigate(['app/admin/subscription-management']);
                    }
                    else {
                        self._router.navigate(['account/register-tenant'], {
                            queryParams: {
                                editionId: self._edition.id,
                                subscriptionStartType: self.subscriptionStartType.Paid,
                                gateway: self.subscriptionPaymentGateway.Paypal,
                                paymentId: data.paymentID
                            }
                        });
                    }
                    return;
                });
            }
        }, '#paypal-button');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_AppEnums__WEBPACK_IMPORTED_MODULE_5__["PaymentPeriodType"])
    ], PayPalComponent.prototype, "selectedPaymentPeriodType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_AppEnums__WEBPACK_IMPORTED_MODULE_5__["EditionPaymentType"])
    ], PayPalComponent.prototype, "editionPaymentType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["EditionSelectDto"]])
    ], PayPalComponent.prototype, "edition", null);
    PayPalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'paypal-component',
            template: __webpack_require__(/*! ./paypal.component.html */ "./src/account/payment/paypal/paypal.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["PaymentServiceProxy"],
            _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_2__["AppSessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PayPalComponent);
    return PayPalComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/payment/upgrade-or-extend.component.html":
/*!**************************************************************!*\
  !*** ./src/account/payment/upgrade-or-extend.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-login__head\">\n        <h3 class=\"m-login__title\">\n            {{l(\"PaymentInfo\")}}\n        </h3>\n    </div>\n\n    <form class=\"register-form\" method=\"post\" asp-action=\"PaymentResult\" id=\"formPaymentResult\">\n        <input type=\"hidden\" name=\"EditionId\" [(ngModel)]=\"edition.id\"/>\n        <input type=\"hidden\" name=\"Gateway\" [(ngModel)]=\"subscriptionPaymentGateway.Paypal\"/>\n        <input type=\"hidden\" name=\"EditionPaymentType\" [(ngModel)]=\"editionPaymentType\"/>\n\n        <div *ngIf=\"editionPaymentType == editionPaymentTypeCheck.Extend\" class=\"text-center\">{{l(\"Extend_Edition_Description\",edition.displayName)}}</div>\n        <div *ngIf=\"editionPaymentType == editionPaymentTypeCheck.Upgrade\" class=\"text-center m--margin-bottom-20\">{{l(\"Upgrade_Edition_Description\",edition.displayName)}}</div>\n\n        <div *ngIf=\"!isUpgrade()\" class=\"form-group\">\n            <label class=\"m-radio\">\n                <input class=\"form-control\" type=\"radio\" name=\"PaymentPeriodType\"\n                       checked\n                       [value]=\"paymentPeriodType.Monthly\"\n                       (change)=\"onPaymentPeriodChangeChange(paymentPeriodType.Monthly)\"/>{{l(\"MonthlyPrice\")}}: ${{edition.monthlyPrice | number : '1.2-2'}}\n                <span></span>\n            </label>\n        </div>\n\n        <div *ngIf=\"!isUpgrade()\" class=\"form-group\">\n            <label class=\"m-radio\">\n                <input class=\"form-control\" type=\"radio\" name=\"PaymentPeriodType\"\n                       [value]=\"paymentPeriodType.Annual\"\n                       (change)=\"onPaymentPeriodChangeChange(paymentPeriodType.Annual)\"/>{{l(\"AnnualPrice\")}}: ${{edition.annualPrice | number : '1.2-2'}}\n                <span></span>\n            </label>\n        </div>\n\n        <hr *ngIf=\"isUpgrade()\"/>\n\n        <div *ngIf=\"isUpgrade()\" class=\"form-actions\">\n            <div class=\"form-group row\">\n                <label class=\"col-sm-8 control-label\">{{l(\"Total\")}}</label>\n                <div class=\"col-sm-4 text-right\">\n                    <p class=\"m--font-bold\" id=\"totalPrice\">\n                        {{additionalPrice}}\n                    </p>\n                </div>\n            </div>\n        </div>\n\n        <paymentGateways [(edition)]=\"edition\" [(paymentPeriodType)]=\"selectedPaymentPeriodType\" [(editionPaymentType)]=\"editionPaymentType\"></paymentGateways>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/account/payment/upgrade-or-extend.component.ts":
/*!************************************************************!*\
  !*** ./src/account/payment/upgrade-or-extend.component.ts ***!
  \************************************************************/
/*! exports provided: UpgradeOrExtendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeOrExtendComponent", function() { return UpgradeOrExtendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/AppEnums */ "./src/shared/AppEnums.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpgradeOrExtendComponent = /** @class */ (function (_super) {
    __extends(UpgradeOrExtendComponent, _super);
    function UpgradeOrExtendComponent(injector, _activatedRoute, _paymentAppService, _tenantRegistrationService) {
        var _this = _super.call(this, injector) || this;
        _this._activatedRoute = _activatedRoute;
        _this._paymentAppService = _paymentAppService;
        _this._tenantRegistrationService = _tenantRegistrationService;
        _this.edition = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["EditionSelectDto"]();
        _this.tenantId = abp.session.tenantId;
        _this.paymentPeriodType = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["PaymentPeriodType"];
        _this.subscriptionPaymentGateway = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["SubscriptionPaymentGatewayType"];
        _this.selectedPaymentPeriodType = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["PaymentPeriodType"].Monthly;
        _this.editionPaymentTypeCheck = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["EditionPaymentType"];
        return _this;
    }
    UpgradeOrExtendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editionPaymentType = parseInt(this._activatedRoute.snapshot.queryParams['editionPaymentType']);
        var upgradeEditionId = this._activatedRoute.snapshot.queryParams['upgradeEditionId'];
        this._paymentAppService.getPaymentInfo(upgradeEditionId)
            .subscribe(function (result) {
            _this.edition = result.edition;
            _this.additionalPrice = Number(result.additionalPrice.toFixed(2));
        });
    };
    UpgradeOrExtendComponent.prototype.onPaymentPeriodChangeChange = function (selectedPaymentPeriodType) {
        this.selectedPaymentPeriodType = selectedPaymentPeriodType;
    };
    UpgradeOrExtendComponent.prototype.isUpgrade = function () {
        return this.additionalPrice > 0;
    };
    UpgradeOrExtendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./upgrade-or-extend.component.html */ "./src/account/payment/upgrade-or-extend.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__["accountModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["PaymentServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["TenantRegistrationServiceProxy"]])
    ], UpgradeOrExtendComponent);
    return UpgradeOrExtendComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/register/pricing.min.css":
/*!**********************************************!*\
  !*** ./src/account/register/pricing.min.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Cubic Bezier Transition */\n/***\nPricing Table 1\n***/\n.pricing-content-1 {\n    background-color: #fff;\n}\n.pricing-content-1:before, .pricing-content-1:after {\n        content: \" \";\n        display: table;\n    }\n.pricing-content-1:after {\n        clear: both;\n    }\n.pricing-content-1 .arrow-down {\n        width: 0;\n        height: 0;\n        border-left: 15px solid transparent;\n        border-right: 15px solid transparent;\n        border-top: 15px solid;\n        margin: auto;\n    }\n.pricing-content-1 .arrow-down.arrow-blue {\n            border-top-color: #3598DC;\n        }\n.pricing-content-1 .arrow-down.arrow-green {\n            border-top-color: #32C5D2;\n        }\n.pricing-content-1 .arrow-down.arrow-dark {\n            border-top-color: #2F353B;\n        }\n.pricing-content-1 .arrow-down.arrow-grey {\n            border-top-color: #f7f9fb;\n        }\n.pricing-content-1 .price-ribbon {\n        position: absolute;\n        top: 75px;\n        right: -4px;\n        width: 90px;\n        font-size: 14px;\n        text-transform: uppercase;\n        font-weight: 300;\n        padding: 6px 20px 6px 15px;\n        color: #fff;\n        background-color: #D91E18;\n        text-shadow: 0px 1px 2px #bbb;\n        box-shadow: 0px 2px 4px #888;\n    }\n.pricing-content-1 .price-ribbon:after {\n            content: ' ';\n            position: absolute;\n            width: 0;\n            height: 0;\n            right: 0px;\n            top: 100%;\n            border-width: 5px 10px;\n            border-style: solid;\n            border-color: #64120f transparent transparent #64120f;\n        }\n.pricing-content-1 .pricing-title {\n        border-bottom: 1px solid;\n        border-color: #fff;\n    }\n.pricing-content-1 .pricing-title > h1 {\n            margin: 20px 0;\n        }\n.pricing-content-1 .price-column-container {\n        text-align: center;\n        margin: 0;\n        background-color: #fff;\n    }\n.pricing-content-1 .price-column-container.border-active {\n            border: 1px solid #e5e9ee;\n        }\n.pricing-content-1 .price-column-container:first-child {\n            margin-left: 0;\n        }\n.pricing-content-1 .price-column-container:last-child {\n            margin-right: 0;\n        }\n.pricing-content-1 .price-table-head {\n        color: #fff;\n        padding: 20px 0;\n    }\n.pricing-content-1 .price-table-head h2 {\n            font-size: 26px;\n        }\n.pricing-content-1 .price-table-head.price-1 {\n            background-color: #3598DC;\n        }\n.pricing-content-1 .price-table-head.price-2 {\n            background-color: #32C5D2;\n        }\n.pricing-content-1 .price-table-head.price-3 {\n            background-color: #2F353B;\n        }\n.pricing-content-1 .price-table-pricing > h3 {\n        font-size: 60px;\n        position: relative;\n    }\n.pricing-content-1 .price-table-pricing > h3 > .price-sign {\n            font-size: 24px;\n            position: absolute;\n            margin-left: -15px;\n        }\n.pricing-content-1 .price-table-pricing > p {\n        margin-top: 0;\n    }\n.pricing-content-1 .price-table-content {\n        background-color: #f7f9fb;\n        color: #5c6d7e;\n        font-weight: 600;\n        font-size: 16px;\n    }\n.pricing-content-1 .price-table-content .row {\n            padding-top: 10px;\n            padding-bottom: 10px;\n        }\n.pricing-content-1 .price-table-content .row i {\n                color: #6cade6;\n            }\n.pricing-content-1 .price-table-content .row:first-child {\n                padding-top: 20px;\n            }\n.pricing-content-1 .price-table-content .row:last-child {\n                padding-bottom: 20px;\n            }\n.pricing-content-1 .price-table-footer {\n        padding: 20px 0;\n    }\n.pricing-content-1 .price-table-footer > .price-button {\n            font-weight: bold;\n            padding: 10px 20px;\n        }\n@media (max-width: 1024px) {\n    .pricing-content-1 .mobile-padding {\n        padding: 0;\n        margin: 0;\n    }\n\n        .pricing-content-1 .mobile-padding > i {\n            margin-right: 5px;\n        }\n\n    .pricing-content-1 .price-table-content {\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n}\n@media (max-width: 1024px) {\n    .pricing-content-1 .mobile-padding {\n        padding: 0 15px;\n        margin: 0 -15px;\n    }\n\n        .pricing-content-1 .mobile-padding > i {\n            margin-right: 20px;\n        }\n\n    .pricing-content-1 .price-table-content {\n        padding-left: 15px;\n        padding-right: 15px;\n    }\n}\n/***\nPricing Table 2\n***/\n.pricing-content-2 {\n    background-color: #fff;\n}\n.pricing-content-2 .no-padding {\n        padding: 0;\n    }\n.pricing-content-2 .text-left {\n        text-align: left;\n    }\n.pricing-content-2 .text-right {\n        text-align: right;\n    }\n.pricing-content-2.pricing-bg-dark {\n        background-color: #2F353B;\n    }\n.pricing-content-2 .pricing-title {\n        border-color: #444;\n    }\n.pricing-content-2 .pricing-title > h1 {\n            color: #fff;\n        }\n.pricing-content-2 .pricing-table-container {\n        padding-top: 40px;\n        padding-bottom: 40px;\n    }\n.pricing-content-2 .pricing-table-container .padding-fix {\n            padding-left: 15px;\n            padding-right: 15px;\n        }\n.pricing-content-2 .pricing-table-container .price-column-container {\n            background-color: #fff;\n            margin: 30px 0;\n            padding: 60px 0;\n            text-align: center;\n            border-bottom: 4px solid #ccc;\n        }\n.pricing-content-2 .pricing-table-container .price-column-container.border-right {\n                border-right: 1px solid #ccc;\n            }\n.pricing-content-2 .pricing-table-container .price-column-container.border-left {\n                border-left: 1px solid #ccc;\n            }\n.pricing-content-2 .pricing-table-container .price-column-container.border-top {\n                border-top: 1px solid #ccc;\n            }\n.pricing-content-2 .pricing-table-container .price-column-container.featured-price {\n                margin: 0;\n                padding: 89px 0;\n                border: 1px solid;\n                border-bottom: 4px solid;\n                border-color: #ccc;\n            }\n.pricing-content-2 .pricing-table-container .price-column-container.featured-price > .price-feature-label {\n                    position: absolute;\n                    top: 0;\n                    left: 50%;\n                    display: inline-block;\n                    width: 110px;\n                    margin: 0 0 0 -60px;\n                    padding: 7px 15px;\n                    color: #fff;\n                    font-weight: 300;\n                }\n.pricing-content-2 .pricing-table-container .price-column-container > .price-table-head > h2 {\n                letter-spacing: 1px;\n                font-weight: 600;\n                font-size: 18px;\n                color: #ACB5C3;\n            }\n.pricing-content-2 .pricing-table-container .price-column-container > .price-table-head > h2.opt-pricing-5 {\n                    padding: 7px 15px;\n                    display: inline;\n                    margin: 0 auto 20px auto;\n                    font-size: 16px;\n                }\n.pricing-content-2 .pricing-table-container .price-column-container > .price-table-pricing > h3 {\n                font-size: 60px;\n                position: relative;\n                font-weight: 600;\n            }\n.pricing-content-2 .pricing-table-container .price-column-container > .price-table-pricing > h3 > .price-sign {\n                    font-size: 24px;\n                    position: absolute;\n                    margin-left: -15px;\n                }\n.pricing-content-2 .pricing-table-container .price-column-container > .price-table-pricing > p {\n                margin-top: 0;\n            }\n.pricing-content-2 .pricing-table-container .price-column-container > .price-table-content {\n                color: #333;\n                font-weight: 300;\n                font-size: 16px;\n            }\n.pricing-content-2 .pricing-table-container .price-column-container > .price-table-content .row {\n                    padding-top: 20px;\n                    padding-bottom: 20px;\n                    border-bottom: 1px solid;\n                    border-color: #eee;\n                }\n.pricing-content-2 .pricing-table-container .price-column-container > .price-table-content .row:first-child {\n                        border-top: 1px solid;\n                        border-color: #eee;\n                    }\n.pricing-content-2 .pricing-table-container .price-column-container > .price-table-footer {\n                padding: 40px 0 0 0;\n            }\n.pricing-content-2 .pricing-table-container .price-column-container > .price-table-footer > .featured-price {\n                    font-size: 20px;\n                    font-weight: 300;\n                    border-bottom: 3px solid #3FABA4;\n                }\n@media (max-width: 991px) {\n    .pricing-content-2 .price-column-container {\n        border-left: 1px solid;\n        border-right: 1px solid;\n        border-color: #ccc;\n    }\n}\n"

/***/ }),

/***/ "./src/account/register/register-tenant-result.component.html":
/*!********************************************************************!*\
  !*** ./src/account/register/register-tenant-result.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <h4>{{l(\"SuccessfullyRegistered\")}}</h4>\n    <ul>\n        <li><span class=\"text-muted\">{{l(\"TenancyName\")}}:</span> {{model.tenancyName}}</li>\n        <li><span class=\"text-muted\">{{l(\"Name\")}}:</span> {{model.name}}</li>\n        <li><span class=\"text-muted\">{{l(\"UserName\")}}:</span> {{model.userName}}</li>\n        <li><span class=\"text-muted\">{{l(\"EmailAddress\")}}:</span> {{model.emailAddress}}</li>\n    </ul>\n    <div>\n        <div *ngIf=\"model.isEmailConfirmationRequired\" class=\"alert alert-warning\" role=\"alert\">\n            {{l(\"ConfirmationMailSentPleaseClickLinkInTheEmail\", model.emailAddress)}}\n        </div>\n        <div *ngIf=\"!model.isActive\" class=\"alert alert-warning\" role=\"alert\">\n            {{l(\"YourAccountIsWaitingToBeActivatedByAdmin\")}}\n        </div>\n        <div *ngIf=\"tenantUrl\" class=\"alert alert-info\" role=\"alert\">\n            {{l(\"TenantRegistrationLoginInfo\")}}<br />\n            <a href=\"{{tenantUrl}}\">{{tenantUrl}}</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/account/register/register-tenant-result.component.ts":
/*!******************************************************************!*\
  !*** ./src/account/register/register-tenant-result.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterTenantResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterTenantResultComponent", function() { return RegisterTenantResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_common_nav_app_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/common/nav/app-url.service */ "./src/shared/common/nav/app-url.service.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _tenant_registration_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tenant-registration-helper.service */ "./src/account/register/tenant-registration-helper.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterTenantResultComponent = /** @class */ (function (_super) {
    __extends(RegisterTenantResultComponent, _super);
    function RegisterTenantResultComponent(injector, _router, _appUrlService, _tenantRegistrationHelper) {
        var _this = _super.call(this, injector) || this;
        _this._router = _router;
        _this._appUrlService = _appUrlService;
        _this._tenantRegistrationHelper = _tenantRegistrationHelper;
        _this.model = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["RegisterTenantOutput"]();
        _this.saving = false;
        return _this;
    }
    RegisterTenantResultComponent.prototype.ngOnInit = function () {
        if (!this._tenantRegistrationHelper.registrationResult) {
            this._router.navigate(['account/login']);
            return;
        }
        this.model = this._tenantRegistrationHelper.registrationResult;
        abp.multiTenancy.setTenantIdCookie(this.model.tenantId);
        this.tenantUrl = this._appUrlService.getAppRootUrlOfTenant(this.model.tenancyName);
    };
    RegisterTenantResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./register-tenant-result.component.html */ "./src/account/register/register-tenant-result.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["accountModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_common_nav_app_url_service__WEBPACK_IMPORTED_MODULE_4__["AppUrlService"],
            _tenant_registration_helper_service__WEBPACK_IMPORTED_MODULE_6__["TenantRegistrationHelperService"]])
    ], RegisterTenantResultComponent);
    return RegisterTenantResultComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/register/register-tenant.component.html":
/*!*************************************************************!*\
  !*** ./src/account/register/register-tenant.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-login__signin\">\n        <div class=\"m-login__head\">\n            <h3 class=\"m-login__title\">\n                {{l(\"TenantSignUp\")}}\n            </h3>\n        </div>\n\n        <div *ngIf=\"model.edition\" class=\"hint text-center\">({{l(\"Edition\")}}: {{model.edition.displayName}})</div>\n\n        <form #registerForm=\"ngForm\" role=\"form\" novalidate (submit)=\"save()\" class=\"m-login__form m-form register-form\">\n            <h4 class=\"m-login__title m--margin-top-20\">\n                {{l(\"TenantInformations\")}}\n            </h4>\n\n            <div class=\"form-group m-form__group\">\n                <input #tenancyName=\"ngModel\" class=\"form-control\" autoFocus type=\"text\" placeholder=\"{{l('TenancyName')}} *\" [(ngModel)]=\"model.tenancyName\" name=\"tenancyName\" required maxlength=\"64\" pattern=\"^[a-zA-Z][a-zA-Z0-9_-]{1,}$\" />\n                <div *ngIf=\"!tenancyName.valid && !tenancyName.pristine\">\n                    <span class=\"help-block text-danger\">{{l(\"TenantName_Regex_Description\")}}</span>\n                </div>\n            </div>\n\n            <div class=\"form-group m-form__group\">\n                <input #nameInput=\"ngModel\" class=\"form-control\" type=\"text\" placeholder=\"{{l('Name')}} *\" [(ngModel)]=\"model.name\" name=\"Name\" required maxlength=\"128\" />\n                <validation-messages [formCtrl]=\"nameInput\"></validation-messages>\n            </div>\n\n            <h4 class=\"m-login__title m--margin-top-20\">\n                {{l(\"AccountSettings\")}}\n            </h4>\n\n            <div class=\"form-group m-form__group\">\n                <input #adminEmailAddressInput=\"ngModel\" class=\"form-control\" type=\"email\" placeholder=\"{{l('AdminEmailAddress')}} *\" [(ngModel)]=\"model.adminEmailAddress\" name=\"adminEmailAddress\" required maxlength=\"256\" email />\n                <validation-messages [formCtrl]=\"adminEmailAddressInput\" [errorDefs]=\"[{email: l('InvalidEmailAddress')}]\"></validation-messages>\n            </div>\n\n            <div class=\"form-group m-form__group\">\n                <input type=\"password\" name=\"Password\" class=\"form-control\" [(ngModel)]=\"model.adminPassword\" #Password=\"ngModel\" placeholder=\"{{l('AdminPassword')}}\" validateEqual=\"PasswordRepeat\"\n                       reverse=\"true\" [requireDigit]=\"passwordComplexitySetting.requireDigit\" [requireLowercase]=\"passwordComplexitySetting.requireLowercase\"\n                       [requireUppercase]=\"passwordComplexitySetting.requireUppercase\" [requireNonAlphanumeric]=\"passwordComplexitySetting.requireNonAlphanumeric\" [requiredLength]=\"passwordComplexitySetting.requiredLength\"\n                       required>\n            </div>\n            <div [hidden]=\"registerForm.form.valid || registerForm.form.pristine\" class=\"form-group m-form__group\">\n                <ul class=\"help-block text-danger\" *ngIf=\"Password.errors\">\n                    <li [hidden]=\"!Password.errors.requireDigit\">{{l(\"PasswordComplexity_RequireDigit_Hint\")}}</li>\n                    <li [hidden]=\"!Password.errors.requireLowercase\">{{l(\"PasswordComplexity_RequireLowercase_Hint\")}}</li>\n                    <li [hidden]=\"!Password.errors.requireUppercase\">{{l(\"PasswordComplexity_RequireUppercase_Hint\")}}</li>\n                    <li [hidden]=\"!Password.errors.requireNonAlphanumeric\">{{l(\"PasswordComplexity_RequireNonAlphanumeric_Hint\")}}</li>\n                    <li [hidden]=\"!Password.errors.requiredLength\">{{l(\"PasswordComplexity_RequiredLength_Hint\", passwordComplexitySetting.requiredLength)}}</li>\n                </ul>\n            </div>\n            <div class=\"form-group m-form__group\">\n                <input type=\"password\" name=\"PasswordRepeat\" class=\"form-control\" [ngModel]=\"model.passwordRepeat\" #PasswordRepeat=\"ngModel\" placeholder=\"{{l('PasswordRepeat')}}\" validateEqual=\"Password\"\n                       reverse=\"false\" [requireDigit]=\"passwordComplexitySetting.requireDigit\" [requireLowercase]=\"passwordComplexitySetting.requireLowercase\" [requireUppercase]=\"passwordComplexitySetting.requireUppercase\"\n                       [requireNonAlphanumeric]=\"passwordComplexitySetting.requireNonAlphanumeric\" [requiredLength]=\"passwordComplexitySetting.requiredLength\"\n                       required>\n            </div>\n\n            <div [hidden]=\"registerForm.form.valid || registerForm.form.pristine\" class=\"form-group m-form__group\">\n                <ul class=\"help-block text-danger\" *ngIf=\"PasswordRepeat.errors\">\n                    <li [hidden]=\"!PasswordRepeat.errors.requireDigit\">{{l(\"PasswordComplexity_RequireDigit_Hint\")}}</li>\n                    <li [hidden]=\"!PasswordRepeat.errors.requireLowercase\">{{l(\"PasswordComplexity_RequireLowercase_Hint\")}}</li>\n                    <li [hidden]=\"!PasswordRepeat.errors.requireUppercase\">{{l(\"PasswordComplexity_RequireUppercase_Hint\")}}</li>\n                    <li [hidden]=\"!PasswordRepeat.errors.requireNonAlphanumeric\">{{l(\"PasswordComplexity_RequireNonAlphanumeric_Hint\")}}</li>\n                    <li [hidden]=\"!PasswordRepeat.errors.requiredLength\">{{l(\"PasswordComplexity_RequiredLength_Hint\", passwordComplexitySetting.requiredLength)}}</li>\n                    <li [hidden]=\"PasswordRepeat.valid\">{{l(\"PasswordsDontMatch\")}}</li>\n                </ul>\n            </div>\n            <h4 *ngIf=\"useCaptcha\" class=\"m-login__title m--margin-top-20\">\n                {{l(\"Captha_Hint\")}}\n            </h4>\n\n            <div *ngIf=\"useCaptcha\" class=\"form-group m--margin-bottom-20\">\n                <re-captcha (resolved)=\"captchaResolved($event)\" [siteKey]=\"recaptchaSiteKey\"></re-captcha>\n            </div>\n\n            <div class=\"m-login__form-action\">\n                <button [disabled]=\"saving\" routerLink=\"/account/login\" type=\"button\" class=\"btn btn-outline-primary  m-btn m-btn--pill m-btn--custom\"><i class=\"fa fa-arrow-left\"></i> {{l(\"Back\")}}</button>\n                <button type=\"submit\" class=\"btn btn-primary m-btn m-btn--pill m-btn--custom m-btn--air\" [disabled]=\"!registerForm.form.valid\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\"><i class=\"fa fa-check\"></i> {{l(\"Submit\")}}</button>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/account/register/register-tenant.component.ts":
/*!***********************************************************!*\
  !*** ./src/account/register/register-tenant.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterTenantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterTenantComponent", function() { return RegisterTenantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _shared_AppEnums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/AppEnums */ "./src/shared/AppEnums.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _register_tenant_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register-tenant.model */ "./src/account/register/register-tenant.model.ts");
/* harmony import */ var _tenant_registration_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tenant-registration-helper.service */ "./src/account/register/tenant-registration-helper.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterTenantComponent = /** @class */ (function (_super) {
    __extends(RegisterTenantComponent, _super);
    function RegisterTenantComponent(injector, _tenantRegistrationService, _router, _profileService, _tenantRegistrationHelper, _activatedRoute, _paymentService) {
        var _this = _super.call(this, injector) || this;
        _this._tenantRegistrationService = _tenantRegistrationService;
        _this._router = _router;
        _this._profileService = _profileService;
        _this._tenantRegistrationHelper = _tenantRegistrationHelper;
        _this._activatedRoute = _activatedRoute;
        _this._paymentService = _paymentService;
        _this.model = new _register_tenant_model__WEBPACK_IMPORTED_MODULE_7__["RegisterTenantModel"]();
        _this.passwordComplexitySetting = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["PasswordComplexitySetting"]();
        _this.subscriptionStartType = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_3__["SubscriptionStartType"];
        _this.paymentPeriodType = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_3__["PaymentPeriodType"];
        _this.selectedPaymentPeriodType = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_3__["PaymentPeriodType"].Monthly;
        _this.subscriptionPaymentGateway = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_3__["SubscriptionPaymentGatewayType"];
        _this.paymentId = '';
        _this.recaptchaSiteKey = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__["AppConsts"].recaptchaSiteKey;
        _this.saving = false;
        return _this;
    }
    RegisterTenantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.editionId = this._activatedRoute.snapshot.queryParams['editionId'];
        if (this.model.editionId) {
            this.model.subscriptionStartType = this._activatedRoute.snapshot.queryParams['subscriptionStartType'];
            this.model.gateway = this._activatedRoute.snapshot.queryParams['gateway'];
            this.model.paymentId = this._activatedRoute.snapshot.queryParams['paymentId'];
        }
        //Prevent to create tenant in a tenant context
        if (this.appSession.tenant != null) {
            this._router.navigate(['account/login']);
            return;
        }
        this._profileService.getPasswordComplexitySetting().subscribe(function (result) {
            _this.passwordComplexitySetting = result.setting;
        });
    };
    RegisterTenantComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.model.editionId) {
            this._tenantRegistrationService.getEdition(this.model.editionId)
                .subscribe(function (result) {
                _this.model.edition = result;
            });
        }
    };
    Object.defineProperty(RegisterTenantComponent.prototype, "useCaptcha", {
        get: function () {
            return this.setting.getBoolean('App.TenantManagement.UseCaptchaOnRegistration');
        },
        enumerable: true,
        configurable: true
    });
    RegisterTenantComponent.prototype.save = function () {
        var _this = this;
        if (this.useCaptcha && !this.model.captchaResponse) {
            this.message.warn(this.l('CaptchaCanNotBeEmpty'));
            return;
        }
        this.saving = true;
        this._tenantRegistrationService.registerTenant(this.model)
            .finally(function () { _this.saving = false; })
            .subscribe(function (result) {
            _this.notify.success(_this.l('SuccessfullyRegistered'));
            _this._tenantRegistrationHelper.registrationResult = result;
            _this._router.navigate(['account/register-tenant-result']);
        });
    };
    RegisterTenantComponent.prototype.captchaResolved = function (captchaResponse) {
        this.model.captchaResponse = captchaResponse;
    };
    RegisterTenantComponent.prototype.onPaymentPeriodChangeChange = function (selectedPaymentPeriodType) {
        this.selectedPaymentPeriodType = selectedPaymentPeriodType;
    };
    RegisterTenantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./register-tenant.component.html */ "./src/account/register/register-tenant.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_4__["accountModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["TenantRegistrationServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["ProfileServiceProxy"],
            _tenant_registration_helper_service__WEBPACK_IMPORTED_MODULE_8__["TenantRegistrationHelperService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["PaymentServiceProxy"]])
    ], RegisterTenantComponent);
    return RegisterTenantComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_5__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/register/register-tenant.model.ts":
/*!*******************************************************!*\
  !*** ./src/account/register/register-tenant.model.ts ***!
  \*******************************************************/
/*! exports provided: RegisterTenantModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterTenantModel", function() { return RegisterTenantModel; });
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RegisterTenantModel = /** @class */ (function (_super) {
    __extends(RegisterTenantModel, _super);
    function RegisterTenantModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RegisterTenantModel;
}(_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__["RegisterTenantInput"]));



/***/ }),

/***/ "./src/account/register/register.component.html":
/*!******************************************************!*\
  !*** ./src/account/register/register.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-login__signin\">\n        <div class=\"m-login__head\">\n            <h3 class=\"m-login__title\">\n                {{l(\"SignUp\")}}\n            </h3>\n        </div>\n        <form #registerForm=\"ngForm\" class=\"m-login__form\" method=\"post\" novalidate (ngSubmit)=\"save()\">\n            <div class=\"form-group m-form__group\">\n                <input #nameInput=\"ngModel\" class=\"form-control\" autoFocus type=\"text\" placeholder=\"{{l('Name')}} *\" [(ngModel)]=\"model.name\" name=\"Name\" required maxlength=\"32\" />\n                <validation-messages [formCtrl]=\"nameInput\"></validation-messages>\n            </div>\n\n            <div class=\"form-group m-form__group\">\n                <input #surnameInput=\"ngModel\" class=\"form-control\" type=\"text\" placeholder=\"{{l('Surname')}} *\" [(ngModel)]=\"model.surname\" name=\"Surname\" required maxlength=\"32\" />\n                <validation-messages [formCtrl]=\"surnameInput\"></validation-messages>\n            </div>\n\n            <div class=\"form-group m-form__group\">\n                <input #emailAddressInput=\"ngModel\" class=\"form-control\" type=\"email\" placeholder=\"{{l('EmailAddress')}} *\" [(ngModel)]=\"model.emailAddress\" name=\"EmailAddress\" required maxlength=\"256\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{1,})+$\" />\n                <validation-messages [formCtrl]=\"emailAddressInput\"></validation-messages>\n            </div>\n\n            <div class=\"form-group m-form__group\">\n                <input #userNameInput=\"ngModel\" class=\"form-control\" type=\"text\" autocomplete=\"off\" placeholder=\"{{l('UserName')}} *\" name=\"UserName\" [(ngModel)]=\"model.userName\" required maxlength=\"32\" />\n                <validation-messages [formCtrl]=\"userNameInput\"></validation-messages>\n            </div>\n            <div class=\"form-group m-form__group\">\n                <input type=\"password\" name=\"Password\" class=\"form-control\" [(ngModel)]=\"model.password\" #Password=\"ngModel\" placeholder=\"{{l('Password')}}\" validateEqual=\"PasswordRepeat\"\n                       reverse=\"true\" [requireDigit]=\"passwordComplexitySetting.requireDigit\" [requireLowercase]=\"passwordComplexitySetting.requireLowercase\"\n                       [requireUppercase]=\"passwordComplexitySetting.requireUppercase\" [requireNonAlphanumeric]=\"passwordComplexitySetting.requireNonAlphanumeric\" [requiredLength]=\"passwordComplexitySetting.requiredLength\"\n                       required>\n            </div>\n            <div [hidden]=\"registerForm.form.valid || registerForm.form.pristine\" class=\"form-group m-form__group\">\n                <ul class=\"help-block text-danger\" *ngIf=\"Password.errors\">\n                    <li [hidden]=\"!Password.errors.requireDigit\">{{l(\"PasswordComplexity_RequireDigit_Hint\")}}</li>\n                    <li [hidden]=\"!Password.errors.requireLowercase\">{{l(\"PasswordComplexity_RequireLowercase_Hint\")}}</li>\n                    <li [hidden]=\"!Password.errors.requireUppercase\">{{l(\"PasswordComplexity_RequireUppercase_Hint\")}}</li>\n                    <li [hidden]=\"!Password.errors.requireNonAlphanumeric\">{{l(\"PasswordComplexity_RequireNonAlphanumeric_Hint\")}}</li>\n                    <li [hidden]=\"!Password.errors.requiredLength\">{{l(\"PasswordComplexity_RequiredLength_Hint\", passwordComplexitySetting.requiredLength)}}</li>\n                </ul>\n            </div>\n            <div class=\"form-group m-form__group\">\n                <input type=\"password\" name=\"PasswordRepeat\" class=\"form-control\" [ngModel]=\"model.passwordRepeat\" #PasswordRepeat=\"ngModel\" placeholder=\"{{l('PasswordRepeat')}}\" validateEqual=\"Password\"\n                       reverse=\"false\" [requireDigit]=\"passwordComplexitySetting.requireDigit\" [requireLowercase]=\"passwordComplexitySetting.requireLowercase\"\n                       [requireUppercase]=\"passwordComplexitySetting.requireUppercase\" [requireNonAlphanumeric]=\"passwordComplexitySetting.requireNonAlphanumeric\" [requiredLength]=\"passwordComplexitySetting.requiredLength\"\n                       required>\n            </div>\n            <div [hidden]=\"registerForm.form.valid || registerForm.form.pristine\" class=\"form-group m-form__group\">\n                <ul class=\"help-block text-danger\" *ngIf=\"PasswordRepeat.errors\">\n                    <li [hidden]=\"!PasswordRepeat.errors.requireDigit\">{{l(\"PasswordComplexity_RequireDigit_Hint\")}}</li>\n                    <li [hidden]=\"!PasswordRepeat.errors.requireLowercase\">{{l(\"PasswordComplexity_RequireLowercase_Hint\")}}</li>\n                    <li [hidden]=\"!PasswordRepeat.errors.requireUppercase\">{{l(\"PasswordComplexity_RequireUppercase_Hint\")}}</li>\n                    <li [hidden]=\"!PasswordRepeat.errors.requireNonAlphanumeric\">{{l(\"PasswordComplexity_RequireNonAlphanumeric_Hint\")}}</li>\n                    <li [hidden]=\"!PasswordRepeat.errors.requiredLength\">{{l(\"PasswordComplexity_RequiredLength_Hint\", passwordComplexitySetting.requiredLength)}}</li>\n                    <li [hidden]=\"PasswordRepeat.valid\">{{l(\"PasswordsDontMatch\")}}</li>\n                </ul>\n            </div>\n            <p *ngIf=\"useCaptcha\" class=\"hint margin-top-20\">\n                {{l(\"Captha_Hint\")}}\n            </p>\n\n            <div *ngIf=\"useCaptcha\" class=\"form-group m--margin-bottom-20\">\n                <re-captcha (resolved)=\"captchaResolved($event)\" [siteKey]=\"recaptchaSiteKey\"></re-captcha>\n            </div>\n\n            <div class=\"m-login__form-action\">\n                <button [disabled]=\"saving\" routerLink=\"/account/login\" type=\"button\" class=\"btn btn-outline-primary  m-btn m-btn--pill m-btn--custom\"><i class=\"fa fa-arrow-left\"></i> {{l(\"Back\")}}</button>\n                <button type=\"submit\" class=\"btn btn-primary m-btn m-btn--pill m-btn--custom m-btn--air\" [disabled]=\"!registerForm.form.valid\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\"><i class=\"fa fa-check\"></i> {{l(\"Submit\")}}</button>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/account/register/register.component.ts":
/*!****************************************************!*\
  !*** ./src/account/register/register.component.ts ***!
  \****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.service */ "./src/account/login/login.service.ts");
/* harmony import */ var _register_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register.model */ "./src/account/register/register.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = /** @class */ (function (_super) {
    __extends(RegisterComponent, _super);
    function RegisterComponent(injector, _accountService, _router, _loginService, _profileService) {
        var _this = _super.call(this, injector) || this;
        _this._accountService = _accountService;
        _this._router = _router;
        _this._loginService = _loginService;
        _this._profileService = _profileService;
        _this.model = new _register_model__WEBPACK_IMPORTED_MODULE_7__["RegisterModel"]();
        _this.passwordComplexitySetting = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["PasswordComplexitySetting"]();
        _this.recaptchaSiteKey = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__["AppConsts"].recaptchaSiteKey;
        _this.saving = false;
        return _this;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Prevent to register new users in the host context
        if (this.appSession.tenant == null) {
            this._router.navigate(['account/login']);
            return;
        }
        this._profileService.getPasswordComplexitySetting().subscribe(function (result) {
            _this.passwordComplexitySetting = result.setting;
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "useCaptcha", {
        get: function () {
            return this.setting.getBoolean('App.UserManagement.UseCaptchaOnRegistration');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.save = function () {
        var _this = this;
        if (this.useCaptcha && !this.model.captchaResponse) {
            this.message.warn(this.l('CaptchaCanNotBeEmpty'));
            return;
        }
        this.saving = true;
        this._accountService.register(this.model)
            .finally(function () { _this.saving = false; })
            .subscribe(function (result) {
            if (!result.canLogin) {
                _this.notify.success(_this.l('SuccessfullyRegistered'));
                _this._router.navigate(['account/login']);
                return;
            }
            //Autheticate
            _this.saving = true;
            _this._loginService.authenticateModel.userNameOrEmailAddress = _this.model.userName;
            _this._loginService.authenticateModel.password = _this.model.password;
            _this._loginService.authenticate(function () { _this.saving = false; });
        });
    };
    RegisterComponent.prototype.captchaResolved = function (captchaResponse) {
        this.model.captchaResponse = captchaResponse;
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./register.component.html */ "./src/account/register/register.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__["accountModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["AccountServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["ProfileServiceProxy"]])
    ], RegisterComponent);
    return RegisterComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/register/register.model.ts":
/*!************************************************!*\
  !*** ./src/account/register/register.model.ts ***!
  \************************************************/
/*! exports provided: RegisterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModel", function() { return RegisterModel; });
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RegisterModel = /** @class */ (function (_super) {
    __extends(RegisterModel, _super);
    function RegisterModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RegisterModel;
}(_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__["RegisterInput"]));



/***/ }),

/***/ "./src/account/register/select-edition.component.html":
/*!************************************************************!*\
  !*** ./src/account/register/select-edition.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-pricing-table-1 m-pricing-table-1--fixed\">\n        <div class=\"m-portlet\">\n            <div class=\"m-portlet__body\">\n                <div class=\"m-pricing-table-1__items row row-centered\">\n                    <div class=\"m-pricing-table-1__item col-lg-3 col-centered\"\n                         *ngFor=\"let editionWithFeatures of editionsSelectOutput.editionsWithFeatures;  let i = index\">\n\n\n                        <div class=\"m-pricing-table-1__visual\">\n                            <div class=\"m-pricing-table-1__hexagon1\"></div>\n                            <div class=\"m-pricing-table-1__hexagon2\"></div>\n                            <span class=\"m-pricing-table-1__icon m--font-brand\">\n                                <i class=\"fa {{editionIcons[i]}}\"></i>\n                            </span>\n                        </div>\n\n\n                        <span class=\"m-pricing-table-1__price\">\n                            {{editionWithFeatures.edition.displayName}}\n                        </span>\n\n                        <h2 class=\"m-pricing-table-1__subtitle\" *ngIf=\"isFree(editionWithFeatures.edition)\">\n                            {{l(\"Free\")}}\n                        </h2>\n\n                        <h2 class=\"m-pricing-table-1__subtitle\" *ngIf=\"!isFree(editionWithFeatures.edition)\">\n\n                            <span class=\"m-pricing-table-1__label\">$</span> {{editionWithFeatures.edition.monthlyPrice}} {{l(\"PerMonth\")}} /\n                            <span class=\"m-pricing-table-1__label\">$</span>{{editionWithFeatures.edition.annualPrice}} {{l(\"PerYear\")}}\n\n                        </h2>\n\n                        <span class=\"m-pricing-table-1__description\">\n\n                            <ng-container *ngFor=\"let feature of editionsSelectOutput.allFeatures\">\n                                <!--Checbox Feature-->\n                                <ng-container *ngIf=\"isTrueFalseFeature(feature)\">\n                                    <i class=\"la la-check m--font-success\" *ngIf=\"featureEnabledForEdition(feature,editionWithFeatures)\"></i>\n                                    <i class=\"la la-times m--font-metal\" *ngIf=\"!featureEnabledForEdition(feature,editionWithFeatures)\"></i>\n                                </ng-container>\n                                <ng-container *ngIf=\"isTrueFalseFeature(feature)\">{{feature.displayName}}</ng-container>\n                                <!--Checbox Feature-->\n                                <!--Not Checbox Feature-->\n                                <ng-container *ngIf=\"!isTrueFalseFeature(feature)\">\n                                    <i class=\"la la-check m--font-success\"></i>\n                                </ng-container>\n                                <ng-container *ngIf=\"!isTrueFalseFeature(feature)\">{{feature.displayName}}:{{getFeatureValueForEdition(feature,editionWithFeatures)}}</ng-container>\n                                <!--Not Checbox Feature-->\n                                <br />\n                            </ng-container>\n\n                        </span>\n\n                        <div class=\"m-pricing-table-1__btn\">\n\n                            <button class=\"btn btn-warning m-btn m-btn--custom m-btn--pill m-btn--wide m-btn--uppercase m-btn--bolder m-btn--sm\"\n                                    (click)=\"upgrade(editionWithFeatures.edition, editionPaymentType.Upgrade)\"\n                                    *ngIf=\"isUserLoggedIn\"\n                                    [disabled]=\"!canUpgrade(editionWithFeatures.edition)\">\n                                {{l(\"Upgrade\")}}\n                            </button>\n\n                            <button class=\"btn btn-success m-btn m-btn--custom m-btn--pill m-btn--wide m-btn--uppercase m-btn--bolder m-btn--sm\"\n                                    [routerLink]=\"['/account/register-tenant']\"\n                                    [queryParams]=\"{editionId: editionWithFeatures.edition.id, subscriptionStartType: subscriptionStartType.Free}\"\n                                    href=\"#\"\n                                    *ngIf=\"!isUserLoggedIn && isFree(editionWithFeatures.edition)\">\n                                {{l(\"Start\")}}\n                            </button>\n\n                            <button class=\"btn btn-warning m-btn m-btn--custom m-btn--pill m-btn--wide m-btn--uppercase m-btn--bolder m-btn--sm\"\n                                    [routerLink]=\"['/account/register-tenant']\"\n                                    [queryParams]=\"{editionId: editionWithFeatures.edition.id, subscriptionStartType: subscriptionStartType.Trial}\"\n                                    href=\"#\"\n                                    *ngIf=\"!isUserLoggedIn && !isFree(editionWithFeatures.edition) && editionWithFeatures.edition.trialDayCount\">\n                                {{l(\"FreeTrial\")}}\n                            </button>\n\n                            <button class=\"btn btn-brand m-btn m-btn--custom m-btn--pill m-btn--wide m-btn--uppercase m-btn--bolder m-btn--sm\"\n                                    [routerLink]=\"['/account/buy']\"\n                                    [queryParams]=\"{editionId: editionWithFeatures.edition.id, editionPaymentType: editionPaymentType.NewRegistration, subscriptionStartType: subscriptionStartType.Paid}\"\n                                    href=\"#\"\n                                    *ngIf=\"!isUserLoggedIn && !isFree(editionWithFeatures.edition)\">\n                                {{l(\"BuyNow\")}}\n                            </button>\n\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/account/register/select-edition.component.less":
/*!************************************************************!*\
  !*** ./src/account/register/select-edition.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* centered columns styles */\n.row-centered {\n  text-align: center;\n  display: block !important;\n}\n.col-centered {\n  display: inline-table;\n  float: none;\n  /* reset the text-align */\n  text-align: left;\n  /* inline-block space fix */\n  margin-right: -4px;\n}\n.m-pricing-table-1__price,\n.m-pricing-table-1__subtitle,\n.m-pricing-table-1__btn {\n  text-align: center;\n}\nbody {\n  background-color: #f2f3f8;\n}\ndiv.m-content div.m-login__logo {\n  margin-bottom: 50px !important;\n}\n.m-pricing-table-1__item:nth-child(4n) {\n  border-right: none !important;\n}\n.m-pricing-table-1 .m-pricing-table-1__items .m-pricing-table-1__item .m-pricing-table-1__price {\n  font-size: 2rem !important;\n}\nbutton:disabled,\nbutton[disabled] {\n  cursor: not-allowed !important;\n}\n"

/***/ }),

/***/ "./src/account/register/select-edition.component.ts":
/*!**********************************************************!*\
  !*** ./src/account/register/select-edition.component.ts ***!
  \**********************************************************/
/*! exports provided: SelectEditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectEditionComponent", function() { return SelectEditionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/AppEnums */ "./src/shared/AppEnums.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/common/session/app-session.service */ "./src/shared/common/session/app-session.service.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SelectEditionComponent = /** @class */ (function (_super) {
    __extends(SelectEditionComponent, _super);
    function SelectEditionComponent(injector, _tenantRegistrationService, _subscriptionService, _appSessionService, _router) {
        var _this = _super.call(this, injector) || this;
        _this._tenantRegistrationService = _tenantRegistrationService;
        _this._subscriptionService = _subscriptionService;
        _this._appSessionService = _appSessionService;
        _this._router = _router;
        _this.editionsSelectOutput = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["EditionsSelectOutput"]();
        _this.isUserLoggedIn = false;
        _this.isSetted = false;
        _this.editionPaymentType = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["EditionPaymentType"];
        _this.subscriptionStartType = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["SubscriptionStartType"];
        /*you can change your edition icons order within editionIcons variable */
        _this.editionIcons = ["flaticon-open-box", "flaticon-rocket", "flaticon-gift", "flaticon-confetti", "flaticon-puzzle", "flaticon-app", "flaticon-coins", "flaticon-piggy-bank", "flaticon-bag", "flaticon-lifebuoy", "flaticon-technology-1", "flaticon-cogwheel-1", "flaticon-infinity", "flaticon-interface-5", "flaticon-squares-3", "flaticon-interface-6", "flaticon-mark", "flaticon-business", "flaticon-interface-7", "flaticon-list-2", "flaticon-bell", "flaticon-technology", "flaticon-squares-2", "flaticon-notes", "flaticon-profile", "flaticon-layers", "flaticon-interface-4", "flaticon-signs", "flaticon-menu-1", "flaticon-symbol"];
        return _this;
    }
    SelectEditionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isUserLoggedIn = abp.session.userId > 0;
        this._tenantRegistrationService.getEditionsForSelect()
            .subscribe(function (result) {
            _this.editionsSelectOutput = result;
            if (!_this.editionsSelectOutput.editionsWithFeatures || _this.editionsSelectOutput.editionsWithFeatures.length <= 0) {
                _this._router.navigate(['/account/register-tenant']);
            }
        });
    };
    SelectEditionComponent.prototype.isFree = function (edition) {
        return !edition.monthlyPrice && !edition.annualPrice;
    };
    SelectEditionComponent.prototype.isTrueFalseFeature = function (feature) {
        return feature.inputType.name === 'CHECKBOX';
    };
    SelectEditionComponent.prototype.featureEnabledForEdition = function (feature, edition) {
        var featureValues = lodash__WEBPACK_IMPORTED_MODULE_7__["filter"](edition.featureValues, { name: feature.name });
        if (!featureValues || featureValues.length <= 0) {
            return false;
        }
        var featureValue = featureValues[0];
        return featureValue.value.toLowerCase() === 'true';
    };
    SelectEditionComponent.prototype.getFeatureValueForEdition = function (feature, edition) {
        var featureValues = lodash__WEBPACK_IMPORTED_MODULE_7__["filter"](edition.featureValues, { name: feature.name });
        if (!featureValues || featureValues.length <= 0) {
            return '';
        }
        var featureValue = featureValues[0];
        return featureValue.value;
    };
    SelectEditionComponent.prototype.canUpgrade = function (edition) {
        if (this._appSessionService.tenant.edition.id === edition.id) {
            return false;
        }
        var currentMonthlyPrice = this._appSessionService.tenant.edition.monthlyPrice
            ? this._appSessionService.tenant.edition.monthlyPrice
            : 0;
        var targetMonthlyPrice = edition && edition.monthlyPrice ? edition.monthlyPrice : 0;
        return this.isUserLoggedIn &&
            this._appSessionService.tenant.edition &&
            currentMonthlyPrice <= targetMonthlyPrice;
    };
    SelectEditionComponent.prototype.upgrade = function (upgradeEdition, editionPaymentType) {
        var _this = this;
        if (editionPaymentType === _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["EditionPaymentType"].Upgrade && this.upgradeIsFree(upgradeEdition)) {
            this._subscriptionService.upgradeTenantToEquivalentEdition(upgradeEdition.id)
                .subscribe(function () {
                _this._router.navigate(['app/admin/subscription-management']);
            });
        }
        else {
            this._router.navigate(['/account/upgrade'], { queryParams: { upgradeEditionId: upgradeEdition.id, editionPaymentType: editionPaymentType } });
        }
    };
    SelectEditionComponent.prototype.upgradeIsFree = function (upgradeEdition) {
        if (!this._appSessionService.tenant || !this._appSessionService.tenant.edition) {
            return false;
        }
        var bothEditionsAreFree = this._appSessionService.tenant.edition.isFree && upgradeEdition.isFree;
        var bothEditionsHasSamePrice = !upgradeEdition.isFree &&
            upgradeEdition.monthlyPrice === this._appSessionService.tenant.edition.monthlyPrice &&
            upgradeEdition.annualPrice === this._appSessionService.tenant.edition.annualPrice;
        return bothEditionsAreFree || bothEditionsHasSamePrice;
    };
    SelectEditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./select-edition.component.html */ "./src/account/register/select-edition.component.html"),
            styles: [__webpack_require__(/*! ./select-edition.component.less */ "./src/account/register/select-edition.component.less"), __webpack_require__(/*! ./pricing.min.css */ "./src/account/register/pricing.min.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__["accountModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["TenantRegistrationServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["SubscriptionServiceProxy"],
            _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_5__["AppSessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SelectEditionComponent);
    return SelectEditionComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/register/tenant-registration-helper.service.ts":
/*!********************************************************************!*\
  !*** ./src/account/register/tenant-registration-helper.service.ts ***!
  \********************************************************************/
/*! exports provided: TenantRegistrationHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantRegistrationHelperService", function() { return TenantRegistrationHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TenantRegistrationHelperService = /** @class */ (function () {
    function TenantRegistrationHelperService() {
    }
    TenantRegistrationHelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TenantRegistrationHelperService);
    return TenantRegistrationHelperService;
}());



/***/ }),

/***/ "./src/account/shared/tenant-change-modal.component.html":
/*!***************************************************************!*\
  !*** ./src/account/shared/tenant-change-modal.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #tenantChangeModal=\"bs-modal\" (onShown)=\"onShown()\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"tenantChangeModal\" aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\n    <div class=\"modal-dialog modal-lg\">\n\n        <div class=\"modal-content\">\n\n            <form *ngIf=\"active\" #changeTenantForm=\"ngForm\" novalidate (ngSubmit)=\"save()\">\n\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">\n                        <span>{{l(\"ChangeTenant\")}}</span>\n                    </h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"></button>\n                </div>\n\n                <div class=\"modal-body\">\n                    <div class=\"form-group\">\n                        <label class=\"float-left\">{{l(\"TenancyName\")}}</label>\n                        <input #tenancyNameInput type=\"text\" name=\"TenancyName\" class=\"form-control\" [ngClass]=\"{'edited':tenancyName}\" [(ngModel)]=\"tenancyName\" maxlength=\"64\">\n                        <span class=\"float-left m-form__help\">{{l(\"LeaveEmptyToSwitchToHost\")}}</span>\n                    </div>\n                </div>\n\n                <div class=\"modal-footer\">\n                    <button [disabled]=\"saving\" type=\"button\" class=\"btn btn-secondary close-button\" (click)=\"close()\">{{l(\"Cancel\")}}</button>\n                    <button type=\"submit\" class=\"btn btn-primary save-button\" [disabled]=\"!changeTenantForm.form.valid\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\"><i class=\"fa fa-save\"></i> <span>{{l(\"Save\")}}</span></button>\n                </div>\n\n            </form>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/account/shared/tenant-change-modal.component.ts":
/*!*************************************************************!*\
  !*** ./src/account/shared/tenant-change-modal.component.ts ***!
  \*************************************************************/
/*! exports provided: TenantChangeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantChangeModalComponent", function() { return TenantChangeModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/AppEnums */ "./src/shared/AppEnums.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TenantChangeModalComponent = /** @class */ (function (_super) {
    __extends(TenantChangeModalComponent, _super);
    function TenantChangeModalComponent(_accountService, injector) {
        var _this = _super.call(this, injector) || this;
        _this._accountService = _accountService;
        _this.tenancyName = '';
        _this.active = false;
        _this.saving = false;
        return _this;
    }
    TenantChangeModalComponent.prototype.show = function (tenancyName) {
        this.tenancyName = tenancyName;
        this.active = true;
        this.modal.show();
    };
    TenantChangeModalComponent.prototype.onShown = function () {
        $(this.tenancyNameInput.nativeElement).focus().select();
    };
    TenantChangeModalComponent.prototype.save = function () {
        var _this = this;
        if (!this.tenancyName) {
            abp.multiTenancy.setTenantIdCookie(undefined);
            this.close();
            location.reload();
            return;
        }
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["IsTenantAvailableInput"]();
        input.tenancyName = this.tenancyName;
        this.saving = true;
        this._accountService.isTenantAvailable(input)
            .finally(function () { _this.saving = false; })
            .subscribe(function (result) {
            switch (result.state) {
                case _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__["AppTenantAvailabilityState"].Available:
                    abp.multiTenancy.setTenantIdCookie(result.tenantId);
                    _this.close();
                    location.reload();
                    return;
                case _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__["AppTenantAvailabilityState"].InActive:
                    _this.message.warn(_this.l('TenantIsNotActive', _this.tenancyName));
                    break;
                case _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__["AppTenantAvailabilityState"].NotFound://NotFound
                    _this.message.warn(_this.l('ThereIsNoTenantDefinedWithName{0}', _this.tenancyName));
                    break;
            }
        });
    };
    TenantChangeModalComponent.prototype.close = function () {
        this.active = false;
        this.modal.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tenantChangeModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], TenantChangeModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tenancyNameInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TenantChangeModalComponent.prototype, "tenancyNameInput", void 0);
    TenantChangeModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tenantChangeModal',
            template: __webpack_require__(/*! ./tenant-change-modal.component.html */ "./src/account/shared/tenant-change-modal.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["AccountServiceProxy"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TenantChangeModalComponent);
    return TenantChangeModalComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/account/shared/tenant-change.component.ts":
/*!*******************************************************!*\
  !*** ./src/account/shared/tenant-change.component.ts ***!
  \*******************************************************/
/*! exports provided: TenantChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantChangeComponent", function() { return TenantChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/session/app-session.service */ "./src/shared/common/session/app-session.service.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _tenant_change_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tenant-change-modal.component */ "./src/account/shared/tenant-change-modal.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TenantChangeComponent = /** @class */ (function (_super) {
    __extends(TenantChangeComponent, _super);
    function TenantChangeComponent(injector, _appSessionService, _accountService) {
        var _this = _super.call(this, injector) || this;
        _this._appSessionService = _appSessionService;
        _this._accountService = _accountService;
        return _this;
    }
    TenantChangeComponent.prototype.ngOnInit = function () {
        if (this._appSessionService.tenant) {
            this.tenancyName = this._appSessionService.tenant.tenancyName;
            this.name = this._appSessionService.tenant.name;
        }
    };
    Object.defineProperty(TenantChangeComponent.prototype, "isMultiTenancyEnabled", {
        get: function () {
            return abp.multiTenancy.isEnabled;
        },
        enumerable: true,
        configurable: true
    });
    TenantChangeComponent.prototype.showChangeModal = function () {
        this.tenantChangeModal.show(this.tenancyName);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tenantChangeModal'),
        __metadata("design:type", _tenant_change_modal_component__WEBPACK_IMPORTED_MODULE_4__["TenantChangeModalComponent"])
    ], TenantChangeComponent.prototype, "tenantChangeModal", void 0);
    TenantChangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tenant-change',
            template: "<span *ngIf=\"isMultiTenancyEnabled\">\n        {{l(\"CurrentTenant\")}}: <span *ngIf=\"tenancyName\" title=\"{{name}}\"><strong>{{tenancyName}}</strong></span> <span *ngIf=\"!tenancyName\">{{l(\"NotSelected\")}}</span> (<a href=\"javascript:;\" (click)=\"showChangeModal()\">{{l(\"Change\")}}</a>)\n        <tenantChangeModal #tenantChangeModal></tenantChangeModal>\n    </span>"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_2__["AppSessionService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["AccountServiceProxy"]])
    ], TenantChangeComponent);
    return TenantChangeComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map