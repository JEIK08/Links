import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	@ViewChild('cornerTemplate') cornerTemplate!: TemplateRef<void>;

}
