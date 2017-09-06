import axios from 'axios';

export default {
    msg() {
        return axios('/api/about/msg')
            .then(res => res)
            .catch(err => err)
    }
}
