import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Car} from '../template-form/template-form.component';
import {ProductService} from '../product.service';
import {CheckDuplicateNameValidator} from '../validators/checkDuplicateName.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm!: FormGroup


  constructor(private fb: FormBuilder, private ps: ProductService) { }

  ngOnInit(): void {
    // fetch from db
    this.myForm = this.fb.group({
      'name': ['', Validators.required, CheckDuplicateNameValidator.createValidator(this.ps)],
      'model': '',
      'tank': '',
      'speed': '',
      'options': this.fb.group({
        'radio': false,
        'kalxon': true
      }),
      'owners': this.fb.array([
        this.createDriverFromGroup()
      ])
    })

    this.ps.checkIfProductNameExist("1989").subscribe(
      v => console.log('-->'+v))
  }

  getOwnerFormArray(): FormArray {
    return this.myForm.controls['owners'] as FormArray;
  }

  createDriverFromGroup(): FormGroup {
    return this.fb.group({ // 1
      'name':'',
      'nbDriverLicense': ''
    })
  }

  addDriver() {
    this.getOwnerFormArray().push(
      this.createDriverFromGroup()
    )
  }

  removeItemFromArray(i: number) {
    let abstractControls = this.getOwnerFormArray().controls;
    if(abstractControls.length > 1)
      this.getOwnerFormArray().removeAt(i)
  }
}
export interface Truck {
  name:string,
  model:string,
  tank:number,
  speed: number
  owner: {
    name: string,
    nbDriverLicense: string
  }
}
