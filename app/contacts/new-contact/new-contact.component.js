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
//form to add new contact
var core_1 = require("@angular/core");
var contact_service_1 = require("../shared/contact.service");
var NewContactComponent = (function () {
    function NewContactComponent(contactService) {
        this.contactService = contactService;
        this.show = false;
        this.buttonState = 'inactive';
    }
    NewContactComponent.prototype.growButton = function () {
        this.buttonState = 'active';
    };
    NewContactComponent.prototype.shrinkButton = function () {
        this.buttonState = 'inactive';
    };
    NewContactComponent.prototype.ngOnInit = function () {
        this.setForm();
    };
    NewContactComponent.prototype.setForm = function () {
        this.confirmation = true;
        this.errorMessage = null;
        this.newContact = {};
    };
    NewContactComponent.prototype.confirm = function () {
        this.confirmation = false;
    };
    NewContactComponent.prototype.addNewContact = function (contact) {
        var _this = this;
        if (!contact) {
            return;
        }
        this.contactService.addContact(contact)
            .subscribe(function (contact) {
            _this.contacts.push(contact);
            _this.setForm();
        }, function (error) { return _this.errorMessage = 'Something went wrong' + error; });
    };
    return NewContactComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], NewContactComponent.prototype, "contacts", void 0);
NewContactComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-contact',
        animations: [
            core_1.trigger('bringUpMenu', [
                core_1.state('active', core_1.style({ transform: 'translateY(0)' })),
                core_1.transition('void => *', [
                    core_1.style({ transform: 'translateY(100%)' }),
                    core_1.animate(500)
                ]),
                core_1.transition('* => void', [
                    core_1.animate(500, core_1.style({ transform: 'translateX(100%)' }))
                ])
            ]),
            core_1.trigger('growButton', [
                core_1.state('inactive', core_1.style({ transform: 'scale(1)' })),
                core_1.state('active', core_1.style({ transform: 'scale(1.5)' })),
                core_1.transition('active => inactive', core_1.animate('300ms ease-in')),
                core_1.transition('inactive => active', core_1.animate('300ms ease-out'))
            ])
        ],
        templateUrl: 'new-contact.component.html',
        styleUrls: ['new-contact.component.css']
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], NewContactComponent);
exports.NewContactComponent = NewContactComponent;
//# sourceMappingURL=new-contact.component.js.map