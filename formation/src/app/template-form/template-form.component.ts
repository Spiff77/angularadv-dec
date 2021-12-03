import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  truck:Car = {model: '', speed: 0, tank: 0}

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.truck)
    this.truck = new Car()
  }
}

export class Car {
  constructor(public model: string = '', public tank: number = 0, public speed: number = 0) {

  }
}


