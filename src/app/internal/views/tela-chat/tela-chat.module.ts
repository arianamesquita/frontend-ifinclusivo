import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { TelaChatRoutingModule } from './tela-chat-routing.module';
import { ChatComponent } from './containers/chat/chat.component';
import { SidenavComponent } from './components/contatos/sidenav.component';
import { ChatTalkComponent } from './components/chat/chat-talk.component';

@NgModule({
  declarations: [
    ChatComponent,
    SidenavComponent,
    ChatTalkComponent
  ],
  imports: [
    CommonModule,
    TelaChatRoutingModule,
    SharedModule
  ]
})
export class TelaChatModule { }
