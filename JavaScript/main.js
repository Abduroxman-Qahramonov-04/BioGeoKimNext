import {getItems,ToggleClass,CreateCard,CreateMoreCard} from './GlobalFunction.js'

let Article_ID = null;
let ID = 0;
let categoryId = 1;

let object = {
    langId: 1,
}
async function DrawOnUI(){
    try {
        const Data = await getItems(object,'s');
        console.log(Data);

        let sectionInfo = document.getElementById('sectionInfo');
        let more_info = document.getElementById('more-info');

        for (let index = 0; index < 3; index++) {
            console.log(Data[index])
            CreateCard(sectionInfo,Data[index]);
        }
        CreateMoreCard(more_info,Data[6]);
        CreateMoreCard(more_info,Data[7]);
        CreateMoreCard(more_info,Data[8]);
        
    } catch (e) {
        console.log(e)
    }
}

window.addEventListener('load', function() {
        document.querySelector('.header-burger').addEventListener('click', ToggleClass);
        DrawOnUI();
})
