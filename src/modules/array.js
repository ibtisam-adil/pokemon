const pokemons = [];
const pokeNames = ['squirtle', 'milotic', 'greninja', 'primarina', 'pikachu', 'jolteon', 'ampharos', 'luxray', 'tyranitar', 'aerodactyl', 'carbink', 'charizard', 'arcanine', 'ninetales', 'talonflame'];

async function fetchPokemonData() {
  const responses = await Promise.all(
    pokeNames.map((name) => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)),
  );

  const data = await Promise.all(responses.map((response) => response.json()));
  pokemons.push(...data);
  console.log(pokemons);
  pokemons.forEach((pokemon) => {
    const spriteUrl = pokemon.sprites.front_default;
    console.log(spriteUrl);
  });
}

export default fetchPokemonData();
export { pokemons };