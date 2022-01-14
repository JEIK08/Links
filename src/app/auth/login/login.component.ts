import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SessionService } from 'src/app/shared/services/session.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent {

	@ViewChild('cornerTemplate') public cornerTemplate?: TemplateRef<void>;

	public form: FormGroup;
	public loggingIn?: boolean;

	constructor(
		private sessionService: SessionService,
		private router: Router,
		private formBuilder: FormBuilder
	) {
		this.form = this.formBuilder.group({
			email: [null, [Validators.required, Validators.email]],
			password: [null, [Validators.required, Validators.minLength(8)]]
		});
	}

	logIn() {
		if (this.form.invalid) {
			Object.values(this.form.controls).forEach(control => {
				if (control.invalid) {
					control.markAsDirty();
					control.updateValueAndValidity({ onlySelf: true });
				}
			});
			return;
		}

		this.loggingIn = true;
		this.sessionService.logIn(this.form.value).then(() => {
			this.router.navigate(['']);
		});
	}

}
