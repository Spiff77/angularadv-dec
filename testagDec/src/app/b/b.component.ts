import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
})
export class BComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cd.detach()
  }

  test(){
    console.log("B")
    return 'B'
  }
}
