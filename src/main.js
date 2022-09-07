import Vue from 'vue';
import App from './App';
import router from '@/router/router';
import store from '@/store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/mock/mockServe'
Vue.use(ElementUI);
new Vue({
    render:h=>h(App),
    router,
    store
}).$mount("#app")
