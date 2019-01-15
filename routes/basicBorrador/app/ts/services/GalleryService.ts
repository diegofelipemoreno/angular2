import {Injectable, provide} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';


@Injectable()
export class GalleryService {
  static BASE_URL: string = 'http://jsonplaceholder.typicode.com/';

  constructor(public http: Http) {
  }

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL: string = `${GalleryService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params}`;
    } else {
      queryURL = `${queryURL}`;
    }

    return this.http.request(queryURL).map((res: any) => res.json());
  }

  getDefaultData(): Observable<any[]> {
    return this.query(`photos`);
  }

  getSingleData(id: string): Observable<any[]> {
    return this.query(`photos/${id}`);
  }

  getUsers(): Observable<any[]> {
    return this.query(`users`);
  }

  getSingleUser(id: string): Observable<any[]> {
    return this.query(`users/${id}`);
  }
}

export var GALLERY_PROVIDERS: Array<any> = [
  provide(GalleryService, {useClass: GalleryService})
];


/*import {Injectable, provide} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class GalleryService {
  static BASE_URL: string = 'http://jsonplaceholder.typicode.com/photos';

  constructor(public http: Http) {
  }

  query(): Observable<any[]> {
    let queryURL: string = `${GalleryService.BASE_URL}`;
    return this.http.request(queryURL).map((res: any) => res.json());
  }

  getData(): Observable<any[]> {
    return this.query();
  }
}

export var GALLERY_PROVIDERS: Array<any> = [
  provide(GalleryService, {useClass: GalleryService})
];*/
