import { useParams } from "react-router-dom";

const Word = props => {
    const { param } = useParams();

    return(
        <div>
            <h1>The word is: { param }</h1>
        </div>
    )
}

export default Word;