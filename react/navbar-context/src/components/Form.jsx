import { useContext } from "react"
import NameContext from "../NameContext"

export function Form() {
    const { addName } = useContext(NameContext);

    return(
        <div>
            <label>Your Name:</label>
            <input type="text" name="name" id="name" onChange={ e => addName(e.target.value) }/>
        </div>
    )
}