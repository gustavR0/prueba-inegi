import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitlalliComponent } from './citlalli/citlalli.component';
import { ArelyComponent } from './arely/arely.component';

@NgModule({
  declarations: [
    AppComponent,
    CitlalliComponent,
    ArelyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
