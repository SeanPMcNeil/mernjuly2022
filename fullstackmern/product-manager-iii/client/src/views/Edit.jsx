import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

export const Edit = props => {
    const [product, setProduct] = useState({});
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => { setProduct(res.data); setTitle(res.data.title); setPrice(res.data.price); setDescription(res.data.description) })
            .catch(err => console.error(err))
    }, [id]);

    const updateProduct = e => {
        e.preventDefault();
        console.log(id)
        axios.put('http://localhost:8000/api/products/update/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        
        navigate(-1);
    }

    return(
        <div>
            <h1>Update { product.title }</h1>
            <form onSubmit={ updateProduct } className="w-50 m-auto">
                <div className="form-group">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" name="title" id="title" className="form-control" onChange={ (e) => setTitle(e.target.value) } value={ title } />
                </div> 
                <div className="form-group">
                    <label htmlFor="price" className="form-label">Price:</label>
                    <input type="text" name="price" id="price" className="form-control" onChange={ (e) => setPrice(e.target.value) } value={ price } />
                </div> 
                <div className="form-group">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea name="description" id="description" rows="3" className="form-control" onChange={ (e) => setDescription(e.target.value) } value={ description } />
                </div>
                <div className="form-group mt-2">
                    <input type="submit" value="Update Product" className="btn btn-info btn-lg" />
                </div>
            </form>
            <Link to={-1}><span className="btn btn-warning mt-2">Back</span></Link>
        </div>
    )
}