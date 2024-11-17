const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokeName = document.getElementById("pokemon-name");
const pokeId = document.getElementById("pokemon-id");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const pokeTypes = document.getElementById("types");
const pokeHp = document.getElementById("hp");
const pokeAttack = document.getElementById("attack");
const pokeDefense = document.getElementById("defense");
const specAtt = document.getElementById("special-attack");
const specDef = document.getElementById("special-defense");
const pokeSpeed = document.getElementById("speed");
const pokeSprite = document.getElementById("sprite-container");

//-----------------------------------------------
const getPokemon = async () => {
  try {
    const pokemonNameOrId = searchInput.value.toLowerCase();
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`);
    const data = await res.json();
    setPokemonInfo(data);
  } catch (err) {
    alert("Pokémon not found"); // added by codeManS
    console.log(err);
  }
}
//------------------------------------------------
const setPokemonInfo = data => {
  const { name, id, weight, height, types, sprites, stats } = data;

  pokeName.textContent = `${name.toUpperCase()}`;
  pokeId.textContent = `#${id}`;
  pokeWeight.textContent = `Weight: ${weight}`;
  pokeHeight.textContent = `Height: ${height}`;
  pokeSprite.innerHTML = `
    <img id="sprite" src="${sprites.front_default}" />
  `;
  // pokeTypes.innerHTML = `<div id="class-type">${types[0].type.name.toUpperCase()}</div>`;
  pokeTypes.innerHTML = types.map(t => `<div id="class-type">${t.type.name.toUpperCase()}</div>`).join("");
  pokeHp.textContent = `${stats[0].base_stat}`;
  pokeAttack.textContent = `${stats[1].base_stat}`;
  pokeDefense.textContent = `${stats[2].base_stat}`;
  specAtt.textContent = `${stats[3].base_stat}`;
  specDef.textContent = `${stats[4].base_stat}`;
  pokeSpeed.textContent = `${stats[5].base_stat}`;
    

};
//--------------------------------------------------
searchBtn.addEventListener("click", e => {
  e.preventDefault();
  if(searchInput.value === "Red") {
    window.alert("Pokémon not found");
    return;
  } else {
    getPokemon();
  }
});

// searchBtn.addEventListener("keydown", e => {
//   e.preventDefault();
//   if(e.key === "enter") {
//     searchBtn.click();
//   }
// })