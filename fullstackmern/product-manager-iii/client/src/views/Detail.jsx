import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

export const Detail = props => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err))
    }, [id]);

    return(
        <div>
            <h3>{ product.title }</h3>
            <p>Price: { product.price }</p>
            <p>Description: { product.description }</p>
            <p><Link to={`/${product._id}/edit`}><span className="btn btn-info">Edit</span></Link> | <Link to={`/${product._id}/delete`}><span className="btn btn-danger">Delete</span></Link></p>
            <p><Link to={-1}><span className="btn btn-warning">Back</span></Link></p>
        </div>
    )
}