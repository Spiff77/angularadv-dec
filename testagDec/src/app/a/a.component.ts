import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  name: any;

  constructor() { }

  ngOnInit(): void {
  }

  test(){
    console.log("A")
    return 'A'
  }
}
