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
    let ID = (id !== null ? id : '');
    let myRequest = new Request(`${URL}/${ID}`, initRequest);
    fetch(myRequest);
}

