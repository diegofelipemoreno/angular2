"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var InventoryService_1 = require('../services/InventoryService');
var InventoryService_2 = require('../services/InventoryService');
function priceValidator(control) {
    if (!control.value.match(/^\d+$/g)) {
        return { invalidPrice: true };
    }
}
function emptyFieldValidator(control) {
    if (control.value === '') {
        return { emptyField: true };
    }
}
function checkboxRequired(group) {
    var valid = false;
    for (name in group.controls) {
        var check = group.controls[name]._value;
        if (check) {
            valid = true;
        }
    }
    if (valid) {
        return null;
    }
    else {
        return {
            checkboxRequired: true
        };
    }
}
function formValidator(control) {
    return {
        formValidator: true
    };
}
var InventoryFormComponent = (function () {
    function InventoryFormComponent(fb, inventory) {
        this.inventory = inventory;
        this.product = InventoryService_2.Product;
        this.submitted = false;
        this.myForm = fb.group({
            'sku': ['', common_1.Validators.compose([common_1.Validators.required, emptyFieldValidator])],
            'name': ['', common_1.Validators.compose([common_1.Validators.required, emptyFieldValidator])],
            'price': ['', common_1.Validators.compose([common_1.Validators.required, priceValidator, emptyFieldValidator])],
            'department': fb.group({
                hiking: [false],
                swimming: [false],
                running: [false]
            }, { validator: checkboxRequired })
        });
        this.sku = this.myForm.controls['sku'];
        this.name = this.myForm.controls['name'];
        this.price = this.myForm.controls['price'];
        this.department = this.myForm.controls['department'];
    }
    InventoryFormComponent.prototype.onSubmit = function (value) {
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
                switch (name) {
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
            this.product = new InventoryService_2.Product(skuValue, nameValue, '/resources/images/products/blue-jacket.jpg', departmentArray, priceValue, 1);
            newProduct = this.product;
            this.inventory.products.push(newProduct);
        }
    };
    InventoryFormComponent = __decorate([
        core_1.Component({
            selector: 'inventory-form',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            inputs: ['submitted'],
            outputs: ['notify'],
            template: "\n  <h3>Form Inventory</h3>\n\n  <div class=\"ui raised segment\">\n    <h2 class=\"ui header\">Demo Form: with custom validations</h2>\n    <form [ngFormModel]=\"myForm\"\n          (ngSubmit)=\"onSubmit(myForm.value)\"\n          class=\"ui form\">\n\n      <div class=\"field\">\n        <label for=\"skuInput\">SKU</label>\n        <input type=\"text\"\n               id=\"skuInput\"\n               placeholder=\"SKU\"\n               [ngFormControl]=\"sku\">\n        <div *ngIf=\"sku.hasError('required') && submitted\" class=\"alert alert-danger\">You must include a sku.</div>\n\n        <label for=\"nameInput\">NAME</label>\n        <input type=\"text\"\n               id=\"nameInput\"\n               placeholder=\"NAME\"\n               [ngFormControl]=\"name\">\n        <div *ngIf=\"name.hasError('required') && submitted\" class=\"alert alert-danger\">You must include a name.</div>\n\n        <label>Activities</label>\n        <label class=\"checkbox-inline\">\n          <input type=\"checkbox\" value=\"hiking\" name=\"hiking\" [ngFormControl]=\"myForm.controls.department.controls.hiking\"> Hiking\n        </label>\n        <label class=\"checkbox-inline\">\n          <input type=\"checkbox\" value=\"swimming\" name=\"swimming\" [ngFormControl]=\"myForm.controls.department.controls.swimming\"> Swimming\n        </label>\n        <label class=\"checkbox-inline\">\n          <input type=\"checkbox\" value=\"running\" name=\"running\" [ngFormControl]=\"myForm.controls.department.controls.running\"> Running\n        </label>\n         <div *ngIf=\"department.hasError('checkboxRequired') && submitted\" class=\"alert alert-danger\">You must choose at leat 1 activitie</div>\n\n        <label for=\"priceInput\">PRICE</label>\n          <input type=\"text\"\n                  id=\"priceInput\"\n                  placeholder=\"PRICE\"\n                  [ngFormControl]=\"price\">\n          <div *ngIf=\"price.hasError('required') && submitted\" class=\"alert alert-danger\">You must include a price.</div>\n          <div *ngIf=\"price.hasError('invalidPrice') && submitted\" class=\"alert alert-danger\">Has to be a number</div>\n          <div *ngIf=\"price.hasError('emptyField') && submitted\" class=\"alert alert-danger\">fill the field</div>\n      </div>\n      <h1>{{ submitted }}</h1>\n     <button type=\"submit\" class=\"ui button\" (onSubmit)='onClick(value)'>Submit</button>\n    </form>\n  </div>\n  <hr>\n  "
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, InventoryService_1.InventoryService])
    ], InventoryFormComponent);
    return InventoryFormComponent;
}());
exports.InventoryFormComponent = InventoryFormComponent;
