
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Course} from '../models';

export class CartCourse {
    constructor(
        public id: number,
        public title: string,
        public price: number) {}
}

@Injectable()
export class CartService {

    cartCourses: CartCourse[];
    cartTotal: number = 0;

    constructor(private http: Http) {};

    getCartItems() {
        return this.http
        .get('/cart')
        .map(response => {
            const cartCourses = response.json();
            // transform the Observable to an Array
            let transformedCartCourses: CartCourse[] =[];
            for (let cartCourse of cartCourses) {
                transformedCartCourses.push(new CartCourse(cartCourse.id, cartCourse.title, cartCourse.price));
            }
            this.cartCourses = transformedCartCourses;
            return transformedCartCourses;
        })
    }

    addCartItem(course: Course) {
        // optimistically add to the view first
        let cartCourse = new CartCourse(course.id, course.title, course.price);
        this.cartCourses.push(cartCourse);
        this.cartTotal += course.price;

        //then update the backend
        // this.http
        // .get(`/cart/${course.id}`)
        // .map(response => response.json)
    }

    deleteCartItem(course: CartCourse){
        // optimistically delete from the view first
        const index = this.cartCourses.indexOf(course);
        this.cartCourses.splice(index, 1)
        this.cartTotal -= course.price;

        // then delete on backend
        // return this.http
        //     .delete(`/cart/${course.id}`)
        //     .map(response => response.json());
    }

    getCartTotal() {
        return this.cartTotal;
    }

}