import { createCard,crateMoreCard,render } from 
"../Functions/card.js";
import { ToggleClass } from 
"../Functions/ additional.js";
import { getItems } from 
"../Functions/api.js";

const object = {
    langId: 1 
}

async function DrawOnUI(){
    const animation = document.querySelector('.header-burger');
    animation.addEventListener('click', ToggleClass);
    try {
        const data = await getItems(object,'s');
        console.log(data);

        for (let index = 0; index < 3; index++) {
            const element = data[index];
            const card = createCard(element);
            const moreCard = crateMoreCard(data);

            render('sectionInfo',card);
            render('more-info',moreCard);
        }
    } catch (e) {
        console.log(e);
    }
}

window.addEventListener('load', () => {
    DrawOnUI();
})


