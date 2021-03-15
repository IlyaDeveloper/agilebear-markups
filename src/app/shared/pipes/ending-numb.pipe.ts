import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'endingNumb'
})
export class EndingNumb implements PipeTransform {
  transform(val: any,  params?: any): any {
    if (!params.cutNumb) {
      return moment.localeData().ordinal(val);
    } else {
      return (moment.localeData().ordinal(val).replace(/[^a-z]/g, ''));
    }
  }
}
