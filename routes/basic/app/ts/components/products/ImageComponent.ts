/*
 * Angular
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
/*
 * Services
 */
 import {GalleryService} from '../../services/GalleryService';


@Component({
  selector: 'interest',
  template: `
  	<h3>Image component</h3>
  	 	<div *ngIf="loading">loading...</div>
  	 	<div *ngFor="let post of results; let i=index">
  	 		<div *ngIf="i < 10">
	 			<img alt="" src="{{ post.thumbnailUrl }}"/>
  	 		</div>
  	 	</div>
  `
})
export class ImageComponent implements OnInit {
 	results: Object;
 	loading: boolean;

 	constructor(public gallery: GalleryService, public router: Router) {
 	}

 	ngOnInit(): void {
 		this.loading = true;
 		this.gallery
 		.getDefaultData()
 		.subscribe((res: any) => this.renderResults(res));
 	}

 	renderResults(res: any): void {
 		this.results = null;
 		this.results = res;
 		this.loading = false;
 	}
 }
