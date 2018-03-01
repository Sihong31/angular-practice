import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectNames = ['Test'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      // 'projectName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'projectName': new FormControl(null, [Validators.required], this.forbiddenNames.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Critical')
    })
  }

  // forbiddenNames(control: FormControl): {[s: string]: boolean} {
  //   console.log(this.forbiddenProjectNames.indexOf(control.value))
  //   if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
  //     return {'projectNameIsForbidden': true};
  //   } else {
  //     return null;
  //   }
  // }

  forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Test") {
          resolve({'projectNameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
