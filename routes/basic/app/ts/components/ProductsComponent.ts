/*
 * Angular
 */
import {Component} from '@angular/core';
import {
  Router,
  RouterOutlet,
  RouteConfig,
  RouterLink
} from '@angular/router-deprecated';


/*
 * Components
 */
import {MainComponent} from 'components/products/MainComponent';
import {InterestComponent} from 'components/products/InterestComponent';
import {GalleryComponent} from 'components/products/GalleryComponent';
import {ByIdComponent} from 'components/products/ByIdComponent';

@Component({
  selector: 'products',
  directives: [RouterOutlet, RouterLink],
  template: `
  <h1>{{ title }}</h1>

  <h2>Products</h2>

  <div class="navLinks">
    <a [routerLink]="['./Main']">Main</a> |
    <a [routerLink]="['Products', 'Interest']">Interest</a> |
    <a [routerLink]="['./Gallery']">Gallery</a> |
    Enter id: <input #id size="6">
    <button (click)="goToProduct(id.value)">Go</button>
  </div>

  <div class="products-area">
    <router-outlet></router-outlet>
  </div>
  `
})
@RouteConfig([
  { path: '/main', name: 'Main', component: MainComponent, useAsDefault: true },
  { path: '/:id',  name: 'ById', component: ByIdComponent },
  { path: '/interest', name: 'Interest', component: InterestComponent },
  { path: '/gallery/...', name: 'Gallery', component: GalleryComponent },
])

export class ProductsComponent {
  title: string;

  constructor(public router: Router) {

  }

  goToProduct(id: string): void {
    this.router.navigate(['./ById', {id: id}]);
  }
}
