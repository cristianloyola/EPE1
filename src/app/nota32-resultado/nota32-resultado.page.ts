import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-nota32-resultado',
  templateUrl: './nota32-resultado.page.html',
  styleUrls: ['./nota32-resultado.page.scss'],
})
export class Nota32ResultadoPage implements OnInit {

  constructor( public navcontroller: NavController,public activatedRoute:ActivatedRoute,public ToastCtrl:ToastController) {}
  varEntrada32epe1: any
  varEntrada32epe2:any
  varEntrada32epe3:any
  varEntrada32eva1:any
  varEntrada32eva2:any
  var32NotaPresent:any
  var32NotaExam:any
  
  var32NotaFinal:any
  var32NotaPresentTemp:any
  var32Estado:any
  
  Volver()
  {
    this.navcontroller.navigateBack('home-nota32');
  }
  estado()
  {
    if(this.var32NotaFinal<'4'){
      this.var32Estado='REPROBADO'
    }else{
      this.var32Estado='APROBADO'
    }
  }
  notaFinal(){
    this.var32NotaFinal=(((30*(parseInt(this.var32NotaExam)))/100)+(parseInt(this.var32NotaPresentTemp)));
    console.log(this.var32NotaFinal)
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
    this.varEntrada32epe1=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada32epe1');
this.varEntrada32epe2=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada32epe2');
this.varEntrada32epe3=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada32epe3');
this.varEntrada32eva1=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada32eva1');
this.varEntrada32eva2=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada32eva2');
this.var32NotaPresentTemp=
  this.activatedRoute.snapshot.paramMap.get('this.var32NotaPresentTemp');
this.var32NotaExam=
  this.activatedRoute.snapshot.paramMap.get('this.var32NotaExam');
this.notaFinal();
this.estado();
{

}
  }

}
