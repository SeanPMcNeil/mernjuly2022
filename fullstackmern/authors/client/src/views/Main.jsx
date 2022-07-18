import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Main = props => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data);
            })
            .catch(err => console.error(err));
    }, [authors])

    return(
        <div className="ps-3 text-start">
            <div>
                <h1>Favorite Authors</h1>
                <Link to={"/new"} className="btn btn-success">Add an Author</Link>
                <h5 className="text-primary mt-2">We have quotes by:</h5>
            </div>
            <table className="table table-striped w-50 text-center">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { authors.map( (author, i) => 
                        <tr key={ i }>
                            <td>{ author.name }</td>
                            <td><Link to={`/edit/${author._id}`} className="btn btn-warning me-2">Edit</Link><Link to={`/delete/${author._id}`} className="btn btn-danger">Delete</Link></td>
                        </tr>
                    ) }
                </tbody>
            </table>
        </div>
    )
}