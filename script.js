// api
const allPokemon = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
const pokemonData = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

// elements
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const pokeTypes = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const sprite = document.getElementById("sprite");
const spriteSm = document.getElementById("sprite-sm");

// variables
let fetchedResults = [];
let pokemonStatsArr = [];
console.log(fetchedResults.length);
// functions
const fetchData = async () => {
  try {
    const res = await fetch(allPokemon);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();

    const { results } = data;

    results.forEach((pokemon) => {
      const { id, name, url } = pokemon;
      fetchedResults.push({ id, name, url });
    });
  } catch (err) {
    console.log(err);
  }
};

const fetchPokemon = async (pokemonURL) => {
  try {
    const res = await fetch(pokemonURL);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const {
      id,
      name,
      types,
      stats,
      height: pokemonHeight,
      weight: pokemonWeight,
      sprites,
    } = await res.json();

    //  const pokeType = types.map((type) => type.type.name);

    const pokemonStats = {
      hp: stats.find((stat) => stat.stat.name === "hp").base_stat,
      attack: stats.find((stat) => stat.stat.name === "attack").base_stat,
      defense: stats.find((stat) => stat.stat.name === "defense").base_stat,
      specialAttack: stats.find((stat) => stat.stat.name === "special-attack")
        .base_stat,
      specialDefense: stats.find((stat) => stat.stat.name === "special-defense")
        .base_stat,
      speed: stats.find((stat) => stat.stat.name === "speed").base_stat,
    };

    const newData = {
      id,
      name,
      types,
      stats: pokemonStats,
      height: pokemonHeight,
      weight: pokemonWeight,
      sprites,
    };

    pokemonStatsArr = newData;
  } catch (err) {
    console.log(err);
  }

  renderPokemon(pokemonStatsArr);
};

fetchData()
  .then(() => {
    console.log("Fetched Results: ", fetchedResults);
  })
  .catch((err) => {
    console.log(err);
  });

const renderTypes = (typesArr) => {
  const typesHTML = typesArr
    .map(
      (typeObj) =>
        `<span class="tag is-info is-light mr-2 is-uppercase">${typeObj.type.name}</span>`
    )
    .join("");
  return typesHTML;
};

const renderPokemon = (statsArr) => {
  console.log("Rendering pokemon: ", statsArr);

  const { id, name, types, stats, height, weight, sprites } = statsArr;
  pokemonName.innerText = name;
  pokemonId.innerText = `#${id}`;
  pokeWeight.innerText = weight;
  pokeHeight.innerText = height;
  pokeTypes.innerHTML = renderTypes(types || types.type.name);
  hp.innerText = stats.hp;
  attack.innerText = stats.attack;
  defense.innerText = stats.defense;
  specialAttack.innerText = stats.specialAttack;
  specialDefense.innerText = stats.specialDefense;
  speed.innerText = stats.speed;

  sprite.src = sprites.front_default;
  spriteSm.src = sprites.front_shiny;
};

const findPokemon = (inputVal) => {
  clearSearch();
  console.log("Searching for pokemon...", inputVal);
  const pokemonFound = fetchedResults.find((pokemon) => {
    return pokemon.name === inputVal || pokemon.id === inputVal;
  });
  if (pokemonFound) {
    console.log("Pokemon found: ", pokemonFound);
    const pokemonURL = pokemonData + pokemonFound.id;
    fetchPokemon(pokemonURL);
  } else {
    alert("Pokemon not found");
  }
};

const validateInput = (input) => {
  if (input === "") {
    alert("Please enter a pokemon name");
  } else if (isNaN(input)) {
    const inputVal = input.toLowerCase();
    console.log("Input value: ", inputVal);
    findPokemon(inputVal);
  } else if (!isNaN(input)) {
    console.log("Input value: ", input);
    return findPokemon(Number(input));
  }
};

// helpers
const clearSearch = () => {
  searchInput.value = "";
  searchInput.focus();
  pokemonName.innerText = "";
  pokemonId.innerText = "";
  weight.innerText = "";
  height.innerText = "";
  types.innerHTML = "";
  hp.innerText = "";
  attack.innerText = "";
  defense.innerText = "";
  specialAttack.innerText = "";
  specialDefense.innerText = "";
  speed.innerText = "";
};

// event listeners
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const input = searchInput.value;
  return validateInput(input);
});
