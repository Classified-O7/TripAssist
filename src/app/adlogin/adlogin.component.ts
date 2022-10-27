import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css']
})
export class AdloginComponent implements OnInit {
  loginForm2=new FormGroup({
    email:new FormControl(),
    pass:new FormControl()
  })
  constructor(private router:Router,
    private toaster:ToastrService,
    private auth:AuthService) { }
  login(){
    if(this.loginForm2.value.email=="ad"&& this.loginForm2.value.pass=="ad")
    {
      this.toaster.success('Login successful')
      this.auth.createservice(this.loginForm2.value)
      this.router.navigateByUrl('/adlayout/admain')
    }
    else{
      this.toaster.error('Incorrect')
    }
  }

  ngOnInit(): void {
  }

}
