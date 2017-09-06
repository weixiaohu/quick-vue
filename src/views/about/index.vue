<template>
<div>
    <p>{{msg}}</p>
    <a href="https://github.com/zyl1314/quick-vue">get more</a>
</div>
</template>

<script>
import api from '@/api';

export default {
    name: 'about',
    created() {
        api.about.msg().then((res) => {
            res = res.data;
            if (res.status) {
                this.msg = res.data.msg;
            }
        })
    },
    data() {
        return {
            msg: ''
        }
    }
}
</script>

<style lang="sass" scoped>
p {
    font-size: 30px;
}
a {
    font-size: 30px;
}
</style>
