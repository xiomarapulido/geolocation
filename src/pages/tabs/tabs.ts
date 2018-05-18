import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { SearchComponent } from '../search/search.component';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RegisterComponent;
  tab2Root = SearchComponent;

  constructor() {

  }
}
