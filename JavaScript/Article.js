function ToggleClass(){
    document.querySelector('.header-burger').classList.toggle('active')
    document.querySelector('.menu-box').classList.toggle('active')
    document.querySelector('#LanguageUZ').innerHTML = 'O`zbekcha'
    document.querySelector('#LanguageRU').innerHTML = 'Русский'
    document.querySelector('#LanguageEN').innerHTML = 'English'
}

const IMAGE_URL = "http://192.144.37.95/images/";
const BASE_URL = 'http://192.144.37.95:8080/api';
let SELECTED_JOURNAL_ID = null;
let SELECTED_LANG_ID = null;
let BASE_ID = null;
const url_string = location.href; //window.location.href
const url = new URL(url_string);
BASE_ID = url.searchParams.get("id");
console.log(BASE_ID)
BASE_AUTHOR_ID = null;

function getCorrectDate(date) {
    const d = new Date(date)
    let dateStr = ("00" + d.getDate()).slice(-2) + "." + ("00" + (d.getMonth() + 1)).slice(-2) + "." + d.getFullYear();
    return dateStr;
}
function createDinamicArticles(data){
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

    let author_name = document.createElement('b')
    author_name.innerText = data.author.name;
    a_name.append(author_name);


    
}
function createMoreArticles(articleToptext,articleTopDate,articleMiddletext,articleMiddleDate,articleBottomtext,articleBottomDate,articleBottomtext2,articleBottomDate2){
    const more_info = document.getElementById('lastFullInfoSextion')

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
    p_art2_2.innerText = articleBottomtext
    middle_article2.append(p_art2_2)

    let dateSpan2_2 = document.createElement('span')
    dateSpan2_2.innerText = articleBottomDate
    middle_article2.append(dateSpan2_2)

    let hr3 = document.createElement('hr')
    moreFigaption.append(hr3)
    //////////////////////

    let bottom_article = document.createElement('article')
    moreFigaption.append(bottom_article)

    let p_art3 = document.createElement('p')
    p_art3.innerText = articleBottomtext2
    bottom_article.append(p_art3)

    let dateSpan3 = document.createElement('span')
    dateSpan3.innerText = articleBottomDate2
    bottom_article.append(dateSpan3)

    ID++
}
async function getFetchApi(){
    const url = `http://192.144.37.95:8080/api/article?langId=1&id=${BASE_ID}`;
    try{
        const response = await fetch(url);
        const leadElements = await response.json();
        createDinamicArticles(leadElements);
        createMoreArticles(leadElements[3].title,getCorrectDate(leadElements[3].date),leadElements[4].title,getCorrectDate(leadElements[4].date),leadElements[5].title,getCorrectDate(leadElements[5].date))
        console.log(leadElements)
    }
    catch (e){
        console.log(e)
    }
}

window.addEventListener('load', function() {
    document.querySelector('.header-burger').addEventListener('click', ToggleClass)
    getFetchApi();
})
// let fullINfoSection = document.getElementById('fullINfoSection')

//     let h2Title = document.createElement('h2')
//     h2Title.innerText = data.title;
//     fullINfoSection.append(h2Title)

//     let p1 = document.createElement('p')
//     p1.innerText = data.title;
//     fullINfoSection.append(p1);

//     let p2 = document.createElement('p')
//     p2.innerText = data.title;
//     fullINfoSection.append(p2);

//     let p3 = document.createElement('p')
//     p3.innerText = data.title;
//     fullINfoSection.append(p3);