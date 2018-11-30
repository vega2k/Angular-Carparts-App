import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {
  transform(value: string): string {
    console.log('변경전 :' + value);
    let newStr: string = '';
    for ( let i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }
    console.log('변경후 :' + newStr);
    return newStr;
  }

}
