import { Component, Directive, ElementRef } from '@angular/core';


@Component({
  selector: '[message]',
  inputs: ['header'],
  host: {
    'class': 'ui message'
  },
  template: `
  <div>
    <div class="header">
      Im the {{ header }}
    </div>
    <p>
      <ng-content></ng-content>
    </p>
  </div>
  `
})
class Message {
  header: string;

  ngOnInit(): void {
    console.log('header', this.header);
  }
}

@Component({
  selector: 'transclusion-component',
  directives: [Message],
  template: `
  <div message header="My Message">
    This is the content of the message
  </div>
  `
})
export class TransclusionComponent {
}


