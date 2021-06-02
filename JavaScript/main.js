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
let SELECTED_JOURNAL_ID = null;
let SELECTED_LANG_ID = null;
let ID = 0
let categoryId = 1

function getCorrectDate(date) {
    const d = new Date(date)
    let dateStr = ("00" + d.getDate()).slice(-2) + "." + ("00" + (d.getMonth() + 1)).slice(-2) + "." + d.getFullYear()
    return dateStr;
}

function createDinamicArticles(imgSrc,title,date,id){
    const sectionInfo = document.getElementById('sectionInfo')

    let smallId = document.createElement('small')
    smallId.innerText = id;
    smallId.style.display = 'none'
    sectionInfo.append(smallId)
    console.log(smallId)

    let FirsFigcaption = document.createElement('figcaption')
    FirsFigcaption.classList.add('main-category')
    FirsFigcaption.id = 'MainCategoryId' + ID
    sectionInfo.append(FirsFigcaption)

    let FirstDiv = document.createElement('div')
    FirsFigcaption.append(FirstDiv)

    let a_for_image = document.createElement('a')
    a_for_image.href = './Article.html?id=' + id;
    FirstDiv.append(a_for_image)
    

    let ArticleImg = document.createElement('img')
    ArticleImg.src = BASE_IMAGE_URL + imgSrc

    a_for_image.append(ArticleImg)

    let CategoryButton = document.createElement('button')
    CategoryButton.classList.add('category-button')
    CategoryButton.innerText = 'Category_' + categoryId
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
    categoryId++

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
    p_art1.classList.add('line-clamp')
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
    p_art2.classList.add('line-clamp')
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
    p_art3.classList.add('line-clamp')
    p_art3.innerText = articleBottomtext
    bottom_article.append(p_art3)

    let dateSpan3 = document.createElement('span')
    dateSpan3.innerText = articleBottomDate;
    bottom_article.append(dateSpan3)

    moreFigaption.append(document.createElement('br'))
    moreFigaption.append(document.createElement('br'))
    moreFigaption.append(document.createElement('br'))

    a_for_button = document.createElement('a')
    a_for_button.href = './subjects.html?langId=1&journalId=1&journalName=Biologiya'
    moreFigaption.append(a_for_button)

    let AllButton = document.createElement('button')
    AllButton.innerText = 'Barchasi'
    a_for_button.append(AllButton)

    ID++
}

async function getFetchApi(){
    const url = 'http://192.144.37.95:8080/api/articles?langId=1';
    try{
        const response = await fetch(url);
        const leadElements = await response.json();
        Idcard = leadElements.id
        console.log(leadElements)   
        
        for (let index = 0; index < 3; index++) {
            const items = leadElements[index];
            createDinamicArticles(items.image,items.title,getCorrectDate(items.date),items.id)
            console.log(items.id)
        }
        createMoreArticles(leadElements[3].title,getCorrectDate(leadElements[3].date),leadElements[4].title,getCorrectDate(leadElements[4].date),leadElements[5].title,getCorrectDate(leadElements[5].date))
        createMoreArticles(leadElements[6].title,getCorrectDate(leadElements[6].date),leadElements[7].title,getCorrectDate(leadElements[7].date),leadElements[8].title,getCorrectDate(leadElements[8].date))
        createMoreArticles(leadElements[9].title,getCorrectDate(leadElements[9].date),leadElements[10].title,getCorrectDate(leadElements[10].date),leadElements[11].title,getCorrectDate(leadElements[11].date))
    }
    catch (e){
        console.log(e)
    }
}

window.addEventListener('load', function() {
        document.querySelector('.header-burger').addEventListener('click', ToggleClass)
        getFetchApi();
})

