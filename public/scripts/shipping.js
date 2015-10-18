/// <reference path="../typings/react.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Greeter = (function (_super) {
    __extends(Greeter, _super);
    function Greeter() {
        _super.apply(this, arguments);
    }
    Greeter.prototype.render = function () {
        var g = this.props.greeting;
        var greeting = 'Hello';
        if (typeof g === 'string') {
            greeting = g;
        }
        else if (g) {
            greeting = g();
        }
        return React.createElement("div", null, greeting, ", ", this.props.whomToGreet);
    };
    return Greeter;
})(React.Component);
exports.Greeter = Greeter;
function showGreeting(elem, size, who) {
    React.render(React.createElement(Greeter, {"size": size, "whomToGreet": who}), elem);
}
exports.showGreeting = showGreeting;
