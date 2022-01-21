import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }


  apiUrl='http://localhost:3000/user';

  getAllData():Observable<any>
{
    return this._http.get(`${this.apiUrl}`);

}


 // check user

 checkUser(x: any): Observable<any> {
  return this._http.post(`${this.apiUrl}/login`, x);
}
}
