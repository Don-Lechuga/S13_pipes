import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euros'
})
export class EurosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    value="€ " + value;
    return value;
  }

}
