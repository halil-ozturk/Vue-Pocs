const state = {
    denemeVerisi: null,
}

const getters = {
    getData(state) {
        return state.denemeVerisi
    }
}

const mutations = {
    updateData(state, value) {
        state.denemeVerisi = value;
    }
}

export default {
    state,
    getters,
    mutations
}