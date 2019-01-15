/*
 * Angular
 */
import {Component} from '@angular/core';
import {
  Router,
  RouterOutlet,
  RouteConfig,
  RouterLink,
} from '@angular/router-deprecated';

/*
 * Components
 */
import {ImageHomeComponent} from 'components/products/ImageHomeComponent';
import {ImageComponent} from 'components/products/ImageComponent';
import {ImageEachComponent} from 'components/products/ImageEachComponent';
import {UsersComponent} from 'components/products/UsersComponent';
import {UserSingleComponent} from 'components/products/UserSingleComponent';

@Component({
  selector: 'gallery',
  directives: [RouterOutlet, RouterLink],
  template: `
  <hr>
  <div class="navLinks">
    <a [routerLink]="['./Image']">Image</a> |
    <a [routerLink]="['./Users']">Users</a> |
  </div>

  <hr>
  <router-outlet></router-outlet>
`
})

@RouteConfig([
  { path: '/imagehome', name: 'ImageHome', component: ImageHomeComponent, useAsDefault: true},
  { path: '/image', name: 'Image', component: ImageComponent},
  { path: '/imageeach', name: 'ImageEach', component: ImageEachComponent},
  { path: '/users', name: 'Users', component: UsersComponent},
  { path: '/usersingle', name: 'UserSingle', component: UserSingleComponent}
])

export class GalleryComponent {

  constructor(public router: Router) {
  }
}
