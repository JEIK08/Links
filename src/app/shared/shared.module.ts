import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
	declarations: [],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,

		NzButtonModule,
		NzFormModule,
		NzInputModule,
		NzModalModule
	]
})
export class SharedModule { }
