import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public loginUser(user: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://192.168.137.1:8080/api/login', user, httpOptions);
  }

  public setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
