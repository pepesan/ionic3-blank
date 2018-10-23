import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {AboutPageModule} from "../pages/about/about.module";
import {HomePageModule} from "../pages/home/home.module";
import {ListadoPageModule} from "../pages/listado/listado.module";
import {ItemDetailPageModule} from "../pages/item-detail/item-detail.module";
import {ModalPageModule} from "../pages/modal/modal.module";
import {InfinitePageModule} from "../pages/infinite/infinite.module";
import { HttpClientModule } from '@angular/common/http';
import {FormularioPageModule} from "../pages/formulario/formulario.module";
import {GridPageModule} from "../pages/grid/grid.module";
import {GeolocationPageModule} from "../pages/geolocation/geolocation.module";
import { Geolocation } from '@ionic-native/geolocation';
import {DevicePageModule} from "../pages/device/device.module";
import { Device } from '@ionic-native/device';
//import {CameraPageModule} from "../pages/camera/camera.module";
import { Camera } from '@ionic-native/camera';
import { AndroidPermissions } from '@ionic-native/android-permissions';
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AboutPageModule,
    HomePageModule,
    ListadoPageModule,
    ItemDetailPageModule,
    ModalPageModule,
    InfinitePageModule,
    HttpClientModule,
    FormsModule,
    FormularioPageModule,
    GeolocationPageModule,
    DevicePageModule,
    //CameraPageModule,
    GridPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    Device,
    Camera,
    AndroidPermissions
  ]
})
export class AppModule {}
