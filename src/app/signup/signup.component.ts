import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loginForm1=new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    pass:new FormControl(),
    passm:new FormControl()
  })
  constructor() { }
  create(){}

  ngOnInit(): void {
  }

}
