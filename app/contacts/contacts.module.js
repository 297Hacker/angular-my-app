"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var contacts_component_1 = require("./contacts.component");
var new_contact_component_1 = require("./new-contact/new-contact.component");
var contact_detail_component_1 = require("./contact-detail/contact-detail.component");
var home_component_1 = require("./home/home.component");
var contact_search_component_1 = require("./contact-search/contact-search.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var loading_component_1 = require("./loading/loading.component");
var contact_service_1 = require("./shared/contact.service");
var searchbar_directive_1 = require("./directives/searchbar.directive");
var hover_directive_1 = require("./directives/hover.directive");
var capitalizer_pipe_1 = require("./pipes/capitalizer.pipe");
var alphabetizer_pipe_1 = require("./pipes/alphabetizer.pipe");
var name_filter_pipe_1 = require("./pipes/name-filter.pipe");
var can_deactivate_guard_1 = require("./guards/can-deactivate.guard");
var ContactsModule = (function () {
    function ContactsModule() {
    }
    return ContactsModule;
}());
ContactsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule
        ],
        providers: [contact_service_1.ContactService,
            can_deactivate_guard_1.CanDeactivateGuard],
        declarations: [
            contacts_component_1.ContactsComponent,
            new_contact_component_1.NewContactComponent,
            contact_detail_component_1.ContactDetailComponent,
            home_component_1.HomeComponent,
            contact_search_component_1.ContactSearchComponent,
            page_not_found_component_1.PageNotFoundComponent,
            loading_component_1.SpinnerComponent,
            searchbar_directive_1.SearchBarDirective,
            hover_directive_1.HoverDirective,
            capitalizer_pipe_1.CapitalizerPipe,
            alphabetizer_pipe_1.AlphabetizerPipe,
            name_filter_pipe_1.NameFilterPipe
        ]
    })
], ContactsModule);
exports.ContactsModule = ContactsModule;
//# sourceMappingURL=contacts.module.js.map