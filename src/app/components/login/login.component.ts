import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../services/auth.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
 
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      
      this.router.navigate(['/productos']);
    }).catch((err) => {
     
      this.router.navigate(['/login']);
    });
  }

  onClickGoogleLogin() {
   this.authService.loginGoogle()
    .then((res) => {
        this.router.navigate(['/privado']);
    }).catch( err => console.log(err.message));
  }

 

  

}