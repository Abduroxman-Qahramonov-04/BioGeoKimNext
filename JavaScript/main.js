import {getItems,ToggleClass,CreateCard,CreateMoreCard} from './GlobalFunction.js'

function TryDraw(Target,Data){
    let ManyCard = CreateCard(Data);
    Target.prepend(ManyCard);
    console.log(Target);
}

let object = {
    langId: 1,
}
async function DrawOnUI(){
    try {
        document.querySelector('.header-burger').addEventListener('click', ToggleClass);
        const Data = await getItems(object,'s');
        console.log(Data); 
        let sectionInfo = document.getElementById('sectionInfo');
        let more_info = document.getElementById('more-info');
        for (let index = 0; index < 3; index++) {
            TryDraw(sectionInfo,Data[index]);
        }
    } catch (e) {
        console.log(e)
    }
}

window.addEventListener('load', function() {
        DrawOnUI();
})
