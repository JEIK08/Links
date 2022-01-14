import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth/services/auth-guard.service';
import { DashboardGuardService } from './dashboard/services/dashboard-guard.service';

const routes: Routes = [
	{ path: 'auth', canActivate: [AuthGuardService], loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
	{ path: '', canActivate: [DashboardGuardService], loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
	{ path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { enableTracing: false })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
