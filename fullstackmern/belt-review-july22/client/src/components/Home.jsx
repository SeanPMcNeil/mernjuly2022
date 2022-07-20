import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = props => {
    const [originalList, setOriginalList] = useState(null);
    const [products, setProducts] = useState(null);
    // const [update, setUpdate] = useState(false);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => {
                setOriginalList(res.data)
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const filterItems = e => {
        if(e.target.value == "All"){
            // Should grab all items again by running axios
            setProducts(originalList);
        } else {
            setProducts(originalList.filter(p => p.category == e.target.value));
        }
    }

    return(
        <div className="container">
            <div className="d-flex justify-content-between m-4">
                <h3>All Products</h3>
                <select name="filter" className="form-select w-50 m-auto" onChange={ filterItems }>
                    <option value="All">All Products</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Livestock">Livestock</option>
                    <option value="Household">Household</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Electronics">Electronics</option>
                </select>
            </div>
            <div className="d-flex justify-content-around flex-wrap">
            {
                products ? products.map((item, i) => <Link to={`/product/${ item._id }`} className="text-decoration-none" key={ i }><div className="card p-2 m-2">
                    <h4>{ item.name }</h4>
                    <img className="img-fluid" src={ item.picture } alt="" />
                    <div className="d-flex justify-content-between">
                        <h4>${ item.price }</h4>
                        {
                            item.quantity > 0 ?  <h4>Stock: { item.quantity }</h4> : <h4 className="text-danger">Out of Stock!</h4>
                        }
                    </div>
                </div></Link> ) : ""
            }
            </div>
        </div>
    )
}