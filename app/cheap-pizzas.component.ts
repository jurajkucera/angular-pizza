import { Component, OnInit } from '@angular/core';
import {Pizza} from "./pizza";
import {PizzaService} from "./pizza.service";

@Component({
    moduleId: module.id,
    selector: 'cheap-pizzas',
    templateUrl: 'cheap-pizzas.component.html'
})
export class CheapPizzasComponent implements OnInit {

    cheaperThanPrice: number;
    pizzas: Pizza[];

    constructor(private pizzaService: PizzaService) {
      this.cheaperThanPrice = 8;
    }

    ngOnInit() {
      this.pizzaService.getPizzas()
        .then(pizzas => this.pizzas = pizzas
    .filter(pizza => pizza.price < this.cheaperThanPrice));
    }

}
