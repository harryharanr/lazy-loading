import { NgModule } from '@angular/core';
import {AppRoutingModule} from './lazy.routing';
import { LazyComponent } from './lazy.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { UserComponent } from './components/user/user.component';
import { ProsthesisComponent } from './components/prosthesis/prosthesis.component';
import { OptionsComponent } from './components/options/options.component';


@NgModule({
  declarations: [
    LazyComponent,
    NavbarComponent,
    HospitalComponent,
    UserComponent,
    ProsthesisComponent,
    OptionsComponent    
  ],
  imports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LazyComponent]
})
export class LazyModule { }
