import { Component } from "react";

class Sample extends Component {
    state = { Counter: 0 };

    render() {
        return (
            <>
            Counter is {this.state.counter}
            <br />
            <button 
             onClick={() => {
                this.setState((prevState) => ({
                    counter: prevstate.counter - 1
                }));
            }}
            >
             -
            </button>
            <button 
             onClick={() => {
                this.setState((prevState) => ({
                    counter: prevstate.counter + 1
                }));
            }}
            >
             +
            </button>
            </>
        )
    };
