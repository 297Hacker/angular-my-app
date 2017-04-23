"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ContactSearchComponent = (function () {
    function ContactSearchComponent() {
    }
    return ContactSearchComponent;
}());
ContactSearchComponent = __decorate([
    core_1.Component({
        selector: 'contact-search',
        template: "\n\t\t<div>\n\t\t\t<h2>Search Contact</h2>\n\t\t\t<input #term type=\"text\" (keyup)=\"search(term.value)\">\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let contact of contacts\">{{contact.name}}</li>\n\t\t\t</ul>\n\t\t</div>\n\t"
    })
], ContactSearchComponent);
exports.ContactSearchComponent = ContactSearchComponent;
//# sourceMappingURL=contact-search.component.js.map