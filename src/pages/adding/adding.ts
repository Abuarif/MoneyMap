import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Transaction } from '../../database';
import {GeolocationService} from '../../services/geolocation.service';


/*
  Generated class for the Adding page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-adding',
  templateUrl: 'adding.html'
})
export class AddingPage {

  model : Transaction = new Transaction(null,"");
  shouldGeolocate : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocator : GeolocationService) {}

  ionViewDidLoad() {
    this.geolocator.get().then((resultado)=>{
      console.log(resultado);
    }).catch((err)=> console.log(err));
  }

  save()
  {
    this.model.save().then(result => {
      this.model = new Transaction(null,"");
      this.navCtrl.pop();
    });
  }

  getLocation()
  {
    if(this.shouldGeolocate){
      this.geolocator.get().then((resultado)=>{
        this.model.setCords(resultado.coords);
        console.log(this.model);
      }).catch((err)=> console.log(err));
    }else{
      this.model.cleanCoords();
      console.log(this.model);
    }
  }

}
