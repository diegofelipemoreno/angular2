import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";

@Component({
selector: 'reddit-article',
inputs: ['article'],// brings the data (from RedditApp) in order to fill the markup
host: {
	class:'row'
},
template: `
	<div class="four wide column center aligned votes">
		<div class="ui statistic">
			<div class="value">
				{{ article.votes }}
			</div>
			<div class="label">
				Points
			</div>
		</div>
	</div>
	<div class="twelve wide column">
		<a href="{{ article.link }}" class="ui large header">
			{{ article.title }}
		</a>
		<div class="meta">({{ article.domain() }})</div>
		<ul class="ui big horizontal list voters">
			<li class="item">
				<button (click)="voteUp()">
					<i class="arrow up icon"></i>
					upvote
				</button>
			</li>
			<li class="item">
				<button (click)="voteDown()">
					<i class="arrow down icon"></i>
					downvote
				</button>
			</li>
		</ul>
	</div>
`
})

// ArticleComponent works as a controller
class ArticleComponent {
	article: Article;

	voteUp(): void {
		this.article.voteUp();
	}

	voteDown(): void {
		this.article.voteDown();
	}
}

// class that works a model for the class Article Component
// Fat models, skinny controlers
class Article {
	title: string;
	link: string;
	votes: number;

	constructor(title, link, votes) {
	  this.title = title;
	  this.link = link;
	  this.votes = votes || 0;
	}

	voteUp() {
		this.votes += 1;
	}

	voteDown() {
		this.votes -= 1;
	}

	domain(): string {
		var webName: string;

		webName = this.link.split('//')[1];

		if (webName) {
			return webName;
		} else {
			return null;
		}
	}
}

//---------------------------------------------------------------


@Component({
	selector: 'reddit',
	directives: [ArticleComponent], // with the directives we can load a compornent
	template: `
	<form class="ui large form segment">
		<h3 class="ui header">Add a Link</h3>
		<div class="field">
			<label for="title">Title:</label>
			<input name="title" #newtitle>
		</div>
		<div class="field">
			<label for="link">Link:</label>
			<input name="link" #newlink>
		</div>
		<button (click)="addArticle(newtitle, newlink)"
				class="ui positive right floated button">
				Submit link
		</button>
	</form>

	<div class="ui grid posts">
		<reddit-article
			*ngFor="let article of articles"
			[article]="article">
		</reddit-article>
	</div>
	`
})

class RedditApp {
	articles: Article[];

	constructor() {
		this.articles = [
			new Article ('Articulo 1', 'http://angular.io', 1),
			new Article ('Articulo 3', 'http://angular.io', 3),
			new Article ('Articulo 2', 'http://angular.io', 2);
		]

		this.sortArticles(this.articles);
	}

	addArticle(title, link): void {
		var newArticle;

		if (title.value && link.value !== '') {
			newArticle = new Article(title.value, link.value, 0);
			this.articles.push(newArticle);
			title.value  = '';
			link.value = '';
		} else {
			alert('you must fill on the fields');
		}

		this.sortArticles(this.articles);
	}

	sortArticles (articles): Article[] {
		this.articles.sort(function (a,b) {
			return b.votes - a.votes;
		});
	}
}


//---------------------------------------------------------------

bootstrap(RedditApp);


