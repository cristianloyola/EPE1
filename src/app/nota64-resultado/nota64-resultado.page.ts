import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-nota64-resultado',
  templateUrl: './nota64-resultado.page.html',
  styleUrls: ['./nota64-resultado.page.scss'],
})
export class Nota64ResultadoPage implements OnInit {

  constructor( public navcontroller: NavController,public activatedRoute:ActivatedRoute,public ToastCtrl:ToastController) {}
  varEntrada64epe1: any
  varEntrada64epe2:any
  varEntrada64epe3:any
  varEntrada64eva1:any
  varEntrada64eva2:any
  varEntrada64eva3:any
  var64NotaPresent:any
  var64NotaExam:any
  
  var64NotaFinal:any
  var64NotaPresentTemp:any
  var64Estado:any
  
  Volver()
  {
    this.navcontroller.navigateBack('home-nota64');
  }
  estado()
  {
    if(this.var64NotaFinal<'4'){
      this.var64Estado='REPROBADO'
    }else{
      this.var64Estado='APROBADO'
    }
  }
  notaFinal(){
    this.var64NotaFinal=(((30*(parseInt(this.var64NotaExam)))/100)+(parseInt(this.var64NotaPresentTemp)));
    console.log(this.var64NotaFinal)
  }
  async snapshot(){
    const toast= await this.ToastCtrl.create({
  message:'Captura Creada',
  duration:1000,
  position:'top'
    });
    toast.present();
  
  
  }

  ngOnInit() {
    this.varEntrada64epe1=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada64epe1');
this.varEntrada64epe2=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada64epe2');
this.varEntrada64epe3=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada64epe3');
this.varEntrada64eva1=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada64eva1');
this.varEntrada64eva2=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada64eva2');
  this.varEntrada64eva3=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada64eva3');
this.var64NotaPresentTemp=
  this.activatedRoute.snapshot.paramMap.get('this.var64NotaPresentTemp');
this.var64NotaExam=
  this.activatedRoute.snapshot.paramMap.get('this.var64NotaExam');
this.notaFinal();
this.estado();
{

}
  }

}