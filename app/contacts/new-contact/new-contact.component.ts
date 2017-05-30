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
			]),
			trigger('growButton', [
				state('inactive', style({transform: 'scale(1)'})),
				state('active', style({transform: 'scale(1.5)'})),
				transition('active => inactive', animate('300ms ease-in')),
				transition('inactive => active', animate('300ms ease-out'))
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
	show:boolean = false;

	buttonState: string = 'inactive';
	
	growButton(): void{
		this.buttonState = 'active';
	}

	shrinkButton(): void{
		this.buttonState = 'inactive';
	}

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