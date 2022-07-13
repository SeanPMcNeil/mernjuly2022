import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import obiwan from '../obi-wan.jpg'

const People = props => {
    const { idNum } = useParams();
    const [person, setPerson] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + idNum)
            .then(res => {
                setPerson(res.data);
                setError(null);
            })
            .catch(err => setError(err))
    }, [idNum]);

    return(
        <div>
            {
                error ? <>
                    <h3>These are not the droids you are looking for...</h3> 
                    <img src={ obiwan } alt="Obi-Wan Kenobi" className="w-50 img-fluid" />
                </> : person ? <>
                    <h1>{ person.name }</h1>
                    <p><span className="fw-bold">Height: </span>{ person.height } cm</p>
                    <p><span className="fw-bold">Mass: </span>{ person.mass } kg</p>
                    <p><span className="fw-bold">Hair Color: </span>{ person.hair_color }</p>
                    <p><span className="fw-bold">Skin Color: </span>{ person.skin_color }</p>
                </> : ""
            }
        </div>
    )
}

export default People;