import * as ng from "angular2/angular2";
import {showGreeting} from "./shipping";

@ng.Component({
    selector: "item-list",
    template: `
<ul class="itemList">
  <li *ng-for='#item of items'>
    <span  class="itemName">{{item.name}}</span>
    <span  class="itemWeight">{{format(item.price)}}</span>
    <input class="itemAmount" type="number" min="0" max="20" [(ng-model)]="item.amount"/>
    <span  class="itemTotal">{{format(item.price * item.amount)}}</span>
  </li>
  <li>
    <span class="totalText">Total</span><span class="itemsTotal">{{getTotal()}}</span>
  </li>
</ul>
`,
    directives: [ng.NgFor, ng.FORM_DIRECTIVES]
})
export class ItemList {
    name: string;
    items = [
        {name: 'Apples', price: 4.95, amount: 0 }, 
        {name: 'Bananas', price: 2.50, amount: 0 }, 
        {name: 'Cherries', price: 9.00, amount: 0 } ];

    constructor(){
        this.name = "Bill";
    }

    format(amount: number){
        return "$" + amount.toFixed(2);
    }

    getTotal(){
        let total = this.items.reduce((prev, curr, idx, arr) => {
            return prev + curr.amount * curr.price;
        }, 0);
        return this.format(total);
    }
}

ng.bootstrap(ItemList);

showGreeting(document.getElementById('greeting'), 10, "Bill");
