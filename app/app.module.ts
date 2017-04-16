import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts.component';
import { NewContactComponent } from './new-contact.component';
import { ContactDetailComponent } from './contact-detail.component';
import { HomeComponent } from './home.component';

import { ContactService } from './contact.service';

@NgModule({
	imports: [ BrowserModule,
				FormsModule,
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
					HomeComponent ],
	bootstrap: [ AppComponent ]
})

export class AppModule {}