import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html'
})
export class SignupComponent {

	@ViewChild('cornerTemplate') public cornerTemplate?: TemplateRef<void>;

}
