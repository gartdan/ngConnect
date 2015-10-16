/// <reference path="../../node_modules/angular2/bundles/typings/es6-shim/es6-shim.d.ts"/>
/// <reference path="../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "angular2/angular2", "./shipping"], function (require, exports, ng, shipping_1) {
    var Foo = (function () {
        function Foo() {
        }
        Foo.prototype.sayHi = function () {
            console.log("Hi");
        };
        return Foo;
    })();
    var MyComponent = (function (_super) {
        __extends(MyComponent, _super);
        function MyComponent() {
            _super.call(this);
            this.name = "Bill";
        }
        MyComponent = __decorate([
            ng.Component({
                selector: "my-app"
            }),
            ng.View({
                template: "<b>Hello {{name}}</b>"
            }), 
            __metadata('design:paramtypes', [])
        ], MyComponent);
        return MyComponent;
    })(Foo);
    exports.MyComponent = MyComponent;
    ng.bootstrap(MyComponent);
    shipping_1.displayGreeting(document.getElementById('greeting'), 10, "Bill");
});
