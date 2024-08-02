import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { RegistrationComponent } from './registration/registration.component';
import { TableComponent } from './table/table.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'', component:RegistrationComponent
  },
  {
    path:'**', component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
