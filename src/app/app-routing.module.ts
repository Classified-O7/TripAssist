import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './layout/aboutus/aboutus.component';
import { ContactComponent } from './layout/contact/contact.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './layout/main/main.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './layout/services/services.component';
import { SignupComponent } from './signup/signup.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdlayoutComponent } from './adlayout/adlayout.component';
import { AdmainComponent } from './adlayout/admain/admain.component';
import { AdprofileComponent } from './adlayout/adprofile/adprofile.component';
import { AdspendComponent } from './adlayout/adspend/adspend.component';
import { AddataComponent } from './adlayout/addata/addata.component';
import { AuthGuard } from './authguard/authguard';

const routes: Routes = [
  {path:'', redirectTo:'/layout/main', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'adlogin', component:AdloginComponent},
  {path:'layout', component:LayoutComponent, children:
    [
      {path:'main', component:MainComponent},
      {path:'services', component:ServicesComponent},
      {path:'aboutus', component:AboutusComponent},
      {path:'contact', component:ContactComponent}
    ]
  },
  {path:'adlayout', component:AdlayoutComponent, canActivate:[AuthGuard], children:
    [
      {path:'admain', component:AdmainComponent},
      {path:'adprofile', component:AdprofileComponent},
      {path:'adspend', component:AdspendComponent},
      {path:'addata', component:AddataComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
