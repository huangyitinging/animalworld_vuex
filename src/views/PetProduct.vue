<template>
    <div class="container">
        <loading :active.sync="isLoading"></loading>
        <div class="petbanner"></div>
        <BreadCrumb :select="filterName"></BreadCrumb>
        <div class="row">
            <div class="col-md-3 mb-3">
                <div class="sticky-top">
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action"
                            :class="{'active': filterName == '全部商品'}"
                            @click.prevent="changeCategory('全部商品')">
                            <i class="fas fa-paw mr-1"></i>全部商品
                        </a>
                        <a href="#" class="list-group-item list-group-item-action"
                            :class="{'active': filterName == '汪罐罐'}"
                            @click.prevent="changeCategory('汪罐罐')">
                            <i class="fas fa-drumstick-bite mr-1"></i>汪罐罐
                        </a>
                        <a href="#" class="list-group-item list-group-item-action"
                            :class="{'active': filterName == '喵罐罐'}"
                            @click.prevent="changeCategory('喵罐罐')">
                            <i class="fas fa-cookie-bite mr-1"></i>喵罐罐
                        </a>
                        <a href="#" class="list-group-item list-group-item-action"
                            :class="{'active': filterName == '玩具'}"
                            @click.prevent="changeCategory('玩具')">
                            <i class="fab fa-xbox mr-1"></i>玩具
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
               <div class="row">
                   <div class="col-lg-4 col-md-6 mb-3" v-for="item in filterProduct" :key="item.id">
                       <ProductCard :card-item="item"></ProductCard>
                   </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';

import $ from 'jquery';
import BreadCrumb from '@/components/BreadCrumb';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

export default {
    data(){
        return{
            select:'全部商品',
            product:{},
            filterName:'全部商品',
            status:{
                loadingItem:'',
            },
        };
    },
    methods:{
        getProducts(){
            //this.$store.dispatch('getProducts');
             this.$store.dispatch('productsModules/getProducts', {isPagination: false, page: 1});
        },
       // ...mapActions('productsModules', ['getProducts']),  
        changeCategory(category){
            const vm = this;
            vm.filterName = category;
        }
    },
    computed:{
        filterProduct(){
            const vm = this;
            if(vm.filterName === '全部商品'){
                return vm.products;
            }else{
                return vm.products.filter((item)=>item.category === vm.filterName);
            }
        },
        isLoading(){
            return this.$store.state.isLoading;
        },
        ...mapGetters(['isLoading']),
        ...mapGetters('productsModules',['products'])
    },
    components:{
        BreadCrumb,
        ProductCard,
        Footer,
    },
    created(){
        this.getProducts();
    }
}
</script>



<style lang="scss">
.petbanner{
    background-image: url(https://i.imgur.com/wraYLLg.pngg);
    width: 100%;
    height:200px;
    background-position:center;
    background-size:contain;
    margin-top:1.5rem;
}
.originprice{
    text-decoration:line-through;
}
.petproduct-img:hover{
    position: relative; 
    top: 1px;
    left: 1px;
}
</style>