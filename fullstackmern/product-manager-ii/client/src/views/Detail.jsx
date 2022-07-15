import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

export const Detail = props => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/products/" + id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.error(err))
    }, []);

    return(
        <div>
            <h3>{ product.title }</h3>
            <p>Price: { product.price }</p>
            <p>Description: { product.description }</p>
            <Link to={-1}>Back</Link>
        </div>
    )
}