import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BalanceService} from "../../services/balance.service";
import {UltimasTransaccionesService} from "../../services/ultimasTransacciones.service";
import {LoginService} from "../../services/login.service";
import {getMatLegacyTooltipInvalidPositionError} from "@angular/material/legacy-tooltip";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(
    private balanceService: BalanceService,
    private ultimasTransaccionesService: UltimasTransaccionesService,
    public fb: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getBalance();
    this.getUltimasTransacciones();
  }

  form = this.fb.group({
    tipoDocumento: ['DNI', Validators.required],
    nroDocumento: ['12000333', Validators.required],
    clave: ['123456', Validators.required],
  });


  getBalance(){
    try {
      this.balanceService.getBalance().subscribe(
        (data) => {

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


  LogIn() {
    const documento = "DNI"
    const nroDocumento = "3223232"
    const clave = "123456";
    if (this.form.invalid) {
      return;
    } else {
      this.loginService.login(documento, nroDocumento, clave).subscribe(
        (data) => {
          console.log(data);
        }
      );
    }
  }

  registrate(){
    console.log('registrate')
  }

}
