import { Component, OnInit } from '@angular/core';
import { NavController, SelectValueAccessor} from '@ionic/angular';
import { AlertController} from '@ionic/angular';
import { ToastController} from '@ionic/angular';
import { StorageService, Item } from '../services/storage.service';






@Component({
  selector: 'app-home-nota128',
  templateUrl: './home-nota128.page.html',
  styleUrls: ['./home-nota128.page.scss'],
})

export class HomeNota128Page implements OnInit {
  
    
  constructor(public navcontroller: NavController,public ToastCtrl:ToastController, public alertCtrl: AlertController,public storageService: StorageService) { }
  varEntrada128epe1: any = '1' 
  varEntrada128epe2:any='1'
  varEntrada128epe3:any='1'
  varEntrada128epe4:any='1'
  varEntrada128eva1:any='1'
  varEntrada128eva2:any='1'
  varEntrada128eva3:any='1'
  varEntrada128eva4:any='1'
  var128NotaPresent:any='1'
  var128NotaExam:any='1'
  var128notaMinimaExam:any='1'
  var128NotaFinal:any='1'
  var128NotaPresentTemp:any
  notaMinima128Examtemp:any
  varEntrada128epe1num:number 
  varEntrada128epe2num:number
  varEntrada128epe3num:number
  varEntrada128epe4num:number
  varEntrada128eva1num:number
  varEntrada128eva2num:number
  varEntrada128eva3num:number
  varEntrada128eva4num:number
  res:number
  
  async asig128epe1(){
   const alerta = await this.alertCtrl.create({
      header:'Ingreso Nota',
      message:'Ingresa Nota',
      inputs:[{
        name:'varEntrada128epe1',
        type:'number'
      }],
      buttons:[
        {
        text:'ok',
        handler:(data)=>{this.varEntrada128epe1 = /* JSON.stringify */(data.varEntrada128epe1);this.verToast()
        }
        }
    ]
    });
   alerta.present();
console.log(this.varEntrada128epe1); 
  };

  async asig128epe2(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada128epe2',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada128epe2 = /* JSON.stringify */(data.varEntrada128epe2);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada128epe2); 
   };

   async asig128epe3(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada128epe3',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada128epe3 = /* JSON.stringify */(data.varEntrada128epe3);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada128epe3); 
   };
   async asig128epe4(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada128epe4',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada128epe4 = /* JSON.stringify */(data.varEntrada128epe4);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada128epe3); 
   };
   async asig128eva1(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada128eva1',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada128eva1 = /* JSON.stringify */(data.varEntrada128eva1);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada128eva1); 
   };

   async asig128eva2(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada128eva2',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada128eva2 = /* JSON.stringify */(data.varEntrada128eva2);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada128eva2); 
   };
   async asig128eva3(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada128eva3',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada128eva3 = /* JSON.stringify */(data.varEntrada128eva3);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada128eva3); 
   };
   async asig128eva4(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada128eva4',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada128eva4 = /* JSON.stringify */(data.varEntrada128eva4);this.verToast();this.verToastPromedio();
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada128eva4); 
   };
   async asig128exam(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'var128NotaExam',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.var128NotaExam = /* JSON.stringify */(data.var128NotaExam);this.verToast();
         }
         }
     ]
     });
    alerta.present();
 console.log(this.var128NotaExam); 
   };

   notaPrensentExam128()
   {
    this.var128NotaPresentTemp=(((parseInt(this.varEntrada128epe1)*7)/100)+((parseInt(this.varEntrada128epe2)*10.5)/100)+((parseInt(this.varEntrada128epe3)*17.5)/100)+((parseInt(this.varEntrada128epe4)*17.5)/100)+((parseInt(this.varEntrada128eva1)*3.5)/100)+((parseInt(this.varEntrada128eva2)*3.5)/100)+((parseInt(this.varEntrada128eva3)*3.5)/100)+((parseInt(this.varEntrada128eva4)*7)/100))
   console.log(this.var128NotaPresentTemp)
   };
   
   notaMinima128Exam(){

    if(this.var128NotaPresentTemp <4) {
    this.notaMinima128Examtemp=(((4-(parseInt(this.var128NotaPresentTemp)))*100)/30);
    if(this.notaMinima128Examtemp<4){this.notaMinima128Examtemp=4}
    }else{
    this.notaMinima128Examtemp=4;
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
  calcula128()
  {
    this.navcontroller.navigateForward('nota128-resultado');
  }
  traspasarDato(){
    this.navcontroller.navigateForward(`/nota128-resultado/${this.varEntrada128epe1}/${this.varEntrada128epe2}/${this.varEntrada128epe3}/${this.varEntrada128epe4}/${this.varEntrada128eva1}/${this.varEntrada128eva2}/${this.varEntrada128eva3}/${this.varEntrada128eva4}/${this.var128NotaPresentTemp}/${this.var128NotaExam}`);
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
    let varEntrada128epe1num=parseInt(this.varEntrada128epe1);
    let varEntrada128epe2num=parseInt(this.varEntrada128epe2);
    let varEntrada128epe3num=parseInt(this.varEntrada128epe3);
	let varEntrada128epe4num=parseInt(this.varEntrada128epe4);
    let varEntrada128eva1num=parseInt(this.varEntrada128eva1);
    let varEntrada128eva2num=parseInt(this.varEntrada128eva2);
	let varEntrada128eva3num=parseInt(this.varEntrada128eva3);
	let varEntrada128eva4num=parseInt(this.varEntrada128eva4);
    
    let res=(((varEntrada128epe1num*10)/100)+((varEntrada128epe2num*15)/100)+((varEntrada128epe3num*25)/100)+((varEntrada128epe4num*25)/100)+((varEntrada128eva1num*5)/100)+((varEntrada128eva2num*5)/100)+((varEntrada128eva3num*5)/100)+((varEntrada128eva4num*10)/100));
    
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