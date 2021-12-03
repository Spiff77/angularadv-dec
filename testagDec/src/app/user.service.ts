import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    //normally returns
    // {name: 'toto', age: 36}
    // {name: 'ling', age: 31}
    return this.httpClient.get("babla.com")
  }
}
