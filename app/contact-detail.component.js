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
var common_1 = require("@angular/common");
var contact_service_1 = require("./contact.service");
var ContactDetailComponent = (function () {
    function ContactDetailComponent(contactService, route, location) {
        this.contactService = contactService;
        this.route = route;
        this.location = location;
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.contactService.getContactDetails(id)
                .subscribe(function (contact) { return _this.contact = contact; });
        });
    };
    ContactDetailComponent.prototype.back = function () {
        this.location.back();
    };
    ContactDetailComponent.prototype.update = function (contact) {
        var _this = this;
        this.contactService.update(contact)
            .subscribe(function () { return _this.back(); });
    };
    ContactDetailComponent.prototype.delete = function (contact) {
        var _this = this;
        this.contactService.deleteContacts(contact)
            .subscribe(function () { return _this.back(); });
    };
    return ContactDetailComponent;
}());
ContactDetailComponent = __decorate([
    core_1.Component({
        selector: 'contact-detail',
        template: "\n\t\t<div *ngIf=\"contact\">\n\t\t\t<h3>{{contact.name}} Details</h3>\n\t\t\t<label>Name:</label>\n\t\t\t<input [(ngModel)]=\"contact.name\" placeholder=\"name\"/>\n\t\t\t<div>\n\t\t\t\t<label> Age: </label>\n\t\t\t\t<input [(ngModel)] =\"contact.age\" placeholder=\"age\"/>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label> Phone Number </label>\n\t\t\t\t<input [(ngModel)]=\"contact.phone\" placeholder=\"phone\"/>\n\t\t\t</div>\n\t\t\t<button type=\"button\" (click)=\"update(contact)\">Update</button>\n\t\t\t<button type=\"button\" (click)=\"delete(contact)\">delete</button>\n\t\t\t<button type=\"button\" (click)=\"back()\">Go back</button>\n\t\t</div>\n\t"
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService,
        router_1.ActivatedRoute,
        common_1.Location])
], ContactDetailComponent);
exports.ContactDetailComponent = ContactDetailComponent;
//# sourceMappingURL=contact-detail.component.js.map