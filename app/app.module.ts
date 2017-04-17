import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/bundles/in-memory-web-api.umd.js';
import { InMemoryDataService} from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts.component';
import { NewContactComponent } from './new-contact.component';
import { ContactDetailComponent } from './contact-detail.component';
import { HomeComponent } from './home.component';
import { CvComponent } from './cv.component';

import { ContactService } from './contact.service';

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
					CvComponent ],
	bootstrap: [ AppComponent ]
})

export class AppModule {}