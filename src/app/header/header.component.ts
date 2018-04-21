import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Response } from '@angular/http'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private httpService: HttpService) { }

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
}
