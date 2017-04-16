import { Component } from '@angular/core';
import { ContactsComponent } from './app.contacts.component';
import { NewContactComponent } from './app.new-contact.component';

@Component({
	selector: 'my-app',
	template: `
	<h1>contact</h1>
	<add-contact></add-contact>
	<contacts></contacts>
	`
})

export class AppComponent {


}