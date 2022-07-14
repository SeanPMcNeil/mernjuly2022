import { useParams } from "react-router-dom";

const Cities = props => {
    const { city } = useParams();
    return(
        <>
            <h2>This is the cities component for: <span className="text-success">{ city }</span></h2>
        </>
    )
}

export default Cities;