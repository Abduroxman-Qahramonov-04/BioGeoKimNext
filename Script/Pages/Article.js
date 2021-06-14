import { createArticle,crateMoreCard,render } from 
"../Functions/card.js";
import { ToggleClass,getQueryVariable } from 
"../Functions/ additional.js";
import { getItems } from "../Functions/api.js"

let BASE_ARTICLE_ID = null;
BASE_ARTICLE_ID = getQueryVariable('id');
console.log(BASE_ARTICLE_ID)

const object = {
    langId: 1,
    id: BASE_ARTICLE_ID
}

async function DrawOnUI(){
    const animation = document.querySelector('.header-burger');
    animation.addEventListener('click', ToggleClass);
    let loader = document.getElementById('loader');
    try {
        loader.style.display = 'block';
        const data = await getItems(object,'');
        console.log(data);
        createArticle(data);
        const moreCard = crateMoreCard(data[8]);
        let a = render('lastFullInfoSection',moreCard);
        console.log(a)
        
        
        
    } catch (e) {
        loader.style.display = 'block';
        console.log(e);
    }
    finally {
        loader.style.display = 'none';
    }
}

window.addEventListener('load',() => {
    DrawOnUI();
})
