import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import obiwan from '../obi-wan.jpg'

const Planets = props => {
    const { idNum } = useParams();
    const [planet, setPlanet] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + idNum)
            .then(res => {
                setPlanet(res.data);
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
                </> : planet ? <>
                    <h1>{ planet.name }</h1>
                    <p><span className="fw-bold">Climate: </span>{ planet.climate }</p>
                    <p><span className="fw-bold">Terrain: </span>{ planet.terrain }</p>
                    <p><span className="fw-bold">Surface Water: </span>{ planet.surface_water }</p>
                    <p><span className="fw-bold">Population: </span>{ planet.population }</p>
                </> : ""
            }
        </div>
    )
}

export default Planets;