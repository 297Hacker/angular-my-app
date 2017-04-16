"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//form to add new contact
var core_1 = require("@angular/core");
var NewContactComponent = (function () {
    function NewContactComponent() {
        this.newContact = { name: '', age: '', phone: '' };
        this.confirmation = true;
    }
    NewContactComponent.prototype.clear = function () {
        this.newContact = { name: '', age: '', phone: '' };
    };
    NewContactComponent.prototype.confirm = function () {
        this.confirmation = false;
    };
    return NewContactComponent;
}());
NewContactComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-contact',
        templateUrl: 'new-contact.component.html'
    })
], NewContactComponent);
exports.NewContactComponent = NewContactComponent;
//# sourceMappingURL=app.new-contact.component.js.map