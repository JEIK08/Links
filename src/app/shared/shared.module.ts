import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
	declarations: [],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,

		NzButtonModule,
		NzFormModule,
		NzInputModule
	]
})
export class SharedModule { }
