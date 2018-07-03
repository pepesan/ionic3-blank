import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {AboutPage} from "../about/about";

@IonicPage({
  name: 'home',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goAbout(){
    this.navCtrl.push(AboutPage)
  }
  navigateAbout() {
    this.navCtrl.push('about')
  }

}
