/*
* Angular
*/
import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {
Router,
RouterLink,
RouteParams,
} from '@angular/router-deprecated';
/*
* Services
*/
import {GalleryService} from '../../services/GalleryService';


@Component({
	selector: 'interest',
directives: [RouterLink, CORE_DIRECTIVES],
	template: `
 	<h3>Image Home component</h3>

 	<h2>Default Request</h2>
 	<div *ngIf="loading">loading...</div>
 	<div *ngFor="let post of results; let i=index">
 		<div *ngIf="i < 10">
	 		<h4>{{ post.title }}</h4>
	 		<a [routerLink]="['ImageEach', {id: post.id}]">image link</a>
	 		<img alt="" src="{{ post.thumbnailUrl }}"/>
 		</div>
 	</div>
	`
})
export class ImageHomeComponent implements OnInit {
	query: string;
	results: Object;
	loading: boolean;

	constructor(public gallery: GalleryService, public router: Router, public routeParams: RouteParams) {
	}

	ngOnInit(): void {
		this.loading = true;
		this.gallery
		.getDefaultData()
		.subscribe((res: any) => this.renderResults(res));
		console.log(this.query);
	}

	renderResults(res: any): void {
		this.results = null;
		this.results = res;
		this.loading = false;
	}
}