import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'registrar-home',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  form = this.fb.group({
    tipoDocumento: ['DNI', Validators.required],
    nroDocumento: ['12000333', Validators.required],
    clave: [null, Validators.required],
  });


  registrar() {
    this.router.navigate(['login']);
  }

  volver() {
    this.router.navigate(['login']);
  }

}
