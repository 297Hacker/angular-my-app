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
// import { CONTACTS } from './contacts';
var router_1 = require("@angular/router");
var contact_service_1 = require("./contact.service");
var ContactsComponent = (function () {
    function ContactsComponent(contactService, router) {
        this.contactService = contactService;
        this.router = router;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ContactsComponent.prototype.getContacts = function () {
        var _this = this;
        this.contactService.getContacts()
            .then(function (contacts) { return _this.contacts = contacts; });
    };
    ContactsComponent.prototype.selectContact = function (contact) {
        var link = ['./contacts', contact.id];
        this.router.navigate(link);
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    core_1.Component({
        selector: 'contacts',
        template: "\n\t\t<h2>Contact List</h2>\n\t\t<ul class=\"contacts\">\n\t\t\t<li *ngFor=\"let contact of contacts\" (click)=\"selectContact(contact)\">\n\t\t\t\tName:{{contact.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t<add-contact [contacts]=\"contacts\"></add-contact>\n\n\t"
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService,
        router_1.Router])
], ContactsComponent);
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map