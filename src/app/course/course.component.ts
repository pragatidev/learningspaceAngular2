import {Component, Input, OnInit} from '@angular/core';
import {Course, Instructor, CourseService} from '../shared';

@Component({
    selector: 'app-course',
    templateUrl: 'course.component.html',
    styleUrls: ['course.component.css']
})
export class CourseComponent implements OnInit {
    @Input()
    course: Course;
    courses: Course[];
    instructors: Instructor[];

    constructor(private courseService: CourseService) {}

     ngOnInit(): void {
        this.courses = this.courseService
            .getCourses();

        this.instructors = this.courseService.
            getAllInstructors();
    }

    getCourses(params = <any>{}): Course[] {
    let result = this.courses;

    if (params.title) {
        result = result.filter(
            c => c.title.toLowerCase().indexOf(params.title.toLowerCase()) !== -1);
    }

    if (parseInt(params.price, 10) && result.length > 0 ) {
        result = result.filter(
            c => c.price <= parseInt(params.price, 10));
    }

    if (params.category && result.length > 0) {
        result = result.filter(
            c => c.categories.indexOf(params.category.toLowerCase()) !== -1);
    }

    return result;
}

getCourseById(courseId: number): Course {
    // return this.courses.find(c => c.id === courseId);
    return this.courseService.getCourseById(courseId);
}

getInstructorsByCourseId(courseId: number): Instructor[] {
    return this.instructors.filter(i => i.courseId === courseId);
}
}
