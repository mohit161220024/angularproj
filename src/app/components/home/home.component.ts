import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Fname:string='Mohit';
  Lname:string='Agrawal';
  Age:number=21;
  salary:number=1000;
  constructor() { }

  ngOnInit(): void {
  }

}
