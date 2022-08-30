// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);

// 配置路由
export default new VueRouter({
    routes:[
        {
            path:"/home",
            name:'home',
            component:()=>import('@/pages/Home/HomePage')
        },
        {
            path:"/search",
            name:'search',
            component:()=>import('@/pages/Search/SearchPage')
        }
    ]
})