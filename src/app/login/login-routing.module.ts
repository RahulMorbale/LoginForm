import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {path:'login',component:LoginFormComponent},
  {path:'user',component:UserFormComponent},
  {path:'',component:LoginFormComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
