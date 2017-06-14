import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../shared/contact-model';
import { ContactSearchService } from '../shared/contact-search.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
	moduleId: module.id,
	selector: 'contact-search',
	templateUrl: 'contact-search.component.html',
	styleUrls: ['contact-search.component.css']
})

export class ContactSearchComponent implements OnInit {
	
	private searchTermStream = new Subject<string>();
	private contacts: Observable<Contact[]>;

	constructor(private contactSearchService: ContactSearchService,
		private router: Router){}

	search(term: string){
		this.searchTermStream.next(term);
	}

	ngOnInit(): void{
	this.contacts = this.searchTermStream
		.debounceTime(100)
		.distinctUntilChanged()
		.switchMap((term) => term 
			? this.contactSearchService.search(term)
			: Observable.of<Contact[]>([]))
		.catch(error => {
				console.log(error);
				return Observable.of<Contact[]>([])
			})
	}

	selectContact(contact: Contact){
		let link = ['./contacts', contact.id];
		this.router.navigate(link)

	}
}