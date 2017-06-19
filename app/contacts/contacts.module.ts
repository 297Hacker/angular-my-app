import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'

import { ContactsComponent } from './contacts.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { HomeComponent } from './home/home.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpinnerComponent } from './loading/loading.component';

import { ContactService } from './shared/contact.service';

import { SearchBarDirective } from './directives/searchbar.directive';
import { HoverDirective } from './directives/hover.directive';

import { CapitalizerPipe } from './pipes/capitalizer.pipe';
import { AlphabetizerPipe } from './pipes/alphabetizer.pipe';
import { NameFilterPipe } from './pipes/name-filter.pipe';

import { CanDeactivateGuard } from './guards/can-deactivate.guard';

@NgModule({
        imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [ ContactService,
                  CanDeactivateGuard ],
    declarations: [
        ContactsComponent,
        NewContactComponent,
        ContactDetailComponent,
        HomeComponent,
        ContactSearchComponent,
        PageNotFoundComponent,
        SpinnerComponent,
        SearchBarDirective,
        HoverDirective,
        CapitalizerPipe,
        AlphabetizerPipe,
        NameFilterPipe 
    ]
})

export class ContactsModule {}