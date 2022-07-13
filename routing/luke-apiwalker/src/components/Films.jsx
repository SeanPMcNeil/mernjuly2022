import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import obiwan from '../obi-wan.jpg'

const Films = props => {
    const { idNum } = useParams();
    const [film, setFilm] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://swapi.dev/api/films/" + idNum)
            .then(res => {
                setFilm(res.data);
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
                </> : film ? <>
                    <h1>{ film.title }</h1>
                    <p><span className="fw-bold">Episode: </span>{ film.episode_id }</p>
                    <p><span className="fw-bold">Director: </span>{ film.director }</p>
                    <p><span className="fw-bold">Release Date: </span>{ film.release_date }</p>
                </> : ""
            }
        </div>
    )
}

export default Films;