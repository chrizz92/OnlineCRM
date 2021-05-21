import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title = "This is users component";

  constructor() { }

  ngOnInit(): void {
  }

  updateValue(){
    this.title = "Method updateValue was called";
  }

}
