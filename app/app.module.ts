import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactsComponent } from './app.contacts.component';
import { NewContactComponent } from './app.new-contact.component';

@NgModule({
	imports: [ BrowserModule,
				FormsModule ],
	declarations: [ AppComponent,
					ContactsComponent,
					NewContactComponent ],
	bootstrap: [ AppComponent ]
})

export class AppModule {}