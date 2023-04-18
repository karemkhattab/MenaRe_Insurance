import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"header" , component:HeaderComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"application-form", component:ApplicationFormComponent},
  {path:"", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
