import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IfForComponent } from './if-for/if-for.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ArryformComponent } from './arryform/arryform.component';

@NgModule({
  declarations: [
    AppComponent,
    IfForComponent,
    ReactiveformComponent,
    ArryformComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
