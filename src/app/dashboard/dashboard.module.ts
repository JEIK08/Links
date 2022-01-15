import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { LinksService } from './services/links.service';

import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UrlFormComponent } from './url-form/url-form.component';
import { UrlListComponent } from './url-list/url-list.component';

@NgModule({
	declarations: [
		DashboardComponent,
		ProfileComponent,
		UrlFormComponent,
		UrlListComponent
	],
	imports: [
		SharedModule,
		DashboardRoutingModule
	],
	providers: [
		LinksService
	]
})
export class DashboardModule { }
