import { Component, HostBinding } from '@angular/core';

@Component({
	selector: 'app-links-form',
	templateUrl: './links-form.component.html',
	styleUrls: ['./links-form.component.scss']
})
export class LinksFormComponent {

	@HostBinding('class') public class: string = 'box';

}
