import {getItems,ToggleClass,CreateCard,CreateMoreCard,getQueryVariable} from './GlobalFunction.js'
const BASE_IMAGE_URL = 'http://192.144.37.95/images/'
let SELECTED_JOURNAL_ID = null;
SELECTED_JOURNAL_ID = getQueryVariable('journalId') 
let BASE_SIZE = 10;
let object = {
    langId: 1,
    journalId: SELECTED_JOURNAL_ID,
    size: BASE_SIZE,
    offset: 0
}

function crearteBigCont(BigImgSrc,h5Text,BottomText){
    let second_section = document.getElementById('second_section')

    let cont_article = document.createElement('div')
    cont_article.classList.add('cont-article')
    second_section.prepend(cont_article)

    let imgInContArticle = document.createElement('img')
    imgInContArticle.src = BASE_IMAGE_URL + BigImgSrc
    cont_article.append(imgInContArticle)

    let BtnCategory = document.createElement('button')
    BtnCategory.innerText = 'Category3'
    cont_article.append(BtnCategory)

    let article_h5 = document.createElement('h5')
    article_h5.innerText = h5Text
    cont_article.append(article_h5)

    let textSmall = document.createElement('small')
    textSmall.classList.add('line-clamp-main')
    textSmall.innerHTML = BottomText
    cont_article.append(textSmall)
}
async function DrawOnUI(){
    try {
        let loader = document.getElementById('loader')
        loader.style.display = 'block'
        const Data = await getItems(object,'s');
        
        loader.style.display = 'none'
        console.log(SELECTED_JOURNAL_ID)

        let Category = document.getElementById('Category')
        let last_section = document.getElementById('last_section')
        let more_articles_In_category = document.getElementById('more-articles_In_category')

        if(SELECTED_JOURNAL_ID == 1){
            Category.innerText = 'Biologiya';
            crearteBigCont(Data[6].image,Data[6].title,Data[6].body)
            for (let index = 0; index < 23; index++) {
                CreateCard(last_section,Data[index]);
            }
            CreateMoreCard(more_articles_In_category,Data[6]);
        }
        else if(SELECTED_JOURNAL_ID == 2){
            Category.innerText = 'Geografiya'
            crearteBigCont(Data[6].image,Data[6].title,Data[6].body);
            for (let index = 0; index < 23; index++) {
                CreateCard(last_section,Data[index])
            }
            CreateMoreCard(more_articles_In_category,Data[6]); 
        }
        else{
            Category.innerText = 'Kimyo'
            crearteBigCont(Data[6].image,Data[6].title,Data[6].body);
            for (let index = 0; index < 23; index++) {
                CreateCard(last_section,Data[index])
            }
            CreateMoreCard(more_articles_In_category,Data[6]);
        }
    }
    catch(e){
        let loader = document.getElementById('loader')
        loader.style.display = 'block'
        console.log(e)
        loader.style.display = 'none'
    }
}
function More_Info(){
    let obj_size = object.size;
    BASE_SIZE = BASE_SIZE + 4;
    obj_size = BASE_SIZE;
    console.log(obj_size);
}

window.addEventListener('load', () => {
    let MoreButton = document.getElementById('More_info');
    MoreButton.addEventListener('click',More_Info);
    document.querySelector('.header-burger').addEventListener('click', ToggleClass);
    DrawOnUI()
})