import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../shared/services/session.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

	constructor(
		private sessionService: SessionService,
		private router: Router
	) { }

	logOut() {
		this.sessionService.logOut();
		this.router.navigate(['auth']);
	}

}
