import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimTexts',
})
export class TrimTextsPipe implements PipeTransform {
  transform(value: string, ...args: number[]): string {
    if(args.length){

      return value.substring(0, args[0]);  // trimming value to its length of args given in pipe
    }
    else{
      return value.substring(0, 10);  // trimming value to its length of 10
    }
  }
}
