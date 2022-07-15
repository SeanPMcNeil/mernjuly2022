import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ProductList = props => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/products')
            .then(res => {
                setProducts(res.data.products);
            })
            .catch(err => console.error(err));
    }, [products])

    return(
        <div>
            { products.map( (product, i) => 
                <div key={ i }>
                    <Link to={`/${product._id}`}><p key={ i }>{ product.title }</p></Link>
                </div>
            ) }
        </div>
    )
}