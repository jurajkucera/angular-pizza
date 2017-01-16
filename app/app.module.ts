import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PizzaComponent }  from './pizzas.component';
import {FormsModule} from "@angular/forms";
import {PizzaDetailComponent} from "./pizza-detail.component";
import {PizzaService} from "./pizza.service";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {CheapPizzasComponent} from "./cheap-pizzas.component";

@NgModule({
  imports:      [ BrowserModule,
                FormsModule,
                RouterModule.forRoot([
                  {
                    path: 'pizzas',
                    component: PizzaComponent
                  },

                  {
                    path: 'cheap-pizzas',
                    component: CheapPizzasComponent
                  },

                  {
                    path: '',
                    redirectTo: '/cheap-pizzas',
                    pathMatch: 'full'
                  }

                ])],
  declarations: [ PizzaComponent, PizzaDetailComponent, AppComponent, CheapPizzasComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PizzaService]
})
export class AppModule { }
