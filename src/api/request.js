import { URL } from './url.js';

export const sendNetRequest = (type, id, arg) => {
    let initRequest = {
        method: type,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: arg
    };
    let myRequest = new Request(`${URL}/${id}`, initRequest);
    fetch(myRequest);
}

