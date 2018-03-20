import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';


import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    FormsModule,
    // CommonModule,
    AuthRoutingModule
  ]
})

export class AuthModule {

}
