import Vue from 'vue';
import axios from 'axios';

export default ({
    namespaced:true,
    state:{
        products: [],
    },
    actions:{
        getProducts(context,{ isPagination, page }){
            let url;
            if(isPagination){
                url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMAPIPATH}/admin/products?page=${page}`;
            }else{
                url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMAPIPATH}/products/all`;
            }
            context.commit('LOADING',true,{ root:true });
            axios.get(url).then((response)=>{
                if(response.data.success){
                    context.commit('PRODUCTS', response.data.products);
                    if(isPagination){
                        context.commit('PAGINATION', response.data.pagination, {root:true});
                    }
                }
                console.log(response.data);
                console.log(url);
                context.commit('LOADING',false,{ root:true });
            });
        },
    },
    mutations:{
        PRODUCTS(state,payload){
            state.products = payload;
        }
    },
    getters:{
        products(state){
            return state.products;
        }
    },
});