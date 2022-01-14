import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { SessionService } from 'src/app/shared/services/session.service';

@Injectable({
	providedIn: 'root'
})
export class DashboardGuardService implements CanActivate {

	constructor(
		private sessionService: SessionService,
		private router: Router
	) { }

	canActivate(): Promise<true | UrlTree> {
		return new Promise((resolve) => {
			this.sessionService.getUser().then(() => {
				resolve(true);
			}).catch(() => {
				resolve(this.router.createUrlTree(['auth']));
			});
		});
	}

}