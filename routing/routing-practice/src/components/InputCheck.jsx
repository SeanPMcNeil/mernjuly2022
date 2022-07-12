import { Route, useParams } from "react-router-dom"
import Number from "./Number";
import Word from "./Word";

const InputCheck = () => {
    const input = useParams();
    console.log(`Checking ${input.param}`)
    if (isNaN(input.param)){
        return <Word />
    } else {
        return <Number />
    }
}

export default InputCheck;