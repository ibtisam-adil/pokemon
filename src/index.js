import './style.css';
import renderPokemon from './modules/render.js';
import fetchPokemonData from './modules/array.js';

class Pokemon {
  fetchPokeData = () => {
    fetchPokemonData(renderPokemon);
  }
}

const pokemonn = new Pokemon();
pokemonn.fetchPokeData();
// pokemonn.display();
