import {BASE_IMAGE_URL} from 
'./const.js';
import {getCorrectDate} from 
"./ additional.js";

let BASE_ARTICLE_ID = null;
let BASE_AUTHOR_ID = null;

function createCard(data){
    
    const FirsFigcaption = document.createElement('figcaption');
    FirsFigcaption.classList.add('main-category');
    FirsFigcaption.id = 'MainCategoryId';
    console.log(FirsFigcaption);

    const smallId = document.createElement('small');
    smallId.style.display = 'none';
    smallId.innerText = data.id;
    BASE_ARTICLE_ID = smallId.innerText;
    console.log(BASE_ARTICLE_ID);
    FirsFigcaption.append(smallId);

    // const SmallId2 = document.createElement('small');
    // SmallId2.style.display = 'none';
    // SmallId2.innerText = data.author.id;
    // BASE_AUTHOR_ID = SmallId2.innerText;
    // console.log(BASE_AUTHOR_ID);
    // FirsFigcaption.append(SmallId2);

    const FirstDiv = document.createElement('div');
    FirsFigcaption.append(FirstDiv);

    const a_for_image = document.createElement('a');
    a_for_image.href = './Article.html?id=' + BASE_ARTICLE_ID ;
    FirstDiv.append(a_for_image);
    

    const ArticleImg = document.createElement('img');
    ArticleImg.src = BASE_IMAGE_URL + data.image;

    a_for_image.append(ArticleImg);

    const CategoryButton = document.createElement('button');
    CategoryButton.classList.add('category-button');
    CategoryButton.innerText = 'Category_' ;
    a_for_image.append(CategoryButton);

    const SecondDiv = document.createElement('div');
    SecondDiv.classList.add('informations');
    FirsFigcaption.append(SecondDiv);

    const h4 = document.createElement('h4');
    h4.classList.add('info','line-clamp');
    h4.innerText = data.title;
    SecondDiv.append(h4);

    const b_date = document.createElement('b');
    b_date.classList.add('main-date');
    b_date.innerText = getCorrectDate(data.date);
    SecondDiv.append(b_date);

    return FirsFigcaption;
}
function crateMoreCard(data){
    const moreFigaption = document.createElement('figcaption');
    moreFigaption.classList.add('other-article');

    const title_name = document.createElement('h5');
    title_name.innerText = 'Boshqa maqolalar';
    moreFigaption.append(title_name);

    for (let index = 0; index < 3; index++) {
        const element = data[index];
        const article_tag = document.createElement('article');
        moreFigaption.append(article_tag);

        const a_title = document.createElement('a');
        a_title.style.color = 'black';
        a_title.href = `./Article.html?id=${BASE_ARTICLE_ID}`;
        article_tag.append(a_title);

        const more_title = document.createElement('p')
        more_title.classList.add('line-clamp');
        more_title.innerText = element.title;
        a_title.append(more_title);

        const more_date = document.createElement('span');
        more_date.innerText = getCorrectDate(element.date);
        article_tag.append(more_date);

        if (index <= data.length -2) {
            const hr = document.createElement('hr');
            moreFigaption.append(hr);
        }
    }
    return moreFigaption;
}
function createArticle(data){
    fullINfoSection.firstElementChild.innerText = data.title;
    fullINfoSection.children[3].innerHTML = data.body;
    fullINfoSection.children[4].innerHTML = data.body;
    fullINfoSection.children[5].src = BASE_IMAGE_URL + data.image;

    if(!fullINfoSection.children[5].src){
        fullINfoSection.children[5].style.display = 'none';
    }

    let smallIDAuthor = document.getElementById('smallIDAuthor');
    smallIDAuthor.innerText = data.author.id;
    BASE_AUTHOR_ID = smallIDAuthor.innerText;  
    console.log(BASE_AUTHOR_ID);

    let div1 = document.createElement('div');
    fullINfoSection.append(div1);

    let pre = document.createElement('pre');
    div1.append(pre);

    let div2 = document.createElement('div');
    pre.append(div2);

    let a_author = document.createElement('a');
    a_author.href = "./author.html?authorId=" ;
    div2.append(a_author);

    let author_image = document.createElement('img');
    author_image.src = BASE_IMAGE_URL + data.image;
    a_author.append(author_image);

    let a_name = document.createElement('a');
    a_name.href = `./author.html?authorId=${BASE_AUTHOR_ID}`;
    pre.append(a_name);

    let author_name = document.createElement('b');
    author_name.innerText = data.author.name;
    a_name.append(author_name);
}
function crearteBigCont(data){
    let second_section = document.getElementById('second_section');

    let cont_article = document.createElement('div');
    cont_article.classList.add('cont-article');
    second_section.prepend(cont_article);

    let imgInContArticle = document.createElement('img');
    imgInContArticle.src = BASE_IMAGE_URL + data.image;
    cont_article.append(imgInContArticle);

    let BtnCategory = document.createElement('button');
    BtnCategory.innerText = 'Category3';
    cont_article.append(BtnCategory);

    let article_h5 = document.createElement('h5');
    article_h5.innerText = data.title;
    cont_article.append(article_h5);

    let textSmall = document.createElement('small');
    textSmall.classList.add('line-clamp-main');
    textSmall.innerHTML = data.body;
    cont_article.append(textSmall);
}

function render(item2,item1){
    document.getElementById(item2).prepend(item1);
}
export {render,createCard,crateMoreCard,createArticle,crearteBigCont};