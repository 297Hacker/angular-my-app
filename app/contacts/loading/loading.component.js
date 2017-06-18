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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SpinnerComponent = (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        this.loadSpinner();
    };
    SpinnerComponent.prototype.ngOnChanges = function () {
        if (!this.contactCheck) {
            this.loading = true;
        }
        else {
            this.loading = false;
        }
    };
    SpinnerComponent.prototype.loadSpinner = function () {
        this.loading = true;
    };
    return SpinnerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "contactCheck", void 0);
SpinnerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'spinner',
        template: "\n\t<div [ngSwitch]=\"loading\">\n\t\t<div *ngSwitchCase=\"false\">\n\t\t\t<ng-content> </ng-content>\n\t\t</div>\n\t\t<div *ngSwitchCase=\"true\">\n\t\t\t<div class=\"sk-circle\">\n\t\t\t  <div class=\"sk-circle1 sk-child\"></div>\n\t\t\t  <div class=\"sk-circle2 sk-child\"></div>\n\t\t\t  <div class=\"sk-circle3 sk-child\"></div>\n\t\t\t  <div class=\"sk-circle4 sk-child\"></div>\n\t\t\t  <div class=\"sk-circle5 sk-child\"></div>\n\t\t\t  <div class=\"sk-circle6 sk-child\"></div>\n\t\t\t  <div class=\"sk-circle7 sk-child\"></div>\n\t\t\t  <div class=\"sk-circle8 sk-child\"></div>\n\t\t\t  <div class=\"sk-circle9 sk-child\"></div>\n\t\t\t  <div class=\"sk-circle10 sk-child\"></div>\n\t\t\t  <div class=\"sk-circle11 sk-child\"></div>\n\t\t\t  <div class=\"sk-circle12 sk-child\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n\t",
        styleUrls: ['loading.component.css']
    })
], SpinnerComponent);
exports.SpinnerComponent = SpinnerComponent;
//# sourceMappingURL=loading.component.js.map