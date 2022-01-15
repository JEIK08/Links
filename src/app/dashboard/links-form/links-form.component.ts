import { Component, HostBinding, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LinksService } from '../services/links.service';

import { markFormAsDirty } from 'src/app/shared/utilities';

@Component({
	selector: 'app-links-form',
	templateUrl: './links-form.component.html',
	styleUrls: ['./links-form.component.scss']
})
export class LinksFormComponent {

	@HostBinding('class') public class: string = 'box';

	@Output('onCreate') public onCreate: EventEmitter<void>;

	public form: FormGroup;
	public loading?: boolean;

	constructor(
		private linksService: LinksService,
		private formBuilder: FormBuilder
	) {
		this.onCreate = new EventEmitter();
		this.form = this.formBuilder.group({
			url: [null, Validators.required],
        	name: [null, Validators.required]
		});
	}

	onSubmit() {
		if (this.form.invalid) {
			markFormAsDirty(this.form);
			return;
		}

		this.loading = true;
		this.linksService.createLink(this.form.value).subscribe({
			next: () => {
				this.loading = false;
				this.form.reset();
				this.onCreate.emit();
			},
			error: () => {
				this.loading = false;
				this.form.reset();
				this.onCreate.emit();
			}
		});
	}

}
