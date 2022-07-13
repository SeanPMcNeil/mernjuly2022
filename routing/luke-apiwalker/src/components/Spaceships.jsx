import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import obiwan from '../obi-wan.jpg'

const Spaceships = props => {
    const { idNum } = useParams();
    const [ship, setShip] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://swapi.dev/api/starships/" + idNum)
            .then(res => {
                setShip(res.data);
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
                </> : ship ? <>
                    <h1>{ ship.name }</h1>
                    <p><span className="fw-bold">Model: </span>{ ship.model }</p>
                    <p><span className="fw-bold">Cost: </span>{ ship.cost_in_credits } credits</p>
                    <p><span className="fw-bold">Crew: </span>{ ship.crew }</p>
                    <p><span className="fw-bold">Class: </span>{ ship.starship_class }</p>
                </> : ""
            }
        </div>
    )
}

export default Spaceships;