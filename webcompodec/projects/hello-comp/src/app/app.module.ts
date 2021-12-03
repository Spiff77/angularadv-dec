import {DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PersonComponent } from './person/person.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule implements DoBootstrap{

  constructor(private injector: Injector) {
    const webComponent = createCustomElement(PersonComponent, {injector})
    customElements.define('person-detail', webComponent)
  }

  ngDoBootstrap(): void {}
}
