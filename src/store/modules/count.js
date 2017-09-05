import * as types from '../mutation-types';

const state = {
    count: 1
}

const mutations = {
    [types.ADD_COUNT](state) {
        state.count++;
    }
}

export default {
    state,
    mutations
}