import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LazyComponent } from './lazy.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { UserComponent } from './components/user/user.component';
import { ProsthesisComponent } from './components/prosthesis/prosthesis.component';
import { OptionsComponent } from './components/options/options.component';

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: LazyComponent ,// Default Route
    children:[
      {
        path:'hospital',
        component:HospitalComponent
      },
      {
        path:'user',
        component:UserComponent
      },
      {
        path:'prosthesis',
        component:ProsthesisComponent
      },
      {
        path:'options',
        component:OptionsComponent
      }
    ]
  },
  {
    path:'navbar',
    component:NavbarComponent
  }
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }