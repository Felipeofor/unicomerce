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

    public login(tipoDocumento: string, nroDocumento: string, clave: string): Observable<any> {
      const url = `${this.url}/login`;
      console.log(JSON.stringify({tipoDocumento: tipoDocumento, nroDocumento: nroDocumento, clave: clave}));
      return this.http.post<any>(url, JSON.stringify({tipoDocumento: tipoDocumento, nroDocumento: nroDocumento, clave: clave}), {responseType: 'text' as 'json'});
    }

}
