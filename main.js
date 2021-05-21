function ToggleClass(){
    document.querySelector('.header-burger').classList.toggle('active')
    document.querySelector('.menu-box').classList.toggle('active')
    document.querySelector('#LanguageUZ').innerHTML = 'O`zbekcha'
    document.querySelector('#LanguageRU').innerHTML = 'Русский'
    document.querySelector('#LanguageEN').innerHTML = 'English'
}
// work with server
const BASE_URL = 'http://192.144.37.95:8080/api';
const BASE_IMAGE_URL = 'http://192.144.37.95/images/'
let ID = 0

function createDinamicArticles(imgSrc,title,date){
    const sectionInfo = document.getElementById('sectionInfo')

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
function createMoreArticles(articleToptext,articleTopDate,articleMiddletext,articleMiddleDate,articleBottomtext,articleBottomDate){
    const more_info = document.getElementById('more-info')

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

    let bottom_article = document.createElement('article')
    moreFigaption.append(bottom_article)

    let p_art3 = document.createElement('p')
    p_art3.innerText = articleBottomtext
    bottom_article.append(p_art3)

    let dateSpan3 = document.createElement('span')
    dateSpan3.innerText = articleBottomDate
    bottom_article.append(dateSpan3)

    moreFigaption.append(document.createElement('br'))
    moreFigaption.append(document.createElement('br'))
    moreFigaption.append(document.createElement('br'))

    let AllButton = document.createElement('button')
    AllButton.innerText = 'Barchasi'
    moreFigaption.append(AllButton)

    ID++
}

/* function accessArticleElements(contanier,leadElements){
    contanier.firstElementChild.firstElementChild.src = leadElements.image
    contanier.lastElementChild.firstElementChild.innerText = leadElements.title
    contanier.lastElementChild.lastElementChild.innerHTML = leadElements.date
} */
async function getFetchApi(){
    try{
        const response = await fetch('http://192.144.37.95:8080/api/articles?langId=1');
        const leadElements = await response.json();
        
        console.log(leadElements)
        
        for (let index = 0; index < 3; index++) {
            const items = leadElements[index];
            createDinamicArticles(items.image,items.title,items.date)
            createMoreArticles(leadElements[4].title,leadElements[4].date,leadElements[5].title,leadElements[5].date,leadElements[6].title,leadElements[6].date)
        }
        
            
        }
    catch (e){
        console.log(e)
    }
}

window.addEventListener('load', function() {
        document.querySelector('.header-burger').addEventListener('click', ToggleClass)
        getFetchApi()
        
})
/* accessElements(otherArticle1, data[4]) */
        /* accessElements(otherArticle2,data[5]) */
        /* accessElements(otherArticle3,data[6])  */

        /* contanier.children[3].firstElementChild.innerText = leadElements.title
    contanier.children[3].lastElementChild.innerHTML = leadElements.date

    contanier.children[5].firstElementChild.innerText = leadElements.title
    contanier.children[5].lastElementChild.innerHTML = leadElements.date  */

    /* contanier.children[1].firstElementChild.innerText = leadElements.title
    contanier.children[1].lastElementChild.innerHTML = leadElements.date */
