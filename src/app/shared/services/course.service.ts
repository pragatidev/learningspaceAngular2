import { EventEmitter, Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Course, Instructor} from '../models';

export interface CourseSearchParams {
    title: string;
    minPrice: number;
    maxPrice: number;
}

const COURSES: Course[] = [{
        id: 0,
        title: 'A Great Course',
        price: 75.00,
        description: 'This course is a step-by-step curriculum introducing you to Angular 2 by rebuilding Google Keep. ' + 
        'While most tutorials and courses just cover individual framework features and concepts, they are often devoid of ' +
        'practical application or context of how to build a real application. We wanted to build a course for you that was ' +
        'built the way we like to learn, but actually writing code. You\'ll learn the fundamentals by building each step of the ' +
        'application yourself with video walk-throughs from our expert instructor Scott Moss. If you\'re new to ES2015, TypeScript, ' +
        'WebPack, NPM or Node, make sure to enroll in our free Modern JavaScript course here so that you can focus on just the necessary ' +
        'concepts of Angular 2 that you need to go from 0 to productive as quickly as possible.',
        categories: ['angular']
    },
    {
        id: 1,
        title: 'A Super Course',
        price: 65.00,
        description: 'This is a course description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus ' +
        'id illo ad fugit, odit odio velit eius incidunt dignissimos.',
        categories: ['typescript']
    },
    {
        id: 2,
        title: 'An Awesome Course',
        price: 95.00,
        description: 'This is a course description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus ' +
        'id illo ad fugit, odit odio velit eius incidunt dignissimos.',
        categories: ['javascript']
    },
    {
        id: 3,
        title: 'An Amazing Course',
        price: 125.00,
        description: 'This is a course description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus ' +
        'id illo ad fugit, odit odio velit eius incidunt dignissimos.',
        categories: ['angular', 'node']
    },
    {
        id: 4,
        title: 'An Okay Course',
        price: 45.00,
        description: 'This is a course description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus ' +
        'id illo ad fugit, odit odio velit eius incidunt dignissimos.',
        categories: ['react']
    }];

      const INSTRUCTORS: Instructor[] = [
    {
        id: 0,
        courseId: 0,
        firstName: 'John',
        lastName: 'Gruber',
        bio: 'John\'s goal is to make everything easy. He has built curriculum and taught it to hundreds of engineers around the world. '+
        'Before that he was a engineer at Udacity and Hack Reactor. He\'s a regular speaker at most Angular conferences and tries his ' +
        'best to entertain as well and educate. Sometimes he stays up for days hacking on projects, not sure how.'
    },
    {
        id: 1,
        courseId: 1,
        firstName: 'Liz',
        lastName: 'England',
        bio: 'This is an instructor\'s bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Repellendus cumque corporis, consequuntur, reprehenderit, labore officiis reiciendis similique aliquid ' +
        'dolorum quos praesentium! Reiciendis doloremque nihil inventore officia natus vitae unde, quibusdam.'
    },
    {
        id: 2,
        courseId: 2,
        firstName: 'Rami',
        lastName: 'Ismael',
        bio: 'This is an instructor\'s bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Repellendus cumque corporis, consequuntur, reprehenderit, labore officiis reiciendis similique ' +
        'aliquid dolorum quos praesentium! Reiciendis doloremque nihil inventore officia natus vitae unde, quibusdam.'
    },
    {
        id: 3,
        courseId: 3,
        firstName: 'Merlin',
        lastName: 'Mann',
        bio: 'This is an instructor\'s bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Repellendus cumque corporis, consequuntur, reprehenderit, labore officiis reiciendis similique ' +
        'aliquid dolorum quos praesentium! Reiciendis doloremque nihil inventore officia natus vitae unde, quibusdam.'
    },
    {
        id: 4,
        courseId: 4,
        firstName: 'Sarah',
        lastName: 'Pavis',
        bio: 'This is an instructor\'s bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Repellendus cumque corporis, consequuntur, reprehenderit, labore officiis reiciendis similique ' +
        'aliquid dolorum quos praesentium! Reiciendis doloremque nihil inventore officia natus vitae unde, quibusdam.'
    },
    {
        id: 5,
        courseId: 4,
        firstName: 'Soha',
        lastName: 'Kareem',
        bio: 'This is an instructor\'s bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Repellendus cumque corporis, consequuntur, reprehenderit, labore officiis reiciendis similique ' +
        'aliquid dolorum quos praesentium! Reiciendis doloremque nihil inventore officia natus vitae unde, quibusdam.'
    },
];

@Injectable()
export class CourseService {
   // searchEvent: EventEmitter = new EventEmitter();
   courses = COURSES;
   Instructors = INSTRUCTORS;

    constructor(private http: Http) {}

    search(params: CourseSearchParams): Observable<Course[]> {
        return this.http
            .get('/courses', {search: encodeParams(params)})
            .map(response => response.json());
    }

    // getCourses(): Observable<Course[]> {
    //     return this.http.get('/courses')
    //     .map(response => response.json());
    // }

    getCourses(): Course[] {
        console.log(this.courses);
        return this.courses;
    }

    // getCourseById(courseId: number) : Observable<Course> {
    //     return this.http.get('/courses/${courseId}')
    //         .map(response => response.json());
    // }

    getCourseById(courseId: number): Course {
    return this.courses.find(c => c.id === courseId);
}

    // getInstructorsForCourse(courseId: number) : Observable<Instructor[]> {
    //     return this.http
    //         .get(`/courses/${courseId}/instructors`)
    //         .map(response => response.json())
    //         .map(instructors => instructors.map(
    //             (i: any) => new Instructor(i.id, i.courseId, i.firstName, i.lastName, i.bio)));
    // }

    getAllInstructors(): Instructor[] {
        return this.Instructors;
    }

    getInstructorsForCourse(courseId: number): Instructor[] {
    return this.Instructors.filter(c => c.id === courseId);
}

    getAllCategories(): string[] {
        return ['Angular', 'React', 'TypeScript', 'JavaScript', 'Node']
    }
}

// Turns a JavaScript object into an instance of URLSearchParams
function encodeParams(params: any): URLSearchParams {
    return Object.keys(params)
        .filter(key => params[key])
        .reduce((searchParams: URLSearchParams, key: string) => {
            searchParams.append(key, params[key]);
            return searchParams;
        },
        new URLSearchParams());
}
