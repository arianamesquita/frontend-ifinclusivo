import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  redes = "../../../../../../assets/imagens/redes.svg";
  ed = "../../../../../../assets/imagens/ed 1.svg";
  bd = "../../../../../../assets/imagens/banco-de-dados.svg";
  program = "../../../../../../assets/imagens/laptop-coding.svg";
  web = "../../../../../../assets/imagens/web 1.svg";
  arquitetura = "../../../../../../assets/imagens/pc 1.svg";

  contents = [
    { nome: "Redes", icon: this.redes },
    { nome: "Banco de Dados", icon: this.bd },
    { nome: "Programação", icon: this.program },
    { nome: "Web", icon: this.web },
    { nome: "Estrutura de Dados", icon: this.ed },
    { nome: "Arquitetura de Computadores", icon: this.arquitetura }
  ]

}
