import { useState } from "react";

export const BoxForm = (props) => {

    const [color, setColor] = useState("");
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setNewBox( color, width, height )
    }
    
    return(
        <form onSubmit={ handleSubmit }>
            <div>
                <label>Color: </label>
                <input type="text" onChange={ (e) => setColor(e.target.value) } value={ color }/>
            </div>
            <div>
                <label>Width: </label>
                <input type="number" onChange={ (e) => setWidth(e.target.value) } value={ width }/>
            </div>
            <div>
                <label>Height: </label>
                <input type="number" onChange={ (e) => setHeight(e.target.value) } value={ height }/>
            </div>
            <div>
                <input type="submit" value="Add" />
            </div>
        </form>
    )
}