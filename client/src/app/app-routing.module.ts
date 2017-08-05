import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EagerComponent } from './eager/eager.component';


// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  { 
      path: '', 
      redirectTo: 'eager', 
      pathMatch: 'full' 
  },
  {
    path: 'eager',
    component: EagerComponent // Default Route
  },
  {
    path: 'lazy',
    loadChildren: 'app/lazy/lazy.module#LazyModule' // Default Route
  },
  { path: '**', component: EagerComponent } // "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }