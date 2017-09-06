import axios from 'axios';

function http({url, method = 'get', data = {}}) {
    let obj = {url, method};
    if (method === 'get') {
        Object.assign(obj, {params: data})
    } else {
        Object.assign(obj, {data: data});
    }

    return axios.request(obj);
}

export default http;