import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monedas'
})
export class MonedasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    value="$ " + value;
    return value;
  }

}
