import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Contact } from '../shared/contact-model';
import { ContactService } from '../shared/contact.service';

@Component({
	moduleId: module.id,
	selector: 'contact-detail',
	templateUrl: 'contact-detail.component.html',
	styles: [` .required-field{
	background:#ffcdd2;
	color:#632827;
	padding: 15px;
	margin:-20px auto 20px auto;
	border-radius: 4px;
	width 100%}
`]
})

export class ContactDetailComponent implements OnInit{
	contact: Contact;
	contactDetails: FormGroup;

	constructor(
		private contactService: ContactService,
		private route: ActivatedRoute,
		private formBuilder: FormBuilder,
		private router: Router
		) {}

	ngOnInit(): void{
		this.getContact();
	
	}

	canDeactivate(): boolean{
		if(!this.contact || JSON.stringify(this.contact) === JSON.stringify(this.contactDetails.value)){
			return true;
		}else{
			return window.confirm('Are you sure? all unsaved progress will be lost!')
		}
		// return this.contactDetails.dirty
	}

	getContact(): void{
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.contactService.getContactDetails(id)
				.subscribe(contact => {
					this.contact = contact;
					this.populateDetails();
				})
		});
	}

	populateDetails():void{
		this.contactDetails = this.formBuilder.group({
			id: [this.contact.id, [Validators.required]],
			name: [this.contact.name, [Validators.required]],
			age: [this.contact.age, [Validators.required]],
			phone: [this.contact.phone, [Validators.required]]
		})
	}

	toContacts(){
		this.router.navigate(['/contacts'])
	}

	update(contact: Contact){
		this.contactService.update(contact)

			.subscribe((contact)=> {this.contact = contact;
									this.toContacts();

				})
	}

	delete(contact: Contact){
		this.contactService.deleteContacts(contact)
		.subscribe(() => {	this.contact = null;
							this.toContacts();
						})
	}
}