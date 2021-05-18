function ToggleClass(){
    document.querySelector('.header-burger').classList.toggle('active')
    document.querySelector('.menu-box').classList.toggle('active')
    document.querySelector('#LanguageUZ').innerHTML = 'O`zbekcha'
    document.querySelector('#LanguageRU').innerHTML = 'Русский'
    document.querySelector('#LanguageEN').innerHTML = 'English'
}
// work with server
const BASE_URL = 'http://192.144.37.95:8080/api';
function accessElements(contanier,leadElements){
    contanier.firstElementChild.firstElementChild.src = leadElements.image
    contanier.lastElementChild.firstElementChild.innerText = leadElements.title
    contanier.lastElementChild.lastElementChild.innerHTML = leadElements.date
}
async function getFetchApi(){
    try{
        const response = await fetch('http://192.144.37.95:8080/api/articles?langId=1');
        const leadElements = await response.json();
        const biology1 = document.getElementById('biology1');
        const geografy1 = document.getElementById('geografy1');
        const Kimyo1 = document.getElementById('Kimyo1');

        const data = leadElements;
        accessElements(biology1, data[0]);
        accessElements(geografy1, data[1]);
        accessElements(Kimyo1, data[3]);
        console.log(data)
        
    }
    catch{
        alert('Error')
    }
}

window.addEventListener('load', function() {
        document.querySelector('.header-burger').addEventListener('click', ToggleClass)
        
        getFetchApi()
})
