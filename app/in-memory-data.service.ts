import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDataService{
	createDb(){
		let contactslist = [
		{id: 1, name: "Jane", age:31, phone: "555-666"},
		{id: 2, name: "Bob", age:42, phone: "56292-22"},
		{id: 3, name: "Rom", age:41, phone: "56292-33"},
		{id: 4, name: "Rob", age:88, phone: "56292-54"},
		{id: 5, name: "Dom", age:35, phone: "56292-44"},
		{id: 6, name: "BAAS", age:35, phone: "56292-44"}
		]

		return {contactslist}
	} 
}