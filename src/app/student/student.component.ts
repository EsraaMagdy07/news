import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  students:Student[]=[];
  addStudent(firstName:string,lastName:string,age:number)
  {
    if (!this.students.some(a=>a.firstName == firstName)){
      let newStudent:Student=new Student(firstName,lastName,age);
      //  this.students.push(newStudent);
      this.students.unshift(newStudent);
    }


  }
  deleteStudent(id:number)
  {
    // delete this.students[id];
   this. students.splice(id, 1);
  }
}
