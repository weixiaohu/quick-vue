<template>
<div>
    <p class="title">this is a vue-starter-kit</p>
    <img src="../../assets/image/webpack-logo.svg">
    <img src="../../assets/image/vue-logo.png">
    <p class="number">这是您第<strong>{{number}}</strong>次浏览主页</p>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import * as types from '@/store/mutation-types';

export default {
    name: 'home',
    data() {
        return {}
    },
    computed: mapState({
        number: state => state.count.count
    }),
    methods: {
        ...mapMutations({
            add: types.ADD_COUNT
        })
    },
    beforeRouteLeave(to, from, next) {
        this.add();
        next()
    }
}
</script>

<style lang="sass" scoped>
.title {
    font-size: 60px;
}
.number {
    font-size: 30px;
    strong {
        color: red;
    }
}
img {
    width: 200px;
}
</style>
