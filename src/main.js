import Vue from 'vue';
import App from './App';
import router from '@/router/router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
new Vue({
    render:h=>h(App),
    router
}).$mount("#app")
