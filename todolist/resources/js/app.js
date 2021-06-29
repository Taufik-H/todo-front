
import axios from 'axios'
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}


// vue router 
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// inisiasi folder router
import routes from './router'

Vue.component('sidebar', require('./components/Sidebar.vue').default);

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
});