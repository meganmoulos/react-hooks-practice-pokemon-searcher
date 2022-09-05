import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
const [pokemon, setPokemon] = useState([])
const [query, setQuery] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(data => {
        setPokemon(data.map(item => item))
      })
  }, [])

  const pokemonsToDisplay = pokemon.filter((poke) => 
    poke.name.toLowerCase().includes(query.toLowerCase()))

  function handleAddPokemon(newPokemon){
    setPokemon([...pokemon, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search query={query} onChangeSearch={setQuery}/>
      <br />
      <PokemonCollection pokemon={pokemonsToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
