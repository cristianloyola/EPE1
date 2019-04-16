import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Nota128ResultadoPage } from './nota128-resultado.page';

const routes: Routes = [
  {
    path: '',
    component: Nota128ResultadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Nota128ResultadoPage]
})
export class Nota128ResultadoPageModule {}
