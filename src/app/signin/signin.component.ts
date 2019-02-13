import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private username = "";
  private password = "";

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  onClickSignIn(){
    let credential = {
      "username" : this.username,
      "password" : this.password
    }
    
    console.log('credential: ' + credential);
    this.http.signIn(credential).subscribe(response => {
      console.log(response);
    })
  }

  onClick(){
    this.http.getUsers().subscribe(response => {
      console.log(response);
    })
  }

}
