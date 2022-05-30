import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourCenterComponent } from './tours/tour-center/tour-center.component';
const routes: Routes = [
  { path: '', component: TourCenterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
