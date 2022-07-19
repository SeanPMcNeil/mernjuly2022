import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthorForm } from "../components/AuthorForm"

export const New = props => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState(null);

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors/create', author)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => {
                const errorResponse = err.response.data;
                const errArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr);
            });
    }

    return (
        <div className="text-start ps-3">
            <h1>Favorite Authors</h1>
            <Link to={"/"} className="btn btn-sm btn-info mb-2">Home</Link>
            <h5 className="text-primary">Add a new author:</h5>
            <>
                {
                    errors ? errors.map((err, i) => <p key={i} className="text-danger">{err}</p>) : ""
                }
                <AuthorForm onSubmitProp={ createAuthor } initialName="" />
            </>
        </div>
    )
}