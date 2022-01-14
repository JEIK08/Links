import { AbstractControl, FormGroup } from '@angular/forms';

export const markFormAsDirty = (form: AbstractControl) => {
	if (form.valid) return;
	form.markAsDirty();
	form.updateValueAndValidity({ onlySelf: true });
	if (form instanceof FormGroup) {
		Object.keys(form.controls).forEach(key => {
			markFormAsDirty(form.controls[key]);
		});
	}
}