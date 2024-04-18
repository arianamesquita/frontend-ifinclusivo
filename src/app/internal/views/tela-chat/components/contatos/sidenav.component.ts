import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  contatos = [
    {nome: "Professor1", icon: "person"},
    {nome: "Professor2", icon: "person"},
    {nome: "Professor3", icon: "person"},
    {nome: "Professor4", icon: "person"},
    {nome: "Professor5", icon: "person"},
    {nome: "Professor6", icon: "person"},
    {nome: "Nanpe1", icon: "person"},
    {nome: "Napne2", icon: "person"},
    {nome: "AlunoNapne", icon: "person"},
    {nome: "Libras1", icon: "person"},
    {nome: "Libras2", icon: "person"},
    {nome: "Libras3", icon: "person"},
    {nome: "Napne4", icon: "person"},
  ]

}
