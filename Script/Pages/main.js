import {getItems,ToggleClass,CreateCard,CreateMoreCard,render} from './GlobalFunction.js'

let object = {
    langId: 1,
}
async function DrawOnUI(){
    try {
        document.querySelector('.header-burger').addEventListener('click', ToggleClass);
        const Data = await getItems(object,'s');
        console.log(Data); 
        let more_info = document.getElementById('more-info');
        for (let index = 0; index < 3; index++) {
            let a = CreateCard(Data[index])
            let b = CreateMoreCard(Data[index])
            render('sectionInfo',a)
            render('more-info',b)
        }
    } catch (e) {
        console.log(e)
    }
}

window.addEventListener('load', function() {
        DrawOnUI();
})
