import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'spinner',
	template: `
		<div class="border">
			<ng-content></ng-content>
		</div>
		`,
		styles: [`
		.border{
			border: 2px solid black;
			}
			`]
});

export class SpinnerComponent {}
