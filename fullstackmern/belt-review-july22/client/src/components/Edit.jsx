import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const Edit = props => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [form, setForm] = useState({
        name: "",
        picture: "",
        price: 0.00,
        category: "Gaming",
        quantity: 1
    })

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => setForm(res.data[0]))
            .catch(err => console.log(err))
    }, [])

    const [error, setError] = useState({});
    
    const onChangeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/product/update/" + id, form)
            .then(res => {
                if(res.data.error){
                    setError(res.data.error.errors);
                } else {
                    navigate(`/product/${ id }`)
                }
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h2>Edit Product</h2>
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
                    <select name="category" className="form-select" onChange={ onChangeHandler } value={ form.category }>
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