import { useState } from "react";


const Form = props => {
    // These are the attributes of the item I am making
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    const [canRender, setCanRender] = useState(false);

    const onSubmitHandler = (e) => {
        // preventDefault prevents the page from refreshing
        e.preventDefault();
        setCanRender(true);
    }

    const TextValid = input => {
        if (input.length == 0) {
            return false;
        }
        return true;
    }

    return(
        <div>
            <form onSubmit={ onSubmitHandler }>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={ (e) => setName(e.target.value) } />
                    { TextValid(name) ? "" : <p style={{color:'red'}}>Name is required!</p> }
                </div>
                <div>
                    <label htmlFor="picture">Picture: </label>
                    <input type="text" name="picture" id="picture" onChange={ (e) => setPicture(e.target.value) } />
                    { TextValid(picture) ? "" : <p style={{color:'red'}}>Picture is required!</p> }
                </div>
                <input type="submit" value="Submit" />
            </form>
            {
                canRender ?  <div>
                <h4>Name: {name}</h4>
                <img src={picture} alt={name} />
                </div> : ""
            }
            
            
        </div>
    )
}

export default Form;