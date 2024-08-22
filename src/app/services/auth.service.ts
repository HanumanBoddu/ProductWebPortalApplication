import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  private apiUrl='http://localhost:3000/users';
  signUp(userData:any):Observable<any>{
    return this.http.post(this.apiUrl,userData);
  }
  getUsers():Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
