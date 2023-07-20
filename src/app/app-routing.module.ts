import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  { path: 'home', loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import("./modules/about/about.module").then(m => m.AboutModule) },
  { path: 'contact', loadChildren: () => import("./modules/contact/contact.module").then(m => m.ContactModule) },
  { path: 'courses', loadChildren: () => import("./modules/coures/coures.module").then(m => m.CouresModule) },
  { path: 'courseStore', loadChildren: () => import("./modules/course-store/course-store.module").then(m => m.CourseStoreModule) },
  { path: 'auth', loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule) },
  { path: '**',component:NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
