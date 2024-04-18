import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { ContainersRoutingModule } from './containers-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContainersRoutingModule,
    SharedModule,
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ContainersModule { }
