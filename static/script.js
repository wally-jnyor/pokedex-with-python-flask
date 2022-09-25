//button ON/OFF pokedex
let StartPokedex = document.querySelector('.display_btn1');
// go to/come back  habilidades
let showList = document.querySelector('.mostrar-habilidades');
let hideList = document.querySelector('.BackToMain');
// data container
let abiliityList = document.querySelector('.habilidades-list');
let InfosPokemon = document.querySelector('.infos-pokemon');

StartPokedex.addEventListener('click', () => {
    console.log('click')
})

showList.addEventListener('click', () => {
    // data container
    abiliityList.style.opacity = '1';
    abiliityList.style.display = 'flex';
    InfosPokemon.style.display = 'none';
    InfosPokemon.style.opacity = '0';
})

hideList.addEventListener('click', () => {
    // data container
    abiliityList.style.opacity = '0';
    abiliityList.style.display = 'none';
    InfosPokemon.style.display = 'flex';
    InfosPokemon.style.opacity = '1';
})

console.log(abiliityList)

// obs: resolver problema que desliga a,
// pokedex ao buscar pokemon.