import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserTable } from 'src/app/Model/UserTable';
import {Router} from '@angular/router';
@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css']
})
export class UserComponent implements OnInit {
  //Variable of type UserTable 
  users: UserTable[];
  constructor(private _userService: UserService,
    private _router: Router) { }

  ngOnInit(): void {
    this._userService.getAllUsers()
      .subscribe(data => {
        this.users = data;});
  }
  addUser() {
    this._router.navigate(['AddUser']);
  }
    deleteUser(){
      
      this._userService.deleteUser(Object).subscribe(data=>{console.log("deleted");
    this.ngOnInit();
  })
    }
  }
    // this.userService.getUsers()
  //       .subscribe(data => {
  //         this.users = data;
  //       });
  //GetMethod
  // getAllUsersFun() {
  //   this._userService.getAllUsers()
  //     .subscribe(data => { this.users = data });
  // }
  //deleteItem(id:number, index:number) {
 // this.userService.deleteUser(id).subscribe(response =>{
   // this.users.splice(index, 1);
//});
//}


