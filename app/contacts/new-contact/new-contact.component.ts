//form to add new contact
import { Component, Input, OnInit, 
trigger,
state,
style,
transition,
animate
 } from '@angular/core';

import { Contact } from '../shared/contact-model';
import { ContactService } from '../shared/contact.service';

@Component({
	moduleId: module.id,
	selector: 'add-contact',
	animations: [
			trigger('bringUpMenu', [
			state('active', style({transform: 'translateY(0)'})),
			transition('void => *', [
				style({transform:'translateY(100%)'}),
				animate(500)
				]),
			transition('* => void', [
				animate(500, style({transform: 'translateX(100%)'}))
				])
			])
		],
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