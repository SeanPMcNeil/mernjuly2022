import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AuthorForm } from "../components/AuthorForm";

export const Update = props => {
    const { id } = useParams();
    const [author, setAuthor] = useState(null);
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
            })
            .catch(err => {
                console.error(err)
            });
    }, [id])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/update/' + id, author)
            .then(res => {
                console.log(res)
                navigate("/");
            })
            .catch(err => {
                const errorResponse = err.response.data;
                console.log(errorResponse);
                const errArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr);
            });

    }

    return(
        <div className="text-start ps-3">
            <h1>Favorite Authors</h1>
            <Link to={"/"} className="btn btn-sm btn-info mb-2">Home</Link>
            { author ? 
                <>
                <h5 className="text-primary">Edit this author:</h5>
                {
                    errors ? errors.map((err, i) => <p key={i} className="text-danger">{err}</p>) : ""
                }
                    <AuthorForm onSubmitProp={ updateAuthor } initialName={ author.name } />
                </>
            : <>
                <h4>Look's like there's nothing here, would you like to add an Author?</h4>
                <Link to={"/new"} className="btn btn-success">Add An Author</Link>
            </> }
        </div>
    )
}