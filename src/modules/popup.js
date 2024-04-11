import { pokemons } from './array.js';
import Comments from './comments.js';

const newComment = new Comments();

const renderPopup = (id) => {
  const popup = document.querySelector('#popup');
  const pop = pokemons[id];
  popup.innerHTML = `
    <div class="main-popup-wrapper">
      <div class="close">
        <span id="cross">&times;</span>
      </div>
      <div class="popup-wrapper">
        <div class="popup-img">
          <img src="${pop.sprites.front_default}"/>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda optio aperiam nam vel nihil dicta illum consequuntur similique animi.
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
          </div>
        </div>
      </div>
      <div class="comments-wrapper">
          <div class="wrapper-p1">
              <div class="heading-1">
                  <h2>Comments</h2>
              </div>
              <div class="all-comments"></div>
          </div>
          <div class="wrapper-p2">
              <div>
                  <h2 class="heading-2">Add Comment</h2>
              </div>
              <form class="form" method="POST">
                  <input class="input-name" type="text" required placeholder="Your name...">
                  <textarea class="comment-description" placeholder="Add a comment ..." required></textarea>
                  <input class="submit" type="submit" value="POST">
              </form>
          </div>
      </div>
    </div>
    `;
  newComment.getComments(id);
  const cross = document.querySelector('#cross');
  cross.addEventListener('click', () => {
    const blur = document.querySelector('#blur');
    const popup = document.querySelector('#popup');
    blur.classList.toggle('active');
    popup.classList.toggle('active');
  });

  const form = document.querySelector('.form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('.input-name').value;
    const comment = document.querySelector('.comment-description').value;

    newComment.updateComments(id, name, comment);

    document.getElementsByClassName('input-name').value = '';
    document.getElementsByClassName('comment-description').value = '';
  });
};

export default renderPopup;