import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthService } from './services/auth.service';

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
	],
	providers: [
		AuthService
	]
})
export class AuthModule { }
