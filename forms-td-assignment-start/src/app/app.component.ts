import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;

  defaultOption = "Advanced";
  submitted= false;
  subscriptions = ['Basic', 'Advanced', 'Pro']
  signupData = {
    email: '',
    subscriptions: '',
    password: ''
  }

onSubmit( ) {
  this.submitted = true;
  this.signupData.email = this.signupForm.value.email;
  this.signupData.subscriptions = this.signupForm.value.subscriptions;
  this.signupData.password = this.signupForm.value.password;

  this.signupForm.reset();
}


}
