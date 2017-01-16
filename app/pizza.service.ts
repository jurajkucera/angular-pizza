import { Injectable } from '@angular/core';
import {Pizza} from "./pizza";
import {PIZZAS} from "./mock-pizzas";

@Injectable()
export class PizzaService {

  getPizzas(): Promise<Pizza[]>{
    return Promise.resolve(PIZZAS);
  }

  getPizza(id: number): Promise<Pizza> {
    return this.getPizzas()
      .then(pizzas => pizzas.find(pizza => pizza.id === id));
  }

  constructor() { }

}
