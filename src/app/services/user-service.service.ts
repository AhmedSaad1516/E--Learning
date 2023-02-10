import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
user= new Subject()
  constructor(private http:HttpClient) { }

  creatNewUser(model:any){
    return this.http.post(environment.Url +'students', model)
  }

  login(model:any){

    return this.http.put(environment.Url +'login/1', model) 
  }

 getAllData(type:string){
     return this.http.get(environment.Url+ type)
  }
  getStudent(id:number){
    return this.http.get(environment.Url+'students/'+id)

  }
updateStudent(id:number, model:any){

return this.http.put(environment.Url +'students/'+id , model)
}
  getLogin(){
    return this.http.get(environment.Url + 'login/1')

  }
}
