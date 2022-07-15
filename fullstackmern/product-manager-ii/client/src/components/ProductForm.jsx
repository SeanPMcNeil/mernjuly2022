import { useState } from "react";
import axios from 'axios';

export const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/products/new", {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        
            setTitle("");
            setPrice(0);
            setDescription("");
    }

    return(
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={ onSubmitHandler } className="w-50 m-auto">
                <div className="form-group">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" name="title" id="title" className="form-control" onChange={ (e) => setTitle(e.target.value) } value={ title } />
                </div>
                <div className="form-group">
                    <label htmlFor="price" className="form-label">Price:</label>
                    <input type="number" name="price" id="price" className="form-control" onChange={ (e) => setPrice(e.target.value) } value={ price } />
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea name="description" id="description" rows="3" className="form-control" onChange={ (e) => setDescription(e.target.value) } value={ description } />
                </div>
                <div className="form-group mt-2">
                    <input type="submit" value="Create Product" className="btn btn-success btn-lg" />
                </div>
            </form>
        </div>
    )
}