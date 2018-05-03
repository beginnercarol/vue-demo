// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Component from 'vue-class-component';
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false;
Vue.use(ElementUI,{ size: 'small' });
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});

// @Component({
//   components: {
//     App
//   }
// })
// export default class extends Vue {
//     name: 'app'
// }
