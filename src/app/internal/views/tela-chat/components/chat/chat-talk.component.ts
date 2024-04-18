import { Component } from '@angular/core';
import mock from './mock.json'

@Component({
  selector: 'app-chat-talk',
  templateUrl: './chat-talk.component.html',
  styleUrls: ['./chat-talk.component.scss']
})
export class ChatTalkComponent {

    contatos = mock;

    formatarHora(timestamp: string): string {
      const hora = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return hora;
    }
}
