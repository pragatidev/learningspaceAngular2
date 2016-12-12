import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Course, Instructor, CourseService, CartService} from '../shared';

@Component({
    selector: 'course-detail-page',
    templateUrl: 'course-detail.html'
})
export class CourseDetailComponent implements OnInit {
    id: number;
course: Course;
instructors: Instructor[];
cartTotal: number = 0;

constructor(private route: ActivatedRoute, private courseService: CourseService, private cartService: CartService) {}

    ngOnInit(): void {

        this.route.params.subscribe(params => {this.id = +params['id']});
        console.log(this.id);
        this.course = this.courseService
            .getCourseById(this.id)
            ;

        this.instructors = this.courseService
            .getInstructorsForCourse(this.id)
           ;

    }

    onAdd() {
        this.cartService.addCartItem(this.course);
    }
}
