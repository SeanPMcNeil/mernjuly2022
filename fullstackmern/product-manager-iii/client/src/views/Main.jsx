import { ProductForm } from "../components/ProductForm"
import { ProductList } from "../components/ProductList"


export const Main = props => {

    return(
        <div>
            <ProductForm />
            <hr />
            <ProductList />
        </div>
    )
}