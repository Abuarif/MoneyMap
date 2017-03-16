import {Injectable} from '@angular/core';
import {Geolocation,Geoposition} from 'ionic-native';

@Injectable()
export class GeolocationService {
  get(){
    //return promise
    return Geolocation.getCurrentPosition();
  }
}
