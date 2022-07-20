import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Form = props => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        picture: "",
        price: 0.00,
        category: "Gaming",
        quantity: 1
    })
    const [error, setError] = useState({});
    
    const onChangeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/create", form)
            .then(res => {
                if(res.data.error){
                    setError(res.data.error.errors);
                } else {
                    navigate(`/product/${res.data._id}`)
                }
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h2>Add Item</h2>
            <form onSubmit={ onSubmitHandler } className="w-50 m-auto">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" name="name" className="form-control" value={ form.name } onChange={ onChangeHandler }/>
                    { error.name ? <span className="text-danger">{ error.name.message }</span> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="picture" className="form-label">Picture:</label>
                    <input type="text" name="picture" className="form-control" value={ form.picture } onChange={ onChangeHandler }/>
                    { error.picture ? <span className="text-danger">{ error.picture.message }</span> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="price" className="form-label">Price:</label>
                    <input type="text" name="price" className="form-control" value={ form.price } onChange={ onChangeHandler }/>
                    { error.price ? <span className="text-danger">{ error.price.message }</span> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="category" className="form-label">Category:</label>
                    <select name="category" className="form-select" onChange={ onChangeHandler }>
                        <option value="Gaming">Gaming</option>
                        <option value="Livestock">Livestock</option>
                        <option value="Household">Household</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="quantity" className="form-label">Quantity to Sell</label>
                    <input type="number" name="quantity" className="form-control" value={ form.quantity } onChange={ onChangeHandler }/>
                    { error.quantity ? <span className="text-danger">{ error.quantity.message }</span> : ""}
                </div>
                <div className="form-group mt-2">
                    <input type="submit" value="Add Product" className="btn btn-info" />
                </div>
            </form>
        </div>
    )
}