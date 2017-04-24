import { Component, OnInit } from '@angular/core';
// import { CONTACTS } from './contacts';

import { Router } from '@angular/router';

import { Contact } from './contact';

import { ContactService } from './contact.service';

@Component({
	selector: 'contacts',
	template:
	`
		<h2>Contact List</h2>
		<ul class="contacts">
			<li *ngFor="let contact of contacts" (click)="selectContact(contact)">
				Name:{{contact.name}}
			</li>
		</ul>
		<add-contact [contacts]="contacts"></add-contact>

	`
})

export class ContactsComponent implements OnInit{
	contacts: Contact[];

	selectedContact: Contact;

	constructor(
		private contactService: ContactService,
		private router: Router
		){

	}
	ngOnInit(){
		this.getContacts();
	}

	getContacts(){
		this.contactService.getContacts()
			.subscribe(
				contacts => this.contacts = contacts,
				error => console.log(error)
				);
	}

	selectContact(contact: Contact){
		let link = ['./contacts', contact.id];
		this.router.navigate(link)

	}
}