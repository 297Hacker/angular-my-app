import { Component } from '@angular/core';

import './rxjs-operators';

@Component({
	selector: 'my-app',
	template: `
	<h1>contact meh</h1>
	<a routerLink="/home">Home</a>
	<a routerLink="/contacts">Contact</a>
	<a routerLink="/cv">Cv</a>
	<router-outlet></router-outlet>
	`
})

export class AppComponent {


}