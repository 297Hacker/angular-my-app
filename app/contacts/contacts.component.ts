import { Component, OnInit } from '@angular/core';
// import { CONTACTS } from './contacts';

import { Router } from '@angular/router';

import { Contact } from './shared/contact-model';

import { ContactService } from './shared/contact.service';

@Component({
	moduleId: module.id,
	selector: 'contacts',
	templateUrl: 'contacts.component.html',
	styleUrls: ['contacts.component.css']
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