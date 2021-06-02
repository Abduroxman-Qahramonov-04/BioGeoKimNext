function ToggleClass(){
    document.querySelector('.header-burger').classList.toggle('active')
    document.querySelector('.menu-box').classList.toggle('active')
    document.querySelector('#LanguageUZ').innerHTML = 'O`zbekcha'
    document.querySelector('#LanguageRU').innerHTML = 'Русский'
    document.querySelector('#LanguageEN').innerHTML = 'English'
}

const IMAGE_URL = "http://192.144.37.95/images/";
const BASE_URL = 'http://192.144.37.95:8080/api';
let SELECTED_JOURNAL_ID = null;
let SELECTED_LANG_ID = null;
let BASE_AUTHOR_ID = null;
const url_string = location.href; //window.location.href
const url = new URL(url_string);
BASE_AUTHOR_ID = url.searchParams.get("authorId");
console.log(BASE_AUTHOR_ID)

function getCorrectDate(date) {
    const d = new Date(date)
    let dateStr = ("00" + d.getDate()).slice(-2) + "." + ("00" + (d.getMonth() + 1)).slice(-2) + "." + d.getFullYear();
    return dateStr;
}
function createDinamicArticles(data){
    let section_to_author = document.getElementById('section_to_author')
    section_to_author.firstElementChild.firstElementChild.firstElementChild.src = IMAGE_URL + data.author.image;

    let smallIDAuthor = document.getElementById('smallIDAuthor')
    smallIDAuthor.innerText = data.author.id;
    console.log(smallIDAuthor)

    section_to_author.firstElementChild.children[1].innerText = data.author.name;
    section_to_author.firstElementChild.children[2].innerText = data.author.bio;
}

async function getFetchApi(){
    const url = `http://192.144.37.95:8080/api/article?langId=1&authorId=${BASE_AUTHOR_ID}`;
    try{
        const response2 = await fetch(url);
        const leadElements2 = await response2.json();
        createDinamicArticles(leadElements2);
        
        console.log(leadElements2)
    }
    catch (e){
        console.log(e)
    }
}



window.addEventListener('load', function() {
    document.querySelector('.header-burger').addEventListener('click', ToggleClass)
    getFetchApi()
    console.log('hello')
    console.log(BASE_AUTHOR_ID)
    
})