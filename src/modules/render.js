import { pokemons } from './array.js';
import renderPopup from './popup.js';
import Likes from './likes.js';

const likes = new Likes();
likes.getLikes();

const renderPokemon = () => {
  const pokemonCard = document.querySelector('.pokemon-card');
  pokemonCard.innerHTML = pokemons.map((pokemon, id) => (
    `<div class="cards-wrapper">
        <div class="pokemon">
          <div class="name-img">
            <div class="name-type">
              <div class="poke-type">
                <p>${pokemon.types[0].type.name}</p>
              </div>
              <div class="poke-name">
                <p>${pokemon.name}</p>
              </div>
            </div>
            <p class="base-exp">Base Experience: ${pokemon.base_experience}</p>
            <div class="pokemon-img">
              <img src="${pokemon.sprites.front_default}"/>
            </div>
          </div>
          <div class="poke-features">
            <div class="w-h">
              <div class="poke-weight desc-style">
                <p>Weight: ${pokemon.weight}</p>
              </div>
              <div class="height desc-style">
                Height: ${pokemon.height}'
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
              <p>${pokemon.moves[0].move.name}</p>
              <p>${pokemon.moves[1].move.name}</p>
            </div>
            <button id="${id}" class="see-more">See More</button>
            <div class="likes">
              <span id="${id}" class="heart">&hearts;</span>
              <p data-id="${id}"></p>
            </div>  
          </div>
        </div>
      </div>`
  )).join('');
  const togglePopup = () => {
    const blur = document.querySelector('#blur');
    const popup = document.querySelector('#popup');
    blur.classList.toggle('active');
    popup.classList.toggle('active');
  };
  const seeMore = document.querySelectorAll('.see-more');
  seeMore.forEach((btn, id) => {
    btn.addEventListener('click', () => {
      renderPopup(id);
      togglePopup();
      document.body.style.overflow = 'hidden';
    });
  });

  const heart = document.querySelectorAll('.heart');
  heart.forEach((hearts) => {
    hearts.addEventListener('click', (e) => {
      e.target.style.color = 'red';
      likes.updateLikes(e.target.id);
    });
  });
};

export default renderPokemon;