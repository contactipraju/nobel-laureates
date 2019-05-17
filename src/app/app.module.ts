/* Angular Modules */
import { NgModule }         from '@angular/core';
import { RouterModule }     from '@angular/router';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }      from '@angular/forms';

/* 3rd-party UI Components */
import { BsDatepickerModule }       from 'ngx-bootstrap/datepicker';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { ButtonsModule }            from 'ngx-bootstrap/buttons';

/* Application Components */
import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* Services */
import { NobelsService }      from './nobels/nobels.service';
import { NobelFilterService } from './nobels/nobel-filter/nobel-filter.service';

/* Filters */
import { AreaPipe } from './nobels/nobel-filter/pipes/area.pipe';

/* Components */
import { NobelsComponent }       from './nobels/nobels.component';
import { LaureateCardComponent } from './nobels/laureate-card/laureate-card.component';
import { NobelPrizeComponent }   from './nobels/laureate-card/nobel-prize/nobel-prize.component';
import { NobelFilterComponent }  from './nobels/nobel-filter/nobel-filter.component';
import { ButtonGroupComponent }  from './nobels/nobel-filter/button-group/button-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NobelsComponent,
    LaureateCardComponent,
    NobelPrizeComponent,
    NobelFilterComponent,
    ButtonGroupComponent,
    AreaPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxBootstrapSliderModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: NobelsComponent, pathMatch: 'full' },
      { path: 'nobels', component: NobelsComponent }
    ])
  ],
  providers: [NobelsService, NobelFilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
