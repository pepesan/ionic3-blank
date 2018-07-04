import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { Platform } from 'ionic-angular';
/**
 * Generated class for the DevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'device',
  segment: 'device'
})
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private device: Device,
    private platform: Platform) {
    platform.ready().then(() => {
      console.log('Device UUID is: ' + this.device.uuid);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
  }

}
