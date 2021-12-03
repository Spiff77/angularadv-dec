import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, isEmpty, map, mergeAll} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll() :Observable<any> {
    return this.http.get<any>('http://localhost:8080/learn/api/products');
  }

  checkIfProductNameExist(name: string): Observable<boolean> {
    return this.getAll().pipe(
        mergeAll(),
        filter(v => {
          return (v as any).name === name
        }),
        isEmpty(),
        map(v => !v)
    )
  }
}
