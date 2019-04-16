import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-nota128-resultado',
  templateUrl: './nota128-resultado.page.html',
  styleUrls: ['./nota128-resultado.page.scss'],
})
export class Nota128ResultadoPage implements OnInit {

  constructor( public navcontroller: NavController,public activatedRoute:ActivatedRoute,public ToastCtrl:ToastController) {}
  varEntrada128epe1: any
  varEntrada128epe2:any
  varEntrada128epe3:any
  varEntrada128epe4:any
  varEntrada128eva1:any
  varEntrada128eva2:any
  varEntrada128eva3:any
  varEntrada128eva4:any
  var128NotaPresent:any
  var128NotaExam:any
  
  var128NotaFinal:any
  var128NotaPresentTemp:any
  var128Estado:any
  
  Volver()
  {
    this.navcontroller.navigateBack('home-nota128');
  }
  estado()
  {
    if(this.var128NotaFinal<'4'){
      this.var128Estado='REPROBADO'
    }else{
      this.var128Estado='APROBADO'
    }
  }
  notaFinal(){
    this.var128NotaFinal=(((30*(parseInt(this.var128NotaExam)))/100)+(parseInt(this.var128NotaPresentTemp)));
    console.log(this.var128NotaFinal)
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
    this.varEntrada128epe1=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada128epe1');
this.varEntrada128epe2=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada128epe2');
this.varEntrada128epe3=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada128epe3');
  this.varEntrada128epe4=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada128epe4');
this.varEntrada128eva1=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada128eva1');
this.varEntrada128eva2=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada128eva2');
  this.varEntrada128eva3=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada128eva3');
  this.varEntrada128eva4=
  this.activatedRoute.snapshot.paramMap.get('this.varEntrada128eva4');
this.var128NotaPresentTemp=
  this.activatedRoute.snapshot.paramMap.get('this.var128NotaPresentTemp');
this.var128NotaExam=
  this.activatedRoute.snapshot.paramMap.get('this.var128NotaExam');
this.notaFinal();
this.estado();
{

}
  }

}