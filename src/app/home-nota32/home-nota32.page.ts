import { Component, OnInit } from '@angular/core';
import { NavController, SelectValueAccessor} from '@ionic/angular';
import { AlertController} from '@ionic/angular';
import { ToastController} from '@ionic/angular';
import { StorageService, Item } from '../services/storage.service';



@Component({
  selector: 'app-home-nota32',
  templateUrl: './home-nota32.page.html',
  styleUrls: ['./home-nota32.page.scss'],
})

export class HomeNota32Page implements OnInit {
  
    
  constructor(public navcontroller: NavController,public ToastCtrl:ToastController, public alertCtrl: AlertController,public storageService: StorageService) { }
  varEntrada32epe1: any = '1' 
  varEntrada32epe2:any='1'
  varEntrada32epe3:any='1'
  varEntrada32eva1:any='1'
  varEntrada32eva2:any='1'
  var32NotaPresent:any='1'
  var32NotaExam:any='1'
  var32notaMinimaExam:any='1'
  var32NotaFinal:any='1'
  var32NotaPresentTemp:any
  notaMinima32Examtemp:any
  varEntrada32epe1num:number 
  varEntrada32epe2num:number
  varEntrada32epe3num:number
  varEntrada32eva1num:number
  varEntrada32eva2num:number
  res:number
  
  
  async asig32epe1(){
   const alerta = await this.alertCtrl.create({
      header:'Ingreso Nota',
      message:'Ingresa Nota',
      inputs:[{
        name:'varEntrada32epe1',
        type:'number'
      }],
      buttons:[
        {
        text:'ok',
        handler:(data)=>{this.varEntrada32epe1 = /* JSON.stringify */(data.varEntrada32epe1);this.verToast()
        }
        }
    ]
    });
   alerta.present();
console.log(this.varEntrada32epe1); 
  };

  async asig32epe2(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada32epe2',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada32epe2 = /* JSON.stringify */(data.varEntrada32epe2);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada32epe2); 
   };

   async asig32epe3(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada32epe3',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada32epe3 = /* JSON.stringify */(data.varEntrada32epe3);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada32epe3); 
   };

   async asig32eva1(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada32eva1',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada32eva1 = /* JSON.stringify */(data.varEntrada32eva1);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada32eva1); 
   };

   async asig32eva2(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada32eva2',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada32eva2 = /* JSON.stringify */(data.varEntrada32eva2);this.verToast();this.verToastPromedio()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada32eva2); 
   };

   async asig32exam(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'var32NotaExam',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.var32NotaExam = /* JSON.stringify */(data.var32NotaExam);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.var32NotaExam); 
   };

   notaPrensentExam32()
   {
    this.var32NotaPresentTemp=(((parseInt(this.varEntrada32epe1)*7)/100)+((parseInt(this.varEntrada32epe2)*14)/100)+((parseInt(this.varEntrada32epe3)*21)/100)+((parseInt(this.varEntrada32eva1)*14)/100)+((parseInt(this.varEntrada32eva2)*14)/100))
   console.log(this.var32NotaPresentTemp)
   };
   
   notaMinima32Exam(){

    if(this.var32NotaPresentTemp <4) {
    this.notaMinima32Examtemp=(((4-(parseInt(this.var32NotaPresentTemp)))*100)/30);
    if(this.notaMinima32Examtemp<4){this.notaMinima32Examtemp=4}
    }else{
    this.notaMinima32Examtemp=4;
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
  calcula32()
  {
    this.navcontroller.navigateForward('nota32-resultado');
  }
  traspasarDato(){
    this.navcontroller.navigateForward(`/nota32-resultado/${this.varEntrada32epe1}/${this.varEntrada32epe2}/${this.varEntrada32epe3}/${this.varEntrada32eva1}/${this.varEntrada32eva2}/${this.var32NotaPresentTemp}/${this.var32NotaExam}`);
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
    let varEntrada32epe1num=parseInt(this.varEntrada32epe1);
    let varEntrada32epe2num=parseInt(this.varEntrada32epe2);
    let varEntrada32epe3num=parseInt(this.varEntrada32epe3);
    let varEntrada32eva1num=parseInt(this.varEntrada32eva1);
    let varEntrada32eva2num=parseInt(this.varEntrada32eva2);
    
    let res=(((varEntrada32epe1num*10)/100)+((varEntrada32epe2num*20)/100)+((varEntrada32epe3num*30)/100)+((varEntrada32eva1num*20)/100)+((varEntrada32eva2num*20)/100));
    
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
