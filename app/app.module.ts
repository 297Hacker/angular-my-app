import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ContactSearchComponent } from './contacts/contact-search/contact-search.component';
import { PageNotFoundComponent } from './contacts/page-not-found/page-not-found.component';

import { SearchBarDirective } from './contacts/directives/searchbar.directive';
import { HoverDirective } from './contacts/directives/hover.directive';

import { CapitalizerPipe } from './contacts/pipes/capitalizer.pipe';
import { AlphabetizerPipe } from './contacts/pipes/alphabetizer.pipe';
import { NameFilterPipe } from './contacts/pipes/name-filter.pipe';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [ BrowserModule,
				FormsModule,
				ReactiveFormsModule,
				HttpModule,
				AppRoutingModule,
				InMemoryWebApiModule.forRoot(InMemoryDataService, {delay : 0}),
	],	

	providers: [ContactService ],
	declarations: [ AppComponent,
					ContactsComponent,
					NewContactComponent,
					ContactDetailComponent,
					HomeComponent,
					CvComponent,
					ContactSearchComponent,
					SearchBarDirective,
					CapitalizerPipe,
					HoverDirective,
					AlphabetizerPipe,
					NameFilterPipe,
					PageNotFoundComponent ],

	bootstrap: [ AppComponent ]
})

export class AppModule {}