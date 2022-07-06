import { Component } from "react";

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: props.age
        };
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: { this.state.clicks }</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={ this.happyBirthday }>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }

    happyBirthday = () => this.setState((state) => ({ clicks: state.clicks + 1 }));
}

export default Person;