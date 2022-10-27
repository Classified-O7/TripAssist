import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { TopComponent } from './layout/top/top.component';
import { BottomComponent } from './layout/bottom/bottom.component';
import { SideComponent } from './layout/side/side.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { ServicesComponent } from './layout/services/services.component';
import { AboutusComponent } from './layout/aboutus/aboutus.component';
import { ContactComponent } from './layout/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AdlayoutComponent } from './adlayout/adlayout.component';
import { AdmainComponent } from './adlayout/admain/admain.component';
import { AddownComponent } from './adlayout/addown/addown.component';
import { AdtopComponent } from './adlayout/adtop/adtop.component';
import { AdsideComponent } from './adlayout/adside/adside.component';
import { AdprofileComponent } from './adlayout/adprofile/adprofile.component';
import { AdspendComponent } from './adlayout/adspend/adspend.component';
import { AddataComponent } from './adlayout/addata/addata.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LayoutComponent,
    TopComponent,
    BottomComponent,
    SideComponent,
    ServicesComponent,
    AboutusComponent,
    ContactComponent,
    LoginComponent,
    AdloginComponent,
    SignupComponent,
    AdlayoutComponent,
    AdmainComponent,
    AddownComponent,
    AdtopComponent,
    AdsideComponent,
    AdprofileComponent,
    AdspendComponent,
    AddataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
