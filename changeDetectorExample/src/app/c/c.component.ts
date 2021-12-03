import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css'],
})
export class CComponent implements OnInit {

  name = '';
  count = 0;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.cd.markForCheck()
    }, 4000)
  }

  getInfos() {
    console.log('C', ++this.count)
    return 'composant C'
  }

}
