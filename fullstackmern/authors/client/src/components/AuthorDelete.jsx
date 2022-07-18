import axios from "axios";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const AuthorDelete = props => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.delete("http://localhost:8000/api/authors/delete/" + id)
            .then(res => console.log(res))
            .catch(err => console.error(err))

        navigate("/");
    }, []);

    return(
        <></>
    )
}