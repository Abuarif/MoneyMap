import {Injectable} from '@angular/core';
import {Wallet} from '../database';

//esta variable no puede cambiar su valor
export const StorageKey = "walletID";


@Injectable()
export class WalletService{

  setID(walletID){
    localStorage.setItem(StorageKey,walletID)
  }
  getID() : number{
    return parseInt(localStorage.getItem(StorageKey));
  }


  validateFirstWallet(){
    //promesa que nosotros retornamos
    return new Promise((resolve,reject)=>{
      //promesa que retorna clase wallet, primera cartera
      Wallet.first().then((wallet)=>{
        //ejecucion de promesa al buscar 1a cartera
        if(!wallet){
          //crear primera cartera
          Wallet.createFirst().then((resultado)=>{
            //Se crea primera cartera
            console.log("Se creo primera cartera");
            this.setID(resultado);
            resolve();
          });
        }else{
          console.log("Ya había cartera");
          this.setID(wallet.id);
          resolve();
        }
      });
    });
  }
}
