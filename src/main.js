import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import store from './store';

import axios from 'axios' ; //主要AJAX套件
import VueAxios from 'vue-axios' ;   //將它轉為 ＶＵＥ的套件
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate';
import VueI18n from 'vue-i18n';
import zh_TW from 'vee-validate/dist/locale/zh_TW';
import router from './router'
import './bus';
import currencyFilter from './filters/currency';

Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.component('Loading',Loading);
Vue.filter('currency',currencyFilter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false
axios.defaults.withCredentials = true;

new Vue({ 
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zh_TW'
});
 
Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    zh_TW
  }
});