/*
 * Angular
 */

import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {LocationStrategy} from '@angular/common';
import {
  RouterLink,
  RouteParams,
} from '@angular/router-deprecated';

/*
 * Services
 */
import {GalleryService} from 'services/GalleryService';


// angular2 doesn't like 'userss' as the selector
// because apparently it's an existing HTML element
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/users
@Component({
  selector: 'theUser',
  directives: [RouterLink, CORE_DIRECTIVES],
  template: `
    <div *ngFor="let user of users; let i=index">
      <h4>{{ user.name }}</h4>
      <h3>{{ user.email }}</h3>
      <a [routerLink]="['UserSingle', {id: user.id}]">image link</a>
      <hr>
    </div>
    <p><a href (click)="back()">Back</a></p>
  `
})

export class UsersComponent implements OnInit {
  id: string;
  users: Object;

  constructor(public routeParams: RouteParams, public gallery: GalleryService,
              public locationStrategy: LocationStrategy) {
    this.id = routeParams.get('id');
  }

  ngOnInit(): void {
    this.gallery
      .getUsers()
      .subscribe((res: any) => this.renderUsers(res));
  }

  back(): void {
    this.locationStrategy.back();
  }

  renderUsers(res: any): void {
    this.users = res;
  }
}
