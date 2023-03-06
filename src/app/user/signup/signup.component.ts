import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { AppService } from 'src/app/service/app-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(public AppService: AppService, private router: Router) {}

  ngOnInit(): void {}
  AddUserForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  signUp() {
    let that = this;
    this.AppService.addUser(this.AddUserForm.value).subscribe({
      next(data) {
        console.log(data);
        that.router.navigate(['login']);
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
