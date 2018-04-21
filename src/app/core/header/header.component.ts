import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { Response } from '@angular/http'
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private httpService: HttpService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSave(){
    this.httpService.saveRecipies().subscribe(
      (response: Response) => console.log(response),
      (error: Response) => console.log(error)
    )
  }

  onFetch() {
    this.httpService.loadRecipies().subscribe();
  }

  onLogout(){
    this.authService.logout();
  }
}
