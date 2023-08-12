import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ConfirmBoxComponent } from './confirm-box/confirm-box.component';


@NgModule({
  declarations: [
    ConfirmBoxComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ConfirmBoxComponent
  ]
})
export class SharedModule { }
