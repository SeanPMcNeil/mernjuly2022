import { useState } from "react";

const Form = props => {
    // const [name, setName] = useState("");
    // const [realName, setRealName] = useState("");
    // const [power, setPower] = useState("");
    // const [numSidekicks, setNumSidekicks] = useState(0);
    // const [isAlive, setIsAlive] = useState(true);
    // const [universe, setUniverse] = useState("");

    const [myForm, setMyForm] = useState({
        name: "",
        realName: "",
        power: "",
        numSidekicks: "",
        isAlive: true,
        universe: ""
    })

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }

    const checkedHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.checked})
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        // const character = {name, realName, power, numSidekicks, isAlive, universe};
        props.newChar(myForm);
    }
    
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={ onSubmitHandler }>
                <div>
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" onChange={ onChangeHandler } />
                </div>
                <div>
                    <label className="form-label" htmlFor="realName">Real Name</label>
                    <input type="text" className="form-control" name="realName" onChange={ onChangeHandler } />
                </div>
                <div>
                    <label className="form-label" htmlFor="power">Power</label>
                    <input type="text" className="form-control" name="power" onChange={ onChangeHandler } />
                </div>
                <div>
                    <label className="form-label" htmlFor="numSidekicks"># of Sidekicks</label>
                    <input type="number" className="form-control" name="numSidekicks" onChange={ onChangeHandler } />
                </div>
                <div>
                    <input type="checkbox" className="form-check-input" name="isAlive" checked={ myForm.isAlive } onChange={ checkedHandler } />
                    <label className="form-check-label" htmlFor="isAlive">Alive?</label>
                </div>
                <div>
                    <label className="form-check-label" htmlFor="universe">Universe:</label>
                    <input type="radio" className="form-check-input" name="universe" value="DC" onChange={ onChangeHandler } />
                    <label className="form-check-label" htmlFor="universe">DC</label>
                    <input type="radio" className="form-check-input" name="universe" value="Marvel" onChange={ onChangeHandler } />
                    <label className="form-check-label" htmlFor="universe">Marvel</label>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default Form;