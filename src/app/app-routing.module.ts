import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewexamComponent } from 'src/doctor/newexam/newexam.component';
import { StudentComponent } from 'src/doctor/student/student.component';
import { SubjectsComponent } from 'src/doctor/subjects/subjects.component';
import { ExamComponent } from 'src/student/exam/exam.component';
import { HomeComponent } from './compontent/home/home.component';
import { LoginComponent } from './compontent/login/login.component';
import { RestierComponent } from './compontent/restier/restier.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'subject' ,component:SubjectsComponent},
{path:'exam/:id' ,component:ExamComponent},
{path:'student' ,component:StudentComponent},
{path:'newexam' ,component:NewexamComponent},
{path:'register' ,component:RestierComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
