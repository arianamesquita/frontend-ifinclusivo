import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { TelaForumRoutingModule } from './tela-forum-routing.module';
import { ForumComponent } from './containers/forum.component';


@NgModule({
  declarations: [
    ForumComponent
  ],
  imports: [
    CommonModule,
    TelaForumRoutingModule,
    SharedModule
  ]
})
export class TelaForumModule { }
