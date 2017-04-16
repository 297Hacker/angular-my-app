import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<h1>contact</h1>
	<a routerLink="/home">Home</a>
	<a routerLink="/contacts">Contact</a>
	<router-outlet></router-outlet>
	`
})

export class AppComponent {


}