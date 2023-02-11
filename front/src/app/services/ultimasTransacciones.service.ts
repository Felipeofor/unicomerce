import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environment";

//Interfaces
export interface UltimasTransacciones {
  name: String,
  descripcion: String,
  codigo: String,
  price: Number,
  stock: Number,
  porcentaje: Number,
  fecha: Date,
}

@Injectable({
  providedIn: 'root'
})
export class UltimasTransaccionesService {

  constructor(private http: HttpClient) {
  }

  url: string = environment.url;


  public getUltimasTransacciones(): Observable<UltimasTransacciones> {
    const url = `${this.url}/ultimasTransacciones`;
    return this.http.get<UltimasTransacciones>(url);
  }
}
