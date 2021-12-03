import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';
import {ProductService} from '../product.service';
import {BreweryService} from '../brewery.service';
import {LanguageService} from '../language.service';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  $users!: Observable<any>
  $products!: Observable<any>
  $breweries!: Observable<any>
  val= 0

  constructor(private us: UserService,
              private ps: ProductService,
              private bs: BreweryService,
              private langService: LanguageService,
              private store: Store<{ counter: {counter: number} }>

      ) { }

  ngOnInit(): void {
    this.$users = this.us.getAll();
    this.$products = this.ps.getAll();
    this.$breweries = this.bs.getAll();
    this.store.select('counter').subscribe(c => this.val = c.counter)
    this.langService.out.subscribe( () => this.$breweries = this.bs.getAll())
  }

}
