import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { LinksService } from './services/links.service';

import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LinksFormComponent } from './links-form/links-form.component';
import { LinksListComponent } from './links-list/links-list.component';

@NgModule({
	declarations: [
		DashboardComponent,
		ProfileComponent,
		LinksFormComponent,
		LinksListComponent
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
