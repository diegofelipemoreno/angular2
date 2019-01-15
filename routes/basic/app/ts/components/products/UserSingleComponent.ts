/*
 * Angular
 */
import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {RouteParams} from '@angular/router-deprecated';
import {LocationStrategy} from '@angular/common';

/*
 * Services
 */
import {GalleryService} from 'services/GalleryService';


// angular2 doesn't like 'users' as the selector
// because apparently it's an existing HTML element
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/user
@Component({
  selector: 'theSingleUser',
  directives: [CORE_DIRECTIVES],
  template: `
  <div *ngIf="user">
      <h4>{{ user.name }}</h4>
      <h3>{{ user.email }}</h3>
  </div>
  <p><a href (click)="back()">Back</a></p>
  `
})
export class UserSingleComponent implements OnInit {
  id: string;
  user: Object;

  constructor(public routeParams: RouteParams, public gallery: GalleryService,
              public locationStrategy: LocationStrategy) {
    this.id = routeParams.get('id');
  }

  ngOnInit(): void {
    this.gallery
      .getSingleUser(this.id)
      .subscribe((res: any) => this.renderUser(res));
  }

  back(): void {
    this.locationStrategy.back();
  }

  renderUser(res: any): void {
    this.user = res;
  }
}
