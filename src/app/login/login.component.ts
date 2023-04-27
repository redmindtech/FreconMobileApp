import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./../../styles.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    // Submit login request to server
    console.log(this.username);
    if (this.username=="admin" && this.password=="admin") {
      this.router.navigate(['/product']);
    }
  }
}
