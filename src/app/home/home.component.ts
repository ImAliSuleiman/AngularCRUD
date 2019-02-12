import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Object;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // start query automatically
    this.getUsersFromService()
  }

  private getUsersFromService(){
    this.httpService.getUsers().subscribe(data => {
      console.log('getUser request completed!');
      this.users = data;
      console.log(this.users);
    })
  }

  onClickRefreshList(){
    this.getUsersFromService()
  }
}
