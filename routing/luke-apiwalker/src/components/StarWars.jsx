import { useState } from "react";

const StarWars = props => {
    // const [query, setQuery] = useState("planets");
    // const [idNum, setIdNum] = useState();

    const [swForm, setSwForm] = useState({
        query: "planets",
        idNum: ""
    });

    const onChangeHandler = e => {
        setSwForm({...swForm, [e.target.name]: e.target.value });
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        props.newSearch(swForm);
    }

    return(
        <div className="mb-5">
            <form onSubmit={ onSubmitHandler }>
                <div className="form-group mb-3 mt-5">
                    <label className="form-label">Search for:</label>
                    <div className="row ms-5 me-5">
                        <select name="query" id="query" className="form-select col" onChange={ onChangeHandler }>
                            <option value="planets">planets</option>
                            <option value="spaceships">spaceships</option>
                            <option value="vehicles">vehicles</option>
                            <option value="people">people</option>
                            <option value="films">films</option>
                            <option value="species">species</option>
                        </select>
                        <input type="number" name="idNum" id="idNum" className="form-control col" onChange={ onChangeHandler } />
                    </div>
                </div>
                <div className="form-group mt-2">
                    <input type="submit" value="Search" className="btn btn-lg btn-warning" />
                </div>
            </form>
        </div>
    )
}

export default StarWars;