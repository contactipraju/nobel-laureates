/* Angular Modules */
import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

//import { ButtonsModule }            from 'ngx-bootstrap/buttons';

import { environment }     from 'src/environments/environment';

/* Application Components */
import { AppComponent }     from './app.component';

/* App Modules */
import { AppRoutingModule } from './app-routing.module';
import { SharedModule }     from './modules/shared/shared.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
//		ButtonsModule.forRoot(),
		AppRoutingModule,
		RouterModule,
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
