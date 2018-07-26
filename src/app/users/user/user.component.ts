import { MyStudents } from './../../services/student/my-students';
import { StudentDetailsService } from './../../services/student/student-details.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
//import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // HardCoded data form this component.
  title: String = 'User ID';
  id = '777';

  // Input for the component form where it get the data from this class.
  // Angular automatically updates data-bound properties during change detection.
  @Input() student: MyStudents; // https://angular.io/api/core/Input

  private myFormGroup: any;
  private nameControlBinding : string;

  // Can't resolve all parameters for UserComponent: ([object Object], [object Object], ?).
  // import { Location } from '@angular/common';
  constructor(
     private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentDetailsService,
    //private location: Location
    formBuilder: FormBuilder    
  ) {
    // When ever it get loaded, It gets 'id' from routerLink and get the details of that student-ID.
    // So that for FormControl instead of empty String we can bind with updated values
    this.getStudent();
    
    // Validators.required « https://angular.io/guide/reactive-forms#validatorsrequired
    this.myFormGroup = formBuilder.group({
      // Initial Binding « var loginControl = new FormControl("", Validators.required)
      nameControl: new FormControl( this.student.name , 
            Validators.compose([Validators.required, Validators.minLength(3)]))
    });

  }

  ngOnInit(): void {
    // When ever it get loaded, It gets 'id' from routerLink and get the details of that student-ID.
    this.getStudent();
  }

  getStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    // (method) Observable<MyStudents>.subscribe( ... )
    this.studentService.getStudentByID(id)
        .subscribe(student => this.student = student);
    
    // Initial Binding value from component to HTML.
    //this.myFormGroup.nameControl.value = 'Sam';
  }

  login() {
    console.log('Change detected : ', this.student.name);
    
    this.userNavigation();
  }
  
  formGroup_Update() {
    // myControl.value « the value of a FormControl.
    const nameControlBindingValue : string = this.myFormGroup.get('nameControl').value;
    console.log('Form Group : ', this.myFormGroup.get('nameControl'));
    this.nameControlBinding = nameControlBindingValue;
    console.log(' :: ', this.nameControlBinding);
    
    this.student.name = this.nameControlBinding;
    
    this.userNavigation();
  }
  
  returnUrl: string;
  userNavigation() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/users';
    console.log('Navigation URL : ', this.returnUrl);
    this.router.navigate([this.returnUrl]);
  }
}