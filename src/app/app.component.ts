import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyD1aKKFnB0JQ6idxdakvJ-HtO3W-0xz7QA",
      authDomain: "udemy-ng-http-2b8e2.firebaseapp.com"
    });
  }
}
