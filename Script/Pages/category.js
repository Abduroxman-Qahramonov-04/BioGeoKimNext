import { crearteBigCont,createCard,render} from
 '../Functions/card.js';
import { getItems } from 
'../Functions/api.js';
import { ToggleClass,getQueryVariable } from 
'../Functions/ additional.js';

let SELECTED_JOURNAL_ID = null;
SELECTED_JOURNAL_ID = getQueryVariable('journalId');

let object = {
    langId: 1,
    journalId: SELECTED_JOURNAL_ID,
    size: 100,
    offset: 0
}

async function moreInfo(){
    console.log('skdnfkjsdhfsdhf')
    try {
        const data = await getItems(object,'s');
        for (let index = 3; index < 6; index++) {
            const element = data[index];
            const card = createCard(element);
            render('last_section',card);
        }
        object.offset = object.offset + 3;
    } catch (e) {
        console.log(e);
    }
}

async function DrawOnUI(){
    const animation = document.querySelector('.header-burger');
    animation.addEventListener('click', ToggleClass);

    const More_info = document.getElementById('More_info');
    More_info.addEventListener('click',moreInfo);

    const loader = document.getElementById('loader');
    const Category = document.getElementById('Category');
    try {
        loader.style.display = 'block'
        const data = await getItems(object,'s');
        console.log(SELECTED_JOURNAL_ID);
        console.log(data)

        if(SELECTED_JOURNAL_ID == 1){
            Category.innerText = 'Biologiya';
            crearteBigCont(data[6]);
            for (let index = 0; index < 6; index++) {
                const element = data[index];
                const card = createCard(element);
                render('last_section',card);
            }
        }

        else if(SELECTED_JOURNAL_ID == 2){
            Category.innerText = 'Geografiya';
            crearteBigCont(data[11]);
            for (let index = 0; index < 6; index++) {
                const element = data[index];
                const card = createCard(element);
                render('last_section',card);
            }
        }
        else{
            Category.innerText = 'Kimyo';
            crearteBigCont(data[10]);
            for (let index = 0; index < 6; index++) {
                const element = data[index];
                const card = createCard(element);
                render('last_section',card);
            }
        }
    }
    catch(e){
        loader.style.display = 'block'
        console.log(e)
    }
    finally {
        loader.style.display = 'none';
    }
}


window.addEventListener('load', () => {
    DrawOnUI()
})