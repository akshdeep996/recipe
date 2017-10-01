import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './root/header/header.component'
import { ShoppingComponent } from './root/shopping/shopping.component';
import { RecipiComponent } from './root/recipi/recipi.component'

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    ShoppingComponent,
    HeaderComponent,
    RecipiComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
