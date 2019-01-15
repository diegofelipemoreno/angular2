import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";

@Component({
selector: 'reddit-article',
host: {
	class:'row'
},
template: `
	<div class="four wide column center aligned votes">
		<div class="ui statistic">
			<div class="value">
				{{ votes }}
			</div>
			<div class="label">
				Points
			</div>
		</div>
	</div>
	<div class="twelve wide column">
		<a href="{{ link }}" class="ui large header">
			{{ title }}
		</a>
		<ul class="ui big horizontal list voters">
			<li class="item">
				<a href (clikc)="voteUp()">
					<i class="arrow up icon"></i>
					upvote
				</a>
			</li>
			<li class="item">
				<a href (click)="voteDown">
					<i class="arrow down icon"></i>
					downvote
				</a>
			</li>
		</ul>
	</div>
`
})

export class ArticleComponent {
	votes: number;
	title: sting;
	link: string;

	constructor() {
		this.tile = 'Angular 2';
		this.link = 'http:// angular.io';
		this.vote = 10;
	}

	voteUp() {
		this.votes += 1;
	}

	voteDown() {
		this.votes -= 1;
	}
}
