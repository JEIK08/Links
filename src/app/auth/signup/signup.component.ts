import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NzModalService } from 'ng-zorro-antd/modal';

import { AuthService } from '../services/auth.service';

import { markFormAsDirty } from 'src/app/shared/utilities';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html'
})
export class SignupComponent {

	@ViewChild('cornerTemplate') public cornerTemplate?: TemplateRef<void>;

	public form: FormGroup;
	public registering?: boolean;

	constructor(
		private authService: AuthService,
		private router: Router,
		private route: ActivatedRoute,
		private formBuilder: FormBuilder,
		private nzModalService: NzModalService,
	) {
		this.form = this.formBuilder.group({
			name: [null, Validators.required],
			email: [null, [Validators.required, Validators.email]],
			password: [null, [Validators.required, Validators.minLength(8)]]
		});
	}

	onSubmit() {
		if (this.form.invalid) {
			markFormAsDirty(this.form);
			return;
		}

		this.registering = true;
		this.authService.signUp(this.form.value).subscribe(() => {
			this.registering = false;
			this.nzModalService.info({
				nzTitle: 'Registered',
				nzContent: 'User registered successfully.',
				nzClosable: false,
				nzOnOk: () => this.router.navigate(['..', 'login'], { relativeTo: this.route })
			});
		});
	}

}
