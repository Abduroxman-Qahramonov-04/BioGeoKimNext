import {getItems,ToggleClass,CreateCard,CreateMoreCard} from './GlobalFunction.js'

function TryDraw(Target,Data){
    let sectionInfo = document.getElementById('sectionInfo');
    let more_info = document.getElementById('more-info');
    CreateCard(Target,Data);
    CreateMoreCard(Target,Data);
}

let object = {
    langId: 1,
}
async function DrawOnUI(){
    try {
        document.querySelector('.header-burger').addEventListener('click', ToggleClass);
        const Data = await getItems(object,'s');
        console.log(Data); 
        
        for (let index = 0; index < 3; index++) {
            TryDraw(Data[index]);
        }
    } catch (e) {
        console.log(e)
    }
}

window.addEventListener('load', function() {
        DrawOnUI();
})
