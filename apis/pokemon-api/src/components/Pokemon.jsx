import { useEffect, useState } from "react"

const buttonStyle = {
    backgroundColor: "forestgreen",
    radius: "10px",
    color: "ghostwhite",
    padding: "10px"
}

export const Pokemon = props => {
    const [pokemon, setPokemon] = useState([]);

    const onClickHandler = e => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }

    return(
        <div>
            <button style={ buttonStyle } onClick={ onClickHandler }>Fetch Pokemon</button>
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