import { Component, OnInit }    from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

import { Subject }      from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Filter }        from '../../models/nobel-filter.model';

import { FilterService } from '@app/modules/shared/services/filter.service';

@Component({
	selector: 'app-nobel-filter',
	templateUrl: './nobel-filter.component.html',
	styleUrls: ['./nobel-filter.component.scss'],
	providers: [FilterService]
})
export class NobelFilterComponent implements OnInit {
	private searchUpdated = new Subject<Filter>();
	@Output() searchTextEmitter = new EventEmitter<Filter>();

	filterInputs = new Filter();
	allFilters = this.filterInputs.allOptions();

	constructor(private filterService: FilterService) {
		this.searchUpdated.pipe(debounceTime(200))
			.subscribe((val) => this.searchTextEmitter.emit(val));
	}

	ngOnInit() {
	}

	filterEventHandler($event: any) {
		console.log("NobelFilterComponent - filterEventHandler: ", $event);

		switch($event.id) {
			case 'name':
				this.filterInputs.name = $event.value;
				this.onSearchChange();
			break;

			case 'gender':
				this.filterInputs.gender = Object.assign({}, this.onlyTrueValues($event.id, $event.value));
				this.onSearchChange();
			break;

			case 'area':
				this.filterInputs.area = Object.assign({}, this.onlyTrueValues($event.id, $event.value));
				this.onSearchChange();
			break;

			case 'sortOn':
				this.filterInputs.sortOn = $event;
				this.onSearchChange();
			break;
		}
	}

	onlyTrueValues(id: string, obj: any) {
		console.log("NobelFilterComponent - onlyTrueValues: ", id, obj);

		for(var key in obj) {
			if (!obj[key]) {
				delete obj[key];
			}
		}

		return obj;
	}

	onSearchChange() {
		console.log("NobelFilterComponent - onSearchChange: ");
		this.emitFilters();
	}

	onResetFilters() {
		console.log("NobelFilterComponent - onResetFilters: ");
		this.filterInputs.Reset();
		this.allFilters = this.filterInputs.allOptions();
		this.emitFilters();

		this.filterService.broadcastMessage('reset');
	}

	emitFilters() {
		console.log("NobelFilterComponent - emitFilters: ");
		this.searchUpdated.next(this.filterInputs);
	}
}
