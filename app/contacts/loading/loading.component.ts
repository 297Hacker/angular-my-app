import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
	moduleId: module.id,
	selector: 'spinner',
	template: `
	<div [ngSwitch]="loading">
		<div *ngSwitchCase="false">
			<ng-content> </ng-content>
		</div>
		<div *ngSwitchCase="true">
			<div class="sk-circle">
			  <div class="sk-circle1 sk-child"></div>
			  <div class="sk-circle2 sk-child"></div>
			  <div class="sk-circle3 sk-child"></div>
			  <div class="sk-circle4 sk-child"></div>
			  <div class="sk-circle5 sk-child"></div>
			  <div class="sk-circle6 sk-child"></div>
			  <div class="sk-circle7 sk-child"></div>
			  <div class="sk-circle8 sk-child"></div>
			  <div class="sk-circle9 sk-child"></div>
			  <div class="sk-circle10 sk-child"></div>
			  <div class="sk-circle11 sk-child"></div>
			  <div class="sk-circle12 sk-child"></div>
			</div>
		</div>
	</div>	
	`,
	styleUrls: ['loading.component.css']
})

export class SpinnerComponent implements OnInit, OnChanges {
	@Input() contactCheck;
	loading: boolean;

	ngOnInit(): void{
		this.loadSpinner();
	}

	ngOnChanges(): void{
		if(!this.contactCheck){
			this.loading = true;
		}else{
			this.loading = false;
		}
	}

	loadSpinner(): void{
		this.loading = true;
	}


}
