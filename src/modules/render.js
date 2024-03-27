import { pokemons } from './array.js';

const renderPokemon = () => {
  const pokemonCard = document.querySelector('.pokemon-card');
  pokemonCard.innerHTML = pokemons.map((pokemon) => (
    `<div class="cards-wrapper">
        <div class="pokemon">
          <div class="name-img">
            <div class="name-type">
              <div class="poke-type">
                <p>${pokemon.types[0].type.name}</p>
              </div>
              <div class="poke-name">
                <p>CHARMANDER</p>
              </div>
            </div>
            <p class="base-exp">Base Experience: 63</p>
            <div class="pokemon-img">
              <img src="./images/37543-2-pokemon-picture.png" width="200px"/>
            </div>
          </div>
          <div class="poke-features">
            <div class="w-h">
              <div class="poke-weight desc-style">
                <p>Weight: 90kg</p>
              </div>
              <div class="height desc-style">
                Height: 5'
              </div>
            </div>
            <div class="poke-abilities desc-style">
              <p>Abilities: 
                <ul class="ul">
                  <li>${pokemon.abilities[0].ability.name}</li>
                  <li>${pokemon.abilities[1].ability.name}</li>
                </ul>
              </p>
            </div>
            <p class="best-moveset desc-style">BEST MOVESET</p>
            <div class="line"></div>
            <div class="desc-style">
              <p>Mega-punch</p>
              <p>Ice-punch</p>
            </div>
            <button class="see-more">See More</button>
          </div>
        </div>
      </div>`
  )).join('');
};

renderPokemon();