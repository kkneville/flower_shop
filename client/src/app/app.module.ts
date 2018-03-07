import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { RosterComponent } from './roster/roster.component';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';
import { BasketComponent } from './basket/basket.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    RosterComponent,
    LoginComponent,
    PortalComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
