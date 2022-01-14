import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from 'src/app/shared/services/session.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent {

	@ViewChild('cornerTemplate') public cornerTemplate?: TemplateRef<void>;

	constructor(
		private sessionService: SessionService,
		private router: Router
	) { }

	logIn() {
		this.sessionService.logIn({
			email: "email@email.com",
			password: "123213"
		}).then(() => {
			this.router.navigate(['']);
		});
	}

}
