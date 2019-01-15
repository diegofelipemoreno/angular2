/*
 * Angular
 */

import {provide, Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {

  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  ROUTER_PRIMARY_COMPONENT,

  Router,
  RouteConfig,
} from '@angular/router-deprecated';

import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';

/*
 * Components
 */
import {HomeComponent} from 'components/HomeComponent';
import {AboutComponent} from 'components/AboutComponent';
import {ProductsComponent} from 'components/ProductsComponent';
import {ContactComponent} from 'components/ContactComponent';
import {ExtrasComponent} from 'components/ExtrasComponent';
import {NotFoundComponent} from 'components/NotFoundComponent';
import {SearchComponent} from 'components/SearchComponent';

import {ArtistComponent} from 'components/ArtistComponent';
import {TrackComponent} from 'components/TrackComponent';
import {AlbumComponent} from 'components/AlbumComponent';

import {LoginComponent} from 'components/LoginComponent';
import {ProtectedComponent} from 'components/ProtectedComponent';

import {StylingComponent} from 'components/StylingComponent';
import {HostPopupHomeComponent} from 'components/HostPopupHomeComponent';

import {InventoryComponent} from 'components/InventoryComponent';
import {TabsSampleApp} from 'tabs/TabsSampleApp';
import {LifeCycleHooks} from 'components/LifeCycleHooks';

/*
 * Services
 */
import {SPOTIFY_PROVIDERS} from 'services/SpotifyService';
import {GALLERY_PROVIDERS} from 'services/GalleryService';
import {AUTH_PROVIDERS} from 'services/AuthService';
import {INVENTORY_PROVIDERS} from 'services/InventoryService';

/*
 * Webpack
 */
require('css/styles.scss');

@Component({
  selector: 'router-app',
  directives: [ROUTER_DIRECTIVES,LoginComponent],
  template: `
  <div>
    <nav>
      <a>Navigation:</a>
      <ul>
        <li><a [routerLink]="['/Home']">Home</a></li>
        <li><a [routerLink]="['/About']">About</a></li>
        <li><a [routerLink]="['/Products']">Products</a></li>
        <li><a [routerLink]="['/Contact']">Contact us</a></li>
        <li><a [routerLink]="['/Extras']">Extras</a></li>
        <li><a [routerLink]="['/Search']">Search</a></li>
        <li><a [routerLink]="['/Protected']">Protected</a></li>
        <li><a [routerLink]="['/Styling']">Styling</a></li>
        <li><a [routerLink]="['/HostPopupHome']">Host popup Home</a></li>
        <li><a [routerLink]="['/Inventory']">Inventory app</a></li>
        <li><a [routerLink]="['/TabsSampleApp']">TabsSampleApp</a></li>
        <li><a [routerLink]="['/LifeCycleHooks']">LifeCycleHooks</a></li>
      </ul>
    </nav>
    <login></login>
    <hr>
    <router-outlet></router-outlet>
  </div>
  `
})
@RouteConfig([
  { path: '/', name: 'root', redirectTo: ['/Home'] },
  { path: '/home', name: 'Home', component: HomeComponent },
  { path: '/about', name: 'About', component: AboutComponent },
  { path: '/products/...', name: 'Products', component: ProductsComponent },
  { path: '/contact', name: 'Contact', component: ContactComponent },
  { path: '/contactus', name: 'ContactUs', redirectTo: ['/Contact'] },
  { path: '/extras', name: 'Extras', component: ExtrasComponent },
  { path: '/search', name: 'Search', component: SearchComponent },
  { path: '***', name: 'NotFound', component: NotFoundComponent },

  { path: '/artists/:id', name: 'Artists', component: ArtistComponent },
  { path: '/tracks/:id', name: 'Tracks', component: TrackComponent },
  { path: '/albums/:id', name: 'Albums', component: AlbumComponent },

  { path: '/protected', name: 'Protected', component: ProtectedComponent },

  { path: '/styling', name: 'Styling', component: StylingComponent },
  { path: '/hostpopuphome/...', name: 'HostPopupHome', component: HostPopupHomeComponent },
  { path: '/inventory', name: 'Inventory', component: InventoryComponent },
  { path: '/tabs-sample-app', name: 'TabsSampleApp', component: TabsSampleApp },
  { path: '/life-cycle-hooks/...', name: 'LifeCycleHooks', component: LifeCycleHooks }
])

class RoutesDemoApp {
  query: string;

  constructor(public router: Router) {
  }
}

bootstrap(RoutesDemoApp, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  SPOTIFY_PROVIDERS,
  GALLERY_PROVIDERS,
  INVENTORY_PROVIDERS,
  AUTH_PROVIDERS,
  provide(ROUTER_PRIMARY_COMPONENT, {useValue: RoutesDemoApp}),
  provide(APP_BASE_HREF,            {useValue: '/'}),
  provide(LocationStrategy,         {useClass: HashLocationStrategy})
]).catch((err: any) => console.error(err));
