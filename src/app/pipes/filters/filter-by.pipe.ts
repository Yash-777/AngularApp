import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
/*
D:\AngularProjects\AngularApp>ng g pipe pipes/filters/filterBy
installing pipe
  create src\app\pipes\filters\filter-by.pipe.spec.ts
  create src\app\pipes\filters\filter-by.pipe.ts
  update src\app\app.module.ts

*/