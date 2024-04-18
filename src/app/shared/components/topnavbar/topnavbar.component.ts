import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent {

  ifinclusivo = "/assets/imagens/Group 73.svg";
  usuario = "Usuário X"
  buttons = [
    { text: "Fórum" },
    { text: "Tópicos" },
    { text: "Libras" },
    { text: "Chat" },
  ]

  constructor ( private router: Router ) { }

  navigateTo(routerName: string) : void {
    let rota = routerName.toLowerCase().replace("ó", "o");
    if (rota === 'libras' || rota === "topicos"){
      rota = 'home';
    } else if (rota === 'forum') rota = 'forum';
    else if (rota === 'chat') rota = 'chat';
    this.router.navigate([rota]);
  }

  isRouteSelected(route: string): boolean {
    let currentRoute = this.router.url.substring(1);
    if(currentRoute === 'home'){
      currentRoute = 'Libras';
    }
    if(currentRoute === 'forum'){
      currentRoute = 'Fórum';
    }
    return currentRoute.toLowerCase() === route.toLowerCase();
  }
}
