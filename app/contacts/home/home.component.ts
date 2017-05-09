import { Component, Input, OnInit } from '@angular/core';

import { Contact } from '../shared/contact-model';
import { ContactService } from '../shared/contact.service';
import { ContactSearchService } from '../shared/contact-search.service';

import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'home',
	templateUrl: 'home.component.html',
	providers: [ContactSearchService]

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
		.subscribe(contacts => this.contact = contacts
			.reduce((previous, current){
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