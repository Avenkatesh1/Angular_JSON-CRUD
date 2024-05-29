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
  title = 'Angualr_JSON-crud';
  userObj:user = new user();

  http =inject(HttpClient);
  cityList$:Observable<string[]> = new Observable<string[]>();
  stateList$:Observable<string[]> = new Observable<string[]>();
  // constructor(){}
  
  ngOnInit(): void {
    this.cityList$ = this.http.get<string[]>("http://localhost:3000/cities");
    this.stateList$ = this.http.get<string[]>("http://localhost:3000/stateList");
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
