/// <reference path="../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts"/>

import * as ng from "angular2/angular2";
import {displayGreeting} from "./shipping";

class Foo {
    sayHi(){
        console.log("Hi");
    }
}

@ng.Component({
    selector: "my-app"
})
@ng.View({
    template: `<b>Hello {{name}}</b>`
})
export class MyComponent extends Foo {
    name: string;

    constructor(){
        super();
        this.name = "Bill";
    }
}

ng.bootstrap(MyComponent);

displayGreeting(document.getElementById('greeting'), 10, "Bill");
