import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then((res) => res.json())
      .then((data) => {
        setData([data]); 
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img
          width="300"
          src="https://res.cloudinary.com/dybiiddob/image/upload/v1677498321/pngaaa.com-14408_ijqubo.png"
          alt="logo"
        ></img>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            placeholder="Search Your Favourite"
            required
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        <div className="container">
          <div className="card-wrapper">
            {data.map((pokemon, index) => (
              <div className="pokemon-card">
                <div className="pokemon-name">{pokemon.name.toUpperCase()}</div>
                <img
                  className="pokemon-image"
                  src={pokemon.sprites.front_default}
                  alt="logo"
                ></img>
                <div className="pokemon-info">
                  <div className="pokemon-abilities">
                    Abilities: {pokemon.abilities.length}
                  </div>
                  <div className="pokemon-base-exp">
                    Base Experience: {pokemon.base_experience}
                  </div>
                  <div className="pokemon-forms">
                    Forms: {pokemon.forms.length}
                  </div>
                  <div className="pokemon-game-indices">
                    Game Indices: {pokemon.game_indices.length}
                  </div>
                  <div className="pokemon-height">Height: {pokemon.height}</div>
                  <div className="pokemon-held-items">
                    Held Items: {pokemon.held_items.length}
                  </div>
                  <div className="pokemon-location">
                    Location:{" "}
                    <a href={pokemon.location_area_encounters}>Encounters</a>
                  </div>
                  <div className="pokemon-moves">
                    Moves: {pokemon.moves.length}
                  </div>
                  <div className="pokemon-stats">
                    Stats: {pokemon.stats.length}
                  </div>
                  <div className="pokemon-weight">Weight: {pokemon.weight}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
