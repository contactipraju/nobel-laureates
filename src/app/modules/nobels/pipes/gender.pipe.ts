import { Pipe, PipeTransform } from '@angular/core';

import { Laureate } from '../models/nobels.model';
import { IGender }  from '../models/nobel-filter.model';

@Pipe({
	name: 'gender'
})
export class GenderPipe implements PipeTransform {
	transform(items: Laureate[], genderFilter?: IGender): Laureate[] {
		if (!items) {
			return [];
		}

		if ((!genderFilter)) {
			return items;
		}

		return items.filter(it => {
			if(!it.gender) {
				return false;
			}

			// If ALL/NONE selected.., just display everything [Remove hard-coded number later]
			let selections = Object.keys(genderFilter).length;
			if(!selections || selections === 3) {
				return true;
			}

			if(
				(it.gender === 'male'   && genderFilter['male'] !== true) ||
				(it.gender === 'female' && genderFilter['female'] !== true) ||
				(it.gender === 'org'    && genderFilter['org'] !== true)
			) {
				return false;
			}
			else {
				return true;
			}
		});
	}
}
