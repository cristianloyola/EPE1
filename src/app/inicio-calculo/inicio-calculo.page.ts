import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { StorageService, Item } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-inicio-calculo',
  templateUrl: './inicio-calculo.page.html',
  styleUrls: ['./inicio-calculo.page.scss'],
})
export class InicioCalculoPage implements OnInit {
  items: Item[] = [];
 
  newItem: Item = <Item>{};
  
  @ViewChild('mylist')mylist: IonList;
  constructor(public storageService: StorageService, public plt: Platform, public toastController: ToastController) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }
  addItem() {
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();
 
    this.storageService.addItem(this.newItem).then(item => {
      this.newItem = <Item>{};
      this.showToast('Item added!')
      this.loadItems(); // Or add it to the array directly
    });
  }
 
  // READ
  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }
 
  // UPDATE
  updateItem(item: Item) {
    item.title = `UPDATED: ${item.title}`;
    item.modified = Date.now();
 
    this.storageService.updateItem(item).then(item => {
      this.showToast('Item updated!');
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.loadItems(); // Or update it inside the array directly
    });
  }
 
  // DELETE
  deleteItem(item: Item) {
    this.storageService.deleteItem(item.id).then(item => {
      this.showToast('Item removed!');
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.loadItems(); // Or splice it from the array directly
    });
  }
 
  // Helper
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {
  }

}
