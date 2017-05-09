//form to add new contact
import { Component, Input, OnInit } from '@angular/core';

import { Contact } from '../shared/contact-model';
import { ContactService } from '../shared/contact.service';

@Component({
	moduleId: module.id,
	selector: 'add-contact',
	templateUrl: 'new-contact.component.html',
	styleUrls: ['new-contact.component.css']
})

export class NewContactComponent implements OnInit{
	@Input() contacts : Contact[];

	errorMessage: string;
	confirmation: boolean;
	newContact;

	ngOnInit():void{
		this.setForm();
	}

	setForm():void{
		this.confirmation = true;
		this.errorMessage = null;
		this.newContact= {};
	}


	confirm(){
		this.confirmation = false;
	}

	constructor(private contactService: ContactService){}

	addNewContact(contact: Contact)
		{
			if(!contact){
				return;
			}this.contactService.addContact(contact)
				.subscribe(contact => {this.contacts.push(contact);
										this.setForm();
									},
					error => this.errorMessage = 'Something went wrong' + error
					)

		}
}