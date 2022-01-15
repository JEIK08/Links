import { Component, HostBinding } from '@angular/core';

import { SessionService } from 'src/app/shared/services/session.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

	@HostBinding('class') public class: string = 'box';

	public user: any;

	constructor(private sessionService: SessionService) {
		this.sessionService.getUser().then((user) => this.user = user);
	}

}
