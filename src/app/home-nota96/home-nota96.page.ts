import { Component, OnInit } from '@angular/core';
import { NavController, SelectValueAccessor} from '@ionic/angular';
import { AlertController} from '@ionic/angular';
import { ToastController} from '@ionic/angular';
import { StorageService, Item } from '../services/storage.service';






@Component({
  selector: 'app-home-nota96',
  templateUrl: './home-nota96.page.html',
  styleUrls: ['./home-nota96.page.scss'],
})

export class HomeNota96Page implements OnInit {
  
    
  constructor(public navcontroller: NavController,public ToastCtrl:ToastController, public alertCtrl: AlertController,public storageService: StorageService) { }
  varEntrada96epe1: any = '1' 
  varEntrada96epe2:any='1'
  varEntrada96epe3:any='1'
  varEntrada96eva1:any='1'
  varEntrada96eva2:any='1'
  varEntrada96eva3:any='1'
  var96NotaPresent:any='1'
  var96NotaExam:any='1'
  var96notaMinimaExam:any='1'
  var96NotaFinal:any='1'
  var96NotaPresentTemp:any
  notaMinima96Examtemp:any
  varEntrada96epe1num:number 
  varEntrada96epe2num:number
  varEntrada96epe3num:number
  varEntrada96eva1num:number
  varEntrada96eva2num:number
  varEntrada96eva3num:number
  res:number
  
  
  async asig96epe1(){
   const alerta = await this.alertCtrl.create({
      header:'Ingreso Nota',
      message:'Ingresa Nota',
      inputs:[{
        name:'varEntrada96epe1',
        type:'number'
      }],
      buttons:[
        {
        text:'ok',
        handler:(data)=>{this.varEntrada96epe1 = /* JSON.stringify */(data.varEntrada96epe1);this.verToast()
        }
        }
    ]
    });
   alerta.present();
console.log(this.varEntrada96epe1); 
  };

  async asig96epe2(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada96epe2',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada96epe2 = /* JSON.stringify */(data.varEntrada96epe2);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada96epe2); 
   };

   async asig96epe3(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada96epe3',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada96epe3 = /* JSON.stringify */(data.varEntrada96epe3);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada96epe3); 
   };

   async asig96eva1(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada96eva1',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada96eva1 = /* JSON.stringify */(data.varEntrada96eva1);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada96eva1); 
   };

   async asig96eva2(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada96eva2',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada96eva2 = /* JSON.stringify */(data.varEntrada96eva2);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada96eva2); 
   };
   async asig96eva3(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada96eva3',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada96eva3 = /* JSON.stringify */(data.varEntrada96eva3);this.verToast();this.verToastPromedio();
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada96eva2); 
   };
   async asig96exam(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'var96NotaExam',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.var96NotaExam = /* JSON.stringify */(data.var96NotaExam);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.var96NotaExam); 
   };

   notaPrensentExam96()
   {
    this.var96NotaPresentTemp=(((parseInt(this.varEntrada96epe1)*7)/100)+((parseInt(this.varEntrada96epe2)*14)/100)+((parseInt(this.varEntrada96epe3)*21)/100)+((parseInt(this.varEntrada96eva1)*14)/100)+((parseInt(this.varEntrada96eva2)*14)/100))
   console.log(this.var96NotaPresentTemp)
   };
   
   notaMinima96Exam(){

    if(this.var96NotaPresentTemp <4) {
    this.notaMinima96Examtemp=(((4-(parseInt(this.var96NotaPresentTemp)))*100)/30);
    if(this.notaMinima96Examtemp<4){this.notaMinima96Examtemp=4}
    }else{
    this.notaMinima96Examtemp=4;
    }
    }


  home()
  {
    this.navcontroller.navigateForward('home');
  }
  selector()
  {
    this.navcontroller.navigateForward('selector');
  }
  calcula96()
  {
    this.navcontroller.navigateForward('nota96-resultado');
  }
  traspasarDato(){
    this.navcontroller.navigateForward(`/nota96-resultado/${this.varEntrada96epe1}/${this.varEntrada96epe2}/${this.varEntrada96epe3}/${this.varEntrada96eva1}/${this.varEntrada96eva2}/${this.var96NotaPresentTemp}/${this.var96NotaExam}`);
  }
  async verToast(){
    const toast= await this.ToastCtrl.create({
  message:'Nota Ingresada',
  duration:1000,
  position:'bottom'
    });
    toast.present();
  
  
  }
  async verToastPromedio(){
    let varEntrada96epe1num=parseInt(this.varEntrada96epe1);
    let varEntrada96epe2num=parseInt(this.varEntrada96epe2);
    let varEntrada96epe3num=parseInt(this.varEntrada96epe3);
    let varEntrada96eva1num=parseInt(this.varEntrada96eva1);
    let varEntrada96eva2num=parseInt(this.varEntrada96eva2);
	let varEntrada96eva3num=parseInt(this.varEntrada96eva3);
    
    let res=(((varEntrada96epe1num*10)/100)+((varEntrada96epe2num*20)/100)+((varEntrada96epe3num*30)/100)+((varEntrada96eva1num*10)/100)+((varEntrada96eva2num*10)/100)+((varEntrada96eva3num*20)/100));
    
    const toast=await this.ToastCtrl.create({
      message:'La Nota Final Sin Examen es: '+ res,
      showCloseButton: true,
      position: 'middle',
      closeButtonText: 'Aceptar',
       
    })
    toast.present();
      }

  ngOnInit() {
  }

}