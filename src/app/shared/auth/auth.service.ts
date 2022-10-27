import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  createservice(data:any){
    sessionStorage.setItem("email",data.email)
  }
  getservice(){
    return sessionStorage.getItem("email")
  }
  destroyservice(){
    sessionStorage.removeItem("email")
  }
}
