import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {

  transform(value: string): string {
    let newStr: string = "";
    for (var i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }
    return newStr;
  }

}
/*
D:\AngularProjects\AngularApp>ng g pipe pipes/reverseStr
installing pipe
  create src\app\pipes\reverse-str.pipe.spec.ts
  create src\app\pipes\reverse-str.pipe.ts
  update src\app\app.module.ts
*/