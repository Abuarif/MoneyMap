import { Component } from '@angular/core';

//import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { MapPage } from '../map/map';
import { TransactionsPage } from '../transactions/transactions';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TransactionsPage;
  tab2Root: any = MapPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
