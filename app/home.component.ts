import { Component, Input, OnInit } from '@angular/core';

import { Contact } from './contact';
import { ContactService } from './contact.service';

import { Router } from '@angular/router';

@Component({
	selector: 'home',
	template: `
		<h2>Contact List Home Page</h2>
		<h5>Most recent added contact:{{contact?.name}}</h5>
		<button type="button" (click)="gotoDetails(contact)">Details</button>
		<add-contact></add-contact>
	`

})

export class HomeComponent implements OnInit{
	contact: Contact;

	constructor(
		private contactService: ContactService,
		private router: Router
		){}

	ngOnInit():void{
		this.getNewest();
	}

	getNewest(){
		this.contactService.getContacts()
		.then(contacts => this.contact = contacts
			.reduce(function(previous, current){
				if ( current.id > previous.id) {
					return current
				} else{
					return previous;
				}
			})
		)
	}

	gotoDetails(contact: Contact){
		let link = ['/contacts', contact.id];
		this.router.navigate(link)
	}

}