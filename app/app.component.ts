import { Component } from '@angular/core';
import { ContactsComponent } from './contacts.component';
import { NewContactComponent } from './new-contact.component';


@Component({
	selector: 'my-app',
	template: `
	<h1>contact</h1>
	<add-contact></add-contact>
	<contacts></contacts>
	<contact-detail></contact-detail>
	`
})

export class AppComponent {


}