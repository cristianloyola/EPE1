import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Nota32ResultadoPage } from './nota32-resultado.page';

const routes: Routes = [
  {
    path: '',
    component: Nota32ResultadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Nota32ResultadoPage]
})
export class Nota32ResultadoPageModule {}
