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
var contact_1 = require("./contact");
var ContactDetailComponent = (function () {
    function ContactDetailComponent() {
    }
    ContactDetailComponent.prototype.closeDetails = function () {
        this.contact = '';
    };
    return ContactDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", contact_1.Contact)
], ContactDetailComponent.prototype, "contact", void 0);
ContactDetailComponent = __decorate([
    core_1.Component({
        selector: 'contact-detail',
        template: "\n\t\t<div *ngIf=\"contact\">\n\t\t\t<h3>{{contact.name}} details</h3>\n\t\t\t<label>Name:</label>\n\t\t\t<input [(ngModel)]=\"contact.name\" placeholder=\"name\"/>\n\t\t\t<div>\n\t\t\t\t<label> Age: </label>\n\t\t\t\t<input [(ngModel)] =\"contact.age\" placeholder=\"age\"/>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label> Phone Number </label>\n\t\t\t\t<input [(ngModel)]=\"contact.phone\" placeholder=\"phone\"/>\n\t\t\t</div>\n\t\t\t<button type=\"button\" (click)=\"closeDetails()\">Close</button>\n\t\t</div>\n\t"
    })
], ContactDetailComponent);
exports.ContactDetailComponent = ContactDetailComponent;
//# sourceMappingURL=contact-detail.component.js.map