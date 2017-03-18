import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Wallet,IWallet} from '../../database';
import {NewWalletPage} from '../new-wallet/new-wallet';
import {WalletService} from '../../services/wallets.service';
import {Toast} from 'ionic-native';

/*
  Generated class for the Wallets page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wallets',
  templateUrl: 'wallets.html'
})
export class WalletsPage {

  wallets : IWallet[];
  //Se ingresa automaticamente a la pagina cuando pones la propiedad con navPush
  addingPage = NewWalletPage;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private walletService : WalletService) {}

  ionViewWillEnter() {
    Wallet.all().then(results => this.wallets = results);
  }

  set(wallet : Wallet){
    this.walletService.setID(wallet.id);
  }

  delete(wallet : Wallet){
    //validar que queda alguna cartera
    if(this.wallets.length == 1)
      return this.showToast("Tienes que conservar al menos una cartera","bottom");
    //validar que no es cartera principal
    if(this.walletService.getID() == wallet.id)
      return this.showToast("No puedes eliminar cartera seleccionada","bottom");
    //eliminar de interfaz
    this.wallets = this.wallets.filter(w=>{
      //cualquier elemento que sea falso se guardará
      return w.id != wallet.id;
    });
    //eliminar de la base de datos
    wallet.destroy();
    return this.showToast("Cartera eliminada","bottom");
  }

  showToast(message, position : string ){
    Toast.show(message,"short",position).subscribe(console.log);
  }

}
