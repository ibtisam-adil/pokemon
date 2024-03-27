import './style.css';
// import fetchPokemonData from './modules/array.js';

// class Pokemon {
//   constructor() {
//     const waterTypes = document.querySelector('.water-types');
//   }

//   fetchpokeData = () => (fetchPokemonData());
// }

// const pokemon = new Pokemon;

const button = document.querySelector('.see-more');
button.addEventListener('click', () => {
  const blur = document.querySelector('#blur');
  blur.classList.toggle('active');
  const popup = document.querySelector('#popup');
  popup.classList.toggle('active');
});

const cross = document.querySelector('#cross');
cross.addEventListener('click', () => {
  const blur = document.querySelector('#blur');
  blur.classList.toggle('active');
  const popup = document.querySelector('#popup');
  popup.classList.toggle('active');
});