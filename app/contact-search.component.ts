import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
	selector: 'contact-search',
	template: `
		<div>
			<h2>Search Contact</h2>
			<input #term type="text" (keyup)="search(term.value)">
			<ul>
				<li *ngFor="let contact of contacts">{{contact.name}}</li>
			</ul>
		</div>
	`
})

export class ContactSearchComponent {
	contacts : Contact[];
}