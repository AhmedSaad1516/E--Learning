import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compontent/navbar/navbar.component';
import { RestierComponent } from './compontent/restier/restier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';

import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './compontent/login/login.component';
import { HomeComponent } from './compontent/home/home.component';
import { NewexamComponent } from 'src/doctor/newexam/newexam.component';
import { SubjectsComponent } from 'src/doctor/subjects/subjects.component';
import { ExamComponent } from 'src/student/exam/exam.component';
import { StudentComponent } from 'src/doctor/student/student.component';

const MatrialCommon = [
  MatRadioModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatRadioModule,
  MatSidenavModule,
  MatStepperModule,
  MatTableModule,
  MatListModule,
  MatGridListModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestierComponent,
    LoginComponent,
    HomeComponent,
    NewexamComponent,
    SubjectsComponent,
    ExamComponent,
    StudentComponent
    
    
    
  ],
  
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatRadioModule,
    MatFormFieldModule,
    MatRadioModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatRadioModule,
  MatSidenavModule,
  MatStepperModule,
  MatTableModule,
  MatListModule,
  MatGridListModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatRadioModule,
  MatFormFieldModule,MatFormFieldModule,
  MatStepperModule,
  
  MatExpansionModule,
  MatGridListModule,MatListModule,
  MatTableModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
