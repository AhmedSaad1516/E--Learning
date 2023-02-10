import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/services/user-service.service';
import { QeunNameService } from 'src/services/qeun-name.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
id:any
subDetalis:any
userLogin:any
total:number =0;
showRes:boolean=false
stundentInfo:any
userSubject:any[] =[]
validExam:boolean=true
  constructor(private rout :ActivatedRoute , private serv:QeunNameService ,private toster:ToastrService
    ,private auth:UserServiceService) { 
    this.id= this.rout.snapshot.paramMap.get('id')
    this.getSubject()
    this.getLogedinUser()

  }

  ngOnInit(): void {
    
  }
getSubject(){
  this.serv.getAllSubjectsId(this.id).subscribe((data:any)=>{
  this.subDetalis =data
  })
}

checkValidExam(){
  for(let x in  this.userSubject){
    if(this.userSubject[x].id == this.id){
      this.total= this.userSubject[x].degree
     this.validExam = false
     this.toster.warning('لقد انجزت هذا الأختبار مسبقا ')
    }
  }
}
delet(index:number){
  this.subDetalis.AllQen.splice(index ,1)
  const model={
    name:this.subDetalis.name,
    AllQen:this.subDetalis.AllQen
  }

this.serv.updateSub(model,this.id).subscribe((data:any)=>{
  this.toster.success('تم حذف السؤال بنجاح')
})
}

getLogedinUser(){
  this.auth.getLogin().subscribe((data:any)=>{
    this.userLogin=data
    this.getUserData()

  })

}
getUserData(){
  this.auth.getStudent(this.userLogin.userid).subscribe((data:any)=>{
  this.stundentInfo = data
  this.userSubject = data?.subjects ? data?.subjects : [] 
  this.checkValidExam()
  })
}

getAnser(event:any){
  let value =event.value,
  qunIndex=event.source.name;
  this.subDetalis.AllQen[qunIndex].studentAnser = value
  

}
getRes(){
  this.total= 0
for(let x in this.subDetalis.AllQen){
  if(this.subDetalis.AllQen[x].studentAnser == this.subDetalis.AllQen[x].corrdAnser){
     this.total++
  }
}
this.showRes=true
this.userSubject.push({
  name:this.subDetalis.name,
  id:this.id,
  degree:this.total
})
const model={
  username:this.stundentInfo.username,
  email:this.stundentInfo.email,
  password:this.stundentInfo.password,
  subjects:this.userSubject
}

this.auth.updateStudent(this.userLogin.userid , model).subscribe(data =>{
  this.toster.success('تم تسجيل النتيجة بنجاح')

})

}
}
