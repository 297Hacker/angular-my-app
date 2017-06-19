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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var contact_service_1 = require("../shared/contact.service");
var ContactDetailComponent = (function () {
    function ContactDetailComponent(contactService, route, formBuilder, router) {
        this.contactService = contactService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        this.getContact();
    };
    ContactDetailComponent.prototype.canDeactivate = function () {
        if (!this.contact || JSON.stringify(this.contact) === JSON.stringify(this.contactDetails.value)) {
            return true;
        }
        else {
            return window.confirm('Are you sure? all unsaved progress will be lost!');
        }
        // return this.contactDetails.dirty
    };
    ContactDetailComponent.prototype.getContact = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.contactService.getContactDetails(id)
                .subscribe(function (contact) {
                _this.contact = contact;
                _this.populateDetails();
            });
        });
    };
    ContactDetailComponent.prototype.populateDetails = function () {
        this.contactDetails = this.formBuilder.group({
            id: [this.contact.id, [forms_1.Validators.required]],
            name: [this.contact.name, [forms_1.Validators.required]],
            age: [this.contact.age, [forms_1.Validators.required]],
            phone: [this.contact.phone, [forms_1.Validators.required]]
        });
    };
    ContactDetailComponent.prototype.toContacts = function () {
        this.router.navigate(['/contacts']);
    };
    ContactDetailComponent.prototype.update = function (contact) {
        var _this = this;
        this.contactService.update(contact)
            .subscribe(function (contact) {
            _this.contact = contact;
            _this.toContacts();
        });
    };
    ContactDetailComponent.prototype.delete = function (contact) {
        var _this = this;
        this.contactService.deleteContacts(contact)
            .subscribe(function () {
            _this.contact = null;
            _this.toContacts();
        });
    };
    return ContactDetailComponent;
}());
ContactDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contact-detail',
        templateUrl: 'contact-detail.component.html',
        styles: [" .required-field{\n\tbackground:#ffcdd2;\n\tcolor:#632827;\n\tpadding: 15px;\n\tmargin:-20px auto 20px auto;\n\tborder-radius: 4px;\n\twidth 100%}\n"]
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        router_1.Router])
], ContactDetailComponent);
exports.ContactDetailComponent = ContactDetailComponent;
//# sourceMappingURL=contact-detail.component.js.map