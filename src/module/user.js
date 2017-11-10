import * as types from './types'

// 数据集合
const state = {
    count : 2220,
    users : []  
}

const actions = {
    /**
     * 请求用户信息
     */
    getUserData({ commit }) {
        commit(types.GET_USER_DATA);
    },
    removeUser({ commit }, id) {
        commit(types.REMOVE_USER_INDEX);
    }
}

const getters = {
    plugCount: state => state.count
}

const mutations = {
    [types.GET_USER_DATA](state) {
        //state.users.splice(0,1);
        state.users = [
            {name:"zhangsan","age":20},
            {name:"lisi","age":20},
            {name:"wangwu","age":20},
            {name:"zhaoliu","age":20},
            {name:"zhaossliu","age":20}
        ];
    },
    [types.INCREMENT](state) {
        state.count++
    },
    [types.REMOVE_USER_INDEX](state,idx) {
        state.users.splice(idx,1);
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}