import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.items = this.userService.items;
  }

  // addUser(name: HTMLInputElement, age: HTMLInputElement){
  //     console.log(`Adding user name: ${name.value} and age: ${age.value}`);
  //     this.userService.postData(name.value,age.value);
  // }

  updateUser(key, name){
    this.userService.updateUserName(key, name)
  }

  removeUser(userKey){
    console.log(userKey);
    this.userService.deleteUser(userKey);
  }

  deleteAll(){
    this.userService.deleteAllUsers();
  }
}
