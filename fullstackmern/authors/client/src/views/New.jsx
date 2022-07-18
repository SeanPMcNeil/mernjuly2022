import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthorForm } from "../components/AuthorForm"

export const New = props => {
    const navigate = useNavigate();

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors/create', author)
            .then(res => console.log(res))
            .catch(err => console.error(err));

        navigate("/");
    }

    return (
        <div className="text-start ps-3">
            <h1>Favorite Authors</h1>
            <Link to={"/"} className="btn btn-sm btn-info mb-2">Home</Link>
            <h5 className="text-primary">Add a new author:</h5>
            <>
                <AuthorForm onSubmitProp={ createAuthor } initialName="" />
            </>
        </div>
    )
}