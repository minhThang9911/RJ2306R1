import { Component } from "react";

class Calculator extends Component {
    state = {
        num1: 0,
        num2: 0,
        sign: "+",
        res: 0,
    };
    handleInput = (e) => {
        this.setState(() => ({
            [e.target.id]: +e.target.value,
        }));
    };

    handleMath = (e) => {
        switch (e.target.name) {
            case "plus":
                this.setState((pre) => ({
                    res: pre.num1 + pre.num2,
                }));
                break;
            case "minus":
                this.setState((pre) => ({
                    res: pre.num1 - pre.num2,
                }));
                break;
            case "multi":
                this.setState((pre) => ({
                    res: pre.num1 * pre.num2,
                }));
                break;
            case "devide":
                this.setState((pre) => ({
                    res: pre.num1 / pre.num2,
                }));
                break;
            default:
                console.log("error sign");
        }
    };

    render() {
        return (
            <div>
                <input
                    type="number"
                    id="num1"
                    onChange={this.handleInput}
                />
                <br />
                <input
                    type="number"
                    id="num2"
                    onChange={this.handleInput}
                />
                <p>Result: {this.state.res}</p>
                <input
                    type="button"
                    name="plus"
                    value="+"
                    onClick={this.handleMath}
                />
                <input
                    type="button"
                    name="minus"
                    value="-"
                    onClick={this.handleMath}
                />
                <input
                    type="button"
                    name="multi"
                    value="*"
                    onClick={this.handleMath}
                />
                <input
                    type="button"
                    name="devide"
                    value="/"
                    onClick={this.handleMath}
                />
            </div>
        );
    }
}

export default Calculator;
