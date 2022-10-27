import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth/auth.service';

@Injectable(
    {
        providedIn:'root'
    }
    )
export class AuthGuard implements CanActivate{
    constructor(private router:Router,
            private toaster:ToastrService,
            private authservice:AuthService){}
    canActivate():boolean {
            if(this.authservice.getservice()!=null)
            {
                return true
            }
            else
            {
                this.router.navigateByUrl('/adlogin')
                this.toaster.warning('Please login first', 'Over Smart huh?')
                return false
            }
        }
    }