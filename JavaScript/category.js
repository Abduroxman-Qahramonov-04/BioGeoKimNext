function ToggleClass(){
    document.querySelector('.header-burger').classList.toggle('active')
    document.querySelector('.menu-box').classList.toggle('active')
    document.querySelector('#LanguageUZ').innerHTML = 'O`zbekcha'
    document.querySelector('#LanguageRU').innerHTML = 'Русский'
    document.querySelector('#LanguageEN').innerHTML = 'English'
}
const BASE_URL = 'http://192.144.37.95:8080/api';
const BASE_IMAGE_URL = 'http://192.144.37.95/images/'
let SELECTED_JOURNAL_ID = null;
let SELECTED_LANG_ID = null;
let ID = 0
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
async function getFetchApi(){
    const url = 'http://192.144.37.95:8080/api/articles?langId=1';
    try{
        const response = await fetch(url);
        const leadElements = await response.json();
        
        console.log(leadElements)   
        createMoreArticles(leadElements[4].title,leadElements[4].date,leadElements[5].title,leadElements[5].date,leadElements[6].title,leadElements[6].date)
        
        
            
        }
    catch (e){
        console.log(e)
    }
}

window.addEventListener('load', function() {
    document.querySelector('.header-burger').addEventListener('click', ToggleClass)
    getFetchApi()
})