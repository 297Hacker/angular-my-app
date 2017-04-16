import { Component } from '@angular/core';
import { CONTACTS } from './contacts';

import { Contact } from './contact';

@Component({
	selector: 'contacts',
	template:
	`
		<h2>Testing contact component</h2>
		<ul class="contacts">
			<li *ngFor="let contact of contacts">
				{{contact.name}}
			</li>
		</ul>
		<button (click)="clicked()">Click Here</button>
		{{clickSuccess}}
		<input #newEntry (keyup.enter) ="addNew(newEntry.value)">
		<button (click)="addNew(newEntry.value)">add</button>
		<ul>
			<li *ngFor="let user of users">
				{{user}}
			</li>
		</ul>

	`
})

export class ContactsComponent{
	contacts = CONTACTS;
	clickSuccess = '';

	clicked(){
		this.clickSuccess = 'You Clicked the button!';
	}

	users = [];

	addNew(newEntry: string){
		if (newEntry){
			this.users.push(newEntry);

		}
	}

}