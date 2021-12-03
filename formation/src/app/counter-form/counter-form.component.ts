import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {customIncrement} from '../state/action.state';

@Component({
  selector: 'app-counter-form',
  templateUrl: './counter-form.component.html',
  styleUrls: ['./counter-form.component.css']
})
export class CounterFormComponent implements OnInit {
  value: any;

  constructor(private store: Store<{ counter: {counter: number} }>) { }

  ngOnInit(): void {
  }

  setTextValue() {
    this.store.dispatch(customIncrement({value: this.value}))
  }
}
