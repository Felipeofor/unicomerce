import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environment";

// Interfaces
export interface Balance {
  name: string;
  description: string;
  codigo: string;
  price: number;
  stock: number;
  portada: string;
}

@Injectable({
  providedIn: 'root'
})

export class BalanceService {

  constructor(private http: HttpClient) {
  }

  url: string = environment.url;


  public getBalance(): Observable<Balance> {
    const url = `${this.url}/balance`;
    return this.http.get<Balance>(url);
  }



}
