import { Component } from "react";

class Sample extends Component {
    state = { text: "" };

    handleInput = (e) => this.setState({ text: e.target.valeu });

    render() {
        const { text } = this.state;
        return (
            <>
            <input onChange={this.handleInput} />
            <p>The Input above will be reflected below</p>
            <p>{text}</p>
            </>
        );
    }
}

export { sample };