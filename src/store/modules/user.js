import * as types from '@/store/types';

const state = {
    token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : ''
}

const getters = {
    token: state => state.token
}

const actions = {
    STORE_TOKEN({commit}, res) {
        sessionStorage.setItem('token', res)
        commit(types.STORE_TOKEN, res);
    }
}

const mutations = {
    [types.STORE_TOKEN](state, res) {
        state.token = res;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
