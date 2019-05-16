/* Angular Modules */
import { NgModule }         from '@angular/core';
import { RouterModule }     from '@angular/router';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

/* 3rd-party UI Components */
import { BsDatepickerModule }       from 'ngx-bootstrap/datepicker';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';

/* Application Components */
import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { NobelsComponent } from './nobels/nobels.component';

@NgModule({
  declarations: [
    AppComponent,
    NobelsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxBootstrapSliderModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: NobelsComponent, pathMatch: 'full' },
      { path: 'nobels', component: NobelsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
