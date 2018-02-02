import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodDataComponent } from 'app/fooddata-list/fooddata-list.component';
import { TomsComponent } from 'app/toms-component/toms.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodDataComponent,
    TomsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
