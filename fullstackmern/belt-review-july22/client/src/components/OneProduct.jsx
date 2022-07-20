import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

export const OneProduct = props => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => setProduct(res.data[0]))
            .catch(err => console.log(err))
    }, [])
    
    return(
        <div className="d-flex justify-content-around align-items-center">
            {
                product ? <div className="card p-2">
                <h4>{ product.name }</h4>
                <img className="img-fluid" src={ product.picture } alt="" />
                <div className="d-flex justify-content-between">
                    <h4>${ product.price }</h4>
                    <h4>Stock: { product.quantity }</h4>
                </div>
                <h4>Category: { product.category }</h4>
            </div> : ""
            }
            <div>
                {/* We need a quantity to buy */}
                {/* <select name="quantity" className="form-control">
                    {
                        [...Array(product.quantity)].map((e, i) => {
                            return <option value={ i+1 }>{ i + 1 }</option>
                        })
                    }
                </select> */}
                <button className="btn btn-success">Buy Now</button>
            </div>
        </div>
    )
}