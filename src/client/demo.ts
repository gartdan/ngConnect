import * as ng from "angular2/angular2";
import {MyComponent} from "./app";

var x = ng.Component;
var name = "MyApp";

var f = new MyComponent();
f.name = "test";

export class Bill {
    prop = 10;
    name = "test";
}
