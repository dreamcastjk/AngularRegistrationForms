import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorizeComponent} from './components/authorize/authorize.component';
import {RegisterComponent} from './components/register/register.component';


const routes: Routes = [
  {
    path: 'authorize',
    component: AuthorizeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: AuthorizeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
