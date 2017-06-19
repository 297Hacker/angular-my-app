import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

export interface CanComponentDeactivate{
	canDeactivate(): () => Observable<boolean> | Promise<boolean> | boolean
}

@Injectable()

	export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
		canDeactivate(component: CanComponentDeactivate){
			if (!component.canDeactivate()) {
				return false;
			}
			return true;
		}

}
