import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/service/app-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    public appService: AppService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}
  id = localStorage.getItem('id');
  profile: any;

  ngOnInit(): void {
    this.appService.getProfile(this.id).subscribe((data) => {
      this.profile = data;
      console.log(data);
    });
  }
}
