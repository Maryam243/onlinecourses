import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailsComponent } from './pages/courseDetails/courseDetails.component';

const routes: Routes = [
  {path:"",component:CoursesComponent},
  {path:":id",component:CourseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouresRoutingModule { }
