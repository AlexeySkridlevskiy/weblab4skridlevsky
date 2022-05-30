import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { TourListComponent } from './tour-list/tour-list.component';
import { AddFormComponent } from './add-form/add-form.component';
import { TourCenterComponent } from './tour-center/tour-center.component';

const routes: Routes = [
  { path: '', component: TourCenterComponent},
  { path: 'list', component: TourListComponent },
  { path: 'add-form', component: AddFormComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule,]
})
export class ToursRoutingModule { }
