import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Transaction } from '../../database';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
  }

  save()
  {
    this.model.save().then(result => {
      this.model = new Transaction(null,"");

      this.navCtrl.pop();
    });
  }

}
