import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewOne = props => {
    const { id } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/games/" + id)
            .then (res => setGame(res.data[0]))
            .catch(err => console.log(err))
    }, [id])

    return(
        <div>
            {
                game ? <div>
                    <h2>{ game.title }</h2>
                    <img src={ game.art } alt="image art" width="300px" />
                    <h3>Minimum # of Players: { game.minPlayers }</h3>
                </div> : ""
            }
        </div>
    )
}

export default ViewOne;