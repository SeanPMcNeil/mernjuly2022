import { useState } from "react";
import { Link } from "react-router-dom";


export const AuthorForm = props => {
    const { onSubmitProp, initialName } = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
    }

    return(
        <>
            <form onSubmit={ onSubmitHandler } className="w-50 mt-2">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" name="name" id="name" onChange={ (e) => setName(e.target.value) } value={ name } />
                </div>
                <div className="form-group mt-2">
                    <Link to={"/"} className="btn btn-warning me-3">Cancel</Link>
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </div>
            </form>
        </>
    )
}