import axios from 'axios';
import { stat } from 'fs';

export default ({
    namespaced:true,
    state:{
        cart:{
            carts:[],
       }, 
       cartsLength: 0,
    },
    actions:{
        getCart(context){
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMAPIPATH}/cart`;
            context.commit('LOADING',true,{ root:true });
             axios.get(url).then((response)=>{
                 if(response.data.data.carts){
                    context.commit('CART', response.data.data);
                    context.commit('CART_LENGTH', response.data.data.carts.length);
                 }
                 console.log('取得購物車',response.data.data);
                 context.commit('LOADING',false,{ root:true });
            
          });
        },
        removeCartItem(context,id){
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMAPIPATH}/cart/${id}`;
             context.commit('LOADING',true,{ root:true });
             axios.delete(url).then((response)=>{
                context.dispatch('getCart');
                context.dispatch('alertMessageModules/updateMessage', { message: response.data.message, status: 'warning' }, { root: true });
                 context.commit('LOADING',false,{ root:true });
            
          });
        },
        addtoCart(context,{id,qty}){
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMAPIPATH}/cart`;
             const cart = {
                 product_id:id,
                 qty,
             };
             context.commit('LOADING',true,{ root:true });
             axios.post(url,{data:cart}).then((response)=>{
                 console.log(response.data);
                 context.dispatch('getCart');
                context.dispatch('alertMessageModules/updateMessage', { message: response.data.message, status: 'warning' }, { root: true });
                 context.commit('LOADING',false,{ root:true });
            
          });
        },
    },
    mutations:{
        CART(state,payload){
            state.cart = payload;
        },
        CART_LENGTH(state,payload){
            state.cartsLength = payload;
        }
    },
    getters:{
        cart(state){
            return state.cart;
        },
        cartsLength(state){
            return state.cartsLength;
        }
    }
});