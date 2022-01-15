import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(
		private sessionService: SessionService,
		private router: Router
	) { }

	canActivate(): Promise<true | UrlTree> {
		return new Promise((resolve) => {
			this.sessionService.verifyUser().then(() => {
				resolve(this.router.createUrlTree(['']));
			}).catch(() => {
				resolve(true);
			});
		});
	}

}
