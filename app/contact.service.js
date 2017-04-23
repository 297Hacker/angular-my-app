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
var http_1 = require("@angular/http");
var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        this.contactsUrl = 'app/contactslist';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    ContactService.prototype.getContacts = function () {
        return this.http.get(this.contactsUrl)
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    };
    ContactService.prototype.getContactDetails = function (id) {
        return this.getContacts()
            .then(function (contacts) { return contacts.find(function (contact) { return contact.id === id; }); });
    };
    ContactService.prototype.getData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ContactService.prototype.handleError = function (error) {
        console.error('Something went wrong', error);
    };
    ContactService.prototype.addContact = function (contact) {
        var body = JSON.stringify(contact);
        return this.http.post(this.contactsUrl, body, this.options)
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    };
    ContactService.prototype.update = function (contact) {
        var body = JSON.stringify(contact);
        var url = this.contactsUrl + "/" + contact.id;
        return this.http.put(url, body, this.options)
            .toPromise()
            .then(function () { return contact; })
            .catch(this.handleError);
    };
    ContactService.prototype.deleteContacts = function (contact) {
        var url = this.contactsUrl + "/" + contact.id;
        return this.http.delete(url)
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return ContactService;
}());
ContactService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map