import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from './contact';

@Injectable()

export class ContactSearchService{
	constructor(private http: Http) {}

		search(term): Promise<Contact[]>{
			return this.http.get(`app/contactslist/?name=${term}`)
			.toPromise()
			.then(response => response.json().data)
		}
}