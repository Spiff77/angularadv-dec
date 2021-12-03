import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush


})
export class BComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getInfos() {
    console.log('B')
    return 'composant B'
  }

}
