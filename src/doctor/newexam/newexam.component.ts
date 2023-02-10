import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { QeunNameService } from 'src/services/qeun-name.service';

@Component({
  selector: 'app-newexam',
  templateUrl: './newexam.component.html',
  styleUrls: ['./newexam.component.css']
})
export class NewexamComponent implements OnInit {
name=new FormControl("")
qeuForm!:FormGroup
qeus:any[]=[];
corredId:any
subName = ""
stepperIndex= 0;
startAdd:boolean=false;
previwe:boolean=false;
id:any
  constructor(private fb:FormBuilder ,private toster:ToastrService,private serv:QeunNameService) { }

  ngOnInit(): void {
    this.creatForm()
  }
creatForm(){
this.qeuForm=this.fb.group({

  qeu:['',Validators.required], 
   anser1:['',Validators.required],
   anser2:['',Validators.required],
   anser3:['',Validators.required],
   anser4:['',Validators.required],





})
}
creatqeun(){
 if(this.corredId){
  const model={
    qeun:this.qeuForm.value.qeu,
    anser1:this.qeuForm.value.anser1,
    anser2:this.qeuForm.value.anser2,
    anser3:this.qeuForm.value.anser3,
    anser4:this.qeuForm.value.anser4,

    corrdAnser:this.qeuForm.value[this.corredId]
  }
  this.qeus.push(model)
  this.qeuForm.reset()
  this.toster.success('تم الحفظ')

 }else{
   this.toster.error('يرجي اختيار الأجابه الصحيحة')
 }
 console.log(this.qeus);
 
}
start(){
   if(this.name.value == ""){
    this.toster.error('يرجي اختيار اسم المادة')
   }else{
    
    this.startAdd=true
    this.subName = this.name.value
    this.toster.success('تم أختيار اسم المادة')

   }
   if(this.startAdd){
    this.stepperIndex= 1;

   }

}


clearform(){
  this.qeuForm.reset()
}
cancel(){
  this.qeuForm.reset()
  this.qeus = [];
  this.subName= "";
  this.name.reset();
  this.stepperIndex= 0;
  this.startAdd=false;
}
getcorred(event:any){
  this.corredId= event.value
  
  
}

sub(){
const model={
  name:this.subName,
  AllQen:this.qeus
}

if(this.previwe){
  this.stepperIndex= 2;
this.toster.info('تم الأنتهاء من الأسئلة')
 }else{
  this.serv.creatSub(model).subscribe((data:any)=>{
    this.previwe=true;
    this.id=data.id
    })
 }
}
delet(index:number){
  this.qeus.splice(index ,1)
  const model={
    name:this.subName,
    AllQen:this.qeus
  }

this.serv.updateSub(model,this.id).subscribe((data:any)=>{
  this.toster.success('تم حذف السؤال بنجاح')
})
}
}
