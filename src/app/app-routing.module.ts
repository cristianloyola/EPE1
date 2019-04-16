import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'selector', loadChildren: './selector/selector.module#SelectorPageModule' },
  { path: 'acerca-de', loadChildren: './acerca-de/acerca-de.module#AcercaDePageModule' },
  { path: 'inicio-calculo', loadChildren: './inicio-calculo/inicio-calculo.module#InicioCalculoPageModule' },
  { path: 'home-nota32', loadChildren: './home-nota32/home-nota32.module#HomeNota32PageModule' },
  { path: 'nota32-resultado/:this.varEntrada32epe1/:this.varEntrada32epe2/:this.varEntrada32epe3/:this.varEntrada32eva1/:this.varEntrada32eva2/:this.var32NotaPresentTemp/:this.var32NotaExam', loadChildren: './nota32-resultado/nota32-resultado.module#Nota32ResultadoPageModule' },
  { path: 'home-nota64', loadChildren: './home-nota64/home-nota64.module#HomeNota64PageModule' },
  { path: 'nota64-resultado/:this.varEntrada64epe1/:this.varEntrada64epe2/:this.varEntrada64epe3/:this.varEntrada64eva1/:this.varEntrada64eva2/:this.varEntrada64eva3/:this.var64NotaPresentTemp/:this.var64NotaExam', loadChildren: './nota64-resultado/nota64-resultado.module#Nota64ResultadoPageModule' },
  { path: 'home-nota96', loadChildren: './home-nota96/home-nota96.module#HomeNota96PageModule' },
  { path: 'nota96-resultado/:this.varEntrada96epe1/:this.varEntrada96epe2/:this.varEntrada96epe3/:this.varEntrada96eva1/:this.varEntrada96eva2/:this.varEntrada96eva3/:this.var96NotaPresentTemp/:this.var96NotaExam', loadChildren: './nota96-resultado/nota96-resultado.module#Nota96ResultadoPageModule' },
  { path: 'home-nota128', loadChildren: './home-nota128/home-nota128.module#HomeNota128PageModule' },
  { path: 'nota128-resultado/:this.varEntrada128epe1/:this.varEntrada128epe2/:this.varEntrada128epe3/:this.varEntrada128epe4/:this.varEntrada128eva1/:this.varEntrada128eva2/:this.varEntrada128eva3/:this.varEntrada128eva4/:this.var128NotaPresentTemp/:this.var128NotaExam', loadChildren: './nota128-resultado/nota128-resultado.module#Nota128ResultadoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
