import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Nota96ResultadoPage } from './nota96-resultado.page';

const routes: Routes = [
  {
    path: '',
    component: Nota96ResultadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Nota96ResultadoPage]
})
export class Nota96ResultadoPageModule {}
