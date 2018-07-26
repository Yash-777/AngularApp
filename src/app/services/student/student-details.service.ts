import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

import { MyStudents } from './my-students';
import { STUDENTS } from './mock-students';

import { Injectable } from '@angular/core';

@Injectable()
export class StudentDetailsService {

  constructor( ) { }

  getStudentsList(): Promise<MyStudents[]> {
    return Promise.resolve( STUDENTS );
  }

  /**
   * get information of the specified user id and returns it.
   * @param id
   * @returns {StudentDetailsService.Promise<MyStudents>}
   */
  getStudentByID(id: number): Observable<MyStudents> {
    // TODO: send the message _after_ fetching the student
    return Observable.of( STUDENTS.find( student => student.id === id ) );
    // return Observable.throw('Username or password is incorrect');
  }

  updateName(id:number, oldName: String, newName: String): void {
   // student : MyStudents = of(STUDENTS.find( student => student.id === id) );
   // https://stackoverflow.com/questions/32683488/rxjs-observing-object-updates-and-changes
  }
}
