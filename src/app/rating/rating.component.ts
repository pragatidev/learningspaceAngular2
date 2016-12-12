import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Course, CourseService} from '../shared';


@Component({
  selector: 'rating-page',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {
  errors: Object = {};
  isSubmitting: boolean = false;
  commentControl = new FormControl();
  course: Course;
  courses: Course[];

  constructor( private courseService: CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

  submitForm() {
  }
}
