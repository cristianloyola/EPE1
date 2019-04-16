import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule } from '@ionic/angular';

import { HomeNota32Page } from './home-nota32.page';

const routes: Routes = [
  {
    path: '',
    component: HomeNota32Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    IonicModule.forRoot() ,
    RouterModule.forChild(routes),
    IonicStorageModule.forRoot()
  ],
  declarations: [HomeNota32Page]
})
export class HomeNota32PageModule {}
