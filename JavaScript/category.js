const BASE_URL = 'http://192.144.37.95:8080/api';
const BASE_IMAGE_URL = 'http://192.144.37.95/images/'

function ToggleClass(){
    document.querySelector('.header-burger').classList.toggle('active')
    document.querySelector('.menu-box').classList.toggle('active')
    document.querySelector('#LanguageUZ').innerHTML = 'O`zbekcha'
    document.querySelector('#LanguageRU').innerHTML = 'Русский'
    document.querySelector('#LanguageEN').innerHTML = 'English'
}

let SELECTED_JOURNAL_ID = null;
let SELECTED_LANG_ID = null;
let ID = 0;

function createMoreArticles(articleToptext,articleTopDate,articleMiddletext,articleMiddleDate,articleBottomtext,articleBottomDate){
    const more_info = document.getElementById('more-articles_In_category')

    let moreFigaption = document.createElement('figcaption')
    moreFigaption.classList.add('other-article')
    moreFigaption.id = 'moreArticlesId' + ID
    more_info.append(moreFigaption)

    let h5Insidemore = document.createElement('h5')
    h5Insidemore.innerText = 'Boshqa maqolalar'
    moreFigaption.append(h5Insidemore)
    ////////////////////////////////

    let top_article = document.createElement('article')
    moreFigaption.append(top_article)

    let p_art1 = document.createElement('p')
    p_art1.innerText = articleToptext
    top_article.append(p_art1)

    let dateSpan1 = document.createElement('span')
    dateSpan1.innerText = articleTopDate
    top_article.append(dateSpan1)

    let hr1 = document.createElement('hr')
    moreFigaption.append(hr1)

    let middle_article = document.createElement('article')
    moreFigaption.append(middle_article)

    let p_art2 = document.createElement('p')
    p_art2.innerText = articleMiddletext
    middle_article.append(p_art2)

    let dateSpan2 = document.createElement('span')
    dateSpan2.innerText = articleMiddleDate
    middle_article.append(dateSpan2)

    let hr2 = document.createElement('hr')
    moreFigaption.append(hr2)
    ///////////////////////
    let middle_article2 = document.createElement('article')
    moreFigaption.append(middle_article2)

    let p_art2_2 = document.createElement('p')
    p_art2_2.innerText = articleMiddletext
    middle_article2.append(p_art2_2)

    let dateSpan2_2 = document.createElement('span')
    dateSpan2_2.innerText = articleMiddleDate
    middle_article2.append(dateSpan2_2)

    let hr3 = document.createElement('hr')
    moreFigaption.append(hr3)
    //////////////////////

    let bottom_article = document.createElement('article')
    moreFigaption.append(bottom_article)

    let p_art3 = document.createElement('p')
    p_art3.innerText = articleBottomtext
    bottom_article.append(p_art3)

    let dateSpan3 = document.createElement('span')
    dateSpan3.innerText = articleBottomDate
    bottom_article.append(dateSpan3)

    ID++
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
function createDinamicArticles(imgSrc,title,date){
    const sectionInfo = document.getElementById('last_section')

    let FirsFigcaption = document.createElement('figcaption')
    FirsFigcaption.classList.add('main-category')
    FirsFigcaption.id = 'MainCategoryId' + ID
    sectionInfo.append(FirsFigcaption)

    let FirstDiv = document.createElement('div')
    FirsFigcaption.append(FirstDiv)

    let a_for_image = document.createElement('a')
    a_for_image.href = "./article.html"
    FirstDiv.append(a_for_image)
    

    let ArticleImg = document.createElement('img')
    ArticleImg.src = BASE_IMAGE_URL + imgSrc

    a_for_image.append(ArticleImg)

    let CategoryButton = document.createElement('button')
    CategoryButton.classList.add('category-button')
    CategoryButton.innerText = 'Category1'
    a_for_image.append(CategoryButton)

    let SecondDiv = document.createElement('div')
    SecondDiv.classList.add('informations')
    FirsFigcaption.append(SecondDiv)

    let h4 = document.createElement('h4')
    h4.classList.add('info','line-clamp')
    h4.innerText = title
    SecondDiv.append(h4)

    let b_date = document.createElement('b')
    b_date.classList.add('main-date')
    b_date.innerText = date
    SecondDiv.append(b_date)

    ID++
}
async function getFetchApi(){
    
    try{
        let loader = document.getElementById('loader')
        loader.style.display = 'block'
        const response = await fetch('http://192.144.37.95:8080/api/articles?langId=1');
        const leadElements = await response.json();
        loader.style.display = 'none'
        for (let index = 0; index < leadElements.length; index++) {
            const element = leadElements[index];
            createDinamicArticles(element.image,element.title,element.date)
        }
        console.log(leadElements)   
        
        // crearteBigCont(leadElements[6].image,leadElements[6].title,leadElements[6].title)    
    }
    catch (e){
        let loader = document.getElementById('loader')
        loader.style.display = 'block'
        console.log(e)
        loader.style.display = 'none'
    }
    
}
async function getDataCategory(){
    try {
        const url = `${BASE_URL}/articles?langId=1&journalId=${SELECTED_JOURNAL_ID}`;
        const responseJournal = await fetch(url)
        const ItemsFromServer = await responseJournal.json();
        console.log(SELECTED_JOURNAL_ID)
        let Category = document.getElementById('Category')
        if(SELECTED_JOURNAL_ID == 1){
            Category.innerText = 'Biologiya';
            crearteBigCont(ItemsFromServer[6].image,ItemsFromServer[6].title,ItemsFromServer[6].body)
            for (let index = 0; index < 9; index++) {
                const element = ItemsFromServer[index];
                createDinamicArticles(element.image,element.title,element.date)
            }
            createMoreArticles(ItemsFromServer[4].title,ItemsFromServer[4].date,ItemsFromServer[5].title,ItemsFromServer[5].date,ItemsFromServer[6].title,ItemsFromServer[6].date) 
        }
        else if(SELECTED_JOURNAL_ID == 2){
            Category.innerText = 'Geografiya'
            crearteBigCont(ItemsFromServer[6].image,ItemsFromServer[6].title,ItemsFromServer[6].body) 
            for (let index = 0; index < 9; index++) {
                const element = ItemsFromServer[index];
                createDinamicArticles(element.image,element.title,element.date)
            }
            createMoreArticles(ItemsFromServer[4].title,ItemsFromServer[4].date,ItemsFromServer[5].title,ItemsFromServer[5].date,ItemsFromServer[6].title,ItemsFromServer[6].date) 
        }
        else{
            Category.innerText = 'Kimyo'
            crearteBigCont(ItemsFromServer[6].image,ItemsFromServer[6].title,ItemsFromServer[6].body) 
            for (let index = 0; index < 9; index++) {
                const element = ItemsFromServer[index];
                createDinamicArticles(element.image,element.title,element.date)
            }
            createMoreArticles(ItemsFromServer[4].title,ItemsFromServer[4].date,ItemsFromServer[5].title,ItemsFromServer[5].date,ItemsFromServer[6].title,ItemsFromServer[6].date) 
        }
    }
    catch(e){
        console.log(e)
    }
}

function getQueryVariable(){
    const url_string = location.href; //window.location.href
    const url = new URL(url_string);
    SELECTED_JOURNAL_ID = url.searchParams.get("journalId");
}

window.addEventListener('load', () => {
    getQueryVariable();
    
    document.querySelector('.header-burger').addEventListener('click', ToggleClass);
    
    getFetchApi();
    getDataCategory();

})