import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environment";

//Modelos

@Injectable({
  providedIn: 'root'
})
  export class LoginService {

  constructor(private http: HttpClient) {
  }

  url: string = environment.url;

    public login(tipoDocumento: string , nroDocumento: string , clave: string ): Observable<any> {
      const url = `${this.url}/login`;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      });
      return this.http.post<any>(url, {tipoDocumento, nroDocumento, clave}, {headers});
    }

}
