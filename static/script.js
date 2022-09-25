// go to/come back  habilidades
let showList = document.querySelector('.mostrar-habilidades');
let hideList = document.querySelector('.BackToMain');
// data container
let abiliityList = document.querySelector('.habilidades-list');
let InfosPokemon = document.querySelector('.infos-pokemon');
//animations
let StartPokedex = document.querySelector('.display_btn1');
let navbar = document.querySelector('.navbar');
let topDisplay = document.querySelector('.top-display');
let displayBottom = document.querySelector('.display-pokedex');
let searchform = document.querySelector('.pokeform');
let leftLeds = document.querySelectorAll('.left-leds');
let lentLeft = document.querySelector('.lente-left');

let active = 0
StartPokedex.addEventListener('click', () => {
    if(active == 0) {
        topDisplay.style.animationName = 'topDisplayAnimationsOFF'
        lentLeft.style.animationName = 'LenteAnimationsOFF'
        InfosPokemon.style.opacity = '0',
        navbar.style.opacity = '0'
        displayBottom.style.backgroundImage = 'none'
        searchform.style.opacity = '0'
        leftLeds.forEach(element => {
            element.style.animationName = 'LedsAnimationsOFF';
        });
        active = 1
    }
    else {
        topDisplay.style.animationName = 'topDisplayAnimationsON'
        lentLeft.style.animationName = 'LenteAnimationsON'
        InfosPokemon.style.opacity = '1',
        navbar.style.opacity = '1'
        displayBottom.style.backgroundImage = 'url(/static/assets/pokeBG1.jpg)'
        searchform.style.opacity = '1'
        leftLeds.forEach(element => {
            element.style.animationName = 'LedsAnimationsON';
        });
        active = 0
    }
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