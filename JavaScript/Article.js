import{getItems,ToggleClass,CreateMoreCard,getQueryVariable} from './GlobalFunction.js';

const IMAGE_URL = "http://192.144.37.95/images/";
let BASE_ID = getQueryVariable('id');
let BASE_AUTHOR_ID = null;

const object = {
    langId: 1,
    id: BASE_ID
}


function CreateArticle(data){
    fullINfoSection.firstElementChild.innerText = data.title + ':)';
    fullINfoSection.children[3].innerHTML = data.body
    fullINfoSection.children[4].innerHTML = data.body
    fullINfoSection.children[5].src = IMAGE_URL + data.image;
    let smallIDAuthor = document.getElementById('smallIDAuthor')
    // smallIDAuthor.innerText = data.id;
    // BASE_AUTHOR_ID = smallIDAuthor.innerText;  
    // console.log(BASE_AUTHOR_ID)  

    let div1 = document.createElement('div')
    fullINfoSection.append(div1);

    let pre = document.createElement('pre')
    div1.append(pre)

    let div2 = document.createElement('div')
    pre.append(div2);

    let a_author = document.createElement('a')
    a_author.href = "./author.html?authorId=" ;
    div2.append(a_author);

    let author_image = document.createElement('img')
    author_image.src = IMAGE_URL + data.image;
    a_author.append(author_image);

    let a_name = document.createElement('a')
    a_name.href = "./author.html?authorId=" ;
    pre.append(a_name);

    let author_name = document.createElement('b');
    author_name.innerText = data.author.name;
    a_name.append(author_name);
}

async function DrawOnUI(){
    try {
        let lastFullInfoSection = document.getElementById('lastFullInfoSection')
        document.querySelector('.header-burger').addEventListener('click', ToggleClass);
        let loader = document.getElementById('loader')
        loader.style.display = 'block'
        const Data = await getItems(object,'');
        console.log(object)
        console.log(Data)
        loader.style.display = 'none'
        CreateArticle(Data)
        CreateMoreCard(lastFullInfoSection,Data)
        
    } catch (e) {
        let loader = document.getElementById('loader')
        loader.style.display = 'block';
        console.log(e);
        loader.style.display = 'none';
    }
}

window.addEventListener('load',function() {
    DrawOnUI()
    getQueryVariable();
})
