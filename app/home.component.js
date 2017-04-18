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
var contact_service_1 = require("./contact.service");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(contactService, router) {
        this.contactService = contactService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getNewest();
    };
    HomeComponent.prototype.getNewest = function () {
        var _this = this;
        this.contactService.getContacts()
            .then(function (contacts) { return _this.contact = contacts
            .reduce(function (previous, current) {
            if (current.id > previous.id) {
                return current;
            }
            else {
                return previous;
            }
        }); });
    };
    HomeComponent.prototype.gotoDetails = function (contact) {
        var link = ['/contacts', contact.id];
        this.router.navigate(link);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: "\n\t\t<h2>Contact List Home Page</h2>\n\t\t<h5>Most recent added contact:{{contact?.name}}</h5>\n\t\t<button type=\"button\" (click)=\"gotoDetails(contact)\">Details</button>\n\t"
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService,
        router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map