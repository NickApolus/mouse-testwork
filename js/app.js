let btnBurger = document.querySelector('#btn-burger');
let burgerMenu = document.querySelector('#burger-menu');
let langChange = document.querySelector('#lang');
let language = document.querySelector('#lg');
const russian = 'RU';
const english = 'EN'
// Burger button is clicked
btnBurger.addEventListener('click', function(e){
    burgerMenu.classList.toggle('hidden');
    btnBurger.classList.toggle('close-burger');
})
// Change of lang
langChange.addEventListener('click', function(e){
    if(language.innerHTML ==  english){
        language.innerHTML =  russian;
    }
    else{
        language.innerHTML =  english;
    }
})
