import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { ProductForm } from "../components/ProductForm"
import { ProductList } from "../components/ProductList"


export const Main = props => {
    // const [products, setProducts] = useState([]);
    // const [loaded, setLoaded] = useState(false);

    // useEffect(() => {
    //     axios.get('http://localhost:8000/products')
    //         .then(res => {
    //             setProducts(res.data.products);
    //             setLoaded(true);
    //         })
    //         .catch(err => console.error(err));
    // }, [])

    return(
        <div>
            <ProductForm />
            <hr />
            {/* { loaded ? <ProductList products={ products } /> : "" } */}
            <ProductList />
        </div>
    )
}