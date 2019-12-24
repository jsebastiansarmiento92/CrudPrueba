
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router } from '@angular/router';
//import {FlashMessagesService} from 'angular2-flash-messages';


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
    //public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
     console.log(res);
     this.router.navigate(['/productos']);
     
    }).catch( (err) => {
      console.log(err);
    }); 
  }
}