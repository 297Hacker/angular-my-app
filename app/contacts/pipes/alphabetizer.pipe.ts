import { Pipe, PipeTransform } from '@angular/core';

import { Contact } from '../shared/contact-model';

@Pipe({
	name: 'alphabetical'
})

export class AlphabetizerPipe implements PipeTransform {
	transform(contacts: Contact[]): any {
		if (this.contacts === null) return false;
		return contacts.sort((a, b) => {
			if (a.name < b.name) return -1;
			if (a.name > b.name) return 1;
			return 0;
		});
	}
}