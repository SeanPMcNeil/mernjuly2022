import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = props => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        art: "",
        minPlayers: 1
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/games/" + id)
            .then(res => setForm(res.data[0]))
            .catch(err => console.log(err))
    }, [])

    const [errors, setErrors] = useState({});

    const onChangeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const formHandler = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/games/update/" + id, form)
            .then(res => {
                // We did it wrong
                if (res.data.error) {
                    console.log("Something went wrong");
                    setErrors(res.data.error.errors);
                } else {
                    // We did it right
                    console.log("We made it!");
                    navigate("/");
                }
            })
            .catch(err => console.error(err))
    }

    return(
        <div>
            <h2>Update Game</h2>
            <form onSubmit={ formHandler }>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={ form.title } onChange={ onChangeHandler } />
                    { errors.title ? <span>{errors.title.message}</span> : "" }
                </div>
                <div>
                    <label htmlFor="art">Cover Art</label>
                    <input type="text" name="art" value={ form.art } onChange={ onChangeHandler } />
                    { errors.art ? <span>{errors.art.message}</span> : "" }
                </div>
                <div>
                    <label htmlFor="minPlayers">Min # of Players</label>
                    <input type="number" name="minPlayers" value={ form.minPlayers } onChange={ onChangeHandler } />
                    { errors.minPlayers ? <span>{errors.minPlayers.message}</span> : "" }
                </div>
                <div>
                    <input type="submit" value="Update Game" />
                </div>
            </form>
        </div>
    )
}

export default UpdateForm;