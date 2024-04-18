import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    TopnavbarComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule
  ],
  exports: [
    TopnavbarComponent,
    MatInputModule,
    MatIconModule,
    MatFormField,
    MatLabel,
    MatCardModule,
    MatExpansionModule
   ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
