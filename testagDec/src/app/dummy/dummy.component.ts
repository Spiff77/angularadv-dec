import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  beers: string[] = [];

  submitted = false

  form!: FormGroup;

  constructor(private fb: FormBuilder, private us: UserService) { }

  ngOnInit(): void {
    this.form = this.fb.group({'name': ''})
    this.us.getAll().subscribe()
  }

  submit() {
    this.submitted = true;
  }
}
