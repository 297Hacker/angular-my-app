import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router'; 
import { Location } from '@angular/common';

import { Contact } from '../shared/contact-model';
import { ContactService } from '../shared/contact.service';

@Component({
	moduleId: module.id,
	selector: 'contact-detail',
	templateUrl: 'contact-detail.component.html'
})

export class ContactDetailComponent implements OnInit{
	contact: Contact;

	constructor(
		private contactService: ContactService,
		private route: ActivatedRoute,
		private location : Location
		) {}

	ngOnInit(): void{
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.contactService.getContactDetails(id)
				.subscribe(contact => this.contact = contact)
		})
	}

	back(){
		this.location.back();
	}

	update(contact: Contact){
		this.contactService.update(contact)
			.subscribe(()=> this.back())
	}

	delete(contact: Contact){
		this.contactService.deleteContacts(contact)
		.subscribe(() => this.back())
	}
}