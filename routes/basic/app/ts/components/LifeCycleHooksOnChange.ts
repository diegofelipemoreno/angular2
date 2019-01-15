import {
  Component,
  Directive,
  ElementRef,
  OnInit,
  Input,
  OnDestroy,
  SimpleChange,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';


@Component({
  selector: 'on-init',
  template: `
  <div class="ui label">
    <i class="cubes icon"></i> Init/Destroy
  </div>
  `
})

export class LifecycleSampleApp1 implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('On init');
  }

  ngOnDestroy(): void {
    console.log('On destroy');
  }
}

//-----------------------------

@Component({
  selector: 'on-change',
  inputs: ['name', 'comment'],
  template: `
  <h4>result</h4>
  <div class="ui comments">
    <div class="comment">
      <a class="avatar">
        <img src="app/images/avatars/matt.jpg">
      </a>
      <div class="content">
        <a class="author">{{name}}</a>
        <div class="text">
          {{comment}}
        </div>
      </div>
    </div>
  </div>
  `
})
class OnChangeCmp implements OnChanges {
  @Input('name') name: string;
  @Input('comment') comment: string;

  ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
    console.log('Changes', changes);
  }
}

//-----------------------------------------------------------

@Component({
  selector: 'onchange-example',
  directives: [OnChangeCmp],
  template: `
  <h4 class="ui horizontal divider header">
   on change example
  </h4>
  <div class="ui form">
    <div class="field">
      <label>Name</label>
      <input type="text" #namefld value="{{name}}"
             (keyup)="setValues(namefld, commentfld)">
    </div>

    <div class="field">
      <label>Comment</label>
      <textarea (keyup)="setValues(namefld, commentfld)"
                rows="2" #commentfld>{{comment}}</textarea>
    </div>
  </div>
  <on-change [name]="name" [comment]="comment"></on-change>
  `
})
export class OnCHangeExample {
	display: boolean;
	name: string;
	comment: string;

	constructor() {
	  this.display = true;
	  this.name = 'Felipe Coury';
	  this.comment = 'I am learning so much!';
	}

	setValues(namefld, commentfld): void {
	  this.name = namefld.value;
	  this.comment = commentfld.value;
	}

	toggle(): void {
	  this.display = !this.display;
	}
}


//-------------------------------------------------------------

@Component({
  selector: 'lifecycle-sample-app',
  directives: [LifecycleSampleApp1, OnCHangeExample],
  template: `
  <h4 class="ui horizontal divider header">
    OnInit and OnDestroy
  </h4>

  <button class="ui primary button" (click)="toggle()">
    Toggle
  </button>
  <on-init *ngIf="display"></on-init>
  <hr>
  <onchange-example></onchange-example>
  `
})
export class LifeCycleHooksOnChange {
  display: boolean;

  constructor() {
    this.display = true;
  }

  toggle(): void {
    this.display = !this.display;
  }
}



