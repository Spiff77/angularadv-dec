import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  name = '';

  constructor() { }

  ngOnInit(): void {
  }

  getInfos() {
    console.log('A')
    return 'composant A'
  }



}
