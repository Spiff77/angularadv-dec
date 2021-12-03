import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BmModule} from './bm/bm.module';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {BasicInterceptor} from './basic.interceptor';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';
import { CounterComponent } from './counter/counter.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './state/counter.reducer';
import { CounterFormComponent } from './counter-form/counter-form.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path : 'a', loadChildren: () => import('./am/am.module').then( module => module.AmModule)},
  {path : 'b', loadChildren: () => import('./bm/bm.module').then( module => module.BmModule)},
  {path : 'users', component: UserListComponent},
  {path : 'parent', component: ParentComponent},
  {path : '', component: HomeComponent},
  {path : 'counter', component: CounterComponent}
]

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    ParentComponent,
    ChildrenComponent,
    CounterComponent,
    CounterFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      counter: counterReducer
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BasicInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
