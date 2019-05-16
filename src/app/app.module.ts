import { NgModule }         from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapSliderModule,
    BsDatepickerModule.forRoot()
    RouterModule.forRoot([
      { path: '', component: NobelsComponent, pathMatch: 'full' },
      { path: 'nobels', component: NobelsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
