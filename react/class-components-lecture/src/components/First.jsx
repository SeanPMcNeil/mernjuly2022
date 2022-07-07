import { Component } from "react";

const darkMode = {
    backgroundColor: "black",
    color: "ghostwhite",
    padding: "10px"
}

const lightMode = {
    backgroundColor: "white",
    color: "black",
    padding: "10px"
}

const buttonStyle = {
    width: "100px",
    height: "40px",
    backgroundColor: "darkgrey",
    fontSize: "30px",
    color: "white",
    borderRadius: "10px"
}

class First extends Component {
    constructor (props) {
        super(props);
        this.state = {
            light: false
        }
    }

    render(){
        const { firstName } = this.props;
        return (
            <div style={ this.state.light ? lightMode : darkMode}>
                <h2>This is component 1</h2>
                <h3>This is the next part of the component</h3>
                <h3>The passed in name was: { firstName }</h3>
                <button style={ buttonStyle } onClick={ this.flipSwitch }>{ this.state.light ? "On" : "Off" }</button>
            </div>
        );
    }

    flipSwitch = () => {
        if (this.state.light === false) {
            this.setState({ light: true });
        } else {
            this.setState({ light: false });
        }
    }
}

export default First;