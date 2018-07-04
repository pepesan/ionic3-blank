import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {AboutPage} from "../about/about";
import { ModalController, ActionSheetController } from 'ionic-angular';

@IonicPage({
  name: 'home',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public modalCtrl : ModalController,
              public actionSheetCtrl: ActionSheetController) {

  }
  goAbout(){
    this.navCtrl.push(AboutPage)
  }
  navigateAbout() {
    this.navCtrl.push('about')
  }
  navigateListado() {
    this.navCtrl.push('listado')
  }
  presentModal() {
    var data = { message : 'hello world' };
    var modalPage = this.modalCtrl.create('ModalPage',data);
    modalPage.present();
  }

  navigateInfinite() {
    this.navCtrl.push('infinite')
  }
  navigateForm(){
    this.navCtrl.push('form')
  }
  navigateGeo(){
    this.navCtrl.push('geo')
  }
  navigateDevice(){
    this.navCtrl.push('device')
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Elige una acción',
      buttons: [
        {
          text: 'Destructuva',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archivo',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
