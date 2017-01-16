import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
 <h1>{{title}}</h1>
 <a routerLink ="/pizzas">Pizzas</a>
 <a routerLink ="/cheap-pizzas">Cheap-pizzas</a>
 <router-outlet></router-outlet>
`
})
export class AppComponent implements OnInit {

    title = 'My Pizza App';

    constructor() { }

    ngOnInit() { }

}
