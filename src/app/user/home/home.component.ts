import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/service/app-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public appService: AppService, private router: Router) {}
  getName = localStorage.getItem('name');
  id = localStorage.getItem('id');
  doctors: any[] = [];
  ngOnInit(): void {
    this.getDoc();
  }
  // doctor_id: any = 1;
  getDoc() {
    this.appService.getDoctors().subscribe((data: any) => {
      this.doctors = data;
    });
  }
  reserveForm = new FormGroup({
    appointment: new FormControl(''),
    patient_id: new FormControl(this.id),
    doctor_id: new FormControl(this.target.value),
  });
  reserve(docId: any) {
    const myData = {
      result: this.reserveForm.value,
    };
    docId = docId.toString();
    myData.result.doctor_id = docId;
    this.appService.reserveApp(myData).subscribe({
      next(data) {
        // console.log(data);
        alert('you registered with doctor successfully');
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
