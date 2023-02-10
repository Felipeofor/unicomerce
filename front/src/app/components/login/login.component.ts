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
    const documento = this.form.get("tipoDocumento")?.value;
    const nroDocumento = this.form.get('nroDocumento')?.value;
    const clave = this.form.get('clave')?.value;
    if (this.form.invalid) {
      console.log('invalido')
    } else {
      this.loginService.login(documento, nroDocumento, clave).subscribe(
        (data) => {
          switch (data){
            case 'Usuario no existe':
              console.log('Usuario no existe');
              break;
            case 'Usuario o contraseña incorrectos':
              console.log('Usuario o contraseña incorrectos');
              break;
            case 'Usuario existente':
              console.log('Usuario existente');
              break;
          }
        }
      );
    }
  }

  registrate(){
    console.log('registrate')
  }

}
