import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/service/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedInUser: string | null;
  constructor(private router: Router, private alertService: AlertifyService) { }

  ngOnInit(): void {
  }

  loggedIn() {
    this.loggedInUser = localStorage.getItem('token');
    return this.loggedInUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    this.alertService.error('you are logged out successfully!!')
    this.router.navigate(['/']);
  }
}
