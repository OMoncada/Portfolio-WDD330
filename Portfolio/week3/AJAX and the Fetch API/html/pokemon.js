const url = "https://pokeapi.co/api/v2/pokemon";

let results = null;

async function getPokemon(url) {
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        doStuff(data);
    } else {
        console.log('Error en la solicitud', response.status);
    }
}

function doStuff(data) {
    results = data;
    console.log('first: ', results);

    // Mostrar la lista de Pokémon en el documento HTML
    results.results.forEach((pokemon) => {
        const div = document.createElement('div');
        div.textContent = pokemon.name;
        document.querySelector('main').appendChild(div);
    });
}

getPokemon(url);
console.log('second: ', results);
