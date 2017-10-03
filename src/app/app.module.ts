import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './root/header/header.component'
import { ShoppingComponent } from './root/shopping/shopping.component';
import { RecipiComponent } from './root/recipi/recipi.component';
import { RecipiListComponent } from './root/recipi/recipi-list/recipi-list.component';
import { RecipiDetailComponent } from './root/recipi/recipi-detail/recipi-detail.component';
import { RecipiItemComponent } from './root/recipi/recipi-list/recipi-item/recipi-item.component';
import { ShoppingEditComponent } from './root/shopping/shopping-edit/shopping-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    ShoppingComponent,
    HeaderComponent,
    RecipiComponent,
    RecipiListComponent,
    RecipiDetailComponent,
    RecipiItemComponent,
    ShoppingEditComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
