import {BASE_URL} from './const.js'


async function getItems(object,s){
    let url = `${BASE_URL}/article${s}?`;
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            url+= `&${key}=${element}`;
        }
    }
    try{
        console.log(url)
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
    catch (e){
        console.log(e);
    }
}
export {getItems}