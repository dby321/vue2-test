import Vue from 'vue';
import Vuex from 'vuex';
import home from '@/store/home/index'
Vue.use(Vuex);


export default new Vuex.Store({

    // state:{},// 仓库存储数据的地方
    // mutations:{},// 修改state的唯一手段
    // actions:{},// 处理业务逻辑，可以处理异步
    // getters:{},// 理解为计算属性
    // modules:{}
    modules:{home}
});
