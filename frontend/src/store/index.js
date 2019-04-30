import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: ''
    },
    mutations: {
        updateToken(state, token) {
            state.token = token;
        }
    },
    actions: {
        updateToken(context, token) {
            context.commit('updateToken', token);
        }
    }
});
