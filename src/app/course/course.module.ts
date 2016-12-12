import {NgModule, ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CourseComponent} from './course.component';
import {CourseDetailComponent} from './course-detail.component';
import { AuthGuard, SharedModule, CourseService, CartService } from '../shared';

const courseRouting: ModuleWithProviders = RouterModule.forChild(
    [{
        path: 'courses',
        component: CourseComponent
    },
    {
    path: 'courses/:id',
    component: CourseDetailComponent,
    }]
);

@NgModule({
    imports: [courseRouting, SharedModule],
    declarations: [CourseComponent, CourseDetailComponent],
    providers: [CourseService, CartService]

})
export class CourseModule {}
