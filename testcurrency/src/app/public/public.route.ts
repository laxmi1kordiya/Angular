import { NgModule } from '@angular/core';
import { RouterModule, Routes }from '@angular/router';
import { InstallComponent } from './install/install.component';




export const PUBLIC_ROUTES :Routes=[
    {
        path:'install',component:InstallComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(PUBLIC_ROUTES)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }