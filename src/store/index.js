import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';

import productsModules from './products';
import cartsModules from './cart';
import alertMessageModules from './alertMessage';
Vue.use(Vuex);

export default new Vuex.Store({
    strict:true, // 嚴謹模式
    state:{
        isLoading:false,
        pagination: {},
    },
    actions:{
        //payload 載荷
        updateLoading(context,status){
            context.commit('LOADING',status);
        },
    },
    mutations:{
        LOADING(state,status){
            state.isLoading = status;
        },
        PAGINATION(state,payload){
            state.pagination = payload;
        }
    },
    getters:{
        isLoading(state){
            return state.isLoading;
        },
        pagination(state){
            return state.pagination;
        },
    },
    modules:{
        productsModules,
        cartsModules,
        alertMessageModules,
    }
});