import { useParams } from "react-router-dom";

const Number = props => {
    const { param } = useParams();

    return(
        <div>
            <h1>The number is: { param }</h1>
        </div>
    )
}

export default Number;