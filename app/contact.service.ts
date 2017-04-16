import { Injectable } from '@angular/core';

import { Contact } from './contact';

import { CONTACTS } from './contacts';

@Injectable()

export class ContactService{
	getContacts(): Promise<Contact[]>{
		return Promise.resolve(CONTACTS);
	}

	getContactDetails(id: number): Promise<Contact>{
		return this.getContacts()
		.then(contacts => contacts.find(contact => contact.id === id));
	}
}