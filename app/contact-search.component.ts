import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from './contact';
import { ContactSearchService } from './contact-search.service';

@Component({
	selector: 'contact-search',
	template: `
		<div>
			<h2>Search Contact</h2>
			<input #term type="text" (keyup)="search(term.value)"/>
			<ul>
				<li *ngFor="let contact of contacts"
				(click)="selectContact(contact)">
				{{contact.name}}
				</li>
			</ul>
		</div>
	`
})

export class ContactSearchComponent {
	contacts : Contact[];

	constructor(private contactSearchService: ContactSearchService,
		private router: Router){}

	search(term: string){
		this.contactSearchService.search(term)
			.then(contacts => this.contacts = contacts)
	}

	selectContact(contact: Contact){
		let link = ['./contacts', contact.id];
		this.router.navigate(link)

	}
}