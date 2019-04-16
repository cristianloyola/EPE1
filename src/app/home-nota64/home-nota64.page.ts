import { Component, OnInit } from '@angular/core';
import { NavController, SelectValueAccessor} from '@ionic/angular';
import { AlertController} from '@ionic/angular';
import { ToastController} from '@ionic/angular';
import { StorageService, Item } from '../services/storage.service';






@Component({
  selector: 'app-home-nota64',
  templateUrl: './home-nota64.page.html',
  styleUrls: ['./home-nota64.page.scss'],
})

export class HomeNota64Page implements OnInit {
  
    
  constructor(public navcontroller: NavController,public ToastCtrl:ToastController, public alertCtrl: AlertController,public storageService: StorageService) { }
  varEntrada64epe1: any = '1' 
  varEntrada64epe2:any='1'
  varEntrada64epe3:any='1'
  varEntrada64eva1:any='1'
  varEntrada64eva2:any='1'
  varEntrada64eva3:any='1'
  var64NotaPresent:any='1'
  var64NotaExam:any='1'
  var64notaMinimaExam:any='1'
  var64NotaFinal:any='1'
  var64NotaPresentTemp:any
  notaMinima64Examtemp:any
  varEntrada64epe1num:number 
  varEntrada64epe2num:number
  varEntrada64epe3num:number
  varEntrada64eva1num:number
  varEntrada64eva2num:number
  varEntrada64eva3num:number
  res:number
  
  
  async asig64epe1(){
   const alerta = await this.alertCtrl.create({
      header:'Ingreso Nota',
      message:'Ingresa Nota',
      inputs:[{
        name:'varEntrada64epe1',
        type:'number'
      }],
      buttons:[
        {
        text:'ok',
        handler:(data)=>{this.varEntrada64epe1 = /* JSON.stringify */(data.varEntrada64epe1);this.verToast()
        }
        }
    ]
    });
   alerta.present();
console.log(this.varEntrada64epe1); 
  };

  async asig64epe2(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada64epe2',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada64epe2 = /* JSON.stringify */(data.varEntrada64epe2);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada64epe2); 
   };

   async asig64epe3(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada64epe3',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada64epe3 = /* JSON.stringify */(data.varEntrada64epe3);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada64epe3); 
   };

   async asig64eva1(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada64eva1',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada64eva1 = /* JSON.stringify */(data.varEntrada64eva1);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada64eva1); 
   };

   async asig64eva2(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada64eva2',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada64eva2 = /* JSON.stringify */(data.varEntrada64eva2);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada64eva2); 
   };
   async asig64eva3(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'varEntrada64eva3',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.varEntrada64eva3 = /* JSON.stringify */(data.varEntrada64eva3);this.verToast();this.verToastPromedio();
         }
         }
     ]
     });
    alerta.present();
 console.log(this.varEntrada64eva3); 
   };
   async asig64exam(){
    const alerta = await this.alertCtrl.create({
       header:'Ingreso Nota',
       message:'Ingresa Nota',
       inputs:[{
         name:'var64NotaExam',
         type:'number'
       }],
       buttons:[
         {
         text:'ok',
         handler:(data)=>{this.var64NotaExam = /* JSON.stringify */(data.var64NotaExam);this.verToast()
         }
         }
     ]
     });
    alerta.present();
 console.log(this.var64NotaExam); 
   };

   notaPrensentExam64()
   {
    this.var64NotaPresentTemp=(((parseInt(this.varEntrada64epe1)*7)/100)+((parseInt(this.varEntrada64epe2)*14)/100)+((parseInt(this.varEntrada64epe3)*21)/100)+((parseInt(this.varEntrada64eva1)*7)/100)+((parseInt(this.varEntrada64eva2)*7)/100)+((parseInt(this.varEntrada64eva3)*14)/100))
   console.log(this.var64NotaPresentTemp)
   };
   
   notaMinima64Exam(){

    if(this.var64NotaPresentTemp <4) {
    this.notaMinima64Examtemp=(((4-(parseInt(this.var64NotaPresentTemp)))*100)/30);
    if(this.notaMinima64Examtemp<4){this.notaMinima64Examtemp=4}
    }else{
    this.notaMinima64Examtemp=4;
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
  calcula64()
  {
    this.navcontroller.navigateForward('nota64-resultado');
  }
  traspasarDato(){
    this.navcontroller.navigateForward(`/nota64-resultado/${this.varEntrada64epe1}/${this.varEntrada64epe2}/${this.varEntrada64epe3}/${this.varEntrada64eva1}/${this.varEntrada64eva2}/${this.varEntrada64eva3}/${this.var64NotaPresentTemp}/${this.var64NotaExam}`);
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
    let varEntrada64epe1num=parseInt(this.varEntrada64epe1);
    let varEntrada64epe2num=parseInt(this.varEntrada64epe2);
    let varEntrada64epe3num=parseInt(this.varEntrada64epe3);
    let varEntrada64eva1num=parseInt(this.varEntrada64eva1);
    let varEntrada64eva2num=parseInt(this.varEntrada64eva2);
	let varEntrada64eva3num=parseInt(this.varEntrada64eva3);
    
    let res=(((varEntrada64epe1num*10)/100)+((varEntrada64epe2num*20)/100)+((varEntrada64epe3num*30)/100)+((varEntrada64eva1num*10)/100)+((varEntrada64eva2num*10)/100)+((varEntrada64eva3num*20)/100));
    
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