import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/service/app-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-doctors',
  templateUrl: './add-doctors.component.html',
  styleUrls: ['./add-doctors.component.css'],
})
export class AddDoctorsComponent implements OnInit {
  disabled:any;
  constructor(public appService: AppService, private router: Router) {}
  addDoctorsForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    type: new FormControl('doctor'),
  });
  ngOnInit(): void {}
  addDoc() {
    this.appService.addDoctor(this.addDoctorsForm.value).subscribe({
      next(data) {
        console.log(data);
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
