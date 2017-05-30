import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/bundles/in-memory-web-api.umd.js';
import { InMemoryDataService} from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewContactComponent } from './contacts/new-contact/new-contact.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { HomeComponent } from './contacts/home/home.component';
import { CvComponent } from './cv.component';

import { ContactService } from './contacts/shared/contact.service';
import { ContactSearchComponent } from './contacts/contact-search/contact-search.component'

import { SearchBarDirective } from './contacts/directives/searchbar.directive';

@NgModule({
	imports: [ BrowserModule,
				FormsModule,
				HttpModule,
				InMemoryWebApiModule.forRoot(InMemoryDataService),
				RouterModule.forRoot([
					{
						path: 'contacts/:id',
						component: ContactDetailComponent
					},
					{	
						path: 'home',
						component: HomeComponent
					},
					{
						path: 'cv',
						component: CvComponent
					},
					{
						path: '',
						redirectTo: '/home',
						pathMatch: 'full'
					},
					{
						path: 'contacts',
						component: ContactsComponent
					}]) ],
	providers: [ContactService ],
	declarations: [ AppComponent,
					ContactsComponent,
					NewContactComponent,
					ContactDetailComponent,
					HomeComponent,
					CvComponent,
					ContactSearchComponent,
					SearchBarDirective ],
	bootstrap: [ AppComponent ]
})

export class AppModule {}