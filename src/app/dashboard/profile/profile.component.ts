import { Component, HostBinding } from '@angular/core';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

	@HostBinding('class') public class: string = 'box';

}
