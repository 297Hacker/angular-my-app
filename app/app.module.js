"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var in_memory_web_api_umd_js_1 = require("angular-in-memory-web-api/bundles/in-memory-web-api.umd.js");
var in_memory_data_service_1 = require("./in-memory-data.service");
var app_component_1 = require("./app.component");
var contacts_component_1 = require("./contacts/contacts.component");
var new_contact_component_1 = require("./contacts/new-contact/new-contact.component");
var contact_detail_component_1 = require("./contacts/contact-detail/contact-detail.component");
var home_component_1 = require("./contacts/home/home.component");
var cv_component_1 = require("./cv.component");
var contact_service_1 = require("./contacts/shared/contact.service");
var contact_search_component_1 = require("./contacts/contact-search/contact-search.component");
var searchbar_directive_1 = require("./contacts/directives/searchbar.directive");
var hover_directive_1 = require("./contacts/directives/hover.directive");
var capitalizer_pipe_1 = require("./contacts/pipes/capitalizer.pipe");
var alphabetizer_pipe_1 = require("./contacts/pipes/alphabetizer.pipe");
var name_filter_pipe_1 = require("./contacts/pipes/name-filter.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            in_memory_web_api_umd_js_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { delay: 0 }),
            router_1.RouterModule.forRoot([
                {
                    path: 'contacts/:id',
                    component: contact_detail_component_1.ContactDetailComponent
                },
                {
                    path: 'home',
                    component: home_component_1.HomeComponent
                },
                {
                    path: 'cv',
                    component: cv_component_1.CvComponent
                },
                {
                    path: '',
                    redirectTo: '/home',
                    pathMatch: 'full'
                },
                {
                    path: 'contacts',
                    component: contacts_component_1.ContactsComponent
                }
            ])],
        providers: [contact_service_1.ContactService],
        declarations: [app_component_1.AppComponent,
            contacts_component_1.ContactsComponent,
            new_contact_component_1.NewContactComponent,
            contact_detail_component_1.ContactDetailComponent,
            home_component_1.HomeComponent,
            cv_component_1.CvComponent,
            contact_search_component_1.ContactSearchComponent,
            searchbar_directive_1.SearchBarDirective,
            capitalizer_pipe_1.CapitalizerPipe,
            hover_directive_1.HoverDirective,
            alphabetizer_pipe_1.AlphabetizerPipe,
            name_filter_pipe_1.NameFilterPipe],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map