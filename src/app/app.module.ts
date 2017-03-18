import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TransactionsPage } from '../pages/transactions/transactions';
import { AddingPage } from '../pages/adding/adding';
import { MapPage } from '../pages/map/map';
import {GeolocationService} from '../services/geolocation.service';
import {WalletsPage} from '../pages/wallets/wallets';
import {WalletService} from '../services/wallets.service';
import {TransactionService} from '../services/transactions.service';
import {NewWalletPage} from '../pages/new-wallet/new-wallet';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TransactionsPage,
    AddingPage,
    MapPage,
    WalletsPage,
    NewWalletPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TransactionsPage,
    AddingPage,
    MapPage,
    WalletsPage,
    NewWalletPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
              {provide: GeolocationService, useClass: GeolocationService},
              {provide: WalletService, useClass: WalletService},
              {provide: TransactionService, useClass: TransactionService}]
})
export class AppModule {}
