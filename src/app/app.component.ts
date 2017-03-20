import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

//import db from '../database';

import { TabsPage } from '../pages/tabs/tabs';
//esto es para que no mande errores typescript, pero javascript no tiene problemas
declare var FCMPlugin;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      //device token ->coneccion entre dispotivos
      FCMPlugin.getToken(function(token){
        alert(token);
      },function(err){
        console.log("No se pudo obtener token"+err);
      });

      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
