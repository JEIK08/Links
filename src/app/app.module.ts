import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

const nzConfig: NzConfig = {
	button: { nzSize: 'large' }
};

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [
		{ provide: NZ_I18N, useValue: en_US },
		{ provide: NZ_CONFIG, useValue: nzConfig }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
