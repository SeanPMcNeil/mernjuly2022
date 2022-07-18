import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AuthorForm } from "../components/AuthorForm";

export const Update = props => {
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [id])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/update/' + id, author)
            .then(res => console.log(res))
            .catch(err => console.error(err));

        navigate("/");
    }

    return(
        <div className="text-start ps-3">
            <h1>Favorite Authors</h1>
            <Link to={"/"} className="btn btn-sm btn-info mb-2">Home</Link>
            <h5 className="text-primary">Edit this author:</h5>
            { loaded && (
                <>
                    <AuthorForm onSubmitProp={ updateAuthor } initialName={ author.name } />
                </>
            )}
        </div>
    )
}