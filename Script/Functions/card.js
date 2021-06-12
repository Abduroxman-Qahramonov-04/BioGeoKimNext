import {BASE_IMAGE_URL,BASE_ARTICLE_ID,BASE_AUTHOR_ID} from './const.js'

function createCard(data){
    
    const FirsFigcaption = document.createElement('figcaption');
    FirsFigcaption.classList.add('main-category')
    FirsFigcaption.id = 'MainCategoryId';
    console.log(FirsFigcaption);

    const smallId = document.createElement('small');
    smallId.style.display = 'none'
    smallId.innerText = data.id;
    BASE_ARTICLE_ID = smallId.innerText
    console.log(Id);
    FirsFigcaption.append(smallId);

    const SmallId2 = document.createElement('small')
    SmallId2.style.display = 'none';
    SmallId2.innerText = data.author.id;
    BASE_AUTHOR_ID = SmallId2.innerText;
    console.log(BASE_AUTHOR_ID)
    FirsFigcaption.append(SmallId2)

    const FirstDiv = document.createElement('div')
    FirsFigcaption.append(FirstDiv)

    const a_for_image = document.createElement('a')
    a_for_image.href = './Article.html?id=' + BASE_ARTICLE_ID ;
    FirstDiv.append(a_for_image)
    

    const ArticleImg = document.createElement('img')
    ArticleImg.src = BASE_IMAGE_URL + data.image;

    a_for_image.append(ArticleImg)

    const CategoryButton = document.createElement('button')
    CategoryButton.classList.add('category-button')
    CategoryButton.innerText = 'Category_' 
    a_for_image.append(CategoryButton)

    const SecondDiv = document.createElement('div')
    SecondDiv.classList.add('informations')
    FirsFigcaption.append(SecondDiv)

    const h4 = document.createElement('h4')
    h4.classList.add('info','line-clamp')
    h4.innerText = data.title;
    SecondDiv.append(h4)

    const b_date = document.createElement('b')
    b_date.classList.add('main-date')
    b_date.innerText = getCorrectDate(data.date);
    SecondDiv.append(b_date)

    return FirsFigcaption;
}
function crateMoreCard(data){

}
function render(item2,item1){
    document.getElementById(item2).prepend(item1);
}