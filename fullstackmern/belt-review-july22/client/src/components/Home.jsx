import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = props => {
    const [products, setProducts] = useState(null);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h3>All Products</h3>
            <div className="d-flex justify-content-around flex-wrap">
            {
                products ? products.map((item, i) => <Link to={`/product/${ item._id }`} className="text-decoration-none" key={ i }><div className="card p-2">
                    <h4>{ item.name }</h4>
                    <img className="img-fluid" src={ item.picture } alt="" />
                    <div className="d-flex justify-content-between">
                        <h4>${ item.price }</h4>
                        <h4>Stock: { item.quantity }</h4>
                    </div>
                </div></Link> ) : ""
            }
            </div>
        </div>
    )
}