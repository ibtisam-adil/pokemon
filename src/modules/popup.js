import { pokemons } from './array.js';

const renderPopup = (id) => {
  const popup = document.querySelector('#popup');
  const pop = pokemons[id];
  popup.innerHTML = `
    <div class="close">
      <span id="cross">&times;</span>
    </div>
    <div class="popup-wrapper">
      <div class="popup-img">
        <img src="${pop.sprites.front_default}" height="420px"/>
      </div>
      <div class="popup-description">
        <div class="name-type">
          <div class="popup-poke-type">
            <p>${pop.types[0].type.name}</p>
          </div>
          <div class="popup-poke-name">
            <p>${pop.name}</p>
          </div>
        </div>
        <p class="popup-base-exp">Base Experience: ${pop.base_experience}</p>
        <p class="poke-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda optio aperiam nam vel nihil dicta illum consequuntur similique animi, qui vitae error rerum dolorum aut, quibusdam ex consequatur sunt voluptate, ut inventore laudantium eveniet iusto quaerat. Error veniam minima quam.
        </p>
        <div class="popup-w-h">
            <p>Weight: ${pop.weight}</p>
            <p>Height: ${pop.height}</p>
        </div>
        <div class="ability">
            <p>Abilities
                <ul class="ul">
                    <li>${pop.abilities[0].ability.name}</li>
                    <li>${pop.abilities[1].ability.name}</li>
                </ul>
            </p>
        </div>
        <p class="popup-moveset">BEST MOVESET</p>
        <div class="line"></div>
        <div class="movesets">
            <p>${pop.moves[0].move.name}</p>
            <p>${pop.moves[1].move.name}</p>
            <p>${pop.moves[2].move.name}</p>
            <p>${pop.moves[3].move.name}</p>
        </div>
      </div>
    </div>
    `;
  const cross = document.querySelector('#cross');
  cross.addEventListener('click', () => {
    const blur = document.querySelector('#blur');
    const popup = document.querySelector('#popup');
    blur.classList.toggle('active');
    popup.classList.toggle('active');
  });
};

export default renderPopup;