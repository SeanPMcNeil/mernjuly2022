import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import obiwan from '../obi-wan.jpg'

const Species = props => {
    const { idNum } = useParams();
    const [species, setSpecies] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://swapi.dev/api/species/" + idNum)
            .then(res => {
                setSpecies(res.data);
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
                </> : species ? <>
                    <h1>{ species.name }</h1>
                    <p><span className="fw-bold">Classification: </span>{ species.classification }</p>
                    <p><span className="fw-bold">Avg. Height: </span>{ species.average_height } cm</p>
                    <p><span className="fw-bold">Lifespan: </span>{ species.average_lifespan } years</p>
                    <p><span className="fw-bold">Language: </span>{ species.language }</p>
                </> : ""
            }
        </div>
    )
}

export default Species;