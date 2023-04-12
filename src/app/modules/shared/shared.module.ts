/* Angular Modules */
import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { HttpClientModule }         from '@angular/common/http';

/* Third-party Modules */
import { ButtonsModule }       from 'ngx-bootstrap/buttons';

/* Services */
import { FilterService }    from './services/filter.service';

/* Input Components */
import { ButtonGroupComponent } from './components/input/button-group/button-group.component';
import { InputStringComponent } from './components/input/input-string/input-string.component';
import { SortButtonComponent }  from './components/input/sort-button/sort-button.component';

const services = [
	FilterService
];

const components = [
	ButtonGroupComponent,
	InputStringComponent,
	SortButtonComponent,
];

const modules = [
	CommonModule,
	FormsModule,
	HttpClientModule,
];

@NgModule({
	declarations: [
		...components
	],
	imports: [
		...modules,
		ButtonsModule.forRoot()
	],
	exports: [
		...components,
		...modules,
	],
	providers: [...services]
})
export class SharedModule { }
