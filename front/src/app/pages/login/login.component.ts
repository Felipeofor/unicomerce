import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(
    public fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  form = this.fb.group({
    tipoDocumento: ['DNI', Validators.required],
    nroDocumento: ['21321999', Validators.required],
    clave: [null, Validators.required],
  });


  LogIn() {
    if (this.form.valid) {
      this.router.navigate(['home']);
    }
  }

  registrate() {
    this.router.navigate(['registrar']);
  }

}
