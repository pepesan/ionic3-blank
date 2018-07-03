import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {AboutPage} from "../about/about";
import { ModalController } from 'ionic-angular';

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
              public modalCtrl : ModalController) {

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

}
