import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ProductList = props => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.error(err));
    }, [products])

    return(
        <div>
            { products.map( (product, i) => 
                <div key={ i }>
                    <p key={ i }><Link to={`/${product._id}`}>{ product.title }</Link> | <Link to={`/${product._id}/edit`}><span className="btn btn-sm btn-info">Edit</span></Link> | <Link to={`/${product._id}/delete`}><span className="btn btn-sm btn-danger">Delete</span></Link></p>
                </div>
            ) }
        </div>
    )
}