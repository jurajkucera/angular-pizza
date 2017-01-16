import {Component, OnInit} from '@angular/core';
import {Pizza} from "./pizza";
import {PizzaService} from "./pizza.service";


@Component({
  selector: 'my-pizzas',
  template: `
    <my-pizza-detail [pizza] = selectedPizza></my-pizza-detail>
   <ul class="pizzas">
   <li *ngFor="let pizza of pizzas"
    (click)="onSelect(pizza)">
    <span class="badge">{{pizza.price}}</span>
    {{pizza.name}}
    </li>
   </ul> `,
  styleUrls:['app/pizza.css']
})
export class PizzaComponent implements OnInit {

  ngOnInit(): void {
   this.pizzaService.getPizzas()
      .then(pizzas => this.pizzas = pizzas);
  }

  constructor(private pizzaService: PizzaService){}

  pizzas: Pizza[];


  selectedPizza: Pizza;

  onSelect(pizza: Pizza): void {
    this.selectedPizza = pizza;
  }

}
