"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var contacts_1 = require("./contacts");
var ContactsComponent = (function () {
    function ContactsComponent() {
        this.contacts = contacts_1.CONTACTS;
        this.clickSuccess = '';
        this.users = [];
    }
    ContactsComponent.prototype.clicked = function () {
        this.clickSuccess = 'You Clicked the button!';
    };
    ContactsComponent.prototype.addNew = function (newEntry) {
        if (newEntry) {
            this.users.push(newEntry);
        }
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    core_1.Component({
        selector: 'contacts',
        template: "\n\t\t<h2>Testing contact component</h2>\n\t\t<ul class=\"contacts\">\n\t\t\t<li *ngFor=\"let contact of contacts\">\n\t\t\t\t{{contact.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t<button (click)=\"clicked()\">Click Here</button>\n\t\t{{clickSuccess}}\n\t\t<input #newEntry (keyup.enter) =\"addNew(newEntry.value)\">\n\t\t<button (click)=\"addNew(newEntry.value)\">add</button>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let user of users\">\n\t\t\t\t{{user}}\n\t\t\t</li>\n\t\t</ul>\n\n\t"
    })
], ContactsComponent);
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=app.contacts.component.js.map