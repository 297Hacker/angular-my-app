"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contacts_component_1 = require("./contacts/contacts.component");
var home_component_1 = require("./contacts/home/home.component");
var contact_detail_component_1 = require("./contacts/contact-detail/contact-detail.component");
var page_not_found_component_1 = require("./contacts/page-not-found/page-not-found.component");
var can_deactivate_guard_1 = require("./contacts/guards/can-deactivate.guard");
var routes = [
    {
        path: 'contacts/:id',
        component: contact_detail_component_1.ContactDetailComponent,
        canDeactivate: [can_deactivate_guard_1.CanDeactivateGuard]
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'contacts',
        component: contacts_component_1.ContactsComponent,
        canDeactivate: [can_deactivate_guard_1.CanDeactivateGuard]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map