import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {AboutPageModule} from "../pages/about/about.module";
import {HomePageModule} from "../pages/home/home.module";
import {ListadoPageModule} from "../pages/listado/listado.module";
import {ItemDetailPageModule} from "../pages/item-detail/item-detail.module";
import {ModalPageModule} from "../pages/modal/modal.module";

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
    ModalPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
