import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../services/auth.service';
import {Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

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
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.flashMensaje.show('Usuario logueado correctamente',{cssClass:'alert-success',timeout:4000});
      this.router.navigate(['/productos']);
    }).catch((err) => {
      if ("The password is invalid or the user does not have a password."==err.message) {
        this.flashMensaje.show("La contraseña no es válida",{cssClass:'alert-danger',timeout:6000});
      }else{
        this.flashMensaje.show(err.message,{cssClass:'alert-danger',timeout:6000});
      }
     
      this.router.navigate(['/login']);
    });
  }

  onClickGoogleLogin() {
   this.authService.loginGoogle()
    .then((res) => {
        this.router.navigate(['/productos']);
    }).catch( err => console.log(err.message));
  }

 

  

}