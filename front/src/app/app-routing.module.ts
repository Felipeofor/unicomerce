import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrarComponent} from './components/registrar/registrar.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'registrar', component: RegistrarComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
