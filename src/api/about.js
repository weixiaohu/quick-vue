import http from '@/libs/http';

export default {
    msg() {
        return http({url: '/api/about/msg'})
            .then(res => res)
            .catch(err => err)
    }
}
