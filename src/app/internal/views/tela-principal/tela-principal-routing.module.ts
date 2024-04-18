import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './containers/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaPrincipalRoutingModule { }
