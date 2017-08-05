import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LazyComponent } from './lazy.component';

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: LazyComponent // Default Route
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