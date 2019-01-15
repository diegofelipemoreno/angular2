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
import {HostPopupComponent} from 'components/HostPopupComponent';
import {TransclusionComponent} from 'components/TransclusionComponent';

@Component({
  selector: 'popup-home',
  directives: [RouterOutlet, RouterLink],
  template: `
  <h2>Popup home</h2>

  <div class="navLinks">
    <a [routerLink]="['./Transclusion']">Transclusion</a> |
  </div>
  <router-outlet></router-outlet>
  `
})

@RouteConfig([
  { path: '/hostpopup', name: 'HostPopup', component: HostPopupComponent, useAsDefault: true },
  { path: '/transclusion', name: 'Transclusion', component: TransclusionComponent },
])

export class HostPopupHomeComponent {
  constructor(public router: Router) {

  }
}