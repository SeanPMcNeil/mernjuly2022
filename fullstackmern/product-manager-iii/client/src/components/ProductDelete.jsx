import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ProductDelete = props => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.delete("http://localhost:8000/api/products/delete/" + id)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        navigate("/");
    }, []);

    return(
        <></>
    )
}