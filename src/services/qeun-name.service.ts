import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QeunNameService {

  constructor(private http:HttpClient) { }

  creatSub(model:any){
    return this.http.post(environment.Url +'sub' ,model)
  }
  updateSub(model:any , id:number){
    return this.http.put(environment.Url +'sub/'+ id ,model)

  }
  getAllSubjects(){
    return this.http.get(environment.Url + 'sub')
  }
  getAllSubjectsId(id:number){
    return this.http.get(environment.Url + 'sub/'+id)
  }

  deletSubject(id:number){
    return this.http.delete(environment.Url+'sub/'+id)
  }
}

