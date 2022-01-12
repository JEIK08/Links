import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent {

	@ViewChild('cornerTemplate') public cornerTemplate?: TemplateRef<void>;

}