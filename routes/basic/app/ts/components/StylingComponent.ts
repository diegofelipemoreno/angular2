/*
 * Angular
 */
import {Component, ViewEncapsulation} from '@angular/core';
let externalCSSUrl: string = require('../../css/external.css'); // webpack gives a URL

@Component({
	selector: 'external-style',
	template: `
		<h4 class="ui horizontal divider header">
		External style example
		</h4>
		<div class="highlight">
		This uses component <code>styleUrls</code>
		property
		</div>
	`
})

export class StylingComponent {
}
