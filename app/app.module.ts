import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/bundles/in-memory-web-api.umd.js';
import { InMemoryDataService} from './in-memory-data.service';

import { AppComponent } from './app.component';

import { ContactsModule } from './contacts/contacts.module';


@NgModule({
	imports: [ BrowserModule,
				FormsModule,
				ReactiveFormsModule,
				HttpModule,
				AppRoutingModule,
				InMemoryWebApiModule.forRoot(InMemoryDataService, {delay : 1000}),
				ContactsModule
	],	

	declarations: [ AppComponent],

	bootstrap: [ AppComponent ]
})

export class AppModule {}