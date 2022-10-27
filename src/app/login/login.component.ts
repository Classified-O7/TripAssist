import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    email:new FormControl(),
    pass:new FormControl()
  })

  constructor(private toaster:ToastrService, private router:Router,
    private auth:AuthService) { }
  forgot(){
    this.toaster.warning('please contact admin','')
  }
  login(){
    if(this.loginForm.value.email=="a" && this.loginForm.value.pass=="a")
      {
        this.toaster.success("login successful")
        this.auth.createservice(this.loginForm.value)
        this.router.navigateByUrl("/layout/main")
      }
    else
    {
      this.toaster.error("Incorrect email or password")
    }
    }

  ngOnInit(): void {
  }

}
