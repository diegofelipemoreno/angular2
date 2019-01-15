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
import {LifeCycleHooksOnChange} from 'components/LifeCycleHooksOnChange';
import {LifeCycleHooksDoCheck} from 'components/LifeCycleHooksDoCheck';
import {AdvancedTemplates} from 'components/AdvancedTemplates';
import {CustomizingChangeDetection} from 'components/CustomizingChangeDetection';
import {TransclusionComponent} from 'components/TransclusionComponent';

//-----------------------------

@Component({
  selector: 'lifecycle-hooks',
  directives: [RouterOutlet, RouterLink],
  template: `
  <h2>Lifecycle hooks</h2>

  <div class="navLinks">
    <a [routerLink]="['./LifeCycleHooksOnChange']">LifeCycleHooksOnChange</a> |
  	<a [routerLink]="['./LifeCycleHooksDoCheck']">LifeCycleHooksDoCheck</a> |
    <a [routerLink]="['./AdvancedTemplates']">AdvancedTemplates</a> |
    <a [routerLink]="['./CustomizingChangeDetection']">CustomizingChangeDetection</a> |
    <a [routerLink]="['./TransclusionComponent']">TransclusionComponent</a> |
  </div>

  <div class="products-area">
    <router-outlet></router-outlet>
  </div>
  `
})

@RouteConfig([
  { path: '/life-cycle-hooks-on-change', name: 'LifeCycleHooksOnChange', component: LifeCycleHooksOnChange, useAsDefault: true },
  { path: '/life-cycle-hooks-do-check', name: 'LifeCycleHooksDoCheck', component: LifeCycleHooksDoCheck },
  { path: '/advanced-templates', name: 'AdvancedTemplates', component: AdvancedTemplates },
  { path: '/customizing-change-detection', name: 'CustomizingChangeDetection', component: CustomizingChangeDetection },
  { path: '/transclusion-component', name: 'TransclusionComponent', component: TransclusionComponent }
])

export class LifeCycleHooks {

  constructor(public router: Router) {

  }
}


