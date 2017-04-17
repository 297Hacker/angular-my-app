import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Contact } from './contact';

import { CONTACTS } from './contacts';

@Injectable()

export class ContactService{

	private contactsUrl = 'app/contactslist';

	constructor(private http: Http){}


	getContacts(): Promise<Contact[]>{
		return this.http.get(this.contactsUrl)
		.toPromise()
		.then(this.getData)
		.catch(this.handleError)
	}

	getContactDetails(id: number): Promise<Contact>{
		return this.getContacts()
		.then(contacts => contacts.find(contact => contact.id === id))
	}

	getData(res: Response){
		let body = res.json()
		return body.data || {}
	}

	handleError(error: any){
		console.error('Something went wrong', error);
	}
}