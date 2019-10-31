<template>
    <div class="mb-2">
        <loading :active.sync="isLoading"></loading>
        <div class="card border-0 shadow-sm">
            <a href="#" class="petproduct-img" @click.prevent="productContent(cardItem.id)">
                <div style="height: 150px; background-size: cover; background-position: center"
                :style="{backgroundImage:`url(${cardItem.imageUrl})`}">
                </div>
            </a>
            <div class="card-body">
                <span class="badge badge-secondary float-right ml-2">{{cardItem.category}}</span>
                    <h5 class="card-title">
                        <a href="#" class="text-dark" @click="productContent(cardItem.id)">
                            <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === cardItem.id"></i>
                            {{cardItem.title}}
                        </a>
                    </h5>
                    <p class="card-text">{{cardItem.description}}</p>
                    <div class="d-flex justify-content-between align-items-end">
                        <div>
                            <div class="h5" v-if="!cardItem.price">{{cardItem.origin_price | currency}}</div> 
                            <div class="h6 originprice" v-if="cardItem.price">原價 {{cardItem.origin_price | currency}}</div>
                            <div class="h4 text-danger" v-if="cardItem.price">{{cardItem.price | currency}}</div>
                        </div>
                        <div class="">
                            <a href="#" class="btn btn-primary rounded-circle text-white p-2"
                            @click="addtoCart(cardItem.id,1)">
                            <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === cardItem.id"></i>
                            <i class="fas fa-shopping-cart fa-2x"></i>
                            </a>
                        </div>
                    </div>
            </div>
        </div>   
               <!-- pagination -->
        <Pagination :pagination="pagination" v-on:getPage="getProducts" v-if="pagination"/>   
          
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

import Pagination from '@/components/Pagination';
export default {
    props:['cardItem'],
    data(){
        return{
            status:{
                loadingItem:'',
            },
        }
    },
    methods:{
        getProducts() {
             this.$store.dispatch('productsModules/getProducts', {isPagination: false, page: 1});
        },
        addtoCart(id,qty = 1){
            this.$store.dispatch('cartsModules/addtoCart', { id, qty });
        },
        
        productContent(id){
            const vm = this;
            vm.$router.push(`product/${id}`);
        },
    },
    computed:{
        isLoading(){
            return this.$store.state.isLoading;
        },
        ...mapGetters(['isLoading']),
        ...mapGetters('productsModules',['products']),
        ...mapGetters(['pagination']),
    },
     created() {
        //this.getCart();
         this.getProducts();
    },
}
</script>
