import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

registerLocaleData(en);

import { SessionService } from './shared/services/session.service';
import { InterceptorService } from './shared/services/interceptor.service';

const nzConfig: NzConfig = {
	button: { nzSize: 'large' }
};

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule
	],
	providers: [
		SessionService,
		{ provide: NZ_I18N, useValue: en_US },
		{ provide: NZ_CONFIG, useValue: nzConfig },
		{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
