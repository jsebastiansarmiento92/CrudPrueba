
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { messaging } from 'firebase';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;
  constructor( 
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
    this.flashMensaje.show('Usuario creado correctamente',{cssClass:'alert-success',timeout:4000});
     this.router.navigate(['/productos']);
     
    }).catch( (err) => {
      if ("The email address is already in use by another account."==err.message) {
        this.flashMensaje.show("La dirección de correo electrónico ya está en uso por otra cuenta",{cssClass:'alert-danger',timeout:6000});
      }

      
    }); 
  }
}