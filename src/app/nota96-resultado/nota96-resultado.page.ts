import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-nota96-resultado',
  templateUrl: './nota96-resultado.page.html',
  styleUrls: ['./nota96-resultado.page.scss'],
})
export class Nota96ResultadoPage implements OnInit {

  constructor( public navcontroller: NavController,public activatedRoute:ActivatedRoute,public ToastCtrl:ToastController) {}
  varEntrada96epe1: any
  varEntrada96epe2:any
  varEntrada96epe3:any
  varEntrada96eva1:any
  varEntrada96eva2:any
  varEntrada96eva3:any
  var96NotaPresent:any
  var96NotaExam:any
  
  var96NotaFinal:any
  var96NotaPresentTemp:any
  var96Estado:any
  
  Volver()
  {
    this.navcontroller.navigateBack('home-nota96');
  }
  estado()
  {
    if(this.var96NotaFinal<'4'){
      this.var96Estado='REPROBADO'
    }else{
      this.var96Estado='APROBADO'
    }
  }
  notaFinal(){
    this.var96NotaFinal=(((30*(parseInt(this.var96NotaExam)))/100)+(parseInt(this.var96NotaPresentTemp)));
    console.log(this.var96NotaFinal)
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
    this.varEntrada96epe1=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada96epe1');
this.varEntrada96epe2=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada96epe2');
this.varEntrada96epe3=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada96epe3');
this.varEntrada96eva1=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada96eva1');
this.varEntrada96eva2=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada96eva2');
  this.varEntrada96eva3=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada96eva3');
this.var96NotaPresentTemp=
  this.activatedRoute.snapshot.paramMap.get('this.var96NotaPresentTemp');
this.var96NotaExam=
  this.activatedRoute.snapshot.paramMap.get('this.var96NotaExam');
this.notaFinal();
this.estado();
{

}
  }

}