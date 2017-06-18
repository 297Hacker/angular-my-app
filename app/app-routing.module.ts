import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './contacts/home/home.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './contacts/page-not-found/page-not-found.component';

const routes: Routes = [
{path: 'contacts/:id', component: ContactDetailComponent },
{path: 'home', component: HomeComponent},
{path: 'contacts', component: ContactsComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: '**', component: PageNotFoundComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}