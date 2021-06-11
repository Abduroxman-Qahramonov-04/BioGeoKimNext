const BASE_URL = 'http://192.144.37.95:8080/api';
const BASE_IMAGE_URL = 'http://192.144.37.95/images/';
let Id = null;
let BASE_AUTHOR_ID = null;

function getQueryVariable(value){
    const url_string = location.href; //window.location.href
    const url = new URL(url_string);
    let key = url.searchParams.get(value);
    return key;
}

async function getItems(object,s){
    let url = `${BASE_URL}/article${s}?`;
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            url+= `&${key}=${element}`;
        }
    }
    try{
        console.log(url)
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
    catch (e){
        console.log(e);
    }
}
function ToggleClass(){
    document.querySelector('.header-burger').classList.toggle('active')
    document.querySelector('.menu-box').classList.toggle('active')
    document.querySelector('#LanguageUZ').innerHTML = 'O`zbekcha'
    document.querySelector('#LanguageRU').innerHTML = 'Русский'
    document.querySelector('#LanguageEN').innerHTML = 'English'
}
function getCorrectDate(date) {
    const d = new Date(date)
    let dateStr = ("00" + d.getDate()).slice(-2) + "." + ("00" + (d.getMonth() + 1)).slice(-2) + "." + d.getFullYear()
    return dateStr;
}
function CreateCard(data){
    // const sectionInfo = document.getElementById('sectionInfo')
    
    let FirsFigcaption = document.createElement('figcaption');
    FirsFigcaption.classList.add('main-category')
    FirsFigcaption.id = 'MainCategoryId';
    console.log(FirsFigcaption)

    let smallId = document.createElement('small');
    smallId.style.display = 'none'
    smallId.innerText = data.id;
    Id = smallId.innerText
    console.log(Id);
    FirsFigcaption.append(smallId);

    let SmallId2 = document.createElement('small')
    SmallId2.style.display = 'none';
    SmallId2.innerText = data.author.id;
    BASE_AUTHOR_ID = SmallId2.innerText;
    console.log(BASE_AUTHOR_ID)
    FirsFigcaption.append(SmallId2)

    
    // BASE_AUTHOR_ID = data.author.id;
    // console.log(BASE_AUTHOR_ID + ' THIS`S AUTHOR_ID')


    let FirstDiv = document.createElement('div')
    FirsFigcaption.append(FirstDiv)

    let a_for_image = document.createElement('a')
    a_for_image.href = './Article.html?id=' + Id ;
    FirstDiv.append(a_for_image)
    

    let ArticleImg = document.createElement('img')
    ArticleImg.src = BASE_IMAGE_URL + data.image;

    a_for_image.append(ArticleImg)

    let CategoryButton = document.createElement('button')
    CategoryButton.classList.add('category-button')
    CategoryButton.innerText = 'Category_' 
    a_for_image.append(CategoryButton)

    let SecondDiv = document.createElement('div')
    SecondDiv.classList.add('informations')
    FirsFigcaption.append(SecondDiv)

    let h4 = document.createElement('h4')
    h4.classList.add('info','line-clamp')
    h4.innerText = data.title;
    SecondDiv.append(h4)

    let b_date = document.createElement('b')
    b_date.classList.add('main-date')
    b_date.innerText = getCorrectDate(data.date);
    SecondDiv.append(b_date)
}
function CreateMoreCard(Data){
    // const more_info = document.getElementById('more-info')

    let moreFigaption = document.createElement('figcaption')
    moreFigaption.classList.add('other-article');
    moreFigaption.id = 'moreArticlesId';

    let h5Insidemore = document.createElement('h5')
    h5Insidemore.innerText = 'Boshqa maqolalar'
    moreFigaption.append(h5Insidemore)
    ////////////////////////////////

    let top_article = document.createElement('article')
    moreFigaption.append(top_article)

    let p_art1 = document.createElement('p')
    p_art1.classList.add('line-clamp')
    p_art1.innerText = Data.title;
    top_article.append(p_art1)

    let dateSpan1 = document.createElement('span')
    dateSpan1.innerText = getCorrectDate(Data.date)
    top_article.append(dateSpan1)

    let hr1 = document.createElement('hr')
    moreFigaption.append(hr1)

    let middle_article = document.createElement('article')
    moreFigaption.append(middle_article)

    let p_art2 = document.createElement('p')
    p_art2.classList.add('line-clamp')
    p_art2.innerText = Data.title;
    middle_article.append(p_art2)

    let dateSpan2 = document.createElement('span')
    dateSpan2.innerText = getCorrectDate(Data.date)
    middle_article.append(dateSpan2)

    let hr2 = document.createElement('hr')
    moreFigaption.append(hr2)

    let bottom_article = document.createElement('article')
    moreFigaption.append(bottom_article)

    let p_art3 = document.createElement('p')
    p_art3.classList.add('line-clamp')
    p_art3.innerText = Data.title;
    bottom_article.append(p_art3)

    let dateSpan3 = document.createElement('span')
    dateSpan3.innerText = getCorrectDate(Data.date);
    bottom_article.append(dateSpan3)

    moreFigaption.append(document.createElement('br'))
    moreFigaption.append(document.createElement('br'))
    moreFigaption.append(document.createElement('br'))

    // a_for_button = document.createElement('a')
    // a_for_button.href = './subjects.html?langId=1&journalId=1&journalName=Biologiya'
    // moreFigaption.append(a_for_button)

    let AllButton = document.createElement('button')
    AllButton.innerText = 'Barchasi'
    moreFigaption.append(AllButton)
}
function generateRandomItems(Item){
    Math.floor(Math.random() * Item);
}
export {BASE_IMAGE_URL,getItems,ToggleClass,getCorrectDate,CreateCard,CreateMoreCard,getQueryVariable,generateRandomItems};