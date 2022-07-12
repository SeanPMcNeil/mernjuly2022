import axios from "axios";
import { useEffect, useState } from "react"

export const Pokemon = props => {
    const [pokemon, setPokemon] = useState([]);

    const onClickHandler = e => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => setPokemon(response.data.results))
    }

    return(
        <div>
            <button className="btn btn-lg btn-success" onClick={ onClickHandler }>Fetch Pokemon</button>
            <ul>
                {pokemon.length > 0 && pokemon.map((poke, index) => {
                    return(
                        <li key={index}>{poke.name}</li>
                    )
                })}
            </ul>
        </div>
    );
}