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

  public login(tipoDocumento: string | null | undefined, nroDocumento: string | null | undefined, clave: string | null | undefined): Observable<any> {
    const url = `${this.url}/login`;
    console.log(tipoDocumento, nroDocumento, clave, 'antes de enviar');
    return this.http.post<any>(url, {
      tipoDocumento: tipoDocumento,
      nroDocumento: nroDocumento,
      clave: clave
    }, {responseType: 'text' as 'json'});
  }

  public registrar(tipoDocumento: string | null | undefined, nroDocumento: string | null | undefined, clave: string | null | undefined): Observable<any> {
    const url = `${this.url}/login/register`;
    return this.http.post<any>(url, JSON.stringify({
      tipoDocumento: tipoDocumento,
      nroDocumento: nroDocumento,
      clave: clave
    }), {responseType: 'text' as 'json'});
  }

}
