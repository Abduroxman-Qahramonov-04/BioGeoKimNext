import { ToggleClass,CreateCard,getItems,getQueryVariable, BASE_IMAGE_URL } from "./GlobalFunction"
const IMAGE_URL = "http://192.144.37.95/images/";
let BASE_AUTHOR_ID = getQueryVariable('authorId')
const object = {
    langId:1,
    authorId:BASE_AUTHOR_ID
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
async function DrawOnUI(){
    try {
        let unknown = document.getElementById('unknown')
        document.querySelector('.header-burger').addEventListener('click', ToggleClass);
        let loader = document.getElementById('loader')
        loader.style.display = 'block'
        const Data = await getItems(object,'');
        console.log(object)
        console.log(Data)
        loader.style.display = 'none'
    } catch (e) {
        let loader = document.getElementById('loader')
        loader.style.display = 'block';
        console.log(e);
        loader.style.display = 'none';
    }
}
window.addEventListener('load',() => {
    DrawOnUI()
})

