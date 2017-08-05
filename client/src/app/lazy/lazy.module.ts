import { NgModule } from '@angular/core';
import {AppRoutingModule} from './lazy.routing';
import { LazyComponent } from './lazy.component';


@NgModule({
  declarations: [
    LazyComponent    
  ],
  imports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LazyComponent]
})
export class LazyModule { }
