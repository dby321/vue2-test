// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 备份push
let originPush=VueRouter.prototype.push;
let originReplace=VueRouter.prototype.replace;
Vue.prototype.push=function(location,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}
Vue.prototype.replace=function(location,resolve,reject){
    if(resolve&&reject){
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
}

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
