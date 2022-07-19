// No longer necessary! Delete is handled onClick in Main.jsx

import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const AuthorDelete = props => {
    const { id } = useParams();
    // const navigate = useNavigate();
    
    useEffect(() => {
        axios.delete("http://localhost:8000/api/authors/delete/" + id)
            .then(res => console.log(res))
            .catch(err => console.error(err))

        // navigate("/");
    }, [id]);

    return(
        <></>
    )
}