import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalRoutingModule } from './internal-routing.module';
import { MainscreenComponent } from './containers/mainscreen/mainscreen.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainscreenComponent
  ],
  imports: [
    CommonModule,
    InternalRoutingModule,
    SharedModule
  ]
})
export class InternalModule { }
