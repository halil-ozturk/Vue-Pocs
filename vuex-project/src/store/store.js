import { createApp } from 'vue';
import Vuex from "vuex";
import vuexDeneme from './modules/vuex-deneme';
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'
let Vue = createApp({})


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: "halil",
    },
    getters,
    mutations,
    // Veritabanından veya bir Apiden Yararlanacaksak mutations işimize yaramıyor. Asenkron çalışan Actions yapısına ihtiyacımız var.
    actions,
    // örnekAction({commit}, payload){
    //     Burada yapacağımız işlemler bulunacak. Payload ise bizim dışarıdan aldığımız parametremiz.
    //Bu durum mutationslar için de aynı şekilde geçerli.
    // }
    modules: {
        vuexDeneme
    }
});