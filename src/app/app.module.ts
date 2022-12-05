import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './componenti/home/home.component';
import { LoginComponent } from './componenti/login/login.component';
import { RegisterComponent } from './componenti/register/register.component';
import { CarrelloComponent } from './componenti/carrello/carrello.component';
import { ProdottoComponent } from './componenti/prodotto/prodotto.component';
import { DettaglioProdottoComponent } from './componenti/dettaglio-prodotto/dettaglio-prodotto.component';
import { SchedaProdottoComponent } from './componenti/scheda-prodotto/scheda-prodotto.component';
import { ViewAdminComponent } from './componenti/view-admin/view-admin.component';
import { ViewDipendenteComponent } from './componenti/view-dipendente/view-dipendente.component';
import { ViewOspiteComponent } from './componenti/view-ospite/view-ospite.component';
import { CardComponent } from './componenti/shared/card/card.component';
import { ReactiveCardComponent } from './componenti/shared/reactive-card/reactive-card.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CarrelloComponent,
    ProdottoComponent,
    DettaglioProdottoComponent,
    SchedaProdottoComponent,
    ViewAdminComponent,
    ViewDipendenteComponent,
    ViewOspiteComponent,
    CardComponent,
    ReactiveCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
