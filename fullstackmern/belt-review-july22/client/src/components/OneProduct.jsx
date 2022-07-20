import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from "axios";

export const OneProduct = props => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quant, setQuant] = useState(1);
    const [error, setError] = useState(null);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => setProduct(res.data[0]))
            .catch(err => console.log(err))
    }, [update])
    
    const deleteItem = () => {
        axios.delete("http://localhost:8000/api/product/delete/" + id)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    const buyAction = () => {
        if (quant < 1){
            setError("Insufficient Quantity")
        } else if (quant > product.quantity) {
            setError("Not enough stock")
        } else {
            setError(null)
            let newQuantity = product.quantity - quant;
            axios.put("http://localhost:8000/api/product/update/" + id, {quantity: newQuantity})
                .then(() => {
                    setError("Thank you for your purchase")
                    setUpdate(true);
                })
                .catch(err => console.log(err))
        }
    }

    return(
        <div className="d-flex justify-content-around align-items-center">
            {
                product ? <div className="card p-2">
                <h4>{ product.name }</h4>
                <img className="img-fluid" src={ product.picture } alt="" />
                <div className="d-flex justify-content-between">
                    <h4>${ product.price }</h4>
                    {
                        product.quantity > 0 ? <h4>Stock: { product.quantity }</h4> : <h4 className="text-danger">Out of Stock!</h4>
                    }
                    
                </div>
                <h4>Category: { product.category }</h4>
                <div>
                    <button className="btn btn-danger me-2" onClick={ deleteItem }>Delete</button>
                    <Link to={`/product/edit/${ id }`}><button className="btn btn-warning ms-2">Edit</button></Link>
                </div>
            </div> : ""
            }
            <div>
                {/* We need a quantity to buy */}
                <input type="number" className="form-control" name="quant" value={ quant } onChange={ e=> setQuant(e.target.value) } />
                <button className="btn btn-success" onClick={ buyAction }>Buy Now</button>
                <br />
                { error ? <span className="text-danger">{error}</span> : "" }
            </div>
        </div>
    )
}