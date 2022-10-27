import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-adside',
  templateUrl: './adside.component.html',
  styleUrls: ['./adside.component.css']
})
export class AdsideComponent implements OnInit {

  constructor(private router:Router,
    private toaster:ToastrService,
    private auth:AuthService) { }
    logout(){
      this.toaster.success("logout successfully")
      this.auth.destroyservice()
      this.router.navigateByUrl('/adlogin')
    }

  ngOnInit(): void {
  }

}
