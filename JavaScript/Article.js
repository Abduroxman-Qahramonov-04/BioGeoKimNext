import { createMoreArticles,ToggleClass } from "./main.js";


const IMAGE_URL = "http://192.144.37.95/images/";
const BASE_URL = 'http://192.144.37.95:8080/api';
let BASE_ID = null;
const url_string = location.href; //window.location.href
const url = new URL(url_string);
BASE_ID = url.searchParams.get("id");
console.log(BASE_ID)
let BASE_AUTHOR_ID = null;


function CreateArticle(data){
    fullINfoSection.firstElementChild.innerText = data.title + 'sdfjshd'
    fullINfoSection.children[1].innerText = data.title + 'sjdfhs'
    fullINfoSection.children[2].innerText = data.title
    fullINfoSection.children[3].innerText = data.title
    fullINfoSection.children[4].innerHTML = data.body
    fullINfoSection.children[5].src = IMAGE_URL + data.image;
    let smallIDAuthor = document.getElementById('smallIDAuthor')
    smallIDAuthor.innerText = data.author.id;
    BASE_AUTHOR_ID = smallIDAuthor.innerText;  
    console.log(BASE_AUTHOR_ID)  

    let div1 = document.createElement('div')
    fullINfoSection.append(div1);

    let pre = document.createElement('pre')
    div1.append(pre)

    let div2 = document.createElement('div')
    pre.append(div2);

    let a_author = document.createElement('a')
    a_author.href = "./author.html?authorId=" + BASE_AUTHOR_ID;
    div2.append(a_author);

    let author_image = document.createElement('img')
    author_image.src = IMAGE_URL + data.image;
    a_author.append(author_image);

    let a_name = document.createElement('a')
    a_name.href = "./author.html?authorId=" + BASE_AUTHOR_ID;
    pre.append(a_name);

    let author_name = document.createElement('b');
    author_name.innerText = data.author.name;
    a_name.append(author_name);


    
}

async function getItemsArticle(){
    const url = `${BASE_URL}/api/article?langId=1&id=${BASE_ID}`;
    console.log(BASE_ID+ ' sdf')
    try{
        const response = await fetch(url);
        const leadElements = await response.json();
        return leadElements;
    }
    catch (e){
        console.log(e);
    }
}  

window.addEventListener('load',async function() {
    try {
        document.querySelector('.header-burger').addEventListener('click', ToggleClass);
        const data = await getItemsArticle()
        console.log(data)
        CreateArticle(data);
        createMoreArticles(data[6]);
    } catch (e) {
        console.log(e)
    }
})
