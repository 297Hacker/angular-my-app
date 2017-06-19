import { Component, OnInit, Input, ViewChild } from '@angular/core';
// import { CONTACTS } from './contacts';
import { Router } from '@angular/router';

import { Contact } from './shared/contact-model';

import { ContactService } from './shared/contact.service';
import { NewContactComponent } from './new-contact/new-contact.component';


@Component({
	moduleId: module.id,
	selector: 'contacts',
	templateUrl: 'contacts.component.html',
	styleUrls: ['contacts.component.css']
})

export class ContactsComponent implements OnInit{
	contacts: Contact[];

	selectedContact: Contact;

	@ViewChild(NewContactComponent) private NewContactComponent: NewContactComponent;

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
				contacts => {this.contacts = contacts;},
				error => console.log(error)
				);
	}

	selectContact(contact: Contact){
		let link = ['./contacts', contact.id];
		this.router.navigate(link)
	}

	canDeactivate(): boolean{
		if(this.NewContactComponent.checkForm()){
			return true;
		}else{
			return window.confirm('Are you sure? all unsaved progress will be lost!');
		}
	}

}