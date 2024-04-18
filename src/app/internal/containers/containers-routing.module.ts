import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainscreenComponent } from './mainscreen/mainscreen.component';

const routes: Routes = [
  { path: '',
    component: MainscreenComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('../views/tela-principal/tela-principal.module').then(m => m.TelaPrincipalModule )},
      { path: 'forum', loadChildren: () => import('../views/tela-forum/tela-forum.module').then(m => m.TelaForumModule )},
      { path: 'chat', loadChildren: () => import('../views/tela-chat/tela-chat.module').then(m => m.TelaChatModule )},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainersRoutingModule { }
