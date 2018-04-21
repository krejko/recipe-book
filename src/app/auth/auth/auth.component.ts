import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @ViewChild("f") form : NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(){
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.authService.signUpUser(email, password);
  }

  onSignIn(){
    console.log("sign in")
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.authService.signInUser(email, password);
  }
}