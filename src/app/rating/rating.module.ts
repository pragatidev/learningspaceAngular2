import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RatingComponent } from './rating.component';
import { AuthGuard, SharedModule } from '../shared';

const ratingRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'rating',
    component: RatingComponent,
    canActivate: [AuthGuard]
  }
]);

@NgModule({
  imports: [
    ratingRouting,
    SharedModule
  ],
  declarations: [
    RatingComponent
  ]
})
export class RatingModule {}
