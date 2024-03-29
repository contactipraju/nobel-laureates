import { Pipe, PipeTransform } from '@angular/core';

import { Laureate } from '../models/nobels.model';

@Pipe({
	name: 'area'
})
export class AreaPipe implements PipeTransform {

	transform(items: Laureate[], areaFilter?: any): Laureate[] {
		if (!items) {
			return [];
		}

		if ((!areaFilter)) {
			return items;
		}

		return items.filter(it => {
			if(!it.prizes || !it.prizes.length) {
				return false;
			}

			// If ALL/NONE selected.., just display everything [Remove hard-coded number later]
			let selections = Object.keys(areaFilter).length;
			if(!selections || selections === 6) {
				return true;
			}

			// For each selected area..
			for (var key in areaFilter) {
				if (areaFilter.hasOwnProperty(key)) {

					// For each prize..
					for(let i=0; i<it.prizes.length; i++) {
						if(areaFilter[key] === true && it.prizes[i].category === key) {
							return true;
						}
					}
				}
			}

			return false;
		});
	}
}
