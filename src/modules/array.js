const pokemons = [];
const pokeNames = ['gyarados', 'milotic', 'greninja', 'primarina', 'electivire', 'raikou', 'ampharos', 'luxray', 'tyranitar', 'aerodactyl', 'gigalith', 'charizard', 'arcanine', 'ninetales', 'talonflame'];

async function fetchPokemonData(renderPokemon) {
  const responses = await Promise.all(
    pokeNames.map((name) => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)),
  );

  const data = await Promise.all(responses.map((response) => response.json()));
  pokemons.push(...data);
  renderPokemon();
}

export default fetchPokemonData;
export { pokemons };
