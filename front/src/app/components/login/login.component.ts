import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BalanceService} from "../../services/balance.service";
import {UltimasTransaccionesService} from "../../services/ultimasTransacciones.service";
import {provideRouter} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    documento: new FormControl('', [Validators.required, Validators.email]),
    numeroDocumento: new FormControl('', [Validators.required, Validators.minLength(6)]),
    clave: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private balanceService: BalanceService,
    private ultimasTransaccionesService: UltimasTransaccionesService
    ) { }

  ngOnInit(): void {
    this.getBalance();
    this.getUltimasTransacciones();
  }

  getBalance(){
    try {
      this.balanceService.getBalance().subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    catch (e) {
      console.log(e);
    }
  }

  getUltimasTransacciones(){
    try {
      this.ultimasTransaccionesService.getUltimasTransacciones().subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    catch (e) {
      console.log(e);
    }
  }


  LogIn(){
    console.log('login')
  }

  registrate(){
    console.log('registrate')
  }

}
