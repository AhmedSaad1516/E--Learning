import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  dataSource:any
  datatabel:any
  displayedColumns:any
  constructor(private auth :UserServiceService) {
    this.displayedColumns=['position','name','subjectName','degree']
   }

  ngOnInit(): void {
    this.getStudent()
  }
getStudent(){
  this.auth.getAllData('students').subscribe((data:any)=>{

  this.dataSource=data?.map((student:any) =>{
    if(student?.subjects){
      return student?.subjects?.map((sub:any)=>{
        return{
          name:student.username,
          subjectName:sub.name,
          degree:sub.degree
        }
      })
    }else{
      return[{
        name:student.username,
        subjectName:" -- ",
        degree:" -- "
      }]
    }

  })
  this.datatabel = [];

this.dataSource.forEach((item:any)=>{
  item.forEach((subItem:any)=>{
    this.datatabel.push({
      name:subItem.name,
      subjectName:subItem.subjectName,
      degree:subItem.degree
    })
  })
})

  })
  
}
}
