/*
 * Angular
 */
import {Component} from '@angular/core';
import {
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Validators,
  AbstractControl,
  Control
} from '@angular/common';


/*
 * Services
 */
 import {InventoryService} from '../services/InventoryService';
 import {Product} from '../services/InventoryService';


function priceValidator(control: Control): { [key: string]: boolean } {
  if (!control.value.match(/^\d+$/g)) {
    return {invalidPrice: true};
  }
}

function emptyFieldValidator(control: Control): { [key: string]: boolean } {
  if (control.value === '') {
    return {emptyField: true};
  }
}

function checkboxRequired(group: ControlGroup) {
  var valid = false;

  for (name in group.controls) {
    //var check = Validators.required(group.controls[name]);
    var check = group.controls[name]._value;

    if (check) {
      valid = true;
    }
  }

  if (valid) {
    return null;
  } else {
    return {
      checkboxRequired: true
    };
  }
}


function formValidator(control: Control): { [key: string]: boolean } {
  return {
    formValidator: true
  };
}

@Component({
  selector: 'inventory-form',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  inputs: ['submitted'],
  outputs: ['notify'],
  template: `
  <h3>Form Inventory</h3>

  <div class="ui raised segment">
    <h2 class="ui header">Demo Form: with custom validations</h2>
    <form [ngFormModel]="myForm"
          (ngSubmit)="onSubmit(myForm.value)"
          class="ui form">

      <div class="field">
        <label for="skuInput">SKU</label>
        <input type="text"
               id="skuInput"
               placeholder="SKU"
               [ngFormControl]="sku">
        <div *ngIf="sku.hasError('required') && submitted" class="alert alert-danger">You must include a sku.</div>

        <label for="nameInput">NAME</label>
        <input type="text"
               id="nameInput"
               placeholder="NAME"
               [ngFormControl]="name">
        <div *ngIf="name.hasError('required') && submitted" class="alert alert-danger">You must include a name.</div>

        <label>Activities</label>
        <label class="checkbox-inline">
          <input type="checkbox" value="hiking" name="hiking" [ngFormControl]="myForm.controls.department.controls.hiking"> Hiking
        </label>
        <label class="checkbox-inline">
          <input type="checkbox" value="swimming" name="swimming" [ngFormControl]="myForm.controls.department.controls.swimming"> Swimming
        </label>
        <label class="checkbox-inline">
          <input type="checkbox" value="running" name="running" [ngFormControl]="myForm.controls.department.controls.running"> Running
        </label>
         <div *ngIf="department.hasError('checkboxRequired') && submitted" class="alert alert-danger">You must choose at leat 1 activitie</div>

        <label for="priceInput">PRICE</label>
          <input type="text"
                  id="priceInput"
                  placeholder="PRICE"
                  [ngFormControl]="price">
          <div *ngIf="price.hasError('required') && submitted" class="alert alert-danger">You must include a price.</div>
          <div *ngIf="price.hasError('invalidPrice') && submitted" class="alert alert-danger">Has to be a number</div>
          <div *ngIf="price.hasError('emptyField') && submitted" class="alert alert-danger">fill the field</div>
      </div>
      <h1>{{ submitted }}</h1>
     <button type="submit" class="ui button" (onSubmit)='onClick(value)'>Submit</button>
    </form>
  </div>
  <hr>
  `
})

export class InventoryFormComponent {
  myForm: ControlGroup;
  sku: AbstractControl;
  name: AbstractControl;
  price: AbstractControl;
  product : Object = Product;
  department: AbstractControl;
  submitted: boolean = false;


  constructor(fb: FormBuilder, public inventory: InventoryService) {
    this.myForm = fb.group({
      'sku':  ['', Validators.compose([Validators.required, emptyFieldValidator])],
      'name':  ['', Validators.compose([Validators.required, emptyFieldValidator])],
      'price':  ['', Validators.compose([Validators.required, priceValidator, emptyFieldValidator])],
      'department': fb.group({
          hiking: [ false ],
          swimming: [ false ],
          running: [ false ]
        }, {validator: checkboxRequired})
    });

    t
    this.name = this.myForm.controls['name'];
    this.price = this.myForm.controls['price'];
    this.department = this.myForm.controls['department'];
  }

  onSubmit(value: Object): void {
    var departmentArray = [];
    var departmentObject;
    var skuValue;
    var nameValue;
    var priceValue;
    var amountValue;
    var newProduct;

    this.submitted = true;

    if (this.myForm.status === 'VALID') {

      for (name in value) {

        switch(name) {
            case 'sku':
                skuValue = value[name];
                break;
            case 'name':
                nameValue = value[name];
                break;
            case 'price':
                priceValue = value[name];
                break;
            case 'department':
                departmentObject = value[name];
                break;
        }
      }

      for (name in departmentObject) {

        if (departmentObject[name]) {
           departmentArray.push(name);
        }
      }

      this.product = new Product(skuValue,
                                 nameValue,
                                 '/resources/images/products/blue-jacket.jpg',
                                 departmentArray,
                                 priceValue,
                                 1);
      newProduct = this.product;
      //console.log(this.product);
      this.inventory.products.push(newProduct);
    }
  }
}
