import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'product-department',
  inputs: ['productArea', 'currentComponent'],
  host: {'class': 'item'},
  outputs: ['onNombreEscucha'],
  template: `
  <div *ngFor="let department of productArea.department; let i=index" (click)='clicked(department)' [attr.danger]="isRow(currentComponent)">
    <div class="header">{{ department }} {{ currentComponent }}</div>
  </div>
  `
})

export class ProductDepartment implements OnInit{
  productArea: string[];
  onNombreEscucha: EventEmitter<String>;
  currentComponent: string;

  constructor () {
    this.onNombreEscucha = new EventEmitter<String>(false);
  }

  clicked (department: String) {
    this.onNombreEscucha.emit(department);
  }

  ngOnInit(){
      console.log(this.currentComponent, '-->');
   }

  isRow (currentComponent): String  {
    
    if (currentComponent === 'ProductRow'){
      return 'ProductRow';
    }
  }
}