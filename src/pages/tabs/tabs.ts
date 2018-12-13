import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { CreatePage } from '../create/create';
import { FavoritesPage } from '../favorites/favorites';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = CreatePage;
  tab4Root = FavoritesPage;
  tab5Root = SettingsPage;

  constructor() {

  }
}
