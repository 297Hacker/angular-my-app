"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contact_search_service_1 = require("./contact-search.service");
var ContactSearchComponent = (function () {
    function ContactSearchComponent(contactSearchService, router) {
        this.contactSearchService = contactSearchService;
        this.router = router;
    }
    ContactSearchComponent.prototype.search = function (term) {
        var _this = this;
        this.contactSearchService.search(term)
            .then(function (contacts) { return _this.contacts = contacts; });
    };
    ContactSearchComponent.prototype.selectContact = function (contact) {
        var link = ['./contacts', contact.id];
        this.router.navigate(link);
    };
    return ContactSearchComponent;
}());
ContactSearchComponent = __decorate([
    core_1.Component({
        selector: 'contact-search',
        template: "\n\t\t<div>\n\t\t\t<h2>Search Contact</h2>\n\t\t\t<input #term type=\"text\" (keyup)=\"search(term.value)\"/>\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let contact of contacts\"\n\t\t\t\t(click)=\"selectContact(contact)\">\n\t\t\t\t{{contact.name}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t"
    }),
    __metadata("design:paramtypes", [contact_search_service_1.ContactSearchService,
        router_1.Router])
], ContactSearchComponent);
exports.ContactSearchComponent = ContactSearchComponent;
//# sourceMappingURL=contact-search.component.js.map