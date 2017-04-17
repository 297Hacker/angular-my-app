import { Component } from '@angular/core';

@Component({
	selector: 'cv',
	template: `
		<h1>This is my Cv</h1>
		<button type="submit" (click)="showMore()">Click</button>
	`

})

export class CvComponent{

	showMore(){
		console.log('Hello Boss!');
	}

}