import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {decrement, increment, reset} from '../state/action.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count!: Observable<{ counter: number }>
  constructor(private store: Store<{ counter: {counter: number} }>) { }

  ngOnInit(): void {
    this.count = this.store.select('counter')
  }

  incrementValue() {
    this.store.dispatch(increment())
  }

  decrementValue() {
    this.store.dispatch(decrement())
  }

  resetValue() {
    this.store.dispatch(reset())
  }
}
