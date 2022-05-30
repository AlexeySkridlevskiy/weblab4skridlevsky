import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourCenterComponent } from './tour-center/tour-center.component';
import { TourListComponent } from './tour-list/tour-list.component';
// import { TourDetailsComponent } from './tour-details/tour-details.component';
import { ToursRoutingModule } from './tours-routing.module';
import { AddFormComponent } from './add-form/add-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TourCenterComponent,
    TourListComponent,
    // TourDetailsComponent,
    AddFormComponent
  ],
  imports: [
    CommonModule,
    ToursRoutingModule,
    RouterModule,
    FormsModule,
  ]
})
export class ToursModule { }
