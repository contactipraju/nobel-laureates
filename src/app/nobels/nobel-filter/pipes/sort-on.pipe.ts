import { Pipe, PipeTransform } from '@angular/core';
import { Laureate } from '../../nobels.model';

@Pipe({
  name: 'sortOn',
  pure: false
})

export class SortOnPipe implements PipeTransform {

  transform(items: Laureate[], prop: string, direction?: boolean): Laureate[] {
    if (!items) {
      return [];
    }

    if (!prop) {
      return items;
    }

    if(items.length > 0) {
      const _direction = direction ? -1 : 1,
      _isArr = Array.isArray(items),
      _type = typeof items[0],
      _flag = _isArr && _type === 'object' ? true : _isArr && _type !== 'object' ? false : true;

      items.sort((_a, _b) => {
        let a: any, b: any;

        if(prop === 'year') {
          a = _a['prizes'][0][prop];
          b = _b['prizes'][0][prop];
        }
        else if(prop === 'count') {
          a = _a['prizes'].length;
          b = _b['prizes'].length;
        }
        else {
          a = _flag ? _a[prop] : _a;
          b = _flag ? _b[prop] : _b;
        }

        if (typeof a === 'string') {
          return a > b ? -1 * _direction : 1 * _direction;
        }
        else if(typeof a === 'number' && typeof b === 'number') {
          return a - b > 0 ? -1 * _direction : 1 * _direction;
        }
        else if(a === null || b === null) {
          return b === null ? -1 * _direction : 1 * _direction;
        }
      });
    }

    return items;
  }
}
