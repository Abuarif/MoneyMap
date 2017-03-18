import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Wallet} from '../../database';

@Component({
  selector: 'page-new-wallet',
  templateUrl: 'new-wallet.html'
})
export class NewWalletPage {

  model : Wallet = new Wallet(null,"");

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewWalletPage');
  }

  save(){
    this.model.save().then(()=>{
      this.navCtrl.pop();
    });
  }

}
