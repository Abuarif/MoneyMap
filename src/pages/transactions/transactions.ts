import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Transaction, IWallet} from '../../database';

import {AddingPage} from '../adding/adding';
import {WalletService} from '../../services/wallets.service';
import {TransactionService} from '../../services/transactions.service';

/*
  Generated class for the Transactions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html'
})
export class TransactionsPage {

  title : String = "Movimientos";
  transactions : any;
  addingPage = AddingPage;
  wallet : IWallet = {amount:0, name:""};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private walletService : WalletService,
              private transactionService : TransactionService) {}

  ionViewWillEnter() {
    //let transaction = new Transaction(20,"Primera Transaccion");
    //transaction.save();
    if(this.walletService.empty()){
      this.walletService.validateFirstWallet();
    }

    //cargar transacciones
    this.loadTransactions();
    //cargar monto de cartera
    this.loadWallet();
  }

  loadWallet(){
    this.walletService.getMainWallet().then(wallet=>{
      this.wallet = wallet;
    });
  }

  loadTransactions(){
    this.transactionService.all()
               .then((resultados) => {
                 this.transactions = resultados;
                 //console.log(this.transactions);
               });
  }

}
