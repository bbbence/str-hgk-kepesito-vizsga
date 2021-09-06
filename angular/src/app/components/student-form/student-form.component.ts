import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentHttpService } from 'src/app/service/student-http.service';
import { ClassroomComponent } from '../classroom/classroom.component';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  reactForm: FormGroup;

  studentID: string;
  studentForm: Student = {firstName:'', lastName:'', email:'', classroom: ClassroomComponent}

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentHttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.studentID = this.route.snapshot.params.id;
    if(this.studentID){
      this.studentService.getById(this.studentID).subscribe(
        data => {
          this.studentForm = data;
        }
      )
   }
  }

  saveStudent(form: NgForm){
    if(this.studentID){
      this.studentService.update(form.value, this.studentID).subscribe(
        student => this.router.navigate(['student-list']),
        err => console.error(err)
      )
    }else {
      this.studentService.save(form.value).subscribe(
        student => this.router.navigate(['student-list']),
        err => console.error(err)
      )
    }
  }
}
