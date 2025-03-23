import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addFive',
  standalone: true
})
export class AddFivePipe implements PipeTransform {

    transform(value: number): number {
        return value + 5;
      }
  

}