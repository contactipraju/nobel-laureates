import { Pipe, PipeTransform } from '@angular/core';
import { Laureate } from '../../nobels.model';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
  transform(items: Laureate[], genderFilter?: object): Laureate[] {
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

      if((it.gender === 'male' && genderFilter['male'] == true) || (it.gender === 'female' && genderFilter['female'] == true)) {
        return true;
      }
      else {
        return false;
      }
    });
  }
}
