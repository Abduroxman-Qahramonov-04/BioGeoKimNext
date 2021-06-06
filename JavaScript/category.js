import {getItems,ToggleClass,CreateCard,CreateMoreCard} from './GlobalFunction.js'
const BASE_IMAGE_URL = 'http://192.144.37.95/images/'
let SELECTED_JOURNAL_ID = null;

function getQueryVariable(){
    const url_string = location.href; //window.location.href
    const url = new URL(url_string);
    SELECTED_JOURNAL_ID = url.searchParams.get('journalId');
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
        const Data = await getItems(1,SELECTED_JOURNAL_ID,0,0);
        loader.style.display = 'none'
        console.log(SELECTED_JOURNAL_ID)

        let Category = document.getElementById('Category')
        let last_section = document.getElementById('last_section')
        let more_articles_In_category = document.getElementById('more-articles_In_category')

        if(SELECTED_JOURNAL_ID == 1){
            Category.innerText = 'Biologiya';
            crearteBigCont(Data[6].image,Data[6].title,Data[6].body)
            for (let index = 0; index < 23; index++) {
                
                CreateCard(last_section,Data[index])
                
            }
            CreateMoreCard(more_articles_In_category,Data[6]);
        }
        else if(SELECTED_JOURNAL_ID == 2){
            Category.innerText = 'Geografiya'
            crearteBigCont(Data[6].image,Data[6].title,Data[6].body)
            for (let index = 0; index < 23; index++) {
                CreateCard(last_section,Data[index])
            }
            CreateMoreCard(more_articles_In_category,Data[6]); 
        }
        else{
            Category.innerText = 'Kimyo'
            crearteBigCont(Data[6].image,Data[6].title,Data[6].body) 
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



window.addEventListener('load', () => {
    getQueryVariable()
    document.querySelector('.header-burger').addEventListener('click', ToggleClass);
    DrawOnUI()

})