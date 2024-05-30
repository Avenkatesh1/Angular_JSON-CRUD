import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
[x: string]: any;
  title = 'Angualr_JSON-crud';
  userObj:user = new user();

  http =inject(HttpClient);
  cityList$:Observable<string[]> = new Observable<string[]>();
  stateList$:Observable<string[]> = new Observable<string[]>();
  userList:user []=[];
  // constructor(){}
  
  ngOnInit(): void {
    this.cityList$ = this.http.get<string[]>("http://localhost:3000/cities");
    this.stateList$ = this.http.get<string[]>("http://localhost:3000/stateList");
    this.getUser();
  }
   
  getUser(){
    this.http.get<user[]>("http://localhost:3000/user").subscribe((res:user[])=>{
      this.userList = res;
    })
  }

  saveData(){
    this.http.get<user>("http://localhost:3000/createList").subscribe((res:user)=>{
       alert("User Date Create Successfully");
       this.userList.push(this.userObj)
    })
  }
  onDelete(id:number){
    const isDelete = confirm("Are You Sure, You Want To Delete..");
    if(isDelete){
      this.http.delete<user>("http://localhost:3000/deleteList").subscribe((res:user)=>{
      alert("User Date Delete Successfully");
     });
     const currentdata = this.userList.findIndex(m=> m.userid === this.userList.unshift());
      this.userList.splice(currentdata,1);
    }
  }
  onEdit(){

  }

}

  export class user {
    userid:number;
    userName:string;
    FName:string;
    LName:string;
    City:string;
    State:string;
    Pincode:string

    constructor() {
      this.userid =0;
      this.userName ="";
      this.FName ="";
      this.LName ="";
      this.City ="";
      this.State ="";
      this.Pincode ="";
    }
  }
