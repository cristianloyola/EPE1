import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Nota64ResultadoPage } from './nota64-resultado.page';

const routes: Routes = [
  {
    path: '',
    component: Nota64ResultadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Nota64ResultadoPage]
})
export class Nota64ResultadoPageModule {}
