//import Dexie from 'dexie';
import Dexie from '../node_modules/dexie/dist/dexie'
export class TransactionAppDB extends Dexie{
  //nombre tabla->nombreInterfaz, tipo dato del id
  transactions: Dexie.Table<ITransaction, number>;
  wallets : Dexie.Table<IWallet, number>;
  constructor(){
    super("MoneyMapAppDB");

    this.version(1).stores({
      transactions: '++id,amount,lat,lng,title,imageUrl'
    });
    //cada vez que se haga un cambio se tiene que agregar otra version
    //si un usuario no actualiza la app y tien version borrada, no podrá actualizar
    this.version(2).stores({
      transactions: '++id,amount,lat,lng,title,imageUrl',
      wallets: '++id,amount,name'
    });
    this.version(3).stores({
      transactions: '++id,amount,lat,lng,title,imageUrl,walletId',
      wallets: '++id,amount,name'
    });

    this.transactions.mapToClass(Transaction);
    this.wallets.mapToClass(Wallet);
  }
}

export interface ICategory{

}
export interface ITransaction{
  id?: number;
  amount:number;
  lat:number;
  lng:number;
  title:string;
  imageUrl: string;
  walletId : number;
}

export interface IWallet{
  id?: number;
  amount:number;
  name:string;
}

export class Wallet implements IWallet{
  id?: number;
  amount:number;
  name:string;

  constructor(amount:number,name:string,id?:number){
    this.amount=amount;
    this.name=name;
    if(id) this.id=id;
  }

  save()
  {
    return db.wallets.add(this);
  }

  static createFirst(){
    let wallet = new Wallet(0,"Primera Cartera");
    return wallet.save();
  }

  static all(){
    //Transaction.all() => todas las transacciones
    //retorna objeto tipo Promise
    return db.wallets.orderBy("id").toArray();
  }

  static first(){
    //retorna nulo si no hay nada
    return db.wallets.orderBy("id").limit(1).first();
  }
}

export class Transaction implements ITransaction{
  id?: number;
  amount:number;
  lat:number;
  lng:number;
  title:string;
  imageUrl: string;
  walletId : number;

  constructor(amount: number, title: string,lat?:number, lng?:number,
              id?:number,imageUrl?:string, walletId ?: number){
    this.amount = amount;
    this.title=title;
    if(lat) this.lat=lat;
    if(lng) this.lng=lng;
    if(imageUrl) this.imageUrl=imageUrl;
    if(id) this.id=id;
    if(walletId) this.walletId=walletId;
      }

    getImage():string{
      if(this.imageUrl)
        return this.imageUrl;
      return "blue";
    }

    hasLocation():boolean{
      return !!(this.lat && this.lng);
    }

    save (){
      return db.transactions.add(this);
    }

    setCords(coords){
      this.lat=coords.latitude;
      this.lng=coords.longitude;
    }

    cleanCoords(){
      this.lat=null;
      this.lng=null;
    }

    static all(){
      //Transaction.all() => todas las transacciones
      //retorna objeto tipo Promise
      return db.transactions.orderBy("id").reverse().toArray();
    }
}

export let db = new TransactionAppDB();
//Wallet.createFirst();
