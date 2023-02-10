import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MTIUniversity';
  constructor(private serv:UserServiceService){

  }
  ngOnInit(): void {
    this.getUserData()
  }
  
  getUserData(){
    this.serv.getLogin().subscribe((data:any)=>{
      this.serv.user.next(data)
    })
  }
}
