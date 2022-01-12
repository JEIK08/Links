import { Component, HostBinding } from '@angular/core';

@Component({
	selector: 'app-url-form',
	templateUrl: './url-form.component.html',
	styleUrls: ['./url-form.component.scss']
})
export class UrlFormComponent {

	@HostBinding('class') public class: string = 'box';

}
