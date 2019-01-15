(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-admin-admin-module"],{

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _audit_logs_audit_logs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audit-logs/audit-logs.component */ "./src/app/admin/audit-logs/audit-logs.component.ts");
/* harmony import */ var _dashboard_host_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/host-dashboard.component */ "./src/app/admin/dashboard/host-dashboard.component.ts");
/* harmony import */ var _demo_ui_components_demo_ui_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo-ui-components/demo-ui-components.component */ "./src/app/admin/demo-ui-components/demo-ui-components.component.ts");
/* harmony import */ var _editions_editions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editions/editions.component */ "./src/app/admin/editions/editions.component.ts");
/* harmony import */ var _install_install_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./install/install.component */ "./src/app/admin/install/install.component.ts");
/* harmony import */ var _languages_language_texts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./languages/language-texts.component */ "./src/app/admin/languages/language-texts.component.ts");
/* harmony import */ var _languages_languages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./languages/languages.component */ "./src/app/admin/languages/languages.component.ts");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "./src/app/admin/maintenance/maintenance.component.ts");
/* harmony import */ var _organization_units_organization_units_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./organization-units/organization-units.component */ "./src/app/admin/organization-units/organization-units.component.ts");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/admin/roles/roles.component.ts");
/* harmony import */ var _settings_host_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/host-settings.component */ "./src/app/admin/settings/host-settings.component.ts");
/* harmony import */ var _settings_tenant_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings/tenant-settings.component */ "./src/app/admin/settings/tenant-settings.component.ts");
/* harmony import */ var _subscription_management_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./subscription-management/invoice/invoice.component */ "./src/app/admin/subscription-management/invoice/invoice.component.ts");
/* harmony import */ var _subscription_management_subscription_management_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./subscription-management/subscription-management.component */ "./src/app/admin/subscription-management/subscription-management.component.ts");
/* harmony import */ var _tenants_tenants_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tenants/tenants.component */ "./src/app/admin/tenants/tenants.component.ts");
/* harmony import */ var _ui_customization_ui_customization_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ui-customization/ui-customization.component */ "./src/app/admin/ui-customization/ui-customization.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./users/users.component */ "./src/app/admin/users/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule(router) {
        var _this = this;
        this.router = router;
        router.events.subscribe(function (event) {
            _this.hideOpenDataTableDropdownMenus();
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                window.scroll(0, 0);
            }
        });
    }
    AdminRoutingModule.prototype.hideOpenDataTableDropdownMenus = function () {
        var $dropdownMenus = $('.dropdown-menu.tether-element');
        $dropdownMenus.css({
            'display': 'none'
        });
    };
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        children: [
                            { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_18__["UsersComponent"], data: { permission: 'Pages.Administration.Users' } },
                            { path: 'roles', component: _roles_roles_component__WEBPACK_IMPORTED_MODULE_11__["RolesComponent"], data: { permission: 'Pages.Administration.Roles' } },
                            { path: 'auditLogs', component: _audit_logs_audit_logs_component__WEBPACK_IMPORTED_MODULE_2__["AuditLogsComponent"], data: { permission: 'Pages.Administration.AuditLogs' } },
                            { path: 'maintenance', component: _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_9__["MaintenanceComponent"], data: { permission: 'Pages.Administration.Host.Maintenance' } },
                            { path: 'hostSettings', component: _settings_host_settings_component__WEBPACK_IMPORTED_MODULE_12__["HostSettingsComponent"], data: { permission: 'Pages.Administration.Host.Settings' } },
                            { path: 'editions', component: _editions_editions_component__WEBPACK_IMPORTED_MODULE_5__["EditionsComponent"], data: { permission: 'Pages.Editions' } },
                            { path: 'languages', component: _languages_languages_component__WEBPACK_IMPORTED_MODULE_8__["LanguagesComponent"], data: { permission: 'Pages.Administration.Languages' } },
                            { path: 'languages/:name/texts', component: _languages_language_texts_component__WEBPACK_IMPORTED_MODULE_7__["LanguageTextsComponent"], data: { permission: 'Pages.Administration.Languages.ChangeTexts' } },
                            { path: 'tenants', component: _tenants_tenants_component__WEBPACK_IMPORTED_MODULE_16__["TenantsComponent"], data: { permission: 'Pages.Tenants' } },
                            { path: 'organization-units', component: _organization_units_organization_units_component__WEBPACK_IMPORTED_MODULE_10__["OrganizationUnitsComponent"], data: { permission: 'Pages.Administration.OrganizationUnits' } },
                            { path: 'subscription-management', component: _subscription_management_subscription_management_component__WEBPACK_IMPORTED_MODULE_15__["SubscriptionManagementComponent"], data: { permission: 'Pages.Administration.Tenant.SubscriptionManagement' } },
                            { path: 'invoice/:paymentId', component: _subscription_management_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_14__["InvoiceComponent"], data: { permission: 'Pages.Administration.Tenant.SubscriptionManagement' } },
                            { path: 'tenantSettings', component: _settings_tenant_settings_component__WEBPACK_IMPORTED_MODULE_13__["TenantSettingsComponent"], data: { permission: 'Pages.Administration.Tenant.Settings' } },
                            { path: 'hostDashboard', component: _dashboard_host_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["HostDashboardComponent"], data: { permission: 'Pages.Administration.Host.Dashboard' } },
                            { path: 'demo-ui-components', component: _demo_ui_components_demo_ui_components_component__WEBPACK_IMPORTED_MODULE_4__["DemoUiComponentsComponent"], data: { permission: 'Pages.DemoUiComponents' } },
                            { path: 'install', component: _install_install_component__WEBPACK_IMPORTED_MODULE_6__["InstallComponent"] },
                            { path: 'ui-customization', component: _ui_customization_ui_customization_component__WEBPACK_IMPORTED_MODULE_17__["UiCustomizationComponent"] }
                        ]
                    }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_shared_common_app_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/common/app-common.module */ "./src/app/shared/common/app-common.module.ts");
/* harmony import */ var _shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/utils/utils.module */ "./src/shared/utils/utils.module.ts");
/* harmony import */ var app_admin_organization_units_add_member_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/admin/organization-units/add-member-modal.component */ "./src/app/admin/organization-units/add-member-modal.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _audit_logs_audit_log_detail_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./audit-logs/audit-log-detail-modal.component */ "./src/app/admin/audit-logs/audit-log-detail-modal.component.ts");
/* harmony import */ var _audit_logs_audit_logs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./audit-logs/audit-logs.component */ "./src/app/admin/audit-logs/audit-logs.component.ts");
/* harmony import */ var _audit_logs_entity_change_detail_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./audit-logs/entity-change-detail-modal.component */ "./src/app/admin/audit-logs/entity-change-detail-modal.component.ts");
/* harmony import */ var _dashboard_host_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/host-dashboard.component */ "./src/app/admin/dashboard/host-dashboard.component.ts");
/* harmony import */ var _demo_ui_components_demo_ui_components_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./demo-ui-components/demo-ui-components.component */ "./src/app/admin/demo-ui-components/demo-ui-components.component.ts");
/* harmony import */ var _demo_ui_components_demo_ui_date_time_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./demo-ui-components/demo-ui-date-time.component */ "./src/app/admin/demo-ui-components/demo-ui-date-time.component.ts");
/* harmony import */ var _demo_ui_components_demo_ui_editor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./demo-ui-components/demo-ui-editor.component */ "./src/app/admin/demo-ui-components/demo-ui-editor.component.ts");
/* harmony import */ var _demo_ui_components_demo_ui_file_upload_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./demo-ui-components/demo-ui-file-upload.component */ "./src/app/admin/demo-ui-components/demo-ui-file-upload.component.ts");
/* harmony import */ var _demo_ui_components_demo_ui_input_mask_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./demo-ui-components/demo-ui-input-mask.component */ "./src/app/admin/demo-ui-components/demo-ui-input-mask.component.ts");
/* harmony import */ var _demo_ui_components_demo_ui_selection_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./demo-ui-components/demo-ui-selection.component */ "./src/app/admin/demo-ui-components/demo-ui-selection.component.ts");
/* harmony import */ var _editions_create_or_edit_edition_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./editions/create-or-edit-edition-modal.component */ "./src/app/admin/editions/create-or-edit-edition-modal.component.ts");
/* harmony import */ var _editions_editions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./editions/editions.component */ "./src/app/admin/editions/editions.component.ts");
/* harmony import */ var _install_install_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./install/install.component */ "./src/app/admin/install/install.component.ts");
/* harmony import */ var _languages_create_or_edit_language_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./languages/create-or-edit-language-modal.component */ "./src/app/admin/languages/create-or-edit-language-modal.component.ts");
/* harmony import */ var _languages_edit_text_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./languages/edit-text-modal.component */ "./src/app/admin/languages/edit-text-modal.component.ts");
/* harmony import */ var _languages_language_texts_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./languages/language-texts.component */ "./src/app/admin/languages/language-texts.component.ts");
/* harmony import */ var _languages_languages_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./languages/languages.component */ "./src/app/admin/languages/languages.component.ts");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "./src/app/admin/maintenance/maintenance.component.ts");
/* harmony import */ var _organization_units_create_or_edit_unit_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./organization-units/create-or-edit-unit-modal.component */ "./src/app/admin/organization-units/create-or-edit-unit-modal.component.ts");
/* harmony import */ var _organization_units_organization_tree_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./organization-units/organization-tree.component */ "./src/app/admin/organization-units/organization-tree.component.ts");
/* harmony import */ var _organization_units_organization_unit_members_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./organization-units/organization-unit-members.component */ "./src/app/admin/organization-units/organization-unit-members.component.ts");
/* harmony import */ var _organization_units_organization_units_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./organization-units/organization-units.component */ "./src/app/admin/organization-units/organization-units.component.ts");
/* harmony import */ var _roles_create_or_edit_role_modal_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./roles/create-or-edit-role-modal.component */ "./src/app/admin/roles/create-or-edit-role-modal.component.ts");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/admin/roles/roles.component.ts");
/* harmony import */ var _settings_host_settings_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./settings/host-settings.component */ "./src/app/admin/settings/host-settings.component.ts");
/* harmony import */ var _settings_tenant_settings_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./settings/tenant-settings.component */ "./src/app/admin/settings/tenant-settings.component.ts");
/* harmony import */ var _shared_edition_combo_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./shared/edition-combo.component */ "./src/app/admin/shared/edition-combo.component.ts");
/* harmony import */ var _shared_feature_tree_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shared/feature-tree.component */ "./src/app/admin/shared/feature-tree.component.ts");
/* harmony import */ var _shared_organization_unit_tree_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/organization-unit-tree.component */ "./src/app/admin/shared/organization-unit-tree.component.ts");
/* harmony import */ var _shared_permission_combo_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./shared/permission-combo.component */ "./src/app/admin/shared/permission-combo.component.ts");
/* harmony import */ var _shared_permission_tree_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shared/permission-tree.component */ "./src/app/admin/shared/permission-tree.component.ts");
/* harmony import */ var _shared_role_combo_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./shared/role-combo.component */ "./src/app/admin/shared/role-combo.component.ts");
/* harmony import */ var _subscription_management_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./subscription-management/invoice/invoice.component */ "./src/app/admin/subscription-management/invoice/invoice.component.ts");
/* harmony import */ var _subscription_management_subscription_management_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./subscription-management/subscription-management.component */ "./src/app/admin/subscription-management/subscription-management.component.ts");
/* harmony import */ var _tenants_create_tenant_modal_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./tenants/create-tenant-modal.component */ "./src/app/admin/tenants/create-tenant-modal.component.ts");
/* harmony import */ var _tenants_edit_tenant_modal_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./tenants/edit-tenant-modal.component */ "./src/app/admin/tenants/edit-tenant-modal.component.ts");
/* harmony import */ var _tenants_tenant_features_modal_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./tenants/tenant-features-modal.component */ "./src/app/admin/tenants/tenant-features-modal.component.ts");
/* harmony import */ var _tenants_tenants_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./tenants/tenants.component */ "./src/app/admin/tenants/tenants.component.ts");
/* harmony import */ var _ui_customization_ui_customization_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./ui-customization/ui-customization.component */ "./src/app/admin/ui-customization/ui-customization.component.ts");
/* harmony import */ var _users_create_or_edit_user_modal_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./users/create-or-edit-user-modal.component */ "./src/app/admin/users/create-or-edit-user-modal.component.ts");
/* harmony import */ var _users_edit_user_permissions_modal_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./users/edit-user-permissions-modal.component */ "./src/app/admin/users/edit-user-permissions-modal.component.ts");
/* harmony import */ var _users_impersonation_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./users/impersonation.service */ "./src/app/admin/users/impersonation.service.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./users/users.component */ "./src/app/admin/users/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















































var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PopoverModule"].forRoot(),
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_10__["AdminRoutingModule"],
                _shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_4__["UtilsModule"],
                _app_shared_common_app_common_module__WEBPACK_IMPORTED_MODULE_3__["AppCommonModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["PaginatorModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["AutoCompleteModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["EditorModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["InputMaskModule"]
            ],
            declarations: [
                _users_users_component__WEBPACK_IMPORTED_MODULE_53__["UsersComponent"],
                _shared_permission_combo_component__WEBPACK_IMPORTED_MODULE_40__["PermissionComboComponent"],
                _shared_role_combo_component__WEBPACK_IMPORTED_MODULE_42__["RoleComboComponent"],
                _users_create_or_edit_user_modal_component__WEBPACK_IMPORTED_MODULE_50__["CreateOrEditUserModalComponent"],
                _users_edit_user_permissions_modal_component__WEBPACK_IMPORTED_MODULE_51__["EditUserPermissionsModalComponent"],
                _shared_permission_tree_component__WEBPACK_IMPORTED_MODULE_41__["PermissionTreeComponent"],
                _shared_feature_tree_component__WEBPACK_IMPORTED_MODULE_38__["FeatureTreeComponent"],
                _shared_organization_unit_tree_component__WEBPACK_IMPORTED_MODULE_39__["OrganizationUnitsTreeComponent"],
                _roles_roles_component__WEBPACK_IMPORTED_MODULE_34__["RolesComponent"],
                _roles_create_or_edit_role_modal_component__WEBPACK_IMPORTED_MODULE_33__["CreateOrEditRoleModalComponent"],
                _audit_logs_audit_logs_component__WEBPACK_IMPORTED_MODULE_12__["AuditLogsComponent"],
                _audit_logs_audit_log_detail_modal_component__WEBPACK_IMPORTED_MODULE_11__["AuditLogDetailModalComponent"],
                _audit_logs_entity_change_detail_modal_component__WEBPACK_IMPORTED_MODULE_13__["EntityChangeDetailModalComponent"],
                _settings_host_settings_component__WEBPACK_IMPORTED_MODULE_35__["HostSettingsComponent"],
                _install_install_component__WEBPACK_IMPORTED_MODULE_23__["InstallComponent"],
                _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_28__["MaintenanceComponent"],
                _editions_editions_component__WEBPACK_IMPORTED_MODULE_22__["EditionsComponent"],
                _editions_create_or_edit_edition_modal_component__WEBPACK_IMPORTED_MODULE_21__["CreateOrEditEditionModalComponent"],
                _languages_languages_component__WEBPACK_IMPORTED_MODULE_27__["LanguagesComponent"],
                _languages_language_texts_component__WEBPACK_IMPORTED_MODULE_26__["LanguageTextsComponent"],
                _languages_create_or_edit_language_modal_component__WEBPACK_IMPORTED_MODULE_24__["CreateOrEditLanguageModalComponent"],
                _tenants_tenants_component__WEBPACK_IMPORTED_MODULE_48__["TenantsComponent"],
                _tenants_create_tenant_modal_component__WEBPACK_IMPORTED_MODULE_45__["CreateTenantModalComponent"],
                _tenants_edit_tenant_modal_component__WEBPACK_IMPORTED_MODULE_46__["EditTenantModalComponent"],
                _tenants_tenant_features_modal_component__WEBPACK_IMPORTED_MODULE_47__["TenantFeaturesModalComponent"],
                _languages_create_or_edit_language_modal_component__WEBPACK_IMPORTED_MODULE_24__["CreateOrEditLanguageModalComponent"],
                _languages_edit_text_modal_component__WEBPACK_IMPORTED_MODULE_25__["EditTextModalComponent"],
                _organization_units_organization_units_component__WEBPACK_IMPORTED_MODULE_32__["OrganizationUnitsComponent"],
                _organization_units_organization_tree_component__WEBPACK_IMPORTED_MODULE_30__["OrganizationTreeComponent"],
                _organization_units_organization_unit_members_component__WEBPACK_IMPORTED_MODULE_31__["OrganizationUnitMembersComponent"],
                _organization_units_create_or_edit_unit_modal_component__WEBPACK_IMPORTED_MODULE_29__["CreateOrEditUnitModalComponent"],
                _settings_tenant_settings_component__WEBPACK_IMPORTED_MODULE_36__["TenantSettingsComponent"],
                _dashboard_host_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["HostDashboardComponent"],
                _shared_edition_combo_component__WEBPACK_IMPORTED_MODULE_37__["EditionComboComponent"],
                _subscription_management_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_43__["InvoiceComponent"],
                _subscription_management_subscription_management_component__WEBPACK_IMPORTED_MODULE_44__["SubscriptionManagementComponent"],
                app_admin_organization_units_add_member_modal_component__WEBPACK_IMPORTED_MODULE_5__["AddMemberModalComponent"],
                _demo_ui_components_demo_ui_components_component__WEBPACK_IMPORTED_MODULE_15__["DemoUiComponentsComponent"],
                _demo_ui_components_demo_ui_date_time_component__WEBPACK_IMPORTED_MODULE_16__["DemoUiDateTimeComponent"],
                _demo_ui_components_demo_ui_selection_component__WEBPACK_IMPORTED_MODULE_20__["DemoUiSelectionComponent"],
                _demo_ui_components_demo_ui_file_upload_component__WEBPACK_IMPORTED_MODULE_18__["DemoUiFileUploadComponent"],
                _demo_ui_components_demo_ui_input_mask_component__WEBPACK_IMPORTED_MODULE_19__["DemoUiInputMaskComponent"],
                _demo_ui_components_demo_ui_editor_component__WEBPACK_IMPORTED_MODULE_17__["DemoUiEditorComponent"],
                _ui_customization_ui_customization_component__WEBPACK_IMPORTED_MODULE_49__["UiCustomizationComponent"]
            ],
            exports: [
                app_admin_organization_units_add_member_modal_component__WEBPACK_IMPORTED_MODULE_5__["AddMemberModalComponent"]
            ],
            providers: [
                _users_impersonation_service__WEBPACK_IMPORTED_MODULE_52__["ImpersonationService"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/audit-logs/audit-log-detail-modal.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/audit-logs/audit-log-detail-modal.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #auditLogDetailModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"auditLogDetailModal\"\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <form *ngIf=\"active\" #roleForm=\"ngForm\" novalidate (ngSubmit)=\"save()\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">\n                        <span *ngIf=\"auditLog.userId\">{{l(\"AuditLogDetail\")}}</span>\n                    </h4>\n                    <button type=\"button\" class=\"close\" (click)=\"close()\" [attr.aria-label]=\"l('Close')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <h3 class=\"form-section\">{{l(\"UserInformations\")}}</h3>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n\n                            <div class=\"form-group m-form__group row\">\n                                <label class=\"col-lg-3 col-form-label\">\n                                    {{l(\"UserName\")}}:\n                                </label>\n                                <div class=\"col-lg-9\">\n                                    <span>{{auditLog.userName}}</span>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group m-form__group row\">\n                                <label class=\"col-lg-3 col-form-label\">\n                                    {{l(\"IpAddress\")}}:\n                                </label>\n                                <div class=\"col-lg-9\">\n                                    <span>{{auditLog.ipAddress}}</span>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group m-form__group row\">\n                                <label class=\"col-lg-3 col-form-label\">\n                                    {{l(\"Client\")}}:\n                                </label>\n                                <div class=\"col-lg-9\">\n                                    <span>{{auditLog.clientName}}</span>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group m-form__group row\">\n                                <label class=\"col-lg-3 col-form-label\">\n                                    {{l(\"Browser\")}}:\n                                </label>\n                                <div class=\"col-lg-9\">\n                                    <span>{{auditLog.browserInfo}}</span>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group m-form__group row\" *ngIf=\"auditLog.impersonatorUserId\">\n                                <label class=\"col-lg-3 col-form-label\">\n                                </label>\n                                <div class=\"col-lg-9\">\n                                    <span>{{AuditLogImpersonatedOperationInfo}}</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <h3 class=\"form-section\">{{l(\"ActionInformations\")}}</h3>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group m-form__group row\">\n                                <label class=\"col-lg-3 col-form-label\">\n                                    {{l(\"Service\")}}:\n                                </label>\n                                <div class=\"col-lg-9\">\n                                    <span>{{auditLog.serviceName}}</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group m-form__group row\">\n                                <label class=\"col-lg-3 col-form-label\">\n                                    {{l(\"Action\")}}:\n                                </label>\n                                <div class=\"col-lg-9\">\n                                    <span>{{auditLog.methodName}}</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group m-form__group row\">\n                                <label class=\"col-lg-3 col-form-label\">\n                                    {{l(\"Time\")}}:\n                                </label>\n                                <div class=\"col-lg-9\">\n                                    <span>{{getExecutionTime()}}</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group m-form__group row\">\n                                <label class=\"col-lg-3 col-form-label\">\n                                    {{l(\"Duration\")}}:\n                                </label>\n                                <div class=\"col-lg-9\">\n                                    <span>{{getDurationAsMs()}}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group m-form__group row\">\n                                <label class=\"col-lg-3 col-form-label\">\n                                    {{l(\"Parameters\")}}:\n                                </label>\n                                <div class=\"col-lg-9 alert m-alert m-alert--default\">\n                                    <pre lang=\"js\">{{getFormattedParameters()}}</pre>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <h3 class=\"form-section\">{{l(\"CustomData\")}}</h3>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group m-form__group row\">\n                                <label class=\"col-lg-3 col-form-label\">\n                                    {{l(\"None\")}}:\n                                </label>\n                                <div *ngIf=\"auditLog.customData\" class=\"col-lg-9 alert m-alert m-alert--default\">\n                                    <pre>{{auditLog.customData}}</pre>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <h3 class=\"form-section\">{{l(\"ErrorState\")}}</h3>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group m-form__group row\">\n                                <label *ngIf=\"!auditLog.exception\" class=\"col-lg-12 col-form-label\">\n                                    <i class=\"fa fa-check-circle m--font-success\"></i> {{l(\"Success\")}}\n                                </label>\n                                <div *ngIf=\"auditLog.exception\" class=\"col-lg-12 alert m-alert m-alert--default\">\n                                    <pre>{{auditLog.exception}}</pre>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">{{l(\"Close\")}}</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/audit-logs/audit-log-detail-modal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/audit-logs/audit-log-detail-modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: AuditLogDetailModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditLogDetailModalComponent", function() { return AuditLogDetailModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
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




var AuditLogDetailModalComponent = /** @class */ (function (_super) {
    __extends(AuditLogDetailModalComponent, _super);
    function AuditLogDetailModalComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.active = false;
        return _this;
    }
    AuditLogDetailModalComponent.prototype.getExecutionTime = function () {
        var self = this;
        return moment__WEBPACK_IMPORTED_MODULE_2__(self.auditLog.executionTime).fromNow() + ' (' + moment__WEBPACK_IMPORTED_MODULE_2__(self.auditLog.executionTime).format('YYYY-MM-DD HH:mm:ss') + ')';
    };
    AuditLogDetailModalComponent.prototype.getDurationAsMs = function () {
        var self = this;
        return self.l('Xms', self.auditLog.executionDuration);
    };
    AuditLogDetailModalComponent.prototype.getFormattedParameters = function () {
        var self = this;
        try {
            var json = JSON.parse(self.auditLog.parameters);
            return JSON.stringify(json, null, 4);
        }
        catch (e) {
            return self.auditLog.parameters;
        }
    };
    AuditLogDetailModalComponent.prototype.show = function (record) {
        var self = this;
        self.active = true;
        self.auditLog = record;
        self.modal.show();
    };
    AuditLogDetailModalComponent.prototype.close = function () {
        this.active = false;
        this.modal.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('auditLogDetailModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], AuditLogDetailModalComponent.prototype, "modal", void 0);
    AuditLogDetailModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'auditLogDetailModal',
            template: __webpack_require__(/*! ./audit-log-detail-modal.component.html */ "./src/app/admin/audit-logs/audit-log-detail-modal.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AuditLogDetailModalComponent);
    return AuditLogDetailModalComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/audit-logs/audit-logs.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/audit-logs/audit-logs.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n\n\n    <div class=\"m-subheader \">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto col-sm-6\">\n                <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                    <span>{{l(\"AuditLogs\")}}</span>\n                </h3>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"m-content\">\n        <div class=\"m-portlet m-portlet--mobile\">\n            <div class=\"m-portlet__body\">\n\n                <div id=\"SettingsTabPanel\" class=\"tabbable-line\">\n\n                    <ul class=\"nav nav-tabs  m-tabs-line\" role=\"tablist\">\n                        <li class=\"nav-item m-tabs__item\">\n                            <a href=\"#AuditLogsTab\" class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" role=\"tab\">\n                                {{l(\"OperationLogs\")}}\n                            </a>\n                        </li>\n                        <li class=\"nav-item m-tabs__item\">\n                            <a href=\"#EntityChangesTab\" class=\"nav-link m-tabs__link\" data-toggle=\"tab\" role=\"tab\">\n                                {{l(\"ChangeLogs\")}}\n                            </a>\n                        </li>\n                    </ul>\n\n                    <div class=\"tab-content\">\n                        <div class=\"tab-content\">\n                            <div class=\"tab-pane active\" id=\"AuditLogsTab\" role=\"tabpanel\">\n\n                                <div class=\"row margin-bottom-10\">\n                                    <div class=\"col-sm-12 text-right\">\n                                        <button type=\"button\" class=\"btn btn-success\" (click)=\"exportToExcelAuditLogs()\"><i class=\"fa fa-file-excel-o\"></i> {{l(\"ExportToExcel\")}}</button>\n                                        <button type=\"button\" class=\"btn btn-metal\" (click)=\"getAuditLogs()\"><i class=\"fa fa-refresh\"></i> {{l(\"Refresh\")}}</button>\n                                    </div>\n                                </div>\n\n                                <div class=\"m-form m-form--label-align-right\">\n                                    <form class=\"horizontal-form\" #auditFilterForm=\"ngForm\" (ngSubmit)=\"getAuditLogs()\">\n                                        <div class=\"row align-items-center m--margin-bottom-10\">\n                                            <div class=\"col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"StartEndRange\" class=\"control-label\">{{l(\"DateRange\")}}</label>\n                                                    <date-range-picker id=\"StartEndRange\" [(startDate)]=\"startDate\" [(endDate)]=\"endDate\"></date-range-picker>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"UsernameAuditLog\" class=\"control-label\">{{l(\"UserName\")}}</label>\n                                                    <input id=\"UsernameAuditLog\" type=\"text\" name=\"UsernameAuditLog\" class=\"form-control\" [(ngModel)]=\"usernameAuditLog\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div *ngIf=\"advancedFiltersAreShown\" class=\"row\">\n                                            <div class=\"col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"ServiceName\" class=\"control-label\">{{l(\"Service\")}}</label>\n                                                    <input id=\"ServiceName\" name=\"ServiceName\" type=\"text\" class=\"form-control\" [(ngModel)]=\"serviceName\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <label class=\"control-label\" style=\"display: block\">{{l(\"Duration\")}}</label>\n                                                <div class=\"input-group\" style=\"width: 250px !important;\">\n                                                    <input type=\"text\" name=\"MinExecutionDuration\" only-number=\"\" class=\"form-control\" min=\"0\" max=\"86400000\" ng-minlength=\"0\" ng-maxlength=\"8\" [(ngModel)]=\"minExecutionDuration\">\n                                                    <span class=\"input-group-addon\">\n                                                        ---\n                                                    </span>\n                                                    <input type=\"text\" name=\"MaxExecutionDuration\" only-number=\"\" class=\"form-control\" min=\"0\" max=\"86400000\" ng-minlength=\"0\" ng-maxlength=\"8\" [(ngModel)]=\"maxExecutionDuration\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"MethodName\" class=\"control-label\">{{l(\"Action\")}}</label>\n                                                    <input id=\"MethodName\" type=\"text\" name=\"MethodName\" class=\"form-control\" [(ngModel)]=\"methodName\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"HasException\" class=\"control-label\">{{l(\"ErrorState\")}}</label>\n                                                    <select id=\"HasException\" name=\"HasException\" class=\"form-control\" [(ngModel)]=\"hasException\">\n                                                        <option value=\"\">{{l(\"All\")}}</option>\n                                                        <option value=\"false\">{{l(\"Success\")}}</option>\n                                                        <option value=\"true\">{{l(\"HasError\")}}</option>\n                                                    </select>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"BrowserInfo\" class=\"control-label\">{{l(\"Browser\")}}</label>\n                                                    <input id=\"BrowserInfo\" type=\"text\" name=\"BrowserInfo\" class=\"form-control\" [(ngModel)]=\"browserInfo\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <div class=\"form-group\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"row m--margin-bottom-10\">\n                                            <div class=\"col-sm-6\">\n                                                <span class=\"clickable-item text-muted\" *ngIf=\"!advancedFiltersAreShown\" (click)=\"advancedFiltersAreShown=!advancedFiltersAreShown\"><i class=\"fa fa-angle-down\"></i> {{l(\"ShowAdvancedFilters\")}}</span>\n                                                <span class=\"clickable-item text-muted\" *ngIf=\"advancedFiltersAreShown\" (click)=\"advancedFiltersAreShown=!advancedFiltersAreShown\"><i class=\"fa fa-angle-up\"></i> {{l(\"HideAdvancedFilters\")}}</span>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </div>\n                                <div class=\"row align-items-center\">\n                                    <!--<Primeng-TurboTable-Start>-->\n                                    <div class=\"primeng-datatable-container\" [busyIf]=\"primengTableHelperAuditLogs.isLoading\">\n                                        <p-table #dataTableAuditLogs\n                                                     (onLazyLoad)=\"getAuditLogs($event)\"\n                                                     [value]=\"primengTableHelperAuditLogs.records\"\n                                                     rows=\"{{primengTableHelperAuditLogs.defaultRecordsCountPerPage}}\"\n                                                     [paginator]=\"false\"\n                                                     [lazy]=\"true\"\n                                                     scrollable=\"true\"\n                                                     ScrollWidth=\"100%\"\n                                                     responsive=\"primengTableHelperAuditLogs.isResponsive\"\n                                                     resizableColumns=\"primengTableHelperAuditLogs.resizableColumns\">\n                                            <ng-template pTemplate=\"header\">\n                                                <tr>\n                                                    <th style=\"width:75px\"></th>\n                                                    <th style=\"width:75px\"></th>\n                                                    <th style=\"width: 150px\" pSortableColumn=\"executionTime\">\n                                                        {{l('Time')}}\n                                                        <p-sortIcon field=\"executionTime\"></p-sortIcon>\n                                                    </th>\n                                                    <th style=\"width: 150px\" pSortableColumn=\"userName\">\n                                                        {{l('UserName')}}\n                                                        <p-sortIcon field=\"userName\"></p-sortIcon>\n                                                    </th>\n                                                    <th style=\"width: 250px\">\n                                                        {{l('Service')}}\n                                                    </th>\n                                                    <th style=\"width: 250px\">\n                                                        {{l('Action')}}\n                                                    </th>\n                                                    <th style=\"width: 100px\" pSortableColumn=\"executionDuration\">\n                                                        {{l('Duration')}}\n                                                        <p-sortIcon field=\"executionDuration\"></p-sortIcon>\n                                                    </th>\n                                                    <th style=\"width: 150px\">\n                                                        {{l('IpAddress')}}\n                                                    </th>\n                                                    <th style=\"width: 150px\">\n                                                        {{l('Client')}}\n                                                    </th>\n                                                    <th style=\"width: 150px\">\n                                                        {{l('Browser')}}\n                                                    </th>\n                                                </tr>\n                                            </ng-template>\n                                            <ng-template pTemplate=\"body\" let-record=\"$implicit\">\n                                                <tr>\n                                                    <td style=\"width: 75px\">\n                                                        <div class=\"text-center\">\n                                                            <button class=\"btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"showAuditLogDetails(record)\"><i class=\"la la-search\" [attr.aria-label]=\"l('Search')\"></i></button>\n                                                        </div>\n                                                    </td>\n                                                    <td style=\"width: 75px\">\n                                                        <div class=\"text-center\">\n                                                            <i *ngIf=\"record.exception\" class=\"fa fa-warning m--font-warning\"></i>\n                                                            <i *ngIf=\"!record.exception\" class=\"fa fa-check-circle m--font-success\"></i>\n                                                        </div>\n                                                    </td>\n                                                    <td style=\"width: 150px\">\n                                                        {{ record.executionTime | momentFormat:'YYYY-MM-DD HH:mm:ss'}}\n                                                    </td>\n                                                    <td style=\"width: 150px\">\n                                                        {{record.userName}}\n                                                    </td>\n                                                    <td style=\"width: 250px\">\n                                                        {{record.serviceName}}\n                                                    </td>\n                                                    <td style=\"width: 250px\">\n                                                        {{record.methodName}}\n                                                    </td>\n                                                    <td style=\"width: 100px\">\n                                                        {{l('Xms', record.executionDuration)}}\n                                                    </td>\n                                                    <td style=\"width: 150px\">\n                                                        {{record.clientIpAddress}}\n                                                    </td>\n                                                    <td style=\"width: 150px\">\n                                                        {{record.clientName}}\n                                                    </td>\n                                                    <td style=\"width: 150px\">\n                                                        <span title=\"{{record.browserInfo}}\">{{truncateStringWithPostfix(record.browserInfo, 20)}}</span>\n                                                    </td>\n                                                </tr>\n                                            </ng-template>\n                                        </p-table>\n                                        <div class=\"primeng-paging-container\">\n                                            <p-paginator rows=\"{{primengTableHelperAuditLogs.defaultRecordsCountPerPage}}\"\n                                                         #paginatorAuditLogs\n                                                         (onPageChange)=\"getAuditLogs($event)\"\n                                                         [totalRecords]=\"primengTableHelperAuditLogs.totalRecordsCount\"\n                                                         [rowsPerPageOptions]=\"primengTableHelperAuditLogs.predefinedRecordsCountPerPage\">\n                                            </p-paginator>\n                                            <span class=\"total-records-count\">\n                                                {{l('TotalRecordsCount', primengTableHelperAuditLogs.totalRecordsCount)}}\n                                            </span>\n                                        </div>\n                                    </div>\n                                    <!--<Primeng-TurboTable-End>-->\n                                </div>\n                            </div>\n                            <div class=\"tab-pane\" id=\"EntityChangesTab\" role=\"tabpanel\">\n                                <div class=\"row margin-bottom-10\">\n                                    <div class=\"col-sm-12 text-right\">\n                                        <button type=\"button\" class=\"btn btn-success\" (click)=\"exportToExcelEntityChanges()\"><i class=\"fa fa-file-excel-o\"></i> {{l(\"ExportToExcel\")}}</button>\n                                        <button type=\"button\" class=\"btn btn-metal\" (click)=\"getEntityChanges()\"><i class=\"fa fa-refresh\"></i> {{l(\"Refresh\")}}</button>\n                                    </div>\n                                </div>\n                                <div class=\"m-form m-form--label-align-right\">\n                                    <form class=\"horizontal-form\" #entityChangeFilterForm=\"ngForm\" (ngSubmit)=\"getEntityChanges()\">\n                                        <div class=\"row align-items-center m--margin-bottom-10\">\n                                            <div class=\"col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"StartEndRangeEntityChange\" class=\"control-label\">{{l(\"DateRange\")}}</label>\n                                                    <date-range-picker id=\"StartEndRangeEntityChange\" [(startDate)]=\"startDate\" [(endDate)]=\"endDate\"></date-range-picker>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"UserNameEntityChange\" class=\"control-label\">{{l(\"UserName\")}}</label>\n                                                    <input id=\"UserNameEntityChange\" type=\"text\" name=\"UserNameEntityChange\" class=\"form-control\" [(ngModel)]=\"usernameEntityChange\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"EntityTypeFullName\" class=\"control-label\">{{l(\"Object\")}}</label>\n\n                                                    <select id=\"EntityTypeFullName\" name=\"EntityTypeFullName\" class=\"form-control\" [(ngModel)]=\"entityTypeFullName\">\n                                                        <option value=\"\" selected=\"selected\">{{l(\"All\")}}</option>\n                                                        <option *ngFor=\"let objectType of objectTypes\" [value]=\"objectType.value\">{{objectType.name}}</option>\n                                                    </select>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </div>\n\n                                <div class=\"row align-items-center\">\n                                    <!--<Primeng-TurboTable-Start>-->\n                                    <div class=\"primeng-datatable-container\" [busyIf]=\"primengTableHelperEntityChanges.isLoading\">\n                                        <p-table #dataTableEntityChanges\n                                                     (onLazyLoad)=\"getEntityChanges($event)\"\n                                                     [value]=\"primengTableHelperEntityChanges.records\"\n                                                     rows=\"{{primengTableHelperEntityChanges.defaultRecordsCountPerPage}}\"\n                                                     [paginator]=\"false\"\n                                                     [lazy]=\"true\"\n                                                     scrollable=\"true\"\n                                                     ScrollWidth=\"100%\"\n                                                     responsive=\"primengTableHelperEntityChanges.isResponsive\"\n                                                     resizableColumns=\"primengTableHelperEntityChanges.resizableColumns\">\n                                            <ng-template pTemplate=\"header\">\n                                                <tr>\n                                                    <th style=\"width: 40px\">\n                                                        \n                                                    </th>\n                                                    <th style=\"width: 150px\">\n                                                        {{l('Action')}}\n                                                    </th>\n                                                    <th style=\"width: 250px\">\n                                                        {{l('Object')}}\n                                                    </th>\n                                                    <th style=\"width: 150px\" pSortableColumn=\"userName\">\n                                                        {{l('UserName')}}\n                                                        <p-sortIcon field=\"userName\"></p-sortIcon>\n                                                    </th>\n                                                    <th style=\"width: 150px\" pSortableColumn=\"changeTime\">\n                                                        {{l('Time')}}\n                                                        <p-sortIcon field=\"changeTime\"></p-sortIcon>\n                                                    </th>\n                                                </tr>\n                                            </ng-template>\n                                            <ng-template pTemplate=\"body\" let-record=\"$implicit\">\n                                                <tr>\n                                                    <td style=\"width: 40px\">\n                                                        <div class=\"text-center\">\n                                                            <button class=\"btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"showEntityChangeDetails(record)\"><i class=\"la la-search\" [attr.aria-label]=\"l('Search')\"></i></button>\n                                                        </div>\n                                                    </td>\n                                                    <td style=\"width: 150px\">\n                                                        <span title=\"{{record.changeTypeName}}\">{{l(record.changeTypeName)}}</span>\n                                                    </td>\n                                                    <td style=\"width: 250px\">\n                                                        {{record.entityTypeFullName}}\n                                                    </td>\n                                                    <td style=\"width: 150px\">\n                                                        {{record.userName}}\n                                                    </td>\n                                                    <td style=\"width: 150px\">\n                                                        {{ record.changeTime | momentFormat:'YYYY-MM-DD HH:mm:ss'}}\n                                                    </td>\n                                                </tr>\n                                            </ng-template>\n                                        </p-table>\n                                        <div class=\"primeng-paging-container\">\n                                            <p-paginator rows=\"{{primengTableHelperEntityChanges.defaultRecordsCountPerPage}}\"\n                                                         #paginatorEntityChanges\n                                                         (onPageChange)=\"getEntityChanges($event)\"\n                                                         [totalRecords]=\"primengTableHelperEntityChanges.totalRecordsCount\"\n                                                         [rowsPerPageOptions]=\"primengTableHelperEntityChanges.predefinedRecordsCountPerPage\">\n                                            </p-paginator>\n                                            <span class=\"total-records-count\">\n                                                {{l('TotalRecordsCount', primengTableHelperEntityChanges.totalRecordsCount)}}\n                                            </span>\n                                        </div>\n                                    </div>\n                                    <!--<Primeng-TurboTable-End>-->\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <auditLogDetailModal #auditLogDetailModal></auditLogDetailModal>\n    <entityChangeDetailModal #entityChangeDetailModal></entityChangeDetailModal>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/audit-logs/audit-logs.component.less":
/*!************************************************************!*\
  !*** ./src/app/admin/audit-logs/audit-logs.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".audit-log-detail-view h3.form-section {\n  margin-top: 5px;\n}\n.audit-log-detail-view .form-group {\n  margin-bottom: 0;\n}\n.audit-log-detail-view .form-group p.form-control-static {\n  margin: 0;\n}\n.audit-log-detail-view .form-group .control-label {\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/admin/audit-logs/audit-logs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/audit-logs/audit-logs.component.ts ***!
  \**********************************************************/
/*! exports provided: AuditLogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditLogsComponent", function() { return AuditLogsComponent; });
/* harmony import */ var _abp_notify_notify_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/notify/notify.service */ "./node_modules/abp-ng2-module/dist/src/notify/notify.service.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_admin_audit_logs_audit_log_detail_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/admin/audit-logs/audit-log-detail-modal.component */ "./src/app/admin/audit-logs/audit-log-detail-modal.component.ts");
/* harmony import */ var _app_admin_audit_logs_entity_change_detail_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/admin/audit-logs/entity-change-detail-modal.component */ "./src/app/admin/audit-logs/entity-change-detail-modal.component.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _shared_utils_file_download_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/utils/file-download.service */ "./src/shared/utils/file-download.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/components/paginator/paginator */ "./node_modules/primeng/components/paginator/paginator.js");
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/components/table/table */ "./node_modules/primeng/components/table/table.js");
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_components_table_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var shared_helpers_PrimengTableHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/helpers/PrimengTableHelper */ "./src/shared/helpers/PrimengTableHelper.ts");
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












var AuditLogsComponent = /** @class */ (function (_super) {
    __extends(AuditLogsComponent, _super);
    function AuditLogsComponent(injector, _auditLogService, _notifyService, _fileDownloadService) {
        var _this = _super.call(this, injector) || this;
        _this._auditLogService = _auditLogService;
        _this._notifyService = _notifyService;
        _this._fileDownloadService = _fileDownloadService;
        //Filters
        _this.startDate = moment__WEBPACK_IMPORTED_MODULE_8__().startOf('day');
        _this.endDate = moment__WEBPACK_IMPORTED_MODULE_8__().endOf('day');
        _this.hasException = undefined;
        _this.primengTableHelperAuditLogs = new shared_helpers_PrimengTableHelper__WEBPACK_IMPORTED_MODULE_11__["PrimengTableHelper"]();
        _this.primengTableHelperEntityChanges = new shared_helpers_PrimengTableHelper__WEBPACK_IMPORTED_MODULE_11__["PrimengTableHelper"]();
        _this.advancedFiltersAreShown = false;
        return _this;
    }
    AuditLogsComponent.prototype.showAuditLogDetails = function (record) {
        this.auditLogDetailModal.show(record);
    };
    AuditLogsComponent.prototype.showEntityChangeDetails = function (record) {
        this.entityChangeDetailModal.show(record);
    };
    AuditLogsComponent.prototype.getAuditLogs = function (event) {
        var _this = this;
        if (this.primengTableHelperAuditLogs.shouldResetPaging(event)) {
            this.paginatorAuditLogs.changePage(0);
            return;
        }
        this.primengTableHelperAuditLogs.showLoadingIndicator();
        this._auditLogService.getAuditLogs(this.startDate, this.endDate, this.usernameAuditLog, this.serviceName, this.methodName, this.browserInfo, this.hasException, this.minExecutionDuration, this.maxExecutionDuration, this.primengTableHelperAuditLogs.getSorting(this.dataTableAuditLogs), this.primengTableHelperAuditLogs.getMaxResultCount(this.paginatorAuditLogs, event), this.primengTableHelperAuditLogs.getSkipCount(this.paginatorAuditLogs, event)).subscribe(function (result) {
            _this.primengTableHelperAuditLogs.totalRecordsCount = result.totalCount;
            _this.primengTableHelperAuditLogs.records = result.items;
            _this.primengTableHelperAuditLogs.hideLoadingIndicator();
        });
    };
    AuditLogsComponent.prototype.getEntityChanges = function (event) {
        var _this = this;
        this._auditLogService.getEntityHistoryObjectTypes()
            .subscribe(function (result) {
            _this.objectTypes = result;
        });
        if (this.primengTableHelperEntityChanges.shouldResetPaging(event)) {
            this.paginatorEntityChanges.changePage(0);
            return;
        }
        this.primengTableHelperEntityChanges.showLoadingIndicator();
        this._auditLogService.getEntityChanges(this.startDate, this.endDate, this.usernameEntityChange, this.entityTypeFullName, this.primengTableHelperEntityChanges.getSorting(this.dataTableEntityChanges), this.primengTableHelperEntityChanges.getMaxResultCount(this.paginatorEntityChanges, event), this.primengTableHelperEntityChanges.getSkipCount(this.paginatorEntityChanges, event)).subscribe(function (result) {
            _this.primengTableHelperEntityChanges.totalRecordsCount = result.totalCount;
            _this.primengTableHelperEntityChanges.records = result.items;
            _this.primengTableHelperEntityChanges.hideLoadingIndicator();
        });
    };
    AuditLogsComponent.prototype.exportToExcelAuditLogs = function () {
        var self = this;
        self._auditLogService.getAuditLogsToExcel(self.startDate, self.endDate, self.usernameAuditLog, self.serviceName, self.methodName, self.browserInfo, self.hasException, self.minExecutionDuration, self.maxExecutionDuration, undefined, 1, 0)
            .subscribe(function (result) {
            self._fileDownloadService.downloadTempFile(result);
        });
    };
    AuditLogsComponent.prototype.exportToExcelEntityChanges = function () {
        var self = this;
        self._auditLogService.getEntityChangesToExcel(self.startDate, self.endDate, self.usernameEntityChange, self.entityTypeFullName, undefined, 1, 0)
            .subscribe(function (result) {
            self._fileDownloadService.downloadTempFile(result);
        });
    };
    AuditLogsComponent.prototype.truncateStringWithPostfix = function (text, length) {
        return abp.utils.truncateStringWithPostfix(text, length);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auditLogDetailModal'),
        __metadata("design:type", _app_admin_audit_logs_audit_log_detail_modal_component__WEBPACK_IMPORTED_MODULE_2__["AuditLogDetailModalComponent"])
    ], AuditLogsComponent.prototype, "auditLogDetailModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('entityChangeDetailModal'),
        __metadata("design:type", _app_admin_audit_logs_entity_change_detail_modal_component__WEBPACK_IMPORTED_MODULE_3__["EntityChangeDetailModalComponent"])
    ], AuditLogsComponent.prototype, "entityChangeDetailModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTableAuditLogs'),
        __metadata("design:type", primeng_components_table_table__WEBPACK_IMPORTED_MODULE_10__["Table"])
    ], AuditLogsComponent.prototype, "dataTableAuditLogs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTableEntityChanges'),
        __metadata("design:type", primeng_components_table_table__WEBPACK_IMPORTED_MODULE_10__["Table"])
    ], AuditLogsComponent.prototype, "dataTableEntityChanges", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paginatorAuditLogs'),
        __metadata("design:type", primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_9__["Paginator"])
    ], AuditLogsComponent.prototype, "paginatorAuditLogs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paginatorEntityChanges'),
        __metadata("design:type", primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_9__["Paginator"])
    ], AuditLogsComponent.prototype, "paginatorEntityChanges", void 0);
    AuditLogsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./audit-logs.component.html */ "./src/app/admin/audit-logs/audit-logs.component.html"),
            styles: [__webpack_require__(/*! ./audit-logs.component.less */ "./src/app/admin/audit-logs/audit-logs.component.less")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_4__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["AuditLogServiceProxy"],
            _abp_notify_notify_service__WEBPACK_IMPORTED_MODULE_0__["NotifyService"],
            _shared_utils_file_download_service__WEBPACK_IMPORTED_MODULE_7__["FileDownloadService"]])
    ], AuditLogsComponent);
    return AuditLogsComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_5__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/audit-logs/entity-change-detail-modal.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/audit-logs/entity-change-detail-modal.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #entityChangeDetailModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"entityChangeDetailModal\"\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n\n            <div *ngIf=\"entityChange\" class=\"modal-header\">\n                <h4 class=\"modal-title\">\n                    <span>{{l(\"Detail\")}} - {{l(entityChange.entityTypeFullName)}}</span> <br />\n                    <small [innerHTML]=\"l('CreatedAtByUser', entityChange.changeTime, entityChange.userName)\"></small>\n                </h4>\n            </div>\n            <div class=\"modal-body\">\n                <table id=\"EntityPropertyChangesTable\" class=\"display table table-striped table-bordered table-hover dt-responsive\">\n                    <thead>\n                        <tr>\n                            <th>{{l(\"Property\")}}</th>\n                            <th>{{l(\"OriginalValue\")}}</th>\n                            <th>{{l(\"NewValue\")}}</th>\n                        </tr>\n                        <tr *ngFor=\"let propertyChange of entityPropertyChanges\">\n                            <td><strong>{{propertyChange.propertyName}}</strong></td>\n\n                            <td>{{getPropertyChangeValue(propertyChange.originalValue, propertyChange.propertyTypeFullName)}}</td>\n                            <td>{{getPropertyChangeValue(propertyChange.newValue, propertyChange.propertyTypeFullName)}}</td>\n                        </tr>\n                    </thead>\n                </table>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">{{l(\"Close\")}}</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/audit-logs/entity-change-detail-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/audit-logs/entity-change-detail-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: EntityChangeDetailModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityChangeDetailModalComponent", function() { return EntityChangeDetailModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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





var EntityChangeDetailModalComponent = /** @class */ (function (_super) {
    __extends(EntityChangeDetailModalComponent, _super);
    function EntityChangeDetailModalComponent(injector, _auditLogService) {
        var _this = _super.call(this, injector) || this;
        _this._auditLogService = _auditLogService;
        _this.active = false;
        return _this;
    }
    EntityChangeDetailModalComponent.prototype.getPropertyChangeValue = function (propertyChangeValue, propertyTypeFullName) {
        if (!propertyChangeValue) {
            return propertyChangeValue;
        }
        propertyChangeValue = propertyChangeValue.replace(/^['"]+/g, '').replace(/['"]+$/g, '');
        if (this.isDate(propertyChangeValue, propertyTypeFullName)) {
            return moment__WEBPACK_IMPORTED_MODULE_3__(propertyChangeValue).format('YYYY-MM-DD HH:mm:ss');
        }
        if (propertyChangeValue === 'null') {
            return '';
        }
        return propertyChangeValue;
    };
    EntityChangeDetailModalComponent.prototype.isDate = function (date, propertyTypeFullName) {
        return propertyTypeFullName.includes("DateTime") && !isNaN(Date.parse(date).valueOf());
    };
    EntityChangeDetailModalComponent.prototype.show = function (record) {
        var self = this;
        self.active = true;
        self.entityChange = record;
        this._auditLogService.getEntityPropertyChanges(record.id).subscribe(function (result) {
            self.entityPropertyChanges = result;
        });
        self.modal.show();
    };
    EntityChangeDetailModalComponent.prototype.close = function () {
        this.active = false;
        this.modal.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('entityChangeDetailModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], EntityChangeDetailModalComponent.prototype, "modal", void 0);
    EntityChangeDetailModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'entityChangeDetailModal',
            template: __webpack_require__(/*! ./entity-change-detail-modal.component.html */ "./src/app/admin/audit-logs/entity-change-detail-modal.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["AuditLogServiceProxy"]])
    ], EntityChangeDetailModalComponent);
    return EntityChangeDetailModalComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/dashboard/host-dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/dashboard/host-dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div id=\"HostDashboard\">\n        <div class=\"m-subheader\">\n            <div class=\"d-flex align-items-center\">\n                <div class=\"mr-auto\">\n                    <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                        <span>{{l(\"Dashboard\")}}</span>\n                    </h3>\n                    <span class=\"m-section__sub\">\n                        {{l(\"HostDashboardHeaderInfo\")}}\n                    </span>\n                </div>\n                <div>\n                    <button name=\"RefreshButton\" class=\"btn btn-primary\" (click)=\"getDashboardStatisticsData()\"><i class=\"la la-refresh\"></i>{{l(\"Refresh\")}}</button>\n                    <span #DashboardDateRangePicker class=\"m-subheader__daterange dashboard-report-range\">\n                        <span class=\"m-subheader__daterange-label\">\n                            <span class=\"m-subheader__daterange-title\"></span>\n                            <span class=\"m-subheader__daterange-date m--font-brand\">\n                                {{selectedDateRange.startDate.format('LL')}} - {{selectedDateRange.endDate.format('LL')}}\n                            </span>\n                        </span>\n                        <a href=\"javascript:;\" class=\"btn btn-sm btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill\">\n                            <i class=\"la la-angle-down\" [attr.aria-label]=\"l('Expand')\"></i>\n                        </a>\n                    </span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"m-content\">\n            <div class=\"m-portlet\">\n                <div class=\"m-portlet__body  m-portlet__body--no-padding\">\n                    <div class=\"row m-row--no-padding m-row--col-separator-xl\">\n                        <div class=\"col-md-12 col-lg-6 col-xl-3\">\n                            <div class=\"m-widget24 new-subscription-statistics\">\n                                <div class=\"m-widget24__item\">\n                                    <h4 class=\"m-widget24__title\">\n                                        {{l(\"NewSubscriptionAmount\")}}\n                                    </h4>\n                                    <br>\n                                    <span class=\"m-widget24__desc\">\n                                        {{(\"Subscriptions\")}}\n                                    </span>\n                                    <span class=\"m-widget24__stats m--font-brand\">\n                                        $<span class=\"new-subscription-amount counterup\">\n                                            {{hostDashboardData != null ? hostDashboardData.newSubscriptionAmount : \"...\"}}\n                                        </span>\n                                    </span>\n                                    <div class=\"m--space-10\"></div>\n                                    <div class=\"progress m-progress--sm\">\n                                        <div class=\"progress-bar m--bg-brand\" role=\"progressbar\" style=\"width: 100%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                    </div>\n                                    <span class=\"m-widget24__change\">\n                                        <div class=\"status-title\">\n                                            {{selectedDateRange.startDate.format('L')}} - {{selectedDateRange.endDate.format('L')}}\n                                        </div>\n                                    </span>\n                                    <span class=\"m-widget24__number\">\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 col-lg-6 col-xl-3\">\n                            <div class=\"m-widget24 new-tenants-statistics\">\n                                <div class=\"m-widget24__item\">\n                                    <h4 class=\"m-widget24__title\">\n                                        {{l(\"NewTenants\")}}\n                                    </h4>\n                                    <br>\n                                    <span class=\"m-widget24__desc\">\n                                        {{l(\"Tenants\")}}\n                                    </span>\n                                    <span class=\"m-widget24__stats m--font-info new-tenants-count counterup\">\n                                        {{hostDashboardData != null ? hostDashboardData.newTenantsCount : \"...\"}}\n                                    </span>\n                                    <div class=\"m--space-10\"></div>\n                                    <div class=\"progress m-progress--sm\">\n                                        <div class=\"progress-bar m--bg-info\" role=\"progressbar\" style=\"width: 100%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                    </div>\n                                    <span class=\"m-widget24__change\">\n                                        <div class=\"status-title\">\n                                            {{selectedDateRange.startDate.format('L')}} - {{selectedDateRange.endDate.format('L')}}\n                                        </div>\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 col-lg-6 col-xl-3\">\n                            <div class=\"m-widget24 dashboard-statistics1\">\n                                <div class=\"m-widget24__item\">\n                                    <h4 class=\"m-widget24__title\">\n                                        {{l(\"DashboardSampleStatistics\")}} 1\n                                    </h4>\n                                    <br>\n                                    <span class=\"m-widget24__desc\">\n                                        {{l(\"DashboardSampleStatistics\")}}\n                                    </span>\n                                    <span class=\"m-widget24__stats m--font-danger dashboard-placeholder1 counterup\">\n                                        {{hostDashboardData != null ? hostDashboardData.dashboardPlaceholder1 : \"...\"}}\n                                    </span>\n                                    <div class=\"m--space-10\"></div>\n                                    <div class=\"progress m-progress--sm\">\n                                        <div class=\"progress-bar m--bg-danger\" role=\"progressbar\" style=\"width: 45%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                    </div>\n                                    <span class=\"m-widget24__change\">\n                                        {{l(\"DashboardSampleStatisticsHelpText\")}}\n                                    </span>\n                                    <span class=\"m-widget24__number\">\n                                        <span class=\"counterup\">45</span>%\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 col-lg-6 col-xl-3\">\n                            <div class=\"m-widget24 dashboard-statistics2\">\n                                <div class=\"m-widget24__item\">\n                                    <h4 class=\"m-widget24__title\">\n                                        {{l(\"DashboardSampleStatistics\")}} 2\n                                    </h4>\n                                    <br>\n                                    <span class=\"m-widget24__desc\">\n                                        {{l(\"DashboardSampleStatistics\")}}\n                                    </span>\n                                    <span class=\"m-widget24__stats m--font-success dashboard-placeholder2 counterup\">\n                                        {{hostDashboardData != null ? hostDashboardData.dashboardPlaceholder2 : \"...\"}}\n                                    </span>\n                                    <div class=\"m--space-10\"></div>\n                                    <div class=\"progress m-progress--sm\">\n                                        <div class=\"progress-bar m--bg-success\" role=\"progressbar\" style=\"width: 65%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                    </div>\n                                    <span class=\"m-widget24__change\">\n                                        {{l(\"DashboardSampleStatisticsHelpText\")}}\n                                    </span>\n                                    <span class=\"m-widget24__number\">\n                                        <span class=\"counterup\">65</span>%\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 col-sm-12\">\n                    <div class=\"m-portlet m-portlet--full-height income-statistics\">\n                        <div class=\"m-portlet__head\">\n                            <div class=\"m-portlet__head-caption\">\n                                <div class=\"m-portlet__head-title\">\n                                    <h3 class=\"m-portlet__head-text\">\n                                        <i class=\"la la-line-chart m--font-info\"></i>\n                                        <span class=\"caption-subject font-blue bold uppercase\">{{l(\"IncomeStatistics\")}}</span>\n                                        <small>\n                                            <span class=\"caption-helper\">\n                                                {{selectedDateRange.startDate.format('L')}} - {{selectedDateRange.endDate.format('L')}}\n                                            </span>\n                                        </small>\n                                    </h3>\n                                </div>\n                            </div>\n                            <div class=\"m-portlet__head-tools\">\n                                <div class=\"btn-group btn-group-devided\" data-toggle=\"buttons\">\n                                    <label class=\"btn m-btn--pill btn-secondary active\" (click)=\"incomeStatisticsDateIntervalChange(appIncomeStatisticsDateInterval.Daily)\">\n                                        <input type=\"radio\"\n                                               name=\"IncomeStatisticsDatePeriod\"\n                                               class=\"toggle\"\n                                               [value]=\"appIncomeStatisticsDateInterval.Daily\">\n                                        {{l(\"Daily\")}}\n                                    </label>\n                                    <label class=\"btn m-btn--pill btn-secondary\" (click)=\"incomeStatisticsDateIntervalChange(appIncomeStatisticsDateInterval.Weekly)\">\n                                        <input type=\"radio\"\n                                               name=\"IncomeStatisticsDatePeriod\"\n                                               class=\"toggle\"\n                                               [value]=\"appIncomeStatisticsDateInterval.Weekly\">\n                                        {{l(\"Weekly\")}}\n                                    </label>\n                                    <label class=\"btn m-btn--pill btn-secondary\" (click)=\"incomeStatisticsDateIntervalChange(appIncomeStatisticsDateInterval.Monthly)\">\n                                        <input type=\"radio\"\n                                               name=\"IncomeStatisticsDatePeriod\"\n                                               class=\"toggle\"\n                                               [value]=\"appIncomeStatisticsDateInterval.Monthly\">\n                                        {{l(\"Monthly\")}}\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"m-portlet__body\">\n                            <div #IncomeStatisticsChart\n                                 class=\"chart income-statistics-chart\"\n                                 [busyIf]=\"loadingIncomeStatistics\"\n                                 [hidden]=\"!incomeStatisticsHasData\">\n                            </div>\n                            <div class=\"note note-info text-center chart\"\n                                 [hidden]=\"incomeStatisticsHasData\">\n                                <small class=\"text-muted\">{{l(\"NoData\")}}</small>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-sm-12\">\n                    <div class=\"m-portlet m-portlet--full-height edition-statistics\">\n                        <div class=\"m-portlet__head\">\n                            <div class=\"m-portlet__head-caption\">\n                                <div class=\"m-portlet__head-title\">\n                                    <h3 class=\"m-portlet__head-text\">\n                                        <i class=\"la la-pie-chart m--font-success\"></i>\n                                        <span class=\"caption-subject font-green-seagreen\">{{l(\"EditionStatistics\")}}</span>\n                                        <small>\n                                            <span class=\"caption-helper\">\n                                                {{selectedDateRange.startDate.format('L')}} - {{selectedDateRange.endDate.format('L')}}\n                                            </span>\n                                        </small>\n                                    </h3>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"m-portlet__body\">\n                            <div #EditionStatisticsChart\n                                 class=\"edition-statistics-chart chart\"\n                                 [hidden]=\"!editionStatisticsHasData\">\n                            </div>\n                            <div class=\"note note-info text-center text-muted \"\n                                 [hidden]=\"editionStatisticsHasData\">\n                                <small class=\"text-muted\">{{l(\"NoData\")}}</small>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-xs-12 col-sm-12\">\n                    <div class=\"m-portlet m-portlet--full-height expiring-tenants\">\n                        <div class=\"m-portlet__head\">\n                            <div class=\"m-portlet__head-caption\">\n                                <div class=\"m-portlet__head-title\">\n                                    <h3 class=\"m-portlet__head-text\">\n                                        <i class=\"icon-graduation font-red-pink\"></i>\n                                        <span class=\"caption-subject font-red-pink bold uppercase\">{{l(\"SubscriptionExpiringTenants\")}}</span><br />\n                                        <small>\n                                            <span class=\"caption-helper\" *ngIf=\"hostDashboardData\">\n                                                {{l(\"ExpiringTenantsHelpText\", hostDashboardData.subscriptionEndAlertDayCount, hostDashboardData.maxExpiringTenantsShownCount)}}\n                                            </span>\n                                        </small>\n                                    </h3>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"m-portlet__body\">\n                            <div class=\"scroller chart m-scrollable\" data-always-visible=\"1\" data-rail-visible=\"0\" data-scrollable=\"true\">\n                                <div class=\"primeng-datatable-container expiring-tenants-table\" [busyIf]=\"primengTableHelper.isLoading\">\n                                    <p-table #ExpiringTenantsTable\n                                                 [value]=\"expiringTenantsData\"\n                                                 rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                                                 [paginator]=\"false\"\n                                                 [lazy]=\"false\"\n                                                 [responsive]=\"primengTableHelper.isResponsive\">\n                                        <ng-template pTemplate=\"header\">\n                                            <tr>\n                                                <th>{{l('TenantName')}}</th>\n                                                <th>{{l('RemainingDay')}}</th>\n                                            </tr>\n                                        </ng-template>\n                                        <ng-template pTemplate=\"body\" let-record=\"$implicit\">\n                                            <tr>\n                                                <td>{{record.tenantName}}</td>\n                                                <td>{{record.remainingDayCount}}</td>\n                                            </tr>\n                                        </ng-template>\n                                    </p-table>\n                                </div>\n                            </div>\n                            <div class=\"scroller-footer\">\n                                <div class=\"btn-arrow-link pull-right\">\n                                    <a href=\"javascript:;\" class=\"see-all-expiring-tenants\" (click)=\"gotoAllExpiringTenants()\">{{l(\"SeeAllRecords\")}}</a>\n                                    <i class=\"icon-arrow-right\"></i>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-xs-12 col-sm-12\">\n                    <div class=\"m-portlet m-portlet--full-height recent-tenants\">\n                        <div class=\"m-portlet__head\">\n                            <div class=\"m-portlet__head-caption\">\n                                <div class=\"m-portlet__head-title\">\n                                    <h3 class=\"m-portlet__head-text\">\n                                        <i class=\"icon-user-follow font-purple-soft\"></i>\n                                        <span class=\"caption-subject font-purple-soft\">{{l(\"RecentTenants\")}}</span><br />\n                                        <small>\n                                            <span class=\"caption-helper\" *ngIf=\"hostDashboardData\">\n                                                {{l(\"RecentTenantsHelpText\", hostDashboardData.recentTenantsDayCount, hostDashboardData.maxRecentTenantsShownCount)}}\n                                            </span>\n                                        </small>\n                                    </h3>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"m-portlet__body\">\n                            <div class=\"scroller chart m-scrollable\" data-always-visible=\"1\" data-rail-visible=\"0\" data-scrollable=\"true\">\n                                <div class=\"primeng-datatable-container recent-tenants-table\" [busyIf]=\"primengTableHelper.isLoading\">\n                                    <p-table #RecentTenantsTable\n                                                 [value]=\"recentTenantsData\"\n                                                 rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                                                 [paginator]=\"false\"\n                                                 [lazy]=\"false\"\n                                                 [responsive]=\"primengTableHelper.isResponsive\">\n                                        <ng-template pTemplate=\"header\">\n                                            <tr>\n                                                <th>{{l('TenantName')}}</th>\n                                                <th>{{l('CreationTime')}}</th>\n                                            </tr>\n                                        </ng-template>\n                                        <ng-template pTemplate=\"body\" let-record=\"$implicit\">\n                                            <tr>\n                                                <td>{{record.name}}</td>\n                                                <td>{{ record.creationTime | momentFormat:'L LT'}}</td>\n                                            </tr>\n                                        </ng-template>\n                                    </p-table>\n                                </div>\n                            </div>\n                            <div class=\"scroller-footer\">\n                                <div class=\"btn-arrow-link pull-right\">\n                                    <a href=\"javascript:;\" class=\"see-all-recent-tenants\" (click)=\"gotoAllRecentTenants()\">{{l(\"SeeAllRecords\")}}</a>\n                                    <i class=\"icon-arrow-right\"></i>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/dashboard/host-dashboard.component.less":
/*!***************************************************************!*\
  !*** ./src/app/admin/dashboard/host-dashboard.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#HostDashboard div.chart {\n  height: 260px;\n  width: 100%;\n}\n#HostDashboard div.chart h3 small {\n  padding-left: 0px !important;\n}\n#HostDashboard .expiring-tenants-table thead th {\n  background-color: #E08283 !important;\n  color: white;\n}\n#HostDashboard .recent-tenants-table thead th {\n  background-color: #8877a9 !important;\n  color: white;\n}\n#HostDashboard .expiring-tenants-table {\n  color: green;\n}\n#HostDashboard div.pie-chart-label {\n  border: 1px solid grey;\n  font-size: 8pt;\n  text-align: center;\n  padding: 5px;\n  color: white;\n}\n#HostDashboard div.portlet div.portlet-title div.caption div.caption-helper {\n  margin-top: 5px;\n}\n#HostDashboard div.portlet div.portlet-title div.actions {\n  padding: 0;\n}\n#HostDashboard div.portlet div.portlet-body {\n  min-height: 330px;\n}\n#HostDashboard div.flot-x-axis > div {\n  white-space: nowrap;\n  -webkit-transform: translate(0px, 0) rotate(-25deg);\n          transform: translate(0px, 0) rotate(-25deg);\n  text-indent: -6%;\n  -webkit-transform-origin: bottom;\n          transform-origin: bottom;\n}\n#HostDashboard input[type=\"radio\"] {\n  display: none;\n}\n#HostDashboard .portlet > .portlet-title > .caption > .caption-helper {\n  font-size: 11px;\n}\n"

/***/ }),

/***/ "./src/app/admin/dashboard/host-dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/dashboard/host-dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: HostDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostDashboardComponent", function() { return HostDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_common_timing_date_time_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/common/timing/date-time.service */ "./src/app/shared/common/timing/date-time.service.ts");
/* harmony import */ var _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/AppEnums */ "./src/shared/AppEnums.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/components/table/table */ "./node_modules/primeng/components/table/table.js");
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_components_table_table__WEBPACK_IMPORTED_MODULE_7__);
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








var HostDashboardComponent = /** @class */ (function (_super) {
    __extends(HostDashboardComponent, _super);
    function HostDashboardComponent(injector, _dateTimeService, _hostDashboardService) {
        var _this = _super.call(this, injector) || this;
        _this._dateTimeService = _dateTimeService;
        _this._hostDashboardService = _hostDashboardService;
        _this.loading = false;
        _this.loadingIncomeStatistics = false;
        _this.initialStartDate = moment__WEBPACK_IMPORTED_MODULE_6__().add(-7, 'days').startOf('day');
        _this.initialEndDate = moment__WEBPACK_IMPORTED_MODULE_6__().endOf('day');
        _this.currency = '$';
        _this.appIncomeStatisticsDateInterval = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["AppIncomeStatisticsDateInterval"];
        _this.selectedDateRange = {
            startDate: _this.initialStartDate,
            endDate: _this.initialEndDate
        };
        _this.expiringTenantsData = [];
        _this.recentTenantsData = [];
        return _this;
    }
    HostDashboardComponent.prototype.init = function () {
        this.selectedIncomeStatisticsDateInterval = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["AppIncomeStatisticsDateInterval"].Daily;
    };
    HostDashboardComponent.prototype.ngOnInit = function () {
        this.init();
    };
    HostDashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.createDateRangePicker();
            _this.getDashboardStatisticsData();
            _this.bindToolTipForIncomeStatisticsChart($(_this.incomeStatisticsChart.nativeElement));
            mApp.initScroller($('.m-scrollable'), {});
        }, 0);
    };
    HostDashboardComponent.prototype.createDateRangePicker = function () {
        var _this = this;
        $(this.dateRangePickerElement.nativeElement)
            .daterangepicker($.extend(true, this._dateTimeService.createDateRangePickerOptions(), this.selectedDateRange), function (start, end, label) {
            _this.selectedDateRange.startDate = start;
            _this.selectedDateRange.endDate = end;
            _this.getDashboardStatisticsData();
        });
    };
    HostDashboardComponent.prototype.getDashboardStatisticsData = function () {
        var _this = this;
        this.loading = true;
        this._hostDashboardService
            .getDashboardStatisticsData(this.selectedIncomeStatisticsDateInterval, this.selectedDateRange.startDate, this.selectedDateRange.endDate)
            .subscribe(function (result) {
            _this.hostDashboardData = result;
            _this.drawEditionStatisticsData(result.editionStatistics);
            _this.drawIncomeStatisticsChart(result.incomeStatistics);
            _this.loadRecentTenantsTable(result.recentTenants);
            _this.loadExpiringTenantsTable(result.expiringTenants);
            _this.loading = false;
        });
    };
    /*
    * Edition statistics pie chart
    */
    HostDashboardComponent.prototype.normalizeEditionStatisticsData = function (data) {
        var colorPalette = ['#81A17E', '#BA9B7C', '#569BC6', '#e08283', '#888888'];
        var chartData = new Array(data.length);
        var pie;
        for (var i = 0; i < data.length; i++) {
            pie = {
                label: data[i].label,
                data: data[i].value
            };
            if (colorPalette[i]) {
                pie.color = colorPalette[i];
            }
            chartData[i] = pie;
        }
        return chartData;
    };
    HostDashboardComponent.prototype.drawEditionStatisticsData = function (data) {
        var _this = this;
        this.editionStatisticsHasData = (data && data.length > 0);
        if (!this.editionStatisticsHasData) {
            return;
        }
        setTimeout(function () {
            var self = _this;
            var normalizedData = _this.normalizeEditionStatisticsData(data);
            $.plot($(self.editionStatisticsChart.nativeElement), normalizedData, {
                series: {
                    pie: {
                        show: true,
                        innerRadius: 0.3,
                        radius: 1,
                        label: {
                            show: true,
                            radius: 1,
                            formatter: function (label, series) {
                                return '<div class=\'pie-chart-label\'>' + label + ' : ' + Math.round(series.percent) + '%</div>';
                            },
                            background: {
                                opacity: 0.8
                            }
                        }
                    }
                },
                legend: {
                    show: false
                },
                grid: {
                    hoverable: true,
                    clickable: true
                }
            });
        }, 0);
    };
    /*
     * Income statistics line chart
     */
    HostDashboardComponent.prototype.normalizeIncomeStatisticsData = function (data) {
        var chartData = [];
        for (var i = 0; i < data.length; i++) {
            var point = new Array(2);
            point[0] = moment__WEBPACK_IMPORTED_MODULE_6__(data[i].date).utc().valueOf();
            point[1] = data[i].amount;
            chartData.push(point);
        }
        return chartData;
    };
    HostDashboardComponent.prototype.drawIncomeStatisticsChart = function (data) {
        var _this = this;
        this.incomeStatisticsHasData = (data && data.length > 0);
        if (!this.incomeStatisticsHasData) {
            return;
        }
        var self = this;
        var normalizedData = this.normalizeIncomeStatisticsData(data);
        setTimeout(function () {
            $.plot($(self.incomeStatisticsChart.nativeElement), [{
                    data: normalizedData,
                    lines: {
                        fill: 0.2,
                        lineWidth: 1
                    },
                    color: ['#BAD9F5']
                }, {
                    data: normalizedData,
                    points: {
                        show: true,
                        fill: true,
                        radius: 4,
                        fillColor: '#9ACAE6',
                        lineWidth: 2
                    },
                    color: '#9ACAE6',
                    shadowSize: 1
                }, {
                    data: normalizedData,
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    color: '#9ACAE6',
                    shadowSize: 0
                }], {
                xaxis: {
                    mode: 'time',
                    timeformat: _this.l('ChartDateFormat'),
                    minTickSize: [1, 'day'],
                    font: {
                        lineHeight: 20,
                        style: 'normal',
                        variant: 'small-caps',
                        color: '#6F7B8A',
                        size: 10
                    }
                },
                yaxis: {
                    ticks: 5,
                    tickDecimals: 0,
                    tickColor: '#eee',
                    font: {
                        lineHeight: 14,
                        style: 'normal',
                        variant: 'small-caps',
                        color: '#6F7B8A'
                    }
                },
                grid: {
                    hoverable: true,
                    clickable: false,
                    tickColor: '#eee',
                    borderColor: '#eee',
                    borderWidth: 1,
                    margin: {
                        bottom: 20
                    }
                }
            });
        }, 0);
    };
    HostDashboardComponent.prototype.incomeStatisticsDateIntervalChange = function (interval) {
        this.selectedIncomeStatisticsDateInterval = interval;
        this.refreshIncomeStatisticsData();
    };
    HostDashboardComponent.prototype.refreshIncomeStatisticsData = function () {
        var _this = this;
        this.loadingIncomeStatistics = true;
        this._hostDashboardService.getIncomeStatistics(this.selectedIncomeStatisticsDateInterval, this.selectedDateRange.startDate, this.selectedDateRange.endDate)
            .subscribe(function (result) {
            _this.drawIncomeStatisticsChart(result.incomeStatistics);
            _this.loadingIncomeStatistics = false;
        });
    };
    HostDashboardComponent.prototype.bindToolTipForIncomeStatisticsChart = function (incomeStatisticsChartContainer) {
        var _this = this;
        var incomeStatisticsChartLastTooltipIndex = null;
        var removeChartTooltipIfExists = function () {
            var $chartTooltip = $('#chartTooltip');
            if ($chartTooltip.length === 0) {
                return;
            }
            $chartTooltip.remove();
        };
        var showChartTooltip = function (x, y, label, value) {
            removeChartTooltipIfExists();
            $('<div id=\'chartTooltip\' class=\'chart-tooltip\'>' + label + '<br/>' + value + '</div >')
                .css({
                position: 'absolute',
                display: 'none',
                top: y - 60,
                left: x - 40,
                border: '0',
                padding: '2px 6px',
                opacity: '0.9'
            })
                .appendTo('body')
                .fadeIn(200);
        };
        incomeStatisticsChartContainer.bind('plothover', function (event, pos, item) {
            if (!item) {
                return;
            }
            if (incomeStatisticsChartLastTooltipIndex !== item.dataIndex) {
                var label = '';
                var isSingleDaySelected = _this.selectedDateRange.startDate.format('L') === _this.selectedDateRange.endDate.format('L');
                if (_this.selectedIncomeStatisticsDateInterval === _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["AppIncomeStatisticsDateInterval"].Daily ||
                    isSingleDaySelected) {
                    label = moment__WEBPACK_IMPORTED_MODULE_6__(item.datapoint[0]).format('dddd, DD MMMM YYYY');
                }
                else {
                    var isLastItem = item.dataIndex === item.series.data.length - 1;
                    label += moment__WEBPACK_IMPORTED_MODULE_6__(item.datapoint[0]).format('LL');
                    if (isLastItem) {
                        label += ' - ' + _this.selectedDateRange.endDate.format('LL');
                    }
                    else {
                        var nextItem = item.series.data[item.dataIndex + 1];
                        label += ' - ' + moment__WEBPACK_IMPORTED_MODULE_6__(nextItem[0]).format('LL');
                    }
                }
                incomeStatisticsChartLastTooltipIndex = item.dataIndex;
                var value = _this.l('IncomeWithAmount', '<strong>' + item.datapoint[1] + _this.currency + '</strong>');
                showChartTooltip(item.pageX, item.pageY, label, value);
            }
        });
        incomeStatisticsChartContainer.bind('mouseleave', function () {
            incomeStatisticsChartLastTooltipIndex = null;
            removeChartTooltipIfExists();
        });
    };
    /*
     * Recent tenants
     */
    HostDashboardComponent.prototype.loadRecentTenantsTable = function (recentTenants) {
        this.recentTenantsData = recentTenants;
    };
    HostDashboardComponent.prototype.gotoAllRecentTenants = function () {
        window.open(abp.appPath + 'app/admin/tenants?' +
            'creationDateStart=' + encodeURIComponent(this.hostDashboardData.tenantCreationStartDate.format()));
    };
    /*
     * Expiring tenants
     */
    HostDashboardComponent.prototype.loadExpiringTenantsTable = function (expiringTenants) {
        this.expiringTenantsData = expiringTenants;
    };
    HostDashboardComponent.prototype.gotoAllExpiringTenants = function () {
        var url = abp.appPath +
            'app/admin/tenants?' +
            'subscriptionEndDateStart=' +
            encodeURIComponent(this.hostDashboardData.subscriptionEndDateStart.format()) +
            '&' +
            'subscriptionEndDateEnd=' +
            encodeURIComponent(this.hostDashboardData.subscriptionEndDateEnd.format());
        window.open(url);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('DashboardDateRangePicker'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HostDashboardComponent.prototype, "dateRangePickerElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('EditionStatisticsChart'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HostDashboardComponent.prototype, "editionStatisticsChart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('IncomeStatisticsChart'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HostDashboardComponent.prototype, "incomeStatisticsChart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('RecentTenantsTable'),
        __metadata("design:type", primeng_components_table_table__WEBPACK_IMPORTED_MODULE_7__["Table"])
    ], HostDashboardComponent.prototype, "recentTenantsTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ExpiringTenantsTable'),
        __metadata("design:type", primeng_components_table_table__WEBPACK_IMPORTED_MODULE_7__["Table"])
    ], HostDashboardComponent.prototype, "expiringTenantsTable", void 0);
    HostDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./host-dashboard.component.html */ "./src/app/admin/dashboard/host-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./host-dashboard.component.less */ "./src/app/admin/dashboard/host-dashboard.component.less")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _app_shared_common_timing_date_time_service__WEBPACK_IMPORTED_MODULE_1__["DateTimeService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["HostDashboardServiceProxy"]])
    ], HostDashboardComponent);
    return HostDashboardComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/demo-ui-components/demo-ui-components.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/demo-ui-components/demo-ui-components.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-subheader \">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto\">\n                <h3 class=\"m-subheader__title\">\n                    <span>{{l(\"DemoUiComponents\")}}</span>\n                </h3>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"m-content\">\n        <div class=\"col-lg-12 alert alert-success\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\"></button>\n            {{l(\"DemoUiComponents_Info\")}}<br />\n            <a href=\"http://keenthemes.com/metronic/preview/?demo=default\" class=\"alert-link\" target=\"_blank\">{{l(\"DemoUiComponents_Info_Metronic_Link_Text\")}}</a>\n        </div>   \n    \n        <demo-ui-date-time #demoUiDateTime></demo-ui-date-time>\n\n        <demo-ui-file-upload #demoUiFileUpload></demo-ui-file-upload>\n\n        <demo-ui-selection #demoUiSelection></demo-ui-selection>\n\n        <demo-ui-input-mask #demoUiInputMask></demo-ui-input-mask>\n\n        <demo-ui-editor #demoUiEditor></demo-ui-editor>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/demo-ui-components/demo-ui-components.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/demo-ui-components/demo-ui-components.component.ts ***!
  \**************************************************************************/
/*! exports provided: DemoUiComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoUiComponentsComponent", function() { return DemoUiComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
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



var DemoUiComponentsComponent = /** @class */ (function (_super) {
    __extends(DemoUiComponentsComponent, _super);
    function DemoUiComponentsComponent(injector) {
        return _super.call(this, injector) || this;
    }
    DemoUiComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./demo-ui-components.component.html */ "./src/app/admin/demo-ui-components/demo-ui-components.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], DemoUiComponentsComponent);
    return DemoUiComponentsComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/demo-ui-components/demo-ui-date-time.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/demo-ui-components/demo-ui-date-time.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-portlet m-portlet--mobile\">\n    <div class=\"m-portlet__head\">\n        <div class=\"m-portlet__head-caption\">\n            <div class=\"m-portlet__head-title\">\n                <h3 class=\"m-portlet__head-text\">\n                    {{l(\"DateAndTimePickers\")}}\n                </h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"m-portlet__body\">\n        <form role=\"form\">\n\n            <div class=\"form-group m-form__group row\">\n                <label for=\"SampleDatePicker\" class=\"col-md-12\">Default date picker</label>\n                <div class=\"col-lg-10 col-md-9 col-sm-8\">\n                    <input id=\"SampleDatePicker\" type=\"datetime\" #SampleDatePicker name=\"SampleDatePicker\" class=\"form-control\">\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-4\">\n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"submitDate()\">{{l(\"Submit\")}}</button>\n                </div>\n            </div>\n\n            <div class=\"form-group m-form__group row\">\n                <label for=\"SampleDateTimePicker\" class=\"col-md-12\">Default datetime picker</label>\n                <div class=\"col-lg-10 col-md-9 col-sm-8\">\n                    <input id=\"SampleDateTimePicker\" type=\"datetime\" #SampleDateTimePicker name=\"SampleDateTimePicker\" class=\"form-control\">\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-4\">\n                    <button class=\"btn btn-primary\" (click)=\"submitDateTime()\" type=\"button\">{{l(\"Submit\")}}</button>\n                </div>\n            </div>\n\n            <div class=\"form-group m-form__group row\">\n                <label for=\"SampleDateRangePicker\" class=\"col-md-12\">Default daterange picker</label>\n                <div class=\"col-lg-10 col-md-9 col-sm-8\">\n                    <date-range-picker name=\"SampleDateRangePicker\"\n                                       [(startDate)]=\"dateRangePickerStartDate\"\n                                       [(endDate)]=\"dateRangePickerEndDate\"\n                                       [allowFutureDate]=\"true\"\n                                       id=\"SampleDateRangePicker\">\n                    </date-range-picker>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-4\">\n                    <button class=\"btn btn-primary\" (click)=\"submitDateRange()\" type=\"button\">{{l(\"Submit\")}}</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/demo-ui-components/demo-ui-date-time.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/demo-ui-components/demo-ui-date-time.component.ts ***!
  \*************************************************************************/
/*! exports provided: DemoUiDateTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoUiDateTimeComponent", function() { return DemoUiDateTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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





var DemoUiDateTimeComponent = /** @class */ (function (_super) {
    __extends(DemoUiDateTimeComponent, _super);
    function DemoUiDateTimeComponent(injector, demoUiComponentsService) {
        var _this = _super.call(this, injector) || this;
        _this.demoUiComponentsService = demoUiComponentsService;
        _this.dateRangePickerStartDate = moment__WEBPACK_IMPORTED_MODULE_4__().add(-7, 'days').endOf('day');
        _this.dateRangePickerEndDate = moment__WEBPACK_IMPORTED_MODULE_4__().startOf('day');
        return _this;
    }
    DemoUiDateTimeComponent.prototype.ngAfterViewInit = function () {
        // default date picker
        $(this.sampleDatePicker.nativeElement).datetimepicker({
            locale: abp.localization.currentLanguage.name,
            format: 'L'
        });
        // default date time picker
        $(this.sampleDateTimePicker.nativeElement).datetimepicker({
            locale: abp.localization.currentLanguage.name,
            format: 'L LT'
        });
    };
    // default date picker - post
    DemoUiDateTimeComponent.prototype.submitDate = function () {
        var _this = this;
        var dateInput = moment__WEBPACK_IMPORTED_MODULE_4__($(this.sampleDatePicker.nativeElement).data('DateTimePicker').date().format('YYYY-MM-DDTHH:mm:ssZ'));
        this.demoUiComponentsService.sendAndGetDate(dateInput)
            .subscribe(function (data) {
            _this.message.info(data.dateString, _this.l('PostedValue'));
            _this.notify.info(_this.l('SavedSuccessfully'));
        });
    };
    // default date time picker - post
    DemoUiDateTimeComponent.prototype.submitDateTime = function () {
        var _this = this;
        var dateInput = moment__WEBPACK_IMPORTED_MODULE_4__($(this.sampleDateTimePicker.nativeElement).data('DateTimePicker').date().format('YYYY-MM-DDTHH:mm:ssZ'));
        this.demoUiComponentsService.sendAndGetDateTime(dateInput)
            .subscribe(function (data) {
            _this.message.info(data.dateString, _this.l('PostedValue'));
            _this.notify.info(_this.l('SavedSuccessfully'));
        });
    };
    // default date range picker - post
    DemoUiDateTimeComponent.prototype.submitDateRange = function () {
        var _this = this;
        this.demoUiComponentsService.sendAndGetDateRange(this.dateRangePickerStartDate, this.dateRangePickerEndDate)
            .subscribe(function (data) {
            _this.message.info(data.dateString, _this.l('PostedValue'));
            _this.notify.info(_this.l('SavedSuccessfully'));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('SampleDatePicker'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DemoUiDateTimeComponent.prototype, "sampleDatePicker", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('SampleDateTimePicker'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DemoUiDateTimeComponent.prototype, "sampleDateTimePicker", void 0);
    DemoUiDateTimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'demo-ui-date-time',
            template: __webpack_require__(/*! ./demo-ui-date-time.component.html */ "./src/app/admin/demo-ui-components/demo-ui-date-time.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["DemoUiComponentsServiceProxy"]])
    ], DemoUiDateTimeComponent);
    return DemoUiDateTimeComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/demo-ui-components/demo-ui-editor.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/demo-ui-components/demo-ui-editor.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-portlet m-portlet--mobile\">\n    <div class=\"m-portlet__head\">\n        <div class=\"m-portlet__head-caption\">\n            <div class=\"m-portlet__head-title\">\n                <h3 class=\"m-portlet__head-text\">\n                    Editor\n                </h3>\n            </div>\n        </div>\n    </div>\n    <form class=\"m-form m-form--fit m-form--label-align-right\">\n        <div class=\"m-portlet__body\">\n            <div class=\"form-group m-form__group\">\n                <p-editor [(ngModel)]=\"htmlEditorInput\" name=\"HtmlEditorInput\" [style]=\"{'height':'300px'}\"></p-editor>\n            </div>\n        </div>\n        <div class=\"m-portlet__foot m-portlet__foot--fit\">\n            <div class=\"m-form__actions\">\n                <button class=\"btn btn-primary\" (click)=\"submitValue()\" type=\"button\">{{l(\"Submit\")}}</button>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/demo-ui-components/demo-ui-editor.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/demo-ui-components/demo-ui-editor.component.ts ***!
  \**********************************************************************/
/*! exports provided: DemoUiEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoUiEditorComponent", function() { return DemoUiEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
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




var DemoUiEditorComponent = /** @class */ (function (_super) {
    __extends(DemoUiEditorComponent, _super);
    function DemoUiEditorComponent(injector, demoUiComponentsService) {
        var _this = _super.call(this, injector) || this;
        _this.demoUiComponentsService = demoUiComponentsService;
        return _this;
    }
    // input mask - post
    DemoUiEditorComponent.prototype.submitValue = function () {
        var _this = this;
        this.demoUiComponentsService.sendAndGetValue(this.htmlEditorInput)
            .subscribe(function (data) {
            abp.libs.sweetAlert.config.info.html = true;
            _this.message.info(data.output, _this.l('PostedValue'));
            _this.notify.info(_this.l('SavedSuccessfully'));
        });
    };
    DemoUiEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'demo-ui-editor',
            template: __webpack_require__(/*! ./demo-ui-editor.component.html */ "./src/app/admin/demo-ui-components/demo-ui-editor.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["DemoUiComponentsServiceProxy"]])
    ], DemoUiEditorComponent);
    return DemoUiEditorComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/demo-ui-components/demo-ui-file-upload.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/demo-ui-components/demo-ui-file-upload.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-portlet m-portlet--mobile\">\n    <div class=\"m-portlet__head\">\n        <div class=\"m-portlet__head-caption\">\n            <div class=\"m-portlet__head-title\">\n                <h3 class=\"m-portlet__head-text\">\n                    {{l(\"FileUpload\")}}\n                </h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"m-portlet__body\">\n        <form role=\"form\">\n            <div class=\"form-group m-form__group\">\n                <label for=\"DefaultFileUploadFileInput\" class=\"control-label\">Default file uploader</label>\n                <p-fileUpload multiple=\"multiple\"\n                              id=\"DefaultFileUploadFileInput\"\n                              name=\"DefaultFileUploadFileInput[]\"\n                              [url]=\"uploadUrl\"\n                              accept=\"image/*\"\n                              maxFileSize=\"1000000\"\n                              (onUpload)=\"onUpload($event)\"\n                              (onBeforeSend)=\"onBeforeSend($event)\">\n\n                    <ng-template pTemplate=\"content\">\n                        <ul *ngIf=\"uploadedFiles.length\">\n                            <li *ngFor=\"let file of uploadedFiles\">{{file.name}} - {{file.size}} bytes</li>\n                        </ul>\n                    </ng-template>\n                </p-fileUpload>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/demo-ui-components/demo-ui-file-upload.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/demo-ui-components/demo-ui-file-upload.component.ts ***!
  \***************************************************************************/
/*! exports provided: DemoUiFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoUiFileUploadComponent", function() { return DemoUiFileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
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





var DemoUiFileUploadComponent = /** @class */ (function (_super) {
    __extends(DemoUiFileUploadComponent, _super);
    function DemoUiFileUploadComponent(injector, demoUiComponentsService) {
        var _this = _super.call(this, injector) || this;
        _this.demoUiComponentsService = demoUiComponentsService;
        _this.uploadedFiles = [];
        _this.uploadUrl = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__["AppConsts"].remoteServiceBaseUrl + '/DemoUiComponents/UploadFiles';
        return _this;
    }
    // upload completed event
    DemoUiFileUploadComponent.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
    };
    DemoUiFileUploadComponent.prototype.onBeforeSend = function (event) {
        event.xhr.setRequestHeader('Authorization', 'Bearer ' + abp.auth.getToken());
    };
    DemoUiFileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'demo-ui-file-upload',
            template: __webpack_require__(/*! ./demo-ui-file-upload.component.html */ "./src/app/admin/demo-ui-components/demo-ui-file-upload.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["DemoUiComponentsServiceProxy"]])
    ], DemoUiFileUploadComponent);
    return DemoUiFileUploadComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/demo-ui-components/demo-ui-input-mask.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/demo-ui-components/demo-ui-input-mask.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-portlet m-portlet--mobile\">\n    <div class=\"m-portlet__head\">\n        <div class=\"m-portlet__head-caption\">\n            <div class=\"m-portlet__head-title\">\n                <h3 class=\"m-portlet__head-text\">\n                    Input Mask\n                </h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"m-portlet__body\">\n        <form role=\"form\">\n\n            <div class=\"form-group m-form__group row\">\n                <label for=\"DateInputMask\" class=\"col-lg-12\">Date</label>\n                <div class=\"col-lg-10 col-md-9 col-sm-8\">\n                    <p-inputMask id=\"DateInputMask\" [(ngModel)]=\"dateValue\" name=\"dateValue\" mask=\"99/99/9999\" placeholder=\"mm/dd/yyyy\" slotChar=\"mm/dd/yyyy\" styleClass=\"form-control\"></p-inputMask>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-4\">\n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"submitDateValue()\">{{l(\"Submit\")}}</button>\n                </div>\n            </div>\n\n            <div class=\"form-group m-form__group row\">\n                <label for=\"PhoneInputMask\" class=\"col-lg-12\">Phone</label>\n                <div class=\"col-lg-10 col-md-9 col-sm-8\">\n                    <p-inputMask id=\"PhoneInputMask\" [(ngModel)]=\"phoneValue\" name=\"phoneValue\" mask=\"(999) 999-9999\" placeholder=\"(999) 999-9999\" styleClass=\"form-control\"></p-inputMask>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-4\">\n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"submiPhoneValue()\">{{l(\"Submit\")}}</button>\n                </div>\n            </div>\n\n            <div class=\"form-group m-form__group row\">\n                <label for=\"PhoneExtInputMask\" class=\"col-lg-12\">Phone Ext</label>\n                <div class=\"col-lg-10 col-md-9 col-sm-8\">\n                    <p-inputMask id=\"PhoneExtInputMask\" mask=\"(999) 999-9999? x99999\" name=\"phoneExtValue\" [(ngModel)]=\"phoneExtValue\" placeholder=\"(999) 999-9999? x99999\" styleClass=\"form-control\"></p-inputMask>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-4\">\n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"submitPhoneExtValue()\">{{l(\"Submit\")}}</button>\n                </div>\n            </div>\n\n            <div class=\"form-group m-form__group row\">\n                <label for=\"SerialInputMask\" class=\"col-lg-12\">Serial</label>\n                <div class=\"col-lg-10 col-md-9 col-sm-8\">\n                    <p-inputMask id=\"SerialInputMask\" [(ngModel)]=\"serialValue\" name=\"serialValue\" mask=\"a*-999-a999\" placeholder=\"a*-999-a999\" styleClass=\"form-control\"></p-inputMask>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-4\">\n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"submitSerialValue()\">{{l(\"Submit\")}}</button>\n                </div>\n            </div>\n\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/demo-ui-components/demo-ui-input-mask.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/demo-ui-components/demo-ui-input-mask.component.ts ***!
  \**************************************************************************/
/*! exports provided: DemoUiInputMaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoUiInputMaskComponent", function() { return DemoUiInputMaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
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




var DemoUiInputMaskComponent = /** @class */ (function (_super) {
    __extends(DemoUiInputMaskComponent, _super);
    function DemoUiInputMaskComponent(injector, demoUiComponentsService) {
        var _this = _super.call(this, injector) || this;
        _this.demoUiComponentsService = demoUiComponentsService;
        _this.dateValue = '';
        _this.phoneValue = '';
        _this.serialValue = '';
        _this.phoneExtValue = '';
        return _this;
    }
    DemoUiInputMaskComponent.prototype.submitDateValue = function () {
        this.submitValue(this.dateValue);
    };
    DemoUiInputMaskComponent.prototype.submiPhoneValue = function () {
        this.submitValue(this.phoneValue);
    };
    DemoUiInputMaskComponent.prototype.submitSerialValue = function () {
        this.submitValue(this.serialValue);
    };
    DemoUiInputMaskComponent.prototype.submitPhoneExtValue = function () {
        this.submitValue(this.phoneExtValue);
    };
    // input mask - post
    DemoUiInputMaskComponent.prototype.submitValue = function (value) {
        var _this = this;
        this.demoUiComponentsService.sendAndGetValue(value)
            .subscribe(function (data) {
            _this.message.info(data.output, _this.l('PostedValue'));
            _this.notify.info(_this.l('SavedSuccessfully'));
        });
    };
    DemoUiInputMaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'demo-ui-input-mask',
            template: __webpack_require__(/*! ./demo-ui-input-mask.component.html */ "./src/app/admin/demo-ui-components/demo-ui-input-mask.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["DemoUiComponentsServiceProxy"]])
    ], DemoUiInputMaskComponent);
    return DemoUiInputMaskComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/demo-ui-components/demo-ui-selection.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/demo-ui-components/demo-ui-selection.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-portlet m-portlet--mobile\">\n    <div class=\"m-portlet__head\">\n        <div class=\"m-portlet__head-caption\">\n            <div class=\"m-portlet__head-title\">\n                <h3 class=\"m-portlet__head-text\">\n                    Prime NG Autocomplete\n                </h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"m-portlet__body\">\n        <form role=\"form\">\n            <div class=\"form-group m-form__group row\">\n                <label for=\"SingleSelectInput\" class=\"col-lg-12\">Single select</label>\n                <div class=\"col-lg-10 col-md-9 col-sm-8\">\n                    <p-autoComplete [(ngModel)]=\"country\"\n                                    id=\"SingleSelectInput\"\n                                    [suggestions]=\"filteredCountries\"\n                                    (completeMethod)=\"filterCountries($event)\"\n                                    field=\"name\"\n                                    placeholder=\"Country\"\n                                    [minLength]=\"1\"\n                                    name=\"SingleSelectInput\"\n                                    inputStyleClass=\"form-control\"\n                                    styleClass=\"width-percent-100\">\n                    </p-autoComplete>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-4\">\n                    <button class=\"btn btn-primary\" (click)=\"submitSelectedCountry()\" type=\"button\">{{l(\"Submit\")}}</button>\n                </div>\n            </div>\n            <div class=\"form-group m-form__group row\">\n                <label for=\"MultiSelectInput\" class=\"col-lg-12\">Multi select</label>\n                <div class=\"col-lg-10 col-md-9 col-sm-8\">\n                    <p-autoComplete [(ngModel)]=\"countries\"\n                                    [suggestions]=\"filteredCountries\"\n                                    (completeMethod)=\"filterCountries($event)\"\n                                    field=\"name\"\n                                    placeholder=\"Countries\"\n                                    [minLength]=\"1\"\n                                    name=\"MultiSelectInput\"\n                                    id=\"MultiSelectInput\"\n                                    [multiple]=\"true\"\n                                    inputStyleClass=\"form-control\"\n                                    styleClass=\"width-percent-100\">\n                    </p-autoComplete>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-4\">\n                    <button class=\"btn btn-primary\" (click)=\"submitSelectedCountries()\" type=\"button\">{{l(\"Submit\")}}</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/demo-ui-components/demo-ui-selection.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/demo-ui-components/demo-ui-selection.component.ts ***!
  \*************************************************************************/
/*! exports provided: DemoUiSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoUiSelectionComponent", function() { return DemoUiSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
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




var DemoUiSelectionComponent = /** @class */ (function (_super) {
    __extends(DemoUiSelectionComponent, _super);
    function DemoUiSelectionComponent(injector, demoUiComponentsService) {
        var _this = _super.call(this, injector) || this;
        _this.demoUiComponentsService = demoUiComponentsService;
        _this.countries = new Array();
        return _this;
    }
    // get countries
    DemoUiSelectionComponent.prototype.filterCountries = function (event) {
        var _this = this;
        this.demoUiComponentsService.getCountries(event.query).subscribe(function (countries) {
            _this.filteredCountries = countries;
        });
    };
    // single select - post
    DemoUiSelectionComponent.prototype.submitSelectedCountry = function () {
        var _this = this;
        var selectedCountries = new Array();
        selectedCountries.push(this.country);
        this.demoUiComponentsService.sendAndGetSelectedCountries(selectedCountries)
            .subscribe(function (countries) {
            var message = '';
            $.each(countries, function (index, item) {
                message += "<div><strong>id</strong>: " + item.value + " - <strong>name</strong>: " + item.name + "</div>";
            });
            var $div = document.createElement('div');
            $div.innerHTML = message;
            abp.libs.sweetAlert.config.info.content = $div;
            _this.message.info('', _this.l('PostedValue'));
            _this.notify.info(_this.l('SavedSuccessfully'));
            abp.libs.sweetAlert.config.info.content = '';
        });
    };
    // multi select - post
    DemoUiSelectionComponent.prototype.submitSelectedCountries = function () {
        var _this = this;
        this.demoUiComponentsService.sendAndGetSelectedCountries(this.countries)
            .subscribe(function (countries) {
            var message = '';
            $.each(countries, function (index, item) {
                message += "<div><strong>id</strong>: " + item.value + " - <strong>name</strong>: " + item.name + "</div>";
            });
            var $div = document.createElement('div');
            $div.innerHTML = message;
            abp.libs.sweetAlert.config.info.content = $div;
            _this.message.info('', _this.l('PostedValue'));
            _this.notify.info(_this.l('SavedSuccessfully'));
            abp.libs.sweetAlert.config.info.content = '';
        });
    };
    DemoUiSelectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'demo-ui-selection',
            template: __webpack_require__(/*! ./demo-ui-selection.component.html */ "./src/app/admin/demo-ui-components/demo-ui-selection.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["DemoUiComponentsServiceProxy"]])
    ], DemoUiSelectionComponent);
    return DemoUiSelectionComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/editions/create-or-edit-edition-modal.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/editions/create-or-edit-edition-modal.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #createOrEditModal=\"bs-modal\" (onShown)=\"onShown()\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"createOrEditModal\"\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <form *ngIf=\"active\" #roleForm=\"ngForm\" novalidate (ngSubmit)=\"save()\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">\n                        <span *ngIf=\"edition.id\">{{l(\"EditEdition\")}}: {{edition.displayName}}</span>\n                        <span *ngIf=\"!edition.id\">{{l(\"CreateNewEdition\")}}</span>\n                    </h5>\n                    <button type=\"button\" class=\"close\" (click)=\"close()\" [attr.aria-label]=\"l('Close')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <tabset class=\"tab-container tabbable-line\">\n                        <tab heading=\"{{l('EditionProperties')}}\" customClass=\"m-tabs__item\">\n                            <div class=\"form-group\">\n                                <label for=\"EditionDisplayName\">{{l(\"EditionName\")}} *</label>\n                                <input id=\"EditionDisplayName\" #editionNameInput=\"ngModel\" class=\"form-control\" type=\"text\" name=\"EditionDisplayName\" [ngClass]=\"{'edited':edition.displayName}\" [(ngModel)]=\"edition.displayName\" required maxlength=\"64\">\n                                <validation-messages [formCtrl]=\"editionNameInput\"></validation-messages>\n                            </div>\n\n                            <label>{{l(\"SubscriptionPrice\")}}</label>\n                            <div class=\"m-radio-inline\">\n                                <label for=\"EditEdition_IsFree\" class=\"m-radio\">\n                                    <input id=\"EditEdition_IsFree\" name=\"SubscriptionPrice\" [(ngModel)]=\"isFree\" (ngModelChange)=\"resetPrices($event)\" [value]=\"true\" type=\"radio\">\n                                    {{l(\"Free\")}}\n                                    <span></span>\n                                </label>\n                                <label for=\"EditEdition_IsPaid\" class=\"m-radio\">\n                                    <input id=\"EditEdition_IsPaid\" name=\"SubscriptionPrice\" [(ngModel)]=\"isFree\" [value]=\"false\" type=\"radio\">\n                                    {{l(\"Paid\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                            <div class=\"row\" *ngIf=\"!isFree\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"MonthlyPrice\">{{l(\"MonthlyPrice\")}}</label>\n                                        <input #monthlyPriceInput=\"ngModel\"\n                                               type=\"text\"\n                                               name=\"MonthlyPrice\"\n                                               id=\"MonthlyPrice\"\n                                               currencyInput\n                                               class=\"form-control\"\n                                               autocomplete=\"off\"\n                                               [ngClass]=\"{'edited':edition.monthlyPrice}\"\n                                               [required]=\"!isFree\"\n                                               [(ngModel)]=\"edition.monthlyPrice\" />\n                                        <validation-messages [formCtrl]=\"monthlyPriceInput\"></validation-messages>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"AnnualPrice\">{{l(\"AnnualPrice\")}}</label>\n                                        <input #annualPriceInput=\"ngModel\"\n                                               type=\"text\"\n                                               name=\"AnnualPrice\"\n                                               id=\"AnnualPrice\"\n                                               currencyInput\n                                               class=\"form-control\"\n                                               autocomplete=\"off\"\n                                               [ngClass]=\"{'edited':edition.annualPrice}\"\n                                               [required]=\"!isFree\"\n                                               [(ngModel)]=\"edition.annualPrice\" />\n                                        <validation-messages [formCtrl]=\"annualPriceInput\"></validation-messages>\n                                    </div>\n                                </div>\n                            </div>\n                            <div [hidden]=\"isFree\" class=\"paid-features\">\n                                <div class=\"m-checkbox-list\">\n                                    <label for=\"EditEdition_IsTrialActive\" class=\"m-checkbox\">\n                                        <input id=\"EditEdition_IsTrialActive\" type=\"checkbox\" name=\"isTrialActive\" [(ngModel)]=\"isTrialActive\" />\n                                        {{l(\"IsTrialActive\")}}\n                                        <span></span>\n                                    </label>\n                                </div>\n                                <div class=\"form-group trial-day-count\" *ngIf=\"isTrialActive\">\n                                    <label for=\"TrialDayCount\">{{l(\"TrialDayCount\")}}</label>\n                                    <input #trialDayCountInput=\"ngModel\"\n                                           class=\"form-control\"\n                                           type=\"number\"\n                                           name=\"TrialDayCount\"\n                                           id=\"TrialDayCount\"\n                                           [required]=\"isTrialActive\"\n                                           [(ngModel)]=\"edition.trialDayCount\"\n                                           [ngClass]=\"{'edited':edition.trialDayCount}\">\n                                    <validation-messages [formCtrl]=\"trialDayCountInput\"></validation-messages>\n                                </div>\n                                <div class=\"m-checkbox-list\">\n                                    <label for=\"EditEdition_IsWaitingDayActive\" class=\"m-checkbox\">\n                                        <input id=\"EditEdition_IsWaitingDayActive\" class=\"md-check\" type=\"checkbox\" name=\"IsWaitingDayActive\" [(ngModel)]=\"isWaitingDayActive\" />\n                                        {{l(\"WaitAfterSubscriptionExpireDate\")}}\n                                        <span></span>\n                                    </label>\n                                </div>\n                                <div class=\"form-group waiting-day-after-expire\" *ngIf=\"isWaitingDayActive\">\n                                    <label for=\"WaitingDayAfterExpire\">{{l(\"WaitingDayAfterExpire\")}}</label>\n                                    <input #waitingDayAfterExpireInput=\"ngModel\"\n                                           class=\"form-control\"\n                                           type=\"number\"\n                                           name=\"WaitingDayAfterExpire\"\n                                           id=\"WaitingDayAfterExpire\"\n                                           [required]=\"isWaitingDayActive\"\n                                           [(ngModel)]=\"edition.waitingDayAfterExpire\"\n                                           [ngClass]=\"{'edited':edition.waitingDayAfterExpire}\">\n                                    <validation-messages [formCtrl]=\"waitingDayAfterExpireInput\"></validation-messages>\n                                </div>\n                                <label>{{l(\"WhatWillDoneAfterSubscriptionExpiry\")}}</label>\n                                <div class=\"m-radio-inline\">\n                                    <label for=\"EditEdition_ExpireAction_DeactiveUser\" class=\"m-radio\">\n                                        <input id=\"EditEdition_ExpireAction_DeactiveUser\" name=\"ExpireAction\" [(ngModel)]=\"expireAction\" [value]=\"expireActionEnum.DeactiveTenant\" (ngModelChange)=\"removeExpiringEdition($event)\" type=\"radio\">\n                                        {{l(\"DeactiveTenant\")}}\n                                        <span></span>\n                                    </label>\n                                    <label for=\"EditEdition_ExpireAction_AssignEdition\" class=\"m-radio\">\n                                        <input id=\"EditEdition_ExpireAction_AssignEdition\" name=\"ExpireAction\" [(ngModel)]=\"expireAction\" [value]=\"expireActionEnum.AssignToAnotherEdition\" type=\"radio\">\n                                        {{l(\"AssignToAnotherEdition\")}}\n                                        <span></span>\n                                    </label>\n                                </div>\n                                <div class=\"form-group edition-list\" *ngIf=\"expireAction == expireActionEnum.AssignToAnotherEdition\">\n                                    <select name=\"expiringEdition\" class=\"form-control edited\" [(ngModel)]=\"edition.expiringEditionId\" [minValue]=\"expireAction == expireActionEnum.AssignToAnotherEdition ? 1:0\" [ngClass]=\"{'edited':edition.expiringEditionId}\">\n                                        <option *ngFor=\"let expiringEdition of expiringEditions\" [value]=\"expiringEdition.value\">{{expiringEdition.displayText}}</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </tab>\n                        <tab heading=\"{{l('Features')}}\" customClass=\"m-tabs__item\">\n                            <feature-tree #featureTree></feature-tree>\n                        </tab>\n                    </tabset>\n                </div>\n                <div class=\"modal-footer\">\n                    <button [disabled]=\"saving\" type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">{{l(\"Cancel\")}}</button>\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!roleForm.form.valid\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\"><i class=\"fa fa-save\"></i> <span>{{l(\"Save\")}}</span></button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/editions/create-or-edit-edition-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/editions/create-or-edit-edition-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateOrEditEditionModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrEditEditionModalComponent", function() { return CreateOrEditEditionModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/AppEnums */ "./src/shared/AppEnums.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _shared_feature_tree_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/feature-tree.component */ "./src/app/admin/shared/feature-tree.component.ts");
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






var CreateOrEditEditionModalComponent = /** @class */ (function (_super) {
    __extends(CreateOrEditEditionModalComponent, _super);
    function CreateOrEditEditionModalComponent(injector, _editionService, _commonLookupService) {
        var _this = _super.call(this, injector) || this;
        _this._editionService = _editionService;
        _this._commonLookupService = _commonLookupService;
        _this.modalSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.active = false;
        _this.saving = false;
        _this.edition = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["EditionEditDto"]();
        _this.expiringEditions = [];
        _this.expireAction = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__["AppEditionExpireAction"].DeactiveTenant;
        _this.expireActionEnum = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__["AppEditionExpireAction"];
        _this.isFree = false;
        _this.isTrialActive = false;
        _this.isWaitingDayActive = false;
        return _this;
    }
    CreateOrEditEditionModalComponent.prototype.ngAfterViewChecked = function () {
        //Temporary fix for: https://github.com/valor-software/ngx-bootstrap/issues/1508
        $('tabset ul.nav').addClass('m-tabs-line');
        $('tabset ul.nav li a.nav-link').addClass('m-tabs__link');
    };
    CreateOrEditEditionModalComponent.prototype.show = function (editionId) {
        var _this = this;
        this.active = true;
        this._commonLookupService.getEditionsForCombobox(true).subscribe(function (editionsResult) {
            _this.expiringEditions = editionsResult.items;
            _this.expiringEditions.unshift(new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["ComboboxItemDto"]({ value: null, displayText: _this.l('NotAssigned'), isSelected: true }));
            _this._editionService.getEditionForEdit(editionId).subscribe(function (editionResult) {
                _this.edition = editionResult.edition;
                _this.featureTree.editData = editionResult;
                _this.expireAction = _this.edition.expiringEditionId > 0 ? _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__["AppEditionExpireAction"].AssignToAnotherEdition : _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__["AppEditionExpireAction"].DeactiveTenant;
                _this.isFree = !editionResult.edition.monthlyPrice && !editionResult.edition.annualPrice;
                _this.isTrialActive = editionResult.edition.trialDayCount > 0;
                _this.isWaitingDayActive = editionResult.edition.waitingDayAfterExpire > 0;
                _this.modal.show();
            });
        });
    };
    CreateOrEditEditionModalComponent.prototype.onShown = function () {
        $(this.editionNameInput.nativeElement).focus();
    };
    CreateOrEditEditionModalComponent.prototype.updateAnnualPrice = function (value) {
        this.edition.annualPrice = value;
    };
    CreateOrEditEditionModalComponent.prototype.updateMonthlyPrice = function (value) {
        this.edition.monthlyPrice = value;
    };
    CreateOrEditEditionModalComponent.prototype.resetPrices = function (isFree) {
        this.edition.annualPrice = undefined;
        this.edition.monthlyPrice = undefined;
    };
    CreateOrEditEditionModalComponent.prototype.removeExpiringEdition = function (isDeactivateTenant) {
        this.edition.expiringEditionId = null;
    };
    CreateOrEditEditionModalComponent.prototype.save = function () {
        var _this = this;
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["CreateOrUpdateEditionDto"]();
        input.edition = this.edition;
        input.featureValues = this.featureTree.getGrantedFeatures();
        this.saving = true;
        this._editionService.createOrUpdateEdition(input)
            .finally(function () { return _this.saving = false; })
            .subscribe(function () {
            _this.notify.info(_this.l('SavedSuccessfully'));
            _this.close();
            _this.modalSave.emit(null);
        });
    };
    CreateOrEditEditionModalComponent.prototype.close = function () {
        this.active = false;
        this.modal.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editionNameInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CreateOrEditEditionModalComponent.prototype, "editionNameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('createOrEditModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], CreateOrEditEditionModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('featureTree'),
        __metadata("design:type", _shared_feature_tree_component__WEBPACK_IMPORTED_MODULE_5__["FeatureTreeComponent"])
    ], CreateOrEditEditionModalComponent.prototype, "featureTree", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CreateOrEditEditionModalComponent.prototype, "modalSave", void 0);
    CreateOrEditEditionModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'createOrEditEditionModal',
            template: __webpack_require__(/*! ./create-or-edit-edition-modal.component.html */ "./src/app/admin/editions/create-or-edit-edition-modal.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["EditionServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["CommonLookupServiceProxy"]])
    ], CreateOrEditEditionModalComponent);
    return CreateOrEditEditionModalComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/editions/editions.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/editions/editions.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-subheader \">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto col-xs-6 \">\n                <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                    <span>{{(\"Editions\")}}</span>\n                </h3>\n                <span class=\"m-section__sub\">\n                    {{l(\"EditionsHeaderInfo\")}}\n                </span>\n            </div>\n            <div class=\"col-xs-6 text-right\">\n                <button *ngIf=\"permission.isGranted('Pages.Editions.Create')\" class=\"btn btn-primary blue\" (click)=\"createEdition()\"><i class=\"fa fa-plus\"></i> {{l(\"CreateNewEdition\")}}</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"m-content\">\n        <div class=\"m-portlet m-portlet--mobile\">\n            <div class=\"m-portlet__body\">\n                <div class=\"row align-items-center\">\n                    <!--<Primeng-TurboTable-Start>-->\n                    <div class=\"primeng-datatable-container\" [busyIf]=\"primengTableHelper.isLoading\">\n                        <p-table #dataTable\n                                 (onLazyLoad)=\"getEditions()\"\n                                 [value]=\"primengTableHelper.records\"\n                                 rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                                 [paginator]=\"false\"\n                                 [lazy]=\"true\"\n                                 [responsive]=\"primengTableHelper.isResponsive\">\n                            <ng-template pTemplate=\"header\">\n                                <tr>\n                                    <th style=\"width: 130px;\"\n                                        [hidden]=\"!isGrantedAny('Pages.Editions.Edit', 'Pages.Editions.Delete')\">\n                                        {{l('Actions')}}\n                                    </th>\n                                    <th>\n                                        {{l('EditionName')}}\n                                    </th>\n                                    <th>\n                                        {{l('CreationTime')}}\n                                    </th>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"body\" let-record=\"$implicit\">\n                                <tr>\n                                    <td style=\"width: 130px;text-align:center\">\n                                        <div class=\"btn-group dropdown\">\n                                            <button class=\"dropdown-toggle btn btn-sm btn-primary\"\n                                                    data-toggle=\"dropdown\"\n                                                    aria-haspopup=\"true\"\n                                                    aria-expanded=\"false\">\n                                                <i class=\"fa fa-cog\"></i><span class=\"caret\"></span> {{l(\"Actions\")}}\n                                            </button>\n                                            <ul class=\"dropdown-menu\">\n                                                <li>\n                                                    <a *ngIf=\"permission.isGranted('Pages.Editions.Edit')\"\n                                                       (click)=\"createOrEditEditionModal.show(record.id)\">{{l('Edit')}}</a>\n                                                </li>\n\n                                                <li>\n                                                    <a *ngIf=\"permission.isGranted('Pages.Editions.Delete')\"\n                                                       (click)=\"deleteEdition(record)\">{{l('Delete')}}</a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </td>\n                                    <td>\n                                        {{record.displayName}}\n                                    </td>\n                                    <td>\n                                        {{record.creationTime | momentFormat:'L'}}\n                                    </td>\n                                </tr>\n                            </ng-template>\n                        </p-table>\n                        <div class=\"ui-table-footer\">\n                            {{l('TotalRecordsCount', primengTableHelper.totalRecordsCount)}}\n                        </div>\n                    </div>\n                    <!--<Primeng-TurboTable-End>-->\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <createOrEditEditionModal #createOrEditEditionModal (modalSave)=\"getEditions()\"></createOrEditEditionModal>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/editions/editions.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/editions/editions.component.ts ***!
  \******************************************************/
/*! exports provided: EditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditionsComponent", function() { return EditionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/paginator/paginator */ "./node_modules/primeng/components/paginator/paginator.js");
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/components/table/table */ "./node_modules/primeng/components/table/table.js");
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_components_table_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _create_or_edit_edition_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-or-edit-edition-modal.component */ "./src/app/admin/editions/create-or-edit-edition-modal.component.ts");
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







var EditionsComponent = /** @class */ (function (_super) {
    __extends(EditionsComponent, _super);
    function EditionsComponent(injector, _editionService) {
        var _this = _super.call(this, injector) || this;
        _this._editionService = _editionService;
        return _this;
    }
    EditionsComponent.prototype.getEditions = function () {
        var _this = this;
        this.primengTableHelper.showLoadingIndicator();
        this._editionService.getEditions().subscribe(function (result) {
            _this.primengTableHelper.totalRecordsCount = result.items.length;
            _this.primengTableHelper.records = result.items;
            _this.primengTableHelper.hideLoadingIndicator();
        });
    };
    EditionsComponent.prototype.createEdition = function () {
        this.createOrEditEditionModal.show();
    };
    EditionsComponent.prototype.deleteEdition = function (edition) {
        var _this = this;
        this.message.confirm(this.l('EditionDeleteWarningMessage', edition.displayName), function (isConfirmed) {
            if (isConfirmed) {
                _this._editionService.deleteEdition(edition.id).subscribe(function () {
                    _this.getEditions();
                    _this.notify.success(_this.l('SuccessfullyDeleted'));
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('createOrEditEditionModal'),
        __metadata("design:type", _create_or_edit_edition_modal_component__WEBPACK_IMPORTED_MODULE_6__["CreateOrEditEditionModalComponent"])
    ], EditionsComponent.prototype, "createOrEditEditionModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataTable'),
        __metadata("design:type", primeng_components_table_table__WEBPACK_IMPORTED_MODULE_5__["Table"])
    ], EditionsComponent.prototype, "dataTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginator'),
        __metadata("design:type", primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_4__["Paginator"])
    ], EditionsComponent.prototype, "paginator", void 0);
    EditionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./editions.component.html */ "./src/app/admin/editions/editions.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["EditionServiceProxy"]])
    ], EditionsComponent);
    return EditionsComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/install/install.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/install/install.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition] style=\"background-image: url('/assets/metronic/src/media/app/img/bg/bg-1.jpg');\">\n    <div class=\"content col-lg-12\">\n        <div class=\"m-content\">\n            <div class=\"m-portlet m-portlet--mobile\">\n                <div class=\"m-portlet__head\">\n                    <div class=\"m-portlet__head-caption\">\n                        <div class=\"m-portlet__head-title\">\n                            <h3 class=\"m-portlet__head-text\">\n                                Demo Installation\n                            </h3>\n                        </div>\n                    </div>\n                </div>\n                <form id=\"installForm\" class=\"m-form m-form--fit\">\n                    <div class=\"m-portlet__body\">\n                        <div class=\"form-group m-form__group\">\n                            <div class=\"m-alert m-alert--icon alert alert-warning\" role=\"alert\">\n                                <div class=\"m-alert__icon\">\n                                    <i class=\"la la-warning\"></i>\n                                </div>\n                                <div class=\"m-alert__text\">\n                                    <strong>\n                                        Clear your cookies before installing Demo ! Otherwise, you might have some pro\n                                    </strong>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"m-form__section\">\n                            <div class=\"m-form__heading\">\n                                <h5 class=\"m-form__heading-title\">\n                                    Connection String\n                                </h5>\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Connection String\" [(ngModel)]=\"setupSettings.connectionString\" name=\"connectionString\" value=\"{{setupSettings.connectionString}}\" autocomplete=\"off\">\n                            </div>\n                            <div class=\"m-form__seperator m-form__seperator--dashed\"></div>\n                            <div class=\"m-form__heading\">\n                                <h5 class=\"m-form__heading-title\">\n                                    Admin Password\n                                </h5>\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Admin Password\" [(ngModel)]=\"setupSettings.adminPassword\" name=\"adminPassword\" autocomplete=\"off\">\n                            </div>\n                            <div class=\"m-form__seperator m-form__seperator--dashed\"></div>\n                            <div class=\"m-form__heading\">\n                                <h5 class=\"m-form__heading-title\">\n                                    Client Side URL\n                                </h5>\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Client Side URL\" [(ngModel)]=\"setupSettings.webSiteUrl\" name=\"webSiteUrl\" value=\"{{setupSettings.webSiteUrl}}\">\n                            </div>\n                            <div class=\"m-form__heading\">\n                                <h5 class=\"m-form__heading-title\">\n                                    Server Side URL\n                                </h5>\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Server Side URL\" [(ngModel)]=\"setupSettings.serverUrl\" name=\"serverUrl\" value=\"{{setupSettings.serverUrl}}\">\n                            </div>\n                            <div class=\"m-form__seperator m-form__seperator--dashed\"></div>\n                            <div class=\"m-form__heading\">\n                                <h5 class=\"m-form__heading-title\">\n                                    Default Language\n                                </h5>\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <select class=\"form-control\" [(ngModel)]=\"setupSettings.defaultLanguage\" name=\"defaultLanguage\">\n                                    <option *ngFor=\"let language of languages\" value=\"{{language.value}}\">\n                                        {{language.name}}\n                                    </option>\n                                </select>\n                            </div>\n                            <div class=\"m-form__seperator m-form__seperator--dashed\"></div>\n                            <div class=\"m-form__heading\">\n                                <h5 class=\"m-form__heading-title\">\n                                    SMTP Settings\n                                </h5>\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <input type=\"email\" placeholder=\"Default from address\" class=\"form-control\" [(ngModel)]=\"setupSettings.smtpSettings.defaultFromAddress\" name=\"defaultFromAddress\">\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <input type=\"text\" placeholder=\"Default from displayName\" class=\"form-control\" [(ngModel)]=\"setupSettings.smtpSettings.defaultFromDisplayName\" name=\"defaultFromDisplayName\">\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <input type=\"text\" placeholder=\"SMTP host\" class=\"form-control\" [(ngModel)]=\"setupSettings.smtpSettings.smtpHost\" name=\"smtpHost\">\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <input type=\"number\" placeholder=\"SMTP port\" class=\"form-control\" [(ngModel)]=\"setupSettings.smtpSettings.smtpPort\" name=\"smtpPort\">\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <label class=\"control-label col-md-12\"></label>\n                                <div class=\"m-checkbox-list\">\n                                    <label class=\"m-checkbox\">\n                                        <input id=\"Settings_SmtpEnableSsl\" type=\"checkbox\" [(ngModel)]=\"setupSettings.smtpSettings.smtpEnableSsl\" name=\"smtpEnableSsl\" value=\"true\">\n                                        UseSsl\n                                        <span></span>\n                                    </label>\n                                    <label class=\"m-checkbox\">\n                                        <input id=\"Settings_SmtpUseDefaultCredentials\" type=\"checkbox\" [(ngModel)]=\"setupSettings.smtpSettings.smtpUseDefaultCredentials\" name=\"smtpUseDefaultCredentials\" value=\"true\">\n                                        Use Default Credentials\n                                        <span></span>\n                                    </label>\n                                </div>\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <input type=\"text\" placeholder=\"Domain name\" class=\"form-control\" [(ngModel)]=\"setupSettings.smtpSettings.smtpDomain\" name=\"smtpDomain\">\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <input type=\"text\" placeholder=\"User name\" class=\"form-control\" [(ngModel)]=\"setupSettings.smtpSettings.smtpUserName\" name=\"smtpUserName\">\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [(ngModel)]=\"setupSettings.smtpSettings.smtpPassword\" name=\"smtpPassword\" id=\"SmtpPassword\">\n                            </div>\n                            <div class=\"m-form__seperator m-form__seperator--dashed\"></div>\n                            <div class=\"m-form__heading\">\n                                <h5 class=\"m-form__heading-title\">\n                                    Invoice Info\n                                </h5>\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <input type=\"text\" class=\"form-control\" name=\"legalName\" [(ngModel)]=\"setupSettings.billInfo.legalName\" placeholder=\"Legal name\">\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <textarea class=\"form-control\" name=\"billAddress\" rows=\"5\" [(ngModel)]=\"setupSettings.billInfo.address\" placeholder=\"Address\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"m-portlet__foot m-portlet__no-border m-portlet__foot--fit\">\n                        <div class=\"m-form__actions m-form__actions--solid\">\n                            <button id=\"SaveButton\" class=\"btn btn-primary\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\" (click)=\"saveAll()\">Save</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/install/install.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/install/install.component.ts ***!
  \****************************************************/
/*! exports provided: InstallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallComponent", function() { return InstallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
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





var InstallComponent = /** @class */ (function (_super) {
    __extends(InstallComponent, _super);
    function InstallComponent(injector, _installSettingService, _commonLookupService, _appSessionService) {
        var _this = _super.call(this, injector) || this;
        _this._installSettingService = _installSettingService;
        _this._commonLookupService = _commonLookupService;
        _this._appSessionService = _appSessionService;
        _this.saving = false;
        return _this;
    }
    InstallComponent.prototype.loadAppSettingsJson = function () {
        var _this = this;
        var self = this;
        self._installSettingService.getAppSettingsJson()
            .subscribe(function (result) {
            _this.setupSettings.webSiteUrl = result.webSiteUrl;
            _this.setupSettings.serverUrl = result.serverSiteUrl;
            _this.languages = result.languages;
        });
    };
    InstallComponent.prototype.init = function () {
        this._installSettingService.checkDatabase()
            .subscribe(function (result) {
            if (result.isDatabaseExist) {
                window.location.href = '/';
            }
        });
        this.setupSettings = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["InstallDto"]();
        this.setupSettings.smtpSettings = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["EmailSettingsEditDto"]();
        this.setupSettings.billInfo = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["HostBillingSettingsEditDto"]();
        this.setupSettings.defaultLanguage = 'en';
        this.loadAppSettingsJson();
    };
    InstallComponent.prototype.ngOnInit = function () {
        var self = this;
        self.init();
    };
    InstallComponent.prototype.saveAll = function () {
        var _this = this;
        this.saving = true;
        this._installSettingService.setup(this.setupSettings)
            .finally(function () {
            _this.saving = false;
        })
            .subscribe(function () {
            window.location.href = '/';
        });
    };
    InstallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./install.component.html */ "./src/app/admin/install/install.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["InstallServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["CommonLookupServiceProxy"],
            _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_3__["AppSessionService"]])
    ], InstallComponent);
    return InstallComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/languages/create-or-edit-language-modal.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/languages/create-or-edit-language-modal.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #createOrEditModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"createOrEditModal\"\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <form *ngIf=\"active\" #editForm=\"ngForm\" novalidate (ngSubmit)=\"save()\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">\n                        <span *ngIf=\"language.id\">{{l(\"EditLanguage\")}}: {{language.name}}</span>\n                        <span *ngIf=\"!language.id\">{{l(\"CreateNewLanguage\")}}</span>\n                    </h4>\n                    <button type=\"button\" class=\"close\" (click)=\"close()\" [attr.aria-label]=\"l('Close')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"form-group\">\n                        <select #languageCombobox\n                                name=\"languageName\"\n                                class=\"form-control\"\n                                [(ngModel)]=\"language.name\"\n                                [attr.data-live-search]=\"true\"\n                                jq-plugin=\"selectpicker\"\n                                required>\n                            <option value=\"\">{{emptyText}}</option>\n                            <option *ngFor=\"let languageName of languageNames\" [value]=\"languageName.value\">{{languageName.displayText}}</option>\n                        </select>\n                        <validation-messages [formCtrl]=\"languageCombobox\"></validation-messages>\n                    </div>\n                    <div class=\"form-group\">\n                        <select #iconCombobox\n                                name=\"languageIcon\"\n                                class=\"form-control\"\n                                [(ngModel)]=\"language.icon\"\n                                jq-plugin=\"selectpicker\"\n                                [attr.data-live-search]=\"true\">\n                            <option value=\"\">{{emptyText}}</option>\n                            <option *ngFor=\"let flag of flags\" [value]=\"flag.value\" [attr.data-icon]=\"flag.value\">{{flag.displayText}}</option>\n                        </select>\n                    </div>\n                    <div class=\"m-checkbox-list\">\n                        <label for=\"EditLanguage_IsEnabled\" class=\"m-checkbox\">\n                            <input id=\"EditLanguage_IsEnabled\" type=\"checkbox\" name=\"languageIsEnabled\"\n                                   [(ngModel)]=\"language.isEnabled\">\n                            {{l(\"IsEnabled\")}}\n                            <span></span>\n                        </label>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button [disabled]=\"saving\" type=\"button\" class=\"btn btn-default\" (click)=\"close()\">{{l(\"Cancel\")}}</button>\n                    <button type=\"submit\" class=\"btn btn-primary blue\" [disabled]=\"!editForm.form.valid\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\"><i class=\"fa fa-save\"></i> <span>{{l(\"Save\")}}</span></button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/languages/create-or-edit-language-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/languages/create-or-edit-language-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateOrEditLanguageModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrEditLanguageModalComponent", function() { return CreateOrEditLanguageModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
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




var CreateOrEditLanguageModalComponent = /** @class */ (function (_super) {
    __extends(CreateOrEditLanguageModalComponent, _super);
    function CreateOrEditLanguageModalComponent(injector, _languageService) {
        var _this = _super.call(this, injector) || this;
        _this._languageService = _languageService;
        _this.modalSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.active = false;
        _this.saving = false;
        _this.language = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["ApplicationLanguageEditDto"]();
        _this.languageNames = [];
        _this.flags = [];
        return _this;
    }
    CreateOrEditLanguageModalComponent.prototype.show = function (languageId) {
        var _this = this;
        this.active = true;
        this._languageService.getLanguageForEdit(languageId).subscribe(function (result) {
            _this.language = result.language;
            _this.languageNames = result.languageNames;
            _this.flags = result.flags;
            if (!languageId) {
                _this.language.isEnabled = true;
            }
            _this.modal.show();
            setTimeout(function () {
                $(_this.languageCombobox.nativeElement).selectpicker('refresh');
                $(_this.iconCombobox.nativeElement).selectpicker('refresh');
            }, 0);
        });
    };
    CreateOrEditLanguageModalComponent.prototype.save = function () {
        var _this = this;
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["CreateOrUpdateLanguageInput"]();
        input.language = this.language;
        this.saving = true;
        this._languageService.createOrUpdateLanguage(input)
            .finally(function () { return _this.saving = false; })
            .subscribe(function () {
            _this.notify.info(_this.l('SavedSuccessfully'));
            _this.close();
            _this.modalSave.emit(null);
        });
    };
    CreateOrEditLanguageModalComponent.prototype.close = function () {
        this.active = false;
        this.modal.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('createOrEditModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], CreateOrEditLanguageModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('languageCombobox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CreateOrEditLanguageModalComponent.prototype, "languageCombobox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iconCombobox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CreateOrEditLanguageModalComponent.prototype, "iconCombobox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CreateOrEditLanguageModalComponent.prototype, "modalSave", void 0);
    CreateOrEditLanguageModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'createOrEditLanguageModal',
            template: __webpack_require__(/*! ./create-or-edit-language-modal.component.html */ "./src/app/admin/languages/create-or-edit-language-modal.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["LanguageServiceProxy"]])
    ], CreateOrEditLanguageModalComponent);
    return CreateOrEditLanguageModalComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/languages/edit-text-modal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/languages/edit-text-modal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #modal=\"bs-modal\" class=\"modal fade\" (onShown)=\"onShown()\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"createOrEditModal\"\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <form *ngIf=\"active\" #editForm=\"ngForm\" novalidate (ngSubmit)=\"save()\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">\n                        <span>{{l(\"EditText\")}}</span>\n                    </h4>\n                    <button type=\"button\" class=\"close\" (click)=\"close()\" [attr.aria-label]=\"l('Close')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"form-group\">\n                        <label>{{l(\"Key\")}}</label>\n                        <div><strong>{{model.key}}</strong></div>\n                    </div>\n                    <div class=\"form-group form-md-line-input form-md-floating-label no-hint\">\n                        <label for=\"BaseLanguageDisplayName\"><i class=\"{{baseLanguage.icon}}\"></i> {{baseLanguage.displayName}} </label>\n                        <textarea id=\"BaseLanguageDisplayName\" readonly class=\"form-control edited\" rows=\"4\" [ngModel]=\"baseText\" name=\"baseText\"></textarea>\n                    </div>\n                    <div class=\"form-group form-md-line-input form-md-floating-label no-hint\">\n                        <label for=\"TargetLanguageDisplayName\"><i class=\"{{targetLanguage.icon}}\"></i> {{targetLanguage.displayName}} </label>\n                        <textarea id=\"TargetLanguageDisplayName\" #targetValueInput class=\"form-control\" [ngClass]=\"{'edited':model.value}\" rows=\"4\" [(ngModel)]=\"model.value\" name=\"value\"></textarea>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button [disabled]=\"saving\" type=\"button\" class=\"btn btn-default\" (click)=\"close()\">{{l(\"Cancel\")}}</button>\n                    <button type=\"submit\" class=\"btn btn-primary blue\" [disabled]=\"!editForm.form.valid\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\"><i class=\"fa fa-save\"></i> <span>{{l(\"Save\")}}</span></button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/languages/edit-text-modal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/languages/edit-text-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: EditTextModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTextModalComponent", function() { return EditTextModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
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





var EditTextModalComponent = /** @class */ (function (_super) {
    __extends(EditTextModalComponent, _super);
    function EditTextModalComponent(injector, _languageService) {
        var _this = _super.call(this, injector) || this;
        _this._languageService = _languageService;
        _this.modalSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["UpdateLanguageTextInput"]();
        _this.active = false;
        _this.saving = false;
        return _this;
    }
    EditTextModalComponent.prototype.show = function (baseLanguageName, targetLanguageName, sourceName, key, baseText, targetText) {
        this.model.sourceName = sourceName;
        this.model.key = key;
        this.model.languageName = targetLanguageName;
        this.model.value = targetText;
        this.baseText = baseText;
        this.baseLanguage = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](abp.localization.languages, function (l) { return l.name === baseLanguageName; });
        this.targetLanguage = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](abp.localization.languages, function (l) { return l.name === targetLanguageName; });
        this.active = true;
        this.modal.show();
    };
    EditTextModalComponent.prototype.onShown = function () {
        $(this.targetValueInput.nativeElement).focus();
    };
    EditTextModalComponent.prototype.save = function () {
        var _this = this;
        this.saving = true;
        this._languageService.updateLanguageText(this.model)
            .finally(function () { return _this.saving = false; })
            .subscribe(function () {
            _this.notify.info(_this.l('SavedSuccessfully'));
            _this.close();
            _this.modalSave.emit(null);
        });
    };
    EditTextModalComponent.prototype.close = function () {
        this.active = false;
        this.modal.hide();
    };
    EditTextModalComponent.prototype.findLanguage = function (name) {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["find"](abp.localization.languages, function (l) { return l.name === name; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('targetValueInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditTextModalComponent.prototype, "targetValueInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], EditTextModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditTextModalComponent.prototype, "modalSave", void 0);
    EditTextModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'editTextModal',
            template: __webpack_require__(/*! ./edit-text-modal.component.html */ "./src/app/admin/languages/edit-text-modal.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["LanguageServiceProxy"]])
    ], EditTextModalComponent);
    return EditTextModalComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/languages/language-texts.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/languages/language-texts.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n\n    <div class=\"m-subheader \">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto\">\n                <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                    <span>{{l(\"LanguageTexts\")}}</span>\n                </h3>\n                <span class=\"m-section__sub\">\n                    {{l(\"LanguageTextsHeaderInfo\")}}\n                </span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"m-content\">\n        <div class=\"m-portlet m-portlet--mobile\">\n            <div class=\"m-portlet__body\">\n                <form autocomplete=\"off\">\n                    <div class=\"m-form m-form--label-align-right\" id=\"TextsFilterForm\">\n                        <div class=\"row align-items-center m--margin-bottom-10\">\n                            <div class=\"col-sm-6 col-md-3\">\n                                <div class=\"form-group\">\n                                    <label for=\"TextBaseLanguageSelectionCombobox\">{{l(\"BaseLanguage\")}}</label>\n                                    <select #baseLanguageNameCombobox\n                                            name=\"baseLanguageName\"\n                                            class=\"form-control bs-select\"\n                                            [(ngModel)]=\"baseLanguageName\"\n                                            [attr.data-live-search]=\"true\"\n                                            jq-plugin=\"selectpicker\"\n                                            jq-options='{ \"iconBase\": \"famfamfam-flag\", \"tickIcon\": \"fa fa-check\" }'>\n                                        <option *ngFor=\"let language of languages\" [value]=\"language.name\" [attr.data-icon]=\"language.icon\">{{language.displayName}}</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6 col-md-3\">\n                                <div class=\"form-group\">\n                                    <label for=\"TextTargetLanguageSelectionCombobox\">{{l(\"TargetLanguage\")}}</label>\n                                    <select #targetLanguageNameCombobox\n                                            name=\"targetLanguageName\"\n                                            class=\"form-control bs-select\"\n                                            [(ngModel)]=\"targetLanguageName\"\n                                            [attr.data-live-search]=\"true\"\n                                            jq-plugin=\"selectpicker\"\n                                            jq-options='{ \"iconBase\": \"famfamfam-flag\", \"tickIcon\": \"fa fa-check\" }'>\n                                        <option *ngFor=\"let language of languages\" [value]=\"language.name\" [attr.data-icon]=\"language.icon\">{{language.displayName}}</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6 col-md-3\">\n                                <div class=\"form-group\">\n                                    <label for=\"TextSourceSelectionCombobox\">{{l(\"Source\")}}</label>\n                                    <select #sourceNameCombobox\n                                            name=\"sourceName\"\n                                            class=\"form-control bs-select\"\n                                            [(ngModel)]=\"sourceName\"\n                                            [attr.data-live-search]=\"true\"\n                                            jq-plugin=\"selectpicker\">\n                                        <option *ngFor=\"let sourceName of sourceNames\" [value]=\"sourceName\">{{sourceName}}</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6 col-md-3\">\n                                <div class=\"form-group\">\n                                    <label for=\"TargetValueFilterSelectionCombobox\">{{l(\"TargetValue\")}}</label>\n                                    <select #targetValueFilterCombobox\n                                            name=\"targetValueFilter\"\n                                            class=\"form-control bs-select\"\n                                            [(ngModel)]=\"targetValueFilter\"\n                                            jq-plugin=\"selectpicker\">\n                                        <option value=\"ALL\">{{l(\"All\")}}</option>\n                                        <option value=\"EMPTY\">{{l(\"EmptyOnes\")}}</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row align-items-center m--margin-bottom-10\">\n                            <div class=\"col-sm-12\">\n                                <div class=\"input-group\">\n                                    <input [(ngModel)]=\"filterText\" name=\"filterText\" autoFocus class=\"form-control\" placeholder=\"{{l('SearchWithThreeDot')}}\" type=\"text\">\n                                    <span class=\"input-group-btn\">\n                                        <button (click)=\"applyFilters()\" class=\"btn btn-primary\" type=\"submit\"><i class=\"icon-refresh\"></i> {{l(\"Refresh\")}}</button>\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n                <div class=\"row align-items-center\">\n                    <!--<Primeng-TurboTable-Start>-->\n                    <div class=\"primeng-datatable-container\"\n                         [busyIf]=\"primengTableHelper.isLoading\">\n                        <p-table #dataTable\n                                 (onLazyLoad)=\"getLanguageTexts($event)\"\n                                 [value]=\"primengTableHelper.records\"\n                                 rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                                 [paginator]=\"false\"\n                                 [lazy]=\"true\"\n                                 [responsive]=\"primengTableHelper.isResponsive\">\n                            <ng-template pTemplate=\"header\">\n                                <tr>\n                                    <th pSortableColumn=\"key\">\n                                        {{l('Key')}}\n                                        <p-sortIcon field=\"key\"></p-sortIcon>\n                                    </th>\n                                    <th pSortableColumn=\"baseValue\">\n                                        {{l('BaseValue')}}\n                                        <p-sortIcon field=\"baseValue\"></p-sortIcon>\n                                    </th>\n                                    <th pSortableColumn=\"targetValue\">\n                                        {{l('TargetValue')}}\n                                        <p-sortIcon field=\"targetValue\"></p-sortIcon>\n                                    </th>\n                                    <th>{{l('Edit')}}</th>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"body\" let-record=\"$implicit\">\n                                <tr>\n                                    <td>\n                                        <span title=\"{{record.key}}\">{{truncateString(record.key)}}</span>\n                                    </td>\n                                    <td>\n                                        <span title=\"{{record.baseValue}}\">{{truncateString(record.baseValue)}}</span>\n                                    </td>\n                                    <td>\n                                        <span title=\"{{record.targetValue}}\">{{truncateString(record.targetValue) }}</span>\n                                    </td>\n                                    <td>\n                                        <button class=\"btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\n                                                (click)=\"editTextModal.show(baseLanguageName,targetLanguageName,sourceName,record.key,record.baseValue,record.targetValue)\"\n                                                title=\"{{l('Edit')}}\">\n                                            <i class=\"fa fa-edit\" [attr.aria-label]=\"l('Edit')\"></i>\n                                        </button>\n                                    </td>\n                                </tr>\n                            </ng-template>\n                        </p-table>\n                        <div class=\"primeng-paging-container\">\n                            <p-paginator rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                                         #paginator\n                                         (onPageChange)=\"getLanguageTexts($event)\"\n                                         [totalRecords]=\"primengTableHelper.totalRecordsCount\"\n                                         [rowsPerPageOptions]=\"primengTableHelper.predefinedRecordsCountPerPage\">\n                            </p-paginator>\n                            <span class=\"total-records-count\">\n                                {{l('TotalRecordsCount', primengTableHelper.totalRecordsCount)}}\n                            </span>\n                        </div>\n                    </div>\n                    <!--<Primeng-TurboTable-End>-->\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <editTextModal #editTextModal (modalSave)=\"refreshTextValueFromModal()\"></editTextModal>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/languages/language-texts.component.less":
/*!***************************************************************!*\
  !*** ./src/app/admin/languages/language-texts.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/languages/language-texts.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/languages/language-texts.component.ts ***!
  \*************************************************************/
/*! exports provided: LanguageTextsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageTextsComponent", function() { return LanguageTextsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/components/paginator/paginator */ "./node_modules/primeng/components/paginator/paginator.js");
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/components/table/table */ "./node_modules/primeng/components/table/table.js");
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_components_table_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _edit_text_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-text-modal.component */ "./src/app/admin/languages/edit-text-modal.component.ts");
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









var LanguageTextsComponent = /** @class */ (function (_super) {
    __extends(LanguageTextsComponent, _super);
    function LanguageTextsComponent(injector, _languageService, _router, _activatedRoute) {
        var _this = _super.call(this, injector) || this;
        _this._languageService = _languageService;
        _this._router = _router;
        _this._activatedRoute = _activatedRoute;
        _this.sourceNames = [];
        _this.languages = [];
        return _this;
    }
    LanguageTextsComponent.prototype.ngOnInit = function () {
        this.sourceNames = lodash__WEBPACK_IMPORTED_MODULE_5__["map"](lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](abp.localization.sources, function (source) { return source.type === 'MultiTenantLocalizationSource'; }), function (value) { return value.name; });
        this.languages = abp.localization.languages;
    };
    LanguageTextsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.init();
        });
    };
    LanguageTextsComponent.prototype.getLanguageTexts = function (event) {
        var _this = this;
        if (!this.paginator || !this.dataTable || !this.sourceName) {
            return;
        }
        this.primengTableHelper.showLoadingIndicator();
        this._languageService.getLanguageTexts(this.primengTableHelper.getMaxResultCount(this.paginator, event), this.primengTableHelper.getSkipCount(this.paginator, event), this.primengTableHelper.getSorting(this.dataTable), this.sourceName, this.baseLanguageName, this.targetLanguageName, this.targetValueFilter, this.filterText).subscribe(function (result) {
            _this.primengTableHelper.totalRecordsCount = result.totalCount;
            _this.primengTableHelper.records = result.items;
            _this.primengTableHelper.hideLoadingIndicator();
        });
    };
    LanguageTextsComponent.prototype.init = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.baseLanguageName = params['baseLanguageName'] || abp.localization.currentLanguage.name;
            _this.targetLanguageName = params['name'];
            _this.sourceName = params['sourceName'] || 'Demo';
            _this.targetValueFilter = params['targetValueFilter'] || 'ALL';
            _this.filterText = params['filterText'] || '';
            setTimeout(function () {
                $(_this.baseLanguageNameCombobox.nativeElement).selectpicker('refresh');
                $(_this.targetLanguageNameCombobox.nativeElement).selectpicker('refresh');
                $(_this.sourceNameCombobox.nativeElement).selectpicker('refresh');
                $(_this.targetValueFilterCombobox.nativeElement).selectpicker('refresh');
            }, 0);
            _this.reloadPage();
        });
    };
    LanguageTextsComponent.prototype.reloadPage = function () {
        this.paginator.changePage(this.paginator.getPage());
    };
    LanguageTextsComponent.prototype.applyFilters = function () {
        this._router.navigate(['app/admin/languages', this.targetLanguageName, 'texts', {
                sourceName: this.sourceName,
                baseLanguageName: this.baseLanguageName,
                targetValueFilter: this.targetValueFilter,
                filterText: this.filterText
            }]);
        if (this.paginator.getPage() !== 0) {
            this.paginator.changePage(0);
            return;
        }
    };
    LanguageTextsComponent.prototype.truncateString = function (text) {
        return abp.utils.truncateStringWithPostfix(text, 32, '...');
    };
    LanguageTextsComponent.prototype.refreshTextValueFromModal = function () {
        for (var i = 0; i < this.primengTableHelper.records.length; i++) {
            if (this.primengTableHelper.records[i].key === this.editTextModal.model.key) {
                this.primengTableHelper.records[i].targetValue = this.editTextModal.model.value;
                return;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('targetLanguageNameCombobox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LanguageTextsComponent.prototype, "targetLanguageNameCombobox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('baseLanguageNameCombobox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LanguageTextsComponent.prototype, "baseLanguageNameCombobox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sourceNameCombobox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LanguageTextsComponent.prototype, "sourceNameCombobox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('targetValueFilterCombobox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LanguageTextsComponent.prototype, "targetValueFilterCombobox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('textsTable'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LanguageTextsComponent.prototype, "textsTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editTextModal'),
        __metadata("design:type", _edit_text_modal_component__WEBPACK_IMPORTED_MODULE_8__["EditTextModalComponent"])
    ], LanguageTextsComponent.prototype, "editTextModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataTable'),
        __metadata("design:type", primeng_components_table_table__WEBPACK_IMPORTED_MODULE_7__["Table"])
    ], LanguageTextsComponent.prototype, "dataTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginator'),
        __metadata("design:type", primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_6__["Paginator"])
    ], LanguageTextsComponent.prototype, "paginator", void 0);
    LanguageTextsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./language-texts.component.html */ "./src/app/admin/languages/language-texts.component.html"),
            styles: [__webpack_require__(/*! ./language-texts.component.less */ "./src/app/admin/languages/language-texts.component.less")],
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["LanguageServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LanguageTextsComponent);
    return LanguageTextsComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/languages/languages.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/languages/languages.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n\n    <div class=\"m-subheader \">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto col-xs-6\">\n                <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                    <span>{{l(\"Languages\")}}</span>\n                </h3>\n                <span class=\"m-section__sub\">\n                    {{l(\"LanguagesHeaderInfo\")}}\n                </span>\n            </div>\n            <div class=\"col-xs-6 text-right\">\n                <button *ngIf=\"isGranted('Pages.Administration.Languages.Create')\" (click)=\"createOrEditLanguageModal.show()\" class=\"btn btn-primary blue\"><i class=\"fa fa-plus\"></i> {{l(\"CreateNewLanguage\")}}</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"m-content\">\n        <div class=\"m-portlet m-portlet--mobile\">\n            <div class=\"m-portlet__body\">\n                <div class=\"row align-items-center\">\n                    <!--<Primeng-TurboTable-Start>-->\n                    <div class=\"primeng-datatable-container\" [busyIf]=\"primengTableHelper.isLoading\">\n                        <p-table #dataTable\n                                 (onLazyLoad)=\"getLanguages()\"\n                                 [value]=\"primengTableHelper.records\"\n                                 rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                                 [paginator]=\"false\"\n                                 [lazy]=\"true\"\n                                 [responsive]=\"primengTableHelper.isResponsive\">\n                            <ng-template pTemplate=\"header\">\n                                <tr>\n                                    <th style=\"width: 130px\"\n                                        [hidden]=\"!isGrantedAny('Pages.Administration.Languages.Edit', 'Pages.Administration.Languages.ChangeTexts', 'Pages.Administration.Languages.Delete')\">\n                                        {{l('Actions')}}\n                                    </th>\n                                    <th>\n                                        {{l('Name')}}\n                                    </th>\n                                    <th>\n                                        {{l('Code')}}\n                                    </th>\n                                    <th *ngIf=\"appSession.tenantId ? true : false\">\n                                        {{l('Default')}} *\n                                    </th>\n                                    <th>\n                                        {{l('CreationTime')}}\n                                    </th>\n                                    <th>\n                                        {{l('IsEnabled')}}\n                                    </th>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"body\" let-record=\"$implicit\">\n                                <tr>\n                                    <td style=\"width: 130px; text-align: center\">\n                                        <div class=\"btn-group dropdown\">\n                                            <button class=\"dropdown-toggle btn btn-sm btn-primary\"\n                                                    data-toggle=\"dropdown\"\n                                                    aria-haspopup=\"true\"\n                                                    aria-expanded=\"false\">\n                                                <i class=\"fa fa-cog\"></i><span class=\"caret\"></span> {{l(\"Actions\")}}\n                                            </button>\n                                            <ul class=\"dropdown-menu\">\n                                                <li>\n                                                    <a *ngIf=\"permission.isGranted('Pages.Administration.Languages.Edit') && record.tenantId === appSession.tenantId\"\n                                                       (click)=\"createOrEditLanguageModal.show(record.id)\">{{l('Edit')}}</a>\n                                                </li>\n                                                <li>\n                                                    <a *ngIf=\"permission.isGranted('Pages.Administration.Languages.ChangeTexts')\"\n                                                       (click)=\"changeTexts(record)\">{{l('ChangeTexts')}}</a>\n                                                </li>\n                                                <li>\n                                                    <a *ngIf=\"permission.isGranted('Pages.Administration.Languages.Edit')\"\n                                                       (click)=\"setAsDefaultLanguage(record)\">{{l('SetAsDefaultLanguage')}}</a>\n                                                </li>\n                                                <li>\n                                                    <a *ngIf=\"permission.isGranted('Pages.Administration.Languages.Delete') && record.tenantId === appSession.tenantId\"\n                                                       (click)=\"deleteLanguage(record)\">{{l('Delete')}}</a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <span [ngClass]=\"{'text-bold' : defaultLanguageName === record.name}\">\n                                            <i [ngClass]=\"record.icon\" class=\"margin-right-5\"></i>\n                                            {{record.displayName}} <span *ngIf=\"defaultLanguageName === record.name\">({{l('Default')}})</span>\n                                        </span>\n                                    </td>\n                                    <td>\n                                        {{record.name}}\n                                    </td>\n                                    <td *ngIf=\"appSession.tenantId ? true : false\">\n                                        <span class=\"label m-badge m-badge--success m-badge--wide\"\n                                              *ngIf=\"record.tenantId !== appSession.tenantId\">\n                                            {{l('Yes')}}\n                                        </span>\n                                        <span class=\"label m-badge m-badge--metal m-badge--wide\"\n                                              *ngIf=\"record.tenantId === appSession.tenantId\">\n                                            {{l('No')}}\n                                        </span>\n                                    </td>\n                                    <td>\n                                        {{record.creationTime | momentFormat:'L'}}\n                                    </td>\n                                    <td>\n                                        <span class=\"label m-badge m-badge--success m-badge--wide\"\n                                              *ngIf=\"!record.isDisabled\">\n                                            {{l('Yes')}}\n                                        </span>\n                                        <span class=\"label m-badge m-badge--metal m-badge--wide\"\n                                              *ngIf=\"record.isDisabled\">\n                                            {{l('No')}}\n                                        </span>\n                                    </td>\n                                </tr>\n                            </ng-template>\n                        </p-table>\n                        <div class=\"ui-table-footer\">\n                            {{l('TotalRecordsCount', primengTableHelper.totalRecordsCount)}}\n                        </div>\n                    </div>\n                    <!--<Primeng-TurboTable-End>-->\n\n                    <p class=\"margin-top-20\" *ngIf=\"appSession.tenantId\">\n                        * {{l(\"CanNotEditOrDeleteDefaultLanguages\")}}\n                    </p>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <createOrEditLanguageModal #createOrEditLanguageModal (modalSave)=\"getLanguages()\"></createOrEditLanguageModal>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/languages/languages.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/languages/languages.component.ts ***!
  \********************************************************/
/*! exports provided: LanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function() { return LanguagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/components/paginator/paginator */ "./node_modules/primeng/components/paginator/paginator.js");
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/components/table/table */ "./node_modules/primeng/components/table/table.js");
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_components_table_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _create_or_edit_language_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-or-edit-language-modal.component */ "./src/app/admin/languages/create-or-edit-language-modal.component.ts");
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








var LanguagesComponent = /** @class */ (function (_super) {
    __extends(LanguagesComponent, _super);
    function LanguagesComponent(injector, _languageService, _router) {
        var _this = _super.call(this, injector) || this;
        _this._languageService = _languageService;
        _this._router = _router;
        return _this;
    }
    LanguagesComponent.prototype.getLanguages = function () {
        var _this = this;
        this.primengTableHelper.showLoadingIndicator();
        this._languageService.getLanguages().subscribe(function (result) {
            _this.defaultLanguageName = result.defaultLanguageName;
            _this.primengTableHelper.records = result.items;
            _this.primengTableHelper.totalRecordsCount = result.items.length;
            _this.primengTableHelper.hideLoadingIndicator();
        });
    };
    LanguagesComponent.prototype.changeTexts = function (language) {
        this._router.navigate(['app/admin/languages', language.name, 'texts']);
    };
    LanguagesComponent.prototype.setAsDefaultLanguage = function (language) {
        var _this = this;
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["SetDefaultLanguageInput"]();
        input.name = language.name;
        this._languageService.setDefaultLanguage(input).subscribe(function () {
            _this.getLanguages();
            _this.notify.success(_this.l('SuccessfullySaved'));
        });
    };
    LanguagesComponent.prototype.deleteLanguage = function (language) {
        var _this = this;
        this.message.confirm(this.l('LanguageDeleteWarningMessage', language.displayName), function (isConfirmed) {
            if (isConfirmed) {
                _this._languageService.deleteLanguage(language.id).subscribe(function () {
                    _this.getLanguages();
                    _this.notify.success(_this.l('SuccessfullyDeleted'));
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('languagesTable'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LanguagesComponent.prototype, "languagesTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('createOrEditLanguageModal'),
        __metadata("design:type", _create_or_edit_language_modal_component__WEBPACK_IMPORTED_MODULE_7__["CreateOrEditLanguageModalComponent"])
    ], LanguagesComponent.prototype, "createOrEditLanguageModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataTable'),
        __metadata("design:type", primeng_components_table_table__WEBPACK_IMPORTED_MODULE_6__["Table"])
    ], LanguagesComponent.prototype, "dataTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginator'),
        __metadata("design:type", primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_5__["Paginator"])
    ], LanguagesComponent.prototype, "paginator", void 0);
    LanguagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./languages.component.html */ "./src/app/admin/languages/languages.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["LanguageServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LanguagesComponent);
    return LanguagesComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/maintenance/maintenance.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/maintenance/maintenance.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-subheader \">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto\">\n                <h3 class=\"m-subheader__title\">\n                    <span>{{l(\"Maintenance\")}}</span>\n                </h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"m-content\">\n        <div class=\"m-portlet m-portlet--mobile\">\n            <div class=\"m-portlet__body\">\n                <tabset class=\"tab-container tabbable-line\">\n                    <tab heading=\" {{l('Caches')}}\" customClass=\"m-tabs__item\">\n                        <div class=\"row margin-bottom-10\">\n                            <div class=\"col-xl-6\">\n                                <p>{{l(\"CachesHeaderInfo\")}}</p>\n                            </div>\n                            <div class=\"col-xl-6 text-right\">\n                                <button class=\"btn btn-primary\" (click)=\"clearAllCaches()\"><i class=\"fa fa-recycle\"></i> {{l(\"ClearAll\")}}</button>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xl-12\">\n                                <table class=\"table table-striped table-hover table-bordered\">\n                                    <tbody>\n                                        <tr *ngFor=\"let cache of caches\">\n                                            <td>\n                                                <span>{{cache.name}}</span>\n                                                <button class=\"btn btn-primary btn-sm pull-right\" (click)=\"clearCache(cache.name);\">\n                                                    {{l(\"Clear\")}}\n                                                </button>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </tab>\n                    <tab heading=\"{{l('WebSiteLogs')}}\" customClass=\"m-tabs__item\">\n                        <div class=\"row margin-bottom-10\">\n                            <div class=\"col-xl-6\">\n                                <p>{{l(\"WebSiteLogsHeaderInfo\")}}</p>\n                            </div>\n                            <div class=\"col-xl-6 text-right\">\n                                <button class=\"btn btn-metal\" (click)=\"downloadWebLogs()\"><i class=\"fa fa-download\"></i> {{l(\"DownloadAll\")}}</button>\n                                <button class=\"btn btn-primary\" (click)=\"getWebLogs()\"><i class=\"fa fa-refresh\"></i> {{l(\"Refresh\")}}</button>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xl-12\">\n                                <div class=\"web-log-view full-height\">\n                                    <span class=\"log-line\" *ngFor=\"let log of logs\">\n                                        <span [class]=\"getLogClass(log)\">{{getLogType(log)}}</span>\n                                        {{getRawLogContent(log)}}\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </tab>\n                </tabset>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/maintenance/maintenance.component.less":
/*!**************************************************************!*\
  !*** ./src/app/admin/maintenance/maintenance.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".web-log-view {\n  font-family: \"Courier New\";\n  overflow-x: scroll;\n  overflow-y: scroll;\n  height: 100%;\n  white-space: nowrap;\n}\n.web-log-view span.log-line {\n  margin-bottom: 5px;\n  display: block;\n}\n.web-log-view span.log-line span.label {\n  width: 50px;\n  display: inline-block;\n}\n"

/***/ }),

/***/ "./src/app/admin/maintenance/maintenance.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/maintenance/maintenance.component.ts ***!
  \************************************************************/
/*! exports provided: MaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceComponent", function() { return MaintenanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _shared_utils_file_download_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/utils/file-download.service */ "./src/shared/utils/file-download.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
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






var MaintenanceComponent = /** @class */ (function (_super) {
    __extends(MaintenanceComponent, _super);
    function MaintenanceComponent(injector, _cacheService, _webLogService, _fileDownloadService) {
        var _this = _super.call(this, injector) || this;
        _this._cacheService = _cacheService;
        _this._webLogService = _webLogService;
        _this._fileDownloadService = _fileDownloadService;
        _this.loading = false;
        _this.caches = null;
        _this.logs = '';
        _this.downloadWebLogs = function () {
            var self = this;
            self._webLogService.downloadWebLogs().subscribe(function (result) {
                self._fileDownloadService.downloadTempFile(result);
            });
        };
        return _this;
    }
    MaintenanceComponent.prototype.ngAfterViewChecked = function () {
        //Temporary fix for: https://github.com/valor-software/ngx-bootstrap/issues/1508
        $('tabset ul.nav').addClass('m-tabs-line');
        $('tabset ul.nav li a.nav-link').addClass('m-tabs__link');
    };
    MaintenanceComponent.prototype.getCaches = function () {
        var self = this;
        self.loading = true;
        self._cacheService.getAllCaches()
            .finally(function () {
            self.loading = false;
        })
            .subscribe(function (result) {
            self.caches = result.items;
        });
    };
    MaintenanceComponent.prototype.clearCache = function (cacheName) {
        var self = this;
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["EntityDtoOfString"]();
        input.id = cacheName;
        self._cacheService.clearCache(input).subscribe(function () {
            self.notify.success(self.l('CacheSuccessfullyCleared'));
        });
    };
    MaintenanceComponent.prototype.clearAllCaches = function () {
        var self = this;
        self._cacheService.clearAllCaches().subscribe(function () {
            self.notify.success(self.l('AllCachesSuccessfullyCleared'));
        });
    };
    MaintenanceComponent.prototype.getWebLogs = function () {
        var self = this;
        self._webLogService.getLatestWebLogs().subscribe(function (result) {
            self.logs = result.latestWebLogLines;
            self.fixWebLogsPanelHeight();
        });
    };
    MaintenanceComponent.prototype.getLogClass = function (log) {
        if (log.startsWith('DEBUG')) {
            return 'label label-default';
        }
        if (log.startsWith('INFO')) {
            return 'label label-info';
        }
        if (log.startsWith('WARN')) {
            return 'label label-warning';
        }
        if (log.startsWith('ERROR')) {
            return 'label label-danger';
        }
        if (log.startsWith('FATAL')) {
            return 'label label-danger';
        }
        return '';
    };
    MaintenanceComponent.prototype.getLogType = function (log) {
        if (log.startsWith('DEBUG')) {
            return 'DEBUG';
        }
        if (log.startsWith('INFO')) {
            return 'INFO';
        }
        if (log.startsWith('WARN')) {
            return 'WARN';
        }
        if (log.startsWith('ERROR')) {
            return 'ERROR';
        }
        if (log.startsWith('FATAL')) {
            return 'FATAL';
        }
        return '';
    };
    MaintenanceComponent.prototype.getRawLogContent = function (log) {
        return lodash__WEBPACK_IMPORTED_MODULE_5__["escape"](log)
            .replace('DEBUG', '')
            .replace('INFO', '')
            .replace('WARN', '')
            .replace('ERROR', '')
            .replace('FATAL', '');
    };
    MaintenanceComponent.prototype.fixWebLogsPanelHeight = function () {
        var windowHeight = $(window).height();
        var panelHeight = $('.full-height').height();
        var difference = windowHeight - panelHeight;
        var fixedHeight = panelHeight + difference;
        $('.full-height').css('height', (fixedHeight - 350) + 'px');
    };
    MaintenanceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $(window).bind('resize', function () {
            _this.fixWebLogsPanelHeight();
        });
    };
    MaintenanceComponent.prototype.ngOnInit = function () {
        var self = this;
        self.getCaches();
        self.getWebLogs();
    };
    MaintenanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./maintenance.component.html */ "./src/app/admin/maintenance/maintenance.component.html"),
            styles: [__webpack_require__(/*! ./maintenance.component.less */ "./src/app/admin/maintenance/maintenance.component.less")],
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["CachingServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["WebLogServiceProxy"],
            _shared_utils_file_download_service__WEBPACK_IMPORTED_MODULE_4__["FileDownloadService"]])
    ], MaintenanceComponent);
    return MaintenanceComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/organization-units/add-member-modal.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/organization-units/add-member-modal.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #modal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal\"\n     (onShown)=\"shown()\"\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">\n                    <span>{{l('SelectUsers')}}</span>\n                </h5>\n                <button type=\"button\" class=\"close\" (click)=\"close()\" [attr.aria-label]=\"l('Close')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n\n            <div class=\"modal-body\">\n                <form novalidate (ngSubmit)=\"refreshTable()\" autocomplete=\"off\">\n                    <div class=\"input-group margin-bottom-10\">\n                        <input autoFocus [(ngModel)]=\"filterText\" name=\"filterText\" class=\"form-control\" placeholder=\"{{l('SearchWithThreeDot')}}\" type=\"text\">\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-primary\" type=\"submit\"><i class=\"flaticon-search-1\" [attr.aria-label]=\"l('Search')\"></i></button>\n                        </span>\n                    </div>\n\n                    <!--<Primeng-TurboTable-Start>-->\n                    <div class=\"primeng-datatable-container\" [busyIf]=\"primengTableHelper.isLoading\">\n                        <p-table #dataTable\n                                 (onLazyLoad)=\"getRecordsIfNeeds($event)\"\n                                 [value]=\"primengTableHelper.records\"\n                                 rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                                 [paginator]=\"false\"\n                                 [lazy]=\"true\"\n                                 [responsive]=\"primengTableHelper.isResponsive\"\n                                 [(selection)]=\"selectedMembers\"\n                                 selectionMode=\"multiple\">\n                            <ng-template pTemplate=\"header\">\n                                <tr>\n                                    <th style=\"width:38px\">\n                                        <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                                    </th>\n                                    <th>\n                                        {{l('Name')}}\n                                    </th>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"body\" let-record=\"$implicit\">\n                                <tr [pSelectableRow]=\"record\">\n                                    <td style=\"width: 38px\">\n                                        <p-tableCheckbox [value]=\"record\"></p-tableCheckbox>\n                                    </td>\n                                    <td>\n                                        {{record.name}}\n                                    </td>\n                                </tr>\n                            </ng-template>\n                        </p-table>\n                        <div class=\"primeng-paging-container\">\n                            <p-paginator rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                                         #paginator\n                                         (onPageChange)=\"getRecordsIfNeeds($event)\"\n                                         [totalRecords]=\"primengTableHelper.totalRecordsCount\"\n                                         [rowsPerPageOptions]=\"primengTableHelper.predefinedRecordsCountPerPage\">\n                            </p-paginator>\n                            <span class=\"total-records-count\">\n                                {{l('TotalRecordsCount', primengTableHelper.totalRecordsCount)}}\n                            </span>\n                        </div>\n                    </div>\n                    <!--<Primeng-TurboTable-End>-->\n                </form>\n\n            </div>\n\n            <div class=\"modal-footer\">\n                <button [disabled]=\"saving\" type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">{{l(\"Cancel\")}}</button>\n                <button class=\"btn btn-primary\" (click)=\"addUsersToOrganizationUnit()\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\"><i class=\"fa fa-save\"></i> <span>{{l(\"Save\")}}</span></button>\n            </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/organization-units/add-member-modal.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/organization-units/add-member-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: AddMemberModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberModalComponent", function() { return AddMemberModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/components/paginator/paginator */ "./node_modules/primeng/components/paginator/paginator.js");
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/components/table/table */ "./node_modules/primeng/components/table/table.js");
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_components_table_table__WEBPACK_IMPORTED_MODULE_6__);
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







var AddMemberModalComponent = /** @class */ (function (_super) {
    __extends(AddMemberModalComponent, _super);
    function AddMemberModalComponent(injector, _organizationUnitService) {
        var _this = _super.call(this, injector) || this;
        _this._organizationUnitService = _organizationUnitService;
        _this.membersAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.isShown = false;
        _this.filterText = '';
        _this.saving = false;
        return _this;
    }
    AddMemberModalComponent.prototype.show = function () {
        this.modal.show();
    };
    AddMemberModalComponent.prototype.refreshTable = function () {
        this.paginator.changePage(this.paginator.getPage());
    };
    AddMemberModalComponent.prototype.close = function () {
        this.modal.hide();
    };
    AddMemberModalComponent.prototype.shown = function () {
        this.isShown = true;
        this.getRecordsIfNeeds(null);
    };
    AddMemberModalComponent.prototype.getRecordsIfNeeds = function (event) {
        if (!this.isShown) {
            return;
        }
        this.getRecords(event);
    };
    AddMemberModalComponent.prototype.getRecords = function (event) {
        var _this = this;
        if (this.primengTableHelper.shouldResetPaging(event)) {
            this.paginator.changePage(0);
            return;
        }
        this.primengTableHelper.showLoadingIndicator();
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["FindOrganizationUnitUsersInput"]();
        input.organizationUnitId = this.organizationUnitId;
        input.filter = this.filterText;
        input.skipCount = this.primengTableHelper.getSkipCount(this.paginator, event);
        input.maxResultCount = this.primengTableHelper.getMaxResultCount(this.paginator, event);
        this._organizationUnitService
            .findUsers(input)
            .subscribe(function (result) {
            _this.primengTableHelper.totalRecordsCount = result.totalCount;
            _this.primengTableHelper.records = result.items;
            _this.primengTableHelper.hideLoadingIndicator();
        });
    };
    AddMemberModalComponent.prototype.addUsersToOrganizationUnit = function () {
        var _this = this;
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["UsersToOrganizationUnitInput"]();
        input.organizationUnitId = this.organizationUnitId;
        input.userIds = lodash__WEBPACK_IMPORTED_MODULE_3__["map"](this.selectedMembers, function (selectedMember) { return Number(selectedMember.value); });
        this.saving = true;
        this._organizationUnitService
            .addUsersToOrganizationUnit(input)
            .subscribe(function () {
            _this.notify.success(_this.l('SuccessfullyAdded'));
            _this.membersAdded.emit({
                userIds: input.userIds,
                ouId: input.organizationUnitId
            });
            _this.saving = false;
            _this.close();
            _this.selectedMembers = [];
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddMemberModalComponent.prototype, "membersAdded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], AddMemberModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataTable'),
        __metadata("design:type", primeng_components_table_table__WEBPACK_IMPORTED_MODULE_6__["Table"])
    ], AddMemberModalComponent.prototype, "dataTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginator'),
        __metadata("design:type", primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_5__["Paginator"])
    ], AddMemberModalComponent.prototype, "paginator", void 0);
    AddMemberModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'addMemberModal',
            template: __webpack_require__(/*! ./add-member-modal.component.html */ "./src/app/admin/organization-units/add-member-modal.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["OrganizationUnitServiceProxy"]])
    ], AddMemberModalComponent);
    return AddMemberModalComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/organization-units/create-or-edit-unit-modal.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/organization-units/create-or-edit-unit-modal.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #createOrEditModal=\"bs-modal\" (onShown)=\"onShown()\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"createOrEditModal\"\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\n    <div class=\"modal-dialog modal-lg\">\n\n        <div class=\"modal-content\">\n\n            <form *ngIf=\"active\" #editForm=\"ngForm\" novalidate (ngSubmit)=\"save()\">\n\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">\n                        <span *ngIf=\"organizationUnit.id\">{{l(\"Edit\")}}: {{organizationUnit.displayName}}</span>\n                        <span *ngIf=\"!organizationUnit.id\">{{l(\"NewOrganizationUnit\")}}</span>\n                    </h5>\n                    <button type=\"button\" class=\"close\" (click)=\"close()\" [attr.aria-label]=\"l('Close')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n\n                <div class=\"modal-body\">\n\n                    <div class=\"form-group form-md-line-input form-md-floating-label no-hint\">\n                        <label for=\"OrganizationUnitDisplayName\">{{l(\"Name\")}} *</label>\n                        <input id=\"OrganizationUnitDisplayName\" #organizationUnitDisplayName=\"ngModel\" class=\"form-control\" type=\"text\" name=\"displayName\" [ngClass]=\"{'edited': organizationUnit.displayName}\" [(ngModel)]=\"organizationUnit.displayName\" required maxlength=\"128\">\n                        <validation-messages [formCtrl]=\"organizationUnitDisplayName\"></validation-messages>\n                    </div>\n\n                </div>\n\n                <div class=\"modal-footer\">\n                    <button [disabled]=\"saving\" type=\"button\" class=\"btn btn-default\" (click)=\"close()\">{{l(\"Cancel\")}}</button>\n                    <button type=\"submit\" class=\"btn btn-primary blue\" [disabled]=\"!editForm.form.valid\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\"><i class=\"fa fa-save\"></i> <span>{{l(\"Save\")}}</span></button>\n                </div>\n\n            </form>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/organization-units/create-or-edit-unit-modal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/organization-units/create-or-edit-unit-modal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateOrEditUnitModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrEditUnitModalComponent", function() { return CreateOrEditUnitModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
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




var CreateOrEditUnitModalComponent = /** @class */ (function (_super) {
    __extends(CreateOrEditUnitModalComponent, _super);
    function CreateOrEditUnitModalComponent(injector, _organizationUnitService, _changeDetector) {
        var _this = _super.call(this, injector) || this;
        _this._organizationUnitService = _organizationUnitService;
        _this._changeDetector = _changeDetector;
        _this.unitCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.unitUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.active = false;
        _this.saving = false;
        _this.organizationUnit = {};
        return _this;
    }
    CreateOrEditUnitModalComponent.prototype.onShown = function () {
        $(this.organizationUnitDisplayNameInput.nativeElement).focus();
    };
    CreateOrEditUnitModalComponent.prototype.show = function (organizationUnit) {
        this.organizationUnit = organizationUnit;
        this.active = true;
        this.modal.show();
        this._changeDetector.detectChanges();
    };
    CreateOrEditUnitModalComponent.prototype.save = function () {
        if (!this.organizationUnit.id) {
            this.createUnit();
        }
        else {
            this.updateUnit();
        }
    };
    CreateOrEditUnitModalComponent.prototype.createUnit = function () {
        var _this = this;
        var createInput = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["CreateOrganizationUnitInput"]();
        createInput.parentId = this.organizationUnit.parentId;
        createInput.displayName = this.organizationUnit.displayName;
        this.saving = true;
        this._organizationUnitService
            .createOrganizationUnit(createInput)
            .finally(function () { return _this.saving = false; })
            .subscribe(function (result) {
            _this.notify.info(_this.l('SavedSuccessfully'));
            _this.close();
            _this.unitCreated.emit(result);
        });
    };
    CreateOrEditUnitModalComponent.prototype.updateUnit = function () {
        var _this = this;
        var updateInput = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["UpdateOrganizationUnitInput"]();
        updateInput.id = this.organizationUnit.id;
        updateInput.displayName = this.organizationUnit.displayName;
        this.saving = true;
        this._organizationUnitService
            .updateOrganizationUnit(updateInput)
            .finally(function () { return _this.saving = false; })
            .subscribe(function (result) {
            _this.notify.info(_this.l('SavedSuccessfully'));
            _this.close();
            _this.unitUpdated.emit(result);
        });
    };
    CreateOrEditUnitModalComponent.prototype.close = function () {
        this.modal.hide();
        this.active = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('createOrEditModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], CreateOrEditUnitModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('organizationUnitDisplayName'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CreateOrEditUnitModalComponent.prototype, "organizationUnitDisplayNameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CreateOrEditUnitModalComponent.prototype, "unitCreated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CreateOrEditUnitModalComponent.prototype, "unitUpdated", void 0);
    CreateOrEditUnitModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'createOrEditOrganizationUnitModal',
            template: __webpack_require__(/*! ./create-or-edit-unit-modal.component.html */ "./src/app/admin/organization-units/create-or-edit-unit-modal.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["OrganizationUnitServiceProxy"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], CreateOrEditUnitModalComponent);
    return CreateOrEditUnitModalComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/organization-units/organization-tree.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/organization-units/organization-tree.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-portlet m-portlet--mobile\">\n    <div class=\"m-portlet__head\">\n        <div class=\"m-portlet__head-caption\">\n            <div class=\"m-portlet__head-title\">\n                <h3 class=\"m-portlet__head-text\">\n                    {{l(\"OrganizationTree\")}}\n                </h3>\n            </div>\n        </div>\n        <div class=\"m-portlet__head-tools\">\n            <button *ngIf=\"isGranted('Pages.Administration.OrganizationUnits.ManageOrganizationTree')\" (click)=\"addUnit(null)\" class=\"btn btn-primary\">\n                <i class=\"fa fa-plus\"></i> {{l(\"AddRootUnit\")}}\n            </button>\n        </div>\n    </div>\n    <div class=\"m-portlet__body\">\n        <div #tree></div>\n        <div *ngIf=\"!totalUnitCount\" class=\"text-muted\">\n            {{l(\"NoOrganizationUnitDefinedYet\")}}\n        </div>\n    </div>\n</div>\n\n<createOrEditOrganizationUnitModal #createOrEditOrganizationUnitModal (unitCreated)=\"unitCreated($event)\" (unitUpdated)=\"unitUpdated($event)\"></createOrEditOrganizationUnitModal>\n"

/***/ }),

/***/ "./src/app/admin/organization-units/organization-tree.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/admin/organization-units/organization-tree.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ou-text {\n  color: #999;\n}\n.ou-text.ou-text-has-members {\n  color: #000;\n}\n.ou-text.ou-text-has-members .ou-text-member-count {\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/admin/organization-units/organization-tree.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/organization-units/organization-tree.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrganizationTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationTreeComponent", function() { return OrganizationTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_helpers_HtmlHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/helpers/HtmlHelper */ "./src/shared/helpers/HtmlHelper.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _create_or_edit_unit_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-or-edit-unit-modal.component */ "./src/app/admin/organization-units/create-or-edit-unit-modal.component.ts");
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







var OrganizationTreeComponent = /** @class */ (function (_super) {
    __extends(OrganizationTreeComponent, _super);
    function OrganizationTreeComponent(injector, _organizationUnitService) {
        var _this = _super.call(this, injector) || this;
        _this._organizationUnitService = _organizationUnitService;
        _this.ouSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.totalUnitCount = 0;
        return _this;
    }
    Object.defineProperty(OrganizationTreeComponent.prototype, "selectedOu", {
        set: function (ou) {
            this._selectedOu = ou;
            this.ouSelected.emit(ou);
        },
        enumerable: true,
        configurable: true
    });
    OrganizationTreeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this;
        this._$tree = $(this.tree.nativeElement);
        this.getTreeDataFromServer(function (treeData) {
            _this.totalUnitCount = treeData.length;
            var jsTreePlugins = [
                'types',
                'contextmenu',
                'wholerow',
                'sort'
            ];
            if (_this.isGranted('Pages.Administration.OrganizationUnits.ManageOrganizationTree')) {
                jsTreePlugins.push('dnd');
            }
            _this._$tree
                .on('changed.jstree', function (e, data) {
                if (data.selected.length !== 1) {
                    _this.selectedOu = null;
                }
                else {
                    _this.selectedOu = data.instance.get_node(data.selected[0]).original;
                }
            })
                .on('move_node.jstree', function (e, data) {
                if (!_this.isGranted('Pages.Administration.OrganizationUnits.ManageOrganizationTree')) {
                    _this._$tree.jstree('refresh'); //rollback
                    return;
                }
                var parentNodeName = (!data.parent || data.parent === '#')
                    ? _this.l('Root')
                    : _this._$tree.jstree('get_node', data.parent).original.displayName;
                _this.message.confirm(_this.l('OrganizationUnitMoveConfirmMessage', data.node.original.displayName, parentNodeName), function (isConfirmed) {
                    if (isConfirmed) {
                        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["MoveOrganizationUnitInput"]();
                        input.id = data.node.id;
                        input.newParentId = (!data.parent || data.parent === '#') ? undefined : data.parent;
                        _this._organizationUnitService.moveOrganizationUnit(input)
                            .catch(function (error) {
                            _this._$tree.jstree('refresh'); //rollback
                            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
                        })
                            .subscribe(function () {
                            _this.notify.success(_this.l('SuccessfullyMoved'));
                            _this.reload();
                        });
                    }
                    else {
                        _this._$tree.jstree('refresh'); //rollback
                    }
                });
            })
                .jstree({
                'core': {
                    data: treeData,
                    multiple: false,
                    check_callback: function () { return true; }
                },
                types: {
                    'default': {
                        'icon': 'fa fa-folder m--font-warning'
                    },
                    'file': {
                        'icon': 'fa fa-file m--font-warning'
                    }
                },
                contextmenu: {
                    items: function (node) { return self.contextMenu(node, self); }
                },
                sort: function (node1, node2) {
                    if (this.get_node(node2).original.displayName < this.get_node(node1).original.displayName) {
                        return 1;
                    }
                    return -1;
                },
                plugins: jsTreePlugins
            });
            _this._$tree.on('click', '.ou-text .fa-caret-down', function (e) {
                e.preventDefault();
                var ouId = $(this).closest('.ou-text').attr('data-ou-id');
                setTimeout(function () {
                    self._$tree.jstree('show_contextmenu', ouId);
                }, 100);
            });
        });
    };
    OrganizationTreeComponent.prototype.reload = function () {
        var _this = this;
        this.getTreeDataFromServer(function (treeData) {
            _this.totalUnitCount = treeData.length;
            _this._$tree.jstree(true).settings.core.data = treeData;
            _this._$tree.jstree('refresh');
        });
    };
    OrganizationTreeComponent.prototype.getTreeDataFromServer = function (callback) {
        var _this = this;
        this._organizationUnitService.getOrganizationUnits().subscribe(function (result) {
            var treeData = lodash__WEBPACK_IMPORTED_MODULE_4__["map"](result.items, function (item) { return ({
                id: item.id,
                parent: item.parentId ? item.parentId : '#',
                code: item.code,
                displayName: item.displayName,
                memberCount: item.memberCount,
                text: _this.generateTextOnTree(item),
                dto: item,
                state: {
                    opened: true
                }
            }); });
            callback(treeData);
        });
    };
    OrganizationTreeComponent.prototype.generateTextOnTree = function (ou) {
        var itemClass = ou.memberCount > 0 ? ' ou-text-has-members' : ' ou-text-no-members';
        return '<span title="' + ou.code + '" class="ou-text' + itemClass + '" data-ou-id="' + ou.id + '">' + _shared_helpers_HtmlHelper__WEBPACK_IMPORTED_MODULE_2__["HtmlHelper"].encodeText(ou.displayName) + ' (<span class="ou-text-member-count">' + ou.memberCount + '</span>) <i class="fa fa-caret-down text-muted"></i></span>';
    };
    OrganizationTreeComponent.prototype.contextMenu = function (node, self) {
        var _this = this;
        var canManageOrganizationTree = self.isGranted('Pages.Administration.OrganizationUnits.ManageOrganizationTree');
        var items = {
            editUnit: {
                label: self.l('Edit'),
                _disabled: !canManageOrganizationTree,
                action: function () {
                    self._updatingNode = node;
                    self.createOrEditOrganizationUnitModal.show({
                        id: node.id,
                        displayName: node.original.displayName
                    });
                }
            },
            addSubUnit: {
                label: self.l('AddSubUnit'),
                _disabled: !canManageOrganizationTree,
                action: function () {
                    self.addUnit(node.id);
                }
            },
            'delete': {
                label: self.l('Delete'),
                _disabled: !canManageOrganizationTree,
                action: function (data) {
                    var instance = $.jstree.reference(data.reference);
                    _this.message.confirm(_this.l('OrganizationUnitDeleteWarningMessage', node.original.displayName), function (isConfirmed) {
                        if (isConfirmed) {
                            _this._organizationUnitService.deleteOrganizationUnit(node.id).subscribe(function () {
                                _this.selectedOu = null;
                                _this.notify.success(_this.l('SuccessfullyDeleted'));
                                instance.delete_node(node);
                            });
                        }
                    });
                }
            }
        };
        return items;
    };
    OrganizationTreeComponent.prototype.addUnit = function (parentId) {
        this.createOrEditOrganizationUnitModal.show({
            parentId: parentId
        });
    };
    OrganizationTreeComponent.prototype.unitCreated = function (ou) {
        var instance = $.jstree.reference(this._$tree);
        instance.create_node(ou.parentId ? instance.get_node(ou.parentId) : '#', {
            id: ou.id,
            parent: ou.parentId ? ou.parentId : '#',
            code: ou.code,
            displayName: ou.displayName,
            memberCount: 0,
            text: this.generateTextOnTree(ou),
            state: {
                opened: true
            }
        });
        this.totalUnitCount += 1;
    };
    OrganizationTreeComponent.prototype.unitUpdated = function (ou) {
        var instance = $.jstree.reference(this._$tree);
        this._updatingNode.original.displayName = ou.displayName;
        instance.rename_node(this._updatingNode, this.generateTextOnTree(ou));
    };
    OrganizationTreeComponent.prototype.membersAdded = function (data) {
        this.incrementMemberCount(data.ouId, data.userIds.length);
    };
    OrganizationTreeComponent.prototype.memberRemoved = function (data) {
        this.incrementMemberCount(data.ouId, -1);
    };
    OrganizationTreeComponent.prototype.incrementMemberCount = function (ouId, incrementAmount) {
        var treeNode = this._$tree.jstree('get_node', ouId);
        treeNode.original.memberCount = treeNode.original.memberCount + incrementAmount;
        this._$tree.jstree('rename_node', treeNode, this.generateTextOnTree(treeNode.original));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrganizationTreeComponent.prototype, "ouSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tree'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OrganizationTreeComponent.prototype, "tree", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('createOrEditOrganizationUnitModal'),
        __metadata("design:type", _create_or_edit_unit_modal_component__WEBPACK_IMPORTED_MODULE_6__["CreateOrEditUnitModalComponent"])
    ], OrganizationTreeComponent.prototype, "createOrEditOrganizationUnitModal", void 0);
    OrganizationTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'organization-tree',
            template: __webpack_require__(/*! ./organization-tree.component.html */ "./src/app/admin/organization-units/organization-tree.component.html"),
            styles: [__webpack_require__(/*! ./organization-tree.component.less */ "./src/app/admin/organization-units/organization-tree.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["OrganizationUnitServiceProxy"]])
    ], OrganizationTreeComponent);
    return OrganizationTreeComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/organization-units/organization-unit-members.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/organization-units/organization-unit-members.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-portlet m-portlet--mobile\">\n    <div class=\"m-portlet__head\">\n        <div class=\"m-portlet__head-caption\">\n            <div class=\"m-portlet__head-title\">\n                <h3 class=\"m-portlet__head-text\">\n                    <span *ngIf=\"organizationUnit\">{{organizationUnit.displayName}}</span>\n                    <span *ngIf=\"!organizationUnit\">{{l(\"Members\")}}</span>\n                </h3>\n            </div>\n        </div>\n        <div class=\"m-portlet__head-tools\" *ngIf=\"organizationUnit\">\n            <button *ngIf=\"isGranted('Pages.Administration.OrganizationUnits.ManageMembers')\" (click)=\"openAddModal()\" class=\"btn btn-primary\">\n                <i class=\"fa fa-plus\"></i> {{l(\"AddMember\")}}\n            </button>\n        </div>\n    </div>\n    <div class=\"m-portlet__body\">\n        <div id=\"OuMembersTable\">\n            <!--<Primeng-TurboTable-Start>-->\n            <div class=\"primeng-datatable-container\" [busyIf]=\"primengTableHelper.isLoading\" [hidden]=\"!organizationUnit\">\n                <p-table #dataTable\n                             (onLazyLoad)=\"getOrganizationUnitUsers($event)\"\n                             [value]=\"primengTableHelper.records\"\n                             rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                             [paginator]=\"false\"\n                             [lazy]=\"true\"\n                             [responsive]=\"primengTableHelper.isResponsive\">\n                    <ng-template pTemplate=\"header\">\n                        <tr>\n                            <th style=\"width:15%\"\n                                [hidden]=\"!permission.isGranted('Pages.Administration.OrganizationUnits.ManageMembers')\">{{l('Delete')}}</th>\n                            <th pSortableColumn=\"userName\">\n                                {{l('UserName')}}\n                                <p-sortIcon field=\"userName\"></p-sortIcon>\n                            </th>\n                            <th pSortableColumn=\"addedTime\">\n                                {{l('AddedTime')}}\n                                <p-sortIcon field=\"addedTime\"></p-sortIcon>\n                            </th>\n                        </tr>\n                    </ng-template>\n                    <ng-template pTemplate=\"body\" let-record=\"$implicit\">\n                        <tr>\n                            <td [hidden]=\"!permission.isGranted('Pages.Administration.OrganizationUnits.ManageMembers')\">\n                                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\n                                        (click)=\"removeMember(record)\"\n                                        title=\"{{l('Delete')}}\">\n                                    <i class=\"fa fa-times\" [attr.aria-label]=\"l('Delete')\"></i>\n                                </button>\n                            </td>\n                            <td >\n                                {{record.userName}}\n                            </td>\n                            <td >\n                                {{record.addedTime | momentFormat:'L'}}\n                            </td>\n                        </tr>\n                    </ng-template>\n                </p-table>\n                <div class=\"primeng-paging-container\">\n                    <p-paginator rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                                 #paginator\n                                 (onPageChange)=\"getOrganizationUnitUsers($event)\"\n                                 [totalRecords]=\"primengTableHelper.totalRecordsCount\"\n                                 [rowsPerPageOptions]=\"primengTableHelper.predefinedRecordsCountPerPage\">\n                    </p-paginator>\n                    <span class=\"total-records-count\">\n                        {{l('TotalRecordsCount', primengTableHelper.totalRecordsCount)}}\n                    </span>\n                </div>\n            </div>\n            <!--<Primeng-TurboTable-End>-->\n        </div>\n\n        <div *ngIf=\"!organizationUnit\" class=\"text-muted\">\n            {{l(\"SelectAnOrganizationUnitToSeeMembers\")}}\n        </div>\n    </div>\n</div>\n\n\n<addMemberModal #addMemberModal (membersAdded)=\"addMembers($event)\"></addMemberModal>\n"

/***/ }),

/***/ "./src/app/admin/organization-units/organization-unit-members.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/organization-units/organization-unit-members.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OrganizationUnitMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationUnitMembersComponent", function() { return OrganizationUnitMembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_admin_organization_units_add_member_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/admin/organization-units/add-member-modal.component */ "./src/app/admin/organization-units/add-member-modal.component.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/paginator/paginator */ "./node_modules/primeng/components/paginator/paginator.js");
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/components/table/table */ "./node_modules/primeng/components/table/table.js");
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_components_table_table__WEBPACK_IMPORTED_MODULE_5__);
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






var OrganizationUnitMembersComponent = /** @class */ (function (_super) {
    __extends(OrganizationUnitMembersComponent, _super);
    function OrganizationUnitMembersComponent(injector, _changeDetector, _organizationUnitService) {
        var _this = _super.call(this, injector) || this;
        _this._changeDetector = _changeDetector;
        _this._organizationUnitService = _organizationUnitService;
        _this.memberRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.membersAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this._organizationUnit = null;
        return _this;
    }
    Object.defineProperty(OrganizationUnitMembersComponent.prototype, "organizationUnit", {
        get: function () {
            return this._organizationUnit;
        },
        set: function (ou) {
            if (this._organizationUnit === ou) {
                return;
            }
            this._organizationUnit = ou;
            this.addMemberModal.organizationUnitId = ou.id;
            if (ou) {
                this.refreshMembers();
            }
        },
        enumerable: true,
        configurable: true
    });
    OrganizationUnitMembersComponent.prototype.ngOnInit = function () {
    };
    OrganizationUnitMembersComponent.prototype.getOrganizationUnitUsers = function (event) {
        var _this = this;
        if (!this._organizationUnit) {
            return;
        }
        if (this.primengTableHelper.shouldResetPaging(event)) {
            this.paginator.changePage(0);
            return;
        }
        this.primengTableHelper.showLoadingIndicator();
        this._organizationUnitService.getOrganizationUnitUsers(this._organizationUnit.id, this.primengTableHelper.getSorting(this.dataTable), this.primengTableHelper.getMaxResultCount(this.paginator, event), this.primengTableHelper.getSkipCount(this.paginator, event)).subscribe(function (result) {
            _this.primengTableHelper.totalRecordsCount = result.totalCount;
            _this.primengTableHelper.records = result.items;
            _this.primengTableHelper.hideLoadingIndicator();
        });
    };
    OrganizationUnitMembersComponent.prototype.reloadPage = function () {
        this.paginator.changePage(this.paginator.getPage());
    };
    OrganizationUnitMembersComponent.prototype.refreshMembers = function () {
        this.reloadPage();
    };
    OrganizationUnitMembersComponent.prototype.openAddModal = function () {
        this.addMemberModal.show();
    };
    OrganizationUnitMembersComponent.prototype.removeMember = function (user) {
        var _this = this;
        this.message.confirm(this.l('RemoveUserFromOuWarningMessage', user.userName, this.organizationUnit.displayName), function (isConfirmed) {
            if (isConfirmed) {
                _this._organizationUnitService
                    .removeUserFromOrganizationUnit(user.id, _this.organizationUnit.id)
                    .subscribe(function () {
                    _this.notify.success(_this.l('SuccessfullyRemoved'));
                    _this.memberRemoved.emit({
                        userId: user.id,
                        ouId: _this.organizationUnit.id
                    });
                    _this.refreshMembers();
                });
            }
        });
    };
    OrganizationUnitMembersComponent.prototype.addMembers = function (data) {
        this.membersAdded.emit({
            userIds: data.userIds,
            ouId: data.ouId
        });
        this.refreshMembers();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrganizationUnitMembersComponent.prototype, "memberRemoved", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrganizationUnitMembersComponent.prototype, "membersAdded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addMemberModal'),
        __metadata("design:type", _app_admin_organization_units_add_member_modal_component__WEBPACK_IMPORTED_MODULE_1__["AddMemberModalComponent"])
    ], OrganizationUnitMembersComponent.prototype, "addMemberModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataTable'),
        __metadata("design:type", primeng_components_table_table__WEBPACK_IMPORTED_MODULE_5__["Table"])
    ], OrganizationUnitMembersComponent.prototype, "dataTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginator'),
        __metadata("design:type", primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_4__["Paginator"])
    ], OrganizationUnitMembersComponent.prototype, "paginator", void 0);
    OrganizationUnitMembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'organization-unit-members',
            template: __webpack_require__(/*! ./organization-unit-members.component.html */ "./src/app/admin/organization-units/organization-unit-members.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["OrganizationUnitServiceProxy"]])
    ], OrganizationUnitMembersComponent);
    return OrganizationUnitMembersComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/organization-units/organization-units.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/organization-units/organization-units.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-subheader\">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto\">\n                <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                    <span>{{l(\"OrganizationUnits\")}}</span>\n                </h3>\n                <span class=\"m-section__sub\">\n                    {{l(\"OrganizationUnitsHeaderInfo\")}}\n                </span>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"m-content\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <organization-tree #ouTree (ouSelected)=\"ouMembers.organizationUnit = $event\"></organization-tree>\n            </div>\n            <div class=\"col-lg-6\">\n                <organization-unit-members #ouMembers (membersAdded)=\"ouTree.membersAdded($event)\" (memberRemoved)=\"ouTree.memberRemoved($event)\"></organization-unit-members>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/organization-units/organization-units.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/organization-units/organization-units.component.ts ***!
  \**************************************************************************/
/*! exports provided: OrganizationUnitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationUnitsComponent", function() { return OrganizationUnitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _organization_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organization-tree.component */ "./src/app/admin/organization-units/organization-tree.component.ts");
/* harmony import */ var _organization_unit_members_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organization-unit-members.component */ "./src/app/admin/organization-units/organization-unit-members.component.ts");
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





var OrganizationUnitsComponent = /** @class */ (function (_super) {
    __extends(OrganizationUnitsComponent, _super);
    function OrganizationUnitsComponent(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ouMembers'),
        __metadata("design:type", _organization_unit_members_component__WEBPACK_IMPORTED_MODULE_4__["OrganizationUnitMembersComponent"])
    ], OrganizationUnitsComponent.prototype, "ouMembers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ouTree'),
        __metadata("design:type", _organization_tree_component__WEBPACK_IMPORTED_MODULE_3__["OrganizationTreeComponent"])
    ], OrganizationUnitsComponent.prototype, "ouTree", void 0);
    OrganizationUnitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./organization-units.component.html */ "./src/app/admin/organization-units/organization-units.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], OrganizationUnitsComponent);
    return OrganizationUnitsComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/roles/create-or-edit-role-modal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/roles/create-or-edit-role-modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #createOrEditModal=\"bs-modal\" (onShown)=\"onShown()\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"createOrEditModal\"\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <form *ngIf=\"active\" #roleForm=\"ngForm\" novalidate (ngSubmit)=\"save()\" autocomplete=\"off\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">\n                        <span *ngIf=\"role.id\">{{l(\"EditRole\")}}: {{role.displayName}}</span>\n                        <span *ngIf=\"!role.id\">{{l(\"CreateNewRole\")}}</span>\n                    </h4>\n                    <button type=\"button\" class=\"close\" (click)=\"close()\" [attr.aria-label]=\"l('Close')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <tabset class=\"tab-container tabbable-line\">\n                        <tab heading=\"{{l('RoleName')}}\" customClass=\"m-tabs__item\">\n                            <div class=\"form-group\">\n                                <label>{{l(\"RoleName\")}} *</label>\n                                <input #roleNameInput=\"ngModel\" class=\"form-control\" type=\"text\" name=\"DisplayName\" [(ngModel)]=\"role.displayName\" required maxlength=\"64\">\n                                <validation-messages [formCtrl]=\"roleNameInput\"></validation-messages>\n                            </div>\n\n                            <div class=\"m-checkbox-list\">\n                                <label class=\"m-checkbox\">\n                                    <input id=\"EditRole_IsDefault\" type=\"checkbox\" name=\"IsDefault\" [(ngModel)]=\"role.isDefault\">\n                                    {{l(\"Default\")}}\n                                    <span></span>\n                                </label>\n                                <span class=\"help-block\">{{l(\"DefaultRole_Description\")}}</span>\n                            </div>\n                        </tab>\n                        <tab heading=\"{{l('Permissions')}}\" customClass=\"m-tabs__item\">\n                            <permission-tree #permissionTree></permission-tree>\n                        </tab>\n                    </tabset>\n                    <div class=\"alert alert-warning\" style=\"margin-top: 30px;\">\n                        <em>{{l('Note_RefreshPageForPermissionChanges')}}</em>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button [disabled]=\"saving\" type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">{{l(\"Cancel\")}}</button>\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!roleForm.form.valid\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\"><i class=\"fa fa-save\"></i> <span>{{l(\"Save\")}}</span></button>\n                </div>\n\n            </form>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/roles/create-or-edit-role-modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/roles/create-or-edit-role-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateOrEditRoleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrEditRoleModalComponent", function() { return CreateOrEditRoleModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _shared_permission_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/permission-tree.component */ "./src/app/admin/shared/permission-tree.component.ts");
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





var CreateOrEditRoleModalComponent = /** @class */ (function (_super) {
    __extends(CreateOrEditRoleModalComponent, _super);
    function CreateOrEditRoleModalComponent(injector, _roleService) {
        var _this = _super.call(this, injector) || this;
        _this._roleService = _roleService;
        _this.modalSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.active = false;
        _this.saving = false;
        _this.role = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["RoleEditDto"]();
        return _this;
    }
    CreateOrEditRoleModalComponent.prototype.ngAfterViewChecked = function () {
        //Temporary fix for: https://github.com/valor-software/ngx-bootstrap/issues/1508
        $('tabset ul.nav').addClass('m-tabs-line');
        $('tabset ul.nav li a.nav-link').addClass('m-tabs__link');
    };
    CreateOrEditRoleModalComponent.prototype.show = function (roleId) {
        var _this = this;
        var self = this;
        self.active = true;
        self._roleService.getRoleForEdit(roleId).subscribe(function (result) {
            self.role = result.role;
            _this.permissionTree.editData = result;
            self.modal.show();
        });
    };
    CreateOrEditRoleModalComponent.prototype.onShown = function () {
        $(this.roleNameInput.nativeElement).focus();
    };
    CreateOrEditRoleModalComponent.prototype.save = function () {
        var _this = this;
        var self = this;
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["CreateOrUpdateRoleInput"]();
        input.role = self.role;
        input.grantedPermissionNames = self.permissionTree.getGrantedPermissionNames();
        this.saving = true;
        this._roleService.createOrUpdateRole(input)
            .finally(function () { return _this.saving = false; })
            .subscribe(function () {
            _this.notify.info(_this.l('SavedSuccessfully'));
            _this.close();
            _this.modalSave.emit(null);
        });
    };
    CreateOrEditRoleModalComponent.prototype.close = function () {
        this.active = false;
        this.modal.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('roleNameInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CreateOrEditRoleModalComponent.prototype, "roleNameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('createOrEditModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], CreateOrEditRoleModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('permissionTree'),
        __metadata("design:type", _shared_permission_tree_component__WEBPACK_IMPORTED_MODULE_4__["PermissionTreeComponent"])
    ], CreateOrEditRoleModalComponent.prototype, "permissionTree", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CreateOrEditRoleModalComponent.prototype, "modalSave", void 0);
    CreateOrEditRoleModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'createOrEditRoleModal',
            template: __webpack_require__(/*! ./create-or-edit-role-modal.component.html */ "./src/app/admin/roles/create-or-edit-role-modal.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["RoleServiceProxy"]])
    ], CreateOrEditRoleModalComponent);
    return CreateOrEditRoleModalComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/roles/roles.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/roles/roles.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n\n    <div class=\"m-subheader \">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto col-xs-6\">\n                <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                    <span>{{l(\"Roles\")}}</span>\n                </h3>\n                <span class=\"m-section__sub\">\n                    {{l(\"RolesHeaderInfo\")}}\n                </span>\n            </div>\n            <div class=\"col-xs-6 text-right\">\n                <button (click)=\"createRole()\" *ngIf=\"isGranted('Pages.Administration.Roles.Create')\" class=\"btn btn-primary blue\"><i class=\"fa fa-plus\"></i> {{l(\"CreateNewRole\")}}</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"m-content\">\n        <div class=\"m-portlet m-portlet--mobile\">\n            <div class=\"m-portlet__body\">\n                <div class=\"m-form m-form--label-align-right\">\n                    <div class=\"row m--margin-bottom-10\">\n                        <div class=\"col-xl-6\">\n                            <div class=\"form-group\">\n                                <permission-combo [(selectedPermission)]=\"selectedPermission\"></permission-combo>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-6 text-right\">\n                            <button name=\"RefreshButton\" class=\"btn btn-metal\" (click)=\"getRoles()\"><i class=\"la la-refresh\"></i> {{l('Refresh')}}</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row align-items-center\">\n                    <!--<Primeng-TurboTable-Start>-->\n                    <div class=\"primeng-datatable-container\" [busyIf]=\"primengTableHelper.isLoading\">\n                        <p-table #dataTable\n                                 (onLazyLoad)=\"getRoles()\"\n                                 [value]=\"primengTableHelper.records\"\n                                 rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                                 [paginator]=\"false\"\n                                 [lazy]=\"true\"\n                                 [responsive]=\"primengTableHelper.isResponsive\">\n\n                            <ng-template pTemplate=\"header\">\n                                <tr>\n                                    <th style=\"width: 130px\" [hidden]=\"!isGrantedAny('Pages.Administration.Roles.Edit', 'Pages.Administration.Roles.Delete')\">{{l('Actions')}}</th>\n                                    <th>{{l('RoleName')}}</th>\n                                    <th>{{l('CreationTime')}}</th>\n                                </tr>\n                            </ng-template>\n\n                            <ng-template pTemplate=\"body\" let-record=\"$implicit\">\n                                <tr>\n                                    <td [hidden]=\"!isGrantedAny('Pages.Administration.Roles.Edit', 'Pages.Administration.Roles.Delete')\">\n                                        <div class=\"btn-group dropdown\">\n                                            <button class=\"dropdown-toggle btn btn-brand btn-sm dropdown-toggle btn-primary\"\n                                                    data-toggle=\"dropdown\"\n                                                    aria-haspopup=\"true\"\n                                                    aria-expanded=\"false\">\n                                                <i class=\"fa fa-cog\"></i><span class=\"caret\"></span> {{l(\"Actions\")}}\n                                            </button>\n                                            <ul class=\"dropdown-menu\">\n                                                <li>\n                                                    <a *ngIf=\"permission.isGranted('Pages.Administration.Roles.Edit')\"\n                                                       (click)=\"createOrEditRoleModal.show(record.id)\">{{l('Edit')}}</a>\n                                                </li>\n                                                <li>\n                                                    <a *ngIf=\"!record.isStatic && permission.isGranted('Pages.Administration.Roles.Delete')\"\n                                                       (click)=\"deleteRole(record)\">{{l('Delete')}}</a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <span>\n                                            {{record.displayName}}\n                                            <span *ngIf=\"record.isStatic\"\n                                                  class=\"m-badge m-badge--brand m-badge--wide\"\n                                                  data-toggle=\"tooltip\"\n                                                  title=\"{{l('StaticRole_Tooltip')}}\"\n                                                  data-placement=\"top\">\n                                                {{l('Static')}}\n                                            </span>\n                                            <span *ngIf=\"record.isDefault\"\n                                                  class=\"m-badge m-badge--metal m-badge--wide\"\n                                                  data-toggle=\"tooltip\"\n                                                  title=\"{{l('DefaultRole_Description')}}\"\n                                                  data-placement=\"top\">\n                                                {{l('Default')}}\n                                            </span>\n                                        </span>\n                                    </td>\n                                    <td>\n                                        {{record.creationTime | momentFormat:'L'}}\n                                    </td>\n                                </tr>\n                            </ng-template>\n                        </p-table>\n                        <div class=\"ui-table-footer\">\n                            {{l('TotalRecordsCount', primengTableHelper.totalRecordsCount)}}\n                        </div>\n                    </div>\n                    <!--<Primeng-TurboTable-End>-->\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <createOrEditRoleModal #createOrEditRoleModal (modalSave)=\"getRoles()\"></createOrEditRoleModal>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/roles/roles.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/roles/roles.component.ts ***!
  \************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var _abp_notify_notify_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/notify/notify.service */ "./node_modules/abp-ng2-module/dist/src/notify/notify.service.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _shared_utils_file_download_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/utils/file-download.service */ "./src/shared/utils/file-download.service.ts");
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/components/table/table */ "./node_modules/primeng/components/table/table.js");
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_components_table_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _create_or_edit_role_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-or-edit-role-modal.component */ "./src/app/admin/roles/create-or-edit-role-modal.component.ts");
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








var RolesComponent = /** @class */ (function (_super) {
    __extends(RolesComponent, _super);
    function RolesComponent(injector, _roleService, _notifyService, _fileDownloadService) {
        var _this = _super.call(this, injector) || this;
        _this._roleService = _roleService;
        _this._notifyService = _notifyService;
        _this._fileDownloadService = _fileDownloadService;
        //Filters
        _this.selectedPermission = '';
        return _this;
    }
    RolesComponent.prototype.getRoles = function () {
        var _this = this;
        this.primengTableHelper.showLoadingIndicator();
        var permission = this.permission ? this.selectedPermission : undefined;
        this._roleService.getRoles(permission).subscribe(function (result) {
            _this.primengTableHelper.records = result.items;
            _this.primengTableHelper.totalRecordsCount = result.items.length;
            _this.primengTableHelper.hideLoadingIndicator();
        });
    };
    RolesComponent.prototype.createRole = function () {
        this.createOrEditRoleModal.show();
    };
    RolesComponent.prototype.deleteRole = function (role) {
        var _this = this;
        var self = this;
        self.message.confirm(self.l('RoleDeleteWarningMessage', role.displayName), function (isConfirmed) {
            if (isConfirmed) {
                _this._roleService.deleteRole(role.id).subscribe(function () {
                    _this.getRoles();
                    abp.notify.success(_this.l('SuccessfullyDeleted'));
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('createOrEditRoleModal'),
        __metadata("design:type", _create_or_edit_role_modal_component__WEBPACK_IMPORTED_MODULE_7__["CreateOrEditRoleModalComponent"])
    ], RolesComponent.prototype, "createOrEditRoleModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTable'),
        __metadata("design:type", primeng_components_table_table__WEBPACK_IMPORTED_MODULE_6__["Table"])
    ], RolesComponent.prototype, "dataTable", void 0);
    RolesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./roles.component.html */ "./src/app/admin/roles/roles.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["RoleServiceProxy"],
            _abp_notify_notify_service__WEBPACK_IMPORTED_MODULE_0__["NotifyService"],
            _shared_utils_file_download_service__WEBPACK_IMPORTED_MODULE_5__["FileDownloadService"]])
    ], RolesComponent);
    return RolesComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/settings/host-settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/settings/host-settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-subheader\">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto col-sm-12 col-md-6\">\n                <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                    <span>{{l(\"Settings\")}}</span>\n                </h3>\n                <span class=\"m-section__sub\">\n                    {{l(\"SettingsHeaderInfo\")}}\n                </span>\n            </div>\n            <div class=\"col-sm-12 col-md-6 text-right\">\n                <button class=\"btn btn-primary\" (click)=\"saveAll()\"><i class=\"la la-floppy-o\"></i> {{l(\"SaveAll\")}}</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"m-content\">\n        <div class=\"m-portlet m-portlet--mobile\">\n            <div class=\"m-portlet__body\">\n                <tabset class=\"tab-container tabbable-line\" *ngIf=\"hostSettings\">\n                    <tab heading=\"{{l('General')}}\" *ngIf=\"showTimezoneSelection\" customClass=\"m-tabs__item\">\n                        <div class=\"form-group\">\n                            <label for=\"Timezone\">{{l(\"Timezone\")}}</label>\n                            <timezone-combo id=\"Timezone\" [(selectedTimeZone)]=\"hostSettings.general.timezone\" defaultTimezoneScope=\"{{defaultTimezoneScope}}\"></timezone-combo>\n                        </div>\n                    </tab>\n                    <tab heading=\"{{l('TenantManagement')}}\" *ngIf=\"hostSettings.tenantManagement\" customClass=\"m-tabs__item\">\n                        <div class=\"m-form\">\n                            <h5>{{l(\"FormBasedRegistration\")}}</h5>\n                            <div class=\"m-checkbox-list\">\n                                <div class=\"form-group\">\n                                    <label for=\"Setting_AllowSelfRegistration\" class=\"m-checkbox\">\n                                        <input id=\"Setting_AllowSelfRegistration\" type=\"checkbox\" name=\"AllowSelfRegistration\" [(ngModel)]=\"hostSettings.tenantManagement.allowSelfRegistration\">\n                                        {{l(\"AllowTenantsToRegisterThemselves\")}}\n                                        <span></span>\n                                    </label>\n                                    <span class=\"m-form__help\">{{l(\"AllowTenantsToRegisterThemselves_Hint\")}}</span>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"Setting_IsNewRegisteredTenantActiveByDefault\" class=\"m-checkbox\" [hidden]=\"!hostSettings.tenantManagement.allowSelfRegistration\">\n                                        <input id=\"Setting_IsNewRegisteredTenantActiveByDefault\" type=\"checkbox\" name=\"IsNewRegisteredTenantActiveByDefault\"\n                                               [(ngModel)]=\"hostSettings.tenantManagement.isNewRegisteredTenantActiveByDefault\">\n                                        {{l(\"NewRegisteredTenantsIsActiveByDefault\")}}\n                                        <span></span>\n                                    </label>\n                                    <span class=\"m-form__help\">{{l(\"NewRegisteredTenantsIsActiveByDefault_Hint\")}}</span>\n                                </div>\n                                <label for=\"Setting_UseCaptchaOnRegistration\" class=\"m-checkbox\" [hidden]=\"!hostSettings.tenantManagement.allowSelfRegistration\">\n                                    <input id=\"Setting_UseCaptchaOnRegistration\" type=\"checkbox\" name=\"UseCaptchaOnRegistration\" [(ngModel)]=\"hostSettings.tenantManagement.useCaptchaOnRegistration\">\n                                    {{l(\"UseCaptchaOnRegistration\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"DefaultEditionId\">{{l(\"Edition\")}}</label>\n                                <select id=\"DefaultEditionId\" class=\"form-control\" [(ngModel)]=\"hostSettings.tenantManagement.defaultEditionId\">\n                                    <option value=\"\">{{emptyText}}</option>\n                                    <option *ngFor=\"let edition of editions\" [value]=\"edition.value\">{{edition.displayText}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </tab>\n                    <tab heading=\"{{l('UserManagement')}}\" *ngIf=\"hostSettings.userManagement\" customClass=\"m-tabs__item\">\n                        <div class=\"m-checkbox-list\">\n                            <label for=\"Settings_IsEmailConfirmationRequiredForLogin\" class=\"m-checkbox\">\n                                <input id=\"Settings_IsEmailConfirmationRequiredForLogin\" type=\"checkbox\" name=\"IsEmailConfirmationRequiredForLogin\"\n                                       [(ngModel)]=\"hostSettings.userManagement.isEmailConfirmationRequiredForLogin\">\n                                {{l(\"EmailConfirmationRequiredForLogin\")}}\n                                <span></span>\n                            </label>\n                            <label for=\"Settings_SmsVerificationEnabled\" class=\"m-checkbox\">\n                                <input id=\"Settings_SmsVerificationEnabled\" class=\"md-check\" type=\"checkbox\" name=\"SmsVerificationEnabled\"\n                                       [(ngModel)]=\"hostSettings.userManagement.smsVerificationEnabled\">\n                                {{l(\"SmsVerificationEnabled\")}}\n                                <span></span>\n                            </label>\n                        </div>\n                    </tab>\n                    <tab heading=\"{{l('Security')}}\" *ngIf=\"hostSettings.security\" customClass=\"m-tabs__item\">\n                        <div>\n                            <h5>{{l(\"PasswordComplexity\")}}</h5>\n                            <label for=\"Setting_PasswordComplexity_UseDefaultSettings\" class=\"m-checkbox\">\n                                <input id=\"Setting_PasswordComplexity_UseDefaultSettings\" type=\"checkbox\" name=\"Setting_PasswordComplexity_UseDefaultSettings\"\n                                       [(ngModel)]=\"hostSettings.security.useDefaultPasswordComplexitySettings\">\n                                {{l(\"UseDefaultSettings\")}}\n                                <span></span>\n                            </label>\n                            <div class=\"m-checkbox-list\">\n                                <label for=\"Setting_PasswordComplexity_RequireDigit\" class=\"m-checkbox\">\n                                    <input id=\"Setting_PasswordComplexity_RequireDigit\" type=\"checkbox\" name=\"Setting_PasswordComplexity_RequireDigit\"\n                                           [(ngModel)]=\"hostSettings.security.passwordComplexity.requireDigit\" *ngIf=\"!hostSettings.security.useDefaultPasswordComplexitySettings\">\n                                    <input id=\"Setting_PasswordComplexity_RequireDigit\" type=\"checkbox\" name=\"Setting_PasswordComplexity_RequireDigit\"\n                                           [(ngModel)]=\"hostSettings.security.defaultPasswordComplexity.requireDigit\" *ngIf=\"hostSettings.security.useDefaultPasswordComplexitySettings\"\n                                           disabled>\n                                    {{l(\"PasswordComplexity_RequireDigit\")}}\n                                    <span></span>\n                                </label>\n                                <label for=\"Setting_PasswordComplexity_RequireLowercase\" class=\"m-checkbox\">\n                                    <input id=\"Setting_PasswordComplexity_RequireLowercase\" type=\"checkbox\" name=\"Setting_PasswordComplexity_RequireLowercase\"\n                                           [(ngModel)]=\"hostSettings.security.passwordComplexity.requireLowercase\" *ngIf=\"!hostSettings.security.useDefaultPasswordComplexitySettings\">\n                                    <input id=\"Setting_PasswordComplexity_RequireLowercase\" type=\"checkbox\" name=\"Setting_PasswordComplexity_RequireLowercase\"\n                                           [(ngModel)]=\"hostSettings.security.defaultPasswordComplexity.requireLowercase\" *ngIf=\"hostSettings.security.useDefaultPasswordComplexitySettings\"\n                                           disabled>\n                                    {{l(\"PasswordComplexity_RequireLowercase\")}}\n                                    <span></span>\n                                </label>\n                                <label for=\"Setting_PasswordComplexity_RequireNonAlphanumeric\" class=\"m-checkbox\">\n                                    <input id=\"Setting_PasswordComplexity_RequireNonAlphanumeric\" type=\"checkbox\" name=\"Setting_PasswordComplexity_RequireNonAlphanumeric\"\n                                           [(ngModel)]=\"hostSettings.security.passwordComplexity.requireNonAlphanumeric\" *ngIf=\"!hostSettings.security.useDefaultPasswordComplexitySettings\">\n                                    <input id=\"Setting_PasswordComplexity_RequireNonAlphanumeric\" type=\"checkbox\" name=\"Setting_PasswordComplexity_RequireNonAlphanumeric\"\n                                           [(ngModel)]=\"hostSettings.security.defaultPasswordComplexity.requireNonAlphanumeric\" *ngIf=\"hostSettings.security.useDefaultPasswordComplexitySettings\"\n                                           disabled>\n                                    {{l(\"PasswordComplexity_RequireNonAlphanumeric\")}}\n                                    <span></span>\n                                </label>\n                                <label for=\"Setting_PasswordComplexity_RequireUppercase\" class=\"m-checkbox\">\n                                    <input id=\"Setting_PasswordComplexity_RequireUppercase\" type=\"checkbox\" name=\"Setting_PasswordComplexity_RequireUppercase\"\n                                           [(ngModel)]=\"hostSettings.security.passwordComplexity.requireUppercase\" *ngIf=\"!hostSettings.security.useDefaultPasswordComplexitySettings\">\n                                    <input id=\"Setting_PasswordComplexity_RequireUppercase\" type=\"checkbox\" name=\"Setting_PasswordComplexity_RequireUppercase\"\n                                           [(ngModel)]=\"hostSettings.security.defaultPasswordComplexity.requireUppercase\" *ngIf=\"hostSettings.security.useDefaultPasswordComplexitySettings\"\n                                           disabled>\n                                    {{l(\"PasswordComplexity_RequireUppercase\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>{{l(\"PasswordComplexity_RequiredLength\")}}</label>\n                                <input type=\"number\" name=\"RequiredLength\" class=\"form-control\" [ngClass]=\"{'edited':hostSettings.security.passwordComplexity.requiredLength}\"\n                                       [(ngModel)]=\"hostSettings.security.passwordComplexity.requiredLength\" *ngIf=\"!hostSettings.security.useDefaultPasswordComplexitySettings\">\n                                <input type=\"number\" name=\"RequiredLength\" class=\"form-control\" [ngClass]=\"{'edited':hostSettings.security.defaultPasswordComplexity.requiredLength}\"\n                                       [(ngModel)]=\"hostSettings.security.defaultPasswordComplexity.requiredLength\" *ngIf=\"hostSettings.security.useDefaultPasswordComplexitySettings\"\n                                       disabled>\n                            </div>\n                        </div>\n                        <div>\n                            <h5>{{l(\"UserLockOut\")}}</h5>\n                            <div class=\"form-group\">\n                                <label for=\"Setting_UserLockOut_IsEnabled\" class=\"m-checkbox\">\n                                    <input id=\"Setting_UserLockOut_IsEnabled\" type=\"checkbox\" name=\"Setting_UserLockOut_IsEnabled\" [(ngModel)]=\"hostSettings.security.userLockOut.isEnabled\">\n                                    {{l(\"EnableUserAccountLockingOnFailedLoginAttemts\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                            <div class=\"form-group\" *ngIf=\"hostSettings.security.userLockOut.isEnabled\">\n                                <label for=\"MaxFailedAccessAttemptsBeforeLockout\">{{l(\"MaxFailedAccessAttemptsBeforeLockout\")}}</label>\n                                <input id=\"MaxFailedAccessAttemptsBeforeLockout\" type=\"number\" name=\"MaxFailedAccessAttemptsBeforeLockout\" class=\"form-control\" [ngClass]=\"{'edited':hostSettings.security.userLockOut.maxFailedAccessAttemptsBeforeLockout}\"\n                                       [(ngModel)]=\"hostSettings.security.userLockOut.maxFailedAccessAttemptsBeforeLockout\">\n                            </div>\n                            <div class=\"form-group\" *ngIf=\"hostSettings.security.userLockOut.isEnabled\">\n                                <label for=\"DefaultAccountLockoutDurationAsSeconds\">{{l(\"DefaultAccountLockoutDurationAsSeconds\")}}</label>\n                                <input id=\"DefaultAccountLockoutDurationAsSeconds\" type=\"number\" name=\"DefaultAccountLockoutSeconds\" class=\"form-control\" [ngClass]=\"{'edited':hostSettings.security.userLockOut.defaultAccountLockoutSeconds}\"\n                                       [(ngModel)]=\"hostSettings.security.userLockOut.defaultAccountLockoutSeconds\">\n                            </div>\n                        </div>\n                        <div>\n                            <h5>{{l(\"TwoFactorLogin\")}}</h5>\n                            <div class=\"m-checkbox-list\">\n                                <label for=\"Setting_TwoFactorLogin_IsEnabled\" class=\"m-checkbox\">\n                                    <input id=\"Setting_TwoFactorLogin_IsEnabled\" type=\"checkbox\" name=\"Setting_TwoFactorLogin_IsEnabled\" [(ngModel)]=\"hostSettings.security.twoFactorLogin.isEnabled\">\n                                    {{l(\"EnableTwoFactorLogin\")}}\n                                    <span></span>\n                                </label>\n                                <label for=\"Setting_TwoFactorLogin_IsEmailProviderEnabled\" class=\"m-checkbox\" *ngIf=\"hostSettings.security.twoFactorLogin.isEnabled\">\n                                    <input id=\"Setting_TwoFactorLogin_IsEmailProviderEnabled\" type=\"checkbox\" name=\"Setting_TwoFactorLogin_IsEmailProviderEnabled\"\n                                           [(ngModel)]=\"hostSettings.security.twoFactorLogin.isEmailProviderEnabled\">\n                                    {{l(\"IsEmailVerificationEnabled\")}}\n                                    <span></span>\n                                </label>\n                                <label for=\"Setting_TwoFactorLogin_IsSmsProviderEnabled\" class=\"m-checkbox\" *ngIf=\"hostSettings.security.twoFactorLogin.isEnabled\">\n                                    <input id=\"Setting_TwoFactorLogin_IsSmsProviderEnabled\" type=\"checkbox\" name=\"Setting_TwoFactorLogin_IsSmsProviderEnabled\"\n                                           [(ngModel)]=\"hostSettings.security.twoFactorLogin.isSmsProviderEnabled\">\n                                    {{l(\"IsSmsVerificationEnabled\")}}\n                                    <span></span>\n                                </label>\n                                <label for=\"Setting_TwoFactorLogin_IsGoogleAuthenticatorEnabled\" class=\"m-checkbox\" *ngIf=\"hostSettings.security.twoFactorLogin.isEnabled\">\n                                    <input id=\"Setting_TwoFactorLogin_IsGoogleAuthenticatorEnabled\" type=\"checkbox\" name=\"Setting_TwoFactorLogin_IsGoogleAuthenticatorEnabled\"\n                                           [(ngModel)]=\"hostSettings.security.twoFactorLogin.isGoogleAuthenticatorEnabled\">\n                                    {{l(\"IsGoogleAuthenticatorEnabled\")}}\n                                    <span></span>\n                                </label>\n                                <label for=\"Setting_TwoFactorLogin_IsRememberBrowserEnabled\" class=\"m-checkbox\" *ngIf=\"hostSettings.security.twoFactorLogin.isEnabled\">\n                                    <input id=\"Setting_TwoFactorLogin_IsRememberBrowserEnabled\" type=\"checkbox\" name=\"Setting_TwoFactorLogin_IsRememberBrowserEnabled\"\n                                           [(ngModel)]=\"hostSettings.security.twoFactorLogin.isRememberBrowserEnabled\">\n                                    {{l(\"AllowToRememberBrowserForTwoFactorLogin\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                        </div>\n                    </tab>\n                    <tab heading=\"{{l('EmailSmtp')}}\" *ngIf=\"hostSettings.email\" customClass=\"m-tabs__item\">\n                        <div class=\"form-group\">\n                            <label for=\"DefaultFromAddress\">{{l(\"DefaultFromAddress\")}}</label>\n                            <input id=\"DefaultFromAddress\" type=\"email\" name=\"DefaultFromAddress\" class=\"form-control\" [ngClass]=\"{'edited':hostSettings.email.defaultFromAddress}\"\n                                   [(ngModel)]=\"hostSettings.email.defaultFromAddress\" maxlength=\"256\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"DefaultFromDisplayName\">{{l(\"DefaultFromDisplayName\")}}</label>\n                            <input id=\"DefaultFromDisplayName\" type=\"text\" name=\"DefaultFromDisplayName\" class=\"form-control\" [ngClass]=\"{'edited':hostSettings.email.defaultFromDisplayName}\"\n                                   [(ngModel)]=\"hostSettings.email.defaultFromDisplayName\" maxlength=\"128\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"SmtpHost\">{{l(\"SmtpHost\")}}</label>\n                            <input id=\"SmtpHost\" type=\"text\" name=\"SmtpHost\" class=\"form-control\" [ngClass]=\"{'edited':hostSettings.email.smtpHost}\" [(ngModel)]=\"hostSettings.email.smtpHost\"\n                                   maxlength=\"64\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"SmtpPort\">{{l(\"SmtpPort\")}}</label>\n                            <input id=\"SmtpPort\" type=\"number\" name=\"SmtpPort\" class=\"form-control\" [ngClass]=\"{'edited':hostSettings.email.smtpPort}\" [(ngModel)]=\"hostSettings.email.smtpPort\"\n                                   maxlength=\"5\">\n                        </div>\n                        <div class=\"m-checkbox-list\">\n                            <label for=\"Settings_SmtpEnableSsl\" class=\"m-checkbox\">\n                                <input id=\"Settings_SmtpEnableSsl\" type=\"checkbox\" name=\"SmtpEnableSsl\" [(ngModel)]=\"hostSettings.email.smtpEnableSsl\">\n                                {{l(\"UseSsl\")}}\n                                <span></span>\n                            </label>\n                            <label for=\"Settings_SmtpUseDefaultCredentials\" class=\"m-checkbox\">\n                                <input id=\"Settings_SmtpUseDefaultCredentials\" type=\"checkbox\" name=\"SmtpUseDefaultCredentials\" [(ngModel)]=\"hostSettings.email.smtpUseDefaultCredentials\">\n                                {{l(\"UseDefaultCredentials\")}}\n                                <span></span>\n                            </label>\n                        </div>\n                        <div class=\"form-group\" [hidden]=\"hostSettings.email.smtpUseDefaultCredentials\">\n                            <label for=\"SmtpDomainName\">{{l(\"DomainName\")}}</label>\n                            <input id=\"SmtpDomainName\" type=\"text\" name=\"SmtpDomainName\" class=\"form-control\" [ngClass]=\"{'edited':hostSettings.email.smtpDomain}\"\n                                   [(ngModel)]=\"hostSettings.email.smtpDomain\" maxlength=\"128\">\n                        </div>\n                        <div class=\"form-group\" [hidden]=\"hostSettings.email.smtpUseDefaultCredentials\">\n                            <label for=\"SmtpUserName\">{{l(\"UserName\")}}</label>\n                            <input id=\"SmtpUserName\" type=\"text\" name=\"SmtpUserName\" class=\"form-control\" [ngClass]=\"{'edited':hostSettings.email.smtpUserName}\"\n                                   [(ngModel)]=\"hostSettings.email.smtpUserName\" maxlength=\"128\">\n                        </div>\n                        <div class=\"form-group\" [hidden]=\"hostSettings.email.smtpUseDefaultCredentials\">\n                            <label for=\"SmtpPassword\">{{l(\"Password\")}}</label>\n                            <input id=\"SmtpPassword\" type=\"password\" name=\"SmtpPassword\" class=\"form-control\" [ngClass]=\"{'edited':hostSettings.email.smtpPassword}\" [(ngModel)]=\"hostSettings.email.smtpPassword\"\n                                   maxlength=\"128\">\n                        </div>\n                        <hr />\n                        <h5>{{l(\"TestEmailSettingsHeader\")}}</h5>\n                        <div class=\"row\">\n                            <div class=\"form-group col-md-4\">\n                                <input type=\"text\" class=\"form-control input-mini\" [(ngModel)]=\"testEmailAddress\">\n                            </div>\n                            <div class=\"form-group col-md-2\">\n                                <button class=\"btn btn-primary\" type=\"button\" (click)=\"sendTestEmail()\">{{l(\"SendTestEmail\")}}</button>\n                            </div>\n                        </div>\n                    </tab>\n                    <tab *ngIf=\"true\" heading=\"{{l('Invoice')}}\" customClass=\"m-tabs__item\">\n                        <!-- *ngIf=\"true\" is a workaround for https://github.com/valor-software/ng2-bootstrap/issues/823 -->\n                        <h5>{{l(\"InvoiceInformation\")}}</h5>\n                        <div class=\"form-group\">\n                            <label for=\"LegalName\">{{l(\"LegalName\")}}</label>\n                            <input id=\"LegalName\" type=\"text\" name=\"legalName\" class=\"form-control\" [ngClass]=\"{'edited':hostSettings.billing.legalName}\" [(ngModel)]=\"hostSettings.billing.legalName\" maxlength=\"64\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"Address\">{{l(\"Address\")}}</label>\n                            <textarea id=\"Address\" rows=\"5\" name=\"address\" class=\"form-control\" [ngClass]=\"{'edited':hostSettings.billing.address}\" [(ngModel)]=\"hostSettings.billing.address\" maxlength=\"256\"></textarea>\n                        </div>\n                    </tab>\n                </tabset>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/settings/host-settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/settings/host-settings.component.ts ***!
  \***********************************************************/
/*! exports provided: HostSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostSettingsComponent", function() { return HostSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/AppEnums */ "./src/shared/AppEnums.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/common/session/app-session.service */ "./src/shared/common/session/app-session.service.ts");
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






var HostSettingsComponent = /** @class */ (function (_super) {
    __extends(HostSettingsComponent, _super);
    function HostSettingsComponent(injector, _hostSettingService, _commonLookupService, _appSessionService) {
        var _this = _super.call(this, injector) || this;
        _this._hostSettingService = _hostSettingService;
        _this._commonLookupService = _commonLookupService;
        _this._appSessionService = _appSessionService;
        _this.loading = false;
        _this.editions = undefined;
        _this.testEmailAddress = undefined;
        _this.showTimezoneSelection = abp.clock.provider.supportsMultipleTimezone;
        _this.defaultTimezoneScope = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__["AppTimezoneScope"].Application;
        _this.usingDefaultTimeZone = false;
        _this.initialTimeZone = undefined;
        return _this;
    }
    HostSettingsComponent.prototype.loadHostSettings = function () {
        var self = this;
        self._hostSettingService.getAllSettings()
            .subscribe(function (setting) {
            self.hostSettings = setting;
            self.initialTimeZone = setting.general.timezone;
            self.usingDefaultTimeZone = setting.general.timezoneForComparison === self.setting.get('Abp.Timing.TimeZone');
        });
    };
    HostSettingsComponent.prototype.loadEditions = function () {
        var self = this;
        self._commonLookupService.getEditionsForCombobox(false).subscribe(function (result) {
            self.editions = result.items;
            var notAssignedEdition = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["ComboboxItemDto"]();
            notAssignedEdition.value = null;
            notAssignedEdition.displayText = self.l('NotAssigned');
            self.editions.unshift(notAssignedEdition);
        });
    };
    HostSettingsComponent.prototype.init = function () {
        var self = this;
        self.testEmailAddress = self._appSessionService.user.emailAddress;
        self.showTimezoneSelection = abp.clock.provider.supportsMultipleTimezone;
        self.loadHostSettings();
        self.loadEditions();
    };
    HostSettingsComponent.prototype.ngOnInit = function () {
        var self = this;
        self.init();
    };
    HostSettingsComponent.prototype.ngAfterViewChecked = function () {
        //Temporary fix for: https://github.com/valor-software/ngx-bootstrap/issues/1508
        $('tabset ul.nav').addClass('m-tabs-line');
        $('tabset ul.nav li a.nav-link').addClass('m-tabs__link');
    };
    HostSettingsComponent.prototype.sendTestEmail = function () {
        var self = this;
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["SendTestEmailInput"]();
        input.emailAddress = self.testEmailAddress;
        self._hostSettingService.sendTestEmail(input).subscribe(function (result) {
            self.notify.info(self.l('TestEmailSentSuccessfully'));
        });
    };
    HostSettingsComponent.prototype.saveAll = function () {
        var self = this;
        self._hostSettingService.updateAllSettings(self.hostSettings).subscribe(function (result) {
            self.notify.info(self.l('SavedSuccessfully'));
            if (abp.clock.provider.supportsMultipleTimezone && self.usingDefaultTimeZone && self.initialTimeZone !== self.hostSettings.general.timezone) {
                self.message.info(self.l('TimeZoneSettingChangedRefreshPageNotification')).done(function () {
                    window.location.reload();
                });
            }
        });
    };
    HostSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./host-settings.component.html */ "./src/app/admin/settings/host-settings.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["HostSettingsServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["CommonLookupServiceProxy"],
            _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_4__["AppSessionService"]])
    ], HostSettingsComponent);
    return HostSettingsComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/settings/tenant-settings.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/settings/tenant-settings.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-subheader\">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto col-sm-12 col-md-6\">\n                <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                    <span>{{l(\"Settings\")}}</span>\n                </h3>\n                <span class=\"m-section__sub\">\n                    {{l(\"SettingsHeaderInfo\")}}\n                </span>\n            </div>\n            <div class=\"col-sm-12 col-md-6 text-right\">\n                <button class=\"btn btn-primary\" (click)=\"saveAll()\"><i class=\"la la-floppy-o\"></i> {{l(\"SaveAll\")}}</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"m-content\">\n        <div class=\"m-portlet m-portlet--mobile\">\n            <div class=\"m-portlet__body\">\n                <tabset class=\"tab-container\" *ngIf=\"settings\">\n                    <tab heading=\"{{l('General')}}\" *ngIf=\"showTimezoneSelection\" [active]=\"activeTabIndex == 0\" customClass=\"m-tabs__item\">\n                        <div class=\"form-group\" *ngIf=\"showTimezoneSelection\">\n                            <label for=\"Timezone\">{{l(\"Timezone\")}}</label>\n                            <timezone-combo id=\"Timezone\" [(selectedTimeZone)]=\"settings.general.timezone\" defaultTimezoneScope=\"{{defaultTimezoneScope}}\"></timezone-combo>\n                        </div>\n                    </tab>\n                    <tab *ngIf=\"true\" heading=\"{{l('Appearance')}}\" [active]=\"activeTabIndex == 1\" customClass=\"m-tabs__item\">\n                        <div class=\"row m-form\">\n                            <div class=\"col-md-6\">\n                                <h5>{{l(\"ApplicationLogo\")}}</h5>\n                                <form #logoUploadForm>\n                                    <div class=\"form-group\">\n                                        <input type=\"file\" ng2FileSelect [uploader]=\"logoUploader\" class=\"col-lg-12\" required />\n                                        <span class=\"m-form__help col-lg-12\">{{l(\"UploadLogo_Info\")}}</span>\n                                    </div>\n                                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"uploadLogo()\">{{l(\"Upload\")}}</button>\n                                    <button class=\"btn btn-default\" type=\"button\" (click)=\"clearLogo()\">{{l(\"Clear\")}}</button>\n                                </form>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <h5>{{l(\"CustomCSS\")}}</h5>\n                                <p *ngIf=\"appSession.tenant.customCssId\"><a [href]=\"remoteServiceBaseUrl + '/TenantCustomization/GetCustomCss?id=' + appSession.tenant.customCssId\" target=\"_blank\">{{l('Download')}}</a></p>\n                                <form #cssUploadForm>\n                                    <div class=\"form-group\">\n                                        <input type=\"file\" ng2FileSelect [uploader]=\"customCssUploader\" class=\"col-lg-12\" required />\n                                        <span class=\"m-form__help col-lg-12\">{{l(\"UploadCSS_Info\")}}</span>\n                                    </div>\n                                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"uploadCustomCss()\">{{l(\"Upload\")}}</button>\n                                    <button class=\"btn btn-default\" type=\"button\" (click)=\"clearCustomCss()\">{{l(\"Clear\")}}</button>\n                                </form>\n                            </div>\n                        </div>\n                    </tab>\n                    <tab *ngIf=\"true\" heading=\"{{l('UserManagement')}}\" customClass=\"m-tabs__item\">\n                        <div class=\"m-form\">\n                            <h5>{{l(\"FormBasedRegistration\")}}</h5>\n                            <div class=\"m-checkbox-list\">\n                                <div class=\"form-group m-form__group\">\n                                    <label for=\"Setting_AllowSelfRegistration\" class=\"m-checkbox\">\n                                        <input id=\"Setting_AllowSelfRegistration\" class=\"m-check\" type=\"checkbox\" name=\"AllowSelfRegistration\" [(ngModel)]=\"settings.userManagement.allowSelfRegistration\">\n                                        {{l(\"AllowUsersToRegisterThemselves\")}}\n                                        <span></span>\n                                    </label>\n                                    <span class=\"m-form__help\">{{l(\"AllowUsersToRegisterThemselves_Hint\")}}</span>\n                                </div>\n                                <div class=\"form-group m-form__group\">\n                                    <label for=\"Setting_IsNewRegisteredUserActiveByDefault\" class=\"m-checkbox\">\n                                        <input id=\"Setting_IsNewRegisteredUserActiveByDefault\" type=\"checkbox\" name=\"IsNewRegisteredUserActiveByDefault\" [(ngModel)]=\"settings.userManagement.isNewRegisteredUserActiveByDefault\">\n                                        {{l(\"NewRegisteredUsersIsActiveByDefault\")}}\n                                        <span></span>\n                                    </label>\n                                    <span class=\"m-form__help\">{{l(\"NewRegisteredUsersIsActiveByDefault_Hint\")}}</span>\n                                </div>\n                                <label for=\"Setting_UseCaptchaOnRegistration\" class=\"m-checkbox\" [hidden]=\"!settings.userManagement.allowSelfRegistration\">\n                                    <input id=\"Setting_UseCaptchaOnRegistration\" type=\"checkbox\" name=\"UseCaptchaOnRegistration\" [(ngModel)]=\"settings.userManagement.useCaptchaOnRegistration\">\n                                    {{l(\"UseCaptchaOnRegistration\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                        </div>\n                        <div *ngIf=\"!isMultiTenancyEnabled && settings.ldap.isModuleEnabled\">\n                            <h5 class=\"margin-top-20\">{{l(\"LdapSettings\")}}</h5>\n                            <label for=\"Setting_LdapIsEnabled\" class=\"m-checkbox\">\n                                <input id=\"Setting_LdapIsEnabled\" type=\"checkbox\" name=\"LdapIsEnabled\" [(ngModel)]=\"settings.ldap.isEnabled\">\n                                {{l(\"EnableLdapAuthentication\")}}\n                                <span></span>\n                            </label>\n                            <div class=\"form-group\" [hidden]=\"!settings.ldap.isEnabled\">\n                                <label for=\"LdapDomainName\">{{l(\"DomainName\")}}</label>\n                                <input id=\"LdapDomainName\" type=\"text\" name=\"LdapDomainName\" class=\"form-control\" [(ngModel)]=\"settings.ldap.domain\" maxlength=\"128\">\n                            </div>\n                            <div class=\"form-group\" [hidden]=\"!settings.ldap.isEnabled\">\n                                <label for=\"LdapUserName\">{{l(\"UserName\")}}</label>\n                                <input id=\"LdapUserName\" type=\"text\" name=\"LdapUserName\" class=\"form-control\" [(ngModel)]=\"settings.ldap.userName\" maxlength=\"128\">\n                            </div>\n                            <div class=\"form-group\" [hidden]=\"!settings.ldap.isEnabled\">\n                                <label for=\"LdapPassword\">{{l(\"Password\")}}</label>\n                                <input id=\"LdapPassword\" type=\"password\" name=\"LdapPassword\" class=\"form-control\" [(ngModel)]=\"settings.ldap.password\" maxlength=\"128\">\n                            </div>\n                        </div>\n                        <div>\n                            <h5 class=\"margin-top-20\">{{l(\"OtherSettings\")}}</h5>\n                            <label for=\"Setting_IsEmailConfirmationRequiredForLogin\" class=\"m-checkbox\">\n                                <input id=\"Setting_IsEmailConfirmationRequiredForLogin\" type=\"checkbox\" name=\"IsEmailConfirmationRequiredForLogin\" [(ngModel)]=\"settings.userManagement.isEmailConfirmationRequiredForLogin\">\n                                {{l(\"EmailConfirmationRequiredForLogin\")}}\n                                <span></span>\n                            </label>\n                        </div>\n                    </tab>\n                    <tab *ngIf=\"true\" heading=\"{{l('Security')}}\" customClass=\"m-tabs__item\">\n                        <!-- *ngIf=\"true\" is a workaround for https://github.com/valor-software/ng2-bootstrap/issues/823 -->\n                        <div>\n                            <h5>{{l(\"PasswordComplexity\")}}</h5>\n                            <label for=\"Setting_PasswordComplexity_UseDefaultSettings\" class=\"m-checkbox\">\n                                <input id=\"Setting_PasswordComplexity_UseDefaultSettings\" type=\"checkbox\" name=\"Setting_PasswordComplexity_UseDefaultSettings\" [(ngModel)]=\"settings.security.useDefaultPasswordComplexitySettings\">\n                                {{l(\"UseDefaultSettings\")}}\n                                <span></span>\n                            </label>\n                            <div class=\"m-checkbox-list\">\n                                <label for=\"Setting_PasswordComplexity_RequireDigit\" class=\"m-checkbox\">\n                                    <input id=\"Setting_PasswordComplexity_RequireDigit\" type=\"checkbox\" name=\"Setting_PasswordComplexity_RequireDigit\"\n                                           [(ngModel)]=\"settings.security.passwordComplexity.requireDigit\" *ngIf=\"!settings.security.useDefaultPasswordComplexitySettings\">\n                                    <input id=\"Setting_PasswordComplexity_RequireDigit\" type=\"checkbox\" name=\"Setting_PasswordComplexity_RequireDigit\"\n                                           [(ngModel)]=\"settings.security.defaultPasswordComplexity.requireDigit\" *ngIf=\"settings.security.useDefaultPasswordComplexitySettings\"\n                                           disabled>\n                                    {{l(\"PasswordComplexity_RequireDigit\")}}\n                                    <span></span>\n                                </label>\n                                <label for=\"Setting_PasswordComplexity_RequireLowercase\" class=\"m-checkbox\">\n                                    <input id=\"Setting_PasswordComplexity_RequireLowercase\" type=\"checkbox\" name=\"Setting_PasswordComplexity_RequireLowercase\"\n                                           [(ngModel)]=\"settings.security.passwordComplexity.requireLowercase\" *ngIf=\"!settings.security.useDefaultPasswordComplexitySettings\">\n                                    <input id=\"Setting_PasswordComplexity_RequireLowercase\" type=\"checkbox\" name=\"Setting_PasswordComplexity_RequireLowercase\"\n                                           [(ngModel)]=\"settings.security.defaultPasswordComplexity.requireLowercase\" *ngIf=\"settings.security.useDefaultPasswordComplexitySettings\"\n                                           disabled>\n                                    {{l(\"PasswordComplexity_RequireLowercase\")}}\n                                    <span></span>\n                                </label>\n                                <label for=\"Setting_PasswordComplexity_RequireNonAlphanumeric\" class=\"m-checkbox\">\n                                    <input id=\"Setting_PasswordComplexity_RequireNonAlphanumeric\" type=\"checkbox\" name=\"Setting_PasswordComplexity_RequireNonAlphanumeric\"\n                                           [(ngModel)]=\"settings.security.passwordComplexity.requireNonAlphanumeric\" *ngIf=\"!settings.security.useDefaultPasswordComplexitySettings\">\n                                    <input id=\"Setting_PasswordComplexity_RequireNonAlphanumeric\" type=\"checkbox\" name=\"Setting_PasswordComplexity_RequireNonAlphanumeric\"\n                                           [(ngModel)]=\"settings.security.defaultPasswordComplexity.requireNonAlphanumeric\" *ngIf=\"settings.security.useDefaultPasswordComplexitySettings\"\n                                           disabled>\n                                    {{l(\"PasswordComplexity_RequireNonAlphanumeric\")}}\n                                    <span></span>\n                                </label>\n                                <label for=\"Setting_PasswordComplexity_RequireUppercase\" class=\"m-checkbox\">\n                                    <input id=\"Setting_PasswordComplexity_RequireUppercase\" type=\"checkbox\" name=\"Setting_PasswordComplexity_RequireUppercase\"\n                                           [(ngModel)]=\"settings.security.passwordComplexity.requireUppercase\" *ngIf=\"!settings.security.useDefaultPasswordComplexitySettings\">\n                                    <input id=\"Setting_PasswordComplexity_RequireUppercase\" type=\"checkbox\" name=\"Setting_PasswordComplexity_RequireUppercase\"\n                                           [(ngModel)]=\"settings.security.defaultPasswordComplexity.requireUppercase\" *ngIf=\"settings.security.useDefaultPasswordComplexitySettings\"\n                                           disabled>\n                                    {{l(\"PasswordComplexity_RequireUppercase\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>{{l(\"PasswordComplexity_RequiredLength\")}}</label>\n                                <input type=\"number\" name=\"RequiredLength\" class=\"form-control\" [ngClass]=\"{'edited':settings.security.passwordComplexity.requiredLength}\"\n                                       [(ngModel)]=\"settings.security.passwordComplexity.requiredLength\" *ngIf=\"!settings.security.useDefaultPasswordComplexitySettings\">\n                                <input type=\"number\" name=\"RequiredLength\" class=\"form-control\" [ngClass]=\"{'edited':settings.security.defaultPasswordComplexity.requiredLength}\"\n                                       [(ngModel)]=\"settings.security.defaultPasswordComplexity.requiredLength\" *ngIf=\"settings.security.useDefaultPasswordComplexitySettings\"\n                                       disabled>\n                            </div>\n                        </div>\n                        <div>\n                            <h5>{{l(\"UserLockOut\")}}</h5>\n                            <div class=\"md-checkbox-list\">\n                                <div>\n                                    <label for=\"Setting_UserLockOut_IsEnabled\" class=\"m-checkbox\">\n                                        <input id=\"Setting_UserLockOut_IsEnabled\" type=\"checkbox\" name=\"Setting_UserLockOut_IsEnabled\" [(ngModel)]=\"settings.security.userLockOut.isEnabled\">\n                                        {{l(\"EnableUserAccountLockingOnFailedLoginAttemts\")}}\n                                        <span></span>\n                                    </label>\n                                </div>\n                            </div>\n                            <div class=\"form-group\" *ngIf=\"settings.security.userLockOut.isEnabled\">\n                                <label for=\"MaxFailedAccessAttemptsBeforeLockout\">{{l(\"MaxFailedAccessAttemptsBeforeLockout\")}}</label>\n                                <input id=\"MaxFailedAccessAttemptsBeforeLockout\" type=\"number\" name=\"MaxFailedAccessAttemptsBeforeLockout\" class=\"form-control\" [ngClass]=\"{'edited':settings.security.userLockOut.maxFailedAccessAttemptsBeforeLockout}\" [(ngModel)]=\"settings.security.userLockOut.maxFailedAccessAttemptsBeforeLockout\">\n                            </div>\n                            <div class=\"form-group\" *ngIf=\"settings.security.userLockOut.isEnabled\">\n                                <label for=\"DefaultAccountLockoutSeconds\">{{l(\"DefaultAccountLockoutDurationAsSeconds\")}}</label>\n                                <input id=\"DefaultAccountLockoutSeconds\" type=\"number\" name=\"DefaultAccountLockoutSeconds\" class=\"form-control\" [ngClass]=\"{'edited':settings.security.userLockOut.defaultAccountLockoutSeconds}\" [(ngModel)]=\"settings.security.userLockOut.defaultAccountLockoutSeconds\">\n                            </div>\n                        </div>\n                        <div *ngIf=\"!isMultiTenancyEnabled || settings.security.twoFactorLogin.isEnabledForApplication\">\n                            <h5>{{l(\"TwoFactorLogin\")}}</h5>\n                            <div class=\"m-checkbox-list\">\n                                <label for=\"Setting_TwoFactorLogin_IsEnabled\" class=\"m-checkbox\">\n                                    <input id=\"Setting_TwoFactorLogin_IsEnabled\" type=\"checkbox\" name=\"Setting_TwoFactorLogin_IsEnabled\" [(ngModel)]=\"settings.security.twoFactorLogin.isEnabled\">\n                                    {{l(\"EnableTwoFactorLogin\")}}\n                                    <span></span>\n                                </label>\n                                <label for=\"Setting_TwoFactorLogin_IsEmailProviderEnabled\" class=\"m-checkbox\" *ngIf=\"settings.security.twoFactorLogin.isEnabled && !isMultiTenancyEnabled\">\n                                    <input id=\"Setting_TwoFactorLogin_IsEmailProviderEnabled\" type=\"checkbox\" name=\"Setting_TwoFactorLogin_IsEmailProviderEnabled\" [(ngModel)]=\"settings.security.twoFactorLogin.isEmailProviderEnabled\">\n                                    {{l(\"IsEmailVerificationEnabled\")}}\n                                    <span></span>\n                                </label>\n                                <label for=\"Setting_TwoFactorLogin_IsSmsProviderEnabled\" class=\"m-checkbox\" *ngIf=\"settings.security.twoFactorLogin.isEnabled && !isMultiTenancyEnabled\">\n                                    <input id=\"Setting_TwoFactorLogin_IsSmsProviderEnabled\" type=\"checkbox\" name=\"Setting_TwoFactorLogin_IsSmsProviderEnabled\" [(ngModel)]=\"settings.security.twoFactorLogin.isSmsProviderEnabled\">\n                                    {{l(\"IsSmsVerificationEnabled\")}}\n                                    <span></span>\n                                </label>\n                                <label for=\"Setting_TwoFactorLogin_IsGoogleAuthenticatorEnabled\" class=\"m-checkbox\" *ngIf=\"settings.security.twoFactorLogin.isEnabled && !isMultiTenancyEnabled\">\n                                    <input id=\"Setting_TwoFactorLogin_IsGoogleAuthenticatorEnabled\" type=\"checkbox\" name=\"Setting_TwoFactorLogin_IsGoogleAuthenticatorEnabled\"\n                                           [(ngModel)]=\"settings.security.twoFactorLogin.isGoogleAuthenticatorEnabled\">\n                                    {{l(\"IsGoogleAuthenticatorEnabled\")}}\n                                    <span></span>\n                                </label>\n                                <label for=\"Setting_TwoFactorLogin_IsRememberBrowserEnabled\" class=\"m-checkbox\" *ngIf=\"settings.security.twoFactorLogin.isEnabled\">\n                                    <input id=\"Setting_TwoFactorLogin_IsRememberBrowserEnabled\" type=\"checkbox\" name=\"Setting_TwoFactorLogin_IsRememberBrowserEnabled\" [(ngModel)]=\"settings.security.twoFactorLogin.isRememberBrowserEnabled\">\n                                    {{l(\"AllowToRememberBrowserForTwoFactorLogin\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                        </div>\n                    </tab>\n                    <tab heading=\"{{l('EmailSmtp')}}\" *ngIf=\"!isMultiTenancyEnabled\" customClass=\"m-tabs__item\">\n                        <div class=\"form-group\">\n                            <label for=\"DefaultFromAddress\">{{l(\"DefaultFromAddress\")}}</label>\n                            <input id=\"DefaultFromAddress\" type=\"email\" name=\"DefaultFromAddress\" class=\"form-control\" [ngClass]=\"{'edited':settings.email.defaultFromAddress}\" [(ngModel)]=\"settings.email.defaultFromAddress\" maxlength=\"128\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"DefaultFromDisplayName\">{{l(\"DefaultFromDisplayName\")}}</label>\n                            <input id=\"DefaultFromDisplayName\" type=\"text\" name=\"DefaultFromDisplayName\" class=\"form-control\" [ngClass]=\"{'edited':settings.email.defaultFromDisplayName}\" [(ngModel)]=\"settings.email.defaultFromDisplayName\" maxlength=\"128\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"SmtpHost\">{{l(\"SmtpHost\")}}</label>\n                            <input id=\"SmtpHost\" type=\"text\" name=\"SmtpHost\" class=\"form-control\" [ngClass]=\"{'edited':settings.email.smtpHost}\" [(ngModel)]=\"settings.email.smtpHost\" maxlength=\"64\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"SmtpPort\">{{l(\"SmtpPort\")}}</label>\n                            <input id=\"SmtpPort\" type=\"number\" name=\"SmtpPort\" class=\"form-control\" [ngClass]=\"{'edited':settings.email.smtpPort}\" [(ngModel)]=\"settings.email.smtpPort\" maxlength=\"5\">\n                        </div>\n                        <div class=\"m-checkbox-list\">\n                            <label for=\"Settings_SmtpEnableSsl\" class=\"m-checkbox\">\n                                <input id=\"Settings_SmtpEnableSsl\" type=\"checkbox\" name=\"SmtpEnableSsl\" [(ngModel)]=\"settings.email.smtpEnableSsl\">\n                                {{l(\"UseSsl\")}}\n                                <span></span>\n                            </label>\n                            <label for=\"Settings_SmtpUseDefaultCredentials\" class=\"m-checkbox\">\n                                <input id=\"Settings_SmtpUseDefaultCredentials\" type=\"checkbox\" name=\"SmtpUseDefaultCredentials\" [(ngModel)]=\"settings.email.smtpUseDefaultCredentials\">\n                                {{l(\"UseDefaultCredentials\")}}\n                                <span></span>\n                            </label>\n                        </div>\n                        <div class=\"form-group\" [hidden]=\"settings.email.smtpUseDefaultCredentials\">\n                            <label for=\"SmtpDomainName\">{{l(\"DomainName\")}}</label>\n                            <input id=\"SmtpDomainName\" type=\"text\" name=\"SmtpDomainName\" class=\"form-control\" [ngClass]=\"{'edited':settings.email.smtpDomain}\" [(ngModel)]=\"settings.email.smtpDomain\" maxlength=\"128\">\n                        </div>\n                        <div class=\"form-group\" [hidden]=\"settings.email.smtpUseDefaultCredentials\">\n                            <label for=\"SmtpUserName\">{{l(\"UserName\")}}</label>\n                            <input id=\"SmtpUserName\" type=\"text\" name=\"SmtpUserName\" class=\"form-control\" [ngClass]=\"{'edited':settings.email.smtpUserName}\" [(ngModel)]=\"settings.email.smtpUserName\" maxlength=\"128\">\n                        </div>\n                        <div class=\"form-group\" *ngIf=\"!setRandomPassword\" [hidden]=\"settings.email.smtpUseDefaultCredentials\">\n                            <label for=\"SmtpPassword\">{{l(\"Password\")}}</label>\n                            <input id=\"SmtpPassword\" type=\"password\" name=\"SmtpPassword\" class=\"form-control\" [ngClass]=\"{'edited':settings.email.smtpPassword}\" [(ngModel)]=\"settings.email.smtpPassword\" maxlength=\"128\">\n                        </div>\n                        <hr />\n                        <h5>{{l(\"TestEmailSettingsHeader\")}}</h5>\n                        <div class=\"row\">\n                            <div class=\"form-group col-md-4\">\n                                <input type=\"text\" class=\"form-control input-mini\" [(ngModel)]=\"testEmailAddress\">\n                            </div>\n                            <div class=\"form-group col-md-2\">\n                                <button class=\"btn btn-primary\" type=\"button\" (click)=\"sendTestEmail()\">{{l(\"SendTestEmail\")}}</button>\n                            </div>\n                        </div>\n                    </tab>\n                    <tab *ngIf=\"true\" heading=\"{{l('Invoice')}}\" customClass=\"m-tabs__item\">\n                        <!-- *ngIf=\"true\" is a workaround for https://github.com/valor-software/ng2-bootstrap/issues/823 -->\n                        <h5>{{l(\"InvoiceInformation\")}}</h5>\n                        <div class=\"form-group\">\n                            <label for=\"LegalName\">{{l(\"LegalName\")}}</label>\n                            <input id=\"LegalName\" type=\"text\" name=\"legalName\" class=\"form-control\" [ngClass]=\"{'edited':settings.billing.legalName}\" [(ngModel)]=\"settings.billing.legalName\" maxlength=\"64\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"Address\">{{l(\"Address\")}}</label>\n                            <textarea id=\"Address\" rows=\"5\" name=\"address\" class=\"form-control\" [ngClass]=\"{'edited':settings.billing.address}\" [(ngModel)]=\"settings.billing.address\" maxlength=\"256\"></textarea>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"taxVatNo\">{{l(\"Tax/VatNo\")}}</label>\n                            <input id=\"taxVatNo\" type=\"text\" name=\"taxVatNo\" class=\"form-control\" [ngClass]=\"{'edited':settings.billing.taxVatNo}\" [(ngModel)]=\"settings.billing.taxVatNo\" maxlength=\"32\">\n                        </div>\n                    </tab>\n                </tabset>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/settings/tenant-settings.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/settings/tenant-settings.component.ts ***!
  \*************************************************************/
/*! exports provided: TenantSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantSettingsComponent", function() { return TenantSettingsComponent; });
/* harmony import */ var _abp_auth_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/auth/token.service */ "./node_modules/abp-ng2-module/dist/src/auth/token.service.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _shared_AppEnums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/AppEnums */ "./src/shared/AppEnums.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/common/session/app-session.service */ "./src/shared/common/session/app-session.service.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);
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









var TenantSettingsComponent = /** @class */ (function (_super) {
    __extends(TenantSettingsComponent, _super);
    function TenantSettingsComponent(injector, _tenantSettingsService, _appSessionService, _tokenService) {
        var _this = _super.call(this, injector) || this;
        _this._tenantSettingsService = _tenantSettingsService;
        _this._appSessionService = _appSessionService;
        _this._tokenService = _tokenService;
        _this.usingDefaultTimeZone = false;
        _this.initialTimeZone = null;
        _this.testEmailAddress = undefined;
        _this.isMultiTenancyEnabled = _this.multiTenancy.isEnabled;
        _this.showTimezoneSelection = abp.clock.provider.supportsMultipleTimezone;
        _this.activeTabIndex = (abp.clock.provider.supportsMultipleTimezone) ? 0 : 1;
        _this.loading = false;
        _this.settings = undefined;
        _this.remoteServiceBaseUrl = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__["AppConsts"].remoteServiceBaseUrl;
        _this.defaultTimezoneScope = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_3__["AppTimezoneScope"].Tenant;
        return _this;
    }
    TenantSettingsComponent.prototype.ngOnInit = function () {
        this.testEmailAddress = this._appSessionService.user.emailAddress;
        this.getSettings();
        this.initUploaders();
    };
    TenantSettingsComponent.prototype.ngAfterViewChecked = function () {
        //Temporary fix for: https://github.com/valor-software/ngx-bootstrap/issues/1508
        $('tabset ul.nav').addClass('m-tabs-line');
        $('tabset ul.nav li a.nav-link').addClass('m-tabs__link');
    };
    TenantSettingsComponent.prototype.getSettings = function () {
        var _this = this;
        this.loading = true;
        this._tenantSettingsService.getAllSettings()
            .finally(function () {
            _this.loading = false;
        })
            .subscribe(function (result) {
            _this.settings = result;
            if (_this.settings.general) {
                _this.initialTimeZone = _this.settings.general.timezone;
                _this.usingDefaultTimeZone = _this.settings.general.timezoneForComparison === abp.setting.values['Abp.Timing.TimeZone'];
            }
        });
    };
    TenantSettingsComponent.prototype.initUploaders = function () {
        var _this = this;
        this.logoUploader = this.createUploader('/TenantCustomization/UploadLogo', function (result) {
            _this._appSessionService.tenant.logoFileType = result.fileType;
            _this._appSessionService.tenant.logoId = result.id;
        });
        this.customCssUploader = this.createUploader('/TenantCustomization/UploadCustomCss', function (result) {
            _this.appSession.tenant.customCssId = result.id;
            $('#TenantCustomCss').remove();
            $('head').append('<link id="TenantCustomCss" href="' + _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__["AppConsts"].remoteServiceBaseUrl + '/TenantCustomization/GetCustomCss?id=' + _this.appSession.tenant.customCssId + '" rel="stylesheet"/>');
        });
    };
    TenantSettingsComponent.prototype.createUploader = function (url, success) {
        var _this = this;
        var uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploader"]({ url: _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__["AppConsts"].remoteServiceBaseUrl + url });
        uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        uploader.onSuccessItem = function (item, response, status) {
            var ajaxResponse = JSON.parse(response);
            if (ajaxResponse.success) {
                _this.notify.info(_this.l('SavedSuccessfully'));
                if (success) {
                    success(ajaxResponse.result);
                }
            }
            else {
                _this.message.error(ajaxResponse.error.message);
            }
        };
        var uploaderOptions = {};
        uploaderOptions.authToken = 'Bearer ' + this._tokenService.getToken();
        uploaderOptions.removeAfterUpload = true;
        uploader.setOptions(uploaderOptions);
        return uploader;
    };
    TenantSettingsComponent.prototype.uploadLogo = function () {
        this.logoUploader.uploadAll();
    };
    TenantSettingsComponent.prototype.uploadCustomCss = function () {
        this.customCssUploader.uploadAll();
    };
    TenantSettingsComponent.prototype.clearLogo = function () {
        var _this = this;
        this._tenantSettingsService.clearLogo().subscribe(function () {
            _this._appSessionService.tenant.logoFileType = null;
            _this._appSessionService.tenant.logoId = null;
            _this.notify.info(_this.l('ClearedSuccessfully'));
        });
    };
    TenantSettingsComponent.prototype.clearCustomCss = function () {
        var _this = this;
        this._tenantSettingsService.clearCustomCss().subscribe(function () {
            _this.appSession.tenant.customCssId = null;
            $('#TenantCustomCss').remove();
            _this.notify.info(_this.l('ClearedSuccessfully'));
        });
    };
    TenantSettingsComponent.prototype.saveAll = function () {
        var _this = this;
        this._tenantSettingsService.updateAllSettings(this.settings).subscribe(function () {
            _this.notify.info(_this.l('SavedSuccessfully'));
            if (abp.clock.provider.supportsMultipleTimezone && _this.usingDefaultTimeZone && _this.initialTimeZone !== _this.settings.general.timezone) {
                _this.message.info(_this.l('TimeZoneSettingChangedRefreshPageNotification')).done(function () {
                    window.location.reload();
                });
            }
        });
    };
    TenantSettingsComponent.prototype.sendTestEmail = function () {
        var _this = this;
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_7__["SendTestEmailInput"]();
        input.emailAddress = this.testEmailAddress;
        this._tenantSettingsService.sendTestEmail(input).subscribe(function (result) {
            _this.notify.info(_this.l('TestEmailSentSuccessfully'));
        });
    };
    TenantSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./tenant-settings.component.html */ "./src/app/admin/settings/tenant-settings.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_4__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_7__["TenantSettingsServiceProxy"],
            _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_6__["AppSessionService"],
            _abp_auth_token_service__WEBPACK_IMPORTED_MODULE_0__["TokenService"]])
    ], TenantSettingsComponent);
    return TenantSettingsComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_5__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/shared/edition-combo.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/shared/edition-combo.component.ts ***!
  \*********************************************************/
/*! exports provided: EditionComboComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditionComboComponent", function() { return EditionComboComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
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



var EditionComboComponent = /** @class */ (function (_super) {
    __extends(EditionComboComponent, _super);
    function EditionComboComponent(_editionService, injector) {
        var _this = _super.call(this, injector) || this;
        _this._editionService = _editionService;
        _this.editions = [];
        _this.selectedEdition = undefined;
        _this.selectedEditionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    EditionComboComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this._editionService.getEditionComboboxItems(0, true, false).subscribe(function (editions) {
            _this.editions = editions;
            setTimeout(function () {
                $(self.editionComboboxElement.nativeElement).selectpicker('refresh');
            }, 0);
        });
    };
    EditionComboComponent.prototype.ngAfterViewInit = function () {
        $(this.editionComboboxElement.nativeElement).selectpicker({
            iconBase: 'famfamfam-flag',
            tickIcon: 'fa fa-check'
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('EditionCombobox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditionComboComponent.prototype, "editionComboboxElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditionComboComponent.prototype, "selectedEdition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditionComboComponent.prototype, "selectedEditionChange", void 0);
    EditionComboComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edition-combo',
            template: "<select #EditionCombobox\n        class=\"form-control\"\n        [(ngModel)]=\"selectedEdition\"\n        (ngModelChange)=\"selectedEditionChange.emit($event)\"\n        [attr.data-live-search]=\"true\">\n            <option *ngFor=\"let edition of editions\" [value]=\"edition.value\">{{edition.displayText}}</option>\n    </select>"
        }),
        __metadata("design:paramtypes", [_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["EditionServiceProxy"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], EditionComboComponent);
    return EditionComboComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/shared/feature-tree.component.less":
/*!**********************************************************!*\
  !*** ./src/app/admin/shared/feature-tree.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feature-tree-textbox {\n  max-width: 100px;\n  margin: 1px;\n  margin-left: 5px;\n}\n.feature-tree-textbox.feature-tree-textbox-invalid {\n  background: #f00;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/admin/shared/feature-tree.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/shared/feature-tree.component.ts ***!
  \********************************************************/
/*! exports provided: FeatureTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureTreeComponent", function() { return FeatureTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
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




var FeatureTreeComponent = /** @class */ (function (_super) {
    __extends(FeatureTreeComponent, _super);
    function FeatureTreeComponent(_element, injector) {
        var _this = _super.call(this, injector) || this;
        _this._element = _element;
        return _this;
    }
    Object.defineProperty(FeatureTreeComponent.prototype, "editData", {
        set: function (val) {
            this._editData = val;
            this.refreshTree();
        },
        enumerable: true,
        configurable: true
    });
    FeatureTreeComponent.prototype.ngOnInit = function () {
    };
    FeatureTreeComponent.prototype.ngAfterViewInit = function () {
        this._$tree = $(this._element.nativeElement);
        this.refreshTree();
    };
    FeatureTreeComponent.prototype.ngAfterViewChecked = function () {
    };
    FeatureTreeComponent.prototype.getGrantedFeatures = function () {
        var _this = this;
        if (!this._$tree || !this._createdTreeBefore) {
            return [];
        }
        var selectedFeatures = this._$tree.jstree('get_selected', true);
        return lodash__WEBPACK_IMPORTED_MODULE_3__["map"](this._editData.features, function (item) {
            var feature = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["NameValueDto"]();
            feature.name = item.name;
            if (!item.inputType || item.inputType.name === 'CHECKBOX') {
                feature.value = lodash__WEBPACK_IMPORTED_MODULE_3__["some"](selectedFeatures, { original: { id: item.name } }) ? 'true' : 'false';
            }
            else {
                feature.value = _this.getFeatureValueByName(item.name);
            }
            return feature;
        });
    };
    FeatureTreeComponent.prototype.refreshTree = function () {
        var _this = this;
        var self = this;
        if (this._createdTreeBefore) {
            this._$tree.jstree('destroy');
        }
        this._createdTreeBefore = false;
        if (!this._editData || !this._$tree) {
            return;
        }
        var treeData = lodash__WEBPACK_IMPORTED_MODULE_3__["map"](this._editData.features, function (item) { return ({
            id: item.name,
            parent: item.parentName ? item.parentName : '#',
            text: item.displayName,
            state: {
                opened: true,
                selected: lodash__WEBPACK_IMPORTED_MODULE_3__["some"](_this._editData.featureValues, { name: item.name, value: 'true' })
            }
        }); });
        this._$tree
            .on('ready.jstree', function () {
            _this.customizeTreeNodes();
        })
            .on('redraw.jstree', function () {
            _this.customizeTreeNodes();
        })
            .on('after_open.jstree', function () {
            _this.customizeTreeNodes();
        })
            .on('create_node.jstree', function () {
            _this.customizeTreeNodes();
        })
            .on('changed.jstree', function (e, data) {
            if (!data.node) {
                return;
            }
            var wasInTreeChangeEvent = inTreeChangeEvent;
            if (!wasInTreeChangeEvent) {
                inTreeChangeEvent = true;
            }
            var childrenNodes;
            if (data.node.state.selected) {
                selectNodeAndAllParents(_this._$tree.jstree('get_parent', data.node));
                childrenNodes = $.makeArray(_this._$tree.jstree('get_children_dom', data.node));
                _this._$tree.jstree('select_node', childrenNodes);
            }
            else {
                childrenNodes = $.makeArray(_this._$tree.jstree('get_children_dom', data.node));
                _this._$tree.jstree('deselect_node', childrenNodes);
            }
            if (!wasInTreeChangeEvent) {
                var $nodeLi = _this.getNodeLiByFeatureName(data.node.id);
                var feature = _this.findFeatureByName(data.node.id);
                if (feature && (!feature.inputType || feature.inputType.name === 'CHECKBOX')) {
                    var value = _this._$tree.jstree('is_checked', $nodeLi) ? 'true' : 'false';
                    _this.setFeatureValueByName(data.node.id, value);
                }
                inTreeChangeEvent = false;
            }
        })
            .jstree({
            'core': {
                data: treeData
            },
            'types': {
                'default': {
                    'icon': 'fa fa-folder m--font-warning'
                },
                'file': {
                    'icon': 'fa fa-file m--font-warning'
                }
            },
            'checkbox': {
                keep_selected_style: false,
                three_state: false,
                cascade: ''
            },
            plugins: ['checkbox', 'types']
        });
        this._createdTreeBefore = true;
        var inTreeChangeEvent = false;
        function selectNodeAndAllParents(node) {
            self._$tree.jstree('select_node', node, true);
            var parent = self._$tree.jstree('get_parent', node);
            if (parent) {
                selectNodeAndAllParents(parent);
            }
        }
        this._$tree.on('changed.jstree', function (e, data) {
            if (!data.node) {
                return;
            }
            var wasInTreeChangeEvent = inTreeChangeEvent;
            if (!wasInTreeChangeEvent) {
                inTreeChangeEvent = true;
            }
            var childrenNodes;
            if (data.node.state.selected) {
                selectNodeAndAllParents(_this._$tree.jstree('get_parent', data.node));
                childrenNodes = $.makeArray(_this._$tree.jstree('get_children_dom', data.node));
                _this._$tree.jstree('select_node', childrenNodes);
            }
            else {
                childrenNodes = $.makeArray(_this._$tree.jstree('get_children_dom', data.node));
                _this._$tree.jstree('deselect_node', childrenNodes);
            }
            if (!wasInTreeChangeEvent) {
                inTreeChangeEvent = false;
            }
        });
    };
    FeatureTreeComponent.prototype.customizeTreeNodes = function () {
        var self = this;
        self._$tree.find('.jstree-node').each(function () {
            var $nodeLi = $(this);
            var $nodeA = $nodeLi.find('.jstree-anchor');
            var featureName = $nodeLi.attr('id');
            var feature = self.findFeatureByName(featureName);
            var featureValue = self.findFeatureValueByName(featureName) || '';
            if (!feature || !feature.inputType) {
                return;
            }
            if (feature.inputType.name === 'CHECKBOX') {
                //no change for checkbox
            }
            else if (feature.inputType.name === 'SINGLE_LINE_STRING') {
                if (!$nodeLi.find('.feature-tree-textbox').length) {
                    $nodeA.find('.jstree-checkbox').hide();
                    var inputType = 'text';
                    var validator = feature.inputType.validator;
                    if (feature.inputType.validator) {
                        if (feature.inputType.validator.name === 'NUMERIC') {
                            inputType = 'number';
                        }
                    }
                    var $textbox_1 = $('<input class="feature-tree-textbox" type="' + inputType + '" />')
                        .val(featureValue);
                    if (inputType === 'number') {
                        $textbox_1.attr('min', validator.minValue);
                        $textbox_1.attr('max', validator.maxValue);
                    }
                    else {
                        if (feature.inputType.validator && feature.inputType.validator.name === 'STRING') {
                            if (validator.maxLength > 0) {
                                $textbox_1.attr('maxlength', validator.maxLength);
                            }
                            if (validator.minLength > 0) {
                                $textbox_1.attr('required', 'required');
                            }
                            if (validator.regularExpression) {
                                $textbox_1.attr('pattern', validator.regularExpression);
                            }
                        }
                    }
                    $textbox_1.on('input propertychange paste', function () {
                        var value = $textbox_1.val();
                        if (self.isFeatureValueValid(featureName, value)) {
                            self.setFeatureValueByName(featureName, value);
                            $textbox_1.removeClass('feature-tree-textbox-invalid');
                        }
                        else {
                            $textbox_1.addClass('feature-tree-textbox-invalid');
                        }
                    });
                    $textbox_1.appendTo($nodeLi);
                }
            }
            else if (feature.inputType.name === 'COMBOBOX') {
                if (!$nodeLi.find('.feature-tree-combobox').length) {
                    $nodeA.find('.jstree-checkbox').hide();
                    var $combobox_1 = $('<select class="feature-tree-combobox" />');
                    var inputType = feature.inputType;
                    lodash__WEBPACK_IMPORTED_MODULE_3__["each"](inputType.itemSource.items, function (opt) {
                        $('<option></option>')
                            .attr('value', opt.value)
                            .text(opt.displayText)
                            .appendTo($combobox_1);
                    });
                    $combobox_1
                        .val(featureValue)
                        .on('change', function () {
                        var value = $combobox_1.val();
                        self.setFeatureValueByName(featureName, value);
                    })
                        .appendTo($nodeLi);
                }
            }
        });
    };
    FeatureTreeComponent.prototype.getNodeLiByFeatureName = function (featureName) {
        return $('#' + featureName.replace('.', '\\.'));
    };
    FeatureTreeComponent.prototype.selectNodeAndAllParents = function (node) {
        var self = this;
        self._$tree.jstree('select_node', node, true);
        var parent = self._$tree.jstree('get_parent', node);
        if (parent) {
            self.selectNodeAndAllParents(parent);
        }
    };
    FeatureTreeComponent.prototype.findFeatureByName = function (featureName) {
        var self = this;
        var feature = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](self._editData.features, function (f) { return f.name === featureName; });
        if (!feature) {
            abp.log.warn('Could not find a feature by name: ' + featureName);
        }
        return feature;
    };
    FeatureTreeComponent.prototype.findFeatureValueByName = function (featureName) {
        var self = this;
        var feature = self.findFeatureByName(featureName);
        if (!feature) {
            return '';
        }
        var featureValue = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](self._editData.featureValues, function (f) { return f.name === featureName; });
        if (!featureValue) {
            return feature.defaultValue;
        }
        return featureValue.value;
    };
    FeatureTreeComponent.prototype.isFeatureValueValid = function (featureName, value) {
        var self = this;
        var feature = self.findFeatureByName(featureName);
        if (!feature || !feature.inputType || !feature.inputType.validator) {
            return true;
        }
        var validator = feature.inputType.validator;
        if (validator.name === 'STRING') {
            if (value === undefined || value === null) {
                return validator.allowNull;
            }
            if (typeof value !== 'string') {
                return false;
            }
            if (validator.minLength > 0 && value.length < validator.minLength) {
                return false;
            }
            if (validator.maxLength > 0 && value.length > validator.maxLength) {
                return false;
            }
            if (validator.regularExpression) {
                return (new RegExp(validator.regularExpression)).test(value);
            }
        }
        else if (validator.name === 'NUMERIC') {
            var numValue = parseInt(value);
            if (isNaN(numValue)) {
                return false;
            }
            var minValue = validator.minValue;
            if (minValue > numValue) {
                return false;
            }
            var maxValue = validator.maxValue;
            if (maxValue > 0 && numValue > maxValue) {
                return false;
            }
        }
        return true;
    };
    FeatureTreeComponent.prototype.areAllValuesValid = function () {
        var self = this;
        self._$tree.find('.jstree-node').each(function () {
            var $nodeLi = $(this);
            var featureName = $nodeLi.attr('id');
            var feature = self.findFeatureByName(featureName);
            if (feature && (!feature.inputType || feature.inputType.name === 'CHECKBOX')) {
                var value = self._$tree.jstree('is_checked', $nodeLi) ? 'true' : 'false';
                self.setFeatureValueByName(featureName, value);
            }
        });
        return self._$tree.find('.feature-tree-textbox-invalid').length <= 0;
    };
    FeatureTreeComponent.prototype.setFeatureValueByName = function (featureName, value) {
        var featureValue = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this._editData.featureValues, function (f) { return f.name === featureName; });
        if (!featureValue) {
            return;
        }
        featureValue.value = value;
    };
    FeatureTreeComponent.prototype.getFeatureValueByName = function (featureName) {
        var featureValue = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this._editData.featureValues, function (f) { return f.name === featureName; });
        if (!featureValue) {
            return null;
        }
        return featureValue.value;
    };
    FeatureTreeComponent.prototype.isFeatureEnabled = function (featureName) {
        var self = this;
        var value = self.findFeatureValueByName(featureName);
        return value.toLowerCase() === 'true';
    };
    FeatureTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'feature-tree',
            template: "<div class=\"feature-tree\"></div>",
            styles: [__webpack_require__(/*! ./feature-tree.component.less */ "./src/app/admin/shared/feature-tree.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], FeatureTreeComponent);
    return FeatureTreeComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/shared/organization-unit-tree.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/shared/organization-unit-tree.component.ts ***!
  \******************************************************************/
/*! exports provided: OrganizationUnitsTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationUnitsTreeComponent", function() { return OrganizationUnitsTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_helpers_HtmlHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/helpers/HtmlHelper */ "./src/shared/helpers/HtmlHelper.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
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




var OrganizationUnitsTreeComponent = /** @class */ (function (_super) {
    __extends(OrganizationUnitsTreeComponent, _super);
    function OrganizationUnitsTreeComponent(_element, injector) {
        var _this = _super.call(this, injector) || this;
        _this._element = _element;
        _this.filter = '';
        return _this;
    }
    Object.defineProperty(OrganizationUnitsTreeComponent.prototype, "data", {
        set: function (data) {
            this._allOrganizationUnits = data.allOrganizationUnits;
            this._selectedOrganizationUnits = data.selectedOrganizationUnits;
            this.refreshTree();
        },
        enumerable: true,
        configurable: true
    });
    OrganizationUnitsTreeComponent.prototype.ngAfterViewInit = function () {
        this._$tree = $(this._element.nativeElement).find('.organization-unit-tree');
        this.refreshTree();
        this.initFiltering();
    };
    OrganizationUnitsTreeComponent.prototype.getSelectedOrganizations = function () {
        if (!this._$tree || !this._createdTreeBefore) {
            return [];
        }
        var organizationIds = [];
        var selectedOrganizations = this._$tree.jstree('get_selected', true);
        for (var i = 0; i < selectedOrganizations.length; i++) {
            organizationIds.push(selectedOrganizations[i].original.id);
        }
        return organizationIds;
    };
    OrganizationUnitsTreeComponent.prototype.refreshTree = function () {
        var _this = this;
        var self = this;
        if (this._createdTreeBefore) {
            this._$tree.jstree('destroy');
        }
        this._createdTreeBefore = false;
        if (!this._allOrganizationUnits || !this._$tree) {
            return;
        }
        var treeData = lodash__WEBPACK_IMPORTED_MODULE_3__["map"](this._allOrganizationUnits, function (item) { return ({
            id: item.id,
            parent: item.parentId ? item.parentId : '#',
            code: item.code,
            displayName: item.displayName,
            memberCount: item.memberCount,
            text: _shared_helpers_HtmlHelper__WEBPACK_IMPORTED_MODULE_2__["HtmlHelper"].encodeText(item.displayName),
            dto: item,
            state: {
                opened: true,
                selected: lodash__WEBPACK_IMPORTED_MODULE_3__["includes"](self._selectedOrganizationUnits, item.code)
            }
        }); });
        this._$tree.jstree({
            'core': {
                data: treeData
            },
            'types': {
                'default': {
                    'icon': 'fa fa-folder m--font-warning'
                },
                'file': {
                    'icon': 'fa fa-file m--font-warning'
                }
            },
            'checkbox': {
                keep_selected_style: false,
                three_state: false,
                cascade: ''
            },
            'search': {
                'show_only_matches': true
            },
            plugins: ['checkbox', 'types', 'search']
        });
        this._createdTreeBefore = true;
        var inTreeChangeEvent = false;
        function selectNodeAndAllParents(node) {
            self._$tree.jstree('select_node', node, true);
            var parent = self._$tree.jstree('get_parent', node);
            if (parent) {
                selectNodeAndAllParents(parent);
            }
        }
        this._$tree.on('changed.jstree', function (e, data) {
            if (!data.node) {
                return;
            }
            var wasInTreeChangeEvent = inTreeChangeEvent;
            if (!wasInTreeChangeEvent) {
                inTreeChangeEvent = true;
            }
            var childrenNodes;
            if (data.node.state.selected) {
                selectNodeAndAllParents(_this._$tree.jstree('get_parent', data.node));
                childrenNodes = $.makeArray(_this._$tree.jstree('get_children_dom', data.node));
                _this._$tree.jstree('select_node', childrenNodes);
            }
            else {
                childrenNodes = $.makeArray(_this._$tree.jstree('get_children_dom', data.node));
                _this._$tree.jstree('deselect_node', childrenNodes);
            }
            if (!wasInTreeChangeEvent) {
                inTreeChangeEvent = false;
            }
        });
    };
    OrganizationUnitsTreeComponent.prototype.initFiltering = function () {
        var to = false;
        var self = this;
        $('#OrganizationUnitsTreeFilter').keyup(function () {
            if (to) {
                window.clearTimeout(to);
            }
            to = window.setTimeout(function () {
                var v = $('#OrganizationUnitsTreeFilter').val();
                self._$tree.jstree(true).search(v);
            }, 250);
        });
    };
    OrganizationUnitsTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'organization-unit-tree',
            template: "<div class='form-group'>\n        <input id='OrganizationUnitsTreeFilter' type='text' class='form-control' placeholder='{{l(\"SearchWithThreeDot\")}}' >\n    </div>\n    <div class=\"organization-unit-tree\"></div>\n    "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], OrganizationUnitsTreeComponent);
    return OrganizationUnitsTreeComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/shared/permission-combo.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/shared/permission-combo.component.ts ***!
  \************************************************************/
/*! exports provided: PermissionComboComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionComboComponent", function() { return PermissionComboComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
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



var PermissionComboComponent = /** @class */ (function (_super) {
    __extends(PermissionComboComponent, _super);
    function PermissionComboComponent(_permissionService, injector) {
        var _this = _super.call(this, injector) || this;
        _this._permissionService = _permissionService;
        _this.permissions = [];
        _this.selectedPermission = undefined;
        _this.selectedPermissionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    PermissionComboComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this._permissionService.getAllPermissions().subscribe(function (result) {
            $.each(result.items, function (index, item) {
                item.displayName = Array(item.level + 1).join('---') + ' ' + item.displayName;
            });
            _this.permissions = result.items;
            setTimeout(function () {
                $(self.permissionComboboxElement.nativeElement).selectpicker('refresh');
            }, 0);
        });
    };
    PermissionComboComponent.prototype.ngAfterViewInit = function () {
        $(this.permissionComboboxElement.nativeElement).selectpicker({
            iconBase: 'famfamfam-flag',
            tickIcon: 'fa fa-check'
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('PermissionCombobox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PermissionComboComponent.prototype, "permissionComboboxElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PermissionComboComponent.prototype, "selectedPermission", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PermissionComboComponent.prototype, "selectedPermissionChange", void 0);
    PermissionComboComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'permission-combo',
            template: "<select #PermissionCombobox\n        class=\"form-control\"\n        [(ngModel)]=\"selectedPermission\"\n        (ngModelChange)=\"selectedPermissionChange.emit($event)\"\n        [attr.data-live-search]=\"true\">\n            <option value=\"\">{{l('FilterByPermission')}}</option>\n            <option *ngFor=\"let permission of permissions\" [value]=\"permission.name\">{{permission.displayName}}</option>\n    </select>"
        }),
        __metadata("design:paramtypes", [_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["PermissionServiceProxy"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], PermissionComboComponent);
    return PermissionComboComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/shared/permission-tree.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/shared/permission-tree.component.ts ***!
  \***********************************************************/
/*! exports provided: PermissionTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionTreeComponent", function() { return PermissionTreeComponent; });
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



var PermissionTreeComponent = /** @class */ (function (_super) {
    __extends(PermissionTreeComponent, _super);
    function PermissionTreeComponent(_element, injector) {
        var _this = _super.call(this, injector) || this;
        _this._element = _element;
        return _this;
    }
    Object.defineProperty(PermissionTreeComponent.prototype, "editData", {
        set: function (val) {
            this._editData = val;
            this.refreshTree();
        },
        enumerable: true,
        configurable: true
    });
    PermissionTreeComponent.prototype.ngOnInit = function () {
    };
    PermissionTreeComponent.prototype.ngAfterViewInit = function () {
        this._$tree = $(this._element.nativeElement);
        this.refreshTree();
    };
    PermissionTreeComponent.prototype.ngAfterViewChecked = function () {
    };
    PermissionTreeComponent.prototype.getGrantedPermissionNames = function () {
        if (!this._$tree || !this._createdTreeBefore) {
            return [];
        }
        var permissionNames = [];
        var selectedPermissions = this._$tree.jstree('get_selected', true);
        for (var i = 0; i < selectedPermissions.length; i++) {
            permissionNames.push(selectedPermissions[i].original.id);
        }
        return permissionNames;
    };
    PermissionTreeComponent.prototype.refreshTree = function () {
        var self = this;
        if (this._createdTreeBefore) {
            this._$tree.jstree('destroy');
        }
        this._createdTreeBefore = false;
        if (!this._editData || !this._$tree) {
            return;
        }
        var treeData = lodash__WEBPACK_IMPORTED_MODULE_2__["map"](this._editData.permissions, function (item) {
            return {
                id: item.name,
                parent: item.parentName ? item.parentName : '#',
                text: item.displayName,
                state: {
                    opened: true,
                    selected: lodash__WEBPACK_IMPORTED_MODULE_2__["includes"](self._editData.grantedPermissionNames, item.name)
                }
            };
        });
        this._$tree.jstree({
            'core': {
                data: treeData
            },
            'types': {
                'default': {
                    'icon': 'fa fa-folder m--font-warning'
                },
                'file': {
                    'icon': 'fa fa-file m--font-warning'
                }
            },
            'checkbox': {
                keep_selected_style: false,
                three_state: false,
                cascade: ''
            },
            plugins: ['checkbox', 'types']
        });
        this._createdTreeBefore = true;
        var inTreeChangeEvent = false;
        function selectNodeAndAllParents(node) {
            self._$tree.jstree('select_node', node, true);
            var parent = self._$tree.jstree('get_parent', node);
            if (parent) {
                selectNodeAndAllParents(parent);
            }
        }
        this._$tree.on('changed.jstree', function (e, data) {
            if (!data.node) {
                return;
            }
            var wasInTreeChangeEvent = inTreeChangeEvent;
            if (!wasInTreeChangeEvent) {
                inTreeChangeEvent = true;
            }
            var childrenNodes;
            if (data.node.state.selected) {
                selectNodeAndAllParents(self._$tree.jstree('get_parent', data.node));
                childrenNodes = $.makeArray(self._$tree.jstree('get_children_dom', data.node));
                self._$tree.jstree('select_node', childrenNodes);
            }
            else {
                childrenNodes = $.makeArray(self._$tree.jstree('get_children_dom', data.node));
                self._$tree.jstree('deselect_node', childrenNodes);
            }
            if (!wasInTreeChangeEvent) {
                inTreeChangeEvent = false;
            }
        });
    };
    PermissionTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'permission-tree',
            template: "<div class=\"permission-tree\"></div>"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], PermissionTreeComponent);
    return PermissionTreeComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/shared/role-combo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/shared/role-combo.component.ts ***!
  \******************************************************/
/*! exports provided: RoleComboComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComboComponent", function() { return RoleComboComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
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



var RoleComboComponent = /** @class */ (function (_super) {
    __extends(RoleComboComponent, _super);
    function RoleComboComponent(_roleService, injector) {
        var _this = _super.call(this, injector) || this;
        _this._roleService = _roleService;
        _this.roles = [];
        _this.selectedRole = undefined;
        _this.selectedRoleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.emptyText = '';
        return _this;
    }
    RoleComboComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this._roleService.getRoles(undefined).subscribe(function (result) {
            _this.roles = result.items;
            setTimeout(function () {
                $(self.roleComboboxElement.nativeElement).selectpicker('refresh');
            }, 0);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('RoleCombobox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RoleComboComponent.prototype, "roleComboboxElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RoleComboComponent.prototype, "selectedRole", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RoleComboComponent.prototype, "selectedRoleChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoleComboComponent.prototype, "emptyText", void 0);
    RoleComboComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'role-combo',
            template: "<select #RoleCombobox\n        class=\"form-control\"\n        [(ngModel)]=\"selectedRole\"\n        (ngModelChange)=\"selectedRoleChange.emit($event)\"\n        [attr.data-live-search]=\"true\"\n        jq-plugin=\"selectpicker\">\n            <option value=\"\">{{emptyText}}</option>\n            <option *ngFor=\"let role of roles\" [value]=\"role.id\">{{role.displayName}}</option>\n    </select>"
        }),
        __metadata("design:paramtypes", [_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["RoleServiceProxy"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], RoleComboComponent);
    return RoleComboComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/subscription-management/invoice/invoice.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/subscription-management/invoice/invoice.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-content\">\n\n        <div class=\"m-portlet\">\n            <div class=\"m-portlet__body m-portlet__body--no-padding\">\n\n                <div class=\"m-invoice-1\">\n                    <div class=\"m-invoice__wrapper\">\n                        <div class=\"m-invoice__head\" [ngStyle]=\"{ 'background': 'url(' + appRootUrl() + 'assets/common/images/bg-6.jpg)', 'background-size': 'cover'}\"\n                             style=\"background-image: url(/assets/common/images/bg-6.jpg);\">\n                            <div class=\"m-invoice__container m-invoice__container--centered\">\n                                <div class=\"m-invoice__logo\">\n                                    <a href=\"#\">\n                                        <h1>{{l('Invoice')}}</h1>\n                                    </a>\n                                    <a href=\"#\">\n                                        <img [src]=\"companyLogo\">\n                                    </a>\n                                </div>\n                                <span class=\"m-invoice__desc\">\n                                    {{invoiceInfo.hostLegalName}}\n                                    <span *ngFor=\"let addressLine of invoiceInfo.hostAddress\">\n                                        <br />{{addressLine}}\n                                    </span>\n                                </span>\n                                <div class=\"m-invoice__items\">\n                                    <div class=\"m-invoice__item\">\n                                        <span class=\"m-invoice__subtitle\">{{l('Date')}}</span>\n                                        <span class=\"m-invoice__text\">{{invoiceInfo.invoiceDate | momentFormat:'YYYY-MM-DD'}}</span>\n                                    </div>\n                                    <div class=\"m-invoice__item\">\n                                        <span class=\"m-invoice__subtitle\">{{l('Invoice')}}</span>\n                                        <span class=\"m-invoice__text\">#{{invoiceInfo.invoiceNo}}</span>\n                                    </div>\n                                    <div class=\"m-invoice__item\">\n                                        <span class=\"m-invoice__subtitle\">{{l('InvoiceTo')}}</span>\n                                        <span class=\"m-invoice__text\">\n                                            {{invoiceInfo.tenantLegalName}}\n                                            <span *ngFor=\"let addressLine of invoiceInfo.tenantAddress\">\n                                                <br />{{addressLine}}\n                                            </span>\n                                            <br />{{l(\"Tax/VatNo\")}}: {{invoiceInfo.tenantTaxNo}}\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"m-invoice__body m-invoice__body--centered\">\n                            <div class=\"table-responsive\">\n                                <table class=\"table\">\n                                    <thead>\n                                    <tr>\n                                        <th style=\"width: 50px;\">#</th>\n                                        <th>{{l(\"Edition\")}}</th>\n                                        <th style=\"width: 100px;\">{{l(\"Amount\")}}</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr>\n                                        <td>1</td>\n                                        <td>{{invoiceInfo.editionDisplayName}}</td>\n                                        <td>${{invoiceInfo.amount | number: '1.2-2'}}</td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <div class=\"m-invoice__footer\">\n                            <div class=\"m-invoice__container m-invoice__container--centered\">\n                                <div class=\"m-invoice__content\">\n                                    <button type=\"button\" class=\"btn btn-primary d-print-none print-btn\" onclick=\"javascript:window.print();\">{{(\"Print\")}}</button>\n                                </div>\n                                <div class=\"m-invoice__content\">\n                                    <span>{{l(\"Total\")}}</span>\n                                    <span class=\"m-invoice__price\">${{invoiceInfo.amount | number: '1.2-2'}}</span>\n                                    <span></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/subscription-management/invoice/invoice.component.less":
/*!******************************************************************************!*\
  !*** ./src/app/admin/subscription-management/invoice/invoice.component.less ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Cubic Bezier Transition */\n/***\nInvoice page 2\n***/\n.invoice-content-2 {\n  background-color: #fff;\n  padding: 80px 70px;\n}\n.invoice-content-2.bordered {\n  border: 1px solid;\n  border-color: #e7ecf1;\n}\n.invoice-content-2 .invoice-head {\n  margin-bottom: 50px;\n}\n.invoice-content-2 .invoice-head .invoice-logo > img {\n  display: inline-block;\n}\n.invoice-content-2 .invoice-head .invoice-logo > h1 {\n  float: left;\n  font-size: 17px;\n  font-weight: 700;\n  color: #39424a;\n  margin-top: 48px;\n}\n.invoice-content-2 .invoice-head .company-address {\n  text-align: right;\n  font-size: 14px;\n  color: #7e8691;\n}\n.invoice-content-2 .invoice-title {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  color: #9ea8b7;\n}\n.invoice-content-2 .invoice-desc {\n  font-size: 14px;\n  color: #4e5a64;\n  font-weight: 600;\n}\n.invoice-content-2 .invoice-desc.inv-address {\n  font-size: 13px;\n  color: #7e8691;\n  font-weight: 400;\n}\n.invoice-content-2 .invoice-desc.grand-total {\n  font-size: 16px;\n  font-weight: 700;\n}\n.invoice-content-2 .invoice-cust-add {\n  margin-bottom: 50px;\n}\n.invoice-content-2 .invoice-body {\n  padding-top: 100px;\n}\n.invoice-content-2 .invoice-body .text-center {\n  text-align: center;\n}\n.invoice-content-2 .invoice-body tr:last-child {\n  border-bottom: 1px solid #e7ecf1;\n}\n.invoice-content-2 .invoice-body th,\n.invoice-content-2 .invoice-body td {\n  vertical-align: middle;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.invoice-content-2 .invoice-body th:first-child,\n.invoice-content-2 .invoice-body td:first-child {\n  padding-left: 0;\n}\n.invoice-content-2 .invoice-body th:last-child,\n.invoice-content-2 .invoice-body td:last-child {\n  padding-right: 0;\n}\n.invoice-content-2 .invoice-body h3 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #4e5a64;\n  margin-bottom: 0;\n}\n.invoice-content-2 .invoice-body p {\n  font-size: 13px;\n  color: #7e8691;\n}\n.invoice-content-2 .print-btn {\n  float: right;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n@media (max-width: 1024px) {\n  .invoice-content-2 .invoice-head .invoice-logo > img {\n    width: 130px;\n    margin-top: 26px;\n  }\n}\n@media (max-width: 991px) {\n  .invoice-content-2 {\n    padding: 40px 30px;\n  }\n}\n@media (max-width: 480px) {\n  .invoice-content-2 .invoice-head .invoice-logo > h1 {\n    margin-top: 10px;\n  }\n  .invoice-content-2 .invoice-head .company-address {\n    font-size: 12px;\n  }\n}\n.invoice-content-2 .invoice-body table tbody tr:last-child {\n  border-bottom: none;\n}\n.invoice-subtotal {\n  margin-top: 350px;\n}\n"

/***/ }),

/***/ "./src/app/admin/subscription-management/invoice/invoice.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/subscription-management/invoice/invoice.component.ts ***!
  \****************************************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
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






var InvoiceComponent = /** @class */ (function (_super) {
    __extends(InvoiceComponent, _super);
    function InvoiceComponent(injector, _invoiceServiceProxy, activatedRoute) {
        var _this = _super.call(this, injector) || this;
        _this._invoiceServiceProxy = _invoiceServiceProxy;
        _this.activatedRoute = activatedRoute;
        _this.paymentId = 0;
        _this.invoiceInfo = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["InvoiceDto"]();
        _this.companyLogo = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__["AppConsts"].appBaseUrl + '/assets/common/images/logo.png';
        return _this;
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        this.getAllInfo();
    };
    InvoiceComponent.prototype.getAllInfo = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.paymentId = params['paymentId'];
        });
        this._invoiceServiceProxy.getInvoiceInfo(this.paymentId).subscribe(function (result) {
            _this.invoiceInfo = result;
        });
    };
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/admin/subscription-management/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.less */ "./src/app/admin/subscription-management/invoice/invoice.component.less")],
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["InvoiceServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], InvoiceComponent);
    return InvoiceComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/subscription-management/subscription-management.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/subscription-management/subscription-management.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-subheader \">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto\">\n                <h3 class=\"m-subheader__title\">\n                    <span>{{l(\"Subscription\")}}</span>\n                </h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"m-content\">\n        <div class=\"m-portlet m-portlet--mobile\">\n            <div class=\"m-portlet__body\">\n                <tabset class=\"tab-container tabbable-line\">\n                    <tab heading=\"{{l('SubscriptionInformation')}}\" customClass=\"m-tabs__item\">\n                        <form class=\"m-form m-form--label-align-right\">\n                            <input type=\"hidden\" Name=\"PaymentPeriodType\" value=\"@tenant.PaymentPeriodType\" />\n                            <input type=\"hidden\" Name=\"Gateway\" value=\"@SubscriptionPaymentGatewayType.Paypal\" />\n\n                            <div class=\"form-group m-form__group row\">\n                                <label class=\"col-sm-4 control-label m--font-bold\">{{l(\"Edition\")}}</label>\n                                <div class=\"col-sm-8\">\n                                    <p *ngIf=\"tenant.edition\">\n                                        {{tenant.edition.displayName}}\n                                        <span *ngIf=\"tenant.edition.isFree\" class=\"m-badge m-badge--success m-badge--wide\">{{l(\"Free\")}}</span>\n                                        <span *ngIf=\"tenant.isInTrialPeriod\" class=\"m-badge m-badge--warning m-badge--wide\">{{l(\"Trial\")}}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group m-form__group row\">\n                                <label class=\"col-sm-4 control-label m--font-bold\">{{l(\"SubscriptionStartDate\")}}</label>\n                                <div class=\"col-sm-8\">\n                                    <p>{{ tenant.creationTimeString }}</p>\n                                </div>\n                            </div>\n                            <div class=\"form-group m-form__group row\">\n                                <label class=\"col-sm-4 control-label m--font-bold\">{{l(\"SubscriptionEndDate\")}}</label>\n                                <div class=\"col-sm-8\">\n                                    <p *ngIf=\"tenant.edition\">\n                                        <span>{{tenant.subscriptionDateString}}</span>\n                                    </p>\n                                </div>\n                            </div>\n                            <div class=\"form-group m-form__group row\">\n                                <label class=\"col-sm-4 control-label\"></label>\n                                <div class=\"col-sm-8\">\n                                    <a *ngIf=\"tenant.edition && !tenant.edition.isFree && !tenant.isInTrialPeriod\"\n                                       [routerLink]=\"['/account/extend']\" [queryParams]=\"{ editionPaymentType: editionPaymentType.Extend}\" class=\"btn btn-info\">\n                                        {{l(\"Extend\")}}\n                                    </a>\n                                    <a *ngIf=\"tenant.isInTrialPeriod\"\n                                       [routerLink]=\"['/account/buy']\" [queryParams]=\"{editionPaymentType: editionPaymentType.BuyNow, editionId: tenant.edition.id }\"\n                                       class=\"btn btn-info\">\n                                        {{l(\"BuyNow\")}}\n                                    </a>\n                                    <a *ngIf=\"tenant.edition && (tenant.edition.isFree || !tenant.edition.isHighestEdition) && !tenant.isInTrialPeriod\"\n                                       [routerLink]=\"['/account/select-edition']\" class=\"btn btn-warning\">\n                                        {{l(\"Upgrade\")}}\n                                    </a>\n                                </div>\n                            </div>\n                        </form>\n                    </tab>\n                    <tab heading=\"{{l('PaymentHistory')}}\" customClass=\"m-tabs__item\">\n                        <div class=\"primeng-datatable-container\"\n                             [busyIf]=\"primengTableHelper.isLoading\">\n                            <p-table #dataTable\n                                         (onLazyLoad)=\"getPaymentHistory($event)\"\n                                         [value]=\"primengTableHelper.records\"\n                                         rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                                         [paginator]=\"false\"\n                                         [lazy]=\"true\"\n                                         [responsive]=\"primengTableHelper.isResponsive\">\n                                <ng-template pTemplate=\"header\">\n                                    <tr>\n                                        <th>{{l('Invoice')}}</th>\n                                        <th pSortableColumn=\"creationTime\">\n                                            {{l('ProcessTime')}}\n                                            <p-sortIcon field=\"creationTime\"></p-sortIcon>\n                                        </th>\n                                        <th pSortableColumn=\"editionDisplayName\">\n                                            {{l('Edition')}}\n                                            <p-sortIcon field=\"editionDisplayName\"></p-sortIcon>\n                                        </th>\n                                        <th pSortableColumn=\"gateway\">\n                                            {{l('Gateway')}}\n                                            <p-sortIcon field=\"gateway\"></p-sortIcon>\n                                        </th>\n                                        <th pSortableColumn=\"amount\">\n                                            {{l('Amount')}}\n                                            <p-sortIcon field=\"amount\"></p-sortIcon>\n                                        </th>\n                                        <th pSortableColumn=\"status\">\n                                            {{l('Status')}}\n                                            <p-sortIcon field=\"status\"></p-sortIcon>\n                                        </th>\n                                        <th pSortableColumn=\"paymentPeriodType\">\n                                            {{l('Period')}}\n                                            <p-sortIcon field=\"paymentPeriodType\"></p-sortIcon>\n                                        </th>\n                                        <th>{{l('DayCount')}}</th>\n                                        <th style=\"width: 250px;\">{{l('PaymentId')}}</th>\n                                        <th pSortableColumn=\"invoiceNo\">\n                                            {{l('InvoiceNo')}}\n                                            <p-sortIcon field=\"invoiceNo\"></p-sortIcon>\n                                        </th>\n                                    </tr>\n                                </ng-template>\n                                <ng-template pTemplate=\"body\" let-record=\"$implicit\">\n                                    <tr>\n                                        <td>\n                                            <button type=\"button\" class=\"btn btn-sm btn-primary blue\" (click)=\"createOrShowInvoice(record.id, record.invoiceNo)\">{{l('ShowInvoice')}}</button>\n                                        </td>\n                                        <td>\n                                            <span *ngIf=\"record.creationTime\">{{record.creationTime | momentFormat:'L'}}</span>\n                                            <span *ngIf=\"!record.creationTime\">-</span>\n                                        </td>\n                                        <td>{{record.editionDisplayName}}</td>\n                                        <td>\n                                            {{l('SubscriptionPaymentGatewayType_' + record.gateway)}}\n                                        </td>\n                                        <td>\n                                            {{record.amount}}\n                                        </td>\n                                        <td>\n                                            {{l('SubscriptionPaymentStatus_' + record.status)}}\n                                        </td>\n                                        <td>\n                                            {{l('PaymentPeriodType_' + record.paymentPeriodType)}}\n                                        </td>\n                                        <td>\n                                            {{record.dayCount}}\n                                        </td>\n                                        <td style=\"width: 250px;\">\n                                            {{record.paymentId}}\n                                        </td>\n                                        <td>\n                                            {{record.invoiceNo}}\n                                        </td>\n                                    </tr>\n                                </ng-template>\n                            </p-table>\n                            <div class=\"primeng-paging-container\">\n                                <p-paginator rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                                             #paginator\n                                             (onPageChange)=\"getPaymentHistory($event)\"\n                                             [totalRecords]=\"primengTableHelper.totalRecordsCount\"\n                                             [rowsPerPageOptions]=\"primengTableHelper.predefinedRecordsCountPerPage\">\n                                </p-paginator>\n                                <span class=\"total-records-count\">\n                                    {{l('TotalRecordsCount', primengTableHelper.totalRecordsCount)}}\n                                </span>\n                            </div>\n                        </div>\n                    </tab>\n                </tabset>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/subscription-management/subscription-management.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/subscription-management/subscription-management.component.ts ***!
  \************************************************************************************/
/*! exports provided: SubscriptionManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionManagementComponent", function() { return SubscriptionManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/AppEnums */ "./src/shared/AppEnums.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/common/session/app-session.service */ "./src/shared/common/session/app-session.service.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/components/paginator/paginator */ "./node_modules/primeng/components/paginator/paginator.js");
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/components/table/table */ "./node_modules/primeng/components/table/table.js");
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_components_table_table__WEBPACK_IMPORTED_MODULE_8__);
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









var SubscriptionManagementComponent = /** @class */ (function (_super) {
    __extends(SubscriptionManagementComponent, _super);
    function SubscriptionManagementComponent(injector, _sessionService, _paymentServiceProxy, _appSessionService, _invoiceServiceProxy, _activatedRoute) {
        var _this = _super.call(this, injector) || this;
        _this._sessionService = _sessionService;
        _this._paymentServiceProxy = _paymentServiceProxy;
        _this._appSessionService = _appSessionService;
        _this._invoiceServiceProxy = _invoiceServiceProxy;
        _this._activatedRoute = _activatedRoute;
        _this.user = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["UserLoginInfoDto"]();
        _this.tenant = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["TenantLoginInfoDto"]();
        _this.application = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["ApplicationInfoDto"]();
        _this.subscriptionStartType = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["SubscriptionStartType"];
        _this.editionPaymentType = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_2__["EditionPaymentType"];
        _this.filterText = '';
        _this.filterText = _this._activatedRoute.snapshot.queryParams['filterText'] || '';
        return _this;
    }
    SubscriptionManagementComponent.prototype.ngAfterViewChecked = function () {
        //Temporary fix for: https://github.com/valor-software/ngx-bootstrap/issues/1508
        $('tabset ul.nav').addClass('m-tabs-line');
        $('tabset ul.nav li a.nav-link').addClass('m-tabs__link');
    };
    SubscriptionManagementComponent.prototype.ngOnInit = function () {
        this.getSettings();
    };
    SubscriptionManagementComponent.prototype.createOrShowInvoice = function (paymentId, invoiceNo) {
        var _this = this;
        if (invoiceNo) {
            window.open('/app/admin/invoice/' + paymentId, '_blank');
        }
        else {
            this._invoiceServiceProxy.createInvoice(new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["CreateInvoiceDto"]({ subscriptionPaymentId: paymentId })).subscribe(function () {
                _this.getPaymentHistory();
                window.open('/app/admin/invoice/' + paymentId, '_blank');
            });
        }
    };
    SubscriptionManagementComponent.prototype.getSettings = function () {
        var _this = this;
        this.loading = true;
        this._appSessionService.init().then(function () {
            _this.loading = false;
            _this.user = _this._appSessionService.user;
            _this.tenant = _this._appSessionService.tenant;
            _this.application = _this._appSessionService.application;
        });
    };
    SubscriptionManagementComponent.prototype.getPaymentHistory = function (event) {
        var _this = this;
        if (this.primengTableHelper.shouldResetPaging(event)) {
            this.paginator.changePage(0);
            return;
        }
        this.primengTableHelper.showLoadingIndicator();
        this._paymentServiceProxy.getPaymentHistory(this.primengTableHelper.getSorting(this.dataTable), this.primengTableHelper.getMaxResultCount(this.paginator, event), this.primengTableHelper.getSkipCount(this.paginator, event)).subscribe(function (result) {
            _this.primengTableHelper.totalRecordsCount = result.totalCount;
            _this.primengTableHelper.records = result.items;
            _this.primengTableHelper.hideLoadingIndicator();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataTable'),
        __metadata("design:type", primeng_components_table_table__WEBPACK_IMPORTED_MODULE_8__["Table"])
    ], SubscriptionManagementComponent.prototype, "dataTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginator'),
        __metadata("design:type", primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_7__["Paginator"])
    ], SubscriptionManagementComponent.prototype, "paginator", void 0);
    SubscriptionManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./subscription-management.component.html */ "./src/app/admin/subscription-management/subscription-management.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_3__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["SessionServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["PaymentServiceProxy"],
            _shared_common_session_app_session_service__WEBPACK_IMPORTED_MODULE_5__["AppSessionService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["InvoiceServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SubscriptionManagementComponent);
    return SubscriptionManagementComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/tenants/create-tenant-modal.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/tenants/create-tenant-modal.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #createModal=\"bs-modal\" (onShown)=\"onShown()\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"createModal\"\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\n    <div class=\"modal-dialog modal-lg\">\n\n        <div class=\"modal-content\">\n\n            <form #tenantCreateForm=\"ngForm\" role=\"form\" novalidate class=\"form-validation\" *ngIf=\"active\" (submit)=\"save()\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">\n                        <span>{{l(\"CreateNewTenant\")}}</span>\n                    </h5>\n                    <button type=\"button\" class=\"close\" (click)=\"close()\" [attr.aria-label]=\"l('Close')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n\n                <div class=\"modal-body\">\n\n                    <div class=\"form-group\">\n                        <label for=\"TenancyName\">{{l(\"TenancyName\")}} *</label>\n                        <input id=\"TenancyName\" #tenancyNameInput=\"ngModel\" class=\"form-control\" type=\"text\" [ngClass]=\"{'edited':tenant.tenancyName}\" name=\"tenancyName\" [(ngModel)]=\"tenant.tenancyName\" #tenancyName=\"ngModel\" required maxlength=\"64\" pattern=\"^[a-zA-Z][a-zA-Z0-9_-]{1,}$\">\n                        <validation-messages [formCtrl]=\"tenancyNameInput\"></validation-messages>\n                    </div>\n                    <div>\n                        <span class=\"help-block text-danger\" *ngIf=\"!tenancyName.valid && !tenancyName.pristine\">{{l(\"TenantName_Regex_Description\")}}</span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"Name\">{{l(\"Name\")}} *</label>\n                        <input id=\"Name\" #nameInput=\"ngModel\" type=\"text\" name=\"Name\" class=\"form-control\" [ngClass]=\"{'edited':tenant.name}\" [(ngModel)]=\"tenant.name\" required maxlength=\"128\">\n                        <validation-messages [formCtrl]=\"nameInput\"></validation-messages>\n                    </div>\n\n                    <div class=\"m-checkbox-list\">\n                        <label class=\"m-checkbox\">\n                            <input id=\"CreateTenant_UseHostDb\" type=\"checkbox\" name=\"UseHostDb\" [(ngModel)]=\"useHostDb\">\n                            {{l(\"UseHostDatabase\")}}\n                            <span></span>\n                        </label>\n                    </div>\n\n                    <div class=\"form-group\" *ngIf=\"!useHostDb\">\n                        <label for=\"DatabaseConnectionString\">{{l(\"DatabaseConnectionString\")}} *</label>\n                        <input id=\"DatabaseConnectionString\" #connectionStringInput=\"ngModel\" type=\"text\" name=\"ConnectionString\" class=\"form-control\" [(ngModel)]=\"tenant.connectionString\" [ngClass]=\"{'edited':tenant.connectionString}\" required maxlength=\"1024\">\n                        <validation-messages [formCtrl]=\"connectionStringInput\"></validation-messages>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"AdminEmailAddress\">{{l(\"AdminEmailAddress\")}} *</label>\n                        <input id=\"AdminEmailAddress\" #adminEmailAddressInput=\"ngModel\" type=\"email\" name=\"AdminEmailAddress\" class=\"form-control\" [(ngModel)]=\"tenant.adminEmailAddress\" [ngClass]=\"{'edited':tenant.adminEmailAddress}\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{1,})+$\" maxlength=\"256\">\n                        <validation-messages [formCtrl]=\"adminEmailAddressInput\" [errorDefs]=\"[{pattern: l('InvalidEmailAddress')}]\"></validation-messages>\n                    </div>\n\n                    <div class=\"m-checkbox-list\">\n                        <label class=\"m-checkbox\">\n                            <input id=\"CreateTenant_SetRandomPassword\" type=\"checkbox\" name=\"SetRandomPassword\" [(ngModel)]=\"setRandomPassword\">\n                            {{l(\"SetRandomPassword\")}}\n                            <span></span>\n                        </label>\n                    </div>\n\n                    <div class=\"form-group\" *ngIf=\"!setRandomPassword\">\n                        <label for=\"AdminPassword\">{{l(\"AdminPassword\")}}</label>\n                        <input id=\"AdminPassword\" type=\"password\" name=\"adminPassword\" class=\"form-control\" id=\"adminPassword\"\n                               [(ngModel)]=\"tenant.adminPassword\" [ngClass]=\"{'edited':tenant.adminPassword}\" [required]=\"!setRandomPassword\"\n                               #adminPassword=\"ngModel\" validateEqual=\"adminPasswordRepeat\" reverse=\"true\" maxlength=\"32\" [requireDigit]=\"passwordComplexitySetting.requireDigit\" [requireLowercase]=\"passwordComplexitySetting.requireLowercase\"\n                               [requireUppercase]=\"passwordComplexitySetting.requireUppercase\" [requireNonAlphanumeric]=\"passwordComplexitySetting.requireNonAlphanumeric\" [requiredLength]=\"passwordComplexitySetting.requiredLength\">\n                    </div>\n\n                    <div [hidden]=\"tenantCreateForm.form.valid || tenantCreateForm.form.pristine\">\n                        <ul class=\"help-block text-danger\" *ngIf=\"tenantCreateForm.controls['adminPassword'] && tenantCreateForm.controls['adminPassword'].errors\">\n                            <li [hidden]=\"!tenantCreateForm.controls['adminPassword'].errors.requireDigit\">{{l(\"PasswordComplexity_RequireDigit_Hint\")}}</li>\n                            <li [hidden]=\"!tenantCreateForm.controls['adminPassword'].errors.requireLowercase\">{{l(\"PasswordComplexity_RequireLowercase_Hint\")}}</li>\n                            <li [hidden]=\"!tenantCreateForm.controls['adminPassword'].errors.requireUppercase\">{{l(\"PasswordComplexity_RequireUppercase_Hint\")}}</li>\n                            <li [hidden]=\"!tenantCreateForm.controls['adminPassword'].errors.requireNonAlphanumeric\">{{l(\"PasswordComplexity_RequireNonAlphanumeric_Hint\")}}</li>\n                            <li [hidden]=\"!tenantCreateForm.controls['adminPassword'].errors.requiredLength\">{{l(\"PasswordComplexity_RequiredLength_Hint\", passwordComplexitySetting.requiredLength)}}</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"form-group\" *ngIf=\"!setRandomPassword\">\n                        <label for=\"AdminPasswordRepeat\">{{l(\"AdminPasswordRepeat\")}}</label>\n                        <input id=\"AdminPasswordRepeat\" type=\"password\" name=\"adminPasswordRepeat\" class=\"form-control\"\n                               [(ngModel)]=\"tenant.adminPasswordRepeat\" [ngClass]=\"{'edited':tenant.adminPasswordRepeat}\" [required]=\"!setRandomPassword\"\n                               #adminPasswordRepeat=\"ngModel\" [requireDigit]=\"passwordComplexitySetting.requireDigit\" [requireLowercase]=\"passwordComplexitySetting.requireLowercase\"\n                               [requireUppercase]=\"passwordComplexitySetting.requireUppercase\" [requireNonAlphanumeric]=\"passwordComplexitySetting.requireNonAlphanumeric\" [requiredLength]=\"passwordComplexitySetting.requiredLength\"\n                               validateEqual=\"adminPassword\"\n                               maxlength=\"32\">\n                    </div>\n\n                    <div [hidden]=\"tenantCreateForm.form.valid || tenantCreateForm.form.pristine\">\n                        <ul class=\"help-block text-danger\" *ngIf=\"tenantCreateForm.controls['adminPasswordRepeat'] && tenantCreateForm.controls['adminPasswordRepeat'].errors\">\n                            <li [hidden]=\"!tenantCreateForm.controls['adminPasswordRepeat'].errors.requireDigit\">{{l(\"PasswordComplexity_RequireDigit_Hint\")}}</li>\n                            <li [hidden]=\"!tenantCreateForm.controls['adminPasswordRepeat'].errors.requireLowercase\">{{l(\"PasswordComplexity_RequireLowercase_Hint\")}}</li>\n                            <li [hidden]=\"!tenantCreateForm.controls['adminPasswordRepeat'].errors.requireUppercase\">{{l(\"PasswordComplexity_RequireUppercase_Hint\")}}</li>\n                            <li [hidden]=\"!tenantCreateForm.controls['adminPasswordRepeat'].errors.requireNonAlphanumeric\">{{l(\"PasswordComplexity_RequireNonAlphanumeric_Hint\")}}</li>\n                            <li [hidden]=\"!tenantCreateForm.controls['adminPasswordRepeat'].errors.requiredLength\">{{l(\"PasswordComplexity_RequiredLength_Hint\", passwordComplexitySetting.requiredLength)}}</li>\n                            <li [hidden]=\"tenantCreateForm.controls['adminPasswordRepeat'].valid\">{{l(\"PasswordsDontMatch\")}}</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"edition\">{{l(\"Edition\")}}</label>\n                        <select id=\"edition\" name=\"edition\" class=\"form-control\" [(ngModel)]=\"tenant.editionId\" (change)=\"onEditionChange($event)\">\n                            <option *ngFor=\"let edition of editions\" [value]=\"edition.value\">{{edition.displayText}}</option>\n                        </select>\n                    </div>\n\n                    <div [hidden]=\"!isSubscriptionFieldsVisible\" class=\"m-checkbox-list\">\n                        <label for=\"CreateTenant_IsUnlimited\" class=\"m-checkbox\">\n                            <input id=\"CreateTenant_IsUnlimited\" type=\"checkbox\" name=\"IsUnlimited\" [(ngModel)]=\"isUnlimited\" />\n                            {{l(\"UnlimitedTimeSubscription\")}}\n                            <span></span>\n                        </label>\n                    </div>\n\n                    <div [hidden]=\"isUnlimited || !isSubscriptionFieldsVisible\" class=\"form-group\" [ngClass]=\"{'has-error': !subscriptionEndDateIsValid()}\">\n                        <label for=\"SubscriptionEndDate\">{{l(\"SubscriptionEndDate\")}}</label>\n                        <input id=\"SubscriptionEndDate\" type=\"text\" #SubscriptionEndDateUtc name=\"SubscriptionEndDateUtc\" class=\"form-control\">\n                    </div>\n\n                    <div [hidden]=\"!isSubscriptionFieldsVisible\" class=\"m-checkbox-list\">\n                        <label for=\"CreateTenant_IsInTrialPeriod\" class=\"m-checkbox\">\n                            <input id=\"CreateTenant_IsInTrialPeriod\" type=\"checkbox\" name=\"IsInTrialPeriod\" [disabled]=\"isSelectedEditionFree\" [(ngModel)]=\"tenant.isInTrialPeriod\">\n                            {{l(\"IsInTrialPeriod\")}}\n                            <span></span>\n                        </label>\n                    </div>\n\n                    <div class=\"m-checkbox-list\">\n                        <label for=\"CreateTenant_ShouldChangePasswordOnNextLogin\" class=\"m-checkbox\">\n                            <input id=\"CreateTenant_ShouldChangePasswordOnNextLogin\" type=\"checkbox\" name=\"ShouldChangePasswordOnNextLogin\" [(ngModel)]=\"tenant.shouldChangePasswordOnNextLogin\">\n                            {{l(\"ShouldChangePasswordOnNextLogin\")}}\n                            <span></span>\n                        </label>\n                        <label for=\"CreateTenant_SendActivationEmail\" class=\"m-checkbox\">\n                            <input id=\"CreateTenant_SendActivationEmail\" type=\"checkbox\" name=\"SendActivationEmail\" [(ngModel)]=\"tenant.sendActivationEmail\">\n                            {{l(\"SendActivationEmail\")}}\n                            <span></span>\n                        </label>\n                        <label for=\"CreateTenant_IsActive\" class=\"m-checkbox\">\n                            <input id=\"CreateTenant_IsActive\" type=\"checkbox\" name=\"IsActive\" [(ngModel)]=\"tenant.isActive\">\n                            {{l(\"Active\")}}\n                            <span></span>\n                        </label>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" [disabled]=\"saving\" class=\"btn btn-secondary\" (click)=\"close()\">{{l(\"Cancel\")}}</button>\n                    <button type=\"submit\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\" class=\"btn btn-primary\" [disabled]=\"!tenantCreateForm.form.valid || saving || !subscriptionEndDateIsValid()\"><i class=\"fa fa-save\"></i> <span>{{l(\"Save\")}}</span></button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/tenants/create-tenant-modal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/tenants/create-tenant-modal.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateTenantModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTenantModalComponent", function() { return CreateTenantModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
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






var CreateTenantModalComponent = /** @class */ (function (_super) {
    __extends(CreateTenantModalComponent, _super);
    function CreateTenantModalComponent(injector, _tenantService, _commonLookupService, _profileService) {
        var _this = _super.call(this, injector) || this;
        _this._tenantService = _tenantService;
        _this._commonLookupService = _commonLookupService;
        _this._profileService = _profileService;
        _this.modalSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.active = false;
        _this.saving = false;
        _this.setRandomPassword = true;
        _this.useHostDb = true;
        _this.editions = [];
        _this.passwordComplexitySetting = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["PasswordComplexitySetting"]();
        _this.isUnlimited = false;
        _this.isSubscriptionFieldsVisible = false;
        _this.isSelectedEditionFree = false;
        return _this;
    }
    CreateTenantModalComponent.prototype.show = function () {
        var _this = this;
        this.active = true;
        this.init();
        this._profileService.getPasswordComplexitySetting().subscribe(function (result) {
            _this.passwordComplexitySetting = result.setting;
            _this.modal.show();
        });
    };
    CreateTenantModalComponent.prototype.onShown = function () {
        $(this.tenancyNameInput.nativeElement).focus();
        $(this.subscriptionEndDateUtc.nativeElement).datetimepicker({
            locale: abp.localization.currentLanguage.name,
            format: 'L'
        });
    };
    CreateTenantModalComponent.prototype.init = function () {
        var _this = this;
        this.tenant = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["CreateTenantInput"]();
        this.tenant.isActive = true;
        this.tenant.shouldChangePasswordOnNextLogin = true;
        this.tenant.sendActivationEmail = true;
        this.tenant.editionId = 0;
        this.tenant.isInTrialPeriod = false;
        this._commonLookupService.getEditionsForCombobox(false)
            .subscribe(function (result) {
            _this.editions = result.items;
            var notAssignedItem = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["SubscribableEditionComboboxItemDto"]();
            notAssignedItem.value = "0";
            notAssignedItem.displayText = _this.l('NotAssigned');
            _this.editions.unshift(notAssignedItem);
            _this._commonLookupService.getDefaultEditionName().subscribe(function (getDefaultEditionResult) {
                var defaultEdition = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](_this.editions, { 'displayText': getDefaultEditionResult.name });
                if (defaultEdition && defaultEdition[0]) {
                    _this.tenant.editionId = parseInt(defaultEdition[0].value);
                    _this.toggleSubscriptionFields();
                }
            });
        });
    };
    CreateTenantModalComponent.prototype.getEditionValue = function (item) {
        return parseInt(item.value);
    };
    CreateTenantModalComponent.prototype.selectedEditionIsFree = function () {
        var selectedEditions = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](this.editions, { 'value': this.tenant.editionId })
            .map(function (u) { return Object.assign(new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["SubscribableEditionComboboxItemDto"](), u); });
        if (selectedEditions.length !== 1) {
            this.isSelectedEditionFree = true;
        }
        var selectedEdition = selectedEditions[0];
        this.isSelectedEditionFree = selectedEdition.isFree;
        return this.isSelectedEditionFree;
    };
    CreateTenantModalComponent.prototype.subscriptionEndDateIsValid = function () {
        if (this.tenant.editionId <= 0) {
            return true;
        }
        if (this.isUnlimited) {
            return true;
        }
        if (!this.subscriptionEndDateUtc) {
            return false;
        }
        var subscriptionEndDateUtc = $(this.subscriptionEndDateUtc.nativeElement).val();
        return subscriptionEndDateUtc !== undefined && subscriptionEndDateUtc !== '';
    };
    CreateTenantModalComponent.prototype.save = function () {
        var _this = this;
        this.saving = true;
        if (this.setRandomPassword) {
            this.tenant.adminPassword = null;
        }
        if (this.tenant.editionId === 0) {
            this.tenant.editionId = null;
        }
        //take selected date as UTC
        if (!this.isUnlimited && this.tenant.editionId > 0) {
            this.tenant.subscriptionEndDateUtc = moment__WEBPACK_IMPORTED_MODULE_4__($(this.subscriptionEndDateUtc.nativeElement).data('DateTimePicker').date().format('YYYY-MM-DDTHH:mm:ss') + 'Z');
        }
        else {
            this.tenant.subscriptionEndDateUtc = null;
        }
        this._tenantService.createTenant(this.tenant)
            .finally(function () { return _this.saving = false; })
            .subscribe(function () {
            _this.notify.info(_this.l('SavedSuccessfully'));
            _this.close();
            _this.modalSave.emit(null);
        });
    };
    CreateTenantModalComponent.prototype.close = function () {
        this.active = false;
        this.modal.hide();
    };
    CreateTenantModalComponent.prototype.onEditionChange = function () {
        this.tenant.isInTrialPeriod = this.tenant.editionId > 0 && !this.selectedEditionIsFree();
        this.toggleSubscriptionFields();
    };
    CreateTenantModalComponent.prototype.toggleSubscriptionFields = function () {
        if (this.tenant.editionId > 0) {
            this.isSubscriptionFieldsVisible = true;
        }
        else {
            this.isSubscriptionFieldsVisible = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tenancyNameInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CreateTenantModalComponent.prototype, "tenancyNameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('createModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], CreateTenantModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('SubscriptionEndDateUtc'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CreateTenantModalComponent.prototype, "subscriptionEndDateUtc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CreateTenantModalComponent.prototype, "modalSave", void 0);
    CreateTenantModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'createTenantModal',
            template: __webpack_require__(/*! ./create-tenant-modal.component.html */ "./src/app/admin/tenants/create-tenant-modal.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["TenantServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["CommonLookupServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["ProfileServiceProxy"]])
    ], CreateTenantModalComponent);
    return CreateTenantModalComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/tenants/edit-tenant-modal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/tenants/edit-tenant-modal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #editModal=\"bs-modal\" (onShown)=\"onShown()\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModal\"\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\n    <div class=\"modal-dialog modal-lg\">\n\n        <div class=\"modal-content\">\n\n            <form #tenantEditForm=\"ngForm\" role=\"form\" novalidate class=\"form-validation\" (submit)=\"save()\" *ngIf=\"tenant && active\">\n\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">\n                        <span>{{l(\"EditTenant\")}}: {{tenant.tenancyName}}</span>\n                    </h5>\n                    <button type=\"button\" class=\"close\" (click)=\"close()\" [attr.aria-label]=\"l('Close')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n\n                <div class=\"modal-body\">\n\n                    <div class=\"form-group\">\n                        <label for=\"Name\">{{l(\"Name\")}} *</label>\n                        <input id=\"Name\" #nameInput=\"ngModel\" type=\"text\" name=\"Name\" class=\"form-control\" [ngClass]=\"{'edited':tenant.name}\" [(ngModel)]=\"tenant.name\" required maxlength=\"128\">\n                        <validation-messages [formCtrl]=\"nameInput\"></validation-messages>\n                    </div>\n\n                    <div class=\"form-group\" *ngIf=\"currentConnectionString\">\n                        <label for=\"DatabaseConnectionString\">{{l(\"DatabaseConnectionString\")}} *</label>\n                        <input id=\"DatabaseConnectionString\" #connectionStringInput=\"ngModel\" type=\"text\" name=\"ConnectionString\" class=\"form-control\" [(ngModel)]=\"tenant.connectionString\" required maxlength=\"1024\">\n                        <validation-messages [formCtrl]=\"connectionStringInput\"></validation-messages>\n                    </div>\n\n                    <div *ngIf=\"currentConnectionString\">\n                        <span class=\"help-block text-warning\">{{l(\"TenantDatabaseConnectionStringChangeWarningMessage\")}}</span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"edition\">{{l(\"Edition\")}}</label>\n                        <select id=\"edition\" name=\"edition\" class=\"form-control\" [(ngModel)]=\"tenant.editionId\" (change)=\"onEditionChange($event)\">\n                            <option *ngFor=\"let edition of editions\" [value]=\"edition.value\">{{edition.displayText}}</option>\n                        </select>\n                    </div>\n\n                    <div [hidden]=\"!isSubscriptionFieldsVisible\" class=\"m-checkbox-list\">\n                        <label class=\"m-checkbox\">\n                            <input id=\"CreateTenant_IsUnlimited\" type=\"checkbox\" name=\"IsUnlimited\" [(ngModel)]=\"isUnlimited\" (ngModelChange)=\"onUnlimitedChange()\"/>\n                            {{l(\"UnlimitedTimeSubscription\")}}\n                            <span></span>\n                        </label>\n                    </div>\n\n                    <div [hidden]=\"isUnlimited || !isSubscriptionFieldsVisible\" class=\"form-group\" [ngClass]=\"{'has-error': !subscriptionEndDateUtcIsValid }\">\n                        <label for=\"SubscriptionEndDateUtc\">{{l(\"SubscriptionEndDateUtc\")}}</label>\n                        <input id=\"SubscriptionEndDateUtc\" type=\"datetime\" #SubscriptionEndDateUtc name=\"SubscriptionEndDateUtc\" class=\"form-control\"\n                               [ngClass]=\"{'edited':tenant.subscriptionEndDateUtc}\"\n                               [value]=\"formatSubscriptionEndDate(tenant.subscriptionEndDateUtc)\"\n                               [required]=\"!isUnlimited\">\n                    </div>\n\n                    <div [hidden]=\"!isSubscriptionFieldsVisible\" class=\"m-checkbox-list\">\n                        <label class=\"m-checkbox\">\n                            <input id=\"CreateTenant_IsInTrialPeriod\" type=\"checkbox\" name=\"IsInTrialPeriod\" [disabled]=\"selectedEditionIsFree()\" [(ngModel)]=\"tenant.isInTrialPeriod\">\n                            {{l(\"IsInTrialPeriod\")}}\n                            <span></span>\n                        </label>\n                    </div>\n\n                    <div class=\"m-checkbox-list\">\n                        <label class=\"m-checkbox\">\n                            <input id=\"EditTenant_IsActive\" type=\"checkbox\" name=\"IsActive\" [(ngModel)]=\"tenant.isActive\">\n                            {{l(\"Active\")}}\n                            <span></span>\n                        </label>\n                    </div>\n\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" [disabled]=\"saving\" class=\"btn btn-secondary\" (click)=\"close()\">{{l(\"Cancel\")}}</button>\n                    <button type=\"submit\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\" class=\"btn btn-primary\" [disabled]=\"!tenantEditForm.form.valid || saving || !subscriptionEndDateUtcIsValid\"><i class=\"fa fa-save\"></i> <span>{{l(\"Save\")}}</span></button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/tenants/edit-tenant-modal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/tenants/edit-tenant-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: EditTenantModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTenantModalComponent", function() { return EditTenantModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
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






var EditTenantModalComponent = /** @class */ (function (_super) {
    __extends(EditTenantModalComponent, _super);
    function EditTenantModalComponent(injector, _tenantService, _commonLookupService) {
        var _this = _super.call(this, injector) || this;
        _this._tenantService = _tenantService;
        _this._commonLookupService = _commonLookupService;
        _this.modalSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.active = false;
        _this.saving = false;
        _this.isUnlimited = false;
        _this.subscriptionEndDateUtcIsValid = false;
        _this.tenant = undefined;
        _this.editions = [];
        _this.isSubscriptionFieldsVisible = false;
        return _this;
    }
    EditTenantModalComponent.prototype.show = function (tenantId) {
        var _this = this;
        this.active = true;
        this._commonLookupService.getEditionsForCombobox(false).subscribe(function (editionsResult) {
            _this.editions = editionsResult.items;
            var notSelectedEdition = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["SubscribableEditionComboboxItemDto"]();
            notSelectedEdition.displayText = _this.l('NotAssigned');
            notSelectedEdition.value = '0';
            _this.editions.unshift(notSelectedEdition);
            _this._tenantService.getTenantForEdit(tenantId).subscribe(function (tenantResult) {
                _this.tenant = tenantResult;
                _this.currentConnectionString = tenantResult.connectionString;
                _this.tenant.editionId = _this.tenant.editionId || 0;
                _this.isUnlimited = !_this.tenant.subscriptionEndDateUtc;
                _this.subscriptionEndDateUtcIsValid = _this.isUnlimited || _this.tenant.subscriptionEndDateUtc !== undefined;
                _this.modal.show();
                _this.toggleSubscriptionFields();
            });
        });
    };
    EditTenantModalComponent.prototype.onShown = function () {
        var _this = this;
        $(this.nameInput.nativeElement).focus();
        $(this.subscriptionEndDateUtc.nativeElement).datetimepicker({
            locale: abp.localization.currentLanguage.name,
            format: 'L',
            defaultDate: this.tenant.subscriptionEndDateUtc,
        }).on('dp.change', function (e) {
            _this.subscriptionEndDateUtcIsValid = e.date !== false;
        });
    };
    EditTenantModalComponent.prototype.formatSubscriptionEndDate = function (date) {
        if (this.isUnlimited) {
            return '';
        }
        if (!this.tenant.editionId) {
            return '';
        }
        if (!date) {
            return '';
        }
        return moment__WEBPACK_IMPORTED_MODULE_4__(date).format('L');
    };
    EditTenantModalComponent.prototype.selectedEditionIsFree = function () {
        if (!this.tenant.editionId) {
            return true;
        }
        var selectedEditions = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](this.editions, { value: this.tenant.editionId + '' });
        if (selectedEditions.length !== 1) {
            return true;
        }
        var selectedEdition = selectedEditions[0];
        return selectedEdition.isFree;
    };
    EditTenantModalComponent.prototype.save = function () {
        var _this = this;
        this.saving = true;
        if (this.tenant.editionId === 0) {
            this.tenant.editionId = null;
        }
        //take selected date as UTC
        if (!this.isUnlimited && this.tenant.editionId) {
            var date = $(this.subscriptionEndDateUtc.nativeElement).data('DateTimePicker').date();
            if (!date) {
                date = this.tenant.subscriptionEndDateUtc;
            }
            this.tenant.subscriptionEndDateUtc = moment__WEBPACK_IMPORTED_MODULE_4__(date.format('YYYY-MM-DDTHH:mm:ss') + 'Z');
        }
        else {
            this.tenant.subscriptionEndDateUtc = null;
        }
        this._tenantService.updateTenant(this.tenant)
            .finally(function () { return _this.saving = false; })
            .subscribe(function () {
            _this.notify.info(_this.l('SavedSuccessfully'));
            _this.close();
            _this.modalSave.emit(null);
        });
    };
    EditTenantModalComponent.prototype.close = function () {
        this.active = false;
        this.modal.hide();
    };
    EditTenantModalComponent.prototype.onEditionChange = function () {
        if (this.selectedEditionIsFree()) {
            this.tenant.isInTrialPeriod = false;
        }
        this.toggleSubscriptionFields();
    };
    EditTenantModalComponent.prototype.onUnlimitedChange = function () {
        if (this.isUnlimited) {
            $(this.subscriptionEndDateUtc.nativeElement).data('DateTimePicker').clear();
            this.tenant.subscriptionEndDateUtc = null;
            this.subscriptionEndDateUtcIsValid = true;
        }
        else {
            var date = $(this.subscriptionEndDateUtc.nativeElement).data('DateTimePicker').date();
            if (!date) {
                this.subscriptionEndDateUtcIsValid = false;
            }
        }
    };
    EditTenantModalComponent.prototype.toggleSubscriptionFields = function () {
        if (this.tenant.editionId > 0) {
            this.isSubscriptionFieldsVisible = true;
        }
        else {
            this.isSubscriptionFieldsVisible = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditTenantModalComponent.prototype, "nameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], EditTenantModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('SubscriptionEndDateUtc'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditTenantModalComponent.prototype, "subscriptionEndDateUtc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditTenantModalComponent.prototype, "modalSave", void 0);
    EditTenantModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'editTenantModal',
            template: __webpack_require__(/*! ./edit-tenant-modal.component.html */ "./src/app/admin/tenants/edit-tenant-modal.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["TenantServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["CommonLookupServiceProxy"]])
    ], EditTenantModalComponent);
    return EditTenantModalComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/tenants/tenant-features-modal.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/tenants/tenant-features-modal.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #tenantFeaturesModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"tenantFeaturesModal\"\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\n    <div class=\"modal-dialog modal-lg\">\n\n        <div class=\"modal-content\">\n\n            <form #editTenantFeaturesForm=\"ngForm\" name=\"editTenantFeaturesForm\" role=\"form\" novalidate class=\"form-validation\" (submit)=\"save()\" *ngIf=\"active\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">\n                        <span>{{l(\"Features\")}} - {{tenantName}}</span>\n                    </h4>\n                </div>\n                <div class=\"modal-body\">\n                    <feature-tree #featureTree></feature-tree>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" [disabled]=\"saving\" [buttonBusy]=\"resettingFeatures\" [busyText]=\"l('SavingWithThreeDot')\" class=\"btn btn-default pull-left\" (click)=\"resetFeatures()\" [tooltipHtml]=\"l('ResetFeaturesTooltip')\" placement=\"top\"><span>{{l(\"ResetSpecialFeatures\")}}</span></button>\n                    <button type=\"button\" [disabled]=\"saving || resettingFeatures\" class=\"btn btn-default\" (click)=\"close()\">{{l(\"Cancel\")}}</button>\n                    <button type=\"submit\" [disabled]=\"resettingFeatures\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\" class=\"btn btn-primary\"><i class=\"fa fa-save\"></i> <span>{{l(\"Save\")}}</span></button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/tenants/tenant-features-modal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/tenants/tenant-features-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: TenantFeaturesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantFeaturesModalComponent", function() { return TenantFeaturesModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _shared_feature_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/feature-tree.component */ "./src/app/admin/shared/feature-tree.component.ts");
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





var TenantFeaturesModalComponent = /** @class */ (function (_super) {
    __extends(TenantFeaturesModalComponent, _super);
    function TenantFeaturesModalComponent(injector, _tenantService) {
        var _this = _super.call(this, injector) || this;
        _this._tenantService = _tenantService;
        _this.active = false;
        _this.saving = false;
        _this.resettingFeatures = false;
        _this.featureEditData = null;
        return _this;
    }
    TenantFeaturesModalComponent.prototype.show = function (tenantId, tenantName) {
        this.tenantId = tenantId;
        this.tenantName = tenantName;
        this.active = true;
        this.loadFeatures();
        this.modal.show();
    };
    TenantFeaturesModalComponent.prototype.loadFeatures = function () {
        var self = this;
        self._tenantService.getTenantFeaturesForEdit(this.tenantId).subscribe(function (result) {
            self.featureTree.editData = result;
        });
    };
    TenantFeaturesModalComponent.prototype.save = function () {
        var _this = this;
        if (!this.featureTree.areAllValuesValid()) {
            this.message.warn(this.l('InvalidFeaturesWarning'));
            return;
        }
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["UpdateTenantFeaturesInput"]();
        input.id = this.tenantId;
        input.featureValues = this.featureTree.getGrantedFeatures();
        this.saving = true;
        this._tenantService.updateTenantFeatures(input)
            .finally(function () { return _this.saving = false; })
            .subscribe(function () {
            _this.notify.info(_this.l('SavedSuccessfully'));
            _this.close();
        });
    };
    TenantFeaturesModalComponent.prototype.resetFeatures = function () {
        var _this = this;
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["EntityDto"]();
        input.id = this.tenantId;
        this.resettingFeatures = true;
        this._tenantService.resetTenantSpecificFeatures(input)
            .finally(function () { return _this.resettingFeatures = false; })
            .subscribe(function () {
            _this.notify.info(_this.l('ResetSuccessfully'));
            _this.loadFeatures();
        });
    };
    TenantFeaturesModalComponent.prototype.close = function () {
        this.active = false;
        this.modal.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tenantFeaturesModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], TenantFeaturesModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('featureTree'),
        __metadata("design:type", _shared_feature_tree_component__WEBPACK_IMPORTED_MODULE_4__["FeatureTreeComponent"])
    ], TenantFeaturesModalComponent.prototype, "featureTree", void 0);
    TenantFeaturesModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tenantFeaturesModal',
            template: __webpack_require__(/*! ./tenant-features-modal.component.html */ "./src/app/admin/tenants/tenant-features-modal.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["TenantServiceProxy"]])
    ], TenantFeaturesModalComponent);
    return TenantFeaturesModalComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/tenants/tenants.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/tenants/tenants.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-subheader \">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto col-xs-6\">\n                <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                    <span>{{l(\"Tenants\")}}</span>\n                </h3>\n                <span class=\"m-section__sub\">\n                    {{l(\"TenantsHeaderInfo\")}}\n                </span>\n            </div>\n            <div class=\"col-xs-6 text-right\">\n                <button ng-if=\"vm.permissions.create\" class=\"btn btn-primary blue\" (click)=\"createTenant()\"><i class=\"fa fa-plus\"></i>{{l(\"CreateNewTenant\")}}</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"m-content\">\n        <div class=\"m-portlet m-portlet--mobile\">\n            <div class=\"m-portlet__body\">\n                <div class=\"m-form m-form--label-align-right\">\n                    <form (submit)=\"getTenants()\" autocomplete=\"off\">\n                        <div class=\"form-body\">\n\n                            <div class=\"row m--margin-bottom-10\">\n                                <div class=\"col-xl-6\">\n                                    <label for=\"TenantNameOrTenancyCode\">{{l('TenantNameOrTenancyCode')}}</label>\n                                    <div class=\"input-group\">\n                                        <input id=\"TenantNameOrTenancyCode\" [(ngModel)]=\"filters.filterText\" name=\"filterText\" class=\"form-control\" placeholder=\"{{l('SearchWithThreeDot')}}\" type=\"text\">\n                                        <span class=\"input-group-btn\">\n                                            <button class=\"btn btn-primary\" type=\"submit\"><i class=\"flaticon-search-1\" [attr.aria-label]=\"l('Search')\"></i></button>\n                                        </span>\n                                    </div>\n                                </div>\n                                <div class=\"col-xl-6\">\n                                    <label for=\"EditionDropdown\">{{l('Edition')}}</label>\n                                    <edition-combo [(selectedEdition)]=\"filters.selectedEditionId\"></edition-combo>\n                                </div>\n                            </div>\n                            <div class=\"row m--margin-bottom-10\">\n                                <div class=\"col-xl-6\">\n                                    <div class=\"m-checkbox-list\">\n                                        <label class=\"m-checkbox\">\n                                            <input type=\"checkbox\"\n                                                   [(ngModel)]=\"filters.subscriptionEndDateRangeActive\"\n                                                   id=\"TenantsTable_SubscriptionEndDateRangeActive\"\n                                                   name=\"SubscriptionEndDateRangeActive\"\n                                                   value=\"true\">\n                                            {{l('SubscriptionEndDate')}}\n                                            <span></span>\n                                        </label>\n                                    </div>\n                                    <date-range-picker name=\"SubscriptionEndDateRange\"\n                                                       [isDisabled]=\"!filters.subscriptionEndDateRangeActive\"\n                                                       [(startDate)]=\"filters.subscriptionEndDateStart\"\n                                                       [(endDate)]=\"filters.subscriptionEndDateEnd\"\n                                                       [allowFutureDate]=\"true\">\n                                    </date-range-picker>\n                                </div>\n                                <div class=\"col-xl-6\">\n                                    <div class=\"m-checkbox-list\">\n                                        <label class=\"m-checkbox\">\n                                            <input type=\"checkbox\"\n                                                   [(ngModel)]=\"filters.creationDateRangeActive\"\n                                                   id=\"TenantsTable_CreationDateRangeActive\"\n                                                   name=\"CreationDateRangeActive\"\n                                                   value=\"true\">\n                                            {{l('CreationTime')}}\n                                            <span></span>\n                                        </label>\n                                    </div>\n                                    <date-range-picker name=\"CreationDateRange\"\n                                                       [isDisabled]=\"!filters.creationDateRangeActive\"\n                                                       [(startDate)]=\"filters.creationDateStart\"\n                                                       [(endDate)]=\"filters.creationDateEnd\"\n                                                       [allowFutureDate]=\"false\">\n                                    </date-range-picker>\n                                </div>\n                            </div>\n                            <div class=\"row m--margin-bottom-10\">\n                                <div class=\"col-xl-12 text-right\">\n                                    <button name=\"RefreshButton\" class=\"btn btn-metal\"><i class=\"fa fa-refresh\"></i> {{l('Refresh')}}</button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"row align-items-center\">\n                    <!--<Primeng-TurboTable-Start>-->\n                    <div class=\"primeng-datatable-container\" [busyIf]=\"primengTableHelper.isLoading\">\n                        <p-table #dataTable\n                                 (onLazyLoad)=\"getTenants($event)\"\n                                 [value]=\"primengTableHelper.records\"\n                                 rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                                 [paginator]=\"false\"\n                                 [lazy]=\"true\"\n                                 [responsive]=\"primengTableHelper.isResponsive\">\n                            <ng-template pTemplate=\"header\">\n                                <tr>\n                                    <th style=\"width:130px\">{{l('Actions')}}</th>\n                                    <th pSortableColumn=\"tenancyName\">\n                                        {{l('TenancyCodeName')}}\n                                        <p-sortIcon field=\"tenancyName\"></p-sortIcon>\n                                    </th>\n                                    <th pSortableColumn=\"name\">\n                                        {{l('Name')}}\n                                        <p-sortIcon field=\"name\"></p-sortIcon>\n                                    </th>\n                                    <th>{{l('Edition')}}</th>\n                                    <th pSortableColumn=\"subscriptionEndDateUtc\">\n                                        {{l('SubscriptionEndDateUtc')}}\n                                        <p-sortIcon field=\"subscriptionEndDateUtc\"></p-sortIcon>\n                                    </th>\n                                    <th pSortableColumn=\"isActive\">\n                                        {{l('Active')}}\n                                        <p-sortIcon field=\"isActive\"></p-sortIcon>\n                                    </th>\n                                    <th pSortableColumn=\"creationTime\">\n                                        {{l('CreationTime')}}\n                                        <p-sortIcon field=\"creationTime\"></p-sortIcon>\n                                    </th>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"body\" let-record=\"$implicit\">\n                                <tr>\n                                    <td style=\"width: 130px\">\n                                        <div class=\"btn-group dropdown\">\n                                            <button class=\"dropdown-toggle btn btn-sm btn-primary\"\n                                                    data-toggle=\"dropdown\"\n                                                    aria-haspopup=\"true\"\n                                                    aria-expanded=\"false\">\n                                                <i class=\"fa fa-cog\"></i><span class=\"caret\"></span> {{l(\"Actions\")}}\n                                            </button>\n                                            <ul class=\"dropdown-menu\">\n                                                <li [class.disabled]=\"!record.isActive\">\n                                                    <a *ngIf=\"permission.isGranted('Pages.Tenants.Impersonation')\"\n                                                       (click)=\"record.isActive && showUserImpersonateLookUpModal(record)\">{{l('LoginAsThisTenant')}}</a>\n                                                </li>\n                                                <li>\n                                                    <a *ngIf=\"permission.isGranted('Pages.Tenants.Edit')\"\n                                                       (click)=\"editTenantModal.show(record.id)\">{{l('Edit')}}</a>\n                                                </li>\n                                                <li>\n                                                    <a *ngIf=\"permission.isGranted('Pages.Tenants.ChangeFeatures')\"\n                                                       (click)=\"tenantFeaturesModal.show(record.id, record.name)\">{{l('Features')}}</a>\n                                                </li>\n                                                <li>\n                                                    <a *ngIf=\"permission.isGranted('Pages.Tenants.Delete')\"\n                                                       (click)=\"deleteTenant(record)\">{{l('Delete')}}</a>\n                                                </li>\n                                                <li>\n                                                    <a (click)=\"unlockUser(record)\">{{l('Unlock')}}</a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <i *ngIf=\"record.connectionString\" class=\"fa fa-database\" title=\"{{l('HasOwnDatabase')}}\"></i>\n                                        {{record.tenancyName}}\n                                    </td>\n                                    <td>{{record.name}}</td>\n                                    <td>{{record.editionDisplayName}}</td>\n                                    <td>\n                                        {{ record.subscriptionEndDateUtc ? (record.subscriptionEndDateUtc | momentFormat:'L') : '-'}}\n                                    </td>\n                                    <td>\n                                        <span *ngIf=\"record.isActive\" class=\"label label-success\">{{l('Yes')}}</span>\n                                        <span *ngIf=\"!record.isActive\" class=\"label label-default\">{{l('No')}}</span>\n                                    </td>\n                                    <td>\n                                        {{record.creationTime | momentFormat:'L'}}\n                                    </td>\n                                </tr>\n                            </ng-template>\n                        </p-table>\n                        <div class=\"primeng-paging-container\">\n                            <p-paginator rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                                         #paginator\n                                         (onPageChange)=\"getTenants($event)\"\n                                         [totalRecords]=\"primengTableHelper.totalRecordsCount\"\n                                         [rowsPerPageOptions]=\"primengTableHelper.predefinedRecordsCountPerPage\">\n                            </p-paginator>\n                            <span class=\"total-records-count\">\n                                {{l('TotalRecordsCount', primengTableHelper.totalRecordsCount)}}\n                            </span>\n                        </div>\n                    </div>\n                    <!--<Primeng-TurboTable-End>-->\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <createTenantModal #createTenantModal (modalSave)=\"getTenants()\"></createTenantModal>\n    <editTenantModal #editTenantModal (modalSave)=\"getTenants()\"></editTenantModal>\n    <tenantFeaturesModal #tenantFeaturesModal></tenantFeaturesModal>\n    <commonLookupModal #impersonateUserLookupModal (itemSelected)=\"impersonateUser($event)\"></commonLookupModal>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/tenants/tenants.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/tenants/tenants.component.ts ***!
  \****************************************************/
/*! exports provided: TenantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantsComponent", function() { return TenantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_admin_users_impersonation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/admin/users/impersonation.service */ "./src/app/admin/users/impersonation.service.ts");
/* harmony import */ var _app_shared_common_lookup_common_lookup_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/common/lookup/common-lookup-modal.component */ "./src/app/shared/common/lookup/common-lookup-modal.component.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/components/paginator/paginator */ "./node_modules/primeng/components/paginator/paginator.js");
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/components/table/table */ "./node_modules/primeng/components/table/table.js");
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_components_table_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _create_tenant_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-tenant-modal.component */ "./src/app/admin/tenants/create-tenant-modal.component.ts");
/* harmony import */ var _edit_tenant_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-tenant-modal.component */ "./src/app/admin/tenants/edit-tenant-modal.component.ts");
/* harmony import */ var _tenant_features_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tenant-features-modal.component */ "./src/app/admin/tenants/tenant-features-modal.component.ts");
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













var TenantsComponent = /** @class */ (function (_super) {
    __extends(TenantsComponent, _super);
    function TenantsComponent(injector, _tenantService, _activatedRoute, _commonLookupService, _impersonationService) {
        var _this = _super.call(this, injector) || this;
        _this._tenantService = _tenantService;
        _this._activatedRoute = _activatedRoute;
        _this._commonLookupService = _commonLookupService;
        _this._impersonationService = _impersonationService;
        _this.filters = {};
        _this.setFiltersFromRoute();
        return _this;
    }
    TenantsComponent.prototype.setFiltersFromRoute = function () {
        if (this._activatedRoute.snapshot.queryParams['subscriptionEndDateStart'] != null) {
            this.filters.subscriptionEndDateRangeActive = true;
            this.filters.subscriptionEndDateStart = moment__WEBPACK_IMPORTED_MODULE_7__(this._activatedRoute.snapshot.queryParams['subscriptionEndDateStart']);
        }
        else {
            this.filters.subscriptionEndDateStart = moment__WEBPACK_IMPORTED_MODULE_7__().startOf('day');
        }
        if (this._activatedRoute.snapshot.queryParams['subscriptionEndDateEnd'] != null) {
            this.filters.subscriptionEndDateRangeActive = true;
            this.filters.subscriptionEndDateEnd = moment__WEBPACK_IMPORTED_MODULE_7__(this._activatedRoute.snapshot.queryParams['subscriptionEndDateEnd']);
        }
        else {
            this.filters.subscriptionEndDateEnd = moment__WEBPACK_IMPORTED_MODULE_7__().add(30, 'days').endOf('day');
        }
        if (this._activatedRoute.snapshot.queryParams['creationDateStart'] != null) {
            this.filters.creationDateRangeActive = true;
            this.filters.creationDateStart = moment__WEBPACK_IMPORTED_MODULE_7__(this._activatedRoute.snapshot.queryParams['creationDateStart']);
        }
        else {
            this.filters.creationDateStart = moment__WEBPACK_IMPORTED_MODULE_7__().add(-7, 'days').startOf('day');
        }
        if (this._activatedRoute.snapshot.queryParams['creationDateEnd'] != null) {
            this.filters.creationDateRangeActive = true;
            this.filters.creationDateEnd = moment__WEBPACK_IMPORTED_MODULE_7__(this._activatedRoute.snapshot.queryParams['creationDateEnd']);
        }
        else {
            this.filters.creationDateEnd = moment__WEBPACK_IMPORTED_MODULE_7__().endOf('day');
        }
    };
    TenantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filters.filterText = this._activatedRoute.snapshot.queryParams['filterText'] || '';
        this.impersonateUserLookupModal.configure({
            title: this.l('SelectAUser'),
            dataSource: function (skipCount, maxResultCount, filter, tenantId) {
                var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["FindUsersInput"]();
                input.filter = filter;
                input.maxResultCount = maxResultCount;
                input.skipCount = skipCount;
                input.tenantId = tenantId;
                return _this._commonLookupService.findUsers(input);
            }
        });
    };
    TenantsComponent.prototype.getTenants = function (event) {
        var _this = this;
        if (this.primengTableHelper.shouldResetPaging(event)) {
            this.paginator.changePage(0);
            return;
        }
        this.primengTableHelper.showLoadingIndicator();
        this._tenantService.getTenants(this.filters.filterText, this.filters.subscriptionEndDateRangeActive ? this.filters.subscriptionEndDateStart : undefined, this.filters.subscriptionEndDateRangeActive ? this.filters.subscriptionEndDateEnd : undefined, this.filters.creationDateRangeActive ? this.filters.creationDateStart : undefined, this.filters.creationDateRangeActive ? this.filters.creationDateEnd : undefined, this.filters.selectedEditionId, this.filters.selectedEditionId !== undefined && (this.filters.selectedEditionId + '') !== '-1', this.primengTableHelper.getSorting(this.dataTable), this.primengTableHelper.getMaxResultCount(this.paginator, event), this.primengTableHelper.getSkipCount(this.paginator, event)).subscribe(function (result) {
            _this.primengTableHelper.totalRecordsCount = result.totalCount;
            _this.primengTableHelper.records = result.items;
            _this.primengTableHelper.hideLoadingIndicator();
        });
    };
    TenantsComponent.prototype.showUserImpersonateLookUpModal = function (record) {
        this.impersonateUserLookupModal.tenantId = record.id;
        this.impersonateUserLookupModal.show();
    };
    TenantsComponent.prototype.unlockUser = function (record) {
        var _this = this;
        this._tenantService.unlockTenantAdmin(new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["EntityDtoOfInt64"]({ id: record.id })).subscribe(function () {
            _this.notify.success(_this.l('UnlockedTenandAdmin', record.name));
        });
    };
    TenantsComponent.prototype.reloadPage = function () {
        this.paginator.changePage(this.paginator.getPage());
    };
    TenantsComponent.prototype.createTenant = function () {
        this.createTenantModal.show();
    };
    TenantsComponent.prototype.deleteTenant = function (tenant) {
        var _this = this;
        this.message.confirm(this.l('TenantDeleteWarningMessage', tenant.tenancyName), function (isConfirmed) {
            if (isConfirmed) {
                _this._tenantService.deleteTenant(tenant.id).subscribe(function () {
                    _this.reloadPage();
                    _this.notify.success(_this.l('SuccessfullyDeleted'));
                });
            }
        });
    };
    TenantsComponent.prototype.impersonateUser = function (item) {
        this._impersonationService
            .impersonate(parseInt(item.value), this.impersonateUserLookupModal.tenantId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('impersonateUserLookupModal'),
        __metadata("design:type", _app_shared_common_lookup_common_lookup_modal_component__WEBPACK_IMPORTED_MODULE_3__["CommonLookupModalComponent"])
    ], TenantsComponent.prototype, "impersonateUserLookupModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('createTenantModal'),
        __metadata("design:type", _create_tenant_modal_component__WEBPACK_IMPORTED_MODULE_10__["CreateTenantModalComponent"])
    ], TenantsComponent.prototype, "createTenantModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editTenantModal'),
        __metadata("design:type", _edit_tenant_modal_component__WEBPACK_IMPORTED_MODULE_11__["EditTenantModalComponent"])
    ], TenantsComponent.prototype, "editTenantModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tenantFeaturesModal'),
        __metadata("design:type", _tenant_features_modal_component__WEBPACK_IMPORTED_MODULE_12__["TenantFeaturesModalComponent"])
    ], TenantsComponent.prototype, "tenantFeaturesModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataTable'),
        __metadata("design:type", primeng_components_table_table__WEBPACK_IMPORTED_MODULE_9__["Table"])
    ], TenantsComponent.prototype, "dataTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginator'),
        __metadata("design:type", primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_8__["Paginator"])
    ], TenantsComponent.prototype, "paginator", void 0);
    TenantsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tenants.component.html */ "./src/app/admin/tenants/tenants.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_4__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["TenantServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["CommonLookupServiceProxy"],
            _app_admin_users_impersonation_service__WEBPACK_IMPORTED_MODULE_2__["ImpersonationService"]])
    ], TenantsComponent);
    return TenantsComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_5__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/ui-customization/ui-customization.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/ui-customization/ui-customization.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-subheader \">\n        <div class=\"row align-items-center\">\n            <div class=\"mr-auto col-sm-12 col-md-6\">\n                <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                    <span>{{l(\"VisualSettings\")}}</span>\n                </h3>\n                <span class=\"m-section__sub\">\n                    {{l(\"UiCustomizationHeaderInfo\")}}\n                </span>\n            </div>\n            <div class=\"col-sm-12 col-md-6 text-right\">\n                <button *ngIf=\"isGranted('Pages.Administration.UiCustomization')\" (click)=\"updateDefaultUiManagementSettings()\" class=\"btn btn-primary blue\"><i class=\"fa fa-floppy-o\"></i> {{l(\"SaveAsSystemDefault\")}}</button>\n                <button *ngIf=\"!isGranted('Pages.Administration.UiCustomization')\" (click)=\"updateUiManagementSettings()\" class=\"btn btn-primary blue\"><i class=\"fa fa-floppy-o\"></i> {{l(\"Save\")}}</button>\n                <button *ngIf=\"!isGranted('Pages.Administration.UiCustomization')\" (click)=\"useSystemDefaultSettings()\" class=\"btn btn-metal blue\"> {{l(\"UseSystemDefaults\")}}</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"m-content\">\n        <div class=\"m-portlet m-portlet--mobile\">\n            <div class=\"m-portlet__body\">\n                <tabset class=\"tab-container tabbable-line\" *ngIf=\"settings\">\n                    <tab heading=\"{{l('UiCustomization_Layout')}}\" customClass=\"m-tabs__item\">\n                        <form id=\"LayoutSettingsForm\">\n                            <div class=\"m-radio-list m--margin-bottom-20\">\n                                <label>{{l(\"UiCustomization_Theme\")}}</label>\n                                <label class=\"m-radio\" for=\"Theme_Default\">\n                                    <input id=\"Theme_Default\" name=\"Theme\" [(ngModel)]=\"settings.layout.theme\" value=\"default\" type=\"radio\" [checked]=\"settings.layout.theme === 'default'\">\n                                    {{l(\"Default\")}}\n                                    <span></span>\n                                </label>\n                                <label class=\"m-radio m-radio--solid m-radio--state-info\" for=\"Theme_Blue\">\n                                    <input id=\"Theme_Blue\" name=\"Theme\" [(ngModel)]=\"settings.layout.theme\" value=\"blue\" type=\"radio\" [checked]=\"settings.layout.theme === 'blue'\">\n                                    {{l(\"Blue\")}}\n                                    <span></span>\n                                </label>\n                                <label class=\"m-radio m-radio--solid m-radio--state-success\" for=\"Theme_Green\">\n                                    <input id=\"Theme_Green\" name=\"Theme\" [(ngModel)]=\"settings.layout.theme\" value=\"green\" type=\"radio\" [checked]=\"settings.layout.theme === 'green'\">\n                                    {{l(\"Green\")}}\n                                    <span></span>\n                                </label>\n                                <label class=\"m-radio m-radio--solid m-radio--state-danger\" for=\"Theme_Pink\">\n                                    <input id=\"Theme_Pink\" name=\"Theme\" [(ngModel)]=\"settings.layout.theme\" value=\"pink\" type=\"radio\" [checked]=\"settings.layout.theme === 'pink'\">\n                                    {{l(\"Pink\")}}\n                                    <span></span>\n                                </label>\n                                <label class=\"m-radio m-radio--solid m-radio--state-warning\" for=\"Theme_Yellow\">\n                                    <input id=\"Theme_Yellow\" name=\"Theme\" [(ngModel)]=\"settings.layout.theme\" value=\"yellow\" type=\"radio\" [checked]=\"settings.layout.theme === 'yellow'\">\n                                    {{l(\"Yellow\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n\n                            <div class=\"form-group m-form__group\">\n                                <label for=\"LayoutType\">{{l(\"UiCustomization_LayoutType\")}}</label>\n                                <select id=\"LayoutType\" name=\"LayoutType\" class=\"form-control\" [(ngModel)]=\"settings.layout.layoutType\">\n                                    <option value=\"fluid\">{{l(\"UiCustomization_Fluid\")}}</option>\n                                    <option value=\"boxed\">{{l(\"UiCustomization_Boxed\")}}</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <label for=\"ContentSkin\">{{l(\"UiCustomization_ContentSkin\")}}</label>\n                                <select id=\"ContentSkin\" name=\"ContentSkin\" class=\"form-control\" [(ngModel)]=\"settings.layout.contentSkin\">\n                                    <option value=\"light2\">{{l(\"UiCustomization_LightGrey\")}}</option>\n                                    <option value=\"light\">{{l(\"UiCustomization_White\")}}</option>\n                                </select>\n                            </div>\n                        </form>\n                    </tab>\n                    <tab heading=\"{{l('UiCustomization_Header')}}\" customClass=\"m-tabs__item\">\n                        <form id=\"HeaderSettingsForm\">\n                            <div class=\"form-group m-form__group\">\n                                <label for=\"DropdownSkin\">{{l(\"UiCustomization_DropdownSkin\")}}</label>\n                                <select id=\"DropdownSkin\" name=\"DropdownSkin\" class=\"form-control\" [(ngModel)]=\"settings.header.dropdownSkin\">\n                                    <option value=\"light\">{{l(\"UiCustomization_Light\")}}</option>\n                                    <option value=\"dark\">{{l(\"UiCustomization_Dark\")}}</option>\n                                </select>\n                            </div>\n                            <h5>{{l('UiCustomization_Desktop')}}</h5>\n                            <div class=\"form-group m-form__group\">\n                                <label class=\"m-checkbox col-lg-12\">\n                                    <input type=\"checkbox\" name=\"DesktopFixedHeader\" [(ngModel)]=\"settings.header.desktopFixedHeader\">\n                                    {{l(\"UiCustomization_DesktopFixedHeader\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <label for=\"DesktopMinimizeMode\">{{l(\"UiCustomization_DesktopMinimizeMode\")}}</label>\n                                <select id=\"DesktopMinimizeMode\" name=\"DesktopMinimizeMode\" class=\"form-control\" [(ngModel)]=\"settings.header.desktopMinimizeMode\">\n                                    <option value=\"\">{{l(\"UiCustomization_None\")}}</option>\n                                    <option value=\"hide\">{{l(\"UiCustomization_Hide\")}}</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <label for=\"DropdownSkinDesktop\">{{l(\"UiCustomization_DropdownSkinDesktop\")}}</label>\n                                <select id=\"DropdownSkinDesktop\" name=\"DropdownSkinDesktop\" class=\"form-control\" [(ngModel)]=\"settings.header.dropdownSkinDesktop\">\n                                    <option value=\"light\">{{l(\"UiCustomization_Light\")}}</option>\n                                    <option value=\"dark\">{{l(\"UiCustomization_Dark\")}}</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <label class=\"m-checkbox col-lg-12\">\n                                    <input type=\"checkbox\" name=\"DisplaySubmenuArrowDesktop\" [(ngModel)]=\"settings.header.displaySubmenuArrowDesktop\">\n                                    {{l(\"UiCustomization_DisplaySubmenuArrowDesktop\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n\n                            <h5>{{l('UiCustomization_Mobile')}}</h5>\n                            <div class=\"form-group m-form__group\">\n                                <label class=\"m-checkbox col-lg-12\">\n                                    <input type=\"checkbox\" name=\"MobileFixedHeader\" [(ngModel)]=\"settings.header.mobileFixedHeader\">\n                                    {{l(\"UiCustomization_MobileFixedHeader\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                        </form>\n                    </tab>\n                    <tab heading=\"{{l('UiCustomization_Menu')}}\" customClass=\"m-tabs__item\">\n                        <form id=\"MenuSettingsForm\">\n                            <div class=\"form-group m-form__group\">\n                                <label for=\"Position\">{{l(\"UiCustomization_MenuPosition\")}}</label>\n                                <select id=\"Position\" name=\"Position\" class=\"form-control\" [(ngModel)]=\"settings.menu.position\">\n                                    <option value=\"left\">{{l(\"UiCustomization_Left\")}}</option>\n                                    <option value=\"top\">{{l(\"UiCustomization_Top\")}}</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <label for=\"AsideSkin\">{{l(\"UiCustomization_MenuSkin\")}}</label>\n                                <select id=\"AsideSkin\" name=\"AsideSkin\" class=\"form-control\" [(ngModel)]=\"settings.menu.asideSkin\">\n                                    <option value=\"light\">{{l(\"UiCustomization_Light\")}}</option>\n                                    <option value=\"dark\">{{l(\"UiCustomization_Dark\")}}</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group m-form__group\" *ngIf=\"leftMenuPositionSelected()\">\n                                <label class=\"m-checkbox col-lg-12\">\n                                    <input type=\"checkbox\" name=\"FixedAside\" [(ngModel)]=\"settings.menu.fixedAside\">\n                                    {{l(\"UiCustomization_FixedMenu\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                            <div class=\"form-group m-form__group\" *ngIf=\"leftMenuPositionSelected()\">\n                                <label class=\"m-checkbox col-lg-12\">\n                                    <input type=\"checkbox\" name=\"AllowAsideMinimizing\" [(ngModel)]=\"settings.menu.allowAsideMinimizing\" (ngModelChange)=\"allowAsideMinimizingChange($event)\">\n                                    {{l(\"UiCustomization_AllowAsideMinimizing\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                            <div class=\"form-group m-form__group\" *ngIf=\"leftMenuPositionSelected()\">\n                                <label class=\"m-checkbox col-lg-12\">\n                                    <input type=\"checkbox\" name=\"DefaultMinimizedAside\" [(ngModel)]=\"settings.menu.defaultMinimizedAside\" [(disabled)]=\"!settings.menu.allowAsideMinimizing\">\n                                    {{l(\"UiCustomization_DefaultMinimizedAside\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                            <div class=\"form-group m-form__group\" *ngIf=\"leftMenuPositionSelected()\">\n                                <label class=\"m-checkbox col-lg-12\">\n                                    <input type=\"checkbox\" name=\"AllowAsideHiding\" [(ngModel)]=\"settings.menu.allowAsideHiding\" [(disabled)]=\"settings.menu.allowAsideMinimizing\" (ngModelChange)=\"allowAsideHidingChange($event)\">\n                                    {{l(\"UiCustomization_AllowAsideHiding\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                            <div class=\"form-group m-form__group\" *ngIf=\"leftMenuPositionSelected()\">\n                                <label class=\"m-checkbox col-lg-12\">\n                                    <input type=\"checkbox\" name=\"DefaultHiddenAside\" [(ngModel)]=\"settings.menu.defaultHiddenAside\" [(disabled)]=\"!settings.menu.allowAsideHiding\">\n                                    {{l(\"UiCustomization_DefaultHiddenAside\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                            <div class=\"form-group m-form__group\" *ngIf=\"leftMenuPositionSelected()\">\n                                <label for=\"SubmenuToggle\">{{l(\"UiCustomization_SubmenuToggle\")}}</label>\n                                <select id=\"SubmenuToggle\" name=\"SubmenuToggle\" class=\"form-control\" [(ngModel)]=\"settings.menu.submenuToggle\">\n                                    <option value=\"dropdown\">{{l(\"UiCustomization_Dropdown\")}}</option>\n                                    <option value=\"accordion\">{{l(\"UiCustomization_Accordion\")}}</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group m-form__group\" *ngIf=\"leftMenuPositionSelected()\">\n                                <label for=\"DropdownSubmenuSkin\">{{l(\"UiCustomization_DropdownSubmenuSkin\")}}</label>\n                                <select id=\"DropdownSubmenuSkin\" name=\"DropdownSubmenuSkin\" class=\"form-control\" [(ngModel)]=\"settings.menu.dropdownSubmenuSkin\">\n                                    <option value=\"inherit\">{{l(\"UiCustomization_Inherit\")}}</option>\n                                    <option value=\"light\">{{l(\"UiCustomization_Light\")}}</option>\n                                    <option value=\"dark\">{{l(\"UiCustomization_Dark\")}}</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group m-form__group\" *ngIf=\"leftMenuPositionSelected()\">\n                                <label class=\"m-checkbox col-lg-12\">\n                                    <input type=\"checkbox\" name=\"DropdownSubmenuArrow\" [(ngModel)]=\"settings.menu.dropdownSubmenuArrow\">\n                                    {{l(\"UiCustomization_DropdownSubmenuArrow\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                        </form>\n                    </tab>\n                    <tab heading=\"{{l('UiCustomization_Footer')}}\" customClass=\"m-tabs__item\">\n                        <form id=\"FooterSettingsForm\">\n                            <div class=\"form-group m-form__group\">\n                                <label class=\"m-checkbox col-lg-12\">\n                                    <input type=\"checkbox\" name=\"FixedFooter\" [(ngModel)]=\"settings.footer.fixedFooter\">\n                                    {{l(\"UiCustomization_FixedFooter\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                        </form>\n                    </tab>\n                </tabset>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/ui-customization/ui-customization.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/ui-customization/ui-customization.component.ts ***!
  \**********************************************************************/
/*! exports provided: UiCustomizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiCustomizationComponent", function() { return UiCustomizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
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




var UiCustomizationComponent = /** @class */ (function (_super) {
    __extends(UiCustomizationComponent, _super);
    function UiCustomizationComponent(injector, _uiCustomizationService) {
        var _this = _super.call(this, injector) || this;
        _this._uiCustomizationService = _uiCustomizationService;
        return _this;
    }
    UiCustomizationComponent.prototype.ngAfterViewChecked = function () {
        //Temporary fix for: https://github.com/valor-software/ngx-bootstrap/issues/1508
        $('tabset ul.nav').addClass('m-tabs-line');
        $('tabset ul.nav li a.nav-link').addClass('m-tabs__link');
    };
    UiCustomizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._uiCustomizationService.getUiManagementSettings().subscribe(function (settingsResult) {
            _this.settings = settingsResult;
        });
    };
    UiCustomizationComponent.prototype.leftMenuPositionSelected = function () {
        return this.settings.menu.position === 'left';
    };
    UiCustomizationComponent.prototype.updateDefaultUiManagementSettings = function () {
        this._uiCustomizationService.updateDefaultUiManagementSettings(this.settings).subscribe(function () {
            window.location.reload();
        });
    };
    UiCustomizationComponent.prototype.updateUiManagementSettings = function () {
        this._uiCustomizationService.updateUiManagementSettings(this.settings).subscribe(function () {
            window.location.reload();
        });
    };
    UiCustomizationComponent.prototype.useSystemDefaultSettings = function () {
        this._uiCustomizationService.useSystemDefaultSettings().subscribe(function () {
            window.location.reload();
        });
    };
    UiCustomizationComponent.prototype.allowAsideMinimizingChange = function (val) {
        if (val) {
            this.settings.menu.allowAsideHiding = false;
            this.settings.menu.defaultHiddenAside = false;
        }
        else {
            this.settings.menu.defaultMinimizedAside = false;
        }
    };
    UiCustomizationComponent.prototype.allowAsideHidingChange = function (val) {
        if (!val) {
            this.settings.menu.defaultHiddenAside = false;
        }
    };
    UiCustomizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./ui-customization.component.html */ "./src/app/admin/ui-customization/ui-customization.component.html"),
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["UiCustomizationSettingsServiceProxy"]])
    ], UiCustomizationComponent);
    return UiCustomizationComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/users/create-or-edit-user-modal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/users/create-or-edit-user-modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #createOrEditModal=\"bs-modal\" (onShown)=\"onShown()\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"createOrEditModal\" aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <form *ngIf=\"active\" #userForm=\"ngForm\" novalidate (ngSubmit)=\"save()\" autocomplete=\"off\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">\n                        <span *ngIf=\"user.id\">{{l(\"EditUser\")}}: {{user.userName}}</span>\n                        <span *ngIf=\"!user.id\">{{l(\"CreateNewUser\")}}</span>\n                    </h4>\n                    <button type=\"button\" class=\"close\" (click)=\"close()\" [attr.aria-label]=\"l('Close')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <tabset class=\"tab-container tabbable-line\">\n                        <tab heading=\"{{l('UserInformations')}}\" customClass=\"m-tabs__item\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-3 text-center margin-bottom-15 margin-top-15\">\n                                    <img src=\"{{profilePicture}}\" width=\"128\" height=\"128\" class=\"img-thumbnail img-rounded\" />\n                                </div>\n                                <div class=\"col-sm-9\">\n                                    <div class=\"form-group\">\n                                        <label for=\"Name\">{{l(\"Name\")}} *</label>\n                                        <input id=\"Name\" #nameInput=\"ngModel\" class=\"form-control\" type=\"text\" name=\"Name\" [(ngModel)]=\"user.name\" required maxlength=\"32\">\n                                        <validation-messages [formCtrl]=\"nameInput\"></validation-messages>\n                                    </div>\n\n                                    <div class=\"form-group\">\n                                        <label for=\"Surname\">{{l(\"Surname\")}} *</label>\n                                        <input id=\"Surname\" #surnameInput=\"ngModel\" type=\"text\" name=\"Surname\" class=\"form-control\" [(ngModel)]=\"user.surname\" required maxlength=\"32\">\n                                        <validation-messages [formCtrl]=\"surnameInput\"></validation-messages>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"EmailAddress\">{{l(\"EmailAddress\")}} *</label>\n                                <input id=\"EmailAddress\" #emailAddressInput=\"ngModel\" type=\"email\" name=\"EmailAddress\" class=\"form-control\" [(ngModel)]=\"user.emailAddress\" required maxlength=\"256\" email>\n                                <validation-messages [formCtrl]=\"emailAddressInput\" [errorDefs]=\"[{email: l('InvalidEmailAddress')}]\"></validation-messages>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"PhoneNumber\">{{l(\"PhoneNumber\")}}</label>\n                                <input id=\"PhoneNumber\" type=\"text\" name=\"PhoneNumber\" class=\"form-control\" [(ngModel)]=\"user.phoneNumber\" maxlength=\"24\">\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"UserName\">{{l(\"UserName\")}} *</label>\n                                <input id=\"UserName\" #userNameInput=\"ngModel\" type=\"text\" [disabled]=\"!canChangeUserName\" name=\"UserName\" class=\"form-control\" [(ngModel)]=\"user.userName\" required maxlength=\"32\">\n                                <span class=\"help-block\" *ngIf=\"!canChangeUserName\">{{l(\"CanNotChangeAdminUserName\")}}</span>\n                                <validation-messages [formCtrl]=\"userNameInput\"></validation-messages>\n                            </div>\n\n                            <div class=\"m-checkbox-list\">\n                                <label for=\"EditUser_SetRandomPassword\" class=\"m-checkbox\">\n                                    <input id=\"EditUser_SetRandomPassword\" type=\"checkbox\" name=\"SetRandomPassword\" [(ngModel)]=\"setRandomPassword\">\n                                    {{l(\"SetRandomPassword\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                            <div class=\"form-group\" *ngIf=\"!setRandomPassword\">\n                                <div class=\"right\">\n                                    <label for=\"Password\">{{l(\"Password\")}}</label>\n                                    <input id=\"Password\" type=\"password\" name=\"Password\" #Password=\"ngModel\" id=\"Password\" class=\"form-control\" [(ngModel)]=\"user.password\" [required]=\"!user.id && !setRandomPassword\" maxlength=\"32\"\n                                           [requireDigit]=\"passwordComplexitySetting.requireDigit\" [requireLowercase]=\"passwordComplexitySetting.requireLowercase\"\n                                           [requireUppercase]=\"passwordComplexitySetting.requireUppercase\" [requireNonAlphanumeric]=\"passwordComplexitySetting.requireNonAlphanumeric\" [requiredLength]=\"passwordComplexitySetting.requiredLength\"\n                                           validateEqual=\"PasswordRepeat\" reverse=\"true\">\n                                </div>\n                            </div>\n                            <div [hidden]=\"setRandomPassword || userForm.form.valid || userForm.form.pristine\">\n                                <ul class=\"help-block text-danger\" *ngIf=\"userForm.controls['Password'] && userForm.controls['Password'].errors\">\n                                    <li [hidden]=\"!userForm.controls['Password'].errors.requireDigit\">{{l(\"PasswordComplexity_RequireDigit_Hint\")}}</li>\n                                    <li [hidden]=\"!userForm.controls['Password'].errors.requireLowercase\">{{l(\"PasswordComplexity_RequireLowercase_Hint\")}}</li>\n                                    <li [hidden]=\"!userForm.controls['Password'].errors.requireUppercase\">{{l(\"PasswordComplexity_RequireUppercase_Hint\")}}</li>\n                                    <li [hidden]=\"!userForm.controls['Password'].errors.requireNonAlphanumeric\">{{l(\"PasswordComplexity_RequireNonAlphanumeric_Hint\")}}</li>\n                                    <li [hidden]=\"!userForm.controls['Password'].errors.requiredLength\">{{l(\"PasswordComplexity_RequiredLength_Hint\", passwordComplexitySetting.requiredLength)}}</li>\n                                </ul>\n                            </div>\n                            <div class=\"form-group\" *ngIf=\"!setRandomPassword\">\n                                <div class=\"right\">\n                                    <label for=\"PasswordRepeat\">{{l(\"PasswordRepeat\")}}</label>\n                                    <input id=\"PasswordRepeat\" type=\"password\" name=\"PasswordRepeat\" #PasswordRepeat=\"ngModel\" class=\"form-control\" [(ngModel)]=\"user.passwordRepeat\" [required]=\"!user.id && !setRandomPassword\" maxlength=\"32\"\n                                           [requireDigit]=\"passwordComplexitySetting.requireDigit\" [requireLowercase]=\"passwordComplexitySetting.requireLowercase\"\n                                           [requireUppercase]=\"passwordComplexitySetting.requireUppercase\" [requireNonAlphanumeric]=\"passwordComplexitySetting.requireNonAlphanumeric\" [requiredLength]=\"passwordComplexitySetting.requiredLength\"\n                                           validateEqual=\"Password\" reverse=\"false\">\n                                </div>\n                            </div>\n                            <div [hidden]=\"setRandomPassword || userForm.form.valid || userForm.form.pristine\">\n                                <ul class=\"help-block text-danger\" *ngIf=\"userForm.controls['PasswordRepeat'] && userForm.controls['PasswordRepeat'].errors\">\n                                    <li [hidden]=\"!userForm.controls['PasswordRepeat'].errors.requireDigit\">{{l(\"PasswordComplexity_RequireDigit_Hint\")}}</li>\n                                    <li [hidden]=\"!userForm.controls['PasswordRepeat'].errors.requireLowercase\">{{l(\"PasswordComplexity_RequireLowercase_Hint\")}}</li>\n                                    <li [hidden]=\"!userForm.controls['PasswordRepeat'].errors.requireUppercase\">{{l(\"PasswordComplexity_RequireUppercase_Hint\")}}</li>\n                                    <li [hidden]=\"!userForm.controls['PasswordRepeat'].errors.requireNonAlphanumeric\">{{l(\"PasswordComplexity_RequireNonAlphanumeric_Hint\")}}</li>\n                                    <li [hidden]=\"!userForm.controls['PasswordRepeat'].errors.requiredLength\">{{l(\"PasswordComplexity_RequiredLength_Hint\", passwordComplexitySetting.requiredLength)}}</li>\n                                    <li [hidden]=\"userForm.controls['PasswordRepeat'].valid\">{{l(\"PasswordsDontMatch\")}}</li>\n                                </ul>\n                            </div>\n                            <div class=\"m-checkbox-list\">\n                                <label for=\"EditUser_ShouldChangePasswordOnNextLogin\" class=\"m-checkbox\">\n                                    <input id=\"EditUser_ShouldChangePasswordOnNextLogin\" type=\"checkbox\" name=\"ShouldChangePasswordOnNextLogin\" [(ngModel)]=\"user.shouldChangePasswordOnNextLogin\">\n                                    {{l(\"ShouldChangePasswordOnNextLogin\")}}\n                                    <span></span>\n                                </label>\n\n                                <label for=\"EditUser_SendActivationEmail\" class=\"m-checkbox\">\n                                    <input id=\"EditUser_SendActivationEmail\" type=\"checkbox\" name=\"SendActivationEmail\" [(ngModel)]=\"sendActivationEmail\">\n                                    {{l(\"SendActivationEmail\")}}\n                                    <span></span>\n                                </label>\n\n                                <label for=\"EditUser_IsActive\" class=\"m-checkbox\">\n                                    <input id=\"EditUser_IsActive\" type=\"checkbox\" name=\"IsActive\" [(ngModel)]=\"user.isActive\">\n                                    {{l(\"Active\")}}\n                                    <span></span>\n                                </label>\n\n                                <label *ngIf=\"isTwoFactorEnabled\" for=\"EditUser_IsTwoFactorEnabled\" class=\"m-checkbox\">\n                                    <input id=\"EditUser_IsTwoFactorEnabled\" type=\"checkbox\" name=\"IsTwoFactorEnabled\" [(ngModel)]=\"user.isTwoFactorEnabled\">\n                                    {{l(\"IsTwoFactorEnabled\")}}\n                                    <span></span>\n                                </label>\n\n                                <label *ngIf=\"isLockoutEnabled\" for=\"EditUser_IsLockoutEnabled\" class=\"m-checkbox\">\n                                    <input id=\"EditUser_IsLockoutEnabled\" type=\"checkbox\" name=\"IsLockoutEnabled\" [(ngModel)]=\"user.isLockoutEnabled\">\n                                    {{l(\"IsLockoutEnabled\")}}\n                                    <span></span>\n                                </label>\n                            </div>\n                        </tab>\n                        <tab heading=\"{{l('Roles')}}\" customClass=\"m-tabs__item\">\n                            <ng-template tabHeading>\n                                <span class=\"badge badge-primary\">{{getAssignedRoleCount()}}</span>\n                            </ng-template>\n                            <div class=\"m-checkbox-list\">\n                                <label attr.for=\"EditUser_{{role.roleName}}\" class=\"m-checkbox\" *ngFor=\"let role of roles\">\n                                    <input id=\"EditUser_{{role.roleName}}\" type=\"checkbox\" name=\"{{role.roleName}}\" [(ngModel)]=\"role.isAssigned\">\n                                    {{role.roleDisplayName}}\n                                    <span></span>\n                                </label>\n                            </div>\n                        </tab>\n                        <tab heading=\"{{l('OrganizationUnits')}}\" customClass=\"m-tabs__item\">\n                            <organization-unit-tree #organizationUnitTree></organization-unit-tree>\n                        </tab>\n                    </tabset>\n                </div>\n                <div class=\"modal-footer\">\n                    <button [disabled]=\"saving\" type=\"button\" class=\"btn btn-default\" (click)=\"close()\">{{l(\"Cancel\")}}</button>\n                    <button type=\"submit\" class=\"btn btn-primary blue\" [disabled]=\"!userForm.form.valid\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\"><i class=\"fa fa-save\"></i> <span>{{l(\"Save\")}}</span></button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/users/create-or-edit-user-modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/users/create-or-edit-user-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateOrEditUserModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrEditUserModalComponent", function() { return CreateOrEditUserModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _shared_organization_unit_tree_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/organization-unit-tree.component */ "./src/app/admin/shared/organization-unit-tree.component.ts");
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







var CreateOrEditUserModalComponent = /** @class */ (function (_super) {
    __extends(CreateOrEditUserModalComponent, _super);
    function CreateOrEditUserModalComponent(injector, _userService, _profileService) {
        var _this = _super.call(this, injector) || this;
        _this._userService = _userService;
        _this._profileService = _profileService;
        _this.modalSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.active = false;
        _this.saving = false;
        _this.canChangeUserName = true;
        _this.isTwoFactorEnabled = _this.setting.getBoolean('Abp.Zero.UserManagement.TwoFactorLogin.IsEnabled');
        _this.isLockoutEnabled = _this.setting.getBoolean('Abp.Zero.UserManagement.UserLockOut.IsEnabled');
        _this.passwordComplexitySetting = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["PasswordComplexitySetting"]();
        _this.user = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["UserEditDto"]();
        _this.sendActivationEmail = true;
        _this.setRandomPassword = true;
        _this.passwordComplexityInfo = '';
        return _this;
    }
    CreateOrEditUserModalComponent.prototype.ngAfterViewChecked = function () {
        //Temporary fix for: https://github.com/valor-software/ngx-bootstrap/issues/1508
        $('tabset ul.nav').addClass('m-tabs-line');
        $('tabset ul.nav li a.nav-link').addClass('m-tabs__link');
    };
    CreateOrEditUserModalComponent.prototype.show = function (userId) {
        var _this = this;
        if (!userId) {
            this.active = true;
            this.setRandomPassword = true;
            this.sendActivationEmail = true;
        }
        this._userService.getUserForEdit(userId).subscribe(function (userResult) {
            _this.user = userResult.user;
            _this.roles = userResult.roles;
            _this.canChangeUserName = _this.user.userName !== _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__["AppConsts"].userManagement.defaultAdminUserName;
            _this.allOrganizationUnits = userResult.allOrganizationUnits;
            _this.memberedOrganizationUnits = userResult.memberedOrganizationUnits;
            _this.getProfilePicture(userResult.profilePictureId);
            if (userId) {
                _this.active = true;
                setTimeout(function () {
                    _this.setRandomPassword = false;
                }, 0);
                _this.sendActivationEmail = false;
            }
            _this._profileService.getPasswordComplexitySetting().subscribe(function (passwordComplexityResult) {
                _this.passwordComplexitySetting = passwordComplexityResult.setting;
                _this.setPasswordComplexityInfo();
                _this.modal.show();
            });
        });
    };
    CreateOrEditUserModalComponent.prototype.setPasswordComplexityInfo = function () {
        this.passwordComplexityInfo = '<ul>';
        if (this.passwordComplexitySetting.requireDigit) {
            this.passwordComplexityInfo += '<li>' + this.l('PasswordComplexity_RequireDigit_Hint') + '</li>';
        }
        if (this.passwordComplexitySetting.requireLowercase) {
            this.passwordComplexityInfo += '<li>' + this.l('PasswordComplexity_RequireLowercase_Hint') + '</li>';
        }
        if (this.passwordComplexitySetting.requireUppercase) {
            this.passwordComplexityInfo += '<li>' + this.l('PasswordComplexity_RequireUppercase_Hint') + '</li>';
        }
        if (this.passwordComplexitySetting.requireNonAlphanumeric) {
            this.passwordComplexityInfo += '<li>' + this.l('PasswordComplexity_RequireNonAlphanumeric_Hint') + '</li>';
        }
        if (this.passwordComplexitySetting.requiredLength) {
            this.passwordComplexityInfo += '<li>' + this.l('PasswordComplexity_RequiredLength_Hint', this.passwordComplexitySetting.requiredLength) + '</li>';
        }
        this.passwordComplexityInfo += '</ul>';
    };
    CreateOrEditUserModalComponent.prototype.getProfilePicture = function (profilePictureId) {
        var _this = this;
        if (!profilePictureId) {
            this.profilePicture = this.appRootUrl() + 'assets/common/images/default-profile-picture.png';
        }
        else {
            this._profileService.getProfilePictureById(profilePictureId).subscribe(function (result) {
                if (result && result.profilePicture) {
                    _this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;
                }
                else {
                    _this.profilePicture = _this.appRootUrl() + 'assets/common/images/default-profile-picture.png';
                }
            });
        }
    };
    CreateOrEditUserModalComponent.prototype.onShown = function () {
        $(this.nameInput.nativeElement).focus();
        this.organizationUnitTree.data = {
            allOrganizationUnits: this.allOrganizationUnits,
            selectedOrganizationUnits: this.memberedOrganizationUnits
        };
    };
    CreateOrEditUserModalComponent.prototype.save = function () {
        var _this = this;
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["CreateOrUpdateUserInput"]();
        input.user = this.user;
        input.setRandomPassword = this.setRandomPassword;
        input.sendActivationEmail = this.sendActivationEmail;
        input.assignedRoleNames =
            lodash__WEBPACK_IMPORTED_MODULE_4__["map"](lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](this.roles, { isAssigned: true }), function (role) { return role.roleName; });
        input.organizationUnits = this.organizationUnitTree.getSelectedOrganizations();
        this.saving = true;
        this._userService.createOrUpdateUser(input)
            .finally(function () { _this.saving = false; })
            .subscribe(function () {
            _this.notify.info(_this.l('SavedSuccessfully'));
            _this.close();
            _this.modalSave.emit(null);
        });
    };
    CreateOrEditUserModalComponent.prototype.close = function () {
        this.active = false;
        this.modal.hide();
    };
    CreateOrEditUserModalComponent.prototype.getAssignedRoleCount = function () {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](this.roles, { isAssigned: true }).length;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CreateOrEditUserModalComponent.prototype, "nameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('createOrEditModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], CreateOrEditUserModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('organizationUnitTree'),
        __metadata("design:type", _shared_organization_unit_tree_component__WEBPACK_IMPORTED_MODULE_6__["OrganizationUnitsTreeComponent"])
    ], CreateOrEditUserModalComponent.prototype, "organizationUnitTree", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CreateOrEditUserModalComponent.prototype, "modalSave", void 0);
    CreateOrEditUserModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'createOrEditUserModal',
            template: __webpack_require__(/*! ./create-or-edit-user-modal.component.html */ "./src/app/admin/users/create-or-edit-user-modal.component.html"),
            styles: [".user-edit-dialog-profile-image {\n             margin-bottom: 20px;\n        }"
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["UserServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["ProfileServiceProxy"]])
    ], CreateOrEditUserModalComponent);
    return CreateOrEditUserModalComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/users/edit-user-permissions-modal.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/users/edit-user-permissions-modal.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #editModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModal\" aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <form #userForm=\"ngForm\" novalidate (ngSubmit)=\"save()\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">\n                        <span>{{l(\"Permissions\")}}<span *ngIf=\"userName\"> - {{userName}}</span></span>\n                    </h4>\n                    <button type=\"button\" class=\"close\" (click)=\"close()\" [attr.aria-label]=\"l('Close')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <permission-tree #permissionTree></permission-tree>\n\n                    <div class=\"note note-warning\" style=\"margin-bottom: 0; margin-top: 15px\">\n                        <em>{{l('Note_RefreshPageForPermissionChanges')}}</em>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button [disabled]=\"saving\" [buttonBusy]=\"resettingPermissions\" [busyText]=\"l('SavingWithThreeDot')\" type=\"button\" class=\"btn btn-default pull-left\" (click)=\"resetPermissions()\" [tooltip]=\"l('ResetPermissionsTooltip')\" placement=\"top\"><span>{{l(\"ResetSpecialPermissions\")}}</span></button>\n                    <button [disabled]=\"saving || resettingPermissions\" type=\"button\" class=\"btn btn-default\" (click)=\"close()\">{{l(\"Cancel\")}}</button>\n                    <button type=\"submit\" class=\"btn btn-primary blue\" [disabled]=\"!userForm.form.valid || resettingPermissions\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\"><i class=\"fa fa-save\"></i> <span>{{l(\"Save\")}}</span></button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/users/edit-user-permissions-modal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/users/edit-user-permissions-modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditUserPermissionsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPermissionsModalComponent", function() { return EditUserPermissionsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _shared_permission_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/permission-tree.component */ "./src/app/admin/shared/permission-tree.component.ts");
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





var EditUserPermissionsModalComponent = /** @class */ (function (_super) {
    __extends(EditUserPermissionsModalComponent, _super);
    function EditUserPermissionsModalComponent(injector, _userService) {
        var _this = _super.call(this, injector) || this;
        _this._userService = _userService;
        _this.saving = false;
        _this.resettingPermissions = false;
        return _this;
    }
    EditUserPermissionsModalComponent.prototype.show = function (userId, userName) {
        var _this = this;
        this.userId = userId;
        this.userName = userName;
        // console.log(userId,userName);
        this._userService.getUserPermissionsForEdit(userId).subscribe(function (result) {
            _this.permissionTree.editData = result;
            _this.modal.show();
        });
    };
    EditUserPermissionsModalComponent.prototype.save = function () {
        var _this = this;
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["UpdateUserPermissionsInput"]();
        input.id = this.userId;
        input.grantedPermissionNames = this.permissionTree.getGrantedPermissionNames();
        this.saving = true;
        this._userService.updateUserPermissions(input)
            .finally(function () { _this.saving = false; })
            .subscribe(function () {
            _this.notify.info(_this.l('SavedSuccessfully'));
            _this.close();
        });
    };
    EditUserPermissionsModalComponent.prototype.resetPermissions = function () {
        var _this = this;
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["EntityDtoOfInt64"]();
        input.id = this.userId;
        this.resettingPermissions = true;
        this._userService.resetUserSpecificPermissions(input).subscribe(function () {
            _this.notify.info(_this.l('ResetSuccessfully'));
            _this._userService.getUserPermissionsForEdit(_this.userId).subscribe(function (result) {
                _this.permissionTree.editData = result;
            });
        }, undefined, function () {
            _this.resettingPermissions = false;
        });
    };
    EditUserPermissionsModalComponent.prototype.close = function () {
        this.modal.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], EditUserPermissionsModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('permissionTree'),
        __metadata("design:type", _shared_permission_tree_component__WEBPACK_IMPORTED_MODULE_4__["PermissionTreeComponent"])
    ], EditUserPermissionsModalComponent.prototype, "permissionTree", void 0);
    EditUserPermissionsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'editUserPermissionsModal',
            template: __webpack_require__(/*! ./edit-user-permissions-modal.component.html */ "./src/app/admin/users/edit-user-permissions-modal.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["UserServiceProxy"]])
    ], EditUserPermissionsModalComponent);
    return EditUserPermissionsModalComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/admin/users/users.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/users/users.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-subheader\">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto col-xs-6\">\n                <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                    <span>{{l(\"Users\")}}</span>\n                </h3>\n                <span class=\"m-section__sub\">\n                    {{l(\"UsersHeaderInfo\")}}\n                </span>\n            </div>\n            <div class=\"col-xs-6 text-right\">\n                <button (click)=\"exportToExcel()\" class=\"btn btn-outline-success\"><i class=\"fa fa-file-excel-o\"></i> {{l(\"ExportToExcel\")}}</button>\n                <button (click)=\"createUser()\" *ngIf=\"isGranted('Pages.Administration.Users.Create')\" class=\"btn btn-primary blue\"><i class=\"fa fa-plus\"></i> {{l(\"CreateNewUser\")}}</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"m-content\">\n        <div class=\"m-portlet m-portlet--mobile\">\n            <div class=\"m-portlet__body\">\n                <form class=\"horizontal-form\" autocomplete=\"off\">\n                    <div class=\"m-form m-form--label-align-right\">\n                        <div class=\"row align-items-center m--margin-bottom-10\">\n                            <div class=\"col-xl-12\">\n                                <div class=\"form-group m-form__group align-items-center\">\n                                    <div class=\"input-group\">\n                                        <input [(ngModel)]=\"filterText\" name=\"filterText\" autoFocus class=\"form-control m-input\" [placeholder]=\"l('SearchWithThreeDot')\" type=\"text\">\n                                        <span class=\"input-group-btn\">\n                                            <button (click)=\"getUsers()\" class=\"btn btn-primary\" type=\"submit\"><i class=\"flaticon-search-1\" [attr.aria-label]=\"l('Search')\"></i></button>\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row m--margin-bottom-10\" [hidden]=\"!advancedFiltersAreShown\">\n                            <div [ngClass]=\"{'col-md-6': isGranted('Pages.Administration.Roles'), 'col-md-12':!isGranted('Pages.Administration.Roles')}\">\n                                <div class=\"form-group\">\n                                    <permission-combo [(selectedPermission)]=\"selectedPermission\"></permission-combo>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\" *ngIf=\"isGranted('Pages.Administration.Roles')\">\n                                <div class=\"form-group\">\n                                    <role-combo [(selectedRole)]=\"role\" emptyText=\"{{l('FilterByRole')}}\"></role-combo>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row margin-bottom-10\" *ngIf=\"advancedFiltersAreShown\">\n                            <div class=\"col-sm-12 text-right\">\n                                <button class=\"btn btn-metal\" (click)=\"getUsers()\"><i class=\"fa fa-refresh\"></i> {{l(\"Refresh\")}}</button>\n                            </div>\n                        </div>\n                        <div class=\"row margin-bottom-10\">\n                            <div class=\"col-sm-12\">\n                                <span class=\"clickable-item text-muted\" *ngIf=\"!advancedFiltersAreShown\" (click)=\"advancedFiltersAreShown=!advancedFiltersAreShown\"><i class=\"fa fa-angle-down\"></i> {{l(\"ShowAdvancedFilters\")}}</span>\n                                <span class=\"clickable-item text-muted\" *ngIf=\"advancedFiltersAreShown\" (click)=\"advancedFiltersAreShown=!advancedFiltersAreShown\"><i class=\"fa fa-angle-up\"></i> {{l(\"HideAdvancedFilters\")}}</span>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n\n                <div class=\"row align-items-center\">\n                    <!--<Primeng-TurboTable-Start>-->\n                    <div class=\"primeng-datatable-container\"\n                         [busyIf]=\"primengTableHelper.isLoading\">\n                        <p-table #dataTable\n                                 (onLazyLoad)=\"getUsers($event)\"\n                                 [value]=\"primengTableHelper.records\"\n                                 rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                                 [paginator]=\"false\"\n                                 [lazy]=\"true\"\n                                 [scrollable]=\"true\"\n                                 ScrollWidth=\"100%\"\n                                 [responsive]=\"primengTableHelper.isResponsive\"\n                                 [resizableColumns]=\"primengTableHelper.resizableColumns\">\n                            <ng-template pTemplate=\"header\">\n                                <tr>\n                                    <th style=\"width: 130px\" [hidden]=\"!isGrantedAny('Pages.Administration.Users.Impersonation', 'Pages.Administration.Users.Edit', 'Pages.Administration.Users.ChangePermissions', 'Pages.Administration.Users.Delete')\">{{l('Actions')}}</th>\n                                    <th style=\"width: 150px\" pSortableColumn=\"username\">\n                                        {{l('UserName')}}\n                                        <p-sortIcon field=\"username\"></p-sortIcon>\n                                    </th>\n                                    <th style=\"width: 150px\" pSortableColumn=\"name\">\n                                        {{l('Name')}}\n                                        <p-sortIcon field=\"name\"></p-sortIcon>\n                                    </th>\n                                    <th style=\"width: 150px\" pSortableColumn=\"surname\">\n                                        {{l('Surname')}}\n                                        <p-sortIcon field=\"surname\"></p-sortIcon>\n                                    </th>\n                                    <th style=\"width: 150px\" pSortableColumn=\"roles\">\n                                        {{l('Roles')}}\n                                        <p-sortIcon field=\"roles\"></p-sortIcon>\n                                    </th>\n                                    <th style=\"width: 250px\" pSortableColumn=\"emailAddress\">\n                                        {{l('EmailAddress')}}\n                                        <p-sortIcon field=\"emailAddress\"></p-sortIcon>\n                                    </th>\n                                    <th style=\"width: 200px\" pSortableColumn=\"isEmailConfirmed\">\n                                        {{l('EmailConfirm')}}\n                                        <p-sortIcon field=\"isEmailConfirmed\"></p-sortIcon>\n                                    </th>\n                                    <th style=\"width: 100px\" pSortableColumn=\"isActive\">\n                                        {{l('Active')}}\n                                        <p-sortIcon field=\"isActive\"></p-sortIcon>\n                                    </th>\n                                    <th style=\"width: 200px\" pSortableColumn=\"lastLoginTime\">\n                                        {{l('LastLoginTime')}}\n                                        <p-sortIcon field=\"lastLoginTime\"></p-sortIcon>\n                                    </th>\n                                    <th style=\"width: 200px\" pSortableColumn=\"creationTime\">\n                                        {{l('CreationTime')}}\n                                        <p-sortIcon field=\"creationTime\"></p-sortIcon>\n                                    </th>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"body\" let-record=\"$implicit\">\n                                <tr>\n                                    <td style=\"width: 130px\"\n                                        [hidden]=\"!isGrantedAny('Pages.Administration.Users.Impersonation', 'Pages.Administration.Users.Edit', 'Pages.Administration.Users.ChangePermissions', 'Pages.Administration.Users.Delete')\">\n                                        <div class=\"btn-group dropdown\" normalizePosition>\n                                            <button class=\"dropdown-toggle btn btn-sm btn-primary\"\n                                                    data-toggle=\"dropdown\"\n                                                    aria-haspopup=\"true\"\n                                                    aria-expanded=\"false\">\n                                                <i class=\"fa fa-cog\"></i><span class=\"caret\"></span> {{l(\"Actions\")}}\n                                            </button>\n                                            <ul class=\"dropdown-menu\">\n                                                <li>\n                                                    <a *ngIf=\"permission.isGranted('Pages.Administration.Users.Impersonation') && record.id !== appSession.userId\"\n                                                       (click)=\"_impersonationService.impersonate(record.id, appSession.tenantId)\">{{l('LoginAsThisUser')}}</a>\n                                                </li>\n                                                <li>\n                                                    <a *ngIf=\"permission.isGranted('Pages.Administration.Users.Edit')\"\n                                                       (click)=\"createOrEditUserModal.show(record.id)\">{{l('Edit')}}</a>\n                                                </li>\n                                                <li>\n                                                    <a *ngIf=\"permission.isGranted('Pages.Administration.Users.ChangePermissions')\"\n                                                       (click)=\"editUserPermissionsModal.show(record.id, record.userName)\">{{l('Permissions')}}</a>\n                                                </li>\n                                                <li>\n                                                    <a *ngIf=\"permission.isGranted('Pages.Administration.Users.ChangePermissions')\"\n                                                       (click)=\"unlockUser(record)\">{{l('Unlock')}}</a>\n                                                </li>\n                                                <li>\n                                                    <a *ngIf=\"permission.isGranted('Pages.Administration.Users.Delete')\"\n                                                       (click)=\"deleteUser(record)\">{{l('Delete')}}</a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </td>\n                                    <td style=\"width:150px\">{{record.userName}}</td>\n                                    <td style=\"width:150px\">{{record.name}}</td>\n                                    <td style=\"width:150px\">{{record.surname}}</td>\n                                    <td style=\"width:150px\">\n                                        {{getRolesAsString(record.roles)}}\n                                    </td>\n                                    <td style=\"width:250px\">{{record.emailAddress}}</td>\n                                    <td style=\"width:200px\">\n                                        <span class=\"label label-success\" *ngIf=\"record.isEmailConfirmed\">{{l('Yes')}}</span>\n                                        <span class=\"label label-default\" *ngIf=\"!record.isEmailConfirmed\">{{l('No')}}</span>\n                                    </td>\n                                    <td style=\"width:100px\">\n                                        <span class=\"label label-success\" *ngIf=\"record.isActive\">{{l('Yes')}}</span>\n                                        <span class=\"label label-default\" *ngIf=\"!record.isActive\">{{l('No')}}</span>\n                                    </td>\n                                    <td style=\"width:200px\">\n                                        <span *ngIf=\"record.lastLoginTime\">{{record.lastLoginTime | momentFormat:'L'}}</span>\n                                        <span *ngIf=\"!record.lastLoginTime\">-</span>\n                                    </td>\n                                    <td style=\"width:200px\">\n                                        {{record.creationTime | momentFormat:'L'}}\n                                    </td>\n                                </tr>\n                            </ng-template>\n                        </p-table>\n                        <div class=\"primeng-paging-container\">\n                            <p-paginator rows=\"{{primengTableHelper.defaultRecordsCountPerPage}}\"\n                                         #paginator\n                                         (onPageChange)=\"getUsers($event)\"\n                                         [totalRecords]=\"primengTableHelper.totalRecordsCount\"\n                                         [rowsPerPageOptions]=\"primengTableHelper.predefinedRecordsCountPerPage\">\n                            </p-paginator>\n                            <span class=\"total-records-count\">\n                                {{l('TotalRecordsCount', primengTableHelper.totalRecordsCount)}}\n                            </span>\n                        </div>\n                    </div>\n                    <!--<Primeng-TurboTable-End>-->\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <createOrEditUserModal #createOrEditUserModal (modalSave)=\"getUsers()\"></createOrEditUserModal>\n\n    <editUserPermissionsModal #editUserPermissionsModal></editUserPermissionsModal>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _abp_notify_notify_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/notify/notify.service */ "./node_modules/abp-ng2-module/dist/src/notify/notify.service.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _shared_utils_file_download_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/utils/file-download.service */ "./src/shared/utils/file-download.service.ts");
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/components/paginator/paginator */ "./node_modules/primeng/components/paginator/paginator.js");
/* harmony import */ var primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/components/table/table */ "./node_modules/primeng/components/table/table.js");
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_components_table_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _create_or_edit_user_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-or-edit-user-modal.component */ "./src/app/admin/users/create-or-edit-user-modal.component.ts");
/* harmony import */ var _edit_user_permissions_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-user-permissions-modal.component */ "./src/app/admin/users/edit-user-permissions-modal.component.ts");
/* harmony import */ var _impersonation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./impersonation.service */ "./src/app/admin/users/impersonation.service.ts");
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














var UsersComponent = /** @class */ (function (_super) {
    __extends(UsersComponent, _super);
    function UsersComponent(injector, _impersonationService, _http, _userServiceProxy, _notifyService, _fileDownloadService, _tokenAuth, _activatedRoute) {
        var _this = _super.call(this, injector) || this;
        _this._impersonationService = _impersonationService;
        _this._http = _http;
        _this._userServiceProxy = _userServiceProxy;
        _this._notifyService = _notifyService;
        _this._fileDownloadService = _fileDownloadService;
        _this._tokenAuth = _tokenAuth;
        _this._activatedRoute = _activatedRoute;
        //Filters
        _this.advancedFiltersAreShown = false;
        _this.filterText = '';
        _this.selectedPermission = '';
        _this.role = undefined;
        _this.filterText = _this._activatedRoute.snapshot.queryParams['filterText'] || '';
        return _this;
    }
    UsersComponent.prototype.getUsers = function (event) {
        var _this = this;
        if (this.primengTableHelper.shouldResetPaging(event)) {
            this.paginator.changePage(0);
            return;
        }
        this.primengTableHelper.showLoadingIndicator();
        this._userServiceProxy.getUsers(this.filterText, this.permission ? this.selectedPermission : undefined, this.role, this.primengTableHelper.getSorting(this.dataTable), this.primengTableHelper.getMaxResultCount(this.paginator, event), this.primengTableHelper.getSkipCount(this.paginator, event)).subscribe(function (result) {
            _this.primengTableHelper.totalRecordsCount = result.totalCount;
            _this.primengTableHelper.records = result.items;
            _this.primengTableHelper.hideLoadingIndicator();
            console.log('bbbbbbbbb');
        });
    };
    UsersComponent.prototype.unlockUser = function (record) {
        var _this = this;
        this._userServiceProxy.unlockUser(new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_7__["EntityDtoOfInt64"]({ id: record.id })).subscribe(function () {
            _this.notify.success(_this.l('UnlockedTheUser', record.userName));
        });
    };
    UsersComponent.prototype.getRolesAsString = function (roles) {
        var roleNames = '';
        for (var j = 0; j < roles.length; j++) {
            if (roleNames.length) {
                roleNames = roleNames + ', ';
            }
            roleNames = roleNames + roles[j].roleName;
        }
        return roleNames;
    };
    UsersComponent.prototype.reloadPage = function () {
        this.paginator.changePage(this.paginator.getPage());
    };
    UsersComponent.prototype.exportToExcel = function () {
        var _this = this;
        this._userServiceProxy.getUsersToExcel()
            .subscribe(function (result) {
            _this._fileDownloadService.downloadTempFile(result);
        });
    };
    UsersComponent.prototype.createUser = function () {
        this.createOrEditUserModal.show();
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        if (user.userName === _shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__["AppConsts"].userManagement.defaultAdminUserName) {
            this.message.warn(this.l('{0}UserCannotBeDeleted', _shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__["AppConsts"].userManagement.defaultAdminUserName));
            return;
        }
        this.message.confirm(this.l('UserDeleteWarningMessage', user.userName), function (isConfirmed) {
            if (isConfirmed) {
                _this._userServiceProxy.deleteUser(user.id)
                    .subscribe(function () {
                    _this.reloadPage();
                    _this.notify.success(_this.l('SuccessfullyDeleted'));
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('createOrEditUserModal'),
        __metadata("design:type", _create_or_edit_user_modal_component__WEBPACK_IMPORTED_MODULE_11__["CreateOrEditUserModalComponent"])
    ], UsersComponent.prototype, "createOrEditUserModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editUserPermissionsModal'),
        __metadata("design:type", _edit_user_permissions_modal_component__WEBPACK_IMPORTED_MODULE_12__["EditUserPermissionsModalComponent"])
    ], UsersComponent.prototype, "editUserPermissionsModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTable'),
        __metadata("design:type", primeng_components_table_table__WEBPACK_IMPORTED_MODULE_10__["Table"])
    ], UsersComponent.prototype, "dataTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paginator'),
        __metadata("design:type", primeng_components_paginator_paginator__WEBPACK_IMPORTED_MODULE_9__["Paginator"])
    ], UsersComponent.prototype, "paginator", void 0);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/admin/users/users.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_5__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _impersonation_service__WEBPACK_IMPORTED_MODULE_13__["ImpersonationService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_7__["UserServiceProxy"],
            _abp_notify_notify_service__WEBPACK_IMPORTED_MODULE_0__["NotifyService"],
            _shared_utils_file_download_service__WEBPACK_IMPORTED_MODULE_8__["FileDownloadService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_7__["TokenAuthServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UsersComponent);
    return UsersComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_6__["AppComponentBase"]));



/***/ }),

/***/ "./src/shared/helpers/HtmlHelper.ts":
/*!******************************************!*\
  !*** ./src/shared/helpers/HtmlHelper.ts ***!
  \******************************************/
/*! exports provided: HtmlHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlHelper", function() { return HtmlHelper; });
var HtmlHelper = /** @class */ (function () {
    function HtmlHelper() {
    }
    HtmlHelper.encodeText = function (value) {
        if (!$) {
            return null;
        }
        return $('<div/>').text(value).html();
    };
    HtmlHelper.decodeText = function (value) {
        if (!$) {
            return null;
        }
        return $('<div/>').html(value).text();
    };
    HtmlHelper.encodeJson = function (jsonObject) {
        if (!$) {
            return null;
        }
        return JSON.parse(this.encodeText(JSON.stringify(jsonObject)));
    };
    HtmlHelper.decodeJson = function (jsonObject) {
        if (!$) {
            return null;
        }
        return JSON.parse(this.decodeText(JSON.stringify(jsonObject)));
    };
    return HtmlHelper;
}());



/***/ })

}]);
//# sourceMappingURL=app-admin-admin-module.js.map