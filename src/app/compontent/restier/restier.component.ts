import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from'@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-restier',
  templateUrl: './restier.component.html',
  styleUrls: ['./restier.component.css']
})
export class RestierComponent implements OnInit {
userForm!:FormGroup;
students:any[]=[];
type:string
  constructor(private fb:FormBuilder , private serv :UserServiceService ,private router:Router ,private toster:ToastrService) { }

  ngOnInit(): void {

    this.creat()
    this.getStudents()
  }
creat(){
this.userForm=this.fb.group({

  username:['' ,[Validators.required]],
  email:['' ,[Validators.required , Validators.email]],
  password:['' ,[Validators.required]],
  conpassword:['' ,[Validators.required]],

})
}

Submit(){
  const model={
    username:this.userForm.value.username,

    email:this.userForm.value.email,
    password:this.userForm.value.password,

  }
  let index=this.students.findIndex(item=>item.email ==this.userForm.value.email )
  if(index !== -1){
    
    this.toster.error("الايميل متكرر",  "", {
           disableTimeOut:false,
          titleClass:"toastr_title",
          messageClass:"toastr_message",
          timeOut:5000,
          closeButton:true
    })

  }else{

    this.serv.creatNewUser(model).subscribe((data:any)=>{

        this.toster.success("Login is Success" , "" ,{
          disableTimeOut:false,
          titleClass:"toastr_title",
          messageClass:"toastr_message",
          timeOut:5000,
          closeButton:true

        })  

  
    })
  }
 
}
getStudents(){
  this.serv.getAllData('students').subscribe((data:any)=>{
this.students=data
  })
}
}
