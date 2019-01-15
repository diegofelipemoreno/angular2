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


// angular2 doesn't like 'results' as the selector
// because apparently it's an existing HTML element
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/result
@Component({
  selector: 'theTrack',
  directives: [CORE_DIRECTIVES],
  template: `
  <div *ngIf="result">
      <h4>{{ result.title }}</h4>
      <img src="{{ result.thumbnailUrl }}">
    <p><a href (click)="back()">Back</a></p>
  </div>
  `
})
export class ImageEachComponent implements OnInit {
  id: string;
  result: Object;

  constructor(public routeParams: RouteParams, public gallery: GalleryService,
              public locationStrategy: LocationStrategy) {
    this.id = routeParams.get('id');
  }

  ngOnInit(): void {
    this.gallery
      .getSingleData(this.id)
      .subscribe((res: any) => this.renderTrack(res));
  }

  back(): void {
    this.locationStrategy.back();
  }

  renderTrack(res: any): void {
    this.result = res;
  }
}
