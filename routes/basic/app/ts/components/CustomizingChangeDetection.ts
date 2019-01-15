import { Component,
  Directive,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Observable } from 'rxjs/Rx';

class Profile {
  constructor(private first: string, private last: string) {}

  lastChanged() {
    return new Date();
  }
}


class ProfileAlone {
  constructor(private first: string) {}

  lastChanged() {
    return new Date();
  }
}

@Component({
  selector: 'default',
  inputs: ['profile'],
  template: `
  <h4 class="ui horizontal divider header">
    Default Strategy
  </h4>

  <form class="ui form">
    <div class="field">
      <label>First Name</label>
      <input
        type="text"
        [(ngModel)]="profile.first"
        placeholder="First Name">
    </div>
    <div class="field">
      <label>Last Name</label>
      <input
        type="text"
        [(ngModel)]="profile.last"
        placeholder="Last Name">
    </div>
  </form>
  <div>
    {{profile.first}} | {{ profile.last }}
  </div>
  <div>
    {{profile.lastChanged() | date:'medium'}}
  </div>
  `
})
class DefaultCmp {
  @Input() profile: Profile;
}

@Component({
  selector: 'on-push',
  inputs: ['profile'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <h4 class="ui horizontal divider header">
    OnPush Strategy
  </h4>

  <form class="ui form">
    <div class="field">
      <label>First Name</label>
      <input
        type="text"
        [(ngModel)]="profile.first"
        placeholder="First Name">
    </div>
    <div class="field">
      <label>Last Name</label>
      <input
        type="text"
        [(ngModel)]="profile.last"
        placeholder="Last Name">
    </div>
  </form>
  {{profile.first}} | {{ profile.last }}
  <div>
    {{profile.lastChanged() | date:'medium'}}
  </div>
  `
})
class OnPushCmp {
  @Input() profile: Profile;
}

@Component({
  selector: 'solo',
  inputs: ['profileAlone'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <h4 class="ui horizontal divider header">
    solo
  </h4>

  <form class="ui form">
    <div class="field">
      <label>First Name</label>
      <input
        type="text"
        [(ngModel)]="profileAlone.first"
        placeholder="First Name">
    </div>
  </form>
  {{profileAlone.first}}
  <div>
    {{profileAlone.lastChanged() | date:'medium'}}
  </div>
  `
})
class OnPushCmpAlone {
  @Input() profileAlone: ProfileAlone;
}


//------------------------------------------------------------------

@Component({
selector: 'observable',
inputs: ['items'],
changeDetection: ChangeDetectionStrategy.OnPush,
template: `
	<div>
		<div>Total items: {{counter}}</div>
	</div>
`
})

class ObservableCmp {
	@Input() items: Observable<number>;
	counter = 0;

	constructor(private changeDetector: ChangeDetectorRef) {
	}

	ngOnInit() {
		console.log(this.items);
		this.items.subscribe((v) => {
			this.counter++;
			if (this.counter % 5 == 0) {
				//console.log(this.changeDetector);
				this.changeDetector.markForCheck();
			}
		}, null, () => {
			console.log('got value','COMPLETE>');
			this.changeDetector.markForCheck();
		});
	}
}

//-----------------------------------------------------------

@Component({
  selector: 'change-detection-sample-app',
  directives: [DefaultCmp, OnPushCmp, OnPushCmpAlone,ObservableCmp],
  template: `
  <div class="ui page grid">
    <div class="two column row">
      <div class="column area">
       <default [profile]="profile1"></default>
      </div>
      <div class="column area">
      	<on-push [profile]="profile2"></on-push>
      </div>
      <div class="column area">
      	<solo [profileAlone]="profileAlone"></solo>
      </div>
    </div>
  </div>
  <hr>
  <observable [items]="itemObservable"></observable>
  `
})

export class CustomizingChangeDetection {
  itemObservable: Observable<number>;
  profile1: Profile = new Profile('Felipe', 'Coury');
  profile2: Profile = new Profile('Nate', 'Murray');
  profileAlone: ProfileAlone = new ProfileAlone('Diego');


  constructor() {
	this.itemObservable = Observable.timer(100, 100).take(101);
  }
}