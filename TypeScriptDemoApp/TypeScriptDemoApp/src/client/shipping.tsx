/// <reference path="../typings/react.d.ts"/>

import * as React from "react";

export interface ShippingProps extends React.Props<Shipping> {
    size: number;
    changed: any;
}

let deliveryOptions: Array<[string, number, number]> = [
    ["Standard", 4.95, 100],
    ["Two days", 10, 50],
    ["Overnight", 19.95, 10]
];

export class Shipping extends React.Component<ShippingProps, {shipPrice: number, shipWeight: number}> {
    constructor() {
        super();
        this.state = { shipPrice: 4.95, shipWeight: 0 };
    }

    render() {
        return <div >
            Delivery method: <select onChange={(evt) => this.update(evt)}>{
                deliveryOptions.map((opt, idx) => <option key={idx}>{opt[0]}</option>)
            }</select>
            <br/>
            <div>Weight: <b>{this.state.shipWeight}lb</b></div>
            <div>Weight: <b>{this.state.shipWeight}</b></div>
            <div>Cost: <b>{"$" + this.state.shipPrice.toFixed(2) }</b></div>
        </div>;
    }

    update(evt){
        let idx = evt.target.selectedIndex;
        this.setState({ shipPrice: deliveryOptions[idx][1]} as any);
        this.props.changed(deliveryOptions[idx][2]);
    }
}

export function showShipping(elem: Element, size: number, changed: Function) {
    return React.render(<Shipping size={size} changed={changed}/>, elem);
}
