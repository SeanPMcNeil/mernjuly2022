import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import obiwan from '../obi-wan.jpg'

const Vehicles = props => {
    const { idNum } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://swapi.dev/api/vehicles/" + idNum)
            .then(res => {
                setVehicle(res.data);
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
                </> : vehicle ? <>
                    <h1>{ vehicle.name }</h1>
                    <p><span className="fw-bold">Model: </span>{ vehicle.model }</p>
                    <p><span className="fw-bold">Cost: </span>{ vehicle.cost_in_credits } credits</p>
                    <p><span className="fw-bold">Crew: </span>{ vehicle.crew }</p>
                    <p><span className="fw-bold">Class: </span>{ vehicle.vehicle_class }</p>
                </> : ""
            }
        </div>
    )
}

export default Vehicles;