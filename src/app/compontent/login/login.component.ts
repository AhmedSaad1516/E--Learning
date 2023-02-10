import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from'@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginUserForm!:FormGroup;
  user:any[]=[];
  type:string = "students";
  
    constructor(private fb:FormBuilder , private serv :UserServiceService ,private router:Router ,private toster:ToastrService) { 
     
    }
  ngOnInit(): void {
    this.getUsers();
    this.creatForm()
    
  }

  creatForm(){
    this.LoginUserForm=this.fb.group({
      type:[this.type],
      email:['' ,[Validators.required , Validators.email]],
      password:['' ,[Validators.required]],
    
    
    })
    }
    getRole(event:any){
      this.type= event.value
      this.getUsers()

    }

    getUsers(){
      this.serv.getAllData(this.type).subscribe((data:any)=>{
    this.user=data
      })
    }


    Submit(){
     
    
      
      let index=this.user.findIndex(item=>item.email ==this.LoginUserForm.value.email  && item.password == this.LoginUserForm.value.password  )
      if(index == -1){
        this.toster.error("email is req or password is req ",  "", {
               disableTimeOut:false,
              titleClass:"toastr_title",
              messageClass:"toastr_message",
              timeOut:5000,
              closeButton:true
        })
      }else{
    const model={
      username:this.user[index].username,
      role:this.type,
      userid:this.user[index].id
    }
    
        this.serv.login(model).subscribe((data:any)=>{
          this.serv.user.next(data)
            this.toster.success("Login is Success" , "" ,{
              disableTimeOut:false,
              titleClass:"toastr_title",
              messageClass:"toastr_message",
              timeOut:5000,
              closeButton:true
    
            })  
          this.router.navigateByUrl('/subject');
      
        })
      }
     
    }
}
