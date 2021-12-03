import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EMPTY, from, interval, of, Subscriber, Subscription, zip} from 'rxjs';
import {catchError, concatMap, filter, map, mergeMap, switchMap, takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit, OnDestroy {
  text= 'Hello';
  subscribtion!: Subscription
  alive = true;


  beers = [
    {name: 'stella', price: 10},
    {name: 'heineken', price: -10},
    {name: 'goudale', price: 12},
    {name: '3 monts', price: 14}
  ]
  constructor(private http: HttpClient) { }

  ngOnDestroy(): void {
        this.alive = false
    }

  getBeers = () => {
    return zip(
      from(this.beers),
      interval(3000)
    )
  }

  getSize = (beer: any) => {
    return interval(500).pipe(
      map( () => `${beer.name} = ${beer.name.length}`)
    )
  }

  ngOnInit(): void {
    /*this.subscribtion = this.getBeers().pipe(
      mergeMap(b => this.getSize(b[0])),
      takeWhile(() => this.alive)
    ).subscribe(b => console.log(b))*/
  }
}

