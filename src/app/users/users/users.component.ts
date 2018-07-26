
import { MyStudents } from './../../services/student/my-students';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentDetailsService } from '../../services/student/student-details.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css', './users.component.scss' ],

  providers:[StudentDetailsService]
})
export class UsersComponent implements OnInit, OnDestroy  {

  /*constructor() { }

  ngOnInit() {
  }*/

  students: MyStudents[];
  selectedStudent: MyStudents;
 
  constructor(private studentService: StudentDetailsService) { }
 
 ngOnInit(): void {
    this.loadAllUsers();
  }
  ngOnDestroy(): void {
    // ONDestroy to prevent memory leaks
  }
  
  loadAllUsers(): void {
    this.studentService.getStudentsList().then(students => this.students = students);
  }
 
  onSelect(student: MyStudents): void {
    this.selectedStudent = student;
  }

}
