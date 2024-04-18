import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelaPrincipalRoutingModule } from './tela-principal-routing.module';
import { PrincipalComponent } from './containers/principal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LabelsComponent } from './components/labels/labels.component';
import { CardsComponent } from './components/cards/cards.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    LabelsComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    TelaPrincipalRoutingModule,
    SharedModule,
  ]
})
export class TelaPrincipalModule { }
