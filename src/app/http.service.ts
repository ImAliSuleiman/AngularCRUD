import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsers() {
    console.log('getUser request started!');
    return this.http.get('http://localhost/slim/public/readdata');
    // return this.http.get('https://reqres.in/api/users');
  }

  signIn(username, password){
    console.log('Sign In started!');
    console.log('username: ' + username + ", password: " + password);
    return this.http.get('http://localhost/slim/public/signin?username=' + username + "&password=" + password);
  }

  registerUser(user) {
    console.log('getUser request started!');
    return this.http.post('http://localhost/slim/public/signup', user);
  }

  deleteUser(username) {
    console.log('getUser request started!');
    return this.http.delete('http://localhost/slim/public/deleteuser/' + username);
  }
}
