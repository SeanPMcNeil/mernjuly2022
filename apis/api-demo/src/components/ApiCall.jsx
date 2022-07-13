import axios  from "axios";
import { useEffect, useState } from "react";

const ApiCall = props => {
    const [pokemon, setPokemon] = useState(null);
    const [inputPokemon, setInputPokemon] = useState("");
    const [apiPokemon, setApiPokemon] = useState("charmander");
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + apiPokemon)
            .then(res => {
                setPokemon(res.data)
                setError(null)
            })
            .catch(err => setError(err))
    }, [apiPokemon]);

    const fetchPokemon = e => {
        e.preventDefault();
        setApiPokemon(inputPokemon);
    }

    return(
        <div>
            <h2>My API Call</h2>
            <input type="text" name="newPokemon" onChange={ (e) => setInputPokemon(e.target.value) }/>
            <input type="submit" value="Fetch Pokemon" className="btn btn-primary btn-sm ms-2" onClick={ fetchPokemon } />
            <br />
            {
                error ? <h3>Error, please try again </h3> : pokemon ? <> 
                    <img src={pokemon.sprites.front_default} alt="" />
                    <h3>My Pokemon: {pokemon.name}</h3>
                </> : ""
            }
        </div>
    )
}

export default ApiCall;