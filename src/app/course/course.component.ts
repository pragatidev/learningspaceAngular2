import {Component, Input, OnInit} from '@angular/core';
import {Course, Instructor, CourseService} from '../shared';

// const COURSES: Course[] = [{
//         id: 0,
//         title: 'A Great Course',
//         price: 75.00,
//         description: 'This is a course description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam error, ' +
//         'quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus id illo ad fugit, ' +
//         'odit odio velit eius incidunt dignissimos.',
//         categories: ['angular']
//     },
//     {
//         id: 1,
//         title: 'A Super Course',
//         price: 65.00,
//         description: 'This is a course description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
//         'Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus ' +
//         'id illo ad fugit, odit odio velit eius incidunt dignissimos.',
//         categories: ['typescript']
//     },
//     {
//         id: 2,
//         title: 'An Awesome Course',
//         price: 95.00,
//         description: 'This is a course description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
//         'Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus ' +
//         'id illo ad fugit, odit odio velit eius incidunt dignissimos.',
//         categories: ['javascript']
//     },
//     {
//         id: 3,
//         title: 'An Amazing Course',
//         price: 125.00,
//         description: 'This is a course description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
//         'Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus ' +
//         'id illo ad fugit, odit odio velit eius incidunt dignissimos.',
//         categories: ['angular', 'node']
//     },
//     {
//         id: 4,
//         title: 'An Okay Course',
//         price: 45.00,
//         description: 'This is a course description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
//         'Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus ' +
//         'id illo ad fugit, odit odio velit eius incidunt dignissimos.',
//         categories: ['react']
//     }];


//     const INSTRUCTORS: Instructor[] = [
//     {
//         id: 0,
//         courseId: 0,
//         firstName: 'John',
//         lastName: 'Gruber',
//         bio: 'This is an instructor\'s bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
//         'Repellendus cumque corporis, consequuntur, reprehenderit, labore officiis reiciendis similique ' +
//         'aliquid dolorum quos praesentium! Reiciendis doloremque nihil inventore officia natus vitae unde, quibusdam.'
//     },
//     {
//         id: 1,
//         courseId: 1,
//         firstName: 'Liz',
//         lastName: 'England',
//         bio: 'This is an instructor\'s bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
//         'Repellendus cumque corporis, consequuntur, reprehenderit, labore officiis reiciendis similique aliquid ' +
//         'dolorum quos praesentium! Reiciendis doloremque nihil inventore officia natus vitae unde, quibusdam.'
//     },
//     {
//         id: 2,
//         courseId: 2,
//         firstName: 'Rami',
//         lastName: 'Ismael',
//         bio: 'This is an instructor\'s bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
//         'Repellendus cumque corporis, consequuntur, reprehenderit, labore officiis reiciendis similique ' +
//         'aliquid dolorum quos praesentium! Reiciendis doloremque nihil inventore officia natus vitae unde, quibusdam.'
//     },
//     {
//         id: 3,
//         courseId: 3,
//         firstName: 'Merlin',
//         lastName: 'Mann',
//         bio: 'This is an instructor\'s bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
//         'Repellendus cumque corporis, consequuntur, reprehenderit, labore officiis reiciendis similique ' +
//         'aliquid dolorum quos praesentium! Reiciendis doloremque nihil inventore officia natus vitae unde, quibusdam.'
//     },
//     {
//         id: 4,
//         courseId: 4,
//         firstName: 'Sarah',
//         lastName: 'Pavis',
//         bio: 'This is an instructor\'s bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
//         'Repellendus cumque corporis, consequuntur, reprehenderit, labore officiis reiciendis similique ' +
//         'aliquid dolorum quos praesentium! Reiciendis doloremque nihil inventore officia natus vitae unde, quibusdam.'
//     },
//     {
//         id: 5,
//         courseId: 4,
//         firstName: 'Soha',
//         lastName: 'Kareem',
//         bio: 'This is an instructor\'s bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
//         'Repellendus cumque corporis, consequuntur, reprehenderit, labore officiis reiciendis similique ' +
//         'aliquid dolorum quos praesentium! Reiciendis doloremque nihil inventore officia natus vitae unde, quibusdam.'
//     },
// ];

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
