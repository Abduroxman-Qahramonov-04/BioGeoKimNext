import { createCard,createAuthorCard,render } from
 "../Functions/card.js";
import { getItems }from 
"../Functions/api.js";
import { ToggleClass,getQueryVariable } from 
"../Functions/ additional.js";
let BASE_AUTHOR_ID = null;
BASE_AUTHOR_ID = getQueryVariable('authorId');

const object = {
    langId: 1,
    authorId: BASE_AUTHOR_ID,
    size: 100,
    offset: 10
}
async function DrawOnUI(){
    const animation = document.querySelector('.header-burger');
    animation.addEventListener('click', ToggleClass);
    try {
        const data = await getItems(object,'');
        console.log(data);
        
        // const authorCard = createAuthorCard(data);
        // render('section_to_author',authorCard);

        for (let index = 0; index < 1; index++) {
            const element = data[index];
            const card = createCard(element);
            render('cardSection',card);
        }

    } catch (e) {
        console.log(e);
    }
}

window.addEventListener('load', () => {
    DrawOnUI();
})

