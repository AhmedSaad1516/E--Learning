import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user:any= null
  constructor(private serv:UserServiceService,private toster:ToastrService) { }

  ngOnInit(): void {
    this.serv.user.subscribe((data:any)=>{
      if(data.role){
        this.user=data
       }
      

    })
    
    
  }
  logout(){
    const model={}
    this.serv.login(model).subscribe((data:any)=>{
      this.user=null
      this.serv.user.next(data)
      this.toster.show("Logut  is Success" , "" ,{
        disableTimeOut:false,
        titleClass:"toastr_title",
        messageClass:"toastr_message",
        timeOut:400,
        closeButton:true

      }) 
    })

  }
}
