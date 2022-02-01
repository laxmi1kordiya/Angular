import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IfForComponent } from './if-for/if-for.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ArryformComponent } from './arryform/arryform.component';
import { Arryform2Component } from './arryform2/arryform2.component';
import { ServiceComponent } from './service/service.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IfForComponent,
    ReactiveformComponent,
    ArryformComponent,
    Arryform2Component,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
