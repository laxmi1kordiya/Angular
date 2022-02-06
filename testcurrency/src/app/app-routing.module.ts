import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { PUBLIC_ROUTES } from './public/public.route';
import { SecureComponent } from './secure/secure.component';
import { SECURE_ROUTES } from './secure/secure.route';




const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path:'',component:PublicComponent,children:PUBLIC_ROUTES
      },
      
      {
        path:'',component:SecureComponent,children:SECURE_ROUTES
      },

    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
