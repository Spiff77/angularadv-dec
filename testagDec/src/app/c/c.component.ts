import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css'],

})
export class CComponent implements OnInit {

  val = 0

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    setInterval(() => {
      this.val = Math.random()
      this.cd.markForCheck()
      console.log(Math.random())
    }, 1000)
  }

  test(){
    console.log("C")
    return 'C'
  }
}
