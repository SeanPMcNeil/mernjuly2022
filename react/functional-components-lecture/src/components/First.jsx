import { useState } from "react";

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

const First = props => {
    // const [light, setLight] = useState(true);
    // const [example, setExample] = useState("Hello");
    
    // const switchLight = () => setLight(!light);
    
    const {firstName, lastName, number} = props;
    const [myNumber, setMyNumber] = useState(props.number);

    const updateNumber = () => setMyNumber(myNumber + 1);

    return(
        <div>
            <h2>This is my first component</h2>
            <h3>The name passed in was: { firstName } { lastName }</h3>
            <h3 onClick={ updateNumber }>Your number is { myNumber }</h3>
            {/* <button onClick={ switchLight } style={ buttonStyle }>{ light ? "On" : "Off" }</button> */}
        </div>
    );
}

export default First;