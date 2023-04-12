/* Angular Modules */
import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';

/* Modules */
import { SharedModule }        from '@app/modules/shared/shared.module';
import { NobelsRoutingModule } from '@app/modules/nobels/nobels-routing.module';

/* Services */
import { NobelsService }      from './services/nobels.service';

/* Filters */
import { AreaPipe }         from './pipes/area.pipe';
import { GenderPipe }       from './pipes/gender.pipe';
import { SortOnPipe }       from './pipes/sort-on.pipe';
import { LaureateNamePipe } from './pipes/laureate-name.pipe';

/* Components */
import { NobelsPageComponent }   from './components/nobels-page/nobels-page.component';
import { NobelsComponent }       from './components/nobels/nobels.component';
import { LaureateCardComponent } from './components/laureate-card/laureate-card.component';
import { NobelPrizeComponent }   from './components/nobel-prize/nobel-prize.component';
import { NobelFilterComponent }  from './components/nobel-filter/nobel-filter.component';

const pipes = [
	AreaPipe,
	GenderPipe,
	SortOnPipe,
	LaureateNamePipe
];

const components = [
	NobelsPageComponent,
	NobelsComponent,
	LaureateCardComponent,
	NobelPrizeComponent,
	NobelFilterComponent
];

@NgModule({
	declarations: [...pipes, ...components],
	imports: [
		CommonModule,
		FormsModule,
		SharedModule,
		NobelsRoutingModule
	],
	exports: [...pipes, ...components],
	providers: [NobelsService]
})
export class NobelsModule { }
