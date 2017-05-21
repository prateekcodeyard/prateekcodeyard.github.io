import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { CheckoutComponent } from './checkout.component';
import { routing } from './app.routing';
import { HomeComponent } from './home.component';
import { DataServeService } from './data-serve.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CheckoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [DataServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
