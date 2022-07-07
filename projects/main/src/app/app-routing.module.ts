import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    component : LoginComponent
  },
  {
    path : 'contacts',
    pathMatch : 'full',
    loadChildren : () => import('mfe1/ContactsModule').then((m)=> {
      return m.ContactsModule
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
