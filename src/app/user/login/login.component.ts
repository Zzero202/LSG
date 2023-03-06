import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/service/app-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private AppService: AppService, private router: Router) {}

  ngOnInit(): void {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  login() {
    let that = this;
    this.AppService.userLogin(this.loginForm.value).subscribe({
      next(data: any) {
        localStorage.setItem('name', data.name);
        localStorage.setItem('id', data.id);
        that.router.navigate(['home']);
        console.log('login success');
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
