import {Component, OnInit, Input} from '@angular/core';
import {Pizza} from "./pizza";

@Component({
    moduleId: module.id,
    selector: 'my-pizza-detail',
    template: `
 <div *ngIf="pizza">
  <h2>{{pizza.name}}</h2>
  <div><label>price: </label>{{pizza.price}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="pizza.name">
   </div>
   <img height="128" width="128" src="http://localhost:8080/pizza/{{pizza.name}}">
   </div>
`
})
export class PizzaDetailComponent implements OnInit {

  @Input()
    pizza: Pizza;

    constructor() { }

    ngOnInit() { }

}
