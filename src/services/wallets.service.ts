import {Injectable} from '@angular/core';
import {Wallet} from '../database';
@Injectable()
export class WalletService{
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
            resolve();
          });
        }else{
          console.log("Ya había cartera");
          resolve();
        }
      });
    });
  }
}
