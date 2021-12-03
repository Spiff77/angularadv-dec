import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CComponent } from './c/c.component';
import { BComponent } from './b/b.component';
import { AComponent } from './a/a.component';
import {FormsModule} from '@angular/forms';
import {PeekabooComponent} from './pikaboo/pikaboo.component';

@NgModule({
  declarations: [
    AppComponent,
    CComponent,
    BComponent,
    AComponent,
    PeekabooComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
