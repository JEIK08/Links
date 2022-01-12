import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
	declarations: [
		AuthComponent,
		LoginComponent,
		SignupComponent
	],
	imports: [
		SharedModule,
		AuthRoutingModule
	]
})
export class AuthModule { }
