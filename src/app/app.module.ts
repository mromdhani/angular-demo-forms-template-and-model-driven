import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { CalculetteTemplateComponent } from './components/calculette-template/calculette-template.component';
import { CalculetteModelComponent } from './components/calculette-model/calculette-model.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculetteTemplateComponent,
    CalculetteModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
