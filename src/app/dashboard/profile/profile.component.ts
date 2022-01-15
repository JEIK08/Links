import { Component, HostBinding } from '@angular/core';

import { SessionService } from 'src/app/shared/services/session.service';

import { User } from 'src/app/shared/interfaces/user';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

	@HostBinding('class') public class: string = 'box';

	public user: User;

	constructor(private sessionService: SessionService) {
		this.user = this.sessionService.getUser();
	}

}
