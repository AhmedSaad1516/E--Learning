import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/services/user-service.service';
import { QeunNameService } from 'src/services/qeun-name.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private serv:QeunNameService , private user:UserServiceService , private toster:ToastrService) { }
subjects:any[]=[]
userLogin:any
  ngOnInit(): void {
    this.getSubjects()
    this.getUserInfo()
  }

  getSubjects(){
    this.serv.getAllSubjects().subscribe((data:any)=>{
      this.subjects=data
    })
  }
  getUserInfo(){
    this.user.getLogin().subscribe((data:any)=>{
      this.userLogin=data
    })

  }
  delete(index:number){
    let id = this.subjects[index].id 
this.subjects.splice(index, 1)
this.serv.deletSubject(id).subscribe((data:any)=>{
   this.toster.success('تم حذف المادة بنجاح')
})
  }
}
