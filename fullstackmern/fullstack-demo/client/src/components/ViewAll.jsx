import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ViewAll = props => {
    const [games, setGames] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/games")
            .then (res => setGames(res.data))
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h2>All Games</h2>
            <div className='flex'>
                {
                    games ? games.map((item, i) => <Link to={`/game/${item._id}`}><div key={i} className="card" >
                        <h3>{item.title}</h3>
                        <img src={item.art} alt="image art" />
                        <h4>Minimum Players Required: {item.minPlayers}</h4>
                    </div></Link>) : ""
                }
            </div>
        </div>
    )
}

export default ViewAll;