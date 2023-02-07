import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environment";

//Modelos

@Injectable()
  export class LoginService {

  constructor(private http: HttpClient) {
  }

  url: string = environment.url;


    public login(user: string, password: string): Observable<any> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      console.log(user, password)
      return this.http.post<any>(`${this.url}/login`, {user, password}, {headers});
    }



}
